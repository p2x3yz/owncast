(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{40806:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-server-details",function(){return r(61977)}])},61977:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return K}});var n=r(85893),i=r(67294),o=r(84485),a=r(54907),s=r(56266),c=r(71577),l=r(1413),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},f=r(42135),d=function(e,t){return i.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:u}))};d.displayName="RedoOutlined";var m=i.forwardRef(d),h=r(57132),v=r(48419),p=r(50197),y=r(35159),g=r(57553),x=r(25964),w=r(34051),j=r.n(w),b=r(75443),k=r(58827),P=r(83192),N=r(78464);function C(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function S(){var e=(0,i.useContext)(g.k).setMessage,t=(0,i.useState)(null),r=t[0],a=t[1],s=null,l=function(){a(null),s=null,clearTimeout(s)},u=function(){var t,r=(t=j().mark((function t(){return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a((0,P.kg)(P.Jk)),t.prev=1,t.next=4,(0,k.rQ)(k.UJ);case 4:e(""),a((0,P.kg)(P.zv)),s=setTimeout(l,x.sI),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a((0,P.kg)(P.Un,"There was an error: ".concat(t.t0))),s=setTimeout(l,x.sI);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(e){C(o,n,i,a,s,"next",e)}function s(e){C(o,n,i,a,s,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,n.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,n.jsx)(b.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:u,okText:"Yes",cancelText:"No",children:(0,n.jsx)(c.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,n.jsx)("p",{children:(0,n.jsx)(N.Z,{status:r})})]})}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Z(e,t,r[t])}))}return e}var T=a.Z.Panel;function _(){var e=(0,i.useState)(null),t=e[0],r=e[1],l=(0,i.useContext)(y.aC),u=(0,i.useContext)(g.k).setMessage,f=(l||{}).serverConfig,d=f.streamKey,w=f.ffmpegPath,j=f.rtmpServerPort,b=f.webServerPort,k=f.yp,P=f.socketHostOverride,N=(0,i.useState)(!1),C=N[0],_=N[1],E=3e3;if((0,i.useEffect)((function(){r({streamKey:d,ffmpegPath:w,rtmpServerPort:j,webServerPort:b,socketHostOverride:P})}),[f]),!t)return null;var K=function(e){var n=e.fieldName,i=e.value;r(O({},t,Z({},n,i)))},M=function(){u("Updating server settings requires a restart of your Owncast server.")};return(0,n.jsxs)("div",{className:"edit-server-details-container",children:[(0,n.jsx)("div",{className:"field-container field-streamkey-container",children:(0,n.jsxs)("div",{className:"left-side",children:[(0,n.jsx)(p.ZP,O({fieldName:"streamKey"},x.Ri,{value:t.streamKey,initialValue:d,type:v.A8,onChange:K,onSubmit:function(){u("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")}})),(0,n.jsxs)("div",{className:"streamkey-actions",children:[(0,n.jsx)(s.Z,{title:"Generate a stream key",children:(0,n.jsx)(c.Z,{icon:(0,n.jsx)(m,{}),size:"small",onClick:function(){for(var e="",t=0;t<3;t+=1)e+=Math.random().toString(36).substring(2);K({fieldName:"streamKey",value:e})}})}),(0,n.jsx)(s.Z,{className:"copy-tooltip",title:C?"Copied!":"Copy to clipboard",children:(0,n.jsx)(c.Z,{icon:(0,n.jsx)(h.Z,{}),size:"small",onClick:function(){navigator.clipboard.writeText(t.streamKey).then((function(){_(!0),setTimeout((function(){return _(!1)}),E)}))}})})]})]})}),(0,n.jsx)(p.ZP,O({fieldName:"ffmpegPath"},x.KB,{value:t.ffmpegPath,initialValue:w,onChange:K,onSubmit:function(){l.online&&u("The updated ffmpeg path will be used when starting your next live stream.")}})),(0,n.jsx)(p.ZP,O({fieldName:"webServerPort"},x.rE,{value:t.webServerPort,initialValue:b,type:v.mG,onChange:K,onSubmit:M})),(0,n.jsx)(p.ZP,O({fieldName:"rtmpServerPort"},x.lT,{value:t.rtmpServerPort,initialValue:j,type:v.mG,onChange:K,onSubmit:M})),(0,n.jsx)(a.Z,{className:"advanced-settings",children:(0,n.jsxs)(T,{header:"Advanced Settings",children:[(0,n.jsx)(o.Z.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,n.jsx)(p.ZP,O({fieldName:"socketHostOverride"},x.ME,{value:t.socketHostOverride,initialValue:P||"",type:v.xA,onChange:K})),k.enabled&&(0,n.jsx)(S,{})]},"1")})]})}var E=o.Z.Title;function K(){return(0,n.jsxs)("div",{className:"config-server-details-form",children:[(0,n.jsx)(E,{children:"Server Settings"}),(0,n.jsx)("p",{className:"description",children:"You should change your stream key from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,n.jsx)("div",{className:"form-module config-server-details-container",children:(0,n.jsx)(_,{})})]})}}},function(e){e.O(0,[578,774,888,179],(function(){return t=40806,e(e.s=t);var t}));var t=e.O();_N_E=t}]);