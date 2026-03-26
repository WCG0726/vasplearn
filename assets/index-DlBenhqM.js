(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xa(n){const s=Object.create(null);for(const a of n.split(","))s[a]=1;return a=>a in s}const cs={},Un=[],nn=()=>{},Jl=()=>!1,Kt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qa=n=>n.startsWith("onUpdate:"),hs=Object.assign,Fa=(n,s)=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)},kp=Object.prototype.hasOwnProperty,as=(n,s)=>kp.call(n,s),W=Array.isArray,Kn=n=>yt(n)==="[object Map]",Wt=n=>yt(n)==="[object Set]",sl=n=>yt(n)==="[object Date]",z=n=>typeof n=="function",fs=n=>typeof n=="string",tn=n=>typeof n=="symbol",es=n=>n!==null&&typeof n=="object",Ql=n=>(es(n)||z(n))&&z(n.then)&&z(n.catch),se=Object.prototype.toString,yt=n=>se.call(n),Cp=n=>yt(n).slice(8,-1),ne=n=>yt(n)==="[object Object]",Ma=n=>fs(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,et=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ht=n=>{const s=Object.create(null);return a=>s[a]||(s[a]=n(a))},Ap=/-\w/g,Rs=Ht(n=>n.replace(Ap,s=>s.slice(1).toUpperCase())),Sp=/\B([A-Z])/g,En=Ht(n=>n.replace(Sp,"-$1").toLowerCase()),jt=Ht(n=>n.charAt(0).toUpperCase()+n.slice(1)),aa=Ht(n=>n?`on${jt(n)}`:""),sn=(n,s)=>!Object.is(n,s),Rt=(n,...s)=>{for(let a=0;a<n.length;a++)n[a](...s)},te=(n,s,a,p=!1)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,writable:p,value:a})},zt=n=>{const s=parseFloat(n);return isNaN(s)?n:s};let nl;const _t=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _n(n){if(W(n)){const s={};for(let a=0;a<n.length;a++){const p=n[a],o=fs(p)?Rp(p):_n(p);if(o)for(const l in o)s[l]=o[l]}return s}else if(fs(n)||es(n))return n}const wp=/;(?![^(]*\))/g,Ep=/:([^]+)/,Tp=/\/\*[^]*?\*\//g;function Rp(n){const s={};return n.replace(Tp,"").split(wp).forEach(a=>{if(a){const p=a.split(Ep);p.length>1&&(s[p[0].trim()]=p[1].trim())}}),s}function _(n){let s="";if(fs(n))s=n;else if(W(n))for(let a=0;a<n.length;a++){const p=_(n[a]);p&&(s+=p+" ")}else if(es(n))for(const a in n)n[a]&&(s+=a+" ");return s.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ip=xa(Op);function ae(n){return!!n||n===""}function Pp(n,s){if(n.length!==s.length)return!1;let a=!0;for(let p=0;a&&p<n.length;p++)a=kt(n[p],s[p]);return a}function kt(n,s){if(n===s)return!0;let a=sl(n),p=sl(s);if(a||p)return a&&p?n.getTime()===s.getTime():!1;if(a=tn(n),p=tn(s),a||p)return n===s;if(a=W(n),p=W(s),a||p)return a&&p?Pp(n,s):!1;if(a=es(n),p=es(s),a||p){if(!a||!p)return!1;const o=Object.keys(n).length,l=Object.keys(s).length;if(o!==l)return!1;for(const c in n){const e=n.hasOwnProperty(c),d=s.hasOwnProperty(c);if(e&&!d||!e&&d||!kt(n[c],s[c]))return!1}}return String(n)===String(s)}function Np(n,s){return n.findIndex(a=>kt(a,s))}const le=n=>!!(n&&n.__v_isRef===!0),Z=n=>fs(n)?n:n==null?"":W(n)||es(n)&&(n.toString===se||!z(n.toString))?le(n)?Z(n.value):JSON.stringify(n,ee,2):String(n),ee=(n,s)=>le(s)?ee(n,s.value):Kn(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((a,[p,o],l)=>(a[la(p,l)+" =>"]=o,a),{})}:Wt(s)?{[`Set(${s.size})`]:[...s.values()].map(a=>la(a))}:tn(s)?la(s):es(s)&&!W(s)&&!ne(s)?String(s):s,la=(n,s="")=>{var a;return tn(n)?`Symbol(${(a=n.description)!=null?a:s})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xs;class xp{constructor(s=!1){this.detached=s,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xs,!s&&xs&&(this.index=(xs.scopes||(xs.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].pause();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].resume();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].resume()}}run(s){if(this._active){const a=xs;try{return xs=this,s()}finally{xs=a}}}on(){++this._on===1&&(this.prevScope=xs,xs=this)}off(){this._on>0&&--this._on===0&&(xs=this.prevScope,this.prevScope=void 0)}stop(s){if(this._active){this._active=!1;let a,p;for(a=0,p=this.effects.length;a<p;a++)this.effects[a].stop();for(this.effects.length=0,a=0,p=this.cleanups.length;a<p;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,p=this.scopes.length;a<p;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function qp(){return xs}let rs;const ea=new WeakSet;class pe{constructor(s){this.fn=s,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xs&&xs.active&&xs.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ce(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tl(this),de(this);const s=rs,a=Gs;rs=this,Gs=!0;try{return this.fn()}finally{re(this),rs=s,Gs=a,this.flags&=-3}}stop(){if(this.flags&1){for(let s=this.deps;s;s=s.nextDep)$a(s);this.deps=this.depsTail=void 0,tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let oe=0,pt,ot;function ce(n,s=!1){if(n.flags|=8,s){n.next=ot,ot=n;return}n.next=pt,pt=n}function Da(){oe++}function Va(){if(--oe>0)return;if(ot){let s=ot;for(ot=void 0;s;){const a=s.next;s.next=void 0,s.flags&=-9,s=a}}let n;for(;pt;){let s=pt;for(pt=void 0;s;){const a=s.next;if(s.next=void 0,s.flags&=-9,s.flags&1)try{s.trigger()}catch(p){n||(n=p)}s=a}}if(n)throw n}function de(n){for(let s=n.deps;s;s=s.nextDep)s.version=-1,s.prevActiveLink=s.dep.activeLink,s.dep.activeLink=s}function re(n){let s,a=n.depsTail,p=a;for(;p;){const o=p.prevDep;p.version===-1?(p===a&&(a=o),$a(p),Fp(p)):s=p,p.dep.activeLink=p.prevActiveLink,p.prevActiveLink=void 0,p=o}n.deps=s,n.depsTail=a}function ga(n){for(let s=n.deps;s;s=s.nextDep)if(s.dep.version!==s.version||s.dep.computed&&(ie(s.dep.computed)||s.dep.version!==s.version))return!0;return!!n._dirty}function ie(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ft)||(n.globalVersion=ft,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ga(n))))return;n.flags|=2;const s=n.dep,a=rs,p=Gs;rs=n,Gs=!0;try{de(n);const o=n.fn(n._value);(s.version===0||sn(o,n._value))&&(n.flags|=128,n._value=o,s.version++)}catch(o){throw s.version++,o}finally{rs=a,Gs=p,re(n),n.flags&=-3}}function $a(n,s=!1){const{dep:a,prevSub:p,nextSub:o}=n;if(p&&(p.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=p,n.nextSub=void 0),a.subs===n&&(a.subs=p,!p&&a.computed)){a.computed.flags&=-5;for(let l=a.computed.deps;l;l=l.nextDep)$a(l,!0)}!s&&!--a.sc&&a.map&&a.map.delete(a.key)}function Fp(n){const{prevDep:s,nextDep:a}=n;s&&(s.nextDep=a,n.prevDep=void 0),a&&(a.prevDep=s,n.nextDep=void 0)}let Gs=!0;const ue=[];function fn(){ue.push(Gs),Gs=!1}function mn(){const n=ue.pop();Gs=n===void 0?!0:n}function tl(n){const{cleanup:s}=n;if(n.cleanup=void 0,s){const a=rs;rs=void 0;try{s()}finally{rs=a}}}let ft=0;class Mp{constructor(s,a){this.sub=s,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ba{constructor(s){this.computed=s,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(s){if(!rs||!Gs||rs===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==rs)a=this.activeLink=new Mp(rs,this),rs.deps?(a.prevDep=rs.depsTail,rs.depsTail.nextDep=a,rs.depsTail=a):rs.deps=rs.depsTail=a,fe(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const p=a.nextDep;p.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=p),a.prevDep=rs.depsTail,a.nextDep=void 0,rs.depsTail.nextDep=a,rs.depsTail=a,rs.deps===a&&(rs.deps=p)}return a}trigger(s){this.version++,ft++,this.notify(s)}notify(s){Da();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Va()}}}function fe(n){if(n.dep.sc++,n.sub.flags&4){const s=n.dep.computed;if(s&&!n.dep.subs){s.flags|=20;for(let p=s.deps;p;p=p.nextDep)fe(p)}const a=n.dep.subs;a!==n&&(n.prevSub=a,a&&(a.nextSub=n)),n.dep.subs=n}}const ha=new WeakMap,Fn=Symbol(""),ya=Symbol(""),mt=Symbol("");function ys(n,s,a){if(Gs&&rs){let p=ha.get(n);p||ha.set(n,p=new Map);let o=p.get(a);o||(p.set(a,o=new Ba),o.map=p,o.key=a),o.track()}}function dn(n,s,a,p,o,l){const c=ha.get(n);if(!c){ft++;return}const e=d=>{d&&d.trigger()};if(Da(),s==="clear")c.forEach(e);else{const d=W(n),u=d&&Ma(a);if(d&&a==="length"){const i=Number(p);c.forEach((b,h)=>{(h==="length"||h===mt||!tn(h)&&h>=i)&&e(b)})}else switch((a!==void 0||c.has(void 0))&&e(c.get(a)),u&&e(c.get(mt)),s){case"add":d?u&&e(c.get("length")):(e(c.get(Fn)),Kn(n)&&e(c.get(ya)));break;case"delete":d||(e(c.get(Fn)),Kn(n)&&e(c.get(ya)));break;case"set":Kn(n)&&e(c.get(Fn));break}}Va()}function Bn(n){const s=ts(n);return s===n?s:(ys(s,"iterate",mt),Vs(n)?s:s.map(Ls))}function Zt(n){return ys(n=ts(n),"iterate",mt),n}function Js(n,s){return bn(n)?Zn(Mn(n)?Ls(s):s):Ls(s)}const Dp={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,n=>Js(this,n))},concat(...n){return Bn(this).concat(...n.map(s=>W(s)?Bn(s):s))},entries(){return pa(this,"entries",n=>(n[1]=Js(this,n[1]),n))},every(n,s){return en(this,"every",n,s,void 0,arguments)},filter(n,s){return en(this,"filter",n,s,a=>a.map(p=>Js(this,p)),arguments)},find(n,s){return en(this,"find",n,s,a=>Js(this,a),arguments)},findIndex(n,s){return en(this,"findIndex",n,s,void 0,arguments)},findLast(n,s){return en(this,"findLast",n,s,a=>Js(this,a),arguments)},findLastIndex(n,s){return en(this,"findLastIndex",n,s,void 0,arguments)},forEach(n,s){return en(this,"forEach",n,s,void 0,arguments)},includes(...n){return oa(this,"includes",n)},indexOf(...n){return oa(this,"indexOf",n)},join(n){return Bn(this).join(n)},lastIndexOf(...n){return oa(this,"lastIndexOf",n)},map(n,s){return en(this,"map",n,s,void 0,arguments)},pop(){return nt(this,"pop")},push(...n){return nt(this,"push",n)},reduce(n,...s){return al(this,"reduce",n,s)},reduceRight(n,...s){return al(this,"reduceRight",n,s)},shift(){return nt(this,"shift")},some(n,s){return en(this,"some",n,s,void 0,arguments)},splice(...n){return nt(this,"splice",n)},toReversed(){return Bn(this).toReversed()},toSorted(n){return Bn(this).toSorted(n)},toSpliced(...n){return Bn(this).toSpliced(...n)},unshift(...n){return nt(this,"unshift",n)},values(){return pa(this,"values",n=>Js(this,n))}};function pa(n,s,a){const p=Zt(n),o=p[s]();return p!==n&&!Vs(n)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.done||(l.value=a(l.value)),l}),o}const Vp=Array.prototype;function en(n,s,a,p,o,l){const c=Zt(n),e=c!==n&&!Vs(n),d=c[s];if(d!==Vp[s]){const b=d.apply(n,l);return e?Ls(b):b}let u=a;c!==n&&(e?u=function(b,h){return a.call(this,Js(n,b),h,n)}:a.length>2&&(u=function(b,h){return a.call(this,b,h,n)}));const i=d.call(c,u,p);return e&&o?o(i):i}function al(n,s,a,p){const o=Zt(n),l=o!==n&&!Vs(n);let c=a,e=!1;o!==n&&(l?(e=p.length===0,c=function(u,i,b){return e&&(e=!1,u=Js(n,u)),a.call(this,u,Js(n,i),b,n)}):a.length>3&&(c=function(u,i,b){return a.call(this,u,i,b,n)}));const d=o[s](c,...p);return e?Js(n,d):d}function oa(n,s,a){const p=ts(n);ys(p,"iterate",mt);const o=p[s](...a);return(o===-1||o===!1)&&Ua(a[0])?(a[0]=ts(a[0]),p[s](...a)):o}function nt(n,s,a=[]){fn(),Da();const p=ts(n)[s].apply(n,a);return Va(),mn(),p}const $p=xa("__proto__,__v_isRef,__isVue"),me=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tn));function Bp(n){tn(n)||(n=String(n));const s=ts(this);return ys(s,"has",n),s.hasOwnProperty(n)}class be{constructor(s=!1,a=!1){this._isReadonly=s,this._isShallow=a}get(s,a,p){if(a==="__v_skip")return s.__v_skip;const o=this._isReadonly,l=this._isShallow;if(a==="__v_isReactive")return!o;if(a==="__v_isReadonly")return o;if(a==="__v_isShallow")return l;if(a==="__v_raw")return p===(o?l?Zp:ye:l?he:ge).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(p)?s:void 0;const c=W(s);if(!o){let d;if(c&&(d=Dp[a]))return d;if(a==="hasOwnProperty")return Bp}const e=Reflect.get(s,a,As(s)?s:p);if((tn(a)?me.has(a):$p(a))||(o||ys(s,"get",a),l))return e;if(As(e)){const d=c&&Ma(a)?e:e.value;return o&&es(d)?Ca(d):d}return es(e)?o?Ca(e):Yt(e):e}}class ve extends be{constructor(s=!1){super(!1,s)}set(s,a,p,o){let l=s[a];const c=W(s)&&Ma(a);if(!this._isShallow){const u=bn(l);if(!Vs(p)&&!bn(p)&&(l=ts(l),p=ts(p)),!c&&As(l)&&!As(p))return u||(l.value=p),!0}const e=c?Number(a)<s.length:as(s,a),d=Reflect.set(s,a,p,As(s)?s:o);return s===ts(o)&&(e?sn(p,l)&&dn(s,"set",a,p):dn(s,"add",a,p)),d}deleteProperty(s,a){const p=as(s,a);s[a];const o=Reflect.deleteProperty(s,a);return o&&p&&dn(s,"delete",a,void 0),o}has(s,a){const p=Reflect.has(s,a);return(!tn(a)||!me.has(a))&&ys(s,"has",a),p}ownKeys(s){return ys(s,"iterate",W(s)?"length":Fn),Reflect.ownKeys(s)}}class Gp extends be{constructor(s=!1){super(!0,s)}set(s,a){return!0}deleteProperty(s,a){return!0}}const Lp=new ve,Up=new Gp,Kp=new ve(!0);const ka=n=>n,St=n=>Reflect.getPrototypeOf(n);function Wp(n,s,a){return function(...p){const o=this.__v_raw,l=ts(o),c=Kn(l),e=n==="entries"||n===Symbol.iterator&&c,d=n==="keys"&&c,u=o[n](...p),i=a?ka:s?Zn:Ls;return!s&&ys(l,"iterate",d?ya:Fn),hs(Object.create(u),{next(){const{value:b,done:h}=u.next();return h?{value:b,done:h}:{value:e?[i(b[0]),i(b[1])]:i(b),done:h}}})}}function wt(n){return function(...s){return n==="delete"?!1:n==="clear"?void 0:this}}function Hp(n,s){const a={get(o){const l=this.__v_raw,c=ts(l),e=ts(o);n||(sn(o,e)&&ys(c,"get",o),ys(c,"get",e));const{has:d}=St(c),u=s?ka:n?Zn:Ls;if(d.call(c,o))return u(l.get(o));if(d.call(c,e))return u(l.get(e));l!==c&&l.get(o)},get size(){const o=this.__v_raw;return!n&&ys(ts(o),"iterate",Fn),o.size},has(o){const l=this.__v_raw,c=ts(l),e=ts(o);return n||(sn(o,e)&&ys(c,"has",o),ys(c,"has",e)),o===e?l.has(o):l.has(o)||l.has(e)},forEach(o,l){const c=this,e=c.__v_raw,d=ts(e),u=s?ka:n?Zn:Ls;return!n&&ys(d,"iterate",Fn),e.forEach((i,b)=>o.call(l,u(i),u(b),c))}};return hs(a,n?{add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear")}:{add(o){const l=ts(this),c=St(l),e=ts(o),d=!s&&!Vs(o)&&!bn(o)?e:o;return c.has.call(l,d)||sn(o,d)&&c.has.call(l,o)||sn(e,d)&&c.has.call(l,e)||(l.add(d),dn(l,"add",d,d)),this},set(o,l){!s&&!Vs(l)&&!bn(l)&&(l=ts(l));const c=ts(this),{has:e,get:d}=St(c);let u=e.call(c,o);u||(o=ts(o),u=e.call(c,o));const i=d.call(c,o);return c.set(o,l),u?sn(l,i)&&dn(c,"set",o,l):dn(c,"add",o,l),this},delete(o){const l=ts(this),{has:c,get:e}=St(l);let d=c.call(l,o);d||(o=ts(o),d=c.call(l,o)),e&&e.call(l,o);const u=l.delete(o);return d&&dn(l,"delete",o,void 0),u},clear(){const o=ts(this),l=o.size!==0,c=o.clear();return l&&dn(o,"clear",void 0,void 0),c}}),["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=Wp(o,n,s)}),a}function Ga(n,s){const a=Hp(n,s);return(p,o,l)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?p:Reflect.get(as(a,o)&&o in p?a:p,o,l)}const jp={get:Ga(!1,!1)},zp={get:Ga(!1,!0)},_p={get:Ga(!0,!1)};const ge=new WeakMap,he=new WeakMap,ye=new WeakMap,Zp=new WeakMap;function Yp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xp(n){return n.__v_skip||!Object.isExtensible(n)?0:Yp(Cp(n))}function Yt(n){return bn(n)?n:La(n,!1,Lp,jp,ge)}function ke(n){return La(n,!1,Kp,zp,he)}function Ca(n){return La(n,!0,Up,_p,ye)}function La(n,s,a,p,o){if(!es(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=Xp(n);if(l===0)return n;const c=o.get(n);if(c)return c;const e=new Proxy(n,l===2?p:a);return o.set(n,e),e}function Mn(n){return bn(n)?Mn(n.__v_raw):!!(n&&n.__v_isReactive)}function bn(n){return!!(n&&n.__v_isReadonly)}function Vs(n){return!!(n&&n.__v_isShallow)}function Ua(n){return n?!!n.__v_raw:!1}function ts(n){const s=n&&n.__v_raw;return s?ts(s):n}function Jp(n){return!as(n,"__v_skip")&&Object.isExtensible(n)&&te(n,"__v_skip",!0),n}const Ls=n=>es(n)?Yt(n):n,Zn=n=>es(n)?Ca(n):n;function As(n){return n?n.__v_isRef===!0:!1}function Ce(n){return Ae(n,!1)}function Qp(n){return Ae(n,!0)}function Ae(n,s){return As(n)?n:new so(n,s)}class so{constructor(s,a){this.dep=new Ba,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?s:ts(s),this._value=a?s:Ls(s),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(s){const a=this._rawValue,p=this.__v_isShallow||Vs(s)||bn(s);s=p?s:ts(s),sn(s,a)&&(this._rawValue=s,this._value=p?s:Ls(s),this.dep.trigger())}}function Wn(n){return As(n)?n.value:n}const no={get:(n,s,a)=>s==="__v_raw"?n:Wn(Reflect.get(n,s,a)),set:(n,s,a,p)=>{const o=n[s];return As(o)&&!As(a)?(o.value=a,!0):Reflect.set(n,s,a,p)}};function Se(n){return Mn(n)?n:new Proxy(n,no)}class to{constructor(s,a,p){this.fn=s,this.setter=a,this._value=void 0,this.dep=new Ba(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=p}notify(){if(this.flags|=16,!(this.flags&8)&&rs!==this)return ce(this,!0),!0}get value(){const s=this.dep.track();return ie(this),s&&(s.version=this.dep.version),this._value}set value(s){this.setter&&this.setter(s)}}function ao(n,s,a=!1){let p,o;return z(n)?p=n:(p=n.get,o=n.set),new to(p,o,a)}const Et={},qt=new WeakMap;let Pn;function lo(n,s=!1,a=Pn){if(a){let p=qt.get(a);p||qt.set(a,p=[]),p.push(n)}}function eo(n,s,a=cs){const{immediate:p,deep:o,once:l,scheduler:c,augmentJob:e,call:d}=a,u=D=>o?D:Vs(D)||o===!1||o===0?rn(D,1):rn(D);let i,b,h,y,M=!1,P=!1;if(As(n)?(b=()=>n.value,M=Vs(n)):Mn(n)?(b=()=>u(n),M=!0):W(n)?(P=!0,M=n.some(D=>Mn(D)||Vs(D)),b=()=>n.map(D=>{if(As(D))return D.value;if(Mn(D))return u(D);if(z(D))return d?d(D,2):D()})):z(n)?s?b=d?()=>d(n,2):n:b=()=>{if(h){fn();try{h()}finally{mn()}}const D=Pn;Pn=i;try{return d?d(n,3,[y]):n(y)}finally{Pn=D}}:b=nn,s&&o){const D=b,os=o===!0?1/0:o;b=()=>rn(D(),os)}const j=qp(),K=()=>{i.stop(),j&&j.active&&Fa(j.effects,i)};if(l&&s){const D=s;s=(...os)=>{D(...os),K()}}let q=P?new Array(n.length).fill(Et):Et;const B=D=>{if(!(!(i.flags&1)||!i.dirty&&!D))if(s){const os=i.run();if(o||M||(P?os.some((vs,is)=>sn(vs,q[is])):sn(os,q))){h&&h();const vs=Pn;Pn=i;try{const is=[os,q===Et?void 0:P&&q[0]===Et?[]:q,y];q=os,d?d(s,3,is):s(...is)}finally{Pn=vs}}}else i.run()};return e&&e(B),i=new pe(b),i.scheduler=c?()=>c(B,!1):B,y=D=>lo(D,!1,i),h=i.onStop=()=>{const D=qt.get(i);if(D){if(d)d(D,4);else for(const os of D)os();qt.delete(i)}},s?p?B(!0):q=i.run():c?c(B.bind(null,!0),!0):i.run(),K.pause=i.pause.bind(i),K.resume=i.resume.bind(i),K.stop=K,K}function rn(n,s=1/0,a){if(s<=0||!es(n)||n.__v_skip||(a=a||new Map,(a.get(n)||0)>=s))return n;if(a.set(n,s),s--,As(n))rn(n.value,s,a);else if(W(n))for(let p=0;p<n.length;p++)rn(n[p],s,a);else if(Wt(n)||Kn(n))n.forEach(p=>{rn(p,s,a)});else if(ne(n)){for(const p in n)rn(n[p],s,a);for(const p of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,p)&&rn(n[p],s,a)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ct(n,s,a,p){try{return p?n(...p):n()}catch(o){Xt(o,s,a)}}function an(n,s,a,p){if(z(n)){const o=Ct(n,s,a,p);return o&&Ql(o)&&o.catch(l=>{Xt(l,s,a)}),o}if(W(n)){const o=[];for(let l=0;l<n.length;l++)o.push(an(n[l],s,a,p));return o}}function Xt(n,s,a,p=!0){const o=s?s.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:c}=s&&s.appContext.config||cs;if(s){let e=s.parent;const d=s.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;e;){const i=e.ec;if(i){for(let b=0;b<i.length;b++)if(i[b](n,d,u)===!1)return}e=e.parent}if(l){fn(),Ct(l,null,10,[n,d,u]),mn();return}}po(n,a,o,p,c)}function po(n,s,a,p=!0,o=!1){if(o)throw n;console.error(n)}const Ts=[];let Xs=-1;const Hn=[];let Cn=null,Gn=0;const we=Promise.resolve();let Ft=null;function Ka(n){const s=Ft||we;return n?s.then(this?n.bind(this):n):s}function oo(n){let s=Xs+1,a=Ts.length;for(;s<a;){const p=s+a>>>1,o=Ts[p],l=bt(o);l<n||l===n&&o.flags&2?s=p+1:a=p}return s}function Wa(n){if(!(n.flags&1)){const s=bt(n),a=Ts[Ts.length-1];!a||!(n.flags&2)&&s>=bt(a)?Ts.push(n):Ts.splice(oo(s),0,n),n.flags|=1,Ee()}}function Ee(){Ft||(Ft=we.then(Re))}function co(n){W(n)?Hn.push(...n):Cn&&n.id===-1?Cn.splice(Gn+1,0,n):n.flags&1||(Hn.push(n),n.flags|=1),Ee()}function ll(n,s,a=Xs+1){for(;a<Ts.length;a++){const p=Ts[a];if(p&&p.flags&2){if(n&&p.id!==n.uid)continue;Ts.splice(a,1),a--,p.flags&4&&(p.flags&=-2),p(),p.flags&4||(p.flags&=-2)}}}function Te(n){if(Hn.length){const s=[...new Set(Hn)].sort((a,p)=>bt(a)-bt(p));if(Hn.length=0,Cn){Cn.push(...s);return}for(Cn=s,Gn=0;Gn<Cn.length;Gn++){const a=Cn[Gn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Cn=null,Gn=0}}const bt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Re(n){try{for(Xs=0;Xs<Ts.length;Xs++){const s=Ts[Xs];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),Ct(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Xs<Ts.length;Xs++){const s=Ts[Xs];s&&(s.flags&=-2)}Xs=-1,Ts.length=0,Te(),Ft=null,(Ts.length||Hn.length)&&Re()}}let Fs=null,Oe=null;function Mt(n){const s=Fs;return Fs=n,Oe=n&&n.type.__scopeId||null,s}function R(n,s=Fs,a){if(!s||n._n)return n;const p=(...o)=>{p._d&&$t(-1);const l=Mt(s);let c;try{c=n(...o)}finally{Mt(l),p._d&&$t(1)}return c};return p._n=!0,p._c=!0,p._d=!0,p}function gs(n,s){if(Fs===null)return n;const a=na(Fs),p=n.dirs||(n.dirs=[]);for(let o=0;o<s.length;o++){let[l,c,e,d=cs]=s[o];l&&(z(l)&&(l={mounted:l,updated:l}),l.deep&&rn(c),p.push({dir:l,instance:a,value:c,oldValue:void 0,arg:e,modifiers:d}))}return n}function On(n,s,a,p){const o=n.dirs,l=s&&s.dirs;for(let c=0;c<o.length;c++){const e=o[c];l&&(e.oldValue=l[c].value);let d=e.dir[p];d&&(fn(),an(d,a,8,[n.el,e,n,s]),mn())}}function Ot(n,s){if(Cs){let a=Cs.provides;const p=Cs.parent&&Cs.parent.provides;p===a&&(a=Cs.provides=Object.create(p)),a[n]=s}}function un(n,s,a=!1){const p=ic();if(p||jn){let o=jn?jn._context.provides:p?p.parent==null||p.ce?p.vnode.appContext&&p.vnode.appContext.provides:p.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return a&&z(s)?s.call(p&&p.proxy):s}}const ro=Symbol.for("v-scx"),io=()=>un(ro);function It(n,s,a){return Ie(n,s,a)}function Ie(n,s,a=cs){const{immediate:p,deep:o,flush:l,once:c}=a,e=hs({},a),d=s&&p||!s&&l!=="post";let u;if(gt){if(l==="sync"){const y=io();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!d){const y=()=>{};return y.stop=nn,y.resume=nn,y.pause=nn,y}}const i=Cs;e.call=(y,M,P)=>an(y,i,M,P);let b=!1;l==="post"?e.scheduler=y=>{Ns(y,i&&i.suspense)}:l!=="sync"&&(b=!0,e.scheduler=(y,M)=>{M?y():Wa(y)}),e.augmentJob=y=>{s&&(y.flags|=4),b&&(y.flags|=2,i&&(y.id=i.uid,y.i=i))};const h=eo(n,s,e);return gt&&(u?u.push(h):d&&h()),h}function uo(n,s,a){const p=this.proxy,o=fs(n)?n.includes(".")?Pe(p,n):()=>p[n]:n.bind(p,p);let l;z(s)?l=s:(l=s.handler,a=s);const c=At(this),e=Ie(o,l.bind(p),a);return c(),e}function Pe(n,s){const a=s.split(".");return()=>{let p=n;for(let o=0;o<a.length&&p;o++)p=p[a[o]];return p}}const fo=Symbol("_vte"),mo=n=>n.__isTeleport,bo=Symbol("_leaveCb");function Ha(n,s){n.shapeFlag&6&&n.component?(n.transition=s,Ha(n.component.subTree,s)):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function Ne(n,s){return z(n)?hs({name:n.name},s,{setup:n}):n}function xe(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function el(n,s){let a;return!!((a=Object.getOwnPropertyDescriptor(n,s))&&!a.configurable)}const Dt=new WeakMap;function ct(n,s,a,p,o=!1){if(W(n)){n.forEach((P,j)=>ct(P,s&&(W(s)?s[j]:s),a,p,o));return}if(dt(p)&&!o){p.shapeFlag&512&&p.type.__asyncResolved&&p.component.subTree.component&&ct(n,s,a,p.component.subTree);return}const l=p.shapeFlag&4?na(p.component):p.el,c=o?null:l,{i:e,r:d}=n,u=s&&s.r,i=e.refs===cs?e.refs={}:e.refs,b=e.setupState,h=ts(b),y=b===cs?Jl:P=>el(i,P)?!1:as(h,P),M=(P,j)=>!(j&&el(i,j));if(u!=null&&u!==d){if(pl(s),fs(u))i[u]=null,y(u)&&(b[u]=null);else if(As(u)){const P=s;M(u,P.k)&&(u.value=null),P.k&&(i[P.k]=null)}}if(z(d))Ct(d,e,12,[c,i]);else{const P=fs(d),j=As(d);if(P||j){const K=()=>{if(n.f){const q=P?y(d)?b[d]:i[d]:M()||!n.k?d.value:i[n.k];if(o)W(q)&&Fa(q,l);else if(W(q))q.includes(l)||q.push(l);else if(P)i[d]=[l],y(d)&&(b[d]=i[d]);else{const B=[l];M(d,n.k)&&(d.value=B),n.k&&(i[n.k]=B)}}else P?(i[d]=c,y(d)&&(b[d]=c)):j&&(M(d,n.k)&&(d.value=c),n.k&&(i[n.k]=c))};if(c){const q=()=>{K(),Dt.delete(n)};q.id=-1,Dt.set(n,q),Ns(q,a)}else pl(n),K()}}}function pl(n){const s=Dt.get(n);s&&(s.flags|=8,Dt.delete(n))}_t().requestIdleCallback;_t().cancelIdleCallback;const dt=n=>!!n.type.__asyncLoader,qe=n=>n.type.__isKeepAlive;function vo(n,s){Fe(n,"a",s)}function go(n,s){Fe(n,"da",s)}function Fe(n,s,a=Cs){const p=n.__wdc||(n.__wdc=()=>{let o=a;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Jt(s,p,a),a){let o=a.parent;for(;o&&o.parent;)qe(o.parent.vnode)&&ho(p,s,a,o),o=o.parent}}function ho(n,s,a,p){const o=Jt(s,n,p,!0);Me(()=>{Fa(p[s],o)},a)}function Jt(n,s,a=Cs,p=!1){if(a){const o=a[n]||(a[n]=[]),l=s.__weh||(s.__weh=(...c)=>{fn();const e=At(a),d=an(s,a,n,c);return e(),mn(),d});return p?o.unshift(l):o.push(l),l}}const vn=n=>(s,a=Cs)=>{(!gt||n==="sp")&&Jt(n,(...p)=>s(...p),a)},yo=vn("bm"),ko=vn("m"),Co=vn("bu"),Ao=vn("u"),So=vn("bum"),Me=vn("um"),wo=vn("sp"),Eo=vn("rtg"),To=vn("rtc");function Ro(n,s=Cs){Jt("ec",n,s)}const Oo="components";function J(n,s){return Po(Oo,n,!0,s)||n}const Io=Symbol.for("v-ndc");function Po(n,s,a=!0,p=!1){const o=Fs||Cs;if(o){const l=o.type;{const e=vc(l,!1);if(e&&(e===s||e===Rs(s)||e===jt(Rs(s))))return l}const c=ol(o[n]||l[n],s)||ol(o.appContext[n],s);return!c&&p?l:c}}function ol(n,s){return n&&(n[s]||n[Rs(s)]||n[jt(Rs(s))])}function Nn(n,s,a,p){let o;const l=a,c=W(n);if(c||fs(n)){const e=c&&Mn(n);let d=!1,u=!1;e&&(d=!Vs(n),u=bn(n),n=Zt(n)),o=new Array(n.length);for(let i=0,b=n.length;i<b;i++)o[i]=s(d?u?Zn(Ls(n[i])):Ls(n[i]):n[i],i,void 0,l)}else if(typeof n=="number"){o=new Array(n);for(let e=0;e<n;e++)o[e]=s(e+1,e,void 0,l)}else if(es(n))if(n[Symbol.iterator])o=Array.from(n,(e,d)=>s(e,d,void 0,l));else{const e=Object.keys(n);o=new Array(e.length);for(let d=0,u=e.length;d<u;d++){const i=e[d];o[d]=s(n[i],i,d,l)}}else o=[];return o}const Aa=n=>n?np(n)?na(n):Aa(n.parent):null,rt=hs(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Aa(n.parent),$root:n=>Aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ve(n),$forceUpdate:n=>n.f||(n.f=()=>{Wa(n.update)}),$nextTick:n=>n.n||(n.n=Ka.bind(n.proxy)),$watch:n=>uo.bind(n)}),ca=(n,s)=>n!==cs&&!n.__isScriptSetup&&as(n,s),No={get({_:n},s){if(s==="__v_skip")return!0;const{ctx:a,setupState:p,data:o,props:l,accessCache:c,type:e,appContext:d}=n;if(s[0]!=="$"){const h=c[s];if(h!==void 0)switch(h){case 1:return p[s];case 2:return o[s];case 4:return a[s];case 3:return l[s]}else{if(ca(p,s))return c[s]=1,p[s];if(o!==cs&&as(o,s))return c[s]=2,o[s];if(as(l,s))return c[s]=3,l[s];if(a!==cs&&as(a,s))return c[s]=4,a[s];Sa&&(c[s]=0)}}const u=rt[s];let i,b;if(u)return s==="$attrs"&&ys(n.attrs,"get",""),u(n);if((i=e.__cssModules)&&(i=i[s]))return i;if(a!==cs&&as(a,s))return c[s]=4,a[s];if(b=d.config.globalProperties,as(b,s))return b[s]},set({_:n},s,a){const{data:p,setupState:o,ctx:l}=n;return ca(o,s)?(o[s]=a,!0):p!==cs&&as(p,s)?(p[s]=a,!0):as(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(l[s]=a,!0)},has({_:{data:n,setupState:s,accessCache:a,ctx:p,appContext:o,props:l,type:c}},e){let d;return!!(a[e]||n!==cs&&e[0]!=="$"&&as(n,e)||ca(s,e)||as(l,e)||as(p,e)||as(rt,e)||as(o.config.globalProperties,e)||(d=c.__cssModules)&&d[e])},defineProperty(n,s,a){return a.get!=null?n._.accessCache[s]=0:as(a,"value")&&this.set(n,s,a.value,null),Reflect.defineProperty(n,s,a)}};function cl(n){return W(n)?n.reduce((s,a)=>(s[a]=null,s),{}):n}let Sa=!0;function xo(n){const s=Ve(n),a=n.proxy,p=n.ctx;Sa=!1,s.beforeCreate&&dl(s.beforeCreate,n,"bc");const{data:o,computed:l,methods:c,watch:e,provide:d,inject:u,created:i,beforeMount:b,mounted:h,beforeUpdate:y,updated:M,activated:P,deactivated:j,beforeDestroy:K,beforeUnmount:q,destroyed:B,unmounted:D,render:os,renderTracked:vs,renderTriggered:is,errorCaptured:Ks,serverPrefetch:gn,expose:Ws,inheritAttrs:hn,components:Tn,directives:Hs,filters:Qn}=s;if(u&&qo(u,p,null),c)for(const ps in c){const ss=c[ps];z(ss)&&(p[ps]=ss.bind(a))}if(o){const ps=o.call(a,a);es(ps)&&(n.data=Yt(ps))}if(Sa=!0,l)for(const ps in l){const ss=l[ps],ln=z(ss)?ss.bind(a,a):z(ss.get)?ss.get.bind(a,a):nn,yn=!z(ss)&&z(ss.set)?ss.set.bind(a):nn,js=Bs({get:ln,set:yn});Object.defineProperty(p,ps,{enumerable:!0,configurable:!0,get:()=>js.value,set:Os=>js.value=Os})}if(e)for(const ps in e)De(e[ps],p,a,ps);if(d){const ps=z(d)?d.call(a):d;Reflect.ownKeys(ps).forEach(ss=>{Ot(ss,ps[ss])})}i&&dl(i,n,"c");function bs(ps,ss){W(ss)?ss.forEach(ln=>ps(ln.bind(a))):ss&&ps(ss.bind(a))}if(bs(yo,b),bs(ko,h),bs(Co,y),bs(Ao,M),bs(vo,P),bs(go,j),bs(Ro,Ks),bs(To,vs),bs(Eo,is),bs(So,q),bs(Me,D),bs(wo,gn),W(Ws))if(Ws.length){const ps=n.exposed||(n.exposed={});Ws.forEach(ss=>{Object.defineProperty(ps,ss,{get:()=>a[ss],set:ln=>a[ss]=ln,enumerable:!0})})}else n.exposed||(n.exposed={});os&&n.render===nn&&(n.render=os),hn!=null&&(n.inheritAttrs=hn),Tn&&(n.components=Tn),Hs&&(n.directives=Hs),gn&&xe(n)}function qo(n,s,a=nn){W(n)&&(n=wa(n));for(const p in n){const o=n[p];let l;es(o)?"default"in o?l=un(o.from||p,o.default,!0):l=un(o.from||p):l=un(o),As(l)?Object.defineProperty(s,p,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):s[p]=l}}function dl(n,s,a){an(W(n)?n.map(p=>p.bind(s.proxy)):n.bind(s.proxy),s,a)}function De(n,s,a,p){let o=p.includes(".")?Pe(a,p):()=>a[p];if(fs(n)){const l=s[n];z(l)&&It(o,l)}else if(z(n))It(o,n.bind(a));else if(es(n))if(W(n))n.forEach(l=>De(l,s,a,p));else{const l=z(n.handler)?n.handler.bind(a):s[n.handler];z(l)&&It(o,l,n)}}function Ve(n){const s=n.type,{mixins:a,extends:p}=s,{mixins:o,optionsCache:l,config:{optionMergeStrategies:c}}=n.appContext,e=l.get(s);let d;return e?d=e:!o.length&&!a&&!p?d=s:(d={},o.length&&o.forEach(u=>Vt(d,u,c,!0)),Vt(d,s,c)),es(s)&&l.set(s,d),d}function Vt(n,s,a,p=!1){const{mixins:o,extends:l}=s;l&&Vt(n,l,a,!0),o&&o.forEach(c=>Vt(n,c,a,!0));for(const c in s)if(!(p&&c==="expose")){const e=Fo[c]||a&&a[c];n[c]=e?e(n[c],s[c]):s[c]}return n}const Fo={data:rl,props:il,emits:il,methods:lt,computed:lt,beforeCreate:Ss,created:Ss,beforeMount:Ss,mounted:Ss,beforeUpdate:Ss,updated:Ss,beforeDestroy:Ss,beforeUnmount:Ss,destroyed:Ss,unmounted:Ss,activated:Ss,deactivated:Ss,errorCaptured:Ss,serverPrefetch:Ss,components:lt,directives:lt,watch:Do,provide:rl,inject:Mo};function rl(n,s){return s?n?function(){return hs(z(n)?n.call(this,this):n,z(s)?s.call(this,this):s)}:s:n}function Mo(n,s){return lt(wa(n),wa(s))}function wa(n){if(W(n)){const s={};for(let a=0;a<n.length;a++)s[n[a]]=n[a];return s}return n}function Ss(n,s){return n?[...new Set([].concat(n,s))]:s}function lt(n,s){return n?hs(Object.create(null),n,s):s}function il(n,s){return n?W(n)&&W(s)?[...new Set([...n,...s])]:hs(Object.create(null),cl(n),cl(s??{})):s}function Do(n,s){if(!n)return s;if(!s)return n;const a=hs(Object.create(null),n);for(const p in s)a[p]=Ss(n[p],s[p]);return a}function $e(){return{app:null,config:{isNativeTag:Jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vo=0;function $o(n,s){return function(p,o=null){z(p)||(p=hs({},p)),o!=null&&!es(o)&&(o=null);const l=$e(),c=new WeakSet,e=[];let d=!1;const u=l.app={_uid:Vo++,_component:p,_props:o,_container:null,_context:l,_instance:null,version:hc,get config(){return l.config},set config(i){},use(i,...b){return c.has(i)||(i&&z(i.install)?(c.add(i),i.install(u,...b)):z(i)&&(c.add(i),i(u,...b))),u},mixin(i){return l.mixins.includes(i)||l.mixins.push(i),u},component(i,b){return b?(l.components[i]=b,u):l.components[i]},directive(i,b){return b?(l.directives[i]=b,u):l.directives[i]},mount(i,b,h){if(!d){const y=u._ceVNode||w(p,o);return y.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),n(y,i,h),d=!0,u._container=i,i.__vue_app__=u,na(y.component)}},onUnmount(i){e.push(i)},unmount(){d&&(an(e,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(i,b){return l.provides[i]=b,u},runWithContext(i){const b=jn;jn=u;try{return i()}finally{jn=b}}};return u}}let jn=null;const Bo=(n,s)=>s==="modelValue"||s==="model-value"?n.modelModifiers:n[`${s}Modifiers`]||n[`${Rs(s)}Modifiers`]||n[`${En(s)}Modifiers`];function Go(n,s,...a){if(n.isUnmounted)return;const p=n.vnode.props||cs;let o=a;const l=s.startsWith("update:"),c=l&&Bo(p,s.slice(7));c&&(c.trim&&(o=a.map(i=>fs(i)?i.trim():i)),c.number&&(o=a.map(zt)));let e,d=p[e=aa(s)]||p[e=aa(Rs(s))];!d&&l&&(d=p[e=aa(En(s))]),d&&an(d,n,6,o);const u=p[e+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[e])return;n.emitted[e]=!0,an(u,n,6,o)}}const Lo=new WeakMap;function Be(n,s,a=!1){const p=a?Lo:s.emitsCache,o=p.get(n);if(o!==void 0)return o;const l=n.emits;let c={},e=!1;if(!z(n)){const d=u=>{const i=Be(u,s,!0);i&&(e=!0,hs(c,i))};!a&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}return!l&&!e?(es(n)&&p.set(n,null),null):(W(l)?l.forEach(d=>c[d]=null):hs(c,l),es(n)&&p.set(n,c),c)}function Qt(n,s){return!n||!Kt(s)?!1:(s=s.slice(2).replace(/Once$/,""),as(n,s[0].toLowerCase()+s.slice(1))||as(n,En(s))||as(n,s))}function ul(n){const{type:s,vnode:a,proxy:p,withProxy:o,propsOptions:[l],slots:c,attrs:e,emit:d,render:u,renderCache:i,props:b,data:h,setupState:y,ctx:M,inheritAttrs:P}=n,j=Mt(n);let K,q;try{if(a.shapeFlag&4){const D=o||p,os=D;K=Qs(u.call(os,D,i,b,y,h,M)),q=e}else{const D=s;K=Qs(D.length>1?D(b,{attrs:e,slots:c,emit:d}):D(b,null)),q=s.props?e:Uo(e)}}catch(D){it.length=0,Xt(D,n,1),K=w(wn)}let B=K;if(q&&P!==!1){const D=Object.keys(q),{shapeFlag:os}=B;D.length&&os&7&&(l&&D.some(qa)&&(q=Ko(q,l)),B=Yn(B,q,!1,!0))}return a.dirs&&(B=Yn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(a.dirs):a.dirs),a.transition&&Ha(B,a.transition),K=B,Mt(j),K}const Uo=n=>{let s;for(const a in n)(a==="class"||a==="style"||Kt(a))&&((s||(s={}))[a]=n[a]);return s},Ko=(n,s)=>{const a={};for(const p in n)(!qa(p)||!(p.slice(9)in s))&&(a[p]=n[p]);return a};function Wo(n,s,a){const{props:p,children:o,component:l}=n,{props:c,children:e,patchFlag:d}=s,u=l.emitsOptions;if(s.dirs||s.transition)return!0;if(a&&d>=0){if(d&1024)return!0;if(d&16)return p?fl(p,c,u):!!c;if(d&8){const i=s.dynamicProps;for(let b=0;b<i.length;b++){const h=i[b];if(Ge(c,p,h)&&!Qt(u,h))return!0}}}else return(o||e)&&(!e||!e.$stable)?!0:p===c?!1:p?c?fl(p,c,u):!0:!!c;return!1}function fl(n,s,a){const p=Object.keys(s);if(p.length!==Object.keys(n).length)return!0;for(let o=0;o<p.length;o++){const l=p[o];if(Ge(s,n,l)&&!Qt(a,l))return!0}return!1}function Ge(n,s,a){const p=n[a],o=s[a];return a==="style"&&es(p)&&es(o)?!kt(p,o):p!==o}function Ho({vnode:n,parent:s},a){for(;s;){const p=s.subTree;if(p.suspense&&p.suspense.activeBranch===n&&(p.el=n.el),p===n)(n=s.vnode).el=a,s=s.parent;else break}}const Le={},Ue=()=>Object.create(Le),Ke=n=>Object.getPrototypeOf(n)===Le;function jo(n,s,a,p=!1){const o={},l=Ue();n.propsDefaults=Object.create(null),We(n,s,o,l);for(const c in n.propsOptions[0])c in o||(o[c]=void 0);a?n.props=p?o:ke(o):n.type.props?n.props=o:n.props=l,n.attrs=l}function zo(n,s,a,p){const{props:o,attrs:l,vnode:{patchFlag:c}}=n,e=ts(o),[d]=n.propsOptions;let u=!1;if((p||c>0)&&!(c&16)){if(c&8){const i=n.vnode.dynamicProps;for(let b=0;b<i.length;b++){let h=i[b];if(Qt(n.emitsOptions,h))continue;const y=s[h];if(d)if(as(l,h))y!==l[h]&&(l[h]=y,u=!0);else{const M=Rs(h);o[M]=Ea(d,e,M,y,n,!1)}else y!==l[h]&&(l[h]=y,u=!0)}}}else{We(n,s,o,l)&&(u=!0);let i;for(const b in e)(!s||!as(s,b)&&((i=En(b))===b||!as(s,i)))&&(d?a&&(a[b]!==void 0||a[i]!==void 0)&&(o[b]=Ea(d,e,b,void 0,n,!0)):delete o[b]);if(l!==e)for(const b in l)(!s||!as(s,b))&&(delete l[b],u=!0)}u&&dn(n.attrs,"set","")}function We(n,s,a,p){const[o,l]=n.propsOptions;let c=!1,e;if(s)for(let d in s){if(et(d))continue;const u=s[d];let i;o&&as(o,i=Rs(d))?!l||!l.includes(i)?a[i]=u:(e||(e={}))[i]=u:Qt(n.emitsOptions,d)||(!(d in p)||u!==p[d])&&(p[d]=u,c=!0)}if(l){const d=ts(a),u=e||cs;for(let i=0;i<l.length;i++){const b=l[i];a[b]=Ea(o,d,b,u[b],n,!as(u,b))}}return c}function Ea(n,s,a,p,o,l){const c=n[a];if(c!=null){const e=as(c,"default");if(e&&p===void 0){const d=c.default;if(c.type!==Function&&!c.skipFactory&&z(d)){const{propsDefaults:u}=o;if(a in u)p=u[a];else{const i=At(o);p=u[a]=d.call(null,s),i()}}else p=d;o.ce&&o.ce._setProp(a,p)}c[0]&&(l&&!e?p=!1:c[1]&&(p===""||p===En(a))&&(p=!0))}return p}const _o=new WeakMap;function He(n,s,a=!1){const p=a?_o:s.propsCache,o=p.get(n);if(o)return o;const l=n.props,c={},e=[];let d=!1;if(!z(n)){const i=b=>{d=!0;const[h,y]=He(b,s,!0);hs(c,h),y&&e.push(...y)};!a&&s.mixins.length&&s.mixins.forEach(i),n.extends&&i(n.extends),n.mixins&&n.mixins.forEach(i)}if(!l&&!d)return es(n)&&p.set(n,Un),Un;if(W(l))for(let i=0;i<l.length;i++){const b=Rs(l[i]);ml(b)&&(c[b]=cs)}else if(l)for(const i in l){const b=Rs(i);if(ml(b)){const h=l[i],y=c[b]=W(h)||z(h)?{type:h}:hs({},h),M=y.type;let P=!1,j=!0;if(W(M))for(let K=0;K<M.length;++K){const q=M[K],B=z(q)&&q.name;if(B==="Boolean"){P=!0;break}else B==="String"&&(j=!1)}else P=z(M)&&M.name==="Boolean";y[0]=P,y[1]=j,(P||as(y,"default"))&&e.push(b)}}const u=[c,e];return es(n)&&p.set(n,u),u}function ml(n){return n[0]!=="$"&&!et(n)}const ja=n=>n==="_"||n==="_ctx"||n==="$stable",za=n=>W(n)?n.map(Qs):[Qs(n)],Zo=(n,s,a)=>{if(s._n)return s;const p=R((...o)=>za(s(...o)),a);return p._c=!1,p},je=(n,s,a)=>{const p=n._ctx;for(const o in n){if(ja(o))continue;const l=n[o];if(z(l))s[o]=Zo(o,l,p);else if(l!=null){const c=za(l);s[o]=()=>c}}},ze=(n,s)=>{const a=za(s);n.slots.default=()=>a},_e=(n,s,a)=>{for(const p in s)(a||!ja(p))&&(n[p]=s[p])},Yo=(n,s,a)=>{const p=n.slots=Ue();if(n.vnode.shapeFlag&32){const o=s._;o?(_e(p,s,a),a&&te(p,"_",o,!0)):je(s,p)}else s&&ze(n,s)},Xo=(n,s,a)=>{const{vnode:p,slots:o}=n;let l=!0,c=cs;if(p.shapeFlag&32){const e=s._;e?a&&e===1?l=!1:_e(o,s,a):(l=!s.$stable,je(s,o)),c=s}else s&&(ze(n,s),c={default:1});if(l)for(const e in o)!ja(e)&&c[e]==null&&delete o[e]},Ns=tc;function Jo(n){return Qo(n)}function Qo(n,s){const a=_t();a.__VUE__=!0;const{insert:p,remove:o,patchProp:l,createElement:c,createText:e,createComment:d,setText:u,setElementText:i,parentNode:b,nextSibling:h,setScopeId:y=nn,insertStaticContent:M}=n,P=(r,f,g,k=null,S=null,C=null,I=void 0,O=null,T=!!f.dynamicChildren)=>{if(r===f)return;r&&!tt(r,f)&&(k=A(r),Os(r,S,C,!0),r=null),f.patchFlag===-2&&(T=!1,f.dynamicChildren=null);const{type:E,ref:U,shapeFlag:x}=f;switch(E){case sa:j(r,f,g,k);break;case wn:K(r,f,g,k);break;case Pt:r==null&&q(f,g,k,I);break;case ks:Tn(r,f,g,k,S,C,I,O,T);break;default:x&1?os(r,f,g,k,S,C,I,O,T):x&6?Hs(r,f,g,k,S,C,I,O,T):(x&64||x&128)&&E.process(r,f,g,k,S,C,I,O,T,G)}U!=null&&S?ct(U,r&&r.ref,C,f||r,!f):U==null&&r&&r.ref!=null&&ct(r.ref,null,C,r,!0)},j=(r,f,g,k)=>{if(r==null)p(f.el=e(f.children),g,k);else{const S=f.el=r.el;f.children!==r.children&&u(S,f.children)}},K=(r,f,g,k)=>{r==null?p(f.el=d(f.children||""),g,k):f.el=r.el},q=(r,f,g,k)=>{[r.el,r.anchor]=M(r.children,f,g,k,r.el,r.anchor)},B=({el:r,anchor:f},g,k)=>{let S;for(;r&&r!==f;)S=h(r),p(r,g,k),r=S;p(f,g,k)},D=({el:r,anchor:f})=>{let g;for(;r&&r!==f;)g=h(r),o(r),r=g;o(f)},os=(r,f,g,k,S,C,I,O,T)=>{if(f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),r==null)vs(f,g,k,S,C,I,O,T);else{const E=r.el&&r.el._isVueCE?r.el:null;try{E&&E._beginPatch(),gn(r,f,S,C,I,O,T)}finally{E&&E._endPatch()}}},vs=(r,f,g,k,S,C,I,O)=>{let T,E;const{props:U,shapeFlag:x,transition:L,dirs:H}=r;if(T=r.el=c(r.type,C,U&&U.is,U),x&8?i(T,r.children):x&16&&Ks(r.children,T,null,k,S,da(r,C),I,O),H&&On(r,null,k,"created"),is(T,r,r.scopeId,I,k),U){for(const ds in U)ds!=="value"&&!et(ds)&&l(T,ds,null,U[ds],C,k);"value"in U&&l(T,"value",null,U.value,C),(E=U.onVnodeBeforeMount)&&Ys(E,k,r)}H&&On(r,null,k,"beforeMount");const X=sc(S,L);X&&L.beforeEnter(T),p(T,f,g),((E=U&&U.onVnodeMounted)||X||H)&&Ns(()=>{E&&Ys(E,k,r),X&&L.enter(T),H&&On(r,null,k,"mounted")},S)},is=(r,f,g,k,S)=>{if(g&&y(r,g),k)for(let C=0;C<k.length;C++)y(r,k[C]);if(S){let C=S.subTree;if(f===C||Je(C.type)&&(C.ssContent===f||C.ssFallback===f)){const I=S.vnode;is(r,I,I.scopeId,I.slotScopeIds,S.parent)}}},Ks=(r,f,g,k,S,C,I,O,T=0)=>{for(let E=T;E<r.length;E++){const U=r[E]=O?cn(r[E]):Qs(r[E]);P(null,U,f,g,k,S,C,I,O)}},gn=(r,f,g,k,S,C,I)=>{const O=f.el=r.el;let{patchFlag:T,dynamicChildren:E,dirs:U}=f;T|=r.patchFlag&16;const x=r.props||cs,L=f.props||cs;let H;if(g&&In(g,!1),(H=L.onVnodeBeforeUpdate)&&Ys(H,g,f,r),U&&On(f,r,g,"beforeUpdate"),g&&In(g,!0),(x.innerHTML&&L.innerHTML==null||x.textContent&&L.textContent==null)&&i(O,""),E?Ws(r.dynamicChildren,E,O,g,k,da(f,S),C):I||ss(r,f,O,null,g,k,da(f,S),C,!1),T>0){if(T&16)hn(O,x,L,g,S);else if(T&2&&x.class!==L.class&&l(O,"class",null,L.class,S),T&4&&l(O,"style",x.style,L.style,S),T&8){const X=f.dynamicProps;for(let ds=0;ds<X.length;ds++){const ls=X[ds],Is=x[ls],Ps=L[ls];(Ps!==Is||ls==="value")&&l(O,ls,Is,Ps,S,g)}}T&1&&r.children!==f.children&&i(O,f.children)}else!I&&E==null&&hn(O,x,L,g,S);((H=L.onVnodeUpdated)||U)&&Ns(()=>{H&&Ys(H,g,f,r),U&&On(f,r,g,"updated")},k)},Ws=(r,f,g,k,S,C,I)=>{for(let O=0;O<f.length;O++){const T=r[O],E=f[O],U=T.el&&(T.type===ks||!tt(T,E)||T.shapeFlag&198)?b(T.el):g;P(T,E,U,null,k,S,C,I,!0)}},hn=(r,f,g,k,S)=>{if(f!==g){if(f!==cs)for(const C in f)!et(C)&&!(C in g)&&l(r,C,f[C],null,S,k);for(const C in g){if(et(C))continue;const I=g[C],O=f[C];I!==O&&C!=="value"&&l(r,C,O,I,S,k)}"value"in g&&l(r,"value",f.value,g.value,S)}},Tn=(r,f,g,k,S,C,I,O,T)=>{const E=f.el=r?r.el:e(""),U=f.anchor=r?r.anchor:e("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:H}=f;H&&(O=O?O.concat(H):H),r==null?(p(E,g,k),p(U,g,k),Ks(f.children||[],g,U,S,C,I,O,T)):x>0&&x&64&&L&&r.dynamicChildren&&r.dynamicChildren.length===L.length?(Ws(r.dynamicChildren,L,g,S,C,I,O),(f.key!=null||S&&f===S.subTree)&&Ze(r,f,!0)):ss(r,f,g,U,S,C,I,O,T)},Hs=(r,f,g,k,S,C,I,O,T)=>{f.slotScopeIds=O,r==null?f.shapeFlag&512?S.ctx.activate(f,g,k,I,T):Qn(f,g,k,S,C,I,T):Dn(r,f,T)},Qn=(r,f,g,k,S,C,I)=>{const O=r.component=rc(r,k,S);if(qe(r)&&(O.ctx.renderer=G),uc(O,!1,I),O.asyncDep){if(S&&S.registerDep(O,bs,I),!r.el){const T=O.subTree=w(wn);K(null,T,f,g),r.placeholder=T.el}}else bs(O,r,f,g,S,C,I)},Dn=(r,f,g)=>{const k=f.component=r.component;if(Wo(r,f,g))if(k.asyncDep&&!k.asyncResolved){ps(k,f,g);return}else k.next=f,k.update();else f.el=r.el,k.vnode=f},bs=(r,f,g,k,S,C,I)=>{const O=()=>{if(r.isMounted){let{next:x,bu:L,u:H,parent:X,vnode:ds}=r;{const _s=Ye(r);if(_s){x&&(x.el=ds.el,ps(r,x,I)),_s.asyncDep.then(()=>{Ns(()=>{r.isUnmounted||E()},S)});return}}let ls=x,Is;In(r,!1),x?(x.el=ds.el,ps(r,x,I)):x=ds,L&&Rt(L),(Is=x.props&&x.props.onVnodeBeforeUpdate)&&Ys(Is,X,x,ds),In(r,!0);const Ps=ul(r),zs=r.subTree;r.subTree=Ps,P(zs,Ps,b(zs.el),A(zs),r,S,C),x.el=Ps.el,ls===null&&Ho(r,Ps.el),H&&Ns(H,S),(Is=x.props&&x.props.onVnodeUpdated)&&Ns(()=>Ys(Is,X,x,ds),S)}else{let x;const{el:L,props:H}=f,{bm:X,m:ds,parent:ls,root:Is,type:Ps}=r,zs=dt(f);In(r,!1),X&&Rt(X),!zs&&(x=H&&H.onVnodeBeforeMount)&&Ys(x,ls,f),In(r,!0);{Is.ce&&Is.ce._hasShadowRoot()&&Is.ce._injectChildStyle(Ps,r.parent?r.parent.type:void 0);const _s=r.subTree=ul(r);P(null,_s,g,k,r,S,C),f.el=_s.el}if(ds&&Ns(ds,S),!zs&&(x=H&&H.onVnodeMounted)){const _s=f;Ns(()=>Ys(x,ls,_s),S)}(f.shapeFlag&256||ls&&dt(ls.vnode)&&ls.vnode.shapeFlag&256)&&r.a&&Ns(r.a,S),r.isMounted=!0,f=g=k=null}};r.scope.on();const T=r.effect=new pe(O);r.scope.off();const E=r.update=T.run.bind(T),U=r.job=T.runIfDirty.bind(T);U.i=r,U.id=r.uid,T.scheduler=()=>Wa(U),In(r,!0),E()},ps=(r,f,g)=>{f.component=r;const k=r.vnode.props;r.vnode=f,r.next=null,zo(r,f.props,k,g),Xo(r,f.children,g),fn(),ll(r),mn()},ss=(r,f,g,k,S,C,I,O,T=!1)=>{const E=r&&r.children,U=r?r.shapeFlag:0,x=f.children,{patchFlag:L,shapeFlag:H}=f;if(L>0){if(L&128){yn(E,x,g,k,S,C,I,O,T);return}else if(L&256){ln(E,x,g,k,S,C,I,O,T);return}}H&8?(U&16&&Ds(E,S,C),x!==E&&i(g,x)):U&16?H&16?yn(E,x,g,k,S,C,I,O,T):Ds(E,S,C,!0):(U&8&&i(g,""),H&16&&Ks(x,g,k,S,C,I,O,T))},ln=(r,f,g,k,S,C,I,O,T)=>{r=r||Un,f=f||Un;const E=r.length,U=f.length,x=Math.min(E,U);let L;for(L=0;L<x;L++){const H=f[L]=T?cn(f[L]):Qs(f[L]);P(r[L],H,g,null,S,C,I,O,T)}E>U?Ds(r,S,C,!0,!1,x):Ks(f,g,k,S,C,I,O,T,x)},yn=(r,f,g,k,S,C,I,O,T)=>{let E=0;const U=f.length;let x=r.length-1,L=U-1;for(;E<=x&&E<=L;){const H=r[E],X=f[E]=T?cn(f[E]):Qs(f[E]);if(tt(H,X))P(H,X,g,null,S,C,I,O,T);else break;E++}for(;E<=x&&E<=L;){const H=r[x],X=f[L]=T?cn(f[L]):Qs(f[L]);if(tt(H,X))P(H,X,g,null,S,C,I,O,T);else break;x--,L--}if(E>x){if(E<=L){const H=L+1,X=H<U?f[H].el:k;for(;E<=L;)P(null,f[E]=T?cn(f[E]):Qs(f[E]),g,X,S,C,I,O,T),E++}}else if(E>L)for(;E<=x;)Os(r[E],S,C,!0),E++;else{const H=E,X=E,ds=new Map;for(E=X;E<=L;E++){const qs=f[E]=T?cn(f[E]):Qs(f[E]);qs.key!=null&&ds.set(qs.key,E)}let ls,Is=0;const Ps=L-X+1;let zs=!1,_s=0;const st=new Array(Ps);for(E=0;E<Ps;E++)st[E]=0;for(E=H;E<=x;E++){const qs=r[E];if(Is>=Ps){Os(qs,S,C,!0);continue}let Zs;if(qs.key!=null)Zs=ds.get(qs.key);else for(ls=X;ls<=L;ls++)if(st[ls-X]===0&&tt(qs,f[ls])){Zs=ls;break}Zs===void 0?Os(qs,S,C,!0):(st[Zs-X]=E+1,Zs>=_s?_s=Zs:zs=!0,P(qs,f[Zs],g,null,S,C,I,O,T),Is++)}const Xa=zs?nc(st):Un;for(ls=Xa.length-1,E=Ps-1;E>=0;E--){const qs=X+E,Zs=f[qs],Ja=f[qs+1],Qa=qs+1<U?Ja.el||Xe(Ja):k;st[E]===0?P(null,Zs,g,Qa,S,C,I,O,T):zs&&(ls<0||E!==Xa[ls]?js(Zs,g,Qa,2):ls--)}}},js=(r,f,g,k,S=null)=>{const{el:C,type:I,transition:O,children:T,shapeFlag:E}=r;if(E&6){js(r.component.subTree,f,g,k);return}if(E&128){r.suspense.move(f,g,k);return}if(E&64){I.move(r,f,g,G);return}if(I===ks){p(C,f,g);for(let x=0;x<T.length;x++)js(T[x],f,g,k);p(r.anchor,f,g);return}if(I===Pt){B(r,f,g);return}if(k!==2&&E&1&&O)if(k===0)O.beforeEnter(C),p(C,f,g),Ns(()=>O.enter(C),S);else{const{leave:x,delayLeave:L,afterLeave:H}=O,X=()=>{r.ctx.isUnmounted?o(C):p(C,f,g)},ds=()=>{C._isLeaving&&C[bo](!0),x(C,()=>{X(),H&&H()})};L?L(C,X,ds):ds()}else p(C,f,g)},Os=(r,f,g,k=!1,S=!1)=>{const{type:C,props:I,ref:O,children:T,dynamicChildren:E,shapeFlag:U,patchFlag:x,dirs:L,cacheIndex:H}=r;if(x===-2&&(S=!1),O!=null&&(fn(),ct(O,null,g,r,!0),mn()),H!=null&&(f.renderCache[H]=void 0),U&256){f.ctx.deactivate(r);return}const X=U&1&&L,ds=!dt(r);let ls;if(ds&&(ls=I&&I.onVnodeBeforeUnmount)&&Ys(ls,f,r),U&6)Rn(r.component,g,k);else{if(U&128){r.suspense.unmount(g,k);return}X&&On(r,null,f,"beforeUnmount"),U&64?r.type.remove(r,f,g,G,k):E&&!E.hasOnce&&(C!==ks||x>0&&x&64)?Ds(E,f,g,!1,!0):(C===ks&&x&384||!S&&U&16)&&Ds(T,f,g),k&&Vn(r)}(ds&&(ls=I&&I.onVnodeUnmounted)||X)&&Ns(()=>{ls&&Ys(ls,f,r),X&&On(r,null,f,"unmounted")},g)},Vn=r=>{const{type:f,el:g,anchor:k,transition:S}=r;if(f===ks){$n(g,k);return}if(f===Pt){D(r);return}const C=()=>{o(g),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(r.shapeFlag&1&&S&&!S.persisted){const{leave:I,delayLeave:O}=S,T=()=>I(g,C);O?O(r.el,C,T):T()}else C()},$n=(r,f)=>{let g;for(;r!==f;)g=h(r),o(r),r=g;o(f)},Rn=(r,f,g)=>{const{bum:k,scope:S,job:C,subTree:I,um:O,m:T,a:E}=r;bl(T),bl(E),k&&Rt(k),S.stop(),C&&(C.flags|=8,Os(I,r,f,g)),O&&Ns(O,f),Ns(()=>{r.isUnmounted=!0},f)},Ds=(r,f,g,k=!1,S=!1,C=0)=>{for(let I=C;I<r.length;I++)Os(r[I],f,g,k,S)},A=r=>{if(r.shapeFlag&6)return A(r.component.subTree);if(r.shapeFlag&128)return r.suspense.next();const f=h(r.anchor||r.el),g=f&&f[fo];return g?h(g):f};let F=!1;const N=(r,f,g)=>{let k;r==null?f._vnode&&(Os(f._vnode,null,null,!0),k=f._vnode.component):P(f._vnode||null,r,f,null,null,null,g),f._vnode=r,F||(F=!0,ll(k),Te(),F=!1)},G={p:P,um:Os,m:js,r:Vn,mt:Qn,mc:Ks,pc:ss,pbc:Ws,n:A,o:n};return{render:N,hydrate:void 0,createApp:$o(N)}}function da({type:n,props:s},a){return a==="svg"&&n==="foreignObject"||a==="mathml"&&n==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:a}function In({effect:n,job:s},a){a?(n.flags|=32,s.flags|=4):(n.flags&=-33,s.flags&=-5)}function sc(n,s){return(!n||n&&!n.pendingBranch)&&s&&!s.persisted}function Ze(n,s,a=!1){const p=n.children,o=s.children;if(W(p)&&W(o))for(let l=0;l<p.length;l++){const c=p[l];let e=o[l];e.shapeFlag&1&&!e.dynamicChildren&&((e.patchFlag<=0||e.patchFlag===32)&&(e=o[l]=cn(o[l]),e.el=c.el),!a&&e.patchFlag!==-2&&Ze(c,e)),e.type===sa&&(e.patchFlag===-1&&(e=o[l]=cn(e)),e.el=c.el),e.type===wn&&!e.el&&(e.el=c.el)}}function nc(n){const s=n.slice(),a=[0];let p,o,l,c,e;const d=n.length;for(p=0;p<d;p++){const u=n[p];if(u!==0){if(o=a[a.length-1],n[o]<u){s[p]=o,a.push(p);continue}for(l=0,c=a.length-1;l<c;)e=l+c>>1,n[a[e]]<u?l=e+1:c=e;u<n[a[l]]&&(l>0&&(s[p]=a[l-1]),a[l]=p)}}for(l=a.length,c=a[l-1];l-- >0;)a[l]=c,c=s[c];return a}function Ye(n){const s=n.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:Ye(s)}function bl(n){if(n)for(let s=0;s<n.length;s++)n[s].flags|=8}function Xe(n){if(n.placeholder)return n.placeholder;const s=n.component;return s?Xe(s.subTree):null}const Je=n=>n.__isSuspense;function tc(n,s){s&&s.pendingBranch?W(n)?s.effects.push(...n):s.effects.push(n):co(n)}const ks=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),Pt=Symbol.for("v-stc"),it=[];let Ms=null;function V(n=!1){it.push(Ms=n?null:[])}function ac(){it.pop(),Ms=it[it.length-1]||null}let vt=1;function $t(n,s=!1){vt+=n,n<0&&Ms&&s&&(Ms.hasOnce=!0)}function Qe(n){return n.dynamicChildren=vt>0?Ms||Un:null,ac(),vt>0&&Ms&&Ms.push(n),n}function $(n,s,a,p,o,l){return Qe(t(n,s,a,p,o,l,!0))}function lc(n,s,a,p,o){return Qe(w(n,s,a,p,o,!0))}function Bt(n){return n?n.__v_isVNode===!0:!1}function tt(n,s){return n.type===s.type&&n.key===s.key}const sp=({key:n})=>n??null,Nt=({ref:n,ref_key:s,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?fs(n)||As(n)||z(n)?{i:Fs,r:n,k:s,f:!!a}:n:null);function t(n,s=null,a=null,p=0,o=null,l=n===ks?0:1,c=!1,e=!1){const d={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&sp(s),ref:s&&Nt(s),scopeId:Oe,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:p,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Fs};return e?(_a(d,a),l&128&&n.normalize(d)):a&&(d.shapeFlag|=fs(a)?8:16),vt>0&&!c&&Ms&&(d.patchFlag>0||l&6)&&d.patchFlag!==32&&Ms.push(d),d}const w=ec;function ec(n,s=null,a=null,p=0,o=null,l=!1){if((!n||n===Io)&&(n=wn),Bt(n)){const e=Yn(n,s,!0);return a&&_a(e,a),vt>0&&!l&&Ms&&(e.shapeFlag&6?Ms[Ms.indexOf(n)]=e:Ms.push(e)),e.patchFlag=-2,e}if(gc(n)&&(n=n.__vccOpts),s){s=pc(s);let{class:e,style:d}=s;e&&!fs(e)&&(s.class=_(e)),es(d)&&(Ua(d)&&!W(d)&&(d=hs({},d)),s.style=_n(d))}const c=fs(n)?1:Je(n)?128:mo(n)?64:es(n)?4:z(n)?2:0;return t(n,s,a,p,o,c,l,!0)}function pc(n){return n?Ua(n)||Ke(n)?hs({},n):n:null}function Yn(n,s,a=!1,p=!1){const{props:o,ref:l,patchFlag:c,children:e,transition:d}=n,u=s?oc(o||{},s):o,i={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&sp(u),ref:s&&s.ref?a&&l?W(l)?l.concat(Nt(s)):[l,Nt(s)]:Nt(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:e,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==ks?c===-1?16:c|16:c,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:d,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Yn(n.ssContent),ssFallback:n.ssFallback&&Yn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return d&&p&&Ha(i,d.clone(i)),i}function v(n=" ",s=0){return w(sa,null,n,s)}function m(n,s){const a=w(Pt,null,n);return a.staticCount=s,a}function Sn(n="",s=!1){return s?(V(),lc(wn,null,n)):w(wn,null,n)}function Qs(n){return n==null||typeof n=="boolean"?w(wn):W(n)?w(ks,null,n.slice()):Bt(n)?cn(n):w(sa,null,String(n))}function cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Yn(n)}function _a(n,s){let a=0;const{shapeFlag:p}=n;if(s==null)s=null;else if(W(s))a=16;else if(typeof s=="object")if(p&65){const o=s.default;o&&(o._c&&(o._d=!1),_a(n,o()),o._c&&(o._d=!0));return}else{a=32;const o=s._;!o&&!Ke(s)?s._ctx=Fs:o===3&&Fs&&(Fs.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else z(s)?(s={default:s,_ctx:Fs},a=32):(s=String(s),p&64?(a=16,s=[v(s)]):a=8);n.children=s,n.shapeFlag|=a}function oc(...n){const s={};for(let a=0;a<n.length;a++){const p=n[a];for(const o in p)if(o==="class")s.class!==p.class&&(s.class=_([s.class,p.class]));else if(o==="style")s.style=_n([s.style,p.style]);else if(Kt(o)){const l=s[o],c=p[o];c&&l!==c&&!(W(l)&&l.includes(c))&&(s[o]=l?[].concat(l,c):c)}else o!==""&&(s[o]=p[o])}return s}function Ys(n,s,a,p=null){an(n,s,7,[a,p])}const cc=$e();let dc=0;function rc(n,s,a){const p=n.type,o=(s?s.appContext:n.appContext)||cc,l={uid:dc++,vnode:n,type:p,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),ids:s?s.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:He(p,o),emitsOptions:Be(p,o),emit:null,emitted:null,propsDefaults:cs,inheritAttrs:p.inheritAttrs,ctx:cs,data:cs,props:cs,attrs:cs,slots:cs,refs:cs,setupState:cs,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=s?s.root:l,l.emit=Go.bind(null,l),n.ce&&n.ce(l),l}let Cs=null;const ic=()=>Cs||Fs;let Gt,Ta;{const n=_t(),s=(a,p)=>{let o;return(o=n[a])||(o=n[a]=[]),o.push(p),l=>{o.length>1?o.forEach(c=>c(l)):o[0](l)}};Gt=s("__VUE_INSTANCE_SETTERS__",a=>Cs=a),Ta=s("__VUE_SSR_SETTERS__",a=>gt=a)}const At=n=>{const s=Cs;return Gt(n),n.scope.on(),()=>{n.scope.off(),Gt(s)}},vl=()=>{Cs&&Cs.scope.off(),Gt(null)};function np(n){return n.vnode.shapeFlag&4}let gt=!1;function uc(n,s=!1,a=!1){s&&Ta(s);const{props:p,children:o}=n.vnode,l=np(n);jo(n,p,l,s),Yo(n,o,a||s);const c=l?fc(n,s):void 0;return s&&Ta(!1),c}function fc(n,s){const a=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,No);const{setup:p}=a;if(p){fn();const o=n.setupContext=p.length>1?bc(n):null,l=At(n),c=Ct(p,n,0,[n.props,o]),e=Ql(c);if(mn(),l(),(e||n.sp)&&!dt(n)&&xe(n),e){if(c.then(vl,vl),s)return c.then(d=>{gl(n,d)}).catch(d=>{Xt(d,n,0)});n.asyncDep=c}else gl(n,c)}else tp(n)}function gl(n,s,a){z(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:es(s)&&(n.setupState=Se(s)),tp(n)}function tp(n,s,a){const p=n.type;n.render||(n.render=p.render||nn);{const o=At(n);fn();try{xo(n)}finally{mn(),o()}}}const mc={get(n,s){return ys(n,"get",""),n[s]}};function bc(n){const s=a=>{n.exposed=a||{}};return{attrs:new Proxy(n.attrs,mc),slots:n.slots,emit:n.emit,expose:s}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Se(Jp(n.exposed)),{get(s,a){if(a in s)return s[a];if(a in rt)return rt[a](n)},has(s,a){return a in s||a in rt}})):n.proxy}function vc(n,s=!0){return z(n)?n.displayName||n.name:n.name||s&&n.__name}function gc(n){return z(n)&&"__vccOpts"in n}const Bs=(n,s)=>ao(n,s,gt);function ap(n,s,a){try{$t(-1);const p=arguments.length;return p===2?es(s)&&!W(s)?Bt(s)?w(n,null,[s]):w(n,s):w(n,null,s):(p>3?a=Array.prototype.slice.call(arguments,2):p===3&&Bt(a)&&(a=[a]),w(n,s,a))}finally{$t(1)}}const hc="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{Ra=hl.createPolicy("vue",{createHTML:n=>n})}catch{}const lp=Ra?n=>Ra.createHTML(n):n=>n,yc="http://www.w3.org/2000/svg",kc="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,yl=on&&on.createElement("template"),Cc={insert:(n,s,a)=>{s.insertBefore(n,a||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,a,p)=>{const o=s==="svg"?on.createElementNS(yc,n):s==="mathml"?on.createElementNS(kc,n):a?on.createElement(n,{is:a}):on.createElement(n);return n==="select"&&p&&p.multiple!=null&&o.setAttribute("multiple",p.multiple),o},createText:n=>on.createTextNode(n),createComment:n=>on.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>on.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,a,p,o,l){const c=a?a.previousSibling:s.lastChild;if(o&&(o===l||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),a),!(o===l||!(o=o.nextSibling)););else{yl.innerHTML=lp(p==="svg"?`<svg>${n}</svg>`:p==="mathml"?`<math>${n}</math>`:n);const e=yl.content;if(p==="svg"||p==="mathml"){const d=e.firstChild;for(;d.firstChild;)e.appendChild(d.firstChild);e.removeChild(d)}s.insertBefore(e,a)}return[c?c.nextSibling:s.firstChild,a?a.previousSibling:s.lastChild]}},Ac=Symbol("_vtc");function Sc(n,s,a){const p=n[Ac];p&&(s=(s?[s,...p]:[...p]).join(" ")),s==null?n.removeAttribute("class"):a?n.setAttribute("class",s):n.className=s}const kl=Symbol("_vod"),wc=Symbol("_vsh"),Ec=Symbol(""),Tc=/(?:^|;)\s*display\s*:/;function Rc(n,s,a){const p=n.style,o=fs(a);let l=!1;if(a&&!o){if(s)if(fs(s))for(const c of s.split(";")){const e=c.slice(0,c.indexOf(":")).trim();a[e]==null&&xt(p,e,"")}else for(const c in s)a[c]==null&&xt(p,c,"");for(const c in a)c==="display"&&(l=!0),xt(p,c,a[c])}else if(o){if(s!==a){const c=p[Ec];c&&(a+=";"+c),p.cssText=a,l=Tc.test(a)}}else s&&n.removeAttribute("style");kl in n&&(n[kl]=l?p.display:"",n[wc]&&(p.display="none"))}const Cl=/\s*!important$/;function xt(n,s,a){if(W(a))a.forEach(p=>xt(n,s,p));else if(a==null&&(a=""),s.startsWith("--"))n.setProperty(s,a);else{const p=Oc(n,s);Cl.test(a)?n.setProperty(En(p),a.replace(Cl,""),"important"):n[p]=a}}const Al=["Webkit","Moz","ms"],ra={};function Oc(n,s){const a=ra[s];if(a)return a;let p=Rs(s);if(p!=="filter"&&p in n)return ra[s]=p;p=jt(p);for(let o=0;o<Al.length;o++){const l=Al[o]+p;if(l in n)return ra[s]=l}return s}const Sl="http://www.w3.org/1999/xlink";function wl(n,s,a,p,o,l=Ip(s)){p&&s.startsWith("xlink:")?a==null?n.removeAttributeNS(Sl,s.slice(6,s.length)):n.setAttributeNS(Sl,s,a):a==null||l&&!ae(a)?n.removeAttribute(s):n.setAttribute(s,l?"":tn(a)?String(a):a)}function El(n,s,a,p,o){if(s==="innerHTML"||s==="textContent"){a!=null&&(n[s]=s==="innerHTML"?lp(a):a);return}const l=n.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){const e=l==="OPTION"?n.getAttribute("value")||"":n.value,d=a==null?n.type==="checkbox"?"on":"":String(a);(e!==d||!("_value"in n))&&(n.value=d),a==null&&n.removeAttribute(s),n._value=a;return}let c=!1;if(a===""||a==null){const e=typeof n[s];e==="boolean"?a=ae(a):a==null&&e==="string"?(a="",c=!0):e==="number"&&(a=0,c=!0)}try{n[s]=a}catch{}c&&n.removeAttribute(o||s)}function xn(n,s,a,p){n.addEventListener(s,a,p)}function Ic(n,s,a,p){n.removeEventListener(s,a,p)}const Tl=Symbol("_vei");function Pc(n,s,a,p,o=null){const l=n[Tl]||(n[Tl]={}),c=l[s];if(p&&c)c.value=p;else{const[e,d]=Nc(s);if(p){const u=l[s]=Fc(p,o);xn(n,e,u,d)}else c&&(Ic(n,e,c,d),l[s]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function Nc(n){let s;if(Rl.test(n)){s={};let p;for(;p=n.match(Rl);)n=n.slice(0,n.length-p[0].length),s[p[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):En(n.slice(2)),s]}let ia=0;const xc=Promise.resolve(),qc=()=>ia||(xc.then(()=>ia=0),ia=Date.now());function Fc(n,s){const a=p=>{if(!p._vts)p._vts=Date.now();else if(p._vts<=a.attached)return;an(Mc(p,a.value),s,5,[p])};return a.value=n,a.attached=qc(),a}function Mc(n,s){if(W(s)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},s.map(p=>o=>!o._stopped&&p&&p(o))}else return s}const Ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dc=(n,s,a,p,o,l)=>{const c=o==="svg";s==="class"?Sc(n,p,c):s==="style"?Rc(n,a,p):Kt(s)?qa(s)||Pc(n,s,a,p,l):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Vc(n,s,p,c))?(El(n,s,p),!n.tagName.includes("-")&&(s==="value"||s==="checked"||s==="selected")&&wl(n,s,p,c,l,s!=="value")):n._isVueCE&&($c(n,s)||n._def.__asyncLoader&&(/[A-Z]/.test(s)||!fs(p)))?El(n,Rs(s),p,l,s):(s==="true-value"?n._trueValue=p:s==="false-value"&&(n._falseValue=p),wl(n,s,p,c))};function Vc(n,s,a,p){if(p)return!!(s==="innerHTML"||s==="textContent"||s in n&&Ol(s)&&z(a));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="autocorrect"||s==="sandbox"&&n.tagName==="IFRAME"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ol(s)&&fs(a)?!1:s in n}function $c(n,s){const a=n._def.props;if(!a)return!1;const p=Rs(s);return Array.isArray(a)?a.some(o=>Rs(o)===p):Object.keys(a).some(o=>Rs(o)===p)}const Lt=n=>{const s=n.props["onUpdate:modelValue"]||!1;return W(s)?a=>Rt(s,a):s};function Bc(n){n.target.composing=!0}function Il(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const zn=Symbol("_assign");function Pl(n,s,a){return s&&(n=n.trim()),a&&(n=zt(n)),n}const ws={created(n,{modifiers:{lazy:s,trim:a,number:p}},o){n[zn]=Lt(o);const l=p||o.props&&o.props.type==="number";xn(n,s?"change":"input",c=>{c.target.composing||n[zn](Pl(n.value,a,l))}),(a||l)&&xn(n,"change",()=>{n.value=Pl(n.value,a,l)}),s||(xn(n,"compositionstart",Bc),xn(n,"compositionend",Il),xn(n,"change",Il))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,oldValue:a,modifiers:{lazy:p,trim:o,number:l}},c){if(n[zn]=Lt(c),n.composing)return;const e=(l||n.type==="number")&&!/^0\d/.test(n.value)?zt(n.value):n.value,d=s??"";e!==d&&(document.activeElement===n&&n.type!=="range"&&(p&&s===a||o&&n.value.trim()===d)||(n.value=d))}},Nl={deep:!0,created(n,{value:s,modifiers:{number:a}},p){const o=Wt(s);xn(n,"change",()=>{const l=Array.prototype.filter.call(n.options,c=>c.selected).map(c=>a?zt(Ut(c)):Ut(c));n[zn](n.multiple?o?new Set(l):l:l[0]),n._assigning=!0,Ka(()=>{n._assigning=!1})}),n[zn]=Lt(p)},mounted(n,{value:s}){xl(n,s)},beforeUpdate(n,s,a){n[zn]=Lt(a)},updated(n,{value:s}){n._assigning||xl(n,s)}};function xl(n,s){const a=n.multiple,p=W(s);if(!(a&&!p&&!Wt(s))){for(let o=0,l=n.options.length;o<l;o++){const c=n.options[o],e=Ut(c);if(a)if(p){const d=typeof e;d==="string"||d==="number"?c.selected=s.some(u=>String(u)===String(e)):c.selected=Np(s,e)>-1}else c.selected=s.has(e);else if(kt(Ut(c),s)){n.selectedIndex!==o&&(n.selectedIndex=o);return}}!a&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ut(n){return"_value"in n?n._value:n.value}const Gc=["ctrl","shift","alt","meta"],Lc={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,s)=>Gc.some(a=>n[`${a}Key`]&&!s.includes(a))},ql=(n,s)=>{if(!n)return n;const a=n._withMods||(n._withMods={}),p=s.join(".");return a[p]||(a[p]=(o,...l)=>{for(let c=0;c<s.length;c++){const e=Lc[s[c]];if(e&&e(o,s))return}return n(o,...l)})},Uc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fl=(n,s)=>{const a=n._withKeys||(n._withKeys={}),p=s.join(".");return a[p]||(a[p]=o=>{if(!("key"in o))return;const l=En(o.key);if(s.some(c=>c===l||Uc[c]===l))return n(o)})},Kc=hs({patchProp:Dc},Cc);let Ml;function Wc(){return Ml||(Ml=Jo(Kc))}const Hc=(...n)=>{const s=Wc().createApp(...n),{mount:a}=s;return s.mount=p=>{const o=zc(p);if(!o)return;const l=s._component;!z(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const c=a(o,!1,jc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),c},s};function jc(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function zc(n){return fs(n)?document.querySelector(n):n}const Q=(n,s)=>{const a=n.__vccOpts||n;for(const[p,o]of s)a[p]=o;return a},_c={name:"SearchBox",data(){return{query:"",isFocused:!1,showResults:!1,selectedIndex:0,results:[]}},computed:{searchIndex(){return[{title:"DFT 基本原理",path:"/theory",icon:"📐",keywords:"dft 密度泛函 theory 理论 hohenberg kohn"},{title:"交换关联泛函",path:"/theory",icon:"📐",keywords:"lda gga pbe hse 泛函 functional"},{title:"赝势与基组",path:"/theory",icon:"📐",keywords:"赝势 paw pseudopotential 基组 plane wave"},{title:"K 点采样",path:"/theory",icon:"📐",keywords:"kpoint k点 布里渊区 brillouin mesh"},{title:"SCF 迭代",path:"/theory",icon:"📐",keywords:"scf 自洽场 迭代 self consistent"},{title:"INCAR 文件",path:"/input",icon:"📁",keywords:"incar 参数 设置 encut ediff ibrion isif"},{title:"POSCAR 文件",path:"/input",icon:"📁",keywords:"poscar 结构 晶格 lattice 坐标 direct cartesian"},{title:"KPOINTS 文件",path:"/input",icon:"📁",keywords:"kpoints 网格 mesh gamma monkhorst"},{title:"结构优化",path:"/tasks",icon:"📊",keywords:"relax 优化 弛豫 ion optimization"},{title:"态密度 DOS",path:"/tasks",icon:"📊",keywords:"dos 密度 states density of states"},{title:"能带结构",path:"/tasks",icon:"📊",keywords:"band 能带 bandstructure high symmetry"},{title:"表面计算",path:"/tasks",icon:"🧊",keywords:"surface 表面 slab 模型 adsorption 吸附"},{title:"缺陷计算",path:"/tasks",icon:"💎",keywords:"defect 缺陷 vacancy 空位 interstitial 间隙"},{title:"声子计算",path:"/tasks",icon:"🔊",keywords:"phonon 声子 phonopy 振动 frequency 频率"},{title:"形成能计算",path:"/tasks",icon:"🧪",keywords:"formation 形成能 energy thermodynamics 热力学"},{title:"吸附能计算",path:"/tasks",icon:"🧲",keywords:"adsorption 吸附 binding 结合 energy 能量"},{title:"输出文件解读",path:"/output",icon:"📋",keywords:"outcar oszicar contcar 输出 output 结果"},{title:"收敛性测试",path:"/output",icon:"🎯",keywords:"convergence 收敛 encut kpoint 测试 test"},{title:"SCF 不收敛",path:"/errors",icon:"🚨",keywords:"scf 不收敛 convergence 失败 error 错误"},{title:"DENTET 错误",path:"/errors",icon:"🚨",keywords:"dentet nbands 能带 band 错误 error"},{title:"ZBRENT 错误",path:"/errors",icon:"🚨",keywords:"zbrent 线搜索 搜索失败 error"},{title:"内存不足",path:"/errors",icon:"🚨",keywords:"memory 内存 oom out of killed"},{title:"VESTA 工具",path:"/tools",icon:"🛠️",keywords:"vesta 可视化 visualization 结构 structure"},{title:"VASPKIT 工具",path:"/tools",icon:"🛠️",keywords:"vaspkit 后处理 post process 处理工具"},{title:"pymatgen",path:"/tools",icon:"🛠️",keywords:"pymatgen python 材料 material 分析 analysis"},{title:"phonopy",path:"/tools",icon:"🛠️",keywords:"phonopy 声子 phonon 振动 vibration"},{title:"ENCUT 计算器",path:"/tools/calculator",icon:"🔧",keywords:"encut 截断能 cutoff 计算器 calculator"},{title:"K 点生成器",path:"/tools/calculator",icon:"🔧",keywords:"kpoint k点 生成器 generator 网格 mesh"}]}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(n){(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),this.$refs.searchInput.focus())},search(){if(!this.query.trim()){this.results=[],this.showResults=!1;return}const n=this.query.toLowerCase();this.results=this.searchIndex.filter(s=>s.title.toLowerCase().includes(n)||s.keywords.toLowerCase().includes(n)).slice(0,8),this.showResults=!0,this.selectedIndex=0},navigateTo(n){this.$router.push(n.path),this.close()},navigateToFirst(){this.results.length>0&&this.navigateTo(this.results[this.selectedIndex])},handleBlur(){setTimeout(()=>{this.isFocused=!1,this.showResults=!1},200)},close(){this.query="",this.showResults=!1,this.$refs.searchInput.blur()}}},Zc={class:"search-container"},Yc={key:0,class:"shortcut"},Xc={key:0,class:"search-results"},Jc=["onClick","onMouseenter"],Qc={class:"result-icon"},sd={class:"result-content"},nd={class:"result-title"},td={class:"result-path"},ad={key:1,class:"search-results"},ld={class:"no-results"};function ed(n,s,a,p,o,l){return V(),$("div",Zc,[t("div",{class:_(["search-box",{active:o.isFocused}])},[s[7]||(s[7]=t("svg",{class:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[t("circle",{cx:"11",cy:"11",r:"8"}),t("path",{d:"m21 21-4.35-4.35"})],-1)),gs(t("input",{ref:"searchInput","onUpdate:modelValue":s[0]||(s[0]=c=>o.query=c),type:"text",placeholder:"搜索内容... (Ctrl+K)",onFocus:s[1]||(s[1]=c=>o.isFocused=!0),onBlur:s[2]||(s[2]=(...c)=>l.handleBlur&&l.handleBlur(...c)),onInput:s[3]||(s[3]=(...c)=>l.search&&l.search(...c)),onKeydown:[s[4]||(s[4]=Fl((...c)=>l.close&&l.close(...c),["escape"])),s[5]||(s[5]=Fl((...c)=>l.navigateToFirst&&l.navigateToFirst(...c),["enter"]))]},null,544),[[ws,o.query]]),o.isFocused?(V(),$("button",{key:1,class:"close-btn",onClick:s[6]||(s[6]=(...c)=>l.close&&l.close(...c))},"×")):(V(),$("kbd",Yc,"Ctrl+K"))],2),o.showResults&&o.results.length>0?(V(),$("div",Xc,[(V(!0),$(ks,null,Nn(o.results,(c,e)=>(V(),$("div",{key:e,class:_(["search-result-item",{active:e===o.selectedIndex}]),onClick:d=>l.navigateTo(c),onMouseenter:d=>o.selectedIndex=e},[t("div",Qc,Z(c.icon),1),t("div",sd,[t("div",nd,Z(c.title),1),t("div",td,Z(c.path),1)])],42,Jc))),128))])):Sn("",!0),o.showResults&&o.query&&o.results.length===0?(V(),$("div",ad,[t("div",ld,[s[8]||(s[8]=t("div",{class:"no-results-icon"},"🔍",-1)),t("div",null,'未找到 "'+Z(o.query)+'" 的相关内容',1)])])):Sn("",!0)])}const pd=Q(_c,[["render",ed],["__scopeId","data-v-8ba45772"]]),od={name:"HeaderNav",components:{SearchBox:pd},methods:{toggleSidebar(){this.$emit("toggle-sidebar")}}},cd={class:"hdr"},dd={class:"hdr-nav"},rd=["onClick"],id=["onClick"],ud=["onClick"],fd=["onClick"],md=["onClick"],bd=["onClick"];function vd(n,s,a,p,o,l){const c=J("router-link"),e=J("SearchBox");return V(),$("header",cd,[t("button",{class:"mtog",onClick:s[0]||(s[0]=(...d)=>l.toggleSidebar&&l.toggleSidebar(...d))},"☰"),w(c,{to:"/",class:"hdr-logo"},{default:R(()=>[...s[1]||(s[1]=[t("div",{class:"ico"},"V",-1),t("div",{class:"txt"},[t("span",null,"VASP"),v("Learn")],-1)])]),_:1}),w(e),t("nav",dd,[w(c,{to:"/",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"首页",10,rd)]),_:1}),w(c,{to:"/theory",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"理论",10,id)]),_:1}),w(c,{to:"/input",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"输入文件",10,ud)]),_:1}),w(c,{to:"/output",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"结果分析",10,fd)]),_:1}),w(c,{to:"/errors",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"错误诊断",10,md)]),_:1}),w(c,{to:"/tools",custom:""},{default:R(({navigate:d,isActive:u})=>[t("button",{onClick:d,class:_({active:u})},"工具",10,bd)]),_:1})])])}const gd=Q(od,[["render",vd],["__scopeId","data-v-95f59a4e"]]),hd={name:"SidebarNav",props:{isOpen:Boolean},methods:{closeSidebar(){this.$emit("close-sidebar")}}},yd={class:"sb-sec"},kd=["onClick"],Cd=["onClick"],Ad=["onClick"],Sd=["onClick"],wd=["onClick"],Ed=["onClick"],Td=["onClick"],Rd={class:"sb-sec"},Od=["onClick"],Id=["onClick"],Pd=["onClick"],Nd=["onClick"],xd=["onClick"],qd=["onClick"],Fd={class:"sb-sec"},Md=["onClick"],Dd=["onClick"],Vd={class:"sb-sec"},$d=["onClick"],Bd=["onClick"],Gd=["onClick"],Ld=["onClick"],Ud=["onClick"],Kd=["onClick"],Wd={class:"sb-sec"},Hd=["onClick"],jd=["onClick"];function zd(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",null,[t("div",{class:_(["sbov",{show:a.isOpen}]),onClick:s[0]||(s[0]=(...e)=>l.closeSidebar&&l.closeSidebar(...e))},null,2),t("aside",{class:_(["sb",{open:a.isOpen}])},[t("div",yd,[s[8]||(s[8]=t("div",{class:"sb-lbl"},"入门指南",-1)),w(c,{to:"/theory",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[1]||(s[1]=[t("span",{class:"ic"},"📐",-1),v("理论基础 ",-1)])],10,kd)]),_:1}),w(c,{to:"/input",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[2]||(s[2]=[t("span",{class:"ic"},"📁",-1),v("输入文件 ",-1)])],10,Cd)]),_:1}),w(c,{to:"/tasks",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[3]||(s[3]=[t("span",{class:"ic"},"📊",-1),v("计算任务 ",-1)])],10,Ad)]),_:1}),w(c,{to:"/surface",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[4]||(s[4]=[t("span",{class:"ic"},"🧊",-1),v("表面计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Sd)]),_:1}),w(c,{to:"/defect",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[5]||(s[5]=[t("span",{class:"ic"},"💎",-1),v("缺陷计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,wd)]),_:1}),w(c,{to:"/phonon",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[6]||(s[6]=[t("span",{class:"ic"},"🔊",-1),v("声子计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Ed)]),_:1}),w(c,{to:"/thermoelectric",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[7]||(s[7]=[t("span",{class:"ic"},"⚡",-1),v("热电计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Td)]),_:1})]),t("div",Rd,[s[15]||(s[15]=t("div",{class:"sb-lbl"},"Gaussian 教程",-1)),w(c,{to:"/gaussian",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[9]||(s[9]=[t("span",{class:"ic"},"🔬",-1),v("Gaussian 概述",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Od)]),_:1}),w(c,{to:"/gaussian/install",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[10]||(s[10]=[t("span",{class:"ic"},"📦",-1),v("安装配置 ",-1)])],10,Id)]),_:1}),w(c,{to:"/gaussian/input",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[11]||(s[11]=[t("span",{class:"ic"},"📝",-1),v("输入文件 ",-1)])],10,Pd)]),_:1}),w(c,{to:"/gaussian/tasks",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[12]||(s[12]=[t("span",{class:"ic"},"📊",-1),v("计算任务 ",-1)])],10,Nd)]),_:1}),w(c,{to:"/gaussian/output",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[13]||(s[13]=[t("span",{class:"ic"},"📋",-1),v("输出分析 ",-1)])],10,xd)]),_:1}),w(c,{to:"/gaussian/vasp-compare",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[14]||(s[14]=[t("span",{class:"ic"},"🔄",-1),v("与 VASP 对比 ",-1)])],10,qd)]),_:1})]),t("div",Fd,[s[18]||(s[18]=t("div",{class:"sb-lbl"},"结果分析",-1)),w(c,{to:"/output",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[16]||(s[16]=[t("span",{class:"ic"},"📋",-1),v("输出文件 ",-1)])],10,Md)]),_:1}),w(c,{to:"/convergence",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[17]||(s[17]=[t("span",{class:"ic"},"🎯",-1),v("收敛性测试 ",-1)])],10,Dd)]),_:1})]),t("div",Vd,[s[25]||(s[25]=t("div",{class:"sb-lbl"},"错误诊断",-1)),w(c,{to:"/errors",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[19]||(s[19]=[t("span",{class:"ic"},"🚨",-1),v("诊断总览",-1),t("span",{class:"bd bd-hot"},"重要",-1)])],10,$d)]),_:1}),w(c,{to:"/errors/scf",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[20]||(s[20]=[t("span",{class:"ic"},"⚡",-1),v("SCF 不收敛",-1),t("span",{class:"bd bd-hot"},"高频",-1)])],10,Bd)]),_:1}),w(c,{to:"/errors/ion",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[21]||(s[21]=[t("span",{class:"ic"},"💥",-1),v("离子步问题 ",-1)])],10,Gd)]),_:1}),w(c,{to:"/errors/memory",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[22]||(s[22]=[t("span",{class:"ic"},"💾",-1),v("内存与性能 ",-1)])],10,Ld)]),_:1}),w(c,{to:"/errors/files",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[23]||(s[23]=[t("span",{class:"ic"},"📂",-1),v("文件错误 ",-1)])],10,Ud)]),_:1}),w(c,{to:"/errors/output",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[24]||(s[24]=[t("span",{class:"ic"},"🔍",-1),v("输出异常 ",-1)])],10,Kd)]),_:1})]),t("div",Wd,[s[28]||(s[28]=t("div",{class:"sb-lbl"},"工具与资源",-1)),w(c,{to:"/tools",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[26]||(s[26]=[t("span",{class:"ic"},"🛠️",-1),v("辅助工具 ",-1)])],10,Hd)]),_:1}),w(c,{to:"/cheatsheet",custom:""},{default:R(({navigate:e,isActive:d})=>[t("div",{class:_(["sb-it",{active:d}]),onClick:e},[...s[27]||(s[27]=[t("span",{class:"ic"},"📝",-1),v("速查手册 ",-1)])],10,jd)]),_:1})])],2)])}const _d=Q(hd,[["render",zd],["__scopeId","data-v-82874d31"]]),Zd={name:"DisclaimerBanner"},Yd={class:"disclaimer"};function Xd(n,s,a,p,o,l){return V(),$("div",Yd,[...s[0]||(s[0]=[t("div",{class:"disclaimer-content"},[t("span",{class:"disclaimer-icon"},"⚠️"),t("p",null,[t("strong",null,"免责声明："),v("本站内容大部分由 AI 生成，仅供参考学习使用。如有疑问，请以官方文档或专业教材为准。")])],-1)])])}const Jd=Q(Zd,[["render",Xd],["__scopeId","data-v-c0f1e3e7"]]),Qd={name:"App",components:{HeaderNav:gd,SidebarNav:_d,DisclaimerBanner:Jd},data(){return{sidebarOpen:!1}},methods:{toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},closeSidebar(){this.sidebarOpen=!1}},watch:{$route(){this.sidebarOpen=!1}}},sr={id:"app"},nr={class:"mn"};function tr(n,s,a,p,o,l){const c=J("HeaderNav"),e=J("SidebarNav"),d=J("router-view"),u=J("DisclaimerBanner");return V(),$("div",sr,[w(c,{onToggleSidebar:l.toggleSidebar},null,8,["onToggleSidebar"]),w(e,{isOpen:o.sidebarOpen,onCloseSidebar:l.closeSidebar},null,8,["isOpen","onCloseSidebar"]),t("main",nr,[w(d)]),w(u)])}const ar=Q(Qd,[["render",tr]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ln=typeof document<"u";function ep(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lr(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ep(n.default)}const ns=Object.assign;function ua(n,s){const a={};for(const p in s){const o=s[p];a[p]=Us(o)?o.map(n):n(o)}return a}const ut=()=>{},Us=Array.isArray;function Dl(n,s){const a={};for(const p in n)a[p]=p in s?s[p]:n[p];return a}const pp=/#/g,er=/&/g,pr=/\//g,or=/=/g,cr=/\?/g,op=/\+/g,dr=/%5B/g,rr=/%5D/g,cp=/%5E/g,ir=/%60/g,dp=/%7B/g,ur=/%7C/g,rp=/%7D/g,fr=/%20/g;function Za(n){return n==null?"":encodeURI(""+n).replace(ur,"|").replace(dr,"[").replace(rr,"]")}function mr(n){return Za(n).replace(dp,"{").replace(rp,"}").replace(cp,"^")}function Oa(n){return Za(n).replace(op,"%2B").replace(fr,"+").replace(pp,"%23").replace(er,"%26").replace(ir,"`").replace(dp,"{").replace(rp,"}").replace(cp,"^")}function br(n){return Oa(n).replace(or,"%3D")}function vr(n){return Za(n).replace(pp,"%23").replace(cr,"%3F")}function gr(n){return vr(n).replace(pr,"%2F")}function ht(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const hr=/\/$/,yr=n=>n.replace(hr,"");function fa(n,s,a="/"){let p,o={},l="",c="";const e=s.indexOf("#");let d=s.indexOf("?");return d=e>=0&&d>e?-1:d,d>=0&&(p=s.slice(0,d),l=s.slice(d,e>0?e:s.length),o=n(l.slice(1))),e>=0&&(p=p||s.slice(0,e),c=s.slice(e,s.length)),p=Sr(p??s,a),{fullPath:p+l+c,path:p,query:o,hash:ht(c)}}function kr(n,s){const a=s.query?n(s.query):"";return s.path+(a&&"?")+a+(s.hash||"")}function Vl(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function Cr(n,s,a){const p=s.matched.length-1,o=a.matched.length-1;return p>-1&&p===o&&Xn(s.matched[p],a.matched[o])&&ip(s.params,a.params)&&n(s.query)===n(a.query)&&s.hash===a.hash}function Xn(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function ip(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(var a in n)if(!Ar(n[a],s[a]))return!1;return!0}function Ar(n,s){return Us(n)?$l(n,s):Us(s)?$l(s,n):(n==null?void 0:n.valueOf())===(s==null?void 0:s.valueOf())}function $l(n,s){return Us(s)?n.length===s.length&&n.every((a,p)=>a===s[p]):n.length===1&&n[0]===s}function Sr(n,s){if(n.startsWith("/"))return n;if(!n)return s;const a=s.split("/"),p=n.split("/"),o=p[p.length-1];(o===".."||o===".")&&p.push("");let l=a.length-1,c,e;for(c=0;c<p.length;c++)if(e=p[c],e!==".")if(e==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+p.slice(c).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ia=function(n){return n.pop="pop",n.push="push",n}({}),ma=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function wr(n){if(!n)if(Ln){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),yr(n)}const Er=/^[^#]+#/;function Tr(n,s){return n.replace(Er,"#")+s}function Rr(n,s){const a=document.documentElement.getBoundingClientRect(),p=n.getBoundingClientRect();return{behavior:s.behavior,left:p.left-a.left-(s.left||0),top:p.top-a.top-(s.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function Or(n){let s;if("el"in n){const a=n.el,p=typeof a=="string"&&a.startsWith("#"),o=typeof a=="string"?p?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!o)return;s=Rr(o,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.scrollX,s.top!=null?s.top:window.scrollY)}function Bl(n,s){return(history.state?history.state.position-s:-1)+n}const Pa=new Map;function Ir(n,s){Pa.set(n,s)}function Pr(n){const s=Pa.get(n);return Pa.delete(n),s}function Nr(n){return typeof n=="string"||n&&typeof n=="object"}function up(n){return typeof n=="string"||typeof n=="symbol"}let us=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const fp=Symbol("");us.MATCHER_NOT_FOUND+"",us.NAVIGATION_GUARD_REDIRECT+"",us.NAVIGATION_ABORTED+"",us.NAVIGATION_CANCELLED+"",us.NAVIGATION_DUPLICATED+"";function Jn(n,s){return ns(new Error,{type:n,[fp]:!0},s)}function pn(n,s){return n instanceof Error&&fp in n&&(s==null||!!(n.type&s))}const xr=["params","query","hash"];function qr(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const s={};for(const a of xr)a in n&&(s[a]=n[a]);return JSON.stringify(s,null,2)}function Fr(n){const s={};if(n===""||n==="?")return s;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let p=0;p<a.length;++p){const o=a[p].replace(op," "),l=o.indexOf("="),c=ht(l<0?o:o.slice(0,l)),e=l<0?null:ht(o.slice(l+1));if(c in s){let d=s[c];Us(d)||(d=s[c]=[d]),d.push(e)}else s[c]=e}return s}function Gl(n){let s="";for(let a in n){const p=n[a];if(a=br(a),p==null){p!==void 0&&(s+=(s.length?"&":"")+a);continue}(Us(p)?p.map(o=>o&&Oa(o)):[p&&Oa(p)]).forEach(o=>{o!==void 0&&(s+=(s.length?"&":"")+a,o!=null&&(s+="="+o))})}return s}function Mr(n){const s={};for(const a in n){const p=n[a];p!==void 0&&(s[a]=Us(p)?p.map(o=>o==null?null:""+o):p==null?p:""+p)}return s}const Dr=Symbol(""),Ll=Symbol(""),Ya=Symbol(""),mp=Symbol(""),Na=Symbol("");function at(){let n=[];function s(p){return n.push(p),()=>{const o=n.indexOf(p);o>-1&&n.splice(o,1)}}function a(){n=[]}return{add:s,list:()=>n.slice(),reset:a}}function An(n,s,a,p,o,l=c=>c()){const c=p&&(p.enterCallbacks[o]=p.enterCallbacks[o]||[]);return()=>new Promise((e,d)=>{const u=h=>{h===!1?d(Jn(us.NAVIGATION_ABORTED,{from:a,to:s})):h instanceof Error?d(h):Nr(h)?d(Jn(us.NAVIGATION_GUARD_REDIRECT,{from:s,to:h})):(c&&p.enterCallbacks[o]===c&&typeof h=="function"&&c.push(h),e())},i=l(()=>n.call(p&&p.instances[o],s,a,u));let b=Promise.resolve(i);n.length<3&&(b=b.then(u)),b.catch(h=>d(h))})}function ba(n,s,a,p,o=l=>l()){const l=[];for(const c of n)for(const e in c.components){let d=c.components[e];if(!(s!=="beforeRouteEnter"&&!c.instances[e]))if(ep(d)){const u=(d.__vccOpts||d)[s];u&&l.push(An(u,a,p,c,e,o))}else{let u=d();l.push(()=>u.then(i=>{if(!i)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const b=lr(i)?i.default:i;c.mods[e]=i,c.components[e]=b;const h=(b.__vccOpts||b)[s];return h&&An(h,a,p,c,e,o)()}))}}return l}function Vr(n,s){const a=[],p=[],o=[],l=Math.max(s.matched.length,n.matched.length);for(let c=0;c<l;c++){const e=s.matched[c];e&&(n.matched.find(u=>Xn(u,e))?p.push(e):a.push(e));const d=n.matched[c];d&&(s.matched.find(u=>Xn(u,d))||o.push(d))}return[a,p,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $r=()=>location.protocol+"//"+location.host;function bp(n,s){const{pathname:a,search:p,hash:o}=s,l=n.indexOf("#");if(l>-1){let c=o.includes(n.slice(l))?n.slice(l).length:1,e=o.slice(c);return e[0]!=="/"&&(e="/"+e),Vl(e,"")}return Vl(a,n)+p+o}function Br(n,s,a,p){let o=[],l=[],c=null;const e=({state:h})=>{const y=bp(n,location),M=a.value,P=s.value;let j=0;if(h){if(a.value=y,s.value=h,c&&c===M){c=null;return}j=P?h.position-P.position:0}else p(y);o.forEach(K=>{K(a.value,M,{delta:j,type:Ia.pop,direction:j?j>0?ma.forward:ma.back:ma.unknown})})};function d(){c=a.value}function u(h){o.push(h);const y=()=>{const M=o.indexOf(h);M>-1&&o.splice(M,1)};return l.push(y),y}function i(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ns({},h.state,{scroll:ta()}),"")}}function b(){for(const h of l)h();l=[],window.removeEventListener("popstate",e),window.removeEventListener("pagehide",i),document.removeEventListener("visibilitychange",i)}return window.addEventListener("popstate",e),window.addEventListener("pagehide",i),document.addEventListener("visibilitychange",i),{pauseListeners:d,listen:u,destroy:b}}function Ul(n,s,a,p=!1,o=!1){return{back:n,current:s,forward:a,replaced:p,position:window.history.length,scroll:o?ta():null}}function Gr(n){const{history:s,location:a}=window,p={value:bp(n,a)},o={value:s.state};o.value||l(p.value,{back:null,current:p.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(d,u,i){const b=n.indexOf("#"),h=b>-1?(a.host&&document.querySelector("base")?n:n.slice(b))+d:$r()+n+d;try{s[i?"replaceState":"pushState"](u,"",h),o.value=u}catch(y){console.error(y),a[i?"replace":"assign"](h)}}function c(d,u){l(d,ns({},s.state,Ul(o.value.back,d,o.value.forward,!0),u,{position:o.value.position}),!0),p.value=d}function e(d,u){const i=ns({},o.value,s.state,{forward:d,scroll:ta()});l(i.current,i,!0),l(d,ns({},Ul(p.value,d,null),{position:i.position+1},u),!1),p.value=d}return{location:p,state:o,push:e,replace:c}}function Lr(n){n=wr(n);const s=Gr(n),a=Br(n,s.state,s.location,s.replace);function p(l,c=!0){c||a.pauseListeners(),history.go(l)}const o=ns({location:"",base:n,go:p,createHref:Tr.bind(null,n)},s,a);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>s.state.value}),o}let qn=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ms=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ms||{});const Ur={type:qn.Static,value:""},Kr=/[a-zA-Z0-9_]/;function Wr(n){if(!n)return[[]];if(n==="/")return[[Ur]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(y){throw new Error(`ERR (${a})/"${u}": ${y}`)}let a=ms.Static,p=a;const o=[];let l;function c(){l&&o.push(l),l=[]}let e=0,d,u="",i="";function b(){u&&(a===ms.Static?l.push({type:qn.Static,value:u}):a===ms.Param||a===ms.ParamRegExp||a===ms.ParamRegExpEnd?(l.length>1&&(d==="*"||d==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:qn.Param,value:u,regexp:i,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):s("Invalid state to consume buffer"),u="")}function h(){u+=d}for(;e<n.length;){if(d=n[e++],d==="\\"&&a!==ms.ParamRegExp){p=a,a=ms.EscapeNext;continue}switch(a){case ms.Static:d==="/"?(u&&b(),c()):d===":"?(b(),a=ms.Param):h();break;case ms.EscapeNext:h(),a=p;break;case ms.Param:d==="("?a=ms.ParamRegExp:Kr.test(d)?h():(b(),a=ms.Static,d!=="*"&&d!=="?"&&d!=="+"&&e--);break;case ms.ParamRegExp:d===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+d:a=ms.ParamRegExpEnd:i+=d;break;case ms.ParamRegExpEnd:b(),a=ms.Static,d!=="*"&&d!=="?"&&d!=="+"&&e--,i="";break;default:s("Unknown state");break}}return a===ms.ParamRegExp&&s(`Unfinished custom RegExp for param "${u}"`),b(),c(),o}const Kl="[^/]+?",Hr={sensitive:!1,strict:!1,start:!0,end:!0};var Es=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Es||{});const jr=/[.+*?^${}()[\]/\\]/g;function zr(n,s){const a=ns({},Hr,s),p=[];let o=a.start?"^":"";const l=[];for(const u of n){const i=u.length?[]:[Es.Root];a.strict&&!u.length&&(o+="/");for(let b=0;b<u.length;b++){const h=u[b];let y=Es.Segment+(a.sensitive?Es.BonusCaseSensitive:0);if(h.type===qn.Static)b||(o+="/"),o+=h.value.replace(jr,"\\$&"),y+=Es.Static;else if(h.type===qn.Param){const{value:M,repeatable:P,optional:j,regexp:K}=h;l.push({name:M,repeatable:P,optional:j});const q=K||Kl;if(q!==Kl){y+=Es.BonusCustomRegExp;try{`${q}`}catch(D){throw new Error(`Invalid custom RegExp for param "${M}" (${q}): `+D.message)}}let B=P?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;b||(B=j&&u.length<2?`(?:/${B})`:"/"+B),j&&(B+="?"),o+=B,y+=Es.Dynamic,j&&(y+=Es.BonusOptional),P&&(y+=Es.BonusRepeatable),q===".*"&&(y+=Es.BonusWildcard)}i.push(y)}p.push(i)}if(a.strict&&a.end){const u=p.length-1;p[u][p[u].length-1]+=Es.BonusStrict}a.strict||(o+="/?"),a.end?o+="$":a.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const c=new RegExp(o,a.sensitive?"":"i");function e(u){const i=u.match(c),b={};if(!i)return null;for(let h=1;h<i.length;h++){const y=i[h]||"",M=l[h-1];b[M.name]=y&&M.repeatable?y.split("/"):y}return b}function d(u){let i="",b=!1;for(const h of n){(!b||!i.endsWith("/"))&&(i+="/"),b=!1;for(const y of h)if(y.type===qn.Static)i+=y.value;else if(y.type===qn.Param){const{value:M,repeatable:P,optional:j}=y,K=M in u?u[M]:"";if(Us(K)&&!P)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const q=Us(K)?K.join("/"):K;if(!q)if(j)h.length<2&&(i.endsWith("/")?i=i.slice(0,-1):b=!0);else throw new Error(`Missing required param "${M}"`);i+=q}}return i||"/"}return{re:c,score:p,keys:l,parse:e,stringify:d}}function _r(n,s){let a=0;for(;a<n.length&&a<s.length;){const p=s[a]-n[a];if(p)return p;a++}return n.length<s.length?n.length===1&&n[0]===Es.Static+Es.Segment?-1:1:n.length>s.length?s.length===1&&s[0]===Es.Static+Es.Segment?1:-1:0}function vp(n,s){let a=0;const p=n.score,o=s.score;for(;a<p.length&&a<o.length;){const l=_r(p[a],o[a]);if(l)return l;a++}if(Math.abs(o.length-p.length)===1){if(Wl(p))return 1;if(Wl(o))return-1}return o.length-p.length}function Wl(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const Zr={strict:!1,end:!0,sensitive:!1};function Yr(n,s,a){const p=zr(Wr(n.path),a),o=ns(p,{record:n,parent:s,children:[],alias:[]});return s&&!o.record.aliasOf==!s.record.aliasOf&&s.children.push(o),o}function Xr(n,s){const a=[],p=new Map;s=Dl(Zr,s);function o(b){return p.get(b)}function l(b,h,y){const M=!y,P=jl(b);P.aliasOf=y&&y.record;const j=Dl(s,b),K=[P];if("alias"in b){const D=typeof b.alias=="string"?[b.alias]:b.alias;for(const os of D)K.push(jl(ns({},P,{components:y?y.record.components:P.components,path:os,aliasOf:y?y.record:P})))}let q,B;for(const D of K){const{path:os}=D;if(h&&os[0]!=="/"){const vs=h.record.path,is=vs[vs.length-1]==="/"?"":"/";D.path=h.record.path+(os&&is+os)}if(q=Yr(D,h,j),y?y.alias.push(q):(B=B||q,B!==q&&B.alias.push(q),M&&b.name&&!zl(q)&&c(b.name)),gp(q)&&d(q),P.children){const vs=P.children;for(let is=0;is<vs.length;is++)l(vs[is],q,y&&y.children[is])}y=y||q}return B?()=>{c(B)}:ut}function c(b){if(up(b)){const h=p.get(b);h&&(p.delete(b),a.splice(a.indexOf(h),1),h.children.forEach(c),h.alias.forEach(c))}else{const h=a.indexOf(b);h>-1&&(a.splice(h,1),b.record.name&&p.delete(b.record.name),b.children.forEach(c),b.alias.forEach(c))}}function e(){return a}function d(b){const h=si(b,a);a.splice(h,0,b),b.record.name&&!zl(b)&&p.set(b.record.name,b)}function u(b,h){let y,M={},P,j;if("name"in b&&b.name){if(y=p.get(b.name),!y)throw Jn(us.MATCHER_NOT_FOUND,{location:b});j=y.record.name,M=ns(Hl(h.params,y.keys.filter(B=>!B.optional).concat(y.parent?y.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),b.params&&Hl(b.params,y.keys.map(B=>B.name))),P=y.stringify(M)}else if(b.path!=null)P=b.path,y=a.find(B=>B.re.test(P)),y&&(M=y.parse(P),j=y.record.name);else{if(y=h.name?p.get(h.name):a.find(B=>B.re.test(h.path)),!y)throw Jn(us.MATCHER_NOT_FOUND,{location:b,currentLocation:h});j=y.record.name,M=ns({},h.params,b.params),P=y.stringify(M)}const K=[];let q=y;for(;q;)K.unshift(q.record),q=q.parent;return{name:j,path:P,params:M,matched:K,meta:Qr(K)}}n.forEach(b=>l(b));function i(){a.length=0,p.clear()}return{addRoute:l,resolve:u,removeRoute:c,clearRoutes:i,getRoutes:e,getRecordMatcher:o}}function Hl(n,s){const a={};for(const p of s)p in n&&(a[p]=n[p]);return a}function jl(n){const s={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Jr(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(s,"mods",{value:{}}),s}function Jr(n){const s={},a=n.props||!1;if("component"in n)s.default=a;else for(const p in n.components)s[p]=typeof a=="object"?a[p]:a;return s}function zl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Qr(n){return n.reduce((s,a)=>ns(s,a.meta),{})}function si(n,s){let a=0,p=s.length;for(;a!==p;){const l=a+p>>1;vp(n,s[l])<0?p=l:a=l+1}const o=ni(n);return o&&(p=s.lastIndexOf(o,p-1)),p}function ni(n){let s=n;for(;s=s.parent;)if(gp(s)&&vp(n,s)===0)return s}function gp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _l(n){const s=un(Ya),a=un(mp),p=Bs(()=>{const d=Wn(n.to);return s.resolve(d)}),o=Bs(()=>{const{matched:d}=p.value,{length:u}=d,i=d[u-1],b=a.matched;if(!i||!b.length)return-1;const h=b.findIndex(Xn.bind(null,i));if(h>-1)return h;const y=Zl(d[u-2]);return u>1&&Zl(i)===y&&b[b.length-1].path!==y?b.findIndex(Xn.bind(null,d[u-2])):h}),l=Bs(()=>o.value>-1&&pi(a.params,p.value.params)),c=Bs(()=>o.value>-1&&o.value===a.matched.length-1&&ip(a.params,p.value.params));function e(d={}){if(ei(d)){const u=s[Wn(n.replace)?"replace":"push"](Wn(n.to)).catch(ut);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:p,href:Bs(()=>p.value.href),isActive:l,isExactActive:c,navigate:e}}function ti(n){return n.length===1?n[0]:n}const ai=Ne({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_l,setup(n,{slots:s}){const a=Yt(_l(n)),{options:p}=un(Ya),o=Bs(()=>({[Yl(n.activeClass,p.linkActiveClass,"router-link-active")]:a.isActive,[Yl(n.exactActiveClass,p.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=s.default&&ti(s.default(a));return n.custom?l:ap("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:o.value},l)}}}),li=ai;function ei(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function pi(n,s){for(const a in s){const p=s[a],o=n[a];if(typeof p=="string"){if(p!==o)return!1}else if(!Us(o)||o.length!==p.length||p.some((l,c)=>l.valueOf()!==o[c].valueOf()))return!1}return!0}function Zl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Yl=(n,s,a)=>n??s??a,oi=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:a}){const p=un(Na),o=Bs(()=>n.route||p.value),l=un(Ll,0),c=Bs(()=>{let u=Wn(l);const{matched:i}=o.value;let b;for(;(b=i[u])&&!b.components;)u++;return u}),e=Bs(()=>o.value.matched[c.value]);Ot(Ll,Bs(()=>c.value+1)),Ot(Dr,e),Ot(Na,o);const d=Ce();return It(()=>[d.value,e.value,n.name],([u,i,b],[h,y,M])=>{i&&(i.instances[b]=u,y&&y!==i&&u&&u===h&&(i.leaveGuards.size||(i.leaveGuards=y.leaveGuards),i.updateGuards.size||(i.updateGuards=y.updateGuards))),u&&i&&(!y||!Xn(i,y)||!h)&&(i.enterCallbacks[b]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=o.value,i=n.name,b=e.value,h=b&&b.components[i];if(!h)return Xl(a.default,{Component:h,route:u});const y=b.props[i],M=y?y===!0?u.params:typeof y=="function"?y(u):y:null,j=ap(h,ns({},M,s,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(b.instances[i]=null)},ref:d}));return Xl(a.default,{Component:j,route:u})||j}}});function Xl(n,s){if(!n)return null;const a=n(s);return a.length===1?a[0]:a}const ci=oi;function di(n){const s=Xr(n.routes,n),a=n.parseQuery||Fr,p=n.stringifyQuery||Gl,o=n.history,l=at(),c=at(),e=at(),d=Qp(kn);let u=kn;Ln&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=ua.bind(null,A=>""+A),b=ua.bind(null,gr),h=ua.bind(null,ht);function y(A,F){let N,G;return up(A)?(N=s.getRecordMatcher(A),G=F):G=A,s.addRoute(G,N)}function M(A){const F=s.getRecordMatcher(A);F&&s.removeRoute(F)}function P(){return s.getRoutes().map(A=>A.record)}function j(A){return!!s.getRecordMatcher(A)}function K(A,F){if(F=ns({},F||d.value),typeof A=="string"){const g=fa(a,A,F.path),k=s.resolve({path:g.path},F),S=o.createHref(g.fullPath);return ns(g,k,{params:h(k.params),hash:ht(g.hash),redirectedFrom:void 0,href:S})}let N;if(A.path!=null)N=ns({},A,{path:fa(a,A.path,F.path).path});else{const g=ns({},A.params);for(const k in g)g[k]==null&&delete g[k];N=ns({},A,{params:b(g)}),F.params=b(F.params)}const G=s.resolve(N,F),Y=A.hash||"";G.params=i(h(G.params));const r=kr(p,ns({},A,{hash:mr(Y),path:G.path})),f=o.createHref(r);return ns({fullPath:r,hash:Y,query:p===Gl?Mr(A.query):A.query||{}},G,{redirectedFrom:void 0,href:f})}function q(A){return typeof A=="string"?fa(a,A,d.value.path):ns({},A)}function B(A,F){if(u!==A)return Jn(us.NAVIGATION_CANCELLED,{from:F,to:A})}function D(A){return is(A)}function os(A){return D(ns(q(A),{replace:!0}))}function vs(A,F){const N=A.matched[A.matched.length-1];if(N&&N.redirect){const{redirect:G}=N;let Y=typeof G=="function"?G(A,F):G;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=q(Y):{path:Y},Y.params={}),ns({query:A.query,hash:A.hash,params:Y.path!=null?{}:A.params},Y)}}function is(A,F){const N=u=K(A),G=d.value,Y=A.state,r=A.force,f=A.replace===!0,g=vs(N,G);if(g)return is(ns(q(g),{state:typeof g=="object"?ns({},Y,g.state):Y,force:r,replace:f}),F||N);const k=N;k.redirectedFrom=F;let S;return!r&&Cr(p,G,N)&&(S=Jn(us.NAVIGATION_DUPLICATED,{to:k,from:G}),js(G,G,!0,!1)),(S?Promise.resolve(S):Ws(k,G)).catch(C=>pn(C)?pn(C,us.NAVIGATION_GUARD_REDIRECT)?C:yn(C):ss(C,k,G)).then(C=>{if(C){if(pn(C,us.NAVIGATION_GUARD_REDIRECT))return is(ns({replace:f},q(C.to),{state:typeof C.to=="object"?ns({},Y,C.to.state):Y,force:r}),F||k)}else C=Tn(k,G,!0,f,Y);return hn(k,G,C),C})}function Ks(A,F){const N=B(A,F);return N?Promise.reject(N):Promise.resolve()}function gn(A){const F=$n.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(A):A()}function Ws(A,F){let N;const[G,Y,r]=Vr(A,F);N=ba(G.reverse(),"beforeRouteLeave",A,F);for(const g of G)g.leaveGuards.forEach(k=>{N.push(An(k,A,F))});const f=Ks.bind(null,A,F);return N.push(f),Ds(N).then(()=>{N=[];for(const g of l.list())N.push(An(g,A,F));return N.push(f),Ds(N)}).then(()=>{N=ba(Y,"beforeRouteUpdate",A,F);for(const g of Y)g.updateGuards.forEach(k=>{N.push(An(k,A,F))});return N.push(f),Ds(N)}).then(()=>{N=[];for(const g of r)if(g.beforeEnter)if(Us(g.beforeEnter))for(const k of g.beforeEnter)N.push(An(k,A,F));else N.push(An(g.beforeEnter,A,F));return N.push(f),Ds(N)}).then(()=>(A.matched.forEach(g=>g.enterCallbacks={}),N=ba(r,"beforeRouteEnter",A,F,gn),N.push(f),Ds(N))).then(()=>{N=[];for(const g of c.list())N.push(An(g,A,F));return N.push(f),Ds(N)}).catch(g=>pn(g,us.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function hn(A,F,N){e.list().forEach(G=>gn(()=>G(A,F,N)))}function Tn(A,F,N,G,Y){const r=B(A,F);if(r)return r;const f=F===kn,g=Ln?history.state:{};N&&(G||f?o.replace(A.fullPath,ns({scroll:f&&g&&g.scroll},Y)):o.push(A.fullPath,Y)),d.value=A,js(A,F,N,f),yn()}let Hs;function Qn(){Hs||(Hs=o.listen((A,F,N)=>{if(!Rn.listening)return;const G=K(A),Y=vs(G,Rn.currentRoute.value);if(Y){is(ns(Y,{replace:!0,force:!0}),G).catch(ut);return}u=G;const r=d.value;Ln&&Ir(Bl(r.fullPath,N.delta),ta()),Ws(G,r).catch(f=>pn(f,us.NAVIGATION_ABORTED|us.NAVIGATION_CANCELLED)?f:pn(f,us.NAVIGATION_GUARD_REDIRECT)?(is(ns(q(f.to),{force:!0}),G).then(g=>{pn(g,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&!N.delta&&N.type===Ia.pop&&o.go(-1,!1)}).catch(ut),Promise.reject()):(N.delta&&o.go(-N.delta,!1),ss(f,G,r))).then(f=>{f=f||Tn(G,r,!1),f&&(N.delta&&!pn(f,us.NAVIGATION_CANCELLED)?o.go(-N.delta,!1):N.type===Ia.pop&&pn(f,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),hn(G,r,f)}).catch(ut)}))}let Dn=at(),bs=at(),ps;function ss(A,F,N){yn(A);const G=bs.list();return G.length?G.forEach(Y=>Y(A,F,N)):console.error(A),Promise.reject(A)}function ln(){return ps&&d.value!==kn?Promise.resolve():new Promise((A,F)=>{Dn.add([A,F])})}function yn(A){return ps||(ps=!A,Qn(),Dn.list().forEach(([F,N])=>A?N(A):F()),Dn.reset()),A}function js(A,F,N,G){const{scrollBehavior:Y}=n;if(!Ln||!Y)return Promise.resolve();const r=!N&&Pr(Bl(A.fullPath,0))||(G||!N)&&history.state&&history.state.scroll||null;return Ka().then(()=>Y(A,F,r)).then(f=>f&&Or(f)).catch(f=>ss(f,A,F))}const Os=A=>o.go(A);let Vn;const $n=new Set,Rn={currentRoute:d,listening:!0,addRoute:y,removeRoute:M,clearRoutes:s.clearRoutes,hasRoute:j,getRoutes:P,resolve:K,options:n,push:D,replace:os,go:Os,back:()=>Os(-1),forward:()=>Os(1),beforeEach:l.add,beforeResolve:c.add,afterEach:e.add,onError:bs.add,isReady:ln,install(A){A.component("RouterLink",li),A.component("RouterView",ci),A.config.globalProperties.$router=Rn,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(d)}),Ln&&!Vn&&d.value===kn&&(Vn=!0,D(o.location).catch(G=>{}));const F={};for(const G in kn)Object.defineProperty(F,G,{get:()=>d.value[G],enumerable:!0});A.provide(Ya,Rn),A.provide(mp,ke(F)),A.provide(Na,d);const N=A.unmount;$n.add(A),A.unmount=function(){$n.delete(A),$n.size<1&&(u=kn,Hs&&Hs(),Hs=null,d.value=kn,Vn=!1,ps=!1),N()}}};function Ds(A){return A.reduce((F,N)=>F.then(()=>gn(N)),Promise.resolve())}return Rn}const hp="vasp-learn-progress",ri=()=>{try{const n=localStorage.getItem(hp);return n?JSON.parse(n):{}}catch{return{}}},va=n=>{try{localStorage.setItem(hp,JSON.stringify(n))}catch(s){console.warn("Failed to save progress:",s)}},$s=Ce(ri()),Tt={theory:{title:"理论基础",items:[{id:"theory-dft",title:"DFT 基本原理",path:"/theory"},{id:"theory-functional",title:"交换关联泛函",path:"/theory"},{id:"theory-paw",title:"赝势与基组",path:"/theory"},{id:"theory-kpoint",title:"K 点采样",path:"/theory"}]},input:{title:"输入文件",items:[{id:"input-incar",title:"INCAR 文件",path:"/input"},{id:"input-poscar",title:"POSCAR 文件",path:"/input"},{id:"input-kpoints",title:"KPOINTS 文件",path:"/input"},{id:"input-potcar",title:"POTCAR 文件",path:"/input"}]},tasks:{title:"计算任务",items:[{id:"tasks-relax",title:"结构优化",path:"/tasks"},{id:"tasks-dos",title:"态密度计算",path:"/tasks"},{id:"tasks-band",title:"能带结构",path:"/tasks"},{id:"tasks-surface",title:"表面计算",path:"/tasks"},{id:"tasks-defect",title:"缺陷计算",path:"/tasks"},{id:"tasks-phonon",title:"声子计算",path:"/tasks"}]},errors:{title:"错误诊断",items:[{id:"errors-scf",title:"SCF 不收敛",path:"/errors"},{id:"errors-ion",title:"离子步问题",path:"/errors"},{id:"errors-memory",title:"内存问题",path:"/errors"},{id:"errors-files",title:"文件错误",path:"/errors"}]}};function ii(){const n=e=>{$s.value={...$s.value,[e]:{completed:!0,completedAt:new Date().toISOString()}},va($s.value)},s=e=>{const d={...$s.value};delete d[e],$s.value=d,va($s.value)},a=e=>{p(e)?s(e):n(e)},p=e=>{var d;return!!((d=$s.value[e])!=null&&d.completed)};return{progress:$s,learnableItems:Tt,markComplete:n,markIncomplete:s,toggleComplete:a,isComplete:p,getTotalProgress:()=>{const e=Object.values(Tt).reduce((u,i)=>u+i.items.length,0),d=Object.values($s.value).filter(u=>u.completed).length;return{total:e,completed:d,percentage:e>0?Math.round(d/e*100):0}},getCategoryProgress:e=>{if(!Tt[e])return{total:0,completed:0,percentage:0};const d=Tt[e].items,u=d.filter(i=>p(i.id)).length;return{total:d.length,completed:u,percentage:Math.round(u/d.length*100)}},resetProgress:()=>{$s.value={},va($s.value)}}}const ui={name:"ProgressWidget",setup(){const{learnableItems:n,getTotalProgress:s,getCategoryProgress:a,resetProgress:p}=ii(),o=s();return{learnableItems:n,totalProgress:o,getCategoryProgress:a,confirmReset:()=>{confirm("确定要重置所有学习进度吗？此操作不可恢复。")&&(p(),window.location.reload())}}}},fi={class:"progress-widget"},mi={class:"progress-header"},bi={class:"progress-stats"},vi={class:"progress-percentage"},gi={class:"progress-detail"},hi={class:"progress-bar-container"},yi={class:"category-progress"},ki={class:"category-info"},Ci={class:"category-name"},Ai={class:"category-count"},Si={class:"category-bar-container"};function wi(n,s,a,p,o,l){return V(),$("div",fi,[t("div",mi,[s[1]||(s[1]=t("h3",null,"学习进度",-1)),t("div",bi,[t("span",vi,Z(p.totalProgress.percentage)+"%",1),t("span",gi,Z(p.totalProgress.completed)+"/"+Z(p.totalProgress.total)+" 完成",1)])]),t("div",hi,[t("div",{class:"progress-bar",style:_n({width:p.totalProgress.percentage+"%"})},null,4)]),t("div",yi,[(V(!0),$(ks,null,Nn(p.learnableItems,(c,e)=>(V(),$("div",{key:e,class:"category-item"},[t("div",ki,[t("span",Ci,Z(c.title),1),t("span",Ai,Z(p.getCategoryProgress(e).completed)+"/"+Z(c.items.length),1)]),t("div",Si,[t("div",{class:"category-bar",style:_n({width:p.getCategoryProgress(e).percentage+"%"})},null,4)])]))),128))]),p.totalProgress.completed>0?(V(),$("button",{key:0,class:"reset-btn",onClick:s[0]||(s[0]=(...c)=>p.confirmReset&&p.confirmReset(...c))}," 重置进度 ")):Sn("",!0)])}const Ei=Q(ui,[["render",wi],["__scopeId","data-v-0efc2711"]]),Ti={name:"HomeView",components:{ProgressWidget:Ei}},Ri={class:"hero active"},Oi={class:"pg"};function Ii(n,s,a,p,o,l){const c=J("ProgressWidget"),e=J("router-link");return V(),$("div",Ri,[s[5]||(s[5]=t("h1",{class:"hero-t"},[v("VASP 材料计算"),t("br"),v("学习平台")],-1)),s[6]||(s[6]=t("p",{class:"hero-s"},"从密度泛函理论到第一性原理计算，系统掌握 VASP 的使用方法。包含基础教程、进阶计算任务和完整的错误诊断系统。",-1)),w(c),s[7]||(s[7]=m('<div class="stats"><div class="stat"><div class="stat-n">15</div><div class="stat-l">核心知识点</div></div><div class="stat"><div class="stat-n">8</div><div class="stat-l">计算任务教程</div></div><div class="stat"><div class="stat-n">20+</div><div class="stat-l">错误诊断方案</div></div><div class="stat"><div class="stat-n">∞</div><div class="stat-l">可探索的材料</div></div></div><h2 class="stitle">学习路径</h2><p class="sdesc">按照推荐顺序学习，循序渐进地掌握材料计算</p>',3)),t("div",Oi,[w(e,{to:"/theory",class:"pc",style:{"--ca":"var(--blue)"}},{default:R(()=>[...s[0]||(s[0]=[t("div",{class:"pc-i"},"📐",-1),t("div",{class:"pc-t"},"理论基础",-1),t("div",{class:"pc-d"},"密度泛函理论、赝势方法、平面波基组",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 2h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),w(e,{to:"/input",class:"pc",style:{"--ca":"var(--green)"}},{default:R(()=>[...s[1]||(s[1]=[t("div",{class:"pc-i"},"📁",-1),t("div",{class:"pc-t"},"输入文件",-1),t("div",{class:"pc-d"},"INCAR、POSCAR、KPOINTS、POTCAR 四大核心文件",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 3h"),t("span",null,"📖 4 章节")],-1)])]),_:1}),w(e,{to:"/tasks",class:"pc",style:{"--ca":"var(--purple)"}},{default:R(()=>[...s[2]||(s[2]=[t("div",{class:"pc-i"},"📊",-1),t("div",{class:"pc-t"},"基础计算",-1),t("div",{class:"pc-d"},"结构优化、态密度、能带结构",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 4h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),w(e,{to:"/errors",class:"pc",style:{"--ca":"var(--red)"}},{default:R(()=>[...s[3]||(s[3]=[t("div",{class:"pc-i"},"🚨",-1),t("div",{class:"pc-t"},"错误诊断",-1),t("div",{class:"pc-d"},"SCF 不收敛、内存溢出、文件错误等",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 按需查阅"),t("span",null,"📖 5 类问题")],-1)])]),_:1}),w(e,{to:"/tools",class:"pc",style:{"--ca":"var(--accent)"}},{default:R(()=>[...s[4]||(s[4]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"工具与速查",-1),t("div",{class:"pc-d"},"VESTA、VASPKIT、pymatgen 等辅助工具",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 1h")],-1)])]),_:1})]),s[8]||(s[8]=m('<h2 class="stitle">VASP 计算流程</h2><div class="fc"><div class="fn2-node s">🧱 确定材料结构</div><div class="fa"></div><div class="fn2-node p">📝 编写 POSCAR</div><div class="fa"></div><div class="fn2-node p">⚛️ 准备 POTCAR</div><div class="fa"></div><div class="fn2-node p">🔲 设置 KPOINTS</div><div class="fa"></div><div class="fn2-node p">⚙️ 配置 INCAR</div><div class="fa"></div><div class="fn2-node p">🚀 提交计算</div><div class="fa"></div><div class="fn2-node p">🔍 检查收敛</div><div class="fa"></div><div class="fn2-node e">✅ 提取物理量</div></div>',2))])}const Pi=Q(Ti,[["render",Ii]]),Ni={name:"TheoryView",data(){return{openSections:{q1:!0,q2:!0,q3:!0}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},xi={class:"sec active"},qi={class:"bread"},Fi={class:"cb"},Mi={class:"ch"},Di={class:"cb"},Vi={class:"ch"},$i={class:"cb"},Bi={class:"ch"};function Gi(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",xi,[t("div",qi,[w(c,{to:"/"},{default:R(()=>[...s[6]||(s[6]=[v("首页",-1)])]),_:1}),s[7]||(s[7]=v("/",-1)),s[8]||(s[8]=t("span",null,"理论基础",-1))]),s[21]||(s[21]=m(`<h2>DFT 基本原理</h2><p>密度泛函理论（DFT）是 VASP 的理论基石，将多电子问题简化为单电子问题。</p><h3>1. Hohenberg-Kohn 定理</h3><ul><li><strong>第一定理：</strong>多电子体系的基态性质由电子密度 n(r) 唯一确定</li><li><strong>第二定理：</strong>基态能量可通过能量泛函 E[n] 对密度的变分得到</li></ul><div class="ib note"><strong>核心思想：</strong>将求解 3N 维波函数的问题简化为求解 3 维电子密度，大幅降低计算复杂度。</div><h3>2. Kohn-Sham 方程</h3><div class="cb"><div class="ch"><span class="la">公式</span></div><pre><code>⎡ -∇²/2 + V_eff(r) ⎤ φᵢ(r) = εᵢ φᵢ(r)
⎣                   ⎦

V_eff(r) = V_ext(r) + V_H(r) + V_xc(r)

- V_ext(r) ：外势（原子核产生的势）
- V_H(r)   ：Hartree 势（经典库仑作用）
- V_xc(r)  ：交换关联势（量子效应）</code></pre></div><h3>3. 自洽场（SCF）迭代</h3><div class="fc"><div class="fn2-node s">猜测初始电子密度 n(r)</div><div class="fa"></div><div class="fn2-node p">构建有效势 V_eff(r)</div><div class="fa"></div><div class="fn2-node p">求解 Kohn-Sham 方程 → φᵢ, εᵢ</div><div class="fa"></div><div class="fn2-node p">计算新密度 n_new(r)</div><div class="fa"></div><div class="fn2-node p">判断收敛 |n_new - n_old| &lt; ε ?</div><div class="fa"></div><div class="fn2-node e">输出基态能量和电子结构</div></div><h3>4. 交换关联泛函</h3><table class="tb"><thead><tr><th>层级</th><th>名称</th><th>精度</th><th>成本</th><th>适用</th></tr></thead><tbody><tr><td><strong>LDA</strong></td><td>局域密度近似</td><td>一般</td><td>低</td><td>金属晶格常数</td></tr><tr><td><strong>GGA</strong></td><td>广义梯度近似</td><td>较好</td><td>低</td><td>最常用（PBE）</td></tr><tr><td><strong>杂化</strong></td><td>HSE06/PBE0</td><td>很好</td><td>高</td><td>带隙</td></tr><tr><td><strong>GW</strong></td><td>多体微扰</td><td>极好</td><td>极高</td><td>准粒子能带</td></tr></tbody></table><div class="ib tip"><strong>建议：</strong>初学者从 <code class="ic">PBE</code> 开始，VASP 中通过 POTCAR 文件控制（PAW_PBE 对应 PBE）。</div><h3>5. 赝势方法详解</h3><p>VASP 使用 <strong>PAW（投影缀加波）</strong>方法，比超软赝势更精确，比全电子计算更高效。</p><table class="tb"><thead><tr><th>赝势类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>6. 平面波基组</h3><p>VASP 使用平面波作为基组，截断能 <code>ENCUT</code> 决定基组大小。</p><div class="fb"><div class="fm">E<sub>cut</sub> = ℏ²G<sub>max</sub>² / 2m</div><div class="fd">G<sub>max</sub>: 最大平面波矢量, E<sub>cut</sub>: 截断能</div></div><table class="tb"><thead><tr><th>截断能</th><th>精度</th><th>计算成本</th><th>适用场景</th></tr></thead><tbody><tr><td>&lt; 200 eV</td><td>低</td><td>低</td><td>初步测试</td></tr><tr><td>200-400 eV</td><td>中</td><td>中</td><td>常规计算</td></tr><tr><td>400-600 eV</td><td>高</td><td>高</td><td>精确计算</td></tr><tr><td>&gt; 600 eV</td><td>极高</td><td>极高</td><td>特殊体系</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>7. K 点采样</h3><p>在周期性体系中，电子波函数满足布洛赫定理，需要在倒空间（k 空间）进行积分。</p><div class="fb"><div class="fm">⟨O⟩ = (1/Nₖ) × Σ wₖ × O(kₖ)</div><div class="fd">离散 k 点求和代替布里渊区积分</div></div><h4>K 点密度经验公式</h4><div class="ib tip"><strong>经验法则：</strong><code class="ic">N_k × a ≈ 30</code>（a 为晶格常数，单位 Å）<br>例如 a = 5.43 Å → N_k ≈ 30/5.43 ≈ 6 → 使用 6×6×6 网格</div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr></tbody></table><h3>8. DFT 与 VASP 参数对照表</h3><table class="tb"><thead><tr><th>DFT 概念</th><th>VASP 参数</th><th>物理意义</th><th>设置建议</th></tr></thead><tbody><tr><td>交换关联泛函</td><td><code>POTCAR</code></td><td>近似处理电子关联</td><td>初学用 PBE</td></tr><tr><td>平面波截断</td><td><code>ENCUT</code></td><td>基组大小</td><td>1.3 × ENMAX</td></tr><tr><td>布里渊区积分</td><td><code>KPOINTS</code></td><td>倒空间采样</td><td>N_k × a ≈ 30</td></tr><tr><td>收敛标准</td><td><code>EDIFF</code></td><td>电子步收敛阈值</td><td>1E-6</td></tr><tr><td>展宽方法</td><td><code>ISMEAR</code></td><td>费米面处理</td><td>金属用 1，绝缘体用 0</td></tr><tr><td>展宽宽度</td><td><code>SIGMA</code></td><td>展宽能量范围</td><td>0.05-0.2 eV</td></tr></tbody></table><h3>9. 理论与计算的联系</h3><div class="db"><div class="db-t">从理论到计算的思考方式</div><p><strong>1. 明确计算目标</strong></p><ul><li>结构优化 → 关注力收敛 (<code>EDIFFG</code>)</li><li>电子结构 → 关注 k 点和带隙</li><li>热力学性质 → 关注能量精度</li></ul><p><strong>2. 选择合适的泛函</strong></p><ul><li>定性分析 → PBE 足够</li><li>精确带隙 → 需要 HSE06</li><li>强关联体系 → 需要 +U</li></ul><p><strong>3. 验证计算精度</strong></p><ul><li>做收敛性测试 (ENCUT, K 点)</li><li>与实验值或文献比较</li><li>检查结果的物理合理性</li></ul></div><h3>10. 实际案例：Si 的计算</h3>`,32)),t("div",Fi,[t("div",Mi,[s[9]||(s[9]=t("span",{class:"la"},"POSCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="vr">Si diamond</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  5.43</span>
<span class="vr">Si</span>
<span class="nu">2</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),t("div",Di,[t("div",Vi,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"Si 结构优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 1.3 × ENMAX(Si)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子收敛标准</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),t("div",$i,[t("div",Bi,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=m(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; N_k × 5.43 ≈ 30</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[22]||(s[22]=m('<div class="ib tip"><strong>预期结果：</strong>Si 晶格常数 ~5.43 Å，带隙 ~0.6 eV (PBE 低估，实验值 1.1 eV)</div><h3>11. 泛函选择指南</h3><table class="tb"><thead><tr><th>计算目标</th><th>推荐泛函</th><th>理由</th></tr></thead><tbody><tr><td>结构优化</td><td>PBE</td><td>快速，晶格常数准确</td></tr><tr><td>形成能</td><td>PBE</td><td>系统误差小</td></tr><tr><td>精确带隙</td><td>HSE06</td><td>带隙准确</td></tr><tr><td>磁性材料</td><td>PBE+U</td><td>处理强关联</td></tr><tr><td>范德华材料</td><td>PBE-D3</td><td>包含 vdW 修正</td></tr><tr><td>高精度能量</td><td>RPA/GW</td><td>最准确但最慢</td></tr></tbody></table><h3>12. 常见问题与解答</h3>',4)),t("div",{class:"ec open",onClick:s[3]||(s[3]=e=>l.toggle("q1"))},[...s[18]||(s[18]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"为什么 PBE 低估带隙？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"PBE 泛函的自相互作用误差导致带隙被系统性低估。这不是 VASP 的问题，而是 DFT 泛函的固有限制。解决方案是使用杂化泛函 (HSE06) 或 GW 方法。")],-1)])]),t("div",{class:"ec open",onClick:s[4]||(s[4]=e=>l.toggle("q2"))},[...s[19]||(s[19]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"如何判断 ENCUT 是否足够？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"做 ENCUT 收敛测试：计算不同 ENCUT 下的能量，当相邻 ENCUT 能量差 < 1 meV/atom 时，认为收敛。通常 ENCUT = 1.3 × ENMAX(max) 是安全的起点。")],-1)])]),t("div",{class:"ec open",onClick:s[5]||(s[5]=e=>l.toggle("q3"))},[...s[20]||(s[20]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"什么时候需要 +U？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"当体系含有 3d/4f 电子（如过渡金属氧化物）时，DFT 的局域近似处理不好电子强关联，导致带隙为零或磁矩错误。添加 Hubbard U 可以修正这个问题。常见 U 值：Fe: 4.0 eV, Co: 3.3 eV, Ni: 6.0 eV, Cu: 4.0 eV。")],-1)])])])}const Li=Q(Ni,[["render",Gi]]),Ui={name:"QuickRef",data(){return{activeTab:"incar",tabs:[{id:"incar",name:"INCAR"},{id:"ismear",name:"ISMEAR"},{id:"ibrion",name:"IBRION"},{id:"isif",name:"ISIF"}],incarParams:[{name:"ENCUT",desc:"平面波截断能",value:"400-600 eV"},{name:"EDIFF",desc:"电子步收敛标准",value:"1E-6"},{name:"EDIFFG",desc:"离子步收敛标准",value:"-0.02 eV/Å"},{name:"PREC",desc:"计算精度",value:"Accurate"},{name:"NSW",desc:"最大离子步数",value:"100-200"},{name:"NELM",desc:"最大电子步数",value:"60-200"},{name:"NBANDS",desc:"能带数目",value:"auto 或 NELECT/2+N"},{name:"LREAL",desc:"实空间投影",value:"Auto (>50原子)"}],ismearParams:[{value:"-5",method:"四面体法",use:"绝缘体/半导体 DOS",sigma:"自动"},{value:"-4",method:"四面体+Blochl",use:"金属 DOS",sigma:"自动"},{value:"0",method:"Gaussian",use:"半导体/绝缘体",sigma:"0.05"},{value:"1",method:"MP 展宽",use:"金属",sigma:"0.2"},{value:"2",method:"MP 改进",use:"金属 (更平滑)",sigma:"0.2"}],ibrionParams:[{value:"-1",method:"不动",desc:"静态计算或 MD"},{value:"0",method:"MD",desc:"分子动力学"},{value:"1",method:"RMM-DIIS",desc:"准牛顿法 (推荐)"},{value:"2",method:"CG",desc:"共轭梯度法"},{value:"3",method:"Damped MD",desc:"阻尼分子动力学"}],isifParams:[{value:"2",optimize:"仅离子位置",use:"表面计算、分子吸附"},{value:"3",optimize:"离子+晶格(体积+形状)",use:"体相优化 (最常用)"},{value:"4",optimize:"离子+晶格形状",use:"固定体积优化"},{value:"5",optimize:"仅晶格(体积+形状)",use:"固定离子"},{value:"6",optimize:"仅晶格形状",use:"固定体积+离子"},{value:"7",optimize:"仅晶格体积",use:"固定形状+离子"}]}}},Ki={class:"quick-ref"},Wi={class:"ref-tabs"},Hi=["onClick"],ji={class:"ref-content"},zi={key:0,class:"ref-table"},_i={class:"ref-cell code"},Zi={class:"ref-cell"},Yi={class:"ref-cell code"},Xi={key:1,class:"ref-table"},Ji={class:"ref-cell code"},Qi={class:"ref-cell"},su={class:"ref-cell"},nu={class:"ref-cell code"},tu={key:2,class:"ref-table"},au={class:"ref-cell code"},lu={class:"ref-cell"},eu={class:"ref-cell"},pu={key:3,class:"ref-table"},ou={class:"ref-cell code"},cu={class:"ref-cell"},du={class:"ref-cell"};function ru(n,s,a,p,o,l){return V(),$("div",Ki,[s[4]||(s[4]=t("h3",null,"快速参考",-1)),t("div",Wi,[(V(!0),$(ks,null,Nn(o.tabs,c=>(V(),$("button",{key:c.id,class:_(["ref-tab",{active:o.activeTab===c.id}]),onClick:e=>o.activeTab=c.id},Z(c.name),11,Hi))),128))]),t("div",ji,[o.activeTab==="incar"?(V(),$("div",zi,[s[0]||(s[0]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"参数"),t("div",{class:"ref-cell"},"说明"),t("div",{class:"ref-cell"},"常用值")],-1)),(V(!0),$(ks,null,Nn(o.incarParams,c=>(V(),$("div",{key:c.name,class:"ref-row"},[t("div",_i,Z(c.name),1),t("div",Zi,Z(c.desc),1),t("div",Yi,Z(c.value),1)]))),128))])):Sn("",!0),o.activeTab==="ismear"?(V(),$("div",Xi,[s[1]||(s[1]=m('<div class="ref-row header" data-v-b684b753><div class="ref-cell" data-v-b684b753>ISMEAR</div><div class="ref-cell" data-v-b684b753>方法</div><div class="ref-cell" data-v-b684b753>适用场景</div><div class="ref-cell" data-v-b684b753>SIGMA</div></div>',1)),(V(!0),$(ks,null,Nn(o.ismearParams,c=>(V(),$("div",{key:c.value,class:"ref-row"},[t("div",Ji,Z(c.value),1),t("div",Qi,Z(c.method),1),t("div",su,Z(c.use),1),t("div",nu,Z(c.sigma),1)]))),128))])):Sn("",!0),o.activeTab==="ibrion"?(V(),$("div",tu,[s[2]||(s[2]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"IBRION"),t("div",{class:"ref-cell"},"方法"),t("div",{class:"ref-cell"},"说明")],-1)),(V(!0),$(ks,null,Nn(o.ibrionParams,c=>(V(),$("div",{key:c.value,class:"ref-row"},[t("div",au,Z(c.value),1),t("div",lu,Z(c.method),1),t("div",eu,Z(c.desc),1)]))),128))])):Sn("",!0),o.activeTab==="isif"?(V(),$("div",pu,[s[3]||(s[3]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"ISIF"),t("div",{class:"ref-cell"},"优化内容"),t("div",{class:"ref-cell"},"适用场景")],-1)),(V(!0),$(ks,null,Nn(o.isifParams,c=>(V(),$("div",{key:c.value,class:"ref-row"},[t("div",ou,Z(c.value),1),t("div",cu,Z(c.optimize),1),t("div",du,Z(c.use),1)]))),128))])):Sn("",!0)])])}const iu=Q(Ui,[["render",ru],["__scopeId","data-v-b684b753"]]),uu={name:"InputView",components:{QuickRef:iu},methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},fu={class:"sec active"},mu={class:"bread"},bu={class:"cb"},vu={class:"ch"},gu={class:"cb"},hu={class:"ch"},yu={class:"cb"},ku={class:"ch"},Cu={class:"cb"},Au={class:"ch"},Su={class:"cb"},wu={class:"ch"},Eu={class:"cb"},Tu={class:"ch"},Ru={class:"cb"},Ou={class:"ch"},Iu={class:"cb"},Pu={class:"ch"},Nu={class:"cb"},xu={class:"ch"},qu={class:"cb"},Fu={class:"ch"},Mu={class:"cb"},Du={class:"ch"},Vu={class:"cb"},$u={class:"ch"},Bu={class:"cb"},Gu={class:"ch"},Lu={class:"cb"},Uu={class:"ch"},Ku={class:"cb"},Wu={class:"ch"},Hu={class:"cb"},ju={class:"ch"},zu={class:"cb"},_u={class:"ch"};function Zu(n,s,a,p,o,l){const c=J("router-link"),e=J("QuickRef");return V(),$("div",fu,[t("div",mu,[w(c,{to:"/"},{default:R(()=>[...s[17]||(s[17]=[v("首页",-1)])]),_:1}),s[18]||(s[18]=v("/",-1)),s[19]||(s[19]=t("span",null,"输入文件",-1))]),s[69]||(s[69]=m('<h2>VASP 输入文件总览</h2><p>VASP 需要 <strong>4 个核心输入文件</strong>，正确设置这些文件是成功计算的基础。</p><div class="ft"><div class="ft-i"><span style="color:var(--blue);">📄</span> INCAR — 控制参数（告诉 VASP 做什么）</div><div class="ft-i"><span style="color:var(--green);">📄</span> POSCAR — 晶体结构（告诉 VASP 计算什么）</div><div class="ft-i"><span style="color:var(--purple);">📄</span> KPOINTS — k 点网格（控制精度）</div><div class="ft-i"><span style="color:var(--red);">📄</span> POTCAR — 赝势文件（定义元素）</div></div><div class="ib warn"><strong>注意：</strong>POTCAR 中元素的顺序必须与 POSCAR 中的元素顺序一致！</div>',4)),w(e),s[70]||(s[70]=t("h2",null,"INCAR 文件详解",-1)),s[71]||(s[71]=t("p",null,"INCAR 是 VASP 最核心的控制文件，决定计算类型和精度。",-1)),s[72]||(s[72]=t("h3",null,"1. 基本结构",-1)),t("div",bu,[t("div",vu,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"结构优化示例",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[22]||(s[22]=m(`<pre><code><span class="cm"># 注释以 # 或 ; 开头</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),s[73]||(s[73]=m('<h3>2. 参数格式规则</h3><table class="tb"><thead><tr><th>规则</th><th>正确写法</th><th>错误写法</th></tr></thead><tbody><tr><td>等号两边空格</td><td><code>ENCUT = 400</code></td><td><code>ENCUT=400</code></td></tr><tr><td>布尔值大写</td><td><code>.TRUE.</code></td><td><code>.true.</code></td></tr><tr><td>字符串引号</td><td><code>&#39;string&#39;</code> 或无</td><td><code>&quot;string&quot;</code></td></tr><tr><td>注释符号</td><td><code>#</code> 或 <code>;</code></td><td><code>//</code></td></tr></tbody></table><h3>3. ENCUT 截断能</h3><p>截断能决定平面波基组大小，是最关键的精度参数。</p><table class="tb"><thead><tr><th>设置方式</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT = 400</code></td><td>直接指定 (eV)</td></tr><tr><td><code>ENCUT = 1.3</code></td><td>乘以 ENMAX（POTCAR 中的值）</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>4. IBRION 优化算法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算或 MD</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td><strong>推荐默认</strong></td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼 MD</td><td>特殊体系</td></tr></tbody></table><h3>5. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td><strong>体相优化（最常用）</strong></td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格</td></tr></tbody></table><div class="ib warn"><strong>重要：</strong>表面计算必须用 <code>ISIF=2</code>，否则晶格会塌陷！</div><h3>6. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>7. EDIFF 和 EDIFFG</h3><table class="tb"><thead><tr><th>参数</th><th>含义</th><th>常用值</th><th>说明</th></tr></thead><tbody><tr><td><code>EDIFF</code></td><td>电子步收敛</td><td>1E-6</td><td>能量变化阈值</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛</td><td>-0.02</td><td>负值=力, 正值=能量</td></tr></tbody></table><div class="ib note"><strong>EDIFFG 解释：</strong><ul><li><code>EDIFFG = -0.02</code>：最大力收敛到 0.02 eV/Å</li><li><code>EDIFFG = 1E-4</code>：能量变化收敛到 0.0001 eV</li></ul></div><h3>8. 并行参数</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',18)),t("div",gu,[t("div",hu,[s[23]||(s[23]=t("span",{class:"la"},"INCAR",-1)),s[24]||(s[24]=t("span",{class:"fn"},"并行设置（64 核，4 节点）",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm"># 64 核 = 4 节点 × 16 核</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>                <span class="cm">; 节点数</span>
<span class="kw">KPAR</span>     = <span class="nu">2</span>                <span class="cm">; K 点并行（整除 K 点数）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>               <span class="cm">; 每节点核心数</span></code></pre>`,1))]),s[74]||(s[74]=t("h3",null,"9. 性能优化参数",-1)),t("div",yu,[t("div",ku,[s[26]||(s[26]=t("span",{class:"la"},"INCAR",-1)),s[27]||(s[27]=t("span",{class:"fn"},"大体系优化",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[28]||(s[28]=m(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>             <span class="cm">; 实空间计算投影算符</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>             <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>               <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>           <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>           <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>                <span class="cm">; 减少输出</span></code></pre>`,1))]),s[75]||(s[75]=t("h2",null,"POSCAR 文件详解",-1)),s[76]||(s[76]=t("p",null,"POSCAR 定义晶体结构，包括晶格和原子坐标。",-1)),s[77]||(s[77]=t("h3",null,"1. 完整格式",-1)),t("div",Cu,[t("div",Au,[s[29]||(s[29]=t("span",{class:"la"},"POSCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"格式详解",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[31]||(s[31]=m(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 第 1 行：注释（任意文字）</span>
<span class="nu">1.0</span>                           <span class="cm">; 第 2 行：缩放因子（通常 1.0）</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 第 3 行：晶格矢量 a (×缩放因子)</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 第 4 行：晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 第 5 行：晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 第 6 行：元素符号（空格分隔）</span>
<span class="nu">2</span>                              <span class="cm">; 第 7 行：每种元素的原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 第 8 行：坐标类型</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; 第 9 行起：原子坐标</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),s[78]||(s[78]=m('<h3>2. 坐标类型</h3><table class="tb"><thead><tr><th>类型</th><th>关键字</th><th>格式</th><th>适用场景</th></tr></thead><tbody><tr><td>分数坐标</td><td><code>Direct</code></td><td>0~1</td><td>最常用</td></tr><tr><td>笛卡尔坐标</td><td><code>Cartesian</code></td><td>Å</td><td>分子/团簇</td></tr></tbody></table><h3>3. 选择性动力学</h3><p>允许固定部分原子，常用于表面计算。</p>',4)),t("div",Su,[t("div",wu,[s[32]||(s[32]=t("span",{class:"la"},"POSCAR",-1)),s[33]||(s[33]=t("span",{class:"fn"},"选择性动力学",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[34]||(s[34]=m(`<pre><code><span class="vr">Si surface</span>
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
<span class="nu">0.75  0.75  0.75</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span></code></pre>`,1))]),s[79]||(s[79]=t("h3",null,"4. 多元素体系",-1)),t("div",Eu,[t("div",Tu,[s[35]||(s[35]=t("span",{class:"la"},"POSCAR",-1)),s[36]||(s[36]=t("span",{class:"fn"},"TiO2 示例",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[37]||(s[37]=m(`<pre><code><span class="vr">TiO2 rutile</span>
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
<span class="nu">0.20  0.80  0.50</span>             <span class="cm">; O 原子 4</span></code></pre>`,1))]),s[80]||(s[80]=t("div",{class:"ib warn"},[t("strong",null,"重要："),v("POSCAR 中元素顺序必须与 POTCAR 一致！")],-1)),s[81]||(s[81]=t("h2",null,"KPOINTS 文件详解",-1)),s[82]||(s[82]=t("p",null,"KPOINTS 定义倒空间采样网格，控制计算精度。",-1)),s[83]||(s[83]=t("h3",null,"1. 自动网格模式（最常用）",-1)),t("div",Ru,[t("div",Ou,[s[38]||(s[38]=t("span",{class:"la"},"KPOINTS",-1)),s[39]||(s[39]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[40]||(s[40]=m(`<pre><code><span class="vr">Automatic mesh</span>               <span class="cm">; 注释行</span>
<span class="nu">0</span>                             <span class="cm">; 0 = 自动生成</span>
<span class="kw">Gamma</span>                         <span class="cm">; Gamma 中心网格</span>
<span class="nu">4  4  4</span>                       <span class="cm">; K 点网格</span>
<span class="nu">0.0  0.0  0.0</span>                <span class="cm">; 偏移量</span></code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"2. Monkhorst-Pack 网格",-1)),t("div",Iu,[t("div",Pu,[s[41]||(s[41]=t("span",{class:"la"},"KPOINTS",-1)),s[42]||(s[42]=t("span",{class:"fn"},"Monkhorst-Pack",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[43]||(s[43]=m(`<pre><code><span class="vr">Monkhorst-Pack mesh</span>
<span class="nu">0</span>
<span class="kw">Monkhorst</span>                     <span class="cm">; MP 网格（与 Gamma 不同偏移）</span>
<span class="nu">4  4  4</span>
<span class="nu">0.5  0.5  0.5</span>                <span class="cm">; 偏移 0.5</span></code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"3. Line-mode（能带计算）",-1)),t("div",Nu,[t("div",xu,[s[44]||(s[44]=t("span",{class:"la"},"KPOINTS",-1)),s[45]||(s[45]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[46]||(s[46]=m(`<pre><code><span class="vr">k-points along high symmetry lines</span>
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
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[86]||(s[86]=m(`<div class="ib warn"><strong>注意：</strong>Line-mode 需要空行分隔每条线段！</div><h3>4. K 点密度建议</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td><code>1×1×1</code></td><td>无周期性</td></tr></tbody></table><h2>POTCAR 文件详解</h2><p>POTCAR 包含赝势信息，定义元素的电子结构。</p><h3>1. 关键信息</h3><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>2. 赝势类型</h3><table class="tb"><thead><tr><th>类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><h3>3. 生成 POTCAR</h3>`,11)),t("div",qu,[t("div",Fu,[s[47]||(s[47]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[48]||(s[48]=m(`<pre><code><span class="cm"># 方法 1：手动拼接（注意顺序！）</span>
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
&quot;</code></pre>`,1))]),s[87]||(s[87]=t("h3",null,"4. 检查 POTCAR",-1)),t("div",Mu,[t("div",Du,[s[49]||(s[49]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[50]||(s[50]=m(`<pre><code><span class="cm"># 查看元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看价电子数</span>
<span class="fn2">grep</span> ZVAL POTCAR

<span class="cm"># 确认顺序与 POSCAR 一致</span>
<span class="fn2">head</span> -6 POSCAR  <span class="cm"># 查看 POSCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR <span class="cm"># 查看 POTCAR 元素</span></code></pre>`,1))]),s[88]||(s[88]=t("h2",null,"常用 INCAR 模板",-1)),s[89]||(s[89]=t("h3",null,"1. 金属结构优化",-1)),t("div",Vu,[t("div",$u,[s[51]||(s[51]=t("span",{class:"la"},"INCAR",-1)),s[52]||(s[52]=t("span",{class:"fn"},"金属优化",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[53]||(s[53]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Metal relaxation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 MP 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>               <span class="cm">; 较大的展宽</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"2. 绝缘体 DOS 计算",-1)),t("div",Bu,[t("div",Gu,[s[54]||(s[54]=t("span",{class:"la"},"INCAR",-1)),s[55]||(s[55]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[56]||(s[56]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Insulator DOS</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span></code></pre>`,1))]),s[91]||(s[91]=t("h3",null,"3. 表面计算",-1)),t("div",Lu,[t("div",Uu,[s[57]||(s[57]=t("span",{class:"la"},"INCAR",-1)),s[58]||(s[58]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[59]||(s[59]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Surface optimization</span>
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
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>                <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[92]||(s[92]=t("h3",null,"4. 磁性计算",-1)),t("div",Ku,[t("div",Wu,[s[60]||(s[60]=t("span",{class:"la"},"INCAR",-1)),s[61]||(s[61]=t("span",{class:"fn"},"磁性优化",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[62]||(s[62]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Magnetic calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>                <span class="cm">; 开启自旋极化</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>          <span class="cm">; 初始磁矩 (μB)</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"5. DFT+U 计算",-1)),t("div",Hu,[t("div",ju,[s[63]||(s[63]=t("span",{class:"la"},"INCAR",-1)),s[64]||(s[64]=t("span",{class:"fn"},"DFT+U",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[65]||(s[65]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DFT+U calculation</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"6. 杂化泛函 (HSE06)",-1)),t("div",zu,[t("div",_u,[s[66]||(s[66]=t("span",{class:"la"},"INCAR",-1)),s[67]||(s[67]=t("span",{class:"fn"},"HSE06",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...d)=>l.copy&&l.copy(...d))},"复制")]),s[68]||(s[68]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">HSE06 calculation</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[95]||(s[95]=t("div",{class:"ib warn"},[t("strong",null,"注意："),v("HSE06 计算量约为 PBE 的 10-100 倍，需要足够的计算资源。")],-1))])}const Yu=Q(uu,[["render",Zu]]),Xu={name:"TasksView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Ju={class:"sec active"},Qu={class:"bread"},sf={class:"cb"},nf={class:"ch"},tf={class:"cb"},af={class:"ch"},lf={class:"cb"},ef={class:"ch"},pf={class:"cb"},of={class:"ch"},cf={class:"cb"},df={class:"ch"},rf={class:"cb"},uf={class:"ch"},ff={class:"cb"},mf={class:"ch"},bf={class:"cb"},vf={class:"ch"},gf={class:"cb"},hf={class:"ch"},yf={class:"cb"},kf={class:"ch"},Cf={class:"cb"},Af={class:"ch"},Sf={class:"cb"},wf={class:"ch"},Ef={class:"cb"},Tf={class:"ch"},Rf={class:"cb"},Of={class:"ch"};function If(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Ju,[t("div",Qu,[w(c,{to:"/"},{default:R(()=>[...s[14]||(s[14]=[v("首页",-1)])]),_:1}),s[15]||(s[15]=v("/",-1)),s[16]||(s[16]=t("span",null,"计算任务",-1))]),s[58]||(s[58]=m('<h2>计算任务总览</h2><p>VASP 可以执行多种计算任务，每种任务有特定的参数设置和工作流程。</p><h3>基础计算</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔄</div><div class="pc-t">结构优化</div><div class="pc-d">弛豫原子位置和晶格参数</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">📈</div><div class="pc-t">态密度 DOS</div><div class="pc-d">电子态在能量上的分布</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📉</div><div class="pc-t">能带结构</div><div class="pc-d">沿高对称路径的能带色散</div></div></div><h2>结构优化</h2><p>结构优化是最基本的计算任务，目的是找到能量最低的原子构型。</p><h3>1. 何时需要结构优化</h3><ul><li>从实验结构或文献结构开始计算</li><li>构建了新的表面或缺陷结构</li><li>需要计算准确的晶格参数</li><li>后续计算（DOS、能带等）需要在优化结构上进行</li></ul><h3>2. 完整输入文件</h3><h4>INCAR</h4>',10)),t("div",sf,[t("div",nf,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"体相结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk relaxation</span>

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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度 (eV)</span></code></pre>`,1))]),s[59]||(s[59]=t("h4",null,"POSCAR",-1)),t("div",tf,[t("div",af,[s[20]||(s[20]=t("span",{class:"la"},"POSCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[22]||(s[22]=m(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 注释行</span>
<span class="nu">1.0</span>                           <span class="cm">; 缩放因子</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 晶格矢量 a</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 元素符号</span>
<span class="nu">2</span>                              <span class="cm">; 原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 分数坐标</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Si 原子 1</span>
<span class="nu">0.25  0.25  0.25</span>             <span class="cm">; Si 原子 2</span></code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"KPOINTS",-1)),t("div",lf,[t("div",ef,[s[23]||(s[23]=t("span",{class:"la"},"KPOINTS",-1)),s[24]||(s[24]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; K 点网格 (N_k × a ≈ 30)</span>
<span class="nu">0.0  0.0  0.0</span>         <span class="cm">; 偏移</span></code></pre>`,1))]),s[61]||(s[61]=m('<h3>3. ISIF 参数详解</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用场景</th></tr></thead><tbody><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附、固定晶格</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化（最常用）</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积、优化形状</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格、固定离子</td></tr></tbody></table><h3>4. 结果验证</h3>',3)),t("div",pf,[t("div",of,[s[26]||(s[26]=t("span",{class:"la"},"bash",-1)),s[27]||(s[27]=t("span",{class:"fn"},"验证收敛",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[28]||(s[28]=m(`<pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR

<span class="cm"># 查看最终能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR</code></pre>`,1))]),s[62]||(s[62]=m('<div class="ib tip"><strong>收敛标准：</strong>最大力 &lt; 0.02 eV/Å，外部压力 &lt; 1 kbar 表示优化收敛良好。</div><h2>态密度 DOS 计算</h2><p>DOS 计算需要两步：① 结构优化 ② 静态计算（密集 k 点）</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">复制 CONTCAR → DOS 计算目录</div><div class="fa"></div><div class="fn2-node p">设置密集 K 点（12×12×12）</div><div class="fa"></div><div class="fn2-node p">运行静态计算</div><div class="fa"></div><div class="fn2-node e">处理 DOSCAR 数据</div></div><h3>2. DOS 计算输入文件</h3>',6)),t("div",cf,[t("div",df,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"DOS 静态计算",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[31]||(s[31]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si DOS calculation</span>

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
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span>            <span class="cm">; 保留电荷密度</span></code></pre>`,1))]),t("div",rf,[t("div",uf,[s[32]||(s[32]=t("span",{class:"la"},"KPOINTS",-1)),s[33]||(s[33]=t("span",{class:"fn"},"密集 K 点",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[34]||(s[34]=m(`<pre><code><span class="vr">DOS k-points</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">12  12  12</span>              <span class="cm">; DOS 需要更密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[63]||(s[63]=t("div",{class:"ib note"},[t("strong",null,"ISMEAR 选择："),v("绝缘体/半导体用 -5（四面体），金属用 0（Gaussian）配合 SIGMA=0.05。")],-1)),s[64]||(s[64]=t("h3",null,"3. 处理 DOS 数据",-1)),t("div",ff,[t("div",mf,[s[35]||(s[35]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[36]||(s[36]=m(`<pre><code><span class="cm"># 使用 VASPKIT 提取 DOS</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 3 → DOS Analysis</span>
<span class="cm"># 1 → Generate Total DOS</span>

<span class="cm"># 或使用 pymatgen</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
vr = Vasprun(<span class="st">&#39;vasprun.xml&#39;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos
<span class="fn2">print</span>(f<span class="st">&#39;带隙: {dos.get_band_gap()[\\&quot;energy\\&quot;]:.3f} eV&#39;</span>)
&quot;</code></pre>`,1))]),s[65]||(s[65]=m('<h2>能带结构计算</h2><p>能带计算需要：① 静态计算生成 WAVECAR ② 沿高对称路径非自洽计算</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">静态计算（生成 WAVECAR）</div><div class="fa"></div><div class="fn2-node p">生成 K 点路径</div><div class="fa"></div><div class="fn2-node p">非自洽计算（ICHARG=11）</div><div class="fa"></div><div class="fn2-node e">处理 EIGENVAL 数据</div></div><h3>2. 第一步：静态计算</h3>',5)),t("div",bf,[t("div",vf,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"能带前的静态计算",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[39]||(s[39]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static for band</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[66]||(s[66]=t("h3",null,"3. 第二步：能带计算",-1)),s[67]||(s[67]=t("h4",null,"生成 K 点路径",-1)),t("div",gf,[t("div",hf,[s[40]||(s[40]=t("span",{class:"la"},"bash",-1)),s[41]||(s[41]=t("span",{class:"fn"},"使用 vaspkit 生成",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[42]||(s[42]=m(`<pre><code><span class="cm"># 方法 1：使用 vaspkit 自动生成</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动生成带标签的 KPOINTS</span></code></pre>`,1))]),s[68]||(s[68]=t("h4",null,"手动编写 KPOINTS（以 Si 为例）",-1)),t("div",yf,[t("div",kf,[s[43]||(s[43]=t("span",{class:"la"},"KPOINTS",-1)),s[44]||(s[44]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[45]||(s[45]=m(`<pre><code><span class="vr">k-points along high symmetry lines</span>
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
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[69]||(s[69]=t("div",{class:"ib warn"},[t("strong",null,"注意："),v("Line-mode KPOINTS 需要空行分隔每条线段！")],-1)),s[70]||(s[70]=t("h4",null,"能带计算 INCAR",-1)),t("div",Cf,[t("div",Af,[s[46]||(s[46]=t("span",{class:"la"},"INCAR",-1)),s[47]||(s[47]=t("span",{class:"fn"},"能带非自洽计算",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[48]||(s[48]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>

<span class="cm"># 关键：非自洽计算</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>               <span class="cm">; 从 WAVECAR 读取电荷密度</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出投影能带</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>`,1))]),s[71]||(s[71]=m('<h3>4. 高对称点参考</h3><table class="tb"><thead><tr><th>晶系</th><th>常用路径</th></tr></thead><tbody><tr><td>立方 (cubic)</td><td>Γ → X → M → Γ → R → X</td></tr><tr><td>四方 (tetragonal)</td><td>Γ → X → M → Γ → Z → R → A</td></tr><tr><td>六方 (hexagonal)</td><td>Γ → M → K → Γ → A → L</td></tr><tr><td>正交 (orthorhombic)</td><td>Γ → X → S → Y → Γ → Z → U</td></tr></tbody></table><h3>5. 处理能带数据</h3>',3)),t("div",Sf,[t("div",wf,[s[49]||(s[49]=t("span",{class:"la"},"python",-1)),s[50]||(s[50]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[51]||(s[51]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[72]||(s[72]=t("h2",null,"静态计算",-1)),s[73]||(s[73]=t("p",null,"静态计算用于在固定结构上计算电子性质，不改变原子位置。",-1)),s[74]||(s[74]=t("h3",null,"INC AR 设置",-1)),t("div",Ef,[t("div",Tf,[s[52]||(s[52]=t("span",{class:"la"},"INCAR",-1)),s[53]||(s[53]=t("span",{class:"fn"},"静态计算",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[54]||(s[54]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static calculation</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[75]||(s[75]=m('<h2>任务类型对比</h2><table class="tb"><thead><tr><th>任务类型</th><th>IBRION</th><th>NSW</th><th>ISIF</th><th>ISMEAR</th><th>输出</th></tr></thead><tbody><tr><td>结构优化</td><td>1 或 2</td><td>&gt;0</td><td>2 或 3</td><td>0 或 1</td><td>CONTCAR</td></tr><tr><td>静态计算</td><td>-1</td><td>0</td><td>-</td><td>0/-5</td><td>DOSCAR</td></tr><tr><td>DOS 计算</td><td>-1</td><td>0</td><td>-</td><td>-5</td><td>DOSCAR</td></tr><tr><td>能带计算</td><td>-1</td><td>0</td><td>-</td><td>0</td><td>EIGENVAL</td></tr></tbody></table><h2>完整工作流示例</h2>',3)),t("div",Rf,[t("div",Of,[s[55]||(s[55]=t("span",{class:"la"},"bash",-1)),s[56]||(s[56]=t("span",{class:"fn"},"workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[57]||(s[57]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))])])}const Pf=Q(Xu,[["render",If]]),Nf={name:"OutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},xf={class:"sec active"},qf={class:"bread"},Ff={class:"cb"},Mf={class:"ch"},Df={class:"cb"},Vf={class:"ch"},$f={class:"cb"},Bf={class:"ch"},Gf={class:"cb"},Lf={class:"ch"},Uf={class:"cb"},Kf={class:"ch"},Wf={class:"cb"},Hf={class:"ch"},jf={class:"cb"},zf={class:"ch"},_f={class:"cb"},Zf={class:"ch"},Yf={class:"cb"},Xf={class:"ch"};function Jf(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",xf,[t("div",qf,[w(c,{to:"/"},{default:R(()=>[...s[9]||(s[9]=[v("首页",-1)])]),_:1}),s[10]||(s[10]=v("/",-1)),s[11]||(s[11]=t("span",null,"结果分析",-1))]),s[35]||(s[35]=m('<h2>输出文件解读</h2><p>理解 VASP 输出文件是成功完成计算的关键。本节详细介绍各输出文件的内容和分析方法。</p><h3>输出文件总览</h3><table class="tb"><thead><tr><th>文件</th><th>内容</th><th>大小</th><th>重要性</th></tr></thead><tbody><tr><td><code>OUTCAR</code></td><td>详细输出（所有计算信息）</td><td>大</td><td>★★★★★</td></tr><tr><td><code>OSZICAR</code></td><td>迭代摘要（收敛曲线）</td><td>小</td><td>★★★★</td></tr><tr><td><code>CONTCAR</code></td><td>最终结构（下一步 POSCAR）</td><td>小</td><td>★★★★★</td></tr><tr><td><code>DOSCAR</code></td><td>态密度数据</td><td>中</td><td>★★★</td></tr><tr><td><code>EIGENVAL</code></td><td>本征值（能带数据）</td><td>中</td><td>★★★</td></tr><tr><td><code>CHGCAR</code></td><td>电荷密度</td><td>大</td><td>★★</td></tr><tr><td><code>WAVECAR</code></td><td>波函数</td><td>很大</td><td>★★</td></tr><tr><td><code>vasprun.xml</code></td><td>XML 格式完整输出</td><td>大</td><td>★★★★</td></tr></tbody></table><h2>OUTCAR 详解</h2><p>OUTCAR 包含 VASP 计算的所有详细信息，是最重要的输出文件。</p><h3>1. 关键信息位置</h3><table class="tb"><thead><tr><th>信息</th><th>grep 命令</th><th>说明</th></tr></thead><tbody><tr><td>总能量（自由能）</td><td><code>grep &quot;free energy&quot; OUTCAR</code></td><td>最重要的能量</td></tr><tr><td>总能量（无熵）</td><td><code>grep &quot;energy without&quot; OUTCAR</code></td><td>更准确的能量</td></tr><tr><td>力</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td><td>每个原子的力</td></tr><tr><td>应力</td><td><code>grep &quot;in kB&quot; OUTCAR</code></td><td>应力张量</td></tr><tr><td>外部压力</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td><td>标量压力</td></tr><tr><td>费米能级</td><td><code>grep &quot;E-fermi&quot; OUTCAR</code></td><td>费米能</td></tr><tr><td>磁矩</td><td><code>grep &quot;magnetization&quot; OUTCAR</code></td><td>自旋磁矩</td></tr><tr><td>收敛检查</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td><td>是否收敛</td></tr><tr><td>计算时间</td><td><code>grep &quot;Total CPU time&quot; OUTCAR</code></td><td>总耗时</td></tr><tr><td>NELECT</td><td><code>grep &quot;NELECT&quot; OUTCAR</code></td><td>总电子数</td></tr></tbody></table><h3>2. 提取能量</h3>',9)),t("div",Ff,[t("div",Mf,[s[12]||(s[12]=t("span",{class:"la"},"bash",-1)),s[13]||(s[13]=t("span",{class:"fn"},"提取能量",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="cm"># 提取最终自由能</span>
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
<span class="fn2">echo</span> <span class="st">&quot;每原子能量: $per_atom eV/atom&quot;</span></code></pre>`,1))]),s[36]||(s[36]=t("h3",null,"3. 提取力和应力",-1)),t("div",Df,[t("div",Vf,[s[15]||(s[15]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="cm"># 查看最后一步的力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">10</span> | <span class="fn2">tail</span> -12
<span class="cm"># 输出每个原子的 x y z 力分量</span>

<span class="cm"># 提取最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: XX YY ZZ XY YZ ZX</span>

<span class="cm"># 查看外部压力（标量）</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: external pressure =    -1.23 kB</span></code></pre>`,1))]),s[37]||(s[37]=t("h3",null,"4. 检查收敛状态",-1)),t("div",$f,[t("div",Bf,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=m(`<pre><code><span class="cm"># 检查是否收敛（输出包含 &quot;reached required&quot; 表示收敛）</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR
<span class="cm"># 成功输出: reached required accuracy - stopping structural energy minimisation</span>

<span class="cm"># 检查电子步收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;EDIFF&quot;</span> OUTCAR

<span class="cm"># 查看离子步数</span>
<span class="fn2">grep</span> <span class="st">&quot;FREE ENERGIE&quot;</span> OUTCAR | <span class="fn2">wc</span> -l</code></pre>`,1))]),s[38]||(s[38]=t("div",{class:"ib tip"},[t("strong",null,"收敛判断："),v("看到 "),t("code",null,"reached required accuracy"),v(" 表示计算成功收敛。")],-1)),s[39]||(s[39]=t("h3",null,"5. 检查计算状态",-1)),t("div",Gf,[t("div",Lf,[s[19]||(s[19]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[20]||(s[20]=m(`<pre><code><span class="cm"># 检查是否有错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR

<span class="cm"># 查看计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR

<span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -5

<span class="cm"># 查看 K 点信息</span>
<span class="fn2">grep</span> <span class="st">&quot;NKPTS&quot;</span> OUTCAR | <span class="fn2">head</span> -1</code></pre>`,1))]),s[40]||(s[40]=m(`<h2>OSZICAR 详解</h2><p>OSZICAR 记录每次迭代的简要信息，用于监控收敛过程。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">OSZICAR</span><span class="fn">示例内容</span></div><pre><code><span class="cm"># 列说明: N  E  dE  dep  dep2  ncg  rms  rms(cg)</span>
   1  F= -.156234E+03 E0= -.156234E+03  d E =-.156234E+03  mag=     0.0000
   2  F= -.156456E+03 E0= -.156456E+03  d E =-.222000E-01  mag=     0.0000
   3  F= -.156467E+03 E0= -.156467E+03  d E =-.110000E-02  mag=     0.0000
   4  F= -.156468E+03 E0= -.156468E+03  d E =-.100000E-04  mag=     0.0000
   5 F= -.156468E+03 E0= -.156468E+03  d E =-.980000E-06  mag=     0.0000</code></pre></div><table class="tb"><thead><tr><th>列</th><th>含义</th></tr></thead><tbody><tr><td>N</td><td>离子步数（或电子步数）</td></tr><tr><td>F</td><td>总能量</td></tr><tr><td>E0</td><td>无熵校正能量</td></tr><tr><td>d E</td><td>能量变化</td></tr><tr><td>mag</td><td>总磁矩</td></tr></tbody></table><h3>2. 绘制收敛曲线</h3>`,6)),t("div",Uf,[t("div",Kf,[s[21]||(s[21]=t("span",{class:"la"},"python",-1)),s[22]||(s[22]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[23]||(s[23]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[41]||(s[41]=t("h2",null,"CONTCAR 详解",-1)),s[42]||(s[42]=t("p",null,"CONTCAR 包含优化后的最终结构，格式与 POSCAR 相同。",-1)),s[43]||(s[43]=t("h3",null,"使用注意事项",-1)),s[44]||(s[44]=t("ul",null,[t("li",null,[t("strong",null,"下一次计算"),v("：将 CONTCAR 复制为 POSCAR 继续计算")]),t("li",null,[t("strong",null,"检查晶格变化"),v("：比较初始和最终晶格常数")]),t("li",null,[t("strong",null,"检查原子位置"),v("：确认优化后的结构合理")])],-1)),t("div",Wf,[t("div",Hf,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm"># 查看优化后的晶格常数</span>
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
&quot;</code></pre>`,1))]),s[45]||(s[45]=m(`<h2>DOSCAR 详解</h2><p>DOSCAR 包含态密度数据，用于分析电子结构。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">DOSCAR</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1: 原子数
Line 2-5: 头部信息
Line 6: NEDOS EMIN EMAX EFERMI SPIN
Line 7-NEDOS+6: 能量 DOS(上) DOS(下) 积分DOS(上) 积分DOS(下)
<span class="cm"># 后续是每个原子的分波 DOS</span></code></pre></div><h3>2. 提取和绘制 DOS</h3>`,5)),t("div",jf,[t("div",zf,[s[26]||(s[26]=t("span",{class:"la"},"python",-1)),s[27]||(s[27]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[28]||(s[28]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[46]||(s[46]=m(`<h2>EIGENVAL 详解</h2><p>EIGENVAL 包含本征值数据，用于绘制能带结构。</p><h3>文件格式</h3><div class="cb"><div class="ch"><span class="la">EIGENVAL</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1-4: 头部信息
Line 5: NEDOS NKPTS NBANDS (能量点数, K点数, 能带数)
Line 6: 空行
<span class="cm"># 重复以下结构（每个 K 点）：</span>
Line: kx ky kz weight
Line: band_index energy occupancy
<span class="cm"># ... (NBANDS 行)</span></code></pre></div><h2>计算成功判断标准</h2><h3>1. 结构优化成功标志</h3><table class="tb"><thead><tr><th>检查项</th><th>成功标志</th><th>检查命令</th></tr></thead><tbody><tr><td>收敛</td><td>输出 &quot;reached required accuracy&quot;</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td></tr><tr><td>力</td><td>最大力 &lt; 0.02 eV/Å</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td></tr><tr><td>压力</td><td>外部压力 &lt; 1 kbar</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td></tr><tr><td>能量</td><td>能量变化 &lt; EDIFF</td><td><code>grep &quot;d E&quot; OSZICAR</code></td></tr></tbody></table><h3>2. 常见失败模式</h3><table class="tb"><thead><tr><th>问题</th><th>症状</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>电子步达到 NELM</td><td>调整 MAGMOM、ISMEAR</td></tr><tr><td>结构发散</td><td>能量持续增大</td><td>减小 POTIM</td></tr><tr><td>原子跑飞</td><td>能量 ~10^6 eV</td><td>检查初始结构</td></tr><tr><td>内存不足</td><td>Killed</td><td>使用 LREAL=Auto</td></tr></tbody></table><h3>3. 完整检查脚本</h3>`,10)),t("div",_f,[t("div",Zf,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),s[30]||(s[30]=t("span",{class:"fn"},"check_calc.sh",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[31]||(s[31]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 检查完成 ===&quot;</span></code></pre>`,1))]),s[47]||(s[47]=t("h2",null,"收敛性测试",-1)),s[48]||(s[48]=t("p",null,"收敛性测试确保计算参数足够精确。",-1)),t("div",Yf,[t("div",Xf,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),s[33]||(s[33]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[34]||(s[34]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[49]||(s[49]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),v("相邻 ENCUT 能量差 < 1 meV/atom 时收敛。")],-1))])}const Qf=Q(Nf,[["render",Jf]]),s1={name:"ErrorsView",data(){return{openSections:{e1:!0,e2:!1}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},n1={class:"sec active"},t1={class:"bread"},a1={class:"cb"},l1={class:"ch"},e1={class:"ec-b"},p1={class:"cb"},o1={class:"ch"},c1={class:"ec-b"},d1={class:"cb"},r1={class:"ch"};function i1(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",n1,[t("div",t1,[w(c,{to:"/"},{default:R(()=>[...s[5]||(s[5]=[v("首页",-1)])]),_:1}),s[6]||(s[6]=v("/",-1)),s[7]||(s[7]=t("span",null,"错误诊断",-1))]),s[23]||(s[23]=m('<h2>VASP 错误诊断系统</h2><p>使用 VASP 时难免遇到报错，这个系统帮你快速定位和解决问题。</p><div class="pg"><div class="pc" style="--ca:var(--red);"><div class="pc-i">⚡</div><div class="pc-t">SCF 不收敛</div><div class="pc-d">电子步迭代无法收敛——最高频问题</div></div><div class="pc" style="--ca:var(--orange);"><div class="pc-i">💥</div><div class="pc-t">离子步问题</div><div class="pc-d">优化不收敛、力振荡、原子跑飞</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">💾</div><div class="pc-t">内存与性能</div><div class="pc-d">内存溢出、计算太慢、并行效率低</div></div><div class="pc" style="--ca:var(--blue);"><div class="pc-i">📂</div><div class="pc-t">文件错误</div><div class="pc-d">POTCAR 不匹配、POSCAR 格式错误</div></div></div><h3>通用诊断流程</h3><div class="fc"><div class="fn2-node s">VASP 计算异常终止</div><div class="fa"></div><div class="fn2-node p">① 查看 OUTCAR 最后 50 行</div><div class="fa"></div><div class="fn2-node p">② 查看 OSZICAR 收敛情况</div><div class="fa"></div><div class="fn2-node p">③ 检查四个输入文件</div><div class="fa"></div><div class="fn2-node p">④ 搜索错误关键词</div><div class="fa"></div><div class="fn2-node e">定位问题 → 应用解决方案</div></div>',5)),t("div",a1,[t("div",l1,[s[8]||(s[8]=t("span",{class:"la"},"bash",-1)),s[9]||(s[9]=t("span",{class:"fn"},"快速诊断",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[10]||(s[10]=m(`<pre><code><span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort\\|ZBRENT\\|DENTET&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">cat</span> OSZICAR
<span class="fn2">df</span> -h .</code></pre>`,1))]),s[24]||(s[24]=t("h3",null,"SCF 不收敛问题",-1)),s[25]||(s[25]=t("p",null,"SCF 不收敛是最高频的问题。以下是完整排查清单。",-1)),t("div",{class:_(["ec",{open:o.openSections.e1}]),onClick:s[2]||(s[2]=e=>l.toggle("e1"))},[s[16]||(s[16]=m('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 1：电子步达到 NELM 上限仍未收敛</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",e1,[s[13]||(s[13]=t("h4",null,"症状",-1)),s[14]||(s[14]=t("div",{class:"esym"},[v("DAV: 64 -0.275E+03 0.217E+00 -0.109E+00"),t("br"),v("（能量差持续振荡不下降）")],-1)),s[15]||(s[15]=t("h4",null,"解决方案",-1)),t("div",p1,[t("div",o1,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=ql((...e)=>l.copy&&l.copy(...e),["stop"]))},"复制")]),s[12]||(s[12]=m(`<pre><code><span class="cm"># 方案 1：降低收敛标准</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span></code></pre>`,1))])])],2),t("div",{class:_(["ec",{open:o.openSections.e2}]),onClick:s[4]||(s[4]=e=>l.toggle("e2"))},[s[22]||(s[22]=m('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 2：DENTET - 能带数不足</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",c1,[s[19]||(s[19]=t("h4",null,"症状",-1)),s[20]||(s[20]=t("div",{class:"esym"},[v("WARNING: DENTET: can't reach specified NBANDS"),t("br"),v("NELECT = 120.0000 NBANDS = 64")],-1)),s[21]||(s[21]=t("h4",null,"解决方案",-1)),t("div",d1,[t("div",r1,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=ql((...e)=>l.copy&&l.copy(...e),["stop"]))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[t("span",{class:"kw"},"NBANDS"),v("   = "),t("span",{class:"nu"},"160"),v(`
`),t("span",{class:"cm"},"# 经验: NBANDS ≥ NELECT/2 + N_atoms/2")])],-1))])])],2)])}const u1=Q(s1,[["render",i1]]),f1={name:"ToolsView",methods:{openLink(n){window.open(n,"_blank")},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},m1={class:"sec active"},b1={class:"bread"},v1={class:"pg"},g1={class:"cb"},h1={class:"ch"},y1={class:"cb"},k1={class:"ch"},C1={class:"cb"},A1={class:"ch"},S1={class:"cb"},w1={class:"ch"},E1={class:"cb"},T1={class:"ch"},R1={class:"cb"},O1={class:"ch"},I1={class:"cb"},P1={class:"ch"},N1={class:"cb"},x1={class:"ch"},q1={class:"cb"},F1={class:"ch"},M1={class:"cb"},D1={class:"ch"},V1={class:"cb"},$1={class:"ch"},B1={class:"cb"},G1={class:"ch"},L1={class:"cb"},U1={class:"ch"},K1={class:"cb"},W1={class:"ch"},H1={class:"cb"},j1={class:"ch"},z1={class:"cb"},_1={class:"ch"},Z1={class:"cb"},Y1={class:"ch"};function X1(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",m1,[t("div",b1,[w(c,{to:"/"},{default:R(()=>[...s[21]||(s[21]=[v("首页",-1)])]),_:1}),s[22]||(s[22]=v("/",-1)),s[23]||(s[23]=t("span",null,"工具与资源",-1))]),s[74]||(s[74]=t("h2",null,"辅助工具",-1)),s[75]||(s[75]=t("p",null,"VASP 计算需要配合多种工具进行结构可视化、数据处理和后分析。",-1)),t("div",v1,[w(c,{to:"/tools/calculator",class:"pc",style:{"--ca":"var(--cyan)"}},{default:R(()=>[...s[24]||(s[24]=[t("div",{class:"pc-i"},"🔧",-1),t("div",{class:"pc-t"},"参数计算器",-1),t("div",{class:"pc-d"},"ENCUT、K 点、形成能等计算工具",-1)])]),_:1}),t("div",{class:"pc",style:{"--ca":"var(--blue)"},onClick:s[0]||(s[0]=e=>l.openLink("https://www.vasp.at/wiki/index.php/VESTA"))},[...s[25]||(s[25]=[t("div",{class:"pc-i"},"🔬",-1),t("div",{class:"pc-t"},"VESTA",-1),t("div",{class:"pc-d"},"晶体结构可视化",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--green)"},onClick:s[1]||(s[1]=e=>l.openLink("https://vaspkit.com"))},[...s[26]||(s[26]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"VASPKIT",-1),t("div",{class:"pc-d"},"后处理工具包",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--purple)"},onClick:s[2]||(s[2]=e=>l.openLink("https://pymatgen.org"))},[...s[27]||(s[27]=[t("div",{class:"pc-i"},"🐍",-1),t("div",{class:"pc-t"},"pymatgen",-1),t("div",{class:"pc-d"},"Python 材料分析库",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--orange)"},onClick:s[3]||(s[3]=e=>l.openLink("https://phonopy.github.io/phonopy"))},[...s[28]||(s[28]=[t("div",{class:"pc-i"},"🔊",-1),t("div",{class:"pc-t"},"phonopy",-1),t("div",{class:"pc-d"},"声子计算工具",-1)])])]),s[76]||(s[76]=m(`<h2>VESTA 使用入门</h2><p>VESTA 是最常用的晶体结构可视化软件，支持多种格式。</p><h3>1. 基本操作</h3><table class="tb"><thead><tr><th>操作</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>打开文件</td><td>File → Open → 选择 POSCAR</td><td>支持 VASP、CIF、XSF 等格式</td></tr><tr><td>旋转结构</td><td>鼠标左键拖动</td><td>多角度查看</td></tr><tr><td>缩放</td><td>鼠标滚轮</td><td>放大/缩小</td></tr><tr><td>平移</td><td>鼠标右键拖动</td><td>移动视角</td></tr><tr><td>测量距离</td><td>Utilities → Distance</td><td>点击两个原子</td></tr><tr><td>测量角度</td><td>Utilities → Angle</td><td>点击三个原子</td></tr><tr><td>截图</td><td>File → Export Raster Image</td><td>导出 PNG/JPG</td></tr></tbody></table><h3>2. 显示设置</h3><div class="cb"><div class="ch"><span class="la">VESTA</span><span class="fn">常用设置路径</span></div><pre><code><span class="cm"># 修改原子大小和颜色</span>
Objects → Atoms → Properties

<span class="cm"># 显示晶胞边界</span>
Objects → Unit cell → Boundary

<span class="cm"># 显示键</span>
Objects → Bonds → Search bonds

<span class="cm"># 显示坐标轴</span>
Objects → Axes

<span class="cm"># 修改背景颜色</span>
View → Background color</code></pre></div><h3>3. 常用技巧</h3><ul><li><strong>显示超胞：</strong>Edit → Edit Data → Structure → Transform → 扩展晶胞</li><li><strong>切表面：</strong>Utilities → Boundary → 设置截断平面</li><li><strong>导出高分辨率图：</strong>File → Export → 设置 DPI ≥ 300</li><li><strong>比较结构：</strong>File → Open → 选择多个文件同时显示</li></ul><h2>VASPKIT 使用指南</h2><p>VASPKIT 是 VASP 后处理的瑞士军刀，提供 200+ 功能。</p><h3>1. 安装与配置</h3>`,11)),t("div",g1,[t("div",h1,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[30]||(s[30]=m(`<pre><code><span class="cm"># 下载安装</span>
<span class="fn2">git</span> clone https://github.com/vaspkit/VASPKIT.git
<span class="fn2">cd</span> VASPKIT
<span class="fn2">./setup.sh</span>

<span class="cm"># 配置环境变量（添加到 ~/.bashrc）</span>
<span class="fn2">export</span> PATH=$PATH:~/VASPKIT/bin

<span class="cm"># 验证安装</span>
<span class="fn2">vaspkit</span> -v</code></pre>`,1))]),s[77]||(s[77]=m('<h3>2. 常用功能速查</h3><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>生成 K 路径</td><td>2 → 2 → 1</td><td>Line-mode KPOINTS</td></tr><tr><td>处理 DOS</td><td>3 → 1 → 1</td><td>提取 DOS 数据</td></tr><tr><td>处理能带</td><td>3 → 2 → 1</td><td>提取能带数据</td></tr><tr><td>电荷密度</td><td>5 → 1</td><td>处理 CHGCAR</td></tr><tr><td>结构转换</td><td>7 → 1</td><td>POSCAR ↔ CIF</td></tr><tr><td>生成 POTCAR</td><td>1 → 1</td><td>自动拼接赝势</td></tr></tbody></table><h3>3. 生成 K 点路径</h3>',3)),t("div",y1,[t("div",k1,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),s[32]||(s[32]=t("span",{class:"fn"},"vaspkit 生成能带 K 路径",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[33]||(s[33]=m(`<pre><code><span class="cm"># 运行 vaspkit</span>
<span class="fn2">vaspkit</span>

<span class="cm"># 选择菜单</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动识别高对称点并生成 KPOINTS</span></code></pre>`,1))]),s[78]||(s[78]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",C1,[t("div",A1,[s[34]||(s[34]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[35]||(s[35]=m(`<pre><code><span class="cm"># 提取总 DOS</span>
<span class="fn2">vaspkit</span> -task 311

<span class="cm"># 提取分波 DOS (PDOS)</span>
<span class="fn2">vaspkit</span> -task 312

<span class="cm"># 生成 DOS 数据文件（TOTEL_DOS.dat, PDOS_*.dat）</span>

<span class="cm"># 使用 origin 或 gnuplot 绘图</span></code></pre>`,1))]),s[79]||(s[79]=t("h2",null,"pymatgen Python 示例",-1)),s[80]||(s[80]=t("p",null,"pymatgen 是最强大的 Python 材料分析库，支持 VASP 输入输出处理。",-1)),s[81]||(s[81]=t("h3",null,"1. 安装",-1)),t("div",S1,[t("div",w1,[s[36]||(s[36]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[37]||(s[37]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 pymatgen"),v(`
`),t("span",{class:"fn2"},"pip"),v(` install pymatgen

`),t("span",{class:"cm"},"# 安装 VASP 接口依赖"),v(`
`),t("span",{class:"fn2"},"pip"),v(" install pymatgen-analysis-diffusion")])],-1))]),s[82]||(s[82]=t("h3",null,"2. 读取和处理结构",-1)),t("div",E1,[t("div",T1,[s[38]||(s[38]=t("span",{class:"la"},"python",-1)),s[39]||(s[39]=t("span",{class:"fn"},"read_structure.py",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[40]||(s[40]=m(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)</code></pre>`,1))]),s[83]||(s[83]=t("h3",null,"3. 处理 VASP 输出",-1)),t("div",R1,[t("div",O1,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"read_vasp_output.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[43]||(s[43]=m(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun, Outcar

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
<span class="fn2">print</span>(f<span class="st">&quot;费米能级: {outcar.efermi:.4f} eV&quot;</span>)</code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",I1,[t("div",P1,[s[44]||(s[44]=t("span",{class:"la"},"python",-1)),s[45]||(s[45]=t("span",{class:"fn"},"dos_analysis.py",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[46]||(s[46]=m(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
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
plt.show()</code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"5. 处理能带数据",-1)),t("div",N1,[t("div",x1,[s[47]||(s[47]=t("span",{class:"la"},"python",-1)),s[48]||(s[48]=t("span",{class:"fn"},"band_analysis.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[49]||(s[49]=m(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> BSVasprun
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
plt.show()</code></pre>`,1))]),s[86]||(s[86]=t("h2",null,"phonopy 声子计算",-1)),s[87]||(s[87]=t("p",null,"phonopy 是计算声子谱的标准工具。",-1)),s[88]||(s[88]=t("h3",null,"1. 安装",-1)),t("div",q1,[t("div",F1,[s[50]||(s[50]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[51]||(s[51]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 phonopy"),v(`
`),t("span",{class:"fn2"},"pip"),v(` install phonopy

`),t("span",{class:"cm"},"# 验证安装"),v(`
`),t("span",{class:"fn2"},"phonopy"),v(" --version")])],-1))]),s[89]||(s[89]=t("h3",null,"2. 基本工作流",-1)),t("div",M1,[t("div",D1,[s[52]||(s[52]=t("span",{class:"la"},"bash",-1)),s[53]||(s[53]=t("span",{class:"fn"},"phonopy_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[54]||(s[54]=m(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"3. band.conf 配置文件",-1)),t("div",V1,[t("div",$1,[s[55]||(s[55]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[56]||(s[56]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 声子谱计算配置"),v(`
ATOM_NAME = Si
DIM = 3 3 3

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),v(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51`)])],-1))]),s[91]||(s[91]=t("h2",null,"常用后处理脚本",-1)),s[92]||(s[92]=t("h3",null,"1. 能量提取脚本",-1)),t("div",B1,[t("div",G1,[s[57]||(s[57]=t("span",{class:"la"},"bash",-1)),s[58]||(s[58]=t("span",{class:"fn"},"get_energy.sh",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[59]||(s[59]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"2. DOS 绘图脚本",-1)),t("div",L1,[t("div",U1,[s[60]||(s[60]=t("span",{class:"la"},"python",-1)),s[61]||(s[61]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[62]||(s[62]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"3. 能带图绘制脚本",-1)),t("div",K1,[t("div",W1,[s[63]||(s[63]=t("span",{class:"la"},"python",-1)),s[64]||(s[64]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[17]||(s[17]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[65]||(s[65]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[95]||(s[95]=t("h2",null,"批量计算脚本模板",-1)),s[96]||(s[96]=t("h3",null,"1. 批量结构优化",-1)),t("div",H1,[t("div",j1,[s[66]||(s[66]=t("span",{class:"la"},"bash",-1)),s[67]||(s[67]=t("span",{class:"fn"},"batch_optimize.sh",-1)),t("button",{class:"cpb",onClick:s[18]||(s[18]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[68]||(s[68]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;All jobs submitted!&quot;</span></code></pre>`,1))]),s[97]||(s[97]=t("h3",null,"2. ENCUT 收敛测试",-1)),t("div",z1,[t("div",_1,[s[69]||(s[69]=t("span",{class:"la"},"bash",-1)),s[70]||(s[70]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[19]||(s[19]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[71]||(s[71]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[98]||(s[98]=t("h2",null,"常用命令速查",-1)),t("div",Z1,[t("div",Y1,[s[72]||(s[72]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[20]||(s[20]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[73]||(s[73]=m(`<pre><code><span class="cm"># 提取能量</span>
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
<span class="fn2">grep</span> NELECT OUTCAR</code></pre>`,1))])])}const J1=Q(f1,[["render",X1]]),Q1={name:"CalculatorView",data(){return{enmax:250,safetyFactor:1.3,latticeA:5.43,latticeB:5.43,latticeC:5.43,targetNa:30,numAtoms:100,encutForMem:400,numKpoints:64,eAB:-3.72,eA:-3.5,eB:-4.86,moleFraction:.5,eSlabAds:-156.234,eSlab:-148.5,eMol:-9.86}},computed:{recommendedEncut(){return Math.round(this.enmax*this.safetyFactor)},kpoints(){const n=s=>Math.max(1,Math.ceil(s));return{a:n(this.targetNa/this.latticeA),b:n(this.targetNa/this.latticeB),c:n(this.targetNa/this.latticeC)}},totalKpoints(){return this.kpoints.a*this.kpoints.b*this.kpoints.c},estimatedMemory(){const n=this.encutForMem/400*.1,s=this.numAtoms*n*Math.sqrt(this.numKpoints);return Math.round(s*10)/10},formationEnergy(){return this.eAB-this.moleFraction*this.eA-(1-this.moleFraction)*this.eB},adsorptionEnergy(){return this.eSlabAds-this.eSlab-this.eMol}}},s0={class:"sec active"},n0={class:"bread"},t0={class:"calculator-card"},a0={class:"calc-input-group"},l0={class:"calc-input-group"},e0={class:"calc-result"},p0={class:"result-value"},o0={class:"result-note"},c0={class:"calc-formula"},d0={class:"calculator-card"},r0={class:"calc-input-group"},i0={class:"calc-input-group"},u0={class:"calc-input-group"},f0={class:"calc-input-group"},m0={class:"calc-result"},b0={class:"result-value kpoints-grid"},v0={class:"result-note"},g0={class:"calc-formula"},h0={class:"calculator-card"},y0={class:"calc-input-group"},k0={class:"calc-input-group"},C0={class:"calc-input-group"},A0={class:"calc-result"},S0={class:"result-value"},w0={class:"calculator-card"},E0={class:"calc-input-group"},T0={class:"calc-input-group"},R0={class:"calc-input-group"},O0={class:"calc-input-group"},I0={class:"calc-result"},P0={class:"result-note"},N0={class:"calculator-card"},x0={class:"calc-input-group"},q0={class:"calc-input-group"},F0={class:"calc-input-group"},M0={class:"calc-result"},D0={class:"result-note"};function V0(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",s0,[t("div",n0,[w(c,{to:"/"},{default:R(()=>[...s[16]||(s[16]=[v("首页",-1)])]),_:1}),s[18]||(s[18]=v("/ ",-1)),w(c,{to:"/tools"},{default:R(()=>[...s[17]||(s[17]=[v("工具",-1)])]),_:1}),s[19]||(s[19]=v("/ ",-1)),s[20]||(s[20]=t("span",null,"计算工具",-1))]),s[47]||(s[47]=t("h2",null,"实用计算工具",-1)),s[48]||(s[48]=t("p",null,"这些工具帮助你快速计算 VASP 所需的参数。",-1)),s[49]||(s[49]=t("h3",null,"ENCUT 截断能计算器",-1)),s[50]||(s[50]=t("p",null,"根据 POTCAR 中的 ENMAX 值计算推荐的 ENCUT 设置。",-1)),t("div",t0,[t("div",a0,[s[21]||(s[21]=t("label",null,"ENMAX 最大值 (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.enmax=e),type:"number",placeholder:"例如: 250"},null,512),[[ws,o.enmax,void 0,{number:!0}]])]),t("div",l0,[s[23]||(s[23]=t("label",null,"安全系数",-1)),gs(t("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.safetyFactor=e)},[...s[22]||(s[22]=[t("option",{value:1},"1.0 (标准)",-1),t("option",{value:1.3},"1.3 (推荐)",-1),t("option",{value:1.5},"1.5 (高精度)",-1)])],512),[[Nl,o.safetyFactor,void 0,{number:!0}]])]),t("div",e0,[s[24]||(s[24]=t("div",{class:"result-label"},"推荐 ENCUT",-1)),t("div",p0,Z(l.recommendedEncut)+" eV",1),t("div",o0,"ENMAX × "+Z(o.safetyFactor),1)]),t("div",c0,[t("code",null,"ENCUT = ENMAX(max) × "+Z(o.safetyFactor),1)])]),s[51]||(s[51]=t("h3",null,"K 点密度计算器",-1)),s[52]||(s[52]=t("p",null,"根据晶格常数自动推荐 K 点网格。",-1)),t("div",d0,[t("div",r0,[s[25]||(s[25]=t("label",null,"晶格常数 a (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.latticeA=e),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,o.latticeA,void 0,{number:!0}]])]),t("div",i0,[s[26]||(s[26]=t("label",null,"晶格常数 b (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>o.latticeB=e),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,o.latticeB,void 0,{number:!0}]])]),t("div",u0,[s[27]||(s[27]=t("label",null,"晶格常数 c (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>o.latticeC=e),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,o.latticeC,void 0,{number:!0}]])]),t("div",f0,[s[29]||(s[29]=t("label",null,"目标 N×a",-1)),gs(t("select",{"onUpdate:modelValue":s[5]||(s[5]=e=>o.targetNa=e)},[...s[28]||(s[28]=[t("option",{value:25},"25 (快速)",-1),t("option",{value:30},"30 (标准)",-1),t("option",{value:35},"35 (高精度)",-1)])],512),[[Nl,o.targetNa,void 0,{number:!0}]])]),t("div",m0,[s[30]||(s[30]=t("div",{class:"result-label"},"推荐 K 点网格",-1)),t("div",b0,[t("span",null,Z(l.kpoints.a)+" × "+Z(l.kpoints.b)+" × "+Z(l.kpoints.c),1)]),t("div",v0,"总 K 点数: "+Z(l.totalKpoints),1)]),t("div",g0,[t("code",null,"N_k = round("+Z(o.targetNa)+" / lattice_a)",1)])]),s[53]||(s[53]=t("h3",null,"内存估算器",-1)),s[54]||(s[54]=t("p",null,"估算 VASP 计算所需的大致内存。",-1)),t("div",h0,[t("div",y0,[s[31]||(s[31]=t("label",null,"原子数",-1)),gs(t("input",{"onUpdate:modelValue":s[6]||(s[6]=e=>o.numAtoms=e),type:"number",placeholder:"例如: 100"},null,512),[[ws,o.numAtoms,void 0,{number:!0}]])]),t("div",k0,[s[32]||(s[32]=t("label",null,"ENCUT (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[7]||(s[7]=e=>o.encutForMem=e),type:"number",placeholder:"例如: 400"},null,512),[[ws,o.encutForMem,void 0,{number:!0}]])]),t("div",C0,[s[33]||(s[33]=t("label",null,"K 点数",-1)),gs(t("input",{"onUpdate:modelValue":s[8]||(s[8]=e=>o.numKpoints=e),type:"number",placeholder:"例如: 64"},null,512),[[ws,o.numKpoints,void 0,{number:!0}]])]),t("div",A0,[s[34]||(s[34]=t("div",{class:"result-label"},"估算内存",-1)),t("div",S0,Z(l.estimatedMemory)+" GB",1),s[35]||(s[35]=t("div",{class:"result-note"},"每原子约 50-200 MB",-1))])]),s[55]||(s[55]=t("h3",null,"形成能计算器",-1)),s[56]||(s[56]=t("p",null,"快速计算化合物的形成能。",-1)),t("div",w0,[t("div",E0,[s[36]||(s[36]=t("label",null,"化合物能量 E(AB) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[9]||(s[9]=e=>o.eAB=e),type:"number",step:"0.001",placeholder:"例如: -3.720"},null,512),[[ws,o.eAB,void 0,{number:!0}]])]),t("div",T0,[s[37]||(s[37]=t("label",null,"参考态 A 能量 E(A) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[10]||(s[10]=e=>o.eA=e),type:"number",step:"0.001",placeholder:"例如: -3.500"},null,512),[[ws,o.eA,void 0,{number:!0}]])]),t("div",R0,[s[38]||(s[38]=t("label",null,"参考态 B 能量 E(B) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[11]||(s[11]=e=>o.eB=e),type:"number",step:"0.001",placeholder:"例如: -4.860"},null,512),[[ws,o.eB,void 0,{number:!0}]])]),t("div",O0,[s[39]||(s[39]=t("label",null,"A 的摩尔分数 x",-1)),gs(t("input",{"onUpdate:modelValue":s[12]||(s[12]=e=>o.moleFraction=e),type:"number",step:"0.1",placeholder:"例如: 0.5"},null,512),[[ws,o.moleFraction,void 0,{number:!0}]])]),t("div",I0,[s[40]||(s[40]=t("div",{class:"result-label"},"形成能 ΔH_f",-1)),t("div",{class:_(["result-value",{stable:l.formationEnergy<0,unstable:l.formationEnergy>0}])},Z(l.formationEnergy.toFixed(4))+" eV/atom ",3),t("div",P0,Z(l.formationEnergy<0?"✓ 热力学稳定":"✗ 热力学不稳定"),1)]),s[41]||(s[41]=t("div",{class:"calc-formula"},[t("code",null,"ΔH_f = E(AB) - x·E(A) - (1-x)·E(B)")],-1))]),s[57]||(s[57]=t("h3",null,"吸附能计算器",-1)),s[58]||(s[58]=t("p",null,"计算分子在表面的吸附能。",-1)),t("div",N0,[t("div",x0,[s[42]||(s[42]=t("label",null,"吸附体系能量 E(slab+ads) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[13]||(s[13]=e=>o.eSlabAds=e),type:"number",step:"0.001",placeholder:"例如: -156.234"},null,512),[[ws,o.eSlabAds,void 0,{number:!0}]])]),t("div",q0,[s[43]||(s[43]=t("label",null,"干净表面能量 E(slab) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[14]||(s[14]=e=>o.eSlab=e),type:"number",step:"0.001",placeholder:"例如: -148.500"},null,512),[[ws,o.eSlab,void 0,{number:!0}]])]),t("div",F0,[s[44]||(s[44]=t("label",null,"自由分子能量 E(mol) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[15]||(s[15]=e=>o.eMol=e),type:"number",step:"0.001",placeholder:"例如: -9.860"},null,512),[[ws,o.eMol,void 0,{number:!0}]])]),t("div",M0,[s[45]||(s[45]=t("div",{class:"result-label"},"吸附能 E_ads",-1)),t("div",{class:_(["result-value",{stable:l.adsorptionEnergy<0,unstable:l.adsorptionEnergy>0}])},Z(l.adsorptionEnergy.toFixed(4))+" eV ",3),t("div",D0,Z(l.adsorptionEnergy<0?"✓ 吸附放热（稳定）":"✗ 吸附吸热（不稳定）"),1)]),s[46]||(s[46]=t("div",{class:"calc-formula"},[t("code",null,"E_ads = E(slab+ads) - E(slab) - E(mol)")],-1))])])}const $0=Q(Q1,[["render",V0],["__scopeId","data-v-e0fb01ec"]]),B0={name:"SurfaceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},G0={class:"sec active"},L0={class:"bread"},U0={class:"cb"},K0={class:"ch"},W0={class:"cb"},H0={class:"ch"},j0={class:"cb"},z0={class:"ch"},_0={class:"cb"},Z0={class:"ch"};function Y0(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",G0,[t("div",L0,[w(c,{to:"/"},{default:R(()=>[...s[4]||(s[4]=[v("首页",-1)])]),_:1}),s[6]||(s[6]=v("/ ",-1)),w(c,{to:"/tasks"},{default:R(()=>[...s[5]||(s[5]=[v("计算任务",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),s[8]||(s[8]=t("span",null,"表面计算",-1))]),s[20]||(s[20]=m('<h2>表面模型构建与计算</h2><p>表面计算是催化、腐蚀、薄膜生长等研究的基础。VASP 使用 <strong>slab 模型</strong>来模拟表面。</p><h3>1. Slab 模型结构</h3><div class="db"><div class="db-t">Slab 模型示意图</div><div style="text-align:center;font-family:var(--font-mono);font-size:13px;line-height:2.2;color:var(--text-secondary);"><div style="border:1px solid var(--border);border-radius:8px;padding:16px;display:inline-block;background:var(--bg-elevated);min-width:280px;"><div style="color:var(--blue);">← 真空层 (≥12 Å) →</div><div style="margin:8px 0;border-bottom:1px dashed var(--border-light);padding-bottom:8px;"><div style="color:var(--red);">○ ○ ○ ○ ○ ← 吸附层（可选）</div></div><div style="color:var(--green);">● ● ● ● ● ← 表面层</div><div style="color:var(--green);">● ● ● ● ● ← 次表面层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="margin-top:8px;color:var(--accent);font-size:11px;">底部 2-3 层固定，模拟体相</div></div></div></div><h3>2. 关键参数</h3><table class="tb"><thead><tr><th>参数</th><th>建议</th><th>说明</th></tr></thead><tbody><tr><td><strong>层数</strong></td><td>4-7 层</td><td>太薄不准确，太厚计算量大</td></tr><tr><td><strong>真空层</strong></td><td>≥12 Å</td><td>防止 slab 间相互作用</td></tr><tr><td><strong>固定层</strong></td><td>底部 2-3 层</td><td>模拟体相，用 Selective dynamics</td></tr><tr><td><strong>表面尺寸</strong></td><td>依研究需要</td><td>1×1, 2×2 等</td></tr><tr><td><strong>K 点</strong></td><td>k×k×1</td><td>z 方向为 1</td></tr></tbody></table><h3>3. pymatgen 自动生成</h3>',7)),t("div",U0,[t("div",K0,[s[9]||(s[9]=t("span",{class:"la"},"python",-1)),s[10]||(s[10]=t("span",{class:"fn"},"generate_slab.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
<span class="fn2">print</span>(<span class="st">f&quot;层数: {slabgen._nlayers_slab}&quot;</span>)</code></pre>`,1))]),s[21]||(s[21]=t("h3",null,"4. INCAR 设置",-1)),t("div",W0,[t("div",H0,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Cu(111) surface</span>
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
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>              <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[22]||(s[22]=t("h3",null,"5. KPOINTS 设置",-1)),t("div",j0,[t("div",z0,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"表面计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=t("pre",null,[t("code",null,[v(`Automatic mesh
0
Gamma
12 12 1               `),t("span",{class:"cm"},"; z 方向设为 1"),v(`
0.0 0.0 0.0`)])],-1))]),s[23]||(s[23]=m('<div class="ib warn"><strong>重要：</strong>表面计算<strong>必须</strong>用 <code>ISIF=2</code>；KPOINTS z 方向设为 <code>1</code>；非对称 slab 开启偶极校正。</div><h3>6. 表面能计算</h3><div class="fb"><div class="fm">γ = (E_slab - N × E_bulk) / (2 × A)</div><div class="fd">γ: 表面能, A: 表面积, 2: 两个表面, N: slab 中的原子数</div></div>',3)),t("div",_0,[t("div",Z0,[s[18]||(s[18]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="cm"># 计算表面能</span>
E_slab = <span class="nu">-156.234</span>   <span class="cm">; slab 总能量 (eV)</span>
E_bulk = <span class="nu">-3.720</span>     <span class="cm">; 体相单原子能量 (eV/atom)</span>
N = <span class="nu">48</span>              <span class="cm">; slab 中的原子数</span>
A = <span class="nu">86.52</span>           <span class="cm">; 表面积 (Å²)</span>

gamma = (E_slab - N * E_bulk) / (<span class="nu">2</span> * A)
gamma_Jm2 = gamma * <span class="nu">16.02</span>  <span class="cm">; 转换为 J/m²</span>

<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma:.4f} eV/Å²&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma_Jm2:.2f} J/m²&quot;</span>)</code></pre>`,1))])])}const X0=Q(B0,[["render",Y0]]),J0={name:"DefectView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Q0={class:"sec active"},sm={class:"bread"},nm={class:"cb"},tm={class:"ch"},am={class:"cb"},lm={class:"ch"},em={class:"cb"},pm={class:"ch"};function om(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Q0,[t("div",sm,[w(c,{to:"/"},{default:R(()=>[...s[3]||(s[3]=[v("首页",-1)])]),_:1}),s[5]||(s[5]=v("/ ",-1)),w(c,{to:"/tasks"},{default:R(()=>[...s[4]||(s[4]=[v("计算任务",-1)])]),_:1}),s[6]||(s[6]=v("/ ",-1)),s[7]||(s[7]=t("span",null,"缺陷计算",-1))]),s[16]||(s[16]=m('<h2>点缺陷形成能计算</h2><p>点缺陷（空位、间隙、替位）是理解材料性质的关键，形成能决定了缺陷浓度。</p><h3>1. 缺陷类型</h3><table class="tb"><thead><tr><th>类型</th><th>符号</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>空位</td><td>V<sub>A</sub></td><td>缺少原子 A</td><td>V<sub>Si</sub> (Si 空位)</td></tr><tr><td>间隙</td><td>A<sub>i</sub></td><td>额外原子 A</td><td>O<sub>i</sub> (O 间隙)</td></tr><tr><td>替位</td><td>B<sub>A</sub></td><td>B 替代 A</td><td>N<sub>O</sub> (N 替代 O)</td></tr><tr><td>反位</td><td>A<sub>B</sub></td><td>A 占据 B 位</td><td>As<sub>Ga</sub></td></tr></tbody></table><h3>2. 形成能公式</h3><div class="fb"><div class="fm">E<sub>f</sub> = E<sub>defect</sub> - E<sub>perfect</sub> + Σ n<sub>i</sub>μ<sub>i</sub> + q(E<sub>VBM</sub> + E<sub>Fermi</sub>) + E<sub>corr</sub></div><div class="fd">n<sub>i</sub>: 原子数变化 | μ<sub>i</sub>: 化学势 | q: 电荷 | E<sub>corr</sub>: 有限尺寸校正</div></div><h3>3. 计算流程</h3><div class="fc"><div class="fn2-node s">构建完美超胞（如 3×3×3）</div><div class="fa"></div><div class="fn2-node p">优化完美超胞 → E<sub>perfect</sub></div><div class="fa"></div><div class="fn2-node p">引入缺陷（删除/替换/插入原子）</div><div class="fa"></div><div class="fn2-node p">优化缺陷超胞 → E<sub>defect</sub></div><div class="fa"></div><div class="fn2-node p">有限尺寸校正（FNV）</div><div class="fa"></div><div class="fn2-node e">计算缺陷形成能</div></div><h3>4. 超胞构建</h3>',9)),t("div",nm,[t("div",tm,[s[8]||(s[8]=t("span",{class:"la"},"python",-1)),s[9]||(s[9]=t("span",{class:"fn"},"build_supercell.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[10]||(s[10]=m(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
defect_struct.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_vacancy&quot;</span>)</code></pre>`,1))]),s[17]||(s[17]=t("h3",null,"5. 带电缺陷 INCAR",-1)),t("div",am,[t("div",lm,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"+1 电荷缺陷",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[13]||(s[13]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si vacancy +1</span>
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
<span class="kw">NUPDOWN</span>  = <span class="nu">0</span>             <span class="cm">; 总自旋（如果不确定设为 0）</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib note"},[t("strong",null,"NELECT 计算："),v("先运行完美超胞，在 OUTCAR 中查找 NELECT。带 q 电荷的缺陷：NELECT"),t("sub",null,"defect"),v(" = NELECT"),t("sub",null,"perfect"),v(" - q")],-1)),s[19]||(s[19]=t("h3",null,"6. 有限尺寸校正",-1)),s[20]||(s[20]=t("p",null,"带电缺陷需要校正超胞有限尺寸效应，常用 FNV 方法：",-1)),t("div",em,[t("div",pm,[s[14]||(s[14]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[15]||(s[15]=m(`<pre><code><span class="kw">from</span> pymatgen.analysis.defects.corrections <span class="kw">import</span> FreysoldtCorrection

<span class="cm"># 使用 pymatgen 进行 FNV 校正</span>
correction = FreysoldtCorrection(
    dielectric=<span class="nu">10.0</span>,       <span class="cm">; 介电常数</span>
    defect_dir=<span class="st">&quot;defect_calc&quot;</span>,
    bulk_dir=<span class="st">&quot;bulk_calc&quot;</span>,
)
correction.<span class="fn2">get_correction</span>()</code></pre>`,1))]),s[21]||(s[21]=m('<h3>7. 化学势范围</h3><div class="db"><div class="db-t">化学势约束</div><p>对于化合物 A<sub>x</sub>B<sub>y</sub>：</p><ul><li>x·μ<sub>A</sub> + y·μ<sub>B</sub> = μ<sub>AB</sub>（化合物）</li><li>μ<sub>A</sub> ≤ μ<sub>A</sub><sup>0</sup>（元素参考态）</li><li>μ<sub>B</sub> ≤ μ<sub>B</sub><sup>0</sup></li></ul><p>常见极限：A-rich（μ<sub>A</sub> = μ<sub>A</sub><sup>0</sup>）和 A-poor（μ<sub>B</sub> = μ<sub>B</sub><sup>0</sup>）</p></div>',2))])}const cm=Q(J0,[["render",om]]),dm={name:"PhononView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},rm={class:"sec active"},im={class:"bread"},um={class:"cb"},fm={class:"ch"},mm={class:"cb"},bm={class:"ch"},vm={class:"cb"},gm={class:"ch"},hm={class:"cb"},ym={class:"ch"},km={class:"cb"},Cm={class:"ch"},Am={class:"cb"},Sm={class:"ch"};function wm(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",rm,[t("div",im,[w(c,{to:"/"},{default:R(()=>[...s[6]||(s[6]=[v("首页",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),w(c,{to:"/tasks"},{default:R(()=>[...s[7]||(s[7]=[v("计算任务",-1)])]),_:1}),s[9]||(s[9]=v("/ ",-1)),s[10]||(s[10]=t("span",null,"声子计算",-1))]),s[26]||(s[26]=m('<h2>声子计算</h2><p>声子谱反映晶格动力学稳定性，虚频意味着结构不稳定。使用 phonopy + VASP 进行声子计算。</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">优化结构（得到 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">phonopy --vasp -d --dim=&quot;3 3 3&quot;</div><div class="fa"></div><div class="fn2-node p">生成超胞 POSCAR（DISP-001, 002...）</div><div class="fa"></div><div class="fn2-node p">对每个超胞做静态计算</div><div class="fa"></div><div class="fn2-node p">phonopy -f DISP-*/vasprun.xml</div><div class="fa"></div><div class="fn2-node e">phonopy-bandplot → 声子谱</div></div><h3>2. 优化 INCAR（高精度要求）</h3>',5)),t("div",um,[t("div",fm,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"声子前结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[13]||(s[13]=m(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 需要较高精度</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>          <span class="cm">; 严格收敛（比普通计算更严）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-1E-4</span>         <span class="cm">; 力收敛到 0.0001 eV/Å</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib warn"},[t("strong",null,"精度要求："),v("声子计算对结构非常敏感。需要高 ENCUT、严格力收敛（"),t("code",null,"EDIFFG = -1E-4"),v("）、足够 k 点。")],-1)),s[28]||(s[28]=t("h3",null,"3. 静态计算 INCAR",-1)),t("div",mm,[t("div",bm,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"位移超胞静态计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 与优化一致</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>            <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>             <span class="cm">; 静态计算</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要电荷密度</span></code></pre>`,1))]),s[29]||(s[29]=t("h3",null,"4. 批量计算脚本",-1)),t("div",vm,[t("div",gm,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),s[18]||(s[18]=t("span",{class:"fn"},"phonon_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[30]||(s[30]=t("h3",null,"5. band.conf 配置文件",-1)),t("div",hm,[t("div",ym,[s[20]||(s[20]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[21]||(s[21]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# Si 声子谱配置"),v(`
ATOM_NAME = Si
DIM = 3 3 3
PRIMITIVE_AXIS = 1 0 0  0 1 0  0 0 1

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),v(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51

`),t("span",{class:"cm"},"# 输出设置"),v(`
FORCE_CONSTANTS = WRITE
EIGENVECTORS = .TRUE.`)])],-1))]),s[31]||(s[31]=t("h3",null,"6. 声子 DOS 计算",-1)),t("div",km,[t("div",Cm,[s[22]||(s[22]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[23]||(s[23]=m(`<pre><code><span class="cm"># mesh.conf 文件</span>
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
<span class="fn2">phonopy-dosplot</span></code></pre>`,1))]),s[32]||(s[32]=m('<h3>7. 虚频处理</h3><table class="tb"><thead><tr><th>虚频情况</th><th>含义</th><th>处理方法</th></tr></thead><tbody><tr><td>无虚频</td><td>结构稳定</td><td>无需处理</td></tr><tr><td>小虚频 (&lt; 0.1 THz)</td><td>数值噪声</td><td>通常可忽略</td></tr><tr><td>大虚频</td><td>结构不稳定</td><td>沿虚频模式扰动结构后重新优化</td></tr><tr><td>声学模虚频</td><td>计算误差</td><td>提高精度或忽略</td></tr></tbody></table>',2)),t("div",Am,[t("div",Sm,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm"># 查看虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;f  =&quot;</span> phonopy_output.yaml | <span class="fn2">head</span> -20

<span class="cm"># 如果有虚频，沿虚频模式扰动结构</span>
<span class="fn2">phonopy</span> --readfc --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR band.conf
<span class="cm"># 查看虚频对应的特征矢量，沿该方向微调原子位置</span></code></pre>`,1))]),s[33]||(s[33]=t("h3",null,"8. 常见问题",-1)),s[34]||(s[34]=t("div",{class:"ib warn"},[t("strong",null,"注意事项："),t("ul",null,[t("li",null,"优化和静态计算必须使用相同的 ENCUT、KPOINTS 和 POTCAR"),t("li",null,"超胞大小要足够（通常 2-4 倍原胞）"),t("li",null,"力收敛标准要严格（EDIFFG = -1E-4 或更小）"),t("li",null,"phonopy 版本要与 VASP 版本兼容")])],-1))])}const Em=Q(dm,[["render",wm]]),Tm={name:"ConvergenceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Rm={class:"sec active"},Om={class:"bread"},Im={class:"cb"},Pm={class:"ch"},Nm={class:"cb"},xm={class:"ch"},qm={class:"cb"},Fm={class:"ch"};function Mm(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Rm,[t("div",Om,[w(c,{to:"/"},{default:R(()=>[...s[3]||(s[3]=[v("首页",-1)])]),_:1}),s[4]||(s[4]=v("/ ",-1)),s[5]||(s[5]=t("span",null,"收敛性测试",-1))]),s[15]||(s[15]=t("h2",null,"收敛性测试",-1)),s[16]||(s[16]=t("p",null,"收敛性测试是确保计算结果可靠的关键步骤。需要测试 ENCUT 和 K 点两个参数。",-1)),s[17]||(s[17]=t("h3",null,"1. ENCUT 收敛测试",-1)),s[18]||(s[18]=t("p",null,"测试截断能对总能量的影响，确保能量已收敛。",-1)),t("div",Im,[t("div",Pm,[s[6]||(s[6]=t("span",{class:"la"},"bash",-1)),s[7]||(s[7]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[8]||(s[8]=m(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="kw">done</span></code></pre>`,1))]),s[19]||(s[19]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),v("相邻 ENCUT 能量差 < "),t("code",null,"1 meV/atom"),v(" 时收敛。例如：400 eV vs 450 eV 的能量差除以原子数应 < 0.001 eV/atom。")],-1)),s[20]||(s[20]=t("h3",null,"2. K 点收敛测试",-1)),s[21]||(s[21]=t("p",null,"测试 k 点密度对总能量的影响。",-1)),t("div",Nm,[t("div",xm,[s[9]||(s[9]=t("span",{class:"la"},"bash",-1)),s[10]||(s[10]=t("span",{class:"fn"},"kpoint_test.sh",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="kw">done</span></code></pre>`,1))]),s[22]||(s[22]=m('<h3>3. K 点密度经验公式</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>晶格常数 a</th><th>推荐 N<sub>k</sub></th><th>网格</th></tr></thead><tbody><tr><td>3.0 Å</td><td>10</td><td>10×10×10</td></tr><tr><td>4.0 Å</td><td>8</td><td>8×8×8</td></tr><tr><td>5.0 Å</td><td>6</td><td>6×6×6</td></tr><tr><td>6.0 Å</td><td>5</td><td>5×5×5</td></tr><tr><td>8.0 Å</td><td>4</td><td>4×4×4</td></tr></tbody></table><h3>4. 不同材料的 K 点建议</h3><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td>8×8×8 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td>4×4×4 ~ 6×6×6</td><td>通常足够</td></tr><tr><td>绝缘体</td><td>3×3×3 ~ 4×4×4</td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td>k×k×1</td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td>1×1×1</td><td>无周期性</td></tr></tbody></table><h3>5. 绘制收敛图</h3>',6)),t("div",qm,[t("div",Fm,[s[12]||(s[12]=t("span",{class:"la"},"python",-1)),s[13]||(s[13]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

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
plt.show()</code></pre>`,1))]),s[23]||(s[23]=t("h3",null,"6. 收敛测试注意事项",-1)),s[24]||(s[24]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"固定其他参数，只改变一个变量"),t("li",null,"ENCUT 测试时使用足够密的 K 点"),t("li",null,"K 点测试时使用足够大的 ENCUT"),t("li",null,"计算每原子能量进行比较"),t("li",null,"对于精确计算（如能量差），收敛标准应更严格（< 0.5 meV/atom）")])],-1))])}const Dm=Q(Tm,[["render",Mm]]),Vm={name:"CheatSheetView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},$m={class:"sec active"},Bm={class:"bread"},Gm={class:"cb"},Lm={class:"ch"},Um={class:"cb"},Km={class:"ch"},Wm={class:"cb"},Hm={class:"ch"},jm={class:"cb"},zm={class:"ch"};function _m(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",$m,[t("div",Bm,[w(c,{to:"/"},{default:R(()=>[...s[4]||(s[4]=[v("首页",-1)])]),_:1}),s[5]||(s[5]=v("/ ",-1)),s[6]||(s[6]=t("span",null,"速查手册",-1))]),s[18]||(s[18]=m('<h2>速查手册</h2><p>VASP 常用参数、命令和设置的快速参考。</p><h3>1. INCAR 参数速查</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>常用值</th><th>默认值</th></tr></thead><tbody><tr><td><code>ENCUT</code></td><td>平面波截断能 (eV)</td><td>400-600</td><td>POTCAR ENMAX</td></tr><tr><td><code>PREC</code></td><td>计算精度</td><td>Accurate</td><td>Normal</td></tr><tr><td><code>EDIFF</code></td><td>电子步收敛标准</td><td>1E-6</td><td>1E-4</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛标准</td><td>-0.02 (eV/Å)</td><td>-0.01</td></tr><tr><td><code>IBRION</code></td><td>离子弛豫方法</td><td>1 或 2</td><td>-1</td></tr><tr><td><code>NSW</code></td><td>最大离子步数</td><td>100-300</td><td>0</td></tr><tr><td><code>ISIF</code></td><td>优化类型</td><td>2 或 3</td><td>2</td></tr><tr><td><code>ISMEAR</code></td><td>展宽方法</td><td>0, 1, -5</td><td>1</td></tr><tr><td><code>SIGMA</code></td><td>展宽宽度 (eV)</td><td>0.05, 0.2</td><td>0.2</td></tr><tr><td><code>NELM</code></td><td>最大电子步数</td><td>60-200</td><td>60</td></tr><tr><td><code>ISPIN</code></td><td>自旋极化</td><td>1 或 2</td><td>1</td></tr><tr><td><code>MAGMOM</code></td><td>初始磁矩</td><td>依体系</td><td>0</td></tr><tr><td><code>LREAL</code></td><td>实空间投影</td><td>Auto, .FALSE.</td><td>.FALSE.</td></tr><tr><td><code>ALGO</code></td><td>电子算法</td><td>Normal, Fast</td><td>Normal</td></tr></tbody></table><h3>2. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>3. IBRION 优化方法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td>推荐默认</td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼MD</td><td>特殊体系</td></tr></tbody></table><h3>4. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>1</code></td><td>✓</td><td>✓</td><td>✓</td><td>MD+晶格</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅晶格</td></tr><tr><td><code>6</code></td><td>✗</td><td>✗</td><td>✓</td><td>仅形状</td></tr><tr><td><code>7</code></td><td>✗</td><td>✓</td><td>✗</td><td>仅体积</td></tr></tbody></table><h3>5. 常用 bash 命令</h3>',11)),t("div",Gm,[t("div",Lm,[s[7]||(s[7]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[8]||(s[8]=m(`<pre><code><span class="cm"># 提取能量</span>
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
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR</code></pre>`,1))]),s[19]||(s[19]=t("h3",null,"6. 常见计算任务 INCAR 模板",-1)),s[20]||(s[20]=t("h4",null,"结构优化",-1)),t("div",Um,[t("div",Km,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"体相优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=t("h4",null,"态密度计算",-1)),t("div",Wm,[t("div",Hm,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DOS calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>           <span class="cm">; 四面体法</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影 DOS</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>        <span class="cm">; 保留波函数</span></code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"能带计算",-1)),t("div",jm,[t("div",zm,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Band structure",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Band structure</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>           <span class="cm">; 从 WAVECAR 读取</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影能带</span></code></pre>`,1))]),s[23]||(s[23]=m('<h3>7. POTCAR 选择指南</h3><table class="tb"><thead><tr><th>后缀</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>标准 PBE</td><td>最常用</td></tr><tr><td><code>_sv</code></td><td>半芯态</td><td>3d 过渡金属</td></tr><tr><td><code>_d</code></td><td>d 电子 p 区</td><td>Ga, Ge, As</td></tr><tr><td><code>_GW</code></td><td>高精度</td><td>GW 计算</td></tr><tr><td><code>_h</code></td><td>硬赝势</td><td>高截断能</td></tr></tbody></table><h3>8. 单位换算</h3><table class="tb"><thead><tr><th>物理量</th><th>VASP 单位</th><th>换算</th></tr></thead><tbody><tr><td>能量</td><td>eV</td><td>1 eV = 96.485 kJ/mol = 23.06 kcal/mol</td></tr><tr><td>力</td><td>eV/Å</td><td>1 eV/Å = 16.02 nN</td></tr><tr><td>压力</td><td>kbar</td><td>1 kbar = 0.1 GPa = 100 MPa</td></tr><tr><td>距离</td><td>Å</td><td>1 Å = 0.1 nm</td></tr><tr><td>磁矩</td><td>μB</td><td>玻尔磁子</td></tr><tr><td>频率</td><td>THz</td><td>声子频率</td></tr></tbody></table><h3>9. 文件大小估算</h3><table class="tb"><thead><tr><th>文件</th><th>大小公式</th><th>典型值</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>~N<sup>3</sup> × N<sub>bands</sub> × N<sub>k</sub> × 8 bytes</td><td>1-100 GB</td></tr><tr><td><code>CHGCAR</code></td><td>~N<sup>3</sup> × 50 bytes</td><td>100 MB - 10 GB</td></tr><tr><td><code>OUTCAR</code></td><td>取决于 NSW 和 NWRITE</td><td>100 MB - 2 GB</td></tr></tbody></table><h3>10. 错误信息速查</h3><table class="tb"><thead><tr><th>错误信息</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>DENTET</td><td>能带数不足</td><td>增加 NBANDS</td></tr><tr><td>ZBRENT</td><td>线搜索失败</td><td>减小 POTIM 或换 IBRION=1</td></tr><tr><td>SGRCON</td><td>晶格矢量错误</td><td>检查右手定则</td></tr><tr><td>ROTK</td><td>对称性问题</td><td>ISYM=0 或微扰结构</td></tr><tr><td>memory</td><td>内存不足</td><td>LREAL=Auto 或减少 NPAR</td></tr></tbody></table>',8))])}const Zm=Q(Vm,[["render",_m]]),Ym={name:"ErrorsScfView",data(){return{selectedOption:null,showFeedback:!1,feedbackText:"",feedbackStyle:{}}},methods:{selectOption(n){this.selectedOption=n,document.querySelectorAll(".qo").forEach((s,a)=>{s.classList.toggle("sel",a===n)})},checkAnswer(){this.showFeedback=!0,this.selectedOption===1?(this.feedbackText="✓ 回答正确！检查 MAGMOM 设置是排查 SCF 不收敛的首要步骤。",this.feedbackStyle={background:"var(--green-dim)",border:"1px solid var(--green)",color:"var(--green)"},document.querySelectorAll(".qo")[1].classList.add("ok")):(this.feedbackText='✗ 回答错误。正确答案是"检查 MAGMOM 设置"。',this.feedbackStyle={background:"var(--red-dim)",border:"1px solid var(--red)",color:"var(--red)"},document.querySelectorAll(".qo")[this.selectedOption].classList.add("no"),document.querySelectorAll(".qo")[1].classList.add("ok"))},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Xm={class:"sec active"},Jm={class:"bread"},Qm={class:"ec open"},sb={class:"ec-b",style:{display:"block"}},nb={class:"cb"},tb={class:"ch"},ab={class:"ec open"},lb={class:"ec-b",style:{display:"block"}},eb={class:"cb"},pb={class:"ch"},ob={class:"ec open"},cb={class:"ec-b",style:{display:"block"}},db={class:"cb"},rb={class:"ch"},ib={class:"ec open"},ub={class:"ec-b",style:{display:"block"}},fb={class:"cb"},mb={class:"ch"},bb={class:"ec open"},vb={class:"ec-b",style:{display:"block"}},gb={class:"cb"},hb={class:"ch"},yb={class:"qb"},kb={class:"qbd"},Cb=["disabled"];function Ab(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Xm,[t("div",Jm,[w(c,{to:"/"},{default:R(()=>[...s[10]||(s[10]=[v("首页",-1)])]),_:1}),s[12]||(s[12]=v("/ ",-1)),w(c,{to:"/errors"},{default:R(()=>[...s[11]||(s[11]=[v("错误诊断",-1)])]),_:1}),s[13]||(s[13]=v("/ ",-1)),s[14]||(s[14]=t("span",null,"SCF 不收敛",-1))]),s[56]||(s[56]=t("h2",null,"SCF 不收敛问题",-1)),s[57]||(s[57]=t("p",null,"SCF（自洽场）不收敛是 VASP 计算中最高频的问题。以下是完整排查清单和解决方案。",-1)),t("div",Qm,[s[19]||(s[19]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：电子步达到 NELM 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",sb,[s[17]||(s[17]=m('<h4>症状</h4><div class="esym">DAV: 64 -0.275E+03 0.217E+00 -0.109E+00<br>（能量差持续振荡不下降）</div><h4>常见原因</h4><ul><li><strong>初始磁矩设置不当</strong>（最常见）- 对含过渡金属体系尤其重要</li><li><strong>展宽方法错误</strong> - 金属用了 ISMEAR=0 或绝缘体用了 ISMEAR=1</li><li><strong>截断能太低</strong> - ENCUT 不足导致数值不稳定</li><li><strong>初始结构不合理</strong> - 原子距离太近或结构有冲突</li><li><strong>强关联体系</strong> - 需要设置 +U 或使用杂化泛函</li></ul><h4>解决方案</h4>',5)),t("div",nb,[t("div",tb,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="cm"># 方案 1：降低收敛标准（临时方案）</span>
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
<span class="kw">MAGMOM</span>   = <span class="nu">3 3 3 0 0 0</span>   <span class="cm">; 每个原子的初始磁矩</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib tip"},[t("strong",null,"排查顺序："),v("① MAGMOM 设置 ② ISMEAR 是否正确 ③ 降低 AMIX ④ 检查原子距离 ⑤ 是否需要 +U")],-1))])]),t("div",ab,[s[28]||(s[28]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：DENTET - 能带数不足"),t("span",{class:"es sc"},"高频")],-1)),t("div",lb,[s[22]||(s[22]=t("h4",null,"症状",-1)),s[23]||(s[23]=t("div",{class:"esym"},[v("WARNING: DENTET: can't reach specified NBANDS"),t("br"),v("NELECT = 120.0000 NBANDS = 64")],-1)),s[24]||(s[24]=t("h4",null,"原因",-1)),s[25]||(s[25]=t("p",null,"能带数目 NBANDS 不足以容纳所有电子，导致费米能级无法正确确定。",-1)),s[26]||(s[26]=t("h4",null,"解决方案",-1)),t("div",eb,[t("div",pb,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[21]||(s[21]=m(`<pre><code><span class="cm"># 手动增加能带数</span>
<span class="kw">NBANDS</span>   = <span class="nu">160</span>

<span class="cm"># 经验公式：</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms/2 (绝缘体)</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms   (金属/磁性)</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib note"},[t("strong",null,"查看 NELECT："),v("在 POTCAR 中 grep ZVAL 求和，或在 OUTCAR 中搜索 NELECT。")],-1))])]),t("div",ob,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：ZBRENT - 线搜索失败"),t("span",{class:"es scm"},"常见")],-1)),t("div",cb,[s[31]||(s[31]=t("h4",null,"症状",-1)),s[32]||(s[32]=t("div",{class:"esym"},[v("ZBRENT: fatal error in bracketing"),t("br"),v("ZBRENT: the minimum is not bracketed")],-1)),s[33]||(s[33]=t("h4",null,"原因",-1)),s[34]||(s[34]=t("p",null,"CG 优化算法中线搜索失败，通常是步长过大或势能面过于复杂。",-1)),s[35]||(s[35]=t("h4",null,"解决方案",-1)),t("div",db,[t("div",rb,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[30]||(s[30]=m(`<pre><code><span class="cm"># 方案 1：换优化算法</span>
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
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span></code></pre>`,1))])])]),s[58]||(s[58]=m('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：SCF 收敛但结果不合理</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>检查清单</h4><table class="tb"><thead><tr><th>检查项</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>POTCAR 泛函</td><td><code>grep TITEL POTCAR</code></td><td>确认使用正确的泛函</td></tr><tr><td>ENCUT 足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>K 点足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>自旋极化</td><td>ISPIN=2</td><td>含 3d/4f 金属通常需要</td></tr><tr><td>是否需要 +U</td><td>LDAU=.TRUE.</td><td>强关联体系</td></tr><tr><td>原子距离</td><td>检查 POSCAR</td><td>确保没有原子重叠</td></tr></tbody></table></div></div>',1)),t("div",ib,[s[45]||(s[45]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 5：VERY BAD NEWS! SGRCON 错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",ub,[s[39]||(s[39]=t("h4",null,"症状",-1)),s[40]||(s[40]=t("div",{class:"esym"},[v("VERY BAD NEWS! internal error in subroutine SGRCON"),t("br"),v("The product of the three lattice vectors is negative")],-1)),s[41]||(s[41]=t("h4",null,"原因",-1)),s[42]||(s[42]=t("p",null,"晶格矢量构成的不是右手坐标系。VASP 要求三个晶格矢量 a×b·c > 0。",-1)),s[43]||(s[43]=t("h4",null,"解决方案",-1)),s[44]||(s[44]=t("ol",null,[t("li",null,"在 VESTA 中重新导出 POSCAR"),t("li",null,"使用 pymatgen 重新生成 POSCAR"),t("li",null,"手动交换 POSCAR 中两行晶格矢量")],-1)),t("div",fb,[t("div",mb,[s[37]||(s[37]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[38]||(s[38]=m(`<pre><code><span class="cm"># 检查晶格矢量是否构成右手系</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np

a = np.array([<span class="nu">5.43</span>, <span class="nu">0</span>, <span class="nu">0</span>])
b = np.array([<span class="nu">0</span>, <span class="nu">5.43</span>, <span class="nu">0</span>])
c = np.array([<span class="nu">0</span>, <span class="nu">0</span>, <span class="nu">5.43</span>])

det = np.dot(np.cross(a, b), c)
<span class="fn2">print</span>(f<span class="st">&quot;det = {det}&quot;</span>)  <span class="cm"># 应该 &gt; 0</span></code></pre>`,1))])])]),t("div",bb,[s[49]||(s[49]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 6：ROTK 旋转矩阵错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",vb,[s[48]||(s[48]=m('<h4>症状</h4><div class="esym">WARNING in EDDRMM: rotation matrix not orthogonal<br>ROTK: internal ERROR</div><h4>原因</h4><p>通常是结构对称性过高或原子位置不合理导致。</p><h4>解决方案</h4><ol><li>微扰原子位置（添加小的随机位移）</li><li>使用 <code>SYMPREC = 1E-6</code> 放宽对称性判断</li><li>设置 <code>ISYM = 0</code> 关闭对称性（最后手段）</li></ol>',6)),t("div",gb,[t("div",hb,[s[46]||(s[46]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[47]||(s[47]=m(`<pre><code><span class="cm"># 微扰原子位置</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write
<span class="kw">import</span> numpy <span class="kw">as</span> np

atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
atoms.rattle(stdev=<span class="nu">0.01</span>)  <span class="cm"># 添加 0.01 Å 的随机位移</span>
write(<span class="st">&#39;POSCAR_rattled&#39;</span>, atoms)</code></pre>`,1))])])]),t("div",yb,[s[55]||(s[55]=t("div",{class:"qh"},[t("span",{class:"ql"},"练习"),t("span",{class:"qt"},"SCF 问题排查")],-1)),t("div",kb,[s[54]||(s[54]=t("p",null,[t("strong",null,"问题："),v("SCF 不收敛时，首先应检查什么？")],-1)),t("div",{class:"qo",onClick:s[5]||(s[5]=e=>l.selectOption(0))},[...s[50]||(s[50]=[t("div",{class:"qr"},null,-1),t("span",null,"增加 NSW",-1)])]),t("div",{class:"qo",onClick:s[6]||(s[6]=e=>l.selectOption(1))},[...s[51]||(s[51]=[t("div",{class:"qr"},null,-1),t("span",null,"检查 MAGMOM 设置",-1)])]),t("div",{class:"qo",onClick:s[7]||(s[7]=e=>l.selectOption(2))},[...s[52]||(s[52]=[t("div",{class:"qr"},null,-1),t("span",null,"更换 POTCAR",-1)])]),t("div",{class:"qo",onClick:s[8]||(s[8]=e=>l.selectOption(3))},[...s[53]||(s[53]=[t("div",{class:"qr"},null,-1),t("span",null,"减小 ENCUT",-1)])]),o.showFeedback?(V(),$("div",{key:0,class:"qf show",style:_n(o.feedbackStyle)},Z(o.feedbackText),5)):Sn("",!0),t("button",{class:"qs",onClick:s[9]||(s[9]=(...e)=>l.checkAnswer&&l.checkAnswer(...e)),disabled:o.selectedOption===null},"提交答案",8,Cb)])])])}const Sb=Q(Ym,[["render",Ab]]),wb={name:"ErrorsIonView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Eb={class:"sec active"},Tb={class:"bread"},Rb={class:"ec open"},Ob={class:"ec-b",style:{display:"block"}},Ib={class:"cb"},Pb={class:"ch"},Nb={class:"ec open"},xb={class:"ec-b",style:{display:"block"}},qb={class:"cb"},Fb={class:"ch"},Mb={class:"cb"},Db={class:"ch"},Vb={class:"ec open"},$b={class:"ec-b",style:{display:"block"}},Bb={class:"cb"},Gb={class:"ch"},Lb={class:"ec open"},Ub={class:"ec-b",style:{display:"block"}},Kb={class:"cb"},Wb={class:"ch"};function Hb(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Eb,[t("div",Tb,[w(c,{to:"/"},{default:R(()=>[...s[5]||(s[5]=[v("首页",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),w(c,{to:"/errors"},{default:R(()=>[...s[6]||(s[6]=[v("错误诊断",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),s[9]||(s[9]=t("span",null,"离子步问题",-1))]),s[39]||(s[39]=t("h2",null,"离子步问题诊断",-1)),s[40]||(s[40]=t("p",null,"离子步问题通常涉及结构优化不收敛、原子跑飞或力不收敛。",-1)),t("div",Rb,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：达到 NSW 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",Ob,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,'计算正常结束，但 OUTCAR 中显示 "reached required accuracy" 未出现。',-1)),s[14]||(s[14]=t("h4",null,"解决方案",-1)),t("div",Ib,[t("div",Pb,[s[10]||(s[10]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="cm"># 方案 1：增大离子步数</span>
<span class="kw">NSW</span>      = <span class="nu">300</span>           <span class="cm">; 默认 0，建议 100-300</span>

<span class="cm"># 方案 2：放宽力收敛标准</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>         <span class="cm">; 默认 -0.01，常用 -0.02 到 -0.05</span>

<span class="cm"># 方案 3：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; 2=CG, 1=RMM-DIIS（更快但不稳定）</span>

<span class="cm"># 方案 4：减小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.2</span>           <span class="cm">; 默认 0.5，振荡时减小</span></code></pre>`,1))]),s[15]||(s[15]=t("div",{class:"ib tip"},[t("strong",null,"判断是否真的需要优化："),v("查看 OSZICAR 中的能量是否在下降。如果能量已经稳定，可以适当放宽 EDIFFG。")],-1))])]),t("div",Nb,[s[26]||(s[26]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：原子跑飞 / 结构崩塌"),t("span",{class:"es sc"},"高频")],-1)),t("div",xb,[s[21]||(s[21]=t("h4",null,"症状",-1)),s[22]||(s[22]=t("div",{class:"esym"},[v("distance between some ions is very small !!"),t("br"),v("或能量突然增大到 10^6 eV")],-1)),s[23]||(s[23]=t("h4",null,"常见原因",-1)),s[24]||(s[24]=t("ul",null,[t("li",null,"初始结构原子距离太近（< 1.5 Å）"),t("li",null,"POTIM 步长太大"),t("li",null,"POSCAR 坐标类型写错（Direct 写成 Cartesian）"),t("li",null,"POSCAR 和 POTCAR 元素顺序不一致")],-1)),s[25]||(s[25]=t("h4",null,"解决方案",-1)),t("div",qb,[t("div",Fb,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=m(`<pre><code><span class="cm"># 缩小步长，增加稳定性</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>           <span class="cm">; 从 0.1 开始</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>          <span class="cm">; 放宽电子收敛</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.1</span>          <span class="cm">; 放宽力收敛</span></code></pre>`,1))]),t("div",Mb,[t("div",Db,[s[19]||(s[19]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[20]||(s[20]=m(`<pre><code><span class="cm"># 检查原子距离</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read
atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
distances = atoms.get_all_distances()
<span class="fn2">print</span>(f<span class="st">&quot;最小距离: {distances[distances &gt; 0].min():.2f} Å&quot;</span>)

<span class="cm"># 如果 &lt; 1.5 Å，需要重新构建结构</span></code></pre>`,1))])])]),s[41]||(s[41]=m('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：力不收敛但能量收敛</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><p>能量变化很小，但最大力仍然大于 EDIFFG 设置的阈值。</p><h4>解决方案</h4><ul><li>降低 <code>EDIFF = 1E-7</code> 或更小</li><li>增加 ENCUT（提高 30-50 eV）</li><li>加密 K 点</li><li>使用 <code>IBRION = 1</code>（RMM-DIIS 通常对力收敛更好）</li><li>检查是否需要开启自旋（ISPIN=2）</li></ul></div></div>',1)),t("div",Vb,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：ISIF=3 时晶格参数异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",$b,[s[30]||(s[30]=m('<table class="tb"><thead><tr><th>可能原因</th><th>解决</th><th>说明</th></tr></thead><tbody><tr><td>GGA-PBE 本身高估晶格</td><td>正常误差 ~1-2%</td><td>这是 PBE 泛函的特点</td></tr><tr><td>需要杂化泛函</td><td>使用 HSE06</td><td>但计算量大 10-100 倍</td></tr><tr><td>需要 +U</td><td>添加 LDAU 参数</td><td>含 3d/4f 金属的氧化物</td></tr><tr><td>需要范德华修正</td><td>IVDW=11 或 IVDW=12</td><td>层状材料、分子晶体</td></tr><tr><td>初始结构太差</td><td>重新构建初始结构</td><td>用实验值或文献值</td></tr></tbody></table>',1)),t("div",Bb,[t("div",Gb,[s[27]||(s[27]=t("span",{class:"la"},"INCAR",-1)),s[28]||(s[28]=t("span",{class:"fn"},"晶格优化参数",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[29]||(s[29]=m(`<pre><code><span class="cm"># 基本晶格优化</span>
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
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>       <span class="cm">; J 值</span></code></pre>`,1))])])]),t("div",Lb,[s[38]||(s[38]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：压力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Ub,[s[34]||(s[34]=t("h4",null,"症状",-1)),s[35]||(s[35]=t("p",null,"OUTCAR 中外部压力（external pressure）与期望值相差很大。",-1)),s[36]||(s[36]=t("h4",null,"查看压力",-1)),t("div",Kb,[t("div",Wb,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[33]||(s[33]=t("pre",null,[t("code",null,[t("span",{class:"fn2"},"grep"),v(),t("span",{class:"st"},'"external pressure"'),v(" OUTCAR")])],-1))]),s[37]||(s[37]=m('<h4>解决方案</h4><table class="tb"><thead><tr><th>情况</th><th>处理</th></tr></thead><tbody><tr><td>压力很大 (&gt; 10 kbar)</td><td>继续优化，ISIF=3</td></tr><tr><td>压力振荡</td><td>减小 POTIM</td></tr><tr><td>压力趋于稳定但不为零</td><td>检查 ENCUT 和 K 点是否足够</td></tr><tr><td>只要能量不要晶格</td><td>使用 ISIF=2</td></tr></tbody></table>',2))])])])}const jb=Q(wb,[["render",Hb]]),zb={name:"ErrorsMemoryView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},_b={class:"sec active"},Zb={class:"bread"},Yb={class:"ec open"},Xb={class:"ec-b",style:{display:"block"}},Jb={class:"cb"},Qb={class:"ch"},sv={class:"ec open"},nv={class:"ec-b",style:{display:"block"}},tv={class:"cb"},av={class:"ch"},lv={class:"cb"},ev={class:"ch"},pv={class:"ec open"},ov={class:"ec-b",style:{display:"block"}},cv={class:"cb"},dv={class:"ch"};function rv(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",_b,[t("div",Zb,[w(c,{to:"/"},{default:R(()=>[...s[4]||(s[4]=[v("首页",-1)])]),_:1}),s[6]||(s[6]=v("/ ",-1)),w(c,{to:"/errors"},{default:R(()=>[...s[5]||(s[5]=[v("错误诊断",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),s[8]||(s[8]=t("span",null,"内存与性能",-1))]),s[32]||(s[32]=t("h2",null,"内存与性能问题",-1)),s[33]||(s[33]=t("p",null,"内存溢出和计算速度慢是大规模计算中的常见问题。",-1)),t("div",Yb,[s[13]||(s[13]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：Out of memory / Killed"),t("span",{class:"es sc"},"高频")],-1)),t("div",Xb,[s[11]||(s[11]=m('<h4>症状</h4><div class="esym">forrtl: severe (41): insufficient virtual memory<br>或直接显示 Killed（被系统杀死）</div><h4>内存估算</h4><table class="tb"><thead><tr><th>原子数</th><th>ENCUT</th><th>估算内存</th></tr></thead><tbody><tr><td>50</td><td>400 eV</td><td>~10 GB</td></tr><tr><td>100</td><td>400 eV</td><td>~20-40 GB</td></tr><tr><td>200</td><td>400 eV</td><td>~60-100 GB</td></tr><tr><td>500</td><td>400 eV</td><td>~200+ GB</td></tr></tbody></table><h4>解决方案</h4>',5)),t("div",Jb,[t("div",Qb,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[10]||(s[10]=m(`<pre><code><span class="cm"># 方案 1：实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>          <span class="cm">; 实空间计算投影算符</span>
<span class="kw">LREAL</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 默认，倒空间计算（更精确但费内存）</span>

<span class="cm"># 方案 2：减少同时处理的轨道数</span>
<span class="kw">NSIM</span>     = <span class="nu">1</span>             <span class="cm">; 默认 4，设为 1 最省内存</span>

<span class="cm"># 方案 3：减少 K 点并行</span>
<span class="kw">KPAR</span>     = <span class="nu">1</span>             <span class="cm">; 减少 K 点并行度</span>

<span class="cm"># 方案 4：不写大文件</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 WAVECAR</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 CHGCAR</span></code></pre>`,1))]),s[12]||(s[12]=t("div",{class:"ib tip"},[t("strong",null,"检查内存使用："),v("运行时查看 "),t("code",null,"top"),v(" 或 "),t("code",null,"free -h"),v(" 命令。")],-1))])]),t("div",sv,[s[23]||(s[23]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：计算速度太慢"),t("span",{class:"es scm"},"常见")],-1)),t("div",nv,[s[20]||(s[20]=t("h4",null,"性能优化 INCAR",-1)),t("div",tv,[t("div",av,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"性能优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>          <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>            <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>             <span class="cm">; 减少输出</span></code></pre>`,1))]),s[21]||(s[21]=m('<h4>并行设置</h4><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',2)),t("div",lv,[t("div",ev,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"并行设置示例（64 核，4 节点，每节点 16 核）",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="cm"># 64 核，4 节点，8 个 K 点</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个节点</span>
<span class="kw">KPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个 K 点并行（整除 8）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>            <span class="cm">; 每节点 16 核</span></code></pre>`,1))]),s[22]||(s[22]=t("div",{class:"ib warn"},[t("strong",null,"注意："),v("NPAR × KPAR × NCORE 应整除总核心数。NPAR 应整除 NBANDS。")],-1))])]),s[34]||(s[34]=m('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：磁盘空间不足</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><div class="esym">forrtl: severe (30): open unit, error on file OPEN</div><h4>文件大小参考</h4><table class="tb"><thead><tr><th>文件</th><th>典型大小</th><th>说明</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>1-100 GB</td><td>最大文件</td></tr><tr><td><code>CHGCAR</code></td><td>100 MB - 10 GB</td><td>电荷密度</td></tr><tr><td><code>OUTCAR</code></td><td>100 MB - 2 GB</td><td>详细输出</td></tr><tr><td><code>vasprun.xml</code></td><td>100 MB - 5 GB</td><td>XML 输出</td></tr></tbody></table><h4>解决方案</h4><ol><li>检查磁盘：<code>df -h</code></li><li>删除不需要的文件：<code>rm WAVECAR</code></li><li>设置 <code>LWAVE = .FALSE.</code></li><li>设置 <code>LCHARG = .FALSE.</code></li><li>使用 <code>NWRITE = 0</code> 减少输出</li></ol></div></div>',1)),t("div",pv,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟢"),t("span",{class:"et"},"问题 4：MPI 通信效率低"),t("span",{class:"es smn"},"优化")],-1)),t("div",ov,[s[26]||(s[26]=t("h4",null,"症状",-1)),s[27]||(s[27]=t("p",null,"使用大量核心但加速比不理想（如 128 核只比 64 核快 1.5 倍）。",-1)),s[28]||(s[28]=t("h4",null,"诊断方法",-1)),t("div",cv,[t("div",dv,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -20

<span class="cm"># 时间分布</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Parallel routine&quot;</span> OUTCAR -A 20</code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"优化建议",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,"确保核心数整除 NPAR、KPAR、NCORE"),t("li",null,"K 点少时，减少 KPAR"),t("li",null,"能带少时，减少 NPAR"),t("li",null,"使用高速网络（InfiniBand）")],-1))])]),s[35]||(s[35]=m('<h3>性能调优总结</h3><div class="db"><div class="db-t">不同场景的推荐设置</div><table class="tb"><thead><tr><th>场景</th><th>LREAL</th><th>ALGO</th><th>NPAR</th><th>KPAR</th></tr></thead><tbody><tr><td>小体系 (&lt; 50 原子)</td><td>.FALSE.</td><td>Normal</td><td>核心数</td><td>K 点数</td></tr><tr><td>中体系 (50-200 原子)</td><td>Auto</td><td>Fast</td><td>节点数</td><td>1</td></tr><tr><td>大体系 (&gt; 200 原子)</td><td>Auto</td><td>Fast</td><td>1</td><td>1</td></tr></tbody></table></div>',2))])}const iv=Q(zb,[["render",rv]]),uv={name:"ErrorsFilesView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},fv={class:"sec active"},mv={class:"bread"},bv={class:"ec open"},vv={class:"ec-b",style:{display:"block"}},gv={class:"cb"},hv={class:"ch"},yv={class:"ec open"},kv={class:"ec-b",style:{display:"block"}},Cv={class:"cb"},Av={class:"ch"},Sv={class:"ec open"},wv={class:"ec-b",style:{display:"block"}},Ev={class:"cb"},Tv={class:"ch"},Rv={class:"cb"},Ov={class:"ch"},Iv={class:"ec open"},Pv={class:"ec-b",style:{display:"block"}},Nv={class:"cb"},xv={class:"ch"};function qv(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",fv,[t("div",mv,[w(c,{to:"/"},{default:R(()=>[...s[5]||(s[5]=[v("首页",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),w(c,{to:"/errors"},{default:R(()=>[...s[6]||(s[6]=[v("错误诊断",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),s[9]||(s[9]=t("span",null,"文件错误",-1))]),s[38]||(s[38]=t("h2",null,"文件错误诊断",-1)),s[39]||(s[39]=t("p",null,"输入文件格式错误是初学者最常遇到的问题。",-1)),t("div",bv,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：POTCAR 元素顺序与 POSCAR 不一致"),t("span",{class:"es sc"},"高频")],-1)),t("div",vv,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,"计算结果明显错误，能量异常大，或结构优化后原子位置混乱。",-1)),s[14]||(s[14]=t("h4",null,"检查方法",-1)),t("div",gv,[t("div",hv,[s[10]||(s[10]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[11]||(s[11]=m(`<pre><code><span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POSCAR 中的元素</span>
<span class="fn2">head</span> -6 POSCAR

<span class="cm"># 确认两者顺序一致！</span></code></pre>`,1))]),s[15]||(s[15]=m(`<h4>正确示例</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span></div><pre><code>TiO2
1.0
4.59  0.00  0.00
0.00  4.59  0.00
0.00  0.00  2.96
Ti O          <span class="cm">; ← 先 Ti 后 O</span>
1 2
Direct</code></pre></div><div class="cb"><div class="ch"><span class="la">POTCAR</span></div><pre><code>TITEL  = PAW_PBE Ti ...    <span class="cm">; ← 第一个必须是 Ti</span>
TITEL  = PAW_PBE O  ...    <span class="cm">; ← 第二个是 O</span></code></pre></div><div class="ib warn"><strong>重要：</strong>POTCAR 顺序必须与 POSCAR 完全一致，否则结果完全错误！</div>`,4))])]),t("div",yv,[s[20]||(s[20]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：POSCAR 格式错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",kv,[s[19]||(s[19]=m(`<table class="tb"><thead><tr><th>错误类型</th><th>说明</th><th>解决方法</th></tr></thead><tbody><tr><td>缩放因子为 0</td><td>第二行不能为 0</td><td>改为 1.0 或实际值</td></tr><tr><td>坐标类型拼错</td><td>必须是 Direct 或 Cartesian</td><td>检查拼写和大小写</td></tr><tr><td>原子数与坐标不匹配</td><td>声明 N 个原子但只有 M 行坐标</td><td>检查坐标行数</td></tr><tr><td>多余空行</td><td>文件末尾不要有空行</td><td>删除末尾空行</td></tr><tr><td>Windows 换行符</td><td>\\r\\n 导致问题</td><td>dos2unix POSCAR</td></tr><tr><td>制表符</td><td>不要用 Tab，用空格</td><td>替换 Tab 为空格</td></tr></tbody></table><h4>POSCAR 格式详解</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span><span class="fn">完整格式</span></div><pre><code>Si bulk structure          <span class="cm">; 第 1 行：注释（可选）</span>
1.0                        <span class="cm">; 第 2 行：缩放因子</span>
5.43  0.00  0.00           <span class="cm">; 第 3-5 行：晶格矢量</span>
0.00  5.43  0.00
0.00  0.00  5.43
Si                         <span class="cm">; 第 6 行：元素符号</span>
2                          <span class="cm">; 第 7 行：原子数</span>
Direct                     <span class="cm">; 第 8 行：坐标类型</span>
0.00  0.00  0.00           <span class="cm">; 第 9 行起：原子坐标</span>
0.25  0.25  0.25</code></pre></div><h4>选择性动力学格式</h4>`,4)),t("div",Cv,[t("div",Av,[s[17]||(s[17]=t("span",{class:"la"},"POSCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[v(`Si surface
1.0
5.43  0.00  0.00
0.00  5.43  0.00
0.00  0.00  15.0
Si
4
Selective dynamics        `),t("span",{class:"cm"},"; 开启选择性动力学"),v(`
Direct
0.00  0.00  0.00  F F F   `),t("span",{class:"cm"},"; F=固定，T=可动"),v(`
0.25  0.25  0.25  F F F
0.50  0.50  0.50  T T T
0.75  0.75  0.75  T T T`)])],-1))])])]),t("div",Sv,[s[30]||(s[30]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：KPOINTS 格式错误"),t("span",{class:"es scm"},"常见")],-1)),t("div",wv,[s[27]||(s[27]=t("h4",null,"常见错误",-1)),s[28]||(s[28]=t("ul",null,[t("li",null,"第 2 行不是 0（自动生成模式下必须是 0）"),t("li",null,"Gamma 拼写错误（正确：Gamma，不是 GAMMA 或 gamma）"),t("li",null,"Line-mode 缺少空行分隔线段"),t("li",null,"坐标格式与 Direct/Cartesian 不匹配")],-1)),s[29]||(s[29]=t("h4",null,"正确格式",-1)),t("div",Ev,[t("div",Tv,[s[21]||(s[21]=t("span",{class:"la"},"KPOINTS",-1)),s[22]||(s[22]=t("span",{class:"fn"},"自动网格",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[23]||(s[23]=m(`<pre><code>Automatic mesh        <span class="cm">; 注释行</span>
0                     <span class="cm">; 必须是 0（自动生成）</span>
Gamma                 <span class="cm">; 生成方式：Gamma 或 Monkhorst</span>
4 4 4                 <span class="cm">; k 点网格</span>
0.0 0.0 0.0           <span class="cm">; 偏移（通常全 0）</span></code></pre>`,1))]),t("div",Rv,[t("div",Ov,[s[24]||(s[24]=t("span",{class:"la"},"KPOINTS",-1)),s[25]||(s[25]=t("span",{class:"fn"},"Line-mode（能带计算）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[26]||(s[26]=m(`<pre><code>k-points along high symmetry lines
10                    <span class="cm">; 每条线段的点数</span>
Line-mode             <span class="cm">; 线模式</span>
Reciprocal            <span class="cm">; 坐标类型</span>
0.0  0.0  0.0         <span class="cm">; 起点 Gamma</span>
0.5  0.5  0.0         <span class="cm">; 终点 X</span>
                      <span class="cm">; ← 空行分隔！</span>
0.5  0.5  0.0         <span class="cm">; 起点 X</span>
0.5  0.5  0.5         <span class="cm">; 终点 R</span></code></pre>`,1))])])]),t("div",Iv,[s[37]||(s[37]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：找不到 POTCAR 文件"),t("span",{class:"es scm"},"常见")],-1)),t("div",Pv,[s[33]||(s[33]=t("h4",null,"症状",-1)),s[34]||(s[34]=t("div",{class:"esym"},"VASP could not be started because POTCAR file was not found",-1)),s[35]||(s[35]=t("h4",null,"生成 POTCAR",-1)),t("div",Nv,[t("div",xv,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[32]||(s[32]=m(`<pre><code><span class="cm"># 查看赝势库路径</span>
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
p.write_file(<span class="st">&#39;POTCAR&#39;</span>)</code></pre>`,1))]),s[36]||(s[36]=t("div",{class:"ib tip"},[t("strong",null,"建议："),v("设置环境变量 VASP_PP_PATH 指向赝势库目录，方便使用。")],-1))])]),s[40]||(s[40]=m('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 5：INCAR 参数格式错误</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>常见错误</h4><table class="tb"><thead><tr><th>错误写法</th><th>正确写法</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT=400</code></td><td><code>ENCUT = 400</code></td><td>等号两边要有空格</td></tr><tr><td><code>LREAL=.true.</code></td><td><code>LREAL = .TRUE.</code></td><td>布尔值大写</td></tr><tr><td><code>ISMEAR=0.5</code></td><td><code>ISMEAR = 0</code></td><td>ISMEAR 是整数</td></tr><tr><td><code>SYSTEM= test</code></td><td><code>SYSTEM = test</code></td><td>等号对齐</td></tr></tbody></table><div class="ib warn"><strong>注意：</strong>VASP 对格式敏感，但通常会忽略无法识别的行并给出警告。</div></div></div>',1))])}const Fv=Q(uv,[["render",qv]]),Mv={name:"ErrorsOutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Dv={class:"sec active"},Vv={class:"bread"},$v={class:"ec open"},Bv={class:"ec-b",style:{display:"block"}},Gv={class:"cb"},Lv={class:"ch"},Uv={class:"ec open"},Kv={class:"ec-b",style:{display:"block"}},Wv={class:"cb"},Hv={class:"ch"},jv={class:"ec open"},zv={class:"ec-b",style:{display:"block"}},_v={class:"cb"},Zv={class:"ch"},Yv={class:"cb"},Xv={class:"ch"},Jv={class:"ec open"},Qv={class:"ec-b",style:{display:"block"}},s2={class:"cb"},n2={class:"ch"},t2={class:"ec open"},a2={class:"ec-b",style:{display:"block"}},l2={class:"cb"},e2={class:"ch"};function p2(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Dv,[t("div",Vv,[w(c,{to:"/"},{default:R(()=>[...s[6]||(s[6]=[v("首页",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),w(c,{to:"/errors"},{default:R(()=>[...s[7]||(s[7]=[v("错误诊断",-1)])]),_:1}),s[9]||(s[9]=v("/ ",-1)),s[10]||(s[10]=t("span",null,"输出异常",-1))]),s[42]||(s[42]=t("h2",null,"输出异常诊断",-1)),s[43]||(s[43]=t("p",null,"计算完成但结果不合理时，需要排查输出文件中的异常。",-1)),t("div",$v,[s[15]||(s[15]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 1：能量异常大或异常小"),t("span",{class:"es scm"},"常见")],-1)),t("div",Bv,[s[13]||(s[13]=m('<table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>能量 ~10⁶ eV</td><td>原子重叠（距离太近）</td><td>检查 POSCAR 原子距离</td></tr><tr><td>能量比文献差很多</td><td>POTCAR 泛函不匹配</td><td>确认使用正确的泛函</td></tr><tr><td>能量正数</td><td>严重结构错误</td><td>重新构建结构</td></tr><tr><td>NaN / Infinity</td><td>数值溢出</td><td>降低 ENCUT</td></tr><tr><td>能量不收敛</td><td>SCF 问题</td><td>参考 SCF 不收敛诊断</td></tr></tbody></table><h4>查看能量</h4>',2)),t("div",Gv,[t("div",Lv,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[12]||(s[12]=m(`<pre><code><span class="cm"># 查看自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看能量变化</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR

<span class="cm"># 每原子能量（估算）</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 手动除以原子数</span></code></pre>`,1))]),s[14]||(s[14]=t("div",{class:"ib tip"},[t("strong",null,"参考值："),v("大多数材料的结合能在 -1 到 -10 eV/atom 范围内。如果偏离太多，需要检查计算设置。")],-1))])]),t("div",Uv,[s[22]||(s[22]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：力很大（> 1 eV/Å）"),t("span",{class:"es scm"},"常见")],-1)),t("div",Kv,[s[18]||(s[18]=t("h4",null,"症状",-1)),s[19]||(s[19]=t("p",null,"优化收敛后力仍然很大，或优化过程中力振荡。",-1)),s[20]||(s[20]=t("h4",null,"查看力",-1)),t("div",Wv,[t("div",Hv,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=m(`<pre><code><span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">20</span> | <span class="fn2">tail</span> -20

<span class="cm"># 查看力是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR</code></pre>`,1))]),s[21]||(s[21]=m('<h4>正常值参考</h4><table class="tb"><thead><tr><th>状态</th><th>最大力</th><th>说明</th></tr></thead><tbody><tr><td>良好收敛</td><td>&lt; 0.01 eV/Å</td><td>高质量结果</td></tr><tr><td>一般收敛</td><td>0.01 - 0.05 eV/Å</td><td>大多数应用足够</td></tr><tr><td>勉强收敛</td><td>0.05 - 0.1 eV/Å</td><td>可接受但不理想</td></tr><tr><td>未收敛</td><td>&gt; 0.1 eV/Å</td><td>需要继续优化</td></tr><tr><td>有问题</td><td>&gt; 1.0 eV/Å</td><td>结构或计算有问题</td></tr></tbody></table><h4>解决方案</h4><ul><li>检查原子距离是否合理</li><li>增加 NSW 继续优化</li><li>减小 POTIM</li><li>降低 EDIFF 到 1E-7</li><li>增加 ENCUT</li></ul>',4))])]),t("div",jv,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：磁矩不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",zv,[s[28]||(s[28]=t("h4",null,"查看磁矩",-1)),t("div",_v,[t("div",Zv,[s[23]||(s[23]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[24]||(s[24]=m(`<pre><code><span class="cm"># 查看总磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;number of electron&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看每个原子的磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span></code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"常见问题",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,[t("strong",null,"磁矩为零但应有磁性"),v("：需要设置 ISPIN=2 和适当的 MAGMOM")]),t("li",null,[t("strong",null,"磁矩振荡"),v("：MAGMOM 初始值设置不当，尝试不同的初始值")]),t("li",null,[t("strong",null,"磁矩不合理"),v("：检查是否需要开启自旋轨道耦合（LSORBIT=.TRUE.）")])],-1)),t("div",Yv,[t("div",Xv,[s[25]||(s[25]=t("span",{class:"la"},"INCAR",-1)),s[26]||(s[26]=t("span",{class:"fn"},"磁性计算",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[27]||(s[27]=m(`<pre><code><span class="cm"># 自旋极化计算</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>             <span class="cm">; 开启自旋极化</span>

<span class="cm"># 初始磁矩设置</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 5 5</span>       <span class="cm">; 每个原子的初始磁矩 (μB)</span>

<span class="cm"># 过渡金属常见值</span>
<span class="cm"># Fe, Co, Ni: 3-5 μB</span>
<span class="cm"># Mn: 5 μB</span>
<span class="cm"># Cr: 3-5 μB</span>
<span class="cm"># Cu, Zn: 0 (d 满)</span></code></pre>`,1))])])]),t("div",Jv,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：应力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Qv,[s[34]||(s[34]=t("h4",null,"查看应力",-1)),t("div",s2,[t("div",n2,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[33]||(s[33]=m(`<pre><code><span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1</code></pre>`,1))]),s[35]||(s[35]=m('<h4>正常值参考</h4><table class="tb"><thead><tr><th>压力</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>&lt; 1 kbar</td><td>很好</td><td>晶格已收敛</td></tr><tr><td>1 - 5 kbar</td><td>良好</td><td>大多数应用足够</td></tr><tr><td>5 - 20 kbar</td><td>一般</td><td>可接受但不理想</td></tr><tr><td>&gt; 20 kbar</td><td>差</td><td>需要继续优化</td></tr></tbody></table><div class="ib tip"><strong>单位换算：</strong>1 kbar = 0.1 GPa = 100 MPa</div>',3))])]),t("div",t2,[s[41]||(s[41]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：能带带隙不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",a2,[s[40]||(s[40]=m('<h4>问题分析</h4><table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>半导体显示为金属</td><td>GGA-PBE 低估带隙</td><td>使用杂化泛函 HSE06</td></tr><tr><td>带隙偏大</td><td>带隙计算方法问题</td><td>使用 ISMEAR=0 或 -5</td></tr><tr><td>间接带隙变直接</td><td>K 点不足</td><td>加密 K 点</td></tr></tbody></table><h4>准确计算带隙</h4>',3)),t("div",l2,[t("div",e2,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"带隙计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[39]||(s[39]=m(`<pre><code><span class="cm"># 方案 1：GGA-PBE（低估带隙）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 方案 2：杂化泛函 HSE06（更准确但慢）</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>        <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>

<span class="cm"># 方案 3：GW 计算（最准确但最慢）</span>
<span class="cm"># 需要分步进行，参考 VASP 手册</span></code></pre>`,1))])])])])}const o2=Q(Mv,[["render",p2]]),c2={name:"ThermoelectricView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},d2={class:"sec active"},r2={class:"bread"},i2={class:"cb"},u2={class:"ch"},f2={class:"cb"},m2={class:"ch"},b2={class:"cb"},v2={class:"ch"},g2={class:"cb"},h2={class:"ch"},y2={class:"cb"},k2={class:"ch"},C2={class:"cb"},A2={class:"ch"},S2={class:"cb"},w2={class:"ch"},E2={class:"cb"},T2={class:"ch"},R2={class:"cb"},O2={class:"ch"},I2={class:"cb"},P2={class:"ch"},N2={class:"cb"},x2={class:"ch"};function q2(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",d2,[t("div",r2,[w(c,{to:"/"},{default:R(()=>[...s[11]||(s[11]=[v("首页",-1)])]),_:1}),s[13]||(s[13]=v("/ ",-1)),w(c,{to:"/tasks"},{default:R(()=>[...s[12]||(s[12]=[v("计算任务",-1)])]),_:1}),s[14]||(s[14]=v("/ ",-1)),s[15]||(s[15]=t("span",null,"热电计算",-1))]),s[47]||(s[47]=m('<h2>热电材料计算</h2><p>热电材料能够将热能直接转换为电能（Seebeck效应）或将电能转换为热能（Peltier效应），在废热回收和固态制冷中有重要应用。</p><h3>1. 热电优值 ZT</h3><p>热电材料的性能由无量纲热电优值 ZT 表征：</p><div class="fb"><div class="fm">ZT = S²σT / κ</div><div class="fd">S: Seebeck系数 | σ: 电导率 | T: 温度 | κ: 热导率</div></div><table class="tb"><thead><tr><th>参数</th><th>单位</th><th>理想方向</th><th>说明</th></tr></thead><tbody><tr><td><strong>Seebeck系数 S</strong></td><td>μV/K</td><td>越大越好</td><td>衡量每单位温差产生的电压</td></tr><tr><td><strong>电导率 σ</strong></td><td>S/m</td><td>越大越好</td><td>衡量电荷传输能力</td></tr><tr><td><strong>热导率 κ</strong></td><td>W/m·K</td><td>越小越好</td><td>κ = κ<sub>e</sub> + κ<sub>l</sub></td></tr><tr><td><strong>功率因子 PF</strong></td><td>μW/cm·K²</td><td>越大越好</td><td>PF = S²σ</td></tr></tbody></table><div class="ib tip"><strong>ZT 目标：</strong>商业化应用需要 ZT &gt; 2.0，目前最佳热电材料（如 SnSe）在高温下可达 ZT ~ 2.6。</div><h3>2. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取稳定结构）</div><div class="fa"></div><div class="fn2-node p">自洽计算（获取精确电荷密度）</div><div class="fa"></div><div class="fn2-node p">非自洽计算（密集 K 点，获取能带）</div><div class="fa"></div><div class="fn2-node p">BoltzTraP 计算输运性质</div><div class="fa"></div><div class="fn2-node p">声子计算（获取晶格热导率）</div><div class="fa"></div><div class="fn2-node e">计算 ZT 值</div></div><h3>3. 结构优化</h3>',10)),t("div",i2,[t("div",u2,[s[16]||(s[16]=t("span",{class:"la"},"INCAR",-1)),s[17]||(s[17]=t("span",{class:"fn"},"热电材料结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 relaxation</span>

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
<span class="kw">NBANDS</span>   = <span class="nu">200</span>              <span class="cm">; SOC 需要更多能带</span></code></pre>`,1))]),s[48]||(s[48]=t("h3",null,"4. 自洽计算",-1)),t("div",f2,[t("div",m2,[s[19]||(s[19]=t("span",{class:"la"},"INCAR",-1)),s[20]||(s[20]=t("span",{class:"fn"},"自洽计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[21]||(s[21]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 SCF</span>

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
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[49]||(s[49]=t("h3",null,"5. 非自洽计算（密集 K 点）",-1)),s[50]||(s[50]=t("p",null,"BoltzTraP 需要非常密集的 K 点网格来准确计算输运性质。",-1)),t("div",b2,[t("div",v2,[s[22]||(s[22]=t("span",{class:"la"},"INCAR",-1)),s[23]||(s[23]=t("span",{class:"fn"},"非自洽计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[24]||(s[24]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 non-SCF</span>

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
<span class="kw">NEDOS</span>    = <span class="nu">2000</span></code></pre>`,1))]),t("div",g2,[t("div",h2,[s[25]||(s[25]=t("span",{class:"la"},"KPOINTS",-1)),s[26]||(s[26]=t("span",{class:"fn"},"密集网格（BoltzTraP 需要）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[27]||(s[27]=m(`<pre><code><span class="vr">Dense k-mesh for BoltzTraP</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">24  24  24</span>               <span class="cm">; 非常密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[51]||(s[51]=t("div",{class:"ib warn"},[t("strong",null,"重要："),v("BoltzTraP 需要非常密集的 K 点（通常 20×20×20 或更高），否则输运系数不准确。")],-1)),s[52]||(s[52]=t("h3",null,"6. BoltzTraP 计算",-1)),s[53]||(s[53]=t("p",null,"BoltzTraP 基于玻尔兹曼输运理论计算电导率和 Seebeck 系数。",-1)),s[54]||(s[54]=t("h4",null,"安装 BoltzTraP",-1)),t("div",y2,[t("div",k2,[s[28]||(s[28]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[29]||(s[29]=m(`<pre><code><span class="cm"># 下载 BoltzTraP</span>
<span class="fn2">wget</span> http://www.physics.iit.edu/~savrasov/BoltzTraP/BoltzTraP.tar.gz
<span class="fn2">tar</span> -xzf BoltzTraP.tar.gz
<span class="fn2">cd</span> BoltzTraP/src
<span class="fn2">make</span>
<span class="fn2">cp</span> boltztrap ../bin/</code></pre>`,1))]),s[55]||(s[55]=t("h4",null,"运行 BoltzTraP",-1)),t("div",C2,[t("div",A2,[s[30]||(s[30]=t("span",{class:"la"},"bash",-1)),s[31]||(s[31]=t("span",{class:"fn"},"boltztrap.sh",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[32]||(s[32]=m(`<pre><code><span class="kw">#!/bin/bash</span>

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

<span class="cm"># 输出文件：bi2te3.trace (Seebeck, 电导率等)</span></code></pre>`,1))]),s[56]||(s[56]=t("h4",null,"解读 BoltzTraP 输出",-1)),t("div",S2,[t("div",w2,[s[33]||(s[33]=t("span",{class:"la"},"python",-1)),s[34]||(s[34]=t("span",{class:"fn"},"read_boltztrap.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[35]||(s[35]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[57]||(s[57]=t("h3",null,"7. 晶格热导率计算",-1)),s[58]||(s[58]=t("p",null,[v("晶格热导率 κ"),t("sub",null,"l"),v(" 通过声子计算获得，使用 Slack 模型或求解玻尔兹曼方程。")],-1)),s[59]||(s[59]=t("h4",null,"Slack 模型估算",-1)),t("div",E2,[t("div",T2,[s[36]||(s[36]=t("span",{class:"la"},"python",-1)),s[37]||(s[37]=t("span",{class:"fn"},"slack_model.py",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[38]||(s[38]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np

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
    <span class="fn2">print</span>(f<span class="st">&quot;{T:.0f} K: κ = {k:.2f} W/m·K&quot;</span>)</code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"phonopy 计算晶格热导率",-1)),t("div",R2,[t("div",O2,[s[39]||(s[39]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[40]||(s[40]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 使用 phonopy 计算热导率（BTE 方法）"),v(`
`),t("span",{class:"fn2"},"phonopy"),v(` --mesh="20 20 20" --tprop --fc DispFC

`),t("span",{class:"cm"},"# 或使用 phono3py 计算三声子散射"),v(`
`),t("span",{class:"fn2"},"phono3py"),v(' --mesh="20 20 20" --tprop')])],-1))]),s[61]||(s[61]=t("h3",null,"8. ZT 值计算",-1)),t("div",I2,[t("div",P2,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"calculate_ZT.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[43]||(s[43]=m(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
<span class="fn2">print</span>(f<span class="st">&quot;最佳 ZT: {max(max_ZT):.2f} at {best_T} K&quot;</span>)</code></pre>`,1))]),s[62]||(s[62]=m('<h3>9. 常见热电材料</h3><table class="tb"><thead><tr><th>材料</th><th>类型</th><th>最佳温度</th><th>ZT 峰值</th><th>应用</th></tr></thead><tbody><tr><td>Bi₂Te₃</td><td>窄带隙半导体</td><td>300-400 K</td><td>~1.0</td><td>室温制冷</td></tr><tr><td>PbTe</td><td>IV-VI 化合物</td><td>600-900 K</td><td>~2.0</td><td>中温发电</td></tr><tr><td>SnSe</td><td>层状材料</td><td>700-900 K</td><td>~2.6</td><td>高温发电</td></tr><tr><td>Mg₂Si</td><td>硅化物</td><td>500-800 K</td><td>~1.3</td><td>汽车废热</td></tr><tr><td>Half-Heusler</td><td>金属间化合物</td><td>700-1000 K</td><td>~1.5</td><td>高温发电</td></tr></tbody></table><h3>10. 提高 ZT 的策略</h3><div class="db"><div class="db-t">优化热电性能的方法</div><h4>1. 增大功率因子 S²σ</h4><ul><li>优化载流子浓度（通常 10<sup>19</sup>-10<sup>21</sup> cm⁻³）</li><li>能带工程：增大能带有效质量</li><li>能量过滤效应</li><li>共振能级掺杂</li></ul><h4>2. 降低热导率 κ</h4><ul><li>纳米结构化：增加声子散射</li><li>点缺陷散射：合金化、掺杂</li><li>界面散射：纳米复合材料</li><li>本征低热导率材料：重元素、复杂结构</li></ul><h4>3. 能带收敛</h4><ul><li>多能谷材料：增大谷简并度</li><li>温度诱导能带收敛</li><li>压力诱导能带收敛</li></ul></div><h3>11. 完整计算脚本</h3>',5)),t("div",N2,[t("div",x2,[s[44]||(s[44]=t("span",{class:"la"},"bash",-1)),s[45]||(s[45]=t("span",{class:"fn"},"thermoelectric_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[46]||(s[46]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))]),s[63]||(s[63]=t("h3",null,"12. 注意事项",-1)),s[64]||(s[64]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"热电计算需要密集 K 点（20×20×20 或更高）"),t("li",null,"重元素（Bi, Pb, Te 等）通常需要考虑自旋轨道耦合"),t("li",null,"BoltzTraP 计算需要较大内存"),t("li",null,"晶格热导率计算需要高精度的力常数"),t("li",null,"ZT 的准确度取决于所有参数的准确度")])],-1))])}const F2=Q(c2,[["render",q2]]),M2={name:"GaussianView"},D2={class:"sec active"},V2={class:"bread"},$2={class:"pg"};function B2(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",D2,[t("div",V2,[w(c,{to:"/"},{default:R(()=>[...s[0]||(s[0]=[v("首页",-1)])]),_:1}),s[1]||(s[1]=v("/",-1)),s[2]||(s[2]=t("span",null,"Gaussian 教程",-1))]),s[8]||(s[8]=m('<h2>Gaussian 量子化学计算</h2><p>Gaussian 是最广泛使用的量子化学计算软件，专注于分子体系的电子结构计算。</p><h3>1. Gaussian 简介</h3><table class="tb"><thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系（晶体、表面）</td></tr><tr><td><strong>基组</strong></td><td>高斯基组</td><td>平面波基组</td></tr><tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr><tr><td><strong>主要应用</strong></td><td>有机分子、反应机理</td><td>固体、材料</td></tr><tr><td><strong>计算效率</strong></td><td>小体系快</td><td>大体系快</td></tr></tbody></table><h3>2. Gaussian 核心功能</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔬</div><div class="pc-t">几何优化</div><div class="pc-d">寻找分子的稳定构型</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">⚡</div><div class="pc-t">能量计算</div><div class="pc-d">计算分子的总能量</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📊</div><div class="pc-t">频率计算</div><div class="pc-d">振动频率和红外光谱</div></div><div class="pc" style="--ca:var(--accent);"><div class="pc-i">🔗</div><div class="pc-t">反应路径</div><div class="pc-d">过渡态搜索和IRC</div></div></div><h3>3. 支持的计算方法</h3><table class="tb"><thead><tr><th>方法</th><th>关键词</th><th>精度</th><th>计算成本</th><th>适用体系</th></tr></thead><tbody><tr><td><strong>HF</strong></td><td><code class="ic">HF</code></td><td>一般</td><td>低</td><td>定性分析</td></tr><tr><td><strong>DFT</strong></td><td><code class="ic">B3LYP</code></td><td>较好</td><td>中</td><td>最常用</td></tr><tr><td><strong>MP2</strong></td><td><code class="ic">MP2</code></td><td>好</td><td>高</td><td>弱相互作用</td></tr><tr><td><strong>CCSD(T)</strong></td><td><code class="ic">CCSD(T)</code></td><td>极高</td><td>极高</td><td>高精度基准</td></tr><tr><td><strong>TDDFT</strong></td><td><code class="ic">TD</code></td><td>较好</td><td>中</td><td>激发态</td></tr></tbody></table><h3>4. 常用泛函推荐</h3><table class="tb"><thead><tr><th>泛函</th><th>关键词</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><strong>B3LYP</strong></td><td><code class="ic">B3LYP</code></td><td>通用</td><td>最广泛使用</td></tr><tr><td><strong>PBE0</strong></td><td><code class="ic">PBE0</code></td><td>通用</td><td>与 VASP PBE 对应</td></tr><tr><td><strong>M06-2X</strong></td><td><code class="ic">M062X</code></td><td>有机分子</td><td>反应能垒准确</td></tr><tr><td><strong>ωB97X-D</strong></td><td><code class="ic">wB97XD</code></td><td>非共价作用</td><td>包含色散修正</td></tr><tr><td><strong>B2PLYP</strong></td><td><code class="ic">B2PLYP</code></td><td>高精度</td><td>双杂化泛函</td></tr></tbody></table><h3>5. 基组选择指南</h3><table class="tb"><thead><tr><th>基组</th><th>关键词</th><th>精度</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>6-31G(d)</strong></td><td><code class="ic">6-31G(d)</code></td><td>中</td><td>常规计算</td></tr><tr><td><strong>6-31+G(d,p)</strong></td><td><code class="ic">6-31+G(d,p)</code></td><td>较好</td><td>阴离子、电子亲和</td></tr><tr><td><strong>6-311+G(2d,2p)</strong></td><td><code class="ic">6-311+G(2d,2p)</code></td><td>高</td><td>精确计算</td></tr><tr><td><strong>cc-pVDZ</strong></td><td><code class="ic">cc-pVDZ</code></td><td>中</td><td>相关一致性</td></tr><tr><td><strong>cc-pVTZ</strong></td><td><code class="ic">cc-pVTZ</code></td><td>高</td><td>高精度计算</td></tr><tr><td><strong>def2-TZVP</strong></td><td><code class="ic">def2TZVP</code></td><td>高</td><td>通用高精度</td></tr></tbody></table><div class="ib tip"><strong>推荐组合：</strong><ul><li>常规计算：<code class="ic">B3LYP/6-31G(d)</code></li><li>精确计算：<code class="ic">M06-2X/6-311+G(2d,2p)</code></li><li>弱相互作用：<code class="ic">ωB97X-D/def2-TZVP</code></li></ul></div><h3>6. Gaussian 与 VASP 的配合使用</h3><div class="db"><div class="db-t">互补应用场景</div><ul><li><strong>Gaussian</strong>：分子初始结构优化、反应机理研究</li><li><strong>VASP</strong>：周期性体系、固体材料、表面计算</li><li><strong>配合使用</strong>：用 Gaussian 优化分子，再放到 VASP 的周期性体系中</li></ul></div><h3>7. 学习路径</h3><div class="fc"><div class="fn2-node s">了解 Gaussian 基础</div><div class="fa"></div><div class="fn2-node p">学习输入文件格式</div><div class="fa"></div><div class="fn2-node p">掌握基本计算任务</div><div class="fa"></div><div class="fn2-node p">进阶：过渡态、IRC</div><div class="fa"></div><div class="fn2-node e">与 VASP 配合使用</div></div><h3>8. 学习内容</h3>',18)),t("div",$2,[w(c,{to:"/gaussian/install",class:"pc",style:{"--ca":"var(--blue)"}},{default:R(()=>[...s[3]||(s[3]=[t("div",{class:"pc-i"},"📦",-1),t("div",{class:"pc-t"},"安装配置",-1),t("div",{class:"pc-d"},"Gaussian 安装和环境配置",-1)])]),_:1}),w(c,{to:"/gaussian/input",class:"pc",style:{"--ca":"var(--green)"}},{default:R(()=>[...s[4]||(s[4]=[t("div",{class:"pc-i"},"📝",-1),t("div",{class:"pc-t"},"输入文件",-1),t("div",{class:"pc-d"},"Gaussian 输入文件格式详解",-1)])]),_:1}),w(c,{to:"/gaussian/tasks",class:"pc",style:{"--ca":"var(--purple)"}},{default:R(()=>[...s[5]||(s[5]=[t("div",{class:"pc-i"},"📊",-1),t("div",{class:"pc-t"},"计算任务",-1),t("div",{class:"pc-d"},"几何优化、频率、IRC 等",-1)])]),_:1}),w(c,{to:"/gaussian/output",class:"pc",style:{"--ca":"var(--accent)"}},{default:R(()=>[...s[6]||(s[6]=[t("div",{class:"pc-i"},"📋",-1),t("div",{class:"pc-t"},"输出分析",-1),t("div",{class:"pc-d"},"结果提取和可视化",-1)])]),_:1}),w(c,{to:"/gaussian/vasp-compare",class:"pc",style:{"--ca":"var(--orange)"}},{default:R(()=>[...s[7]||(s[7]=[t("div",{class:"pc-i"},"🔄",-1),t("div",{class:"pc-t"},"与 VASP 对比",-1),t("div",{class:"pc-d"},"两种软件的异同和配合",-1)])]),_:1})])])}const G2=Q(M2,[["render",B2]]),L2={name:"GaussianInstallView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},U2={class:"sec active"},K2={class:"bread"},W2={class:"cb"},H2={class:"ch"},j2={class:"cb"},z2={class:"ch"},_2={class:"cb"},Z2={class:"ch"},Y2={class:"cb"},X2={class:"ch"},J2={class:"cb"},Q2={class:"ch"},sg={class:"cb"},ng={class:"ch"};function tg(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",U2,[t("div",K2,[w(c,{to:"/"},{default:R(()=>[...s[6]||(s[6]=[v("首页",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),w(c,{to:"/gaussian"},{default:R(()=>[...s[7]||(s[7]=[v("Gaussian 教程",-1)])]),_:1}),s[9]||(s[9]=v("/ ",-1)),s[10]||(s[10]=t("span",null,"安装配置",-1))]),s[26]||(s[26]=m('<h2>Gaussian 安装与配置</h2><p>本教程介绍 Gaussian 16 的安装和基本配置方法。</p><h3>1. 系统要求</h3><table class="tb"><thead><tr><th>配置</th><th>最低要求</th><th>推荐配置</th></tr></thead><tbody><tr><td><strong>操作系统</strong></td><td>Linux, Windows, macOS</td><td>Linux (推荐)</td></tr><tr><td><strong>处理器</strong></td><td>多核 CPU</td><td>16 核以上</td></tr><tr><td><strong>内存</strong></td><td>8 GB</td><td>64 GB 或更高</td></tr><tr><td><strong>硬盘</strong></td><td>10 GB</td><td>SSD 100 GB+</td></tr></tbody></table><h3>2. Linux 安装步骤</h3><h4>步骤 1：创建安装目录</h4>',6)),t("div",W2,[t("div",H2,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[12]||(s[12]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 创建 Gaussian 安装目录"),v(`
`),t("span",{class:"fn2"},"sudo mkdir"),v(` -p /opt/gaussian
`),t("span",{class:"fn2"},"sudo chown"),v(" $USER:$USER /opt/gaussian")])],-1))]),s[27]||(s[27]=t("h4",null,"步骤 2：解压安装包",-1)),t("div",j2,[t("div",z2,[s[13]||(s[13]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="cm"># 解压安装包</span>
<span class="fn2">cd</span> /opt/gaussian
<span class="fn2">tar</span> -xzf gaussian16.tar.gz

<span class="cm"># 设置权限</span>
<span class="fn2">chmod</span> -R 755 g16</code></pre>`,1))]),s[28]||(s[28]=t("h4",null,"步骤 3：配置环境变量",-1)),t("div",_2,[t("div",Z2,[s[15]||(s[15]=t("span",{class:"la"},"bash",-1)),s[16]||(s[16]=t("span",{class:"fn"},"~/.bashrc",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=m(`<pre><code><span class="cm"># Gaussian 环境变量</span>
<span class="kw">export</span> g16root=/opt/gaussian
<span class="kw">export</span> GAUSS_SCRDIR=/tmp/gaussian
<span class="kw">source</span> $g16root/g16/bsd/g16.profile

<span class="cm"># 创建临时目录</span>
<span class="fn2">mkdir</span> -p $GAUSS_SCRDIR</code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"步骤 4：使环境变量生效",-1)),t("div",Y2,[t("div",X2,[s[18]||(s[18]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 重新加载配置"),v(`
`),t("span",{class:"fn2"},"source"),v(` ~/.bashrc

`),t("span",{class:"cm"},"# 验证安装"),v(`
`),t("span",{class:"fn2"},"g16"),v(" < /dev/null")])],-1))]),s[30]||(s[30]=m(`<h3>3. Windows 安装</h3><h4>步骤 1：运行安装程序</h4><ul><li>双击 Gaussian 16 安装程序</li><li>选择安装目录（建议：<code>C:\\G16W</code>）</li><li>完成安装</li></ul><h4>步骤 2：配置环境</h4><div class="cb"><div class="ch"><span class="la">环境变量</span></div><pre><code><span class="cm"># 添加到系统 PATH</span>
C:\\G16W

<span class="cm"># 设置临时目录</span>
GAUSS_SCRDIR = C:\\Temp\\Gaussian</code></pre></div><h3>4. 集群配置</h3><h4>提交脚本模板</h4>`,7)),t("div",J2,[t("div",Q2,[s[20]||(s[20]=t("span",{class:"la"},"bash",-1)),s[21]||(s[21]=t("span",{class:"fn"},"submit.sh",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[22]||(s[22]=m(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="fn2">rm</span> -rf $GAUSS_SCRDIR/*</code></pre>`,1))]),s[31]||(s[31]=t("h3",null,"5. 多核并行设置",-1)),t("div",sg,[t("div",ng,[s[23]||(s[23]=t("span",{class:"la"},"input.gjf",-1)),s[24]||(s[24]=t("span",{class:"fn"},"并行计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=16</span>              <span class="cm">; 使用 16 个核心</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Molecule optimization</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[32]||(s[32]=m('<h3>6. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>原因</th><th>解决方案</th></tr></thead><tbody><tr><td>找不到 g16 命令</td><td>环境变量未设置</td><td>检查 ~/.bashrc 配置</td></tr><tr><td>内存不足</td><td>%mem 设置过大</td><td>减小 %mem 值</td></tr><tr><td>磁盘空间不足</td><td>临时文件过多</td><td>清理 GAUSS_SCRDIR</td></tr><tr><td>段错误</td><td>内存或栈溢出</td><td>增加 ulimit -s unlimited</td></tr></tbody></table><div class="ib tip"><strong>提示：</strong>在 ~/.bashrc 中添加 <code class="ic">ulimit -s unlimited</code> 可以避免栈溢出问题。</div>',3))])}const ag=Q(L2,[["render",tg]]),lg={name:"GaussianInputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},eg={class:"sec active"},pg={class:"bread"},og={class:"cb"},cg={class:"ch"},dg={class:"cb"},rg={class:"ch"},ig={class:"cb"},ug={class:"ch"},fg={class:"cb"},mg={class:"ch"},bg={class:"cb"},vg={class:"ch"};function gg(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",eg,[t("div",pg,[w(c,{to:"/"},{default:R(()=>[...s[5]||(s[5]=[v("首页",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),w(c,{to:"/gaussian"},{default:R(()=>[...s[6]||(s[6]=[v("Gaussian 教程",-1)])]),_:1}),s[8]||(s[8]=v("/ ",-1)),s[9]||(s[9]=t("span",null,"输入文件",-1))]),s[21]||(s[21]=t("h2",null,"Gaussian 输入文件详解",-1)),s[22]||(s[22]=t("p",null,"Gaussian 输入文件（.gjf 或 .com）包含计算的所有设置信息。",-1)),s[23]||(s[23]=t("h3",null,"1. 输入文件结构",-1)),t("div",og,[t("div",cg,[s[10]||(s[10]=t("span",{class:"la"},"input.gjf",-1)),s[11]||(s[11]=t("span",{class:"fn"},"完整结构",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[12]||(s[12]=m(`<pre><code><span class="cm">%chk=molecule.chk</span>           <span class="cm">; 检查点文件</span>
<span class="cm">%mem=4GB</span>                    <span class="cm">; 内存限制</span>
<span class="cm">%nproc=8</span>                    <span class="cm">; 并行核心数</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>       <span class="cm">; 路由段</span>

<span class="vr">Water molecule optimization</span> <span class="cm">; 标题段</span>

<span class="nu">0 1</span>                          <span class="cm">; 电荷和自旋</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>    <span class="cm">; 厐子坐标</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span>

                              <span class="cm">; 空行结束</span></code></pre>`,1))]),s[24]||(s[24]=m(`<h3>2. 路由段详解</h3><p>路由段以 <code class="ic">#</code> 开头，指定计算方法和任务类型。</p><h4>基本格式</h4><div class="cb"><div class="ch"><span class="la">格式</span></div><pre><code><span class="cm"># [选项] 方法/基组 [任务关键词] [其他选项]</span>

<span class="cm"># 示例</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>
<span class="cm">#p M062X/def2TZVP td=(nstates=10)</span></code></pre></div><h4>常用选项前缀</h4><table class="tb"><thead><tr><th>前缀</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td><code class="ic">#</code></td><td>默认输出</td><td>简洁输出</td></tr><tr><td><code class="ic">#p</code></td><td>详细输出</td><td>推荐使用</td></tr><tr><td><code class="ic">#t</code></td><td>测试模式</td><td>不执行计算</td></tr></tbody></table><h4>常用任务关键词</h4><table class="tb"><thead><tr><th>关键词</th><th>功能</th><th>说明</th></tr></thead><tbody><tr><td><code class="ic">opt</code></td><td>几何优化</td><td>寻找能量最低构型</td></tr><tr><td><code class="ic">freq</code></td><td>频率计算</td><td>振动频率和热力学量</td></tr><tr><td><code class="ic">opt freq</code></td><td>优化+频率</td><td>最常用组合</td></tr><tr><td><code class="ic">sp</code></td><td>单点能</td><td>固定几何计算能量</td></tr><tr><td><code class="ic">ts</code></td><td>过渡态</td><td>搜索过渡态</td></tr><tr><td><code class="ic">irc</code></td><td>IRC 计算</td><td>反应路径跟踪</td></tr><tr><td><code class="ic">td</code></td><td>激发态</td><td>TDDFT 计算</td></tr><tr><td><code class="ic">polar</code></td><td>极化率</td><td>计算极化率张量</td></tr></tbody></table><h3>3. Link 0 命令</h3><p>以 <code class="ic">%</code> 开头的命令控制计算资源。</p><table class="tb"><thead><tr><th>命令</th><th>功能</th><th>示例</th></tr></thead><tbody><tr><td><code class="ic">%chk</code></td><td>检查点文件</td><td>%chk=molecule.chk</td></tr><tr><td><code class="ic">%mem</code></td><td>内存限制</td><td>%mem=32GB</td></tr><tr><td><code class="ic">%nproc</code></td><td>并行核心数</td><td>%nproc=16</td></tr><tr><td><code class="ic">%cpu</code></td><td>CPU 绑定</td><td>%cpu=0-15</td></tr><tr><td><code class="ic">%scr</code></td><td>临时目录</td><td>%scr=/scratch</td></tr></tbody></table><h3>4. 坐标格式</h3><h4>笛卡尔坐标（最常用）</h4><div class="cb"><div class="ch"><span class="la">笛卡尔坐标</span></div><pre><code><span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre></div><h4>内坐标（Z-matrix）</h4><div class="cb"><div class="ch"><span class="la">Z-matrix</span></div><pre><code><span class="nu">0 1</span>
<span class="vr">O</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>
<span class="vr">H</span>  <span class="nu">1</span>  <span class="nu">0.96</span>  <span class="nu">2</span>  <span class="nu">104.5</span></code></pre></div><h3>5. 常用输入模板</h3><h4>模板 1：几何优化 + 频率</h4>`,18)),t("div",dg,[t("div",rg,[s[13]||(s[13]=t("span",{class:"la"},"opt_freq.gjf",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[14]||(s[14]=m(`<pre><code><span class="cm">%chk=molecule.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Molecule optimization and frequency</span>

<span class="nu">0 1</span>
<span class="cm">[原子坐标]</span></code></pre>`,1))]),s[25]||(s[25]=t("h4",null,"模板 2：过渡态搜索",-1)),t("div",ig,[t("div",ug,[s[15]||(s[15]=t("span",{class:"la"},"ts_search.gjf",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>`,1))]),s[26]||(s[26]=t("h4",null,"模板 3：TDDFT 激发态",-1)),t("div",fg,[t("div",mg,[s[17]||(s[17]=t("span",{class:"la"},"tddft.gjf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=m(`<pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[27]||(s[27]=t("h4",null,"模板 4：高精度单点能",-1)),t("div",bg,[t("div",vg,[s[19]||(s[19]=t("span",{class:"la"},"high_accuracy.gjf",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[20]||(s[20]=m(`<pre><code><span class="cm">%chk=ccsdt.chk</span>
<span class="cm">%mem=64GB</span>
<span class="cm">%nproc=32</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[28]||(s[28]=m(`<h3>6. 特殊设置</h3><h4>对称性限制</h4><div class="cb"><div class="ch"><span class="la">对称性</span></div><pre><code><span class="cm"># 强制 C2v 对称性</span>
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
<span class="nu">A 1 2 3 F</span>  <span class="cm">; 冻结角 1-2-3</span></code></pre></div><h3>7. 输入文件检查清单</h3><table class="tb"><thead><tr><th>项目</th><th>检查内容</th></tr></thead><tbody><tr><td>Link 0</td><td>%chk, %mem, %nproc 设置合理</td></tr><tr><td>路由段</td><td>方法/基组正确，任务关键词完整</td></tr><tr><td>标题行</td><td>非空，描述清楚</td></tr><tr><td>电荷/自旋</td><td>电荷和自旋多重度正确</td></tr><tr><td>原子坐标</td><td>原子类型正确，坐标合理</td></tr><tr><td>空行结尾</td><td>文件以空行结束</td></tr></tbody></table><div class="ib warn"><strong>常见错误：</strong><ul><li>忘记空行结尾会导致计算失败</li><li>电荷/自旋设置错误会导致收敛问题</li><li>原子坐标单位默认为 Å（非 Bohr）</li></ul></div>`,8))])}const hg=Q(lg,[["render",gg]]),yg={name:"GaussianTasksView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},kg={class:"sec active"},Cg={class:"bread"},Ag={class:"cb"},Sg={class:"ch"},wg={class:"cb"},Eg={class:"ch"},Tg={class:"cb"},Rg={class:"ch"},Og={class:"cb"},Ig={class:"ch"},Pg={class:"cb"},Ng={class:"ch"},xg={class:"cb"},qg={class:"ch"},Fg={class:"cb"},Mg={class:"ch"},Dg={class:"cb"},Vg={class:"ch"},$g={class:"cb"},Bg={class:"ch"};function Gg(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",kg,[t("div",Cg,[w(c,{to:"/"},{default:R(()=>[...s[9]||(s[9]=[v("首页",-1)])]),_:1}),s[11]||(s[11]=v("/ ",-1)),w(c,{to:"/gaussian"},{default:R(()=>[...s[10]||(s[10]=[v("Gaussian 教程",-1)])]),_:1}),s[12]||(s[12]=v("/ ",-1)),s[13]||(s[13]=t("span",null,"计算任务",-1))]),s[41]||(s[41]=t("h2",null,"Gaussian 计算任务详解",-1)),s[42]||(s[42]=t("p",null,"本节介绍 Gaussian 常用的计算任务类型和设置方法。",-1)),s[43]||(s[43]=t("h3",null,"1. 几何优化",-1)),s[44]||(s[44]=t("p",null,"寻找能量最低的分子构型。",-1)),t("div",Ag,[t("div",Sg,[s[14]||(s[14]=t("span",{class:"la"},"input.gjf",-1)),s[15]||(s[15]=t("span",{class:"fn"},"几何优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[16]||(s[16]=m(`<pre><code><span class="cm">%chk=opt.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt</span>

<span class="vr">Water optimization</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.000000   0.000000   0.117300</span>
<span class="vr">H</span>   <span class="nu">0.000000   0.757200  -0.469200</span>
<span class="vr">H</span>   <span class="nu">0.000000  -0.757200  -0.469200</span></code></pre>`,1))]),s[45]||(s[45]=m('<h4>优化选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code class="ic">opt</code></td><td>默认优化</td><td>大多数情况</td></tr><tr><td><code class="ic">opt=tight</code></td><td>严格收敛</td><td>高精度要求</td></tr><tr><td><code class="ic">opt=loose</code></td><td>宽松收敛</td><td>初始粗优化</td></tr><tr><td><code class="ic">opt=(maxstep=5)</code></td><td>最大步数</td><td>限制优化步数</td></tr><tr><td><code class="ic">opt=(Z-Matrix)</code></td><td>Z-matrix 优化</td><td>有对称性要求</td></tr></tbody></table><h3>2. 频率计算</h3><p>计算振动频率，验证优化结果并获取热力学量。</p>',4)),t("div",wg,[t("div",Eg,[s[17]||(s[17]=t("span",{class:"la"},"input.gjf",-1)),s[18]||(s[18]=t("span",{class:"fn"},"频率计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="cm">%chk=freq.chk</span>
<span class="cm">%mem=8GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) freq</span>

<span class="vr">Water frequency</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[46]||(s[46]=m('<h4>频率结果解读</h4><table class="tb"><thead><tr><th>频率范围</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td>虚频（负值）</td><td>过渡态或高阶鞍点</td><td>需要检查结构</td></tr><tr><td>0-100 cm⁻¹</td><td>低频振动</td><td>可能是虚频噪音</td></tr><tr><td>100-400 cm⁻¹</td><td>骨架振动</td><td>分子变形</td></tr><tr><td>400-1500 cm⁻¹</td><td>指纹区</td><td>官能团特征</td></tr><tr><td>1500-4000 cm⁻¹</td><td>伸缩振动</td><td>化学键振动</td></tr></tbody></table><h3>3. 过渡态搜索</h3><p>寻找反应的过渡态结构。</p>',4)),t("div",Tg,[t("div",Rg,[s[20]||(s[20]=t("span",{class:"la"},"input.gjf",-1)),s[21]||(s[21]=t("span",{class:"fn"},"过渡态搜索",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[22]||(s[22]=m(`<pre><code><span class="cm">%chk=ts.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) opt=(ts,calcfc,noeigen) freq</span>

<span class="vr">Transition state search</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态初始猜测坐标]</span></code></pre>`,1))]),s[47]||(s[47]=t("h4",null,"过渡态验证",-1)),s[48]||(s[48]=t("ul",null,[t("li",null,"必须有且仅有一个虚频"),t("li",null,"虚频对应反应坐标"),t("li",null,"需要 IRC 计算确认连接正确的反应物和产物")],-1)),s[49]||(s[49]=t("h3",null,"4. IRC 计算",-1)),s[50]||(s[50]=t("p",null,"跟踪反应路径，确认过渡态连接正确的反应物和产物。",-1)),t("div",Og,[t("div",Ig,[s[23]||(s[23]=t("span",{class:"la"},"input.gjf",-1)),s[24]||(s[24]=t("span",{class:"fn"},"IRC 正向",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm">%chk=irc.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p M062X/6-311+G(d,p) irc=(forward,calcfc)</span>

<span class="vr">IRC forward</span>

<span class="nu">0 1</span>
<span class="cm">[过渡态坐标]</span></code></pre>`,1))]),t("div",Pg,[t("div",Ng,[s[26]||(s[26]=t("span",{class:"la"},"input.gjf",-1)),s[27]||(s[27]=t("span",{class:"fn"},"IRC 反向",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[28]||(s[28]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"#p M062X/6-311+G(d,p) irc=(reverse,calcfc)")])],-1))]),s[51]||(s[51]=t("h3",null,"5. TDDFT 激发态",-1)),s[52]||(s[52]=t("p",null,"计算分子的激发态性质，用于光谱预测。",-1)),t("div",xg,[t("div",qg,[s[29]||(s[29]=t("span",{class:"la"},"input.gjf",-1)),s[30]||(s[30]=t("span",{class:"fn"},"TDDFT",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[31]||(s[31]=m(`<pre><code><span class="cm">%chk=tddft.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) td=(nstates=10)</span>

<span class="vr">TDDFT calculation</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[53]||(s[53]=m('<h4>TDDFT 选项</h4><table class="tb"><thead><tr><th>选项</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code class="ic">nstates=N</code></td><td>计算 N 个激发态</td><td>td=(nstates=10)</td></tr><tr><td><code class="ic">root=N</code></td><td>优化第 N 个激发态</td><td>td=(root=1)</td></tr><tr><td><code class="ic">triplets</code></td><td>包含三重态</td><td>td=(nstates=5,triplets)</td></tr></tbody></table><h3>6. 单点能计算</h3><p>在固定几何上计算能量。</p>',4)),t("div",Fg,[t("div",Mg,[s[32]||(s[32]=t("span",{class:"la"},"input.gjf",-1)),s[33]||(s[33]=t("span",{class:"fn"},"单点能",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[34]||(s[34]=m(`<pre><code><span class="cm">%chk=sp.chk</span>
<span class="cm">%mem=32GB</span>
<span class="cm">%nproc=16</span>
<span class="cm">#p CCSD(T)/cc-pVTZ</span>

<span class="vr">High accuracy single point</span>

<span class="nu">0 1</span>
<span class="cm">[优化后的坐标]</span></code></pre>`,1))]),s[54]||(s[54]=t("h3",null,"7. 溶剂效应",-1)),s[55]||(s[55]=t("p",null,"使用隐式溶剂模型模拟溶剂环境。",-1)),t("div",Dg,[t("div",Vg,[s[35]||(s[35]=t("span",{class:"la"},"input.gjf",-1)),s[36]||(s[36]=t("span",{class:"fn"},"PCM 溶剂",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[37]||(s[37]=m(`<pre><code><span class="cm">%chk=solvent.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) opt scrf=(pcm,solvent=water)</span>

<span class="vr">Optimization in water</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span></code></pre>`,1))]),s[56]||(s[56]=m('<h4>常用溶剂</h4><table class="tb"><thead><tr><th>溶剂</th><th>关键词</th><th>介电常数</th></tr></thead><tbody><tr><td>水</td><td><code class="ic">solvent=water</code></td><td>78.4</td></tr><tr><td>甲醇</td><td><code class="ic">solvent=methanol</code></td><td>32.7</td></tr><tr><td>乙醇</td><td><code class="ic">solvent=ethanol</code></td><td>24.5</td></tr><tr><td>DMSO</td><td><code class="ic">solvent=dmso</code></td><td>46.7</td></tr><tr><td>氯仿</td><td><code class="ic">solvent=chloroform</code></td><td>4.8</td></tr><tr><td>甲苯</td><td><code class="ic">solvent=toluene</code></td><td>2.4</td></tr></tbody></table><h3>8. 自然键轨道（NBO）分析</h3><p>分析化学键和电子结构。</p>',4)),t("div",$g,[t("div",Bg,[s[38]||(s[38]=t("span",{class:"la"},"input.gjf",-1)),s[39]||(s[39]=t("span",{class:"fn"},"NBO 分析",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[40]||(s[40]=m(`<pre><code><span class="cm">%chk=nbo.chk</span>
<span class="cm">%mem=16GB</span>
<span class="cm">%nproc=8</span>
<span class="cm">#p B3LYP/6-31+G(d,p) pop=nboread</span>

<span class="vr">NBO analysis</span>

<span class="nu">0 1</span>
<span class="cm">[分子坐标]</span>

<span class="cm">$nbo</span>
<span class="cm">bndidx $end</span></code></pre>`,1))]),s[57]||(s[57]=m('<h3>9. 常见计算组合</h3><table class="tb"><thead><tr><th>目的</th><th>推荐组合</th></tr></thead><tbody><tr><td>常规优化</td><td><code class="ic">B3LYP/6-31G(d) opt freq</code></td></tr><tr><td>精确优化</td><td><code class="ic">M062X/6-311+G(d,p) opt freq</code></td></tr><tr><td>弱相互作用</td><td><code class="ic">ωB97X-D/def2-TZVP opt freq</code></td></tr><tr><td>过渡态</td><td><code class="ic">M062X/6-311+G(d,p) opt=(ts,calcfc) freq</code></td></tr><tr><td>高精度能量</td><td><code class="ic">CCSD(T)/cc-pVTZ</code></td></tr><tr><td>UV-Vis 光谱</td><td><code class="ic">B3LYP/6-31+G(d,p) td=(nstates=10)</code></td></tr></tbody></table>',2))])}const Lg=Q(yg,[["render",Gg]]),Ug={name:"GaussianOutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Kg={class:"sec active"},Wg={class:"bread"},Hg={class:"cb"},jg={class:"ch"},zg={class:"cb"},_g={class:"ch"},Zg={class:"cb"},Yg={class:"ch"},Xg={class:"cb"},Jg={class:"ch"},Qg={class:"cb"},sh={class:"ch"},nh={class:"cb"},th={class:"ch"},ah={class:"cb"},lh={class:"ch"},eh={class:"cb"},ph={class:"ch"},oh={class:"cb"},ch={class:"ch"};function dh(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",Kg,[t("div",Wg,[w(c,{to:"/"},{default:R(()=>[...s[9]||(s[9]=[v("首页",-1)])]),_:1}),s[11]||(s[11]=v("/ ",-1)),w(c,{to:"/gaussian"},{default:R(()=>[...s[10]||(s[10]=[v("Gaussian 教程",-1)])]),_:1}),s[12]||(s[12]=v("/ ",-1)),s[13]||(s[13]=t("span",null,"输出分析",-1))]),s[33]||(s[33]=m(`<h2>Gaussian 输出分析</h2><p>本节介绍如何分析 Gaussian 输出文件（.log）并提取关键信息。</p><h3>1. 输出文件结构</h3><div class="cb"><div class="ch"><span class="la">output.log</span><span class="fn">文件结构</span></div><pre><code><span class="cm">========================================</span>
<span class="cm">Gaussian 16:  xxx-W64RevC.01</span>
<span class="cm">========================================</span>

<span class="cm">[1] 输入回显</span>
<span class="cm">[2] 初始几何</span>
<span class="cm">[3] 迭代计算（SCF）</span>
<span class="cm">[4] 优化步骤</span>
<span class="cm">[5] 频率计算（如果设置）</span>
<span class="cm">[6] 最终结果</span>
<span class="cm">[7] 计算时间</span></code></pre></div><h3>2. 检查计算状态</h3>`,5)),t("div",Hg,[t("div",jg,[s[14]||(s[14]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[15]||(s[15]=m(`<pre><code><span class="cm"># 检查是否正常结束</span>
<span class="fn2">grep</span> <span class="st">&quot;Normal termination&quot;</span> output.log

<span class="cm"># 检查错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error&quot;</span> output.log

<span class="cm"># 查看最后几行</span>
<span class="fn2">tail</span> -20 output.log</code></pre>`,1))]),s[34]||(s[34]=m('<table class="tb"><thead><tr><th>状态</th><th>输出信息</th><th>说明</th></tr></thead><tbody><tr><td>正常结束</td><td><code>Normal termination</code></td><td>计算成功</td></tr><tr><td>SCF 不收敛</td><td><code>SCF has not converged</code></td><td>需要调整设置</td></tr><tr><td>优化不收敛</td><td><code>Optimization did not converge</code></td><td>增加优化步数</td></tr><tr><td>内存不足</td><td><code>Insufficient memory</code></td><td>增加 %mem</td></tr></tbody></table><h3>3. 提取总能量</h3>',2)),t("div",zg,[t("div",_g,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[17]||(s[17]=m(`<pre><code><span class="cm"># 提取 SCF 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1

<span class="cm"># 提取能量数值</span>
<span class="fn2">grep</span> <span class="st">&quot;SCF Done&quot;</span> output.log | <span class="fn2">tail</span> -1 | <span class="fn2">awk</span> <span class="st">&#39;{print $5}&#39;</span>

<span class="cm"># 提取 MP2 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;EUMP2&quot;</span> output.log

<span class="cm"># 提取 CCSD(T) 能量</span>
<span class="fn2">grep</span> <span class="st">&quot;CCSD(T)=&quot;</span> output.log</code></pre>`,1))]),s[35]||(s[35]=t("h3",null,"4. 提取优化几何",-1)),t("div",Zg,[t("div",Yg,[s[18]||(s[18]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[19]||(s[19]=m(`<pre><code><span class="cm"># 提取最终几何（笛卡尔坐标）</span>
<span class="fn2">grep</span> -A <span class="nu">100</span> <span class="st">&quot;Standard orientation&quot;</span> output.log | <span class="fn2">tail</span> -n +5 | <span class="fn2">head</span> -n -3

<span class="cm"># 使用 cclib 提取（Python）</span>
<span class="kw">import</span> cclib
data = cclib.io.ccopen(<span class="st">&quot;output.log&quot;</span>).parse()
<span class="fn2">print</span>(data.atomcoords[-<span class="nu">1</span>])  <span class="cm"># 最终坐标</span></code></pre>`,1))]),s[36]||(s[36]=t("h3",null,"5. 提取频率信息",-1)),t("div",Xg,[t("div",Jg,[s[20]||(s[20]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[21]||(s[21]=m(`<pre><code><span class="cm"># 提取频率</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log

<span class="cm"># 提取红外强度</span>
<span class="fn2">grep</span> <span class="st">&quot;IR Inten&quot;</span> output.log

<span class="cm"># 检查虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;Frequencies&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{if ($2 &lt; 0) print &quot;虚频:&quot;, $2}&#39;</span></code></pre>`,1))]),s[37]||(s[37]=m('<h4>频率结果解读</h4><table class="tb"><thead><tr><th>信息</th><th>含义</th><th>单位</th></tr></thead><tbody><tr><td>Frequencies</td><td>振动频率</td><td>cm⁻¹</td></tr><tr><td>IR Inten</td><td>红外强度</td><td>KM/mol</td></tr><tr><td>Raman Activ</td><td>拉曼活性</td><td>Å⁴/amu</td></tr><tr><td>Red. masses</td><td>约化质量</td><td>amu</td></tr><tr><td>Frc consts</td><td>力常数</td><td>mdyn/Å</td></tr></tbody></table><h3>6. 提取热力学量</h3>',3)),t("div",Qg,[t("div",sh,[s[22]||(s[22]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[23]||(s[23]=m(`<pre><code><span class="cm"># 提取热力学数据</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Thermochemistry&quot;</span> output.log

<span class="cm"># 提取零点能</span>
<span class="fn2">grep</span> <span class="st">&quot;Zero-point correction&quot;</span> output.log

<span class="cm"># 提取 Gibbs 自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;Sum of electronic and thermal Free Energies&quot;</span> output.log</code></pre>`,1))]),s[38]||(s[38]=m('<h4>热力学量说明</h4><table class="tb"><thead><tr><th>术语</th><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>零点能</td><td>ZPE</td><td>振动基态能量</td></tr><tr><td>热校正</td><td>E(Thermal)</td><td>热能校正值</td></tr><tr><td>焓</td><td>H</td><td>电子能 + 热校正 + PV</td></tr><tr><td>吉布斯自由能</td><td>G</td><td>H - TS</td></tr></tbody></table><h3>7. 提取偶极矩和电荷</h3>',3)),t("div",nh,[t("div",th,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[25]||(s[25]=m(`<pre><code><span class="cm"># 提取偶极矩</span>
<span class="fn2">grep</span> -A <span class="nu">3</span> <span class="st">&quot;Dipole moment&quot;</span> output.log

<span class="cm"># 提取 Mulliken 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Mulliken charges&quot;</span> output.log

<span class="cm"># 提取 NBO 电荷</span>
<span class="fn2">grep</span> -A <span class="nu">20</span> <span class="st">&quot;Summary of Natural Population&quot;</span> output.log</code></pre>`,1))]),s[39]||(s[39]=t("h3",null,"8. 提取 TDDFT 结果",-1)),t("div",ah,[t("div",lh,[s[26]||(s[26]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[27]||(s[27]=m(`<pre><code><span class="cm"># 提取激发能</span>
<span class="fn2">grep</span> -A <span class="nu">50</span> <span class="st">&quot;Excitation energies&quot;</span> output.log

<span class="cm"># 提取波长</span>
<span class="fn2">grep</span> <span class="st">&quot;Excited State&quot;</span> output.log | <span class="fn2">awk</span> <span class="st">&#39;{print $7}&#39;</span>

<span class="cm"># 提取振子强度</span>
<span class="fn2">grep</span> <span class="st">&quot;f=&quot;</span> output.log</code></pre>`,1))]),s[40]||(s[40]=t("h3",null,"9. Python 分析脚本",-1)),t("div",eh,[t("div",ph,[s[28]||(s[28]=t("span",{class:"la"},"python",-1)),s[29]||(s[29]=t("span",{class:"fn"},"analyze_gaussian.py",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[30]||(s[30]=m(`<pre><code><span class="kw">import</span> re

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
<span class="fn2">print</span>(<span class="st">f&quot;频率: {get_frequencies(content)}&quot;</span>)</code></pre>`,1))]),s[41]||(s[41]=t("h3",null,"10. 常用 grep 命令速查",-1)),t("div",oh,[t("div",ch,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[32]||(s[32]=m(`<pre><code><span class="cm"># 计算状态</span>
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
<span class="fn2">grep</span> <span class="st">&quot;Job cpu time&quot;</span> output.log</code></pre>`,1))]),s[42]||(s[42]=t("div",{class:"ib tip"},[t("strong",null,"提示："),v("使用 cclib、Multiwfn 或 GaussView 等工具可以更方便地分析输出文件。")],-1))])}const rh=Q(Ug,[["render",dh]]),ih={name:"GaussianVaspCompareView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},uh={class:"sec active"},fh={class:"bread"},mh={class:"cb"},bh={class:"ch"},vh={class:"cb"},gh={class:"ch"},hh={class:"cb"},yh={class:"ch"},kh={class:"cb"},Ch={class:"ch"};function Ah(n,s,a,p,o,l){const c=J("router-link");return V(),$("div",uh,[t("div",fh,[w(c,{to:"/"},{default:R(()=>[...s[4]||(s[4]=[v("首页",-1)])]),_:1}),s[6]||(s[6]=v("/ ",-1)),w(c,{to:"/gaussian"},{default:R(()=>[...s[5]||(s[5]=[v("Gaussian 教程",-1)])]),_:1}),s[7]||(s[7]=v("/ ",-1)),s[8]||(s[8]=t("span",null,"与 VASP 对比",-1))]),s[19]||(s[19]=m('<h2>Gaussian 与 VASP 对比</h2><p>了解两种软件的特点和适用场景，选择合适的计算工具。</p><h3>1. 基本对比</h3><table class="tb"><thead><tr><th>特性</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>计算体系</strong></td><td>分子、团簇</td><td>周期性体系</td></tr><tr><td><strong>基组类型</strong></td><td>高斯基组</td><td>平面波基组</td></tr><tr><td><strong>边界条件</strong></td><td>开放边界</td><td>周期性边界</td></tr><tr><td><strong>赝势</strong></td><td>不需要</td><td>PAW 赝势</td></tr><tr><td><strong>K 点采样</strong></td><td>不需要</td><td>需要</td></tr><tr><td><strong>适用体系大小</strong></td><td>小到中等</td><td>中等到大</td></tr></tbody></table><h3>2. 应用场景对比</h3><table class="tb"><thead><tr><th>应用场景</th><th>推荐软件</th><th>原因</th></tr></thead><tbody><tr><td>有机分子优化</td><td>Gaussian</td><td>分子专用，效率高</td></tr><tr><td>反应机理研究</td><td>Gaussian</td><td>过渡态搜索方便</td></tr><tr><td>晶体结构优化</td><td>VASP</td><td>周期性体系</td></tr><tr><td>表面计算</td><td>VASP</td><td>slab 模型</td></tr><tr><td>能带计算</td><td>VASP</td><td>周期性体系优势</td></tr><tr><td>高精度分子能量</td><td>Gaussian</td><td>CCSD(T) 等方法</td></tr><tr><td>大体系计算</td><td>VASP</td><td>平面波效率高</td></tr></tbody></table><h3>3. 计算方法对比</h3><table class="tb"><thead><tr><th>方法</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td><strong>DFT</strong></td><td>B3LYP, PBE0, M06 等</td><td>PBE, HSE06</td></tr><tr><td><strong>HF</strong></td><td>支持</td><td>不常用</td></tr><tr><td><strong>MP2</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>CCSD(T)</strong></td><td>支持</td><td>不支持</td></tr><tr><td><strong>TDDFT</strong></td><td>支持</td><td>支持（GW/BSE）</td></tr><tr><td><strong>杂化泛函</strong></td><td>丰富</td><td>HSE06, PBE0</td></tr></tbody></table><h3>4. 输入文件对比</h3><h4>Gaussian 输入</h4>',10)),t("div",mh,[t("div",bh,[s[9]||(s[9]=t("span",{class:"la"},"input.gjf",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[10]||(s[10]=m(`<pre><code><span class="cm">%chk=water.chk</span>
<span class="cm">%mem=4GB</span>
<span class="cm">%nproc=4</span>
<span class="cm">#p B3LYP/6-31G(d) opt freq</span>

<span class="vr">Water molecule</span>

<span class="nu">0 1</span>
<span class="vr">O</span>   <span class="nu">0.0  0.0  0.117</span>
<span class="vr">H</span>   <span class="nu">0.0  0.757 -0.469</span>
<span class="vr">H</span>   <span class="nu">0.0 -0.757 -0.469</span></code></pre>`,1))]),s[20]||(s[20]=t("h4",null,"VASP 输入",-1)),t("div",vh,[t("div",gh,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[12]||(s[12]=m(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">H2O</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>
<span class="kw">ISIF</span>     = <span class="nu">2</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=m('<h3>5. 配合使用策略</h3><div class="db"><div class="db-t">典型配合使用场景</div><h4>场景 1：分子吸附到表面</h4><ol><li><strong>Gaussian</strong>：优化分子构型</li><li><strong>VASP</strong>：构建表面模型，放置分子，计算吸附能</li></ol><h4>场景 2：反应机理研究</h4><ol><li><strong>Gaussian</strong>：搜索过渡态，确认反应路径</li><li><strong>VASP</strong>：计算周期性体系中的反应</li></ol><h4>场景 3：材料中的分子</h4><ol><li><strong>Gaussian</strong>：研究孤立分子性质</li><li><strong>VASP</strong>：计算分子在材料中的行为</li></ol></div><h3>6. 文件格式转换</h3><h4>Gaussian → VASP</h4>',4)),t("div",hh,[t("div",yh,[s[13]||(s[13]=t("span",{class:"la"},"python",-1)),s[14]||(s[14]=t("span",{class:"fn"},"gjf2poscar.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[15]||(s[15]=m(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

<span class="cm"># 读取 Gaussian 输出</span>
atoms = read(<span class="st">&#39;output.log&#39;</span>)

<span class="cm"># 转换为 POSCAR</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)

<span class="cm"># 对于周期性体系，需要添加晶胞</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np
atoms.cell = np.diag([<span class="nu">15</span>, <span class="nu">15</span>, <span class="nu">15</span>])  <span class="cm"># 15Å 立方盒子</span>
atoms.pbc = <span class="kw">True</span>
write(<span class="st">&#39;POSCAR&#39;</span>, atoms)</code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"VASP → Gaussian",-1)),t("div",kh,[t("div",Ch,[s[16]||(s[16]=t("span",{class:"la"},"python",-1)),s[17]||(s[17]=t("span",{class:"fn"},"poscar2gjf.py",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...e)=>l.copy&&l.copy(...e))},"复制")]),s[18]||(s[18]=m(`<pre><code><span class="kw">from</span> ase.io <span class="kw">import</span> read, write

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
    f.write(<span class="st">&#39;\\n&#39;</span>)</code></pre>`,1))]),s[23]||(s[23]=m('<h3>7. 计算成本对比</h3><table class="tb"><thead><tr><th>体系大小</th><th>Gaussian</th><th>VASP</th></tr></thead><tbody><tr><td>小分子（&lt; 50 原子）</td><td>✅ 快</td><td>❌ 慢（真空计算）</td></tr><tr><td>中等分子（50-200 原子）</td><td>⚠️ 中等</td><td>⚠️ 中等</td></tr><tr><td>大体系（&gt; 200 原子）</td><td>❌ 慢</td><td>✅ 快</td></tr><tr><td>周期性体系</td><td>❌ 不适合</td><td>✅ 适合</td></tr></tbody></table><h3>8. 选择建议</h3><div class="ib tip"><strong>选择原则：</strong><ul><li><strong>分子体系</strong>：优先使用 Gaussian</li><li><strong>周期性体系</strong>：使用 VASP</li><li><strong>高精度基准</strong>：使用 Gaussian (CCSD(T))</li><li><strong>大体系</strong>：使用 VASP</li><li><strong>反应机理</strong>：使用 Gaussian（过渡态搜索）</li><li><strong>能带/态密度</strong>：使用 VASP</li></ul></div><h3>9. 常见问题</h3><table class="tb"><thead><tr><th>问题</th><th>解答</th></tr></thead><tbody><tr><td>如何选择泛函？</td><td>Gaussian 用 B3LYP/M06，VASP 用 PBE/HSE06</td></tr><tr><td>能量如何比较？</td><td>两种软件的能量不能直接比较</td></tr><tr><td>如何验证结果？</td><td>与实验值对比，或用更高级方法验证</td></tr><tr><td>可以联合使用吗？</td><td>可以，分别用于不同目的</td></tr></tbody></table>',6))])}const Sh=Q(ih,[["render",Ah]]),wh=[{path:"/",name:"home",component:Pi},{path:"/theory",name:"theory",component:Li},{path:"/input",name:"input",component:Yu},{path:"/tasks",name:"tasks",component:Pf},{path:"/output",name:"output",component:Qf},{path:"/errors",name:"errors",component:u1},{path:"/tools",name:"tools",component:J1},{path:"/tools/calculator",name:"calculator",component:$0},{path:"/surface",name:"surface",component:X0},{path:"/defect",name:"defect",component:cm},{path:"/phonon",name:"phonon",component:Em},{path:"/convergence",name:"convergence",component:Dm},{path:"/cheatsheet",name:"cheatsheet",component:Zm},{path:"/thermoelectric",name:"thermoelectric",component:F2},{path:"/gaussian",name:"gaussian",component:G2},{path:"/gaussian/install",name:"gaussian-install",component:ag},{path:"/gaussian/input",name:"gaussian-input",component:hg},{path:"/gaussian/tasks",name:"gaussian-tasks",component:Lg},{path:"/gaussian/output",name:"gaussian-output",component:rh},{path:"/gaussian/vasp-compare",name:"gaussian-vasp-compare",component:Sh},{path:"/errors/scf",name:"errors-scf",component:Sb},{path:"/errors/ion",name:"errors-ion",component:jb},{path:"/errors/memory",name:"errors-memory",component:iv},{path:"/errors/files",name:"errors-files",component:Fv},{path:"/errors/output",name:"errors-output",component:o2}],Eh=di({history:Lr(),routes:wh}),yp=Hc(ar);yp.use(Eh);yp.mount("#app");
