(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ba(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ll="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=ba(ll);function Co(e){return!!e||e===""}function ya(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=be(r)?dl(r):ya(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(be(e))return e;if(ue(e))return e}}const cl=/;(?![^(]*\))/g,ul=/:(.+)/;function dl(e){const t={};return e.split(cl).forEach(n=>{if(n){const r=n.split(ul);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xa(e){let t="";if(be(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=xa(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ee={},Ht=[],Fe=()=>{},ml=()=>!1,pl=/^on[^a-z]/,mr=e=>pl.test(e),_a=e=>e.startsWith("onUpdate:"),xe=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,K=(e,t)=>hl.call(e,t),H=Array.isArray,cn=e=>pr(e)==="[object Map]",gl=e=>pr(e)==="[object Set]",U=e=>typeof e=="function",be=e=>typeof e=="string",Ea=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",So=e=>ue(e)&&U(e.then)&&U(e.catch),vl=Object.prototype.toString,pr=e=>vl.call(e),bl=e=>pr(e).slice(8,-1),yl=e=>pr(e)==="[object Object]",ka=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xl=/-(\w)/g,Ve=hr(e=>e.replace(xl,(t,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,Zt=hr(e=>e.replace(_l,"-$1").toLowerCase()),gr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rr=hr(e=>e?`on${gr(e)}`:""),bn=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},nr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Br=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oi;const wl=()=>oi||(oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class El{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function kl(e,t=Ye){t&&t.active&&t.effects.push(e)}const Aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ro=e=>(e.w&ht)>0,Io=e=>(e.n&ht)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ro(a)&&!Io(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Ur=new WeakMap;let ln=0,ht=1;const Hr=30;let Re;const Pt=Symbol(""),Yr=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Re,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,dt=!0,ht=1<<++ln,ln<=Hr?Al(this):si(this),this.fn()}finally{ln<=Hr&&Ol(this),ht=1<<--ln,Re=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(si(this),this.onStop&&this.onStop(),this.active=!1)}}function si(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const To=[];function en(){To.push(dt),dt=!1}function tn(){const e=To.pop();dt=e===void 0?!0:e}function Ae(e,t,n){if(dt&&Re){let r=Ur.get(e);r||Ur.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Aa()),No(a)}}function No(e,t){let n=!1;ln<=Hr?Io(e)||(e.n|=ht,n=!Ro(e)):n=!e.has(Re),n&&(e.add(Re),Re.deps.push(e))}function et(e,t,n,r,a,i){const o=Ur.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ka(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),cn(e)&&s.push(o.get(Yr)));break;case"delete":H(e)||(s.push(o.get(Pt)),cn(e)&&s.push(o.get(Yr)));break;case"set":cn(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&Wr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Wr(Aa(l))}}function Wr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&li(r);for(const r of n)r.computed||li(r)}function li(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pl=ba("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ea)),Cl=Pa(),Sl=Pa(!1,!0),Rl=Pa(!0),fi=Il();function Il(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const r=V(this)[t].apply(this,n);return tn(),r}}),e}function Pa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ql:zo:t?$o:jo).get(r))return r;const o=H(r);if(!e&&o&&K(fi,a))return Reflect.get(fi,a,i);const s=Reflect.get(r,a,i);return(Ea(a)?Mo.has(a):Pl(a))||(e||Ae(r,"get",a),t)?s:ve(s)?o&&ka(a)?s:s.value:ue(s)?e?Do(s):In(s):s}}const Tl=Fo(),Nl=Fo(!0);function Fo(e=!1){return function(n,r,a,i){let o=n[r];if(qt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!rr(a)&&!qt(a)&&(o=V(o),a=V(a)),!H(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=H(n)&&ka(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?bn(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Ml(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Fl(e,t){const n=Reflect.has(e,t);return(!Ea(t)||!Mo.has(t))&&Ae(e,"has",t),n}function Ll(e){return Ae(e,"iterate",H(e)?"length":Pt),Reflect.ownKeys(e)}const Lo={get:Cl,set:Tl,deleteProperty:Ml,has:Fl,ownKeys:Ll},jl={get:Rl,set(e,t){return!0},deleteProperty(e,t){return!0}},$l=xe({},Lo,{get:Sl,set:Nl}),Ca=e=>e,vr=e=>Reflect.getPrototypeOf(e);function Fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ae(a,"get",t),Ae(a,"get",i));const{has:o}=vr(a),s=r?Ca:n?Ia:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ae(r,"has",e),Ae(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ae(V(e),"iterate",Pt),Reflect.get(e,"size",e)}function ci(e){e=V(e);const t=V(this);return vr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function ui(e,t){t=V(t);const n=V(this),{has:r,get:a}=vr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bn(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function di(e){const t=V(this),{has:n,get:r}=vr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function mi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ca:e?Ia:yn;return!e&&Ae(s,"iterate",Pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=cn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ca:t?Ia:yn;return!t&&Ae(i,"iterate",l?Yr:Pt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function zl(){const e={get(i){return Fn(this,i)},get size(){return jn(this)},has:Ln,add:ci,set:ui,delete:di,clear:mi,forEach:$n(!1,!1)},t={get(i){return Fn(this,i,!1,!0)},get size(){return jn(this)},has:Ln,add:ci,set:ui,delete:di,clear:mi,forEach:$n(!1,!0)},n={get(i){return Fn(this,i,!0)},get size(){return jn(this,!0)},has(i){return Ln.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!1)},r={get(i){return Fn(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Ln.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[Dl,Bl,Ul,Hl]=zl();function Sa(e,t){const n=t?e?Hl:Ul:e?Bl:Dl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Yl={get:Sa(!1,!1)},Wl={get:Sa(!1,!0)},Kl={get:Sa(!0,!1)},jo=new WeakMap,$o=new WeakMap,zo=new WeakMap,ql=new WeakMap;function Vl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xl(e){return e.__v_skip||!Object.isExtensible(e)?0:Vl(bl(e))}function In(e){return qt(e)?e:Ra(e,!1,Lo,Yl,jo)}function Gl(e){return Ra(e,!1,$l,Wl,$o)}function Do(e){return Ra(e,!0,jl,Kl,zo)}function Ra(e,t,n,r,a){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return qt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function rr(e){return!!(e&&e.__v_isShallow)}function Bo(e){return Yt(e)||qt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Uo(e){return nr(e,"__v_skip",!0),e}const yn=e=>ue(e)?In(e):e,Ia=e=>ue(e)?Do(e):e;function Ho(e){dt&&Re&&(e=V(e),No(e.dep||(e.dep=Aa())))}function Yo(e,t){e=V(e),e.dep&&Wr(e.dep)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Ql(e){return Wo(e,!1)}function Jl(e){return Wo(e,!0)}function Wo(e,t){return ve(e)?e:new Zl(e,t)}class Zl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:yn(t)}get value(){return Ho(this),this._value}set value(t){const n=this.__v_isShallow||rr(t)||qt(t);t=n?t:V(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),Yo(this))}}function Ct(e){return ve(e)?e.value:e}const ef={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ko(e){return Yt(e)?e:new Proxy(e,ef)}var qo;class tf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[qo]=!1,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Ho(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}qo="__v_isReadonly";function nf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Fe):(r=e.get,a=e.set),new tf(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){br(i,t,n)}return a}function Le(e,t,n,r){if(U(e)){const i=mt(e,t,n,r);return i&&So(i)&&i.catch(o=>{br(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Le(e[i],t,n,r));return a}function br(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}rf(e,n,a,r)}function rf(e,t,n,r=!0){console.error(e)}let xn=!1,Kr=!1;const ge=[];let Ke=0;const Wt=[];let Je=null,wt=0;const Vo=Promise.resolve();let Ta=null;function Xo(e){const t=Ta||Vo;return e?t.then(this?e.bind(this):e):t}function af(e){let t=Ke+1,n=ge.length;for(;t<n;){const r=t+n>>>1;_n(ge[r])<e?t=r+1:n=r}return t}function Na(e){(!ge.length||!ge.includes(e,xn&&e.allowRecurse?Ke+1:Ke))&&(e.id==null?ge.push(e):ge.splice(af(e.id),0,e),Go())}function Go(){!xn&&!Kr&&(Kr=!0,Ta=Vo.then(Jo))}function of(e){const t=ge.indexOf(e);t>Ke&&ge.splice(t,1)}function sf(e){H(e)?Wt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?wt+1:wt))&&Wt.push(e),Go()}function pi(e,t=xn?Ke+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function Qo(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>_n(n)-_n(r)),wt=0;wt<Je.length;wt++)Je[wt]();Je=null,wt=0}}const _n=e=>e.id==null?1/0:e.id,lf=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Jo(e){Kr=!1,xn=!0,ge.sort(lf);const t=Fe;try{for(Ke=0;Ke<ge.length;Ke++){const n=ge[Ke];n&&n.active!==!1&&mt(n,null,14)}}finally{Ke=0,ge.length=0,Qo(),xn=!1,Ta=null,(ge.length||Wt.length)&&Jo()}}function ff(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||ee;p&&(a=n.map(g=>g.trim())),d&&(a=n.map(Br))}let s,l=r[s=Rr(t)]||r[s=Rr(Ve(t))];!l&&i&&(l=r[s=Rr(Zt(t))]),l&&Le(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Le(c,e,6,a)}}function Zo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=Zo(c,t,!0);f&&(s=!0,xe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ue(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):xe(o,i),ue(e)&&r.set(e,o),o)}function yr(e,t){return!e||!mr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Zt(t))||K(e,t))}let Te=null,es=null;function ar(e){const t=Te;return Te=e,es=e&&e.type.__scopeId||null,t}function ut(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ki(-1);const i=ar(t),o=e(...a);return ar(i),r._d&&ki(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:F}=e;let C,v;const _=ar(e);try{if(n.shapeFlag&4){const z=a||r;C=We(f.call(z,z,d,i,g,p,A)),v=l}else{const z=t;C=We(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),v=t.props?l:cf(l)}}catch(z){dn.length=0,br(z,e,1),C=se(wn)}let M=C;if(v&&F!==!1){const z=Object.keys(v),{shapeFlag:W}=M;z.length&&W&7&&(o&&z.some(_a)&&(v=uf(v,o)),M=Vt(M,v))}return n.dirs&&(M=Vt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),C=M,ar(_),C}const cf=e=>{let t;for(const n in e)(n==="class"||n==="style"||mr(n))&&((t||(t={}))[n]=e[n]);return t},uf=(e,t)=>{const n={};for(const r in e)(!_a(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function df(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!yr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,c):!0:!!o;return!1}function hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!yr(n,i))return!0}return!1}function mf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pf=e=>e.__isSuspense;function hf(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function Qn(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function pt(e,t,n=!1){const r=he||Te;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const gi={};function un(e,t,n){return ts(e,t,n)}function ts(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){const s=he;let l,c=!1,f=!1;if(ve(e)?(l=()=>e.value,c=rr(e)):Yt(e)?(l=()=>e,r=!0):H(e)?(f=!0,c=e.some(v=>Yt(v)||rr(v)),l=()=>e.map(v=>{if(ve(v))return v.value;if(Yt(v))return kt(v);if(U(v))return mt(v,s,2)})):U(e)?t?l=()=>mt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Le(e,s,3,[p])}:l=Fe,t&&r){const v=l;l=()=>kt(v())}let d,p=v=>{d=C.onStop=()=>{mt(v,s,4)}};if(kn)return p=Fe,t?n&&Le(t,s,3,[l(),f?[]:void 0,p]):l(),Fe;let g=f?[]:gi;const A=()=>{if(!!C.active)if(t){const v=C.run();(r||c||(f?v.some((_,M)=>bn(_,g[M])):bn(v,g)))&&(d&&d(),Le(t,s,3,[v,g===gi?void 0:g,p]),g=v)}else C.run()};A.allowRecurse=!!t;let F;a==="sync"?F=A:a==="post"?F=()=>we(A,s&&s.suspense):(A.pre=!0,s&&(A.id=s.uid),F=()=>Na(A));const C=new Oa(l,F);return t?n?A():g=C.run():a==="post"?we(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&wa(s.scope.effects,C)}}function gf(e,t,n){const r=this.proxy,a=be(e)?e.includes(".")?ns(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=he;Xt(this);const s=ts(a,i.bind(r),n);return o?Xt(o):St(),s}function ns(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))kt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(gl(e)||cn(e))e.forEach(n=>{kt(n,t)});else if(yl(e))for(const n in e)kt(e[n],t);return e}function Tt(e){return U(e)?{setup:e,name:e.name}:e}const Jn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function vf(e,t){as(e,"a",t)}function bf(e,t){as(e,"da",t)}function as(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(xr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)rs(a.parent.vnode)&&yf(r,t,n,a),a=a.parent}}function yf(e,t,n,r){const a=xr(t,e,r,!0);is(()=>{wa(r[t],a)},n)}function xr(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Xt(n);const s=Le(t,n,e,o);return St(),tn(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=he)=>(!kn||e==="sp")&&xr(e,t,n),xf=at("bm"),_f=at("m"),wf=at("bu"),Ef=at("u"),kf=at("bum"),is=at("um"),Af=at("sp"),Of=at("rtg"),Pf=at("rtc");function Cf(e,t=he){xr("ec",e,t)}function np(e,t){const n=Te;if(n===null)return e;const r=Er(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];U(o)&&(o={mounted:o,updated:o}),o.deep&&kt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(en(),Le(l,n,8,[e.el,s,e,t]),tn())}}const os="components";function qr(e,t){return Rf(os,e,!0,t)||e}const Sf=Symbol();function Rf(e,t,n=!0,r=!1){const a=Te||he;if(a){const i=a.type;if(e===os){const s=oc(i,!1);if(s&&(s===t||s===Ve(t)||s===gr(Ve(t))))return i}const o=vi(a[e]||i[e],t)||vi(a.appContext[e],t);return!o&&r?i:o}}function vi(e,t){return e&&(e[t]||e[Ve(t)]||e[gr(Ve(t))])}const Vr=e=>e?gs(e)?Er(e)||e.proxy:Vr(e.parent):null,ir=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vr(e.parent),$root:e=>Vr(e.root),$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>Na(e.update)),$nextTick:e=>e.n||(e.n=Xo.bind(e.proxy)),$watch:e=>gf.bind(e)}),If={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ee&&K(r,t))return o[t]=1,r[t];if(a!==ee&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==ee&&K(n,t))return o[t]=4,n[t];Xr&&(o[t]=0)}}const f=ir[t];let d,p;if(f)return t==="$attrs"&&Ae(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&K(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ee&&K(a,t)?(a[t]=n,!0):r!==ee&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&K(e,o)||t!==ee&&K(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(ir,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Xr=!0;function Tf(e){const t=Ma(e),n=e.proxy,r=e.ctx;Xr=!1,t.beforeCreate&&bi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:F,deactivated:C,beforeDestroy:v,beforeUnmount:_,destroyed:M,unmounted:z,render:W,renderTracked:oe,renderTriggered:ce,errorCaptured:ze,serverPrefetch:de,expose:De,inheritAttrs:Xe,components:Ce,directives:Nt,filters:Mt}=t;if(c&&Nf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const Q=o[te];U(Q)&&(r[te]=Q.bind(n))}if(a){const te=a.call(n,n);ue(te)&&(e.data=In(te))}if(Xr=!0,i)for(const te in i){const Q=i[te],Ee=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):Fe,Lt=!U(Q)&&U(Q.set)?Q.set.bind(n):Fe,Ge=le({get:Ee,set:Lt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Be=>Ge.value=Be})}if(s)for(const te in s)ss(s[te],r,n,te);if(l){const te=U(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Q=>{Qn(Q,te[Q])})}f&&bi(f,e,"c");function me(te,Q){H(Q)?Q.forEach(Ee=>te(Ee.bind(n))):Q&&te(Q.bind(n))}if(me(xf,d),me(_f,p),me(wf,g),me(Ef,A),me(vf,F),me(bf,C),me(Cf,ze),me(Pf,oe),me(Of,ce),me(kf,_),me(is,z),me(Af,de),H(De))if(De.length){const te=e.exposed||(e.exposed={});De.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>n[Q],set:Ee=>n[Q]=Ee})})}else e.exposed||(e.exposed={});W&&e.render===Fe&&(e.render=W),Xe!=null&&(e.inheritAttrs=Xe),Ce&&(e.components=Ce),Nt&&(e.directives=Nt)}function Nf(e,t,n=Fe,r=!1){H(e)&&(e=Gr(e));for(const a in e){const i=e[a];let o;ue(i)?"default"in i?o=pt(i.from||a,i.default,!0):o=pt(i.from||a):o=pt(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function bi(e,t,n){Le(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ss(e,t,n,r){const a=r.includes(".")?ns(n,r):()=>n[r];if(be(e)){const i=t[e];U(i)&&un(a,i)}else if(U(e))un(a,e.bind(n));else if(ue(e))if(H(e))e.forEach(i=>ss(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&un(a,i,e)}}function Ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>or(l,c,o,!0)),or(l,t,o)),ue(t)&&i.set(t,l),l}function or(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&or(e,i,n,!0),a&&a.forEach(o=>or(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Mf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Mf={data:yi,props:_t,emits:_t,methods:_t,computed:_t,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:_t,directives:_t,watch:Lf,provide:yi,inject:Ff};function yi(e,t){return t?e?function(){return xe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Ff(e,t){return _t(Gr(e),Gr(t))}function Gr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function _t(e,t){return e?xe(xe(Object.create(null),e),t):t}function Lf(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function jf(e,t,n,r=!1){const a={},i={};nr(i,_r,1),e.propsDefaults=Object.create(null),ls(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $f(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(yr(e.emitsOptions,p))continue;const g=t[p];if(l)if(K(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const A=Ve(p);a[A]=Qr(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{ls(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=Zt(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Qr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!K(t,d)&&!0)&&(delete i[d],c=!0)}c&&et(e,"set","$attrs")}function ls(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Xn(l))continue;const c=t[l];let f;a&&K(a,f=Ve(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:yr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||ee;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Qr(a,l,d,c[d],e,!K(c,d))}}return o}function Qr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[p,g]=fs(d,t,!0);xe(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ue(e)&&r.set(e,Ht),Ht;if(H(i))for(let f=0;f<i.length;f++){const d=Ve(i[f]);xi(d)&&(o[d]=ee)}else if(i)for(const f in i){const d=Ve(f);if(xi(d)){const p=i[f],g=o[d]=H(p)||U(p)?{type:p}:p;if(g){const A=Ei(Boolean,g.type),F=Ei(String,g.type);g[0]=A>-1,g[1]=F<0||A<F,(A>-1||K(g,"default"))&&s.push(d)}}}const c=[o,s];return ue(e)&&r.set(e,c),c}function xi(e){return e[0]!=="$"}function _i(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function wi(e,t){return _i(e)===_i(t)}function Ei(e,t){return H(t)?t.findIndex(n=>wi(n,e)):U(t)&&wi(t,e)?0:-1}const cs=e=>e[0]==="_"||e==="$stable",Fa=e=>H(e)?e.map(We):[We(e)],zf=(e,t,n)=>{if(t._n)return t;const r=ut((...a)=>Fa(t(...a)),n);return r._c=!1,r},us=(e,t,n)=>{const r=e._ctx;for(const a in e){if(cs(a))continue;const i=e[a];if(U(i))t[a]=zf(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},ds=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},Df=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),nr(t,"_",n)):us(t,e.slots={})}else e.slots={},t&&ds(e,t);nr(e.slots,_r,1)},Bf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(xe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,us(t,a)),o=t}else t&&(ds(e,t),o={default:1});if(i)for(const s in a)!cs(s)&&!(s in o)&&delete a[s]};function ms(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Hf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!ue(a)&&(a=null);const i=ms(),o=new Set;let s=!1;const l=i.app={_uid:Uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:lc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=se(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,Er(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Jr(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>Jr(p,t&&(H(t)?t[g]:t),n,r,a));return}if(Jn(r)&&!a)return;const i=r.shapeFlag&4?Er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(be(c)?(f[c]=null,K(d,c)&&(d[c]=null)):ve(c)&&(c.value=null)),U(l))mt(l,s,12,[o,f]);else{const p=be(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const F=p?f[l]:l.value;a?H(F)&&wa(F,i):H(F)?F.includes(i)||F.push(i):p?(f[l]=[i],K(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,K(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=hf;function Yf(e){return Wf(e)}function Wf(e,t){const n=wl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Fe,cloneNode:A,insertStaticContent:F}=e,C=(u,m,h,x=null,y=null,k=null,S=!1,E=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!on(u,m)&&(x=L(u),Pe(u,y,k,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:I}=m;switch(w){case La:v(u,m,h,x);break;case wn:_(u,m,h,x);break;case Tr:u==null&&M(m,h,x,S);break;case Ze:Nt(u,m,h,x,y,k,S,E,O);break;default:I&1?oe(u,m,h,x,y,k,S,E,O):I&6?Mt(u,m,h,x,y,k,S,E,O):(I&64||I&128)&&w.process(u,m,h,x,y,k,S,E,O,ne)}j!=null&&y&&Jr(j,u&&u.ref,k,m||u,!m)},v=(u,m,h,x)=>{if(u==null)r(m.el=s(m.children),h,x);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,h,x)=>{u==null?r(m.el=l(m.children||""),h,x):m.el=u.el},M=(u,m,h,x)=>{[u.el,u.anchor]=F(u.children,m,h,x,u.el,u.anchor)},z=({el:u,anchor:m},h,x)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,x),u=y;r(m,h,x)},W=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},oe=(u,m,h,x,y,k,S,E,O)=>{S=S||m.type==="svg",u==null?ce(m,h,x,y,k,S,E,O):De(u,m,y,k,S,E,O)},ce=(u,m,h,x,y,k,S,E)=>{let O,w;const{type:j,props:I,shapeFlag:$,transition:D,patchFlag:q,dirs:J}=u;if(u.el&&A!==void 0&&q===-1)O=u.el=A(u.el);else{if(O=u.el=o(u.type,k,I&&I.is,I),$&8?f(O,u.children):$&16&&de(u.children,O,null,x,y,k&&j!=="foreignObject",S,E),J&&yt(u,null,x,"created"),I){for(const re in I)re!=="value"&&!Xn(re)&&i(O,re,null,I[re],k,u.children,x,y,P);"value"in I&&i(O,"value",null,I.value),(w=I.onVnodeBeforeMount)&&He(w,x,u)}ze(O,u,u.scopeId,S,x)}J&&yt(u,null,x,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(O),r(O,m,h),((w=I&&I.onVnodeMounted)||Z||J)&&we(()=>{w&&He(w,x,u),Z&&D.enter(O),J&&yt(u,null,x,"mounted")},y)},ze=(u,m,h,x,y)=>{if(h&&g(u,h),x)for(let k=0;k<x.length;k++)g(u,x[k]);if(y){let k=y.subTree;if(m===k){const S=y.vnode;ze(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(u,m,h,x,y,k,S,E,O=0)=>{for(let w=O;w<u.length;w++){const j=u[w]=E?ft(u[w]):We(u[w]);C(null,j,m,h,x,y,k,S,E)}},De=(u,m,h,x,y,k,S)=>{const E=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:j}=m;O|=u.patchFlag&16;const I=u.props||ee,$=m.props||ee;let D;h&&xt(h,!1),(D=$.onVnodeBeforeUpdate)&&He(D,h,m,u),j&&yt(m,u,h,"beforeUpdate"),h&&xt(h,!0);const q=y&&m.type!=="foreignObject";if(w?Xe(u.dynamicChildren,w,E,h,x,q,k):S||Ee(u,m,E,null,h,x,q,k,!1),O>0){if(O&16)Ce(E,m,I,$,h,x,y);else if(O&2&&I.class!==$.class&&i(E,"class",null,$.class,y),O&4&&i(E,"style",I.style,$.style,y),O&8){const J=m.dynamicProps;for(let Z=0;Z<J.length;Z++){const re=J[Z],Se=I[re],jt=$[re];(jt!==Se||re==="value")&&i(E,re,Se,jt,y,u.children,h,x,P)}}O&1&&u.children!==m.children&&f(E,m.children)}else!S&&w==null&&Ce(E,m,I,$,h,x,y);((D=$.onVnodeUpdated)||j)&&we(()=>{D&&He(D,h,m,u),j&&yt(m,u,h,"updated")},x)},Xe=(u,m,h,x,y,k,S)=>{for(let E=0;E<m.length;E++){const O=u[E],w=m[E],j=O.el&&(O.type===Ze||!on(O,w)||O.shapeFlag&70)?d(O.el):h;C(O,w,j,null,x,y,k,S,!0)}},Ce=(u,m,h,x,y,k,S)=>{if(h!==x){for(const E in x){if(Xn(E))continue;const O=x[E],w=h[E];O!==w&&E!=="value"&&i(u,E,w,O,S,m.children,y,k,P)}if(h!==ee)for(const E in h)!Xn(E)&&!(E in x)&&i(u,E,h[E],null,S,m.children,y,k,P);"value"in x&&i(u,"value",h.value,x.value)}},Nt=(u,m,h,x,y,k,S,E,O)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:$,slotScopeIds:D}=m;D&&(E=E?E.concat(D):D),u==null?(r(w,h,x),r(j,h,x),de(m.children,h,j,y,k,S,E,O)):I>0&&I&64&&$&&u.dynamicChildren?(Xe(u.dynamicChildren,$,h,y,k,S,E),(m.key!=null||y&&m===y.subTree)&&ps(u,m,!0)):Ee(u,m,h,j,y,k,S,E,O)},Mt=(u,m,h,x,y,k,S,E,O)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?y.ctx.activate(m,h,x,S,O):Ft(m,h,x,y,k,S,O):me(u,m,O)},Ft=(u,m,h,x,y,k,S)=>{const E=u.component=tc(u,x,y);if(rs(u)&&(E.ctx.renderer=ne),nc(E),E.asyncDep){if(y&&y.registerDep(E,te),!u.el){const O=E.subTree=se(wn);_(null,O,m,h)}return}te(E,u,m,h,y,k,S)},me=(u,m,h)=>{const x=m.component=u.component;if(df(u,m,h))if(x.asyncDep&&!x.asyncResolved){Q(x,m,h);return}else x.next=m,of(x.update),x.update();else m.el=u.el,x.vnode=m},te=(u,m,h,x,y,k,S)=>{const E=()=>{if(u.isMounted){let{next:j,bu:I,u:$,parent:D,vnode:q}=u,J=j,Z;xt(u,!1),j?(j.el=q.el,Q(u,j,S)):j=q,I&&Gn(I),(Z=j.props&&j.props.onVnodeBeforeUpdate)&&He(Z,D,j,q),xt(u,!0);const re=Ir(u),Se=u.subTree;u.subTree=re,C(Se,re,d(Se.el),L(Se),u,y,k),j.el=re.el,J===null&&mf(u,re.el),$&&we($,y),(Z=j.props&&j.props.onVnodeUpdated)&&we(()=>He(Z,D,j,q),y)}else{let j;const{el:I,props:$}=m,{bm:D,m:q,parent:J}=u,Z=Jn(m);if(xt(u,!1),D&&Gn(D),!Z&&(j=$&&$.onVnodeBeforeMount)&&He(j,J,m),xt(u,!0),I&&B){const re=()=>{u.subTree=Ir(u),B(I,u.subTree,u,y,null)};Z?m.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=Ir(u);C(null,re,h,x,u,y,k),m.el=re.el}if(q&&we(q,y),!Z&&(j=$&&$.onVnodeMounted)){const re=m;we(()=>He(j,J,re),y)}(m.shapeFlag&256||J&&Jn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&we(u.a,y),u.isMounted=!0,m=h=x=null}},O=u.effect=new Oa(E,()=>Na(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,xt(u,!0),w()},Q=(u,m,h)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,$f(u,m.props,x,h),Bf(u,m.children,h),en(),pi(),tn()},Ee=(u,m,h,x,y,k,S,E,O=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,I=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){Ge(w,I,h,x,y,k,S,E,O);return}else if($&256){Lt(w,I,h,x,y,k,S,E,O);return}}D&8?(j&16&&P(w,y,k),I!==w&&f(h,I)):j&16?D&16?Ge(w,I,h,x,y,k,S,E,O):P(w,y,k,!0):(j&8&&f(h,""),D&16&&de(I,h,x,y,k,S,E,O))},Lt=(u,m,h,x,y,k,S,E,O)=>{u=u||Ht,m=m||Ht;const w=u.length,j=m.length,I=Math.min(w,j);let $;for($=0;$<I;$++){const D=m[$]=O?ft(m[$]):We(m[$]);C(u[$],D,h,null,y,k,S,E,O)}w>j?P(u,y,k,!0,!1,I):de(m,h,x,y,k,S,E,O,I)},Ge=(u,m,h,x,y,k,S,E,O)=>{let w=0;const j=m.length;let I=u.length-1,$=j-1;for(;w<=I&&w<=$;){const D=u[w],q=m[w]=O?ft(m[w]):We(m[w]);if(on(D,q))C(D,q,h,null,y,k,S,E,O);else break;w++}for(;w<=I&&w<=$;){const D=u[I],q=m[$]=O?ft(m[$]):We(m[$]);if(on(D,q))C(D,q,h,null,y,k,S,E,O);else break;I--,$--}if(w>I){if(w<=$){const D=$+1,q=D<j?m[D].el:x;for(;w<=$;)C(null,m[w]=O?ft(m[w]):We(m[w]),h,q,y,k,S,E,O),w++}}else if(w>$)for(;w<=I;)Pe(u[w],y,k,!0),w++;else{const D=w,q=w,J=new Map;for(w=q;w<=$;w++){const ke=m[w]=O?ft(m[w]):We(m[w]);ke.key!=null&&J.set(ke.key,w)}let Z,re=0;const Se=$-q+1;let jt=!1,ri=0;const an=new Array(Se);for(w=0;w<Se;w++)an[w]=0;for(w=D;w<=I;w++){const ke=u[w];if(re>=Se){Pe(ke,y,k,!0);continue}let Ue;if(ke.key!=null)Ue=J.get(ke.key);else for(Z=q;Z<=$;Z++)if(an[Z-q]===0&&on(ke,m[Z])){Ue=Z;break}Ue===void 0?Pe(ke,y,k,!0):(an[Ue-q]=w+1,Ue>=ri?ri=Ue:jt=!0,C(ke,m[Ue],h,null,y,k,S,E,O),re++)}const ai=jt?Kf(an):Ht;for(Z=ai.length-1,w=Se-1;w>=0;w--){const ke=q+w,Ue=m[ke],ii=ke+1<j?m[ke+1].el:x;an[w]===0?C(null,Ue,h,ii,y,k,S,E,O):jt&&(Z<0||w!==ai[Z]?Be(Ue,h,ii,2):Z--)}}},Be=(u,m,h,x,y=null)=>{const{el:k,type:S,transition:E,children:O,shapeFlag:w}=u;if(w&6){Be(u.component.subTree,m,h,x);return}if(w&128){u.suspense.move(m,h,x);return}if(w&64){S.move(u,m,h,ne);return}if(S===Ze){r(k,m,h);for(let I=0;I<O.length;I++)Be(O[I],m,h,x);r(u.anchor,m,h);return}if(S===Tr){z(u,m,h);return}if(x!==2&&w&1&&E)if(x===0)E.beforeEnter(k),r(k,m,h),we(()=>E.enter(k),y);else{const{leave:I,delayLeave:$,afterLeave:D}=E,q=()=>r(k,m,h),J=()=>{I(k,()=>{q(),D&&D()})};$?$(k,q,J):J()}else r(k,m,h)},Pe=(u,m,h,x=!1,y=!1)=>{const{type:k,props:S,ref:E,children:O,dynamicChildren:w,shapeFlag:j,patchFlag:I,dirs:$}=u;if(E!=null&&Jr(E,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,q=!Jn(u);let J;if(q&&(J=S&&S.onVnodeBeforeUnmount)&&He(J,m,u),j&6)N(u.component,h,x);else{if(j&128){u.suspense.unmount(h,x);return}D&&yt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,y,ne,x):w&&(k!==Ze||I>0&&I&64)?P(w,m,h,!1,!0):(k===Ze&&I&384||!y&&j&16)&&P(O,m,h),x&&rn(u)}(q&&(J=S&&S.onVnodeUnmounted)||D)&&we(()=>{J&&He(J,m,u),D&&yt(u,null,m,"unmounted")},h)},rn=u=>{const{type:m,el:h,anchor:x,transition:y}=u;if(m===Ze){b(h,x);return}if(m===Tr){W(u);return}const k=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,O=()=>S(h,k);E?E(u.el,k,O):O()}else k()},b=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},N=(u,m,h)=>{const{bum:x,scope:y,update:k,subTree:S,um:E}=u;x&&Gn(x),y.stop(),k&&(k.active=!1,Pe(S,u,m,h)),E&&we(E,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,h,x=!1,y=!1,k=0)=>{for(let S=k;S<u.length;S++)Pe(u[S],m,h,x,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),X=(u,m,h)=>{u==null?m._vnode&&Pe(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),pi(),Qo(),m._vnode=u},ne={p:C,um:Pe,m:Be,r:rn,mt:Ft,mc:de,pc:Ee,pbc:Xe,n:L,o:e};let Y,B;return t&&([Y,B]=t(ne)),{render:X,hydrate:Y,createApp:Hf(X,Y)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ps(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||ps(o,s))}}function Kf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const qf=e=>e.__isTeleport,Ze=Symbol(void 0),La=Symbol(void 0),wn=Symbol(void 0),Tr=Symbol(void 0),dn=[];let Ne=null;function ja(e=!1){dn.push(Ne=e?null:[])}function Vf(){dn.pop(),Ne=dn[dn.length-1]||null}let En=1;function ki(e){En+=e}function Xf(e){return e.dynamicChildren=En>0?Ne||Ht:null,Vf(),En>0&&Ne&&Ne.push(e),e}function $a(e,t,n,r,a,i){return Xf(je(e,t,n,r,a,i,!0))}function Zr(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const _r="__vInternal",hs=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?be(e)||ve(e)||U(e)?{i:Te,r:e,k:t,f:!!n}:e:null;function je(e,t=null,n=null,r=0,a=null,i=e===Ze?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hs(t),ref:t&&Zn(t),scopeId:es,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(za(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),En>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const se=Gf;function Gf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sf)&&(e=wn),Zr(e)){const s=Vt(e,t,!0);return n&&za(s,n),En>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(sc(e)&&(e=e.__vccOpts),t){t=Qf(t);let{class:s,style:l}=t;s&&!be(s)&&(t.class=xa(s)),ue(l)&&(Bo(l)&&!H(l)&&(l=xe({},l)),t.style=ya(l))}const o=be(e)?1:pf(e)?128:qf(e)?64:ue(e)?4:U(e)?2:0;return je(e,t,n,r,a,o,i,!0)}function Qf(e){return e?Bo(e)||_r in e?xe({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Jf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&hs(s),ref:t&&t.ref?n&&a?H(a)?a.concat(Zn(t)):[a,Zn(t)]:Zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ze?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor}}function wr(e=" ",t=0){return se(La,null,e,t)}function We(e){return e==null||typeof e=="boolean"?se(wn):H(e)?se(Ze,null,e.slice()):typeof e=="object"?ft(e):se(La,null,String(e))}function ft(e){return e.el===null||e.memo?e:Vt(e)}function za(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),za(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(_r in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=xa([t.class,r.class]));else if(a==="style")t.style=ya([t.style,r.style]);else if(mr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){Le(e,t,7,[n,r])}const Zf=ms();let ec=0;function tc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zf,i={uid:ec++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new El(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fs(r,a),emitsOptions:Zo(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ff.bind(null,i),e.ce&&e.ce(i),i}let he=null;const Xt=e=>{he=e,e.scope.on()},St=()=>{he&&he.scope.off(),he=null};function gs(e){return e.vnode.shapeFlag&4}let kn=!1;function nc(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=gs(e);jf(e,n,a,t),Df(e,r);const i=a?rc(e,t):void 0;return kn=!1,i}function rc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Uo(new Proxy(e.ctx,If));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ic(e):null;Xt(e),en();const i=mt(r,e,0,[e.props,a]);if(tn(),St(),So(i)){if(i.then(St,St),t)return i.then(o=>{Ai(e,o,t)}).catch(o=>{br(o,e,0)});e.asyncDep=i}else Ai(e,i,t)}else vs(e,t)}function Ai(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Ko(t)),vs(e,n)}let Oi;function vs(e,t,n){const r=e.type;if(!e.render){if(!t&&Oi&&!r.render){const a=r.template||Ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=xe(xe({isCustomElement:i,delimiters:s},o),l);r.render=Oi(a,c)}}e.render=r.render||Fe}Xt(e),en(),Tf(e),tn(),St()}function ac(e){return new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}})}function ic(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ac(e))},slots:e.slots,emit:e.emit,expose:t}}function Er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ko(Uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ir)return ir[n](e)}}))}function oc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function sc(e){return U(e)&&"__vccOpts"in e}const le=(e,t)=>nf(e,t,kn);function kr(e,t,n){const r=arguments.length;return r===2?ue(t)&&!H(t)?Zr(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zr(n)&&(n=[n]),se(e,t,n))}const lc="3.2.39",fc="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Pi=Et&&Et.createElement("template"),cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(fc,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function uc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function dc(e,t,n){const r=e.style,a=be(n);if(n&&!a){for(const i in n)ea(r,i,n[i]);if(t&&!be(t))for(const i in t)n[i]==null&&ea(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ci=/\s*!important$/;function ea(e,t,n){if(H(n))n.forEach(r=>ea(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mc(e,t);Ci.test(n)?e.setProperty(Zt(r),n.replace(Ci,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],Nr={};function mc(e,t){const n=Nr[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=gr(r);for(let a=0;a<Si.length;a++){const i=Si[a]+r;if(i in e)return Nr[t]=i}return t}const Ri="http://www.w3.org/1999/xlink";function pc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n);else{const i=fl(t);n==null||i&&!Co(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Co(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[bs,gc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ta=0;const vc=Promise.resolve(),bc=()=>{ta=0},yc=()=>ta||(vc.then(bc),ta=bs());function zt(e,t,n,r){e.addEventListener(t,n,r)}function xc(e,t,n,r){e.removeEventListener(t,n,r)}function _c(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=wc(t);if(r){const c=i[t]=Ec(r,a);zt(e,s,c,l)}else o&&(xc(e,s,o,l),i[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function wc(e){let t;if(Ii.test(e)){t={};let r;for(;r=e.match(Ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}function Ec(e,t){const n=r=>{const a=r.timeStamp||bs();(gc||a>=n.attached-1)&&Le(kc(r,n.value),t,5,[r])};return n.value=e,n.attached=yc(),n}function kc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ti=/^on[a-z]/,Ac=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?uc(e,r,a):t==="style"?dc(e,n,r):mr(t)?_a(t)||_c(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Oc(e,t,r,a))?hc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pc(e,t,r,a))};function Oc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ti.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ti.test(t)&&be(n)?!1:t in e}const Ni=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Gn(t,n):t};function Pc(e){e.target.composing=!0}function Mi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rp={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ni(a);const i=r||a.props&&a.props.type==="number";zt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Br(s)),e._assign(s)}),n&&zt(e,"change",()=>{e.value=e.value.trim()}),t||(zt(e,"compositionstart",Pc),zt(e,"compositionend",Mi),zt(e,"change",Mi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ni(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Br(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Cc=xe({patchProp:Ac},cc);let Fi;function Sc(){return Fi||(Fi=Yf(Cc))}const Rc=(...e)=>{const t=Sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ic(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ic(e){return be(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function Tc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Mr(e,t){const n={};for(const r in t){const a=t[r];n[r]=$e(a)?a.map(e):e(a)}return n}const mn=()=>{},$e=Array.isArray,Nc=/\/$/,Mc=e=>e.replace(Nc,"");function Fr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=$c(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Fc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Lc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&ys(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ys(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jc(e[n],t[n]))return!1;return!0}function jc(e,t){return $e(e)?ji(e,t):$e(t)?ji(t,e):e===t}function ji(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $c(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var pn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pn||(pn={}));function zc(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Mc(e)}const Dc=/^[^#]+#/;function Bc(e,t){return e.replace(Dc,"#")+t}function Uc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Uc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const na=new Map;function Yc(e,t){na.set(e,t)}function Wc(e){const t=na.get(e);return na.delete(e),t}let Kc=()=>location.protocol+"//"+location.host;function xs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function qc(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=xs(e,location),A=n.value,F=t.value;let C=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}C=F?p.position-F.position:0}else r(g);a.forEach(v=>{v(n.value,A,{delta:C,type:An.pop,direction:C?C>0?pn.forward:pn.back:pn.unknown})})};function l(){o=n.value}function c(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function f(){const{history:p}=window;!p.state||p.replaceState(G({},p.state,{scroll:Ar()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function zi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ar():null}}function Vc(e){const{history:t,location:n}=window,r={value:xs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Kc()+e+l;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(l,c){const f=G({},t.state,zi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=G({},a.value,t.state,{forward:l,scroll:Ar()});i(f.current,f,!0);const d=G({},zi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Xc(e){e=zc(e);const t=Vc(e),n=qc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:Bc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Gc(e){return typeof e=="string"||e&&typeof e=="object"}function _s(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ws=Symbol("");var Di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Di||(Di={}));function Qt(e,t){return G(new Error,{type:e,[ws]:!0},t)}function Qe(e,t){return e instanceof Error&&ws in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",Qc={sensitive:!1,strict:!1,start:!0,end:!0},Jc=/[.+*?^${}()[\]/\\]/g;function Zc(e,t){const n=G({},Qc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(Jc,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:F,optional:C,regexp:v}=p;i.push({name:A,repeatable:F,optional:C});const _=v||Bi;if(_!==Bi){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let M=F?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(M=C&&c.length<2?`(?:/${M})`:"/"+M),C&&(M+="?"),a+=M,g+=20,C&&(g+=-8),F&&(g+=-20),_===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:A,repeatable:F,optional:C}=g,v=A in c?c[A]:"";if($e(v)&&!F)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=$e(v)?v.join("/"):v;if(!_)if(C)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);f+=_}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function eu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function tu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=eu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nu={type:0,value:""},ru=/[a-zA-Z0-9_]/;function au(e){if(!e)return[[]];if(e==="/")return[[nu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:ru.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function iu(e,t,n){const r=Zc(au(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function ou(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,A=su(f);A.aliasOf=p&&p.record;const F=Wi(t,f),C=[A];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of M)C.push(G({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let v,_;for(const M of C){const{path:z}=M;if(d&&z[0]!=="/"){const W=d.record.path,oe=W[W.length-1]==="/"?"":"/";M.path=d.record.path+(z&&oe+z)}if(v=iu(M,d,F),p?p.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),g&&f.name&&!Yi(v)&&o(f.name)),A.children){const W=A.children;for(let oe=0;oe<W.length;oe++)i(W[oe],v,p&&p.children[oe])}p=p||v,l(v)}return _?()=>{o(_)}:mn}function o(f){if(_s(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&tu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Es(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!Yi(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},A,F;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Qt(1,{location:f});F=p.record.name,g=G(Hi(d.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),f.params&&Hi(f.params,p.keys.map(_=>_.name))),A=p.stringify(g)}else if("path"in f)A=f.path,p=n.find(_=>_.re.test(A)),p&&(g=p.parse(A),F=p.record.name);else{if(p=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!p)throw Qt(1,{location:f,currentLocation:d});F=p.record.name,g=G({},d.params,f.params),A=p.stringify(g)}const C=[];let v=p;for(;v;)C.unshift(v.record),v=v.parent;return{name:F,path:A,params:g,matched:C,meta:fu(C)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Hi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function su(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:lu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function lu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Es(e,t){return t.children.some(n=>n===e||Es(e,n))}const ks=/#/g,cu=/&/g,uu=/\//g,du=/=/g,mu=/\?/g,As=/\+/g,pu=/%5B/g,hu=/%5D/g,Os=/%5E/g,gu=/%60/g,Ps=/%7B/g,vu=/%7C/g,Cs=/%7D/g,bu=/%20/g;function Da(e){return encodeURI(""+e).replace(vu,"|").replace(pu,"[").replace(hu,"]")}function yu(e){return Da(e).replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function ra(e){return Da(e).replace(As,"%2B").replace(bu,"+").replace(ks,"%23").replace(cu,"%26").replace(gu,"`").replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function xu(e){return ra(e).replace(du,"%3D")}function _u(e){return Da(e).replace(ks,"%23").replace(mu,"%3F")}function wu(e){return e==null?"":_u(e).replace(uu,"%2F")}function sr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Eu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(As," "),o=i.indexOf("="),s=sr(o<0?i:i.slice(0,o)),l=o<0?null:sr(i.slice(o+1));if(s in t){let c=t[s];$e(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Ki(e){let t="";for(let n in e){const r=e[n];if(n=xu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&ra(i)):[r&&ra(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ku(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Au=Symbol(""),qi=Symbol(""),Ba=Symbol(""),Ss=Symbol(""),aa=Symbol("");function sn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Qt(4,{from:n,to:t})):d instanceof Error?s(d):Gc(d)?s(Qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Lr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ou(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ct(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Tc(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ct(p,n,r,i,o)()}))}}return a}function Ou(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=pt(Ba),n=pt(Ss),r=le(()=>t.resolve(Ct(e.to))),a=le(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Gt.bind(null,f));if(p>-1)return p;const g=Xi(l[c-2]);return c>1&&Xi(f)===g&&d[d.length-1].path!==g?d.findIndex(Gt.bind(null,l[c-2])):p}),i=le(()=>a.value>-1&&Ru(n.params,r.value.params)),o=le(()=>a.value>-1&&a.value===n.matched.length-1&&ys(n.params,r.value.params));function s(l={}){return Su(l)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(mn):Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Pu=Tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=In(Vi(e)),{options:r}=pt(Ba),a=le(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:kr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Cu=Pu;function Su(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ru(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!$e(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e!=null?e:t!=null?t:n,Iu=Tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=pt(aa),a=le(()=>e.route||r.value),i=pt(qi,0),o=le(()=>{let c=Ct(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=le(()=>a.value.matched[o.value]);Qn(qi,le(()=>o.value+1)),Qn(Au,s),Qn(aa,a);const l=Ql();return un(()=>[l.value,s.value,e.name],([c,f,d],[p,g,A])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Gt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(F=>F(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=s.value,p=d&&d.components[f];if(!p)return Qi(n.default,{Component:p,route:c});const g=d.props[f],A=g?g===!0?c.params:typeof g=="function"?g(c):g:null,C=kr(p,G({},A,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Qi(n.default,{Component:C,route:c})||C}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Rs=Iu;function Tu(e){const t=ou(e.routes,e),n=e.parseQuery||Eu,r=e.stringifyQuery||Ki,a=e.history,i=sn(),o=sn(),s=sn(),l=Jl(st);let c=st;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Mr.bind(null,b=>""+b),d=Mr.bind(null,wu),p=Mr.bind(null,sr);function g(b,N){let P,L;return _s(b)?(P=t.getRecordMatcher(b),L=N):L=b,t.addRoute(L,P)}function A(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function F(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function v(b,N){if(N=G({},N||l.value),typeof b=="string"){const B=Fr(n,b,N.path),u=t.resolve({path:B.path},N),m=a.createHref(B.fullPath);return G(B,u,{params:p(u.params),hash:sr(B.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=G({},b,{path:Fr(n,b.path,N.path).path});else{const B=G({},b.params);for(const u in B)B[u]==null&&delete B[u];P=G({},b,{params:d(b.params)}),N.params=d(N.params)}const L=t.resolve(P,N),X=b.hash||"";L.params=f(p(L.params));const ne=Fc(r,G({},b,{hash:yu(X),path:L.path})),Y=a.createHref(ne);return G({fullPath:ne,hash:X,query:r===Ki?ku(b.query):b.query||{}},L,{redirectedFrom:void 0,href:Y})}function _(b){return typeof b=="string"?Fr(n,b,l.value.path):G({},b)}function M(b,N){if(c!==b)return Qt(8,{from:N,to:b})}function z(b){return ce(b)}function W(b){return z(G(_(b),{replace:!0}))}function oe(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),G({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function ce(b,N){const P=c=v(b),L=l.value,X=b.state,ne=b.force,Y=b.replace===!0,B=oe(P);if(B)return ce(G(_(B),{state:typeof B=="object"?G({},X,B.state):X,force:ne,replace:Y}),N||P);const u=P;u.redirectedFrom=N;let m;return!ne&&Lc(r,L,P)&&(m=Qt(16,{to:u,from:L}),Lt(L,L,!0,!1)),(m?Promise.resolve(m):de(u,L)).catch(h=>Qe(h)?Qe(h,2)?h:Ee(h):te(h,u,L)).then(h=>{if(h){if(Qe(h,2))return ce(G({replace:Y},_(h.to),{state:typeof h.to=="object"?G({},X,h.to.state):X,force:ne}),N||u)}else h=Xe(u,L,!0,Y,X);return De(u,L,h),h})}function ze(b,N){const P=M(b,N);return P?Promise.reject(P):Promise.resolve()}function de(b,N){let P;const[L,X,ne]=Nu(b,N);P=Lr(L.reverse(),"beforeRouteLeave",b,N);for(const B of L)B.leaveGuards.forEach(u=>{P.push(ct(u,b,N))});const Y=ze.bind(null,b,N);return P.push(Y),$t(P).then(()=>{P=[];for(const B of i.list())P.push(ct(B,b,N));return P.push(Y),$t(P)}).then(()=>{P=Lr(X,"beforeRouteUpdate",b,N);for(const B of X)B.updateGuards.forEach(u=>{P.push(ct(u,b,N))});return P.push(Y),$t(P)}).then(()=>{P=[];for(const B of b.matched)if(B.beforeEnter&&!N.matched.includes(B))if($e(B.beforeEnter))for(const u of B.beforeEnter)P.push(ct(u,b,N));else P.push(ct(B.beforeEnter,b,N));return P.push(Y),$t(P)}).then(()=>(b.matched.forEach(B=>B.enterCallbacks={}),P=Lr(ne,"beforeRouteEnter",b,N),P.push(Y),$t(P))).then(()=>{P=[];for(const B of o.list())P.push(ct(B,b,N));return P.push(Y),$t(P)}).catch(B=>Qe(B,8)?B:Promise.reject(B))}function De(b,N,P){for(const L of s.list())L(b,N,P)}function Xe(b,N,P,L,X){const ne=M(b,N);if(ne)return ne;const Y=N===st,B=Dt?history.state:{};P&&(L||Y?a.replace(b.fullPath,G({scroll:Y&&B&&B.scroll},X)):a.push(b.fullPath,X)),l.value=b,Lt(b,N,P,Y),Ee()}let Ce;function Nt(){Ce||(Ce=a.listen((b,N,P)=>{if(!rn.listening)return;const L=v(b),X=oe(L);if(X){ce(G(X,{replace:!0}),L).catch(mn);return}c=L;const ne=l.value;Dt&&Yc($i(ne.fullPath,P.delta),Ar()),de(L,ne).catch(Y=>Qe(Y,12)?Y:Qe(Y,2)?(ce(Y.to,L).then(B=>{Qe(B,20)&&!P.delta&&P.type===An.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),te(Y,L,ne))).then(Y=>{Y=Y||Xe(L,ne,!1),Y&&(P.delta&&!Qe(Y,8)?a.go(-P.delta,!1):P.type===An.pop&&Qe(Y,20)&&a.go(-1,!1)),De(L,ne,Y)}).catch(mn)}))}let Mt=sn(),Ft=sn(),me;function te(b,N,P){Ee(b);const L=Ft.list();return L.length?L.forEach(X=>X(b,N,P)):console.error(b),Promise.reject(b)}function Q(){return me&&l.value!==st?Promise.resolve():new Promise((b,N)=>{Mt.add([b,N])})}function Ee(b){return me||(me=!b,Nt(),Mt.list().forEach(([N,P])=>b?P(b):N()),Mt.reset()),b}function Lt(b,N,P,L){const{scrollBehavior:X}=e;if(!Dt||!X)return Promise.resolve();const ne=!P&&Wc($i(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Xo().then(()=>X(b,N,ne)).then(Y=>Y&&Hc(Y)).catch(Y=>te(Y,b,N))}const Ge=b=>a.go(b);let Be;const Pe=new Set,rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:C,getRoutes:F,resolve:v,options:e,push:z,replace:W,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Ft.add,isReady:Q,install(b){const N=this;b.component("RouterLink",Cu),b.component("RouterView",Rs),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(l)}),Dt&&!Be&&l.value===st&&(Be=!0,z(a.location).catch(X=>{}));const P={};for(const X in st)P[X]=le(()=>l.value[X]);b.provide(Ba,N),b.provide(Ss,In(P)),b.provide(aa,l);const L=b.unmount;Pe.add(b),b.unmount=function(){Pe.delete(b),Pe.size<1&&(c=st,Ce&&Ce(),Ce=null,l.value=st,Be=!1,me=!1),L()}}};return rn}function $t(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Nu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Gt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Gt(c,l))||a.push(l))}return[n,r,a]}const Mu={class:"w-screen h-screen bg-zinc-800"},Fu=Tt({__name:"App",setup(e){return(t,n)=>(ja(),$a("div",Mu,[se(Ct(Rs))]))}});const Is=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Lu=Is(Fu,[["__scopeId","data-v-5928a575"]]),ju="modulepreload",$u=function(e){return"/"+e},Ji={},Zi=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=$u(a),a in Ji)return;Ji[a]=!0;const i=a.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":ju,i||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),i)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},zu={},Du={class:"grid absolute bottom-1 grid-cols-3 place-content-evenly"},Bu={class:"py-2 px-4 my-10 mx-5 bg-white rounded-md text-zinc-800"},Uu=wr("Back"),Hu={class:"py-2 px-4 my-10 mx-5 bg-white rounded-md text-zinc-800"},Yu=wr("Home"),Wu={class:"py-2 px-4 my-10 mx-5 bg-white rounded-md text-zinc-800"},Ku=wr("Forward");function qu(e,t){const n=qr("router-link");return ja(),$a("div",Du,[je("button",Bu,[se(n,{to:"/"},{default:ut(()=>[Uu]),_:1})]),je("button",Hu,[se(n,{to:"/"},{default:ut(()=>[Yu]),_:1})]),je("button",Wu,[se(n,{to:"/"},{default:ut(()=>[Ku]),_:1})])])}const Vu=Is(zu,[["render",qu]]),Xu={class:"flex flex-col justify-center items-center mx-auto w-2/3"},Gu=je("h1",{class:"my-10 text-3xl text-white"},"Resonator",-1),Qu={class:"grid grid-cols-4 mx-auto w-11/12 md:grid-cols-4 md:w-2/3"},Ju=je("div",{class:"text-sm text-center text-white font-OpenSans"},"YouTube",-1),Zu=je("div",{class:"text-sm text-center text-white font-OpenSans"},"YouTube",-1),ed=je("div",{class:"text-sm text-center text-white font-OpenSans"},"Spotify",-1),td=je("div",{class:"text-sm text-center text-white font-OpenSans"},"Spotify",-1),nd=Tt({__name:"Home",setup(e){return(t,n)=>{const r=qr("font-awesome-icon"),a=qr("router-link");return ja(),$a("div",Xu,[Gu,je("div",Qu,[se(a,{to:"/youtube"},{default:ut(()=>[se(r,{class:"hover:text-[#FF0000] icons",icon:"fa-brands fa-youtube",title:"YouTube"}),Ju]),_:1}),se(a,{to:"/youtube"},{default:ut(()=>[se(r,{class:"hover:text-[#FF0000] icons",icon:"fa-brands fa-youtube",title:"YouTube"}),Zu]),_:1}),se(a,{to:"/spotify"},{default:ut(()=>[se(r,{class:"icons hover:text-[#1DB954]",icon:"fa-brands fa-spotify",title:"Spotify"}),ed]),_:1}),se(a,{to:"/spotify"},{default:ut(()=>[se(r,{class:"icons hover:text-[#1DB954]",icon:"fa-brands fa-spotify",title:"Spotify"}),td]),_:1})]),se(Vu)])}}}),rd=Tu({history:Xc("/"),routes:[{path:"/",name:"home",component:nd},{path:"/youtube",name:"youtube",component:()=>Zi(()=>import("./Youtube.9280ead4.js"),["assets/Youtube.9280ead4.js","assets/index.2bd8ddc8.js"])},{path:"/spotify",name:"spotify",component:()=>Zi(()=>import("./Spotify.89809ae3.js"),["assets/Spotify.89809ae3.js","assets/index.2bd8ddc8.js"])}]});function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function ad(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function id(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){return sd(e)||fd(e,t)||Ts(e,t)||ud()}function Tn(e){return od(e)||ld(e)||Ts(e)||cd()}function od(e){if(Array.isArray(e))return ia(e)}function sd(e){if(Array.isArray(e))return e}function ld(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ts(e,t){if(!!e){if(typeof e=="string")return ia(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ia(e,t)}}function ia(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ud(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Ha={},Ns={},Ms=null,Fs={mark:no,measure:no};try{typeof window<"u"&&(Ha=window),typeof document<"u"&&(Ns=document),typeof MutationObserver<"u"&&(Ms=MutationObserver),typeof performance<"u"&&(Fs=performance)}catch{}var dd=Ha.navigator||{},ro=dd.userAgent,ao=ro===void 0?"":ro,gt=Ha,ie=Ns,io=Ms,Dn=Fs;gt.document;var it=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Ls=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Bn,Un,Hn,Yn,Wn,tt="___FONT_AWESOME___",oa=16,js="fa",$s="svg-inline--fa",Rt="data-fa-i2svg",sa="data-fa-pseudo-element",md="data-fa-pseudo-element-pending",Ya="data-prefix",Wa="data-icon",oo="fontawesome-i2svg",pd="async",hd=["HTML","HEAD","STYLE","SCRIPT"],zs=function(){try{return!0}catch{return!1}}(),ae="classic",fe="sharp",Ka=[ae,fe];function Nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var On=Nn((Bn={},pe(Bn,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Bn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Bn)),Pn=Nn((Un={},pe(Un,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Un,fe,{solid:"fass"}),Un)),Cn=Nn((Hn={},pe(Hn,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Hn,fe,{fass:"fa-solid"}),Hn)),gd=Nn((Yn={},pe(Yn,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Yn,fe,{"fa-solid":"fass"}),Yn)),vd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ds="fa-layers-text",bd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yd=Nn((Wn={},pe(Wn,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Wn,fe,{900:"fass"}),Wn)),Bs=[1,2,3,4,5,6,7,8,9,10],xd=Bs.concat([11,12,13,14,15,16,17,18,19,20]),_d=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(Pn[ae]).map(Sn.add.bind(Sn));Object.keys(Pn[fe]).map(Sn.add.bind(Sn));var wd=[].concat(Ka,Tn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Bs.map(function(e){return"".concat(e,"x")})).concat(xd.map(function(e){return"w-".concat(e)})),hn=gt.FontAwesomeConfig||{};function Ed(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function kd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var Ad=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ad.forEach(function(e){var t=Ua(e,2),n=t[0],r=t[1],a=kd(Ed(n));a!=null&&(hn[r]=a)})}var Us={styleDefault:"solid",familyDefault:"classic",cssPrefix:js,replacementClass:$s,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Jt=R(R({},Us),hn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var T={};Object.keys(Us).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Jt[e]=n,gn.forEach(function(r){return r(T)})},get:function(){return Jt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,gn.forEach(function(n){return n(T)})},get:function(){return Jt.cssPrefix}});gt.FontAwesomeConfig=T;var gn=[];function Od(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var lt=oa,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pd(e){if(!(!e||!it)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var Cd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=Cd[Math.random()*62|0];return t}function nn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qa(e){return e.classList?nn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hs(e[n]),'" ')},"").trim()}function Or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Va(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function Rd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Id(e){var t=e.transform,n=e.width,r=n===void 0?oa:n,a=e.height,i=a===void 0?oa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ls?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Td=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
    transition-delay: 0s;
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
}`;function Ys(){var e=js,t=$s,n=T.cssPrefix,r=T.replacementClass,a=Td;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var so=!1;function jr(){T.autoAddCss&&!so&&(Pd(Ys()),so=!0)}var Nd={mixout:function(){return{dom:{css:Ys,insertCss:jr}}},hooks:function(){return{beforeDOMElementCreation:function(){jr()},beforeI2svg:function(){jr()}}}},nt=gt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var Me=nt[tt],Ws=[],Md=function e(){ie.removeEventListener("DOMContentLoaded",e),fr=1,Ws.map(function(t){return t()})},fr=!1;it&&(fr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),fr||ie.addEventListener("DOMContentLoaded",Md));function Fd(e){!it||(fr?setTimeout(e,0):Ws.push(e))}function Mn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Hs(e):"<".concat(t," ").concat(Sd(r),">").concat(i.map(Mn).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ld=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ld(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function jd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function la(e){var t=jd(e);return t.length===1?t[0].toString(16):null}function $d(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fo(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,fo(t)):Me.styles[e]=R(R({},Me.styles[e]||{}),i),e==="fas"&&fa("fa",t)}var Kn,qn,Vn,Bt=Me.styles,zd=Me.shims,Dd=(Kn={},pe(Kn,ae,Object.values(Cn[ae])),pe(Kn,fe,Object.values(Cn[fe])),Kn),Xa=null,Ks={},qs={},Vs={},Xs={},Gs={},Bd=(qn={},pe(qn,ae,Object.keys(On[ae])),pe(qn,fe,Object.keys(On[fe])),qn);function Ud(e){return~wd.indexOf(e)}function Hd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ud(a)?a:null}var Qs=function(){var t=function(i){return $r(Bt,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};Ks=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),qs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Gs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Bt||T.autoFetchSvg,r=$r(zd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vs=r.names,Xs=r.unicodes,Xa=Pr(T.styleDefault,{family:T.familyDefault})};Od(function(e){Xa=Pr(e.styleDefault,{family:T.familyDefault})});Qs();function Ga(e,t){return(Ks[e]||{})[t]}function Yd(e,t){return(qs[e]||{})[t]}function Ot(e,t){return(Gs[e]||{})[t]}function Js(e){return Vs[e]||{prefix:null,iconName:null}}function Wd(e){var t=Xs[e],n=Ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Xa}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function Pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,a=On[r][e],i=Pn[r][e]||Pn[r][a],o=e in Me.styles?e:null;return i||o||null}var co=(Vn={},pe(Vn,ae,Object.keys(Cn[ae])),pe(Vn,fe,Object.keys(Cn[fe])),Vn);function Cr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,ae,"".concat(T.cssPrefix,"-").concat(ae)),pe(t,fe,"".concat(T.cssPrefix,"-").concat(fe)),t),o=null,s=ae;(e.includes(i[ae])||e.some(function(c){return co[ae].includes(c)}))&&(s=ae),(e.includes(i[fe])||e.some(function(c){return co[fe].includes(c)}))&&(s=fe);var l=e.reduce(function(c,f){var d=Hd(T.cssPrefix,f);if(Bt[f]?(f=Dd[s].includes(f)?gd[s][f]:f,o=f,c.prefix=f):Bd[s].indexOf(f)>-1?(o=f,c.prefix=Pr(f,{family:s})):d?c.iconName=d:f!==T.replacementClass&&f!==i[ae]&&f!==i[fe]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Js(c.iconName):{},g=Ot(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Bt.far&&Bt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Bt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var Kd=function(){function e(){ad(this,e),this.definitions={}}return id(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),fa(s,o[s]);var l=Cn[ae][s];l&&fa(l,o[s]),Qs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),uo=[],Ut={},Kt={},qd=Object.keys(Kt);function Vd(e,t){var n=t.mixoutsTo;return uo=e,Ut={},Object.keys(Kt).forEach(function(r){qd.indexOf(r)===-1&&delete Kt[r]}),uo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),lr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ut[o]||(Ut[o]=[]),Ut[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function ua(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(!!t)return t=Ot(n,t)||t,lo(Zs.definitions,n,t)||lo(Me.styles,n,t)}var Zs=new Kd,Xd=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,It("noAuto")},Gd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(It("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Fd(function(){Jd({autoReplaceSvgRoot:n}),It("watch",t)})}},Qd={icon:function(t){if(t===null)return null;if(lr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(vd))){var a=Cr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Oe={noAuto:Xd,config:T,dom:Gd,parse:Qd,library:Zs,findIconDefinition:ua,toHtml:Mn},Jd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(Me.styles).length>0||T.autoFetchSvg)&&it&&T.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Mn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!it){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Zd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Or(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function em(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,F=A.width,C=A.height,v=a==="fak",_=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(de){return d.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(d.classes).join(" "),M={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(C)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(F/C*16*.0625,"em")}:{};g&&(M.attributes[Rt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||Rn())},children:[l]}),delete M.attributes.title);var W=R(R({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},z),d.styles)}),oe=r.found&&n.found?rt("generateAbstractMask",W)||{children:[],attributes:{}}:rt("generateAbstractIcon",W)||{children:[],attributes:{}},ce=oe.children,ze=oe.attributes;return W.children=ce,W.attributes=ze,s?em(W):Zd(W)}function mo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Rt]="");var f=R({},o.styles);Va(a)&&(f.transform=Id({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Or(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function tm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=Me.styles;function da(e){var t=e[0],n=e[1],r=e.slice(4),a=Ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var nm={found:!1,width:512,height:512};function rm(e,t){!zs&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ma(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(da(o))}rm(e,t),r(R(R({},nm),{},{icon:T.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var po=function(){},pa=T.measurePerformance&&Dn&&Dn.mark&&Dn.measure?Dn:{mark:po,measure:po},fn='FA "6.2.0"',am=function(t){return pa.mark("".concat(fn," ").concat(t," begins")),function(){return el(t)}},el=function(t){pa.mark("".concat(fn," ").concat(t," ends")),pa.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},Za={begin:am,end:el},er=function(){};function ho(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function im(e){var t=e.getAttribute?e.getAttribute(Ya):null,n=e.getAttribute?e.getAttribute(Wa):null;return t&&n}function om(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function sm(){if(T.autoReplaceSvg===!0)return tr.replace;var e=tr[T.autoReplaceSvg];return e||tr.replace}function lm(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function fm(e){return ie.createElement(e)}function tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?lm:fm:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(tl(o,{ceFn:r}))}),a}function cm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var tr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(tl(a),n)}),n.getAttribute(Rt)===null&&T.keepOriginalSource){var r=ie.createComment(cm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qa(n).indexOf(T.replacementClass))return tr.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Mn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function go(e){e()}function nl(e,t){var n=typeof t=="function"?t:er;if(e.length===0)n();else{var r=go;T.mutateApproach===pd&&(r=gt.requestAnimationFrame||go),r(function(){var a=sm(),i=Za.begin("mutate");e.map(a),i(),n()})}}var ei=!1;function rl(){ei=!0}function ha(){ei=!1}var cr=null;function vo(e){if(!!io&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?er:t,r=e.nodeCallback,a=r===void 0?er:r,i=e.pseudoElementsCallback,o=i===void 0?er:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;cr=new io(function(c){if(!ei){var f=vt();nn(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ho(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ho(d.target)&&~_d.indexOf(d.attributeName))if(d.attributeName==="class"&&im(d.target)){var p=Cr(qa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Ya,g||f),A&&d.target.setAttribute(Wa,A)}else om(d.target)&&a(d.target)})}}),it&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function um(){!cr||cr.disconnect()}function dm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function mm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Cr(qa(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Yd(a.prefix,e.innerText)||Ga(a.prefix,la(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function pm(e){var t=nn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function hm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mm(e),r=n.iconName,a=n.prefix,i=n.rest,o=pm(e),s=ca("parseNodeAttributes",{},e),l=t.styleParser?dm(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var gm=Me.styles;function al(e){var t=T.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(Ds)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var bt=new Set;Ka.map(function(e){bt.add("fa-".concat(e))});Object.keys(On[ae]).map(bt.add.bind(bt));Object.keys(On[fe]).map(bt.add.bind(bt));bt=Tn(bt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ie.documentElement.classList,r=function(d){return n.add("".concat(oo,"-").concat(d))},a=function(d){return n.remove("".concat(oo,"-").concat(d))},i=T.autoFetchSvg?bt:Ka.map(function(f){return"fa-".concat(f)}).concat(Object.keys(gm));i.includes("fa")||i.push("fa");var o=[".".concat(Ds,":not([").concat(Rt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Za.begin("onTree"),c=s.reduce(function(f,d){try{var p=al(d);p&&f.push(p)}catch(g){zs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){nl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function vm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;al(e).then(function(n){n&&nl([n],t)})}function bm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ua(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ua(a||{})),e(r,R(R({},n),{},{mask:a}))}}var ym=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,F=n.classes,C=F===void 0?[]:F,v=n.attributes,_=v===void 0?{}:v,M=n.styles,z=M===void 0?{}:M;if(!!t){var W=t.prefix,oe=t.iconName,ce=t.icon;return Sr(R({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(p?_["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(A||Rn()):(_["aria-hidden"]="true",_.focusable="false")),Ja({icons:{main:da(ce),mask:l?da(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:oe,transform:R(R({},qe),a),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:_,styles:z,classes:C}})})}},xm={mixout:function(){return{icon:bm(ym)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=vm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return yo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ma(a,s),f.iconName?ma(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var C=Ua(F,2),v=C[0],_=C[1];g([n,Ja({icons:{main:v,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Or(s);l.length>0&&(a.style=l);var c;return Va(o)&&(c=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},_m={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Sr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Tn(i)).join(" ")},children:o}]})}}}},wm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Sr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),tm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},Em={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Sr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:R(R({},qe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ls){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},km=new RegExp('"',"ug"),xo=[1105920,1112319];function Am(e){var t=e.replace(km,""),n=$d(t,0),r=n>=xo[0]&&n<=xo[1],a=t.length===2?t[0]===t[1]:!1;return{value:la(a?t[0]:t),isSecondary:r||a}}function _o(e,t){var n="".concat(md).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=nn(e.children),o=i.filter(function(ce){return ce.getAttribute(sa)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(bd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?fe:ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[p][l[2].toLowerCase()]:yd[p][c],A=Am(d),F=A.value,C=A.isSecondary,v=l[0].startsWith("FontAwesome"),_=Ga(g,F),M=_;if(v){var z=Wd(F);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!C&&(!o||o.getAttribute(Ya)!==g||o.getAttribute(Wa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var W=hm(),oe=W.extra;oe.attributes[sa]=t,ma(_,g).then(function(ce){var ze=Ja(R(R({},W),{},{icons:{main:ce,mask:Qa()},prefix:g,iconName:M,extra:oe,watchable:!0})),de=ie.createElement("svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=ze.map(function(De){return Mn(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Om(e){return Promise.all([_o(e,"::before"),_o(e,"::after")])}function Pm(e){return e.parentNode!==document.head&&!~hd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(sa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(!!it)return new Promise(function(t,n){var r=nn(e.querySelectorAll("*")).filter(Pm).map(Om),a=Za.begin("searchPseudoElements");rl(),Promise.all(r).then(function(){a(),ha(),t()}).catch(function(){a(),ha(),n()})})}var Cm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;T.searchPseudoElements&&wo(a)}}},Eo=!1,Sm={mixout:function(){return{dom:{unwatch:function(){rl(),Eo=!0}}}},hooks:function(){return{bootstrap:function(){vo(ca("mutationObserverCallbacks",{}))},noAuto:function(){um()},watch:function(n){var r=n.observeMutationsRoot;Eo?ha():vo(ca("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ko=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Rm={mixout:function(){return{parse:{transform:function(n){return ko(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ko(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Im(e){return e.tag==="g"?e.children:[e]}var Tm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Cr(a.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=Rd({transform:l,containerWidth:d,iconWidth:c}),A={tag:"rect",attributes:R(R({},Dr),{},{fill:"white"})},F=f.children?{children:f.children.map(Ao)}:{},C={tag:"g",attributes:R({},g.inner),children:[Ao(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},F))]},v={tag:"g",attributes:R({},g.outer),children:[C]},_="mask-".concat(s||Rn()),M="clip-".concat(s||Rn()),z={tag:"mask",attributes:R(R({},Dr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Im(p)},z]};return r.push(W,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(_,")")},Dr)}),{children:r,attributes:a}}}},Nm={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Fm=[Nd,xm,_m,wm,Em,Cm,Sm,Rm,Tm,Nm,Mm];Vd(Fm,{mixoutsTo:Oe});Oe.noAuto;var il=Oe.config,Lm=Oe.library;Oe.dom;var ur=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var jm=Oe.icon;Oe.layer;var $m=Oe.text;Oe.counter;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e){return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Dm(e,t){if(e==null)return{};var n=zm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ga(e){return Bm(e)||Um(e)||Hm(e)||Ym()}function Bm(e){if(Array.isArray(e))return va(e)}function Um(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hm(e,t){if(!!e){if(typeof e=="string")return va(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return va(e,t)}}function va(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ym(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ol={exports:{}};(function(e){(function(t){var n=function(v,_,M){if(!c(_)||d(_)||p(_)||g(_)||l(_))return _;var z,W=0,oe=0;if(f(_))for(z=[],oe=_.length;W<oe;W++)z.push(n(v,_[W],M));else{z={};for(var ce in _)Object.prototype.hasOwnProperty.call(_,ce)&&(z[v(ce,M)]=n(v,_[ce],M))}return z},r=function(v,_){_=_||{};var M=_.separator||"_",z=_.split||/(?=[A-Z])/;return v.split(z).join(M)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=a(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},p=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},F=function(v,_){var M=_&&"process"in _?_.process:_;return typeof M!="function"?v:function(z,W){return M(z,v,W)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(F(a,_),v)},decamelizeKeys:function(v,_){return n(F(o,_),v,_)},pascalizeKeys:function(v,_){return n(F(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(Wm)})(ol);var Km=ol.exports,qm=["class","style"];function Vm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Km.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ti(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Xm(f);break;case"style":l.style=Vm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Dm(n,qm);return kr(e.tag,Ie(Ie(Ie({},t),{},{class:a.class,style:Ie(Ie({},a.style),o)},a.attrs),s),r)}var sl=!1;try{sl=!0}catch{}function Gm(){if(!sl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Qm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Po(e){if(e&&dr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ur.icon)return ur.icon(e);if(e===null)return null;if(dr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Jm=Tt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=le(function(){return Po(t.icon)}),i=le(function(){return vn("classes",Qm(t))}),o=le(function(){return vn("transform",typeof t.transform=="string"?ur.transform(t.transform):t.transform)}),s=le(function(){return vn("mask",Po(t.mask))}),l=le(function(){return jm(a.value,Ie(Ie(Ie(Ie({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(f){if(!f)return Gm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=le(function(){return l.value?ti(l.value.abstract[0],{},r):null});return function(){return c.value}}});Tt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=il.familyPrefix,i=le(function(){return["".concat(a,"-layers")].concat(ga(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return kr("div",{class:i.value},r.default?r.default():[])}}});Tt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=il.familyPrefix,i=le(function(){return vn("classes",[].concat(ga(t.counter?["".concat(a,"-layers-counter")]:[]),ga(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=le(function(){return vn("transform",typeof t.transform=="string"?ur.transform(t.transform):t.transform)}),s=le(function(){var c=$m(t.value.toString(),Ie(Ie({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=le(function(){return ti(s.value,{},r)});return function(){return l.value}}});var Zm={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},ep={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},tp={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};Lm.add(tp,ep,Zm);const ni=Rc(Lu);ni.use(rd);ni.component("font-awesome-icon",Jm);ni.mount("#app");export{Vu as N,je as a,se as b,$a as c,Tt as d,qr as e,ja as o,Ql as r,rp as v,np as w};
