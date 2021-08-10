(this["webpackJsonpcountries-encyclopedia"]=this["webpackJsonpcountries-encyclopedia"]||[]).push([[0],{46:function(e,c,t){},69:function(e,c,t){},73:function(e,c,t){},84:function(e,c,t){},85:function(e,c,t){},86:function(e,c,t){},87:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),s=t(13),r=t.n(s),i=(t(46),t(10)),l=t(12),o=t(4),j=t(18),d=t(40),u=t(11),b=t.n(u),m=t(15),x=t(25),p=t(38),h={baseUrl:"https://restcountries.eu/rest/v2/"},O=t.n(p).a.create({baseURL:h.baseUrl}),f=t(41),v=(t(69),t(1)),N=function(e){var c=Object(o.f)(),t=e.country;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"card my-3 country-card",onClick:function(){return function(e){c.push("/countries-encyclopedia/country-details/",{country:e})}(t)},children:[Object(v.jsx)("img",{src:t.flag,className:"country-card__img card-img-top",alt:t.name}),Object(v.jsxs)("div",{className:"card-body text-start",children:[Object(v.jsx)("h5",{className:"card-title",children:t.name}),Object(v.jsxs)("div",{className:"card-text",children:["Population: ",t.population]}),Object(v.jsxs)("div",{className:"card-text",children:["Region: ",t.region]}),Object(v.jsxs)("div",{className:"card-text",children:["Capital: ",t.capital]})]})]})})},g=(t(73),function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),l=r[0],o=r[1],j={indicatorSeparator:function(e){return Object(x.a)(Object(x.a)({},e),{},{display:"none"})}};Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("all");case 2:c=e.sent,a(c.data),o(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(b.a.mark((function e(c){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.value,e.next=3,O.get("region/".concat(n));case 3:0!==(a=e.sent).length?o(a.data):o(t);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(v.jsxs)("section",{children:[Object(v.jsxs)("section",{className:"row g-0 country-encyclopedia__controls",children:[Object(v.jsx)("div",{className:"col-12 col-md-6 py-1",children:Object(v.jsx)("input",{type:"text",className:"form-control country-encyclopedia__search-box",onChange:function(e){return function(e){var c=e.target.value.toLowerCase(),n=t.filter((function(e){return e.name.toLowerCase().includes(c)}));0!==n.length?o(n):o(t)}(e)},placeholder:"Search for a country..."})}),Object(v.jsx)("div",{className:"col-12 col-md-6 py-1 text-end",children:Object(v.jsx)(f.a,{className:"basic-single",classNamePrefix:"react-select",name:"countriesRegion",placeholder:"filter By Region",options:[{value:"Africa",label:"Africa"},{value:"Americas",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],onChange:u,styles:j})})]}),Object(v.jsx)("section",{className:"row",children:l.map((function(e){return Object(v.jsx)("div",{className:"col-12 col-md-3",children:Object(v.jsx)(N,{country:e})},e.alpha2Code)}))})]})}),y=t(39),w=(t(84),function(e){var c=Object(o.f)();return Object(v.jsxs)("button",{className:"text-start back-btn",onClick:function(){c.goBack()},children:[Object(v.jsx)(j.a,{icon:y.a}),Object(v.jsx)("span",{className:"ms-2",children:"Back"})]})}),_=(t(85),function(e){var c=Object(n.useState)([]),t=Object(i.a)(c,2),a=t[0],s=t[1],r=Object(n.useState)(null),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(o.g)().state.country;return Object(n.useEffect)((function(){d(u)}),[u]),Object(n.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var c,t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=[],!j){e.next=14;break}t=j.borders,n=0;case 4:if(!(n<t.length)){e.next=13;break}return a=t[n],e.next=8,O.get("alpha/".concat(a));case 8:r=e.sent,c.push(r.data.name);case 10:n++,e.next=4;break;case 13:s(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(v.jsxs)("div",{className:"country-info",children:[Object(v.jsx)("div",{className:"row my-4",children:Object(v.jsx)("div",{className:"col-12 text-start",children:Object(v.jsx)(w,{})})}),Object(v.jsxs)("section",{className:"col-12 row g-0",children:[Object(v.jsx)("div",{className:"col-md-5 col-12",children:Object(v.jsx)("img",{className:"country-info__flag",src:j&&j.flag,alt:"country-name"})}),Object(v.jsx)("div",{className:"col-md-7 col-12 country-info__details",children:Object(v.jsxs)("div",{className:"my-3 my-md-5 ms-md-5",children:[Object(v.jsx)("h2",{className:"fw-bold",children:j&&j.name}),Object(v.jsxs)("div",{className:"country-info__sub-details row",children:[Object(v.jsxs)("div",{className:"col-12 col-md-6",children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"NativeName: "})," ",Object(v.jsxs)("span",{children:[" ",j&&j.nativeName," "]})]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Population: "})," ",Object(v.jsxs)("span",{children:[" ",j&&j.population," "]})]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Region: "})," ",Object(v.jsxs)("span",{children:[" ",j&&j.region," "]})]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Sub Region: "})," ",Object(v.jsxs)("span",{children:[" ",j&&j.subregion," "]})]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Capital: "})," ",Object(v.jsxs)("span",{children:[" ",j&&j.capital," "]})]})]}),Object(v.jsxs)("div",{className:"col-12 col-md-6",children:[Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Top Level Domain: "}),j&&j.topLevelDomain&&j.topLevelDomain.map((function(e,c){return Object(v.jsx)("span",{children:e},c)}))]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Currencies: "}),j&&j.currencies&&j.currencies.map((function(e,c){return Object(v.jsx)("span",{children:e.name},c)}))]}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"fw-bold",children:"Languages: "}),j&&j.languages&&j.languages.map((function(e,c){return Object(v.jsxs)("span",{className:"mx-1",children:[e.name,","]},c)}))]})]})]}),Object(v.jsx)("div",{className:"country-info__borders row my-2",children:Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("span",{className:"me-2",children:"Border Countries:"}),0!==a.length?a.map((function(e,c){return Object(v.jsx)("span",{className:"badge text-dark country-info__border-badge mx-1",children:e},c)})):Object(v.jsx)("span",{className:"alert-secondary text-center",children:"No Borders Found"})]})})]})})]})]})});t(86);var k=function(){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),t=c[0],a=c[1];return Object(v.jsx)("div",{className:"countries-container ".concat(!0===t?"dark-mode":""),children:Object(v.jsxs)(l.a,{children:[Object(v.jsxs)("div",{className:"row py-4 g-0 countries-container__header ".concat(!0===t?"country-header__dark-mode":""),children:[Object(v.jsx)("div",{className:"col-6 ps-2 ps-md-4",children:"What in the world?"}),Object(v.jsx)("div",{className:"col-6 pe-2 pe-md-4 text-end",children:Object(v.jsxs)("div",{onClick:function(){a(!0!==t)},className:"country-header__icon-color pointer",children:[Object(v.jsx)(j.a,{icon:d.a,className:"me-2"}),"Dark Mode"]})})]}),Object(v.jsx)("div",{className:"container App",children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/countries-encyclopedia/",children:Object(v.jsx)(g,{})}),Object(v.jsx)(o.a,{exact:!0,path:"/countries-encyclopedia/country-details",children:Object(v.jsx)(_,{})})]})})]})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};t.p,t.p;r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),C()}},[[87,1,2]]]);
//# sourceMappingURL=main.2573b648.chunk.js.map