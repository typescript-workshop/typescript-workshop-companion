---
sidebar_position: 3
---

# Conditional type

Le systeme de type permet d'ajouter des conditions afin de produire des types en fonctions de certaines conditions avec le mot-clé `extends`

Il est important de bien assimilé la hierachie des types afin de maitriser les types conditionnels.

## Types par défaut

```ts
type Exclude<T, U> = T extends U ? never : T;

type Extract<T, U> = T extends U ? T : never;
```

:::tip
Vous trouverez la liste exhaustive des utilitaires inclus avec Typescript

https://www.typescriptlang.org/docs/handbook/utility-types.html
:::

### Match or Equal

Grace au typage conditionnel nous pouvons par exemple créer des types utilitaires pour des tests

```ts
type A = { foo: string };
type B = { foo: string; bar: string };
type Match = B extends A ? "is matching" : "is not matching";
//    ^? type Match = "is matching"
type Match2 = A extends B ? "is matching" : "is not matching";
//    ^? type Match2 = "is not matching"
```

Ici `B extends A` est valide car `B` est une version plus specialisée de `A`, l'object comporte donc à minima toutes les prorietés de `A`

```ts
type A = { foo: string };
type B = { foo: string; bar: string };
type Equal = B extends A
  ? A extends B
    ? "is equal"
    : "is not equal"
  : "is not equal";
// type Equal = "is not equal"
```

:::tip
La lecture du typage Typescript etant compliquée, n'hesitez pas a tester vos types

https://vitest.dev/api/expect-typeof.html
:::
