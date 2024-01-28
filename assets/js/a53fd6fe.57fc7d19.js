"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(f,s(s({ref:n},u),{},{components:t})):o.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={},s="Income minus Expenses by Year/Month",a={unversionedId:"findoc/models/incomeMinusExpensesByYearMonth",id:"findoc/models/incomeMinusExpensesByYearMonth",title:"Income minus Expenses by Year/Month",description:"Default Model Definition",source:"@site/docs/findoc/models/incomeMinusExpensesByYearMonth.md",sourceDirName:"findoc/models",slug:"/findoc/models/incomeMinusExpensesByYearMonth",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByYearMonth",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByYearMonth.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Income minus Expenses by Daily",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByDaily"},next:{title:"Income minus Expenses by Year/Month Report",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByYearMonthReport"}},c={},l=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"income-minus-expenses-by-yearmonth"},"Income minus Expenses by Year/Month"),(0,r.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'incomeMinusExpensesByYearMonth: {\n    "dataSource": "splitByYearMonth",\n    "categories": ["Income", "Expenses"],\n    "output": "generateDifference",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "Income, Expenses", // Yield: Income - Expenses\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: incomeMinusExpensesByYearMonth\ntitle: Income minus Expenses by Year/Month\n```\n")),(0,r.kt)("h2",{id:"screenshot"},"Screenshot"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Income minus Expenses by Year/Month",src:t(1632).Z,width:"1466",height:"1216"})))}d.isMDXComponent=!0},1632:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/incomeMinusExpensesByYearMonth-7cd36d447f230881d6427a544cbadddf.png"}}]);