(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{34:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(27),n=a.n(s),i=(a(34),a(11)),l=a(6),o=a(13),d=a(0);var j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(l.h)();return Object(c.useEffect)((function(){r(s.pathname)}),[s]),Object(d.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark nav",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Movie Master"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item ".concat("/MovieApp"===a?"active":"inactive"," "),children:Object(d.jsxs)(o.b,{className:"nav-link",to:"/MovieApp",children:["Home ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item ".concat(a.includes("details")?"active":"inactive"," "),children:Object(d.jsx)(o.b,{className:"nav-link",to:"/MovieApp/details/",children:"details "})})]})})]})})},b=a(29),h=a.p+"static/media/pre-loader.71a85dd2.gif";var p=function(){return Object(d.jsx)("div",{className:"center",children:Object(d.jsx)("img",{src:h,alt:""})})},u=a(52),v=a(48),m=a(49),O=a(50),x=a(53),f=a(51);a(41),a(42),a(43),a(44);u.a.use([v.a,m.a,O.a]);var g=function(e){var t=e.children,a=e.loop,c=void 0===a||a;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x.a,{watchSlidesProgress:!0,watchSlidesVisibility:!0,preloadImages:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:1},320:{slidesPerView:2,spaceBetween:1},480:{slidesPerView:3,spaceBetween:3},640:{slidesPerView:3,spaceBetween:3},1024:{slidesPerView:8,spaceBetween:1}},loop:c,scrollbar:{draggable:!0},grabCursor:!0,navigation:!0,lazy:!0,children:"undefined"!=typeof t&&t.length>1?t.map((function(e,t){return Object(d.jsxs)(f.a,{className:"swiper-lazy",children:[e,Object(d.jsx)("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-white"})]},t)})):Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-white"})})})})},w=a(20);var N=function(e){var t=Object(w.a)({},e),a=t.keyid,c=t.src,r=t.title,s=t.releaseDate,n=t.original_language,i=t.overview,l=t.vote_average;return Object(d.jsxs)("div",{className:"card ",children:[Object(d.jsx)("img",{src:"".concat(c,"/?braker=").concat(a," "),alt:a,className:"card-img-top swiper-lazy",loading:"lazy"}),Object(d.jsxs)("div",{className:"card-img-overlay",children:[Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:"card-title slide-title",children:[r," (",n,")"]})}),Object(d.jsxs)("div",{className:"slide-info",children:[Object(d.jsxs)("span",{className:"card-text slide-info-vote",children:[Object(d.jsx)("i",{className:"fas fa-star",style:{color:"#ffa41c"}})," ",l]}),Object(d.jsx)("span",{className:"card-text slide-info-date",children:s})]}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"card-text slide-description",children:i.substring(0,180)+"..."})})]})]},a)};var y=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),n=Object(i.a)(s,2),l=n[0],o=n[1];return Object(c.useEffect)((function(){if(l.length<=50){var e=l.length+1,t=new Date,a=Object(d.jsx)(N,{keyid:e,src:"https://picsum.photos/200/300",title:"nombre"+e,original_language:"EN",overview:"Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",vote_average:Math.floor(10*Math.random()),releaseDate:t.getFullYear()},e);o([].concat(Object(b.a)(l),[a])),l.length>=50&&r(!1)}}),[l]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(p,{}):Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("h1",{children:"HOME PAGE"}),Object(d.jsx)(g,{autoHeight:!0,children:l})]})})},k=a(12),M=a.n(k),S=a(16);var _=function(){var e=Object(l.g)();return Object(c.useEffect)((function(){var t=setTimeout((function(){e.push("/")}),3e3);return function(){return clearTimeout(t)}}),[e]),Object(d.jsxs)("div",{className:"center",children:[Object(d.jsx)("h2",{children:Object(d.jsx)("code",{children:"404 Page Not Found"})}),Object(d.jsx)("h3",{children:"Redirecting..."})]})},A="https://image.tmdb.org/t/p/";var E=function(e){var t=e.poster_path,a=e.title,c=e.release_date,r=e.overview,s=e.vote_average,n=e.backdrop_path,i=e.genres;return Object(d.jsx)("div",{className:"details-header",style:{backgroundImage:"url(".concat(A,"/original/").concat(n,")")},children:Object(d.jsx)("div",{className:"filter",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12  col-sm-12 col-md-5 ",children:Object(d.jsx)("img",{src:"".concat(A,"/w500/").concat(t),alt:"poster_image"})}),Object(d.jsxs)("div",{className:"col-12 col-sm-12 col-md-7 details-data",children:[Object(d.jsx)("div",{className:"row title",children:Object(d.jsxs)("h2",{children:[a," ",Object(d.jsxs)("span",{children:["(",c.substring(0,4),")"]})]})}),Object(d.jsxs)("div",{className:"row info ",children:[Object(d.jsx)("span",{className:" ",children:c}),i.map((function(e,t){return Object(d.jsxs)("span",{className:" genre",children:["".concat(e.name)," "]},t)}))]}),Object(d.jsx)("div",{className:"row info",children:Object(d.jsxs)("span",{className:" ",children:[Object(d.jsx)("i",{className:"fas fa-star",style:{color:"#ffa41c"}})," ",s+"/10"]})}),Object(d.jsx)("div",{className:"row description",children:Object(d.jsx)("p",{children:r})})]})]})})})})};var P,F=function(e){var t=e.videos,a=void 0===t?"[]":t;return Object(d.jsx)(d.Fragment,{children:typeof a===typeof[]?Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("h3",{children:["Videos ",Object(d.jsxs)("span",{children:["(",a.length,")"]})]}),Object(d.jsxs)("div",{id:"Carousel-videos",className:"carousel slide carouselmovie","data-ride":"carousel","data-interval":"0",children:[Object(d.jsx)("ol",{class:"carousel-indicators",children:a.map((function(e,t){return Object(d.jsx)("li",{"data-target":"#Carousel-videos","data-slide-to":t,className:"".concat(0===t?"active":"inactive")})}))}),Object(d.jsx)("div",{className:"carousel-inner",children:a.map((function(e,t){return Object(d.jsx)("div",{className:"carousel-item  ".concat(0===t?"active":"inactive"),children:Object(d.jsx)("iframe",{className:"d-block w-100",width:"1020",height:"480",src:"https://www.youtube-nocookie.com/embed/".concat(e.key),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},t)},t)}))})]})]}):""})};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function z(e,t){var a=e.title,r=e.titleId,s=B(e,["title","titleId"]);return c.createElement("svg",V({id:"glyphicons-basic",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},s),a?c.createElement("title",{id:r},a):null,P||(P=c.createElement("path",{fill:"#b5b5b5",id:"user",d:"M27,24.23669V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V24.23669a1.57806,1.57806,0,0,1,.93115-1.36462L10.0672,20.167A5.02379,5.02379,0,0,0,14.55273,23h1.89454a5.02336,5.02336,0,0,0,4.48535-2.83313l5.13623,2.7052A1.57806,1.57806,0,0,1,27,24.23669ZM9.64478,14.12573a2.99143,2.99143,0,0,0,1.31073,1.462l.66583,3.05176A2.99994,2.99994,0,0,0,14.55237,21h1.89526a2.99994,2.99994,0,0,0,2.931-2.36047l.66583-3.05176a2.99115,2.99115,0,0,0,1.31073-1.462l.28-.75146A1.2749,1.2749,0,0,0,21,11.62988V9c0-3-2-5-5.5-5S10,6,10,9v2.62988a1.2749,1.2749,0,0,0-.63519,1.74439Z"})))}var C=c.forwardRef(z);a.p;var I=function(e){var t=e.cast;return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(g,{loop:!1,children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"card ",style:{marginRight:".5rem"},children:[null!=e.profile_path?Object(d.jsx)("img",{className:"card-img-top",src:"".concat("https://image.tmdb.org/t/p/","w200/").concat(e.profile_path),alt:"person"}):Object(d.jsx)(C,{className:"card-img-top",style:{paddingBottom:"3.5rem",height:"100%"}}),Object(d.jsxs)("div",{className:"card-body people",children:[Object(d.jsx)("a",{href:"https://www.themoviedb.org/person/".concat(e.id),target:"_blank",children:Object(d.jsx)("h6",{className:"card-title",children:e.name})}),Object(d.jsx)("p",{className:"card-text",style:{fontSize:".8rem"},children:e.character})]})]},t)}))})})},D="2dc9a9ee49a9191b5b1a629fa423fe71",T="https://api.themoviedb.org/3/";function H(e){return R.apply(this,arguments)}function R(){return(R=Object(S.a)(M.a.mark((function e(t){var a,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"get"},e.next=3,fetch(t,a);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8392,t="".concat(T,"movie/").concat(e,"/videos?api_key=").concat(D),a=fetch(t,{method:"get"}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));return a}function G(){return J.apply(this,arguments)}function J(){return(J=Object(S.a)(M.a.mark((function e(){var t,a,c=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:8392,e.prev=1,a="".concat(T,"movie/").concat(t,"?api_key=").concat(D),e.next=5,H(a);case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function Y(){return Z.apply(this,arguments)}function Z(){return(Z=Object(S.a)(M.a.mark((function e(){var t,a,c=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:8392,e.prev=1,a="".concat(T,"movie/").concat(t,"/credits?api_key=").concat(D),e.next=5,H(a);case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var q=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(l.i)().movie_id,n=Object(c.useState)(!0),o=Object(i.a)(n,2),j=o[0],b=o[1],h=Object(c.useState)({}),u=Object(i.a)(h,2),v=u[0],m=u[1],O=Object(c.useState)([{}]),x=Object(i.a)(O,2),f=x[0],g=x[1],N=Object(c.useState)([{}]),y=Object(i.a)(N,2),k=y[0],A=y[1];return Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(M.a.mark((function e(){var t,a,c,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(s);case 2:if(!(t=e.sent).ok){e.next=20;break}return e.next=6,t.json();case 6:return a=e.sent,m(a),L(s).then((function(e){return g(e)})),e.next=11,Y(s);case 11:if(!(c=e.sent).ok){e.next=17;break}return e.next=15,c.json();case 15:n=e.sent,A(n);case 17:b(!1),e.next=21;break;case 20:r(!0);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j&&function(){e.apply(this,arguments)}()}),[j]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)(_,{}):j?Object(d.jsx)(p,{}):Object(d.jsxs)("div",{children:[Object(d.jsx)(E,Object(w.a)({},v)),Object(d.jsx)(I,{cast:k.cast}),Object(d.jsx)(F,{videos:f.results})]})})};var W=function(){var e=new Date;return Object(d.jsx)("div",{className:"bg-dark mt-3 mb-0",id:"footer",children:Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsxs)("span",{className:"text-light bg-dark",children:["CopyRight \xa9 MarioG108 ",e.getFullYear()]})})})};var K=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"container-fluid",style:{paddingTop:"70px"},children:Object(d.jsxs)(l.d,{children:[Object(d.jsxs)(l.b,{path:"/MovieApp",exact:!0,children:[" ",Object(d.jsx)(y,{})]}),Object(d.jsx)(l.b,{path:"/home",exact:!0,children:Object(d.jsx)(l.a,{to:"/MovieApp"})}),Object(d.jsxs)(l.b,{path:"/MovieApp/details/",exact:!0,children:[" ",Object(d.jsx)(q,{})]}),Object(d.jsxs)(l.b,{path:"/MovieApp/details/:movie_id",exact:!0,children:[" ",Object(d.jsx)(q,{})]}),Object(d.jsx)(l.b,{path:"*",children:Object(d.jsx)(_,{})})]})}),Object(d.jsx)(W,{})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),Q()}},[[46,1,2]]]);
//# sourceMappingURL=main.7e20b935.chunk.js.map