(function(){"use strict";var e={8094:function(e,t,n){var r=n(9963),i=n(6252),o=n(3577);const a={style:{display:"flex",height:"100%",width:"100%"}},l=(0,i._)("div",{style:{width:"250px",height:"60px",display:"flex","align-items":"center","padding-left":"20px",background:"#1e1e1e"}},[(0,i._)("span",null,[(0,i._)("span",{style:{"font-size":"24px","margin-left":"10px",color:"white","font-weight":"600"}},"LEGGO")])],-1),u={style:{width:"calc(100% - 250px)",background:"#f8f8f8"}},s={style:{height:"60px",background:"#1e1e1e",width:"calc(100% - 11px)","border-left":"1px solid rgba(232,232,232,0.66)",display:"flex","justify-content":"flex-end","align-items":"center","padding-right":"10px"}},d=["src"],c={style:{height:"40px",display:"flex","padding-right":"20px","padding-left":"20px","align-items":"center","font-size":"18px","font-weight":"600"}};function p(e,t,r,p,f,h){const v=(0,i.up)("nav-bar"),g=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",null,[l,(0,i.Wm)(v,{collapse:h.isCollapsed,routes:h.getRoutes,style:{height:"calc(100% - 60px)"}},null,8,["collapse","routes"])]),(0,i._)("div",u,[(0,i._)("div",s,[(0,i._)("img",{src:n(2317),style:{width:"40px",height:"40px","border-radius":"50%"}},null,8,d)]),(0,i._)("div",c,[(0,i._)("div",null,(0,o.zw)(h.setDefaultVal()),1)]),(0,i.Wm)(g)])])}var f=n(2201);const h={"/":"root","/dashboard":"Dashboard","/drivers/view":"View Drivers","/drivers/addDriver":"Add Driver","/drivers/editDriver":"Edit Driver","/rides":"Rides"},v=[{path:"/",name:"root",redirect:"dashboard",rootObj:!0},{path:"/:pathMatch(.*)",name:"wildcard",redirect:"/",rootObj:!0},{path:"/dashboard",name:"Dashboard",component:()=>n.e(443).then(n.bind(n,160))},{path:"/drivers",name:"Drivers",redirect:"/drivers/view",children:[{path:"view",name:"View Drivers",component:()=>n.e(443).then(n.bind(n,3583))},{path:"addDriver",name:"Add Driver",component:()=>n.e(443).then(n.bind(n,1145))},{path:"editDriver/",name:"Edit Driver1",settings:{hideInNav:!0},redirect:"/drivers/view"},{path:"editDriver/:driverId",name:"Edit Driver",settings:{hideInNav:!0},component:()=>n.e(443).then(n.bind(n,1145))}]},{path:"/rides",name:"Rides",component:()=>n.e(443).then(n.bind(n,1688))}],g=(0,f.p7)({history:(0,f.r5)(),routes:v});var m=g;function b(e,t,n,r,a,l){const u=(0,i.up)("el-menu-item"),s=(0,i.up)("el-sub-menu"),d=(0,i.up)("el-menu");return(0,i.wg)(),(0,i.j4)(d,{class:"nav-bar","active-text-color":"#1e1e1e","background-color":"#1e1e1e","default-active":l.setDefaultVal(),"text-color":"#fff",onSelect:l.handleOpen,collapse:n.collapse},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.routes,((e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[e.rootObj?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[e.children?((0,i.wg)(),(0,i.j4)(s,{key:1,index:t+1},{title:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(e.name),1)])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.children,((e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[l.hideInNav(e)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:0,index:e.name},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(e.name),1)])),_:2},1032,["index"]))],64)))),256))])),_:2},1032,["index"])):((0,i.wg)(),(0,i.j4)(u,{key:0,index:e.name},{default:(0,i.w5)((()=>[(0,i._)("span",null,(0,o.zw)(e.name),1)])),_:2},1032,["index"]))],64))],64)))),256))])),_:1},8,["default-active","onSelect","collapse"])}var y=n(5781),w={name:"NavBar",components:{Avatar:y.qEK,Bicycle:y.Ai4},props:{routes:{type:Array},collapse:{type:Boolean,default:!1}},methods:{hideInNav(e){return!!e.hasOwnProperty("settings")&&(!!e.settings.hasOwnProperty("hideInNav")&&e.settings.hideInNav)},setDefaultVal(){let e=this.$route.fullPath,t="",n=Object.keys(h);return n.forEach((n=>{e.includes(n)&&(t=h[n])})),t},handleOpen(e,t=!0){let n=v.slice(),r=this.parseArray(n,e);this.$store.commit("setCurrentRoute",r),t&&(window.location.href=`#${r.path}`)},parseArray(e,t){let n={};return e.forEach((e=>{e.name===t&&(n={...e}),e.children&&e.children.forEach((r=>{r.name===t&&(n={...r},n.path=`${e.path}/${r.path}`)}))})),n}}},x=n(3744);const k=(0,x.Z)(w,[["render",b]]);var D=k,O={components:{NavBar:D},methods:{setDefaultVal(){let e=this.$route.fullPath,t="",n=Object.keys(this.routeMap);return n.forEach((n=>{e.includes(n)&&(t=this.routeMap[n])})),t}},computed:{routeMap(){return h},isCollapsed(){return this.$store.getters.isNavBarCollapsed},getRoutes(){return v}}};const j=(0,x.Z)(O,[["render",p]]);var C=j,_=n(3907),E=(0,_.MT)({state:{pageSettings:{collapse:!1},currentRoute:{}},getters:{isNavBarCollapsed(e){return e.pageSettings.collapse},getCurrentRoute(e){return e.currentRoute}},mutations:{changeCollapse(e,t){e.pageSettings.collapse=t},setCurrentRoute(e,t){e.currentRoute=t}},actions:{},modules:{}}),N=n(9875);n(4415);let A=(0,r.ri)(C);A.use(N.Z),A.use(m),A.use(E),A.mount("#app")},2317:function(e,t,n){e.exports=n.p+"img/504-5040528_empty-profile-picture-png-transparent-png.693f3789.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],o=e[d][2];for(var l=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,i,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.80a3bdcd.js"}}(),function(){n.miniCssF=function(e){return"css/about.ab91d89a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="leggo:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var l,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),l=n.p+a;if(t(a,l))return i();e(r,l,null,i,o)}))},i={328:0};n.f.miniCss=function(e,t){var n={443:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={328:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),l=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],l=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(u)var d=u(n)}for(t&&t(r);s<a.length;s++)o=a[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkleggo"]=self["webpackChunkleggo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8094)}));r=n.O(r)})();
//# sourceMappingURL=admin.ed950e51.js.map