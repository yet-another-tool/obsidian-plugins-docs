(()=>{"use strict";var e,a,t,d,r,c={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=f,e=[],b.O=(a,t,d,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],d=e[i][1],r=e[i][2];for(var f=!0,o=0;o<t.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(f=!1,r<c&&(c=r));if(f){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,d,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var f=2&d&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",299:"fb0df92b",816:"af1e219b",990:"5be656b1",1055:"5075c9d3",1131:"b4d1eade",1214:"6222c85e",1416:"862f7211",1497:"b40f53e8",1757:"b661a8af",2013:"fa7b7a90",2476:"2632dbd4",2536:"ec48840a",2688:"b920cf09",2746:"59d1ed78",2822:"902354c2",3085:"1f391b9e",3859:"a88af29b",3936:"85b986b9",4069:"21580f64",4195:"c4f5d8e4",4233:"18cba07e",4458:"23e1dd8a",4479:"6ecfd995",4843:"16b9e1c7",5030:"19626296",6017:"fd4a278a",6293:"e3cbc18a",6657:"eb52444d",6884:"e80051c4",6897:"ef70380a",7020:"9dd7a230",7332:"84bff56d",7414:"393be207",7808:"c31ea32d",7918:"17896441",7969:"5ca2be06",8223:"93a83a2c",8295:"a53fd6fe",8312:"49aa0348",8541:"84e0decb",8612:"a22df83b",8754:"6894f732",8832:"7275e48d",9091:"6b5792e2",9495:"74701681",9514:"1be78505",9671:"0e384e19",9717:"5db3c7b5",9817:"14eb3368",9877:"69e42749",9991:"3524b3c3"}[e]||e)+"."+{53:"20104d1b",299:"0bb23e29",816:"06febe8a",990:"0428c05b",1055:"3d198125",1131:"180f87d1",1214:"bae374dd",1416:"865cf5a2",1497:"6389bb42",1757:"07b2bbd1",2013:"65997df1",2476:"7a95025e",2536:"f6c20244",2688:"bdae862e",2746:"0344f380",2822:"db7fdf92",3085:"28442904",3859:"d66bea7c",3936:"9114b675",4069:"5204ac71",4195:"18e68ccc",4233:"89edb5eb",4458:"69ca4db6",4479:"02699ad4",4843:"84bc0005",4972:"6eee0ebc",5030:"b1f6fab0",6017:"3ecb49e5",6293:"dfa54bfb",6657:"3041f022",6884:"931a715c",6897:"385d31fd",7020:"fb55da0b",7332:"97da656f",7414:"3cc47cac",7808:"7fee29bf",7918:"d3d572a6",7969:"02cad706",8223:"03fd720b",8295:"12c9d3a4",8312:"978294b9",8541:"605fa33f",8612:"c42bf6da",8754:"3dbf8e44",8832:"bcf1c9e6",9091:"6bc6f345",9455:"02fd998e",9495:"51e25380",9514:"3852b8e5",9671:"0f886f21",9717:"fa5188e7",9817:"277da0ae",9877:"4f460c61",9991:"72c24cd9"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},r="documentation:",b.l=(e,a,t,c)=>{if(d[e])d[e].push(a);else{var f,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+t),f.src=e),d[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var r=d[e];if(delete d[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/obsidian-plugins-docs/",b.gca=function(e){return e={17896441:"7918",19626296:"5030",74701681:"9495","935f2afb":"53",fb0df92b:"299",af1e219b:"816","5be656b1":"990","5075c9d3":"1055",b4d1eade:"1131","6222c85e":"1214","862f7211":"1416",b40f53e8:"1497",b661a8af:"1757",fa7b7a90:"2013","2632dbd4":"2476",ec48840a:"2536",b920cf09:"2688","59d1ed78":"2746","902354c2":"2822","1f391b9e":"3085",a88af29b:"3859","85b986b9":"3936","21580f64":"4069",c4f5d8e4:"4195","18cba07e":"4233","23e1dd8a":"4458","6ecfd995":"4479","16b9e1c7":"4843",fd4a278a:"6017",e3cbc18a:"6293",eb52444d:"6657",e80051c4:"6884",ef70380a:"6897","9dd7a230":"7020","84bff56d":"7332","393be207":"7414",c31ea32d:"7808","5ca2be06":"7969","93a83a2c":"8223",a53fd6fe:"8295","49aa0348":"8312","84e0decb":"8541",a22df83b:"8612","6894f732":"8754","7275e48d":"8832","6b5792e2":"9091","1be78505":"9514","0e384e19":"9671","5db3c7b5":"9717","14eb3368":"9817","69e42749":"9877","3524b3c3":"9991"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)t.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>d=e[a]=[t,r]));t.push(d[2]=r);var c=b.p+b.u(a),f=new Error;b.l(c,(t=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,d[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var d,r,c=t[0],f=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(d in f)b.o(f,d)&&(b.m[d]=f[d]);if(o)var i=o(b)}for(a&&a(t);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkdocumentation=self.webpackChunkdocumentation||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();