(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Na(n){const s=Object.create(null);for(const a of n.split(","))s[a]=1;return a=>a in s}const ds={},Un=[],nn=()=>{},Ql=()=>!1,Kt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qa=n=>n.startsWith("onUpdate:"),hs=Object.assign,Ma=(n,s)=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)},ke=Object.prototype.hasOwnProperty,as=(n,s)=>ke.call(n,s),H=Array.isArray,Kn=n=>yt(n)==="[object Map]",Ht=n=>yt(n)==="[object Set]",sl=n=>yt(n)==="[object Date]",Y=n=>typeof n=="function",fs=n=>typeof n=="string",tn=n=>typeof n=="symbol",ps=n=>n!==null&&typeof n=="object",_l=n=>(ps(n)||Y(n))&&Y(n.then)&&Y(n.catch),sp=Object.prototype.toString,yt=n=>sp.call(n),Ce=n=>yt(n).slice(8,-1),np=n=>yt(n)==="[object Object]",Da=n=>fs(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pt=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wt=n=>{const s=Object.create(null);return a=>s[a]||(s[a]=n(a))},we=/-\w/g,Rs=Wt(n=>n.replace(we,s=>s.slice(1).toUpperCase())),Se=/\B([A-Z])/g,En=Wt(n=>n.replace(Se,"-$1").toLowerCase()),jt=Wt(n=>n.charAt(0).toUpperCase()+n.slice(1)),aa=Wt(n=>n?`on${jt(n)}`:""),sn=(n,s)=>!Object.is(n,s),Rt=(n,...s)=>{for(let a=0;a<n.length;a++)n[a](...s)},tp=(n,s,a,e=!1)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,writable:e,value:a})},zt=n=>{const s=parseFloat(n);return isNaN(s)?n:s};let nl;const Yt=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(n){if(H(n)){const s={};for(let a=0;a<n.length;a++){const e=n[a],o=fs(e)?Re(e):Yn(e);if(o)for(const l in o)s[l]=o[l]}return s}else if(fs(n)||ps(n))return n}const Ae=/;(?![^(]*\))/g,Ee=/:([^]+)/,Te=/\/\*[^]*?\*\//g;function Re(n){const s={};return n.replace(Te,"").split(Ae).forEach(a=>{if(a){const e=a.split(Ee);e.length>1&&(s[e[0].trim()]=e[1].trim())}}),s}function j(n){let s="";if(fs(n))s=n;else if(H(n))for(let a=0;a<n.length;a++){const e=j(n[a]);e&&(s+=e+" ")}else if(ps(n))for(const a in n)n[a]&&(s+=a+" ");return s.trim()}const Oe="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pe=Na(Oe);function ap(n){return!!n||n===""}function Ie(n,s){if(n.length!==s.length)return!1;let a=!0;for(let e=0;a&&e<n.length;e++)a=kt(n[e],s[e]);return a}function kt(n,s){if(n===s)return!0;let a=sl(n),e=sl(s);if(a||e)return a&&e?n.getTime()===s.getTime():!1;if(a=tn(n),e=tn(s),a||e)return n===s;if(a=H(n),e=H(s),a||e)return a&&e?Ie(n,s):!1;if(a=ps(n),e=ps(s),a||e){if(!a||!e)return!1;const o=Object.keys(n).length,l=Object.keys(s).length;if(o!==l)return!1;for(const d in n){const p=n.hasOwnProperty(d),r=s.hasOwnProperty(d);if(p&&!r||!p&&r||!kt(n[d],s[d]))return!1}}return String(n)===String(s)}function xe(n,s){return n.findIndex(a=>kt(a,s))}const lp=n=>!!(n&&n.__v_isRef===!0),Z=n=>fs(n)?n:n==null?"":H(n)||ps(n)&&(n.toString===sp||!Y(n.toString))?lp(n)?Z(n.value):JSON.stringify(n,pp,2):String(n),pp=(n,s)=>lp(s)?pp(n,s.value):Kn(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((a,[e,o],l)=>(a[la(e,l)+" =>"]=o,a),{})}:Ht(s)?{[`Set(${s.size})`]:[...s.values()].map(a=>la(a))}:tn(s)?la(s):ps(s)&&!H(s)&&!np(s)?String(s):s,la=(n,s="")=>{var a;return tn(n)?`Symbol(${(a=n.description)!=null?a:s})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ns;class Ne{constructor(s=!1){this.detached=s,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ns,!s&&Ns&&(this.index=(Ns.scopes||(Ns.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].pause();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].resume();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].resume()}}run(s){if(this._active){const a=Ns;try{return Ns=this,s()}finally{Ns=a}}}on(){++this._on===1&&(this.prevScope=Ns,Ns=this)}off(){this._on>0&&--this._on===0&&(Ns=this.prevScope,this.prevScope=void 0)}stop(s){if(this._active){this._active=!1;let a,e;for(a=0,e=this.effects.length;a<e;a++)this.effects[a].stop();for(this.effects.length=0,a=0,e=this.cleanups.length;a<e;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,e=this.scopes.length;a<e;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function qe(){return Ns}let cs;const pa=new WeakSet;class ep{constructor(s){this.fn=s,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ns&&Ns.active&&Ns.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pa.has(this)&&(pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tl(this),rp(this);const s=cs,a=Bs;cs=this,Bs=!0;try{return this.fn()}finally{cp(this),cs=s,Bs=a,this.flags&=-3}}stop(){if(this.flags&1){for(let s=this.deps;s;s=s.nextDep)Ga(s);this.deps=this.depsTail=void 0,tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){va(this)&&this.run()}get dirty(){return va(this)}}let op=0,et,ot;function dp(n,s=!1){if(n.flags|=8,s){n.next=ot,ot=n;return}n.next=et,et=n}function Fa(){op++}function Va(){if(--op>0)return;if(ot){let s=ot;for(ot=void 0;s;){const a=s.next;s.next=void 0,s.flags&=-9,s=a}}let n;for(;et;){let s=et;for(et=void 0;s;){const a=s.next;if(s.next=void 0,s.flags&=-9,s.flags&1)try{s.trigger()}catch(e){n||(n=e)}s=a}}if(n)throw n}function rp(n){for(let s=n.deps;s;s=s.nextDep)s.version=-1,s.prevActiveLink=s.dep.activeLink,s.dep.activeLink=s}function cp(n){let s,a=n.depsTail,e=a;for(;e;){const o=e.prevDep;e.version===-1?(e===a&&(a=o),Ga(e),Me(e)):s=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=o}n.deps=s,n.depsTail=a}function va(n){for(let s=n.deps;s;s=s.nextDep)if(s.dep.version!==s.version||s.dep.computed&&(ip(s.dep.computed)||s.dep.version!==s.version))return!0;return!!n._dirty}function ip(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ft)||(n.globalVersion=ft,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!va(n))))return;n.flags|=2;const s=n.dep,a=cs,e=Bs;cs=n,Bs=!0;try{rp(n);const o=n.fn(n._value);(s.version===0||sn(o,n._value))&&(n.flags|=128,n._value=o,s.version++)}catch(o){throw s.version++,o}finally{cs=a,Bs=e,cp(n),n.flags&=-3}}function Ga(n,s=!1){const{dep:a,prevSub:e,nextSub:o}=n;if(e&&(e.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=e,n.nextSub=void 0),a.subs===n&&(a.subs=e,!e&&a.computed)){a.computed.flags&=-5;for(let l=a.computed.deps;l;l=l.nextDep)Ga(l,!0)}!s&&!--a.sc&&a.map&&a.map.delete(a.key)}function Me(n){const{prevDep:s,nextDep:a}=n;s&&(s.nextDep=a,n.prevDep=void 0),a&&(a.prevDep=s,n.nextDep=void 0)}let Bs=!0;const up=[];function fn(){up.push(Bs),Bs=!1}function mn(){const n=up.pop();Bs=n===void 0?!0:n}function tl(n){const{cleanup:s}=n;if(n.cleanup=void 0,s){const a=cs;cs=void 0;try{s()}finally{cs=a}}}let ft=0;class De{constructor(s,a){this.sub=s,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $a{constructor(s){this.computed=s,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(s){if(!cs||!Bs||cs===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==cs)a=this.activeLink=new De(cs,this),cs.deps?(a.prevDep=cs.depsTail,cs.depsTail.nextDep=a,cs.depsTail=a):cs.deps=cs.depsTail=a,fp(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const e=a.nextDep;e.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=e),a.prevDep=cs.depsTail,a.nextDep=void 0,cs.depsTail.nextDep=a,cs.depsTail=a,cs.deps===a&&(cs.deps=e)}return a}trigger(s){this.version++,ft++,this.notify(s)}notify(s){Fa();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Va()}}}function fp(n){if(n.dep.sc++,n.sub.flags&4){const s=n.dep.computed;if(s&&!n.dep.subs){s.flags|=20;for(let e=s.deps;e;e=e.nextDep)fp(e)}const a=n.dep.subs;a!==n&&(n.prevSub=a,a&&(a.nextSub=n)),n.dep.subs=n}}const ha=new WeakMap,Mn=Symbol(""),ya=Symbol(""),mt=Symbol("");function ys(n,s,a){if(Bs&&cs){let e=ha.get(n);e||ha.set(n,e=new Map);let o=e.get(a);o||(e.set(a,o=new $a),o.map=e,o.key=a),o.track()}}function rn(n,s,a,e,o,l){const d=ha.get(n);if(!d){ft++;return}const p=r=>{r&&r.trigger()};if(Fa(),s==="clear")d.forEach(p);else{const r=H(n),m=r&&Da(a);if(r&&a==="length"){const u=Number(e);d.forEach((g,h)=>{(h==="length"||h===mt||!tn(h)&&h>=u)&&p(g)})}else switch((a!==void 0||d.has(void 0))&&p(d.get(a)),m&&p(d.get(mt)),s){case"add":r?m&&p(d.get("length")):(p(d.get(Mn)),Kn(n)&&p(d.get(ya)));break;case"delete":r||(p(d.get(Mn)),Kn(n)&&p(d.get(ya)));break;case"set":Kn(n)&&p(d.get(Mn));break}}Va()}function $n(n){const s=ts(n);return s===n?s:(ys(s,"iterate",mt),Vs(n)?s:s.map(Ls))}function Zt(n){return ys(n=ts(n),"iterate",mt),n}function Qs(n,s){return bn(n)?Zn(Dn(n)?Ls(s):s):Ls(s)}const Fe={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,n=>Qs(this,n))},concat(...n){return $n(this).concat(...n.map(s=>H(s)?$n(s):s))},entries(){return ea(this,"entries",n=>(n[1]=Qs(this,n[1]),n))},every(n,s){return pn(this,"every",n,s,void 0,arguments)},filter(n,s){return pn(this,"filter",n,s,a=>a.map(e=>Qs(this,e)),arguments)},find(n,s){return pn(this,"find",n,s,a=>Qs(this,a),arguments)},findIndex(n,s){return pn(this,"findIndex",n,s,void 0,arguments)},findLast(n,s){return pn(this,"findLast",n,s,a=>Qs(this,a),arguments)},findLastIndex(n,s){return pn(this,"findLastIndex",n,s,void 0,arguments)},forEach(n,s){return pn(this,"forEach",n,s,void 0,arguments)},includes(...n){return oa(this,"includes",n)},indexOf(...n){return oa(this,"indexOf",n)},join(n){return $n(this).join(n)},lastIndexOf(...n){return oa(this,"lastIndexOf",n)},map(n,s){return pn(this,"map",n,s,void 0,arguments)},pop(){return nt(this,"pop")},push(...n){return nt(this,"push",n)},reduce(n,...s){return al(this,"reduce",n,s)},reduceRight(n,...s){return al(this,"reduceRight",n,s)},shift(){return nt(this,"shift")},some(n,s){return pn(this,"some",n,s,void 0,arguments)},splice(...n){return nt(this,"splice",n)},toReversed(){return $n(this).toReversed()},toSorted(n){return $n(this).toSorted(n)},toSpliced(...n){return $n(this).toSpliced(...n)},unshift(...n){return nt(this,"unshift",n)},values(){return ea(this,"values",n=>Qs(this,n))}};function ea(n,s,a){const e=Zt(n),o=e[s]();return e!==n&&!Vs(n)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.done||(l.value=a(l.value)),l}),o}const Ve=Array.prototype;function pn(n,s,a,e,o,l){const d=Zt(n),p=d!==n&&!Vs(n),r=d[s];if(r!==Ve[s]){const g=r.apply(n,l);return p?Ls(g):g}let m=a;d!==n&&(p?m=function(g,h){return a.call(this,Qs(n,g),h,n)}:a.length>2&&(m=function(g,h){return a.call(this,g,h,n)}));const u=r.call(d,m,e);return p&&o?o(u):u}function al(n,s,a,e){const o=Zt(n),l=o!==n&&!Vs(n);let d=a,p=!1;o!==n&&(l?(p=e.length===0,d=function(m,u,g){return p&&(p=!1,m=Qs(n,m)),a.call(this,m,Qs(n,u),g,n)}):a.length>3&&(d=function(m,u,g){return a.call(this,m,u,g,n)}));const r=o[s](d,...e);return p?Qs(n,r):r}function oa(n,s,a){const e=ts(n);ys(e,"iterate",mt);const o=e[s](...a);return(o===-1||o===!1)&&Ua(a[0])?(a[0]=ts(a[0]),e[s](...a)):o}function nt(n,s,a=[]){fn(),Fa();const e=ts(n)[s].apply(n,a);return Va(),mn(),e}const Ge=Na("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tn));function $e(n){tn(n)||(n=String(n));const s=ts(this);return ys(s,"has",n),s.hasOwnProperty(n)}class bp{constructor(s=!1,a=!1){this._isReadonly=s,this._isShallow=a}get(s,a,e){if(a==="__v_skip")return s.__v_skip;const o=this._isReadonly,l=this._isShallow;if(a==="__v_isReactive")return!o;if(a==="__v_isReadonly")return o;if(a==="__v_isShallow")return l;if(a==="__v_raw")return e===(o?l?Ze:yp:l?hp:vp).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(e)?s:void 0;const d=H(s);if(!o){let r;if(d&&(r=Fe[a]))return r;if(a==="hasOwnProperty")return $e}const p=Reflect.get(s,a,ws(s)?s:e);if((tn(a)?mp.has(a):Ge(a))||(o||ys(s,"get",a),l))return p;if(ws(p)){const r=d&&Da(a)?p:p.value;return o&&ps(r)?Ca(r):r}return ps(p)?o?Ca(p):Xt(p):p}}class gp extends bp{constructor(s=!1){super(!1,s)}set(s,a,e,o){let l=s[a];const d=H(s)&&Da(a);if(!this._isShallow){const m=bn(l);if(!Vs(e)&&!bn(e)&&(l=ts(l),e=ts(e)),!d&&ws(l)&&!ws(e))return m||(l.value=e),!0}const p=d?Number(a)<s.length:as(s,a),r=Reflect.set(s,a,e,ws(s)?s:o);return s===ts(o)&&(p?sn(e,l)&&rn(s,"set",a,e):rn(s,"add",a,e)),r}deleteProperty(s,a){const e=as(s,a);s[a];const o=Reflect.deleteProperty(s,a);return o&&e&&rn(s,"delete",a,void 0),o}has(s,a){const e=Reflect.has(s,a);return(!tn(a)||!mp.has(a))&&ys(s,"has",a),e}ownKeys(s){return ys(s,"iterate",H(s)?"length":Mn),Reflect.ownKeys(s)}}class Be extends bp{constructor(s=!1){super(!0,s)}set(s,a){return!0}deleteProperty(s,a){return!0}}const Le=new gp,Ue=new Be,Ke=new gp(!0);const ka=n=>n,St=n=>Reflect.getPrototypeOf(n);function He(n,s,a){return function(...e){const o=this.__v_raw,l=ts(o),d=Kn(l),p=n==="entries"||n===Symbol.iterator&&d,r=n==="keys"&&d,m=o[n](...e),u=a?ka:s?Zn:Ls;return!s&&ys(l,"iterate",r?ya:Mn),hs(Object.create(m),{next(){const{value:g,done:h}=m.next();return h?{value:g,done:h}:{value:p?[u(g[0]),u(g[1])]:u(g),done:h}}})}}function At(n){return function(...s){return n==="delete"?!1:n==="clear"?void 0:this}}function We(n,s){const a={get(o){const l=this.__v_raw,d=ts(l),p=ts(o);n||(sn(o,p)&&ys(d,"get",o),ys(d,"get",p));const{has:r}=St(d),m=s?ka:n?Zn:Ls;if(r.call(d,o))return m(l.get(o));if(r.call(d,p))return m(l.get(p));l!==d&&l.get(o)},get size(){const o=this.__v_raw;return!n&&ys(ts(o),"iterate",Mn),o.size},has(o){const l=this.__v_raw,d=ts(l),p=ts(o);return n||(sn(o,p)&&ys(d,"has",o),ys(d,"has",p)),o===p?l.has(o):l.has(o)||l.has(p)},forEach(o,l){const d=this,p=d.__v_raw,r=ts(p),m=s?ka:n?Zn:Ls;return!n&&ys(r,"iterate",Mn),p.forEach((u,g)=>o.call(l,m(u),m(g),d))}};return hs(a,n?{add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear")}:{add(o){const l=ts(this),d=St(l),p=ts(o),r=!s&&!Vs(o)&&!bn(o)?p:o;return d.has.call(l,r)||sn(o,r)&&d.has.call(l,o)||sn(p,r)&&d.has.call(l,p)||(l.add(r),rn(l,"add",r,r)),this},set(o,l){!s&&!Vs(l)&&!bn(l)&&(l=ts(l));const d=ts(this),{has:p,get:r}=St(d);let m=p.call(d,o);m||(o=ts(o),m=p.call(d,o));const u=r.call(d,o);return d.set(o,l),m?sn(l,u)&&rn(d,"set",o,l):rn(d,"add",o,l),this},delete(o){const l=ts(this),{has:d,get:p}=St(l);let r=d.call(l,o);r||(o=ts(o),r=d.call(l,o)),p&&p.call(l,o);const m=l.delete(o);return r&&rn(l,"delete",o,void 0),m},clear(){const o=ts(this),l=o.size!==0,d=o.clear();return l&&rn(o,"clear",void 0,void 0),d}}),["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=He(o,n,s)}),a}function Ba(n,s){const a=We(n,s);return(e,o,l)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?e:Reflect.get(as(a,o)&&o in e?a:e,o,l)}const je={get:Ba(!1,!1)},ze={get:Ba(!1,!0)},Ye={get:Ba(!0,!1)};const vp=new WeakMap,hp=new WeakMap,yp=new WeakMap,Ze=new WeakMap;function Xe(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Je(n){return n.__v_skip||!Object.isExtensible(n)?0:Xe(Ce(n))}function Xt(n){return bn(n)?n:La(n,!1,Le,je,vp)}function kp(n){return La(n,!1,Ke,ze,hp)}function Ca(n){return La(n,!0,Ue,Ye,yp)}function La(n,s,a,e,o){if(!ps(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=Je(n);if(l===0)return n;const d=o.get(n);if(d)return d;const p=new Proxy(n,l===2?e:a);return o.set(n,p),p}function Dn(n){return bn(n)?Dn(n.__v_raw):!!(n&&n.__v_isReactive)}function bn(n){return!!(n&&n.__v_isReadonly)}function Vs(n){return!!(n&&n.__v_isShallow)}function Ua(n){return n?!!n.__v_raw:!1}function ts(n){const s=n&&n.__v_raw;return s?ts(s):n}function Qe(n){return!as(n,"__v_skip")&&Object.isExtensible(n)&&tp(n,"__v_skip",!0),n}const Ls=n=>ps(n)?Xt(n):n,Zn=n=>ps(n)?Ca(n):n;function ws(n){return n?n.__v_isRef===!0:!1}function Cp(n){return wp(n,!1)}function _e(n){return wp(n,!0)}function wp(n,s){return ws(n)?n:new so(n,s)}class so{constructor(s,a){this.dep=new $a,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?s:ts(s),this._value=a?s:Ls(s),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(s){const a=this._rawValue,e=this.__v_isShallow||Vs(s)||bn(s);s=e?s:ts(s),sn(s,a)&&(this._rawValue=s,this._value=e?s:Ls(s),this.dep.trigger())}}function Hn(n){return ws(n)?n.value:n}const no={get:(n,s,a)=>s==="__v_raw"?n:Hn(Reflect.get(n,s,a)),set:(n,s,a,e)=>{const o=n[s];return ws(o)&&!ws(a)?(o.value=a,!0):Reflect.set(n,s,a,e)}};function Sp(n){return Dn(n)?n:new Proxy(n,no)}class to{constructor(s,a,e){this.fn=s,this.setter=a,this._value=void 0,this.dep=new $a(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&cs!==this)return dp(this,!0),!0}get value(){const s=this.dep.track();return ip(this),s&&(s.version=this.dep.version),this._value}set value(s){this.setter&&this.setter(s)}}function ao(n,s,a=!1){let e,o;return Y(n)?e=n:(e=n.get,o=n.set),new to(e,o,a)}const Et={},qt=new WeakMap;let In;function lo(n,s=!1,a=In){if(a){let e=qt.get(a);e||qt.set(a,e=[]),e.push(n)}}function po(n,s,a=ds){const{immediate:e,deep:o,once:l,scheduler:d,augmentJob:p,call:r}=a,m=G=>o?G:Vs(G)||o===!1||o===0?cn(G,1):cn(G);let u,g,h,y,V=!1,I=!1;if(ws(n)?(g=()=>n.value,V=Vs(n)):Dn(n)?(g=()=>m(n),V=!0):H(n)?(I=!0,V=n.some(G=>Dn(G)||Vs(G)),g=()=>n.map(G=>{if(ws(G))return G.value;if(Dn(G))return m(G);if(Y(G))return r?r(G,2):G()})):Y(n)?s?g=r?()=>r(n,2):n:g=()=>{if(h){fn();try{h()}finally{mn()}}const G=In;In=u;try{return r?r(n,3,[y]):n(y)}finally{In=G}}:g=nn,s&&o){const G=g,os=o===!0?1/0:o;g=()=>cn(G(),os)}const z=qe(),K=()=>{u.stop(),z&&z.active&&Ma(z.effects,u)};if(l&&s){const G=s;s=(...os)=>{G(...os),K()}}let q=I?new Array(n.length).fill(Et):Et;const $=G=>{if(!(!(u.flags&1)||!u.dirty&&!G))if(s){const os=u.run();if(o||V||(I?os.some((gs,is)=>sn(gs,q[is])):sn(os,q))){h&&h();const gs=In;In=u;try{const is=[os,q===Et?void 0:I&&q[0]===Et?[]:q,y];q=os,r?r(s,3,is):s(...is)}finally{In=gs}}}else u.run()};return p&&p($),u=new ep(g),u.scheduler=d?()=>d($,!1):$,y=G=>lo(G,!1,u),h=u.onStop=()=>{const G=qt.get(u);if(G){if(r)r(G,4);else for(const os of G)os();qt.delete(u)}},s?e?$(!0):q=u.run():d?d($.bind(null,!0),!0):u.run(),K.pause=u.pause.bind(u),K.resume=u.resume.bind(u),K.stop=K,K}function cn(n,s=1/0,a){if(s<=0||!ps(n)||n.__v_skip||(a=a||new Map,(a.get(n)||0)>=s))return n;if(a.set(n,s),s--,ws(n))cn(n.value,s,a);else if(H(n))for(let e=0;e<n.length;e++)cn(n[e],s,a);else if(Ht(n)||Kn(n))n.forEach(e=>{cn(e,s,a)});else if(np(n)){for(const e in n)cn(n[e],s,a);for(const e of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,e)&&cn(n[e],s,a)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ct(n,s,a,e){try{return e?n(...e):n()}catch(o){Jt(o,s,a)}}function an(n,s,a,e){if(Y(n)){const o=Ct(n,s,a,e);return o&&_l(o)&&o.catch(l=>{Jt(l,s,a)}),o}if(H(n)){const o=[];for(let l=0;l<n.length;l++)o.push(an(n[l],s,a,e));return o}}function Jt(n,s,a,e=!0){const o=s?s.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:d}=s&&s.appContext.config||ds;if(s){let p=s.parent;const r=s.proxy,m=`https://vuejs.org/error-reference/#runtime-${a}`;for(;p;){const u=p.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](n,r,m)===!1)return}p=p.parent}if(l){fn(),Ct(l,null,10,[n,r,m]),mn();return}}eo(n,a,o,e,d)}function eo(n,s,a,e=!0,o=!1){if(o)throw n;console.error(n)}const Ts=[];let Js=-1;const Wn=[];let Cn=null,Bn=0;const Ap=Promise.resolve();let Mt=null;function Ka(n){const s=Mt||Ap;return n?s.then(this?n.bind(this):n):s}function oo(n){let s=Js+1,a=Ts.length;for(;s<a;){const e=s+a>>>1,o=Ts[e],l=bt(o);l<n||l===n&&o.flags&2?s=e+1:a=e}return s}function Ha(n){if(!(n.flags&1)){const s=bt(n),a=Ts[Ts.length-1];!a||!(n.flags&2)&&s>=bt(a)?Ts.push(n):Ts.splice(oo(s),0,n),n.flags|=1,Ep()}}function Ep(){Mt||(Mt=Ap.then(Rp))}function ro(n){H(n)?Wn.push(...n):Cn&&n.id===-1?Cn.splice(Bn+1,0,n):n.flags&1||(Wn.push(n),n.flags|=1),Ep()}function ll(n,s,a=Js+1){for(;a<Ts.length;a++){const e=Ts[a];if(e&&e.flags&2){if(n&&e.id!==n.uid)continue;Ts.splice(a,1),a--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function Tp(n){if(Wn.length){const s=[...new Set(Wn)].sort((a,e)=>bt(a)-bt(e));if(Wn.length=0,Cn){Cn.push(...s);return}for(Cn=s,Bn=0;Bn<Cn.length;Bn++){const a=Cn[Bn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Cn=null,Bn=0}}const bt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rp(n){try{for(Js=0;Js<Ts.length;Js++){const s=Ts[Js];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),Ct(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Js<Ts.length;Js++){const s=Ts[Js];s&&(s.flags&=-2)}Js=-1,Ts.length=0,Tp(),Mt=null,(Ts.length||Wn.length)&&Rp()}}let Ms=null,Op=null;function Dt(n){const s=Ms;return Ms=n,Op=n&&n.type.__scopeId||null,s}function T(n,s=Ms,a){if(!s||n._n)return n;const e=(...o)=>{e._d&&Gt(-1);const l=Dt(s);let d;try{d=n(...o)}finally{Dt(l),e._d&&Gt(1)}return d};return e._n=!0,e._c=!0,e._d=!0,e}function vs(n,s){if(Ms===null)return n;const a=na(Ms),e=n.dirs||(n.dirs=[]);for(let o=0;o<s.length;o++){let[l,d,p,r=ds]=s[o];l&&(Y(l)&&(l={mounted:l,updated:l}),l.deep&&cn(d),e.push({dir:l,instance:a,value:d,oldValue:void 0,arg:p,modifiers:r}))}return n}function On(n,s,a,e){const o=n.dirs,l=s&&s.dirs;for(let d=0;d<o.length;d++){const p=o[d];l&&(p.oldValue=l[d].value);let r=p.dir[e];r&&(fn(),an(r,a,8,[n.el,p,n,s]),mn())}}function Ot(n,s){if(Cs){let a=Cs.provides;const e=Cs.parent&&Cs.parent.provides;e===a&&(a=Cs.provides=Object.create(e)),a[n]=s}}function un(n,s,a=!1){const e=id();if(e||jn){let o=jn?jn._context.provides:e?e.parent==null||e.ce?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return a&&Y(s)?s.call(e&&e.proxy):s}}const co=Symbol.for("v-scx"),io=()=>un(co);function Pt(n,s,a){return Pp(n,s,a)}function Pp(n,s,a=ds){const{immediate:e,deep:o,flush:l,once:d}=a,p=hs({},a),r=s&&e||!s&&l!=="post";let m;if(vt){if(l==="sync"){const y=io();m=y.__watcherHandles||(y.__watcherHandles=[])}else if(!r){const y=()=>{};return y.stop=nn,y.resume=nn,y.pause=nn,y}}const u=Cs;p.call=(y,V,I)=>an(y,u,V,I);let g=!1;l==="post"?p.scheduler=y=>{xs(y,u&&u.suspense)}:l!=="sync"&&(g=!0,p.scheduler=(y,V)=>{V?y():Ha(y)}),p.augmentJob=y=>{s&&(y.flags|=4),g&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const h=po(n,s,p);return vt&&(m?m.push(h):r&&h()),h}function uo(n,s,a){const e=this.proxy,o=fs(n)?n.includes(".")?Ip(e,n):()=>e[n]:n.bind(e,e);let l;Y(s)?l=s:(l=s.handler,a=s);const d=wt(this),p=Pp(o,l.bind(e),a);return d(),p}function Ip(n,s){const a=s.split(".");return()=>{let e=n;for(let o=0;o<a.length&&e;o++)e=e[a[o]];return e}}const fo=Symbol("_vte"),mo=n=>n.__isTeleport,bo=Symbol("_leaveCb");function Wa(n,s){n.shapeFlag&6&&n.component?(n.transition=s,Wa(n.component.subTree,s)):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function xp(n,s){return Y(n)?hs({name:n.name},s,{setup:n}):n}function Np(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function pl(n,s){let a;return!!((a=Object.getOwnPropertyDescriptor(n,s))&&!a.configurable)}const Ft=new WeakMap;function dt(n,s,a,e,o=!1){if(H(n)){n.forEach((I,z)=>dt(I,s&&(H(s)?s[z]:s),a,e,o));return}if(rt(e)&&!o){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&dt(n,s,a,e.component.subTree);return}const l=e.shapeFlag&4?na(e.component):e.el,d=o?null:l,{i:p,r}=n,m=s&&s.r,u=p.refs===ds?p.refs={}:p.refs,g=p.setupState,h=ts(g),y=g===ds?Ql:I=>pl(u,I)?!1:as(h,I),V=(I,z)=>!(z&&pl(u,z));if(m!=null&&m!==r){if(el(s),fs(m))u[m]=null,y(m)&&(g[m]=null);else if(ws(m)){const I=s;V(m,I.k)&&(m.value=null),I.k&&(u[I.k]=null)}}if(Y(r))Ct(r,p,12,[d,u]);else{const I=fs(r),z=ws(r);if(I||z){const K=()=>{if(n.f){const q=I?y(r)?g[r]:u[r]:V()||!n.k?r.value:u[n.k];if(o)H(q)&&Ma(q,l);else if(H(q))q.includes(l)||q.push(l);else if(I)u[r]=[l],y(r)&&(g[r]=u[r]);else{const $=[l];V(r,n.k)&&(r.value=$),n.k&&(u[n.k]=$)}}else I?(u[r]=d,y(r)&&(g[r]=d)):z&&(V(r,n.k)&&(r.value=d),n.k&&(u[n.k]=d))};if(d){const q=()=>{K(),Ft.delete(n)};q.id=-1,Ft.set(n,q),xs(q,a)}else el(n),K()}}}function el(n){const s=Ft.get(n);s&&(s.flags|=8,Ft.delete(n))}Yt().requestIdleCallback;Yt().cancelIdleCallback;const rt=n=>!!n.type.__asyncLoader,qp=n=>n.type.__isKeepAlive;function go(n,s){Mp(n,"a",s)}function vo(n,s){Mp(n,"da",s)}function Mp(n,s,a=Cs){const e=n.__wdc||(n.__wdc=()=>{let o=a;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Qt(s,e,a),a){let o=a.parent;for(;o&&o.parent;)qp(o.parent.vnode)&&ho(e,s,a,o),o=o.parent}}function ho(n,s,a,e){const o=Qt(s,n,e,!0);Dp(()=>{Ma(e[s],o)},a)}function Qt(n,s,a=Cs,e=!1){if(a){const o=a[n]||(a[n]=[]),l=s.__weh||(s.__weh=(...d)=>{fn();const p=wt(a),r=an(s,a,n,d);return p(),mn(),r});return e?o.unshift(l):o.push(l),l}}const gn=n=>(s,a=Cs)=>{(!vt||n==="sp")&&Qt(n,(...e)=>s(...e),a)},yo=gn("bm"),ko=gn("m"),Co=gn("bu"),wo=gn("u"),So=gn("bum"),Dp=gn("um"),Ao=gn("sp"),Eo=gn("rtg"),To=gn("rtc");function Ro(n,s=Cs){Qt("ec",n,s)}const Oo="components";function X(n,s){return Io(Oo,n,!0,s)||n}const Po=Symbol.for("v-ndc");function Io(n,s,a=!0,e=!1){const o=Ms||Cs;if(o){const l=o.type;{const p=gd(l,!1);if(p&&(p===s||p===Rs(s)||p===jt(Rs(s))))return l}const d=ol(o[n]||l[n],s)||ol(o.appContext[n],s);return!d&&e?l:d}}function ol(n,s){return n&&(n[s]||n[Rs(s)]||n[jt(Rs(s))])}function xn(n,s,a,e){let o;const l=a,d=H(n);if(d||fs(n)){const p=d&&Dn(n);let r=!1,m=!1;p&&(r=!Vs(n),m=bn(n),n=Zt(n)),o=new Array(n.length);for(let u=0,g=n.length;u<g;u++)o[u]=s(r?m?Zn(Ls(n[u])):Ls(n[u]):n[u],u,void 0,l)}else if(typeof n=="number"){o=new Array(n);for(let p=0;p<n;p++)o[p]=s(p+1,p,void 0,l)}else if(ps(n))if(n[Symbol.iterator])o=Array.from(n,(p,r)=>s(p,r,void 0,l));else{const p=Object.keys(n);o=new Array(p.length);for(let r=0,m=p.length;r<m;r++){const u=p[r];o[r]=s(n[u],u,r,l)}}else o=[];return o}const wa=n=>n?ne(n)?na(n):wa(n.parent):null,ct=hs(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wa(n.parent),$root:n=>wa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Vp(n),$forceUpdate:n=>n.f||(n.f=()=>{Ha(n.update)}),$nextTick:n=>n.n||(n.n=Ka.bind(n.proxy)),$watch:n=>uo.bind(n)}),da=(n,s)=>n!==ds&&!n.__isScriptSetup&&as(n,s),xo={get({_:n},s){if(s==="__v_skip")return!0;const{ctx:a,setupState:e,data:o,props:l,accessCache:d,type:p,appContext:r}=n;if(s[0]!=="$"){const h=d[s];if(h!==void 0)switch(h){case 1:return e[s];case 2:return o[s];case 4:return a[s];case 3:return l[s]}else{if(da(e,s))return d[s]=1,e[s];if(o!==ds&&as(o,s))return d[s]=2,o[s];if(as(l,s))return d[s]=3,l[s];if(a!==ds&&as(a,s))return d[s]=4,a[s];Sa&&(d[s]=0)}}const m=ct[s];let u,g;if(m)return s==="$attrs"&&ys(n.attrs,"get",""),m(n);if((u=p.__cssModules)&&(u=u[s]))return u;if(a!==ds&&as(a,s))return d[s]=4,a[s];if(g=r.config.globalProperties,as(g,s))return g[s]},set({_:n},s,a){const{data:e,setupState:o,ctx:l}=n;return da(o,s)?(o[s]=a,!0):e!==ds&&as(e,s)?(e[s]=a,!0):as(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(l[s]=a,!0)},has({_:{data:n,setupState:s,accessCache:a,ctx:e,appContext:o,props:l,type:d}},p){let r;return!!(a[p]||n!==ds&&p[0]!=="$"&&as(n,p)||da(s,p)||as(l,p)||as(e,p)||as(ct,p)||as(o.config.globalProperties,p)||(r=d.__cssModules)&&r[p])},defineProperty(n,s,a){return a.get!=null?n._.accessCache[s]=0:as(a,"value")&&this.set(n,s,a.value,null),Reflect.defineProperty(n,s,a)}};function dl(n){return H(n)?n.reduce((s,a)=>(s[a]=null,s),{}):n}let Sa=!0;function No(n){const s=Vp(n),a=n.proxy,e=n.ctx;Sa=!1,s.beforeCreate&&rl(s.beforeCreate,n,"bc");const{data:o,computed:l,methods:d,watch:p,provide:r,inject:m,created:u,beforeMount:g,mounted:h,beforeUpdate:y,updated:V,activated:I,deactivated:z,beforeDestroy:K,beforeUnmount:q,destroyed:$,unmounted:G,render:os,renderTracked:gs,renderTriggered:is,errorCaptured:Ks,serverPrefetch:vn,expose:Hs,inheritAttrs:hn,components:Tn,directives:Ws,filters:_n}=s;if(m&&qo(m,e,null),d)for(const es in d){const ss=d[es];Y(ss)&&(e[es]=ss.bind(a))}if(o){const es=o.call(a,a);ps(es)&&(n.data=Xt(es))}if(Sa=!0,l)for(const es in l){const ss=l[es],ln=Y(ss)?ss.bind(a,a):Y(ss.get)?ss.get.bind(a,a):nn,yn=!Y(ss)&&Y(ss.set)?ss.set.bind(a):nn,js=$s({get:ln,set:yn});Object.defineProperty(e,es,{enumerable:!0,configurable:!0,get:()=>js.value,set:Os=>js.value=Os})}if(p)for(const es in p)Fp(p[es],e,a,es);if(r){const es=Y(r)?r.call(a):r;Reflect.ownKeys(es).forEach(ss=>{Ot(ss,es[ss])})}u&&rl(u,n,"c");function bs(es,ss){H(ss)?ss.forEach(ln=>es(ln.bind(a))):ss&&es(ss.bind(a))}if(bs(yo,g),bs(ko,h),bs(Co,y),bs(wo,V),bs(go,I),bs(vo,z),bs(Ro,Ks),bs(To,gs),bs(Eo,is),bs(So,q),bs(Dp,G),bs(Ao,vn),H(Hs))if(Hs.length){const es=n.exposed||(n.exposed={});Hs.forEach(ss=>{Object.defineProperty(es,ss,{get:()=>a[ss],set:ln=>a[ss]=ln,enumerable:!0})})}else n.exposed||(n.exposed={});os&&n.render===nn&&(n.render=os),hn!=null&&(n.inheritAttrs=hn),Tn&&(n.components=Tn),Ws&&(n.directives=Ws),vn&&Np(n)}function qo(n,s,a=nn){H(n)&&(n=Aa(n));for(const e in n){const o=n[e];let l;ps(o)?"default"in o?l=un(o.from||e,o.default,!0):l=un(o.from||e):l=un(o),ws(l)?Object.defineProperty(s,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:d=>l.value=d}):s[e]=l}}function rl(n,s,a){an(H(n)?n.map(e=>e.bind(s.proxy)):n.bind(s.proxy),s,a)}function Fp(n,s,a,e){let o=e.includes(".")?Ip(a,e):()=>a[e];if(fs(n)){const l=s[n];Y(l)&&Pt(o,l)}else if(Y(n))Pt(o,n.bind(a));else if(ps(n))if(H(n))n.forEach(l=>Fp(l,s,a,e));else{const l=Y(n.handler)?n.handler.bind(a):s[n.handler];Y(l)&&Pt(o,l,n)}}function Vp(n){const s=n.type,{mixins:a,extends:e}=s,{mixins:o,optionsCache:l,config:{optionMergeStrategies:d}}=n.appContext,p=l.get(s);let r;return p?r=p:!o.length&&!a&&!e?r=s:(r={},o.length&&o.forEach(m=>Vt(r,m,d,!0)),Vt(r,s,d)),ps(s)&&l.set(s,r),r}function Vt(n,s,a,e=!1){const{mixins:o,extends:l}=s;l&&Vt(n,l,a,!0),o&&o.forEach(d=>Vt(n,d,a,!0));for(const d in s)if(!(e&&d==="expose")){const p=Mo[d]||a&&a[d];n[d]=p?p(n[d],s[d]):s[d]}return n}const Mo={data:cl,props:il,emits:il,methods:lt,computed:lt,beforeCreate:Ss,created:Ss,beforeMount:Ss,mounted:Ss,beforeUpdate:Ss,updated:Ss,beforeDestroy:Ss,beforeUnmount:Ss,destroyed:Ss,unmounted:Ss,activated:Ss,deactivated:Ss,errorCaptured:Ss,serverPrefetch:Ss,components:lt,directives:lt,watch:Fo,provide:cl,inject:Do};function cl(n,s){return s?n?function(){return hs(Y(n)?n.call(this,this):n,Y(s)?s.call(this,this):s)}:s:n}function Do(n,s){return lt(Aa(n),Aa(s))}function Aa(n){if(H(n)){const s={};for(let a=0;a<n.length;a++)s[n[a]]=n[a];return s}return n}function Ss(n,s){return n?[...new Set([].concat(n,s))]:s}function lt(n,s){return n?hs(Object.create(null),n,s):s}function il(n,s){return n?H(n)&&H(s)?[...new Set([...n,...s])]:hs(Object.create(null),dl(n),dl(s??{})):s}function Fo(n,s){if(!n)return s;if(!s)return n;const a=hs(Object.create(null),n);for(const e in s)a[e]=Ss(n[e],s[e]);return a}function Gp(){return{app:null,config:{isNativeTag:Ql,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vo=0;function Go(n,s){return function(e,o=null){Y(e)||(e=hs({},e)),o!=null&&!ps(o)&&(o=null);const l=Gp(),d=new WeakSet,p=[];let r=!1;const m=l.app={_uid:Vo++,_component:e,_props:o,_container:null,_context:l,_instance:null,version:hd,get config(){return l.config},set config(u){},use(u,...g){return d.has(u)||(u&&Y(u.install)?(d.add(u),u.install(m,...g)):Y(u)&&(d.add(u),u(m,...g))),m},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),m},component(u,g){return g?(l.components[u]=g,m):l.components[u]},directive(u,g){return g?(l.directives[u]=g,m):l.directives[u]},mount(u,g,h){if(!r){const y=m._ceVNode||w(e,o);return y.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),n(y,u,h),r=!0,m._container=u,u.__vue_app__=m,na(y.component)}},onUnmount(u){p.push(u)},unmount(){r&&(an(p,m._instance,16),n(null,m._container),delete m._container.__vue_app__)},provide(u,g){return l.provides[u]=g,m},runWithContext(u){const g=jn;jn=m;try{return u()}finally{jn=g}}};return m}}let jn=null;const $o=(n,s)=>s==="modelValue"||s==="model-value"?n.modelModifiers:n[`${s}Modifiers`]||n[`${Rs(s)}Modifiers`]||n[`${En(s)}Modifiers`];function Bo(n,s,...a){if(n.isUnmounted)return;const e=n.vnode.props||ds;let o=a;const l=s.startsWith("update:"),d=l&&$o(e,s.slice(7));d&&(d.trim&&(o=a.map(u=>fs(u)?u.trim():u)),d.number&&(o=a.map(zt)));let p,r=e[p=aa(s)]||e[p=aa(Rs(s))];!r&&l&&(r=e[p=aa(En(s))]),r&&an(r,n,6,o);const m=e[p+"Once"];if(m){if(!n.emitted)n.emitted={};else if(n.emitted[p])return;n.emitted[p]=!0,an(m,n,6,o)}}const Lo=new WeakMap;function $p(n,s,a=!1){const e=a?Lo:s.emitsCache,o=e.get(n);if(o!==void 0)return o;const l=n.emits;let d={},p=!1;if(!Y(n)){const r=m=>{const u=$p(m,s,!0);u&&(p=!0,hs(d,u))};!a&&s.mixins.length&&s.mixins.forEach(r),n.extends&&r(n.extends),n.mixins&&n.mixins.forEach(r)}return!l&&!p?(ps(n)&&e.set(n,null),null):(H(l)?l.forEach(r=>d[r]=null):hs(d,l),ps(n)&&e.set(n,d),d)}function _t(n,s){return!n||!Kt(s)?!1:(s=s.slice(2).replace(/Once$/,""),as(n,s[0].toLowerCase()+s.slice(1))||as(n,En(s))||as(n,s))}function ul(n){const{type:s,vnode:a,proxy:e,withProxy:o,propsOptions:[l],slots:d,attrs:p,emit:r,render:m,renderCache:u,props:g,data:h,setupState:y,ctx:V,inheritAttrs:I}=n,z=Dt(n);let K,q;try{if(a.shapeFlag&4){const G=o||e,os=G;K=_s(m.call(os,G,u,g,y,h,V)),q=p}else{const G=s;K=_s(G.length>1?G(g,{attrs:p,slots:d,emit:r}):G(g,null)),q=s.props?p:Uo(p)}}catch(G){it.length=0,Jt(G,n,1),K=w(An)}let $=K;if(q&&I!==!1){const G=Object.keys(q),{shapeFlag:os}=$;G.length&&os&7&&(l&&G.some(qa)&&(q=Ko(q,l)),$=Xn($,q,!1,!0))}return a.dirs&&($=Xn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(a.dirs):a.dirs),a.transition&&Wa($,a.transition),K=$,Dt(z),K}const Uo=n=>{let s;for(const a in n)(a==="class"||a==="style"||Kt(a))&&((s||(s={}))[a]=n[a]);return s},Ko=(n,s)=>{const a={};for(const e in n)(!qa(e)||!(e.slice(9)in s))&&(a[e]=n[e]);return a};function Ho(n,s,a){const{props:e,children:o,component:l}=n,{props:d,children:p,patchFlag:r}=s,m=l.emitsOptions;if(s.dirs||s.transition)return!0;if(a&&r>=0){if(r&1024)return!0;if(r&16)return e?fl(e,d,m):!!d;if(r&8){const u=s.dynamicProps;for(let g=0;g<u.length;g++){const h=u[g];if(Bp(d,e,h)&&!_t(m,h))return!0}}}else return(o||p)&&(!p||!p.$stable)?!0:e===d?!1:e?d?fl(e,d,m):!0:!!d;return!1}function fl(n,s,a){const e=Object.keys(s);if(e.length!==Object.keys(n).length)return!0;for(let o=0;o<e.length;o++){const l=e[o];if(Bp(s,n,l)&&!_t(a,l))return!0}return!1}function Bp(n,s,a){const e=n[a],o=s[a];return a==="style"&&ps(e)&&ps(o)?!kt(e,o):e!==o}function Wo({vnode:n,parent:s},a){for(;s;){const e=s.subTree;if(e.suspense&&e.suspense.activeBranch===n&&(e.el=n.el),e===n)(n=s.vnode).el=a,s=s.parent;else break}}const Lp={},Up=()=>Object.create(Lp),Kp=n=>Object.getPrototypeOf(n)===Lp;function jo(n,s,a,e=!1){const o={},l=Up();n.propsDefaults=Object.create(null),Hp(n,s,o,l);for(const d in n.propsOptions[0])d in o||(o[d]=void 0);a?n.props=e?o:kp(o):n.type.props?n.props=o:n.props=l,n.attrs=l}function zo(n,s,a,e){const{props:o,attrs:l,vnode:{patchFlag:d}}=n,p=ts(o),[r]=n.propsOptions;let m=!1;if((e||d>0)&&!(d&16)){if(d&8){const u=n.vnode.dynamicProps;for(let g=0;g<u.length;g++){let h=u[g];if(_t(n.emitsOptions,h))continue;const y=s[h];if(r)if(as(l,h))y!==l[h]&&(l[h]=y,m=!0);else{const V=Rs(h);o[V]=Ea(r,p,V,y,n,!1)}else y!==l[h]&&(l[h]=y,m=!0)}}}else{Hp(n,s,o,l)&&(m=!0);let u;for(const g in p)(!s||!as(s,g)&&((u=En(g))===g||!as(s,u)))&&(r?a&&(a[g]!==void 0||a[u]!==void 0)&&(o[g]=Ea(r,p,g,void 0,n,!0)):delete o[g]);if(l!==p)for(const g in l)(!s||!as(s,g))&&(delete l[g],m=!0)}m&&rn(n.attrs,"set","")}function Hp(n,s,a,e){const[o,l]=n.propsOptions;let d=!1,p;if(s)for(let r in s){if(pt(r))continue;const m=s[r];let u;o&&as(o,u=Rs(r))?!l||!l.includes(u)?a[u]=m:(p||(p={}))[u]=m:_t(n.emitsOptions,r)||(!(r in e)||m!==e[r])&&(e[r]=m,d=!0)}if(l){const r=ts(a),m=p||ds;for(let u=0;u<l.length;u++){const g=l[u];a[g]=Ea(o,r,g,m[g],n,!as(m,g))}}return d}function Ea(n,s,a,e,o,l){const d=n[a];if(d!=null){const p=as(d,"default");if(p&&e===void 0){const r=d.default;if(d.type!==Function&&!d.skipFactory&&Y(r)){const{propsDefaults:m}=o;if(a in m)e=m[a];else{const u=wt(o);e=m[a]=r.call(null,s),u()}}else e=r;o.ce&&o.ce._setProp(a,e)}d[0]&&(l&&!p?e=!1:d[1]&&(e===""||e===En(a))&&(e=!0))}return e}const Yo=new WeakMap;function Wp(n,s,a=!1){const e=a?Yo:s.propsCache,o=e.get(n);if(o)return o;const l=n.props,d={},p=[];let r=!1;if(!Y(n)){const u=g=>{r=!0;const[h,y]=Wp(g,s,!0);hs(d,h),y&&p.push(...y)};!a&&s.mixins.length&&s.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!l&&!r)return ps(n)&&e.set(n,Un),Un;if(H(l))for(let u=0;u<l.length;u++){const g=Rs(l[u]);ml(g)&&(d[g]=ds)}else if(l)for(const u in l){const g=Rs(u);if(ml(g)){const h=l[u],y=d[g]=H(h)||Y(h)?{type:h}:hs({},h),V=y.type;let I=!1,z=!0;if(H(V))for(let K=0;K<V.length;++K){const q=V[K],$=Y(q)&&q.name;if($==="Boolean"){I=!0;break}else $==="String"&&(z=!1)}else I=Y(V)&&V.name==="Boolean";y[0]=I,y[1]=z,(I||as(y,"default"))&&p.push(g)}}const m=[d,p];return ps(n)&&e.set(n,m),m}function ml(n){return n[0]!=="$"&&!pt(n)}const ja=n=>n==="_"||n==="_ctx"||n==="$stable",za=n=>H(n)?n.map(_s):[_s(n)],Zo=(n,s,a)=>{if(s._n)return s;const e=T((...o)=>za(s(...o)),a);return e._c=!1,e},jp=(n,s,a)=>{const e=n._ctx;for(const o in n){if(ja(o))continue;const l=n[o];if(Y(l))s[o]=Zo(o,l,e);else if(l!=null){const d=za(l);s[o]=()=>d}}},zp=(n,s)=>{const a=za(s);n.slots.default=()=>a},Yp=(n,s,a)=>{for(const e in s)(a||!ja(e))&&(n[e]=s[e])},Xo=(n,s,a)=>{const e=n.slots=Up();if(n.vnode.shapeFlag&32){const o=s._;o?(Yp(e,s,a),a&&tp(e,"_",o,!0)):jp(s,e)}else s&&zp(n,s)},Jo=(n,s,a)=>{const{vnode:e,slots:o}=n;let l=!0,d=ds;if(e.shapeFlag&32){const p=s._;p?a&&p===1?l=!1:Yp(o,s,a):(l=!s.$stable,jp(s,o)),d=s}else s&&(zp(n,s),d={default:1});if(l)for(const p in o)!ja(p)&&d[p]==null&&delete o[p]},xs=td;function Qo(n){return _o(n)}function _o(n,s){const a=Yt();a.__VUE__=!0;const{insert:e,remove:o,patchProp:l,createElement:d,createText:p,createComment:r,setText:m,setElementText:u,parentNode:g,nextSibling:h,setScopeId:y=nn,insertStaticContent:V}=n,I=(c,b,v,k=null,A=null,C=null,P=void 0,O=null,R=!!b.dynamicChildren)=>{if(c===b)return;c&&!tt(c,b)&&(k=S(c),Os(c,A,C,!0),c=null),b.patchFlag===-2&&(R=!1,b.dynamicChildren=null);const{type:E,ref:U,shapeFlag:N}=b;switch(E){case sa:z(c,b,v,k);break;case An:K(c,b,v,k);break;case It:c==null&&q(b,v,k,P);break;case ks:Tn(c,b,v,k,A,C,P,O,R);break;default:N&1?os(c,b,v,k,A,C,P,O,R):N&6?Ws(c,b,v,k,A,C,P,O,R):(N&64||N&128)&&E.process(c,b,v,k,A,C,P,O,R,B)}U!=null&&A?dt(U,c&&c.ref,C,b||c,!b):U==null&&c&&c.ref!=null&&dt(c.ref,null,C,c,!0)},z=(c,b,v,k)=>{if(c==null)e(b.el=p(b.children),v,k);else{const A=b.el=c.el;b.children!==c.children&&m(A,b.children)}},K=(c,b,v,k)=>{c==null?e(b.el=r(b.children||""),v,k):b.el=c.el},q=(c,b,v,k)=>{[c.el,c.anchor]=V(c.children,b,v,k,c.el,c.anchor)},$=({el:c,anchor:b},v,k)=>{let A;for(;c&&c!==b;)A=h(c),e(c,v,k),c=A;e(b,v,k)},G=({el:c,anchor:b})=>{let v;for(;c&&c!==b;)v=h(c),o(c),c=v;o(b)},os=(c,b,v,k,A,C,P,O,R)=>{if(b.type==="svg"?P="svg":b.type==="math"&&(P="mathml"),c==null)gs(b,v,k,A,C,P,O,R);else{const E=c.el&&c.el._isVueCE?c.el:null;try{E&&E._beginPatch(),vn(c,b,A,C,P,O,R)}finally{E&&E._endPatch()}}},gs=(c,b,v,k,A,C,P,O)=>{let R,E;const{props:U,shapeFlag:N,transition:L,dirs:W}=c;if(R=c.el=d(c.type,C,U&&U.is,U),N&8?u(R,c.children):N&16&&Ks(c.children,R,null,k,A,ra(c,C),P,O),W&&On(c,null,k,"created"),is(R,c,c.scopeId,P,k),U){for(const rs in U)rs!=="value"&&!pt(rs)&&l(R,rs,null,U[rs],C,k);"value"in U&&l(R,"value",null,U.value,C),(E=U.onVnodeBeforeMount)&&Xs(E,k,c)}W&&On(c,null,k,"beforeMount");const _=sd(A,L);_&&L.beforeEnter(R),e(R,b,v),((E=U&&U.onVnodeMounted)||_||W)&&xs(()=>{E&&Xs(E,k,c),_&&L.enter(R),W&&On(c,null,k,"mounted")},A)},is=(c,b,v,k,A)=>{if(v&&y(c,v),k)for(let C=0;C<k.length;C++)y(c,k[C]);if(A){let C=A.subTree;if(b===C||Qp(C.type)&&(C.ssContent===b||C.ssFallback===b)){const P=A.vnode;is(c,P,P.scopeId,P.slotScopeIds,A.parent)}}},Ks=(c,b,v,k,A,C,P,O,R=0)=>{for(let E=R;E<c.length;E++){const U=c[E]=O?dn(c[E]):_s(c[E]);I(null,U,b,v,k,A,C,P,O)}},vn=(c,b,v,k,A,C,P)=>{const O=b.el=c.el;let{patchFlag:R,dynamicChildren:E,dirs:U}=b;R|=c.patchFlag&16;const N=c.props||ds,L=b.props||ds;let W;if(v&&Pn(v,!1),(W=L.onVnodeBeforeUpdate)&&Xs(W,v,b,c),U&&On(b,c,v,"beforeUpdate"),v&&Pn(v,!0),(N.innerHTML&&L.innerHTML==null||N.textContent&&L.textContent==null)&&u(O,""),E?Hs(c.dynamicChildren,E,O,v,k,ra(b,A),C):P||ss(c,b,O,null,v,k,ra(b,A),C,!1),R>0){if(R&16)hn(O,N,L,v,A);else if(R&2&&N.class!==L.class&&l(O,"class",null,L.class,A),R&4&&l(O,"style",N.style,L.style,A),R&8){const _=b.dynamicProps;for(let rs=0;rs<_.length;rs++){const ls=_[rs],Ps=N[ls],Is=L[ls];(Is!==Ps||ls==="value")&&l(O,ls,Ps,Is,A,v)}}R&1&&c.children!==b.children&&u(O,b.children)}else!P&&E==null&&hn(O,N,L,v,A);((W=L.onVnodeUpdated)||U)&&xs(()=>{W&&Xs(W,v,b,c),U&&On(b,c,v,"updated")},k)},Hs=(c,b,v,k,A,C,P)=>{for(let O=0;O<b.length;O++){const R=c[O],E=b[O],U=R.el&&(R.type===ks||!tt(R,E)||R.shapeFlag&198)?g(R.el):v;I(R,E,U,null,k,A,C,P,!0)}},hn=(c,b,v,k,A)=>{if(b!==v){if(b!==ds)for(const C in b)!pt(C)&&!(C in v)&&l(c,C,b[C],null,A,k);for(const C in v){if(pt(C))continue;const P=v[C],O=b[C];P!==O&&C!=="value"&&l(c,C,O,P,A,k)}"value"in v&&l(c,"value",b.value,v.value,A)}},Tn=(c,b,v,k,A,C,P,O,R)=>{const E=b.el=c?c.el:p(""),U=b.anchor=c?c.anchor:p("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:W}=b;W&&(O=O?O.concat(W):W),c==null?(e(E,v,k),e(U,v,k),Ks(b.children||[],v,U,A,C,P,O,R)):N>0&&N&64&&L&&c.dynamicChildren&&c.dynamicChildren.length===L.length?(Hs(c.dynamicChildren,L,v,A,C,P,O),(b.key!=null||A&&b===A.subTree)&&Zp(c,b,!0)):ss(c,b,v,U,A,C,P,O,R)},Ws=(c,b,v,k,A,C,P,O,R)=>{b.slotScopeIds=O,c==null?b.shapeFlag&512?A.ctx.activate(b,v,k,P,R):_n(b,v,k,A,C,P,R):Fn(c,b,R)},_n=(c,b,v,k,A,C,P)=>{const O=c.component=cd(c,k,A);if(qp(c)&&(O.ctx.renderer=B),ud(O,!1,P),O.asyncDep){if(A&&A.registerDep(O,bs,P),!c.el){const R=O.subTree=w(An);K(null,R,b,v),c.placeholder=R.el}}else bs(O,c,b,v,A,C,P)},Fn=(c,b,v)=>{const k=b.component=c.component;if(Ho(c,b,v))if(k.asyncDep&&!k.asyncResolved){es(k,b,v);return}else k.next=b,k.update();else b.el=c.el,k.vnode=b},bs=(c,b,v,k,A,C,P)=>{const O=()=>{if(c.isMounted){let{next:N,bu:L,u:W,parent:_,vnode:rs}=c;{const Ys=Xp(c);if(Ys){N&&(N.el=rs.el,es(c,N,P)),Ys.asyncDep.then(()=>{xs(()=>{c.isUnmounted||E()},A)});return}}let ls=N,Ps;Pn(c,!1),N?(N.el=rs.el,es(c,N,P)):N=rs,L&&Rt(L),(Ps=N.props&&N.props.onVnodeBeforeUpdate)&&Xs(Ps,_,N,rs),Pn(c,!0);const Is=ul(c),zs=c.subTree;c.subTree=Is,I(zs,Is,g(zs.el),S(zs),c,A,C),N.el=Is.el,ls===null&&Wo(c,Is.el),W&&xs(W,A),(Ps=N.props&&N.props.onVnodeUpdated)&&xs(()=>Xs(Ps,_,N,rs),A)}else{let N;const{el:L,props:W}=b,{bm:_,m:rs,parent:ls,root:Ps,type:Is}=c,zs=rt(b);Pn(c,!1),_&&Rt(_),!zs&&(N=W&&W.onVnodeBeforeMount)&&Xs(N,ls,b),Pn(c,!0);{Ps.ce&&Ps.ce._hasShadowRoot()&&Ps.ce._injectChildStyle(Is,c.parent?c.parent.type:void 0);const Ys=c.subTree=ul(c);I(null,Ys,v,k,c,A,C),b.el=Ys.el}if(rs&&xs(rs,A),!zs&&(N=W&&W.onVnodeMounted)){const Ys=b;xs(()=>Xs(N,ls,Ys),A)}(b.shapeFlag&256||ls&&rt(ls.vnode)&&ls.vnode.shapeFlag&256)&&c.a&&xs(c.a,A),c.isMounted=!0,b=v=k=null}};c.scope.on();const R=c.effect=new ep(O);c.scope.off();const E=c.update=R.run.bind(R),U=c.job=R.runIfDirty.bind(R);U.i=c,U.id=c.uid,R.scheduler=()=>Ha(U),Pn(c,!0),E()},es=(c,b,v)=>{b.component=c;const k=c.vnode.props;c.vnode=b,c.next=null,zo(c,b.props,k,v),Jo(c,b.children,v),fn(),ll(c),mn()},ss=(c,b,v,k,A,C,P,O,R=!1)=>{const E=c&&c.children,U=c?c.shapeFlag:0,N=b.children,{patchFlag:L,shapeFlag:W}=b;if(L>0){if(L&128){yn(E,N,v,k,A,C,P,O,R);return}else if(L&256){ln(E,N,v,k,A,C,P,O,R);return}}W&8?(U&16&&Fs(E,A,C),N!==E&&u(v,N)):U&16?W&16?yn(E,N,v,k,A,C,P,O,R):Fs(E,A,C,!0):(U&8&&u(v,""),W&16&&Ks(N,v,k,A,C,P,O,R))},ln=(c,b,v,k,A,C,P,O,R)=>{c=c||Un,b=b||Un;const E=c.length,U=b.length,N=Math.min(E,U);let L;for(L=0;L<N;L++){const W=b[L]=R?dn(b[L]):_s(b[L]);I(c[L],W,v,null,A,C,P,O,R)}E>U?Fs(c,A,C,!0,!1,N):Ks(b,v,k,A,C,P,O,R,N)},yn=(c,b,v,k,A,C,P,O,R)=>{let E=0;const U=b.length;let N=c.length-1,L=U-1;for(;E<=N&&E<=L;){const W=c[E],_=b[E]=R?dn(b[E]):_s(b[E]);if(tt(W,_))I(W,_,v,null,A,C,P,O,R);else break;E++}for(;E<=N&&E<=L;){const W=c[N],_=b[L]=R?dn(b[L]):_s(b[L]);if(tt(W,_))I(W,_,v,null,A,C,P,O,R);else break;N--,L--}if(E>N){if(E<=L){const W=L+1,_=W<U?b[W].el:k;for(;E<=L;)I(null,b[E]=R?dn(b[E]):_s(b[E]),v,_,A,C,P,O,R),E++}}else if(E>L)for(;E<=N;)Os(c[E],A,C,!0),E++;else{const W=E,_=E,rs=new Map;for(E=_;E<=L;E++){const qs=b[E]=R?dn(b[E]):_s(b[E]);qs.key!=null&&rs.set(qs.key,E)}let ls,Ps=0;const Is=L-_+1;let zs=!1,Ys=0;const st=new Array(Is);for(E=0;E<Is;E++)st[E]=0;for(E=W;E<=N;E++){const qs=c[E];if(Ps>=Is){Os(qs,A,C,!0);continue}let Zs;if(qs.key!=null)Zs=rs.get(qs.key);else for(ls=_;ls<=L;ls++)if(st[ls-_]===0&&tt(qs,b[ls])){Zs=ls;break}Zs===void 0?Os(qs,A,C,!0):(st[Zs-_]=E+1,Zs>=Ys?Ys=Zs:zs=!0,I(qs,b[Zs],v,null,A,C,P,O,R),Ps++)}const Ja=zs?nd(st):Un;for(ls=Ja.length-1,E=Is-1;E>=0;E--){const qs=_+E,Zs=b[qs],Qa=b[qs+1],_a=qs+1<U?Qa.el||Jp(Qa):k;st[E]===0?I(null,Zs,v,_a,A,C,P,O,R):zs&&(ls<0||E!==Ja[ls]?js(Zs,v,_a,2):ls--)}}},js=(c,b,v,k,A=null)=>{const{el:C,type:P,transition:O,children:R,shapeFlag:E}=c;if(E&6){js(c.component.subTree,b,v,k);return}if(E&128){c.suspense.move(b,v,k);return}if(E&64){P.move(c,b,v,B);return}if(P===ks){e(C,b,v);for(let N=0;N<R.length;N++)js(R[N],b,v,k);e(c.anchor,b,v);return}if(P===It){$(c,b,v);return}if(k!==2&&E&1&&O)if(k===0)O.beforeEnter(C),e(C,b,v),xs(()=>O.enter(C),A);else{const{leave:N,delayLeave:L,afterLeave:W}=O,_=()=>{c.ctx.isUnmounted?o(C):e(C,b,v)},rs=()=>{C._isLeaving&&C[bo](!0),N(C,()=>{_(),W&&W()})};L?L(C,_,rs):rs()}else e(C,b,v)},Os=(c,b,v,k=!1,A=!1)=>{const{type:C,props:P,ref:O,children:R,dynamicChildren:E,shapeFlag:U,patchFlag:N,dirs:L,cacheIndex:W}=c;if(N===-2&&(A=!1),O!=null&&(fn(),dt(O,null,v,c,!0),mn()),W!=null&&(b.renderCache[W]=void 0),U&256){b.ctx.deactivate(c);return}const _=U&1&&L,rs=!rt(c);let ls;if(rs&&(ls=P&&P.onVnodeBeforeUnmount)&&Xs(ls,b,c),U&6)Rn(c.component,v,k);else{if(U&128){c.suspense.unmount(v,k);return}_&&On(c,null,b,"beforeUnmount"),U&64?c.type.remove(c,b,v,B,k):E&&!E.hasOnce&&(C!==ks||N>0&&N&64)?Fs(E,b,v,!1,!0):(C===ks&&N&384||!A&&U&16)&&Fs(R,b,v),k&&Vn(c)}(rs&&(ls=P&&P.onVnodeUnmounted)||_)&&xs(()=>{ls&&Xs(ls,b,c),_&&On(c,null,b,"unmounted")},v)},Vn=c=>{const{type:b,el:v,anchor:k,transition:A}=c;if(b===ks){Gn(v,k);return}if(b===It){G(c);return}const C=()=>{o(v),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(c.shapeFlag&1&&A&&!A.persisted){const{leave:P,delayLeave:O}=A,R=()=>P(v,C);O?O(c.el,C,R):R()}else C()},Gn=(c,b)=>{let v;for(;c!==b;)v=h(c),o(c),c=v;o(b)},Rn=(c,b,v)=>{const{bum:k,scope:A,job:C,subTree:P,um:O,m:R,a:E}=c;bl(R),bl(E),k&&Rt(k),A.stop(),C&&(C.flags|=8,Os(P,c,b,v)),O&&xs(O,b),xs(()=>{c.isUnmounted=!0},b)},Fs=(c,b,v,k=!1,A=!1,C=0)=>{for(let P=C;P<c.length;P++)Os(c[P],b,v,k,A)},S=c=>{if(c.shapeFlag&6)return S(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const b=h(c.anchor||c.el),v=b&&b[fo];return v?h(v):b};let M=!1;const x=(c,b,v)=>{let k;c==null?b._vnode&&(Os(b._vnode,null,null,!0),k=b._vnode.component):I(b._vnode||null,c,b,null,null,null,v),b._vnode=c,M||(M=!0,ll(k),Tp(),M=!1)},B={p:I,um:Os,m:js,r:Vn,mt:_n,mc:Ks,pc:ss,pbc:Hs,n:S,o:n};return{render:x,hydrate:void 0,createApp:Go(x)}}function ra({type:n,props:s},a){return a==="svg"&&n==="foreignObject"||a==="mathml"&&n==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:a}function Pn({effect:n,job:s},a){a?(n.flags|=32,s.flags|=4):(n.flags&=-33,s.flags&=-5)}function sd(n,s){return(!n||n&&!n.pendingBranch)&&s&&!s.persisted}function Zp(n,s,a=!1){const e=n.children,o=s.children;if(H(e)&&H(o))for(let l=0;l<e.length;l++){const d=e[l];let p=o[l];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=o[l]=dn(o[l]),p.el=d.el),!a&&p.patchFlag!==-2&&Zp(d,p)),p.type===sa&&(p.patchFlag===-1&&(p=o[l]=dn(p)),p.el=d.el),p.type===An&&!p.el&&(p.el=d.el)}}function nd(n){const s=n.slice(),a=[0];let e,o,l,d,p;const r=n.length;for(e=0;e<r;e++){const m=n[e];if(m!==0){if(o=a[a.length-1],n[o]<m){s[e]=o,a.push(e);continue}for(l=0,d=a.length-1;l<d;)p=l+d>>1,n[a[p]]<m?l=p+1:d=p;m<n[a[l]]&&(l>0&&(s[e]=a[l-1]),a[l]=e)}}for(l=a.length,d=a[l-1];l-- >0;)a[l]=d,d=s[d];return a}function Xp(n){const s=n.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:Xp(s)}function bl(n){if(n)for(let s=0;s<n.length;s++)n[s].flags|=8}function Jp(n){if(n.placeholder)return n.placeholder;const s=n.component;return s?Jp(s.subTree):null}const Qp=n=>n.__isSuspense;function td(n,s){s&&s.pendingBranch?H(n)?s.effects.push(...n):s.effects.push(n):ro(n)}const ks=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),It=Symbol.for("v-stc"),it=[];let Ds=null;function D(n=!1){it.push(Ds=n?null:[])}function ad(){it.pop(),Ds=it[it.length-1]||null}let gt=1;function Gt(n,s=!1){gt+=n,n<0&&Ds&&s&&(Ds.hasOnce=!0)}function _p(n){return n.dynamicChildren=gt>0?Ds||Un:null,ad(),gt>0&&Ds&&Ds.push(n),n}function F(n,s,a,e,o,l){return _p(t(n,s,a,e,o,l,!0))}function ld(n,s,a,e,o){return _p(w(n,s,a,e,o,!0))}function $t(n){return n?n.__v_isVNode===!0:!1}function tt(n,s){return n.type===s.type&&n.key===s.key}const se=({key:n})=>n??null,xt=({ref:n,ref_key:s,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?fs(n)||ws(n)||Y(n)?{i:Ms,r:n,k:s,f:!!a}:n:null);function t(n,s=null,a=null,e=0,o=null,l=n===ks?0:1,d=!1,p=!1){const r={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&se(s),ref:s&&xt(s),scopeId:Op,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:e,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ms};return p?(Ya(r,a),l&128&&n.normalize(r)):a&&(r.shapeFlag|=fs(a)?8:16),gt>0&&!d&&Ds&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&Ds.push(r),r}const w=pd;function pd(n,s=null,a=null,e=0,o=null,l=!1){if((!n||n===Po)&&(n=An),$t(n)){const p=Xn(n,s,!0);return a&&Ya(p,a),gt>0&&!l&&Ds&&(p.shapeFlag&6?Ds[Ds.indexOf(n)]=p:Ds.push(p)),p.patchFlag=-2,p}if(vd(n)&&(n=n.__vccOpts),s){s=ed(s);let{class:p,style:r}=s;p&&!fs(p)&&(s.class=j(p)),ps(r)&&(Ua(r)&&!H(r)&&(r=hs({},r)),s.style=Yn(r))}const d=fs(n)?1:Qp(n)?128:mo(n)?64:ps(n)?4:Y(n)?2:0;return t(n,s,a,e,o,d,l,!0)}function ed(n){return n?Ua(n)||Kp(n)?hs({},n):n:null}function Xn(n,s,a=!1,e=!1){const{props:o,ref:l,patchFlag:d,children:p,transition:r}=n,m=s?od(o||{},s):o,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:m,key:m&&se(m),ref:s&&s.ref?a&&l?H(l)?l.concat(xt(s)):[l,xt(s)]:xt(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:p,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==ks?d===-1?16:d|16:d,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:r,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xn(n.ssContent),ssFallback:n.ssFallback&&Xn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return r&&e&&Wa(u,r.clone(u)),u}function f(n=" ",s=0){return w(sa,null,n,s)}function i(n,s){const a=w(It,null,n);return a.staticCount=s,a}function Sn(n="",s=!1){return s?(D(),ld(An,null,n)):w(An,null,n)}function _s(n){return n==null||typeof n=="boolean"?w(An):H(n)?w(ks,null,n.slice()):$t(n)?dn(n):w(sa,null,String(n))}function dn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xn(n)}function Ya(n,s){let a=0;const{shapeFlag:e}=n;if(s==null)s=null;else if(H(s))a=16;else if(typeof s=="object")if(e&65){const o=s.default;o&&(o._c&&(o._d=!1),Ya(n,o()),o._c&&(o._d=!0));return}else{a=32;const o=s._;!o&&!Kp(s)?s._ctx=Ms:o===3&&Ms&&(Ms.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else Y(s)?(s={default:s,_ctx:Ms},a=32):(s=String(s),e&64?(a=16,s=[f(s)]):a=8);n.children=s,n.shapeFlag|=a}function od(...n){const s={};for(let a=0;a<n.length;a++){const e=n[a];for(const o in e)if(o==="class")s.class!==e.class&&(s.class=j([s.class,e.class]));else if(o==="style")s.style=Yn([s.style,e.style]);else if(Kt(o)){const l=s[o],d=e[o];d&&l!==d&&!(H(l)&&l.includes(d))&&(s[o]=l?[].concat(l,d):d)}else o!==""&&(s[o]=e[o])}return s}function Xs(n,s,a,e=null){an(n,s,7,[a,e])}const dd=Gp();let rd=0;function cd(n,s,a){const e=n.type,o=(s?s.appContext:n.appContext)||dd,l={uid:rd++,vnode:n,type:e,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ne(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),ids:s?s.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(e,o),emitsOptions:$p(e,o),emit:null,emitted:null,propsDefaults:ds,inheritAttrs:e.inheritAttrs,ctx:ds,data:ds,props:ds,attrs:ds,slots:ds,refs:ds,setupState:ds,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=s?s.root:l,l.emit=Bo.bind(null,l),n.ce&&n.ce(l),l}let Cs=null;const id=()=>Cs||Ms;let Bt,Ta;{const n=Yt(),s=(a,e)=>{let o;return(o=n[a])||(o=n[a]=[]),o.push(e),l=>{o.length>1?o.forEach(d=>d(l)):o[0](l)}};Bt=s("__VUE_INSTANCE_SETTERS__",a=>Cs=a),Ta=s("__VUE_SSR_SETTERS__",a=>vt=a)}const wt=n=>{const s=Cs;return Bt(n),n.scope.on(),()=>{n.scope.off(),Bt(s)}},gl=()=>{Cs&&Cs.scope.off(),Bt(null)};function ne(n){return n.vnode.shapeFlag&4}let vt=!1;function ud(n,s=!1,a=!1){s&&Ta(s);const{props:e,children:o}=n.vnode,l=ne(n);jo(n,e,l,s),Xo(n,o,a||s);const d=l?fd(n,s):void 0;return s&&Ta(!1),d}function fd(n,s){const a=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,xo);const{setup:e}=a;if(e){fn();const o=n.setupContext=e.length>1?bd(n):null,l=wt(n),d=Ct(e,n,0,[n.props,o]),p=_l(d);if(mn(),l(),(p||n.sp)&&!rt(n)&&Np(n),p){if(d.then(gl,gl),s)return d.then(r=>{vl(n,r)}).catch(r=>{Jt(r,n,0)});n.asyncDep=d}else vl(n,d)}else te(n)}function vl(n,s,a){Y(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:ps(s)&&(n.setupState=Sp(s)),te(n)}function te(n,s,a){const e=n.type;n.render||(n.render=e.render||nn);{const o=wt(n);fn();try{No(n)}finally{mn(),o()}}}const md={get(n,s){return ys(n,"get",""),n[s]}};function bd(n){const s=a=>{n.exposed=a||{}};return{attrs:new Proxy(n.attrs,md),slots:n.slots,emit:n.emit,expose:s}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sp(Qe(n.exposed)),{get(s,a){if(a in s)return s[a];if(a in ct)return ct[a](n)},has(s,a){return a in s||a in ct}})):n.proxy}function gd(n,s=!0){return Y(n)?n.displayName||n.name:n.name||s&&n.__name}function vd(n){return Y(n)&&"__vccOpts"in n}const $s=(n,s)=>ao(n,s,vt);function ae(n,s,a){try{Gt(-1);const e=arguments.length;return e===2?ps(s)&&!H(s)?$t(s)?w(n,null,[s]):w(n,s):w(n,null,s):(e>3?a=Array.prototype.slice.call(arguments,2):e===3&&$t(a)&&(a=[a]),w(n,s,a))}finally{Gt(1)}}const hd="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{Ra=hl.createPolicy("vue",{createHTML:n=>n})}catch{}const le=Ra?n=>Ra.createHTML(n):n=>n,yd="http://www.w3.org/2000/svg",kd="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,yl=on&&on.createElement("template"),Cd={insert:(n,s,a)=>{s.insertBefore(n,a||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,a,e)=>{const o=s==="svg"?on.createElementNS(yd,n):s==="mathml"?on.createElementNS(kd,n):a?on.createElement(n,{is:a}):on.createElement(n);return n==="select"&&e&&e.multiple!=null&&o.setAttribute("multiple",e.multiple),o},createText:n=>on.createTextNode(n),createComment:n=>on.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>on.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,a,e,o,l){const d=a?a.previousSibling:s.lastChild;if(o&&(o===l||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),a),!(o===l||!(o=o.nextSibling)););else{yl.innerHTML=le(e==="svg"?`<svg>${n}</svg>`:e==="mathml"?`<math>${n}</math>`:n);const p=yl.content;if(e==="svg"||e==="mathml"){const r=p.firstChild;for(;r.firstChild;)p.appendChild(r.firstChild);p.removeChild(r)}s.insertBefore(p,a)}return[d?d.nextSibling:s.firstChild,a?a.previousSibling:s.lastChild]}},wd=Symbol("_vtc");function Sd(n,s,a){const e=n[wd];e&&(s=(s?[s,...e]:[...e]).join(" ")),s==null?n.removeAttribute("class"):a?n.setAttribute("class",s):n.className=s}const kl=Symbol("_vod"),Ad=Symbol("_vsh"),Ed=Symbol(""),Td=/(?:^|;)\s*display\s*:/;function Rd(n,s,a){const e=n.style,o=fs(a);let l=!1;if(a&&!o){if(s)if(fs(s))for(const d of s.split(";")){const p=d.slice(0,d.indexOf(":")).trim();a[p]==null&&Nt(e,p,"")}else for(const d in s)a[d]==null&&Nt(e,d,"");for(const d in a)d==="display"&&(l=!0),Nt(e,d,a[d])}else if(o){if(s!==a){const d=e[Ed];d&&(a+=";"+d),e.cssText=a,l=Td.test(a)}}else s&&n.removeAttribute("style");kl in n&&(n[kl]=l?e.display:"",n[Ad]&&(e.display="none"))}const Cl=/\s*!important$/;function Nt(n,s,a){if(H(a))a.forEach(e=>Nt(n,s,e));else if(a==null&&(a=""),s.startsWith("--"))n.setProperty(s,a);else{const e=Od(n,s);Cl.test(a)?n.setProperty(En(e),a.replace(Cl,""),"important"):n[e]=a}}const wl=["Webkit","Moz","ms"],ca={};function Od(n,s){const a=ca[s];if(a)return a;let e=Rs(s);if(e!=="filter"&&e in n)return ca[s]=e;e=jt(e);for(let o=0;o<wl.length;o++){const l=wl[o]+e;if(l in n)return ca[s]=l}return s}const Sl="http://www.w3.org/1999/xlink";function Al(n,s,a,e,o,l=Pe(s)){e&&s.startsWith("xlink:")?a==null?n.removeAttributeNS(Sl,s.slice(6,s.length)):n.setAttributeNS(Sl,s,a):a==null||l&&!ap(a)?n.removeAttribute(s):n.setAttribute(s,l?"":tn(a)?String(a):a)}function El(n,s,a,e,o){if(s==="innerHTML"||s==="textContent"){a!=null&&(n[s]=s==="innerHTML"?le(a):a);return}const l=n.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){const p=l==="OPTION"?n.getAttribute("value")||"":n.value,r=a==null?n.type==="checkbox"?"on":"":String(a);(p!==r||!("_value"in n))&&(n.value=r),a==null&&n.removeAttribute(s),n._value=a;return}let d=!1;if(a===""||a==null){const p=typeof n[s];p==="boolean"?a=ap(a):a==null&&p==="string"?(a="",d=!0):p==="number"&&(a=0,d=!0)}try{n[s]=a}catch{}d&&n.removeAttribute(o||s)}function Nn(n,s,a,e){n.addEventListener(s,a,e)}function Pd(n,s,a,e){n.removeEventListener(s,a,e)}const Tl=Symbol("_vei");function Id(n,s,a,e,o=null){const l=n[Tl]||(n[Tl]={}),d=l[s];if(e&&d)d.value=e;else{const[p,r]=xd(s);if(e){const m=l[s]=Md(e,o);Nn(n,p,m,r)}else d&&(Pd(n,p,d,r),l[s]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function xd(n){let s;if(Rl.test(n)){s={};let e;for(;e=n.match(Rl);)n=n.slice(0,n.length-e[0].length),s[e[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):En(n.slice(2)),s]}let ia=0;const Nd=Promise.resolve(),qd=()=>ia||(Nd.then(()=>ia=0),ia=Date.now());function Md(n,s){const a=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=a.attached)return;an(Dd(e,a.value),s,5,[e])};return a.value=n,a.attached=qd(),a}function Dd(n,s){if(H(s)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},s.map(e=>o=>!o._stopped&&e&&e(o))}else return s}const Ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Fd=(n,s,a,e,o,l)=>{const d=o==="svg";s==="class"?Sd(n,e,d):s==="style"?Rd(n,a,e):Kt(s)?qa(s)||Id(n,s,a,e,l):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Vd(n,s,e,d))?(El(n,s,e),!n.tagName.includes("-")&&(s==="value"||s==="checked"||s==="selected")&&Al(n,s,e,d,l,s!=="value")):n._isVueCE&&(Gd(n,s)||n._def.__asyncLoader&&(/[A-Z]/.test(s)||!fs(e)))?El(n,Rs(s),e,l,s):(s==="true-value"?n._trueValue=e:s==="false-value"&&(n._falseValue=e),Al(n,s,e,d))};function Vd(n,s,a,e){if(e)return!!(s==="innerHTML"||s==="textContent"||s in n&&Ol(s)&&Y(a));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="autocorrect"||s==="sandbox"&&n.tagName==="IFRAME"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ol(s)&&fs(a)?!1:s in n}function Gd(n,s){const a=n._def.props;if(!a)return!1;const e=Rs(s);return Array.isArray(a)?a.some(o=>Rs(o)===e):Object.keys(a).some(o=>Rs(o)===e)}const Lt=n=>{const s=n.props["onUpdate:modelValue"]||!1;return H(s)?a=>Rt(s,a):s};function $d(n){n.target.composing=!0}function Pl(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const zn=Symbol("_assign");function Il(n,s,a){return s&&(n=n.trim()),a&&(n=zt(n)),n}const As={created(n,{modifiers:{lazy:s,trim:a,number:e}},o){n[zn]=Lt(o);const l=e||o.props&&o.props.type==="number";Nn(n,s?"change":"input",d=>{d.target.composing||n[zn](Il(n.value,a,l))}),(a||l)&&Nn(n,"change",()=>{n.value=Il(n.value,a,l)}),s||(Nn(n,"compositionstart",$d),Nn(n,"compositionend",Pl),Nn(n,"change",Pl))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,oldValue:a,modifiers:{lazy:e,trim:o,number:l}},d){if(n[zn]=Lt(d),n.composing)return;const p=(l||n.type==="number")&&!/^0\d/.test(n.value)?zt(n.value):n.value,r=s??"";p!==r&&(document.activeElement===n&&n.type!=="range"&&(e&&s===a||o&&n.value.trim()===r)||(n.value=r))}},xl={deep:!0,created(n,{value:s,modifiers:{number:a}},e){const o=Ht(s);Nn(n,"change",()=>{const l=Array.prototype.filter.call(n.options,d=>d.selected).map(d=>a?zt(Ut(d)):Ut(d));n[zn](n.multiple?o?new Set(l):l:l[0]),n._assigning=!0,Ka(()=>{n._assigning=!1})}),n[zn]=Lt(e)},mounted(n,{value:s}){Nl(n,s)},beforeUpdate(n,s,a){n[zn]=Lt(a)},updated(n,{value:s}){n._assigning||Nl(n,s)}};function Nl(n,s){const a=n.multiple,e=H(s);if(!(a&&!e&&!Ht(s))){for(let o=0,l=n.options.length;o<l;o++){const d=n.options[o],p=Ut(d);if(a)if(e){const r=typeof p;r==="string"||r==="number"?d.selected=s.some(m=>String(m)===String(p)):d.selected=xe(s,p)>-1}else d.selected=s.has(p);else if(kt(Ut(d),s)){n.selectedIndex!==o&&(n.selectedIndex=o);return}}!a&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ut(n){return"_value"in n?n._value:n.value}const Bd=["ctrl","shift","alt","meta"],Ld={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,s)=>Bd.some(a=>n[`${a}Key`]&&!s.includes(a))},ql=(n,s)=>{if(!n)return n;const a=n._withMods||(n._withMods={}),e=s.join(".");return a[e]||(a[e]=(o,...l)=>{for(let d=0;d<s.length;d++){const p=Ld[s[d]];if(p&&p(o,s))return}return n(o,...l)})},Ud={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ml=(n,s)=>{const a=n._withKeys||(n._withKeys={}),e=s.join(".");return a[e]||(a[e]=o=>{if(!("key"in o))return;const l=En(o.key);if(s.some(d=>d===l||Ud[d]===l))return n(o)})},Kd=hs({patchProp:Fd},Cd);let Dl;function Hd(){return Dl||(Dl=Qo(Kd))}const Wd=(...n)=>{const s=Hd().createApp(...n),{mount:a}=s;return s.mount=e=>{const o=zd(e);if(!o)return;const l=s._component;!Y(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const d=a(o,!1,jd(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),d},s};function jd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function zd(n){return fs(n)?document.querySelector(n):n}const J=(n,s)=>{const a=n.__vccOpts||n;for(const[e,o]of s)a[e]=o;return a},Yd={name:"SearchBox",data(){return{query:"",isFocused:!1,showResults:!1,selectedIndex:0,results:[]}},computed:{searchIndex(){return[{title:"DFT 基本原理",path:"/theory",icon:"📐",keywords:"dft 密度泛函 theory 理论 hohenberg kohn"},{title:"交换关联泛函",path:"/theory",icon:"📐",keywords:"lda gga pbe hse 泛函 functional"},{title:"赝势与基组",path:"/theory",icon:"📐",keywords:"赝势 paw pseudopotential 基组 plane wave"},{title:"K 点采样",path:"/theory",icon:"📐",keywords:"kpoint k点 布里渊区 brillouin mesh"},{title:"SCF 迭代",path:"/theory",icon:"📐",keywords:"scf 自洽场 迭代 self consistent"},{title:"INCAR 文件",path:"/input",icon:"📁",keywords:"incar 参数 设置 encut ediff ibrion isif"},{title:"POSCAR 文件",path:"/input",icon:"📁",keywords:"poscar 结构 晶格 lattice 坐标 direct cartesian"},{title:"KPOINTS 文件",path:"/input",icon:"📁",keywords:"kpoints 网格 mesh gamma monkhorst"},{title:"结构优化",path:"/tasks",icon:"📊",keywords:"relax 优化 弛豫 ion optimization"},{title:"态密度 DOS",path:"/tasks",icon:"📊",keywords:"dos 密度 states density of states"},{title:"能带结构",path:"/tasks",icon:"📊",keywords:"band 能带 bandstructure high symmetry"},{title:"表面计算",path:"/tasks",icon:"🧊",keywords:"surface 表面 slab 模型 adsorption 吸附"},{title:"缺陷计算",path:"/tasks",icon:"💎",keywords:"defect 缺陷 vacancy 空位 interstitial 间隙"},{title:"声子计算",path:"/tasks",icon:"🔊",keywords:"phonon 声子 phonopy 振动 frequency 频率"},{title:"形成能计算",path:"/tasks",icon:"🧪",keywords:"formation 形成能 energy thermodynamics 热力学"},{title:"吸附能计算",path:"/tasks",icon:"🧲",keywords:"adsorption 吸附 binding 结合 energy 能量"},{title:"输出文件解读",path:"/output",icon:"📋",keywords:"outcar oszicar contcar 输出 output 结果"},{title:"收敛性测试",path:"/output",icon:"🎯",keywords:"convergence 收敛 encut kpoint 测试 test"},{title:"SCF 不收敛",path:"/errors",icon:"🚨",keywords:"scf 不收敛 convergence 失败 error 错误"},{title:"DENTET 错误",path:"/errors",icon:"🚨",keywords:"dentet nbands 能带 band 错误 error"},{title:"ZBRENT 错误",path:"/errors",icon:"🚨",keywords:"zbrent 线搜索 搜索失败 error"},{title:"内存不足",path:"/errors",icon:"🚨",keywords:"memory 内存 oom out of killed"},{title:"VESTA 工具",path:"/tools",icon:"🛠️",keywords:"vesta 可视化 visualization 结构 structure"},{title:"VASPKIT 工具",path:"/tools",icon:"🛠️",keywords:"vaspkit 后处理 post process 处理工具"},{title:"pymatgen",path:"/tools",icon:"🛠️",keywords:"pymatgen python 材料 material 分析 analysis"},{title:"phonopy",path:"/tools",icon:"🛠️",keywords:"phonopy 声子 phonon 振动 vibration"},{title:"ENCUT 计算器",path:"/tools/calculator",icon:"🔧",keywords:"encut 截断能 cutoff 计算器 calculator"},{title:"K 点生成器",path:"/tools/calculator",icon:"🔧",keywords:"kpoint k点 生成器 generator 网格 mesh"}]}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(n){(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),this.$refs.searchInput.focus())},search(){if(!this.query.trim()){this.results=[],this.showResults=!1;return}const n=this.query.toLowerCase();this.results=this.searchIndex.filter(s=>s.title.toLowerCase().includes(n)||s.keywords.toLowerCase().includes(n)).slice(0,8),this.showResults=!0,this.selectedIndex=0},navigateTo(n){this.$router.push(n.path),this.close()},navigateToFirst(){this.results.length>0&&this.navigateTo(this.results[this.selectedIndex])},handleBlur(){setTimeout(()=>{this.isFocused=!1,this.showResults=!1},200)},close(){this.query="",this.showResults=!1,this.$refs.searchInput.blur()}}},Zd={class:"search-container"},Xd={key:0,class:"shortcut"},Jd={key:0,class:"search-results"},Qd=["onClick","onMouseenter"],_d={class:"result-icon"},sr={class:"result-content"},nr={class:"result-title"},tr={class:"result-path"},ar={key:1,class:"search-results"},lr={class:"no-results"};function pr(n,s,a,e,o,l){return D(),F("div",Zd,[t("div",{class:j(["search-box",{active:o.isFocused}])},[s[7]||(s[7]=t("svg",{class:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[t("circle",{cx:"11",cy:"11",r:"8"}),t("path",{d:"m21 21-4.35-4.35"})],-1)),vs(t("input",{ref:"searchInput","onUpdate:modelValue":s[0]||(s[0]=d=>o.query=d),type:"text",placeholder:"搜索内容... (Ctrl+K)",onFocus:s[1]||(s[1]=d=>o.isFocused=!0),onBlur:s[2]||(s[2]=(...d)=>l.handleBlur&&l.handleBlur(...d)),onInput:s[3]||(s[3]=(...d)=>l.search&&l.search(...d)),onKeydown:[s[4]||(s[4]=Ml((...d)=>l.close&&l.close(...d),["escape"])),s[5]||(s[5]=Ml((...d)=>l.navigateToFirst&&l.navigateToFirst(...d),["enter"]))]},null,544),[[As,o.query]]),o.isFocused?(D(),F("button",{key:1,class:"close-btn",onClick:s[6]||(s[6]=(...d)=>l.close&&l.close(...d))},"×")):(D(),F("kbd",Xd,"Ctrl+K"))],2),o.showResults&&o.results.length>0?(D(),F("div",Jd,[(D(!0),F(ks,null,xn(o.results,(d,p)=>(D(),F("div",{key:p,class:j(["search-result-item",{active:p===o.selectedIndex}]),onClick:r=>l.navigateTo(d),onMouseenter:r=>o.selectedIndex=p},[t("div",_d,Z(d.icon),1),t("div",sr,[t("div",nr,Z(d.title),1),t("div",tr,Z(d.path),1)])],42,Qd))),128))])):Sn("",!0),o.showResults&&o.query&&o.results.length===0?(D(),F("div",ar,[t("div",lr,[s[8]||(s[8]=t("div",{class:"no-results-icon"},"🔍",-1)),t("div",null,'未找到 "'+Z(o.query)+'" 的相关内容',1)])])):Sn("",!0)])}const er=J(Yd,[["render",pr],["__scopeId","data-v-8ba45772"]]),or={name:"HeaderNav",components:{SearchBox:er},methods:{toggleSidebar(){this.$emit("toggle-sidebar")}}},dr={class:"hdr"},rr={class:"hdr-nav"},cr=["onClick"],ir=["onClick"],ur=["onClick"],fr=["onClick"],mr=["onClick"],br=["onClick"];function gr(n,s,a,e,o,l){const d=X("router-link"),p=X("SearchBox");return D(),F("header",dr,[t("button",{class:"mtog",onClick:s[0]||(s[0]=(...r)=>l.toggleSidebar&&l.toggleSidebar(...r))},"☰"),w(d,{to:"/",class:"hdr-logo"},{default:T(()=>[...s[1]||(s[1]=[t("div",{class:"ico"},"V",-1),t("div",{class:"txt"},[t("span",null,"VASP"),f("Learn")],-1)])]),_:1}),w(p),t("nav",rr,[w(d,{to:"/",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"首页",10,cr)]),_:1}),w(d,{to:"/theory",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"理论",10,ir)]),_:1}),w(d,{to:"/input",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"输入文件",10,ur)]),_:1}),w(d,{to:"/output",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"结果分析",10,fr)]),_:1}),w(d,{to:"/errors",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"错误诊断",10,mr)]),_:1}),w(d,{to:"/tools",custom:""},{default:T(({navigate:r,isActive:m})=>[t("button",{onClick:r,class:j({active:m})},"工具",10,br)]),_:1})])])}const vr=J(or,[["render",gr],["__scopeId","data-v-95f59a4e"]]),hr={name:"SidebarNav",props:{isOpen:Boolean},methods:{closeSidebar(){this.$emit("close-sidebar")}}},yr={class:"sb-sec"},kr=["onClick"],Cr=["onClick"],wr=["onClick"],Sr=["onClick"],Ar=["onClick"],Er=["onClick"],Tr=["onClick"],Rr={class:"sb-sec"},Or=["onClick"],Pr=["onClick"],Ir=["onClick"],xr=["onClick"],Nr=["onClick"],qr=["onClick"],Mr=["onClick"],Dr=["onClick"],Fr=["onClick"],Vr=["onClick"],Gr={class:"sb-sec"},$r=["onClick"],Br=["onClick"],Lr={class:"sb-sec"},Ur=["onClick"],Kr=["onClick"],Hr=["onClick"],Wr=["onClick"],jr=["onClick"],zr=["onClick"],Yr={class:"sb-sec"},Zr=["onClick"],Xr=["onClick"];function Jr(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",null,[t("div",{class:j(["sbov",{show:a.isOpen}]),onClick:s[0]||(s[0]=(...p)=>l.closeSidebar&&l.closeSidebar(...p))},null,2),t("aside",{class:j(["sb",{open:a.isOpen}])},[t("div",yr,[s[8]||(s[8]=t("div",{class:"sb-lbl"},"入门指南",-1)),w(d,{to:"/theory",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[1]||(s[1]=[t("span",{class:"ic"},"📐",-1),f("理论基础 ",-1)])],10,kr)]),_:1}),w(d,{to:"/input",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[2]||(s[2]=[t("span",{class:"ic"},"📁",-1),f("输入文件 ",-1)])],10,Cr)]),_:1}),w(d,{to:"/tasks",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[3]||(s[3]=[t("span",{class:"ic"},"📊",-1),f("计算任务 ",-1)])],10,wr)]),_:1}),w(d,{to:"/surface",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[4]||(s[4]=[t("span",{class:"ic"},"🧊",-1),f("表面计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Sr)]),_:1}),w(d,{to:"/defect",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[5]||(s[5]=[t("span",{class:"ic"},"💎",-1),f("缺陷计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Ar)]),_:1}),w(d,{to:"/phonon",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[6]||(s[6]=[t("span",{class:"ic"},"🔊",-1),f("声子计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Er)]),_:1}),w(d,{to:"/thermoelectric",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[7]||(s[7]=[t("span",{class:"ic"},"⚡",-1),f("热电计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Tr)]),_:1})]),t("div",Rr,[s[19]||(s[19]=t("div",{class:"sb-lbl"},"Gaussian 教程",-1)),w(d,{to:"/gaussian",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[9]||(s[9]=[t("span",{class:"ic"},"🔬",-1),f("Gaussian 概述",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Or)]),_:1}),w(d,{to:"/gaussian/install",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[10]||(s[10]=[t("span",{class:"ic"},"📦",-1),f("安装配置 ",-1)])],10,Pr)]),_:1}),w(d,{to:"/gaussian/input",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[11]||(s[11]=[t("span",{class:"ic"},"📝",-1),f("输入文件 ",-1)])],10,Ir)]),_:1}),w(d,{to:"/gaussian/params",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[12]||(s[12]=[t("span",{class:"ic"},"⚙️",-1),f("参数详解 ",-1)])],10,xr)]),_:1}),w(d,{to:"/gaussian/tasks",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[13]||(s[13]=[t("span",{class:"ic"},"📊",-1),f("计算任务 ",-1)])],10,Nr)]),_:1}),w(d,{to:"/gaussian/output",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[14]||(s[14]=[t("span",{class:"ic"},"📋",-1),f("输出分析 ",-1)])],10,qr)]),_:1}),w(d,{to:"/gaussian/visual",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[15]||(s[15]=[t("span",{class:"ic"},"🎨",-1),f("可视化 ",-1)])],10,Mr)]),_:1}),w(d,{to:"/gaussian/faq",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[16]||(s[16]=[t("span",{class:"ic"},"❓",-1),f("常见问题 ",-1)])],10,Dr)]),_:1}),w(d,{to:"/gaussian/glossary",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[17]||(s[17]=[t("span",{class:"ic"},"📖",-1),f("名词解释 ",-1)])],10,Fr)]),_:1}),w(d,{to:"/gaussian/vasp-compare",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[18]||(s[18]=[t("span",{class:"ic"},"🔄",-1),f("与 VASP 对比 ",-1)])],10,Vr)]),_:1})]),t("div",Gr,[s[22]||(s[22]=t("div",{class:"sb-lbl"},"结果分析",-1)),w(d,{to:"/output",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[20]||(s[20]=[t("span",{class:"ic"},"📋",-1),f("输出文件 ",-1)])],10,$r)]),_:1}),w(d,{to:"/convergence",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[21]||(s[21]=[t("span",{class:"ic"},"🎯",-1),f("收敛性测试 ",-1)])],10,Br)]),_:1})]),t("div",Lr,[s[29]||(s[29]=t("div",{class:"sb-lbl"},"错误诊断",-1)),w(d,{to:"/errors",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[23]||(s[23]=[t("span",{class:"ic"},"🚨",-1),f("诊断总览",-1),t("span",{class:"bd bd-hot"},"重要",-1)])],10,Ur)]),_:1}),w(d,{to:"/errors/scf",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[24]||(s[24]=[t("span",{class:"ic"},"⚡",-1),f("SCF 不收敛",-1),t("span",{class:"bd bd-hot"},"高频",-1)])],10,Kr)]),_:1}),w(d,{to:"/errors/ion",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[25]||(s[25]=[t("span",{class:"ic"},"💥",-1),f("离子步问题 ",-1)])],10,Hr)]),_:1}),w(d,{to:"/errors/memory",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[26]||(s[26]=[t("span",{class:"ic"},"💾",-1),f("内存与性能 ",-1)])],10,Wr)]),_:1}),w(d,{to:"/errors/files",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[27]||(s[27]=[t("span",{class:"ic"},"📂",-1),f("文件错误 ",-1)])],10,jr)]),_:1}),w(d,{to:"/errors/output",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[28]||(s[28]=[t("span",{class:"ic"},"🔍",-1),f("输出异常 ",-1)])],10,zr)]),_:1})]),t("div",Yr,[s[32]||(s[32]=t("div",{class:"sb-lbl"},"工具与资源",-1)),w(d,{to:"/tools",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[30]||(s[30]=[t("span",{class:"ic"},"🛠️",-1),f("辅助工具 ",-1)])],10,Zr)]),_:1}),w(d,{to:"/cheatsheet",custom:""},{default:T(({navigate:p,isActive:r})=>[t("div",{class:j(["sb-it",{active:r}]),onClick:p},[...s[31]||(s[31]=[t("span",{class:"ic"},"📝",-1),f("速查手册 ",-1)])],10,Xr)]),_:1})])],2)])}const Qr=J(hr,[["render",Jr],["__scopeId","data-v-2e34a098"]]),_r={name:"DisclaimerBanner"},sc={class:"disclaimer"};function nc(n,s,a,e,o,l){return D(),F("div",sc,[...s[0]||(s[0]=[t("div",{class:"disclaimer-content"},[t("span",{class:"disclaimer-icon"},"⚠️"),t("p",null,[t("strong",null,"免责声明："),f("本站内容大部分由 AI 生成，仅供参考学习使用。如有疑问，请以官方文档或专业教材为准。")])],-1)])])}const tc=J(_r,[["render",nc],["__scopeId","data-v-4a9bbc61"]]),ac={name:"App",components:{HeaderNav:vr,SidebarNav:Qr,DisclaimerBanner:tc},data(){return{sidebarOpen:!1}},methods:{toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},closeSidebar(){this.sidebarOpen=!1}},watch:{$route(){this.sidebarOpen=!1}}},lc={id:"app"},pc={class:"mn"};function ec(n,s,a,e,o,l){const d=X("HeaderNav"),p=X("SidebarNav"),r=X("router-view"),m=X("DisclaimerBanner");return D(),F("div",lc,[w(d,{onToggleSidebar:l.toggleSidebar},null,8,["onToggleSidebar"]),w(p,{isOpen:o.sidebarOpen,onCloseSidebar:l.closeSidebar},null,8,["isOpen","onCloseSidebar"]),t("main",pc,[w(r)]),w(m)])}const oc=J(ac,[["render",ec]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ln=typeof document<"u";function pe(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function dc(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&pe(n.default)}const ns=Object.assign;function ua(n,s){const a={};for(const e in s){const o=s[e];a[e]=Us(o)?o.map(n):n(o)}return a}const ut=()=>{},Us=Array.isArray;function Fl(n,s){const a={};for(const e in n)a[e]=e in s?s[e]:n[e];return a}const ee=/#/g,rc=/&/g,cc=/\//g,ic=/=/g,uc=/\?/g,oe=/\+/g,fc=/%5B/g,mc=/%5D/g,de=/%5E/g,bc=/%60/g,re=/%7B/g,gc=/%7C/g,ce=/%7D/g,vc=/%20/g;function Za(n){return n==null?"":encodeURI(""+n).replace(gc,"|").replace(fc,"[").replace(mc,"]")}function hc(n){return Za(n).replace(re,"{").replace(ce,"}").replace(de,"^")}function Oa(n){return Za(n).replace(oe,"%2B").replace(vc,"+").replace(ee,"%23").replace(rc,"%26").replace(bc,"`").replace(re,"{").replace(ce,"}").replace(de,"^")}function yc(n){return Oa(n).replace(ic,"%3D")}function kc(n){return Za(n).replace(ee,"%23").replace(uc,"%3F")}function Cc(n){return kc(n).replace(cc,"%2F")}function ht(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const wc=/\/$/,Sc=n=>n.replace(wc,"");function fa(n,s,a="/"){let e,o={},l="",d="";const p=s.indexOf("#");let r=s.indexOf("?");return r=p>=0&&r>p?-1:r,r>=0&&(e=s.slice(0,r),l=s.slice(r,p>0?p:s.length),o=n(l.slice(1))),p>=0&&(e=e||s.slice(0,p),d=s.slice(p,s.length)),e=Rc(e??s,a),{fullPath:e+l+d,path:e,query:o,hash:ht(d)}}function Ac(n,s){const a=s.query?n(s.query):"";return s.path+(a&&"?")+a+(s.hash||"")}function Vl(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function Ec(n,s,a){const e=s.matched.length-1,o=a.matched.length-1;return e>-1&&e===o&&Jn(s.matched[e],a.matched[o])&&ie(s.params,a.params)&&n(s.query)===n(a.query)&&s.hash===a.hash}function Jn(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function ie(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(var a in n)if(!Tc(n[a],s[a]))return!1;return!0}function Tc(n,s){return Us(n)?Gl(n,s):Us(s)?Gl(s,n):(n==null?void 0:n.valueOf())===(s==null?void 0:s.valueOf())}function Gl(n,s){return Us(s)?n.length===s.length&&n.every((a,e)=>a===s[e]):n.length===1&&n[0]===s}function Rc(n,s){if(n.startsWith("/"))return n;if(!n)return s;const a=s.split("/"),e=n.split("/"),o=e[e.length-1];(o===".."||o===".")&&e.push("");let l=a.length-1,d,p;for(d=0;d<e.length;d++)if(p=e[d],p!==".")if(p==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+e.slice(d).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pa=function(n){return n.pop="pop",n.push="push",n}({}),ma=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Oc(n){if(!n)if(Ln){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Sc(n)}const Pc=/^[^#]+#/;function Ic(n,s){return n.replace(Pc,"#")+s}function xc(n,s){const a=document.documentElement.getBoundingClientRect(),e=n.getBoundingClientRect();return{behavior:s.behavior,left:e.left-a.left-(s.left||0),top:e.top-a.top-(s.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function Nc(n){let s;if("el"in n){const a=n.el,e=typeof a=="string"&&a.startsWith("#"),o=typeof a=="string"?e?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!o)return;s=xc(o,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.scrollX,s.top!=null?s.top:window.scrollY)}function $l(n,s){return(history.state?history.state.position-s:-1)+n}const Ia=new Map;function qc(n,s){Ia.set(n,s)}function Mc(n){const s=Ia.get(n);return Ia.delete(n),s}function Dc(n){return typeof n=="string"||n&&typeof n=="object"}function ue(n){return typeof n=="string"||typeof n=="symbol"}let us=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const fe=Symbol("");us.MATCHER_NOT_FOUND+"",us.NAVIGATION_GUARD_REDIRECT+"",us.NAVIGATION_ABORTED+"",us.NAVIGATION_CANCELLED+"",us.NAVIGATION_DUPLICATED+"";function Qn(n,s){return ns(new Error,{type:n,[fe]:!0},s)}function en(n,s){return n instanceof Error&&fe in n&&(s==null||!!(n.type&s))}const Fc=["params","query","hash"];function Vc(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const s={};for(const a of Fc)a in n&&(s[a]=n[a]);return JSON.stringify(s,null,2)}function Gc(n){const s={};if(n===""||n==="?")return s;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let e=0;e<a.length;++e){const o=a[e].replace(oe," "),l=o.indexOf("="),d=ht(l<0?o:o.slice(0,l)),p=l<0?null:ht(o.slice(l+1));if(d in s){let r=s[d];Us(r)||(r=s[d]=[r]),r.push(p)}else s[d]=p}return s}function Bl(n){let s="";for(let a in n){const e=n[a];if(a=yc(a),e==null){e!==void 0&&(s+=(s.length?"&":"")+a);continue}(Us(e)?e.map(o=>o&&Oa(o)):[e&&Oa(e)]).forEach(o=>{o!==void 0&&(s+=(s.length?"&":"")+a,o!=null&&(s+="="+o))})}return s}function $c(n){const s={};for(const a in n){const e=n[a];e!==void 0&&(s[a]=Us(e)?e.map(o=>o==null?null:""+o):e==null?e:""+e)}return s}const Bc=Symbol(""),Ll=Symbol(""),Xa=Symbol(""),me=Symbol(""),xa=Symbol("");function at(){let n=[];function s(e){return n.push(e),()=>{const o=n.indexOf(e);o>-1&&n.splice(o,1)}}function a(){n=[]}return{add:s,list:()=>n.slice(),reset:a}}function wn(n,s,a,e,o,l=d=>d()){const d=e&&(e.enterCallbacks[o]=e.enterCallbacks[o]||[]);return()=>new Promise((p,r)=>{const m=h=>{h===!1?r(Qn(us.NAVIGATION_ABORTED,{from:a,to:s})):h instanceof Error?r(h):Dc(h)?r(Qn(us.NAVIGATION_GUARD_REDIRECT,{from:s,to:h})):(d&&e.enterCallbacks[o]===d&&typeof h=="function"&&d.push(h),p())},u=l(()=>n.call(e&&e.instances[o],s,a,m));let g=Promise.resolve(u);n.length<3&&(g=g.then(m)),g.catch(h=>r(h))})}function ba(n,s,a,e,o=l=>l()){const l=[];for(const d of n)for(const p in d.components){let r=d.components[p];if(!(s!=="beforeRouteEnter"&&!d.instances[p]))if(pe(r)){const m=(r.__vccOpts||r)[s];m&&l.push(wn(m,a,e,d,p,o))}else{let m=r();l.push(()=>m.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${p}" at "${d.path}"`);const g=dc(u)?u.default:u;d.mods[p]=u,d.components[p]=g;const h=(g.__vccOpts||g)[s];return h&&wn(h,a,e,d,p,o)()}))}}return l}function Lc(n,s){const a=[],e=[],o=[],l=Math.max(s.matched.length,n.matched.length);for(let d=0;d<l;d++){const p=s.matched[d];p&&(n.matched.find(m=>Jn(m,p))?e.push(p):a.push(p));const r=n.matched[d];r&&(s.matched.find(m=>Jn(m,r))||o.push(r))}return[a,e,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uc=()=>location.protocol+"//"+location.host;function be(n,s){const{pathname:a,search:e,hash:o}=s,l=n.indexOf("#");if(l>-1){let d=o.includes(n.slice(l))?n.slice(l).length:1,p=o.slice(d);return p[0]!=="/"&&(p="/"+p),Vl(p,"")}return Vl(a,n)+e+o}function Kc(n,s,a,e){let o=[],l=[],d=null;const p=({state:h})=>{const y=be(n,location),V=a.value,I=s.value;let z=0;if(h){if(a.value=y,s.value=h,d&&d===V){d=null;return}z=I?h.position-I.position:0}else e(y);o.forEach(K=>{K(a.value,V,{delta:z,type:Pa.pop,direction:z?z>0?ma.forward:ma.back:ma.unknown})})};function r(){d=a.value}function m(h){o.push(h);const y=()=>{const V=o.indexOf(h);V>-1&&o.splice(V,1)};return l.push(y),y}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ns({},h.state,{scroll:ta()}),"")}}function g(){for(const h of l)h();l=[],window.removeEventListener("popstate",p),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",p),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:r,listen:m,destroy:g}}function Ul(n,s,a,e=!1,o=!1){return{back:n,current:s,forward:a,replaced:e,position:window.history.length,scroll:o?ta():null}}function Hc(n){const{history:s,location:a}=window,e={value:be(n,a)},o={value:s.state};o.value||l(e.value,{back:null,current:e.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(r,m,u){const g=n.indexOf("#"),h=g>-1?(a.host&&document.querySelector("base")?n:n.slice(g))+r:Uc()+n+r;try{s[u?"replaceState":"pushState"](m,"",h),o.value=m}catch(y){console.error(y),a[u?"replace":"assign"](h)}}function d(r,m){l(r,ns({},s.state,Ul(o.value.back,r,o.value.forward,!0),m,{position:o.value.position}),!0),e.value=r}function p(r,m){const u=ns({},o.value,s.state,{forward:r,scroll:ta()});l(u.current,u,!0),l(r,ns({},Ul(e.value,r,null),{position:u.position+1},m),!1),e.value=r}return{location:e,state:o,push:p,replace:d}}function Wc(n){n=Oc(n);const s=Hc(n),a=Kc(n,s.state,s.location,s.replace);function e(l,d=!0){d||a.pauseListeners(),history.go(l)}const o=ns({location:"",base:n,go:e,createHref:Ic.bind(null,n)},s,a);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>s.state.value}),o}let qn=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ms=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ms||{});const jc={type:qn.Static,value:""},zc=/[a-zA-Z0-9_]/;function Yc(n){if(!n)return[[]];if(n==="/")return[[jc]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(y){throw new Error(`ERR (${a})/"${m}": ${y}`)}let a=ms.Static,e=a;const o=[];let l;function d(){l&&o.push(l),l=[]}let p=0,r,m="",u="";function g(){m&&(a===ms.Static?l.push({type:qn.Static,value:m}):a===ms.Param||a===ms.ParamRegExp||a===ms.ParamRegExpEnd?(l.length>1&&(r==="*"||r==="+")&&s(`A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`),l.push({type:qn.Param,value:m,regexp:u,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):s("Invalid state to consume buffer"),m="")}function h(){m+=r}for(;p<n.length;){if(r=n[p++],r==="\\"&&a!==ms.ParamRegExp){e=a,a=ms.EscapeNext;continue}switch(a){case ms.Static:r==="/"?(m&&g(),d()):r===":"?(g(),a=ms.Param):h();break;case ms.EscapeNext:h(),a=e;break;case ms.Param:r==="("?a=ms.ParamRegExp:zc.test(r)?h():(g(),a=ms.Static,r!=="*"&&r!=="?"&&r!=="+"&&p--);break;case ms.ParamRegExp:r===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+r:a=ms.ParamRegExpEnd:u+=r;break;case ms.ParamRegExpEnd:g(),a=ms.Static,r!=="*"&&r!=="?"&&r!=="+"&&p--,u="";break;default:s("Unknown state");break}}return a===ms.ParamRegExp&&s(`Unfinished custom RegExp for param "${m}"`),g(),d(),o}const Kl="[^/]+?",Zc={sensitive:!1,strict:!1,start:!0,end:!0};var Es=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Es||{});const Xc=/[.+*?^${}()[\]/\\]/g;function Jc(n,s){const a=ns({},Zc,s),e=[];let o=a.start?"^":"";const l=[];for(const m of n){const u=m.length?[]:[Es.Root];a.strict&&!m.length&&(o+="/");for(let g=0;g<m.length;g++){const h=m[g];let y=Es.Segment+(a.sensitive?Es.BonusCaseSensitive:0);if(h.type===qn.Static)g||(o+="/"),o+=h.value.replace(Xc,"\\$&"),y+=Es.Static;else if(h.type===qn.Param){const{value:V,repeatable:I,optional:z,regexp:K}=h;l.push({name:V,repeatable:I,optional:z});const q=K||Kl;if(q!==Kl){y+=Es.BonusCustomRegExp;try{`${q}`}catch(G){throw new Error(`Invalid custom RegExp for param "${V}" (${q}): `+G.message)}}let $=I?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;g||($=z&&m.length<2?`(?:/${$})`:"/"+$),z&&($+="?"),o+=$,y+=Es.Dynamic,z&&(y+=Es.BonusOptional),I&&(y+=Es.BonusRepeatable),q===".*"&&(y+=Es.BonusWildcard)}u.push(y)}e.push(u)}if(a.strict&&a.end){const m=e.length-1;e[m][e[m].length-1]+=Es.BonusStrict}a.strict||(o+="/?"),a.end?o+="$":a.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const d=new RegExp(o,a.sensitive?"":"i");function p(m){const u=m.match(d),g={};if(!u)return null;for(let h=1;h<u.length;h++){const y=u[h]||"",V=l[h-1];g[V.name]=y&&V.repeatable?y.split("/"):y}return g}function r(m){let u="",g=!1;for(const h of n){(!g||!u.endsWith("/"))&&(u+="/"),g=!1;for(const y of h)if(y.type===qn.Static)u+=y.value;else if(y.type===qn.Param){const{value:V,repeatable:I,optional:z}=y,K=V in m?m[V]:"";if(Us(K)&&!I)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const q=Us(K)?K.join("/"):K;if(!q)if(z)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):g=!0);else throw new Error(`Missing required param "${V}"`);u+=q}}return u||"/"}return{re:d,score:e,keys:l,parse:p,stringify:r}}function Qc(n,s){let a=0;for(;a<n.length&&a<s.length;){const e=s[a]-n[a];if(e)return e;a++}return n.length<s.length?n.length===1&&n[0]===Es.Static+Es.Segment?-1:1:n.length>s.length?s.length===1&&s[0]===Es.Static+Es.Segment?1:-1:0}function ge(n,s){let a=0;const e=n.score,o=s.score;for(;a<e.length&&a<o.length;){const l=Qc(e[a],o[a]);if(l)return l;a++}if(Math.abs(o.length-e.length)===1){if(Hl(e))return 1;if(Hl(o))return-1}return o.length-e.length}function Hl(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const _c={strict:!1,end:!0,sensitive:!1};function si(n,s,a){const e=Jc(Yc(n.path),a),o=ns(e,{record:n,parent:s,children:[],alias:[]});return s&&!o.record.aliasOf==!s.record.aliasOf&&s.children.push(o),o}function ni(n,s){const a=[],e=new Map;s=Fl(_c,s);function o(g){return e.get(g)}function l(g,h,y){const V=!y,I=jl(g);I.aliasOf=y&&y.record;const z=Fl(s,g),K=[I];if("alias"in g){const G=typeof g.alias=="string"?[g.alias]:g.alias;for(const os of G)K.push(jl(ns({},I,{components:y?y.record.components:I.components,path:os,aliasOf:y?y.record:I})))}let q,$;for(const G of K){const{path:os}=G;if(h&&os[0]!=="/"){const gs=h.record.path,is=gs[gs.length-1]==="/"?"":"/";G.path=h.record.path+(os&&is+os)}if(q=si(G,h,z),y?y.alias.push(q):($=$||q,$!==q&&$.alias.push(q),V&&g.name&&!zl(q)&&d(g.name)),ve(q)&&r(q),I.children){const gs=I.children;for(let is=0;is<gs.length;is++)l(gs[is],q,y&&y.children[is])}y=y||q}return $?()=>{d($)}:ut}function d(g){if(ue(g)){const h=e.get(g);h&&(e.delete(g),a.splice(a.indexOf(h),1),h.children.forEach(d),h.alias.forEach(d))}else{const h=a.indexOf(g);h>-1&&(a.splice(h,1),g.record.name&&e.delete(g.record.name),g.children.forEach(d),g.alias.forEach(d))}}function p(){return a}function r(g){const h=li(g,a);a.splice(h,0,g),g.record.name&&!zl(g)&&e.set(g.record.name,g)}function m(g,h){let y,V={},I,z;if("name"in g&&g.name){if(y=e.get(g.name),!y)throw Qn(us.MATCHER_NOT_FOUND,{location:g});z=y.record.name,V=ns(Wl(h.params,y.keys.filter($=>!$.optional).concat(y.parent?y.parent.keys.filter($=>$.optional):[]).map($=>$.name)),g.params&&Wl(g.params,y.keys.map($=>$.name))),I=y.stringify(V)}else if(g.path!=null)I=g.path,y=a.find($=>$.re.test(I)),y&&(V=y.parse(I),z=y.record.name);else{if(y=h.name?e.get(h.name):a.find($=>$.re.test(h.path)),!y)throw Qn(us.MATCHER_NOT_FOUND,{location:g,currentLocation:h});z=y.record.name,V=ns({},h.params,g.params),I=y.stringify(V)}const K=[];let q=y;for(;q;)K.unshift(q.record),q=q.parent;return{name:z,path:I,params:V,matched:K,meta:ai(K)}}n.forEach(g=>l(g));function u(){a.length=0,e.clear()}return{addRoute:l,resolve:m,removeRoute:d,clearRoutes:u,getRoutes:p,getRecordMatcher:o}}function Wl(n,s){const a={};for(const e of s)e in n&&(a[e]=n[e]);return a}function jl(n){const s={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ti(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(s,"mods",{value:{}}),s}function ti(n){const s={},a=n.props||!1;if("component"in n)s.default=a;else for(const e in n.components)s[e]=typeof a=="object"?a[e]:a;return s}function zl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ai(n){return n.reduce((s,a)=>ns(s,a.meta),{})}function li(n,s){let a=0,e=s.length;for(;a!==e;){const l=a+e>>1;ge(n,s[l])<0?e=l:a=l+1}const o=pi(n);return o&&(e=s.lastIndexOf(o,e-1)),e}function pi(n){let s=n;for(;s=s.parent;)if(ve(s)&&ge(n,s)===0)return s}function ve({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Yl(n){const s=un(Xa),a=un(me),e=$s(()=>{const r=Hn(n.to);return s.resolve(r)}),o=$s(()=>{const{matched:r}=e.value,{length:m}=r,u=r[m-1],g=a.matched;if(!u||!g.length)return-1;const h=g.findIndex(Jn.bind(null,u));if(h>-1)return h;const y=Zl(r[m-2]);return m>1&&Zl(u)===y&&g[g.length-1].path!==y?g.findIndex(Jn.bind(null,r[m-2])):h}),l=$s(()=>o.value>-1&&ci(a.params,e.value.params)),d=$s(()=>o.value>-1&&o.value===a.matched.length-1&&ie(a.params,e.value.params));function p(r={}){if(ri(r)){const m=s[Hn(n.replace)?"replace":"push"](Hn(n.to)).catch(ut);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>m),m}return Promise.resolve()}return{route:e,href:$s(()=>e.value.href),isActive:l,isExactActive:d,navigate:p}}function ei(n){return n.length===1?n[0]:n}const oi=xp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Yl,setup(n,{slots:s}){const a=Xt(Yl(n)),{options:e}=un(Xa),o=$s(()=>({[Xl(n.activeClass,e.linkActiveClass,"router-link-active")]:a.isActive,[Xl(n.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=s.default&&ei(s.default(a));return n.custom?l:ae("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:o.value},l)}}}),di=oi;function ri(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function ci(n,s){for(const a in s){const e=s[a],o=n[a];if(typeof e=="string"){if(e!==o)return!1}else if(!Us(o)||o.length!==e.length||e.some((l,d)=>l.valueOf()!==o[d].valueOf()))return!1}return!0}function Zl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Xl=(n,s,a)=>n??s??a,ii=xp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:a}){const e=un(xa),o=$s(()=>n.route||e.value),l=un(Ll,0),d=$s(()=>{let m=Hn(l);const{matched:u}=o.value;let g;for(;(g=u[m])&&!g.components;)m++;return m}),p=$s(()=>o.value.matched[d.value]);Ot(Ll,$s(()=>d.value+1)),Ot(Bc,p),Ot(xa,o);const r=Cp();return Pt(()=>[r.value,p.value,n.name],([m,u,g],[h,y,V])=>{u&&(u.instances[g]=m,y&&y!==u&&m&&m===h&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),m&&u&&(!y||!Jn(u,y)||!h)&&(u.enterCallbacks[g]||[]).forEach(I=>I(m))},{flush:"post"}),()=>{const m=o.value,u=n.name,g=p.value,h=g&&g.components[u];if(!h)return Jl(a.default,{Component:h,route:m});const y=g.props[u],V=y?y===!0?m.params:typeof y=="function"?y(m):y:null,z=ae(h,ns({},V,s,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(g.instances[u]=null)},ref:r}));return Jl(a.default,{Component:z,route:m})||z}}});function Jl(n,s){if(!n)return null;const a=n(s);return a.length===1?a[0]:a}const ui=ii;function fi(n){const s=ni(n.routes,n),a=n.parseQuery||Gc,e=n.stringifyQuery||Bl,o=n.history,l=at(),d=at(),p=at(),r=_e(kn);let m=kn;Ln&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ua.bind(null,S=>""+S),g=ua.bind(null,Cc),h=ua.bind(null,ht);function y(S,M){let x,B;return ue(S)?(x=s.getRecordMatcher(S),B=M):B=S,s.addRoute(B,x)}function V(S){const M=s.getRecordMatcher(S);M&&s.removeRoute(M)}function I(){return s.getRoutes().map(S=>S.record)}function z(S){return!!s.getRecordMatcher(S)}function K(S,M){if(M=ns({},M||r.value),typeof S=="string"){const v=fa(a,S,M.path),k=s.resolve({path:v.path},M),A=o.createHref(v.fullPath);return ns(v,k,{params:h(k.params),hash:ht(v.hash),redirectedFrom:void 0,href:A})}let x;if(S.path!=null)x=ns({},S,{path:fa(a,S.path,M.path).path});else{const v=ns({},S.params);for(const k in v)v[k]==null&&delete v[k];x=ns({},S,{params:g(v)}),M.params=g(M.params)}const B=s.resolve(x,M),Q=S.hash||"";B.params=u(h(B.params));const c=Ac(e,ns({},S,{hash:hc(Q),path:B.path})),b=o.createHref(c);return ns({fullPath:c,hash:Q,query:e===Bl?$c(S.query):S.query||{}},B,{redirectedFrom:void 0,href:b})}function q(S){return typeof S=="string"?fa(a,S,r.value.path):ns({},S)}function $(S,M){if(m!==S)return Qn(us.NAVIGATION_CANCELLED,{from:M,to:S})}function G(S){return is(S)}function os(S){return G(ns(q(S),{replace:!0}))}function gs(S,M){const x=S.matched[S.matched.length-1];if(x&&x.redirect){const{redirect:B}=x;let Q=typeof B=="function"?B(S,M):B;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=q(Q):{path:Q},Q.params={}),ns({query:S.query,hash:S.hash,params:Q.path!=null?{}:S.params},Q)}}function is(S,M){const x=m=K(S),B=r.value,Q=S.state,c=S.force,b=S.replace===!0,v=gs(x,B);if(v)return is(ns(q(v),{state:typeof v=="object"?ns({},Q,v.state):Q,force:c,replace:b}),M||x);const k=x;k.redirectedFrom=M;let A;return!c&&Ec(e,B,x)&&(A=Qn(us.NAVIGATION_DUPLICATED,{to:k,from:B}),js(B,B,!0,!1)),(A?Promise.resolve(A):Hs(k,B)).catch(C=>en(C)?en(C,us.NAVIGATION_GUARD_REDIRECT)?C:yn(C):ss(C,k,B)).then(C=>{if(C){if(en(C,us.NAVIGATION_GUARD_REDIRECT))return is(ns({replace:b},q(C.to),{state:typeof C.to=="object"?ns({},Q,C.to.state):Q,force:c}),M||k)}else C=Tn(k,B,!0,b,Q);return hn(k,B,C),C})}function Ks(S,M){const x=$(S,M);return x?Promise.reject(x):Promise.resolve()}function vn(S){const M=Gn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(S):S()}function Hs(S,M){let x;const[B,Q,c]=Lc(S,M);x=ba(B.reverse(),"beforeRouteLeave",S,M);for(const v of B)v.leaveGuards.forEach(k=>{x.push(wn(k,S,M))});const b=Ks.bind(null,S,M);return x.push(b),Fs(x).then(()=>{x=[];for(const v of l.list())x.push(wn(v,S,M));return x.push(b),Fs(x)}).then(()=>{x=ba(Q,"beforeRouteUpdate",S,M);for(const v of Q)v.updateGuards.forEach(k=>{x.push(wn(k,S,M))});return x.push(b),Fs(x)}).then(()=>{x=[];for(const v of c)if(v.beforeEnter)if(Us(v.beforeEnter))for(const k of v.beforeEnter)x.push(wn(k,S,M));else x.push(wn(v.beforeEnter,S,M));return x.push(b),Fs(x)}).then(()=>(S.matched.forEach(v=>v.enterCallbacks={}),x=ba(c,"beforeRouteEnter",S,M,vn),x.push(b),Fs(x))).then(()=>{x=[];for(const v of d.list())x.push(wn(v,S,M));return x.push(b),Fs(x)}).catch(v=>en(v,us.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function hn(S,M,x){p.list().forEach(B=>vn(()=>B(S,M,x)))}function Tn(S,M,x,B,Q){const c=$(S,M);if(c)return c;const b=M===kn,v=Ln?history.state:{};x&&(B||b?o.replace(S.fullPath,ns({scroll:b&&v&&v.scroll},Q)):o.push(S.fullPath,Q)),r.value=S,js(S,M,x,b),yn()}let Ws;function _n(){Ws||(Ws=o.listen((S,M,x)=>{if(!Rn.listening)return;const B=K(S),Q=gs(B,Rn.currentRoute.value);if(Q){is(ns(Q,{replace:!0,force:!0}),B).catch(ut);return}m=B;const c=r.value;Ln&&qc($l(c.fullPath,x.delta),ta()),Hs(B,c).catch(b=>en(b,us.NAVIGATION_ABORTED|us.NAVIGATION_CANCELLED)?b:en(b,us.NAVIGATION_GUARD_REDIRECT)?(is(ns(q(b.to),{force:!0}),B).then(v=>{en(v,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&!x.delta&&x.type===Pa.pop&&o.go(-1,!1)}).catch(ut),Promise.reject()):(x.delta&&o.go(-x.delta,!1),ss(b,B,c))).then(b=>{b=b||Tn(B,c,!1),b&&(x.delta&&!en(b,us.NAVIGATION_CANCELLED)?o.go(-x.delta,!1):x.type===Pa.pop&&en(b,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),hn(B,c,b)}).catch(ut)}))}let Fn=at(),bs=at(),es;function ss(S,M,x){yn(S);const B=bs.list();return B.length?B.forEach(Q=>Q(S,M,x)):console.error(S),Promise.reject(S)}function ln(){return es&&r.value!==kn?Promise.resolve():new Promise((S,M)=>{Fn.add([S,M])})}function yn(S){return es||(es=!S,_n(),Fn.list().forEach(([M,x])=>S?x(S):M()),Fn.reset()),S}function js(S,M,x,B){const{scrollBehavior:Q}=n;if(!Ln||!Q)return Promise.resolve();const c=!x&&Mc($l(S.fullPath,0))||(B||!x)&&history.state&&history.state.scroll||null;return Ka().then(()=>Q(S,M,c)).then(b=>b&&Nc(b)).catch(b=>ss(b,S,M))}const Os=S=>o.go(S);let Vn;const Gn=new Set,Rn={currentRoute:r,listening:!0,addRoute:y,removeRoute:V,clearRoutes:s.clearRoutes,hasRoute:z,getRoutes:I,resolve:K,options:n,push:G,replace:os,go:Os,back:()=>Os(-1),forward:()=>Os(1),beforeEach:l.add,beforeResolve:d.add,afterEach:p.add,onError:bs.add,isReady:ln,install(S){S.component("RouterLink",di),S.component("RouterView",ui),S.config.globalProperties.$router=Rn,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Hn(r)}),Ln&&!Vn&&r.value===kn&&(Vn=!0,G(o.location).catch(B=>{}));const M={};for(const B in kn)Object.defineProperty(M,B,{get:()=>r.value[B],enumerable:!0});S.provide(Xa,Rn),S.provide(me,kp(M)),S.provide(xa,r);const x=S.unmount;Gn.add(S),S.unmount=function(){Gn.delete(S),Gn.size<1&&(m=kn,Ws&&Ws(),Ws=null,r.value=kn,Vn=!1,es=!1),x()}}};function Fs(S){return S.reduce((M,x)=>M.then(()=>vn(x)),Promise.resolve())}return Rn}const he="vasp-learn-progress",mi=()=>{try{const n=localStorage.getItem(he);return n?JSON.parse(n):{}}catch{return{}}},ga=n=>{try{localStorage.setItem(he,JSON.stringify(n))}catch(s){console.warn("Failed to save progress:",s)}},Gs=Cp(mi()),Tt={theory:{title:"理论基础",items:[{id:"theory-dft",title:"DFT 基本原理",path:"/theory"},{id:"theory-functional",title:"交换关联泛函",path:"/theory"},{id:"theory-paw",title:"赝势与基组",path:"/theory"},{id:"theory-kpoint",title:"K 点采样",path:"/theory"}]},input:{title:"输入文件",items:[{id:"input-incar",title:"INCAR 文件",path:"/input"},{id:"input-poscar",title:"POSCAR 文件",path:"/input"},{id:"input-kpoints",title:"KPOINTS 文件",path:"/input"},{id:"input-potcar",title:"POTCAR 文件",path:"/input"}]},tasks:{title:"计算任务",items:[{id:"tasks-relax",title:"结构优化",path:"/tasks"},{id:"tasks-dos",title:"态密度计算",path:"/tasks"},{id:"tasks-band",title:"能带结构",path:"/tasks"},{id:"tasks-surface",title:"表面计算",path:"/tasks"},{id:"tasks-defect",title:"缺陷计算",path:"/tasks"},{id:"tasks-phonon",title:"声子计算",path:"/tasks"}]},errors:{title:"错误诊断",items:[{id:"errors-scf",title:"SCF 不收敛",path:"/errors"},{id:"errors-ion",title:"离子步问题",path:"/errors"},{id:"errors-memory",title:"内存问题",path:"/errors"},{id:"errors-files",title:"文件错误",path:"/errors"}]}};function bi(){const n=p=>{Gs.value={...Gs.value,[p]:{completed:!0,completedAt:new Date().toISOString()}},ga(Gs.value)},s=p=>{const r={...Gs.value};delete r[p],Gs.value=r,ga(Gs.value)},a=p=>{e(p)?s(p):n(p)},e=p=>{var r;return!!((r=Gs.value[p])!=null&&r.completed)};return{progress:Gs,learnableItems:Tt,markComplete:n,markIncomplete:s,toggleComplete:a,isComplete:e,getTotalProgress:()=>{const p=Object.values(Tt).reduce((m,u)=>m+u.items.length,0),r=Object.values(Gs.value).filter(m=>m.completed).length;return{total:p,completed:r,percentage:p>0?Math.round(r/p*100):0}},getCategoryProgress:p=>{if(!Tt[p])return{total:0,completed:0,percentage:0};const r=Tt[p].items,m=r.filter(u=>e(u.id)).length;return{total:r.length,completed:m,percentage:Math.round(m/r.length*100)}},resetProgress:()=>{Gs.value={},ga(Gs.value)}}}const gi={name:"ProgressWidget",setup(){const{learnableItems:n,getTotalProgress:s,getCategoryProgress:a,resetProgress:e}=bi(),o=s();return{learnableItems:n,totalProgress:o,getCategoryProgress:a,confirmReset:()=>{confirm("确定要重置所有学习进度吗？此操作不可恢复。")&&(e(),window.location.reload())}}}},vi={class:"progress-widget"},hi={class:"progress-header"},yi={class:"progress-stats"},ki={class:"progress-percentage"},Ci={class:"progress-detail"},wi={class:"progress-bar-container"},Si={class:"category-progress"},Ai={class:"category-info"},Ei={class:"category-name"},Ti={class:"category-count"},Ri={class:"category-bar-container"};function Oi(n,s,a,e,o,l){return D(),F("div",vi,[t("div",hi,[s[1]||(s[1]=t("h3",null,"学习进度",-1)),t("div",yi,[t("span",ki,Z(e.totalProgress.percentage)+"%",1),t("span",Ci,Z(e.totalProgress.completed)+"/"+Z(e.totalProgress.total)+" 完成",1)])]),t("div",wi,[t("div",{class:"progress-bar",style:Yn({width:e.totalProgress.percentage+"%"})},null,4)]),t("div",Si,[(D(!0),F(ks,null,xn(e.learnableItems,(d,p)=>(D(),F("div",{key:p,class:"category-item"},[t("div",Ai,[t("span",Ei,Z(d.title),1),t("span",Ti,Z(e.getCategoryProgress(p).completed)+"/"+Z(d.items.length),1)]),t("div",Ri,[t("div",{class:"category-bar",style:Yn({width:e.getCategoryProgress(p).percentage+"%"})},null,4)])]))),128))]),e.totalProgress.completed>0?(D(),F("button",{key:0,class:"reset-btn",onClick:s[0]||(s[0]=(...d)=>e.confirmReset&&e.confirmReset(...d))}," 重置进度 ")):Sn("",!0)])}const Pi=J(gi,[["render",Oi],["__scopeId","data-v-0efc2711"]]),Ii={name:"HomeView",components:{ProgressWidget:Pi}},xi={class:"hero active"},Ni={class:"pg"};function qi(n,s,a,e,o,l){const d=X("ProgressWidget"),p=X("router-link");return D(),F("div",xi,[s[5]||(s[5]=t("h1",{class:"hero-t"},[f("VASP 材料计算"),t("br"),f("学习平台")],-1)),s[6]||(s[6]=t("p",{class:"hero-s"},"从密度泛函理论到第一性原理计算，系统掌握 VASP 的使用方法。包含基础教程、进阶计算任务和完整的错误诊断系统。",-1)),w(d),s[7]||(s[7]=i('<div class="stats"><div class="stat"><div class="stat-n">15</div><div class="stat-l">核心知识点</div></div><div class="stat"><div class="stat-n">8</div><div class="stat-l">计算任务教程</div></div><div class="stat"><div class="stat-n">20+</div><div class="stat-l">错误诊断方案</div></div><div class="stat"><div class="stat-n">∞</div><div class="stat-l">可探索的材料</div></div></div><h2 class="stitle">学习路径</h2><p class="sdesc">按照推荐顺序学习，循序渐进地掌握材料计算</p>',3)),t("div",Ni,[w(p,{to:"/theory",class:"pc",style:{"--ca":"var(--blue)"}},{default:T(()=>[...s[0]||(s[0]=[t("div",{class:"pc-i"},"📐",-1),t("div",{class:"pc-t"},"理论基础",-1),t("div",{class:"pc-d"},"密度泛函理论、赝势方法、平面波基组",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 2h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),w(p,{to:"/input",class:"pc",style:{"--ca":"var(--green)"}},{default:T(()=>[...s[1]||(s[1]=[t("div",{class:"pc-i"},"📁",-1),t("div",{class:"pc-t"},"输入文件",-1),t("div",{class:"pc-d"},"INCAR、POSCAR、KPOINTS、POTCAR 四大核心文件",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 3h"),t("span",null,"📖 4 章节")],-1)])]),_:1}),w(p,{to:"/tasks",class:"pc",style:{"--ca":"var(--purple)"}},{default:T(()=>[...s[2]||(s[2]=[t("div",{class:"pc-i"},"📊",-1),t("div",{class:"pc-t"},"基础计算",-1),t("div",{class:"pc-d"},"结构优化、态密度、能带结构",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 4h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),w(p,{to:"/errors",class:"pc",style:{"--ca":"var(--red)"}},{default:T(()=>[...s[3]||(s[3]=[t("div",{class:"pc-i"},"🚨",-1),t("div",{class:"pc-t"},"错误诊断",-1),t("div",{class:"pc-d"},"SCF 不收敛、内存溢出、文件错误等",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 按需查阅"),t("span",null,"📖 5 类问题")],-1)])]),_:1}),w(p,{to:"/tools",class:"pc",style:{"--ca":"var(--accent)"}},{default:T(()=>[...s[4]||(s[4]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"工具与速查",-1),t("div",{class:"pc-d"},"VESTA、VASPKIT、pymatgen 等辅助工具",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 1h")],-1)])]),_:1})]),s[8]||(s[8]=i('<h2 class="stitle">VASP 计算流程</h2><div class="fc"><div class="fn2-node s">🧱 确定材料结构</div><div class="fa"></div><div class="fn2-node p">📝 编写 POSCAR</div><div class="fa"></div><div class="fn2-node p">⚛️ 准备 POTCAR</div><div class="fa"></div><div class="fn2-node p">🔲 设置 KPOINTS</div><div class="fa"></div><div class="fn2-node p">⚙️ 配置 INCAR</div><div class="fa"></div><div class="fn2-node p">🚀 提交计算</div><div class="fa"></div><div class="fn2-node p">🔍 检查收敛</div><div class="fa"></div><div class="fn2-node e">✅ 提取物理量</div></div>',2))])}const Mi=J(Ii,[["render",qi]]),Di={name:"TheoryView",data(){return{openSections:{q1:!0,q2:!0,q3:!0}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Fi={class:"sec active"},Vi={class:"bread"},Gi={class:"cb"},$i={class:"ch"},Bi={class:"cb"},Li={class:"ch"},Ui={class:"cb"},Ki={class:"ch"};function Hi(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Fi,[t("div",Vi,[w(d,{to:"/"},{default:T(()=>[...s[6]||(s[6]=[f("首页",-1)])]),_:1}),s[7]||(s[7]=f("/",-1)),s[8]||(s[8]=t("span",null,"理论基础",-1))]),s[21]||(s[21]=i(`<h2>DFT 基本原理</h2><p>密度泛函理论（DFT）是 VASP 的理论基石，将多电子问题简化为单电子问题。</p><h3>1. Hohenberg-Kohn 定理</h3><ul><li><strong>第一定理：</strong>多电子体系的基态性质由电子密度 n(r) 唯一确定</li><li><strong>第二定理：</strong>基态能量可通过能量泛函 E[n] 对密度的变分得到</li></ul><div class="ib note"><strong>核心思想：</strong>将求解 3N 维波函数的问题简化为求解 3 维电子密度，大幅降低计算复杂度。</div><h3>2. Kohn-Sham 方程</h3><div class="cb"><div class="ch"><span class="la">公式</span></div><pre><code>⎡ -∇²/2 + V_eff(r) ⎤ φᵢ(r) = εᵢ φᵢ(r)
⎣                   ⎦

V_eff(r) = V_ext(r) + V_H(r) + V_xc(r)

- V_ext(r) ：外势（原子核产生的势）
- V_H(r)   ：Hartree 势（经典库仑作用）
- V_xc(r)  ：交换关联势（量子效应）</code></pre></div><h3>3. 自洽场（SCF）迭代</h3><div class="fc"><div class="fn2-node s">猜测初始电子密度 n(r)</div><div class="fa"></div><div class="fn2-node p">构建有效势 V_eff(r)</div><div class="fa"></div><div class="fn2-node p">求解 Kohn-Sham 方程 → φᵢ, εᵢ</div><div class="fa"></div><div class="fn2-node p">计算新密度 n_new(r)</div><div class="fa"></div><div class="fn2-node p">判断收敛 |n_new - n_old| &lt; ε ?</div><div class="fa"></div><div class="fn2-node e">输出基态能量和电子结构</div></div><h3>4. 交换关联泛函</h3><table class="tb"><thead><tr><th>层级</th><th>名称</th><th>精度</th><th>成本</th><th>适用</th></tr></thead><tbody><tr><td><strong>LDA</strong></td><td>局域密度近似</td><td>一般</td><td>低</td><td>金属晶格常数</td></tr><tr><td><strong>GGA</strong></td><td>广义梯度近似</td><td>较好</td><td>低</td><td>最常用（PBE）</td></tr><tr><td><strong>杂化</strong></td><td>HSE06/PBE0</td><td>很好</td><td>高</td><td>带隙</td></tr><tr><td><strong>GW</strong></td><td>多体微扰</td><td>极好</td><td>极高</td><td>准粒子能带</td></tr></tbody></table><div class="ib tip"><strong>建议：</strong>初学者从 <code class="ic">PBE</code> 开始，VASP 中通过 POTCAR 文件控制（PAW_PBE 对应 PBE）。</div><h3>5. 赝势方法详解</h3><p>VASP 使用 <strong>PAW（投影缀加波）</strong>方法，比超软赝势更精确，比全电子计算更高效。</p><table class="tb"><thead><tr><th>赝势类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>6. 平面波基组</h3><p>VASP 使用平面波作为基组，截断能 <code>ENCUT</code> 决定基组大小。</p><div class="fb"><div class="fm">E<sub>cut</sub> = ℏ²G<sub>max</sub>² / 2m</div><div class="fd">G<sub>max</sub>: 最大平面波矢量, E<sub>cut</sub>: 截断能</div></div><table class="tb"><thead><tr><th>截断能</th><th>精度</th><th>计算成本</th><th>适用场景</th></tr></thead><tbody><tr><td>&lt; 200 eV</td><td>低</td><td>低</td><td>初步测试</td></tr><tr><td>200-400 eV</td><td>中</td><td>中</td><td>常规计算</td></tr><tr><td>400-600 eV</td><td>高</td><td>高</td><td>精确计算</td></tr><tr><td>&gt; 600 eV</td><td>极高</td><td>极高</td><td>特殊体系</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>7. K 点采样</h3><p>在周期性体系中，电子波函数满足布洛赫定理，需要在倒空间（k 空间）进行积分。</p><div class="fb"><div class="fm">⟨O⟩ = (1/Nₖ) × Σ wₖ × O(kₖ)</div><div class="fd">离散 k 点求和代替布里渊区积分</div></div><h4>K 点密度经验公式</h4><div class="ib tip"><strong>经验法则：</strong><code class="ic">N_k × a ≈ 30</code>（a 为晶格常数，单位 Å）<br>例如 a = 5.43 Å → N_k ≈ 30/5.43 ≈ 6 → 使用 6×6×6 网格</div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr></tbody></table><h3>8. DFT 与 VASP 参数对照表</h3><table class="tb"><thead><tr><th>DFT 概念</th><th>VASP 参数</th><th>物理意义</th><th>设置建议</th></tr></thead><tbody><tr><td>交换关联泛函</td><td><code>POTCAR</code></td><td>近似处理电子关联</td><td>初学用 PBE</td></tr><tr><td>平面波截断</td><td><code>ENCUT</code></td><td>基组大小</td><td>1.3 × ENMAX</td></tr><tr><td>布里渊区积分</td><td><code>KPOINTS</code></td><td>倒空间采样</td><td>N_k × a ≈ 30</td></tr><tr><td>收敛标准</td><td><code>EDIFF</code></td><td>电子步收敛阈值</td><td>1E-6</td></tr><tr><td>展宽方法</td><td><code>ISMEAR</code></td><td>费米面处理</td><td>金属用 1，绝缘体用 0</td></tr><tr><td>展宽宽度</td><td><code>SIGMA</code></td><td>展宽能量范围</td><td>0.05-0.2 eV</td></tr></tbody></table><h3>9. 理论与计算的联系</h3><div class="db"><div class="db-t">从理论到计算的思考方式</div><p><strong>1. 明确计算目标</strong></p><ul><li>结构优化 → 关注力收敛 (<code>EDIFFG</code>)</li><li>电子结构 → 关注 k 点和带隙</li><li>热力学性质 → 关注能量精度</li></ul><p><strong>2. 选择合适的泛函</strong></p><ul><li>定性分析 → PBE 足够</li><li>精确带隙 → 需要 HSE06</li><li>强关联体系 → 需要 +U</li></ul><p><strong>3. 验证计算精度</strong></p><ul><li>做收敛性测试 (ENCUT, K 点)</li><li>与实验值或文献比较</li><li>检查结果的物理合理性</li></ul></div><h3>10. 实际案例：Si 的计算</h3>`,32)),t("div",Gi,[t("div",$i,[s[9]||(s[9]=t("span",{class:"la"},"POSCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="vr">Si diamond</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  5.43</span>
<span class="vr">Si</span>
<span class="nu">2</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),t("div",Bi,[t("div",Li,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"Si 结构优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 1.3 × ENMAX(Si)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子收敛标准</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),t("div",Ui,[t("div",Ki,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; N_k × 5.43 ≈ 30</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[22]||(s[22]=i('<div class="ib tip"><strong>预期结果：</strong>Si 晶格常数 ~5.43 Å，带隙 ~0.6 eV (PBE 低估，实验值 1.1 eV)</div><h3>11. 泛函选择指南</h3><table class="tb"><thead><tr><th>计算目标</th><th>推荐泛函</th><th>理由</th></tr></thead><tbody><tr><td>结构优化</td><td>PBE</td><td>快速，晶格常数准确</td></tr><tr><td>形成能</td><td>PBE</td><td>系统误差小</td></tr><tr><td>精确带隙</td><td>HSE06</td><td>带隙准确</td></tr><tr><td>磁性材料</td><td>PBE+U</td><td>处理强关联</td></tr><tr><td>范德华材料</td><td>PBE-D3</td><td>包含 vdW 修正</td></tr><tr><td>高精度能量</td><td>RPA/GW</td><td>最准确但最慢</td></tr></tbody></table><h3>12. 常见问题与解答</h3>',4)),t("div",{class:"ec open",onClick:s[3]||(s[3]=p=>l.toggle("q1"))},[...s[18]||(s[18]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"为什么 PBE 低估带隙？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"PBE 泛函的自相互作用误差导致带隙被系统性低估。这不是 VASP 的问题，而是 DFT 泛函的固有限制。解决方案是使用杂化泛函 (HSE06) 或 GW 方法。")],-1)])]),t("div",{class:"ec open",onClick:s[4]||(s[4]=p=>l.toggle("q2"))},[...s[19]||(s[19]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"如何判断 ENCUT 是否足够？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"做 ENCUT 收敛测试：计算不同 ENCUT 下的能量，当相邻 ENCUT 能量差 < 1 meV/atom 时，认为收敛。通常 ENCUT = 1.3 × ENMAX(max) 是安全的起点。")],-1)])]),t("div",{class:"ec open",onClick:s[5]||(s[5]=p=>l.toggle("q3"))},[...s[20]||(s[20]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"什么时候需要 +U？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"当体系含有 3d/4f 电子（如过渡金属氧化物）时，DFT 的局域近似处理不好电子强关联，导致带隙为零或磁矩错误。添加 Hubbard U 可以修正这个问题。常见 U 值：Fe: 4.0 eV, Co: 3.3 eV, Ni: 6.0 eV, Cu: 4.0 eV。")],-1)])])])}const Wi=J(Di,[["render",Hi]]),ji={name:"QuickRef",data(){return{activeTab:"incar",tabs:[{id:"incar",name:"INCAR"},{id:"ismear",name:"ISMEAR"},{id:"ibrion",name:"IBRION"},{id:"isif",name:"ISIF"}],incarParams:[{name:"ENCUT",desc:"平面波截断能",value:"400-600 eV"},{name:"EDIFF",desc:"电子步收敛标准",value:"1E-6"},{name:"EDIFFG",desc:"离子步收敛标准",value:"-0.02 eV/Å"},{name:"PREC",desc:"计算精度",value:"Accurate"},{name:"NSW",desc:"最大离子步数",value:"100-200"},{name:"NELM",desc:"最大电子步数",value:"60-200"},{name:"NBANDS",desc:"能带数目",value:"auto 或 NELECT/2+N"},{name:"LREAL",desc:"实空间投影",value:"Auto (>50原子)"}],ismearParams:[{value:"-5",method:"四面体法",use:"绝缘体/半导体 DOS",sigma:"自动"},{value:"-4",method:"四面体+Blochl",use:"金属 DOS",sigma:"自动"},{value:"0",method:"Gaussian",use:"半导体/绝缘体",sigma:"0.05"},{value:"1",method:"MP 展宽",use:"金属",sigma:"0.2"},{value:"2",method:"MP 改进",use:"金属 (更平滑)",sigma:"0.2"}],ibrionParams:[{value:"-1",method:"不动",desc:"静态计算或 MD"},{value:"0",method:"MD",desc:"分子动力学"},{value:"1",method:"RMM-DIIS",desc:"准牛顿法 (推荐)"},{value:"2",method:"CG",desc:"共轭梯度法"},{value:"3",method:"Damped MD",desc:"阻尼分子动力学"}],isifParams:[{value:"2",optimize:"仅离子位置",use:"表面计算、分子吸附"},{value:"3",optimize:"离子+晶格(体积+形状)",use:"体相优化 (最常用)"},{value:"4",optimize:"离子+晶格形状",use:"固定体积优化"},{value:"5",optimize:"仅晶格(体积+形状)",use:"固定离子"},{value:"6",optimize:"仅晶格形状",use:"固定体积+离子"},{value:"7",optimize:"仅晶格体积",use:"固定形状+离子"}]}}},zi={class:"quick-ref"},Yi={class:"ref-tabs"},Zi=["onClick"],Xi={class:"ref-content"},Ji={key:0,class:"ref-table"},Qi={class:"ref-cell code"},_i={class:"ref-cell"},su={class:"ref-cell code"},nu={key:1,class:"ref-table"},tu={class:"ref-cell code"},au={class:"ref-cell"},lu={class:"ref-cell"},pu={class:"ref-cell code"},eu={key:2,class:"ref-table"},ou={class:"ref-cell code"},du={class:"ref-cell"},ru={class:"ref-cell"},cu={key:3,class:"ref-table"},iu={class:"ref-cell code"},uu={class:"ref-cell"},fu={class:"ref-cell"};function mu(n,s,a,e,o,l){return D(),F("div",zi,[s[4]||(s[4]=t("h3",null,"快速参考",-1)),t("div",Yi,[(D(!0),F(ks,null,xn(o.tabs,d=>(D(),F("button",{key:d.id,class:j(["ref-tab",{active:o.activeTab===d.id}]),onClick:p=>o.activeTab=d.id},Z(d.name),11,Zi))),128))]),t("div",Xi,[o.activeTab==="incar"?(D(),F("div",Ji,[s[0]||(s[0]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"参数"),t("div",{class:"ref-cell"},"说明"),t("div",{class:"ref-cell"},"常用值")],-1)),(D(!0),F(ks,null,xn(o.incarParams,d=>(D(),F("div",{key:d.name,class:"ref-row"},[t("div",Qi,Z(d.name),1),t("div",_i,Z(d.desc),1),t("div",su,Z(d.value),1)]))),128))])):Sn("",!0),o.activeTab==="ismear"?(D(),F("div",nu,[s[1]||(s[1]=i('<div class="ref-row header" data-v-b684b753><div class="ref-cell" data-v-b684b753>ISMEAR</div><div class="ref-cell" data-v-b684b753>方法</div><div class="ref-cell" data-v-b684b753>适用场景</div><div class="ref-cell" data-v-b684b753>SIGMA</div></div>',1)),(D(!0),F(ks,null,xn(o.ismearParams,d=>(D(),F("div",{key:d.value,class:"ref-row"},[t("div",tu,Z(d.value),1),t("div",au,Z(d.method),1),t("div",lu,Z(d.use),1),t("div",pu,Z(d.sigma),1)]))),128))])):Sn("",!0),o.activeTab==="ibrion"?(D(),F("div",eu,[s[2]||(s[2]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"IBRION"),t("div",{class:"ref-cell"},"方法"),t("div",{class:"ref-cell"},"说明")],-1)),(D(!0),F(ks,null,xn(o.ibrionParams,d=>(D(),F("div",{key:d.value,class:"ref-row"},[t("div",ou,Z(d.value),1),t("div",du,Z(d.method),1),t("div",ru,Z(d.desc),1)]))),128))])):Sn("",!0),o.activeTab==="isif"?(D(),F("div",cu,[s[3]||(s[3]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"ISIF"),t("div",{class:"ref-cell"},"优化内容"),t("div",{class:"ref-cell"},"适用场景")],-1)),(D(!0),F(ks,null,xn(o.isifParams,d=>(D(),F("div",{key:d.value,class:"ref-row"},[t("div",iu,Z(d.value),1),t("div",uu,Z(d.optimize),1),t("div",fu,Z(d.use),1)]))),128))])):Sn("",!0)])])}const bu=J(ji,[["render",mu],["__scopeId","data-v-b684b753"]]),gu={name:"InputView",components:{QuickRef:bu},methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},vu={class:"sec active"},hu={class:"bread"},yu={class:"cb"},ku={class:"ch"},Cu={class:"cb"},wu={class:"ch"},Su={class:"cb"},Au={class:"ch"},Eu={class:"cb"},Tu={class:"ch"},Ru={class:"cb"},Ou={class:"ch"},Pu={class:"cb"},Iu={class:"ch"},xu={class:"cb"},Nu={class:"ch"},qu={class:"cb"},Mu={class:"ch"},Du={class:"cb"},Fu={class:"ch"},Vu={class:"cb"},Gu={class:"ch"},$u={class:"cb"},Bu={class:"ch"},Lu={class:"cb"},Uu={class:"ch"},Ku={class:"cb"},Hu={class:"ch"},Wu={class:"cb"},ju={class:"ch"},zu={class:"cb"},Yu={class:"ch"},Zu={class:"cb"},Xu={class:"ch"},Ju={class:"cb"},Qu={class:"ch"};function _u(n,s,a,e,o,l){const d=X("router-link"),p=X("QuickRef");return D(),F("div",vu,[t("div",hu,[w(d,{to:"/"},{default:T(()=>[...s[17]||(s[17]=[f("首页",-1)])]),_:1}),s[18]||(s[18]=f("/",-1)),s[19]||(s[19]=t("span",null,"输入文件",-1))]),s[69]||(s[69]=i('<h2>VASP 输入文件总览</h2><p>VASP 需要 <strong>4 个核心输入文件</strong>，正确设置这些文件是成功计算的基础。</p><div class="ft"><div class="ft-i"><span style="color:var(--blue);">📄</span> INCAR — 控制参数（告诉 VASP 做什么）</div><div class="ft-i"><span style="color:var(--green);">📄</span> POSCAR — 晶体结构（告诉 VASP 计算什么）</div><div class="ft-i"><span style="color:var(--purple);">📄</span> KPOINTS — k 点网格（控制精度）</div><div class="ft-i"><span style="color:var(--red);">📄</span> POTCAR — 赝势文件（定义元素）</div></div><div class="ib warn"><strong>注意：</strong>POTCAR 中元素的顺序必须与 POSCAR 中的元素顺序一致！</div>',4)),w(p),s[70]||(s[70]=t("h2",null,"INCAR 文件详解",-1)),s[71]||(s[71]=t("p",null,"INCAR 是 VASP 最核心的控制文件，决定计算类型和精度。",-1)),s[72]||(s[72]=t("h3",null,"1. 基本结构",-1)),t("div",yu,[t("div",ku,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"结构优化示例",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[22]||(s[22]=i(`<pre><code><span class="cm"># 注释以 # 或 ; 开头</span>
<span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>  <span class="cm">; 计算名称</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 截断能 (eV)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>         <span class="cm">; 精度模式</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子步收敛标准</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; 优化算法</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步数</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化类型</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>            <span class="cm">; 离子步收敛标准</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; 展宽方法</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),s[73]||(s[73]=i('<h3>2. 参数格式规则</h3><table class="tb"><thead><tr><th>规则</th><th>正确写法</th><th>错误写法</th></tr></thead><tbody><tr><td>等号两边空格</td><td><code>ENCUT = 400</code></td><td><code>ENCUT=400</code></td></tr><tr><td>布尔值大写</td><td><code>.TRUE.</code></td><td><code>.true.</code></td></tr><tr><td>字符串引号</td><td><code>&#39;string&#39;</code> 或无</td><td><code>&quot;string&quot;</code></td></tr><tr><td>注释符号</td><td><code>#</code> 或 <code>;</code></td><td><code>//</code></td></tr></tbody></table><h3>3. ENCUT 截断能</h3><p>截断能决定平面波基组大小，是最关键的精度参数。</p><table class="tb"><thead><tr><th>设置方式</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT = 400</code></td><td>直接指定 (eV)</td></tr><tr><td><code>ENCUT = 1.3</code></td><td>乘以 ENMAX（POTCAR 中的值）</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>4. IBRION 优化算法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算或 MD</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td><strong>推荐默认</strong></td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼 MD</td><td>特殊体系</td></tr></tbody></table><h3>5. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td><strong>体相优化（最常用）</strong></td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格</td></tr></tbody></table><div class="ib warn"><strong>重要：</strong>表面计算必须用 <code>ISIF=2</code>，否则晶格会塌陷！</div><h3>6. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>7. EDIFF 和 EDIFFG</h3><table class="tb"><thead><tr><th>参数</th><th>含义</th><th>常用值</th><th>说明</th></tr></thead><tbody><tr><td><code>EDIFF</code></td><td>电子步收敛</td><td>1E-6</td><td>能量变化阈值</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛</td><td>-0.02</td><td>负值=力, 正值=能量</td></tr></tbody></table><div class="ib note"><strong>EDIFFG 解释：</strong><ul><li><code>EDIFFG = -0.02</code>：最大力收敛到 0.02 eV/Å</li><li><code>EDIFFG = 1E-4</code>：能量变化收敛到 0.0001 eV</li></ul></div><h3>8. 并行参数</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',18)),t("div",Cu,[t("div",wu,[s[23]||(s[23]=t("span",{class:"la"},"INCAR",-1)),s[24]||(s[24]=t("span",{class:"fn"},"并行设置（64 核，4 节点）",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 64 核 = 4 节点 × 16 核</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>                <span class="cm">; 节点数</span>
<span class="kw">KPAR</span>     = <span class="nu">2</span>                <span class="cm">; K 点并行（整除 K 点数）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>               <span class="cm">; 每节点核心数</span></code></pre>`,1))]),s[74]||(s[74]=t("h3",null,"9. 性能优化参数",-1)),t("div",Su,[t("div",Au,[s[26]||(s[26]=t("span",{class:"la"},"INCAR",-1)),s[27]||(s[27]=t("span",{class:"fn"},"大体系优化",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[28]||(s[28]=i(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>             <span class="cm">; 实空间计算投影算符</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>             <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>               <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>           <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>           <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>                <span class="cm">; 减少输出</span></code></pre>`,1))]),s[75]||(s[75]=t("h2",null,"POSCAR 文件详解",-1)),s[76]||(s[76]=t("p",null,"POSCAR 定义晶体结构，包括晶格和原子坐标。",-1)),s[77]||(s[77]=t("h3",null,"1. 完整格式",-1)),t("div",Eu,[t("div",Tu,[s[29]||(s[29]=t("span",{class:"la"},"POSCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"格式详解",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[31]||(s[31]=i(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 第 1 行：注释（任意文字）</span>
<span class="nu">1.0</span>                           <span class="cm">; 第 2 行：缩放因子（通常 1.0）</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 第 3 行：晶格矢量 a (×缩放因子)</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 第 4 行：晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 第 5 行：晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 第 6 行：元素符号（空格分隔）</span>
<span class="nu">2</span>                              <span class="cm">; 第 7 行：每种元素的原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 第 8 行：坐标类型</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; 第 9 行起：原子坐标</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),s[78]||(s[78]=i('<h3>2. 坐标类型</h3><table class="tb"><thead><tr><th>类型</th><th>关键字</th><th>格式</th><th>适用场景</th></tr></thead><tbody><tr><td>分数坐标</td><td><code>Direct</code></td><td>0~1</td><td>最常用</td></tr><tr><td>笛卡尔坐标</td><td><code>Cartesian</code></td><td>Å</td><td>分子/团簇</td></tr></tbody></table><h3>3. 选择性动力学</h3><p>允许固定部分原子，常用于表面计算。</p>',4)),t("div",Ru,[t("div",Ou,[s[32]||(s[32]=t("span",{class:"la"},"POSCAR",-1)),s[33]||(s[33]=t("span",{class:"fn"},"选择性动力学",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[34]||(s[34]=i(`<pre><code><span class="vr">Si surface</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  15.0</span>            <span class="cm">; 真空层</span>
<span class="vr">Si</span>
<span class="nu">4</span>
<span class="kw">Selective dynamics</span>           <span class="cm">; 开启选择性动力学</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>  <span class="st">F F F</span>   <span class="cm">; F=固定，T=可动 (x,y,z)</span>
<span class="nu">0.25  0.25  0.25</span>  <span class="st">F F F</span>   <span class="cm">; 底部固定层</span>
<span class="nu">0.50  0.50  0.50</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span>
<span class="nu">0.75  0.75  0.75</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span></code></pre>`,1))]),s[79]||(s[79]=t("h3",null,"4. 多元素体系",-1)),t("div",Pu,[t("div",Iu,[s[35]||(s[35]=t("span",{class:"la"},"POSCAR",-1)),s[36]||(s[36]=t("span",{class:"fn"},"TiO2 示例",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[37]||(s[37]=i(`<pre><code><span class="vr">TiO2 rutile</span>
<span class="nu">1.0</span>
<span class="nu">4.59  0.00  0.00</span>
<span class="nu">0.00  4.59  0.00</span>
<span class="nu">0.00  0.00  2.96</span>
<span class="vr">Ti O</span>                          <span class="cm">; 先 Ti 后 O</span>
<span class="nu">2 4</span>                            <span class="cm">; Ti 2 个，O 4 个</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Ti 原子 1</span>
<span class="nu">0.50  0.50  0.50</span>             <span class="cm">; Ti 原子 2</span>
<span class="nu">0.30  0.30  0.00</span>             <span class="cm">; O 原子 1</span>
<span class="nu">0.70  0.70  0.00</span>             <span class="cm">; O 原子 2</span>
<span class="nu">0.80  0.20  0.50</span>             <span class="cm">; O 原子 3</span>
<span class="nu">0.20  0.80  0.50</span>             <span class="cm">; O 原子 4</span></code></pre>`,1))]),s[80]||(s[80]=t("div",{class:"ib warn"},[t("strong",null,"重要："),f("POSCAR 中元素顺序必须与 POTCAR 一致！")],-1)),s[81]||(s[81]=t("h2",null,"KPOINTS 文件详解",-1)),s[82]||(s[82]=t("p",null,"KPOINTS 定义倒空间采样网格，控制计算精度。",-1)),s[83]||(s[83]=t("h3",null,"1. 自动网格模式（最常用）",-1)),t("div",xu,[t("div",Nu,[s[38]||(s[38]=t("span",{class:"la"},"KPOINTS",-1)),s[39]||(s[39]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[40]||(s[40]=i(`<pre><code><span class="vr">Automatic mesh</span>               <span class="cm">; 注释行</span>
<span class="nu">0</span>                             <span class="cm">; 0 = 自动生成</span>
<span class="kw">Gamma</span>                         <span class="cm">; Gamma 中心网格</span>
<span class="nu">4  4  4</span>                       <span class="cm">; K 点网格</span>
<span class="nu">0.0  0.0  0.0</span>                <span class="cm">; 偏移量</span></code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"2. Monkhorst-Pack 网格",-1)),t("div",qu,[t("div",Mu,[s[41]||(s[41]=t("span",{class:"la"},"KPOINTS",-1)),s[42]||(s[42]=t("span",{class:"fn"},"Monkhorst-Pack",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[43]||(s[43]=i(`<pre><code><span class="vr">Monkhorst-Pack mesh</span>
<span class="nu">0</span>
<span class="kw">Monkhorst</span>                     <span class="cm">; MP 网格（与 Gamma 不同偏移）</span>
<span class="nu">4  4  4</span>
<span class="nu">0.5  0.5  0.5</span>                <span class="cm">; 偏移 0.5</span></code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"3. Line-mode（能带计算）",-1)),t("div",Du,[t("div",Fu,[s[44]||(s[44]=t("span",{class:"la"},"KPOINTS",-1)),s[45]||(s[45]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[46]||(s[46]=i(`<pre><code><span class="vr">k-points along high symmetry lines</span>
<span class="nu">20</span>                             <span class="cm">; 每条线段的点数</span>
<span class="kw">Line-mode</span>                      <span class="cm">; 线模式</span>
<span class="kw">Reciprocal</span>                     <span class="cm">; 倒空间坐标</span>

<span class="cm">; Γ → X</span>
<span class="nu">0.000  0.000  0.000</span>           <span class="cm">; 起点</span>
<span class="nu">0.500  0.000  0.000</span>           <span class="cm">; 终点</span>

<span class="cm">; X → W （注意空行分隔！）</span>
<span class="nu">0.500  0.000  0.000</span>
<span class="nu">0.500  0.250  0.000</span>

<span class="cm">; W → Γ</span>
<span class="nu">0.500  0.250  0.000</span>
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[86]||(s[86]=i(`<div class="ib warn"><strong>注意：</strong>Line-mode 需要空行分隔每条线段！</div><h3>4. K 点密度建议</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td><code>1×1×1</code></td><td>无周期性</td></tr></tbody></table><h2>POTCAR 文件详解</h2><p>POTCAR 包含赝势信息，定义元素的电子结构。</p><h3>1. 关键信息</h3><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>2. 赝势类型</h3><table class="tb"><thead><tr><th>类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><h3>3. 生成 POTCAR</h3>`,11)),t("div",Vu,[t("div",Gu,[s[47]||(s[47]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[48]||(s[48]=i(`<pre><code><span class="cm"># 方法 1：手动拼接（注意顺序！）</span>
<span class="fn2">cat</span> ~/potpaw_PBE/Ti/POTCAR &gt; POTCAR
<span class="fn2">cat</span> ~/potpaw_PBE/O/POTCAR &gt;&gt; POTCAR

<span class="cm"># 方法 2：使用 vaspkit</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 1 → Generate POTCAR</span>
<span class="cm"># 输入元素：Ti O</span>

<span class="cm"># 方法 3：使用 pymatgen</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Potcar
p = Potcar([<span class="st">&#39;Ti&#39;</span>, <span class="st">&#39;O&#39;</span>], functional=<span class="st">&#39;PBE&#39;</span>)
p.write_file(<span class="st">&#39;POTCAR&#39;</span>)
&quot;</code></pre>`,1))]),s[87]||(s[87]=t("h3",null,"4. 检查 POTCAR",-1)),t("div",$u,[t("div",Bu,[s[49]||(s[49]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[50]||(s[50]=i(`<pre><code><span class="cm"># 查看元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看价电子数</span>
<span class="fn2">grep</span> ZVAL POTCAR

<span class="cm"># 确认顺序与 POSCAR 一致</span>
<span class="fn2">head</span> -6 POSCAR  <span class="cm"># 查看 POSCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR <span class="cm"># 查看 POTCAR 元素</span></code></pre>`,1))]),s[88]||(s[88]=t("h2",null,"常用 INCAR 模板",-1)),s[89]||(s[89]=t("h3",null,"1. 金属结构优化",-1)),t("div",Lu,[t("div",Uu,[s[51]||(s[51]=t("span",{class:"la"},"INCAR",-1)),s[52]||(s[52]=t("span",{class:"fn"},"金属优化",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[53]||(s[53]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Metal relaxation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 MP 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>               <span class="cm">; 较大的展宽</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"2. 绝缘体 DOS 计算",-1)),t("div",Ku,[t("div",Hu,[s[54]||(s[54]=t("span",{class:"la"},"INCAR",-1)),s[55]||(s[55]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[56]||(s[56]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Insulator DOS</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span></code></pre>`,1))]),s[91]||(s[91]=t("h3",null,"3. 表面计算",-1)),t("div",Wu,[t("div",ju,[s[57]||(s[57]=t("span",{class:"la"},"INCAR",-1)),s[58]||(s[58]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[59]||(s[59]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Surface optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">450</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>                <span class="cm">; 表面必须 ISIF=2</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>
<span class="kw">LDIPOL</span>   = <span class="nu">.TRUE.</span>           <span class="cm">; 偶极校正</span>
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>                <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[92]||(s[92]=t("h3",null,"4. 磁性计算",-1)),t("div",zu,[t("div",Yu,[s[60]||(s[60]=t("span",{class:"la"},"INCAR",-1)),s[61]||(s[61]=t("span",{class:"fn"},"磁性优化",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[62]||(s[62]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Magnetic calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>                <span class="cm">; 开启自旋极化</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>          <span class="cm">; 初始磁矩 (μB)</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"5. DFT+U 计算",-1)),t("div",Zu,[t("div",Xu,[s[63]||(s[63]=t("span",{class:"la"},"INCAR",-1)),s[64]||(s[64]=t("span",{class:"fn"},"DFT+U",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[65]||(s[65]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DFT+U calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>

<span class="cm"># DFT+U 参数</span>
<span class="kw">LDAU</span>     = <span class="nu">.TRUE.</span>
<span class="kw">LDAUTYPE</span> = <span class="nu">2</span>                <span class="cm">; Dudarev 方法</span>
<span class="kw">LDAUL</span>    = <span class="nu">2 -1 -1</span>          <span class="cm">; l 量子数 (2=d轨道)</span>
<span class="kw">LDAUU</span>    = <span class="nu">4.0 0 0</span>          <span class="cm">; U 值 (eV)</span>
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>          <span class="cm">; J 值</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"6. 杂化泛函 (HSE06)",-1)),t("div",Ju,[t("div",Qu,[s[66]||(s[66]=t("span",{class:"la"},"INCAR",-1)),s[67]||(s[67]=t("span",{class:"fn"},"HSE06",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[68]||(s[68]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">HSE06 calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="cm"># HSE06 参数</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>              <span class="cm">; HF 混合比例</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>               <span class="cm">; 屏蔽长度</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>            <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[95]||(s[95]=t("div",{class:"ib warn"},[t("strong",null,"注意："),f("HSE06 计算量约为 PBE 的 10-100 倍，需要足够的计算资源。")],-1))])}const sf=J(gu,[["render",_u]]),nf={name:"TasksView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},tf={class:"sec active"},af={class:"bread"},lf={class:"cb"},pf={class:"ch"},ef={class:"cb"},of={class:"ch"},df={class:"cb"},rf={class:"ch"},cf={class:"cb"},uf={class:"ch"},ff={class:"cb"},mf={class:"ch"},bf={class:"cb"},gf={class:"ch"},vf={class:"cb"},hf={class:"ch"},yf={class:"cb"},kf={class:"ch"},Cf={class:"cb"},wf={class:"ch"},Sf={class:"cb"},Af={class:"ch"},Ef={class:"cb"},Tf={class:"ch"},Rf={class:"cb"},Of={class:"ch"},Pf={class:"cb"},If={class:"ch"},xf={class:"cb"},Nf={class:"ch"};function qf(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",tf,[t("div",af,[w(d,{to:"/"},{default:T(()=>[...s[14]||(s[14]=[f("首页",-1)])]),_:1}),s[15]||(s[15]=f("/",-1)),s[16]||(s[16]=t("span",null,"计算任务",-1))]),s[58]||(s[58]=i('<h2>计算任务总览</h2><p>VASP 可以执行多种计算任务，每种任务有特定的参数设置和工作流程。</p><h3>基础计算</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔄</div><div class="pc-t">结构优化</div><div class="pc-d">弛豫原子位置和晶格参数</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">📈</div><div class="pc-t">态密度 DOS</div><div class="pc-d">电子态在能量上的分布</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📉</div><div class="pc-t">能带结构</div><div class="pc-d">沿高对称路径的能带色散</div></div></div><h2>结构优化</h2><p>结构优化是最基本的计算任务，目的是找到能量最低的原子构型。</p><h3>1. 何时需要结构优化</h3><ul><li>从实验结构或文献结构开始计算</li><li>构建了新的表面或缺陷结构</li><li>需要计算准确的晶格参数</li><li>后续计算（DOS、能带等）需要在优化结构上进行</li></ul><h3>2. 完整输入文件</h3><h4>INCAR</h4>',10)),t("div",lf,[t("div",pf,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"体相结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk relaxation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 截断能 (eV)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>         <span class="cm">; 精度模式</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子步收敛标准</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化算法</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>              <span class="cm">; 最大离子步数</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格(体积+形状)</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>            <span class="cm">; 力收敛标准 (eV/Å)</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽（半导体）</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度 (eV)</span></code></pre>`,1))]),s[59]||(s[59]=t("h4",null,"POSCAR",-1)),t("div",ef,[t("div",of,[s[20]||(s[20]=t("span",{class:"la"},"POSCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[22]||(s[22]=i(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 注释行</span>
<span class="nu">1.0</span>                           <span class="cm">; 缩放因子</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 晶格矢量 a</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 元素符号</span>
<span class="nu">2</span>                              <span class="cm">; 原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 分数坐标</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Si 原子 1</span>
<span class="nu">0.25  0.25  0.25</span>             <span class="cm">; Si 原子 2</span></code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"KPOINTS",-1)),t("div",df,[t("div",rf,[s[23]||(s[23]=t("span",{class:"la"},"KPOINTS",-1)),s[24]||(s[24]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; K 点网格 (N_k × a ≈ 30)</span>
<span class="nu">0.0  0.0  0.0</span>         <span class="cm">; 偏移</span></code></pre>`,1))]),s[61]||(s[61]=i('<h3>3. ISIF 参数详解</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用场景</th></tr></thead><tbody><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附、固定晶格</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化（最常用）</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积、优化形状</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格、固定离子</td></tr></tbody></table><h3>4. 结果验证</h3>',3)),t("div",cf,[t("div",uf,[s[26]||(s[26]=t("span",{class:"la"},"bash",-1)),s[27]||(s[27]=t("span",{class:"fn"},"验证收敛",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[28]||(s[28]=i(`<pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR

<span class="cm"># 查看最终能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR</code></pre>`,1))]),s[62]||(s[62]=i('<div class="ib tip"><strong>收敛标准：</strong>最大力 &lt; 0.02 eV/Å，外部压力 &lt; 1 kbar 表示优化收敛良好。</div><h2>态密度 DOS 计算</h2><p>DOS 计算需要两步：① 结构优化 ② 静态计算（密集 k 点）</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">复制 CONTCAR → DOS 计算目录</div><div class="fa"></div><div class="fn2-node p">设置密集 K 点（12×12×12）</div><div class="fa"></div><div class="fn2-node p">运行静态计算</div><div class="fa"></div><div class="fn2-node e">处理 DOSCAR 数据</div></div><h3>2. DOS 计算输入文件</h3>',6)),t("div",ff,[t("div",mf,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"DOS 静态计算",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[31]||(s[31]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si DOS calculation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="cm"># 静态计算设置</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="cm"># DOS 特殊设置</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span>

<span class="cm"># 输出设置</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>            <span class="cm">; 保留波函数（用于能带）</span>
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span>            <span class="cm">; 保留电荷密度</span></code></pre>`,1))]),t("div",bf,[t("div",gf,[s[32]||(s[32]=t("span",{class:"la"},"KPOINTS",-1)),s[33]||(s[33]=t("span",{class:"fn"},"密集 K 点",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[34]||(s[34]=i(`<pre><code><span class="vr">DOS k-points</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">12  12  12</span>              <span class="cm">; DOS 需要更密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[63]||(s[63]=t("div",{class:"ib note"},[t("strong",null,"ISMEAR 选择："),f("绝缘体/半导体用 -5（四面体），金属用 0（Gaussian）配合 SIGMA=0.05。")],-1)),s[64]||(s[64]=t("h3",null,"3. 处理 DOS 数据",-1)),t("div",vf,[t("div",hf,[s[35]||(s[35]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[36]||(s[36]=i(`<pre><code><span class="cm"># 使用 VASPKIT 提取 DOS</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 3 → DOS Analysis</span>
<span class="cm"># 1 → Generate Total DOS</span>

<span class="cm"># 或使用 pymatgen</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
vr = Vasprun(<span class="st">&#39;vasprun.xml&#39;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos
<span class="fn2">print</span>(f<span class="st">&#39;带隙: {dos.get_band_gap()[\\&quot;energy\\&quot;]:.3f} eV&#39;</span>)
&quot;</code></pre>`,1))]),s[65]||(s[65]=i('<h2>能带结构计算</h2><p>能带计算需要：① 静态计算生成 WAVECAR ② 沿高对称路径非自洽计算</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">静态计算（生成 WAVECAR）</div><div class="fa"></div><div class="fn2-node p">生成 K 点路径</div><div class="fa"></div><div class="fn2-node p">非自洽计算（ICHARG=11）</div><div class="fa"></div><div class="fn2-node e">处理 EIGENVAL 数据</div></div><h3>2. 第一步：静态计算</h3>',5)),t("div",yf,[t("div",kf,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"能带前的静态计算",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[39]||(s[39]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static for band</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[66]||(s[66]=t("h3",null,"3. 第二步：能带计算",-1)),s[67]||(s[67]=t("h4",null,"生成 K 点路径",-1)),t("div",Cf,[t("div",wf,[s[40]||(s[40]=t("span",{class:"la"},"bash",-1)),s[41]||(s[41]=t("span",{class:"fn"},"使用 vaspkit 生成",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[42]||(s[42]=i(`<pre><code><span class="cm"># 方法 1：使用 vaspkit 自动生成</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动生成带标签的 KPOINTS</span></code></pre>`,1))]),s[68]||(s[68]=t("h4",null,"手动编写 KPOINTS（以 Si 为例）",-1)),t("div",Sf,[t("div",Af,[s[43]||(s[43]=t("span",{class:"la"},"KPOINTS",-1)),s[44]||(s[44]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[45]||(s[45]=i(`<pre><code><span class="vr">k-points along high symmetry lines</span>
<span class="nu">20</span>                          <span class="cm">; 每条线段的点数</span>
<span class="kw">Line-mode</span>                   <span class="cm">; 线模式</span>
<span class="kw">Reciprocal</span>                  <span class="cm">; 倒空间坐标</span>

<span class="cm">; Γ → X</span>
<span class="nu">0.000  0.000  0.000</span>        <span class="cm">; 起点</span>
<span class="nu">0.500  0.000  0.000</span>        <span class="cm">; 终点</span>

<span class="cm">; X → W</span>
<span class="nu">0.500  0.000  0.000</span>
<span class="nu">0.500  0.250  0.000</span>

<span class="cm">; W → L</span>
<span class="nu">0.500  0.250  0.000</span>
<span class="nu">0.500  0.500  0.500</span>

<span class="cm">; L → Γ</span>
<span class="nu">0.500  0.500  0.500</span>
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[69]||(s[69]=t("div",{class:"ib warn"},[t("strong",null,"注意："),f("Line-mode KPOINTS 需要空行分隔每条线段！")],-1)),s[70]||(s[70]=t("h4",null,"能带计算 INCAR",-1)),t("div",Ef,[t("div",Tf,[s[46]||(s[46]=t("span",{class:"la"},"INCAR",-1)),s[47]||(s[47]=t("span",{class:"fn"},"能带非自洽计算",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[48]||(s[48]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>

<span class="cm"># 关键：非自洽计算</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>               <span class="cm">; 从 WAVECAR 读取电荷密度</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出投影能带</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>`,1))]),s[71]||(s[71]=i('<h3>4. 高对称点参考</h3><table class="tb"><thead><tr><th>晶系</th><th>常用路径</th></tr></thead><tbody><tr><td>立方 (cubic)</td><td>Γ → X → M → Γ → R → X</td></tr><tr><td>四方 (tetragonal)</td><td>Γ → X → M → Γ → Z → R → A</td></tr><tr><td>六方 (hexagonal)</td><td>Γ → M → K → Γ → A → L</td></tr><tr><td>正交 (orthorhombic)</td><td>Γ → X → S → Y → Γ → Z → U</td></tr></tbody></table><h3>5. 处理能带数据</h3>',3)),t("div",Rf,[t("div",Of,[s[49]||(s[49]=t("span",{class:"la"},"python",-1)),s[50]||(s[50]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[51]||(s[51]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>():
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;EIGENVAL&#39;</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    nk, nb = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">1</span>]), <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    kpoints, bands = [], []
    
    i = <span class="nu">6</span>
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn2">range</span>(nk):
        kpoints.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()[:<span class="nu">3</span>]])
        i += <span class="nu">1</span>
        bands.append([<span class="fn2">float</span>(lines[i+j].split()[<span class="nu">1</span>]) <span class="kw">for</span> j <span class="kw">in</span> <span class="fn2">range</span>(nb)])
        i += nb
    
    <span class="kw">return</span> np.array(kpoints), np.array(bands)

<span class="cm"># 读取费米能级</span>
<span class="kw">def</span> <span class="fn2">get_efermi</span>():
    <span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;OUTCAR&#39;</span>) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> <span class="st">&#39;E-fermi&#39;</span> <span class="kw">in</span> line:
                <span class="kw">return</span> <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])

kpts, bands = <span class="fn2">read_eigenval</span>()
ef = <span class="fn2">get_efermi</span>()

<span class="cm"># 计算 k 距离</span>
kdist = np.concatenate([[<span class="nu">0</span>], np.cumsum(np.linalg.norm(np.diff(kpts, axis=<span class="nu">0</span>), axis=<span class="nu">1</span>))])

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(bands.shape[<span class="nu">1</span>]):
    ax.plot(kdist, bands[:, i] - ef, <span class="st">&#39;b-&#39;</span>, lw=<span class="nu">0.8</span>)

ax.axhline(<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, ls=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;E<sub>F</sub>&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[72]||(s[72]=t("h2",null,"静态计算",-1)),s[73]||(s[73]=t("p",null,"静态计算用于在固定结构上计算电子性质，不改变原子位置。",-1)),s[74]||(s[74]=t("h3",null,"INC AR 设置",-1)),t("div",Pf,[t("div",If,[s[52]||(s[52]=t("span",{class:"la"},"INCAR",-1)),s[53]||(s[53]=t("span",{class:"fn"},"静态计算",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[54]||(s[54]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static calculation</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[75]||(s[75]=i('<h2>任务类型对比</h2><table class="tb"><thead><tr><th>任务类型</th><th>IBRION</th><th>NSW</th><th>ISIF</th><th>ISMEAR</th><th>输出</th></tr></thead><tbody><tr><td>结构优化</td><td>1 或 2</td><td>&gt;0</td><td>2 或 3</td><td>0 或 1</td><td>CONTCAR</td></tr><tr><td>静态计算</td><td>-1</td><td>0</td><td>-</td><td>0/-5</td><td>DOSCAR</td></tr><tr><td>DOS 计算</td><td>-1</td><td>0</td><td>-</td><td>-5</td><td>DOSCAR</td></tr><tr><td>能带计算</td><td>-1</td><td>0</td><td>-</td><td>0</td><td>EIGENVAL</td></tr></tbody></table><h2>完整工作流示例</h2>',3)),t("div",xf,[t("div",Nf,[s[55]||(s[55]=t("span",{class:"la"},"bash",-1)),s[56]||(s[56]=t("span",{class:"fn"},"workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[57]||(s[57]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># Si 完整计算工作流</span>

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 1: 结构优化 ===&quot;</span>
<span class="fn2">mkdir</span> 01_relax &amp;&amp; <span class="fn2">cd</span> 01_relax
<span class="fn2">cp</span> ../POSCAR_init POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Si relax
ENCUT = 400
PREC = Accurate
EDIFF = 1E-6
IBRION = 2
NSW = 200
ISIF = 3
ISMEAR = 0
SIGMA = 0.05
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 2: DOS 计算 ===&quot;</span>
<span class="fn2">mkdir</span> 02_dos &amp;&amp; <span class="fn2">cd</span> 02_dos
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_dos KPOINTS
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Si DOS
ENCUT = 400
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = -5
LORBIT = 11
NEDOS = 2000
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 3: 能带计算 ===&quot;</span>
<span class="fn2">mkdir</span> 03_band &amp;&amp; <span class="fn2">cd</span> 03_band
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../01_relax/WAVECAR ./
<span class="fn2">cp</span> ../POTCAR ../KPOINTS_band KPOINTS
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Si band
ENCUT = 400
PREC = Accurate
ICHARG = 11
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
LORBIT = 11
EOF
<span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))])])}const Mf=J(nf,[["render",qf]]),Df={name:"OutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Ff={class:"sec active"},Vf={class:"bread"},Gf={class:"cb"},$f={class:"ch"},Bf={class:"cb"},Lf={class:"ch"},Uf={class:"cb"},Kf={class:"ch"},Hf={class:"cb"},Wf={class:"ch"},jf={class:"cb"},zf={class:"ch"},Yf={class:"cb"},Zf={class:"ch"},Xf={class:"cb"},Jf={class:"ch"},Qf={class:"cb"},_f={class:"ch"},s1={class:"cb"},n1={class:"ch"};function t1(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Ff,[t("div",Vf,[w(d,{to:"/"},{default:T(()=>[...s[9]||(s[9]=[f("首页",-1)])]),_:1}),s[10]||(s[10]=f("/",-1)),s[11]||(s[11]=t("span",null,"结果分析",-1))]),s[35]||(s[35]=i('<h2>输出文件解读</h2><p>理解 VASP 输出文件是成功完成计算的关键。本节详细介绍各输出文件的内容和分析方法。</p><h3>输出文件总览</h3><table class="tb"><thead><tr><th>文件</th><th>内容</th><th>大小</th><th>重要性</th></tr></thead><tbody><tr><td><code>OUTCAR</code></td><td>详细输出（所有计算信息）</td><td>大</td><td>★★★★★</td></tr><tr><td><code>OSZICAR</code></td><td>迭代摘要（收敛曲线）</td><td>小</td><td>★★★★</td></tr><tr><td><code>CONTCAR</code></td><td>最终结构（下一步 POSCAR）</td><td>小</td><td>★★★★★</td></tr><tr><td><code>DOSCAR</code></td><td>态密度数据</td><td>中</td><td>★★★</td></tr><tr><td><code>EIGENVAL</code></td><td>本征值（能带数据）</td><td>中</td><td>★★★</td></tr><tr><td><code>CHGCAR</code></td><td>电荷密度</td><td>大</td><td>★★</td></tr><tr><td><code>WAVECAR</code></td><td>波函数</td><td>很大</td><td>★★</td></tr><tr><td><code>vasprun.xml</code></td><td>XML 格式完整输出</td><td>大</td><td>★★★★</td></tr></tbody></table><h2>OUTCAR 详解</h2><p>OUTCAR 包含 VASP 计算的所有详细信息，是最重要的输出文件。</p><h3>1. 关键信息位置</h3><table class="tb"><thead><tr><th>信息</th><th>grep 命令</th><th>说明</th></tr></thead><tbody><tr><td>总能量（自由能）</td><td><code>grep &quot;free energy&quot; OUTCAR</code></td><td>最重要的能量</td></tr><tr><td>总能量（无熵）</td><td><code>grep &quot;energy without&quot; OUTCAR</code></td><td>更准确的能量</td></tr><tr><td>力</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td><td>每个原子的力</td></tr><tr><td>应力</td><td><code>grep &quot;in kB&quot; OUTCAR</code></td><td>应力张量</td></tr><tr><td>外部压力</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td><td>标量压力</td></tr><tr><td>费米能级</td><td><code>grep &quot;E-fermi&quot; OUTCAR</code></td><td>费米能</td></tr><tr><td>磁矩</td><td><code>grep &quot;magnetization&quot; OUTCAR</code></td><td>自旋磁矩</td></tr><tr><td>收敛检查</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td><td>是否收敛</td></tr><tr><td>计算时间</td><td><code>grep &quot;Total CPU time&quot; OUTCAR</code></td><td>总耗时</td></tr><tr><td>NELECT</td><td><code>grep &quot;NELECT&quot; OUTCAR</code></td><td>总电子数</td></tr></tbody></table><h3>2. 提取能量</h3>',9)),t("div",Gf,[t("div",$f,[s[12]||(s[12]=t("span",{class:"la"},"bash",-1)),s[13]||(s[13]=t("span",{class:"fn"},"提取能量",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="cm"># 提取最终自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: free  energy TOTEN  =      -156.23456789 eV</span>

<span class="cm"># 提取无熵能量（更准确）</span>
<span class="fn2">grep</span> <span class="st">&quot;energy  without&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: energy  without entropy=     -156.234567  energy(sigma-&gt;0) =     -156.234567</span>

<span class="cm"># 提取数值</span>
e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;能量: $e eV&quot;</span>

<span class="cm"># 每原子能量</span>
natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
per_atom=$(<span class="fn2">echo</span> <span class="st">&quot;$e / $natoms&quot;</span> | <span class="fn2">bc</span> -l)
<span class="fn2">echo</span> <span class="st">&quot;每原子能量: $per_atom eV/atom&quot;</span></code></pre>`,1))]),s[36]||(s[36]=t("h3",null,"3. 提取力和应力",-1)),t("div",Bf,[t("div",Lf,[s[15]||(s[15]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm"># 查看最后一步的力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">10</span> | <span class="fn2">tail</span> -12
<span class="cm"># 输出每个原子的 x y z 力分量</span>

<span class="cm"># 提取最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: XX YY ZZ XY YZ ZX</span>

<span class="cm"># 查看外部压力（标量）</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: external pressure =    -1.23 kB</span></code></pre>`,1))]),s[37]||(s[37]=t("h3",null,"4. 检查收敛状态",-1)),t("div",Uf,[t("div",Kf,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=i(`<pre><code><span class="cm"># 检查是否收敛（输出包含 &quot;reached required&quot; 表示收敛）</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR
<span class="cm"># 成功输出: reached required accuracy - stopping structural energy minimisation</span>

<span class="cm"># 检查电子步收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;EDIFF&quot;</span> OUTCAR

<span class="cm"># 查看离子步数</span>
<span class="fn2">grep</span> <span class="st">&quot;FREE ENERGIE&quot;</span> OUTCAR | <span class="fn2">wc</span> -l</code></pre>`,1))]),s[38]||(s[38]=t("div",{class:"ib tip"},[t("strong",null,"收敛判断："),f("看到 "),t("code",null,"reached required accuracy"),f(" 表示计算成功收敛。")],-1)),s[39]||(s[39]=t("h3",null,"5. 检查计算状态",-1)),t("div",Hf,[t("div",Wf,[s[19]||(s[19]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[20]||(s[20]=i(`<pre><code><span class="cm"># 检查是否有错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR

<span class="cm"># 查看计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR

<span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -5

<span class="cm"># 查看 K 点信息</span>
<span class="fn2">grep</span> <span class="st">&quot;NKPTS&quot;</span> OUTCAR | <span class="fn2">head</span> -1</code></pre>`,1))]),s[40]||(s[40]=i(`<h2>OSZICAR 详解</h2><p>OSZICAR 记录每次迭代的简要信息，用于监控收敛过程。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">OSZICAR</span><span class="fn">示例内容</span></div><pre><code><span class="cm"># 列说明: N  E  dE  dep  dep2  ncg  rms  rms(cg)</span>
   1  F= -.156234E+03 E0= -.156234E+03  d E =-.156234E+03  mag=     0.0000
   2  F= -.156456E+03 E0= -.156456E+03  d E =-.222000E-01  mag=     0.0000
   3  F= -.156467E+03 E0= -.156467E+03  d E =-.110000E-02  mag=     0.0000
   4  F= -.156468E+03 E0= -.156468E+03  d E =-.100000E-04  mag=     0.0000
   5 F= -.156468E+03 E0= -.156468E+03  d E =-.980000E-06  mag=     0.0000</code></pre></div><table class="tb"><thead><tr><th>列</th><th>含义</th></tr></thead><tbody><tr><td>N</td><td>离子步数（或电子步数）</td></tr><tr><td>F</td><td>总能量</td></tr><tr><td>E0</td><td>无熵校正能量</td></tr><tr><td>d E</td><td>能量变化</td></tr><tr><td>mag</td><td>总磁矩</td></tr></tbody></table><h3>2. 绘制收敛曲线</h3>`,6)),t("div",jf,[t("div",zf,[s[21]||(s[21]=t("span",{class:"la"},"python",-1)),s[22]||(s[22]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[23]||(s[23]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 OSZICAR</span>
<span class="kw">def</span> <span class="fn2">read_oszicar</span>(filename=<span class="st">&#39;OSZICAR&#39;</span>):
    energies = []
    <span class="kw">with</span> <span class="fn2">open</span>(filename) <span class="kw">as</span> f:
        <span class="kw">for</span> line <span class="kw">in</span> f:
            <span class="kw">if</span> line.startswith(<span class="st">&#39; &#39;</span>) <span class="kw">and</span> <span class="st">&#39;F=&#39;</span> <span class="kw">in</span> line:
                e = <span class="fn2">float</span>(line.split(<span class="st">&#39;F=&#39;</span>)[<span class="nu">1</span>].split()[<span class="nu">0</span>])
                energies.append(e)
    <span class="kw">return</span> np.array(energies)

energies = <span class="fn2">read_oszicar</span>()

<span class="cm"># 绘制收敛曲线</span>
fig, (ax1, ax2) = plt.subplots(<span class="nu">2</span>, <span class="nu">1</span>, figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 能量 vs 步数</span>
ax1.plot(energies, <span class="st">&#39;b-o&#39;</span>, markersize=<span class="nu">4</span>)
ax1.set_xlabel(<span class="st">&#39;Ion Step&#39;</span>)
ax1.set_ylabel(<span class="st">&#39;Energy (eV)&#39;</span>)
ax1.set_title(<span class="st">&#39;Energy Convergence&#39;</span>)

<span class="cm"># 能量变化 vs 步数</span>
delta = np.diff(energies)
ax2.semilogy(<span class="fn2">abs</span>(delta), <span class="st">&#39;r-s&#39;</span>, markersize=<span class="nu">4</span>)
ax2.set_xlabel(<span class="st">&#39;Ion Step&#39;</span>)
ax2.set_ylabel(<span class="st">&#39;|dE| (eV)&#39;</span>)
ax2.set_title(<span class="st">&#39;Energy Change&#39;</span>)
ax2.axhline(y=<span class="nu">1E-6</span>, color=<span class="st">&#39;g&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;EDIFF&#39;</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">&#39;convergence.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[41]||(s[41]=t("h2",null,"CONTCAR 详解",-1)),s[42]||(s[42]=t("p",null,"CONTCAR 包含优化后的最终结构，格式与 POSCAR 相同。",-1)),s[43]||(s[43]=t("h3",null,"使用注意事项",-1)),s[44]||(s[44]=t("ul",null,[t("li",null,[t("strong",null,"下一次计算"),f("：将 CONTCAR 复制为 POSCAR 继续计算")]),t("li",null,[t("strong",null,"检查晶格变化"),f("：比较初始和最终晶格常数")]),t("li",null,[t("strong",null,"检查原子位置"),f("：确认优化后的结构合理")])],-1)),t("div",Yf,[t("div",Zf,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR

<span class="cm"># 比较初始和最终晶格</span>
<span class="fn2">echo</span> <span class="st">&quot;=== 初始晶格 ===&quot;</span>
<span class="fn2">sed</span> -n <span class="st">&#39;3,5p&#39;</span> POSCAR
<span class="fn2">echo</span> <span class="st">&quot;=== 最终晶格 ===&quot;</span>
<span class="fn2">sed</span> -n <span class="st">&#39;3,5p&#39;</span> CONTCAR

<span class="cm"># 计算晶格常数变化</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">import</span> numpy <span class="kw">as</span> np
a_init = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">&#39;POSCAR&#39;</span>).readlines()[<span class="nu">2</span>].split()])
a_final = np.linalg.norm([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> <span class="fn2">open</span>(<span class="st">&#39;CONTCAR&#39;</span>).readlines()[<span class="nu">2</span>].split()])
<span class="fn2">print</span>(f<span class="st">&#39;晶格变化: {(a_final-a_init)/a_init*100:.2f}%&#39;</span>)
&quot;</code></pre>`,1))]),s[45]||(s[45]=i(`<h2>DOSCAR 详解</h2><p>DOSCAR 包含态密度数据，用于分析电子结构。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">DOSCAR</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1: 原子数
Line 2-5: 头部信息
Line 6: NEDOS EMIN EMAX EFERMI SPIN
Line 7-NEDOS+6: 能量 DOS(上) DOS(下) 积分DOS(上) 积分DOS(下)
<span class="cm"># 后续是每个原子的分波 DOS</span></code></pre></div><h3>2. 提取和绘制 DOS</h3>`,5)),t("div",Xf,[t("div",Jf,[s[26]||(s[26]=t("span",{class:"la"},"python",-1)),s[27]||(s[27]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[28]||(s[28]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">&#39;DOSCAR&#39;</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename) <span class="kw">as</span> f:
        lines = f.readlines()
    
    natoms = <span class="fn2">int</span>(lines[<span class="nu">0</span>].split()[<span class="nu">0</span>])
    nedos = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    efermi = <span class="fn2">float</span>(lines[<span class="nu">5</span>].split()[<span class="nu">3</span>])
    
    <span class="cm"># 读取总 DOS</span>
    dos_data = []
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">6</span>, <span class="nu">6</span> + nedos):
        dos_data.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()])
    
    dos_data = np.array(dos_data)
    energy = dos_data[:, <span class="nu">0</span>] - efermi
    dos_up = dos_data[:, <span class="nu">1</span>]
    dos_down = dos_data[:, <span class="nu">2</span>] <span class="kw">if</span> dos_data.shape[<span class="nu">1</span>] &gt; <span class="nu">2</span> <span class="kw">else</span> <span class="kw">None</span>
    
    <span class="kw">return</span> energy, dos_up, dos_down, efermi

energy, dos_up, dos_down, ef = <span class="fn2">read_doscar</span>()

<span class="cm"># 绘制 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

ax.plot(energy, dos_up, <span class="st">&#39;b-&#39;</span>, label=<span class="st">&#39;Spin up&#39;</span>, lw=<span class="nu">1.5</span>)
<span class="kw">if</span> dos_down <span class="kw">is not None</span>:
    ax.plot(energy, -dos_down, <span class="st">&#39;r-&#39;</span>, label=<span class="st">&#39;Spin down&#39;</span>, lw=<span class="nu">1.5</span>)
    ax.fill_between(energy, dos_down, alpha=<span class="nu">0.3</span>, color=<span class="st">&#39;r&#39;</span>)

ax.fill_between(energy, dos_up, alpha=<span class="nu">0.3</span>, color=<span class="st">&#39;b&#39;</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;k&#39;</span>, ls=<span class="st">&#39;--&#39;</span>, lw=<span class="nu">1</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()

<span class="cm"># 计算带隙</span>
<span class="kw">if</span> dos_up[energy &gt; <span class="nu">0</span>].<span class="fn2">min</span>() &lt; <span class="nu">0.01</span>:
    cb = energy[energy &gt; <span class="nu">0</span>][dos_up[energy &gt; <span class="nu">0</span>] &gt; <span class="nu">0.01</span>][<span class="nu">0</span>]
    vb = energy[energy &lt; <span class="nu">0</span>][dos_up[energy &lt; <span class="nu">0</span>] &gt; <span class="nu">0.01</span>][-<span class="nu">1</span>]
    ax.annotate(<span class="st">&#39;&#39;</span>, xy=(cb, <span class="nu">0</span>), xytext=(vb, <span class="nu">0</span>),
                arrowprops=dict(arrowstyle=<span class="st">&#39;&lt;-&gt;&#39;</span>, color=<span class="st">&#39;green&#39;</span>, lw=<span class="nu">2</span>))
    ax.text((cb+vb)/<span class="nu">2</span>, <span class="nu">0.5</span>, f<span class="st">&#39;Gap={cb-vb:.2f} eV&#39;</span>, ha=<span class="st">&#39;center&#39;</span>, color=<span class="st">&#39;green&#39;</span>)

plt.savefig(<span class="st">&#39;dos.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[46]||(s[46]=i(`<h2>EIGENVAL 详解</h2><p>EIGENVAL 包含本征值数据，用于绘制能带结构。</p><h3>文件格式</h3><div class="cb"><div class="ch"><span class="la">EIGENVAL</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1-4: 头部信息
Line 5: NEDOS NKPTS NBANDS (能量点数, K点数, 能带数)
Line 6: 空行
<span class="cm"># 重复以下结构（每个 K 点）：</span>
Line: kx ky kz weight
Line: band_index energy occupancy
<span class="cm"># ... (NBANDS 行)</span></code></pre></div><h2>计算成功判断标准</h2><h3>1. 结构优化成功标志</h3><table class="tb"><thead><tr><th>检查项</th><th>成功标志</th><th>检查命令</th></tr></thead><tbody><tr><td>收敛</td><td>输出 &quot;reached required accuracy&quot;</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td></tr><tr><td>力</td><td>最大力 &lt; 0.02 eV/Å</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td></tr><tr><td>压力</td><td>外部压力 &lt; 1 kbar</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td></tr><tr><td>能量</td><td>能量变化 &lt; EDIFF</td><td><code>grep &quot;d E&quot; OSZICAR</code></td></tr></tbody></table><h3>2. 常见失败模式</h3><table class="tb"><thead><tr><th>问题</th><th>症状</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>电子步达到 NELM</td><td>调整 MAGMOM、ISMEAR</td></tr><tr><td>结构发散</td><td>能量持续增大</td><td>减小 POTIM</td></tr><tr><td>原子跑飞</td><td>能量 ~10^6 eV</td><td>检查初始结构</td></tr><tr><td>内存不足</td><td>Killed</td><td>使用 LREAL=Auto</td></tr></tbody></table><h3>3. 完整检查脚本</h3>`,10)),t("div",Qf,[t("div",_f,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),s[30]||(s[30]=t("span",{class:"fn"},"check_calc.sh",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[31]||(s[31]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 完整的计算状态检查</span>

<span class="fn2">echo</span> <span class="st">&quot;=== VASP 计算状态检查 ===&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;目录: $(pwd)&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 1. 检查文件存在</span>
<span class="fn2">echo</span> <span class="st">&quot;[1] 文件检查&quot;</span>
<span class="kw">for</span> f <span class="kw">in</span> OUTCAR OSZICAR CONTCAR; <span class="kw">do</span>
    [ -f $f ] &amp;&amp; <span class="fn2">echo</span> <span class="st">&quot;  ✓ $f 存在&quot;</span> || <span class="fn2">echo</span> <span class="st">&quot;  ✗ $f 缺失&quot;</span>
<span class="kw">done</span>
<span class="fn2">echo</span>

<span class="cm"># 2. 检查收敛</span>
<span class="fn2">echo</span> <span class="st">&quot;[2] 收敛状态&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 计算收敛&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ 计算未收敛&quot;</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 3. 能量信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[3] 能量信息&quot;</span>
e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  总能量: $e eV&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;  原子数: $natoms&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;  每原子: $(echo &quot;$e / $natoms&quot; | bc -l) eV/atom&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 4. 力信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[4] 力信息&quot;</span>
max_force=$(<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1)
<span class="fn2">echo</span> <span class="st">&quot;  最大力: $max_force eV/Å&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 5. 压力信息</span>
<span class="fn2">echo</span> <span class="st">&quot;[5] 压力信息&quot;</span>
pressure=$(<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $4}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  外部压力: $pressure kbar&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 6. 错误检查</span>
<span class="fn2">echo</span> <span class="st">&quot;[6] 错误检查&quot;</span>
errors=$(<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR | <span class="fn2">wc</span> -l)
<span class="kw">if</span> [ $errors -eq <span class="nu">0</span> ]; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 无错误&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ⚠ 发现 $errors 个错误/警告&quot;</span>
    <span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="fn2">echo</span> <span class="st">&quot;=== 检查完成 ===&quot;</span></code></pre>`,1))]),s[47]||(s[47]=t("h2",null,"收敛性测试",-1)),s[48]||(s[48]=t("p",null,"收敛性测试确保计算参数足够精确。",-1)),t("div",s1,[t("div",n1,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),s[33]||(s[33]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[34]||(s[34]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    <span class="fn2">sed</span> <span class="st">&quot;s/ENCUT.*/ENCUT = \${encut}/&quot;</span> INCAR &gt; ENCUT_\${encut}/INCAR
    <span class="fn2">cd</span> ENCUT_\${encut}; <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std; <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取并显示结果</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT(eV)    Energy(eV)    dE(meV/atom)&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;----------------------------------------&quot;</span>

prev_e=<span class="nu">0</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
    de=$(<span class="fn2">echo</span> <span class="st">&quot;($e - $prev_e) / $natoms * 1000&quot;</span> | <span class="fn2">bc</span> -l)
    <span class="fn2">printf</span> <span class="st">&quot;%-12s %12.6f %12.3f\\n&quot;</span> <span class="st">&quot;$encut&quot;</span> <span class="st">&quot;$e&quot;</span> <span class="st">&quot;$de&quot;</span>
    prev_e=$e
<span class="kw">done</span></code></pre>`,1))]),s[49]||(s[49]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),f("相邻 ENCUT 能量差 < 1 meV/atom 时收敛。")],-1))])}const a1=J(Df,[["render",t1]]),l1={name:"ErrorsView",data(){return{openSections:{e1:!0,e2:!1}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},p1={class:"sec active"},e1={class:"bread"},o1={class:"cb"},d1={class:"ch"},r1={class:"ec-b"},c1={class:"cb"},i1={class:"ch"},u1={class:"ec-b"},f1={class:"cb"},m1={class:"ch"};function b1(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",p1,[t("div",e1,[w(d,{to:"/"},{default:T(()=>[...s[5]||(s[5]=[f("首页",-1)])]),_:1}),s[6]||(s[6]=f("/",-1)),s[7]||(s[7]=t("span",null,"错误诊断",-1))]),s[23]||(s[23]=i('<h2>VASP 错误诊断系统</h2><p>使用 VASP 时难免遇到报错，这个系统帮你快速定位和解决问题。</p><div class="pg"><div class="pc" style="--ca:var(--red);"><div class="pc-i">⚡</div><div class="pc-t">SCF 不收敛</div><div class="pc-d">电子步迭代无法收敛——最高频问题</div></div><div class="pc" style="--ca:var(--orange);"><div class="pc-i">💥</div><div class="pc-t">离子步问题</div><div class="pc-d">优化不收敛、力振荡、原子跑飞</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">💾</div><div class="pc-t">内存与性能</div><div class="pc-d">内存溢出、计算太慢、并行效率低</div></div><div class="pc" style="--ca:var(--blue);"><div class="pc-i">📂</div><div class="pc-t">文件错误</div><div class="pc-d">POTCAR 不匹配、POSCAR 格式错误</div></div></div><h3>通用诊断流程</h3><div class="fc"><div class="fn2-node s">VASP 计算异常终止</div><div class="fa"></div><div class="fn2-node p">① 查看 OUTCAR 最后 50 行</div><div class="fa"></div><div class="fn2-node p">② 查看 OSZICAR 收敛情况</div><div class="fa"></div><div class="fn2-node p">③ 检查四个输入文件</div><div class="fa"></div><div class="fn2-node p">④ 搜索错误关键词</div><div class="fa"></div><div class="fn2-node e">定位问题 → 应用解决方案</div></div>',5)),t("div",o1,[t("div",d1,[s[8]||(s[8]=t("span",{class:"la"},"bash",-1)),s[9]||(s[9]=t("span",{class:"fn"},"快速诊断",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[10]||(s[10]=i(`<pre><code><span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort\\|ZBRENT\\|DENTET&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">cat</span> OSZICAR
<span class="fn2">df</span> -h .</code></pre>`,1))]),s[24]||(s[24]=t("h3",null,"SCF 不收敛问题",-1)),s[25]||(s[25]=t("p",null,"SCF 不收敛是最高频的问题。以下是完整排查清单。",-1)),t("div",{class:j(["ec",{open:o.openSections.e1}]),onClick:s[2]||(s[2]=p=>l.toggle("e1"))},[s[16]||(s[16]=i('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 1：电子步达到 NELM 上限仍未收敛</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",r1,[s[13]||(s[13]=t("h4",null,"症状",-1)),s[14]||(s[14]=t("div",{class:"esym"},[f("DAV: 64 -0.275E+03 0.217E+00 -0.109E+00"),t("br"),f("（能量差持续振荡不下降）")],-1)),s[15]||(s[15]=t("h4",null,"解决方案",-1)),t("div",c1,[t("div",i1,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=ql((...p)=>l.copy&&l.copy(...p),["stop"]))},"复制")]),s[12]||(s[12]=i(`<pre><code><span class="cm"># 方案 1：降低收敛标准</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span></code></pre>`,1))])])],2),t("div",{class:j(["ec",{open:o.openSections.e2}]),onClick:s[4]||(s[4]=p=>l.toggle("e2"))},[s[22]||(s[22]=i('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 2：DENTET - 能带数不足</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",u1,[s[19]||(s[19]=t("h4",null,"症状",-1)),s[20]||(s[20]=t("div",{class:"esym"},[f("WARNING: DENTET: can't reach specified NBANDS"),t("br"),f("NELECT = 120.0000 NBANDS = 64")],-1)),s[21]||(s[21]=t("h4",null,"解决方案",-1)),t("div",f1,[t("div",m1,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=ql((...p)=>l.copy&&l.copy(...p),["stop"]))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[t("span",{class:"kw"},"NBANDS"),f("   = "),t("span",{class:"nu"},"160"),f(`
`),t("span",{class:"cm"},"# 经验: NBANDS ≥ NELECT/2 + N_atoms/2")])],-1))])])],2)])}const g1=J(l1,[["render",b1]]),v1={name:"ToolsView",methods:{openLink(n){window.open(n,"_blank")},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},h1={class:"sec active"},y1={class:"bread"},k1={class:"pg"},C1={class:"cb"},w1={class:"ch"},S1={class:"cb"},A1={class:"ch"},E1={class:"cb"},T1={class:"ch"},R1={class:"cb"},O1={class:"ch"},P1={class:"cb"},I1={class:"ch"},x1={class:"cb"},N1={class:"ch"},q1={class:"cb"},M1={class:"ch"},D1={class:"cb"},F1={class:"ch"},V1={class:"cb"},G1={class:"ch"},$1={class:"cb"},B1={class:"ch"},L1={class:"cb"},U1={class:"ch"},K1={class:"cb"},H1={class:"ch"},W1={class:"cb"},j1={class:"ch"},z1={class:"cb"},Y1={class:"ch"},Z1={class:"cb"},X1={class:"ch"},J1={class:"cb"},Q1={class:"ch"},_1={class:"cb"},sm={class:"ch"};function nm(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",h1,[t("div",y1,[w(d,{to:"/"},{default:T(()=>[...s[21]||(s[21]=[f("首页",-1)])]),_:1}),s[22]||(s[22]=f("/",-1)),s[23]||(s[23]=t("span",null,"工具与资源",-1))]),s[74]||(s[74]=t("h2",null,"辅助工具",-1)),s[75]||(s[75]=t("p",null,"VASP 计算需要配合多种工具进行结构可视化、数据处理和后分析。",-1)),t("div",k1,[w(d,{to:"/tools/calculator",class:"pc",style:{"--ca":"var(--cyan)"}},{default:T(()=>[...s[24]||(s[24]=[t("div",{class:"pc-i"},"🔧",-1),t("div",{class:"pc-t"},"参数计算器",-1),t("div",{class:"pc-d"},"ENCUT、K 点、形成能等计算工具",-1)])]),_:1}),t("div",{class:"pc",style:{"--ca":"var(--blue)"},onClick:s[0]||(s[0]=p=>l.openLink("https://www.vasp.at/wiki/index.php/VESTA"))},[...s[25]||(s[25]=[t("div",{class:"pc-i"},"🔬",-1),t("div",{class:"pc-t"},"VESTA",-1),t("div",{class:"pc-d"},"晶体结构可视化",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--green)"},onClick:s[1]||(s[1]=p=>l.openLink("https://vaspkit.com"))},[...s[26]||(s[26]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"VASPKIT",-1),t("div",{class:"pc-d"},"后处理工具包",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--purple)"},onClick:s[2]||(s[2]=p=>l.openLink("https://pymatgen.org"))},[...s[27]||(s[27]=[t("div",{class:"pc-i"},"🐍",-1),t("div",{class:"pc-t"},"pymatgen",-1),t("div",{class:"pc-d"},"Python 材料分析库",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--orange)"},onClick:s[3]||(s[3]=p=>l.openLink("https://phonopy.github.io/phonopy"))},[...s[28]||(s[28]=[t("div",{class:"pc-i"},"🔊",-1),t("div",{class:"pc-t"},"phonopy",-1),t("div",{class:"pc-d"},"声子计算工具",-1)])])]),s[76]||(s[76]=i(`<h2>VESTA 使用入门</h2><p>VESTA 是最常用的晶体结构可视化软件，支持多种格式。</p><h3>1. 基本操作</h3><table class="tb"><thead><tr><th>操作</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>打开文件</td><td>File → Open → 选择 POSCAR</td><td>支持 VASP、CIF、XSF 等格式</td></tr><tr><td>旋转结构</td><td>鼠标左键拖动</td><td>多角度查看</td></tr><tr><td>缩放</td><td>鼠标滚轮</td><td>放大/缩小</td></tr><tr><td>平移</td><td>鼠标右键拖动</td><td>移动视角</td></tr><tr><td>测量距离</td><td>Utilities → Distance</td><td>点击两个原子</td></tr><tr><td>测量角度</td><td>Utilities → Angle</td><td>点击三个原子</td></tr><tr><td>截图</td><td>File → Export Raster Image</td><td>导出 PNG/JPG</td></tr></tbody></table><h3>2. 显示设置</h3><div class="cb"><div class="ch"><span class="la">VESTA</span><span class="fn">常用设置路径</span></div><pre><code><span class="cm"># 修改原子大小和颜色</span>
Objects → Atoms → Properties

<span class="cm"># 显示晶胞边界</span>
Objects → Unit cell → Boundary

<span class="cm"># 显示键</span>
Objects → Bonds → Search bonds

<span class="cm"># 显示坐标轴</span>
Objects → Axes

<span class="cm"># 修改背景颜色</span>
View → Background color</code></pre></div><h3>3. 常用技巧</h3><ul><li><strong>显示超胞：</strong>Edit → Edit Data → Structure → Transform → 扩展晶胞</li><li><strong>切表面：</strong>Utilities → Boundary → 设置截断平面</li><li><strong>导出高分辨率图：</strong>File → Export → 设置 DPI ≥ 300</li><li><strong>比较结构：</strong>File → Open → 选择多个文件同时显示</li></ul><h2>VASPKIT 使用指南</h2><p>VASPKIT 是 VASP 后处理的瑞士军刀，提供 200+ 功能。</p><h3>1. 安装与配置</h3>`,11)),t("div",C1,[t("div",w1,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[30]||(s[30]=i(`<pre><code><span class="cm"># 下载安装</span>
<span class="fn2">git</span> clone https://github.com/vaspkit/VASPKIT.git
<span class="fn2">cd</span> VASPKIT
<span class="fn2">./setup.sh</span>

<span class="cm"># 配置环境变量（添加到 ~/.bashrc）</span>
<span class="fn2">export</span> PATH=$PATH:~/VASPKIT/bin

<span class="cm"># 验证安装</span>
<span class="fn2">vaspkit</span> -v</code></pre>`,1))]),s[77]||(s[77]=i('<h3>2. 常用功能速查</h3><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>生成 K 路径</td><td>2 → 2 → 1</td><td>Line-mode KPOINTS</td></tr><tr><td>处理 DOS</td><td>3 → 1 → 1</td><td>提取 DOS 数据</td></tr><tr><td>处理能带</td><td>3 → 2 → 1</td><td>提取能带数据</td></tr><tr><td>电荷密度</td><td>5 → 1</td><td>处理 CHGCAR</td></tr><tr><td>结构转换</td><td>7 → 1</td><td>POSCAR ↔ CIF</td></tr><tr><td>生成 POTCAR</td><td>1 → 1</td><td>自动拼接赝势</td></tr></tbody></table><h3>3. 生成 K 点路径</h3>',3)),t("div",S1,[t("div",A1,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),s[32]||(s[32]=t("span",{class:"fn"},"vaspkit 生成能带 K 路径",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[33]||(s[33]=i(`<pre><code><span class="cm"># 运行 vaspkit</span>
<span class="fn2">vaspkit</span>

<span class="cm"># 选择菜单</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动识别高对称点并生成 KPOINTS</span></code></pre>`,1))]),s[78]||(s[78]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",E1,[t("div",T1,[s[34]||(s[34]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[35]||(s[35]=i(`<pre><code><span class="cm"># 提取总 DOS</span>
<span class="fn2">vaspkit</span> -task 311

<span class="cm"># 提取分波 DOS (PDOS)</span>
<span class="fn2">vaspkit</span> -task 312

<span class="cm"># 生成 DOS 数据文件（TOTEL_DOS.dat, PDOS_*.dat）</span>

<span class="cm"># 使用 origin 或 gnuplot 绘图</span></code></pre>`,1))]),s[79]||(s[79]=t("h2",null,"pymatgen Python 示例",-1)),s[80]||(s[80]=t("p",null,"pymatgen 是最强大的 Python 材料分析库，支持 VASP 输入输出处理。",-1)),s[81]||(s[81]=t("h3",null,"1. 安装",-1)),t("div",R1,[t("div",O1,[s[36]||(s[36]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[37]||(s[37]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 pymatgen"),f(`
`),t("span",{class:"fn2"},"pip"),f(` install pymatgen

`),t("span",{class:"cm"},"# 安装 VASP 接口依赖"),f(`
`),t("span",{class:"fn2"},"pip"),f(" install pymatgen-analysis-diffusion")])],-1))]),s[82]||(s[82]=t("h3",null,"2. 读取和处理结构",-1)),t("div",P1,[t("div",I1,[s[38]||(s[38]=t("span",{class:"la"},"python",-1)),s[39]||(s[39]=t("span",{class:"fn"},"read_structure.py",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[40]||(s[40]=i(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Poscar

<span class="cm"># 读取 POSCAR</span>
structure = Structure.<span class="fn2">from_file</span>(<span class="st">&quot;POSCAR&quot;</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">&quot;化学式: {structure.formula}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;原子数: {len(structure)}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;晶格参数: {structure.lattice.abc}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;体积: {structure.volume:.2f} Å³&quot;</span>)

<span class="cm"># 获取原子距离</span>
distances = structure.<span class="fn2">distance_matrix</span>
<span class="fn2">print</span>(f<span class="st">&quot;最小原子距离: {distances[distances &gt; 0].min():.2f} Å&quot;</span>)

<span class="cm"># 创建超胞</span>
supercell = structure * [<span class="nu">2</span>, <span class="nu">2</span>, <span class="nu">2</span>]
supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)</code></pre>`,1))]),s[83]||(s[83]=t("h3",null,"3. 处理 VASP 输出",-1)),t("div",x1,[t("div",N1,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"read_vasp_output.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[43]||(s[43]=i(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun, Outcar

<span class="cm"># 读取 vasprun.xml（包含所有计算信息）</span>
vr = Vasprun(<span class="st">&quot;vasprun.xml&quot;</span>)

<span class="cm"># 获取最终能量</span>
<span class="fn2">print</span>(f<span class="st">&quot;最终能量: {vr.final_energy:.6f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;每原子能量: {vr.final_energy / len(vr.final_structure):.6f} eV/atom&quot;</span>)

<span class="cm"># 获取收敛结构</span>
final_structure = vr.final_structure
<span class="fn2">print</span>(f<span class="st">&quot;最终晶格: {final_structure.lattice.abc}&quot;</span>)

<span class="cm"># 检查是否收敛</span>
<span class="fn2">print</span>(f<span class="st">&quot;电子步收敛: {vr.converged_electronic}&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;离子步收敛: {vr.converged_ionic}&quot;</span>)

<span class="cm"># 读取 OUTCAR</span>
outcar = Outcar(<span class="st">&quot;OUTCAR&quot;</span>)

<span class="cm"># 获取最终力</span>
<span class="fn2">print</span>(f<span class="st">&quot;最大力: {max(abs(f) <span class="kw">for</span> f <span class="kw">in</span> outcar.final_structure.forces):.6f} eV/Å&quot;</span>)

<span class="cm"># 获取应力</span>
<span class="fn2">print</span>(f<span class="st">&quot;应力张量: {outcar.stress}&quot;</span>)

<span class="cm"># 获取费米能级</span>
<span class="fn2">print</span>(f<span class="st">&quot;费米能级: {outcar.efermi:.4f} eV&quot;</span>)</code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",q1,[t("div",M1,[s[44]||(s[44]=t("span",{class:"la"},"python",-1)),s[45]||(s[45]=t("span",{class:"fn"},"dos_analysis.py",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[46]||(s[46]=i(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOS 数据</span>
vr = Vasprun(<span class="st">&quot;vasprun.xml&quot;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos

<span class="cm"># 获取能隙</span>
bandgap = dos.get_band_gap()
<span class="fn2">print</span>(f<span class="st">&quot;带隙: {bandgap[&#39;energy&#39;]:.3f} eV ({bandgap[&#39;transition&#39;]})&quot;</span>)

<span class="cm"># 绘制总 DOS</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 总 DOS</span>
energies = dos.energies - dos.efermi
densities = dos.densities
ax.plot(energies, densities, <span class="st">&#39;b-&#39;</span>, label=<span class="st">&#39;Total DOS&#39;</span>)

<span class="cm"># 分波 DOS</span>
<span class="kw">for</span> el, pdos <span class="kw">in</span> dos.get_element_dos().items():
    ax.plot(energies, pdos.densities, label=f<span class="st">&#39;{el}&#39;</span>)

ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.legend()
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;k&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
plt.savefig(<span class="st">&#39;dos_plot.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"5. 处理能带数据",-1)),t("div",D1,[t("div",F1,[s[47]||(s[47]=t("span",{class:"la"},"python",-1)),s[48]||(s[48]=t("span",{class:"fn"},"band_analysis.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[49]||(s[49]=i(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> BSVasprun
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取能带计算结果</span>
vr = BSVasprun(<span class="st">&quot;vasprun.xml&quot;</span>)
bs = vr.get_band_structure(line_mode=<span class="kw">True</span>)

<span class="cm"># 基本信息</span>
<span class="fn2">print</span>(f<span class="st">&quot;带隙: {bs.get_band_gap()[&#39;energy&#39;]:.3f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;价带顶: {bs.get_vbm()[&#39;energy&#39;]:.3f} eV&quot;</span>)
<span class="fn2">print</span>(f<span class="st">&quot;导带底: {bs.get_cbm()[&#39;energy&#39;]:.3f} eV&quot;</span>)

<span class="cm"># 绘制能带图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))

<span class="cm"># 获取高对称点</span>
labels = [label <span class="kw">for</span> label <span class="kw">in</span> bs.branches[<span class="nu">0</span>][<span class="st">&#39;name&#39;</span>].split(<span class="st">&#39;-&#39;</span>)]

<span class="cm"># 绘制能带</span>
<span class="kw">for</span> band <span class="kw">in</span> bs.bands:
    ax.plot(band - bs.efermi, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">0.5</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;E<sub>F</sub>&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band_structure.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[86]||(s[86]=t("h2",null,"phonopy 声子计算",-1)),s[87]||(s[87]=t("p",null,"phonopy 是计算声子谱的标准工具。",-1)),s[88]||(s[88]=t("h3",null,"1. 安装",-1)),t("div",V1,[t("div",G1,[s[50]||(s[50]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[51]||(s[51]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 phonopy"),f(`
`),t("span",{class:"fn2"},"pip"),f(` install phonopy

`),t("span",{class:"cm"},"# 验证安装"),f(`
`),t("span",{class:"fn2"},"phonopy"),f(" --version")])],-1))]),s[89]||(s[89]=t("h3",null,"2. 基本工作流",-1)),t("div",$1,[t("div",B1,[s[52]||(s[52]=t("span",{class:"la"},"bash",-1)),s[53]||(s[53]=t("span",{class:"fn"},"phonopy_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[54]||(s[54]=i(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：从优化结构生成超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">&quot;3 3 3&quot;</span>

<span class="cm"># 步骤 2：对每个位移超胞计算力</span>
<span class="kw">for</span> d <span class="kw">in</span> DISP-*; <span class="kw">do</span>
    <span class="fn2">cd</span> $d
    <span class="fn2">cp</span> ../INCAR ../POTCAR ../KPOINTS ./
    <span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 步骤 3：提取力常数</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml

<span class="cm"># 步骤 4：计算声子谱</span>
<span class="fn2">phonopy</span> --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR-orig band.conf

<span class="cm"># 步骤 5：绘图</span>
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"3. band.conf 配置文件",-1)),t("div",L1,[t("div",U1,[s[55]||(s[55]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[56]||(s[56]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 声子谱计算配置"),f(`
ATOM_NAME = Si
DIM = 3 3 3

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),f(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51`)])],-1))]),s[91]||(s[91]=t("h2",null,"常用后处理脚本",-1)),s[92]||(s[92]=t("h3",null,"1. 能量提取脚本",-1)),t("div",K1,[t("div",H1,[s[57]||(s[57]=t("span",{class:"la"},"bash",-1)),s[58]||(s[58]=t("span",{class:"fn"},"get_energy.sh",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[59]||(s[59]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提取多个目录的能量</span>

<span class="fn2">echo</span> <span class="st">&quot;目录               能量(eV)        每原子(eV/atom)&quot;</span>
<span class="fn2">echo</span> <span class="st">&quot;------------------------------------------------&quot;</span>

<span class="kw">for</span> dir <span class="kw">in</span> */; <span class="kw">do</span>
    <span class="kw">if</span> [ -f <span class="st">&quot;$dir/OUTCAR&quot;</span> ]; <span class="kw">then</span>
        e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> $dir/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
        natoms=$(<span class="fn2">grep</span> <span class="st">&quot;NIONS&quot;</span> $dir/OUTCAR | <span class="fn2">head</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $NF}&#39;</span>)
        per_atom=$(<span class="fn2">echo</span> <span class="st">&quot;$e / $natoms&quot;</span> | <span class="fn2">bc</span> -l)
        <span class="fn2">printf</span> <span class="st">&quot;%-20s %12.6f %15.6f\\n&quot;</span> <span class="st">&quot;$dir&quot;</span> <span class="st">&quot;$e&quot;</span> <span class="st">&quot;$per_atom&quot;</span>
    <span class="kw">fi</span>
<span class="kw">done</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"2. DOS 绘图脚本",-1)),t("div",W1,[t("div",j1,[s[60]||(s[60]=t("span",{class:"la"},"python",-1)),s[61]||(s[61]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[62]||(s[62]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 DOSCAR</span>
<span class="kw">def</span> <span class="fn2">read_doscar</span>(filename=<span class="st">&#39;DOSCAR&#39;</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    natoms = <span class="fn2">int</span>(lines[<span class="nu">0</span>].split()[<span class="nu">0</span>])
    nedos = <span class="fn2">int</span>(lines[<span class="nu">5</span>].split()[<span class="nu">2</span>])
    efermi = <span class="fn2">float</span>(lines[<span class="nu">5</span>].split()[<span class="nu">3</span>])
    
    <span class="cm"># 总 DOS</span>
    dos_data = []
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">6</span>, <span class="nu">6</span> + nedos):
        dos_data.append([<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[i].split()])
    
    dos_data = np.array(dos_data)
    <span class="kw">return</span> dos_data[:, <span class="nu">0</span>] - efermi, dos_data[:, <span class="nu">1</span>], efermi

<span class="cm"># 绘制 DOS</span>
energy, dos, efermi = <span class="fn2">read_doscar</span>()

fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
ax.plot(energy, dos, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.fill_between(energy, dos, alpha=<span class="nu">0.3</span>)
ax.axvline(x=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;DOS (states/eV)&#39;</span>)
ax.set_xlim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;dos.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"3. 能带图绘制脚本",-1)),t("div",z1,[t("div",Y1,[s[63]||(s[63]=t("span",{class:"la"},"python",-1)),s[64]||(s[64]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[17]||(s[17]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[65]||(s[65]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 EIGENVAL</span>
<span class="kw">def</span> <span class="fn2">read_eigenval</span>(filename=<span class="st">&#39;EIGENVAL&#39;</span>):
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        lines = f.readlines()
    
    header = lines[<span class="nu">5</span>].split()
    nelect = <span class="fn2">int</span>(header[<span class="nu">0</span>])
    nkpoints = <span class="fn2">int</span>(header[<span class="nu">1</span>])
    nbands = <span class="fn2">int</span>(header[<span class="nu">2</span>])
    
    kpoints = []
    eigenvals = []
    
    idx = <span class="nu">6</span>
    <span class="kw">for</span> k <span class="kw">in</span> <span class="fn2">range</span>(nkpoints):
        kpoint = [<span class="fn2">float</span>(x) <span class="kw">for</span> x <span class="kw">in</span> lines[idx].split()[:<span class="nu">3</span>]]
        kpoints.append(kpoint)
        idx += <span class="nu">1</span>
        
        bands = []
        <span class="kw">for</span> b <span class="kw">in</span> <span class="fn2">range</span>(nbands):
            bands.append(<span class="fn2">float</span>(lines[idx].split()[<span class="nu">1</span>]))
            idx += <span class="nu">1</span>
        eigenvals.append(bands)
    
    <span class="kw">return</span> np.array(kpoints), np.array(eigenvals), nbands

<span class="cm"># 计算 k 距离</span>
<span class="kw">def</span> <span class="fn2">k_distance</span>(kpoints):
    dist = [<span class="nu">0</span>]
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(<span class="nu">1</span>, <span class="fn2">len</span>(kpoints)):
        dk = np.linalg.norm(kpoints[i] - kpoints[i-<span class="nu">1</span>])
        dist.append(dist[-<span class="nu">1</span>] + dk)
    <span class="kw">return</span> np.array(dist)

<span class="cm"># 绘制能带</span>
kpoints, eigenvals, nbands = <span class="fn2">read_eigenval</span>()
kdist = <span class="fn2">k_distance</span>(kpoints)

<span class="cm"># 读取费米能级（从 OUTCAR）</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;OUTCAR&#39;</span>, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
    <span class="kw">for</span> line <span class="kw">in</span> f:
        <span class="kw">if</span> <span class="st">&#39;E-fermi&#39;</span> <span class="kw">in</span> line:
            efermi = <span class="fn2">float</span>(line.split()[<span class="nu">2</span>])
            <span class="kw">break</span>

fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn2">range</span>(nbands):
    ax.plot(kdist, eigenvals[:, i] - efermi, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">0.8</span>)

ax.axhline(y=<span class="nu">0</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;Fermi level&#39;</span>)
ax.set_xlabel(<span class="st">&#39;K-path&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Energy - E<sub>F</sub> (eV)&#39;</span>)
ax.set_ylim(-<span class="nu">5</span>, <span class="nu">5</span>)
ax.legend()
plt.savefig(<span class="st">&#39;band_structure.png&#39;</span>, dpi=<span class="nu">150</span>, bbox_inches=<span class="st">&#39;tight&#39;</span>)
plt.show()</code></pre>`,1))]),s[95]||(s[95]=t("h2",null,"批量计算脚本模板",-1)),s[96]||(s[96]=t("h3",null,"1. 批量结构优化",-1)),t("div",Z1,[t("div",X1,[s[66]||(s[66]=t("span",{class:"la"},"bash",-1)),s[67]||(s[67]=t("span",{class:"fn"},"batch_optimize.sh",-1)),t("button",{class:"cpb",onClick:s[18]||(s[18]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[68]||(s[68]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 批量提交多个结构优化任务</span>

<span class="cm"># 任务列表</span>
structures=(<span class="st">&quot;Si&quot;</span> <span class="st">&quot;Ge&quot;</span> <span class="st">&quot;GaAs&quot;</span>)

<span class="kw">for</span> struct <span class="kw">in</span> \${structures[@]}; <span class="kw">do</span>
    <span class="fn2">mkdir</span> -p $struct
    <span class="fn2">cp</span> INCAR_opt KPOINTS POTCAR_\${struct} $struct/POTCAR
    <span class="fn2">cp</span> POSCAR_\${struct} $struct/POSCAR
    
    <span class="fn2">cd</span> $struct
    <span class="fn2">echo</span> <span class="st">&quot;Submitting $struct ...&quot;</span>
    <span class="fn2">sbatch</span> vasp_job.sh  <span class="cm"># 或 mpirun -np 16 vasp_std</span>
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="fn2">echo</span> <span class="st">&quot;All jobs submitted!&quot;</span></code></pre>`,1))]),s[97]||(s[97]=t("h3",null,"2. ENCUT 收敛测试",-1)),t("div",J1,[t("div",Q1,[s[69]||(s[69]=t("span",{class:"la"},"bash",-1)),s[70]||(s[70]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[19]||(s[19]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[71]||(s[71]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># ENCUT 收敛性测试</span>

<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    
    <span class="cm"># 生成 INCAR</span>
    <span class="fn2">cat</span> &gt; ENCUT_\${encut}/INCAR &lt;&lt; EOF
SYSTEM = ENCUT test
ENCUT = \${encut}
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
EOF
    
    <span class="fn2">cd</span> ENCUT_\${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取结果</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT    Energy(eV)&quot;</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${encut}      \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[98]||(s[98]=t("h2",null,"常用命令速查",-1)),t("div",_1,[t("div",sm,[s[72]||(s[72]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[20]||(s[20]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[73]||(s[73]=i(`<pre><code><span class="cm"># 提取能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 提取力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 检查收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR

<span class="cm"># 查看费米能级</span>
<span class="fn2">grep</span> <span class="st">&quot;E-fermi&quot;</span> OUTCAR

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span>

<span class="cm"># 查看 POTCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 NELECT</span>
<span class="fn2">grep</span> NELECT OUTCAR</code></pre>`,1))])])}const tm=J(v1,[["render",nm]]),am={name:"CalculatorView",data(){return{enmax:250,safetyFactor:1.3,latticeA:5.43,latticeB:5.43,latticeC:5.43,targetNa:30,numAtoms:100,encutForMem:400,numKpoints:64,eAB:-3.72,eA:-3.5,eB:-4.86,moleFraction:.5,eSlabAds:-156.234,eSlab:-148.5,eMol:-9.86}},computed:{recommendedEncut(){return Math.round(this.enmax*this.safetyFactor)},kpoints(){const n=s=>Math.max(1,Math.ceil(s));return{a:n(this.targetNa/this.latticeA),b:n(this.targetNa/this.latticeB),c:n(this.targetNa/this.latticeC)}},totalKpoints(){return this.kpoints.a*this.kpoints.b*this.kpoints.c},estimatedMemory(){const n=this.encutForMem/400*.1,s=this.numAtoms*n*Math.sqrt(this.numKpoints);return Math.round(s*10)/10},formationEnergy(){return this.eAB-this.moleFraction*this.eA-(1-this.moleFraction)*this.eB},adsorptionEnergy(){return this.eSlabAds-this.eSlab-this.eMol}}},lm={class:"sec active"},pm={class:"bread"},em={class:"calculator-card"},om={class:"calc-input-group"},dm={class:"calc-input-group"},rm={class:"calc-result"},cm={class:"result-value"},im={class:"result-note"},um={class:"calc-formula"},fm={class:"calculator-card"},mm={class:"calc-input-group"},bm={class:"calc-input-group"},gm={class:"calc-input-group"},vm={class:"calc-input-group"},hm={class:"calc-result"},ym={class:"result-value kpoints-grid"},km={class:"result-note"},Cm={class:"calc-formula"},wm={class:"calculator-card"},Sm={class:"calc-input-group"},Am={class:"calc-input-group"},Em={class:"calc-input-group"},Tm={class:"calc-result"},Rm={class:"result-value"},Om={class:"calculator-card"},Pm={class:"calc-input-group"},Im={class:"calc-input-group"},xm={class:"calc-input-group"},Nm={class:"calc-input-group"},qm={class:"calc-result"},Mm={class:"result-note"},Dm={class:"calculator-card"},Fm={class:"calc-input-group"},Vm={class:"calc-input-group"},Gm={class:"calc-input-group"},$m={class:"calc-result"},Bm={class:"result-note"};function Lm(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",lm,[t("div",pm,[w(d,{to:"/"},{default:T(()=>[...s[16]||(s[16]=[f("首页",-1)])]),_:1}),s[18]||(s[18]=f("/ ",-1)),w(d,{to:"/tools"},{default:T(()=>[...s[17]||(s[17]=[f("工具",-1)])]),_:1}),s[19]||(s[19]=f("/ ",-1)),s[20]||(s[20]=t("span",null,"计算工具",-1))]),s[47]||(s[47]=t("h2",null,"实用计算工具",-1)),s[48]||(s[48]=t("p",null,"这些工具帮助你快速计算 VASP 所需的参数。",-1)),s[49]||(s[49]=t("h3",null,"ENCUT 截断能计算器",-1)),s[50]||(s[50]=t("p",null,"根据 POTCAR 中的 ENMAX 值计算推荐的 ENCUT 设置。",-1)),t("div",em,[t("div",om,[s[21]||(s[21]=t("label",null,"ENMAX 最大值 (eV)",-1)),vs(t("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>o.enmax=p),type:"number",placeholder:"例如: 250"},null,512),[[As,o.enmax,void 0,{number:!0}]])]),t("div",dm,[s[23]||(s[23]=t("label",null,"安全系数",-1)),vs(t("select",{"onUpdate:modelValue":s[1]||(s[1]=p=>o.safetyFactor=p)},[...s[22]||(s[22]=[t("option",{value:1},"1.0 (标准)",-1),t("option",{value:1.3},"1.3 (推荐)",-1),t("option",{value:1.5},"1.5 (高精度)",-1)])],512),[[xl,o.safetyFactor,void 0,{number:!0}]])]),t("div",rm,[s[24]||(s[24]=t("div",{class:"result-label"},"推荐 ENCUT",-1)),t("div",cm,Z(l.recommendedEncut)+" eV",1),t("div",im,"ENMAX × "+Z(o.safetyFactor),1)]),t("div",um,[t("code",null,"ENCUT = ENMAX(max) × "+Z(o.safetyFactor),1)])]),s[51]||(s[51]=t("h3",null,"K 点密度计算器",-1)),s[52]||(s[52]=t("p",null,"根据晶格常数自动推荐 K 点网格。",-1)),t("div",fm,[t("div",mm,[s[25]||(s[25]=t("label",null,"晶格常数 a (Å)",-1)),vs(t("input",{"onUpdate:modelValue":s[2]||(s[2]=p=>o.latticeA=p),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[As,o.latticeA,void 0,{number:!0}]])]),t("div",bm,[s[26]||(s[26]=t("label",null,"晶格常数 b (Å)",-1)),vs(t("input",{"onUpdate:modelValue":s[3]||(s[3]=p=>o.latticeB=p),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[As,o.latticeB,void 0,{number:!0}]])]),t("div",gm,[s[27]||(s[27]=t("label",null,"晶格常数 c (Å)",-1)),vs(t("input",{"onUpdate:modelValue":s[4]||(s[4]=p=>o.latticeC=p),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[As,o.latticeC,void 0,{number:!0}]])]),t("div",vm,[s[29]||(s[29]=t("label",null,"目标 N×a",-1)),vs(t("select",{"onUpdate:modelValue":s[5]||(s[5]=p=>o.targetNa=p)},[...s[28]||(s[28]=[t("option",{value:25},"25 (快速)",-1),t("option",{value:30},"30 (标准)",-1),t("option",{value:35},"35 (高精度)",-1)])],512),[[xl,o.targetNa,void 0,{number:!0}]])]),t("div",hm,[s[30]||(s[30]=t("div",{class:"result-label"},"推荐 K 点网格",-1)),t("div",ym,[t("span",null,Z(l.kpoints.a)+" × "+Z(l.kpoints.b)+" × "+Z(l.kpoints.c),1)]),t("div",km,"总 K 点数: "+Z(l.totalKpoints),1)]),t("div",Cm,[t("code",null,"N_k = round("+Z(o.targetNa)+" / lattice_a)",1)])]),s[53]||(s[53]=t("h3",null,"内存估算器",-1)),s[54]||(s[54]=t("p",null,"估算 VASP 计算所需的大致内存。",-1)),t("div",wm,[t("div",Sm,[s[31]||(s[31]=t("label",null,"原子数",-1)),vs(t("input",{"onUpdate:modelValue":s[6]||(s[6]=p=>o.numAtoms=p),type:"number",placeholder:"例如: 100"},null,512),[[As,o.numAtoms,void 0,{number:!0}]])]),t("div",Am,[s[32]||(s[32]=t("label",null,"ENCUT (eV)",-1)),vs(t("input",{"onUpdate:modelValue":s[7]||(s[7]=p=>o.encutForMem=p),type:"number",placeholder:"例如: 400"},null,512),[[As,o.encutForMem,void 0,{number:!0}]])]),t("div",Em,[s[33]||(s[33]=t("label",null,"K 点数",-1)),vs(t("input",{"onUpdate:modelValue":s[8]||(s[8]=p=>o.numKpoints=p),type:"number",placeholder:"例如: 64"},null,512),[[As,o.numKpoints,void 0,{number:!0}]])]),t("div",Tm,[s[34]||(s[34]=t("div",{class:"result-label"},"估算内存",-1)),t("div",Rm,Z(l.estimatedMemory)+" GB",1),s[35]||(s[35]=t("div",{class:"result-note"},"每原子约 50-200 MB",-1))])]),s[55]||(s[55]=t("h3",null,"形成能计算器",-1)),s[56]||(s[56]=t("p",null,"快速计算化合物的形成能。",-1)),t("div",Om,[t("div",Pm,[s[36]||(s[36]=t("label",null,"化合物能量 E(AB) (eV/atom)",-1)),vs(t("input",{"onUpdate:modelValue":s[9]||(s[9]=p=>o.eAB=p),type:"number",step:"0.001",placeholder:"例如: -3.720"},null,512),[[As,o.eAB,void 0,{number:!0}]])]),t("div",Im,[s[37]||(s[37]=t("label",null,"参考态 A 能量 E(A) (eV/atom)",-1)),vs(t("input",{"onUpdate:modelValue":s[10]||(s[10]=p=>o.eA=p),type:"number",step:"0.001",placeholder:"例如: -3.500"},null,512),[[As,o.eA,void 0,{number:!0}]])]),t("div",xm,[s[38]||(s[38]=t("label",null,"参考态 B 能量 E(B) (eV/atom)",-1)),vs(t("input",{"onUpdate:modelValue":s[11]||(s[11]=p=>o.eB=p),type:"number",step:"0.001",placeholder:"例如: -4.860"},null,512),[[As,o.eB,void 0,{number:!0}]])]),t("div",Nm,[s[39]||(s[39]=t("label",null,"A 的摩尔分数 x",-1)),vs(t("input",{"onUpdate:modelValue":s[12]||(s[12]=p=>o.moleFraction=p),type:"number",step:"0.1",placeholder:"例如: 0.5"},null,512),[[As,o.moleFraction,void 0,{number:!0}]])]),t("div",qm,[s[40]||(s[40]=t("div",{class:"result-label"},"形成能 ΔH_f",-1)),t("div",{class:j(["result-value",{stable:l.formationEnergy<0,unstable:l.formationEnergy>0}])},Z(l.formationEnergy.toFixed(4))+" eV/atom ",3),t("div",Mm,Z(l.formationEnergy<0?"✓ 热力学稳定":"✗ 热力学不稳定"),1)]),s[41]||(s[41]=t("div",{class:"calc-formula"},[t("code",null,"ΔH_f = E(AB) - x·E(A) - (1-x)·E(B)")],-1))]),s[57]||(s[57]=t("h3",null,"吸附能计算器",-1)),s[58]||(s[58]=t("p",null,"计算分子在表面的吸附能。",-1)),t("div",Dm,[t("div",Fm,[s[42]||(s[42]=t("label",null,"吸附体系能量 E(slab+ads) (eV)",-1)),vs(t("input",{"onUpdate:modelValue":s[13]||(s[13]=p=>o.eSlabAds=p),type:"number",step:"0.001",placeholder:"例如: -156.234"},null,512),[[As,o.eSlabAds,void 0,{number:!0}]])]),t("div",Vm,[s[43]||(s[43]=t("label",null,"干净表面能量 E(slab) (eV)",-1)),vs(t("input",{"onUpdate:modelValue":s[14]||(s[14]=p=>o.eSlab=p),type:"number",step:"0.001",placeholder:"例如: -148.500"},null,512),[[As,o.eSlab,void 0,{number:!0}]])]),t("div",Gm,[s[44]||(s[44]=t("label",null,"自由分子能量 E(mol) (eV)",-1)),vs(t("input",{"onUpdate:modelValue":s[15]||(s[15]=p=>o.eMol=p),type:"number",step:"0.001",placeholder:"例如: -9.860"},null,512),[[As,o.eMol,void 0,{number:!0}]])]),t("div",$m,[s[45]||(s[45]=t("div",{class:"result-label"},"吸附能 E_ads",-1)),t("div",{class:j(["result-value",{stable:l.adsorptionEnergy<0,unstable:l.adsorptionEnergy>0}])},Z(l.adsorptionEnergy.toFixed(4))+" eV ",3),t("div",Bm,Z(l.adsorptionEnergy<0?"✓ 吸附放热（稳定）":"✗ 吸附吸热（不稳定）"),1)]),s[46]||(s[46]=t("div",{class:"calc-formula"},[t("code",null,"E_ads = E(slab+ads) - E(slab) - E(mol)")],-1))])])}const Um=J(am,[["render",Lm],["__scopeId","data-v-e0fb01ec"]]),Km={name:"SurfaceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Hm={class:"sec active"},Wm={class:"bread"},jm={class:"cb"},zm={class:"ch"},Ym={class:"cb"},Zm={class:"ch"},Xm={class:"cb"},Jm={class:"ch"},Qm={class:"cb"},_m={class:"ch"};function s0(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Hm,[t("div",Wm,[w(d,{to:"/"},{default:T(()=>[...s[4]||(s[4]=[f("首页",-1)])]),_:1}),s[6]||(s[6]=f("/ ",-1)),w(d,{to:"/tasks"},{default:T(()=>[...s[5]||(s[5]=[f("计算任务",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),s[8]||(s[8]=t("span",null,"表面计算",-1))]),s[20]||(s[20]=i('<h2>表面模型构建与计算</h2><p>表面计算是催化、腐蚀、薄膜生长等研究的基础。VASP 使用 <strong>slab 模型</strong>来模拟表面。</p><h3>1. Slab 模型结构</h3><div class="db"><div class="db-t">Slab 模型示意图</div><div style="text-align:center;font-family:var(--font-mono);font-size:13px;line-height:2.2;color:var(--text-secondary);"><div style="border:1px solid var(--border);border-radius:8px;padding:16px;display:inline-block;background:var(--bg-elevated);min-width:280px;"><div style="color:var(--blue);">← 真空层 (≥12 Å) →</div><div style="margin:8px 0;border-bottom:1px dashed var(--border-light);padding-bottom:8px;"><div style="color:var(--red);">○ ○ ○ ○ ○ ← 吸附层（可选）</div></div><div style="color:var(--green);">● ● ● ● ● ← 表面层</div><div style="color:var(--green);">● ● ● ● ● ← 次表面层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="margin-top:8px;color:var(--accent);font-size:11px;">底部 2-3 层固定，模拟体相</div></div></div></div><h3>2. 关键参数</h3><table class="tb"><thead><tr><th>参数</th><th>建议</th><th>说明</th></tr></thead><tbody><tr><td><strong>层数</strong></td><td>4-7 层</td><td>太薄不准确，太厚计算量大</td></tr><tr><td><strong>真空层</strong></td><td>≥12 Å</td><td>防止 slab 间相互作用</td></tr><tr><td><strong>固定层</strong></td><td>底部 2-3 层</td><td>模拟体相，用 Selective dynamics</td></tr><tr><td><strong>表面尺寸</strong></td><td>依研究需要</td><td>1×1, 2×2 等</td></tr><tr><td><strong>K 点</strong></td><td>k×k×1</td><td>z 方向为 1</td></tr></tbody></table><h3>3. pymatgen 自动生成</h3>',7)),t("div",jm,[t("div",zm,[s[9]||(s[9]=t("span",{class:"la"},"python",-1)),s[10]||(s[10]=t("span",{class:"fn"},"generate_slab.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.core.surface <span class="kw">import</span> SlabGenerator

bulk = Structure.<span class="fn2">from_file</span>(<span class="st">&quot;POSCAR_bulk&quot;</span>)

slabgen = SlabGenerator(
    bulk, 
    miller_index=(<span class="nu">1</span>,<span class="nu">1</span>,<span class="nu">1</span>),
    min_slab_size=<span class="nu">10</span>,      <span class="cm">; slab 厚度 (Å)</span>
    min_vacuum_size=<span class="nu">15</span>,   <span class="cm">; 真空层厚度 (Å)</span>
    center_slab=<span class="kw">True</span>,
    in_unit_planes=<span class="kw">True</span>,
)
slabs = slabgen.<span class="fn2">get_slabs</span>()
slabs[<span class="nu">0</span>].<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_slab&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;原子数: {len(slabs[0])}&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;层数: {slabgen._nlayers_slab}&quot;</span>)</code></pre>`,1))]),s[21]||(s[21]=t("h3",null,"4. INCAR 设置",-1)),t("div",Ym,[t("div",Zm,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Cu(111) surface</span>
<span class="kw">ENCUT</span>    = <span class="nu">450</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>              <span class="cm">; 表面必须 ISIF=2（只优化离子）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>              <span class="cm">; MP 展宽（金属）</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>
<span class="kw">LDIPOL</span>   = <span class="nu">.TRUE.</span>         <span class="cm">; 偶极校正</span>
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>              <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[22]||(s[22]=t("h3",null,"5. KPOINTS 设置",-1)),t("div",Xm,[t("div",Jm,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"表面计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=t("pre",null,[t("code",null,[f(`Automatic mesh
0
Gamma
12 12 1               `),t("span",{class:"cm"},"; z 方向设为 1"),f(`
0.0 0.0 0.0`)])],-1))]),s[23]||(s[23]=i('<div class="ib warn"><strong>重要：</strong>表面计算<strong>必须</strong>用 <code>ISIF=2</code>；KPOINTS z 方向设为 <code>1</code>；非对称 slab 开启偶极校正。</div><h3>6. 表面能计算</h3><div class="fb"><div class="fm">γ = (E_slab - N × E_bulk) / (2 × A)</div><div class="fd">γ: 表面能, A: 表面积, 2: 两个表面, N: slab 中的原子数</div></div>',3)),t("div",Qm,[t("div",_m,[s[18]||(s[18]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="cm"># 计算表面能</span>
E_slab = <span class="nu">-156.234</span>   <span class="cm">; slab 总能量 (eV)</span>
E_bulk = <span class="nu">-3.720</span>     <span class="cm">; 体相单原子能量 (eV/atom)</span>
N = <span class="nu">48</span>              <span class="cm">; slab 中的原子数</span>
A = <span class="nu">86.52</span>           <span class="cm">; 表面积 (Å²)</span>

gamma = (E_slab - N * E_bulk) / (<span class="nu">2</span> * A)
gamma_Jm2 = gamma * <span class="nu">16.02</span>  <span class="cm">; 转换为 J/m²</span>

<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma:.4f} eV/Å²&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma_Jm2:.2f} J/m²&quot;</span>)</code></pre>`,1))])])}const n0=J(Km,[["render",s0]]),t0={name:"DefectView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},a0={class:"sec active"},l0={class:"bread"},p0={class:"cb"},e0={class:"ch"},o0={class:"cb"},d0={class:"ch"},r0={class:"cb"},c0={class:"ch"};function i0(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",a0,[t("div",l0,[w(d,{to:"/"},{default:T(()=>[...s[3]||(s[3]=[f("首页",-1)])]),_:1}),s[5]||(s[5]=f("/ ",-1)),w(d,{to:"/tasks"},{default:T(()=>[...s[4]||(s[4]=[f("计算任务",-1)])]),_:1}),s[6]||(s[6]=f("/ ",-1)),s[7]||(s[7]=t("span",null,"缺陷计算",-1))]),s[16]||(s[16]=i('<h2>点缺陷形成能计算</h2><p>点缺陷（空位、间隙、替位）是理解材料性质的关键，形成能决定了缺陷浓度。</p><h3>1. 缺陷类型</h3><table class="tb"><thead><tr><th>类型</th><th>符号</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>空位</td><td>V<sub>A</sub></td><td>缺少原子 A</td><td>V<sub>Si</sub> (Si 空位)</td></tr><tr><td>间隙</td><td>A<sub>i</sub></td><td>额外原子 A</td><td>O<sub>i</sub> (O 间隙)</td></tr><tr><td>替位</td><td>B<sub>A</sub></td><td>B 替代 A</td><td>N<sub>O</sub> (N 替代 O)</td></tr><tr><td>反位</td><td>A<sub>B</sub></td><td>A 占据 B 位</td><td>As<sub>Ga</sub></td></tr></tbody></table><h3>2. 形成能公式</h3><div class="fb"><div class="fm">E<sub>f</sub> = E<sub>defect</sub> - E<sub>perfect</sub> + Σ n<sub>i</sub>μ<sub>i</sub> + q(E<sub>VBM</sub> + E<sub>Fermi</sub>) + E<sub>corr</sub></div><div class="fd">n<sub>i</sub>: 原子数变化 | μ<sub>i</sub>: 化学势 | q: 电荷 | E<sub>corr</sub>: 有限尺寸校正</div></div><h3>3. 计算流程</h3><div class="fc"><div class="fn2-node s">构建完美超胞（如 3×3×3）</div><div class="fa"></div><div class="fn2-node p">优化完美超胞 → E<sub>perfect</sub></div><div class="fa"></div><div class="fn2-node p">引入缺陷（删除/替换/插入原子）</div><div class="fa"></div><div class="fn2-node p">优化缺陷超胞 → E<sub>defect</sub></div><div class="fa"></div><div class="fn2-node p">有限尺寸校正（FNV）</div><div class="fa"></div><div class="fn2-node e">计算缺陷形成能</div></div><h3>4. 超胞构建</h3>',9)),t("div",p0,[t("div",e0,[s[8]||(s[8]=t("span",{class:"la"},"python",-1)),s[9]||(s[9]=t("span",{class:"fn"},"build_supercell.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[10]||(s[10]=i(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
<span class="kw">from</span> pymatgen.transformations.advanced_transformations <span class="kw">import</span> SupercellTransformation

<span class="cm"># 读取原胞</span>
prim = Structure.<span class="fn2">from_file</span>(<span class="st">&quot;POSCAR_prim&quot;</span>)

<span class="cm"># 创建 3x3x3 超胞</span>
sc_matrix = [[<span class="nu">3</span>,<span class="nu">0</span>,<span class="nu">0</span>],[<span class="nu">0</span>,<span class="nu">3</span>,<span class="nu">0</span>],[<span class="nu">0</span>,<span class="nu">0</span>,<span class="nu">3</span>]]
trans = SupercellTransformation(sc_matrix)
supercell = trans.<span class="fn2">apply_transformation</span>(prim)

supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;原子数: {len(supercell)}&quot;</span>)

<span class="cm"># 创建空位</span>
<span class="kw">from</span> pymatgen.analysis.defects.core <span class="kw">import</span> Vacancy
vacancy = Vacancy(supercell, site_index=<span class="nu">0</span>)
defect_struct = vacancy.<span class="fn2">get_defect_structure</span>()
defect_struct.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_vacancy&quot;</span>)</code></pre>`,1))]),s[17]||(s[17]=t("h3",null,"5. 带电缺陷 INCAR",-1)),t("div",o0,[t("div",d0,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"+1 电荷缺陷",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[13]||(s[13]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si vacancy +1</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 带电缺陷关键参数</span>
<span class="kw">NELECT</span>   = <span class="nu">287</span>           <span class="cm">; 总电子数 = 完美超胞 NELECT - q</span>
<span class="kw">ISYM</span>     = <span class="nu">0</span>             <span class="cm">; 带电缺陷必须关闭对称性</span>
<span class="kw">NUPDOWN</span>  = <span class="nu">0</span>             <span class="cm">; 总自旋（如果不确定设为 0）</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib note"},[t("strong",null,"NELECT 计算："),f("先运行完美超胞，在 OUTCAR 中查找 NELECT。带 q 电荷的缺陷：NELECT"),t("sub",null,"defect"),f(" = NELECT"),t("sub",null,"perfect"),f(" - q")],-1)),s[19]||(s[19]=t("h3",null,"6. 有限尺寸校正",-1)),s[20]||(s[20]=t("p",null,"带电缺陷需要校正超胞有限尺寸效应，常用 FNV 方法：",-1)),t("div",r0,[t("div",c0,[s[14]||(s[14]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[15]||(s[15]=i(`<pre><code><span class="kw">from</span> pymatgen.analysis.defects.corrections <span class="kw">import</span> FreysoldtCorrection

<span class="cm"># 使用 pymatgen 进行 FNV 校正</span>
correction = FreysoldtCorrection(
    dielectric=<span class="nu">10.0</span>,       <span class="cm">; 介电常数</span>
    defect_dir=<span class="st">&quot;defect_calc&quot;</span>,
    bulk_dir=<span class="st">&quot;bulk_calc&quot;</span>,
)
correction.<span class="fn2">get_correction</span>()</code></pre>`,1))]),s[21]||(s[21]=i('<h3>7. 化学势范围</h3><div class="db"><div class="db-t">化学势约束</div><p>对于化合物 A<sub>x</sub>B<sub>y</sub>：</p><ul><li>x·μ<sub>A</sub> + y·μ<sub>B</sub> = μ<sub>AB</sub>（化合物）</li><li>μ<sub>A</sub> ≤ μ<sub>A</sub><sup>0</sup>（元素参考态）</li><li>μ<sub>B</sub> ≤ μ<sub>B</sub><sup>0</sup></li></ul><p>常见极限：A-rich（μ<sub>A</sub> = μ<sub>A</sub><sup>0</sup>）和 A-poor（μ<sub>B</sub> = μ<sub>B</sub><sup>0</sup>）</p></div>',2))])}const u0=J(t0,[["render",i0]]),f0={name:"PhononView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},m0={class:"sec active"},b0={class:"bread"},g0={class:"cb"},v0={class:"ch"},h0={class:"cb"},y0={class:"ch"},k0={class:"cb"},C0={class:"ch"},w0={class:"cb"},S0={class:"ch"},A0={class:"cb"},E0={class:"ch"},T0={class:"cb"},R0={class:"ch"};function O0(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",m0,[t("div",b0,[w(d,{to:"/"},{default:T(()=>[...s[6]||(s[6]=[f("首页",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),w(d,{to:"/tasks"},{default:T(()=>[...s[7]||(s[7]=[f("计算任务",-1)])]),_:1}),s[9]||(s[9]=f("/ ",-1)),s[10]||(s[10]=t("span",null,"声子计算",-1))]),s[26]||(s[26]=i('<h2>声子计算</h2><p>声子谱反映晶格动力学稳定性，虚频意味着结构不稳定。使用 phonopy + VASP 进行声子计算。</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">优化结构（得到 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">phonopy --vasp -d --dim=&quot;3 3 3&quot;</div><div class="fa"></div><div class="fn2-node p">生成超胞 POSCAR（DISP-001, 002...）</div><div class="fa"></div><div class="fn2-node p">对每个超胞做静态计算</div><div class="fa"></div><div class="fn2-node p">phonopy -f DISP-*/vasprun.xml</div><div class="fa"></div><div class="fn2-node e">phonopy-bandplot → 声子谱</div></div><h3>2. 优化 INCAR（高精度要求）</h3>',5)),t("div",g0,[t("div",v0,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"声子前结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[13]||(s[13]=i(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 需要较高精度</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>          <span class="cm">; 严格收敛（比普通计算更严）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-1E-4</span>         <span class="cm">; 力收敛到 0.0001 eV/Å</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib warn"},[t("strong",null,"精度要求："),f("声子计算对结构非常敏感。需要高 ENCUT、严格力收敛（"),t("code",null,"EDIFFG = -1E-4"),f("）、足够 k 点。")],-1)),s[28]||(s[28]=t("h3",null,"3. 静态计算 INCAR",-1)),t("div",h0,[t("div",y0,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"位移超胞静态计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 与优化一致</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>            <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>             <span class="cm">; 静态计算</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要电荷密度</span></code></pre>`,1))]),s[29]||(s[29]=t("h3",null,"4. 批量计算脚本",-1)),t("div",k0,[t("div",C0,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),s[18]||(s[18]=t("span",{class:"fn"},"phonon_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 步骤 1：生成位移超胞</span>
<span class="fn2">cp</span> CONTCAR POSCAR-orig
<span class="fn2">phonopy</span> --vasp -d --dim=<span class="st">&quot;3 3 3&quot;</span>

<span class="cm"># 步骤 2：批量计算</span>
<span class="kw">for</span> d <span class="kw">in</span> DISP-*; <span class="kw">do</span>
    <span class="fn2">echo</span> <span class="st">&quot;Calculating $d ...&quot;</span>
    <span class="fn2">cd</span> $d
    <span class="fn2">cp</span> ../INCAR_static INCAR
    <span class="fn2">cp</span> ../POTCAR ./
    <span class="fn2">cp</span> ../KPOINTS ./
    <span class="fn2">mpirun</span> -np <span class="nu">16</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 步骤 3：提取力常数并生成声子谱</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR-orig band.conf
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[30]||(s[30]=t("h3",null,"5. band.conf 配置文件",-1)),t("div",w0,[t("div",S0,[s[20]||(s[20]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[21]||(s[21]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# Si 声子谱配置"),f(`
ATOM_NAME = Si
DIM = 3 3 3
PRIMITIVE_AXIS = 1 0 0  0 1 0  0 0 1

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),f(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51

`),t("span",{class:"cm"},"# 输出设置"),f(`
FORCE_CONSTANTS = WRITE
EIGENVECTORS = .TRUE.`)])],-1))]),s[31]||(s[31]=t("h3",null,"6. 声子 DOS 计算",-1)),t("div",A0,[t("div",E0,[s[22]||(s[22]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[23]||(s[23]=i(`<pre><code><span class="cm"># mesh.conf 文件</span>
<span class="fn2">cat</span> &gt; mesh.conf &lt;&lt; EOF
ATOM_NAME = Si
DIM = 3 3 3
MESH = 20 20 20
MP = 0.0 0.0 0.0
TETRAHEDRON = .TRUE.
EOF

<span class="cm"># 计算声子 DOS</span>
<span class="fn2">phonopy</span> -f DISP-*/vasprun.xml
<span class="fn2">phonopy</span> -c POSCAR-orig mesh.conf
<span class="fn2">phonopy-dosplot</span></code></pre>`,1))]),s[32]||(s[32]=i('<h3>7. 虚频处理</h3><table class="tb"><thead><tr><th>虚频情况</th><th>含义</th><th>处理方法</th></tr></thead><tbody><tr><td>无虚频</td><td>结构稳定</td><td>无需处理</td></tr><tr><td>小虚频 (&lt; 0.1 THz)</td><td>数值噪声</td><td>通常可忽略</td></tr><tr><td>大虚频</td><td>结构不稳定</td><td>沿虚频模式扰动结构后重新优化</td></tr><tr><td>声学模虚频</td><td>计算误差</td><td>提高精度或忽略</td></tr></tbody></table>',2)),t("div",T0,[t("div",R0,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 查看虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;f  =&quot;</span> phonopy_output.yaml | <span class="fn2">head</span> -20

<span class="cm"># 如果有虚频，沿虚频模式扰动结构</span>
<span class="fn2">phonopy</span> --readfc --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR band.conf
<span class="cm"># 查看虚频对应的特征矢量，沿该方向微调原子位置</span></code></pre>`,1))]),s[33]||(s[33]=t("h3",null,"8. 常见问题",-1)),s[34]||(s[34]=t("div",{class:"ib warn"},[t("strong",null,"注意事项："),t("ul",null,[t("li",null,"优化和静态计算必须使用相同的 ENCUT、KPOINTS 和 POTCAR"),t("li",null,"超胞大小要足够（通常 2-4 倍原胞）"),t("li",null,"力收敛标准要严格（EDIFFG = -1E-4 或更小）"),t("li",null,"phonopy 版本要与 VASP 版本兼容")])],-1))])}const P0=J(f0,[["render",O0]]),I0={name:"ConvergenceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},x0={class:"sec active"},N0={class:"bread"},q0={class:"cb"},M0={class:"ch"},D0={class:"cb"},F0={class:"ch"},V0={class:"cb"},G0={class:"ch"};function $0(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",x0,[t("div",N0,[w(d,{to:"/"},{default:T(()=>[...s[3]||(s[3]=[f("首页",-1)])]),_:1}),s[4]||(s[4]=f("/ ",-1)),s[5]||(s[5]=t("span",null,"收敛性测试",-1))]),s[15]||(s[15]=t("h2",null,"收敛性测试",-1)),s[16]||(s[16]=t("p",null,"收敛性测试是确保计算结果可靠的关键步骤。需要测试 ENCUT 和 K 点两个参数。",-1)),s[17]||(s[17]=t("h3",null,"1. ENCUT 收敛测试",-1)),s[18]||(s[18]=t("p",null,"测试截断能对总能量的影响，确保能量已收敛。",-1)),t("div",q0,[t("div",M0,[s[6]||(s[6]=t("span",{class:"la"},"bash",-1)),s[7]||(s[7]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[8]||(s[8]=i(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 ENCUT</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> ENCUT_\${encut}
    <span class="fn2">cp</span> POSCAR KPOINTS POTCAR ENCUT_\${encut}/
    
    <span class="cm"># 创建 INCAR</span>
    <span class="fn2">cat</span> &gt; ENCUT_\${encut}/INCAR &lt;&lt; EOF
SYSTEM = ENCUT test
ENCUT = \${encut}
PREC = Accurate
EDIFF = 1E-6
IBRION = -1
NSW = 0
ISMEAR = 0
SIGMA = 0.05
EOF
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> ENCUT_\${encut}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;ENCUT(eV)    Energy(eV)&quot;</span>
<span class="kw">for</span> encut <span class="kw">in</span> <span class="nu">200 250 300 350 400 450 500 550 600</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> ENCUT_\${encut}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${encut}         \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[19]||(s[19]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),f("相邻 ENCUT 能量差 < "),t("code",null,"1 meV/atom"),f(" 时收敛。例如：400 eV vs 450 eV 的能量差除以原子数应 < 0.001 eV/atom。")],-1)),s[20]||(s[20]=t("h3",null,"2. K 点收敛测试",-1)),s[21]||(s[21]=t("p",null,"测试 k 点密度对总能量的影响。",-1)),t("div",D0,[t("div",F0,[s[9]||(s[9]=t("span",{class:"la"},"bash",-1)),s[10]||(s[10]=t("span",{class:"fn"},"kpoint_test.sh",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 测试不同 K 点网格</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    <span class="fn2">mkdir</span> KPOINTS_\${k}x\${k}x\${k}
    <span class="fn2">cp</span> POSCAR POTCAR INCAR KPOINTS_\${k}x\${k}x\${k}/
    
    <span class="cm"># 创建 KPOINTS</span>
    <span class="fn2">cat</span> &gt; KPOINTS_\${k}x\${k}x\${k}/KPOINTS &lt;&lt; EOF
Automatic mesh
0
Gamma
\${k} \${k} \${k}
0.0 0.0 0.0
EOF
    
    <span class="cm"># 运行计算</span>
    <span class="fn2">cd</span> KPOINTS_\${k}x\${k}x\${k}
    <span class="fn2">mpirun</span> -np <span class="nu">4</span> vasp_std
    <span class="fn2">cd</span> ..
<span class="kw">done</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;K-points    Energy(eV)&quot;</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="nu">2 3 4 5 6 7 8 10 12</span>; <span class="kw">do</span>
    e=$(<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> KPOINTS_\${k}x\${k}x\${k}/OUTCAR | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>)
    <span class="fn2">echo</span> <span class="st">&quot;\${k}x\${k}x\${k}     \${e}&quot;</span>
<span class="kw">done</span></code></pre>`,1))]),s[22]||(s[22]=i('<h3>3. K 点密度经验公式</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>晶格常数 a</th><th>推荐 N<sub>k</sub></th><th>网格</th></tr></thead><tbody><tr><td>3.0 Å</td><td>10</td><td>10×10×10</td></tr><tr><td>4.0 Å</td><td>8</td><td>8×8×8</td></tr><tr><td>5.0 Å</td><td>6</td><td>6×6×6</td></tr><tr><td>6.0 Å</td><td>5</td><td>5×5×5</td></tr><tr><td>8.0 Å</td><td>4</td><td>4×4×4</td></tr></tbody></table><h3>4. 不同材料的 K 点建议</h3><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td>8×8×8 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td>4×4×4 ~ 6×6×6</td><td>通常足够</td></tr><tr><td>绝缘体</td><td>3×3×3 ~ 4×4×4</td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td>k×k×1</td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td>1×1×1</td><td>无周期性</td></tr></tbody></table><h3>5. 绘制收敛图</h3>',6)),t("div",V0,[t("div",G0,[s[12]||(s[12]=t("span",{class:"la"},"python",-1)),s[13]||(s[13]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># ENCUT 收敛数据</span>
encut = [<span class="nu">200</span>, <span class="nu">250</span>, <span class="nu">300</span>, <span class="nu">350</span>, <span class="nu">400</span>, <span class="nu">450</span>, <span class="nu">500</span>]
energy = [<span class="nu">-100.123</span>, <span class="nu">-100.456</span>, <span class="nu">-100.567</span>, <span class="nu">-100.612</span>, <span class="nu">-100.623</span>, <span class="nu">-100.625</span>, <span class="nu">-100.626</span>]

<span class="cm"># 相对于最高 ENCUT 的能量差</span>
ref = energy[-<span class="nu">1</span>]
delta = [(e - ref) * <span class="nu">1000</span> <span class="kw">for</span> e <span class="kw">in</span> energy]  <span class="cm"># meV</span>

fig, (ax1, ax2) = plt.subplots(<span class="nu">1</span>, <span class="nu">2</span>, figsize=(<span class="nu">10</span>, <span class="nu">4</span>))

ax1.plot(encut, energy, <span class="st">&#39;o-&#39;</span>)
ax1.set_xlabel(<span class="st">&#39;ENCUT (eV)&#39;</span>)
ax1.set_ylabel(<span class="st">&#39;Energy (eV)&#39;</span>)
ax1.set_title(<span class="st">&#39;ENCUT Convergence&#39;</span>)

ax2.plot(encut, delta, <span class="st">&#39;s-&#39;</span>)
ax2.axhline(y=<span class="nu">1</span>, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, label=<span class="st">&#39;1 meV/atom threshold&#39;</span>)
ax2.set_xlabel(<span class="st">&#39;ENCUT (eV)&#39;</span>)
ax2.set_ylabel(<span class="st">&#39;ΔE (meV)&#39;</span>)
ax2.set_title(<span class="st">&#39;Energy Difference&#39;</span>)
ax2.legend()

plt.tight_layout()
plt.savefig(<span class="st">&#39;encut_convergence.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[23]||(s[23]=t("h3",null,"6. 收敛测试注意事项",-1)),s[24]||(s[24]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"固定其他参数，只改变一个变量"),t("li",null,"ENCUT 测试时使用足够密的 K 点"),t("li",null,"K 点测试时使用足够大的 ENCUT"),t("li",null,"计算每原子能量进行比较"),t("li",null,"对于精确计算（如能量差），收敛标准应更严格（< 0.5 meV/atom）")])],-1))])}const B0=J(I0,[["render",$0]]),L0={name:"CheatSheetView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},U0={class:"sec active"},K0={class:"bread"},H0={class:"cb"},W0={class:"ch"},j0={class:"cb"},z0={class:"ch"},Y0={class:"cb"},Z0={class:"ch"},X0={class:"cb"},J0={class:"ch"};function Q0(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",U0,[t("div",K0,[w(d,{to:"/"},{default:T(()=>[...s[4]||(s[4]=[f("首页",-1)])]),_:1}),s[5]||(s[5]=f("/ ",-1)),s[6]||(s[6]=t("span",null,"速查手册",-1))]),s[18]||(s[18]=i('<h2>速查手册</h2><p>VASP 常用参数、命令和设置的快速参考。</p><h3>1. INCAR 参数速查</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>常用值</th><th>默认值</th></tr></thead><tbody><tr><td><code>ENCUT</code></td><td>平面波截断能 (eV)</td><td>400-600</td><td>POTCAR ENMAX</td></tr><tr><td><code>PREC</code></td><td>计算精度</td><td>Accurate</td><td>Normal</td></tr><tr><td><code>EDIFF</code></td><td>电子步收敛标准</td><td>1E-6</td><td>1E-4</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛标准</td><td>-0.02 (eV/Å)</td><td>-0.01</td></tr><tr><td><code>IBRION</code></td><td>离子弛豫方法</td><td>1 或 2</td><td>-1</td></tr><tr><td><code>NSW</code></td><td>最大离子步数</td><td>100-300</td><td>0</td></tr><tr><td><code>ISIF</code></td><td>优化类型</td><td>2 或 3</td><td>2</td></tr><tr><td><code>ISMEAR</code></td><td>展宽方法</td><td>0, 1, -5</td><td>1</td></tr><tr><td><code>SIGMA</code></td><td>展宽宽度 (eV)</td><td>0.05, 0.2</td><td>0.2</td></tr><tr><td><code>NELM</code></td><td>最大电子步数</td><td>60-200</td><td>60</td></tr><tr><td><code>ISPIN</code></td><td>自旋极化</td><td>1 或 2</td><td>1</td></tr><tr><td><code>MAGMOM</code></td><td>初始磁矩</td><td>依体系</td><td>0</td></tr><tr><td><code>LREAL</code></td><td>实空间投影</td><td>Auto, .FALSE.</td><td>.FALSE.</td></tr><tr><td><code>ALGO</code></td><td>电子算法</td><td>Normal, Fast</td><td>Normal</td></tr></tbody></table><h3>2. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>3. IBRION 优化方法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td>推荐默认</td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼MD</td><td>特殊体系</td></tr></tbody></table><h3>4. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>1</code></td><td>✓</td><td>✓</td><td>✓</td><td>MD+晶格</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅晶格</td></tr><tr><td><code>6</code></td><td>✗</td><td>✗</td><td>✓</td><td>仅形状</td></tr><tr><td><code>7</code></td><td>✗</td><td>✓</td><td>✗</td><td>仅体积</td></tr></tbody></table><h3>5. 常用 bash 命令</h3>',11)),t("div",H0,[t("div",W0,[s[7]||(s[7]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[8]||(s[8]=i(`<pre><code><span class="cm"># 提取能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 提取力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 检查收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR

<span class="cm"># 查看费米能级</span>
<span class="fn2">grep</span> <span class="st">&quot;E-fermi&quot;</span> OUTCAR

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看应力</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span>

<span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POTCAR 中的 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看总电子数</span>
<span class="fn2">grep</span> NELECT OUTCAR

<span class="cm"># 快速诊断</span>
<span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR</code></pre>`,1))]),s[19]||(s[19]=t("h3",null,"6. 常见计算任务 INCAR 模板",-1)),s[20]||(s[20]=t("h4",null,"结构优化",-1)),t("div",j0,[t("div",z0,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"体相优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=t("h4",null,"态密度计算",-1)),t("div",Y0,[t("div",Z0,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DOS calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>           <span class="cm">; 四面体法</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影 DOS</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>        <span class="cm">; 保留波函数</span></code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"能带计算",-1)),t("div",X0,[t("div",J0,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Band structure",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Band structure</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>           <span class="cm">; 从 WAVECAR 读取</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影能带</span></code></pre>`,1))]),s[23]||(s[23]=i('<h3>7. POTCAR 选择指南</h3><table class="tb"><thead><tr><th>后缀</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>标准 PBE</td><td>最常用</td></tr><tr><td><code>_sv</code></td><td>半芯态</td><td>3d 过渡金属</td></tr><tr><td><code>_d</code></td><td>d 电子 p 区</td><td>Ga, Ge, As</td></tr><tr><td><code>_GW</code></td><td>高精度</td><td>GW 计算</td></tr><tr><td><code>_h</code></td><td>硬赝势</td><td>高截断能</td></tr></tbody></table><h3>8. 单位换算</h3><table class="tb"><thead><tr><th>物理量</th><th>VASP 单位</th><th>换算</th></tr></thead><tbody><tr><td>能量</td><td>eV</td><td>1 eV = 96.485 kJ/mol = 23.06 kcal/mol</td></tr><tr><td>力</td><td>eV/Å</td><td>1 eV/Å = 16.02 nN</td></tr><tr><td>压力</td><td>kbar</td><td>1 kbar = 0.1 GPa = 100 MPa</td></tr><tr><td>距离</td><td>Å</td><td>1 Å = 0.1 nm</td></tr><tr><td>磁矩</td><td>μB</td><td>玻尔磁子</td></tr><tr><td>频率</td><td>THz</td><td>声子频率</td></tr></tbody></table><h3>9. 文件大小估算</h3><table class="tb"><thead><tr><th>文件</th><th>大小公式</th><th>典型值</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>~N<sup>3</sup> × N<sub>bands</sub> × N<sub>k</sub> × 8 bytes</td><td>1-100 GB</td></tr><tr><td><code>CHGCAR</code></td><td>~N<sup>3</sup> × 50 bytes</td><td>100 MB - 10 GB</td></tr><tr><td><code>OUTCAR</code></td><td>取决于 NSW 和 NWRITE</td><td>100 MB - 2 GB</td></tr></tbody></table><h3>10. 错误信息速查</h3><table class="tb"><thead><tr><th>错误信息</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>DENTET</td><td>能带数不足</td><td>增加 NBANDS</td></tr><tr><td>ZBRENT</td><td>线搜索失败</td><td>减小 POTIM 或换 IBRION=1</td></tr><tr><td>SGRCON</td><td>晶格矢量错误</td><td>检查右手定则</td></tr><tr><td>ROTK</td><td>对称性问题</td><td>ISYM=0 或微扰结构</td></tr><tr><td>memory</td><td>内存不足</td><td>LREAL=Auto 或减少 NPAR</td></tr></tbody></table>',8))])}const _0=J(L0,[["render",Q0]]),sb={name:"ErrorsScfView",data(){return{selectedOption:null,showFeedback:!1,feedbackText:"",feedbackStyle:{}}},methods:{selectOption(n){this.selectedOption=n,document.querySelectorAll(".qo").forEach((s,a)=>{s.classList.toggle("sel",a===n)})},checkAnswer(){this.showFeedback=!0,this.selectedOption===1?(this.feedbackText="✓ 回答正确！检查 MAGMOM 设置是排查 SCF 不收敛的首要步骤。",this.feedbackStyle={background:"var(--green-dim)",border:"1px solid var(--green)",color:"var(--green)"},document.querySelectorAll(".qo")[1].classList.add("ok")):(this.feedbackText='✗ 回答错误。正确答案是"检查 MAGMOM 设置"。',this.feedbackStyle={background:"var(--red-dim)",border:"1px solid var(--red)",color:"var(--red)"},document.querySelectorAll(".qo")[this.selectedOption].classList.add("no"),document.querySelectorAll(".qo")[1].classList.add("ok"))},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},nb={class:"sec active"},tb={class:"bread"},ab={class:"ec open"},lb={class:"ec-b",style:{display:"block"}},pb={class:"cb"},eb={class:"ch"},ob={class:"ec open"},db={class:"ec-b",style:{display:"block"}},rb={class:"cb"},cb={class:"ch"},ib={class:"ec open"},ub={class:"ec-b",style:{display:"block"}},fb={class:"cb"},mb={class:"ch"},bb={class:"ec open"},gb={class:"ec-b",style:{display:"block"}},vb={class:"cb"},hb={class:"ch"},yb={class:"ec open"},kb={class:"ec-b",style:{display:"block"}},Cb={class:"cb"},wb={class:"ch"},Sb={class:"qb"},Ab={class:"qbd"},Eb=["disabled"];function Tb(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",nb,[t("div",tb,[w(d,{to:"/"},{default:T(()=>[...s[10]||(s[10]=[f("首页",-1)])]),_:1}),s[12]||(s[12]=f("/ ",-1)),w(d,{to:"/errors"},{default:T(()=>[...s[11]||(s[11]=[f("错误诊断",-1)])]),_:1}),s[13]||(s[13]=f("/ ",-1)),s[14]||(s[14]=t("span",null,"SCF 不收敛",-1))]),s[56]||(s[56]=t("h2",null,"SCF 不收敛问题",-1)),s[57]||(s[57]=t("p",null,"SCF（自洽场）不收敛是 VASP 计算中最高频的问题。以下是完整排查清单和解决方案。",-1)),t("div",ab,[s[19]||(s[19]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：电子步达到 NELM 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",lb,[s[17]||(s[17]=i('<h4>症状</h4><div class="esym">DAV: 64 -0.275E+03 0.217E+00 -0.109E+00<br>（能量差持续振荡不下降）</div><h4>常见原因</h4><ul><li><strong>初始磁矩设置不当</strong>（最常见）- 对含过渡金属体系尤其重要</li><li><strong>展宽方法错误</strong> - 金属用了 ISMEAR=0 或绝缘体用了 ISMEAR=1</li><li><strong>截断能太低</strong> - ENCUT 不足导致数值不稳定</li><li><strong>初始结构不合理</strong> - 原子距离太近或结构有冲突</li><li><strong>强关联体系</strong> - 需要设置 +U 或使用杂化泛函</li></ul><h4>解决方案</h4>',5)),t("div",pb,[t("div",eb,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm"># 方案 1：降低收敛标准（临时方案）</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>           <span class="cm">; 默认 0.4，降低可增强稳定性</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>        <span class="cm">; 默认 0.001</span>
<span class="kw">AMIX_MAG</span> = <span class="nu">0.2</span>           <span class="cm">; 磁性体系需要</span>
<span class="kw">BMIX_MAG</span> = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span>           <span class="cm">; 默认 60</span>

<span class="cm"># 方案 4：Kerker 预处理（金属推荐）</span>
<span class="kw">IMIX</span>     = <span class="st">&#39;Kerker&#39;</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>

<span class="cm"># 方案 5：金属用正确展宽</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>

<span class="cm"># 方案 6：设置初始磁矩</span>
<span class="kw">MAGMOM</span>   = <span class="nu">3 3 3 0 0 0</span>   <span class="cm">; 每个原子的初始磁矩</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib tip"},[t("strong",null,"排查顺序："),f("① MAGMOM 设置 ② ISMEAR 是否正确 ③ 降低 AMIX ④ 检查原子距离 ⑤ 是否需要 +U")],-1))])]),t("div",ob,[s[28]||(s[28]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：DENTET - 能带数不足"),t("span",{class:"es sc"},"高频")],-1)),t("div",db,[s[22]||(s[22]=t("h4",null,"症状",-1)),s[23]||(s[23]=t("div",{class:"esym"},[f("WARNING: DENTET: can't reach specified NBANDS"),t("br"),f("NELECT = 120.0000 NBANDS = 64")],-1)),s[24]||(s[24]=t("h4",null,"原因",-1)),s[25]||(s[25]=t("p",null,"能带数目 NBANDS 不足以容纳所有电子，导致费米能级无法正确确定。",-1)),s[26]||(s[26]=t("h4",null,"解决方案",-1)),t("div",rb,[t("div",cb,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[21]||(s[21]=i(`<pre><code><span class="cm"># 手动增加能带数</span>
<span class="kw">NBANDS</span>   = <span class="nu">160</span>

<span class="cm"># 经验公式：</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms/2 (绝缘体)</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms   (金属/磁性)</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib note"},[t("strong",null,"查看 NELECT："),f("在 POTCAR 中 grep ZVAL 求和，或在 OUTCAR 中搜索 NELECT。")],-1))])]),t("div",ib,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：ZBRENT - 线搜索失败"),t("span",{class:"es scm"},"常见")],-1)),t("div",ub,[s[31]||(s[31]=t("h4",null,"症状",-1)),s[32]||(s[32]=t("div",{class:"esym"},[f("ZBRENT: fatal error in bracketing"),t("br"),f("ZBRENT: the minimum is not bracketed")],-1)),s[33]||(s[33]=t("h4",null,"原因",-1)),s[34]||(s[34]=t("p",null,"CG 优化算法中线搜索失败，通常是步长过大或势能面过于复杂。",-1)),s[35]||(s[35]=t("h4",null,"解决方案",-1)),t("div",fb,[t("div",mb,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[30]||(s[30]=i(`<pre><code><span class="cm"># 方案 1：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; CG → RMM-DIIS</span>

<span class="cm"># 方案 2：缩小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.01</span>          <span class="cm">; 默认 0.5</span>

<span class="cm"># 方案 3：先用大步长粗优化，再精细优化</span>
<span class="cm"># 第一步：</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>
<span class="cm"># 第二步（用 CONTCAR 继续）：</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">POTIM</span>    = <span class="nu">0.5</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span></code></pre>`,1))])])]),s[58]||(s[58]=i('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：SCF 收敛但结果不合理</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>检查清单</h4><table class="tb"><thead><tr><th>检查项</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>POTCAR 泛函</td><td><code>grep TITEL POTCAR</code></td><td>确认使用正确的泛函</td></tr><tr><td>ENCUT 足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>K 点足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>自旋极化</td><td>ISPIN=2</td><td>含 3d/4f 金属通常需要</td></tr><tr><td>是否需要 +U</td><td>LDAU=.TRUE.</td><td>强关联体系</td></tr><tr><td>原子距离</td><td>检查 POSCAR</td><td>确保没有原子重叠</td></tr></tbody></table></div></div>',1)),t("div",bb,[s[45]||(s[45]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 5：VERY BAD NEWS! SGRCON 错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",gb,[s[39]||(s[39]=t("h4",null,"症状",-1)),s[40]||(s[40]=t("div",{class:"esym"},[f("VERY BAD NEWS! internal error in subroutine SGRCON"),t("br"),f("The product of the three lattice vectors is negative")],-1)),s[41]||(s[41]=t("h4",null,"原因",-1)),s[42]||(s[42]=t("p",null,"晶格矢量构成的不是右手坐标系。VASP 要求三个晶格矢量 a×b·c > 0。",-1)),s[43]||(s[43]=t("h4",null,"解决方案",-1)),s[44]||(s[44]=t("ol",null,[t("li",null,"在 VESTA 中重新导出 POSCAR"),t("li",null,"使用 pymatgen 重新生成 POSCAR"),t("li",null,"手动交换 POSCAR 中两行晶格矢量")],-1)),t("div",vb,[t("div",hb,[s[37]||(s[37]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[38]||(s[38]=i(`<pre><code><span class="cm"># 检查晶格矢量是否构成右手系</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np

a = np.array([<span class="nu">5.43</span>, <span class="nu">0</span>, <span class="nu">0</span>])
b = np.array([<span class="nu">0</span>, <span class="nu">5.43</span>, <span class="nu">0</span>])
c = np.array([<span class="nu">0</span>, <span class="nu">0</span>, <span class="nu">5.43</span>])

det = np.dot(np.cross(a, b), c)
<span class="fn2">print</span>(f<span class="st">&quot;det = {det}&quot;</span>)  <span class="cm"># 应该 &gt; 0</span></code></pre>`,1))])])]),t("div",yb,[s[49]||(s[49]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 6：ROTK 旋转矩阵错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",kb,[s[48]||(s[48]=i('<h4>症状</h4><div class="esym">WARNING in EDDRMM: rotation matrix not orthogonal<br>ROTK: internal ERROR</div><h4>原因</h4><p>通常是结构对称性过高或原子位置不合理导致。</p><h4>解决方案</h4><ol><li>微扰原子位置（添加小的随机位移）</li><li>使用 <code>SYMPREC = 1E-6</code> 放宽对称性判断</li><li>设置 <code>ISYM = 0</code> 关闭对称性（最后手段）</li></ol>',6)),t("div",Cb,[t("div",wb,[s[46]||(s[46]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[47]||(s[47]=i(`<pre><code><span class="cm"># 微扰原子位置</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write
<span class="kw">import</span> numpy <span class="kw">as</span> np

atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
atoms.rattle(stdev=<span class="nu">0.01</span>)  <span class="cm"># 添加 0.01 Å 的随机位移</span>
write(<span class="st">&#39;POSCAR_rattled&#39;</span>, atoms)</code></pre>`,1))])])]),t("div",Sb,[s[55]||(s[55]=t("div",{class:"qh"},[t("span",{class:"ql"},"练习"),t("span",{class:"qt"},"SCF 问题排查")],-1)),t("div",Ab,[s[54]||(s[54]=t("p",null,[t("strong",null,"问题："),f("SCF 不收敛时，首先应检查什么？")],-1)),t("div",{class:"qo",onClick:s[5]||(s[5]=p=>l.selectOption(0))},[...s[50]||(s[50]=[t("div",{class:"qr"},null,-1),t("span",null,"增加 NSW",-1)])]),t("div",{class:"qo",onClick:s[6]||(s[6]=p=>l.selectOption(1))},[...s[51]||(s[51]=[t("div",{class:"qr"},null,-1),t("span",null,"检查 MAGMOM 设置",-1)])]),t("div",{class:"qo",onClick:s[7]||(s[7]=p=>l.selectOption(2))},[...s[52]||(s[52]=[t("div",{class:"qr"},null,-1),t("span",null,"更换 POTCAR",-1)])]),t("div",{class:"qo",onClick:s[8]||(s[8]=p=>l.selectOption(3))},[...s[53]||(s[53]=[t("div",{class:"qr"},null,-1),t("span",null,"减小 ENCUT",-1)])]),o.showFeedback?(D(),F("div",{key:0,class:"qf show",style:Yn(o.feedbackStyle)},Z(o.feedbackText),5)):Sn("",!0),t("button",{class:"qs",onClick:s[9]||(s[9]=(...p)=>l.checkAnswer&&l.checkAnswer(...p)),disabled:o.selectedOption===null},"提交答案",8,Eb)])])])}const Rb=J(sb,[["render",Tb]]),Ob={name:"ErrorsIonView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Pb={class:"sec active"},Ib={class:"bread"},xb={class:"ec open"},Nb={class:"ec-b",style:{display:"block"}},qb={class:"cb"},Mb={class:"ch"},Db={class:"ec open"},Fb={class:"ec-b",style:{display:"block"}},Vb={class:"cb"},Gb={class:"ch"},$b={class:"cb"},Bb={class:"ch"},Lb={class:"ec open"},Ub={class:"ec-b",style:{display:"block"}},Kb={class:"cb"},Hb={class:"ch"},Wb={class:"ec open"},jb={class:"ec-b",style:{display:"block"}},zb={class:"cb"},Yb={class:"ch"};function Zb(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Pb,[t("div",Ib,[w(d,{to:"/"},{default:T(()=>[...s[5]||(s[5]=[f("首页",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),w(d,{to:"/errors"},{default:T(()=>[...s[6]||(s[6]=[f("错误诊断",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),s[9]||(s[9]=t("span",null,"离子步问题",-1))]),s[39]||(s[39]=t("h2",null,"离子步问题诊断",-1)),s[40]||(s[40]=t("p",null,"离子步问题通常涉及结构优化不收敛、原子跑飞或力不收敛。",-1)),t("div",xb,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：达到 NSW 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",Nb,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,'计算正常结束，但 OUTCAR 中显示 "reached required accuracy" 未出现。',-1)),s[14]||(s[14]=t("h4",null,"解决方案",-1)),t("div",qb,[t("div",Mb,[s[10]||(s[10]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="cm"># 方案 1：增大离子步数</span>
<span class="kw">NSW</span>      = <span class="nu">300</span>           <span class="cm">; 默认 0，建议 100-300</span>

<span class="cm"># 方案 2：放宽力收敛标准</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>         <span class="cm">; 默认 -0.01，常用 -0.02 到 -0.05</span>

<span class="cm"># 方案 3：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; 2=CG, 1=RMM-DIIS（更快但不稳定）</span>

<span class="cm"># 方案 4：减小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.2</span>           <span class="cm">; 默认 0.5，振荡时减小</span></code></pre>`,1))]),s[15]||(s[15]=t("div",{class:"ib tip"},[t("strong",null,"判断是否真的需要优化："),f("查看 OSZICAR 中的能量是否在下降。如果能量已经稳定，可以适当放宽 EDIFFG。")],-1))])]),t("div",Db,[s[26]||(s[26]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：原子跑飞 / 结构崩塌"),t("span",{class:"es sc"},"高频")],-1)),t("div",Fb,[s[21]||(s[21]=t("h4",null,"症状",-1)),s[22]||(s[22]=t("div",{class:"esym"},[f("distance between some ions is very small !!"),t("br"),f("或能量突然增大到 10^6 eV")],-1)),s[23]||(s[23]=t("h4",null,"常见原因",-1)),s[24]||(s[24]=t("ul",null,[t("li",null,"初始结构原子距离太近（< 1.5 Å）"),t("li",null,"POTIM 步长太大"),t("li",null,"POSCAR 坐标类型写错（Direct 写成 Cartesian）"),t("li",null,"POSCAR 和 POTCAR 元素顺序不一致")],-1)),s[25]||(s[25]=t("h4",null,"解决方案",-1)),t("div",Vb,[t("div",Gb,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=i(`<pre><code><span class="cm"># 缩小步长，增加稳定性</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>           <span class="cm">; 从 0.1 开始</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>          <span class="cm">; 放宽电子收敛</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.1</span>          <span class="cm">; 放宽力收敛</span></code></pre>`,1))]),t("div",$b,[t("div",Bb,[s[19]||(s[19]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[20]||(s[20]=i(`<pre><code><span class="cm"># 检查原子距离</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read
atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
distances = atoms.get_all_distances()
<span class="fn2">print</span>(f<span class="st">&quot;最小距离: {distances[distances &gt; 0].min():.2f} Å&quot;</span>)

<span class="cm"># 如果 &lt; 1.5 Å，需要重新构建结构</span></code></pre>`,1))])])]),s[41]||(s[41]=i('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：力不收敛但能量收敛</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><p>能量变化很小，但最大力仍然大于 EDIFFG 设置的阈值。</p><h4>解决方案</h4><ul><li>降低 <code>EDIFF = 1E-7</code> 或更小</li><li>增加 ENCUT（提高 30-50 eV）</li><li>加密 K 点</li><li>使用 <code>IBRION = 1</code>（RMM-DIIS 通常对力收敛更好）</li><li>检查是否需要开启自旋（ISPIN=2）</li></ul></div></div>',1)),t("div",Lb,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：ISIF=3 时晶格参数异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Ub,[s[30]||(s[30]=i('<table class="tb"><thead><tr><th>可能原因</th><th>解决</th><th>说明</th></tr></thead><tbody><tr><td>GGA-PBE 本身高估晶格</td><td>正常误差 ~1-2%</td><td>这是 PBE 泛函的特点</td></tr><tr><td>需要杂化泛函</td><td>使用 HSE06</td><td>但计算量大 10-100 倍</td></tr><tr><td>需要 +U</td><td>添加 LDAU 参数</td><td>含 3d/4f 金属的氧化物</td></tr><tr><td>需要范德华修正</td><td>IVDW=11 或 IVDW=12</td><td>层状材料、分子晶体</td></tr><tr><td>初始结构太差</td><td>重新构建初始结构</td><td>用实验值或文献值</td></tr></tbody></table>',1)),t("div",Kb,[t("div",Hb,[s[27]||(s[27]=t("span",{class:"la"},"INCAR",-1)),s[28]||(s[28]=t("span",{class:"fn"},"晶格优化参数",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[29]||(s[29]=i(`<pre><code><span class="cm"># 基本晶格优化</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子位置+晶格</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>         <span class="cm">; 力收敛标准</span>

<span class="cm"># 添加范德华修正（层状材料）</span>
<span class="kw">IVDW</span>     = <span class="nu">11</span>            <span class="cm">; DFT-D3 方法</span>

<span class="cm"># 强关联体系</span>
<span class="kw">LDAU</span>     = <span class="nu">.TRUE.</span>
<span class="kw">LDAUTYPE</span> = <span class="nu">2</span>             <span class="cm">; Dudarev 方法</span>
<span class="kw">LDAUL</span>    = <span class="nu">2 -1 -1</span>       <span class="cm">; l 量子数，-1 表示不加 U</span>
<span class="kw">LDAUU</span>    = <span class="nu">4.0 0 0</span>       <span class="cm">; U 值 (eV)</span>
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>       <span class="cm">; J 值</span></code></pre>`,1))])])]),t("div",Wb,[s[38]||(s[38]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：压力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",jb,[s[34]||(s[34]=t("h4",null,"症状",-1)),s[35]||(s[35]=t("p",null,"OUTCAR 中外部压力（external pressure）与期望值相差很大。",-1)),s[36]||(s[36]=t("h4",null,"查看压力",-1)),t("div",zb,[t("div",Yb,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[33]||(s[33]=t("pre",null,[t("code",null,[t("span",{class:"fn2"},"grep"),f(),t("span",{class:"st"},'"external pressure"'),f(" OUTCAR")])],-1))]),s[37]||(s[37]=i('<h4>解决方案</h4><table class="tb"><thead><tr><th>情况</th><th>处理</th></tr></thead><tbody><tr><td>压力很大 (&gt; 10 kbar)</td><td>继续优化，ISIF=3</td></tr><tr><td>压力振荡</td><td>减小 POTIM</td></tr><tr><td>压力趋于稳定但不为零</td><td>检查 ENCUT 和 K 点是否足够</td></tr><tr><td>只要能量不要晶格</td><td>使用 ISIF=2</td></tr></tbody></table>',2))])])])}const Xb=J(Ob,[["render",Zb]]),Jb={name:"ErrorsMemoryView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Qb={class:"sec active"},_b={class:"bread"},sg={class:"ec open"},ng={class:"ec-b",style:{display:"block"}},tg={class:"cb"},ag={class:"ch"},lg={class:"ec open"},pg={class:"ec-b",style:{display:"block"}},eg={class:"cb"},og={class:"ch"},dg={class:"cb"},rg={class:"ch"},cg={class:"ec open"},ig={class:"ec-b",style:{display:"block"}},ug={class:"cb"},fg={class:"ch"};function mg(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Qb,[t("div",_b,[w(d,{to:"/"},{default:T(()=>[...s[4]||(s[4]=[f("首页",-1)])]),_:1}),s[6]||(s[6]=f("/ ",-1)),w(d,{to:"/errors"},{default:T(()=>[...s[5]||(s[5]=[f("错误诊断",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),s[8]||(s[8]=t("span",null,"内存与性能",-1))]),s[32]||(s[32]=t("h2",null,"内存与性能问题",-1)),s[33]||(s[33]=t("p",null,"内存溢出和计算速度慢是大规模计算中的常见问题。",-1)),t("div",sg,[s[13]||(s[13]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：Out of memory / Killed"),t("span",{class:"es sc"},"高频")],-1)),t("div",ng,[s[11]||(s[11]=i('<h4>症状</h4><div class="esym">forrtl: severe (41): insufficient virtual memory<br>或直接显示 Killed（被系统杀死）</div><h4>内存估算</h4><table class="tb"><thead><tr><th>原子数</th><th>ENCUT</th><th>估算内存</th></tr></thead><tbody><tr><td>50</td><td>400 eV</td><td>~10 GB</td></tr><tr><td>100</td><td>400 eV</td><td>~20-40 GB</td></tr><tr><td>200</td><td>400 eV</td><td>~60-100 GB</td></tr><tr><td>500</td><td>400 eV</td><td>~200+ GB</td></tr></tbody></table><h4>解决方案</h4>',5)),t("div",tg,[t("div",ag,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[10]||(s[10]=i(`<pre><code><span class="cm"># 方案 1：实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>          <span class="cm">; 实空间计算投影算符</span>
<span class="kw">LREAL</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 默认，倒空间计算（更精确但费内存）</span>

<span class="cm"># 方案 2：减少同时处理的轨道数</span>
<span class="kw">NSIM</span>     = <span class="nu">1</span>             <span class="cm">; 默认 4，设为 1 最省内存</span>

<span class="cm"># 方案 3：减少 K 点并行</span>
<span class="kw">KPAR</span>     = <span class="nu">1</span>             <span class="cm">; 减少 K 点并行度</span>

<span class="cm"># 方案 4：不写大文件</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 WAVECAR</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 CHGCAR</span></code></pre>`,1))]),s[12]||(s[12]=t("div",{class:"ib tip"},[t("strong",null,"检查内存使用："),f("运行时查看 "),t("code",null,"top"),f(" 或 "),t("code",null,"free -h"),f(" 命令。")],-1))])]),t("div",lg,[s[23]||(s[23]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：计算速度太慢"),t("span",{class:"es scm"},"常见")],-1)),t("div",pg,[s[20]||(s[20]=t("h4",null,"性能优化 INCAR",-1)),t("div",eg,[t("div",og,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"性能优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>          <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>            <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>             <span class="cm">; 减少输出</span></code></pre>`,1))]),s[21]||(s[21]=i('<h4>并行设置</h4><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',2)),t("div",dg,[t("div",rg,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"并行设置示例（64 核，4 节点，每节点 16 核）",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="cm"># 64 核，4 节点，8 个 K 点</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个节点</span>
<span class="kw">KPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个 K 点并行（整除 8）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>            <span class="cm">; 每节点 16 核</span></code></pre>`,1))]),s[22]||(s[22]=t("div",{class:"ib warn"},[t("strong",null,"注意："),f("NPAR × KPAR × NCORE 应整除总核心数。NPAR 应整除 NBANDS。")],-1))])]),s[34]||(s[34]=i('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：磁盘空间不足</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><div class="esym">forrtl: severe (30): open unit, error on file OPEN</div><h4>文件大小参考</h4><table class="tb"><thead><tr><th>文件</th><th>典型大小</th><th>说明</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>1-100 GB</td><td>最大文件</td></tr><tr><td><code>CHGCAR</code></td><td>100 MB - 10 GB</td><td>电荷密度</td></tr><tr><td><code>OUTCAR</code></td><td>100 MB - 2 GB</td><td>详细输出</td></tr><tr><td><code>vasprun.xml</code></td><td>100 MB - 5 GB</td><td>XML 输出</td></tr></tbody></table><h4>解决方案</h4><ol><li>检查磁盘：<code>df -h</code></li><li>删除不需要的文件：<code>rm WAVECAR</code></li><li>设置 <code>LWAVE = .FALSE.</code></li><li>设置 <code>LCHARG = .FALSE.</code></li><li>使用 <code>NWRITE = 0</code> 减少输出</li></ol></div></div>',1)),t("div",cg,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟢"),t("span",{class:"et"},"问题 4：MPI 通信效率低"),t("span",{class:"es smn"},"优化")],-1)),t("div",ig,[s[26]||(s[26]=t("h4",null,"症状",-1)),s[27]||(s[27]=t("p",null,"使用大量核心但加速比不理想（如 128 核只比 64 核快 1.5 倍）。",-1)),s[28]||(s[28]=t("h4",null,"诊断方法",-1)),t("div",ug,[t("div",fg,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -20

<span class="cm"># 时间分布</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Parallel routine&quot;</span> OUTCAR -A 20</code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"优化建议",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,"确保核心数整除 NPAR、KPAR、NCORE"),t("li",null,"K 点少时，减少 KPAR"),t("li",null,"能带少时，减少 NPAR"),t("li",null,"使用高速网络（InfiniBand）")],-1))])]),s[35]||(s[35]=i('<h3>性能调优总结</h3><div class="db"><div class="db-t">不同场景的推荐设置</div><table class="tb"><thead><tr><th>场景</th><th>LREAL</th><th>ALGO</th><th>NPAR</th><th>KPAR</th></tr></thead><tbody><tr><td>小体系 (&lt; 50 原子)</td><td>.FALSE.</td><td>Normal</td><td>核心数</td><td>K 点数</td></tr><tr><td>中体系 (50-200 原子)</td><td>Auto</td><td>Fast</td><td>节点数</td><td>1</td></tr><tr><td>大体系 (&gt; 200 原子)</td><td>Auto</td><td>Fast</td><td>1</td><td>1</td></tr></tbody></table></div>',2))])}const bg=J(Jb,[["render",mg]]),gg={name:"ErrorsFilesView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},vg={class:"sec active"},hg={class:"bread"},yg={class:"ec open"},kg={class:"ec-b",style:{display:"block"}},Cg={class:"cb"},wg={class:"ch"},Sg={class:"ec open"},Ag={class:"ec-b",style:{display:"block"}},Eg={class:"cb"},Tg={class:"ch"},Rg={class:"ec open"},Og={class:"ec-b",style:{display:"block"}},Pg={class:"cb"},Ig={class:"ch"},xg={class:"cb"},Ng={class:"ch"},qg={class:"ec open"},Mg={class:"ec-b",style:{display:"block"}},Dg={class:"cb"},Fg={class:"ch"};function Vg(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",vg,[t("div",hg,[w(d,{to:"/"},{default:T(()=>[...s[5]||(s[5]=[f("首页",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),w(d,{to:"/errors"},{default:T(()=>[...s[6]||(s[6]=[f("错误诊断",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),s[9]||(s[9]=t("span",null,"文件错误",-1))]),s[38]||(s[38]=t("h2",null,"文件错误诊断",-1)),s[39]||(s[39]=t("p",null,"输入文件格式错误是初学者最常遇到的问题。",-1)),t("div",yg,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：POTCAR 元素顺序与 POSCAR 不一致"),t("span",{class:"es sc"},"高频")],-1)),t("div",kg,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,"计算结果明显错误，能量异常大，或结构优化后原子位置混乱。",-1)),s[14]||(s[14]=t("h4",null,"检查方法",-1)),t("div",Cg,[t("div",wg,[s[10]||(s[10]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[11]||(s[11]=i(`<pre><code><span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POSCAR 中的元素</span>
<span class="fn2">head</span> -6 POSCAR

<span class="cm"># 确认两者顺序一致！</span></code></pre>`,1))]),s[15]||(s[15]=i(`<h4>正确示例</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span></div><pre><code>TiO2
1.0
4.59  0.00  0.00
0.00  4.59  0.00
0.00  0.00  2.96
Ti O          <span class="cm">; ← 先 Ti 后 O</span>
1 2
Direct</code></pre></div><div class="cb"><div class="ch"><span class="la">POTCAR</span></div><pre><code>TITEL  = PAW_PBE Ti ...    <span class="cm">; ← 第一个必须是 Ti</span>
TITEL  = PAW_PBE O  ...    <span class="cm">; ← 第二个是 O</span></code></pre></div><div class="ib warn"><strong>重要：</strong>POTCAR 顺序必须与 POSCAR 完全一致，否则结果完全错误！</div>`,4))])]),t("div",Sg,[s[20]||(s[20]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：POSCAR 格式错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",Ag,[s[19]||(s[19]=i(`<table class="tb"><thead><tr><th>错误类型</th><th>说明</th><th>解决方法</th></tr></thead><tbody><tr><td>缩放因子为 0</td><td>第二行不能为 0</td><td>改为 1.0 或实际值</td></tr><tr><td>坐标类型拼错</td><td>必须是 Direct 或 Cartesian</td><td>检查拼写和大小写</td></tr><tr><td>原子数与坐标不匹配</td><td>声明 N 个原子但只有 M 行坐标</td><td>检查坐标行数</td></tr><tr><td>多余空行</td><td>文件末尾不要有空行</td><td>删除末尾空行</td></tr><tr><td>Windows 换行符</td><td>\\r\\n 导致问题</td><td>dos2unix POSCAR</td></tr><tr><td>制表符</td><td>不要用 Tab，用空格</td><td>替换 Tab 为空格</td></tr></tbody></table><h4>POSCAR 格式详解</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span><span class="fn">完整格式</span></div><pre><code>Si bulk structure          <span class="cm">; 第 1 行：注释（可选）</span>
1.0                        <span class="cm">; 第 2 行：缩放因子</span>
5.43  0.00  0.00           <span class="cm">; 第 3-5 行：晶格矢量</span>
0.00  5.43  0.00
0.00  0.00  5.43
Si                         <span class="cm">; 第 6 行：元素符号</span>
2                          <span class="cm">; 第 7 行：原子数</span>
Direct                     <span class="cm">; 第 8 行：坐标类型</span>
0.00  0.00  0.00           <span class="cm">; 第 9 行起：原子坐标</span>
0.25  0.25  0.25</code></pre></div><h4>选择性动力学格式</h4>`,4)),t("div",Eg,[t("div",Tg,[s[17]||(s[17]=t("span",{class:"la"},"POSCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[f(`Si surface
1.0
5.43  0.00  0.00
0.00  5.43  0.00
0.00  0.00  15.0
Si
4
Selective dynamics        `),t("span",{class:"cm"},"; 开启选择性动力学"),f(`
Direct
0.00  0.00  0.00  F F F   `),t("span",{class:"cm"},"; F=固定，T=可动"),f(`
0.25  0.25  0.25  F F F
0.50  0.50  0.50  T T T
0.75  0.75  0.75  T T T`)])],-1))])])]),t("div",Rg,[s[30]||(s[30]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：KPOINTS 格式错误"),t("span",{class:"es scm"},"常见")],-1)),t("div",Og,[s[27]||(s[27]=t("h4",null,"常见错误",-1)),s[28]||(s[28]=t("ul",null,[t("li",null,"第 2 行不是 0（自动生成模式下必须是 0）"),t("li",null,"Gamma 拼写错误（正确：Gamma，不是 GAMMA 或 gamma）"),t("li",null,"Line-mode 缺少空行分隔线段"),t("li",null,"坐标格式与 Direct/Cartesian 不匹配")],-1)),s[29]||(s[29]=t("h4",null,"正确格式",-1)),t("div",Pg,[t("div",Ig,[s[21]||(s[21]=t("span",{class:"la"},"KPOINTS",-1)),s[22]||(s[22]=t("span",{class:"fn"},"自动网格",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[23]||(s[23]=i(`<pre><code>Automatic mesh        <span class="cm">; 注释行</span>
0                     <span class="cm">; 必须是 0（自动生成）</span>
Gamma                 <span class="cm">; 生成方式：Gamma 或 Monkhorst</span>
4 4 4                 <span class="cm">; k 点网格</span>
0.0 0.0 0.0           <span class="cm">; 偏移（通常全 0）</span></code></pre>`,1))]),t("div",xg,[t("div",Ng,[s[24]||(s[24]=t("span",{class:"la"},"KPOINTS",-1)),s[25]||(s[25]=t("span",{class:"fn"},"Line-mode（能带计算）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[26]||(s[26]=i(`<pre><code>k-points along high symmetry lines
10                    <span class="cm">; 每条线段的点数</span>
Line-mode             <span class="cm">; 线模式</span>
Reciprocal            <span class="cm">; 坐标类型</span>
0.0  0.0  0.0         <span class="cm">; 起点 Gamma</span>
0.5  0.5  0.0         <span class="cm">; 终点 X</span>
                      <span class="cm">; ← 空行分隔！</span>
0.5  0.5  0.0         <span class="cm">; 起点 X</span>
0.5  0.5  0.5         <span class="cm">; 终点 R</span></code></pre>`,1))])])]),t("div",qg,[s[37]||(s[37]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：找不到 POTCAR 文件"),t("span",{class:"es scm"},"常见")],-1)),t("div",Mg,[s[33]||(s[33]=t("h4",null,"症状",-1)),s[34]||(s[34]=t("div",{class:"esym"},"VASP could not be started because POTCAR file was not found",-1)),s[35]||(s[35]=t("h4",null,"生成 POTCAR",-1)),t("div",Dg,[t("div",Fg,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[32]||(s[32]=i(`<pre><code><span class="cm"># 查看赝势库路径</span>
<span class="fn2">echo</span> $VASP_PP_PATH

<span class="cm"># 方法 1：直接拼接</span>
<span class="fn2">cat</span> ~/potpaw_PBE/Ti/POTCAR &gt; POTCAR
<span class="fn2">cat</span> ~/potpaw_PBE/O/POTCAR &gt;&gt; POTCAR

<span class="cm"># 方法 2：使用脚本</span>
<span class="kw">for</span> el <span class="kw">in</span> Ti O; <span class="kw">do</span>
    <span class="fn2">cat</span> ~/potpaw_PBE/$el/POTCAR &gt;&gt; POTCAR
<span class="kw">done</span>

<span class="cm"># 方法 3：使用 pymatgen</span>
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Potcar
p = Potcar([<span class="st">&#39;Ti&#39;</span>, <span class="st">&#39;O&#39;</span>], functional=<span class="st">&#39;PBE&#39;</span>)
p.write_file(<span class="st">&#39;POTCAR&#39;</span>)</code></pre>`,1))]),s[36]||(s[36]=t("div",{class:"ib tip"},[t("strong",null,"建议："),f("设置环境变量 VASP_PP_PATH 指向赝势库目录，方便使用。")],-1))])]),s[40]||(s[40]=i('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 5：INCAR 参数格式错误</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>常见错误</h4><table class="tb"><thead><tr><th>错误写法</th><th>正确写法</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT=400</code></td><td><code>ENCUT = 400</code></td><td>等号两边要有空格</td></tr><tr><td><code>LREAL=.true.</code></td><td><code>LREAL = .TRUE.</code></td><td>布尔值大写</td></tr><tr><td><code>ISMEAR=0.5</code></td><td><code>ISMEAR = 0</code></td><td>ISMEAR 是整数</td></tr><tr><td><code>SYSTEM= test</code></td><td><code>SYSTEM = test</code></td><td>等号对齐</td></tr></tbody></table><div class="ib warn"><strong>注意：</strong>VASP 对格式敏感，但通常会忽略无法识别的行并给出警告。</div></div></div>',1))])}const Gg=J(gg,[["render",Vg]]),$g={name:"ErrorsOutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Bg={class:"sec active"},Lg={class:"bread"},Ug={class:"ec open"},Kg={class:"ec-b",style:{display:"block"}},Hg={class:"cb"},Wg={class:"ch"},jg={class:"ec open"},zg={class:"ec-b",style:{display:"block"}},Yg={class:"cb"},Zg={class:"ch"},Xg={class:"ec open"},Jg={class:"ec-b",style:{display:"block"}},Qg={class:"cb"},_g={class:"ch"},sv={class:"cb"},nv={class:"ch"},tv={class:"ec open"},av={class:"ec-b",style:{display:"block"}},lv={class:"cb"},pv={class:"ch"},ev={class:"ec open"},ov={class:"ec-b",style:{display:"block"}},dv={class:"cb"},rv={class:"ch"};function cv(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Bg,[t("div",Lg,[w(d,{to:"/"},{default:T(()=>[...s[6]||(s[6]=[f("首页",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),w(d,{to:"/errors"},{default:T(()=>[...s[7]||(s[7]=[f("错误诊断",-1)])]),_:1}),s[9]||(s[9]=f("/ ",-1)),s[10]||(s[10]=t("span",null,"输出异常",-1))]),s[42]||(s[42]=t("h2",null,"输出异常诊断",-1)),s[43]||(s[43]=t("p",null,"计算完成但结果不合理时，需要排查输出文件中的异常。",-1)),t("div",Ug,[s[15]||(s[15]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 1：能量异常大或异常小"),t("span",{class:"es scm"},"常见")],-1)),t("div",Kg,[s[13]||(s[13]=i('<table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>能量 ~10⁶ eV</td><td>原子重叠（距离太近）</td><td>检查 POSCAR 原子距离</td></tr><tr><td>能量比文献差很多</td><td>POTCAR 泛函不匹配</td><td>确认使用正确的泛函</td></tr><tr><td>能量正数</td><td>严重结构错误</td><td>重新构建结构</td></tr><tr><td>NaN / Infinity</td><td>数值溢出</td><td>降低 ENCUT</td></tr><tr><td>能量不收敛</td><td>SCF 问题</td><td>参考 SCF 不收敛诊断</td></tr></tbody></table><h4>查看能量</h4>',2)),t("div",Hg,[t("div",Wg,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[12]||(s[12]=i(`<pre><code><span class="cm"># 查看自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看能量变化</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR

<span class="cm"># 每原子能量（估算）</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 手动除以原子数</span></code></pre>`,1))]),s[14]||(s[14]=t("div",{class:"ib tip"},[t("strong",null,"参考值："),f("大多数材料的结合能在 -1 到 -10 eV/atom 范围内。如果偏离太多，需要检查计算设置。")],-1))])]),t("div",jg,[s[22]||(s[22]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：力很大（> 1 eV/Å）"),t("span",{class:"es scm"},"常见")],-1)),t("div",zg,[s[18]||(s[18]=t("h4",null,"症状",-1)),s[19]||(s[19]=t("p",null,"优化收敛后力仍然很大，或优化过程中力振荡。",-1)),s[20]||(s[20]=t("h4",null,"查看力",-1)),t("div",Yg,[t("div",Zg,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">20</span> | <span class="fn2">tail</span> -20

<span class="cm"># 查看力是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR</code></pre>`,1))]),s[21]||(s[21]=i('<h4>正常值参考</h4><table class="tb"><thead><tr><th>状态</th><th>最大力</th><th>说明</th></tr></thead><tbody><tr><td>良好收敛</td><td>&lt; 0.01 eV/Å</td><td>高质量结果</td></tr><tr><td>一般收敛</td><td>0.01 - 0.05 eV/Å</td><td>大多数应用足够</td></tr><tr><td>勉强收敛</td><td>0.05 - 0.1 eV/Å</td><td>可接受但不理想</td></tr><tr><td>未收敛</td><td>&gt; 0.1 eV/Å</td><td>需要继续优化</td></tr><tr><td>有问题</td><td>&gt; 1.0 eV/Å</td><td>结构或计算有问题</td></tr></tbody></table><h4>解决方案</h4><ul><li>检查原子距离是否合理</li><li>增加 NSW 继续优化</li><li>减小 POTIM</li><li>降低 EDIFF 到 1E-7</li><li>增加 ENCUT</li></ul>',4))])]),t("div",Xg,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：磁矩不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",Jg,[s[28]||(s[28]=t("h4",null,"查看磁矩",-1)),t("div",Qg,[t("div",_g,[s[23]||(s[23]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[24]||(s[24]=i(`<pre><code><span class="cm"># 查看总磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;number of electron&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看每个原子的磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span></code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"常见问题",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,[t("strong",null,"磁矩为零但应有磁性"),f("：需要设置 ISPIN=2 和适当的 MAGMOM")]),t("li",null,[t("strong",null,"磁矩振荡"),f("：MAGMOM 初始值设置不当，尝试不同的初始值")]),t("li",null,[t("strong",null,"磁矩不合理"),f("：检查是否需要开启自旋轨道耦合（LSORBIT=.TRUE.）")])],-1)),t("div",sv,[t("div",nv,[s[25]||(s[25]=t("span",{class:"la"},"INCAR",-1)),s[26]||(s[26]=t("span",{class:"fn"},"磁性计算",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[27]||(s[27]=i(`<pre><code><span class="cm"># 自旋极化计算</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>             <span class="cm">; 开启自旋极化</span>

<span class="cm"># 初始磁矩设置</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 5 5</span>       <span class="cm">; 每个原子的初始磁矩 (μB)</span>

<span class="cm"># 过渡金属常见值</span>
<span class="cm"># Fe, Co, Ni: 3-5 μB</span>
<span class="cm"># Mn: 5 μB</span>
<span class="cm"># Cr: 3-5 μB</span>
<span class="cm"># Cu, Zn: 0 (d 满)</span></code></pre>`,1))])])]),t("div",tv,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：应力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",av,[s[34]||(s[34]=t("h4",null,"查看应力",-1)),t("div",lv,[t("div",pv,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[33]||(s[33]=i(`<pre><code><span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1</code></pre>`,1))]),s[35]||(s[35]=i('<h4>正常值参考</h4><table class="tb"><thead><tr><th>压力</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>&lt; 1 kbar</td><td>很好</td><td>晶格已收敛</td></tr><tr><td>1 - 5 kbar</td><td>良好</td><td>大多数应用足够</td></tr><tr><td>5 - 20 kbar</td><td>一般</td><td>可接受但不理想</td></tr><tr><td>&gt; 20 kbar</td><td>差</td><td>需要继续优化</td></tr></tbody></table><div class="ib tip"><strong>单位换算：</strong>1 kbar = 0.1 GPa = 100 MPa</div>',3))])]),t("div",ev,[s[41]||(s[41]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：能带带隙不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",ov,[s[40]||(s[40]=i('<h4>问题分析</h4><table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>半导体显示为金属</td><td>GGA-PBE 低估带隙</td><td>使用杂化泛函 HSE06</td></tr><tr><td>带隙偏大</td><td>带隙计算方法问题</td><td>使用 ISMEAR=0 或 -5</td></tr><tr><td>间接带隙变直接</td><td>K 点不足</td><td>加密 K 点</td></tr></tbody></table><h4>准确计算带隙</h4>',3)),t("div",dv,[t("div",rv,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"带隙计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[39]||(s[39]=i(`<pre><code><span class="cm"># 方案 1：GGA-PBE（低估带隙）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 方案 2：杂化泛函 HSE06（更准确但慢）</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>        <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>

<span class="cm"># 方案 3：GW 计算（最准确但最慢）</span>
<span class="cm"># 需要分步进行，参考 VASP 手册</span></code></pre>`,1))])])])])}const iv=J($g,[["render",cv]]),uv={name:"ThermoelectricView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},fv={class:"sec active"},mv={class:"bread"},bv={class:"cb"},gv={class:"ch"},vv={class:"cb"},hv={class:"ch"},yv={class:"cb"},kv={class:"ch"},Cv={class:"cb"},wv={class:"ch"},Sv={class:"cb"},Av={class:"ch"},Ev={class:"cb"},Tv={class:"ch"},Rv={class:"cb"},Ov={class:"ch"},Pv={class:"cb"},Iv={class:"ch"},xv={class:"cb"},Nv={class:"ch"},qv={class:"cb"},Mv={class:"ch"},Dv={class:"cb"},Fv={class:"ch"};function Vv(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",fv,[t("div",mv,[w(d,{to:"/"},{default:T(()=>[...s[11]||(s[11]=[f("首页",-1)])]),_:1}),s[13]||(s[13]=f("/ ",-1)),w(d,{to:"/tasks"},{default:T(()=>[...s[12]||(s[12]=[f("计算任务",-1)])]),_:1}),s[14]||(s[14]=f("/ ",-1)),s[15]||(s[15]=t("span",null,"热电计算",-1))]),s[47]||(s[47]=i('<h2>热电材料计算</h2><p>热电材料能够将热能直接转换为电能（Seebeck效应）或将电能转换为热能（Peltier效应），在废热回收和固态制冷中有重要应用。</p><h3>1. 热电优值 ZT</h3><p>热电材料的性能由无量纲热电优值 ZT 表征：</p><div class="fb"><div class="fm">ZT = S²σT / κ</div><div class="fd">S: Seebeck系数 | σ: 电导率 | T: 温度 | κ: 热导率</div></div><table class="tb"><thead><tr><th>参数</th><th>单位</th><th>理想方向</th><th>说明</th></tr></thead><tbody><tr><td><strong>Seebeck系数 S</strong></td><td>μV/K</td><td>越大越好</td><td>衡量每单位温差产生的电压</td></tr><tr><td><strong>电导率 σ</strong></td><td>S/m</td><td>越大越好</td><td>衡量电荷传输能力</td></tr><tr><td><strong>热导率 κ</strong></td><td>W/m·K</td><td>越小越好</td><td>κ = κ<sub>e</sub> + κ<sub>l</sub></td></tr><tr><td><strong>功率因子 PF</strong></td><td>μW/cm·K²</td><td>越大越好</td><td>PF = S²σ</td></tr></tbody></table><div class="ib tip"><strong>ZT 目标：</strong>商业化应用需要 ZT &gt; 2.0，目前最佳热电材料（如 SnSe）在高温下可达 ZT ~ 2.6。</div><h3>2. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取稳定结构）</div><div class="fa"></div><div class="fn2-node p">自洽计算（获取精确电荷密度）</div><div class="fa"></div><div class="fn2-node p">非自洽计算（密集 K 点，获取能带）</div><div class="fa"></div><div class="fn2-node p">BoltzTraP 计算输运性质</div><div class="fa"></div><div class="fn2-node p">声子计算（获取晶格热导率）</div><div class="fa"></div><div class="fn2-node e">计算 ZT 值</div></div><h3>3. 结构优化</h3>',10)),t("div",bv,[t("div",gv,[s[16]||(s[16]=t("span",{class:"la"},"INCAR",-1)),s[17]||(s[17]=t("span",{class:"fn"},"热电材料结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 relaxation</span>

<span class="cm"># 基本参数</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>              <span class="cm">; 热电材料通常需要较高截断能</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.01</span>            <span class="cm">; 严格力收敛</span>

<span class="cm"># 离子步参数</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化晶格和离子</span>

<span class="cm"># 展宽参数</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; 半导体用 Gaussian</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 自旋轨道耦合（重元素通常需要）</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>           <span class="cm">; Bi, Te 等重元素</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>              <span class="cm">; SOC 需要更多能带</span></code></pre>`,1))]),s[48]||(s[48]=t("h3",null,"4. 自洽计算",-1)),t("div",vv,[t("div",hv,[s[19]||(s[19]=t("span",{class:"la"},"INCAR",-1)),s[20]||(s[20]=t("span",{class:"fn"},"自洽计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[21]||(s[21]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 SCF</span>

<span class="kw">ENCUT</span>    = <span class="nu">500</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>             <span class="cm">; 更严格的收敛</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法（最准确）</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[49]||(s[49]=t("h3",null,"5. 非自洽计算（密集 K 点）",-1)),s[50]||(s[50]=t("p",null,"BoltzTraP 需要非常密集的 K 点网格来准确计算输运性质。",-1)),t("div",yv,[t("div",kv,[s[22]||(s[22]=t("span",{class:"la"},"INCAR",-1)),s[23]||(s[23]=t("span",{class:"fn"},"非自洽计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[24]||(s[24]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 non-SCF</span>

<span class="kw">ENCUT</span>    = <span class="nu">500</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>

<span class="cm"># 关键：从 WAVECAR 读取</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体方法</span>
<span class="kw">LSORBIT</span>  = <span class="nu">.TRUE.</span>
<span class="kw">NBANDS</span>   = <span class="nu">200</span>

<span class="cm"># 输出详细能带信息</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>
<span class="kw">LOPTICS</span>  = <span class="nu">.TRUE.</span>           <span class="cm">; 计算光学矩阵元</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span></code></pre>`,1))]),t("div",Cv,[t("div",wv,[s[25]||(s[25]=t("span",{class:"la"},"KPOINTS",-1)),s[26]||(s[26]=t("span",{class:"fn"},"密集网格（BoltzTraP 需要）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[27]||(s[27]=i(`<pre><code><span class="vr">Dense k-mesh for BoltzTraP</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">24  24  24</span>               <span class="cm">; 非常密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[51]||(s[51]=t("div",{class:"ib warn"},[t("strong",null,"重要："),f("BoltzTraP 需要非常密集的 K 点（通常 20×20×20 或更高），否则输运系数不准确。")],-1)),s[52]||(s[52]=t("h3",null,"6. BoltzTraP 计算",-1)),s[53]||(s[53]=t("p",null,"BoltzTraP 基于玻尔兹曼输运理论计算电导率和 Seebeck 系数。",-1)),s[54]||(s[54]=t("h4",null,"安装 BoltzTraP",-1)),t("div",Sv,[t("div",Av,[s[28]||(s[28]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[29]||(s[29]=i(`<pre><code><span class="cm"># 下载 BoltzTraP</span>
<span class="fn2">wget</span> http://www.physics.iit.edu/~savrasov/BoltzTraP/BoltzTraP.tar.gz
<span class="fn2">tar</span> -xzf BoltzTraP.tar.gz
<span class="fn2">cd</span> BoltzTraP/src
<span class="fn2">make</span>
<span class="fn2">cp</span> boltztrap ../bin/</code></pre>`,1))]),s[55]||(s[55]=t("h4",null,"运行 BoltzTraP",-1)),t("div",Ev,[t("div",Tv,[s[30]||(s[30]=t("span",{class:"la"},"bash",-1)),s[31]||(s[31]=t("span",{class:"fn"},"boltztrap.sh",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[32]||(s[32]=i(`<pre><code><span class="kw">#!/bin/bash</span>

<span class="cm"># 创建 BoltzTraP 输入文件</span>
<span class="fn2">mkdir</span> boltztrap &amp;&amp; <span class="fn2">cd</span> boltztrap

<span class="cm"># 复制 VASP 输出</span>
<span class="fn2">cp</span> ../EIGENVAL ./bi2te3.energy
<span class="fn2">cp</span> ../OUTCAR ./bi2te3.intrans
<span class="fn2">cp</span> ../OUTCAR ./bi2te3.outputtmp

<span class="cm"># 创建 intrans 文件</span>
<span class="fn2">cat</span> &gt; bi2te3.intrans &lt;&lt; EOF
GENE                          <span class="cm">; 通用模式</span>
1 0 0 0.0                     <span class="cm">; 使用等间距能量网格</span>
0.0005 0.0 0.0 0.0           <span class="cm">; 能量间距，化学势范围</span>
CALC                          <span class="cm">; 计算输运性质</span>
300.0 900.0 100.0            <span class="cm">; 温度范围：300K 到 900K，步长 100K</span>
0 0 0 0 0
1 1 1
EOF

<span class="cm"># 运行 BoltzTraP</span>
<span class="fn2">x boltztrap</span> -v bi2te3

<span class="cm"># 输出文件：bi2te3.trace (Seebeck, 电导率等)</span></code></pre>`,1))]),s[56]||(s[56]=t("h4",null,"解读 BoltzTraP 输出",-1)),t("div",Rv,[t("div",Ov,[s[33]||(s[33]=t("span",{class:"la"},"python",-1)),s[34]||(s[34]=t("span",{class:"fn"},"read_boltztrap.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[35]||(s[35]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 BoltzTraP 输出</span>
<span class="kw">def</span> <span class="fn2">read_boltztrap</span>(filename):
    data = np.genfromtxt(filename, skip_header=<span class="nu">1</span>)
    <span class="kw">return</span> data

<span class="cm"># 读取 trace 文件</span>
data = <span class="fn2">read_boltztrap</span>(<span class="st">&#39;bi2te3.trace&#39;</span>)

<span class="cm"># 数据列说明：</span>
<span class="cm"># Column 0: T (温度, K)</span>
<span class="cm"># Column 1: EF (相对于费米能级的化学势, eV)</span>
<span class="cm"># Column 2: sigma (电导率, S/m)</span>
<span class="cm"># Column 3: S (Seebeck系数, V/K)</span>
<span class="cm"># Column 4: S²σ (功率因子, W/m·K²)</span>
<span class="cm"># Column 5: kappa (电子热导率, W/m·K)</span>

<span class="cm"># 选择特定温度</span>
T = <span class="nu">300</span>  <span class="cm">; 300K</span>
mask = data[:, <span class="nu">0</span>] == T
ef = data[mask, <span class="nu">1</span>]
sigma = data[mask, <span class="nu">2</span>]
seebeck = data[mask, <span class="nu">3</span>] * <span class="nu">1e6</span>  <span class="cm">; 转换为 μV/K</span>
pf = data[mask, <span class="nu">4</span>] * <span class="nu">1e4</span>       <span class="cm">; 转换为 μW/cm·K²</span>

<span class="cm"># 绘图</span>
fig, axes = plt.subplots(<span class="nu">2</span>, <span class="nu">2</span>, figsize=(<span class="nu">10</span>, <span class="nu">8</span>))

axes[<span class="nu">0</span>,<span class="nu">0</span>].plot(ef, seebeck, <span class="st">&#39;b-&#39;</span>)
axes[<span class="nu">0</span>,<span class="nu">0</span>].set_xlabel(<span class="st">&#39;μ - E<sub>F</sub> (eV)&#39;</span>)
axes[<span class="nu">0</span>,<span class="nu">0</span>].set_ylabel(<span class="st">&#39;Seebeck (μV/K)&#39;</span>)

axes[<span class="nu">0</span>,<span class="nu">1</span>].semilogy(ef, sigma, <span class="st">&#39;r-&#39;</span>)
axes[<span class="nu">0</span>,<span class="nu">1</span>].set_xlabel(<span class="st">&#39;μ - E<sub>F</sub> (eV)&#39;</span>)
axes[<span class="nu">0</span>,<span class="nu">1</span>].set_ylabel(<span class="st">&#39;σ (S/m)&#39;</span>)

axes[<span class="nu">1</span>,<span class="nu">0</span>].plot(ef, pf, <span class="st">&#39;g-&#39;</span>)
axes[<span class="nu">1</span>,<span class="nu">0</span>].set_xlabel(<span class="st">&#39;μ - E<sub>F</sub> (eV)&#39;</span>)
axes[<span class="nu">1</span>,<span class="nu">0</span>].set_ylabel(<span class="st">&#39;PF (μW/cm·K²)&#39;</span>)

plt.tight_layout()
plt.savefig(<span class="st">&#39;transport_300K.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[57]||(s[57]=t("h3",null,"7. 晶格热导率计算",-1)),s[58]||(s[58]=t("p",null,[f("晶格热导率 κ"),t("sub",null,"l"),f(" 通过声子计算获得，使用 Slack 模型或求解玻尔兹曼方程。")],-1)),s[59]||(s[59]=t("h4",null,"Slack 模型估算",-1)),t("div",Pv,[t("div",Iv,[s[36]||(s[36]=t("span",{class:"la"},"python",-1)),s[37]||(s[37]=t("span",{class:"fn"},"slack_model.py",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[38]||(s[38]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="kw">def</span> <span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, T, gamma, n_atoms=<span class="nu">1</span>):
    <span class="st">&quot;&quot;&quot;
    Slack 模型估算晶格热导率
    
    Parameters:
    M_avg: 平均原子质量 (amu)
    V_atom: 平均原子体积 (Å³)
    theta_D: 德拜温度 (K)
    T: 温度 (K)
    gamma: Grüneisen 参数
    n_atoms: 原子数
    &quot;&quot;&quot;</span>
    <span class="cm"># Slack 公式</span>
    A = <span class="nu">3.1e-8</span>  <span class="cm">; 经验常数</span>
    kappa_l = A * M_avg * theta_D**<span class="nu">3</span> * V_atom**(2/3) / (gamma**<span class="nu">2</span> * n_atoms**(2/3) * T)
    <span class="kw">return</span> kappa_l

<span class="cm"># Bi2Te3 示例</span>
M_avg = (<span class="nu">2</span> * <span class="nu">208.98</span> + <span class="nu">3</span> * <span class="nu">127.60</span>) / <span class="nu">5</span>  <span class="cm">; 平均原子质量</span>
V_atom = <span class="nu">180.5</span> / <span class="nu">5</span>                      <span class="cm">; 平均原子体积</span>
theta_D = <span class="nu">165</span>                           <span class="cm">; 德拜温度</span>
gamma = <span class="nu">1.5</span>                             <span class="cm">; Grüneisen 参数</span>

kappa_300K = <span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, <span class="nu">300</span>, gamma)
<span class="fn2">print</span>(f<span class="st">&quot;300K 晶格热导率: {kappa_300K:.2f} W/m·K&quot;</span>)

<span class="cm"># 温度依赖</span>
temps = np.linspace(<span class="nu">300</span>, <span class="nu">700</span>, <span class="nu">9</span>)
kappas = [<span class="fn2">slack_model</span>(M_avg, V_atom, theta_D, T, gamma) <span class="kw">for</span> T <span class="kw">in</span> temps]

<span class="kw">for</span> T, k <span class="kw">in</span> <span class="fn2">zip</span>(temps, kappas):
    <span class="fn2">print</span>(f<span class="st">&quot;{T:.0f} K: κ = {k:.2f} W/m·K&quot;</span>)</code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"phonopy 计算晶格热导率",-1)),t("div",xv,[t("div",Nv,[s[39]||(s[39]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[40]||(s[40]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 使用 phonopy 计算热导率（BTE 方法）"),f(`
`),t("span",{class:"fn2"},"phonopy"),f(` --mesh="20 20 20" --tprop --fc DispFC

`),t("span",{class:"cm"},"# 或使用 phono3py 计算三声子散射"),f(`
`),t("span",{class:"fn2"},"phono3py"),f(' --mesh="20 20 20" --tprop')])],-1))]),s[61]||(s[61]=t("h3",null,"8. ZT 值计算",-1)),t("div",qv,[t("div",Mv,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"calculate_ZT.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[43]||(s[43]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="kw">def</span> <span class="fn2">calculate_ZT</span>(S, sigma, T, kappa_l, kappa_e):
    <span class="st">&quot;&quot;&quot;
    计算热电优值 ZT
    
    Parameters:
    S: Seebeck系数 (V/K)
    sigma: 电导率 (S/m)
    T: 温度 (K)
    kappa_l: 晶格热导率 (W/m·K)
    kappa_e: 电子热导率 (W/m·K)
    &quot;&quot;&quot;</span>
    PF = S**<span class="nu">2</span> * sigma  <span class="cm">; 功率因子 (W/m·K²)</span>
    kappa = kappa_l + kappa_e  <span class="cm">; 总热导率</span>
    ZT = PF * T / kappa
    <span class="kw">return</span> ZT, PF

<span class="cm"># 读取 BoltzTraP 数据</span>
data = np.genfromtxt(<span class="st">&#39;bi2te3.trace&#39;</span>, skip_header=<span class="nu">1</span>)

<span class="cm"># 不同温度下的 ZT</span>
temps = [<span class="nu">300</span>, <span class="nu">400</span>, <span class="nu">500</span>, <span class="nu">600</span>, <span class="nu">700</span>]
kappa_l_values = [<span class="nu">1.5</span>, <span class="nu">1.2</span>, <span class="nu">0.9</span>, <span class="nu">0.7</span>, <span class="nu">0.5</span>]  <span class="cm">; 从 Slack 模型或计算得到</span>

max_ZT = []
<span class="kw">for</span> i, T <span class="kw">in</span> <span class="fn2">enumerate</span>(temps):
    mask = data[:, <span class="nu">0</span>] == T
    ef = data[mask, <span class="nu">1</span>]
    sigma = data[mask, <span class="nu">2</span>]
    S = data[mask, <span class="nu">3</span>]
    kappa_e = data[mask, <span class="nu">5</span>]
    
    ZT, PF = <span class="fn2">calculate_ZT</span>(S, sigma, T, kappa_l_values[i], kappa_e)
    max_ZT.append(np.<span class="fn2">max</span>(ZT[ef &gt; -<span class="nu">0.1</span>]))  <span class="cm">; 只考虑接近费米能级的区域</span>

<span class="cm"># 绘制 ZT vs 温度</span>
plt.figure(figsize=(<span class="nu">8</span>, <span class="nu">6</span>))
plt.plot(temps, max_ZT, <span class="st">&#39;ro-&#39;</span>, linewidth=<span class="nu">2</span>, markersize=<span class="nu">8</span>)
plt.xlabel(<span class="st">&#39;Temperature (K)&#39;</span>, fontsize=<span class="nu">12</span>)
plt.ylabel(<span class="st">&#39;ZT&#39;</span>, fontsize=<span class="nu">12</span>)
plt.title(<span class="st">&#39;ZT vs Temperature for Bi₂Te₃&#39;</span>, fontsize=<span class="nu">14</span>)
plt.grid(<span class="kw">True</span>)
plt.savefig(<span class="st">&#39;ZT_vs_T.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()

<span class="cm"># 输出最佳 ZT</span>
best_T = temps[np.<span class="fn2">argmax</span>(max_ZT)]
<span class="fn2">print</span>(f<span class="st">&quot;最佳 ZT: {max(max_ZT):.2f} at {best_T} K&quot;</span>)</code></pre>`,1))]),s[62]||(s[62]=i('<h3>9. 常见热电材料</h3><table class="tb"><thead><tr><th>材料</th><th>类型</th><th>最佳温度</th><th>ZT 峰值</th><th>应用</th></tr></thead><tbody><tr><td>Bi₂Te₃</td><td>窄带隙半导体</td><td>300-400 K</td><td>~1.0</td><td>室温制冷</td></tr><tr><td>PbTe</td><td>IV-VI 化合物</td><td>600-900 K</td><td>~2.0</td><td>中温发电</td></tr><tr><td>SnSe</td><td>层状材料</td><td>700-900 K</td><td>~2.6</td><td>高温发电</td></tr><tr><td>Mg₂Si</td><td>硅化物</td><td>500-800 K</td><td>~1.3</td><td>汽车废热</td></tr><tr><td>Half-Heusler</td><td>金属间化合物</td><td>700-1000 K</td><td>~1.5</td><td>高温发电</td></tr></tbody></table><h3>10. 提高 ZT 的策略</h3><div class="db"><div class="db-t">优化热电性能的方法</div><h4>1. 增大功率因子 S²σ</h4><ul><li>优化载流子浓度（通常 10<sup>19</sup>-10<sup>21</sup> cm⁻³）</li><li>能带工程：增大能带有效质量</li><li>能量过滤效应</li><li>共振能级掺杂</li></ul><h4>2. 降低热导率 κ</h4><ul><li>纳米结构化：增加声子散射</li><li>点缺陷散射：合金化、掺杂</li><li>界面散射：纳米复合材料</li><li>本征低热导率材料：重元素、复杂结构</li></ul><h4>3. 能带收敛</h4><ul><li>多能谷材料：增大谷简并度</li><li>温度诱导能带收敛</li><li>压力诱导能带收敛</li></ul></div><h3>11. 完整计算脚本</h3>',5)),t("div",Dv,[t("div",Fv,[s[44]||(s[44]=t("span",{class:"la"},"bash",-1)),s[45]||(s[45]=t("span",{class:"fn"},"thermoelectric_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[46]||(s[46]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># 热电材料计算完整流程</span>

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 1: 结构优化 ===&quot;</span>
<span class="fn2">mkdir</span> 01_relax &amp;&amp; <span class="fn2">cd</span> 01_relax
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Bi2Te3 relax
ENCUT = 500
PREC = Accurate
EDIFF = 1E-6
EDIFFG = -0.01
IBRION = 2
NSW = 200
ISIF = 3
ISMEAR = 0
SIGMA = 0.05
LSORBIT = .TRUE.
NBANDS = 200
EOF
<span class="fn2">cp</span> ../POSCAR_init POSCAR
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">mpirun</span> -np <span class="nu">32</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 2: 自洽计算 ===&quot;</span>
<span class="fn2">mkdir</span> 02_scf &amp;&amp; <span class="fn2">cd</span> 02_scf
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Bi2Te3 SCF
ENCUT = 500
PREC = Accurate
EDIFF = 1E-8
IBRION = -1
NSW = 0
ISMEAR = -5
LSORBIT = .TRUE.
NBANDS = 200
LWAVE = .TRUE.
LCHARG = .TRUE.
EOF
<span class="fn2">cp</span> ../POTCAR ../KPOINTS ./
<span class="fn2">mpirun</span> -np <span class="nu">32</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 3: 非自洽计算（密集 K 点）===&quot;</span>
<span class="fn2">mkdir</span> 03_nscf &amp;&amp; <span class="fn2">cd</span> 03_nscf
<span class="fn2">cp</span> ../01_relax/CONTCAR POSCAR
<span class="fn2">cp</span> ../02_scf/WAVECAR ./
<span class="fn2">cat</span> &gt; INCAR &lt;&lt; EOF
SYSTEM = Bi2Te3 NSCF
ENCUT = 500
PREC = Accurate
EDIFF = 1E-8
ICHARG = 11
IBRION = -1
NSW = 0
ISMEAR = -5
LSORBIT = .TRUE.
NBANDS = 200
LORBIT = 11
LOPTICS = .TRUE.
NEDOS = 2000
EOF
<span class="fn2">cat</span> &gt; KPOINTS &lt;&lt; EOF
Dense k-mesh
0
Gamma
24 24 24
0.0 0.0 0.0
EOF
<span class="fn2">cp</span> ../POTCAR ./
<span class="fn2">mpirun</span> -np <span class="nu">64</span> vasp_std
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 步骤 4: BoltzTraP 计算 ===&quot;</span>
<span class="fn2">mkdir</span> 04_boltztrap &amp;&amp; <span class="fn2">cd</span> 04_boltztrap
<span class="fn2">cp</span> ../03_nscf/EIGENVAL ./bi2te3.energy
<span class="fn2">cp</span> ../03_nscf/OUTCAR ./
<span class="cm"># 创建 intrans 并运行 boltztrap...</span>
<span class="fn2">cd</span> ..

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))]),s[63]||(s[63]=t("h3",null,"12. 注意事项",-1)),s[64]||(s[64]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"热电计算需要密集 K 点（20×20×20 或更高）"),t("li",null,"重元素（Bi, Pb, Te 等）通常需要考虑自旋轨道耦合"),t("li",null,"BoltzTraP 计算需要较大内存"),t("li",null,"晶格热导率计算需要高精度的力常数"),t("li",null,"ZT 的准确度取决于所有参数的准确度")])],-1))])}const Gv=J(uv,[["render",Vv]]),$v={name:"GaussianView"},Bv={class:"sec active"},Lv={class:"bread"},Uv={class:"pg"};function Kv(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Bv,[t("div",Lv,[w(d,{to:"/"},{default:T(()=>[...s[0]||(s[0]=[f("首页",-1)])]),_:1}),s[1]||(s[1]=f("/",-1)),s[2]||(s[2]=t("span",null,"Gaussian 教程",-1))]),s[8]||(s[8]=i('<h2>Gaussian 量子化学计算</h2><p>Gaussian 是最广泛使用的量子化学计算软件，专注于分子体系的电子结构计算。</p><h3>1. Gaussian 简介</h3><table class="tb"><thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系（晶体、表面）</td></tr><tr><td><strong>基组</strong></td><td>高斯基组</td><td>平面波基组</td></tr><tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr><tr><td><strong>主要应用</strong></td><td>有机分子、反应机理</td><td>固体、材料</td></tr><tr><td><strong>计算效率</strong></td><td>小体系快</td><td>大体系快</td></tr></tbody></table><h3>2. Gaussian 核心功能</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔬</div><div class="pc-t">几何优化</div><div class="pc-d">寻找分子的稳定构型</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">⚡</div><div class="pc-t">能量计算</div><div class="pc-d">计算分子的总能量</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📊</div><div class="pc-t">频率计算</div><div class="pc-d">振动频率和红外光谱</div></div><div class="pc" style="--ca:var(--accent);"><div class="pc-i">🔗</div><div class="pc-t">反应路径</div><div class="pc-d">过渡态搜索和IRC</div></div></div><h3>3. 支持的计算方法</h3><table class="tb"><thead><tr><th>方法</th><th>关键词</th><th>精度</th><th>计算成本</th><th>适用体系</th></tr></thead><tbody><tr><td><strong>HF</strong></td><td><code class="ic">HF</code></td><td>一般</td><td>低</td><td>定性分析</td></tr><tr><td><strong>DFT</strong></td><td><code class="ic">B3LYP</code></td><td>较好</td><td>中</td><td>最常用</td></tr><tr><td><strong>MP2</strong></td><td><code class="ic">MP2</code></td><td>好</td><td>高</td><td>弱相互作用</td></tr><tr><td><strong>CCSD(T)</strong></td><td><code class="ic">CCSD(T)</code></td><td>极高</td><td>极高</td><td>高精度基准</td></tr><tr><td><strong>TDDFT</strong></td><td><code class="ic">TD</code></td><td>较好</td><td>中</td><td>激发态</td></tr></tbody></table><h3>4. 常用泛函推荐</h3><table class="tb"><thead><tr><th>泛函</th><th>关键词</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><strong>B3LYP</strong></td><td><code class="ic">B3LYP</code></td><td>通用</td><td>最广泛使用</td></tr><tr><td><strong>PBE0</strong></td><td><code class="ic">PBE0</code></td><td>通用</td><td>与 VASP PBE 对应</td></tr><tr><td><strong>M06-2X</strong></td><td><code class="ic">M062X</code></td><td>有机分子</td><td>反应能垒准确</td></tr><tr><td><strong>ωB97X-D</strong></td><td><code class="ic">wB97XD</code></td><td>非共价作用</td><td>包含色散修正</td></tr><tr><td><strong>B2PLYP</strong></td><td><code class="ic">B2PLYP</code></td><td>高精度</td><td>双杂化泛函</td></tr></tbody></table><h3>5. 基组选择指南</h3><table class="tb"><thead><tr><th>基组</th><th>关键词</th><th>精度</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>6-31G(d)</strong></td><td><code class="ic">6-31G(d)</code></td><td>中</td><td>常规计算</td></tr><tr><td><strong>6-31+G(d,p)</strong></td><td><code class="ic">6-31+G(d,p)</code></td><td>较好</td><td>阴离子、电子亲和</td></tr><tr><td><strong>6-311+G(2d,2p)</strong></td><td><code class="ic">6-311+G(2d,2p)</code></td><td>高</td><td>精确计算</td></tr><tr><td><strong>cc-pVDZ</strong></td><td><code class="ic">cc-pVDZ</code></td><td>中</td><td>相关一致性</td></tr><tr><td><strong>cc-pVTZ</strong></td><td><code class="ic">cc-pVTZ</code></td><td>高</td><td>高精度计算</td></tr><tr><td><strong>def2-TZVP</strong></td><td><code class="ic">def2TZVP</code></td><td>高</td><td>通用高精度</td></tr></tbody></table><div class="ib tip"><strong>推荐组合：</strong><ul><li>常规计算：<code class="ic">B3LYP/6-31G(d)</code></li><li>精确计算：<code class="ic">M06-2X/6-311+G(2d,2p)</code></li><li>弱相互作用：<code class="ic">ωB97X-D/def2-TZVP</code></li></ul></div><h3>6. Gaussian 与 VASP 的配合使用</h3><div class="db"><div class="db-t">互补应用场景</div><ul><li><strong>Gaussian</strong>：分子初始结构优化、反应机理研究</li><li><strong>VASP</strong>：周期性体系、固体材料、表面计算</li><li><strong>配合使用</strong>：用 Gaussian 优化分子，再放到 VASP 的周期性体系中</li></ul></div><h3>7. 学习路径</h3><div class="fc"><div class="fn2-node s">了解 Gaussian 基础</div><div class="fa"></div><div class="fn2-node p">学习输入文件格式</div><div class="fa"></div><div class="fn2-node p">掌握基本计算任务</div><div class="fa"></div><div class="fn2-node p">进阶：过渡态、IRC</div><div class="fa"></div><div class="fn2-node e">与 VASP 配合使用</div></div><h3>8. 学习内容</h3>',18)),t("div",Uv,[w(d,{to:"/gaussian/install",class:"pc",style:{"--ca":"var(--blue)"}},{default:T(()=>[...s[3]||(s[3]=[t("div",{class:"pc-i"},"📦",-1),t("div",{class:"pc-t"},"安装配置",-1),t("div",{class:"pc-d"},"Gaussian 安装和环境配置",-1)])]),_:1}),w(d,{to:"/gaussian/input",class:"pc",style:{"--ca":"var(--green)"}},{default:T(()=>[...s[4]||(s[4]=[t("div",{class:"pc-i"},"📝",-1),t("div",{class:"pc-t"},"输入文件",-1),t("div",{class:"pc-d"},"Gaussian 输入文件格式详解",-1)])]),_:1}),w(d,{to:"/gaussian/tasks",class:"pc",style:{"--ca":"var(--purple)"}},{default:T(()=>[...s[5]||(s[5]=[t("div",{class:"pc-i"},"📊",-1),t("div",{class:"pc-t"},"计算任务",-1),t("div",{class:"pc-d"},"几何优化、频率、IRC 等",-1)])]),_:1}),w(d,{to:"/gaussian/output",class:"pc",style:{"--ca":"var(--accent)"}},{default:T(()=>[...s[6]||(s[6]=[t("div",{class:"pc-i"},"📋",-1),t("div",{class:"pc-t"},"输出分析",-1),t("div",{class:"pc-d"},"结果提取和可视化",-1)])]),_:1}),w(d,{to:"/gaussian/vasp-compare",class:"pc",style:{"--ca":"var(--orange)"}},{default:T(()=>[...s[7]||(s[7]=[t("div",{class:"pc-i"},"🔄",-1),t("div",{class:"pc-t"},"与 VASP 对比",-1),t("div",{class:"pc-d"},"两种软件的异同和配合",-1)])]),_:1})])])}const Hv=J($v,[["render",Kv]]),Wv={name:"GaussianInstallView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},jv={class:"sec active"},zv={class:"bread"},Yv={class:"cb"},Zv={class:"ch"},Xv={class:"cb"},Jv={class:"ch"},Qv={class:"cb"},_v={class:"ch"},s2={class:"cb"},n2={class:"ch"},t2={class:"cb"},a2={class:"ch"},l2={class:"cb"},p2={class:"ch"};function e2(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",jv,[t("div",zv,[w(d,{to:"/"},{default:T(()=>[...s[6]||(s[6]=[f("首页",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[7]||(s[7]=[f("Gaussian 教程",-1)])]),_:1}),s[9]||(s[9]=f("/ ",-1)),s[10]||(s[10]=t("span",null,"安装配置",-1))]),s[26]||(s[26]=i('<h2>Gaussian 安装与配置</h2><p>本教程介绍 Gaussian 16 的安装和基本配置方法。</p><h3>1. 系统要求</h3><table class="tb"><thead><tr><th>配置</th><th>最低要求</th><th>推荐配置</th></tr></thead><tbody><tr><td><strong>操作系统</strong></td><td>Linux, Windows, macOS</td><td>Linux (推荐)</td></tr><tr><td><strong>处理器</strong></td><td>多核 CPU</td><td>16 核以上</td></tr><tr><td><strong>内存</strong></td><td>8 GB</td><td>64 GB 或更高</td></tr><tr><td><strong>硬盘</strong></td><td>10 GB</td><td>SSD 100 GB+</td></tr></tbody></table><h3>2. Linux 安装步骤</h3><h4>步骤 1：创建安装目录</h4>',6)),t("div",Yv,[t("div",Zv,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[12]||(s[12]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 创建 Gaussian 安装目录"),f(`
`),t("span",{class:"fn2"},"sudo mkdir"),f(` -p /opt/gaussian
`),t("span",{class:"fn2"},"sudo chown"),f(" $USER:$USER /opt/gaussian")])],-1))]),s[27]||(s[27]=t("h4",null,"步骤 2：解压安装包",-1)),t("div",Xv,[t("div",Jv,[s[13]||(s[13]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="cm"># 解压安装包</span>
<span class="fn2">cd</span> /opt/gaussian
<span class="fn2">tar</span> -xzf gaussian16.tar.gz

<span class="cm"># 设置权限</span>
<span class="fn2">chmod</span> -R 755 g16</code></pre>`,1))]),s[28]||(s[28]=t("h4",null,"步骤 3：配置环境变量",-1)),t("div",Qv,[t("div",_v,[s[15]||(s[15]=t("span",{class:"la"},"bash",-1)),s[16]||(s[16]=t("span",{class:"fn"},"~/.bashrc",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="cm"># Gaussian 环境变量</span>
<span class="kw">export</span> g16root=/opt/gaussian
<span class="kw">export</span> GAUSS_SCRDIR=/tmp/gaussian
<span class="kw">source</span> $g16root/g16/bsd/g16.profile

<span class="cm"># 创建临时目录</span>
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR</code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"步骤 4：使环境变量生效",-1)),t("div",s2,[t("div",n2,[s[18]||(s[18]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 重新加载配置"),f(`
`),t("span",{class:"fn2"},"source"),f(` ~/.bashrc

`),t("span",{class:"cm"},"# 验证安装"),f(`
`),t("span",{class:"fn2"},"g16"),f(" < /dev/null")])],-1))]),s[30]||(s[30]=i(`<h3>3. Windows 安装</h3><h4>步骤 1：运行安装程序</h4><ul><li>双击 Gaussian 16 安装程序</li><li>选择安装目录（建议：<code>C:\\G16W</code>）</li><li>完成安装</li></ul><h4>步骤 2：配置环境</h4><div class="cb"><div class="ch"><span class="la">环境变量</span></div><pre><code><span class="cm"># 添加到系统 PATH</span>
C:\\G16W

<span class="cm"># 设置临时目录</span>
GAUSS_SCRDIR = C:\\Temp\\Gaussian</code></pre></div><h3>4. 集群配置</h3><h4>提交脚本模板</h4>`,7)),t("div",t2,[t("div",a2,[s[20]||(s[20]=t("span",{class:"la"},"bash",-1)),s[21]||(s[21]=t("span",{class:"fn"},"submit.sh",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[22]||(s[22]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm">#SBATCH -J gaussian_job</span>
<span class="cm">#SBATCH -N 1</span>
<span class="cm">#SBATCH -n 16</span>
<span class="cm">#SBATCH --mem=64G</span>
<span class="cm">#SBATCH -t 24:00:00</span>
<span class="cm">#SBATCH -o gaussian.out</span>
<span class="cm">#SBATCH -e gaussian.err</span>

<span class="cm"># 加载 Gaussian 环境</span>
<span class="kw">source</span> /opt/gaussian/g16/bsd/g16.profile

<span class="cm"># 设置临时目录</span>
<span class="kw">export</span> GAUSS_SCRDIR=/scratch/$USER/gaussian
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR

<span class="cm"># 运行 Gaussian</span>
<span class="fn2">cd</span> $SLURM_SUBMIT_DIR
g16 &lt; input.gjf &gt; output.log

<span class="cm"># 清理临时文件</span>
<span class="fn2">rm</span> -rf $GAUSS_SCRDIR/*</code></pre>`,1))]),s[31]||(s[31]=t("h3",null,"5. 多核并行设置",-1)),t("div",l2,[t("div",p2,[s[23]||(s[23]=t("span",{class:"la"},"input.gjf",-1)),s[24]||(s[24]=t("span",{class:"fn"},"并行计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=16</span>              <span class="cm">; 使用 16 个核心</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Molecule optimization</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[32]||(s[32]=i('<h3>6. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td>找不到 g16 命令</td><td>环境变量未设置</td><td>检查 ~/.bashrc 配置</td></tr><tr><td>内存不足</td><td>%mem 设置过大</td><td>减小 %mem 值</td></tr><tr><td>磁盘空间不足</td><td>临时文件过多</td><td>清理 GAUSS_SCRDIR</td></tr><tr><td>段错误</td><td>内存或栈溢出</td><td>增加 ulimit -s unlimited</td></tr></tbody></table><div class="ib tip"><strong>提示：</strong>在 ~/.bashrc 中添加 <code class="ic">ulimit -s unlimited</code> 可以避免栈溢出问题。</div>',3))])}const o2=J(Wv,[["render",e2]]),d2={name:"GaussianInputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},r2={class:"sec active"},c2={class:"bread"},i2={class:"cb"},u2={class:"ch"},f2={class:"cb"},m2={class:"ch"},b2={class:"cb"},g2={class:"ch"},v2={class:"cb"},h2={class:"ch"},y2={class:"cb"},k2={class:"ch"};function C2(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",r2,[t("div",c2,[w(d,{to:"/"},{default:T(()=>[...s[5]||(s[5]=[f("首页",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[6]||(s[6]=[f("Gaussian 教程",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),s[9]||(s[9]=t("span",null,"输入文件",-1))]),s[21]||(s[21]=t("h2",null,"Gaussian 输入文件详解",-1)),s[22]||(s[22]=t("p",null,"Gaussian 输入文件（.gjf 或 .com）包含计算的所有设置信息。",-1)),s[23]||(s[23]=t("h3",null,"1. 输入文件结构",-1)),t("div",i2,[t("div",u2,[s[10]||(s[10]=t("span",{class:"la"},"input.gjf",-1)),s[11]||(s[11]=t("span",{class:"fn"},"完整结构",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[12]||(s[12]=i(`<pre><code><span class="cm">%chk=molecule.chk</span>           <span class="cm">; 检查点文件</span>
<span class="cm">%mem=4GB</span>                    <span class="cm">; 内存限制</span>
<span class="cm">%nproc=8</span>                    <span class="cm">; 并行核心数</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>       <span class="cm">; 路由段</span>

<span class="vr">Water molecule optimization</span> <span class="cm">; 标题段</span>

<span class="nu">0 1</span>                          <span class="cm">; 电荷和自旋</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>    <span class="cm">; 厐子坐标</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span>

                              <span class="cm">; 空行结束</span></code></pre>`,1))]),s[24]||(s[24]=i(`<h3>2. 路由段详解</h3><p>路由段以 <code class="ic">#</code> 开头，指定计算方法和任务类型。</p><h4>基本格式</h4><div class="cb"><div class="ch"><span class="la">格式</span></div><pre><code><span class="cm"># [选项] 方法/基组 [任务关键词] [其他选项]</span>

<span class="cm"># 示例</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>
<span class="cm">#p M062X/def2TZVP td=(nstates=10)</span></code></pre></div><h4>常用选项前缀</h4><table class="tb"><thead><tr><th>前缀</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td><code class="ic">#</code></td><td>默认输出</td><td>简洁输出</td></tr><tr><td><code class="ic">#p</code></td><td>详细输出</td><td>推荐使用</td></tr><tr><td><code class="ic">#t</code></td><td>测试模式</td><td>不执行计算</td></tr></tbody></table><h4>常用任务关键词</h4><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>说明</th></tr></thead><tbody><tr><td><code class="ic">opt</code></td><td>几何优化</td><td>寻找能量最低构型</td></tr><tr><td><code class="ic">freq</code></td><td>频率计算</td><td>振动频率和热力学量</td></tr><tr><td><code class="ic">opt freq</code></td><td>优化+频率</td><td>最常用组合</td></tr><tr><td><code class="ic">sp</code></td><td>单点能</td><td>固定几何计算能量</td></tr><tr><td><code class="ic">ts</code></td><td>过渡态</td><td>搜索过渡态</td></tr><tr><td><code class="ic">irc</code></td><td>IRC 计算</td><td>反应路径跟踪</td></tr><tr><td><code class="ic">td</code></td><td>激发态</td><td>TDDFT 计算</td></tr><tr><td><code class="ic">polar</code></td><td>极化率</td><td>计算极化率张量</td></tr></tbody></table><h3>3. Link 0 命令</h3><p>以 <code class="ic">%</code> 开头的命令控制计算资源。</p><table class="tb"><thead><tr><th>命令</th><th>功能</th><th>示例</th></tr></thead><tbody><tr><td><code class="ic">%chk</code></td><td>检查点文件</td><td>%chk=molecule.chk</td></tr><tr><td><code class="ic">%mem</code></td><td>内存限制</td><td>%mem=32GB</td></tr><tr><td><code class="ic">%nproc</code></td><td>并行核心数</td><td>%nproc=16</td></tr><tr><td><code class="ic">%cpu</code></td><td>CPU 绑定</td><td>%cpu=0-15</td></tr><tr><td><code class="ic">%scr</code></td><td>临时目录</td><td>%scr=/scratch</td></tr></tbody></table><h3>4. 坐标格式</h3><h4>笛卡尔坐标（最常用）</h4><div class="cb"><div class="ch"><span class="la">笛卡尔坐标</span></div><pre><code><span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre></div><h4>内坐标（Z-matrix）</h4><div class="cb"><div class="ch"><span class="la">Z-matrix</span></div><pre><code><span class="nu">0 1</span>
<span class="vr">O</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>  <span class="nu">2</span>  <span class="nu">104.5</span></code></pre></div><h3>5. 常用输入模板</h3><h4>模板 1：几何优化 + 频率</h4>`,18)),t("div",f2,[t("div",m2,[s[13]||(s[13]=t("span",{class:"la"},"opt_freq.gjf",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Molecule optimization and frequency</span>

<span class="nu">0 1</span>
<span class="cm">[原子坐标]</span></code></pre>`,1))]),s[25]||(s[25]=t("h4",null,"模板 2：过渡态搜索",-1)),t("div",b2,[t("div",g2,[s[15]||(s[15]=t("span",{class:"la"},"ts_search.gjf",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>`,1))]),s[26]||(s[26]=t("h4",null,"模板 3：TDDFT 激发态",-1)),t("div",v2,[t("div",h2,[s[17]||(s[17]=t("span",{class:"la"},"tddft.gjf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=i(`<pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[27]||(s[27]=t("h4",null,"模板 4：高精度单点能",-1)),t("div",y2,[t("div",k2,[s[19]||(s[19]=t("span",{class:"la"},"high_accuracy.gjf",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[20]||(s[20]=i(`<pre><code><span class="cm">%chk=ccsdt.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=32</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[28]||(s[28]=i(`<h3>6. 特殊设置</h3><h4>对称性限制</h4><div class="cb"><div class="ch"><span class="la">对称性</span></div><pre><code><span class="cm"># 强制 C2v 对称性</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(Z-Matrix)</span>

<span class="vr">Water with symmetry</span>

<span class="nu">0 1</span>
<span class="vr">O</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">rOH</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">rOH</span>  <span class="nu">2</span>  <span class="nu">aHOH</span>

<span class="nu">rOH=0.96</span>
<span class="nu">aHOH=104.5</span></code></pre></div><h4>冻结原子</h4><div class="cb"><div class="ch"><span class="la">冻结坐标</span></div><pre><code><span class="cm"># 使用 modredundant</span>
<span class="cm">#p B3LYP/6-31G(d) opt=modredundant</span>

<span class="vr">Freeze bond</span>

<span class="nu">0 1</span>
<span class="cm">[原子坐标]</span>

<span class="nu">B 1 2 F</span>    <span class="cm">; 冻结键 1-2</span>
<span class="nu">A 1 2 3 F</span>  <span class="cm">; 冻结角 1-2-3</span></code></pre></div><h3>7. 输入文件检查清单</h3><table class="tb"><thead><tr><th>项目</th><th>检查内容</th></tr></thead><tbody><tr><td>Link 0</td><td>%chk, %mem, %nproc 设置合理</td></tr><tr><td>路由段</td><td>方法/基组正确，任务关键词完整</td></tr><tr><td>标题行</td><td>非空，描述清楚</td></tr><tr><td>电荷/自旋</td><td>电荷和自旋多重度正确</td></tr><tr><td>原子坐标</td><td>原子类型正确，坐标合理</td></tr><tr><td>空行结尾</td><td>文件以空行结束</td></tr></tbody></table><div class="ib warn"><strong>常见错误：</strong><ul><li>忘记空行结尾会导致计算失败</li><li>电荷/自旋设置错误会导致收敛问题</li><li>原子坐标单位默认为 Å（非 Bohr）</li></ul></div>`,8))])}const w2=J(d2,[["render",C2]]),S2={name:"GaussianTasksView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},A2={class:"sec active"},E2={class:"bread"},T2={class:"cb"},R2={class:"ch"},O2={class:"cb"},P2={class:"ch"},I2={class:"cb"},x2={class:"ch"},N2={class:"cb"},q2={class:"ch"},M2={class:"cb"},D2={class:"ch"},F2={class:"cb"},V2={class:"ch"},G2={class:"cb"},$2={class:"ch"},B2={class:"cb"},L2={class:"ch"},U2={class:"cb"},K2={class:"ch"};function H2(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",A2,[t("div",E2,[w(d,{to:"/"},{default:T(()=>[...s[9]||(s[9]=[f("首页",-1)])]),_:1}),s[11]||(s[11]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[10]||(s[10]=[f("Gaussian 教程",-1)])]),_:1}),s[12]||(s[12]=f("/ ",-1)),s[13]||(s[13]=t("span",null,"计算任务",-1))]),s[41]||(s[41]=t("h2",null,"Gaussian 计算任务详解",-1)),s[42]||(s[42]=t("p",null,"本节介绍 Gaussian 常用的计算任务类型和设置方法。",-1)),s[43]||(s[43]=t("h3",null,"1. 几何优化",-1)),s[44]||(s[44]=t("p",null,"寻找能量最低的分子构型。",-1)),t("div",T2,[t("div",R2,[s[14]||(s[14]=t("span",{class:"la"},"input.gjf",-1)),s[15]||(s[15]=t("span",{class:"fn"},"几何优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm">%chk=opt.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Water optimization</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre>`,1))]),s[45]||(s[45]=i('<h4>优化选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code class="ic">opt</code></td><td>默认优化</td><td>大多数情况</td></tr><tr><td><code class="ic">opt=tight</code></td><td>严格收敛</td><td>高精度要求</td></tr><tr><td><code class="ic">opt=loose</code></td><td>宽松收敛</td><td>初始粗优化</td></tr><tr><td><code class="ic">opt=(maxstep=5)</code></td><td>最大步数</td><td>限制优化步数</td></tr><tr><td><code class="ic">opt=(Z-Matrix)</code></td><td>Z-matrix 优化</td><td>有对称性要求</td></tr></tbody></table><h3>2. 频率计算</h3><p>计算振动频率，验证优化结果并获取热力学量。</p>',4)),t("div",O2,[t("div",P2,[s[17]||(s[17]=t("span",{class:"la"},"input.gjf",-1)),s[18]||(s[18]=t("span",{class:"fn"},"频率计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="cm">%chk=freq.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) freq</span>

<span class="vr">Water frequency</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[46]||(s[46]=i('<h4>频率结果解读</h4><table class="tb"><thead><tr><th>频率范围</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td>虚频（负值）</td><td>过渡态或高阶鞍点</td><td>需要检查结构</td></tr><tr><td>0-100 cm⁻¹</td><td>低频振动</td><td>可能是虚频噪音</td></tr><tr><td>100-400 cm⁻¹</td><td>骨架振动</td><td>分子变形</td></tr><tr><td>400-1500 cm⁻¹</td><td>指纹区</td><td>官能团特征</td></tr><tr><td>1500-4000 cm⁻¹</td><td>伸缩振动</td><td>化学键振动</td></tr></tbody></table><h3>3. 过渡态搜索</h3><p>寻找反应的过渡态结构。</p>',4)),t("div",I2,[t("div",x2,[s[20]||(s[20]=t("span",{class:"la"},"input.gjf",-1)),s[21]||(s[21]=t("span",{class:"fn"},"过渡态搜索",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[22]||(s[22]=i(`<pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态初始猜测坐标]</span></code></pre>`,1))]),s[47]||(s[47]=t("h4",null,"过渡态验证",-1)),s[48]||(s[48]=t("ul",null,[t("li",null,"必须有且仅有一个虚频"),t("li",null,"虚频对应反应坐标"),t("li",null,"需要 IRC 计算确认连接正确的反应物和产物")],-1)),s[49]||(s[49]=t("h3",null,"4. IRC 计算",-1)),s[50]||(s[50]=t("p",null,"跟踪反应路径，确认过渡态连接正确的反应物和产物。",-1)),t("div",N2,[t("div",q2,[s[23]||(s[23]=t("span",{class:"la"},"input.gjf",-1)),s[24]||(s[24]=t("span",{class:"fn"},"IRC 正向",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm">%chk=irc.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) irc=(forward,calcfc)</span>

<span class="vr">IRC forward</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>`,1))]),t("div",M2,[t("div",D2,[s[26]||(s[26]=t("span",{class:"la"},"input.gjf",-1)),s[27]||(s[27]=t("span",{class:"fn"},"IRC 反向",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[28]||(s[28]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"#p M062X/6-311+G(d,p) irc=(reverse,calcfc)")])],-1))]),s[51]||(s[51]=t("h3",null,"5. TDDFT 激发态",-1)),s[52]||(s[52]=t("p",null,"计算分子的激发态性质，用于光谱预测。",-1)),t("div",F2,[t("div",V2,[s[29]||(s[29]=t("span",{class:"la"},"input.gjf",-1)),s[30]||(s[30]=t("span",{class:"fn"},"TDDFT",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[31]||(s[31]=i(`<pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[53]||(s[53]=i('<h4>TDDFT 选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code class="ic">nstates=N</code></td><td>计算 N 个激发态</td><td>td=(nstates=10)</td></tr><tr><td><code class="ic">root=N</code></td><td>优化第 N 个激发态</td><td>td=(root=1)</td></tr><tr><td><code class="ic">triplets</code></td><td>包含三重态</td><td>td=(nstates=5,triplets)</td></tr></tbody></table><h3>6. 单点能计算</h3><p>在固定几何上计算能量。</p>',4)),t("div",G2,[t("div",$2,[s[32]||(s[32]=t("span",{class:"la"},"input.gjf",-1)),s[33]||(s[33]=t("span",{class:"fn"},"单点能",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[34]||(s[34]=i(`<pre><code><span class="cm">%chk=sp.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[54]||(s[54]=t("h3",null,"7. 溶剂效应",-1)),s[55]||(s[55]=t("p",null,"使用隐式溶剂模型模拟溶剂环境。",-1)),t("div",B2,[t("div",L2,[s[35]||(s[35]=t("span",{class:"la"},"input.gjf",-1)),s[36]||(s[36]=t("span",{class:"fn"},"PCM 溶剂",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[37]||(s[37]=i(`<pre><code><span class="cm">%chk=solvent.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) opt scrf=(pcm,solvent=water)</span>

<span class="vr">Optimization in water</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[56]||(s[56]=i('<h4>常用溶剂</h4><table class="tb"><thead><tr><th>溶剂</th><th>关键词</th><th>介电常数</th></tr></thead><tbody><tr><td>水</td><td><code class="ic">solvent=water</code></td><td>78.4</td></tr><tr><td>甲醇</td><td><code class="ic">solvent=methanol</code></td><td>32.7</td></tr><tr><td>乙醇</td><td><code class="ic">solvent=ethanol</code></td><td>24.5</td></tr><tr><td>DMSO</td><td><code class="ic">solvent=dmso</code></td><td>46.7</td></tr><tr><td>氯仿</td><td><code class="ic">solvent=chloroform</code></td><td>4.8</td></tr><tr><td>甲苯</td><td><code class="ic">solvent=toluene</code></td><td>2.4</td></tr></tbody></table><h3>8. 自然键轨道（NBO）分析</h3><p>分析化学键和电子结构。</p>',4)),t("div",U2,[t("div",K2,[s[38]||(s[38]=t("span",{class:"la"},"input.gjf",-1)),s[39]||(s[39]=t("span",{class:"fn"},"NBO 分析",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[40]||(s[40]=i(`<pre><code><span class="cm">%chk=nbo.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) pop=nboread</span>

<span class="vr">NBO analysis</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span>

<span class="cm">$nbo</span>
<span class="cm">bndidx $end</span></code></pre>`,1))]),s[57]||(s[57]=i('<h3>9. 常见计算组合</h3><table class="tb"><thead><tr><th>目的</th><th>推荐组合</th></tr></thead><tbody><tr><td>常规优化</td><td><code class="ic">B3LYP/6-31G(d) opt freq</code></td></tr><tr><td>精确优化</td><td><code class="ic">M062X/6-311+G(d,p) opt freq</code></td></tr><tr><td>弱相互作用</td><td><code class="ic">ωB97X-D/def2-TZVP opt freq</code></td></tr><tr><td>过渡态</td><td><code class="ic">M062X/6-311+G(d,p) opt=(ts,calcfc) freq</code></td></tr><tr><td>高精度能量</td><td><code class="ic">CCSD(T)/cc-pVTZ</code></td></tr><tr><td>UV-Vis 光谱</td><td><code class="ic">B3LYP/6-31+G(d,p) td=(nstates=10)</code></td></tr></tbody></table>',2))])}const W2=J(S2,[["render",H2]]),j2={name:"GaussianOutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},z2={class:"sec active"},Y2={class:"bread"},Z2={class:"cb"},X2={class:"ch"},J2={class:"cb"},Q2={class:"ch"},_2={class:"cb"},sh={class:"ch"},nh={class:"cb"},th={class:"ch"},ah={class:"cb"},lh={class:"ch"},ph={class:"cb"},eh={class:"ch"},oh={class:"cb"},dh={class:"ch"},rh={class:"cb"},ch={class:"ch"},ih={class:"cb"},uh={class:"ch"};function fh(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",z2,[t("div",Y2,[w(d,{to:"/"},{default:T(()=>[...s[9]||(s[9]=[f("首页",-1)])]),_:1}),s[11]||(s[11]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[10]||(s[10]=[f("Gaussian 教程",-1)])]),_:1}),s[12]||(s[12]=f("/ ",-1)),s[13]||(s[13]=t("span",null,"输出分析",-1))]),s[33]||(s[33]=i(`<h2>Gaussian 输出分析</h2><p>本节介绍如何分析 Gaussian 输出文件（.log）并提取关键信息。</p><h3>1. 输出文件结构</h3><div class="cb"><div class="ch"><span class="la">output.log</span><span class="fn">文件结构</span></div><pre><code><span class="cm">========================================</span>
<span class="cm">Gaussian 16:  xxx-W64RevC.01</span>
<span class="cm">========================================</span>

<span class="cm">[1] 输入回显</span>
<span class="cm">[2] 初始几何</span>
<span class="cm">[3] 迭代计算（SCF）</span>
<span class="cm">[4] 优化步骤</span>
<span class="cm">[5] 频率计算（如果设置）</span>
<span class="cm">[6] 最终结果</span>
<span class="cm">[7] 计算时间</span></code></pre></div><h3>2. 检查计算状态</h3>`,5)),t("div",Z2,[t("div",X2,[s[14]||(s[14]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[15]||(s[15]=i(`<pre><code><span class="cm"># 检查是否正常结束</span>
<span class="fn2">grep</span> <span class="st">&quot;Normal termination&quot;</span> output.log

<span class="cm"># 检查错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error&quot;</span> output.log

<span class="cm"># 查看最后几行</span>
<span class="fn2">tail</span> -20 output.log</code></pre>`,1))]),s[34]||(s[34]=i('<table class="tb"><thead><tr><th>状态</th><th>输出信息</th><th>说明</th></tr></thead><tbody><tr><td>正常结束</td><td><code>Normal termination</code></td><td>计算成功</td></tr><tr><td>SCF 不收敛</td><td><code>SCF has not converged</code></td><td>需要调整设置</td></tr><tr><td>优化不收敛</td><td><code>Optimization did not converge</code></td><td>增加优化步数</td></tr><tr><td>内存不足</td><td><code>Insufficient memory</code></td><td>增加 %mem</td></tr></tbody></table><h3>3. 提取总能量</h3>',2)),t("div",J2,[t("div",Q2,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="cm"># 提取 SCF 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 提取能量数值</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>

<span class="cm"># 提取 MP2 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;EUMP2&quot;</span> output.log

<span class="cm"># 提取 CCSD(T) 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;CCSD(T)=&quot;</span> output.log</code></pre>`,1))]),s[35]||(s[35]=t("h3",null,"4. 提取优化几何",-1)),t("div",_2,[t("div",sh,[s[18]||(s[18]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=i(`<pre><code><span class="cm"># 提取最终几何（笛卡尔坐标）</span>
<span class="fn2">grep</span> -A <span class="nu">100</span> <span class="st">&quot;Standard orientation&quot;</span> output.log | <span class="fn2">tail</span> -n +5 | <span class="fn2">head</span> -n -3

<span class="cm"># 使用 cclib 提取（Python）</span>
<span class="kw">import</span> cclib
data = cclib.io.ccopen(<span class="st">&quot;output.log&quot;</span>).parse()
<span class="fn2">print</span>(data.atomcoords[-<span class="nu">1</span>])  <span class="cm"># 最终坐标</span></code></pre>`,1))]),s[36]||(s[36]=t("h3",null,"5. 提取频率信息",-1)),t("div",nh,[t("div",th,[s[20]||(s[20]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[21]||(s[21]=i(`<pre><code><span class="cm"># 提取频率</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log

<span class="cm"># 提取红外强度</span>
<span class="fn2">grep</span> <span class="st">&quot;IR Inten&quot;</span> output.log

<span class="cm"># 检查虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{if ($2 &lt; 0) print &quot;虚频:&quot;, $2}&#39;</span></code></pre>`,1))]),s[37]||(s[37]=i('<h4>频率结果解读</h4><table class="tb"><thead><tr><th>信息</th><th>含义</th><th>单位</th></tr></thead><tbody><tr><td>Frequencies</td><td>振动频率</td><td>cm⁻¹</td></tr><tr><td>IR Inten</td><td>红外强度</td><td>KM/mol</td></tr><tr><td>Raman Activ</td><td>拉曼活性</td><td>Å⁴/amu</td></tr><tr><td>Red. masses</td><td>约化质量</td><td>amu</td></tr><tr><td>Frc consts</td><td>力常数</td><td>mdyn/Å</td></tr></tbody></table><h3>6. 提取热力学量</h3>',3)),t("div",ah,[t("div",lh,[s[22]||(s[22]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[23]||(s[23]=i(`<pre><code><span class="cm"># 提取热力学数据</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Thermochemistry&quot;</span> output.log

<span class="cm"># 提取零点能</span>
<span class="fn2">grep</span> <span class="st">&quot;Zero-point correction&quot;</span> output.log

<span class="cm"># 提取 Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;Sum of electronic and thermal Free Energies&quot;</span> output.log</code></pre>`,1))]),s[38]||(s[38]=i('<h4>热力学量说明</h4><table class="tb"><thead><tr><th>术语</th><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>零点能</td><td>ZPE</td><td>振动基态能量</td></tr><tr><td>热校正</td><td>E(Thermal)</td><td>热能校正值</td></tr><tr><td>焓</td><td>H</td><td>电子能 + 热校正 + PV</td></tr><tr><td>吉布斯自由能</td><td>G</td><td>H - TS</td></tr></tbody></table><h3>7. 提取偶极矩和电荷</h3>',3)),t("div",ph,[t("div",eh,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 提取偶极矩</span>
<span class="fn2">grep</span> -A <span class="nu">3</span> <span class="st">&quot;Dipole moment&quot;</span> output.log

<span class="cm"># 提取 Mulliken 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Mulliken charges&quot;</span> output.log

<span class="cm"># 提取 NBO 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Summary of Natural Population&quot;</span> output.log</code></pre>`,1))]),s[39]||(s[39]=t("h3",null,"8. 提取 TDDFT 结果",-1)),t("div",oh,[t("div",dh,[s[26]||(s[26]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[27]||(s[27]=i(`<pre><code><span class="cm"># 提取激发能</span>
<span class="fn2">grep</span> -A <span class="nu">50</span> <span class="st">&quot;Excitation energies&quot;</span> output.log

<span class="cm"># 提取波长</span>
<span class="fn2">grep</span> <span class="st">&quot;Excited State&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{print $7}&#39;</span>

<span class="cm"># 提取振子强度</span>
<span class="fn2">grep</span> <span class="st">&quot;f=&quot;</span> output.log</code></pre>`,1))]),s[40]||(s[40]=t("h3",null,"9. Python 分析脚本",-1)),t("div",rh,[t("div",ch,[s[28]||(s[28]=t("span",{class:"la"},"python",-1)),s[29]||(s[29]=t("span",{class:"fn"},"analyze_gaussian.py",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[30]||(s[30]=i(`<pre><code><span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_gaussian_output</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 Gaussian 输出文件&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    <span class="kw">return</span> content

<span class="kw">def</span> <span class="fn2">get_energy</span>(content):
    <span class="st">&quot;&quot;&quot;提取总能量&quot;&quot;&quot;</span>
    match = re.search(<span class="st">r&#39;SCF Done:.*?=\\s*([-\\d.]+)&#39;</span>, content)
    <span class="kw">if</span> match:
        <span class="kw">return</span> <span class="fn2">float</span>(match.group(<span class="nu">1</span>))
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_geometry</span>(content):
    <span class="st">&quot;&quot;&quot;提取最终几何&quot;&quot;&quot;</span>
    <span class="cm"># 找到所有 Standard orientation</span>
    blocks = re.findall(
        <span class="st">r&#39;Standard orientation.*?-{20}(.*?)-{20}&#39;</span>,
        content, re.DOTALL
    )
    <span class="kw">if</span> blocks:
        last_block = blocks[-<span class="nu">1</span>]
        <span class="cm"># 解析坐标</span>
        coords = []
        <span class="kw">for</span> line <span class="kw">in</span> last_block.strip().split(<span class="st">&#39;\\n&#39;</span>):
            parts = line.split()
            <span class="kw">if</span> <span class="fn2">len</span>(parts) == <span class="nu">6</span>:
                coords.append({
                    <span class="st">&#39;element&#39;</span>: parts[<span class="nu">1</span>],
                    <span class="st">&#39;x&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">3</span>]),
                    <span class="st">&#39;y&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">4</span>]),
                    <span class="st">&#39;z&#39;</span>: <span class="fn2">float</span>(parts[<span class="nu">5</span>])
                })
        <span class="kw">return</span> coords
    <span class="kw">return</span> <span class="kw">None</span>

<span class="kw">def</span> <span class="fn2">get_frequencies</span>(content):
    <span class="st">&quot;&quot;&quot;提取频率&quot;&quot;&quot;</span>
    freqs = re.findall(<span class="st">r&#39;Frequencies\\s+--\\s+(.*)&#39;</span>, content)
    <span class="kw">return</span> [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]

<span class="cm"># 使用示例</span>
content = <span class="fn2">read_gaussian_output</span>(<span class="st">&#39;output.log&#39;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;能量: {get_energy(content)} Hartree&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;频率: {get_frequencies(content)}&quot;</span>)</code></pre>`,1))]),s[41]||(s[41]=t("h3",null,"10. 常用 grep 命令速查",-1)),t("div",ih,[t("div",uh,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[32]||(s[32]=i(`<pre><code><span class="cm"># 计算状态</span>
<span class="fn2">grep</span> <span class="st">&quot;Normal termination&quot;</span> output.log

<span class="cm"># 总能量</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 优化收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;Optimization completed&quot;</span> output.log

<span class="cm"># 频率</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log

<span class="cm"># 零点能</span>
<span class="fn2">grep</span> <span class="st">&quot;Zero-point correction&quot;</span> output.log

<span class="cm"># Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;thermal Free Energies&quot;</span> output.log

<span class="cm"># 偶极矩</span>
<span class="fn2">grep</span> <span class="st">&quot;Tot=&quot;</span> output.log

<span class="cm"># 计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Job cpu time&quot;</span> output.log</code></pre>`,1))]),s[42]||(s[42]=t("div",{class:"ib tip"},[t("strong",null,"提示："),f("使用 cclib、Multiwfn 或 GaussView 等工具可以更方便地分析输出文件。")],-1))])}const mh=J(j2,[["render",fh]]),bh={name:"GaussianVaspCompareView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},gh={class:"sec active"},vh={class:"bread"},hh={class:"cb"},yh={class:"ch"},kh={class:"cb"},Ch={class:"ch"},wh={class:"cb"},Sh={class:"ch"},Ah={class:"cb"},Eh={class:"ch"};function Th(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",gh,[t("div",vh,[w(d,{to:"/"},{default:T(()=>[...s[4]||(s[4]=[f("首页",-1)])]),_:1}),s[6]||(s[6]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[5]||(s[5]=[f("Gaussian 教程",-1)])]),_:1}),s[7]||(s[7]=f("/ ",-1)),s[8]||(s[8]=t("span",null,"与 VASP 对比",-1))]),s[19]||(s[19]=i('<h2>Gaussian 与 VASP 对比</h2><p>了解两种软件的特点和适用场景，选择合适的计算工具。</p><h3>1. 基本对比</h3><table class="tb"><thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系</td></tr><tr><td><strong>基组类型</strong></td><td>高斯基组</td><td>平面波基组</td></tr><tr><td><strong>边界条件</strong></td><td>开放边界</td><td>周期性边界</td></tr><tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr><tr><td><strong>K 点采样</strong></td><td>不需要</td><td>需要</td></tr><tr><td><strong>适用体系大小</strong></td><td>小到中等</td><td>中等到大</td></tr></tbody></table><h3>2. 应用场景对比</h3><table class="tb"><thead><tr><th>应用场景</th><th>推荐软件</th><th>原因</th></tr></thead><tbody><tr><td>有机分子优化</td><td>Gaussian</td><td>分子专用，效率高</td></tr><tr><td>反应机理研究</td><td>Gaussian</td><td>过渡态搜索方便</td></tr><tr><td>晶体结构优化</td><td>VASP</td><td>周期性体系</td></tr><tr><td>表面计算</td><td>VASP</td><td>slab 模型</td></tr><tr><td>能带计算</td><td>VASP</td><td>周期性体系优势</td></tr><tr><td>高精度分子能量</td><td>Gaussian</td><td>CCSD(T) 等方法</td></tr><tr><td>大体系计算</td><td>VASP</td><td>平面波效率高</td></tr></tbody></table><h3>3. 计算方法对比</h3><table class="tb"><thead><tr><th>方法</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>DFT</strong></td><td>B3LYP, PBE0, M06 等</td><td>PBE, HSE06</td></tr><tr><td><strong>HF</strong></td><td>支持</td><td>不常用</td></tr><tr><td><strong>MP2</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>CCSD(T)</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>TDDFT</strong></td><td>支持</td><td>支持（GW/BSE）</td></tr><tr><td><strong>杂化泛函</strong></td><td>丰富</td><td>HSE06, PBE0</td></tr></tbody></table><h3>4. 输入文件对比</h3><h4>Gaussian 输入</h4>',10)),t("div",hh,[t("div",yh,[s[9]||(s[9]=t("span",{class:"la"},"input.gjf",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[10]||(s[10]=i(`<pre><code><span class="cm">%chk=water.chk</span>
<span class="cm">%mem=4GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Water molecule</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.0  0.0  0.117</span>
<span class="vr">H</span>   <span class="nu">0.0  0.757 -0.469</span>
<span class="vr">H</span>   <span class="nu">0.0 -0.757 -0.469</span></code></pre>`,1))]),s[20]||(s[20]=t("h4",null,"VASP 输入",-1)),t("div",kh,[t("div",Ch,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[12]||(s[12]=i(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">H2O</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=i('<h3>5. 配合使用策略</h3><div class="db"><div class="db-t">典型配合使用场景</div><h4>场景 1：分子吸附到表面</h4><ol><li><strong>Gaussian</strong>：优化分子构型</li><li><strong>VASP</strong>：构建表面模型，放置分子，计算吸附能</li></ol><h4>场景 2：反应机理研究</h4><ol><li><strong>Gaussian</strong>：搜索过渡态，确认反应路径</li><li><strong>VASP</strong>：计算周期性体系中的反应</li></ol><h4>场景 3：材料中的分子</h4><ol><li><strong>Gaussian</strong>：研究孤立分子性质</li><li><strong>VASP</strong>：计算分子在材料中的行为</li></ol></div><h3>6. 文件格式转换</h3><h4>Gaussian → VASP</h4>',4)),t("div",wh,[t("div",Sh,[s[13]||(s[13]=t("span",{class:"la"},"python",-1)),s[14]||(s[14]=t("span",{class:"fn"},"gjf2poscar.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[15]||(s[15]=i(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">&#39;output.log&#39;</span>)

<span class="cm"># 转换为 POSCAR</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)

<span class="cm"># 对于周期性体系，需要添加晶胞</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np
atoms.cell = np.diag([<span class="nu">15</span>, <span class="nu">15</span>, <span class="nu">15</span>])  <span class="cm"># 15Å 立方盒子</span>
atoms.pbc = <span class="kw">True</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)</code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"VASP → Gaussian",-1)),t("div",Ah,[t("div",Eh,[s[16]||(s[16]=t("span",{class:"la"},"python",-1)),s[17]||(s[17]=t("span",{class:"fn"},"poscar2gjf.py",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=i(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 POSCAR</span>
atoms = read(<span class="st">&#39;POSCAR&#39;</span>)

<span class="cm"># 转换为 Gaussian 输入</span>
write(<span class="st">&#39;molecule.gjf&#39;</span>, atoms)

<span class="cm"># 或手动创建</span>
<span class="kw">with</span> <span class="fn2">open</span>(<span class="st">&#39;molecule.gjf&#39;</span>, <span class="st">&#39;w&#39;</span>) <span class="kw">as</span> f:
    f.write(<span class="st">&#39;%chk=molecule.chk\\n&#39;</span>)
    f.write(<span class="st">&#39;%mem=4GB\\n&#39;</span>)
    f.write(<span class="st">&#39;%nproc=4\\n&#39;</span>)
    f.write(<span class="st">&#39;#p B3LYP/6-31G(d) opt\\n\\n&#39;</span>)
    f.write(<span class="st">&#39;Molecule\\n\\n0 1\\n&#39;</span>)
    <span class="kw">for</span> atom <span class="kw">in</span> atoms:
        f.write(<span class="st">f&quot;{atom.symbol}  {atom.position[0]:.6f}  {atom.position[1]:.6f}  {atom.position[2]:.6f}\\n&quot;</span>)
    f.write(<span class="st">&#39;\\n&#39;</span>)</code></pre>`,1))]),s[23]||(s[23]=i('<h3>7. 计算成本对比</h3><table class="tb"><thead><tr><th>体系大小</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td>小分子（&lt; 50 原子）</td><td>✅ 快</td><td>❌ 慢（真空计算）</td></tr><tr><td>中等分子（50-200 原子）</td><td>⚠️ 中等</td><td>⚠️ 中等</td></tr><tr><td>大体系（&gt; 200 原子）</td><td>❌ 慢</td><td>✅ 快</td></tr><tr><td>周期性体系</td><td>❌ 不适合</td><td>✅ 适合</td></tr></tbody></table><h3>8. 选择建议</h3><div class="ib tip"><strong>选择原则：</strong><ul><li><strong>分子体系</strong>：优先使用 Gaussian</li><li><strong>周期性体系</strong>：使用 VASP</li><li><strong>高精度基准</strong>：使用 Gaussian (CCSD(T))</li><li><strong>大体系</strong>：使用 VASP</li><li><strong>反应机理</strong>：使用 Gaussian（过渡态搜索）</li><li><strong>能带/态密度</strong>：使用 VASP</li></ul></div><h3>9. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>解答</th></tr></thead><tbody><tr><td>如何选择泛函？</td><td>Gaussian 用 B3LYP/M06，VASP 用 PBE/HSE06</td></tr><tr><td>能量如何比较？</td><td>两种软件的能量不能直接比较</td></tr><tr><td>如何验证结果？</td><td>与实验值对比，或用更高级方法验证</td></tr><tr><td>可以联合使用吗？</td><td>可以，分别用于不同目的</td></tr></tbody></table>',6))])}const Rh=J(bh,[["render",Th]]),Oh={name:"GaussianParamsView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Ph={class:"sec active"},Ih={class:"bread"},xh={class:"cb"},Nh={class:"ch"},qh={class:"cb"},Mh={class:"ch"},Dh={class:"cb"},Fh={class:"ch"},Vh={class:"cb"},Gh={class:"ch"},$h={class:"cb"},Bh={class:"ch"},Lh={class:"cb"},Uh={class:"ch"};function Kh(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",Ph,[t("div",Ih,[w(d,{to:"/"},{default:T(()=>[...s[6]||(s[6]=[f("首页",-1)])]),_:1}),s[8]||(s[8]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[7]||(s[7]=[f("Gaussian 教程",-1)])]),_:1}),s[9]||(s[9]=f("/ ",-1)),s[10]||(s[10]=t("span",null,"输入参数详解",-1))]),s[23]||(s[23]=i('<h2>Gaussian 输入参数详解</h2><p>本节详细介绍 Gaussian 计算中常用的输入参数及其设置方法。</p><h3>1. Link 0 命令</h3><p>Link 0 命令以 <code class="ic">%</code> 开头，用于控制计算资源。</p><table class="tb"><thead><tr><th>参数</th><th>格式</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><strong>%chk</strong></td><td>%chk=filename.chk</td><td>检查点文件名</td><td>%chk=molecule.chk</td></tr><tr><td><strong>%mem</strong></td><td>%mem=NGB</td><td>内存限制</td><td>%mem=32GB</td></tr><tr><td><strong>%nproc</strong></td><td>%nproc=N</td><td>CPU 核心数</td><td>%nproc=16</td></tr><tr><td><strong>%scr</strong></td><td>%scr=path</td><td>临时目录</td><td>%scr=/scratch</td></tr><tr><td><strong>%kjob</strong></td><td>%kjob=code</td><td>完成后操作</td><td>%kjob=L302</td></tr><tr><td><strong>%chk</strong></td><td>%chk=file</td><td>保留 chk 文件</td><td>%chk=old.chk</td></tr></tbody></table><h4>内存单位</h4><table class="tb"><thead><tr><th>单位</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>GB</td><td>%mem=32GB</td><td>千兆字节</td></tr><tr><td>MB</td><td>%mem=32000MB</td><td>兆字节</td></tr><tr><td>GW</td><td>%mem=4GW</td><td>千兆字（8字节/字）</td></tr><tr><td>MW</td><td>%mem=4000MW</td><td>兆字</td></tr></tbody></table><h3>2. 路由段参数</h3><h4>计算方法</h4><table class="tb"><thead><tr><th>方法</th><th>关键词</th><th>适用场景</th><th>精度</th></tr></thead><tbody><tr><td><strong>HF</strong></td><td>HF</td><td>定性分析</td><td>低</td></tr><tr><td><strong>DFT 泛函</strong></td><td>B3LYP, PBE0, M06</td><td>通用计算</td><td>中-高</td></tr><tr><td><strong>MP2</strong></td><td>MP2</td><td>弱相互作用</td><td>高</td></tr><tr><td><strong>CCSD</strong></td><td>CCSD</td><td>高精度</td><td>很高</td></tr><tr><td><strong>CCSD(T)</strong></td><td>CCSD(T)</td><td>金标准</td><td>极高</td></tr><tr><td><strong>CASSCF</strong></td><td>CASSCF</td><td>多参考态</td><td>变化</td></tr></tbody></table><h4>常用泛函</h4><table class="tb"><thead><tr><th>泛函</th><th>关键词</th><th>类型</th><th>特点</th></tr></thead><tbody><tr><td><strong>B3LYP</strong></td><td>B3LYP</td><td>杂化</td><td>最广泛使用</td></tr><tr><td><strong>PBE0</strong></td><td>PBE0</td><td>杂化</td><td>与 VASP PBE 对应</td></tr><tr><td><strong>M06</strong></td><td>M06</td><td>杂化</td><td>主族元素</td></tr><tr><td><strong>M06-2X</strong></td><td>M062X</td><td>双杂化</td><td>反应能垒</td></tr><tr><td><strong>ωB97X-D</strong></td><td>wB97XD</td><td>范围分离</td><td>包含色散</td></tr><tr><td><strong>B2PLYP</strong></td><td>B2PLYP</td><td>双杂化</td><td>高精度</td></tr><tr><td><strong>PBE</strong></td><td>PBEPBE</td><td>GGA</td><td>固体常用</td></tr></tbody></table><h4>基组</h4><table class="tb"><thead><tr><th>基组系列</th><th>示例</th><th>精度</th><th>特点</th></tr></thead><tbody><tr><td><strong>Pople</strong></td><td>6-31G(d)</td><td>中</td><td>最常用</td></tr><tr><td><strong>Pople+极化</strong></td><td>6-311+G(2d,2p)</td><td>高</td><td>精确计算</td></tr><tr><td><strong>Dunning</strong></td><td>cc-pVDZ, cc-pVTZ</td><td>中-高</td><td>相关一致性</td></tr><tr><td><strong>def2</strong></td><td>def2-SVP, def2-TZVP</td><td>中-高</td><td>全元素覆盖</td></tr><tr><td><strong>LanL</strong></td><td>LanL2DZ</td><td>中</td><td>重元素</td></tr><tr><td><strong>STO</strong></td><td>STO-3G</td><td>低</td><td>快速计算</td></tr></tbody></table><h4>基组后缀含义</h4><table class="tb"><thead><tr><th>后缀</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td><strong>(d)</strong> 或 <strong>*</strong></td><td>添加 d 极化函数</td><td>6-31G(d)</td></tr><tr><td><strong>(d,p)</strong> 或 <strong>**</strong></td><td>添加 d 和 p 极化函数</td><td>6-31G(d,p)</td></tr><tr><td><strong>+</strong></td><td>添加弥散函数</td><td>6-31+G(d)</td></tr><tr><td><strong>++</strong></td><td>所有原子添加弥散</td><td>6-31++G(d)</td></tr><tr><td><strong>(2d,2p)</strong></td><td>多套极化函数</td><td>6-31G(2d,2p)</td></tr></tbody></table><h3>3. 任务关键词</h3><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>常用选项</th></tr></thead><tbody><tr><td><strong>opt</strong></td><td>几何优化</td><td>opt, opt=tight, opt=loose</td></tr><tr><td><strong>freq</strong></td><td>频率计算</td><td>freq, freq=raman</td></tr><tr><td><strong>sp</strong></td><td>单点能</td><td>sp</td></tr><tr><td><strong>ts</strong></td><td>过渡态</td><td>opt=(ts,calcfc)</td></tr><tr><td><strong>irc</strong></td><td>IRC 计算</td><td>irc=(forward,calcfc)</td></tr><tr><td><strong>td</strong></td><td>激发态</td><td>td=(nstates=10)</td></tr><tr><td><strong>polar</strong></td><td>极化率</td><td>polar</td></tr><tr><td><strong>force</strong></td><td>力计算</td><td>force</td></tr><tr><td><strong>scan</strong></td><td>势能面扫描</td><td>opt=modredundant</td></tr></tbody></table><h4>优化选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>opt</strong></td><td>默认优化</td><td>大多数情况</td></tr><tr><td><strong>opt=tight</strong></td><td>严格收敛</td><td>高精度要求</td></tr><tr><td><strong>opt=loose</strong></td><td>宽松收敛</td><td>初始粗优化</td></tr><tr><td><strong>opt=calcfc</strong></td><td>计算力常数</td><td>优化开始时</td></tr><tr><td><strong>opt=readfc</strong></td><td>读取力常数</td><td>从 chk 继续</td></tr><tr><td><strong>opt=(maxstep=N)</strong></td><td>最大步数</td><td>限制步数</td></tr><tr><td><strong>opt=(Z-Matrix)</strong></td><td>Z-matrix 优化</td><td>有对称性</td></tr></tbody></table><h3>4. SCF 相关参数</h3><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead><tbody><tr><td><strong>scf=</strong></td><td>SCF 方法</td><td>scf=qc, scf=xqc</td></tr><tr><td><strong>maxcycle=</strong></td><td>最大迭代次数</td><td>scf=(maxcycle=200)</td></tr><tr><td><strong>conver=</strong></td><td>收敛标准</td><td>scf=(conver=8)</td></tr><tr><td><strong>vshift</strong></td><td>能级移动</td><td>scf=(vshift=100)</td></tr><tr><td><strong>diis</strong></td><td>DIIS 加速</td><td>scf=diis</td></tr></tbody></table><h3>5. 积分和格点参数</h3><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead><tbody><tr><td><strong>int=</strong></td><td>积分精度</td><td>int=ultrafine</td></tr><tr><td><strong>grid=</strong></td><td>DFT 格点</td><td>grid=ultrafine</td></tr><tr><td><strong>scrf=</strong></td><td>溶剂模型</td><td>scrf=(pcm,solvent=water)</td></tr></tbody></table><h4>积分精度选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td>fine</td><td>精细格点</td><td>常规计算</td></tr><tr><td>ultrafine</td><td>超精细格点</td><td>能量差计算</td></tr><tr><td>superfine</td><td>超级精细格点</td><td>高精度要求</td></tr></tbody></table><h3>6. 输出控制参数</h3><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>示例</th></tr></thead><tbody><tr><td><strong>pop=</strong></td><td>布居分析</td><td>pop=full, pop=nbo</td></tr><tr><td><strong>density=</strong></td><td>密度输出</td><td>density=current</td></tr><tr><td><strong>guess=</strong></td><td>初始猜测</td><td>guess=read, guess=mix</td></tr><tr><td><strong>geom=</strong></td><td>几何选项</td><td>geom=check, geom=allcheck</td></tr></tbody></table><h3>7. 常用组合模板</h3><h4>模板 1：常规优化+频率</h4>',30)),t("div",xh,[t("div",Nh,[s[11]||(s[11]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[12]||(s[12]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=mol.chk"),f(`
`),t("span",{class:"cm"},"%mem=16GB"),f(`
`),t("span",{class:"cm"},"%nproc=8"),f(`
`),t("span",{class:"cm"},"#p B3LYP/6-31G(d) opt freq")])],-1))]),s[24]||(s[24]=t("h4",null,"模板 2：高精度优化",-1)),t("div",qh,[t("div",Mh,[s[13]||(s[13]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=mol.chk"),f(`
`),t("span",{class:"cm"},"%mem=32GB"),f(`
`),t("span",{class:"cm"},"%nproc=16"),f(`
`),t("span",{class:"cm"},"#p M062X/6-311+G(2d,2p) opt=(tight,calcfc) freq int=ultrafine")])],-1))]),s[25]||(s[25]=t("h4",null,"模板 3：过渡态搜索",-1)),t("div",Dh,[t("div",Fh,[s[15]||(s[15]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=ts.chk"),f(`
`),t("span",{class:"cm"},"%mem=32GB"),f(`
`),t("span",{class:"cm"},"%nproc=16"),f(`
`),t("span",{class:"cm"},"#p wB97XD/def2-TZVP opt=(ts,calcfc,noeigen) freq")])],-1))]),s[26]||(s[26]=t("h4",null,"模板 4：TDDFT 激发态",-1)),t("div",Vh,[t("div",Gh,[s[17]||(s[17]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=tddft.chk"),f(`
`),t("span",{class:"cm"},"%mem=16GB"),f(`
`),t("span",{class:"cm"},"%nproc=8"),f(`
`),t("span",{class:"cm"},"#p B3LYP/6-31+G(d,p) td=(nstates=10) int=ultrafine")])],-1))]),s[27]||(s[27]=t("h4",null,"模板 5：溶剂中的优化",-1)),t("div",$h,[t("div",Bh,[s[19]||(s[19]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[20]||(s[20]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=solv.chk"),f(`
`),t("span",{class:"cm"},"%mem=16GB"),f(`
`),t("span",{class:"cm"},"%nproc=8"),f(`
`),t("span",{class:"cm"},"#p B3LYP/6-31+G(d,p) opt scrf=(pcm,solvent=water)")])],-1))]),s[28]||(s[28]=t("h4",null,"模板 6：高精度单点能",-1)),t("div",Lh,[t("div",Uh,[s[21]||(s[21]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[22]||(s[22]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"%chk=hight.chk"),f(`
`),t("span",{class:"cm"},"%mem=64GB"),f(`
`),t("span",{class:"cm"},"%nproc=32"),f(`
`),t("span",{class:"cm"},"#p CCSD(T)/cc-pVTZ")])],-1))]),s[29]||(s[29]=i('<h3>8. 参数选择建议</h3><div class="ib tip"><strong>推荐组合：</strong><ul><li><strong>有机分子常规计算：</strong>B3LYP/6-31G(d)</li><li><strong>精确计算：</strong>M06-2X/6-311+G(2d,2p)</li><li><strong>弱相互作用：</strong>ωB97X-D/def2-TZVP</li><li><strong>过渡金属：</strong>B3LYP/LanL2DZ 或 M06/SDD</li><li><strong>高精度基准：</strong>CCSD(T)/cc-pVTZ</li><li><strong>激发态：</strong>TDB3LYP/6-31+G(d,p)</li></ul></div><div class="ib warn"><strong>注意事项：</strong><ul><li>计算弱相互作用必须使用弥散函数（+）或色散修正（-D）</li><li>过渡金属需要使用赝势基组（LanL2DZ, SDD）</li><li>能量差计算建议使用 ultrafine 格点</li><li>大体系考虑使用 def2-SVP 等较小基组</li></ul></div>',3))])}const Hh=J(Oh,[["render",Kh]]),Wh={name:"GaussianVisualView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},jh={class:"sec active"},zh={class:"bread"},Yh={class:"cb"},Zh={class:"ch"},Xh={class:"cb"},Jh={class:"ch"},Qh={class:"cb"},_h={class:"ch"},s3={class:"cb"},n3={class:"ch"},t3={class:"cb"},a3={class:"ch"},l3={class:"cb"},p3={class:"ch"},e3={class:"cb"},o3={class:"ch"},d3={class:"cb"},r3={class:"ch"};function c3(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",jh,[t("div",zh,[w(d,{to:"/"},{default:T(()=>[...s[8]||(s[8]=[f("首页",-1)])]),_:1}),s[10]||(s[10]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[9]||(s[9]=[f("Gaussian 教程",-1)])]),_:1}),s[11]||(s[11]=f("/ ",-1)),s[12]||(s[12]=t("span",null,"可视化教程",-1))]),s[34]||(s[34]=i('<h2>Gaussian 结果可视化</h2><p>本节介绍如何使用各种工具可视化 Gaussian 的计算结果。</p><h3>1. 常用可视化工具</h3><table class="tb"><thead><tr><th>工具</th><th>类型</th><th>价格</th><th>主要功能</th></tr></thead><tbody><tr><td><strong>GaussView</strong></td><td>官方 GUI</td><td>付费</td><td>分子构建、结果查看</td></tr><tr><td><strong>Multiwfn</strong></td><td>波函数分析</td><td>免费</td><td>电子结构分析、绘图</td></tr><tr><td><strong>Avogadro</strong></td><td>分子编辑</td><td>免费</td><td>分子构建、可视化</td></tr><tr><td><strong>VMD</strong></td><td>分子动力学</td><td>免费</td><td>3D 可视化</td></tr><tr><td><strong>VESTA</strong></td><td>晶体结构</td><td>免费</td><td>周期性结构</td></tr><tr><td><strong>PyMOL</strong></td><td>分子图形</td><td>付费/免费</td><td>高质量图形</td></tr><tr><td><strong>Chemcraft</strong></td><td>Gaussian 专用</td><td>付费</td><td>Gaussian 结果分析</td></tr></tbody></table><h3>2. GaussView 使用</h3><h4>安装</h4><ul><li>随 Gaussian 一起安装，或单独购买</li><li>支持 Windows、Linux、macOS</li></ul><h4>打开输出文件</h4><ol><li>File → Open → 选择 .log 文件</li><li>自动识别计算结果</li><li>显示分子结构和结果</li></ol><h4>常用功能</h4><table class="tb"><thead><tr><th>功能</th><th>操作</th><th>说明</th></tr></thead><tbody><tr><td>查看结构</td><td>直接打开</td><td>显示 3D 分子</td></tr><tr><td>查看频率</td><td>Results → Vibrations</td><td>显示振动模式</td></tr><tr><td>查看轨道</td><td>Results → Surfaces</td><td>显示分子轨道</td></tr><tr><td>查看优化路径</td><td>Results → Optimization</td><td>显示优化过程</td></tr><tr><td>导出图片</td><td>File → Save Image</td><td>保存为图片</td></tr><tr><td>导出坐标</td><td>File → Save</td><td>保存为其他格式</td></tr></tbody></table><h3>3. Multiwfn 使用</h3><p>Multiwfn 是功能最强大的波函数分析工具，完全免费。</p><h4>安装</h4>',14)),t("div",Yh,[t("div",Zh,[s[13]||(s[13]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[14]||(s[14]=i(`<pre><code><span class="cm"># 下载 Multiwfn</span>
<span class="cm"># http://sobereva.com/multiwfn/</span>

<span class="cm"># 解压后设置环境变量</span>
<span class="kw">export</span> Multiwfnpath=/path/to/Multiwfn
<span class="kw">export</span> PATH=$Multiwfnpath:$PATH</code></pre>`,1))]),s[35]||(s[35]=i('<h4>常用功能</h4><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>查看分子</td><td>0 → 1</td><td>显示分子结构</td></tr><tr><td>绘制静电势</td><td>4 → 1</td><td>分子表面静电势</td></tr><tr><td>绘制电子密度</td><td>1 → 1</td><td>电子密度等值面</td></tr><tr><td>绘制轨道</td><td>2 → 1</td><td>分子轨道可视化</td></tr><tr><td>IR 光谱</td><td>10 → 1</td><td>红外光谱绘图</td></tr><tr><td>UV-Vis 光谱</td><td>10 → 3</td><td>紫外可见光谱</td></tr><tr><td>EDA 分析</td><td>7 → 1</td><td>能量分解分析</td></tr></tbody></table><h4>绘制 IR 光谱示例</h4>',3)),t("div",Xh,[t("div",Jh,[s[15]||(s[15]=t("span",{class:"la"},"Multiwfn",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[16]||(s[16]=i(`<pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 10 → Spectrum and related properties</span>
<span class="cm"># 1 → IR spectrum</span>
<span class="cm"># 设置展宽 (推荐 4 cm⁻¹)</span>
<span class="cm"># 生成 spectrum.txt 和 spectrum_curve.png</span></code></pre>`,1))]),s[36]||(s[36]=i("<h3>4. Avogadro 使用</h3><h4>安装</h4><ul><li>下载：https://avogadro.cc</li><li>支持 Windows、Linux、macOS</li><li>开源免费</li></ul><h4>打开 Gaussian 输出</h4><ol><li>File → Open → 选择 .log 文件</li><li>自动识别并显示结构</li></ol><h4>常用功能</h4><ul><li><strong>旋转/缩放</strong>：鼠标拖动/滚轮</li><li><strong>测量距离</strong>：Extensions → Measure → Distance</li><li><strong>测量角度</strong>：Extensions → Measure → Angle</li><li><strong>显示轨道</strong>：Extensions → Surfaces</li><li><strong>导出图片</strong>：File → Export → Image</li></ul><h3>5. VMD 使用</h3><h4>安装</h4><ul><li>下载：https://www.ks.uiuc.edu/Research/vmd/</li><li>免费注册后下载</li></ul><h4>打开 Gaussian 输出</h4>",11)),t("div",Qh,[t("div",_h,[s[17]||(s[17]=t("span",{class:"la"},"tcl",-1)),s[18]||(s[18]=t("span",{class:"fn"},"VMD 脚本",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[19]||(s[19]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 在 VMD 控制台中"),f(`
`),t("span",{class:"cm"},"# 加载 Gaussian 输出"),f(`
mol load gaussian output.log

`),t("span",{class:"cm"},"# 或通过菜单"),f(`
`),t("span",{class:"cm"},"# File → New Molecule → Browse → 选择 .log")])],-1))]),s[37]||(s[37]=i('<h4>常用显示设置</h4><table class="tb"><thead><tr><th>操作</th><th>路径</th><th>说明</th></tr></thead><tbody><tr><td>改变显示样式</td><td>Graphics → Representations</td><td>CPK, Licorice 等</td></tr><tr><td>改变颜色</td><td>Graphics → Colors</td><td>按元素、残基等</td></tr><tr><td>渲染图片</td><td>File → Render</td><td>生成高质量图片</td></tr></tbody></table><h3>6. Python 可视化</h3><h4>使用 cclib + py3Dmol</h4>',4)),t("div",s3,[t("div",n3,[s[20]||(s[20]=t("span",{class:"la"},"python",-1)),s[21]||(s[21]=t("span",{class:"fn"},"visualize.py",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[22]||(s[22]=i(`<pre><code><span class="kw">import</span> cclib
<span class="kw">import</span> py3Dmol
<span class="kw">from</span> rdkit <span class="kw">import</span> Chem
<span class="kw">from</span> rdkit.Chem <span class="kw">import</span> AllChem, Draw

<span class="cm"># 读取 Gaussian 输出</span>
data = cclib.io.ccopen(<span class="st">&quot;output.log&quot;</span>).parse()

<span class="cm"># 获取最终坐标</span>
coords = data.atomcoords[-<span class="nu">1</span>]
elements = data.atomnos

<span class="cm"># 创建 XYZ 格式</span>
xyz = <span class="st">f&quot;{len(elements)}\\n\\n&quot;</span>
<span class="kw">for</span> i, (elem, coord) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(elements, coords)):
    symbol = Chem.PeriodicTable.GetElementSymbol(elem)
    xyz += <span class="st">f&quot;{symbol}  {coord[0]:.6f}  {coord[1]:.6f}  {coord[2]:.6f}\\n&quot;</span>

<span class="cm"># 3D 可视化</span>
view = py3Dmol.view(width=<span class="nu">400</span>, height=<span class="nu">400</span>)
view.addModel(xyz, <span class="st">&quot;xyz&quot;</span>)
view.setStyle({<span class="st">&quot;stick&quot;</span>: {}})
view.zoomTo()
view.show()</code></pre>`,1))]),s[38]||(s[38]=t("h4",null,"使用 ASE + matplotlib",-1)),t("div",t3,[t("div",a3,[s[23]||(s[23]=t("span",{class:"la"},"python",-1)),s[24]||(s[24]=t("span",{class:"fn"},"plot_mol.py",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">&quot;output.log&quot;</span>)

<span class="cm"># 获取坐标</span>
positions = atoms.get_positions()
symbols = atoms.get_chemical_symbols()

<span class="cm"># 2D 投影绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">8</span>, <span class="nu">8</span>))

<span class="cm"># 绘制原子</span>
<span class="kw">for</span> i, (pos, sym) <span class="kw">in</span> <span class="fn2">enumerate</span>(<span class="fn2">zip</span>(positions, symbols)):
    ax.plot(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], <span class="st">&#39;o&#39;</span>, markersize=<span class="nu">20</span>)
    ax.text(pos[<span class="nu">0</span>], pos[<span class="nu">1</span>], sym, ha=<span class="st">&#39;center&#39;</span>, va=<span class="st">&#39;center&#39;</span>)

ax.set_aspect(<span class="st">&#39;equal&#39;</span>)
ax.set_xlabel(<span class="st">&#39;X (Å)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Y (Å)&#39;</span>)
plt.savefig(<span class="st">&#39;molecule_2d.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[39]||(s[39]=t("h3",null,"7. 光谱可视化",-1)),s[40]||(s[40]=t("h4",null,"IR 光谱绘图",-1)),t("div",l3,[t("div",p3,[s[26]||(s[26]=t("span",{class:"la"},"python",-1)),s[27]||(s[27]=t("span",{class:"fn"},"plot_ir.py",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[28]||(s[28]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_ir_spectrum</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 Gaussian IR 光谱&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取频率和强度</span>
    freqs = re.findall(<span class="st">r&#39;Frequencies\\s+--\\s+(.*)&#39;</span>, content)
    intens = re.findall(<span class="st">r&#39;IR Inten\\s+--\\s+(.*)&#39;</span>, content)
    
    freq_list = [<span class="fn2">float</span>(f) <span class="kw">for</span> line <span class="kw">in</span> freqs <span class="kw">for</span> f <span class="kw">in</span> line.split()]
    intens_list = [<span class="fn2">float</span>(i) <span class="kw">for</span> line <span class="kw">in</span> intens <span class="kw">for</span> i <span class="kw">in</span> line.split()]
    
    <span class="kw">return</span> freq_list, intens_list

<span class="cm"># 读取数据</span>
freqs, intens = <span class="fn2">read_ir_spectrum</span>(<span class="st">&quot;output.log&quot;</span>)

<span class="cm"># 生成平滑曲线</span>
x = np.linspace(<span class="nu">0</span>, <span class="nu">4000</span>, <span class="nu">4000</span>)
y = np.zeros_like(x)

<span class="kw">for</span> freq, inten <span class="kw">in</span> <span class="fn2">zip</span>(freqs, intens):
    <span class="cm"># Lorentzian 展宽</span>
    gamma = <span class="nu">4</span>  <span class="cm"># cm⁻¹</span>
    y += inten * gamma**<span class="nu">2</span> / ((x - freq)**<span class="nu">2</span> + gamma**<span class="nu">2</span>)

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">10</span>, <span class="nu">6</span>))
ax.plot(x, y, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">&#39;Wavenumber (cm⁻¹)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Transmittance (a.u.)&#39;</span>)
ax.set_xlim(<span class="nu">4000</span>, <span class="nu">0</span>)  <span class="cm"># IR 通常从右到左</span>
ax.set_title(<span class="st">&#39;IR Spectrum&#39;</span>)
plt.savefig(<span class="st">&#39;ir_spectrum.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[41]||(s[41]=t("h4",null,"UV-Vis 光谱绘图",-1)),t("div",e3,[t("div",o3,[s[29]||(s[29]=t("span",{class:"la"},"python",-1)),s[30]||(s[30]=t("span",{class:"fn"},"plot_uvvis.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[31]||(s[31]=i(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
<span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt
<span class="kw">import</span> re

<span class="kw">def</span> <span class="fn2">read_tddft</span>(filename):
    <span class="st">&quot;&quot;&quot;读取 TDDFT 结果&quot;&quot;&quot;</span>
    <span class="kw">with</span> <span class="fn2">open</span>(filename, <span class="st">&#39;r&#39;</span>) <span class="kw">as</span> f:
        content = f.read()
    
    <span class="cm"># 提取激发能和振子强度</span>
    excitations = re.findall(
        <span class="st">r&#39;Excited State\\s+\\d+:\\s+.*?(\\d+\\.\\d+) eV\\s+.*?f=(\\d+\\.\\d+)&#39;</span>,
        content
    )
    
    energies = [<span class="fn2">float</span>(e) <span class="kw">for</span> e, _ <span class="kw">in</span> excitations]
    osc_strengths = [<span class="fn2">float</span>(f) <span class="kw">for</span> _, f <span class="kw">in</span> excitations]
    
    <span class="kw">return</span> energies, osc_strengths

<span class="cm"># 读取数据</span>
energies, osc = <span class="fn2">read_tddft</span>(<span class="st">&quot;output.log&quot;</span>)

<span class="cm"># 转换为波长</span>
wavelengths = [<span class="nu">1240</span> / e <span class="kw">for</span> e <span class="kw">in</span> energies]  <span class="cm"># nm</span>

<span class="cm"># 生成平滑光谱</span>
x = np.linspace(<span class="nu">200</span>, <span class="nu">800</span>, <span class="nu">600</span>)
y = np.zeros_like(x)

<span class="kw">for</span> wl, osc_str <span class="kw">in</span> <span class="fn2">zip</span>(wavelengths, osc):
    <span class="cm"># Gaussian 展宽</span>
    sigma = <span class="nu">20</span>  <span class="cm"># nm</span>
    y += osc_str * np.exp(-<span class="nu">0.5</span> * ((x - wl) / sigma)**<span class="nu">2</span>)

<span class="cm"># 绘图</span>
fig, ax = plt.subplots(figsize=(<span class="nu">10</span>, <span class="nu">6</span>))
ax.plot(x, y, <span class="st">&#39;b-&#39;</span>, linewidth=<span class="nu">1.5</span>)
ax.set_xlabel(<span class="st">&#39;Wavelength (nm)&#39;</span>)
ax.set_ylabel(<span class="st">&#39;Oscillator Strength (a.u.)&#39;</span>)
ax.set_title(<span class="st">&#39;UV-Vis Spectrum&#39;</span>)

<span class="cm"># 标记峰值</span>
<span class="kw">for</span> wl, osc_str <span class="kw">in</span> <span class="fn2">zip</span>(wavelengths, osc):
    ax.axvline(x=wl, color=<span class="st">&#39;r&#39;</span>, linestyle=<span class="st">&#39;--&#39;</span>, alpha=<span class="nu">0.5</span>)

plt.savefig(<span class="st">&#39;uvvis_spectrum.png&#39;</span>, dpi=<span class="nu">150</span>)
plt.show()</code></pre>`,1))]),s[42]||(s[42]=t("h3",null,"8. 轨道可视化",-1)),s[43]||(s[43]=t("h4",null,"使用 Multiwfn 生成轨道立方文件",-1)),t("div",d3,[t("div",r3,[s[32]||(s[32]=t("span",{class:"la"},"Multiwfn",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[33]||(s[33]=i(`<pre><code><span class="cm"># 启动 Multiwfn</span>
Multiwfn output.log

<span class="cm"># 选择功能</span>
<span class="cm"># 2 → Output and plot specific molecular orbitals</span>
<span class="cm"># 输入轨道编号 (如 HOMO=-1, LUMO=1)</span>
<span class="cm"># 生成 .cube 文件</span>

<span class="cm"># 用 VESTA 或 VMD 打开 .cube 文件查看</span></code></pre>`,1))]),s[44]||(s[44]=i('<h4>使用 GaussView 查看轨道</h4><ol><li>打开 .log 文件</li><li>Results → Surfaces</li><li>选择 &quot;MOs&quot; 标签</li><li>选择要查看的轨道</li><li>点击 &quot;Surface Actions&quot; → &quot;New Surface&quot;</li></ol><h3>9. 导出高质量图片</h3><div class="ib tip"><strong>建议：</strong><ul><li><strong>分辨率：</strong>至少 300 dpi，论文用 600 dpi</li><li><strong>格式：</strong>PNG（通用）、PDF（矢量）、EPS（论文）</li><li><strong>背景：</strong>白色背景更清晰</li><li><strong>视角：</strong>展示分子主要特征</li></ul></div><h3>10. 工具选择建议</h3><table class="tb"><thead><tr><th>任务</th><th>推荐工具</th><th>说明</th></tr></thead><tbody><tr><td>快速查看结构</td><td>Avogadro</td><td>免费、易用</td></tr><tr><td>波函数分析</td><td>Multiwfn</td><td>功能强大、免费</td></tr><tr><td>高质量图片</td><td>GaussView / PyMOL</td><td>专业渲染</td></tr><tr><td>光谱绘图</td><td>Python / Origin</td><td>自定义程度高</td></tr><tr><td>轨道可视化</td><td>GaussView / VMD</td><td>交互性好</td></tr></tbody></table>',6))])}const i3=J(Wh,[["render",c3]]),u3={name:"GaussianFAQView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},f3={class:"sec active"},m3={class:"bread"},b3={class:"ec open"},g3={class:"ec-b",style:{display:"block"}},v3={class:"cb"},h3={class:"ch"},y3={class:"ec open"},k3={class:"ec-b",style:{display:"block"}},C3={class:"cb"},w3={class:"ch"},S3={class:"ec open"},A3={class:"ec-b",style:{display:"block"}},E3={class:"cb"},T3={class:"ch"},R3={class:"ec open"},O3={class:"ec-b",style:{display:"block"}},P3={class:"cb"},I3={class:"ch"},x3={class:"ec open"},N3={class:"ec-b",style:{display:"block"}},q3={class:"cb"},M3={class:"ch"},D3={class:"ec open"},F3={class:"ec-b",style:{display:"block"}},V3={class:"cb"},G3={class:"ch"},$3={class:"ec open"},B3={class:"ec-b",style:{display:"block"}},L3={class:"cb"},U3={class:"ch"},K3={class:"ec open"},H3={class:"ec-b",style:{display:"block"}},W3={class:"cb"},j3={class:"ch"},z3={class:"ec open"},Y3={class:"ec-b",style:{display:"block"}},Z3={class:"cb"},X3={class:"ch"},J3={class:"ec open"},Q3={class:"ec-b",style:{display:"block"}},_3={class:"cb"},sy={class:"ch"},ny={class:"cb"},ty={class:"ch"};function ay(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",f3,[t("div",m3,[w(d,{to:"/"},{default:T(()=>[...s[11]||(s[11]=[f("首页",-1)])]),_:1}),s[13]||(s[13]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[12]||(s[12]=[f("Gaussian 教程",-1)])]),_:1}),s[14]||(s[14]=f("/ ",-1)),s[15]||(s[15]=t("span",null,"常见问题",-1))]),s[75]||(s[75]=t("h2",null,"Gaussian 常见问题",-1)),s[76]||(s[76]=t("p",null,"本节汇总 Gaussian 使用过程中的常见问题和解决方法。",-1)),s[77]||(s[77]=t("h3",null,"1. 计算不收敛",-1)),t("div",b3,[s[23]||(s[23]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：SCF 不收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",g3,[s[18]||(s[18]=t("h4",null,"症状",-1)),s[19]||(s[19]=t("div",{class:"esym"},"SCF has not converged after 128 cycles",-1)),s[20]||(s[20]=t("h4",null,"原因",-1)),s[21]||(s[21]=t("ul",null,[t("li",null,"初始猜测不好"),t("li",null,"体系本身难以收敛"),t("li",null,"泛函/基组选择不当")],-1)),s[22]||(s[22]=t("h4",null,"解决方案",-1)),t("div",v3,[t("div",h3,[s[16]||(s[16]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[17]||(s[17]=i(`<pre><code><span class="cm"># 方案 1：增加迭代次数</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(maxcycle=300)</span>

<span class="cm"># 方案 2：使用更稳定的 SCF 方法</span>
<span class="cm">#p B3LYP/6-31G(d) scf=xqc</span>

<span class="cm"># 方案 3：使用能级移动</span>
<span class="cm">#p B3LYP/6-31G(d) scf=(vshift=100)</span>

<span class="cm"># 方案 4：从检查点继续</span>
<span class="cm">#p B3LYP/6-31G(d) guess=read</span>

<span class="cm"># 方案 5：使用 Fermi 展宽</span>
<span class="cm">#p B3LYP/6-31G(d) scf=fermi</span></code></pre>`,1))])])]),t("div",y3,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：优化不收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",k3,[s[26]||(s[26]=t("h4",null,"症状",-1)),s[27]||(s[27]=t("div",{class:"esym"},"Optimization did not converge after 100 steps",-1)),s[28]||(s[28]=t("h4",null,"原因",-1)),s[29]||(s[29]=t("ul",null,[t("li",null,"初始结构太差"),t("li",null,"势能面太复杂"),t("li",null,"步长不合适")],-1)),s[30]||(s[30]=t("h4",null,"解决方案",-1)),t("div",C3,[t("div",w3,[s[24]||(s[24]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[25]||(s[25]=i(`<pre><code><span class="cm"># 方案 1：增加优化步数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(maxstep=200)</span>

<span class="cm"># 方案 2：使用更宽松的收敛</span>
<span class="cm">#p B3LYP/6-31G(d) opt=loose</span>

<span class="cm"># 方案 3：计算初始力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=calcfc</span>

<span class="cm"># 方案 4：从检查点读取力常数</span>
<span class="cm">#p B3LYP/6-31G(d) opt=readfc</span>

<span class="cm"># 方案 5：先用小基组优化，再用大基组</span>
<span class="cm">#p B3LYP/3-21G opt  (第一步)</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read  (第二步)</span></code></pre>`,1))])])]),s[78]||(s[78]=t("h3",null,"2. 内存和磁盘问题",-1)),t("div",S3,[s[37]||(s[37]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：内存不足"),t("span",{class:"es scm"},"常见")],-1)),t("div",A3,[s[34]||(s[34]=t("h4",null,"症状",-1)),s[35]||(s[35]=t("div",{class:"esym"},"Insufficient memory for direct SCF",-1)),s[36]||(s[36]=t("h4",null,"解决方案",-1)),t("div",E3,[t("div",T3,[s[32]||(s[32]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[33]||(s[33]=i(`<pre><code><span class="cm"># 增加内存</span>
<span class="cm">%mem=64GB</span>

<span class="cm"># 或使用积分存储</span>
<span class="cm">#p B3LYP/6-31G(d) scf=conventional</span>

<span class="cm"># 或使用较小基组</span>
<span class="cm">#p B3LYP/6-31G(d)  →  #p B3LYP/3-21G</span></code></pre>`,1))])])]),s[79]||(s[79]=i('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：磁盘空间不足</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><div class="esym">No space left on device</div><h4>解决方案</h4><ol><li>清理临时文件：<code>rm -rf /tmp/gaussian/*</code></li><li>使用更大空间的目录：<code>%scr=/big_disk</code></li><li>删除旧的 .chk 文件</li><li>使用 <code>%kjob=L302</code> 完成后删除 chk</li></ol></div></div><h3>3. 结构问题</h3>',2)),t("div",R3,[s[41]||(s[41]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：有虚频"),t("span",{class:"es scm"},"常见")],-1)),t("div",O3,[s[40]||(s[40]=i('<h4>症状</h4><div class="esym">Frequencies: -123.45 678.90 ...</div><h4>原因</h4><ul><li>结构是过渡态（只有一个虚频，正常）</li><li>结构未完全优化</li><li>对称性限制导致</li></ul><h4>解决方案</h4><ol><li>检查虚频对应的振动模式</li><li>如果是高阶鞍点，沿虚频方向扰动结构</li><li>使用更严格的优化：<code>opt=tight</code></li><li>移除对称性限制</li></ol>',6)),t("div",P3,[t("div",I3,[s[38]||(s[38]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[39]||(s[39]=i(`<pre><code><span class="cm"># 沿虚频方向扰动结构</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write

atoms = read(<span class="st">&#39;output.log&#39;</span>)
<span class="cm"># 手动扰动原子位置</span>
positions = atoms.get_positions()
positions[<span class="nu">0</span>] += [<span class="nu">0.01</span>, <span class="nu">0</span>, <span class="nu">0</span>]  <span class="cm"># 微调第一个原子</span>
atoms.set_positions(positions)
write(<span class="st">&#39;distorted.gjf&#39;</span>, atoms)</code></pre>`,1))])])]),t("div",x3,[s[47]||(s[47]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 6：线性分子优化失败"),t("span",{class:"es scm"},"常见")],-1)),t("div",N3,[s[44]||(s[44]=t("h4",null,"症状",-1)),s[45]||(s[45]=t("p",null,"线性分子（如 CO₂, HCN）优化时结构变形。",-1)),s[46]||(s[46]=t("h4",null,"解决方案",-1)),t("div",q3,[t("div",M3,[s[42]||(s[42]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[43]||(s[43]=i(`<pre><code><span class="cm"># 使用 Z-matrix 并指定对称性</span>
<span class="cm">#p B3LYP/6-31G(d) opt=(Z-Matrix)</span>

<span class="nu">0 1</span>
<span class="vr">C</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>
<span class="vr">O</span>  <span class="nu">1</span>  <span class="nu">rCO</span>  <span class="nu">2</span>  <span class="nu">180.0</span>

<span class="nu">rCO=1.16</span></code></pre>`,1))])])]),s[80]||(s[80]=t("h3",null,"4. 电荷和自旋问题",-1)),t("div",D3,[s[52]||(s[52]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 7：电荷/自旋设置错误"),t("span",{class:"es scm"},"常见")],-1)),t("div",F3,[s[51]||(s[51]=i('<h4>症状</h4><ul><li>能量异常高</li><li>收敛困难</li><li>结果不合理</li></ul><h4>正确设置方法</h4><table class="tb"><thead><tr><th>体系</th><th>电荷</th><th>自旋</th><th>示例</th></tr></thead><tbody><tr><td>闭壳层分子</td><td>0</td><td>1</td><td>H₂O, CH₄</td></tr><tr><td>开壳层单重态</td><td>0</td><td>1</td><td>卡宾</td></tr><tr><td>开壳层双自由基</td><td>0</td><td>3</td><td>O₂</td></tr><tr><td>阳离子</td><td>+1</td><td>1 或 2</td><td>CH₃⁺</td></tr><tr><td>阴离子</td><td>-1</td><td>1 或 2</td><td>CH₃⁻</td></tr></tbody></table>',4)),t("div",V3,[t("div",G3,[s[48]||(s[48]=t("span",{class:"la"},"gjf",-1)),s[49]||(s[49]=t("span",{class:"fn"},"正确格式",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[50]||(s[50]=i(`<pre><code><span class="cm"># 电荷 自旋</span>
<span class="nu">0 1</span>      <span class="cm">; 中性闭壳层</span>
<span class="nu">1 2</span>      <span class="cm">; +1 阳离子，双态</span>
<span class="nu">-1 1</span>     <span class="cm">; -1 阴离子，单态</span>
<span class="nu">0 3</span>      <span class="cm">; 中性三重态</span></code></pre>`,1))])])]),s[81]||(s[81]=t("h3",null,"5. 过渡态问题",-1)),t("div",$3,[s[57]||(s[57]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 8：找不到过渡态"),t("span",{class:"es sc"},"高频")],-1)),t("div",B3,[s[56]||(s[56]=i("<h4>原因</h4><ul><li>初始猜测太差</li><li>势能面太复杂</li><li>反应不是基元反应</li></ul><h4>解决方案</h4><ol><li><strong>改进初始猜测</strong>：手动构建过渡态结构</li><li><strong>使用 QST2/QST3</strong>：提供反应物和产物</li><li><strong>使用 GSM</strong>：Growing String Method</li><li><strong>扫描反应坐标</strong>：找到近似过渡态</li></ol>",4)),t("div",L3,[t("div",U3,[s[53]||(s[53]=t("span",{class:"la"},"gjf",-1)),s[54]||(s[54]=t("span",{class:"fn"},"QST2 示例",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[55]||(s[55]=i(`<pre><code><span class="cm">#p B3LYP/6-31G(d) opt=(qst2,calcfc)</span>

<span class="vr">Reactant</span>

<span class="nu">0 1</span>
<span class="cm">[反应物坐标]</span>

<span class="vr">Product</span>

<span class="nu">0 1</span>
<span class="cm">[产物坐标]</span></code></pre>`,1))])])]),s[82]||(s[82]=t("h3",null,"6. TDDFT 问题",-1)),t("div",K3,[s[61]||(s[61]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 9：TDDFT 激发态不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",H3,[s[60]||(s[60]=i('<h4>原因</h4><ul><li>泛函选择不当</li><li>基组太小</li><li>计算的激发态数不够</li></ul><h4>解决方案</h4><table class="tb"><thead><tr><th>问题</th><th>解决方案</th></tr></thead><tbody><tr><td>UV-Vis 偏差大</td><td>使用 CAM-B3LYP 或 ωB97X-D</td></tr><tr><td>电荷转移激发不准</td><td>使用范围分离泛函</td></tr><tr><td>缺少数值</td><td>增加 nstates</td></tr><tr><td>需要三重态</td><td>添加 triplets 关键词</td></tr></tbody></table>',4)),t("div",W3,[t("div",j3,[s[58]||(s[58]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[59]||(s[59]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 推荐 TDDFT 设置"),f(`
`),t("span",{class:"cm"},"#p CAM-B3LYP/6-31+G(d,p) td=(nstates=20,triplets)")])],-1))])])]),s[83]||(s[83]=t("h3",null,"7. 频率计算问题",-1)),t("div",z3,[s[65]||(s[65]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 10：频率计算结果异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Y3,[s[64]||(s[64]=i("<h4>症状</h4><ul><li>频率值异常大或小</li><li>热化学量不合理</li><li>IR 强度为零</li></ul><h4>解决方案</h4><ol><li>确保在优化后的结构上计算频率</li><li>使用相同的泛函和基组</li><li>检查是否有虚频</li><li>对于非谐性，使用 freq=anharm</li></ol>",4)),t("div",Z3,[t("div",X3,[s[62]||(s[62]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[63]||(s[63]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 优化+频率一起计算（推荐）"),f(`
`),t("span",{class:"cm"},"#p B3LYP/6-31G(d) opt freq"),f(`

`),t("span",{class:"cm"},"# 非谐性频率"),f(`
`),t("span",{class:"cm"},"#p B3LYP/6-31G(d) freq=anharm")])],-1))])])]),s[84]||(s[84]=t("h3",null,"8. 输出文件问题",-1)),t("div",J3,[s[71]||(s[71]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟢"),t("span",{class:"et"},"问题 11：输出文件为空或截断"),t("span",{class:"es smn"},"少见")],-1)),t("div",Q3,[s[68]||(s[68]=t("h4",null,"原因",-1)),s[69]||(s[69]=t("ul",null,[t("li",null,"计算被中断（系统崩溃、时间限制）"),t("li",null,"磁盘空间不足"),t("li",null,"内存错误")],-1)),s[70]||(s[70]=t("h4",null,"恢复方法",-1)),t("div",_3,[t("div",sy,[s[66]||(s[66]=t("span",{class:"la"},"gjf",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[67]||(s[67]=i(`<pre><code><span class="cm"># 从检查点恢复</span>
<span class="cm">%chk=old.chk</span>
<span class="cm">#p B3LYP/6-31G(d) opt guess=read geom=check</span>

<span class="vr">Restart from checkpoint</span>

<span class="nu">0 1</span></code></pre>`,1))])])]),s[85]||(s[85]=t("h3",null,"9. 快速诊断方法",-1)),t("div",ny,[t("div",ty,[s[72]||(s[72]=t("span",{class:"la"},"bash",-1)),s[73]||(s[73]=t("span",{class:"fn"},"诊断脚本",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...p)=>l.copy&&l.copy(...p))},"复制")]),s[74]||(s[74]=i(`<pre><code><span class="kw">#!/bin/bash</span>
<span class="cm"># gaussian_diagnose.sh</span>

<span class="fn2">echo</span> <span class="st">&quot;=== Gaussian 计算诊断 ===&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 检查是否正常结束</span>
<span class="fn2">echo</span> <span class="st">&quot;[1] 计算状态&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;Normal termination&quot;</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ 正常结束&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ 异常结束&quot;</span>
    <span class="fn2">echo</span> <span class="st">&quot;  错误信息:&quot;</span>
    <span class="fn2">grep</span> -i <span class="st">&quot;error&quot;</span> output.log | <span class="fn2">head</span> -5
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 检查 SCF 收敛</span>
<span class="fn2">echo</span> <span class="st">&quot;[2] SCF 收敛&quot;</span>
<span class="kw">if</span> <span class="fn2">grep</span> -q <span class="st">&quot;SCF has not converged&quot;</span> output.log; <span class="kw">then</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✗ SCF 未收敛&quot;</span>
<span class="kw">else</span>
    <span class="fn2">echo</span> <span class="st">&quot;  ✓ SCF 收敛&quot;</span>
<span class="kw">fi</span>
<span class="fn2">echo</span>

<span class="cm"># 提取能量</span>
<span class="fn2">echo</span> <span class="st">&quot;[3] 总能量&quot;</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1
<span class="fn2">echo</span>

<span class="cm"># 检查虚频</span>
<span class="fn2">echo</span> <span class="st">&quot;[4] 频率检查&quot;</span>
<span class="fn2">freqs</span>=$(<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{for(i=3;i&lt;=NF;i++) print $i}&#39;</span>)
<span class="fn2">imaginary</span>=$(<span class="fn2">echo</span> <span class="st">&quot;$freqs&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;$1 &lt; 0 {count++} END {print count+0}&#39;</span>)
<span class="fn2">echo</span> <span class="st">&quot;  虚频数: $imaginary&quot;</span>
<span class="fn2">echo</span>

<span class="cm"># 计算时间</span>
<span class="fn2">echo</span> <span class="st">&quot;[5] 计算时间&quot;</span>
<span class="fn2">grep</span> <span class="st">&quot;Job cpu time&quot;</span> output.log</code></pre>`,1))]),s[86]||(s[86]=i('<h3>10. 问题汇总表</h3><table class="tb"><thead><tr><th>问题</th><th>关键词</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>not converged</td><td>scf=xqc, scf=fermi</td></tr><tr><td>优化不收敛</td><td>did not converge</td><td>opt=tight, opt=calcfc</td></tr><tr><td>内存不足</td><td>Insufficient memory</td><td>增加 %mem</td></tr><tr><td>有虚频</td><td>Negative freq</td><td>重新优化</td></tr><tr><td>过渡态找不到</td><td>No TS found</td><td>改进初始猜测</td></tr><tr><td>TDDFT 错误</td><td>Excitation</td><td>使用范围分离泛函</td></tr></tbody></table><div class="ib tip"><strong>调试建议：</strong><ul><li>先用小基组/低精度测试，确认思路正确</li><li>检查输入文件格式，特别是空行和电荷自旋</li><li>查看输出文件最后几行，通常有错误提示</li><li>搜索 Gaussian 官方论坛或邮件列表</li></ul></div>',3))])}const ly=J(u3,[["render",ay]]),py={name:"GaussianGlossaryView"},ey={class:"sec active"},oy={class:"bread"};function dy(n,s,a,e,o,l){const d=X("router-link");return D(),F("div",ey,[t("div",oy,[w(d,{to:"/"},{default:T(()=>[...s[0]||(s[0]=[f("首页",-1)])]),_:1}),s[2]||(s[2]=f("/ ",-1)),w(d,{to:"/gaussian"},{default:T(()=>[...s[1]||(s[1]=[f("Gaussian 教程",-1)])]),_:1}),s[3]||(s[3]=f("/ ",-1)),s[4]||(s[4]=t("span",null,"名词解释",-1))]),s[5]||(s[5]=i('<h2>Gaussian 名词解释</h2><p>本节解释 Gaussian 计算中常用的术语和概念。</p><h3>1. 基本概念</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>哈密顿量</strong></td><td>Hamiltonian</td><td>描述体系总能量的算符</td></tr><tr><td><strong>波函数</strong></td><td>Wavefunction</td><td>描述电子状态的函数 Ψ</td></tr><tr><td><strong>电子密度</strong></td><td>Electron density</td><td>电子在空间中的分布 ρ(r)</td></tr><tr><td><strong>轨道</strong></td><td>Orbital</td><td>单电子波函数 φ</td></tr><tr><td><strong>本征值</strong></td><td>Eigenvalue</td><td>轨道能量 ε</td></tr><tr><td><strong>基态</strong></td><td>Ground state</td><td>能量最低的状态</td></tr><tr><td><strong>激发态</strong></td><td>Excited state</td><td>能量高于基态的状态</td></tr></tbody></table><h3>2. 计算方法</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>HF</strong></td><td>Hartree-Fock</td><td>平均场近似，忽略电子相关</td></tr><tr><td><strong>DFT</strong></td><td>Density Functional Theory</td><td>密度泛函理论，用电子密度描述体系</td></tr><tr><td><strong>MP2</strong></td><td>Møller-Plesset 2nd order</td><td>二阶微扰理论，包含电子相关</td></tr><tr><td><strong>CCSD</strong></td><td>Coupled Cluster Singles Doubles</td><td>耦合簇方法，高精度</td></tr><tr><td><strong>CCSD(T)</strong></td><td>CCSD with perturbative triples</td><td>&quot;金标准&quot;方法</td></tr><tr><td><strong>TDDFT</strong></td><td>Time-Dependent DFT</td><td>含时密度泛函，计算激发态</td></tr><tr><td><strong>CASSCF</strong></td><td>Complete Active Space SCF</td><td>多参考态方法</td></tr></tbody></table><h3>3. 泛函类型</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>LDA</strong></td><td>Local Density Approximation</td><td>局域密度近似，最简单</td></tr><tr><td><strong>GGA</strong></td><td>Generalized Gradient Approximation</td><td>广义梯度近似，包含梯度</td></tr><tr><td><strong>杂化泛函</strong></td><td>Hybrid functional</td><td>混合 HF 和 DFT 交换</td></tr><tr><td><strong>范围分离</strong></td><td>Range-separated</td><td>长短程使用不同泛函</td></tr><tr><td><strong>双杂化</strong></td><td>Double hybrid</td><td>包含 MP2 相关能</td></tr><tr><td><strong>色散修正</strong></td><td>Dispersion correction</td><td>描述范德华作用</td></tr></tbody></table><h3>4. 基组相关</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>基组</strong></td><td>Basis set</td><td>展开分子轨道的函数集合</td></tr><tr><td><strong>STO</strong></td><td>Slater Type Orbital</td><td>斯莱特型轨道</td></tr><tr><td><strong>GTO</strong></td><td>Gaussian Type Orbital</td><td>高斯型轨道</td></tr><tr><td><strong>极化函数</strong></td><td>Polarization functions</td><td>允许轨道变形的函数（d, f）</td></tr><tr><td><strong>弥散函数</strong></td><td>Diffuse functions</td><td>描述远离核的电子（+）</td></tr><tr><td><strong>赝势</strong></td><td>Pseudopotential</td><td>替代内层电子的势</td></tr><tr><td><strong>全电子</strong></td><td>All-electron</td><td>包含所有电子的计算</td></tr></tbody></table><h3>5. 结构优化</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>势能面</strong></td><td>Potential Energy Surface (PES)</td><td>能量随几何的变化</td></tr><tr><td><strong>极小值</strong></td><td>Minimum</td><td>稳定的分子结构</td></tr><tr><td><strong>过渡态</strong></td><td>Transition State (TS)</td><td>势能面的鞍点</td></tr><tr><td><strong>虚频</strong></td><td>Imaginary frequency</td><td>负频率，表示鞍点</td></tr><tr><td><strong>力常数</strong></td><td>Force constant</td><td>二阶导数，描述势能面曲率</td></tr><tr><td><strong>Hessian</strong></td><td>Hessian matrix</td><td>能量对坐标的二阶导数矩阵</td></tr><tr><td><strong>梯度</strong></td><td>Gradient</td><td>能量对坐标的一阶导数（力）</td></tr></tbody></table><h3>6. 频率和光谱</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>振动频率</strong></td><td>Vibrational frequency</td><td>分子振动的频率（cm⁻¹）</td></tr><tr><td><strong>零点能</strong></td><td>Zero-Point Energy (ZPE)</td><td>振动基态能量</td></tr><tr><td><strong>IR 强度</strong></td><td>IR intensity</td><td>红外吸收强度</td></tr><tr><td><strong>拉曼活性</strong></td><td>Raman activity</td><td>拉曼散射活性</td></tr><tr><td><strong>振子强度</strong></td><td>Oscillator strength</td><td>电子跃迁强度</td></tr><tr><td><strong>选择定则</strong></td><td>Selection rules</td><td>允许跃迁的条件</td></tr></tbody></table><h3>7. 热力学</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>电子能</strong></td><td>Electronic energy</td><td>SCF 计算的能量</td></tr><tr><td><strong>焓</strong></td><td>Enthalpy (H)</td><td>H = E + PV</td></tr><tr><td><strong>吉布斯自由能</strong></td><td>Gibbs free energy (G)</td><td>G = H - TS</td></tr><tr><td><strong>熵</strong></td><td>Entropy (S)</td><td>体系混乱度</td></tr><tr><td><strong>热容</strong></td><td>Heat capacity (Cv, Cp)</td><td>温度变化所需能量</td></tr><tr><td><strong>热校正</strong></td><td>Thermal correction</td><td>温度对能量的贡献</td></tr></tbody></table><h3>8. 电子结构分析</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>HOMO</strong></td><td>Highest Occupied MO</td><td>最高占据分子轨道</td></tr><tr><td><strong>LUMO</strong></td><td>Lowest Unoccupied MO</td><td>最低未占据分子轨道</td></tr><tr><td><strong>能隙</strong></td><td>Energy gap</td><td>HOMO-LUMO 能量差</td></tr><tr><td><strong>电离势</strong></td><td>Ionization potential (IP)</td><td>移除电子所需能量</td></tr><tr><td><strong>电子亲和</strong></td><td>Electron affinity (EA)</td><td>获得电子释放能量</td></tr><tr><td><strong>电负性</strong></td><td>Electronegativity</td><td>吸引电子能力</td></tr><tr><td><strong>硬度</strong></td><td>Hardness</td><td>抵抗电荷转移能力</td></tr></tbody></table><h3>9. 布居分析</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>Mulliken 电荷</strong></td><td>Mulliken charge</td><td>基于重叠积分的电荷分配</td></tr><tr><td><strong>NBO 电荷</strong></td><td>Natural Bond Orbital charge</td><td>自然键轨道电荷</td></tr><tr><td><strong>ESP 电荷</strong></td><td>Electrostatic potential charge</td><td>拟合静电势的电荷</td></tr><tr><td><strong>Hirshfeld 电荷</strong></td><td>Hirshfeld charge</td><td>基于原子密度的电荷</td></tr><tr><td><strong>键级</strong></td><td>Bond order</td><td>化学键强度的度量</td></tr><tr><td><strong>偶极矩</strong></td><td>Dipole moment</td><td>电荷分布的不对称性</td></tr></tbody></table><h3>10. 过渡态和反应</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>IRC</strong></td><td>Intrinsic Reaction Coordinate</td><td>内禀反应坐标</td></tr><tr><td><strong>活化能</strong></td><td>Activation energy</td><td>反应势垒</td></tr><tr><td><strong>反应热</strong></td><td>Reaction enthalpy</td><td>反应焓变</td></tr><tr><td><strong>反应路径</strong></td><td>Reaction path</td><td>从反应物到产物的路径</td></tr><tr><td><strong>鞍点</strong></td><td>Saddle point</td><td>势能面的鞍点（过渡态）</td></tr><tr><td><strong>最小能量路径</strong></td><td>Minimum Energy Path (MEP)</td><td>连接反应物和产物的最低能量路径</td></tr></tbody></table><h3>11. SCF 相关</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>SCF</strong></td><td>Self-Consistent Field</td><td>自洽场迭代</td></tr><tr><td><strong>DIIS</strong></td><td>Direct Inversion in Iterative Subspace</td><td>加速收敛的方法</td></tr><tr><td><strong>收敛</strong></td><td>Convergence</td><td>迭代达到稳定</td></tr><tr><td><strong>密度矩阵</strong></td><td>Density matrix</td><td>描述电子分布的矩阵</td></tr><tr><td><strong>Fock 矩阵</strong></td><td>Fock matrix</td><td>HF 方程的核心矩阵</td></tr><tr><td><strong>重叠矩阵</strong></td><td>Overlap matrix</td><td>基函数重叠的矩阵</td></tr></tbody></table><h3>12. 溶剂模型</h3><table class="tb"><thead><tr><th>术语</th><th>英文</th><th>解释</th></tr></thead><tbody><tr><td><strong>PCM</strong></td><td>Polarizable Continuum Model</td><td>可极化连续介质模型</td></tr><tr><td><strong>SMD</strong></td><td>Solvation Model based on Density</td><td>基于密度的溶剂化模型</td></tr><tr><td><strong>CPCM</strong></td><td>Conductor-like PCM</td><td>类导体 PCM</td></tr><tr><td><strong>IEFPCM</strong></td><td>Integral Equation Formalism PCM</td><td>积分方程形式 PCM</td></tr><tr><td><strong>隐式溶剂</strong></td><td>Implicit solvation</td><td>将溶剂视为连续介质</td></tr><tr><td><strong>显式溶剂</strong></td><td>Explicit solvation</td><td>包含溶剂分子</td></tr></tbody></table><h3>13. 缩写对照</h3><table class="tb"><thead><tr><th>缩写</th><th>全称</th><th>中文</th></tr></thead><tbody><tr><td>PES</td><td>Potential Energy Surface</td><td>势能面</td></tr><tr><td>ZPE</td><td>Zero-Point Energy</td><td>零点能</td></tr><tr><td>MO</td><td>Molecular Orbital</td><td>分子轨道</td></tr><tr><td>AO</td><td>Atomic Orbital</td><td>原子轨道</td></tr><tr><td>BO</td><td>Born-Oppenheimer</td><td>玻恩-奥本海默近似</td></tr><tr><td>NBO</td><td>Natural Bond Orbital</td><td>自然键轨道</td></tr><tr><td>AIM</td><td>Atoms in Molecules</td><td>分子中的原子</td></tr><tr><td>MEP</td><td>Minimum Energy Path</td><td>最小能量路径</td></tr></tbody></table><h3>14. 常用符号</h3><table class="tb"><thead><tr><th>符号</th><th>含义</th><th>单位</th></tr></thead><tbody><tr><td>E</td><td>能量</td><td>Hartree 或 eV</td></tr><tr><td>ΔE</td><td>能量变化</td><td>kcal/mol 或 kJ/mol</td></tr><tr><td>R</td><td>键长</td><td>Å</td></tr><tr><td>θ</td><td>键角</td><td>度</td></tr><tr><td>μ</td><td>偶极矩</td><td>Debye</td></tr><tr><td>ν</td><td>频率</td><td>cm⁻¹</td></tr><tr><td>f</td><td>振子强度</td><td>无量纲</td></tr><tr><td>ε</td><td>轨道能量</td><td>Hartree 或 eV</td></tr></tbody></table><div class="ib tip"><strong>单位换算：</strong><ul><li>1 Hartree = 627.5 kcal/mol = 2625.5 kJ/mol = 27.211 eV</li><li>1 Debye = 3.336 × 10⁻³⁰ C·m</li><li>1 Å = 0.1 nm = 10⁻¹⁰ m</li><li>1 cm⁻¹ = 1.240 × 10⁻⁴ eV</li></ul></div>',31))])}const ry=J(py,[["render",dy]]),cy=[{path:"/",name:"home",component:Mi},{path:"/theory",name:"theory",component:Wi},{path:"/input",name:"input",component:sf},{path:"/tasks",name:"tasks",component:Mf},{path:"/output",name:"output",component:a1},{path:"/errors",name:"errors",component:g1},{path:"/tools",name:"tools",component:tm},{path:"/tools/calculator",name:"calculator",component:Um},{path:"/surface",name:"surface",component:n0},{path:"/defect",name:"defect",component:u0},{path:"/phonon",name:"phonon",component:P0},{path:"/convergence",name:"convergence",component:B0},{path:"/cheatsheet",name:"cheatsheet",component:_0},{path:"/thermoelectric",name:"thermoelectric",component:Gv},{path:"/gaussian",name:"gaussian",component:Hv},{path:"/gaussian/install",name:"gaussian-install",component:o2},{path:"/gaussian/input",name:"gaussian-input",component:w2},{path:"/gaussian/params",name:"gaussian-params",component:Hh},{path:"/gaussian/tasks",name:"gaussian-tasks",component:W2},{path:"/gaussian/output",name:"gaussian-output",component:mh},{path:"/gaussian/visual",name:"gaussian-visual",component:i3},{path:"/gaussian/faq",name:"gaussian-faq",component:ly},{path:"/gaussian/glossary",name:"gaussian-glossary",component:ry},{path:"/gaussian/vasp-compare",name:"gaussian-vasp-compare",component:Rh},{path:"/errors/scf",name:"errors-scf",component:Rb},{path:"/errors/ion",name:"errors-ion",component:Xb},{path:"/errors/memory",name:"errors-memory",component:bg},{path:"/errors/files",name:"errors-files",component:Gg},{path:"/errors/output",name:"errors-output",component:iv}],iy=fi({history:Wc(),routes:cy}),ye=Wd(oc);ye.use(iy);ye.mount("#app");
