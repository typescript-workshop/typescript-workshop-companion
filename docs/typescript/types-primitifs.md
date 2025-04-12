---
sidebar_position: 2
---

# Types primitifs

TypeScript comprend plusieurs types primitifs :

- string, ex : 'Devoxx'
- number, ex : 18
- boolean, true/false
- null
- undefined
- symbol : représente un identifiant unique, avec les strings, le symbol peut servir de clés de propriété d’objet.
- bigint : à utiliser pour les grands nombres dont la taille dépasse maximale dépasse 2^53.

Comment utiliser ces types ? Lorsque que vous souhaitez typer une variable const ou let, il vous suffit de préciser son type en suivant la syntaxe ci-dessous :

`const workshop : Mon Type = ...`

:::info L'inférence de type, quand le compilateur le déduit de lui-même.

Typer ses variables est important, pour autant il n'est pas indispensable de typer vos variables. En effet, à partir de valeur que vous assignez à votre variable le compilateur TypeScript sera capable d'en déduire son type. Ce phénomène de déduction de type est appelé inférence.

:::

:::tip La différence entre null et undefined

Le compilateur retournera `undefined` dans le cas où une variable est déclarée mais non initialisée.
Si l'on veut expliciter le fait qu'une variable n'a pas de valeur dans ce cas on utilisera le type `null`.

:::
