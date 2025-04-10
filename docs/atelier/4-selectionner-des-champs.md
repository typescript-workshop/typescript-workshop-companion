---
sidebar_position: 4
---

# Exercice 4

Nous vous proposons de typer la fonction `selectFields` qui, à partir du typage de notre database, sera capable d'inférer les noms des champs qu'il est possible de selectionner au sein d'une table.

Rendez-vous dans le fichier 4-selectionner-des-champs.spec-d.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)

:::

## Indice 1

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>
  
  On est dans le même genre de cas qu'à l'étape précédente, simplement cette fois-ci on veut pouvoir inférer le types de propriétés nichées un peu plus profondément que les noms des tables.

  Suite à l'invocation de `selectFrom` on dispose, dans notre _contexte_ d'un peu plus d'information : on sait que nous construisons une operation `select` et surtout quelle table nous allons interroger. Fort de cette information il est possible d'extraire depuis le _contexte_ les noms de champs de la table ciblée.

</details>

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
