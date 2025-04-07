"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[875],{8329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"typescript/generic","title":"Types generiques","description":"Usage autour de la fonction \'identit\xe9\'","source":"@site/docs/typescript/generic.md","sourceDirName":"typescript","slug":"/typescript/generic","permalink":"/typescript-workshop-companion/docs/typescript/generic","draft":false,"unlisted":false,"editUrl":"https://github.com/typescript-workshop/typescript-workshop-companion/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/generic.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Hi\xe9rarchies des types","permalink":"/typescript-workshop-companion/docs/typescript/type-hierarchy"},"next":{"title":"Keyof","permalink":"/typescript-workshop-companion/docs/typescript/keyof"}}');var i=t(4848),r=t(8453);const o={sidebar_position:2},a="Types generiques",u={},c=[{value:"Usage autour de la fonction &#39;identit\xe9&#39;",id:"usage-autour-de-la-fonction-identit\xe9",level:2},{value:"Aller <del>plus</del> <em>moins</em> loin en appliquant des contraintes",id:"aller-plus-moins-loin-en-appliquant-des-contraintes",level:2},{value:"G\xe9n\xe9riques sous contrainte, un exemple d&#39;utilisation",id:"g\xe9n\xe9riques-sous-contrainte-un-exemple-dutilisation",level:2}];function d(e){const n={admonition:"admonition",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"types-generiques",children:"Types generiques"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-autour-de-la-fonction-identit\xe9",children:"Usage autour de la fonction 'identit\xe9'"}),"\n",(0,i.jsx)(n.p,{children:"La fonction identit\xe9 renvoie ce qu'on lui passe en argument..."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const identity = (arg) => {\n  return arg;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["...et on s'attend du coup \xe0 ce que le type du retour de la fonction soit identique au type fourni en entr\xe9e.\nOn aimerait typer l'entr\xe9e et la sortie de cette fonction afin de s'assurer que cette contrainte est bien respect\xe9e, quel que soit le type de l'argument effectivement pass\xe9 \xe0 ",(0,i.jsx)(n.code,{children:"identity"}),".\nComme ",(0,i.jsx)(n.code,{children:"identity"})," peut prendre un argument de n'importe quel type on pourrait \xeatre tent\xe9s de la typer ainsi :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const identity = (arg: any): any => {\n  return arg;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["H\xe9las, ",(0,i.jsx)(n.code,{children:"any"})," est un peu trop permissif. Le compilateur typescript ne nous alerterait pas si l'on venait, par exemple, \xe0 modifier notre fonction de sorte \xe0 ce qu'elle renvoie une ",(0,i.jsx)(n.strong,{children:"string"})," lorsqu'on lui passe un ",(0,i.jsx)(n.strong,{children:"number"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const identity = (arg: any):any => {\n    return `${arg}`; // notre fonction renverra toujours une cha\xeene de caract\xe8res\n}\n\nidentity(42); // --\x3e '42'\nidentity('42'); // --\x3e '42'\n// et par ailleurs ...\nidentity(true): // --\x3e 'true'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Mais on on voudrait bel et bien ",(0,i.jsx)(n.strong,{children:"garantir"})," qu'on obtiendra en sortie le m\xeame type qu'en entr\xe9e.\nOn pourrait envisager de surcharger la signature de notre fonction mais ce serait au prix (1) d'une grande verbosit\xe9 et (2) d'un risque accru d'oubli."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function identity(a: number): number;\nfunction identity(a: string): string;\nfunction identity(a: boolean): boolean;\n// ...et ainsi de suite avec enum, array...\nfunction identity(arg) {\n  return arg;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Mais en utilisant un type g\xe9n\xe9rique on peut d\xe9clarer de fa\xe7on concise la contrainte qui lie les types d'entr\xe9e et de sortie de notre fonction identit\xe9 :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// 'Type' est ici notre type g\xe9n\xe9rique\nconst identity = <Type>(arg: Type): Type => {\n  return arg;\n};\n\n// En pratique on voit le plus souvent de tels types nomm\xe9s 'T', 'U', etc...\nconst identity = <T>(arg: T): T => {\n  return arg;\n};\n\n// Mais ce qui est essentiel c'est de le (ou les !) d\xe9clarer dans une paire de chevrons avant les arguments de la fonction\n\nconst identity = <JeanFooBar>(arg: JeanFooBar): JeanFooBar => {\n  return arg;\n};\nconst myFunction = <T, U>(a: T, b: U): { a: T; b: U } => {\n  return { a, b };\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Et ceci nous \xe9vitera d'\xe9crire des b\xeatises comme celle \xe9voqu\xe9e plus haut :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const identity = <Type>(arg: Type): Type => {\n  return `${arg}`;\n};\n\n// le compilateur typescript nous fera remarquer qu'on pr\xe9tend accepter n'importe quel 'Type' en entr\xe9e pour un retour du m\xeame 'Type' alors que notre impl\xe9mentation est vou\xe9e \xe0 retourner une string\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"aller-plus-moins-loin-en-appliquant-des-contraintes",children:["Aller ",(0,i.jsx)(n.del,{children:"plus"})," ",(0,i.jsx)(n.em,{children:"moins"})," loin en appliquant des contraintes"]}),"\n",(0,i.jsx)(n.p,{children:"Alors bien s\xfbr dans de nombreux cas on voudra \xeatre tout de m\xeame moins permissifs et appliquer des contraintes sur nos types g\xe9n\xe9riques, par exemple:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// cette fonction permet de fusionner deux objets\nconst merge = <U, V>(obj1: U, obj2: V) => ({\n  ...obj1,\n  ...obj2,\n});\n\nconst user = merge({ name: \"Jean-Foo-Bar\" }, { age: 42 });\nconsole.log(user); // { name: 'Jean-Foo-Bar', age: 42}\n\n// on note au passage que nous employons deux types g\xe9n\xe9riques dans la signature de _merge_, obj1 et obj2 n'\xe9tant pas (n\xe9cessairement) du m\xeame type\n"})}),"\n",(0,i.jsx)(n.p,{children:"Telle qu'elle a \xe9t\xe9 d\xe9finie la fonction merge vise \xe0 fusionner deux objets mais rien ne nous emp\xeache de lui passer des arguments qui ne sont pas des objets..."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const otherUser = merge({ name: \"Jean-Foo-Bar\" }, 42);\nconsole.log(otherUser); // { name: 'Jean-Foo-Bar'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Heureusement nous pouvons sp\xe9cifier que les types des arguments, bien que g\xe9n\xe9riques doivent satisfaire la contrainte d'\xeatre d'un certain type, ici des ",(0,i.jsx)(n.em,{children:"objets"}),", gr\xe2ce au mot-cl\xe9 ",(0,i.jsx)(n.code,{children:"extends"}),".\nAinsi le compilateur nous alertera si on tente de fournir un argument qui ne satisfait pas cette contrainte."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const merge = <U extends object, V extends object>(obj1: U, obj2: V) => ({\n  ...obj1,\n  ...obj2,\n});\n\nconst otherUser = merge(\n  { name: \"Jean-Foo-Bar\" },\n  42 // Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)\n);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"g\xe9n\xe9riques-sous-contrainte-un-exemple-dutilisation",children:"G\xe9n\xe9riques sous contrainte, un exemple d'utilisation"}),"\n",(0,i.jsx)(n.p,{children:"On peut parfois avoir \xe0 faire \xe0 des types identiques bien qu'ils puissent repr\xe9senter des choses diff\xe9rentes.\nPar exemple un UUID (a.k.a. une cha\xeene de caract\xe8res) peut \xeatre l'identifiant d'un utilisateur (UserId) tandis qu'un autre pourrait \xeatre celui d'une entreprise (CompanyId)."}),"\n",(0,i.jsxs)(n.p,{children:["Les types ",(0,i.jsx)(n.em,{children:"opaques"})," permettent de d\xe9finir de telles distinctions et ainsi de s'assurer qu'on emploie telle ou telle variable \xe0 bon escient/"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const uniqueOpaqueProperty = Symbol();\ntype Opaque<A, B extends string> = A & {\n  [uniqueOpaqueProperty]: B;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Un types ",(0,i.jsx)(n.em,{children:"opaques"})," adjoint une sorte d'",(0,i.jsx)(n.em,{children:"\xe9tiquette"}),' \xe0 un type g\xe9n\xe9rique, ici "A" (qui peut donc \xeatre une instance de n\'importe quel type).\n"B" est \xe9galement un type g\xe9n\xe9rique, avec la contrainte suppl\xe9mentaire d\'\xeatre une cha\xeene de caract\xe8res, ce qui nous permettra de construite l\'',(0,i.jsx)(n.em,{children:"\xe9tiquette"})," que nous venons d'\xe9voquer."]}),"\n",(0,i.jsx)(n.p,{children:"Nous pourrons ainsi d\xe9finir des types sp\xe9cialis\xe9s, ce qui nous permettra de limiter les risques de faire des choses insens\xe9es comme passer l'identifiant d'une entreprise \xe0 une fonction qui n'est sens\xe9e traiter que des identifiants d'utilisateurs."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'type UserId = UUID<"user">;\ntype CompanyId = UUID<"company">;\n\nconst linkUsers = (user1: UserId, user2: UserId) => {\n  // on fait des traitements qui n\'ont de sens qu\'avec des identifiants d\'utilisateurs\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\xc0 vous de jouer ! Comment d\xe9finiriez vous le type ",(0,i.jsx)(n.em,{children:"opaque"})," ",(0,i.jsx)(n.code,{children:"UUID"})," qui permettrait de d\xe9clarer des types d'UUID sp\xe9cialis\xe9s ?"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// On veut pouvoir notamment distinguer deux sp\xe9cialisations d'UUID\ntype UserId = UUID<\"user\">; // ce type portera l'\xe9tiquette 'user_uuid'\ntype CompanyId = UUID<\"company\">; // ce type portera l'\xe9tiquette 'company_uuid'\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Besoin d'un coup de pouce ?"}),(0,i.jsxs)(n.p,{children:["Voici un exemple qui viserait \xe0 distinguer les vecteurs ",(0,i.jsx)(n.em,{children:"position"})," des vecteurs ",(0,i.jsx)(n.em,{children:"vitesse"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Vector3 = { x: number; y: number; z: number };\n\ntype Vector<B extends Vector3> = Opaque<Vector3, `${B}_vector`>;\n\n// une position est un Vector3 qui porte l'\xe9tiquette 'position_vector'\ntype Position = Vector<\"position\">;\n// une translation est aussi un Vector3 mais qui porte l'\xe9tiquette 'translation_vector'\ntype Translation = Vector<\"translation\">;\n\nconst updatedPosition = (\n  origin: Position,\n  movement: Translation\n): Position => ({\n  x: origin.x + movement.x,\n  y: origin.y + movement.y,\n  z: origin.z + movement.z,\n});\n"})}),(0,i.jsx)(n.p,{children:"Notre fonction ne manipule que des types Vector3, mais ces types sont 'sp\xe9cialis\xe9s' afin de s'assurer qu'on ne passe pas un argument de type Position l\xe0 o\xf9 un type Translation est attendu (et inversement) par ailleurs on pr\xe9cise que c'est bien une Position que retournera notre fonction"})]})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);