---
sidebar_position: 2
---

# Exercice 2

Que serait une requête SQL sans database associée et comment les représenter en TypeScript?

Nous allons créer un contexte qui sera propagé aux differentes fonctions que nous allons créer par la suite. Au fur et à mesure des exercices nous aurons besoin de l'enrichir mais pour le moment notre database suffit.

Rendez-vous dans le fichier 2-context-builder.spec.dt.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)
  :::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    export const buildContext = <DB>() => {
      return {
        _db: undefined as any as DB,
      };
    };
    ```

</details>
