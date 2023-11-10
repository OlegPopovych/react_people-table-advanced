(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(27),a=c(8),r=(c(36),c(37),c(3)),s=c(5),i=c(9),l=c.n(i),o=c(1),j=function(){var e=Object(a.d)(),t=Object(s.a)(e,1)[0].toString();return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(o.jsx)(a.c,{to:{pathname:"/people",search:t},className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},u=(c(39),function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),d=c(4),b=c(11),h=c(6),m=c(0),O="https://mate-academy.github.io/react_people-table/api/people.json";function x(e){return new Promise((function(t){return setTimeout(t,e)}))}function p(){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(500).then((function(){return fetch(O)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=c(25);function N(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var g=["children","params"],y=function(e){var t=e.children,c=e.params,n=Object(v.a)(e,g),r=Object(a.d)(),i=Object(s.a)(r,1)[0],l=i.getAll("centuries"),j=c;return j.centuries&&"string"===typeof j.centuries&&(l.includes(j.centuries)?(l=l.filter((function(e){return e!==j.centuries})),j.centuries=l.length?l:null):(l.push(j.centuries),j.centuries=l)),Object(o.jsx)(a.b,Object(b.a)(Object(b.a)({to:{search:N(i,c)}},n),{},{children:t}))},w=function(){var e=Object(r.o)(),t=Object(a.d)(),c=Object(s.a)(t,1)[0],n=c.getAll("centuries"),i=c.get("sex"),j=c.get("query");return Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(o.jsx)(y,{params:{sex:null},className:l()({"is-active":null===i}),children:"All"}),Object(o.jsx)(y,{params:{sex:"m"},className:l()({"is-active":"m"===i}),children:"Male"}),Object(o.jsx)(y,{params:{sex:"f"},className:l()({"is-active":"f"===i}),children:"Female"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{value:j||"","data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(t){var n={query:t.target.value||null};e({search:N(c,n)})}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(o.jsxs)("div",{className:"level-left",children:[Object(o.jsx)(y,{params:{centuries:"16"},"data-cy":"century",className:l()("button mr-1",{"is-info":n.includes("16")}),children:"16"}),Object(o.jsx)(y,{params:{centuries:"17"},"data-cy":"century",className:l()("button mr-1",{"is-info":n.includes("17")}),children:"17"}),Object(o.jsx)(y,{params:{centuries:"18"},"data-cy":"century",className:l()("button mr-1",{"is-info":n.includes("18")}),children:"18"}),Object(o.jsx)(y,{params:{centuries:"19"},"data-cy":"century",className:l()("button mr-1",{"is-info":n.includes("19")}),children:"19"}),Object(o.jsx)(y,{params:{centuries:"20"},"data-cy":"century",className:l()("button mr-1",{"is-info":n.includes("20")}),children:"20"})]}),Object(o.jsx)("div",{className:"level-right ml-4",children:Object(o.jsx)(y,{params:{centuries:null},"data-cy":"centuryALL",className:l()("button is-success",{"is-outlined":n.length}),children:"All"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)(y,{params:{centuries:null,query:null,sex:null},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})},k=(c(40),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),S=c(10),A=function(e){var t=e.person;return Object(o.jsx)(a.b,{className:l()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),to:"/people/".concat(null===t||void 0===t?void 0:t.slug),children:null===t||void 0===t?void 0:t.name})},L=["children","params"],P=function(e){var t=e.children,c=e.params,n=Object(v.a)(e,L),r=Object(a.d)(),i=Object(s.a)(r,1)[0],j={},u=i.get("sort"),d=i.get("order");return c!==u&&(j.sort=c),c===u&&null===d&&(j.order="desc"),u===c&&d&&(j.order=null,j.sort=null),u!==c&&d&&(j.order=null,j.sort=c),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[t,Object(o.jsx)(a.b,Object(b.a)(Object(b.a)({to:{search:N(i,j)}},n),{},{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:l()("fas",{"fa-sort":u!==c},{"fa-sort-up":u===c&&!d},{"fa-sort-down":u===c&&d})})})}))]})})},F=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),q=function(e){var t=e.people,c=Object(r.q)().slug,n=Object(a.d)(),i=Object(s.a)(n,1)[0],j=i.get("sort"),u=i.get("order"),d=i.getAll("centuries"),b=i.get("sex"),h=i.get("query"),m=function(){var e=Object(S.a)(t),c=u?-1:1;switch(j){case F.Name:case F.Sex:e.sort((function(e,t){return e[j].toLocaleLowerCase().localeCompare(t[j].toLocaleLowerCase())*c}));break;case F.Born:case F.Died:e.sort((function(e,t){return(e[j]-t[j])*c}))}return b&&(e=e.filter((function(e){return e.sex===b}))),h&&(e=e.filter((function(e){var t,c;return!!(e.name.includes(h)||null!==(t=e.fatherName)&&void 0!==t&&t.includes(h)||null!==(c=e.motherName)&&void 0!==c&&c.includes(h))}))),d.length>0&&(e=e.filter((function(e){return d.includes(String(Math.ceil(e.born/100)))}))),e}();return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object.keys(F).map((function(e){return Object(o.jsx)(P,{params:F[e],children:e},e)})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:m.map((function(e){return Object(o.jsxs)("tr",{className:l()({"has-background-warning":e.slug===c}),"data-cy":"person",children:[Object(o.jsx)("td",{children:Object(o.jsx)(A,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:e.motherName?t.find((function(t){var c;return t.motherName===(null===(c=e.mother)||void 0===c?void 0:c.name)}))?Object(o.jsx)(A,{person:e.mother}):e.motherName:"-"}),Object(o.jsx)("td",{children:e.fatherName?t.find((function(t){var c;return t.fatherName===(null===(c=e.father)||void 0===c?void 0:c.name)}))?Object(o.jsx)(A,{person:e.father}):e.fatherName:"-"})]},e.slug)}))})]})},C=function(){return Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},E=function(){var e=Object(m.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(m.useState)(!0),r=Object(s.a)(a,2),i=r[0],l=r[1],j=Object(m.useState)(!1),u=Object(s.a)(j,2),O=u[0],x=u[1],f=function(){var e=Object(h.a)(Object(d.a)().mark((function e(){var t,c;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),x(!1),e.prev=2,e.next=5,p();case 5:t=e.sent,c=t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(b.a)(Object(b.a)({},e),{},{mother:c,father:n})})),n(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),x(!0);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){f()}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(o.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:0!==c.length&&Object(o.jsx)(w,{})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("div",{className:"box table-container",children:i?Object(o.jsx)(k,{}):O?Object(o.jsx)(C,{}):c.length||i?Object(o.jsx)(q,{people:c}):Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})})]})})]})},_=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},M=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(u,{})}),Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(E,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(E,{})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(_,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(M,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1dae7a0c.chunk.js.map