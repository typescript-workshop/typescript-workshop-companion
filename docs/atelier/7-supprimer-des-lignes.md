---
sidebar_position: 7
---

# Exercice 7

Rendez-vous dans le fichier `7-supprimer-des-lignes.spec-d.ts` et `db.ts` pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)
- [Types conditionnels](../typescript/conditional-types.md)

:::

## Indice 1
<details>
  <summary>Choix de l'opération</summary>

  On peut s'attendre à ce que `deleteFrom` opére dans un contexte similaire à `selectFrom`. D'ailleurs la seule différence est que cette fonction viendra enrichir le contexte qui lui est fourni avec un _autre type d'opération_. 
  
</details>

## Indice 2
<details>
  <summary>Jusqu'**où** cela nous mène</summary>

  On avait typé la fonction `where` pour qu'elle opère à partir d'un _contexte_ de **sélection**. Il faut à présent prendre en compte qu'elle peut également opérer dans un contexte de **suppression** 
  
</details>

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    type DeletableContext<DB> = EmptyContext<DB> & {
      _operation: "delete";
      _table: keyof DB;
    };

    export const deleteFrom = <
      Ctx extends AnyEmptyContext,
      TB extends keyof Ctx["_db"]
    >(
      ctx: Ctx,
      tableName: TB
    ) => ({
      ...ctx,
      _operation: "delete" as const,
      _table: tableName,
    });
    ```

    Il faudra aussi modifier la signature de `where` pour qu'elle accepte également un `DeletableContext`.

    ```ts
    type AnyQueryableContext = SelectableContext<any> | DeletableContext<any>;

    export const where = <
      Ctx extends AnyQueryableContext,
      Field extends keyof Ctx["_db"][Ctx["_table"]]
    >(...) => {...}
    ```

</details>
