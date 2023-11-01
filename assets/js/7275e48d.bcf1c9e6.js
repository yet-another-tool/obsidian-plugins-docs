"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Cumulative Sum",u={unversionedId:"findoc/models/cumulativeSum",id:"findoc/models/cumulativeSum",title:"Cumulative Sum",description:"Default Model Definition",source:"@site/docs/findoc/models/cumulativeSum.md",sourceDirName:"findoc/models",slug:"/findoc/models/cumulativeSum",permalink:"/obsidian-plugins-docs/docs/findoc/models/cumulativeSum",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/cumulativeSum.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"All",permalink:"/obsidian-plugins-docs/docs/findoc/models/all"},next:{title:"Cumulative Sum for Cotisation Split by Extra",permalink:"/obsidian-plugins-docs/docs/findoc/models/cumulativeSumForCotisationSplitByExtra"}},l={},c=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cumulative-sum"},"Cumulative Sum"),(0,o.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'cumulativeSum: {\n    "dataSource": "splitByYearMonth",\n    "categories": [\n        "Portfolio",\n        "Income",\n        "Cotisation",\n        "Expenses",\n        "House Expenses",\n        "Dividend",\n    ],\n    "output": "generateCumulativeSumDataSet",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "",\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: cumulativeSum\ntitle: Cumulative Sum\n```\n")),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cumulative Sum",src:n(2404).Z,width:"1466",height:"1216"})))}d.isMDXComponent=!0},2404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cumulativeSum-0c351b8555f53d9ba1eaff2886891122.png"}}]);