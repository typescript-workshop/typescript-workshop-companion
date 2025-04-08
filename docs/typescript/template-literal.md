---
sidebar_position: 7
---

# Template Literal

Les _types littéraux_ permettent de restreinte un type à une valeur spécifique. Par exemple :

```ts
type French = 'french'
```

Il est également possible de définir des _gabarits_ de types littéraux

```ts
type CurrentLanguageInfo = `You are browsing our site's ${string} version` // <= this is a 'template' literal type

const displayCurrentLanguageInfo = (currentLanguage: string): CurrentLanguageInfo => {
    return `You browsing our site's ${currentLanguage} version`
}
```

Quand une union est employée dans une section interpolée, le type résultant est l'ensemble des combinaisons découalnt de chaque membre de l'union :

```ts
type English = 'english'
type French = 'french'

type CurrentLanguageInfo = `You are browsing our site's ${French | Englifh} version`
// type CurrentLanguageInfo = "You are browsing our site's french version" | "You are browsing our site's french version"

```
