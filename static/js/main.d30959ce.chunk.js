(this.webpackJsonptomatopwa=this.webpackJsonptomatopwa||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(8);var s,c=n(1),a=n.n(c),o=n(7),i=n.n(o),r=(n(13),n(3)),u=n.n(r),l=n(6),d=n(2),f=n(4),b=(n(15),n.p+"static/media/audio-beep-sound.176f94bd.mp3"),j=n(0),m=function(e){var t=e.audioRef;return Object(j.jsx)("audio",{id:"beep",ref:t,src:b})},h=(n(17),n(18),function(e){var t=e.name,n=e.value,s=e.onUpdate;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{id:"".concat(t,"-label"),className:"col-10 offset-1",children:[t," length"]}),Object(j.jsx)("button",{id:"".concat(t,"-increment"),className:"col-10 offset-1 bi bi-arrow-up-square-fill",onClick:function(){return s(n+1)}}),Object(j.jsx)("h2",{id:"".concat(t,"-length"),className:"col-10 offset-1 text-center",children:n}),Object(j.jsx)("button",{id:"".concat(t,"-decrement"),className:"col-10 offset-1 bi bi-arrow-down-square-fill",onClick:function(){return s(n-1)}})]})}),p=(n(19),function(e){var t=e.handler;return Object(j.jsxs)("button",{id:"start_stop",className:"col-12",onClick:t,children:[Object(j.jsx)("i",{className:"bi bi-play-circle-fill"}),Object(j.jsx)("i",{className:"bi bi-pause-circle-fill"})]})}),v=(n(20),function(e){var t=e.handler;return Object(j.jsx)("button",{id:"reset",onClick:t,className:"col-12 bi bi-arrow-repeat"})}),O=(n(21),function(e){var t=e.paused,n=e.name,s=e.minutes,c=e.seconds.toString().padStart(2,"0"),a=s.toString().padStart(2,"0");return Object(j.jsx)("div",{className:"card shadow",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{id:"timer-label",className:"card-title text-center",children:n}),Object(j.jsxs)("p",{className:"card-text text-large text-center",children:[Object(j.jsxs)("span",{id:"time-left",children:[a,":",c]})," ",t?" paused":""]})]})})}),x=(n(22),n.p+"static/media/mini-tomato.4d4b3422.svg"),g=function(e){var t=e.title;return Object(j.jsxs)("h1",{className:"text-center",children:[t,Object(j.jsx)("img",{src:x,height:"75em",alt:""})]})};!function(e){e[e.Session=0]="Session",e[e.Break=1]="Break"}(s||(s={}));var w=function(){var e={activeTimer:{mode:s.Session,paused:!0,minutes:25,seconds:0},breakLength:5,sessionLength:25},t=c.useState(e.activeTimer),n=Object(f.a)(t,2),a=n[0],o=n[1],i=c.createRef(),r=c.useState(i),b=Object(f.a)(r,2),x=b[0],w=(b[1],c.useState(e.breakLength)),k=Object(f.a)(w,2),N=k[0],S=k[1],y=c.useState(e.sessionLength),L=Object(f.a)(y,2),T=L[0],B=L[1],C=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return"succes"}),6e4);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c.useEffect((function(){var e=setTimeout((function(){!function(){if(a.paused)console.log("paused");else{console.log("not paused");var e=0===a.seconds?a.minutes-1:a.minutes,t=0===a.seconds?59:a.seconds-1;o(Object(d.a)(Object(d.a)({},a),{},{minutes:e,seconds:t}))}if(a.seconds<=0&&a.minutes<=0){o(Object(d.a)(Object(d.a)({},a),{},{paused:!0}));try{W()}finally{try{C()}finally{var n=a.mode===s.Session?s.Break:s.Session,c=n===s.Break?N:T;o(Object(d.a)(Object(d.a)({},a),{},{minutes:c,seconds:0,mode:n,paused:!1}))}}}}()}),1e3);return function(){return clearTimeout(e)}}));var W=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=x.current)){e.next=13;break}t.loop=!1,e.prev=3,t.play(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(3),alert("audio broken");case 10:return e.prev=10,e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[3,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=x.current;e&&(e.pause(),e.currentTime=0)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"row-center",children:Object(j.jsx)(g,{title:"My Pomodoro"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2 offset-4",children:Object(j.jsx)(h,{name:"break",value:N,onUpdate:function(e){e<1||e>60||(S(e),a.paused&&a.mode===s.Break&&o(Object(d.a)(Object(d.a)({},a),{},{minutes:e,seconds:0})))}})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)(h,{name:"session",value:T,onUpdate:function(e){e<1||e>60||(B(e),a.paused&&a.mode===s.Session&&o(Object(d.a)(Object(d.a)({},a),{},{minutes:e,seconds:0})))}})})]}),Object(j.jsxs)("div",{className:"row-center w-40 mt-1",children:[Object(j.jsx)("div",{className:"col-4 offset-4",children:Object(j.jsx)(O,{paused:a.paused,name:a.mode===s.Session?"Session":"Break",minutes:a.minutes,seconds:a.seconds})}),Object(j.jsx)(m,{audioRef:x})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2 offset-4 mt-1",children:Object(j.jsx)(p,{handler:function(){var e=!a.paused;o(Object(d.a)(Object(d.a)({},a),{},{paused:e})),U()}})}),Object(j.jsx)("div",{className:"col-2 mt-1",children:Object(j.jsx)(v,{handler:function(){B(e.sessionLength),S(e.breakLength),o({paused:!0,mode:s.Session,minutes:e.sessionLength,seconds:0}),U()}})})]})]})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}(),S()}],[[23,1,2]]]);
//# sourceMappingURL=main.d30959ce.chunk.js.map