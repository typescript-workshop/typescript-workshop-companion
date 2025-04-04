---
sidebar_position: 9
---

# Exercice 9

Prêt.e pour le dernier exercice ? C'est partit !

L'autocomplétion, une gestion claires des erreurs, etc. facilitent grandement notre quotidien de développeur. C'est la raison pour laquelle nous vous proposons de refactorer le code que nous avons écrit dans le but d'améliorer notre développeur expérience.

L'ensemble des tests seront là pour nous assurer que nous n'introduisons pas de regression.

Rendez-vous dans le fichier 9-ameliorer-dx.spec-d.ts et db.ts pour l'implémentation.

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
