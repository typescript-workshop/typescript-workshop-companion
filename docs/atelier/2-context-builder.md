---
sidebar_position: 2
---

# Exercice 2

Afin de représenter nos requêtes SQL, nous allons créer un contexte qui sera propagé aux differentes fonctions que nous allons créer par la suite.

:::tip Ressources

- [Types generiques](../typescript/generic.md)

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
