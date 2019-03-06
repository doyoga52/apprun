!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";(function(t){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.off=function(t,e){var n=this._events[t];n&&((n=n.filter(function(t){return t.fn!==e})).length?this._events[t]=n:delete this._events[t])},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t];return console.assert(!!o,"No subscriber for event: "+t),o&&((o=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?e.delay(t,o,n,i):o.apply(e,n),!r.options.once})).length?this._events[t]=o:delete this._events[t]),o?o.length:0},t.prototype.once=function(t,e,r){void 0===r&&(r={}),this.on(t,e,n({},r,{once:!0}))},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),e.apply(o,n)},r.delay)},t}();e.App=o;var i=t||window;i.app&&i.app.start?r=i.app:(r=new o,i.app=r),e.default=r}).call(this,n(4))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);e.app=r.default;var o=n(6),i=n(8);e.Component=i.Component;var a=n(2);e.on=a.on,e.update=a.update,e.event=a.update;var s=n(3),u=n(3);e.ROUTER_EVENT=u.ROUTER_EVENT,e.ROUTER_404_EVENT=u.ROUTER_404_EVENT,r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(t,e,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),s=new i.Component(e,n,r);return o&&o.rendered&&(s.rendered=o.rendered),s.mount(t,a),s},r.default.on(s.ROUTER_EVENT,function(t){}),r.default.on("#",function(t){}),r.default.route=s.default,r.default.on("route",function(t){return r.default.route&&r.default.route(t)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){r.default.route===s.default&&(window.onpopstate=function(){return s.default(location.hash)},s.default(location.hash))}),e.default=r.default,"object"==typeof window&&(window.Component=i.Component),r.default.on("debug",function(t){return 0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n){return void 0===n&&(n={}),function(r,o,i){return t=t||o,e.Reflect.defineMetadata("apprun-update:"+t,{name:t,key:o,options:n},r),i}},e.on=function(t,n){return void 0===n&&(n={}),function(r,o){t=t||o,e.Reflect.defineMetadata("apprun-update:"+t,{name:t,key:o,options:n},r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0);e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.default=function(t){if(t||(t="#"),t.startsWith("#")){var n=t.split("/"),o=n[0],i=n.slice(1);r.default.run.apply(r.default,[o].concat(i))||r.default.run.apply(r.default,[e.ROUTER_404_EVENT,o].concat(i)),r.default.run.apply(r.default,[e.ROUTER_EVENT,o].concat(i))}else if(t.startsWith("/")){var a=t.split("/"),s=(a[0],a[1]);i=a.slice(2),r.default.run.apply(r.default,["/"+s].concat(i))||r.default.run.apply(r.default,[e.ROUTER_404_EVENT,"/"+s].concat(i)),r.default.run.apply(r.default,[e.ROUTER_EVENT,"/"+s].concat(i))}else r.default.run(t)||r.default.run(e.ROUTER_404_EVENT,t),r.default.run(e.ROUTER_EVENT,t)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o="_props";function i(t){var e=[],n=function(t){null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach(function(t){Array.isArray(t)?t.forEach(function(t){return n(t)}):n(t)}),e}e.createElement=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=i(n);return"string"==typeof t?{tag:t,props:e,children:o}:void 0===t&&n?o:Object.getPrototypeOf(t).__isAppRunComponent?{tag:t,props:e,children:o}:t(e,o)};var a={};function s(t,e,n){void 0===n&&(n={}),null!=e&&(e=r.default(e,n),t&&(Array.isArray(e)?c(t,e):c(t,[e])))}function u(t,e){console.assert(!!t),function(t,e){var n=t.nodeName,r=""+(e.tag||"");return n.toUpperCase()===r.toUpperCase()}(t,e)?(c(t,e.children),d(t,e.props)):t.parentNode.replaceChild(l(e),t)}function c(t,e){for(var n=Math.min(t.childNodes.length,e.length),r=0;r<n;r++){var o=e[r],i=t.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:t.replaceChild(f(o),i));else{var s=o.props&&o.props.key;if(s)if(i.key===s)u(t.childNodes[r],o);else{var c=a[s];c?(t.insertBefore(c,i),t.appendChild(i),u(t.childNodes[r],o)):t.insertBefore(l(o),i)}else u(t.childNodes[r],o)}}for(var d=t.childNodes.length;d>n;)t.removeChild(t.lastChild),d--;if(e.length>n){var p=document.createDocumentFragment();for(r=n;r<e.length;r++)p.appendChild(l(e[r]));t.appendChild(p)}}function f(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function l(t,e){if(void 0===e&&(e=!1),console.assert(null!=t),"string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return d(n,t.props),t.children&&t.children.forEach(function(t){return n.appendChild(l(t,e))}),n}function d(t,e){console.assert(!!t);var n=t[o]||{};for(var r in e=function(t,e){e.class=e.class||e.className,delete e.className;var n={};return t&&Object.keys(t).forEach(function(t){return n[t]=null}),e&&Object.keys(e).forEach(function(t){return n[t]=e[t]}),n}(n,e||{}),t[o]=e,e){var i=e[r];if("style"===r)for(var s in t.style.cssText&&(t.style.cssText=""),i)t.style[s]!==i[s]&&(t.style[s]=i[s]);else if(r.startsWith("data-")){var u=r.substring(5).replace(/-(\w)/g,function(t){return t[1].toUpperCase()});t.dataset[u]!==i&&(i||""===i?t.dataset[u]=i:delete t.dataset[u])}else"class"===r||r.startsWith("role")||r.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(r)!==i&&(i?t.setAttribute(r,i):t.removeAttribute(r)):t[r]!==i&&(t[r]=i);"key"===r&&i&&(a[i]=t)}}e.updateElement=s,e.render=s,e.Fragment=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.createElement=r.createElement,e.Fragment=r.Fragment,e.render=function(t,e,n){r.updateElement(t,e,n)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.default=function t(e,n,i){if(void 0===i&&(i=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return t(e,n,i++)});var a=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(a=function(t,e,n){var i=t.tag,a=t.props,s=t.children,u=a&&a.id,c="_"+i.name+"_"+n;u?c="_"+i.name+"_"+u:u="_"+i.name+"_"+n,e.__componentCache||(e.__componentCache={});var f=e.__componentCache[c];f||(f=e.__componentCache[c]=new i(r({},a,{children:s})).mount(u)),f.mounted&&f.mounted(a,s);var l=f.state,d="";return l instanceof Promise||!f.view||(d=f.view(l),f.rendered&&setTimeout(function(){return f.rendered(l)})),o.default.createElement("div",{id:u},d)}(e,n,i++)),a&&a.children&&(a.children=a.children.map(function(e){return t(e,n,i++)})),a}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(2),a={};o.default.on("get-components",function(t){return t.components=a});var s=function(){function t(t,e,n,i){var a=this;this.state=t,this.view=e,this.update=n,this.options=i,this._app=new o.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={render:!0}),a.mount(t,r({},e,{render:!0}))}}return t.prototype.renderState=function(t){var e=this;if(this.view){var n=this.view(t);if(o.default.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"==typeof document){var r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){if(this.unload){if(r._component!==this){this.tracking_id=(new Date).valueOf().toString(),r.setAttribute("_c",this.tracking_id);var i=new MutationObserver(function(t){var n=t[0],o=n.removedNodes;(n.oldValue===e.tracking_id||Array.from(o).indexOf(r)>=0)&&(e.unload(),i.disconnect())});r.parentNode&&i.observe(r.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["_c"]})}}else r.removeAttribute("_c");r._component=this}o.default.render(r,n,this),this.rendered&&this.rendered(this.state)}}},t.prototype.setState=function(t,e){var n=this;if(void 0===e&&(e={render:!0,history:!1}),t instanceof Promise)t.then(function(t){n.setState(t,e)}).catch(function(t){throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=this._history.concat([t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}},t.prototype.mount=function(t,e){var n=this;if(void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=r({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){this.on(e.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(e.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),a[t]=a[t]||[],a[t].push(this),this},t.prototype.is_global_event=function(t){return t&&(t.startsWith("#")||t.startsWith("/"))},t.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&this.on(t,function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var s=e.apply(void 0,[r.state].concat(i));o.default.run("debug",{component:r,event:t,e:i,state:r.state,newState:s,options:n}),r.setState(s,n)},n)},t.prototype.add_actions=function(){var t=this,e=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,t);e[r.name]=[t[r.key].bind(t),r.options]}});var n={};Object.keys(e).forEach(function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach(function(t){return n[t.trim()]=r})}),Object.keys(n).forEach(function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])})},t.prototype.run=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(t)?o.default.run.apply(o.default,[t].concat(n)):(e=this._app).run.apply(e,[t].concat(n))},t.prototype.on=function(t,e,n){return this._actions.push({name:t,fn:e}),this.global_event||this.is_global_event(t)?o.default.on(t,e,n):this._app.on(t,e,n)},t.prototype.unmount=function(){var t=this;this._actions.forEach(function(e){var n=e.name,r=e.fn;t.global_event||t.is_global_event(n)?o.default.off(n,r):t._app.off(n,r)})},t.__isAppRunComponent=!0,t}();e.Component=s}])});
//# sourceMappingURL=apprun.js.map