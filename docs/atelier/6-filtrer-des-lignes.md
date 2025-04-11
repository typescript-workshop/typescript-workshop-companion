---
sidebar_position: 6
---

# Exercice 6

Être capable de selectionner des lignes c'est bien, mais pouvoir les filtrer ça serait canon, qu'en pensez-vous ?

C'est partit implémentons une clause "where" ! L'objectif de cet exercice est d'à partir du typage actuel de le faire évoluer afin de pouvoir filtrer en fonction de critères définis.
Par exemple dans les tests nous nous amuserons à filtrer sur la date de naissance ou encore le prénom des utilisateurs.

Rendez-vous dans le fichier `6-filtrer-des-lignes.spec-d.ts` et `db.ts` pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [KeyOf & lookup](../typescript/keyof-lookup.md)
- [Types conditionnels](../typescript/conditional-types.md)

:::

## Indice 1
<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  La signature de `where` dépend d'un type de contexte (en l'occurence de _sélection_ dans une _table_ d'une base de donnée arbitraire) et d'un type de champ (qui dépend de la table ciblée)
  
</details>

## Indice 2
<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  Pour le moment nous n'implémentons qu'une clause d'égalité, un type littéral devrait faire l'affaire pour l'argument `operator` !
  
</details>

## Indice 3
<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  Au final on va utiliser ici beaucoup de choses qu'on a déjà pu aborder: _lookup types_, mots-clé _keyof_ ou _extends_. 
  
</details>

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    export const where = <
      Ctx extends AnySelectableContext,
      Field extends keyof Ctx["_db"][Ctx["_table"]]
    >(
      ctx: Ctx,
      field: Field,
      operator: "=",
      value: Ctx["_db"][Ctx["_table"]][Field]
    ) => ({
      ...ctx,
      _where: {
        field,
        operator,
        value,
      },
    });
    ```

</details>
