!function(e){function t(t){for(var n,i,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+e+".index_bundle.js"}(e);var u=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var u=s;i(i.s=141)}([function(e,t,n){"use strict";e.exports=n(88)},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return z})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return F})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return d})),n.d(t,"p",(function(){return h})),n.d(t,"q",(function(){return p})),n.d(t,"r",(function(){return q})),n.d(t,"s",(function(){return y})),n.d(t,"t",(function(){return w})),n.d(t,"u",(function(){return _})),n.d(t,"v",(function(){return R})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return k})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return b})),n.d(t,"A",(function(){return E})),n.d(t,"B",(function(){return I})),n.d(t,"C",(function(){return j})),n.d(t,"D",(function(){return M})),n.d(t,"E",(function(){return T}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let d=(15&s)<<2|u>>6,h=63&u;a||(h=64,o||(d=64)),r.push(n[c],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw Error();const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){const t=i(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=u(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,l=()=>{try{return c()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&a(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},d=e=>{var t,n;return null===(n=null===(t=l())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=e=>{const t=d(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},f=()=>{var e;return null===(e=l())||void 0===e?void 0:e.config},p=e=>{var t;return null===(t=l())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function b(){var t;const n=null===(t=l())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function w(){return"object"==typeof self&&self.self===self}function _(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return!b()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function T(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function x(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(N,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new O(r,s,n)}}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(P(n)&&P(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function M(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}}).call(this,n(39),n(48))},function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return be})),n.d(t,"c",(function(){return Ce})),n.d(t,"d",(function(){return De})),n.d(t,"e",(function(){return je})),n.d(t,"f",(function(){return Pe})),n.d(t,"g",(function(){return ke})),n.d(t,"h",(function(){return Re})),n.d(t,"i",(function(){return mn})),n.d(t,"j",(function(){return sr})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return un})),n.d(t,"m",(function(){return Me})),n.d(t,"n",(function(){return Le})),n.d(t,"o",(function(){return Fe})),n.d(t,"p",(function(){return _})),n.d(t,"q",(function(){return pe})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return Vt})),n.d(t,"t",(function(){return k})),n.d(t,"u",(function(){return Ln})),n.d(t,"v",(function(){return Nn})),n.d(t,"w",(function(){return Z})),n.d(t,"y",(function(){return st})),n.d(t,"z",(function(){return Mt})),n.d(t,"A",(function(){return ir})),n.d(t,"B",(function(){return Ft})),n.d(t,"C",(function(){return at})),n.d(t,"D",(function(){return ot})),n.d(t,"E",(function(){return ge})),n.d(t,"G",(function(){return ct})),n.d(t,"H",(function(){return d})),n.d(t,"I",(function(){return pt})),n.d(t,"J",(function(){return xt})),n.d(t,"K",(function(){return Nt})),n.d(t,"L",(function(){return Mn})),n.d(t,"M",(function(){return J})),n.d(t,"N",(function(){return Xt})),n.d(t,"O",(function(){return ht})),n.d(t,"P",(function(){return Je})),n.d(t,"Q",(function(){return dn})),n.d(t,"R",(function(){return kn})),n.d(t,"S",(function(){return jn})),n.d(t,"T",(function(){return Dt})),n.d(t,"U",(function(){return Ze})),n.d(t,"V",(function(){return hn})),n.d(t,"W",(function(){return In})),n.d(t,"X",(function(){return Pn})),n.d(t,"Y",(function(){return mt})),n.d(t,"Z",(function(){return it})),n.d(t,"ab",(function(){return dt})),n.d(t,"bb",(function(){return qe})),n.d(t,"cb",(function(){return Xe})),n.d(t,"db",(function(){return et})),n.d(t,"eb",(function(){return lt})),n.d(t,"fb",(function(){return ft})),n.d(t,"gb",(function(){return ln})),n.d(t,"hb",(function(){return Sn})),n.d(t,"ib",(function(){return Dn})),n.d(t,"jb",(function(){return He})),n.d(t,"kb",(function(){return vt})),n.d(t,"lb",(function(){return bt})),n.d(t,"mb",(function(){return pn})),n.d(t,"nb",(function(){return yt})),n.d(t,"ob",(function(){return gt})),n.d(t,"pb",(function(){return ut})),n.d(t,"x",(function(){return _r})),n.d(t,"F",(function(){return br}));var r=n(1),i=n(6),o=n(17);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(12);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},h=l,f=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),p=new o.b("@firebase/auth");function m(e,...t){p.logLevel<=o.a.ERROR&&p.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,...t){throw w(e,...t)}function y(e,...t){return w(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},h()),{[t]:n});return new r.b("auth","Firebase",i).create(t,{appName:e.name})}function b(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&g(e,"argument-error"),v(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return f.create(e,...t)}function _(e,t,...n){if(!e)throw w(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function S(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function k(e){S(e instanceof Function,"Expected a class definition");let t=I.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,I.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r.y)()||Object(r.A)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(x()||Object(r.u)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},D=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r.C)(Object.assign({key:e.config.apiKey},s)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),A.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw V(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);g(e,a)}}catch(t){if(t instanceof r.c)throw t;g(e,"network-request-failed")}}async function L(e,t,n,r,i={}){const o=await j(e,t,n,r,i);return"mfaPendingCredential"in o&&g(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?N(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"network-request-failed")),D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=y(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return 1e3*Number(e)}function B(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r.e)(n);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(e){return m("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class W{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e){var t;const n=e.auth,r=await e.getIdToken(),i=await $(e,async function(e,t){return j(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const u=(c=e.providerData,l=a,[...c.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var c,l;const d=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==u?void 0:u.length)),f=!!d&&h,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new H(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=B(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await M(e,{},async()=>{const n=Object(r.C)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new G;return n&&(_("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Y{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(r.r)(e),i=await n.getIdToken(t),o=B(i);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"==typeof o.firebase?o.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:o,token:i,authTime:z(q(o.auth_time)),issuedAtTime:z(q(o.iat)),expirationTime:z(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(r.r)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $(this,async function(e,t){return j(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:S}=t;_(v&&S,e,"internal-error");const I=G.fromJSON(this.name,S);_("string"==typeof v,e,"internal-error"),Q(l,e.name),Q(d,e.name),_("boolean"==typeof b,e,"internal-error"),_("boolean"==typeof w,e,"internal-error"),Q(h,e.name),Q(f,e.name),Q(p,e.name),Q(m,e.name),Q(g,e.name),Q(y,e.name);const k=new Y({uid:v,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(k.providerData=E.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new G;r.updateFromServerResponse(t);const i=new Y({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await K(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X.type="NONE";const J=X;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t,n){return`firebase:${e}:${t}:${n}`}class ee{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Z(this.userKey,r.apiKey,i),this.fullPersistenceKey=Z("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ee(k(J),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||k(J);const o=Z(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=Y._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new ee(i,e,n)):new ee(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ae(t))return"Blackberry";if(ue(t))return"Webos";if(re(t))return"Safari";if((t.includes("chrome/")||ie(t))&&!t.includes("edge/"))return"Chrome";if(se(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ne(e=Object(r.s)()){return/firefox\//i.test(e)}function re(e=Object(r.s)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ie(e=Object(r.s)()){return/crios\//i.test(e)}function oe(e=Object(r.s)()){return/iemobile/i.test(e)}function se(e=Object(r.s)()){return/android/i.test(e)}function ae(e=Object(r.s)()){return/blackberry/i.test(e)}function ue(e=Object(r.s)()){return/webos/i.test(e)}function ce(e=Object(r.s)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function le(e=Object(r.s)()){return ce(e)||se(e)||ue(e)||ae(e)||/windows phone/i.test(e)||oe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(e,t=[]){let n;switch(e){case"Browser":n=te(Object(r.s)());break;case"Worker":n=`${te(Object(r.s)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new me(this),this.idTokenSubscription=new me(this),this.beforeStateQueue=new he(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ee.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r.r)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(k(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ee.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=de(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function pe(e){return Object(r.r)(e)}class me{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r.j)(e=>this.observer=e)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ge(e,t,n){const r=pe(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=ye(t),{host:s,port:a}=function(e){const t=ye(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ve(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ve(t)}}}(t),u=null===a?"":":"+a;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ye(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(e,t){return j(e,"POST","/v1/accounts:resetPassword",P(e,t))}async function _e(e,t){return j(e,"POST","/v1/accounts:update",t)}async function Ee(e,t){return j(e,"POST","/v1/accounts:sendOobCode",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ke(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Ie(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ie(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ie(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(r.C)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new xe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new xe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Te)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new xe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){var t,n,i,o,s,a;const u=Object(r.D)(Object(r.m)(e)),c=null!==(t=u.apiKey)&&void 0!==t?t:null,l=null!==(n=u.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=u.mode)&&void 0!==i?i:null);_(c&&l&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=l,this.continueUrl=null!==(o=u.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=u.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=u.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(r.D)(Object(r.m)(e)).link,n=t?Object(r.D)(Object(r.m)(t)).deep_link_id:null,i=Object(r.D)(Object(r.m)(e)).deep_link_id;return(i?Object(r.D)(Object(r.m)(i)).link:null)||i||n||t||e}(e);try{return new Oe(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(){this.providerId=Ce.PROVIDER_ID}static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Oe.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}}Ce.PROVIDER_ID="password",Ce.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ce.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Ne{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Re extends Ae{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),ke._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),ke._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Re.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Re.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!(n||r||t||i))return null;if(!s)return null;try{return new Re(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Ae{constructor(){super("facebook.com")}static credential(e){return ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe extends Ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ke._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pe.credential(t,n)}catch(e){return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com",Pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends Ae{constructor(){super("github.com")}static credential(e){return ke._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch(e){return null}}}je.GITHUB_SIGN_IN_METHOD="github.com",je.PROVIDER_ID="github.com";class Me extends be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Ie(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ie(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ie(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Me(n,i):null}static _create(e,t){return new Me(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Ne{constructor(e){_(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Le.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Le.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Me.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Me._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Ae{constructor(){super("twitter.com")}static credential(e,t){return ke._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Fe.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ue(e,t){return L(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.TWITTER_SIGN_IN_METHOD="twitter.com",Fe.PROVIDER_ID="twitter.com";class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Y._fromIdTokenResponse(e,n,r),o=ze(n);return new Ve({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ze(n);return new Ve({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ze(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e){var t;const n=pe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ue(n,{returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends r.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Be.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Be(e,t,n,r)}}function $e(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Be._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){const n=Object(r.r)(e);await Ge(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return j(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=We(i||[]);return n.providerData=n.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ke(e,t,n=!1){const r=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ve._forOperation(e,"link",r)}async function Ge(e,t,n){await K(t);const r=!1===e?"provider-already-linked":"no-such-provider";_(We(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t,n=!1){const{auth:r}=e;try{const i=await $(e,$e(r,"reauthenticate",t,e),n);_(i.idToken,r,"internal-error");const o=B(i.idToken);_(o,r,"internal-error");const{sub:s}=o;return _(e.uid===s,r,"user-mismatch"),Ve._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&g(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t,n=!1){const r=await $e(e,"signIn",t),i=await Ve._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function Xe(e,t){return Ye(pe(e),t)}async function Je(e,t){const n=Object(r.r)(e);return await Ge(!1,n,t.providerId),Ke(n,t)}async function Ze(e,t){return Qe(Object(r.r)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function et(e,t){const n=pe(e),r=await async function(e,t){return L(e,"POST","/v1/accounts:signInWithCustomToken",P(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nt._fromServerResponse(e,t):g(e,"internal-error")}}class nt extends tt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n){const i=Object(r.r)(e),o={requestType:"PASSWORD_RESET",email:t};n&&rt(i,o,n),await async function(e,t){return Ee(e,t)}(i,o)}async function ot(e,t,n){await we(Object(r.r)(e),{oobCode:t,newPassword:n})}async function st(e,t){await async function(e,t){return j(e,"POST","/v1/accounts:update",P(e,t))}(Object(r.r)(e),{oobCode:t})}async function at(e,t){const n=Object(r.r)(e),i=await we(n,{oobCode:t}),o=i.requestType;switch(_(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(i.mfaInfo,n,"internal-error");default:_(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=tt._fromServerResponse(pe(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:o}}async function ut(e,t){const{data:n}=await at(Object(r.r)(e),t);return n.email}async function ct(e,t,n){const r=pe(e),i=await Ue(r,{returnSecureToken:!0,email:t,password:n}),o=await Ve._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function lt(e,t,n){return Xe(Object(r.r)(e),Ce.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n){const i=Object(r.r)(e),o={requestType:"EMAIL_SIGNIN",email:t};_(n.handleCodeInApp,i,"argument-error"),n&&rt(i,o,n),await async function(e,t){return Ee(e,t)}(i,o)}function ht(e,t){const n=Oe.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function ft(e,t,n){const i=Object(r.r)(e),o=Ce.credentialWithLink(t,n||T());return _(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Xe(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pt(e,t){const n={identifier:t,continueUri:x()?T():"http://localhost"},{signinMethods:i}=await async function(e,t){return j(e,"POST","/v1/accounts:createAuthUri",P(e,t))}(Object(r.r)(e),n);return i||[]}async function mt(e,t){const n=Object(r.r)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&rt(n.auth,i,t);const{email:o}=await async function(e,t){return Ee(e,t)}(n.auth,i);o!==e.email&&await e.reload()}async function gt(e,t,n){const i=Object(r.r)(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&rt(i.auth,o,n);const{email:s}=await async function(e,t){return Ee(e,t)}(i.auth,o);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r.r)(e),o={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await $(i,async function(e,t){return j(e,"POST","/v1/accounts:update",t)}(i.auth,o));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}function vt(e,t){return wt(Object(r.r)(e),t,null)}function bt(e,t){return wt(Object(r.r)(e),null,t)}async function wt(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await $(e,_e(r,i));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Et extends _t{constructor(e,t,n,r){super(e,t,n),this.username=r}}class St extends _t{constructor(e,t){super(e,"facebook.com",t)}}class It extends Et{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class kt extends _t{constructor(e,t){super(e,"google.com",t)}}class Tt extends Et{constructor(e,t,n){super(e,"twitter.com",t,n)}}function xt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=B(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r){return new _t(o,"anonymous"!==r&&"custom"!==r?r:null)}}if(!r)return null;switch(r){case"facebook.com":return new St(o,i);case"github.com":return new It(o,i);case"google.com":return new kt(o,i);case"twitter.com":return new Tt(o,i,e.screenName||null);case"custom":case"anonymous":return new _t(o,null);default:return new _t(o,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Ot("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ot("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Ot._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Ot._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=pe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>tt._fromServerResponse(n,e));_(r.mfaPendingCredential,n,"internal-error");const o=Ot._fromMfaPendingCredential(r.mfaPendingCredential);return new Ct(o,i,async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ve._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _(t.user,n,"internal-error"),Ve._forOperation(t.user,t.operationType,s);default:g(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Nt(e,t){var n;const i=Object(r.r)(e),o=t;return _(t.customData.operationType,i,"argument-error"),_(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Ct._fromError(i,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new At(e)}async getSession(){return Ot._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await $(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await $(this.user,(i=this.user.auth,o={idToken:n,mfaEnrollmentId:t},j(i,"POST","/v2/accounts/mfaEnrollment:withdraw",P(i,o))));var i,o;this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null==e?void 0:e.code))throw e}}}const Rt=new WeakMap;function Dt(e){const t=Object(r.r)(e);return Rt.has(t)||Rt.set(t,At._fromUser(t)),Rt.get(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Pt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(r.s)();return re(e)||ce(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Object(r.w)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";const Mt=jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Pt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lt.type="SESSION";const Ft=Lt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ut(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.receivers=[];class zt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const u=Vt("",20);r.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bt(){return void 0!==qt().WorkerGlobalScope&&"function"==typeof qt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t="firebaseLocalStorageDb";class Wt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ht(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Kt(){const e=indexedDB.open($t,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase($t);return new Wt(e).toPromise()}(),t(await Kt()))})})}async function Gt(e,t,n){const r=Ht(e,!0).put({fbase_key:t,value:n});return new Wt(r).toPromise()}function Qt(e,t){const n=Ht(e,!0).delete(t);return new Wt(n).toPromise()}class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Kt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Bt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kt();return await Gt(e,"__sak","1"),await Qt(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Ht(e,!1).get(t),r=await new Wt(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ht(e,!1).getAll();return new Wt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Xt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new tn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class tn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;_(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const nn=Zt("rcb"),rn=new C(3e4,6e4);class on{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=qt().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return _(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(qt().grecaptcha):new Promise((n,i)=>{const o=qt().setTimeout(()=>{i(y(e,"network-request-failed"))},rn.get());qt()[nn]=()=>{qt().clearTimeout(o),delete qt()[nn];const r=qt().grecaptcha;if(!r)return void i(y(e,"internal-error"));const s=r.render;r.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};Jt("https://www.google.com/recaptcha/api.js??"+Object(r.C)({onload:nn,render:"explicit",hl:t})).catch(()=>{clearTimeout(o),i(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=qt().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class sn{async load(e){return new en(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={theme:"light",type:"image"};class un{constructor(e,t=Object.assign({},an),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=pe(n),this.isInvisible="invisible"===this.parameters.size,_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;_(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sn:new on,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){const n=qt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(x()&&!Bt(),this.auth,"internal-error"),await function(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class cn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=xe._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ln(e,t,n){const i=pe(e),o=await fn(i,t,Object(r.r)(n));return new cn(o,e=>Xe(i,e))}async function dn(e,t,n){const i=Object(r.r)(e);await Ge(!1,i,"phone");const o=await fn(i.auth,t,Object(r.r)(n));return new cn(o,e=>Je(i,e))}async function hn(e,t,n){const i=Object(r.r)(e),o=await fn(i.auth,t,Object(r.r)(n));return new cn(o,e=>Ze(i,e))}async function fn(e,t,n){var r;const i=await n.verify();try{let o;if(_("string"==typeof i,e,"argument-error"),_("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");return(await function(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");return(await function(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function pn(e,t){await Ke(Object(r.r)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.providerId=mn.PROVIDER_ID,this.auth=pe(e)}verifyPhoneNumber(e,t){return fn(this.auth,e,Object(r.r)(t))}static credential(e,t){return xe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mn.credentialFromTaggedObject(t)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?xe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gn(e,t){return t?k(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn.PROVIDER_ID="phone",mn.PHONE_SIGN_IN_METHOD="phone";class yn extends be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ie(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ie(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ie(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vn(e){return Ye(e.auth,new yn(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Qe(n,new yn(e),e.bypassAuthState)}async function wn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Ke(n,new yn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vn;case"linkViaPopup":case"linkViaRedirect":return wn;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:g(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new C(2e3,1e4);async function Sn(e,t,n){const r=pe(e);b(e,t,Ne);const i=gn(r,n);return new Tn(r,"signInViaPopup",t,i).executeNotNull()}async function In(e,t,n){const i=Object(r.r)(e);b(i.auth,t,Ne);const o=gn(i.auth,n);return new Tn(i.auth,"reauthViaPopup",t,o,i).executeNotNull()}async function kn(e,t,n){const i=Object(r.r)(e);b(i.auth,t,Ne);const o=gn(i.auth,n);return new Tn(i.auth,"linkViaPopup",t,o,i).executeNotNull()}class Tn extends _n{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Vt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,En.get())};e()}}Tn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xn=new Map;class On extends _n{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=xn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Rn(t),r=An(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xn.set(this.auth._key(),e)}return this.bypassAuthState||xn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Cn(e,t){return An(e)._set(Rn(t),"true")}function Nn(e,t){xn.set(e._key(),t)}function An(e){return k(e._redirectPersistence)}function Rn(e){return Z("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t,n){return async function(e,t,n){const r=pe(e);b(e,t,Ne),await r._initializationPromise;const i=gn(r,n);return await Cn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Pn(e,t,n){return async function(e,t,n){const i=Object(r.r)(e);b(i.auth,t,Ne),await i.auth._initializationPromise;const o=gn(i.auth,n);await Cn(o,i.auth);const s=await Fn(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",s)}(e,t,n)}function jn(e,t,n){return async function(e,t,n){const i=Object(r.r)(e);b(i.auth,t,Ne),await i.auth._initializationPromise;const o=gn(i.auth,n);await Ge(!1,i,t.providerId),await Cn(o,i.auth);const s=await Fn(i);return o._openRedirect(i.auth,t,"linkViaRedirect",s)}(e,t,n)}async function Mn(e,t){return await pe(e)._initializationPromise,Ln(e,t,!1)}async function Ln(e,t,n=!1){const r=pe(e),i=gn(r,t),o=new On(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function Fn(e){const t=Vt(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vn(e))}saveEventToCache(e){this.cachedEventUids.add(Vn(e)),this.lastProcessedEventTime=Date.now()}}function Vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function qn(e,t={}){return j(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$n=/^https?/;function Wn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!$n.test(n))return!1;if(Bn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new C(3e4,6e4);function Kn(){const e=qt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Gn=null;function Qn(e){return Gn=Gn||function(e){return new Promise((t,n)=>{var r,i,o;function s(){Kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kn(),n(y(e,"network-request-failed"))},timeout:Hn.get()})}if(null===(i=null===(r=qt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=qt().gapi)||void 0===o?void 0:o.load)){const t=Zt("iframefcb");return qt()[t]=()=>{gapi.load?s():n(y(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Gn=null,e})}(e),Gn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new C(5e3,15e3),Xn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?N(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},s=Jn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r.C)(o).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nr(e,t,n,i=500,o=600){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},er),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r.s)().toLowerCase();n&&(u=ie(l)?"_blank":n),ne(l)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(r.s)()){var t;return ce(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==u)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",u),new tr(null);const h=window.open(t||"",u,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new tr(h)}function rr(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:s};if(t instanceof Ne){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Object(r.v)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))u[e]=t}if(t instanceof Ae){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const c=u;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return N(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(r.C)(c).slice(1)}`}const ir=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ft,this._completeRedirectFn=Ln,this._overrideRedirectResult=Nn}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return nr(e,rr(e,t,n,T(),r),Vt())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=rr(e,t,n,T(),r),qt().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await Qn(e),n=qt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=y(e,"network-request-failed"),o=qt().setTimeout(()=>{r(i)},Yn.get());function s(){qt().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}(e),n=new Un(e);return t.register("authEvent",t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),g(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await qn(e);for(const e of t)try{if(Wn(e))return}catch(e){}g(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||re()||ce()}};class or extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new or(e)}_finalizeEnroll(e,t,n){return function(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return or._fromCredential(e)}}sr.FACTOR_ID="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r.q)("authIdTokenMaxAge");var ur;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur="Browser",Object(i._registerComponent)(new a.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:ur,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:de(ur)},s=new fe(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(i._registerComponent)(new a.a("auth-internal",e=>(e=>new ar(e))(pe(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.registerVersion)("@firebase/auth","0.21.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ur)),Object(i.registerVersion)("@firebase/auth","0.21.1","esm2017");async function lr(e,t,n){var r;const{BuildInfo:i}=cr();S(t.sessionId,"AuthEvent did not contain a session ID");const o=await async function(e){const t=function(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}(t.sessionId),s={};return ce()?s.ibi=i.packageName:se()?s.apn=i.packageName:g(e,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,rr(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}function dr(e){const{cordova:t}=cr();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let o=null;i?t.plugins.browsertab.openUrl(e):o=t.InAppBrowser.open(e,function(e=Object(r.s)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(o)})})}class hr extends Un{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function fr(e){const t=await gr()._get(yr(e));return t&&await gr()._remove(yr(e)),t}function pr(e,t){var n,r;const i=function(e){const t=vr(e),n=t.link?decodeURIComponent(t.link):void 0,r=vr(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return vr(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=vr(i),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(r=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?y(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function mr(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function gr(){return k(Mt)}function yr(e){return Z("authEvent",e.config.apiKey,e.name)}function vr(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r.D)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=class{constructor(){this._redirectPersistence=Ft,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ln,this._overrideRedirectResult=Nn}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hr(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){g(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,o,s,a,u,c,l;const d=cr();_("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),_(void 0!==(null===(n=null==d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),_("function"==typeof(null===(o=null===(i=null===(r=null==d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_("function"==typeof(null===(u=null===(a=null===(s=null==d?void 0:d.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===u?void 0:u.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_("function"==typeof(null===(l=null===(c=null==d?void 0:d.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),xn.clear(),await this._originValidation(e);const o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:mr(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}(e,n,r);await function(e,t){return gr()._set(yr(e),t)}(e,o);const s=await lr(e,o,t);return async function(e,t,n){const{cordova:r}=cr();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function u(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function c(){a||(a=window.setTimeout(()=>{s(y(e,"redirect-cancelled-by-user"))},2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(u),document.addEventListener("resume",c,!1),se()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}(e,i,await dr(s))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=cr(),n={};ce()?n.iosBundleId=t.packageName:se()?n.androidPackageName=t.packageName:g(e,"operation-not-supported-in-this-environment"),await qn(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=cr(),o=setTimeout(async()=>{await fr(e),t.onEvent(wr())},500),s=async n=>{clearTimeout(o);const r=await fr(e);let i=null;r&&(null==n?void 0:n.url)&&(i=pr(r,n.url)),t.onEvent(i||wr())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,s);const a=r,u=i.packageName.toLowerCase()+"://";cr().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&s({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}};function wr(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){pe(e)._logFramework(t)}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Sl})),n.d(t,"b",(function(){return _c})),n.d(t,"c",(function(){return ac})),n.d(t,"d",(function(){return Au})),n.d(t,"e",(function(){return xl})),n.d(t,"f",(function(){return Ec})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return Ic})),n.d(t,"i",(function(){return Ol})),n.d(t,"j",(function(){return Cl})),n.d(t,"k",(function(){return F})),n.d(t,"l",(function(){return Gl})),n.d(t,"m",(function(){return ye})),n.d(t,"n",(function(){return $})),n.d(t,"o",(function(){return B})),n.d(t,"p",(function(){return ku})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Ie})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return _u})),n.d(t,"u",(function(){return ql})),n.d(t,"v",(function(){return td})),n.d(t,"w",(function(){return ed})),n.d(t,"x",(function(){return pc})),n.d(t,"y",(function(){return Pu})),n.d(t,"z",(function(){return ju})),n.d(t,"A",(function(){return Nu})),n.d(t,"B",(function(){return zl})),n.d(t,"C",(function(){return Jl})),n.d(t,"D",(function(){return yc})),n.d(t,"E",(function(){return Mu})),n.d(t,"F",(function(){return dc})),n.d(t,"G",(function(){return hc})),n.d(t,"H",(function(){return gc})),n.d(t,"I",(function(){return yl})),n.d(t,"J",(function(){return gl})),n.d(t,"K",(function(){return cc})),n.d(t,"L",(function(){return Wl})),n.d(t,"M",(function(){return Rl})),n.d(t,"N",(function(){return Pl})),n.d(t,"O",(function(){return jl})),n.d(t,"P",(function(){return Ml})),n.d(t,"Q",(function(){return Ll})),n.d(t,"R",(function(){return Fl})),n.d(t,"S",(function(){return nd})),n.d(t,"T",(function(){return ll})),n.d(t,"U",(function(){return dl})),n.d(t,"V",(function(){return vc})),n.d(t,"W",(function(){return bc})),n.d(t,"X",(function(){return Bl})),n.d(t,"Y",(function(){return $l})),n.d(t,"Z",(function(){return ul})),n.d(t,"ab",(function(){return rl})),n.d(t,"bb",(function(){return Fu})),n.d(t,"cb",(function(){return Lu})),n.d(t,"db",(function(){return Xl})),n.d(t,"eb",(function(){return Zl})),n.d(t,"fb",(function(){return Ul})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return Al})),n.d(t,"ib",(function(){return pl})),n.d(t,"jb",(function(){return fl})),n.d(t,"kb",(function(){return Vl})),n.d(t,"lb",(function(){return mc})),n.d(t,"mb",(function(){return ol}));var r=n(6),i=n(12),o=n(17),s=n(1),a=n(20);const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.16.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new o.b("@firebase/firestore");function h(){return d.logLevel}function f(e){d.setLogLevel(e)}function p(e,...t){if(d.logLevel<=o.a.DEBUG){const n=t.map(y);d.debug(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=o.a.ERROR){const n=t.map(y);d.error(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(d.logLevel<=o.a.WARN){const n=t.map(y);d.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||v()}function w(e,t){e||v()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends s.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new k(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new c(e)}}class C{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(b(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class N{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new C(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.A;return this.A=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),this.A=e.token,new A(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function L(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new S(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new F(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new F(0,0))}static max(){return new U(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends V{construct(e,t,n){return new z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new z(t)}static emptyPath(){return new z([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends V{construct(e,t,n){return new B(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new S(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new S(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new S(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new B(t)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(z.fromString(e))}static fromName(e){return new $(z.fromString(e).popFirst(5))}static empty(){return new $(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new z(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function H(e){return e.fields.find(e=>2===e.kind)}function K(e){return e.fields.filter(e=>2!==e.kind)}W.UNKNOWN_ID=-1;class G{constructor(e,t){this.fieldPath=e,this.kind=t}}class Q{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Q(0,J.min())}}function Y(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=U.fromTimestamp(1e9===r?new F(n+1,0):new F(n,r));return new J(i,$.empty(),t)}function X(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(U.min(),$.empty(),-1)}static max(){return new J(U.max(),$.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$.comparator(e.documentKey,t.documentKey),0!==n?n:j(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==ee)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(e){return re.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,n)=>{t(e)})}static reject(e){return new re((t,n)=>{n(e)})}static waitFor(e){return new re((t,n)=>{let r=0,i=0,o=!1;e.forEach(e=>{++r,e.next(()=>{++i,o&&i===r&&t()},e=>n(e))}),o=!0,i===r&&t()})}static or(e){let t=re.resolve(!1);for(const n of e)t=t.next(e=>e?re.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new re((n,r)=>{const i=e.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const u=a;t(e[u]).next(e=>{o[u]=e,++s,s===i&&n(o)},e=>r(e))}})}static doWhile(e,t){return new re((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new I,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ae(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=he(t.target.error);this.P.reject(new ae(e,n))}}static open(e,t,n,r){try{return new ie(t,e.transaction(r,n))}catch(e){throw new ae(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ce(t)}}class oe{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===oe.D(Object(s.s)())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Object(s.x)())return!1;if(oe.N())return!0;const e=Object(s.s)(),t=oe.D(e),n=0<t&&t<10,r=oe.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var t;return void 0!==e&&"YES"===(null===(t=e.env)||void 0===t?void 0:t.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new S(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ae(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let o=0;for(;;){++o;try{this.db=await this.F(e);const t=ie.open(this.db,e,i?"readonly":"readwrite",n),o=r(t).next(e=>(t.V(),e)).catch(e=>(t.abort(e),re.reject(e))).toPromise();return o.catch(()=>{}),await t.v,o}catch(e){const t=e,n="FirebaseError"!==t.name&&o<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class se{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return le(this.q.delete())}}class ae extends S{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ue(e){return"IndexedDbTransactionError"===e.name}class ce{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),le(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),le(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new re((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new re((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new re((n,r)=>{t.onerror=e=>{const t=he(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){const n=[];return new re((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const o=new se(i),s=t(i.primaryKey,i.value,o);if(s instanceof re){const e=s.catch(e=>(o.done(),re.reject(e)));n.push(e)}o.isDone?r():null===o.G?i.continue():i.continue(o.G)}}).next(()=>re.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new re((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=he(e.target.error);n(t)}})}let de=!1;function he(e){const t=oe.D(Object(s.s)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return de||(de=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller","Documents written: "+await this.et.st())}catch(e){ue(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.nt(6e4)})}}class pe{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const n=new Set;let r=t,i=!0;return re.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller","Processing collection: "+t),this.rt(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ot(r,n)).next(n=>(p("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=X(t);Z(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}me.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class ye{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ye("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ye&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function be(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function we(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){return null==e}function Ee(e){return 0===e&&1/e==-1/0}function Se(e){return"number"==typeof e&&Number.isInteger(e)&&!Ee(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ke(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const Te=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xe(e){if(b(!!e),"string"==typeof e){let t=0;const n=Te.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oe(e.seconds),nanos:Oe(e.nanos)}}function Oe(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ce(e){return"string"==typeof e?ke.fromBase64String(e):ke.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ae(e){const t=xe(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},De={nullValue:"NULL_VALUE"};function Pe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ne(e)?4:Ke(e)?9007199254740991:10:v()}function je(e,t){if(e===t)return!0;const n=Pe(e);if(n!==Pe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ae(e).isEqual(Ae(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xe(e.timestampValue),r=xe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ce(e.bytesValue).isEqual(Ce(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oe(e.geoPointValue.latitude)===Oe(t.geoPointValue.latitude)&&Oe(e.geoPointValue.longitude)===Oe(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oe(e.integerValue)===Oe(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oe(e.doubleValue),r=Oe(t.doubleValue);return n===r?Ee(n)===Ee(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],je);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ve(n)!==ve(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!je(n[e],r[e])))return!1;return!0}(e,t);default:return v()}}function Me(e,t){return void 0!==(e.values||[]).find(e=>je(e,t))}function Le(e,t){if(e===t)return 0;const n=Pe(e),r=Pe(t);if(n!==r)return j(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oe(e.integerValue||e.doubleValue),r=Oe(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Fe(e.timestampValue,t.timestampValue);case 4:return Fe(Ae(e),Ae(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ce(e),r=Ce(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=j(n[e],r[e]);if(0!==t)return t}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(Oe(e.latitude),Oe(t.latitude));return 0!==n?n:j(Oe(e.longitude),Oe(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Le(n[e],r[e]);if(t)return t}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Re.mapValue&&t===Re.mapValue)return 0;if(e===Re.mapValue)return 1;if(t===Re.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let e=0;e<r.length&&e<o.length;++e){const t=j(r[e],o[e]);if(0!==t)return t;const s=Le(n[r[e]],i[o[e]]);if(0!==s)return s}return j(r.length,o.length)}(e.mapValue,t.mapValue);default:throw v()}}function Fe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=xe(e),r=xe(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function Ue(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=xe(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ce(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,$.fromName(r).toString()):"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=e(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${e(t.fields[o])}`;return r+"}"}(t.mapValue):v();var n,r}(e)}function Ve(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ze(e){return!!e&&"integerValue"in e}function qe(e){return!!e&&"arrayValue"in e}function Be(e){return!!e&&"nullValue"in e}function $e(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function We(e){return!!e&&"mapValue"in e}function He(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return be(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=He(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=He(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ke(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ge(e){return"nullValue"in e?De:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Ve(ye.empty(),$.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:v()}function Qe(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Ve(ye.empty(),$.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Re:v()}function Ye(e,t){const n=Le(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Xe(e,t){const n=Le(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.position=e,this.inclusive=t}}function Ze(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(r=o.field.isKeyField()?$.comparator($.fromName(s.referenceValue),n.key):Le(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function et(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!je(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{}class nt extends tt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new dt(e,t,n):"array-contains"===t?new mt(e,n):"in"===t?new gt(e,n):"not-in"===t?new yt(e,n):"array-contains-any"===t?new vt(e,n):new nt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ht(e,n):new ft(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Le(t,this.value)):null!==t&&Pe(this.value)===Pe(t)&&this.matchesComparison(Le(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rt extends tt{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new rt(e,t)}matches(e){return it(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function it(e){return"and"===e.op}function ot(e){return"or"===e.op}function st(e){return at(e)&&it(e)}function at(e){for(const t of e.filters)if(t instanceof rt)return!1;return!0}function ut(e,t){return e instanceof nt?function(e,t){return t instanceof nt&&e.op===t.op&&e.field.isEqual(t.field)&&je(e.value,t.value)}(e,t):e instanceof rt?function(e,t){return t instanceof rt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&ut(n,t.filters[r]),!0)}(e,t):void v()}function ct(e,t){const n=e.filters.concat(t);return rt.create(n,e.op)}function lt(e){return e instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`}(e):e instanceof rt?function(e){return e.op.toString()+" {"+e.getFilters().map(lt).join(" ,")+"}"}(e):"Filter"}class dt extends nt{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class ht extends nt{constructor(e,t){super(e,"in",t),this.keys=pt("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ft extends nt{constructor(e,t){super(e,"not-in",t),this.keys=pt("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>$.fromName(e.referenceValue))}class mt extends nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qe(t)&&Me(t.arrayValue,this.value)}}class gt extends nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Me(this.value.arrayValue,t)}}class yt extends nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Me(this.value.arrayValue,t)}}class vt extends nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qe(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Me(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t="asc"){this.field=e,this.dir=t}}function wt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Et(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Et(this.root,e,this.comparator,!1)}getReverseIterator(){return new Et(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Et(this.root,e,this.comparator,!0)}}class Et{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:St.RED,this.left=null!=r?r:St.EMPTY,this.right=null!=i?i:St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new St(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return St.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1,St.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kt(this.data.getIterator())}getIteratorFrom(e){return new kt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof It))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class kt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Tt(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(B.comparator)}static empty(){return new xt([])}unionWith(e){let t=new It(B.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!We(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=He(t)}setAll(e){let t=B.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=He(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());We(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];We(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){be(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new Ot(He(this.value))}}function Ct(e){const t=[];return be(e.fields,(e,n)=>{const r=new B([e]);if(We(n)){const e=Ct(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new xt(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Nt{constructor(e,t,n,r,i,o,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Nt(e,0,U.min(),U.min(),U.min(),Ot.empty(),0)}static newFoundDocument(e,t,n,r){return new Nt(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new Nt(e,2,t,U.min(),U.min(),Ot.empty(),0)}static newUnknownDocument(e,t){return new Nt(e,3,t,U.min(),U.min(),Ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ft=null}}function Rt(e,t=null,n=[],r=[],i=null,o=null,s=null){return new At(e,t,n,r,i,o,s)}function Dt(e){const t=_(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ue(t.value);if(st(t))return t.filters.map(t=>e(t)).join(",");{const n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),_e(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Ue(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Ue(e)).join(",")),t.ft=e}return t.ft}function Pt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!wt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ut(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!et(e.startAt,t.startAt)&&et(e.endAt,t.endAt)}function jt(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Mt(e,t){return e.filters.filter(e=>e instanceof nt&&e.field.isEqual(t))}function Lt(e,t,n){let r=De,i=!0;for(const n of Mt(e,t)){let e=De,t=!0;switch(n.op){case"<":case"<=":e=Ge(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=De}Ye({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let o=0;o<e.orderBy.length;++o)if(e.orderBy[o].field.isEqual(t)){const e=n.position[o];Ye({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Ft(e,t,n){let r=Re,i=!0;for(const n of Mt(e,t)){let e=Re,t=!0;switch(n.op){case">=":case">":e=Qe(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Re}Xe({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let o=0;o<e.orderBy.length;++o)if(e.orderBy[o].field.isEqual(t)){const e=n.position[o];Xe({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Vt(e,t,n,r,i,o,s,a){return new Ut(e,t,n,r,i,o,s,a)}function zt(e){return new Ut(e)}function qt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Bt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function $t(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Wt(e){return null!==e.collectionGroup}function Ht(e){const t=_(e);if(null===t.dt){t.dt=[];const e=$t(t),n=Bt(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new bt(e)),t.dt.push(new bt(B.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new bt(B.keyField(),e))}}}return t.dt}function Kt(e){const t=_(e);if(!t._t)if("F"===t.limitType)t._t=Rt(t.path,t.collectionGroup,Ht(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ht(t)){const t="desc"===n.dir?"asc":"desc";e.push(new bt(n.field,t))}const n=t.endAt?new Je(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Je(t.startAt.position,t.startAt.inclusive):null;t._t=Rt(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Gt(e,t){t.getFirstInequalityField(),$t(e);const n=e.filters.concat([t]);return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qt(e,t,n){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Yt(e,t){return Pt(Kt(e),Kt(t))&&e.limitType===t.limitType}function Xt(e){return`${Dt(Kt(e))}|lt:${e.limitType}`}function Jt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>lt(e)).join(", ")}]`),_e(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Ue(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Ue(e)).join(",")),`Target(${t})`}(Kt(e))}; limitType=${e.limitType})`}function Zt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ht(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ze(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ht(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ze(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ht(e),t))}(e,t)}function en(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function tn(e){return(t,n)=>{let r=!1;for(const i of Ht(e)){const e=nn(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function nn(e,t,n){const r=e.field.isKeyField()?$.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Le(r,i):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ee(t)?"-0":t}}function on(e){return{integerValue:""+e}}function sn(e,t){return Se(t)?on(t):rn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this._=void 0}}function un(e,t,n){return e instanceof dn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof hn?fn(e,t):e instanceof pn?mn(e,t):function(e,t){const n=ln(e,t),r=yn(n)+yn(e.gt);return ze(n)&&ze(e.gt)?on(r):rn(e.yt,r)}(e,t)}function cn(e,t,n){return e instanceof hn?fn(e,t):e instanceof pn?mn(e,t):n}function ln(e,t){return e instanceof gn?ze(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class dn extends an{}class hn extends an{constructor(e){super(),this.elements=e}}function fn(e,t){const n=vn(t);for(const t of e.elements)n.some(e=>je(e,t))||n.push(t);return{arrayValue:{values:n}}}class pn extends an{constructor(e){super(),this.elements=e}}function mn(e,t){let n=vn(t);for(const t of e.elements)n=n.filter(e=>!je(e,t));return{arrayValue:{values:n}}}class gn extends an{constructor(e,t){super(),this.yt=e,this.gt=t}}function yn(e){return Oe(e.integerValue||e.doubleValue)}function vn(e){return qe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.field=e,this.transform=t}}class wn{constructor(e,t){this.version=e,this.transformResults=t}}class _n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function En(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Sn{}function In(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Pn(e.key,_n.none()):new Cn(e.key,e.data,_n.none());{const n=e.data,r=Ot.empty();let i=new It(B.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Nn(e.key,r,new xt(i.toArray()),_n.none())}}function kn(e,t,n){e instanceof Cn?function(e,t,n){const r=e.value.clone(),i=Rn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Nn?function(e,t,n){if(!En(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Rn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(An(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Tn(e,t,n,r){return e instanceof Cn?function(e,t,n,r){if(!En(e.precondition,t))return n;const i=e.value.clone(),o=Dn(e.fieldTransforms,r,t);return i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Nn?function(e,t,n,r){if(!En(e.precondition,t))return n;const i=Dn(e.fieldTransforms,r,t),o=t.data;return o.setAll(An(e)),o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return En(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function xn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ln(r.transform,e||null);null!=i&&(null===n&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function On(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof hn&&t instanceof hn||e instanceof pn&&t instanceof pn?M(e.elements,t.elements,je):e instanceof gn&&t instanceof gn?je(e.gt,t.gt):e instanceof dn&&t instanceof dn}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Cn extends Sn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Nn extends Sn{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function An(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Rn(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,cn(s,a,n[i]))}return r}function Dn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,o=n.data.field(i.field);r.set(i.field,un(e,o,t))}return r}class Pn extends Sn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jn extends Sn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln,Fn;function Un(e){switch(e){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Vn(e){if(void 0===e)return m("GRPC error has no .code"),E.UNKNOWN;switch(e){case Ln.OK:return E.OK;case Ln.CANCELLED:return E.CANCELLED;case Ln.UNKNOWN:return E.UNKNOWN;case Ln.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ln.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ln.INTERNAL:return E.INTERNAL;case Ln.UNAVAILABLE:return E.UNAVAILABLE;case Ln.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ln.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ln.NOT_FOUND:return E.NOT_FOUND;case Ln.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ln.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ln.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ln.ABORTED:return E.ABORTED;case Ln.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ln.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ln.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(Fn=Ln||(Ln={}))[Fn.OK=0]="OK",Fn[Fn.CANCELLED=1]="CANCELLED",Fn[Fn.UNKNOWN=2]="UNKNOWN",Fn[Fn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fn[Fn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fn[Fn.NOT_FOUND=5]="NOT_FOUND",Fn[Fn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fn[Fn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fn[Fn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fn[Fn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fn[Fn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fn[Fn.ABORTED=10]="ABORTED",Fn[Fn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fn[Fn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fn[Fn.INTERNAL=13]="INTERNAL",Fn[Fn.UNAVAILABLE=14]="UNAVAILABLE",Fn[Fn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){be(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return we(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new _t($.comparator);function Bn(){return qn}const $n=new _t($.comparator);function Wn(...e){let t=$n;for(const n of e)t=t.insert(n.key,n);return t}function Hn(e){let t=$n;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Kn(){return Qn()}function Gn(){return Qn()}function Qn(){return new zn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Yn=new _t($.comparator),Xn=new It($.comparator);function Jn(...e){let t=Xn;for(const n of e)t=t.add(n);return t}const Zn=new It(j);function er(){return Zn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tr(U.min(),r,er(),Bn(),Jn())}}class nr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nr(n,t,Jn(),Jn(),Jn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class ir{constructor(e,t){this.targetId=e,this.Et=t}}class or{constructor(e,t,n=ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sr{constructor(){this.At=0,this.Rt=cr(),this.bt=ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Jn(),t=Jn(),n=Jn();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new nr(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=cr()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ar{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Bn(),this.qt=ur(),this.Ut=new It(j)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(jt(e))if(0===n){const n=new $(e.path);this.Qt(t,n,Nt.newNoDocument(n,U.min()))}else b(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&jt(i.target)){const t=new $(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Nt.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=Jn();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));const r=new tr(e,t,this.Ut,this.Lt,n);return this.Lt=Bn(),this.qt=ur(),this.Ut=new It(j),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new sr,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new It(j),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new sr),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ur(){return new _t($.comparator)}function cr(){return new _t($.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={asc:"ASCENDING",desc:"DESCENDING"},dr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hr={and:"AND",or:"OR"};class fr{constructor(e,t){this.databaseId=e,this.wt=t}}function pr(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mr(e,t){return e.wt?t.toBase64():t.toUint8Array()}function gr(e,t){return pr(e,t.toTimestamp())}function yr(e){return b(!!e),U.fromTimestamp(function(e){const t=xe(e);return new F(t.seconds,t.nanos)}(e))}function vr(e,t){return function(e){return new z(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function br(e){const t=z.fromString(e);return b(Ur(t)),t}function wr(e,t){return vr(e.databaseId,t.path)}function _r(e,t){const n=br(t);if(n.get(1)!==e.databaseId.projectId)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $(kr(n))}function Er(e,t){return vr(e.databaseId,t)}function Sr(e){const t=br(e);return 4===t.length?z.emptyPath():kr(t)}function Ir(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function kr(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Tr(e,t,n){return{name:wr(e,t),fields:n.value.mapValue.fields}}function xr(e,t,n){const r=_r(e,t.name),i=yr(t.updateTime),o=t.createTime?yr(t.createTime):U.min(),s=new Ot({mapValue:{fields:t.fields}}),a=Nt.newFoundDocument(r,i,o,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Or(e,t){let n;if(t instanceof Cn)n={update:Tr(e,t.key,t.value)};else if(t instanceof Pn)n={delete:wr(e,t.key)};else if(t instanceof Nn)n={update:Tr(e,t.key,t.data),updateMask:Fr(t.fieldMask)};else{if(!(t instanceof jn))return v();n={verify:wr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof dn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof hn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof pn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof gn)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:gr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function Cr(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?_n.updateTime(yr(e.updateTime)):void 0!==e.exists?_n.exists(e.exists):_n.none()}(t.currentDocument):_n.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new dn;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new hn(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new pn(e)}else"increment"in t?n=new gn(e,t.increment):v();const r=B.fromServerFormat(t.fieldPath);return new bn(r,n)}(e,t)):[];if(t.update){t.update.name;const i=_r(e,t.update.name),o=new Ot({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new xt(t.map(e=>B.fromServerFormat(e)))}(t.updateMask);return new Nn(i,o,e,n,r)}return new Cn(i,o,n,r)}if(t.delete){const r=_r(e,t.delete);return new Pn(r,n)}if(t.verify){const r=_r(e,t.verify);return new jn(r,n)}return v()}function Nr(e,t){return{documents:[Er(e,t.path)]}}function Ar(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Er(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Er(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return function e(t){return t instanceof nt?function(e){if("=="===e.op){if($e(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NAN"}};if(Be(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if($e(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NAN"}};if(Be(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(e.field),op:Pr(e.op),value:e.value}}}(t):t instanceof rt?function(t){const n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:jr(t.op),filters:n}}}(t):v()}(rt.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Mr(e.field),direction:Dr(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.wt||_e(t)?t:{value:t}}(e,t.limit);var a;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Rr(e){let t=Sr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lr(e.unaryFilter.field);return nt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lr(e.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Lr(e.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Lr(e.unaryFilter.field);return nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?function(e){return nt.create(Lr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return rt.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op))}(t):v()}(e);return t instanceof rt&&st(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>function(e){return new bt(Lr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,_e(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new Je(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Je(n,t)}(n.endAt)),Vt(t,i,s,o,a,"F",u,c)}function Dr(e){return lr[e]}function Pr(e){return dr[e]}function jr(e){return hr[e]}function Mr(e){return{fieldPath:e.canonicalString()}}function Lr(e){return B.fromServerFormat(e.fieldPath)}function Fr(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ur(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=qr(t)),t=zr(e.get(n),t);return qr(t)}function zr(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function qr(e){return e+""}function Br(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),z.emptyPath();const n=t-2,r=[];let i="";for(let o=0;o<t;){const t=e.indexOf("",o);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(o,t);let s;0===i.length?s=n:(i+=n,s=i,i=""),r.push(s);break;case"":i+=e.substring(o,t),i+="\0";break;case"":i+=e.substring(o,t+1);break;default:v()}o=t+2}return new z(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e,t){return[e,Vr(t)]}function Hr(e,t,n){return[e,Vr(t),n]}const Kr={},Gr=["prefixPath","collectionGroup","readTime","documentId"],Qr=["prefixPath","collectionGroup","documentId"],Yr=["collectionGroup","readTime","prefixPath","documentId"],Xr=["canonicalId","targetId"],Jr=["targetId","path"],Zr=["path","targetId"],ei=["collectionId","parent"],ti=["indexId","uid"],ni=["uid","sequenceNumber"],ri=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ii=["indexId","uid","orderedDocumentKey"],oi=["userId","collectionPath","documentId"],si=["userId","collectionPath","largestBatchId"],ai=["userId","collectionGroup","largestBatchId"],ui=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ci=[...ui,"documentOverlays"],li=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],di=li,hi=[...di,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends te{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function pi(e,t){const n=_(e);return oe.M(n.se,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&kn(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Tn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Tn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Gn();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=t.has(r.key)?null:s;const a=In(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Jn())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>On(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>On(e,t))}}class gi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=Yn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new gi(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,n,r,i=U.min(),o=U.min(),s=ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.ie=e}}function wi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:_i(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:wr(e,t.key),fields:t.data.value.mapValue.fields,updateTime:pr(e,t.version.toTimestamp()),createTime:pr(e,t.createTime.toTimestamp())}}(e.ie,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ei(t.version)};else{if(!t.isUnknownDocument())return v();r.unknownDocument={path:n.path.toArray(),version:Ei(t.version)}}return r}function _i(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ei(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Si(e){const t=new F(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function Ii(e,t){const n=(t.baseMutations||[]).map(t=>Cr(e.ie,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>Cr(e.ie,t)),i=F.fromMillis(t.localWriteTimeMs);return new mi(t.batchId,i,n,r)}function ki(e){const t=Si(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Si(e.lastLimboFreeSnapshotVersion):U.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=Kt(zt(Sr(i.documents[0])))):r=function(e){return Kt(Rr(e))}(e.query),new vi(r,e.targetId,0,e.lastListenSequenceNumber,t,n,ke.fromBase64String(e.resumeToken))}function Ti(e,t){const n=Ei(t.snapshotVersion),r=Ei(t.lastLimboFreeSnapshotVersion);let i;i=jt(t.target)?Nr(e.ie,t.target):Ar(e.ie,t.target);const o=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Dt(t.target),readTime:n,resumeToken:o,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function xi(e){const t=Rr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Qt(t,t.limit,"L"):t}function Oi(e,t){return new yi(t.largestBatchId,Cr(e.ie,t.overlayMutation))}function Ci(e,t){const n=t.path.lastSegment();return[e,Vr(t.path.popLast()),n]}function Ni(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ei(r.readTime),documentKey:Vr(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{getBundleMetadata(e,t){return Ri(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Si(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Ri(e).put({bundleId:(n=t).id,createTime:Ei(yr(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Di(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:xi(t.bundledQuery),readTime:Si(t.readTime)};var t})}saveNamedQuery(e,t){return Di(e).put(function(e){return{name:e.name,readTime:Ei(yr(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Ri(e){return pi(e,"bundles")}function Di(e){return pi(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const n=t.uid||"";return new Pi(e,n)}getOverlay(e,t){return ji(e).get(Ci(this.userId,t)).next(e=>e?Oi(this.yt,e):null)}getOverlays(e,t){const n=Kn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const o=new yi(t,i);r.push(this.oe(e,o))}),re.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(Vr(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ji(e).Y("collectionPathOverlayIndex",r))}),re.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Kn(),i=Vr(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ji(e).W("collectionPathOverlayIndex",o).next(e=>{for(const t of e){const e=Oi(this.yt,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Kn();let o;const s=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ji(e).Z({index:"collectionGroupOverlayIndex",range:s},(e,t,n)=>{const s=Oi(this.yt,t);i.size()<r||s.largestBatchId===o?(i.set(s.getKey(),s),o=s.largestBatchId):n.done()}).next(()=>i)}oe(e,t){return ji(e).put(function(e,t,n){const[r,i,o]=Ci(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:o,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Or(e.ie,n.mutation)}}(this.yt,this.userId,t))}}function ji(e){return pi(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Oe(e.integerValue));else if("doubleValue"in e){const n=Oe(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Ee(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(""+(n.seconds||"")),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Ce(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Ke(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):v()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),$.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}function Li(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Fi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Li(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Mi.Ie=new Mi;class Ui{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ee(n.value),n=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.be(n.value),n=t.next();this.Pe()}ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{const e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{const e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){const t=this.De(e),n=Fi(t);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}xe(e){const t=this.De(e),n=Fi(t);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ee(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Vi{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class zi{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class qi{constructor(){this.$e=new Ui,this.Be=new Vi(this.$e),this.Le=new zi(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ue(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Bi(this.indexId,this.documentKey,this.arrayValue,n)}}function $i(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Wi(e.arrayValue,t.arrayValue),0!==n?n:(n=Wi(e.directionalValue,t.directionalValue),0!==n?n:$.comparator(e.documentKey,t.documentKey)))}function Wi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){b(e.collectionGroup===this.collectionId);const t=H(e);if(void 0!==t&&!this.We(t))return!1;const n=K(e);let r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){const e=n[r];if(!this.ze(this.Qe,e)||!this.He(this.Ke[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],e))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){if(0===e.getFilters().length)return[];const t=function e(t){if(b(t instanceof nt||t instanceof rt),t instanceof nt)return t;if(1===t.filters.length)return e(t.filters[0]);const n=t.filters.map(t=>e(t));let r=rt.create(n,t.op);return r=Zi(r),Yi(r)?r:(b(r instanceof rt),b(it(r)),b(r.filters.length>1),r.filters.reduce((e,t)=>Xi(e,t)))}(function e(t){var n,r;if(b(t instanceof nt||t instanceof rt),t instanceof nt){if(t instanceof gt){const e=(null===(r=null===(n=t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>nt.create(t.field,"==",e)))||[];return rt.create(e,"or")}return t}const i=t.filters.map(t=>e(t));return rt.create(i,t.op)}(e));return b(Yi(t)),Gi(t)||Qi(t)?[t]:t.getFilters()}function Gi(e){return e instanceof nt}function Qi(e){return e instanceof rt&&st(e)}function Yi(e){return Gi(e)||Qi(e)||function(e){if(e instanceof rt&&ot(e)){for(const t of e.getFilters())if(!Gi(t)&&!Qi(t))return!1;return!0}return!1}(e)}function Xi(e,t){let n;return b(e instanceof nt||e instanceof rt),b(t instanceof nt||t instanceof rt),n=e instanceof nt?t instanceof nt?function(e,t){return rt.create([e,t],"and")}(e,t):Ji(e,t):t instanceof nt?Ji(t,e):function(e,t){if(b(e.filters.length>0&&t.filters.length>0),it(e)&&it(t))return ct(e,t.getFilters());const n=ot(e)?e:t,r=ot(e)?t:e,i=n.filters.map(e=>Xi(e,r));return rt.create(i,"or")}(e,t),Zi(n)}function Ji(e,t){if(it(t))return ct(t,e.getFilters());{const n=t.filters.map(t=>Xi(e,t));return rt.create(n,"or")}}function Zi(e){if(b(e instanceof nt||e instanceof rt),e instanceof nt)return e;const t=e.getFilters();if(1===t.length)return Zi(t[0]);if(at(e))return e;const n=t.map(e=>Zi(e)),r=[];return n.forEach(t=>{t instanceof nt?r.push(t):t instanceof rt&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:rt.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class eo{constructor(){this.Je=new to}addToCollectionParentIndex(e,t){return this.Je.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(J.min())}updateCollectionGroup(e,t,n){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class to{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new It(z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new It(z.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Uint8Array(0);class ro{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new to,this.Xe=new zn(e=>Dt(e),(e,t)=>Pt(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const i={collectionId:n,parent:Vr(r)};return io(e).put(i)}return re.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[L(t),""],!1,!0);return io(e).W(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Br(r.parent))}return n})}addFieldIndex(e,t){const n=so(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=ao(e);return i.next(e=>{n.put(Ni(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=so(e),r=ao(e),i=oo(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=oo(e);let r=!0;const i=new Map;return re.forEach(this.Ze(t),t=>this.tn(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Jn();const r=[];return re.forEach(i,(i,o)=>{var s;p("IndexedDbIndexManager",`Using index ${s=i,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${Dt(t)}`);const a=function(e,t){const n=H(t);if(void 0===n)return null;for(const t of Mt(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(o,i),u=function(e,t){const n=new Map;for(const r of K(t))for(const t of Mt(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(o,i),c=function(e,t){const n=[];let r=!0;for(const i of K(t)){const t=0===i.kind?Lt(e,i.fieldPath,e.startAt):Ft(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Je(n,r)}(o,i),l=function(e,t){const n=[];let r=!0;for(const i of K(t)){const t=0===i.kind?Ft(e,i.fieldPath,e.endAt):Lt(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Je(n,r)}(o,i),d=this.en(i,o,c),h=this.en(i,o,l),f=this.nn(i,o,u),m=this.sn(i.indexId,a,d,c.inclusive,h,l.inclusive,f);return re.forEach(m,i=>n.J(i,t.limit).next(t=>{t.forEach(t=>{const n=$.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return re.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:Ki(rt.create(e.filters,"and")).map(t=>Rt(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,n,r,i,o,s){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),u=a/(null!=t?t.length:1),c=[];for(let l=0;l<a;++l){const a=t?this.rn(t[l/u]):no,d=this.on(e,a,n[l%u],r),h=this.un(e,a,i[l%u],o),f=s.map(t=>this.on(e,a,t,!0));c.push(...this.createRange(d,h,f))}return c}on(e,t,n,r){const i=new Bi(e,$.empty(),t,n);return r?i:i.Ue()}un(e,t,n,r){const i=new Bi(e,$.empty(),t,n);return r?i.Ue():i}tn(e,t){const n=new Hi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.je(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Ze(t);return re.forEach(r,t=>this.tn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new It(B.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}cn(e,t){const n=new qi;for(const r of K(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);Mi.Ie.ue(e,i)}return n.Fe()}rn(e){const t=new qi;return Mi.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const n=new qi;return Mi.Ie.ue(Ve(this.databaseId,t),n.qe(function(e){const t=K(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Fe()}nn(e,t,n){if(null===n)return[];let r=[];r.push(new qi);let i=0;for(const o of K(e)){const e=n[i++];for(const n of r)if(this.hn(t,o.fieldPath)&&qe(e))r=this.ln(r,o,e);else{const t=n.qe(o.kind);Mi.Ie.ue(e,t)}}return this.fn(r)}en(e,t,n){return this.nn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fe();return t}ln(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new qi;r.seed(n.Fe()),Mi.Ie.ue(e,r.qe(t.kind)),i.push(r)}return i}hn(e,t){return!!e.filters.find(e=>e instanceof nt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=so(e),r=ao(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{const t=[];return re.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Q(t.sequenceNumber,new J(Si(t.readTime),new $(Br(t.documentKey)),t.largestBatchId)):Q.empty(),r=e.fields.map(([e,t])=>new G(B.fromServerFormat(e),t));return new W(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:j(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=so(e),i=ao(e);return this.dn(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>re.forEach(t,t=>i.put(Ni(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return re.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?re.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),re.forEach(i,n=>this._n(e,t,n).next(t=>{const i=this.wn(r,n);return t.isEqual(i)?re.resolve():this.mn(e,r,n,t,i)}))))})}gn(e,t,n,r){return oo(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,t.key),documentKey:t.key.path.toArray()})}yn(e,t,n,r){return oo(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,t.key),t.key.path.toArray()])}_n(e,t,n){const r=oo(e);let i=new It($i);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,t)])},(e,r)=>{i=i.add(new Bi(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}wn(e,t){let n=new It($i);const r=this.cn(t,e);if(null==r)return n;const i=H(t);if(null!=i){const o=e.data.field(i.fieldPath);if(qe(o))for(const i of o.arrayValue.values||[])n=n.add(new Bi(t.indexId,e.key,this.rn(i),r))}else n=n.add(new Bi(t.indexId,e.key,no,r));return n}mn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(e,t,n,r,i){const o=e.getIterator(),s=t.getIterator();let a=Tt(o),u=Tt(s);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=Tt(s)):t?(i(a),a=Tt(o)):(a=Tt(o),u=Tt(s))}}(r,i,$i,r=>{o.push(this.gn(e,t,n,r))},r=>{o.push(this.yn(e,t,n,r))}),re.waitFor(o)}dn(e){let t=1;return ao(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>$i(e,t)).filter((e,t,n)=>!t||0!==$i(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=$i(i,e),o=$i(i,t);if(0===n)r[0]=e.Ue();else if(n>0&&o<0)r.push(i),r.push(i.Ue());else if(o>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2){if(this.pn(r[e],r[e+1]))return[];const t=[r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,no,[]],n=[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,no,[]];i.push(IDBKeyRange.bound(t,n))}return i}pn(e,t){return $i(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(uo)}getMinOffset(e,t){return re.mapArray(this.Ze(t),t=>this.tn(e,t).next(e=>e||v())).next(uo)}}function io(e){return pi(e,"collectionParents")}function oo(e){return pi(e,"indexEntries")}function so(e){return pi(e,"indexConfiguration")}function ao(e){return pi(e,"indexState")}function uo(e){b(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Z(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new J(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class lo{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new lo(e,lo.DEFAULT_COLLECTION_PERCENTILE,lo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),o=[],s=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:s},(e,t,n)=>(a++,n.delete()));o.push(u.next(()=>{b(1===a)}));const c=[];for(const e of n.mutations){const r=Hr(t,e.key.path,n.batchId);o.push(i.delete(r)),c.push(e.key)}return re.waitFor(o).next(()=>c)}function fo(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lo.DEFAULT_COLLECTION_PERCENTILE=10,lo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lo.DEFAULT=new lo(41943040,lo.DEFAULT_COLLECTION_PERCENTILE,lo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lo.DISABLED=new lo(-1,0,0);class po{constructor(e,t,n,r){this.userId=e,this.yt=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new po(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return go(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=yo(e),o=go(e);return o.add({}).next(s=>{b("number"==typeof s);const a=new mi(s,t,n,r),u=function(e,t,n){const r=n.baseMutations.map(t=>Or(e.ie,t)),i=n.mutations.map(t=>Or(e.ie,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,a),c=[];let l=new It((e,t)=>j(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Hr(this.userId,e.key.path,s);l=l.add(e.key.path.popLast()),c.push(o.put(u)),c.push(i.put(t,Kr))}return l.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[s]=a.keys()}),re.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return go(e).get(t).next(e=>e?(b(e.userId===this.userId),Ii(this.yt,e)):null)}Tn(e,t){return this.In[t]?re.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return go(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=Ii(this.yt,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return go(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return go(e).W("userMutationsIndex",t).next(e=>e.map(e=>Ii(this.yt,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Wr(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return yo(e).Z({range:r},(n,r,o)=>{const[s,a,u]=n,c=Br(a);if(s===this.userId&&t.path.isEqual(c))return go(e).get(u).next(e=>{if(!e)throw v();b(e.userId===this.userId),i.push(Ii(this.yt,e))});o.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new It(j);const r=[];return t.forEach(t=>{const i=Wr(this.userId,t.path),o=IDBKeyRange.lowerBound(i),s=yo(e).Z({range:o},(e,r,i)=>{const[o,s,a]=e,u=Br(s);o===this.userId&&t.path.isEqual(u)?n=n.add(a):i.done()});r.push(s)}),re.waitFor(r).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Wr(this.userId,n),o=IDBKeyRange.lowerBound(i);let s=new It(j);return yo(e).Z({range:o},(e,t,i)=>{const[o,a,u]=e,c=Br(a);o===this.userId&&n.isPrefixOf(c)?c.length===r&&(s=s.add(u)):i.done()}).next(()=>this.En(e,s))}En(e,t){const n=[],r=[];return t.forEach(t=>{r.push(go(e).get(t).next(e=>{if(null===e)throw v();b(e.userId===this.userId),n.push(Ii(this.yt,e))}))}),re.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return ho(e.se,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),re.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return re.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return yo(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Br(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return mo(e,this.userId,t)}Rn(e){return vo(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function mo(e,t,n){const r=Wr(t,n.path),i=r[1],o=IDBKeyRange.lowerBound(r);let s=!1;return yo(e).Z({range:o,X:!0},(e,n,r)=>{const[o,a,u]=e;o===t&&a===i&&(s=!0),r.done()}).next(()=>s)}function go(e){return pi(e,"mutations")}function yo(e){return pi(e,"documentMutations")}function vo(e){return pi(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bo(0)}static vn(){return new bo(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const n=new bo(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>U.fromTimestamp(new F(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_o(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.Sn(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return _o(e).Z((o,s)=>{const a=ki(s);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>re.waitFor(i)).next(()=>r)}forEachTarget(e,t){return _o(e).Z((e,n)=>{const r=ki(n);t(r)})}Vn(e){return Eo(e).get("targetGlobalKey").next(e=>(b(null!==e),e))}Sn(e,t){return Eo(e).put("targetGlobalKey",t)}Dn(e,t){return _o(e).put(Ti(this.yt,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Dt(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return _o(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const o=ki(n);Pt(t,o.target)&&(i=o,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=So(e);return t.forEach(t=>{const o=Vr(t.path);r.push(i.put({targetId:n,path:o})),r.push(this.referenceDelegate.addReference(e,n,t))}),re.waitFor(r)}removeMatchingKeys(e,t,n){const r=So(e);return re.forEach(t,t=>{const i=Vr(t.path);return re.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=So(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=So(e);let i=Jn();return r.Z({range:n,X:!0},(e,t,n)=>{const r=Br(e[1]),o=new $(r);i=i.add(o)}).next(()=>i)}containsKey(e,t){const n=Vr(t.path),r=IDBKeyRange.bound([n],[L(n)],!1,!0);let i=0;return So(e).Z({index:"documentTargetsIndex",X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}ne(e,t){return _o(e).get(t).next(e=>e?ki(e):null)}}function _o(e){return pi(e,"targets")}function Eo(e){return pi(e,"targetGlobal")}function So(e){return pi(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io([e,t],[n,r]){const i=j(e,n);return 0===i?j(t,r):i}class ko{constructor(e){this.xn=e,this.buffer=new It(Io),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Io(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class To{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ue(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.Fn(3e5)})}}class xo{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return re.resolve(me.at);const n=new ko(t);return this.$n.forEachTarget(e,e=>n.On(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.On(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(co)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),co):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let n,r,i,s,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),h()<=o.a.DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(u-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-u)+"ms\n"+`Total Duration: ${c-l}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new xo(e,t)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Un(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return Co(e,n)}removeReference(e,t,n){return Co(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Co(e,t)}Gn(e,t){return function(e,t){let n=!1;return vo(e).tt(r=>mo(e,r,t).next(e=>(e&&(n=!0),re.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,s)=>{if(s<=t){const t=this.Gn(e,o).next(t=>{if(!t)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,U.min()),So(e).delete([0,Vr(o.path)])))});r.push(t)}}).next(()=>re.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Co(e,t)}Kn(e,t){const n=So(e);let r,i=me.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:o,sequenceNumber:s})=>{0===e?(i!==me.at&&t(new $(Br(r)),i),i=s,r=o):i=me.at}).next(()=>{i!==me.at&&t(new $(Br(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Co(e,t){return So(e).put(function(e,t){return{targetId:0,path:Vr(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.changes=new zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?re.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return jo(e).put(n)}removeEntry(e,t,n){return jo(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],_i(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=Nt.newInvalidDocument(t);return jo(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Mo(t))},(e,r)=>{n=this.jn(t,r)}).next(()=>n)}Wn(e,t){let n={size:0,document:Nt.newInvalidDocument(t)};return jo(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Mo(t))},(e,r)=>{n={document:this.jn(t,r),size:fo(r)}}).next(()=>n)}getEntries(e,t){let n=Bn();return this.zn(e,t,(e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)}).next(()=>n)}Hn(e,t){let n=Bn(),r=new _t($.comparator);return this.zn(e,t,(e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,fo(t))}).next(()=>({documents:n,Jn:r}))}zn(e,t,n){if(t.isEmpty())return re.resolve();let r=new It(Fo);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(Mo(r.first()),Mo(r.last())),o=r.getIterator();let s=o.getNext();return jo(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=$.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;s&&Fo(s,i)<0;)n(s,null),s=o.getNext();s&&s.isEqual(i)&&(n(s,t),s=o.hasNext()?o.getNext():null),s?r.j(Mo(s)):r.done()}).next(()=>{for(;s;)n(s,null),s=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),_i(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return jo(e).W(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=Bn();for(const n of e){const e=this.jn($.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=Bn();const o=Lo(t,n),s=Lo(t,J.max());return jo(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,s,!0)},(e,t,n)=>{const o=this.jn($.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(o.key,o),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new Do(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return Po(e).get("remoteDocumentGlobalKey").next(e=>(b(!!e),e))}Qn(e,t){return Po(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=function(e,t){let n;if(t.document)n=xr(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$.fromSegments(t.noDocument.path),r=Si(t.noDocument.readTime);n=Nt.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return v();{const e=$.fromSegments(t.unknownDocument.path),r=Si(t.unknownDocument.version);n=Nt.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new F(e[0],e[1]);return U.fromTimestamp(t)}(t.readTime)),n}(this.yt,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return Nt.newInvalidDocument(e)}}function Ro(e){return new Ao(e)}class Do extends No{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new zn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new It((e,t)=>j(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,o)=>{const s=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,s.readTime)),o.isValidDocument()){const a=wi(this.Yn.yt,o);r=r.add(i.path.popLast());const u=fo(a);n+=u-s.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=s.size,this.trackRemovals){const n=wi(this.Yn.yt,o.convertToNoDocument(U.min()));t.push(this.Yn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),re.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function Po(e){return pi(e,"remoteDocumentGlobal")}function jo(e){return pi(e,"remoteDocumentsV14")}function Mo(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Lo(e,t){const n=t.documentKey.path.toArray();return[e,_i(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Fo(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=j(n[e],r[e]),i)return i;return i=j(n.length,r.length),i||(i=j(n[n.length-2],r[r.length-2]),i||j(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Uo{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Tn(n.mutation,e,xt.empty(),F.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Jn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Jn()){const r=Kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Wn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Kn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Jn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Bn();const o=Qn(),s=Qn();return t.forEach((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof Nn)?i=i.insert(t.key,t):void 0!==s?(o.set(t.key,s.mutation.getFieldMask()),Tn(s.mutation,t,s.mutation.getFieldMask(),F.now())):o.set(t.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>o.set(e,t)),t.forEach((e,t)=>{var n;return s.set(e,new Uo(t,null!==(n=o.get(e))&&void 0!==n?n:null))}),s))}recalculateAndSaveOverlays(e,t){const n=Qn();let r=new _t((e,t)=>e-t),i=Jn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const o=t.get(e);if(null===o)return;let s=n.get(e)||xt.empty();s=i.applyToLocalView(o,s),n.set(e,s);const a=(r.get(i.batchId)||Jn()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,u=r.value,c=Gn();u.forEach(e=>{if(!i.has(e)){const r=In(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),o.push(this.documentOverlayCache.saveOverlays(e,a,c))}return re.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return $.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):re.resolve(Kn());let s=-1,a=i;return o.next(t=>re.forEach(t,(t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?re.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Jn())).next(e=>({batchId:s,changes:Hn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(e=>{let t=Wn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Wn();return this.indexManager.getCollectionParents(e,r).next(o=>re.forEach(o,o=>{const s=function(e,t){return new Ut(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,s,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Nt.newInvalidDocument(n)))});let n=Wn();return r.forEach((r,i)=>{const o=e.get(r);void 0!==o&&Tn(o.mutation,i,xt.empty(),F.now()),Zt(t,i)&&(n=n.insert(r,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return re.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:yr(n.createTime)}),re.resolve()}getNamedQuery(e,t){return re.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:xi(e.bundledQuery),readTime:yr(e.readTime)}}(t)),re.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.overlays=new _t($.comparator),this.es=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Kn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),re.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),re.resolve()}getOverlaysForCollection(e,t,n){const r=Kn(),i=t.length+1,o=new $(t.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const e=s.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return re.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _t((e,t)=>e-t);const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Kn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Kn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>s.set(e,t)),!(s.size()>=r)););return re.resolve(s)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new yi(t,n));let i=this.es.get(t);void 0===i&&(i=Jn(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.ns=new It($o.ss),this.rs=new It($o.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new $o(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new $o(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){const t=new $(new z([])),n=new $o(t,e),r=new $o(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new $(new z([])),n=new $o(t,e),r=new $o(t,e+1);let i=Jn();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new $o(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class $o{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return $.comparator(e.key,t.key)||j(e._s,t._s)}static os(e,t){return j(e._s,t._s)||$.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new It($o.ss)}checkEmpty(e){return re.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mi(i,t,n,r);this.mutationQueue.push(o);for(const t of r)this.gs=this.gs.add(new $o(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return re.resolve(o)}lookupMutationBatch(e,t){return re.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return re.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new $o(t,0),r=new $o(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{const t=this.ys(e._s);i.push(t)}),re.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new It(j);return t.forEach(e=>{const t=new $o(e,0),r=new $o(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),re.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const o=new $o(new $(i),0);let s=new It(j);return this.gs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e._s)),!0)},o),re.resolve(this.Is(s))}Is(e){const t=[];return e.forEach(e=>{const n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return re.forEach(t.mutations,r=>{const i=new $o(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){const n=new $o(t,0),r=this.gs.firstAfterOrEqual(n);return re.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.Es=e,this.docs=new _t($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return re.resolve(n?n.document.mutableCopy():Nt.newInvalidDocument(t))}getEntries(e,t){let n=Bn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Nt.newInvalidDocument(e))}),re.resolve(n)}getAllFromCollection(e,t,n){let r=Bn();const i=new $(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:e,value:{document:i}}=o.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Z(X(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return re.resolve(r)}getAllFromCollectionGroup(e,t,n,r){v()}As(e,t){return re.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Ko(this)}getSize(e){return re.resolve(this.size)}}class Ko extends No{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),re.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.persistence=e,this.Rs=new zn(e=>Dt(e),Pt),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Bo,this.targetCount=0,this.vs=bo.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),re.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Dn(t),re.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach((o,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),re.waitFor(i).next(()=>r)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return re.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),re.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),re.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),re.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return re.resolve(n)}containsKey(e,t){return re.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new me(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Go(this),this.indexManager=new eo,this.remoteDocumentCache=function(e){return new Ho(e)}(e=>this.referenceDelegate.xs(e)),this.yt=new bi(t),this.Ns=new zo(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Wo(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new Yo(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return re.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class Yo extends te{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.Fs=new Bo,this.$s=null}static Bs(e){return new Xo(e)}get Ls(){if(this.$s)return this.$s;throw v()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),re.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),re.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Ls,n=>{const r=$.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return re.or([()=>re.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.yt=e}$(e,t,n,r){const i=new ie("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$r,{unique:!0}),e.createObjectStore("documentMutations")}(e),Zo(e),function(e){e.createObjectStore("remoteDocuments")}(e));let o=re.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Zo(e)),o=o.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(o=o.next(()=>function(e,t){return t.store("mutations").W().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$r,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return re.waitFor(i)})}(e,i))),o=o.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(o=o.next(()=>this.Us(i))),n<6&&r>=6&&(o=o.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),n<7&&r>=7&&(o=o.next(()=>this.Gs(i))),n<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),n<9&&r>=9&&(o=o.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(o=o.next(()=>this.js(i))),n<11&&r>=11&&(o=o.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(o=o.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:oi});t.createIndex("collectionPathOverlayIndex",si,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ai,{unique:!1})}(e)})),n<13&&r>=13&&(o=o.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Gr});t.createIndex("documentKeyIndex",Qr),t.createIndex("collectionGroupIndex",Yr)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),n<15&&r>=15&&(o=o.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:ti}).createIndex("sequenceNumberIndex",ni,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ri}).createIndex("documentKeyIndex",ii,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=fo(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Us(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>re.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>re.forEach(n,n=>{b(n.userId===t.userId);const r=Ii(this.yt,n);return ho(e,t.userId,r).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Z((n,i)=>{const o=new z(n),s=function(e){return[0,Vr(e)]}(o);r.push(t.get(s).next(n=>n?re.resolve():(n=>t.put({targetId:0,path:Vr(n),sequenceNumber:e.highestListenSequenceNumber}))(o)))}).next(()=>re.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:ei});const n=t.store("collectionParents"),r=new to,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Vr(r)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{const n=new z(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],r)=>{const o=Br(t);return i(o.popLast())}))}js(e){const t=e.store("targets");return t.Z((e,n)=>{const r=ki(n),i=Ti(this.yt,r);return t.put(i)})}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{const i=t.store("remoteDocumentsV14"),o=(s=n,s.document?new $(z.fromString(s.document.name).popFirst(5)):s.noDocument?$.fromSegments(s.noDocument.path):s.unknownDocument?$.fromSegments(s.unknownDocument.path):v()).path.toArray();var s;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:o.slice(0,o.length-2),collectionGroup:o[o.length-2],documentId:o[o.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>re.waitFor(r))}zs(e,t){const n=t.store("mutations"),r=Ro(this.yt),i=new Qo(Xo.Bs,this.yt.ie);return n.W().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Jn();Ii(this.yt,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),re.forEach(n,(e,n)=>{const o=new c(n),s=Pi.re(this.yt,o),a=i.getIndexManager(o),u=po.re(o,this.yt,a,i.referenceDelegate);return new Vo(r,u,s,a).recalculateAndSaveOverlaysForDocumentKeys(new fi(t,me.at),e).next()})})}}function Zo(e){e.createObjectStore("targetDocuments",{keyPath:Jr}).createIndex("documentTargetsIndex",Zr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Xr,{unique:!0}),e.createObjectStore("targetGlobal")}const es="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ts{constructor(e,t,n,r,i,o,s,a,u,c,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=o,this.document=s,this.Js=u,this.Ys=c,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!ts.C())throw new S(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Oo(this,r),this.ii=t+"main",this.yt=new bi(a),this.ri=new oe(this.ii,this.Xs,new Jo(this.yt)),this.Cs=new wo(this.referenceDelegate,this.yt),this.remoteDocumentCache=Ro(this.yt),this.Ns=new Ai,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===c&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,es);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new me(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>rs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(ue(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return ns(e).get("owner").next(e=>re.resolve(this.mi(e)))}gi(e){return rs(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=pi(e,"clientMetadata");return t.W().next(e=>{const n=this.Ii(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return re.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?re.resolve(!0):ns(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new S(E.FAILED_PRECONDITION,es);return!1}}return!(!this.networkEnabled||!this.inForeground)||rs(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new fi(e,me.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>rs(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return po.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ro(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Pi.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(o=this.Xs)?hi:14===o?di:13===o?li:12===o?ci:11===o?ui:void v();var o;let s;return this.ri.runTransaction(e,r,i,r=>(s=new fi(r,this.Ss?this.Ss.next():me.at),"readwrite-primary"===t?this.fi(s).next(e=>!!e||this.di(s)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new S(E.FAILED_PRECONDITION,ee);return n(s)}).next(e=>this.wi(s).next(()=>e)):this.Vi(s).next(()=>n(s)))).then(e=>(s.raiseOnCommittedEvent(),e))}Vi(e){return ns(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(E.FAILED_PRECONDITION,es)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ns(e).put("owner",t)}static C(){return oe.C()}_i(e){const t=ns(e);return t.get("owner").next(e=>this.mi(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):re.resolve())}pi(e,t){const n=Date.now();return!(e<n-t||e>n&&(m(`Detected an update time that is in the future: ${e} > ${n}`),1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),Object(s.B)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ns(e){return pi(e,"owner")}function rs(e){return pi(e,"clientMetadata")}function is(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class os{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Jn(),r=Jn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new os(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(qt(t))return re.resolve(null);let n=Kt(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Qt(t,null,"F"),n=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Jn(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const o=this.Fi(t,r);return this.$i(t,o,i,n.readTime)?this.ki(e,Qt(t,null,"F")):this.Bi(e,o,t,n)}))})))}Oi(e,t,n,r){return qt(t)||r.isEqual(U.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(h()<=o.a.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Jt(t)),this.Bi(e,s,t,Y(r,-1)))})}Fi(e,t){let n=new It(tn(e));return t.forEach((t,r)=>{Zt(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return h()<=o.a.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Jt(t)),this.Ni.getDocumentsMatchingQuery(e,t,J.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new _t(j),this.Ui=new zn(e=>Dt(e),Pt),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vo(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function us(e,t,n,r){return new as(e,t,n,r)}async function cs(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],o=[];let s=Jn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:o}))})})}function ls(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}function ds(e,t,n){let r=Jn(),i=Jn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Bn();return n.forEach((n,o)=>{const s=e.get(n);o.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),o.isNoDocument()&&o.version.isEqual(U.min())?(t.removeEntry(n,o.readTime),r=r.insert(n,o)):!s.isValidDocument()||o.version.compareTo(s.version)>0||0===o.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(o),r=r.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",o.version)}),{Wi:r,zi:i}})}function hs(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function fs(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,re.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new vi(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}async function ps(e,t,n){const r=_(e),i=r.qi.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ue(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function ms(e,t,n){const r=_(e);let i=U.min(),o=Jn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Ui.get(n);return void 0!==i?re.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,Kt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{o=e})}).next(()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:U.min(),n?o:Jn())).next(e=>(vs(r,en(t),e),{documents:e,Hi:o})))}function gs(e,t){const n=_(e),r=_(n.Cs),i=n.qi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.ne(e,t).next(e=>e?e.target:null))}function ys(e,t){const n=_(e),r=n.Ki.get(t)||U.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Gi.getAllFromCollectionGroup(e,t,Y(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(vs(n,t,e),e))}function vs(e,t,n){let r=e.Ki.get(t)||U.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}async function bs(e,t,n=Jn()){const r=await fs(e,Kt(xi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const o=yr(t.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(e,t);const s=r.withResumeToken(ke.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(s.targetId,s),i.Cs.updateTargetData(e,s).next(()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Cs.addMatchingKeys(e,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(e,t))})}function ws(e,t){return`firestore_clients_${e}_${t}`}function _s(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function Es(e,t){return`firestore_targets_${e}_${t}`}class Ss{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,o="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return o&&r.error&&(o="string"==typeof r.error.message&&"string"==typeof r.error.code,o&&(i=new S(r.error.code,r.error.message))),o?new Ss(e,t,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Is{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new S(n.error.code,n.error.message))),i?new Is(e,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ks{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=er();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=Se(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new ks(e,i):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ts{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Ts(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class xs{constructor(){this.activeTargetIds=er()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Os{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new _t(j),this.started=!1,this.cr=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=ws(this.persistenceKey,this.sr),this.hr=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new xs),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.mr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const t of e){if(t===this.sr)continue;const e=this.getItem(ws(this.persistenceKey,t));if(e){const n=ks.Zi(t,e);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const e of this.cr)this.rr(e);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Es(this.persistenceKey,e));if(n){const r=Is.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Es(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=me.at;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==me.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Mr(e)))}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new Ss(this.currentUser,e,t,n),i=_s(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=_s(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=Es(this.persistenceKey,e),i=new Is(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return ks.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ss.Zi(new c(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return Is.Zi(r,t)}yr(e){return Ts.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),o=[],s=[];return i.forEach(e=>{r.has(e)||o.push(e)}),r.forEach(e=>{i.has(e)||s.push(e)}),this.syncEngine.Br(o,s).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=er();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Cs{constructor(){this.Lr=new xs,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new xs,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const o=this.ho(e,t);p("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(e,o,s,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",o,"request:",n),t})}_o(e,t,n,r,i,o){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){const n=Rs[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,o)=>{const s=new a.g;s.setWithCredentials(!0),s.listenOnce(a.c.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a.a.NO_ERROR:const t=s.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a.a.TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),o(new S(E.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=s.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",s.getResponseText()),n>0){let e=s.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);o(new S(e,t.message))}else o(new S(E.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new S(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(r);s.send(t,"POST",u,n,15)})}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a.h)(),o=Object(a.i)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a.d({})),this.lo(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const u=r.join("");p("Connection","Creating WebChannel: "+u,s);const c=i.createWebChannel(u,s);let l=!1,d=!1;const h=new Ds({Hr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(l||(p("Connection","Opening WebChannel transport."),c.open(),l=!0),p("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return f(c,a.f.EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),f(c,a.f.EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),h.io())}),f(c,a.f.EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),h.io(new S(E.UNAVAILABLE,"The operation could not be completed")))}),f(c,a.f.EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ln[e];if(void 0!==t)return Vn(t)}(e),n=i.message;void 0===t&&(t=E.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,h.io(new S(t,n)),c.close()}else p("Connection","WebChannel received:",n),h.ro(n)}}),f(o,a.b.STAT_EVENT,e=>{e.stat===a.e.PROXY?p("Connection","Detected buffering proxy"):e.stat===a.e.NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(){return"undefined"!=typeof window?window:null}function Ms(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){return new fr(e,!0)}class Fs{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,n,r,i,o,s,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Fs(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{const e=new S(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vs extends Us{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(b(void 0===t||"string"==typeof t),ke.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),ke.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(e){const t=void 0===e.code?E.UNKNOWN:Vn(e.code);return new S(t,e.message||"")}(s);n=new or(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=_r(e,r.document.name),o=yr(r.document.updateTime),s=r.document.createTime?yr(r.document.createTime):U.min(),a=new Ot({mapValue:{fields:r.document.fields}}),u=Nt.newFoundDocument(i,o,s,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new rr(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=_r(e,r.document),o=r.readTime?yr(r.readTime):U.min(),s=Nt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new rr([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=_r(e,r.document),o=r.removedTargetIds||[];n=new rr([],o,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Mn(r),o=e.targetId;n=new ir(o,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?yr(t.readTime):U.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Ir(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=jt(r)?{documents:Nr(e,r)}:{query:Ar(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=mr(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=pr(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Ir(this.yt),t.removeTarget=e,this.Bo(t)}}class zs extends Us{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=function(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?yr(e.updateTime):yr(t);return n.isEqual(U.min())&&(n=yr(t)),new wn(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=yr(e.commitTime);return this.listener.Zo(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ir(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Or(this.yt,e))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(E.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,n,i,o,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class Bs{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(m(t),this.ou=!1):p("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{Zs(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t._u.add(4),await Hs(t),t.gu.set("Unknown"),t._u.delete(4),await Ws(t)}(this))})}),this.gu=new Bs(n,r)}}async function Ws(e){if(Zs(e))for(const t of e.wu)await t(!0)}async function Hs(e){for(const t of e.wu)await t(!1)}function Ks(e,t){const n=_(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Js(n)?Xs(n):ya(n).ko()&&Qs(n,t))}function Gs(e,t){const n=_(e),r=ya(n);n.du.delete(t),r.ko()&&Ys(n,t),0===n.du.size&&(r.ko()?r.Fo():Zs(n)&&n.gu.set("Unknown"))}function Qs(e,t){e.yu.Ot(t.targetId),ya(e).zo(t)}function Ys(e,t){e.yu.Ot(t),ya(e).Ho(t)}function Xs(e){e.yu=new ar({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ya(e).start(),e.gu.uu()}function Js(e){return Zs(e)&&!ya(e).No()&&e.du.size>0}function Zs(e){return 0===_(e)._u.size}function ea(e){e.yu=void 0}async function ta(e){e.du.forEach((t,n)=>{Qs(e,t)})}async function na(e,t){ea(e),Js(e)?(e.gu.hu(t),Xs(e)):e.gu.set("Unknown")}async function ra(e,t,n){if(e.gu.set("Online"),t instanceof or&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ia(e,n)}else if(t instanceof rr?e.yu.Kt(t):t instanceof ir?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(U.min()))try{const t=await ls(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ke.EMPTY_BYTE_STRING,n.snapshotVersion)),Ys(e,t);const r=new vi(n.target,t,1,n.sequenceNumber);Qs(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await ia(e,t)}}async function ia(e,t,n){if(!ue(t))throw t;e._u.add(1),await Hs(e),e.gu.set("Offline"),n||(n=()=>ls(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Ws(e)})}function oa(e,t){return t().catch(n=>ia(e,n,t))}async function sa(e){const t=_(e),n=va(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;aa(t);)try{const e=await hs(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,ua(t,e)}catch(e){await ia(t,e)}ca(t)&&la(t)}function aa(e){return Zs(e)&&e.fu.length<10}function ua(e,t){e.fu.push(t);const n=va(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function ca(e){return Zs(e)&&!va(e).No()&&e.fu.length>0}function la(e){va(e).start()}async function da(e){va(e).eu()}async function ha(e){const t=va(e);for(const n of e.fu)t.Xo(n.mutations)}async function fa(e,t,n){const r=e.fu.shift(),i=gi.from(r,t,n);await oa(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sa(e)}async function pa(e,t){t&&va(e).Yo&&await async function(e,t){if(Un(n=t.code)&&n!==E.ABORTED){const n=e.fu.shift();va(e).Mo(),await oa(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await sa(e)}var n}(e,t),ca(e)&&la(e)}async function ma(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Zs(n);n._u.add(3),await Hs(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Ws(n)}async function ga(e,t){const n=_(e);t?(n._u.delete(2),await Ws(n)):t||(n._u.add(2),await Hs(n),n.gu.set("Unknown"))}function ya(e){return e.pu||(e.pu=function(e,t,n){const r=_(e);return r.su(),new Vs(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:ta.bind(null,e),Zr:na.bind(null,e),Wo:ra.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Js(e)?Xs(e):e.gu.set("Unknown")):(await e.pu.stop(),ea(e))})),e.pu}function va(e){return e.Iu||(e.Iu=function(e,t,n){const r=_(e);return r.su(),new zs(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:da.bind(null,e),Zr:pa.bind(null,e),tu:ha.bind(null,e),Zo:fa.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await sa(e)):(await e.Iu.stop(),e.fu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ba{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new ba(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(e,t){if(m("AsyncQueue",`${t}: ${e}`),ue(e))return new S(E.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(e,t)=>$.comparator(e.key,t.key),this.keyedMap=Wn(),this.sortedSet=new _t(this.comparator)}static emptySet(e){return new _a(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _a))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new _a;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.Tu=new _t($.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):v():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Sa{constructor(e,t,n,r,i,o,s,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach(e=>{o.push({type:0,doc:e})}),new Sa(e,t,_a.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.Au=void 0,this.listeners=[]}}class ka{constructor(){this.queries=new zn(e=>Xt(e),Yt),this.onlineState="Unknown",this.Ru=new Set}}async function Ta(e,t){const n=_(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Ia),i)try{o.Au=await n.onListen(r)}catch(e){const n=wa(e,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&Na(n)}async function xa(e,t){const n=_(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Oa(e,t){const n=_(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Pu(e)&&(r=!0);i.Au=e}}r&&Na(n)}function Ca(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Na(e){e.Ru.forEach(e=>{e.next()})}class Aa{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Sa(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=Sa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.yt=e}Ji(e){return _r(this.yt,e)}Yi(e){return e.metadata.exists?xr(this.yt,e.document,!1):Nt.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return yr(e)}}class Pa{constructor(e,t,n){this.Mu=e,this.localStore=t,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ja(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const n=z.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new Da(this.yt);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Jn()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=_(e);let o=Jn(),s=Bn();for(const e of n){const n=t.Ji(e.metadata.name);e.document&&(o=o.add(n));const r=t.Yi(e);r.setReadTime(t.Xi(e.metadata.readTime)),s=s.insert(n,r)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await fs(i,function(e){return Kt(zt(z.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>ds(e,a,s).next(t=>(a.apply(e),t)).next(t=>i.Cs.removeMatchingKeysForTargetId(e,u.targetId).next(()=>i.Cs.addMatchingKeys(e,o,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi)).next(()=>t.Wi)))}(this.localStore,new Da(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const e of this.queries)await bs(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function ja(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.key=e}}class La{constructor(e){this.key=e}}class Fa{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Jn(),this.mutatedKeys=Jn(),this.Gu=tn(e),this.Qu=new _a(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new Ea,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),l=Zt(this.query,t)?t:null,d=!!c&&this.mutatedKeys.has(c.key),h=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?d!==h&&(n.track({type:3,doc:l}),f=!0):this.Hu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||u&&this.Gu(l,u)<0)&&(s=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(s=!0)),f&&(l?(o=o.add(l),i=h?i.add(e):i.delete(e)):(o=o.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:o,zu:n,$i:s,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);const o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,a=s!==this.Uu;return this.Uu=s,0!==i.length||a?{snapshot:new Sa(this.query,e.Qu,r,i,e.mutatedKeys,0===s,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ea,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Jn(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});const t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new La(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new Ma(n))}),t}tc(e){this.qu=e.Hi,this.Ku=Jn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Sa.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Ua{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Va{constructor(e){this.key=e,this.nc=!1}}class za{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new zn(e=>Xt(e),Yt),this.rc=new Map,this.oc=new Set,this.uc=new _t($.comparator),this.cc=new Map,this.ac=new Bo,this.hc={},this.lc=new Map,this.fc=bo.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function qa(e,t){const n=pu(e);let r,i;const o=n.ic.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const e=await fs(n.localStore,Kt(t));n.isPrimaryClient&&Ks(n.remoteStore,e);const o=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ba(n,t,r,"current"===o,e.resumeToken)}return i}async function Ba(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await ms(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));const o=r&&r.targetChanges.get(t.targetId),s=t.view.applyChanges(i,e.isPrimaryClient,o);return eu(e,t.targetId,s.Xu),s.snapshot}(e,t,n,r);const o=await ms(e.localStore,t,!0),s=new Fa(t,o.Hi),a=s.Wu(o.documents),u=nr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=s.applyChanges(a,e.isPrimaryClient,u);eu(e,n,c.Xu);const l=new Ua(t,n,s);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function $a(e,t){const n=_(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(e=>!Yt(e,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ps(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Gs(n.remoteStore,r.targetId),Ja(n,r.targetId)}).catch(ne)):(Ja(n,r.targetId),await ps(n.localStore,r.targetId,!0))}async function Wa(e,t){const n=_(e);try{const e=await function(e,t){const n=_(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const s=[];t.targetChanges.forEach((o,a)=>{const u=i.get(a);if(!u)return;s.push(n.Cs.removeMatchingKeys(e,o.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(e,o.addedDocuments,a)));let c=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(ke.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):o.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(o.resumeToken,r)),i=i.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,o)&&s.push(n.Cs.updateTargetData(e,c))});let a=Bn(),u=Jn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(ds(e,o,t.documentUpdates).next(e=>{a=e.Wi,u=e.zi})),!r.isEqual(U.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return re.waitFor(s).next(()=>o.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,u)).next(()=>a)}).then(e=>(n.qi=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.cc.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?b(r.nc):e.removedDocuments.size>0&&(b(r.nc),r.nc=!1))}),await ru(n,e,t)}catch(e){await ne(e)}}function Ha(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)}),r&&Na(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ka(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),o=i&&i.key;if(o){let e=new _t($.comparator);e=e.insert(o,Nt.newNoDocument(o,U.min()));const n=Jn().add(o),i=new tr(U.min(),new Map,new It(j),e,n);await Wa(r,i),r.uc=r.uc.remove(o),r.cc.delete(t),nu(r)}else await ps(r.localStore,t,!1).then(()=>Ja(r,t,n)).catch(ne)}async function Ga(e,t){const n=_(e),r=t.batch.batchId;try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,o=i.keys();let s=re.resolve();return o.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const o=n.docVersions.get(e);b(null!==o),t.version.compareTo(o)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),s.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Jn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Xa(n,r,null),Ya(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ru(n,e)}catch(e){await ne(e)}}async function Qa(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Xa(r,t,n),Ya(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ru(r,e)}catch(n){await ne(n)}}function Ya(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function Xa(e,t,n){const r=_(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Ja(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||Za(e,t)})}function Za(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Gs(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),nu(e))}function eu(e,t,n){for(const r of n)r instanceof Ma?(e.ac.addReference(r.key,t),tu(e,r)):r instanceof La?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Za(e,r.key)):v()}function tu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.oc.add(r),nu(e))}function nu(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new $(z.fromString(t)),r=e.fc.next();e.cc.set(r,new Va(n)),e.uc=e.uc.insert(n,r),Ks(e.remoteStore,new vi(Kt(zt(n.path)),r,2,me.at))}}async function ru(e,t,n){const r=_(e),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((e,a)=>{s.push(r._c(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=os.Ci(a.targetId,e);o.push(t)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>re.forEach(t,t=>re.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>re.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ue(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(r.localStore,o))}async function iu(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await cs(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach(e=>{e.forEach(e=>{e.reject(new S(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.lc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ru(n,e.ji)}}function ou(e,t){const n=_(e),r=n.cc.get(t);if(r&&r.nc)return Jn().add(r.key);{let e=Jn();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function su(e,t){const n=_(e),r=await ms(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&eu(n,t.targetId,i.Xu),i}async function au(e,t){const n=_(e);return ys(n.localStore,t).then(e=>ru(n,e))}async function uu(e,t,n,r){const i=_(e),o=await function(e,t){const n=_(e),r=_(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Tn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):re.resolve(null)))}(i.localStore,t);null!==o?("pending"===n?await sa(i.remoteStore):"acknowledged"===n||"rejected"===n?(Xa(i,t,r||null),Ya(i,t),function(e,t){_(_(e).mutationQueue).An(t)}(i.localStore,t)):v(),await ru(i,o)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function cu(e,t,n){const r=_(e),i=[],o=[];for(const e of t){let t;const n=r.rc.get(e);if(n&&0!==n.length){t=await fs(r.localStore,Kt(n[0]));for(const e of n){const t=r.ic.get(e),n=await su(r,t);n.snapshot&&o.push(n.snapshot)}}else{const n=await gs(r.localStore,e);t=await fs(r.localStore,n),await Ba(r,lu(n),e,!1,t.resumeToken)}i.push(t)}return r.sc.Wo(o),i}function lu(e){return Vt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function du(e){const t=_(e);return _(_(t.localStore).persistence).vi()}async function hu(e,t,n,r){const i=_(e);if(i.dc)return void p("SyncEngine","Ignoring unexpected query state notification.");const o=i.rc.get(t);if(o&&o.length>0)switch(n){case"current":case"not-current":{const e=await ys(i.localStore,en(o[0])),r=tr.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ke.EMPTY_BYTE_STRING);await ru(i,e,r);break}case"rejected":await ps(i.localStore,t,!0),Ja(i,t,r);break;default:v()}}async function fu(e,t,n){const r=pu(e);if(r.dc){for(const e of t){if(r.rc.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await gs(r.localStore,e),n=await fs(r.localStore,t);await Ba(r,lu(t),n.targetId,!1,n.resumeToken),Ks(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await ps(r.localStore,e,!1).then(()=>{Gs(r.remoteStore,e),Ja(r,e)}).catch(ne)}}function pu(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ou.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ka.bind(null,t),t.sc.Wo=Oa.bind(null,t.eventManager),t.sc.wc=Ca.bind(null,t.eventManager),t}function mu(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ga.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qa.bind(null,t),t}class gu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ls(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return us(this.persistence,new ss,e.initialUser,this.yt)}yc(e){return new Qo(Xo.Bs,this.yt)}gc(e){return new Cs}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yu extends gu{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await mu(this.Ac.syncEngine),await sa(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return us(this.persistence,new ss,e.initialUser,this.yt)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new To(n,e.asyncQueue,t)}Ec(e,t){const n=new pe(t,this.persistence);return new fe(e.asyncQueue,n)}yc(e){const t=is(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?lo.withCacheSize(this.cacheSizeBytes):lo.DEFAULT;return new ts(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,js(),Ms(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Cs}}class vu extends yu{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Os&&(this.sharedClientState.syncEngine={Fr:uu.bind(null,t),$r:hu.bind(null,t),Br:fu.bind(null,t),vi:du.bind(null,t),Mr:au.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await async function(e,t){const n=_(e);if(pu(n),mu(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await cu(n,e.toArray());n.dc=!0,await ga(n.remoteStore,!0);for(const e of t)Ks(n.remoteStore,e)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Ja(n,i),ps(n.localStore,i,!0))),Gs(n.remoteStore,i)}),await t,await cu(n,e),function(e){const t=_(e);t.cc.forEach((e,n)=>{Gs(t.remoteStore,n)}),t.ac.fs(),t.cc=new Map,t.uc=new _t($.comparator)}(n),n.dc=!1,await ga(n.remoteStore,!1)}}(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}gc(e){const t=js();if(!Os.C(t))throw new S(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=is(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Os(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class bu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ha(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iu.bind(null,this.syncEngine),await ga(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ka}createDatastore(e){const t=Ls(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ps(r));var r;return function(e,t,n,r){return new qs(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ha(this.syncEngine,e,0),o=As.C()?new As:new Ns,new $s(t,n,r,i,o);var t,n,r,i,o}createSyncEngine(e,t){return function(e,t,n,r,i,o,s){const a=new za(e,t,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Hs(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(e,t,n){if(!n)throw new S(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _u(e,t,n,r){if(!0===t&&!0===r)throw new S(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Eu(e){if(!$.isDocumentKey(e))throw new S(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Su(e){if($.isDocumentKey(e))throw new S(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Iu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function ku(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(e);throw new S(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Tu(e,t){if(t<=0)throw new S(E.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map;class Ou{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_u("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ou({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ou(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new T;switch(e.type){case"gapi":const t=e.client;return new N(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=xu.get(e);t&&(p("ComponentProvider","Removing Datastore"),xu.delete(e),t.terminate())}(this),Promise.resolve()}}function Nu(e,t,n,r={}){var i;const o=(e=ku(e,Cu))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=Object(s.i)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(o)}e._authCredentials=new x(new k(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Du(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Au(this.firestore,e,this._key)}}class Ru{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ru(this.firestore,e,this._query)}}class Du extends Ru{constructor(e,t,n){super(e,t,zt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Au(this.firestore,null,new $(e))}withConverter(e){return new Du(this.firestore,e,this._path)}}function Pu(e,t,...n){if(e=Object(s.r)(e),wu("collection","path",t),e instanceof Cu){const r=z.fromString(t,...n);return Su(r),new Du(e,null,r)}{if(!(e instanceof Au||e instanceof Du))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Su(r),new Du(e.firestore,null,r)}}function ju(e,t){if(e=ku(e,Cu),wu("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ru(e,null,function(e){return new Ut(z.emptyPath(),e)}(t))}function Mu(e,t,...n){if(e=Object(s.r)(e),1===arguments.length&&(t=P.R()),wu("doc","path",t),e instanceof Cu){const r=z.fromString(t,...n);return Eu(r),new Au(e,null,new $(r))}{if(!(e instanceof Au||e instanceof Du))throw new S(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Eu(r),new Au(e.firestore,e instanceof Du?e.converter:null,new $(r))}}function Lu(e,t){return e=Object(s.r)(e),t=Object(s.r)(t),(e instanceof Au||e instanceof Du)&&(t instanceof Au||t instanceof Du)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Fu(e,t){return e=Object(s.r)(e),t=Object(s.r)(t),e instanceof Ru&&t instanceof Ru&&e.firestore===t.firestore&&Yt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Uu(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):m("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new I,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.ku)))},e=>this.metadata.reject(e))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new Ra(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error("Invalid bundle format: "+e)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Ir(n.yt)+"/documents",i={documents:t.map(e=>wr(n.yt,e))},o=await n._o("BatchGetDocuments",r,i,t.length),s=new Map;o.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=_r(e,t.found.name),r=yr(t.found.updateTime),i=t.found.createTime?yr(t.found.createTime):U.min(),o=new Ot({mapValue:{fields:t.found.fields}});return Nt.newFoundDocument(n,r,i,o)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=_r(e,t.missing),r=yr(t.readTime);return Nt.newNoDocument(n,r)}(e,t):v()}(n.yt,e);s.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=s.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=$.fromPath(t);this.mutations.push(new jn(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Ir(n.yt)+"/documents",i={writes:t.map(e=>Or(n.yt,e))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?_n.exists(!1):_n.updateTime(t):_n.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new S(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _n.updateTime(t)}return _n.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new Fs(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new qu(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Fc(e)}))}).catch(e=>{this.Fc(e)})})}Mc(e){try{const t=this.updateFunction(e);return!_e(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Un(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=P.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Wu(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await cs(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Hu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ku(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ma(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ma(t.remoteStore,n)),e.onlineComponents=t}async function Ku(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Wu(e,new gu)),e.offlineComponents}async function Gu(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Hu(e,new bu)),e.onlineComponents}function Qu(e){return Ku(e).then(e=>e.persistence)}function Yu(e){return Ku(e).then(e=>e.localStore)}function Xu(e){return Gu(e).then(e=>e.remoteStore)}function Ju(e){return Gu(e).then(e=>e.syncEngine)}function Zu(e){return Gu(e).then(e=>e.datastore)}async function ec(e){const t=await Gu(e),n=t.eventManager;return n.onListen=qa.bind(null,t.syncEngine),n.onUnlisten=$a.bind(null,t.syncEngine),n}function tc(e,t,n={}){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Vu({next:o=>{t.enqueueAndForget(()=>xa(e,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new S(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new S(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new Aa(zt(n.path),o,{includeMetadataChanges:!0,Nu:!0});return Ta(e,s)}(await ec(e),e.asyncQueue,t,n,r)),r.promise}function nc(e,t,n={}){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const o=new Vu({next:n=>{t.enqueueAndForget(()=>xa(e,s)),n.fromCache&&"server"===r.source?i.reject(new S(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new Aa(n,o,{includeMetadataChanges:!0,Nu:!0});return Ta(e,s)}(await ec(e),e.asyncQueue,t,n,r)),r.promise}function rc(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new zu(e,t)}(function(e,t){if(e instanceof Uint8Array)return Uu(e,t);if(e instanceof ArrayBuffer)return Uu(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Ls(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=yr(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ns.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(ja(r));const i=new Pa(r,e.localStore,t.yt);let o=await t.mc();for(;o;){const e=await i.Fu(o);e&&n._updateProgress(e),o=await t.mc()}const s=await i.complete();return await ru(e,s.Lu,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ns.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(s.progress),Promise.resolve(s.Bu)}catch(e){return g("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await Ju(e),i,r)})}class ic{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Fs(this,"async_queue_retry"),this.Wc=()=>{const e=Ms();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Ms();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Ms();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new I;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ue(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{this.Kc=e,this.Gc=!1;throw m("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=ba.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&v()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function oc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}class sc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=-1;class uc extends Cu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ic,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lc(this),this._firestoreClient.terminate()}}function cc(e){return e._firestoreClient||lc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ge(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new $u(e._authCredentials,e._appCheckCredentials,e._queue,r)}function dc(e,t){wc(e=ku(e,uc));const n=cc(e),r=e._freezeSettings(),i=new bu;return fc(n,i,new yu(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function hc(e){wc(e=ku(e,uc));const t=cc(e),n=e._freezeSettings(),r=new bu;return fc(t,r,new vu(r,n.cacheSizeBytes))}function fc(e,t,n){const r=new I;return e.asyncQueue.enqueue(async()=>{try{await Wu(e,n),await Hu(e,t),r.resolve()}catch(e){const t=e;if(!function(e){return"FirebaseError"===e.name?e.code===E.FAILED_PRECONDITION||e.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(t))throw t;g("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function pc(e){if(e._initialized&&!e._terminated)throw new S(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new I;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!oe.C())return Promise.resolve();const t=e+"main";await oe.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(is(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function mc(e){return function(e){const t=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t){const n=_(e);Zs(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=wa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Ju(e),t)),t.promise}(cc(e=ku(e,uc)))}function gc(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Qu(e),n=await Xu(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t._u.delete(0),Ws(t)}(n)})}(cc(e=ku(e,uc)))}function yc(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Qu(e),n=await Xu(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t._u.add(0),await Hs(t),t.gu.set("Offline")}(n)})}(cc(e=ku(e,uc)))}function vc(e,t){const n=cc(e=ku(e,uc)),r=new sc;return rc(n,e._databaseId,t,r),r}function bc(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ns.getNamedQuery(e,t))}(await Yu(e),t))}(cc(e=ku(e,uc)),t).then(t=>t?new Ru(e,null,t.query):null)}function wc(e){if(e._initialized||e._terminated)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _c(ke.fromBase64String(e))}catch(e){throw new S(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new _c(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=/^__.*__$/;class Tc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cn(e,this.data,t,this.fieldTransforms)}}class xc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Oc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Cc{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Qc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Oc(this.sa)&&kc.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Nc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Ls(e)}da(e,t,n,r=!1){return new Cc({sa:e,methodName:t,fa:n,path:B.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ac(e){const t=e._freezeSettings(),n=Ls(e._databaseId);return new Nc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rc(e,t,n,r,i,o={}){const s=e.da(o.merge||o.mergeFields?2:0,t,n,i);Wc("Data must be an object, but it was:",s,r);const a=Bc(r,s);let u,c;if(o.merge)u=new xt(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Hc(t,r,n);if(!s.contains(i))throw new S(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yc(e,i)||e.push(i)}u=new xt(e),c=s.fieldTransforms.filter(e=>u.covers(e.field))}else u=null,c=s.fieldTransforms;return new Tc(new Ot(a),u,c)}class Dc extends Sc{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(this._methodName+"() can only appear at the top level of your update data"):e.ha(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}function Pc(e,t,n){return new Cc({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class jc extends Sc{_toFieldTransform(e){return new bn(e.path,new dn)}isEqual(e){return e instanceof jc}}class Mc extends Sc{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Pc(this,e,!0),n=this._a.map(e=>qc(e,t)),r=new hn(n);return new bn(e.path,r)}isEqual(e){return this===e}}class Lc extends Sc{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Pc(this,e,!0),n=this._a.map(e=>qc(e,t)),r=new pn(n);return new bn(e.path,r)}isEqual(e){return this===e}}class Fc extends Sc{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new gn(e.yt,sn(e.yt,this.wa));return new bn(e.path,t)}isEqual(e){return this===e}}function Uc(e,t,n,r){const i=e.da(1,t,n);Wc("Data must be an object, but it was:",i,r);const o=[],a=Ot.empty();be(r,(e,r)=>{const u=Gc(t,e,n);r=Object(s.r)(r);const c=i.ca(u);if(r instanceof Dc)o.push(u);else{const e=qc(r,c);null!=e&&(o.push(u),a.set(u,e))}});const u=new xt(o);return new xc(a,u,i.fieldTransforms)}function Vc(e,t,n,r,i,o){const a=e.da(1,t,n),u=[Hc(t,r,n)],c=[i];if(o.length%2!=0)throw new S(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<o.length;e+=2)u.push(Hc(t,o[e])),c.push(o[e+1]);const l=[],d=Ot.empty();for(let e=u.length-1;e>=0;--e)if(!Yc(l,u[e])){const t=u[e];let n=c[e];n=Object(s.r)(n);const r=a.ca(t);if(n instanceof Dc)l.push(t);else{const e=qc(n,r);null!=e&&(l.push(t),d.set(t,e))}}const h=new xt(l);return new xc(d,h,a.fieldTransforms)}function zc(e,t,n,r=!1){return qc(n,e.da(r?4:3,t))}function qc(e,t){if($c(e=Object(s.r)(e)))return Wc("Unsupported field value:",t,e),Bc(e,t);if(e instanceof Sc)return function(e,t){if(!Oc(t.sa))throw t.ha(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ha(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=qc(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s.r)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return sn(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=F.fromDate(e);return{timestampValue:pr(t.yt,n)}}if(e instanceof F){const n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:pr(t.yt,n)}}if(e instanceof Ic)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _c)return{bytesValue:mr(t.yt,e._byteString)};if(e instanceof Au){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: "+Iu(e))}(e,t)}function Bc(e,t){const n={};return we(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):be(e,(e,r)=>{const i=qc(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function $c(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof Ic||e instanceof _c||e instanceof Au||e instanceof Sc)}function Wc(e,t,n){if(!$c(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Iu(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Hc(e,t,n){if((t=Object(s.r)(t))instanceof Ec)return t._internalPath;if("string"==typeof t)return Gc(e,t);throw Qc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kc=new RegExp("[~\\*/\\[\\]]");function Gc(e,t,n){if(t.search(Kc)>=0)throw Qc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ec(...t.split("."))._internalPath}catch(r){throw Qc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qc(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=" in field "+r),s&&(u+=" in document "+i),u+=")"),new S(E.INVALID_ARGUMENT,a+e+u)}function Yc(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Au(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Jc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Jc extends Xc{data(){return super.data()}}function Zc(e,t){return"string"==typeof t?Gc(e,t):t instanceof Ec?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tl{}class nl extends tl{}function rl(e,t,...n){let r=[];t instanceof tl&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof sl).length,n=e.filter(e=>e instanceof il).length;if(t>1||t>0&&n>0)throw new S(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const t of r)e=t._apply(e);return e}class il extends nl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new il(e,t,n)}_apply(e){const t=this._parse(e);return _l(e._query,t),new Ru(e.firestore,e.converter,Gt(e._query,t))}_parse(e){const t=Ac(e.firestore);return function(e,t,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new S(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){wl(s,o);const t=[];for(const n of s)t.push(bl(r,e,n));a={arrayValue:{values:t}}}else a=bl(r,e,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||wl(s,o),a=zc(n,"where",s,"in"===o||"not-in"===o);return nt.create(i,o,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}function ol(e,t,n){const r=t,i=Zc("where",e);return il._create(i,r,n)}class sl extends tl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sl(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)_l(n,e),n=Gt(n,e)}(e._query,t),new Ru(e.firestore,e.converter,Gt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class al extends nl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new al(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new bt(t,n);return function(e,t){if(null===Bt(e)){const n=$t(e);null!==n&&El(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Ru(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ut(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ul(e,t="asc"){const n=t,r=Zc("orderBy",e);return al._create(r,n)}class cl extends nl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new cl(e,t,n)}_apply(e){return new Ru(e.firestore,e.converter,Qt(e._query,this._limit,this._limitType))}}function ll(e){return Tu("limit",e),cl._create("limit",e,"F")}function dl(e){return Tu("limitToLast",e),cl._create("limitToLast",e,"L")}class hl extends nl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new hl(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new Ru(e.firestore,e.converter,function(e,t){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function fl(...e){return hl._create("startAt",e,!0)}function pl(...e){return hl._create("startAfter",e,!1)}class ml extends nl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ml(e,t,n)}_apply(e){const t=vl(e,this.type,this._docOrFields,this._inclusive);return new Ru(e.firestore,e.converter,function(e,t){return new Ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function gl(...e){return ml._create("endBefore",e,!1)}function yl(...e){return ml._create("endAt",e,!0)}function vl(e,t,n,r){if(n[0]=Object(s.r)(n[0]),n[0]instanceof Xc)return function(e,t,n,r,i){if(!r)throw new S(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const o=[];for(const n of Ht(e))if(n.field.isKeyField())o.push(Ve(t,r.key));else{const e=r.data.field(n.field);if(Ne(e))throw new S(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new S(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}o.push(e)}return new Je(o,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Ac(e.firestore);return function(e,t,n,r,i,o){const s=e.explicitOrderBy;if(i.length>s.length)throw new S(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let o=0;o<i.length;o++){const u=i[o];if(s[o].field.isKeyField()){if("string"!=typeof u)throw new S(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!Wt(e)&&-1!==u.indexOf("/"))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);const n=e.path.child(z.fromString(u));if(!$.isDocumentKey(n))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $(n);a.push(Ve(t,i))}else{const e=zc(n,r,u);a.push(e)}}return new Je(a,o)}(e._query,e.firestore._databaseId,i,t,n,r)}}function bl(e,t,n){if("string"==typeof(n=Object(s.r)(n))){if(""===n)throw new S(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wt(t)&&-1!==n.indexOf("/"))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(z.fromString(n));if(!$.isDocumentKey(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ve(e,new $(r))}if(n instanceof Au)return Ve(e,n._key);throw new S(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Iu(n)}.`)}function wl(e,t){if(!Array.isArray(e)||0===e.length)throw new S(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new S(E.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _l(e,t){if(t.isInequality()){const n=$t(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new S(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Bt(e);null!==i&&El(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function El(e,t,n){if(!n.isEqual(t))throw new S(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Sl{convertValue(e,t="none"){switch(Pe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ce(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return be(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Ic(Oe(e.latitude),Oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=function e(t){const n=t.mapValue.fields.__previous_value__;return Ne(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ae(e));default:return null}}convertTimestamp(e){const t=xe(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=z.fromString(e);b(Ur(n));const r=new ye(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class kl extends Sl{constructor(e){super(),this.firestore=e}convertBytes(e){return new _c(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Au(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xl extends Xc{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ol extends xl{data(e={}){return super.data(e)}}class Cl{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Tl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ol(this._firestore,this._userDataWriter,n.key,n,new Tl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Ol(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Tl(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Ol(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Tl(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,o=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:Nl(t.type),doc:r,oldIndex:i,newIndex:o}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Nl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function Al(e,t){return e instanceof xl&&t instanceof xl?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Cl&&t instanceof Cl&&e._firestore===t._firestore&&Fu(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e){e=ku(e,Au);const t=ku(e.firestore,uc);return tc(cc(t),e._key).then(n=>Hl(t,e,n))}class Dl extends Sl{constructor(e){super(),this.firestore=e}convertBytes(e){return new _c(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Au(this.firestore,null,t)}}function Pl(e){e=ku(e,Au);const t=ku(e.firestore,uc),n=cc(t),r=new Dl(t);return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=wa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Yu(e),t,n)),n.promise}(n,e._key).then(n=>new xl(t,r,e._key,n,new Tl(null!==n&&n.hasLocalMutations,!0),e.converter))}function jl(e){e=ku(e,Au);const t=ku(e.firestore,uc);return tc(cc(t),e._key,{source:"server"}).then(n=>Hl(t,e,n))}function Ml(e){e=ku(e,Ru);const t=ku(e.firestore,uc),n=cc(t),r=new Dl(t);return el(e._query),nc(n,e._query).then(n=>new Cl(t,r,e,n))}function Ll(e){e=ku(e,Ru);const t=ku(e.firestore,uc),n=cc(t),r=new Dl(t);return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await ms(e,t,!0),i=new Fa(t,r.Hi),o=i.Wu(r.documents),s=i.applyChanges(o,!1);n.resolve(s.snapshot)}catch(e){const r=wa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Yu(e),t,n)),n.promise}(n,e._query).then(n=>new Cl(t,r,e,n))}function Fl(e){e=ku(e,Ru);const t=ku(e.firestore,uc),n=cc(t),r=new Dl(t);return nc(n,e._query,{source:"server"}).then(n=>new Cl(t,r,e,n))}function Ul(e,t,n){e=ku(e,Au);const r=ku(e.firestore,uc),i=Il(e.converter,t,n);return Wl(r,[Rc(Ac(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,_n.none())])}function Vl(e,t,n,...r){e=ku(e,Au);const i=ku(e.firestore,uc),o=Ac(i);let a;return a="string"==typeof(t=Object(s.r)(t))||t instanceof Ec?Vc(o,"updateDoc",e._key,t,n,r):Uc(o,"updateDoc",e._key,t),Wl(i,[a.toMutation(e._key,_n.exists(!0))])}function zl(e){return Wl(ku(e.firestore,uc),[new Pn(e._key,_n.none())])}function ql(e,t){const n=ku(e.firestore,uc),r=Mu(e),i=Il(e.converter,t);return Wl(n,[Rc(Ac(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function Bl(e,...t){var n,r,i;e=Object(s.r)(e);let o={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||oc(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges};if(oc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,l,d;if(e instanceof Au)l=ku(e.firestore,uc),d=zt(e._key.path),c={next:n=>{t[a]&&t[a](Hl(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=ku(e,Ru);l=ku(n.firestore,uc),d=n._query;const r=new Dl(l);c={next:e=>{t[a]&&t[a](new Cl(l,r,n,e))},error:t[a+1],complete:t[a+2]},el(e._query)}return function(e,t,n,r){const i=new Vu(r),o=new Aa(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>Ta(await ec(e),o)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>xa(await ec(e),o))}}(cc(l),d,u,c)}function $l(e,t){return function(e,t){const n=new Vu(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Ru.add(t),t.next()}(await ec(e),n)),()=>{n.bc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).Ru.delete(t)}(await ec(e),n))}}(cc(e=ku(e,uc)),oc(t)?t:{next:t})}function Wl(e,t){return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=mu(e);try{const e=await function(e,t){const n=_(e),r=F.now(),i=t.reduce((e,t)=>e.add(t.key),Jn());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Bn(),u=Jn();return n.Gi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{o=i;const s=[];for(const e of t){const t=xn(e,o.get(e.key).overlayedDocument);null!=t&&s.push(new Nn(e.key,t,Ct(t.value.mapValue),_n.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)}).next(t=>{s=t;const r=t.applyToLocalDocumentSet(o,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:s.batchId,changes:Hn(o)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new _t(j)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await ru(r,e.changes),await sa(r.remoteStore)}catch(e){const t=wa(e,"Failed to persist write");n.reject(t)}}(await Ju(e),t,n)),n.promise}(cc(e),t)}function Hl(e,t,n){const r=n.docs.get(t._key),i=new Dl(e);return new xl(e,i,t._key,r,new Tl(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kl={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ac(e)}set(e,t,n){this._verifyNotCommitted();const r=Ql(e,this._firestore),i=Il(r.converter,t,n),o=Rc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(o.toMutation(r._key,_n.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Ql(e,this._firestore);let o;return o="string"==typeof(t=Object(s.r)(t))||t instanceof Ec?Vc(this._dataReader,"WriteBatch.update",i._key,t,n,r):Uc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,_n.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ql(e,this._firestore);return this._mutations=this._mutations.concat(new Pn(t._key,_n.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ql(e,t){if((e=Object(s.r)(e)).firestore!==t)throw new S(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ac(e)}get(e){const t=Ql(e,this._firestore),n=new kl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new Xc(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Xc(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=Ql(e,this._firestore),i=Il(r.converter,t,n),o=Rc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,o),this}update(e,t,n,...r){const i=Ql(e,this._firestore);let o;return o="string"==typeof(t=Object(s.r)(t))||t instanceof Ec?Vc(this._dataReader,"Transaction.update",i._key,t,n,r):Uc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ql(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ql(e,this._firestore),n=new Dl(this._firestore);return super.get(e).then(e=>new xl(this._firestore,n,t._key,e._document,new Tl(!1,!1),t.converter))}}function Xl(e,t,n){e=ku(e,uc);const r=Object.assign(Object.assign({},Kl),n);return function(e){if(e.maxAttempts<1)throw new S(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new I;return e.asyncQueue.enqueueAndForget(async()=>{const i=await Zu(e);new Bu(e.asyncQueue,i,n,t,r).run()}),r.promise}(cc(e),n=>t(new Yl(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return new Dc("deleteField")}function Zl(){return new jc("serverTimestamp")}function ed(...e){return new Mc("arrayUnion",e)}function td(...e){return new Lc("arrayRemove",e)}function nd(e){return new Fc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r.SDK_VERSION),Object(r._registerComponent)(new i.a("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new uc(new O(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ye(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Object(r.registerVersion)(u,"3.8.1",e),Object(r.registerVersion)(u,"3.8.1","esm2017")}()}).call(this,n(48))},function(e,t,n){"use strict";e.exports=n(109)},function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return S})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return l})),n.d(t,"_addComponent",(function(){return p})),n.d(t,"_addOrOverwriteComponent",(function(){return m})),n.d(t,"_apps",(function(){return h})),n.d(t,"_clearComponents",(function(){return b})),n.d(t,"_components",(function(){return f})),n.d(t,"_getProvider",(function(){return y})),n.d(t,"_registerComponent",(function(){return g})),n.d(t,"_removeServiceInstance",(function(){return v})),n.d(t,"deleteApp",(function(){return x})),n.d(t,"getApp",(function(){return k})),n.d(t,"getApps",(function(){return T})),n.d(t,"initializeApp",(function(){return I})),n.d(t,"onLog",(function(){return C})),n.d(t,"registerVersion",(function(){return O})),n.d(t,"setLogLevel",(function(){return N}));var r=n(12),i=n(17),o=n(1);n.d(t,"FirebaseError",(function(){return o.c}));var s=n(54);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const u="@firebase/app",c=new i.b("@firebase/app"),l="[DEFAULT]",d={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},h=new Map,f=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e,t){e.container.addOrOverwriteComponent(t)}function g(e){const t=e.name;if(f.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of h.values())p(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function v(e,t,n=l){y(e,t).clearInstance(n)}function b(){f.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_=new o.b("app","Firebase",w);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="9.16.0";function I(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:l,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw _.create("bad-app-name",{appName:String(s)});if(n||(n=Object(o.n)()),!n)throw _.create("no-options");const a=h.get(s);if(a){if(Object(o.k)(n,a.options)&&Object(o.k)(i,a.config))return a;throw _.create("duplicate-app",{appName:s})}const u=new r.b(s);for(const e of f.values())u.addComponent(e);const c=new E(n,i,u);return h.set(s,c),c}function k(e=l){const t=h.get(e);if(!t&&e===l)return I();if(!t)throw _.create("no-app",{appName:e});return t}function T(){return Array.from(h.values())}async function x(e){const t=e.name;h.has(t)&&(h.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function O(e,t,n){var i;let o=null!==(i=d[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void c.warn(e.join(" "))}g(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}function C(e,t){if(null!==e&&"function"!=typeof e)throw _.create("invalid-log-argument");Object(i.d)(e,t)}function N(e){Object(i.c)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="firebase-heartbeat-store";let R=null;function D(){return R||(R=Object(s.a)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(A)}}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),R}async function P(e,t){try{const n=(await D()).transaction(A,"readwrite"),r=n.objectStore(A);return await r.put(t,j(e)),n.done}catch(e){if(e instanceof o.c)c.warn(e.message);else{const t=_.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function j(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=L(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),U(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),U(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.f)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function L(){return(new Date).toISOString().substring(0,10)}class F{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.x)()&&Object(o.E)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await D()).transaction(A).objectStore(A).get(j(e))}catch(e){if(e instanceof o.c)c.warn(e.message);else{const t=_.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return P(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function U(e){return Object(o.f)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;V="",g(new r.a("platform-logger",e=>new a(e),"PRIVATE")),g(new r.a("heartbeat",e=>new M(e),"PRIVATE")),O(u,"0.9.1",V),O(u,"0.9.1","esm2017"),O("fire-js","")},function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return b}));var r=n(18),i=n(10),o=n(27);const s={m:"margin",p:"padding"},a={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},u={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},c=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}(e=>{if(e.length>2){if(!u[e])return[e];e=u[e]}const[t,n]=e.split(""),r=s[t],i=a[n]||"";return Array.isArray(i)?i.map(e=>r+e):[r+i]}),l=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],d=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],h=[...l,...d];function f(e,t,n,r){var o;const s=null!=(o=Object(i.b)(e,t,!1))?o:n;return"number"==typeof s?e=>"string"==typeof e?e:s*e:Array.isArray(s)?e=>"string"==typeof e?e:s[e]:"function"==typeof s?s:()=>{}}function p(e){return f(e,"spacing",8)}function m(e,t){if("string"==typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-"+n}function g(e,t,n,i){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce((e,r)=>(e[r]=m(t,n),e),{})}(c(n),i),s=e[n];return Object(r.b)(e,s,o)}function y(e,t){const n=p(e.theme);return Object.keys(e).map(r=>g(e,t,r,n)).reduce(o.a,{})}function v(e){return y(e,l)}function b(e){return y(e,d)}function w(e){return y(e,h)}v.propTypes={},v.filterProps=l,b.propTypes={},b.filterProps=d,w.propTypes={},w.filterProps=h},,function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(64),i=n(18);function o(e,t,n=!0){if(!t||"string"!=typeof t)return null;if(e&&e.vars&&n){const n=("vars."+t).split(".").reduce((e,t)=>e&&e[t]?e[t]:null,e);if(null!=n)return n}return t.split(".").reduce((e,t)=>e&&null!=e[t]?e[t]:null,e)}function s(e,t,n,r=n){let i;return i="function"==typeof e?e(n):Array.isArray(e)?e[n]||r:o(e,n)||r,t&&(i=t(i,r,e)),i}t.a=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:a,transform:u}=e,c=e=>{if(null==e[t])return null;const c=e[t],l=o(e.theme,a)||{};return Object(i.b)(e,c,e=>{let i=s(l,u,e);return e===i&&"string"==typeof e&&(i=s(l,u,`${t}${"default"===e?"":Object(r.a)(e)}`,e)),!1===n?i:{[n]:i}})};return c.propTypes={},c.filterProps=[t],c}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(1);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},function(e,t,n){"use strict";n.d(t,"b",(function(){return D}));var r=n(9),i=n(2),o=(n(66),n(0)),s=n(44),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=Object(s.a)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n(19),l=n(23),d=n(32),h=n(31),f=u,p=function(e){return"theme"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p},g=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},y=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;Object(l.c)(t,n,r);Object(h.a)((function(){return Object(l.b)(t,n,r)}));return null},v=function e(t,n){var r,s,a=t.__emotion_real===t,u=a&&t.__emotion_base||t;void 0!==n&&(r=n.label,s=n.target);var h=g(t,n,a),f=h||m(u),p=!f("as");return function(){var v=arguments,b=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&b.push("label:"+r+";"),null==v[0]||void 0===v[0].raw)b.push.apply(b,v);else{0,b.push(v[0][0]);for(var w=v.length,_=1;_<w;_++)b.push(v[_],v[0][_])}var E=Object(c.e)((function(e,t,n){var r=p&&e.as||u,i="",a=[],g=e;if(null==e.theme){for(var v in g={},e)g[v]=e[v];g.theme=Object(o.useContext)(c.b)}"string"==typeof e.className?i=Object(l.a)(t.registered,a,e.className):null!=e.className&&(i=e.className+" ");var w=Object(d.a)(b.concat(a),t.registered,g);i+=t.key+"-"+w.name,void 0!==s&&(i+=" "+s);var _=p&&void 0===h?m(r):f,E={};for(var S in e)p&&"as"===S||_(S)&&(E[S]=e[S]);return E.className=i,E.ref=n,Object(o.createElement)(o.Fragment,null,Object(o.createElement)(y,{cache:t,serialized:w,isStringTag:"string"==typeof r}),Object(o.createElement)(r,E))}));return E.displayName=void 0!==r?r:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",E.defaultProps=t.defaultProps,E.__emotion_real=E,E.__emotion_base=u,E.__emotion_styles=b,E.__emotion_forwardProp=h,Object.defineProperty(E,"toString",{value:function(){return"."+s}}),E.withComponent=function(t,r){return e(t,Object(i.a)({},n,r,{shouldForwardProp:g(E,r,!0)})).apply(void 0,b)},E}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){v[e]=v(e)}));var b=v;
/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=n(165),_=n(64);const E=["variant"];function S(e){return 0===e.length}function I(e){const{variant:t}=e,n=Object(r.a)(e,E);let i=t||"";return Object.keys(n).sort().forEach(t=>{i+="color"===t?S(i)?e[t]:Object(_.a)(e[t]):`${S(i)?t:Object(_.a)(t)}${Object(_.a)(e[t].toString())}`}),i}var k=n(74);const T=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],x=["theme"],O=["theme"];function C(e){return 0===Object.keys(e).length}function N(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const A=Object(w.a)();var R=n(43);const D=e=>N(e)&&"classes"!==e,P=function(e={}){const{defaultTheme:t=A,rootShouldForwardProp:n=N,slotShouldForwardProp:o=N}=e,s=e=>{const n=C(e.theme)?t:e.theme;return Object(k.a)(Object(i.a)({},e,{theme:n}))};return s.__mui_systemSx=!0,(e,a={})=>{((e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))})(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));const{name:u,slot:c,skipVariantsResolver:l,skipSx:d,overridesResolver:h}=a,f=Object(r.a)(a,T),p=void 0!==l?l:c&&"Root"!==c||!1,m=d||!1;let g=N;"Root"===c?g=n:c?g=o:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(g=void 0);const y=function(e,t){return b(e,t)}(e,Object(i.a)({shouldForwardProp:g,label:void 0},f)),v=(e,...n)=>{const o=n?n.map(e=>"function"==typeof e&&e.__emotion_real!==e?n=>{let{theme:o}=n,s=Object(r.a)(n,x);return e(Object(i.a)({theme:C(o)?t:o},s))}:e):[];let a=e;u&&h&&o.push(e=>{const n=C(e.theme)?t:e.theme,r=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(u,n);if(r){const t={};return Object.entries(r).forEach(([r,o])=>{t[r]="function"==typeof o?o(Object(i.a)({},e,{theme:n})):o}),h(e,t)}return null}),u&&!p&&o.push(e=>{const n=C(e.theme)?t:e.theme;return((e,t,n,r)=>{var i,o;const{ownerState:s={}}=e,a=[],u=null==n||null==(i=n.components)||null==(o=i[r])?void 0:o.variants;return u&&u.forEach(n=>{let r=!0;Object.keys(n.props).forEach(t=>{s[t]!==n.props[t]&&e[t]!==n.props[t]&&(r=!1)}),r&&a.push(t[I(n.props)])}),a})(e,((e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach(e=>{const t=I(e.props);r[t]=e.style}),r})(u,n),n,u)}),m||o.push(s);const c=o.length-n.length;if(Array.isArray(e)&&c>0){const t=new Array(c).fill("");a=[...e,...t],a.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(a=n=>{let{theme:o}=n,s=Object(r.a)(n,O);return e(Object(i.a)({theme:C(o)?t:o},s))});return y(a,...o)};return y.withConfig&&(v.withConfig=y.withConfig),v}}({defaultTheme:R.a,rootShouldForwardProp:D});t.a=P},function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[K]}function o(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===G}(e)||Array.isArray(e)||!!e[H]||!!(null===(t=e.constructor)||void 0===t?void 0:t[H])||h(e)||f(e))}function s(e,t,n){void 0===n&&(n=!1),0===a(e)?(n?Object.keys:Q)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function a(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:h(e)?2:f(e)?3:0}function u(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){return 2===a(e)?e.get(t):e[t]}function l(e,t,n){var r=a(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e){return q&&e instanceof Map}function f(e){return B&&e instanceof Set}function p(e){return e.o||e.t}function m(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Y(e);delete t[K];for(var n=Q(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function g(e,t){return void 0===t&&(t=!1),v(e)||i(e)||!o(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=y),Object.freeze(e),t&&s(e,(function(e,t){return g(t,!0)}),!0)),e}function y(){r(2)}function v(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function b(e){var t=X[e];return t||r(18,e),t}function w(e,t){X[e]||(X[e]=t)}function _(){return V}function E(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function S(e){I(e),e.p.forEach(T),e.p=null}function I(e){e===V&&(V=e.l)}function k(e){return V={p:[],l:V,h:e,m:!0,_:0}}function T(e){var t=e[K];0===t.i||1===t.i?t.j():t.O=!0}function x(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||b("ES5").S(t,e,i),i?(n[K].P&&(S(t),r(4)),o(e)&&(e=O(t,e),t.l||N(t,e)),t.u&&b("Patches").M(n[K].t,e,t.u,t.s)):e=O(t,n,[]),S(t),t.u&&t.v(t.u,t.s),e!==W?e:void 0}function O(e,t,n){if(v(t))return t;var r=t[K];if(!r)return s(t,(function(i,o){return C(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return N(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=m(r.k):r.o,o=i,a=!1;3===r.i&&(o=new Set(i),i.clear(),a=!0),s(o,(function(t,o){return C(e,r,i,t,o,n,a)})),N(e,i,!1),n&&e.u&&b("Patches").N(r,n,e.u,e.s)}return r.o}function C(e,t,n,r,s,a,c){if(i(s)){var d=O(e,s,a&&t&&3!==t.i&&!u(t.R,r)?a.concat(r):void 0);if(l(n,r,d),!i(d))return;e.m=!1}else c&&n.add(s);if(o(s)&&!v(s)){if(!e.h.D&&e._<1)return;O(e,s),t&&t.A.l||N(e,s)}}function N(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&g(t,n)}function A(e,t){var n=e[K];return(n?p(n):e)[t]}function R(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function P(e){e.o||(e.o=m(e.t))}function j(e,t,n){var r=h(t)?b("MapSet").F(t,n):f(t)?b("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:_(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=J;n&&(i=[r],o=Z);var s=Proxy.revocable(i,o),a=s.revoke,u=s.proxy;return r.k=u,r.j=a,u}(t,n):b("ES5").J(t,n);return(n?n.A:_()).p.push(r),r}function M(e){return i(e)||r(22,e),function e(t){if(!o(t))return t;var n,r=t[K],i=a(t);if(r){if(!r.P&&(r.i<4||!b("ES5").K(r)))return r.t;r.I=!0,n=L(t,i),r.I=!1}else n=L(t,i);return s(n,(function(t,i){r&&c(r.t,t)===i||l(n,t,e(i))})),3===i?new Set(n):n}(e)}function L(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return m(e)}function F(){function e(e,t){var n=o[e];return n?n.enumerable=t:o[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[K];return J.get(t,e)},set:function(t){var n=this[K];J.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][K];if(!i.P)switch(i.i){case 5:r(i)&&D(i);break;case 4:n(i)&&D(i)}}}function n(e){for(var t=e.t,n=e.k,r=Q(n),i=r.length-1;i>=0;i--){var o=r[i];if(o!==K){var s=t[o];if(void 0===s&&!u(t,o))return!0;var a=n[o],c=a&&a[K];if(c?c.t!==s:!d(a,s))return!0}}var l=!!t[K];return r.length!==Q(t).length+(l?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var o={};w("ES5",{J:function(t,n){var r=Array.isArray(t),i=function(t,n){if(t){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,e(i,!0));return r}var o=Y(n);delete o[K];for(var s=Q(o),a=0;a<s.length;a++){var u=s[a];o[u]=e(u,t||!!o[u].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(r,t),o={i:r?5:4,A:n?n.A:_(),P:!1,I:!1,R:{},l:n,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,K,{value:o,writable:!0}),i},S:function(e,n,o){o?i(n)&&n[K].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[K];if(n){var i=n.t,o=n.k,a=n.R,c=n.i;if(4===c)s(o,(function(t){t!==K&&(void 0!==i[t]||u(i,t)?a[t]||e(o[t]):(a[t]=!0,D(n)))})),s(i,(function(e){void 0!==o[e]||u(o,e)||(a[e]=!1,D(n))}));else if(5===c){if(r(n)&&(D(n),a.length=!0),o.length<i.length)for(var l=o.length;l<i.length;l++)a[l]=!1;else for(var d=i.length;d<o.length;d++)a[d]=!0;for(var h=Math.min(o.length,i.length),f=0;f<h;f++)o.hasOwnProperty(f)||(a[f]=!0),void 0===a[f]&&e(o[f])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}n.d(t,"a",(function(){return M})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o}));var U,V,z="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),q="undefined"!=typeof Map,B="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=z?Symbol.for("immer-nothing"):((U={})["immer-nothing"]=!0,U),H=z?Symbol.for("immer-draftable"):"__$immer_draftable",K=z?Symbol.for("immer-state"):"__$immer_state",G=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),Q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Y=Object.getOwnPropertyDescriptors||function(e){var t={};return Q(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},X={},J={get:function(e,t){if(t===K)return e;var n=p(e);if(!u(n,t))return function(e,t,n){var r,i=R(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!o(r)?r:r===A(e.t,t)?(P(e),e.o[t]=j(e.A.h,r,e)):r},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){var r=R(p(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=A(p(e),t),o=null==i?void 0:i[K];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(d(n,i)&&(void 0!==n||u(e.t,t)))return!0;P(e),D(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==A(e.t,t)||t in e.t?(e.R[t]=!1,P(e),D(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Z={};s(J,(function(e,t){Z[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Z.deleteProperty=function(e,t){return Z.set.call(this,e,t,void 0)},Z.set=function(e,t,n){return J.set.call(this,e[0],t,n,e[0])};var ee=new(function(){function e(e){var t=this;this.g=$,this.D=!0,this.produce=function(e,n,i){if("function"==typeof e&&"function"!=typeof n){var s=n;n=e;var a=t;return function(e){var t=this;void 0===e&&(e=s);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return a.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(i))}))}}var u;if("function"!=typeof n&&r(6),void 0!==i&&"function"!=typeof i&&r(7),o(e)){var c=k(t),l=j(t,e,void 0),d=!0;try{u=n(l),d=!1}finally{d?S(c):I(c)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return E(c,i),x(e,c)}),(function(e){throw S(c),e})):(E(c,i),x(u,c))}if(!e||"object"!=typeof e){if(void 0===(u=n(e))&&(u=e),u===W&&(u=void 0),t.D&&g(u,!0),i){var h=[],f=[];b("Patches").M(e,u,h,f),i(h,f)}return u}r(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))};var r,i,o=t.produce(e,n,(function(e,t){r=e,i=t}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return[e,r,i]})):[o,r,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){o(e)||r(8),i(e)&&(e=M(e));var t=k(this),n=j(this,e,void 0);return n[K].C=!0,I(t),n},t.finishDraft=function(e,t){var n=(e&&e[K]).A;return E(n,t),x(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!$&&r(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var o=b("Patches").$;return i(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))},e}()),te=ee.produce;ee.produceWithPatches.bind(ee),ee.setAutoFreeze.bind(ee),ee.setUseProxies.bind(ee),ee.applyPatches.bind(ee),ee.createDraft.bind(ee),ee.finishDraft.bind(ee);t.b=te},function(e,t,n){"use strict";var r=n(64);t.a=r.a},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=s,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return a}));n(2),n(84),n(27);const r={xs:0,sm:600,md:900,lg:1200,xl:1536},i={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function o(e,t,n){const o=e.theme||{};if(Array.isArray(t)){const e=o.breakpoints||i;return t.reduce((r,i,o)=>(r[e.up(e.keys[o])]=n(t[o]),r),{})}if("object"==typeof t){const e=o.breakpoints||i;return Object.keys(t).reduce((i,o)=>{if(-1!==Object.keys(e.values||r).indexOf(o)){i[e.up(o)]=n(t[o],o)}else{const e=o;i[e]=t[e]}return i},{})}return n(t)}function s(e={}){var t;return(null==(t=e.keys)?void 0:t.reduce((t,n)=>(t[e.up(n)]={},t),{}))||{}}function a(e,t){return e.reduce((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e},t)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l}));var r=n(0),i=n(60),o=(n(2),n(45),n(59),n(23)),s=n(32),a=n(31),u={}.hasOwnProperty,c=Object(r.createContext)("undefined"!=typeof HTMLElement?Object(i.a)({key:"css"}):null);c.Provider;var l=function(e){return Object(r.forwardRef)((function(t,n){var i=Object(r.useContext)(c);return e(t,i,n)}))},d=Object(r.createContext)({});var h="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",f=function(e,t){var n={};for(var r in t)u.call(t,r)&&(n[r]=t[r]);return n[h]=e,n},p=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;Object(o.c)(t,n,r);Object(a.a)((function(){return Object(o.b)(t,n,r)}));return null},m=l((function(e,t,n){var i=e.css;"string"==typeof i&&void 0!==t.registered[i]&&(i=t.registered[i]);var a=e[h],c=[i],l="";"string"==typeof e.className?l=Object(o.a)(t.registered,c,e.className):null!=e.className&&(l=e.className+" ");var f=Object(s.a)(c,void 0,Object(r.useContext)(d));l+=t.key+"-"+f.name;var m={};for(var g in e)u.call(e,g)&&"css"!==g&&g!==h&&(m[g]=e[g]);return m.ref=n,m.className=l,Object(r.createElement)(r.Fragment,null,Object(r.createElement)(p,{cache:t,serialized:f,isStringTag:"string"==typeof a}),Object(r.createElement)(a,m))}))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Yn})),n.d(t,"b",(function(){return Jn})),n.d(t,"c",(function(){return Xn})),n.d(t,"d",(function(){return er})),n.d(t,"e",(function(){return Zn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return nr})),n.d(t,"h",(function(){return Gn})),n.d(t,"i",(function(){return Qn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},s=s||{},a=i||self;function u(){}function c(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),h=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++h))},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function w(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(c(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",u,t),a.removeEventListener("test",u,t)}catch(e){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}var k=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function T(e,t){return e<t?-1:e>t?1:0}function x(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function O(e){return-1!=x().indexOf(e)}function C(e){return C[" "](e),e}C[" "]=u;var N,A,R=O("Opera"),D=O("Trident")||O("MSIE"),P=O("Edge"),j=P||D,M=O("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),L=-1!=x().toLowerCase().indexOf("webkit")&&!O("Edge");function F(){var e=a.document;return e?e.documentMode:void 0}e:{var U="",V=(A=x(),M?/rv:([^\);]+)(\)|;)/.exec(A):P?/Edge\/([\d\.]+)/.exec(A):D?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(A):L?/WebKit\/(\S+)/.exec(A):R?/(?:Version)[ \/]?(\S+)/.exec(A):void 0);if(V&&(U=V?V[1]:""),D){var z=F();if(null!=z&&z>parseFloat(U)){N=String(z);break e}}N=U}var q,B={};function $(){return function(e){var t=B;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=k(String(N)).split("."),n=k("9").split("."),r=Math.max(t.length,n.length);for(let s=0;0==e&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=T(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||T(0==i[2].length,0==o[2].length)||T(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(a.document&&D){var W=F();q=W||(parseInt(N,10)||void 0)}else q=void 0;var H=q;function K(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(M){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.X.h.call(this)}}y(K,E);var G={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Y,this.ba=this.ea=!1}function J(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Z(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ee(e){const t={};for(const n in e)t[n]=e[n];return t}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<te.length;t++)n=te[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function re(e){this.src=e,this.g={},this.h=0}function ie(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=b(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}re.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var s=oe(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):((t=new X(t,this.src,o,!!r,i)).ea=n,e.push(t)),t};var se="closure_lm_"+(1e6*Math.random()|0),ae={};function ue(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)e(t,n[s],r,i,o);return null}return r=me(r),t&&t[Q]?t.O(n,r,l(i)?!!i.capture:!!i,o):ce(t,n,r,!0,i,o)}(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)ue(e,t[o],n,r,i);return null}return n=me(n),e&&e[Q]?e.N(t,n,l(r)?!!r.capture:!!r,i):ce(e,t,n,!1,r,i)}function ce(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=fe(e);if(a||(e[se]=a=new re(e)),(n=a.add(t,n,r,s,o)).proxy)return n;if(r=function(){const e=he;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)S||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(de(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function le(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Q])ie(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(de(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fe(t))?(ie(n,e),0==n.h&&(n.src=null,t[se]=null)):J(e)}}}function de(e){return e in ae?ae[e]:ae[e]="on"+e}function he(e,t){if(e.ba)e=!0;else{t=new K(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&le(e),e=n.call(r,t)}return e}function fe(e){return(e=e[se])instanceof re?e:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"==typeof e?e:(e[pe]||(e[pe]=function(t){return e.handleEvent(t)}),e[pe])}function ge(){v.call(this),this.i=new re(this),this.P=this,this.I=null}function ye(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var i=t;ne(t=new E(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=ve(s,r,!0,t)&&i}if(i=ve(s=t.g=e,r,!0,t)&&i,i=ve(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=ve(s=t.g=n[o],r,!1,t)&&i}function ve(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,u=s.ha||s.src;s.ea&&ie(e.i,s),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}y(ge,v),ge.prototype[Q]=!0,ge.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)e(t,n[s],r,i,o);else i=l(i)?!!i.capture:!!i,r=me(r),t&&t[Q]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=oe(s=t.g[n],r,i,o))&&(J(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete t.g[n],t.h--)))):t&&(t=fe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=oe(n,r,i,o)),(r=-1<t?n[t]:null)&&le(r))}(this,e,t,n,r)},ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)J(n[r]);delete t.g[e],t.h--}}this.I=null},ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var be=a.JSON.stringify;function we(){var e=xe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var _e,Ee=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Se,e=>e.reset());class Se{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ie(e){a.setTimeout(()=>{throw e},0)}function ke(e,t){_e||function(){var e=a.Promise.resolve(void 0);_e=function(){e.then(Oe)}}(),Te||(_e(),Te=!0),xe.add(e,t)}var Te=!1,xe=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ee.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Oe(){for(var e;e=we();){try{e.h.call(e.g)}catch(e){Ie(e)}var t=Ee;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Te=!1}function Ce(e,t){ge.call(this),this.h=e||1,this.g=t||a,this.j=m(this.lb,this),this.l=Date.now()}function Ne(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ae(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}y(Ce,ge),(r=Ce.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(Ne(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ce.X.M.call(this),Ne(this),delete this.g};class Re extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ae(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){v.call(this),this.h=e,this.g={}}y(De,v);var Pe=[];function je(e,t,n,r){Array.isArray(n)||(n&&(Pe[0]=n.toString()),n=Pe);for(var i=0;i<n.length;i++){var o=ue(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Me(e){Z(e.g,(function(e,t){this.g.hasOwnProperty(t)&&le(e)}),e),e.g={}}function Le(){this.g=!0}function Fe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return be(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}De.prototype.M=function(){De.X.M.call(this),Me(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Le.prototype.Aa=function(){this.g=!1},Le.prototype.info=function(){};var Ue={},Ve=null;function ze(){return Ve=Ve||new ge}function qe(e){E.call(this,Ue.Pa,e)}function Be(e){const t=ze();ye(t,new qe(t))}function $e(e,t){E.call(this,Ue.STAT_EVENT,e),this.stat=t}function We(e){const t=ze();ye(t,new $e(t,e))}function He(e,t){E.call(this,Ue.Qa,e),this.size=t}function Ke(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}Ue.Pa="serverreachability",y(qe,E),Ue.STAT_EVENT="statevent",y($e,E),Ue.Qa="timingevent",y(He,E);var Ge={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ye(){}function Xe(e){return e.h||(e.h=e.i())}function Je(){}Ye.prototype.h=null;var Ze,et={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tt(){E.call(this,"d")}function nt(){E.call(this,"c")}function rt(){}function it(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new De(this),this.O=st,e=j?125:void 0,this.T=new Ce(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}y(tt,E),y(nt,E),y(rt,Ye),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},Ze=new rt;var st=45e3,at={},ut={};function ct(e,t,n){e.K=1,e.v=Ot(St(t)),e.s=n,e.P=!0,lt(e,null)}function lt(e,t){e.F=Date.now(),pt(e),e.A=St(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),zt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new ot,e.g=zn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Re(m(e.La,e,e.g),e.N)),je(e.S,e.g,"readystatechange",e.ib),t=e.H?ee(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Be(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var d=l.split("_");s=2<=d.length&&"type"==d[1]?s+(l+"=")+c+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function dt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function ht(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=ft(e,n),r==ut){4==t&&(e.o=4,We(14),i=!1),Fe(e.j,e.m,null,"[Incomplete Response]");break}if(r==at){e.o=4,We(15),Fe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Fe(e.j,e.m,r,null),bt(e,r)}dt(e)&&r!=ut&&r!=at&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,We(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dn(t),t.K=!0,We(11))):(Fe(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),yt(e))}function ft(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ut:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1)+n>t.length?ut:(t=t.substr(r,n),e.C=r+n,t))}function pt(e){e.V=Date.now()+e.O,mt(e,e.O)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ke(m(e.gb,e),t)}function gt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.G||e.I||Mn(e.l,e)}function vt(e){gt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ne(e.T),Me(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Kt(n.h,e)))if(!e.J&&Kt(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;jn(n),kn(n)}Rn(n),We(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ke(m(n.cb,n),6e3));if(1>=Ht(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Fn(n,11)}else if((e.J||n.g==e)&&jn(n),!I(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Gt(o,o.h),o.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,xt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var s=e;if((r=n).sa=Vn(r,r.H?r.ka:null,r.V),s.J){Qt(r.h,s);var a=s,u=r.J;u&&a.setTimeout(u),a.B&&(gt(a),pt(a)),r.g=s}else An(r);0<n.i.length&&xn(n)}else"stop"!=c[0]&&"close"!=c[0]||Fn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Fn(n,7):In(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Be()}catch(e){}}function wt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(c(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(r=it.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==vn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const d=vn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>d)&&(3!=d||j||this.g&&(this.h.h||this.g.fa()||bn(this.g)))){this.I||4!=d||7==t||Be(),gt(this);var n=this.g.aa();this.Y=n;t:if(dt(this)){var r=bn(this.g);e="";var i=r.length,o=4==vn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vt(this),yt(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(u)){var l=u;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,We(12),vt(this),yt(this);break e}Fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,n)}this.P?(ht(this,d,s),j&&this.i&&3==d&&(je(this.S,this.T,"tick",this.hb),this.T.start())):(Fe(this.j,this.m,s,null),bt(this,s)),4==d&&vt(this),this.i&&!this.I&&(4==d?Mn(this.l,this):(this.i=!1,pt(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),vt(this),yt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=vn(this.g),t=this.g.fa();this.C<t.length&&(gt(this),ht(this,e,t),this.i&&4!=e&&pt(this))}},r.cancel=function(){this.I=!0,vt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Be(),We(17)),vt(this),this.o=2,yt(this)):mt(this,this.V-e)};var _t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Et(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Et){this.h=void 0!==t?t:e.h,It(this,e.j),this.s=e.s,this.g=e.g,kt(this,e.m),this.l=e.l,t=e.i;var n=new Lt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Tt(this,n),this.o=e.o}else e&&(n=String(e).match(_t))?(this.h=!!t,It(this,n[1]||"",!0),this.s=Ct(n[2]||""),this.g=Ct(n[3]||"",!0),kt(this,n[4]),this.l=Ct(n[5]||"",!0),Tt(this,n[6]||"",!0),this.o=Ct(n[7]||"")):(this.h=!!t,this.i=new Lt(null,this.h))}function St(e){return new Et(e)}function It(e,t,n){e.j=n?Ct(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function kt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Tt(e,t,n){t instanceof Lt?(e.i=t,function(e,t){t&&!e.j&&(Ft(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ut(this,t),zt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Nt(t,jt)),e.i=new Lt(t,e.h))}function xt(e,t,n){e.i.set(t,n)}function Ot(e){return xt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ct(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Nt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,At),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function At(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Et.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Nt(t,Rt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Nt(t,Rt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Nt(n,"/"==n.charAt(0)?Pt:Dt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Nt(n,Mt)),e.join("")};var Rt=/[#\/\?@]/g,Dt=/[#\?:]/g,Pt=/[#\?]/g,jt=/[#\?@]/g,Mt=/#/g;function Lt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ut(e,t){Ft(e),t=qt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vt(e,t){return Ft(e),t=qt(e,t),e.g.has(t)}function zt(e,t,n){Ut(e,t),0<n.length&&(e.i=null,e.g.set(qt(e,t),w(n)),e.h+=n.length)}function qt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=Lt.prototype).add=function(e,t){Ft(this),this.i=null,e=qt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Ft(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){Ft(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){Ft(this);let t=[];if("string"==typeof e)Vt(this,e)&&(t=t.concat(this.g.get(qt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Ft(this),this.i=null,Vt(this,e=qt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Bt(e){this.l=e||$t,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $t=10;function Wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ht(e){return e.h?1:e.g?e.g.size:0}function Kt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gt(e,t){e.g?e.g.add(t):e.h=t}function Qt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Yt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return w(e.i)}function Xt(){}function Jt(){this.g=new Xt}function Zt(e,t,n){const r=n||"";try{wt(e,(function(e,n){let i=e;l(e)&&(i=be(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function en(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tn(e){this.l=e.ac||null,this.j=e.jb||!1}function nn(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bt.prototype.cancel=function(){if(this.i=Yt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Xt.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Xt.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(tn,Ye),tn.prototype.g=function(){return new nn(this.l,this.j)},tn.prototype.i=function(e){return function(){return e}}({}),y(nn,ge);var rn=0;function on(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,an(e)}function an(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=nn.prototype).open=function(e,t){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,an(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,sn(this)),this.readyState=rn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;on(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):an(this),3==this.readyState&&on(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,sn(this))},r.Ua=function(e){this.g&&(this.response=e,sn(this))},r.ga=function(){this.g&&sn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var un=a.JSON.parse;function cn(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ln,this.K=this.L=!1}y(cn,ge);var ln="",dn=/^https?$/i,hn=["POST","PUT"];function fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pn(e),gn(e)}function pn(e){e.D||(e.D=!0,ye(e,"complete"),ye(e,"error"))}function mn(e){if(e.h&&void 0!==s&&(!e.C[1]||4!=vn(e)||2!=e.aa()))if(e.v&&4==vn(e))Ae(e.Ha,0,e);else if(ye(e,"readystatechange"),4==vn(e)){e.h=!1;try{const s=e.aa();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){var i=String(e.H).match(_t)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!dn.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var u=2<vn(e)?e.g.statusText:""}catch(e){u=""}e.j=u+" ["+e.aa()+"]",pn(e)}}finally{gn(e)}}}function gn(e,t){if(e.g){yn(e);const n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||ye(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function vn(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ln:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function wn(e){let t="";return Z(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function _n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):xt(e,t,n))}function En(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sn(e){this.Ca=0,this.i=[],this.j=new Le,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=En("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=En("baseRetryDelayMs",5e3,e),this.bb=En("retryDelaySeedMs",1e4,e),this.$a=En("forwardChannelMaxRetries",2,e),this.ta=En("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Bt(e&&e.concurrentRequestLimit),this.Fa=new Jt,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function In(e){if(Tn(e),3==e.G){var t=e.U++,n=St(e.F);xt(n,"SID",e.I),xt(n,"RID",t),xt(n,"TYPE","terminate"),Cn(e,n),(t=new it(e,e.j,t,void 0)).K=2,t.v=Ot(St(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=zn(t.l,null),t.g.da(t.v)),t.F=Date.now(),pt(t)}Un(e)}function kn(e){e.g&&(Dn(e),e.g.cancel(),e.g=null)}function Tn(e){kn(e),e.u&&(a.clearTimeout(e.u),e.u=null),jn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function xn(e){Wt(e.h)||e.m||(e.m=!0,ke(e.Ja,e),e.C=0)}function On(e,t){var n;n=t?t.m:e.U++;const r=St(e.F);xt(r,"SID",e.I),xt(r,"RID",n),xt(r,"AID",e.T),Cn(e,r),e.o&&e.s&&_n(r,e.o,e.s),n=new it(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Nn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Gt(e.h,n),ct(n,r,t)}function Cn(e,t){e.ia&&Z(e.ia,(function(e,n){xt(t,n,e)})),e.l&&wt({},(function(e,n){xt(t,n,e)}))}function Nn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?m(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let s=0;s<n;s++){let n=i[s].h;const a=i[s].g;if(n-=t,0>n)t=Math.max(0,i[s].h-100),o=!1;else try{Zt(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function An(e){e.g||e.u||(e.Z=1,ke(e.Ia,e),e.A=0)}function Rn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Ke(m(e.Ia,e),Ln(e,e.A)),e.A++,!0)}function Dn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Pn(e){e.g=new it(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=St(e.sa);xt(t,"RID","rpc"),xt(t,"SID",e.I),xt(t,"CI",e.L?"0":"1"),xt(t,"AID",e.T),xt(t,"TYPE","xmlhttp"),Cn(e,t),e.o&&e.s&&_n(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ot(St(t)),n.s=null,n.P=!0,lt(n,e)}function jn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function Mn(e,t){var n=null;if(e.g==t){jn(e),Dn(e),e.g=null;var r=2}else{if(!Kt(e.h,t))return;n=t.D,Qt(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ye(r=ze(),new He(r,n)),xn(e)}else An(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Ht(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=Ke(m(e.Ja,e,t),Ln(e,e.C)),e.C++,!0))}(e,t)||2==r&&Rn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Fn(e,5);break;case 4:Fn(e,10);break;case 3:Fn(e,6);break;default:Fn(e,2)}}function Ln(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Fn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=m(e.kb,e);n||(n=new Et("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||It(n,"https"),Ot(n)),function(e,t){const n=new Le;if(a.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(en,n,r,"TestLoadImage: error",!1,t),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else We(2);e.G=0,e.l&&e.l.va(t),Un(e),Tn(e)}function Un(e){if(e.G=0,e.la=[],e.l){const t=Yt(e.h);0==t.length&&0==e.i.length||(_(e.la,t),_(e.la,e.i),e.h.i.length=0,w(e.i),e.i.length=0),e.l.ua()}}function Vn(e,t,n){var r=n instanceof Et?St(n):new Et(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),kt(r,r.m);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Et(null,void 0);r&&It(o,r),t&&(o.g=t),i&&kt(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&xt(r,n,t),xt(r,"VER",e.ma),Cn(e,r),r}function zn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new cn(new tn({jb:!0})):new cn(e.ra)).Ka(e.H),t}function qn(){}function Bn(){if(D&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function $n(e,t){ge.call(this),this.g=new Sn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Kn(this)}function Wn(e){tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Hn(){nt.call(this),this.status=1}function Kn(e){this.g=e}(r=cn.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ze.g(),this.C=this.u?Xe(this.u):Xe(Ze),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void fn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(0<=b(hn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yn(this),0<this.B&&((this.K=function(e){return D&&$()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ae(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){fn(this,e)}},r.qa=function(){void 0!==s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),cn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},r.fb=function(){mn(this)},r.aa=function(){try{return 2<vn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),un(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=Sn.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=ee(o),ne(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Nn(this,i,t),xt(n=St(this.F),"RID",e),xt(n,"CVER",22),this.D&&xt(n,"X-HTTP-Session-Id",this.D),Cn(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(wn(o)))+"&"+t:this.o&&_n(n,this.o,o)),Gt(this.h,i),this.Ya&&xt(n,"TYPE","init"),this.O?(xt(n,"$req",t),xt(n,"SID","null"),i.Z=!0,ct(i,n,null)):ct(i,n,t),this.G=2}}else 3==this.G&&(e?On(this,e):0==this.i.length||Wt(this.h)||On(this))},r.Ia=function(){if(this.u=null,Pn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ke(m(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),kn(this),Pn(this))},r.cb=function(){null!=this.v&&(this.v=null,kn(this),Rn(this),We(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))},(r=qn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Bn.prototype.g=function(e,t){return new $n(e,t)},y($n,ge),$n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;We(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Vn(e,null,e.V),xn(e)},$n.prototype.close=function(){In(this.g)},$n.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=be(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&xn(t)},$n.prototype.M=function(){this.g.l=null,delete this.j,In(this.g),delete this.g,$n.X.M.call(this)},y(Wn,tt),y(Hn,nt),y(Kn,qn),Kn.prototype.xa=function(){ye(this.g,"a")},Kn.prototype.wa=function(e){ye(this.g,new Wn(e))},Kn.prototype.va=function(e){ye(this.g,new Hn)},Kn.prototype.ua=function(){ye(this.g,"b")},Bn.prototype.createWebChannel=Bn.prototype.g,$n.prototype.send=$n.prototype.u,$n.prototype.open=$n.prototype.m,$n.prototype.close=$n.prototype.close,Ge.NO_ERROR=0,Ge.TIMEOUT=8,Ge.HTTP_ERROR=6,Qe.COMPLETE="complete",Je.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ge.prototype.listen=ge.prototype.N,cn.prototype.listenOnce=cn.prototype.O,cn.prototype.getLastError=cn.prototype.Oa,cn.prototype.getLastErrorCode=cn.prototype.Ea,cn.prototype.getStatus=cn.prototype.aa,cn.prototype.getResponseJson=cn.prototype.Sa,cn.prototype.getResponseText=cn.prototype.fa,cn.prototype.send=cn.prototype.da,cn.prototype.setWithCredentials=cn.prototype.Ka;var Gn=o.createWebChannelTransport=function(){return new Bn},Qn=o.getStatEventTarget=function(){return ze()},Yn=o.ErrorCode=Ge,Xn=o.EventType=Qe,Jn=o.Event=Ue,Zn=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},er=o.FetchXmlHttpFactory=tn,tr=o.WebChannel=Je,nr=o.XhrIo=cn}).call(this,n(39))},function(e,t,n){e.exports=n(115)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(161);var i=n(165),o=n(0);var s=o.createContext(null);var a=function(e=null){const t=o.useContext(s);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n};const u=Object(i.a)();var c=function(e=u){return a(e)};function l({props:e,name:t,defaultTheme:n}){return function(e){const{theme:t,name:n,props:i}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?Object(r.a)(t.components[n].defaultProps,i):i}({theme:c(n),name:t,props:e})}var d=n(43);function h({props:e,name:t}){return l({props:e,name:t,defaultTheme:d.a})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var i=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},o=function(e,t,n){i(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},function(e,t,n){var r=n(101),i=n(102),o=n(103),s=n(105);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=a(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(h)):s.push({identifier:l,updater:g(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var o=m++;n=p||(p=c(t)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=u(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=o}}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(1),i=n(12),o=n(6),s=n(17);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(o._addComponent)(e,new i.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o.deleteApp)(this._delegate)))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new r.b("app-compat","Firebase",u);const l=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,s={}){const a=o.initializeApp(i,s);if(Object(r.h)(t,a.name))return t[a.name];const u=new e(a,n);return t[a.name]=u,u},app:i,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){const s=t.name,a=s.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[a])throw c.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&Object(r.l)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){return this._getService.bind(this,s).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:o}};function i(e){if(e=e||o._DEFAULT_ENTRY_NAME,!Object(r.h)(t,e))throw c.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(a);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.l)(t,e)},createSubscribe:r.j,ErrorFactory:r.b,deepExtend:r.l}),t}(),d=new s.b("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(r.t)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const h=l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var f;Object(o.registerVersion)("@firebase/app-compat","0.2.1",f)},function(e,t,n){"use strict";var r=n(84);t.a=function(e,t){return t?Object(r.a)(e,t,{clone:!1}):e}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function o(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f}));var c="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},d={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function h(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(u(1));return n(f)(e,t)}if("function"!=typeof e)throw new Error(u(2));var i=e,o=t,s=[],a=s,l=!1;function p(){a===s&&(a=s.slice())}function m(){if(l)throw new Error(u(3));return o}function g(e){if("function"!=typeof e)throw new Error(u(4));if(l)throw new Error(u(5));var t=!0;return p(),a.push(e),function(){if(t){if(l)throw new Error(u(6));t=!1,p();var n=a.indexOf(e);a.splice(n,1),s=null}}}function y(e){if(!h(e))throw new Error(u(7));if(void 0===e.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,o=i(o,e)}finally{l=!1}for(var t=s=a,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!=typeof e)throw new Error(u(10));i=e,y({type:d.REPLACE})}function b(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(u(11));function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[c]=function(){return this},e}return y({type:d.INIT}),(r={dispatch:y,subscribe:g,getState:m,replaceReducer:v})[c]=b,r}function p(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var o,s=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:d.INIT}))throw new Error(u(12));if(void 0===n(void 0,{type:d.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<s.length;a++){var c=s[a],l=n[c],d=e[c],h=l(d,t);if(void 0===h){t&&t.type;throw new Error(u(14))}i[c]=h,r=r||h!==d}return(r=r||s.length!==Object.keys(e).length)?i:e}}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(u(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return r=m.apply(void 0,o)(n.dispatch),a(a({},n),{},{dispatch:r})}}}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(142)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),i=!!r.useInsertionEffect&&r.useInsertionEffect,o=i||function(e){return e()},s=i||r.useLayoutEffect},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=n(44),s=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},l=Object(o.a)((function(e){return u(e)?e:e.replace(s,"-$&").toLowerCase()})),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(a,(function(e,t,n){return f={name:t,styles:n,next:f},t}))}return 1===i[e]||u(e)||"number"!=typeof t||0===t?t:t+"px"};function h(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return f={name:n.name,styles:n.styles,next:f},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)f={name:r.name,styles:r.styles,next:f},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=h(e,t,n[i])+";";else for(var o in n){var s=n[o];if("object"!=typeof s)null!=t&&void 0!==t[s]?r+=o+"{"+t[s]+"}":c(s)&&(r+=l(o)+":"+d(o,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var a=h(e,t,s);switch(o){case"animation":case"animationName":r+=l(o)+":"+a+";";break;default:r+=o+"{"+a+"}"}}else for(var u=0;u<s.length;u++)c(s[u])&&(r+=l(o)+":"+d(o,s[u])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=f,o=n(e);return f=i,h(e,t,o)}break;case"string":}if(null==t)return n;var s=t[n];return void 0!==s?s:n}var f,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i=!0,o="";f=void 0;var s=e[0];null==s||void 0===s.raw?(i=!1,o+=h(n,t,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=h(n,t,e[a]),i&&(o+=s[a]);p.lastIndex=0;for(var u,c="";null!==(u=p.exec(o));)c+="-"+u[1];return{name:r(o)+c,styles:o,next:f}}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(0),i=(n(60),n(19)),o=(n(66),n(45),n(41),n(23)),s=n(32),a=n(31),u=Object(i.e)((function(e,t){var n=e.styles,u=Object(s.a)([n],void 0,Object(r.useContext)(i.b)),c=Object(r.useRef)();return Object(a.b)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,i=document.querySelector('style[data-emotion="'+e+" "+u.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==i&&(r=!0,i.setAttribute("data-emotion",e),n.hydrate([i])),c.current=[n,r],function(){n.flush()}}),[t]),Object(a.b)((function(){var e=c.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==u.next&&Object(o.b)(t,u.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",u,n,!1)}}),[t,u.name]),null}));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(s.a)(t)}var l=function(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},function(e,t,n){"use strict";var r=n(145);t.a=r.a},function(e,t,n){"use strict";var r=n(0),i=n(62);t.a=function(e){const t=r.useRef(e);return Object(i.a)(()=>{t.current=e}),r.useCallback((...e)=>(0,t.current)(...e),[])}},,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(89)},function(e,t,n){"use strict";var r=n(96),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return r.isMemo(e)?s:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=s;var c=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var s=l(n);d&&(s=s.concat(d(n)));for(var a=u(t),m=u(n),g=0;g<s.length;++g){var y=s[g];if(!(o[y]||r&&r[y]||m&&m[y]||a&&a[y])){var v=h(n,y);try{c(t,y,v)}catch(e){}}}}return t}},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return C}));var i,o=n(15),s=(n(51),n(28)),a=n(61),u=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},l=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},d=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=function(e,t,n){return t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},v=function(e,t){for(var n in t||(t={}))m.call(t,n)&&y(e,n,t[n]);if(p)for(var r=0,i=p(t);r<i.length;r++){n=i[r];g.call(t,n)&&y(e,n,t[n])}return e},b=function(e,t){return h(e,f(t))},w=function(e,t,n){return new Promise((function(r,i){var o=function(e){try{a(n.next(e))}catch(e){i(e)}},s=function(e){try{a(n.throw(e))}catch(e){i(e)}},a=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(o,s)};a((n=n.apply(e,t)).next())}))},_="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?s.c:s.c.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function E(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}var S=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return u(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,l([void 0],e[0].concat(this)))):new(t.bind.apply(t,l([void 0],e.concat(this))))},t}(Array);function I(e){return Object(o.e)(e)?Object(o.b)(e,(function(){})):e}function k(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,n=void 0===t||t,r=(e.immutableCheck,e.serializableCheck,new S);n&&("boolean"==typeof n?r.push(a.a):r.push(a.a.withExtraArgument(n.extraArgument)));0;return r}(e)}}function T(e){var t,n=k(),r=e||{},i=r.reducer,o=void 0===i?void 0:i,a=r.middleware,u=void 0===a?n():a,c=r.devTools,d=void 0===c||c,h=r.preloadedState,f=void 0===h?void 0:h,p=r.enhancers,m=void 0===p?void 0:p;if("function"==typeof o)t=o;else{if(!E(o))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=Object(s.b)(o)}var g=u;"function"==typeof g&&(g=g(n));var y=s.a.apply(void 0,g),b=s.c;d&&(b=_(v({trace:!1},"object"==typeof d&&d)));var w=[y];Array.isArray(m)?w=l([y],m):"function"==typeof m&&(w=m(w));var S=b.apply(void 0,w);return Object(s.d)(t,f,S)}function x(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return v(v({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}function O(e){var t,n={},r=[],i={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,i},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[n,r,t]}function C(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n,r="function"==typeof e.initialState?e.initialState:I(e.initialState),i=e.reducers||{},s=Object.keys(i),a={},u={},c={};function d(){var t="function"==typeof e.extraReducers?O(e.extraReducers):[e.extraReducers],n=t[0],i=void 0===n?{}:n,s=t[1],a=void 0===s?[]:s,c=t[2],d=void 0===c?void 0:c,h=v(v({},i),u);return function(e,t,n,r){void 0===n&&(n=[]);var i,s="function"==typeof t?O(t):[t,n,r],a=s[0],u=s[1],c=s[2];if("function"==typeof e)i=function(){return I(e())};else{var d=I(e);i=function(){return d}}function h(e,t){void 0===e&&(e=i());var n=l([a[t.type]],u.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[c]),n.reduce((function(e,n){if(n){var r;if(Object(o.d)(e))return void 0===(r=n(e,t))?e:r;if(Object(o.e)(e))return Object(o.b)(e,(function(e){return n(e,t)}));if(void 0===(r=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return h.getInitialState=i,h}(r,(function(e){for(var t in h)e.addCase(t,h[t]);for(var n=0,r=a;n<r.length;n++){var i=r[n];e.addMatcher(i.matcher,i.reducer)}d&&e.addDefaultCase(d)}))}return s.forEach((function(e){var n,r,o=i[e],s=t+"/"+e;"reducer"in o?(n=o.reducer,r=o.prepare):n=o,a[e]=n,u[s]=n,c[e]=r?x(s,r):x(s)})),{name:t,reducer:function(e,t){return n||(n=d()),n(e,t)},actions:c,caseReducers:a,getInitialState:function(){return n||(n=d()),n.getInitialState()}}}var N=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},A=["name","message","stack","code"],R=function(e,t){this.payload=e,this.meta=t},D=function(e,t){this.payload=e,this.meta=t},P=function(e){if("object"==typeof e&&null!==e){for(var t={},n=0,r=A;n<r.length;n++){var i=r[n];"string"==typeof e[i]&&(t[i]=e[i])}return t}return{message:String(e)}};!function(){function e(e,t,n){var r=x(e+"/fulfilled",(function(e,t,n,r){return{payload:e,meta:b(v({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}})),i=x(e+"/pending",(function(e,t,n){return{payload:void 0,meta:b(v({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),o=x(e+"/rejected",(function(e,t,r,i,o){return{payload:i,error:(n&&n.serializeError||P)(e||"Rejected"),meta:b(v({},o||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),s="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){0},e}();return Object.assign((function(e){return function(a,u,l){var d,h=(null==n?void 0:n.idGenerator)?n.idGenerator(e):N(),f=new s;function p(e){d=e,f.abort()}var m=function(){return w(this,null,(function(){var s,m,g,y,v,b;return c(this,(function(c){switch(c.label){case 0:return c.trys.push([0,4,,5]),y=null==(s=null==n?void 0:n.condition)?void 0:s.call(n,e,{getState:u,extra:l}),null===(w=y)||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,y];case 1:y=c.sent(),c.label=2;case 2:if(!1===y||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return!0,v=new Promise((function(e,t){return f.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:d||"Aborted"})}))})),a(i(h,e,null==(m=null==n?void 0:n.getPendingMeta)?void 0:m.call(n,{requestId:h,arg:e},{getState:u,extra:l}))),[4,Promise.race([v,Promise.resolve(t(e,{dispatch:a,getState:u,extra:l,requestId:h,signal:f.signal,abort:p,rejectWithValue:function(e,t){return new R(e,t)},fulfillWithValue:function(e,t){return new D(e,t)}})).then((function(t){if(t instanceof R)throw t;return t instanceof D?r(t.payload,h,e,t.meta):r(t,h,e)}))])];case 3:return g=c.sent(),[3,5];case 4:return b=c.sent(),g=b instanceof R?o(null,h,e,b.payload,b.meta):o(b,h,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&o.match(g)&&g.meta.condition||a(g),[2,g]}var w}))}))}();return Object.assign(m,{abort:p,requestId:h,arg:e,unwrap:function(){return m.then(j)}})}}),{pending:i,rejected:o,fulfilled:r,typePrefix:e})}e.withTypes=function(){return e}}();function j(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var M="listenerMiddleware";x(M+"/add"),x(M+"/removeAll"),x(M+"/remove");"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==r?r:globalThis);var L,F=function(e){return function(t){setTimeout(t,e)}};"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:F(10);Object(o.c)()}).call(this,n(48),n(39))},function(e,t,n){"use strict";var r=n(2),i=n(9),o=n(55),s=n(84),a=n(165),u=n(53),c=n(74);var l=n(160);var d={black:"#000",white:"#fff"};var h={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var f={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var p={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var m={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var g={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var y={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var v={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};const b=["mode","contrastThreshold","tonalOffset"],w={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:d.white,default:d.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},_={text:{primary:d.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:d.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function E(e,t,n,r){const i=r.light||r,o=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=Object(l.d)(e.main,i):"dark"===t&&(e.dark=Object(l.b)(e.main,o)))}function S(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:a=.2}=e,u=Object(i.a)(e,b),c=e.primary||function(e="light"){return"dark"===e?{main:g[200],light:g[50],dark:g[400]}:{main:g[700],light:g[400],dark:g[800]}}(t),S=e.secondary||function(e="light"){return"dark"===e?{main:f[200],light:f[50],dark:f[400]}:{main:f[500],light:f[300],dark:f[700]}}(t),I=e.error||function(e="light"){return"dark"===e?{main:p[500],light:p[300],dark:p[700]}:{main:p[700],light:p[400],dark:p[800]}}(t),k=e.info||function(e="light"){return"dark"===e?{main:y[400],light:y[300],dark:y[700]}:{main:y[700],light:y[500],dark:y[900]}}(t),T=e.success||function(e="light"){return"dark"===e?{main:v[400],light:v[300],dark:v[700]}:{main:v[800],light:v[500],dark:v[900]}}(t),x=e.warning||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:"#ed6c02",light:m[500],dark:m[900]}}(t);function O(e){return Object(l.c)(e,_.text.primary)>=n?_.text.primary:w.text.primary}const C=({color:e,name:t,mainShade:n=500,lightShade:i=300,darkShade:s=700})=>{if(!(e=Object(r.a)({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw new Error(Object(o.a)(11,t?` (${t})`:"",n));if("string"!=typeof e.main)throw new Error(Object(o.a)(12,t?` (${t})`:"",JSON.stringify(e.main)));return E(e,"light",i,a),E(e,"dark",s,a),e.contrastText||(e.contrastText=O(e.main)),e},N={dark:_,light:w};return Object(s.a)(Object(r.a)({common:Object(r.a)({},d),mode:t,primary:C({color:c,name:"primary"}),secondary:C({color:S,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:I,name:"error"}),warning:C({color:x,name:"warning"}),info:C({color:k,name:"info"}),success:C({color:T,name:"success"}),grey:h,contrastThreshold:n,getContrastText:O,augmentColor:C,tonalOffset:a},N[t]),u)}const I=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const k={textTransform:"uppercase"},T='"Roboto", "Helvetica", "Arial", sans-serif';function x(e,t){const n="function"==typeof t?t(e):t,{fontFamily:o=T,fontSize:a=14,fontWeightLight:u=300,fontWeightRegular:c=400,fontWeightMedium:l=500,fontWeightBold:d=700,htmlFontSize:h=16,allVariants:f,pxToRem:p}=n,m=Object(i.a)(n,I);const g=a/14,y=p||(e=>e/h*g+"rem"),v=(e,t,n,i,s)=>{return Object(r.a)({fontFamily:o,fontWeight:e,fontSize:y(t),lineHeight:n},o===T?{letterSpacing:(a=i/t,Math.round(1e5*a)/1e5)+"em"}:{},s,f);var a},b={h1:v(u,96,1.167,-1.5),h2:v(u,60,1.2,-.5),h3:v(c,48,1.167,0),h4:v(c,34,1.235,.25),h5:v(c,24,1.334,0),h6:v(l,20,1.6,.15),subtitle1:v(c,16,1.75,.15),subtitle2:v(l,14,1.57,.1),body1:v(c,16,1.5,.15),body2:v(c,14,1.43,.15),button:v(l,14,1.75,.4,k),caption:v(c,12,1.66,.4),overline:v(c,12,2.66,1,k)};return Object(s.a)(Object(r.a)({htmlFontSize:h,pxToRem:y,fontFamily:o,fontSize:a,fontWeightLight:u,fontWeightRegular:c,fontWeightMedium:l,fontWeightBold:d},b),m,{clone:!1})}function O(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}var C=["none",O(0,2,1,-1,0,1,1,0,0,1,3,0),O(0,3,1,-2,0,2,2,0,0,1,5,0),O(0,3,3,-2,0,3,4,0,0,1,8,0),O(0,2,4,-1,0,4,5,0,0,1,10,0),O(0,3,5,-1,0,5,8,0,0,1,14,0),O(0,3,5,-1,0,6,10,0,0,1,18,0),O(0,4,5,-2,0,7,10,1,0,2,16,1),O(0,5,5,-3,0,8,10,1,0,3,14,2),O(0,5,6,-3,0,9,12,1,0,3,16,2),O(0,6,6,-3,0,10,14,1,0,4,18,3),O(0,6,7,-4,0,11,15,1,0,4,20,3),O(0,7,8,-4,0,12,17,2,0,5,22,4),O(0,7,8,-4,0,13,19,2,0,5,24,4),O(0,7,9,-4,0,14,21,2,0,5,26,4),O(0,8,9,-5,0,15,22,2,0,6,28,5),O(0,8,10,-5,0,16,24,2,0,6,30,5),O(0,8,11,-5,0,17,26,2,0,6,32,5),O(0,9,11,-5,0,18,28,2,0,7,34,6),O(0,9,12,-6,0,19,29,2,0,7,36,6),O(0,10,13,-6,0,20,31,3,0,8,38,7),O(0,10,13,-6,0,21,33,3,0,8,40,7),O(0,10,14,-6,0,22,35,3,0,8,42,7),O(0,11,14,-7,0,23,36,3,0,9,44,8),O(0,11,15,-7,0,24,38,3,0,9,46,8)];const N=["duration","easing","delay"],A={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},R={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function D(e){return Math.round(e)+"ms"}function P(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function j(e){const t=Object(r.a)({},A,e.easing),n=Object(r.a)({},R,e.duration);return Object(r.a)({getAutoHeightDuration:P,create:(e=["all"],r={})=>{const{duration:o=n.standard,easing:s=t.easeInOut,delay:a=0}=r;Object(i.a)(r,N);return(Array.isArray(e)?e:[e]).map(e=>`${e} ${"string"==typeof o?o:D(o)} ${s} ${"string"==typeof a?a:D(a)}`).join(",")}},e,{easing:t,duration:n})}var M={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const L=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function F(e={},...t){const{mixins:n={},palette:l={},transitions:d={},typography:h={}}=e,f=Object(i.a)(e,L);if(e.vars)throw new Error(Object(o.a)(18));const p=S(l),m=Object(a.a)(e);let g=Object(s.a)(m,{mixins:(y=m.breakpoints,v=n,Object(r.a)({toolbar:{minHeight:56,[y.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[y.up("sm")]:{minHeight:64}}},v)),palette:p,shadows:C.slice(),typography:x(p,h),transitions:j(d),zIndex:Object(r.a)({},M)});var y,v;return g=Object(s.a)(g,f),g=t.reduce((e,t)=>Object(s.a)(e,t),g),g.unstable_sxConfig=Object(r.a)({},u.a,null==f?void 0:f.unstable_sxConfig),g.unstable_sx=function(e){return Object(c.a)({sx:e,theme:this})},g}const U=F();t.a=U},function(e,t,n){"use strict";t.a=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},function(e,t,n){"use strict";t.a=function(e){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var r=e(n);return t.set(n,r),r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(114),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default,e.exports=t.default},,function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(62);t.a=r.a},function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),i=n(0),o=n(9),s=n(13),a=n(158),u=n(16),c=n(22),l=n(14),d=n(159),h=n(143);function f(e){return Object(h.a)("MuiSvgIcon",e)}Object(d.a)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(5);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=Object(l.a)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color"+Object(u.a)(n.color)],t["fontSize"+Object(u.a)(n.fontSize)]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,s,a,u,c,l,d,h,f,p,m,g,y,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(r=n.create)?void 0:r.call(n,"fill",{duration:null==(i=e.transitions)||null==(o=i.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(s=e.typography)||null==(a=s.pxToRem)?void 0:a.call(s,20))||"1.25rem",medium:(null==(u=e.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=e.typography)||null==(d=l.pxToRem)?void 0:d.call(l,35))||"2.1875rem"}[t.fontSize],color:null!=(h=null==(f=(e.vars||e).palette)||null==(p=f[t.color])?void 0:p.main)?h:{action:null==(m=(e.vars||e).palette)||null==(g=m.action)?void 0:g.active,disabled:null==(y=(e.vars||e).palette)||null==(v=y.action)?void 0:v.disabled,inherit:void 0}[t.color]}}),y=i.forwardRef((function(e,t){const n=Object(c.a)({props:e,name:"MuiSvgIcon"}),{children:i,className:l,color:d="inherit",component:h="svg",fontSize:y="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:w,viewBox:_="0 0 24 24"}=n,E=Object(o.a)(n,m),S=Object(r.a)({},n,{color:d,component:h,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:_}),I={};b||(I.viewBox=_);const k=(e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&"color"+Object(u.a)(t),"fontSize"+Object(u.a)(n)]};return Object(a.a)(i,f,r)})(S);return Object(p.jsxs)(g,Object(r.a)({as:h,className:Object(s.a)(k.root,l),focusable:"false",color:v,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:t},I,E,{ownerState:S,children:[i,w?Object(p.jsx)("title",{children:w}):null]}))}));y.muiName="SvgIcon";var v=y;function b(e,t){function n(n,i){return Object(p.jsx)(v,Object(r.a)({"data-testid":t+"Icon",ref:i},n,{children:e}))}return n.muiName=v.muiName,i.memo(i.forwardRef(n))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=function(e,t){return e===t};function i(e,t){var n,i,o="object"==typeof t?t:{equalityCheck:t},s=o.equalityCheck,a=void 0===s?r:s,u=o.maxSize,c=void 0===u?1:u,l=o.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}}(a),h=1===c?(n=d,{get:function(e){return i&&n(i.key,e)?i.value:"NOT_FOUND"},put:function(e,t){i={key:e,value:t}},getEntries:function(){return i?[i]:[]},clear:function(){i=void 0}}):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var i=n[r];return r>0&&(n.splice(r,1),n.unshift(i)),i.value}return"NOT_FOUND"}return{get:r,put:function(t,i){"NOT_FOUND"===r(t)&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,d);function f(){var t=h.get(arguments);if("NOT_FOUND"===t){if(t=e.apply(null,arguments),l){var n=h.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}h.put(arguments,t)}return t}return f.clearCache=function(){return h.clear()},f}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var s,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"==typeof c&&(u=c,c=r.pop()),"function"!=typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,d=l.memoizeOptions,h=void 0===d?n:d,f=Array.isArray(h)?h:[h],p=o(r),m=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),g=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return s=m.apply(null,e)}));return Object.assign(g,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return s},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),g};return i}var a=s(i)},function(e,t,n){"use strict";var r=n(0);let i,o=!0,s=!1;const a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function c(){o=!1}function l(){"hidden"===this.visibilityState&&s&&(o=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return o||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!a[t]||e.readOnly)||("TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable)}(t)}t.a=function(){const e=r.useCallback(e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",l,!0))},[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(s=!0,window.clearTimeout(i),i=window.setTimeout(()=>{s=!1},100),t.current=!1,!0)},ref:e}}},function(e,t,n){"use strict";var r=n(7),i=n(10),o=n(27);var s=function(...e){const t=e.reduce((e,t)=>(t.filterProps.forEach(n=>{e[n]=t}),e),{}),n=e=>Object.keys(e).reduce((n,r)=>t[r]?Object(o.a)(n,t[r](e)):n,{});return n.propTypes={},n.filterProps=e.reduce((e,t)=>e.concat(t.filterProps),[]),n},a=n(18);function u(e){return"number"!=typeof e?e:e+"px solid"}const c=Object(i.a)({prop:"border",themeKey:"borders",transform:u}),l=Object(i.a)({prop:"borderTop",themeKey:"borders",transform:u}),d=Object(i.a)({prop:"borderRight",themeKey:"borders",transform:u}),h=Object(i.a)({prop:"borderBottom",themeKey:"borders",transform:u}),f=Object(i.a)({prop:"borderLeft",themeKey:"borders",transform:u}),p=Object(i.a)({prop:"borderColor",themeKey:"palette"}),m=Object(i.a)({prop:"borderTopColor",themeKey:"palette"}),g=Object(i.a)({prop:"borderRightColor",themeKey:"palette"}),y=Object(i.a)({prop:"borderBottomColor",themeKey:"palette"}),v=Object(i.a)({prop:"borderLeftColor",themeKey:"palette"}),b=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=Object(r.b)(e.theme,"shape.borderRadius",4,"borderRadius"),n=e=>({borderRadius:Object(r.c)(t,e)});return Object(a.b)(e,e.borderRadius,n)}return null};b.propTypes={},b.filterProps=["borderRadius"];s(c,l,d,h,f,p,m,g,y,v,b);const w=e=>{if(void 0!==e.gap&&null!==e.gap){const t=Object(r.b)(e.theme,"spacing",8,"gap"),n=e=>({gap:Object(r.c)(t,e)});return Object(a.b)(e,e.gap,n)}return null};w.propTypes={},w.filterProps=["gap"];const _=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=Object(r.b)(e.theme,"spacing",8,"columnGap"),n=e=>({columnGap:Object(r.c)(t,e)});return Object(a.b)(e,e.columnGap,n)}return null};_.propTypes={},_.filterProps=["columnGap"];const E=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=Object(r.b)(e.theme,"spacing",8,"rowGap"),n=e=>({rowGap:Object(r.c)(t,e)});return Object(a.b)(e,e.rowGap,n)}return null};E.propTypes={},E.filterProps=["rowGap"];s(w,_,E,Object(i.a)({prop:"gridColumn"}),Object(i.a)({prop:"gridRow"}),Object(i.a)({prop:"gridAutoFlow"}),Object(i.a)({prop:"gridAutoColumns"}),Object(i.a)({prop:"gridAutoRows"}),Object(i.a)({prop:"gridTemplateColumns"}),Object(i.a)({prop:"gridTemplateRows"}),Object(i.a)({prop:"gridTemplateAreas"}),Object(i.a)({prop:"gridArea"}));function S(e,t){return"grey"===t?t:e}s(Object(i.a)({prop:"color",themeKey:"palette",transform:S}),Object(i.a)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:S}),Object(i.a)({prop:"backgroundColor",themeKey:"palette",transform:S}));function I(e){return e<=1&&0!==e?100*e+"%":e}const k=Object(i.a)({prop:"width",transform:I}),T=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n,r,i;return{maxWidth:(null==(n=e.theme)||null==(r=n.breakpoints)||null==(i=r.values)?void 0:i[t])||a.d[t]||I(t)}};return Object(a.b)(e,e.maxWidth,t)}return null};T.filterProps=["maxWidth"];const x=Object(i.a)({prop:"minWidth",transform:I}),O=Object(i.a)({prop:"height",transform:I}),C=Object(i.a)({prop:"maxHeight",transform:I}),N=Object(i.a)({prop:"minHeight",transform:I});Object(i.a)({prop:"size",cssProperty:"width",transform:I}),Object(i.a)({prop:"size",cssProperty:"height",transform:I});s(k,T,x,O,C,N,Object(i.a)({prop:"boxSizing"}));const A={border:{themeKey:"borders",transform:u},borderTop:{themeKey:"borders",transform:u},borderRight:{themeKey:"borders",transform:u},borderBottom:{themeKey:"borders",transform:u},borderLeft:{themeKey:"borders",transform:u},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:b},color:{themeKey:"palette",transform:S},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:S},backgroundColor:{themeKey:"palette",transform:S},p:{style:r.e},pt:{style:r.e},pr:{style:r.e},pb:{style:r.e},pl:{style:r.e},px:{style:r.e},py:{style:r.e},padding:{style:r.e},paddingTop:{style:r.e},paddingRight:{style:r.e},paddingBottom:{style:r.e},paddingLeft:{style:r.e},paddingX:{style:r.e},paddingY:{style:r.e},paddingInline:{style:r.e},paddingInlineStart:{style:r.e},paddingInlineEnd:{style:r.e},paddingBlock:{style:r.e},paddingBlockStart:{style:r.e},paddingBlockEnd:{style:r.e},m:{style:r.d},mt:{style:r.d},mr:{style:r.d},mb:{style:r.d},ml:{style:r.d},mx:{style:r.d},my:{style:r.d},margin:{style:r.d},marginTop:{style:r.d},marginRight:{style:r.d},marginBottom:{style:r.d},marginLeft:{style:r.d},marginX:{style:r.d},marginY:{style:r.d},marginInline:{style:r.d},marginInlineStart:{style:r.d},marginInlineEnd:{style:r.d},marginBlock:{style:r.d},marginBlockStart:{style:r.d},marginBlockEnd:{style:r.d},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:w},rowGap:{style:E},columnGap:{style:_},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:I},maxWidth:{style:T},minWidth:{transform:I},height:{transform:I},maxHeight:{transform:I},minHeight:{transform:I},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};t.a=A},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));let r,i;const o=new WeakMap,s=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(p(this),t),f(o.get(this))}:function(...t){return f(e.apply(p(this),t))}:function(t,...n){const r=e.call(p(this),t,...n);return a.set(r,t.sort?t.sort():[t]),f(r)}}function h(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});s.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,l):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(f(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),c.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=h(e);return t!==e&&(u.set(e,t),c.set(t,e)),t}const p=e=>c.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=f(s);return r&&s.addEventListener("upgradeneeded",e=>{r(f(s.result),e.oldVersion,e.newVersion,f(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],v=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(v.get(t))return v.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return v.set(t,o),o}l=(e=>({...e,get:(t,n,r)=>b(t,n)||e.get(t,n,r),has:(t,n)=>!!b(t,n)||e.has(t,n)}))(l)},function(e,t,n){"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,"a",(function(){return r}))},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,i=n(121);var o=((r=i)&&r.__esModule?r:{default:r}).default,s=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM;t.default=s},function(e,t,n){"use strict";e.exports=n(94)},function(e,t,n){"use strict";var r=n(41),i=n.n(r);t.a=function(e,t){return i()(e,t)}},function(e,t,n){"use strict";var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i="-ms-",o="-moz-",s="-webkit-",a="comm",u="rule",c="decl",l="@keyframes",d=Math.abs,h=String.fromCharCode,f=Object.assign;function p(e,t){return 45^b(e,0)?(((t<<2^b(e,0))<<2^b(e,1))<<2^b(e,2))<<2^b(e,3):0}function m(e){return e.trim()}function g(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,n){return e.replace(t,n)}function v(e,t){return e.indexOf(t)}function b(e,t){return 0|e.charCodeAt(t)}function w(e,t,n){return e.slice(t,n)}function _(e){return e.length}function E(e){return e.length}function S(e,t){return t.push(e),e}function I(e,t){return e.map(t).join("")}var k=1,T=1,x=0,O=0,C=0,N="";function A(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:k,column:T,length:s,return:""}}function R(e,t){return f(A("",null,null,"",null,null,0),e,{length:-e.length},t)}function D(){return C=O<x?b(N,O++):0,T++,10===C&&(T=1,k++),C}function P(){return b(N,O)}function j(){return O}function M(e,t){return w(N,e,t)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(e){return k=T=1,x=_(N=e),O=0,[]}function U(e){return N="",e}function V(e){return m(M(O-1,function e(t){for(;D();)switch(C){case t:return O;case 34:case 39:34!==t&&39!==t&&e(C);break;case 40:41===t&&e(t);break;case 92:D()}return O}(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(C=P())&&C<33;)D();return L(e)>2||L(C)>3?"":" "}function q(e,t){for(;--t&&D()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return M(e,j()+(t<6&&32==P()&&32==D()))}function B(e,t){for(;D()&&e+C!==57&&(e+C!==84||47!==P()););return"/*"+M(t,O-1)+"*"+h(47===e?e:D())}function $(e){for(;!L(P());)D();return M(e,O)}function W(e){return U(function e(t,n,r,i,o,s,a,u,c){var l=0,d=0,f=a,p=0,m=0,g=0,w=1,E=1,I=1,x=0,A="",R=o,M=s,L=i,F=A;for(;E;)switch(g=x,x=D()){case 40:if(108!=g&&58==b(F,f-1)){-1!=v(F+=y(V(x),"&","&\f"),"&\f")&&(I=-1);break}case 34:case 39:case 91:F+=V(x);break;case 9:case 10:case 13:case 32:F+=z(g);break;case 92:F+=q(j()-1,7);continue;case 47:switch(P()){case 42:case 47:S(K(B(D(),j()),n,r),c);break;default:F+="/"}break;case 123*w:u[l++]=_(F)*I;case 125*w:case 59:case 0:switch(x){case 0:case 125:E=0;case 59+d:m>0&&_(F)-f&&S(m>32?G(F+";",i,r,f-1):G(y(F," ","")+";",i,r,f-2),c);break;case 59:F+=";";default:if(S(L=H(F,n,r,l,d,o,u,A,R=[],M=[],f),s),123===x)if(0===d)e(F,n,L,L,R,s,f,u,M);else switch(99===p&&110===b(F,3)?100:p){case 100:case 109:case 115:e(t,L,L,i&&S(H(t,L,L,0,0,o,u,A,o,R=[],f),M),o,M,f,u,i?R:M);break;default:e(F,L,L,L,[""],M,0,u,M)}}l=d=m=0,w=I=1,A=F="",f=a;break;case 58:f=1+_(F),m=g;default:if(w<1)if(123==x)--w;else if(125==x&&0==w++&&125==(C=O>0?b(N,--O):0,T--,10===C&&(T=1,k--),C))continue;switch(F+=h(x),x*w){case 38:I=d>0?1:(F+="\f",-1);break;case 44:u[l++]=(_(F)-1)*I,I=1;break;case 64:45===P()&&(F+=V(D())),p=P(),d=f=_(A=F+=$(j())),x++;break;case 45:45===g&&2==_(F)&&(w=0)}}return s}("",null,null,null,[""],e=F(e),0,[0],e))}function H(e,t,n,r,i,o,s,a,c,l,h){for(var f=i-1,p=0===i?o:[""],g=E(p),v=0,b=0,_=0;v<r;++v)for(var S=0,I=w(e,f+1,f=d(b=s[v])),k=e;S<g;++S)(k=m(b>0?p[S]+" "+I:y(I,/&\f/g,p[S])))&&(c[_++]=k);return A(e,t,n,0===i?u:a,c,l,h)}function K(e,t,n){return A(e,t,n,a,h(C),w(e,2,-2),0)}function G(e,t,n,r){return A(e,t,n,c,w(e,0,r),w(e,r+1,-1),r)}function Q(e,t){for(var n="",r=E(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@import":case c:return e.return=e.return||e.value;case a:return"";case l:return e.return=e.value+"{"+Q(e.children,r)+"}";case u:e.value=e.props.join(",")}return _(n=Q(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e){return function(t){t.root||(t=t.return)&&e(t)}}n(45),n(44);var J=function(e,t,n){for(var r=0,i=0;r=i,i=P(),38===r&&12===i&&(t[n]=1),!L(i);)D();return M(e,O)},Z=function(e,t){return U(function(e,t){var n=-1,r=44;do{switch(L(r)){case 0:38===r&&12===P()&&(t[n]=1),e[n]+=J(O-1,t,n);break;case 2:e[n]+=V(r);break;case 4:if(44===r){e[++n]=58===P()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=h(r)}}while(r=D());return e}(F(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(n))&&!r){ee.set(e,!0);for(var i=[],o=Z(t,i),s=n.props,a=0,u=0;a<o.length;a++)for(var c=0;c<s.length;c++,u++)e.props[u]=i[a]?o[a].replace(/&\f/g,s[c]):s[c]+" "+o[a]}}},ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case c:e.return=function e(t,n){switch(p(t,n)){case 5103:return s+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s+t+o+t+i+t+t;case 6828:case 4268:return s+t+i+t+t;case 6165:return s+t+i+"flex-"+t+t;case 5187:return s+t+y(t,/(\w+).+(:[^]+)/,s+"box-$1$2"+i+"flex-$1$2")+t;case 5443:return s+t+i+"flex-item-"+y(t,/flex-|-self/,"")+t;case 4675:return s+t+i+"flex-line-pack"+y(t,/align-content|flex-|-self/,"")+t;case 5548:return s+t+i+y(t,"shrink","negative")+t;case 5292:return s+t+i+y(t,"basis","preferred-size")+t;case 6060:return s+"box-"+y(t,"-grow","")+s+t+i+y(t,"grow","positive")+t;case 4554:return s+y(t,/([^-])(transform)/g,"$1"+s+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+i+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s+t+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,s+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-n>6)switch(b(t,n+1)){case 109:if(45!==b(t,n+4))break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+o+(108==b(t,n+3)?"$3":"$2-$3"))+t;case 115:return~v(t,"stretch")?e(y(t,"stretch","fill-available"),n)+t:t}break;case 4949:if(115!==b(t,n+1))break;case 6444:switch(b(t,_(t)-3-(~v(t,"!important")&&10))){case 107:return y(t,":",":"+s)+t;case 101:return y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+s+(45===b(t,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+i+"$2box$3")+t}break;case 5936:switch(b(t,n+11)){case 114:return s+t+i+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s+t+i+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s+t+i+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return s+t+i+t+t}return t}(e.value,e.length);break;case l:return Q([R(e,{value:y(e.value,"@","@"+s)})],r);case u:if(e.length)return I(e.props,(function(t){switch(g(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Q([R(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Q([R(e,{props:[y(t,/:(plac\w+)/,":"+s+"input-$1")]}),R(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]}),R(e,{props:[y(t,/:(plac\w+)/,i+"input-$1")]})],r)}return""}))}}];t.a=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i=e.stylisPlugins||re;var o,s,a={},u=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)a[t[n]]=!0;u.push(e)}));var c=[te,ne];var l,d=[Y,X((function(e){l.insert(e)}))],h=function(e){var t=E(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}(c.concat(i,d));s=function(e,t,n,r){l=n,Q(W(e?e+"{"+t.styles+"}":t.styles),h),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new r({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:s};return f.sheet.hydrate(u),f}},function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var i=r();i.withExtraArgument=r,t.a=i},function(e,t,n){"use strict";var r=n(0);const i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.a=i},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)([(0,o.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,o.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,o.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt");t.default=s},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(55);function i(e){if("string"!=typeof e)throw new Error(Object(r.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},,function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]).filter(s)};
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
var r=/input|select|textarea|button|object|iframe/;function i(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e),r=n.getPropertyValue("display");return t?"contents"!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,n):"none"===r}catch(e){return console.warn("Failed to inspect element style"),!1}}function o(e,t){var n=e.nodeName.toLowerCase();return(r.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),i(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&o(e,!n)}e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){a&&(a.removeAttribute?a.removeAttribute("aria-hidden"):null!=a.length?a.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(a).forEach((function(e){return e.removeAttribute("aria-hidden")})));a=null},t.log=function(){0},t.assertNodeList=u,t.setElement=function(e){var t=e;if("string"==typeof t&&s.canUseDOM){var n=document.querySelectorAll(t);u(n,t),t=n}return a=t||a},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.setAttribute("aria-hidden","true")}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.removeAttribute("aria-hidden")}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){a=null};var r,i=n(120),o=(r=i)&&r.__esModule?r:{default:r},s=n(57);var a=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||a;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,o.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(i.openInstances.length),i.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){i=new r};var r=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},i=new r;t.default=i},function(e,t,n){"use strict";var r=n(40);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},function(e,t,n){"use strict";e.exports=n(95)},function(e,t,n){"use strict";e.exports=n(98)},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.default=s},function(e,t,n){"use strict";var r=n(64),i=n(27),o=n(10),s=n(18),a=n(53);const u=function(){function e(e,t,n,i){const a={[e]:t,theme:n},u=i[e];if(!u)return{[e]:t};const{cssProperty:c=e,themeKey:l,transform:d,style:h}=u;if(null==t)return null;const f=Object(o.b)(n,l)||{};if(h)return h(a);return Object(s.b)(a,t,t=>{let n=Object(o.c)(f,d,t);return t===n&&"string"==typeof t&&(n=Object(o.c)(f,d,`${e}${"default"===t?"":Object(r.a)(t)}`,t)),!1===c?n:{[c]:n}})}return function t(n){var r;const{sx:o,theme:u={}}=n||{};if(!o)return null;const c=null!=(r=u.unstable_sxConfig)?r:a.a;function l(n){let r=n;if("function"==typeof n)r=n(u);else if("object"!=typeof n)return n;if(!r)return null;const o=Object(s.a)(u.breakpoints),a=Object.keys(o);let l=o;return Object.keys(r).forEach(n=>{const o=(a=r[n],d=u,"function"==typeof a?a(d):a);var a,d;if(null!=o)if("object"==typeof o)if(c[n])l=Object(i.a)(l,e(n,o,u,c));else{const e=Object(s.b)({theme:u},o,e=>({[n]:e}));!function(...e){const t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]),n=new Set(t);return e.every(e=>n.size===Object.keys(e).length)}(e,o)?l=Object(i.a)(l,e):l[n]=t({sx:o,theme:u})}else l=Object(i.a)(l,e(n,o,u,c))}),Object(s.c)(a,l)}return Array.isArray(o)?o.map(l):l(o)}}();u.filterProps=["sx"],t.a=u},function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5z"}),"FeaturedPlayListOutlined");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}),"Assessment");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M16 14v3H8v-7c0-2.21 1.79-4 4-4 .85 0 1.64.26 2.28.72l1.43-1.43c-.64-.51-1.39-.88-2.21-1.09v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"}),"NotificationAddOutlined");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"LanguageOutlined");t.default=s},function(e,t,n){"use strict";var r=n(29);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(30)),o=n(5),s=(0,i.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=s},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2);function i(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function o(e,t,n={clone:!0}){const s=n.clone?Object(r.a)({},e):e;return i(e)&&i(t)&&Object.keys(t).forEach(r=>{"__proto__"!==r&&(i(t[r])&&r in e&&i(e[r])?s[r]=o(e[r],t[r],n):n.clone?s[r]=i(t[r])?function e(t){if(!i(t))return t;const n={};return Object.keys(t).forEach(r=>{n[r]=e(t[r])}),n}(t[r]):t[r]:s[r]=t[r])}),s}},,,,function(e,t,n){"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var _=w.prototype=new b;_.constructor=w,g(_,v.prototype),_.isPureReactComponent=!0;var E=Array.isArray,S=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var i,o={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=t[i]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===o[i]&&(o[i]=u[i]);return{$$typeof:r,type:e,key:s,ref:a,props:o,_owner:I.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case i:u=!0}}if(u)return s=s(u=e),e=""===o?"."+C(u,0):o,E(s)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),N(s,t,n,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",E(e))for(var c=0;c<e.length;c++){var l=o+C(a=e[c],c);u+=N(a,t,n,l,s)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),c=0;!(a=e.next()).done;)u+=N(a=a.value,t,n,l=o+C(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return N(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},P={transition:null},j={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:P,ReactCurrentOwner:I};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=w,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=I.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)S.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:r,type:e.type,key:o,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},function(e,t,n){"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(90);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var l=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},p={};function m(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(f,e)&&(h.test(e)?p[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),E=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var D=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var P=Symbol.iterator;function j(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=P&&e[P]||e["@@iterator"])?e:null}var M,L=Object.assign;function F(e){if(void 0===M)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var U=!1;function V(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a]){var u="\n"+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=s&&0<=a);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function z(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function q(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case S:return"Fragment";case E:return"Portal";case k:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case N:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case x:return(t.displayName||"Context")+".Consumer";case T:return(t._context.displayName||"Context")+".Provider";case O:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case A:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case R:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=$(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function H(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=B(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){Y(e,t);var n=B(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Z(e,t.type,n):t.hasOwnProperty("defaultValue")&&Z(e,t.type,B(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Z(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ee=Array.isArray;function te(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(ee(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function ie(e,t){var n=B(t.value),r=B(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ae(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||de.hasOwnProperty(e)&&de[e]?(""+t).trim():t+"px"}function pe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=fe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(de).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var me=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(e,t){if(t){if(me[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,_e=null,Ee=null;function Se(e){if(e=hi(e)){if("function"!=typeof we)throw Error(o(280));var t=e.stateNode;t&&(t=pi(t),we(e.stateNode,e.type,t))}}function Ie(e){_e?Ee?Ee.push(e):Ee=[e]:_e=e}function ke(){if(_e){var e=_e,t=Ee;if(Ee=_e=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Te(e,t){return e(t)}function xe(){}var Oe=!1;function Ce(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Te(e,t,n)}finally{Oe=!1,(null!==_e||null!==Ee)&&(xe(),ke())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=pi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));return n}var Ae=!1;if(l)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(e){Ae=!1}function De(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Pe=!1,je=null,Me=!1,Le=null,Fe={onError:function(e){Pe=!0,je=e}};function Ue(e,t,n,r,i,o,s,a,u){Pe=!1,je=null,De.apply(Fe,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function ze(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(Ve(e)!==e)throw Error(o(188))}function Be(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qe(i),e;if(s===r)return qe(i),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var $e=i.unstable_scheduleCallback,We=i.unstable_cancelCallback,He=i.unstable_shouldYield,Ke=i.unstable_requestPaint,Ge=i.unstable_now,Qe=i.unstable_getCurrentPriorityLevel,Ye=i.unstable_ImmediatePriority,Xe=i.unstable_UserBlockingPriority,Je=i.unstable_NormalPriority,Ze=i.unstable_LowPriority,et=i.unstable_IdlePriority,tt=null,nt=null;var rt=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(it(e)/ot|0)|0},it=Math.log,ot=Math.LN2;var st=64,at=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ct(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?r=ut(a):0!==(o&=s)&&(r=ut(o))}else 0!==(s=n&~i)?r=ut(s):0!==o&&(r=ut(o));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-rt(t)),r|=e[n],t&=~i;return r}function lt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:default:return-1}}function dt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=st;return 0==(4194240&(st<<=1))&&(st=64),e}function ft(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-rt(t)]=n}function mt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var gt=0;function yt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var vt,bt,wt,_t,Et,St=!1,It=[],kt=null,Tt=null,xt=null,Ot=new Map,Ct=new Map,Nt=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(t.pointerId)}}function Dt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=hi(t))&&bt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Pt(e){var t=di(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=ze(n)))return e.blockedOn=t,void Et(e.priority,(function(){wt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function jt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ht(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=hi(n))&&bt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Mt(e,t,n){jt(e)&&n.delete(t)}function Lt(){St=!1,null!==kt&&jt(kt)&&(kt=null),null!==Tt&&jt(Tt)&&(Tt=null),null!==xt&&jt(xt)&&(xt=null),Ot.forEach(Mt),Ct.forEach(Mt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,St||(St=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Lt)))}function Ut(e){function t(t){return Ft(t,e)}if(0<It.length){Ft(It[0],e);for(var n=1;n<It.length;n++){var r=It[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==kt&&Ft(kt,e),null!==Tt&&Ft(Tt,e),null!==xt&&Ft(xt,e),Ot.forEach(t),Ct.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)Pt(n),null===n.blockedOn&&Nt.shift()}var Vt=w.ReactCurrentBatchConfig,zt=!0;function qt(e,t,n,r){var i=gt,o=Vt.transition;Vt.transition=null;try{gt=1,$t(e,t,n,r)}finally{gt=i,Vt.transition=o}}function Bt(e,t,n,r){var i=gt,o=Vt.transition;Vt.transition=null;try{gt=4,$t(e,t,n,r)}finally{gt=i,Vt.transition=o}}function $t(e,t,n,r){if(zt){var i=Ht(e,t,n,r);if(null===i)Lr(e,t,r,Wt,n),Rt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return kt=Dt(kt,e,t,n,r,i),!0;case"dragenter":return Tt=Dt(Tt,e,t,n,r,i),!0;case"mouseover":return xt=Dt(xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ct.set(o,Dt(Ct.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==i;){var o=hi(i);if(null!==o&&vt(o),null===(o=Ht(e,t,n,r))&&Lr(e,t,r,Wt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Lr(e,t,r,null,n)}}var Wt=null;function Ht(e,t,n,r){if(Wt=null,null!==(e=di(e=be(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=ze(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ye:return 1;case Xe:return 4;case Je:case Ze:return 16;case et:return 536870912;default:return 16}default:return 16}}var Gt=null,Qt=null,Yt=null;function Xt(){if(Yt)return Yt;var e,t,n=Qt,r=n.length,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return Yt=i.slice(e,1<t?1-t:void 0)}function Jt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Zt(){return!0}function en(){return!1}function tn(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Zt:en,this.isPropagationStopped=en,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Zt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Zt)},persist:function(){},isPersistent:Zt}),t}var nn,rn,on,sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},an=tn(sn),un=L({},sn,{view:0,detail:0}),cn=tn(un),ln=L({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==on&&(on&&"mousemove"===e.type?(nn=e.screenX-on.screenX,rn=e.screenY-on.screenY):rn=nn=0,on=e),nn)},movementY:function(e){return"movementY"in e?e.movementY:rn}}),dn=tn(ln),hn=tn(L({},ln,{dataTransfer:0})),fn=tn(L({},un,{relatedTarget:0})),pn=tn(L({},sn,{animationName:0,elapsedTime:0,pseudoElement:0})),mn=tn(L({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),gn=tn(L({},sn,{data:0})),yn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=bn[e])&&!!t[e]}function _n(){return wn}var En=tn(L({},un,{key:function(e){if(e.key){var t=yn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Jt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?vn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_n,charCode:function(e){return"keypress"===e.type?Jt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Jt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Sn=tn(L({},ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),In=tn(L({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_n})),kn=tn(L({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=tn(L({},ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=[9,13,27,32],On=l&&"CompositionEvent"in window,Cn=null;l&&"documentMode"in document&&(Cn=document.documentMode);var Nn=l&&"TextEvent"in window&&!Cn,An=l&&(!On||Cn&&8<Cn&&11>=Cn),Rn=String.fromCharCode(32),Dn=!1;function Pn(e,t){switch(e){case"keyup":return-1!==xn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Mn=!1;var Ln={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ln[e.type]:"textarea"===t}function Un(e,t,n,r){Ie(r),0<(t=Ur(t,"onChange")).length&&(n=new an("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,zn=null;function qn(e){Ar(e,0)}function Bn(e){if(H(fi(e)))return e}function $n(e,t){if("change"===e)return t}var Wn=!1;if(l){var Hn;if(l){var Kn="oninput"in document;if(!Kn){var Gn=document.createElement("div");Gn.setAttribute("oninput","return;"),Kn="function"==typeof Gn.oninput}Hn=Kn}else Hn=!1;Wn=Hn&&(!document.documentMode||9<document.documentMode)}function Qn(){Vn&&(Vn.detachEvent("onpropertychange",Yn),zn=Vn=null)}function Yn(e){if("value"===e.propertyName&&Bn(zn)){var t=[];Un(t,zn,e,be(e)),Ce(qn,t)}}function Xn(e,t,n){"focusin"===e?(Qn(),zn=n,(Vn=t).attachEvent("onpropertychange",Yn)):"focusout"===e&&Qn()}function Jn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Bn(zn)}function Zn(e,t){if("click"===e)return Bn(t)}function er(e,t){if("input"===e||"change"===e)return Bn(t)}var tr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nr(e,t){if(tr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!tr(e[i],t[i]))return!1}return!0}function rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ir(e,t){var n,r=rr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rr(r)}}function or(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function ar(e){var t=or(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&sr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ir(n,o);var s=ir(n,r);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ur=l&&"documentMode"in document&&11>=document.documentMode,cr=null,lr=null,dr=null,hr=!1;function fr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;hr||null==cr||cr!==K(r)||("selectionStart"in(r=cr)&&sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},dr&&nr(dr,r)||(dr=r,0<(r=Ur(lr,"onSelect")).length&&(t=new an("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},gr={},yr={};function vr(e){if(gr[e])return gr[e];if(!mr[e])return e;var t,n=mr[e];for(t in n)if(n.hasOwnProperty(t)&&t in yr)return gr[e]=n[t];return e}l&&(yr=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);var br=vr("animationend"),wr=vr("animationiteration"),_r=vr("animationstart"),Er=vr("transitionend"),Sr=new Map,Ir="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){Sr.set(e,t),u(t,[e])}for(var Tr=0;Tr<Ir.length;Tr++){var xr=Ir[Tr];kr(xr.toLowerCase(),"on"+(xr[0].toUpperCase()+xr.slice(1)))}kr(br,"onAnimationEnd"),kr(wr,"onAnimationIteration"),kr(_r,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(Er,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,u,c){if(Ue.apply(this,arguments),Pe){if(!Pe)throw Error(o(198));var l=je;Pe=!1,je=null,Me||(Me=!0,Le=l)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Nr(i,a,c),o=u}else for(s=0;s<r.length;s++){if(u=(a=r[s]).instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Nr(i,a,c),o=u}}}if(Me)throw e=Le,Me=!1,Le=null,e}function Rr(e,t){var n=t[ui];void 0===n&&(n=t[ui]=new Set);var r=e+"__bubble";n.has(r)||(Mr(t,e,2,!1),n.add(r))}function Dr(e,t,n){var r=0;t&&(r|=4),Mr(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Pr]){e[Pr]=!0,s.forEach((function(t){"selectionchange"!==t&&(Cr.has(t)||Dr(t,!1,e),Dr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Pr]||(t[Pr]=!0,Dr("selectionchange",!1,t))}}function Mr(e,t,n,r){switch(Kt(t)){case 1:var i=qt;break;case 4:i=Bt;break;default:i=$t}n=i.bind(null,t,n,e),i=void 0,!Ae||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lr(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var u=s.tag;if((3===u||4===u)&&((u=s.stateNode.containerInfo)===i||8===u.nodeType&&u.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=di(a)))return;if(5===(u=s.tag)||6===u){r=o=s;continue e}a=a.parentNode}}r=r.return}Ce((function(){var r=o,i=be(n),s=[];e:{var a=Sr.get(e);if(void 0!==a){var u=an,c=e;switch(e){case"keypress":if(0===Jt(n))break e;case"keydown":case"keyup":u=En;break;case"focusin":c="focus",u=fn;break;case"focusout":c="blur",u=fn;break;case"beforeblur":case"afterblur":u=fn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=In;break;case br:case wr:case _r:u=pn;break;case Er:u=kn;break;case"scroll":u=cn;break;case"wheel":u=Tn;break;case"copy":case"cut":case"paste":u=mn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Sn}var l=0!=(4&t),d=!l&&"scroll"===e,h=l?null!==a?a+"Capture":null:a;l=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=Ne(p,h))&&l.push(Fr(p,m,f)))),d)break;p=p.return}0<l.length&&(a=new u(a,c,null,n,i),s.push({event:a,listeners:l}))}}if(0==(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===ve||!(c=n.relatedTarget||n.fromElement)||!di(c)&&!c[ai])&&(u||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?di(c):null)&&(c!==(d=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(u=null,c=r),u!==c)){if(l=dn,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(l=Sn,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==u?a:fi(u),f=null==c?a:fi(c),(a=new l(m,p+"leave",u,n,i)).target=d,a.relatedTarget=f,m=null,di(i)===r&&((l=new l(h,p+"enter",c,n,i)).target=f,l.relatedTarget=d,m=l),d=m,u&&c)e:{for(h=c,p=0,f=l=u;f;f=Vr(f))p++;for(f=0,m=h;m;m=Vr(m))f++;for(;0<p-f;)l=Vr(l),p--;for(;0<f-p;)h=Vr(h),f--;for(;p--;){if(l===h||null!==h&&l===h.alternate)break e;l=Vr(l),h=Vr(h)}l=null}else l=null;null!==u&&zr(s,a,u,l,!1),null!==c&&null!==d&&zr(s,d,c,l,!0)}if("select"===(u=(a=r?fi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===u&&"file"===a.type)var g=$n;else if(Fn(a))if(Wn)g=er;else{g=Jn;var y=Xn}else(u=a.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=Zn);switch(g&&(g=g(e,r))?Un(s,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&Z(a,"number",a.value)),y=r?fi(r):window,e){case"focusin":(Fn(y)||"true"===y.contentEditable)&&(cr=y,lr=r,dr=null);break;case"focusout":dr=lr=cr=null;break;case"mousedown":hr=!0;break;case"contextmenu":case"mouseup":case"dragend":hr=!1,fr(s,n,i);break;case"selectionchange":if(ur)break;case"keydown":case"keyup":fr(s,n,i)}var v;if(On)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Mn?Pn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(An&&"ko"!==n.locale&&(Mn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Mn&&(v=Xt()):(Qt="value"in(Gt=i)?Gt.value:Gt.textContent,Mn=!0)),0<(y=Ur(r,b)).length&&(b=new gn(b,e,null,n,i),s.push({event:b,listeners:y}),v?b.data=v:null!==(v=jn(n))&&(b.data=v))),(v=Nn?function(e,t){switch(e){case"compositionend":return jn(t);case"keypress":return 32!==t.which?null:(Dn=!0,Rn);case"textInput":return(e=t.data)===Rn&&Dn?null:e;default:return null}}(e,n):function(e,t){if(Mn)return"compositionend"===e||!On&&Pn(e,t)?(e=Xt(),Yt=Qt=Gt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))&&(0<(r=Ur(r,"onBeforeInput")).length&&(i=new gn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=v))}Ar(s,t)}))}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ne(e,n))&&r.unshift(Fr(e,o,i)),null!=(o=Ne(e,t))&&r.push(Fr(e,o,i))),e=e.return}return r}function Vr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function zr(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(null!==u&&u===r)break;5===a.tag&&null!==c&&(a=c,i?null!=(u=Ne(n,o))&&s.unshift(Fr(n,u,a)):i||null!=(u=Ne(n,o))&&s.push(Fr(n,u,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var qr=/\r\n?/g,Br=/\u0000|\uFFFD/g;function $r(e){return("string"==typeof e?e:""+e).replace(qr,"\n").replace(Br,"")}function Wr(e,t,n){if(t=$r(t),$r(e)!==t&&n)throw Error(o(425))}function Hr(){}var Kr=null,Gr=null;function Qr(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Yr="function"==typeof setTimeout?setTimeout:void 0,Xr="function"==typeof clearTimeout?clearTimeout:void 0,Jr="function"==typeof Promise?Promise:void 0,Zr="function"==typeof queueMicrotask?queueMicrotask:void 0!==Jr?function(e){return Jr.resolve(null).then(e).catch(ei)}:Yr;function ei(e){setTimeout((function(){throw e}))}function ti(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ni(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ri(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),oi="__reactFiber$"+ii,si="__reactProps$"+ii,ai="__reactContainer$"+ii,ui="__reactEvents$"+ii,ci="__reactListeners$"+ii,li="__reactHandles$"+ii;function di(e){var t=e[oi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ai]||n[oi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ri(e);null!==e;){if(n=e[oi])return n;e=ri(e)}return t}n=(e=n).parentNode}return null}function hi(e){return!(e=e[oi]||e[ai])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function fi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function pi(e){return e[si]||null}var mi=[],gi=-1;function yi(e){return{current:e}}function vi(e){0>gi||(e.current=mi[gi],mi[gi]=null,gi--)}function bi(e,t){gi++,mi[gi]=e.current,e.current=t}var wi={},_i=yi(wi),Ei=yi(!1),Si=wi;function Ii(e,t){var n=e.type.contextTypes;if(!n)return wi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ki(e){return null!=(e=e.childContextTypes)}function Ti(){vi(Ei),vi(_i)}function xi(e,t,n){if(_i.current!==wi)throw Error(o(168));bi(_i,t),bi(Ei,n)}function Oi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,q(e)||"Unknown",i));return L({},n,r)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wi,Si=_i.current,bi(_i,e),bi(Ei,Ei.current),!0}function Ni(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Oi(e,t,Si),r.__reactInternalMemoizedMergedChildContext=e,vi(Ei),vi(_i),bi(_i,e)):vi(Ei),bi(Ei,n)}var Ai=null,Ri=!1,Di=!1;function Pi(e){null===Ai?Ai=[e]:Ai.push(e)}function ji(){if(!Di&&null!==Ai){Di=!0;var e=0,t=gt;try{var n=Ai;for(gt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ai=null,Ri=!1}catch(t){throw null!==Ai&&(Ai=Ai.slice(e+1)),$e(Ye,ji),t}finally{gt=t,Di=!1}}return null}var Mi=[],Li=0,Fi=null,Ui=0,Vi=[],zi=0,qi=null,Bi=1,$i="";function Wi(e,t){Mi[Li++]=Ui,Mi[Li++]=Fi,Fi=e,Ui=t}function Hi(e,t,n){Vi[zi++]=Bi,Vi[zi++]=$i,Vi[zi++]=qi,qi=e;var r=Bi;e=$i;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var o=32-rt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bi=1<<32-rt(t)+i|n<<i|r,$i=o+e}else Bi=1<<o|n<<i|r,$i=e}function Ki(e){null!==e.return&&(Wi(e,1),Hi(e,1,0))}function Gi(e){for(;e===Fi;)Fi=Mi[--Li],Mi[Li]=null,Ui=Mi[--Li],Mi[Li]=null;for(;e===qi;)qi=Vi[--zi],Vi[zi]=null,$i=Vi[--zi],Vi[zi]=null,Bi=Vi[--zi],Vi[zi]=null}var Qi=null,Yi=null,Xi=!1,Ji=null;function Zi(e,t){var n=_c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function eo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,Qi=e,Yi=ni(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,Qi=e,Yi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qi?{id:Bi,overflow:$i}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=_c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,Qi=e,Yi=null,!0);default:return!1}}function to(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function no(e){if(Xi){var t=Yi;if(t){var n=t;if(!eo(e,t)){if(to(e))throw Error(o(418));t=ni(n.nextSibling);var r=Qi;t&&eo(e,t)?Zi(r,n):(e.flags=-4097&e.flags|2,Xi=!1,Qi=e)}}else{if(to(e))throw Error(o(418));e.flags=-4097&e.flags|2,Xi=!1,Qi=e}}}function ro(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Qi=e}function io(e){if(e!==Qi)return!1;if(!Xi)return ro(e),Xi=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!Qr(e.type,e.memoizedProps)),t&&(t=Yi)){if(to(e))throw oo(),Error(o(418));for(;t;)Zi(e,t),t=ni(t.nextSibling)}if(ro(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Yi=ni(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Yi=null}}else Yi=Qi?ni(e.stateNode.nextSibling):null;return!0}function oo(){for(var e=Yi;e;)e=ni(e.nextSibling)}function so(){Yi=Qi=null,Xi=!1}function ao(e){null===Ji?Ji=[e]:Ji.push(e)}var uo=w.ReactCurrentBatchConfig;function co(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var lo=yi(null),ho=null,fo=null,po=null;function mo(){po=fo=ho=null}function go(e){var t=lo.current;vi(lo),e._currentValue=t}function yo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vo(e,t){ho=e,po=fo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(fa=!0),e.firstContext=null)}function bo(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},null===fo){if(null===ho)throw Error(o(308));fo=e,ho.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var wo=null;function _o(e){null===wo?wo=[e]:wo.push(e)}function Eo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,_o(t)):(n.next=i.next,i.next=n),t.interleaved=n,So(e,r)}function So(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Io=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&vu)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,So(e,n)}return null===(i=r.interleaved)?(t.next=t,_o(r)):(t.next=i.next,i.next=t),r.interleaved=t,So(e,n)}function Co(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,mt(e,n)}}function No(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ao(e,t,n,r){var i=e.updateQueue;Io=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var u=a,c=u.next;u.next=null,null===s?o=c:s.next=c,s=u;var l=e.alternate;null!==l&&((a=(l=l.updateQueue).lastBaseUpdate)!==s&&(null===a?l.firstBaseUpdate=c:a.next=c,l.lastBaseUpdate=u))}if(null!==o){var d=i.baseState;for(s=0,l=c=u=null,a=o;;){var h=a.lane,f=a.eventTime;if((r&h)===h){null!==l&&(l=l.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=L({},d,h);break e;case 2:Io=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===l?(c=l=f,u=d):l=l.next=f,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===l&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=l,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Tu|=s,e.lanes=s,e.memoizedState=d}}function Ro(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(o(191,i));i.call(r)}}}var Do=(new r.Component).refs;function Po(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$u(),i=Wu(e),o=xo(r,i);o.payload=t,null!=n&&(o.callback=n),null!==(t=Oo(e,o,i))&&(Hu(t,e,i,r),Co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$u(),i=Wu(e),o=xo(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),null!==(t=Oo(e,o,i))&&(Hu(t,e,i,r),Co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$u(),r=Wu(e),i=xo(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Oo(e,i,r))&&(Hu(t,e,r,n),Co(t,e,r))}};function Mo(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!nr(n,r)||!nr(i,o))}function Lo(e,t,n){var r=!1,i=wi,o=t.contextType;return"object"==typeof o&&null!==o?o=bo(o):(i=ki(t)?Si:_i.current,o=(r=null!=(r=t.contextTypes))?Ii(e,i):wi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Uo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Do,ko(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=bo(o):(o=ki(t)?Si:_i.current,i.context=Ii(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(Po(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&jo.enqueueReplaceState(i,i.state,null),Ao(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function Vo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;t===Do&&(t=i.refs={}),null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qo(e){return(0,e._init)(e._payload)}function Bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Sc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=xc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===R&&qo(o)===t.type)?((r=i(t,n.props)).ref=Vo(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=Vo(e,t,n),r.return=e,r)}function l(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Oc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=kc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=xc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=Vo(e,null,t),n.return=e,n;case E:return(t=Oc(t,e.mode,n)).return=e,t;case R:return h(e,(0,t._init)(t._payload),n)}if(ee(t)||j(t))return(t=kc(t,e.mode,n,null)).return=e,t;zo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _:return n.key===i?c(e,t,n,r):null;case E:return n.key===i?l(e,t,n,r):null;case R:return f(e,t,(i=n._init)(n._payload),r)}if(ee(n)||j(n))return null!==i?null:d(e,t,n,r,null);zo(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case E:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case R:return p(e,t,n,(0,r._init)(r._payload),i)}if(ee(r)||j(r))return d(t,e=e.get(n)||null,r,i,null);zo(t,r)}return null}function m(i,o,a,u){for(var c=null,l=null,d=o,m=o=0,g=null;null!==d&&m<a.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(i,d,a[m],u);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),o=s(y,o,m),null===l?c=y:l.sibling=y,l=y,d=g}if(m===a.length)return n(i,d),Xi&&Wi(i,m),c;if(null===d){for(;m<a.length;m++)null!==(d=h(i,a[m],u))&&(o=s(d,o,m),null===l?c=d:l.sibling=d,l=d);return Xi&&Wi(i,m),c}for(d=r(i,d);m<a.length;m++)null!==(g=p(d,i,m,a[m],u))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=s(g,o,m),null===l?c=g:l.sibling=g,l=g);return e&&d.forEach((function(e){return t(i,e)})),Xi&&Wi(i,m),c}function g(i,a,u,c){var l=j(u);if("function"!=typeof l)throw Error(o(150));if(null==(u=l.call(u)))throw Error(o(151));for(var d=l=null,m=a,g=a=0,y=null,v=u.next();null!==m&&!v.done;g++,v=u.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(i,m,v.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),a=s(b,a,g),null===d?l=b:d.sibling=b,d=b,m=y}if(v.done)return n(i,m),Xi&&Wi(i,g),l;if(null===m){for(;!v.done;g++,v=u.next())null!==(v=h(i,v.value,c))&&(a=s(v,a,g),null===d?l=v:d.sibling=v,d=v);return Xi&&Wi(i,g),l}for(m=r(i,m);!v.done;g++,v=u.next())null!==(v=p(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=s(v,a,g),null===d?l=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),Xi&&Wi(i,g),l}return function e(r,o,s,u){if("object"==typeof s&&null!==s&&s.type===S&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case _:e:{for(var c=s.key,l=o;null!==l;){if(l.key===c){if((c=s.type)===S){if(7===l.tag){n(r,l.sibling),(o=i(l,s.props.children)).return=r,r=o;break e}}else if(l.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===R&&qo(c)===l.type){n(r,l.sibling),(o=i(l,s.props)).ref=Vo(r,l,s),o.return=r,r=o;break e}n(r,l);break}t(r,l),l=l.sibling}s.type===S?((o=kc(s.props.children,r.mode,u,s.key)).return=r,r=o):((u=Ic(s.type,s.key,s.props,null,r.mode,u)).ref=Vo(r,o,s),u.return=r,r=u)}return a(r);case E:e:{for(l=s.key;null!==o;){if(o.key===l){if(4===o.tag&&o.stateNode.containerInfo===s.containerInfo&&o.stateNode.implementation===s.implementation){n(r,o.sibling),(o=i(o,s.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Oc(s,r.mode,u)).return=r,r=o}return a(r);case R:return e(r,o,(l=s._init)(s._payload),u)}if(ee(s))return m(r,o,s,u);if(j(s))return g(r,o,s,u);zo(r,s)}return"string"==typeof s&&""!==s||"number"==typeof s?(s=""+s,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,s)).return=r,r=o):(n(r,o),(o=xc(s,r.mode,u)).return=r,r=o),a(r)):n(r,o)}}var $o=Bo(!0),Wo=Bo(!1),Ho={},Ko=yi(Ho),Go=yi(Ho),Qo=yi(Ho);function Yo(e){if(e===Ho)throw Error(o(174));return e}function Xo(e,t){switch(bi(Qo,t),bi(Go,e),bi(Ko,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ae(null,"");break;default:t=ae(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}vi(Ko),bi(Ko,t)}function Jo(){vi(Ko),vi(Go),vi(Qo)}function Zo(e){Yo(Qo.current);var t=Yo(Ko.current),n=ae(t,e.type);t!==n&&(bi(Go,e),bi(Ko,n))}function es(e){Go.current===e&&(vi(Ko),vi(Go))}var ts=yi(0);function ns(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function is(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var os=w.ReactCurrentDispatcher,ss=w.ReactCurrentBatchConfig,as=0,us=null,cs=null,ls=null,ds=!1,hs=!1,fs=0,ps=0;function ms(){throw Error(o(321))}function gs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tr(e[n],t[n]))return!1;return!0}function ys(e,t,n,r,i,s){if(as=s,us=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=null===e||null===e.memoizedState?ea:ta,e=n(r,i),hs){s=0;do{if(hs=!1,fs=0,25<=s)throw Error(o(301));s+=1,ls=cs=null,t.updateQueue=null,os.current=na,e=n(r,i)}while(hs)}if(os.current=Zs,t=null!==cs&&null!==cs.next,as=0,ls=cs=us=null,ds=!1,t)throw Error(o(300));return e}function vs(){var e=0!==fs;return fs=0,e}function bs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?us.memoizedState=ls=e:ls=ls.next=e,ls}function ws(){if(null===cs){var e=us.alternate;e=null!==e?e.memoizedState:null}else e=cs.next;var t=null===ls?us.memoizedState:ls.next;if(null!==t)ls=t,cs=e;else{if(null===e)throw Error(o(310));e={memoizedState:(cs=e).memoizedState,baseState:cs.baseState,baseQueue:cs.baseQueue,queue:cs.queue,next:null},null===ls?us.memoizedState=ls=e:ls=ls.next=e}return ls}function _s(e,t){return"function"==typeof t?t(e):t}function Es(e){var t=ws(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=cs,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var u=a=null,c=null,l=s;do{var d=l.lane;if((as&d)===d)null!==c&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var h={lane:d,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};null===c?(u=c=h,a=r):c=c.next=h,us.lanes|=d,Tu|=d}l=l.next}while(null!==l&&l!==s);null===c?a=r:c.next=u,tr(r,t.memoizedState)||(fa=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,us.lanes|=s,Tu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ss(e){var t=ws(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);tr(s,t.memoizedState)||(fa=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Is(){}function ks(e,t){var n=us,r=ws(),i=t(),s=!tr(r.memoizedState,i);if(s&&(r.memoizedState=i,fa=!0),r=r.queue,Ls(Os.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ls&&1&ls.memoizedState.tag){if(n.flags|=2048,Rs(9,xs.bind(null,n,r,i,t),void 0,null),null===bu)throw Error(o(349));0!=(30&as)||Ts(n,t,i)}return i}function Ts(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=us.updateQueue)?(t={lastEffect:null,stores:null},us.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&Ns(e)}function Os(e,t,n){return n((function(){Cs(t)&&Ns(e)}))}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tr(e,n)}catch(e){return!0}}function Ns(e){var t=So(e,1);null!==t&&Hu(t,e,1,-1)}function As(e){var t=bs();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:e},t.queue=e,e=e.dispatch=Qs.bind(null,us,e),[t.memoizedState,e]}function Rs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=us.updateQueue)?(t={lastEffect:null,stores:null},us.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ds(){return ws().memoizedState}function Ps(e,t,n,r){var i=bs();us.flags|=e,i.memoizedState=Rs(1|t,n,void 0,void 0===r?null:r)}function js(e,t,n,r){var i=ws();r=void 0===r?null:r;var o=void 0;if(null!==cs){var s=cs.memoizedState;if(o=s.destroy,null!==r&&gs(r,s.deps))return void(i.memoizedState=Rs(t,n,o,r))}us.flags|=e,i.memoizedState=Rs(1|t,n,o,r)}function Ms(e,t){return Ps(8390656,8,e,t)}function Ls(e,t){return js(2048,8,e,t)}function Fs(e,t){return js(4,2,e,t)}function Us(e,t){return js(4,4,e,t)}function Vs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function zs(e,t,n){return n=null!=n?n.concat([e]):null,js(4,4,Vs.bind(null,t,e),n)}function qs(){}function Bs(e,t){var n=ws();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=ws();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ws(e,t,n){return 0==(21&as)?(e.baseState&&(e.baseState=!1,fa=!0),e.memoizedState=n):(tr(n,t)||(n=ht(),us.lanes|=n,Tu|=n,e.baseState=!0),t)}function Hs(e,t){var n=gt;gt=0!==n&&4>n?n:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{gt=n,ss.transition=r}}function Ks(){return ws().memoizedState}function Gs(e,t,n){var r=Wu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ys(e))Xs(t,n);else if(null!==(n=Eo(e,t,n,r))){Hu(n,e,r,$u()),Js(n,t,r)}}function Qs(e,t,n){var r=Wu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ys(e))Xs(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tr(a,s)){var u=t.interleaved;return null===u?(i.next=i,_o(t)):(i.next=u.next,u.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=Eo(e,t,i,r))&&(Hu(n,e,r,i=$u()),Js(n,t,r))}}function Ys(e){var t=e.alternate;return e===us||null!==t&&t===us}function Xs(e,t){hs=ds=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Js(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,mt(e,n)}}var Zs={readContext:bo,useCallback:ms,useContext:ms,useEffect:ms,useImperativeHandle:ms,useInsertionEffect:ms,useLayoutEffect:ms,useMemo:ms,useReducer:ms,useRef:ms,useState:ms,useDebugValue:ms,useDeferredValue:ms,useTransition:ms,useMutableSource:ms,useSyncExternalStore:ms,useId:ms,unstable_isNewReconciler:!1},ea={readContext:bo,useCallback:function(e,t){return bs().memoizedState=[e,void 0===t?null:t],e},useContext:bo,useEffect:Ms,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ps(4194308,4,Vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=bs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bs();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gs.bind(null,us,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bs().memoizedState=e},useState:As,useDebugValue:qs,useDeferredValue:function(e){return bs().memoizedState=e},useTransition:function(){var e=As(!1),t=e[0];return e=Hs.bind(null,e[1]),bs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=us,i=bs();if(Xi){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===bu)throw Error(o(349));0!=(30&as)||Ts(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ms(Os.bind(null,r,s,e),[e]),r.flags|=2048,Rs(9,xs.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bs(),t=bu.identifierPrefix;if(Xi){var n=$i;t=":"+t+"R"+(n=(Bi&~(1<<32-rt(Bi)-1)).toString(32)+n),0<(n=fs++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ps++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ta={readContext:bo,useCallback:Bs,useContext:bo,useEffect:Ls,useImperativeHandle:zs,useInsertionEffect:Fs,useLayoutEffect:Us,useMemo:$s,useReducer:Es,useRef:Ds,useState:function(){return Es(_s)},useDebugValue:qs,useDeferredValue:function(e){return Ws(ws(),cs.memoizedState,e)},useTransition:function(){return[Es(_s)[0],ws().memoizedState]},useMutableSource:Is,useSyncExternalStore:ks,useId:Ks,unstable_isNewReconciler:!1},na={readContext:bo,useCallback:Bs,useContext:bo,useEffect:Ls,useImperativeHandle:zs,useInsertionEffect:Fs,useLayoutEffect:Us,useMemo:$s,useReducer:Ss,useRef:Ds,useState:function(){return Ss(_s)},useDebugValue:qs,useDeferredValue:function(e){var t=ws();return null===cs?t.memoizedState=e:Ws(t,cs.memoizedState,e)},useTransition:function(){return[Ss(_s)[0],ws().memoizedState]},useMutableSource:Is,useSyncExternalStore:ks,useId:Ks,unstable_isNewReconciler:!1};function ra(e,t){try{var n="",r=t;do{n+=z(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function ia(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function oa(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var sa="function"==typeof WeakMap?WeakMap:Map;function aa(e,t,n){(n=xo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pu||(Pu=!0,ju=r),oa(0,t)},n}function ua(e,t,n){(n=xo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oa(0,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){oa(0,t),"function"!=typeof r&&(null===Mu?Mu=new Set([this]):Mu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ca(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new sa;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mc.bind(null,e,t,n),t.then(e,e))}function la(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function da(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=xo(-1,1)).tag=2,Oo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ha=w.ReactCurrentOwner,fa=!1;function pa(e,t,n,r){t.child=null===e?Wo(t,null,n,r):$o(t,e.child,n,r)}function ma(e,t,n,r,i){n=n.render;var o=t.ref;return vo(t,i),r=ys(e,t,n,r,o,i),n=vs(),null===e||fa?(Xi&&n&&Ki(t),t.flags|=1,pa(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,La(e,t,i))}function ga(e,t,n,r,i){if(null===e){var o=n.type;return"function"!=typeof o||Ec(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ya(e,t,o,r,i))}if(o=e.child,0==(e.lanes&i)){var s=o.memoizedProps;if((n=null!==(n=n.compare)?n:nr)(s,r)&&e.ref===t.ref)return La(e,t,i)}return t.flags|=1,(e=Sc(o,r)).ref=t.ref,e.return=t,t.child=e}function ya(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(nr(o,r)&&e.ref===t.ref){if(fa=!1,t.pendingProps=r=o,0==(e.lanes&i))return t.lanes=e.lanes,La(e,t,i);0!=(131072&e.flags)&&(fa=!0)}}return wa(e,t,n,r,i)}function va(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},bi(Su,Eu),Eu|=n;else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,bi(Su,Eu),Eu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,bi(Su,Eu),Eu|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,bi(Su,Eu),Eu|=r;return pa(e,t,i,n),t.child}function ba(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wa(e,t,n,r,i){var o=ki(n)?Si:_i.current;return o=Ii(t,o),vo(t,i),n=ys(e,t,n,r,o,i),r=vs(),null===e||fa?(Xi&&r&&Ki(t),t.flags|=1,pa(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,La(e,t,i))}function _a(e,t,n,r,i){if(ki(n)){var o=!0;Ci(t)}else o=!1;if(vo(t,i),null===t.stateNode)Ma(e,t),Lo(t,n,r),Uo(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=bo(c):c=Ii(t,c=ki(n)?Si:_i.current);var l=n.getDerivedStateFromProps,d="function"==typeof l||"function"==typeof s.getSnapshotBeforeUpdate;d||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||u!==c)&&Fo(t,s,r,c),Io=!1;var h=t.memoizedState;s.state=h,Ao(t,r,s,i),u=t.memoizedState,a!==r||h!==u||Ei.current||Io?("function"==typeof l&&(Po(t,n,l,r),u=t.memoizedState),(a=Io||Mo(t,n,a,r,h,u,c))?(d||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4194308)):("function"==typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):("function"==typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,To(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:co(t.type,a),s.props=c,d=t.pendingProps,h=s.context,"object"==typeof(u=n.contextType)&&null!==u?u=bo(u):u=Ii(t,u=ki(n)?Si:_i.current);var f=n.getDerivedStateFromProps;(l="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==d||h!==u)&&Fo(t,s,r,u),Io=!1,h=t.memoizedState,s.state=h,Ao(t,r,s,i);var p=t.memoizedState;a!==d||h!==p||Ei.current||Io?("function"==typeof f&&(Po(t,n,f,r),p=t.memoizedState),(c=Io||Mo(t,n,c,r,h,p,u)||!1)?(l||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,u),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=u,r=c):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,o,i)}function Ea(e,t,n,r,i,o){ba(e,t);var s=0!=(128&t.flags);if(!r&&!s)return i&&Ni(t,n,!1),La(e,t,o);r=t.stateNode,ha.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=$o(t,e.child,null,o),t.child=$o(t,null,a,o)):pa(e,t,a,o),t.memoizedState=r.state,i&&Ni(t,n,!0),t.child}function Sa(e){var t=e.stateNode;t.pendingContext?xi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&xi(0,t.context,!1),Xo(e,t.containerInfo)}function Ia(e,t,n,r,i){return so(),ao(i),t.flags|=256,pa(e,t,n,r),t.child}var ka,Ta,xa,Oa={dehydrated:null,treeContext:null,retryLane:0};function Ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function Na(e,t,n){var r,i=t.pendingProps,s=ts.current,a=!1,u=0!=(128&t.flags);if((r=u)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),bi(ts,1&s),null===e)return no(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(u=i.children,e=i.fallback,a?(i=t.mode,a=t.child,u={mode:"hidden",children:u},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=u):a=Tc(u,i,0,null),e=kc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ca(n),t.memoizedState=Oa,e):Aa(t,u));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,r=ia(Error(o(422))),Ra(e,t,a,r)):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Tc({mode:"visible",children:r.children},i,0,null),(s=kc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&$o(t,e.child,null,a),t.child.memoizedState=Ca(a),t.memoizedState=Oa,s);if(0==(1&t.mode))return Ra(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var u=r.dgst;return r=u,s=Error(o(419)),r=ia(s,r,void 0),Ra(e,t,a,r)}if(u=0!=(a&e.childLanes),fa||u){if(null!==(r=bu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,So(e,i),Hu(r,e,i,-1))}return oc(),r=ia(Error(o(421))),Ra(e,t,a,r)}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=yc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Yi=ni(i.nextSibling),Qi=t,Xi=!0,Ji=null,null!==e&&(Vi[zi++]=Bi,Vi[zi++]=$i,Vi[zi++]=qi,Bi=e.id,$i=e.overflow,qi=t),(t=Aa(t,r.children)).flags|=4096,t)}(e,t,u,i,r,s,n);if(a){a=i.fallback,u=t.mode,r=(s=e.child).sibling;var c={mode:"hidden",children:i.children};return 0==(1&u)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Sc(s,c)).subtreeFlags=14680064&s.subtreeFlags,null!==r?a=Sc(r,a):(a=kc(a,u,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,u=null===(u=e.child.memoizedState)?Ca(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=Oa,i}return e=(a=e.child).sibling,i=Sc(a,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Aa(e,t){return(t=Tc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ra(e,t,n,r){return null!==r&&ao(r),$o(t,e.child,null,n),(e=Aa(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Da(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),yo(e.return,t,n)}function Pa(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ja(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pa(e,t,r.children,n),0!=(2&(r=ts.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Da(e,n,t);else if(19===e.tag)Da(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(bi(ts,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ns(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ns(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pa(t,!0,n,null,o);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ma(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function La(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Tu|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Sc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Sc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Fa(e,t){if(!Xi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ua(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Va(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ua(t),null;case 1:return ki(t.type)&&Ti(),Ua(t),null;case 3:return r=t.stateNode,Jo(),vi(Ei),vi(_i),is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(io(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==Ji&&(Yu(Ji),Ji=null))),Ua(t),null;case 5:es(t);var i=Yo(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ta(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ua(t),null}if(e=Yo(Ko.current),io(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[oi]=t,r[si]=s,e=0!=(1&t.mode),n){case"dialog":Rr("cancel",r),Rr("close",r);break;case"iframe":case"object":case"embed":Rr("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Rr(Or[i],r);break;case"source":Rr("error",r);break;case"img":case"image":case"link":Rr("error",r),Rr("load",r);break;case"details":Rr("toggle",r);break;case"input":Q(r,s),Rr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Rr("invalid",r);break;case"textarea":re(r,s),Rr("invalid",r)}for(var u in ge(n,s),i=null,s)if(s.hasOwnProperty(u)){var c=s[u];"children"===u?"string"==typeof c?r.textContent!==c&&(!0!==s.suppressHydrationWarning&&Wr(r.textContent,c,e),i=["children",c]):"number"==typeof c&&r.textContent!==""+c&&(!0!==s.suppressHydrationWarning&&Wr(r.textContent,c,e),i=["children",""+c]):a.hasOwnProperty(u)&&null!=c&&"onScroll"===u&&Rr("scroll",r)}switch(n){case"input":W(r),J(r,s,!0);break;case"textarea":W(r),oe(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Hr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{u=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=u.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),"select"===n&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[oi]=t,e[si]=r,ka(e,t),t.stateNode=e;e:{switch(u=ye(n,r),n){case"dialog":Rr("cancel",e),Rr("close",e),i=r;break;case"iframe":case"object":case"embed":Rr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Rr(Or[i],e);i=r;break;case"source":Rr("error",e),i=r;break;case"img":case"image":case"link":Rr("error",e),Rr("load",e),i=r;break;case"details":Rr("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),Rr("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=L({},r,{value:void 0}),Rr("invalid",e);break;case"textarea":re(e,r),i=ne(e,r),Rr("invalid",e);break;default:i=r}for(s in ge(n,i),c=i)if(c.hasOwnProperty(s)){var l=c[s];"style"===s?pe(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ce(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&le(e,l):"number"==typeof l&&le(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(a.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Rr("scroll",e):null!=l&&b(e,s,l,u))}switch(n){case"input":W(e),J(e,r,!1);break;case"textarea":W(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?te(e,!!r.multiple,s,!1):null!=r.defaultValue&&te(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ua(t),null;case 6:if(e&&null!=t.stateNode)xa(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));if(n=Yo(Qo.current),Yo(Ko.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[oi]=t,(s=r.nodeValue!==n)&&null!==(e=Qi))switch(e.tag){case 3:Wr(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Wr(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[oi]=t,t.stateNode=r}return Ua(t),null;case 13:if(vi(ts),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(Xi&&null!==Yi&&0!=(1&t.mode)&&0==(128&t.flags))oo(),so(),t.flags|=98560,s=!1;else if(s=io(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(o(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(o(317));s[oi]=t}else so(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ua(t),s=!1}else null!==Ji&&(Yu(Ji),Ji=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ts.current)?0===Iu&&(Iu=3):oc())),null!==t.updateQueue&&(t.flags|=4),Ua(t),null);case 4:return Jo(),null===e&&jr(t.stateNode.containerInfo),Ua(t),null;case 10:return go(t.type._context),Ua(t),null;case 17:return ki(t.type)&&Ti(),Ua(t),null;case 19:if(vi(ts),null===(s=t.memoizedState))return Ua(t),null;if(r=0!=(128&t.flags),null===(u=s.rendering))if(r)Fa(s,!1);else{if(0!==Iu||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(u=ns(e))){for(t.flags|=128,Fa(s,!1),null!==(r=u.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(u=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return bi(ts,1&ts.current|2),t.child}e=e.sibling}null!==s.tail&&Ge()>Ru&&(t.flags|=128,r=!0,Fa(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ns(u))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Fa(s,!0),null===s.tail&&"hidden"===s.tailMode&&!u.alternate&&!Xi)return Ua(t),null}else 2*Ge()-s.renderingStartTime>Ru&&1073741824!==n&&(t.flags|=128,r=!0,Fa(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(null!==(n=s.last)?n.sibling=u:t.child=u,s.last=u)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ge(),t.sibling=null,n=ts.current,bi(ts,r?1&n|2:1&n),t):(Ua(t),null);case 22:case 23:return tc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Eu)&&(Ua(t),6&t.subtreeFlags&&(t.flags|=8192)):Ua(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function za(e,t){switch(Gi(t),t.tag){case 1:return ki(t.type)&&Ti(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Jo(),vi(Ei),vi(_i),is(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return es(t),null;case 13:if(vi(ts),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));so()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return vi(ts),null;case 4:return Jo(),null;case 10:return go(t.type._context),null;case 22:case 23:return tc(),null;case 24:default:return null}}ka=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ta=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yo(Ko.current);var o,s=null;switch(n){case"input":i=G(e,i),r=G(e,r),s=[];break;case"select":i=L({},i,{value:void 0}),r=L({},r,{value:void 0}),s=[];break;case"textarea":i=ne(e,i),r=ne(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Hr)}for(l in ge(n,r),n=null,i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&null!=i[l])if("style"===l){var u=i[l];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(a.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var c=r[l];if(u=null!=i?i[l]:void 0,r.hasOwnProperty(l)&&c!==u&&(null!=c||null!=u))if("style"===l)if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(l,n)),n=c;else"dangerouslySetInnerHTML"===l?(c=c?c.__html:void 0,u=u?u.__html:void 0,null!=c&&u!==c&&(s=s||[]).push(l,c)):"children"===l?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(l,""+c):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(a.hasOwnProperty(l)?(null!=c&&"onScroll"===l&&Rr("scroll",e),s||u===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(t.updateQueue=l)&&(t.flags|=4)}},xa=function(e,t,n,r){n!==r&&(t.flags|=4)};var qa=!1,Ba=!1,$a="function"==typeof WeakSet?WeakSet:Set,Wa=null;function Ha(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){pc(e,t,n)}else n.current=null}function Ka(e,t,n){try{n()}catch(n){pc(e,t,n)}}var Ga=!1;function Qa(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&Ka(t,n,o)}i=i.next}while(i!==r)}}function Ya(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xa(e){var t=e.ref;if(null!==t){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}"function"==typeof t?t(e):t.current=e}}function Ja(e){var t=e.alternate;null!==t&&(e.alternate=null,Ja(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[oi],delete t[si],delete t[ui],delete t[ci],delete t[li])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Za(e){return 5===e.tag||3===e.tag||4===e.tag}function eu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Za(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var tu=null,nu=!1;function ru(e,t,n){for(n=n.child;null!==n;)iu(e,t,n),n=n.sibling}function iu(e,t,n){if(nt&&"function"==typeof nt.onCommitFiberUnmount)try{nt.onCommitFiberUnmount(tt,n)}catch(e){}switch(n.tag){case 5:Ba||Ha(n,t);case 6:var r=tu,i=nu;tu=null,ru(e,t,n),nu=i,null!==(tu=r)&&(nu?(e=tu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):tu.removeChild(n.stateNode));break;case 18:null!==tu&&(nu?(e=tu,n=n.stateNode,8===e.nodeType?ti(e.parentNode,n):1===e.nodeType&&ti(e,n),Ut(e)):ti(tu,n.stateNode));break;case 4:r=tu,i=nu,tu=n.stateNode.containerInfo,nu=!0,ru(e,t,n),tu=r,nu=i;break;case 0:case 11:case 14:case 15:if(!Ba&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,void 0!==s&&(0!=(2&o)||0!=(4&o))&&Ka(n,t,s),i=i.next}while(i!==r)}ru(e,t,n);break;case 1:if(!Ba&&(Ha(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){pc(n,t,e)}ru(e,t,n);break;case 21:ru(e,t,n);break;case 22:1&n.mode?(Ba=(r=Ba)||null!==n.memoizedState,ru(e,t,n),Ba=r):ru(e,t,n);break;default:ru(e,t,n)}}function ou(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new $a),t.forEach((function(t){var r=vc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function su(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,u=a;e:for(;null!==u;){switch(u.tag){case 5:tu=u.stateNode,nu=!1;break e;case 3:case 4:tu=u.stateNode.containerInfo,nu=!0;break e}u=u.return}if(null===tu)throw Error(o(160));iu(s,a,i),tu=null,nu=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(e){pc(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(su(t,e),uu(e),4&r){try{Qa(3,e,e.return),Ya(3,e)}catch(t){pc(e,e.return,t)}try{Qa(5,e,e.return)}catch(t){pc(e,e.return,t)}}break;case 1:su(t,e),uu(e),512&r&&null!==n&&Ha(n,n.return);break;case 5:if(su(t,e),uu(e),512&r&&null!==n&&Ha(n,n.return),32&e.flags){var i=e.stateNode;try{le(i,"")}catch(t){pc(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===u&&"radio"===s.type&&null!=s.name&&Y(i,s),ye(u,a);var l=ye(u,s);for(a=0;a<c.length;a+=2){var d=c[a],h=c[a+1];"style"===d?pe(i,h):"dangerouslySetInnerHTML"===d?ce(i,h):"children"===d?le(i,h):b(i,d,h,l)}switch(u){case"input":X(i,s);break;case"textarea":ie(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;null!=p?te(i,!!s.multiple,p,!1):f!==!!s.multiple&&(null!=s.defaultValue?te(i,!!s.multiple,s.defaultValue,!0):te(i,!!s.multiple,s.multiple?[]:"",!1))}i[si]=s}catch(t){pc(e,e.return,t)}}break;case 6:if(su(t,e),uu(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){pc(e,e.return,t)}}break;case 3:if(su(t,e),uu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(t){pc(e,e.return,t)}break;case 4:su(t,e),uu(e);break;case 13:su(t,e),uu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Au=Ge())),4&r&&ou(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ba=(l=Ba)||d,su(t,e),Ba=l):su(t,e),uu(e),8192&r){if(l=null!==e.memoizedState,(e.stateNode.isHidden=l)&&!d&&0!=(1&e.mode))for(Wa=e,d=e.child;null!==d;){for(h=Wa=d;null!==Wa;){switch(p=(f=Wa).child,f.tag){case 0:case 11:case 14:case 15:Qa(4,f,f.return);break;case 1:Ha(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){pc(r,n,e)}}break;case 5:Ha(f,f.return);break;case 22:if(null!==f.memoizedState){du(h);continue}}null!==p?(p.return=f,Wa=p):du(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{i=h.stateNode,l?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(u=h.stateNode,a=null!=(c=h.memoizedProps.style)&&c.hasOwnProperty("display")?c.display:null,u.style.display=fe("display",a))}catch(t){pc(e,e.return,t)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(t){pc(e,e.return,t)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:su(t,e),uu(e),4&r&&ou(e);break;case 21:break;default:su(t,e),uu(e)}}function uu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(Za(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(le(i,""),r.flags&=-33),function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,eu(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;!function e(t,n,r){var i=t.tag;if(5===i||6===i)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=Hr));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,eu(e),s);break;default:throw Error(o(161))}}catch(t){pc(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function cu(e,t,n){Wa=e,function e(t,n,r){for(var i=0!=(1&t.mode);null!==Wa;){var o=Wa,s=o.child;if(22===o.tag&&i){var a=null!==o.memoizedState||qa;if(!a){var u=o.alternate,c=null!==u&&null!==u.memoizedState||Ba;u=qa;var l=Ba;if(qa=a,(Ba=c)&&!l)for(Wa=o;null!==Wa;)c=(a=Wa).child,22===a.tag&&null!==a.memoizedState?hu(o):null!==c?(c.return=a,Wa=c):hu(o);for(;null!==s;)Wa=s,e(s,n,r),s=s.sibling;Wa=o,qa=u,Ba=l}lu(t)}else 0!=(8772&o.subtreeFlags)&&null!==s?(s.return=o,Wa=s):lu(t)}}(e,t,n)}function lu(e){for(;null!==Wa;){var t=Wa;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ba||Ya(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ba)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:co(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ro(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ro(t,a,n)}break;case 5:var u=t.stateNode;if(null===n&&4&t.flags){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:break;case 13:if(null===t.memoizedState){var l=t.alternate;if(null!==l){var d=l.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Ut(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ba||512&t.flags&&Xa(t)}catch(e){pc(t,t.return,e)}}if(t===e){Wa=null;break}if(null!==(n=t.sibling)){n.return=t.return,Wa=n;break}Wa=t.return}}function du(e){for(;null!==Wa;){var t=Wa;if(t===e){Wa=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Wa=n;break}Wa=t.return}}function hu(e){for(;null!==Wa;){var t=Wa;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(e){pc(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){pc(t,i,e)}}var o=t.return;try{Xa(t)}catch(e){pc(t,o,e)}break;case 5:var s=t.return;try{Xa(t)}catch(e){pc(t,s,e)}}}catch(e){pc(t,t.return,e)}if(t===e){Wa=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Wa=a;break}Wa=t.return}}var fu,pu=Math.ceil,mu=w.ReactCurrentDispatcher,gu=w.ReactCurrentOwner,yu=w.ReactCurrentBatchConfig,vu=0,bu=null,wu=null,_u=0,Eu=0,Su=yi(0),Iu=0,ku=null,Tu=0,xu=0,Ou=0,Cu=null,Nu=null,Au=0,Ru=1/0,Du=null,Pu=!1,ju=null,Mu=null,Lu=!1,Fu=null,Uu=0,Vu=0,zu=null,qu=-1,Bu=0;function $u(){return 0!=(6&vu)?Ge():-1!==qu?qu:qu=Ge()}function Wu(e){return 0==(1&e.mode)?1:0!=(2&vu)&&0!==_u?_u&-_u:null!==uo.transition?(0===Bu&&(Bu=ht()),Bu):0!==(e=gt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function Hu(e,t,n,r){if(50<Vu)throw Vu=0,zu=null,Error(o(185));pt(e,n,r),0!=(2&vu)&&e===bu||(e===bu&&(0==(2&vu)&&(xu|=n),4===Iu&&Xu(e,_u)),Ku(e,r),1===n&&0===vu&&0==(1&t.mode)&&(Ru=Ge()+500,Ri&&ji()))}function Ku(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-rt(o),a=1<<s,u=i[s];-1===u?0!=(a&n)&&0==(a&r)||(i[s]=lt(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}(e,t);var r=ct(e,e===bu?_u:0);if(0===r)null!==n&&We(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&We(n),1===t)0===e.tag?function(e){Ri=!0,Pi(e)}(Ju.bind(null,e)):Pi(Ju.bind(null,e)),Zr((function(){0==(6&vu)&&ji()})),n=null;else{switch(yt(r)){case 1:n=Ye;break;case 4:n=Xe;break;case 16:n=Je;break;case 536870912:n=et;break;default:n=Je}n=bc(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(qu=-1,Bu=0,0!=(6&vu))throw Error(o(327));var n=e.callbackNode;if(hc()&&e.callbackNode!==n)return null;var r=ct(e,e===bu?_u:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=sc(e,r);else{t=r;var i=vu;vu|=2;var s=ic();for(bu===e&&_u===t||(Du=null,Ru=Ge()+500,nc(e,t));;)try{uc();break}catch(t){rc(e,t)}mo(),mu.current=s,vu=i,null!==wu?t=0:(bu=null,_u=0,t=Iu)}if(0!==t){if(2===t&&(0!==(i=dt(e))&&(r=i,t=Qu(e,i))),1===t)throw n=ku,nc(e,0),Xu(e,r),Ku(e,Ge()),n;if(6===t)Xu(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tr(o(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sc(e,r))&&(0!==(s=dt(e))&&(r=s,t=Qu(e,s))),1===t))throw n=ku,nc(e,0),Xu(e,r),Ku(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:dc(e,Nu,Du);break;case 3:if(Xu(e,r),(130023424&r)===r&&10<(t=Au+500-Ge())){if(0!==ct(e,0))break;if(((i=e.suspendedLanes)&r)!==r){$u(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yr(dc.bind(null,e,Nu,Du),t);break}dc(e,Nu,Du);break;case 4:if(Xu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-rt(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pu(r/1960))-r)){e.timeoutHandle=Yr(dc.bind(null,e,Nu,Du),r);break}dc(e,Nu,Du);break;case 5:dc(e,Nu,Du);break;default:throw Error(o(329))}}}return Ku(e,Ge()),e.callbackNode===n?Gu.bind(null,e):null}function Qu(e,t){var n=Cu;return e.current.memoizedState.isDehydrated&&(nc(e,t).flags|=256),2!==(e=sc(e,t))&&(t=Nu,Nu=n,null!==t&&Yu(t)),e}function Yu(e){null===Nu?Nu=e:Nu.push.apply(Nu,e)}function Xu(e,t){for(t&=~Ou,t&=~xu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if(0!=(6&vu))throw Error(o(327));hc();var t=ct(e,0);if(0==(1&t))return Ku(e,Ge()),null;var n=sc(e,t);if(0!==e.tag&&2===n){var r=dt(e);0!==r&&(t=r,n=Qu(e,r))}if(1===n)throw n=ku,nc(e,0),Xu(e,t),Ku(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dc(e,Nu,Du),Ku(e,Ge()),null}function Zu(e,t){var n=vu;vu|=1;try{return e(t)}finally{0===(vu=n)&&(Ru=Ge()+500,Ri&&ji())}}function ec(e){null!==Fu&&0===Fu.tag&&0==(6&vu)&&hc();var t=vu;vu|=1;var n=yu.transition,r=gt;try{if(yu.transition=null,gt=1,e)return e()}finally{gt=r,yu.transition=n,0==(6&(vu=t))&&ji()}}function tc(){Eu=Su.current,vi(Su)}function nc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Xr(n)),null!==wu)for(n=wu.return;null!==n;){var r=n;switch(Gi(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:Jo(),vi(Ei),vi(_i),is();break;case 5:es(r);break;case 4:Jo();break;case 13:case 19:vi(ts);break;case 10:go(r.type._context);break;case 22:case 23:tc()}n=n.return}if(bu=e,wu=e=Sc(e.current,null),_u=Eu=t,Iu=0,ku=null,Ou=xu=Tu=0,Nu=Cu=null,null!==wo){for(t=0;t<wo.length;t++)if(null!==(r=(n=wo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var s=o.next;o.next=i,r.next=s}n.pending=r}wo=null}return e}function rc(e,t){for(;;){var n=wu;try{if(mo(),os.current=Zs,ds){for(var r=us.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ds=!1}if(as=0,ls=cs=us=null,hs=!1,fs=0,gu.current=null,null===n||null===n.return){Iu=1,ku=t,wu=null;break}e:{var s=e,a=n.return,u=n,c=t;if(t=_u,u.flags|=32768,null!==c&&"object"==typeof c&&"function"==typeof c.then){var l=c,d=u,h=d.tag;if(0==(1&d.mode)&&(0===h||11===h||15===h)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=la(a);if(null!==p){p.flags&=-257,da(p,a,u,0,t),1&p.mode&&ca(s,l,t),c=l;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0==(1&t)){ca(s,l,t),oc();break e}c=Error(o(426))}else if(Xi&&1&u.mode){var y=la(a);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),da(y,a,u,0,t),ao(ra(c,u));break e}}s=c=ra(c,u),4!==Iu&&(Iu=2),null===Cu?Cu=[s]:Cu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,No(s,aa(0,c,t));break e;case 1:u=c;var v=s.type,b=s.stateNode;if(0==(128&s.flags)&&("function"==typeof v.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===Mu||!Mu.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t,No(s,ua(s,u,t));break e}}s=s.return}while(null!==s)}lc(n)}catch(e){t=e,wu===n&&null!==n&&(wu=n=n.return);continue}break}}function ic(){var e=mu.current;return mu.current=Zs,null===e?Zs:e}function oc(){0!==Iu&&3!==Iu&&2!==Iu||(Iu=4),null===bu||0==(268435455&Tu)&&0==(268435455&xu)||Xu(bu,_u)}function sc(e,t){var n=vu;vu|=2;var r=ic();for(bu===e&&_u===t||(Du=null,nc(e,t));;)try{ac();break}catch(t){rc(e,t)}if(mo(),vu=n,mu.current=r,null!==wu)throw Error(o(261));return bu=null,_u=0,Iu}function ac(){for(;null!==wu;)cc(wu)}function uc(){for(;null!==wu&&!He();)cc(wu)}function cc(e){var t=fu(e.alternate,e,Eu);e.memoizedProps=e.pendingProps,null===t?lc(e):wu=t,gu.current=null}function lc(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=Va(n,t,Eu)))return void(wu=n)}else{if(null!==(n=za(n,t)))return n.flags&=32767,void(wu=n);if(null===e)return Iu=6,void(wu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(wu=t);wu=t=e}while(null!==t);0===Iu&&(Iu=5)}function dc(e,t,n){var r=gt,i=yu.transition;try{yu.transition=null,gt=1,function(e,t,n,r){do{hc()}while(null!==Fu);if(0!=(6&vu))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,s),e===bu&&(wu=bu=null,_u=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||Lu||(Lu=!0,bc(Je,(function(){return hc(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=yu.transition,yu.transition=null;var a=gt;gt=1;var u=vu;vu|=4,gu.current=null,function(e,t){if(Kr=zt,sr(e=or())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var a=0,u=-1,c=-1,l=0,d=0,h=e,f=null;t:for(;;){for(var p;h!==n||0!==i&&3!==h.nodeType||(u=a+i),h!==s||0!==r&&3!==h.nodeType||(c=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(p=h.firstChild);)f=h,h=p;for(;;){if(h===e)break t;if(f===n&&++l===i&&(u=a),f===s&&++d===r&&(c=a),null!==(p=h.nextSibling))break;f=(h=f).parentNode}h=p}n=-1===u||-1===c?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gr={focusedElem:e,selectionRange:n},zt=!1,Wa=t;null!==Wa;)if(e=(t=Wa).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,Wa=e;else for(;null!==Wa;){t=Wa;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:co(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(e){pc(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,Wa=e;break}Wa=t.return}m=Ga,Ga=!1}(e,n),au(n,e),ar(Gr),zt=!!Kr,Gr=Kr=null,e.current=n,cu(n,e,i),Ke(),vu=u,gt=a,yu.transition=s}else e.current=n;if(Lu&&(Lu=!1,Fu=e,Uu=i),0===(s=e.pendingLanes)&&(Mu=null),function(e){if(nt&&"function"==typeof nt.onCommitFiberRoot)try{nt.onCommitFiberRoot(tt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),Ku(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pu)throw Pu=!1,e=ju,ju=null,e;0!=(1&Uu)&&0!==e.tag&&hc(),0!=(1&(s=e.pendingLanes))?e===zu?Vu++:(Vu=0,zu=e):Vu=0,ji()}(e,t,n,r)}finally{yu.transition=i,gt=r}return null}function hc(){if(null!==Fu){var e=yt(Uu),t=yu.transition,n=gt;try{if(yu.transition=null,gt=16>e?16:e,null===Fu)var r=!1;else{if(e=Fu,Fu=null,Uu=0,0!=(6&vu))throw Error(o(331));var i=vu;for(vu|=4,Wa=e.current;null!==Wa;){var s=Wa,a=s.child;if(0!=(16&Wa.flags)){var u=s.deletions;if(null!==u){for(var c=0;c<u.length;c++){var l=u[c];for(Wa=l;null!==Wa;){var d=Wa;switch(d.tag){case 0:case 11:case 15:Qa(8,d,s)}var h=d.child;if(null!==h)h.return=d,Wa=h;else for(;null!==Wa;){var f=(d=Wa).sibling,p=d.return;if(Ja(d),d===l){Wa=null;break}if(null!==f){f.return=p,Wa=f;break}Wa=p}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Wa=s}}if(0!=(2064&s.subtreeFlags)&&null!==a)a.return=s,Wa=a;else e:for(;null!==Wa;){if(0!=(2048&(s=Wa).flags))switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,Wa=v;break e}Wa=s.return}}var b=e.current;for(Wa=b;null!==Wa;){var w=(a=Wa).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,Wa=w;else e:for(a=b;null!==Wa;){if(0!=(2048&(u=Wa).flags))try{switch(u.tag){case 0:case 11:case 15:Ya(9,u)}}catch(e){pc(u,u.return,e)}if(u===a){Wa=null;break e}var _=u.sibling;if(null!==_){_.return=u.return,Wa=_;break e}Wa=u.return}}if(vu=i,ji(),nt&&"function"==typeof nt.onPostCommitFiberRoot)try{nt.onPostCommitFiberRoot(tt,e)}catch(e){}r=!0}return r}finally{gt=n,yu.transition=t}}return!1}function fc(e,t,n){e=Oo(e,t=aa(0,t=ra(n,t),1),1),t=$u(),null!==e&&(pt(e,1,t),Ku(e,t))}function pc(e,t,n){if(3===e.tag)fc(e,e,n);else for(;null!==t;){if(3===t.tag){fc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Mu||!Mu.has(r))){t=Oo(t,e=ua(t,e=ra(n,e),1),1),e=$u(),null!==t&&(pt(t,1,e),Ku(t,e));break}}t=t.return}}function mc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=$u(),e.pingedLanes|=e.suspendedLanes&n,bu===e&&(_u&n)===n&&(4===Iu||3===Iu&&(130023424&_u)===_u&&500>Ge()-Au?nc(e,0):Ou|=n),Ku(e,t)}function gc(e,t){0===t&&(0==(1&e.mode)?t=1:(t=at,0==(130023424&(at<<=1))&&(at=4194304)));var n=$u();null!==(e=So(e,t))&&(pt(e,t,n),Ku(e,n))}function yc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),gc(e,n)}function vc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),gc(e,n)}function bc(e,t){return $e(e,t)}function wc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _c(e,t,n,r){return new wc(e,t,n,r)}function Ec(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Sc(e,t){var n=e.alternate;return null===n?((n=_c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Ec(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case S:return kc(n.children,i,s,t);case I:a=8,i|=8;break;case k:return(e=_c(12,n,t,2|i)).elementType=k,e.lanes=s,e;case C:return(e=_c(13,n,t,i)).elementType=C,e.lanes=s,e;case N:return(e=_c(19,n,t,i)).elementType=N,e.lanes=s,e;case D:return Tc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case T:a=10;break e;case x:a=9;break e;case O:a=11;break e;case A:a=14;break e;case R:a=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=_c(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function kc(e,t,n,r){return(e=_c(7,e,r,t)).lanes=n,e}function Tc(e,t,n,r){return(e=_c(22,e,r,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function xc(e,t,n){return(e=_c(6,e,null,t)).lanes=n,e}function Oc(e,t,n){return(t=_c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ft(0),this.expirationTimes=ft(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,i,o,s,a,u){return e=new Cc(e,t,n,a,u),1===t?(t=1,!0===o&&(t|=8)):t=0,o=_c(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(o),e}function Ac(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:E,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return wi;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ki(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(ki(n))return Oi(e,n,t)}return t}function Dc(e,t,n,r,i,o,s,a,u){return(e=Nc(n,r,!0,e,0,o,0,a,u)).context=Rc(null),n=e.current,(o=xo(r=$u(),i=Wu(n))).callback=null!=t?t:null,Oo(n,o,i),e.current.lanes=i,pt(e,i,r),Ku(e,r),e}function Pc(e,t,n,r){var i=t.current,o=$u(),s=Wu(i);return n=Rc(n),null===t.context?t.context=n:t.pendingContext=n,(t=xo(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Oo(i,t,s))&&(Hu(e,i,s,o),Co(e,i,s)),s}function jc(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Mc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Lc(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}fu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ei.current)fa=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return fa=!1,function(e,t,n){switch(t.tag){case 3:Sa(t),so();break;case 5:Zo(t);break;case 1:ki(t.type)&&Ci(t);break;case 4:Xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;bi(lo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(bi(ts,1&ts.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Na(e,t,n):(bi(ts,1&ts.current),null!==(e=La(e,t,n))?e.sibling:null);bi(ts,1&ts.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return ja(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),bi(ts,ts.current),r)break;return null;case 22:case 23:return t.lanes=0,va(e,t,n)}return La(e,t,n)}(e,t,n);fa=0!=(131072&e.flags)}else fa=!1,Xi&&0!=(1048576&t.flags)&&Hi(t,Ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ma(e,t),e=t.pendingProps;var i=Ii(t,_i.current);vo(t,n),i=ys(null,t,r,e,i,n);var s=vs();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ki(r)?(s=!0,Ci(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ko(t),i.updater=jo,t.stateNode=i,i._reactInternals=t,Uo(t,r,e,n),t=Ea(null,t,r,!0,s,n)):(t.tag=0,Xi&&s&&Ki(t),pa(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ec(e)?1:0;if(null!=e){if((e=e.$$typeof)===O)return 11;if(e===A)return 14}return 2}(r),e=co(r,e),i){case 0:t=wa(null,t,r,e,n);break e;case 1:t=_a(null,t,r,e,n);break e;case 11:t=ma(null,t,r,e,n);break e;case 14:t=ga(null,t,r,co(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,wa(e,t,r,i=t.elementType===r?i:co(r,i),n);case 1:return r=t.type,i=t.pendingProps,_a(e,t,r,i=t.elementType===r?i:co(r,i),n);case 3:e:{if(Sa(t),null===e)throw Error(o(387));r=t.pendingProps,i=(s=t.memoizedState).element,To(e,t),Ao(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Ia(e,t,r,n,i=ra(Error(o(423)),t));break e}if(r!==i){t=Ia(e,t,r,n,i=ra(Error(o(424)),t));break e}for(Yi=ni(t.stateNode.containerInfo.firstChild),Qi=t,Xi=!0,Ji=null,n=Wo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(so(),r===i){t=La(e,t,n);break e}pa(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&no(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,Qr(r,i)?a=null:null!==s&&Qr(r,s)&&(t.flags|=32),ba(e,t),pa(e,t,a,n),t.child;case 6:return null===e&&no(t),null;case 13:return Na(e,t,n);case 4:return Xo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=$o(t,null,r,n):pa(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ma(e,t,r,i=t.elementType===r?i:co(r,i),n);case 7:return pa(e,t,t.pendingProps,n),t.child;case 8:case 12:return pa(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,bi(lo,r._currentValue),r._currentValue=a,null!==s)if(tr(s.value,a)){if(s.children===i.children&&!Ei.current){t=La(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var u=s.dependencies;if(null!==u){a=s.child;for(var c=u.firstContext;null!==c;){if(c.context===r){if(1===s.tag){(c=xo(-1,n&-n)).tag=2;var l=s.updateQueue;if(null!==l){var d=(l=l.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),l.pending=c}}s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),yo(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(o(341));a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),yo(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}pa(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vo(t,n),r=r(i=bo(i)),t.flags|=1,pa(e,t,r,n),t.child;case 14:return i=co(r=t.type,t.pendingProps),ga(e,t,r,i=co(r.type,i),n);case 15:return ya(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:co(r,i),Ma(e,t),t.tag=1,ki(r)?(e=!0,Ci(t)):e=!1,vo(t,n),Lo(t,r,i),Uo(t,r,i,n),Ea(null,t,r,!0,e,n);case 19:return ja(e,t,n);case 22:return va(e,t,n)}throw Error(o(156,t.tag))};var Fc="function"==typeof reportError?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}function Vc(e){this._internalRoot=e}function zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Bc(){}function $c(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if("function"==typeof i){var a=i;i=function(){var e=jc(s);a.call(e)}}Pc(t,s,e,i)}else s=function(e,t,n,r,i){if(i){if("function"==typeof r){var o=r;r=function(){var e=jc(s);o.call(e)}}var s=Dc(t,r,e,0,null,!1,0,"",Bc);return e._reactRootContainer=s,e[ai]=s.current,jr(8===e.nodeType?e.parentNode:e),ec(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=jc(u);a.call(e)}}var u=Nc(e,0,!1,null,0,!1,0,"",Bc);return e._reactRootContainer=u,e[ai]=u.current,jr(8===e.nodeType?e.parentNode:e),ec((function(){Pc(t,u,n,r)})),u}(n,t,e,i,r);return jc(s)}Vc.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Pc(e,t,null,null)},Vc.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ec((function(){Pc(null,e,null,null)})),t[ai]=null}},Vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&Pt(e)}},vt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(mt(t,1|n),Ku(t,Ge()),0==(6&vu)&&(Ru=Ge()+500,ji()))}break;case 13:ec((function(){var t=So(e,1);if(null!==t){var n=$u();Hu(t,e,1,n)}})),Lc(e,1)}},bt=function(e){if(13===e.tag){var t=So(e,134217728);if(null!==t)Hu(t,e,134217728,$u());Lc(e,134217728)}},wt=function(e){if(13===e.tag){var t=Wu(e),n=So(e,t);if(null!==n)Hu(n,e,t,$u());Lc(e,t)}},_t=function(){return gt},Et=function(e,t){var n=gt;try{return gt=e,t()}finally{gt=n}},we=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pi(r);if(!i)throw Error(o(90));H(r),X(r,i)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&te(e,!!n.multiple,t,!1)}},Te=Zu,xe=ec;var Wc={usingClientEntryPoint:!1,Events:[hi,fi,pi,Ie,ke,Zu]},Hc={findFiberByHostInstance:di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kc={bundleType:Hc.bundleType,version:Hc.version,rendererPackageName:Hc.rendererPackageName,rendererConfig:Hc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Be(e))?null:e.stateNode},findFiberByHostInstance:Hc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{tt=Gc.inject(Kc),nt=Gc}catch(e){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!zc(t))throw Error(o(200));return Ac(e,t,null,n)},t.createRoot=function(e,t){if(!zc(e))throw Error(o(299));var n=!1,r="",i=Fc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Nc(e,1,!1,null,0,n,0,r,i),e[ai]=t.current,jr(8===e.nodeType?e.parentNode:e),new Uc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Be(t))?null:e.stateNode},t.flushSync=function(e){return ec(e)},t.hydrate=function(e,t,n){if(!qc(t))throw Error(o(200));return $c(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!zc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=Fc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Dc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ai]=t.current,jr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vc(t)},t.render=function(e,t,n){if(!qc(t))throw Error(o(200));return $c(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qc(e))throw Error(o(40));return!!e._reactRootContainer&&(ec((function(){$c(null,null,e,!1,(function(){e._reactRootContainer=null,e[ai]=null}))})),!0)},t.unstable_batchedUpdates=Zu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return $c(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},function(e,t,n){"use strict";e.exports=n(91)},function(e,t,n){"use strict";(function(e){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var a=2*(r+1)-1,u=e[a],c=a+1,l=e[c];if(0>o(u,n))c<i&&0>o(l,u)?(e[r]=l,e[c]=n,r=c):(e[r]=u,e[a]=n,r=a);else{if(!(c<i&&0>o(l,n)))break e;e[r]=l,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var c=[],l=[],d=1,h=null,f=3,p=!1,m=!1,g=!1,y="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,b=void 0!==e?e:null;function w(e){for(var t=r(l);null!==t;){if(null===t.callback)i(l);else{if(!(t.startTime<=e))break;i(l),t.sortIndex=t.expirationTime,n(c,t)}t=r(l)}}function _(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,D(E);else{var t=r(l);null!==t&&P(_,t.startTime-e)}}function E(e,n){m=!1,g&&(g=!1,v(T),T=-1),p=!0;var o=f;try{for(w(n),h=r(c);null!==h&&(!(h.expirationTime>n)||e&&!C());){var s=h.callback;if("function"==typeof s){h.callback=null,f=h.priorityLevel;var a=s(h.expirationTime<=n);n=t.unstable_now(),"function"==typeof a?h.callback=a:h===r(c)&&i(c),w(n)}else i(c);h=r(c)}if(null!==h)var u=!0;else{var d=r(l);null!==d&&P(_,d.startTime-n),u=!1}return u}finally{h=null,f=o,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,I=!1,k=null,T=-1,x=5,O=-1;function C(){return!(t.unstable_now()-O<x)}function N(){if(null!==k){var e=t.unstable_now();O=e;var n=!0;try{n=k(!0,e)}finally{n?S():(I=!1,k=null)}}else I=!1}if("function"==typeof b)S=function(){b(N)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=N,S=function(){R.postMessage(null)}}else S=function(){y(N,0)};function D(e){k=e,I||(I=!0,S())}function P(e,n){T=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,D(E))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var s=t.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?s+o:s:o=s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:a=o+a,sortIndex:-1},o>s?(e.sortIndex=o,n(l,e),null===r(c)&&e===r(l)&&(g?(v(T),T=-1):g=!0,P(_,o-s))):(e.sortIndex=a,n(c,e),m||p||(m=!0,D(E))),e},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}).call(this,n(92).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(93),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(39))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,s,a,u=1,c={},l=!1,d=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(s="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&p(+t.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(s+t,"*")}),h.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[u]=i,r(u),u++},h.clearImmediate=f}function f(e){delete c[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(39),n(48))},function(e,t,n){"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0);var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,s=r.useEffect,a=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return a((function(){i.value=n,i.getSnapshot=t,c(i)&&l({inst:i})}),[e,n,t]),s((function(){return c(i)&&l({inst:i}),e((function(){c(i)&&l({inst:i})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},function(e,t,n){"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(58);var o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,a=r.useRef,u=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=a(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;d=c((function(){function e(e){if(!u){if(u=!0,s=e,e=r(e),void 0!==i&&h.hasValue){var t=h.value;if(i(t,e))return a=t}return a=e}if(t=a,o(s,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(s=e,a=n)}var s,a,u=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,i]);var f=s(e,d[0],d[1]);return u((function(){h.hasValue=!0,h.value=f}),[f]),l(f),f}},function(e,t,n){"use strict";e.exports=n(97)},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case d:case h:case s:case u:case a:case p:return e;default:switch(e=e&&e.$$typeof){case l:case f:case y:case g:case c:return e;default:return t}}case o:return t}}}function S(e){return E(e)===h}t.AsyncMode=d,t.ConcurrentMode=h,t.ContextConsumer=l,t.ContextProvider=c,t.Element=i,t.ForwardRef=f,t.Fragment=s,t.Lazy=y,t.Memo=g,t.Portal=o,t.Profiler=u,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||E(e)===d},t.isConcurrentMode=S,t.isContextConsumer=function(e){return E(e)===l},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return E(e)===f},t.isFragment=function(e){return E(e)===s},t.isLazy=function(e){return E(e)===y},t.isMemo=function(e){return E(e)===g},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===u},t.isStrictMode=function(e){return E(e)===a},t.isSuspense=function(e){return E(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===h||e===u||e===a||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===b||e.$$typeof===w||e.$$typeof===_||e.$$typeof===v)},t.typeOf=E},function(e,t,n){"use strict";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case s:case u:case a:case f:case p:return e;default:switch(e=e&&e.$$typeof){case d:case l:case h:case g:case m:case c:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference"),t.ContextConsumer=l,t.ContextProvider=c,t.Element=i,t.ForwardRef=h,t.Fragment=s,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=u,t.StrictMode=a,t.Suspense=f,t.SuspenseList=p,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return v(e)===h},t.isFragment=function(e){return v(e)===s},t.isLazy=function(e){return v(e)===g},t.isMemo=function(e){return v(e)===m},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===u},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===f},t.isSuspenseList=function(e){return v(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===u||e===a||e===f||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===h||e.$$typeof===r||void 0!==e.getModuleId)},t.typeOf=v},function(e,t,n){var r=n(25),i=n(100);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,"",""]),t.default=i},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,s,a=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(104);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";(function(e){var t=n(26),r=n(3),i=n(12),o=n(1);function s(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function a(e=Object(o.s)()){return!("file:"!==s()&&"ionic:"!==s()&&"capacitor:"!==s()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function u(e=Object(o.s)()){return Object(o.w)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Object(o.s)()){return/Edge\/\d+/.test(e)}(e)}function c(){try{const e=self.localStorage,t=r.s();if(e)return e.setItem(t,"1"),e.removeItem(t),!u()||Object(o.x)()}catch(e){return l()&&Object(o.x)()}return!1}function l(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function d(){return("http:"===s()||"https:"===s()||Object(o.u)()||a())&&!(Object(o.A)()||Object(o.z)())&&c()&&!l()}function h(){return a()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const f={LOCAL:"local",NONE:"none",SESSION:"session"},p=r.p;async function m(e){await e._initializationPromise;const t=g(),n=r.w("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function g(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=r.p;class v{constructor(){this.browserResolver=r.t(r.A),this.cordovaResolver=r.t(r.F),this.underlyingResolver=null,this._redirectPersistence=r.B,this._completeRedirectFn=r.u,this._overrideRedirectResult=r.v}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return h()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return y(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!h()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return e.unwrap()}function w(e){const{_tokenResponse:t}=e instanceof o.c?e.customData:e;if(!t)return null;if(!(e instanceof o.c)&&"temporaryProof"in t&&"phoneNumber"in t)return r.i.credentialFromResult(e);const n=t.providerId;if(!n||n===r.k.PASSWORD)return null;let i;switch(n){case r.k.GOOGLE:i=r.f;break;case r.k.FACEBOOK:i=r.d;break;case r.k.GITHUB:i=r.e;break;case r.k.TWITTER:i=r.o;break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:u}=t;return o||s||e||a?a?n.startsWith("saml.")?r.m._create(n,a):r.g._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:o}):new r.h(n).credential({idToken:e,accessToken:o,rawNonce:u}):null}return e instanceof o.c?i.credentialFromError(e):i.credentialFromResult(e)}function _(e,t){return t.catch(t=>{throw t instanceof o.c&&function(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new S(e,r.K(e,t))}else if(i){const e=w(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,w(i)),additionalUserInfo:r.J(e),user:I.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i})}async function E(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>_(e,n.confirm(t))}}class S{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return _(b(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this._delegate=e,this.multiFactor=r.T(e)}static getOrCreate(e){return I.USER_MAP.has(e)||I.USER_MAP.set(e,new I(e)),I.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return _(this.auth,r.P(this._delegate,e))}async linkWithPhoneNumber(e,t){return E(this.auth,r.Q(this._delegate,e,t))}async linkWithPopup(e){return _(this.auth,r.R(this._delegate,e,v))}async linkWithRedirect(e){return await m(r.q(this.auth)),r.S(this._delegate,e,v)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return _(this.auth,r.U(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return E(this.auth,r.V(this._delegate,e,t))}reauthenticateWithPopup(e){return _(this.auth,r.W(this._delegate,e,v))}async reauthenticateWithRedirect(e){return await m(r.q(this.auth)),r.X(this._delegate,e,v)}sendEmailVerification(e){return r.Y(this._delegate,e)}async unlink(e){return await r.jb(this._delegate,e),this}updateEmail(e){return r.kb(this._delegate,e)}updatePassword(e){return r.lb(this._delegate,e)}updatePhoneNumber(e){return r.mb(this._delegate,e)}updateProfile(e){return r.nb(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ob(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}I.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k=r.p;class T{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;k(n,"invalid-api-key",{appName:e.name}),k(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?v:void 0;this._delegate=t.initialize({options:{persistence:O(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.H),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?I.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.E(this._delegate,e,t)}applyActionCode(e){return r.y(this._delegate,e)}checkActionCode(e){return r.C(this._delegate,e)}confirmPasswordReset(e,t){return r.D(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return _(this._delegate,r.G(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.I(this._delegate,e)}isSignInWithEmailLink(e){return r.O(this._delegate,e)}async getRedirectResult(){k(d(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.L(this._delegate,v);return e?_(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r.x(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=x(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=x(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return r.ab(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.Z(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){p(Object.values(f).includes(t),e,"invalid-persistence-type"),Object(o.A)()?p(t!==f.SESSION,e,"unsupported-persistence-type"):Object(o.z)()?p(t===f.NONE,e,"unsupported-persistence-type"):l()?p(t===f.NONE||t===f.LOCAL&&Object(o.x)(),e,"unsupported-persistence-type"):p(t===f.NONE||c(),e,"unsupported-persistence-type")}(this._delegate,e),e){case f.SESSION:t=r.B;break;case f.LOCAL:t=await r.t(r.N)._isAvailable()?r.N:r.z;break;case f.NONE:t=r.M;break;default:return r.r("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return _(this._delegate,r.bb(this._delegate))}signInWithCredential(e){return _(this._delegate,r.cb(this._delegate,e))}signInWithCustomToken(e){return _(this._delegate,r.db(this._delegate,e))}signInWithEmailAndPassword(e,t){return _(this._delegate,r.eb(this._delegate,e,t))}signInWithEmailLink(e,t){return _(this._delegate,r.fb(this._delegate,e,t))}signInWithPhoneNumber(e,t){return E(this._delegate,r.gb(this._delegate,e,t))}async signInWithPopup(e){return k(d(),this._delegate,"operation-not-supported-in-this-environment"),_(this._delegate,r.hb(this._delegate,e,v))}async signInWithRedirect(e){return k(d(),this._delegate,"operation-not-supported-in-this-environment"),await m(this._delegate),r.ib(this._delegate,e,v)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.pb(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function x(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&I.getOrCreate(e)),error:t,complete:n}}function O(e,t){const n=function(e,t){const n=g();if(!n)return[];const i=r.w("persistence",e,t);switch(n.getItem(i)){case f.NONE:return[r.M];case f.LOCAL:return[r.N,r.B];case f.SESSION:return[r.B];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.N)||n.push(r.N),"undefined"!=typeof window)for(const e of[r.z,r.B])n.includes(e)||n.push(e);return n.includes(r.M)||n.push(r.M),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */T.Persistence=f;class C{constructor(){this.providerId="phone",this._delegate=new r.i(b(t.a.auth()))}static credential(e,t){return r.i.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}C.PHONE_SIGN_IN_METHOD=r.i.PHONE_SIGN_IN_METHOD,C.PROVIDER_ID=r.i.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=r.p;class A{constructor(e,n,i=t.a.app()){var o;N(null===(o=i.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r.l(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(R=t.a).INTERNAL.registerComponent(new i.a("auth-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new T(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.a.EMAIL_SIGNIN,PASSWORD_RESET:r.a.PASSWORD_RESET,RECOVER_EMAIL:r.a.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.a.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.a.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.a.VERIFY_EMAIL}},EmailAuthProvider:r.c,FacebookAuthProvider:r.d,GithubAuthProvider:r.e,GoogleAuthProvider:r.f,OAuthProvider:r.h,SAMLAuthProvider:r.n,PhoneAuthProvider:C,PhoneMultiFactorGenerator:r.j,RecaptchaVerifier:A,TwitterAuthProvider:r.o,Auth:T,AuthCredential:r.b,Error:o.c}).setInstantiationMode("LAZY").setMultipleInstances(!1)),R.registerVersion("@firebase/auth-compat","0.3.1")}).call(this,n(39))},function(e,t,n){var r=n(25),i=n(108);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap);"]),i.push([e.i,'.login {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  background: url("http://qsfs.fs.quoracdn.net/-4-images.home.illo_1920.png-26-e9e6fbe02d908942.png");\r\n}\r\n\r\n.login__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  width: 700px;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 10px;\r\n}\r\n\r\n.login__logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.login__desc {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.login__desc > h3 {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n  font-size: xx-large;\r\n  /* font-family: "Cedarville Cursive", cursive; */\r\n}\r\n.login__desc > p {\r\n  color: gray;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.login__auth {\r\n  display: flex;\r\n  margin-top: 50px;\r\n}\r\n\r\n.login__authOptions {\r\n  display: flex;\r\n  flex: 0.5;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  border-right: 1px solid lightgray;\r\n}\r\n\r\n.login__authOption {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 7px;\r\n  margin-bottom: 15px;\r\n  border: 1px solid lightgray;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.login__authOption:hover {\r\n  background-color: rgb(226, 226, 226);\r\n}\r\n\r\n.login__authOption > img {\r\n  height: 30px;\r\n  object-fit: contain;\r\n}\r\n\r\n.login__authOption > p {\r\n  margin-left: 11px;\r\n}\r\n\r\n.login__authDesc {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 7px;\r\n  margin-bottom: 15px;\r\n}\r\n.login__authDesc > p {\r\n  font-size: small;\r\n  color: gray;\r\n}\r\n\r\n.login__emailPass {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  flex: 0.5;\r\n  margin-left: 20px;\r\n}\r\n\r\n.login__label > h4 {\r\n  padding: 5px;\r\n}\r\n\r\n.login__inputFields {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\n.login__inputField {\r\n  padding: 5px;\r\n}\r\n\r\n.login__inputField > input {\r\n  padding: 10px;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  background-color: rgb(236, 236, 236);\r\n}\r\n\r\n.login__forgButt {\r\n  padding-left: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.login__forgButt > small {\r\n  color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\n.login__forgButt > small:hover {\r\n  color: blue;\r\n  text-decoration: underline;\r\n}\r\n\r\n.login__forgButt > button {\r\n  padding: 9px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: blue;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.login__emailPass > button {\r\n  padding: 9px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: blue;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}\r\n\r\n.login__lang {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-top: 1px solid lightgray;\r\n  border-bottom: 1px solid lightgray;\r\n  margin-top: 30px;\r\n  padding: 10px;\r\n}\r\n\r\n.login__lang > p {\r\n  color: gray;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n}\r\n\r\n.login__lang > p:hover {\r\n  color: gray;\r\n  margin-right: 5px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.login__lang > .MuiSvgIcon-root {\r\n  color: gray;\r\n}\r\n\r\n.login__footer {\r\n  padding-top: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.login__footer > p {\r\n  color: gray;\r\n  font-size: small;\r\n  cursor: pointer;\r\n}\r\n\r\n.login__footer > p:hover {\r\n  text-decoration: underline;\r\n}\r\n',""]),t.default=i},function(e,t,n){"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},function(e,t,n){var r=n(25),i=n(111);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,'.quora {\r\n    width: "100%";\r\n    min-width: fit-content;\r\n  }\r\n  \r\n  .quora__contents {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px 0;\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n    min-width: fit-content;\r\n    width: 100%;\r\n  }\r\n  \r\n  .quora__content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 0px 10px;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n  }\r\n  \r\n  .react-responsive-modal-modal {\r\n    width: 90vw;\r\n    height: 90vh;\r\n  }\r\n  \r\n  .quill {\r\n    height: 50vh;\r\n  }\r\n  \r\n  .react-responsive-modal-overlay {\r\n    background: rgb(0 0 0 / 75%);\r\n  }',""]),t.default=i},function(e,t,n){var r=n(25),i=n(113);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".qHeader {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    position: sticky;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    /* box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.5); */\r\n    box-shadow: 2px 3px 6px rgba(187, 187, 187, 0.5);\r\n    justify-content: center;\r\n    padding: 3px;\r\n  }\r\n  \r\n  .qHeader-content {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 5px;\r\n  }\r\n  \r\n  .qHeader__logo > img {\r\n    height: 30px !important;\r\n    object-fit: contain;\r\n    color: red;\r\n  }\r\n  \r\n  .qHeader__icons {\r\n    display: flex;\r\n  }\r\n  \r\n  .qHeader__icon {\r\n    padding: 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .qHeader__icon:hover {\r\n    background-color: #eee;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .qHeader__icon > .MuiSvgIcon-root {\r\n    color: gray;\r\n    font-size: xx-large;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .qHeader__icon:hover > .MuiSvgIcon-root {\r\n    color: #000;\r\n  }\r\n  \r\n  .qHeader__icons {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n  }\r\n  .qHeader__icons > .active > .MuiSvgIcon-root {\r\n    color: #8f1f1b;\r\n  }\r\n  .qHeader__icon > .MuiSvgIcon-root {\r\n    font-size: xx-large;\r\n    padding: 5px 20px;\r\n    color: gray;\r\n  }\r\n  .qHeader__icon > .MuiSvgIcon-root:hover {\r\n    background-color: rgba(233, 233, 233, 0.5);\r\n    border-radius: 10px;\r\n    color: #b92b27;\r\n  }\r\n  \r\n  .qHeader__input {\r\n    display: flex;\r\n    align-items: center;\r\n    border: 1px solid lightgray;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .qHeader__input > input {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    color: rgb(49, 49, 49);\r\n  }\r\n  \r\n  .qHeader__input > .MuiSvgIcon-root {\r\n    color: gray;\r\n  }\r\n  \r\n  .qHeader__avatar {\r\n    cursor: pointer;\r\n  }\r\n  .qHeader__Rem {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 25px;\r\n  }\r\n  \r\n  .qHeader__Rem > .MuiSvgIcon-root {\r\n    font-size: xx-large;\r\n    color: rgb(176, 10, 10)f1b;\r\n    margin-left: 25px;\r\n    cursor: pointer;\r\n  }\r\n  .qHeader__Rem > .MuiSvgIcon-root:hover {\r\n    color: #8f1f1b;\r\n  }\r\n  \r\n  .qHeader__Rem > .MuiButton-root {\r\n    color: grey;\r\n    font-weight: bold;\r\n    background: #8f0702;\r\n    text-transform: inherit;\r\n    border-radius: 15px;\r\n    margin-left: 25px;\r\n  }\r\n  \r\n  .qHeader__Rem > .MuiButton-root:hover {\r\n    color: #222;\r\n    background: #8f1f1b;\r\n  }\r\n  \r\n  /* modal */\r\n\r\n  .modal__title {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 5px;\r\n    border-bottom: 1px solid rgba(187, 187, 187, 0.5);\r\n  }\r\n  \r\n  .modal__title > h5 {\r\n    color: gray;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n    margin-right: 30px;\r\n  }\r\n  \r\n  .modal__title > h5:hover {\r\n    color: #b92b27;\r\n  }\r\n  \r\n  .modal__info {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .modal__info > p {\r\n    margin-left: 10px;\r\n    font-size: small;\r\n    color: gray;\r\n  }\r\n  \r\n  .modal__info > .modal__scope {\r\n    display: flex;\r\n    align-items: center;\r\n    color: rgb(98, 98, 98);\r\n    padding: 5px;\r\n    margin-left: 10px;\r\n    background-color: rgb(230, 230, 230);\r\n    border-radius: 33px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .modal__field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 30px;\r\n    flex: 1;\r\n  }\r\n  \r\n  .modal__field > .modal__fieldLink {\r\n    color: gray;\r\n    display: flex;\r\n    margin-top: 10px;\r\n    align-items: center;\r\n  }\r\n  \r\n  .modal__field > .modal__fieldLink > input {\r\n    flex: 1;\r\n    border: none;\r\n    outline: none;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n  .modal__buttons {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 260px;\r\n    margin-right: -20px;\r\n    border-top: 1px solid lightgray;\r\n  }\r\n  \r\n  .modal__buttons > .cancel {\r\n    margin-left: auto;\r\n    border: none;\r\n    margin-top: 5px;\r\n    outline: none;\r\n    color: gray;\r\n    font-weight: 500;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    border-radius: 33px;\r\n    cursor: pointer;\r\n  }\r\n  .modal__buttons > .add {\r\n    border: none;\r\n    outline: none;\r\n    margin-top: 5px;\r\n    background-color: rgb(0, 64, 255);\r\n    color: white;\r\n    font-weight: 700;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    border-radius: 33px;\r\n    cursor: pointer;\r\n  }",""]),t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),s=p(o),a=p(n(40)),u=p(n(21)),c=p(n(117)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(68)),d=n(57),h=p(d),f=n(124);function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=t.portalClassName="ReactModalPortal",v=t.bodyOpenClassName="ReactModal__Body--open",b=d.canUseDOM&&void 0!==a.default.createPortal,w=function(e){return document.createElement(e)},_=function(){return b?a.default.createPortal:a.default.unstable_renderSubtreeIntoContainer};function E(e){return e()}var S=function(e){function t(){var e,n,i;m(this,t);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=i=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.removePortal=function(){!b&&a.default.unmountComponentAtNode(i.node);var e=E(i.props.parentSelector);e&&e.contains(i.node)?e.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(e){i.portal=e},i.renderPortal=function(e){var n=_()(i,s.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),i.node);i.portalRef(n)},g(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(b||(this.node=w("div")),this.node.className=this.props.portalClassName,E(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:E(e.parentSelector),nextParent:E(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,i=r.isOpen,o=r.portalClassName;e.portalClassName!==o&&(this.node.className=o);var s=n.prevParent,a=n.nextParent;a!==s&&(s.removeChild(this.node),a.appendChild(this.node)),(e.isOpen||i)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&b?(!this.node&&b&&(this.node=w("div")),_()(s.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){l.setElement(e)}}]),t}(o.Component);S.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(h.default),u.default.instanceOf(d.SafeHTMLCollection),u.default.instanceOf(d.SafeNodeList),u.default.arrayOf(u.default.instanceOf(h.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func},S.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:v,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return s.default.createElement("div",e,t)},contentElement:function(e,t){return s.default.createElement("div",e,t)}},S.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(S),t.default=S},function(e,t,n){"use strict";var r=n(116);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),a=g(n(21)),u=m(n(118)),c=g(n(119)),l=m(n(68)),d=m(n(122)),h=n(57),f=g(h),p=g(n(69));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(123);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,i=e.htmlOpenClassName,o=e.bodyOpenClassName,s=e.parentSelector,a=s&&s().ownerDocument||document;o&&d.remove(a.body,o),i&&d.remove(a.getElementsByTagName("html")[0],i),r&&v>0&&0===(v-=1)&&l.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(n.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),p.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node),u.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===(void 0===t?"undefined":i(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},o=r.base;return n.state.afterOpen&&(o=o+" "+r.afterOpen),n.state.beforeClose&&(o=o+" "+r.beforeClose),"string"==typeof t&&t?o+" "+t:o},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,o=e.parentSelector,s=o&&o().ownerDocument||document;i&&d.add(s.body,i),r&&d.add(s.getElementsByTagName("html")[0],r),n&&(v+=1,l.hide(t)),p.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,i=e.overlayClassName,o=e.defaultStyles,s=e.children,a=n?{}:o.content,u=i?{}:o.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",i),style:r({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l=r({id:t,ref:this.setContentRef,style:r({},a,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(l,s);return this.props.overlayElement(c,d)}}]),t}(s.Component);b.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},b.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(f.default),a.default.instanceOf(h.SafeHTMLCollection),a.default.instanceOf(h.SafeNodeList),a.default.arrayOf(a.default.instanceOf(f.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},t.default=b,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=l,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==s.length&&(t=s.pop()).focus({preventScroll:e}))}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){a=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",l,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",l))},t.teardownScopedFocus=function(){a=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",l)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",l))};var r,i=n(67),o=(r=i)&&r.__esModule?r:{default:r};var s=[],a=null,u=!1;function c(){u=!0}function l(){if(u){if(u=!1,!a)return;setTimeout((function(){a.contains(document.activeElement)||((0,o.default)(a)[0]||a).focus()}),0)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,i=t.shiftKey,s=n[0],a=n[n.length-1],u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return t.activeElement.shadowRoot?e(t.activeElement.shadowRoot):t.activeElement}();if(e===u){if(!i)return;r=a}a!==u||i||(r=s);s===u&&i&&(r=a);if(r)return t.preventDefault(),void r.focus();var c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==c||"Chrome"==c[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var l=n.indexOf(u);l>-1&&(l+=i?-1:1);if(void 0===(r=n[l]))return t.preventDefault(),void(r=i?a:s).focus();t.preventDefault(),r.focus()};var r,i=n(67),o=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var i=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in r)o(e,r[t]);var n=document.body;for(var s in i)o(n,i[s]);r={},i={}},t.log=function(){0};var r={},i={};function o(e,t){e.classList.remove(t)}t.add=function(e,t){return n=e.classList,o="html"==e.nodeName.toLowerCase()?r:i,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(o,e),n.add(e)}));var n,o},t.remove=function(e,t){return n=e.classList,o="html"==e.nodeName.toLowerCase()?r:i,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(o,e),0===o[e]&&n.remove(e)}));var n,o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[s,a],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}s=a=null,u=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(u.length);for(var e=[s,a],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,i=n(69),o=(r=i)&&r.__esModule?r:{default:r};var s=void 0,a=void 0,u=[];function c(){0!==u.length&&u[u.length-1].focusContent()}o.default.subscribe((function(e,t){s||a||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",c),(a=s.cloneNode()).addEventListener("focus",c)),(u=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(s.parentElement&&s.parentElement.removeChild(s),a.parentElement&&a.parentElement.removeChild(a))}))},function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function i(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function o(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var u=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=i),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},function(e,t,n){var r=n(25),i=n(126);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".sidebar {\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n    flex: 0.2;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(128);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".sidebarOptions {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .sidebarOption {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .sidebarOption:hover {\r\n    background: rgb(211, 211, 211);\r\n    border-radius: 5px;\r\n  }\r\n  .sidebarOption > img {\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    margin-left: 20px;\r\n  }\r\n  \r\n  .sidebarOption > .MuiSvgIcon-root {\r\n    font-size: medium;\r\n    margin-left: 20px;\r\n  }\r\n  .sidebarOption > p {\r\n    margin-left: 10px;\r\n    color: gray;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .sidebarOption > .text {\r\n    margin-left: 23px;\r\n    color: gray;\r\n    font-weight: 400;\r\n    font-size: 13px;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(130);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".feed {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 0.6;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(132);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".quoraBox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    padding: 10px;\r\n    border: 1px solid lightgray;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    max-width: 700px;\r\n  }\r\n  \r\n  .quoraBox:hover {\r\n    border: 1px solid grey;\r\n  }\r\n  \r\n  .quoraBox__info {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .quoraBox__info > h5 {\r\n    color: rgb(129, 129, 129);\r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n    font-size: large;\r\n  }\r\n  \r\n  .quoraBox__quora {\r\n    display: flex;\r\n    margin-top: 8px;\r\n  }\r\n  .quoraBox__quora >p {\r\n    font-size: large;\r\n    color: grey;\r\n    font-weight: bold;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(134);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".post {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    background-color: white;\r\n    margin-top: 10px;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    max-width: 700px;\r\n    box-shadow: 0px 5px 8px -9px solid rgab(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .post__info {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .post__info > h4 {\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n  }\r\n  .post__info > h4:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .post__info > small {\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .post__body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .post__body > .post__question {\r\n    margin-top: 10px;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    flex: 1;\r\n  }\r\n  \r\n  .post__question > .post__btnAnswer {\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n    padding: 7px;\r\n    background-color: #222;\r\n    outline: none;\r\n    border: none;\r\n    color: lightgray;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .post__btnAnswer:hover {\r\n    color: #222;\r\n    background: lightgray;\r\n  }\r\n  \r\n  .post__question > p:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .post__body > .post__answer > p {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  /* .post__image {\r\n    background: rgb(0, 140, 255);\r\n  } */\r\n  \r\n  .post__body > img {\r\n    width: 100%;\r\n    max-height: 400px;\r\n    object-fit: contain;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .post__footer {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .post__footer > .MuiSvgIcon-root {\r\n    color: gray;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .post__footerAction {\r\n    background-color: lightgray;\r\n    padding: 5px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    border-radius: 33px;\r\n  }\r\n  .post__footerAction > .MuiSvgIcon-root {\r\n    color: gray;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .post__footerAction > .MuiSvgIcon-root:hover {\r\n    color: rgb(0, 140, 255);\r\n    margin-right: 40px;\r\n  }\r\n  \r\n  .post__footerLeft {\r\n    margin-left: auto;\r\n  }\r\n  \r\n  .post__footerLeft > .MuiSvgIcon-root {\r\n    color: gray;\r\n    cursor: pointer;\r\n    margin-left: 30px;\r\n  }\r\n\r\n  \r\n.modal__question {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal__question > h1 {\r\n  color: #8f1f1b;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.modal__question > p {\r\n  color: gray;\r\n  font-size: small;\r\n}\r\n\r\n.modal__question > p > .name {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.modal__answer {\r\n  display: flex;\r\n  padding-top: 20px;\r\n  flex: 1;\r\n}\r\n\r\n.modal__answer > textarea {\r\n  width: 100%;\r\n  height: 200px;\r\n  padding: 5px;\r\n  font-size: 15px;\r\n  color: blue;\r\n}\r\n\r\n.modal__button {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: -20px;\r\n  border-top: 1px solid lightgray;\r\n}\r\n\r\n.modal__button > .cancle {\r\n  margin-left: auto;\r\n  border: none;\r\n  margin-top: 5px;\r\n  outline: none;\r\n  color: gray;\r\n  font-weight: 500;\r\n  padding: 10px;\r\n  margin-right: 10px;\r\n  border-radius: 33px;\r\n  cursor: pointer;\r\n}\r\n.modal__button > .add {\r\n  border: none;\r\n  outline: none;\r\n  margin-top: 5px;\r\n  background-color: rgb(0, 64, 255);\r\n  color: white;\r\n  font-weight: 700;\r\n  padding: 10px;\r\n  margin-right: 10px;\r\n  border-radius: 33px;\r\n  cursor: pointer;\r\n}",""]),t.default=i},function(e,t,n){var r=n(25),i=n(136);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".widget {\r\n    flex: 0.2;\r\n    margin-left: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 20px;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    height: fit-content;\r\n    background-color: white;\r\n  }\r\n  \r\n  .widget__header {\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n  \r\n  .widget__header > h5 {\r\n    padding: 10px;\r\n    color: rgb(80, 80, 80);\r\n    font-size: 15px;\r\n    letter-spacing: 1.1px;\r\n  }\r\n  \r\n  .widget__contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(138);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,".widget__contents {\r\n    display: flex;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .widget__content {\r\n    margin: 5px;\r\n    display: flex;\r\n    padding: 5px;\r\n    border-bottom: 1px solid lightgray;\r\n  }\r\n  \r\n  .widget__content > img {\r\n    height: 30px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .widget__contentTitle {\r\n    margin-left: 10px;\r\n  }\r\n  .widget__contentTitle > h5 {\r\n    color: rgb(70, 68, 68);\r\n  }\r\n  \r\n  .widget__contentTitle > p {\r\n    color: gray;\r\n    font-size: small;\r\n  }",""]),t.default=i},function(e,t,n){var r=n(25),i=n(140);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r)()(!1);i.push([e.i,"*{\r\n    margin: 0;\r\n  }",""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(70),s=n(58),a=n(71),u=n(40);let c=function(e){e()};const l=Object(r.createContext)(null);function d(){return Object(r.useContext)(l)}const h=()=>{throw new Error("uSES not initialized!")};let f=h;const p=(e,t)=>e===t;function m(e=l){const t=e===l?d:()=>Object(r.useContext)(e);return function(e,n=p){const{store:i,subscription:o,getServerState:s}=t(),a=f(o.addNestedSub,i.getState,s||i.getState,e,n);return Object(r.useDebugValue)(a),a}}const g=m();var y=n(2),v=n(9);n(41),n(72);function b(){const e=c;let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,i=n={callback:e,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){r&&null!==t&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const w={notify(){},get:()=>[]};function _(e,t){let n,r=w;function i(){s.onStateChange&&s.onStateChange()}function o(){n||(n=t?t.addNestedSub(i):e.subscribe(i),r=b())}const s={addNestedSub:function(e){return o(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(n)},trySubscribe:o,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=w)},getListeners:()=>r};return s}const E=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?r.useLayoutEffect:r.useEffect;let S=h;var I=function({store:e,context:t,children:n,serverState:o}){const s=Object(r.useMemo)(()=>{const t=_(e);return{store:e,subscription:t,getServerState:o?()=>o:void 0}},[e,o]),a=Object(r.useMemo)(()=>e.getState(),[e]);E(()=>{const{subscription:t}=s;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),a!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[s,a]);const u=t||l;return i.a.createElement(u.Provider,{value:s},n)};function k(e=l){const t=e===l?d:()=>Object(r.useContext)(e);return function(){const{store:e}=t();return e}}const T=k();function x(e=l){const t=e===l?T:k(e);return function(){return t().dispatch}}const O=x();var C,N;C=a.useSyncExternalStoreWithSelector,f=C,(e=>{S=e})(s.useSyncExternalStore),N=u.unstable_batchedUpdates,c=N;var A=n(42),R=Object(A.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),D=R.actions,P=D.login,j=D.logout,M=function(e){return e.user.user},L=R.reducer,F=Object(A.b)({name:"question",initialState:{questionId:null,questionName:null},reducers:{setQuestionInfo:function(e,t){e.questionId=t.payload.questionId,e.questionName=t.payload.questionName}}}),U=F.actions.setQuestionInfo,V=function(e){return e.question.questionId},z=F.reducer,q=Object(A.a)({reducer:{user:L,question:z}}),B=(n(99),n(24)),$=n.n(B),W=n(73),H=n.n(W),K=n(26);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
K.a.registerVersion("firebase","9.16.0","app-compat");n(106);var G=n(4),Q=n(1),Y=n(12);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new G.g("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){if("undefined"==typeof Uint8Array)throw new G.g("unimplemented","Uint8Arrays are not available in this environment.")}function Z(){if(!Object(G.r)())throw new G.g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ee{constructor(e){this._delegate=e}static fromBase64String(e){return Z(),new ee(G.b.fromBase64String(e))}static fromUint8Array(e){return J(),new ee(G.b.fromUint8Array(e))}toBase64(){return Z(),this._delegate.toBase64()}toUint8Array(){return J(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class ne{enableIndexedDbPersistence(e,t){return Object(G.F)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(G.G)(e._delegate)}clearIndexedDbPersistence(e){return Object(G.x)(e._delegate)}}class re{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof G.m||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(G.s)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(G.A)(this._delegate,e,t,n)}enableNetwork(){return Object(G.H)(this._delegate)}disableNetwork(){return Object(G.D)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(G.t)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(G.lb)(this._delegate)}onSnapshotsInSync(e){return Object(G.Y)(this._delegate,e)}get app(){if(!this._appCompat)throw new G.g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ye(this,Object(G.y)(this._delegate,e))}catch(e){throw ce(e,"collection()","Firestore.collection()")}}doc(e){try{return new ue(this,Object(G.E)(this._delegate,e))}catch(e){throw ce(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pe(this,Object(G.z)(this._delegate,e))}catch(e){throw ce(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(G.db)(this._delegate,t=>e(new oe(this,t)))}batch(){return Object(G.K)(this._delegate),new se(new G.l(this._delegate,e=>Object(G.L)(this._delegate,e)))}loadBundle(e){return Object(G.V)(this._delegate,e)}namedQuery(e){return Object(G.W)(this._delegate,e).then(e=>e?new pe(this,e):null)}}class ie extends G.a{constructor(e){super(),this.firestore=e}convertBytes(e){return new ee(new G.b(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ue.forKey(t,this.firestore,null)}}class oe{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ie(e)}get(e){const t=ve(e);return this._delegate.get(t).then(e=>new he(this._firestore,new G.e(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=ve(e);return n?(X("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ve(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ve(e);return this._delegate.delete(t),this}}class se{constructor(e){this._delegate=e}set(e,t,n){const r=ve(e);return n?(X("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=ve(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=ve(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ae{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new G.i(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new fe(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=ae.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new ae(e,new ie(e),t),r.set(t,i)),i}}ae.INSTANCES=new WeakMap;class ue{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ie(e)}static forPath(e,t,n){if(e.length%2!=0)throw new G.g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ue(t,new G.d(t._delegate,n,new G.n(e)))}static forKey(e,t,n){return new ue(t,new G.d(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ye(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ye(this.firestore,Object(G.y)(this._delegate,e))}catch(e){throw ce(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Object(Q.r)(e))instanceof G.d&&Object(G.cb)(this._delegate,e)}set(e,t){t=X("DocumentReference.set",t);try{return t?Object(G.fb)(this._delegate,e,t):Object(G.fb)(this._delegate,e)}catch(e){throw ce(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(G.kb)(this._delegate,e):Object(G.kb)(this._delegate,e,t,...n)}catch(e){throw ce(e,"updateDoc()","DocumentReference.update()")}}delete(){return Object(G.B)(this._delegate)}onSnapshot(...e){const t=le(e),n=de(e,e=>new he(this.firestore,new G.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(G.X)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(G.N)(this._delegate):"server"===(null==e?void 0:e.source)?Object(G.O)(this._delegate):Object(G.M)(this._delegate),t.then(e=>new he(this.firestore,new G.e(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new ue(this.firestore,e?this._delegate.withConverter(ae.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ce(e,t,n){return e.message=e.message.replace(t,n),e}function le(e){for(const t of e)if("object"==typeof t&&!te(t))return t;return{}}function de(e,t){var n,r;let i;return i=te(e[0])?e[0]:te(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class he{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ue(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(G.hb)(this._delegate,e._delegate)}}class fe extends he{data(e){const t=this._delegate.data(e);return Object(G.q)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class pe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ie(e)}where(e,t,n){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.mb)(e,t,n)))}catch(e){throw ce(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.Z)(e,t)))}catch(e){throw ce(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.T)(e)))}catch(e){throw ce(e,"limit()","Query.limit()")}}limitToLast(e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.U)(e)))}catch(e){throw ce(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.jb)(...e)))}catch(e){throw ce(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.ib)(...e)))}catch(e){throw ce(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.J)(...e)))}catch(e){throw ce(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pe(this.firestore,Object(G.ab)(this._delegate,Object(G.I)(...e)))}catch(e){throw ce(e,"endAt()","Query.endAt()")}}isEqual(e){return Object(G.bb)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?Object(G.Q)(this._delegate):"server"===(null==e?void 0:e.source)?Object(G.R)(this._delegate):Object(G.P)(this._delegate),t.then(e=>new ge(this.firestore,new G.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=le(e),n=de(e,e=>new ge(this.firestore,new G.j(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(G.X)(this._delegate,t,n)}withConverter(e){return new pe(this.firestore,e?this._delegate.withConverter(ae.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class me{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new fe(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ge{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new pe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new fe(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new me(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new fe(this._firestore,n))})}isEqual(e){return Object(G.hb)(this._delegate,e._delegate)}}class ye extends pe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ue(this.firestore,e):null}doc(e){try{return new ue(this.firestore,void 0===e?Object(G.E)(this._delegate):Object(G.E)(this._delegate,e))}catch(e){throw ce(e,"doc()","CollectionReference.doc()")}}add(e){return Object(G.u)(this._delegate,e).then(e=>new ue(this.firestore,e))}isEqual(e){return Object(G.cb)(this._delegate,e._delegate)}withConverter(e){return new ye(this.firestore,e?this._delegate.withConverter(ae.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ve(e){return Object(G.p)(e,G.d)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(...e){this._delegate=new G.f(...e)}static documentId(){return new be(G.o.keyField().canonicalString())}isEqual(e){return(e=Object(Q.r)(e))instanceof G.f&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(G.eb)();return e._methodName="FieldValue.serverTimestamp",new we(e)}static delete(){const e=Object(G.C)();return e._methodName="FieldValue.delete",new we(e)}static arrayUnion(...e){const t=Object(G.w)(...e);return t._methodName="FieldValue.arrayUnion",new we(t)}static arrayRemove(...e){const t=Object(G.v)(...e);return t._methodName="FieldValue.arrayRemove",new we(t)}static increment(e){const t=Object(G.S)(e);return t._methodName="FieldValue.increment",new we(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e={Firestore:re,GeoPoint:G.h,Timestamp:G.k,Blob:ee,Transaction:oe,WriteBatch:se,DocumentReference:ue,DocumentSnapshot:he,Query:pe,QueryDocumentSnapshot:fe,QuerySnapshot:ge,CollectionReference:ye,FieldPath:be,FieldValue:we,setLogLevel:function(e){Object(G.gb)(e)},CACHE_SIZE_UNLIMITED:G.c};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ee,Se;Ee=K.a,Se=(e,t)=>new re(e,t,new ne),Ee.INTERNAL.registerComponent(new Y.a("firestore-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return Se(t,n)},"PUBLIC").setServiceProps(Object.assign({},_e))),Ee.registerVersion("@firebase/firestore-compat","0.3.1");var Ie=n(6);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(Ie.registerVersion)("firebase","9.16.0","app");var ke=n(17),Te=n(54);const xe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oe=new Q.b("installations","Installations",xe);function Ce(e){return e instanceof Q.c&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ae(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Re(e,t){const n=(await t.json()).error;return Oe.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function De({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pe(e,{refreshToken:t}){const n=De(e);return n.append("Authorization",function(e){return"FIS_v2 "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function je(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Le=/^[cdef][\w-]{21}$/;function Fe(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Le.test(t)?t:""}catch(e){return""}}function Ue(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Map;function ze(e,t){const n=Ue(e);qe(n,t),function(e,t){const n=$e();n&&n.postMessage({key:e,fid:t});We()}(n,t)}function qe(e,t){const n=Ve.get(e);if(n)for(const e of n)e(t)}let Be=null;function $e(){return!Be&&"BroadcastChannel"in self&&(Be=new BroadcastChannel("[Firebase] FID Change"),Be.onmessage=e=>{qe(e.data.key,e.data.fid)}),Be}function We(){0===Ve.size&&Be&&(Be.close(),Be=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="firebase-installations-store";let Ke=null;function Ge(){return Ke||(Ke=Object(Te.a)("firebase-installations-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(He)}}})),Ke}async function Qe(e,t){const n=Ue(e),r=(await Ge()).transaction(He,"readwrite"),i=r.objectStore(He),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||ze(e,t.fid),t}async function Ye(e){const t=Ue(e),n=(await Ge()).transaction(He,"readwrite");await n.objectStore(He).delete(t),await n.done}async function Xe(e,t){const n=Ue(e),r=(await Ge()).transaction(He,"readwrite"),i=r.objectStore(He),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||o&&o.fid===s.fid||ze(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e){let t;const n=await Xe(e.appConfig,n=>{const r=function(e){return tt(e||{fid:Fe(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(Oe.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ne(e),i=De(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.1"},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await je(()=>fetch(r,a));if(u.ok){const e=await u.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ae(e.authToken)}}throw await Re("Create Installation",u)}(e,t);return Qe(e.appConfig,n)}catch(n){throw Ce(n)&&409===n.customData.serverCode?await Ye(e.appConfig):await Qe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ze(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ze(e){let t=await et(e.appConfig);for(;1===t.registrationStatus;)await Me(100),t=await et(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Je(e);return n||t}return t}function et(e){return Xe(e,e=>{if(!e)throw Oe.create("installation-not-found");return tt(e)})}function tt(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function nt({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Ne(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=Pe(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:"w:0.6.1",appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await je(()=>fetch(r,a));if(u.ok){return Ae(await u.json())}throw await Re("Generate Auth Token",u)}async function rt(e,t=!1){let n;const r=await Xe(e.appConfig,r=>{if(!ot(r))throw Oe.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await it(e.appConfig);for(;1===n.authToken.requestStatus;)await Me(100),n=await it(e.appConfig);const r=n.authToken;return 0===r.requestStatus?rt(e,t):r}(e,t),r;{if(!navigator.onLine)throw Oe.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await nt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Qe(e.appConfig,r),n}catch(n){if(!Ce(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Qe(e.appConfig,n)}else await Ye(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function it(e){return Xe(e,e=>{if(!ot(e))throw Oe.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function ot(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Je(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await rt(n,t)).token}function at(e){return Oe.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw at("App Configuration");if(!e.name)throw at("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw at(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Object(Ie._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},ct=e=>{const t=e.getProvider("app").getImmediate(),n=Object(Ie._getProvider)(t,"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Je(t);return r?r.catch(console.error):rt(t).catch(console.error),n.fid}(n),getToken:e=>st(n,e)}};Object(Ie._registerComponent)(new Y.a("installations",ut,"PUBLIC")),Object(Ie._registerComponent)(new Y.a("installations-internal",ct,"PRIVATE")),Object(Ie.registerVersion)("@firebase/installations","0.6.1"),Object(Ie.registerVersion)("@firebase/installations","0.6.1","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt="https://www.googletagmanager.com/gtag/js",dt=new ke.b("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function ft(e,t,n,r){return async function(i,o,s){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await ht(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(e){dt.error(e)}}(e,t,n,o,s):"config"===i?await async function(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=(await ht(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){dt.error(e)}e("config",i,o)}(e,t,n,r,o,s):"consent"===i?e("consent","update",s):e("set",o)}catch(e){dt.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},mt=new Q.b("analytics","Analytics",pt);const gt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function yt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function vt(e,t=gt,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw mt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw mt.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bt;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),async function e(t,{throttleEndTimeMillis:n,backoffCount:r},i,o=gt){var s;const{appId:a,measurementId:u}=t;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(mt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(i,n)}catch(e){if(u)return dt.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+` provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:a,measurementId:u};throw e}try{const e=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:yt(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw mt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(t);return o.deleteThrottleMetadata(a),e}catch(n){const c=n;if(!function(e){if(!(e instanceof Q.c&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(o.deleteThrottleMetadata(a),u)return dt.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+u+` provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:a,measurementId:u};throw n}const l=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?Object(Q.g)(r,o.intervalMillis,30):Object(Q.g)(r,o.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:r+1};return o.setThrottleMetadata(a,d),dt.debug(`Calling attemptFetch again in ${l} millis`),e(t,d,i,o)}}({appId:r,apiKey:i,measurementId:o},s,a,t)}class bt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt,_t;function Et(e){_t=e}function St(e){wt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e,t,n,r,i,o,s){var a;const u=vt(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&dt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>dt.error(e)),t.push(u);const c=async function(){if(!Object(Q.x)())return dt.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(Q.E)()}catch(e){return dt.warn(mt.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[l,d]=await Promise.all([u,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(lt)&&n.src.includes(e))return n;return null})(o)||function(e,t){const n=document.createElement("script");n.src=`${lt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(o,l.measurementId),_t&&(i("consent","default",_t),Et(void 0)),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h.origin="firebase",h.update=!0,null!=d&&(h.firebase_id=d),i("config",l.measurementId,h),wt&&(i("set",wt),St(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.app=e}_delete(){return delete Tt[this.app.options.appId],Promise.resolve()}}let Tt={},xt=[];const Ot={};let Ct,Nt,At="dataLayer",Rt="gtag",Dt=!1;function Pt(e,t,n){!function(){const e=[];if(Object(Q.u)()&&e.push("This is a browser extension environment."),Object(Q.d)()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=mt.create("invalid-analytics-context",{errorInfo:t});dt.warn(n.message)}}();const r=e.options.appId;if(!r)throw mt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw mt.create("no-api-key");dt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Tt[r])throw mt.create("already-exists",{id:r});if(!Dt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(At);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=ft(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(Tt,xt,Ot,At,Rt);Nt=e,Ct=t,Dt=!0}Tt[r]=It(e,xt,Ot,t,Ct,At,n);return new kt(e)}function jt(e,t,n,r){e=Object(Q.r)(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Nt,Tt[e.app.options.appId],t,n,r).catch(e=>dt.error(e))}Object(Ie._registerComponent)(new Y.a("analytics",(e,{options:t})=>Pt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Object(Ie._registerComponent)(new Y.a("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,r)=>jt(t,e,n,r)}}catch(e){throw mt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Object(Ie.registerVersion)("@firebase/analytics","0.9.1"),Object(Ie.registerVersion)("@firebase/analytics","0.9.1","esm2017");var Mt=K.a.initializeApp({apiKey:"AIzaSyDv8Pd1kxXS87OBt3abara1cJfFvtG2xHM",authDomain:"quora-clone-14366.firebaseapp.com",projectId:"quora-clone-14366",storageBucket:"quora-clone-14366.appspot.com",messagingSenderId:"612555366690",appId:"1:612555366690:web:f33a2ccba3cb331e63057b",measurementId:"G-JYD82BCE34"}),Lt=K.a.auth(),Ft=new K.a.auth.GoogleAuthProvider,Ut=Mt.firestore();n(107);function Vt(){var e=Object(r.useState)(""),t=$()(e,2),n=t[0],o=t[1],s=Object(r.useState)(""),a=$()(s,2),u=a[0],c=a[1];return i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"login__container"},i.a.createElement("div",{className:"login__logo"},i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png",alt:""})),i.a.createElement("div",{className:"login__desc"},i.a.createElement("p",null,"A Place to Share knowledge and better understand the world"),i.a.createElement("p",{style:{color:"royalblue",fontSize:"25px"}},"Used this website, explore more knowledge and Share knowledge"),i.a.createElement("h3",null,"Developed as Project for Newton School by Anand Sahu")),i.a.createElement("div",{className:"login__auth"},i.a.createElement("div",{className:"login__authOptions"},i.a.createElement("div",{className:"login__authOption"},i.a.createElement("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),i.a.createElement("p",{onClick:function(){Lt.signInWithPopup(Ft).catch((function(e){alert(e.message)}))}},"Continue With Google")),i.a.createElement("div",{className:"login__authOption"},i.a.createElement("img",{className:"login__googleAuth",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",alt:""}),i.a.createElement("span",null,"Continue With Facebook")),i.a.createElement("div",{className:"login__authDesc"},i.a.createElement("p",null,i.a.createElement("span",{style:{color:"blue",cursor:"pointer"}},"Sign Up With Email"),". By continuing you indicate that you have read and agree to Quora's",i.a.createElement("span",{style:{color:"blue",cursor:"pointer"}},"Terms of Service"," "),"and"," ",i.a.createElement("span",{style:{color:"blue",cursor:"pointer"}},"Privacy Policy"),"."))),i.a.createElement("div",{className:"login__emailPass"},i.a.createElement("div",{className:"login__label"},i.a.createElement("h4",null,"Login")),i.a.createElement("div",{className:"login__inputFields"},i.a.createElement("div",{className:"login__inputField"},i.a.createElement("input",{value:n,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"Email"})),i.a.createElement("div",{className:"login__inputField"},i.a.createElement("input",{value:u,onChange:function(e){return c(e.target.value)},type:"password",placeholder:"Password"}))),i.a.createElement("div",{className:"login__forgButt"},i.a.createElement("small",null,"Forgot Password?"),i.a.createElement("button",{onClick:function(e){e.preventDefault(),Lt.signInWithEmailAndPassword(n,u).then((function(e){console.log(e)})).catch((function(e){return alert(e.message)}))}},"Login")),i.a.createElement("button",{onClick:function(e){e.preventDefault(),Lt.createUserWithEmailAndPassword(n,u).then((function(e){e&&console.log(e)})).catch((function(e){return alert(e.message)}))}},"Register"))),i.a.createElement("div",{className:"login__lang"},i.a.createElement("p",null,"हिन्दी"),i.a.createElement(H.a,{fontSize:"small"})),i.a.createElement("div",{className:"login__footer"},i.a.createElement("p",null,"About"),i.a.createElement("p",null,"Languages"),i.a.createElement("p",null,"Careers"),i.a.createElement("p",null,"Businesses"),i.a.createElement("p",null,"Privacy"),i.a.createElement("p",null,"Terms"),i.a.createElement("p",null,"Contact"),i.a.createElement("p",null,"© Quora Inc. 2021"))))}n(110),n(112);var zt=n(77),qt=n.n(zt),Bt=n(78),$t=n.n(Bt),Wt=n(79),Ht=n.n(Wt),Kt=n(63),Gt=n.n(Kt),Qt=n(80),Yt=n.n(Qt),Xt=n(81),Jt=n.n(Xt),Zt=n(13),en=n(161),tn=n(158),nn=n(160),rn=n(14),on=n(22),sn=n(36),an=n(37),un=n(52);function cn(e,t){return(cn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var ln=i.a.createContext(null);function dn(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(r.isValidElement)(e)?t(e):e}(e)})),n}function hn(e,t,n){return null!=n[t]?n[t]:e.props[t]}function fn(e,t,n){var i=dn(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var c=i[u][r];a[i[u][r]]=n(c)}a[u]=n(u)}for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(t,i);return Object.keys(o).forEach((function(s){var a=o[s];if(Object(r.isValidElement)(a)){var u=s in t,c=s in i,l=t[s],d=Object(r.isValidElement)(l)&&!l.props.in;!c||u&&!d?c||!u||d?c&&u&&Object(r.isValidElement)(l)&&(o[s]=Object(r.cloneElement)(a,{onExited:n.bind(null,a),in:l.props.in,exit:hn(a,"exit",e),enter:hn(a,"enter",e)})):o[s]=Object(r.cloneElement)(a,{in:!1}):o[s]=Object(r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:hn(a,"exit",e),enter:hn(a,"enter",e)})}})),o}var pn=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},mn=function(e){var t,n;function o(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,cn(t,n);var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,i=s,dn(n.children,(function(e){return Object(r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:hn(e,"appear",n),enter:hn(e,"enter",n),exit:hn(e,"exit",n)})}))):fn(e,o,s),firstRender:!1}},s.handleExited=function(e,t){var n=dn(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(y.a)({},t.children);return delete n[e.key],{children:n}})))},s.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(v.a)(e,["component","childFactory"]),o=this.state.contextValue,s=pn(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.a.createElement(ln.Provider,{value:o},s):i.a.createElement(ln.Provider,{value:o},i.a.createElement(t,r,s))},o}(i.a.Component);mn.propTypes={},mn.defaultProps={component:"div",childFactory:function(e){return e}};var gn=mn,yn=n(35),vn=n(5);var bn=function(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:s,rippleSize:a,in:u,onExited:c,timeout:l}=e,[d,h]=r.useState(!1),f=Object(Zt.a)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),p={width:a,height:a,top:-a/2+s,left:-a/2+o},m=Object(Zt.a)(n.child,d&&n.childLeaving,i&&n.childPulsate);return u||d||h(!0),r.useEffect(()=>{if(!u&&null!=c){const e=setTimeout(c,l);return()=>{clearTimeout(e)}}},[c,u,l]),Object(vn.jsx)("span",{className:f,style:p,children:Object(vn.jsx)("span",{className:m})})},wn=n(159),_n=n(143);var En=Object(wn.a)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const Sn=["center","classes","className"];let In,kn,Tn,xn,On=e=>e;const Cn=Object(yn.b)(In||(In=On`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Nn=Object(yn.b)(kn||(kn=On`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),An=Object(yn.b)(Tn||(Tn=On`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Rn=Object(rn.a)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Dn=Object(rn.a)(bn,{name:"MuiTouchRipple",slot:"Ripple"})(xn||(xn=On`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }