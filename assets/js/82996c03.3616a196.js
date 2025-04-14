"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[509],{3600:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"typescript/types-par-references","title":"Types par r\xe9f\xe9rences : Arrays, Tuples et Objets","description":"Les arrays et les tuples","source":"@site/docs/typescript/types-par-references.md","sourceDirName":"typescript","slug":"/typescript/types-par-references","permalink":"/typescript-workshop-companion/docs/typescript/types-par-references","draft":false,"unlisted":false,"editUrl":"https://github.com/typescript-workshop/typescript-workshop-companion/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/types-par-references.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Hi\xe9rarchies des types","permalink":"/typescript-workshop-companion/docs/typescript/type-hierarchy"},"next":{"title":"Affirmation de types et types sp\xe9ciaux","permalink":"/typescript-workshop-companion/docs/typescript/types-speciaux-affirmation-de-types"}}');var n=r(4848),p=r(8453);const o={sidebar_position:1},i="Types par r\xe9f\xe9rences : Arrays, Tuples et Objets",a={},c=[{value:"Les arrays et les tuples",id:"les-arrays-et-les-tuples",level:2},{value:"Les objets",id:"les-objets",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,p.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"types-par-r\xe9f\xe9rences--arrays-tuples-et-objets",children:"Types par r\xe9f\xe9rences : Arrays, Tuples et Objets"})}),"\n",(0,n.jsx)(s.h2,{id:"les-arrays-et-les-tuples",children:"Les arrays et les tuples"}),"\n",(0,n.jsx)(s.p,{children:"En TypeScript, les tableaux sont aussi appel\xe9s Arrays. Un array peut \xeatre contenir qu'un seul type, par exemple un tableau de string, number, etc."}),"\n",(0,n.jsxs)(s.admonition,{title:"Les deux syntaxes possibles pour \xe9crire le type d'un tableau",type:"tip",children:[(0,n.jsxs)(s.p,{children:["Premier cas : ",(0,n.jsx)(s.code,{children:"const myArray : type[]"})]}),(0,n.jsxs)(s.p,{children:["Deuxi\xe8me cas : ",(0,n.jsx)(s.code,{children:"const myArray : Array<type>"})]}),(0,n.jsxs)(s.p,{children:["La syntaxe ",(0,n.jsx)(s.code,{children:"<type>"})," correspond \xe0 un type g\xe9n\xe9rique, nous vous invitons \xe0 parcourir la section d\xe9di\xe9e sur ",(0,n.jsx)(s.a,{href:"/typescript-workshop-companion/docs/typescript/generic",children:"les Types g\xe9n\xe9riques"})," pour tout d\xe9couvrir sur eux !"]})]}),"\n",(0,n.jsx)(s.p,{children:"Si on souhaite stocker des types des diff\xe9rents dans un tableau, nous pouvons utiliser des tuples. Un tuple repr\xe9sente une collection de valeurs ordonn\xe9es. Par exemple :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"type MyTuple = [string, number, boolean]\nconst myTuple : MyTuple = ['workshop', 12, true]\n\nconst myWrongTuple : MyTuple = [ 12, 'workshop',true]\n//TS type string incompatible avec type number\n"})}),"\n",(0,n.jsx)(s.h2,{id:"les-objets",children:"Les objets"}),"\n",(0,n.jsx)(s.p,{children:"Les objets peuvent \xeatre cr\xe9\xe9s avec une classe ou de mani\xe8re litt\xe9ral. Pour typer un objet, nous pouvons nous appuyer sur l'inf\xe9rence ou la d\xe9duction de type, en initialisant la valeur. on peut d\xe9finir le type de chaque cl\xe9 et pr\xe9ciser si elle est optionnelle ou non \xe0 l'aide de l'op\xe9rateur '?'. Dans l'exemple ci-dessous la cl\xe9 \"adresse\" est optionnelle."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"type User = { name :  string, adresse? : string }  const user: User = { name : 'Charlotte' }"})}),"\n",(0,n.jsxs)(s.p,{children:["L'op\xe9rateur keyof permet d'acc\xe9der au type des cl\xe9s d'un objet et l'op\xe9rateur lookup \xe0 la valeur d'une cl\xe9. Pour en savoir plus sur leur fonctionnement rendez-vous dans la section ",(0,n.jsx)(s.a,{href:"/typescript-workshop-companion/docs/typescript/keyof-lookup",children:"Les op\xe9rateurs keyof et lookup"})]})]})}function u(e={}){const{wrapper:s}={...(0,p.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var t=r(6540);const n={},p=t.createContext(n);function o(e){const s=t.useContext(p);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(p.Provider,{value:s},e.children)}}}]);