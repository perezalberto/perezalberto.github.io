var VT=Object.defineProperty;var BT=(t,e,n)=>e in t?VT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>(BT(t,typeof e!="symbol"?e+"":e,n),n);function zT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sd={},Eu={exports:{}},kt={},C={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),HT=Symbol.for("react.portal"),WT=Symbol.for("react.fragment"),qT=Symbol.for("react.strict_mode"),GT=Symbol.for("react.profiler"),KT=Symbol.for("react.provider"),QT=Symbol.for("react.context"),YT=Symbol.for("react.forward_ref"),XT=Symbol.for("react.suspense"),JT=Symbol.for("react.memo"),ZT=Symbol.for("react.lazy"),Pg=Symbol.iterator;function ek(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W0=Object.assign,q0={};function ls(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||H0}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=ls.prototype;function Hf(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||H0}var Wf=Hf.prototype=new G0;Wf.constructor=Hf;W0(Wf,ls.prototype);Wf.isPureReactComponent=!0;var Og=Array.isArray,K0=Object.prototype.hasOwnProperty,qf={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,r)&&!Q0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qo,type:t,key:s,ref:o,props:i,_owner:qf.current}}function tk(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function nk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dg=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nk(""+t.key):e.toString(36)}function Ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case HT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jc(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(Dg,"$&/")+"/"),Ja(i,e,n,"",function(u){return u})):i!=null&&(Gf(i)&&(i=tk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jc(s,a);o+=Ja(s,e,n,l,i)}else if(l=ek(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jc(s,a++),o+=Ja(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return Ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},Za={transition:null},ik={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Za,ReactCurrentOwner:qf};q.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=ls;q.Fragment=WT;q.Profiler=GT;q.PureComponent=Hf;q.StrictMode=qT;q.Suspense=XT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K0.call(e,l)&&!Q0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:QT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KT,_context:t},t.Consumer=t};q.createElement=Y0;q.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:YT,render:t}};q.isValidElement=Gf;q.lazy=function(t){return{$$typeof:ZT,_payload:{_status:-1,_result:t},_init:rk}};q.memo=function(t,e){return{$$typeof:JT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return st.current.useCallback(t,e)};q.useContext=function(t){return st.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return st.current.useDeferredValue(t)};q.useEffect=function(t,e){return st.current.useEffect(t,e)};q.useId=function(){return st.current.useId()};q.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return st.current.useMemo(t,e)};q.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};q.useRef=function(t){return st.current.useRef(t)};q.useState=function(t){return st.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return st.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(C);const Kf=z0(C.exports),od=zT({__proto__:null,default:Kf},[C.exports]);var X0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,V){var B=b.length;b.push(V);e:for(;0<B;){var ge=B-1>>>1,Ne=b[ge];if(0<i(Ne,V))b[ge]=V,b[B]=Ne,B=ge;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var V=b[0],B=b.pop();if(B!==V){b[0]=B;e:for(var ge=0,Ne=b.length,Ta=Ne>>>1;ge<Ta;){var Tr=2*(ge+1)-1,Xc=b[Tr],kr=Tr+1,ka=b[kr];if(0>i(Xc,B))kr<Ne&&0>i(ka,Xc)?(b[ge]=ka,b[kr]=B,ge=kr):(b[ge]=Xc,b[Tr]=B,ge=Tr);else if(kr<Ne&&0>i(ka,B))b[ge]=ka,b[kr]=B,ge=kr;else break e}}return V}function i(b,V){var B=b.sortIndex-V.sortIndex;return B!==0?B:b.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=b)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function S(b){if(w=!1,v(b),!g)if(n(l)!==null)g=!0,Qc(k);else{var V=n(u);V!==null&&Yc(S,V.startTime-b)}}function k(b,V){g=!1,w&&(w=!1,y(P),P=-1),p=!0;var B=f;try{for(v(V),h=n(l);h!==null&&(!(h.expirationTime>V)||b&&!Bt());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,f=h.priorityLevel;var Ne=ge(h.expirationTime<=V);V=t.unstable_now(),typeof Ne=="function"?h.callback=Ne:h===n(l)&&r(l),v(V)}else r(l);h=n(l)}if(h!==null)var Ta=!0;else{var Tr=n(u);Tr!==null&&Yc(S,Tr.startTime-V),Ta=!1}return Ta}finally{h=null,f=B,p=!1}}var R=!1,x=null,P=-1,ie=5,H=-1;function Bt(){return!(t.unstable_now()-H<ie)}function _s(){if(x!==null){var b=t.unstable_now();H=b;var V=!0;try{V=x(!0,b)}finally{V?Is():(R=!1,x=null)}}else R=!1}var Is;if(typeof m=="function")Is=function(){m(_s)};else if(typeof MessageChannel<"u"){var bg=new MessageChannel,jT=bg.port2;bg.port1.onmessage=_s,Is=function(){jT.postMessage(null)}}else Is=function(){E(_s,0)};function Qc(b){x=b,R||(R=!0,Is())}function Yc(b,V){P=E(function(){b(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Qc(k))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var B=f;f=V;try{return b()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,V){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=f;f=b;try{return V()}finally{f=B}},t.unstable_scheduleCallback=function(b,V,B){var ge=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ge+B:ge):B=ge,b){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=B+Ne,b={id:c++,callback:V,priorityLevel:b,startTime:B,expirationTime:Ne,sortIndex:-1},B>ge?(b.sortIndex=B,e(u,b),n(l)===null&&b===n(u)&&(w?(y(P),P=-1):w=!0,Yc(S,B-ge))):(b.sortIndex=Ne,e(l,b),g||p||(g=!0,Qc(k))),b},t.unstable_shouldYield=Bt,t.unstable_wrapCallback=function(b){var V=f;return function(){var B=f;f=V;try{return b.apply(this,arguments)}finally{f=B}}}})(J0);(function(t){t.exports=J0})(X0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=C.exports,_t=X0.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew=new Set,co={};function si(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(co[t]=e,t=0;t<e.length;t++)ew.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,sk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mg={},Lg={};function ok(t){return ad.call(Lg,t)?!0:ad.call(Mg,t)?!1:sk.test(t)?Lg[t]=!0:(Mg[t]=!0,!1)}function ak(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lk(t,e,n,r){if(e===null||typeof e>"u"||ak(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qf,Yf);Ve[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qf,Yf);Ve[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qf,Yf);Ve[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xf(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lk(e,n,i,r)&&(n=null),r||i===null?ok(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),cd=Symbol.for("react.suspense_list"),ep=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),$g=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Zc;function Ms(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var eh=!1;function th(t,e){if(!t||eh)return"";eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function uk(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=th(t.type,!1),t;case 11:return t=th(t.type.render,!1),t;case 1:return t=th(t.type,!0),t;default:return""}}function hd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case ld:return"Profiler";case Jf:return"StrictMode";case ud:return"Suspense";case cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nw:return(t.displayName||"Context")+".Consumer";case tw:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ep:return e=t.displayName||null,e!==null?e:hd(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return hd(t(e))}catch{}}return null}function ck(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hd(e);case 8:return e===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hk(t){var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=hk(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ow(t,e){e=e.checked,e!=null&&Xf(t,"checked",e,!1)}function fd(t,e){ow(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ls(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function aw(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dk=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){dk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function cw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fk=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=null;function tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,xi=null,bi=null;function Bg(t){if(t=Jo(t)){if(typeof Sd!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Cu(e),Sd(t.stateNode,t.type,e))}}function dw(t){xi?bi?bi.push(t):bi=[t]:xi=t}function fw(){if(xi){var t=xi,e=bi;if(bi=xi=null,Bg(t),e)for(t=0;t<e.length;t++)Bg(e[t])}}function pw(t,e){return t(e)}function mw(){}var nh=!1;function gw(t,e,n){if(nh)return t(e,n);nh=!0;try{return pw(t,e,n)}finally{nh=!1,(xi!==null||bi!==null)&&(mw(),fw())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Ed=!1;if(In)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Ed=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Ed=!1}function pk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gs=!1,Sl=null,El=!1,_d=null,mk={onError:function(t){Gs=!0,Sl=t}};function gk(t,e,n,r,i,s,o,a,l){Gs=!1,Sl=null,pk.apply(mk,arguments)}function yk(t,e,n,r,i,s,o,a,l){if(gk.apply(this,arguments),Gs){if(Gs){var u=Sl;Gs=!1,Sl=null}else throw Error(I(198));El||(El=!0,_d=u)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zg(t){if(oi(t)!==t)throw Error(I(188))}function vk(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zg(i),t;if(s===r)return zg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function vw(t){return t=vk(t),t!==null?ww(t):null}function ww(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ww(t);if(e!==null)return e;t=t.sibling}return null}var Sw=_t.unstable_scheduleCallback,Hg=_t.unstable_cancelCallback,wk=_t.unstable_shouldYield,Sk=_t.unstable_requestPaint,ye=_t.unstable_now,Ek=_t.unstable_getCurrentPriorityLevel,np=_t.unstable_ImmediatePriority,Ew=_t.unstable_UserBlockingPriority,_l=_t.unstable_NormalPriority,_k=_t.unstable_LowPriority,_w=_t.unstable_IdlePriority,_u=null,on=null;function Ik(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:Ck,Tk=Math.log,kk=Math.LN2;function Ck(t){return t>>>=0,t===0?32:31-(Tk(t)/kk|0)|0}var xa=64,ba=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=$s(a):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ak(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Ak(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=xa;return xa<<=1,(xa&4194240)===0&&(xa=64),t}function rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function Nk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Tw(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var kw,ip,Cw,Aw,Rw,Td=!1,Pa=[],Xn=null,Jn=null,Zn=null,po=new Map,mo=new Map,jn=[],xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wg(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Jo(e),e!==null&&ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bk(t,e,n,r,i){switch(e){case"focusin":return Xn=Cs(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=Cs(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=Cs(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,Cs(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,Cs(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Nw(t){var e=xr(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=yw(n),e!==null){t.blockedOn=e,Rw(t.priority,function(){Cw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wd=r,n.target.dispatchEvent(r),wd=null}else return e=Jo(n),e!==null&&ip(e),t.blockedOn=n,!1;e.shift()}return!0}function qg(t,e,n){el(t)&&n.delete(e)}function Pk(){Td=!1,Xn!==null&&el(Xn)&&(Xn=null),Jn!==null&&el(Jn)&&(Jn=null),Zn!==null&&el(Zn)&&(Zn=null),po.forEach(qg),mo.forEach(qg)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,Pk)))}function go(t){function e(i){return As(i,t)}if(0<Pa.length){As(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&As(Xn,t),Jn!==null&&As(Jn,t),Zn!==null&&As(Zn,t),po.forEach(e),mo.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Nw(n),n.blockedOn===null&&jn.shift()}var Pi=On.ReactCurrentBatchConfig,Tl=!0;function Ok(t,e,n,r){var i=J,s=Pi.transition;Pi.transition=null;try{J=1,sp(t,e,n,r)}finally{J=i,Pi.transition=s}}function Dk(t,e,n,r){var i=J,s=Pi.transition;Pi.transition=null;try{J=4,sp(t,e,n,r)}finally{J=i,Pi.transition=s}}function sp(t,e,n,r){if(Tl){var i=kd(t,e,n,r);if(i===null)fh(t,e,r,kl,n),Wg(t,r);else if(bk(i,t,e,n,r))r.stopPropagation();else if(Wg(t,r),e&4&&-1<xk.indexOf(t)){for(;i!==null;){var s=Jo(i);if(s!==null&&kw(s),s=kd(t,e,n,r),s===null&&fh(t,e,r,kl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fh(t,e,r,null,n)}}var kl=null;function kd(t,e,n,r){if(kl=null,t=tp(r),t=xr(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function xw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ek()){case np:return 1;case Ew:return 4;case _l:case _k:return 16;case _w:return 536870912;default:return 16}default:return 16}}var Gn=null,op=null,tl=null;function bw(){if(tl)return tl;var t,e=op,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tl=i.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Gg(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Gg,this.isPropagationStopped=Gg,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ap=Ct(us),Xo=pe({},us,{view:0,detail:0}),Mk=Ct(Xo),ih,sh,Rs,Iu=pe({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(ih=t.screenX-Rs.screenX,sh=t.screenY-Rs.screenY):sh=ih=0,Rs=t),ih)},movementY:function(t){return"movementY"in t?t.movementY:sh}}),Kg=Ct(Iu),Lk=pe({},Iu,{dataTransfer:0}),$k=Ct(Lk),Uk=pe({},Xo,{relatedTarget:0}),oh=Ct(Uk),Fk=pe({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),jk=Ct(Fk),Vk=pe({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bk=Ct(Vk),zk=pe({},us,{data:0}),Qg=Ct(zk),Hk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qk[t])?!!e[t]:!1}function lp(){return Gk}var Kk=pe({},Xo,{key:function(t){if(t.key){var e=Hk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lp,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qk=Ct(Kk),Yk=pe({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=Ct(Yk),Xk=pe({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lp}),Jk=Ct(Xk),Zk=pe({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),eC=Ct(Zk),tC=pe({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nC=Ct(tC),rC=[9,13,27,32],up=In&&"CompositionEvent"in window,Ks=null;In&&"documentMode"in document&&(Ks=document.documentMode);var iC=In&&"TextEvent"in window&&!Ks,Pw=In&&(!up||Ks&&8<Ks&&11>=Ks),Xg=String.fromCharCode(32),Jg=!1;function Ow(t,e){switch(t){case"keyup":return rC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function sC(t,e){switch(t){case"compositionend":return Dw(e);case"keypress":return e.which!==32?null:(Jg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Jg?null:t;default:return null}}function oC(t,e){if(yi)return t==="compositionend"||!up&&Ow(t,e)?(t=bw(),tl=op=Gn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pw&&e.locale!=="ko"?null:e.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aC[t.type]:e==="textarea"}function Mw(t,e,n,r){dw(r),e=Cl(e,"onChange"),0<e.length&&(n=new ap("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qs=null,yo=null;function lC(t){qw(t,0)}function Tu(t){var e=Si(t);if(sw(e))return t}function uC(t,e){if(t==="change")return e}var Lw=!1;if(In){var ah;if(In){var lh="oninput"in document;if(!lh){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),lh=typeof ey.oninput=="function"}ah=lh}else ah=!1;Lw=ah&&(!document.documentMode||9<document.documentMode)}function ty(){Qs&&(Qs.detachEvent("onpropertychange",$w),yo=Qs=null)}function $w(t){if(t.propertyName==="value"&&Tu(yo)){var e=[];Mw(e,yo,t,tp(t)),gw(lC,e)}}function cC(t,e,n){t==="focusin"?(ty(),Qs=e,yo=n,Qs.attachEvent("onpropertychange",$w)):t==="focusout"&&ty()}function hC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(yo)}function dC(t,e){if(t==="click")return Tu(e)}function fC(t,e){if(t==="input"||t==="change")return Tu(e)}function pC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:pC;function vo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ad.call(e,i)||!Xt(t[i],e[i]))return!1}return!0}function ny(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ry(t,e){var n=ny(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ny(n)}}function Uw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fw(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mC(t){var e=Fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uw(n.ownerDocument.documentElement,n)){if(r!==null&&cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ry(n,s);var o=ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gC=In&&"documentMode"in document&&11>=document.documentMode,vi=null,Cd=null,Ys=null,Ad=!1;function iy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||vi==null||vi!==wl(r)||(r=vi,"selectionStart"in r&&cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ys&&vo(Ys,r)||(Ys=r,r=Cl(Cd,"onSelect"),0<r.length&&(e=new ap("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},uh={},jw={};In&&(jw=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function ku(t){if(uh[t])return uh[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jw)return uh[t]=e[n];return t}var Vw=ku("animationend"),Bw=ku("animationiteration"),zw=ku("animationstart"),Hw=ku("transitionend"),Ww=new Map,sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Ww.set(t,e),si(e,[t])}for(var ch=0;ch<sy.length;ch++){var hh=sy[ch],yC=hh.toLowerCase(),vC=hh[0].toUpperCase()+hh.slice(1);gr(yC,"on"+vC)}gr(Vw,"onAnimationEnd");gr(Bw,"onAnimationIteration");gr(zw,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Hw,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yk(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;oy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;oy(i,a,u),s=l}}}if(El)throw t=_d,El=!1,_d=null,t}function se(t,e){var n=e[Pd];n===void 0&&(n=e[Pd]=new Set);var r=t+"__bubble";n.has(r)||(Gw(e,t,2,!1),n.add(r))}function dh(t,e,n){var r=0;e&&(r|=4),Gw(n,t,r,e)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Ma]){t[Ma]=!0,ew.forEach(function(n){n!=="selectionchange"&&(wC.has(n)||dh(n,!1,t),dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ma]||(e[Ma]=!0,dh("selectionchange",!1,e))}}function Gw(t,e,n,r){switch(xw(e)){case 1:var i=Ok;break;case 4:i=Dk;break;default:i=sp}n=i.bind(null,e,n,t),i=void 0,!Ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fh(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gw(function(){var u=s,c=tp(n),h=[];e:{var f=Ww.get(t);if(f!==void 0){var p=ap,g=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":p=Qk;break;case"focusin":g="focus",p=oh;break;case"focusout":g="blur",p=oh;break;case"beforeblur":case"afterblur":p=oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$k;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jk;break;case Vw:case Bw:case zw:p=jk;break;case Hw:p=eC;break;case"scroll":p=Mk;break;case"wheel":p=nC;break;case"copy":case"cut":case"paste":p=Bk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yg}var w=(e&4)!==0,E=!w&&t==="scroll",y=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,y!==null&&(S=fo(m,y),S!=null&&w.push(So(m,S,v)))),E)break;m=m.return}0<w.length&&(f=new p(f,g,null,n,c),h.push({event:f,listeners:w}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==wd&&(g=n.relatedTarget||n.fromElement)&&(xr(g)||g[Tn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?xr(g):null,g!==null&&(E=oi(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(w=Kg,S="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Yg,S="onPointerLeave",y="onPointerEnter",m="pointer"),E=p==null?f:Si(p),v=g==null?f:Si(g),f=new w(S,m+"leave",p,n,c),f.target=E,f.relatedTarget=v,S=null,xr(c)===u&&(w=new w(y,m+"enter",g,n,c),w.target=v,w.relatedTarget=E,S=w),E=S,p&&g)t:{for(w=p,y=g,m=0,v=w;v;v=di(v))m++;for(v=0,S=y;S;S=di(S))v++;for(;0<m-v;)w=di(w),m--;for(;0<v-m;)y=di(y),v--;for(;m--;){if(w===y||y!==null&&w===y.alternate)break t;w=di(w),y=di(y)}w=null}else w=null;p!==null&&ay(h,f,p,w,!1),g!==null&&E!==null&&ay(h,E,g,w,!0)}}e:{if(f=u?Si(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=uC;else if(Zg(f))if(Lw)k=fC;else{k=hC;var R=cC}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=dC);if(k&&(k=k(t,u))){Mw(h,k,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&pd(f,"number",f.value)}switch(R=u?Si(u):window,t){case"focusin":(Zg(R)||R.contentEditable==="true")&&(vi=R,Cd=u,Ys=null);break;case"focusout":Ys=Cd=vi=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,iy(h,n,c);break;case"selectionchange":if(gC)break;case"keydown":case"keyup":iy(h,n,c)}var x;if(up)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else yi?Ow(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pw&&n.locale!=="ko"&&(yi||P!=="onCompositionStart"?P==="onCompositionEnd"&&yi&&(x=bw()):(Gn=c,op="value"in Gn?Gn.value:Gn.textContent,yi=!0)),R=Cl(u,P),0<R.length&&(P=new Qg(P,t,null,n,c),h.push({event:P,listeners:R}),x?P.data=x:(x=Dw(n),x!==null&&(P.data=x)))),(x=iC?sC(t,n):oC(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(c=new Qg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}qw(h,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(So(t,s,i)),s=fo(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fo(n,s),l!=null&&o.unshift(So(n,l,a))):i||(l=fo(n,s),l!=null&&o.push(So(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SC=/\r\n?/g,EC=/\u0000|\uFFFD/g;function ly(t){return(typeof t=="string"?t:""+t).replace(SC,`
`).replace(EC,"")}function La(t,e,n){if(e=ly(e),ly(t)!==e&&n)throw Error(I(425))}function Al(){}var Rd=null,Nd=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,_C=typeof clearTimeout=="function"?clearTimeout:void 0,uy=typeof Promise=="function"?Promise:void 0,IC=typeof queueMicrotask=="function"?queueMicrotask:typeof uy<"u"?function(t){return uy.resolve(null).then(t).catch(TC)}:bd;function TC(t){setTimeout(function(){throw t})}function ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),nn="__reactFiber$"+cs,Eo="__reactProps$"+cs,Tn="__reactContainer$"+cs,Pd="__reactEvents$"+cs,kC="__reactListeners$"+cs,CC="__reactHandles$"+cs;function xr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cy(t);t!==null;){if(n=t[nn])return n;t=cy(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[nn]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Cu(t){return t[Eo]||null}var Od=[],Ei=-1;function yr(t){return{current:t}}function oe(t){0>Ei||(t.current=Od[Ei],Od[Ei]=null,Ei--)}function ne(t,e){Ei++,Od[Ei]=t.current,t.current=e}var cr={},Xe=yr(cr),dt=yr(!1),Hr=cr;function Hi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Rl(){oe(dt),oe(Xe)}function hy(t,e,n){if(Xe.current!==cr)throw Error(I(168));ne(Xe,e),ne(dt,n)}function Kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,ck(t)||"Unknown",i));return pe({},n,r)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Hr=Xe.current,ne(Xe,t),ne(dt,dt.current),!0}function dy(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Kw(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,oe(dt),oe(Xe),ne(Xe,t)):oe(dt),ne(dt,n)}var fn=null,Au=!1,mh=!1;function Qw(t){fn===null?fn=[t]:fn.push(t)}function AC(t){Au=!0,Qw(t)}function vr(){if(!mh&&fn!==null){mh=!0;var t=0,e=J;try{var n=fn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Au=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),Sw(np,vr),i}finally{J=e,mh=!1}}return null}var _i=[],Ii=0,xl=null,bl=0,Nt=[],xt=0,Wr=null,mn=1,gn="";function Cr(t,e){_i[Ii++]=bl,_i[Ii++]=xl,xl=t,bl=e}function Yw(t,e,n){Nt[xt++]=mn,Nt[xt++]=gn,Nt[xt++]=Wr,Wr=t;var r=mn;t=gn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Kt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function hp(t){t.return!==null&&(Cr(t,1),Yw(t,1,0))}function dp(t){for(;t===xl;)xl=_i[--Ii],_i[Ii]=null,bl=_i[--Ii],_i[Ii]=null;for(;t===Wr;)Wr=Nt[--xt],Nt[xt]=null,gn=Nt[--xt],Nt[xt]=null,mn=Nt[--xt],Nt[xt]=null}var St=null,vt=null,ue=!1,qt=null;function Xw(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,vt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,vt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Md(t){if(ue){var e=vt;if(e){var n=e;if(!fy(t,e)){if(Dd(t))throw Error(I(418));e=er(n.nextSibling);var r=St;e&&fy(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,ue=!1,St=t)}}else{if(Dd(t))throw Error(I(418));t.flags=t.flags&-4097|2,ue=!1,St=t}}}function py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function $a(t){if(t!==St)return!1;if(!ue)return py(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=vt)){if(Dd(t))throw Jw(),Error(I(418));for(;e;)Xw(t,e),e=er(e.nextSibling)}if(py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=St?er(t.stateNode.nextSibling):null;return!0}function Jw(){for(var t=vt;t;)t=er(t.nextSibling)}function Wi(){vt=St=null,ue=!1}function fp(t){qt===null?qt=[t]:qt.push(t)}var RC=On.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Pl=yr(null),Ol=null,Ti=null,pp=null;function mp(){pp=Ti=Ol=null}function gp(t){var e=Pl.current;oe(Pl),t._currentValue=e}function Ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Ol=t,pp=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ht=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(pp!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Ol===null)throw Error(I(308));Ti=t,Ol.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var br=null;function yp(t){br===null?br=[t]:br.push(t)}function Zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rp(t,n)}}function my(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(f=e,p=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=pe({},h,f);break e;case 2:$n=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=h}}function gy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var t1=new Z0.Component().refs;function $d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ru={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=rr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Qt(e,t,i,r),rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=rr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Qt(e,t,i,r),rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=rr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Qt(e,t,r,n),rl(e,t,r))}};function yy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function n1(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=ft(e)?Hr:Xe.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=t1,vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=ft(e)?Hr:Xe.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ru.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===t1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wy(t){var e=t._init;return e(t._payload)}function r1(t){function e(y,m){if(t){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function n(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=ir(y,m),y.index=0,y.sibling=null,y}function s(y,m,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,m,v,S){return m===null||m.tag!==6?(m=_h(v,y.mode,S),m.return=y,m):(m=i(m,v),m.return=y,m)}function l(y,m,v,S){var k=v.type;return k===gi?c(y,m,v.props.children,S,v.key):m!==null&&(m.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ln&&wy(k)===m.type)?(S=i(m,v.props),S.ref=Ns(y,m,v),S.return=y,S):(S=ul(v.type,v.key,v.props,null,y.mode,S),S.ref=Ns(y,m,v),S.return=y,S)}function u(y,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Ih(v,y.mode,S),m.return=y,m):(m=i(m,v.children||[]),m.return=y,m)}function c(y,m,v,S,k){return m===null||m.tag!==7?(m=Fr(v,y.mode,S,k),m.return=y,m):(m=i(m,v),m.return=y,m)}function h(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_h(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return v=ul(m.type,m.key,m.props,null,y.mode,v),v.ref=Ns(y,null,m),v.return=y,v;case mi:return m=Ih(m,y.mode,v),m.return=y,m;case Ln:var S=m._init;return h(y,S(m._payload),v)}if(Ls(m)||Ts(m))return m=Fr(m,y.mode,v,null),m.return=y,m;Ua(y,m)}return null}function f(y,m,v,S){var k=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(y,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return v.key===k?l(y,m,v,S):null;case mi:return v.key===k?u(y,m,v,S):null;case Ln:return k=v._init,f(y,m,k(v._payload),S)}if(Ls(v)||Ts(v))return k!==null?null:c(y,m,v,S,null);Ua(y,v)}return null}function p(y,m,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(v)||null,a(m,y,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Aa:return y=y.get(S.key===null?v:S.key)||null,l(m,y,S,k);case mi:return y=y.get(S.key===null?v:S.key)||null,u(m,y,S,k);case Ln:var R=S._init;return p(y,m,v,R(S._payload),k)}if(Ls(S)||Ts(S))return y=y.get(v)||null,c(m,y,S,k,null);Ua(m,S)}return null}function g(y,m,v,S){for(var k=null,R=null,x=m,P=m=0,ie=null;x!==null&&P<v.length;P++){x.index>P?(ie=x,x=null):ie=x.sibling;var H=f(y,x,v[P],S);if(H===null){x===null&&(x=ie);break}t&&x&&H.alternate===null&&e(y,x),m=s(H,m,P),R===null?k=H:R.sibling=H,R=H,x=ie}if(P===v.length)return n(y,x),ue&&Cr(y,P),k;if(x===null){for(;P<v.length;P++)x=h(y,v[P],S),x!==null&&(m=s(x,m,P),R===null?k=x:R.sibling=x,R=x);return ue&&Cr(y,P),k}for(x=r(y,x);P<v.length;P++)ie=p(x,y,P,v[P],S),ie!==null&&(t&&ie.alternate!==null&&x.delete(ie.key===null?P:ie.key),m=s(ie,m,P),R===null?k=ie:R.sibling=ie,R=ie);return t&&x.forEach(function(Bt){return e(y,Bt)}),ue&&Cr(y,P),k}function w(y,m,v,S){var k=Ts(v);if(typeof k!="function")throw Error(I(150));if(v=k.call(v),v==null)throw Error(I(151));for(var R=k=null,x=m,P=m=0,ie=null,H=v.next();x!==null&&!H.done;P++,H=v.next()){x.index>P?(ie=x,x=null):ie=x.sibling;var Bt=f(y,x,H.value,S);if(Bt===null){x===null&&(x=ie);break}t&&x&&Bt.alternate===null&&e(y,x),m=s(Bt,m,P),R===null?k=Bt:R.sibling=Bt,R=Bt,x=ie}if(H.done)return n(y,x),ue&&Cr(y,P),k;if(x===null){for(;!H.done;P++,H=v.next())H=h(y,H.value,S),H!==null&&(m=s(H,m,P),R===null?k=H:R.sibling=H,R=H);return ue&&Cr(y,P),k}for(x=r(y,x);!H.done;P++,H=v.next())H=p(x,y,P,H.value,S),H!==null&&(t&&H.alternate!==null&&x.delete(H.key===null?P:H.key),m=s(H,m,P),R===null?k=H:R.sibling=H,R=H);return t&&x.forEach(function(_s){return e(y,_s)}),ue&&Cr(y,P),k}function E(y,m,v,S){if(typeof v=="object"&&v!==null&&v.type===gi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:e:{for(var k=v.key,R=m;R!==null;){if(R.key===k){if(k=v.type,k===gi){if(R.tag===7){n(y,R.sibling),m=i(R,v.props.children),m.return=y,y=m;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ln&&wy(k)===R.type){n(y,R.sibling),m=i(R,v.props),m.ref=Ns(y,R,v),m.return=y,y=m;break e}n(y,R);break}else e(y,R);R=R.sibling}v.type===gi?(m=Fr(v.props.children,y.mode,S,v.key),m.return=y,y=m):(S=ul(v.type,v.key,v.props,null,y.mode,S),S.ref=Ns(y,m,v),S.return=y,y=S)}return o(y);case mi:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(y,m.sibling),m=i(m,v.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else e(y,m);m=m.sibling}m=Ih(v,y.mode,S),m.return=y,y=m}return o(y);case Ln:return R=v._init,E(y,m,R(v._payload),S)}if(Ls(v))return g(y,m,v,S);if(Ts(v))return w(y,m,v,S);Ua(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,v),m.return=y,y=m):(n(y,m),m=_h(v,y.mode,S),m.return=y,y=m),o(y)):n(y,m)}return E}var qi=r1(!0),i1=r1(!1),Zo={},an=yr(Zo),_o=yr(Zo),Io=yr(Zo);function Pr(t){if(t===Zo)throw Error(I(174));return t}function wp(t,e){switch(ne(Io,e),ne(_o,t),ne(an,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}oe(an),ne(an,e)}function Gi(){oe(an),oe(_o),oe(Io)}function s1(t){Pr(Io.current);var e=Pr(an.current),n=gd(e,t.type);e!==n&&(ne(_o,t),ne(an,n))}function Sp(t){_o.current===t&&(oe(an),oe(_o))}var de=yr(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gh=[];function Ep(){for(var t=0;t<gh.length;t++)gh[t]._workInProgressVersionPrimary=null;gh.length=0}var il=On.ReactCurrentDispatcher,yh=On.ReactCurrentBatchConfig,qr=0,fe=null,Ie=null,be=null,Ll=!1,Xs=!1,To=0,NC=0;function He(){throw Error(I(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function Ip(t,e,n,r,i,s){if(qr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?OC:DC,t=n(r,i),Xs){s=0;do{if(Xs=!1,To=0,25<=s)throw Error(I(301));s+=1,be=Ie=null,e.updateQueue=null,il.current=MC,t=n(r,i)}while(Xs)}if(il.current=$l,e=Ie!==null&&Ie.next!==null,qr=0,be=Ie=fe=null,Ll=!1,e)throw Error(I(300));return t}function Tp(){var t=To!==0;return To=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?fe.memoizedState=be=t:be=be.next=t,be}function $t(){if(Ie===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=be===null?fe.memoizedState:be.next;if(e!==null)be=e,Ie=t;else{if(t===null)throw Error(I(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},be===null?fe.memoizedState=be=t:be=be.next=t}return be}function ko(t,e){return typeof e=="function"?e(t):e}function vh(t){var e=$t(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,fe.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Xt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=$t(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o1(){}function a1(t,e){var n=fe,r=$t(),i=e(),s=!Xt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,kp(c1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Co(9,u1.bind(null,n,r,i,e),void 0,null),Pe===null)throw Error(I(349));(qr&30)!==0||l1(n,e,i)}return i}function l1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u1(t,e,n,r){e.value=n,e.getSnapshot=r,h1(e)&&d1(t)}function c1(t,e,n){return n(function(){h1(e)&&d1(t)})}function h1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function d1(t){var e=kn(t,1);e!==null&&Qt(e,t,1,-1)}function Sy(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=PC.bind(null,fe,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f1(){return $t().memoizedState}function sl(t,e,n,r){var i=tn();fe.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function Nu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function Ey(t,e){return sl(8390656,8,t,e)}function kp(t,e){return Nu(2048,8,t,e)}function p1(t,e){return Nu(4,2,t,e)}function m1(t,e){return Nu(4,4,t,e)}function g1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y1(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,g1.bind(null,e,t),n)}function Cp(){}function v1(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w1(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S1(t,e,n){return(qr&21)===0?(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n):(Xt(n,e)||(n=Iw(),fe.lanes|=n,Gr|=n,t.baseState=!0),e)}function xC(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=yh.transition;yh.transition={};try{t(!1),e()}finally{J=n,yh.transition=r}}function E1(){return $t().memoizedState}function bC(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_1(t))I1(e,n);else if(n=Zw(t,e,n,r),n!==null){var i=rt();Qt(n,t,r,i),T1(n,e,r)}}function PC(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_1(t))I1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Xt(a,o)){var l=e.interleaved;l===null?(i.next=i,yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zw(t,e,i,r),n!==null&&(i=rt(),Qt(n,t,r,i),T1(n,e,r))}}function _1(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function I1(t,e){Xs=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rp(t,n)}}var $l={readContext:Lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},OC={readContext:Lt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Ey,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,g1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bC.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Sy,useDebugValue:Cp,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Sy(!1),e=t[0];return t=xC.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=tn();if(ue){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Pe===null)throw Error(I(349));(qr&30)!==0||l1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ey(c1.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,u1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=Pe.identifierPrefix;if(ue){var n=gn,r=mn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DC={readContext:Lt,useCallback:v1,useContext:Lt,useEffect:kp,useImperativeHandle:y1,useInsertionEffect:p1,useLayoutEffect:m1,useMemo:w1,useReducer:vh,useRef:f1,useState:function(){return vh(ko)},useDebugValue:Cp,useDeferredValue:function(t){var e=$t();return S1(e,Ie.memoizedState,t)},useTransition:function(){var t=vh(ko)[0],e=$t().memoizedState;return[t,e]},useMutableSource:o1,useSyncExternalStore:a1,useId:E1,unstable_isNewReconciler:!1},MC={readContext:Lt,useCallback:v1,useContext:Lt,useEffect:kp,useImperativeHandle:y1,useInsertionEffect:p1,useLayoutEffect:m1,useMemo:w1,useReducer:wh,useRef:f1,useState:function(){return wh(ko)},useDebugValue:Cp,useDeferredValue:function(t){var e=$t();return Ie===null?e.memoizedState=t:S1(e,Ie.memoizedState,t)},useTransition:function(){var t=wh(ko)[0],e=$t().memoizedState;return[t,e]},useMutableSource:o1,useSyncExternalStore:a1,useId:E1,unstable_isNewReconciler:!1};function Ki(t,e){try{var n="",r=e;do n+=uk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LC=typeof WeakMap=="function"?WeakMap:Map;function k1(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fl||(Fl=!0,Qd=r),Fd(t,e)},n}function C1(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YC.bind(null,t,e,n),e.then(t,t))}function Iy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ty(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var $C=On.ReactCurrentOwner,ht=!1;function et(t,e,n,r){e.child=t===null?i1(e,null,n,r):qi(e,t.child,n,r)}function ky(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=Ip(t,e,n,r,s,i),n=Tp(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ue&&n&&hp(e),e.flags|=1,et(t,e,r,i),e.child)}function Cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A1(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function A1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ht=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return jd(t,e,n,r,i)}function R1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ci,yt),yt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Ci,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Ci,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Ci,yt),yt|=r;return et(t,e,i,n),e.child}function N1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,r,i){var s=ft(n)?Hr:Xe.current;return s=Hi(e,s),Oi(e,i),n=Ip(t,e,n,r,s,i),r=Tp(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(ue&&r&&hp(e),e.flags|=1,et(t,e,n,i),e.child)}function Ay(t,e,n,r,i){if(ft(n)){var s=!0;Nl(e)}else s=!1;if(Oi(e,i),e.stateNode===null)ol(t,e),n1(e,n,r),Ud(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=ft(n)?Hr:Xe.current,u=Hi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vy(e,o,r,u),$n=!1;var f=e.memoizedState;o.state=f,Dl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||dt.current||$n?(typeof c=="function"&&($d(e,n,c,r),l=e.memoizedState),(a=$n||yy(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ht(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=ft(n)?Hr:Xe.current,l=Hi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&vy(e,o,r,l),$n=!1,f=e.memoizedState,o.state=f,Dl(e,r,o,i);var g=e.memoizedState;a!==h||f!==g||dt.current||$n?(typeof p=="function"&&($d(e,n,p,r),g=e.memoizedState),(u=$n||yy(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Vd(t,e,n,r,s,i)}function Vd(t,e,n,r,i,s){N1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dy(e,n,!1),Cn(t,e,s);r=e.stateNode,$C.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&dy(e,n,!0),e.child}function x1(t){var e=t.stateNode;e.pendingContext?hy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hy(t,e.context,!1),wp(t,e.containerInfo)}function Ry(t,e,n,r,i){return Wi(),fp(i),e.flags|=256,et(t,e,n,r),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function b1(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return Md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=Bd,t):Ap(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ir(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ap(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&fp(r),qi(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sh(Error(I(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pu({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&qi(e,t.child,null,o),e.child.memoizedState=zd(o),e.memoizedState=Bd,s);if((e.mode&1)===0)return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Sh(s,r,void 0),Fa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Qt(r,t,i,-1))}return Op(),r=Sh(Error(I(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=er(i.nextSibling),St=e,ue=!0,qt=null,t!==null&&(Nt[xt++]=mn,Nt[xt++]=gn,Nt[xt++]=Wr,mn=t.id,gn=t.overflow,Wr=e),e=Ap(e,r.children),e.flags|=4096,e)}function Ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ld(t.return,e,n)}function Eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function P1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=de.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ny(t,n,e);else if(t.tag===19)Ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(de,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Eh(e,!0,n,null,s);break;case"together":Eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FC(t,e,n){switch(e.tag){case 3:x1(e),Wi();break;case 5:s1(e);break;case 1:ft(e.type)&&Nl(e);break;case 4:wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?b1(t,e,n):(ne(de,de.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return P1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,R1(t,e,n)}return Cn(t,e,n)}var O1,Hd,D1,M1;O1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};D1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(an.current);var s=null;switch(n){case"input":i=dd(t,i),r=dd(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=md(t,i),r=md(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}yd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};M1=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jC(t,e,n){var r=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ft(e.type)&&Rl(),We(e),null;case 3:return r=e.stateNode,Gi(),oe(dt),oe(Xe),Ep(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qt!==null&&(Jd(qt),qt=null))),Hd(t,e),We(e),null;case 5:Sp(e);var i=Pr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)D1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return We(e),null}if(t=Pr(an.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)se(Us[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Ug(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":jg(r,s),se("invalid",r)}yd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(r.textContent,a,t),i=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Ra(r),Fg(r,s,!0);break;case"textarea":Ra(r),Vg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[Eo]=r,O1(t,e,!1,!1),e.stateNode=t;e:{switch(o=vd(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)se(Us[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":Ug(t,r),i=dd(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),se("invalid",t);break;case"textarea":jg(t,r),i=md(t,r),se("invalid",t);break;default:i=r}yd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&Xf(t,s,l,o))}switch(n){case"input":Ra(t),Fg(t,r,!1);break;case"textarea":Ra(t),Vg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)M1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Pr(Io.current),Pr(an.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return We(e),null;case 13:if(oe(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&vt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Jw(),Wi(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[nn]=e}else Wi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else qt!==null&&(Jd(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(de.current&1)!==0?ke===0&&(ke=3):Op())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Gi(),Hd(t,e),t===null&&wo(e.stateNode.containerInfo),We(e),null;case 10:return gp(e.type._context),We(e),null;case 17:return ft(e.type)&&Rl(),We(e),null;case 19:if(oe(de),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(ke!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Qi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return We(e),null}else 2*ye()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=de.current,ne(de,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(yt&1073741824)!==0&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function VC(t,e){switch(dp(e),e.tag){case 1:return ft(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),oe(dt),oe(Xe),Ep(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Sp(e),null;case 13:if(oe(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(de),null;case 4:return Gi(),null;case 10:return gp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var ja=!1,Ge=!1,BC=typeof WeakSet=="function"?WeakSet:Set,N=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function Wd(t,e,n){try{n()}catch(r){me(t,e,r)}}var xy=!1;function zC(t,e){if(Rd=Tl,t=Fw(),cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},Tl=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,E=g.memoizedState,y=e.stateNode,m=y.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ht(e.type,w),E);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){me(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=xy,xy=!1,g}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wd(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L1(t){var e=t.alternate;e!==null&&(t.alternate=null,L1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[Eo],delete e[Pd],delete e[kC],delete e[CC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $1(t){return t.tag===5||t.tag===3||t.tag===4}function by(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}function Kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}var Me=null,Wt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)U1(t,e,n),n=n.sibling}function U1(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:Ge||ki(n,e);case 6:var r=Me,i=Wt;Me=null,Dn(t,e,n),Me=r,Wt=i,Me!==null&&(Wt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Wt?(t=Me,n=n.stateNode,t.nodeType===8?ph(t.parentNode,n):t.nodeType===1&&ph(t,n),go(t)):ph(Me,n.stateNode));break;case 4:r=Me,i=Wt,Me=n.stateNode.containerInfo,Wt=!0,Dn(t,e,n),Me=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Wd(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Ge&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,e,a)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Dn(t,e,n),Ge=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BC),e.forEach(function(r){var i=JC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Wt=!1;break e;case 3:Me=a.stateNode.containerInfo,Wt=!0;break e;case 4:Me=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(Me===null)throw Error(I(160));U1(s,o,i),Me=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F1(e,t),e=e.sibling}function F1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),en(t),r&4){try{Js(3,t,t.return),xu(3,t)}catch(w){me(t,t.return,w)}try{Js(5,t,t.return)}catch(w){me(t,t.return,w)}}break;case 1:zt(e,t),en(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(zt(e,t),en(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(w){me(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ow(i,s),vd(a,o);var u=vd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hw(i,h):c==="dangerouslySetInnerHTML"?uw(i,h):c==="children"?ho(i,h):Xf(i,c,h,u)}switch(a){case"input":fd(i,s);break;case"textarea":aw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ni(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(w){me(t,t.return,w)}}break;case 6:if(zt(e,t),en(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){me(t,t.return,w)}}break;case 3:if(zt(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(w){me(t,t.return,w)}break;case 4:zt(e,t),en(t);break;case 13:zt(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xp=ye())),r&4&&Py(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||c,zt(e,t),Ge=u):zt(e,t),en(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(f=N,p=f.child,f.tag){case 0:case 11:case 14:case 15:Js(4,f,f.return);break;case 1:ki(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:ki(f,f.return);break;case 22:if(f.memoizedState!==null){Dy(h);continue}}p!==null?(p.return=f,N=p):Dy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cw("display",o))}catch(w){me(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){me(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zt(e,t),en(t),r&4&&Py(t);break;case 21:break;default:zt(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=by(t);Kd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=by(t);Gd(t,a,o);break;default:throw Error(I(161))}}catch(l){me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HC(t,e,n){N=t,j1(t)}function j1(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ja;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=ja;var u=Ge;if(ja=o,(Ge=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?My(i):l!==null?(l.return=o,N=l):My(i);for(;s!==null;)N=s,j1(s),s=s.sibling;N=i,ja=a,Ge=u}Oy(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,N=s):Oy(t)}}function Oy(t){for(;N!==null;){var e=N;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ge||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ge||e.flags&512&&qd(e)}catch(f){me(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Dy(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function My(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(l){me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){me(e,i,l)}}var s=e.return;try{qd(e)}catch(l){me(e,s,l)}break;case 5:var o=e.return;try{qd(e)}catch(l){me(e,o,l)}}}catch(l){me(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var WC=Math.ceil,Ul=On.ReactCurrentDispatcher,Rp=On.ReactCurrentOwner,Ot=On.ReactCurrentBatchConfig,Q=0,Pe=null,Ee=null,Fe=0,yt=0,Ci=yr(0),ke=0,Ao=null,Gr=0,bu=0,Np=0,Zs=null,ut=null,xp=0,Qi=1/0,dn=null,Fl=!1,Qd=null,nr=null,Va=!1,Kn=null,jl=0,eo=0,Yd=null,al=-1,ll=0;function rt(){return(Q&6)!==0?ye():al!==-1?al:al=ye()}function rr(t){return(t.mode&1)===0?1:(Q&2)!==0&&Fe!==0?Fe&-Fe:RC.transition!==null?(ll===0&&(ll=Iw()),ll):(t=J,t!==0||(t=window.event,t=t===void 0?16:xw(t.type)),t)}function Qt(t,e,n,r){if(50<eo)throw eo=0,Yd=null,Error(I(185));Yo(t,n,r),((Q&2)===0||t!==Pe)&&(t===Pe&&((Q&2)===0&&(bu|=n),ke===4&&Vn(t,Fe)),pt(t,r),n===1&&Q===0&&(e.mode&1)===0&&(Qi=ye()+500,Au&&vr()))}function pt(t,e){var n=t.callbackNode;Rk(t,e);var r=Il(t,t===Pe?Fe:0);if(r===0)n!==null&&Hg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hg(n),e===1)t.tag===0?AC(Ly.bind(null,t)):Qw(Ly.bind(null,t)),IC(function(){(Q&6)===0&&vr()}),n=null;else{switch(Tw(r)){case 1:n=np;break;case 4:n=Ew;break;case 16:n=_l;break;case 536870912:n=_w;break;default:n=_l}n=K1(n,V1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V1(t,e){if(al=-1,ll=0,(Q&6)!==0)throw Error(I(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=Il(t,t===Pe?Fe:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Vl(t,r);else{e=r;var i=Q;Q|=2;var s=z1();(Pe!==t||Fe!==e)&&(dn=null,Qi=ye()+500,Ur(t,e));do try{KC();break}catch(a){B1(t,a)}while(1);mp(),Ul.current=s,Q=i,Ee!==null?e=0:(Pe=null,Fe=0,e=ke)}if(e!==0){if(e===2&&(i=Id(t),i!==0&&(r=i,e=Xd(t,i))),e===1)throw n=Ao,Ur(t,0),Vn(t,r),pt(t,ye()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!qC(i)&&(e=Vl(t,r),e===2&&(s=Id(t),s!==0&&(r=s,e=Xd(t,s))),e===1))throw n=Ao,Ur(t,0),Vn(t,r),pt(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Ar(t,ut,dn);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=xp+500-ye(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bd(Ar.bind(null,t,ut,dn),e);break}Ar(t,ut,dn);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WC(r/1960))-r,10<r){t.timeoutHandle=bd(Ar.bind(null,t,ut,dn),r);break}Ar(t,ut,dn);break;case 5:Ar(t,ut,dn);break;default:throw Error(I(329))}}}return pt(t,ye()),t.callbackNode===n?V1.bind(null,t):null}function Xd(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=ut,ut=n,e!==null&&Jd(e)),t}function Jd(t){ut===null?ut=t:ut.push.apply(ut,t)}function qC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Np,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Ly(t){if((Q&6)!==0)throw Error(I(327));Di();var e=Il(t,0);if((e&1)===0)return pt(t,ye()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=Id(t);r!==0&&(e=r,n=Xd(t,r))}if(n===1)throw n=Ao,Ur(t,0),Vn(t,e),pt(t,ye()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,ut,dn),pt(t,ye()),null}function bp(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(Qi=ye()+500,Au&&vr())}}function Kr(t){Kn!==null&&Kn.tag===0&&(Q&6)===0&&Di();var e=Q;Q|=1;var n=Ot.transition,r=J;try{if(Ot.transition=null,J=1,t)return t()}finally{J=r,Ot.transition=n,Q=e,(Q&6)===0&&vr()}}function Pp(){yt=Ci.current,oe(Ci)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_C(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:Gi(),oe(dt),oe(Xe),Ep();break;case 5:Sp(r);break;case 4:Gi();break;case 13:oe(de);break;case 19:oe(de);break;case 10:gp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(Pe=t,Ee=t=ir(t.current,null),Fe=yt=e,ke=0,Ao=null,Np=bu=Gr=0,ut=Zs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function B1(t,e){do{var n=Ee;try{if(mp(),il.current=$l,Ll){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(qr=0,be=Ie=fe=null,Xs=!1,To=0,Rp.current=null,n===null||n.return===null){ke=1,Ao=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Iy(o);if(p!==null){p.flags&=-257,Ty(p,o,a,s,e),p.mode&1&&_y(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if((e&1)===0){_y(s,u,e),Op();break e}l=Error(I(426))}}else if(ue&&a.mode&1){var E=Iy(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Ty(E,o,a,s,e),fp(Ki(l,a));break e}}s=l=Ki(l,a),ke!==4&&(ke=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=k1(s,l,e);my(s,y);break e;case 1:a=l;var m=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=C1(s,a,e);my(s,S);break e}}s=s.return}while(s!==null)}W1(n)}catch(k){e=k,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function z1(){var t=Ul.current;return Ul.current=$l,t===null?$l:t}function Op(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||(Gr&268435455)===0&&(bu&268435455)===0||Vn(Pe,Fe)}function Vl(t,e){var n=Q;Q|=2;var r=z1();(Pe!==t||Fe!==e)&&(dn=null,Ur(t,e));do try{GC();break}catch(i){B1(t,i)}while(1);if(mp(),Q=n,Ul.current=r,Ee!==null)throw Error(I(261));return Pe=null,Fe=0,ke}function GC(){for(;Ee!==null;)H1(Ee)}function KC(){for(;Ee!==null&&!wk();)H1(Ee)}function H1(t){var e=G1(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?W1(t):Ee=e,Rp.current=null}function W1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=jC(n,e,yt),n!==null){Ee=n;return}}else{if(n=VC(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ee=null;return}}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);ke===0&&(ke=5)}function Ar(t,e,n){var r=J,i=Ot.transition;try{Ot.transition=null,J=1,QC(t,e,n,r)}finally{Ot.transition=i,J=r}return null}function QC(t,e,n,r){do Di();while(Kn!==null);if((Q&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nk(t,s),t===Pe&&(Ee=Pe=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Va||(Va=!0,K1(_l,function(){return Di(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ot.transition,Ot.transition=null;var o=J;J=1;var a=Q;Q|=4,Rp.current=null,zC(t,n),F1(n,t),mC(Nd),Tl=!!Rd,Nd=Rd=null,t.current=n,HC(n),Sk(),Q=a,J=o,Ot.transition=s}else t.current=n;if(Va&&(Va=!1,Kn=t,jl=i),s=t.pendingLanes,s===0&&(nr=null),Ik(n.stateNode),pt(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,t=Qd,Qd=null,t;return(jl&1)!==0&&t.tag!==0&&Di(),s=t.pendingLanes,(s&1)!==0?t===Yd?eo++:(eo=0,Yd=t):eo=0,vr(),null}function Di(){if(Kn!==null){var t=Tw(jl),e=Ot.transition,n=J;try{if(Ot.transition=null,J=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,jl=0,(Q&6)!==0)throw Error(I(331));var i=Q;for(Q|=4,N=t.current;N!==null;){var s=N,o=s.child;if((N.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Js(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var f=c.sibling,p=c.return;if(L1(c),c===u){N=null;break}if(f!==null){f.return=p,N=f;break}N=p}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}N=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,N=y;break e}N=s.return}}var m=t.current;for(N=m;N!==null;){o=N;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,N=v;else e:for(o=m;N!==null;){if(a=N,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:xu(9,a)}}catch(k){me(a,a.return,k)}if(a===o){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(Q=i,vr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(_u,t)}catch{}r=!0}return r}finally{J=n,Ot.transition=e}}return!1}function $y(t,e,n){e=Ki(n,e),e=k1(t,e,1),t=tr(t,e,1),e=rt(),t!==null&&(Yo(t,1,e),pt(t,e))}function me(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Ki(n,t),t=C1(e,t,1),e=tr(e,t,1),t=rt(),e!==null&&(Yo(e,1,t),pt(e,t));break}}e=e.return}}function YC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&(Fe&n)===n&&(ke===4||ke===3&&(Fe&130023424)===Fe&&500>ye()-xp?Ur(t,0):Np|=n),pt(t,e)}function q1(t,e){e===0&&((t.mode&1)===0?e=1:(e=ba,ba<<=1,(ba&130023424)===0&&(ba=4194304)));var n=rt();t=kn(t,e),t!==null&&(Yo(t,e,n),pt(t,n))}function XC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q1(t,n)}function JC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),q1(t,n)}var G1;G1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ht=!1,FC(t,e,n);ht=(t.flags&131072)!==0}else ht=!1,ue&&(e.flags&1048576)!==0&&Yw(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ol(t,e),t=e.pendingProps;var i=Hi(e,Xe.current);Oi(e,n),i=Ip(null,e,r,t,i,n);var s=Tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Nl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vp(e),i.updater=Ru,e.stateNode=i,i._reactInternals=e,Ud(e,r,t,n),e=Vd(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&hp(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eA(r),t=Ht(r,t),i){case 0:e=jd(null,e,r,t,n);break e;case 1:e=Ay(null,e,r,t,n);break e;case 11:e=ky(null,e,r,t,n);break e;case 14:e=Cy(null,e,r,Ht(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ay(t,e,r,i,n);case 3:e:{if(x1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e1(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(I(423)),e),e=Ry(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(I(424)),e),e=Ry(t,e,r,n,i);break e}else for(vt=er(e.stateNode.containerInfo.firstChild),St=e,ue=!0,qt=null,n=i1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Cn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return s1(e),t===null&&Md(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xd(r,i)?o=null:s!==null&&xd(r,s)&&(e.flags|=32),N1(t,e),et(t,e,o,n),e.child;case 6:return t===null&&Md(e),null;case 13:return b1(t,e,n);case 4:return wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ky(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Pl,r._currentValue),r._currentValue=o,s!==null)if(Xt(s.value,o)){if(s.children===i.children&&!dt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ld(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=Lt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),Cy(t,e,r,i,n);case 15:return A1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),ol(t,e),e.tag=1,ft(r)?(t=!0,Nl(e)):t=!1,Oi(e,n),n1(e,r,i),Ud(e,r,i,n),Vd(null,e,r,!0,t,n);case 19:return P1(t,e,n);case 22:return R1(t,e,n)}throw Error(I(156,e.tag))};function K1(t,e){return Sw(t,e)}function ZC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new ZC(t,e,n,r)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eA(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===ep)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return Fr(n.children,i,s,e);case Jf:o=8,i|=8;break;case ld:return t=Pt(12,n,e,i|2),t.elementType=ld,t.lanes=s,t;case ud:return t=Pt(13,n,e,i),t.elementType=ud,t.lanes=s,t;case cd:return t=Pt(19,n,e,i),t.elementType=cd,t.lanes=s,t;case rw:return Pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tw:o=10;break e;case nw:o=9;break e;case Zf:o=11;break e;case ep:o=14;break e;case Ln:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Pu(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=rw,t.lanes=n,t.stateNode={isHidden:!1},t}function _h(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rh(0),this.expirationTimes=rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,r,i,s,o,a,l){return t=new tA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),t}function nA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q1(t){if(!t)return cr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(ft(n))return Kw(t,n,e)}return e}function Y1(t,e,n,r,i,s,o,a,l){return t=Mp(n,r,!0,t,i,s,o,a,l),t.context=Q1(null),n=t.current,r=rt(),i=rr(n),s=Sn(r,i),s.callback=e!=null?e:null,tr(n,s,i),t.current.lanes=i,Yo(t,i,r),pt(t,r),t}function Ou(t,e,n,r){var i=e.current,s=rt(),o=rr(i);return n=Q1(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Qt(t,i,o,s),rl(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Uy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lp(t,e){Uy(t,e),(t=t.alternate)&&Uy(t,e)}function rA(){return null}var X1=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}Du.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ou(t,e,null,null)};Du.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Ou(null,t,null,null)}),e[Tn]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Nw(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fy(){}function iA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bl(o);s.call(u)}}var o=Y1(e,r,t,0,null,!1,!1,"",Fy);return t._reactRootContainer=o,t[Tn]=o.current,wo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bl(l);a.call(u)}}var l=Mp(t,0,!1,null,null,!1,!1,"",Fy);return t._reactRootContainer=l,t[Tn]=l.current,wo(t.nodeType===8?t.parentNode:t),Kr(function(){Ou(e,l,n,r)}),l}function Lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bl(o);a.call(l)}}Ou(e,o,t,i)}else o=iA(n,e,t,i,r);return Bl(o)}kw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(rp(e,n|1),pt(e,ye()),(Q&6)===0&&(Qi=ye()+500,vr()))}break;case 13:Kr(function(){var r=kn(t,1);if(r!==null){var i=rt();Qt(r,t,1,i)}}),Lp(t,1)}};ip=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=rt();Qt(e,t,134217728,n)}Lp(t,134217728)}};Cw=function(t){if(t.tag===13){var e=rr(t),n=kn(t,e);if(n!==null){var r=rt();Qt(n,t,e,r)}Lp(t,e)}};Aw=function(){return J};Rw=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Sd=function(t,e,n){switch(e){case"input":if(fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cu(r);if(!i)throw Error(I(90));sw(r),fd(r,i)}}}break;case"textarea":aw(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};pw=bp;mw=Kr;var sA={usingClientEntryPoint:!1,Events:[Jo,Si,Cu,dw,fw,bp]},bs={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oA={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vw(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||rA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{_u=Ba.inject(oA),on=Ba}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sA;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(I(200));return nA(t,e,null,n)};kt.createRoot=function(t,e){if(!Up(t))throw Error(I(299));var n=!1,r="",i=X1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,wo(t.nodeType===8?t.parentNode:t),new $p(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=vw(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Kr(t)};kt.hydrate=function(t,e,n){if(!Mu(e))throw Error(I(200));return Lu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y1(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Tn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};kt.render=function(t,e,n){if(!Mu(e))throw Error(I(200));return Lu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(I(40));return t._reactRootContainer?(Kr(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};kt.unstable_batchedUpdates=bp;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mu(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Lu(t,e,n,!1,r)};kt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=kt})(Eu);const aA=z0(Eu.exports);var jy=Eu.exports;sd.createRoot=jy.createRoot,sd.hydrateRoot=jy.hydrateRoot;/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Vy="popstate";function lA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Zd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ef(i)}return cA(e,n,null,t)}function uA(){return Math.random().toString(36).substr(2,8)}function By(t){return{usr:t.state,key:t.key}}function Zd(t,e,n,r){return n===void 0&&(n=null),zl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hs(e):e,{state:n,key:e&&e.key||r||uA()})}function ef(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null;function u(){a=Qn.Pop,l&&l({action:a,location:f.location})}function c(p,g){a=Qn.Push;let w=Zd(f.location,p,g);n&&n(w,p);let E=By(w),y=f.createHref(w);try{o.pushState(E,"",y)}catch{i.location.assign(y)}s&&l&&l({action:a,location:w})}function h(p,g){a=Qn.Replace;let w=Zd(f.location,p,g);n&&n(w,p);let E=By(w),y=f.createHref(w);o.replaceState(E,"",y),s&&l&&l({action:a,location:w})}let f={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vy,u),l=p,()=>{i.removeEventListener(Vy,u),l=null}},createHref(p){return e(i,p)},push:c,replace:h,go(p){return o.go(p)}};return f}var zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zy||(zy={}));function hA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?hs(e):e,i=Z1(r.pathname||"/",n);if(i==null)return null;let s=J1(t);dA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=EA(s[a],i);return o}function J1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(it(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=sr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(it(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),J1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:wA(a,i.index),routesMeta:l})}),e}function dA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fA=/^:\w+$/,pA=3,mA=2,gA=1,yA=10,vA=-2,Hy=t=>t==="*";function wA(t,e){let n=t.split("/"),r=n.length;return n.some(Hy)&&(r+=vA),e&&(r+=mA),n.filter(i=>!Hy(i)).reduce((i,s)=>i+(fA.test(s)?pA:s===""?gA:yA),r)}function SA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function EA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Fp({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:sr([i,c.pathname]),pathnameBase:CA(sr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=sr([i,c.pathnameBase]))}return s}function Fp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=IA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function _A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function IA(t,e){try{return decodeURIComponent(t)}catch(n){return eS(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Z1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function it(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hs(t):t;return{pathname:n?n.startsWith("/")?n:kA(n,e):e,search:AA(r),hash:RA(i)}}function kA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tS(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?hs(t):zl({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=TA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),CA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),AA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class NA{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function xA(t){return t instanceof NA}var $u={exports:{}},Uu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bA=C.exports,PA=Symbol.for("react.element"),OA=Symbol.for("react.fragment"),DA=Object.prototype.hasOwnProperty,MA=bA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LA={key:!0,ref:!0,__self:!0,__source:!0};function nS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DA.call(e,r)&&!LA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PA,type:t,key:s,ref:o,props:i,_owner:MA.current}}Uu.Fragment=OA;Uu.jsx=nS;Uu.jsxs=nS;(function(t){t.exports=Uu})($u);const ai=$u.exports.Fragment,d=$u.exports.jsx,O=$u.exports.jsxs;/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tf(){return tf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tf.apply(this,arguments)}function $A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const UA=typeof Object.is=="function"?Object.is:$A,{useState:FA,useEffect:jA,useLayoutEffect:VA,useDebugValue:BA}=od;function zA(t,e,n){const r=e(),[{inst:i},s]=FA({inst:{value:r,getSnapshot:e}});return VA(()=>{i.value=r,i.getSnapshot=e,Th(i)&&s({inst:i})},[t,r,e]),jA(()=>(Th(i)&&s({inst:i}),t(()=>{Th(i)&&s({inst:i})})),[t]),BA(r),r}function Th(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!UA(n,r)}catch{return!0}}function HA(t,e,n){return e()}const WA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qA=!WA,GA=qA?HA:zA;"useSyncExternalStore"in od&&(t=>t.useSyncExternalStore)(od);const KA=C.exports.createContext(null),QA=C.exports.createContext(null),jp=C.exports.createContext(null),Vp=C.exports.createContext(null),Fu=C.exports.createContext(null),ea=C.exports.createContext({outlet:null,matches:[]}),rS=C.exports.createContext(null);function YA(t,e){let{relative:n}=e===void 0?{}:e;ds()||it(!1);let{basename:r,navigator:i}=C.exports.useContext(Vp),{hash:s,pathname:o,search:a}=Hl(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ds(){return C.exports.useContext(Fu)!=null}function ta(){return ds()||it(!1),C.exports.useContext(Fu).location}function XA(t){ds()||it(!1);let{pathname:e}=ta();return C.exports.useMemo(()=>Fp(t,e),[e,t])}function iS(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function sS(){ds()||it(!1);let{basename:t,navigator:e}=C.exports.useContext(Vp),{matches:n}=C.exports.useContext(ea),{pathname:r}=ta(),i=JSON.stringify(iS(n).map(a=>a.pathnameBase)),s=C.exports.useRef(!1);return C.exports.useEffect(()=>{s.current=!0}),C.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=tS(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:sr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Hl(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.exports.useContext(ea),{pathname:i}=ta(),s=JSON.stringify(iS(r).map(o=>o.pathnameBase));return C.exports.useMemo(()=>tS(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JA(t,e){ds()||it(!1);let n=C.exports.useContext(jp),{matches:r}=C.exports.useContext(ea),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=ta(),l;if(e){var u;let g=typeof e=="string"?hs(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||it(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",f=hA(t,{pathname:h}),p=nR(f&&f.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:sr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:sr([o,g.pathnameBase])})),r,n||void 0);return e?d(Fu.Provider,{value:{location:tf({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Qn.Pop},children:p}):p}function ZA(){let t=iR(),e=xA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return O(ai,{children:[d("h2",{children:"Unhandled Thrown Error!"}),d("h3",{style:{fontStyle:"italic"},children:e}),n?d("pre",{style:i,children:n}):null,d("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),O("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",d("code",{style:s,children:"errorElement"})," props on\xA0",d("code",{style:s,children:"<Route>"})]})]})}class eR extends C.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?d(rS.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function tR(t){let{routeContext:e,match:n,children:r}=t,i=C.exports.useContext(KA);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),d(ea.Provider,{value:e,children:r})}function nR(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||it(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||d(ZA,{}):null,c=()=>d(tR,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?d(eR,{location:n.location,component:u,error:l,children:c()}):c()},null)}var nf;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(nf||(nf={}));function rR(t){let e=C.exports.useContext(jp);return e||it(!1),e}function iR(){var t;let e=C.exports.useContext(rS),n=rR(nf.UseRouteError),r=C.exports.useContext(ea),i=r.matches[r.matches.length-1];return e||(r||it(!1),i.route.id||it(!1),(t=n.errors)==null?void 0:t[i.route.id])}function rf(t){it(!1)}function sR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;ds()&&it(!1);let a=e.replace(/^\/*/,"/"),l=C.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=hs(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:p="default"}=r,g=C.exports.useMemo(()=>{let w=Z1(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:f,key:p}},[a,u,c,h,f,p]);return g==null?null:d(Vp.Provider,{value:l,children:d(Fu.Provider,{children:n,value:{location:g,navigationType:i}})})}function oR(t){let{children:e,location:n}=t,r=C.exports.useContext(QA),i=r&&!e?r.router.routes:sf(e);return JA(i,n)}var Wy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Wy||(Wy={}));new Promise(()=>{});function sf(t,e){e===void 0&&(e=[]);let n=[];return C.exports.Children.forEach(t,(r,i)=>{if(!C.exports.isValidElement(r))return;if(r.type===C.exports.Fragment){n.push.apply(n,sf(r.props.children,e));return}r.type!==rf&&it(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lR(t,e){return t.button===0&&(!e||e==="_self")&&!aR(t)}const uR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],cR=["aria-current","caseSensitive","className","end","style","to","children"];function hR(t){let{basename:e,children:n,window:r}=t,i=C.exports.useRef();i.current==null&&(i.current=lA({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.exports.useState({action:s.action,location:s.location});return C.exports.useLayoutEffect(()=>s.listen(a),[s]),d(sR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const aS=C.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=oS(e,uR),f=YA(u,{relative:i}),p=dR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(w){r&&r(w),w.defaultPrevented||p(w)}return d("a",{...h,href:f,onClick:s?r:g,ref:n,target:l})}),lS=C.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=oS(e,cR),h=Hl(l),f=XA({path:h.pathname,end:o,caseSensitive:i}),p=C.exports.useContext(jp),g=p==null?void 0:p.navigation.location,w=Hl(g||""),y=C.exports.useMemo(()=>g?Fp({path:h.pathname,end:o,caseSensitive:i},w.pathname):null,[g,h.pathname,i,o,w.pathname])!=null,m=f!=null,v=m?r:void 0,S;typeof s=="function"?S=s({isActive:m,isPending:y}):S=[s,m?"active":null,y?"pending":null].filter(Boolean).join(" ");let k=typeof a=="function"?a({isActive:m,isPending:y}):a;return d(aS,{...c,"aria-current":v,className:S,ref:n,style:k,to:l,children:typeof u=="function"?u({isActive:m,isPending:y}):u})});function dR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=sS(),l=ta(),u=Hl(t,{relative:o});return C.exports.useCallback(c=>{if(lR(c,n)){c.preventDefault();let h=r!==void 0?r:ef(l)===ef(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var of=function(){return of=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},of.apply(this,arguments)};function fR(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}var Mi="",to=null,cl=null,uS=null;function Bp(){Mi="",to!==null&&to.disconnect(),cl!==null&&(window.clearTimeout(cl),cl=null)}function qy(t){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return e.includes(t.tagName)&&!t.hasAttribute("disabled")||n.includes(t.tagName)&&t.hasAttribute("href")}function Gy(){var t=null;if(Mi==="#")t=document.body;else{var e=Mi.replace("#","");t=document.getElementById(e),t===null&&Mi==="#top"&&(t=document.body)}if(t!==null){uS(t);var n=t.getAttribute("tabindex");return n===null&&!qy(t)&&t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),n===null&&!qy(t)&&(t.blur(),t.removeAttribute("tabindex")),Bp(),!0}return!1}function pR(t){window.setTimeout(function(){Gy()===!1&&(to===null&&(to=new MutationObserver(Gy)),to.observe(document,{attributes:!0,childList:!0,subtree:!0}),cl=window.setTimeout(function(){Bp()},t||1e4))},0)}function cS(t){return Kf.forwardRef(function(e,n){var r="";typeof e.to=="string"&&e.to.includes("#")?r="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(r=e.to.hash);var i={};t===lS&&(i.isActive=function(a,l){return a&&a.isExact&&l.hash===r});function s(a){Bp(),Mi=e.elementId?"#"+e.elementId:r,e.onClick&&e.onClick(a),Mi!==""&&!a.defaultPrevented&&a.button===0&&(!e.target||e.target==="_self")&&!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&(uS=e.scroll||function(l){return e.smooth?l.scrollIntoView({behavior:"smooth"}):l.scrollIntoView()},pR(e.timeout))}var o=fR(e,["scroll","smooth","timeout","elementId"]);return d(t,{...of({},i,o,{onClick:s,ref:n}),children:e.children})})}var Ps=cS(aS);cS(lS);function zp(){return O("div",{className:"lds-ellipsis",children:[d("div",{}),d("div",{}),d("div",{}),d("div",{})]})}var Ue=(t=>(t.PRIMARY="btn-primary",t.ACCENT="btn-accent",t.SUCCESS="btn-success",t.ERROR="btn-error",t.RED="btn-red",t.GREEN="btn-green",t.BLUE="btn-blue",t.YELLOW="btn-yellow",t))(Ue||{}),Yi=(t=>(t.BUTTON="button",t.SUBMIT="submit",t.RESET="reset",t))(Yi||{});function Jt(t){var n;return d("button",{onClick:r=>{t.onClick!==void 0&&t.onClick(r)},className:`btn ${t.style}`,type:(n=t.type)!=null?n:"button",children:t.loading?d(zp,{}):O(ai,{children:[t.icon&&(t.children?d("span",{className:"mr-2",children:t.icon}):t.icon),t.children]})})}function At({children:t,viewBox:e}){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:e,className:"icon",style:{display:"inline",fill:"currentcolor",height:"1em",top:"0.125em",position:"relative"},children:t})}function Hp(){return d(At,{viewBox:"0 0 496 512",children:d("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}function hS(){return d(At,{viewBox:"0 0 448 512",children:d("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})}function dS(){return d(At,{viewBox:"0 0 512 512",children:d("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})}function mR({children:t}){const[e,n]=C.exports.useState(!1),r=i=>{i.preventDefault(),n(!e)};return C.exports.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[e]),C.exports.useEffect(()=>{const i=()=>{e&&n(!1)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}}),O(ai,{children:[d("div",{className:"display-fix"}),O("nav",{className:"navbar",children:[d("div",{className:e?"navbar-menu-button active":"navbar-menu-button",children:d("a",{href:"#",onClick:r,children:O("svg",{className:e?"menu-icon active":"menu-icon",viewBox:"0 0 100 100",width:"80",children:[d("path",{className:"line top",d:"m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"}),d("path",{className:"line middle",d:"m 70,50 h -40"}),d("path",{className:"line bottom",d:"m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"})]})})}),O("div",{className:"navbar-container",onClick:()=>n(!1),role:"presentation",children:[d("div",{className:"navbar-brand",children:d("a",{href:"#",children:O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 10.56 8.06",children:[d("g",{id:"a",children:d("polygon",{points:"7.03 8.06 5.85 8.06 3.51 1.64 1.17 8.06 0 8.06 2.94 0 4.08 0 7.03 8.06"})}),d("g",{id:"p",children:d("path",{d:"M7.67,0h-2.65l.34,.9h2.31c1.25,0,1.77,.58,1.77,1.55s-.52,1.52-1.77,1.52h-1.15l.34,.9h.81c2.07,0,2.89-1.15,2.89-2.42,0-1.37-.92-2.45-2.89-2.45Z"})})]})})}),d("div",{className:"navbar-links",children:t})]})]})]})}var fS={exports:{}},pS={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=C.exports;function gR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yR=typeof Object.is=="function"?Object.is:gR,vR=Xi.useState,wR=Xi.useEffect,SR=Xi.useLayoutEffect,ER=Xi.useDebugValue;function _R(t,e){var n=e(),r=vR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return SR(function(){i.value=n,i.getSnapshot=e,kh(i)&&s({inst:i})},[t,n,e]),wR(function(){return kh(i)&&s({inst:i}),t(function(){kh(i)&&s({inst:i})})},[t]),ER(n),n}function kh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yR(t,n)}catch{return!0}}function IR(t,e){return e()}var TR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?IR:_R;pS.useSyncExternalStore=Xi.useSyncExternalStore!==void 0?Xi.useSyncExternalStore:TR;(function(t){t.exports=pS})(fS);var mS={exports:{}},gS={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ju=C.exports,kR=fS.exports;function CR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var AR=typeof Object.is=="function"?Object.is:CR,RR=kR.useSyncExternalStore,NR=ju.useRef,xR=ju.useEffect,bR=ju.useMemo,PR=ju.useDebugValue;gS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=NR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=bR(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return h=g}return h=p}if(g=h,AR(c,p))return g;var w=r(p);return i!==void 0&&i(g,w)?g:(c=p,h=w)}var u=!1,c,h,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=RR(t,s[0],s[1]);return xR(function(){o.hasValue=!0,o.value=a},[a]),PR(a),a};(function(t){t.exports=gS})(mS);function OR(t){t()}let yS=OR;const DR=t=>yS=t,MR=()=>yS,hr=C.exports.createContext(null);function vS(){return C.exports.useContext(hr)}const LR=()=>{throw new Error("uSES not initialized!")};let wS=LR;const $R=t=>{wS=t},UR=(t,e)=>t===e;function FR(t=hr){const e=t===hr?vS:()=>C.exports.useContext(t);return function(r,i=UR){const{store:s,subscription:o,getServerState:a}=e(),l=wS(o.addNestedSub,s.getState,a||s.getState,r,i);return C.exports.useDebugValue(l),l}}const Wp=FR();var SS={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,qp=De?Symbol.for("react.element"):60103,Gp=De?Symbol.for("react.portal"):60106,Vu=De?Symbol.for("react.fragment"):60107,Bu=De?Symbol.for("react.strict_mode"):60108,zu=De?Symbol.for("react.profiler"):60114,Hu=De?Symbol.for("react.provider"):60109,Wu=De?Symbol.for("react.context"):60110,Kp=De?Symbol.for("react.async_mode"):60111,qu=De?Symbol.for("react.concurrent_mode"):60111,Gu=De?Symbol.for("react.forward_ref"):60112,Ku=De?Symbol.for("react.suspense"):60113,jR=De?Symbol.for("react.suspense_list"):60120,Qu=De?Symbol.for("react.memo"):60115,Yu=De?Symbol.for("react.lazy"):60116,VR=De?Symbol.for("react.block"):60121,BR=De?Symbol.for("react.fundamental"):60117,zR=De?Symbol.for("react.responder"):60118,HR=De?Symbol.for("react.scope"):60119;function Rt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qp:switch(t=t.type,t){case Kp:case qu:case Vu:case zu:case Bu:case Ku:return t;default:switch(t=t&&t.$$typeof,t){case Wu:case Gu:case Yu:case Qu:case Hu:return t;default:return e}}case Gp:return e}}}function ES(t){return Rt(t)===qu}Z.AsyncMode=Kp;Z.ConcurrentMode=qu;Z.ContextConsumer=Wu;Z.ContextProvider=Hu;Z.Element=qp;Z.ForwardRef=Gu;Z.Fragment=Vu;Z.Lazy=Yu;Z.Memo=Qu;Z.Portal=Gp;Z.Profiler=zu;Z.StrictMode=Bu;Z.Suspense=Ku;Z.isAsyncMode=function(t){return ES(t)||Rt(t)===Kp};Z.isConcurrentMode=ES;Z.isContextConsumer=function(t){return Rt(t)===Wu};Z.isContextProvider=function(t){return Rt(t)===Hu};Z.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qp};Z.isForwardRef=function(t){return Rt(t)===Gu};Z.isFragment=function(t){return Rt(t)===Vu};Z.isLazy=function(t){return Rt(t)===Yu};Z.isMemo=function(t){return Rt(t)===Qu};Z.isPortal=function(t){return Rt(t)===Gp};Z.isProfiler=function(t){return Rt(t)===zu};Z.isStrictMode=function(t){return Rt(t)===Bu};Z.isSuspense=function(t){return Rt(t)===Ku};Z.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vu||t===qu||t===zu||t===Bu||t===Ku||t===jR||typeof t=="object"&&t!==null&&(t.$$typeof===Yu||t.$$typeof===Qu||t.$$typeof===Hu||t.$$typeof===Wu||t.$$typeof===Gu||t.$$typeof===BR||t.$$typeof===zR||t.$$typeof===HR||t.$$typeof===VR)};Z.typeOf=Rt;(function(t){t.exports=Z})(SS);var _S=SS.exports,WR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IS={};IS[_S.ForwardRef]=WR;IS[_S.Memo]=qR;var GR={exports:{}},ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp=Symbol.for("react.element"),Yp=Symbol.for("react.portal"),Xu=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),KR=Symbol.for("react.server_context"),nc=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),oc=Symbol.for("react.lazy"),QR=Symbol.for("react.offscreen"),TS;TS=Symbol.for("react.module.reference");function jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qp:switch(t=t.type,t){case Xu:case Zu:case Ju:case rc:case ic:return t;default:switch(t=t&&t.$$typeof,t){case KR:case tc:case nc:case oc:case sc:case ec:return t;default:return e}}case Yp:return e}}}ee.ContextConsumer=tc;ee.ContextProvider=ec;ee.Element=Qp;ee.ForwardRef=nc;ee.Fragment=Xu;ee.Lazy=oc;ee.Memo=sc;ee.Portal=Yp;ee.Profiler=Zu;ee.StrictMode=Ju;ee.Suspense=rc;ee.SuspenseList=ic;ee.isAsyncMode=function(){return!1};ee.isConcurrentMode=function(){return!1};ee.isContextConsumer=function(t){return jt(t)===tc};ee.isContextProvider=function(t){return jt(t)===ec};ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qp};ee.isForwardRef=function(t){return jt(t)===nc};ee.isFragment=function(t){return jt(t)===Xu};ee.isLazy=function(t){return jt(t)===oc};ee.isMemo=function(t){return jt(t)===sc};ee.isPortal=function(t){return jt(t)===Yp};ee.isProfiler=function(t){return jt(t)===Zu};ee.isStrictMode=function(t){return jt(t)===Ju};ee.isSuspense=function(t){return jt(t)===rc};ee.isSuspenseList=function(t){return jt(t)===ic};ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Xu||t===Zu||t===Ju||t===rc||t===ic||t===QR||typeof t=="object"&&t!==null&&(t.$$typeof===oc||t.$$typeof===sc||t.$$typeof===ec||t.$$typeof===tc||t.$$typeof===nc||t.$$typeof===TS||t.getModuleId!==void 0)};ee.typeOf=jt;(function(t){t.exports=ee})(GR);function YR(){const t=MR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Ky={notify(){},get:()=>[]};function XR(t,e){let n,r=Ky;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=YR())}function u(){n&&(n(),n=void 0,r.clear(),r=Ky)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const JR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZR=JR?C.exports.useLayoutEffect:C.exports.useEffect;function e2({store:t,context:e,children:n,serverState:r}){const i=C.exports.useMemo(()=>{const a=XR(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=C.exports.useMemo(()=>t.getState(),[t]);return ZR(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]),d((e||hr).Provider,{value:i,children:n})}function kS(t=hr){const e=t===hr?vS:()=>C.exports.useContext(t);return function(){const{store:r}=e();return r}}const t2=kS();function n2(t=hr){const e=t===hr?t2:kS(t);return function(){return e().dispatch}}const Xp=n2();$R(mS.exports.useSyncExternalStoreWithSelector);DR(Eu.exports.unstable_batchedUpdates);var Jp=(t=>(t[t.GOOGLE=0]="GOOGLE",t))(Jp||{}),K=(t=>(t.LOADING="loading",t.OK="ok",t.ERROR="error",t))(K||{});class ac{constructor(e){he(this,"controller");this.controller=e}logout(){return this.controller.logout()}}class r2 extends ac{constructor(e){super(e)}loginWithEmailAndPassword(e){return this.controller.loginWithEmailAndPassword(e)}}class i2 extends ac{constructor(e){super(e)}onAuthStateChange(e){return this.controller.onAuthStateChange(e)}}class s2 extends ac{constructor(e){super(e)}loginWithAuthProvider(e){return this.controller.loginWithAuthProvider(e)}}/**
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
 *//**
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
 */const CS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a2=function(t){const e=CS(t);return AS.encodeByteArray(e,!0)},RS=function(t){return a2(t).replace(/\./g,"")},l2=function(t){try{return AS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class u2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function NS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d2(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xS(){return typeof indexedDB=="object"}function bS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function f2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const p2="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p2,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?m2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,r)}}function m2(t,e){return t.replace(g2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g2=/\{\$([^}]+)}/g;function y2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qy(s)&&Qy(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qy(t){return t!==null&&typeof t=="object"}/**
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
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function v2(t,e){const n=new w2(t,e);return n.subscribe.bind(n)}class w2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ch),i.error===void 0&&(i.error=Ch),i.complete===void 0&&(i.complete=Ch);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ch(){}/**
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
 */const E2=1e3,_2=2,I2=4*60*60*1e3,T2=.5;function Yy(t,e=E2,n=_2){const r=e*Math.pow(n,t),i=Math.round(T2*r*(Math.random()-.5)*2);return Math.min(I2,r+i)}/**
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
 */function ae(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class k2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new u2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A2(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:C2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C2(t){return t===Rr?void 0:t}function A2(t){return t.instantiationMode==="EAGER"}/**
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
 */class R2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const N2={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},x2=Y.INFO,b2={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},P2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=b2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=x2,this._logHandler=P2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const O2=(t,e)=>e.some(n=>t instanceof n);let Xy,Jy;function D2(){return Xy||(Xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M2(){return Jy||(Jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PS=new WeakMap,af=new WeakMap,OS=new WeakMap,Ah=new WeakMap,Zp=new WeakMap;function L2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PS.set(n,t)}).catch(()=>{}),Zp.set(e,t),e}function $2(t){if(af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||OS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U2(t){lf=t(lf)}function F2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rh(this),e,...n);return OS.set(r,e.sort?e.sort():[e]),or(r)}:M2().includes(t)?function(...e){return t.apply(Rh(this),e),or(PS.get(this))}:function(...e){return or(t.apply(Rh(this),e))}}function j2(t){return typeof t=="function"?F2(t):(t instanceof IDBTransaction&&$2(t),O2(t,D2())?new Proxy(t,lf):t)}function or(t){if(t instanceof IDBRequest)return L2(t);if(Ah.has(t))return Ah.get(t);const e=j2(t);return e!==t&&(Ah.set(t,e),Zp.set(e,t)),e}const Rh=t=>Zp.get(t);function DS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const V2=["get","getKey","getAll","getAllKeys","count"],B2=["put","add","delete","clear"],Nh=new Map;function Zy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nh.set(e,s),s}U2(t=>({...t,get:(e,n,r)=>Zy(e,n)||t.get(e,n,r),has:(e,n)=>!!Zy(e,n)||t.has(e,n)}));/**
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
 */class z2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uf="@firebase/app",ev="0.7.33";/**
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
 */const Qr=new lc("@firebase/app"),W2="@firebase/app-compat",q2="@firebase/analytics-compat",G2="@firebase/analytics",K2="@firebase/app-check-compat",Q2="@firebase/app-check",Y2="@firebase/auth",X2="@firebase/auth-compat",J2="@firebase/database",Z2="@firebase/database-compat",eN="@firebase/functions",tN="@firebase/functions-compat",nN="@firebase/installations",rN="@firebase/installations-compat",iN="@firebase/messaging",sN="@firebase/messaging-compat",oN="@firebase/performance",aN="@firebase/performance-compat",lN="@firebase/remote-config",uN="@firebase/remote-config-compat",cN="@firebase/storage",hN="@firebase/storage-compat",dN="@firebase/firestore",fN="@firebase/firestore-compat",pN="firebase",mN="9.10.0";/**
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
 */const MS="[DEFAULT]",gN={[uf]:"fire-core",[W2]:"fire-core-compat",[G2]:"fire-analytics",[q2]:"fire-analytics-compat",[Q2]:"fire-app-check",[K2]:"fire-app-check-compat",[Y2]:"fire-auth",[X2]:"fire-auth-compat",[J2]:"fire-rtdb",[Z2]:"fire-rtdb-compat",[eN]:"fire-fn",[tN]:"fire-fn-compat",[nN]:"fire-iid",[rN]:"fire-iid-compat",[iN]:"fire-fcm",[sN]:"fire-fcm-compat",[oN]:"fire-perf",[aN]:"fire-perf-compat",[lN]:"fire-rc",[uN]:"fire-rc-compat",[cN]:"fire-gcs",[hN]:"fire-gcs-compat",[dN]:"fire-fst",[fN]:"fire-fst-compat","fire-js":"fire-js",[pN]:"fire-js-all"};/**
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
 */const Wl=new Map,cf=new Map;function yN(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(cf.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;cf.set(e,t);for(const n of Wl.values())yN(n,t);return!0}function wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new li("app","Firebase",vN);/**
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
 */class wN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=mN;function SN(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:MS,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Yr.create("bad-app-name",{appName:String(r)});const i=Wl.get(r);if(i){if(Ro(t,i.options)&&Ro(n,i.config))return i;throw Yr.create("duplicate-app",{appName:r})}const s=new R2(r);for(const a of cf.values())s.addComponent(a);const o=new wN(t,n,s);return Wl.set(r,o),o}function uc(t=MS){const e=Wl.get(t);if(!e)throw Yr.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let i=(r=gN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}Zt(new Ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EN="firebase-heartbeat-database",_N=1,No="firebase-heartbeat-store";let xh=null;function LS(){return xh||(xh=DS(EN,_N,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(No)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),xh}async function IN(t){var e;try{return(await LS()).transaction(No).objectStore(No).get($S(t))}catch(n){if(n instanceof Vt)Qr.warn(n.message);else{const r=Yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Qr.warn(r.message)}}}async function tv(t,e){var n;try{const i=(await LS()).transaction(No,"readwrite");return await i.objectStore(No).put(e,$S(t)),i.done}catch(r){if(r instanceof Vt)Qr.warn(r.message);else{const i=Yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Qr.warn(i.message)}}}function $S(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TN=1024,kN=30*24*60*60*1e3;class CN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nv(),{heartbeatsToSend:n,unsentEntries:r}=AN(this._heartbeatsCache.heartbeats),i=RS(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nv(){return new Date().toISOString().substring(0,10)}function AN(t,e=TN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xS()?bS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await IN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return RS(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NN(t){Zt(new Ut("platform-logger",e=>new z2(e),"PRIVATE")),Zt(new Ut("heartbeat",e=>new CN(e),"PRIVATE")),mt(uf,ev,t),mt(uf,ev,"esm2017"),mt("fire-js","")}NN("");function em(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function US(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xN=US,FS=new li("auth","Firebase",US());/**
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
 */const iv=new lc("@firebase/auth");function hl(t,...e){iv.logLevel<=Y.ERROR&&iv.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw tm(t,...e)}function ln(t,...e){return tm(t,...e)}function jS(t,e,n){const r=Object.assign(Object.assign({},xN()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function bN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(t,"argument-error"),jS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FS.create(t,...e)}function $(t,e,...n){if(!t)throw tm(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function An(t,e){t||yn(e)}/**
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
 */const sv=new Map;function vn(t){An(t instanceof Function,"Expected a class definition");let e=sv.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sv.set(t,e),e)}/**
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
 */function PN(t,e){const n=wr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ro(s,e!=null?e:{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function ON(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DN(){return ov()==="http:"||ov()==="https:"}function ov(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DN()||NS()||"connection"in navigator)?navigator.onLine:!0}function LN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=c2()||h2()}get(){return MN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nm(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class VS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const UN=new ra(3e4,6e4);function cc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ia(t,e,n,r,i={}){return BS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),VS.fetch()(zS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function BS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$N),e);try{const i=new FN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jS(t,c,u);Ft(t,c)}}catch(i){if(i instanceof Vt)throw i;Ft(t,"network-request-failed")}}async function hc(t,e,n,r,i={}){const s=await ia(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nm(t.config,i):`${t.config.apiScheme}://${i}`}class FN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),UN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function jN(t,e){return ia(t,"POST","/v1/accounts:delete",e)}async function VN(t,e){return ia(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BN(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=rm(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:no(bh(i.auth_time)),issuedAtTime:no(bh(i.iat)),expirationTime:no(bh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bh(t){return Number(t)*1e3}function rm(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const s=l2(r);return s?JSON.parse(s):(hl("Failed to decode base64 JWT payload"),null)}catch(s){return hl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function zN(t){const e=rm(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&HN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class HS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xo(t,VN(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KN(s.providerUserInfo):[],a=GN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function qN(t){const e=ae(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KN(t){return t.map(e=>{var{providerId:n}=e,r=em(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QN(t,e){const n=await BS(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Mn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xo(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BN(this,e)}reload(){return qN(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xo(this,jN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:S,isAnonymous:k,providerData:R,stsTokenManager:x}=n;$(v&&x,e,"internal-error");const P=bo.fromJSON(this.name,x);$(typeof v=="string",e,"internal-error"),Mn(h,e.name),Mn(f,e.name),$(typeof S=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),Mn(p,e.name),Mn(g,e.name),Mn(w,e.name),Mn(E,e.name),Mn(y,e.name),Mn(m,e.name);const ie=new jr({uid:v,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:k,photoURL:g,phoneNumber:p,tenantId:w,stsTokenManager:P,createdAt:y,lastLoginAt:m});return R&&Array.isArray(R)&&(ie.providerData=R.map(H=>Object.assign({},H))),E&&(ie._redirectEventId=E),ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new bo;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}}/**
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
 */class WS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WS.type="NONE";const av=WS;/**
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
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(vn(av),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vn(av);const o=dl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=jr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Li(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Li(s,e,r))}}/**
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
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YS(e))return"Blackberry";if(XS(e))return"Webos";if(im(e))return"Safari";if((e.includes("chrome/")||GS(e))&&!e.includes("edge/"))return"Chrome";if(QS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qS(t=Je()){return/firefox\//i.test(t)}function im(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GS(t=Je()){return/crios\//i.test(t)}function KS(t=Je()){return/iemobile/i.test(t)}function QS(t=Je()){return/android/i.test(t)}function YS(t=Je()){return/blackberry/i.test(t)}function XS(t=Je()){return/webos/i.test(t)}function dc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YN(t=Je()){var e;return dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XN(){return d2()&&document.documentMode===10}function JS(t=Je()){return dc(t)||QS(t)||XS(t)||YS(t)||/windows phone/i.test(t)||KS(t)}function JN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ZS(t,e=[]){let n;switch(t){case"Browser":n=lv(Je());break;case"Worker":n=`${lv(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class ex{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ql(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function fc(t){return ae(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=v2(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function tx(t,e){return ia(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nx(t,e){return hc(t,"POST","/v1/accounts:signInWithPassword",cc(t,e))}/**
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
 */async function rx(t,e){return hc(t,"POST","/v1/accounts:signInWithEmailLink",cc(t,e))}async function ix(t,e){return hc(t,"POST","/v1/accounts:signInWithEmailLink",cc(t,e))}/**
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
 */class Po extends sm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rx(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ix(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $i(t,e){return hc(t,"POST","/v1/accounts:signInWithIdp",cc(t,e))}/**
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
 */const sx="http://localhost";class Xr extends sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=em(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:sx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
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
 */function ox(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ax(t){const e=Fs(js(t)).link,n=e?Fs(js(e)).deep_link_id:null,r=Fs(js(t)).deep_link_id;return(r?Fs(js(r)).link:null)||r||n||e||t}class om{constructor(e){var n,r,i,s,o,a;const l=Fs(js(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=ox((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ax(e);try{return new om(n)}catch{return null}}}/**
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
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=om.parseLink(n);return $(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends sa{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class zn extends sa{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Hn extends sa{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=cv(r);return new Ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cv(r);return new Ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gl extends Vt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function eE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function lx(t,e,n=!1){const r=await xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ji._forOperation(t,"link",r)}/**
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
 */async function ux(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await xo(t,eE(i,s,e,t),n);$(o.idToken,i,"internal-error");const a=rm(o.idToken);$(a,i,"internal-error");const{sub:l}=a;return $(t.uid===l,i,"user-mismatch"),Ji._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ft(i,"user-mismatch"),o}}/**
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
 */async function tE(t,e,n=!1){const r="signIn",i=await eE(t,r,e),s=await Ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cx(t,e){return tE(fc(t),e)}function hx(t,e,n){return cx(ae(t),ps.credential(e,n))}function dx(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function fx(t){return ae(t).signOut()}const Kl="__sak";/**
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
 */class nE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function px(){const t=Je();return im(t)||dc(t)}const mx=1e3,gx=10;class rE extends nE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=px()&&JN(),this.fallbackToPolling=JS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rE.type="LOCAL";const yx=rE;/**
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
 */class iE extends nE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iE.type="SESSION";const sE=iE;/**
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
 */function vx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await vx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
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
 */function lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function Sx(t){un().location.href=t}/**
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
 */function oE(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function Ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _x(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ix(){return oE()?self:null}/**
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
 */const aE="firebaseLocalStorageDb",Tx=1,Ql="firebaseLocalStorage",lE="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mc(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function kx(){const t=indexedDB.deleteDatabase(aE);return new oa(t).toPromise()}function df(){const t=indexedDB.open(aE,Tx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:lE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await kx(),e(await df()))})})}async function hv(t,e,n){const r=mc(t,!0).put({[lE]:e,value:n});return new oa(r).toPromise()}async function Cx(t,e){const n=mc(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function dv(t,e){const n=mc(t,!0).delete(e);return new oa(n).toPromise()}const Ax=800,Rx=3;class uE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(Ix()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ex(),!this.activeServiceWorker)return;this.sender=new wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await df();return await hv(e,Kl,"1"),await dv(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mc(i,!1).getAll();return new oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uE.type="LOCAL";const Nx=uE;/**
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
 */function xx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xx().appendChild(r)})}function Px(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ra(3e4,6e4);/**
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
 */function cE(t,e){return e?vn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class um extends sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ox(t){return tE(t.auth,new um(t),t.bypassAuthState)}function Dx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ux(n,new um(t),t.bypassAuthState)}async function Mx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),lx(n,new um(t),t.bypassAuthState)}/**
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
 */class hE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ox;case"linkViaPopup":case"linkViaRedirect":return Mx;case"reauthViaPopup":case"reauthViaRedirect":return Dx;default:Ft(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lx=new ra(2e3,1e4);async function $x(t,e,n){const r=fc(t);bN(t,e,am);const i=cE(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}class Or extends hE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Lx.get())};e()}}Or.currentPopupAction=null;/**
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
 */const Ux="pendingRedirect",fl=new Map;class Fx extends hE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jx(t,e){const n=zx(e),r=Bx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Vx(t,e){fl.set(t._key(),e)}function Bx(t){return vn(t._redirectPersistence)}function zx(t){return dl(Ux,t.config.apiKey,t.name)}async function Hx(t,e,n=!1){const r=fc(t),i=cE(r,e),o=await new Fx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wx=10*60*1e3;class qx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wx&&this.cachedEventUids.clear(),this.cachedEventUids.has(fv(e))}saveEventToCache(e){this.cachedEventUids.add(fv(e)),this.lastProcessedEventTime=Date.now()}}function fv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dE(t);default:return!1}}/**
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
 */async function Kx(t,e={}){return ia(t,"GET","/v1/projects",e)}/**
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
 */const Qx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yx=/^https?/;async function Xx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kx(t);for(const n of e)try{if(Jx(n))return}catch{}Ft(t,"unauthorized-domain")}function Jx(t){const e=hf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yx.test(n))return!1;if(Qx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Zx=new ra(3e4,6e4);function pv(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eb(t){return new Promise((e,n)=>{var r,i,s;function o(){pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pv(),n(ln(t,"network-request-failed"))},timeout:Zx.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=un().gapi)===null||s===void 0)&&s.load)o();else{const a=Px("iframefcb");return un()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},bx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pl=null,e})}let pl=null;function tb(t){return pl=pl||eb(t),pl}/**
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
 */const nb=new ra(5e3,15e3),rb="__/auth/iframe",ib="emulator/auth/iframe",sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nm(e,ib):`https://${t.config.authDomain}/${rb}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=ob.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${na(r).slice(1)}`}async function lb(t){const e=await tb(t),n=un().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:ab(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=un().setTimeout(()=>{s(o)},nb.get());function l(){un().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cb=500,hb=600,db="_blank",fb="http://localhost";class mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pb(t,e,n,r=cb,i=hb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ub),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=GS(u)?db:n),qS(u)&&(e=e||fb,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(YN(u)&&a!=="_self")return mb(e||"",a),new mv(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new mv(h)}function mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gb="__/auth/handler",yb="emulator/auth/handler";function gv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof sa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vb(t)}?${na(a).slice(1)}`}function vb({config:t}){return t.emulator?nm(t,yb):`https://${t.authDomain}/${gb}`}/**
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
 */const Ph="webStorageSupport";class wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sE,this._completeRedirectFn=Hx,this._overrideRedirectResult=Vx}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gv(e,n,r,hf(),i);return pb(e,o,lm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Sx(gv(e,n,r,hf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lb(e),r=new qx(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ph,{type:Ph},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ph];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JS()||im()||dc()}}const Sb=wb;var yv="@firebase/auth",vv="0.20.7";/**
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
 */class Eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _b(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ib(t){Zt(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZS(t)},c=new ex(a,l,u);return ON(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new Ut("auth-internal",e=>{const n=fc(e.getProvider("auth").getImmediate());return(r=>new Eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(yv,vv,_b(t)),mt(yv,vv,"esm2017")}/**
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
 */function fE(t=uc()){const e=wr(t,"auth");return e.isInitialized()?e.getImmediate():PN(t,{popupRedirectResolver:Sb,persistence:[Nx,yx,sE]})}Ib("Browser");var Tb="firebase",kb="9.10.0";/**
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
 */mt(Tb,kb,"app");const pE="@firebase/installations",cm="0.5.12";/**
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
 */const mE=1e4,gE=`w:${cm}`,yE="FIS_v2",Cb="https://firebaseinstallations.googleapis.com/v1",Ab=60*60*1e3,Rb="installations",Nb="Installations";/**
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
 */const xb={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jr=new li(Rb,Nb,xb);function vE(t){return t instanceof Vt&&t.code.includes("request-failed")}/**
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
 */function wE({projectId:t}){return`${Cb}/projects/${t}/installations`}function SE(t){return{token:t.token,requestStatus:2,expiresIn:Pb(t.expiresIn),creationTime:Date.now()}}async function EE(t,e){const r=(await e.json()).error;return Jr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _E({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bb(t,{refreshToken:e}){const n=_E(t);return n.append("Authorization",Ob(e)),n}async function IE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Pb(t){return Number(t.replace("s","000"))}function Ob(t){return`${yE} ${t}`}/**
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
 */async function Db({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=wE(t),i=_E(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:yE,appId:t.appId,sdkVersion:gE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await IE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:SE(u.authToken)}}else throw await EE("Create Installation",l)}/**
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
 */function TE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Mb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Lb=/^[cdef][\w-]{21}$/,ff="";function $b(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ub(t);return Lb.test(n)?n:ff}catch{return ff}}function Ub(t){return Mb(t).substr(0,22)}/**
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
 */function gc(t){return`${t.appName}!${t.appId}`}/**
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
 */const kE=new Map;function CE(t,e){const n=gc(t);AE(n,e),Fb(n,e)}function AE(t,e){const n=kE.get(t);if(!!n)for(const r of n)r(e)}function Fb(t,e){const n=jb();n&&n.postMessage({key:t,fid:e}),Vb()}let Dr=null;function jb(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=t=>{AE(t.data.key,t.data.fid)}),Dr}function Vb(){kE.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const Bb="firebase-installations-database",zb=1,Zr="firebase-installations-store";let Oh=null;function hm(){return Oh||(Oh=DS(Bb,zb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zr)}}})),Oh}async function Yl(t,e){const n=gc(t),i=(await hm()).transaction(Zr,"readwrite"),s=i.objectStore(Zr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&CE(t,e.fid),e}async function RE(t){const e=gc(t),r=(await hm()).transaction(Zr,"readwrite");await r.objectStore(Zr).delete(e),await r.done}async function yc(t,e){const n=gc(t),i=(await hm()).transaction(Zr,"readwrite"),s=i.objectStore(Zr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&CE(t,a.fid),a}/**
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
 */async function dm(t){let e;const n=await yc(t.appConfig,r=>{const i=Hb(r),s=Wb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ff?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Hb(t){const e=t||{fid:$b(),registrationStatus:0};return NE(e)}function Wb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qb(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Gb(t)}:{installationEntry:e}}async function qb(t,e){try{const n=await Db(t,e);return Yl(t.appConfig,n)}catch(n){throw vE(n)&&n.customData.serverCode===409?await RE(t.appConfig):await Yl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Gb(t){let e=await wv(t.appConfig);for(;e.registrationStatus===1;)await TE(100),e=await wv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dm(t);return r||n}return e}function wv(t){return yc(t,e=>{if(!e)throw Jr.create("installation-not-found");return NE(e)})}function NE(t){return Kb(t)?{fid:t.fid,registrationStatus:0}:t}function Kb(t){return t.registrationStatus===1&&t.registrationTime+mE<Date.now()}/**
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
 */async function Qb({appConfig:t,heartbeatServiceProvider:e},n){const r=Yb(t,n),i=bb(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:gE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await IE(()=>fetch(r,a));if(l.ok){const u=await l.json();return SE(u)}else throw await EE("Generate Auth Token",l)}function Yb(t,{fid:e}){return`${wE(t)}/${e}/authTokens:generate`}/**
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
 */async function fm(t,e=!1){let n;const r=await yc(t.appConfig,s=>{if(!xE(s))throw Jr.create("not-registered");const o=s.authToken;if(!e&&Zb(o))return s;if(o.requestStatus===1)return n=Xb(t,e),s;{if(!navigator.onLine)throw Jr.create("app-offline");const a=tP(s);return n=Jb(t,a),a}});return n?await n:r.authToken}async function Xb(t,e){let n=await Sv(t.appConfig);for(;n.authToken.requestStatus===1;)await TE(100),n=await Sv(t.appConfig);const r=n.authToken;return r.requestStatus===0?fm(t,e):r}function Sv(t){return yc(t,e=>{if(!xE(e))throw Jr.create("not-registered");const n=e.authToken;return nP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Jb(t,e){try{const n=await Qb(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Yl(t.appConfig,r),n}catch(n){if(vE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await RE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yl(t.appConfig,r)}throw n}}function xE(t){return t!==void 0&&t.registrationStatus===2}function Zb(t){return t.requestStatus===2&&!eP(t)}function eP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ab}function tP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nP(t){return t.requestStatus===1&&t.requestTime+mE<Date.now()}/**
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
 */async function rP(t){const e=t,{installationEntry:n,registrationPromise:r}=await dm(e);return r?r.catch(console.error):fm(e).catch(console.error),n.fid}/**
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
 */async function iP(t,e=!1){const n=t;return await sP(n),(await fm(n,e)).token}async function sP(t){const{registrationPromise:e}=await dm(t);e&&await e}/**
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
 */function oP(t){if(!t||!t.options)throw Dh("App Configuration");if(!t.name)throw Dh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Dh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dh(t){return Jr.create("missing-app-config-values",{valueName:t})}/**
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
 */const bE="installations",aP="installations-internal",lP=t=>{const e=t.getProvider("app").getImmediate(),n=oP(e),r=wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uP=t=>{const e=t.getProvider("app").getImmediate(),n=wr(e,bE).getImmediate();return{getId:()=>rP(n),getToken:i=>iP(n,i)}};function cP(){Zt(new Ut(bE,lP,"PUBLIC")),Zt(new Ut(aP,uP,"PRIVATE"))}cP();mt(pE,cm);mt(pE,cm,"esm2017");/**
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
 */const Xl="analytics",hP="firebase_id",dP="origin",fP=60*1e3,pP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",PE="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new lc("@firebase/analytics");/**
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
 */function OE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mP(t,e){const n=document.createElement("script");n.src=`${PE}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function gP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function yP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await OE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Et.error(a)}t("config",i,s)}async function vP(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await OE(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Et.error(s)}}function wP(t,e,n,r){async function i(s,o,a){try{s==="event"?await vP(t,e,n,o,a):s==="config"?await yP(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){Et.error(l)}}return i}function SP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=wP(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function EP(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(PE))return e;return null}/**
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
 */const _P={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Dt=new li("analytics","Analytics",_P);/**
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
 */const IP=30,TP=1e3;class kP{constructor(e={},n=TP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const DE=new kP;function CP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function AP(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:CP(r)},s=pP.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function RP(t,e=DE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bP;return setTimeout(async()=>{a.abort()},n!==void 0?n:fP),ME({appId:r,apiKey:i,measurementId:s},o,a,e)}async function ME(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=DE){var s,o;const{appId:a,measurementId:l}=t;try{await NP(r,e)}catch(u){if(l)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await AP(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!xP(c)){if(i.deleteThrottleMetadata(a),l)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Yy(n,i.intervalMillis,IP):Yy(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,f),Et.debug(`Calling attemptFetch again in ${h} millis`),ME(t,f,r,i)}}function NP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xP(t){if(!(t instanceof Vt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function OP(){var t;if(xS())try{await bS()}catch(e){return Et.warn(Dt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Et.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function DP(t,e,n,r,i,s,o){var a;const l=RP(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Et.error(p)),e.push(l);const u=OP().then(p=>{if(p)return r.getId()}),[c,h]=await Promise.all([l,u]);EP()||mP(s,c.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[dP]="firebase",f.update=!0,h!=null&&(f[hP]=h),i("config",c.measurementId,f),c.measurementId}/**
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
 */class MP{constructor(e){this.app=e}_delete(){return delete ro[this.app.options.appId],Promise.resolve()}}let ro={},Ev=[];const _v={};let Mh="dataLayer",LP="gtag",Iv,LE,Tv=!1;function $P(){const t=[];if(NS()&&t.push("This is a browser extension environment."),f2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});Et.warn(n.message)}}function UP(t,e,n){$P();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(ro[r]!=null)throw Dt.create("already-exists",{id:r});if(!Tv){gP(Mh);const{wrappedGtag:s,gtagCore:o}=SP(ro,Ev,_v,Mh,LP);LE=s,Iv=o,Tv=!0}return ro[r]=DP(t,Ev,_v,e,Iv,Mh,n),new MP(t)}function FP(t=uc()){t=ae(t);const e=wr(t,Xl);return e.isInitialized()?e.getImmediate():jP(t)}function jP(t,e={}){const n=wr(t,Xl);if(n.isInitialized()){const i=n.getImmediate();if(Ro(e,n.getOptions()))return i;throw Dt.create("already-initialized")}return n.initialize({options:e})}function VP(t,e,n,r){t=ae(t),PP(LE,ro[t.app.options.appId],e,n,r).catch(i=>Et.error(i))}const kv="@firebase/analytics",Cv="0.8.0";function BP(){Zt(new Ut(Xl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return UP(r,i,n)},"PUBLIC")),Zt(new Ut("analytics-internal",t,"PRIVATE")),mt(kv,Cv),mt(kv,Cv,"esm2017");function t(e){try{const n=e.getProvider(Xl).getImmediate();return{logEvent:(r,i,s)=>VP(n,r,i,s)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}BP();var zP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,pm=pm||{},U=zP||self;function Jl(){}function vc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function aa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HP(t){return Object.prototype.hasOwnProperty.call(t,Lh)&&t[Lh]||(t[Lh]=++WP)}var Lh="closure_uid_"+(1e9*Math.random()>>>0),WP=0;function qP(t,e,n){return t.call.apply(t.bind,arguments)}function GP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=qP:Qe=GP,Qe.apply(null,arguments)}function Ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Sr(){this.s=this.s,this.o=this.o}var KP=0;Sr.prototype.s=!1;Sr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),KP!=0)&&HP(this)};Sr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Av(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var QP=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",Jl,e),U.removeEventListener("test",Jl,e)}catch{}return t}();function Zl(t){return/^[\s\xa0]*$/.test(t)}var Rv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $h(t,e){return t<e?-1:t>e?1:0}function wc(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function rn(t){return wc().indexOf(t)!=-1}function gm(t){return gm[" "](t),t}gm[" "]=Jl;function YP(t){var e=ZP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XP=rn("Opera"),Zi=rn("Trident")||rn("MSIE"),UE=rn("Edge"),pf=UE||Zi,FE=rn("Gecko")&&!(wc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),JP=wc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function jE(){var t=U.document;return t?t.documentMode:void 0}var eu;e:{var Uh="",Fh=function(){var t=wc();if(FE)return/rv:([^\);]+)(\)|;)/.exec(t);if(UE)return/Edge\/([\d\.]+)/.exec(t);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JP)return/WebKit\/(\S+)/.exec(t);if(XP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fh&&(Uh=Fh?Fh[1]:""),Zi){var jh=jE();if(jh!=null&&jh>parseFloat(Uh)){eu=String(jh);break e}}eu=Uh}var ZP={};function eO(){return YP(function(){let t=0;const e=Rv(String(eu)).split("."),n=Rv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=$h(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||$h(i[2].length==0,s[2].length==0)||$h(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var mf;if(U.document&&Zi){var Nv=jE();mf=Nv||parseInt(eu,10)||void 0}else mf=void 0;var tO=mf;function Oo(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(FE){e:{try{gm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oo.X.h.call(this)}}ze(Oo,Ye);var nO={2:"touch",3:"pen",4:"mouse"};Oo.prototype.h=function(){Oo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var la="closure_listenable_"+(1e6*Math.random()|0),rO=0;function iO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++rO,this.ba=this.ea=!1}function Sc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ym(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VE(t){const e={};for(const n in t)e[n]=t[n];return e}const xv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function BE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<xv.length;s++)n=xv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=yf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new iO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function gf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$E(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var vm="closure_lm_"+(1e6*Math.random()|0),Vh={};function zE(t,e,n,r,i){if(r&&r.once)return WE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zE(t,e[s],n,r,i);return null}return n=Em(n),t&&t[la]?t.N(e,n,aa(r)?!!r.capture:!!r,i):HE(t,e,n,!1,r,i)}function HE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=aa(i)?!!i.capture:!!i,a=Sm(t);if(a||(t[vm]=a=new Ec(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=sO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)QP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(GE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sO(){function t(n){return e.call(t.src,t.listener,n)}const e=oO;return t}function WE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)WE(t,e[s],n,r,i);return null}return n=Em(n),t&&t[la]?t.O(e,n,aa(r)?!!r.capture:!!r,i):HE(t,e,n,!0,r,i)}function qE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qE(t,e[s],n,r,i);else r=aa(r)?!!r.capture:!!r,n=Em(n),t&&t[la]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=yf(s,n,r,i),-1<n&&(Sc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yf(e,n,r,i)),(n=-1<t?e[t]:null)&&wm(n))}function wm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[la])gf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(GE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sm(e))?(gf(n,t),n.h==0&&(n.src=null,e[vm]=null)):Sc(t)}}}function GE(t){return t in Vh?Vh[t]:Vh[t]="on"+t}function oO(t,e){if(t.ba)t=!0;else{e=new Oo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&wm(t),t=n.call(r,e)}return t}function Sm(t){return t=t[vm],t instanceof Ec?t:null}var Bh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Em(t){return typeof t=="function"?t:(t[Bh]||(t[Bh]=function(e){return t.handleEvent(e)}),t[Bh])}function Oe(){Sr.call(this),this.i=new Ec(this),this.P=this,this.I=null}ze(Oe,Sr);Oe.prototype[la]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){qE(this,t,e,n,r)};function je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),BE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Wa(o,r,!0,e)&&i}if(o=e.g=t,i=Wa(o,r,!0,e)&&i,i=Wa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Wa(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sc(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Wa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&gf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _m=U.JSON.stringify;function aO(){var t=YE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lO{constructor(){this.h=this.g=null}add(e,n){const r=KE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var KE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uO,t=>t.reset());class uO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cO(t){U.setTimeout(()=>{throw t},0)}function QE(t,e){vf||hO(),wf||(vf(),wf=!0),YE.add(t,e)}var vf;function hO(){var t=U.Promise.resolve(void 0);vf=function(){t.then(dO)}}var wf=!1,YE=new lO;function dO(){for(var t;t=aO();){try{t.h.call(t.g)}catch(n){cO(n)}var e=KE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wf=!1}function _c(t,e){Oe.call(this),this.h=t||1,this.g=e||U,this.j=Qe(this.kb,this),this.l=Date.now()}ze(_c,Oe);D=_c.prototype;D.ca=!1;D.R=null;D.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),je(this,"tick"),this.ca&&(Im(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Im(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){_c.X.M.call(this),Im(this),delete this.g};function Tm(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function XE(t){t.g=Tm(()=>{t.g=null,t.i&&(t.i=!1,XE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fO extends Sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:XE(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Do(t){Sr.call(this),this.h=t,this.g={}}ze(Do,Sr);var bv=[];function JE(t,e,n,r){Array.isArray(n)||(n&&(bv[0]=n.toString()),n=bv);for(var i=0;i<n.length;i++){var s=zE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ZE(t){ym(t.g,function(e,n){this.g.hasOwnProperty(n)&&wm(e)},t),t.g={}}Do.prototype.M=function(){Do.X.M.call(this),ZE(this)};Do.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ic(){this.g=!0}Ic.prototype.Aa=function(){this.g=!1};function pO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function mO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ai(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yO(t,n)+(r?" "+r:"")})}function gO(t,e){t.info(function(){return"TIMEOUT: "+e})}Ic.prototype.info=function(){};function yO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _m(n)}catch{return e}}var ui={},Pv=null;function Tc(){return Pv=Pv||new Oe}ui.Oa="serverreachability";function e_(t){Ye.call(this,ui.Oa,t)}ze(e_,Ye);function Mo(t){const e=Tc();je(e,new e_(e))}ui.STAT_EVENT="statevent";function t_(t,e){Ye.call(this,ui.STAT_EVENT,t),this.stat=e}ze(t_,Ye);function tt(t){const e=Tc();je(e,new t_(e,t))}ui.Pa="timingevent";function n_(t,e){Ye.call(this,ui.Pa,t),this.size=e}ze(n_,Ye);function ua(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var kc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},r_={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function km(){}km.prototype.h=null;function Ov(t){return t.h||(t.h=t.i())}function i_(){}var ca={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Cm(){Ye.call(this,"d")}ze(Cm,Ye);function Am(){Ye.call(this,"c")}ze(Am,Ye);var Sf;function Cc(){}ze(Cc,km);Cc.prototype.g=function(){return new XMLHttpRequest};Cc.prototype.i=function(){return{}};Sf=new Cc;function ha(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Do(this),this.O=vO,t=pf?125:void 0,this.T=new _c(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new s_}function s_(){this.i=null,this.g="",this.h=!1}var vO=45e3,Ef={},tu={};D=ha.prototype;D.setTimeout=function(t){this.O=t};function _f(t,e,n){t.K=1,t.v=Rc(Rn(e)),t.s=n,t.P=!0,o_(t,null)}function o_(t,e){t.F=Date.now(),da(t),t.A=Rn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),p_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new s_,t.g=M_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new fO(Qe(t.Ka,t,t.g),t.N)),JE(t.S,t.g,"readystatechange",t.hb),e=t.H?VE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Mo(),pO(t.j,t.u,t.A,t.m,t.U,t.s)}D.hb=function(t){t=t.target;const e=this.L;e&&wn(t)==3?e.l():this.Ka(t)};D.Ka=function(t){try{if(t==this.g)e:{const c=wn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||pf||this.g&&(this.h.h||this.g.fa()||$v(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Mo(3):Mo(2)),Ac(this);var n=this.g.aa();this.Y=n;t:if(a_(this)){var r=$v(this.g);t="";var i=r.length,s=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),io(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,mO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zl(a)){var u=a;break t}}u=null}if(n=u)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,If(this,n);else{this.i=!1,this.o=3,tt(12),Mr(this),io(this);break e}}this.P?(l_(this,c,o),pf&&this.i&&c==3&&(JE(this.S,this.T,"tick",this.gb),this.T.start())):(Ai(this.j,this.m,o,null),If(this,o)),c==4&&Mr(this),this.i&&!this.I&&(c==4?b_(this.l,this):(this.i=!1,da(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Mr(this),io(this)}}}catch{}finally{}};function a_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function l_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=wO(t,n),i==tu){e==4&&(t.o=4,tt(14),r=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ef){t.o=4,tt(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ai(t.j,t.m,i,null),If(t,i);a_(t)&&i!=tu&&i!=Ef&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dm(e),e.K=!0,tt(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),Mr(t),io(t))}D.gb=function(){if(this.g){var t=wn(this.g),e=this.g.fa();this.C<e.length&&(Ac(this),l_(this,t,e),this.i&&t!=4&&da(this))}};function wO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?tu:(n=Number(e.substring(n,r)),isNaN(n)?Ef:(r+=1,r+n>e.length?tu:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Mr(this)};function da(t){t.V=Date.now()+t.O,u_(t,t.O)}function u_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ua(Qe(t.fb,t),e)}function Ac(t){t.B&&(U.clearTimeout(t.B),t.B=null)}D.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(gO(this.j,this.A),this.K!=2&&(Mo(),tt(17)),Mr(this),this.o=2,io(this)):u_(this,this.V-t)};function io(t){t.l.G==0||t.I||b_(t.l,t)}function Mr(t){Ac(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Im(t.T),ZE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function If(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tf(n.h,t))){if(!t.J&&Tf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)iu(n),bc(n);else break e;Om(n),tt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ua(Qe(n.bb,n),6e3));if(1>=y_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Lr(n,11)}else if((t.J||n.g==t)&&iu(n),!Zl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rm(s,s.h),s.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ce(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=D_(r,r.H?r.ka:null,r.V),o.J){v_(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Ac(a),da(a)),r.g=o}else N_(r);0<n.i.length&&Pc(n)}else u[0]!="stop"&&u[0]!="close"||Lr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lr(n,7):Pm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Mo(4)}catch{}}function SO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function EO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function c_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=EO(t),r=SO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var h_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _O(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vr){this.h=e!==void 0?e:t.h,nu(this,t.j),this.s=t.s,this.g=t.g,ru(this,t.m),this.l=t.l,e=t.i;var n=new Lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dv(this,n),this.o=t.o}else t&&(n=String(t).match(h_))?(this.h=!!e,nu(this,n[1]||"",!0),this.s=Vs(n[2]||""),this.g=Vs(n[3]||"",!0),ru(this,n[4]),this.l=Vs(n[5]||"",!0),Dv(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.h=!!e,this.i=new Lo(null,this.h))}Vr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bs(e,Mv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Bs(e,Mv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Bs(n,n.charAt(0)=="/"?kO:TO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bs(n,AO)),t.join("")};function Rn(t){return new Vr(t)}function nu(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dv(t,e,n){e instanceof Lo?(t.i=e,RO(t.i,t.h)):(n||(e=Bs(e,CO)),t.i=new Lo(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function Rc(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mv=/[#\/\?@]/g,TO=/[#\?:]/g,kO=/[#\?]/g,CO=/[#\?@]/g,AO=/#/g;function Lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Er(t){t.g||(t.g=new Map,t.h=0,t.i&&_O(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Lo.prototype;D.add=function(t,e){Er(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function d_(t,e){Er(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function f_(t,e){return Er(t),e=ms(t,e),t.g.has(e)}D.forEach=function(t,e){Er(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Er(this);let e=[];if(typeof t=="string")f_(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Er(this),this.i=null,t=ms(this,t),f_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function p_(t,e,n){d_(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),mm(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RO(t,e){e&&!t.j&&(Er(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(d_(this,r),p_(this,i,n))},t)),t.j=e}var NO=class{constructor(t,e){this.h=t,this.g=e}};function m_(t){this.l=t||xO,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ga&&U.g.Ga()&&U.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xO=10;function g_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function y_(t){return t.h?1:t.g?t.g.size:0}function Tf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rm(t,e){t.g?t.g.add(e):t.h=e}function v_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}m_.prototype.cancel=function(){if(this.i=w_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function w_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mm(t.i)}function Nm(){}Nm.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Nm.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function bO(){this.g=new Nm}function PO(t,e,n){const r=n||"";try{c_(t,function(i,s){let o=i;aa(i)&&(o=_m(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function OO(t,e){const n=new Ic;if(U.Image){const r=new Image;r.onload=Ha(qa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ha(qa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ha(qa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ha(qa,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function fa(t){this.l=t.$b||null,this.j=t.ib||!1}ze(fa,km);fa.prototype.g=function(){return new Nc(this.l,this.j)};fa.prototype.i=function(t){return function(){return t}}({});function Nc(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Nc,Oe);var xm=0;D=Nc.prototype;D.open=function(t,e){if(this.readyState!=xm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$o(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pa(this)),this.readyState=xm};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;S_(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function S_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pa(this):$o(this),this.readyState==3&&S_(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,pa(this))};D.Ta=function(t){this.g&&(this.response=t,pa(this))};D.ga=function(){this.g&&pa(this)};function pa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$o(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $o(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DO=U.JSON.parse;function _e(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=E_,this.K=this.L=!1}ze(_e,Oe);var E_="",MO=/^https?$/i,LO=["POST","PUT"];D=_e.prototype;D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Sf.g(),this.C=this.u?Ov(this.u):Ov(Sf),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Lv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=$E(LO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{T_(this),0<this.B&&((this.K=$O(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=Tm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lv(this,s)}};function $O(t){return Zi&&eO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof pm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Lv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,__(t),xc(t)}function __(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),xc(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),_e.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?I_(this):this.eb())};D.eb=function(){I_(this)};function I_(t){if(t.h&&typeof pm<"u"&&(!t.C[1]||wn(t)!=4||t.aa()!=2)){if(t.v&&wn(t)==4)Tm(t.Ha,0,t);else if(je(t,"readystatechange"),wn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(h_)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!MO.test(i?i.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<wn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",__(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){T_(t);const n=t.g,r=t.C[0]?Jl:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function T_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DO(e)}};function $v(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case E_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function k_(t){let e="";return ym(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=k_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function C_(t){this.Ca=0,this.i=[],this.j=new Ic,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Os("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Os("baseRetryDelayMs",5e3,t),this.ab=Os("retryDelaySeedMs",1e4,t),this.Za=Os("forwardChannelMaxRetries",2,t),this.ta=Os("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new m_(t&&t.concurrentRequestLimit),this.Fa=new bO,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=C_.prototype;D.ma=8;D.G=1;function Pm(t){if(A_(t),t.G==3){var e=t.U++,n=Rn(t.F);ce(n,"SID",t.I),ce(n,"RID",e),ce(n,"TYPE","terminate"),ma(t,n),e=new ha(t,t.j,e,void 0),e.K=2,e.v=Rc(Rn(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=M_(e.l,null),e.g.da(e.v)),e.F=Date.now(),da(e)}O_(t)}function bc(t){t.g&&(Dm(t),t.g.cancel(),t.g=null)}function A_(t){bc(t),t.u&&(U.clearTimeout(t.u),t.u=null),iu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Pc(t){g_(t.h)||t.m||(t.m=!0,QE(t.Ja,t),t.C=0)}function UO(t,e){return y_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=ua(Qe(t.Ja,t,e),P_(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ha(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=VE(s),BE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=R_(this,i,e),n=Rn(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),ma(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(k_(s)))+"&"+e:this.o&&bm(n,this.o,s)),Rm(this.h,i),this.Xa&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",e),ce(n,"SID","null"),i.Z=!0,_f(i,n,null)):_f(i,n,e),this.G=2}}else this.G==3&&(t?Uv(this,t):this.i.length==0||g_(this.h)||Uv(this))};function Uv(t,e){var n;e?n=e.m:n=t.U++;const r=Rn(t.F);ce(r,"SID",t.I),ce(r,"RID",n),ce(r,"AID",t.T),ma(t,r),t.o&&t.s&&bm(r,t.o,t.s),n=new ha(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=R_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rm(t.h,n),_f(n,r,e)}function ma(t,e){t.ia&&ym(t.ia,function(n,r){ce(e,r,n)}),t.l&&c_({},function(n,r){ce(e,r,n)})}function R_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Qe(t.l.Qa,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{PO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function N_(t){t.g||t.u||(t.Z=1,QE(t.Ia,t),t.A=0)}function Om(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ua(Qe(t.Ia,t),P_(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,x_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ua(Qe(this.cb,this),t)}};D.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,tt(10),bc(this),x_(this))};function Dm(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function x_(t){t.g=new ha(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Rn(t.sa);ce(e,"RID","rpc"),ce(e,"SID",t.I),ce(e,"CI",t.L?"0":"1"),ce(e,"AID",t.T),ce(e,"TYPE","xmlhttp"),ma(t,e),t.o&&t.s&&bm(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Rc(Rn(e)),n.s=null,n.P=!0,o_(n,t)}D.bb=function(){this.v!=null&&(this.v=null,bc(this),Om(this),tt(19))};function iu(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function b_(t,e){var n=null;if(t.g==e){iu(t),Dm(t),t.g=null;var r=2}else if(Tf(t.h,e))n=e.D,v_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Tc(),je(r,new n_(r,n)),Pc(t)}else N_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&UO(t,e)||r==2&&Om(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Lr(t,5);break;case 4:Lr(t,10);break;case 3:Lr(t,6);break;default:Lr(t,2)}}}function P_(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Lr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Qe(t.jb,t);n||(n=new Vr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||nu(n,"https"),Rc(n)),OO(n.toString(),r)}else tt(2);t.G=0,t.l&&t.l.va(e),O_(t),A_(t)}D.jb=function(t){t?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function O_(t){if(t.G=0,t.la=[],t.l){const e=w_(t.h);(e.length!=0||t.i.length!=0)&&(Av(t.la,e),Av(t.la,t.i),t.h.i.length=0,mm(t.i),t.i.length=0),t.l.ua()}}function D_(t,e,n){var r=n instanceof Vr?Rn(n):new Vr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ru(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vr(null,void 0);r&&nu(s,r),e&&(s.g=e),i&&ru(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ce(r,n,e),ce(r,"VER",t.ma),ma(t,r),r}function M_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new _e(new fa({ib:!0})):new _e(t.ra),e.L=t.H,e}function L_(){}D=L_.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Qa=function(){};function su(){if(Zi&&!(10<=Number(tO)))throw Error("Environmental error: no available transport.")}su.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Oe.call(this),this.g=new C_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Zl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}ze(It,Oe);It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=D_(t,null,t.V),Pc(t)};It.prototype.close=function(){Pm(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_m(t),t=n);e.i.push(new NO(e.$a++,t)),e.G==3&&Pc(e)};It.prototype.M=function(){this.g.l=null,delete this.j,Pm(this.g),delete this.g,It.X.M.call(this)};function $_(t){Cm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze($_,Cm);function U_(){Am.call(this),this.status=1}ze(U_,Am);function gs(t){this.g=t}ze(gs,L_);gs.prototype.xa=function(){je(this.g,"a")};gs.prototype.wa=function(t){je(this.g,new $_(t))};gs.prototype.va=function(t){je(this.g,new U_)};gs.prototype.ua=function(){je(this.g,"b")};su.prototype.createWebChannel=su.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;kc.NO_ERROR=0;kc.TIMEOUT=8;kc.HTTP_ERROR=6;r_.COMPLETE="complete";i_.EventType=ca;ca.OPEN="a";ca.CLOSE="b";ca.ERROR="c";ca.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.Na;_e.prototype.getLastErrorCode=_e.prototype.Ea;_e.prototype.getStatus=_e.prototype.aa;_e.prototype.getResponseJson=_e.prototype.Ra;_e.prototype.getResponseText=_e.prototype.fa;_e.prototype.send=_e.prototype.da;var FO=function(){return new su},jO=function(){return Tc()},zh=kc,VO=r_,BO=ui,Fv={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zO=fa,Ga=i_,HO=_e;const jv="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let ys="9.10.0";/**
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
 */const ei=new lc("@firebase/firestore");function Vv(){return ei.logLevel}function M(t,...e){if(ei.logLevel<=Y.DEBUG){const n=e.map(Mm);ei.debug(`Firestore (${ys}): ${t}`,...n)}}function Nn(t,...e){if(ei.logLevel<=Y.ERROR){const n=e.map(Mm);ei.error(`Firestore (${ys}): ${t}`,...n)}}function Bv(t,...e){if(ei.logLevel<=Y.WARN){const n=e.map(Mm);ei.warn(`Firestore (${ys}): ${t}`,...n)}}function Mm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function re(t,e){t||F()}function j(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class WO{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class GO{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new WO(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new lt(e)}}class KO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class QO{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new KO(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XO{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new YO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class F_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Ce(0,0))}static max(){return new z(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Uo{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const ZO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Uo{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return ZO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}function eD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new dr(i,L.empty(),e)}function tD(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(z.min(),L.empty(),-1)}static max(){return new dr(z.max(),L.empty(),-1)}}function nD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ga(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==rD)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function zv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Lm.at=-1;class Re{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Le.RED,this.left=i!=null?i:Le.EMPTY,this.right=s!=null?s:Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Le(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(e){return new Hv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class Hv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ae(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const sD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(re(!!t),typeof t=="string"){let e=0;const n=sD.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function $m(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function V_(t){const e=t.mapValue.fields.__previous_value__;return $m(e)?V_(e):e}function Fo(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class oD{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}function Oc(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function aD(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:lD(t)?9007199254740991:10:F()}function hn(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=fr(r.timestampValue),o=fr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ts(r.bytesValue).isEqual(ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?ou(s)===ou(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(zv(s)!==zv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!hn(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function Vo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Wv(t.timestampValue,e.timestampValue);case 4:return Wv(Fo(t),Fo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ts(i),a=ts(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(Se(i.latitude),Se(s.latitude));return o!==0?o:X(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ns(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Qa.mapValue&&s===Qa.mapValue)return 0;if(i===Qa.mapValue)return 1;if(s===Qa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const f=ns(o[a[c]],l[u[c]]);if(f!==0)return f}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function Wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=fr(t),r=fr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Ui(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=fr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=kf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${kf(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function au(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cf(t){return!!t&&"integerValue"in t}function Um(t){return!!t&&"arrayValue"in t}function qv(t){return!!t&&"nullValue"in t}function Gv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=so(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(so(this.value))}}function B_(t){const e=[];return ci(t.fields,(n,r)=>{const i=new Ke([n]);if(ml(r)){const s=B_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
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
 */class $e{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new $e(e,0,z.min(),z.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new $e(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new $e(e,2,n,z.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,z.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Kv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uD(t,e,n,r,i,s,o)}function Fm(t){const e=j(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ht=n}return e.ht}function cD(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ui(r.value)}`;var r}).join(", ")}]`),Oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ui(n)).join(",")),`Target(${e})`}function jm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!vD(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!hn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yv(t.startAt,e.startAt)&&Yv(t.endAt,e.endAt)}function Af(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new hD(e,n,r):n==="array-contains"?new pD(e,r):n==="in"?new mD(e,r):n==="not-in"?new gD(e,r):n==="array-contains-any"?new yD(e,r):new nt(e,n,r)}static lt(e,n,r){return n==="in"?new dD(e,r):new fD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ns(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.ft(ns(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hD extends nt{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.ft(n)}}class dD extends nt{constructor(e,n){super(e,"in",n),this.keys=z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fD extends nt{constructor(e,n){super(e,"not-in",n),this.keys=z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class pD extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Um(n)&&Vo(n.arrayValue,this.value)}}class mD extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class gD extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class yD extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Um(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}class rs{constructor(e,n){this.position=e,this.inclusive=n}}class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function vD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Qv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function wD(t,e,n,r,i,s,o,a){return new vs(t,e,n,r,i,s,o,a)}function Vm(t){return new vs(t)}function Xv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function H_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function W_(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Bm(t){return t.collectionGroup!==null}function is(t){const e=j(t);if(e._t===null){e._t=[];const n=W_(e),r=H_(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new oo(n)),e._t.push(new oo(Ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new oo(Ke.keyField(),s))}}}return e._t}function xn(t){const e=j(t);if(!e.wt)if(e.limitType==="F")e.wt=Kv(e.path,e.collectionGroup,is(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of is(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new rs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new rs(e.startAt.position,e.startAt.inclusive):null;e.wt=Kv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function lu(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return jm(xn(t),xn(e))&&t.limitType===e.limitType}function q_(t){return`${Fm(xn(t))}|lt:${t.limitType}`}function Rf(t){return`Query(target=${cD(xn(t))}; limitType=${t.limitType})`}function zm(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Qv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,is(n),r)||n.endAt&&!function(i,s,o){const a=Qv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,is(n),r))}(t,e)}function SD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function G_(t){return(e,n)=>{let r=!1;for(const i of is(t)){const s=ED(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ED(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ns(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */function K_(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function Q_(t){return{integerValue:""+t}}function _D(t,e){return aD(e)?Q_(e):K_(t,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function ID(t,e,n){return t instanceof uu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Bo?X_(t,e):t instanceof zo?J_(t,e):function(r,i){const s=Y_(r,i),o=Jv(s)+Jv(r.yt);return Cf(s)&&Cf(r.yt)?Q_(o):K_(r.It,o)}(t,e)}function TD(t,e,n){return t instanceof Bo?X_(t,e):t instanceof zo?J_(t,e):n}function Y_(t,e){return t instanceof cu?Cf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class uu extends Mc{}class Bo extends Mc{constructor(e){super(),this.elements=e}}function X_(t,e){const n=Z_(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Mc{constructor(e){super(),this.elements=e}}function J_(t,e){let n=Z_(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class cu extends Mc{constructor(e,n){super(),this.It=e,this.yt=n}}function Jv(t){return Se(t.integerValue||t.doubleValue)}function Z_(t){return Um(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Bo&&r instanceof Bo||n instanceof zo&&r instanceof zo?es(n.elements,r.elements,hn):n instanceof cu&&r instanceof cu?hn(n.yt,r.yt):n instanceof uu&&r instanceof uu}(t.transform,e.transform)}class CD{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lc{}function eI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hm(t.key,Yt.none()):new va(t.key,t.data,Yt.none());{const n=t.data,r=ct.empty();let i=new Ae(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(t.key,r,new Mt(i.toArray()),Yt.none())}}function AD(t,e,n){t instanceof va?function(r,i,s){const o=r.value.clone(),a=e0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(r,i,s){if(!gl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=e0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(tI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof va?function(i,s,o,a){if(!gl(i.precondition,s))return o;const l=i.value.clone(),u=t0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,s,o,a){if(!gl(i.precondition,s))return o;const l=t0(i.fieldTransforms,a,s),u=s.data;return u.setAll(tI(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return gl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function RD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Y_(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Zv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(i,s)=>kD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Lc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Lc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function e0(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,TD(o,a,n[i]))}return r}function t0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ID(s,o,e))}return r}class Hm extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ND extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xD{constructor(e){this.count=e}}/**
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
 */var we,G;function bD(t){switch(t){default:return F();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function nI(t){if(t===void 0)return Nn("GRPC error has no .code"),_.UNKNOWN;switch(t){case we.OK:return _.OK;case we.CANCELLED:return _.CANCELLED;case we.UNKNOWN:return _.UNKNOWN;case we.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case we.INTERNAL:return _.INTERNAL;case we.UNAVAILABLE:return _.UNAVAILABLE;case we.UNAUTHENTICATED:return _.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case we.NOT_FOUND:return _.NOT_FOUND;case we.ALREADY_EXISTS:return _.ALREADY_EXISTS;case we.PERMISSION_DENIED:return _.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case we.ABORTED:return _.ABORTED;case we.OUT_OF_RANGE:return _.OUT_OF_RANGE;case we.UNIMPLEMENTED:return _.UNIMPLEMENTED;case we.DATA_LOSS:return _.DATA_LOSS;default:return F()}}(G=we||(we={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return j_(this.inner)}size(){return this.innerSize}}/**
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
 */const PD=new Re(L.comparator);function bn(){return PD}const rI=new Re(L.comparator);function zs(...t){let e=rI;for(const n of t)e=e.insert(n.key,n);return e}function iI(t){let e=rI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return lo()}function sI(){return lo()}function lo(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const OD=new Re(L.comparator),DD=new Ae(L.comparator);function W(...t){let e=DD;for(const n of t)e=e.add(n);return e}const MD=new Ae(X);function oI(){return MD}/**
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
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n)),new $c(z.min(),r,oI(),bn(),W())}}class wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new wa(Be.EMPTY_BYTE_STRING,n,W(),W(),W())}}/**
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
 */class yl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class aI{constructor(e,n){this.targetId=e,this.At=n}}class lI{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class n0{constructor(){this.Rt=0,this.bt=i0(),this.Pt=Be.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=W(),n=W(),r=W();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new wa(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=i0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class LD{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=bn(),this.qt=r0(),this.Kt=new Ae(X)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Af(s))if(r===0){const o=new L(s.path);this.jt(n,o,$e.newNoDocument(o,z.min()))}else re(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Af(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,$e.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=W();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.Kt,this.Ut,r);return this.Ut=bn(),this.qt=r0(),this.Kt=new Ae(X),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new n0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ae(X),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new n0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function r0(){return new Re(L.comparator)}function i0(){return new Re(L.comparator)}/**
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
 */const $D=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),UD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class FD{constructor(e,n){this.databaseId=e,this.gt=n}}function hu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uI(t,e){return t.gt?e.toBase64():e.toUint8Array()}function jD(t,e){return hu(t,e.toTimestamp())}function En(t){return re(!!t),z.fromTimestamp(function(e){const n=fr(e);return new Ce(n.seconds,n.nanos)}(t))}function Wm(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cI(t){const e=te.fromString(t);return re(fI(e)),e}function Nf(t,e){return Wm(t.databaseId,e.path)}function Hh(t,e){const n=cI(e);if(n.get(1)!==t.databaseId.projectId)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(hI(n))}function xf(t,e){return Wm(t.databaseId,e)}function VD(t){const e=cI(t);return e.length===4?te.emptyPath():hI(e)}function bf(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function s0(t,e,n){return{name:Nf(t,e),fields:n.value.mapValue.fields}}function BD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(re(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:nI(l.code);return new A(u,l.message||"")}(o);n=new lI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hh(t,r.document.name),s=En(r.document.updateTime),o=new ct({mapValue:{fields:r.document.fields}}),a=$e.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new yl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hh(t,r.document),s=r.readTime?En(r.readTime):z.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hh(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new xD(i),o=r.targetId;n=new aI(o,s)}}return n}function zD(t,e){let n;if(e instanceof va)n={update:s0(t,e.key,e.value)};else if(e instanceof Hm)n={delete:Nf(t,e.key)};else if(e instanceof _r)n={update:s0(t,e.key,e.data),updateMask:ZD(e.fieldMask)};else{if(!(e instanceof ND))return F();n={verify:Nf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof uu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Bo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof cu)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function HD(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?En(r.updateTime):En(i);return s.isEqual(z.min())&&(s=En(i)),new CD(s,r.transformResults||[])}(n,e))):[]}function WD(t,e){return{documents:[xf(t,e.path)]}}function qD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=xf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Gv(h.value))return{unaryFilter:{field:fi(h.field),op:"IS_NAN"}};if(qv(h.value))return{unaryFilter:{field:fi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Gv(h.value))return{unaryFilter:{field:fi(h.field),op:"IS_NOT_NAN"}};if(qv(h.value))return{unaryFilter:{field:fi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(h.field),op:YD(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:fi(c.field),direction:QD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Oc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GD(t){let e=VD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=dI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oo(Ri(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Oc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new rs(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new rs(f,h)}(n.endAt)),wD(e,i,o,s,a,"F",l,u)}function KD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function dI(t){return t?t.unaryFilter!==void 0?[JD(t)]:t.fieldFilter!==void 0?[XD(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>dI(e)).reduce((e,n)=>e.concat(n)):F():[]}function QD(t){return $D[t]}function YD(t){return UD[t]}function fi(t){return{fieldPath:t.canonicalString()}}function Ri(t){return Ke.fromServerFormat(t.fieldPath)}function XD(t){return nt.create(Ri(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function JD(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ri(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ri(t.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ri(t.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ri(t.unaryFilter.field);return nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function ZD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class eM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=eI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>Zv(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>Zv(n,r))}}class qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=OD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qm(e,n,r,i)}}/**
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
 */class tM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Br{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class nM{constructor(e){this.re=e}}function rM(t){const e=GD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lu(e,e.limit,"L"):e}/**
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
 */class iM{constructor(){this.Ye=new sM}addToCollectionParentIndex(e,n){return this.Ye.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(dr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class sM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(te.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ss(0)}static vn(){return new ss(-1)}}/**
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
 */class oM{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class aM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ao(r.mutation,i,Mt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bn();const o=lo(),a=lo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof _r)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ao(c.mutation,u,c.mutation.getFieldMask(),Ce.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new aM(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=lo();let i=new Re((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=sI();c.forEach(f=>{if(!s.has(f)){const p=eI(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Bm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve($r());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.getBaseDocument(e,c,h).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:iI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zs();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new vs(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,$e.newInvalidDocument(u)))});let o=zs();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ao(u.mutation,l,Mt.empty(),Ce.now()),zm(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve($e.newInvalidDocument(n))}}/**
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
 */class uM{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:En(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:rM(r.bundledQuery),readTime:En(r.readTime)}}(n)),T.resolve()}}/**
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
 */class cM{constructor(){this.overlays=new Re(L.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$r(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$r(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tM(n,r));let s=this.es.get(n);s===void 0&&(s=W(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Gm{constructor(){this.ns=new Ae(xe.ss),this.rs=new Ae(xe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new xe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new xe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new te([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new te([])),r=new xe(n,e),i=new xe(n,e+1);let s=W();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||X(e._s,n._s)}static os(e,n){return X(e._s,n._s)||L.comparator(e.key,n.key)}}/**
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
 */class hM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ae(xe.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(X);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),T.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new xe(new L(s),0);let a=new Ae(X);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return T.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new xe(n,0),i=this.gs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dM{constructor(e){this.Es=e,this.docs=new Re(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),T.resolve(r)}getAllFromCollection(e,n,r){let i=bn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nD(tD(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}As(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fM(this)}getSize(e){return T.resolve(this.size)}}class fM extends oM{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class pM{constructor(e){this.persistence=e,this.Rs=new ws(n=>Fm(n),jm),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Gm,this.targetCount=0,this.vs=ss.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class mM{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Lm(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new pM(this),this.indexManager=new iM,this.remoteDocumentCache=function(r){return new dM(r)}(r=>this.referenceDelegate.xs(r)),this.It=new nM(n),this.Ns=new uM(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new hM(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new gM(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return T.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class gM extends iD{constructor(e){super(),this.currentSequenceNumber=e}}class Km{constructor(e){this.persistence=e,this.Fs=new Gm,this.$s=null}static Bs(e){return new Km(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,r=>{const i=L.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qm(e,n.fromCache,r,i)}}/**
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
 */class yM{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(Xv(n))return T.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=lu(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,lu(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return Xv(n)||i.isEqual(z.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Vv()<=Y.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rf(n)),this.Bi(e,o,n,eD(i,-1)))})}Fi(e,n){let r=new Ae(G_(e));return n.forEach((i,s)=>{zm(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Vv()<=Y.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Rf(n)),this.Ni.getDocumentsMatchingQuery(e,n,dr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class vM{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Re(X),this.qi=new ws(s=>Fm(s),jm),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lM(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function wM(t,e,n,r){return new vM(t,e,n,r)}async function pI(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function SM(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=T.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(g=>{const w=l.docVersions.get(p);re(w!==null),g.version.compareTo(w)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mI(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function EM(t,e){const n=j(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Be.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let l=bn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(_M(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function _M(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function IM(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TM(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Br(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Pf(t,e,n){const r=j(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ya(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function o0(t,e,n){const r=j(t);let i=z.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),h=c.qi.get(u);return h!==void 0?T.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:W())).next(a=>(kM(r,SD(e),a),{documents:a,Hi:s})))}function kM(t,e,n){let r=z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class a0{constructor(){this.activeTargetIds=oI()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CM{constructor(){this.Lr=new a0,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new a0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AM{qr(e){}shutdown(){}}/**
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
 */class l0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const RM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class NM{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class xM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);M("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(M("RestConnection","Received: ",l),l),l=>{throw Bv("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=RM[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new HO;a.listenOnce(VO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case zh.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),s(u);break;case zh.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new A(_.DEADLINE_EXCEEDED,"Request time out"));break;case zh.HTTP_ERROR:const c=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(g)>=0?g:_.UNKNOWN}(h.status);o(new A(f,h.message))}else o(new A(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(_.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=FO(),o=jO(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new zO({})),this.ho(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");M("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new NM({Hr:g=>{h?M("Connection","Not sending because WebChannel is closed:",g):(c||(M("Connection","Opening WebChannel transport."),u.open(),c=!0),M("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,w,E)=>{g.listen(w,y=>{try{E(y)}catch(m){setTimeout(()=>{throw m},0)}})};return p(u,Ga.EventType.OPEN,()=>{h||M("Connection","WebChannel transport opened.")}),p(u,Ga.EventType.CLOSE,()=>{h||(h=!0,M("Connection","WebChannel transport closed"),f.io())}),p(u,Ga.EventType.ERROR,g=>{h||(h=!0,Bv("Connection","WebChannel transport errored:",g),f.io(new A(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,Ga.EventType.MESSAGE,g=>{var w;if(!h){const E=g.data[0];re(!!E);const y=E,m=y.error||((w=y[0])===null||w===void 0?void 0:w.error);if(m){M("Connection","WebChannel received error:",m);const v=m.status;let S=function(R){const x=we[R];if(x!==void 0)return nI(x)}(v),k=m.message;S===void 0&&(S=_.INTERNAL,k="Unknown error status: "+v+" with message "+m.message),h=!0,f.io(new A(S,k)),u.close()}else M("Connection","WebChannel received:",E),f.ro(E)}}),p(o,BO.STAT_EVENT,g=>{g.stat===Fv.PROXY?M("Connection","Detected buffering proxy"):g.stat===Fv.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Wh(){return typeof document<"u"?document:null}/**
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
 */function Uc(t){return new FD(t,!0)}class gI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class yI{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new gI(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new A(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bM extends yI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=BD(this.It,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?En(s.readTime):z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=bf(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Af(a)?{documents:WD(i,a)}:{query:qD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=uI(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=hu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=KD(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=bf(this.It),n.removeTarget=e,this.Bo(n)}}class PM extends yI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=HD(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.Zo(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=bf(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zD(this.It,r))};this.Bo(n)}}/**
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
 */class OM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(_.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class DM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Nn(n),this.ou=!1):M("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class MM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{hi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l._u.add(4),await Sa(l),l.gu.set("Unknown"),l._u.delete(4),await Fc(l)}(this))})}),this.gu=new DM(r,i)}}async function Fc(t){if(hi(t))for(const e of t.wu)await e(!0)}async function Sa(t){for(const e of t.wu)await e(!1)}function vI(t,e){const n=j(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jm(n)?Xm(n):Ss(n).ko()&&Ym(n,e))}function wI(t,e){const n=j(t),r=Ss(n);n.du.delete(e),r.ko()&&SI(n,e),n.du.size===0&&(r.ko()?r.Fo():hi(n)&&n.gu.set("Unknown"))}function Ym(t,e){t.yu.Ot(e.targetId),Ss(t).zo(e)}function SI(t,e){t.yu.Ot(e),Ss(t).Ho(e)}function Xm(t){t.yu=new LD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ss(t).start(),t.gu.uu()}function Jm(t){return hi(t)&&!Ss(t).No()&&t.du.size>0}function hi(t){return j(t)._u.size===0}function EI(t){t.yu=void 0}async function LM(t){t.du.forEach((e,n)=>{Ym(t,e)})}async function $M(t,e){EI(t),Jm(t)?(t.gu.hu(e),Xm(t)):t.gu.set("Unknown")}async function UM(t,e,n){if(t.gu.set("Online"),e instanceof lI&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await du(t,r)}else if(e instanceof yl?t.yu.Gt(e):e instanceof aI?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(z.min()))try{const r=await mI(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),SI(i,a);const u=new Br(l.target,a,1,l.sequenceNumber);Ym(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await du(t,r)}}async function du(t,e,n){if(!ya(e))throw e;t._u.add(1),await Sa(t),t.gu.set("Offline"),n||(n=()=>mI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Fc(t)})}function _I(t,e){return e().catch(n=>du(t,n,e))}async function jc(t){const e=j(t),n=pr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;FM(e);)try{const i=await IM(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,jM(e,i)}catch(i){await du(e,i)}II(e)&&TI(e)}function FM(t){return hi(t)&&t.fu.length<10}function jM(t,e){t.fu.push(e);const n=pr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function II(t){return hi(t)&&!pr(t).No()&&t.fu.length>0}function TI(t){pr(t).start()}async function VM(t){pr(t).eu()}async function BM(t){const e=pr(t);for(const n of t.fu)e.Xo(n.mutations)}async function zM(t,e,n){const r=t.fu.shift(),i=qm.from(r,e,n);await _I(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jc(t)}async function HM(t,e){e&&pr(t).Yo&&await async function(n,r){if(i=r.code,bD(i)&&i!==_.ABORTED){const s=n.fu.shift();pr(n).Oo(),await _I(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await jc(n)}var i}(t,e),II(t)&&TI(t)}async function u0(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=hi(n);n._u.add(3),await Sa(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Fc(n)}async function WM(t,e){const n=j(t);e?(n._u.delete(2),await Fc(n)):e||(n._u.add(2),await Sa(n),n.gu.set("Unknown"))}function Ss(t){return t.pu||(t.pu=function(e,n,r){const i=j(e);return i.su(),new bM(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:LM.bind(null,t),Zr:$M.bind(null,t),Wo:UM.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),Jm(t)?Xm(t):t.gu.set("Unknown")):(await t.pu.stop(),EI(t))})),t.pu}function pr(t){return t.Iu||(t.Iu=function(e,n,r){const i=j(e);return i.su(),new PM(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:VM.bind(null,t),Zr:HM.bind(null,t),tu:BM.bind(null,t),Zo:zM.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await jc(t)):(await t.Iu.stop(),t.fu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Zm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eg(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),ya(t))return new A(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=zs(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class c0{constructor(){this.Tu=new Re(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new os(e,n,Fi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qM{constructor(){this.Au=void 0,this.listeners=[]}}class GM{constructor(){this.queries=new ws(e=>q_(e),Dc),this.onlineState="Unknown",this.Ru=new Set}}async function kI(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qM),i)try{s.Au=await n.onListen(r)}catch(o){const a=eg(o,`Initialization of query '${Rf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&tg(n)}async function CI(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KM(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&tg(n)}function QM(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function tg(t){t.Ru.forEach(e=>{e.next()})}class AI{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
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
 */class RI{constructor(e){this.key=e}}class NI{constructor(e){this.key=e}}class YM{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=W(),this.mutatedKeys=W(),this.Ku=G_(e),this.Gu=new Fi(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new c0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=zm(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?g!==w&&(r.track({type:3,doc:p}),E=!0):this.zu(f,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Ku(p,l)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return p(h)-p(f)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new os(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new c0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=W(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new NI(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new RI(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=W();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return os.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class XM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JM{constructor(e){this.key=e,this.ec=!1}}class ZM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ws(a=>q_(a),Dc),this.ic=new Map,this.rc=new Set,this.oc=new Re(L.comparator),this.uc=new Map,this.cc=new Gm,this.ac={},this.hc=new Map,this.lc=ss.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function eL(t,e){const n=cL(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await TM(n.localStore,xn(e));n.isPrimaryClient&&vI(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await tL(n,e,r,a==="current")}return i}async function tL(t,e,n,r){t.dc=(c,h,f)=>async function(p,g,w,E){let y=g.view.ju(w);y.$i&&(y=await o0(p.localStore,g.query,!1).then(({documents:S})=>g.view.ju(S,y)));const m=E&&E.targetChanges.get(g.targetId),v=g.view.applyChanges(y,p.isPrimaryClient,m);return d0(p,g.targetId,v.Yu),v.snapshot}(t,c,h,f);const i=await o0(t.localStore,e,!0),s=new YM(e,i.Hi),o=s.ju(i.documents),a=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);d0(t,n,l.Yu);const u=new XM(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function nL(t,e){const n=j(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Dc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Pf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wI(n.remoteStore,r.targetId),Of(n,r.targetId)}).catch(ga)):(Of(n,r.targetId),await Pf(n.localStore,r.targetId,!0))}async function rL(t,e,n){const r=hL(t);try{const i=await function(s,o){const a=j(s),l=Ce.now(),u=o.reduce((f,p)=>f.add(p.key),W());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=bn(),g=W();return a.Gi.getEntries(f,u).next(w=>{p=w,p.forEach((E,y)=>{y.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(w=>{c=w;const E=[];for(const y of o){const m=RD(y,c.get(y.key).overlayedDocument);m!=null&&E.push(new _r(y.key,m,B_(m.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(f,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:iI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Re(X)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ea(r,i.changes),await jc(r.remoteStore)}catch(i){const s=eg(i,"Failed to persist write");n.reject(s)}}async function xI(t,e){const n=j(t);try{const r=await EM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?re(o.ec):i.removedDocuments.size>0&&(re(o.ec),o.ec=!1))}),await Ea(n,r,e)}catch(r){await ga(r)}}function h0(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&tg(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iL(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Re(L.comparator);o=o.insert(s,$e.newNoDocument(s,z.min()));const a=W().add(s),l=new $c(z.min(),new Map,new Ae(X),o,a);await xI(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),ng(r)}else await Pf(r.localStore,e,!1).then(()=>Of(r,e,n)).catch(ga)}async function sL(t,e){const n=j(t),r=e.batch.batchId;try{const i=await SM(n.localStore,e);PI(n,r,null),bI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ea(n,i)}catch(i){await ga(i)}}async function oL(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);PI(r,e,n),bI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ea(r,i)}catch(i){await ga(i)}}function bI(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function PI(t,e,n){const r=j(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||OI(t,r)})}function OI(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(wI(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ng(t))}function d0(t,e,n){for(const r of n)r instanceof RI?(t.cc.addReference(r.key,e),aL(t,r)):r instanceof NI?(M("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||OI(t,r.key)):F()}function aL(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.rc.add(r),ng(t))}function ng(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(te.fromString(e)),r=t.lc.next();t.uc.set(r,new JM(n)),t.oc=t.oc.insert(n,r),vI(t.remoteStore,new Br(xn(Vm(n.path)),r,2,Lm.at))}}async function Ea(t,e,n){const r=j(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Qm.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>T.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!ya(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ui.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function lL(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await pI(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new A(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ea(n,r.ji)}}function uL(t,e){const n=j(t),r=n.uc.get(e);if(r&&r.ec)return W().add(r.key);{let i=W();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function cL(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iL.bind(null,e),e.nc.Wo=KM.bind(null,e.eventManager),e.nc._c=QM.bind(null,e.eventManager),e}function hL(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oL.bind(null,e),e}class dL{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return wM(this.persistence,new yM,e.initialUser,this.It)}gc(e){return new mM(Km.Bs,this.It)}mc(e){return new CM}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>h0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lL.bind(null,this.syncEngine),await WM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GM}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xM(i));var i;return function(s,o,a,l){return new OM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>h0(this.syncEngine,a,0),o=l0.C()?new l0:new AM,new MM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ZM(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);M("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Sa(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class DI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class pL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=F_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=eg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mL(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function gL(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yL(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>u0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>u0(e.remoteStore,s)),t.onlineComponents=e}async function yL(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await mL(t,new dL)),t.offlineComponents}async function MI(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await gL(t,new fL)),t.onlineComponents}function vL(t){return MI(t).then(e=>e.syncEngine)}async function Df(t){const e=await MI(t),n=e.eventManager;return n.onListen=eL.bind(null,e.syncEngine),n.onUnlisten=nL.bind(null,e.syncEngine),n}function wL(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new DI({next:h=>{s.enqueueAndForget(()=>CI(i,c)),h.fromCache&&a.source==="server"?l.reject(new A(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new AI(o,u,{includeMetadataChanges:!0,Nu:!0});return kI(i,c)}(await Df(t),t.asyncQueue,e,n,r)),r.promise}const f0=new Map;/**
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
 */function LI(t,e,n){if(!n)throw new A(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SL(t,e,n,r){if(e===!0&&r===!0)throw new A(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p0(t){if(!L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m0(t){if(L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new A(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function EL(t,e){if(e<=0)throw new A(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class g0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,SL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class rg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qO;switch(n.type){case"gapi":const r=n.client;return new QO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=f0.get(e);n&&(M("ComponentProvider","Removing Datastore"),f0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class lr extends Ir{constructor(e,n,r){super(e,n,Vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new L(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Yn(t,e,...n){if(t=ae(t),LI("collection","path",e),t instanceof rg){const r=te.fromString(e,...n);return m0(r),new lr(t,null,r)}{if(!(t instanceof gt||t instanceof lr))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return m0(r),new lr(t.firestore,null,r)}}function Ho(t,e,...n){if(t=ae(t),arguments.length===1&&(e=F_.R()),LI("doc","path",e),t instanceof rg){const r=te.fromString(e,...n);return p0(r),new gt(t,null,new L(r))}{if(!(t instanceof gt||t instanceof lr))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return p0(r),new gt(t.firestore,t instanceof lr?t.converter:null,new L(r))}}/**
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
 */class _L{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new gI(this,"async_queue_retry"),this.jc=()=>{const n=Wh();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Wh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new ar;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!ya(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Zm.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&F()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function y0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ni extends rg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _L,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$I(this),this._firestoreClient.terminate()}}function IL(t,e){const n=typeof t=="object"?t:uc(),r=typeof t=="string"?t:e||"(default)";return wr(n,"firestore").getImmediate({identifier:r})}function ig(t){return t._firestoreClient||$I(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $I(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new oD(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pL(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class _a{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function UI(){return new _a("__name__")}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(Be.fromBase64String(e))}catch(n){throw new A(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sg{constructor(e){this._methodName=e}}/**
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
 */class og{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const TL=/^__.*__$/;class kL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class FI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class ag{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new ag(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return fu(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(jI(this.na)&&TL.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class CL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Uc(e)}fa(e,n,r,i=!1){return new ag({na:e,methodName:n,la:r,path:Ke.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Bc(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new CL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AL(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);lg("Data must be an object, but it was:",o,r);const a=BI(r,o);let l,u;if(s.merge)l=new Mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Mf(e,h,n);if(!o.contains(f))throw new A(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);HI(c,f)||c.push(f)}l=new Mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new kL(new ct(a),l,u)}class zc extends sg{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zc}}function RL(t,e,n,r){const i=t.fa(1,e,n);lg("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ci(r,(l,u)=>{const c=ug(e,l,n);u=ae(u);const h=i.ua(c);if(u instanceof zc)s.push(c);else{const f=Ia(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Mt(s);return new FI(o,a,i.fieldTransforms)}function NL(t,e,n,r,i,s){const o=t.fa(1,e,n),a=[Mf(e,r,n)],l=[i];if(s.length%2!=0)throw new A(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Mf(e,s[f])),l.push(s[f+1]);const u=[],c=ct.empty();for(let f=a.length-1;f>=0;--f)if(!HI(u,a[f])){const p=a[f];let g=l[f];g=ae(g);const w=o.ua(p);if(g instanceof zc)u.push(p);else{const E=Ia(g,w);E!=null&&(u.push(p),c.set(p,E))}}const h=new Mt(u);return new FI(c,h,o.fieldTransforms)}function VI(t,e,n,r=!1){return Ia(n,t.fa(r?4:3,e))}function Ia(t,e){if(zI(t=ae(t)))return lg("Unsupported field value:",e,t),BI(t,e);if(t instanceof sg)return function(n,r){if(!jI(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ia(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _D(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ce.fromDate(n);return{timestampValue:hu(r.It,i)}}if(n instanceof Ce){const i=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hu(r.It,i)}}if(n instanceof og)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:uI(r.It,n._byteString)};if(n instanceof gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Vc(n)}`)}(t,e)}function BI(t,e){const n={};return j_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=Ia(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof og||t instanceof as||t instanceof gt||t instanceof sg)}function lg(t,e,n){if(!zI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vc(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function Mf(t,e,n){if((e=ae(e))instanceof _a)return e._internalPath;if(typeof e=="string")return ug(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const xL=new RegExp("[~\\*/\\[\\]]");function ug(t,e,n){if(e.search(xL)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _a(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(_.INVALID_ARGUMENT,a+t+l)}function HI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends cg{data(){return super.data()}}function hg(t,e){return typeof e=="string"?ug(t,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
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
 */class Hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class WI extends cg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vl extends WI{data(e={}){return super.data(e)}}class qI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Hs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new vl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new vl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:PL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function GI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dg{}function ji(t,...e){for(const n of e)t=n._apply(t);return t}class OL extends dg{constructor(e,n,r){super(),this.wa=e,this.ma=n,this.ga=r,this.type="where"}_apply(e){const n=Bc(e.firestore),r=function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){w0(c,u);const p=[];for(const g of c)p.push(v0(a,i,g));h={arrayValue:{values:p}}}else h=v0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||w0(c,u),h=VI(o,s,c,u==="in"||u==="not-in");const f=nt.create(l,u,h);return function(p,g){if(g.dt()){const E=W_(p);if(E!==null&&!E.isEqual(g.field))throw new A(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${g.field.toString()}'`);const y=H_(p);y!==null&&$L(p,g.field,y)}const w=function(E,y){for(const m of E.filters)if(y.indexOf(m.op)>=0)return m.op;return null}(p,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(w!==null)throw w===g.op?new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${w.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new Ir(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new vs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function KI(t,e,n){const r=e,i=hg("where",t);return new OL(i,r,n)}class DL extends dg{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new Ir(e.firestore,e.converter,lu(e._query,this.pa,this.Ia))}}function QI(t){return EL("limit",t),new DL("limit",t,"F")}class ML extends dg{constructor(e,n,r){super(),this.type=e,this.Ta=n,this.Ea=r}_apply(e){const n=LL(e,this.type,this.Ta,this.Ea);return new Ir(e.firestore,e.converter,function(r,i){return new vs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function YI(...t){return new ML("startAt",t,!0)}function LL(t,e,n,r){if(n[0]=ae(n[0]),n[0]instanceof cg)return function(i,s,o,a,l){if(!a)throw new A(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of is(i))if(c.field.isKeyField())u.push(au(s,a.key));else{const h=a.data.field(c.field);if($m(h))throw new A(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=c.field.canonicalString();throw new A(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(h)}return new rs(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Bc(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new A(_.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new A(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof g}`);if(!Bm(s)&&g.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${g}' contains a slash.`);const w=s.path.child(te.fromString(g));if(!L.isDocumentKey(w))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const E=new L(w);f.push(au(o,E))}else{const w=VI(a,l,g);f.push(w)}}return new rs(f,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function v0(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new A(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bm(e)&&n.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!L.isDocumentKey(r))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return au(t,new L(r))}if(n instanceof gt)return au(t,n._key);throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function w0(t,e){if(!Array.isArray(t)||t.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new A(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function $L(t,e,n){if(!n.isEqual(e))throw new A(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class UL{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return ci(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new og(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=V_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=fr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);re(fI(r));const i=new jo(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function FL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fg extends UL{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function pu(t){t=_n(t,Ir);const e=_n(t.firestore,ni),n=ig(e),r=new fg(e);return GI(t._query),wL(n,t._query).then(i=>new qI(e,r,t,i))}function XI(t,e,n,...r){t=_n(t,gt);const i=_n(t.firestore,ni),s=Bc(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof _a?NL(s,"updateDoc",t._key,e,n,r):RL(s,"updateDoc",t._key,e),pg(i,[o.toMutation(t._key,Yt.exists(!0))])}function JI(t){return pg(_n(t.firestore,ni),[new Hm(t._key,Yt.none())])}function ZI(t,e){const n=_n(t.firestore,ni),r=Ho(t),i=FL(t.converter,e);return pg(n,[AL(Bc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function eT(t,...e){var n,r,i;t=ae(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||y0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(y0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof gt)u=_n(t.firestore,ni),c=Vm(t._key.path),l={next:h=>{e[o]&&e[o](jL(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_n(t,Ir);u=_n(h.firestore,ni),c=h._query;const f=new fg(u);l={next:p=>{e[o]&&e[o](new qI(u,f,h,p))},error:e[o+1],complete:e[o+2]},GI(t._query)}return function(h,f,p,g){const w=new DI(g),E=new AI(f,w,p);return h.asyncQueue.enqueueAndForget(async()=>kI(await Df(h),E)),()=>{w.Rc(),h.asyncQueue.enqueueAndForget(async()=>CI(await Df(h),E))}}(ig(u),c,a,l)}function pg(t,e){return function(n,r){const i=new ar;return n.asyncQueue.enqueueAndForget(async()=>rL(await vL(n),r,i)),i.promise}(ig(t),e)}function jL(t,e,n){const r=n.docs.get(e._key),i=new fg(t);return new WI(t,i,e._key,r,new Hs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ys=n})(fs),Zt(new Ut("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ni(new GO(n.getProvider("auth-internal")),new XO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),mt(jv,"3.5.0",t),mt(jv,"3.5.0","esm2017")})();/**
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
 */const tT="firebasestorage.googleapis.com",nT="storageBucket",VL=2*60*1e3,BL=10*60*1e3;/**
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
 */class ve extends Vt{constructor(e,n){super(qh(e),`Firebase Storage: ${n} (${qh(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}_codeEquals(e){return qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function qh(t){return"storage/"+t}function mg(){const t="An unknown error occurred, please check the error payload for server response.";return new ve("unknown",t)}function zL(t){return new ve("object-not-found","Object '"+t+"' does not exist.")}function HL(t){return new ve("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve("unauthenticated",t)}function qL(){return new ve("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function GL(t){return new ve("unauthorized","User does not have permission to access '"+t+"'.")}function KL(){return new ve("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function QL(){return new ve("canceled","User canceled the upload/download.")}function YL(t){return new ve("invalid-url","Invalid URL '"+t+"'.")}function XL(t){return new ve("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function JL(){return new ve("no-default-bucket","No default bucket found. Did you set the '"+nT+"' property when initializing the app?")}function ZL(){return new ve("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function e$(){return new ve("no-download-url","The given file does not have any download URLs.")}function Lf(t){return new ve("invalid-argument",t)}function rT(){return new ve("app-deleted","The Firebase app was deleted.")}function t$(t){return new ve("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function uo(t,e){return new ve("invalid-format","String does not match format '"+t+"': "+e)}function Ds(t){throw new ve("internal-error","Internal error: "+t)}/**
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
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw XL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},w=n===tT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",y=new RegExp(`^https?://${w}/${i}/${E}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:g,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<v.length;S++){const k=v[S],R=k.regex.exec(e);if(R){const x=R[k.indices.bucket];let P=R[k.indices.path];P||(P=""),r=new wt(x,P),k.postModify(r);break}}if(r==null)throw YL(e);return r}}class n${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function r$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function f(){s&&clearTimeout(s)}function p(E,...y){if(u){f();return}if(E){f(),c.call(null,E,...y);return}if(l()||o){f(),c.call(null,E,...y);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let g=!1;function w(E){g||(g=!0,f(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function i$(t){t(!1)}/**
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
 */function s$(t){return t!==void 0}function o$(t){return typeof t=="object"&&!Array.isArray(t)}function gg(t){return typeof t=="string"||t instanceof String}function S0(t){return yg()&&t instanceof Blob}function yg(){return typeof Blob<"u"}function E0(t,e,n,r){if(r<e)throw Lf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Lf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Hc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function iT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zr||(zr={}));/**
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
 */class a${constructor(e,n,r,i,s,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ya(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===zr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===zr.ABORT;r(!1,new Ya(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ya(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());s$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=mg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?rT():QL();o(l)}else{const l=KL();o(l)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=r$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&i$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Ya{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function l$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function u$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function c$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function h$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function d$(t,e,n,r,i,s){const o=iT(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return c$(l,e),l$(l,n),u$(l,s),h$(l,r),new a$(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function f$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function p$(...t){const e=f$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(yg())return new Blob(t);throw new ve("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function m$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function g$(t){return atob(t)}/**
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
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gh{constructor(e,n){this.data=e,this.contentType=n||null}}function y$(t,e){switch(t){case sn.RAW:return new Gh(sT(e));case sn.BASE64:case sn.BASE64URL:return new Gh(oT(t,e));case sn.DATA_URL:return new Gh(w$(e),S$(e))}throw mg()}function sT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function v$(t){let e;try{e=decodeURIComponent(t)}catch{throw uo(sn.DATA_URL,"Malformed data URL.")}return sT(e)}function oT(t,e){switch(t){case sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw uo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw uo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=g$(e)}catch{throw uo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class aT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw uo(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=E$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function w$(t){const e=new aT(t);return e.base64?oT(sn.BASE64,e.rest):v$(e.rest)}function S$(t){return new aT(t).contentType}function E$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Wn{constructor(e,n){let r=0,i="";S0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(S0(this.data_)){const r=this.data_,i=m$(r,e,n);return i===null?null:new Wn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wn(r,!0)}}static getBlob(...e){if(yg()){const n=e.map(r=>r instanceof Wn?r.data_:r);return new Wn(p$.apply(null,n))}else{const n=e.map(o=>gg(o)?y$(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function lT(t){let e;try{e=JSON.parse(t)}catch{return null}return o$(e)?e:null}/**
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
 */function _$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function I$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function uT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function T$(t,e){return e}class Ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||T$}}let Xa=null;function k$(t){return!gg(t)||t.length<2?t:uT(t)}function cT(){if(Xa)return Xa;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(s,o){return k$(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,t.push(i),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Xa=t,Xa}function C$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function A$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return C$(r,t),r}function hT(t,e,n){const r=lT(e);return r===null?null:A$(t,r,n)}function R$(t,e,n,r){const i=lT(e);if(i===null||!gg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),p=Hc(f,n,r),g=iT({alt:"media",token:u});return p+g})[0]}function N$(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vg{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dT(t){if(!t)throw mg()}function x$(t,e){function n(r,i){const s=hT(t,i,e);return dT(s!==null),s}return n}function b$(t,e){function n(r,i){const s=hT(t,i,e);return dT(s!==null),R$(s,i,t.host,t._protocol)}return n}function fT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qL():i=WL():n.getStatus()===402?i=HL(t.bucket):n.getStatus()===403?i=GL(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function pT(t){const e=fT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zL(t.path)),s.serverResponse=i.serverResponse,s}return n}function P$(t,e,n){const r=e.fullServerUrl(),i=Hc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vg(i,s,b$(t,n),o);return a.errorHandler=pT(e),a}function O$(t,e){const n=e.fullServerUrl(),r=Hc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new vg(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=pT(e),a}function D$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function M$(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=D$(null,e)),r}function L$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let S=0;S<2;S++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=M$(e,r,i),c=N$(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Wn.getBlob(h,r,f);if(p===null)throw ZL();const g={name:u.fullPath},w=Hc(s,t.host,t._protocol),E="POST",y=t.maxUploadRetryTime,m=new vg(w,E,x$(t,n),y);return m.urlParams=g,m.headers=o,m.body=p.uploadData(),m.errorHandler=fT(e),m}class $${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ds("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ds("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ds("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ds("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ds("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class U$ extends $${initXhr(){this.xhr_.responseType="text"}}function wg(){return new U$}/**
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
 */class ri{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ri(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uT(this._location.path)}get storage(){return this._service}get parent(){const e=_$(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw t$(e)}}function F$(t,e,n){t._throwIfRoot("uploadBytes");const r=L$(t.storage,t._location,cT(),new Wn(e,!0),n);return t.storage.makeRequestWithTokens(r,wg).then(i=>({metadata:i,ref:t}))}function j$(t){t._throwIfRoot("getDownloadURL");const e=P$(t.storage,t._location,cT());return t.storage.makeRequestWithTokens(e,wg).then(n=>{if(n===null)throw e$();return n})}function V$(t){t._throwIfRoot("deleteObject");const e=O$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,wg)}function B$(t,e){const n=I$(t._location.path,e),r=new wt(t._location.bucket,n);return new ri(t.storage,r)}/**
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
 */function z$(t){return/^[A-Za-z]+:\/\//.test(t)}function H$(t,e){return new ri(t,e)}function mT(t,e){if(t instanceof Sg){const n=t;if(n._bucket==null)throw JL();const r=new ri(n,n._bucket);return e!=null?mT(r,e):r}else return e!==void 0?B$(t,e):t}function W$(t,e){if(e&&z$(e)){if(t instanceof Sg)return H$(t,e);throw Lf("To use ref(service, url), the first argument must be a Storage instance.")}else return mT(t,e)}function _0(t,e){const n=e==null?void 0:e[nT];return n==null?null:wt.makeFromBucketSpec(n,t)}class Sg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VL,this._maxUploadRetryTime=BL,this._requests=new Set,i!=null?this._bucket=wt.makeFromBucketSpec(i,this._host):this._bucket=_0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=_0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ri(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new n$(rT());{const s=d$(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const I0="@firebase/storage",T0="0.9.9";/**
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
 */const gT="storage";function q$(t,e,n){return t=ae(t),F$(t,e,n)}function G$(t){return t=ae(t),j$(t)}function K$(t){return t=ae(t),V$(t)}function Kh(t,e){return t=ae(t),W$(t,e)}function Q$(t=uc(),e){return t=ae(t),wr(t,gT).getImmediate({identifier:e})}function Y$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Sg(n,r,i,e,fs)}function X$(){Zt(new Ut(gT,Y$,"PUBLIC").setMultipleInstances(!0)),mt(I0,T0,""),mt(I0,T0,"esm2017")}X$();const J$={apiKey:"AIzaSyCJPq8AIUEmYjvkXx0q-zFlV9IJzPnTPb0",authDomain:"portfolio-9d14f.firebaseapp.com",databaseURL:"https://portfolio-9d14f-default-rtdb.firebaseio.com",projectId:"portfolio-9d14f",storageBucket:"portfolio-9d14f.appspot.com",messagingSenderId:"977765501462",appId:"1:977765501462:web:85bcc1df09213a627d4337",measurementId:"G-11WSDJS4FX"},Wc=SN(J$);FP(Wc);const bt=IL(Wc),Qh=Q$(Wc),Yh=fE(Wc);class Z${async loginWithEmailAndPassword(e){const n=(await hx(Yh,e.email,e.password)).user;return{email:n.email||"",name:n.displayName||"",photoUrl:n.photoURL||"",uid:n.uid||""}}async loginWithAuthProvider(e){const n=fE();let r={};if(e===Jp.GOOGLE){const i=new pn,s=(await $x(n,i)).user;r={email:s.email||"",name:s.displayName||"",photoUrl:s.photoURL||"",uid:s.uid||""}}return r}onAuthStateChange(e){const n=dx(Yh,r=>e(r===null?void 0:{email:r==null?void 0:r.email,name:r==null?void 0:r.displayName,photoUrl:r==null?void 0:r.photoURL,uid:r==null?void 0:r.uid}));return{unsubscribe:()=>n()}}async logout(){try{return await fx(Yh),!0}catch{return!1}}}class e3{constructor(){he(this,"controller");this.controller=new Z$}authController(){return new ac(this.controller)}authEmailAndPasswordController(){return new r2(this.controller)}AuthEventController(){return new i2(this.controller)}AuthProviderController(){return new s2(this.controller)}}class yT{constructor(e){he(this,"controller");this.controller=e}create(e){return this.controller.create(e)}getById(e){return this.controller.getById(e)}getList(e,n){return this.controller.getList(e,n)}updateOne(e,n){return this.controller.updateOne(e,n)}removeOne(e){return this.controller.removeOne(e)}}class t3 extends yT{constructor(e){super(e)}onProjectChange(e){return this.controller.onProjectChange(e)}}class vT{constructor(e){he(this,"controller");this.controller=e}async uploadOne(e,n,r){return this.controller.uploadOne(e,n,r)}async uploadMany(e){return this.controller.uploadMany(e)}async getUrl(e){return e?this.controller.getUrl(e):""}getManyUrl(e){return this.controller.getManyUrl(e.filter(n=>!!n))}async deleteOne(e){return e?this.controller.deleteOne(e):!1}deleteMany(e){return this.controller.deleteMany(e.filter(n=>!!n))}}function n3(t){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let n="";for(let r=0;r<t;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}class r3{constructor(){he(this,"storage");this.storage=new vT(Te.storageControllers().storageController())}async create(e){const n=n3(10),r=await this.storage.uploadMany([{path:"projects/preview",filedata:e.imagePreview,filename:`${n}${e.imagePreview.name}`},{path:"projects",filedata:e.image,filename:`${n}${e.image.name}`}]);if(!r.every(o=>o===!0)){const o=[`projects/preview/${n}${e.imagePreview.name}`,`projects/${n}${e.image.name}`].filter((a,l)=>r[l]);await this.storage.deleteMany(o);return}const i=await this.storage.getManyUrl([`projects/preview/${n}${e.imagePreview.name}`,`projects/${n}${e.image.name}`]),s={imagePreviewUrl:i[0],imageFullSizeUrl:i[1],imagePreviewName:`${n}${e.imagePreview.name}`,imageFullSizeName:`${n}${e.image.name}`,langs:e.langs||"",text:e.text||"",website:e.website||"",repository:e.repository||"",projectType:e.projectType||""};try{return(await ZI(Yn(bt,"projects"),s)).id}catch(o){console.log(o);const a=[`projects/preview/${n}${e.imagePreview.name}`,`projects/${n}${e.image.name}`];await this.storage.deleteMany(a);return}}async getById(e){var n;try{const r=(n=(await pu(ji(Yn(bt,"projects"),KI(UI(),"==",e)))).docs)==null?void 0:n[0];return{id:r.id,...r.data()}}catch{return}}async getList(e=0,n=0){try{const r=[];if(e>0){n<0&&(n=0);let i=e*n;i<0&&(i=0),r.push(YI(i),QI(e))}return(await pu(ji(Yn(bt,"projects"),...r))).docs.map(i=>({...i.data(),id:i.id}))}catch{return[]}}async updateOne(e,n){const r={...n.text!==void 0&&{text:n.text},...n.langs!==void 0&&{langs:n.langs},...n.projectType!==void 0&&{projectType:n.projectType},...n.repository!==void 0&&{repository:n.repository},...n.website!==void 0&&{website:n.website}},i=async(u,c,h)=>{const f=[];if(u===void 0&&(u=""),h===void 0)return;c!==void 0&&f.push(this.storage.deleteOne(`${u}/${c}`)),f.push(this.storage.uploadOne(u,h));const p=await Promise.all(f);if(p[p.length-1]===!0)return this.storage.getUrl(`${u}/${h.name}`)},s=await this.getById(e),o=[];o.push(i("projects/preview",s==null?void 0:s.imagePreviewName,n.imagePreview)),o.push(i("projects",s==null?void 0:s.imageFullSizeName,n.image));const a=await Promise.all(o),l={...a[0]!==void 0&&{imagePreviewName:s==null?void 0:s.imagePreviewName,imagePreviewUrl:a[0]},...a[1]!==void 0&&{imageFullSizeName:s==null?void 0:s.imageFullSizeName,imageFullSizeUrl:a[1]}};try{return await XI(Ho(bt,"projects",e),{...l,...r}),!0}catch{return!1}}async removeOne(e){try{const n=await this.getById(e);if(n===void 0)return!1;const r=[`projects/preview/${n.imagePreviewName}`,`projects/${n.imageFullSizeName}`];return await Promise.all([this.storage.deleteMany(r),JI(Ho(bt,"projects",e))]),!0}catch{return!1}}onProjectChange(e){return{unsubscribe:eT(ji(Yn(bt,"projects")),r=>{const i=[];r.docChanges().forEach(s=>{i.push({type:s.type,data:{id:s.doc.id,...s.doc.data()}})}),e(i)})}}}class i3{constructor(){he(this,"controller");this.controller=new r3}projectController(){return new yT(this.controller)}projectWithEventController(){return new t3(this.controller)}}class wT{constructor(e){he(this,"controller");this.controller=e}create(e){return this.controller.create(e)}getById(e){return this.controller.getById(e)}getList(e,n){return this.controller.getList(e,n)}updateOne(e,n){return this.controller.updateOne(e,n)}removeOne(e){return this.controller.removeOne(e)}}class s3 extends wT{constructor(e){super(e)}onSkillChange(e){return this.controller.onSkillChange(e)}}class o3{async create(e){try{return(await ZI(Yn(bt,"skills"),e)).id}catch{return}}async getById(e){var n;try{const r=(n=(await pu(ji(Yn(bt,"skills"),KI(UI(),"==",e)))).docs)==null?void 0:n[0];return{id:r.id,...r.data()}}catch{return}}async getList(e=0,n=0){try{const r=[];if(e>0){n<0&&(n=0);let i=e*n;i<0&&(i=0),r.push(YI(i),QI(e))}return(await pu(ji(Yn(bt,"skills"),...r))).docs.map(i=>({...i.data(),id:i.id}))}catch{return[]}}async updateOne(e,n){try{return await XI(Ho(bt,"skills",e),n),!0}catch{return!1}}async removeOne(e){try{return await JI(Ho(bt,"skills",e)),!0}catch{return!1}}onSkillChange(e){return{unsubscribe:eT(ji(Yn(bt,"skills")),r=>{const i=[];r.docChanges().forEach(s=>{i.push({type:s.type,data:{id:s.doc.id,...s.doc.data()}})}),e(i)})}}}class a3{constructor(){he(this,"controller");this.controller=new o3}skillController(){return new wT(this.controller)}skillWithEventController(){return new s3(this.controller)}}class l3{async uploadOne(e,n,r){try{const i=Kh(Qh,`${e}/${r!=null?r:n.name}`);return await q$(i,n),!0}catch{return!1}}async uploadMany(e){const n=[];for(let r=0;e.length>r;r++)n.push(this.uploadOne(e[r].path,e[r].filedata,e[r].filename));return Promise.all(n)}async getUrl(e){try{return await G$(Kh(Qh,e))}catch{return""}}getManyUrl(e){const n=[];for(let r=0;e.length>r;r++)n.push(this.getUrl(e[r]));return Promise.all(n)}async deleteOne(e){try{const n=Kh(Qh,e);return await K$(n),!0}catch{return!1}}deleteMany(e){const n=[];for(let r=0;e.length>r;r++)n.push(this.deleteOne(e[r]));return Promise.all(n)}}class u3{constructor(){he(this,"controller");this.controller=new l3}storageController(){return new vT(this.controller)}}const at=class{static projectControllers(){return at._projectController||(at._projectController=new i3),at._projectController}static skillControllers(){return at._skillController||(at._skillController=new a3),at._skillController}static storageControllers(){return at._storageController||(at._storageController=new u3),at._storageController}static authControllers(){return at._authControllers||(at._authControllers=new e3),at._authControllers}};let Te=at;he(Te,"_projectController"),he(Te,"_skillController"),he(Te,"_storageController"),he(Te,"_authControllers");function Gt(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function mr(t){return!!t&&!!t[le]}function Pn(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===v3}(t)||Array.isArray(t)||!!t[b0]||!!t.constructor[b0]||Eg(t)||_g(t))}function ii(t,e,n){n===void 0&&(n=!1),Es(t)===0?(n?Object.keys:Bi)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Es(t){var e=t[le];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Eg(t)?2:_g(t)?3:0}function Vi(t,e){return Es(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function c3(t,e){return Es(t)===2?t.get(e):t[e]}function ST(t,e,n){var r=Es(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function ET(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Eg(t){return g3&&t instanceof Map}function _g(t){return y3&&t instanceof Set}function Nr(t){return t.o||t.t}function Ig(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=IT(t);delete e[le];for(var n=Bi(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Tg(t,e){return e===void 0&&(e=!1),kg(t)||mr(t)||!Pn(t)||(Es(t)>1&&(t.set=t.add=t.clear=t.delete=h3),Object.freeze(t),e&&ii(t,function(n,r){return Tg(r,!0)},!0)),t}function h3(){Gt(2)}function kg(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function cn(t){var e=jf[t];return e||Gt(18,t),e}function d3(t,e){jf[t]||(jf[t]=e)}function $f(){return Wo}function Xh(t,e){e&&(cn("Patches"),t.u=[],t.s=[],t.v=e)}function mu(t){Uf(t),t.p.forEach(f3),t.p=null}function Uf(t){t===Wo&&(Wo=t.l)}function k0(t){return Wo={p:[],l:Wo,h:t,m:!0,_:0}}function f3(t){var e=t[le];e.i===0||e.i===1?e.j():e.O=!0}function Jh(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||cn("ES5").S(e,t,r),r?(n[le].P&&(mu(e),Gt(4)),Pn(t)&&(t=gu(e,t),e.l||yu(e,t)),e.u&&cn("Patches").M(n[le].t,t,e.u,e.s)):t=gu(e,n,[]),mu(e),e.u&&e.v(e.u,e.s),t!==_T?t:void 0}function gu(t,e,n){if(kg(e))return e;var r=e[le];if(!r)return ii(e,function(s,o){return C0(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return yu(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ig(r.k):r.o;ii(r.i===3?new Set(i):i,function(s,o){return C0(t,r,i,s,o,n)}),yu(t,i,!1),n&&t.u&&cn("Patches").R(r,n,t.u,t.s)}return r.o}function C0(t,e,n,r,i,s){if(mr(i)){var o=gu(t,i,s&&e&&e.i!==3&&!Vi(e.D,r)?s.concat(r):void 0);if(ST(n,r,o),!mr(o))return;t.m=!1}if(Pn(i)&&!kg(i)){if(!t.h.F&&t._<1)return;gu(t,i),e&&e.A.l||yu(t,i)}}function yu(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&Tg(e,n)}function Zh(t,e){var n=t[le];return(n?Nr(n):t)[e]}function A0(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function qn(t){t.P||(t.P=!0,t.l&&qn(t.l))}function ed(t){t.o||(t.o=Ig(t.t))}function Ff(t,e,n){var r=Eg(e)?cn("MapSet").N(e,n):_g(e)?cn("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:$f(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=qo;o&&(l=[a],u=Ws);var c=Proxy.revocable(l,u),h=c.revoke,f=c.proxy;return a.k=f,a.j=h,f}(e,n):cn("ES5").J(e,n);return(n?n.A:$f()).p.push(r),r}function p3(t){return mr(t)||Gt(22,t),function e(n){if(!Pn(n))return n;var r,i=n[le],s=Es(n);if(i){if(!i.P&&(i.i<4||!cn("ES5").K(i)))return i.t;i.I=!0,r=R0(n,s),i.I=!1}else r=R0(n,s);return ii(r,function(o,a){i&&c3(i.t,o)===a||ST(r,o,e(a))}),s===3?new Set(r):r}(t)}function R0(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Ig(t)}function m3(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[le];return qo.get(l,s)},set:function(l){var u=this[le];qo.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][le];if(!a.P)switch(a.i){case 5:r(a)&&qn(a);break;case 4:n(a)&&qn(a)}}}function n(s){for(var o=s.t,a=s.k,l=Bi(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==le){var h=o[c];if(h===void 0&&!Vi(o,c))return!0;var f=a[c],p=f&&f[le];if(p?p.t!==h:!ET(f,h))return!0}}var g=!!o[le];return l.length!==Bi(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};d3("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var f=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(f,""+p,t(p,!0));return f}var g=IT(h);delete g[le];for(var w=Bi(g),E=0;E<w.length;E++){var y=w[E];g[y]=t(y,c||!!g[y].enumerable)}return Object.create(Object.getPrototypeOf(h),g)}(a,s),u={i:a?5:4,A:o?o.A:$f(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,le,{value:u,writable:!0}),l},S:function(s,o,a){a?mr(o)&&o[le].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[le];if(c){var h=c.t,f=c.k,p=c.D,g=c.i;if(g===4)ii(f,function(v){v!==le&&(h[v]!==void 0||Vi(h,v)?p[v]||l(f[v]):(p[v]=!0,qn(c)))}),ii(h,function(v){f[v]!==void 0||Vi(f,v)||(p[v]=!1,qn(c))});else if(g===5){if(r(c)&&(qn(c),p.length=!0),f.length<h.length)for(var w=f.length;w<h.length;w++)p[w]=!1;else for(var E=h.length;E<f.length;E++)p[E]=!0;for(var y=Math.min(f.length,h.length),m=0;m<y;m++)f.hasOwnProperty(m)||(p[m]=!0),p[m]===void 0&&l(f[m])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var N0,Wo,Cg=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",g3=typeof Map<"u",y3=typeof Set<"u",x0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",_T=Cg?Symbol.for("immer-nothing"):((N0={})["immer-nothing"]=!0,N0),b0=Cg?Symbol.for("immer-draftable"):"__$immer_draftable",le=Cg?Symbol.for("immer-state"):"__$immer_state",v3=""+Object.prototype.constructor,Bi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,IT=Object.getOwnPropertyDescriptors||function(t){var e={};return Bi(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},jf={},qo={get:function(t,e){if(e===le)return t;var n=Nr(t);if(!Vi(n,e))return function(i,s,o){var a,l=A0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Pn(r)?r:r===Zh(t.t,e)?(ed(t),t.o[e]=Ff(t.A.h,r,t)):r},has:function(t,e){return e in Nr(t)},ownKeys:function(t){return Reflect.ownKeys(Nr(t))},set:function(t,e,n){var r=A0(Nr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Zh(Nr(t),e),s=i==null?void 0:i[le];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(ET(n,i)&&(n!==void 0||Vi(t.t,e)))return!0;ed(t),qn(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Zh(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,ed(t),qn(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Nr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){Gt(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Gt(12)}},Ws={};ii(qo,function(t,e){Ws[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ws.deleteProperty=function(t,e){return Ws.set.call(this,t,e,void 0)},Ws.set=function(t,e,n){return qo.set.call(this,t[0],e,n,t[0])};var w3=function(){function t(n){var r=this;this.g=x0,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(w){var E=this;w===void 0&&(w=a);for(var y=arguments.length,m=Array(y>1?y-1:0),v=1;v<y;v++)m[v-1]=arguments[v];return l.produce(w,function(S){var k;return(k=s).call.apply(k,[E,S].concat(m))})}}var u;if(typeof s!="function"&&Gt(6),o!==void 0&&typeof o!="function"&&Gt(7),Pn(i)){var c=k0(r),h=Ff(r,i,void 0),f=!0;try{u=s(h),f=!1}finally{f?mu(c):Uf(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(w){return Xh(c,o),Jh(w,c)},function(w){throw mu(c),w}):(Xh(c,o),Jh(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===_T&&(u=void 0),r.F&&Tg(u,!0),o){var p=[],g=[];cn("Patches").M(i,u,p,g),o(p,g)}return u}Gt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),f=1;f<c;f++)h[f-1]=arguments[f];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Pn(n)||Gt(8),mr(n)&&(n=p3(n));var r=k0(this),i=Ff(this,n,void 0);return i[le].C=!0,Uf(r),i},e.finishDraft=function(n,r){var i=n&&n[le],s=i.A;return Xh(s,r),Jh(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!x0&&Gt(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=cn("Patches").$;return mr(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Tt=new w3,TT=Tt.produce;Tt.produceWithPatches.bind(Tt);Tt.setAutoFreeze.bind(Tt);Tt.setUseProxies.bind(Tt);Tt.applyPatches.bind(Tt);Tt.createDraft.bind(Tt);Tt.finishDraft.bind(Tt);function S3(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P0(Object(n),!0).forEach(function(r){S3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qe(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var D0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),td=function(){return Math.random().toString(36).substring(7).split("").join(".")},vu={INIT:"@@redux/INIT"+td(),REPLACE:"@@redux/REPLACE"+td(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+td()}};function E3(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function kT(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(qe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(qe(1));return n(kT)(t,e)}if(typeof t!="function")throw new Error(qe(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(qe(3));return s}function h(w){if(typeof w!="function")throw new Error(qe(4));if(l)throw new Error(qe(5));var E=!0;return u(),a.push(w),function(){if(!!E){if(l)throw new Error(qe(6));E=!1,u();var m=a.indexOf(w);a.splice(m,1),o=null}}}function f(w){if(!E3(w))throw new Error(qe(7));if(typeof w.type>"u")throw new Error(qe(8));if(l)throw new Error(qe(9));try{l=!0,s=i(s,w)}finally{l=!1}for(var E=o=a,y=0;y<E.length;y++){var m=E[y];m()}return w}function p(w){if(typeof w!="function")throw new Error(qe(10));i=w,f({type:vu.REPLACE})}function g(){var w,E=h;return w={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(qe(11));function v(){m.next&&m.next(c())}v();var S=E(v);return{unsubscribe:S}}},w[D0]=function(){return this},w}return f({type:vu.INIT}),r={dispatch:f,subscribe:h,getState:c,replaceReducer:p},r[D0]=g,r}function _3(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:vu.INIT});if(typeof r>"u")throw new Error(qe(12));if(typeof n(void 0,{type:vu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(qe(13))})}function I3(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{_3(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},f=0;f<s.length;f++){var p=s[f],g=n[p],w=l[p],E=g(w,u);if(typeof E>"u")throw u&&u.type,new Error(qe(14));h[p]=E,c=c||E!==w}return c=c||s.length!==Object.keys(l).length,c?h:l}}function wu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function T3(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(qe(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=wu.apply(void 0,a)(i.dispatch),O0(O0({},i),{},{dispatch:s})}}}function CT(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var AT=CT();AT.withExtraArgument=CT;const M0=AT;var k3=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var Su=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},C3=Object.defineProperty,L0=Object.getOwnPropertySymbols,A3=Object.prototype.hasOwnProperty,R3=Object.prototype.propertyIsEnumerable,$0=function(t,e,n){return e in t?C3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Go=function(t,e){for(var n in e||(e={}))A3.call(e,n)&&$0(t,n,e[n]);if(L0)for(var r=0,i=L0(e);r<i.length;r++){var n=i[r];R3.call(e,n)&&$0(t,n,e[n])}return t},N3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wu:wu.apply(null,arguments)};function x3(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var b3=function(t){k3(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Su([void 0],n[0].concat(this)))):new(e.bind.apply(e,Su([void 0],n.concat(this))))},e}(Array);function Vf(t){return Pn(t)?TT(t,function(){}):t}function P3(t){return typeof t=="boolean"}function O3(){return function(e){return D3(e)}}function D3(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new b3;return n&&(P3(n)?r.push(M0):r.push(M0.withExtraArgument(n.extraArgument))),r}var M3=!0;function L3(t){var e=O3(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,f=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(x3(i))p=I3(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var w=T3.apply(void 0,g),E=wu;l&&(E=N3(Go({trace:!M3},typeof l=="object"&&l)));var y=[w];Array.isArray(f)?y=Su([w],f):typeof f=="function"&&(y=f(y));var m=E.apply(void 0,y);return kT(p,c,m)}function Ko(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return Go(Go({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function RT(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function $3(t){return typeof t=="function"}function U3(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?RT(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if($3(t))l=function(){return Vf(t())};else{var u=Vf(t);l=function(){return u}}function c(h,f){h===void 0&&(h=l());var p=Su([s[f.type]],o.filter(function(g){var w=g.matcher;return w(f)}).map(function(g){var w=g.reducer;return w}));return p.filter(function(g){return!!g}).length===0&&(p=[a]),p.reduce(function(g,w){if(w)if(mr(g)){var E=g,y=w(E,f);return y===void 0?g:y}else{if(Pn(g))return TT(g,function(m){return w(m,f)});var y=w(g,f);if(y===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return g},h)}return c.getInitialState=l,c}function F3(t,e){return t+"/"+e}function Ag(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Vf(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],f=F3(e,c),p,g;"reducer"in h?(p=h.reducer,g=h.prepare):p=h,s[c]=p,o[f]=p,a[c]=g?Ko(f,g):Ko(f)});function l(){var c=typeof t.extraReducers=="function"?RT(t.extraReducers):[t.extraReducers],h=c[0],f=h===void 0?{}:h,p=c[1],g=p===void 0?[]:p,w=c[2],E=w===void 0?void 0:w,y=Go(Go({},f),o);return U3(n,y,g,E)}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Rg="listenerMiddleware";Ko(Rg+"/add");Ko(Rg+"/removeAll");Ko(Rg+"/remove");m3();const j3={status:K.OK,loggedIn:localStorage.getItem("isSignedIn")==="true"},NT=Ag({name:"auth",initialState:j3,reducers:{setLoggedIn:t=>{localStorage.setItem("isSignedIn","true"),t.loggedIn=!0,t.status=K.OK,t.message=void 0},setLoggedOut:t=>{localStorage.setItem("isSignedIn","false"),t.loggedIn=!1,t.status=K.OK,t.message=void 0},setAuthStatus:(t,e)=>{t.status=e.payload},setAuthMessage:(t,e)=>{t.message=e.payload}}}),{setLoggedIn:V3,setLoggedOut:B3,setAuthStatus:pi,setAuthMessage:nd}=NT.actions,z3=NT.reducer;function qc(){const t=Wp(n=>n.auth),e=Xp();return{authState:t,authActions:{async loginWithEmailAndPassword(n,r){if(t.loggedIn||t.status===K.LOADING)return;e(pi(K.LOADING));const i=Te.authControllers().authEmailAndPasswordController();try{await i.loginWithEmailAndPassword({email:n,password:r})}catch{e(pi(K.ERROR)),e(nd("Wrong credentials"))}},async loginWithGoogle(){if(t.loggedIn||t.status===K.LOADING)return;e(pi(K.LOADING));const n=Te.authControllers().AuthProviderController();try{await n.loginWithAuthProvider(Jp.GOOGLE)}catch{e(pi(K.ERROR)),e(nd("Wrong credentials"))}},async logout(){if(!t.loggedIn||t.status===K.LOADING)return;e(pi(K.LOADING)),await Te.authControllers().authController().logout()||(e(pi(K.ERROR)),e(nd("Failed to logout")))}}}}function H3(){return O("header",{className:"document-header",children:[O("div",{className:"container",children:[O("h1",{children:[d("span",{className:"color-accent",children:"<"}),"Alberto P\xE9rez",d("span",{className:"color-accent",children:"/>"})]}),d("p",{children:"Programador web FullStack React, Typescript / NodeJs, Go"})]}),O("div",{className:"triangles",children:[d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})}),d("div",{children:d("div",{children:d("div",{})})})]})]})}function Gc({anchor:t,className:e,title:n,children:r}){return O("section",{className:"section",children:[d("h1",{className:"section-title",id:t,children:n}),d("div",{className:e,children:r})]})}const W3="/assets/about-image.272e2de3.jpg";function q3(){return d(Gc,{title:"About Me",anchor:"about",children:O("article",{className:"article-about",children:[O("div",{className:"about-text",children:[O("p",{children:[d("b",{children:"Hi"}),", I'm ",d("b",{children:"Alberto Perez"}),", I'm passionate about programming. In constant learning of the latest technologies on web development"]}),d("p",{children:"I have frontend skills in CSS, HTML, JavaScript, TypeScript, React and VueJS and Backend in Node with ExpressJs"})]}),d("div",{className:"about-image",children:d("img",{src:W3,alt:" "})})]})})}const G3={list:[],status:K.OK},xT=Ag({name:"projects",initialState:G3,reducers:{setSkills:(t,e)=>{t.list=e.payload},addSkill:(t,e)=>{t.list=[...t.list,e.payload]},updateSkill:(t,e)=>{for(let n=0;t.list.length>n;n++)if(t.list[n].id===e.payload.id){t.list[n]=e.payload;break}},removeSkill:(t,e)=>{t.list=t.list.filter(n=>n.id!==e.payload)},setSkillsStatus:(t,e)=>{t.status=e.payload},setSkillsMessage:(t,e)=>{t.message=e.payload}}}),{setSkills:A4,addSkill:K3,updateSkill:Q3,removeSkill:Y3,setSkillsStatus:Un,setSkillsMessage:rd}=xT.actions,X3=xT.reducer;function bT(){const t=Wp(n=>n.skills),e=Xp();return{skillsState:t,skillsActions:{async create(n){e(Un(K.LOADING)),await Te.skillControllers().skillController().create(n)===void 0&&(e(Un(K.ERROR)),e(rd("Failed to create skill")))},async update(n,r){e(Un(K.LOADING)),await Te.skillControllers().skillController().updateOne(n,r)||(e(Un(K.ERROR)),e(rd("Failed to update skill")))},async remove(n){e(Un(K.LOADING)),await Te.skillControllers().skillController().removeOne(n)||(e(Un(K.ERROR)),e(rd("Failed to remove skill")))}}}}function PT(t){const e=t.displayName||t.name||"Component";function n({actions:r,data:i}){const[s,o]=C.exports.useState(!1);return O("div",{onMouseOver:()=>{o(!0)},onMouseOut:()=>{o(!1)},style:{position:"relative"},children:[d(t,{...i}),d("div",{className:`tooltip${s?" tooltip-active":""}`,children:r.map(u=>d(Jt,{onClick:u.onClick,icon:u.icon,style:u.style,children:u.text},Math.random()*1e3))})]})}return n.displayName=`withActions(${e})`,n}function U0(t){return O("div",{className:"skills-item",children:[d("div",{className:"skills-item-icon",dangerouslySetInnerHTML:{__html:t.icon}}),d("div",{className:"skills-item-text",children:t.text})]},Math.floor(Math.random()*1e7))}function OT(){return d(At,{viewBox:"0 0 448 512",children:d("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})})}function DT(){return d(At,{viewBox:"0 0 448 512",children:d("path",{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})})}function Bf(){return d(At,{viewBox:"0 0 512 512",children:d("path",{d:"M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})})}function Ng(t){const[e,n]=C.exports.useState(!1);C.exports.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[e]);const r={top:"0",left:"0",right:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"10000"},i=(t==null?void 0:t.classNames)||{container:"modal-container",overlay:"modal-overlay"};return{isVisible:e,setVisibility:n,showModal(){n(!0)},hideModal(){n(!1)},toggleModal(){n(!e)},ModalComponent(s){var o,a;return e?aA.createPortal(d(Kf.Fragment,{children:d(ai,{children:d("div",{className:i.overlay,style:{...(o=t==null?void 0:t.styles)==null?void 0:o.overlay,...r},onClick:()=>n(!1),children:d("div",{className:i.container,style:(a=t==null?void 0:t.styles)==null?void 0:a.container,onClick:l=>l.stopPropagation(),children:s.children})})})}),document.body):null}}}function MT(t){const{ModalComponent:e,hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}=Ng();return{DialogModal:a=>d(e,{children:O("div",{style:{padding:"0.5em"},children:[d("p",{style:{color:"white"},children:t}),O("div",{style:{display:"flex",gap:"0.5em"},children:[d(Jt,{icon:d(Bf,{}),style:Ue.ACCENT,type:Yi.BUTTON,onClick:a.onAccept,children:"Accept"}),d(Jt,{icon:d(Bf,{}),style:Ue.PRIMARY,type:Yi.BUTTON,onClick:l=>{n(),a.onClose&&a.onClose(l)},children:"Close"})]})]})}),setVisibility:s,showModal:r,hideModal:n,toggleModal:i,isVisible:o}}var zf=(t=>(t.ROW="form-container-row",t.COLUMN="form-container-column",t))(zf||{});function LT(){return{Form:t=>{const e=C.exports.useRef(null);return d("form",{onSubmit:r=>{var o;r.preventDefault();const i={},s=r.currentTarget.elements;for(let a=0;s.length>a;a++){let l="",u;if(s[a].tagName==="INPUT")s[a].getAttribute("type")==="file"?(l=s[a].name,u=((o=s[a].files)!=null?o:[null])[0]):(l=s[a].name,u=s[a].value);else if(s[a].tagName==="TEXTAREA")l=s[a].name,u=s[a].value;else continue;i[l]=u}t.onSubmit(i)},ref:e,className:"form",children:t.children})},FormContainer:t=>d("div",{className:`form-container${t.direction?" "+t.direction:""}`,children:t.children})}}function $T(){const{Form:t,FormContainer:e}=LT(),{ModalComponent:n,hideModal:r,showModal:i,toggleModal:s,setVisibility:o,isVisible:a}=Ng({styles:{container:{minWidth:"350px"}}});return{FormModal:l=>d(n,{children:d("div",{style:{maxWidth:"400px"},children:O(t,{onSubmit:u=>{l.onSubmit(u),r()},children:[l.children,O("div",{className:"form-container form-container-row",children:[d(Jt,{type:Yi.SUBMIT,style:Ue.ACCENT,children:"SUBMIT"}),d(Jt,{type:Yi.BUTTON,style:Ue.PRIMARY,onClick:r,children:"CLOSE"})]})]})})}),FormContainer:e,setVisibility:o,showModal:i,hideModal:r,toggleModal:s,isVisible:a}}function J3(){const{FormModal:t,FormContainer:e,hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}=$T();return{CreateSkillModal:a=>{const{skillsActions:l}=bT();return O(t,{onSubmit:async c=>{try{await l.create(c)}catch(h){console.log(h)}a.onSubmit&&a.onSubmit(c)},children:[d(e,{children:d("h2",{children:"Create Skill"})}),O(e,{children:[d("textarea",{name:"icon",placeholder:"SVG",required:!0}),d("input",{type:"text",name:"text",placeholder:"Text",required:!0})]})]})},hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}}function Z3(){const{skillsState:t,skillsActions:e}=bT(),{authState:n}=qc(),r=J3(),i=PT(U0),s=MT("Are you sure to delete the skill?"),[o,a]=C.exports.useState(void 0);return O(Gc,{title:"Skills",anchor:"skills",children:[O("article",{className:"article-skills",children:[t.list.map(l=>n.loggedIn?d(i,{data:l,actions:[{onClick:()=>{a(l.id),s.showModal()},icon:d(OT,{}),style:Ue.RED}]},l.id):C.exports.createElement(U0,{...l,key:l.id})),t.status===K.LOADING&&d("div",{className:"skills-item-dashed",children:d(zp,{})}),n.loggedIn&&d("a",{href:"#",onClick:l=>{l.preventDefault(),r.showModal()},className:"skills-item-dashed",children:d(DT,{})})]}),d(r.CreateSkillModal,{}),d(s.DialogModal,{onAccept:()=>{o&&e.remove(o),s.hideModal()}})]})}const e4={list:[],status:K.OK},UT=Ag({name:"projects",initialState:e4,reducers:{setProjects:(t,e)=>{t.list=e.payload},addProject:(t,e)=>{t.list=[...t.list,e.payload]},updateProject:(t,e)=>{for(let n=0;t.list.length>n;n++)if(t.list[n].id===e.payload.id){t.list[n]=e.payload;break}},removeProject:(t,e)=>{t.list=t.list.filter(n=>n.id!==e.payload)},setProjectsStatus:(t,e)=>{t.status=e.payload},setProjectsMessage:(t,e)=>{t.message=e.payload}}}),{setProjects:R4,addProject:t4,updateProject:n4,removeProject:r4,setProjectsStatus:Fn,setProjectsMessage:id}=UT.actions,i4=UT.reducer;function FT(){const t=Wp(n=>n.projects),e=Xp();return{projectsState:t,projectsActions:{async create(n){e(Fn(K.LOADING)),await Te.projectControllers().projectController().create(n)===void 0&&(e(Fn(K.ERROR)),e(id("Failed to create project")))},async update(n,r){e(Fn(K.LOADING)),await Te.projectControllers().projectController().updateOne(n,r)||(e(Fn(K.ERROR)),e(id("Failed to update project")))},async remove(n){e(Fn(K.LOADING)),await Te.projectControllers().projectController().removeOne(n)||(e(Fn(K.ERROR)),e(id("Failed to remove project")))}}}}function s4(){return d(At,{viewBox:"0 0 512 512",children:d("path",{d:"M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"})})}function o4(){return d(At,{viewBox:"0 0 512 512",children:d("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"})})}function xg(){return d(At,{viewBox:"0 0 320 512",children:d("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}const a4={color:"white",position:"absolute",top:"1.25rem",right:"1.25rem",fontSize:"1.5rem",padding:"0.75em calc(0.75em + 0.125em) calc(0.75em + 0.125em)",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"calc(1em - 0.125em)",height:"1em",backgroundColor:"rgba(255,255,255,0.2)"};function l4(t){const{ModalComponent:e,hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}=Ng();return{ImageModal:()=>O(e,{children:[d("img",{src:t,alt:"",style:{maxHeight:"100%",maxWidth:"100%"}}),d("a",{href:"#",onClick:a=>{a.preventDefault(),n()},style:a4,children:d(xg,{})})]}),setVisibility:s,showModal:r,hideModal:n,toggleModal:i,isVisible:o}}function F0(t){const{ImageModal:e,showModal:n}=l4(t.imageFullSizeUrl),r=i=>{location.href=i};return O("article",{className:"project-item",children:[O("div",{className:"project-image",children:[d("img",{src:t.imagePreviewUrl,alt:" "}),d("div",{className:"project-type",children:t.projectType}),d("div",{className:"image-overlay",children:d("a",{href:"#",onClick:i=>{i.preventDefault(),n()},className:"image-overlay-button",children:d(o4,{})})})]}),O("div",{className:"project-content",children:[d("div",{className:"project-langs",children:t.langs.split(",").map(i=>d("div",{className:"project-lang-item",children:i},i))}),d("div",{className:"project-text",children:t.text}),O("div",{className:"project-actions",children:[t.website&&d(Jt,{onClick:()=>r(`${t.website}`),style:Ue.ACCENT,icon:d(s4,{}),children:"Website"}),t.repository&&d(Jt,{onClick:()=>r(`${t.repository}`),style:t.website?Ue.PRIMARY:Ue.ACCENT,icon:d(Hp,{}),children:"Repository"})]})]}),d(e,{})]})}class u4{constructor(e){he(this,"file");if(e&&e.type.split("/")[0]==="image")this.file=e;else throw new Error("File must be an image: ImageEdit error")}async resize(e,n,r){let i=null;const s=new Image,o=document.createElement("canvas"),a=o.getContext("2d");return i=await new Promise((l,u)=>{s.onload=async()=>{const c=s.naturalHeight,f=s.naturalWidth/c,p=e/n;let g=0,w=0;p>f?(w=Math.floor(n),g=Math.floor(n/f)):(g=Math.floor(e),w=Math.floor(e/f)),o.width=g,o.height=w,a==null||a.drawImage(s,0,0,g,w),r?(r>1&&(r=1),r<0&&(r=0)):r=1,o.toBlob(E=>{if(E){l(new File([E],this.file.name,{type:this.file.type}));return}else u()},"image/jpeg",r)},s.src=URL.createObjectURL(this.file)}),i}}function c4(t){var o,a,l;const[e,n]=C.exports.useState(null),r=C.exports.useRef(null);let i=(o=t.src)!=null?o:"";const s=async u=>{var p,g;n(((p=u.target.files)!=null?p:[])[0]);const h=await new u4(((g=u.target.files)!=null?g:[])[0]).resize(800,800,.8),f=new DataTransfer;r.current&&h&&(f.items.add(h),r.current.files=f.files,i=""),t.onChange&&t.onChange(u)};return O("div",{className:"image-input",children:[d("div",{className:"image-container",children:d("img",{src:(a=e&&URL.createObjectURL(e))!=null?a:i,alt:" ",className:"image-input-preview"})}),O("label",{className:"file-input",children:[d("input",{type:"file",name:t.name,required:t.required,onChange:s,accept:"image/png, image/jpeg"}),d("input",{type:"file",name:t.previewName,ref:r}),d("span",{className:"file-input-button",children:"select file"}),d("span",{className:"file-input-value",children:(l=e==null?void 0:e.name)!=null?l:"Select image"})]})]})}function h4(){const{FormModal:t,FormContainer:e,hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}=$T();return{CreateProjectModal:a=>{const{projectsActions:l}=FT();return O(t,{onSubmit:async c=>{try{await l.create(c)}catch(h){console.log(h)}a.onSubmit&&a.onSubmit(c)},children:[d(e,{children:d("h2",{children:"Create Project"})}),O(e,{children:[d(c4,{name:"image",previewName:"imagePreview"}),d("input",{type:"text",name:"projectType",placeholder:"Project type",required:!0}),d("input",{type:"text",name:"langs",placeholder:"javascript,HTML,CSS",pattern:"^[\\w.:;!@#$%^&*\\-_=+]+(,[\\w.:;!@#$%^&*\\-_=+]+)*$",required:!0}),d("input",{type:"text",name:"website",placeholder:"http://www.website.com/",pattern:"^((?:https\\:\\/\\/)|(?:http\\:\\/\\/)|(?:www\\.))?([a-zA-Z0-9\\-\\.]+\\.[a-zA-Z]{2,3}(?:\\??)[a-zA-Z0-9\\-\\._\\?\\,\\'\\/\\\\\\+&%\\$#\\=~]+)$"}),d("input",{type:"text",name:"repository",placeholder:"https://github.com/user/repository",required:!0}),d("textarea",{name:"text",placeholder:"Describe",required:!0})]})]})},hideModal:n,showModal:r,toggleModal:i,setVisibility:s,isVisible:o}}function d4(){const{projectsState:t,projectsActions:e}=FT(),{authState:n}=qc(),r=PT(F0),i=h4(),s=MT("Are you sure to delete the project?"),[o,a]=C.exports.useState(void 0);return d(Gc,{title:"Projects",anchor:"projects",className:"section-projects",children:O(ai,{children:[t.list.map(l=>n.loggedIn?d(r,{data:l,actions:[{onClick:()=>{a(l.id),s.showModal()},icon:d(OT,{}),style:Ue.RED}]},l.id):C.exports.createElement(F0,{...l,key:l.id})),t.status===K.LOADING&&d("div",{className:"project-item-dashed",children:d(zp,{})}),n.loggedIn&&d("a",{href:"#",onClick:l=>{l.preventDefault(),i.showModal()},className:"project-item-dashed",children:d(DT,{})}),d(i.CreateProjectModal,{}),d(s.DialogModal,{onAccept:()=>{o&&e.remove(o),s.hideModal()}})]})})}function f4(){return d(At,{viewBox:"0 0 384 512",children:d("path",{d:"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})})}function p4(){return d(At,{viewBox:"0 0 384 512",children:d("path",{d:"M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})})}function j0(){return d(At,{viewBox:"0 0 512 512",children:d("path",{d:"M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"})})}function V0({text:t}){const[e,n]=C.exports.useState(!1);return O("a",{href:"#",onClick:i=>{i.preventDefault(),navigator.clipboard.writeText(t),n(!0),setTimeout(()=>{n(!1)},2e3)},children:[d("span",{children:t}),d("span",{className:e?"pl-1 clipboard-icon copied":"pl-1 clipboard-icon",children:e?d(f4,{}):d(p4,{})})]})}function m4(){const[t,e]=C.exports.useState({style:Ue.ACCENT,text:"Submit",icon:d(j0,{})}),[n,r]=C.exports.useState(!1),{Form:i,FormContainer:s}=LT();return d(Gc,{title:"Contact",anchor:"contact",children:O("article",{className:"article-contact",children:[d("div",{className:"contact-form",children:O(i,{onSubmit:async a=>{r(!0),(await(await fetch("https://wild-crown-seal.cyclic.app/api/send-message",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.name,email:a.email,text:a.text})})).json()).ok?e({style:Ue.SUCCESS,text:"message sent",icon:d(Bf,{})}):e({style:Ue.ERROR,text:"message not sent",icon:d(xg,{})}),r(!1),setTimeout(()=>{e({style:Ue.ACCENT,text:"Submit",icon:d(j0,{})})},5e3)},children:[O(s,{direction:zf.ROW,children:[d("input",{type:"text",placeholder:"Full Name",name:"name",required:!0}),d("input",{type:"email",placeholder:"E-mail",name:"email",required:!0})]}),d(s,{children:d("textarea",{placeholder:"Message",name:"text",required:!0})}),d(s,{direction:zf.ROW,children:d("div",{children:d(Jt,{icon:t.icon,loading:n,style:t.style,type:Yi.SUBMIT,children:t.text})})})]})}),O("div",{className:"contact-method-list",children:[O("div",{className:"contact-method",children:[d("h2",{children:"Email"}),d(V0,{text:"albertoperez2192@gmail.com"})]}),O("div",{className:"contact-method",children:[d("h2",{children:"Cel Number"}),d(V0,{text:"+59898271493"})]}),O("div",{className:"contact-method social-media",children:[d("h2",{children:"Social Media"}),O("ul",{children:[d("li",{children:d("a",{href:"#linkedin",children:d(hS,{})})}),d("li",{children:d("a",{href:"#github",children:d(Hp,{})})}),d("li",{children:d("a",{href:"#twitter",children:d(dS,{})})})]})]})]})]})})}function g4(){return O("footer",{children:[d("div",{className:"footer-waves"}),O("div",{className:"footer-container",children:["Page created by Alberto P\xE9rez with react, typescript and sass. Source code in: ",d("a",{href:"https://github.com/perezalberto/perezalberto.github.io",children:"https://github.com/perezalberto/perezalberto.github.io"})]})]})}function y4(){return O(ai,{children:[d(H3,{}),O("main",{className:"container",children:[d(q3,{}),d(Z3,{}),d(d4,{}),d(m4,{})]}),d(g4,{})]})}function v4(){return d(At,{viewBox:"0 0 488 512",children:d("path",{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})})}function w4(){const[t,e]=C.exports.useState(""),[n,r]=C.exports.useState(""),i=qc(),s=sS();return C.exports.useEffect(()=>{i.authState.loggedIn&&s("/")},[i.authState.loggedIn]),d("div",{className:"login-page",children:O("div",{className:"login-container",children:[d("h1",{className:"login-title",children:"Login"}),O("form",{children:[i.authState.message?O("p",{className:"login-error",children:[d(xg,{}),d("span",{className:"ml-4",children:i.authState.message})]}):null,d("input",{type:"email",name:"email",id:"email",required:!0,onChange:o=>{e(o.target.value)}}),d("input",{type:"password",name:"password",id:"password",required:!0,onChange:o=>{r(o.target.value)}}),d(Jt,{onClick:()=>{i.authActions.loginWithEmailAndPassword(t,n)},style:Ue.PRIMARY,children:"login in"}),d(Jt,{onClick:()=>{i.authActions.loginWithGoogle()},style:Ue.RED,icon:d(v4,{}),children:"Login With Google"})]})]})})}function S4(){const{authState:t,authActions:e}=qc();return d("div",{className:"App",children:O(hR,{children:[O(mR,{children:[O("ul",{className:"nav-list",children:[d("li",{children:d(Ps,{to:"/#",children:"Home"})}),d("li",{children:d(Ps,{to:"/#about",children:"About"})}),d("li",{children:d(Ps,{to:"/#skills",children:"Skills"})}),d("li",{children:d(Ps,{to:"/#projects",children:"Projects"})}),d("li",{children:d(Ps,{to:"/#contact",children:"Contact"})})]}),O("ul",{className:"social-list",children:[d("li",{children:d("a",{href:"#linkedin",children:d(hS,{})})}),d("li",{children:d("a",{href:"#github",children:d(Hp,{})})}),d("li",{children:d("a",{href:"#twitter",children:d(dS,{})})})]}),d("ul",{className:"nav-list",children:t.loggedIn&&d("li",{children:d(Jt,{onClick:e.logout,style:Ue.PRIMARY,children:"logout"})})})]}),O(oR,{children:[d(rf,{path:"/",element:d(y4,{})}),d(rf,{path:"/login",element:d(w4,{})})]})]})})}const B0=L3({reducer:{auth:z3,projects:i4,skills:X3}});class Kc{constructor(e){he(this,"store");this.store=e}}class E4 extends Kc{constructor(n,r){super(n);he(this,"services");this.services=r.map(i=>new i(n))}start(){this.services.forEach(n=>n.start())}stop(){this.services.forEach(n=>n.stop())}}function _4({store:t,services:e}){const n=new E4(t,e);return C.exports.useEffect(()=>(n.start(),()=>n.stop()),[]),d(ai,{})}class I4 extends Kc{constructor(n){super(n);he(this,"controller");he(this,"unsubscribe");this.controller=Te.projectControllers().projectWithEventController()}start(){this.store.dispatch(Fn(K.LOADING)),this.unsubscribe=this.controller.onProjectChange(n=>{n.forEach(r=>{switch(r.type){case"added":this.store.dispatch(t4(r.data));break;case"modified":this.store.dispatch(n4(r.data));break;case"removed":this.store.dispatch(r4(r.data.id));break;default:throw new Error("Unexpected error")}}),this.store.dispatch(Fn(K.OK))}).unsubscribe}stop(){this.unsubscribe&&this.unsubscribe()}}class T4 extends Kc{constructor(n){super(n);he(this,"controller");he(this,"unsubscribe");this.controller=Te.skillControllers().skillWithEventController()}start(){this.store.dispatch(Un(K.LOADING)),this.unsubscribe=this.controller.onSkillChange(n=>{n.forEach(r=>{switch(r.type){case"added":this.store.dispatch(K3(r.data));break;case"modified":this.store.dispatch(Q3(r.data));break;case"removed":this.store.dispatch(Y3(r.data.id));break;default:throw new Error("Unexpected error")}}),this.store.dispatch(Un(K.OK))}).unsubscribe}stop(){this.unsubscribe&&this.unsubscribe()}}class k4 extends Kc{constructor(n){super(n);he(this,"controller");he(this,"unsubscribe");this.controller=Te.authControllers().AuthEventController()}start(){this.unsubscribe=this.controller.onAuthStateChange(n=>{n?this.store.dispatch(V3()):this.store.dispatch(B3())}).unsubscribe}stop(){this.unsubscribe&&this.unsubscribe()}}sd.createRoot(document.getElementById("root")).render(O(e2,{store:B0,children:[d(_4,{store:B0,services:[I4,T4,k4]}),d(S4,{})]}));
