var Xf=(c,e)=>()=>(e||c((e={exports:{}}).exports,e),e.exports);var BX=Xf((J2,Z2)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function K8(c){const e=Object.create(null);for(const a of c.split(","))e[a]=1;return a=>a in e}const l2={},Q3=[],h1=()=>{},Qf=()=>!1,t0=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),Y8=c=>c.startsWith("onUpdate:"),L2=Object.assign,X8=(c,e)=>{const a=c.indexOf(e);a>-1&&c.splice(a,1)},Jf=Object.prototype.hasOwnProperty,s2=(c,e)=>Jf.call(c,e),q=Array.isArray,J3=c=>e6(c)==="[object Map]",m4=c=>e6(c)==="[object Set]",E7=c=>e6(c)==="[object Date]",X=c=>typeof c=="function",C2=c=>typeof c=="string",H1=c=>typeof c=="symbol",f2=c=>c!==null&&typeof c=="object",D9=c=>(f2(c)||X(c))&&X(c.then)&&X(c.catch),I9=Object.prototype.toString,e6=c=>I9.call(c),Zf=c=>e6(c).slice(8,-1),$9=c=>e6(c)==="[object Object]",Q8=c=>C2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,x4=K8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o0=c=>{const e=Object.create(null);return a=>e[a]||(e[a]=c(a))},cu=/-(\w)/g,s3=o0(c=>c.replace(cu,(e,a)=>a?a.toUpperCase():"")),eu=/\B([A-Z])/g,u3=o0(c=>c.replace(eu,"-$1").toLowerCase()),U9=o0(c=>c.charAt(0).toUpperCase()+c.slice(1)),R6=o0(c=>c?`on${U9(c)}`:""),r3=(c,e)=>!Object.is(c,e),_6=(c,...e)=>{for(let a=0;a<c.length;a++)c[a](...e)},q9=(c,e,a,r=!1)=>{Object.defineProperty(c,e,{configurable:!0,enumerable:!1,writable:r,value:a})},W6=c=>{const e=parseFloat(c);return isNaN(e)?c:e},au=c=>{const e=C2(c)?Number(c):NaN;return isNaN(e)?c:e};let D7;const a6=()=>D7||(D7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function r6(c){if(q(c)){const e={};for(let a=0;a<c.length;a++){const r=c[a],s=C2(r)?iu(r):r6(r);if(s)for(const n in s)e[n]=s[n]}return e}else if(C2(c)||f2(c))return c}const ru=/;(?![^(]*\))/g,su=/:([^]+)/,nu=/\/\*[^]*?\*\//g;function iu(c){const e={};return c.replace(nu,"").split(ru).forEach(a=>{if(a){const r=a.split(su);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function I2(c){let e="";if(C2(c))e=c;else if(q(c))for(let a=0;a<c.length;a++){const r=I2(c[a]);r&&(e+=r+" ")}else if(f2(c))for(const a in c)c[a]&&(e+=a+" ");return e.trim()}function tu(c){if(!c)return null;let{class:e,style:a}=c;return e&&!C2(e)&&(c.class=I2(e)),a&&(c.style=r6(a)),c}const ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lu=K8(ou);function j9(c){return!!c||c===""}function fu(c,e){if(c.length!==e.length)return!1;let a=!0;for(let r=0;a&&r<c.length;r++)a=k3(c[r],e[r]);return a}function k3(c,e){if(c===e)return!0;let a=E7(c),r=E7(e);if(a||r)return a&&r?c.getTime()===e.getTime():!1;if(a=H1(c),r=H1(e),a||r)return c===e;if(a=q(c),r=q(e),a||r)return a&&r?fu(c,e):!1;if(a=f2(c),r=f2(e),a||r){if(!a||!r)return!1;const s=Object.keys(c).length,n=Object.keys(e).length;if(s!==n)return!1;for(const i in c){const t=c.hasOwnProperty(i),o=e.hasOwnProperty(i);if(t&&!o||!t&&o||!k3(c[i],e[i]))return!1}}return String(c)===String(e)}function J8(c,e){return c.findIndex(a=>k3(a,e))}const W9=c=>!!(c&&c.__v_isRef===!0),T3=c=>C2(c)?c:c==null?"":q(c)||f2(c)&&(c.toString===I9||!X(c.toString))?W9(c)?T3(c.value):JSON.stringify(c,G9,2):String(c),G9=(c,e)=>W9(e)?G9(c,e.value):J3(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[r,s],n)=>(a[$0(r,n)+" =>"]=s,a),{})}:m4(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>$0(a))}:H1(e)?$0(e):f2(e)&&!q(e)&&!$9(e)?String(e):e,$0=(c,e="")=>{var a;return H1(c)?`Symbol(${(a=c.description)!=null?a:e})`:c};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Y2;class uu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Y2,!e&&Y2&&(this.index=(Y2.scopes||(Y2.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].pause();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].resume();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].resume()}}run(e){if(this._active){const a=Y2;try{return Y2=this,e()}finally{Y2=a}}}on(){Y2=this}off(){Y2=this.parent}stop(e){if(this._active){this._active=!1;let a,r;for(a=0,r=this.effects.length;a<r;a++)this.effects[a].stop();for(this.effects.length=0,a=0,r=this.cleanups.length;a<r;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,r=this.scopes.length;a<r;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mu(){return Y2}let p2;const U0=new WeakSet;class K9{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Y2&&Y2.active&&Y2.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,U0.has(this)&&(U0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||X9(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,I7(this),Q9(this);const e=p2,a=d1;p2=this,d1=!0;try{return this.fn()}finally{J9(this),p2=e,d1=a,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)e5(e);this.deps=this.depsTail=void 0,I7(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?U0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){u8(this)&&this.run()}get dirty(){return u8(this)}}let Y9=0,y4,w4;function X9(c,e=!1){if(c.flags|=8,e){c.next=w4,w4=c;return}c.next=y4,y4=c}function Z8(){Y9++}function c5(){if(--Y9>0)return;if(w4){let e=w4;for(w4=void 0;e;){const a=e.next;e.next=void 0,e.flags&=-9,e=a}}let c;for(;y4;){let e=y4;for(y4=void 0;e;){const a=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){c||(c=r)}e=a}}if(c)throw c}function Q9(c){for(let e=c.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function J9(c){let e,a=c.depsTail,r=a;for(;r;){const s=r.prevDep;r.version===-1?(r===a&&(a=s),e5(r),vu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}c.deps=e,c.depsTail=a}function u8(c){for(let e=c.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Z9(e.dep.computed)||e.dep.version!==e.version))return!0;return!!c._dirty}function Z9(c){if(c.flags&4&&!(c.flags&16)||(c.flags&=-17,c.globalVersion===R4))return;c.globalVersion=R4;const e=c.dep;if(c.flags|=2,e.version>0&&!c.isSSR&&c.deps&&!u8(c)){c.flags&=-3;return}const a=p2,r=d1;p2=c,d1=!0;try{Q9(c);const s=c.fn(c._value);(e.version===0||r3(s,c._value))&&(c._value=s,e.version++)}catch(s){throw e.version++,s}finally{p2=a,d1=r,J9(c),c.flags&=-3}}function e5(c,e=!1){const{dep:a,prevSub:r,nextSub:s}=c;if(r&&(r.nextSub=s,c.prevSub=void 0),s&&(s.prevSub=r,c.nextSub=void 0),a.subs===c&&(a.subs=r,!r&&a.computed)){a.computed.flags&=-5;for(let n=a.computed.deps;n;n=n.nextDep)e5(n,!0)}!e&&!--a.sc&&a.map&&a.map.delete(a.key)}function vu(c){const{prevDep:e,nextDep:a}=c;e&&(e.nextDep=a,c.prevDep=void 0),a&&(a.prevDep=e,c.nextDep=void 0)}let d1=!0;const ce=[];function m3(){ce.push(d1),d1=!1}function v3(){const c=ce.pop();d1=c===void 0?!0:c}function I7(c){const{cleanup:e}=c;if(c.cleanup=void 0,e){const a=p2;p2=void 0;try{e()}finally{p2=a}}}let R4=0;class pu{constructor(e,a){this.sub=e,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class a5{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!p2||!d1||p2===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==p2)a=this.activeLink=new pu(p2,this),p2.deps?(a.prevDep=p2.depsTail,p2.depsTail.nextDep=a,p2.depsTail=a):p2.deps=p2.depsTail=a,ee(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const r=a.nextDep;r.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=r),a.prevDep=p2.depsTail,a.nextDep=void 0,p2.depsTail.nextDep=a,p2.depsTail=a,p2.deps===a&&(p2.deps=r)}return a}trigger(e){this.version++,R4++,this.notify(e)}notify(e){Z8();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{c5()}}}function ee(c){if(c.dep.sc++,c.sub.flags&4){const e=c.dep.computed;if(e&&!c.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ee(r)}const a=c.dep.subs;a!==c&&(c.prevSub=a,a&&(a.nextSub=c)),c.dep.subs=c}}const m8=new WeakMap,N3=Symbol(""),v8=Symbol(""),_4=Symbol("");function T2(c,e,a){if(d1&&p2){let r=m8.get(c);r||m8.set(c,r=new Map);let s=r.get(a);s||(r.set(a,s=new a5),s.map=r,s.key=a),s.track()}}function O1(c,e,a,r,s,n){const i=m8.get(c);if(!i){R4++;return}const t=o=>{o&&o.trigger()};if(Z8(),e==="clear")i.forEach(t);else{const o=q(c),f=o&&Q8(a);if(o&&a==="length"){const l=Number(r);i.forEach((u,p)=>{(p==="length"||p===_4||!H1(p)&&p>=l)&&t(u)})}else switch((a!==void 0||i.has(void 0))&&t(i.get(a)),f&&t(i.get(_4)),e){case"add":o?f&&t(i.get("length")):(t(i.get(N3)),J3(c)&&t(i.get(v8)));break;case"delete":o||(t(i.get(N3)),J3(c)&&t(i.get(v8)));break;case"set":J3(c)&&t(i.get(N3));break}}c5()}function j3(c){const e=r2(c);return e===c?e:(T2(e,"iterate",_4),a1(c)?e:e.map(P2))}function l0(c){return T2(c=r2(c),"iterate",_4),c}const hu={__proto__:null,[Symbol.iterator](){return q0(this,Symbol.iterator,P2)},concat(...c){return j3(this).concat(...c.map(e=>q(e)?j3(e):e))},entries(){return q0(this,"entries",c=>(c[1]=P2(c[1]),c))},every(c,e){return P1(this,"every",c,e,void 0,arguments)},filter(c,e){return P1(this,"filter",c,e,a=>a.map(P2),arguments)},find(c,e){return P1(this,"find",c,e,P2,arguments)},findIndex(c,e){return P1(this,"findIndex",c,e,void 0,arguments)},findLast(c,e){return P1(this,"findLast",c,e,P2,arguments)},findLastIndex(c,e){return P1(this,"findLastIndex",c,e,void 0,arguments)},forEach(c,e){return P1(this,"forEach",c,e,void 0,arguments)},includes(...c){return j0(this,"includes",c)},indexOf(...c){return j0(this,"indexOf",c)},join(c){return j3(this).join(c)},lastIndexOf(...c){return j0(this,"lastIndexOf",c)},map(c,e){return P1(this,"map",c,e,void 0,arguments)},pop(){return H4(this,"pop")},push(...c){return H4(this,"push",c)},reduce(c,...e){return $7(this,"reduce",c,e)},reduceRight(c,...e){return $7(this,"reduceRight",c,e)},shift(){return H4(this,"shift")},some(c,e){return P1(this,"some",c,e,void 0,arguments)},splice(...c){return H4(this,"splice",c)},toReversed(){return j3(this).toReversed()},toSorted(c){return j3(this).toSorted(c)},toSpliced(...c){return j3(this).toSpliced(...c)},unshift(...c){return H4(this,"unshift",c)},values(){return q0(this,"values",P2)}};function q0(c,e,a){const r=l0(c),s=r[e]();return r!==c&&!a1(c)&&(s._next=s.next,s.next=()=>{const n=s._next();return n.value&&(n.value=a(n.value)),n}),s}const du=Array.prototype;function P1(c,e,a,r,s,n){const i=l0(c),t=i!==c&&!a1(c),o=i[e];if(o!==du[e]){const u=o.apply(c,n);return t?P2(u):u}let f=a;i!==c&&(t?f=function(u,p){return a.call(this,P2(u),p,c)}:a.length>2&&(f=function(u,p){return a.call(this,u,p,c)}));const l=o.call(i,f,r);return t&&s?s(l):l}function $7(c,e,a,r){const s=l0(c);let n=a;return s!==c&&(a1(c)?a.length>3&&(n=function(i,t,o){return a.call(this,i,t,o,c)}):n=function(i,t,o){return a.call(this,i,P2(t),o,c)}),s[e](n,...r)}function j0(c,e,a){const r=r2(c);T2(r,"iterate",_4);const s=r[e](...a);return(s===-1||s===!1)&&n5(a[0])?(a[0]=r2(a[0]),r[e](...a)):s}function H4(c,e,a=[]){m3(),Z8();const r=r2(c)[e].apply(c,a);return c5(),v3(),r}const Hu=K8("__proto__,__v_isRef,__isVue"),ae=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(H1));function zu(c){H1(c)||(c=String(c));const e=r2(this);return T2(e,"has",c),e.hasOwnProperty(c)}class re{constructor(e=!1,a=!1){this._isReadonly=e,this._isShallow=a}get(e,a,r){if(a==="__v_skip")return e.__v_skip;const s=this._isReadonly,n=this._isShallow;if(a==="__v_isReactive")return!s;if(a==="__v_isReadonly")return s;if(a==="__v_isShallow")return n;if(a==="__v_raw")return r===(s?n?Nu:te:n?ie:ne).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const i=q(e);if(!s){let o;if(i&&(o=hu[a]))return o;if(a==="hasOwnProperty")return zu}const t=Reflect.get(e,a,S2(e)?e:r);return(H1(a)?ae.has(a):Hu(a))||(s||T2(e,"get",a),n)?t:S2(t)?i&&Q8(a)?t:t.value:f2(t)?s?le(t):D1(t):t}}class se extends re{constructor(e=!1){super(!1,e)}set(e,a,r,s){let n=e[a];if(!this._isShallow){const o=P3(n);if(!a1(r)&&!P3(r)&&(n=r2(n),r=r2(r)),!q(e)&&S2(n)&&!S2(r))return o?!1:(n.value=r,!0)}const i=q(e)&&Q8(a)?Number(a)<e.length:s2(e,a),t=Reflect.set(e,a,r,S2(e)?e:s);return e===r2(s)&&(i?r3(r,n)&&O1(e,"set",a,r):O1(e,"add",a,r)),t}deleteProperty(e,a){const r=s2(e,a);e[a];const s=Reflect.deleteProperty(e,a);return s&&r&&O1(e,"delete",a,void 0),s}has(e,a){const r=Reflect.has(e,a);return(!H1(a)||!ae.has(a))&&T2(e,"has",a),r}ownKeys(e){return T2(e,"iterate",q(e)?"length":N3),Reflect.ownKeys(e)}}class Vu extends re{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Mu=new se,gu=new Vu,Cu=new se(!0),p8=c=>c,V6=c=>Reflect.getPrototypeOf(c);function Lu(c,e,a){return function(...r){const s=this.__v_raw,n=r2(s),i=J3(n),t=c==="entries"||c===Symbol.iterator&&i,o=c==="keys"&&i,f=s[c](...r),l=a?p8:e?h8:P2;return!e&&T2(n,"iterate",o?v8:N3),{next(){const{value:u,done:p}=f.next();return p?{value:u,done:p}:{value:t?[l(u[0]),l(u[1])]:l(u),done:p}},[Symbol.iterator](){return this}}}}function M6(c){return function(...e){return c==="delete"?!1:c==="clear"?void 0:this}}function bu(c,e){const a={get(s){const n=this.__v_raw,i=r2(n),t=r2(s);c||(r3(s,t)&&T2(i,"get",s),T2(i,"get",t));const{has:o}=V6(i),f=e?p8:c?h8:P2;if(o.call(i,s))return f(n.get(s));if(o.call(i,t))return f(n.get(t));n!==i&&n.get(s)},get size(){const s=this.__v_raw;return!c&&T2(r2(s),"iterate",N3),Reflect.get(s,"size",s)},has(s){const n=this.__v_raw,i=r2(n),t=r2(s);return c||(r3(s,t)&&T2(i,"has",s),T2(i,"has",t)),s===t?n.has(s):n.has(s)||n.has(t)},forEach(s,n){const i=this,t=i.__v_raw,o=r2(t),f=e?p8:c?h8:P2;return!c&&T2(o,"iterate",N3),t.forEach((l,u)=>s.call(n,f(l),f(u),i))}};return L2(a,c?{add:M6("add"),set:M6("set"),delete:M6("delete"),clear:M6("clear")}:{add(s){!e&&!a1(s)&&!P3(s)&&(s=r2(s));const n=r2(this);return V6(n).has.call(n,s)||(n.add(s),O1(n,"add",s,s)),this},set(s,n){!e&&!a1(n)&&!P3(n)&&(n=r2(n));const i=r2(this),{has:t,get:o}=V6(i);let f=t.call(i,s);f||(s=r2(s),f=t.call(i,s));const l=o.call(i,s);return i.set(s,n),f?r3(n,l)&&O1(i,"set",s,n):O1(i,"add",s,n),this},delete(s){const n=r2(this),{has:i,get:t}=V6(n);let o=i.call(n,s);o||(s=r2(s),o=i.call(n,s)),t&&t.call(n,s);const f=n.delete(s);return o&&O1(n,"delete",s,void 0),f},clear(){const s=r2(this),n=s.size!==0,i=s.clear();return n&&O1(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{a[s]=Lu(s,c,e)}),a}function r5(c,e){const a=bu(c,e);return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(s2(a,s)&&s in r?a:r,s,n)}const xu={get:r5(!1,!1)},yu={get:r5(!1,!0)},wu={get:r5(!0,!1)},ne=new WeakMap,ie=new WeakMap,te=new WeakMap,Nu=new WeakMap;function Su(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Au(c){return c.__v_skip||!Object.isExtensible(c)?0:Su(Zf(c))}function D1(c){return P3(c)?c:s5(c,!1,Mu,xu,ne)}function oe(c){return s5(c,!1,Cu,yu,ie)}function le(c){return s5(c,!0,gu,wu,te)}function s5(c,e,a,r,s){if(!f2(c)||c.__v_raw&&!(e&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=Au(c);if(i===0)return c;const t=new Proxy(c,i===2?r:a);return s.set(c,t),t}function Z3(c){return P3(c)?Z3(c.__v_raw):!!(c&&c.__v_isReactive)}function P3(c){return!!(c&&c.__v_isReadonly)}function a1(c){return!!(c&&c.__v_isShallow)}function n5(c){return c?!!c.__v_raw:!1}function r2(c){const e=c&&c.__v_raw;return e?r2(e):c}function ku(c){return!s2(c,"__v_skip")&&Object.isExtensible(c)&&q9(c,"__v_skip",!0),c}const P2=c=>f2(c)?D1(c):c,h8=c=>f2(c)?le(c):c;function S2(c){return c?c.__v_isRef===!0:!1}function o2(c){return Tu(c,!1)}function Tu(c,e){return S2(c)?c:new Pu(c,e)}class Pu{constructor(e,a){this.dep=new a5,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?e:r2(e),this._value=a?e:P2(e),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(e){const a=this._rawValue,r=this.__v_isShallow||a1(e)||P3(e);e=r?e:r2(e),r3(e,a)&&(this._rawValue=e,this._value=r?e:P2(e),this.dep.trigger())}}function r1(c){return S2(c)?c.value:c}const Fu={get:(c,e,a)=>e==="__v_raw"?c:r1(Reflect.get(c,e,a)),set:(c,e,a,r)=>{const s=c[e];return S2(s)&&!S2(a)?(s.value=a,!0):Reflect.set(c,e,a,r)}};function fe(c){return Z3(c)?c:new Proxy(c,Fu)}class Bu{constructor(e,a,r){this.fn=e,this.setter=a,this._value=void 0,this.dep=new a5(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=R4-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&p2!==this)return X9(this,!0),!0}get value(){const e=this.dep.track();return Z9(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ou(c,e,a=!1){let r,s;return X(c)?r=c:(r=c.get,s=c.set),new Bu(r,s,a)}const g6={},G6=new WeakMap;let C3;function Ru(c,e=!1,a=C3){if(a){let r=G6.get(a);r||G6.set(a,r=[]),r.push(c)}}function _u(c,e,a=l2){const{immediate:r,deep:s,once:n,scheduler:i,augmentJob:t,call:o}=a,f=V=>s?V:a1(V)||s===!1||s===0?R1(V,1):R1(V);let l,u,p,m,z=!1,H=!1;if(S2(c)?(u=()=>c.value,z=a1(c)):Z3(c)?(u=()=>f(c),z=!0):q(c)?(H=!0,z=c.some(V=>Z3(V)||a1(V)),u=()=>c.map(V=>{if(S2(V))return V.value;if(Z3(V))return f(V);if(X(V))return o?o(V,2):V()})):X(c)?e?u=o?()=>o(c,2):c:u=()=>{if(p){m3();try{p()}finally{v3()}}const V=C3;C3=l;try{return o?o(c,3,[m]):c(m)}finally{C3=V}}:u=h1,e&&s){const V=u,y=s===!0?1/0:s;u=()=>R1(V(),y)}const g=mu(),d=()=>{l.stop(),g&&g.active&&X8(g.effects,l)};if(n&&e){const V=e;e=(...y)=>{V(...y),d()}}let M=H?new Array(c.length).fill(g6):g6;const L=V=>{if(!(!(l.flags&1)||!l.dirty&&!V))if(e){const y=l.run();if(s||z||(H?y.some((b,T)=>r3(b,M[T])):r3(y,M))){p&&p();const b=C3;C3=l;try{const T=[y,M===g6?void 0:H&&M[0]===g6?[]:M,m];o?o(e,3,T):e(...T),M=y}finally{C3=b}}}else l.run()};return t&&t(L),l=new K9(u),l.scheduler=i?()=>i(L,!1):L,m=V=>Ru(V,!1,l),p=l.onStop=()=>{const V=G6.get(l);if(V){if(o)o(V,4);else for(const y of V)y();G6.delete(l)}},e?r?L(!0):M=l.run():i?i(L.bind(null,!0),!0):l.run(),d.pause=l.pause.bind(l),d.resume=l.resume.bind(l),d.stop=d,d}function R1(c,e=1/0,a){if(e<=0||!f2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),e--,S2(c))R1(c.value,e,a);else if(q(c))for(let r=0;r<c.length;r++)R1(c[r],e,a);else if(m4(c)||J3(c))c.forEach(r=>{R1(r,e,a)});else if($9(c)){for(const r in c)R1(c[r],e,a);for(const r of Object.getOwnPropertySymbols(c))Object.prototype.propertyIsEnumerable.call(c,r)&&R1(c[r],e,a)}return c}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function s6(c,e,a,r){try{return r?c(...r):c()}catch(s){f0(s,e,a)}}function z1(c,e,a,r){if(X(c)){const s=s6(c,e,a,r);return s&&D9(s)&&s.catch(n=>{f0(n,e,a)}),s}if(q(c)){const s=[];for(let n=0;n<c.length;n++)s.push(z1(c[n],e,a,r));return s}}function f0(c,e,a,r=!0){const s=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||l2;if(e){let t=e.parent;const o=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;t;){const l=t.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](c,o,f)===!1)return}t=t.parent}if(n){m3(),s6(n,null,10,[c,o,f]),v3();return}}Eu(c,a,s,r,i)}function Eu(c,e,a,r=!0,s=!1){if(s)throw c;console.error(c)}const _2=[];let L1=-1;const c4=[];let Z1=null,G3=0;const ue=Promise.resolve();let K6=null;function i5(c){const e=K6||ue;return c?e.then(this?c.bind(this):c):e}function Du(c){let e=L1+1,a=_2.length;for(;e<a;){const r=e+a>>>1,s=_2[r],n=E4(s);n<c||n===c&&s.flags&2?e=r+1:a=r}return e}function t5(c){if(!(c.flags&1)){const e=E4(c),a=_2[_2.length-1];!a||!(c.flags&2)&&e>=E4(a)?_2.push(c):_2.splice(Du(e),0,c),c.flags|=1,me()}}function me(){K6||(K6=ue.then(pe))}function Iu(c){q(c)?c4.push(...c):Z1&&c.id===-1?Z1.splice(G3+1,0,c):c.flags&1||(c4.push(c),c.flags|=1),me()}function U7(c,e,a=L1+1){for(;a<_2.length;a++){const r=_2[a];if(r&&r.flags&2){if(c&&r.id!==c.uid)continue;_2.splice(a,1),a--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ve(c){if(c4.length){const e=[...new Set(c4)].sort((a,r)=>E4(a)-E4(r));if(c4.length=0,Z1){Z1.push(...e);return}for(Z1=e,G3=0;G3<Z1.length;G3++){const a=Z1[G3];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Z1=null,G3=0}}const E4=c=>c.id==null?c.flags&2?-1:1/0:c.id;function pe(c){const e=h1;try{for(L1=0;L1<_2.length;L1++){const a=_2[L1];a&&!(a.flags&8)&&(a.flags&4&&(a.flags&=-2),s6(a,a.i,a.i?15:14),a.flags&4||(a.flags&=-2))}}finally{for(;L1<_2.length;L1++){const a=_2[L1];a&&(a.flags&=-2)}L1=-1,_2.length=0,ve(),K6=null,(_2.length||c4.length)&&pe()}}let N2=null,he=null;function Y6(c){const e=N2;return N2=c,he=c&&c.type.__scopeId||null,e}function Y(c,e=N2,a){if(!e||c._n)return c;const r=(...s)=>{r._d&&J7(-1);const n=Y6(e);let i;try{i=c(...s)}finally{Y6(n),r._d&&J7(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function X6(c,e){if(N2===null)return c;const a=d0(N2),r=c.dirs||(c.dirs=[]);for(let s=0;s<e.length;s++){let[n,i,t,o=l2]=e[s];n&&(X(n)&&(n={mounted:n,updated:n}),n.deep&&R1(i),r.push({dir:n,instance:a,value:i,oldValue:void 0,arg:t,modifiers:o}))}return c}function z3(c,e,a,r){const s=c.dirs,n=e&&e.dirs;for(let i=0;i<s.length;i++){const t=s[i];n&&(t.oldValue=n[i].value);let o=t.dir[r];o&&(m3(),z1(o,a,8,[c.el,t,c,e]),v3())}}const $u=Symbol("_vte"),de=c=>c.__isTeleport,c3=Symbol("_leaveCb"),C6=Symbol("_enterCb");function Uu(){const c={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return I1(()=>{c.isMounted=!0}),o5(()=>{c.isUnmounting=!0}),c}const e1=[Function,Array],He={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:e1,onEnter:e1,onAfterEnter:e1,onEnterCancelled:e1,onBeforeLeave:e1,onLeave:e1,onAfterLeave:e1,onLeaveCancelled:e1,onBeforeAppear:e1,onAppear:e1,onAfterAppear:e1,onAppearCancelled:e1},ze=c=>{const e=c.subTree;return e.component?ze(e.component):e},qu={name:"BaseTransition",props:He,setup(c,{slots:e}){const a=We(),r=Uu();return()=>{const s=e.default&&ge(e.default(),!0);if(!s||!s.length)return;const n=Ve(s),i=r2(c),{mode:t}=i;if(r.isLeaving)return W0(n);const o=q7(n);if(!o)return W0(n);let f=d8(o,i,r,a,u=>f=u);o.type!==E2&&D4(o,f);let l=a.subTree&&q7(a.subTree);if(l&&l.type!==E2&&!b3(o,l)&&ze(a).type!==E2){let u=d8(l,i,r,a);if(D4(l,u),t==="out-in"&&o.type!==E2)return r.isLeaving=!0,u.afterLeave=()=>{r.isLeaving=!1,a.job.flags&8||a.update(),delete u.afterLeave,l=void 0},W0(n);t==="in-out"&&o.type!==E2?u.delayLeave=(p,m,z)=>{const H=Me(r,l);H[String(l.key)]=l,p[c3]=()=>{m(),p[c3]=void 0,delete f.delayedLeave,l=void 0},f.delayedLeave=()=>{z(),delete f.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return n}}};function Ve(c){let e=c[0];if(c.length>1){for(const a of c)if(a.type!==E2){e=a;break}}return e}const ju=qu;function Me(c,e){const{leavingVNodes:a}=c;let r=a.get(e.type);return r||(r=Object.create(null),a.set(e.type,r)),r}function d8(c,e,a,r,s){const{appear:n,mode:i,persisted:t=!1,onBeforeEnter:o,onEnter:f,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:p,onLeave:m,onAfterLeave:z,onLeaveCancelled:H,onBeforeAppear:g,onAppear:d,onAfterAppear:M,onAppearCancelled:L}=e,V=String(c.key),y=Me(a,c),b=(B,U)=>{B&&z1(B,r,9,U)},T=(B,U)=>{const K=U[1];b(B,U),q(B)?B.every(P=>P.length<=1)&&K():B.length<=1&&K()},E={mode:i,persisted:t,beforeEnter(B){let U=o;if(!a.isMounted)if(n)U=g||o;else return;B[c3]&&B[c3](!0);const K=y[V];K&&b3(c,K)&&K.el[c3]&&K.el[c3](),b(U,[B])},enter(B){let U=f,K=l,P=u;if(!a.isMounted)if(n)U=d||f,K=M||l,P=L||u;else return;let W=!1;const u2=B[C6]=y2=>{W||(W=!0,y2?b(P,[B]):b(K,[B]),E.delayedLeave&&E.delayedLeave(),B[C6]=void 0)};U?T(U,[B,u2]):u2()},leave(B,U){const K=String(c.key);if(B[C6]&&B[C6](!0),a.isUnmounting)return U();b(p,[B]);let P=!1;const W=B[c3]=u2=>{P||(P=!0,U(),u2?b(H,[B]):b(z,[B]),B[c3]=void 0,y[K]===c&&delete y[K])};y[K]=c,m?T(m,[B,W]):W()},clone(B){const U=d8(B,e,a,r,s);return s&&s(U),U}};return E}function W0(c){if(u0(c))return c=n3(c),c.children=null,c}function q7(c){if(!u0(c))return de(c.type)&&c.children?Ve(c.children):c;const{shapeFlag:e,children:a}=c;if(a){if(e&16)return a[0];if(e&32&&X(a.default))return a.default()}}function D4(c,e){c.shapeFlag&6&&c.component?(c.transition=e,D4(c.component.subTree,e)):c.shapeFlag&128?(c.ssContent.transition=e.clone(c.ssContent),c.ssFallback.transition=e.clone(c.ssFallback)):c.transition=e}function ge(c,e=!1,a){let r=[],s=0;for(let n=0;n<c.length;n++){let i=c[n];const t=a==null?i.key:String(a)+String(i.key!=null?i.key:n);i.type===w2?(i.patchFlag&128&&s++,r=r.concat(ge(i.children,e,t))):(e||i.type!==E2)&&r.push(t!=null?n3(i,{key:t}):i)}if(s>1)for(let n=0;n<r.length;n++)r[n].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function z2(c,e){return X(c)?(()=>L2({name:c.name},e,{setup:c}))():c}function Ce(c){c.ids=[c.ids[0]+c.ids[2]+++"-",0,0]}function Q6(c,e,a,r,s=!1){if(q(c)){c.forEach((z,H)=>Q6(z,e&&(q(e)?e[H]:e),a,r,s));return}if(e4(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Q6(c,e,a,r.component.subTree);return}const n=r.shapeFlag&4?d0(r.component):r.el,i=s?null:n,{i:t,r:o}=c,f=e&&e.r,l=t.refs===l2?t.refs={}:t.refs,u=t.setupState,p=r2(u),m=u===l2?()=>!1:z=>s2(p,z);if(f!=null&&f!==o&&(C2(f)?(l[f]=null,m(f)&&(u[f]=null)):S2(f)&&(f.value=null)),X(o))s6(o,t,12,[i,l]);else{const z=C2(o),H=S2(o);if(z||H){const g=()=>{if(c.f){const d=z?m(o)?u[o]:l[o]:o.value;s?q(d)&&X8(d,n):q(d)?d.includes(n)||d.push(n):z?(l[o]=[n],m(o)&&(u[o]=l[o])):(o.value=[n],c.k&&(l[c.k]=o.value))}else z?(l[o]=i,m(o)&&(u[o]=i)):H&&(o.value=i,c.k&&(l[c.k]=i))};i?(g.id=-1,K2(g,a)):g()}}}a6().requestIdleCallback;a6().cancelIdleCallback;const e4=c=>!!c.type.__asyncLoader,u0=c=>c.type.__isKeepAlive;function Wu(c,e){Le(c,"a",e)}function Gu(c,e){Le(c,"da",e)}function Le(c,e,a=F2){const r=c.__wdc||(c.__wdc=()=>{let s=a;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(m0(e,r,a),a){let s=a.parent;for(;s&&s.parent;)u0(s.parent.vnode)&&Ku(r,e,a,s),s=s.parent}}function Ku(c,e,a,r){const s=m0(e,c,r,!0);n6(()=>{X8(r[e],s)},a)}function m0(c,e,a=F2,r=!1){if(a){const s=a[c]||(a[c]=[]),n=e.__weh||(e.__weh=(...i)=>{m3();const t=i6(a),o=z1(e,a,c,i);return t(),v3(),o});return r?s.unshift(n):s.push(n),n}}const W1=c=>(e,a=F2)=>{(!U4||c==="sp")&&m0(c,(...r)=>e(...r),a)},Yu=W1("bm"),I1=W1("m"),Xu=W1("bu"),Qu=W1("u"),o5=W1("bum"),n6=W1("um"),Ju=W1("sp"),Zu=W1("rtg"),cm=W1("rtc");function em(c,e=F2){m0("ec",c,e)}const am=Symbol.for("v-ndc");function be(c,e,a,r){let s;const n=a&&a[r],i=q(c);if(i||C2(c)){const t=i&&Z3(c);let o=!1;t&&(o=!a1(c),c=l0(c)),s=new Array(c.length);for(let f=0,l=c.length;f<l;f++)s[f]=e(o?P2(c[f]):c[f],f,void 0,n&&n[f])}else if(typeof c=="number"){s=new Array(c);for(let t=0;t<c;t++)s[t]=e(t+1,t,void 0,n&&n[t])}else if(f2(c))if(c[Symbol.iterator])s=Array.from(c,(t,o)=>e(t,o,void 0,n&&n[o]));else{const t=Object.keys(c);s=new Array(t.length);for(let o=0,f=t.length;o<f;o++){const l=t[o];s[o]=e(c[l],l,o,n&&n[o])}}else s=[];return a&&(a[r]=s),s}function D2(c,e,a={},r,s){if(N2.ce||N2.parent&&e4(N2.parent)&&N2.parent.ce)return e!=="default"&&(a.name=e),Q(),y1(w2,null,[_("slot",a,r&&r())],64);let n=c[e];n&&n._c&&(n._d=!1),Q();const i=n&&xe(n(a)),t=a.key||i&&i.key,o=y1(w2,{key:(t&&!H1(t)?t:`_${e}`)+(!i&&r?"_fb":"")},i||(r?r():[]),i&&c._===1?64:-2);return!s&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),n&&n._c&&(n._d=!0),o}function xe(c){return c.some(e=>$4(e)?!(e.type===E2||e.type===w2&&!xe(e.children)):!0)?c:null}function H8(c,e){const a={};for(const r in c)a[e&&/[A-Z]/.test(r)?`on:${r}`:R6(r)]=c[r];return a}const z8=c=>c?Ge(c)?d0(c):z8(c.parent):null,N4=L2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>z8(c.parent),$root:c=>z8(c.root),$host:c=>c.ce,$emit:c=>c.emit,$options:c=>l5(c),$forceUpdate:c=>c.f||(c.f=()=>{t5(c.update)}),$nextTick:c=>c.n||(c.n=i5.bind(c.proxy)),$watch:c=>ym.bind(c)}),G0=(c,e)=>c!==l2&&!c.__isScriptSetup&&s2(c,e),rm={get({_:c},e){if(e==="__v_skip")return!0;const{ctx:a,setupState:r,data:s,props:n,accessCache:i,type:t,appContext:o}=c;let f;if(e[0]!=="$"){const m=i[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return a[e];case 3:return n[e]}else{if(G0(r,e))return i[e]=1,r[e];if(s!==l2&&s2(s,e))return i[e]=2,s[e];if((f=c.propsOptions[0])&&s2(f,e))return i[e]=3,n[e];if(a!==l2&&s2(a,e))return i[e]=4,a[e];V8&&(i[e]=0)}}const l=N4[e];let u,p;if(l)return e==="$attrs"&&T2(c.attrs,"get",""),l(c);if((u=t.__cssModules)&&(u=u[e]))return u;if(a!==l2&&s2(a,e))return i[e]=4,a[e];if(p=o.config.globalProperties,s2(p,e))return p[e]},set({_:c},e,a){const{data:r,setupState:s,ctx:n}=c;return G0(s,e)?(s[e]=a,!0):r!==l2&&s2(r,e)?(r[e]=a,!0):s2(c.props,e)||e[0]==="$"&&e.slice(1)in c?!1:(n[e]=a,!0)},has({_:{data:c,setupState:e,accessCache:a,ctx:r,appContext:s,propsOptions:n}},i){let t;return!!a[i]||c!==l2&&s2(c,i)||G0(e,i)||(t=n[0])&&s2(t,i)||s2(r,i)||s2(N4,i)||s2(s.config.globalProperties,i)},defineProperty(c,e,a){return a.get!=null?c._.accessCache[e]=0:s2(a,"value")&&this.set(c,e,a.value,null),Reflect.defineProperty(c,e,a)}};function sm(){return nm().attrs}function nm(){const c=We();return c.setupContext||(c.setupContext=Ye(c))}function j7(c){return q(c)?c.reduce((e,a)=>(e[a]=null,e),{}):c}let V8=!0;function im(c){const e=l5(c),a=c.proxy,r=c.ctx;V8=!1,e.beforeCreate&&W7(e.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:t,provide:o,inject:f,created:l,beforeMount:u,mounted:p,beforeUpdate:m,updated:z,activated:H,deactivated:g,beforeDestroy:d,beforeUnmount:M,destroyed:L,unmounted:V,render:y,renderTracked:b,renderTriggered:T,errorCaptured:E,serverPrefetch:B,expose:U,inheritAttrs:K,components:P,directives:W,filters:u2}=e;if(f&&tm(f,r,null),i)for(const c2 in i){const a2=i[c2];X(a2)&&(r[c2]=a2.bind(a))}if(s){const c2=s.call(a,a);f2(c2)&&(c.data=D1(c2))}if(V8=!0,n)for(const c2 in n){const a2=n[c2],B2=X(a2)?a2.bind(a,a):X(a2.get)?a2.get.bind(a,a):h1,k1=!X(a2)&&X(a2.set)?a2.set.bind(a):h1,f1=g2({get:B2,set:k1});Object.defineProperty(r,c2,{enumerable:!0,configurable:!0,get:()=>f1.value,set:A2=>f1.value=A2})}if(t)for(const c2 in t)ye(t[c2],r,a,c2);if(o){const c2=X(o)?o.call(a):o;Reflect.ownKeys(c2).forEach(a2=>{v0(a2,c2[a2])})}l&&W7(l,c,"c");function e2(c2,a2){q(a2)?a2.forEach(B2=>c2(B2.bind(a))):a2&&c2(a2.bind(a))}if(e2(Yu,u),e2(I1,p),e2(Xu,m),e2(Qu,z),e2(Wu,H),e2(Gu,g),e2(em,E),e2(cm,b),e2(Zu,T),e2(o5,M),e2(n6,V),e2(Ju,B),q(U))if(U.length){const c2=c.exposed||(c.exposed={});U.forEach(a2=>{Object.defineProperty(c2,a2,{get:()=>a[a2],set:B2=>a[a2]=B2})})}else c.exposed||(c.exposed={});y&&c.render===h1&&(c.render=y),K!=null&&(c.inheritAttrs=K),P&&(c.components=P),W&&(c.directives=W),B&&Ce(c)}function tm(c,e,a=h1){q(c)&&(c=M8(c));for(const r in c){const s=c[r];let n;f2(s)?"default"in s?n=S3(s.from||r,s.default,!0):n=S3(s.from||r):n=S3(s),S2(n)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):e[r]=n}}function W7(c,e,a){z1(q(c)?c.map(r=>r.bind(e.proxy)):c.bind(e.proxy),e,a)}function ye(c,e,a,r){let s=r.includes(".")?De(a,r):()=>a[r];if(C2(c)){const n=e[c];X(n)&&s1(s,n)}else if(X(c))s1(s,c.bind(a));else if(f2(c))if(q(c))c.forEach(n=>ye(n,e,a,r));else{const n=X(c.handler)?c.handler.bind(a):e[c.handler];X(n)&&s1(s,n,c)}}function l5(c){const e=c.type,{mixins:a,extends:r}=e,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,t=n.get(e);let o;return t?o=t:!s.length&&!a&&!r?o=e:(o={},s.length&&s.forEach(f=>J6(o,f,i,!0)),J6(o,e,i)),f2(e)&&n.set(e,o),o}function J6(c,e,a,r=!1){const{mixins:s,extends:n}=e;n&&J6(c,n,a,!0),s&&s.forEach(i=>J6(c,i,a,!0));for(const i in e)if(!(r&&i==="expose")){const t=om[i]||a&&a[i];c[i]=t?t(c[i],e[i]):e[i]}return c}const om={data:G7,props:K7,emits:K7,methods:C4,computed:C4,beforeCreate:O2,created:O2,beforeMount:O2,mounted:O2,beforeUpdate:O2,updated:O2,beforeDestroy:O2,beforeUnmount:O2,destroyed:O2,unmounted:O2,activated:O2,deactivated:O2,errorCaptured:O2,serverPrefetch:O2,components:C4,directives:C4,watch:fm,provide:G7,inject:lm};function G7(c,e){return e?c?function(){return L2(X(c)?c.call(this,this):c,X(e)?e.call(this,this):e)}:e:c}function lm(c,e){return C4(M8(c),M8(e))}function M8(c){if(q(c)){const e={};for(let a=0;a<c.length;a++)e[c[a]]=c[a];return e}return c}function O2(c,e){return c?[...new Set([].concat(c,e))]:e}function C4(c,e){return c?L2(Object.create(null),c,e):e}function K7(c,e){return c?q(c)&&q(e)?[...new Set([...c,...e])]:L2(Object.create(null),j7(c),j7(e??{})):e}function fm(c,e){if(!c)return e;if(!e)return c;const a=L2(Object.create(null),c);for(const r in e)a[r]=O2(c[r],e[r]);return a}function we(){return{app:null,config:{isNativeTag:Qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let um=0;function mm(c,e){return function(r,s=null){X(r)||(r=L2({},r)),s!=null&&!f2(s)&&(s=null);const n=we(),i=new WeakSet,t=[];let o=!1;const f=n.app={_uid:um++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Um,get config(){return n.config},set config(l){},use(l,...u){return i.has(l)||(l&&X(l.install)?(i.add(l),l.install(f,...u)):X(l)&&(i.add(l),l(f,...u))),f},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),f},component(l,u){return u?(n.components[l]=u,f):n.components[l]},directive(l,u){return u?(n.directives[l]=u,f):n.directives[l]},mount(l,u,p){if(!o){const m=f._ceVNode||_(r,s);return m.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),u&&e?e(m,l):c(m,l,p),o=!0,f._container=l,l.__vue_app__=f,d0(m.component)}},onUnmount(l){t.push(l)},unmount(){o&&(z1(t,f._instance,16),c(null,f._container),delete f._container.__vue_app__)},provide(l,u){return n.provides[l]=u,f},runWithContext(l){const u=a4;a4=f;try{return l()}finally{a4=u}}};return f}}let a4=null;function v0(c,e){if(F2){let a=F2.provides;const r=F2.parent&&F2.parent.provides;r===a&&(a=F2.provides=Object.create(r)),a[c]=e}}function S3(c,e,a=!1){const r=F2||N2;if(r||a4){const s=a4?a4._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&c in s)return s[c];if(arguments.length>1)return a&&X(e)?e.call(r&&r.proxy):e}}const Ne={},Se=()=>Object.create(Ne),Ae=c=>Object.getPrototypeOf(c)===Ne;function vm(c,e,a,r=!1){const s={},n=Se();c.propsDefaults=Object.create(null),ke(c,e,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);a?c.props=r?s:oe(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function pm(c,e,a,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,t=r2(s),[o]=c.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=c.vnode.dynamicProps;for(let u=0;u<l.length;u++){let p=l[u];if(p0(c.emitsOptions,p))continue;const m=e[p];if(o)if(s2(n,p))m!==n[p]&&(n[p]=m,f=!0);else{const z=s3(p);s[z]=g8(o,t,z,m,c,!1)}else m!==n[p]&&(n[p]=m,f=!0)}}}else{ke(c,e,s,n)&&(f=!0);let l;for(const u in t)(!e||!s2(e,u)&&((l=u3(u))===u||!s2(e,l)))&&(o?a&&(a[u]!==void 0||a[l]!==void 0)&&(s[u]=g8(o,t,u,void 0,c,!0)):delete s[u]);if(n!==t)for(const u in n)(!e||!s2(e,u))&&(delete n[u],f=!0)}f&&O1(c.attrs,"set","")}function ke(c,e,a,r){const[s,n]=c.propsOptions;let i=!1,t;if(e)for(let o in e){if(x4(o))continue;const f=e[o];let l;s&&s2(s,l=s3(o))?!n||!n.includes(l)?a[l]=f:(t||(t={}))[l]=f:p0(c.emitsOptions,o)||(!(o in r)||f!==r[o])&&(r[o]=f,i=!0)}if(n){const o=r2(a),f=t||l2;for(let l=0;l<n.length;l++){const u=n[l];a[u]=g8(s,o,u,f[u],c,!s2(f,u))}}return i}function g8(c,e,a,r,s,n){const i=c[a];if(i!=null){const t=s2(i,"default");if(t&&r===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&X(o)){const{propsDefaults:f}=s;if(a in f)r=f[a];else{const l=i6(s);r=f[a]=o.call(null,e),l()}}else r=o;s.ce&&s.ce._setProp(a,r)}i[0]&&(n&&!t?r=!1:i[1]&&(r===""||r===u3(a))&&(r=!0))}return r}const hm=new WeakMap;function Te(c,e,a=!1){const r=a?hm:e.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},t=[];let o=!1;if(!X(c)){const l=u=>{o=!0;const[p,m]=Te(u,e,!0);L2(i,p),m&&t.push(...m)};!a&&e.mixins.length&&e.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}if(!n&&!o)return f2(c)&&r.set(c,Q3),Q3;if(q(n))for(let l=0;l<n.length;l++){const u=s3(n[l]);Y7(u)&&(i[u]=l2)}else if(n)for(const l in n){const u=s3(l);if(Y7(u)){const p=n[l],m=i[u]=q(p)||X(p)?{type:p}:L2({},p),z=m.type;let H=!1,g=!0;if(q(z))for(let d=0;d<z.length;++d){const M=z[d],L=X(M)&&M.name;if(L==="Boolean"){H=!0;break}else L==="String"&&(g=!1)}else H=X(z)&&z.name==="Boolean";m[0]=H,m[1]=g,(H||s2(m,"default"))&&t.push(u)}}const f=[i,t];return f2(c)&&r.set(c,f),f}function Y7(c){return c[0]!=="$"&&!x4(c)}const Pe=c=>c[0]==="_"||c==="$stable",f5=c=>q(c)?c.map(b1):[b1(c)],dm=(c,e,a)=>{if(e._n)return e;const r=Y((...s)=>f5(e(...s)),a);return r._c=!1,r},Fe=(c,e,a)=>{const r=c._ctx;for(const s in c){if(Pe(s))continue;const n=c[s];if(X(n))e[s]=dm(s,n,r);else if(n!=null){const i=f5(n);e[s]=()=>i}}},Be=(c,e)=>{const a=f5(e);c.slots.default=()=>a},Oe=(c,e,a)=>{for(const r in e)(a||r!=="_")&&(c[r]=e[r])},Hm=(c,e,a)=>{const r=c.slots=Se();if(c.vnode.shapeFlag&32){const s=e._;s?(Oe(r,e,a),a&&q9(r,"_",s,!0)):Fe(e,r)}else e&&Be(c,e)},zm=(c,e,a)=>{const{vnode:r,slots:s}=c;let n=!0,i=l2;if(r.shapeFlag&32){const t=e._;t?a&&t===1?n=!1:Oe(s,e,a):(n=!e.$stable,Fe(e,s)),i=e}else e&&(Be(c,e),i={default:1});if(n)for(const t in s)!Pe(t)&&i[t]==null&&delete s[t]};function Vm(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(a6().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const K2=Pm;function Mm(c){return gm(c)}function gm(c,e){Vm();const a=a6();a.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:t,createComment:o,setText:f,setElementText:l,parentNode:u,nextSibling:p,setScopeId:m=h1,insertStaticContent:z}=c,H=(v,h,C,N=null,x=null,w=null,F=void 0,A=null,k=!!h.dynamicChildren)=>{if(v===h)return;v&&!b3(v,h)&&(N=T1(v),A2(v,x,w,!0),v=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:S,ref:j,shapeFlag:O}=h;switch(S){case h0:g(v,h,C,N);break;case E2:d(v,h,C,N);break;case X0:v==null&&M(h,C,N,F);break;case w2:P(v,h,C,N,x,w,F,A,k);break;default:O&1?y(v,h,C,N,x,w,F,A,k):O&6?W(v,h,C,N,x,w,F,A,k):(O&64||O&128)&&S.process(v,h,C,N,x,w,F,A,k,X1)}j!=null&&x&&Q6(j,v&&v.ref,w,h||v,!h)},g=(v,h,C,N)=>{if(v==null)r(h.el=t(h.children),C,N);else{const x=h.el=v.el;h.children!==v.children&&f(x,h.children)}},d=(v,h,C,N)=>{v==null?r(h.el=o(h.children||""),C,N):h.el=v.el},M=(v,h,C,N)=>{[v.el,v.anchor]=z(v.children,h,C,N,v.el,v.anchor)},L=({el:v,anchor:h},C,N)=>{let x;for(;v&&v!==h;)x=p(v),r(v,C,N),v=x;r(h,C,N)},V=({el:v,anchor:h})=>{let C;for(;v&&v!==h;)C=p(v),s(v),v=C;s(h)},y=(v,h,C,N,x,w,F,A,k)=>{h.type==="svg"?F="svg":h.type==="math"&&(F="mathml"),v==null?b(h,C,N,x,w,F,A,k):B(v,h,x,w,F,A,k)},b=(v,h,C,N,x,w,F,A)=>{let k,S;const{props:j,shapeFlag:O,transition:I,dirs:G}=v;if(k=v.el=i(v.type,w,j&&j.is,j),O&8?l(k,v.children):O&16&&E(v.children,k,null,N,x,K0(v,w),F,A),G&&z3(v,null,N,"created"),T(k,v,v.scopeId,F,N),j){for(const n2 in j)n2!=="value"&&!x4(n2)&&n(k,n2,null,j[n2],w,N);"value"in j&&n(k,"value",null,j.value,w),(S=j.onVnodeBeforeMount)&&C1(S,N,v)}G&&z3(v,null,N,"beforeMount");const J=Cm(x,I);J&&I.beforeEnter(k),r(k,h,C),((S=j&&j.onVnodeMounted)||J||G)&&K2(()=>{S&&C1(S,N,v),J&&I.enter(k),G&&z3(v,null,N,"mounted")},x)},T=(v,h,C,N,x)=>{if(C&&m(v,C),N)for(let w=0;w<N.length;w++)m(v,N[w]);if(x){let w=x.subTree;if(h===w||$e(w.type)&&(w.ssContent===h||w.ssFallback===h)){const F=x.vnode;T(v,F,F.scopeId,F.slotScopeIds,x.parent)}}},E=(v,h,C,N,x,w,F,A,k=0)=>{for(let S=k;S<v.length;S++){const j=v[S]=A?e3(v[S]):b1(v[S]);H(null,j,h,C,N,x,w,F,A)}},B=(v,h,C,N,x,w,F)=>{const A=h.el=v.el;let{patchFlag:k,dynamicChildren:S,dirs:j}=h;k|=v.patchFlag&16;const O=v.props||l2,I=h.props||l2;let G;if(C&&V3(C,!1),(G=I.onVnodeBeforeUpdate)&&C1(G,C,h,v),j&&z3(h,v,C,"beforeUpdate"),C&&V3(C,!0),(O.innerHTML&&I.innerHTML==null||O.textContent&&I.textContent==null)&&l(A,""),S?U(v.dynamicChildren,S,A,C,N,K0(h,x),w):F||a2(v,h,A,null,C,N,K0(h,x),w,!1),k>0){if(k&16)K(A,O,I,C,x);else if(k&2&&O.class!==I.class&&n(A,"class",null,I.class,x),k&4&&n(A,"style",O.style,I.style,x),k&8){const J=h.dynamicProps;for(let n2=0;n2<J.length;n2++){const i2=J[n2],j2=O[i2],k2=I[i2];(k2!==j2||i2==="value")&&n(A,i2,j2,k2,x,C)}}k&1&&v.children!==h.children&&l(A,h.children)}else!F&&S==null&&K(A,O,I,C,x);((G=I.onVnodeUpdated)||j)&&K2(()=>{G&&C1(G,C,h,v),j&&z3(h,v,C,"updated")},N)},U=(v,h,C,N,x,w,F)=>{for(let A=0;A<h.length;A++){const k=v[A],S=h[A],j=k.el&&(k.type===w2||!b3(k,S)||k.shapeFlag&70)?u(k.el):C;H(k,S,j,null,N,x,w,F,!0)}},K=(v,h,C,N,x)=>{if(h!==C){if(h!==l2)for(const w in h)!x4(w)&&!(w in C)&&n(v,w,h[w],null,x,N);for(const w in C){if(x4(w))continue;const F=C[w],A=h[w];F!==A&&w!=="value"&&n(v,w,A,F,x,N)}"value"in C&&n(v,"value",h.value,C.value,x)}},P=(v,h,C,N,x,w,F,A,k)=>{const S=h.el=v?v.el:t(""),j=h.anchor=v?v.anchor:t("");let{patchFlag:O,dynamicChildren:I,slotScopeIds:G}=h;G&&(A=A?A.concat(G):G),v==null?(r(S,C,N),r(j,C,N),E(h.children||[],C,j,x,w,F,A,k)):O>0&&O&64&&I&&v.dynamicChildren?(U(v.dynamicChildren,I,C,x,w,F,A),(h.key!=null||x&&h===x.subTree)&&Re(v,h,!0)):a2(v,h,C,j,x,w,F,A,k)},W=(v,h,C,N,x,w,F,A,k)=>{h.slotScopeIds=A,v==null?h.shapeFlag&512?x.ctx.activate(h,C,N,F,k):u2(h,C,N,x,w,F,k):y2(v,h,k)},u2=(v,h,C,N,x,w,F)=>{const A=v.component=_m(v,N,x);if(u0(v)&&(A.ctx.renderer=X1),Em(A,!1,F),A.asyncDep){if(x&&x.registerDep(A,e2,F),!v.el){const k=A.subTree=_(E2);d(null,k,h,C)}}else e2(A,v,h,C,x,w,F)},y2=(v,h,C)=>{const N=h.component=v.component;if(km(v,h,C))if(N.asyncDep&&!N.asyncResolved){c2(N,h,C);return}else N.next=h,N.update();else h.el=v.el,N.vnode=h},e2=(v,h,C,N,x,w,F)=>{const A=()=>{if(v.isMounted){let{next:O,bu:I,u:G,parent:J,vnode:n2}=v;{const W2=_e(v);if(W2){O&&(O.el=n2.el,c2(v,O,F)),W2.asyncDep.then(()=>{v.isUnmounted||A()});return}}let i2=O,j2;V3(v,!1),O?(O.el=n2.el,c2(v,O,F)):O=n2,I&&_6(I),(j2=O.props&&O.props.onVnodeBeforeUpdate)&&C1(j2,J,O,n2),V3(v,!0);const k2=Y0(v),v1=v.subTree;v.subTree=k2,H(v1,k2,u(v1.el),T1(v1),v,x,w),O.el=k2.el,i2===null&&Tm(v,k2.el),G&&K2(G,x),(j2=O.props&&O.props.onVnodeUpdated)&&K2(()=>C1(j2,J,O,n2),x)}else{let O;const{el:I,props:G}=h,{bm:J,m:n2,parent:i2,root:j2,type:k2}=v,v1=e4(h);if(V3(v,!1),J&&_6(J),!v1&&(O=G&&G.onVnodeBeforeMount)&&C1(O,i2,h),V3(v,!0),I&&h4){const W2=()=>{v.subTree=Y0(v),h4(I,v.subTree,v,x,null)};v1&&k2.__asyncHydrate?k2.__asyncHydrate(I,v,W2):W2()}else{j2.ce&&j2.ce._injectChildStyle(k2);const W2=v.subTree=Y0(v);H(null,W2,C,N,v,x,w),h.el=W2.el}if(n2&&K2(n2,x),!v1&&(O=G&&G.onVnodeMounted)){const W2=h;K2(()=>C1(O,i2,W2),x)}(h.shapeFlag&256||i2&&e4(i2.vnode)&&i2.vnode.shapeFlag&256)&&v.a&&K2(v.a,x),v.isMounted=!0,h=C=N=null}};v.scope.on();const k=v.effect=new K9(A);v.scope.off();const S=v.update=k.run.bind(k),j=v.job=k.runIfDirty.bind(k);j.i=v,j.id=v.uid,k.scheduler=()=>t5(j),V3(v,!0),S()},c2=(v,h,C)=>{h.component=v;const N=v.vnode.props;v.vnode=h,v.next=null,pm(v,h.props,N,C),zm(v,h.children,C),m3(),U7(v),v3()},a2=(v,h,C,N,x,w,F,A,k=!1)=>{const S=v&&v.children,j=v?v.shapeFlag:0,O=h.children,{patchFlag:I,shapeFlag:G}=h;if(I>0){if(I&128){k1(S,O,C,N,x,w,F,A,k);return}else if(I&256){B2(S,O,C,N,x,w,F,A,k);return}}G&8?(j&16&&u1(S,x,w),O!==S&&l(C,O)):j&16?G&16?k1(S,O,C,N,x,w,F,A,k):u1(S,x,w,!0):(j&8&&l(C,""),G&16&&E(O,C,N,x,w,F,A,k))},B2=(v,h,C,N,x,w,F,A,k)=>{v=v||Q3,h=h||Q3;const S=v.length,j=h.length,O=Math.min(S,j);let I;for(I=0;I<O;I++){const G=h[I]=k?e3(h[I]):b1(h[I]);H(v[I],G,C,null,x,w,F,A,k)}S>j?u1(v,x,w,!0,!1,O):E(h,C,N,x,w,F,A,k,O)},k1=(v,h,C,N,x,w,F,A,k)=>{let S=0;const j=h.length;let O=v.length-1,I=j-1;for(;S<=O&&S<=I;){const G=v[S],J=h[S]=k?e3(h[S]):b1(h[S]);if(b3(G,J))H(G,J,C,null,x,w,F,A,k);else break;S++}for(;S<=O&&S<=I;){const G=v[O],J=h[I]=k?e3(h[I]):b1(h[I]);if(b3(G,J))H(G,J,C,null,x,w,F,A,k);else break;O--,I--}if(S>O){if(S<=I){const G=I+1,J=G<j?h[G].el:N;for(;S<=I;)H(null,h[S]=k?e3(h[S]):b1(h[S]),C,J,x,w,F,A,k),S++}}else if(S>I)for(;S<=O;)A2(v[S],x,w,!0),S++;else{const G=S,J=S,n2=new Map;for(S=J;S<=I;S++){const G2=h[S]=k?e3(h[S]):b1(h[S]);G2.key!=null&&n2.set(G2.key,S)}let i2,j2=0;const k2=I-J+1;let v1=!1,W2=0;const d4=new Array(k2);for(S=0;S<k2;S++)d4[S]=0;for(S=G;S<=O;S++){const G2=v[S];if(j2>=k2){A2(G2,x,w,!0);continue}let g1;if(G2.key!=null)g1=n2.get(G2.key);else for(i2=J;i2<=I;i2++)if(d4[i2-J]===0&&b3(G2,h[i2])){g1=i2;break}g1===void 0?A2(G2,x,w,!0):(d4[g1-J]=S+1,g1>=W2?W2=g1:v1=!0,H(G2,h[g1],C,null,x,w,F,A,k),j2++)}const R7=v1?Lm(d4):Q3;for(i2=R7.length-1,S=k2-1;S>=0;S--){const G2=J+S,g1=h[G2],_7=G2+1<j?h[G2+1].el:N;d4[S]===0?H(null,g1,C,_7,x,w,F,A,k):v1&&(i2<0||S!==R7[i2]?f1(g1,C,_7,2):i2--)}}},f1=(v,h,C,N,x=null)=>{const{el:w,type:F,transition:A,children:k,shapeFlag:S}=v;if(S&6){f1(v.component.subTree,h,C,N);return}if(S&128){v.suspense.move(h,C,N);return}if(S&64){F.move(v,h,C,X1);return}if(F===w2){r(w,h,C);for(let O=0;O<k.length;O++)f1(k[O],h,C,N);r(v.anchor,h,C);return}if(F===X0){L(v,h,C);return}if(N!==2&&S&1&&A)if(N===0)A.beforeEnter(w),r(w,h,C),K2(()=>A.enter(w),x);else{const{leave:O,delayLeave:I,afterLeave:G}=A,J=()=>r(w,h,C),n2=()=>{O(w,()=>{J(),G&&G()})};I?I(w,J,n2):n2()}else r(w,h,C)},A2=(v,h,C,N=!1,x=!1)=>{const{type:w,props:F,ref:A,children:k,dynamicChildren:S,shapeFlag:j,patchFlag:O,dirs:I,cacheIndex:G}=v;if(O===-2&&(x=!1),A!=null&&Q6(A,null,C,v,!0),G!=null&&(h.renderCache[G]=void 0),j&256){h.ctx.deactivate(v);return}const J=j&1&&I,n2=!e4(v);let i2;if(n2&&(i2=F&&F.onVnodeBeforeUnmount)&&C1(i2,h,v),j&6)M1(v.component,C,N);else{if(j&128){v.suspense.unmount(C,N);return}J&&z3(v,null,h,"beforeUnmount"),j&64?v.type.remove(v,h,C,X1,N):S&&!S.hasOnce&&(w!==w2||O>0&&O&64)?u1(S,h,C,!1,!0):(w===w2&&O&384||!x&&j&16)&&u1(k,h,C),N&&d3(v)}(n2&&(i2=F&&F.onVnodeUnmounted)||J)&&K2(()=>{i2&&C1(i2,h,v),J&&z3(v,null,h,"unmounted")},C)},d3=v=>{const{type:h,el:C,anchor:N,transition:x}=v;if(h===w2){Y1(C,N);return}if(h===X0){V(v);return}const w=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:F,delayLeave:A}=x,k=()=>F(C,w);A?A(v.el,w,k):k()}else w()},Y1=(v,h)=>{let C;for(;v!==h;)C=p(v),s(v),v=C;s(h)},M1=(v,h,C)=>{const{bum:N,scope:x,job:w,subTree:F,um:A,m:k,a:S}=v;X7(k),X7(S),N&&_6(N),x.stop(),w&&(w.flags|=8,A2(F,v,h,C)),A&&K2(A,h),K2(()=>{v.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},u1=(v,h,C,N=!1,x=!1,w=0)=>{for(let F=w;F<v.length;F++)A2(v[F],h,C,N,x)},T1=v=>{if(v.shapeFlag&6)return T1(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const h=p(v.anchor||v.el),C=h&&h[$u];return C?p(C):h};let m1=!1;const q3=(v,h,C)=>{v==null?h._vnode&&A2(h._vnode,null,null,!0):H(h._vnode||null,v,h,null,null,null,C),h._vnode=v,m1||(m1=!0,U7(),ve(),m1=!1)},X1={p:H,um:A2,m:f1,r:d3,mt:u2,mc:E,pc:a2,pbc:U,n:T1,o:c};let H3,h4;return e&&([H3,h4]=e(X1)),{render:q3,hydrate:H3,createApp:mm(q3,H3)}}function K0({type:c,props:e},a){return a==="svg"&&c==="foreignObject"||a==="mathml"&&c==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:a}function V3({effect:c,job:e},a){a?(c.flags|=32,e.flags|=4):(c.flags&=-33,e.flags&=-5)}function Cm(c,e){return(!c||c&&!c.pendingBranch)&&e&&!e.persisted}function Re(c,e,a=!1){const r=c.children,s=e.children;if(q(r)&&q(s))for(let n=0;n<r.length;n++){const i=r[n];let t=s[n];t.shapeFlag&1&&!t.dynamicChildren&&((t.patchFlag<=0||t.patchFlag===32)&&(t=s[n]=e3(s[n]),t.el=i.el),!a&&t.patchFlag!==-2&&Re(i,t)),t.type===h0&&(t.el=i.el)}}function Lm(c){const e=c.slice(),a=[0];let r,s,n,i,t;const o=c.length;for(r=0;r<o;r++){const f=c[r];if(f!==0){if(s=a[a.length-1],c[s]<f){e[r]=s,a.push(r);continue}for(n=0,i=a.length-1;n<i;)t=n+i>>1,c[a[t]]<f?n=t+1:i=t;f<c[a[n]]&&(n>0&&(e[r]=a[n-1]),a[n]=r)}}for(n=a.length,i=a[n-1];n-- >0;)a[n]=i,i=e[i];return a}function _e(c){const e=c.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_e(e)}function X7(c){if(c)for(let e=0;e<c.length;e++)c[e].flags|=8}const bm=Symbol.for("v-scx"),xm=()=>S3(bm);function s1(c,e,a){return Ee(c,e,a)}function Ee(c,e,a=l2){const{immediate:r,deep:s,flush:n,once:i}=a,t=L2({},a),o=e&&r||!e&&n!=="post";let f;if(U4){if(n==="sync"){const m=xm();f=m.__watcherHandles||(m.__watcherHandles=[])}else if(!o){const m=()=>{};return m.stop=h1,m.resume=h1,m.pause=h1,m}}const l=F2;t.call=(m,z,H)=>z1(m,l,z,H);let u=!1;n==="post"?t.scheduler=m=>{K2(m,l&&l.suspense)}:n!=="sync"&&(u=!0,t.scheduler=(m,z)=>{z?m():t5(m)}),t.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,l&&(m.id=l.uid,m.i=l))};const p=_u(c,e,t);return U4&&(f?f.push(p):o&&p()),p}function ym(c,e,a){const r=this.proxy,s=C2(c)?c.includes(".")?De(r,c):()=>r[c]:c.bind(r,r);let n;X(e)?n=e:(n=e.handler,a=e);const i=i6(this),t=Ee(s,n.bind(r),a);return i(),t}function De(c,e){const a=e.split(".");return()=>{let r=c;for(let s=0;s<a.length&&r;s++)r=r[a[s]];return r}}const wm=(c,e)=>e==="modelValue"||e==="model-value"?c.modelModifiers:c[`${e}Modifiers`]||c[`${s3(e)}Modifiers`]||c[`${u3(e)}Modifiers`];function Nm(c,e,...a){if(c.isUnmounted)return;const r=c.vnode.props||l2;let s=a;const n=e.startsWith("update:"),i=n&&wm(r,e.slice(7));i&&(i.trim&&(s=a.map(l=>C2(l)?l.trim():l)),i.number&&(s=a.map(W6)));let t,o=r[t=R6(e)]||r[t=R6(s3(e))];!o&&n&&(o=r[t=R6(u3(e))]),o&&z1(o,c,6,s);const f=r[t+"Once"];if(f){if(!c.emitted)c.emitted={};else if(c.emitted[t])return;c.emitted[t]=!0,z1(f,c,6,s)}}function Ie(c,e,a=!1){const r=e.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},t=!1;if(!X(c)){const o=f=>{const l=Ie(f,e,!0);l&&(t=!0,L2(i,l))};!a&&e.mixins.length&&e.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}return!n&&!t?(f2(c)&&r.set(c,null),null):(q(n)?n.forEach(o=>i[o]=null):L2(i,n),f2(c)&&r.set(c,i),i)}function p0(c,e){return!c||!t0(e)?!1:(e=e.slice(2).replace(/Once$/,""),s2(c,e[0].toLowerCase()+e.slice(1))||s2(c,u3(e))||s2(c,e))}function Y0(c){const{type:e,vnode:a,proxy:r,withProxy:s,propsOptions:[n],slots:i,attrs:t,emit:o,render:f,renderCache:l,props:u,data:p,setupState:m,ctx:z,inheritAttrs:H}=c,g=Y6(c);let d,M;try{if(a.shapeFlag&4){const V=s||r,y=V;d=b1(f.call(y,V,l,u,m,p,z)),M=t}else{const V=e;d=b1(V.length>1?V(u,{attrs:t,slots:i,emit:o}):V(u,null)),M=e.props?t:Sm(t)}}catch(V){S4.length=0,f0(V,c,1),d=_(E2)}let L=d;if(M&&H!==!1){const V=Object.keys(M),{shapeFlag:y}=L;V.length&&y&7&&(n&&V.some(Y8)&&(M=Am(M,n)),L=n3(L,M,!1,!0))}return a.dirs&&(L=n3(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(a.dirs):a.dirs),a.transition&&D4(L,a.transition),d=L,Y6(g),d}const Sm=c=>{let e;for(const a in c)(a==="class"||a==="style"||t0(a))&&((e||(e={}))[a]=c[a]);return e},Am=(c,e)=>{const a={};for(const r in c)(!Y8(r)||!(r.slice(9)in e))&&(a[r]=c[r]);return a};function km(c,e,a){const{props:r,children:s,component:n}=c,{props:i,children:t,patchFlag:o}=e,f=n.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return r?Q7(r,i,f):!!i;if(o&8){const l=e.dynamicProps;for(let u=0;u<l.length;u++){const p=l[u];if(i[p]!==r[p]&&!p0(f,p))return!0}}}else return(s||t)&&(!t||!t.$stable)?!0:r===i?!1:r?i?Q7(r,i,f):!0:!!i;return!1}function Q7(c,e,a){const r=Object.keys(e);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(e[n]!==c[n]&&!p0(a,n))return!0}return!1}function Tm({vnode:c,parent:e},a){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=e.vnode).el=a,e=e.parent;else break}}const $e=c=>c.__isSuspense;function Pm(c,e){e&&e.pendingBranch?q(c)?e.effects.push(...c):e.effects.push(c):Iu(c)}const w2=Symbol.for("v-fgt"),h0=Symbol.for("v-txt"),E2=Symbol.for("v-cmt"),X0=Symbol.for("v-stc"),S4=[];let X2=null;function Q(c=!1){S4.push(X2=c?null:[])}function Fm(){S4.pop(),X2=S4[S4.length-1]||null}let I4=1;function J7(c,e=!1){I4+=c,c<0&&X2&&e&&(X2.hasOnce=!0)}function Ue(c){return c.dynamicChildren=I4>0?X2||Q3:null,Fm(),I4>0&&X2&&X2.push(c),c}function t2(c,e,a,r,s,n){return Ue($(c,e,a,r,s,n,!0))}function y1(c,e,a,r,s){return Ue(_(c,e,a,r,s,!0))}function $4(c){return c?c.__v_isVNode===!0:!1}function b3(c,e){return c.type===e.type&&c.key===e.key}const qe=({key:c})=>c??null,E6=({ref:c,ref_key:e,ref_for:a})=>(typeof c=="number"&&(c=""+c),c!=null?C2(c)||S2(c)||X(c)?{i:N2,r:c,k:e,f:!!a}:c:null);function $(c,e=null,a=null,r=0,s=null,n=c===w2?0:1,i=!1,t=!1){const o={__v_isVNode:!0,__v_skip:!0,type:c,props:e,key:e&&qe(e),ref:e&&E6(e),scopeId:he,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:N2};return t?(u5(o,a),n&128&&c.normalize(o)):a&&(o.shapeFlag|=C2(a)?8:16),I4>0&&!i&&X2&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&X2.push(o),o}const _=Bm;function Bm(c,e=null,a=null,r=0,s=null,n=!1){if((!c||c===am)&&(c=E2),$4(c)){const t=n3(c,e,!0);return a&&u5(t,a),I4>0&&!n&&X2&&(t.shapeFlag&6?X2[X2.indexOf(c)]=t:X2.push(t)),t.patchFlag=-2,t}if($m(c)&&(c=c.__vccOpts),e){e=je(e);let{class:t,style:o}=e;t&&!C2(t)&&(e.class=I2(t)),f2(o)&&(n5(o)&&!q(o)&&(o=L2({},o)),e.style=r6(o))}const i=C2(c)?1:$e(c)?128:de(c)?64:f2(c)?4:X(c)?2:0;return $(c,e,a,r,s,i,n,!0)}function je(c){return c?n5(c)||Ae(c)?L2({},c):c:null}function n3(c,e,a=!1,r=!1){const{props:s,ref:n,patchFlag:i,children:t,transition:o}=c,f=e?F3(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&qe(f),ref:e&&e.ref?a&&n?q(n)?n.concat(E6(e)):[n,E6(e)]:E6(e):n,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:t,target:c.target,targetStart:c.targetStart,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:e&&c.type!==w2?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:o,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&n3(c.ssContent),ssFallback:c.ssFallback&&n3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce};return o&&r&&D4(l,o.clone(l)),l}function v2(c=" ",e=0){return _(h0,null,c,e)}function R2(c="",e=!1){return e?(Q(),y1(E2,null,c)):_(E2,null,c)}function b1(c){return c==null||typeof c=="boolean"?_(E2):q(c)?_(w2,null,c.slice()):$4(c)?e3(c):_(h0,null,String(c))}function e3(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:n3(c)}function u5(c,e){let a=0;const{shapeFlag:r}=c;if(e==null)e=null;else if(q(e))a=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),u5(c,s()),s._c&&(s._d=!0));return}else{a=32;const s=e._;!s&&!Ae(e)?e._ctx=N2:s===3&&N2&&(N2.slots._===1?e._=1:(e._=2,c.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:N2},a=32):(e=String(e),r&64?(a=16,e=[v2(e)]):a=8);c.children=e,c.shapeFlag|=a}function F3(...c){const e={};for(let a=0;a<c.length;a++){const r=c[a];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=I2([e.class,r.class]));else if(s==="style")e.style=r6([e.style,r.style]);else if(t0(s)){const n=e[s],i=r[s];i&&n!==i&&!(q(n)&&n.includes(i))&&(e[s]=n?[].concat(n,i):i)}else s!==""&&(e[s]=r[s])}return e}function C1(c,e,a,r=null){z1(c,e,7,[a,r])}const Om=we();let Rm=0;function _m(c,e,a){const r=c.type,s=(e?e.appContext:c.appContext)||Om,n={uid:Rm++,vnode:c,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new uu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Te(r,s),emitsOptions:Ie(r,s),emit:null,emitted:null,propsDefaults:l2,inheritAttrs:r.inheritAttrs,ctx:l2,data:l2,props:l2,attrs:l2,slots:l2,refs:l2,setupState:l2,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=Nm.bind(null,n),c.ce&&c.ce(n),n}let F2=null;const We=()=>F2||N2;let Z6,C8;{const c=a6(),e=(a,r)=>{let s;return(s=c[a])||(s=c[a]=[]),s.push(r),n=>{s.length>1?s.forEach(i=>i(n)):s[0](n)}};Z6=e("__VUE_INSTANCE_SETTERS__",a=>F2=a),C8=e("__VUE_SSR_SETTERS__",a=>U4=a)}const i6=c=>{const e=F2;return Z6(c),c.scope.on(),()=>{c.scope.off(),Z6(e)}},Z7=()=>{F2&&F2.scope.off(),Z6(null)};function Ge(c){return c.vnode.shapeFlag&4}let U4=!1;function Em(c,e=!1,a=!1){e&&C8(e);const{props:r,children:s}=c.vnode,n=Ge(c);vm(c,r,n,e),Hm(c,s,a);const i=n?Dm(c,e):void 0;return e&&C8(!1),i}function Dm(c,e){const a=c.type;c.accessCache=Object.create(null),c.proxy=new Proxy(c.ctx,rm);const{setup:r}=a;if(r){m3();const s=c.setupContext=r.length>1?Ye(c):null,n=i6(c),i=s6(r,c,0,[c.props,s]),t=D9(i);if(v3(),n(),(t||c.sp)&&!e4(c)&&Ce(c),t){if(i.then(Z7,Z7),e)return i.then(o=>{cc(c,o,e)}).catch(o=>{f0(o,c,0)});c.asyncDep=i}else cc(c,i,e)}else Ke(c,e)}function cc(c,e,a){X(e)?c.type.__ssrInlineRender?c.ssrRender=e:c.render=e:f2(e)&&(c.setupState=fe(e)),Ke(c,a)}let ec;function Ke(c,e,a){const r=c.type;if(!c.render){if(!e&&ec&&!r.render){const s=r.template||l5(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:t,compilerOptions:o}=r,f=L2(L2({isCustomElement:n,delimiters:t},i),o);r.render=ec(s,f)}}c.render=r.render||h1}{const s=i6(c);m3();try{im(c)}finally{v3(),s()}}}const Im={get(c,e){return T2(c,"get",""),c[e]}};function Ye(c){const e=a=>{c.exposed=a||{}};return{attrs:new Proxy(c.attrs,Im),slots:c.slots,emit:c.emit,expose:e}}function d0(c){return c.exposed?c.exposeProxy||(c.exposeProxy=new Proxy(fe(ku(c.exposed)),{get(e,a){if(a in e)return e[a];if(a in N4)return N4[a](c)},has(e,a){return a in e||a in N4}})):c.proxy}function $m(c){return X(c)&&"__vccOpts"in c}const g2=(c,e)=>Ou(c,e,U4);function H0(c,e,a){const r=arguments.length;return r===2?f2(e)&&!q(e)?$4(e)?_(c,null,[e]):_(c,e):_(c,null,e):(r>3?a=Array.prototype.slice.call(arguments,2):r===3&&$4(a)&&(a=[a]),_(c,e,a))}const Um="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let L8;const ac=typeof window<"u"&&window.trustedTypes;if(ac)try{L8=ac.createPolicy("vue",{createHTML:c=>c})}catch{}const Xe=L8?c=>L8.createHTML(c):c=>c,qm="http://www.w3.org/2000/svg",jm="http://www.w3.org/1998/Math/MathML",B1=typeof document<"u"?document:null,rc=B1&&B1.createElement("template"),Wm={insert:(c,e,a)=>{e.insertBefore(c,a||null)},remove:c=>{const e=c.parentNode;e&&e.removeChild(c)},createElement:(c,e,a,r)=>{const s=e==="svg"?B1.createElementNS(qm,c):e==="mathml"?B1.createElementNS(jm,c):a?B1.createElement(c,{is:a}):B1.createElement(c);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>B1.createTextNode(c),createComment:c=>B1.createComment(c),setText:(c,e)=>{c.nodeValue=e},setElementText:(c,e)=>{c.textContent=e},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>B1.querySelector(c),setScopeId(c,e){c.setAttribute(e,"")},insertStaticContent(c,e,a,r,s,n){const i=a?a.previousSibling:e.lastChild;if(s&&(s===n||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),a),!(s===n||!(s=s.nextSibling)););else{rc.innerHTML=Xe(r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c);const t=rc.content;if(r==="svg"||r==="mathml"){const o=t.firstChild;for(;o.firstChild;)t.appendChild(o.firstChild);t.removeChild(o)}e.insertBefore(t,a)}return[i?i.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},Q1="transition",z4="animation",q4=Symbol("_vtc"),Qe={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gm=L2({},He,Qe),Km=c=>(c.displayName="Transition",c.props=Gm,c),m5=Km((c,{slots:e})=>H0(ju,Ym(c),e)),M3=(c,e=[])=>{q(c)?c.forEach(a=>a(...e)):c&&c(...e)},sc=c=>c?q(c)?c.some(e=>e.length>1):c.length>1:!1;function Ym(c){const e={};for(const P in c)P in Qe||(e[P]=c[P]);if(c.css===!1)return e;const{name:a="v",type:r,duration:s,enterFromClass:n=`${a}-enter-from`,enterActiveClass:i=`${a}-enter-active`,enterToClass:t=`${a}-enter-to`,appearFromClass:o=n,appearActiveClass:f=i,appearToClass:l=t,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:m=`${a}-leave-to`}=c,z=Xm(s),H=z&&z[0],g=z&&z[1],{onBeforeEnter:d,onEnter:M,onEnterCancelled:L,onLeave:V,onLeaveCancelled:y,onBeforeAppear:b=d,onAppear:T=M,onAppearCancelled:E=L}=e,B=(P,W,u2,y2)=>{P._enterCancelled=y2,g3(P,W?l:t),g3(P,W?f:i),u2&&u2()},U=(P,W)=>{P._isLeaving=!1,g3(P,u),g3(P,m),g3(P,p),W&&W()},K=P=>(W,u2)=>{const y2=P?T:M,e2=()=>B(W,P,u2);M3(y2,[W,e2]),nc(()=>{g3(W,P?o:n),F1(W,P?l:t),sc(y2)||ic(W,r,H,e2)})};return L2(e,{onBeforeEnter(P){M3(d,[P]),F1(P,n),F1(P,i)},onBeforeAppear(P){M3(b,[P]),F1(P,o),F1(P,f)},onEnter:K(!1),onAppear:K(!0),onLeave(P,W){P._isLeaving=!0;const u2=()=>U(P,W);F1(P,u),P._enterCancelled?(F1(P,p),lc()):(lc(),F1(P,p)),nc(()=>{P._isLeaving&&(g3(P,u),F1(P,m),sc(V)||ic(P,r,g,u2))}),M3(V,[P,u2])},onEnterCancelled(P){B(P,!1,void 0,!0),M3(L,[P])},onAppearCancelled(P){B(P,!0,void 0,!0),M3(E,[P])},onLeaveCancelled(P){U(P),M3(y,[P])}})}function Xm(c){if(c==null)return null;if(f2(c))return[Q0(c.enter),Q0(c.leave)];{const e=Q0(c);return[e,e]}}function Q0(c){return au(c)}function F1(c,e){e.split(/\s+/).forEach(a=>a&&c.classList.add(a)),(c[q4]||(c[q4]=new Set)).add(e)}function g3(c,e){e.split(/\s+/).forEach(r=>r&&c.classList.remove(r));const a=c[q4];a&&(a.delete(e),a.size||(c[q4]=void 0))}function nc(c){requestAnimationFrame(()=>{requestAnimationFrame(c)})}let Qm=0;function ic(c,e,a,r){const s=c._endId=++Qm,n=()=>{s===c._endId&&r()};if(a!=null)return setTimeout(n,a);const{type:i,timeout:t,propCount:o}=Jm(c,e);if(!i)return r();const f=i+"end";let l=0;const u=()=>{c.removeEventListener(f,p),n()},p=m=>{m.target===c&&++l>=o&&u()};setTimeout(()=>{l<o&&u()},t+1),c.addEventListener(f,p)}function Jm(c,e){const a=window.getComputedStyle(c),r=z=>(a[z]||"").split(", "),s=r(`${Q1}Delay`),n=r(`${Q1}Duration`),i=tc(s,n),t=r(`${z4}Delay`),o=r(`${z4}Duration`),f=tc(t,o);let l=null,u=0,p=0;e===Q1?i>0&&(l=Q1,u=i,p=n.length):e===z4?f>0&&(l=z4,u=f,p=o.length):(u=Math.max(i,f),l=u>0?i>f?Q1:z4:null,p=l?l===Q1?n.length:o.length:0);const m=l===Q1&&/\b(transform|all)(,|$)/.test(r(`${Q1}Property`).toString());return{type:l,timeout:u,propCount:p,hasTransform:m}}function tc(c,e){for(;c.length<e.length;)c=c.concat(c);return Math.max(...e.map((a,r)=>oc(a)+oc(c[r])))}function oc(c){return c==="auto"?0:Number(c.slice(0,-1).replace(",","."))*1e3}function lc(){return document.body.offsetHeight}function Zm(c,e,a){const r=c[q4];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?c.removeAttribute("class"):a?c.setAttribute("class",e):c.className=e}const c0=Symbol("_vod"),Je=Symbol("_vsh"),Ze={beforeMount(c,{value:e},{transition:a}){c[c0]=c.style.display==="none"?"":c.style.display,a&&e?a.beforeEnter(c):V4(c,e)},mounted(c,{value:e},{transition:a}){a&&e&&a.enter(c)},updated(c,{value:e,oldValue:a},{transition:r}){!e!=!a&&(r?e?(r.beforeEnter(c),V4(c,!0),r.enter(c)):r.leave(c,()=>{V4(c,!1)}):V4(c,e))},beforeUnmount(c,{value:e}){V4(c,e)}};function V4(c,e){c.style.display=e?c[c0]:"none",c[Je]=!e}const cv=Symbol(""),ev=/(^|;)\s*display\s*:/;function av(c,e,a){const r=c.style,s=C2(a);let n=!1;if(a&&!s){if(e)if(C2(e))for(const i of e.split(";")){const t=i.slice(0,i.indexOf(":")).trim();a[t]==null&&D6(r,t,"")}else for(const i in e)a[i]==null&&D6(r,i,"");for(const i in a)i==="display"&&(n=!0),D6(r,i,a[i])}else if(s){if(e!==a){const i=r[cv];i&&(a+=";"+i),r.cssText=a,n=ev.test(a)}}else e&&c.removeAttribute("style");c0 in c&&(c[c0]=n?r.display:"",c[Je]&&(r.display="none"))}const fc=/\s*!important$/;function D6(c,e,a){if(q(a))a.forEach(r=>D6(c,e,r));else if(a==null&&(a=""),e.startsWith("--"))c.setProperty(e,a);else{const r=rv(c,e);fc.test(a)?c.setProperty(u3(r),a.replace(fc,""),"important"):c[r]=a}}const uc=["Webkit","Moz","ms"],J0={};function rv(c,e){const a=J0[e];if(a)return a;let r=s3(e);if(r!=="filter"&&r in c)return J0[e]=r;r=U9(r);for(let s=0;s<uc.length;s++){const n=uc[s]+r;if(n in c)return J0[e]=n}return e}const mc="http://www.w3.org/1999/xlink";function vc(c,e,a,r,s,n=lu(e)){r&&e.startsWith("xlink:")?a==null?c.removeAttributeNS(mc,e.slice(6,e.length)):c.setAttributeNS(mc,e,a):a==null||n&&!j9(a)?c.removeAttribute(e):c.setAttribute(e,n?"":H1(a)?String(a):a)}function pc(c,e,a,r,s){if(e==="innerHTML"||e==="textContent"){a!=null&&(c[e]=e==="innerHTML"?Xe(a):a);return}const n=c.tagName;if(e==="value"&&n!=="PROGRESS"&&!n.includes("-")){const t=n==="OPTION"?c.getAttribute("value")||"":c.value,o=a==null?c.type==="checkbox"?"on":"":String(a);(t!==o||!("_value"in c))&&(c.value=o),a==null&&c.removeAttribute(e),c._value=a;return}let i=!1;if(a===""||a==null){const t=typeof c[e];t==="boolean"?a=j9(a):a==null&&t==="string"?(a="",i=!0):t==="number"&&(a=0,i=!0)}try{c[e]=a}catch{}i&&c.removeAttribute(s||e)}function _1(c,e,a,r){c.addEventListener(e,a,r)}function sv(c,e,a,r){c.removeEventListener(e,a,r)}const hc=Symbol("_vei");function nv(c,e,a,r,s=null){const n=c[hc]||(c[hc]={}),i=n[e];if(r&&i)i.value=r;else{const[t,o]=iv(e);if(r){const f=n[e]=lv(r,s);_1(c,t,f,o)}else i&&(sv(c,t,i,o),n[e]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function iv(c){let e;if(dc.test(c)){e={};let r;for(;r=c.match(dc);)c=c.slice(0,c.length-r[0].length),e[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):u3(c.slice(2)),e]}let Z0=0;const tv=Promise.resolve(),ov=()=>Z0||(tv.then(()=>Z0=0),Z0=Date.now());function lv(c,e){const a=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=a.attached)return;z1(fv(r,a.value),e,5,[r])};return a.value=c,a.attached=ov(),a}function fv(c,e){if(q(e)){const a=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{a.call(c),c._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hc=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,uv=(c,e,a,r,s,n)=>{const i=s==="svg";e==="class"?Zm(c,r,i):e==="style"?av(c,a,r):t0(e)?Y8(e)||nv(c,e,a,r,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(c,e,r,i))?(pc(c,e,r),!c.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vc(c,e,r,i,n,e!=="value")):c._isVueCE&&(/[A-Z]/.test(e)||!C2(r))?pc(c,s3(e),r,n,e):(e==="true-value"?c._trueValue=r:e==="false-value"&&(c._falseValue=r),vc(c,e,r,i))};function mv(c,e,a,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in c&&Hc(e)&&X(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&c.tagName==="INPUT"||e==="type"&&c.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=c.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hc(e)&&C2(a)?!1:e in c}const i3=c=>{const e=c.props["onUpdate:modelValue"]||!1;return q(e)?a=>_6(e,a):e};function vv(c){c.target.composing=!0}function zc(c){const e=c.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const n1=Symbol("_assign"),b8={created(c,{modifiers:{lazy:e,trim:a,number:r}},s){c[n1]=i3(s);const n=r||s.props&&s.props.type==="number";_1(c,e?"change":"input",i=>{if(i.target.composing)return;let t=c.value;a&&(t=t.trim()),n&&(t=W6(t)),c[n1](t)}),a&&_1(c,"change",()=>{c.value=c.value.trim()}),e||(_1(c,"compositionstart",vv),_1(c,"compositionend",zc),_1(c,"change",zc))},mounted(c,{value:e}){c.value=e??""},beforeUpdate(c,{value:e,oldValue:a,modifiers:{lazy:r,trim:s,number:n}},i){if(c[n1]=i3(i),c.composing)return;const t=(n||c.type==="number")&&!/^0\d/.test(c.value)?W6(c.value):c.value,o=e??"";t!==o&&(document.activeElement===c&&c.type!=="range"&&(r&&e===a||s&&c.value.trim()===o)||(c.value=o))}},pv={deep:!0,created(c,e,a){c[n1]=i3(a),_1(c,"change",()=>{const r=c._modelValue,s=n4(c),n=c.checked,i=c[n1];if(q(r)){const t=J8(r,s),o=t!==-1;if(n&&!o)i(r.concat(s));else if(!n&&o){const f=[...r];f.splice(t,1),i(f)}}else if(m4(r)){const t=new Set(r);n?t.add(s):t.delete(s),i(t)}else i(ca(c,n))})},mounted:Vc,beforeUpdate(c,e,a){c[n1]=i3(a),Vc(c,e,a)}};function Vc(c,{value:e,oldValue:a},r){c._modelValue=e;let s;if(q(e))s=J8(e,r.props.value)>-1;else if(m4(e))s=e.has(r.props.value);else{if(e===a)return;s=k3(e,ca(c,!0))}c.checked!==s&&(c.checked=s)}const hv={created(c,{value:e},a){c.checked=k3(e,a.props.value),c[n1]=i3(a),_1(c,"change",()=>{c[n1](n4(c))})},beforeUpdate(c,{value:e,oldValue:a},r){c[n1]=i3(r),e!==a&&(c.checked=k3(e,r.props.value))}},dv={deep:!0,created(c,{value:e,modifiers:{number:a}},r){const s=m4(e);_1(c,"change",()=>{const n=Array.prototype.filter.call(c.options,i=>i.selected).map(i=>a?W6(n4(i)):n4(i));c[n1](c.multiple?s?new Set(n):n:n[0]),c._assigning=!0,i5(()=>{c._assigning=!1})}),c[n1]=i3(r)},mounted(c,{value:e}){Mc(c,e)},beforeUpdate(c,e,a){c[n1]=i3(a)},updated(c,{value:e}){c._assigning||Mc(c,e)}};function Mc(c,e){const a=c.multiple,r=q(e);if(!(a&&!r&&!m4(e))){for(let s=0,n=c.options.length;s<n;s++){const i=c.options[s],t=n4(i);if(a)if(r){const o=typeof t;o==="string"||o==="number"?i.selected=e.some(f=>String(f)===String(t)):i.selected=J8(e,t)>-1}else i.selected=e.has(t);else if(k3(n4(i),e)){c.selectedIndex!==s&&(c.selectedIndex=s);return}}!a&&c.selectedIndex!==-1&&(c.selectedIndex=-1)}}function n4(c){return"_value"in c?c._value:c.value}function ca(c,e){const a=e?"_trueValue":"_falseValue";return a in c?c[a]:e}const Hv={created(c,e,a){L6(c,e,a,null,"created")},mounted(c,e,a){L6(c,e,a,null,"mounted")},beforeUpdate(c,e,a,r){L6(c,e,a,r,"beforeUpdate")},updated(c,e,a,r){L6(c,e,a,r,"updated")}};function zv(c,e){switch(c){case"SELECT":return dv;case"TEXTAREA":return b8;default:switch(e){case"checkbox":return pv;case"radio":return hv;default:return b8}}}function L6(c,e,a,r,s){const i=zv(c.tagName,a.props&&a.props.type)[s];i&&i(c,e,a,r)}const Vv=["ctrl","shift","alt","meta"],Mv={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,e)=>Vv.some(a=>c[`${a}Key`]&&!e.includes(a))},r4=(c,e)=>{const a=c._withMods||(c._withMods={}),r=e.join(".");return a[r]||(a[r]=(s,...n)=>{for(let i=0;i<e.length;i++){const t=Mv[e[i]];if(t&&t(s,e))return}return c(s,...n)})},gv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cv=(c,e)=>{const a=c._withKeys||(c._withKeys={}),r=e.join(".");return a[r]||(a[r]=s=>{if(!("key"in s))return;const n=u3(s.key);if(e.some(i=>i===n||gv[i]===n))return c(s)})},Lv=L2({patchProp:uv},Wm);let gc;function ea(){return gc||(gc=Mm(Lv))}const Cc=(...c)=>{ea().render(...c)},bv=(...c)=>{const e=ea().createApp(...c),{mount:a}=e;return e.mount=r=>{const s=yv(r);if(!s)return;const n=e._component;!X(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=a(s,!1,xv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},e};function xv(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function yv(c){return C2(c)?document.querySelector(c):c}function Lc(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),a.push.apply(a,r)}return a}function R(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Lc(Object(a),!0).forEach(function(r){b2(c,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):Lc(Object(a)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(a,r))})}return c}function e0(c){return e0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e0(c)}function wv(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function bc(c,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Nv(c,e,a){return e&&bc(c.prototype,e),a&&bc(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function b2(c,e,a){return e in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function v5(c,e){return Av(c)||Tv(c,e)||aa(c,e)||Fv()}function t6(c){return Sv(c)||kv(c)||aa(c)||Pv()}function Sv(c){if(Array.isArray(c))return x8(c)}function Av(c){if(Array.isArray(c))return c}function kv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Tv(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var r=[],s=!0,n=!1,i,t;try{for(a=a.call(c);!(s=(i=a.next()).done)&&(r.push(i.value),!(e&&r.length===e));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&a.return!=null&&a.return()}finally{if(n)throw t}}return r}}function aa(c,e){if(c){if(typeof c=="string")return x8(c,e);var a=Object.prototype.toString.call(c).slice(8,-1);if(a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set")return Array.from(c);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x8(c,e)}}function x8(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=c[a];return r}function Pv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xc=function(){},p5={},ra={},sa=null,na={mark:xc,measure:xc};try{typeof window<"u"&&(p5=window),typeof document<"u"&&(ra=document),typeof MutationObserver<"u"&&(sa=MutationObserver),typeof performance<"u"&&(na=performance)}catch{}var Bv=p5.navigator||{},yc=Bv.userAgent,wc=yc===void 0?"":yc,t3=p5,H2=ra,Nc=sa,b6=na;t3.document;var G1=!!H2.documentElement&&!!H2.head&&typeof H2.addEventListener=="function"&&typeof H2.createElement=="function",ia=~wc.indexOf("MSIE")||~wc.indexOf("Trident/"),x6,y6,w6,N6,S6,$1="___FONT_AWESOME___",y8=16,ta="fa",oa="svg-inline--fa",B3="data-fa-i2svg",w8="data-fa-pseudo-element",Ov="data-fa-pseudo-element-pending",h5="data-prefix",d5="data-icon",Sc="fontawesome-i2svg",Rv="async",_v=["HTML","HEAD","STYLE","SCRIPT"],la=function(){try{return!0}catch{return!1}}(),d2="classic",M2="sharp",H5=[d2,M2];function o6(c){return new Proxy(c,{get:function(a,r){return r in a?a[r]:a[d2]}})}var j4=o6((x6={},b2(x6,d2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),b2(x6,M2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),x6)),W4=o6((y6={},b2(y6,d2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),b2(y6,M2,{solid:"fass",regular:"fasr"}),y6)),G4=o6((w6={},b2(w6,d2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),b2(w6,M2,{fass:"fa-solid",fasr:"fa-regular"}),w6)),Ev=o6((N6={},b2(N6,d2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),b2(N6,M2,{"fa-solid":"fass","fa-regular":"fasr"}),N6)),Dv=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,fa="fa-layers-text",Iv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$v=o6((S6={},b2(S6,d2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),b2(S6,M2,{900:"fass",400:"fasr"}),S6)),ua=[1,2,3,4,5,6,7,8,9,10],Uv=ua.concat([11,12,13,14,15,16,17,18,19,20]),qv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],x3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K4=new Set;Object.keys(W4[d2]).map(K4.add.bind(K4));Object.keys(W4[M2]).map(K4.add.bind(K4));var jv=[].concat(H5,t6(K4),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x3.GROUP,x3.SWAP_OPACITY,x3.PRIMARY,x3.SECONDARY]).concat(ua.map(function(c){return"".concat(c,"x")})).concat(Uv.map(function(c){return"w-".concat(c)})),A4=t3.FontAwesomeConfig||{};function Wv(c){var e=H2.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function Gv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(H2&&typeof H2.querySelector=="function"){var Kv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kv.forEach(function(c){var e=v5(c,2),a=e[0],r=e[1],s=Gv(Wv(a));s!=null&&(A4[r]=s)})}var ma={styleDefault:"solid",familyDefault:"classic",cssPrefix:ta,replacementClass:oa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A4.familyPrefix&&(A4.cssPrefix=A4.familyPrefix);var i4=R(R({},ma),A4);i4.autoReplaceSvg||(i4.observeMutations=!1);var D={};Object.keys(ma).forEach(function(c){Object.defineProperty(D,c,{enumerable:!0,set:function(a){i4[c]=a,k4.forEach(function(r){return r(D)})},get:function(){return i4[c]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){i4.cssPrefix=e,k4.forEach(function(a){return a(D)})},get:function(){return i4.cssPrefix}});t3.FontAwesomeConfig=D;var k4=[];function Yv(c){return k4.push(c),function(){k4.splice(k4.indexOf(c),1)}}var J1=y8,x1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xv(c){if(!(!c||!G1)){var e=H2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=H2.head.childNodes,r=null,s=a.length-1;s>-1;s--){var n=a[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return H2.head.insertBefore(e,r),c}}var Qv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y4(){for(var c=12,e="";c-- >0;)e+=Qv[Math.random()*62|0];return e}function v4(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function z5(c){return c.classList?v4(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function va(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jv(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(va(c[a]),'" ')},"").trim()}function z0(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function V5(c){return c.size!==x1.size||c.x!==x1.x||c.y!==x1.y||c.rotate!==x1.rotate||c.flipX||c.flipY}function Zv(c){var e=c.transform,a=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),t="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:f}}function cp(c){var e=c.transform,a=c.width,r=a===void 0?y8:a,s=c.height,n=s===void 0?y8:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&ia?o+="translate(".concat(e.x/J1-r/2,"em, ").concat(e.y/J1-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(e.x/J1,"em), calc(-50% + ").concat(e.y/J1,"em)) "):o+="translate(".concat(e.x/J1,"em, ").concat(e.y/J1,"em) "),o+="scale(".concat(e.size/J1*(e.flipX?-1:1),", ").concat(e.size/J1*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var ep=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function pa(){var c=ta,e=oa,a=D.cssPrefix,r=D.replacementClass,s=ep;if(a!==c||r!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(e),"g");s=s.replace(n,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(t,".".concat(r))}return s}var Ac=!1;function c8(){D.autoAddCss&&!Ac&&(Xv(pa()),Ac=!0)}var ap={mixout:function(){return{dom:{css:pa,insertCss:c8}}},hooks:function(){return{beforeDOMElementCreation:function(){c8()},beforeI2svg:function(){c8()}}}},U1=t3||{};U1[$1]||(U1[$1]={});U1[$1].styles||(U1[$1].styles={});U1[$1].hooks||(U1[$1].hooks={});U1[$1].shims||(U1[$1].shims=[]);var p1=U1[$1],ha=[],rp=function c(){H2.removeEventListener("DOMContentLoaded",c),a0=1,ha.map(function(e){return e()})},a0=!1;G1&&(a0=(H2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H2.readyState),a0||H2.addEventListener("DOMContentLoaded",rp));function sp(c){G1&&(a0?setTimeout(c,0):ha.push(c))}function l6(c){var e=c.tag,a=c.attributes,r=a===void 0?{}:a,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?va(c):"<".concat(e," ").concat(Jv(r),">").concat(n.map(l6).join(""),"</").concat(e,">")}function kc(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var np=function(e,a){return function(r,s,n,i){return e.call(a,r,s,n,i)}},e8=function(e,a,r,s){var n=Object.keys(e),i=n.length,t=s!==void 0?np(a,s):a,o,f,l;for(r===void 0?(o=1,l=e[n[0]]):(o=0,l=r);o<i;o++)f=n[o],l=t(l,e[f],f,e);return l};function ip(c){for(var e=[],a=0,r=c.length;a<r;){var s=c.charCodeAt(a++);if(s>=55296&&s<=56319&&a<r){var n=c.charCodeAt(a++);(n&64512)==56320?e.push(((s&1023)<<10)+(n&1023)+65536):(e.push(s),a--)}else e.push(s)}return e}function N8(c){var e=ip(c);return e.length===1?e[0].toString(16):null}function tp(c,e){var a=c.length,r=c.charCodeAt(e),s;return r>=55296&&r<=56319&&a>e+1&&(s=c.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Tc(c){return Object.keys(c).reduce(function(e,a){var r=c[a],s=!!r.icon;return s?e[r.iconName]=r.icon:e[a]=r,e},{})}function S8(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,s=r===void 0?!1:r,n=Tc(e);typeof p1.hooks.addPack=="function"&&!s?p1.hooks.addPack(c,Tc(e)):p1.styles[c]=R(R({},p1.styles[c]||{}),n),c==="fas"&&S8("fa",e)}var A6,k6,T6,Y3=p1.styles,op=p1.shims,lp=(A6={},b2(A6,d2,Object.values(G4[d2])),b2(A6,M2,Object.values(G4[M2])),A6),M5=null,da={},Ha={},za={},Va={},Ma={},fp=(k6={},b2(k6,d2,Object.keys(j4[d2])),b2(k6,M2,Object.keys(j4[M2])),k6);function up(c){return~jv.indexOf(c)}function mp(c,e){var a=e.split("-"),r=a[0],s=a.slice(1).join("-");return r===c&&s!==""&&!up(s)?s:null}var ga=function(){var e=function(n){return e8(Y3,function(i,t,o){return i[o]=e8(t,n,{}),i},{})};da=e(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),Ha=e(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),Ma=e(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var a="far"in Y3||D.autoFetchSvg,r=e8(op,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!a&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});za=r.names,Va=r.unicodes,M5=V0(D.styleDefault,{family:D.familyDefault})};Yv(function(c){M5=V0(c.styleDefault,{family:D.familyDefault})});ga();function g5(c,e){return(da[c]||{})[e]}function vp(c,e){return(Ha[c]||{})[e]}function y3(c,e){return(Ma[c]||{})[e]}function Ca(c){return za[c]||{prefix:null,iconName:null}}function pp(c){var e=Va[c],a=g5("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function o3(){return M5}var C5=function(){return{prefix:null,iconName:null,rest:[]}};function V0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,r=a===void 0?d2:a,s=j4[r][c],n=W4[r][c]||W4[r][s],i=c in p1.styles?c:null;return n||i||null}var Pc=(T6={},b2(T6,d2,Object.keys(G4[d2])),b2(T6,M2,Object.keys(G4[M2])),T6);function M0(c){var e,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,s=r===void 0?!1:r,n=(e={},b2(e,d2,"".concat(D.cssPrefix,"-").concat(d2)),b2(e,M2,"".concat(D.cssPrefix,"-").concat(M2)),e),i=null,t=d2;(c.includes(n[d2])||c.some(function(f){return Pc[d2].includes(f)}))&&(t=d2),(c.includes(n[M2])||c.some(function(f){return Pc[M2].includes(f)}))&&(t=M2);var o=c.reduce(function(f,l){var u=mp(D.cssPrefix,l);if(Y3[l]?(l=lp[t].includes(l)?Ev[t][l]:l,i=l,f.prefix=l):fp[t].indexOf(l)>-1?(i=l,f.prefix=V0(l,{family:t})):u?f.iconName=u:l!==D.replacementClass&&l!==n[d2]&&l!==n[M2]&&f.rest.push(l),!s&&f.prefix&&f.iconName){var p=i==="fa"?Ca(f.iconName):{},m=y3(f.prefix,f.iconName);p.prefix&&(i=null),f.iconName=p.iconName||m||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Y3.far&&Y3.fas&&!D.autoFetchSvg&&(f.prefix="fas")}return f},C5());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===M2&&(Y3.fass||D.autoFetchSvg)&&(o.prefix="fass",o.iconName=y3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=o3()||"fas"),o}var hp=function(){function c(){wv(this,c),this.definitions={}}return Nv(c,[{key:"add",value:function(){for(var a=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){a.definitions[t]=R(R({},a.definitions[t]||{}),i[t]),S8(t,i[t]);var o=G4[d2][t];o&&S8(o,i[t]),ga()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,f=i.icon,l=f[2];a[t]||(a[t]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(a[t][u]=f)}),a[t][o]=f}),a}}]),c}(),Fc=[],X3={},s4={},dp=Object.keys(s4);function Hp(c,e){var a=e.mixoutsTo;return Fc=c,X3={},Object.keys(s4).forEach(function(r){dp.indexOf(r)===-1&&delete s4[r]}),Fc.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(a[i]=s[i]),e0(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){a[i]||(a[i]={}),a[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){X3[i]||(X3[i]=[]),X3[i].push(n[i])})}r.provides&&r.provides(s4)}),a}function A8(c,e){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];var n=X3[c]||[];return n.forEach(function(i){e=i.apply(null,[e].concat(r))}),e}function O3(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];var s=X3[c]||[];s.forEach(function(n){n.apply(null,a)})}function q1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return s4[c]?s4[c].apply(null,e):void 0}function k8(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||o3();if(e)return e=y3(a,e)||e,kc(La.definitions,a,e)||kc(p1.styles,a,e)}var La=new hp,zp=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,O3("noAuto")},Vp={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G1?(O3("beforeI2svg",e),q1("pseudoElements2svg",e),q1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,sp(function(){gp({autoReplaceSvgRoot:a}),O3("watch",e)})}},Mp={icon:function(e){if(e===null)return null;if(e0(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:y3(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=V0(e[0]);return{prefix:r,iconName:y3(r,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(Dv))){var s=M0(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||o3(),iconName:y3(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var n=o3();return{prefix:n,iconName:y3(n,e)||e}}}},c1={noAuto:zp,config:D,dom:Vp,parse:Mp,library:La,findIconDefinition:k8,toHtml:l6},gp=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,r=a===void 0?H2:a;(Object.keys(p1.styles).length>0||D.autoFetchSvg)&&G1&&D.autoReplaceSvg&&c1.dom.i2svg({node:r})};function g0(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return l6(r)})}}),Object.defineProperty(c,"node",{get:function(){if(G1){var r=H2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Cp(c){var e=c.children,a=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(V5(i)&&a.found&&!r.found){var t=a.width,o=a.height,f={x:t/o/2,y:.5};s.style=z0(R(R({},n),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Lp(c){var e=c.prefix,a=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(e,"-").concat(D.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},s),{},{id:i}),children:r}]}]}function L5(c){var e=c.icons,a=e.main,r=e.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,f=c.maskId,l=c.titleId,u=c.extra,p=c.watchable,m=p===void 0?!1:p,z=r.found?r:a,H=z.width,g=z.height,d=s==="fak",M=[D.replacementClass,n?"".concat(D.cssPrefix,"-").concat(n):""].filter(function(B){return u.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(u.classes).join(" "),L={children:[],attributes:R(R({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:M,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(g)})},V=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(H/g*16*.0625,"em")}:{};m&&(L.attributes[B3]=""),o&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||Y4())},children:[o]}),delete L.attributes.title);var y=R(R({},L),{},{prefix:s,iconName:n,main:a,mask:r,maskId:f,transform:i,symbol:t,styles:R(R({},V),u.styles)}),b=r.found&&a.found?q1("generateAbstractMask",y)||{children:[],attributes:{}}:q1("generateAbstractIcon",y)||{children:[],attributes:{}},T=b.children,E=b.attributes;return y.children=T,y.attributes=E,t?Lp(y):Cp(y)}function Bc(c){var e=c.content,a=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,f=R(R(R({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(f[B3]="");var l=R({},i.styles);V5(s)&&(l.transform=cp({transform:s,startCentered:!0,width:a,height:r}),l["-webkit-transform"]=l.transform);var u=z0(l);u.length>0&&(f.style=u);var p=[];return p.push({tag:"span",attributes:f,children:[e]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function bp(c){var e=c.content,a=c.title,r=c.extra,s=R(R(R({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),n=z0(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var a8=p1.styles;function T8(c){var e=c[0],a=c[1],r=c.slice(4),s=v5(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(x3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(x3.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(x3.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:a,icon:i}}var xp={found:!1,width:512,height:512};function yp(c,e){!la&&!D.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function P8(c,e){var a=e;return e==="fa"&&D.styleDefault!==null&&(e=o3()),new Promise(function(r,s){if(q1("missingIconAbstract"),a==="fa"){var n=Ca(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&a8[e]&&a8[e][c]){var i=a8[e][c];return r(T8(i))}yp(c,e),r(R(R({},xp),{},{icon:D.showMissingIcons&&c?q1("missingIconAbstract")||{}:{}}))})}var Oc=function(){},F8=D.measurePerformance&&b6&&b6.mark&&b6.measure?b6:{mark:Oc,measure:Oc},L4='FA "6.3.0"',wp=function(e){return F8.mark("".concat(L4," ").concat(e," begins")),function(){return ba(e)}},ba=function(e){F8.mark("".concat(L4," ").concat(e," ends")),F8.measure("".concat(L4," ").concat(e),"".concat(L4," ").concat(e," begins"),"".concat(L4," ").concat(e," ends"))},b5={begin:wp,end:ba},I6=function(){};function Rc(c){var e=c.getAttribute?c.getAttribute(B3):null;return typeof e=="string"}function Np(c){var e=c.getAttribute?c.getAttribute(h5):null,a=c.getAttribute?c.getAttribute(d5):null;return e&&a}function Sp(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(D.replacementClass)}function Ap(){if(D.autoReplaceSvg===!0)return $6.replace;var c=$6[D.autoReplaceSvg];return c||$6.replace}function kp(c){return H2.createElementNS("http://www.w3.org/2000/svg",c)}function Tp(c){return H2.createElement(c)}function xa(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,r=a===void 0?c.tag==="svg"?kp:Tp:a;if(typeof c=="string")return H2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(xa(i,{ceFn:r}))}),s}function Pp(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $6={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(s){a.parentNode.insertBefore(xa(s),a)}),a.getAttribute(B3)===null&&D.keepOriginalSource){var r=H2.createComment(Pp(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(e){var a=e[0],r=e[1];if(~z5(a).indexOf(D.replacementClass))return $6.replace(e);var s=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===D.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return l6(t)}).join(`
`);a.setAttribute(B3,""),a.innerHTML=i}};function _c(c){c()}function ya(c,e){var a=typeof e=="function"?e:I6;if(c.length===0)a();else{var r=_c;D.mutateApproach===Rv&&(r=t3.requestAnimationFrame||_c),r(function(){var s=Ap(),n=b5.begin("mutate");c.map(s),n(),a()})}}var x5=!1;function wa(){x5=!0}function B8(){x5=!1}var r0=null;function Ec(c){if(Nc&&D.observeMutations){var e=c.treeCallback,a=e===void 0?I6:e,r=c.nodeCallback,s=r===void 0?I6:r,n=c.pseudoElementsCallback,i=n===void 0?I6:n,t=c.observeMutationsRoot,o=t===void 0?H2:t;r0=new Nc(function(f){if(!x5){var l=o3();v4(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Rc(u.addedNodes[0])&&(D.searchPseudoElements&&i(u.target),a(u.target)),u.type==="attributes"&&u.target.parentNode&&D.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&Rc(u.target)&&~qv.indexOf(u.attributeName))if(u.attributeName==="class"&&Np(u.target)){var p=M0(z5(u.target)),m=p.prefix,z=p.iconName;u.target.setAttribute(h5,m||l),z&&u.target.setAttribute(d5,z)}else Sp(u.target)&&s(u.target)})}}),G1&&r0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fp(){r0&&r0.disconnect()}function Bp(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),a}function Op(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=M0(z5(c));return s.prefix||(s.prefix=o3()),e&&a&&(s.prefix=e,s.iconName=a),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=vp(s.prefix,c.innerText)||g5(s.prefix,N8(c.innerText))),!s.iconName&&D.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Rp(c){var e=v4(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),a=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return D.autoA11y&&(a?e["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Y4()):(e["aria-hidden"]="true",e.focusable="false")),e}function _p(){return{iconName:null,title:null,titleId:null,prefix:null,transform:x1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dc(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Op(c),r=a.iconName,s=a.prefix,n=a.rest,i=Rp(c),t=A8("parseNodeAttributes",{},c),o=e.styleParser?Bp(c):[];return R({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:x1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Ep=p1.styles;function Na(c){var e=D.autoReplaceSvg==="nest"?Dc(c,{styleParser:!1}):Dc(c);return~e.extra.classes.indexOf(fa)?q1("generateLayersText",c,e):q1("generateSvgReplacementMutation",c,e)}var l3=new Set;H5.map(function(c){l3.add("fa-".concat(c))});Object.keys(j4[d2]).map(l3.add.bind(l3));Object.keys(j4[M2]).map(l3.add.bind(l3));l3=t6(l3);function Ic(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G1)return Promise.resolve();var a=H2.documentElement.classList,r=function(u){return a.add("".concat(Sc,"-").concat(u))},s=function(u){return a.remove("".concat(Sc,"-").concat(u))},n=D.autoFetchSvg?l3:H5.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ep));n.includes("fa")||n.push("fa");var i=[".".concat(fa,":not([").concat(B3,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(B3,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=v4(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=b5.begin("onTree"),f=t.reduce(function(l,u){try{var p=Na(u);p&&l.push(p)}catch(m){la||m.name==="MissingIcon"&&console.error(m)}return l},[]);return new Promise(function(l,u){Promise.all(f).then(function(p){ya(p,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),o(),l()})}).catch(function(p){o(),u(p)})})}function Dp(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Na(c).then(function(a){a&&ya([a],e)})}function Ip(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:k8(e||{}),s=a.mask;return s&&(s=(s||{}).icon?s:k8(s||{})),c(r,R(R({},a),{},{mask:s}))}}var $p=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,s=r===void 0?x1:r,n=a.symbol,i=n===void 0?!1:n,t=a.mask,o=t===void 0?null:t,f=a.maskId,l=f===void 0?null:f,u=a.title,p=u===void 0?null:u,m=a.titleId,z=m===void 0?null:m,H=a.classes,g=H===void 0?[]:H,d=a.attributes,M=d===void 0?{}:d,L=a.styles,V=L===void 0?{}:L;if(e){var y=e.prefix,b=e.iconName,T=e.icon;return g0(R({type:"icon"},e),function(){return O3("beforeDOMElementCreation",{iconDefinition:e,params:a}),D.autoA11y&&(p?M["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(z||Y4()):(M["aria-hidden"]="true",M.focusable="false")),L5({icons:{main:T8(T),mask:o?T8(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:b,transform:R(R({},x1),s),symbol:i,title:p,maskId:l,titleId:z,extra:{attributes:M,styles:V,classes:g}})})}},Up={mixout:function(){return{icon:Ip($p)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ic,a.nodeCallback=Dp,a}}},provides:function(e){e.i2svg=function(a){var r=a.node,s=r===void 0?H2:r,n=a.callback,i=n===void 0?function(){}:n;return Ic(s,i)},e.generateSvgReplacementMutation=function(a,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,f=r.symbol,l=r.mask,u=r.maskId,p=r.extra;return new Promise(function(m,z){Promise.all([P8(s,t),l.iconName?P8(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var g=v5(H,2),d=g[0],M=g[1];m([a,L5({icons:{main:d,mask:M},prefix:t,iconName:s,transform:o,symbol:f,maskId:u,title:n,titleId:i,extra:p,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(a){var r=a.children,s=a.attributes,n=a.main,i=a.transform,t=a.styles,o=z0(t);o.length>0&&(s.style=o);var f;return V5(i)&&(f=q1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:s}}}},qp={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return g0({type:"layer"},function(){O3("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(t6(n)).join(" ")},children:i}]})}}}},jp={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,f=o===void 0?{}:o,l=r.styles,u=l===void 0?{}:l;return g0({type:"counter",content:a},function(){return O3("beforeDOMElementCreation",{content:a,params:r}),bp({content:a.toString(),title:n,extra:{attributes:f,styles:u,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(t6(t))}})})}}}},Wp={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?x1:s,i=r.title,t=i===void 0?null:i,o=r.classes,f=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,p=r.styles,m=p===void 0?{}:p;return g0({type:"text",content:a},function(){return O3("beforeDOMElementCreation",{content:a,params:r}),Bc({content:a,transform:R(R({},x1),n),title:t,extra:{attributes:u,styles:m,classes:["".concat(D.cssPrefix,"-layers-text")].concat(t6(f))}})})}}},provides:function(e){e.generateLayersText=function(a,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(ia){var f=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();t=l.width/f,o=l.height/f}return D.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Bc({content:a.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},Gp=new RegExp('"',"ug"),$c=[1105920,1112319];function Kp(c){var e=c.replace(Gp,""),a=tp(e,0),r=a>=$c[0]&&a<=$c[1],s=e.length===2?e[0]===e[1]:!1;return{value:N8(s?e[0]:e),isSecondary:r||s}}function Uc(c,e){var a="".concat(Ov).concat(e.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(a)!==null)return r();var n=v4(c.children),i=n.filter(function(T){return T.getAttribute(w8)===e})[0],t=t3.getComputedStyle(c,e),o=t.getPropertyValue("font-family").match(Iv),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&l!=="none"&&l!==""){var u=t.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?M2:d2,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?W4[p][o[2].toLowerCase()]:$v[p][f],z=Kp(u),H=z.value,g=z.isSecondary,d=o[0].startsWith("FontAwesome"),M=g5(m,H),L=M;if(d){var V=pp(H);V.iconName&&V.prefix&&(M=V.iconName,m=V.prefix)}if(M&&!g&&(!i||i.getAttribute(h5)!==m||i.getAttribute(d5)!==L)){c.setAttribute(a,L),i&&c.removeChild(i);var y=_p(),b=y.extra;b.attributes[w8]=e,P8(M,m).then(function(T){var E=L5(R(R({},y),{},{icons:{main:T,mask:C5()},prefix:m,iconName:L,extra:b,watchable:!0})),B=H2.createElement("svg");e==="::before"?c.insertBefore(B,c.firstChild):c.appendChild(B),B.outerHTML=E.map(function(U){return l6(U)}).join(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+a+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+a+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+a+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+a+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+a+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+a+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+a+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),n=new RegExp("(?:^"+a+"$)|(?:^"+s+"$)"),i=new RegExp("^"+a+"$"),t=new RegExp("^"+s+"$"),o=function(V){return V&&V.exact?n:new RegExp("(?:"+e(V)+a+e(V)+")|(?:"+e(V)+s+e(V)+")","g")};o.v4=function(L){return L&&L.exact?i:new RegExp(""+e(L)+a+e(L),"g")},o.v6=function(L){return L&&L.exact?t:new RegExp(""+e(L)+s+e(L),"g")};var f="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",u=o.v4().source,p=o.v6().source,m="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",z="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",H="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",g="(?::\\d{2,5})?",d='(?:[/?#][^\\s"]*)?',M="(?:"+f+"|www\\.)"+l+"(?:localhost|"+u+"|"+p+"|"+m+z+H+")"+g+d;return F6=new RegExp("(?:^"+M+"$)","i"),F6},R9={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},b4={integer:function(e){return b4.number(e)&&parseInt(e,10)===e},float:function(e){return b4.number(e)&&!b4.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!b4.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(R9.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(jY())},hex:function(e){return typeof e=="string"&&!!e.match(R9.hex)}},WY=function(e,a,r,s,n){if(e.required&&a===void 0){Kf(e,a,r,s,n);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],t=e.type;i.indexOf(t)>-1?b4[t](a)||s.push(Q2(n.messages.types[t],e.fullField,e.type)):t&&typeof a!==e.type&&s.push(Q2(n.messages.types[t],e.fullField,e.type))},GY=function(e,a,r,s,n){var i=typeof e.len=="number",t=typeof e.min=="number",o=typeof e.max=="number",f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=a,u=null,p=typeof a=="number",m=typeof a=="string",z=Array.isArray(a);if(p?u="number":m?u="string":z&&(u="array"),!u)return!1;z&&(l=a.length),m&&(l=a.replace(f,"_").length),i?l!==e.len&&s.push(Q2(n.messages[u].len,e.fullField,e.len)):t&&!o&&l<e.min?s.push(Q2(n.messages[u].min,e.fullField,e.min)):o&&!t&&l>e.max?s.push(Q2(n.messages[u].max,e.fullField,e.max)):t&&o&&(l<e.min||l>e.max)&&s.push(Q2(n.messages[u].range,e.fullField,e.min,e.max))},W3="enum",KY=function(e,a,r,s,n){e[W3]=Array.isArray(e[W3])?e[W3]:[],e[W3].indexOf(a)===-1&&s.push(Q2(n.messages[W3],e.fullField,e[W3].join(", ")))},YY=function(e,a,r,s,n){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(a)||s.push(Q2(n.messages.pattern.mismatch,e.fullField,a,e.pattern));else if(typeof e.pattern=="string"){var i=new RegExp(e.pattern);i.test(a)||s.push(Q2(n.messages.pattern.mismatch,e.fullField,a,e.pattern))}}},Z={required:Kf,whitespace:qY,type:WY,range:GY,enum:KY,pattern:YY},XY=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a,"string")&&!e.required)return r();Z.required(e,a,s,i,n,"string"),x2(a,"string")||(Z.type(e,a,s,i,n),Z.range(e,a,s,i,n),Z.pattern(e,a,s,i,n),e.whitespace===!0&&Z.whitespace(e,a,s,i,n))}r(i)},QY=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&Z.type(e,a,s,i,n)}r(i)},JY=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(a===""&&(a=void 0),x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&(Z.type(e,a,s,i,n),Z.range(e,a,s,i,n))}r(i)},ZY=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&Z.type(e,a,s,i,n)}r(i)},cX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),x2(a)||Z.type(e,a,s,i,n)}r(i)},eX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&(Z.type(e,a,s,i,n),Z.range(e,a,s,i,n))}r(i)},aX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&(Z.type(e,a,s,i,n),Z.range(e,a,s,i,n))}r(i)},rX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(a==null&&!e.required)return r();Z.required(e,a,s,i,n,"array"),a!=null&&(Z.type(e,a,s,i,n),Z.range(e,a,s,i,n))}r(i)},sX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&Z.type(e,a,s,i,n)}r(i)},nX="enum",iX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n),a!==void 0&&Z[nX](e,a,s,i,n)}r(i)},tX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a,"string")&&!e.required)return r();Z.required(e,a,s,i,n),x2(a,"string")||Z.pattern(e,a,s,i,n)}r(i)},oX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a,"date")&&!e.required)return r();if(Z.required(e,a,s,i,n),!x2(a,"date")){var o;a instanceof Date?o=a:o=new Date(a),Z.type(e,o,s,i,n),o&&Z.range(e,o.getTime(),s,i,n)}}r(i)},lX=function(e,a,r,s,n){var i=[],t=Array.isArray(a)?"array":typeof a;Z.required(e,a,s,i,n,t),r(i)},f8=function(e,a,r,s,n){var i=e.type,t=[],o=e.required||!e.required&&s.hasOwnProperty(e.field);if(o){if(x2(a,i)&&!e.required)return r();Z.required(e,a,s,t,n,i),x2(a,i)||Z.type(e,a,s,t,n)}r(t)},fX=function(e,a,r,s,n){var i=[],t=e.required||!e.required&&s.hasOwnProperty(e.field);if(t){if(x2(a)&&!e.required)return r();Z.required(e,a,s,i,n)}r(i)},O4={string:XY,method:QY,number:JY,boolean:ZY,regexp:cX,integer:eX,float:aX,array:rX,object:sX,enum:iX,pattern:tX,date:oX,url:f8,hex:f8,email:f8,required:lX,any:fX};function W8(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var G8=W8(),z6=function(){function c(a){this.rules=null,this._messages=G8,this.define(a)}var e=c.prototype;return e.define=function(r){var s=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(n){var i=r[n];s.rules[n]=Array.isArray(i)?i:[i]})},e.messages=function(r){return r&&(this._messages=O9(W8(),r)),this._messages},e.validate=function(r,s,n){var i=this;s===void 0&&(s={}),n===void 0&&(n=function(){});var t=r,o=s,f=n;if(typeof o=="function"&&(f=o,o={}),!this.rules||Object.keys(this.rules).length===0)return f&&f(null,t),Promise.resolve(t);function l(H){var g=[],d={};function M(V){if(Array.isArray(V)){var y;g=(y=g).concat.apply(y,V)}else g.push(V)}for(var L=0;L<H.length;L++)M(H[L]);g.length?(d=j8(g),f(g,d)):f(null,t)}if(o.messages){var u=this.messages();u===G8&&(u=W8()),O9(u,o.messages),o.messages=u}else o.messages=this.messages();var p={},m=o.keys||Object.keys(this.rules);m.forEach(function(H){var g=i.rules[H],d=t[H];g.forEach(function(M){var L=M;typeof L.transform=="function"&&(t===r&&(t=w3({},t)),d=t[H]=L.transform(d)),typeof L=="function"?L={validator:L}:L=w3({},L),L.validator=i.getValidationMethod(L),L.validator&&(L.field=H,L.fullField=L.fullField||H,L.type=i.getType(L),p[H]=p[H]||[],p[H].push({rule:L,value:d,source:t,field:H}))})});var z={};return IY(p,o,function(H,g){var d=H.rule,M=(d.type==="object"||d.type==="array")&&(typeof d.fields=="object"||typeof d.defaultField=="object");M=M&&(d.required||!d.required&&H.value),d.field=H.field;function L(b,T){return w3({},T,{fullField:d.fullField+"."+b,fullFields:d.fullFields?[].concat(d.fullFields,[b]):[b]})}function V(b){b===void 0&&(b=[]);var T=Array.isArray(b)?b:[b];!o.suppressWarning&&T.length&&c.warning("async-validator:",T),T.length&&d.message!==void 0&&(T=[].concat(d.message));var E=T.map(B9(d,t));if(o.first&&E.length)return z[d.field]=1,g(E);if(!M)g(E);else{if(d.required&&!H.value)return d.message!==void 0?E=[].concat(d.message).map(B9(d,t)):o.error&&(E=[o.error(d,Q2(o.messages.required,d.field))]),g(E);var B={};d.defaultField&&Object.keys(H.value).map(function(P){B[P]=d.defaultField}),B=w3({},B,H.rule.fields);var U={};Object.keys(B).forEach(function(P){var W=B[P],u2=Array.isArray(W)?W:[W];U[P]=u2.map(L.bind(null,P))});var K=new c(U);K.messages(o.messages),H.rule.options&&(H.rule.options.messages=o.messages,H.rule.options.error=o.error),K.validate(H.value,H.rule.options||o,function(P){var W=[];E&&E.length&&W.push.apply(W,E),P&&P.length&&W.push.apply(W,P),g(W.length?W:null)})}}var y;if(d.asyncValidator)y=d.asyncValidator(d,H.value,V,H.source,o);else if(d.validator){try{y=d.validator(d,H.value,V,H.source,o)}catch(b){console.error==null||console.error(b),o.suppressValidatorError||setTimeout(function(){throw b},0),V(b.message)}y===!0?V():y===!1?V(typeof d.message=="function"?d.message(d.fullField||d.field):d.message||(d.fullField||d.field)+" fails"):y instanceof Array?V(y):y instanceof Error&&V(y.message)}y&&y.then&&y.then(function(){return V()},function(b){return V(b)})},function(H){l(H)},t)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!O4.hasOwnProperty(r.type))throw new Error(Q2("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var s=Object.keys(r),n=s.indexOf("message");return n!==-1&&s.splice(n,1),s.length===1&&s[0]==="required"?O4.required:O4[this.getType(r)]||void 0},c}();z6.register=function(e,a){if(typeof a!="function")throw new Error("Cannot register a validator by type, validator is not a function");O4[e]=a};z6.warning=RY;z6.messages=G8;z6.validators=O4;const uX={class:"rl-form-item__label"},mX={class:"rl-form-item__content"},vX={key:0,class:"rl-form-item__error-msg"},B6=z2({__name:"FormItem",props:{label:null,prop:null},setup(c,{expose:e}){const a=c,r=S3(Wf),s=D1({state:"init",errorMsg:"",loading:!1}),n=g2(()=>{const z=r==null?void 0:r.model;return z&&a.prop&&!t8(z[a.prop])?z[a.prop]:null});let i=null;const t=g2(()=>{const z=r==null?void 0:r.rules;return z&&a.prop&&!t8(z[a.prop])?z[a.prop]:[]}),o=g2(()=>t.value.some(z=>z.required)),f=z=>{const H=t.value;return console.log("getTiggeredRules rules",H),H?H.filter(g=>!g.trigger||!z?!0:g.trigger&&g.trigger===z):[]},l=async z=>{const H=a.prop,g=f(z);if(g.length===0)return!0;if(H){const d=new z6({[H]:g});return s.loading=!0,d.validate({[H]:n.value}).then(()=>{s.state=K3.SUCCESS}).catch(M=>{const{errors:L}=M;return s.state=K3.ERROR,s.errorMsg=L&&L.length>0&&L[0].message||"",console.log("validate errors",M.errors),Promise.reject(M)}).finally(()=>{s.loading=!1})}},u=()=>{s.state="init",s.errorMsg="",s.loading=!1},p=()=>{u();const z=r==null?void 0:r.model;z&&a.prop&&!t8(z[a.prop])&&(z[a.prop]=i)},m={prop:a.prop||"",validate:l,clearValidate:u,resetFileds:p};return v0(Gf,m),I1(()=>{a.prop&&(r==null||r.addFiled(m),i=n.value)}),n6(()=>{r==null||r.removeFiled(m)}),e({validateStatus:s,validate:l,clearValidate:u,resetFileds:p}),(z,H)=>(Q(),t2("div",{class:I2(["rl-form-item",{"is-error":s.state===r1(K3).ERROR,"is-success":s.state===r1(K3).SUCCESS,"is-loading":s.loading,"is-required":o.value}])},[$("label",uX,[D2(z.$slots,"label",{label:a.label},()=>[v2(T3(a.label),1)])]),$("div",mX,[D2(z.$slots,"default",{validate:l}),s.state===r1(K3).ERROR?(Q(),t2("div",vX,T3(s.errorMsg),1)):R2("",!0)])],2))}}),pX=z2({__name:"Basic",setup(c){const e=D1({email:"zhashut",password:"",confirmPwd:""}),a=D1({email:[{type:"email",required:!0,trigger:"blur"},{type:"string",required:!0,trigger:"change"}],password:[{type:"string",required:!0,trigger:"blur",min:3,max:5}],confirmPwd:[{type:"string",required:!0,trigger:"blur",min:3,max:5},{validator:(t,o)=>o===e.password,trigger:"blur",message:"两个密码必须相同"}]}),r=o2(),s=async()=>{try{await r.value.validate(),console.log("passed!")}catch(t){console.log("validate failed error",t)}},n=()=>{r.value.clearValidate()},i=()=>{r.value.resetFileds()};return(t,o)=>(Q(),t2("div",null,[_(TY,{model:e,rules:a,ref_key:"formRef",ref:r},{default:Y(()=>[_(B6,{label:"the email",prop:"email"},{default:Y(()=>[_(B4,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=f=>e.email=f)},null,8,["modelValue"])]),_:1}),_(B6,{label:"the password",prop:"password"},{default:Y(()=>[_(B4,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=f=>e.password=f),type:"password"},null,8,["modelValue"])]),_:1}),_(B6,{label:"confirm password",prop:"confirmPwd"},{default:Y(()=>[_(B4,{modelValue:e.confirmPwd,"onUpdate:modelValue":o[2]||(o[2]=f=>e.confirmPwd=f),type:"password"},null,8,["modelValue"])]),_:1}),_(B6,null,{default:Y(()=>[_(V2,{type:"primary",onClick:r4(s,["prevent"])},{default:Y(()=>o[3]||(o[3]=[v2("Submit")])),_:1}),_(V2,{onClick:r4(n,["prevent"])},{default:Y(()=>o[4]||(o[4]=[v2("Clear")])),_:1}),_(V2,{onClick:r4(i,["prevent"])},{default:Y(()=>o[5]||(o[5]=[v2("Reset")])),_:1})]),_:1})]),_:1},8,["model","rules"])]))}});function hX(c,e,a){S2(c)?s1(c,(r,s)=>{s==null||s.removeEventListener(e,a),r==null||r.addEventListener(e,a)}):I1(()=>{c.addEventListener(e,a)}),o5(()=>{var r;(r=r1(c))==null||r.removeEventListener(e,a)})}const dX={class:"rl-message__content"},HX={key:0,class:"rl-message__close"},zX=z2({__name:"Message",props:{message:null,duration:{default:3e3},showClose:{type:Boolean},type:{default:"info"},onDestory:{type:Function},id:null,zIndex:null,offset:{default:20},transitionName:{default:"fade-up"}},setup(c,{expose:e}){const a=c,r=o2(!1),s=o2(),n=o2(0),i=g2(()=>gX(a.id)),t=g2(()=>a.offset+i.value),o=g2(()=>n.value+t.value),f=g2(()=>({top:t.value+"px",zIndex:a.zIndex}));let l;function u(){a.duration!==0&&(l=setTimeout(()=>{r.value=!1},a.duration))}function p(){clearTimeout(l)}I1(async()=>{r.value=!0,u()});function m(g){g.code==="Escape"&&(r.value=!1)}hX(document,"keydown",m);function z(){a.onDestory()}function H(){n.value=s.value.getBoundingClientRect().height}return e({bottomOffset:o,visible:r}),(g,d)=>(Q(),y1(m5,{name:c.transitionName,onAfterLeave:z,onEnter:H},{default:Y(()=>[X6($("div",{class:I2(["rl-message",{[`rl-message--${c.type}`]:c.type,"is-close":c.showClose}]),role:"alert",ref_key:"messageRef",ref:s,style:r6(f.value),onMouseenter:p,onMouseleave:u},[$("div",dX,[D2(g.$slots,"default",{},()=>[c.message?(Q(),y1(r1(If),{key:0,vNode:c.message},null,8,["vNode"])):R2("",!0)])]),c.showClose?(Q(),t2("div",HX,[_(N1,{onClick:d[0]||(d[0]=r4(M=>r.value=!1,["stop"])),icon:"xmark"})])):R2("",!0)],38),[[Ze,r.value]])]),_:3},8,["name"]))}}),_9=o2(0),VX=(c=2e3)=>{const e=o2(c),a=g2(()=>_9.value+e.value);return{currentZIndex:a,nextZIndex:()=>(_9.value++,a.value),initialZIndex:e}};let MX=1;const a3=oe([]),O6=c=>{const{nextZIndex:e}=VX(),a=`message_${MX++}`,r=document.createElement("div"),s=()=>{const l=a3.findIndex(u=>u.id===a);l!==-1&&(a3.splice(l,1),Cc(null,r))},n=()=>{const l=a3.find(u=>u.id===a);l&&(l.vm.exposed.visible.value=!1)},i={...c,id:a,zIndex:e(),onDestory:s},t=H0(zX,i);Cc(t,r),document.body.appendChild(r.firstElementChild);const o=t.component,f={id:a,vnode:t,vm:o,props:i,destory:n};return a3.push(f),f},gX=c=>{const e=a3.findIndex(a=>a.id===c);return console.log("idx",c,e,a3.length),e<=0?0:a3[e-1].vm.exposed.bottomOffset.value},CX=()=>{a3.forEach(c=>{c.destory()})},LX={class:"main-app"},bX={class:"button-containe common-container"},xX={class:"collapse-container"},yX={class:"icon-container common-container"},wX={class:"tooltip-container common-container"},NX={class:"tooltip-container common-container"},SX={class:"icon-container"},AX={class:"icon-container"},kX={class:"icon-container"},TX={class:"icon-container"},PX=z2({__name:"App",setup(c){const e=o2(null),a=o2(["a"]),r=o2("hover"),s=o2(),n=()=>{var p;O6({message:"hello world",duration:0,showClose:!0}),(p=s.value)==null||p.show()},i=()=>{var p;(p=s.value)==null||p.hide()},t={strategy:"fixed"},o=o2("click"),f=[{key:1,label:H0("b","this is bold")},{key:2,label:"item2"},{key:3,label:"item3"},{key:4,label:"item4",disabled:!0},{key:5,label:"item5",divided:!0}];I1(()=>{O6({message:"hello world",duration:0,showClose:!0}),O6({message:"hello world again",duration:0,type:"success",showClose:!0}),O6({message:"谢谢你的观看",duration:0,type:"danger",showClose:!0})}),I1(()=>{CX()});const l=o2(""),u=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"}];return(p,m)=>(Q(),t2("main",LX,[m[37]||(m[37]=$("h2",null,"Button 按钮",-1)),$("div",bX,[_(V2,{ref_key:"buttonRef",ref:e,onClick:n},{default:Y(()=>m[2]||(m[2]=[v2("Test Button")])),_:1},512),_(V2,{plain:"",onClick:i},{default:Y(()=>m[3]||(m[3]=[v2("Plain Button")])),_:1}),_(V2,{round:""},{default:Y(()=>m[4]||(m[4]=[v2("Round Button")])),_:1}),_(V2,{circle:""},{default:Y(()=>m[5]||(m[5]=[v2("RL")])),_:1}),_(V2,{disabled:""},{default:Y(()=>m[6]||(m[6]=[v2("Disabled Button")])),_:1}),m[21]||(m[21]=$("br",null,null,-1)),m[22]||(m[22]=$("br",null,null,-1)),_(V2,{type:"primary"},{default:Y(()=>m[7]||(m[7]=[v2("Primary")])),_:1}),_(V2,{type:"success"},{default:Y(()=>m[8]||(m[8]=[v2("Success")])),_:1}),_(V2,{type:"info"},{default:Y(()=>m[9]||(m[9]=[v2("Info")])),_:1}),_(V2,{type:"warning"},{default:Y(()=>m[10]||(m[10]=[v2("Warning")])),_:1}),_(V2,{type:"danger"},{default:Y(()=>m[11]||(m[11]=[v2("Danger")])),_:1}),m[23]||(m[23]=$("br",null,null,-1)),m[24]||(m[24]=$("br",null,null,-1)),_(V2,{type:"primary",plain:""},{default:Y(()=>m[12]||(m[12]=[v2("Primary")])),_:1}),_(V2,{type:"success",plain:""},{default:Y(()=>m[13]||(m[13]=[v2("Success")])),_:1}),_(V2,{type:"info",plain:""},{default:Y(()=>m[14]||(m[14]=[v2("Info")])),_:1}),_(V2,{type:"warning",plain:""},{default:Y(()=>m[15]||(m[15]=[v2("Warning")])),_:1}),_(V2,{type:"danger",plain:""},{default:Y(()=>m[16]||(m[16]=[v2("Danger")])),_:1}),m[25]||(m[25]=$("br",null,null,-1)),m[26]||(m[26]=$("br",null,null,-1)),_(V2,{size:"large"},{default:Y(()=>m[17]||(m[17]=[v2("Large")])),_:1}),_(V2,{size:"small"},{default:Y(()=>m[18]||(m[18]=[v2("Small")])),_:1}),m[27]||(m[27]=$("br",null,null,-1)),m[28]||(m[28]=$("br",null,null,-1)),_(V2,{size:"large",loading:""},{default:Y(()=>m[19]||(m[19]=[v2("Loading")])),_:1}),_(V2,{size:"large",icon:"bars-progress"},{default:Y(()=>m[20]||(m[20]=[v2("Icon")])),_:1}),m[29]||(m[29]=$("br",null,null,-1)),m[30]||(m[30]=$("br",null,null,-1))]),m[38]||(m[38]=$("h2",null,"Collapse 折叠面板",-1)),$("div",xX,[_(lY,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=z=>a.value=z)},{default:Y(()=>[_(l8,{name:"a",title:"Title A"},{default:Y(()=>m[31]||(m[31]=[$("div",null,"this is content aaaa",-1)])),_:1}),_(l8,{name:"b",title:"Title B"},{default:Y(()=>m[32]||(m[32]=[$("div",null,"this is bbbbb test",-1)])),_:1}),_(l8,{name:"c",title:"Disabled Title",disabled:""},{default:Y(()=>m[33]||(m[33]=[$("div",null,"this is cccc test",-1)])),_:1})]),_:1},8,["modelValue"])]),m[39]||(m[39]=$("h2",null,"Icon 图标",-1)),$("div",yX,[_(N1,{icon:"user-secret",type:"primary"}),_(N1,{icon:"arrow-up",spin:"",type:"success"})]),m[40]||(m[40]=$("h2",null,"Tooltip 文字提示",-1)),$("div",wX,[_(O7,{content:"triggered by rl",placement:"right-end",trigger:r.value,ref_key:"tooltipRef",ref:s,"open-delay":1e3,"close-delay":1e3,popperOptions:t},{content:Y(()=>m[34]||(m[34]=[$("h4",null,"triggered by rl with slot",-1)])),default:Y(()=>[m[35]||(m[35]=$("img",{alt:"Vue log",class:"logo",src:P$,width:"30",height:"30"},null,-1))]),_:1},8,["trigger"])]),m[41]||(m[41]=$("h2",null,"Dropdown 下拉菜单",-1)),$("div",NX,[_(GK,{placement:"bottom",trigger:o.value,"menu-options":f},{default:Y(()=>m[36]||(m[36]=[$("img",{alt:"snow log",class:"logo",src:F$,width:"30",height:"30"},null,-1)])),_:1},8,["trigger"])]),m[42]||(m[42]=$("h2",null,"Input 输入框",-1)),$("div",SX,[_(B4,{type:"password",placeholder:"请输入密码"})]),m[43]||(m[43]=$("h2",null,"Switch 开关",-1)),$("div",AX,[_(yY)]),m[44]||(m[44]=$("h2",null,"Select 选择器",-1)),$("div",kX,[_(AY,{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=z=>l.value=z),placeholder:"请选择",options:u},null,8,["modelValue"])]),m[45]||(m[45]=$("h2",null,"Form 表单",-1)),$("div",TX,[_(pX)])]))}}),FX=(c,e)=>{const a=c.__vccOpts||c;for(const[r,s]of e)a[r]=s;return a},Yf=FX(PX,[["__scopeId","data-v-1318a0d3"]]);nh.add(T$);var E9;console.log((E9=Yf.render)==null?void 0:E9.toString());bv(Yf).mount("#app")});export default BX();