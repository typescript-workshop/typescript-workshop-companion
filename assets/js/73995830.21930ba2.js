"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[365],{4072:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>p,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"typescript/typage-structurel","title":"Typage structurel","description":"Pour savoir si deux types sont \xe9quivalents, il existe plusieurs syst\xe8mes de types. Par exemple, le langage C++ utilise le syst\xe8me de type nominatif, OCaml le syst\xe8me de duck typing.","source":"@site/docs/typescript/typage-structurel.md","sourceDirName":"typescript","slug":"/typescript/typage-structurel","permalink":"/typescript-workshop-companion/docs/typescript/typage-structurel","draft":false,"unlisted":false,"editUrl":"https://github.com/typescript-workshop/typescript-workshop-companion/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/typage-structurel.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Les concepts TypeScript","permalink":"/typescript-workshop-companion/docs/category/les-concepts-typescript"},"next":{"title":"Hi\xe9rarchies des types","permalink":"/typescript-workshop-companion/docs/typescript/type-hierarchy"}}');var r=s(4848),i=s(8453);const p={sidebar_position:1},o="Typage structurel",a={},c=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"typage-structurel",children:"Typage structurel"})}),"\n",(0,r.jsx)(t.p,{children:"Pour savoir si deux types sont \xe9quivalents, il existe plusieurs syst\xe8mes de types. Par exemple, le langage C++ utilise le syst\xe8me de type nominatif, OCaml le syst\xe8me de duck typing."}),"\n",(0,r.jsx)(t.p,{children:"TypeScript se base sur un syst\xe8me de type structurel, c'est \xe0 dire qu'un type est d\xe9fini par sa structure et non son nom. La comparaison se fera au moment de la compilation, regardons ce que \xe7a implique au niveau du code."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type User = {\n    name : string;\n};\n\ntype Admin = {\n    name : string;\n    isAdmin : boolean\n};\n\nuser.firstName\n// ^? TS erreur de compilation.\n\ntype Result = user extends admin ? 'Ok' : 'Not ok'\n// ^? type Result = 'Not ok', la propri\xe9t\xe9 isAdmin est manquante\n\ntype Result2 = admin extends user ? 'Ok' : 'Not ok'\n// ^? type Result2 = 'Ok'\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>p,x:()=>o});var n=s(6540);const r={},i=n.createContext(r);function p(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);