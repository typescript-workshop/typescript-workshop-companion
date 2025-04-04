---
sidebar_position: 7
---

# Exercice 7

Rendez-vous dans le fichier 7-supprimer-des-lignes.spec-d.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

:::

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

    Il faudra aussi modifier le typage de la fonction `where` pour aussi accepter le `Deletablecontext`

    ```ts
    type AnyQueryableContext = SelectableContext<any> | DeletableContext<any>;

    export const where = <
      Ctx extends AnyQueryableContext,
      Field extends keyof Ctx["_db"][Ctx["_table"]]
    >(...) => {...}
    ```

</details>
