"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[205],{8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>p});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},9350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"typescript/keyof","title":"Keyof","description":"L\'operateur keyof permet de recuperer les cl\xe9s d\'un type","source":"@site/docs/typescript/keyof.md","sourceDirName":"typescript","slug":"/typescript/keyof","permalink":"/typescript-workshop-companion/docs/typescript/keyof","draft":false,"unlisted":false,"editUrl":"https://github.com/typescript-workshop/typescript-workshop-companion/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/keyof.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Types generiques","permalink":"/typescript-workshop-companion/docs/typescript/generic"},"next":{"title":"Conditional type","permalink":"/typescript-workshop-companion/docs/typescript/conditional-types"}}');var o=r(4848),s=r(8453);const i={sidebar_position:3},p="Keyof",c={},a=[{value:"Utilisation courante",id:"utilisation-courante",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"keyof",children:"Keyof"})}),"\n",(0,o.jsxs)(t.p,{children:["L'operateur ",(0,o.jsx)(t.code,{children:"keyof"})," permet de recuperer les cl\xe9s d'un type"]}),"\n",(0,o.jsx)(t.h2,{id:"utilisation-courante",children:"Utilisation courante"}),"\n",(0,o.jsx)(t.p,{children:"La plupart du temps vous voudrez l'utiliser lors de la transformation d'un type avec un mapped type ou pour appliquer des contraintes sur un type generique."}),"\n",(0,o.jsx)(t.p,{children:"Grace \xe0 cette op\xe9rateur vous pourrez recuperer les cl\xe9s d'un objet"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'type Foo = {\n  bar: string;\n  bie: number;\n};\ntype Keys = keyof Foo;\n//    ^? type Keys = "bar" | "bie"\ntype Bar = Foo["bar"];\n//    ^? type Bar = string\n'})}),"\n",(0,o.jsx)(t.p,{children:"il est aussi possible de l'utiliser sur des tableaux"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'type Foo = ["bar", "bie"];\ntype Keys = keyof Foo;\n//    ^? type Keys = number | typeof Symbol.iterator | typeof Symbol.unscopables | "0" | "1" | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | ... 23 more ... | "at"\ntype Result = Foo["length"];\n//    ^? type Result = 2\ntype Result2 = Foo[number];\n//    ^? type Result2 = "bar" | "bie"\ntype Result3 = Foo["0"];\n//    ^? type Result3 = "bar"\n'})}),"\n",(0,o.jsx)(t.h1,{id:"bon-\xe0-savoir",children:"Bon \xe0 savoir"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"keyof"})," peut etre utilis\xe9 sur n'importe quel type"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'type Foo = "barbie";\ntype Keys = keyof Foo;\n//    ^? type Keys = number | typeof Symbol.iterator | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | ... 37 more ... | "at"\ntype Result = Foo["indexOf"];\n//    ^? type Result = (searchString: string, position?: number) => number\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);