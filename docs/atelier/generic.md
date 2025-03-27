---
sidebar_position: 1
---

# Types generiques

## Usage autour de la fonction 'identité'

La fonction identité renvoie ce qu'on lui passe en argument...

```ts
const identity = (arg) => {
  return arg;
};
```

...et on s'attend du coup à ce que le type du retour de la fonction soit identique au type fourni en entrée.
On aimerait typer l'entrée et la sortie de cette fonction afin de s'assurer que cette contrainte est bien respectée, quel que soit le type de l'argument effectivement passé à `identity`.
Comme `identity` peut prendre un argument de n'importe quel type on pourrait être tentés de la typer ainsi :

```ts
const identity = (arg: any): any => {
  return arg;
};
```

Hélas, `any` est un peu trop permissif. Le compilateur typescript ne nous alerterait pas si l'on venait, par exemple, à modifier notre fonction de sorte à ce qu'elle renvoie une **string** lorsqu'on lui passe un **number**.

```ts
const identity = (arg: any):any => {
    return `${arg}`; // notre fonction renverra toujours une chaîne de caractères
}

identity(42); // --> '42'
identity('42'); // --> '42'
// et par ailleurs ...
identity(true): // --> 'true'
```

Mais on on voudrait bel et bien **garantir** qu'on obtiendra en sortie le même type qu'en entrée.
On pourrait envisager de surcharger la signature de notre fonction mais ce serait au prix (1) d'une grande verbosité et (2) d'un risque accru d'oubli.

```ts
function identity(a: number): number;
function identity(a: string): string;
function identity(a: boolean): boolean;
// ...et ainsi de suite avec enum, array...
function identity(arg) {
  return arg;
}
```

Mais en utilisant un type générique on peut déclarer de façon concise la contrainte qui lie les types d'entrée et de sortie de notre fonction identité :

```ts
// 'Type' est ici notre type générique
const identity = <Type>(arg: Type): Type => {
  return arg;
};

// En pratique on voit le plus souvent de tels types nommés 'T', 'U', etc...
const identity = <T>(arg: T): T => {
  return arg;
};

// Mais ce qui est essentiel c'est de le (ou les !) déclarer dans une paire de chevrons avant les arguments de la fonction

const identity = <JeanFooBar>(arg: JeanFooBar): JeanFooBar => {
  return arg;
};
const myFunction = <T, U>(a: T, b: U): { a: T; b: U } => {
  return { a, b };
};
```

Et ceci nous évitera d'écrire des bêtises comme celle évoquée plus haut :

```ts
const identity = <Type>(arg: Type): Type => {
  return `${arg}`;
};

// le compilateur typescript nous fera remarquer qu'on prétend accepter n'importe quel 'Type' en entrée pour un retour du même 'Type' alors que notre implémentation est vouée à retourner une string
```

## Aller ~plus~ _moins_ loin en appliquant des contraintes

Alors bien sûr dans de nombreux cas on voudra être tout de même moins permissifs et appliquer des contraintes sur nos types génériques, par exemple:

```ts
// cette fonction permet de fusionner deux objets
const merge = <U, V>(obj1: U, obj2: V) => ({
  ...obj1,
  ...obj2,
});

const user = merge({ name: "Jean-Foo-Bar" }, { age: 42 });
console.log(user); // { name: 'Jean-Foo-Bar', age: 42}

// on note au passage que nous employons deux types génériques dans la signature de _merge_, obj1 et obj2 n'étant pas (nécessairement) du même type
```

Telle qu'elle a été définie la fonction merge vise à fusionner deux objets mais rien ne nous empêche de lui passer des arguments qui ne sont pas des objets...

```ts
const otherUser = merge({ name: "Jean-Foo-Bar" }, 42);
console.log(otherUser); // { name: 'Jean-Foo-Bar'}
```

Heureusement nous pouvons spécifier que les types des arguments, bien que génériques doivent satisfaire la contrainte d'être d'un certain type, ici des _objets_, grâce au mot-clé `extends`.
Ainsi le compilateur nous alertera si on tente de fournir un argument qui ne satisfait pas cette contrainte.

```ts
const merge = <U extends object, V extends object>(obj1: U, obj2: V) => ({
  ...obj1,
  ...obj2,
});

const otherUser = merge(
  { name: "Jean-Foo-Bar" },
  42 // Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)
);
```

## Génériques sous contrainte, un exemple d'utilisation

On peut parfois avoir à faire à des types identiques bien qu'ils puissent représenter des choses différentes.
Par exemple un UUID (a.k.a. une chaîne de caractères) peut être l'identifiant d'un utilisateur (UserId) tandis qu'un autre pourrait être celui d'une entreprise (CompanyId).

Les types _opaques_ permettent de définir de telles distinctions et ainsi de s'assurer qu'on emploie telle ou telle variable à bon escient/

```ts
const uniqueOpaqueProperty = Symbol();
type Opaque<A, B extends string> = A & {
  [uniqueOpaqueProperty]: B;
};
```

Un types _opaques_ adjoint une sorte d'_étiquette_ à un type générique, ici "A" (qui peut donc être une instance de n'importe quel type).
"B" est également un type générique, avec la contrainte supplémentaire d'être une chaîne de caractères, ce qui nous permettra de construite l'_étiquette_ que nous venons d'évoquer.

Nous pourrons ainsi définir des types spécialisés, ce qui nous permettra de limiter les risques de faire des choses insensées comme passer l'identifiant d'une entreprise à une fonction qui n'est sensée traiter que des identifiants d'utilisateurs.

```ts
type UserId = UUID<"user">;
type CompanyId = UUID<"company">;

const linkUsers = (user1: UserId, user2: UserId) => {
  // on fait des traitements qui n'ont de sens qu'avec des identifiants d'utilisateurs
};
```

À vous de jouer ! Comment définiriez vous le type _opaque_ `UUID` qui permettrait de déclarer des types d'UUID spécialisés ?

```ts
// On veut pouvoir notamment distinguer deux spécialisations d'UUID
type UserId = UUID<"user">; // ce type portera l'étiquette 'user_uuid'
type CompanyId = UUID<"company">; // ce type portera l'étiquette 'company_uuid'
```

:::tip

<details>
<summary>Besoin d'un coup de pouce ?</summary>

Voici un exemple qui viserait à distinguer les vecteurs _position_ des vecteurs _vitesse_

```ts
type Vector3 = { x: number; y: number; z: number };

type Vector<B extends Vector3> = Opaque<Vector3, `${B}_vector`>;

// une position est un Vector3 qui porte l'étiquette 'position_vector'
type Position = Vector<"position">;
// une translation est aussi un Vector3 mais qui porte l'étiquette 'translation_vector'
type Translation = Vector<"translation">;

const updatedPosition = (
  origin: Position,
  movement: Translation
): Position => ({
  x: origin.x + movement.x,
  y: origin.y + movement.y,
  z: origin.z + movement.z,
});
```

Notre fonction ne manipule que des types Vector3, mais ces types sont 'spécialisés' afin de s'assurer qu'on ne passe pas un argument de type Position là où un type Translation est attendu (et inversement) par ailleurs on précise que c'est bien une Position que retournera notre fonction

</details>
:::
