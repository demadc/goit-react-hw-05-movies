"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{854:function(n,t,r){r.d(t,{a:function(){return a}});var e=r(1325),u=r(184),a=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(e.Z,{color:"#36d7b7"})})}},4672:function(n,t,r){r.d(t,{O:function(){return v}});var e,u,a=r(168),i=r(6487),c=i.ZP.ul(e||(e=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),o=i.ZP.li(u||(u=(0,a.Z)(["\n  width: 200px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 8px;\n\n  border: 1px solid #663fd1;\n  padding-bottom: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  text-align: center;\n\n  &:nth-child(5n) {\n    margin-right: 0;\n  }\n\n  & a {\n    text-decoration: none;\n    color: #0e84df;\n  }\n\n  & p {\n    font-weight: 800;\n  }\n\n  & img {\n    width: 200px;\n    height: 250px;\n  }\n"]))),s=r(7689),A=r(1087),p=r(1333),h=r(184),v=function(n){var t=n.list,r=(0,s.TH)();return(0,h.jsx)(c,{children:t.map((function(n){var t=n.id,e=n.title,u=n.poster_path;return(0,h.jsx)(o,{children:(0,h.jsxs)(A.rU,{to:"/movies/".concat(t),state:{from:r},children:[(0,h.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w300/".concat(u):p,alt:e}),(0,h.jsx)("p",{children:e})]})},t)}))})}},3310:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,u,a,i,c=r(9439),o=r(1087),s=r(2791),A=r(2906),p=r(168),h=r(6487),v=h.ZP.section(e||(e=(0,p.Z)([""]))),x=h.ZP.form(u||(u=(0,p.Z)(["\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n\n  position: relative;\n"]))),g=h.ZP.button(a||(a=(0,p.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  top: 10px;\n  left: 100%;\n"]))),d=h.ZP.input(i||(i=(0,p.Z)(["\n  width: 100%;\n  padding: 8px 12px 8px 12px;\n  border-radius: 8px;\n\n  font: inherit;\n  cursor: pointer;\n"]))),l=r(3313),f=r(184),j=function(n){var t=n.handleQuery,r=(0,s.useState)(""),e=(0,c.Z)(r,2),u=e[0],a=e[1];return(0,f.jsxs)(x,{onSubmit:function(n){n.preventDefault(),u&&(t(u),a(""))},children:[(0,f.jsx)(g,{type:"submit",children:(0,f.jsx)(l.jRj,{size:"20px"})}),(0,f.jsx)(d,{onChange:function(n){a(n.target.value)},value:u})]})},m=r(4672),K=r(854),w=r(2690),Z=function(){var n=(0,o.lr)(),t=(0,c.Z)(n,2),r=t[0],e=t[1],u=(0,s.useState)([]),a=(0,c.Z)(u,2),i=a[0],p=a[1],h=(0,s.useState)(!1),x=(0,c.Z)(h,2),g=x[0],d=x[1];return(0,s.useEffect)((function(){var n=r.get("query");n&&(d(!0),(0,w.Hq)(n).then((function(n){p(n.results)})).catch((function(n){return console.log(n)})).finally((function(){return d(!1)})))}),[r]),(0,f.jsx)(v,{children:(0,f.jsxs)(A.W2,{children:[(0,f.jsx)(j,{handleQuery:function(n){e({query:n})}}),g?(0,f.jsx)(K.a,{}):(0,f.jsx)(m.O,{list:i})]})})}},2690:function(n,t,r){r.d(t,{Bt:function(){return g},Df:function(){return p},Hq:function(){return h},d5:function(){return x},h_:function(){return v}});var e,u,a,i,c,o=r(4165),s=r(5861),A=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"83cb4c236fe3ce89960e899c26c6634d"}}),p=function(){return(e=e||(0,s.Z)((0,o.Z)().mark((function n(){var t,r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("/trending/movie/day");case 2:return t=n.sent,r=t.data,e=r.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)},h=function(n){return(u=u||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},v=function(n){return(a=a||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},x=function(n){return(i=i||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)},g=function(n){return(c=c||(0,s.Z)((0,o.Z)().mark((function n(t){var r,e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,console.log(e),n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},1333:function(n){n.exports="data:image/gif;base64,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"}}]);
//# sourceMappingURL=310.ba2cc611.chunk.js.map