(this["webpackJsonpgallery.code"]=this["webpackJsonpgallery.code"]||[]).push([[0],{334:function(e,n,t){e.exports=t(696)},339:function(e,n,t){},357:function(e,n,t){},411:function(e,n){},421:function(e,n,t){},696:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),o=t.n(c),u=(t(339),t(327)),i=t(42),l=t(71),s=t(73),d=t(45),f=t(299),p=t(48),m=t.n(p),b=t(100),v=t(72),h=t(35),g=t(96),O=t.n(g),j=function(e){return e?e.data:null},E=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j;return function(){var a=Object(r.useState)(null),c=Object(h.a)(a,2),o=c[0],u=c[1],i=Object(r.useState)(!1),l=Object(h.a)(i,2),s=l[0],d=l[1],f=Object(r.useState)(null),p=Object(h.a)(f,2),g=p[0],j=p[1],E=Object(r.useCallback)(Object(v.a)(m.a.mark((function t(){var r,a,c,o,i=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:{},a=r.pathParams||Object.create(null),c=n.replace(/\/:([^/?#&\d][^/?#&]*)/g,(function(e,n){return"/".concat(a[n])})),t.prev=3,d(!0),t.next=7,O()(Object(b.a)({method:e,url:c},r));case 7:o=t.sent,u(o),j(null),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),u(null),j(t.t0);case 16:return t.prev=16,d(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[3,12,16,19]])}))),[e,u,n]),w=Object(r.useCallback)((function(){return t(o)}),[t,o]);return{request:E,error:g,response:o,getData:w,loading:s}}()},w=(t(357),function(e){var n=e.currentTarget,t=n.parentNode;t&&t.removeChild(n)}),y=t(139),k=t.n(y),x=function(){var e=Object(i.g)(),n=E("GET","code/index.yml",(function(e){return e?e.data.split(/\n/).filter(Boolean).map((function(e){return e.replace(/^-\s*/,"")})):[]})),t=n.request,c=n.loading,o=n.getData;return Object(r.useEffect)((function(){t()}),[]),a.a.createElement("div",{className:"page-gallery"},a.a.createElement(k.a,null,a.a.createElement("title",null,"Gallery")),a.a.createElement(l.a,{spinning:c},a.a.createElement("div",{className:"main-container"},a.a.createElement(s.a,{gutter:[{xs:12,sm:16},{xs:12,sm:16}]},o().map((function(n){return a.a.createElement(d.a,{key:n,xs:12,sm:12},a.a.createElement(f.a,{hoverable:!0,cover:a.a.createElement("img",{alt:"",src:"code/".concat(n,".png"),onError:w}),onClick:function(t){t.metaKey?window.open("/#/playground/".concat(n)):e.push("/playground/".concat(n))}},a.a.createElement(f.a.Meta,{title:n})))}))))))},N=(t(411),t(115)),C=(t(412),t(413),t(416),t(60)),M=t.n(C),R=t(301),S=t(302),A=t(32),P=t(303),J=t.n(P),L=t(307),T=t(18),W=t.n(T),q=t(329),B=function(e){var n=e.spinning,t=Object(q.a)(e,["spinning"]),c=function(e){var n=Object(r.useState)(e),t=Object(h.a)(n,2),a=t[0],c=t[1],o=Object(r.useMemo)((function(){return M.a.debounce(c,1e3,{leading:!0,trailing:!0})}),[]);return Object(r.useEffect)((function(){e?c(e):o(e)}),[e,o]),a}(n);return a.a.createElement(l.a,Object(b.a)({},t,{spinning:c}))},D=function(e,n){var t=Object(r.useCallback)((function(e){var n=e;return e&&e.target&&"value"in e.target&&(n=e.target.value),n}),[]),a=Object(r.useMemo)((function(){return[e,n||t]}),[e,n,t]),c=Object(h.a)(a,2),o=c[0],u=c[1],i=Object(r.useState)(o),l=Object(h.a)(i,2),s=l[0],d=l[1];return{value:s,controlled:{value:s,onChange:Object(r.useCallback)((function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=u.apply(void 0,[e].concat(t));d(a)}),[u])}}},H=t(207),I=new Worker("./babel-worker.js"),z=function(){var e=Object(v.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){I.onerror=function(e){console.error(["worker onerror",e]),t(new Error("worker onerror - ".concat(n.slice(0,100))))},I.onmessage=function(n){var r=n.data;r.error?t(r.error):e(r.data)},I.postMessage(n)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=(t(421),t(102)),F=t(304);function U(){var e=Object(G.a)(["\n  font-size: 12px;\n  color: red;\n  white-space: pre-wrap;\n  padding: 10px;\n"]);return U=function(){return e},e}function V(){var e=Object(G.a)(["\n  height: 100%;\n  min-height: 100px;\n  overflow-y: auto;\n  word-break: break-word;\n"]);return V=function(){return e},e}function $(){var e=Object(G.a)(["\n  height: 100%;\n"]);return $=function(){return e},e}function _(){var e=Object(G.a)(["\n    flex-direction: column;\n  "]);return _=function(){return e},e}function K(){var e=Object(G.a)(["\n  height: 100%;\n  display: flex;\n\n  ","\n"]);return K=function(){return e},e}var X=Object(A.b)(s.a)(K(),F.a.lessThan("medium")(_())),Q=Object(A.b)(d.a)($()),Y=A.b.div(V()),Z=A.b.pre(U()),ee=function(e){var n=document.querySelector("#mountNode");o.a.render(a.a.createElement(Z,null,e.stack),n)},ne=function(){var e=Object(v.a)(m.a.mark((function e(n){var t,r,a,c,o,u,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.url,r=n.name,a=n.deps,c=void 0===a?{}:a,o="",e.prev=2,e.next=5,O()(t);case 5:u=e.sent,i=u.data,o=i,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),new Error("loadJsForceUmd - ".concat(e.t0.message," - ").concat(t));case 13:o="\n    (() => {\n      let module = { exports: {} }\n      let require = k => {\n        ".concat(Object.keys(c).map((function(e){return"if (k === ".concat(JSON.stringify(e),") return ").concat(c[e])})).join("\n"),"\n        throw new Error(`module '${k}' not found`)\n      }\n      ;;").concat(o,";;\n      window[").concat(JSON.stringify(r),"] = module.exports\n    })()\n  "),te(o);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}(),te=function(e){var n=document.createElement("script");n.innerHTML=e,window.assetsNode.appendChild(n)},re=function(e){return"\n(async () => {\n  setRendering(true)\n\n  let a0 = assetsNode\n  a0.id = 'assetsNodeOutdated'\n  let a1 = document.createElement('div')\n  a1.id = 'assetsNode'\n  a0.parentNode.appendChild(a1)\n\n  // mountNode.innerHTML = '' // can cause error in react\n  ReactDOM.unmountComponentAtNode(mountNode)\n  try {\n    let { useRef, useMemo, useState, useEffect, useLayoutEffect, useReducer, useContext, useCallback, useImperativeHandle } = React\n    ;;".concat(e,";;\n\n    let isVueLike = _.isPlainObject(App)\n    if (isVueLike) {\n      if (!mountNode.children[0]) {\n        let innerNode = document.createElement('div')\n        mountNode.appendChild(innerNode)\n      }\n      let curr = mountNode.children[0]\n      new Vue(App).$mount(curr)\n    } else {\n      ReactDOM.render(React.createElement(App), mountNode)\n    }\n    a0.parentNode.removeChild(a0)\n  } catch (err) {\n    console.error(['displayError', err])\n    displayError(err)\n  } finally {\n    setRendering(false)\n  }\n})()\n  ").trim()};Object.assign(window,{useFormBinding:D,useInterval:function(e,n){Object(r.useEffect)((function(){var t=setInterval((function(){e()}),n);return function(){t&&clearInterval(t)}}),[e,n])},useModel:function(e,n,t){var a=Object(r.useReducer)(e,n),c=Object(h.a)(a,2),o=c[0],u=c[1];return[o,Object(r.useMemo)((function(){return M.a.reduce(t,(function(e,n,t){return e[t]=function(){var e=n.apply(void 0,arguments),r=Object(b.a)({type:t},e);return u(r)},e}),Object.create(null))}),[t,u])]},moment:W.a,styled:A.b,immer:L.a,_:M.a,axios:O.a,Antd:N,React:a.a,ReactDOM:o.a,displayError:ee,loadJsForceUmd:ne,loadJs:function e(n){return Array.isArray(n)?Promise.all(n.map(e)).then((function(){})):new Promise((function(e,t){var r=document.createElement("script");r.src=n,r.onload=function(){e()},r.onerror=function(e){t(new Error("loadJs onerror - ".concat(n)))},window.assetsNode.appendChild(r)}))},loadCss:function e(n){return Array.isArray(n)?Promise.all(n.map(e)).then((function(){})):new Promise((function(e,t){var r=document.createElement("link");r.rel="stylesheet",r.href=n,r.onload=function(){e()},r.onerror=function(e){t(new Error("loadCss onerror - ".concat(n)))},window.assetsNode.appendChild(r)}))},appendJs:te,appendCss:function(e){var n=document.createElement("style");n.innerHTML=e,window.assetsNode.appendChild(n)},setRendering:M.a.noop});var ae=function(){var e=Object(i.g)(),n=Object(i.h)().file,t=D("",(function(e,n,t){return t})),c=E("GET","code/index.yml"),o=c.request,u=c.response,l=c.loading,s=E("GET","code/:file"),d=s.request,f=s.error,p=s.response,b=s.loading,g=l||b;Object(r.useEffect)((function(){n?d({pathParams:{file:n}}):o()}),[n]),Object(r.useEffect)((function(){if(null!=u){var t=u.data.split(/\n/).map((function(e){return e.replace(/#.*/,"").trim()})).filter(Boolean).map((function(e){return e.replace(/^-\s*/,"")}))[0];e.push("/playground/".concat(n||t))}}),[n,u]),Object(r.useEffect)((function(){null!=p&&t.controlled.onChange(null,null,p.data)}),[p]),Object(r.useEffect)((function(){f&&ee(new Error("".concat(f.message," - ").concat(n)))}),[f]);var O=Object(r.useState)(""),j=Object(h.a)(O,2),w=j[0],y=j[1],x=Object(r.useState)(!1),N=Object(h.a)(x,2),C=N[0],A=N[1],P=Object(r.useState)(!1),L=Object(h.a)(P,2),T=L[0],W=L[1],q=g||C||T;Object.assign(window,{setRendering:W});var I=Object(r.useCallback)(function(){var e=Object(v.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(A(!0),e.prev=3,r=re(t),!(n&&[".jsx",".tsx"].some((function(e){return n.endsWith(e)})))){e.next=10;break}return e.next=9,z(r);case 9:r=e.sent;case 10:y(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),ee(e.t0);case 16:return e.prev=16,A(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(n){return e.apply(this,arguments)}}(),[n]);!function(e,n,t){e=e||{};var a=Object(r.useMemo)((function(){return e.debounce?M.a.debounce(n,e.debounce,e.options):e.throttle?M.a.throttle(n,e.throttle,e.options):n}),[n,e.debounce,e.options,e.throttle]);Object(r.useEffect)((function(){e.singleton&&"cancel"in a&&a.cancel(),a.apply(void 0,Object(H.a)(t))}),t),Object(r.useEffect)((function(){return e.initial&&("cancel"in a&&a.cancel(),n.apply(void 0,Object(H.a)(t))),function(){e.cancel&&"cancel"in a&&a.cancel()}}),[])}({debounce:1e3,cancel:!0,singleton:!0},I,[t.value]),window.triggerPreview=function(){I(t.value+"\n\n/* ".concat(new Date," */"))};var G=J()({minWidth:"768px"}),F=Object(r.useCallback)((function(){var e=new Event("resize");window.mountNode.dispatchEvent(e)}),[]);return Object(r.useEffect)((function(){return window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}}),[F]),a.a.createElement("div",{className:"page-playground"},a.a.createElement(k.a,null,a.a.createElement("title",null,"Playground",n?" - ".concat(n):""),a.a.createElement("style",null,"html { overflow: hidden } #root { height: 100% }"),a.a.createElement("script",null,w)),a.a.createElement(X,null,a.a.createElement(Q,{style:{flex:1,overflowX:"auto"}},a.a.createElement(B,{spinning:q},a.a.createElement(Y,{id:"mountNode"}),a.a.createElement("div",{id:"assetsNode"}))),a.a.createElement(S.a,Object.assign({onUpdate:F},G?{border:"left",style:{minWidth:"20%",maxWidth:"80%",width:"50%"}}:{border:"top",style:{minHeight:"20%",maxHeight:"80%",height:"50%"}}),a.a.createElement(Q,null,a.a.createElement(R.Controlled,{className:"main-editor",options:{mode:"text/typescript-jsx",theme:"material",lineNumbers:!0},value:t.controlled.value,onBeforeChange:t.controlled.onChange})))))};var ce=function(){return a.a.createElement(u.a,null,a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/",exact:!0,component:x}),a.a.createElement(i.b,{path:"/playground/:file?",component:ae}),a.a.createElement(i.b,{path:"*"},a.a.createElement(i.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[334,1,2]]]);
//# sourceMappingURL=main.5f1e6d3b.chunk.js.map