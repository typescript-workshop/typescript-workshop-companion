---
sidebar_position: 2
---

# Exercice 2

:::note TODO
C'est pas clair du tout il faudrait le raccrocher à un cas plus concret.
:::

`$db` type qui n'a pas vocation a être utilisée au runtime.

Que serait une requête SQL sans database associée et comment les représenter en TypeScript?

Nous allons créer un contexte qui sera propagé aux differentes fonctions que nous allons créer par la suite. Au fur et à mesure des exercices nous aurons besoin de l'enrichir mais pour le moment notre database suffit.

Rendez-vous dans le `fichier 2-context-builder.spec.dt.ts` et `db.ts` pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Indice 1

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

Pour commencer on voit dans le test qu'on s'attend à ce que l'implémentation de `buildContext` prenne un type en paramètre, un peu comme dans l'exemple ci-après :

```ts
const buildSomething = <T>() => {
  // return said something that is somewhat based on `T`
};
```

</details>

## Indice 2

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

Dans le cas présent nous avons des informations que Typescript n'a pas _à priori_ (le type de notre base de données). Nous pouvons lui apporter plus de précision au lieu de laisser le compilateur tenter d'en inférer le type.

On parle alors de _type assertion_ ou bien de _type casting_ voire, en français d'_affirmation de type_.

Il existe deux syntaxes pour cela, `<>` et le mot-clé `as`. Par exemple, ci-dessous, Typescript pourrait difficilement connaitre le type d'un élément qu'on extrait du DOM.

```ts
// Nous savons que l'élément avec l'id 'name' est un input HTML mais Typescript ne pouvant le deviner on peut le lui spécifier
const nameInput = document.getElementById("name") as HTMLInputElement;
// ou sinon
const nameInput = <HTMLInputElement>document.getElementById("name");
```

Et dans notre cas :

```ts
const buildContext = () => {
  return {
    _db: undefined, // <= ça pourrait se passer ici...
  };
};
```

Parfois le mot clé `as` (en conjonction avec `any`) peut s'avérer bien utile !.
On peut se douter que _caster_ `undefined` directement vers le type de notre base de données

</details>

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts

    type EmptyContext<DB> = {
      /*
      * @deprecated type only, do not use at runtime
      */
      $db: DB
    }

    export const buildContext = <DB>() => {
    return {} as EmptyContext<DB>;
    };
    ```

</details>
