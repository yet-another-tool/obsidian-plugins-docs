"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5030],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(t),d=o,f=l["".concat(u,".").concat(d)]||l[d]||m[d]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},i="Default Configurations",s={unversionedId:"findoc/defaultConfigurations/defaultConfigurations",id:"findoc/defaultConfigurations/defaultConfigurations",title:"Default Configurations",description:"Release V0.6.0 includes breaking changes, so here is the default configuration. You might have to restore it.",source:"@site/docs/findoc/defaultConfigurations/defaultConfigurations.md",sourceDirName:"findoc/defaultConfigurations",slug:"/findoc/defaultConfigurations/",permalink:"/obsidian-plugins-docs/docs/findoc/defaultConfigurations/",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/defaultConfigurations/defaultConfigurations.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Default Configurations",permalink:"/obsidian-plugins-docs/docs/category/default-configurations"},next:{title:"[PLUGIN] Spotify Link",permalink:"/obsidian-plugins-docs/docs/category/plugin-spotify-link"}},u={},c=[],p={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"default-configurations"},"Default Configurations"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Release V0.6.0 includes breaking changes, so here is the default configuration. You might have to restore it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chartLabelTypes": ["money", "percent", "generic", "custom"],\n  "minCharsToMatch": 1,\n  "useAutocomplete": true,\n  "categories": [\n    "Portfolio",\n    "Income",\n    "Mortgage",\n    "Mortgage Rate",\n    "Cotisation",\n    "Dividend",\n    "House Expenses",\n    "Expenses",\n    "Generic"\n  ],\n  "useLastElementAsTemplate": true,\n  "models": {\n    "expenses": {\n      "dataSource": "splitDailyDates",\n      "categories": ["Income", "House Expenses", "Expenses"],\n      "output": "generateDailyDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "expensesMonthly": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Income", "House Expenses", "Expenses"],\n      "output": "generateSumDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "portfolio": {\n      "dataSource": "splitDailyDates",\n      "categories": ["Portfolio"],\n      "output": "generateDailyDataSet",\n      "beginAtZero": false,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "incomeYearly": {\n      "dataSource": "splitByYear",\n      "categories": ["Income"],\n      "output": "generateSumDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "income": {\n      "dataSource": "splitDailyDates",\n      "categories": ["Income"],\n      "output": "generateDailyDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "all": {\n      "dataSource": "splitDailyDates",\n      "categories": [\n        "Portfolio",\n        "Income",\n        "Mortgage",\n        "Mortgage Rate",\n        "Cotisation",\n        "Dividend",\n        "House Expenses",\n        "Expenses"\n      ],\n      "output": "generateDailyDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "mortgage": {\n      "dataSource": "splitDailyDates",\n      "categories": ["Mortgage"],\n      "output": "generateDailyDataSet",\n      "beginAtZero": false,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "mortgageRate": {\n      "dataSource": "splitDailyDates",\n      "categories": ["Mortgage Rate"],\n      "output": "generateDailyDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "percent",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "dividend": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Dividend", "Cotisation"],\n      "output": "generateSumDataSetPerTypes",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "portfolioReport": {\n      "dataSource": "splitByYearMonth",\n      "categories": [\n        "Portfolio",\n        "Income",\n        "Cotisation",\n        "Expenses",\n        "House Expenses",\n        "Dividend"\n      ],\n      "output": "getLastValuePerTypeForCurrentMonth",\n      "beginAtZero": false,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "cumulativeSum": {\n      "dataSource": "splitByYearMonth",\n      "categories": [\n        "Portfolio",\n        "Income",\n        "Cotisation",\n        "Expenses",\n        "House Expenses",\n        "Dividend"\n      ],\n      "output": "generateCumulativeSumDataSet",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "cumulativeSumPerTypes": {\n      "dataSource": "splitByYearMonth",\n      "categories": [\n        "Portfolio",\n        "Income",\n        "Cotisation",\n        "Expenses",\n        "House Expenses",\n        "Dividend"\n      ],\n      "output": "generateCumulativeSumDataSetPerTypes",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": ""\n    },\n    "cumulativeSumForCotisationSplitByExtra": {\n      "dataSource": "splitBy",\n      "categories": ["Cotisation"],\n      "output": "generateCumulativeSumDataSetPerTypes",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "extra",\n      "values": ""\n    },\n    "incomeMinusExpensesByYearMonth": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Income", "Expenses"],\n      "output": "generateDifference",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": "Income, Expenses"\n    },\n    "expensesPlusHouseExpensesByYearMonth": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Expenses", "House Expenses"],\n      "output": "generateSum",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": "Expenses, House Expenses"\n    },\n    "incomeMinusExpensesByYearMonthReport": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Income", "Expenses"],\n      "output": "reportDifference",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": "Income, Expenses"\n    },\n    "expensesPlusHouseExpensesByYearMonthReport": {\n      "dataSource": "splitByYearMonth",\n      "categories": ["Expenses", "House Expenses"],\n      "output": "reportSum",\n      "beginAtZero": true,\n      "chartLabelType": "money",\n      "dataSourceKey": "timestamp",\n      "values": "Expenses, House Expenses"\n    }\n  },\n  "colors": [\n    "#1ac18f",\n    "#EAE2B7",\n    "#8ecae6",\n    "#219ebc",\n    "#026597",\n    "#be37a5",\n    "#fb8500",\n    "#ffbe0b",\n    "#fff5b8",\n    "#ff006e",\n    "#8338ec",\n    "#3a86ff",\n    "#390099",\n    "#9e0059",\n    "#8c3b56",\n    "#ff5400",\n    "#ffbd00",\n    "#619b8a",\n    "#7678ed",\n    "#c2e83b",\n    "#33658a",\n    "#ce6a85",\n    "#985277",\n    "#5c374c",\n    "#ba66ff",\n    "#2176ff",\n    "#33a1fd",\n    "#7cd671",\n    "#22def7"\n  ],\n  "debounce": "1000",\n  "csvSeparator": ","\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What to do with that JSON ?")),(0,o.kt)("p",null,"It must be the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"data.json")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},".obsidian/plugins/findoc/data.json")))}m.isMDXComponent=!0}}]);