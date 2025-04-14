---
sidebar_position: 1
---

# Exercice 1

:::note TODO

- Rajouter un exemple avec des pommes
- Expliciter le concept du type opaque et donner un exemple.
- Enlever le symbol le mettre peut être plutôt en pour aller plus loin. ✅

- Pas clair
  :::

On commence tout doucement avec un exercice basique en créant un type utilitaire pour générer des types opaques.

Rien ne ressemble plus à un id qu'un autre id, alors faisons en sorte que ce ne soit pas de simple `string` et laissons TypeScript nous aider à toujours fournir la bonne donnée au bon endroit 💪

Autre avantage, à la lecture cela nous permettra de faire le lien entre le métier et le code plus facilement.

:::tip Ressources

- [Types génériques](../typescript/generic.md)
- [Template literal](../typescript/template-literal.md)

:::

## Solution

<details>
  <summary>Avant de déplier pour afficher la solution, n'hésitez pas à nous solliciter ! </summary>

    ```ts
    export type UUID<T extends string> = Opaque<string, `${T}_uuid`>;
    ```

</details>
