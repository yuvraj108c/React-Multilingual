(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n){},20:function(e){e.exports={"home.greeting":"Welcome","home.description":"This is our website","home.button":"Get Started"}},21:function(e){e.exports={"home.greeting":"Bienvenue!","home.description":"Ici c'est notre website!","home.button":"Commencer ici"}},24:function(e,n,t){e.exports=t(51)},29:function(e,n,t){},37:function(e,n){},43:function(e,n){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var a=t(12),c=t(0),o=t.n(c),r=t(7),i=t.n(r),u=(t(29),t(3)),l=t(17),g=t.n(l),s=t(18),m=t.n(s),h=t(8),f=t(9),E=t(23),v={language:"en"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_LANGUAGE":return Object(E.a)({},e,{language:n.value});default:return e}},b=t(22),p=(t(48),function(e){var n=Object(c.useState)(e.language),t=Object(b.a)(n,2),a=t[0],r=t[1];Object(c.useEffect)(function(){e.changeLanguage(a)},[a]);return o.a.createElement("nav",{className:"navbar"},o.a.createElement("select",{onChange:function(e){r(e.target.value)}},o.a.createElement("option",{value:"en"},"English"),o.a.createElement("option",{value:"fr"},"French")))}),w=(t(49),t(50),function(){return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"hero"},o.a.createElement("h2",{className:"greeting"},o.a.createElement(u.a,{id:"home.greeting"})),o.a.createElement("p",{className:"description"},o.a.createElement(u.a,{id:"home.description"})),o.a.createElement("button",null,o.a.createElement(u.a,{id:"home.button"})))))}),N=Object(f.b)(function(e){return{language:e.language}},function(e){return{changeLanguage:function(n){return e({type:"CHANGE_LANGUAGE",value:n})}}})(function(e){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{language:e.language,changeLanguage:e.changeLanguage}),o.a.createElement(w,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(20),O=t(21);Object(u.c)([].concat(Object(a.a)(g.a),Object(a.a)(m.a)));var G={en:j,fr:O},A=Object(h.b)(d);A.subscribe(function(){var e=A.getState().language;L(e)});var L=function(e){i.a.render(o.a.createElement(u.b,{locale:e,messages:G[e]},o.a.createElement(f.a,{store:A},o.a.createElement(N,null))),document.getElementById("root"))};L(A.getState().language),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.6779bda8.chunk.js.map