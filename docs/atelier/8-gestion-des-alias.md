---
sidebar_position: 8
---

# Exercice 8

Rendez-vous dans le fichier `8-gestion-des-alias.spec-d.ts` et `db.ts` pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [KeyOf & lookup](../typescript/keyof-lookup.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)
- [Types conditionnels](../typescript/conditional-types.md)

:::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  Alias sur les tables :

  ```ts
  type AliasedTabled<TB> = `${TB & string} ${string}`;
  //                  ^? le nom de la table    ^? son alias
  type TableOrAlias<TB> = TB | AliasedTabled<TB>;

  type AnyTable<Ctx extends AnyEmptyContext> = TableOrAlias<keyof Ctx["_db"]>;

  export const selectFrom = <
    Ctx extends AnyEmptyContext,
    TB extends AnyTable<Ctx>
  >(
    ctx: Ctx,
    tableName: TB
  ) => ({
    ...ctx,
    _operation: "select" as const,
    _table: tableName,
  });
  ```

  Alias sur les champs

  ```ts
  type AliasableField<DB extends AnyDB, TB extends keyof DB> =
    | keyof DB[TB]
    | `${keyof DB[TB] & string} as ${string}`;
    
  export type ExplicitableField<
    DB extends AnyDB,
    TB extends keyof DB
  > = TB extends `${infer Table} ${infer Alias}`
    ? AliasableField<DB, Table> | `${Alias}.${AliasableField<DB, Table> & string}`
    : //                               ^? On peut utiliser l'alias de la table (et/ou du champs)
        | AliasableField<DB, TB>
        | `${TB & string}.${AliasableField<DB, TB> & string}`;
        
  export const selectFields = <Ctx extends AnySelectableContext>(
    ctx: Ctx,
    fieldNames: ExplicitableField<Ctx["_db"], Ctx["_table"]>[]
  ) => ({
    ...ctx,
    _fields: fieldNames,
  });
  ```

</details>
