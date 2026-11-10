(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,e=>e.startsWith(`/*`)?``:e).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function k(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=k(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=e(`itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function ge(e){return!!e||e===``}function _e(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=xe(e[i],t[i],n);return r}function ve(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&xe(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function ye(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?ve(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!xe(e[r],t[r],n))return!1}return String(e)===String(t)}function be(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function xe(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?be(e,t,n,_e):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:be(e,t,n,ye):String(e)===String(t))))}var A,Se=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&A&&(A.active?(this.parent=A,this.index=(A.scopes||(A.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){if(this._on>0&&--this._on===0){if(A===this)A=this.prevScope;else{let e=A;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ce(){return A}var j,we=new WeakSet,Te=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&(A.active?A.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,we.has(this)&&(we.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ve(this),Me(this);let e=j,t=M;j=this,M=!0;try{return this.fn()}finally{Ne(this),j=e,M=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ie(e);this.deps=this.depsTail=void 0,Ve(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?we.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pe(this)&&this.run()}get dirty(){return Pe(this)}},Ee=0,De,Oe;function ke(e,t=!1){e.flags|=8,t?(e.next=Oe,Oe=e):(e.next=De,De=e)}function Ae(){Ee++}function je(){if(--Ee>0)return;if(Oe){let e=Oe;for(Oe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;De;){let t=De;for(De=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Me(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ne(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ie(r),Le(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Pe(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Fe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Fe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===He)||(e.globalVersion=He,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pe(e))))return;e.flags|=2;let t=e.dep,n=j,r=M;j=e,M=!0;try{Me(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,M=r,Ne(e),e.flags&=-3}}function Ie(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ie(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Le(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var M=!0,Re=[];function ze(){Re.push(M),M=!1}function Be(){let e=Re.pop();M=e===void 0||e}function Ve(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var He=0,Ue=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},We=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!M||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Ue(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,Ge(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,He++,this.notify(e)}notify(e){Ae();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{je()}}};function Ge(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ge(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ke=new WeakMap,qe=Symbol(``),Je=Symbol(``),Ye=Symbol(``);function N(e,t,n){if(M&&j){let t=Ke.get(e);t||Ke.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new We),r.map=t,r.key=n),r.track()}}function Xe(e,t,n,r,i,a){let o=Ke.get(e);if(!o){He++;return}let s=e=>{e&&e.trigger()};if(Ae(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ye||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ye)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(qe)),f(e)&&s(o.get(Je)));break;case`delete`:i||(s(o.get(qe)),f(e)&&s(o.get(Je)));break;case`set`:f(e)&&s(o.get(qe))}}je()}function Ze(e){let t=P(e);return t===e||(N(t,`iterate`,Ye),Lt(e))?t:It(e)?Ft(e)?t.map(e=>Vt(Bt(e))):t.map(Vt):t.map(Bt)}function Qe(e){return N(e=P(e),`iterate`,Ye),e}function $e(e,t){return It(e)?Vt(Ft(e)?Bt(t):t):Bt(t)}var et={__proto__:null,[Symbol.iterator](){return tt(this,Symbol.iterator,e=>$e(this,e))},concat(...e){return Ze(this).concat(...e.map(e=>d(e)?Ze(e):e))},entries(){return tt(this,`entries`,e=>(e[1]=$e(this,e[1]),e))},every(e,t){return it(this,`every`,e,t,void 0,arguments)},filter(e,t){return it(this,`filter`,e,t,e=>e.map(e=>$e(this,e)),arguments)},find(e,t){return it(this,`find`,e,t,e=>$e(this,e),arguments)},findIndex(e,t){return it(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return it(this,`findLast`,e,t,e=>$e(this,e),arguments)},findLastIndex(e,t){return it(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return it(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ot(this,`includes`,e)},indexOf(...e){return ot(this,`indexOf`,e)},join(e){return Ze(this).join(e)},lastIndexOf(...e){return ot(this,`lastIndexOf`,e)},map(e,t){return it(this,`map`,e,t,void 0,arguments)},pop(){return st(this,`pop`)},push(...e){return st(this,`push`,e)},reduce(e,...t){return at(this,`reduce`,e,t)},reduceRight(e,...t){return at(this,`reduceRight`,e,t)},shift(){return st(this,`shift`)},some(e,t){return it(this,`some`,e,t,void 0,arguments)},splice(...e){return st(this,`splice`,e)},toReversed(){return Ze(this).toReversed()},toSorted(e){return Ze(this).toSorted(e)},toSpliced(...e){return Ze(this).toSpliced(...e)},unshift(...e){return st(this,`unshift`,e)},values(){return tt(this,`values`,e=>$e(this,e))}};function tt(e,t,n){let r=Qe(e),i=r[t],a=i.call(r);if(r!==e&&!Lt(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>nt(a.next(),n),i!==rt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>nt(a._next(),n)}return a}function nt(e,t){return e.done||(e.value=t(e.value)),e}var rt=Array.prototype;function it(e,t,n,r,i,a){let o=Qe(e),s=o!==e&&!Lt(e),c=o[t];if(c!==rt[t]){let t=c.apply(e,a);return s?Bt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,$e(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function at(e,t,n,r){let i=Qe(e),a=i!==e&&!Lt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=$e(e,t)),n.call(this,t,$e(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?$e(e,c):c}function ot(e,t,n){let r=P(e);N(r,`iterate`,Ye);let i=r[t](...n);return(i===-1||i===!1)&&Rt(n[0])?(n[0]=P(n[0]),r[t](...n)):i}function st(e,t,n=[]){ze(),Ae();let r=P(e)[t].apply(e,n);return je(),Be(),r}var ct=e(`__proto__,__v_isRef,__isVue`),lt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ut(e){_(e)||(e=String(e));let t=P(this);return N(t,`has`,e),t.hasOwnProperty(e)}var dt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?kt:Ot:i?Dt:Et).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=et[t]))return e;if(t===`hasOwnProperty`)return ut}let o=Reflect.get(e,t,F(e)?e:n);if((_(t)?lt.has(t):ct(t))||(r||N(e,`get`,t),i))return o;if(F(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Nt(e):e}return v(o)?r?Nt(o):jt(o):o}},ft=class extends dt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=It(i);if(!Lt(n)&&!It(n)&&(i=P(i),n=P(n)),!a&&F(i)&&!F(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,F(e)?e:r);return e===P(r)&&s&&(o?D(n,i)&&Xe(e,`set`,t,n,i):Xe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Xe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return _(t)&&lt.has(t)||N(e,`has`,t),n}ownKeys(e){return N(e,`iterate`,d(e)?`length`:qe),Reflect.ownKeys(e)}},pt=class extends dt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},mt=new ft,ht=new pt,gt=new ft(!0),_t=e=>e,vt=e=>Reflect.getPrototypeOf(e);function yt(e,t,n){return function(...r){let i=this.__v_raw,a=P(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?_t:t?Vt:Bt;return!t&&N(a,`iterate`,l?Je:qe),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function xt(e,t){let n={get(n){let r=this.__v_raw,i=P(r),a=P(n);e||(D(n,a)&&N(i,`get`,n),N(i,`get`,a));let{has:o}=vt(i),s=t?_t:e?Vt:Bt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&N(P(t),`iterate`,qe),t.size},has(t){let n=this.__v_raw,r=P(n),i=P(t);return e||(D(t,i)&&N(r,`has`,t),N(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=P(a),s=t?_t:e?Vt:Bt;return!e&&N(o,`iterate`,qe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:bt(`add`),set:bt(`set`),delete:bt(`delete`),clear:bt(`clear`)}:{add(e){let n=P(this),r=vt(n),i=P(e),a=!t&&!Lt(e)&&!It(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),Xe(n,`add`,a,a)),this},set(e,n){t||Lt(n)||It(n)||(n=P(n));let r=P(this),{has:i,get:a}=vt(r),o=i.call(r,e);o||=(e=P(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&Xe(r,`set`,e,n,s):Xe(r,`add`,e,n),this},delete(e){let t=P(this),{has:n,get:r}=vt(t),i=n.call(t,e);i||=(e=P(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Xe(t,`delete`,e,void 0,a),o},clear(){let e=P(this),t=e.size!==0,n=e.clear();return t&&Xe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=yt(r,e,t)}),n}function St(e,t){let n=xt(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(u(n,i)&&i in r?n:r,i,a)}var Ct={get:St(!1,!1)},wt={get:St(!1,!0)},Tt={get:St(!0,!1)},Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap;function At(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function jt(e){return It(e)?e:Pt(e,!1,mt,Ct,Et)}function Mt(e){return Pt(e,!1,gt,wt,Dt)}function Nt(e){return Pt(e,!0,ht,Tt,Ot)}function Pt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=At(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ft(e){return It(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Lt(e){return!!(e&&e.__v_isShallow)}function Rt(e){return e?!!e.__v_raw:!1}function P(e){let t=e&&e.__v_raw;return t?P(t):e}function zt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Bt=e=>v(e)?jt(e):e,Vt=e=>v(e)?Nt(e):e;function F(e){return e?e.__v_isRef===!0:!1}function Ht(e){return F(e)?e.value:e}var Ut={get:(e,t,n)=>t===`__v_raw`?e:Ht(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return F(i)&&!F(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Wt(e){return Ft(e)?e:new Proxy(e,Ut)}var Gt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new We(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=He-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return ke(this,!0),!0}get value(){let e=this.dep.track();return Fe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Kt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Gt(r,i,n)}var qt={},Jt=new WeakMap,Yt=void 0;function Xt(e,t=!1,n=Yt){if(n){let t=Jt.get(n);t||Jt.set(n,t=[]),t.push(e)}}function Zt(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Lt(e)||o===!1||o===0?Qt(e,1):Qt(e),m,g,_,v,y=!1,b=!1;if(F(e)?(g=()=>e.value,y=Lt(e)):Ft(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Ft(e)||Lt(e)),g=()=>e.map(e=>{if(F(e))return e.value;if(Ft(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){ze();try{_()}finally{Be()}}let t=Yt;Yt=m;try{return f?f(e,3,[v]):e(v)}finally{Yt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>Qt(e(),t)}let x=Ce(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{try{return e(...t)}finally{S()}}}let C=b?Array(e.length).fill(qt):qt,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>D(e,C[t])):D(t,C))){let e=Yt;ze();try{_&&_(),Yt=m;let e=[t,C===qt?void 0:b&&C[0]===qt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Yt=e,Be()}}}else m.run()}};return u&&u(w),m=new Te(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Xt(e,!1,m),_=m.onStop=()=>{let e=Jt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Jt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Qt(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,F(e))Qt(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)Qt(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{Qt(e,t,n)});else if(C(e)){for(let r in e)Qt(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Qt(e[r],t,n)}return e}function $t(e,t,n,r){try{return r?e(...r):e()}catch(e){en(e,t,n)}}function I(e,t,n,r){if(h(e)){let i=$t(e,t,n,r);return i&&y(i)&&i.catch(e=>{en(e,t,n,void 0,!0)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(I(e[a],t,n,r));return i}}function en(e,n,r,i=!0,a=!1){let o=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,o=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n&&!t.isUnmounted&&(!a||t.scope.active)){for(let t=0;t<n.length;t++)if(n[t](e,i,o)===!1)return}t=t.parent}if(s){ze(),$t(s,null,10,[e,i,o]),Be();return}}tn(e,r,o,i,c)}function tn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var L=[],nn=-1,rn=[],an=null,on=0,sn=Promise.resolve(),cn=null;function ln(e){let t=cn||sn;return e?t.then(this?e.bind(this):e):t}function un(e){let t=nn+1,n=L.length;for(;t<n;){let r=t+n>>>1,i=L[r],a=vn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function dn(e){if(!(e.flags&1)){let t=vn(e),n=L[L.length-1];!n||!(e.flags&2)&&t>=vn(n)?L.push(e):L.splice(un(t),0,e),e.flags|=1,fn()}}function fn(){cn||=sn.then(yn)}function pn(e){if(!d(e))an&&e.id===-1?an.splice(on+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);fn()}function mn(e,t,n,r=nn+1){for(;r<L.length;r++){let n=L[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;L.splice(r,1),r=e?r-1:nn,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function hn(e,t,n=0){if(rn.length){let e=rn,r=0;if(t){e=[];for(let i=0;i<rn.length;i++){let a=rn[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?rn[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>vn(e)-vn(t));if(rn.length=r,an){for(let e=0;e<i.length;e++)an.push(i[e]);return}for(an=i,on=0;on<an.length;on++){let e=an[on];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}an=null,on=0}}var gn=!1;function _n(e,t){if(gn){e();return}let n=t===void 0?void 0:new Set(rn);e(),gn=!0;try{mn(void 0,t),hn(void 0,n,t)}finally{gn=!1}}var vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yn(e){try{for(nn=0;nn<L.length;nn++){let e=L[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$t(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<L.length;nn++){let e=L[nn];e&&(e.flags&=-2)}nn=-1,L.length=0,hn(e),cn=null,(L.length||rn.length)&&yn(e)}}var bn=null,xn=null;function Sn(e){let t=bn;return bn=e,xn=e&&e.type.__scopeId||null,t}function Cn(e,t=bn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Fi(-1);let i=Sn(t),a=ji.length,o;try{o=e(...n)}finally{for(let e=ji.length;e>a;e--)Ni();Sn(i),r._d&&Fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wn(e,t,n,r){let i=e;if(r===`beforeMount`)e._mount=e;else if(r===`beforeUpdate`){let n=t&&t._mount;n&&(n._latest=e,e._mount=n)}else if(r===`mounted`){let t=e._latest;e._mount=e._latest=void 0,t&&(i=t,t._mount=void 0)}let a=i.dirs,o=t&&t.dirs;for(let c=0;c<a.length;c++){let l=a[c];o?l.oldValue=o[c].value:r===`mounted`&&l.oldValue!==void 0&&(l=s({},l,{oldValue:void 0}));let u=l.dir[r];u&&(ze(),I(u,n,8,[e.el,l,i,t]),Be())}}function Tn(e,t){if(W){let n=W.provides,r=W.parent&&W.parent.provides;r===n&&(n=W.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){let r=na();if(r||Lr){let i=Lr?Lr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Dn=Symbol.for(`v-scx`),On=()=>En(Dn);function kn(e,t,n){return An(e,t,n)}function An(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ca){if(c===`sync`){let e=On();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=W;u.call=(e,t,n)=>I(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{e.i=p,z(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():dn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Zt(e,n,u);return ca&&(f?f.push(h):d&&h()),h}function jn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Mn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=aa(this),s=An(i,a.bind(r),n);return o(),s}function Mn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Nn=Symbol(`_vte`),Pn=e=>e.__isTeleport,Fn=Symbol(`_leaveCb`);function In(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ki){t=n;break}}return t}function Ln(e){if(!qn(e))return Pn(e.type)&&e.children?In(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Rn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Rn(Pn(n.type)&&Ln(n)||n,t)}else if(e.shapeFlag&128){let n=e.suspense;if(n){let e=n.isHydrating?n.pendingBranch:n.activeBranch;e&&Rn(e,t.clone(e))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===B&&d(e.children)){let n=Wr(e.children,!1);n&&Rn(n,t)}}function zn(e){if(e.component)return zn(e.component.subTree);if(e.type===B){let t=d(e.children)&&Wr(e.children,!1);return t?zn(t):void 0}if(e.type!==ki)return e}function Bn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Vn(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Hn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Un=new WeakMap;function Wn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Wn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Kn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Wn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ga(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=P(v),b=v===t?i:e=>!Hn(_,e)&&u(y,e),x=(e,t)=>!(t&&Hn(_,t));if(m!=null&&m!==p){if(Gn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(F(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))$t(p,f,12,[l,_]);else{let t=g(p),n=F(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Un.delete(e)};t.id=-1,Un.set(e,t),z(t,r)}else Gn(e),i()}}}function Gn(e){let t=Un.get(e);t&&(t.flags|=8,Un.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Kn=e=>!!e.type.__asyncLoader,qn=e=>e.type.__isKeepAlive;function Jn(e,t){Xn(e,`a`,t)}function Yn(e,t){Xn(e,`da`,t)}function Xn(e,t,n=W){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Qn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)qn(e.parent.vnode)&&Zn(r,t,n,e),e=e.parent}}function Zn(e,t,n,r){let i=Qn(t,e,r,!0),a=Qn(`um`,()=>c(r[t],i),n);a.flags=16}function Qn(e,t,n=W,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{ze();let i=aa(n),a=I(t,n,e,r);return i(),Be(),a};return r?i.unshift(a):i.push(a),a}}var $n=e=>(t,n=W)=>{ca&&e!==`sp`||Qn(e,(...e)=>t(...e),n)},er=$n(`bm`),tr=$n(`m`),nr=$n(`bu`),rr=$n(`u`),ir=$n(`bum`),ar=$n(`um`),or=$n(`sp`),sr=$n(`rtg`),cr=$n(`rtc`);function lr(e,t=W){Qn(`ec`,e,t)}var ur=`components`;function dr(e,t){return pr(ur,e,!0,t)||e}var fr=Symbol.for(`v-ndc`);function pr(e,t,n=!0,r=!1){let i=bn||W;if(i){let n=i.type;if(e===ur){let e=_a(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=mr(i[e]||n[e],t)||mr(i.appContext[e],t);return!a&&r?n:a}}function mr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}var hr=e=>e?sa(e)?ga(e):hr(e.parent):null,gr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Tr(e),$forceUpdate:e=>e.f||=()=>{dn(e.update)},$nextTick:e=>e.n||=ln.bind(e.proxy),$watch:e=>jn.bind(e)}),_r=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),vr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(_r(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else br&&(s[n]=0)}let d=gr[n],f,p;if(d)return n===`$attrs`&&N(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return _r(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||_r(n,c)||u(o,c)||u(i,c)||u(gr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function yr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var br=!0;function xr(e){let t=Tr(e),n=e.proxy,i=e.ctx;br=!1,t.beforeCreate&&Cr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&Sr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=jt(t))}if(br=!0,o)for(let e in o){let t=o[e],a=ya({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)wr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Tn(t,e[t])})}f&&Cr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(er,p),O(tr,m),O(nr,g),O(rr,_),O(Jn,y),O(Yn,b),O(lr,T),O(cr,te),O(sr,ne),O(ir,S),O(ar,w),O(or,re),d(E)){if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&Vn(e)}function Sr(e,t,n=r){d(e)&&(e=Ar(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?En(r.from||n,r.default,!0):En(r.from||n):En(r),F(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Cr(e,t,n){I(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function wr(e,t,n,r){let i=r.includes(`.`)?Mn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&kn(i,n)}else if(h(e))kn(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>wr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&kn(i,r,e)}}}function Tr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Er(c,e,o,!0)),Er(c,t,o)),v(t)&&a.set(t,c),c}function Er(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Er(e,a,n,!0),i&&i.forEach(t=>Er(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Dr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Dr={data:Or,props:Mr,emits:Mr,methods:jr,computed:jr,beforeCreate:R,created:R,beforeMount:R,mounted:R,beforeUpdate:R,updated:R,beforeDestroy:R,beforeUnmount:R,destroyed:R,unmounted:R,activated:R,deactivated:R,errorCaptured:R,serverPrefetch:R,components:jr,directives:jr,watch:Nr,provide:Or,inject:kr};function Or(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function kr(e,t){return jr(Ar(e),Ar(t))}function Ar(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function R(e,t){return e?[...new Set([].concat(e,t))]:t}function jr(e,t){return e?s(Object.create(null),e,t):t}function Mr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),yr(e),yr(t??{})):t}function Nr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=R(e[r],t[r]);return n}function Pr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Fr=0;function Ir(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Pr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Fr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:xa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||U(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ga(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(I(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Lr;Lr=l;try{return e()}finally{Lr=t}}};return l}}var Lr=null,Rr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function zr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Rr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&I(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,I(u,e,6,a)}}var Br=new WeakMap;function Vr(e,t,n=!1){let r=n?Br:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Vr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Hr(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Ur(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Sn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=qi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Gr(c)}}catch(t){ji.length=0,en(t,e,1),v=U(ki)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Kr(y,a)),b=Wi(b,y,!1,!0))}return n.dirs&&(b=Wi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Rn(Pn(b.type)&&Ln(b)||b,n.transition),v=b,Sn(_),v}function Wr(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Ri(r)){if(r.type!==ki||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Gr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Kr=(e,t)=>{let n={};for(let r in e)o(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function qr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Jr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Yr(o,r,n)&&!Hr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Jr(r,o,l):!!o;return!1}function Jr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!u(e,a)||Yr(t,e,a)&&!Hr(n,a))return!0}return!1}function Yr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!xe(r,i):r!==i}function Xr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Zr={},Qr=()=>Object.create(Zr),$r=e=>Object.getPrototypeOf(e)===Zr;function ei(e,t,n,r=!1){let i={},a=Qr();e.propsDefaults=Object.create(null),ni(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Mt(i):e.type.props?i:a,e.attrs=a}function ti(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=P(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Hr(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ri(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ni(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(u(t,a)||(r=E(a))!==a&&u(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ri(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&u(t,e)||(delete a[e],l=!0)}l&&Xe(e.attrs,`set`,``)}function ni(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Hr(e.emitsOptions,t)||t in i&&l===i[t]||(i[t]=l,s=!0)}if(o){let n=P(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ri(a,n,s,i[s],e,!u(i,s))}}return s}function ri(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=aa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var ii=new WeakMap;function ai(e,r,i=!1){let a=i?ii:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ai(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);oi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(oi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function oi(e){return e[0]!==`$`&&!ee(e)}var si=e=>e===`_`||e===`_ctx`||e===`$stable`,ci=e=>d(e)?e.map(qi):[qi(e)],li=(e,t,n)=>{if(t._n)return t;let r=Cn((...e)=>ci(t(...e)),n);return r._c=!1,r},ui=(e,t,n)=>{let r=e._ctx;for(let n in e){if(si(n))continue;let i=e[n];if(h(i))t[n]=li(n,i,r);else if(i!=null){let e=ci(i);t[n]=()=>e}}},di=(e,t)=>{let n=ci(t);e.slots.default=()=>n},fi=(e,t,n)=>{for(let r in t)(n||!si(r))&&(e[r]=t[r])},pi=(e,t,n)=>{let r=e.slots=Qr();if(e.vnode.shapeFlag&32){let e=t._;e?(fi(r,t,n),n&&O(r,`_`,e,!0)):ui(t,r)}else t&&di(e,t)},mi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:fi(a,n,r):(o=!n.$stable,ui(n,a)),s=n}else n&&(di(e,n),s={default:1});if(o)for(let e in a)!si(e)&&s[e]==null&&delete a[e]},z=Di;function hi(e){return gi(e)}function gi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!zi(e,t)&&(i=ye(e),k(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case Oi:y(e,t,r,i);break;case ki:b(e,t,r,i);break;case Ai:e??x(t,r,i,s);break;case B:ae(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?D(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,xe)}d!=null&&a?Wn(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&Wn(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,_i(e,a),s,u),_&&wn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Zi(f,r,e)}_&&wn(e,null,r,`beforeMount`);let v=yi(i,g);v?g.beforeEnter(d):g&&!g.persisted&&(d[Ei]=!0),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&z(()=>{try{f&&Zi(f,r,e),v&&g.enter(d),_&&wn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ti(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ji(e[l]):qi(e[l]);v(null,c,t,n,r,i,a,o,s)}},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&vi(r,!1),(g=h.onVnodeBeforeUpdate)&&Zi(g,r,n,e),f&&wn(n,e,r,`beforeUpdate`),r&&vi(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,_i(n,a),o):s||de(e,n,l,null,r,i,_i(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&z(()=>{g&&Zi(g,r,n,e),f&&wn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||wi(c),d=u&&(c.type===B||!zi(c,l)||c.shapeFlag&198)?m(u):n;v(c,l,d,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&bi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=ta(e,r,i);if(qn(e)&&(s.ctx.renderer=xe),la(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o,a),!e.el){let r=s.subTree=U(ki);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(qr(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,ue(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Si(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{let t=()=>{e.job.flags&8||(i&&i.pendingBranch?z(t,i):l())};t.flags=48,z(t,i)});return}}let u=t,d;vi(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Zi(d,s,t,c),vi(e,!0);let f=Ur(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el||wi(p)),ye(p),e,i,a),t.el=f.el,u===null&&Xr(e,f.el),r&&z(r,i),(d=t.props&&t.props.onVnodeUpdated)&&z(()=>Zi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Kn(t);if(vi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Zi(o,d,t),vi(e,!0),s&&Se){let t=()=>{e.subTree=Ur(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ur(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&z(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;z(()=>Zi(o,d,e),i)}(t.shapeFlag&256||d&&Kn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&z(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Te(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>dn(u),vi(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ti(e,t.props,r,n),mi(e,t.children,n),ze(),mn(e),Be()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?Ji(t[p]):qi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ji(t[u]):qi(t[u]);if(zi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ji(t[p]):qi(t[p]);if(zi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ji(t[u]):qi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)k(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ji(t[u]):qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){k(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&zi(n,t[_])){i=_;break}i===void 0?k(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?xi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||wi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)me(e.component.subTree,t,n,r);else if(d&128)e.suspense.move(t,n,r);else if(d&64)c.move(e,t,n,xe);else if(c===B){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n)}else if(c===Ai)S(e,t,n);else if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[Fn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),z(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Fn];a._isLeaving&&a[Fn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},k=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(ze(),Wn(s,null,n,e,!0),Be()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256&&t.ctx.deactivate(e))return;let h=u&1&&f,g=!Kn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Zi(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&wn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==B||d>0&&d&64)?ve(l,t,n,!1,!0):(a===B&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&z(()=>{_&&Zi(_,t,e),h&&wn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e,a=t===B;if(a&&!i){ge(n,r);return}if(t===Ai){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let o=a?zn(e):e,c=()=>{a?m(n)&&ge(n,r):s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(o&&o.shapeFlag&1&&i&&!i.persisted){let{leave:e,delayLeave:t}=i,n=o.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ci(c),Ci(l),r&&oe(r),i.stop(),a?(a.flags|=8,k(o,e,t,n)):o&&(o.transition=e.vnode.transition,k(o,e,t,n)),s&&z(s,t);let u=()=>{e.isUnmounted=!0};u.flags=16,z(u,t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)k(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Nn];return n?h(n):t},be=(e,t,n)=>{_n(()=>{e==null?t._vnode&&k(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:ea())},xe={p:v,um:k,m:me,r:he,mt:O,mc:T,pc:de,pbc:E,n:ye,o:e},A,Se;return i&&([A,Se]=i(xe)),{render:be,hydrate:A,createApp:Ir(be,A)}}function _i({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function vi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ji(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&bi(t,a)),a.type===Oi&&(a.patchFlag===-1&&(a=i[e]=Ji(a)),a.el=t.el),a.type===ki&&!a.el&&(a.el=t.el)}}function xi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Si(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function Ci(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function wi(e){if(e.placeholder)return e.placeholder;let t=e.component;if(t)return wi(t.subTree);let n=e.suspense;return n&&n.activeBranch?wi(n.activeBranch):null}var Ti=e=>e.__isSuspense,Ei=Symbol(`_deferredEnter`);function Di(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):pn(e)}var B=Symbol.for(`v-fgt`),Oi=Symbol.for(`v-txt`),ki=Symbol.for(`v-cmt`),Ai=Symbol.for(`v-stc`),ji=[],V=null;function Mi(e=!1){ji.push(V=e?null:[])}function Ni(){ji.pop(),V=ji[ji.length-1]||null}var Pi=1;function Fi(e,t=!1){Pi+=e,e<0&&V&&t&&(V.hasOnce=!0)}function Ii(e){return e.dynamicChildren=Pi>0?V||n:null,Ni(),Pi>0&&V&&V.push(e),e}function Li(e,t,n,r,i,a){return Ii(H(e,t,n,r,i,a,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function zi(e,t){return e.type===t.type&&e.key===t.key}var Bi=({key:e})=>e??null,Vi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||F(e)||h(e)?{i:bn,r:e,k:t,f:!!n}:e);function H(e,t=null,n=null,r=0,i=null,a=e===B?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Vi(t),scopeId:xn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bn};return s?(Yi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Pi>0&&!o&&V&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&V.push(c),c}var U=Hi;function Hi(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==fr||(e=ki),Ri(e)){let r=Wi(e,t,!0);return n&&Yi(r,n),Pi>0&&!a&&V&&(r.shapeFlag&6?V[V.indexOf(e)]=r:V.push(r)),r.patchFlag=-2,r}if(va(e)&&(e=e.__vccOpts),t){t=Ui(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=k(e)),v(n)&&(Rt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Ti(e)?128:Pn(e)?64:v(e)?4:h(e)?2:0;return H(e,t,n,r,i,o,a,!0)}function Ui(e){return e?Rt(e)?s({},e):$r(e)?s({},e[pa]||e):e:null}function Wi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Xi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Bi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Vi(t)):[a,Vi(t)]:Vi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wi(e.ssContent),ssFallback:e.ssFallback&&Wi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Rn(u,c.clone(u)),u}function Gi(e=` `,t=0){return U(Oi,null,e,t)}function Ki(e,t){let n=U(Ai,null,e);return n.staticCount=t,n}function qi(e){return e==null||typeof e==`boolean`?U(ki):d(e)?U(B,null,e.slice()):Ri(e)?Ji(e):U(Oi,null,String(e))}function Ji(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wi(e)}function Yi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Yi(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!$r(t)?t._ctx=bn:r===3&&bn&&(bn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){Yi(e,{default:t});return}t={default:t,_ctx:bn},n=32}else t=String(t),r&64?(n=16,t=[Gi(t)]):n=8;e.children=t,e.shapeFlag|=n}function Xi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=k([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Zi(e,t,n,r=null){I(e,t,7,[n,r])}var Qi=Pr(),$i=0;function ea(){return $i}function ta(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Qi,o={uid:$i++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Se(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ai(i,a),emitsOptions:Vr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=zr.bind(null,o),e.ce&&e.ce(o),o}var W=null,na=()=>W||bn,ra,ia;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ra=t(`__VUE_INSTANCE_SETTERS__`,e=>W=e),ia=t(`__VUE_SSR_SETTERS__`,e=>ca=e)}var aa=e=>{let t=W;return ra(e),e.scope.on(),()=>{e.scope.off(),ra(t)}},oa=()=>{W&&W.scope.off(),ra(null)};function sa(e){return e.vnode.shapeFlag&4}var ca=!1;function la(e,t=!1,n=!1){t&&ia(t);let{props:r,children:i}=e.vnode,a=sa(e);ei(e,r,a,t),pi(e,i,n||t);let o=a?ua(e,t):void 0;return t&&ia(!1),o}function ua(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vr);let{setup:r}=n;if(r){ze();let n=e.setupContext=r.length>1?ha(e):null,i=aa(e),a=$t(r,e,0,[e.props,n]),o=y(a);if(Be(),i(),(o||e.sp)&&!Kn(e)&&Vn(e),o){if(a.then(oa,oa),t)return a.then(n=>{ia(!0);try{da(e,n,t)}finally{ia(!1)}}).catch(t=>{en(t,e,0,void 0,!0),e.ssrRender=(e,t)=>t(`<!---->`)});e.asyncDep=a}else da(e,a,t)}else fa(e,t)}function da(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Wt(t)),fa(e,n)}function fa(e,t,n){let i=e.type;e.render||=i.render||r;{let t=aa(e);ze();try{xr(e)}finally{Be(),t()}}}var pa=Symbol(),ma={get(e,t){return N(e,`get`,``),t===pa?e:e[t]}};function ha(e){return{attrs:new Proxy(e.attrs,ma),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ga(e){return e.exposed?e.exposeProxy||=new Proxy(Wt(zt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gr)return gr[n](e)},has(e,t){return t in e||t in gr}}):e.proxy}function _a(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function va(e){return h(e)&&`__vccOpts`in e}var ya=(e,t)=>Kt(e,t,ca);function ba(e,t,n){try{Fi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ri(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),U(e,t,n))}finally{Fi(1)}}var xa=`3.5.45`,Sa=void 0,Ca=typeof window<`u`&&window.trustedTypes;if(Ca)try{Sa=Ca.createPolicy(`vue`,{createHTML:e=>e})}catch{}var wa=Sa?e=>Sa.createHTML(e):e=>e,Ta=`http://www.w3.org/2000/svg`,Ea=`http://www.w3.org/1998/Math/MathML`,Da=typeof document<`u`?document:null,Oa=Da&&Da.createElement(`template`),ka={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Da.createElementNS(Ta,e):t===`mathml`?Da.createElementNS(Ea,e):n?Da.createElement(e,{is:n}):Da.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Da.createTextNode(e),createComment:e=>Da.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Da.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Oa.innerHTML=wa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Oa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Aa=Symbol(`_vtc`);function ja(e,t,n){let r=e[Aa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ma=Symbol(`_vod`),Na=Symbol(`_vsh`),Pa=Symbol(``),Fa=/(?:^|;)\s*display\s*:/;function Ia(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ra(r,t,``)}else for(let e in t)n[e]??Ra(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ra(r,i,``):Ha(e,i,!g(t)&&t?t[i]:void 0,o)||Ra(r,i,o)}}else if(i){if(t!==n){let e=r[Pa];e&&(n+=`;`+e),r.cssText=n,a=Fa.test(n)}}else t&&e.removeAttribute(`style`);Ma in e&&(i&&t===n||(e[Ma]=a?r.display:``),e[Na]&&(r.display=`none`))}var La=/\s*!important$/;function Ra(e,t,n){if(d(n))n.forEach(n=>Ra(e,t,n));else if(n??=``,t.startsWith(`--`))La.test(n)?e.setProperty(t,n.replace(La,``),`important`):e.setProperty(t,n);else{let r=Va(e,t);La.test(n)?e.setProperty(E(r),n.replace(La,``),`important`):e[r]=n}}var za=[`Webkit`,`Moz`,`ms`],Ba={};function Va(e,t){let n=Ba[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return Ba[t]=r;r=ie(r);for(let n=0;n<za.length;n++){let i=za[n]+r;if(i in e)return Ba[t]=i}return t}function Ha(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ua=`http://www.w3.org/1999/xlink`;function Wa(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ua,t.slice(6,t.length)):e.setAttributeNS(Ua,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ga(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?wa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ka(e,t,n,r){e.addEventListener(t,n,r)}function qa(e,t,n,r){e.removeEventListener(t,n,r)}var Ja=Symbol(`_vei`);function Ya(e,t,n,r,i=null){let a=e[Ja]||(e[Ja]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Qa(t);r?Ka(e,n,a[t]=no(r,i),s):o&&(qa(e,n,o,s),a[t]=void 0)}}var Xa=/(Once|Passive|Capture)$/,Za=/^on:?(?:Once|Passive|Capture)$/;function Qa(e){let t,n;for(;(n=e.match(Xa))&&!Za.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var $a=0,eo=Promise.resolve(),to=()=>$a||=(eo.then(()=>$a=0),Date.now());function no(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&I(e,t,5,a)}}else I(r,t,5,[e])};return n.value=e,n.attached=to(),n}var ro=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,io=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?ja(e,r,c):t===`style`?Ia(e,n,r):a(t)?o(t)||Ya(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):ao(e,t,r,c))?(Ga(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Wa(e,t,r,c,s,t!==`value`)):e._isVueCE&&(oo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ga(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Wa(e,t,r,c))};function ao(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ro(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ro(t)&&g(n)?!1:t in e}function oo(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var so=s({patchProp:io},ka),co;function lo(){return co||=hi(so)}var uo=((...e)=>{let t=lo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=po(e);if(!r)return;let i=t._component;h(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,fo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function fo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function po(e){return g(e)?document.querySelector(e):e}var mo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ho={},go={class:`footer`},_o={class:`utilities`},vo={href:`https://github.com/unemployedyuri/quizlqwa.dev`},yo={href:`https://vuejs.org/`},bo={href:`https://tailwindcss.com/`},xo={href:`https://www.typescriptlang.org/`};function So(e,t){let n=dr(`font-awesome-icon`);return Mi(),Li(`div`,go,[t[0]||=H(`div`,{class:`title`},[H(`h4`,null,`emi ♡`)],-1),H(`div`,_o,[H(`a`,vo,[U(n,{id:`github-footer`,icon:`fa-brands fa-github`})]),H(`a`,yo,[U(n,{id:`vue-footer`,icon:`fa-brands fa-vuejs`})]),H(`a`,bo,[U(n,{id:`tailwind-footer`,icon:`fa-brands fa-tailwind-css`})]),H(`a`,xo,[U(n,{id:`typescript-footer`,icon:`fa-brands fa-typescript`})])])])}var Co=mo(ho,[[`render`,So]]),wo={class:`grid content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3`},To={class:`card`},Eo={controls:``},Do=[`src`],Oo={class:`card`},ko={class:`list`},Ao=[`src`],jo={class:`list`},Mo=[`src`],No={class:`list`},Po=[`src`],Fo={class:`card`},Io={class:`list`},Lo={class:`list`},Ro={class:`list`},zo={class:`list`},Bo=Bn({__name:`Body`,setup(e){return(e,t)=>{let n=dr(`font-awesome-icon`);return Mi(),Li(`div`,wo,[H(`div`,To,[t[3]||=H(`h3`,{id:`the`,class:`card-title`},`The`,-1),t[4]||=H(`h3`,{class:`card-title`},`Welcome to my website`,-1),t[5]||=H(`img`,{src:`https://cdn.discordapp.com/attachments/756183563367612509/1569142684130480178/silly-dog.gif?ex=6af26181&is=6af11001&hm=1fd89d97ed00d69a8cfe95970f5f52745de76b85f6415171523a91f1d96818f0&`},null,-1),H(`audio`,Eo,[H(`source`,{src:`${Ht(`/`)}awesome.mp3`},null,8,Do)]),H(`p`,null,[U(n,{icon:`fa-venus`}),t[0]||=Gi(` Emily ~ she/her`,-1)]),H(`p`,null,[U(n,{icon:`fa-paintbrush`}),t[1]||=Gi(` Video editor & beginner dev`,-1)]),H(`p`,null,[U(n,{icon:`fa-code`}),t[2]||=Gi(` TypeScript, Java, Python`,-1)])]),t[17]||=Ki(`<div class="card"><h3 class="card-title">Things I enjoy:</h3><hr><p>- Video editing</p><p>- Yuri !!!!!</p><p>- and girls</p><p>- Bocchi the Rock!</p><p>- Lycoris Recoil</p><p>- Girls Band Cry</p><p>- Minecraft</p><p>- Geometry Dash</p><p>- Fortnite</p><p>- Hoyoslop</p></div>`,1),H(`div`,Oo,[t[9]||=H(`h3`,{class:`card-title`},`Stuff I worked on`,-1),t[10]||=H(`hr`,null,null,-1),H(`div`,ko,[H(`img`,{class:`pride-flag`,src:`${Ht(`/`)}16gdps.png`,alt:`1.6 logo`},null,8,Ao),t[6]||=H(`a`,{class:`card-text card-link`,href:`https://gdps.wayveyx.com/`},`1.6 GDPS (site frontend)`,-1)]),H(`div`,jo,[H(`img`,{class:`pride-flag`,src:`${Ht(`/`)}19gdps.png`,alt:`1.9 logo`},null,8,Mo),t[7]||=H(`a`,{class:`card-text card-link`,href:`https://19gdps.com/`},`1.9 GDPS (in-game features)`,-1)]),H(`div`,No,[H(`img`,{class:`pride-flag`,src:`${Ht(`/`)}favicon.ico`,alt:`1.9 logo`},null,8,Po),t[8]||=H(`a`,{class:`card-text card-link`,href:`https://quizlqwa.dev/`},`quizlqwa.dev (this site)`,-1)])]),H(`div`,Fo,[t[15]||=H(`h3`,{class:`card-title`},`My socials`,-1),t[16]||=H(`hr`,null,null,-1),H(`div`,Io,[U(n,{id:`github`,icon:`fa-brands fa-github`}),t[11]||=H(`a`,{class:`card-text card-link`,href:`https://github.com/unemployedyuri`},`@unemployedyuri`,-1)]),H(`div`,Lo,[U(n,{id:`twitter`,icon:`fa-brands fa-twitter`}),t[12]||=H(`a`,{class:`card-text card-link`,href:`https://x.com/unemployedyuri`},`@unemployedyuri`,-1)]),H(`div`,Ro,[U(n,{id:`discord`,icon:`fa-brands fa-discord`}),t[13]||=H(`a`,{class:`card-text card-link`,href:`https://discord.gg/PrwXhTqwws`},`my server :3`,-1)]),H(`div`,zo,[U(n,{id:`youtube`,icon:`fa-brands fa-youtube`}),t[14]||=H(`a`,{class:`card-text card-link`,href:`https://www.youtube.com/@sumire1107`},`Sumire1107`,-1)])])])}}}),Vo={class:`banner`},Ho=[`src`],Uo=Bn({__name:`Banner`,setup(e){return(e,t)=>(Mi(),Li(`div`,Vo,[H(`img`,{class:`pride-flag`,src:`${Ht(`/`)}pride-flag.svg`,alt:`Pride Flag`},null,8,Ho),t[0]||=H(`p`,null,`Much love to all my queer friends !!`,-1)]))}}),Wo={class:`app`},Go={class:`body`},Ko=Bn({__name:`App`,setup(e){return(e,t)=>(Mi(),Li(`div`,Wo,[U(Uo),H(`div`,Go,[U(Bo)]),U(Co)]))}});function qo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Jo(e){if(Array.isArray(e))return e}function Yo(e){if(Array.isArray(e))return qo(e)}function Xo(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Zo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ss(r.key),r)}}function Qo(e,t,n){return t&&Zo(e.prototype,t),n&&Zo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $o(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ls(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function G(e,t,n){return(t=ss(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function es(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ts(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ns(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rs(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function is(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?is(Object(n),!0).forEach(function(t){G(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):is(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function as(e,t){return Jo(e)||ts(e,t)||ls(e,t)||ns()}function q(e){return Yo(e)||es(e)||ls(e)||rs()}function os(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ss(e){var t=os(e,`string`);return typeof t==`symbol`?t:t+``}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},cs(e)}function ls(e,t){if(e){if(typeof e==`string`)return qo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qo(e,t):void 0}}var us=function(){},ds={},fs={},ps=null,ms={mark:us,measure:us};try{typeof window<`u`&&(ds=window),typeof document<`u`&&(fs=document),typeof MutationObserver<`u`&&(ps=MutationObserver),typeof performance<`u`&&(ms=performance)}catch{}var hs=(ds.navigator||{}).userAgent,gs=hs===void 0?``:hs,_s=ds,J=fs,vs=ps,ys=ms;_s.document;var bs=!!J.documentElement&&!!J.head&&typeof J.addEventListener==`function`&&typeof J.createElement==`function`,xs=~gs.indexOf(`MSIE`)||~gs.indexOf(`Trident/`),Ss,Cs=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,ws=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ts={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Es={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ds=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Y=`classic`,Os=`duotone`,ks=`sharp`,As=`sharp-duotone`,js=`chisel`,Ms=`etch`,Ns=`graphite`,Ps=`jelly`,Fs=`jelly-duo`,Is=`jelly-fill`,Ls=`mosaic`,Rs=`notdog`,zs=`notdog-duo`,Bs=`pixel`,Vs=`slab`,Hs=`slab-duo`,Us=`slab-press`,Ws=`slab-press-duo`,Gs=`thumbprint`,Ks=`utility`,qs=`utility-duo`,Js=`utility-fill`,Ys=`vellum`,Xs=`whiteboard`,Zs=`Classic`,Qs=`Duotone`,$s=`Sharp`,ec=`Sharp Duotone`,tc=`Chisel`,nc=`Etch`,rc=`Graphite`,ic=`Jelly`,ac=`Jelly Duo`,oc=`Jelly Fill`,sc=`Mosaic`,cc=`Notdog`,lc=`Notdog Duo`,uc=`Pixel`,dc=`Slab`,fc=`Slab Duo`,pc=`Slab Press`,mc=`Slab Press Duo`,hc=`Thumbprint`,gc=`Utility`,_c=`Utility Duo`,vc=`Utility Fill`,yc=`Vellum`,bc=`Whiteboard`,xc=[Y,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs];Ss={},G(G(G(G(G(G(G(G(G(G(Ss,Y,Zs),Os,Qs),ks,$s),As,ec),js,tc),Ms,nc),Ns,rc),Ps,ic),Fs,ac),Is,oc),G(G(G(G(G(G(G(G(G(G(Ss,Ls,sc),Rs,cc),zs,lc),Bs,uc),Vs,dc),Hs,fc),Us,pc),Ws,mc),Gs,hc),Ks,gc),G(G(G(G(Ss,qs,_c),Js,vc),Ys,yc),Xs,bc);var Sc={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Cc={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},wc=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Tc={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Ec=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Dc={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Oc=[`kit`];G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var kc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Ac={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},jc={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Mc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Nc,Pc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Fc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Nc={},G(G(G(G(G(G(G(G(G(G(Nc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),G(G(G(G(G(G(G(G(G(G(Nc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),G(G(G(G(Nc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ic={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Lc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Rc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},zc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Fc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Bc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Vc=[1,2,3,4,5,6,7,8,9,10],Hc=Vc.concat([11,12,13,14,15,16,17,18,19,20]),Uc=[].concat(q(Object.keys(Lc)),Bc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Pc.GROUP,Pc.SWAP_OPACITY,Pc.PRIMARY,Pc.SECONDARY],Vc.map(function(e){return`${e}x`}),Hc.map(function(e){return`w-${e}`})),Wc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Gc=`___FONT_AWESOME___`,Kc=16,qc=`fa`,Jc=`svg-inline--fa`,Yc=`data-fa-i2svg`,Xc=`data-fa-pseudo-element`,Zc=`data-fa-pseudo-element-pending`,Qc=`data-prefix`,$c=`data-icon`,el=`fontawesome-i2svg`,tl=`async`,nl=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],rl=[`::before`,`::after`,`:before`,`:after`],il=function(){try{return!0}catch{return!1}}();function al(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Y]}})}var ol=K({},Ts);ol[Y]=K(K(K(K({},{"fa-duotone":`duotone`}),Ts[Y]),Dc.kit),Dc[`kit-duotone`]);var sl=al(ol),cl=K({},Tc);cl[Y]=K(K(K(K({},{duotone:`fad`}),cl[Y]),Mc.kit),Mc[`kit-duotone`]);var ll=al(cl),ul=K({},Rc);ul[Y]=K(K({},ul[Y]),jc.kit);var dl=al(ul),fl=K({},Ic);fl[Y]=K(K({},fl[Y]),kc.kit),al(fl);var pl=Cs,ml=`fa-layers-text`,hl=ws;al(K({},Sc));var gl=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],_l=Es,vl=[].concat(q(Oc),q(Uc)),yl=_s.FontAwesomeConfig||{};function bl(e){var t=J.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function xl(e){return e===``?!0:e===`false`?!1:e===`true`||e}J&&typeof J.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=as(e,2),n=t[0],r=t[1],i=xl(bl(n));i!=null&&(yl[r]=i)});var Sl={styleDefault:`solid`,familyDefault:Y,cssPrefix:qc,replacementClass:Jc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yl.familyPrefix&&(yl.cssPrefix=yl.familyPrefix);var Cl=K(K({},Sl),yl);Cl.autoReplaceSvg||(Cl.observeMutations=!1);var X={};Object.keys(Sl).forEach(function(e){Object.defineProperty(X,e,{enumerable:!0,set:function(t){Cl[e]=t,wl.forEach(function(e){return e(X)})},get:function(){return Cl[e]}})}),Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Cl.cssPrefix=e,wl.forEach(function(e){return e(X)})},get:function(){return Cl.cssPrefix}}),_s.FontAwesomeConfig=X;var wl=[];function Tl(e){return wl.push(e),function(){wl.splice(wl.indexOf(e),1)}}var El=Kc,Dl={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ol(e){if(e&&bs){var t=J.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return J.head.insertBefore(t,r),e}}var kl=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Al(){for(var e=12,t=``;e-->0;)t+=kl[Math.random()*62|0];return t}function jl(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ml(e){return e.classList?jl(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Nl(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Pl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Nl(e[n])}" `},``).trim()}function Fl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Il(e){return e.size!==Dl.size||e.x!==Dl.x||e.y!==Dl.y||e.rotate!==Dl.rotate||e.flipX||e.flipY}function Ll(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Rl(e){var t=e.transform,n=e.width,r=n===void 0?Kc:n,i=e.height,a=i===void 0?Kc:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&xs?`translate(${t.x/El-r/2}em, ${t.y/El-a/2}em) `:s?`translate(calc(-50% + ${t.x/El}em), calc(-50% + ${t.y/El}em)) `:`translate(${t.x/El}em, ${t.y/El}em) `,c+=`scale(${t.size/El*(t.flipX?-1:1)}, ${t.size/El*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var zl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Bl(){var e=qc,t=Jc,n=X.cssPrefix,r=X.replacementClass,i=zl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Vl=!1;function Hl(){X.autoAddCss&&!Vl&&(Ol(Bl()),Vl=!0)}var Ul={mixout:function(){return{dom:{css:Bl,insertCss:Hl}}},hooks:function(){return{beforeDOMElementCreation:function(){Hl()},beforeI2svg:function(){Hl()}}}},Wl=_s||{};Wl[Gc]||(Wl[Gc]={}),Wl[Gc].styles||(Wl[Gc].styles={}),Wl[Gc].hooks||(Wl[Gc].hooks={}),Wl[Gc].shims||(Wl[Gc].shims=[]);var Gl=Wl[Gc],Kl=[],ql=function(){J.removeEventListener(`DOMContentLoaded`,ql),Jl=1,Kl.map(function(e){return e()})},Jl=!1;bs&&(Jl=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Jl||J.addEventListener(`DOMContentLoaded`,ql));function Yl(e){bs&&(Jl?setTimeout(e,0):Kl.push(e))}function Xl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Nl(e):`<${t} ${Pl(r)}>${a.map(Xl).join(``)}</${t}>`}function Zl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ql=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},$l=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ql(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function eu(e){return q(e).length===1?e.codePointAt(0).toString(16):null}function tu(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function nu(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=tu(t);typeof Gl.hooks.addPack==`function`&&!r?Gl.hooks.addPack(e,tu(t)):Gl.styles[e]=K(K({},Gl.styles[e]||{}),i),e===`fas`&&nu(`fa`,t)}var ru=Gl.styles,iu=Gl.shims,au=Object.keys(dl),ou=au.reduce(function(e,t){return e[t]=Object.keys(dl[t]),e},{}),su=null,cu={},lu={},uu={},du={},fu={};function pu(e){return~vl.indexOf(e)}function mu(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!pu(i)?i:null}var hu=function(){var e=function(e){return $l(ru,function(t,n,r){return t[r]=$l(n,e,{}),t},{})};cu=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),lu=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),fu=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in ru||X.autoFetchSvg,n=$l(iu,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});uu=n.names,du=n.unicodes,su=wu(X.styleDefault,{family:X.familyDefault})};Tl(function(e){su=wu(e.styleDefault,{family:X.familyDefault})}),hu();function gu(e,t){return(cu[e]||{})[t]}function _u(e,t){return(lu[e]||{})[t]}function vu(e,t){return(fu[e]||{})[t]}function yu(e){return uu[e]||{prefix:null,iconName:null}}function bu(e){var t=du[e],n=gu(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function xu(){return su}var Su=function(){return{prefix:null,iconName:null,rest:[]}};function Cu(e){var t=Y,n=au.reduce(function(e,t){return e[t]=`${X.cssPrefix}-${t}`,e},{});return xc.forEach(function(r){(e.includes(n[r])||e.some(function(e){return ou[r].includes(e)}))&&(t=r)}),t}function wu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Y:t,r=sl[n][e];if(n===Os&&!e)return`fad`;var i=ll[n][e]||ll[n][r],a=e in Gl.styles?e:null;return i||a||null}function Tu(e){var t=[],n=null;return e.forEach(function(e){var r=mu(X.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Eu(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Du=zc.concat(Ec);function Ou(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Eu(e.filter(function(e){return Du.includes(e)})),a=Eu(e.filter(function(e){return!Du.includes(e)})),o=as(i.filter(function(e){return r=e,!Ds.includes(e)}),1)[0],s=o===void 0?null:o,c=Cu(i),l=K(K({},Tu(a)),{},{prefix:wu(s,{family:c})});return K(K(K({},l),Mu({values:e,family:c,styles:ru,config:X,canonical:l,givenPrefix:r})),ku(n,r,l))}function ku(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?yu(i):{},o=vu(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!ru.far&&ru.fas&&!X.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Au=xc.filter(function(e){return e!==Y||e!==Os}),ju=Object.keys(Rc).filter(function(e){return e!==Y}).map(function(e){return Object.keys(Rc[e])}).flat();function Mu(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Os,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Au.includes(n)&&(Object.keys(s).find(function(e){return ju.includes(e)})||l.autoFetchSvg)&&(r.prefix=wc.get(n).defaultShortPrefixId,r.iconName=vu(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=xu()||`fas`),r}var Nu=function(){function e(){Xo(this,e),this.definitions={}}return Qo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=K(K({},e.definitions[n]||{}),t[n]),nu(n,t[n]);var r=dl[Y][n];r&&nu(r,t[n]),hu()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Pu=[],Fu={},Iu={},Lu=Object.keys(Iu);function Ru(e,t){var n=t.mixoutsTo;return Pu=e,Fu={},Object.keys(Iu).forEach(function(e){Lu.indexOf(e)===-1&&delete Iu[e]}),Pu.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),cs(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Fu[e]||(Fu[e]=[]),Fu[e].push(r[e])})}e.provides&&e.provides(Iu)}),n}function zu(e,t){var n=[...arguments].slice(2);return(Fu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Bu(e){var t=[...arguments].slice(1);(Fu[e]||[]).forEach(function(e){e.apply(null,t)})}function Vu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Iu[e]?Iu[e].apply(null,t):void 0}function Hu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||xu();if(t)return t=vu(n,t)||t,Zl(Uu.definitions,n,t)||Zl(Gl.styles,n,t)}var Uu=new Nu,Z={noAuto:function(){X.autoReplaceSvg=!1,X.observeMutations=!1,Bu(`noAuto`)},config:X,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bs?(Bu(`beforeI2svg`,e),Vu(`pseudoElements2svg`,e),Vu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,Yl(function(){Wu({autoReplaceSvgRoot:t}),Bu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(cs(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:vu(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=wu(e[0]);return{prefix:n,iconName:vu(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${X.cssPrefix}-`)>-1||e.match(pl))){var r=Ou(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||xu(),iconName:vu(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=xu();return{prefix:i,iconName:vu(i,e)||e}}}},library:Uu,findIconDefinition:Hu,toHtml:Xl},Wu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?J:e;(Object.keys(Gl.styles).length>0||X.autoFetchSvg)&&bs&&X.autoReplaceSvg&&Z.dom.i2svg({node:t})};function Gu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Xl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(bs){var t=J.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Ku(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Il(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Fl(K(K({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function qu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${X.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:K(K({},i),{},{id:o}),children:r}]}]}function Ju(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Yu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[X.replacementClass,a?`${X.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:K(K({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ju(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Yc]=``);var _=K(K({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:K({},l.styles)}),v=r.found&&n.found?Vu(`generateAbstractMask`,_)||{children:[],attributes:{}}:Vu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?qu(_):Ku(_)}function Xu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=K(K({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Yc]=``);var l=K({},a.styles);Il(i)&&(l.transform=Rl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Fl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Zu(e){var t=e.content,n=e.extra,r=K(K({},n.attributes),{},{class:n.classes.join(` `)}),i=Fl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Qu=Gl.styles;function $u(e){var t=e[0],n=e[1],r=as(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${X.cssPrefix}-${_l.GROUP}`},children:[{tag:`path`,attributes:{class:`${X.cssPrefix}-${_l.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${X.cssPrefix}-${_l.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var ed={found:!1,width:512,height:512};function td(e,t){!il&&!X.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function nd(e,t){var n=t;return t===`fa`&&X.styleDefault!==null&&(t=xu()),new Promise(function(r,i){if(n===`fa`){var a=yu(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Qu[t]&&Qu[t][e]){var o=Qu[t][e];return r($u(o))}td(e,t),r(K(K({},ed),{},{icon:X.showMissingIcons&&e&&Vu(`missingIconAbstract`)||{}}))})}var rd=function(){},id=X.measurePerformance&&ys&&ys.mark&&ys.measure?ys:{mark:rd,measure:rd},ad=`FA "7.3.1"`,od=function(e){return id.mark(`${ad} ${e} begins`),function(){return sd(e)}},sd=function(e){id.mark(`${ad} ${e} ends`),id.measure(`${ad} ${e}`,`${ad} ${e} begins`,`${ad} ${e} ends`)},cd={begin:od,end:sd},ld=function(){};function ud(e){return typeof(e.getAttribute?e.getAttribute(Yc):null)==`string`}function dd(e){var t=e.getAttribute?e.getAttribute(Qc):null,n=e.getAttribute?e.getAttribute($c):null;return t&&n}function fd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(X.replacementClass)}function pd(){return X.autoReplaceSvg===!0?vd.replace:vd[X.autoReplaceSvg]||vd.replace}function md(e){return J.createElementNS(`http://www.w3.org/2000/svg`,e)}function hd(e){return J.createElement(e)}function gd(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?md:hd:t;if(typeof e==`string`)return J.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(gd(e,{ceFn:n}))}),r}function _d(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var vd={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(gd(e),t)}),t.getAttribute(Yc)===null&&X.keepOriginalSource){var n=J.createComment(_d(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~Ml(t).indexOf(X.replacementClass))return vd.replace(e);var r=RegExp(`${X.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===X.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Xl(e)}).join(`
`);t.setAttribute(Yc,``),t.innerHTML=a}};function yd(e){e()}function bd(e,t){var n=typeof t==`function`?t:ld;if(e.length===0)n();else{var r=yd;X.mutateApproach===tl&&(r=_s.requestAnimationFrame||yd),r(function(){var t=pd(),r=cd.begin(`mutate`);e.map(t),r(),n()})}}var xd=!1;function Sd(){xd=!0}function Cd(){xd=!1}var wd=null;function Td(e){if(vs&&X.observeMutations){var t=e.treeCallback,n=t===void 0?ld:t,r=e.nodeCallback,i=r===void 0?ld:r,a=e.pseudoElementsCallback,o=a===void 0?ld:a,s=e.observeMutationsRoot,c=s===void 0?J:s;wd=new vs(function(e){if(!xd){var t=xu();jl(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ud(e.addedNodes[0])&&(X.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&X.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ud(e.target)&&~gl.indexOf(e.attributeName)){if(e.attributeName===`class`&&dd(e.target)){var r=Ou(Ml(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Qc,a||t),s&&e.target.setAttribute($c,s)}else fd(e.target)&&i(e.target)}})}}),bs&&wd.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ed(){wd&&wd.disconnect()}function Dd(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Od(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ou(Ml(e));return i.prefix||=xu(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_u(i.prefix,e.innerText)||gu(i.prefix,eu(e.innerText))),!i.iconName&&X.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function kd(e){return jl(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ad(){return{iconName:null,prefix:null,transform:Dl,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Od(e),r=n.iconName,i=n.prefix,a=n.rest,o=kd(e),s=zu(`parseNodeAttributes`,{},e);return K({iconName:r,prefix:i,transform:Dl,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Dd(e):[],attributes:o}},s)}var Md=Gl.styles;function Nd(e){var t=X.autoReplaceSvg===`nest`?jd(e,{styleParser:!1}):jd(e);return~t.extra.classes.indexOf(ml)?Vu(`generateLayersText`,e,t):Vu(`generateSvgReplacementMutation`,e,t)}function Pd(){return[].concat(q(Ec),q(zc))}function Fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bs)return Promise.resolve();var n=J.documentElement.classList,r=function(e){return n.add(`${el}-${e}`)},i=function(e){return n.remove(`${el}-${e}`)},a=X.autoFetchSvg?Pd():Ds.concat(Object.keys(Md));a.includes(`fa`)||a.push(`fa`);var o=[`.${ml}:not([${Yc}])`].concat(a.map(function(e){return`.${e}:not([${Yc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=jl(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=cd.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Nd(t);n&&e.push(n)}catch(e){il||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){bd(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Id(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nd(e).then(function(e){e&&bd([e],t)})}function Ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Hu(i||{}),e(r,K(K({},n),{},{mask:i}))}}var Rd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Dl:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Gu(K({type:`icon`},e),function(){return Bu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Yu({icons:{main:$u(v),mask:s?$u(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:K(K({},Dl),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},zd={mixout:function(){return{icon:Ld(Rd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Fd,e.nodeCallback=Id,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?J:t,r=e.callback;return Fd(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([nd(n,r),o.iconName?nd(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=as(o,2),u=l[0],d=l[1];t([e,Yu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Fl(a);o.length>0&&(n.style=o);var s;return Il(i)&&(s=Vu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Bd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Gu({type:`layer`},function(){Bu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${X.cssPrefix}-layers`].concat(q(r)).join(` `)},children:n}]})}}}},Vd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Gu({type:`counter`,content:e},function(){return Bu(`beforeDOMElementCreation`,{content:e,params:t}),Zu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-counter`].concat(q(a))}})})}}}},Hd={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Dl:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Gu({type:`text`,content:e},function(){return Bu(`beforeDOMElementCreation`,{content:e,params:t}),Xu({content:e,transform:K(K({},Dl),r),extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-text`].concat(q(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(xs){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Xu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ud=RegExp(`"`,`ug`),Wd=[1105920,1112319],Gd=K(K(K(K({},{FontAwesome:{normal:`fas`,400:`fas`}}),Cc),Wc),Ac),Kd=Object.keys(Gd).reduce(function(e,t){return e[t.toLowerCase()]=Gd[t],e},{}),qd=Object.keys(Kd).reduce(function(e,t){var n=Kd[t];return e[t]=n[900]||q(Object.entries(n))[0][1],e},{});function Jd(e){return eu(q(e.replace(Ud,``))[0]||``)}function Yd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ud,``),r=n.codePointAt(0),i=r>=Wd[0]&&r<=Wd[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Xd(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Kd[n]||{})[i]||qd[n]}function Zd(e,t){var n=`${Zc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=jl(e.children).filter(function(e){return e.getAttribute(Xc)===t})[0],o=_s.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(hl),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Xd(s,l),p=Jd(d),m=c[0].startsWith(`FontAwesome`),h=Yd(o),g=gu(f,p),_=g;if(m){var v=bu(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Qc)!==f||a.getAttribute($c)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ad(),b=y.extra;b.attributes[Xc]=t,nd(g,f).then(function(i){var a=Yu(K(K({},y),{},{icons:{main:i,mask:Su()},prefix:f,iconName:_,extra:b,watchable:!0})),o=J.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Xl(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Qd(e){return Promise.all([Zd(e,`::before`),Zd(e,`::after`)])}function $d(e){return e.parentNode!==document.head&&!~nl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ef=function(e){return!!e&&rl.some(function(t){return e.includes(t)})},tf=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=$o(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ef(a)){var o=rl.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function nf(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(bs){var n;if(t)n=e;else if(X.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=$o(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=$o(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=$o(tf(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){X.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=jl(n).filter($d).map(Qd),i=cd.begin(`searchPseudoElements`);Sd(),Promise.all(r).then(function(){i(),Cd(),e()}).catch(function(){i(),Cd(),t()})})}}var rf={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=nf,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?J:t;X.searchPseudoElements&&nf(n)}}},af=!1,of={mixout:function(){return{dom:{unwatch:function(){Sd(),af=!0}}}},hooks:function(){return{bootstrap:function(){Td(zu(`mutationObserverCallbacks`,{}))},noAuto:function(){Ed()},watch:function(e){var t=e.observeMutationsRoot;af?Cd():Td(zu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},sf=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},cf={mixout:function(){return{parse:{transform:function(e){return sf(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=sf(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:K({},a.outer),children:[{tag:`g`,attributes:K({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:K(K({},t.icon.attributes),a.path)}]}]}}}},lf={x:0,y:0,width:`100%`,height:`100%`};function uf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function df(e){return e.tag===`g`?e.children:[e]}Ru([Ul,zd,Bd,Vd,Hd,rf,of,cf,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ou(n.split(` `).map(function(e){return e.trim()})):Su();return r.prefix||=xu(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Ll({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:K(K({},lf),{},{fill:`white`})},p=c.children?{children:c.children.map(uf)}:{},m={tag:`g`,attributes:K({},d.inner),children:[uf(K({tag:c.tag,attributes:K(K({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:K({},d.outer),children:[m]},g=`mask-${a||Al()}`,_=`clip-${a||Al()}`,v={tag:`mask`,attributes:K(K({},lf),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:df(u)},v]};return t.push(y,{tag:`rect`,attributes:K({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},lf)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;_s.matchMedia&&(t=_s.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:K(K({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=K(K({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:K(K({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:K(K({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:K(K({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto,Z.config;var ff=Z.library;Z.dom;var pf=Z.parse;Z.findIconDefinition,Z.toHtml;var mf=Z.icon;Z.layer,Z.text,Z.counter;function hf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function gf(e){if(Array.isArray(e))return hf(e)}function Q(e,t,n){return(t=wf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function vf(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yf(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yf(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function bf(e,t){if(e==null)return{};var n,r,i=xf(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xf(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Sf(e){return gf(e)||_f(e)||Ef(e)||vf()}function Cf(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function wf(e){var t=Cf(e,`string`);return typeof t==`symbol`?t:t+``}function Tf(e){"@babel/helpers - typeof";return Tf=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Tf(e)}function Ef(e,t){if(e){if(typeof e==`string`)return hf(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?hf(e,t):void 0}}function Df(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function Of(e){var t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},n=(Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var kf=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Af={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(kf)})(Af);var jf=Af.exports,Mf=[`gradientFill`],Nf=[`class`,`style`],Pf=[`type`,`stops`,`id`];function Ff(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=jf.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function If(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Lf(e,t){return ba(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function Rf(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(Rf);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function zf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=bf(t,Mf),o=i||`fill`in n?Rf(e):e,s=(o.children||[]).map(function(e){return zf(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=If(n);break;case`style`:e.style=Ff(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=bf(n,Nf);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=bf(i,Pf),_=ba(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(Lf));return ba(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(Sf(s)))}return ba(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var Bf=!1;try{Bf=!0}catch{}function Vf(){if(!Bf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Hf(e){if(e&&Tf(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(pf.icon)return pf.icon(e);if(e===null)return null;if(Tf(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Uf=Bn({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=ya(function(){return Hf(e.icon)}),i=ya(function(){return Df(`classes`,Of(e))}),a=ya(function(){return Df(`transform`,typeof e.transform==`string`?pf.transform(e.transform):e.transform)}),o=ya(function(){return Df(`mask`,Hf(e.mask))}),s=ya(function(){var t=$($($($({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,mf(r.value,t)});kn(s,function(e){if(!e)return Vf(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&Vf(`gradientFill is not supported when symbol is true and will be ignored`);var c=ya(function(){return s.value?zf(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}});ff.add({prefix:`fab`,iconName:`github`,icon:[512,512,[],`f09b`,`M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z`]},{prefix:`fab`,iconName:`discord`,icon:[576,512,[],`f392`,`M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z`]},{prefix:`fab`,iconName:`youtube`,icon:[576,512,[61802],`f167`,`M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z`]},{prefix:`fab`,iconName:`twitter`,icon:[512,512,[],`f099`,`M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z`]},{prefix:`fab`,iconName:`tailwind-css`,icon:[640,512,[],`e866`,`M320 64c-85.3 0-138.7 42.7-160 128 32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3-31.4-31.8-67.7-68.7-147-68.7zM160 256c-85.3 0-138.7 42.7-160 128 32-42.7 69.3-58.7 112-48 24.3 6.1 41.7 23.8 61 43.3 31.4 31.8 67.7 68.7 147 68.7 85.3 0 138.7-42.7 160-128-32 42.7-69.3 58.7-112 48-24.3-6.1-41.7-23.8-61-43.3-31.4-31.8-67.7-68.7-147-68.7z`]},{prefix:`fab`,iconName:`vuejs`,icon:[448,512,[],`f41f`,`M356.9 64.3l-76.9 0-56 88.6-48-88.6-176 0 224 383.7 224-383.7-91.1 0zM55.7 96.3l53.8 0 114.5 198.2 114.4-198.2 53.8 0-168.2 288.2-168.3-288.2z`]},{prefix:`fab`,iconName:`typescript`,icon:[448,512,[],`e840`,`M16.8 32l414.4 0c9.3 0 16.8 7.5 16.8 16.8l0 414.4c0 9.3-7.5 16.8-16.8 16.8L16.8 480C7.5 480 0 472.5 0 463.2L0 48.8C0 39.5 7.5 32 16.8 32zM249 270.3l0-36.7-159.4 0 0 36.7 56.9 0 0 163.6 45.3 0 0-163.6 57.2 0zm18.1 159.3c7.3 3.7 15.9 6.5 25.9 8.4s20.5 2.8 31.5 2.8c10.8 0 21-1 30.7-3.1s18.2-5.4 25.5-10.1 13.1-10.9 17.4-18.4 6.4-17 6.4-28.2c0-8.1-1.2-15.2-3.7-21.3s-5.9-11.5-10.5-16.3-10.1-9-16.5-12.8-13.7-7.3-21.7-10.7c-5.9-2.4-11.2-4.8-15.9-7.1s-8.7-4.6-11.9-7-5.8-4.9-7.6-7.5-2.7-5.7-2.7-9c0-3.1 .8-5.8 2.4-8.3s3.8-4.6 6.7-6.4 6.5-3.1 10.7-4.1 8.9-1.5 14.1-1.5c3.7 0 7.7 .3 11.9 .8s8.4 1.4 12.6 2.6 8.3 2.6 12.3 4.4 7.7 3.8 11 6.1l0-41.8c-6.8-2.6-14.3-4.5-22.4-5.8s-17.4-1.9-27.9-1.9c-10.7 0-20.8 1.1-30.4 3.4s-18 5.8-25.2 10.7-13 11-17.2 18.5-6.3 16.5-6.3 26.9c0 13.3 3.9 24.7 11.6 34.1s19.5 17.4 35.2 23.9c6.2 2.5 11.9 5 17.3 7.4s10 4.9 13.8 7.5 7 5.4 9.2 8.5 3.4 6.6 3.4 10.5c0 2.9-.7 5.6-2.1 8s-3.5 4.6-6.4 6.4-6.4 3.2-10.7 4.3-9.3 1.5-15 1.5c-9.7 0-19.4-1.7-28.9-5.1s-18.4-8.5-26.6-15.3l0 44.7z`]},{prefix:`fas`,iconName:`venus`,icon:[384,512,[9792],`f221`,`M80 176a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM223.9 349.1C305.9 334.1 368 262.3 368 176 368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144.1 173.1-.1 1-.1 1.9-.1 2.9l0 64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-64c0-1 0-1.9-.1-2.9z`]},{prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},{prefix:`fas`,iconName:`paintbrush`,icon:[576,512,[128396,`paint-brush`],`f1fc`,`M480.5 10.3L259.1 158c-29.1 19.4-47.6 50.9-50.6 85.3 62.3 12.8 111.4 61.9 124.3 124.3 34.5-3 65.9-21.5 85.3-50.6L565.7 95.5c6.7-10.1 10.3-21.9 10.3-34.1 0-33.9-27.5-61.4-61.4-61.4-12.1 0-24 3.6-34.1 10.3zM288 400c0-61.9-50.1-112-112-112S64 338.1 64 400c0 3.9 .2 7.8 .6 11.6 1.8 17.5-10.2 36.4-27.8 36.4L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112z`]}),uo(Ko).component(`font-awesome-icon`,Uf).mount(`#app`);