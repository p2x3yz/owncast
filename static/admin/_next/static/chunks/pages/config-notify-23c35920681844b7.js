(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{24308:function(e,n,t){"use strict";t.d(n,{c4:function(){return i}});var r=t(4942),a=t(87462),i=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,s=-1,l={},u={matchHandlers:{},dispatch:function(e){return l=e,c.forEach((function(e){return e(l)})),c.size>=1},subscribe:function(e){return c.size||this.register(),s+=1,c.set(s,e),e(l),s},unsubscribe:function(e){c.delete(e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(n){var t=o[n],r=e.matchHandlers[t];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),c.clear()},register:function(){var e=this;Object.keys(o).forEach((function(n){var t=o[n],i=function(t){var i=t.matches;e.dispatch((0,a.Z)((0,a.Z)({},l),(0,r.Z)({},n,i)))},c=window.matchMedia(t);c.addListener(i),e.matchHandlers[t]={mql:c,listener:i},i(c)}))}};n.ZP=u},6226:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(4942),a=t(87462),i=t(71002),o=t(67294),c=t(94184),s=t.n(c),l=t(99134),u=t(59844),d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};var f=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(e,n){var t,c=o.useContext(u.E_),p=c.getPrefixCls,h=c.direction,v=o.useContext(l.Z),m=v.gutter,b=v.wrap,g=v.supportFlexGap,y=e.prefixCls,x=e.span,w=e.order,j=e.offset,Z=e.push,k=e.pull,C=e.className,N=e.children,O=e.flex,P=e.style,S=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=p("col",y),T={};f.forEach((function(n){var t,o={},c=e[n];"number"===typeof c?o.span=c:"object"===(0,i.Z)(c)&&(o=c||{}),delete S[n],T=(0,a.Z)((0,a.Z)({},T),(t={},(0,r.Z)(t,"".concat(E,"-").concat(n,"-").concat(o.span),void 0!==o.span),(0,r.Z)(t,"".concat(E,"-").concat(n,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(t,"".concat(E,"-").concat(n,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(t,"".concat(E,"-").concat(n,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(t,"".concat(E,"-").concat(n,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(t,"".concat(E,"-rtl"),"rtl"===h),t))}));var L=s()(E,(t={},(0,r.Z)(t,"".concat(E,"-").concat(x),void 0!==x),(0,r.Z)(t,"".concat(E,"-order-").concat(w),w),(0,r.Z)(t,"".concat(E,"-offset-").concat(j),j),(0,r.Z)(t,"".concat(E,"-push-").concat(Z),Z),(0,r.Z)(t,"".concat(E,"-pull-").concat(k),k),t),C,T),I={};if(m&&m[0]>0){var _=m[0]/2;I.paddingLeft=_,I.paddingRight=_}if(m&&m[1]>0&&!g){var F=m[1]/2;I.paddingTop=F,I.paddingBottom=F}return O&&(I.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(O),!1!==b||I.minWidth||(I.minWidth=0)),o.createElement("div",(0,a.Z)({},S,{style:(0,a.Z)((0,a.Z)({},I),P),className:L,ref:n}),N)}));p.displayName="Col";var h=p},99134:function(e,n,t){"use strict";var r=(0,t(67294).createContext)({});n.Z=r},25968:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(87462),a=t(4942),i=t(71002),o=t(97685),c=t(67294),s=t(94184),l=t.n(s),u=t(59844),d=t(99134),f=t(93355),p=t(24308),h=t(98082),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},m=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),c.forwardRef((function(e,n){var t,s=e.prefixCls,f=e.justify,m=e.align,b=e.className,g=e.style,y=e.children,x=e.gutter,w=void 0===x?0:x,j=e.wrap,Z=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),k=c.useContext(u.E_),C=k.getPrefixCls,N=k.direction,O=c.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,o.Z)(O,2),S=P[0],E=P[1],T=(0,h.Z)(),L=c.useRef(w);c.useEffect((function(){var e=p.ZP.subscribe((function(e){var n=L.current||0;(!Array.isArray(n)&&"object"===(0,i.Z)(n)||Array.isArray(n)&&("object"===(0,i.Z)(n[0])||"object"===(0,i.Z)(n[1])))&&E(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var I=C("row",s),_=function(){var e=[0,0];return(Array.isArray(w)?w:[w,0]).forEach((function(n,t){if("object"===(0,i.Z)(n))for(var r=0;r<p.c4.length;r++){var a=p.c4[r];if(S[a]&&void 0!==n[a]){e[t]=n[a];break}}else e[t]=n||0})),e}(),F=l()(I,(t={},(0,a.Z)(t,"".concat(I,"-no-wrap"),!1===j),(0,a.Z)(t,"".concat(I,"-").concat(f),f),(0,a.Z)(t,"".concat(I,"-").concat(m),m),(0,a.Z)(t,"".concat(I,"-rtl"),"rtl"===N),t),b),D={},M=_[0]>0?_[0]/-2:void 0,U=_[1]>0?_[1]/-2:void 0;if(M&&(D.marginLeft=M,D.marginRight=M),T){var q=(0,o.Z)(_,2);D.rowGap=q[1]}else U&&(D.marginTop=U,D.marginBottom=U);var A=(0,o.Z)(_,2),R=A[0],z=A[1],K=c.useMemo((function(){return{gutter:[R,z],wrap:j,supportFlexGap:T}}),[R,z,j,T]);return c.createElement(d.Z.Provider,{value:K},c.createElement("div",(0,r.Z)({},Z,{className:F,style:(0,r.Z)((0,r.Z)({},D),g),ref:n}),y))})));m.displayName="Row";var b=m},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(87462),a=t(4942),i=t(67294),o=t(97685),c=t(91),s=t(94184),l=t.n(s),u=t(21770),d=t(15105),f=i.forwardRef((function(e,n){var t,r=e.prefixCls,s=void 0===r?"rc-switch":r,f=e.className,p=e.checked,h=e.defaultChecked,v=e.disabled,m=e.loadingIcon,b=e.checkedChildren,g=e.unCheckedChildren,y=e.onClick,x=e.onChange,w=e.onKeyDown,j=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),Z=(0,u.Z)(!1,{value:p,defaultValue:h}),k=(0,o.Z)(Z,2),C=k[0],N=k[1];function O(e,n){var t=C;return v||(N(t=e),null===x||void 0===x||x(t,n)),t}var P=l()(s,f,(t={},(0,a.Z)(t,"".concat(s,"-checked"),C),(0,a.Z)(t,"".concat(s,"-disabled"),v),t));return i.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":C,disabled:v,className:P,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?O(!1,e):e.which===d.Z.RIGHT&&O(!0,e),null===w||void 0===w||w(e)},onClick:function(e){var n=O(!C,e);null===y||void 0===y||y(n,e)}}),m,i.createElement("span",{className:"".concat(s,"-inner")},C?b:g))}));f.displayName="Switch";var p=f,h=t(50888),v=t(68349),m=t(59844),b=t(97647),g=t(21687),y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x=i.forwardRef((function(e,n){var t,o=e.prefixCls,c=e.size,s=e.loading,u=e.className,d=void 0===u?"":u,f=e.disabled,x=y(e,["prefixCls","size","loading","className","disabled"]);(0,g.Z)("checked"in x||!("value"in x),"Switch","`value` is not a valid prop, do you mean `checked`?");var w=i.useContext(m.E_),j=w.getPrefixCls,Z=w.direction,k=i.useContext(b.Z),C=j("switch",o),N=i.createElement("div",{className:"".concat(C,"-handle")},s&&i.createElement(h.Z,{className:"".concat(C,"-loading-icon")})),O=l()((t={},(0,a.Z)(t,"".concat(C,"-small"),"small"===(c||k)),(0,a.Z)(t,"".concat(C,"-loading"),s),(0,a.Z)(t,"".concat(C,"-rtl"),"rtl"===Z),t),d);return i.createElement(v.Z,{insertExtraNode:!0},i.createElement(p,(0,r.Z)({},x,{prefixCls:C,className:O,disabled:f||s,ref:n,loadingIcon:N})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var w=x},98400:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-notify",function(){return t(39894)}])},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),c=t(94594),s=t(83192),l=t(78464),u=t(25964),d=t(35159);function f(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function p(e){var n=(0,o.useState)(null),t=n[0],r=n[1],p=null,h=((0,o.useContext)(d.aC)||{}).setFieldInConfigState,v=e.apiPath,m=e.checked,b=e.reversed,g=void 0!==b&&b,y=e.configPath,x=void 0===y?"":y,w=e.disabled,j=void 0!==w&&w,Z=e.fieldName,k=e.label,C=e.tip,N=e.useSubmit,O=e.onChange,P=function(){r(null),clearTimeout(p),p=null},S=function(){var e,n=(e=a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=6;break}return r((0,s.kg)(s.Jk)),t=g?!n:n,e.next=5,(0,u.Si)({apiPath:v,data:{value:t},onSuccess:function(){h({fieldName:Z,value:t,path:x}),r((0,s.kg)(s.zv))},onError:function(e){r((0,s.kg)(s.Un,"There was an error: ".concat(e)))}});case 5:p=setTimeout(P,u.sI);case 6:O&&O(n);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){f(i,r,a,o,c,"next",e)}function c(e){f(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),E=null!==t&&t.type===s.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[k&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:k})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(c.Z,{className:"switch field-".concat(Z),loading:E,onChange:S,defaultChecked:m,checked:m,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:j}),(0,i.jsx)(l.Z,{status:t})]}),(0,i.jsx)("p",{className:"field-tip",children:C})]})]})}p.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},39894:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(85893),a=t(84485),i=t(14670),o=t(25968),c=t(6226),s=t(71577),l=t(67294),u=t(41664),d=t(34051),f=t.n(d),p=t(35159),h=t(48419),v=t(78464),m=t(25964),b=t(15976),g=t(83192);function y(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}var j=a.Z.Title;function Z(){var e=(0,l.useContext)(p.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,a=(n||{}).notifications,i=(a||{}).discord,o=i||{},c=o.enabled,u=o.webhook,d=o.goLiveMessage,Z=(0,l.useState)({}),k=Z[0],C=Z[1],N=(0,l.useState)(null),O=N[0],P=N[1],S=(0,l.useState)(!1),E=S[0],T=S[1];(0,l.useEffect)((function(){C({enabled:c,webhook:u,goLiveMessage:d})}),[a,i]);var L=function(e){var n=e.fieldName,t=e.value;C(w({},k,x({},n,t))),T(""!==u&&""!==d)},I=null,_=function(){P(null),I=null,clearTimeout(I)},F=function(){var e,n=(e=f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,e.next=3,(0,m.Si)({apiPath:"/notifications/discord",data:{value:n},onSuccess:function(){t({fieldName:"discord",value:n,path:"notifications"}),P((0,g.kg)(g.zv,"Updated.")),I=setTimeout(_,m.sI)},onError:function(e){P((0,g.kg)(g.Un,e)),I=setTimeout(_,m.sI)}});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){y(i,r,a,o,c,"next",e)}function c(e){y(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{children:"Discord"}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Let your Discord channel know each time you go live."}),(0,r.jsxs)("p",{className:"description reduced-margins",children:[(0,r.jsx)("a",{href:"https://support.discord.com/hc/en-us/articles/228383668",target:"_blank",rel:"noreferrer",children:"Create a webhook"})," ","under ",(0,r.jsx)("i",{children:"Edit Channel / Integrations"})," on your Discord channel and provide it below."]}),(0,r.jsx)(b.Z,{apiPath:"",fieldName:"discordEnabled",label:"Enable Discord",checked:k.enabled,onChange:function(e){L({fieldName:"enabled",value:e})}}),(0,r.jsx)("div",{style:{display:k.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,w({},m.oy.webhookUrl,{required:!0,value:k.webhook,onChange:L}))}),(0,r.jsx)("div",{style:{display:k.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,w({},m.oy.goLiveMessage,{required:!0,value:k.goLiveMessage,onChange:L}))}),(0,r.jsx)(s.Z,{type:"primary",onClick:F,style:{display:E?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,r.jsx)(v.Z,{status:O})]})}function k(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}var O=a.Z.Title;function P(){var e=(0,l.useContext)(p.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,a=(n||{}).notifications,i=(a||{}).browser,o=i||{},c=o.enabled,u=o.goLiveMessage,d=(0,l.useState)({}),y=d[0],x=d[1],w=(0,l.useState)(null),j=w[0],Z=w[1],P=(0,l.useState)(!1),S=P[0],E=P[1];(0,l.useEffect)((function(){x({enabled:c,goLiveMessage:u})}),[a,i]);var T=function(e){var n=e.fieldName,t=e.value;console.log(n,t),x(N({},y,C({},n,t))),E(!0)},L=null,I=function(){Z(null),L=null,clearTimeout(L)},_=function(){var e,n=(e=f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y,e.next=3,(0,m.Si)({apiPath:"/notifications/browser",data:{value:n},onSuccess:function(){t({fieldName:"browser",value:n,path:"notifications"}),Z((0,g.kg)(g.zv,"Updated.")),L=setTimeout(I,m.sI)},onError:function(e){Z((0,g.kg)(g.Un,e)),L=setTimeout(I,m.sI)}});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){k(i,r,a,o,c,"next",e)}function c(e){k(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{children:"Browser Alerts"}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Viewers can opt into being notified when you go live with their browser."}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Not all browsers support this."}),(0,r.jsx)(b.Z,{apiPath:"",fieldName:"enabled",label:"Enable browser notifications",onChange:function(e){T({fieldName:"enabled",value:e})},checked:y.enabled}),(0,r.jsx)("div",{style:{display:y.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,N({},m.mv.goLiveMessage,{required:!0,type:h.Sk,value:y.goLiveMessage,onChange:T}))}),(0,r.jsx)(s.Z,{type:"primary",style:{display:S?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},onClick:_,children:"Save"}),(0,r.jsx)(v.Z,{status:j})]})}var S=t(50197);function E(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}var I=a.Z.Title;function _(){var e=(0,l.useContext)(p.aC)||{},n=e.serverConfig,t=e.setFieldInConfigState,a=((n||{}).notifications||{}).twitter,i=a||{},o=i.enabled,c=i.apiKey,u=i.apiSecret,d=i.accessToken,y=i.accessTokenSecret,x=i.bearerToken,w=i.goLiveMessage,j=(0,l.useState)({}),Z=j[0],k=j[1],C=(0,l.useState)(null),N=C[0],O=C[1],P=(0,l.useState)(!1),_=P[0],F=P[1];(0,l.useEffect)((function(){k({enabled:o,apiKey:c,apiSecret:u,accessToken:d,accessTokenSecret:y,bearerToken:x,goLiveMessage:w})}),[a]);var D=function(e){var n=e.fieldName,t=e.value;k(L({},Z,T({},n,t))),F(!0)},M=null,U=function(){O(null),M=null,clearTimeout(M)},q=function(){var e,n=(e=f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Z,e.next=3,(0,m.Si)({apiPath:"/notifications/twitter",data:{value:n},onSuccess:function(){t({fieldName:"twitter",value:n,path:"notifications"}),O((0,g.kg)(g.zv,"Updated.")),M=setTimeout(U,m.sI)},onError:function(e){O((0,g.kg)(g.Un,e)),M=setTimeout(U,m.sI)}});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){E(i,r,a,o,c,"next",e)}function c(e){E(i,r,a,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{children:"Twitter"}),(0,r.jsx)("p",{className:"description reduced-margins",children:"Let your Twitter followers know each time you go live."}),(0,r.jsxs)("div",{style:{display:Z.enabled?"block":"none"},children:[(0,r.jsxs)("p",{className:"description reduced-margins",children:[(0,r.jsx)("a",{href:"https://developer.twitter.com/en/portal/dashboard",target:"_blank",rel:"noreferrer",children:"Read how to configure your Twitter account"})," ","to support posting from Owncast."]}),(0,r.jsxs)("p",{className:"description reduced-margins",children:[(0,r.jsx)("a",{href:"https://developer.twitter.com/en/portal/dashboard",target:"_blank",rel:"noreferrer",children:"And then get your Twitter developer credentials"})," ","to fill in below."]})]}),(0,r.jsx)(b.Z,{apiPath:"",fieldName:"enabled",label:"Enable Twitter",onChange:function(e){D({fieldName:"enabled",value:e})},checked:Z.enabled}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.apiKey,{required:!0,value:Z.apiKey,onChange:D}))}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.apiSecret,{type:h.A8,required:!0,value:Z.apiSecret,onChange:D}))}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.accessToken,{required:!0,value:Z.accessToken,onChange:D}))}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.accessTokenSecret,{type:h.A8,required:!0,value:Z.accessTokenSecret,onChange:D}))}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.bearerToken,{required:!0,value:Z.bearerToken,onChange:D}))}),(0,r.jsx)("div",{style:{display:Z.enabled?"block":"none"},children:(0,r.jsx)(h.ZP,L({},m.$Z.goLiveMessage,{type:S.Kx,required:!0,value:Z.goLiveMessage,onChange:D}))}),(0,r.jsx)(s.Z,{type:"primary",onClick:q,style:{display:_?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,r.jsx)(v.Z,{status:N})]})}var F=a.Z.Title;function D(){var e=(((0,l.useContext)(p.aC)||{}).serverConfig||{}).federation,n=(e||{}).enabled,t=(0,l.useState)({}),a=t[0],i=t[1];return(0,l.useEffect)((function(){i({enabled:n})}),[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{children:"Fediverse Social"}),(0,r.jsx)("p",{className:"description",children:"Enabling the Fediverse social features will not just alert people to when you go live, but also enable other functionality."}),(0,r.jsxs)("p",{children:["Fediverse social features:"," ",(0,r.jsx)("span",{style:{color:e.enabled?"green":"red"},children:a.enabled?"Enabled":"Disabled"})]}),(0,r.jsx)(u.default,{passHref:!0,href:"/config-federation",children:(0,r.jsx)(s.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Configure"})})]})}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){M(e,n,t[n])}))}return e}var q=a.Z.Title;function A(){var e=(0,l.useState)(null),n=e[0],t=e[1],a=((0,l.useContext)(p.aC)||{}).serverConfig.yp,d=a.instanceUrl;(0,l.useEffect)((function(){t({instanceUrl:d})}),[a]);var f=""!==d;console.log(f);var h=!f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,r.jsx)("br",{}),(0,r.jsx)(S.ZP,U({fieldName:"instanceUrl"},m.yi,{value:(null===n||void 0===n?void 0:n.instanceUrl)||"",initialValue:a.instanceUrl,type:S.xA,onChange:function(e){var r=e.fieldName,a=e.value;t(U({},n,M({},r,a)))},onSubmit:function(){t(U({},n,{enabled:!1}))},required:!0}))]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q,{children:"Notifications"}),(0,r.jsx)("p",{className:"description",children:"Let your viewers know when you go live by supporting some of the following notification channels."}),h,(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c.Z,{span:10,className:"form-module ".concat(f?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(P,{})}),(0,r.jsx)(c.Z,{span:10,className:"form-module ".concat(f?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(_,{})}),(0,r.jsx)(c.Z,{span:10,className:"form-module ".concat(f?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(Z,{})}),(0,r.jsx)(c.Z,{span:10,className:"form-module ".concat(f?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,r.jsx)(D,{})}),(0,r.jsxs)(c.Z,{span:10,className:"form-module ".concat(f?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:[(0,r.jsx)(q,{children:"Custom"}),(0,r.jsx)("p",{className:"description",children:"Build your own notifications by using custom webhooks."}),(0,r.jsx)(u.default,{passHref:!0,href:"/webhooks",children:(0,r.jsx)(s.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Create"})})]})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=98400,e(e.s=n);var n}));var n=e.O();_N_E=n}]);