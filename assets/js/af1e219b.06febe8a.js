"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const s={},a="Expenses",i={unversionedId:"findoc/models/Expenses",id:"findoc/models/Expenses",title:"Expenses",description:"Default Model Definition",source:"@site/docs/findoc/models/Expenses.md",sourceDirName:"findoc/models",slug:"/findoc/models/Expenses",permalink:"/obsidian-plugins-docs/docs/findoc/models/Expenses",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/Expenses.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/obsidian-plugins-docs/docs/findoc/models/intro"},next:{title:"Expenses Monthly",permalink:"/obsidian-plugins-docs/docs/findoc/models/ExpensesMonthly"}},l={},c=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...s}=e;return(0,o.kt)(d,(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expenses"},"Expenses"),(0,o.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'expenses: {\n    "dataSource": "splitDailyDates",\n    "categories": ["Income", "House Expenses", "Expenses"],\n    "output": "generateDailyDataSet",\n    "beginAtZero": true,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "",\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: expenses\ntitle: Expenses\n```\n")),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Expenses",src:t(3392).Z,width:"1466",height:"1216"})))}u.isMDXComponent=!0},3392:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/expenses-3a8cab0efdaaf03bc20960a0099b7589.png"}}]);