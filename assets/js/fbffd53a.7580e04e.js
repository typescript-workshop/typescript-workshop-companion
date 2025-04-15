"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[350],{5590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"typescript/template-literal","title":"Template Literals","description":"Literal types","source":"@site/docs/typescript/template-literal.md","sourceDirName":"typescript","slug":"/typescript/template-literal","permalink":"/typescript-workshop-companion/docs/typescript/template-literal","draft":false,"unlisted":false,"editUrl":"https://github.com/typescript-workshop/typescript-workshop-companion/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/template-literal.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Types g\xe9n\xe9riques","permalink":"/typescript-workshop-companion/docs/typescript/generic"},"next":{"title":"Mapped Types ou Types mapp\xe9s","permalink":"/typescript-workshop-companion/docs/typescript/mapped-types"}}');var s=t(4848),i=t(8453);const a={sidebar_position:8},o="Template Literals",p={},l=[{value:"Literal types",id:"literal-types",level:2},{value:"Templates",id:"templates",level:2},{value:"Inference",id:"inference",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"template-literals",children:"Template Literals"})}),"\n",(0,s.jsx)(n.h2,{id:"literal-types",children:"Literal types"}),"\n",(0,s.jsxs)(n.p,{children:["Les ",(0,s.jsx)(n.em,{children:"types litt\xe9raux"})," permettent de restreindre un type \xe0 une valeur sp\xe9cifique. Par exemple :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'type French = "french";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"templates",children:"Templates"}),"\n",(0,s.jsxs)(n.p,{children:["Il est \xe9galement possible de d\xe9finir des ",(0,s.jsx)(n.em,{children:"gabarits"})," de types litt\xe9raux"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type CurrentLanguageInfo = `You are browsing our site's ${string} version`; // <= this is a 'template' literal type\n\nconst displayCurrentLanguageInfo = (\n  currentLanguage: string\n): CurrentLanguageInfo => {\n  return `You browsing our site's ${currentLanguage} version`;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Quand une union est employ\xe9e dans une section interpol\xe9e, le type r\xe9sultant est l'ensemble des combinaisons d\xe9coualnt de chaque membre de l'union :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'type English = "english";\ntype French = "french";\n\ntype CurrentLanguageInfo = `You are browsing our site\'s ${\n  | French\n  | English} version`;\n// type CurrentLanguageInfo = "You are browsing our site\'s french version" | "You are browsing our site\'s french version"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"inference",children:"Inference"}),"\n",(0,s.jsx)(n.p,{children:"Il est possible d'inf\xe9rer un type \xe0 partir d'un gabarit par substitution."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'type FrenchSpeakingCountryCode<Locale> = Locale extends `fr_${infer Country}`\n  ? Country\n  : never;\n\ntype FranceCountryCode = FrenchSpeakingCountryCode<"fr_FR">; // "FR"\ntype CanadaCountryCode = FrenchSpeakingCountryCode<"fr_CA">; // "CA"\ntype BelgiumCountryCode = FrenchSpeakingCountryCode<"fr_BE">; // "BE"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);