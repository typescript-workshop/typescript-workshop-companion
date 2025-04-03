---
sidebar_position: 3
---

# Exercice 3

nous vous proposons à partir du typage de notre database d'apprendre à selectionner une table de celle-ci.

Rendez-vous dans le fichier 3-selectionner-une-table-spec.dt.ts et db.ts pour l'implementation.

À vous de jouer !

:::tip Ressources

- [Types generiques](../typescript/generic.md)
- [Template literal](../typescript/template-literal.md)

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
