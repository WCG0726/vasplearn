(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))e(p);new MutationObserver(p=>{for(const l of p)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function a(p){const l={};return p.integrity&&(l.integrity=p.integrity),p.referrerPolicy&&(l.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?l.credentials="include":p.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(p){if(p.ep)return;p.ep=!0;const l=a(p);fetch(p.href,l)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xa(n){const s=Object.create(null);for(const a of n.split(","))s[a]=1;return a=>a in s}const ps={},Kn=[],nn=()=>{},Jl=()=>!1,Gt=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qa=n=>n.startsWith("onUpdate:"),hs=Object.assign,Fa=(n,s)=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)},kp=Object.prototype.hasOwnProperty,ns=(n,s)=>kp.call(n,s),_=Array.isArray,Gn=n=>yt(n)==="[object Map]",_t=n=>yt(n)==="[object Set]",sl=n=>yt(n)==="[object Date]",j=n=>typeof n=="function",fs=n=>typeof n=="string",tn=n=>typeof n=="symbol",as=n=>n!==null&&typeof n=="object",Ql=n=>(as(n)||j(n))&&j(n.then)&&j(n.catch),se=Object.prototype.toString,yt=n=>se.call(n),Cp=n=>yt(n).slice(8,-1),ne=n=>yt(n)==="[object Object]",Ma=n=>fs(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,et=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wt=n=>{const s=Object.create(null);return a=>s[a]||(s[a]=n(a))},Ap=/-\w/g,Rs=Wt(n=>n.replace(Ap,s=>s.slice(1).toUpperCase())),Ep=/\B([A-Z])/g,Sn=Wt(n=>n.replace(Ep,"-$1").toLowerCase()),Ht=Wt(n=>n.charAt(0).toUpperCase()+n.slice(1)),aa=Wt(n=>n?`on${Ht(n)}`:""),sn=(n,s)=>!Object.is(n,s),Rt=(n,...s)=>{for(let a=0;a<n.length;a++)n[a](...s)},te=(n,s,a,e=!1)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,writable:e,value:a})},jt=n=>{const s=parseFloat(n);return isNaN(s)?n:s};let nl;const zt=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zn(n){if(_(n)){const s={};for(let a=0;a<n.length;a++){const e=n[a],p=fs(e)?Rp(e):zn(e);if(p)for(const l in p)s[l]=p[l]}return s}else if(fs(n)||as(n))return n}const wp=/;(?![^(]*\))/g,Sp=/:([^]+)/,Tp=/\/\*[^]*?\*\//g;function Rp(n){const s={};return n.replace(Tp,"").split(wp).forEach(a=>{if(a){const e=a.split(Sp);e.length>1&&(s[e[0].trim()]=e[1].trim())}}),s}function X(n){let s="";if(fs(n))s=n;else if(_(n))for(let a=0;a<n.length;a++){const e=X(n[a]);e&&(s+=e+" ")}else if(as(n))for(const a in n)n[a]&&(s+=a+" ");return s.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ip=xa(Op);function ae(n){return!!n||n===""}function Np(n,s){if(n.length!==s.length)return!1;let a=!0;for(let e=0;a&&e<n.length;e++)a=kt(n[e],s[e]);return a}function kt(n,s){if(n===s)return!0;let a=sl(n),e=sl(s);if(a||e)return a&&e?n.getTime()===s.getTime():!1;if(a=tn(n),e=tn(s),a||e)return n===s;if(a=_(n),e=_(s),a||e)return a&&e?Np(n,s):!1;if(a=as(n),e=as(s),a||e){if(!a||!e)return!1;const p=Object.keys(n).length,l=Object.keys(s).length;if(p!==l)return!1;for(const c in n){const o=n.hasOwnProperty(c),r=s.hasOwnProperty(c);if(o&&!r||!o&&r||!kt(n[c],s[c]))return!1}}return String(n)===String(s)}function Pp(n,s){return n.findIndex(a=>kt(a,s))}const le=n=>!!(n&&n.__v_isRef===!0),z=n=>fs(n)?n:n==null?"":_(n)||as(n)&&(n.toString===se||!j(n.toString))?le(n)?z(n.value):JSON.stringify(n,ee,2):String(n),ee=(n,s)=>le(s)?ee(n,s.value):Gn(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((a,[e,p],l)=>(a[la(e,l)+" =>"]=p,a),{})}:_t(s)?{[`Set(${s.size})`]:[...s.values()].map(a=>la(a))}:tn(s)?la(s):as(s)&&!_(s)&&!ne(s)?String(s):s,la=(n,s="")=>{var a;return tn(n)?`Symbol(${(a=n.description)!=null?a:s})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xs;class xp{constructor(s=!1){this.detached=s,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xs,!s&&xs&&(this.index=(xs.scopes||(xs.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].pause();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let s,a;if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].resume();for(s=0,a=this.effects.length;s<a;s++)this.effects[s].resume()}}run(s){if(this._active){const a=xs;try{return xs=this,s()}finally{xs=a}}}on(){++this._on===1&&(this.prevScope=xs,xs=this)}off(){this._on>0&&--this._on===0&&(xs=this.prevScope,this.prevScope=void 0)}stop(s){if(this._active){this._active=!1;let a,e;for(a=0,e=this.effects.length;a<e;a++)this.effects[a].stop();for(this.effects.length=0,a=0,e=this.cleanups.length;a<e;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,e=this.scopes.length;a<e;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!s){const p=this.parent.scopes.pop();p&&p!==this&&(this.parent.scopes[this.index]=p,p.index=this.index)}this.parent=void 0}}}function qp(){return xs}let rs;const ea=new WeakSet;class pe{constructor(s){this.fn=s,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xs&&xs.active&&xs.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ce(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tl(this),re(this);const s=rs,a=$s;rs=this,$s=!0;try{return this.fn()}finally{ie(this),rs=s,$s=a,this.flags&=-3}}stop(){if(this.flags&1){for(let s=this.deps;s;s=s.nextDep)Ua(s);this.deps=this.depsTail=void 0,tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let oe=0,pt,ot;function ce(n,s=!1){if(n.flags|=8,s){n.next=ot,ot=n;return}n.next=pt,pt=n}function Da(){oe++}function Va(){if(--oe>0)return;if(ot){let s=ot;for(ot=void 0;s;){const a=s.next;s.next=void 0,s.flags&=-9,s=a}}let n;for(;pt;){let s=pt;for(pt=void 0;s;){const a=s.next;if(s.next=void 0,s.flags&=-9,s.flags&1)try{s.trigger()}catch(e){n||(n=e)}s=a}}if(n)throw n}function re(n){for(let s=n.deps;s;s=s.nextDep)s.version=-1,s.prevActiveLink=s.dep.activeLink,s.dep.activeLink=s}function ie(n){let s,a=n.depsTail,e=a;for(;e;){const p=e.prevDep;e.version===-1?(e===a&&(a=p),Ua(e),Fp(e)):s=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=p}n.deps=s,n.depsTail=a}function ga(n){for(let s=n.deps;s;s=s.nextDep)if(s.dep.version!==s.version||s.dep.computed&&(de(s.dep.computed)||s.dep.version!==s.version))return!0;return!!n._dirty}function de(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ft)||(n.globalVersion=ft,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ga(n))))return;n.flags|=2;const s=n.dep,a=rs,e=$s;rs=n,$s=!0;try{re(n);const p=n.fn(n._value);(s.version===0||sn(p,n._value))&&(n.flags|=128,n._value=p,s.version++)}catch(p){throw s.version++,p}finally{rs=a,$s=e,ie(n),n.flags&=-3}}function Ua(n,s=!1){const{dep:a,prevSub:e,nextSub:p}=n;if(e&&(e.nextSub=p,n.prevSub=void 0),p&&(p.prevSub=e,n.nextSub=void 0),a.subs===n&&(a.subs=e,!e&&a.computed)){a.computed.flags&=-5;for(let l=a.computed.deps;l;l=l.nextDep)Ua(l,!0)}!s&&!--a.sc&&a.map&&a.map.delete(a.key)}function Fp(n){const{prevDep:s,nextDep:a}=n;s&&(s.nextDep=a,n.prevDep=void 0),a&&(a.prevDep=s,n.nextDep=void 0)}let $s=!0;const ue=[];function fn(){ue.push($s),$s=!1}function mn(){const n=ue.pop();$s=n===void 0?!0:n}function tl(n){const{cleanup:s}=n;if(n.cleanup=void 0,s){const a=rs;rs=void 0;try{s()}finally{rs=a}}}let ft=0;class Mp{constructor(s,a){this.sub=s,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class La{constructor(s){this.computed=s,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(s){if(!rs||!$s||rs===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==rs)a=this.activeLink=new Mp(rs,this),rs.deps?(a.prevDep=rs.depsTail,rs.depsTail.nextDep=a,rs.depsTail=a):rs.deps=rs.depsTail=a,fe(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const e=a.nextDep;e.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=e),a.prevDep=rs.depsTail,a.nextDep=void 0,rs.depsTail.nextDep=a,rs.depsTail=a,rs.deps===a&&(rs.deps=e)}return a}trigger(s){this.version++,ft++,this.notify(s)}notify(s){Da();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Va()}}}function fe(n){if(n.dep.sc++,n.sub.flags&4){const s=n.dep.computed;if(s&&!n.dep.subs){s.flags|=20;for(let e=s.deps;e;e=e.nextDep)fe(e)}const a=n.dep.subs;a!==n&&(n.prevSub=a,a&&(a.nextSub=n)),n.dep.subs=n}}const ha=new WeakMap,Fn=Symbol(""),ya=Symbol(""),mt=Symbol("");function ys(n,s,a){if($s&&rs){let e=ha.get(n);e||ha.set(n,e=new Map);let p=e.get(a);p||(e.set(a,p=new La),p.map=e,p.key=a),p.track()}}function rn(n,s,a,e,p,l){const c=ha.get(n);if(!c){ft++;return}const o=r=>{r&&r.trigger()};if(Da(),s==="clear")c.forEach(o);else{const r=_(n),u=r&&Ma(a);if(r&&a==="length"){const d=Number(e);c.forEach((m,h)=>{(h==="length"||h===mt||!tn(h)&&h>=d)&&o(m)})}else switch((a!==void 0||c.has(void 0))&&o(c.get(a)),u&&o(c.get(mt)),s){case"add":r?u&&o(c.get("length")):(o(c.get(Fn)),Gn(n)&&o(c.get(ya)));break;case"delete":r||(o(c.get(Fn)),Gn(n)&&o(c.get(ya)));break;case"set":Gn(n)&&o(c.get(Fn));break}}Va()}function Ln(n){const s=ss(n);return s===n?s:(ys(s,"iterate",mt),Vs(n)?s:s.map(Bs))}function Xt(n){return ys(n=ss(n),"iterate",mt),n}function Js(n,s){return bn(n)?Xn(Mn(n)?Bs(s):s):Bs(s)}const Dp={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,n=>Js(this,n))},concat(...n){return Ln(this).concat(...n.map(s=>_(s)?Ln(s):s))},entries(){return pa(this,"entries",n=>(n[1]=Js(this,n[1]),n))},every(n,s){return en(this,"every",n,s,void 0,arguments)},filter(n,s){return en(this,"filter",n,s,a=>a.map(e=>Js(this,e)),arguments)},find(n,s){return en(this,"find",n,s,a=>Js(this,a),arguments)},findIndex(n,s){return en(this,"findIndex",n,s,void 0,arguments)},findLast(n,s){return en(this,"findLast",n,s,a=>Js(this,a),arguments)},findLastIndex(n,s){return en(this,"findLastIndex",n,s,void 0,arguments)},forEach(n,s){return en(this,"forEach",n,s,void 0,arguments)},includes(...n){return oa(this,"includes",n)},indexOf(...n){return oa(this,"indexOf",n)},join(n){return Ln(this).join(n)},lastIndexOf(...n){return oa(this,"lastIndexOf",n)},map(n,s){return en(this,"map",n,s,void 0,arguments)},pop(){return nt(this,"pop")},push(...n){return nt(this,"push",n)},reduce(n,...s){return al(this,"reduce",n,s)},reduceRight(n,...s){return al(this,"reduceRight",n,s)},shift(){return nt(this,"shift")},some(n,s){return en(this,"some",n,s,void 0,arguments)},splice(...n){return nt(this,"splice",n)},toReversed(){return Ln(this).toReversed()},toSorted(n){return Ln(this).toSorted(n)},toSpliced(...n){return Ln(this).toSpliced(...n)},unshift(...n){return nt(this,"unshift",n)},values(){return pa(this,"values",n=>Js(this,n))}};function pa(n,s,a){const e=Xt(n),p=e[s]();return e!==n&&!Vs(n)&&(p._next=p.next,p.next=()=>{const l=p._next();return l.done||(l.value=a(l.value)),l}),p}const Vp=Array.prototype;function en(n,s,a,e,p,l){const c=Xt(n),o=c!==n&&!Vs(n),r=c[s];if(r!==Vp[s]){const m=r.apply(n,l);return o?Bs(m):m}let u=a;c!==n&&(o?u=function(m,h){return a.call(this,Js(n,m),h,n)}:a.length>2&&(u=function(m,h){return a.call(this,m,h,n)}));const d=r.call(c,u,e);return o&&p?p(d):d}function al(n,s,a,e){const p=Xt(n),l=p!==n&&!Vs(n);let c=a,o=!1;p!==n&&(l?(o=e.length===0,c=function(u,d,m){return o&&(o=!1,u=Js(n,u)),a.call(this,u,Js(n,d),m,n)}):a.length>3&&(c=function(u,d,m){return a.call(this,u,d,m,n)}));const r=p[s](c,...e);return o?Js(n,r):r}function oa(n,s,a){const e=ss(n);ys(e,"iterate",mt);const p=e[s](...a);return(p===-1||p===!1)&&Ka(a[0])?(a[0]=ss(a[0]),e[s](...a)):p}function nt(n,s,a=[]){fn(),Da();const e=ss(n)[s].apply(n,a);return Va(),mn(),e}const Up=xa("__proto__,__v_isRef,__isVue"),me=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tn));function Lp(n){tn(n)||(n=String(n));const s=ss(this);return ys(s,"has",n),s.hasOwnProperty(n)}class be{constructor(s=!1,a=!1){this._isReadonly=s,this._isShallow=a}get(s,a,e){if(a==="__v_skip")return s.__v_skip;const p=this._isReadonly,l=this._isShallow;if(a==="__v_isReactive")return!p;if(a==="__v_isReadonly")return p;if(a==="__v_isShallow")return l;if(a==="__v_raw")return e===(p?l?Xp:ye:l?he:ge).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(e)?s:void 0;const c=_(s);if(!p){let r;if(c&&(r=Dp[a]))return r;if(a==="hasOwnProperty")return Lp}const o=Reflect.get(s,a,As(s)?s:e);if((tn(a)?me.has(a):Up(a))||(p||ys(s,"get",a),l))return o;if(As(o)){const r=c&&Ma(a)?o:o.value;return p&&as(r)?Ca(r):r}return as(o)?p?Ca(o):Zt(o):o}}class ve extends be{constructor(s=!1){super(!1,s)}set(s,a,e,p){let l=s[a];const c=_(s)&&Ma(a);if(!this._isShallow){const u=bn(l);if(!Vs(e)&&!bn(e)&&(l=ss(l),e=ss(e)),!c&&As(l)&&!As(e))return u||(l.value=e),!0}const o=c?Number(a)<s.length:ns(s,a),r=Reflect.set(s,a,e,As(s)?s:p);return s===ss(p)&&(o?sn(e,l)&&rn(s,"set",a,e):rn(s,"add",a,e)),r}deleteProperty(s,a){const e=ns(s,a);s[a];const p=Reflect.deleteProperty(s,a);return p&&e&&rn(s,"delete",a,void 0),p}has(s,a){const e=Reflect.has(s,a);return(!tn(a)||!me.has(a))&&ys(s,"has",a),e}ownKeys(s){return ys(s,"iterate",_(s)?"length":Fn),Reflect.ownKeys(s)}}class $p extends be{constructor(s=!1){super(!0,s)}set(s,a){return!0}deleteProperty(s,a){return!0}}const Bp=new ve,Kp=new $p,Gp=new ve(!0);const ka=n=>n,Et=n=>Reflect.getPrototypeOf(n);function _p(n,s,a){return function(...e){const p=this.__v_raw,l=ss(p),c=Gn(l),o=n==="entries"||n===Symbol.iterator&&c,r=n==="keys"&&c,u=p[n](...e),d=a?ka:s?Xn:Bs;return!s&&ys(l,"iterate",r?ya:Fn),hs(Object.create(u),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:o?[d(m[0]),d(m[1])]:d(m),done:h}}})}}function wt(n){return function(...s){return n==="delete"?!1:n==="clear"?void 0:this}}function Wp(n,s){const a={get(p){const l=this.__v_raw,c=ss(l),o=ss(p);n||(sn(p,o)&&ys(c,"get",p),ys(c,"get",o));const{has:r}=Et(c),u=s?ka:n?Xn:Bs;if(r.call(c,p))return u(l.get(p));if(r.call(c,o))return u(l.get(o));l!==c&&l.get(p)},get size(){const p=this.__v_raw;return!n&&ys(ss(p),"iterate",Fn),p.size},has(p){const l=this.__v_raw,c=ss(l),o=ss(p);return n||(sn(p,o)&&ys(c,"has",p),ys(c,"has",o)),p===o?l.has(p):l.has(p)||l.has(o)},forEach(p,l){const c=this,o=c.__v_raw,r=ss(o),u=s?ka:n?Xn:Bs;return!n&&ys(r,"iterate",Fn),o.forEach((d,m)=>p.call(l,u(d),u(m),c))}};return hs(a,n?{add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear")}:{add(p){const l=ss(this),c=Et(l),o=ss(p),r=!s&&!Vs(p)&&!bn(p)?o:p;return c.has.call(l,r)||sn(p,r)&&c.has.call(l,p)||sn(o,r)&&c.has.call(l,o)||(l.add(r),rn(l,"add",r,r)),this},set(p,l){!s&&!Vs(l)&&!bn(l)&&(l=ss(l));const c=ss(this),{has:o,get:r}=Et(c);let u=o.call(c,p);u||(p=ss(p),u=o.call(c,p));const d=r.call(c,p);return c.set(p,l),u?sn(l,d)&&rn(c,"set",p,l):rn(c,"add",p,l),this},delete(p){const l=ss(this),{has:c,get:o}=Et(l);let r=c.call(l,p);r||(p=ss(p),r=c.call(l,p)),o&&o.call(l,p);const u=l.delete(p);return r&&rn(l,"delete",p,void 0),u},clear(){const p=ss(this),l=p.size!==0,c=p.clear();return l&&rn(p,"clear",void 0,void 0),c}}),["keys","values","entries",Symbol.iterator].forEach(p=>{a[p]=_p(p,n,s)}),a}function $a(n,s){const a=Wp(n,s);return(e,p,l)=>p==="__v_isReactive"?!n:p==="__v_isReadonly"?n:p==="__v_raw"?e:Reflect.get(ns(a,p)&&p in e?a:e,p,l)}const Hp={get:$a(!1,!1)},jp={get:$a(!1,!0)},zp={get:$a(!0,!1)};const ge=new WeakMap,he=new WeakMap,ye=new WeakMap,Xp=new WeakMap;function Zp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(n){return n.__v_skip||!Object.isExtensible(n)?0:Zp(Cp(n))}function Zt(n){return bn(n)?n:Ba(n,!1,Bp,Hp,ge)}function ke(n){return Ba(n,!1,Gp,jp,he)}function Ca(n){return Ba(n,!0,Kp,zp,ye)}function Ba(n,s,a,e,p){if(!as(n)||n.__v_raw&&!(s&&n.__v_isReactive))return n;const l=Yp(n);if(l===0)return n;const c=p.get(n);if(c)return c;const o=new Proxy(n,l===2?e:a);return p.set(n,o),o}function Mn(n){return bn(n)?Mn(n.__v_raw):!!(n&&n.__v_isReactive)}function bn(n){return!!(n&&n.__v_isReadonly)}function Vs(n){return!!(n&&n.__v_isShallow)}function Ka(n){return n?!!n.__v_raw:!1}function ss(n){const s=n&&n.__v_raw;return s?ss(s):n}function Jp(n){return!ns(n,"__v_skip")&&Object.isExtensible(n)&&te(n,"__v_skip",!0),n}const Bs=n=>as(n)?Zt(n):n,Xn=n=>as(n)?Ca(n):n;function As(n){return n?n.__v_isRef===!0:!1}function Ce(n){return Ae(n,!1)}function Qp(n){return Ae(n,!0)}function Ae(n,s){return As(n)?n:new so(n,s)}class so{constructor(s,a){this.dep=new La,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?s:ss(s),this._value=a?s:Bs(s),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(s){const a=this._rawValue,e=this.__v_isShallow||Vs(s)||bn(s);s=e?s:ss(s),sn(s,a)&&(this._rawValue=s,this._value=e?s:Bs(s),this.dep.trigger())}}function _n(n){return As(n)?n.value:n}const no={get:(n,s,a)=>s==="__v_raw"?n:_n(Reflect.get(n,s,a)),set:(n,s,a,e)=>{const p=n[s];return As(p)&&!As(a)?(p.value=a,!0):Reflect.set(n,s,a,e)}};function Ee(n){return Mn(n)?n:new Proxy(n,no)}class to{constructor(s,a,e){this.fn=s,this.setter=a,this._value=void 0,this.dep=new La(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&rs!==this)return ce(this,!0),!0}get value(){const s=this.dep.track();return de(this),s&&(s.version=this.dep.version),this._value}set value(s){this.setter&&this.setter(s)}}function ao(n,s,a=!1){let e,p;return j(n)?e=n:(e=n.get,p=n.set),new to(e,p,a)}const St={},qt=new WeakMap;let Nn;function lo(n,s=!1,a=Nn){if(a){let e=qt.get(a);e||qt.set(a,e=[]),e.push(n)}}function eo(n,s,a=ps){const{immediate:e,deep:p,once:l,scheduler:c,augmentJob:o,call:r}=a,u=D=>p?D:Vs(D)||p===!1||p===0?dn(D,1):dn(D);let d,m,h,y,F=!1,I=!1;if(As(n)?(m=()=>n.value,F=Vs(n)):Mn(n)?(m=()=>u(n),F=!0):_(n)?(I=!0,F=n.some(D=>Mn(D)||Vs(D)),m=()=>n.map(D=>{if(As(D))return D.value;if(Mn(D))return u(D);if(j(D))return r?r(D,2):D()})):j(n)?s?m=r?()=>r(n,2):n:m=()=>{if(h){fn();try{h()}finally{mn()}}const D=Nn;Nn=d;try{return r?r(n,3,[y]):n(y)}finally{Nn=D}}:m=nn,s&&p){const D=m,es=p===!0?1/0:p;m=()=>dn(D(),es)}const H=qp(),G=()=>{d.stop(),H&&H.active&&Fa(H.effects,d)};if(l&&s){const D=s;s=(...es)=>{D(...es),G()}}let x=I?new Array(n.length).fill(St):St;const V=D=>{if(!(!(d.flags&1)||!d.dirty&&!D))if(s){const es=d.run();if(p||F||(I?es.some((vs,ds)=>sn(vs,x[ds])):sn(es,x))){h&&h();const vs=Nn;Nn=d;try{const ds=[es,x===St?void 0:I&&x[0]===St?[]:x,y];x=es,r?r(s,3,ds):s(...ds)}finally{Nn=vs}}}else d.run()};return o&&o(V),d=new pe(m),d.scheduler=c?()=>c(V,!1):V,y=D=>lo(D,!1,d),h=d.onStop=()=>{const D=qt.get(d);if(D){if(r)r(D,4);else for(const es of D)es();qt.delete(d)}},s?e?V(!0):x=d.run():c?c(V.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function dn(n,s=1/0,a){if(s<=0||!as(n)||n.__v_skip||(a=a||new Map,(a.get(n)||0)>=s))return n;if(a.set(n,s),s--,As(n))dn(n.value,s,a);else if(_(n))for(let e=0;e<n.length;e++)dn(n[e],s,a);else if(_t(n)||Gn(n))n.forEach(e=>{dn(e,s,a)});else if(ne(n)){for(const e in n)dn(n[e],s,a);for(const e of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,e)&&dn(n[e],s,a)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ct(n,s,a,e){try{return e?n(...e):n()}catch(p){Yt(p,s,a)}}function an(n,s,a,e){if(j(n)){const p=Ct(n,s,a,e);return p&&Ql(p)&&p.catch(l=>{Yt(l,s,a)}),p}if(_(n)){const p=[];for(let l=0;l<n.length;l++)p.push(an(n[l],s,a,e));return p}}function Yt(n,s,a,e=!0){const p=s?s.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:c}=s&&s.appContext.config||ps;if(s){let o=s.parent;const r=s.proxy,u=`https://vuejs.org/error-reference/#runtime-${a}`;for(;o;){const d=o.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](n,r,u)===!1)return}o=o.parent}if(l){fn(),Ct(l,null,10,[n,r,u]),mn();return}}po(n,a,p,e,c)}function po(n,s,a,e=!0,p=!1){if(p)throw n;console.error(n)}const Ts=[];let Ys=-1;const Wn=[];let Cn=null,$n=0;const we=Promise.resolve();let Ft=null;function Ga(n){const s=Ft||we;return n?s.then(this?n.bind(this):n):s}function oo(n){let s=Ys+1,a=Ts.length;for(;s<a;){const e=s+a>>>1,p=Ts[e],l=bt(p);l<n||l===n&&p.flags&2?s=e+1:a=e}return s}function _a(n){if(!(n.flags&1)){const s=bt(n),a=Ts[Ts.length-1];!a||!(n.flags&2)&&s>=bt(a)?Ts.push(n):Ts.splice(oo(s),0,n),n.flags|=1,Se()}}function Se(){Ft||(Ft=we.then(Re))}function co(n){_(n)?Wn.push(...n):Cn&&n.id===-1?Cn.splice($n+1,0,n):n.flags&1||(Wn.push(n),n.flags|=1),Se()}function ll(n,s,a=Ys+1){for(;a<Ts.length;a++){const e=Ts[a];if(e&&e.flags&2){if(n&&e.id!==n.uid)continue;Ts.splice(a,1),a--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function Te(n){if(Wn.length){const s=[...new Set(Wn)].sort((a,e)=>bt(a)-bt(e));if(Wn.length=0,Cn){Cn.push(...s);return}for(Cn=s,$n=0;$n<Cn.length;$n++){const a=Cn[$n];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Cn=null,$n=0}}const bt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Re(n){try{for(Ys=0;Ys<Ts.length;Ys++){const s=Ts[Ys];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),Ct(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Ys<Ts.length;Ys++){const s=Ts[Ys];s&&(s.flags&=-2)}Ys=-1,Ts.length=0,Te(),Ft=null,(Ts.length||Wn.length)&&Re()}}let Fs=null,Oe=null;function Mt(n){const s=Fs;return Fs=n,Oe=n&&n.type.__scopeId||null,s}function M(n,s=Fs,a){if(!s||n._n)return n;const e=(...p)=>{e._d&&Ut(-1);const l=Mt(s);let c;try{c=n(...p)}finally{Mt(l),e._d&&Ut(1)}return c};return e._n=!0,e._c=!0,e._d=!0,e}function gs(n,s){if(Fs===null)return n;const a=na(Fs),e=n.dirs||(n.dirs=[]);for(let p=0;p<s.length;p++){let[l,c,o,r=ps]=s[p];l&&(j(l)&&(l={mounted:l,updated:l}),l.deep&&dn(c),e.push({dir:l,instance:a,value:c,oldValue:void 0,arg:o,modifiers:r}))}return n}function On(n,s,a,e){const p=n.dirs,l=s&&s.dirs;for(let c=0;c<p.length;c++){const o=p[c];l&&(o.oldValue=l[c].value);let r=o.dir[e];r&&(fn(),an(r,a,8,[n.el,o,n,s]),mn())}}function Ot(n,s){if(Cs){let a=Cs.provides;const e=Cs.parent&&Cs.parent.provides;e===a&&(a=Cs.provides=Object.create(e)),a[n]=s}}function un(n,s,a=!1){const e=dc();if(e||Hn){let p=Hn?Hn._context.provides:e?e.parent==null||e.ce?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(p&&n in p)return p[n];if(arguments.length>1)return a&&j(s)?s.call(e&&e.proxy):s}}const ro=Symbol.for("v-scx"),io=()=>un(ro);function It(n,s,a){return Ie(n,s,a)}function Ie(n,s,a=ps){const{immediate:e,deep:p,flush:l,once:c}=a,o=hs({},a),r=s&&e||!s&&l!=="post";let u;if(gt){if(l==="sync"){const y=io();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!r){const y=()=>{};return y.stop=nn,y.resume=nn,y.pause=nn,y}}const d=Cs;o.call=(y,F,I)=>an(y,d,F,I);let m=!1;l==="post"?o.scheduler=y=>{Ps(y,d&&d.suspense)}:l!=="sync"&&(m=!0,o.scheduler=(y,F)=>{F?y():_a(y)}),o.augmentJob=y=>{s&&(y.flags|=4),m&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const h=eo(n,s,o);return gt&&(u?u.push(h):r&&h()),h}function uo(n,s,a){const e=this.proxy,p=fs(n)?n.includes(".")?Ne(e,n):()=>e[n]:n.bind(e,e);let l;j(s)?l=s:(l=s.handler,a=s);const c=At(this),o=Ie(p,l.bind(e),a);return c(),o}function Ne(n,s){const a=s.split(".");return()=>{let e=n;for(let p=0;p<a.length&&e;p++)e=e[a[p]];return e}}const fo=Symbol("_vte"),mo=n=>n.__isTeleport,bo=Symbol("_leaveCb");function Wa(n,s){n.shapeFlag&6&&n.component?(n.transition=s,Wa(n.component.subTree,s)):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function Pe(n,s){return j(n)?hs({name:n.name},s,{setup:n}):n}function xe(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function el(n,s){let a;return!!((a=Object.getOwnPropertyDescriptor(n,s))&&!a.configurable)}const Dt=new WeakMap;function ct(n,s,a,e,p=!1){if(_(n)){n.forEach((I,H)=>ct(I,s&&(_(s)?s[H]:s),a,e,p));return}if(rt(e)&&!p){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&ct(n,s,a,e.component.subTree);return}const l=e.shapeFlag&4?na(e.component):e.el,c=p?null:l,{i:o,r}=n,u=s&&s.r,d=o.refs===ps?o.refs={}:o.refs,m=o.setupState,h=ss(m),y=m===ps?Jl:I=>el(d,I)?!1:ns(h,I),F=(I,H)=>!(H&&el(d,H));if(u!=null&&u!==r){if(pl(s),fs(u))d[u]=null,y(u)&&(m[u]=null);else if(As(u)){const I=s;F(u,I.k)&&(u.value=null),I.k&&(d[I.k]=null)}}if(j(r))Ct(r,o,12,[c,d]);else{const I=fs(r),H=As(r);if(I||H){const G=()=>{if(n.f){const x=I?y(r)?m[r]:d[r]:F()||!n.k?r.value:d[n.k];if(p)_(x)&&Fa(x,l);else if(_(x))x.includes(l)||x.push(l);else if(I)d[r]=[l],y(r)&&(m[r]=d[r]);else{const V=[l];F(r,n.k)&&(r.value=V),n.k&&(d[n.k]=V)}}else I?(d[r]=c,y(r)&&(m[r]=c)):H&&(F(r,n.k)&&(r.value=c),n.k&&(d[n.k]=c))};if(c){const x=()=>{G(),Dt.delete(n)};x.id=-1,Dt.set(n,x),Ps(x,a)}else pl(n),G()}}}function pl(n){const s=Dt.get(n);s&&(s.flags|=8,Dt.delete(n))}zt().requestIdleCallback;zt().cancelIdleCallback;const rt=n=>!!n.type.__asyncLoader,qe=n=>n.type.__isKeepAlive;function vo(n,s){Fe(n,"a",s)}function go(n,s){Fe(n,"da",s)}function Fe(n,s,a=Cs){const e=n.__wdc||(n.__wdc=()=>{let p=a;for(;p;){if(p.isDeactivated)return;p=p.parent}return n()});if(Jt(s,e,a),a){let p=a.parent;for(;p&&p.parent;)qe(p.parent.vnode)&&ho(e,s,a,p),p=p.parent}}function ho(n,s,a,e){const p=Jt(s,n,e,!0);Me(()=>{Fa(e[s],p)},a)}function Jt(n,s,a=Cs,e=!1){if(a){const p=a[n]||(a[n]=[]),l=s.__weh||(s.__weh=(...c)=>{fn();const o=At(a),r=an(s,a,n,c);return o(),mn(),r});return e?p.unshift(l):p.push(l),l}}const vn=n=>(s,a=Cs)=>{(!gt||n==="sp")&&Jt(n,(...e)=>s(...e),a)},yo=vn("bm"),ko=vn("m"),Co=vn("bu"),Ao=vn("u"),Eo=vn("bum"),Me=vn("um"),wo=vn("sp"),So=vn("rtg"),To=vn("rtc");function Ro(n,s=Cs){Jt("ec",n,s)}const Oo="components";function os(n,s){return No(Oo,n,!0,s)||n}const Io=Symbol.for("v-ndc");function No(n,s,a=!0,e=!1){const p=Fs||Cs;if(p){const l=p.type;{const o=vc(l,!1);if(o&&(o===s||o===Rs(s)||o===Ht(Rs(s))))return l}const c=ol(p[n]||l[n],s)||ol(p.appContext[n],s);return!c&&e?l:c}}function ol(n,s){return n&&(n[s]||n[Rs(s)]||n[Ht(Rs(s))])}function Pn(n,s,a,e){let p;const l=a,c=_(n);if(c||fs(n)){const o=c&&Mn(n);let r=!1,u=!1;o&&(r=!Vs(n),u=bn(n),n=Xt(n)),p=new Array(n.length);for(let d=0,m=n.length;d<m;d++)p[d]=s(r?u?Xn(Bs(n[d])):Bs(n[d]):n[d],d,void 0,l)}else if(typeof n=="number"){p=new Array(n);for(let o=0;o<n;o++)p[o]=s(o+1,o,void 0,l)}else if(as(n))if(n[Symbol.iterator])p=Array.from(n,(o,r)=>s(o,r,void 0,l));else{const o=Object.keys(n);p=new Array(o.length);for(let r=0,u=o.length;r<u;r++){const d=o[r];p[r]=s(n[d],d,r,l)}}else p=[];return p}const Aa=n=>n?np(n)?na(n):Aa(n.parent):null,it=hs(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Aa(n.parent),$root:n=>Aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ve(n),$forceUpdate:n=>n.f||(n.f=()=>{_a(n.update)}),$nextTick:n=>n.n||(n.n=Ga.bind(n.proxy)),$watch:n=>uo.bind(n)}),ca=(n,s)=>n!==ps&&!n.__isScriptSetup&&ns(n,s),Po={get({_:n},s){if(s==="__v_skip")return!0;const{ctx:a,setupState:e,data:p,props:l,accessCache:c,type:o,appContext:r}=n;if(s[0]!=="$"){const h=c[s];if(h!==void 0)switch(h){case 1:return e[s];case 2:return p[s];case 4:return a[s];case 3:return l[s]}else{if(ca(e,s))return c[s]=1,e[s];if(p!==ps&&ns(p,s))return c[s]=2,p[s];if(ns(l,s))return c[s]=3,l[s];if(a!==ps&&ns(a,s))return c[s]=4,a[s];Ea&&(c[s]=0)}}const u=it[s];let d,m;if(u)return s==="$attrs"&&ys(n.attrs,"get",""),u(n);if((d=o.__cssModules)&&(d=d[s]))return d;if(a!==ps&&ns(a,s))return c[s]=4,a[s];if(m=r.config.globalProperties,ns(m,s))return m[s]},set({_:n},s,a){const{data:e,setupState:p,ctx:l}=n;return ca(p,s)?(p[s]=a,!0):e!==ps&&ns(e,s)?(e[s]=a,!0):ns(n.props,s)||s[0]==="$"&&s.slice(1)in n?!1:(l[s]=a,!0)},has({_:{data:n,setupState:s,accessCache:a,ctx:e,appContext:p,props:l,type:c}},o){let r;return!!(a[o]||n!==ps&&o[0]!=="$"&&ns(n,o)||ca(s,o)||ns(l,o)||ns(e,o)||ns(it,o)||ns(p.config.globalProperties,o)||(r=c.__cssModules)&&r[o])},defineProperty(n,s,a){return a.get!=null?n._.accessCache[s]=0:ns(a,"value")&&this.set(n,s,a.value,null),Reflect.defineProperty(n,s,a)}};function cl(n){return _(n)?n.reduce((s,a)=>(s[a]=null,s),{}):n}let Ea=!0;function xo(n){const s=Ve(n),a=n.proxy,e=n.ctx;Ea=!1,s.beforeCreate&&rl(s.beforeCreate,n,"bc");const{data:p,computed:l,methods:c,watch:o,provide:r,inject:u,created:d,beforeMount:m,mounted:h,beforeUpdate:y,updated:F,activated:I,deactivated:H,beforeDestroy:G,beforeUnmount:x,destroyed:V,unmounted:D,render:es,renderTracked:vs,renderTriggered:ds,errorCaptured:Gs,serverPrefetch:gn,expose:_s,inheritAttrs:hn,components:Tn,directives:Ws,filters:Qn}=s;if(u&&qo(u,e,null),c)for(const ls in c){const J=c[ls];j(J)&&(e[ls]=J.bind(a))}if(p){const ls=p.call(a,a);as(ls)&&(n.data=Zt(ls))}if(Ea=!0,l)for(const ls in l){const J=l[ls],ln=j(J)?J.bind(a,a):j(J.get)?J.get.bind(a,a):nn,yn=!j(J)&&j(J.set)?J.set.bind(a):nn,Hs=Ls({get:ln,set:yn});Object.defineProperty(e,ls,{enumerable:!0,configurable:!0,get:()=>Hs.value,set:Os=>Hs.value=Os})}if(o)for(const ls in o)De(o[ls],e,a,ls);if(r){const ls=j(r)?r.call(a):r;Reflect.ownKeys(ls).forEach(J=>{Ot(J,ls[J])})}d&&rl(d,n,"c");function bs(ls,J){_(J)?J.forEach(ln=>ls(ln.bind(a))):J&&ls(J.bind(a))}if(bs(yo,m),bs(ko,h),bs(Co,y),bs(Ao,F),bs(vo,I),bs(go,H),bs(Ro,Gs),bs(To,vs),bs(So,ds),bs(Eo,x),bs(Me,D),bs(wo,gn),_(_s))if(_s.length){const ls=n.exposed||(n.exposed={});_s.forEach(J=>{Object.defineProperty(ls,J,{get:()=>a[J],set:ln=>a[J]=ln,enumerable:!0})})}else n.exposed||(n.exposed={});es&&n.render===nn&&(n.render=es),hn!=null&&(n.inheritAttrs=hn),Tn&&(n.components=Tn),Ws&&(n.directives=Ws),gn&&xe(n)}function qo(n,s,a=nn){_(n)&&(n=wa(n));for(const e in n){const p=n[e];let l;as(p)?"default"in p?l=un(p.from||e,p.default,!0):l=un(p.from||e):l=un(p),As(l)?Object.defineProperty(s,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):s[e]=l}}function rl(n,s,a){an(_(n)?n.map(e=>e.bind(s.proxy)):n.bind(s.proxy),s,a)}function De(n,s,a,e){let p=e.includes(".")?Ne(a,e):()=>a[e];if(fs(n)){const l=s[n];j(l)&&It(p,l)}else if(j(n))It(p,n.bind(a));else if(as(n))if(_(n))n.forEach(l=>De(l,s,a,e));else{const l=j(n.handler)?n.handler.bind(a):s[n.handler];j(l)&&It(p,l,n)}}function Ve(n){const s=n.type,{mixins:a,extends:e}=s,{mixins:p,optionsCache:l,config:{optionMergeStrategies:c}}=n.appContext,o=l.get(s);let r;return o?r=o:!p.length&&!a&&!e?r=s:(r={},p.length&&p.forEach(u=>Vt(r,u,c,!0)),Vt(r,s,c)),as(s)&&l.set(s,r),r}function Vt(n,s,a,e=!1){const{mixins:p,extends:l}=s;l&&Vt(n,l,a,!0),p&&p.forEach(c=>Vt(n,c,a,!0));for(const c in s)if(!(e&&c==="expose")){const o=Fo[c]||a&&a[c];n[c]=o?o(n[c],s[c]):s[c]}return n}const Fo={data:il,props:dl,emits:dl,methods:lt,computed:lt,beforeCreate:Es,created:Es,beforeMount:Es,mounted:Es,beforeUpdate:Es,updated:Es,beforeDestroy:Es,beforeUnmount:Es,destroyed:Es,unmounted:Es,activated:Es,deactivated:Es,errorCaptured:Es,serverPrefetch:Es,components:lt,directives:lt,watch:Do,provide:il,inject:Mo};function il(n,s){return s?n?function(){return hs(j(n)?n.call(this,this):n,j(s)?s.call(this,this):s)}:s:n}function Mo(n,s){return lt(wa(n),wa(s))}function wa(n){if(_(n)){const s={};for(let a=0;a<n.length;a++)s[n[a]]=n[a];return s}return n}function Es(n,s){return n?[...new Set([].concat(n,s))]:s}function lt(n,s){return n?hs(Object.create(null),n,s):s}function dl(n,s){return n?_(n)&&_(s)?[...new Set([...n,...s])]:hs(Object.create(null),cl(n),cl(s??{})):s}function Do(n,s){if(!n)return s;if(!s)return n;const a=hs(Object.create(null),n);for(const e in s)a[e]=Es(n[e],s[e]);return a}function Ue(){return{app:null,config:{isNativeTag:Jl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vo=0;function Uo(n,s){return function(e,p=null){j(e)||(e=hs({},e)),p!=null&&!as(p)&&(p=null);const l=Ue(),c=new WeakSet,o=[];let r=!1;const u=l.app={_uid:Vo++,_component:e,_props:p,_container:null,_context:l,_instance:null,version:hc,get config(){return l.config},set config(d){},use(d,...m){return c.has(d)||(d&&j(d.install)?(c.add(d),d.install(u,...m)):j(d)&&(c.add(d),d(u,...m))),u},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),u},component(d,m){return m?(l.components[d]=m,u):l.components[d]},directive(d,m){return m?(l.directives[d]=m,u):l.directives[d]},mount(d,m,h){if(!r){const y=u._ceVNode||T(e,p);return y.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),n(y,d,h),r=!0,u._container=d,d.__vue_app__=u,na(y.component)}},onUnmount(d){o.push(d)},unmount(){r&&(an(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(d,m){return l.provides[d]=m,u},runWithContext(d){const m=Hn;Hn=u;try{return d()}finally{Hn=m}}};return u}}let Hn=null;const Lo=(n,s)=>s==="modelValue"||s==="model-value"?n.modelModifiers:n[`${s}Modifiers`]||n[`${Rs(s)}Modifiers`]||n[`${Sn(s)}Modifiers`];function $o(n,s,...a){if(n.isUnmounted)return;const e=n.vnode.props||ps;let p=a;const l=s.startsWith("update:"),c=l&&Lo(e,s.slice(7));c&&(c.trim&&(p=a.map(d=>fs(d)?d.trim():d)),c.number&&(p=a.map(jt)));let o,r=e[o=aa(s)]||e[o=aa(Rs(s))];!r&&l&&(r=e[o=aa(Sn(s))]),r&&an(r,n,6,p);const u=e[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,an(u,n,6,p)}}const Bo=new WeakMap;function Le(n,s,a=!1){const e=a?Bo:s.emitsCache,p=e.get(n);if(p!==void 0)return p;const l=n.emits;let c={},o=!1;if(!j(n)){const r=u=>{const d=Le(u,s,!0);d&&(o=!0,hs(c,d))};!a&&s.mixins.length&&s.mixins.forEach(r),n.extends&&r(n.extends),n.mixins&&n.mixins.forEach(r)}return!l&&!o?(as(n)&&e.set(n,null),null):(_(l)?l.forEach(r=>c[r]=null):hs(c,l),as(n)&&e.set(n,c),c)}function Qt(n,s){return!n||!Gt(s)?!1:(s=s.slice(2).replace(/Once$/,""),ns(n,s[0].toLowerCase()+s.slice(1))||ns(n,Sn(s))||ns(n,s))}function ul(n){const{type:s,vnode:a,proxy:e,withProxy:p,propsOptions:[l],slots:c,attrs:o,emit:r,render:u,renderCache:d,props:m,data:h,setupState:y,ctx:F,inheritAttrs:I}=n,H=Mt(n);let G,x;try{if(a.shapeFlag&4){const D=p||e,es=D;G=Qs(u.call(es,D,d,m,y,h,F)),x=o}else{const D=s;G=Qs(D.length>1?D(m,{attrs:o,slots:c,emit:r}):D(m,null)),x=s.props?o:Ko(o)}}catch(D){dt.length=0,Yt(D,n,1),G=T(wn)}let V=G;if(x&&I!==!1){const D=Object.keys(x),{shapeFlag:es}=V;D.length&&es&7&&(l&&D.some(qa)&&(x=Go(x,l)),V=Zn(V,x,!1,!0))}return a.dirs&&(V=Zn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(a.dirs):a.dirs),a.transition&&Wa(V,a.transition),G=V,Mt(H),G}const Ko=n=>{let s;for(const a in n)(a==="class"||a==="style"||Gt(a))&&((s||(s={}))[a]=n[a]);return s},Go=(n,s)=>{const a={};for(const e in n)(!qa(e)||!(e.slice(9)in s))&&(a[e]=n[e]);return a};function _o(n,s,a){const{props:e,children:p,component:l}=n,{props:c,children:o,patchFlag:r}=s,u=l.emitsOptions;if(s.dirs||s.transition)return!0;if(a&&r>=0){if(r&1024)return!0;if(r&16)return e?fl(e,c,u):!!c;if(r&8){const d=s.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if($e(c,e,h)&&!Qt(u,h))return!0}}}else return(p||o)&&(!o||!o.$stable)?!0:e===c?!1:e?c?fl(e,c,u):!0:!!c;return!1}function fl(n,s,a){const e=Object.keys(s);if(e.length!==Object.keys(n).length)return!0;for(let p=0;p<e.length;p++){const l=e[p];if($e(s,n,l)&&!Qt(a,l))return!0}return!1}function $e(n,s,a){const e=n[a],p=s[a];return a==="style"&&as(e)&&as(p)?!kt(e,p):e!==p}function Wo({vnode:n,parent:s},a){for(;s;){const e=s.subTree;if(e.suspense&&e.suspense.activeBranch===n&&(e.el=n.el),e===n)(n=s.vnode).el=a,s=s.parent;else break}}const Be={},Ke=()=>Object.create(Be),Ge=n=>Object.getPrototypeOf(n)===Be;function Ho(n,s,a,e=!1){const p={},l=Ke();n.propsDefaults=Object.create(null),_e(n,s,p,l);for(const c in n.propsOptions[0])c in p||(p[c]=void 0);a?n.props=e?p:ke(p):n.type.props?n.props=p:n.props=l,n.attrs=l}function jo(n,s,a,e){const{props:p,attrs:l,vnode:{patchFlag:c}}=n,o=ss(p),[r]=n.propsOptions;let u=!1;if((e||c>0)&&!(c&16)){if(c&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Qt(n.emitsOptions,h))continue;const y=s[h];if(r)if(ns(l,h))y!==l[h]&&(l[h]=y,u=!0);else{const F=Rs(h);p[F]=Sa(r,o,F,y,n,!1)}else y!==l[h]&&(l[h]=y,u=!0)}}}else{_e(n,s,p,l)&&(u=!0);let d;for(const m in o)(!s||!ns(s,m)&&((d=Sn(m))===m||!ns(s,d)))&&(r?a&&(a[m]!==void 0||a[d]!==void 0)&&(p[m]=Sa(r,o,m,void 0,n,!0)):delete p[m]);if(l!==o)for(const m in l)(!s||!ns(s,m))&&(delete l[m],u=!0)}u&&rn(n.attrs,"set","")}function _e(n,s,a,e){const[p,l]=n.propsOptions;let c=!1,o;if(s)for(let r in s){if(et(r))continue;const u=s[r];let d;p&&ns(p,d=Rs(r))?!l||!l.includes(d)?a[d]=u:(o||(o={}))[d]=u:Qt(n.emitsOptions,r)||(!(r in e)||u!==e[r])&&(e[r]=u,c=!0)}if(l){const r=ss(a),u=o||ps;for(let d=0;d<l.length;d++){const m=l[d];a[m]=Sa(p,r,m,u[m],n,!ns(u,m))}}return c}function Sa(n,s,a,e,p,l){const c=n[a];if(c!=null){const o=ns(c,"default");if(o&&e===void 0){const r=c.default;if(c.type!==Function&&!c.skipFactory&&j(r)){const{propsDefaults:u}=p;if(a in u)e=u[a];else{const d=At(p);e=u[a]=r.call(null,s),d()}}else e=r;p.ce&&p.ce._setProp(a,e)}c[0]&&(l&&!o?e=!1:c[1]&&(e===""||e===Sn(a))&&(e=!0))}return e}const zo=new WeakMap;function We(n,s,a=!1){const e=a?zo:s.propsCache,p=e.get(n);if(p)return p;const l=n.props,c={},o=[];let r=!1;if(!j(n)){const d=m=>{r=!0;const[h,y]=We(m,s,!0);hs(c,h),y&&o.push(...y)};!a&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!l&&!r)return as(n)&&e.set(n,Kn),Kn;if(_(l))for(let d=0;d<l.length;d++){const m=Rs(l[d]);ml(m)&&(c[m]=ps)}else if(l)for(const d in l){const m=Rs(d);if(ml(m)){const h=l[d],y=c[m]=_(h)||j(h)?{type:h}:hs({},h),F=y.type;let I=!1,H=!0;if(_(F))for(let G=0;G<F.length;++G){const x=F[G],V=j(x)&&x.name;if(V==="Boolean"){I=!0;break}else V==="String"&&(H=!1)}else I=j(F)&&F.name==="Boolean";y[0]=I,y[1]=H,(I||ns(y,"default"))&&o.push(m)}}const u=[c,o];return as(n)&&e.set(n,u),u}function ml(n){return n[0]!=="$"&&!et(n)}const Ha=n=>n==="_"||n==="_ctx"||n==="$stable",ja=n=>_(n)?n.map(Qs):[Qs(n)],Xo=(n,s,a)=>{if(s._n)return s;const e=M((...p)=>ja(s(...p)),a);return e._c=!1,e},He=(n,s,a)=>{const e=n._ctx;for(const p in n){if(Ha(p))continue;const l=n[p];if(j(l))s[p]=Xo(p,l,e);else if(l!=null){const c=ja(l);s[p]=()=>c}}},je=(n,s)=>{const a=ja(s);n.slots.default=()=>a},ze=(n,s,a)=>{for(const e in s)(a||!Ha(e))&&(n[e]=s[e])},Zo=(n,s,a)=>{const e=n.slots=Ke();if(n.vnode.shapeFlag&32){const p=s._;p?(ze(e,s,a),a&&te(e,"_",p,!0)):He(s,e)}else s&&je(n,s)},Yo=(n,s,a)=>{const{vnode:e,slots:p}=n;let l=!0,c=ps;if(e.shapeFlag&32){const o=s._;o?a&&o===1?l=!1:ze(p,s,a):(l=!s.$stable,He(s,p)),c=s}else s&&(je(n,s),c={default:1});if(l)for(const o in p)!Ha(o)&&c[o]==null&&delete p[o]},Ps=tc;function Jo(n){return Qo(n)}function Qo(n,s){const a=zt();a.__VUE__=!0;const{insert:e,remove:p,patchProp:l,createElement:c,createText:o,createComment:r,setText:u,setElementText:d,parentNode:m,nextSibling:h,setScopeId:y=nn,insertStaticContent:F}=n,I=(i,f,b,k=null,E=null,C=null,O=void 0,R=null,S=!!f.dynamicChildren)=>{if(i===f)return;i&&!tt(i,f)&&(k=A(i),Os(i,E,C,!0),i=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:w,ref:$,shapeFlag:P}=f;switch(w){case sa:H(i,f,b,k);break;case wn:G(i,f,b,k);break;case Nt:i==null&&x(f,b,k,O);break;case ks:Tn(i,f,b,k,E,C,O,R,S);break;default:P&1?es(i,f,b,k,E,C,O,R,S):P&6?Ws(i,f,b,k,E,C,O,R,S):(P&64||P&128)&&w.process(i,f,b,k,E,C,O,R,S,U)}$!=null&&E?ct($,i&&i.ref,C,f||i,!f):$==null&&i&&i.ref!=null&&ct(i.ref,null,C,i,!0)},H=(i,f,b,k)=>{if(i==null)e(f.el=o(f.children),b,k);else{const E=f.el=i.el;f.children!==i.children&&u(E,f.children)}},G=(i,f,b,k)=>{i==null?e(f.el=r(f.children||""),b,k):f.el=i.el},x=(i,f,b,k)=>{[i.el,i.anchor]=F(i.children,f,b,k,i.el,i.anchor)},V=({el:i,anchor:f},b,k)=>{let E;for(;i&&i!==f;)E=h(i),e(i,b,k),i=E;e(f,b,k)},D=({el:i,anchor:f})=>{let b;for(;i&&i!==f;)b=h(i),p(i),i=b;p(f)},es=(i,f,b,k,E,C,O,R,S)=>{if(f.type==="svg"?O="svg":f.type==="math"&&(O="mathml"),i==null)vs(f,b,k,E,C,O,R,S);else{const w=i.el&&i.el._isVueCE?i.el:null;try{w&&w._beginPatch(),gn(i,f,E,C,O,R,S)}finally{w&&w._endPatch()}}},vs=(i,f,b,k,E,C,O,R)=>{let S,w;const{props:$,shapeFlag:P,transition:L,dirs:W}=i;if(S=i.el=c(i.type,C,$&&$.is,$),P&8?d(S,i.children):P&16&&Gs(i.children,S,null,k,E,ra(i,C),O,R),W&&On(i,null,k,"created"),ds(S,i,i.scopeId,O,k),$){for(const cs in $)cs!=="value"&&!et(cs)&&l(S,cs,null,$[cs],C,k);"value"in $&&l(S,"value",null,$.value,C),(w=$.onVnodeBeforeMount)&&Zs(w,k,i)}W&&On(i,null,k,"beforeMount");const Y=sc(E,L);Y&&L.beforeEnter(S),e(S,f,b),((w=$&&$.onVnodeMounted)||Y||W)&&Ps(()=>{w&&Zs(w,k,i),Y&&L.enter(S),W&&On(i,null,k,"mounted")},E)},ds=(i,f,b,k,E)=>{if(b&&y(i,b),k)for(let C=0;C<k.length;C++)y(i,k[C]);if(E){let C=E.subTree;if(f===C||Je(C.type)&&(C.ssContent===f||C.ssFallback===f)){const O=E.vnode;ds(i,O,O.scopeId,O.slotScopeIds,E.parent)}}},Gs=(i,f,b,k,E,C,O,R,S=0)=>{for(let w=S;w<i.length;w++){const $=i[w]=R?cn(i[w]):Qs(i[w]);I(null,$,f,b,k,E,C,O,R)}},gn=(i,f,b,k,E,C,O)=>{const R=f.el=i.el;let{patchFlag:S,dynamicChildren:w,dirs:$}=f;S|=i.patchFlag&16;const P=i.props||ps,L=f.props||ps;let W;if(b&&In(b,!1),(W=L.onVnodeBeforeUpdate)&&Zs(W,b,f,i),$&&On(f,i,b,"beforeUpdate"),b&&In(b,!0),(P.innerHTML&&L.innerHTML==null||P.textContent&&L.textContent==null)&&d(R,""),w?_s(i.dynamicChildren,w,R,b,k,ra(f,E),C):O||J(i,f,R,null,b,k,ra(f,E),C,!1),S>0){if(S&16)hn(R,P,L,b,E);else if(S&2&&P.class!==L.class&&l(R,"class",null,L.class,E),S&4&&l(R,"style",P.style,L.style,E),S&8){const Y=f.dynamicProps;for(let cs=0;cs<Y.length;cs++){const ts=Y[cs],Is=P[ts],Ns=L[ts];(Ns!==Is||ts==="value")&&l(R,ts,Is,Ns,E,b)}}S&1&&i.children!==f.children&&d(R,f.children)}else!O&&w==null&&hn(R,P,L,b,E);((W=L.onVnodeUpdated)||$)&&Ps(()=>{W&&Zs(W,b,f,i),$&&On(f,i,b,"updated")},k)},_s=(i,f,b,k,E,C,O)=>{for(let R=0;R<f.length;R++){const S=i[R],w=f[R],$=S.el&&(S.type===ks||!tt(S,w)||S.shapeFlag&198)?m(S.el):b;I(S,w,$,null,k,E,C,O,!0)}},hn=(i,f,b,k,E)=>{if(f!==b){if(f!==ps)for(const C in f)!et(C)&&!(C in b)&&l(i,C,f[C],null,E,k);for(const C in b){if(et(C))continue;const O=b[C],R=f[C];O!==R&&C!=="value"&&l(i,C,R,O,E,k)}"value"in b&&l(i,"value",f.value,b.value,E)}},Tn=(i,f,b,k,E,C,O,R,S)=>{const w=f.el=i?i.el:o(""),$=f.anchor=i?i.anchor:o("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:W}=f;W&&(R=R?R.concat(W):W),i==null?(e(w,b,k),e($,b,k),Gs(f.children||[],b,$,E,C,O,R,S)):P>0&&P&64&&L&&i.dynamicChildren&&i.dynamicChildren.length===L.length?(_s(i.dynamicChildren,L,b,E,C,O,R),(f.key!=null||E&&f===E.subTree)&&Xe(i,f,!0)):J(i,f,b,$,E,C,O,R,S)},Ws=(i,f,b,k,E,C,O,R,S)=>{f.slotScopeIds=R,i==null?f.shapeFlag&512?E.ctx.activate(f,b,k,O,S):Qn(f,b,k,E,C,O,S):Dn(i,f,S)},Qn=(i,f,b,k,E,C,O)=>{const R=i.component=ic(i,k,E);if(qe(i)&&(R.ctx.renderer=U),uc(R,!1,O),R.asyncDep){if(E&&E.registerDep(R,bs,O),!i.el){const S=R.subTree=T(wn);G(null,S,f,b),i.placeholder=S.el}}else bs(R,i,f,b,E,C,O)},Dn=(i,f,b)=>{const k=f.component=i.component;if(_o(i,f,b))if(k.asyncDep&&!k.asyncResolved){ls(k,f,b);return}else k.next=f,k.update();else f.el=i.el,k.vnode=f},bs=(i,f,b,k,E,C,O)=>{const R=()=>{if(i.isMounted){let{next:P,bu:L,u:W,parent:Y,vnode:cs}=i;{const zs=Ze(i);if(zs){P&&(P.el=cs.el,ls(i,P,O)),zs.asyncDep.then(()=>{Ps(()=>{i.isUnmounted||w()},E)});return}}let ts=P,Is;In(i,!1),P?(P.el=cs.el,ls(i,P,O)):P=cs,L&&Rt(L),(Is=P.props&&P.props.onVnodeBeforeUpdate)&&Zs(Is,Y,P,cs),In(i,!0);const Ns=ul(i),js=i.subTree;i.subTree=Ns,I(js,Ns,m(js.el),A(js),i,E,C),P.el=Ns.el,ts===null&&Wo(i,Ns.el),W&&Ps(W,E),(Is=P.props&&P.props.onVnodeUpdated)&&Ps(()=>Zs(Is,Y,P,cs),E)}else{let P;const{el:L,props:W}=f,{bm:Y,m:cs,parent:ts,root:Is,type:Ns}=i,js=rt(f);In(i,!1),Y&&Rt(Y),!js&&(P=W&&W.onVnodeBeforeMount)&&Zs(P,ts,f),In(i,!0);{Is.ce&&Is.ce._hasShadowRoot()&&Is.ce._injectChildStyle(Ns,i.parent?i.parent.type:void 0);const zs=i.subTree=ul(i);I(null,zs,b,k,i,E,C),f.el=zs.el}if(cs&&Ps(cs,E),!js&&(P=W&&W.onVnodeMounted)){const zs=f;Ps(()=>Zs(P,ts,zs),E)}(f.shapeFlag&256||ts&&rt(ts.vnode)&&ts.vnode.shapeFlag&256)&&i.a&&Ps(i.a,E),i.isMounted=!0,f=b=k=null}};i.scope.on();const S=i.effect=new pe(R);i.scope.off();const w=i.update=S.run.bind(S),$=i.job=S.runIfDirty.bind(S);$.i=i,$.id=i.uid,S.scheduler=()=>_a($),In(i,!0),w()},ls=(i,f,b)=>{f.component=i;const k=i.vnode.props;i.vnode=f,i.next=null,jo(i,f.props,k,b),Yo(i,f.children,b),fn(),ll(i),mn()},J=(i,f,b,k,E,C,O,R,S=!1)=>{const w=i&&i.children,$=i?i.shapeFlag:0,P=f.children,{patchFlag:L,shapeFlag:W}=f;if(L>0){if(L&128){yn(w,P,b,k,E,C,O,R,S);return}else if(L&256){ln(w,P,b,k,E,C,O,R,S);return}}W&8?($&16&&Ds(w,E,C),P!==w&&d(b,P)):$&16?W&16?yn(w,P,b,k,E,C,O,R,S):Ds(w,E,C,!0):($&8&&d(b,""),W&16&&Gs(P,b,k,E,C,O,R,S))},ln=(i,f,b,k,E,C,O,R,S)=>{i=i||Kn,f=f||Kn;const w=i.length,$=f.length,P=Math.min(w,$);let L;for(L=0;L<P;L++){const W=f[L]=S?cn(f[L]):Qs(f[L]);I(i[L],W,b,null,E,C,O,R,S)}w>$?Ds(i,E,C,!0,!1,P):Gs(f,b,k,E,C,O,R,S,P)},yn=(i,f,b,k,E,C,O,R,S)=>{let w=0;const $=f.length;let P=i.length-1,L=$-1;for(;w<=P&&w<=L;){const W=i[w],Y=f[w]=S?cn(f[w]):Qs(f[w]);if(tt(W,Y))I(W,Y,b,null,E,C,O,R,S);else break;w++}for(;w<=P&&w<=L;){const W=i[P],Y=f[L]=S?cn(f[L]):Qs(f[L]);if(tt(W,Y))I(W,Y,b,null,E,C,O,R,S);else break;P--,L--}if(w>P){if(w<=L){const W=L+1,Y=W<$?f[W].el:k;for(;w<=L;)I(null,f[w]=S?cn(f[w]):Qs(f[w]),b,Y,E,C,O,R,S),w++}}else if(w>L)for(;w<=P;)Os(i[w],E,C,!0),w++;else{const W=w,Y=w,cs=new Map;for(w=Y;w<=L;w++){const qs=f[w]=S?cn(f[w]):Qs(f[w]);qs.key!=null&&cs.set(qs.key,w)}let ts,Is=0;const Ns=L-Y+1;let js=!1,zs=0;const st=new Array(Ns);for(w=0;w<Ns;w++)st[w]=0;for(w=W;w<=P;w++){const qs=i[w];if(Is>=Ns){Os(qs,E,C,!0);continue}let Xs;if(qs.key!=null)Xs=cs.get(qs.key);else for(ts=Y;ts<=L;ts++)if(st[ts-Y]===0&&tt(qs,f[ts])){Xs=ts;break}Xs===void 0?Os(qs,E,C,!0):(st[Xs-Y]=w+1,Xs>=zs?zs=Xs:js=!0,I(qs,f[Xs],b,null,E,C,O,R,S),Is++)}const Ya=js?nc(st):Kn;for(ts=Ya.length-1,w=Ns-1;w>=0;w--){const qs=Y+w,Xs=f[qs],Ja=f[qs+1],Qa=qs+1<$?Ja.el||Ye(Ja):k;st[w]===0?I(null,Xs,b,Qa,E,C,O,R,S):js&&(ts<0||w!==Ya[ts]?Hs(Xs,b,Qa,2):ts--)}}},Hs=(i,f,b,k,E=null)=>{const{el:C,type:O,transition:R,children:S,shapeFlag:w}=i;if(w&6){Hs(i.component.subTree,f,b,k);return}if(w&128){i.suspense.move(f,b,k);return}if(w&64){O.move(i,f,b,U);return}if(O===ks){e(C,f,b);for(let P=0;P<S.length;P++)Hs(S[P],f,b,k);e(i.anchor,f,b);return}if(O===Nt){V(i,f,b);return}if(k!==2&&w&1&&R)if(k===0)R.beforeEnter(C),e(C,f,b),Ps(()=>R.enter(C),E);else{const{leave:P,delayLeave:L,afterLeave:W}=R,Y=()=>{i.ctx.isUnmounted?p(C):e(C,f,b)},cs=()=>{C._isLeaving&&C[bo](!0),P(C,()=>{Y(),W&&W()})};L?L(C,Y,cs):cs()}else e(C,f,b)},Os=(i,f,b,k=!1,E=!1)=>{const{type:C,props:O,ref:R,children:S,dynamicChildren:w,shapeFlag:$,patchFlag:P,dirs:L,cacheIndex:W}=i;if(P===-2&&(E=!1),R!=null&&(fn(),ct(R,null,b,i,!0),mn()),W!=null&&(f.renderCache[W]=void 0),$&256){f.ctx.deactivate(i);return}const Y=$&1&&L,cs=!rt(i);let ts;if(cs&&(ts=O&&O.onVnodeBeforeUnmount)&&Zs(ts,f,i),$&6)Rn(i.component,b,k);else{if($&128){i.suspense.unmount(b,k);return}Y&&On(i,null,f,"beforeUnmount"),$&64?i.type.remove(i,f,b,U,k):w&&!w.hasOnce&&(C!==ks||P>0&&P&64)?Ds(w,f,b,!1,!0):(C===ks&&P&384||!E&&$&16)&&Ds(S,f,b),k&&Vn(i)}(cs&&(ts=O&&O.onVnodeUnmounted)||Y)&&Ps(()=>{ts&&Zs(ts,f,i),Y&&On(i,null,f,"unmounted")},b)},Vn=i=>{const{type:f,el:b,anchor:k,transition:E}=i;if(f===ks){Un(b,k);return}if(f===Nt){D(i);return}const C=()=>{p(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(i.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:R}=E,S=()=>O(b,C);R?R(i.el,C,S):S()}else C()},Un=(i,f)=>{let b;for(;i!==f;)b=h(i),p(i),i=b;p(f)},Rn=(i,f,b)=>{const{bum:k,scope:E,job:C,subTree:O,um:R,m:S,a:w}=i;bl(S),bl(w),k&&Rt(k),E.stop(),C&&(C.flags|=8,Os(O,i,f,b)),R&&Ps(R,f),Ps(()=>{i.isUnmounted=!0},f)},Ds=(i,f,b,k=!1,E=!1,C=0)=>{for(let O=C;O<i.length;O++)Os(i[O],f,b,k,E)},A=i=>{if(i.shapeFlag&6)return A(i.component.subTree);if(i.shapeFlag&128)return i.suspense.next();const f=h(i.anchor||i.el),b=f&&f[fo];return b?h(b):f};let q=!1;const N=(i,f,b)=>{let k;i==null?f._vnode&&(Os(f._vnode,null,null,!0),k=f._vnode.component):I(f._vnode||null,i,f,null,null,null,b),f._vnode=i,q||(q=!0,ll(k),Te(),q=!1)},U={p:I,um:Os,m:Hs,r:Vn,mt:Qn,mc:Gs,pc:J,pbc:_s,n:A,o:n};return{render:N,hydrate:void 0,createApp:Uo(N)}}function ra({type:n,props:s},a){return a==="svg"&&n==="foreignObject"||a==="mathml"&&n==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:a}function In({effect:n,job:s},a){a?(n.flags|=32,s.flags|=4):(n.flags&=-33,s.flags&=-5)}function sc(n,s){return(!n||n&&!n.pendingBranch)&&s&&!s.persisted}function Xe(n,s,a=!1){const e=n.children,p=s.children;if(_(e)&&_(p))for(let l=0;l<e.length;l++){const c=e[l];let o=p[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=p[l]=cn(p[l]),o.el=c.el),!a&&o.patchFlag!==-2&&Xe(c,o)),o.type===sa&&(o.patchFlag===-1&&(o=p[l]=cn(o)),o.el=c.el),o.type===wn&&!o.el&&(o.el=c.el)}}function nc(n){const s=n.slice(),a=[0];let e,p,l,c,o;const r=n.length;for(e=0;e<r;e++){const u=n[e];if(u!==0){if(p=a[a.length-1],n[p]<u){s[e]=p,a.push(e);continue}for(l=0,c=a.length-1;l<c;)o=l+c>>1,n[a[o]]<u?l=o+1:c=o;u<n[a[l]]&&(l>0&&(s[e]=a[l-1]),a[l]=e)}}for(l=a.length,c=a[l-1];l-- >0;)a[l]=c,c=s[c];return a}function Ze(n){const s=n.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:Ze(s)}function bl(n){if(n)for(let s=0;s<n.length;s++)n[s].flags|=8}function Ye(n){if(n.placeholder)return n.placeholder;const s=n.component;return s?Ye(s.subTree):null}const Je=n=>n.__isSuspense;function tc(n,s){s&&s.pendingBranch?_(n)?s.effects.push(...n):s.effects.push(n):co(n)}const ks=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),Nt=Symbol.for("v-stc"),dt=[];let Ms=null;function B(n=!1){dt.push(Ms=n?null:[])}function ac(){dt.pop(),Ms=dt[dt.length-1]||null}let vt=1;function Ut(n,s=!1){vt+=n,n<0&&Ms&&s&&(Ms.hasOnce=!0)}function Qe(n){return n.dynamicChildren=vt>0?Ms||Kn:null,ac(),vt>0&&Ms&&Ms.push(n),n}function K(n,s,a,e,p,l){return Qe(t(n,s,a,e,p,l,!0))}function lc(n,s,a,e,p){return Qe(T(n,s,a,e,p,!0))}function Lt(n){return n?n.__v_isVNode===!0:!1}function tt(n,s){return n.type===s.type&&n.key===s.key}const sp=({key:n})=>n??null,Pt=({ref:n,ref_key:s,ref_for:a})=>(typeof n=="number"&&(n=""+n),n!=null?fs(n)||As(n)||j(n)?{i:Fs,r:n,k:s,f:!!a}:n:null);function t(n,s=null,a=null,e=0,p=null,l=n===ks?0:1,c=!1,o=!1){const r={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&sp(s),ref:s&&Pt(s),scopeId:Oe,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:e,dynamicProps:p,dynamicChildren:null,appContext:null,ctx:Fs};return o?(za(r,a),l&128&&n.normalize(r)):a&&(r.shapeFlag|=fs(a)?8:16),vt>0&&!c&&Ms&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&Ms.push(r),r}const T=ec;function ec(n,s=null,a=null,e=0,p=null,l=!1){if((!n||n===Io)&&(n=wn),Lt(n)){const o=Zn(n,s,!0);return a&&za(o,a),vt>0&&!l&&Ms&&(o.shapeFlag&6?Ms[Ms.indexOf(n)]=o:Ms.push(o)),o.patchFlag=-2,o}if(gc(n)&&(n=n.__vccOpts),s){s=pc(s);let{class:o,style:r}=s;o&&!fs(o)&&(s.class=X(o)),as(r)&&(Ka(r)&&!_(r)&&(r=hs({},r)),s.style=zn(r))}const c=fs(n)?1:Je(n)?128:mo(n)?64:as(n)?4:j(n)?2:0;return t(n,s,a,e,p,c,l,!0)}function pc(n){return n?Ka(n)||Ge(n)?hs({},n):n:null}function Zn(n,s,a=!1,e=!1){const{props:p,ref:l,patchFlag:c,children:o,transition:r}=n,u=s?oc(p||{},s):p,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&sp(u),ref:s&&s.ref?a&&l?_(l)?l.concat(Pt(s)):[l,Pt(s)]:Pt(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==ks?c===-1?16:c|16:c,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:r,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zn(n.ssContent),ssFallback:n.ssFallback&&Zn(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return r&&e&&Wa(d,r.clone(d)),d}function g(n=" ",s=0){return T(sa,null,n,s)}function v(n,s){const a=T(Nt,null,n);return a.staticCount=s,a}function En(n="",s=!1){return s?(B(),lc(wn,null,n)):T(wn,null,n)}function Qs(n){return n==null||typeof n=="boolean"?T(wn):_(n)?T(ks,null,n.slice()):Lt(n)?cn(n):T(sa,null,String(n))}function cn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zn(n)}function za(n,s){let a=0;const{shapeFlag:e}=n;if(s==null)s=null;else if(_(s))a=16;else if(typeof s=="object")if(e&65){const p=s.default;p&&(p._c&&(p._d=!1),za(n,p()),p._c&&(p._d=!0));return}else{a=32;const p=s._;!p&&!Ge(s)?s._ctx=Fs:p===3&&Fs&&(Fs.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else j(s)?(s={default:s,_ctx:Fs},a=32):(s=String(s),e&64?(a=16,s=[g(s)]):a=8);n.children=s,n.shapeFlag|=a}function oc(...n){const s={};for(let a=0;a<n.length;a++){const e=n[a];for(const p in e)if(p==="class")s.class!==e.class&&(s.class=X([s.class,e.class]));else if(p==="style")s.style=zn([s.style,e.style]);else if(Gt(p)){const l=s[p],c=e[p];c&&l!==c&&!(_(l)&&l.includes(c))&&(s[p]=l?[].concat(l,c):c)}else p!==""&&(s[p]=e[p])}return s}function Zs(n,s,a,e=null){an(n,s,7,[a,e])}const cc=Ue();let rc=0;function ic(n,s,a){const e=n.type,p=(s?s.appContext:n.appContext)||cc,l={uid:rc++,vnode:n,type:e,parent:s,appContext:p,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(p.provides),ids:s?s.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:We(e,p),emitsOptions:Le(e,p),emit:null,emitted:null,propsDefaults:ps,inheritAttrs:e.inheritAttrs,ctx:ps,data:ps,props:ps,attrs:ps,slots:ps,refs:ps,setupState:ps,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=s?s.root:l,l.emit=$o.bind(null,l),n.ce&&n.ce(l),l}let Cs=null;const dc=()=>Cs||Fs;let $t,Ta;{const n=zt(),s=(a,e)=>{let p;return(p=n[a])||(p=n[a]=[]),p.push(e),l=>{p.length>1?p.forEach(c=>c(l)):p[0](l)}};$t=s("__VUE_INSTANCE_SETTERS__",a=>Cs=a),Ta=s("__VUE_SSR_SETTERS__",a=>gt=a)}const At=n=>{const s=Cs;return $t(n),n.scope.on(),()=>{n.scope.off(),$t(s)}},vl=()=>{Cs&&Cs.scope.off(),$t(null)};function np(n){return n.vnode.shapeFlag&4}let gt=!1;function uc(n,s=!1,a=!1){s&&Ta(s);const{props:e,children:p}=n.vnode,l=np(n);Ho(n,e,l,s),Zo(n,p,a||s);const c=l?fc(n,s):void 0;return s&&Ta(!1),c}function fc(n,s){const a=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Po);const{setup:e}=a;if(e){fn();const p=n.setupContext=e.length>1?bc(n):null,l=At(n),c=Ct(e,n,0,[n.props,p]),o=Ql(c);if(mn(),l(),(o||n.sp)&&!rt(n)&&xe(n),o){if(c.then(vl,vl),s)return c.then(r=>{gl(n,r)}).catch(r=>{Yt(r,n,0)});n.asyncDep=c}else gl(n,c)}else tp(n)}function gl(n,s,a){j(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:as(s)&&(n.setupState=Ee(s)),tp(n)}function tp(n,s,a){const e=n.type;n.render||(n.render=e.render||nn);{const p=At(n);fn();try{xo(n)}finally{mn(),p()}}}const mc={get(n,s){return ys(n,"get",""),n[s]}};function bc(n){const s=a=>{n.exposed=a||{}};return{attrs:new Proxy(n.attrs,mc),slots:n.slots,emit:n.emit,expose:s}}function na(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ee(Jp(n.exposed)),{get(s,a){if(a in s)return s[a];if(a in it)return it[a](n)},has(s,a){return a in s||a in it}})):n.proxy}function vc(n,s=!0){return j(n)?n.displayName||n.name:n.name||s&&n.__name}function gc(n){return j(n)&&"__vccOpts"in n}const Ls=(n,s)=>ao(n,s,gt);function ap(n,s,a){try{Ut(-1);const e=arguments.length;return e===2?as(s)&&!_(s)?Lt(s)?T(n,null,[s]):T(n,s):T(n,null,s):(e>3?a=Array.prototype.slice.call(arguments,2):e===3&&Lt(a)&&(a=[a]),T(n,s,a))}finally{Ut(1)}}const hc="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const hl=typeof window<"u"&&window.trustedTypes;if(hl)try{Ra=hl.createPolicy("vue",{createHTML:n=>n})}catch{}const lp=Ra?n=>Ra.createHTML(n):n=>n,yc="http://www.w3.org/2000/svg",kc="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,yl=on&&on.createElement("template"),Cc={insert:(n,s,a)=>{s.insertBefore(n,a||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,a,e)=>{const p=s==="svg"?on.createElementNS(yc,n):s==="mathml"?on.createElementNS(kc,n):a?on.createElement(n,{is:a}):on.createElement(n);return n==="select"&&e&&e.multiple!=null&&p.setAttribute("multiple",e.multiple),p},createText:n=>on.createTextNode(n),createComment:n=>on.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>on.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,a,e,p,l){const c=a?a.previousSibling:s.lastChild;if(p&&(p===l||p.nextSibling))for(;s.insertBefore(p.cloneNode(!0),a),!(p===l||!(p=p.nextSibling)););else{yl.innerHTML=lp(e==="svg"?`<svg>${n}</svg>`:e==="mathml"?`<math>${n}</math>`:n);const o=yl.content;if(e==="svg"||e==="mathml"){const r=o.firstChild;for(;r.firstChild;)o.appendChild(r.firstChild);o.removeChild(r)}s.insertBefore(o,a)}return[c?c.nextSibling:s.firstChild,a?a.previousSibling:s.lastChild]}},Ac=Symbol("_vtc");function Ec(n,s,a){const e=n[Ac];e&&(s=(s?[s,...e]:[...e]).join(" ")),s==null?n.removeAttribute("class"):a?n.setAttribute("class",s):n.className=s}const kl=Symbol("_vod"),wc=Symbol("_vsh"),Sc=Symbol(""),Tc=/(?:^|;)\s*display\s*:/;function Rc(n,s,a){const e=n.style,p=fs(a);let l=!1;if(a&&!p){if(s)if(fs(s))for(const c of s.split(";")){const o=c.slice(0,c.indexOf(":")).trim();a[o]==null&&xt(e,o,"")}else for(const c in s)a[c]==null&&xt(e,c,"");for(const c in a)c==="display"&&(l=!0),xt(e,c,a[c])}else if(p){if(s!==a){const c=e[Sc];c&&(a+=";"+c),e.cssText=a,l=Tc.test(a)}}else s&&n.removeAttribute("style");kl in n&&(n[kl]=l?e.display:"",n[wc]&&(e.display="none"))}const Cl=/\s*!important$/;function xt(n,s,a){if(_(a))a.forEach(e=>xt(n,s,e));else if(a==null&&(a=""),s.startsWith("--"))n.setProperty(s,a);else{const e=Oc(n,s);Cl.test(a)?n.setProperty(Sn(e),a.replace(Cl,""),"important"):n[e]=a}}const Al=["Webkit","Moz","ms"],ia={};function Oc(n,s){const a=ia[s];if(a)return a;let e=Rs(s);if(e!=="filter"&&e in n)return ia[s]=e;e=Ht(e);for(let p=0;p<Al.length;p++){const l=Al[p]+e;if(l in n)return ia[s]=l}return s}const El="http://www.w3.org/1999/xlink";function wl(n,s,a,e,p,l=Ip(s)){e&&s.startsWith("xlink:")?a==null?n.removeAttributeNS(El,s.slice(6,s.length)):n.setAttributeNS(El,s,a):a==null||l&&!ae(a)?n.removeAttribute(s):n.setAttribute(s,l?"":tn(a)?String(a):a)}function Sl(n,s,a,e,p){if(s==="innerHTML"||s==="textContent"){a!=null&&(n[s]=s==="innerHTML"?lp(a):a);return}const l=n.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?n.getAttribute("value")||"":n.value,r=a==null?n.type==="checkbox"?"on":"":String(a);(o!==r||!("_value"in n))&&(n.value=r),a==null&&n.removeAttribute(s),n._value=a;return}let c=!1;if(a===""||a==null){const o=typeof n[s];o==="boolean"?a=ae(a):a==null&&o==="string"?(a="",c=!0):o==="number"&&(a=0,c=!0)}try{n[s]=a}catch{}c&&n.removeAttribute(p||s)}function xn(n,s,a,e){n.addEventListener(s,a,e)}function Ic(n,s,a,e){n.removeEventListener(s,a,e)}const Tl=Symbol("_vei");function Nc(n,s,a,e,p=null){const l=n[Tl]||(n[Tl]={}),c=l[s];if(e&&c)c.value=e;else{const[o,r]=Pc(s);if(e){const u=l[s]=Fc(e,p);xn(n,o,u,r)}else c&&(Ic(n,o,c,r),l[s]=void 0)}}const Rl=/(?:Once|Passive|Capture)$/;function Pc(n){let s;if(Rl.test(n)){s={};let e;for(;e=n.match(Rl);)n=n.slice(0,n.length-e[0].length),s[e[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sn(n.slice(2)),s]}let da=0;const xc=Promise.resolve(),qc=()=>da||(xc.then(()=>da=0),da=Date.now());function Fc(n,s){const a=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=a.attached)return;an(Mc(e,a.value),s,5,[e])};return a.value=n,a.attached=qc(),a}function Mc(n,s){if(_(s)){const a=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{a.call(n),n._stopped=!0},s.map(e=>p=>!p._stopped&&e&&e(p))}else return s}const Ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dc=(n,s,a,e,p,l)=>{const c=p==="svg";s==="class"?Ec(n,e,c):s==="style"?Rc(n,a,e):Gt(s)?qa(s)||Nc(n,s,a,e,l):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Vc(n,s,e,c))?(Sl(n,s,e),!n.tagName.includes("-")&&(s==="value"||s==="checked"||s==="selected")&&wl(n,s,e,c,l,s!=="value")):n._isVueCE&&(Uc(n,s)||n._def.__asyncLoader&&(/[A-Z]/.test(s)||!fs(e)))?Sl(n,Rs(s),e,l,s):(s==="true-value"?n._trueValue=e:s==="false-value"&&(n._falseValue=e),wl(n,s,e,c))};function Vc(n,s,a,e){if(e)return!!(s==="innerHTML"||s==="textContent"||s in n&&Ol(s)&&j(a));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="autocorrect"||s==="sandbox"&&n.tagName==="IFRAME"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const p=n.tagName;if(p==="IMG"||p==="VIDEO"||p==="CANVAS"||p==="SOURCE")return!1}return Ol(s)&&fs(a)?!1:s in n}function Uc(n,s){const a=n._def.props;if(!a)return!1;const e=Rs(s);return Array.isArray(a)?a.some(p=>Rs(p)===e):Object.keys(a).some(p=>Rs(p)===e)}const Bt=n=>{const s=n.props["onUpdate:modelValue"]||!1;return _(s)?a=>Rt(s,a):s};function Lc(n){n.target.composing=!0}function Il(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const jn=Symbol("_assign");function Nl(n,s,a){return s&&(n=n.trim()),a&&(n=jt(n)),n}const ws={created(n,{modifiers:{lazy:s,trim:a,number:e}},p){n[jn]=Bt(p);const l=e||p.props&&p.props.type==="number";xn(n,s?"change":"input",c=>{c.target.composing||n[jn](Nl(n.value,a,l))}),(a||l)&&xn(n,"change",()=>{n.value=Nl(n.value,a,l)}),s||(xn(n,"compositionstart",Lc),xn(n,"compositionend",Il),xn(n,"change",Il))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,oldValue:a,modifiers:{lazy:e,trim:p,number:l}},c){if(n[jn]=Bt(c),n.composing)return;const o=(l||n.type==="number")&&!/^0\d/.test(n.value)?jt(n.value):n.value,r=s??"";o!==r&&(document.activeElement===n&&n.type!=="range"&&(e&&s===a||p&&n.value.trim()===r)||(n.value=r))}},Pl={deep:!0,created(n,{value:s,modifiers:{number:a}},e){const p=_t(s);xn(n,"change",()=>{const l=Array.prototype.filter.call(n.options,c=>c.selected).map(c=>a?jt(Kt(c)):Kt(c));n[jn](n.multiple?p?new Set(l):l:l[0]),n._assigning=!0,Ga(()=>{n._assigning=!1})}),n[jn]=Bt(e)},mounted(n,{value:s}){xl(n,s)},beforeUpdate(n,s,a){n[jn]=Bt(a)},updated(n,{value:s}){n._assigning||xl(n,s)}};function xl(n,s){const a=n.multiple,e=_(s);if(!(a&&!e&&!_t(s))){for(let p=0,l=n.options.length;p<l;p++){const c=n.options[p],o=Kt(c);if(a)if(e){const r=typeof o;r==="string"||r==="number"?c.selected=s.some(u=>String(u)===String(o)):c.selected=Pp(s,o)>-1}else c.selected=s.has(o);else if(kt(Kt(c),s)){n.selectedIndex!==p&&(n.selectedIndex=p);return}}!a&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Kt(n){return"_value"in n?n._value:n.value}const $c=["ctrl","shift","alt","meta"],Bc={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,s)=>$c.some(a=>n[`${a}Key`]&&!s.includes(a))},ql=(n,s)=>{if(!n)return n;const a=n._withMods||(n._withMods={}),e=s.join(".");return a[e]||(a[e]=(p,...l)=>{for(let c=0;c<s.length;c++){const o=Bc[s[c]];if(o&&o(p,s))return}return n(p,...l)})},Kc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fl=(n,s)=>{const a=n._withKeys||(n._withKeys={}),e=s.join(".");return a[e]||(a[e]=p=>{if(!("key"in p))return;const l=Sn(p.key);if(s.some(c=>c===l||Kc[c]===l))return n(p)})},Gc=hs({patchProp:Dc},Cc);let Ml;function _c(){return Ml||(Ml=Jo(Gc))}const Wc=(...n)=>{const s=_c().createApp(...n),{mount:a}=s;return s.mount=e=>{const p=jc(e);if(!p)return;const l=s._component;!j(l)&&!l.render&&!l.template&&(l.template=p.innerHTML),p.nodeType===1&&(p.textContent="");const c=a(p,!1,Hc(p));return p instanceof Element&&(p.removeAttribute("v-cloak"),p.setAttribute("data-v-app","")),c},s};function Hc(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function jc(n){return fs(n)?document.querySelector(n):n}const is=(n,s)=>{const a=n.__vccOpts||n;for(const[e,p]of s)a[e]=p;return a},zc={name:"SearchBox",data(){return{query:"",isFocused:!1,showResults:!1,selectedIndex:0,results:[]}},computed:{searchIndex(){return[{title:"DFT 基本原理",path:"/theory",icon:"📐",keywords:"dft 密度泛函 theory 理论 hohenberg kohn"},{title:"交换关联泛函",path:"/theory",icon:"📐",keywords:"lda gga pbe hse 泛函 functional"},{title:"赝势与基组",path:"/theory",icon:"📐",keywords:"赝势 paw pseudopotential 基组 plane wave"},{title:"K 点采样",path:"/theory",icon:"📐",keywords:"kpoint k点 布里渊区 brillouin mesh"},{title:"SCF 迭代",path:"/theory",icon:"📐",keywords:"scf 自洽场 迭代 self consistent"},{title:"INCAR 文件",path:"/input",icon:"📁",keywords:"incar 参数 设置 encut ediff ibrion isif"},{title:"POSCAR 文件",path:"/input",icon:"📁",keywords:"poscar 结构 晶格 lattice 坐标 direct cartesian"},{title:"KPOINTS 文件",path:"/input",icon:"📁",keywords:"kpoints 网格 mesh gamma monkhorst"},{title:"结构优化",path:"/tasks",icon:"📊",keywords:"relax 优化 弛豫 ion optimization"},{title:"态密度 DOS",path:"/tasks",icon:"📊",keywords:"dos 密度 states density of states"},{title:"能带结构",path:"/tasks",icon:"📊",keywords:"band 能带 bandstructure high symmetry"},{title:"表面计算",path:"/tasks",icon:"🧊",keywords:"surface 表面 slab 模型 adsorption 吸附"},{title:"缺陷计算",path:"/tasks",icon:"💎",keywords:"defect 缺陷 vacancy 空位 interstitial 间隙"},{title:"声子计算",path:"/tasks",icon:"🔊",keywords:"phonon 声子 phonopy 振动 frequency 频率"},{title:"形成能计算",path:"/tasks",icon:"🧪",keywords:"formation 形成能 energy thermodynamics 热力学"},{title:"吸附能计算",path:"/tasks",icon:"🧲",keywords:"adsorption 吸附 binding 结合 energy 能量"},{title:"输出文件解读",path:"/output",icon:"📋",keywords:"outcar oszicar contcar 输出 output 结果"},{title:"收敛性测试",path:"/output",icon:"🎯",keywords:"convergence 收敛 encut kpoint 测试 test"},{title:"SCF 不收敛",path:"/errors",icon:"🚨",keywords:"scf 不收敛 convergence 失败 error 错误"},{title:"DENTET 错误",path:"/errors",icon:"🚨",keywords:"dentet nbands 能带 band 错误 error"},{title:"ZBRENT 错误",path:"/errors",icon:"🚨",keywords:"zbrent 线搜索 搜索失败 error"},{title:"内存不足",path:"/errors",icon:"🚨",keywords:"memory 内存 oom out of killed"},{title:"VESTA 工具",path:"/tools",icon:"🛠️",keywords:"vesta 可视化 visualization 结构 structure"},{title:"VASPKIT 工具",path:"/tools",icon:"🛠️",keywords:"vaspkit 后处理 post process 处理工具"},{title:"pymatgen",path:"/tools",icon:"🛠️",keywords:"pymatgen python 材料 material 分析 analysis"},{title:"phonopy",path:"/tools",icon:"🛠️",keywords:"phonopy 声子 phonon 振动 vibration"},{title:"ENCUT 计算器",path:"/tools/calculator",icon:"🔧",keywords:"encut 截断能 cutoff 计算器 calculator"},{title:"K 点生成器",path:"/tools/calculator",icon:"🔧",keywords:"kpoint k点 生成器 generator 网格 mesh"}]}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},methods:{handleKeydown(n){(n.ctrlKey||n.metaKey)&&n.key==="k"&&(n.preventDefault(),this.$refs.searchInput.focus())},search(){if(!this.query.trim()){this.results=[],this.showResults=!1;return}const n=this.query.toLowerCase();this.results=this.searchIndex.filter(s=>s.title.toLowerCase().includes(n)||s.keywords.toLowerCase().includes(n)).slice(0,8),this.showResults=!0,this.selectedIndex=0},navigateTo(n){this.$router.push(n.path),this.close()},navigateToFirst(){this.results.length>0&&this.navigateTo(this.results[this.selectedIndex])},handleBlur(){setTimeout(()=>{this.isFocused=!1,this.showResults=!1},200)},close(){this.query="",this.showResults=!1,this.$refs.searchInput.blur()}}},Xc={class:"search-container"},Zc={key:0,class:"shortcut"},Yc={key:0,class:"search-results"},Jc=["onClick","onMouseenter"],Qc={class:"result-icon"},sr={class:"result-content"},nr={class:"result-title"},tr={class:"result-path"},ar={key:1,class:"search-results"},lr={class:"no-results"};function er(n,s,a,e,p,l){return B(),K("div",Xc,[t("div",{class:X(["search-box",{active:p.isFocused}])},[s[7]||(s[7]=t("svg",{class:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[t("circle",{cx:"11",cy:"11",r:"8"}),t("path",{d:"m21 21-4.35-4.35"})],-1)),gs(t("input",{ref:"searchInput","onUpdate:modelValue":s[0]||(s[0]=c=>p.query=c),type:"text",placeholder:"搜索内容... (Ctrl+K)",onFocus:s[1]||(s[1]=c=>p.isFocused=!0),onBlur:s[2]||(s[2]=(...c)=>l.handleBlur&&l.handleBlur(...c)),onInput:s[3]||(s[3]=(...c)=>l.search&&l.search(...c)),onKeydown:[s[4]||(s[4]=Fl((...c)=>l.close&&l.close(...c),["escape"])),s[5]||(s[5]=Fl((...c)=>l.navigateToFirst&&l.navigateToFirst(...c),["enter"]))]},null,544),[[ws,p.query]]),p.isFocused?(B(),K("button",{key:1,class:"close-btn",onClick:s[6]||(s[6]=(...c)=>l.close&&l.close(...c))},"×")):(B(),K("kbd",Zc,"Ctrl+K"))],2),p.showResults&&p.results.length>0?(B(),K("div",Yc,[(B(!0),K(ks,null,Pn(p.results,(c,o)=>(B(),K("div",{key:o,class:X(["search-result-item",{active:o===p.selectedIndex}]),onClick:r=>l.navigateTo(c),onMouseenter:r=>p.selectedIndex=o},[t("div",Qc,z(c.icon),1),t("div",sr,[t("div",nr,z(c.title),1),t("div",tr,z(c.path),1)])],42,Jc))),128))])):En("",!0),p.showResults&&p.query&&p.results.length===0?(B(),K("div",ar,[t("div",lr,[s[8]||(s[8]=t("div",{class:"no-results-icon"},"🔍",-1)),t("div",null,'未找到 "'+z(p.query)+'" 的相关内容',1)])])):En("",!0)])}const pr=is(zc,[["render",er],["__scopeId","data-v-8ba45772"]]),or={name:"HeaderNav",components:{SearchBox:pr},methods:{toggleSidebar(){this.$emit("toggle-sidebar")}}},cr={class:"hdr"},rr={class:"hdr-nav"},ir=["onClick"],dr=["onClick"],ur=["onClick"],fr=["onClick"],mr=["onClick"],br=["onClick"];function vr(n,s,a,e,p,l){const c=os("router-link"),o=os("SearchBox");return B(),K("header",cr,[t("button",{class:"mtog",onClick:s[0]||(s[0]=(...r)=>l.toggleSidebar&&l.toggleSidebar(...r))},"☰"),T(c,{to:"/",class:"hdr-logo"},{default:M(()=>[...s[1]||(s[1]=[t("div",{class:"ico"},"V",-1),t("div",{class:"txt"},[t("span",null,"VASP"),g("Learn")],-1)])]),_:1}),T(o),t("nav",rr,[T(c,{to:"/",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"首页",10,ir)]),_:1}),T(c,{to:"/theory",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"理论",10,dr)]),_:1}),T(c,{to:"/input",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"输入文件",10,ur)]),_:1}),T(c,{to:"/output",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"结果分析",10,fr)]),_:1}),T(c,{to:"/errors",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"错误诊断",10,mr)]),_:1}),T(c,{to:"/tools",custom:""},{default:M(({navigate:r,isActive:u})=>[t("button",{onClick:r,class:X({active:u})},"工具",10,br)]),_:1})])])}const gr=is(or,[["render",vr],["__scopeId","data-v-95f59a4e"]]),hr={name:"SidebarNav",props:{isOpen:Boolean},methods:{closeSidebar(){this.$emit("close-sidebar")}}},yr={class:"sb-sec"},kr=["onClick"],Cr=["onClick"],Ar=["onClick"],Er=["onClick"],wr=["onClick"],Sr=["onClick"],Tr=["onClick"],Rr={class:"sb-sec"},Or=["onClick"],Ir=["onClick"],Nr={class:"sb-sec"},Pr=["onClick"],xr=["onClick"],qr=["onClick"],Fr=["onClick"],Mr=["onClick"],Dr=["onClick"],Vr={class:"sb-sec"},Ur=["onClick"],Lr=["onClick"];function $r(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",null,[t("div",{class:X(["sbov",{show:a.isOpen}]),onClick:s[0]||(s[0]=(...o)=>l.closeSidebar&&l.closeSidebar(...o))},null,2),t("aside",{class:X(["sb",{open:a.isOpen}])},[t("div",yr,[s[8]||(s[8]=t("div",{class:"sb-lbl"},"入门指南",-1)),T(c,{to:"/theory",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[1]||(s[1]=[t("span",{class:"ic"},"📐",-1),g("理论基础 ",-1)])],10,kr)]),_:1}),T(c,{to:"/input",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[2]||(s[2]=[t("span",{class:"ic"},"📁",-1),g("输入文件 ",-1)])],10,Cr)]),_:1}),T(c,{to:"/tasks",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[3]||(s[3]=[t("span",{class:"ic"},"📊",-1),g("计算任务 ",-1)])],10,Ar)]),_:1}),T(c,{to:"/surface",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[4]||(s[4]=[t("span",{class:"ic"},"🧊",-1),g("表面计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Er)]),_:1}),T(c,{to:"/defect",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[5]||(s[5]=[t("span",{class:"ic"},"💎",-1),g("缺陷计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,wr)]),_:1}),T(c,{to:"/phonon",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[6]||(s[6]=[t("span",{class:"ic"},"🔊",-1),g("声子计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Sr)]),_:1}),T(c,{to:"/thermoelectric",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[7]||(s[7]=[t("span",{class:"ic"},"⚡",-1),g("热电计算",-1),t("span",{class:"bd bd-new"},"NEW",-1)])],10,Tr)]),_:1})]),t("div",Rr,[s[11]||(s[11]=t("div",{class:"sb-lbl"},"结果分析",-1)),T(c,{to:"/output",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[9]||(s[9]=[t("span",{class:"ic"},"📋",-1),g("输出文件 ",-1)])],10,Or)]),_:1}),T(c,{to:"/convergence",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[10]||(s[10]=[t("span",{class:"ic"},"🎯",-1),g("收敛性测试 ",-1)])],10,Ir)]),_:1})]),t("div",Nr,[s[18]||(s[18]=t("div",{class:"sb-lbl"},"错误诊断",-1)),T(c,{to:"/errors",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[12]||(s[12]=[t("span",{class:"ic"},"🚨",-1),g("诊断总览",-1),t("span",{class:"bd bd-hot"},"重要",-1)])],10,Pr)]),_:1}),T(c,{to:"/errors/scf",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[13]||(s[13]=[t("span",{class:"ic"},"⚡",-1),g("SCF 不收敛",-1),t("span",{class:"bd bd-hot"},"高频",-1)])],10,xr)]),_:1}),T(c,{to:"/errors/ion",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[14]||(s[14]=[t("span",{class:"ic"},"💥",-1),g("离子步问题 ",-1)])],10,qr)]),_:1}),T(c,{to:"/errors/memory",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[15]||(s[15]=[t("span",{class:"ic"},"💾",-1),g("内存与性能 ",-1)])],10,Fr)]),_:1}),T(c,{to:"/errors/files",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[16]||(s[16]=[t("span",{class:"ic"},"📂",-1),g("文件错误 ",-1)])],10,Mr)]),_:1}),T(c,{to:"/errors/output",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[17]||(s[17]=[t("span",{class:"ic"},"🔍",-1),g("输出异常 ",-1)])],10,Dr)]),_:1})]),t("div",Vr,[s[21]||(s[21]=t("div",{class:"sb-lbl"},"工具与资源",-1)),T(c,{to:"/tools",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[19]||(s[19]=[t("span",{class:"ic"},"🛠️",-1),g("辅助工具 ",-1)])],10,Ur)]),_:1}),T(c,{to:"/cheatsheet",custom:""},{default:M(({navigate:o,isActive:r})=>[t("div",{class:X(["sb-it",{active:r}]),onClick:o},[...s[20]||(s[20]=[t("span",{class:"ic"},"📝",-1),g("速查手册 ",-1)])],10,Lr)]),_:1})])],2)])}const Br=is(hr,[["render",$r],["__scopeId","data-v-af15b138"]]),Kr={name:"App",components:{HeaderNav:gr,SidebarNav:Br},data(){return{sidebarOpen:!1}},methods:{toggleSidebar(){this.sidebarOpen=!this.sidebarOpen},closeSidebar(){this.sidebarOpen=!1}},watch:{$route(){this.sidebarOpen=!1}}},Gr={id:"app"},_r={class:"mn"};function Wr(n,s,a,e,p,l){const c=os("HeaderNav"),o=os("SidebarNav"),r=os("router-view");return B(),K("div",Gr,[T(c,{onToggleSidebar:l.toggleSidebar},null,8,["onToggleSidebar"]),T(o,{isOpen:p.sidebarOpen,onCloseSidebar:l.closeSidebar},null,8,["isOpen","onCloseSidebar"]),t("main",_r,[T(r)])])}const Hr=is(Kr,[["render",Wr]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Bn=typeof document<"u";function ep(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function jr(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ep(n.default)}const Q=Object.assign;function ua(n,s){const a={};for(const e in s){const p=s[e];a[e]=Ks(p)?p.map(n):n(p)}return a}const ut=()=>{},Ks=Array.isArray;function Dl(n,s){const a={};for(const e in n)a[e]=e in s?s[e]:n[e];return a}const pp=/#/g,zr=/&/g,Xr=/\//g,Zr=/=/g,Yr=/\?/g,op=/\+/g,Jr=/%5B/g,Qr=/%5D/g,cp=/%5E/g,si=/%60/g,rp=/%7B/g,ni=/%7C/g,ip=/%7D/g,ti=/%20/g;function Xa(n){return n==null?"":encodeURI(""+n).replace(ni,"|").replace(Jr,"[").replace(Qr,"]")}function ai(n){return Xa(n).replace(rp,"{").replace(ip,"}").replace(cp,"^")}function Oa(n){return Xa(n).replace(op,"%2B").replace(ti,"+").replace(pp,"%23").replace(zr,"%26").replace(si,"`").replace(rp,"{").replace(ip,"}").replace(cp,"^")}function li(n){return Oa(n).replace(Zr,"%3D")}function ei(n){return Xa(n).replace(pp,"%23").replace(Yr,"%3F")}function pi(n){return ei(n).replace(Xr,"%2F")}function ht(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const oi=/\/$/,ci=n=>n.replace(oi,"");function fa(n,s,a="/"){let e,p={},l="",c="";const o=s.indexOf("#");let r=s.indexOf("?");return r=o>=0&&r>o?-1:r,r>=0&&(e=s.slice(0,r),l=s.slice(r,o>0?o:s.length),p=n(l.slice(1))),o>=0&&(e=e||s.slice(0,o),c=s.slice(o,s.length)),e=ui(e??s,a),{fullPath:e+l+c,path:e,query:p,hash:ht(c)}}function ri(n,s){const a=s.query?n(s.query):"";return s.path+(a&&"?")+a+(s.hash||"")}function Vl(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function ii(n,s,a){const e=s.matched.length-1,p=a.matched.length-1;return e>-1&&e===p&&Yn(s.matched[e],a.matched[p])&&dp(s.params,a.params)&&n(s.query)===n(a.query)&&s.hash===a.hash}function Yn(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function dp(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(var a in n)if(!di(n[a],s[a]))return!1;return!0}function di(n,s){return Ks(n)?Ul(n,s):Ks(s)?Ul(s,n):(n==null?void 0:n.valueOf())===(s==null?void 0:s.valueOf())}function Ul(n,s){return Ks(s)?n.length===s.length&&n.every((a,e)=>a===s[e]):n.length===1&&n[0]===s}function ui(n,s){if(n.startsWith("/"))return n;if(!n)return s;const a=s.split("/"),e=n.split("/"),p=e[e.length-1];(p===".."||p===".")&&e.push("");let l=a.length-1,c,o;for(c=0;c<e.length;c++)if(o=e[c],o!==".")if(o==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+e.slice(c).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ia=function(n){return n.pop="pop",n.push="push",n}({}),ma=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function fi(n){if(!n)if(Bn){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ci(n)}const mi=/^[^#]+#/;function bi(n,s){return n.replace(mi,"#")+s}function vi(n,s){const a=document.documentElement.getBoundingClientRect(),e=n.getBoundingClientRect();return{behavior:s.behavior,left:e.left-a.left-(s.left||0),top:e.top-a.top-(s.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function gi(n){let s;if("el"in n){const a=n.el,e=typeof a=="string"&&a.startsWith("#"),p=typeof a=="string"?e?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!p)return;s=vi(p,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.scrollX,s.top!=null?s.top:window.scrollY)}function Ll(n,s){return(history.state?history.state.position-s:-1)+n}const Na=new Map;function hi(n,s){Na.set(n,s)}function yi(n){const s=Na.get(n);return Na.delete(n),s}function ki(n){return typeof n=="string"||n&&typeof n=="object"}function up(n){return typeof n=="string"||typeof n=="symbol"}let us=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const fp=Symbol("");us.MATCHER_NOT_FOUND+"",us.NAVIGATION_GUARD_REDIRECT+"",us.NAVIGATION_ABORTED+"",us.NAVIGATION_CANCELLED+"",us.NAVIGATION_DUPLICATED+"";function Jn(n,s){return Q(new Error,{type:n,[fp]:!0},s)}function pn(n,s){return n instanceof Error&&fp in n&&(s==null||!!(n.type&s))}const Ci=["params","query","hash"];function Ai(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const s={};for(const a of Ci)a in n&&(s[a]=n[a]);return JSON.stringify(s,null,2)}function Ei(n){const s={};if(n===""||n==="?")return s;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let e=0;e<a.length;++e){const p=a[e].replace(op," "),l=p.indexOf("="),c=ht(l<0?p:p.slice(0,l)),o=l<0?null:ht(p.slice(l+1));if(c in s){let r=s[c];Ks(r)||(r=s[c]=[r]),r.push(o)}else s[c]=o}return s}function $l(n){let s="";for(let a in n){const e=n[a];if(a=li(a),e==null){e!==void 0&&(s+=(s.length?"&":"")+a);continue}(Ks(e)?e.map(p=>p&&Oa(p)):[e&&Oa(e)]).forEach(p=>{p!==void 0&&(s+=(s.length?"&":"")+a,p!=null&&(s+="="+p))})}return s}function wi(n){const s={};for(const a in n){const e=n[a];e!==void 0&&(s[a]=Ks(e)?e.map(p=>p==null?null:""+p):e==null?e:""+e)}return s}const Si=Symbol(""),Bl=Symbol(""),Za=Symbol(""),mp=Symbol(""),Pa=Symbol("");function at(){let n=[];function s(e){return n.push(e),()=>{const p=n.indexOf(e);p>-1&&n.splice(p,1)}}function a(){n=[]}return{add:s,list:()=>n.slice(),reset:a}}function An(n,s,a,e,p,l=c=>c()){const c=e&&(e.enterCallbacks[p]=e.enterCallbacks[p]||[]);return()=>new Promise((o,r)=>{const u=h=>{h===!1?r(Jn(us.NAVIGATION_ABORTED,{from:a,to:s})):h instanceof Error?r(h):ki(h)?r(Jn(us.NAVIGATION_GUARD_REDIRECT,{from:s,to:h})):(c&&e.enterCallbacks[p]===c&&typeof h=="function"&&c.push(h),o())},d=l(()=>n.call(e&&e.instances[p],s,a,u));let m=Promise.resolve(d);n.length<3&&(m=m.then(u)),m.catch(h=>r(h))})}function ba(n,s,a,e,p=l=>l()){const l=[];for(const c of n)for(const o in c.components){let r=c.components[o];if(!(s!=="beforeRouteEnter"&&!c.instances[o]))if(ep(r)){const u=(r.__vccOpts||r)[s];u&&l.push(An(u,a,e,c,o,p))}else{let u=r();l.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${o}" at "${c.path}"`);const m=jr(d)?d.default:d;c.mods[o]=d,c.components[o]=m;const h=(m.__vccOpts||m)[s];return h&&An(h,a,e,c,o,p)()}))}}return l}function Ti(n,s){const a=[],e=[],p=[],l=Math.max(s.matched.length,n.matched.length);for(let c=0;c<l;c++){const o=s.matched[c];o&&(n.matched.find(u=>Yn(u,o))?e.push(o):a.push(o));const r=n.matched[c];r&&(s.matched.find(u=>Yn(u,r))||p.push(r))}return[a,e,p]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ri=()=>location.protocol+"//"+location.host;function bp(n,s){const{pathname:a,search:e,hash:p}=s,l=n.indexOf("#");if(l>-1){let c=p.includes(n.slice(l))?n.slice(l).length:1,o=p.slice(c);return o[0]!=="/"&&(o="/"+o),Vl(o,"")}return Vl(a,n)+e+p}function Oi(n,s,a,e){let p=[],l=[],c=null;const o=({state:h})=>{const y=bp(n,location),F=a.value,I=s.value;let H=0;if(h){if(a.value=y,s.value=h,c&&c===F){c=null;return}H=I?h.position-I.position:0}else e(y);p.forEach(G=>{G(a.value,F,{delta:H,type:Ia.pop,direction:H?H>0?ma.forward:ma.back:ma.unknown})})};function r(){c=a.value}function u(h){p.push(h);const y=()=>{const F=p.indexOf(h);F>-1&&p.splice(F,1)};return l.push(y),y}function d(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Q({},h.state,{scroll:ta()}),"")}}function m(){for(const h of l)h();l=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:r,listen:u,destroy:m}}function Kl(n,s,a,e=!1,p=!1){return{back:n,current:s,forward:a,replaced:e,position:window.history.length,scroll:p?ta():null}}function Ii(n){const{history:s,location:a}=window,e={value:bp(n,a)},p={value:s.state};p.value||l(e.value,{back:null,current:e.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function l(r,u,d){const m=n.indexOf("#"),h=m>-1?(a.host&&document.querySelector("base")?n:n.slice(m))+r:Ri()+n+r;try{s[d?"replaceState":"pushState"](u,"",h),p.value=u}catch(y){console.error(y),a[d?"replace":"assign"](h)}}function c(r,u){l(r,Q({},s.state,Kl(p.value.back,r,p.value.forward,!0),u,{position:p.value.position}),!0),e.value=r}function o(r,u){const d=Q({},p.value,s.state,{forward:r,scroll:ta()});l(d.current,d,!0),l(r,Q({},Kl(e.value,r,null),{position:d.position+1},u),!1),e.value=r}return{location:e,state:p,push:o,replace:c}}function Ni(n){n=fi(n);const s=Ii(n),a=Oi(n,s.state,s.location,s.replace);function e(l,c=!0){c||a.pauseListeners(),history.go(l)}const p=Q({location:"",base:n,go:e,createHref:bi.bind(null,n)},s,a);return Object.defineProperty(p,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(p,"state",{enumerable:!0,get:()=>s.state.value}),p}let qn=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ms=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ms||{});const Pi={type:qn.Static,value:""},xi=/[a-zA-Z0-9_]/;function qi(n){if(!n)return[[]];if(n==="/")return[[Pi]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function s(y){throw new Error(`ERR (${a})/"${u}": ${y}`)}let a=ms.Static,e=a;const p=[];let l;function c(){l&&p.push(l),l=[]}let o=0,r,u="",d="";function m(){u&&(a===ms.Static?l.push({type:qn.Static,value:u}):a===ms.Param||a===ms.ParamRegExp||a===ms.ParamRegExpEnd?(l.length>1&&(r==="*"||r==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:qn.Param,value:u,regexp:d,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):s("Invalid state to consume buffer"),u="")}function h(){u+=r}for(;o<n.length;){if(r=n[o++],r==="\\"&&a!==ms.ParamRegExp){e=a,a=ms.EscapeNext;continue}switch(a){case ms.Static:r==="/"?(u&&m(),c()):r===":"?(m(),a=ms.Param):h();break;case ms.EscapeNext:h(),a=e;break;case ms.Param:r==="("?a=ms.ParamRegExp:xi.test(r)?h():(m(),a=ms.Static,r!=="*"&&r!=="?"&&r!=="+"&&o--);break;case ms.ParamRegExp:r===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+r:a=ms.ParamRegExpEnd:d+=r;break;case ms.ParamRegExpEnd:m(),a=ms.Static,r!=="*"&&r!=="?"&&r!=="+"&&o--,d="";break;default:s("Unknown state");break}}return a===ms.ParamRegExp&&s(`Unfinished custom RegExp for param "${u}"`),m(),c(),p}const Gl="[^/]+?",Fi={sensitive:!1,strict:!1,start:!0,end:!0};var Ss=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ss||{});const Mi=/[.+*?^${}()[\]/\\]/g;function Di(n,s){const a=Q({},Fi,s),e=[];let p=a.start?"^":"";const l=[];for(const u of n){const d=u.length?[]:[Ss.Root];a.strict&&!u.length&&(p+="/");for(let m=0;m<u.length;m++){const h=u[m];let y=Ss.Segment+(a.sensitive?Ss.BonusCaseSensitive:0);if(h.type===qn.Static)m||(p+="/"),p+=h.value.replace(Mi,"\\$&"),y+=Ss.Static;else if(h.type===qn.Param){const{value:F,repeatable:I,optional:H,regexp:G}=h;l.push({name:F,repeatable:I,optional:H});const x=G||Gl;if(x!==Gl){y+=Ss.BonusCustomRegExp;try{`${x}`}catch(D){throw new Error(`Invalid custom RegExp for param "${F}" (${x}): `+D.message)}}let V=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(V=H&&u.length<2?`(?:/${V})`:"/"+V),H&&(V+="?"),p+=V,y+=Ss.Dynamic,H&&(y+=Ss.BonusOptional),I&&(y+=Ss.BonusRepeatable),x===".*"&&(y+=Ss.BonusWildcard)}d.push(y)}e.push(d)}if(a.strict&&a.end){const u=e.length-1;e[u][e[u].length-1]+=Ss.BonusStrict}a.strict||(p+="/?"),a.end?p+="$":a.strict&&!p.endsWith("/")&&(p+="(?:/|$)");const c=new RegExp(p,a.sensitive?"":"i");function o(u){const d=u.match(c),m={};if(!d)return null;for(let h=1;h<d.length;h++){const y=d[h]||"",F=l[h-1];m[F.name]=y&&F.repeatable?y.split("/"):y}return m}function r(u){let d="",m=!1;for(const h of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const y of h)if(y.type===qn.Static)d+=y.value;else if(y.type===qn.Param){const{value:F,repeatable:I,optional:H}=y,G=F in u?u[F]:"";if(Ks(G)&&!I)throw new Error(`Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`);const x=Ks(G)?G.join("/"):G;if(!x)if(H)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${F}"`);d+=x}}return d||"/"}return{re:c,score:e,keys:l,parse:o,stringify:r}}function Vi(n,s){let a=0;for(;a<n.length&&a<s.length;){const e=s[a]-n[a];if(e)return e;a++}return n.length<s.length?n.length===1&&n[0]===Ss.Static+Ss.Segment?-1:1:n.length>s.length?s.length===1&&s[0]===Ss.Static+Ss.Segment?1:-1:0}function vp(n,s){let a=0;const e=n.score,p=s.score;for(;a<e.length&&a<p.length;){const l=Vi(e[a],p[a]);if(l)return l;a++}if(Math.abs(p.length-e.length)===1){if(_l(e))return 1;if(_l(p))return-1}return p.length-e.length}function _l(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const Ui={strict:!1,end:!0,sensitive:!1};function Li(n,s,a){const e=Di(qi(n.path),a),p=Q(e,{record:n,parent:s,children:[],alias:[]});return s&&!p.record.aliasOf==!s.record.aliasOf&&s.children.push(p),p}function $i(n,s){const a=[],e=new Map;s=Dl(Ui,s);function p(m){return e.get(m)}function l(m,h,y){const F=!y,I=Hl(m);I.aliasOf=y&&y.record;const H=Dl(s,m),G=[I];if("alias"in m){const D=typeof m.alias=="string"?[m.alias]:m.alias;for(const es of D)G.push(Hl(Q({},I,{components:y?y.record.components:I.components,path:es,aliasOf:y?y.record:I})))}let x,V;for(const D of G){const{path:es}=D;if(h&&es[0]!=="/"){const vs=h.record.path,ds=vs[vs.length-1]==="/"?"":"/";D.path=h.record.path+(es&&ds+es)}if(x=Li(D,h,H),y?y.alias.push(x):(V=V||x,V!==x&&V.alias.push(x),F&&m.name&&!jl(x)&&c(m.name)),gp(x)&&r(x),I.children){const vs=I.children;for(let ds=0;ds<vs.length;ds++)l(vs[ds],x,y&&y.children[ds])}y=y||x}return V?()=>{c(V)}:ut}function c(m){if(up(m)){const h=e.get(m);h&&(e.delete(m),a.splice(a.indexOf(h),1),h.children.forEach(c),h.alias.forEach(c))}else{const h=a.indexOf(m);h>-1&&(a.splice(h,1),m.record.name&&e.delete(m.record.name),m.children.forEach(c),m.alias.forEach(c))}}function o(){return a}function r(m){const h=Gi(m,a);a.splice(h,0,m),m.record.name&&!jl(m)&&e.set(m.record.name,m)}function u(m,h){let y,F={},I,H;if("name"in m&&m.name){if(y=e.get(m.name),!y)throw Jn(us.MATCHER_NOT_FOUND,{location:m});H=y.record.name,F=Q(Wl(h.params,y.keys.filter(V=>!V.optional).concat(y.parent?y.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),m.params&&Wl(m.params,y.keys.map(V=>V.name))),I=y.stringify(F)}else if(m.path!=null)I=m.path,y=a.find(V=>V.re.test(I)),y&&(F=y.parse(I),H=y.record.name);else{if(y=h.name?e.get(h.name):a.find(V=>V.re.test(h.path)),!y)throw Jn(us.MATCHER_NOT_FOUND,{location:m,currentLocation:h});H=y.record.name,F=Q({},h.params,m.params),I=y.stringify(F)}const G=[];let x=y;for(;x;)G.unshift(x.record),x=x.parent;return{name:H,path:I,params:F,matched:G,meta:Ki(G)}}n.forEach(m=>l(m));function d(){a.length=0,e.clear()}return{addRoute:l,resolve:u,removeRoute:c,clearRoutes:d,getRoutes:o,getRecordMatcher:p}}function Wl(n,s){const a={};for(const e of s)e in n&&(a[e]=n[e]);return a}function Hl(n){const s={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Bi(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(s,"mods",{value:{}}),s}function Bi(n){const s={},a=n.props||!1;if("component"in n)s.default=a;else for(const e in n.components)s[e]=typeof a=="object"?a[e]:a;return s}function jl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ki(n){return n.reduce((s,a)=>Q(s,a.meta),{})}function Gi(n,s){let a=0,e=s.length;for(;a!==e;){const l=a+e>>1;vp(n,s[l])<0?e=l:a=l+1}const p=_i(n);return p&&(e=s.lastIndexOf(p,e-1)),e}function _i(n){let s=n;for(;s=s.parent;)if(gp(s)&&vp(n,s)===0)return s}function gp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function zl(n){const s=un(Za),a=un(mp),e=Ls(()=>{const r=_n(n.to);return s.resolve(r)}),p=Ls(()=>{const{matched:r}=e.value,{length:u}=r,d=r[u-1],m=a.matched;if(!d||!m.length)return-1;const h=m.findIndex(Yn.bind(null,d));if(h>-1)return h;const y=Xl(r[u-2]);return u>1&&Xl(d)===y&&m[m.length-1].path!==y?m.findIndex(Yn.bind(null,r[u-2])):h}),l=Ls(()=>p.value>-1&&Xi(a.params,e.value.params)),c=Ls(()=>p.value>-1&&p.value===a.matched.length-1&&dp(a.params,e.value.params));function o(r={}){if(zi(r)){const u=s[_n(n.replace)?"replace":"push"](_n(n.to)).catch(ut);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:e,href:Ls(()=>e.value.href),isActive:l,isExactActive:c,navigate:o}}function Wi(n){return n.length===1?n[0]:n}const Hi=Pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:zl,setup(n,{slots:s}){const a=Zt(zl(n)),{options:e}=un(Za),p=Ls(()=>({[Zl(n.activeClass,e.linkActiveClass,"router-link-active")]:a.isActive,[Zl(n.exactActiveClass,e.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const l=s.default&&Wi(s.default(a));return n.custom?l:ap("a",{"aria-current":a.isExactActive?n.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:p.value},l)}}}),ji=Hi;function zi(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function Xi(n,s){for(const a in s){const e=s[a],p=n[a];if(typeof e=="string"){if(e!==p)return!1}else if(!Ks(p)||p.length!==e.length||e.some((l,c)=>l.valueOf()!==p[c].valueOf()))return!1}return!0}function Xl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Zl=(n,s,a)=>n??s??a,Zi=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:a}){const e=un(Pa),p=Ls(()=>n.route||e.value),l=un(Bl,0),c=Ls(()=>{let u=_n(l);const{matched:d}=p.value;let m;for(;(m=d[u])&&!m.components;)u++;return u}),o=Ls(()=>p.value.matched[c.value]);Ot(Bl,Ls(()=>c.value+1)),Ot(Si,o),Ot(Pa,p);const r=Ce();return It(()=>[r.value,o.value,n.name],([u,d,m],[h,y,F])=>{d&&(d.instances[m]=u,y&&y!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!Yn(d,y)||!h)&&(d.enterCallbacks[m]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=p.value,d=n.name,m=o.value,h=m&&m.components[d];if(!h)return Yl(a.default,{Component:h,route:u});const y=m.props[d],F=y?y===!0?u.params:typeof y=="function"?y(u):y:null,H=ap(h,Q({},F,s,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(m.instances[d]=null)},ref:r}));return Yl(a.default,{Component:H,route:u})||H}}});function Yl(n,s){if(!n)return null;const a=n(s);return a.length===1?a[0]:a}const Yi=Zi;function Ji(n){const s=$i(n.routes,n),a=n.parseQuery||Ei,e=n.stringifyQuery||$l,p=n.history,l=at(),c=at(),o=at(),r=Qp(kn);let u=kn;Bn&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ua.bind(null,A=>""+A),m=ua.bind(null,pi),h=ua.bind(null,ht);function y(A,q){let N,U;return up(A)?(N=s.getRecordMatcher(A),U=q):U=A,s.addRoute(U,N)}function F(A){const q=s.getRecordMatcher(A);q&&s.removeRoute(q)}function I(){return s.getRoutes().map(A=>A.record)}function H(A){return!!s.getRecordMatcher(A)}function G(A,q){if(q=Q({},q||r.value),typeof A=="string"){const b=fa(a,A,q.path),k=s.resolve({path:b.path},q),E=p.createHref(b.fullPath);return Q(b,k,{params:h(k.params),hash:ht(b.hash),redirectedFrom:void 0,href:E})}let N;if(A.path!=null)N=Q({},A,{path:fa(a,A.path,q.path).path});else{const b=Q({},A.params);for(const k in b)b[k]==null&&delete b[k];N=Q({},A,{params:m(b)}),q.params=m(q.params)}const U=s.resolve(N,q),Z=A.hash||"";U.params=d(h(U.params));const i=ri(e,Q({},A,{hash:ai(Z),path:U.path})),f=p.createHref(i);return Q({fullPath:i,hash:Z,query:e===$l?wi(A.query):A.query||{}},U,{redirectedFrom:void 0,href:f})}function x(A){return typeof A=="string"?fa(a,A,r.value.path):Q({},A)}function V(A,q){if(u!==A)return Jn(us.NAVIGATION_CANCELLED,{from:q,to:A})}function D(A){return ds(A)}function es(A){return D(Q(x(A),{replace:!0}))}function vs(A,q){const N=A.matched[A.matched.length-1];if(N&&N.redirect){const{redirect:U}=N;let Z=typeof U=="function"?U(A,q):U;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),Q({query:A.query,hash:A.hash,params:Z.path!=null?{}:A.params},Z)}}function ds(A,q){const N=u=G(A),U=r.value,Z=A.state,i=A.force,f=A.replace===!0,b=vs(N,U);if(b)return ds(Q(x(b),{state:typeof b=="object"?Q({},Z,b.state):Z,force:i,replace:f}),q||N);const k=N;k.redirectedFrom=q;let E;return!i&&ii(e,U,N)&&(E=Jn(us.NAVIGATION_DUPLICATED,{to:k,from:U}),Hs(U,U,!0,!1)),(E?Promise.resolve(E):_s(k,U)).catch(C=>pn(C)?pn(C,us.NAVIGATION_GUARD_REDIRECT)?C:yn(C):J(C,k,U)).then(C=>{if(C){if(pn(C,us.NAVIGATION_GUARD_REDIRECT))return ds(Q({replace:f},x(C.to),{state:typeof C.to=="object"?Q({},Z,C.to.state):Z,force:i}),q||k)}else C=Tn(k,U,!0,f,Z);return hn(k,U,C),C})}function Gs(A,q){const N=V(A,q);return N?Promise.reject(N):Promise.resolve()}function gn(A){const q=Un.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(A):A()}function _s(A,q){let N;const[U,Z,i]=Ti(A,q);N=ba(U.reverse(),"beforeRouteLeave",A,q);for(const b of U)b.leaveGuards.forEach(k=>{N.push(An(k,A,q))});const f=Gs.bind(null,A,q);return N.push(f),Ds(N).then(()=>{N=[];for(const b of l.list())N.push(An(b,A,q));return N.push(f),Ds(N)}).then(()=>{N=ba(Z,"beforeRouteUpdate",A,q);for(const b of Z)b.updateGuards.forEach(k=>{N.push(An(k,A,q))});return N.push(f),Ds(N)}).then(()=>{N=[];for(const b of i)if(b.beforeEnter)if(Ks(b.beforeEnter))for(const k of b.beforeEnter)N.push(An(k,A,q));else N.push(An(b.beforeEnter,A,q));return N.push(f),Ds(N)}).then(()=>(A.matched.forEach(b=>b.enterCallbacks={}),N=ba(i,"beforeRouteEnter",A,q,gn),N.push(f),Ds(N))).then(()=>{N=[];for(const b of c.list())N.push(An(b,A,q));return N.push(f),Ds(N)}).catch(b=>pn(b,us.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function hn(A,q,N){o.list().forEach(U=>gn(()=>U(A,q,N)))}function Tn(A,q,N,U,Z){const i=V(A,q);if(i)return i;const f=q===kn,b=Bn?history.state:{};N&&(U||f?p.replace(A.fullPath,Q({scroll:f&&b&&b.scroll},Z)):p.push(A.fullPath,Z)),r.value=A,Hs(A,q,N,f),yn()}let Ws;function Qn(){Ws||(Ws=p.listen((A,q,N)=>{if(!Rn.listening)return;const U=G(A),Z=vs(U,Rn.currentRoute.value);if(Z){ds(Q(Z,{replace:!0,force:!0}),U).catch(ut);return}u=U;const i=r.value;Bn&&hi(Ll(i.fullPath,N.delta),ta()),_s(U,i).catch(f=>pn(f,us.NAVIGATION_ABORTED|us.NAVIGATION_CANCELLED)?f:pn(f,us.NAVIGATION_GUARD_REDIRECT)?(ds(Q(x(f.to),{force:!0}),U).then(b=>{pn(b,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&!N.delta&&N.type===Ia.pop&&p.go(-1,!1)}).catch(ut),Promise.reject()):(N.delta&&p.go(-N.delta,!1),J(f,U,i))).then(f=>{f=f||Tn(U,i,!1),f&&(N.delta&&!pn(f,us.NAVIGATION_CANCELLED)?p.go(-N.delta,!1):N.type===Ia.pop&&pn(f,us.NAVIGATION_ABORTED|us.NAVIGATION_DUPLICATED)&&p.go(-1,!1)),hn(U,i,f)}).catch(ut)}))}let Dn=at(),bs=at(),ls;function J(A,q,N){yn(A);const U=bs.list();return U.length?U.forEach(Z=>Z(A,q,N)):console.error(A),Promise.reject(A)}function ln(){return ls&&r.value!==kn?Promise.resolve():new Promise((A,q)=>{Dn.add([A,q])})}function yn(A){return ls||(ls=!A,Qn(),Dn.list().forEach(([q,N])=>A?N(A):q()),Dn.reset()),A}function Hs(A,q,N,U){const{scrollBehavior:Z}=n;if(!Bn||!Z)return Promise.resolve();const i=!N&&yi(Ll(A.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Ga().then(()=>Z(A,q,i)).then(f=>f&&gi(f)).catch(f=>J(f,A,q))}const Os=A=>p.go(A);let Vn;const Un=new Set,Rn={currentRoute:r,listening:!0,addRoute:y,removeRoute:F,clearRoutes:s.clearRoutes,hasRoute:H,getRoutes:I,resolve:G,options:n,push:D,replace:es,go:Os,back:()=>Os(-1),forward:()=>Os(1),beforeEach:l.add,beforeResolve:c.add,afterEach:o.add,onError:bs.add,isReady:ln,install(A){A.component("RouterLink",ji),A.component("RouterView",Yi),A.config.globalProperties.$router=Rn,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(r)}),Bn&&!Vn&&r.value===kn&&(Vn=!0,D(p.location).catch(U=>{}));const q={};for(const U in kn)Object.defineProperty(q,U,{get:()=>r.value[U],enumerable:!0});A.provide(Za,Rn),A.provide(mp,ke(q)),A.provide(Pa,r);const N=A.unmount;Un.add(A),A.unmount=function(){Un.delete(A),Un.size<1&&(u=kn,Ws&&Ws(),Ws=null,r.value=kn,Vn=!1,ls=!1),N()}}};function Ds(A){return A.reduce((q,N)=>q.then(()=>gn(N)),Promise.resolve())}return Rn}const hp="vasp-learn-progress",Qi=()=>{try{const n=localStorage.getItem(hp);return n?JSON.parse(n):{}}catch{return{}}},va=n=>{try{localStorage.setItem(hp,JSON.stringify(n))}catch(s){console.warn("Failed to save progress:",s)}},Us=Ce(Qi()),Tt={theory:{title:"理论基础",items:[{id:"theory-dft",title:"DFT 基本原理",path:"/theory"},{id:"theory-functional",title:"交换关联泛函",path:"/theory"},{id:"theory-paw",title:"赝势与基组",path:"/theory"},{id:"theory-kpoint",title:"K 点采样",path:"/theory"}]},input:{title:"输入文件",items:[{id:"input-incar",title:"INCAR 文件",path:"/input"},{id:"input-poscar",title:"POSCAR 文件",path:"/input"},{id:"input-kpoints",title:"KPOINTS 文件",path:"/input"},{id:"input-potcar",title:"POTCAR 文件",path:"/input"}]},tasks:{title:"计算任务",items:[{id:"tasks-relax",title:"结构优化",path:"/tasks"},{id:"tasks-dos",title:"态密度计算",path:"/tasks"},{id:"tasks-band",title:"能带结构",path:"/tasks"},{id:"tasks-surface",title:"表面计算",path:"/tasks"},{id:"tasks-defect",title:"缺陷计算",path:"/tasks"},{id:"tasks-phonon",title:"声子计算",path:"/tasks"}]},errors:{title:"错误诊断",items:[{id:"errors-scf",title:"SCF 不收敛",path:"/errors"},{id:"errors-ion",title:"离子步问题",path:"/errors"},{id:"errors-memory",title:"内存问题",path:"/errors"},{id:"errors-files",title:"文件错误",path:"/errors"}]}};function sd(){const n=o=>{Us.value={...Us.value,[o]:{completed:!0,completedAt:new Date().toISOString()}},va(Us.value)},s=o=>{const r={...Us.value};delete r[o],Us.value=r,va(Us.value)},a=o=>{e(o)?s(o):n(o)},e=o=>{var r;return!!((r=Us.value[o])!=null&&r.completed)};return{progress:Us,learnableItems:Tt,markComplete:n,markIncomplete:s,toggleComplete:a,isComplete:e,getTotalProgress:()=>{const o=Object.values(Tt).reduce((u,d)=>u+d.items.length,0),r=Object.values(Us.value).filter(u=>u.completed).length;return{total:o,completed:r,percentage:o>0?Math.round(r/o*100):0}},getCategoryProgress:o=>{if(!Tt[o])return{total:0,completed:0,percentage:0};const r=Tt[o].items,u=r.filter(d=>e(d.id)).length;return{total:r.length,completed:u,percentage:Math.round(u/r.length*100)}},resetProgress:()=>{Us.value={},va(Us.value)}}}const nd={name:"ProgressWidget",setup(){const{learnableItems:n,getTotalProgress:s,getCategoryProgress:a,resetProgress:e}=sd(),p=s();return{learnableItems:n,totalProgress:p,getCategoryProgress:a,confirmReset:()=>{confirm("确定要重置所有学习进度吗？此操作不可恢复。")&&(e(),window.location.reload())}}}},td={class:"progress-widget"},ad={class:"progress-header"},ld={class:"progress-stats"},ed={class:"progress-percentage"},pd={class:"progress-detail"},od={class:"progress-bar-container"},cd={class:"category-progress"},rd={class:"category-info"},id={class:"category-name"},dd={class:"category-count"},ud={class:"category-bar-container"};function fd(n,s,a,e,p,l){return B(),K("div",td,[t("div",ad,[s[1]||(s[1]=t("h3",null,"学习进度",-1)),t("div",ld,[t("span",ed,z(e.totalProgress.percentage)+"%",1),t("span",pd,z(e.totalProgress.completed)+"/"+z(e.totalProgress.total)+" 完成",1)])]),t("div",od,[t("div",{class:"progress-bar",style:zn({width:e.totalProgress.percentage+"%"})},null,4)]),t("div",cd,[(B(!0),K(ks,null,Pn(e.learnableItems,(c,o)=>(B(),K("div",{key:o,class:"category-item"},[t("div",rd,[t("span",id,z(c.title),1),t("span",dd,z(e.getCategoryProgress(o).completed)+"/"+z(c.items.length),1)]),t("div",ud,[t("div",{class:"category-bar",style:zn({width:e.getCategoryProgress(o).percentage+"%"})},null,4)])]))),128))]),e.totalProgress.completed>0?(B(),K("button",{key:0,class:"reset-btn",onClick:s[0]||(s[0]=(...c)=>e.confirmReset&&e.confirmReset(...c))}," 重置进度 ")):En("",!0)])}const md=is(nd,[["render",fd],["__scopeId","data-v-0efc2711"]]),bd={name:"HomeView",components:{ProgressWidget:md}},vd={class:"hero active"},gd={class:"pg"};function hd(n,s,a,e,p,l){const c=os("ProgressWidget"),o=os("router-link");return B(),K("div",vd,[s[5]||(s[5]=t("h1",{class:"hero-t"},[g("VASP 材料计算"),t("br"),g("学习平台")],-1)),s[6]||(s[6]=t("p",{class:"hero-s"},"从密度泛函理论到第一性原理计算，系统掌握 VASP 的使用方法。包含基础教程、进阶计算任务和完整的错误诊断系统。",-1)),T(c),s[7]||(s[7]=v('<div class="stats"><div class="stat"><div class="stat-n">15</div><div class="stat-l">核心知识点</div></div><div class="stat"><div class="stat-n">8</div><div class="stat-l">计算任务教程</div></div><div class="stat"><div class="stat-n">20+</div><div class="stat-l">错误诊断方案</div></div><div class="stat"><div class="stat-n">∞</div><div class="stat-l">可探索的材料</div></div></div><h2 class="stitle">学习路径</h2><p class="sdesc">按照推荐顺序学习，循序渐进地掌握材料计算</p>',3)),t("div",gd,[T(o,{to:"/theory",class:"pc",style:{"--ca":"var(--blue)"}},{default:M(()=>[...s[0]||(s[0]=[t("div",{class:"pc-i"},"📐",-1),t("div",{class:"pc-t"},"理论基础",-1),t("div",{class:"pc-d"},"密度泛函理论、赝势方法、平面波基组",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 2h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),T(o,{to:"/input",class:"pc",style:{"--ca":"var(--green)"}},{default:M(()=>[...s[1]||(s[1]=[t("div",{class:"pc-i"},"📁",-1),t("div",{class:"pc-t"},"输入文件",-1),t("div",{class:"pc-d"},"INCAR、POSCAR、KPOINTS、POTCAR 四大核心文件",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 3h"),t("span",null,"📖 4 章节")],-1)])]),_:1}),T(o,{to:"/tasks",class:"pc",style:{"--ca":"var(--purple)"}},{default:M(()=>[...s[2]||(s[2]=[t("div",{class:"pc-i"},"📊",-1),t("div",{class:"pc-t"},"基础计算",-1),t("div",{class:"pc-d"},"结构优化、态密度、能带结构",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 4h"),t("span",null,"📖 3 章节")],-1)])]),_:1}),T(o,{to:"/errors",class:"pc",style:{"--ca":"var(--red)"}},{default:M(()=>[...s[3]||(s[3]=[t("div",{class:"pc-i"},"🚨",-1),t("div",{class:"pc-t"},"错误诊断",-1),t("div",{class:"pc-d"},"SCF 不收敛、内存溢出、文件错误等",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 按需查阅"),t("span",null,"📖 5 类问题")],-1)])]),_:1}),T(o,{to:"/tools",class:"pc",style:{"--ca":"var(--accent)"}},{default:M(()=>[...s[4]||(s[4]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"工具与速查",-1),t("div",{class:"pc-d"},"VESTA、VASPKIT、pymatgen 等辅助工具",-1),t("div",{class:"pc-m"},[t("span",null,"⏱ 约 1h")],-1)])]),_:1})]),s[8]||(s[8]=v('<h2 class="stitle">VASP 计算流程</h2><div class="fc"><div class="fn2-node s">🧱 确定材料结构</div><div class="fa"></div><div class="fn2-node p">📝 编写 POSCAR</div><div class="fa"></div><div class="fn2-node p">⚛️ 准备 POTCAR</div><div class="fa"></div><div class="fn2-node p">🔲 设置 KPOINTS</div><div class="fa"></div><div class="fn2-node p">⚙️ 配置 INCAR</div><div class="fa"></div><div class="fn2-node p">🚀 提交计算</div><div class="fa"></div><div class="fn2-node p">🔍 检查收敛</div><div class="fa"></div><div class="fn2-node e">✅ 提取物理量</div></div>',2))])}const yd=is(bd,[["render",hd]]),kd={name:"TheoryView",data(){return{openSections:{q1:!0,q2:!0,q3:!0}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Cd={class:"sec active"},Ad={class:"bread"},Ed={class:"cb"},wd={class:"ch"},Sd={class:"cb"},Td={class:"ch"},Rd={class:"cb"},Od={class:"ch"};function Id(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Cd,[t("div",Ad,[T(c,{to:"/"},{default:M(()=>[...s[6]||(s[6]=[g("首页",-1)])]),_:1}),s[7]||(s[7]=g("/",-1)),s[8]||(s[8]=t("span",null,"理论基础",-1))]),s[21]||(s[21]=v(`<h2>DFT 基本原理</h2><p>密度泛函理论（DFT）是 VASP 的理论基石，将多电子问题简化为单电子问题。</p><h3>1. Hohenberg-Kohn 定理</h3><ul><li><strong>第一定理：</strong>多电子体系的基态性质由电子密度 n(r) 唯一确定</li><li><strong>第二定理：</strong>基态能量可通过能量泛函 E[n] 对密度的变分得到</li></ul><div class="ib note"><strong>核心思想：</strong>将求解 3N 维波函数的问题简化为求解 3 维电子密度，大幅降低计算复杂度。</div><h3>2. Kohn-Sham 方程</h3><div class="cb"><div class="ch"><span class="la">公式</span></div><pre><code>⎡ -∇²/2 + V_eff(r) ⎤ φᵢ(r) = εᵢ φᵢ(r)
⎣                   ⎦

V_eff(r) = V_ext(r) + V_H(r) + V_xc(r)

- V_ext(r) ：外势（原子核产生的势）
- V_H(r)   ：Hartree 势（经典库仑作用）
- V_xc(r)  ：交换关联势（量子效应）</code></pre></div><h3>3. 自洽场（SCF）迭代</h3><div class="fc"><div class="fn2-node s">猜测初始电子密度 n(r)</div><div class="fa"></div><div class="fn2-node p">构建有效势 V_eff(r)</div><div class="fa"></div><div class="fn2-node p">求解 Kohn-Sham 方程 → φᵢ, εᵢ</div><div class="fa"></div><div class="fn2-node p">计算新密度 n_new(r)</div><div class="fa"></div><div class="fn2-node p">判断收敛 |n_new - n_old| &lt; ε ?</div><div class="fa"></div><div class="fn2-node e">输出基态能量和电子结构</div></div><h3>4. 交换关联泛函</h3><table class="tb"><thead><tr><th>层级</th><th>名称</th><th>精度</th><th>成本</th><th>适用</th></tr></thead><tbody><tr><td><strong>LDA</strong></td><td>局域密度近似</td><td>一般</td><td>低</td><td>金属晶格常数</td></tr><tr><td><strong>GGA</strong></td><td>广义梯度近似</td><td>较好</td><td>低</td><td>最常用（PBE）</td></tr><tr><td><strong>杂化</strong></td><td>HSE06/PBE0</td><td>很好</td><td>高</td><td>带隙</td></tr><tr><td><strong>GW</strong></td><td>多体微扰</td><td>极好</td><td>极高</td><td>准粒子能带</td></tr></tbody></table><div class="ib tip"><strong>建议：</strong>初学者从 <code class="ic">PBE</code> 开始，VASP 中通过 POTCAR 文件控制（PAW_PBE 对应 PBE）。</div><h3>5. 赝势方法详解</h3><p>VASP 使用 <strong>PAW（投影缀加波）</strong>方法，比超软赝势更精确，比全电子计算更高效。</p><table class="tb"><thead><tr><th>赝势类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>6. 平面波基组</h3><p>VASP 使用平面波作为基组，截断能 <code>ENCUT</code> 决定基组大小。</p><div class="fb"><div class="fm">E<sub>cut</sub> = ℏ²G<sub>max</sub>² / 2m</div><div class="fd">G<sub>max</sub>: 最大平面波矢量, E<sub>cut</sub>: 截断能</div></div><table class="tb"><thead><tr><th>截断能</th><th>精度</th><th>计算成本</th><th>适用场景</th></tr></thead><tbody><tr><td>&lt; 200 eV</td><td>低</td><td>低</td><td>初步测试</td></tr><tr><td>200-400 eV</td><td>中</td><td>中</td><td>常规计算</td></tr><tr><td>400-600 eV</td><td>高</td><td>高</td><td>精确计算</td></tr><tr><td>&gt; 600 eV</td><td>极高</td><td>极高</td><td>特殊体系</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>7. K 点采样</h3><p>在周期性体系中，电子波函数满足布洛赫定理，需要在倒空间（k 空间）进行积分。</p><div class="fb"><div class="fm">⟨O⟩ = (1/Nₖ) × Σ wₖ × O(kₖ)</div><div class="fd">离散 k 点求和代替布里渊区积分</div></div><h4>K 点密度经验公式</h4><div class="ib tip"><strong>经验法则：</strong><code class="ic">N_k × a ≈ 30</code>（a 为晶格常数，单位 Å）<br>例如 a = 5.43 Å → N_k ≈ 30/5.43 ≈ 6 → 使用 6×6×6 网格</div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr></tbody></table><h3>8. DFT 与 VASP 参数对照表</h3><table class="tb"><thead><tr><th>DFT 概念</th><th>VASP 参数</th><th>物理意义</th><th>设置建议</th></tr></thead><tbody><tr><td>交换关联泛函</td><td><code>POTCAR</code></td><td>近似处理电子关联</td><td>初学用 PBE</td></tr><tr><td>平面波截断</td><td><code>ENCUT</code></td><td>基组大小</td><td>1.3 × ENMAX</td></tr><tr><td>布里渊区积分</td><td><code>KPOINTS</code></td><td>倒空间采样</td><td>N_k × a ≈ 30</td></tr><tr><td>收敛标准</td><td><code>EDIFF</code></td><td>电子步收敛阈值</td><td>1E-6</td></tr><tr><td>展宽方法</td><td><code>ISMEAR</code></td><td>费米面处理</td><td>金属用 1，绝缘体用 0</td></tr><tr><td>展宽宽度</td><td><code>SIGMA</code></td><td>展宽能量范围</td><td>0.05-0.2 eV</td></tr></tbody></table><h3>9. 理论与计算的联系</h3><div class="db"><div class="db-t">从理论到计算的思考方式</div><p><strong>1. 明确计算目标</strong></p><ul><li>结构优化 → 关注力收敛 (<code>EDIFFG</code>)</li><li>电子结构 → 关注 k 点和带隙</li><li>热力学性质 → 关注能量精度</li></ul><p><strong>2. 选择合适的泛函</strong></p><ul><li>定性分析 → PBE 足够</li><li>精确带隙 → 需要 HSE06</li><li>强关联体系 → 需要 +U</li></ul><p><strong>3. 验证计算精度</strong></p><ul><li>做收敛性测试 (ENCUT, K 点)</li><li>与实验值或文献比较</li><li>检查结果的物理合理性</li></ul></div><h3>10. 实际案例：Si 的计算</h3>`,32)),t("div",Ed,[t("div",wd,[s[9]||(s[9]=t("span",{class:"la"},"POSCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="vr">Si diamond</span>
<span class="nu">1.0</span>
<span class="nu">5.43  0.00  0.00</span>
<span class="nu">0.00  5.43  0.00</span>
<span class="nu">0.00  0.00  5.43</span>
<span class="vr">Si</span>
<span class="nu">2</span>
<span class="kw">Direct</span>
<span class="nu">0.00  0.00  0.00</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),t("div",Sd,[t("div",Td,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"Si 结构优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[14]||(s[14]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>              <span class="cm">; 1.3 × ENMAX(Si)</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>             <span class="cm">; 电子收敛标准</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>                <span class="cm">; CG 优化</span>
<span class="kw">NSW</span>      = <span class="nu">100</span>              <span class="cm">; 最大离子步</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>                <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>                <span class="cm">; Gaussian 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),t("div",Rd,[t("div",Od,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[17]||(s[17]=v(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; N_k × 5.43 ≈ 30</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[22]||(s[22]=v('<div class="ib tip"><strong>预期结果：</strong>Si 晶格常数 ~5.43 Å，带隙 ~0.6 eV (PBE 低估，实验值 1.1 eV)</div><h3>11. 泛函选择指南</h3><table class="tb"><thead><tr><th>计算目标</th><th>推荐泛函</th><th>理由</th></tr></thead><tbody><tr><td>结构优化</td><td>PBE</td><td>快速，晶格常数准确</td></tr><tr><td>形成能</td><td>PBE</td><td>系统误差小</td></tr><tr><td>精确带隙</td><td>HSE06</td><td>带隙准确</td></tr><tr><td>磁性材料</td><td>PBE+U</td><td>处理强关联</td></tr><tr><td>范德华材料</td><td>PBE-D3</td><td>包含 vdW 修正</td></tr><tr><td>高精度能量</td><td>RPA/GW</td><td>最准确但最慢</td></tr></tbody></table><h3>12. 常见问题与解答</h3>',4)),t("div",{class:"ec open",onClick:s[3]||(s[3]=o=>l.toggle("q1"))},[...s[18]||(s[18]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"为什么 PBE 低估带隙？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"PBE 泛函的自相互作用误差导致带隙被系统性低估。这不是 VASP 的问题，而是 DFT 泛函的固有限制。解决方案是使用杂化泛函 (HSE06) 或 GW 方法。")],-1)])]),t("div",{class:"ec open",onClick:s[4]||(s[4]=o=>l.toggle("q2"))},[...s[19]||(s[19]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"如何判断 ENCUT 是否足够？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"做 ENCUT 收敛测试：计算不同 ENCUT 下的能量，当相邻 ENCUT 能量差 < 1 meV/atom 时，认为收敛。通常 ENCUT = 1.3 × ENMAX(max) 是安全的起点。")],-1)])]),t("div",{class:"ec open",onClick:s[5]||(s[5]=o=>l.toggle("q3"))},[...s[20]||(s[20]=[t("div",{class:"ec-h"},[t("span",{class:"ei"},"❓"),t("span",{class:"et"},"什么时候需要 +U？")],-1),t("div",{class:"ec-b",style:{display:"block"}},[t("p",null,"当体系含有 3d/4f 电子（如过渡金属氧化物）时，DFT 的局域近似处理不好电子强关联，导致带隙为零或磁矩错误。添加 Hubbard U 可以修正这个问题。常见 U 值：Fe: 4.0 eV, Co: 3.3 eV, Ni: 6.0 eV, Cu: 4.0 eV。")],-1)])])])}const Nd=is(kd,[["render",Id]]),Pd={name:"QuickRef",data(){return{activeTab:"incar",tabs:[{id:"incar",name:"INCAR"},{id:"ismear",name:"ISMEAR"},{id:"ibrion",name:"IBRION"},{id:"isif",name:"ISIF"}],incarParams:[{name:"ENCUT",desc:"平面波截断能",value:"400-600 eV"},{name:"EDIFF",desc:"电子步收敛标准",value:"1E-6"},{name:"EDIFFG",desc:"离子步收敛标准",value:"-0.02 eV/Å"},{name:"PREC",desc:"计算精度",value:"Accurate"},{name:"NSW",desc:"最大离子步数",value:"100-200"},{name:"NELM",desc:"最大电子步数",value:"60-200"},{name:"NBANDS",desc:"能带数目",value:"auto 或 NELECT/2+N"},{name:"LREAL",desc:"实空间投影",value:"Auto (>50原子)"}],ismearParams:[{value:"-5",method:"四面体法",use:"绝缘体/半导体 DOS",sigma:"自动"},{value:"-4",method:"四面体+Blochl",use:"金属 DOS",sigma:"自动"},{value:"0",method:"Gaussian",use:"半导体/绝缘体",sigma:"0.05"},{value:"1",method:"MP 展宽",use:"金属",sigma:"0.2"},{value:"2",method:"MP 改进",use:"金属 (更平滑)",sigma:"0.2"}],ibrionParams:[{value:"-1",method:"不动",desc:"静态计算或 MD"},{value:"0",method:"MD",desc:"分子动力学"},{value:"1",method:"RMM-DIIS",desc:"准牛顿法 (推荐)"},{value:"2",method:"CG",desc:"共轭梯度法"},{value:"3",method:"Damped MD",desc:"阻尼分子动力学"}],isifParams:[{value:"2",optimize:"仅离子位置",use:"表面计算、分子吸附"},{value:"3",optimize:"离子+晶格(体积+形状)",use:"体相优化 (最常用)"},{value:"4",optimize:"离子+晶格形状",use:"固定体积优化"},{value:"5",optimize:"仅晶格(体积+形状)",use:"固定离子"},{value:"6",optimize:"仅晶格形状",use:"固定体积+离子"},{value:"7",optimize:"仅晶格体积",use:"固定形状+离子"}]}}},xd={class:"quick-ref"},qd={class:"ref-tabs"},Fd=["onClick"],Md={class:"ref-content"},Dd={key:0,class:"ref-table"},Vd={class:"ref-cell code"},Ud={class:"ref-cell"},Ld={class:"ref-cell code"},$d={key:1,class:"ref-table"},Bd={class:"ref-cell code"},Kd={class:"ref-cell"},Gd={class:"ref-cell"},_d={class:"ref-cell code"},Wd={key:2,class:"ref-table"},Hd={class:"ref-cell code"},jd={class:"ref-cell"},zd={class:"ref-cell"},Xd={key:3,class:"ref-table"},Zd={class:"ref-cell code"},Yd={class:"ref-cell"},Jd={class:"ref-cell"};function Qd(n,s,a,e,p,l){return B(),K("div",xd,[s[4]||(s[4]=t("h3",null,"快速参考",-1)),t("div",qd,[(B(!0),K(ks,null,Pn(p.tabs,c=>(B(),K("button",{key:c.id,class:X(["ref-tab",{active:p.activeTab===c.id}]),onClick:o=>p.activeTab=c.id},z(c.name),11,Fd))),128))]),t("div",Md,[p.activeTab==="incar"?(B(),K("div",Dd,[s[0]||(s[0]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"参数"),t("div",{class:"ref-cell"},"说明"),t("div",{class:"ref-cell"},"常用值")],-1)),(B(!0),K(ks,null,Pn(p.incarParams,c=>(B(),K("div",{key:c.name,class:"ref-row"},[t("div",Vd,z(c.name),1),t("div",Ud,z(c.desc),1),t("div",Ld,z(c.value),1)]))),128))])):En("",!0),p.activeTab==="ismear"?(B(),K("div",$d,[s[1]||(s[1]=v('<div class="ref-row header" data-v-b684b753><div class="ref-cell" data-v-b684b753>ISMEAR</div><div class="ref-cell" data-v-b684b753>方法</div><div class="ref-cell" data-v-b684b753>适用场景</div><div class="ref-cell" data-v-b684b753>SIGMA</div></div>',1)),(B(!0),K(ks,null,Pn(p.ismearParams,c=>(B(),K("div",{key:c.value,class:"ref-row"},[t("div",Bd,z(c.value),1),t("div",Kd,z(c.method),1),t("div",Gd,z(c.use),1),t("div",_d,z(c.sigma),1)]))),128))])):En("",!0),p.activeTab==="ibrion"?(B(),K("div",Wd,[s[2]||(s[2]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"IBRION"),t("div",{class:"ref-cell"},"方法"),t("div",{class:"ref-cell"},"说明")],-1)),(B(!0),K(ks,null,Pn(p.ibrionParams,c=>(B(),K("div",{key:c.value,class:"ref-row"},[t("div",Hd,z(c.value),1),t("div",jd,z(c.method),1),t("div",zd,z(c.desc),1)]))),128))])):En("",!0),p.activeTab==="isif"?(B(),K("div",Xd,[s[3]||(s[3]=t("div",{class:"ref-row header"},[t("div",{class:"ref-cell"},"ISIF"),t("div",{class:"ref-cell"},"优化内容"),t("div",{class:"ref-cell"},"适用场景")],-1)),(B(!0),K(ks,null,Pn(p.isifParams,c=>(B(),K("div",{key:c.value,class:"ref-row"},[t("div",Zd,z(c.value),1),t("div",Yd,z(c.optimize),1),t("div",Jd,z(c.use),1)]))),128))])):En("",!0)])])}const su=is(Pd,[["render",Qd],["__scopeId","data-v-b684b753"]]),nu={name:"InputView",components:{QuickRef:su},methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},tu={class:"sec active"},au={class:"bread"},lu={class:"cb"},eu={class:"ch"},pu={class:"cb"},ou={class:"ch"},cu={class:"cb"},ru={class:"ch"},iu={class:"cb"},du={class:"ch"},uu={class:"cb"},fu={class:"ch"},mu={class:"cb"},bu={class:"ch"},vu={class:"cb"},gu={class:"ch"},hu={class:"cb"},yu={class:"ch"},ku={class:"cb"},Cu={class:"ch"},Au={class:"cb"},Eu={class:"ch"},wu={class:"cb"},Su={class:"ch"},Tu={class:"cb"},Ru={class:"ch"},Ou={class:"cb"},Iu={class:"ch"},Nu={class:"cb"},Pu={class:"ch"},xu={class:"cb"},qu={class:"ch"},Fu={class:"cb"},Mu={class:"ch"},Du={class:"cb"},Vu={class:"ch"};function Uu(n,s,a,e,p,l){const c=os("router-link"),o=os("QuickRef");return B(),K("div",tu,[t("div",au,[T(c,{to:"/"},{default:M(()=>[...s[17]||(s[17]=[g("首页",-1)])]),_:1}),s[18]||(s[18]=g("/",-1)),s[19]||(s[19]=t("span",null,"输入文件",-1))]),s[69]||(s[69]=v('<h2>VASP 输入文件总览</h2><p>VASP 需要 <strong>4 个核心输入文件</strong>，正确设置这些文件是成功计算的基础。</p><div class="ft"><div class="ft-i"><span style="color:var(--blue);">📄</span> INCAR — 控制参数（告诉 VASP 做什么）</div><div class="ft-i"><span style="color:var(--green);">📄</span> POSCAR — 晶体结构（告诉 VASP 计算什么）</div><div class="ft-i"><span style="color:var(--purple);">📄</span> KPOINTS — k 点网格（控制精度）</div><div class="ft-i"><span style="color:var(--red);">📄</span> POTCAR — 赝势文件（定义元素）</div></div><div class="ib warn"><strong>注意：</strong>POTCAR 中元素的顺序必须与 POSCAR 中的元素顺序一致！</div>',4)),T(o),s[70]||(s[70]=t("h2",null,"INCAR 文件详解",-1)),s[71]||(s[71]=t("p",null,"INCAR 是 VASP 最核心的控制文件，决定计算类型和精度。",-1)),s[72]||(s[72]=t("h3",null,"1. 基本结构",-1)),t("div",lu,[t("div",eu,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"结构优化示例",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[22]||(s[22]=v(`<pre><code><span class="cm"># 注释以 # 或 ; 开头</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度</span></code></pre>`,1))]),s[73]||(s[73]=v('<h3>2. 参数格式规则</h3><table class="tb"><thead><tr><th>规则</th><th>正确写法</th><th>错误写法</th></tr></thead><tbody><tr><td>等号两边空格</td><td><code>ENCUT = 400</code></td><td><code>ENCUT=400</code></td></tr><tr><td>布尔值大写</td><td><code>.TRUE.</code></td><td><code>.true.</code></td></tr><tr><td>字符串引号</td><td><code>&#39;string&#39;</code> 或无</td><td><code>&quot;string&quot;</code></td></tr><tr><td>注释符号</td><td><code>#</code> 或 <code>;</code></td><td><code>//</code></td></tr></tbody></table><h3>3. ENCUT 截断能</h3><p>截断能决定平面波基组大小，是最关键的精度参数。</p><table class="tb"><thead><tr><th>设置方式</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT = 400</code></td><td>直接指定 (eV)</td></tr><tr><td><code>ENCUT = 1.3</code></td><td>乘以 ENMAX（POTCAR 中的值）</td></tr></tbody></table><div class="ib tip"><strong>确定方法：</strong><code class="ic">grep ENMAX POTCAR</code>，设 <code class="ic">ENCUT = 1.3 × ENMAX(max)</code></div><h3>4. IBRION 优化算法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算或 MD</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td><strong>推荐默认</strong></td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼 MD</td><td>特殊体系</td></tr></tbody></table><h3>5. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td><strong>体相优化（最常用）</strong></td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格</td></tr></tbody></table><div class="ib warn"><strong>重要：</strong>表面计算必须用 <code>ISIF=2</code>，否则晶格会塌陷！</div><h3>6. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>7. EDIFF 和 EDIFFG</h3><table class="tb"><thead><tr><th>参数</th><th>含义</th><th>常用值</th><th>说明</th></tr></thead><tbody><tr><td><code>EDIFF</code></td><td>电子步收敛</td><td>1E-6</td><td>能量变化阈值</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛</td><td>-0.02</td><td>负值=力, 正值=能量</td></tr></tbody></table><div class="ib note"><strong>EDIFFG 解释：</strong><ul><li><code>EDIFFG = -0.02</code>：最大力收敛到 0.02 eV/Å</li><li><code>EDIFFG = 1E-4</code>：能量变化收敛到 0.0001 eV</li></ul></div><h3>8. 并行参数</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',18)),t("div",pu,[t("div",ou,[s[23]||(s[23]=t("span",{class:"la"},"INCAR",-1)),s[24]||(s[24]=t("span",{class:"fn"},"并行设置（64 核，4 节点）",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[25]||(s[25]=v(`<pre><code><span class="cm"># 64 核 = 4 节点 × 16 核</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>                <span class="cm">; 节点数</span>
<span class="kw">KPAR</span>     = <span class="nu">2</span>                <span class="cm">; K 点并行（整除 K 点数）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>               <span class="cm">; 每节点核心数</span></code></pre>`,1))]),s[74]||(s[74]=t("h3",null,"9. 性能优化参数",-1)),t("div",cu,[t("div",ru,[s[26]||(s[26]=t("span",{class:"la"},"INCAR",-1)),s[27]||(s[27]=t("span",{class:"fn"},"大体系优化",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[28]||(s[28]=v(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>             <span class="cm">; 实空间计算投影算符</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>             <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>               <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>           <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>           <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>                <span class="cm">; 减少输出</span></code></pre>`,1))]),s[75]||(s[75]=t("h2",null,"POSCAR 文件详解",-1)),s[76]||(s[76]=t("p",null,"POSCAR 定义晶体结构，包括晶格和原子坐标。",-1)),s[77]||(s[77]=t("h3",null,"1. 完整格式",-1)),t("div",iu,[t("div",du,[s[29]||(s[29]=t("span",{class:"la"},"POSCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"格式详解",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[31]||(s[31]=v(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 第 1 行：注释（任意文字）</span>
<span class="nu">1.0</span>                           <span class="cm">; 第 2 行：缩放因子（通常 1.0）</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 第 3 行：晶格矢量 a (×缩放因子)</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 第 4 行：晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 第 5 行：晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 第 6 行：元素符号（空格分隔）</span>
<span class="nu">2</span>                              <span class="cm">; 第 7 行：每种元素的原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 第 8 行：坐标类型</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; 第 9 行起：原子坐标</span>
<span class="nu">0.25  0.25  0.25</span></code></pre>`,1))]),s[78]||(s[78]=v('<h3>2. 坐标类型</h3><table class="tb"><thead><tr><th>类型</th><th>关键字</th><th>格式</th><th>适用场景</th></tr></thead><tbody><tr><td>分数坐标</td><td><code>Direct</code></td><td>0~1</td><td>最常用</td></tr><tr><td>笛卡尔坐标</td><td><code>Cartesian</code></td><td>Å</td><td>分子/团簇</td></tr></tbody></table><h3>3. 选择性动力学</h3><p>允许固定部分原子，常用于表面计算。</p>',4)),t("div",uu,[t("div",fu,[s[32]||(s[32]=t("span",{class:"la"},"POSCAR",-1)),s[33]||(s[33]=t("span",{class:"fn"},"选择性动力学",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[34]||(s[34]=v(`<pre><code><span class="vr">Si surface</span>
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
<span class="nu">0.75  0.75  0.75</span>  <span class="st">T T T</span>   <span class="cm">; 可动层</span></code></pre>`,1))]),s[79]||(s[79]=t("h3",null,"4. 多元素体系",-1)),t("div",mu,[t("div",bu,[s[35]||(s[35]=t("span",{class:"la"},"POSCAR",-1)),s[36]||(s[36]=t("span",{class:"fn"},"TiO2 示例",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[37]||(s[37]=v(`<pre><code><span class="vr">TiO2 rutile</span>
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
<span class="nu">0.20  0.80  0.50</span>             <span class="cm">; O 原子 4</span></code></pre>`,1))]),s[80]||(s[80]=t("div",{class:"ib warn"},[t("strong",null,"重要："),g("POSCAR 中元素顺序必须与 POTCAR 一致！")],-1)),s[81]||(s[81]=t("h2",null,"KPOINTS 文件详解",-1)),s[82]||(s[82]=t("p",null,"KPOINTS 定义倒空间采样网格，控制计算精度。",-1)),s[83]||(s[83]=t("h3",null,"1. 自动网格模式（最常用）",-1)),t("div",vu,[t("div",gu,[s[38]||(s[38]=t("span",{class:"la"},"KPOINTS",-1)),s[39]||(s[39]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[40]||(s[40]=v(`<pre><code><span class="vr">Automatic mesh</span>               <span class="cm">; 注释行</span>
<span class="nu">0</span>                             <span class="cm">; 0 = 自动生成</span>
<span class="kw">Gamma</span>                         <span class="cm">; Gamma 中心网格</span>
<span class="nu">4  4  4</span>                       <span class="cm">; K 点网格</span>
<span class="nu">0.0  0.0  0.0</span>                <span class="cm">; 偏移量</span></code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"2. Monkhorst-Pack 网格",-1)),t("div",hu,[t("div",yu,[s[41]||(s[41]=t("span",{class:"la"},"KPOINTS",-1)),s[42]||(s[42]=t("span",{class:"fn"},"Monkhorst-Pack",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[43]||(s[43]=v(`<pre><code><span class="vr">Monkhorst-Pack mesh</span>
<span class="nu">0</span>
<span class="kw">Monkhorst</span>                     <span class="cm">; MP 网格（与 Gamma 不同偏移）</span>
<span class="nu">4  4  4</span>
<span class="nu">0.5  0.5  0.5</span>                <span class="cm">; 偏移 0.5</span></code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"3. Line-mode（能带计算）",-1)),t("div",ku,[t("div",Cu,[s[44]||(s[44]=t("span",{class:"la"},"KPOINTS",-1)),s[45]||(s[45]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[46]||(s[46]=v(`<pre><code><span class="vr">k-points along high symmetry lines</span>
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
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[86]||(s[86]=v(`<div class="ib warn"><strong>注意：</strong>Line-mode 需要空行分隔每条线段！</div><h3>4. K 点密度建议</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td><code>8×8×8</code> 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td><code>4×4×4</code> ~ <code>6×6×6</code></td><td>通常足够</td></tr><tr><td>绝缘体</td><td><code>3×3×3</code> ~ <code>4×4×4</code></td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td><code>k×k×1</code></td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td><code>1×1×1</code></td><td>无周期性</td></tr></tbody></table><h2>POTCAR 文件详解</h2><p>POTCAR 包含赝势信息，定义元素的电子结构。</p><h3>1. 关键信息</h3><div class="cb"><div class="ch"><span class="la">POTCAR</span><span class="fn">关键参数</span></div><pre><code><span class="vr">TITEL</span>  = <span class="st">PAW_PBE Si 05Jan2001</span>   <span class="cm">; 赝势类型和元素</span>
<span class="vr">ENMAX</span>  = <span class="nu">  249.570</span>              <span class="cm">; 推荐截断能</span>
<span class="vr">ZVAL</span>   = <span class="nu">    4.000</span>              <span class="cm">; 价电子数</span>
<span class="cm">; Si: 3s² 3p² → 4个价电子</span></code></pre></div><h3>2. 赝势类型</h3><table class="tb"><thead><tr><th>类型</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>常规计算（最常用）</td><td>GGA-PBE 泛函</td></tr><tr><td><code>PAW_LDA</code></td><td>LDA 泛函</td><td>较少使用</td></tr><tr><td><code>_sv</code> 后缀</td><td>半芯态重要的体系</td><td>如 3d 过渡金属</td></tr><tr><td><code>_GW</code> 后缀</td><td>GW 计算</td><td>精度最高</td></tr><tr><td><code>_d</code> 后缀</td><td>含 d 电子的 p 区元素</td><td>如 Ga, Ge, As</td></tr></tbody></table><h3>3. 生成 POTCAR</h3>`,11)),t("div",Au,[t("div",Eu,[s[47]||(s[47]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[48]||(s[48]=v(`<pre><code><span class="cm"># 方法 1：手动拼接（注意顺序！）</span>
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
&quot;</code></pre>`,1))]),s[87]||(s[87]=t("h3",null,"4. 检查 POTCAR",-1)),t("div",wu,[t("div",Su,[s[49]||(s[49]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[50]||(s[50]=v(`<pre><code><span class="cm"># 查看元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 ENMAX</span>
<span class="fn2">grep</span> ENMAX POTCAR

<span class="cm"># 查看价电子数</span>
<span class="fn2">grep</span> ZVAL POTCAR

<span class="cm"># 确认顺序与 POSCAR 一致</span>
<span class="fn2">head</span> -6 POSCAR  <span class="cm"># 查看 POSCAR 元素</span>
<span class="fn2">grep</span> TITEL POTCAR <span class="cm"># 查看 POTCAR 元素</span></code></pre>`,1))]),s[88]||(s[88]=t("h2",null,"常用 INCAR 模板",-1)),s[89]||(s[89]=t("h3",null,"1. 金属结构优化",-1)),t("div",Tu,[t("div",Ru,[s[51]||(s[51]=t("span",{class:"la"},"INCAR",-1)),s[52]||(s[52]=t("span",{class:"fn"},"金属优化",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[53]||(s[53]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Metal relaxation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>                <span class="cm">; 金属用 MP 展宽</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span>               <span class="cm">; 较大的展宽</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"2. 绝缘体 DOS 计算",-1)),t("div",Ou,[t("div",Iu,[s[54]||(s[54]=t("span",{class:"la"},"INCAR",-1)),s[55]||(s[55]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[56]||(s[56]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Insulator DOS</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>               <span class="cm">; 四面体法（最准确）</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>               <span class="cm">; 输出分波 DOS</span>
<span class="kw">NEDOS</span>    = <span class="nu">2000</span>             <span class="cm">; DOS 能量点数</span></code></pre>`,1))]),s[91]||(s[91]=t("h3",null,"3. 表面计算",-1)),t("div",Nu,[t("div",Pu,[s[57]||(s[57]=t("span",{class:"la"},"INCAR",-1)),s[58]||(s[58]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[59]||(s[59]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Surface optimization</span>
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
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>                <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[92]||(s[92]=t("h3",null,"4. 磁性计算",-1)),t("div",xu,[t("div",qu,[s[60]||(s[60]=t("span",{class:"la"},"INCAR",-1)),s[61]||(s[61]=t("span",{class:"fn"},"磁性优化",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[62]||(s[62]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Magnetic calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>                <span class="cm">; 开启自旋极化</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 0 0</span>          <span class="cm">; 初始磁矩 (μB)</span>
<span class="kw">ISMEAR</span>   = <span class="nu">1</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.2</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"5. DFT+U 计算",-1)),t("div",Fu,[t("div",Mu,[s[63]||(s[63]=t("span",{class:"la"},"INCAR",-1)),s[64]||(s[64]=t("span",{class:"fn"},"DFT+U",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[65]||(s[65]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DFT+U calculation</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"6. 杂化泛函 (HSE06)",-1)),t("div",Du,[t("div",Vu,[s[66]||(s[66]=t("span",{class:"la"},"INCAR",-1)),s[67]||(s[67]=t("span",{class:"fn"},"HSE06",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...r)=>l.copy&&l.copy(...r))},"复制")]),s[68]||(s[68]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">HSE06 calculation</span>
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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[95]||(s[95]=t("div",{class:"ib warn"},[t("strong",null,"注意："),g("HSE06 计算量约为 PBE 的 10-100 倍，需要足够的计算资源。")],-1))])}const Lu=is(nu,[["render",Uu]]),$u={name:"TasksView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Bu={class:"sec active"},Ku={class:"bread"},Gu={class:"cb"},_u={class:"ch"},Wu={class:"cb"},Hu={class:"ch"},ju={class:"cb"},zu={class:"ch"},Xu={class:"cb"},Zu={class:"ch"},Yu={class:"cb"},Ju={class:"ch"},Qu={class:"cb"},sf={class:"ch"},nf={class:"cb"},tf={class:"ch"},af={class:"cb"},lf={class:"ch"},ef={class:"cb"},pf={class:"ch"},of={class:"cb"},cf={class:"ch"},rf={class:"cb"},df={class:"ch"},uf={class:"cb"},ff={class:"ch"},mf={class:"cb"},bf={class:"ch"},vf={class:"cb"},gf={class:"ch"};function hf(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Bu,[t("div",Ku,[T(c,{to:"/"},{default:M(()=>[...s[14]||(s[14]=[g("首页",-1)])]),_:1}),s[15]||(s[15]=g("/",-1)),s[16]||(s[16]=t("span",null,"计算任务",-1))]),s[58]||(s[58]=v('<h2>计算任务总览</h2><p>VASP 可以执行多种计算任务，每种任务有特定的参数设置和工作流程。</p><h3>基础计算</h3><div class="pg"><div class="pc" style="--ca:var(--blue);"><div class="pc-i">🔄</div><div class="pc-t">结构优化</div><div class="pc-d">弛豫原子位置和晶格参数</div></div><div class="pc" style="--ca:var(--green);"><div class="pc-i">📈</div><div class="pc-t">态密度 DOS</div><div class="pc-d">电子态在能量上的分布</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">📉</div><div class="pc-t">能带结构</div><div class="pc-d">沿高对称路径的能带色散</div></div></div><h2>结构优化</h2><p>结构优化是最基本的计算任务，目的是找到能量最低的原子构型。</p><h3>1. 何时需要结构优化</h3><ul><li>从实验结构或文献结构开始计算</li><li>构建了新的表面或缺陷结构</li><li>需要计算准确的晶格参数</li><li>后续计算（DOS、能带等）需要在优化结构上进行</li></ul><h3>2. 完整输入文件</h3><h4>INCAR</h4>',10)),t("div",Gu,[t("div",_u,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"体相结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[19]||(s[19]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si bulk relaxation</span>

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
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>             <span class="cm">; 展宽宽度 (eV)</span></code></pre>`,1))]),s[59]||(s[59]=t("h4",null,"POSCAR",-1)),t("div",Wu,[t("div",Hu,[s[20]||(s[20]=t("span",{class:"la"},"POSCAR",-1)),s[21]||(s[21]=t("span",{class:"fn"},"Si 金刚石",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[22]||(s[22]=v(`<pre><code><span class="vr">Si diamond</span>                    <span class="cm">; 注释行</span>
<span class="nu">1.0</span>                           <span class="cm">; 缩放因子</span>
<span class="nu">5.43  0.00  0.00</span>             <span class="cm">; 晶格矢量 a</span>
<span class="nu">0.00  5.43  0.00</span>             <span class="cm">; 晶格矢量 b</span>
<span class="nu">0.00  0.00  5.43</span>             <span class="cm">; 晶格矢量 c</span>
<span class="vr">Si</span>                             <span class="cm">; 元素符号</span>
<span class="nu">2</span>                              <span class="cm">; 原子数</span>
<span class="kw">Direct</span>                         <span class="cm">; 分数坐标</span>
<span class="nu">0.00  0.00  0.00</span>             <span class="cm">; Si 原子 1</span>
<span class="nu">0.25  0.25  0.25</span>             <span class="cm">; Si 原子 2</span></code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"KPOINTS",-1)),t("div",ju,[t("div",zu,[s[23]||(s[23]=t("span",{class:"la"},"KPOINTS",-1)),s[24]||(s[24]=t("span",{class:"fn"},"Gamma 中心",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[25]||(s[25]=v(`<pre><code><span class="vr">Automatic mesh</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">6  6  6</span>                <span class="cm">; K 点网格 (N_k × a ≈ 30)</span>
<span class="nu">0.0  0.0  0.0</span>         <span class="cm">; 偏移</span></code></pre>`,1))]),s[61]||(s[61]=v('<h3>3. ISIF 参数详解</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用场景</th></tr></thead><tbody><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子吸附、固定晶格</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化（最常用）</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积、优化形状</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅优化晶格、固定离子</td></tr></tbody></table><h3>4. 结果验证</h3>',3)),t("div",Xu,[t("div",Zu,[s[26]||(s[26]=t("span",{class:"la"},"bash",-1)),s[27]||(s[27]=t("span",{class:"fn"},"验证收敛",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[28]||(s[28]=v(`<pre><code><span class="cm"># 检查是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR

<span class="cm"># 查看最终能量</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">4</span>

<span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看优化后的晶格常数</span>
<span class="fn2">head</span> -7 CONTCAR</code></pre>`,1))]),s[62]||(s[62]=v('<div class="ib tip"><strong>收敛标准：</strong>最大力 &lt; 0.02 eV/Å，外部压力 &lt; 1 kbar 表示优化收敛良好。</div><h2>态密度 DOS 计算</h2><p>DOS 计算需要两步：① 结构优化 ② 静态计算（密集 k 点）</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">复制 CONTCAR → DOS 计算目录</div><div class="fa"></div><div class="fn2-node p">设置密集 K 点（12×12×12）</div><div class="fa"></div><div class="fn2-node p">运行静态计算</div><div class="fa"></div><div class="fn2-node e">处理 DOSCAR 数据</div></div><h3>2. DOS 计算输入文件</h3>',6)),t("div",Yu,[t("div",Ju,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),s[30]||(s[30]=t("span",{class:"fn"},"DOS 静态计算",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[31]||(s[31]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si DOS calculation</span>

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
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span>            <span class="cm">; 保留电荷密度</span></code></pre>`,1))]),t("div",Qu,[t("div",sf,[s[32]||(s[32]=t("span",{class:"la"},"KPOINTS",-1)),s[33]||(s[33]=t("span",{class:"fn"},"密集 K 点",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[34]||(s[34]=v(`<pre><code><span class="vr">DOS k-points</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">12  12  12</span>              <span class="cm">; DOS 需要更密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[63]||(s[63]=t("div",{class:"ib note"},[t("strong",null,"ISMEAR 选择："),g("绝缘体/半导体用 -5（四面体），金属用 0（Gaussian）配合 SIGMA=0.05。")],-1)),s[64]||(s[64]=t("h3",null,"3. 处理 DOS 数据",-1)),t("div",nf,[t("div",tf,[s[35]||(s[35]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[36]||(s[36]=v(`<pre><code><span class="cm"># 使用 VASPKIT 提取 DOS</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 3 → DOS Analysis</span>
<span class="cm"># 1 → Generate Total DOS</span>

<span class="cm"># 或使用 pymatgen</span>
<span class="fn2">python</span> -c &quot;
<span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
vr = Vasprun(<span class="st">&#39;vasprun.xml&#39;</span>, parse_dos=<span class="kw">True</span>)
dos = vr.complete_dos
<span class="fn2">print</span>(f<span class="st">&#39;带隙: {dos.get_band_gap()[\\&quot;energy\\&quot;]:.3f} eV&#39;</span>)
&quot;</code></pre>`,1))]),s[65]||(s[65]=v('<h2>能带结构计算</h2><p>能带计算需要：① 静态计算生成 WAVECAR ② 沿高对称路径非自洽计算</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">静态计算（生成 WAVECAR）</div><div class="fa"></div><div class="fn2-node p">生成 K 点路径</div><div class="fa"></div><div class="fn2-node p">非自洽计算（ICHARG=11）</div><div class="fa"></div><div class="fn2-node e">处理 EIGENVAL 数据</div></div><h3>2. 第一步：静态计算</h3>',5)),t("div",af,[t("div",lf,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"能带前的静态计算",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[39]||(s[39]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static for band</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 必须输出 WAVECAR</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[66]||(s[66]=t("h3",null,"3. 第二步：能带计算",-1)),s[67]||(s[67]=t("h4",null,"生成 K 点路径",-1)),t("div",ef,[t("div",pf,[s[40]||(s[40]=t("span",{class:"la"},"bash",-1)),s[41]||(s[41]=t("span",{class:"fn"},"使用 vaspkit 生成",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[42]||(s[42]=v(`<pre><code><span class="cm"># 方法 1：使用 vaspkit 自动生成</span>
<span class="fn2">vaspkit</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动生成带标签的 KPOINTS</span></code></pre>`,1))]),s[68]||(s[68]=t("h4",null,"手动编写 KPOINTS（以 Si 为例）",-1)),t("div",of,[t("div",cf,[s[43]||(s[43]=t("span",{class:"la"},"KPOINTS",-1)),s[44]||(s[44]=t("span",{class:"fn"},"Line-mode",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[45]||(s[45]=v(`<pre><code><span class="vr">k-points along high symmetry lines</span>
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
<span class="nu">0.000  0.000  0.000</span></code></pre>`,1))]),s[69]||(s[69]=t("div",{class:"ib warn"},[t("strong",null,"注意："),g("Line-mode KPOINTS 需要空行分隔每条线段！")],-1)),s[70]||(s[70]=t("h4",null,"能带计算 INCAR",-1)),t("div",rf,[t("div",df,[s[46]||(s[46]=t("span",{class:"la"},"INCAR",-1)),s[47]||(s[47]=t("span",{class:"fn"},"能带非自洽计算",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[48]||(s[48]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si band structure</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>

<span class="cm"># 关键：非自洽计算</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>               <span class="cm">; 从 WAVECAR 读取电荷密度</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 输出投影能带</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span></code></pre>`,1))]),s[71]||(s[71]=v('<h3>4. 高对称点参考</h3><table class="tb"><thead><tr><th>晶系</th><th>常用路径</th></tr></thead><tbody><tr><td>立方 (cubic)</td><td>Γ → X → M → Γ → R → X</td></tr><tr><td>四方 (tetragonal)</td><td>Γ → X → M → Γ → Z → R → A</td></tr><tr><td>六方 (hexagonal)</td><td>Γ → M → K → Γ → A → L</td></tr><tr><td>正交 (orthorhombic)</td><td>Γ → X → S → Y → Γ → Z → U</td></tr></tbody></table><h3>5. 处理能带数据</h3>',3)),t("div",uf,[t("div",ff,[s[49]||(s[49]=t("span",{class:"la"},"python",-1)),s[50]||(s[50]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[51]||(s[51]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[72]||(s[72]=t("h2",null,"静态计算",-1)),s[73]||(s[73]=t("p",null,"静态计算用于在固定结构上计算电子性质，不改变原子位置。",-1)),s[74]||(s[74]=t("h3",null,"INC AR 设置",-1)),t("div",mf,[t("div",bf,[s[52]||(s[52]=t("span",{class:"la"},"INCAR",-1)),s[53]||(s[53]=t("span",{class:"fn"},"静态计算",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[54]||(s[54]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si static calculation</span>

<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>

<span class="kw">IBRION</span>   = <span class="nu">-1</span>               <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>                <span class="cm">; 无离子步</span>

<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[75]||(s[75]=v('<h2>任务类型对比</h2><table class="tb"><thead><tr><th>任务类型</th><th>IBRION</th><th>NSW</th><th>ISIF</th><th>ISMEAR</th><th>输出</th></tr></thead><tbody><tr><td>结构优化</td><td>1 或 2</td><td>&gt;0</td><td>2 或 3</td><td>0 或 1</td><td>CONTCAR</td></tr><tr><td>静态计算</td><td>-1</td><td>0</td><td>-</td><td>0/-5</td><td>DOSCAR</td></tr><tr><td>DOS 计算</td><td>-1</td><td>0</td><td>-</td><td>-5</td><td>DOSCAR</td></tr><tr><td>能带计算</td><td>-1</td><td>0</td><td>-</td><td>0</td><td>EIGENVAL</td></tr></tbody></table><h2>完整工作流示例</h2>',3)),t("div",vf,[t("div",gf,[s[55]||(s[55]=t("span",{class:"la"},"bash",-1)),s[56]||(s[56]=t("span",{class:"fn"},"workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[57]||(s[57]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))])])}const yf=is($u,[["render",hf]]),kf={name:"OutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Cf={class:"sec active"},Af={class:"bread"},Ef={class:"cb"},wf={class:"ch"},Sf={class:"cb"},Tf={class:"ch"},Rf={class:"cb"},Of={class:"ch"},If={class:"cb"},Nf={class:"ch"},Pf={class:"cb"},xf={class:"ch"},qf={class:"cb"},Ff={class:"ch"},Mf={class:"cb"},Df={class:"ch"},Vf={class:"cb"},Uf={class:"ch"},Lf={class:"cb"},$f={class:"ch"};function Bf(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Cf,[t("div",Af,[T(c,{to:"/"},{default:M(()=>[...s[9]||(s[9]=[g("首页",-1)])]),_:1}),s[10]||(s[10]=g("/",-1)),s[11]||(s[11]=t("span",null,"结果分析",-1))]),s[35]||(s[35]=v('<h2>输出文件解读</h2><p>理解 VASP 输出文件是成功完成计算的关键。本节详细介绍各输出文件的内容和分析方法。</p><h3>输出文件总览</h3><table class="tb"><thead><tr><th>文件</th><th>内容</th><th>大小</th><th>重要性</th></tr></thead><tbody><tr><td><code>OUTCAR</code></td><td>详细输出（所有计算信息）</td><td>大</td><td>★★★★★</td></tr><tr><td><code>OSZICAR</code></td><td>迭代摘要（收敛曲线）</td><td>小</td><td>★★★★</td></tr><tr><td><code>CONTCAR</code></td><td>最终结构（下一步 POSCAR）</td><td>小</td><td>★★★★★</td></tr><tr><td><code>DOSCAR</code></td><td>态密度数据</td><td>中</td><td>★★★</td></tr><tr><td><code>EIGENVAL</code></td><td>本征值（能带数据）</td><td>中</td><td>★★★</td></tr><tr><td><code>CHGCAR</code></td><td>电荷密度</td><td>大</td><td>★★</td></tr><tr><td><code>WAVECAR</code></td><td>波函数</td><td>很大</td><td>★★</td></tr><tr><td><code>vasprun.xml</code></td><td>XML 格式完整输出</td><td>大</td><td>★★★★</td></tr></tbody></table><h2>OUTCAR 详解</h2><p>OUTCAR 包含 VASP 计算的所有详细信息，是最重要的输出文件。</p><h3>1. 关键信息位置</h3><table class="tb"><thead><tr><th>信息</th><th>grep 命令</th><th>说明</th></tr></thead><tbody><tr><td>总能量（自由能）</td><td><code>grep &quot;free energy&quot; OUTCAR</code></td><td>最重要的能量</td></tr><tr><td>总能量（无熵）</td><td><code>grep &quot;energy without&quot; OUTCAR</code></td><td>更准确的能量</td></tr><tr><td>力</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td><td>每个原子的力</td></tr><tr><td>应力</td><td><code>grep &quot;in kB&quot; OUTCAR</code></td><td>应力张量</td></tr><tr><td>外部压力</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td><td>标量压力</td></tr><tr><td>费米能级</td><td><code>grep &quot;E-fermi&quot; OUTCAR</code></td><td>费米能</td></tr><tr><td>磁矩</td><td><code>grep &quot;magnetization&quot; OUTCAR</code></td><td>自旋磁矩</td></tr><tr><td>收敛检查</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td><td>是否收敛</td></tr><tr><td>计算时间</td><td><code>grep &quot;Total CPU time&quot; OUTCAR</code></td><td>总耗时</td></tr><tr><td>NELECT</td><td><code>grep &quot;NELECT&quot; OUTCAR</code></td><td>总电子数</td></tr></tbody></table><h3>2. 提取能量</h3>',9)),t("div",Ef,[t("div",wf,[s[12]||(s[12]=t("span",{class:"la"},"bash",-1)),s[13]||(s[13]=t("span",{class:"fn"},"提取能量",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[14]||(s[14]=v(`<pre><code><span class="cm"># 提取最终自由能</span>
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
<span class="fn2">echo</span> <span class="st">&quot;每原子能量: $per_atom eV/atom&quot;</span></code></pre>`,1))]),s[36]||(s[36]=t("h3",null,"3. 提取力和应力",-1)),t("div",Sf,[t("div",Tf,[s[15]||(s[15]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[16]||(s[16]=v(`<pre><code><span class="cm"># 查看最后一步的力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">10</span> | <span class="fn2">tail</span> -12
<span class="cm"># 输出每个原子的 x y z 力分量</span>

<span class="cm"># 提取最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">100</span> | <span class="fn2">grep</span> -v <span class="st">&quot;TOTAL\\|---&quot;</span> | <span class="fn2">awk</span> <span class="st">&#39;{print sqrt($4*$4+$5*$5+$6*$6)}&#39;</span> | <span class="fn2">sort</span> -n | <span class="fn2">tail</span> -1

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: XX YY ZZ XY YZ ZX</span>

<span class="cm"># 查看外部压力（标量）</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 输出: external pressure =    -1.23 kB</span></code></pre>`,1))]),s[37]||(s[37]=t("h3",null,"4. 检查收敛状态",-1)),t("div",Rf,[t("div",Of,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[18]||(s[18]=v(`<pre><code><span class="cm"># 检查是否收敛（输出包含 &quot;reached required&quot; 表示收敛）</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required accuracy&quot;</span> OUTCAR
<span class="cm"># 成功输出: reached required accuracy - stopping structural energy minimisation</span>

<span class="cm"># 检查电子步收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;EDIFF&quot;</span> OUTCAR

<span class="cm"># 查看离子步数</span>
<span class="fn2">grep</span> <span class="st">&quot;FREE ENERGIE&quot;</span> OUTCAR | <span class="fn2">wc</span> -l</code></pre>`,1))]),s[38]||(s[38]=t("div",{class:"ib tip"},[t("strong",null,"收敛判断："),g("看到 "),t("code",null,"reached required accuracy"),g(" 表示计算成功收敛。")],-1)),s[39]||(s[39]=t("h3",null,"5. 检查计算状态",-1)),t("div",If,[t("div",Nf,[s[19]||(s[19]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[20]||(s[20]=v(`<pre><code><span class="cm"># 检查是否有错误</span>
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR

<span class="cm"># 查看计算时间</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR

<span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -5

<span class="cm"># 查看 K 点信息</span>
<span class="fn2">grep</span> <span class="st">&quot;NKPTS&quot;</span> OUTCAR | <span class="fn2">head</span> -1</code></pre>`,1))]),s[40]||(s[40]=v(`<h2>OSZICAR 详解</h2><p>OSZICAR 记录每次迭代的简要信息，用于监控收敛过程。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">OSZICAR</span><span class="fn">示例内容</span></div><pre><code><span class="cm"># 列说明: N  E  dE  dep  dep2  ncg  rms  rms(cg)</span>
   1  F= -.156234E+03 E0= -.156234E+03  d E =-.156234E+03  mag=     0.0000
   2  F= -.156456E+03 E0= -.156456E+03  d E =-.222000E-01  mag=     0.0000
   3  F= -.156467E+03 E0= -.156467E+03  d E =-.110000E-02  mag=     0.0000
   4  F= -.156468E+03 E0= -.156468E+03  d E =-.100000E-04  mag=     0.0000
   5 F= -.156468E+03 E0= -.156468E+03  d E =-.980000E-06  mag=     0.0000</code></pre></div><table class="tb"><thead><tr><th>列</th><th>含义</th></tr></thead><tbody><tr><td>N</td><td>离子步数（或电子步数）</td></tr><tr><td>F</td><td>总能量</td></tr><tr><td>E0</td><td>无熵校正能量</td></tr><tr><td>d E</td><td>能量变化</td></tr><tr><td>mag</td><td>总磁矩</td></tr></tbody></table><h3>2. 绘制收敛曲线</h3>`,6)),t("div",Pf,[t("div",xf,[s[21]||(s[21]=t("span",{class:"la"},"python",-1)),s[22]||(s[22]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[23]||(s[23]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[41]||(s[41]=t("h2",null,"CONTCAR 详解",-1)),s[42]||(s[42]=t("p",null,"CONTCAR 包含优化后的最终结构，格式与 POSCAR 相同。",-1)),s[43]||(s[43]=t("h3",null,"使用注意事项",-1)),s[44]||(s[44]=t("ul",null,[t("li",null,[t("strong",null,"下一次计算"),g("：将 CONTCAR 复制为 POSCAR 继续计算")]),t("li",null,[t("strong",null,"检查晶格变化"),g("：比较初始和最终晶格常数")]),t("li",null,[t("strong",null,"检查原子位置"),g("：确认优化后的结构合理")])],-1)),t("div",qf,[t("div",Ff,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[25]||(s[25]=v(`<pre><code><span class="cm"># 查看优化后的晶格常数</span>
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
&quot;</code></pre>`,1))]),s[45]||(s[45]=v(`<h2>DOSCAR 详解</h2><p>DOSCAR 包含态密度数据，用于分析电子结构。</p><h3>1. 文件格式</h3><div class="cb"><div class="ch"><span class="la">DOSCAR</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1: 原子数
Line 2-5: 头部信息
Line 6: NEDOS EMIN EMAX EFERMI SPIN
Line 7-NEDOS+6: 能量 DOS(上) DOS(下) 积分DOS(上) 积分DOS(下)
<span class="cm"># 后续是每个原子的分波 DOS</span></code></pre></div><h3>2. 提取和绘制 DOS</h3>`,5)),t("div",Mf,[t("div",Df,[s[26]||(s[26]=t("span",{class:"la"},"python",-1)),s[27]||(s[27]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[28]||(s[28]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[46]||(s[46]=v(`<h2>EIGENVAL 详解</h2><p>EIGENVAL 包含本征值数据，用于绘制能带结构。</p><h3>文件格式</h3><div class="cb"><div class="ch"><span class="la">EIGENVAL</span><span class="fn">格式说明</span></div><pre><code><span class="cm"># 文件结构</span>
Line 1-4: 头部信息
Line 5: NEDOS NKPTS NBANDS (能量点数, K点数, 能带数)
Line 6: 空行
<span class="cm"># 重复以下结构（每个 K 点）：</span>
Line: kx ky kz weight
Line: band_index energy occupancy
<span class="cm"># ... (NBANDS 行)</span></code></pre></div><h2>计算成功判断标准</h2><h3>1. 结构优化成功标志</h3><table class="tb"><thead><tr><th>检查项</th><th>成功标志</th><th>检查命令</th></tr></thead><tbody><tr><td>收敛</td><td>输出 &quot;reached required accuracy&quot;</td><td><code>grep &quot;reached required&quot; OUTCAR</code></td></tr><tr><td>力</td><td>最大力 &lt; 0.02 eV/Å</td><td><code>grep &quot;TOTAL-FORCE&quot; OUTCAR</code></td></tr><tr><td>压力</td><td>外部压力 &lt; 1 kbar</td><td><code>grep &quot;external pressure&quot; OUTCAR</code></td></tr><tr><td>能量</td><td>能量变化 &lt; EDIFF</td><td><code>grep &quot;d E&quot; OSZICAR</code></td></tr></tbody></table><h3>2. 常见失败模式</h3><table class="tb"><thead><tr><th>问题</th><th>症状</th><th>解决方案</th></tr></thead><tbody><tr><td>SCF 不收敛</td><td>电子步达到 NELM</td><td>调整 MAGMOM、ISMEAR</td></tr><tr><td>结构发散</td><td>能量持续增大</td><td>减小 POTIM</td></tr><tr><td>原子跑飞</td><td>能量 ~10^6 eV</td><td>检查初始结构</td></tr><tr><td>内存不足</td><td>Killed</td><td>使用 LREAL=Auto</td></tr></tbody></table><h3>3. 完整检查脚本</h3>`,10)),t("div",Vf,[t("div",Uf,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),s[30]||(s[30]=t("span",{class:"fn"},"check_calc.sh",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[31]||(s[31]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 检查完成 ===&quot;</span></code></pre>`,1))]),s[47]||(s[47]=t("h2",null,"收敛性测试",-1)),s[48]||(s[48]=t("p",null,"收敛性测试确保计算参数足够精确。",-1)),t("div",Lf,[t("div",$f,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),s[33]||(s[33]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[34]||(s[34]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[49]||(s[49]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),g("相邻 ENCUT 能量差 < 1 meV/atom 时收敛。")],-1))])}const Kf=is(kf,[["render",Bf]]),Gf={name:"ErrorsView",data(){return{openSections:{e1:!0,e2:!1}}},methods:{toggle(n){this.openSections[n]=!this.openSections[n]},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},_f={class:"sec active"},Wf={class:"bread"},Hf={class:"cb"},jf={class:"ch"},zf={class:"ec-b"},Xf={class:"cb"},Zf={class:"ch"},Yf={class:"ec-b"},Jf={class:"cb"},Qf={class:"ch"};function s1(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",_f,[t("div",Wf,[T(c,{to:"/"},{default:M(()=>[...s[5]||(s[5]=[g("首页",-1)])]),_:1}),s[6]||(s[6]=g("/",-1)),s[7]||(s[7]=t("span",null,"错误诊断",-1))]),s[23]||(s[23]=v('<h2>VASP 错误诊断系统</h2><p>使用 VASP 时难免遇到报错，这个系统帮你快速定位和解决问题。</p><div class="pg"><div class="pc" style="--ca:var(--red);"><div class="pc-i">⚡</div><div class="pc-t">SCF 不收敛</div><div class="pc-d">电子步迭代无法收敛——最高频问题</div></div><div class="pc" style="--ca:var(--orange);"><div class="pc-i">💥</div><div class="pc-t">离子步问题</div><div class="pc-d">优化不收敛、力振荡、原子跑飞</div></div><div class="pc" style="--ca:var(--purple);"><div class="pc-i">💾</div><div class="pc-t">内存与性能</div><div class="pc-d">内存溢出、计算太慢、并行效率低</div></div><div class="pc" style="--ca:var(--blue);"><div class="pc-i">📂</div><div class="pc-t">文件错误</div><div class="pc-d">POTCAR 不匹配、POSCAR 格式错误</div></div></div><h3>通用诊断流程</h3><div class="fc"><div class="fn2-node s">VASP 计算异常终止</div><div class="fa"></div><div class="fn2-node p">① 查看 OUTCAR 最后 50 行</div><div class="fa"></div><div class="fn2-node p">② 查看 OSZICAR 收敛情况</div><div class="fa"></div><div class="fn2-node p">③ 检查四个输入文件</div><div class="fa"></div><div class="fn2-node p">④ 搜索错误关键词</div><div class="fa"></div><div class="fn2-node e">定位问题 → 应用解决方案</div></div>',5)),t("div",Hf,[t("div",jf,[s[8]||(s[8]=t("span",{class:"la"},"bash",-1)),s[9]||(s[9]=t("span",{class:"fn"},"快速诊断",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[10]||(s[10]=v(`<pre><code><span class="fn2">tail</span> -50 OUTCAR
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort\\|ZBRENT\\|DENTET&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">cat</span> OSZICAR
<span class="fn2">df</span> -h .</code></pre>`,1))]),s[24]||(s[24]=t("h3",null,"SCF 不收敛问题",-1)),s[25]||(s[25]=t("p",null,"SCF 不收敛是最高频的问题。以下是完整排查清单。",-1)),t("div",{class:X(["ec",{open:p.openSections.e1}]),onClick:s[2]||(s[2]=o=>l.toggle("e1"))},[s[16]||(s[16]=v('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 1：电子步达到 NELM 上限仍未收敛</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",zf,[s[13]||(s[13]=t("h4",null,"症状",-1)),s[14]||(s[14]=t("div",{class:"esym"},[g("DAV: 64 -0.275E+03 0.217E+00 -0.109E+00"),t("br"),g("（能量差持续振荡不下降）")],-1)),s[15]||(s[15]=t("h4",null,"解决方案",-1)),t("div",Xf,[t("div",Zf,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=ql((...o)=>l.copy&&l.copy(...o),["stop"]))},"复制")]),s[12]||(s[12]=v(`<pre><code><span class="cm"># 方案 1：降低收敛标准</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>

<span class="cm"># 方案 2：更稳定的混合方法</span>
<span class="kw">AMIX</span>     = <span class="nu">0.2</span>
<span class="kw">BMIX</span>     = <span class="nu">0.0001</span>

<span class="cm"># 方案 3：增加最大电子步</span>
<span class="kw">NELM</span>     = <span class="nu">200</span></code></pre>`,1))])])],2),t("div",{class:X(["ec",{open:p.openSections.e2}]),onClick:s[4]||(s[4]=o=>l.toggle("e2"))},[s[22]||(s[22]=v('<div class="ec-h"><span class="ei">🔴</span><span class="et">问题 2：DENTET - 能带数不足</span><span class="es sc">高频</span><span class="ex">▼</span></div>',1)),t("div",Yf,[s[19]||(s[19]=t("h4",null,"症状",-1)),s[20]||(s[20]=t("div",{class:"esym"},[g("WARNING: DENTET: can't reach specified NBANDS"),t("br"),g("NELECT = 120.0000 NBANDS = 64")],-1)),s[21]||(s[21]=t("h4",null,"解决方案",-1)),t("div",Jf,[t("div",Qf,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=ql((...o)=>l.copy&&l.copy(...o),["stop"]))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[t("span",{class:"kw"},"NBANDS"),g("   = "),t("span",{class:"nu"},"160"),g(`
`),t("span",{class:"cm"},"# 经验: NBANDS ≥ NELECT/2 + N_atoms/2")])],-1))])])],2)])}const n1=is(Gf,[["render",s1]]),t1={name:"ToolsView",methods:{openLink(n){window.open(n,"_blank")},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},a1={class:"sec active"},l1={class:"bread"},e1={class:"pg"},p1={class:"cb"},o1={class:"ch"},c1={class:"cb"},r1={class:"ch"},i1={class:"cb"},d1={class:"ch"},u1={class:"cb"},f1={class:"ch"},m1={class:"cb"},b1={class:"ch"},v1={class:"cb"},g1={class:"ch"},h1={class:"cb"},y1={class:"ch"},k1={class:"cb"},C1={class:"ch"},A1={class:"cb"},E1={class:"ch"},w1={class:"cb"},S1={class:"ch"},T1={class:"cb"},R1={class:"ch"},O1={class:"cb"},I1={class:"ch"},N1={class:"cb"},P1={class:"ch"},x1={class:"cb"},q1={class:"ch"},F1={class:"cb"},M1={class:"ch"},D1={class:"cb"},V1={class:"ch"},U1={class:"cb"},L1={class:"ch"};function $1(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",a1,[t("div",l1,[T(c,{to:"/"},{default:M(()=>[...s[21]||(s[21]=[g("首页",-1)])]),_:1}),s[22]||(s[22]=g("/",-1)),s[23]||(s[23]=t("span",null,"工具与资源",-1))]),s[74]||(s[74]=t("h2",null,"辅助工具",-1)),s[75]||(s[75]=t("p",null,"VASP 计算需要配合多种工具进行结构可视化、数据处理和后分析。",-1)),t("div",e1,[T(c,{to:"/tools/calculator",class:"pc",style:{"--ca":"var(--cyan)"}},{default:M(()=>[...s[24]||(s[24]=[t("div",{class:"pc-i"},"🔧",-1),t("div",{class:"pc-t"},"参数计算器",-1),t("div",{class:"pc-d"},"ENCUT、K 点、形成能等计算工具",-1)])]),_:1}),t("div",{class:"pc",style:{"--ca":"var(--blue)"},onClick:s[0]||(s[0]=o=>l.openLink("https://www.vasp.at/wiki/index.php/VESTA"))},[...s[25]||(s[25]=[t("div",{class:"pc-i"},"🔬",-1),t("div",{class:"pc-t"},"VESTA",-1),t("div",{class:"pc-d"},"晶体结构可视化",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--green)"},onClick:s[1]||(s[1]=o=>l.openLink("https://vaspkit.com"))},[...s[26]||(s[26]=[t("div",{class:"pc-i"},"🛠️",-1),t("div",{class:"pc-t"},"VASPKIT",-1),t("div",{class:"pc-d"},"后处理工具包",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--purple)"},onClick:s[2]||(s[2]=o=>l.openLink("https://pymatgen.org"))},[...s[27]||(s[27]=[t("div",{class:"pc-i"},"🐍",-1),t("div",{class:"pc-t"},"pymatgen",-1),t("div",{class:"pc-d"},"Python 材料分析库",-1)])]),t("div",{class:"pc",style:{"--ca":"var(--orange)"},onClick:s[3]||(s[3]=o=>l.openLink("https://phonopy.github.io/phonopy"))},[...s[28]||(s[28]=[t("div",{class:"pc-i"},"🔊",-1),t("div",{class:"pc-t"},"phonopy",-1),t("div",{class:"pc-d"},"声子计算工具",-1)])])]),s[76]||(s[76]=v(`<h2>VESTA 使用入门</h2><p>VESTA 是最常用的晶体结构可视化软件，支持多种格式。</p><h3>1. 基本操作</h3><table class="tb"><thead><tr><th>操作</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>打开文件</td><td>File → Open → 选择 POSCAR</td><td>支持 VASP、CIF、XSF 等格式</td></tr><tr><td>旋转结构</td><td>鼠标左键拖动</td><td>多角度查看</td></tr><tr><td>缩放</td><td>鼠标滚轮</td><td>放大/缩小</td></tr><tr><td>平移</td><td>鼠标右键拖动</td><td>移动视角</td></tr><tr><td>测量距离</td><td>Utilities → Distance</td><td>点击两个原子</td></tr><tr><td>测量角度</td><td>Utilities → Angle</td><td>点击三个原子</td></tr><tr><td>截图</td><td>File → Export Raster Image</td><td>导出 PNG/JPG</td></tr></tbody></table><h3>2. 显示设置</h3><div class="cb"><div class="ch"><span class="la">VESTA</span><span class="fn">常用设置路径</span></div><pre><code><span class="cm"># 修改原子大小和颜色</span>
Objects → Atoms → Properties

<span class="cm"># 显示晶胞边界</span>
Objects → Unit cell → Boundary

<span class="cm"># 显示键</span>
Objects → Bonds → Search bonds

<span class="cm"># 显示坐标轴</span>
Objects → Axes

<span class="cm"># 修改背景颜色</span>
View → Background color</code></pre></div><h3>3. 常用技巧</h3><ul><li><strong>显示超胞：</strong>Edit → Edit Data → Structure → Transform → 扩展晶胞</li><li><strong>切表面：</strong>Utilities → Boundary → 设置截断平面</li><li><strong>导出高分辨率图：</strong>File → Export → 设置 DPI ≥ 300</li><li><strong>比较结构：</strong>File → Open → 选择多个文件同时显示</li></ul><h2>VASPKIT 使用指南</h2><p>VASPKIT 是 VASP 后处理的瑞士军刀，提供 200+ 功能。</p><h3>1. 安装与配置</h3>`,11)),t("div",p1,[t("div",o1,[s[29]||(s[29]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[30]||(s[30]=v(`<pre><code><span class="cm"># 下载安装</span>
<span class="fn2">git</span> clone https://github.com/vaspkit/VASPKIT.git
<span class="fn2">cd</span> VASPKIT
<span class="fn2">./setup.sh</span>

<span class="cm"># 配置环境变量（添加到 ~/.bashrc）</span>
<span class="fn2">export</span> PATH=$PATH:~/VASPKIT/bin

<span class="cm"># 验证安装</span>
<span class="fn2">vaspkit</span> -v</code></pre>`,1))]),s[77]||(s[77]=v('<h3>2. 常用功能速查</h3><table class="tb"><thead><tr><th>功能</th><th>菜单路径</th><th>说明</th></tr></thead><tbody><tr><td>生成 K 路径</td><td>2 → 2 → 1</td><td>Line-mode KPOINTS</td></tr><tr><td>处理 DOS</td><td>3 → 1 → 1</td><td>提取 DOS 数据</td></tr><tr><td>处理能带</td><td>3 → 2 → 1</td><td>提取能带数据</td></tr><tr><td>电荷密度</td><td>5 → 1</td><td>处理 CHGCAR</td></tr><tr><td>结构转换</td><td>7 → 1</td><td>POSCAR ↔ CIF</td></tr><tr><td>生成 POTCAR</td><td>1 → 1</td><td>自动拼接赝势</td></tr></tbody></table><h3>3. 生成 K 点路径</h3>',3)),t("div",c1,[t("div",r1,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),s[32]||(s[32]=t("span",{class:"fn"},"vaspkit 生成能带 K 路径",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[33]||(s[33]=v(`<pre><code><span class="cm"># 运行 vaspkit</span>
<span class="fn2">vaspkit</span>

<span class="cm"># 选择菜单</span>
<span class="cm"># 2 → Material Science Utilities</span>
<span class="cm"># 2 → K-Path Generator</span>
<span class="cm"># 1 → Generate K-Path for Band Structure</span>

<span class="cm"># 自动识别高对称点并生成 KPOINTS</span></code></pre>`,1))]),s[78]||(s[78]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",i1,[t("div",d1,[s[34]||(s[34]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[35]||(s[35]=v(`<pre><code><span class="cm"># 提取总 DOS</span>
<span class="fn2">vaspkit</span> -task 311

<span class="cm"># 提取分波 DOS (PDOS)</span>
<span class="fn2">vaspkit</span> -task 312

<span class="cm"># 生成 DOS 数据文件（TOTEL_DOS.dat, PDOS_*.dat）</span>

<span class="cm"># 使用 origin 或 gnuplot 绘图</span></code></pre>`,1))]),s[79]||(s[79]=t("h2",null,"pymatgen Python 示例",-1)),s[80]||(s[80]=t("p",null,"pymatgen 是最强大的 Python 材料分析库，支持 VASP 输入输出处理。",-1)),s[81]||(s[81]=t("h3",null,"1. 安装",-1)),t("div",u1,[t("div",f1,[s[36]||(s[36]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[37]||(s[37]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 pymatgen"),g(`
`),t("span",{class:"fn2"},"pip"),g(` install pymatgen

`),t("span",{class:"cm"},"# 安装 VASP 接口依赖"),g(`
`),t("span",{class:"fn2"},"pip"),g(" install pymatgen-analysis-diffusion")])],-1))]),s[82]||(s[82]=t("h3",null,"2. 读取和处理结构",-1)),t("div",m1,[t("div",b1,[s[38]||(s[38]=t("span",{class:"la"},"python",-1)),s[39]||(s[39]=t("span",{class:"fn"},"read_structure.py",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[40]||(s[40]=v(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
supercell.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_supercell&quot;</span>)</code></pre>`,1))]),s[83]||(s[83]=t("h3",null,"3. 处理 VASP 输出",-1)),t("div",v1,[t("div",g1,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"read_vasp_output.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[43]||(s[43]=v(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun, Outcar

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
<span class="fn2">print</span>(f<span class="st">&quot;费米能级: {outcar.efermi:.4f} eV&quot;</span>)</code></pre>`,1))]),s[84]||(s[84]=t("h3",null,"4. 处理 DOS 数据",-1)),t("div",h1,[t("div",y1,[s[44]||(s[44]=t("span",{class:"la"},"python",-1)),s[45]||(s[45]=t("span",{class:"fn"},"dos_analysis.py",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[46]||(s[46]=v(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> Vasprun
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
plt.show()</code></pre>`,1))]),s[85]||(s[85]=t("h3",null,"5. 处理能带数据",-1)),t("div",k1,[t("div",C1,[s[47]||(s[47]=t("span",{class:"la"},"python",-1)),s[48]||(s[48]=t("span",{class:"fn"},"band_analysis.py",-1)),t("button",{class:"cpb",onClick:s[11]||(s[11]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[49]||(s[49]=v(`<pre><code><span class="kw">from</span> pymatgen.io.vasp <span class="kw">import</span> BSVasprun
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
plt.show()</code></pre>`,1))]),s[86]||(s[86]=t("h2",null,"phonopy 声子计算",-1)),s[87]||(s[87]=t("p",null,"phonopy 是计算声子谱的标准工具。",-1)),s[88]||(s[88]=t("h3",null,"1. 安装",-1)),t("div",A1,[t("div",E1,[s[50]||(s[50]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[12]||(s[12]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[51]||(s[51]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 安装 phonopy"),g(`
`),t("span",{class:"fn2"},"pip"),g(` install phonopy

`),t("span",{class:"cm"},"# 验证安装"),g(`
`),t("span",{class:"fn2"},"phonopy"),g(" --version")])],-1))]),s[89]||(s[89]=t("h3",null,"2. 基本工作流",-1)),t("div",w1,[t("div",S1,[s[52]||(s[52]=t("span",{class:"la"},"bash",-1)),s[53]||(s[53]=t("span",{class:"fn"},"phonopy_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[13]||(s[13]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[54]||(s[54]=v(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[90]||(s[90]=t("h3",null,"3. band.conf 配置文件",-1)),t("div",T1,[t("div",R1,[s[55]||(s[55]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[14]||(s[14]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[56]||(s[56]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 声子谱计算配置"),g(`
ATOM_NAME = Si
DIM = 3 3 3

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),g(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51`)])],-1))]),s[91]||(s[91]=t("h2",null,"常用后处理脚本",-1)),s[92]||(s[92]=t("h3",null,"1. 能量提取脚本",-1)),t("div",O1,[t("div",I1,[s[57]||(s[57]=t("span",{class:"la"},"bash",-1)),s[58]||(s[58]=t("span",{class:"fn"},"get_energy.sh",-1)),t("button",{class:"cpb",onClick:s[15]||(s[15]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[59]||(s[59]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[93]||(s[93]=t("h3",null,"2. DOS 绘图脚本",-1)),t("div",N1,[t("div",P1,[s[60]||(s[60]=t("span",{class:"la"},"python",-1)),s[61]||(s[61]=t("span",{class:"fn"},"plot_dos.py",-1)),t("button",{class:"cpb",onClick:s[16]||(s[16]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[62]||(s[62]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[94]||(s[94]=t("h3",null,"3. 能带图绘制脚本",-1)),t("div",x1,[t("div",q1,[s[63]||(s[63]=t("span",{class:"la"},"python",-1)),s[64]||(s[64]=t("span",{class:"fn"},"plot_band.py",-1)),t("button",{class:"cpb",onClick:s[17]||(s[17]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[65]||(s[65]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[95]||(s[95]=t("h2",null,"批量计算脚本模板",-1)),s[96]||(s[96]=t("h3",null,"1. 批量结构优化",-1)),t("div",F1,[t("div",M1,[s[66]||(s[66]=t("span",{class:"la"},"bash",-1)),s[67]||(s[67]=t("span",{class:"fn"},"batch_optimize.sh",-1)),t("button",{class:"cpb",onClick:s[18]||(s[18]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[68]||(s[68]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;All jobs submitted!&quot;</span></code></pre>`,1))]),s[97]||(s[97]=t("h3",null,"2. ENCUT 收敛测试",-1)),t("div",D1,[t("div",V1,[s[69]||(s[69]=t("span",{class:"la"},"bash",-1)),s[70]||(s[70]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[19]||(s[19]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[71]||(s[71]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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
<span class="kw">done</span></code></pre>`,1))]),s[98]||(s[98]=t("h2",null,"常用命令速查",-1)),t("div",U1,[t("div",L1,[s[72]||(s[72]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[20]||(s[20]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[73]||(s[73]=v(`<pre><code><span class="cm"># 提取能量</span>
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
<span class="fn2">grep</span> NELECT OUTCAR</code></pre>`,1))])])}const B1=is(t1,[["render",$1]]),K1={name:"CalculatorView",data(){return{enmax:250,safetyFactor:1.3,latticeA:5.43,latticeB:5.43,latticeC:5.43,targetNa:30,numAtoms:100,encutForMem:400,numKpoints:64,eAB:-3.72,eA:-3.5,eB:-4.86,moleFraction:.5,eSlabAds:-156.234,eSlab:-148.5,eMol:-9.86}},computed:{recommendedEncut(){return Math.round(this.enmax*this.safetyFactor)},kpoints(){const n=s=>Math.max(1,Math.ceil(s));return{a:n(this.targetNa/this.latticeA),b:n(this.targetNa/this.latticeB),c:n(this.targetNa/this.latticeC)}},totalKpoints(){return this.kpoints.a*this.kpoints.b*this.kpoints.c},estimatedMemory(){const n=this.encutForMem/400*.1,s=this.numAtoms*n*Math.sqrt(this.numKpoints);return Math.round(s*10)/10},formationEnergy(){return this.eAB-this.moleFraction*this.eA-(1-this.moleFraction)*this.eB},adsorptionEnergy(){return this.eSlabAds-this.eSlab-this.eMol}}},G1={class:"sec active"},_1={class:"bread"},W1={class:"calculator-card"},H1={class:"calc-input-group"},j1={class:"calc-input-group"},z1={class:"calc-result"},X1={class:"result-value"},Z1={class:"result-note"},Y1={class:"calc-formula"},J1={class:"calculator-card"},Q1={class:"calc-input-group"},s0={class:"calc-input-group"},n0={class:"calc-input-group"},t0={class:"calc-input-group"},a0={class:"calc-result"},l0={class:"result-value kpoints-grid"},e0={class:"result-note"},p0={class:"calc-formula"},o0={class:"calculator-card"},c0={class:"calc-input-group"},r0={class:"calc-input-group"},i0={class:"calc-input-group"},d0={class:"calc-result"},u0={class:"result-value"},f0={class:"calculator-card"},m0={class:"calc-input-group"},b0={class:"calc-input-group"},v0={class:"calc-input-group"},g0={class:"calc-input-group"},h0={class:"calc-result"},y0={class:"result-note"},k0={class:"calculator-card"},C0={class:"calc-input-group"},A0={class:"calc-input-group"},E0={class:"calc-input-group"},w0={class:"calc-result"},S0={class:"result-note"};function T0(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",G1,[t("div",_1,[T(c,{to:"/"},{default:M(()=>[...s[16]||(s[16]=[g("首页",-1)])]),_:1}),s[18]||(s[18]=g("/ ",-1)),T(c,{to:"/tools"},{default:M(()=>[...s[17]||(s[17]=[g("工具",-1)])]),_:1}),s[19]||(s[19]=g("/ ",-1)),s[20]||(s[20]=t("span",null,"计算工具",-1))]),s[47]||(s[47]=t("h2",null,"实用计算工具",-1)),s[48]||(s[48]=t("p",null,"这些工具帮助你快速计算 VASP 所需的参数。",-1)),s[49]||(s[49]=t("h3",null,"ENCUT 截断能计算器",-1)),s[50]||(s[50]=t("p",null,"根据 POTCAR 中的 ENMAX 值计算推荐的 ENCUT 设置。",-1)),t("div",W1,[t("div",H1,[s[21]||(s[21]=t("label",null,"ENMAX 最大值 (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>p.enmax=o),type:"number",placeholder:"例如: 250"},null,512),[[ws,p.enmax,void 0,{number:!0}]])]),t("div",j1,[s[23]||(s[23]=t("label",null,"安全系数",-1)),gs(t("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>p.safetyFactor=o)},[...s[22]||(s[22]=[t("option",{value:1},"1.0 (标准)",-1),t("option",{value:1.3},"1.3 (推荐)",-1),t("option",{value:1.5},"1.5 (高精度)",-1)])],512),[[Pl,p.safetyFactor,void 0,{number:!0}]])]),t("div",z1,[s[24]||(s[24]=t("div",{class:"result-label"},"推荐 ENCUT",-1)),t("div",X1,z(l.recommendedEncut)+" eV",1),t("div",Z1,"ENMAX × "+z(p.safetyFactor),1)]),t("div",Y1,[t("code",null,"ENCUT = ENMAX(max) × "+z(p.safetyFactor),1)])]),s[51]||(s[51]=t("h3",null,"K 点密度计算器",-1)),s[52]||(s[52]=t("p",null,"根据晶格常数自动推荐 K 点网格。",-1)),t("div",J1,[t("div",Q1,[s[25]||(s[25]=t("label",null,"晶格常数 a (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>p.latticeA=o),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,p.latticeA,void 0,{number:!0}]])]),t("div",s0,[s[26]||(s[26]=t("label",null,"晶格常数 b (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>p.latticeB=o),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,p.latticeB,void 0,{number:!0}]])]),t("div",n0,[s[27]||(s[27]=t("label",null,"晶格常数 c (Å)",-1)),gs(t("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>p.latticeC=o),type:"number",step:"0.01",placeholder:"例如: 5.43"},null,512),[[ws,p.latticeC,void 0,{number:!0}]])]),t("div",t0,[s[29]||(s[29]=t("label",null,"目标 N×a",-1)),gs(t("select",{"onUpdate:modelValue":s[5]||(s[5]=o=>p.targetNa=o)},[...s[28]||(s[28]=[t("option",{value:25},"25 (快速)",-1),t("option",{value:30},"30 (标准)",-1),t("option",{value:35},"35 (高精度)",-1)])],512),[[Pl,p.targetNa,void 0,{number:!0}]])]),t("div",a0,[s[30]||(s[30]=t("div",{class:"result-label"},"推荐 K 点网格",-1)),t("div",l0,[t("span",null,z(l.kpoints.a)+" × "+z(l.kpoints.b)+" × "+z(l.kpoints.c),1)]),t("div",e0,"总 K 点数: "+z(l.totalKpoints),1)]),t("div",p0,[t("code",null,"N_k = round("+z(p.targetNa)+" / lattice_a)",1)])]),s[53]||(s[53]=t("h3",null,"内存估算器",-1)),s[54]||(s[54]=t("p",null,"估算 VASP 计算所需的大致内存。",-1)),t("div",o0,[t("div",c0,[s[31]||(s[31]=t("label",null,"原子数",-1)),gs(t("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>p.numAtoms=o),type:"number",placeholder:"例如: 100"},null,512),[[ws,p.numAtoms,void 0,{number:!0}]])]),t("div",r0,[s[32]||(s[32]=t("label",null,"ENCUT (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>p.encutForMem=o),type:"number",placeholder:"例如: 400"},null,512),[[ws,p.encutForMem,void 0,{number:!0}]])]),t("div",i0,[s[33]||(s[33]=t("label",null,"K 点数",-1)),gs(t("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>p.numKpoints=o),type:"number",placeholder:"例如: 64"},null,512),[[ws,p.numKpoints,void 0,{number:!0}]])]),t("div",d0,[s[34]||(s[34]=t("div",{class:"result-label"},"估算内存",-1)),t("div",u0,z(l.estimatedMemory)+" GB",1),s[35]||(s[35]=t("div",{class:"result-note"},"每原子约 50-200 MB",-1))])]),s[55]||(s[55]=t("h3",null,"形成能计算器",-1)),s[56]||(s[56]=t("p",null,"快速计算化合物的形成能。",-1)),t("div",f0,[t("div",m0,[s[36]||(s[36]=t("label",null,"化合物能量 E(AB) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>p.eAB=o),type:"number",step:"0.001",placeholder:"例如: -3.720"},null,512),[[ws,p.eAB,void 0,{number:!0}]])]),t("div",b0,[s[37]||(s[37]=t("label",null,"参考态 A 能量 E(A) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[10]||(s[10]=o=>p.eA=o),type:"number",step:"0.001",placeholder:"例如: -3.500"},null,512),[[ws,p.eA,void 0,{number:!0}]])]),t("div",v0,[s[38]||(s[38]=t("label",null,"参考态 B 能量 E(B) (eV/atom)",-1)),gs(t("input",{"onUpdate:modelValue":s[11]||(s[11]=o=>p.eB=o),type:"number",step:"0.001",placeholder:"例如: -4.860"},null,512),[[ws,p.eB,void 0,{number:!0}]])]),t("div",g0,[s[39]||(s[39]=t("label",null,"A 的摩尔分数 x",-1)),gs(t("input",{"onUpdate:modelValue":s[12]||(s[12]=o=>p.moleFraction=o),type:"number",step:"0.1",placeholder:"例如: 0.5"},null,512),[[ws,p.moleFraction,void 0,{number:!0}]])]),t("div",h0,[s[40]||(s[40]=t("div",{class:"result-label"},"形成能 ΔH_f",-1)),t("div",{class:X(["result-value",{stable:l.formationEnergy<0,unstable:l.formationEnergy>0}])},z(l.formationEnergy.toFixed(4))+" eV/atom ",3),t("div",y0,z(l.formationEnergy<0?"✓ 热力学稳定":"✗ 热力学不稳定"),1)]),s[41]||(s[41]=t("div",{class:"calc-formula"},[t("code",null,"ΔH_f = E(AB) - x·E(A) - (1-x)·E(B)")],-1))]),s[57]||(s[57]=t("h3",null,"吸附能计算器",-1)),s[58]||(s[58]=t("p",null,"计算分子在表面的吸附能。",-1)),t("div",k0,[t("div",C0,[s[42]||(s[42]=t("label",null,"吸附体系能量 E(slab+ads) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[13]||(s[13]=o=>p.eSlabAds=o),type:"number",step:"0.001",placeholder:"例如: -156.234"},null,512),[[ws,p.eSlabAds,void 0,{number:!0}]])]),t("div",A0,[s[43]||(s[43]=t("label",null,"干净表面能量 E(slab) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[14]||(s[14]=o=>p.eSlab=o),type:"number",step:"0.001",placeholder:"例如: -148.500"},null,512),[[ws,p.eSlab,void 0,{number:!0}]])]),t("div",E0,[s[44]||(s[44]=t("label",null,"自由分子能量 E(mol) (eV)",-1)),gs(t("input",{"onUpdate:modelValue":s[15]||(s[15]=o=>p.eMol=o),type:"number",step:"0.001",placeholder:"例如: -9.860"},null,512),[[ws,p.eMol,void 0,{number:!0}]])]),t("div",w0,[s[45]||(s[45]=t("div",{class:"result-label"},"吸附能 E_ads",-1)),t("div",{class:X(["result-value",{stable:l.adsorptionEnergy<0,unstable:l.adsorptionEnergy>0}])},z(l.adsorptionEnergy.toFixed(4))+" eV ",3),t("div",S0,z(l.adsorptionEnergy<0?"✓ 吸附放热（稳定）":"✗ 吸附吸热（不稳定）"),1)]),s[46]||(s[46]=t("div",{class:"calc-formula"},[t("code",null,"E_ads = E(slab+ads) - E(slab) - E(mol)")],-1))])])}const R0=is(K1,[["render",T0],["__scopeId","data-v-e0fb01ec"]]),O0={name:"SurfaceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},I0={class:"sec active"},N0={class:"bread"},P0={class:"cb"},x0={class:"ch"},q0={class:"cb"},F0={class:"ch"},M0={class:"cb"},D0={class:"ch"},V0={class:"cb"},U0={class:"ch"};function L0(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",I0,[t("div",N0,[T(c,{to:"/"},{default:M(()=>[...s[4]||(s[4]=[g("首页",-1)])]),_:1}),s[6]||(s[6]=g("/ ",-1)),T(c,{to:"/tasks"},{default:M(()=>[...s[5]||(s[5]=[g("计算任务",-1)])]),_:1}),s[7]||(s[7]=g("/ ",-1)),s[8]||(s[8]=t("span",null,"表面计算",-1))]),s[20]||(s[20]=v('<h2>表面模型构建与计算</h2><p>表面计算是催化、腐蚀、薄膜生长等研究的基础。VASP 使用 <strong>slab 模型</strong>来模拟表面。</p><h3>1. Slab 模型结构</h3><div class="db"><div class="db-t">Slab 模型示意图</div><div style="text-align:center;font-family:var(--font-mono);font-size:13px;line-height:2.2;color:var(--text-secondary);"><div style="border:1px solid var(--border);border-radius:8px;padding:16px;display:inline-block;background:var(--bg-elevated);min-width:280px;"><div style="color:var(--blue);">← 真空层 (≥12 Å) →</div><div style="margin:8px 0;border-bottom:1px dashed var(--border-light);padding-bottom:8px;"><div style="color:var(--red);">○ ○ ○ ○ ○ ← 吸附层（可选）</div></div><div style="color:var(--green);">● ● ● ● ● ← 表面层</div><div style="color:var(--green);">● ● ● ● ● ← 次表面层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="color:var(--text-muted);">○ ○ ○ ○ ○ ← 固定层</div><div style="margin-top:8px;color:var(--accent);font-size:11px;">底部 2-3 层固定，模拟体相</div></div></div></div><h3>2. 关键参数</h3><table class="tb"><thead><tr><th>参数</th><th>建议</th><th>说明</th></tr></thead><tbody><tr><td><strong>层数</strong></td><td>4-7 层</td><td>太薄不准确，太厚计算量大</td></tr><tr><td><strong>真空层</strong></td><td>≥12 Å</td><td>防止 slab 间相互作用</td></tr><tr><td><strong>固定层</strong></td><td>底部 2-3 层</td><td>模拟体相，用 Selective dynamics</td></tr><tr><td><strong>表面尺寸</strong></td><td>依研究需要</td><td>1×1, 2×2 等</td></tr><tr><td><strong>K 点</strong></td><td>k×k×1</td><td>z 方向为 1</td></tr></tbody></table><h3>3. pymatgen 自动生成</h3>',7)),t("div",P0,[t("div",x0,[s[9]||(s[9]=t("span",{class:"la"},"python",-1)),s[10]||(s[10]=t("span",{class:"fn"},"generate_slab.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
<span class="fn2">print</span>(<span class="st">f&quot;层数: {slabgen._nlayers_slab}&quot;</span>)</code></pre>`,1))]),s[21]||(s[21]=t("h3",null,"4. INCAR 设置",-1)),t("div",q0,[t("div",F0,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"表面优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[14]||(s[14]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Cu(111) surface</span>
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
<span class="kw">IDIPOL</span>   = <span class="nu">3</span>              <span class="cm">; z 方向校正</span></code></pre>`,1))]),s[22]||(s[22]=t("h3",null,"5. KPOINTS 设置",-1)),t("div",M0,[t("div",D0,[s[15]||(s[15]=t("span",{class:"la"},"KPOINTS",-1)),s[16]||(s[16]=t("span",{class:"fn"},"表面计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[17]||(s[17]=t("pre",null,[t("code",null,[g(`Automatic mesh
0
Gamma
12 12 1               `),t("span",{class:"cm"},"; z 方向设为 1"),g(`
0.0 0.0 0.0`)])],-1))]),s[23]||(s[23]=v('<div class="ib warn"><strong>重要：</strong>表面计算<strong>必须</strong>用 <code>ISIF=2</code>；KPOINTS z 方向设为 <code>1</code>；非对称 slab 开启偶极校正。</div><h3>6. 表面能计算</h3><div class="fb"><div class="fm">γ = (E_slab - N × E_bulk) / (2 × A)</div><div class="fd">γ: 表面能, A: 表面积, 2: 两个表面, N: slab 中的原子数</div></div>',3)),t("div",V0,[t("div",U0,[s[18]||(s[18]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[19]||(s[19]=v(`<pre><code><span class="cm"># 计算表面能</span>
E_slab = <span class="nu">-156.234</span>   <span class="cm">; slab 总能量 (eV)</span>
E_bulk = <span class="nu">-3.720</span>     <span class="cm">; 体相单原子能量 (eV/atom)</span>
N = <span class="nu">48</span>              <span class="cm">; slab 中的原子数</span>
A = <span class="nu">86.52</span>           <span class="cm">; 表面积 (Å²)</span>

gamma = (E_slab - N * E_bulk) / (<span class="nu">2</span> * A)
gamma_Jm2 = gamma * <span class="nu">16.02</span>  <span class="cm">; 转换为 J/m²</span>

<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma:.4f} eV/Å²&quot;</span>)
<span class="fn2">print</span>(<span class="st">f&quot;表面能: {gamma_Jm2:.2f} J/m²&quot;</span>)</code></pre>`,1))])])}const $0=is(O0,[["render",L0]]),B0={name:"DefectView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},K0={class:"sec active"},G0={class:"bread"},_0={class:"cb"},W0={class:"ch"},H0={class:"cb"},j0={class:"ch"},z0={class:"cb"},X0={class:"ch"};function Z0(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",K0,[t("div",G0,[T(c,{to:"/"},{default:M(()=>[...s[3]||(s[3]=[g("首页",-1)])]),_:1}),s[5]||(s[5]=g("/ ",-1)),T(c,{to:"/tasks"},{default:M(()=>[...s[4]||(s[4]=[g("计算任务",-1)])]),_:1}),s[6]||(s[6]=g("/ ",-1)),s[7]||(s[7]=t("span",null,"缺陷计算",-1))]),s[16]||(s[16]=v('<h2>点缺陷形成能计算</h2><p>点缺陷（空位、间隙、替位）是理解材料性质的关键，形成能决定了缺陷浓度。</p><h3>1. 缺陷类型</h3><table class="tb"><thead><tr><th>类型</th><th>符号</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>空位</td><td>V<sub>A</sub></td><td>缺少原子 A</td><td>V<sub>Si</sub> (Si 空位)</td></tr><tr><td>间隙</td><td>A<sub>i</sub></td><td>额外原子 A</td><td>O<sub>i</sub> (O 间隙)</td></tr><tr><td>替位</td><td>B<sub>A</sub></td><td>B 替代 A</td><td>N<sub>O</sub> (N 替代 O)</td></tr><tr><td>反位</td><td>A<sub>B</sub></td><td>A 占据 B 位</td><td>As<sub>Ga</sub></td></tr></tbody></table><h3>2. 形成能公式</h3><div class="fb"><div class="fm">E<sub>f</sub> = E<sub>defect</sub> - E<sub>perfect</sub> + Σ n<sub>i</sub>μ<sub>i</sub> + q(E<sub>VBM</sub> + E<sub>Fermi</sub>) + E<sub>corr</sub></div><div class="fd">n<sub>i</sub>: 原子数变化 | μ<sub>i</sub>: 化学势 | q: 电荷 | E<sub>corr</sub>: 有限尺寸校正</div></div><h3>3. 计算流程</h3><div class="fc"><div class="fn2-node s">构建完美超胞（如 3×3×3）</div><div class="fa"></div><div class="fn2-node p">优化完美超胞 → E<sub>perfect</sub></div><div class="fa"></div><div class="fn2-node p">引入缺陷（删除/替换/插入原子）</div><div class="fa"></div><div class="fn2-node p">优化缺陷超胞 → E<sub>defect</sub></div><div class="fa"></div><div class="fn2-node p">有限尺寸校正（FNV）</div><div class="fa"></div><div class="fn2-node e">计算缺陷形成能</div></div><h3>4. 超胞构建</h3>',9)),t("div",_0,[t("div",W0,[s[8]||(s[8]=t("span",{class:"la"},"python",-1)),s[9]||(s[9]=t("span",{class:"fn"},"build_supercell.py",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[10]||(s[10]=v(`<pre><code><span class="kw">from</span> pymatgen.core <span class="kw">import</span> Structure
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
defect_struct.<span class="fn2">to</span>(filename=<span class="st">&quot;POSCAR_vacancy&quot;</span>)</code></pre>`,1))]),s[17]||(s[17]=t("h3",null,"5. 带电缺陷 INCAR",-1)),t("div",H0,[t("div",j0,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"+1 电荷缺陷",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[13]||(s[13]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Si vacancy +1</span>
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
<span class="kw">NUPDOWN</span>  = <span class="nu">0</span>             <span class="cm">; 总自旋（如果不确定设为 0）</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib note"},[t("strong",null,"NELECT 计算："),g("先运行完美超胞，在 OUTCAR 中查找 NELECT。带 q 电荷的缺陷：NELECT"),t("sub",null,"defect"),g(" = NELECT"),t("sub",null,"perfect"),g(" - q")],-1)),s[19]||(s[19]=t("h3",null,"6. 有限尺寸校正",-1)),s[20]||(s[20]=t("p",null,"带电缺陷需要校正超胞有限尺寸效应，常用 FNV 方法：",-1)),t("div",z0,[t("div",X0,[s[14]||(s[14]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[15]||(s[15]=v(`<pre><code><span class="kw">from</span> pymatgen.analysis.defects.corrections <span class="kw">import</span> FreysoldtCorrection

<span class="cm"># 使用 pymatgen 进行 FNV 校正</span>
correction = FreysoldtCorrection(
    dielectric=<span class="nu">10.0</span>,       <span class="cm">; 介电常数</span>
    defect_dir=<span class="st">&quot;defect_calc&quot;</span>,
    bulk_dir=<span class="st">&quot;bulk_calc&quot;</span>,
)
correction.<span class="fn2">get_correction</span>()</code></pre>`,1))]),s[21]||(s[21]=v('<h3>7. 化学势范围</h3><div class="db"><div class="db-t">化学势约束</div><p>对于化合物 A<sub>x</sub>B<sub>y</sub>：</p><ul><li>x·μ<sub>A</sub> + y·μ<sub>B</sub> = μ<sub>AB</sub>（化合物）</li><li>μ<sub>A</sub> ≤ μ<sub>A</sub><sup>0</sup>（元素参考态）</li><li>μ<sub>B</sub> ≤ μ<sub>B</sub><sup>0</sup></li></ul><p>常见极限：A-rich（μ<sub>A</sub> = μ<sub>A</sub><sup>0</sup>）和 A-poor（μ<sub>B</sub> = μ<sub>B</sub><sup>0</sup>）</p></div>',2))])}const Y0=is(B0,[["render",Z0]]),J0={name:"PhononView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Q0={class:"sec active"},sm={class:"bread"},nm={class:"cb"},tm={class:"ch"},am={class:"cb"},lm={class:"ch"},em={class:"cb"},pm={class:"ch"},om={class:"cb"},cm={class:"ch"},rm={class:"cb"},im={class:"ch"},dm={class:"cb"},um={class:"ch"};function fm(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Q0,[t("div",sm,[T(c,{to:"/"},{default:M(()=>[...s[6]||(s[6]=[g("首页",-1)])]),_:1}),s[8]||(s[8]=g("/ ",-1)),T(c,{to:"/tasks"},{default:M(()=>[...s[7]||(s[7]=[g("计算任务",-1)])]),_:1}),s[9]||(s[9]=g("/ ",-1)),s[10]||(s[10]=t("span",null,"声子计算",-1))]),s[26]||(s[26]=v('<h2>声子计算</h2><p>声子谱反映晶格动力学稳定性，虚频意味着结构不稳定。使用 phonopy + VASP 进行声子计算。</p><h3>1. 计算流程</h3><div class="fc"><div class="fn2-node s">优化结构（得到 CONTCAR）</div><div class="fa"></div><div class="fn2-node p">phonopy --vasp -d --dim=&quot;3 3 3&quot;</div><div class="fa"></div><div class="fn2-node p">生成超胞 POSCAR（DISP-001, 002...）</div><div class="fa"></div><div class="fn2-node p">对每个超胞做静态计算</div><div class="fa"></div><div class="fn2-node p">phonopy -f DISP-*/vasprun.xml</div><div class="fa"></div><div class="fn2-node e">phonopy-bandplot → 声子谱</div></div><h3>2. 优化 INCAR（高精度要求）</h3>',5)),t("div",nm,[t("div",tm,[s[11]||(s[11]=t("span",{class:"la"},"INCAR",-1)),s[12]||(s[12]=t("span",{class:"fn"},"声子前结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[13]||(s[13]=v(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 需要较高精度</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>          <span class="cm">; 严格收敛（比普通计算更严）</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-1E-4</span>         <span class="cm">; 力收敛到 0.0001 eV/Å</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>             <span class="cm">; 优化离子+晶格</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib warn"},[t("strong",null,"精度要求："),g("声子计算对结构非常敏感。需要高 ENCUT、严格力收敛（"),t("code",null,"EDIFFG = -1E-4"),g("）、足够 k 点。")],-1)),s[28]||(s[28]=t("h3",null,"3. 静态计算 INCAR",-1)),t("div",am,[t("div",lm,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"位移超胞静态计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[16]||(s[16]=v(`<pre><code><span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ENCUT</span>    = <span class="nu">500</span>           <span class="cm">; 与优化一致</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-8</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>            <span class="cm">; 不动离子</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>             <span class="cm">; 静态计算</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不需要电荷密度</span></code></pre>`,1))]),s[29]||(s[29]=t("h3",null,"4. 批量计算脚本",-1)),t("div",em,[t("div",pm,[s[17]||(s[17]=t("span",{class:"la"},"bash",-1)),s[18]||(s[18]=t("span",{class:"fn"},"phonon_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[19]||(s[19]=v(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="fn2">phonopy-bandplot</span></code></pre>`,1))]),s[30]||(s[30]=t("h3",null,"5. band.conf 配置文件",-1)),t("div",om,[t("div",cm,[s[20]||(s[20]=t("span",{class:"la"},"band.conf",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[21]||(s[21]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# Si 声子谱配置"),g(`
ATOM_NAME = Si
DIM = 3 3 3
PRIMITIVE_AXIS = 1 0 0  0 1 0  0 0 1

`),t("span",{class:"cm"},"# 高对称路径（立方晶系）"),g(`
BAND = 0.0 0.0 0.5  0.0 0.5 0.5  0.5 0.5 0.5  0.0 0.0 0.0
BAND_LABELS = X  W  L  Γ
BAND_POINTS = 51

`),t("span",{class:"cm"},"# 输出设置"),g(`
FORCE_CONSTANTS = WRITE
EIGENVECTORS = .TRUE.`)])],-1))]),s[31]||(s[31]=t("h3",null,"6. 声子 DOS 计算",-1)),t("div",rm,[t("div",im,[s[22]||(s[22]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[23]||(s[23]=v(`<pre><code><span class="cm"># mesh.conf 文件</span>
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
<span class="fn2">phonopy-dosplot</span></code></pre>`,1))]),s[32]||(s[32]=v('<h3>7. 虚频处理</h3><table class="tb"><thead><tr><th>虚频情况</th><th>含义</th><th>处理方法</th></tr></thead><tbody><tr><td>无虚频</td><td>结构稳定</td><td>无需处理</td></tr><tr><td>小虚频 (&lt; 0.1 THz)</td><td>数值噪声</td><td>通常可忽略</td></tr><tr><td>大虚频</td><td>结构不稳定</td><td>沿虚频模式扰动结构后重新优化</td></tr><tr><td>声学模虚频</td><td>计算误差</td><td>提高精度或忽略</td></tr></tbody></table>',2)),t("div",dm,[t("div",um,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[25]||(s[25]=v(`<pre><code><span class="cm"># 查看虚频</span>
<span class="fn2">grep</span> <span class="st">&quot;f  =&quot;</span> phonopy_output.yaml | <span class="fn2">head</span> -20

<span class="cm"># 如果有虚频，沿虚频模式扰动结构</span>
<span class="fn2">phonopy</span> --readfc --dim=<span class="st">&quot;3 3 3&quot;</span> -c POSCAR band.conf
<span class="cm"># 查看虚频对应的特征矢量，沿该方向微调原子位置</span></code></pre>`,1))]),s[33]||(s[33]=t("h3",null,"8. 常见问题",-1)),s[34]||(s[34]=t("div",{class:"ib warn"},[t("strong",null,"注意事项："),t("ul",null,[t("li",null,"优化和静态计算必须使用相同的 ENCUT、KPOINTS 和 POTCAR"),t("li",null,"超胞大小要足够（通常 2-4 倍原胞）"),t("li",null,"力收敛标准要严格（EDIFFG = -1E-4 或更小）"),t("li",null,"phonopy 版本要与 VASP 版本兼容")])],-1))])}const mm=is(J0,[["render",fm]]),bm={name:"ConvergenceView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},vm={class:"sec active"},gm={class:"bread"},hm={class:"cb"},ym={class:"ch"},km={class:"cb"},Cm={class:"ch"},Am={class:"cb"},Em={class:"ch"};function wm(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",vm,[t("div",gm,[T(c,{to:"/"},{default:M(()=>[...s[3]||(s[3]=[g("首页",-1)])]),_:1}),s[4]||(s[4]=g("/ ",-1)),s[5]||(s[5]=t("span",null,"收敛性测试",-1))]),s[15]||(s[15]=t("h2",null,"收敛性测试",-1)),s[16]||(s[16]=t("p",null,"收敛性测试是确保计算结果可靠的关键步骤。需要测试 ENCUT 和 K 点两个参数。",-1)),s[17]||(s[17]=t("h3",null,"1. ENCUT 收敛测试",-1)),s[18]||(s[18]=t("p",null,"测试截断能对总能量的影响，确保能量已收敛。",-1)),t("div",hm,[t("div",ym,[s[6]||(s[6]=t("span",{class:"la"},"bash",-1)),s[7]||(s[7]=t("span",{class:"fn"},"encut_test.sh",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[8]||(s[8]=v(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="kw">done</span></code></pre>`,1))]),s[19]||(s[19]=t("div",{class:"ib tip"},[t("strong",null,"判断标准："),g("相邻 ENCUT 能量差 < "),t("code",null,"1 meV/atom"),g(" 时收敛。例如：400 eV vs 450 eV 的能量差除以原子数应 < 0.001 eV/atom。")],-1)),s[20]||(s[20]=t("h3",null,"2. K 点收敛测试",-1)),s[21]||(s[21]=t("p",null,"测试 k 点密度对总能量的影响。",-1)),t("div",km,[t("div",Cm,[s[9]||(s[9]=t("span",{class:"la"},"bash",-1)),s[10]||(s[10]=t("span",{class:"fn"},"kpoint_test.sh",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="kw">#!/bin/bash</span>

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
<span class="kw">done</span></code></pre>`,1))]),s[22]||(s[22]=v('<h3>3. K 点密度经验公式</h3><div class="fb"><div class="fm">N<sub>k</sub> × a ≈ 30</div><div class="fd">a 为晶格常数 (Å)，N<sub>k</sub> 为每方向的 k 点数</div></div><table class="tb"><thead><tr><th>晶格常数 a</th><th>推荐 N<sub>k</sub></th><th>网格</th></tr></thead><tbody><tr><td>3.0 Å</td><td>10</td><td>10×10×10</td></tr><tr><td>4.0 Å</td><td>8</td><td>8×8×8</td></tr><tr><td>5.0 Å</td><td>6</td><td>6×6×6</td></tr><tr><td>6.0 Å</td><td>5</td><td>5×5×5</td></tr><tr><td>8.0 Å</td><td>4</td><td>4×4×4</td></tr></tbody></table><h3>4. 不同材料的 K 点建议</h3><table class="tb"><thead><tr><th>材料类型</th><th>推荐 K 点</th><th>说明</th></tr></thead><tbody><tr><td>金属</td><td>8×8×8 或更密</td><td>费米面需要密集采样</td></tr><tr><td>半导体</td><td>4×4×4 ~ 6×6×6</td><td>通常足够</td></tr><tr><td>绝缘体</td><td>3×3×3 ~ 4×4×4</td><td>可稍稀疏</td></tr><tr><td>表面/slab</td><td>k×k×1</td><td>z 方向为 1</td></tr><tr><td>分子/团簇</td><td>1×1×1</td><td>无周期性</td></tr></tbody></table><h3>5. 绘制收敛图</h3>',6)),t("div",Am,[t("div",Em,[s[12]||(s[12]=t("span",{class:"la"},"python",-1)),s[13]||(s[13]=t("span",{class:"fn"},"plot_convergence.py",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[14]||(s[14]=v(`<pre><code><span class="kw">import</span> matplotlib.pyplot <span class="kw">as</span> plt

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
plt.show()</code></pre>`,1))]),s[23]||(s[23]=t("h3",null,"6. 收敛测试注意事项",-1)),s[24]||(s[24]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"固定其他参数，只改变一个变量"),t("li",null,"ENCUT 测试时使用足够密的 K 点"),t("li",null,"K 点测试时使用足够大的 ENCUT"),t("li",null,"计算每原子能量进行比较"),t("li",null,"对于精确计算（如能量差），收敛标准应更严格（< 0.5 meV/atom）")])],-1))])}const Sm=is(bm,[["render",wm]]),Tm={name:"CheatSheetView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Rm={class:"sec active"},Om={class:"bread"},Im={class:"cb"},Nm={class:"ch"},Pm={class:"cb"},xm={class:"ch"},qm={class:"cb"},Fm={class:"ch"},Mm={class:"cb"},Dm={class:"ch"};function Vm(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Rm,[t("div",Om,[T(c,{to:"/"},{default:M(()=>[...s[4]||(s[4]=[g("首页",-1)])]),_:1}),s[5]||(s[5]=g("/ ",-1)),s[6]||(s[6]=t("span",null,"速查手册",-1))]),s[18]||(s[18]=v('<h2>速查手册</h2><p>VASP 常用参数、命令和设置的快速参考。</p><h3>1. INCAR 参数速查</h3><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>常用值</th><th>默认值</th></tr></thead><tbody><tr><td><code>ENCUT</code></td><td>平面波截断能 (eV)</td><td>400-600</td><td>POTCAR ENMAX</td></tr><tr><td><code>PREC</code></td><td>计算精度</td><td>Accurate</td><td>Normal</td></tr><tr><td><code>EDIFF</code></td><td>电子步收敛标准</td><td>1E-6</td><td>1E-4</td></tr><tr><td><code>EDIFFG</code></td><td>离子步收敛标准</td><td>-0.02 (eV/Å)</td><td>-0.01</td></tr><tr><td><code>IBRION</code></td><td>离子弛豫方法</td><td>1 或 2</td><td>-1</td></tr><tr><td><code>NSW</code></td><td>最大离子步数</td><td>100-300</td><td>0</td></tr><tr><td><code>ISIF</code></td><td>优化类型</td><td>2 或 3</td><td>2</td></tr><tr><td><code>ISMEAR</code></td><td>展宽方法</td><td>0, 1, -5</td><td>1</td></tr><tr><td><code>SIGMA</code></td><td>展宽宽度 (eV)</td><td>0.05, 0.2</td><td>0.2</td></tr><tr><td><code>NELM</code></td><td>最大电子步数</td><td>60-200</td><td>60</td></tr><tr><td><code>ISPIN</code></td><td>自旋极化</td><td>1 或 2</td><td>1</td></tr><tr><td><code>MAGMOM</code></td><td>初始磁矩</td><td>依体系</td><td>0</td></tr><tr><td><code>LREAL</code></td><td>实空间投影</td><td>Auto, .FALSE.</td><td>.FALSE.</td></tr><tr><td><code>ALGO</code></td><td>电子算法</td><td>Normal, Fast</td><td>Normal</td></tr></tbody></table><h3>2. ISMEAR 展宽方法</h3><table class="tb"><thead><tr><th>ISMEAR</th><th>方法</th><th>适用场景</th><th>SIGMA</th></tr></thead><tbody><tr><td><code>-5</code></td><td>四面体法</td><td>绝缘体/半导体 DOS</td><td>自动</td></tr><tr><td><code>-4</code></td><td>四面体+Blochl</td><td>金属 DOS</td><td>自动</td></tr><tr><td><code>0</code></td><td>Gaussian</td><td>半导体/绝缘体</td><td>0.05</td></tr><tr><td><code>1</code></td><td>MP 展宽</td><td>金属</td><td>0.2</td></tr><tr><td><code>2</code></td><td>MP 改进</td><td>金属（更平滑）</td><td>0.2</td></tr></tbody></table><h3>3. IBRION 优化方法</h3><table class="tb"><thead><tr><th>IBRION</th><th>方法</th><th>特点</th><th>推荐场景</th></tr></thead><tbody><tr><td><code>-1</code></td><td>不动</td><td>静态计算</td><td>DOS、能带等</td></tr><tr><td><code>0</code></td><td>MD</td><td>分子动力学</td><td>温度效应</td></tr><tr><td><code>1</code></td><td>RMM-DIIS</td><td>准牛顿法，快但不稳定</td><td>初始优化</td></tr><tr><td><code>2</code></td><td>CG</td><td>共轭梯度，稳定</td><td>推荐默认</td></tr><tr><td><code>3</code></td><td>Damped MD</td><td>阻尼MD</td><td>特殊体系</td></tr></tbody></table><h3>4. ISIF 优化类型</h3><table class="tb"><thead><tr><th>ISIF</th><th>离子位置</th><th>晶格体积</th><th>晶格形状</th><th>适用</th></tr></thead><tbody><tr><td><code>0</code></td><td>✓</td><td>✗</td><td>✗</td><td>MD</td></tr><tr><td><code>1</code></td><td>✓</td><td>✓</td><td>✓</td><td>MD+晶格</td></tr><tr><td><code>2</code></td><td>✓</td><td>✗</td><td>✗</td><td>表面、分子</td></tr><tr><td><code>3</code></td><td>✓</td><td>✓</td><td>✓</td><td>体相优化</td></tr><tr><td><code>4</code></td><td>✓</td><td>✗</td><td>✓</td><td>固定体积</td></tr><tr><td><code>5</code></td><td>✗</td><td>✓</td><td>✓</td><td>仅晶格</td></tr><tr><td><code>6</code></td><td>✗</td><td>✗</td><td>✓</td><td>仅形状</td></tr><tr><td><code>7</code></td><td>✗</td><td>✓</td><td>✗</td><td>仅体积</td></tr></tbody></table><h3>5. 常用 bash 命令</h3>',11)),t("div",Im,[t("div",Nm,[s[7]||(s[7]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[8]||(s[8]=v(`<pre><code><span class="cm"># 提取能量</span>
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
<span class="fn2">grep</span> -i <span class="st">&quot;error\\|warning\\|abort&quot;</span> OUTCAR</code></pre>`,1))]),s[19]||(s[19]=t("h3",null,"6. 常见计算任务 INCAR 模板",-1)),s[20]||(s[20]=t("h4",null,"结构优化",-1)),t("div",Pm,[t("div",xm,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),s[10]||(s[10]=t("span",{class:"fn"},"体相优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bulk optimization</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">2</span>
<span class="kw">NSW</span>      = <span class="nu">200</span>
<span class="kw">ISIF</span>     = <span class="nu">3</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span></code></pre>`,1))]),s[21]||(s[21]=t("h4",null,"态密度计算",-1)),t("div",qm,[t("div",Fm,[s[12]||(s[12]=t("span",{class:"la"},"INCAR",-1)),s[13]||(s[13]=t("span",{class:"fn"},"DOS",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[14]||(s[14]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">DOS calculation</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-6</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">-5</span>           <span class="cm">; 四面体法</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影 DOS</span>
<span class="kw">LWAVE</span>    = <span class="nu">.TRUE.</span>        <span class="cm">; 保留波函数</span></code></pre>`,1))]),s[22]||(s[22]=t("h4",null,"能带计算",-1)),t("div",Mm,[t("div",Dm,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),s[16]||(s[16]=t("span",{class:"fn"},"Band structure",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[17]||(s[17]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Band structure</span>
<span class="kw">ENCUT</span>    = <span class="nu">400</span>
<span class="kw">PREC</span>     = <span class="st">Accurate</span>
<span class="kw">ICHARG</span>   = <span class="nu">11</span>           <span class="cm">; 从 WAVECAR 读取</span>
<span class="kw">IBRION</span>   = <span class="nu">-1</span>
<span class="kw">NSW</span>      = <span class="nu">0</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>
<span class="kw">LORBIT</span>   = <span class="nu">11</span>           <span class="cm">; 投影能带</span></code></pre>`,1))]),s[23]||(s[23]=v('<h3>7. POTCAR 选择指南</h3><table class="tb"><thead><tr><th>后缀</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>PAW_PBE</code></td><td>标准 PBE</td><td>最常用</td></tr><tr><td><code>_sv</code></td><td>半芯态</td><td>3d 过渡金属</td></tr><tr><td><code>_d</code></td><td>d 电子 p 区</td><td>Ga, Ge, As</td></tr><tr><td><code>_GW</code></td><td>高精度</td><td>GW 计算</td></tr><tr><td><code>_h</code></td><td>硬赝势</td><td>高截断能</td></tr></tbody></table><h3>8. 单位换算</h3><table class="tb"><thead><tr><th>物理量</th><th>VASP 单位</th><th>换算</th></tr></thead><tbody><tr><td>能量</td><td>eV</td><td>1 eV = 96.485 kJ/mol = 23.06 kcal/mol</td></tr><tr><td>力</td><td>eV/Å</td><td>1 eV/Å = 16.02 nN</td></tr><tr><td>压力</td><td>kbar</td><td>1 kbar = 0.1 GPa = 100 MPa</td></tr><tr><td>距离</td><td>Å</td><td>1 Å = 0.1 nm</td></tr><tr><td>磁矩</td><td>μB</td><td>玻尔磁子</td></tr><tr><td>频率</td><td>THz</td><td>声子频率</td></tr></tbody></table><h3>9. 文件大小估算</h3><table class="tb"><thead><tr><th>文件</th><th>大小公式</th><th>典型值</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>~N<sup>3</sup> × N<sub>bands</sub> × N<sub>k</sub> × 8 bytes</td><td>1-100 GB</td></tr><tr><td><code>CHGCAR</code></td><td>~N<sup>3</sup> × 50 bytes</td><td>100 MB - 10 GB</td></tr><tr><td><code>OUTCAR</code></td><td>取决于 NSW 和 NWRITE</td><td>100 MB - 2 GB</td></tr></tbody></table><h3>10. 错误信息速查</h3><table class="tb"><thead><tr><th>错误信息</th><th>原因</th><th>解决</th></tr></thead><tbody><tr><td>DENTET</td><td>能带数不足</td><td>增加 NBANDS</td></tr><tr><td>ZBRENT</td><td>线搜索失败</td><td>减小 POTIM 或换 IBRION=1</td></tr><tr><td>SGRCON</td><td>晶格矢量错误</td><td>检查右手定则</td></tr><tr><td>ROTK</td><td>对称性问题</td><td>ISYM=0 或微扰结构</td></tr><tr><td>memory</td><td>内存不足</td><td>LREAL=Auto 或减少 NPAR</td></tr></tbody></table>',8))])}const Um=is(Tm,[["render",Vm]]),Lm={name:"ErrorsScfView",data(){return{selectedOption:null,showFeedback:!1,feedbackText:"",feedbackStyle:{}}},methods:{selectOption(n){this.selectedOption=n,document.querySelectorAll(".qo").forEach((s,a)=>{s.classList.toggle("sel",a===n)})},checkAnswer(){this.showFeedback=!0,this.selectedOption===1?(this.feedbackText="✓ 回答正确！检查 MAGMOM 设置是排查 SCF 不收敛的首要步骤。",this.feedbackStyle={background:"var(--green-dim)",border:"1px solid var(--green)",color:"var(--green)"},document.querySelectorAll(".qo")[1].classList.add("ok")):(this.feedbackText='✗ 回答错误。正确答案是"检查 MAGMOM 设置"。',this.feedbackStyle={background:"var(--red-dim)",border:"1px solid var(--red)",color:"var(--red)"},document.querySelectorAll(".qo")[this.selectedOption].classList.add("no"),document.querySelectorAll(".qo")[1].classList.add("ok"))},copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},$m={class:"sec active"},Bm={class:"bread"},Km={class:"ec open"},Gm={class:"ec-b",style:{display:"block"}},_m={class:"cb"},Wm={class:"ch"},Hm={class:"ec open"},jm={class:"ec-b",style:{display:"block"}},zm={class:"cb"},Xm={class:"ch"},Zm={class:"ec open"},Ym={class:"ec-b",style:{display:"block"}},Jm={class:"cb"},Qm={class:"ch"},sb={class:"ec open"},nb={class:"ec-b",style:{display:"block"}},tb={class:"cb"},ab={class:"ch"},lb={class:"ec open"},eb={class:"ec-b",style:{display:"block"}},pb={class:"cb"},ob={class:"ch"},cb={class:"qb"},rb={class:"qbd"},ib=["disabled"];function db(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",$m,[t("div",Bm,[T(c,{to:"/"},{default:M(()=>[...s[10]||(s[10]=[g("首页",-1)])]),_:1}),s[12]||(s[12]=g("/ ",-1)),T(c,{to:"/errors"},{default:M(()=>[...s[11]||(s[11]=[g("错误诊断",-1)])]),_:1}),s[13]||(s[13]=g("/ ",-1)),s[14]||(s[14]=t("span",null,"SCF 不收敛",-1))]),s[56]||(s[56]=t("h2",null,"SCF 不收敛问题",-1)),s[57]||(s[57]=t("p",null,"SCF（自洽场）不收敛是 VASP 计算中最高频的问题。以下是完整排查清单和解决方案。",-1)),t("div",Km,[s[19]||(s[19]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：电子步达到 NELM 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",Gm,[s[17]||(s[17]=v('<h4>症状</h4><div class="esym">DAV: 64 -0.275E+03 0.217E+00 -0.109E+00<br>（能量差持续振荡不下降）</div><h4>常见原因</h4><ul><li><strong>初始磁矩设置不当</strong>（最常见）- 对含过渡金属体系尤其重要</li><li><strong>展宽方法错误</strong> - 金属用了 ISMEAR=0 或绝缘体用了 ISMEAR=1</li><li><strong>截断能太低</strong> - ENCUT 不足导致数值不稳定</li><li><strong>初始结构不合理</strong> - 原子距离太近或结构有冲突</li><li><strong>强关联体系</strong> - 需要设置 +U 或使用杂化泛函</li></ul><h4>解决方案</h4>',5)),t("div",_m,[t("div",Wm,[s[15]||(s[15]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[16]||(s[16]=v(`<pre><code><span class="cm"># 方案 1：降低收敛标准（临时方案）</span>
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
<span class="kw">MAGMOM</span>   = <span class="nu">3 3 3 0 0 0</span>   <span class="cm">; 每个原子的初始磁矩</span></code></pre>`,1))]),s[18]||(s[18]=t("div",{class:"ib tip"},[t("strong",null,"排查顺序："),g("① MAGMOM 设置 ② ISMEAR 是否正确 ③ 降低 AMIX ④ 检查原子距离 ⑤ 是否需要 +U")],-1))])]),t("div",Hm,[s[28]||(s[28]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：DENTET - 能带数不足"),t("span",{class:"es sc"},"高频")],-1)),t("div",jm,[s[22]||(s[22]=t("h4",null,"症状",-1)),s[23]||(s[23]=t("div",{class:"esym"},[g("WARNING: DENTET: can't reach specified NBANDS"),t("br"),g("NELECT = 120.0000 NBANDS = 64")],-1)),s[24]||(s[24]=t("h4",null,"原因",-1)),s[25]||(s[25]=t("p",null,"能带数目 NBANDS 不足以容纳所有电子，导致费米能级无法正确确定。",-1)),s[26]||(s[26]=t("h4",null,"解决方案",-1)),t("div",zm,[t("div",Xm,[s[20]||(s[20]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[21]||(s[21]=v(`<pre><code><span class="cm"># 手动增加能带数</span>
<span class="kw">NBANDS</span>   = <span class="nu">160</span>

<span class="cm"># 经验公式：</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms/2 (绝缘体)</span>
<span class="cm"># NBANDS &gt;= NELECT/2 + N_atoms   (金属/磁性)</span></code></pre>`,1))]),s[27]||(s[27]=t("div",{class:"ib note"},[t("strong",null,"查看 NELECT："),g("在 POTCAR 中 grep ZVAL 求和，或在 OUTCAR 中搜索 NELECT。")],-1))])]),t("div",Zm,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：ZBRENT - 线搜索失败"),t("span",{class:"es scm"},"常见")],-1)),t("div",Ym,[s[31]||(s[31]=t("h4",null,"症状",-1)),s[32]||(s[32]=t("div",{class:"esym"},[g("ZBRENT: fatal error in bracketing"),t("br"),g("ZBRENT: the minimum is not bracketed")],-1)),s[33]||(s[33]=t("h4",null,"原因",-1)),s[34]||(s[34]=t("p",null,"CG 优化算法中线搜索失败，通常是步长过大或势能面过于复杂。",-1)),s[35]||(s[35]=t("h4",null,"解决方案",-1)),t("div",Jm,[t("div",Qm,[s[29]||(s[29]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[30]||(s[30]=v(`<pre><code><span class="cm"># 方案 1：换优化算法</span>
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
<span class="kw">EDIFFG</span>   = <span class="nu">-0.02</span></code></pre>`,1))])])]),s[58]||(s[58]=v('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 4：SCF 收敛但结果不合理</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>检查清单</h4><table class="tb"><thead><tr><th>检查项</th><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>POTCAR 泛函</td><td><code>grep TITEL POTCAR</code></td><td>确认使用正确的泛函</td></tr><tr><td>ENCUT 足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>K 点足够</td><td>收敛性测试</td><td>能量变化 &lt; 1 meV/atom</td></tr><tr><td>自旋极化</td><td>ISPIN=2</td><td>含 3d/4f 金属通常需要</td></tr><tr><td>是否需要 +U</td><td>LDAU=.TRUE.</td><td>强关联体系</td></tr><tr><td>原子距离</td><td>检查 POSCAR</td><td>确保没有原子重叠</td></tr></tbody></table></div></div>',1)),t("div",sb,[s[45]||(s[45]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 5：VERY BAD NEWS! SGRCON 错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",nb,[s[39]||(s[39]=t("h4",null,"症状",-1)),s[40]||(s[40]=t("div",{class:"esym"},[g("VERY BAD NEWS! internal error in subroutine SGRCON"),t("br"),g("The product of the three lattice vectors is negative")],-1)),s[41]||(s[41]=t("h4",null,"原因",-1)),s[42]||(s[42]=t("p",null,"晶格矢量构成的不是右手坐标系。VASP 要求三个晶格矢量 a×b·c > 0。",-1)),s[43]||(s[43]=t("h4",null,"解决方案",-1)),s[44]||(s[44]=t("ol",null,[t("li",null,"在 VESTA 中重新导出 POSCAR"),t("li",null,"使用 pymatgen 重新生成 POSCAR"),t("li",null,"手动交换 POSCAR 中两行晶格矢量")],-1)),t("div",tb,[t("div",ab,[s[37]||(s[37]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[38]||(s[38]=v(`<pre><code><span class="cm"># 检查晶格矢量是否构成右手系</span>
<span class="kw">import</span> numpy <span class="kw">as</span> np

a = np.array([<span class="nu">5.43</span>, <span class="nu">0</span>, <span class="nu">0</span>])
b = np.array([<span class="nu">0</span>, <span class="nu">5.43</span>, <span class="nu">0</span>])
c = np.array([<span class="nu">0</span>, <span class="nu">0</span>, <span class="nu">5.43</span>])

det = np.dot(np.cross(a, b), c)
<span class="fn2">print</span>(f<span class="st">&quot;det = {det}&quot;</span>)  <span class="cm"># 应该 &gt; 0</span></code></pre>`,1))])])]),t("div",lb,[s[49]||(s[49]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 6：ROTK 旋转矩阵错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",eb,[s[48]||(s[48]=v('<h4>症状</h4><div class="esym">WARNING in EDDRMM: rotation matrix not orthogonal<br>ROTK: internal ERROR</div><h4>原因</h4><p>通常是结构对称性过高或原子位置不合理导致。</p><h4>解决方案</h4><ol><li>微扰原子位置（添加小的随机位移）</li><li>使用 <code>SYMPREC = 1E-6</code> 放宽对称性判断</li><li>设置 <code>ISYM = 0</code> 关闭对称性（最后手段）</li></ol>',6)),t("div",pb,[t("div",ob,[s[46]||(s[46]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[47]||(s[47]=v(`<pre><code><span class="cm"># 微扰原子位置</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read, write
<span class="kw">import</span> numpy <span class="kw">as</span> np

atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
atoms.rattle(stdev=<span class="nu">0.01</span>)  <span class="cm"># 添加 0.01 Å 的随机位移</span>
write(<span class="st">&#39;POSCAR_rattled&#39;</span>, atoms)</code></pre>`,1))])])]),t("div",cb,[s[55]||(s[55]=t("div",{class:"qh"},[t("span",{class:"ql"},"练习"),t("span",{class:"qt"},"SCF 问题排查")],-1)),t("div",rb,[s[54]||(s[54]=t("p",null,[t("strong",null,"问题："),g("SCF 不收敛时，首先应检查什么？")],-1)),t("div",{class:"qo",onClick:s[5]||(s[5]=o=>l.selectOption(0))},[...s[50]||(s[50]=[t("div",{class:"qr"},null,-1),t("span",null,"增加 NSW",-1)])]),t("div",{class:"qo",onClick:s[6]||(s[6]=o=>l.selectOption(1))},[...s[51]||(s[51]=[t("div",{class:"qr"},null,-1),t("span",null,"检查 MAGMOM 设置",-1)])]),t("div",{class:"qo",onClick:s[7]||(s[7]=o=>l.selectOption(2))},[...s[52]||(s[52]=[t("div",{class:"qr"},null,-1),t("span",null,"更换 POTCAR",-1)])]),t("div",{class:"qo",onClick:s[8]||(s[8]=o=>l.selectOption(3))},[...s[53]||(s[53]=[t("div",{class:"qr"},null,-1),t("span",null,"减小 ENCUT",-1)])]),p.showFeedback?(B(),K("div",{key:0,class:"qf show",style:zn(p.feedbackStyle)},z(p.feedbackText),5)):En("",!0),t("button",{class:"qs",onClick:s[9]||(s[9]=(...o)=>l.checkAnswer&&l.checkAnswer(...o)),disabled:p.selectedOption===null},"提交答案",8,ib)])])])}const ub=is(Lm,[["render",db]]),fb={name:"ErrorsIonView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},mb={class:"sec active"},bb={class:"bread"},vb={class:"ec open"},gb={class:"ec-b",style:{display:"block"}},hb={class:"cb"},yb={class:"ch"},kb={class:"ec open"},Cb={class:"ec-b",style:{display:"block"}},Ab={class:"cb"},Eb={class:"ch"},wb={class:"cb"},Sb={class:"ch"},Tb={class:"ec open"},Rb={class:"ec-b",style:{display:"block"}},Ob={class:"cb"},Ib={class:"ch"},Nb={class:"ec open"},Pb={class:"ec-b",style:{display:"block"}},xb={class:"cb"},qb={class:"ch"};function Fb(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",mb,[t("div",bb,[T(c,{to:"/"},{default:M(()=>[...s[5]||(s[5]=[g("首页",-1)])]),_:1}),s[7]||(s[7]=g("/ ",-1)),T(c,{to:"/errors"},{default:M(()=>[...s[6]||(s[6]=[g("错误诊断",-1)])]),_:1}),s[8]||(s[8]=g("/ ",-1)),s[9]||(s[9]=t("span",null,"离子步问题",-1))]),s[39]||(s[39]=t("h2",null,"离子步问题诊断",-1)),s[40]||(s[40]=t("p",null,"离子步问题通常涉及结构优化不收敛、原子跑飞或力不收敛。",-1)),t("div",vb,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：达到 NSW 上限仍未收敛"),t("span",{class:"es sc"},"高频")],-1)),t("div",gb,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,'计算正常结束，但 OUTCAR 中显示 "reached required accuracy" 未出现。',-1)),s[14]||(s[14]=t("h4",null,"解决方案",-1)),t("div",hb,[t("div",yb,[s[10]||(s[10]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="cm"># 方案 1：增大离子步数</span>
<span class="kw">NSW</span>      = <span class="nu">300</span>           <span class="cm">; 默认 0，建议 100-300</span>

<span class="cm"># 方案 2：放宽力收敛标准</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.05</span>         <span class="cm">; 默认 -0.01，常用 -0.02 到 -0.05</span>

<span class="cm"># 方案 3：换优化算法</span>
<span class="kw">IBRION</span>   = <span class="nu">1</span>             <span class="cm">; 2=CG, 1=RMM-DIIS（更快但不稳定）</span>

<span class="cm"># 方案 4：减小步长</span>
<span class="kw">POTIM</span>    = <span class="nu">0.2</span>           <span class="cm">; 默认 0.5，振荡时减小</span></code></pre>`,1))]),s[15]||(s[15]=t("div",{class:"ib tip"},[t("strong",null,"判断是否真的需要优化："),g("查看 OSZICAR 中的能量是否在下降。如果能量已经稳定，可以适当放宽 EDIFFG。")],-1))])]),t("div",kb,[s[26]||(s[26]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：原子跑飞 / 结构崩塌"),t("span",{class:"es sc"},"高频")],-1)),t("div",Cb,[s[21]||(s[21]=t("h4",null,"症状",-1)),s[22]||(s[22]=t("div",{class:"esym"},[g("distance between some ions is very small !!"),t("br"),g("或能量突然增大到 10^6 eV")],-1)),s[23]||(s[23]=t("h4",null,"常见原因",-1)),s[24]||(s[24]=t("ul",null,[t("li",null,"初始结构原子距离太近（< 1.5 Å）"),t("li",null,"POTIM 步长太大"),t("li",null,"POSCAR 坐标类型写错（Direct 写成 Cartesian）"),t("li",null,"POSCAR 和 POTCAR 元素顺序不一致")],-1)),s[25]||(s[25]=t("h4",null,"解决方案",-1)),t("div",Ab,[t("div",Eb,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[18]||(s[18]=v(`<pre><code><span class="cm"># 缩小步长，增加稳定性</span>
<span class="kw">POTIM</span>    = <span class="nu">0.1</span>           <span class="cm">; 从 0.1 开始</span>
<span class="kw">EDIFF</span>    = <span class="nu">1E-4</span>          <span class="cm">; 放宽电子收敛</span>
<span class="kw">EDIFFG</span>   = <span class="nu">-0.1</span>          <span class="cm">; 放宽力收敛</span></code></pre>`,1))]),t("div",wb,[t("div",Sb,[s[19]||(s[19]=t("span",{class:"la"},"python",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[20]||(s[20]=v(`<pre><code><span class="cm"># 检查原子距离</span>
<span class="kw">from</span> ase.io <span class="kw">import</span> read
atoms = read(<span class="st">&#39;POSCAR&#39;</span>)
distances = atoms.get_all_distances()
<span class="fn2">print</span>(f<span class="st">&quot;最小距离: {distances[distances &gt; 0].min():.2f} Å&quot;</span>)

<span class="cm"># 如果 &lt; 1.5 Å，需要重新构建结构</span></code></pre>`,1))])])]),s[41]||(s[41]=v('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：力不收敛但能量收敛</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><p>能量变化很小，但最大力仍然大于 EDIFFG 设置的阈值。</p><h4>解决方案</h4><ul><li>降低 <code>EDIFF = 1E-7</code> 或更小</li><li>增加 ENCUT（提高 30-50 eV）</li><li>加密 K 点</li><li>使用 <code>IBRION = 1</code>（RMM-DIIS 通常对力收敛更好）</li><li>检查是否需要开启自旋（ISPIN=2）</li></ul></div></div>',1)),t("div",Tb,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：ISIF=3 时晶格参数异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Rb,[s[30]||(s[30]=v('<table class="tb"><thead><tr><th>可能原因</th><th>解决</th><th>说明</th></tr></thead><tbody><tr><td>GGA-PBE 本身高估晶格</td><td>正常误差 ~1-2%</td><td>这是 PBE 泛函的特点</td></tr><tr><td>需要杂化泛函</td><td>使用 HSE06</td><td>但计算量大 10-100 倍</td></tr><tr><td>需要 +U</td><td>添加 LDAU 参数</td><td>含 3d/4f 金属的氧化物</td></tr><tr><td>需要范德华修正</td><td>IVDW=11 或 IVDW=12</td><td>层状材料、分子晶体</td></tr><tr><td>初始结构太差</td><td>重新构建初始结构</td><td>用实验值或文献值</td></tr></tbody></table>',1)),t("div",Ob,[t("div",Ib,[s[27]||(s[27]=t("span",{class:"la"},"INCAR",-1)),s[28]||(s[28]=t("span",{class:"fn"},"晶格优化参数",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[29]||(s[29]=v(`<pre><code><span class="cm"># 基本晶格优化</span>
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
<span class="kw">LDAUJ</span>    = <span class="nu">0.0 0 0</span>       <span class="cm">; J 值</span></code></pre>`,1))])])]),t("div",Nb,[s[38]||(s[38]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：压力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Pb,[s[34]||(s[34]=t("h4",null,"症状",-1)),s[35]||(s[35]=t("p",null,"OUTCAR 中外部压力（external pressure）与期望值相差很大。",-1)),s[36]||(s[36]=t("h4",null,"查看压力",-1)),t("div",xb,[t("div",qb,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[33]||(s[33]=t("pre",null,[t("code",null,[t("span",{class:"fn2"},"grep"),g(),t("span",{class:"st"},'"external pressure"'),g(" OUTCAR")])],-1))]),s[37]||(s[37]=v('<h4>解决方案</h4><table class="tb"><thead><tr><th>情况</th><th>处理</th></tr></thead><tbody><tr><td>压力很大 (&gt; 10 kbar)</td><td>继续优化，ISIF=3</td></tr><tr><td>压力振荡</td><td>减小 POTIM</td></tr><tr><td>压力趋于稳定但不为零</td><td>检查 ENCUT 和 K 点是否足够</td></tr><tr><td>只要能量不要晶格</td><td>使用 ISIF=2</td></tr></tbody></table>',2))])])])}const Mb=is(fb,[["render",Fb]]),Db={name:"ErrorsMemoryView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Vb={class:"sec active"},Ub={class:"bread"},Lb={class:"ec open"},$b={class:"ec-b",style:{display:"block"}},Bb={class:"cb"},Kb={class:"ch"},Gb={class:"ec open"},_b={class:"ec-b",style:{display:"block"}},Wb={class:"cb"},Hb={class:"ch"},jb={class:"cb"},zb={class:"ch"},Xb={class:"ec open"},Zb={class:"ec-b",style:{display:"block"}},Yb={class:"cb"},Jb={class:"ch"};function Qb(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Vb,[t("div",Ub,[T(c,{to:"/"},{default:M(()=>[...s[4]||(s[4]=[g("首页",-1)])]),_:1}),s[6]||(s[6]=g("/ ",-1)),T(c,{to:"/errors"},{default:M(()=>[...s[5]||(s[5]=[g("错误诊断",-1)])]),_:1}),s[7]||(s[7]=g("/ ",-1)),s[8]||(s[8]=t("span",null,"内存与性能",-1))]),s[32]||(s[32]=t("h2",null,"内存与性能问题",-1)),s[33]||(s[33]=t("p",null,"内存溢出和计算速度慢是大规模计算中的常见问题。",-1)),t("div",Lb,[s[13]||(s[13]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：Out of memory / Killed"),t("span",{class:"es sc"},"高频")],-1)),t("div",$b,[s[11]||(s[11]=v('<h4>症状</h4><div class="esym">forrtl: severe (41): insufficient virtual memory<br>或直接显示 Killed（被系统杀死）</div><h4>内存估算</h4><table class="tb"><thead><tr><th>原子数</th><th>ENCUT</th><th>估算内存</th></tr></thead><tbody><tr><td>50</td><td>400 eV</td><td>~10 GB</td></tr><tr><td>100</td><td>400 eV</td><td>~20-40 GB</td></tr><tr><td>200</td><td>400 eV</td><td>~60-100 GB</td></tr><tr><td>500</td><td>400 eV</td><td>~200+ GB</td></tr></tbody></table><h4>解决方案</h4>',5)),t("div",Bb,[t("div",Kb,[s[9]||(s[9]=t("span",{class:"la"},"INCAR",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[10]||(s[10]=v(`<pre><code><span class="cm"># 方案 1：实空间投影（&gt;50 原子推荐）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>          <span class="cm">; 实空间计算投影算符</span>
<span class="kw">LREAL</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 默认，倒空间计算（更精确但费内存）</span>

<span class="cm"># 方案 2：减少同时处理的轨道数</span>
<span class="kw">NSIM</span>     = <span class="nu">1</span>             <span class="cm">; 默认 4，设为 1 最省内存</span>

<span class="cm"># 方案 3：减少 K 点并行</span>
<span class="kw">KPAR</span>     = <span class="nu">1</span>             <span class="cm">; 减少 K 点并行度</span>

<span class="cm"># 方案 4：不写大文件</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 WAVECAR</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写 CHGCAR</span></code></pre>`,1))]),s[12]||(s[12]=t("div",{class:"ib tip"},[t("strong",null,"检查内存使用："),g("运行时查看 "),t("code",null,"top"),g(" 或 "),t("code",null,"free -h"),g(" 命令。")],-1))])]),t("div",Gb,[s[23]||(s[23]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：计算速度太慢"),t("span",{class:"es scm"},"常见")],-1)),t("div",_b,[s[20]||(s[20]=t("h4",null,"性能优化 INCAR",-1)),t("div",Wb,[t("div",Hb,[s[14]||(s[14]=t("span",{class:"la"},"INCAR",-1)),s[15]||(s[15]=t("span",{class:"fn"},"性能优化",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[16]||(s[16]=v(`<pre><code><span class="cm"># 实空间投影（&gt;50 原子）</span>
<span class="kw">LREAL</span>    = <span class="st">Auto</span>

<span class="cm"># 电子步加速</span>
<span class="kw">ALGO</span>     = <span class="st">Fast</span>          <span class="cm">; 默认 Normal，Fast 更快</span>
<span class="kw">MAXMIX</span>   = <span class="nu">40</span>            <span class="cm">; 加速收敛</span>

<span class="cm"># I/O 优化</span>
<span class="kw">LWAVE</span>    = <span class="nu">.FALSE.</span>        <span class="cm">; 不写波函数</span>
<span class="kw">LCHARG</span>   = <span class="nu">.FALSE.</span>        <span class="cm">; 不写电荷密度</span>
<span class="kw">NWRITE</span>   = <span class="nu">0</span>             <span class="cm">; 减少输出</span></code></pre>`,1))]),s[21]||(s[21]=v('<h4>并行设置</h4><table class="tb"><thead><tr><th>参数</th><th>说明</th><th>建议</th></tr></thead><tbody><tr><td><code>NPAR</code></td><td>能带并行数</td><td>设为节点数，整除总核心数</td></tr><tr><td><code>KPAR</code></td><td>K 点并行数</td><td>整除 K 点数</td></tr><tr><td><code>NCORE</code></td><td>每组核心数</td><td>设为每节点核心数</td></tr></tbody></table>',2)),t("div",jb,[t("div",zb,[s[17]||(s[17]=t("span",{class:"la"},"INCAR",-1)),s[18]||(s[18]=t("span",{class:"fn"},"并行设置示例（64 核，4 节点，每节点 16 核）",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[19]||(s[19]=v(`<pre><code><span class="cm"># 64 核，4 节点，8 个 K 点</span>
<span class="kw">NPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个节点</span>
<span class="kw">KPAR</span>     = <span class="nu">4</span>             <span class="cm">; 4 个 K 点并行（整除 8）</span>
<span class="kw">NCORE</span>    = <span class="nu">16</span>            <span class="cm">; 每节点 16 核</span></code></pre>`,1))]),s[22]||(s[22]=t("div",{class:"ib warn"},[t("strong",null,"注意："),g("NPAR × KPAR × NCORE 应整除总核心数。NPAR 应整除 NBANDS。")],-1))])]),s[34]||(s[34]=v('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 3：磁盘空间不足</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>症状</h4><div class="esym">forrtl: severe (30): open unit, error on file OPEN</div><h4>文件大小参考</h4><table class="tb"><thead><tr><th>文件</th><th>典型大小</th><th>说明</th></tr></thead><tbody><tr><td><code>WAVECAR</code></td><td>1-100 GB</td><td>最大文件</td></tr><tr><td><code>CHGCAR</code></td><td>100 MB - 10 GB</td><td>电荷密度</td></tr><tr><td><code>OUTCAR</code></td><td>100 MB - 2 GB</td><td>详细输出</td></tr><tr><td><code>vasprun.xml</code></td><td>100 MB - 5 GB</td><td>XML 输出</td></tr></tbody></table><h4>解决方案</h4><ol><li>检查磁盘：<code>df -h</code></li><li>删除不需要的文件：<code>rm WAVECAR</code></li><li>设置 <code>LWAVE = .FALSE.</code></li><li>设置 <code>LCHARG = .FALSE.</code></li><li>使用 <code>NWRITE = 0</code> 减少输出</li></ol></div></div>',1)),t("div",Xb,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟢"),t("span",{class:"et"},"问题 4：MPI 通信效率低"),t("span",{class:"es smn"},"优化")],-1)),t("div",Zb,[s[26]||(s[26]=t("h4",null,"症状",-1)),s[27]||(s[27]=t("p",null,"使用大量核心但加速比不理想（如 128 核只比 64 核快 1.5 倍）。",-1)),s[28]||(s[28]=t("h4",null,"诊断方法",-1)),t("div",Yb,[t("div",Jb,[s[24]||(s[24]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[25]||(s[25]=v(`<pre><code><span class="cm"># 查看并行效率</span>
<span class="fn2">grep</span> <span class="st">&quot;LOOP:&quot;</span> OUTCAR | <span class="fn2">tail</span> -20

<span class="cm"># 时间分布</span>
<span class="fn2">grep</span> <span class="st">&quot;Total CPU time&quot;</span> OUTCAR
<span class="fn2">grep</span> <span class="st">&quot;Parallel routine&quot;</span> OUTCAR -A 20</code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"优化建议",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,"确保核心数整除 NPAR、KPAR、NCORE"),t("li",null,"K 点少时，减少 KPAR"),t("li",null,"能带少时，减少 NPAR"),t("li",null,"使用高速网络（InfiniBand）")],-1))])]),s[35]||(s[35]=v('<h3>性能调优总结</h3><div class="db"><div class="db-t">不同场景的推荐设置</div><table class="tb"><thead><tr><th>场景</th><th>LREAL</th><th>ALGO</th><th>NPAR</th><th>KPAR</th></tr></thead><tbody><tr><td>小体系 (&lt; 50 原子)</td><td>.FALSE.</td><td>Normal</td><td>核心数</td><td>K 点数</td></tr><tr><td>中体系 (50-200 原子)</td><td>Auto</td><td>Fast</td><td>节点数</td><td>1</td></tr><tr><td>大体系 (&gt; 200 原子)</td><td>Auto</td><td>Fast</td><td>1</td><td>1</td></tr></tbody></table></div>',2))])}const sv=is(Db,[["render",Qb]]),nv={name:"ErrorsFilesView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},tv={class:"sec active"},av={class:"bread"},lv={class:"ec open"},ev={class:"ec-b",style:{display:"block"}},pv={class:"cb"},ov={class:"ch"},cv={class:"ec open"},rv={class:"ec-b",style:{display:"block"}},iv={class:"cb"},dv={class:"ch"},uv={class:"ec open"},fv={class:"ec-b",style:{display:"block"}},mv={class:"cb"},bv={class:"ch"},vv={class:"cb"},gv={class:"ch"},hv={class:"ec open"},yv={class:"ec-b",style:{display:"block"}},kv={class:"cb"},Cv={class:"ch"};function Av(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",tv,[t("div",av,[T(c,{to:"/"},{default:M(()=>[...s[5]||(s[5]=[g("首页",-1)])]),_:1}),s[7]||(s[7]=g("/ ",-1)),T(c,{to:"/errors"},{default:M(()=>[...s[6]||(s[6]=[g("错误诊断",-1)])]),_:1}),s[8]||(s[8]=g("/ ",-1)),s[9]||(s[9]=t("span",null,"文件错误",-1))]),s[38]||(s[38]=t("h2",null,"文件错误诊断",-1)),s[39]||(s[39]=t("p",null,"输入文件格式错误是初学者最常遇到的问题。",-1)),t("div",lv,[s[16]||(s[16]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 1：POTCAR 元素顺序与 POSCAR 不一致"),t("span",{class:"es sc"},"高频")],-1)),t("div",ev,[s[12]||(s[12]=t("h4",null,"症状",-1)),s[13]||(s[13]=t("p",null,"计算结果明显错误，能量异常大，或结构优化后原子位置混乱。",-1)),s[14]||(s[14]=t("h4",null,"检查方法",-1)),t("div",pv,[t("div",ov,[s[10]||(s[10]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[11]||(s[11]=v(`<pre><code><span class="cm"># 查看 POTCAR 中的元素</span>
<span class="fn2">grep</span> TITEL POTCAR

<span class="cm"># 查看 POSCAR 中的元素</span>
<span class="fn2">head</span> -6 POSCAR

<span class="cm"># 确认两者顺序一致！</span></code></pre>`,1))]),s[15]||(s[15]=v(`<h4>正确示例</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span></div><pre><code>TiO2
1.0
4.59  0.00  0.00
0.00  4.59  0.00
0.00  0.00  2.96
Ti O          <span class="cm">; ← 先 Ti 后 O</span>
1 2
Direct</code></pre></div><div class="cb"><div class="ch"><span class="la">POTCAR</span></div><pre><code>TITEL  = PAW_PBE Ti ...    <span class="cm">; ← 第一个必须是 Ti</span>
TITEL  = PAW_PBE O  ...    <span class="cm">; ← 第二个是 O</span></code></pre></div><div class="ib warn"><strong>重要：</strong>POTCAR 顺序必须与 POSCAR 完全一致，否则结果完全错误！</div>`,4))])]),t("div",cv,[s[20]||(s[20]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🔴"),t("span",{class:"et"},"问题 2：POSCAR 格式错误"),t("span",{class:"es sc"},"高频")],-1)),t("div",rv,[s[19]||(s[19]=v(`<table class="tb"><thead><tr><th>错误类型</th><th>说明</th><th>解决方法</th></tr></thead><tbody><tr><td>缩放因子为 0</td><td>第二行不能为 0</td><td>改为 1.0 或实际值</td></tr><tr><td>坐标类型拼错</td><td>必须是 Direct 或 Cartesian</td><td>检查拼写和大小写</td></tr><tr><td>原子数与坐标不匹配</td><td>声明 N 个原子但只有 M 行坐标</td><td>检查坐标行数</td></tr><tr><td>多余空行</td><td>文件末尾不要有空行</td><td>删除末尾空行</td></tr><tr><td>Windows 换行符</td><td>\\r\\n 导致问题</td><td>dos2unix POSCAR</td></tr><tr><td>制表符</td><td>不要用 Tab，用空格</td><td>替换 Tab 为空格</td></tr></tbody></table><h4>POSCAR 格式详解</h4><div class="cb"><div class="ch"><span class="la">POSCAR</span><span class="fn">完整格式</span></div><pre><code>Si bulk structure          <span class="cm">; 第 1 行：注释（可选）</span>
1.0                        <span class="cm">; 第 2 行：缩放因子</span>
5.43  0.00  0.00           <span class="cm">; 第 3-5 行：晶格矢量</span>
0.00  5.43  0.00
0.00  0.00  5.43
Si                         <span class="cm">; 第 6 行：元素符号</span>
2                          <span class="cm">; 第 7 行：原子数</span>
Direct                     <span class="cm">; 第 8 行：坐标类型</span>
0.00  0.00  0.00           <span class="cm">; 第 9 行起：原子坐标</span>
0.25  0.25  0.25</code></pre></div><h4>选择性动力学格式</h4>`,4)),t("div",iv,[t("div",dv,[s[17]||(s[17]=t("span",{class:"la"},"POSCAR",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[18]||(s[18]=t("pre",null,[t("code",null,[g(`Si surface
1.0
5.43  0.00  0.00
0.00  5.43  0.00
0.00  0.00  15.0
Si
4
Selective dynamics        `),t("span",{class:"cm"},"; 开启选择性动力学"),g(`
Direct
0.00  0.00  0.00  F F F   `),t("span",{class:"cm"},"; F=固定，T=可动"),g(`
0.25  0.25  0.25  F F F
0.50  0.50  0.50  T T T
0.75  0.75  0.75  T T T`)])],-1))])])]),t("div",uv,[s[30]||(s[30]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：KPOINTS 格式错误"),t("span",{class:"es scm"},"常见")],-1)),t("div",fv,[s[27]||(s[27]=t("h4",null,"常见错误",-1)),s[28]||(s[28]=t("ul",null,[t("li",null,"第 2 行不是 0（自动生成模式下必须是 0）"),t("li",null,"Gamma 拼写错误（正确：Gamma，不是 GAMMA 或 gamma）"),t("li",null,"Line-mode 缺少空行分隔线段"),t("li",null,"坐标格式与 Direct/Cartesian 不匹配")],-1)),s[29]||(s[29]=t("h4",null,"正确格式",-1)),t("div",mv,[t("div",bv,[s[21]||(s[21]=t("span",{class:"la"},"KPOINTS",-1)),s[22]||(s[22]=t("span",{class:"fn"},"自动网格",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[23]||(s[23]=v(`<pre><code>Automatic mesh        <span class="cm">; 注释行</span>
0                     <span class="cm">; 必须是 0（自动生成）</span>
Gamma                 <span class="cm">; 生成方式：Gamma 或 Monkhorst</span>
4 4 4                 <span class="cm">; k 点网格</span>
0.0 0.0 0.0           <span class="cm">; 偏移（通常全 0）</span></code></pre>`,1))]),t("div",vv,[t("div",gv,[s[24]||(s[24]=t("span",{class:"la"},"KPOINTS",-1)),s[25]||(s[25]=t("span",{class:"fn"},"Line-mode（能带计算）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[26]||(s[26]=v(`<pre><code>k-points along high symmetry lines
10                    <span class="cm">; 每条线段的点数</span>
Line-mode             <span class="cm">; 线模式</span>
Reciprocal            <span class="cm">; 坐标类型</span>
0.0  0.0  0.0         <span class="cm">; 起点 Gamma</span>
0.5  0.5  0.0         <span class="cm">; 终点 X</span>
                      <span class="cm">; ← 空行分隔！</span>
0.5  0.5  0.0         <span class="cm">; 起点 X</span>
0.5  0.5  0.5         <span class="cm">; 终点 R</span></code></pre>`,1))])])]),t("div",hv,[s[37]||(s[37]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：找不到 POTCAR 文件"),t("span",{class:"es scm"},"常见")],-1)),t("div",yv,[s[33]||(s[33]=t("h4",null,"症状",-1)),s[34]||(s[34]=t("div",{class:"esym"},"VASP could not be started because POTCAR file was not found",-1)),s[35]||(s[35]=t("h4",null,"生成 POTCAR",-1)),t("div",kv,[t("div",Cv,[s[31]||(s[31]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[32]||(s[32]=v(`<pre><code><span class="cm"># 查看赝势库路径</span>
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
p.write_file(<span class="st">&#39;POTCAR&#39;</span>)</code></pre>`,1))]),s[36]||(s[36]=t("div",{class:"ib tip"},[t("strong",null,"建议："),g("设置环境变量 VASP_PP_PATH 指向赝势库目录，方便使用。")],-1))])]),s[40]||(s[40]=v('<div class="ec open"><div class="ec-h"><span class="ei">🟡</span><span class="et">问题 5：INCAR 参数格式错误</span><span class="es scm">常见</span></div><div class="ec-b" style="display:block;"><h4>常见错误</h4><table class="tb"><thead><tr><th>错误写法</th><th>正确写法</th><th>说明</th></tr></thead><tbody><tr><td><code>ENCUT=400</code></td><td><code>ENCUT = 400</code></td><td>等号两边要有空格</td></tr><tr><td><code>LREAL=.true.</code></td><td><code>LREAL = .TRUE.</code></td><td>布尔值大写</td></tr><tr><td><code>ISMEAR=0.5</code></td><td><code>ISMEAR = 0</code></td><td>ISMEAR 是整数</td></tr><tr><td><code>SYSTEM= test</code></td><td><code>SYSTEM = test</code></td><td>等号对齐</td></tr></tbody></table><div class="ib warn"><strong>注意：</strong>VASP 对格式敏感，但通常会忽略无法识别的行并给出警告。</div></div></div>',1))])}const Ev=is(nv,[["render",Av]]),wv={name:"ErrorsOutputView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Sv={class:"sec active"},Tv={class:"bread"},Rv={class:"ec open"},Ov={class:"ec-b",style:{display:"block"}},Iv={class:"cb"},Nv={class:"ch"},Pv={class:"ec open"},xv={class:"ec-b",style:{display:"block"}},qv={class:"cb"},Fv={class:"ch"},Mv={class:"ec open"},Dv={class:"ec-b",style:{display:"block"}},Vv={class:"cb"},Uv={class:"ch"},Lv={class:"cb"},$v={class:"ch"},Bv={class:"ec open"},Kv={class:"ec-b",style:{display:"block"}},Gv={class:"cb"},_v={class:"ch"},Wv={class:"ec open"},Hv={class:"ec-b",style:{display:"block"}},jv={class:"cb"},zv={class:"ch"};function Xv(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Sv,[t("div",Tv,[T(c,{to:"/"},{default:M(()=>[...s[6]||(s[6]=[g("首页",-1)])]),_:1}),s[8]||(s[8]=g("/ ",-1)),T(c,{to:"/errors"},{default:M(()=>[...s[7]||(s[7]=[g("错误诊断",-1)])]),_:1}),s[9]||(s[9]=g("/ ",-1)),s[10]||(s[10]=t("span",null,"输出异常",-1))]),s[42]||(s[42]=t("h2",null,"输出异常诊断",-1)),s[43]||(s[43]=t("p",null,"计算完成但结果不合理时，需要排查输出文件中的异常。",-1)),t("div",Rv,[s[15]||(s[15]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 1：能量异常大或异常小"),t("span",{class:"es scm"},"常见")],-1)),t("div",Ov,[s[13]||(s[13]=v('<table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>能量 ~10⁶ eV</td><td>原子重叠（距离太近）</td><td>检查 POSCAR 原子距离</td></tr><tr><td>能量比文献差很多</td><td>POTCAR 泛函不匹配</td><td>确认使用正确的泛函</td></tr><tr><td>能量正数</td><td>严重结构错误</td><td>重新构建结构</td></tr><tr><td>NaN / Infinity</td><td>数值溢出</td><td>降低 ENCUT</td></tr><tr><td>能量不收敛</td><td>SCF 问题</td><td>参考 SCF 不收敛诊断</td></tr></tbody></table><h4>查看能量</h4>',2)),t("div",Iv,[t("div",Nv,[s[11]||(s[11]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[12]||(s[12]=v(`<pre><code><span class="cm"># 查看自由能</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看能量变化</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR

<span class="cm"># 每原子能量（估算）</span>
<span class="fn2">grep</span> <span class="st">&quot;free  energy&quot;</span> OUTCAR | <span class="fn2">tail</span> -1
<span class="cm"># 手动除以原子数</span></code></pre>`,1))]),s[14]||(s[14]=t("div",{class:"ib tip"},[t("strong",null,"参考值："),g("大多数材料的结合能在 -1 到 -10 eV/atom 范围内。如果偏离太多，需要检查计算设置。")],-1))])]),t("div",Pv,[s[22]||(s[22]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 2：力很大（> 1 eV/Å）"),t("span",{class:"es scm"},"常见")],-1)),t("div",xv,[s[18]||(s[18]=t("h4",null,"症状",-1)),s[19]||(s[19]=t("p",null,"优化收敛后力仍然很大，或优化过程中力振荡。",-1)),s[20]||(s[20]=t("h4",null,"查看力",-1)),t("div",qv,[t("div",Fv,[s[16]||(s[16]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[17]||(s[17]=v(`<pre><code><span class="cm"># 查看最大力</span>
<span class="fn2">grep</span> <span class="st">&quot;TOTAL-FORCE&quot;</span> OUTCAR -A <span class="nu">20</span> | <span class="fn2">tail</span> -20

<span class="cm"># 查看力是否收敛</span>
<span class="fn2">grep</span> <span class="st">&quot;reached required&quot;</span> OUTCAR</code></pre>`,1))]),s[21]||(s[21]=v('<h4>正常值参考</h4><table class="tb"><thead><tr><th>状态</th><th>最大力</th><th>说明</th></tr></thead><tbody><tr><td>良好收敛</td><td>&lt; 0.01 eV/Å</td><td>高质量结果</td></tr><tr><td>一般收敛</td><td>0.01 - 0.05 eV/Å</td><td>大多数应用足够</td></tr><tr><td>勉强收敛</td><td>0.05 - 0.1 eV/Å</td><td>可接受但不理想</td></tr><tr><td>未收敛</td><td>&gt; 0.1 eV/Å</td><td>需要继续优化</td></tr><tr><td>有问题</td><td>&gt; 1.0 eV/Å</td><td>结构或计算有问题</td></tr></tbody></table><h4>解决方案</h4><ul><li>检查原子距离是否合理</li><li>增加 NSW 继续优化</li><li>减小 POTIM</li><li>降低 EDIFF 到 1E-7</li><li>增加 ENCUT</li></ul>',4))])]),t("div",Mv,[s[31]||(s[31]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 3：磁矩不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",Dv,[s[28]||(s[28]=t("h4",null,"查看磁矩",-1)),t("div",Vv,[t("div",Uv,[s[23]||(s[23]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[24]||(s[24]=v(`<pre><code><span class="cm"># 查看总磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;number of electron&quot;</span> OUTCAR | <span class="fn2">tail</span> -1

<span class="cm"># 查看每个原子的磁矩</span>
<span class="fn2">grep</span> <span class="st">&quot;magnetization&quot;</span> OUTCAR -A <span class="nu">20</span></code></pre>`,1))]),s[29]||(s[29]=t("h4",null,"常见问题",-1)),s[30]||(s[30]=t("ul",null,[t("li",null,[t("strong",null,"磁矩为零但应有磁性"),g("：需要设置 ISPIN=2 和适当的 MAGMOM")]),t("li",null,[t("strong",null,"磁矩振荡"),g("：MAGMOM 初始值设置不当，尝试不同的初始值")]),t("li",null,[t("strong",null,"磁矩不合理"),g("：检查是否需要开启自旋轨道耦合（LSORBIT=.TRUE.）")])],-1)),t("div",Lv,[t("div",$v,[s[25]||(s[25]=t("span",{class:"la"},"INCAR",-1)),s[26]||(s[26]=t("span",{class:"fn"},"磁性计算",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[27]||(s[27]=v(`<pre><code><span class="cm"># 自旋极化计算</span>
<span class="kw">ISPIN</span>    = <span class="nu">2</span>             <span class="cm">; 开启自旋极化</span>

<span class="cm"># 初始磁矩设置</span>
<span class="kw">MAGMOM</span>   = <span class="nu">5 5 5 5</span>       <span class="cm">; 每个原子的初始磁矩 (μB)</span>

<span class="cm"># 过渡金属常见值</span>
<span class="cm"># Fe, Co, Ni: 3-5 μB</span>
<span class="cm"># Mn: 5 μB</span>
<span class="cm"># Cr: 3-5 μB</span>
<span class="cm"># Cu, Zn: 0 (d 满)</span></code></pre>`,1))])])]),t("div",Bv,[s[36]||(s[36]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 4：应力张量异常"),t("span",{class:"es scm"},"常见")],-1)),t("div",Kv,[s[34]||(s[34]=t("h4",null,"查看应力",-1)),t("div",Gv,[t("div",_v,[s[32]||(s[32]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[33]||(s[33]=v(`<pre><code><span class="cm"># 查看外部压力</span>
<span class="fn2">grep</span> <span class="st">&quot;external pressure&quot;</span> OUTCAR

<span class="cm"># 查看应力张量</span>
<span class="fn2">grep</span> <span class="st">&quot;in kB&quot;</span> OUTCAR | <span class="fn2">tail</span> -1</code></pre>`,1))]),s[35]||(s[35]=v('<h4>正常值参考</h4><table class="tb"><thead><tr><th>压力</th><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>&lt; 1 kbar</td><td>很好</td><td>晶格已收敛</td></tr><tr><td>1 - 5 kbar</td><td>良好</td><td>大多数应用足够</td></tr><tr><td>5 - 20 kbar</td><td>一般</td><td>可接受但不理想</td></tr><tr><td>&gt; 20 kbar</td><td>差</td><td>需要继续优化</td></tr></tbody></table><div class="ib tip"><strong>单位换算：</strong>1 kbar = 0.1 GPa = 100 MPa</div>',3))])]),t("div",Wv,[s[41]||(s[41]=t("div",{class:"ec-h"},[t("span",{class:"ei"},"🟡"),t("span",{class:"et"},"问题 5：能带带隙不合理"),t("span",{class:"es scm"},"常见")],-1)),t("div",Hv,[s[40]||(s[40]=v('<h4>问题分析</h4><table class="tb"><thead><tr><th>现象</th><th>可能原因</th><th>解决方法</th></tr></thead><tbody><tr><td>半导体显示为金属</td><td>GGA-PBE 低估带隙</td><td>使用杂化泛函 HSE06</td></tr><tr><td>带隙偏大</td><td>带隙计算方法问题</td><td>使用 ISMEAR=0 或 -5</td></tr><tr><td>间接带隙变直接</td><td>K 点不足</td><td>加密 K 点</td></tr></tbody></table><h4>准确计算带隙</h4>',3)),t("div",jv,[t("div",zv,[s[37]||(s[37]=t("span",{class:"la"},"INCAR",-1)),s[38]||(s[38]=t("span",{class:"fn"},"带隙计算",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[39]||(s[39]=v(`<pre><code><span class="cm"># 方案 1：GGA-PBE（低估带隙）</span>
<span class="kw">ISMEAR</span>   = <span class="nu">0</span>
<span class="kw">SIGMA</span>    = <span class="nu">0.05</span>

<span class="cm"># 方案 2：杂化泛函 HSE06（更准确但慢）</span>
<span class="kw">LHFCALC</span>  = <span class="nu">.TRUE.</span>
<span class="kw">AEXX</span>     = <span class="nu">0.25</span>
<span class="kw">HFSCREEN</span> = <span class="nu">0.2</span>
<span class="kw">ALGO</span>     = <span class="st">Damped</span>        <span class="cm">; HSE 推荐用 Damped</span>
<span class="kw">TIME</span>     = <span class="nu">0.4</span>

<span class="cm"># 方案 3：GW 计算（最准确但最慢）</span>
<span class="cm"># 需要分步进行，参考 VASP 手册</span></code></pre>`,1))])])])])}const Zv=is(wv,[["render",Xv]]),Yv={name:"ThermoelectricView",methods:{copy(n){const a=n.target.closest(".cb").querySelector("pre").textContent;navigator.clipboard.writeText(a).then(()=>{n.target.textContent="已复制!",n.target.classList.add("ok"),setTimeout(()=>{n.target.textContent="复制",n.target.classList.remove("ok")},2e3)})}}},Jv={class:"sec active"},Qv={class:"bread"},s2={class:"cb"},n2={class:"ch"},t2={class:"cb"},a2={class:"ch"},l2={class:"cb"},e2={class:"ch"},p2={class:"cb"},o2={class:"ch"},c2={class:"cb"},r2={class:"ch"},i2={class:"cb"},d2={class:"ch"},u2={class:"cb"},f2={class:"ch"},m2={class:"cb"},b2={class:"ch"},v2={class:"cb"},g2={class:"ch"},h2={class:"cb"},y2={class:"ch"},k2={class:"cb"},C2={class:"ch"};function A2(n,s,a,e,p,l){const c=os("router-link");return B(),K("div",Jv,[t("div",Qv,[T(c,{to:"/"},{default:M(()=>[...s[11]||(s[11]=[g("首页",-1)])]),_:1}),s[13]||(s[13]=g("/ ",-1)),T(c,{to:"/tasks"},{default:M(()=>[...s[12]||(s[12]=[g("计算任务",-1)])]),_:1}),s[14]||(s[14]=g("/ ",-1)),s[15]||(s[15]=t("span",null,"热电计算",-1))]),s[47]||(s[47]=v('<h2>热电材料计算</h2><p>热电材料能够将热能直接转换为电能（Seebeck效应）或将电能转换为热能（Peltier效应），在废热回收和固态制冷中有重要应用。</p><h3>1. 热电优值 ZT</h3><p>热电材料的性能由无量纲热电优值 ZT 表征：</p><div class="fb"><div class="fm">ZT = S²σT / κ</div><div class="fd">S: Seebeck系数 | σ: 电导率 | T: 温度 | κ: 热导率</div></div><table class="tb"><thead><tr><th>参数</th><th>单位</th><th>理想方向</th><th>说明</th></tr></thead><tbody><tr><td><strong>Seebeck系数 S</strong></td><td>μV/K</td><td>越大越好</td><td>衡量每单位温差产生的电压</td></tr><tr><td><strong>电导率 σ</strong></td><td>S/m</td><td>越大越好</td><td>衡量电荷传输能力</td></tr><tr><td><strong>热导率 κ</strong></td><td>W/m·K</td><td>越小越好</td><td>κ = κ<sub>e</sub> + κ<sub>l</sub></td></tr><tr><td><strong>功率因子 PF</strong></td><td>μW/cm·K²</td><td>越大越好</td><td>PF = S²σ</td></tr></tbody></table><div class="ib tip"><strong>ZT 目标：</strong>商业化应用需要 ZT &gt; 2.0，目前最佳热电材料（如 SnSe）在高温下可达 ZT ~ 2.6。</div><h3>2. 计算流程</h3><div class="fc"><div class="fn2-node s">结构优化（获取稳定结构）</div><div class="fa"></div><div class="fn2-node p">自洽计算（获取精确电荷密度）</div><div class="fa"></div><div class="fn2-node p">非自洽计算（密集 K 点，获取能带）</div><div class="fa"></div><div class="fn2-node p">BoltzTraP 计算输运性质</div><div class="fa"></div><div class="fn2-node p">声子计算（获取晶格热导率）</div><div class="fa"></div><div class="fn2-node e">计算 ZT 值</div></div><h3>3. 结构优化</h3>',10)),t("div",s2,[t("div",n2,[s[16]||(s[16]=t("span",{class:"la"},"INCAR",-1)),s[17]||(s[17]=t("span",{class:"fn"},"热电材料结构优化",-1)),t("button",{class:"cpb",onClick:s[0]||(s[0]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[18]||(s[18]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 relaxation</span>

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
<span class="kw">NBANDS</span>   = <span class="nu">200</span>              <span class="cm">; SOC 需要更多能带</span></code></pre>`,1))]),s[48]||(s[48]=t("h3",null,"4. 自洽计算",-1)),t("div",t2,[t("div",a2,[s[19]||(s[19]=t("span",{class:"la"},"INCAR",-1)),s[20]||(s[20]=t("span",{class:"fn"},"自洽计算",-1)),t("button",{class:"cpb",onClick:s[1]||(s[1]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[21]||(s[21]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 SCF</span>

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
<span class="kw">LCHARG</span>   = <span class="nu">.TRUE.</span></code></pre>`,1))]),s[49]||(s[49]=t("h3",null,"5. 非自洽计算（密集 K 点）",-1)),s[50]||(s[50]=t("p",null,"BoltzTraP 需要非常密集的 K 点网格来准确计算输运性质。",-1)),t("div",l2,[t("div",e2,[s[22]||(s[22]=t("span",{class:"la"},"INCAR",-1)),s[23]||(s[23]=t("span",{class:"fn"},"非自洽计算",-1)),t("button",{class:"cpb",onClick:s[2]||(s[2]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[24]||(s[24]=v(`<pre><code><span class="kw">SYSTEM</span>   = <span class="st">Bi2Te3 non-SCF</span>

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
<span class="kw">NEDOS</span>    = <span class="nu">2000</span></code></pre>`,1))]),t("div",p2,[t("div",o2,[s[25]||(s[25]=t("span",{class:"la"},"KPOINTS",-1)),s[26]||(s[26]=t("span",{class:"fn"},"密集网格（BoltzTraP 需要）",-1)),t("button",{class:"cpb",onClick:s[3]||(s[3]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[27]||(s[27]=v(`<pre><code><span class="vr">Dense k-mesh for BoltzTraP</span>
<span class="nu">0</span>
<span class="kw">Gamma</span>
<span class="nu">24  24  24</span>               <span class="cm">; 非常密集的 K 点</span>
<span class="nu">0.0  0.0  0.0</span></code></pre>`,1))]),s[51]||(s[51]=t("div",{class:"ib warn"},[t("strong",null,"重要："),g("BoltzTraP 需要非常密集的 K 点（通常 20×20×20 或更高），否则输运系数不准确。")],-1)),s[52]||(s[52]=t("h3",null,"6. BoltzTraP 计算",-1)),s[53]||(s[53]=t("p",null,"BoltzTraP 基于玻尔兹曼输运理论计算电导率和 Seebeck 系数。",-1)),s[54]||(s[54]=t("h4",null,"安装 BoltzTraP",-1)),t("div",c2,[t("div",r2,[s[28]||(s[28]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[4]||(s[4]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[29]||(s[29]=v(`<pre><code><span class="cm"># 下载 BoltzTraP</span>
<span class="fn2">wget</span> http://www.physics.iit.edu/~savrasov/BoltzTraP/BoltzTraP.tar.gz
<span class="fn2">tar</span> -xzf BoltzTraP.tar.gz
<span class="fn2">cd</span> BoltzTraP/src
<span class="fn2">make</span>
<span class="fn2">cp</span> boltztrap ../bin/</code></pre>`,1))]),s[55]||(s[55]=t("h4",null,"运行 BoltzTraP",-1)),t("div",i2,[t("div",d2,[s[30]||(s[30]=t("span",{class:"la"},"bash",-1)),s[31]||(s[31]=t("span",{class:"fn"},"boltztrap.sh",-1)),t("button",{class:"cpb",onClick:s[5]||(s[5]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[32]||(s[32]=v(`<pre><code><span class="kw">#!/bin/bash</span>

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

<span class="cm"># 输出文件：bi2te3.trace (Seebeck, 电导率等)</span></code></pre>`,1))]),s[56]||(s[56]=t("h4",null,"解读 BoltzTraP 输出",-1)),t("div",u2,[t("div",f2,[s[33]||(s[33]=t("span",{class:"la"},"python",-1)),s[34]||(s[34]=t("span",{class:"fn"},"read_boltztrap.py",-1)),t("button",{class:"cpb",onClick:s[6]||(s[6]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[35]||(s[35]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
plt.show()</code></pre>`,1))]),s[57]||(s[57]=t("h3",null,"7. 晶格热导率计算",-1)),s[58]||(s[58]=t("p",null,[g("晶格热导率 κ"),t("sub",null,"l"),g(" 通过声子计算获得，使用 Slack 模型或求解玻尔兹曼方程。")],-1)),s[59]||(s[59]=t("h4",null,"Slack 模型估算",-1)),t("div",m2,[t("div",b2,[s[36]||(s[36]=t("span",{class:"la"},"python",-1)),s[37]||(s[37]=t("span",{class:"fn"},"slack_model.py",-1)),t("button",{class:"cpb",onClick:s[7]||(s[7]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[38]||(s[38]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np

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
    <span class="fn2">print</span>(f<span class="st">&quot;{T:.0f} K: κ = {k:.2f} W/m·K&quot;</span>)</code></pre>`,1))]),s[60]||(s[60]=t("h4",null,"phonopy 计算晶格热导率",-1)),t("div",v2,[t("div",g2,[s[39]||(s[39]=t("span",{class:"la"},"bash",-1)),t("button",{class:"cpb",onClick:s[8]||(s[8]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[40]||(s[40]=t("pre",null,[t("code",null,[t("span",{class:"cm"},"# 使用 phonopy 计算热导率（BTE 方法）"),g(`
`),t("span",{class:"fn2"},"phonopy"),g(` --mesh="20 20 20" --tprop --fc DispFC

`),t("span",{class:"cm"},"# 或使用 phono3py 计算三声子散射"),g(`
`),t("span",{class:"fn2"},"phono3py"),g(' --mesh="20 20 20" --tprop')])],-1))]),s[61]||(s[61]=t("h3",null,"8. ZT 值计算",-1)),t("div",h2,[t("div",y2,[s[41]||(s[41]=t("span",{class:"la"},"python",-1)),s[42]||(s[42]=t("span",{class:"fn"},"calculate_ZT.py",-1)),t("button",{class:"cpb",onClick:s[9]||(s[9]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[43]||(s[43]=v(`<pre><code><span class="kw">import</span> numpy <span class="kw">as</span> np
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
<span class="fn2">print</span>(f<span class="st">&quot;最佳 ZT: {max(max_ZT):.2f} at {best_T} K&quot;</span>)</code></pre>`,1))]),s[62]||(s[62]=v('<h3>9. 常见热电材料</h3><table class="tb"><thead><tr><th>材料</th><th>类型</th><th>最佳温度</th><th>ZT 峰值</th><th>应用</th></tr></thead><tbody><tr><td>Bi₂Te₃</td><td>窄带隙半导体</td><td>300-400 K</td><td>~1.0</td><td>室温制冷</td></tr><tr><td>PbTe</td><td>IV-VI 化合物</td><td>600-900 K</td><td>~2.0</td><td>中温发电</td></tr><tr><td>SnSe</td><td>层状材料</td><td>700-900 K</td><td>~2.6</td><td>高温发电</td></tr><tr><td>Mg₂Si</td><td>硅化物</td><td>500-800 K</td><td>~1.3</td><td>汽车废热</td></tr><tr><td>Half-Heusler</td><td>金属间化合物</td><td>700-1000 K</td><td>~1.5</td><td>高温发电</td></tr></tbody></table><h3>10. 提高 ZT 的策略</h3><div class="db"><div class="db-t">优化热电性能的方法</div><h4>1. 增大功率因子 S²σ</h4><ul><li>优化载流子浓度（通常 10<sup>19</sup>-10<sup>21</sup> cm⁻³）</li><li>能带工程：增大能带有效质量</li><li>能量过滤效应</li><li>共振能级掺杂</li></ul><h4>2. 降低热导率 κ</h4><ul><li>纳米结构化：增加声子散射</li><li>点缺陷散射：合金化、掺杂</li><li>界面散射：纳米复合材料</li><li>本征低热导率材料：重元素、复杂结构</li></ul><h4>3. 能带收敛</h4><ul><li>多能谷材料：增大谷简并度</li><li>温度诱导能带收敛</li><li>压力诱导能带收敛</li></ul></div><h3>11. 完整计算脚本</h3>',5)),t("div",k2,[t("div",C2,[s[44]||(s[44]=t("span",{class:"la"},"bash",-1)),s[45]||(s[45]=t("span",{class:"fn"},"thermoelectric_workflow.sh",-1)),t("button",{class:"cpb",onClick:s[10]||(s[10]=(...o)=>l.copy&&l.copy(...o))},"复制")]),s[46]||(s[46]=v(`<pre><code><span class="kw">#!/bin/bash</span>
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

<span class="fn2">echo</span> <span class="st">&quot;=== 计算完成 ===&quot;</span></code></pre>`,1))]),s[63]||(s[63]=t("h3",null,"12. 注意事项",-1)),s[64]||(s[64]=t("div",{class:"ib warn"},[t("strong",null,"重要提醒："),t("ul",null,[t("li",null,"热电计算需要密集 K 点（20×20×20 或更高）"),t("li",null,"重元素（Bi, Pb, Te 等）通常需要考虑自旋轨道耦合"),t("li",null,"BoltzTraP 计算需要较大内存"),t("li",null,"晶格热导率计算需要高精度的力常数"),t("li",null,"ZT 的准确度取决于所有参数的准确度")])],-1))])}const E2=is(Yv,[["render",A2]]),w2=[{path:"/",name:"home",component:yd},{path:"/theory",name:"theory",component:Nd},{path:"/input",name:"input",component:Lu},{path:"/tasks",name:"tasks",component:yf},{path:"/output",name:"output",component:Kf},{path:"/errors",name:"errors",component:n1},{path:"/tools",name:"tools",component:B1},{path:"/tools/calculator",name:"calculator",component:R0},{path:"/surface",name:"surface",component:$0},{path:"/defect",name:"defect",component:Y0},{path:"/phonon",name:"phonon",component:mm},{path:"/convergence",name:"convergence",component:Sm},{path:"/cheatsheet",name:"cheatsheet",component:Um},{path:"/thermoelectric",name:"thermoelectric",component:E2},{path:"/errors/scf",name:"errors-scf",component:ub},{path:"/errors/ion",name:"errors-ion",component:Mb},{path:"/errors/memory",name:"errors-memory",component:sv},{path:"/errors/files",name:"errors-files",component:Ev},{path:"/errors/output",name:"errors-output",component:Zv}],S2=Ji({history:Ni(),routes:w2}),yp=Wc(Hr);yp.use(S2);yp.mount("#app");
