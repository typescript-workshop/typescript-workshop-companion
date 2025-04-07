---
sidebar_position: 2
---

C'est pas clair du tout il faudrait le raccrocher à un cas plus concret.

# Exercice 2

Niveau de difficulté : ⭐️⭐️

Que serait une requête SQL sans database associée et comment les représenter en TypeScript?

Nous allons créer un contexte qui sera propagé aux differentes fonctions que nous allons créer par la suite. Au fur et à mesure des exercices nous aurons besoin de l'enrichir mais pour le moment notre database suffit.

Rendez-vous dans le fichier 2-context-builder.spec.dt.ts et db.ts pour l'implémentation.

À vous de jouer !

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Hiérarchie des types](../typescript/type-hierarchy.md)

:::

## Indice 1

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

ça se passe par ici

</details>

## Indice 2

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

Parfois les alias ou any peuvent s'avérer bien utilent.

</details>

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
