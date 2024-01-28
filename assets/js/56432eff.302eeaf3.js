"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2241],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(y,s(s({ref:n},u),{},{components:t})):o.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(7462),i=(t(7294),t(3905));const r={},s="Income minus Expenses by Daily",a={unversionedId:"findoc/models/incomeMinusExpensesByDaily",id:"findoc/models/incomeMinusExpensesByDaily",title:"Income minus Expenses by Daily",description:"Default Model Definition",source:"@site/docs/findoc/models/incomeMinusExpensesByDaily.md",sourceDirName:"findoc/models",slug:"/findoc/models/incomeMinusExpensesByDaily",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByDaily",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByDaily.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Expenses plus House Expenses Year/Month Report",permalink:"/obsidian-plugins-docs/docs/findoc/models/expensesPlusHouseExpensesByYearMonthReport"},next:{title:"Income minus Expenses by Year/Month",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByYearMonth"}},c={},l=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"income-minus-expenses-by-daily"},"Income minus Expenses by Daily"),(0,i.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'incomeMinusExpensesByDaily: {\n    "dataSource": "splitDailyDates",\n    "categories": ["Income", "Expenses"],\n    "output": "generateCumulativeDifference",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "Income, Expenses", // Yield: Income - Expenses\n}\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: incomeMinusExpensesByDaily\ntitle: Income minus Expenses Daily\n```\n")),(0,i.kt)("h2",{id:"screenshot"},"Screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Income minus Expenses Daily",src:t(8744).Z,width:"1462",height:"1200"})))}d.isMDXComponent=!0},8744:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/incomeMinusExpensesByDaily-437d2d0d8f52769de9756aea4cc7810e.png"}}]);