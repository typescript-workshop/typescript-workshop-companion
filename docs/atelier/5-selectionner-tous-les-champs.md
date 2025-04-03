---
sidebar_position: 5
---

# Exercice 5

:::tip Ressources

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
