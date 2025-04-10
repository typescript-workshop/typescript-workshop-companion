---
sidebar_position: 3
---

# Exercice 3

Niveau de difficulté : ⭐️⭐️⭐️

Ça y est, nous avons créé un contexte qui contient notre database 🎉.

Maintenant, nous vous proposons à partir du typage de notre database d'apprendre à sélectionner spécifiquement une table de celle-ci. Pour cela il nous faudra jongler entre les typages de notre database, des tables et de la méthode selectFrom.

Rendez-vous dans le fichier 3-selectionner-une-table.spec.dt.ts et db.ts pour l'implémentation. À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Indice 1

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>
  
  Si l'on souhaite bénéficier d'autocomplétion en invoquant `selectFrom` on peut inférer les noms des tables disponibles à partir du type de notre `Database` courante. Et la valeur adossée à la clé `_db` du _contexte_ est justement de type `Database`.

  ```ts
  type Database = {
  users: UserTable;
  companies: CompanyTable;
  };

  const context = buildContext<Database>();
  type Context = typeof context;
  // Context = { _db: Database }
  ```

  On peut accéder au type de `_db` au moyen d'un _lookup type_ via le type de notre _contexte_. 

</details>

## Indice 2

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  Ce qu'on peut imaginer serait d'extraire les noms des tables telles qu'elles existent dans la clé `_db` de notre _contexte_.
  
  Typiquement ici, les noms des tables auxquelles nous pourrions vouloir accéder sont les clés de l'objet en valeur de la clé `_db`. Pour extraire les clé d'un objet on dispose de l'opérateur `keyof`.

  Par exemple: 

  ```ts
  type ShopDatabase = {
    products: ProductTable,
    carts: CartTable
  }

  type TableNames = keyof ShopDatabase // "products" | "carts"
  ```

</details>

## Indice 3

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  On voit que `selectFrom` prend en premier paramètre un contexte initialisé avec le type d'une base de donnée. Il pourrait être utile que la signature de `selectFrom` prenne cela en compte.

  De part l'attendu de l'exercice précédent le type de retour de `buildContext<DB>()` nous est connu : 

  ```ts
  type EmptyContext<DB> = {
    _db: DB;
  };
  ```

  Mais nous ne connaissons pas à l'avance le type des bases de données qui seraient _in fine_ consommées par `selectFrom`.
  
  C'est un peu contraignant pour définir la signature de notre fonction de savoir qu'elle devra prendre en charge _n'importe quel_ (any ?) type de base donnée...


</details>

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
