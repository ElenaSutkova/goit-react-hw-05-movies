"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{126:function(e,t,r){r(791);var n=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r.pathname},children:[e.title||e.name," - ",e.release_date||e.first_air_date]})},e.id)}))})})}},936:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o="Home_title__XLxL1",u=r(126),f=r(184),l=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"29f90e29dc5d68acf14782a0c1b612a1","week",e.next=5,fetch("https://api.themoviedb.org/3/trending/all/".concat("week","?api_key=").concat("29f90e29dc5d68acf14782a0c1b612a1"));case 5:if(!(t=e.sent).ok){e.next=13;break}return e.next=9,t.json();case 9:r=e.sent,c(r.results),e.next=14;break;case 13:throw new Error("Network response was not ok.");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:o,children:"Trending Movies"}),(0,f.jsx)(u.Z,{movies:r})]})},d=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(l,{})})}}}]);
//# sourceMappingURL=936.352cb13d.chunk.js.map