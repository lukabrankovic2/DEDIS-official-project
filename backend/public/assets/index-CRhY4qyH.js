(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Ie=!1;var Be=Array.isArray,Ue=Array.from,Ve=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyDescriptors,Ke=Object.getPrototypeOf;const Q=()=>{};function We(t){return t()}function Lt(t){for(var e=0;e<t.length;e++)t[e]()}const B=2,le=4,ft=8,Pt=16,F=32,gt=64,Y=128,pt=256,S=512,H=1024,tt=2048,Z=4096,ct=8192,Ye=16384,Ft=32768,ze=1<<18,se=1<<19,Wt=Symbol("$state");function ue(t){return t===this.v}function ae(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Je(t){return!ae(t,this.v)}function Ge(t){throw new Error("effect_in_teardown")}function Qe(){throw new Error("effect_in_unowned_derived")}function Xe(t){throw new Error("effect_orphan")}function Ze(){throw new Error("effect_update_depth_exceeded")}function tr(){throw new Error("state_unsafe_local_read")}function er(){throw new Error("state_unsafe_mutation")}function fe(t){return{f:0,v:t,reactions:null,equals:ue,version:0}}function ce(t,e=!1){var n;const r=fe(t);return e||(r.equals=Je),y!==null&&y.l!==null&&((n=y.l).s??(n.s=[])).push(r),r}function M(t,e=!1){return rr(ce(t,e))}function rr(t){return h!==null&&h.f&B&&(P===null?mr([t]):P.push(t)),t}function C(t,e){return h!==null&&yt()&&h.f&(B|Pt)&&(P===null||!P.includes(t))&&er(),nr(t,e)}function nr(t,e){return t.equals(e)||(t.v=e,t.version=Oe(),ve(t,H),yt()&&_!==null&&_.f&S&&!(_.f&F)&&(T!==null&&T.includes(t)?(A(_,H),wt(_)):V===null?gr([t]):V.push(t))),e}function ve(t,e){var r=t.reactions;if(r!==null)for(var n=yt(),o=r.length,i=0;i<o;i++){var l=r[i],s=l.f;s&H||!n&&l===_||(A(l,e),s&(S|Y)&&(s&B?ve(l,tt):wt(l)))}}const or=1,ir=2;var Yt,de,_e;function lr(){if(Yt===void 0){Yt=window;var t=Element.prototype,e=Node.prototype;de=Kt(e,"firstChild").get,_e=Kt(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function pe(t=""){return document.createTextNode(t)}function ht(t){return de.call(t)}function jt(t){return _e.call(t)}function w(t,e){return ht(t)}function D(t,e){{var r=ht(t);return r instanceof Comment&&r.data===""?jt(r):r}}function g(t,e=1,r=!1){let n=t;for(;e--;)n=jt(n);return n}function sr(t){var e=B|H;_===null?e|=Y:_.f|=se;const r={children:null,ctx:y,deps:null,equals:ue,f:e,fn:t,reactions:null,v:null,version:0,parent:_};if(h!==null&&h.f&B){var n=h;(n.children??(n.children=[])).push(r)}return r}function he(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&B?Rt(n):rt(n)}}}function me(t){var e,r=_;W(t.parent);try{he(t),e=Ce(t)}finally{W(r)}return e}function ge(t){var e=me(t),r=(G||t.f&Y)&&t.deps!==null?tt:S;A(t,r),t.equals(e)||(t.v=e,t.version=Oe())}function Rt(t){he(t),ut(t,0),A(t,ct),t.v=t.children=t.deps=t.ctx=t.reactions=null}function be(t){_===null&&h===null&&Xe(),h!==null&&h.f&Y&&Qe(),Mt&&Ge()}function ur(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function et(t,e,r,n=!0){var o=(t&gt)!==0,i=_,l={ctx:y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|H,first:null,fn:e,last:null,next:null,parent:o?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var s=X;try{Xt(!0),vt(l),l.f|=Ye}catch(v){throw rt(l),v}finally{Xt(s)}}else e!==null&&wt(l);var u=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&se)===0;if(!u&&!o&&n&&(i!==null&&ur(l,i),h!==null&&h.f&B)){var a=h;(a.children??(a.children=[])).push(l)}return l}function ye(t){const e=et(ft,null,!1);return A(e,S),e.teardown=t,e}function zt(t){be();var e=_!==null&&(_.f&F)!==0&&y!==null&&!y.m;if(e){var r=y;(r.e??(r.e=[])).push({fn:t,effect:_,reaction:h})}else{var n=we(t);return n}}function ar(t){return be(),bt(t)}function fr(t){const e=et(gt,t,!0);return()=>{rt(e)}}function we(t){return et(le,t,!1)}function cr(t,e){var r=y,n={effect:null,ran:!1};r.l.r1.push(n),n.effect=bt(()=>{t(),!n.ran&&(n.ran=!0,C(r.l.r2,!0),It(e))})}function vr(){var t=y;bt(()=>{if(d(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&S&&A(r,tt),nt(r)&&vt(r),e.ran=!1}t.l.r2.v=!1}})}function bt(t){return et(ft,t,!0)}function Jt(t){return Ee(t)}function Ee(t,e=0){return et(ft|Pt|e,t,!0)}function qt(t,e=!0){return et(ft|F,t,!0,e)}function xe(t){var e=t.teardown;if(e!==null){const r=Mt,n=h;Zt(!0),K(null);try{e.call(null)}finally{Zt(r),K(n)}}}function Te(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)Rt(e[r])}}function ke(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;rt(r,e),r=n}}function dr(t){for(var e=t.first;e!==null;){var r=e.next;e.f&F||rt(e),e=r}}function rt(t,e=!0){var r=!1;if((e||t.f&ze)&&t.nodes_start!==null){for(var n=t.nodes_start,o=t.nodes_end;n!==null;){var i=n===o?null:jt(n);n.remove(),n=i}r=!0}ke(t,e&&!r),Te(t),ut(t,0),A(t,ct);var l=t.transitions;if(l!==null)for(const u of l)u.stop();xe(t);var s=t.parent;s!==null&&s.first!==null&&Se(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Se(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Gt(t,e){var r=[];Le(t,r,!0),_r(r,()=>{rt(t),e&&e()})}function _r(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var o of t)o.out(n)}else e()}function Le(t,e,r){if(!(t.f&Z)){if(t.f^=Z,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&e.push(l);for(var n=t.first;n!==null;){var o=n.next,i=(n.f&Ft)!==0||(n.f&F)!==0;Le(n,e,i?r:!1),n=o}}}function Qt(t){qe(t,!0)}function qe(t,e){if(t.f&Z){nt(t)&&vt(t),t.f^=Z;for(var r=t.first;r!==null;){var n=r.next,o=(r.f&Ft)!==0||(r.f&F)!==0;qe(r,o?e:!1),r=n}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Nt=!1,Ot=[];function pr(){Nt=!1;const t=Ot.slice();Ot=[],Lt(t)}function hr(t){Nt||(Nt=!0,queueMicrotask(pr)),Ot.push(t)}let mt=!1,X=!1,Mt=!1;function Xt(t){X=t}function Zt(t){Mt=t}let Ct=[],st=0;let h=null;function K(t){h=t}let _=null;function W(t){_=t}let P=null;function mr(t){P=t}let T=null,q=0,V=null;function gr(t){V=t}let Ne=0,G=!1,y=null;function Oe(){return++Ne}function yt(){return y!==null&&y.l===null}function nt(t){var l,s;var e=t.f;if(e&H)return!0;if(e&tt){var r=t.deps,n=(e&Y)!==0;if(r!==null){var o;if(e&pt){for(o=0;o<r.length;o++)((l=r[o]).reactions??(l.reactions=[])).push(t);t.f^=pt}for(o=0;o<r.length;o++){var i=r[o];if(nt(i)&&ge(i),n&&_!==null&&!G&&!((s=i==null?void 0:i.reactions)!=null&&s.includes(t))&&(i.reactions??(i.reactions=[])).push(t),i.version>t.version)return!0}}n||A(t,S)}return!1}function br(t,e,r){throw t}function Ce(t){var f;var e=T,r=q,n=V,o=h,i=G,l=P,s=y,u=t.f;T=null,q=0,V=null,h=u&(F|gt)?null:t,G=!X&&(u&Y)!==0,P=null,y=t.ctx;try{var a=(0,t.fn)(),v=t.deps;if(T!==null){var c;if(ut(t,q),v!==null&&q>0)for(v.length=q+T.length,c=0;c<T.length;c++)v[q+c]=T[c];else t.deps=v=T;if(!G)for(c=q;c<v.length;c++)((f=v[c]).reactions??(f.reactions=[])).push(t)}else v!==null&&q<v.length&&(ut(t,q),v.length=q);return a}finally{T=e,q=r,V=n,h=o,G=i,P=l,y=s}}function yr(t,e){let r=e.reactions;if(r!==null){var n=r.indexOf(t);if(n!==-1){var o=r.length-1;o===0?r=e.reactions=null:(r[n]=r[o],r.pop())}}r===null&&e.f&B&&(T===null||!T.includes(e))&&(A(e,tt),e.f&(Y|pt)||(e.f^=pt),ut(e,0))}function ut(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)yr(t,r[n])}function vt(t){var e=t.f;if(!(e&ct)){A(t,S);var r=_;_=t;try{e&Pt?dr(t):ke(t),Te(t),xe(t);var n=Ce(t);t.teardown=typeof n=="function"?n:null,t.version=Ne}catch(o){br(o)}finally{_=r}}}function wr(){st>1e3&&(st=0,Ze()),st++}function Er(t){var e=t.length;if(e!==0){wr();var r=X;X=!0;try{for(var n=0;n<e;n++){var o=t[n];o.f&S||(o.f^=S);var i=[];Ae(o,i),xr(i)}}finally{X=r}}}function xr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];!(n.f&(ct|Z))&&nt(n)&&(vt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Se(n):n.fn=null))}}function Tr(){if(mt=!1,st>1001)return;const t=Ct;Ct=[],Er(t),mt||(st=0)}function wt(t){mt||(mt=!0,queueMicrotask(Tr));for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(gt|F)){if(!(r&S))return;e.f^=S}}Ct.push(e)}function Ae(t,e){var r=t.first,n=[];t:for(;r!==null;){var o=r.f,i=(o&F)!==0,l=i&&(o&S)!==0;if(!l&&!(o&Z))if(o&ft){i?r.f^=S:nt(r)&&vt(r);var s=r.first;if(s!==null){r=s;continue}}else o&le&&n.push(r);var u=r.next;if(u===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var a=c.next;if(a!==null){r=a;continue t}c=c.parent}}r=u}for(var v=0;v<n.length;v++)s=n[v],e.push(s),Ae(s,e)}function d(t){var s;var e=t.f,r=(e&B)!==0;if(r&&e&ct){var n=me(t);return Rt(t),n}if(h!==null){P!==null&&P.includes(t)&&tr();var o=h.deps;T===null&&o!==null&&o[q]===t?q++:T===null?T=[t]:T.push(t),V!==null&&_!==null&&_.f&S&&!(_.f&F)&&V.includes(t)&&(A(_,H),wt(_))}else if(r&&t.deps===null){var i=t,l=i.parent;l!==null&&!((s=l.deriveds)!=null&&s.includes(i))&&(l.deriveds??(l.deriveds=[])).push(i)}return r&&(i=t,nt(i)&&ge(i)),t.v}function It(t){const e=h;try{return h=null,t()}finally{h=e}}const kr=~(H|tt|S);function A(t,e){t.f=t.f&kr|e}function dt(t,e=!1,r){y={p:y,c:null,e:null,m:!1,s:t,x:null,l:null},e||(y.l={s:null,u:null,r1:[],r2:fe(!1)})}function _t(t){const e=y;if(e!==null){const l=e.e;if(l!==null){var r=_,n=h;e.e=null;try{for(var o=0;o<l.length;o++){var i=l[o];W(i.effect),K(i.reaction),we(i.fn)}}finally{W(r),K(n)}}y=e.p,e.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Wt in t)At(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&Wt in r&&At(r)}}}function At(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{At(t[n],e)}catch{}const r=Ke(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=He(r);for(let o in n){const i=n[o].get;if(i)try{i.call(t)}catch{}}}}}const Lr=new Set,te=new Set;function qr(t,e,r,n){function o(i){if(n.capture||lt.call(e,i),!i.cancelBubble){var l=h,s=_;K(null),W(null);try{return r.call(this,i)}finally{K(l),W(s)}}}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?hr(()=>{e.addEventListener(t,o,n)}):e.addEventListener(t,o,n),o}function $(t,e,r,n,o){var i={capture:n,passive:o},l=qr(t,e,r,i);(e===document.body||e===window||e===document)&&ye(()=>{e.removeEventListener(t,l,i)})}function lt(t){var O;var e=this,r=e.ownerDocument,n=t.type,o=((O=t.composedPath)==null?void 0:O.call(t))||[],i=o[0]||t.target,l=0,s=t.__root;if(s){var u=o.indexOf(s);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var a=o.indexOf(e);if(a===-1)return;u<=a&&(l=u)}if(i=o[l]||t.target,i!==e){Ve(t,"currentTarget",{configurable:!0,get(){return i||r}});var v=h,c=_;K(null),W(null);try{for(var f,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var L=i["__"+n];if(L!==void 0&&!i.disabled)if(Be(L)){var[x,...b]=L;x.apply(i,[t,...b])}else L.call(i,t)}catch(k){f?p.push(k):f=k}if(t.cancelBubble||m===e||m===null)break;i=m}if(f){for(let k of p)queueMicrotask(()=>{throw k});throw f}}finally{t.__root=e,delete t.currentTarget,K(v),W(c)}}}function Nr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Dt(t,e){var r=_;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function N(t,e){var r=(e&or)!==0,n=(e&ir)!==0,o,i=!t.startsWith("<!>");return()=>{o===void 0&&(o=Nr(i?t:"<!>"+t),r||(o=ht(o)));var l=n?document.importNode(o,!0):o.cloneNode(!0);if(r){var s=ht(l),u=l.lastChild;Dt(s,u)}else Dt(l,l);return l}}function it(){var t=document.createDocumentFragment(),e=document.createComment(""),r=pe();return t.append(e,r),Dt(e,r),t}function E(t,e){t!==null&&t.before(e)}const Or=["touchstart","touchmove"];function Cr(t){return Or.includes(t)}function Ar(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function Dr(t,e){return $r(t,e)}const z=new Map;function $r(t,{target:e,anchor:r,props:n={},events:o,context:i,intro:l=!0}){lr();var s=new Set,u=c=>{for(var f=0;f<c.length;f++){var p=c[f];if(!s.has(p)){s.add(p);var m=Cr(p);e.addEventListener(p,lt,{passive:m});var L=z.get(p);L===void 0?(document.addEventListener(p,lt,{passive:m}),z.set(p,1)):z.set(p,L+1)}}};u(Ue(Lr)),te.add(u);var a=void 0,v=fr(()=>{var c=r??e.appendChild(pe());return qt(()=>{if(i){dt({});var f=y;f.c=i}o&&(n.$$events=o),a=t(c,n)||{},i&&_t()}),()=>{var m;for(var f of s){e.removeEventListener(f,lt);var p=z.get(f);--p===0?(document.removeEventListener(f,lt),z.delete(f)):z.set(f,p)}te.delete(u),ee.delete(a),c!==r&&((m=c.parentNode)==null||m.removeChild(c))}});return ee.set(a,v),a}let ee=new WeakMap;function j(t,e,r,n=null,o=!1){var i=t,l=null,s=null,u=null,a=o?Ft:0;Ee(()=>{u!==(u=!!e())&&(u?(l?Qt(l):l=qt(()=>r(i)),s&&Gt(s,()=>{s=null})):(s?Qt(s):n&&(s=qt(()=>n(i))),l&&Gt(l,()=>{l=null})))},a)}let re=!1;function Pr(){re||(re=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Fr(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function jr(t,e,r,n=r){t.addEventListener(e,r);const o=t.__on_r;o?t.__on_r=()=>{o(),n()}:t.__on_r=n,Pr()}function I(t,e,r=e){var n=yt();jr(t,"input",()=>{var o=ne(t)?oe(t.value):t.value;r(o),n&&o!==(o=e())&&(t.value=o??"")}),bt(()=>{var o=e();ne(t)&&o===oe(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function ne(t){var e=t.type;return e==="number"||e==="range"}function oe(t){return t===""?null:+t}function Bt(t){return function(...e){var r=e[0];return r.preventDefault(),t==null?void 0:t.apply(this,e)}}function Et(t=!1){const e=y,r=e.l.u;if(!r)return;let n=()=>Sr(e.s);if(t){let o=0,i={};const l=sr(()=>{let s=!1;const u=e.s;for(const a in u)u[a]!==i[a]&&(i[a]=u[a],s=!0);return s&&o++,o});n=()=>d(l)}r.b.length&&ar(()=>{ie(e,n),Lt(r.b)}),zt(()=>{const o=It(()=>r.m.map(We));return()=>{for(const i of o)typeof i=="function"&&i()}}),r.a.length&&zt(()=>{ie(e,n),Lt(r.a)})}function ie(t,e){if(t.l.s)for(const r of t.l.s)d(r);e()}function De(t,e,r){if(t==null)return e(void 0),Q;const n=It(()=>t.subscribe(e,r));return n.unsubscribe?()=>n.unsubscribe():n}function $t(t,e,r){const n=r[e]??(r[e]={store:null,source:ce(void 0),unsubscribe:Q});if(n.store!==t)if(n.unsubscribe(),n.store=t??null,t==null)n.source.v=void 0,n.unsubscribe=Q;else{var o=!0;n.unsubscribe=De(t,i=>{o?n.source.v=i:C(n.source,i)}),o=!1}return d(n.source)}function $e(){const t={};return ye(()=>{for(var e in t)t[e].unsubscribe()}),t}const Rr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rr);const J=[];function Pe(t,e=Q){let r=null;const n=new Set;function o(s){if(ae(t,s)&&(t=s,r)){const u=!J.length;for(const a of n)a[1](),J.push(a,t);if(u){for(let a=0;a<J.length;a+=2)J[a][0](J[a+1]);J.length=0}}}function i(s){o(s(t))}function l(s,u=Q){const a=[s,u];return n.add(a),n.size===1&&(r=e(o,i)||Q),s(t),()=>{n.delete(a),n.size===0&&r&&(r(),r=null)}}return{set:o,update:i,subscribe:l}}function Mr(t){let e;return De(t,r=>e=r)(),e}const at=Pe(null),R=Pe("home");var Ir=N("<button>Create Expedition</button>"),Br=N("<h1>Testing!!!</h1> <!>",1);function Ur(t,e){dt(e,!1);const r=$e(),n=()=>$t(at,"$user",r),o=()=>{console.log("Navigating to CreateExped"),R.set("createExped")};Et();var i=Br(),l=g(D(i),2);j(l,n,s=>{var u=Ir();$("click",u,o),E(s,u)}),E(t,i),_t()}var Vr=N('<h1>Upload an expedition</h1> <form><div class="form-group"><label for="title">Expedition Title</label> <input type="text" id="title" required></div> <div class="form-group"><label for="members">Expedition Members</label> <input type="text" id="members" required></div> <div class="form-group"><label for="route">Expedition Route</label> <input type="text" id="route" required></div> <div class="form-group"><label for="description">Expedition Description</label> <textarea id="description" required></textarea></div> <button type="submit">Submit</button></form>',1);function Hr(t,e){dt(e,!1);let r=M(""),n=M(""),o=M(""),i=M("");const l=async()=>{var k;const b={title:d(r),members:d(n),route:d(o),description:d(i)},O=(k=Mr(at))==null?void 0:k.token;try{const U=await fetch("http://localhost:3000/expeditions/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`},body:JSON.stringify(b)});if(U.ok){const ot=await U.json();console.log("Expedition created successfully",ot)}else{const ot=await U.json();console.error("Failed to create expedition",ot)}}catch(U){console.error("Error submitting form",U)}};Et();var s=Vr(),u=g(D(s),2),a=w(u),v=g(w(a),2),c=g(a,2),f=g(w(c),2),p=g(c,2),m=g(w(p),2),L=g(p,2),x=g(w(L),2);I(v,()=>d(r),b=>C(r,b)),I(f,()=>d(n),b=>C(n,b)),I(m,()=>d(o),b=>C(o,b)),I(x,()=>d(i),b=>C(i,b)),$("submit",u,Bt(l)),E(t,s),_t()}var Kr=N("<h1>Melanija testira gitovanje</h1>");function Wr(t){var e=Kr();E(t,e)}var Yr=N('<div class="home-content"><img src="/logo2w.png" alt="Background Logo" class="background-logo"> <h1>Welcome to the OAK official website!</h1></div> <div class="text-box"><p>scroll down</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p> <p>important info here</p></div>',1);function zr(t){var e=Yr();E(t,e)}var Jr=N('<div class="signin-container"><form class="signin-form"><div class="form-group"><label for="username">Username</label> <input id="username" type="text" required></div> <div class="form-group"><label for="email">Email</label> <input id="email" type="email" required></div> <div class="form-group"><label for="password">Password</label> <input id="password" type="password" required></div> <button type="submit">Sign Up</button></form></div>');function Gr(t){let e=M(""),r=M(""),n=M("");const o=window.location.hostname==="localhost"?"http://localhost:3000":"https://dedis-official-project.vercel.app";async function i(){if(!d(n)||!d(e)||!d(r)){alert("All fields are required.");return}try{const m=`${o}/users/signup`;console.log(`Sending request to ${m}`);const L=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:d(n),email:d(e),password:d(r)})});if(L.ok)alert("Successfully signed up!");else{const x=await L.text();console.error("Sign up failed:",x),alert(`Sign up failed: ${x}`)}}catch(m){console.error("Error during sign up:",m),alert("An error occurred. Please try again later.")}}var l=Jr(),s=w(l),u=w(s),a=g(w(u),2),v=g(u,2),c=g(w(v),2),f=g(v,2),p=g(w(f),2);I(a,()=>d(n),m=>C(n,m)),I(c,()=>d(e),m=>C(e,m)),I(p,()=>d(r),m=>C(r,m)),$("submit",s,Bt(i)),E(t,l)}var Qr=N('<h1>Login</h1> <form><div class="form-group"><label for="email">Email</label> <input type="email" id="email" required></div> <div class="form-group"><label for="password">Password</label> <input type="password" id="password" required></div> <button type="submit">Login</button></form>',1);function Xr(t,e){dt(e,!1);let r=M(""),n=M("");const o=window.location.hostname==="localhost"?"http://localhost:3000":"https://dedis-official-project.vercel.app";async function i(){if(!d(r)||!d(n)){alert("Email and password are required.");return}console.log("Sending login request with data:",{email:d(r),password:d(n)});try{const f=await fetch(`${o}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d(r),password:d(n)})});if(f.ok){const p=await f.json();console.log("Login successful",p),at.set({token:p.token,...p.user}),R.set("home")}else{const p=await f.json();console.error("Failed to login",p),alert("Failed to login: "+p.message)}}catch(f){console.error("Error submitting form",f),alert("An error occurred. Please try again later.")}}Et();var l=Qr(),s=g(D(l),2),u=w(s),a=g(w(u),2),v=g(u,2),c=g(w(v),2);I(a,()=>d(r),f=>C(r,f)),I(c,()=>d(n),f=>C(n,f)),$("submit",s,Bt(i)),E(t,l),_t()}var Zr=N('<div class="user-info"><span> </span></div>'),tn=N("<button>Logout</button>"),en=N("<button>Sign In</button> <button>Log in</button>",1),rn=N("<h1>Page not found</h1>"),nn=N('<nav><img src="/logo1w.png" alt="Navbar Logo" class="logo"> <!> <div class="nav-buttons"><button>Home</button> <button>Expeditions</button> <button>News</button> <!></div></nav> <main><!></main>',1);function on(t,e){dt(e,!1);const r=$e(),n=()=>$t(R,"$currentPage",r),o=()=>$t(at,"$user",r);function i(){at.set(null),R.set("home")}cr(()=>n(),()=>{console.log("Current page:",n())}),vr(),Et();var l=nn(),s=D(l),u=g(w(s),2);j(u,o,x=>{var b=Zr(),O=w(b),k=w(O);Jt(()=>Ar(k,`Logged in as: ${o().username??""}`)),E(x,b)});var a=g(u,2),v=w(a),c=g(v,2),f=g(c,2),p=g(f,2);j(p,o,x=>{var b=tn();$("click",b,i),E(x,b)},x=>{var b=en(),O=D(b),k=g(O,2);$("click",O,()=>R.set("signin")),$("click",k,()=>R.set("login")),E(x,b)});var m=g(s,2),L=w(m);j(L,()=>n()==="home",x=>{zr(x)},x=>{var b=it(),O=D(b);j(O,()=>n()==="expeditions",k=>{Ur(k,{})},k=>{var U=it(),ot=D(U);j(ot,()=>n()==="createExped",xt=>{Hr(xt,{})},xt=>{var Ut=it(),Fe=D(Ut);j(Fe,()=>n()==="news",Tt=>{Wr(Tt)},Tt=>{var Vt=it(),je=D(Vt);j(je,()=>n()==="signin",kt=>{Gr(kt)},kt=>{var Ht=it(),Re=D(Ht);j(Re,()=>n()==="login",St=>{Xr(St,{})},St=>{var Me=rn();E(St,Me)},!0),E(kt,Ht)},!0),E(Tt,Vt)},!0),E(xt,Ut)},!0),E(k,U)},!0),E(x,b)}),Jt(()=>Fr(m,"home",n()==="home")),$("click",v,()=>R.set("home")),$("click",c,()=>R.set("expeditions")),$("click",f,()=>R.set("news")),E(t,l),_t()}Dr(on,{target:document.getElementById("app")});
