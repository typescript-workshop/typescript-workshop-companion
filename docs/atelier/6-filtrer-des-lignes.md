---
sidebar_position: 6
---

# Exercice 6

Être capable de selectionner des lignes c'est bien, mais pouvoir les filtrer ça serait canon, qu'en pensez-vous ?

C'est partit implémentons une clause "where" ! L'objectif de cet exercice est d'à partir du typage actuel de le faire évoluer afin de pouvoir filtrer en fonction de critères définis.
Par exemple dans les tests nous nous amuserons à filtrer sur la date de naissance ou encore le prénom des utilisateurs.

Rendez-vous dans le fichier 6-filtrer-des-lignes.spec-d.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [KeyOf](../typescript/keyof.md)
- [Operators](../typescript/operators.md)

:::

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
