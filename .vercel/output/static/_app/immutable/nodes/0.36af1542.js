import{c as P,s as T,n as g,d as X,e as L,f as B,u as R,g as G,h as J}from"../chunks/scheduler.387d4020.js";import{S as I,i as C,g as h,h as v,j as p,f as _,k as m,a as k,x as Z,d as $,y as V,z as d,A as D,s as A,r as O,B as H,c as F,u as M,v as N,t as b,w as S,m as z,n as E,e as Y,p as ee,b as te}from"../chunks/index.c0f316b9.js";import"../chunks/iconify-icon.6d541906.js";import{w as se}from"../chunks/index.f7adf726.js";import{t as ne}from"../chunks/config.eaa97777.js";const le=!0;async function re({url:a}){return{url:a.pathname}}const Ce=Object.freeze(Object.defineProperty({__proto__:null,load:re,prerender:le},Symbol.toStringTag,{value:"Module"}));function ae(a){const e=a-1;return e*e*e+1}function U(a,{delay:e=0,duration:n=400,easing:r=ae,x:s=0,y:t=0,opacity:l=0}={}){const o=getComputedStyle(a),c=+o.opacity,u=o.transform==="none"?"":o.transform,i=c*(1-l),[f,x]=P(s),[w,y]=P(t);return{delay:e,duration:n,easing:r,css:(j,W)=>`
			transform: ${u} translate(${(1-j)*f}${x}, ${(1-j)*w}${y});
			opacity: ${c-i*W}`}}const oe=localStorage.getItem("color-scheme"),K=se(oe??"dark");function ie(){K.update(a=>{const e=a==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function ce(a){let e,n,r;return{c(){e=h("div"),n=h("iconify-icon"),this.h()},l(s){e=v(s,"DIV",{});var t=p(e);n=v(t,"ICONIFY-ICON",{icon:!0,width:!0}),p(n).forEach(_),t.forEach(_),this.h()},h(){V(n,"icon","lucide:sun"),V(n,"width",Q)},m(s,t){k(s,e,t),d(e,n)},p:g,i(s){s&&(r||L(()=>{r=D(e,U,{y:10}),r.start()}))},o:g,d(s){s&&_(e)}}}function ue(a){let e,n,r;return{c(){e=h("div"),n=h("iconify-icon"),this.h()},l(s){e=v(s,"DIV",{});var t=p(e);n=v(t,"ICONIFY-ICON",{icon:!0,width:!0}),p(n).forEach(_),t.forEach(_),this.h()},h(){V(n,"icon","lucide:moon"),V(n,"width",Q)},m(s,t){k(s,e,t),d(e,n)},p:g,i(s){s&&(r||L(()=>{r=D(e,U,{y:-10}),r.start()}))},o:g,d(s){s&&_(e)}}}function fe(a){let e,n,r;function s(o,c){return o[0]==="dark"?ue:ce}let t=s(a),l=t(a);return{c(){e=h("button"),l.c(),this.h()},l(o){e=v(o,"BUTTON",{"aria-label":!0,class:!0});var c=p(e);l.l(c),c.forEach(_),this.h()},h(){m(e,"aria-label","Toggle theme"),m(e,"class","svelte-11cxotz")},m(o,c){k(o,e,c),l.m(e,null),n||(r=Z(e,"click",ie),n=!0)},p(o,[c]){t===(t=s(o))&&l?l.p(o,c):(l.d(1),l=t(o),l&&(l.c(),$(l,1),l.m(e,null)))},i(o){$(l)},o:g,d(o){o&&_(e),l.d(),n=!1,r()}}}let Q=24;function _e(a,e,n){let r;return X(a,K,s=>n(0,r=s)),[r]}class de extends I{constructor(e){super(),C(this,e,_e,fe,T,{})}}function me(a){let e,n,r='<div id="dog" class="svelte-zvxe76"></div>',s,t,l='<li><a href="/" class="svelte-zvxe76">home</a></li> <li><a href="/about" class="svelte-zvxe76">about</a></li> <li><a href="/blog" class="svelte-zvxe76">blog</a></li> <li><a href="/rss.xml" target="_blank" class="svelte-zvxe76">rss</a></li>',o,c,u;return c=new de({}),{c(){e=h("nav"),n=h("a"),n.innerHTML=r,s=A(),t=h("ul"),t.innerHTML=l,o=A(),O(c.$$.fragment),this.h()},l(i){e=v(i,"NAV",{class:!0});var f=p(e);n=v(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),H(n)!=="svelte-17sum4n"&&(n.innerHTML=r),s=F(f),t=v(f,"UL",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-196zcku"&&(t.innerHTML=l),o=F(f),M(c.$$.fragment,f),f.forEach(_),this.h()},h(){m(n,"href","/"),m(n,"class","dog svelte-zvxe76"),m(t,"class","links svelte-zvxe76"),m(e,"class","svelte-zvxe76")},m(i,f){k(i,e,f),d(e,n),d(e,s),d(e,t),d(e,o),N(c,e,null),u=!0},p:g,i(i){u||($(c.$$.fragment,i),u=!0)},o(i){b(c.$$.fragment,i),u=!1},d(i){i&&_(e),S(c)}}}class he extends I{constructor(e){super(),C(this,e,null,me,T,{})}}function ve(a){let e,n,r,s=new Date().getFullYear()+"",t,l,o=ne+"",c,u,i,f="source code";return{c(){e=h("footer"),n=h("p"),r=z("© "),t=z(s),l=z(". Made with ❤ by "),c=z(o),u=z(` |
		`),i=h("a"),i.textContent=f,this.h()},l(x){e=v(x,"FOOTER",{class:!0});var w=p(e);n=v(w,"P",{class:!0});var y=p(n);r=E(y,"© "),t=E(y,s),l=E(y,". Made with ❤ by "),c=E(y,o),u=E(y,` |
		`),i=v(y,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),H(i)!=="svelte-pnye3a"&&(i.textContent=f),y.forEach(_),w.forEach(_),this.h()},h(){m(i,"href","https://codeberg.org/puppy/personal-website"),m(i,"target","_blank"),m(i,"rel","noopener noreferrer"),m(i,"class","svelte-k3sx3v"),m(n,"class","svelte-k3sx3v"),m(e,"class","svelte-k3sx3v")},m(x,w){k(x,e,w),d(e,n),d(n,r),d(n,t),d(n,l),d(n,c),d(n,u),d(n,i)},p:g,i:g,o:g,d(x){x&&_(e)}}}class pe extends I{constructor(e){super(),C(this,e,null,ve,T,{})}}function q(a){let e,n,r;const s=a[2].default,t=B(s,a,a[1],null);return{c(){e=h("div"),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var o=p(e);t&&t.l(o),o.forEach(_),this.h()},h(){m(e,"class","transition svelte-18kqe58")},m(l,o){k(l,e,o),t&&t.m(e,null),r=!0},p(l,o){t&&t.p&&(!r||o&2)&&R(t,s,l,l[1],r?J(s,l[1],o,null):G(l[1]),null)},i(l){r||($(t,l),l&&(n||L(()=>{n=D(e,U,{y:10}),n.start()})),r=!0)},o(l){b(t,l),r=!1},d(l){l&&_(e),t&&t.d(l)}}}function ge(a){let e=a[0],n,r,s=q(a);return{c(){s.c(),n=Y()},l(t){s.l(t),n=Y()},m(t,l){s.m(t,l),k(t,n,l),r=!0},p(t,[l]){l&1&&T(e,e=t[0])?(ee(),b(s,1,1,g),te(),s=q(t),s.c(),$(s,1),s.m(n.parentNode,n)):s.p(t,l)},i(t){r||($(s),r=!0)},o(t){b(s),r=!1},d(t){t&&_(n),s.d(t)}}}function $e(a,e,n){let{$$slots:r={},$$scope:s}=e,{url:t=""}=e;return a.$$set=l=>{"url"in l&&n(0,t=l.url),"$$scope"in l&&n(1,s=l.$$scope)},[t,s,r]}class ye extends I{constructor(e){super(),C(this,e,$e,ge,T,{url:0})}}function be(a){let e;const n=a[1].default,r=B(n,a,a[2],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,t){r&&r.m(s,t),e=!0},p(s,t){r&&r.p&&(!e||t&4)&&R(r,n,s,s[2],e?J(n,s[2],t,null):G(s[2]),null)},i(s){e||($(r,s),e=!0)},o(s){b(r,s),e=!1},d(s){r&&r.d(s)}}}function ke(a){let e,n,r,s,t,l,o,c;return n=new he({}),t=new ye({props:{url:a[0].url,$$slots:{default:[be]},$$scope:{ctx:a}}}),o=new pe({}),{c(){e=h("div"),O(n.$$.fragment),r=A(),s=h("main"),O(t.$$.fragment),l=A(),O(o.$$.fragment),this.h()},l(u){e=v(u,"DIV",{class:!0});var i=p(e);M(n.$$.fragment,i),r=F(i),s=v(i,"MAIN",{class:!0});var f=p(s);M(t.$$.fragment,f),f.forEach(_),l=F(i),M(o.$$.fragment,i),i.forEach(_),this.h()},h(){m(s,"class","svelte-xin978"),m(e,"class","layout svelte-xin978")},m(u,i){k(u,e,i),N(n,e,null),d(e,r),d(e,s),N(t,s,null),d(e,l),N(o,e,null),c=!0},p(u,[i]){const f={};i&1&&(f.url=u[0].url),i&4&&(f.$$scope={dirty:i,ctx:u}),t.$set(f)},i(u){c||($(n.$$.fragment,u),$(t.$$.fragment,u),$(o.$$.fragment,u),c=!0)},o(u){b(n.$$.fragment,u),b(t.$$.fragment,u),b(o.$$.fragment,u),c=!1},d(u){u&&_(e),S(n),S(t),S(o)}}}function xe(a,e,n){let{$$slots:r={},$$scope:s}=e,{data:t}=e;return a.$$set=l=>{"data"in l&&n(0,t=l.data),"$$scope"in l&&n(2,s=l.$$scope)},[t,r,s]}class Oe extends I{constructor(e){super(),C(this,e,xe,ke,T,{data:0})}}export{Oe as component,Ce as universal};
