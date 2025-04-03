---
sidebar_position: 6
---

# Exercice 6

:::tip Ressources

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
