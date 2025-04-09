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

  Pour commencer on voit dans le test qu'on s'attend à ce que l'implémentation de `buildContext` prenne un type en paramètre, un peu comme dans l'exemple ci-après : 

  ```ts
  const buildSomething = <T>() => {
    // return something
  }
  ```
</details>

## Indice 2

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

  Dans le cas présent nous avons des informations que Typescript n'a pas. Nous pouvons envisager de faire une _assertion de type_ pour lui apporter plus de précision.

  ```ts
  const nameInput = document.getElementById("name") as HTMLInputElement;
  // Nous savons que l'élément avec l'id 'name' est un input HTML mais Typescript ne pouvant le deviner on peut le spécifier

  ```

  Parfois le mot clé `as`, en conjonction avec `any` peut s'avérer bien utile !

  Et dans notre cas :

  ```ts
  const buildContext = () => {
  return {
    _db: undefined, // <= ça se passe ici
  };
};
  ```

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
