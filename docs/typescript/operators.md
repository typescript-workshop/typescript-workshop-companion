---
sidebar_position: 6
---

# Les opérateurs, préfixes et mots-clés

```ts
// soit le type
type Workshop = { name: string; schedule: number };
```

### keyof
L'opérateur `keyof` permet d'accéder aux clés des propriétés d'un objet.

```ts
type Workshop = { name: string; schedule: number };
type WorkshopKeys = keyof Workshop; // "name" | "schedule"
```

Si la signature des index est de type `string` ou `number` keyof retournera ces types 
```ts
type NumberIndexed = { [n: number]: unknown };
type NumberIndexedKeys = keyof NumberIndexed; // number
```

Attention, en Javascript les clés des objets sont toujours forcée en chaînes de caractère (`obj[0]` et `obj["0"]`sont équivalent) aussi, la signature d'une clé typé comme une chaîne de caractères sera en fait `string | number` 

```ts
type StringIndexed = { [n: string]: unknown };
type StringIndexedKeys = keyof StringIndexed; // string | number
```

### lookup type
    La syntaxe est `T[Y]` est permet d'accéder au type des propriétés d'un objet.
    Par exemple :

```ts
type Workshop = { name: string; schedule: number };
type WorkshopName = Workshop["name"]; // string
```