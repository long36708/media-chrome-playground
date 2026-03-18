(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),ee=e=>x(e).slice(8,-1),te=e=>x(e)===`[object Object]`,ne=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,S=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),oe=/\B([A-Z])/g,se=ie(e=>e.replace(oe,`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),ue=(e,t)=>!Object.is(e,t),de=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},C=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},pe,me=()=>pe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function he(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?ye(r):he(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,``).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var xe=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Se=e(xe);e(xe+`,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);function Ce(e){return!!e||e===``}function we(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Te(e[r],t[r]);return n}function Te(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?we(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Te(e[n],t[n]))return!1}}return String(e)===String(t)}var Ee,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Ee;try{return Ee=this,e()}finally{Ee=t}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return Ee}var w,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=w,t=Ue;w=this,Ue=!0;try{return this.fn()}finally{Re(this),w=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=w,r=Ue;w=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||ue(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{w=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0?!0:e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=w;w=void 0;try{t()}finally{w=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!w||!Ue||w===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==w)t=this.activeLink=new Ye(w,this),w.deps?(t.prevDep=w.depsTail,w.depsTail.nextDep=t,w.depsTail=t):w.deps=w.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=w.depsTail,t.nextDep=void 0,w.depsTail.nextDep=t,w.depsTail=t,w.deps===t&&(w.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function T(e,t,n){if(Ue&&w){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function nt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e));break}}Ie()}function rt(e){let t=E(e);return t===e?t:(T(t,`iterate`,tt),Ut(e)?t:t.map(Kt))}function it(e){return T(e=E(e),`iterate`,tt),e}function at(e,t){return Ht(e)?Vt(e)?qt(Kt(t)):qt(t):Kt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>d(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!Ut(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=i!==e&&!Ut(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=at(e,t)),n.call(this,t,at(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?at(e,c):c}function dt(e,t,n){let r=E(e);T(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=E(n[0]),r[t](...n)):i}function ft(e,t,n=[]){Ge(),Fe();let r=E(e)[t].apply(e,n);return Ie(),Ke(),r}var pt=e(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ht(e){_(e)||(e=String(e));let t=E(this);return T(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,Jt(e)?e:n);if((_(t)?mt.has(t):pt(t))||(r||T(e,`get`,t),i))return o;if(Jt(o)){let e=a&&ne(t)?o:o.value;return r&&v(e)?zt(e):e}return v(o)?r?zt(o):Lt(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&ne(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=E(i),n=E(n)),!a&&Jt(i)&&!Jt(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Jt(e)?e:r);return e===E(r)&&(o?ue(n,i)&&nt(e,`set`,t,n,i):nt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&nt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!mt.has(t))&&T(e,`has`,t),n}ownKeys(e){return T(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=E(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?St:t?qt:Kt;return!t&&T(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=E(r),a=E(n);e||(ue(n,a)&&T(i,`get`,n),T(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&T(E(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=E(n),i=E(t);return e||(ue(t,i)&&T(r,`has`,t),T(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=E(a),s=t?St:e?qt:Kt;return!e&&T(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){let n=E(this),r=Ct(n),i=E(e),a=!t&&!Ut(e)&&!Ht(e)?i:e;return r.has.call(n,a)||ue(e,a)&&r.has.call(n,e)||ue(i,a)&&r.has.call(n,i)||(n.add(a),nt(n,`add`,a,a)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=E(n));let r=E(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=E(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ue(n,s)&&nt(r,`set`,e,n,s):nt(r,`add`,e,n),this},delete(e){let t=E(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=E(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&nt(t,`delete`,e,void 0,a),o},clear(){let e=E(this),t=e.size!==0,n=e.clear();return t&&nt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return e.__v_skip||!Object.isExtensible(e)?0:Ft(ee(e))}function Lt(e){return Ht(e)?e:Bt(e,!1,yt,Ot,jt)}function Rt(e){return Bt(e,!1,xt,kt,Mt)}function zt(e){return Bt(e,!0,bt,At,Nt)}function Bt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=It(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function E(e){let t=e&&e.__v_raw;return t?E(t):e}function Gt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&C(e,`__v_skip`,!0),e}var Kt=e=>v(e)?Lt(e):e,qt=e=>v(e)?zt(e):e;function Jt(e){return e?e.__v_isRef===!0:!1}function Yt(e){return Xt(e,!1)}function Xt(e,t){return Jt(e)?e:new Zt(e,t)}var Zt=class{constructor(e,t){this.dep=new Xe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:E(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:E(e),ue(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function Qt(e){return Jt(e)?e.value:e}var $t={get:(e,t,n)=>t===`__v_raw`?e:Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Jt(i)&&!Jt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function en(e){return Vt(e)?e:new Proxy(e,$t)}var tn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&w!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function nn(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new tn(r,i,n)}var rn={},an=new WeakMap,on=void 0;function sn(e,t=!1,n=on){if(n){let t=an.get(n);t||an.set(n,t=[]),t.push(e)}}function cn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ut(e)||o===!1||o===0?ln(e,1):ln(e),m,g,_,v,y=!1,b=!1;if(Jt(e)?(g=()=>e.value,y=Ut(e)):Vt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Vt(e)||Ut(e)),g=()=>e.map(e=>{if(Jt(e))return e.value;if(Vt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=on;on=m;try{return f?f(e,3,[v]):e(v)}finally{on=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>ln(e(),t)}let x=Oe(),ee=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),ee()}}let te=b?Array(e.length).fill(rn):rn,ne=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>ue(e,te[t])):ue(e,te))){_&&_();let t=on;on=m;try{let t=[e,te===rn?void 0:b&&te[0]===rn?[]:te,v];te=e,f?f(n,3,t):n(...t)}finally{on=t}}}else m.run()};return u&&u(ne),m=new Ae(g),m.scheduler=l?()=>l(ne,!1):ne,v=e=>sn(e,!1,m),_=m.onStop=()=>{let e=an.get(m);if(e){if(f)f(e,4);else for(let t of e)t();an.delete(m)}},n?a?ne(!0):te=m.run():l?l(ne.bind(null,!0),!0):m.run(),ee.pause=m.pause.bind(m),ee.resume=m.resume.bind(m),ee.stop=ee,ee}function ln(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Jt(e))ln(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)ln(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{ln(e,t,n)});else if(te(e)){for(let r in e)ln(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ln(e[r],t,n)}return e}function un(e,t,n,r){try{return r?e(...r):e()}catch(e){fn(e,t,n)}}function dn(e,t,n,r){if(h(e)){let i=un(e,t,n,r);return i&&y(i)&&i.catch(e=>{fn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(dn(e[a],t,n,r));return i}}function fn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),un(o,null,10,[e,i,a]),Ke();return}}pn(e,r,a,i,s)}function pn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var mn=[],hn=-1,gn=[],_n=null,vn=0,yn=Promise.resolve(),bn=null;function xn(e){let t=bn||yn;return e?t.then(this?e.bind(this):e):t}function Sn(e){let t=hn+1,n=mn.length;for(;t<n;){let r=t+n>>>1,i=mn[r],a=On(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Cn(e){if(!(e.flags&1)){let t=On(e),n=mn[mn.length-1];!n||!(e.flags&2)&&t>=On(n)?mn.push(e):mn.splice(Sn(t),0,e),e.flags|=1,wn()}}function wn(){bn||=yn.then(kn)}function Tn(e){d(e)?gn.push(...e):_n&&e.id===-1?_n.splice(vn+1,0,e):e.flags&1||(gn.push(e),e.flags|=1),wn()}function En(e,t,n=hn+1){for(;n<mn.length;n++){let t=mn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;mn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Dn(e){if(gn.length){let e=[...new Set(gn)].sort((e,t)=>On(e)-On(t));if(gn.length=0,_n){_n.push(...e);return}for(_n=e,vn=0;vn<_n.length;vn++){let e=_n[vn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}_n=null,vn=0}}var On=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kn(e){try{for(hn=0;hn<mn.length;hn++){let e=mn[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),un(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<mn.length;hn++){let e=mn[hn];e&&(e.flags&=-2)}hn=-1,mn.length=0,Dn(e),bn=null,(mn.length||gn.length)&&kn(e)}}var An=null,jn=null;function Mn(e){let t=An;return An=e,jn=e&&e.type.__scopeId||null,t}function Nn(e,t=An,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&zi(-1);let i=Mn(t),a;try{a=e(...n)}finally{Mn(i),r._d&&zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Pn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),dn(c,n,8,[e.el,s,e,t]),Ke())}}function Fn(e,t){if(oa){let n=oa.provides,r=oa.parent&&oa.parent.provides;r===n&&(n=oa.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){let r=sa();if(r||Br){let i=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Ln=Symbol.for(`v-scx`),Rn=()=>In(Ln);function zn(e,t,n){return Bn(e,t,n)}function Bn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(pa){if(c===`sync`){let e=Rn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=oa;u.call=(e,t,n)=>dn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{_i(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():Cn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=cn(e,n,u);return pa&&(f?f.push(h):d&&h()),h}function Vn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Hn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ua(this),s=Bn(i,a.bind(r),n);return o(),s}function Hn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Un=Symbol(`_vte`),Wn=e=>e.__isTeleport,Gn=Symbol(`_leaveCb`);function Kn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Kn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Jn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Yn=new WeakMap;function Xn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Xn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Qn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Xn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Sa(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=E(v),b=v===t?i:e=>Jn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Jn(_,t));if(m!=null&&m!==p){if(Zn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Jt(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))un(p,f,12,[l,_]);else{let t=g(p),n=Jt(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Yn.delete(e)};t.id=-1,Yn.set(e,t),_i(t,r)}else Zn(e),i()}}}function Zn(e){let t=Yn.get(e);t&&(t.flags|=8,Yn.delete(e))}me().requestIdleCallback,me().cancelIdleCallback;var Qn=e=>!!e.type.__asyncLoader,$n=e=>e.type.__isKeepAlive;function er(e,t){nr(e,`a`,t)}function tr(e,t){nr(e,`da`,t)}function nr(e,t,n=oa){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ir(t,r,n),n){let e=n.parent;for(;e&&e.parent;)$n(e.parent.vnode)&&rr(r,t,n,e),e=e.parent}}function rr(e,t,n,r){let i=ir(t,e,r,!0);dr(()=>{c(r[t],i)},n)}function ir(e,t,n=oa,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=ua(n),a=dn(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var ar=e=>(t,n=oa)=>{(!pa||e===`sp`)&&ir(e,(...e)=>t(...e),n)},or=ar(`bm`),sr=ar(`m`),cr=ar(`bu`),lr=ar(`u`),ur=ar(`bum`),dr=ar(`um`),fr=ar(`sp`),pr=ar(`rtg`),mr=ar(`rtc`);function hr(e,t=oa){ir(`ec`,e,t)}var gr=Symbol.for(`v-ndc`),_r=e=>e?fa(e)?Sa(e):_r(e.parent):null,vr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dr(e),$forceUpdate:e=>e.f||=()=>{Cn(e.update)},$nextTick:e=>e.n||=xn.bind(e.proxy),$watch:e=>Vn.bind(e)}),yr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),br={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(yr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Sr&&(s[n]=0)}let d=vr[n],f,p;if(d)return n===`$attrs`&&T(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return yr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||yr(n,c)||u(o,c)||u(i,c)||u(vr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function xr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Sr=!0;function Cr(e){let t=Dr(e),n=e.proxy,i=e.ctx;Sr=!1,t.beforeCreate&&Tr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:ee,destroyed:te,unmounted:ne,render:re,renderTracked:ie,renderTriggered:ae,errorCaptured:S,serverPrefetch:oe,expose:se,inheritAttrs:ce,components:le,directives:ue,filters:de}=t;if(u&&wr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Lt(t))}if(Sr=!0,o)for(let e in o){let t=o[e],a=wa({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Er(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Fn(t,e[t])})}f&&Tr(f,e,`c`);function C(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(C(or,p),C(sr,m),C(cr,g),C(lr,_),C(er,y),C(tr,b),C(hr,S),C(mr,ie),C(pr,ae),C(ur,ee),C(dr,ne),C(fr,oe),d(se))if(se.length){let t=e.exposed||={};se.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};re&&e.render===r&&(e.render=re),ce!=null&&(e.inheritAttrs=ce),le&&(e.components=le),ue&&(e.directives=ue),oe&&qn(e)}function wr(e,t,n=r){d(e)&&(e=Mr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?In(r.from||n,r.default,!0):In(r.from||n):In(r),Jt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Tr(e,t,n){dn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Er(e,t,n,r){let i=r.includes(`.`)?Hn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&zn(i,n)}else if(h(e))zn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Er(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&zn(i,r,e)}}function Dr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Or(c,e,o,!0)),Or(c,t,o)),v(t)&&a.set(t,c),c}function Or(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Or(e,a,n,!0),i&&i.forEach(t=>Or(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=kr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var kr={data:Ar,props:Fr,emits:Fr,methods:Pr,computed:Pr,beforeCreate:Nr,created:Nr,beforeMount:Nr,mounted:Nr,beforeUpdate:Nr,updated:Nr,beforeDestroy:Nr,beforeUnmount:Nr,destroyed:Nr,unmounted:Nr,activated:Nr,deactivated:Nr,errorCaptured:Nr,serverPrefetch:Nr,components:Pr,directives:Pr,watch:Ir,provide:Ar,inject:jr};function Ar(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function jr(e,t){return Pr(Mr(e),Mr(t))}function Mr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Nr(e,t){return e?[...new Set([].concat(e,t))]:t}function Pr(e,t){return e?s(Object.create(null),e,t):t}function Fr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),xr(e),xr(t??{})):t}function Ir(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=Nr(e[r],t[r]);return n}function Lr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Rr=0;function zr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Lr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Rr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ta,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||qi(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Sa(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(dn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Br;Br=l;try{return e()}finally{Br=t}}};return l}}var Br=null,Vr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${S(t)}Modifiers`]||e[`${se(t)}Modifiers`];function Hr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Vr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(fe)));let c,l=i[c=le(n)]||i[c=le(S(n))];!l&&o&&(l=i[c=le(se(n))]),l&&dn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,dn(u,e,6,a)}}var Ur=new WeakMap;function Wr(e,t,n=!1){let r=n?Ur:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Wr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Gr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,se(t))||u(e,t))}function Kr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Mn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Qi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Qi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:qr(c)}}catch(t){Pi.length=0,fn(t,e,1),v=qi(Mi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Jr(y,a)),b=Xi(b,y,!1,!0))}return n.dirs&&(b=Xi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Kn(b,n.transition),v=b,Mn(_),v}var qr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Jr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Yr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Zr(o,r,n)&&!Gr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Xr(r,o,l):!0:!!o;return!1}function Xr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Zr(t,e,a)&&!Gr(n,a))return!0}return!1}function Zr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Te(r,i):r!==i}function Qr({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var $r={},ei=()=>Object.create($r),ti=e=>Object.getPrototypeOf(e)===$r;function ni(e,t,n,r=!1){let i={},a=ei();e.propsDefaults=Object.create(null),ii(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Rt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ri(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=E(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Gr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=S(o);i[t]=ai(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ii(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=se(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ai(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&nt(e.attrs,`set`,``)}function ii(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(re(t))continue;let l=n[t],d;a&&u(a,d=S(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Gr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=E(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ai(a,n,s,i[s],e,!u(i,s))}}return s}function ai(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ua(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var oi=new WeakMap;function si(e,r,i=!1){let a=i?oi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=si(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=S(c[e]);ci(n)&&(l[n]=t)}else if(c)for(let e in c){let t=S(e);if(ci(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ci(e){return e[0]!==`$`&&!re(e)}var li=e=>e===`_`||e===`_ctx`||e===`$stable`,ui=e=>d(e)?e.map(Qi):[Qi(e)],di=(e,t,n)=>{if(t._n)return t;let r=Nn((...e)=>ui(t(...e)),n);return r._c=!1,r},fi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(li(n))continue;let i=e[n];if(h(i))t[n]=di(n,i,r);else if(i!=null){let e=ui(i);t[n]=()=>e}}},pi=(e,t)=>{let n=ui(t);e.slots.default=()=>n},mi=(e,t,n)=>{for(let r in t)(n||!li(r))&&(e[r]=t[r])},hi=(e,t,n)=>{let r=e.slots=ei();if(e.vnode.shapeFlag&32){let e=t._;e?(mi(r,t,n),n&&C(r,`_`,e,!0)):fi(t,r)}else t&&pi(e,t)},gi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:mi(a,n,r):(o=!n.$stable,fi(n,a)),s=n}else n&&(pi(e,n),s={default:1});if(o)for(let e in a)!li(e)&&s[e]==null&&delete a[e]},_i=ki;function vi(e){return yi(e)}function yi(e,i){let a=me();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wi(e,t)&&(r=Te(e),be(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case ji:y(e,t,n,r);break;case Mi:b(e,t,n,r);break;case Ni:e??x(t,n,r,o);break;case Ai:le(e,t,n,r,i,a,o,s,c);break;default:d&1?ne(e,t,n,r,i,a,o,s,c):d&6?ue(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Oe)}u!=null&&i?Xn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Xn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},ee=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},te=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ne=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ie(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),oe(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ie=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&S(e.children,d,null,r,i,bi(e,a),s,u),_&&Pn(e,null,r,`created`),ae(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!re(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&na(f,r,e)}_&&Pn(e,null,r,`beforeMount`);let v=Si(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&_i(()=>{f&&na(f,r,e),v&&g.enter(d),_&&Pn(e,null,r,`mounted`)},i)},ae=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Oi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ae(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},S=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?$i(e[l]):Qi(e[l]),t,n,r,i,a,o,s)},oe=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&xi(r,!1),(g=h.onVnodeBeforeUpdate)&&na(g,r,n,e),f&&Pn(n,e,r,`beforeUpdate`),r&&xi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?se(e.dynamicChildren,d,l,r,i,bi(n,a),o):s||ge(e,n,l,null,r,i,bi(n,a),o,!1),u>0){if(u&16)ce(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ce(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&_i(()=>{g&&na(g,r,n,e),f&&Pn(n,e,r,`updated`)},i)},se=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===Ai||!Wi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ce=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!re(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(re(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},le=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),S(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(se(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Ci(e,t,!0)):ge(e,t,n,f,i,a,s,c,l)},ue=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):C(t,n,r,i,a,o,c):fe(e,t,c)},C=(e,t,n,r,i,a,o)=>{let s=e.component=aa(e,r,i);if($n(e)&&(s.ctx.renderer=Oe),ma(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,pe,o),!e.el){let r=s.subTree=qi(Mi);b(null,r,t,n),e.placeholder=r.el}}else pe(s,e,t,n,i,a,o)},fe=(e,t,n)=>{let r=t.component=e.component;if(Yr(e,t,n))if(r.asyncDep&&!r.asyncResolved){he(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},pe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ti(e);if(n){t&&(t.el=c.el,he(e,t,o)),n.asyncDep.then(()=>{_i(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;xi(e,!1),t?(t.el=c.el,he(e,t,o)):t=c,n&&de(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&na(d,s,t,c),xi(e,!0);let f=Kr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Te(p),e,i,a),t.el=f.el,u===null&&Qr(e,f.el),r&&_i(r,i),(d=t.props&&t.props.onVnodeUpdated)&&_i(()=>na(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Qn(t);if(xi(e,!1),l&&de(l),!m&&(o=c&&c.onVnodeBeforeMount)&&na(o,d,t),xi(e,!0),s&&ke){let t=()=>{e.subTree=Kr(e),ke(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Kr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&_i(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;_i(()=>na(o,d,e),i)}(t.shapeFlag&256||d&&Qn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&_i(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Cn(u),xi(e,!0),l()},he=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ri(e,t.props,r,n),gi(e,t.children,n),Ge(),En(e),Ke()},ge=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ve(l,d,n,r,i,a,o,s,c);return}else if(f&256){_e(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&we(l,i,a),d!==l&&p(n,d)):u&16?m&16?ve(l,d,n,r,i,a,o,s,c):we(l,i,a,!0):(u&8&&p(n,``),m&16&&S(d,n,r,i,a,o,s,c))},_e=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?$i(t[p]):Qi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?we(e,a,o,!0,!1,f):S(t,r,i,a,o,s,c,l,f)},ve=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?$i(t[u]):Qi(t[u]);if(Wi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?$i(t[p]):Qi(t[p]);if(Wi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?$i(t[u]):Qi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)be(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?$i(t[u]):Qi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,ee=0,te=Array(b);for(u=0;u<b;u++)te[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){be(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(te[_-h]===0&&Wi(n,t[_])){i=_;break}i===void 0?be(n,a,o,!0):(te[i-h]=u+1,i>=ee?ee=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let ne=x?wi(te):n;for(_=ne.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Di(f):i;te[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==ne[_]?ye(n,r,p,2):_--)}}},ye=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ye(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Oe);return}if(c===Ai){o(a,t,n);for(let e=0;e<u.length;e++)ye(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ni){ee(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),_i(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Gn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},be=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(Ge(),Xn(s,null,n,e,!0),Ke()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!Qn(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&na(g,t,e),u&6)Ce(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&Pn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Oe,r):l&&!l.hasOnce&&(a!==Ai||d>0&&d&64)?we(l,t,n,!1,!0):(a===Ai&&d&384||!i&&u&16)&&we(c,t,n),r&&xe(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&_i(()=>{g&&na(g,t,e),m&&Pn(e,null,t,`unmounted`)},n)},xe=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===Ai){Se(n,r);return}if(t===Ni){te(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},Se=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},Ce=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ei(c),Ei(l),r&&de(r),i.stop(),a&&(a.flags|=8,be(o,e,t,n)),s&&_i(s,t),_i(()=>{e.isUnmounted=!0},t)},we=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)be(e[o],t,n,r,i)},Te=e=>{if(e.shapeFlag&6)return Te(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Un];return n?h(n):t},Ee=!1,De=(e,t,n)=>{let r;e==null?t._vnode&&(be(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Ee||=(Ee=!0,En(r),Dn(),!1)},Oe={p:v,um:be,m:ye,r:xe,mt:C,mc:S,pc:ge,pbc:se,n:Te,o:e},w,ke;return i&&([w,ke]=i(Oe)),{render:De,hydrate:w,createApp:zr(De,w)}}function bi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function xi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Si(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ci(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=$i(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ci(t,a)),a.type===ji&&(a.patchFlag===-1&&(a=i[e]=$i(a)),a.el=t.el),a.type===Mi&&!a.el&&(a.el=t.el)}}function wi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ti(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ti(t)}function Ei(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Di(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Di(t.subTree):null}var Oi=e=>e.__isSuspense;function ki(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):Tn(e)}var Ai=Symbol.for(`v-fgt`),ji=Symbol.for(`v-txt`),Mi=Symbol.for(`v-cmt`),Ni=Symbol.for(`v-stc`),Pi=[],Fi=null;function Ii(e=!1){Pi.push(Fi=e?null:[])}function Li(){Pi.pop(),Fi=Pi[Pi.length-1]||null}var Ri=1;function zi(e,t=!1){Ri+=e,e<0&&Fi&&t&&(Fi.hasOnce=!0)}function Bi(e){return e.dynamicChildren=Ri>0?Fi||n:null,Li(),Ri>0&&Fi&&Fi.push(e),e}function Vi(e,t,n,r,i,a){return Bi(D(e,t,n,r,i,a,!0))}function Hi(e,t,n,r,i){return Bi(qi(e,t,n,r,i,!0))}function Ui(e){return e?e.__v_isVNode===!0:!1}function Wi(e,t){return e.type===t.type&&e.key===t.key}var Gi=({key:e})=>e??null,Ki=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Jt(e)||h(e)?{i:An,r:e,k:t,f:!!n}:e);function D(e,t=null,n=null,r=0,i=null,a=e===Ai?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&Ki(t),scopeId:jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:An};return s?(ea(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ri>0&&!o&&Fi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Fi.push(c),c}var qi=Ji;function Ji(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===gr)&&(e=Mi),Ui(e)){let r=Xi(e,t,!0);return n&&ea(r,n),Ri>0&&!a&&Fi&&(r.shapeFlag&6?Fi[Fi.indexOf(e)]=r:Fi.push(r)),r.patchFlag=-2,r}if(Ca(e)&&(e=e.__vccOpts),t){t=Yi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=be(e)),v(n)&&(Wt(n)&&!d(n)&&(n=s({},n)),t.style=he(n))}let o=g(e)?1:Oi(e)?128:Wn(e)?64:v(e)?4:h(e)?2:0;return D(e,t,n,r,i,o,a,!0)}function Yi(e){return e?Wt(e)||ti(e)?s({},e):e:null}function Xi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Ki(t)):[a,Ki(t)]:Ki(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ai?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xi(e.ssContent),ssFallback:e.ssFallback&&Xi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Kn(u,c.clone(u)),u}function Zi(e=` `,t=0){return qi(ji,null,e,t)}function Qi(e){return e==null||typeof e==`boolean`?qi(Mi):d(e)?qi(Ai,null,e.slice()):Ui(e)?$i(e):qi(ji,null,String(e))}function $i(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xi(e)}function ea(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ea(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ti(t)?t._ctx=An:r===3&&An&&(An.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:An},n=32):(t=String(t),r&64?(n=16,t=[Zi(t)]):n=8);e.children=t,e.shapeFlag|=n}function ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=he([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function na(e,t,n,r=null){dn(e,t,7,[n,r])}var ra=Lr(),ia=0;function aa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ra,o={uid:ia++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:si(i,a),emitsOptions:Wr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Hr.bind(null,o),e.ce&&e.ce(o),o}var oa=null,sa=()=>oa||An,ca,la;{let e=me(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ca=t(`__VUE_INSTANCE_SETTERS__`,e=>oa=e),la=t(`__VUE_SSR_SETTERS__`,e=>pa=e)}var ua=e=>{let t=oa;return ca(e),e.scope.on(),()=>{e.scope.off(),ca(t)}},da=()=>{oa&&oa.scope.off(),ca(null)};function fa(e){return e.vnode.shapeFlag&4}var pa=!1;function ma(e,t=!1,n=!1){t&&la(t);let{props:r,children:i}=e.vnode,a=fa(e);ni(e,r,a,t),hi(e,i,n||t);let o=a?ha(e,t):void 0;return t&&la(!1),o}function ha(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,br);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?xa(e):null,i=ua(e),a=un(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!Qn(e)&&qn(e),o){if(a.then(da,da),t)return a.then(n=>{ga(e,n,t)}).catch(t=>{fn(t,e,0)});e.asyncDep=a}else ga(e,a,t)}else ya(e,t)}function ga(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=en(t)),ya(e,n)}var _a,va;function ya(e,t,n){let i=e.type;if(!e.render){if(!t&&_a&&!i.render){let t=i.template||Dr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=_a(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,va&&va(e)}{let t=ua(e);Ge();try{Cr(e)}finally{Ke(),t()}}}var ba={get(e,t){return T(e,`get`,``),e[t]}};function xa(e){return{attrs:new Proxy(e.attrs,ba),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Sa(e){return e.exposed?e.exposeProxy||=new Proxy(en(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vr)return vr[n](e)},has(e,t){return t in e||t in vr}}):e.proxy}function Ca(e){return h(e)&&`__vccOpts`in e}var wa=(e,t)=>nn(e,t,pa),Ta=`3.5.30`,Ea=void 0,Da=typeof window<`u`&&window.trustedTypes;if(Da)try{Ea=Da.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Oa=Ea?e=>Ea.createHTML(e):e=>e,ka=`http://www.w3.org/2000/svg`,Aa=`http://www.w3.org/1998/Math/MathML`,ja=typeof document<`u`?document:null,Ma=ja&&ja.createElement(`template`),Na={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ja.createElementNS(ka,e):t===`mathml`?ja.createElementNS(Aa,e):n?ja.createElement(e,{is:n}):ja.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ja.createTextNode(e),createComment:e=>ja.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ja.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ma.innerHTML=Oa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ma.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pa=Symbol(`_vtc`);function Fa(e,t,n){let r=e[Pa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ia=Symbol(`_vod`),La=Symbol(`_vsh`),Ra=Symbol(``),za=/(?:^|;)\s*display\s*:/;function Ba(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ha(r,t,``)}else for(let e in t)n[e]??Ha(r,e,``);for(let e in n)e===`display`&&(a=!0),Ha(r,e,n[e])}else if(i){if(t!==n){let e=r[Ra];e&&(n+=`;`+e),r.cssText=n,a=za.test(n)}}else t&&e.removeAttribute(`style`);Ia in e&&(e[Ia]=a?r.display:``,e[La]&&(r.display=`none`))}var Va=/\s*!important$/;function Ha(e,t,n){if(d(n))n.forEach(n=>Ha(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ga(e,t);Va.test(n)?e.setProperty(se(r),n.replace(Va,``),`important`):e[r]=n}}var Ua=[`Webkit`,`Moz`,`ms`],Wa={};function Ga(e,t){let n=Wa[t];if(n)return n;let r=S(t);if(r!==`filter`&&r in e)return Wa[t]=r;r=ce(r);for(let n=0;n<Ua.length;n++){let i=Ua[n]+r;if(i in e)return Wa[t]=i}return t}var Ka=`http://www.w3.org/1999/xlink`;function qa(e,t,n,r,i,a=Se(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n):n==null||a&&!Ce(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ja(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Oa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ce(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ya(e,t,n,r){e.addEventListener(t,n,r)}function Xa(e,t,n,r){e.removeEventListener(t,n,r)}var Za=Symbol(`_vei`);function Qa(e,t,n,r,i=null){let a=e[Za]||(e[Za]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=eo(t);r?Ya(e,n,a[t]=io(r,i),s):o&&(Xa(e,n,o,s),a[t]=void 0)}}var $a=/(?:Once|Passive|Capture)$/;function eo(e){let t;if($a.test(e)){t={};let n;for(;n=e.match($a);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var to=0,no=Promise.resolve(),ro=()=>to||=(no.then(()=>to=0),Date.now());function io(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;dn(ao(e,n.value),t,5,[e])};return n.value=e,n.attached=ro(),n}function ao(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,so=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Fa(e,r,c):t===`style`?Ba(e,n,r):a(t)?o(t)||Qa(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):co(e,t,r,c))?(Ja(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&qa(e,t,r,c,s,t!==`value`)):e._isVueCE&&(lo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ja(e,S(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),qa(e,t,r,c))};function co(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&oo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return oo(t)&&g(n)?!1:t in e}function lo(e,t){let n=e._def.props;if(!n)return!1;let r=S(t);return Array.isArray(n)?n.some(e=>S(e)===r):Object.keys(n).some(e=>S(e)===r)}var uo=s({patchProp:so},Na),fo;function po(){return fo||=vi(uo)}var mo=((...e)=>{let t=po().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=go(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ho(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ho(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function go(e){return g(e)?document.querySelector(e):e}var O={MEDIA_PLAY_REQUEST:`mediaplayrequest`,MEDIA_PAUSE_REQUEST:`mediapauserequest`,MEDIA_MUTE_REQUEST:`mediamuterequest`,MEDIA_UNMUTE_REQUEST:`mediaunmuterequest`,MEDIA_LOOP_REQUEST:`medialooprequest`,MEDIA_VOLUME_REQUEST:`mediavolumerequest`,MEDIA_SEEK_REQUEST:`mediaseekrequest`,MEDIA_AIRPLAY_REQUEST:`mediaairplayrequest`,MEDIA_ENTER_FULLSCREEN_REQUEST:`mediaenterfullscreenrequest`,MEDIA_EXIT_FULLSCREEN_REQUEST:`mediaexitfullscreenrequest`,MEDIA_PREVIEW_REQUEST:`mediapreviewrequest`,MEDIA_ENTER_PIP_REQUEST:`mediaenterpiprequest`,MEDIA_EXIT_PIP_REQUEST:`mediaexitpiprequest`,MEDIA_ENTER_CAST_REQUEST:`mediaentercastrequest`,MEDIA_EXIT_CAST_REQUEST:`mediaexitcastrequest`,MEDIA_SHOW_TEXT_TRACKS_REQUEST:`mediashowtexttracksrequest`,MEDIA_HIDE_TEXT_TRACKS_REQUEST:`mediahidetexttracksrequest`,MEDIA_SHOW_SUBTITLES_REQUEST:`mediashowsubtitlesrequest`,MEDIA_DISABLE_SUBTITLES_REQUEST:`mediadisablesubtitlesrequest`,MEDIA_TOGGLE_SUBTITLES_REQUEST:`mediatogglesubtitlesrequest`,MEDIA_PLAYBACK_RATE_REQUEST:`mediaplaybackraterequest`,MEDIA_RENDITION_REQUEST:`mediarenditionrequest`,MEDIA_AUDIO_TRACK_REQUEST:`mediaaudiotrackrequest`,MEDIA_SEEK_TO_LIVE_REQUEST:`mediaseektoliverequest`,REGISTER_MEDIA_STATE_RECEIVER:`registermediastatereceiver`,UNREGISTER_MEDIA_STATE_RECEIVER:`unregistermediastatereceiver`},k={MEDIA_CHROME_ATTRIBUTES:`mediachromeattributes`,MEDIA_CONTROLLER:`mediacontroller`},_o={MEDIA_AIRPLAY_UNAVAILABLE:`mediaAirplayUnavailable`,MEDIA_AUDIO_TRACK_ENABLED:`mediaAudioTrackEnabled`,MEDIA_AUDIO_TRACK_LIST:`mediaAudioTrackList`,MEDIA_AUDIO_TRACK_UNAVAILABLE:`mediaAudioTrackUnavailable`,MEDIA_BUFFERED:`mediaBuffered`,MEDIA_CAST_UNAVAILABLE:`mediaCastUnavailable`,MEDIA_CHAPTERS_CUES:`mediaChaptersCues`,MEDIA_CURRENT_TIME:`mediaCurrentTime`,MEDIA_DURATION:`mediaDuration`,MEDIA_ENDED:`mediaEnded`,MEDIA_ERROR:`mediaError`,MEDIA_ERROR_CODE:`mediaErrorCode`,MEDIA_ERROR_MESSAGE:`mediaErrorMessage`,MEDIA_FULLSCREEN_UNAVAILABLE:`mediaFullscreenUnavailable`,MEDIA_HAS_PLAYED:`mediaHasPlayed`,MEDIA_HEIGHT:`mediaHeight`,MEDIA_IS_AIRPLAYING:`mediaIsAirplaying`,MEDIA_IS_CASTING:`mediaIsCasting`,MEDIA_IS_FULLSCREEN:`mediaIsFullscreen`,MEDIA_IS_PIP:`mediaIsPip`,MEDIA_LOADING:`mediaLoading`,MEDIA_MUTED:`mediaMuted`,MEDIA_LOOP:`mediaLoop`,MEDIA_PAUSED:`mediaPaused`,MEDIA_PIP_UNAVAILABLE:`mediaPipUnavailable`,MEDIA_PLAYBACK_RATE:`mediaPlaybackRate`,MEDIA_PREVIEW_CHAPTER:`mediaPreviewChapter`,MEDIA_PREVIEW_COORDS:`mediaPreviewCoords`,MEDIA_PREVIEW_IMAGE:`mediaPreviewImage`,MEDIA_PREVIEW_TIME:`mediaPreviewTime`,MEDIA_RENDITION_LIST:`mediaRenditionList`,MEDIA_RENDITION_SELECTED:`mediaRenditionSelected`,MEDIA_RENDITION_UNAVAILABLE:`mediaRenditionUnavailable`,MEDIA_SEEKABLE:`mediaSeekable`,MEDIA_STREAM_TYPE:`mediaStreamType`,MEDIA_SUBTITLES_LIST:`mediaSubtitlesList`,MEDIA_SUBTITLES_SHOWING:`mediaSubtitlesShowing`,MEDIA_TARGET_LIVE_WINDOW:`mediaTargetLiveWindow`,MEDIA_TIME_IS_LIVE:`mediaTimeIsLive`,MEDIA_VOLUME:`mediaVolume`,MEDIA_VOLUME_LEVEL:`mediaVolumeLevel`,MEDIA_VOLUME_UNAVAILABLE:`mediaVolumeUnavailable`,MEDIA_LANG:`mediaLang`,MEDIA_WIDTH:`mediaWidth`},vo=Object.entries(_o),A=vo.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{}),yo=vo.reduce((e,[t,n])=>(e[t]=n.toLowerCase(),e),{USER_INACTIVE_CHANGE:`userinactivechange`,BREAKPOINTS_CHANGE:`breakpointchange`,BREAKPOINTS_COMPUTED:`breakpointscomputed`});Object.entries(yo).reduce((e,[t,n])=>{let r=A[t];return r&&(e[n]=r),e},{userinactivechange:`userinactive`});var bo=Object.entries(A).reduce((e,[t,n])=>{let r=yo[t];return r&&(e[n]=r),e},{userinactive:`userinactivechange`}),xo={SUBTITLES:`subtitles`,CAPTIONS:`captions`,DESCRIPTIONS:`descriptions`,CHAPTERS:`chapters`,METADATA:`metadata`},So={DISABLED:`disabled`,HIDDEN:`hidden`,SHOWING:`showing`},Co={MOUSE:`mouse`,PEN:`pen`,TOUCH:`touch`},wo={UNAVAILABLE:`unavailable`,UNSUPPORTED:`unsupported`},To={LIVE:`live`,ON_DEMAND:`on-demand`,UNKNOWN:`unknown`},Eo={INLINE:`inline`,FULLSCREEN:`fullscreen`,PICTURE_IN_PICTURE:`picture-in-picture`};function Do(e){return e?.map(Oo).join(` `)}function Oo(e){if(e){let{id:t,width:n,height:r}=e;return[t,n,r].filter(e=>e!=null).join(`:`)}}function ko(e){return e?.map(Ao).join(` `)}function Ao(e){if(e){let{id:t,kind:n,language:r,label:i}=e;return[t,n,r,i].filter(e=>e!=null).join(`:`)}}function jo(e){return typeof e==`number`&&!Number.isNaN(e)&&Number.isFinite(e)}var Mo=e=>new Promise(t=>setTimeout(t,e)),No={en:{"Start airplay":`Start airplay`,"Stop airplay":`Stop airplay`,Audio:`Audio`,Captions:`Captions`,"Enable captions":`Enable captions`,"Disable captions":`Disable captions`,"Start casting":`Start casting`,"Stop casting":`Stop casting`,"Enter fullscreen mode":`Enter fullscreen mode`,"Exit fullscreen mode":`Exit fullscreen mode`,Mute:`Mute`,Unmute:`Unmute`,Loop:`Loop`,"Enter picture in picture mode":`Enter picture in picture mode`,"Exit picture in picture mode":`Exit picture in picture mode`,Play:`Play`,Pause:`Pause`,"Playback rate":`Playback rate`,"Playback rate {playbackRate}":`Playback rate {playbackRate}`,Quality:`Quality`,"Seek backward":`Seek backward`,"Seek forward":`Seek forward`,Settings:`Settings`,Auto:`Auto`,"audio player":`audio player`,"video player":`video player`,volume:`volume`,seek:`seek`,"closed captions":`closed captions`,"current playback rate":`current playback rate`,"playback time":`playback time`,"media loading":`media loading`,settings:`settings`,"audio tracks":`audio tracks`,quality:`quality`,play:`play`,pause:`pause`,mute:`mute`,unmute:`unmute`,"chapter: {chapterName}":`chapter: {chapterName}`,live:`live`,Off:`Off`,"start airplay":`start airplay`,"stop airplay":`stop airplay`,"start casting":`start casting`,"stop casting":`stop casting`,"enter fullscreen mode":`enter fullscreen mode`,"exit fullscreen mode":`exit fullscreen mode`,"enter picture in picture mode":`enter picture in picture mode`,"exit picture in picture mode":`exit picture in picture mode`,"seek to live":`seek to live`,"playing live":`playing live`,"seek back {seekOffset} seconds":`seek back {seekOffset} seconds`,"seek forward {seekOffset} seconds":`seek forward {seekOffset} seconds`,"Network Error":`Network Error`,"Decode Error":`Decode Error`,"Source Not Supported":`Source Not Supported`,"Encryption Error":`Encryption Error`,"A network error caused the media download to fail.":`A network error caused the media download to fail.`,"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`,"An unsupported error occurred. The server or network failed, or your browser does not support this format.":`An unsupported error occurred. The server or network failed, or your browser does not support this format.`,"The media is encrypted and there are no keys to decrypt it.":`The media is encrypted and there are no keys to decrypt it.`,hour:`hour`,hours:`hours`,minute:`minute`,minutes:`minutes`,second:`second`,seconds:`seconds`,"{time} remaining":`{time} remaining`,"{currentTime} of {totalTime}":`{currentTime} of {totalTime}`,"video not loaded, unknown time.":`video not loaded, unknown time.`}},Po=globalThis.navigator?.language||`en`,Fo=e=>{Po=e},Io=e=>{let[t]=Po.split(`-`);return No[Po]?.[e]||No[t]?.[e]||No.en?.[e]||e},j=(e,t={})=>Io(e).replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):`{${n}}`),Lo=[{singular:`hour`,plural:`hours`},{singular:`minute`,plural:`minutes`},{singular:`second`,plural:`seconds`}],Ro=(e,t)=>`${e} ${j(e===1?Lo[t].singular:Lo[t].plural)}`,zo=e=>{if(!jo(e))return``;let t=Math.abs(e),n=t!==e,r=new Date(0,0,0,0,0,t,0),i=[r.getHours(),r.getMinutes(),r.getSeconds()].map((e,t)=>e&&Ro(e,t)).filter(e=>e).join(`, `);return n?j(`{time} remaining`,{time:i}):i};function Bo(e,t){let n=!1;e<0&&(n=!0,e=0-e),e=e<0?0:e;let r=Math.floor(e%60),i=Math.floor(e/60%60),a=Math.floor(e/3600),o=Math.floor(t/60%60),s=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(a=i=r=`0`),a=a>0||s>0?a+`:`:``,i=((a||o>=10)&&i<10?`0`+i:i)+`:`,r=r<10?`0`+r:r,(n?`-`:``)+a+i+r}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var Vo=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Ho=class extends Vo{},Uo=class extends Ho{constructor(){super(...arguments),this.role=null}},Wo=class{observe(){}unobserve(){}disconnect(){}},Go={createElement:function(){return new Ko.HTMLElement},createElementNS:function(){return new Ko.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},Ko={ResizeObserver:Wo,document:Go,Node:Ho,Element:Uo,HTMLElement:class extends Uo{constructor(){super(...arguments),this.innerHTML=``}get content(){return new Ko.DocumentFragment}},DocumentFragment:class extends Vo{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return``}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},qo=`global`in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>`u`||window.customElements===void 0,Jo=Object.keys(Ko).every(e=>e in globalThis),M=qo&&!Jo?Ko:globalThis,Yo=qo&&!Jo?Go:globalThis.document,Xo=new WeakMap,Zo=e=>{let t=Xo.get(e);return t||Xo.set(e,t=new Set),t},Qo=new M.ResizeObserver(e=>{for(let t of e)for(let e of Zo(t.target))e(t)});function $o(e,t){Zo(e).add(t),Qo.observe(e)}function es(e,t){let n=Zo(e);n.delete(t),n.size||Qo.unobserve(e)}function ts(e){let t={};for(let n of e)t[n.name]=n.value;return t}function ns(e){return rs(e)??cs(e,`media-controller`)}function rs(e){let{MEDIA_CONTROLLER:t}=k,n=e.getAttribute(t);if(n)return us(e)?.getElementById(n)}var is=(e,t,n=`.value`)=>{let r=e.querySelector(n);r&&(r.textContent=t)},as=(e,t)=>{let n=`slot[name="${t}"]`,r=e.shadowRoot.querySelector(n);return r?r.children:[]},os=(e,t)=>as(e,t)[0],ss=(e,t)=>!e||!t?!1:e?.contains(t)?!0:ss(e,t.getRootNode().host),cs=(e,t)=>e?e.closest(t)||cs(e.getRootNode().host,t):null;function ls(e=document){let t=e?.activeElement;return t?ls(t.shadowRoot)??t:null}function us(e){let t=(e?.getRootNode)?.call(e);return t instanceof ShadowRoot||t instanceof Document?t:null}function ds(e,{depth:t=3,checkOpacity:n=!0,checkVisibilityCSS:r=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:n,checkVisibilityCSS:r});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if(n&&e.opacity===`0`||r&&e.visibility===`hidden`||e.display===`none`)return!1;i=i.parentElement,t--}return!0}function fs(e,t,n,r){let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a;if(o===0)return 0;let s=((e-n.x)*i+(t-n.y)*a)/o;return Math.max(0,Math.min(1,s))}function N(e,t){return ps(e,e=>e===t)||ms(e,t)}function ps(e,t){let n;for(n of e.querySelectorAll(`style:not([media])`)??[]){let e;try{e=n.sheet?.cssRules}catch{continue}for(let n of e??[])if(t(n.selectorText))return n}}function ms(e,t){let n=e.querySelectorAll(`style:not([media])`)??[],r=n?.[n.length-1];if(!r?.sheet)return console.warn(`Media Chrome: No style sheet found on style tag of`,e),{style:{setProperty:()=>{},removeProperty:()=>``,getPropertyValue:()=>``}};let i=r?.sheet.insertRule(`${t}{}`,r.sheet.cssRules.length);return r.sheet.cssRules?.[i]}function P(e,t,n=NaN){let r=e.getAttribute(t);return r==null?n:+r}function F(e,t,n){let r=+n;if(n==null||Number.isNaN(r)){e.hasAttribute(t)&&e.removeAttribute(t);return}P(e,t,void 0)!==r&&e.setAttribute(t,`${r}`)}function I(e,t){return e.hasAttribute(t)}function L(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}I(e,t)!=n&&e.toggleAttribute(t,n)}function R(e,t,n=null){return e.getAttribute(t)??n}function z(e,t,n){if(n==null){e.hasAttribute(t)&&e.removeAttribute(t);return}let r=`${n}`;R(e,t,void 0)!==r&&e.setAttribute(t,r)}var hs=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},gs=(e,t,n)=>(hs(e,t,`read from private field`),n?n.call(e):t.get(e)),_s=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},vs=(e,t,n,r)=>(hs(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),B;function ys(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var bs=class extends M.HTMLElement{constructor(){if(super(),_s(this,B,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,A.MEDIA_PAUSED]}attributeChangedCallback(e,t,n){var r,i,a,o;e===k.MEDIA_CONTROLLER&&(t&&((i=(r=gs(this,B))?.unassociateElement)==null||i.call(r,this),vs(this,B,null)),n&&this.isConnected&&(vs(this,B,this.getRootNode()?.getElementById(n)),(o=(a=gs(this,B))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute(`aria-hidden`,`true`),vs(this,B,xs(this)),this.getAttribute(k.MEDIA_CONTROLLER)&&((t=(e=gs(this,B))?.associateElement)==null||t.call(e,this)),gs(this,B)&&(gs(this,B).addEventListener(`pointerdown`,this),gs(this,B).addEventListener(`click`,this),gs(this,B).hasAttribute(`tabindex`)||(gs(this,B).tabIndex=0))}disconnectedCallback(){var e,t,n,r;this.getAttribute(k.MEDIA_CONTROLLER)&&((t=(e=gs(this,B))?.unassociateElement)==null||t.call(e,this)),(n=gs(this,B))==null||n.removeEventListener(`pointerdown`,this),(r=gs(this,B))==null||r.removeEventListener(`click`,this),vs(this,B,null)}handleEvent(e){let t=e.composedPath()?.[0];if([`video`,`media-controller`].includes(t?.localName)){if(e.type===`pointerdown`)this._pointerType=e.pointerType;else if(e.type===`click`){let{clientX:t,clientY:n}=e,{left:r,top:i,width:a,height:o}=this.getBoundingClientRect(),s=t-r,c=n-i;if(s<0||c<0||s>a||c>o||a===0&&o===0)return;let l=this._pointerType||`mouse`;if(this._pointerType=void 0,l===Co.TOUCH){this.handleTap(e);return}else if(l===Co.MOUSE||l===Co.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return I(this,A.MEDIA_PAUSED)}set mediaPaused(e){L(this,A.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?O.MEDIA_PLAY_REQUEST:O.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new M.CustomEvent(t,{composed:!0,bubbles:!0}))}};B=new WeakMap,bs.shadowRootOptions={mode:`open`},bs.getTemplateHTML=ys;function xs(e){let t=e.getAttribute(k.MEDIA_CONTROLLER);return t?e.getRootNode()?.getElementById(t):cs(e,`media-controller`)}M.customElements.get(`media-gesture-receiver`)||M.customElements.define(`media-gesture-receiver`,bs);var Ss=bs,Cs=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},V=(e,t,n)=>(Cs(e,t,`read from private field`),n?n.call(e):t.get(e)),ws=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ts=(e,t,n,r)=>(Cs(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Es=(e,t,n)=>(Cs(e,t,`access private method`),n),Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,H={AUDIO:`audio`,AUTOHIDE:`autohide`,BREAKPOINTS:`breakpoints`,GESTURES_DISABLED:`gesturesdisabled`,KEYBOARD_CONTROL:`keyboardcontrol`,NO_AUTOHIDE:`noautohide`,USER_INACTIVE:`userinactive`,AUTOHIDE_OVER_CONTROLS:`autohideovercontrols`};function qs(e){return`
    <style>
      
      :host([${A.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${H.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${H.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${H.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${H.AUDIO}])[${H.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${H.AUDIO}])[${H.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${H.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${H.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${H.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${H.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${H.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${H.USER_INACTIVE}]:not([${A.MEDIA_PAUSED}]):not([${A.MEDIA_IS_AIRPLAYING}]):not([${A.MEDIA_IS_CASTING}]):not([${H.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${H.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${H.USER_INACTIVE}]:not([${H.NO_AUTOHIDE}]):not([${A.MEDIA_PAUSED}]):not([${A.MEDIA_IS_CASTING}]):not([${H.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${H.USER_INACTIVE}][${H.AUTOHIDE_OVER_CONTROLS}]:not([${H.NO_AUTOHIDE}]):not([${A.MEDIA_PAUSED}]):not([${A.MEDIA_IS_CASTING}]):not([${H.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${H.AUDIO}])[${A.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ss.shadowRootOptions.mode}">
          ${Ss.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var Js=Object.values(A),Ys=`sm:384 md:576 lg:768 xl:960`;function Xs(e){Zs(e.target,e.contentRect.width)}function Zs(e,t){if(!e.isConnected)return;let n=Qs(e.getAttribute(H.BREAKPOINTS)??Ys),r=$s(n,t),i=!1;if(Object.keys(n).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,``),i=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),i=!0)}),i){let t=new CustomEvent(yo.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(yo.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Qs(e){let t=e.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(`:`)))}function $s(e,t){return Object.keys(e).filter(n=>t>=parseInt(e[n]))}var ec=class extends M.HTMLElement{constructor(){if(super(),ws(this,Fs),ws(this,Ls),ws(this,zs),ws(this,Vs),ws(this,Us),ws(this,Ds,void 0),ws(this,Os,0),ws(this,ks,null),ws(this,As,null),ws(this,js,void 0),this.breakpointsComputed=!1,ws(this,Ms,e=>{let t=this.media;for(let n of e){if(n.type!==`childList`)continue;let e=n.removedNodes;for(let r of e){if(r.slot!=`media`||n.target!=this)continue;let e=n.previousSibling&&n.previousSibling.previousElementSibling;if(!e||!t)this.mediaUnsetCallback(r);else{let t=e.slot!==`media`;for(;(e=e.previousSibling)!==null;)e.slot==`media`&&(t=!1);t&&this.mediaUnsetCallback(r)}}if(t)for(let e of n.addedNodes)e===t&&this.handleMediaUpdated(t)}}),ws(this,Ns,!1),ws(this,Ps,e=>{V(this,Ns)||(setTimeout(()=>{Xs(e),Ts(this,Ns,!1)},0),Ts(this,Ns,!0))}),ws(this,Gs,void 0),ws(this,Ks,()=>{if(!V(this,Gs).assignedElements({flatten:!0}).length){V(this,ks)&&this.mediaUnsetCallback(V(this,ks));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}Ts(this,Ds,new MutationObserver(V(this,Ms)))}static get observedAttributes(){return[H.AUTOHIDE,H.GESTURES_DISABLED].concat(Js).filter(e=>![A.MEDIA_RENDITION_LIST,A.MEDIA_AUDIO_TRACK_LIST,A.MEDIA_CHAPTERS_CUES,A.MEDIA_WIDTH,A.MEDIA_HEIGHT,A.MEDIA_ERROR,A.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,n){e.toLowerCase()==H.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(`:scope > [slot=media]`);return e?.nodeName==`SLOT`&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Ts(this,ks,e),e.localName.includes(`-`)&&await M.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;V(this,Ds).observe(this,{childList:!0,subtree:!0}),$o(this,V(this,Ps));let t=this.getAttribute(H.AUDIO)==null?j(`video player`):j(`audio player`);this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,t),this.handleMediaUpdated(this.media),this.setAttribute(H.USER_INACTIVE,``),Zs(this,this.getBoundingClientRect().width);let n=this.querySelector(`:scope > slot[slot=media]`);n&&(Ts(this,Gs,n),V(this,Gs).addEventListener(`slotchange`,V(this,Ks))),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointermove`,this),this.addEventListener(`pointerup`,this),this.addEventListener(`mouseleave`,this),this.addEventListener(`keyup`,this),(e=M.window)==null||e.addEventListener(`mouseup`,this)}disconnectedCallback(){var e;es(this,V(this,Ps)),clearTimeout(V(this,As)),V(this,Ds).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=M.window)==null||e.removeEventListener(`mouseup`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointermove`,this),this.removeEventListener(`pointerup`,this),this.removeEventListener(`mouseleave`,this),this.removeEventListener(`keyup`,this),V(this,Gs)&&(V(this,Gs).removeEventListener(`slotchange`,V(this,Ks)),Ts(this,Gs,null))}mediaSetCallback(e){}mediaUnsetCallback(e){Ts(this,ks,null)}handleEvent(e){switch(e.type){case`pointerdown`:Ts(this,Os,e.timeStamp);break;case`pointermove`:Es(this,Fs,Is).call(this,e);break;case`pointerup`:Es(this,Ls,Rs).call(this,e);break;case`mouseleave`:Es(this,zs,Bs).call(this);break;case`mouseup`:this.removeAttribute(H.KEYBOARD_CONTROL);break;case`keyup`:Es(this,Us,Ws).call(this),this.setAttribute(H.KEYBOARD_CONTROL,``);break}}set autohide(e){let t=Number(e);Ts(this,js,isNaN(t)?0:t)}get autohide(){return(V(this,js)===void 0?2:V(this,js)).toString()}get breakpoints(){return R(this,H.BREAKPOINTS)}set breakpoints(e){z(this,H.BREAKPOINTS,e)}get audio(){return I(this,H.AUDIO)}set audio(e){L(this,H.AUDIO,e)}get gesturesDisabled(){return I(this,H.GESTURES_DISABLED)}set gesturesDisabled(e){L(this,H.GESTURES_DISABLED,e)}get keyboardControl(){return I(this,H.KEYBOARD_CONTROL)}set keyboardControl(e){L(this,H.KEYBOARD_CONTROL,e)}get noAutohide(){return I(this,H.NO_AUTOHIDE)}set noAutohide(e){L(this,H.NO_AUTOHIDE,e)}get autohideOverControls(){return I(this,H.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){L(this,H.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return I(this,H.USER_INACTIVE)}set userInteractive(e){L(this,H.USER_INACTIVE,e)}};Ds=new WeakMap,Os=new WeakMap,ks=new WeakMap,As=new WeakMap,js=new WeakMap,Ms=new WeakMap,Ns=new WeakMap,Ps=new WeakMap,Fs=new WeakSet,Is=function(e){if(e.pointerType!==`mouse`&&e.timeStamp-V(this,Os)<250)return;Es(this,Vs,Hs).call(this),clearTimeout(V(this,As));let t=this.hasAttribute(H.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&Es(this,Us,Ws).call(this)},Ls=new WeakSet,Rs=function(e){if(e.pointerType===`touch`){let t=!this.hasAttribute(H.USER_INACTIVE);[this,this.media].includes(e.target)&&t?Es(this,zs,Bs).call(this):Es(this,Us,Ws).call(this)}else e.composedPath().some(e=>[`media-play-button`,`media-fullscreen-button`].includes(e?.localName))&&Es(this,Us,Ws).call(this)},zs=new WeakSet,Bs=function(){if(V(this,js)<0||this.hasAttribute(H.USER_INACTIVE))return;this.setAttribute(H.USER_INACTIVE,``);let e=new M.CustomEvent(yo.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},Vs=new WeakSet,Hs=function(){if(!this.hasAttribute(H.USER_INACTIVE))return;this.removeAttribute(H.USER_INACTIVE);let e=new M.CustomEvent(yo.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},Us=new WeakSet,Ws=function(){Es(this,Vs,Hs).call(this),clearTimeout(V(this,As));let e=parseInt(this.autohide);e<0||Ts(this,As,setTimeout(()=>{Es(this,zs,Bs).call(this)},e*1e3))},Gs=new WeakMap,Ks=new WeakMap,ec.shadowRootOptions={mode:`open`},ec.getTemplateHTML=qs,M.customElements.get(`media-container`)||M.customElements.define(`media-container`,ec);var tc=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},U=(e,t,n)=>(tc(e,t,`read from private field`),n?n.call(e):t.get(e)),nc=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},rc=(e,t,n,r)=>(tc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ic,ac,oc,sc,cc,lc,uc=class{constructor(e,t,{defaultValue:n}={defaultValue:void 0}){nc(this,cc),nc(this,ic,void 0),nc(this,ac,void 0),nc(this,oc,void 0),nc(this,sc,new Set),rc(this,ic,e),rc(this,ac,t),rc(this,oc,new Set(n))}[Symbol.iterator](){return U(this,cc,lc).values()}get length(){return U(this,cc,lc).size}get value(){return[...U(this,cc,lc)].join(` `)??``}set value(e){e!==this.value&&(rc(this,sc,new Set),this.add(...e?.split(` `)??[]))}toString(){return this.value}item(e){return[...U(this,cc,lc)][e]}values(){return U(this,cc,lc).values()}forEach(e,t){U(this,cc,lc).forEach(e,t)}add(...e){var t;e.forEach(e=>U(this,sc).add(e)),!(this.value===``&&!U(this,ic)?.hasAttribute(`${U(this,ac)}`))&&((t=U(this,ic))==null||t.setAttribute(`${U(this,ac)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>U(this,sc).delete(e)),(t=U(this,ic))==null||t.setAttribute(`${U(this,ac)}`,`${this.value}`)}contains(e){return U(this,cc,lc).has(e)}toggle(e,t){return t===void 0?this.contains(e)?(this.remove(e),!1):(this.add(e),!0):t?(this.add(e),!0):(this.remove(e),!1)}replace(e,t){return this.remove(e),this.add(t),e===t}};ic=new WeakMap,ac=new WeakMap,oc=new WeakMap,sc=new WeakMap,cc=new WeakSet,lc=function(){return U(this,sc).size?U(this,sc):U(this,oc)};var dc=(e=``)=>e.split(/\s+/),fc=(e=``)=>{let[t,n,r]=e.split(`:`),i=r?decodeURIComponent(r):void 0;return{kind:t===`cc`?xo.CAPTIONS:xo.SUBTITLES,language:n,label:i}},pc=(e=``,t={})=>dc(e).map(e=>{let n=fc(e);return{...t,...n}}),mc=e=>e?Array.isArray(e)?e.map(e=>typeof e==`string`?fc(e):e):typeof e==`string`?pc(e):[e]:[],hc=({kind:e,label:t,language:n}={kind:`subtitles`})=>t?`${e===`captions`?`cc`:`sb`}:${n}:${encodeURIComponent(t)}`:n,gc=(e=[])=>Array.prototype.map.call(e,hc).join(` `),_c=(e,t)=>n=>n[e]===t,vc=e=>{let t=Object.entries(e).map(([e,t])=>_c(e,t));return e=>t.every(t=>t(e))},yc=(e,t=[],n=[])=>{let r=mc(n).map(vc);Array.from(t).filter(e=>r.some(t=>t(e))).forEach(t=>{t.mode=e})},bc=(e,t=()=>!0)=>{if(!e?.textTracks)return[];let n=typeof t==`function`?t:vc(t);return Array.from(e.textTracks).filter(n)},xc=e=>!!e.mediaSubtitlesShowing?.length||e.hasAttribute(A.MEDIA_SUBTITLES_SHOWING),Sc=e=>{let{media:t,fullscreenElement:n}=e;try{let e=n&&`requestFullscreen`in n?`requestFullscreen`:n&&`webkitRequestFullScreen`in n?`webkitRequestFullScreen`:void 0;if(e){let t=n[e]?.call(n);if(t instanceof Promise)return t.catch(()=>{})}else t?.webkitEnterFullscreen?t.webkitEnterFullscreen():t?.requestFullscreen&&t.requestFullscreen()}catch(e){console.error(e)}},Cc=`exitFullscreen`in Yo?`exitFullscreen`:`webkitExitFullscreen`in Yo?`webkitExitFullscreen`:`webkitCancelFullScreen`in Yo?`webkitCancelFullScreen`:void 0,wc=e=>{let{documentElement:t}=e;if(Cc){let e=(t?.[Cc])?.call(t);if(e instanceof Promise)return e.catch(()=>{})}},Tc=`fullscreenElement`in Yo?`fullscreenElement`:`webkitFullscreenElement`in Yo?`webkitFullscreenElement`:void 0,Ec=e=>{let{documentElement:t,media:n}=e,r=t?.[Tc];return!r&&`webkitDisplayingFullscreen`in n&&`webkitPresentationMode`in n&&n.webkitDisplayingFullscreen&&n.webkitPresentationMode===Eo.FULLSCREEN?n:r},Dc=e=>{let{media:t,documentElement:n,fullscreenElement:r=t}=e;if(!t||!n)return!1;let i=Ec(e);if(!i)return!1;if(i===r||i===t)return!0;if(i.localName.includes(`-`)){let e=i.shadowRoot;if(!(Tc in e))return ss(i,r);for(;e?.[Tc];){if(e[Tc]===r)return!0;e=e[Tc]?.shadowRoot}}return!1},Oc=`fullscreenEnabled`in Yo?`fullscreenEnabled`:`webkitFullscreenEnabled`in Yo?`webkitFullscreenEnabled`:void 0,kc=e=>{let{documentElement:t,media:n}=e;return!!t?.[Oc]||n&&`webkitSupportsFullscreen`in n},Ac,jc=()=>{var e;return Ac||(Ac=((e=Yo)?.createElement)?.call(e,`video`),Ac)},Mc=async(e=jc())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let n=new AbortController,r=await Promise.race([Nc(e,n.signal),Pc(e,t)]);return n.abort(),r},Nc=(e,t)=>new Promise(n=>{e.addEventListener(`volumechange`,()=>n(!0),{signal:t})}),Pc=async(e,t)=>{for(let n=0;n<10;n++){if(e.volume===t)return!1;await Mo(10)}return e.volume!==t},Fc=/.*Version\/.*Safari\/.*/.test(M.navigator.userAgent),Ic=(e=jc())=>M.matchMedia(`(display-mode: standalone)`).matches&&Fc?!1:typeof e?.requestPictureInPicture==`function`,Lc=(e=jc())=>kc({documentElement:Yo,media:e}),Rc=Lc(),zc=Ic(),Bc=!!M.WebKitPlaybackTargetAvailabilityEvent,Vc=!!M.chrome,Hc=e=>bc(e.media,e=>[xo.SUBTITLES,xo.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),Uc=e=>bc(e.media,e=>e.mode===So.SHOWING&&[xo.SUBTITLES,xo.CAPTIONS].includes(e.kind)),Wc=(e,t)=>{let n=Hc(e),r=Uc(e),i=!!r.length;if(n.length){if(t===!1||i&&t!==!0)yc(So.DISABLED,n,r);else if(t===!0||!i&&t!==!1){let t=n[0],{options:i}=e;if(!i?.noSubtitlesLangPref){let e=M.localStorage.getItem(`media-chrome-pref-subtitles-lang`),r=e?[e,...M.navigator.languages]:M.navigator.languages,i=n.filter(e=>r.some(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))).sort((e,t)=>r.findIndex(t=>e.language.toLowerCase().startsWith(t.split(`-`)[0]))-r.findIndex(e=>t.language.toLowerCase().startsWith(e.split(`-`)[0])));i[0]&&(t=i[0])}let{language:a,label:o,kind:s}=t;yc(So.DISABLED,n,r),yc(So.SHOWING,n,[{language:a,label:o,kind:s}])}}},Gc=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e==`number`&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e==`object`?Array.isArray(e)?Kc(e,t):Object.entries(e).every(([e,n])=>e in t&&Gc(n,t[e])):!1,Kc=(e,t)=>{let n=Array.isArray(e),r=Array.isArray(t);return n===r?n||r?e.length===t.length?e.every((e,n)=>Gc(e,t[n])):!1:!0:!1},qc=Object.values(To),Jc,Yc=Mc().then(e=>(Jc=e,Jc)),Xc=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!(`localName`in e&&e instanceof M.HTMLElement))return;let t=e.localName;if(!t.includes(`-`))return;let n=M.customElements.get(t);n&&e instanceof n||(await M.customElements.whenDefined(t),M.customElements.upgrade(e))}))},Zc=new M.DOMParser,Qc=e=>e&&(Zc.parseFromString(e,`text/html`).body.textContent||e),$c={mediaError:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorCode:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.code},mediaEvents:[`emptied`,`error`,`playing`]},mediaErrorMessage:{get(e,t){let{media:n}=e;if(t?.type!==`playing`)return n?.error?.message??``},mediaEvents:[`emptied`,`error`,`playing`]},mediaWidth:{get(e){let{media:t}=e;return t?.videoWidth??0},mediaEvents:[`resize`]},mediaHeight:{get(e){let{media:t}=e;return t?.videoHeight??0},mediaEvents:[`resize`]},mediaPaused:{get(e){let{media:t}=e;return t?.paused??!0},set(e,t){var n;let{media:r}=t;r&&(e?r.pause():(n=r.play())==null||n.catch(()=>{}))},mediaEvents:[`play`,`playing`,`pause`,`emptied`]},mediaHasPlayed:{get(e,t){let{media:n}=e;return n?t?t.type===`playing`:!n.paused:!1},mediaEvents:[`playing`,`emptied`]},mediaEnded:{get(e){let{media:t}=e;return t?.ended??!1},mediaEvents:[`seeked`,`ended`,`emptied`]},mediaPlaybackRate:{get(e){let{media:t}=e;return t?.playbackRate??1},set(e,t){let{media:n}=t;n&&Number.isFinite(+e)&&(n.playbackRate=+e)},mediaEvents:[`ratechange`,`loadstart`]},mediaMuted:{get(e){let{media:t}=e;return t?.muted??!1},set(e,t){let{media:n,options:{noMutedPref:r}={}}=t;if(n){n.muted=e;try{let t=M.localStorage.getItem(`media-chrome-pref-muted`)!==null,i=n.hasAttribute(`muted`);if(r){t&&M.localStorage.removeItem(`media-chrome-pref-muted`);return}if(i&&!t)return;M.localStorage.setItem(`media-chrome-pref-muted`,e?`true`:`false`)}catch(e){console.debug(`Error setting muted pref`,e)}}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:n}}=t,{media:r}=t;if(!(!r||r.muted||n))try{let n=M.localStorage.getItem(`media-chrome-pref-muted`)===`true`;$c.mediaMuted.set(n,t),e(n)}catch(e){console.debug(`Error getting muted pref`,e)}}]},mediaLoop:{get(e){let{media:t}=e;return t?.loop},set(e,t){let{media:n}=t;n&&(n.loop=e)},mediaEvents:[`medialooprequest`]},mediaVolume:{get(e){let{media:t}=e;return t?.volume??1},set(e,t){let{media:n,options:{noVolumePref:r}={}}=t;if(n){try{e==null?M.localStorage.removeItem(`media-chrome-pref-volume`):!n.hasAttribute(`muted`)&&!r&&M.localStorage.setItem(`media-chrome-pref-volume`,e.toString())}catch(e){console.debug(`Error setting volume pref`,e)}Number.isFinite(+e)&&(n.volume=+e)}},mediaEvents:[`volumechange`],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:n}}=t;if(!n)try{let{media:n}=t;if(!n)return;let r=M.localStorage.getItem(`media-chrome-pref-volume`);if(r==null)return;$c.mediaVolume.set(+r,t),e(+r)}catch(e){console.debug(`Error getting volume pref`,e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return t?.volume===void 0?`high`:t.muted||t.volume===0?`off`:t.volume<.5?`low`:t.volume<.75?`medium`:`high`},mediaEvents:[`volumechange`]},mediaCurrentTime:{get(e){let{media:t}=e;return t?.currentTime??0},set(e,t){let{media:n}=t;!n||!jo(e)||(n.currentTime=e)},mediaEvents:[`timeupdate`,`loadedmetadata`]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:n}={}}=e;return n&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?n:Number.isFinite(t?.duration)?t.duration:NaN},mediaEvents:[`durationchange`,`loadedmetadata`,`emptied`]},mediaLoading:{get(e){let{media:t}=e;return t?.readyState<3},mediaEvents:[`waiting`,`playing`,`emptied`]},mediaSeekable:{get(e){let{media:t}=e;if(!t?.seekable?.length)return;let n=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!n&&!r))return[Number(n.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:[`loadedmetadata`,`emptied`,`progress`,`seekablechange`]},mediaBuffered:{get(e){let{media:t}=e,n=t?.buffered??[];return Array.from(n).map((e,t)=>[Number(n.start(t).toFixed(3)),Number(n.end(t).toFixed(3))])},mediaEvents:[`progress`,`emptied`]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:n}={}}=e,r=[To.LIVE,To.ON_DEMAND].includes(n)?n:void 0;if(!t)return r;let{streamType:i}=t;if(qc.includes(i))return i===To.UNKNOWN?r:i;let a=t.duration;return a===1/0?To.LIVE:Number.isFinite(a)?To.ON_DEMAND:r},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:n}=t,r=$c.mediaStreamType.get(e);return(n==null||Number.isNaN(n))&&r===To.LIVE?0:n},mediaEvents:[`emptied`,`durationchange`,`loadedmetadata`,`streamtypechange`,`targetlivewindowchange`]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:n=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart==`number`)return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if($c.mediaStreamType.get(e)!==To.LIVE)return!1;let r=t.seekable;if(!r)return!0;if(!r.length)return!1;let i=r.end(r.length-1)-n;return t.currentTime>=i},mediaEvents:[`playing`,`timeupdate`,`progress`,`waiting`,`emptied`]},mediaSubtitlesList:{get(e){return Hc(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`]},mediaSubtitlesShowing:{get(e){return Uc(e).map(({kind:e,label:t,language:n})=>({kind:e,label:t,language:n}))},mediaEvents:[`loadstart`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{var n,r;let{media:i,options:a}=t;if(!i)return;let o=e=>{a.defaultSubtitles&&(e&&![xo.CAPTIONS,xo.SUBTITLES].includes(e?.track?.kind)||Wc(t,!0))};return i.addEventListener(`loadstart`,o),(n=i.textTracks)==null||n.addEventListener(`addtrack`,o),(r=i.textTracks)==null||r.addEventListener(`removetrack`,o),()=>{var e,t;i.removeEventListener(`loadstart`,o),(e=i.textTracks)==null||e.removeEventListener(`addtrack`,o),(t=i.textTracks)==null||t.removeEventListener(`removetrack`,o)}}]},mediaChaptersCues:{get(e){let{media:t}=e;if(!t)return[];let[n]=bc(t,{kind:xo.CHAPTERS});return Array.from(n?.cues??[]).map(({text:e,startTime:t,endTime:n})=>({text:Qc(e),startTime:t,endTime:n}))},mediaEvents:[`loadstart`,`loadedmetadata`],textTracksEvents:[`addtrack`,`removetrack`,`change`],stateOwnersUpdateHandlers:[(e,t)=>{let{media:n}=t;if(!n)return;let r=n.querySelector(`track[kind="chapters"][default][src]`),i=n.shadowRoot?.querySelector(`:is(video,audio) > track[kind="chapters"][default][src]`);return r?.addEventListener(`load`,e),i?.addEventListener(`load`,e),()=>{r?.removeEventListener(`load`,e),i?.removeEventListener(`load`,e)}}]},mediaIsPip:{get(e){let{media:t,documentElement:n}=e;if(!t||!n||!n.pictureInPictureElement)return!1;if(n.pictureInPictureElement===t)return!0;if(n.pictureInPictureElement instanceof HTMLMediaElement)return t.localName?.includes(`-`)?ss(t,n.pictureInPictureElement):!1;if(n.pictureInPictureElement.localName.includes(`-`)){let e=n.pictureInPictureElement.shadowRoot;for(;e?.pictureInPictureElement;){if(e.pictureInPictureElement===t)return!0;e=e.pictureInPictureElement?.shadowRoot}}return!1},set(e,t){let{media:n}=t;if(n)if(e){if(!Yo.pictureInPictureEnabled){console.warn(`MediaChrome: Picture-in-picture is not enabled`);return}if(!n.requestPictureInPicture){console.warn(`MediaChrome: The current media does not support picture-in-picture`);return}let e=()=>{console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.`)};n.requestPictureInPicture().catch(t=>{if(t.code===11){if(!n.src){console.warn(`MediaChrome: The media is not ready for picture-in-picture. It must have a src set.`);return}if(n.readyState===0&&n.preload===`none`){let t=()=>{n.removeEventListener(`loadedmetadata`,r),n.preload=`none`},r=()=>{n.requestPictureInPicture().catch(e),t()};n.addEventListener(`loadedmetadata`,r),n.preload=`metadata`,setTimeout(()=>{n.readyState===0&&e(),t()},1e3)}else throw t}else throw t})}else Yo.pictureInPictureElement&&Yo.exitPictureInPicture()},mediaEvents:[`enterpictureinpicture`,`leavepictureinpicture`]},mediaRenditionList:{get(e){let{media:t}=e;return[...t?.videoRenditions??[]].map(e=>({...e}))},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaRenditionSelected:{get(e){let{media:t}=e;return t?.videoRenditions?.[t.videoRenditions?.selectedIndex]?.id},set(e,t){let{media:n}=t;if(!n?.videoRenditions){console.warn(`MediaController: Rendition selection not supported by this media.`);return}let r=e,i=Array.prototype.findIndex.call(n.videoRenditions,e=>e.id==r);n.videoRenditions.selectedIndex!=i&&(n.videoRenditions.selectedIndex=i)},mediaEvents:[`emptied`],videoRenditionsEvents:[`addrendition`,`removerendition`,`change`]},mediaAudioTrackList:{get(e){let{media:t}=e;return[...t?.audioTracks??[]]},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaAudioTrackEnabled:{get(e){let{media:t}=e;return[...t?.audioTracks??[]].find(e=>e.enabled)?.id},set(e,t){let{media:n}=t;if(!n?.audioTracks){console.warn(`MediaChrome: Audio track selection not supported by this media.`);return}let r=e;for(let e of n.audioTracks)e.enabled=r==e.id},mediaEvents:[`emptied`],audioTracksEvents:[`addtrack`,`removetrack`,`change`]},mediaIsFullscreen:{get(e){return Dc(e)},set(e,t,n){var r;e?(Sc(t),n.detail&&!t.media?.inert&&((r=t.media)==null||r.focus())):wc(t)},rootEvents:[`fullscreenchange`,`webkitfullscreenchange`],mediaEvents:[`webkitbeginfullscreen`,`webkitendfullscreen`,`webkitpresentationmodechanged`]},mediaIsCasting:{get(e){let{media:t}=e;return!t?.remote||t.remote?.state===`disconnected`?!1:!!t.remote.state},set(e,t){let{media:n}=t;if(n&&!(e&&n.remote?.state!==`disconnected`)&&!(!e&&n.remote?.state!==`connected`)){if(typeof n.remote.prompt!=`function`){console.warn(`MediaChrome: Casting is not supported in this environment`);return}n.remote.prompt().catch(()=>{})}},remoteEvents:[`connect`,`connecting`,`disconnect`]},mediaIsAirplaying:{get(){return!1},set(e,t){let{media:n}=t;if(n){if(!(n.webkitShowPlaybackTargetPicker&&M.WebKitPlaybackTargetAvailabilityEvent)){console.error(`MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment`);return}n.webkitShowPlaybackTargetPicker()}},mediaEvents:[`webkitcurrentplaybacktargetiswirelesschanged`]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!Rc||!Lc(t))return wo.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!zc||!Ic(t))return wo.UNSUPPORTED;if(t?.disablePictureInPicture)return wo.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(Jc===!1||t?.volume==null)return wo.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{Jc??Yc.then(t=>e(t?void 0:wo.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t=`not-available`}={}){let{media:n}=e;if(!Vc||!n?.remote?.state)return wo.UNSUPPORTED;if(!(t==null||t===`available`))return wo.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get(e,t){if(!Bc)return wo.UNSUPPORTED;if(t?.availability===`not-available`)return wo.UNAVAILABLE},mediaEvents:[`webkitplaybacktargetavailabilitychanged`],stateOwnersUpdateHandlers:[(e,t)=>{var n;let{media:r}=t;if(r)return r.disableRemotePlayback||r.hasAttribute(`disableremoteplayback`)||(n=r?.remote)==null||n.watchAvailability(t=>{e({availability:t?`available`:`not-available`})}).catch(t=>{t.name===`NotSupportedError`?e({availability:null}):e({availability:`not-available`})}),()=>{var e;(e=r?.remote)==null||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){let{media:t}=e;if(!t?.videoRenditions)return wo.UNSUPPORTED;if(!t.videoRenditions?.length)return wo.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],videoRenditionsEvents:[`addrendition`,`removerendition`]},mediaAudioTrackUnavailable:{get(e){let{media:t}=e;if(!t?.audioTracks)return wo.UNSUPPORTED;if((t.audioTracks?.length??0)<=1)return wo.UNAVAILABLE},mediaEvents:[`emptied`,`loadstart`],audioTracksEvents:[`addtrack`,`removetrack`]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return t??`en`}}},el={[O.MEDIA_PREVIEW_REQUEST](e,t,{detail:n}){let{media:r}=t,i=n??void 0,a,o;if(r&&i!=null){let[e]=bc(r,{kind:xo.METADATA,label:`thumbnails`}),t=Array.prototype.find.call(e?.cues??[],(e,t,n)=>t===0?e.endTime>i:t===n.length-1?e.startTime<=i:e.startTime<=i&&e.endTime>i);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:r?.querySelector(`track[label="thumbnails"]`)?.src,n=new URL(t.text,e);o=new URLSearchParams(n.hash).get(`#xywh`).split(`,`).map(e=>+e),a=n.href}}let s=e.mediaDuration.get(t),c=e.mediaChaptersCues.get(t).find((e,t,n)=>t===n.length-1&&s===e.endTime?e.startTime<=i&&e.endTime>=i:e.startTime<=i&&e.endTime>i)?.text;return n!=null&&c==null&&(c=``),{mediaPreviewTime:i,mediaPreviewImage:a,mediaPreviewCoords:o,mediaPreviewChapter:c}},[O.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[O.MEDIA_PLAY_REQUEST](e,t){let n=e.mediaStreamType.get(t)===To.LIVE,r=!t.options?.noAutoSeekToLive,i=e.mediaTargetLiveWindow.get(t)>0;if(n&&r&&!i){let n=e.mediaSeekable.get(t)?.[1];if(n){let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)}}e.mediaPaused.set(!1,t)},[O.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:n}){let r=n;e.mediaPlaybackRate.set(r,t)},[O.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[O.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[O.MEDIA_LOOP_REQUEST](e,t,{detail:n}){let r=!!n;return e.mediaLoop.set(r,t),{mediaLoop:r}},[O.MEDIA_VOLUME_REQUEST](e,t,{detail:n}){let r=n;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(r,t)},[O.MEDIA_SEEK_REQUEST](e,t,{detail:n}){let r=n;e.mediaCurrentTime.set(r,t)},[O.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){let n=e.mediaSeekable.get(t)?.[1];if(Number.isNaN(Number(n)))return;let r=n-(t.options?.seekToLiveOffset??0);e.mediaCurrentTime.set(r,t)},[O.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:n}){let{options:r}=t,i=Hc(t),a=mc(n),o=a[0]?.language;o&&!r.noSubtitlesLangPref&&M.localStorage.setItem(`media-chrome-pref-subtitles-lang`,o),yc(So.SHOWING,i,a)},[O.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:n}){let r=Hc(t),i=n??[];yc(So.DISABLED,r,i)},[O.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:n}){Wc(t,n)},[O.MEDIA_RENDITION_REQUEST](e,t,{detail:n}){let r=n;e.mediaRenditionSelected.set(r,t)},[O.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:n}){let r=n;e.mediaAudioTrackEnabled.set(r,t)},[O.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[O.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[O.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,n){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,n)},[O.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[O.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[O.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[O.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},tl=({media:e,fullscreenElement:t,documentElement:n,stateMediator:r=$c,requestMap:i=el,options:a={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{let s=[],c={options:{...a}},l=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),u=e=>{e!=null&&(Gc(e,l)||(l=Object.freeze({...l,...e}),s.forEach(e=>e(l))))},d=()=>{u(Object.entries(r).reduce((e,[t,{get:n}])=>(e[t]=n(c),e),{}))},f={},p,m=async(e,t)=>{let n=!!p;if(p={...c,...p??{},...e},n)return;await Xc(...Object.values(e));let i=s.length>0&&t===0&&o,a=c.media!==p.media,l=c.media?.textTracks!==p.media?.textTracks,m=c.media?.videoRenditions!==p.media?.videoRenditions,h=c.media?.audioTracks!==p.media?.audioTracks,g=c.media?.remote!==p.media?.remote,_=c.documentElement!==p.documentElement,v=!!c.media&&(a||i),y=!!c.media?.textTracks&&(l||i),b=!!c.media?.videoRenditions&&(m||i),x=!!c.media?.audioTracks&&(h||i),ee=!!c.media?.remote&&(g||i),te=!!c.documentElement&&(_||i),ne=v||y||b||x||ee||te,re=s.length===0&&t===1&&o,ie=!!p.media&&(a||re),ae=!!p.media?.textTracks&&(l||re),S=!!p.media?.videoRenditions&&(m||re),oe=!!p.media?.audioTracks&&(h||re),se=!!p.media?.remote&&(g||re),ce=!!p.documentElement&&(_||re),le=ie||ae||S||oe||se||ce;if(!(ne||le)){Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0;return}Object.entries(r).forEach(([e,{get:t,mediaEvents:n=[],textTracksEvents:r=[],videoRenditionsEvents:i=[],audioTracksEvents:a=[],remoteEvents:o=[],rootEvents:s=[],stateOwnersUpdateHandlers:l=[]}])=>{f[e]||(f[e]={});let d=n=>{let r=t(c,n);u({[e]:r})},m;m=f[e].mediaEvents,n.forEach(t=>{m&&v&&(c.media.removeEventListener(t,m),f[e].mediaEvents=void 0),ie&&(p.media.addEventListener(t,d),f[e].mediaEvents=d)}),m=f[e].textTracksEvents,r.forEach(t=>{var n,r;m&&y&&((n=c.media.textTracks)==null||n.removeEventListener(t,m),f[e].textTracksEvents=void 0),ae&&((r=p.media.textTracks)==null||r.addEventListener(t,d),f[e].textTracksEvents=d)}),m=f[e].videoRenditionsEvents,i.forEach(t=>{var n,r;m&&b&&((n=c.media.videoRenditions)==null||n.removeEventListener(t,m),f[e].videoRenditionsEvents=void 0),S&&((r=p.media.videoRenditions)==null||r.addEventListener(t,d),f[e].videoRenditionsEvents=d)}),m=f[e].audioTracksEvents,a.forEach(t=>{var n,r;m&&x&&((n=c.media.audioTracks)==null||n.removeEventListener(t,m),f[e].audioTracksEvents=void 0),oe&&((r=p.media.audioTracks)==null||r.addEventListener(t,d),f[e].audioTracksEvents=d)}),m=f[e].remoteEvents,o.forEach(t=>{var n,r;m&&ee&&((n=c.media.remote)==null||n.removeEventListener(t,m),f[e].remoteEvents=void 0),se&&((r=p.media.remote)==null||r.addEventListener(t,d),f[e].remoteEvents=d)}),m=f[e].rootEvents,s.forEach(t=>{m&&te&&(c.documentElement.removeEventListener(t,m),f[e].rootEvents=void 0),ce&&(p.documentElement.addEventListener(t,d),f[e].rootEvents=d)});let h=f[e].stateOwnersUpdateHandlers;if(h&&ne&&(Array.isArray(h)?h:[h]).forEach(e=>{typeof e==`function`&&e()}),le){let t=l.map(e=>e(d,p)).filter(e=>typeof e==`function`);f[e].stateOwnersUpdateHandlers=t.length===1?t[0]:t}else ne&&(f[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(p).forEach(([e,t])=>{c[e]=t}),d(),p=void 0};return m({media:e,fullscreenElement:t,documentElement:n,options:a}),{dispatch(e){let{type:t,detail:n}=e;if(i[t]&&l.mediaErrorCode==null){u(i[t](r,c,e));return}t===`mediaelementchangerequest`?m({media:n}):t===`fullscreenelementchangerequest`?m({fullscreenElement:n}):t===`documentelementchangerequest`?m({documentElement:n}):t===`optionschangerequest`&&(Object.entries(n??{}).forEach(([e,t])=>{c.options[e]=t}),d())},getState(){return l},subscribe(e){return m({},s.length+1),s.push(e),e(l),()=>{let t=s.indexOf(e);t>=0&&(m({},s.length-1),s.splice(t,1))}}}},nl=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},W=(e,t,n)=>(nl(e,t,`read from private field`),n?n.call(e):t.get(e)),rl=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},il=(e,t,n,r)=>(nl(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),al=(e,t,n)=>(nl(e,t,`access private method`),n),ol,sl,G,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl=[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Enter`,` `,`f`,`m`,`k`,`c`,`l`,`j`,`>`,`<`,`p`],xl=10,Sl=.025,Cl=.25,wl=.25,Tl=2,K={DEFAULT_SUBTITLES:`defaultsubtitles`,DEFAULT_STREAM_TYPE:`defaultstreamtype`,DEFAULT_DURATION:`defaultduration`,FULLSCREEN_ELEMENT:`fullscreenelement`,HOTKEYS:`hotkeys`,KEYBOARD_BACKWARD_SEEK_OFFSET:`keyboardbackwardseekoffset`,KEYBOARD_FORWARD_SEEK_OFFSET:`keyboardforwardseekoffset`,KEYBOARD_DOWN_VOLUME_STEP:`keyboarddownvolumestep`,KEYBOARD_UP_VOLUME_STEP:`keyboardupvolumestep`,KEYS_USED:`keysused`,LANG:`lang`,LOOP:`loop`,LIVE_EDGE_OFFSET:`liveedgeoffset`,NO_AUTO_SEEK_TO_LIVE:`noautoseektolive`,NO_DEFAULT_STORE:`nodefaultstore`,NO_HOTKEYS:`nohotkeys`,NO_MUTED_PREF:`nomutedpref`,NO_SUBTITLES_LANG_PREF:`nosubtitleslangpref`,NO_VOLUME_PREF:`novolumepref`,SEEK_TO_LIVE_OFFSET:`seektoliveoffset`},El=class extends ec{constructor(){super(),rl(this,pl),rl(this,gl),rl(this,vl),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,rl(this,ol,new uc(this,K.HOTKEYS)),rl(this,sl,void 0),rl(this,G,void 0),rl(this,cl,null),rl(this,ll,void 0),rl(this,ul,void 0),rl(this,dl,e=>{var t;(t=W(this,G))==null||t.dispatch(e)}),rl(this,fl,void 0),rl(this,hl,e=>{let{key:t,shiftKey:n}=e;if(!(n&&(t===`/`||t===`?`)||bl.includes(t))){this.removeEventListener(`keyup`,W(this,hl));return}this.keyboardShortcutHandler(e)}),this.associateElement(this);let e={};il(this,ll,t=>{Object.entries(t).forEach(([t,n])=>{if(t in e&&e[t]===n)return;this.propagateMediaState(t,n);let r=t.toLowerCase(),i=new M.CustomEvent(bo[r],{composed:!0,detail:n});this.dispatchEvent(i)}),e=t}),this.hasAttribute(K.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(K.NO_HOTKEYS,K.HOTKEYS,K.DEFAULT_STREAM_TYPE,K.DEFAULT_SUBTITLES,K.DEFAULT_DURATION,K.NO_MUTED_PREF,K.NO_VOLUME_PREF,K.LANG,K.LOOP,K.LIVE_EDGE_OFFSET,K.SEEK_TO_LIVE_OFFSET,K.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return W(this,G)}set mediaStore(e){var t;if(W(this,G)&&((t=W(this,ul))==null||t.call(this),il(this,ul,void 0)),il(this,G,e),!W(this,G)&&!this.hasAttribute(K.NO_DEFAULT_STORE)){al(this,pl,ml).call(this);return}il(this,ul,W(this,G)?.subscribe(W(this,ll)))}get fullscreenElement(){return W(this,sl)??this}set fullscreenElement(e){var t;this.hasAttribute(K.FULLSCREEN_ELEMENT)&&this.removeAttribute(K.FULLSCREEN_ELEMENT),il(this,sl,e),(t=W(this,G))==null||t.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}get defaultSubtitles(){return I(this,K.DEFAULT_SUBTITLES)}set defaultSubtitles(e){L(this,K.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return R(this,K.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){z(this,K.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return P(this,K.DEFAULT_DURATION)}set defaultDuration(e){F(this,K.DEFAULT_DURATION,e)}get noHotkeys(){return I(this,K.NO_HOTKEYS)}set noHotkeys(e){L(this,K.NO_HOTKEYS,e)}get keysUsed(){return R(this,K.KEYS_USED)}set keysUsed(e){z(this,K.KEYS_USED,e)}get liveEdgeOffset(){return P(this,K.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){F(this,K.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return I(this,K.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){L(this,K.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return I(this,K.NO_VOLUME_PREF)}set noVolumePref(e){L(this,K.NO_VOLUME_PREF,e)}get noMutedPref(){return I(this,K.NO_MUTED_PREF)}set noMutedPref(e){L(this,K.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return I(this,K.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){L(this,K.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return I(this,K.NO_DEFAULT_STORE)}set noDefaultStore(e){L(this,K.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,n){var r,i,a,o,s,c,l,u,d,f;if(super.attributeChangedCallback(e,t,n),e===K.NO_HOTKEYS)n!==t&&n===``?(this.hasAttribute(K.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):n!==t&&n===null&&this.enableHotkeys();else if(e===K.HOTKEYS)W(this,ol).value=n;else if(e===K.DEFAULT_SUBTITLES&&n!==t)(r=W(this,G))==null||r.dispatch({type:`optionschangerequest`,detail:{defaultSubtitles:this.hasAttribute(K.DEFAULT_SUBTITLES)}});else if(e===K.DEFAULT_STREAM_TYPE)(i=W(this,G))==null||i.dispatch({type:`optionschangerequest`,detail:{defaultStreamType:this.getAttribute(K.DEFAULT_STREAM_TYPE)??void 0}});else if(e===K.LIVE_EDGE_OFFSET&&n!==t)(a=W(this,G))==null||a.dispatch({type:`optionschangerequest`,detail:{liveEdgeOffset:this.hasAttribute(K.LIVE_EDGE_OFFSET)?+this.getAttribute(K.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(K.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(K.SEEK_TO_LIVE_OFFSET):this.hasAttribute(K.LIVE_EDGE_OFFSET)?+this.getAttribute(K.LIVE_EDGE_OFFSET):void 0}});else if(e===K.SEEK_TO_LIVE_OFFSET&&n!==t)(o=W(this,G))==null||o.dispatch({type:`optionschangerequest`,detail:{seekToLiveOffset:this.hasAttribute(K.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(K.SEEK_TO_LIVE_OFFSET):this.hasAttribute(K.LIVE_EDGE_OFFSET)?+this.getAttribute(K.LIVE_EDGE_OFFSET):void 0}});else if(e===K.NO_AUTO_SEEK_TO_LIVE)(s=W(this,G))==null||s.dispatch({type:`optionschangerequest`,detail:{noAutoSeekToLive:this.hasAttribute(K.NO_AUTO_SEEK_TO_LIVE)}});else if(e===K.FULLSCREEN_ELEMENT){let e=n?this.getRootNode()?.getElementById(n):void 0;il(this,sl,e),(c=W(this,G))==null||c.dispatch({type:`fullscreenelementchangerequest`,detail:this.fullscreenElement})}else e===K.LANG&&n!==t?(Fo(n),(l=W(this,G))==null||l.dispatch({type:`optionschangerequest`,detail:{mediaLang:n}})):e===K.LOOP&&n!==t?(u=W(this,G))==null||u.dispatch({type:O.MEDIA_LOOP_REQUEST,detail:n!=null}):e===K.NO_VOLUME_PREF&&n!==t?(d=W(this,G))==null||d.dispatch({type:`optionschangerequest`,detail:{noVolumePref:this.hasAttribute(K.NO_VOLUME_PREF)}}):e===K.NO_MUTED_PREF&&n!==t&&((f=W(this,G))==null||f.dispatch({type:`optionschangerequest`,detail:{noMutedPref:this.hasAttribute(K.NO_MUTED_PREF)}}))}connectedCallback(){var e;!W(this,G)&&!this.hasAttribute(K.NO_DEFAULT_STORE)&&al(this,pl,ml).call(this),(e=W(this,G))==null||e.dispatch({type:`documentelementchangerequest`,detail:Yo}),super.connectedCallback(),W(this,G)&&!W(this,ul)&&il(this,ul,W(this,G)?.subscribe(W(this,ll))),W(this,fl)!==void 0&&W(this,G)&&this.media&&setTimeout(()=>{var e;this.media?.textTracks?.length&&((e=W(this,G))==null||e.dispatch({type:O.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:W(this,fl)}))},0),this.hasAttribute(K.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,n,r;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),W(this,G)){let e=W(this,G).getState();il(this,fl,!!e.mediaSubtitlesShowing?.length),(t=W(this,G))==null||t.dispatch({type:`documentelementchangerequest`,detail:void 0}),(n=W(this,G))==null||n.dispatch({type:O.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}W(this,ul)&&((r=W(this,ul))==null||r.call(this),il(this,ul,void 0)),this.unassociateElement(this)}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=W(this,G))==null||t.dispatch({type:`mediaelementchangerequest`,detail:e}),e.hasAttribute(`tabindex`)||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=W(this,G))==null||t.dispatch({type:`mediaelementchangerequest`,detail:void 0})}propagateMediaState(e,t){Ll(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let n=Rl(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(O).forEach(t=>{e.addEventListener(t,W(this,dl))}),t.set(e,n)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(O).forEach(t=>{e.removeEventListener(t,W(this,dl))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),W(this,G)&&Object.entries(W(this,G).getState()).forEach(([t,n])=>{Ll([e],t,n)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,n=t.indexOf(e);n<0||t.splice(n,1)}enableHotkeys(){this.addEventListener(`keydown`,al(this,gl,_l))}disableHotkeys(){this.removeEventListener(`keydown`,al(this,gl,_l)),this.removeEventListener(`keyup`,W(this,hl))}get hotkeys(){return W(this,ol)}set hotkeys(e){z(this,K.HOTKEYS,e)}keyboardShortcutHandler(e){let t=e.target;if((t.getAttribute(K.KEYS_USED)?.split(` `)??t?.keysUsed??[]).map(e=>e===`Space`?` `:e).filter(Boolean).includes(e.key))return;let n,r,i;if(!W(this,ol).contains(`no${e.key.toLowerCase()}`)&&!(e.key===` `&&W(this,ol).contains(`nospace`))&&!(e.shiftKey&&(e.key===`/`||e.key===`?`)&&W(this,ol).contains(`noshift+/`)))switch(e.key){case` `:case`k`:n=W(this,G).getState().mediaPaused?O.MEDIA_PLAY_REQUEST:O.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new M.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`m`:n=this.mediaStore.getState().mediaVolumeLevel===`off`?O.MEDIA_UNMUTE_REQUEST:O.MEDIA_MUTE_REQUEST,this.dispatchEvent(new M.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`f`:n=this.mediaStore.getState().mediaIsFullscreen?O.MEDIA_EXIT_FULLSCREEN_REQUEST:O.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new M.CustomEvent(n,{composed:!0,bubbles:!0}));break;case`c`:this.dispatchEvent(new M.CustomEvent(O.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case`ArrowLeft`:case`j`:{let e=this.hasAttribute(K.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(K.KEYBOARD_BACKWARD_SEEK_OFFSET):xl;r=Math.max((this.mediaStore.getState().mediaCurrentTime??0)-e,0),i=new M.CustomEvent(O.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowRight`:case`l`:{let e=this.hasAttribute(K.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(K.KEYBOARD_FORWARD_SEEK_OFFSET):xl;r=Math.max((this.mediaStore.getState().mediaCurrentTime??0)+e,0),i=new M.CustomEvent(O.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowUp`:{let e=this.hasAttribute(K.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(K.KEYBOARD_UP_VOLUME_STEP):Sl;r=Math.min((this.mediaStore.getState().mediaVolume??1)+e,1),i=new M.CustomEvent(O.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`ArrowDown`:{let e=this.hasAttribute(K.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(K.KEYBOARD_DOWN_VOLUME_STEP):Sl;r=Math.max((this.mediaStore.getState().mediaVolume??1)-e,0),i=new M.CustomEvent(O.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`<`:{let e=this.mediaStore.getState().mediaPlaybackRate??1;r=Math.max(e-Cl,wl).toFixed(2),i=new M.CustomEvent(O.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`>`:{let e=this.mediaStore.getState().mediaPlaybackRate??1;r=Math.min(e+Cl,Tl).toFixed(2),i=new M.CustomEvent(O.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r}),this.dispatchEvent(i);break}case`/`:case`?`:e.shiftKey&&al(this,vl,yl).call(this);break;case`p`:n=this.mediaStore.getState().mediaIsPip?O.MEDIA_EXIT_PIP_REQUEST:O.MEDIA_ENTER_PIP_REQUEST,i=new M.CustomEvent(n,{composed:!0,bubbles:!0}),this.dispatchEvent(i);break;default:break}}};ol=new WeakMap,sl=new WeakMap,G=new WeakMap,cl=new WeakMap,ll=new WeakMap,ul=new WeakMap,dl=new WeakMap,fl=new WeakMap,pl=new WeakSet,ml=function(){this.mediaStore=tl({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(K.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(K.DEFAULT_DURATION)?+this.getAttribute(K.DEFAULT_DURATION):void 0,defaultStreamType:this.getAttribute(K.DEFAULT_STREAM_TYPE)??void 0,liveEdgeOffset:this.hasAttribute(K.LIVE_EDGE_OFFSET)?+this.getAttribute(K.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(K.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(K.SEEK_TO_LIVE_OFFSET):this.hasAttribute(K.LIVE_EDGE_OFFSET)?+this.getAttribute(K.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(K.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(K.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(K.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(K.NO_SUBTITLES_LANG_PREF)}})},hl=new WeakMap,gl=new WeakSet,_l=function(e){let{metaKey:t,altKey:n,key:r,shiftKey:i}=e,a=i&&(r===`/`||r===`?`);if(a&&W(this,cl)?.open){this.removeEventListener(`keyup`,W(this,hl));return}if(t||n||!a&&!bl.includes(r)){this.removeEventListener(`keyup`,W(this,hl));return}let o=e.target,s=o instanceof HTMLElement&&(o.tagName.toLowerCase()===`media-volume-range`||o.tagName.toLowerCase()===`media-time-range`);[` `,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(r)&&!(W(this,ol).contains(`no${r.toLowerCase()}`)||r===` `&&W(this,ol).contains(`nospace`))&&!s&&e.preventDefault(),this.addEventListener(`keyup`,W(this,hl),{once:!0})},vl=new WeakSet,yl=function(){W(this,cl)||(il(this,cl,Yo.createElement(`media-keyboard-shortcuts-dialog`)),this.appendChild(W(this,cl))),W(this,cl).open=!0};var Dl=Object.values(A),Ol=Object.values(_o),kl=e=>{var t;let{observedAttributes:n}=e.constructor;!n&&e.nodeName?.includes(`-`)&&(M.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let r=((t=(e?.getAttribute)?.call(e,k.MEDIA_CHROME_ATTRIBUTES))?.split)?.call(t,/\s+/);return Array.isArray(n||r)?(n||r).filter(e=>Dl.includes(e)):[]},Al=e=>(e.nodeName?.includes(`-`)&&M.customElements.get(e.nodeName?.toLowerCase())&&!(e instanceof M.customElements.get(e.nodeName.toLowerCase()))&&M.customElements.upgrade(e),Ol.some(t=>t in e)),jl=e=>Al(e)||!!kl(e).length,Ml=e=>(e?.join)?.call(e,`:`),Nl={[A.MEDIA_SUBTITLES_LIST]:gc,[A.MEDIA_SUBTITLES_SHOWING]:gc,[A.MEDIA_SEEKABLE]:Ml,[A.MEDIA_BUFFERED]:e=>e?.map(Ml).join(` `),[A.MEDIA_PREVIEW_COORDS]:e=>e?.join(` `),[A.MEDIA_RENDITION_LIST]:Do,[A.MEDIA_AUDIO_TRACK_LIST]:ko},Pl=async(e,t,n)=>{if(e.isConnected||await Mo(0),typeof n==`boolean`||n==null)return L(e,t,n);if(typeof n==`number`)return F(e,t,n);if(typeof n==`string`)return z(e,t,n);if(Array.isArray(n)&&!n.length)return e.removeAttribute(t);let r=Nl[t]?.call(Nl,n)??n;return e.setAttribute(t,r)},Fl=e=>!!e.closest?.call(e,`*[slot="media"]`),Il=(e,t)=>{if(Fl(e))return;let n=(e,t)=>{jl(e)&&t(e);let{children:n=[]}=e??{},r=e?.shadowRoot?.children??[];[...n,...r].forEach(e=>Il(e,t))},r=e?.nodeName.toLowerCase();if(r.includes(`-`)&&!jl(e)){M.customElements.whenDefined(r).then(()=>{n(e,t)});return}n(e,t)},Ll=(e,t,n)=>{e.forEach(e=>{if(t in e){e[t]=n;return}let r=kl(e),i=t.toLowerCase();r.includes(i)&&Pl(e,i,n)})},Rl=(e,t,n)=>{Il(e,t);let r=e=>{t(e?.composedPath()[0]??e.target)},i=e=>{n(e?.composedPath()[0]??e.target)};e.addEventListener(O.REGISTER_MEDIA_STATE_RECEIVER,r),e.addEventListener(O.UNREGISTER_MEDIA_STATE_RECEIVER,i);let a=e=>{e.forEach(e=>{let{addedNodes:r=[],removedNodes:i=[],type:a,target:o,attributeName:s}=e;a===`childList`?(Array.prototype.forEach.call(r,e=>Il(e,t)),Array.prototype.forEach.call(i,e=>Il(e,n))):a===`attributes`&&s===k.MEDIA_CHROME_ATTRIBUTES&&(jl(o)?t(o):n(o))})},o=[],s=e=>{let r=e.target;r.name!==`media`&&(o.forEach(e=>Il(e,n)),o=[...r.assignedElements({flatten:!0})],o.forEach(e=>Il(e,t)))};e.addEventListener(`slotchange`,s);let c=new MutationObserver(a);return c.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{Il(e,n),e.removeEventListener(`slotchange`,s),c.disconnect(),e.removeEventListener(O.REGISTER_MEDIA_STATE_RECEIVER,r),e.removeEventListener(O.UNREGISTER_MEDIA_STATE_RECEIVER,i)}};M.customElements.get(`media-controller`)||M.customElements.define(`media-controller`,El);var zl={PLACEMENT:`placement`,BOUNDS:`bounds`};function Bl(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var Vl=class extends M.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{if(!ds(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let e=this.placement;if(e===`left`||e===`right`){this.style.removeProperty(`--media-tooltip-offset-x`);return}let t=getComputedStyle(this),n=cs(this,`#`+this.bounds)??ns(this);if(!n)return;let{x:r,width:i}=n.getBoundingClientRect(),{x:a,width:o}=this.getBoundingClientRect(),s=a+o,c=r+i,l=t.getPropertyValue(`--media-tooltip-offset-x`),u=l?parseFloat(l.replace(`px`,``)):0,d=t.getPropertyValue(`--media-tooltip-container-margin`),f=d?parseFloat(d.replace(`px`,``)):0,p=a-r+u-f,m=s-c+u+f;if(p<0){this.style.setProperty(`--media-tooltip-offset-x`,`${p}px`);return}if(m>0){this.style.setProperty(`--media-tooltip-offset-x`,`${m}px`);return}this.style.removeProperty(`--media-tooltip-offset-x`)},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector(`#arrow`),Object.prototype.hasOwnProperty.call(this,`placement`)){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[zl.PLACEMENT,zl.BOUNDS]}get placement(){return R(this,zl.PLACEMENT)}set placement(e){z(this,zl.PLACEMENT,e)}get bounds(){return R(this,zl.BOUNDS)}set bounds(e){z(this,zl.BOUNDS,e)}};Vl.shadowRootOptions={mode:`open`},Vl.getTemplateHTML=Bl,M.customElements.get(`media-tooltip`)||M.customElements.define(`media-tooltip`,Vl);var Hl=Vl,Ul=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},q=(e,t,n)=>(Ul(e,t,`read from private field`),n?n.call(e):t.get(e)),Wl=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Gl=(e,t,n,r)=>(Ul(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Kl=(e,t,n)=>(Ul(e,t,`access private method`),n),ql,Jl,Yl,Xl,Zl,Ql,$l,eu={TOOLTIP_PLACEMENT:`tooltipplacement`,DISABLED:`disabled`,NO_TOOLTIP:`notooltip`};function tu(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Hl.shadowRootOptions.mode}">
          ${Hl.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function nu(e,t){return`
    <slot></slot>
  `}function ru(){return``}var J=class extends M.HTMLElement{constructor(){if(super(),Wl(this,Ql),Wl(this,ql,void 0),this.preventClick=!1,this.tooltipEl=null,Wl(this,Jl,e=>{this.preventClick||this.handleClick(e),setTimeout(q(this,Yl),0)}),Wl(this,Yl,()=>{var e,t;(t=(e=this.tooltipEl)?.updateXOffset)==null||t.call(e)}),Wl(this,Xl,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener(`keyup`,q(this,Xl));return}this.preventClick||this.handleClick(e)}),Wl(this,Zl,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!this.keysUsed.includes(r)){this.removeEventListener(`keyup`,q(this,Xl));return}this.addEventListener(`keyup`,q(this,Xl),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector(`media-tooltip`)}static get observedAttributes(){return[`disabled`,eu.TOOLTIP_PLACEMENT,k.MEDIA_CONTROLLER,A.MEDIA_LANG]}enable(){this.addEventListener(`click`,q(this,Jl)),this.addEventListener(`keydown`,q(this,Zl)),this.tabIndex=0}disable(){this.removeEventListener(`click`,q(this,Jl)),this.removeEventListener(`keydown`,q(this,Zl)),this.removeEventListener(`keyup`,q(this,Xl)),this.tabIndex=-1}attributeChangedCallback(e,t,n){var r,i,a,o;e===k.MEDIA_CONTROLLER?(t&&((i=(r=q(this,ql))?.unassociateElement)==null||i.call(r,this),Gl(this,ql,null)),n&&this.isConnected&&(Gl(this,ql,this.getRootNode()?.getElementById(n)),(o=(a=q(this,ql))?.associateElement)==null||o.call(a,this))):e===`disabled`&&n!==t?n==null?this.enable():this.disable():e===eu.TOOLTIP_PLACEMENT&&this.tooltipEl&&n!==t?this.tooltipEl.placement=n:e===A.MEDIA_LANG&&(this.shadowRoot.querySelector(`slot[name="tooltip-content"]`).innerHTML=this.constructor.getTooltipContentHTML()),q(this,Yl).call(this)}connectedCallback(){var e,t;let{style:n}=N(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute(`disabled`)?this.disable():this.enable(),this.setAttribute(`role`,`button`);let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(Gl(this,ql,this.getRootNode()?.getElementById(r)),(t=(e=q(this,ql))?.associateElement)==null||t.call(e,this)),M.customElements.whenDefined(`media-tooltip`).then(()=>Kl(this,Ql,$l).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=q(this,ql))?.unassociateElement)==null||t.call(e,this),Gl(this,ql,null),this.removeEventListener(`mouseenter`,q(this,Yl)),this.removeEventListener(`focus`,q(this,Yl)),this.removeEventListener(`click`,q(this,Jl))}get keysUsed(){return[`Enter`,` `]}get tooltipPlacement(){return R(this,eu.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){z(this,eu.TOOLTIP_PLACEMENT,e)}get mediaController(){return R(this,k.MEDIA_CONTROLLER)}set mediaController(e){z(this,k.MEDIA_CONTROLLER,e)}get disabled(){return I(this,eu.DISABLED)}set disabled(e){L(this,eu.DISABLED,e)}get noTooltip(){return I(this,eu.NO_TOOLTIP)}set noTooltip(e){L(this,eu.NO_TOOLTIP,e)}handleClick(e){}};ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakSet,$l=function(){this.addEventListener(`mouseenter`,q(this,Yl)),this.addEventListener(`focus`,q(this,Yl)),this.addEventListener(`click`,q(this,Jl));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},J.shadowRootOptions={mode:`open`},J.getTemplateHTML=tu,J.getSlotTemplateHTML=nu,J.getTooltipContentHTML=ru,M.customElements.get(`media-chrome-button`)||M.customElements.define(`media-chrome-button`,J);var iu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function au(e){return`
    <style>
      :host([${A.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${A.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${A.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${A.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${iu}</slot>
      <slot name="exit">${iu}</slot>
    </slot>
  `}function ou(){return`
    <slot name="tooltip-enter">${j(`start airplay`)}</slot>
    <slot name="tooltip-exit">${j(`stop airplay`)}</slot>
  `}var su=e=>{let t=e.mediaIsAirplaying?j(`stop airplay`):j(`start airplay`);e.setAttribute(`aria-label`,t)},cu=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_IS_AIRPLAYING,A.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),su(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_IS_AIRPLAYING&&su(this)}get mediaIsAirplaying(){return I(this,A.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){L(this,A.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return R(this,A.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){z(this,A.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new M.CustomEvent(O.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};cu.getSlotTemplateHTML=au,cu.getTooltipContentHTML=ou,M.customElements.get(`media-airplay-button`)||M.customElements.define(`media-airplay-button`,cu);var lu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,uu=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function du(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${lu}</slot>
      <slot name="off">${uu}</slot>
    </slot>
  `}function fu(){return`
    <slot name="tooltip-enable">${j(`Enable captions`)}</slot>
    <slot name="tooltip-disable">${j(`Disable captions`)}</slot>
  `}var pu=e=>{e.setAttribute(`aria-checked`,xc(e).toString())},mu=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_SUBTITLES_LIST,A.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`button`),this.setAttribute(`aria-label`,j(`closed captions`)),pu(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_SUBTITLES_SHOWING&&pu(this)}get mediaSubtitlesList(){return hu(this,A.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){gu(this,A.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return hu(this,A.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){gu(this,A.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new M.CustomEvent(O.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};mu.getSlotTemplateHTML=du,mu.getTooltipContentHTML=fu;var hu=(e,t)=>{let n=e.getAttribute(t);return n?pc(n):[]},gu=(e,t,n)=>{if(!n?.length){e.removeAttribute(t);return}let r=gc(n);e.getAttribute(t)!==r&&e.setAttribute(t,r)};M.customElements.get(`media-captions-button`)||M.customElements.define(`media-captions-button`,mu);var _u=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`,vu=`<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`;function yu(e){return`
    <style>
      :host([${A.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${A.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${A.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${A.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${_u}</slot>
      <slot name="exit">${vu}</slot>
    </slot>
  `}function bu(){return`
    <slot name="tooltip-enter">${j(`Start casting`)}</slot>
    <slot name="tooltip-exit">${j(`Stop casting`)}</slot>
  `}var xu=e=>{let t=e.mediaIsCasting?j(`stop casting`):j(`start casting`);e.setAttribute(`aria-label`,t)},Su=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_IS_CASTING,A.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),xu(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_IS_CASTING&&xu(this)}get mediaIsCasting(){return I(this,A.MEDIA_IS_CASTING)}set mediaIsCasting(e){L(this,A.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return R(this,A.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){z(this,A.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?O.MEDIA_EXIT_CAST_REQUEST:O.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new M.CustomEvent(e,{composed:!0,bubbles:!0}))}};Su.getSlotTemplateHTML=yu,Su.getTooltipContentHTML=bu,M.customElements.get(`media-cast-button`)||M.customElements.define(`media-cast-button`,Su);var Cu=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},wu=(e,t,n)=>(Cu(e,t,`read from private field`),n?n.call(e):t.get(e)),Tu=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Eu=(e,t,n,r)=>(Cu(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Du=(e,t,n)=>(Cu(e,t,`access private method`),n),Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu;function Uu(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function Wu(e){return`
    <slot id="content"></slot>
  `}var Gu={OPEN:`open`,ANCHOR:`anchor`},Ku=class extends M.HTMLElement{constructor(){super(),Tu(this,ju),Tu(this,Nu),Tu(this,Fu),Tu(this,Lu),Tu(this,zu),Tu(this,Vu),Tu(this,Ou,!1),Tu(this,ku,null),Tu(this,Au,null)}static get observedAttributes(){return[Gu.OPEN,Gu.ANCHOR]}get open(){return I(this,Gu.OPEN)}set open(e){L(this,Gu.OPEN,e)}handleEvent(e){switch(e.type){case`invoke`:Du(this,Lu,Ru).call(this,e);break;case`focusout`:Du(this,zu,Bu).call(this,e);break;case`keydown`:Du(this,Vu,Hu).call(this,e);break}}connectedCallback(){Du(this,ju,Mu).call(this),this.role||=`dialog`,this.addEventListener(`invoke`,this),this.addEventListener(`focusout`,this),this.addEventListener(`keydown`,this)}disconnectedCallback(){this.removeEventListener(`invoke`,this),this.removeEventListener(`focusout`,this),this.removeEventListener(`keydown`,this)}attributeChangedCallback(e,t,n){Du(this,ju,Mu).call(this),e===Gu.OPEN&&n!==t&&(this.open?Du(this,Nu,Pu).call(this):Du(this,Fu,Iu).call(this))}focus(){Eu(this,ku,ls());let e=!this.dispatchEvent(new Event(`focus`,{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event(`focusin`,{composed:!0,bubbles:!0,cancelable:!0}));e||t||this.querySelector(`[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]`)?.focus()}get keysUsed(){return[`Escape`,`Tab`]}};Ou=new WeakMap,ku=new WeakMap,Au=new WeakMap,ju=new WeakSet,Mu=function(){if(!wu(this,Ou)&&(Eu(this,Ou,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=N(this.shadowRoot,`:host`);e.setProperty(`transition`,`display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in`)})}},Nu=new WeakSet,Pu=function(){var e;(e=wu(this,Au))==null||e.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new Event(`open`,{composed:!0,bubbles:!0})),this.addEventListener(`transitionend`,()=>this.focus(),{once:!0})},Fu=new WeakSet,Iu=function(){var e;(e=wu(this,Au))==null||e.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new Event(`close`,{composed:!0,bubbles:!0}))},Lu=new WeakSet,Ru=function(e){Eu(this,Au,e.relatedTarget),ss(this,e.relatedTarget)||(this.open=!this.open)},zu=new WeakSet,Bu=function(e){var t;ss(this,e.relatedTarget)||((t=wu(this,ku))==null||t.focus(),wu(this,Au)&&wu(this,Au)!==e.relatedTarget&&this.open&&(this.open=!1))},Vu=new WeakSet,Hu=function(e){var t,n,r,i,a;let{key:o,ctrlKey:s,altKey:c,metaKey:l}=e;s||c||l||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o===`Tab`?(e.shiftKey?(n=(t=this.previousElementSibling)?.focus)==null||n.call(t):(i=(r=this.nextElementSibling)?.focus)==null||i.call(r),this.blur()):o===`Escape`&&((a=wu(this,ku))==null||a.focus(),this.open=!1))},Ku.shadowRootOptions={mode:`open`},Ku.getTemplateHTML=Uu,Ku.getSlotTemplateHTML=Wu,M.customElements.get(`media-chrome-dialog`)||M.customElements.define(`media-chrome-dialog`,Ku);var qu=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Y=(e,t,n)=>(qu(e,t,`read from private field`),n?n.call(e):t.get(e)),X=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Ju=(e,t,n,r)=>(qu(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Yu=(e,t,n)=>(qu(e,t,`access private method`),n),Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd;function xd(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function Sd(e){return``}var Cd=class extends M.HTMLElement{constructor(){if(super(),X(this,ad),X(this,sd),X(this,ld),X(this,dd),X(this,pd),X(this,hd),X(this,_d),X(this,yd),X(this,Xu,void 0),X(this,Zu,void 0),X(this,Qu,void 0),X(this,$u,void 0),X(this,ed,{}),X(this,td,[]),X(this,nd,()=>{if(this.range.matches(`:focus-visible`)){let{style:e}=N(this.shadowRoot,`:host`);e.setProperty(`--_focus-visible-box-shadow`,`var(--_focus-box-shadow)`)}}),X(this,rd,()=>{let{style:e}=N(this.shadowRoot,`:host`);e.removeProperty(`--_focus-visible-box-shadow`)}),X(this,id,()=>{let e=this.shadowRoot.querySelector(`#segments-clipping`);e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector(`#container`),Ju(this,Qu,this.shadowRoot.querySelector(`#startpoint`)),Ju(this,$u,this.shadowRoot.querySelector(`#endpoint`)),this.range=this.shadowRoot.querySelector(`#range`),this.appearance=this.shadowRoot.querySelector(`#appearance`)}static get observedAttributes(){return[`disabled`,`aria-disabled`,k.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===k.MEDIA_CONTROLLER?(t&&((i=(r=Y(this,Xu))?.unassociateElement)==null||i.call(r,this),Ju(this,Xu,null)),n&&this.isConnected&&(Ju(this,Xu,this.getRootNode()?.getElementById(n)),(o=(a=Y(this,Xu))?.associateElement)==null||o.call(a,this))):(e===`disabled`||e===`aria-disabled`&&t!==n)&&(n==null?(this.range.removeAttribute(e),Yu(this,sd,cd).call(this)):(this.range.setAttribute(e,n),Yu(this,ld,ud).call(this)))}connectedCallback(){var e,t;let{style:n}=N(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),Y(this,ed).pointer=N(this.shadowRoot,`#pointer`),Y(this,ed).progress=N(this.shadowRoot,`#progress`),Y(this,ed).thumb=N(this.shadowRoot,`#thumb, ::slotted([slot="thumb"])`),Y(this,ed).activeSegment=N(this.shadowRoot,`#segments-clipping rect:nth-child(0)`);let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(Ju(this,Xu,this.getRootNode()?.getElementById(r)),(t=(e=Y(this,Xu))?.associateElement)==null||t.call(e,this)),this.updateBar(),this.shadowRoot.addEventListener(`focusin`,Y(this,nd)),this.shadowRoot.addEventListener(`focusout`,Y(this,rd)),Yu(this,sd,cd).call(this),$o(this.container,Y(this,id))}disconnectedCallback(){var e,t;Yu(this,ld,ud).call(this),(t=(e=Y(this,Xu))?.unassociateElement)==null||t.call(e,this),Ju(this,Xu,null),this.shadowRoot.removeEventListener(`focusin`,Y(this,nd)),this.shadowRoot.removeEventListener(`focusout`,Y(this,rd)),es(this.container,Y(this,id))}updatePointerBar(e){var t;(t=Y(this,ed).pointer)==null||t.style.setProperty(`width`,`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;let n=this.range.valueAsNumber*100;(e=Y(this,ed).progress)==null||e.style.setProperty(`width`,`${n}%`),(t=Y(this,ed).thumb)==null||t.style.setProperty(`left`,`${n}%`)}updateSegments(e){let t=this.shadowRoot.querySelector(`#segments-clipping`);if(t.textContent=``,this.container.classList.toggle(`segments`,!!e?.length),!e?.length)return;let n=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];Ju(this,td,[...n]);let r=n.pop();for(let[e,i]of n.entries()){let[a,o]=[e===0,e===n.length-1],s=a?`calc(var(--segments-gap) / -1)`:`${i*100}%`,c=`calc(${((o?r:n[e+1])-i)*100}%${a||o?``:` - var(--segments-gap)`})`,l=Yo.createElementNS(`http://www.w3.org/2000/svg`,`rect`),u=ms(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);u.style.setProperty(`x`,s),u.style.setProperty(`width`,c),t.append(l)}}getPointerRatio(e){return fs(e.clientX,e.clientY,Y(this,Qu).getBoundingClientRect(),Y(this,$u).getBoundingClientRect())}get dragging(){return this.hasAttribute(`dragging`)}handleEvent(e){switch(e.type){case`pointermove`:Yu(this,yd,bd).call(this,e);break;case`input`:this.updateBar();break;case`pointerenter`:Yu(this,pd,md).call(this,e);break;case`pointerdown`:Yu(this,dd,fd).call(this,e);break;case`pointerup`:Yu(this,hd,gd).call(this);break;case`pointerleave`:Yu(this,_d,vd).call(this);break}}get keysUsed(){return[`ArrowUp`,`ArrowRight`,`ArrowDown`,`ArrowLeft`]}};Xu=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,$u=new WeakMap,ed=new WeakMap,td=new WeakMap,nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakSet,od=function(e){let t=Y(this,ed).activeSegment;if(!t)return;let n=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${Y(this,td).findIndex((e,t,r)=>{let i=r[t+1];return i!=null&&n>=e&&n<=i})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty(`transform`,`var(--media-range-segment-hover-transform, scaleY(2))`))},sd=new WeakSet,cd=function(){this.hasAttribute(`disabled`)||!this.isConnected||(this.addEventListener(`input`,this),this.addEventListener(`pointerdown`,this),this.addEventListener(`pointerenter`,this))},ld=new WeakSet,ud=function(){var e,t;this.removeEventListener(`input`,this),this.removeEventListener(`pointerdown`,this),this.removeEventListener(`pointerenter`,this),this.removeEventListener(`pointerleave`,this),(e=M.window)==null||e.removeEventListener(`pointerup`,this),(t=M.window)==null||t.removeEventListener(`pointermove`,this)},dd=new WeakSet,fd=function(e){var t;Ju(this,Zu,e.composedPath().includes(this.range)),(t=M.window)==null||t.addEventListener(`pointerup`,this,{once:!0})},pd=new WeakSet,md=function(e){var t;e.pointerType!==`mouse`&&Yu(this,dd,fd).call(this,e),this.addEventListener(`pointerleave`,this,{once:!0}),(t=M.window)==null||t.addEventListener(`pointermove`,this)},hd=new WeakSet,gd=function(){var e;(e=M.window)==null||e.removeEventListener(`pointerup`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`)},_d=new WeakSet,vd=function(){var e,t;this.removeEventListener(`pointerleave`,this),(e=M.window)==null||e.removeEventListener(`pointermove`,this),this.toggleAttribute(`dragging`,!1),this.range.disabled=this.hasAttribute(`disabled`),(t=Y(this,ed).activeSegment)==null||t.style.removeProperty(`transform`)},yd=new WeakSet,bd=function(e){e.pointerType===`pen`&&e.buttons===0||(this.toggleAttribute(`dragging`,e.buttons===1||e.pointerType!==`mouse`),this.updatePointerBar(e),Yu(this,ad,od).call(this,e),this.dragging&&(e.pointerType!==`mouse`||!Y(this,Zu))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))))},Cd.shadowRootOptions={mode:`open`},Cd.getTemplateHTML=xd,Cd.getContainerTemplateHTML=Sd,M.customElements.get(`media-chrome-range`)||M.customElements.define(`media-chrome-range`,Cd);var wd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Td=(e,t,n)=>(wd(e,t,`read from private field`),n?n.call(e):t.get(e)),Ed=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Dd=(e,t,n,r)=>(wd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Od;function kd(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var Ad=class extends M.HTMLElement{constructor(){if(super(),Ed(this,Od,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===k.MEDIA_CONTROLLER&&(t&&((i=(r=Td(this,Od))?.unassociateElement)==null||i.call(r,this),Dd(this,Od,null)),n&&this.isConnected&&(Dd(this,Od,this.getRootNode()?.getElementById(n)),(o=(a=Td(this,Od))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let n=this.getAttribute(k.MEDIA_CONTROLLER);n&&(Dd(this,Od,this.getRootNode()?.getElementById(n)),(t=(e=Td(this,Od))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=Td(this,Od))?.unassociateElement)==null||t.call(e,this),Dd(this,Od,null)}};Od=new WeakMap,Ad.shadowRootOptions={mode:`open`},Ad.getTemplateHTML=kd,M.customElements.get(`media-control-bar`)||M.customElements.define(`media-control-bar`,Ad);var jd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Md=(e,t,n)=>(jd(e,t,`read from private field`),n?n.call(e):t.get(e)),Nd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Pd=(e,t,n,r)=>(jd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Fd;function Id(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function Ld(e,t){return`
    <slot></slot>
  `}var Rd=class extends M.HTMLElement{constructor(){if(super(),Nd(this,Fd,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,n){var r,i,a,o;e===k.MEDIA_CONTROLLER&&(t&&((i=(r=Md(this,Fd))?.unassociateElement)==null||i.call(r,this),Pd(this,Fd,null)),n&&this.isConnected&&(Pd(this,Fd,this.getRootNode()?.getElementById(n)),(o=(a=Md(this,Fd))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let{style:n}=N(this.shadowRoot,`:host`);n.setProperty(`display`,`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(k.MEDIA_CONTROLLER);r&&(Pd(this,Fd,this.getRootNode()?.getElementById(r)),(t=(e=Md(this,Fd))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=Md(this,Fd))?.unassociateElement)==null||t.call(e,this),Pd(this,Fd,null)}};Fd=new WeakMap,Rd.shadowRootOptions={mode:`open`},Rd.getTemplateHTML=Id,Rd.getSlotTemplateHTML=Ld,M.customElements.get(`media-text-display`)||M.customElements.define(`media-text-display`,Rd);var zd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Bd=(e,t,n)=>(zd(e,t,`read from private field`),n?n.call(e):t.get(e)),Vd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Hd=(e,t,n,r)=>(zd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ud;function Wd(e,t){return`
    <slot>${Bo(t.mediaDuration)}</slot>
  `}var Gd=class extends Rd{constructor(){super(),Vd(this,Ud,void 0),Hd(this,Ud,this.shadowRoot.querySelector(`slot`)),Bd(this,Ud).textContent=Bo(this.mediaDuration??0)}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_DURATION]}attributeChangedCallback(e,t,n){e===A.MEDIA_DURATION&&(Bd(this,Ud).textContent=Bo(+n)),super.attributeChangedCallback(e,t,n)}get mediaDuration(){return P(this,A.MEDIA_DURATION)}set mediaDuration(e){F(this,A.MEDIA_DURATION,e)}};Ud=new WeakMap,Gd.getSlotTemplateHTML=Wd,M.customElements.get(`media-duration-display`)||M.customElements.define(`media-duration-display`,Gd);var Kd={2:j(`Network Error`),3:j(`Decode Error`),4:j(`Source Not Supported`),5:j(`Encryption Error`)},qd={2:j(`A network error caused the media download to fail.`),3:j(`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`),4:j(`An unsupported error occurred. The server or network failed, or your browser does not support this format.`),5:j(`The media is encrypted and there are no keys to decrypt it.`)},Jd=e=>e.code===1?null:{title:Kd[e.code]??`Error ${e.code}`,message:qd[e.code]??e.message},Yd=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Xd=(e,t,n)=>(Yd(e,t,`read from private field`),n?n.call(e):t.get(e)),Zd=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Qd=(e,t,n,r)=>(Yd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),$d;function ef(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${nf({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `}function tf(e){return e.code&&Jd(e)!==null}function nf(e){let{title:t,message:n}=Jd(e)??{},r=``;return t&&(r+=`<slot name="error-${e.code}-title"><h3>${t}</h3></slot>`),n&&(r+=`<slot name="error-${e.code}-message"><p>${n}</p></slot>`),r}var rf=[A.MEDIA_ERROR_CODE,A.MEDIA_ERROR_MESSAGE],af=class extends Ku{constructor(){super(...arguments),Zd(this,$d,null)}static get observedAttributes(){return[...super.observedAttributes,...rf]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),!rf.includes(e))return;let r=this.mediaError??{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=tf(r),this.open&&(this.shadowRoot.querySelector(`slot`).name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector(`#content`).innerHTML=this.formatErrorMessage(r),!this.hasAttribute(`aria-label`))){let{title:e}=Jd(r);e&&this.setAttribute(`aria-label`,e)}}get mediaError(){return Xd(this,$d)}set mediaError(e){Qd(this,$d,e)}get mediaErrorCode(){return P(this,`mediaerrorcode`)}set mediaErrorCode(e){F(this,`mediaerrorcode`,e)}get mediaErrorMessage(){return R(this,`mediaerrormessage`)}set mediaErrorMessage(e){z(this,`mediaerrormessage`,e)}};$d=new WeakMap,af.getSlotTemplateHTML=ef,af.formatErrorMessage=nf,M.customElements.get(`media-error-dialog`)||M.customElements.define(`media-error-dialog`,af);var of=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},sf=(e,t,n)=>(of(e,t,`read from private field`),n?n.call(e):t.get(e)),cf=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},lf,uf;function df(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${ff()}
    </slot>
  `}function ff(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:[`Space`,`k`],description:`Toggle Playback`},{keys:[`m`],description:`Toggle mute`},{keys:[`f`],description:`Toggle fullscreen`},{keys:[`c`],description:`Toggle captions or subtitles, if available`},{keys:[`p`],description:`Toggle Picture in Picture`},{keys:[`←`,`j`],description:`Seek back 10s`},{keys:[`→`,`l`],description:`Seek forward 10s`},{keys:[`↑`],description:`Turn volume up`},{keys:[`↓`],description:`Turn volume down`},{keys:[`< (SHIFT+,)`],description:`Decrease playback rate`},{keys:[`> (SHIFT+.)`],description:`Increase playback rate`}].map(({keys:e,description:t})=>`
      <tr>
        <td>
          <div class="key-combo">${e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join(``)}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `).join(``)}</table>
  `}var pf=class extends Ku{constructor(){super(...arguments),cf(this,lf,e=>{if(!this.open)return;let t=this.shadowRoot?.querySelector(`#content`);if(!t)return;let n=e.composedPath(),r=n[0]===this||n.includes(this),i=n.includes(t);r&&!i&&(this.open=!1)}),cf(this,uf,e=>{if(!this.open)return;let t=e.shiftKey&&(e.key===`/`||e.key===`?`);(e.key===`Escape`||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener(`click`,sf(this,lf)),document.addEventListener(`keydown`,sf(this,uf)))}disconnectedCallback(){this.removeEventListener(`click`,sf(this,lf)),document.removeEventListener(`keydown`,sf(this,uf))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`open`&&(this.open?(this.addEventListener(`click`,sf(this,lf)),document.addEventListener(`keydown`,sf(this,uf))):(this.removeEventListener(`click`,sf(this,lf)),document.removeEventListener(`keydown`,sf(this,uf))))}};lf=new WeakMap,uf=new WeakMap,pf.getSlotTemplateHTML=df,M.customElements.get(`media-keyboard-shortcuts-dialog`)||M.customElements.define(`media-keyboard-shortcuts-dialog`,pf);var mf=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},hf=(e,t,n)=>(mf(e,t,`read from private field`),n?n.call(e):t.get(e)),gf=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},_f=(e,t,n,r)=>(mf(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),vf,yf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,bf=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function xf(e){return`
    <style>
      :host([${A.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${A.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${A.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${A.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${yf}</slot>
      <slot name="exit">${bf}</slot>
    </slot>
  `}function Sf(){return`
    <slot name="tooltip-enter">${j(`Enter fullscreen mode`)}</slot>
    <slot name="tooltip-exit">${j(`Exit fullscreen mode`)}</slot>
  `}var Cf=e=>{let t=e.mediaIsFullscreen?j(`exit fullscreen mode`):j(`enter fullscreen mode`);e.setAttribute(`aria-label`,t)},wf=class extends J{constructor(){super(...arguments),gf(this,vf,null)}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_IS_FULLSCREEN,A.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Cf(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_IS_FULLSCREEN&&Cf(this)}get mediaFullscreenUnavailable(){return R(this,A.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){z(this,A.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return I(this,A.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){L(this,A.MEDIA_IS_FULLSCREEN,e)}handleClick(e){_f(this,vf,e);let t=hf(this,vf)instanceof PointerEvent,n=this.mediaIsFullscreen?new M.CustomEvent(O.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new M.CustomEvent(O.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}};vf=new WeakMap,wf.getSlotTemplateHTML=xf,wf.getTooltipContentHTML=Sf,M.customElements.get(`media-fullscreen-button`)||M.customElements.define(`media-fullscreen-button`,wf);var{MEDIA_TIME_IS_LIVE:Tf,MEDIA_PAUSED:Ef}=A,{MEDIA_SEEK_TO_LIVE_REQUEST:Df,MEDIA_PLAY_REQUEST:Of}=O,kf=`<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>`;function Af(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Tf}]:not([${Ef}])) slot[name=indicator] > *,
      :host([${Tf}]:not([${Ef}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Tf}]:not([${Ef}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${kf}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${j(`live`)}</slot>
  `}var jf=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,n=j(t?`seek to live`:`playing live`);e.setAttribute(`aria-label`,n);let r=e.shadowRoot?.querySelector(`slot[name="text"]`);r&&(r.textContent=j(`live`)),t?e.removeAttribute(`aria-disabled`):e.setAttribute(`aria-disabled`,`true`)},Mf=class extends J{static get observedAttributes(){return[...super.observedAttributes,Tf,Ef]}connectedCallback(){super.connectedCallback(),jf(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),jf(this)}get mediaPaused(){return I(this,A.MEDIA_PAUSED)}set mediaPaused(e){L(this,A.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return I(this,A.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){L(this,A.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new M.CustomEvent(Df,{composed:!0,bubbles:!0})),this.hasAttribute(Ef)&&this.dispatchEvent(new M.CustomEvent(Of,{composed:!0,bubbles:!0})))}};Mf.getSlotTemplateHTML=Af,M.customElements.get(`media-live-button`)||M.customElements.define(`media-live-button`,Mf);var Nf=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Pf=(e,t,n)=>(Nf(e,t,`read from private field`),n?n.call(e):t.get(e)),Ff=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},If=(e,t,n,r)=>(Nf(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Lf,Rf,zf={LOADING_DELAY:`loadingdelay`,NO_AUTOHIDE:`noautohide`},Bf=500,Vf=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Hf(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Bf}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${A.MEDIA_LOADING}]:not([${A.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${A.MEDIA_LOADING}]:not([${A.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${A.MEDIA_LOADING}]:not([${A.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Vf}</slot>
    <div id="status" role="status" aria-live="polite">${j(`media loading`)}</div>
  `}var Uf=class extends M.HTMLElement{constructor(){if(super(),Ff(this,Lf,void 0),Ff(this,Rf,Bf),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,A.MEDIA_PAUSED,A.MEDIA_LOADING,zf.LOADING_DELAY]}attributeChangedCallback(e,t,n){var r,i,a,o;e===zf.LOADING_DELAY&&t!==n?this.loadingDelay=Number(n):e===k.MEDIA_CONTROLLER&&(t&&((i=(r=Pf(this,Lf))?.unassociateElement)==null||i.call(r,this),If(this,Lf,null)),n&&this.isConnected&&(If(this,Lf,this.getRootNode()?.getElementById(n)),(o=(a=Pf(this,Lf))?.associateElement)==null||o.call(a,this)))}connectedCallback(){var e,t;let n=this.getAttribute(k.MEDIA_CONTROLLER);n&&(If(this,Lf,this.getRootNode()?.getElementById(n)),(t=(e=Pf(this,Lf))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=Pf(this,Lf))?.unassociateElement)==null||t.call(e,this),If(this,Lf,null)}get loadingDelay(){return Pf(this,Rf)}set loadingDelay(e){If(this,Rf,e);let{style:t}=N(this.shadowRoot,`:host`);t.setProperty(`--_loading-indicator-delay`,`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return I(this,A.MEDIA_PAUSED)}set mediaPaused(e){L(this,A.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,A.MEDIA_LOADING)}set mediaLoading(e){L(this,A.MEDIA_LOADING,e)}get mediaController(){return R(this,k.MEDIA_CONTROLLER)}set mediaController(e){z(this,k.MEDIA_CONTROLLER,e)}get noAutohide(){return I(this,zf.NO_AUTOHIDE)}set noAutohide(e){L(this,zf.NO_AUTOHIDE,e)}};Lf=new WeakMap,Rf=new WeakMap,Uf.shadowRootOptions={mode:`open`},Uf.getTemplateHTML=Hf,M.customElements.get(`media-loading-indicator`)||M.customElements.define(`media-loading-indicator`,Uf);var Wf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Gf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Kf=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function qf(e){return`
    <style>
      :host(:not([${A.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${A.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${A.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${A.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${A.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${A.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${A.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Wf}</slot>
      <slot name="low">${Gf}</slot>
      <slot name="medium">${Gf}</slot>
      <slot name="high">${Kf}</slot>
    </slot>
  `}function Jf(){return`
    <slot name="tooltip-mute">${j(`Mute`)}</slot>
    <slot name="tooltip-unmute">${j(`Unmute`)}</slot>
  `}var Yf=e=>{let t=e.mediaVolumeLevel===`off`?j(`unmute`):j(`mute`);e.setAttribute(`aria-label`,t)},Xf=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Yf(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_VOLUME_LEVEL&&Yf(this)}get mediaVolumeLevel(){return R(this,A.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){z(this,A.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e=this.mediaVolumeLevel===`off`?O.MEDIA_UNMUTE_REQUEST:O.MEDIA_MUTE_REQUEST;this.dispatchEvent(new M.CustomEvent(e,{composed:!0,bubbles:!0}))}};Xf.getSlotTemplateHTML=qf,Xf.getTooltipContentHTML=Jf,M.customElements.get(`media-mute-button`)||M.customElements.define(`media-mute-button`,Xf);var Zf=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Qf(e){return`
    <style>
      :host([${A.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${A.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${A.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${A.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Zf}</slot>
      <slot name="exit">${Zf}</slot>
    </slot>
  `}function $f(){return`
    <slot name="tooltip-enter">${j(`Enter picture in picture mode`)}</slot>
    <slot name="tooltip-exit">${j(`Exit picture in picture mode`)}</slot>
  `}var ep=e=>{let t=e.mediaIsPip?j(`exit picture in picture mode`):j(`enter picture in picture mode`);e.setAttribute(`aria-label`,t)},tp=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_IS_PIP,A.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ep(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_IS_PIP&&ep(this)}get mediaPipUnavailable(){return R(this,A.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){z(this,A.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return I(this,A.MEDIA_IS_PIP)}set mediaIsPip(e){L(this,A.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?O.MEDIA_EXIT_PIP_REQUEST:O.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new M.CustomEvent(e,{composed:!0,bubbles:!0}))}};tp.getSlotTemplateHTML=Qf,tp.getTooltipContentHTML=$f,M.customElements.get(`media-pip-button`)||M.customElements.define(`media-pip-button`,tp);var np=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},rp=(e,t,n)=>(np(e,t,`read from private field`),n?n.call(e):t.get(e)),ip=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},ap,op={RATES:`rates`},sp=[1,1.2,1.5,1.7,2];function cp(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `}function lp(){return j(`Playback rate`)}var up=class extends J{constructor(){super(),ip(this,ap,new uc(this,op.RATES,{defaultValue:sp})),this.container=this.shadowRoot.querySelector(`slot[name="icon"]`),this.container.innerHTML=`${this.mediaPlaybackRate??1}x`}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_PLAYBACK_RATE,op.RATES]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===op.RATES&&(rp(this,ap).value=n),e===A.MEDIA_PLAYBACK_RATE){let e=n?+n:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute(`aria-label`,j(`Playback rate {playbackRate}`,{playbackRate:t}))}}get rates(){return rp(this,ap)}set rates(e){e?Array.isArray(e)?rp(this,ap).value=e.join(` `):typeof e==`string`&&(rp(this,ap).value=e):rp(this,ap).value=``}get mediaPlaybackRate(){return P(this,A.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){F(this,A.MEDIA_PLAYBACK_RATE,e)}handleClick(){let e=Array.from(rp(this,ap).values(),e=>+e).sort((e,t)=>e-t),t=e.find(e=>e>this.mediaPlaybackRate)??e[0]??1,n=new M.CustomEvent(O.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(n)}};ap=new WeakMap,up.getSlotTemplateHTML=cp,up.getTooltipContentHTML=lp,M.customElements.get(`media-playback-rate-button`)||M.customElements.define(`media-playback-rate-button`,up);var dp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,fp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function pp(e){return`
    <style>
      :host([${A.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${A.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${A.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${A.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${dp}</slot>
      <slot name="pause">${fp}</slot>
    </slot>
  `}function mp(){return`
    <slot name="tooltip-play">${j(`Play`)}</slot>
    <slot name="tooltip-pause">${j(`Pause`)}</slot>
  `}var hp=e=>{let t=e.mediaPaused?j(`play`):j(`pause`);e.setAttribute(`aria-label`,t)},gp=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_PAUSED,A.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),hp(this)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===A.MEDIA_PAUSED||e===A.MEDIA_LANG)&&hp(this)}get mediaPaused(){return I(this,A.MEDIA_PAUSED)}set mediaPaused(e){L(this,A.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?O.MEDIA_PLAY_REQUEST:O.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new M.CustomEvent(e,{composed:!0,bubbles:!0}))}};gp.getSlotTemplateHTML=pp,gp.getTooltipContentHTML=mp,M.customElements.get(`media-play-button`)||M.customElements.define(`media-play-button`,gp);var _p={PLACEHOLDER_SRC:`placeholdersrc`,SRC:`src`};function vp(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var yp=e=>{e.style.removeProperty(`background-image`)},bp=(e,t)=>{e.style[`background-image`]=`url('${t}')`},xp=class extends M.HTMLElement{static get observedAttributes(){return[_p.PLACEHOLDER_SRC,_p.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector(`#image`)}attributeChangedCallback(e,t,n){e===_p.SRC&&(n==null?this.image.removeAttribute(_p.SRC):this.image.setAttribute(_p.SRC,n)),e===_p.PLACEHOLDER_SRC&&(n==null?yp(this.image):bp(this.image,n))}get placeholderSrc(){return R(this,_p.PLACEHOLDER_SRC)}set placeholderSrc(e){z(this,_p.SRC,e)}get src(){return R(this,_p.SRC)}set src(e){z(this,_p.SRC,e)}};xp.shadowRootOptions={mode:`open`},xp.getTemplateHTML=vp,M.customElements.get(`media-poster-image`)||M.customElements.define(`media-poster-image`,xp);var Sp=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Cp=(e,t,n)=>(Sp(e,t,`read from private field`),n?n.call(e):t.get(e)),wp=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Tp=(e,t,n,r)=>(Sp(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ep,Dp=class extends Rd{constructor(){super(),wp(this,Ep,void 0),Tp(this,Ep,this.shadowRoot.querySelector(`slot`))}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_PREVIEW_CHAPTER,A.MEDIA_LANG]}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),(e===A.MEDIA_PREVIEW_CHAPTER||e===A.MEDIA_LANG)&&n!==t&&n!=null)if(Cp(this,Ep).textContent=n,n!==``){let e=j(`chapter: {chapterName}`,{chapterName:n});this.setAttribute(`aria-valuetext`,e)}else this.removeAttribute(`aria-valuetext`)}get mediaPreviewChapter(){return R(this,A.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){z(this,A.MEDIA_PREVIEW_CHAPTER,e)}};Ep=new WeakMap,M.customElements.get(`media-preview-chapter-display`)||M.customElements.define(`media-preview-chapter-display`,Dp);var Op=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},kp=(e,t,n)=>(Op(e,t,`read from private field`),n?n.call(e):t.get(e)),Ap=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},jp=(e,t,n,r)=>(Op(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Mp;function Np(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Pp=class extends M.HTMLElement{constructor(){if(super(),Ap(this,Mp,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=ts(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[k.MEDIA_CONTROLLER,A.MEDIA_PREVIEW_IMAGE,A.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t;let n=this.getAttribute(k.MEDIA_CONTROLLER);n&&(jp(this,Mp,this.getRootNode()?.getElementById(n)),(t=(e=kp(this,Mp))?.associateElement)==null||t.call(e,this))}disconnectedCallback(){var e,t;(t=(e=kp(this,Mp))?.unassociateElement)==null||t.call(e,this),jp(this,Mp,null)}attributeChangedCallback(e,t,n){var r,i,a,o;[A.MEDIA_PREVIEW_IMAGE,A.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===k.MEDIA_CONTROLLER&&(t&&((i=(r=kp(this,Mp))?.unassociateElement)==null||i.call(r,this),jp(this,Mp,null)),n&&this.isConnected&&(jp(this,Mp,this.getRootNode()?.getElementById(n)),(o=(a=kp(this,Mp))?.associateElement)==null||o.call(a,this)))}get mediaPreviewImage(){return R(this,A.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){z(this,A.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(A.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(A.MEDIA_PREVIEW_COORDS);return}this.setAttribute(A.MEDIA_PREVIEW_COORDS,e.join(` `))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[n,r,i,a]=e,o=t.split(`#`)[0],s=getComputedStyle(this),{maxWidth:c,maxHeight:l,minWidth:u,minHeight:d}=s,f=s.getPropertyValue(`--media-preview-thumbnail-object-fit`).trim()||`contain`,p,m;if(f===`fill`){let e=parseInt(c)/i,t=parseInt(l)/a,n=parseInt(u)/i,r=parseInt(d)/a;p=e<1?e:Math.max(e,n),m=t<1?t:Math.max(t,r)}else{let e=Math.min(parseInt(c)/i,parseInt(l)/a),t=Math.max(parseInt(u)/i,parseInt(d)/a),n=e<1?e:t>1?t:1;p=n,m=n}let{style:h}=N(this.shadowRoot,`:host`),g=N(this.shadowRoot,`img`).style,_=this.shadowRoot.querySelector(`img`),v=Math.min(p,m)<1?`min`:`max`;h.setProperty(`${v}-width`,`initial`,`important`),h.setProperty(`${v}-height`,`initial`,`important`),h.width=`${i*p}px`,h.height=`${a*m}px`;let y=()=>{g.width=`${this.imgWidth*p}px`,g.height=`${this.imgHeight*m}px`,g.display=`block`};_.src!==o&&(_.onload=()=>{this.imgWidth=_.naturalWidth,this.imgHeight=_.naturalHeight,y(),_.onload=null},_.src=o,y()),y(),g.transform=`translate(-${n*p}px, -${r*m}px)`}};Mp=new WeakMap,Pp.shadowRootOptions={mode:`open`},Pp.getTemplateHTML=Np,M.customElements.get(`media-preview-thumbnail`)||M.customElements.define(`media-preview-thumbnail`,Pp);var Fp=Pp,Ip=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Lp=(e,t,n)=>(Ip(e,t,`read from private field`),n?n.call(e):t.get(e)),Rp=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},zp=(e,t,n,r)=>(Ip(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Bp,Vp=class extends Rd{constructor(){super(),Rp(this,Bp,void 0),zp(this,Bp,this.shadowRoot.querySelector(`slot`)),Lp(this,Bp).textContent=Bo(0)}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_PREVIEW_TIME&&n!=null&&(Lp(this,Bp).textContent=Bo(parseFloat(n)))}get mediaPreviewTime(){return P(this,A.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){F(this,A.MEDIA_PREVIEW_TIME,e)}};Bp=new WeakMap,M.customElements.get(`media-preview-time-display`)||M.customElements.define(`media-preview-time-display`,Vp);var Hp={SEEK_OFFSET:`seekoffset`},Up=30,Wp=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Gp(e,t){return`
    <slot name="icon">${Wp(t.seekOffset)}</slot>
  `}var Kp=(e,t)=>{e.setAttribute(`aria-label`,j(`seek back {seekOffset} seconds`,{seekOffset:t}))};function qp(){return j(`Seek backward`)}var Jp=0,Yp=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_CURRENT_TIME,Hp.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=P(this,Hp.SEEK_OFFSET,Up)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),Kp(this,this.seekOffset),e===Hp.SEEK_OFFSET&&(this.seekOffset=P(this,Hp.SEEK_OFFSET,Up))}get seekOffset(){return P(this,Hp.SEEK_OFFSET,Up)}set seekOffset(e){F(this,Hp.SEEK_OFFSET,e),this.setAttribute(`aria-label`,j(`seek back {seekOffset} seconds`,{seekOffset:this.seekOffset})),is(os(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return P(this,A.MEDIA_CURRENT_TIME,Jp)}set mediaCurrentTime(e){F(this,A.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new M.CustomEvent(O.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Yp.getSlotTemplateHTML=Gp,Yp.getTooltipContentHTML=qp,M.customElements.get(`media-seek-backward-button`)||M.customElements.define(`media-seek-backward-button`,Yp);var Xp={SEEK_OFFSET:`seekoffset`},Zp=30,Qp=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function $p(e,t){return`
    <slot name="icon">${Qp(t.seekOffset)}</slot>
  `}var em=(e,t)=>{e.setAttribute(`aria-label`,j(`seek forward {seekOffset} seconds`,{seekOffset:t}))};function tm(){return j(`Seek forward`)}var nm=0,rm=class extends J{static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_CURRENT_TIME,Xp.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=P(this,Xp.SEEK_OFFSET,Zp)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),em(this,this.seekOffset),e===Xp.SEEK_OFFSET&&(this.seekOffset=P(this,Xp.SEEK_OFFSET,Zp))}get seekOffset(){return P(this,Xp.SEEK_OFFSET,Zp)}set seekOffset(e){F(this,Xp.SEEK_OFFSET,e),this.setAttribute(`aria-label`,j(`seek forward {seekOffset} seconds`,{seekOffset:this.seekOffset})),is(os(this,`icon`),this.seekOffset)}get mediaCurrentTime(){return P(this,A.MEDIA_CURRENT_TIME,nm)}set mediaCurrentTime(e){F(this,A.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new M.CustomEvent(O.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};rm.getSlotTemplateHTML=$p,rm.getTooltipContentHTML=tm,M.customElements.get(`media-seek-forward-button`)||M.customElements.define(`media-seek-forward-button`,rm);var im=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},am=(e,t,n)=>(im(e,t,`read from private field`),n?n.call(e):t.get(e)),om=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},sm=(e,t,n,r)=>(im(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),cm=(e,t,n)=>(im(e,t,`access private method`),n),lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm={REMAINING:`remaining`,SHOW_DURATION:`showduration`,NO_TOGGLE:`notoggle`},xm=[...Object.values(bm),A.MEDIA_CURRENT_TIME,A.MEDIA_DURATION,A.MEDIA_SEEKABLE],Sm=[`Enter`,` `],Cm=`&nbsp;/&nbsp;`,wm=(e,{timesSep:t=Cm}={})=>{let n=e.mediaCurrentTime??0,[,r]=e.mediaSeekable??[],i=0;Number.isFinite(e.mediaDuration)?i=e.mediaDuration:Number.isFinite(r)&&(i=r);let a=e.remaining?Bo(0-(i-n)):Bo(n);return e.showDuration?`${a}${t}${Bo(i)}`:a},Tm=e=>{let t=e.mediaCurrentTime,[,n]=e.mediaSeekable??[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(n)&&(r=n),t==null||r===null){e.setAttribute(`aria-valuetext`,j(`video not loaded, unknown time.`));return}let i=e.remaining?zo(0-(r-t)):zo(t);if(!e.showDuration){e.setAttribute(`aria-valuetext`,i);return}let a=j(`{currentTime} of {totalTime}`,{currentTime:i,totalTime:zo(r)});e.setAttribute(`aria-valuetext`,a)};function Em(e,t){return`
    <slot>${wm(t)}</slot>
  `}var Dm=e=>{e.setAttribute(`aria-label`,j(`playback time`))},Om=class extends Rd{constructor(){super(),om(this,fm),om(this,mm),om(this,gm),om(this,vm),om(this,lm,void 0),om(this,um,null),om(this,dm,e=>{let{metaKey:t,altKey:n,key:r}=e;if(t||n||!Sm.includes(r)){this.removeEventListener(`keyup`,am(this,um));return}this.addEventListener(`keyup`,am(this,um))}),sm(this,lm,this.shadowRoot.querySelector(`slot`)),am(this,lm).innerHTML=`${wm(this)}`}static get observedAttributes(){return[...super.observedAttributes,...xm,`disabled`]}connectedCallback(){let{style:e}=N(this.shadowRoot,`:host(:hover:not([notoggle]))`);e.setProperty(`cursor`,`var(--media-cursor, pointer)`),e.setProperty(`background`,`var(--media-control-hover-background, rgba(50 50 70 / .7))`),this.setAttribute(`aria-label`,j(`playback time`)),cm(this,gm,_m).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute(`remaining`)?this.removeAttribute(`remaining`):this.setAttribute(`remaining`,``))}disconnectedCallback(){this.disable(),cm(this,mm,hm).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,n){Dm(this),xm.includes(e)?this.update():e===`disabled`&&n!==t?n==null?cm(this,gm,_m).call(this):cm(this,vm,ym).call(this):e===bm.NO_TOGGLE&&n!==t&&(this.noToggle?cm(this,vm,ym).call(this):cm(this,gm,_m).call(this)),super.attributeChangedCallback(e,t,n)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return I(this,bm.REMAINING)}set remaining(e){L(this,bm.REMAINING,e)}get showDuration(){return I(this,bm.SHOW_DURATION)}set showDuration(e){L(this,bm.SHOW_DURATION,e)}get noToggle(){return I(this,bm.NO_TOGGLE)}set noToggle(e){L(this,bm.NO_TOGGLE,e)}get mediaDuration(){return P(this,A.MEDIA_DURATION)}set mediaDuration(e){F(this,A.MEDIA_DURATION,e)}get mediaCurrentTime(){return P(this,A.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){F(this,A.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(A.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(A.MEDIA_SEEKABLE);return}this.setAttribute(A.MEDIA_SEEKABLE,e.join(`:`))}update(){let e=wm(this);Tm(this),e!==am(this,lm).innerHTML&&(am(this,lm).innerHTML=e)}};lm=new WeakMap,um=new WeakMap,dm=new WeakMap,fm=new WeakSet,pm=function(){am(this,um)||(sm(this,um,e=>{let{key:t}=e;if(!Sm.includes(t)){this.removeEventListener(`keyup`,am(this,um));return}this.toggleTimeDisplay()}),this.addEventListener(`keydown`,am(this,dm)),this.addEventListener(`click`,this.toggleTimeDisplay))},mm=new WeakSet,hm=function(){am(this,um)&&(this.removeEventListener(`keyup`,am(this,um)),this.removeEventListener(`keydown`,am(this,dm)),this.removeEventListener(`click`,this.toggleTimeDisplay),sm(this,um,null))},gm=new WeakSet,_m=function(){!this.noToggle&&!this.hasAttribute(`disabled`)&&(this.setAttribute(`role`,`button`),this.enable(),cm(this,fm,pm).call(this))},vm=new WeakSet,ym=function(){this.removeAttribute(`role`),this.disable(),cm(this,mm,hm).call(this)},Om.getSlotTemplateHTML=Em,M.customElements.get(`media-time-display`)||M.customElements.define(`media-time-display`,Om);var km=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Z=(e,t,n)=>(km(e,t,`read from private field`),n?n.call(e):t.get(e)),Am=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},jm=(e,t,n,r)=>(km(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Mm=(e,t,n,r)=>({set _(r){jm(e,t,r,n)},get _(){return Z(e,t,r)}}),Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um=class{constructor(e,t,n){Am(this,Nm,void 0),Am(this,Pm,void 0),Am(this,Fm,void 0),Am(this,Im,void 0),Am(this,Lm,void 0),Am(this,Rm,void 0),Am(this,zm,void 0),Am(this,Bm,void 0),Am(this,Vm,0),Am(this,Hm,(e=performance.now())=>{jm(this,Vm,requestAnimationFrame(Z(this,Hm))),jm(this,Im,performance.now()-Z(this,Fm));let t=1e3/this.fps;if(Z(this,Im)>t){jm(this,Fm,e-Z(this,Im)%t);let n=1e3/((e-Z(this,Pm))/++Mm(this,Lm)._),r=(e-Z(this,Rm))/1e3/this.duration,i=Z(this,zm)+r*this.playbackRate;i-Z(this,Nm).valueAsNumber>0?jm(this,Bm,this.playbackRate/this.duration/n):(jm(this,Bm,.995*Z(this,Bm)),i=Z(this,Nm).valueAsNumber+Z(this,Bm)),this.callback(i)}}),jm(this,Nm,e),this.callback=t,this.fps=n}start(){Z(this,Vm)===0&&(jm(this,Fm,performance.now()),jm(this,Pm,Z(this,Fm)),jm(this,Lm,0),Z(this,Hm).call(this))}stop(){Z(this,Vm)!==0&&(cancelAnimationFrame(Z(this,Vm)),jm(this,Vm,0))}update({start:e,duration:t,playbackRate:n}){let r=e-Z(this,Nm).valueAsNumber,i=Math.abs(t-this.duration);(r>0||r<-.03||i>=.5)&&this.callback(e),jm(this,zm,e),jm(this,Rm,performance.now()),this.duration=t,this.playbackRate=n}};Nm=new WeakMap,Pm=new WeakMap,Fm=new WeakMap,Im=new WeakMap,Lm=new WeakMap,Rm=new WeakMap,zm=new WeakMap,Bm=new WeakMap,Vm=new WeakMap,Hm=new WeakMap;var Wm=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Q=(e,t,n)=>(Wm(e,t,`read from private field`),n?n.call(e):t.get(e)),$=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Gm=(e,t,n,r)=>(Wm(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Km=(e,t,n)=>(Wm(e,t,`access private method`),n),qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh=e=>{let t=e.range,n=zo(+Sh(e)),r=zo(+e.mediaSeekableEnd),i=n&&r?j(`{currentTime} of {totalTime}`,{currentTime:n,totalTime:r}):j(`video not loaded, unknown time.`);t.setAttribute(`aria-valuetext`,i)};function bh(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${A.MEDIA_PREVIEW_IMAGE}], [${A.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${A.MEDIA_PREVIEW_IMAGE}], [${A.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${A.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${A.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${A.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${A.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${A.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${A.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${A.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${A.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${A.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${A.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${A.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${A.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Fp.shadowRootOptions.mode}">
            ${Fp.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var xh=(e,t=e.mediaCurrentTime)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(r))return 0;let i=(t-n)/(r-n);return Math.max(0,Math.min(i,1))},Sh=(e,t=e.range.valueAsNumber)=>{let n=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,r=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(r)?0:t*(r-n)+n},Ch=class extends Cd{constructor(){super(),$(this,ih),$(this,sh),$(this,lh),$(this,dh),$(this,ph),$(this,hh),$(this,_h),$(this,qm,null),$(this,Jm,void 0),$(this,Ym,void 0),$(this,Xm,void 0),$(this,Zm,void 0),$(this,Qm,void 0),$(this,$m,void 0),$(this,eh,void 0),$(this,th,void 0),$(this,nh,void 0),$(this,rh,()=>{Km(this,ih,ah).call(this)?Q(this,Jm).start():Q(this,Jm).stop()}),$(this,oh,e=>{this.dragging||(jo(e)&&(this.range.valueAsNumber=e),Q(this,nh)||this.updateBar())}),this.shadowRoot.querySelector(`#track`).insertAdjacentHTML(`afterbegin`,`<div id="buffered" part="buffered"></div>`),Gm(this,Ym,this.shadowRoot.querySelectorAll(`[part~="box"]`)),Gm(this,Zm,this.shadowRoot.querySelector(`[part~="preview-box"]`)),Gm(this,Qm,this.shadowRoot.querySelector(`[part~="current-box"]`));let e=getComputedStyle(this);Gm(this,$m,parseInt(e.getPropertyValue(`--media-box-padding-left`))),Gm(this,eh,parseInt(e.getPropertyValue(`--media-box-padding-right`))),Gm(this,Jm,new Um(this.range,Q(this,oh),60))}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_PAUSED,A.MEDIA_DURATION,A.MEDIA_SEEKABLE,A.MEDIA_CURRENT_TIME,A.MEDIA_PREVIEW_IMAGE,A.MEDIA_PREVIEW_TIME,A.MEDIA_PREVIEW_CHAPTER,A.MEDIA_BUFFERED,A.MEDIA_PLAYBACK_RATE,A.MEDIA_LOADING,A.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute(`aria-label`,j(`seek`)),Q(this,rh).call(this),Gm(this,qm,this.getRootNode()),(e=Q(this,qm))==null||e.addEventListener(`transitionstart`,this)}disconnectedCallback(){var e;super.disconnectedCallback(),Q(this,rh).call(this),(e=Q(this,qm))==null||e.removeEventListener(`transitionstart`,this),Gm(this,qm,null)}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),t!=n&&(e===A.MEDIA_CURRENT_TIME||e===A.MEDIA_PAUSED||e===A.MEDIA_ENDED||e===A.MEDIA_LOADING||e===A.MEDIA_DURATION||e===A.MEDIA_SEEKABLE?(Q(this,Jm).update({start:xh(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),Q(this,rh).call(this),yh(this)):e===A.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===A.MEDIA_DURATION||e===A.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=Q(this,th),this.updateBar()))}get mediaChaptersCues(){return Q(this,th)}set mediaChaptersCues(e){Gm(this,th,e),this.updateSegments(Q(this,th)?.map(e=>({start:xh(this,e.startTime),end:xh(this,e.endTime)})))}get mediaPaused(){return I(this,A.MEDIA_PAUSED)}set mediaPaused(e){L(this,A.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,A.MEDIA_LOADING)}set mediaLoading(e){L(this,A.MEDIA_LOADING,e)}get mediaDuration(){return P(this,A.MEDIA_DURATION)}set mediaDuration(e){F(this,A.MEDIA_DURATION,e)}get mediaCurrentTime(){return P(this,A.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){F(this,A.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return P(this,A.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){F(this,A.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(A.MEDIA_BUFFERED);return e?e.split(` `).map(e=>e.split(`:`).map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(A.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(`:`)).join(` `);this.setAttribute(A.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(A.MEDIA_SEEKABLE);if(e)return e.split(`:`).map(e=>+e)}set mediaSeekable(e){if(e==null){this.removeAttribute(A.MEDIA_SEEKABLE);return}this.setAttribute(A.MEDIA_SEEKABLE,e.join(`:`))}get mediaSeekableEnd(){let[,e=this.mediaDuration]=this.mediaSeekable??[];return e}get mediaSeekableStart(){let[e=0]=this.mediaSeekable??[];return e}get mediaPreviewImage(){return R(this,A.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){z(this,A.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return P(this,A.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){F(this,A.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return I(this,A.MEDIA_ENDED)}set mediaEnded(e){L(this,A.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){let e=this.mediaBuffered;if(!e.length)return;let t;if(this.mediaEnded)t=1;else{let n=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=e.find(([e,t])=>e<=n&&n<=t)??[];t=xh(this,r)}let{style:n}=N(this.shadowRoot,`#buffered`);n.setProperty(`width`,`${t*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector(`slot[name="current"]`).assignedElements().length)return;let e=N(this.shadowRoot,`#current-rail`),t=N(this.shadowRoot,`[part~="current-box"]`),n=Km(this,sh,ch).call(this,Q(this,Qm)),r=Km(this,lh,uh).call(this,n,this.range.valueAsNumber),i=Km(this,dh,fh).call(this,n,this.range.valueAsNumber);e.style.transform=`translateX(${r})`,e.style.setProperty(`--_range-width`,`${n.range.width}`),t.style.setProperty(`--_box-shift`,`${i}`),t.style.setProperty(`--_box-width`,`${n.box.width}px`),t.style.setProperty(`visibility`,`initial`)}handleEvent(e){switch(super.handleEvent(e),e.type){case`input`:Km(this,_h,vh).call(this);break;case`pointermove`:Km(this,ph,mh).call(this,e);break;case`pointerup`:Q(this,nh)&&Gm(this,nh,!1);break;case`pointerdown`:Gm(this,nh,!0);break;case`pointerleave`:Km(this,hh,gh).call(this,null);break;case`transitionstart`:ss(e.target,this)&&setTimeout(()=>Q(this,rh).call(this),0);break}}};qm=new WeakMap,Jm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Zm=new WeakMap,Qm=new WeakMap,$m=new WeakMap,eh=new WeakMap,th=new WeakMap,nh=new WeakMap,rh=new WeakMap,ih=new WeakSet,ah=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&ds(this)},oh=new WeakMap,sh=new WeakSet,ch=function(e){let t=((this.getAttribute(`bounds`)?cs(this,`#${this.getAttribute(`bounds`)}`):this.parentElement)??this).getBoundingClientRect(),n=this.range.getBoundingClientRect(),r=e.offsetWidth;return{box:{width:r,min:-(n.left-t.left-r/2),max:t.right-n.left-r/2},bounds:t,range:n}},lh=new WeakSet,uh=function(e,t){let n=`${t*100}%`,{width:r,min:i,max:a}=e.box;if(!r)return n;if(Number.isNaN(i)||(n=`max(${`calc(1 / var(--_range-width) * 100 * ${i}% + var(--media-box-padding-left))`}, ${n})`),!Number.isNaN(a)){let e=`calc(1 / var(--_range-width) * 100 * ${a}% - var(--media-box-padding-right))`;n=`min(${n}, ${e})`}return n},dh=new WeakSet,fh=function(e,t){let{width:n,min:r,max:i}=e.box,a=t*e.range.width;if(a<r+Q(this,$m)){let t=e.range.left-e.bounds.left-Q(this,$m);return`${a-n/2+t}px`}if(a>i-Q(this,eh)){let t=e.bounds.right-e.range.right-Q(this,eh);return`${a+n/2-t-e.range.width}px`}return 0},ph=new WeakSet,mh=function(e){let t=[...Q(this,Ym)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){Km(this,hh,gh).call(this,null);return}let n=this.mediaSeekableEnd;if(!n)return;let r=N(this.shadowRoot,`#preview-rail`),i=N(this.shadowRoot,`[part~="preview-box"]`),a=Km(this,sh,ch).call(this,Q(this,Zm)),o=(e.clientX-a.range.left)/a.range.width;o=Math.max(0,Math.min(1,o));let s=Km(this,lh,uh).call(this,a,o),c=Km(this,dh,fh).call(this,a,o);r.style.transform=`translateX(${s})`,r.style.setProperty(`--_range-width`,`${a.range.width}`),i.style.setProperty(`--_box-shift`,`${c}`),i.style.setProperty(`--_box-width`,`${a.box.width}px`);let l=Math.round(Q(this,Xm))-Math.round(o*n);Math.abs(l)<1&&o>.01&&o<.99||(Gm(this,Xm,o*n),Km(this,hh,gh).call(this,Q(this,Xm)))},hh=new WeakSet,gh=function(e){this.dispatchEvent(new M.CustomEvent(O.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},_h=new WeakSet,vh=function(){Q(this,Jm).stop();let e=Sh(this);this.dispatchEvent(new M.CustomEvent(O.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},Ch.shadowRootOptions={mode:`open`},Ch.getContainerTemplateHTML=bh,M.customElements.get(`media-time-range`)||M.customElements.define(`media-time-range`,Ch);var wh=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},Th=(e,t,n)=>(wh(e,t,`read from private field`),n?n.call(e):t.get(e)),Eh=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},Dh,Oh=1,kh=e=>e.mediaMuted?0:e.mediaVolume,Ah=e=>`${Math.round(e*100)}%`,jh=class extends Cd{constructor(){super(...arguments),Eh(this,Dh,()=>{let e=this.range.value,t=new M.CustomEvent(O.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_VOLUME,A.MEDIA_MUTED,A.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute(`aria-label`,j(`volume`)),this.range.addEventListener(`input`,Th(this,Dh))}disconnectedCallback(){this.range.removeEventListener(`input`,Th(this,Dh)),super.disconnectedCallback()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),(e===A.MEDIA_VOLUME||e===A.MEDIA_MUTED)&&(this.range.valueAsNumber=kh(this),this.range.setAttribute(`aria-valuetext`,Ah(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return P(this,A.MEDIA_VOLUME,Oh)}set mediaVolume(e){F(this,A.MEDIA_VOLUME,e)}get mediaMuted(){return I(this,A.MEDIA_MUTED)}set mediaMuted(e){L(this,A.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return R(this,A.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){z(this,A.MEDIA_VOLUME_UNAVAILABLE,e)}};Dh=new WeakMap,M.customElements.get(`media-volume-range`)||M.customElements.define(`media-volume-range`,jh);function Mh(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${A.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Nh(){return j(`Loop`)}var Ph=class extends J{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,A.MEDIA_LOOP]}connectedCallback(){super.connectedCallback(),this.container=this.shadowRoot?.querySelector(`#icon`)||null,this.container&&(this.container.textContent=j(`Loop`))}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===A.MEDIA_LOOP&&this.container&&this.setAttribute(`aria-checked`,this.mediaLoop?`true`:`false`)}get mediaLoop(){return I(this,A.MEDIA_LOOP)}set mediaLoop(e){L(this,A.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new M.CustomEvent(O.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Ph.getSlotTemplateHTML=Mh,Ph.getTooltipContentHTML=Nh,M.customElements.get(`media-loop-button`)||M.customElements.define(`media-loop-button`,Ph);var Fh=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Ih={class:`media-controls`},Lh={class:`input-group`},Rh=[`value`],zh={class:`input-group`},Bh=[`src`],Vh=Fh({__name:`MediaPlayer`,setup(e){let t=Yt(`https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4`),n=e=>{t.value=e.target.value},r=e=>{let n=e.target.files[0];n&&(t.value=URL.createObjectURL(n))};return(e,i)=>(Ii(),Vi(Ai,null,[D(`div`,Ih,[D(`div`,Lh,[i[0]||=D(`label`,{for:`video-url`},`视频 URL:`,-1),D(`input`,{id:`video-url`,type:`text`,value:t.value,onChange:n,placeholder:`输入视频 URL`},null,40,Rh)]),D(`div`,zh,[i[1]||=D(`label`,{for:`file-input`},`选择本地文件:`,-1),D(`input`,{id:`file-input`,type:`file`,accept:`video/*`,onChange:r},null,32)])]),D(`media-controller`,null,[D(`video`,{slot:`media`,src:t.value},null,8,Bh),i[2]||=D(`media-control-bar`,null,[D(`media-play-button`),D(`media-mute-button`),D(`media-volume-range`),D(`media-time-range`),D(`media-pip-button`),D(`media-fullscreen-button`)],-1)])],64))}},[[`__scopeId`,`data-v-1a5673a9`]]);mo({__name:`App`,setup(e){return(e,t)=>(Ii(),Hi(Vh))}}).mount(`#app`);