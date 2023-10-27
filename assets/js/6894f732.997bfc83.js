"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[754],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=s(o),p=r,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||i;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5304:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={},l="Portfolio",a={unversionedId:"findoc/models/Portfolio",id:"findoc/models/Portfolio",title:"Portfolio",description:"Default Model Definition",source:"@site/docs/findoc/models/Portfolio.md",sourceDirName:"findoc/models",slug:"/findoc/models/Portfolio",permalink:"/obsidian-plugins-docs/docs/findoc/models/Portfolio",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/Portfolio.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Income Yearly",permalink:"/obsidian-plugins-docs/docs/findoc/models/IncomeYearly"},next:{title:"All",permalink:"/obsidian-plugins-docs/docs/findoc/models/all"}},c={},s=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],d={toc:s},f="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"portfolio"},"Portfolio"),(0,r.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'portfolio: {\n    "dataSource": "splitDailyDates",\n    "categories": ["Portfolio"],\n    "output": "generateDailyDataSet",\n    "beginAtZero": false,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "",\n}\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: portfolio\ntitle: Portfolio\n```\n")),(0,r.kt)("h2",{id:"screenshot"},"Screenshot"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Portfolio",src:o(1306).Z,width:"1466",height:"1216"})))}u.isMDXComponent=!0},1306:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/portfolio-19b0d606b7bbfc1b4eba4629eb74271d.png"}}]);