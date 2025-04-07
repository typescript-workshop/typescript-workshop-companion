---
sidebar_position: 4
---

# Exercice 4

Nous vous proposons de typer la fonction `selectFields` qui, à partir du typage de notre database, sera capable d'inférer les noms des champs qu'il est possible de sélectionner au sein d'une table.

Rendez-vous dans le fichier 4-selectionner-des-champs.spec-d.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)

:::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    type SelectableContext<DB> = EmptyContext<DB> & {
      _operation: "select";
      _table: keyof DB;
    };
    type AnySelectableContext = SelectableContext<any>;
    export const selectFields = <Ctx extends AnySelectableContext>(
      ctx: Ctx,
      fieldNames: (keyof Ctx["_db"][Ctx["_table"]])[]
    ) => ({
      ...ctx,
      _fields: fieldNames,
    });
    ```

</details>
