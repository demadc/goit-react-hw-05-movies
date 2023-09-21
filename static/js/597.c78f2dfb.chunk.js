"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{7597:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e,a,u=r(9439),c=r(2791),i=r(7689),A=r(2690),s=r(168),o=r(6487),p=o.ZP.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),v=o.ZP.li(a||(a=(0,s.Z)(["\n  min-width: 140px;\n  width: 140px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 6px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  padding-bottom: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #fff;\n  text-align: center;\n\n  &:nth-child(8n) {\n    margin-right: 0;\n  }\n\n  & img {\n    width: 100%;\n  }\n"]))),h=r(1333),g=r(184),x=function(t){var n=t.movieCast.map((function(t){var n=t.id,r=t.profile_path,e=t.original_name,a=t.character;return(0,g.jsxs)(v,{children:[(0,g.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300".concat(r):h,alt:e}),(0,g.jsx)("p",{children:e}),(0,g.jsx)("p",{children:a})]},n)}));return(0,g.jsx)(p,{children:n})},d=function(){var t=(0,c.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,i.UO)().movieId;if((0,c.useEffect)((function(){(0,A.d5)(a).then((function(t){e(t.cast)})).catch((function(t){return console.log(t)}))}),[a]),r)return 0===r.length?(0,g.jsx)("p",{children:"No, cast about this movie"}):(0,g.jsx)(x,{movieCast:r})}},2690:function(t,n,r){r.d(n,{Bt:function(){return x},Df:function(){return p},Hq:function(){return v},d5:function(){return g},h_:function(){return h}});var e,a,u,c,i,A=r(4165),s=r(5861),o=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"83cb4c236fe3ce89960e899c26c6634d"}}),p=function(){return(e=e||(0,s.Z)((0,A.Z)().mark((function t(){var n,r,e;return(0,A.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/trending/movie/day");case 2:return n=t.sent,r=n.data,e=r.results,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)},v=function(t){return(a=a||(0,s.Z)((0,A.Z)().mark((function t(n){var r,e;return(0,A.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)},h=function(t){return(u=u||(0,s.Z)((0,A.Z)().mark((function t(n){var r,e;return(0,A.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)},g=function(t){return(c=c||(0,s.Z)((0,A.Z)().mark((function t(n){var r,e;return(0,A.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)},x=function(t){return(i=i||(0,s.Z)((0,A.Z)().mark((function t(n){var r,e;return(0,A.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,console.log(e),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},1333:function(t){t.exports="data:image/gif;base64,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"}}]);
//# sourceMappingURL=597.c78f2dfb.chunk.js.map