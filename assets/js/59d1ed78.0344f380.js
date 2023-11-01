"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="Configuration",s={unversionedId:"findoc/configuration",id:"findoc/configuration",title:"Configuration",description:"Before using Financial Doc, you may need to configure it to suit your preferences or specific use cases. Here's how to do it:",source:"@site/docs/findoc/configuration.md",sourceDirName:"findoc",slug:"/findoc/configuration",permalink:"/obsidian-plugins-docs/docs/findoc/configuration",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Installation",permalink:"/obsidian-plugins-docs/docs/findoc/installation"},next:{title:"Usage",permalink:"/obsidian-plugins-docs/docs/findoc/usage"}},l={},p=[{value:"Options",id:"options",level:2},{value:"CSV Save Debounce",id:"csv-save-debounce",level:3},{value:"CSV Separator",id:"csv-separator",level:3},{value:"Use Last Element as Template",id:"use-last-element-as-template",level:3},{value:"Minimum character(s) to match",id:"minimum-characters-to-match",level:3},{value:"Categories (former Types)",id:"categories-former-types",level:3},{value:"Models",id:"models",level:3},{value:"Colors",id:"colors",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Before using ",(0,o.kt)("strong",{parentName:"p"},"Financial Doc"),", you may need to configure it to suit your preferences or specific use cases. Here's how to do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Go to the "Settings" section.'),(0,o.kt)("li",{parentName:"ol"},'Click on "Community plugins."'),(0,o.kt)("li",{parentName:"ol"},"Find ",(0,o.kt)("strong",{parentName:"li"},"Financial Doc")," in the list of installed plugins and click on it to access its settings."),(0,o.kt)("li",{parentName:"ol"},"Configure the plugin options according to your needs.")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"csv-save-debounce"},"CSV Save Debounce"),(0,o.kt)("p",null,"Is a numerical setting that determines the delay, in milliseconds, before your changes to a CSV file are automatically saved. This setting is designed to strike a balance between preserving your data and optimizing the saving process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minimum Value:")," 500 ms",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Maximum Value:")," 5000 ms"),(0,o.kt)("p",null,"Setting a lower value (e.g., 500 ms) means that changes will be saved more frequently, which can be helpful if you want to ensure that your work is saved almost immediately.\nSetting a higher value (e.g., 5000 ms) increases the debounce period, allowing you to work for a longer time before changes are saved automatically. This can be useful if you prefer fewer interruptions during your work."),(0,o.kt)("h3",{id:"csv-separator"},"CSV Separator"),(0,o.kt)("p",null,'The "CSV Separator" is a crucial setting that defines the character used to separate individual data values within a CSV (Comma-Separated Values) file. This character is also known as the delimiter, as it delimits or separates each piece of data within a row of the CSV file.'),(0,o.kt)("p",null,"Commonly used CSV separators include:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Comma (,):"),' For example, "value1, value2, value3."',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Semicolon (;):"),' For example, "value1; value2; value3."',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Tab ( ):"),' For example, "value1 value2 value3."'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why the Separator Matters:")),(0,o.kt)("p",null,"The choice of separator is critical because it ensures that the CSV file is properly structured, allowing software applications to correctly interpret and import the data. Using a consistent separator is essential for maintaining data integrity and readability."),(0,o.kt)("h3",{id:"use-last-element-as-template"},"Use Last Element as Template"),(0,o.kt)("p",null,'The "Use Last Element as Template" option simplifies the process of adding new entries to a table. When this option is enabled, it takes the last row of the table and duplicates it, providing you with a ready-made template for entering new data. This can significantly speed up data entry, especially when you need to input information that is similar to the previous entry.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How It Works:")),(0,o.kt)("p",null,'When you add a new row to the table, the "Use Last Element as Template" option automatically copies the content from the last row of the table.\nThe fields within the new row are pre-filled with the data from the last row, allowing you to make modifications or additions as needed.\nYou can easily edit the duplicated values to update them with the correct information for the new entry.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to Use It:")),(0,o.kt)("p",null,'Use the "Use Last Element as Template" option when you need to enter a series of similar or related data entries. For example, when inputting records of customers or products with common attributes.'),(0,o.kt)("h3",{id:"minimum-characters-to-match"},"Minimum character(s) to match"),(0,o.kt)("p",null,'Use the "Minimum characters to Match" option when you want to type more character before opening the dropdown menu with the autocomplete feature enabled.'),(0,o.kt)("h3",{id:"categories-former-types"},"Categories (former Types)"),(0,o.kt)("p",null,"Create, Update or Delete Categories to fit your needs."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to remove all associations with a ",(0,o.kt)("strong",{parentName:"p"},"Category")," before removing it.")),(0,o.kt)("h3",{id:"models"},"Models"),(0,o.kt)("p",null,'The "Models" option provides a list of all available data models, which serve as the foundation for preparing and rendering datasets. These models define the structure and characteristics of the data, guiding how it is processed and displayed. You can update various parameters within these models to add or remove data types and refine the processing functions.'),(0,o.kt)("p",null,"Models available :"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./models/intro"},"Models")),(0,o.kt)("p",null,"You can create a feature request in Github to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yet-another-tool/obsidian-findoc/issues/new"},"request new model"),", or open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yet-another-tool/obsidian-findoc/pulls"},"PR")," with your own model."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data Source key")),(0,o.kt)("p",null,"Column to use when preparing the raw data. Modify this value exclusively when employing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Split By")," method for the data source."),(0,o.kt)("p",null,"For Example, you want to prepare the data using the content in the ",(0,o.kt)("strong",{parentName:"p"},"Extra")," Column, instead of the default ",(0,o.kt)("strong",{parentName:"p"},"Timestamp"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output")),(0,o.kt)("p",null,"The function used to generate the ",(0,o.kt)("strong",{parentName:"p"},"chart")," or ",(0,o.kt)("strong",{parentName:"p"},"report"),", ",(0,o.kt)("em",{parentName:"p"},"see the models for detailled example for that one.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chart Label Types")),(0,o.kt)("p",null,"You can edit the label shown in the chart using this option."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Suffix")),(0,o.kt)("p",null,"Optional ",(0,o.kt)("em",{parentName:"p"},"Suffix"),", only used when the ",(0,o.kt)("strong",{parentName:"p"},"chart label type")," is set to ",(0,o.kt)("strong",{parentName:"p"},'"custom"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Categories")),(0,o.kt)("p",null,"List of Categories to include and to add in the ",(0,o.kt)("strong",{parentName:"p"},"chart")," or ",(0,o.kt)("strong",{parentName:"p"},"report"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Values")),(0,o.kt)("p",null,"A comma delimited list to determine values, this one is only used to do difference and sum."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"./models/incomeMinusExpensesByYearMonth"},"generateDifference")," for a detailled example."),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("p",null,'The "Colors" option is a curated palette comprising all possible color choices available for use when drawing charts, graphs, or other visual elements. This palette simplifies the process of selecting and applying colors to various elements within your visualizations.'))}d.isMDXComponent=!0}}]);