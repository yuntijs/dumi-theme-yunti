"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[1406],{95906:function(g,o,e){e.d(o,{E_:function(){return v},nc:function(){return c}});var a=e(92379),l=e(86362),u=e(651),v=(0,a.createContext)(null),_=(0,a.memo)(function(d){var t=d.children,r=d.config;return(0,u.jsx)(v.Provider,{value:r,children:t})}),n=function(t){var r=t.pkg,i=t.version,f=t.path;return(0,l.y)({path:f,pkg:r,proxy:"aliyun",version:i})},c=function(){var t=(0,a.useContext)(v);return t?(t==null?void 0:t.proxy)!=="custom"?function(r){var i=r.pkg,f=r.version,p=r.path;return(0,l.y)({path:p,pkg:i,proxy:t.proxy,version:f})}:(t==null?void 0:t.customCdnFn)||n:n};o.ZP=_},86362:function(g,o,e){e.d(o,{y:function(){return _}});function a(n){var c=[];if(n.length===0)return"";if(typeof n[0]!="string")throw new TypeError("Url must be a string. Received "+n[0]);if(n[0].match(/^[^/:]+:\/*$/)&&n.length>1){var d=n.shift();n[0]=d+n[0]}n[0].match(/^file:\/\/\//)?n[0]=n[0].replace(/^([^/:]+):\/*/,"$1:///"):n[0]=n[0].replace(/^([^/:]+):\/*/,"$1://");for(var t=0;t<n.length;t++){var r=n[t];if(typeof r!="string")throw new TypeError("Url must be a string. Received "+r);r!==""&&(t>0&&(r=r.replace(/^[\/]+/,"")),t<n.length-1?r=r.replace(/[\/]+$/,""):r=r.replace(/[\/]+$/,"/"),c.push(r))}var i=c.join("/");i=i.replace(/\/(\?|&|#[^!])/g,"$1");var f=i.split("?");return i=f.shift()+(f.length>0?"?":"")+f.join("&"),i}function l(){var n;return typeof arguments[0]=="object"?n=arguments[0]:n=[].slice.call(arguments),a(n)}var u="https://unpkg.com",v="https://registry.npmmirror.com",_=function(c){var d=c.pkg,t=c.version,r=t===void 0?"latest":t,i=c.path,f=c.proxy;switch(f){case"unpkg":return l(u,"".concat(d,"@").concat(r),i);default:return l(v,d,r,"files",i)}}},94110:function(g,o,e){e.r(o);var a=e(32905),l=e(48073),u=e(95490),v=e.n(u),_=e(92379),n=e(37620),c=e(651);o.default=(0,_.memo)(function(){var d=(0,n.f)(function(r){return r.themeMode},v()),t=(0,l.useOutlet)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.Z,{themeMode:d,children:t})})})},37620:function(g,o,e){e.d(o,{f:function(){return u}});var a=e(32089),l=e(9676),u=(0,l.F)()((0,a.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))},83891:function(g,o,e){e.d(o,{Z:function(){return l}});var a=e(13793);function l(u,v){var _=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!_){if(Array.isArray(u)||(_=(0,a.Z)(u))||v&&u&&typeof u.length=="number"){_&&(u=_);var n=0,c=function(){};return{s:c,n:function(){return n>=u.length?{done:!0}:{done:!1,value:u[n++]}},e:function(f){throw f},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,t=!0,r=!1;return{s:function(){_=_.call(u)},n:function(){var f=_.next();return t=f.done,f},e:function(f){r=!0,d=f},f:function(){try{t||_.return==null||_.return()}finally{if(r)throw d}}}}},76298:function(g,o,e){var a=e(77567),l=a.Z.Symbol;o.Z=l},12689:function(g,o,e){e.d(o,{Z:function(){return E}});var a=e(76298),l=Object.prototype,u=l.hasOwnProperty,v=l.toString,_=a.Z?a.Z.toStringTag:void 0;function n(s){var m=u.call(s,_),O=s[_];try{s[_]=void 0;var T=!0}catch(M){}var P=v.call(s);return T&&(m?s[_]=O:delete s[_]),P}var c=n,d=Object.prototype,t=d.toString;function r(s){return t.call(s)}var i=r,f="[object Null]",p="[object Undefined]",b=a.Z?a.Z.toStringTag:void 0;function h(s){return s==null?s===void 0?p:f:b&&b in Object(s)?c(s):i(s)}var E=h},34657:function(g,o){var e=typeof global=="object"&&global&&global.Object===Object&&global;o.Z=e},77567:function(g,o,e){var a=e(34657),l=typeof self=="object"&&self&&self.Object===Object&&self,u=a.Z||l||Function("return this")();o.Z=u},49069:function(g,o){var e=Array.isArray;o.Z=e},56070:function(g,o){function e(a){return a!=null&&typeof a=="object"}o.Z=e}}]);
