---
sidebar_position: 5
---

# Exercice 5

Qui n'a jamais eu besoin de sélectionner tous les champs d'une table ?

Maintenant que TypeScript a de moins en moins de secrets pour vous, nous vons proposons dans cet exercice de faire évoluer le typage afin de pouvoir sélectionner l'ensemble des champs d'une table.

Rendez-vous dans le fichier 5-selectionner-tous-les-champs.spec-d.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Types conditionnels](../typescript/conditional-types.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    export const selectAll = <Ctx extends AnySelectableContext>(ctx: Ctx) => ({
      ...ctx,
      _fields: "ALL" as const,
    });
    ```

</details>
