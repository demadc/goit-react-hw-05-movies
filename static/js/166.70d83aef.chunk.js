"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{854:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(325),o=t(184),a=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,{color:"#36d7b7"})})}},166:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,a,i,c,s,u,l,d,p,f,v,h,m,x,Z,g=t(439),b=t(791),w=t(689),y=t(87),j=t(690),k=t(168),P=t(487),O=P.ZP.div(r||(r=(0,k.Z)(["\n  height: 500px;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]))),_=P.ZP.img(o||(o=(0,k.Z)(["\n  width: 300px;\n"]))),S=P.ZP.h1(a||(a=(0,k.Z)(["\n  font-size: 50px;\n  color: #1919c1;\n"]))),z=P.ZP.p(i||(i=(0,k.Z)([""]))),E=P.ZP.p(c||(c=(0,k.Z)([""]))),C=P.ZP.p(s||(s=(0,k.Z)(["\n  display: inline-block;\n  letter-spacing: 0.06em;\n  color: #484647;\n"]))),F=P.ZP.p(u||(u=(0,k.Z)(["\n  color: blue;\n  font-size: 30px;\n  font-weight: bold;\n"]))),M=P.ZP.div(l||(l=(0,k.Z)(["\n  display: flex;\n  gap: 20px;\n  color: #14e08b;\n  font-weight: bold;\n"]))),R=P.ZP.p(d||(d=(0,k.Z)(["\n  font-size: 16px;\n"]))),B=P.ZP.div(p||(p=(0,k.Z)(["\n  padding-left: 30px;\n"]))),D=P.ZP.div(f||(f=(0,k.Z)(["\n  display: flex;\n"]))),L=P.ZP.span(v||(v=(0,k.Z)(["\n  font-weight: bold;\n"]))),I=P.ZP.div(h||(h=(0,k.Z)(["\n  display: flex;\n"]))),U=(0,P.ZP)(y.OL)(m||(m=(0,k.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  border: 1px solid #2185d6;\n  margin-right: 10px;\n\n  &.active {\n    color: white;\n    background-color: #1271be;\n  }\n"]))),q=P.ZP.div(x||(x=(0,k.Z)(["\n  margin-top: 30px;\n  margin-bottom: 10px;\n"]))),G=P.ZP.h2(Z||(Z=(0,k.Z)(["\n  font-size: 20px;\n  color: #9393e9;\n"]))),H=t(184),$=function(n){var e=n.movie;if(!e)return null;var t=e.poster_path,r=e.title,o=e.vote_average,a=e.overview,i=e.genres,c=e.release_date;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(O,{children:(0,H.jsxs)(D,{children:[(0,H.jsx)(_,{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:r}),(0,H.jsxs)(B,{children:[(0,H.jsx)(S,{children:r}),(0,H.jsx)(z,{children:c}),(0,H.jsxs)(E,{children:[o?Math.round(100*o/10):"...","%"]}),(0,H.jsxs)(C,{children:["Overview: ",(0,H.jsx)(L,{children:a})]}),(0,H.jsx)(F,{children:"Genres"}),(0,H.jsx)(M,{children:i&&i.map((function(n){return(0,H.jsx)(R,{children:n.name},n.id)}))})]})]})}),(0,H.jsxs)(q,{children:[(0,H.jsx)(G,{children:"Additional information"}),(0,H.jsxs)(I,{children:[(0,H.jsx)(U,{to:"cast",children:"Cast"}),(0,H.jsx)(U,{to:"reviews",children:"Reviews"})]}),(0,H.jsx)(w.j3,{})]})]})},A=t(854),T=t(906),W=function(){var n,e,t=(0,w.UO)().movieId,r=(0,b.useState)(!1),o=(0,g.Z)(r,2),a=o[0],i=o[1],c=(0,b.useState)(null),s=(0,g.Z)(c,2),u=s[0],l=s[1],d=(0,w.TH)(),p=null!==(n=null===d||void 0===d||null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,b.useEffect)((function(){t&&(i(!0),(0,j.h_)(t).then(l).catch((function(n){return console.log(n)})).finally((function(){return i(!1)})))}),[t]),(0,H.jsxs)(T.$0,{children:[(0,H.jsx)(y.rU,{to:p,styled:{marginBottom:"60px",color:"#dfdbdb",letterSpacing:"0.06em",outlineBorder:"black"},children:"GoBack"}),(0,H.jsxs)(T.W2,{children:[a&&(0,H.jsx)(A.a,{}),u&&(0,H.jsx)($,{movie:u})]})]})}},690:function(n,e,t){t.d(e,{Bt:function(){return h},Df:function(){return d},Hq:function(){return p},d5:function(){return v},h_:function(){return f}});var r,o,a,i,c,s=t(165),u=t(861),l=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"83cb4c236fe3ce89960e899c26c6634d"}}),d=function(){return(r=r||(0,u.Z)((0,s.Z)().mark((function n(){var e,t,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,r=t.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)},p=function(n){return(o=o||(0,u.Z)((0,s.Z)().mark((function n(e){var t,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},f=function(n){return(a=a||(0,u.Z)((0,s.Z)().mark((function n(e){var t,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},v=function(n){return(i=i||(0,u.Z)((0,s.Z)().mark((function n(e){var t,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},h=function(n){return(c=c||(0,u.Z)((0,s.Z)().mark((function n(e){var t,r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},325:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(791),o={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(n){if("number"===typeof n)return{value:n,unit:"px"};var e,t=(n.match(/^[0-9.]*/)||"").toString();e=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(n.match(/[^0-9]*$/)||"").toString();return o[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function i(n){var e=a(n);return"".concat(e.value).concat(e.unit)}var c=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var a=o.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return a&&a.insertRule(i,0),r},s=function(){return s=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},s.apply(this,arguments)},u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t},l=c("DotLoader","100% {transform: rotate(360deg)}","rotate"),d=c("DotLoader","0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}","bounce");var p=function(n){var e=n.loading,t=void 0===e||e,o=n.color,c=void 0===o?"#000000":o,p=n.speedMultiplier,f=void 0===p?1:p,v=n.cssOverride,h=void 0===v?{}:v,m=n.size,x=void 0===m?60:m,Z=u(n,["loading","color","speedMultiplier","cssOverride","size"]),g=s({display:"inherit",position:"relative",width:i(x),height:i(x),animationFillMode:"forwards",animation:"".concat(l," ").concat(2/f,"s 0s infinite linear")},h),b=function(n){var e=a(x),t=e.value,r=e.unit;return{position:"absolute",top:n%2?"0":"auto",bottom:n%2?"auto":"0",height:"".concat(t/2).concat(r),width:"".concat(t/2).concat(r),backgroundColor:c,borderRadius:"100%",animationFillMode:"forwards",animation:"".concat(d," ").concat(2/f,"s ").concat(2===n?"1s":"0s"," infinite linear")}};return t?r.createElement("span",s({style:g},Z),r.createElement("span",{style:b(1)}),r.createElement("span",{style:b(2)})):null}}}]);
//# sourceMappingURL=166.70d83aef.chunk.js.map