"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,c=r(439),i=r(791),u=r(689),o=r(690),s=r(168),p=r(487),f=p.ZP.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),d=p.ZP.li(a||(a=(0,s.Z)(["\n  min-width: 140px;\n  width: 140px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 6px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  padding-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #fff;\n  text-align: center;\n\n  &:nth-child(8n) {\n    margin-right: 0;\n  }\n\n  & img {\n    width: 100%;\n  }\n"]))),h=r(184),l=function(n){var t=n.movieCast.map((function(n){var t=n.id,r=n.profile_path,e=n.original_name,a=n.character;return(0,h.jsxs)(d,{children:[(0,h.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300".concat(r):"/path/to/placeholder-image.jpg",alt:e}),(0,h.jsx)("p",{children:e}),(0,h.jsx)("p",{children:a})]},t)}));return(0,h.jsx)(f,{children:t})},m=function(){var n=(0,i.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,u.UO)().movieId;if((0,i.useEffect)((function(){(0,o.d5)(a).then((function(n){e(n.cast)})).catch((function(n){return console.log(n)}))}),[a]),r)return 0===r.length?(0,h.jsx)("p",{children:"No, cast about this movie"}):(0,h.jsx)(l,{movieCast:r})}},690:function(n,t,r){r.d(t,{Bt:function(){return m},Df:function(){return f},Hq:function(){return d},d5:function(){return l},h_:function(){return h}});var e,a,c,i,u,o=r(165),s=r(861),p=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"83cb4c236fe3ce89960e899c26c6634d"}}),f=function(){return(e=e||(0,s.Z)((0,o.Z)().mark((function n(){var t,r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.get("/trending/movie/day");case 2:return t=n.sent,r=t.data,e=r.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)},d=function(n){return(a=a||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},h=function(n){return(c=c||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},l=function(n){return(i=i||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},m=function(n){return(u=u||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,console.log(e),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.dcb55123.chunk.js.map