import{_ as n,a as t,b as a,c as r,i as e,s as o,d as c,S as i,a7 as u,e as s,f,F as l,g as $,h as v,k as h,j as m,G as p,m as d,aD as b,o as g,p as w,q as x,a8 as y,a9 as R,aa as k,H as B,u as L,t as _,U as E,y as T,z,A as S,a0 as I,ap as P,C as j,a3 as q,a5 as D,V,W as C,r as H,ab as M,v as O,w as A,x as G,aG as U,ae as F,K as N,D as K,E as W,I as J,B as Q}from"./client.5feea49f.js";import{s as X,T as Y,c as Z}from"./save.c498c222.js";import{C as nn}from"./CommonLabel.c55b03e8.js";import{B as tn}from"./Button.0cf58a94.js";import{l as an}from"./index.a9867479.js";function rn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return a(this,e)}}function en(n){var t,a,r,e,o,c,i,E=n[6].default,T=u(E,n,n[5],null);return{c:function(){t=s("a"),a=s("div"),r=s("div"),T&&T.c(),e=f(),o=l(n[1]),this.h()},l:function(c){t=$(c,"A",{class:!0,href:!0,target:!0,rel:!0,"aria-label":!0});var i=v(t);a=$(i,"DIV",{class:!0});var u=v(a);r=$(u,"DIV",{"aria-hidden":!0,class:!0});var s=v(r);T&&T.l(s),s.forEach(h),e=m(u),o=p(u,n[1]),u.forEach(h),i.forEach(h),this.h()},h:function(){d(r,"aria-hidden","true"),d(r,"class","ssbc-button__icon svelte-abzkh4"),b(r,"ssbc-button__icon--fill",n[2]),b(r,"ssbc-button__icon--outline",!n[2]),d(a,"class",c="ssbc-button "+n[4]+" svelte-abzkh4"),d(t,"class","ssbc-button__link svelte-abzkh4"),d(t,"href",n[0]),d(t,"target","_blank"),d(t,"rel","noopener"),d(t,"aria-label",n[3])},m:function(n,c){g(n,t,c),w(t,a),w(a,r),T&&T.m(r,null),w(a,e),w(a,o),i=!0},p:function(n,e){var u=x(e,1)[0];T&&T.p&&(!i||32&u)&&y(T,E,n,n[5],i?k(E,n[5],u,null):R(n[5]),null),4&u&&b(r,"ssbc-button__icon--fill",n[2]),4&u&&b(r,"ssbc-button__icon--outline",!n[2]),(!i||2&u)&&B(o,n[1]),(!i||16&u&&c!==(c="ssbc-button "+n[4]+" svelte-abzkh4"))&&d(a,"class",c),(!i||1&u)&&d(t,"href",n[0]),(!i||8&u)&&d(t,"aria-label",n[3])},i:function(n){i||(L(T,n),i=!0)},o:function(n){_(T,n),i=!1},d:function(n){n&&h(t),T&&T.d(n)}}}function on(n,t,a){var r=t.$$slots,e=void 0===r?{}:r,o=t.$$scope,c=t.href,i=t.label,u=void 0===i?"":i,s=t.fill,f=void 0===s||s,l=t.ariaLabel,$=void 0===l?"":l,v=t.class,h=void 0===v?"":v;return n.$$set=function(n){"href"in n&&a(0,c=n.href),"label"in n&&a(1,u=n.label),"fill"in n&&a(2,f=n.fill),"ariaLabel"in n&&a(3,$=n.ariaLabel),"class"in n&&a(4,h=n.class),"$$scope"in n&&a(5,o=n.$$scope)},[c,u,f,$,h,o,e]}var cn=function(t){n(u,i);var a=rn(u);function u(n){var t;return r(this,u),t=a.call(this),e(c(t),n,on,en,o,{href:0,label:1,fill:2,ariaLabel:3,class:4}),t}return u}();function un(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return a(this,e)}}function sn(n){var t,a;return{c:function(){t=V("svg"),a=V("path"),this.h()},l:function(n){t=C(n,"svg",{xmlns:!0,viewBox:!0});var r=v(t);a=C(r,"path",{d:!0}),v(a).forEach(h),r.forEach(h),this.h()},h:function(){d(a,"d","M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"viewBox","0 0 24 24")},m:function(n,r){g(n,t,r),w(t,a)},d:function(n){n&&h(t)}}}function fn(n){for(var t,a,r=[{class:"ssbc-button--facebook "+n[1]},n[3],{ariaLabel:n[0]},{href:n[2]}],e={$$slots:{default:[sn]},$$scope:{ctx:n}},o=0;o<r.length;o+=1)e=E(e,r[o]);return t=new cn({props:e}),{c:function(){T(t.$$.fragment)},l:function(n){z(t.$$.fragment,n)},m:function(n,r){S(t,n,r),a=!0},p:function(n,a){var e=x(a,1)[0],o=15&e?I(r,[2&e&&{class:"ssbc-button--facebook "+n[1]},8&e&&P(n[3]),1&e&&{ariaLabel:n[0]},4&e&&{href:n[2]}]):{};32&e&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i:function(n){a||(L(t.$$.fragment,n),a=!0)},o:function(n){_(t.$$.fragment,n),a=!1},d:function(n){j(t,n)}}}function ln(n,t,a){var r,e=["url","ariaLabel","class"],o=q(t,e),c=t.url,i=t.ariaLabel,u=void 0===i?"Share on Facebook":i,s=t.class,f=void 0===s?"":s;return n.$$set=function(n){t=E(E({},t),D(n)),a(3,o=q(t,e)),"url"in n&&a(4,c=n.url),"ariaLabel"in n&&a(0,u=n.ariaLabel),"class"in n&&a(1,f=n.class)},n.$$.update=function(){16&n.$$.dirty&&a(2,r=encodeURI("https://facebook.com/sharer/sharer.php?u=".concat(c)))},[u,f,r,o,c]}var $n=function(t){n(u,i);var a=un(u);function u(n){var t;return r(this,u),t=a.call(this),e(c(t),n,ln,fn,o,{url:4,ariaLabel:0,class:1}),t}return u}();function vn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return a(this,e)}}function hn(n){var t,a;return{c:function(){t=V("svg"),a=V("path"),this.h()},l:function(n){t=C(n,"svg",{xmlns:!0,viewBox:!0});var r=v(t);a=C(r,"path",{d:!0}),v(a).forEach(h),r.forEach(h),this.h()},h:function(){d(a,"d","M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"viewBox","0 0 24 24")},m:function(n,r){g(n,t,r),w(t,a)},d:function(n){n&&h(t)}}}function mn(n){for(var t,a,r=[{class:"ssbc-button--twitter "+n[1]},n[3],{ariaLabel:n[0]},{href:n[2]}],e={$$slots:{default:[hn]},$$scope:{ctx:n}},o=0;o<r.length;o+=1)e=E(e,r[o]);return t=new cn({props:e}),{c:function(){T(t.$$.fragment)},l:function(n){z(t.$$.fragment,n)},m:function(n,r){S(t,n,r),a=!0},p:function(n,a){var e=x(a,1)[0],o=15&e?I(r,[2&e&&{class:"ssbc-button--twitter "+n[1]},8&e&&P(n[3]),1&e&&{ariaLabel:n[0]},4&e&&{href:n[2]}]):{};512&e&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i:function(n){a||(L(t.$$.fragment,n),a=!0)},o:function(n){_(t.$$.fragment,n),a=!1},d:function(n){j(t,n)}}}function pn(n,t,a){var r,e=["text","url","ariaLabel","hashtags","via","related","class"],o=q(t,e),c=t.text,i=t.url,u=t.ariaLabel,s=void 0===u?"Share on Twitter":u,f=t.hashtags,l=void 0===f?"":f,$=t.via,v=void 0===$?"":$,h=t.related,m=void 0===h?"":h,p=t.class,d=void 0===p?"":p;return n.$$set=function(n){t=E(E({},t),D(n)),a(3,o=q(t,e)),"text"in n&&a(4,c=n.text),"url"in n&&a(5,i=n.url),"ariaLabel"in n&&a(0,s=n.ariaLabel),"hashtags"in n&&a(6,l=n.hashtags),"via"in n&&a(7,v=n.via),"related"in n&&a(8,m=n.related),"class"in n&&a(1,d=n.class)},n.$$.update=function(){496&n.$$.dirty&&a(2,r=encodeURI("https://twitter.com/intent/tweet/?text=".concat(c,"&hashtags=").concat(l,"&via=").concat(v,"&related=").concat(m,"&url=").concat(i)))},[s,d,r,o,c,i,l,v,m]}var dn=function(t){n(u,i);var a=vn(u);function u(n){var t;return r(this,u),t=a.call(this),e(c(t),n,pn,mn,o,{text:4,url:5,ariaLabel:0,hashtags:6,via:7,related:8,class:1}),t}return u}();function bn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return a(this,e)}}function gn(n){var t,a,r,e,o,c,i,u,d,b,x,y,R,k,E,I,P,q,D,V=n[6].finalRanking+"";y=new $n({props:{class:"share-button",url:n[0]}}),k=new dn({props:{class:"share-button",text:n[1],hashtags:"tbs_2021, codebreaker_thailand"}});var C=[yn,xn],M=[];function O(n,t){return n[3]?1:0}return I=O(n),P=M[I]=C[I](n),{c:function(){t=l("เก็บข้อมูลเรียบร้อยแล้ว! คุณได้ลำดับที่ "),a=l(V),r=f(),e=s("br"),o=l("\r\n\t\t\tใช้เวลาทั้งหมด (รวมด่านแรก) "),c=l(n[5]),i=f(),u=s("br"),d=s("br"),b=l("\r\n\t\t\tแชร์ให้คนอื่นรู้ว่าเราเล่นจบแล้ว!\r\n\t\t\t"),x=s("span"),T(y.$$.fragment),R=f(),T(k.$$.fragment),E=f(),P.c(),q=N()},l:function(s){t=p(s,"เก็บข้อมูลเรียบร้อยแล้ว! คุณได้ลำดับที่ "),a=p(s,V),r=m(s),e=$(s,"BR",{}),o=p(s,"\r\n\t\t\tใช้เวลาทั้งหมด (รวมด่านแรก) "),c=p(s,n[5]),i=m(s),u=$(s,"BR",{}),d=$(s,"BR",{}),b=p(s,"\r\n\t\t\tแชร์ให้คนอื่นรู้ว่าเราเล่นจบแล้ว!\r\n\t\t\t"),x=$(s,"SPAN",{});var f=v(x);z(y.$$.fragment,f),R=m(f),z(k.$$.fragment,f),f.forEach(h),E=m(s),P.l(s),q=N()},m:function(n,s){g(n,t,s),g(n,a,s),g(n,r,s),g(n,e,s),g(n,o,s),g(n,c,s),g(n,i,s),g(n,u,s),g(n,d,s),g(n,b,s),g(n,x,s),S(y,x,null),w(x,R),S(k,x,null),g(n,E,s),M[I].m(n,s),g(n,q,s),D=!0},p:function(n,t){(!D||64&t)&&V!==(V=n[6].finalRanking+"")&&B(a,V),(!D||32&t)&&B(c,n[5]);var r={};1&t&&(r.url=n[0]),y.$set(r);var e={};2&t&&(e.text=n[1]),k.$set(e);var o=I;(I=O(n))===o?M[I].p(n,t):(A(),_(M[o],1,1,(function(){M[o]=null})),H(),(P=M[I])?P.p(n,t):(P=M[I]=C[I](n)).c(),L(P,1),P.m(q.parentNode,q))},i:function(n){D||(L(y.$$.fragment,n),L(k.$$.fragment,n),L(P),D=!0)},o:function(n){_(y.$$.fragment,n),_(k.$$.fragment,n),_(P),D=!1},d:function(n){n&&h(t),n&&h(a),n&&h(r),n&&h(e),n&&h(o),n&&h(c),n&&h(i),n&&h(u),n&&h(d),n&&h(b),n&&h(x),j(y),j(k),n&&h(E),M[I].d(n),n&&h(q)}}}function wn(n){var t,a,r,e,o,c,i,u,s;function $(t){n[9](t)}var v={variant:"outlined",label:"ชื่อใน gather.town",required:!0};function d(t){n[10](t)}void 0!==n[4].username&&(v.value=n[4].username),a=new Y({props:v}),K.push((function(){return W(a,"value",$)}));var b={variant:"outlined",label:"email ที่ใช้สมัคร",input$autocomplete:"email",required:!0};return void 0!==n[4].email&&(b.value=n[4].email),o=new Y({props:b}),K.push((function(){return W(o,"value",d)})),(u=new tn({props:{variant:"raised",$$slots:{default:[Ln]},$$scope:{ctx:n}}})).$on("click",n[7]),{c:function(){t=l("กรอกข้อมูลเพื่อรับของที่ระลึก\r\n\t\t\t"),T(a.$$.fragment),e=f(),T(o.$$.fragment),i=f(),T(u.$$.fragment)},l:function(n){t=p(n,"กรอกข้อมูลเพื่อรับของที่ระลึก\r\n\t\t\t"),z(a.$$.fragment,n),e=m(n),z(o.$$.fragment,n),i=m(n),z(u.$$.fragment,n)},m:function(n,r){g(n,t,r),S(a,n,r),g(n,e,r),S(o,n,r),g(n,i,r),S(u,n,r),s=!0},p:function(n,t){var e={};!r&&16&t&&(r=!0,e.value=n[4].username,J((function(){return r=!1}))),a.$set(e);var i={};!c&&16&t&&(c=!0,i.value=n[4].email,J((function(){return c=!1}))),o.$set(i);var s={};65536&t&&(s.$$scope={dirty:t,ctx:n}),u.$set(s)},i:function(n){s||(L(a.$$.fragment,n),L(o.$$.fragment,n),L(u.$$.fragment,n),s=!0)},o:function(n){_(a.$$.fragment,n),_(o.$$.fragment,n),_(u.$$.fragment,n),s=!1},d:function(n){n&&h(t),j(a,n),n&&h(e),j(o,n),n&&h(i),j(u,n)}}}function xn(n){var t,a;return{c:function(){t=s("h2"),a=l("ขอบคุณครับ แล้วมาแก้ปริศนาด้วยกันใหม่ในโอกาสหน้า 😉")},l:function(n){t=$(n,"H2",{});var r=v(t);a=p(r,"ขอบคุณครับ แล้วมาแก้ปริศนาด้วยกันใหม่ในโอกาสหน้า 😉"),r.forEach(h)},m:function(n,r){g(n,t,r),w(t,a)},p:Q,i:Q,o:Q,d:function(n){n&&h(t)}}}function yn(n){var t,a,r,e,o;function c(t){n[11](t)}var i={textarea:!0,label:"อยากบอกอะไรผู้ประดิษฐ์ปริศนาบ้าง",input$rows:4,input$cols:40};return void 0!==n[2]&&(i.value=n[2]),t=new Y({props:i}),K.push((function(){return W(t,"value",c)})),(e=new tn({props:{variant:"raised",$$slots:{default:[kn]},$$scope:{ctx:n}}})).$on("click",n[8]),{c:function(){T(t.$$.fragment),r=f(),T(e.$$.fragment)},l:function(n){z(t.$$.fragment,n),r=m(n),z(e.$$.fragment,n)},m:function(n,a){S(t,n,a),g(n,r,a),S(e,n,a),o=!0},p:function(n,r){var o={};!a&&4&r&&(a=!0,o.value=n[2],J((function(){return a=!1}))),t.$set(o);var c={};65536&r&&(c.$$scope={dirty:r,ctx:n}),e.$set(c)},i:function(n){o||(L(t.$$.fragment,n),L(e.$$.fragment,n),o=!0)},o:function(n){_(t.$$.fragment,n),_(e.$$.fragment,n),o=!1},d:function(n){j(t,n),n&&h(r),j(e,n)}}}function Rn(n){var t;return{c:function(){t=l("ส่งข้อมูล")},l:function(n){t=p(n,"ส่งข้อมูล")},m:function(n,a){g(n,t,a)},d:function(n){n&&h(t)}}}function kn(n){var t,a;return t=new nn({props:{$$slots:{default:[Rn]},$$scope:{ctx:n}}}),{c:function(){T(t.$$.fragment)},l:function(n){z(t.$$.fragment,n)},m:function(n,r){S(t,n,r),a=!0},p:function(n,a){var r={};65536&a&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i:function(n){a||(L(t.$$.fragment,n),a=!0)},o:function(n){_(t.$$.fragment,n),a=!1},d:function(n){j(t,n)}}}function Bn(n){var t;return{c:function(){t=l("ส่งข้อมูล")},l:function(n){t=p(n,"ส่งข้อมูล")},m:function(n,a){g(n,t,a)},d:function(n){n&&h(t)}}}function Ln(n){var t,a;return t=new nn({props:{$$slots:{default:[Bn]},$$scope:{ctx:n}}}),{c:function(){T(t.$$.fragment)},l:function(n){z(t.$$.fragment,n)},m:function(n,r){S(t,n,r),a=!0},p:function(n,a){var r={};65536&a&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i:function(n){a||(L(t.$$.fragment,n),a=!0)},o:function(n){_(t.$$.fragment,n),a=!1},d:function(n){j(t,n)}}}function _n(n){var t,a,r,e,o,c,i,u,b=[wn,gn],y=[];function R(n,t){return n[6].round2final?1:0}return c=R(n),i=y[c]=b[c](n),{c:function(){t=s("div"),a=s("div"),r=s("h1"),e=l("🎉คุณคือผู้พิชิตปริศนา TBS2021🎉"),o=f(),i.c(),this.h()},l:function(n){t=$(n,"DIV",{class:!0});var c=v(t);a=$(c,"DIV",{class:!0});var u=v(a);r=$(u,"H1",{});var s=v(r);e=p(s,"🎉คุณคือผู้พิชิตปริศนา TBS2021🎉"),s.forEach(h),o=m(u),i.l(u),u.forEach(h),c.forEach(h),this.h()},h:function(){d(a,"class","flex-column"),d(t,"class","main")},m:function(n,i){g(n,t,i),w(t,a),w(a,r),w(r,e),w(a,o),y[c].m(a,null),u=!0},p:function(n,t){var r=x(t,1)[0],e=c;(c=R(n))===e?y[c].p(n,r):(A(),_(y[e],1,1,(function(){y[e]=null})),H(),(i=y[c])?i.p(n,r):(i=y[c]=b[c](n)).c(),L(i,1),i.m(a,null))},i:function(n){u||(L(i),u=!0)},o:function(n){_(i),u=!1},d:function(n){n&&h(t),y[c].d()}}}function En(n,t,a){var r,e;M(n,X,(function(n){return a(6,r=n)})),M(n,Z,(function(n){return a(13,e=n)}));var o=this&&this.__awaiter||function(n,t,a,r){return new(a||(a=Promise))((function(e,o){function c(n){try{u(r.next(n))}catch(n){o(n)}}function i(n){try{u(r.throw(n))}catch(n){o(n)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(n){n(t)}))).then(c,i)}u((r=r.apply(n,t||[])).next())}))},c="",i="",u="",s=!1,f=an(),l={username:"",email:""},$="",v="";return O((function(){return o(void 0,void 0,void 0,G.mark((function n(){var t;return G.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:X.useLocalStorage(),t={round:1,answers:r.round2answers},f.emit("verify save",t,(function(n,t){n[4]||U("/enter/final"),$=t[4]})),r.timeTotal<=0&&F(X,r.timeTotal=e.getTime()-r.timeStarted,r),a(5,v="".concat(Math.floor(r.timeTotal/6e4)," นาที ").concat(Math.floor(r.timeTotal%6e4/1e3)," วินาที"));case 5:case"end":return n.stop()}}),n)})))})),[c,i,u,s,l,v,r,function(){var n={round:1,answer:$,user:l.username,email:l.email,alias:r.alias,timeTotal:r.timeTotal};f.emit("add to leaderboard",n,(function(n){n.success&&(F(X,r.round2final=!0,r),F(X,r.finalRanking=n.ranking,r),a(0,c="https://tbs2021puzzles.herokuapp.com/round1&display=popup&quote=แก้ปริศนาเสร็จเป็นคนที่ ".concat(r.finalRanking," ใช้เวลา ").concat(v)),a(1,i="แก้ปริศนาได้เป็นคนที่ ".concat(r.finalRanking," ใช้เวลา ").concat(r.timeTotal," Thailand Board Game Show 2021 Puzzles")))}))},function(){a(3,s=!0),f.emit("submit impression",u)},function(t){n.$$.not_equal(l.username,t)&&(l.username=t,a(4,l))},function(t){n.$$.not_equal(l.email,t)&&(l.email=t,a(4,l))},function(n){a(2,u=n)}]}var Tn=function(t){n(u,i);var a=bn(u);function u(n){var t;return r(this,u),t=a.call(this),e(c(t),n,En,_n,o,{}),t}return u}();export{Tn as default};
