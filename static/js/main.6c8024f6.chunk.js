(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/carles.92b043a0.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/tag_faces.c50cc449.svg"},119:function(e,t,a){e.exports=a.p+"static/media/mic.958bf042.svg"},120:function(e,t,a){e.exports=a.p+"static/media/send.282ecb9e.svg"},121:function(e,t,a){e.exports=a.p+"static/media/intro-whatsapp.9466a20e.jpg"},122:function(e,t,a){e.exports=a(1453)},127:function(e,t,a){},1452:function(e,t,a){},1453:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(112),r=a.n(s),i=(a(127),a(113)),o=a(17),l=a(22),m=a(64),u=a(128),d=function e(){Object(m.a)(this,e),this.id=u.random.uuid(),this.name="Carles Mart\xednez",this.avatar=u.internet.avatar()},f=function e(t,a,n){Object(m.a)(this,e),this.id=u.random.uuid(),this.msg=a||u.lorem.words(u.helpers.randomize(Object(o.a)(Array(20).keys()))),this.isMainUser=t,this.date=n||u.date.recent()},g=new d,h=Object(o.a)(Array(1).keys()).map((function(){return new d})).map((function(e){return{contact:e,messages:Object(o.a)(Array(50).keys()).map((function(e,t){return new f((t+1)%2===0)})).filter((function(e){return e.msg}))}})),p=(a(1175),a(117)),v=a.n(p);function E(e){var t=e.user,a=e.showName;return c.a.createElement("div",{className:"avatar-component"},c.a.createElement("img",{className:"avatar",src:v.a,alt:""}),a&&c.a.createElement("h3",{className:"avatar-title"},t.name))}var b=a(43),j=a.n(b);function N(e){var t,a,n=e.contact,s=e.setContactSelected,r=e.messages,i=Math.max.apply(Math,Object(o.a)(r.map((function(e){return e.date.getTime()})))),l=r.find((function(e){return e.date.getTime()===i}));return c.a.createElement("div",{className:"contact-box",onClick:function(){return s(n)}},c.a.createElement(E,{user:n}),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"contact-box-header"},c.a.createElement("h3",{className:"avatar-title"},n.name),c.a.createElement("span",{className:"time-mark"},l.date.toLocaleDateString())),c.a.createElement("div",{className:"last-msg"},c.a.createElement("img",{src:j.a,alt:"",className:"icon-small"}),c.a.createElement("span",{className:"text"},(t=l.msg,a=30,t.length>a?"".concat(t.substring(0,a)," ..."):t)))))}function w(e){var t=e.message;return c.a.createElement("div",{className:"message ".concat(t.isMainUser?"sent":"received")},t.msg,c.a.createElement("div",{className:"metadata"},c.a.createElement("span",{className:"date"},t.date.toLocaleString()),t.isMainUser&&c.a.createElement("img",{src:j.a,alt:"",className:"icon-small"})))}function O(e){var t=e.messages,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollIntoView()})),c.a.createElement("div",{className:"chats"},t.sort((function(e,t){return e.date.getTime()-t.date.getTime()})).map((function(e){return c.a.createElement(w,{message:e,key:e.id})})),c.a.createElement("div",{style:{float:"right",clear:"both"},ref:a}))}var y=a(118),x=a.n(y),S=a(119),k=a.n(S),M=a(120),C=a.n(M);function T(e){var t=e.message,a=e.setMessage,n=e.pushMessage;return c.a.createElement("div",{className:"chat-input-box"},c.a.createElement("div",{className:"icon emoji-selector"},c.a.createElement("img",{src:x.a,alt:""})),c.a.createElement("div",{className:"chat-input"},c.a.createElement("input",{type:"text",placeholder:"Type a message",value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t&&n()}})),c.a.createElement("div",{className:"icon send",onClick:n},c.a.createElement("img",{src:t?C.a:k.a,alt:""})))}a(1452);function L(e){var t=e.search,a=e.handleSearch;return c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"Search or start a new chat",value:t,onChange:function(e){return a(e.target.value)}}))}a(121);var A=function(){var e=Object(n.useState)(h),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({}),m=Object(l.a)(r,2),u=m[0],d=m[1],p=Object(n.useState)([]),v=Object(l.a)(p,2),b=v[0],j=v[1],w=Object(n.useState)(""),y=Object(l.a)(w,2),x=y[0],S=y[1],k=Object(n.useState)(""),M=Object(l.a)(k,2),C=M[0],A=M[1],D=Object(n.useState)([]),I=Object(l.a)(D,2),U=I[0],z=I[1];function B(e,t){var a=e.filter((function(e){var a=e.contact;return!t||a.name.toLowerCase().includes(t.toLowerCase())}));z(a)}return Object(n.useEffect)((function(){var e=a.find((function(e){return e.contact.id===u.id}));j(e&&e.messages||[]),B(a,C)}),[u,a,C]),c.a.createElement("div",{className:"app"},c.a.createElement("aside",null,c.a.createElement("header",null,c.a.createElement(E,{user:g})),c.a.createElement(L,{search:C,handleSearch:function(e){A(e),B(a,e)}}),c.a.createElement("div",{className:"contact-boxes"},U.map((function(e){var t=e.contact,a=e.messages;return c.a.createElement(N,{contact:t,key:t.id,setContactSelected:d,messages:a})})))),c.a.createElement("main",null,c.a.createElement("header",null,c.a.createElement(E,{user:u,showName:!0})),c.a.createElement(O,{messages:b}),c.a.createElement(T,{message:x,setMessage:S,pushMessage:function(){var e=a.findIndex((function(e){return e.contact.id===u.id})),t=Object.assign([],a,Object(i.a)({},e,{contact:u,messages:[].concat(Object(o.a)(a[e].messages),[new f(!0,x,new Date)])}));s(t),S("")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a.p+"static/media/done_all.211c1153.svg"}},[[122,1,2]]]);
//# sourceMappingURL=main.6c8024f6.chunk.js.map