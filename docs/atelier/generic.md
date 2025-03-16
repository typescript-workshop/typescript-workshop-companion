---
sidebar_position: 1
---

# Types generiques

## Usage autour de la fonction 'identité'

La fonction identité renvoie ce qu'on lui passe en argument...

```
const identity = (arg) => {
    return arg;
}
```

...et on s'attend du coup à ce que le type du retour de la fonction soit identique au type fourni en entrée.
On aimerait typer l'entrée et la sortie de cette fonction afin de s'assurer que cette contrainte est bien respectée, quel que soit le type de l'argument effectivement passé à _identity_. 
Comme _identity_ peut prendre un argument de n'importe quel type on pourrait être tentés de la typer ainsi :

```
const identity = (arg: any):any => {
    return arg;
}
```

Hélas, 'any' est un peu trop permissif. Le compilateur typescript ne nous alerterait pas si l'on venait, par exemple, à modifier notre fonction de sorte à ce qu'elle renvoie une **string** lorsqu'on lui passe un **number**.

```
const identity = (arg: any):any => {
    return `${arg}`; // notre fonction renverra toujours une chaîne de caractères
}

identity(42); // --> '42'
identity('42'); // --> '42'
// et par ailleurs ...
identity(true): // --> 'true'
```

Mais on on voudrait bel et bien **garantir** qu'on obtiendra en sortie le même type qu'en entrée.
On pourrait envisager de surcharger la signature de notre fonction mais ce serait au prix (1) d'une grande verbosité et (2) d'un risque élévé d'oubli.

```
function identity(a: number): number;
function identity(a: string): string;
function identity(a: boolean): boolean;
// ...et ainsi de suite avec enum, array...
function identity(arg) {return arg}
```

Mais en utilisant un type générique on peut déclarer de façon concise la contrainte qui lie les types d'entrée et de sortie de notre fonction identité : 

```
// 'Type' est ici notre type générique
const identity = <Type>(arg: Type): Type => { return arg }

// En pratique on voit le plus souvent de tels types nommés 'T', 'U', etc...
const identity = <T>(arg: T): T => { return arg }

// Mais ce qui est essentiel c'est de le (ou les !) déclarer dans une paire de chevrons avant les arguments de la fonction

const identity = <JeanMichel>(arg: JeanMichel): JeanMichel => { return arg }
const myFunction = <T, U>(a: T, b: U): {a: T, b: U } => { return { a, b} }
```

Et ceci nous évitera d'écrire des bêtises comme celle évoquée plus haut :

```
const identity = <Type>(arg: Type): Type => { return `${arg}` }

// le compilateur typescript nous fera remarquer qu'on prétend accepter n'importe quel 'Type' en entrée pour un retour du même 'Type' alors que notre implémentation est vouée à retourner une string
```

## Aller ~plus~ _moins_ loin en appliquant des contraintes

Alors bien sûr dans de nombreux cas on voudra être tout de même moins permissifs et appliquer des contraintes sur nos types génériques, par exemple: 

```
// cette fonction permet de fusionner deux objets
const merge = <U, V>(obj1: U, obj2: V) => ({
        ...obj1,
        ...obj2
})

const user = merge(
    { name: 'Jean-Michel'},
    { age: 42}
)
console.log(user); // { name: 'Jean-Michel', age: 42}

// on note au passage que nous employons deux types génériques dans la signature de _merge_, obj1 et obj2 n'étant pas (nécessairement) du même type
```

Telle qu'elle a été définie la fonction merge vise à fusionner deux objets mais rien ne nous empêche de lui passer des arguments qui ne sont pas des objets...

```
const otherUser = merge(
        { name: 'Jean-Michel'},
        42
)
console.log(otherUser); // { name: 'Jean-Michel'}
```

Heureusement nous pouvons spécifier que les types des arguments, bien que génériques doivent satisfaire la contrainte d'être des _objets_.
Ainsi le compilateur nous alertera si on tente de fournir un argument qui ne satisfait pas cette contrainte.

```
const merge = <U extends object, V extends object>(obj1: U, obj2: V) => ({
        ...obj1,
        ...obj2
})

const otherUser = merge(
        { name: 'Jean-Michel'},
        42 // Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)

)
```

## Génériques sous contrainte, un exemple d'utilisation

Les types _opaques_ permettent de distinguer des types identiques bien qu'ils représentent des choses différentes.
Pas exemple si un UUID demeure au fond une chaîne de caractères, il peut servir d'identifiant à des ressources de diverses natures, natures que l'on peut souhaiter distinguer afin de ne pas faire un usage insensé de tel ou tel UUID.

Nos types _opaques_ adjoindront une sorte d'étiquette "B" à notre type générique "A". En l'espèce "A" peut être une instance de n'importe quel type.

```
const uniqueOpaqueProperty = Symbol();
type Opaque<A, B extends string> = A & {
  [uniqueOpaqueProperty]: B;
};
```

En revanche si l'étiquette "B" est également un type générique mais lui donnont la contrainte d'être une chaîne de caractères

Ceci nous permet de définir le type UUID qui prend en paramètre une chaîne de caractère qui servira à définir l'étiquette de types opaques.

```
type UUID<B extends string> = Opaque<string, `${B}_uuid`>;
```

Nous pourrons ainsi définir des UUID de différentes natures, ce qui nous permettra de faire des choses insensées comme passer l'id d'une _company_ à une fonction qui n'est sensée traiter que des id d'_users_.

```
type UserId = UUID<"user">;
type CompanyId = UUID<"company">;

const linkUsers = (user1: UserId, user2: UserId) => {
    // store user association in some way
} 

```






