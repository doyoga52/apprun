!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return o.b})),n.d(e,"Component",(function(){return m})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"Fragment",(function(){return s.a})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return b})),n.d(e,"ROUTER_404_EVENT",(function(){return g})),n.d(e,"customElement",(function(){return l}));var o=n(1),s=n(2);const i=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return e.observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o={};Array.from(this.attributes).forEach(t=>o[t.name]=t.value),(n.observedAttributes||[]).forEach(t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(e){this.attributeChangedCallback(t,o[t],e)},configurable:!0,enumerable:!0})});const s=this.children?Array.from(this.children):[];if(s.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},o),{children:s})).mount(this._shadowRoot,n),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,s,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,o;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(o=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===o||o.call(n),this._component=null}attributeChangedCallback(t,n,o){var s;null===(s=this._component)||void 0===s||s.run("attributeChanged",t,n,o),this._component&&(this._component._props[t]=o),o!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{var t;null===(t=this._component)||void 0===t||t.run(".")})}};var r=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,o,s)=>{const i=t?t.toString():o;return a.defineMetadata(`apprun-update:${i}`,{name:i,key:o,options:e},n),s}}function u(t,e={}){return function(n,o){const s=t?t.toString():o;a.defineMetadata(`apprun-update:${s}`,{name:s,key:o,options:e},n)}}function l(t,e){return function(n){return r(t,n,e),n}}const h=(t,e)=>(e?t.state[e]:t.state)||"",d=(t,e,n)=>{if(e){const o=t.state||{};o[e]=n,t.setState(o)}else t.setState(n)};const f={};o.b.on("get-components",t=>t.components=f);const p=t=>t;class m{constructor(t,e,n,s){this.state=t,this.view=e,this.update=n,this.options=s,this._app=new o.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){o.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=o.b.createElement;o.b.createElement=(t,e,...s)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,s)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>s.run(t,e);else if("string"==typeof n)e[t]=t=>s.run(n,t);else if("function"==typeof n)e[t]=t=>s.setState(n(s.state,t));else if(Array.isArray(n)){const[o,...i]=n;"string"==typeof o?e[t]=t=>s.run(o,...i,t):"function"==typeof o&&(e[t]=t=>s.setState(o(s.state,...i,t)))}}else if("$bind"===t){const o=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=h(s,i),e.onclick=t=>d(s,i||t.target.name,t.target.checked);break;case"radio":e.checked=h(s,i)===e.value,e.onclick=t=>d(s,i||t.target.name,t.target.value);break;case"number":case"range":e.value=h(s,i),e.oninput=t=>d(s,i||t.target.name,Number(t.target.value));break;default:e.value=h(s,i),e.oninput=t=>d(s,i||t.target.name,t.target.value)}else"select"===n?(e.value=h(s,i),e.onchange=t=>{t.target.multiple||d(s,i||t.target.name,t.target.value)}):"option"===n?(e.selected=h(s,i),e.onclick=t=>d(s,i||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=h(s,i),e.oninput=t=>d(s,i||t.target.name,t.target.value))}else o.b.run("$",{key:t,tag:n,props:e,component:s})})(n,e,t,this),delete e[n])}),n(t,e,...s));const s=e?this.view(t,e):this.view(t);return o.b.createElement=n,s}renderState(t,e=null){if(!this.view)return;const n=e||this._view(t);if(o.b.debug&&o.b.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}e||this.render(s,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,s;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=p),this.add_actions(),this.state=null!==(s=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==s?s:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),o.b.debug){const e="string"==typeof t?t:t.id;f[e]=f[e]||[],f[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...s)=>{const i=e(this.state,...s);o.b.debug&&o.b.run("debug",{component:this,event:t,e:s,state:this.state,newState:i,options:n}),this.setState(i,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,o,s]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[o,s])}):Object.keys(t).forEach(n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(t=>e[t.trim()]=o)}),e["."]||(e["."]=p),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?o.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.is_global_event(s)?o.b.on(s,e,n):this._app.on(s,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?o.b.off(e,n):this._app.off(e,n)})}}m.__isAppRunComponent=!0;const b="//",g="///",y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");o.b.run(e,...n)||o.b.run(g,e,...n),o.b.run(b,e,...n)}else if(t.startsWith("/")){const[e,n,...s]=t.split("/");o.b.run("/"+n,...s)||o.b.run(g,"/"+n,...s),o.b.run(b,"/"+n,...s)}else o.b.run(t)||o.b.run(g,t),o.b.run(b,t)};o.b.h=o.b.createElement=s.b,o.b.render=function(t,e,n){Object(s.c)(t,e,n)},o.b.Fragment=s.a,o.b.webComponent=r,o.b.start=(t,e,n,o,s)=>{const i=Object.assign(Object.assign({},s),{render:!0,global_event:!0}),r=new m(e,n,o);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,i),r};const _=t=>{};o.b.on("$",_),o.b.on("debug",t=>_),o.b.on(b,_),o.b.on("#",_),o.b.route=y,o.b.on("route",t=>o.b.route&&o.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.b.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))});e.default=o.b;"object"==typeof window&&(window.Component=m,window.React=o.b,window.on=u,window.customElement=l)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:o,options:s}=n;return s.delay?this.delay(t,o,e,s):o.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),e.apply(this,n)},o.delay)}}let s;const i="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;i.app&&i._AppRunVersions?s=i.app:(s=new o,i.app=s,i._AppRunVersions="AppRun-2"),e.b=s}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return m}));var o=n(1);let s=0;function i(t,e,n=0){if(0===n&&(s=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>i(t,e,s));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(r=function(t,e,n){const{tag:s,props:i,children:r}=t;let a=`_${n}`,c=i&&i.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u?c=u.__eid:(u=e.__componentCache[a]=new s(Object.assign(Object.assign({},i),{children:r})).mount(c),u.__eid=c);let l=u.state;if(u.mounted){const t=u.mounted(i,r,l);void 0!==t&&(l=u.state=t)}if(l instanceof Promise){const t=t=>{u.element=t,u.setState(l)};return o.b.createElement("section",Object.assign({},i,{id:c,ref:e=>t(e)}))}{const t=u._view(l,i),e=e=>{u.element=e,u.renderState(l,t)};return o.b.createElement("section",Object.assign({},i,{id:c,ref:t=>e(t)}),t)}}(t,e,s++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(t=>i(t,e,s))),r}function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function a(t,e,...n){const o=r(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error(`Unknown tag in vdom ${t}`)}const c={},u=function(t,e,n={}){if(null==e||!1===e)return;e=i(e,n);const o="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?h(t,e,o):h(t,[e],o)};function l(t,e,n){console.assert(!!t),n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,o=`${e.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(t,e)?(h(t,e.children,n),p(t,e.props)):t.parentNode.replaceChild(f(e,n),t)}function h(t,e,n){const o=Math.min(t.childNodes.length,e.length);for(let s=0;s<o;s++){const o=e[s],i=t.childNodes[s];if(o instanceof HTMLElement||o instanceof SVGElement)t.insertBefore(o,i);else if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:t.replaceChild(d(o),i));else{const e=o.props&&o.props.key;if(e)if(i.key===e)l(t.childNodes[s],o,n);else{const r=c[e];r?(t.insertBefore(r,i),t.appendChild(i),l(t.childNodes[s],o,n)):t.insertBefore(f(o,n),i)}else l(t.childNodes[s],o,n)}}let s=t.childNodes.length;for(;s>o;)t.removeChild(t.lastChild),s--;if(e.length>o){const s=document.createDocumentFragment();for(let t=o;t<e.length;t++)s.appendChild(f(e[t],n));t.appendChild(s)}}function d(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function f(t,e){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return d(t);if(!t.tag||"function"==typeof t.tag)return d(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(f(t,e))),n}function p(t,e){console.assert(!!t);const n=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e||{}),t._props=e;const o=t instanceof SVGElement;for(const n in e){const s=e[n];if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else if("style"===n)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e]);else if(o&&n.startsWith("xlink")){const e=n.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,s)}else/id|class|role|-/g.test(n)||o?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(c[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function m(t,...e){return r(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,,,function(t,e,n){"use strict";n.r(e);var o=n(0);let s=class extends o.Component{constructor(){super(...arguments),this.view=({num:t,children:e})=>o.default.createElement("div",null,o.default.createElement("h1",null,t),e),this.update={"-1":t=>Object.assign(Object.assign({},t),{num:t.num-1}),"+1":t=>Object.assign(Object.assign({},t),{num:t.num+1})},this.mounted=({num:t},e)=>({num:parseInt(t),children:e}),this.rendered=({num:t})=>{this.element.setAttribute("num",t)}}};s=function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}([Object(o.customElement)("my-counter")],s);let i=class extends o.Component{constructor(){super(...arguments),this.state={},this.view=t=>o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement("button",{$onclick:"fetchComic"},"XKCD")),t.loading?o.default.createElement("div",null,"loading ... "):"",t.comic&&o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,t.comic.title),o.default.createElement("img",{src:t.comic.url}))),this.update={loading:(t,e)=>({loading:!0}),fetchComic:async t=>{this.run("loading",!0);const e=await fetch("https://xkcd-imgs.herokuapp.com/");return{comic:await e.json(),loading:!1}}},this.mounted=()=>this.run("fetchComic")}};i=function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}([Object(o.customElement)("my-xkcd",{shadow:!0,render:!1})],i)}])}));
//# sourceMappingURL=app.js.map