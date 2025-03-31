---
sidebar_position: 1
---

# Exercice 1

On commence tout doucement avec un exercice basique en creant un type utilitaire pour generer des types opaques

Rien ne ressemble plus à un id qu'un autre id, alors faison en sorte que ce ne soit pas de simple `string` et laissons Typescript nous aider à toujours fournir la bonne donné au bon endroit 💪

:::tip Ressources

- [Types generiques](../typescript/generic.md)
- [Template literal](../typescript/template_literal.md)

:::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hesitez pas a nous solliciter ! </summary>

    ```ts
    export type UUID<T extends string> = Opaque<string, `${T}_uuid`>;
    ```

</details>
