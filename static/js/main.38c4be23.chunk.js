(this["webpackJsonpds-demo"]=this["webpackJsonpds-demo"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(26),s=c.n(a),d=(c(32),c(33),c(12)),l=c(11),r=c.n(l),o=(c(52),c(9)),j=c(0);var h=function(e){var t=e.item;return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.original_title})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("h1",{children:[t.title," ",new Date(t.release_date).toLocaleDateString()," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:t.original_title})]}),Object(j.jsxs)("span",{className:"rating",children:[Object(j.jsx)("span",{className:"ave",children:t.vote_average}),Object(j.jsx)("span",{className:"popularity",children:t.vote_count})," "]})]}),Object(j.jsx)("p",{children:t.overview}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),alt:t.original_title})}),Object(j.jsx)(o.b,{to:"/movie".concat(t.id.toString()),className:"details",children:"Details..."})]})]})};c(59);var b=function(){var e,t=Object(n.useState)([]),c=Object(d.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),o=l[0],b=l[1],u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"https://api.themoviedb.org/3/".concat(e,"?api_key=928aad10df5f5ccb8c2ebc480c58aa17&language=en-US&page=1").concat(t?"&query=".concat(t):"")};return Object(n.useEffect)((function(){o?r.a.get(u("search/movie",o)).then((function(e){return a(e.data)})):r.a.get(u("movie/top_rated")).then((function(e){return a(e.data)}))}),[o]),Object(j.jsxs)("div",{className:"dashboard",children:[Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{value:o,onChange:function(e){return b(e.target.value)},placeholder:"Search \ud83d\udd0d",type:"text"}),Object(j.jsx)("button",{onClick:function(){return b("")},children:"Clear"})]}),Object(j.jsx)("h1",{children:o?"Search for: ".concat(o):"Top 20 rated films"}),null===(e=i.results)||void 0===e?void 0:e.map((function(e){return Object(j.jsx)(h,{item:e},e.id)}))]})},u=c(2);c(60);var v=function(){var e,t=Object(u.f)().id,c=Object(n.useState)(),i=Object(d.a)(c,2),a=i[0],s=i[1];return console.log(a,t),document.title=null!==(e=null===a||void 0===a?void 0:a.title)&&void 0!==e?e:"Loading...",Object(n.useEffect)((function(){r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=928aad10df5f5ccb8c2ebc480c58aa17&language=en-US")).then((function(e){return s(e.data)}))}),[t]),Object(j.jsxs)("div",{className:"info item",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(null===a||void 0===a?void 0:a.poster_path),alt:null===a||void 0===a?void 0:a.original_title})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("h1",{children:[null===a||void 0===a?void 0:a.title," ",new Date(null===a||void 0===a?void 0:a.release_date).toLocaleDateString()," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("span",{children:null===a||void 0===a?void 0:a.original_title})]}),Object(j.jsxs)("span",{className:"rating",children:[Object(j.jsx)("span",{className:"ave",children:null===a||void 0===a?void 0:a.vote_average}),Object(j.jsx)("span",{className:"popularity",children:null===a||void 0===a?void 0:a.vote_count})," "]})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Adult"}),Object(j.jsx)("th",{children:"Budget"}),Object(j.jsx)("th",{children:"Genres"}),Object(j.jsx)("th",{children:"Popularity"}),Object(j.jsx)("th",{children:"Production Country(ies)"}),Object(j.jsx)("th",{children:"Production Company"}),Object(j.jsx)("th",{children:"Revenue"}),Object(j.jsx)("th",{children:"Run Time"}),Object(j.jsx)("th",{children:"Spoken Laguages"})]})}),Object(j.jsxs)("tbody",{children:[" ",Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:(null===a||void 0===a?void 0:a.adult)?"Yes":"No"}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.budget}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.genres.map((function(e){return Object(j.jsxs)("span",{children:[e.name," "]},e.id)}))}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.popularity}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.production_countries.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://www.countryflags.io/".concat(e.iso_3166_1,"/flat/16.png"),alt:e.name})," ",Object(j.jsx)("span",{children:e.name})]},e.name)}))}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.production_companies.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://www.countryflags.io/".concat(e.origin_country,"/flat/16.png"),alt:e.origin_country})," ",Object(j.jsx)("span",{children:e.name})]},e.id)}))}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.revenue}),Object(j.jsx)("td",{children:(Number(null===a||void 0===a?void 0:a.runtime)/60).toFixed(2).replace(".",":")+" h"}),Object(j.jsx)("td",{children:null===a||void 0===a?void 0:a.spoken_languages.map((function(e){return Object(j.jsx)("span",{children:e.english_name},e.id)}))})]})]})]}),Object(j.jsx)("p",{children:null===a||void 0===a?void 0:a.overview}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(null===a||void 0===a?void 0:a.backdrop_path),alt:null===a||void 0===a?void 0:a.original_title})})]})]})};var O=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(u.c,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(j.jsx)(u.a,{path:"/movie:id",component:v})]})})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.38c4be23.chunk.js.map