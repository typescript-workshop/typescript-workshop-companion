---
sidebar_position: 3
---

# Exercice 3

Ça y est, nous avons créé un contexte qui contient notre database 🎉.

Maintenant, nous vous proposons à partir du typage de notre database d'apprendre à sélectionner spécifiquement une table de celle-ci. Pour cela il nous faudra jongler entre les typages de notre database, des tables et de la méthode selectFrom.

Rendez-vous dans le fichier 3-selectionner-une-table.spec.dt.ts et db.ts pour l'implémentation. À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf](../typescript/keyof.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)
  :::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    type EmptyContext<DB> = {
      _db: DB;
    };
    type AnyEmptyContext = EmptyContext<any>;

    export const selectFrom = <
      Ctx extends AnyEmptyContext,
      TB extends keyof Ctx["_db"]
    >(
      ctx: Ctx,
      tableName: TB
    ) => ({
      ...ctx,
      _operation: "select" as const,
      _table: tableName,
    });
    ```

</details>
