"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{126:function(e,t,r){r(791);var n=r(689),a=r(87),s=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r.pathname},children:[e.title||e.name," - ",e.release_date||e.first_air_date]})},e.id)}))})})}},797:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(87),o={},l=r(126),h=r(891),d=r(184),m=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],s=t[1],m=(0,i.useState)([]),f=(0,a.Z)(m,2),p=f[0],v=f[1],x=(0,i.useState)(null),j=(0,a.Z)(x,2),S=j[0],w=j[1],Z=(0,i.useState)(!1),g=(0,a.Z)(Z,2),k=g[0],_=g[1],b=(0,u.lr)(),N=(0,a.Z)(b,2),y=N[0],z=N[1];(0,i.useEffect)((function(){var e=y.get("query"),t=localStorage.getItem("searchTerm");e?(s(e),(0,h.z1)(e,v,_,w)):t&&(s(t),(0,h.z1)(t,v,_,w))}),[y]);var C=function(){var e=(0,n.Z)(c().mark((function e(t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=r.trim(),(a=new URLSearchParams(window.location.search)).set("query",n),z(a),s(n),localStorage.setItem("searchTerm",n),(0,h.z1)(n,p,_,w);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:o.container,children:(0,d.jsxs)("form",{className:o.form,onSubmit:C,children:[(0,d.jsx)("input",{type:"text",className:o.input,value:r,onChange:function(e){s(e.target.value)},placeholder:"Search for a movie"}),(0,d.jsx)("button",{className:o.button,type:"submit",children:(0,d.jsx)("span",{className:o.span,children:"Search"})})]})}),S&&(0,d.jsx)("p",{children:S}),(0,d.jsxs)("div",{children:[k&&(0,d.jsx)("p",{children:"No results found"}),p.length>0&&(0,d.jsx)(l.Z,{movies:p})]})]})},f=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(m,{})})}}}]);
//# sourceMappingURL=797.ac986344.chunk.js.map