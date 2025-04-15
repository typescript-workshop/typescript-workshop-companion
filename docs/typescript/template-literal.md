---
sidebar_position: 11
---

# Template Literals

## Literal types

Les _types littéraux_ permettent de restreindre un type à une valeur spécifique. Par exemple :

```ts
type French = "french";
```

## Templates

Il est également possible de définir des _gabarits_ de types littéraux

```ts
type CurrentLanguageInfo = `You are browsing our site's ${string} version`; // <= this is a 'template' literal type

const displayCurrentLanguageInfo = (
  currentLanguage: string
): CurrentLanguageInfo => {
  return `You browsing our site's ${currentLanguage} version`;
};
```

Quand une union est employée dans une section interpolée, le type résultant est l'ensemble des combinaisons découlant de chaque membre de l'union :

```ts
type English = "english";
type French = "french";

type CurrentLanguageInfo = `You are browsing our site's ${
  | French
  | English} version`;
// type CurrentLanguageInfo = "You are browsing our site's french version" | "You are browsing our site's french version"
```

## Inference

Il est possible d'inférer un type à partir d'un template par substitution.

```ts
type FrenchSpeakingCountryCode<Locale> = Locale extends `fr_${infer Country}`
  ? Country
  : never;

type FranceCountryCode = FrenchSpeakingCountryCode<"fr_FR">; // "FR"
type CanadaCountryCode = FrenchSpeakingCountryCode<"fr_CA">; // "CA"
type BelgiumCountryCode = FrenchSpeakingCountryCode<"fr_BE">; // "BE"
```
