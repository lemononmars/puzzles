import{L as t,M as n,N as e,_ as a,a as r,b as o,c as i,i as c,s,d as u,T as l,S as f,an as p,X as d,y as m,K as b,z as h,A as g,o as v,a0 as O,ap as _,w as y,t as A,C as $,r as E,u as T,k as S,q as I,a3 as C,a4 as M,ai as N,ac as D,ad as k,U as j,a5 as L,D as P,a7 as R,a8 as x,a9 as w,aa as B,O as U,P as F,Q as G,R as V,e as K,g as X,h as q,Z as Y,p as z,$ as H,a1 as Q,a2 as Z,v as J,am as W}from"./client.5feea49f.js";import{c as tt,f as nt,_ as et}from"./CommonLabel.c55b03e8.js";import{R as at,a as rt,A as ot,d as it}from"./Button.0cf58a94.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ct={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},st={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},ut=function(e){function a(t){var r=e.call(this,n(n({},a.defaultAdapter),t))||this;return r.hasToggledAriaLabel=!1,r}return t(a,e),Object.defineProperty(a,"cssClasses",{get:function(){return ct},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),a.prototype.init=function(){var t=this.adapter.getAttr(st.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(st.DATA_ARIA_LABEL_OFF);if(t&&n){if(null!==this.adapter.getAttr(st.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(st.ARIA_PRESSED,String(this.isOn()))},a.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},a.prototype.isOn=function(){return this.adapter.hasClass(ct.ICON_BUTTON_ON)},a.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(ct.ICON_BUTTON_ON):this.adapter.removeClass(ct.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=t?this.adapter.getAttr(st.DATA_ARIA_LABEL_ON):this.adapter.getAttr(st.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(st.ARIA_LABEL,n||"")}else this.adapter.setAttr(st.ARIA_PRESSED,""+t)},a}(e);function lt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return o(this,e)}}function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function pt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ft(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function dt(t){var n,e=t[28].default,a=R(e,t,t[32],null);return{c:function(){a&&a.c()},l:function(t){a&&a.l(t)},m:function(t,e){a&&a.m(t,e),n=!0},p:function(t,r){a&&a.p&&(!n||2&r[1])&&x(a,e,t,t[32],n?B(e,t[32],r,null):w(t[32]),null)},i:function(t){n||(T(a,t),n=!0)},o:function(t){A(a,t),n=!1},d:function(t){a&&a.d(t)}}}function mt(t){var n,e,a,r,o=[{use:[[at,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[24].disabled,addClass:t[21],removeClass:t[22],addStyle:t[23]}],t[17]].concat(p(t[1]))},{class:tt(pt((n={},d(n,t[2],!0),d(n,"mdc-icon-button",!0),d(n,"mdc-icon-button--on",t[0]!==t[18]&&t[0]),d(n,"mdc-card__action","card:action"===t[19]),d(n,"mdc-card__action--icon","card:action"===t[19]),d(n,"mdc-top-app-bar__navigation-icon","top-app-bar:navigation"===t[19]),d(n,"mdc-top-app-bar__action-item","top-app-bar:action"===t[19]),d(n,"mdc-snackbar__dismiss","snackbar:actions"===t[19]),d(n,"mdc-data-table__pagination-button","data-table:pagination"===t[19]),d(n,"mdc-data-table__sort-icon-button","data-table:sortable-header-cell"===t[19]),d(n,"mdc-dialog__close","dialog:header"===t[19]&&"close"===t[9]),n),t[13]))},{style:Object.entries(t[14]).map(bt).concat([t[3]]).join(" ")},{"aria-pressed":t[0]!==t[18]?t[0]?"true":"false":null},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[20]},{href:t[8]},t[16],t[15],t[24]],i=t[10];function c(t){for(var n={$$slots:{default:[dt]},$$scope:{ctx:t}},e=0;e<o.length;e+=1)n=j(n,o[e]);return{props:n}}return i&&(e=new i(c(t)),t[29](e),e.$on("click",t[30]),e.$on("click",t[31])),{c:function(){e&&m(e.$$.fragment),a=b()},l:function(t){e&&h(e.$$.fragment,t),a=b()},m:function(t,n){e&&g(e,t,n),v(t,a,n),r=!0},p:function(t,n){var r,s=33547263&n[0]?O(o,[31588402&n[0]&&{use:[[at,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[24].disabled,addClass:t[21],removeClass:t[22],addStyle:t[23]}],t[17]].concat(p(t[1]))},795141&n[0]&&{class:tt(pt((r={},d(r,t[2],!0),d(r,"mdc-icon-button",!0),d(r,"mdc-icon-button--on",t[0]!==t[18]&&t[0]),d(r,"mdc-card__action","card:action"===t[19]),d(r,"mdc-card__action--icon","card:action"===t[19]),d(r,"mdc-top-app-bar__navigation-icon","top-app-bar:navigation"===t[19]),d(r,"mdc-top-app-bar__action-item","top-app-bar:action"===t[19]),d(r,"mdc-snackbar__dismiss","snackbar:actions"===t[19]),d(r,"mdc-data-table__pagination-button","data-table:pagination"===t[19]),d(r,"mdc-data-table__sort-icon-button","data-table:sortable-header-cell"===t[19]),d(r,"mdc-dialog__close","dialog:header"===t[19]&&"close"===t[9]),r),t[13]))},16392&n[0]&&{style:Object.entries(t[14]).map(bt).concat([t[3]]).join(" ")},262145&n[0]&&{"aria-pressed":t[0]!==t[18]?t[0]?"true":"false":null},193&n[0]&&{"aria-label":t[0]?t[6]:t[7]},64&n[0]&&{"data-aria-label-on":t[6]},128&n[0]&&{"data-aria-label-off":t[7]},1048576&n[0]&&{"aria-describedby":t[20]},256&n[0]&&{href:t[8]},65536&n[0]&&_(t[16]),32768&n[0]&&_(t[15]),16777216&n[0]&&_(t[24])]):{};if(2&n[1]&&(s.$$scope={dirty:n,ctx:t}),i!==(i=t[10])){if(e){y();var u=e;A(u.$$.fragment,1,0,(function(){$(u,1)})),E()}i?(e=new i(c(t)),t[29](e),e.$on("click",t[30]),e.$on("click",t[31]),m(e.$$.fragment),T(e.$$.fragment,1),g(e,a.parentNode,a)):e=null}else i&&e.$set(s)},i:function(t){r||(e&&T(e.$$.fragment,t),r=!0)},o:function(t){e&&A(e.$$.fragment,t),r=!1},d:function(n){t[29](null),n&&S(a),e&&$(e,n)}}}var bt=function(t){var n=I(t,2),e=n[0],a=n[1];return"".concat(e,": ").concat(a,";")};function ht(t,n,e){var a,r,o,i=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","href","action","component","getElement"],c=C(n,i),s=n,u=s.$$slots,l=void 0===u?{}:u,f=s.$$scope,p=nt(M()),d=function(){},m=n.use,b=void 0===m?[]:m,h=n.class,g=void 0===h?"":h,v=n.style,O=void 0===v?"":v,_=n.ripple,y=void 0===_||_,A=n.color,$=void 0===A?null:A,E=n.toggle,T=void 0!==E&&E,S=n.pressed,I=void 0===S?d:S,R=n.ariaLabelOn,x=void 0===R?null:R,w=n.ariaLabelOff,B=void 0===w?null:w,U=n.href,F=void 0===U?null:U,G=n.action,V=void 0===G?null:G,K={},X={},q={},Y=N("SMUI:icon-button:context"),z=N("SMUI:icon-button:aria-describedby"),H=n.component,Q=void 0===H?null==F?rt:ot:H;D("SMUI:icon:context","icon-button");var Z=null;function J(t){return t in K?K[t]:ct().classList.contains(t)}function W(t){K[t]||e(13,K[t]=!0,K)}function tt(t){t in K&&!K[t]||e(13,K[t]=!1,K)}function et(t){return t in q?q[t]:ct().getAttribute(t)}function at(t,n){q[t]!==n&&e(15,q[t]=n,q)}function ct(){return r.getElement()}k((function(){o&&o.destroy()}));return t.$$set=function(t){n=j(j({},n),L(t)),e(24,c=C(n,i)),"use"in t&&e(1,b=t.use),"class"in t&&e(2,g=t.class),"style"in t&&e(3,O=t.style),"ripple"in t&&e(4,y=t.ripple),"color"in t&&e(5,$=t.color),"toggle"in t&&e(25,T=t.toggle),"pressed"in t&&e(0,I=t.pressed),"ariaLabelOn"in t&&e(6,x=t.ariaLabelOn),"ariaLabelOff"in t&&e(7,B=t.ariaLabelOff),"href"in t&&e(8,F=t.href),"action"in t&&e(9,V=t.action),"component"in t&&e(10,Q=t.component),"$$scope"in t&&e(32,f=t.$$scope)},t.$$.update=function(){512&t.$$.dirty[0]&&e(16,a=function(){if("data-table:pagination"!==Y)return"dialog:header"===Y?{"data-mdc-dialog-action":V}:{action:V};switch(V){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}}()),167778304&t.$$.dirty[0]&&r&&ct()&&T!==Z&&(T&&!o?(e(12,o=new ut({addClass:W,hasClass:J,notifyChange:function(t){!function(t){e(0,I=t.isOn)}(t),it(ct(),"MDCIconButtonToggle:change",t)},removeClass:tt,getAttr:et,setAttr:at})),o.init()):!T&&o&&(o.destroy(),e(12,o=null),e(13,K={}),e(15,q={})),e(27,Z=T)),4097&t.$$.dirty[0]&&o&&o.isOn()!==I&&o.toggle(I)},[I,b,g,O,y,$,x,B,F,V,Q,r,o,K,X,q,a,p,d,Y,z,W,tt,function(t,n){X[t]!=n&&(""===n||null==n?(delete X[t],e(14,X)):e(14,X[t]=n,X))},c,T,ct,Z,l,function(t){P[t?"unshift":"push"]((function(){e(11,r=t)}))},function(){return o&&o.handleClick()},function(){return"top-app-bar:navigation"===Y&&it(r,"SMUI:top-app-bar:icon-button:nav")},f]}var gt=function(t){a(e,f);var n=lt(e);function e(t){var a;return i(this,e),a=n.call(this),c(u(a),t,ht,mt,s,{use:1,class:2,style:3,ripple:4,color:5,toggle:25,pressed:0,ariaLabelOn:6,ariaLabelOff:7,href:8,action:9,component:10,getElement:26},null,[-1,-1]),a}return l(e,[{key:"getElement",get:function(){return this.$$.ctx[26]}}]),e}(),vt={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Ot={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},_t={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},yt=_t.ARIA_LIVE_DELAY_MS,At=Ot.ARIA_LIVE_LABEL_TEXT_ATTR;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $t=vt.OPENING,Et=vt.OPEN,Tt=vt.CLOSING,St=Ot.REASON_ACTION,It=Ot.REASON_DISMISS,Ct=function(e){function a(t){var r=e.call(this,n(n({},a.defaultAdapter),t))||this;return r.isOpen_=!1,r.animationFrame_=0,r.animationTimer_=0,r.autoDismissTimer_=0,r.autoDismissTimeoutMs_=_t.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,r.closeOnEscape_=!0,r}return t(a,e),Object.defineProperty(a,"cssClasses",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return _t},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),a.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter.removeClass($t),this.adapter.removeClass(Et),this.adapter.removeClass(Tt)},a.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Tt),this.adapter.addClass($t),this.adapter.announce(),this.runNextAnimationFrame_((function(){t.adapter.addClass(Et),t.animationTimer_=setTimeout((function(){var n=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter.notifyOpened(),n!==_t.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(It)}),n))}),_t.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},a.prototype.close=function(t){var n=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter.notifyClosing(t),this.adapter.addClass(vt.CLOSING),this.adapter.removeClass(vt.OPEN),this.adapter.removeClass(vt.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){n.handleAnimationTimerEnd_(),n.adapter.notifyClosed(t)}),_t.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},a.prototype.isOpen=function(){return this.isOpen_},a.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},a.prototype.setTimeoutMs=function(t){var n=_t.MIN_AUTO_DISMISS_TIMEOUT_MS,e=_t.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===_t.INDETERMINATE||t<=e&&t>=n))throw new Error("\n        timeoutMs must be an integer in the range "+n+"–"+e+"\n        (or "+_t.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},a.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},a.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},a.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(It)},a.prototype.handleActionButtonClick=function(t){this.close(St)},a.prototype.handleActionIconClick=function(t){this.close(It)},a.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},a.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(vt.OPENING),this.adapter.removeClass(vt.CLOSING)},a.prototype.runNextAnimationFrame_=function(t){var n=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){n.animationFrame_=0,clearTimeout(n.animationTimer_),n.animationTimer_=setTimeout(t,0)}))},a}(e);function Mt(t){return Object.entries(t).filter((function(t){var n=I(t,2),e=n[0],a=n[1];return""!==e&&a})).map((function(t){return I(t,1)[0]})).join(" ")}function Nt(t,n,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{bubbles:!0};if("undefined"!=typeof Event&&t){var r=new CustomEvent(n,Object.assign(Object.assign({},a),{detail:e}));return null==t||t.dispatchEvent(r),r}}function Dt(t,n){for(var e=Object.getOwnPropertyNames(t),a={},r=0;r<e.length;r++){var o=e[r],i=o.indexOf("$");-1!==i&&-1!==n.indexOf(o.substring(0,i+1))||-1===n.indexOf(o)&&(a[o]=t[o])}return a}var kt=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,jt=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Lt(t){var n,e=[];function a(n){F(t,n)}return t.$on=function(t,a){var r=t,o=function(){};return n?o=n(r,a):e.push([r,a]),r.match(kt)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',r),function(){o()}},function(t){var r=[],o={};n=function(n,e){var i=n,c=e,s=!1,u=i.match(kt),l=i.match(jt),f=u||l;if(i.match(/^SMUI:\w+:/)){for(var p=i.split(":"),d="",m=0;m<p.length;m++)d+=m===p.length-1?":"+p[m]:p[m].split("-").map((function(t){return t.slice(0,1).toUpperCase()+t.slice(1)})).join("");console.warn("The event ".concat(i.split("$")[0]," has been renamed to ").concat(d.split("$")[0],".")),i=d}if(f){var b=i.split(u?":":"$");i=b[0];var h=Object.fromEntries(b.slice(1).map((function(t){return[t,!0]})));h.passive&&((s=s||{}).passive=!0),h.nonpassive&&((s=s||{}).passive=!1),h.capture&&((s=s||{}).capture=!0),h.once&&((s=s||{}).once=!0),h.preventDefault&&(c=G(c)),h.stopPropagation&&(c=V(c))}var g=U(t,i,c,s),v=function t(){g();var n=r.indexOf(t);n>-1&&r.splice(n,1)};return r.push(v),i in o||(o[i]=U(t,i,a)),v};for(var i=0;i<e.length;i++)n(e[i][0],e[i][1]);return{destroy:function(){for(var t=0;t<r.length;t++)r[t]();for(var n=0,e=Object.entries(o);n<e.length;n++){e[n][1]()}}}}}function Pt(t,n){for(var e=Object.getOwnPropertyNames(t),a={},r=0;r<e.length;r++){var o=e[r];o.substring(0,n.length)===n&&(a[o.substring(n.length)]=t[o])}return a}function Rt(t,n){var e=[];if(n)for(var a=0;a<n.length;a++){var r=n[a],o=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?e.push(o(t,r[1])):e.push(o(t))}return{update:function(t){if((t&&t.length||0)!=e.length)throw new Error("You must not change the length of an actions array.");if(t)for(var n=0;n<t.length;n++){var a=e[n];if(a&&a.update){var r=t[n];Array.isArray(r)&&r.length>1?a.update(r[1]):a.update()}}},destroy:function(){for(var t=0;t<e.length;t++){var n=e[t];n&&n.destroy&&n.destroy()}}}}function xt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return o(this,e)}}function wt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function Bt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?wt(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):wt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Ut(t){for(var n,e,a,r,o,i,c,s,u,l,f,p=t[25].default,m=R(p,t,t[24],null),b=[{class:o=Mt((n={},d(n,t[4],!0),d(n,"mdc-snackbar__surface",!0),n))},{role:"status"},{"aria-relevant":"additions"},Pt(t[12],"surface$")],h={},g=0;g<b.length;g+=1)h=j(h,b[g]);for(var _=[{class:c=Mt(Bt((e={},d(e,t[1],!0),d(e,"mdc-snackbar",!0),d(e,"mdc-snackbar--stacked","stacked"===t[2]),d(e,"mdc-snackbar--leading",t[3]),e),t[8]))},Dt(t[12],["surface$"])],y={},$=0;$<_.length;$+=1)y=j(y,_[$]);return{c:function(){a=K("aside"),r=K("div"),m&&m.c(),this.h()},l:function(t){a=X(t,"ASIDE",{class:!0});var n=q(a);r=X(n,"DIV",{class:!0,role:!0,"aria-relevant":!0});var e=q(r);m&&m.l(e),e.forEach(S),n.forEach(S),this.h()},h:function(){Y(r,h),Y(a,y)},m:function(n,e){v(n,a,e),z(a,r),m&&m.m(r,null),t[26](a),u=!0,l||(f=[H(i=Rt.call(null,r,t[5])),U(r,"click",t[10]),H(s=Rt.call(null,a,t[0])),H(t[9].call(null,a)),U(a,"MDCSnackbar:closed",t[11]),U(a,"keydown",t[27])],l=!0)},p:function(t,n){var e,l;m&&m.p&&(!u||16777216&n[0])&&x(m,p,t,t[24],u?B(p,t[24],n,null):w(t[24]),null),Y(r,h=O(b,[(!u||16&n[0]&&o!==(o=Mt((e={},d(e,t[4],!0),d(e,"mdc-snackbar__surface",!0),e))))&&{class:o},{role:"status"},{"aria-relevant":"additions"},4096&n[0]&&Pt(t[12],"surface$")])),i&&Q(i.update)&&32&n[0]&&i.update.call(null,t[5]),Y(a,y=O(_,[(!u||270&n[0]&&c!==(c=Mt(Bt((l={},d(l,t[1],!0),d(l,"mdc-snackbar",!0),d(l,"mdc-snackbar--stacked","stacked"===t[2]),d(l,"mdc-snackbar--leading",t[3]),l),t[8]))))&&{class:c},4096&n[0]&&Dt(t[12],["surface$"])])),s&&Q(s.update)&&1&n[0]&&s.update.call(null,t[0])},i:function(t){u||(T(m,t),u=!0)},o:function(t){A(m,t),u=!1},d:function(n){n&&S(a),m&&m.d(n),t[26](null),l=!1,Z(f)}}}var Ft=Promise.resolve();function Gt(t,n,e){var a=["use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"],r=C(n,a),o=n,i=o.$$slots,c=void 0===i?{}:i,s=o.$$scope,u=W,l=Lt(M()),f=function(){};function p(t){return t===f}var d,m,b,h=n.use,g=void 0===h?[]:h,v=n.class,O=void 0===v?"":v,_=n.variant,y=void 0===_?"":_,A=n.leading,$=void 0!==A&&A,E=n.timeoutMs,T=void 0===E?5e3:E,S=n.closeOnEscape,I=void 0===S||S,N=n.labelText,k=void 0===N?f:N,R=n.actionButtonText,x=void 0===R?f:R,w=n.surface$class,B=void 0===w?"":w,U=n.surface$use,F=void 0===U?[]:U,G={},V=new Promise((function(t){return b=t}));function K(t){G[t]||e(8,G[t]=!0,G)}function X(t){t in G&&!G[t]||e(8,G[t]=!1,G)}function q(){var t;return null!==(t=z().querySelector(".mdc-snackbar__label"))&&void 0!==t?t:document.createElement("div")}function Y(){var t;return null!==(t=z().querySelector(".mdc-snackbar__action"))&&void 0!==t?t:document.createElement("button")}function z(){return d}D("SMUI:label:context","snackbar"),J((function(){return e(6,m=new Ct({addClass:K,announce:function(){return function(t,n){void 0===n&&(n=t);var e=t.getAttribute("aria-live"),a=n.textContent.trim();a&&e&&(t.setAttribute("aria-live","off"),n.textContent="",n.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',n.setAttribute(At,a),setTimeout((function(){t.setAttribute("aria-live",e),n.removeAttribute(At),n.textContent=a}),yt))}(q())},notifyClosed:function(t){return Nt(z(),"MDCSnackbar:closed",t?{reason:t}:{})},notifyClosing:function(t){return Nt(z(),"MDCSnackbar:closing",t?{reason:t}:{})},notifyOpened:function(){return Nt(z(),"MDCSnackbar:opened")},notifyOpening:function(){return Nt(z(),"MDCSnackbar:opening")},removeClass:X})),m.init(),function(){m.destroy()}}));return t.$$set=function(t){n=j(j({},n),L(t)),e(12,r=C(n,a)),"use"in t&&e(0,g=t.use),"class"in t&&e(1,O=t.class),"variant"in t&&e(2,y=t.variant),"leading"in t&&e(3,$=t.leading),"timeoutMs"in t&&e(13,T=t.timeoutMs),"closeOnEscape"in t&&e(14,I=t.closeOnEscape),"labelText"in t&&e(15,k=t.labelText),"actionButtonText"in t&&e(16,x=t.actionButtonText),"surface$class"in t&&e(4,B=t.surface$class),"surface$use"in t&&e(5,F=t.surface$use),"$$scope"in t&&e(24,s=t.$$scope)},t.$$.update=function(){8256&t.$$.dirty[0]&&m&&m.getTimeoutMs()!==T&&m.setTimeoutMs(T),16448&t.$$.dirty[0]&&m&&m.getCloseOnEscape()!==I&&m.setCloseOnEscape(I),32832&t.$$.dirty[0]&&m&&!p(k)&&q().textContent!==k&&(q().textContent=k),65600&t.$$.dirty[0]&&m&&!p(x)&&Y().textContent!==x&&(Y().textContent=x)},[g,O,y,$,B,F,m,d,G,l,function(t){var n=t.target;m&&(u(n,".mdc-snackbar__action")?m.handleActionButtonClick(t):u(n,".mdc-snackbar__dismiss")&&m.handleActionIconClick(t))},function(){b(),V=new Promise((function(t){return b=t}))},r,T,I,k,x,function(){Ft=Ft.then((function(){return m.open(),V}))},function(){return m.open()},function(t){return m.close(t)},function(){return m.isOpen()},q,Y,z,s,c,function(t){P[t?"unshift":"push"]((function(){e(7,d=t)}))},function(t){return m&&m.handleKeyDown(t)}]}var Vt=function(t){a(e,f);var n=xt(e);function e(t){var a;return i(this,e),a=n.call(this),c(u(a),t,Gt,Ut,s,{use:0,class:1,variant:2,leading:3,timeoutMs:13,closeOnEscape:14,labelText:15,actionButtonText:16,surface$class:4,surface$use:5,open:17,forceOpen:18,close:19,isOpen:20,getLabelElement:21,getActionButtonElement:22,getElement:23},null,[-1,-1]),a}return l(e,[{key:"open",get:function(){return this.$$.ctx[17]}},{key:"forceOpen",get:function(){return this.$$.ctx[18]}},{key:"close",get:function(){return this.$$.ctx[19]}},{key:"isOpen",get:function(){return this.$$.ctx[20]}},{key:"getLabelElement",get:function(){return this.$$.ctx[21]}},{key:"getActionButtonElement",get:function(){return this.$$.ctx[22]}},{key:"getElement",get:function(){return this.$$.ctx[23]}}]),e}();function Kt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return o(this,e)}}function Xt(t){for(var n,e,a,r,o,i=t[6].default,c=R(i,t,t[5],null),s=[t[3]],u={},l=0;l<s.length;l+=1)u=j(u,s[l]);return{c:function(){n=K("div"),c&&c.c(),this.h()},l:function(t){n=X(t,"DIV",{});var e=q(n);c&&c.l(e),e.forEach(S),this.h()},h:function(){Y(n,u)},m:function(i,s){v(i,n,s),c&&c.m(n,null),t[7](n),a=!0,r||(o=[H(e=Rt.call(null,n,t[0])),H(t[2].call(null,n))],r=!0)},p:function(t,r){var o=I(r,1)[0];c&&c.p&&(!a||32&o)&&x(c,i,t,t[5],a?B(i,t[5],o,null):w(t[5]),null),Y(n,u=O(s,[8&o&&t[3]])),e&&Q(e.update)&&1&o&&e.update.call(null,t[0])},i:function(t){a||(T(c,t),a=!0)},o:function(t){A(c,t),a=!1},d:function(e){e&&S(n),c&&c.d(e),t[7](null),r=!1,Z(o)}}}function qt(t,n,e){var a,r=["use","getElement"],o=C(n,r),i=n,c=i.$$slots,s=void 0===c?{}:c,u=i.$$scope,l=n.use,f=void 0===l?[]:l,p=Lt(M());return t.$$set=function(t){n=j(j({},n),L(t)),e(3,o=C(n,r)),"use"in t&&e(0,f=t.use),"$$scope"in t&&e(5,u=t.$$scope)},[f,a,p,o,function(){return a},u,s,function(t){P[t?"unshift":"push"]((function(){e(1,a=t)}))}]}var Yt=function(t){a(e,f);var n=Kt(e);function e(t){var a;return i(this,e),a=n.call(this),c(u(a),t,qt,Xt,s,{use:0,getElement:4}),a}return l(e,[{key:"getElement",get:function(){return this.$$.ctx[4]}}]),e}();function zt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var i=r(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return o(this,e)}}function Ht(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return Qt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Qt(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw o}}}}function Qt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Zt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function Jt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Zt(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Zt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Wt(t){var n,e=t[10].default,a=R(e,t,t[12],null);return{c:function(){a&&a.c()},l:function(t){a&&a.l(t)},m:function(t,e){a&&a.m(t,e),n=!0},p:function(t,r){a&&a.p&&(!n||4096&r)&&x(a,e,t,t[12],n?B(e,t[12],r,null):w(t[12]),null)},i:function(t){n||(T(a,t),n=!0)},o:function(t){A(a,t),n=!1},d:function(t){a&&a.d(t)}}}function tn(t){var n,e,a,r,o=[{use:[t[7]].concat(p(t[0]))},{class:Mt(Jt((n={},d(n,t[1],!0),d(n,t[5],!0),n),t[4]))},t[6],t[8]],i=t[2];function c(t){for(var n={$$slots:{default:[Wt]},$$scope:{ctx:t}},e=0;e<o.length;e+=1)n=j(n,o[e]);return{props:n}}return i&&(e=new i(c(t)),t[11](e)),{c:function(){e&&m(e.$$.fragment),a=b()},l:function(t){e&&h(e.$$.fragment,t),a=b()},m:function(t,n){e&&g(e,t,n),v(t,a,n),r=!0},p:function(t,n){var r,s=I(n,1)[0],u=499&s?O(o,[129&s&&{use:[t[7]].concat(p(t[0]))},50&s&&{class:Mt(Jt((r={},d(r,t[1],!0),d(r,t[5],!0),r),t[4]))},64&s&&_(t[6]),256&s&&_(t[8])]):{};if(4096&s&&(u.$$scope={dirty:s,ctx:t}),i!==(i=t[2])){if(e){y();var l=e;A(l.$$.fragment,1,0,(function(){$(l,1)})),E()}i?(e=new i(c(t)),t[11](e),m(e.$$.fragment),T(e.$$.fragment,1),g(e,a.parentNode,a)):e=null}else i&&e.$set(u)},i:function(t){r||(e&&T(e.$$.fragment,t),r=!0)},o:function(t){e&&A(e.$$.fragment,t),r=!1},d:function(n){t[11](null),n&&S(a),e&&$(e,n)}}}var nn={component:Yt,class:"",classMap:{},contexts:{},props:{}};function en(t,n,e){var a,r=["use","class","component","getElement"],o=C(n,r),i=n,c=i.$$slots,s=void 0===c?{}:c,u=i.$$scope,l=n.use,f=void 0===l?[]:l,p=n.class,d=void 0===p?"":p,m=nn.class,b={},h=[],g=nn.contexts,v=nn.props,O=n.component,_=void 0===O?nn.component:O;Object.entries(nn.classMap).forEach((function(t){var n=I(t,2),a=n[0],r=n[1],o=N(r);o&&"subscribe"in o&&h.push(o.subscribe((function(t){e(4,b[a]=t,b)})))}));var y=Lt(M());for(var A in g)g.hasOwnProperty(A)&&D(A,g[A]);return k((function(){var t,n=Ht(h);try{for(n.s();!(t=n.n()).done;){(0,t.value)()}}catch(t){n.e(t)}finally{n.f()}})),t.$$set=function(t){n=j(j({},n),L(t)),e(8,o=C(n,r)),"use"in t&&e(0,f=t.use),"class"in t&&e(1,d=t.class),"component"in t&&e(2,_=t.component),"$$scope"in t&&e(12,u=t.$$scope)},[f,d,_,a,b,m,v,y,o,function(){return a.getElement()},s,function(t){P[t?"unshift":"push"]((function(){e(3,a=t)}))},u]}var an=function(t){a(e,f);var n=zt(e);function e(t){var a;return i(this,e),a=n.call(this),c(u(a),t,en,tn,s,{use:0,class:1,component:2,getElement:9}),a}return l(e,[{key:"getElement",get:function(){return this.$$.ctx[9]}}]),e}(),rn=Object.assign({},nn);var on,cn=(on={class:"mdc-snackbar__actions",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},component:Yt},new Proxy(an,{construct:function(t,n){return Object.assign(nn,rn,on),et(t,p(n))},get:function(t,n){return Object.assign(nn,rn,on),t[n]}}));export{cn as A,gt as I,Vt as S};