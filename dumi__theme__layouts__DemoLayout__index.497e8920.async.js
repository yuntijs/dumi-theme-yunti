"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[1406],{8665:function(b,r,n){n.d(r,{E_:function(){return f},nc:function(){return i}});var t=n(92379),u=n(56853),e=n(651),f=(0,t.createContext)(null),a=(0,t.memo)(function(l){var o=l.children,_=l.config;return(0,e.jsx)(f.Provider,{value:_,children:o})}),c=function(o){var _=o.pkg,d=o.version,s=o.path;return(0,u.y)({path:s,pkg:_,proxy:"aliyun",version:d})},i=function(){var o=(0,t.useContext)(f);return o?(o==null?void 0:o.proxy)!=="custom"?function(_){var d=_.pkg,s=_.version,h=_.path;return(0,u.y)({path:h,pkg:d,proxy:o.proxy,version:s})}:(o==null?void 0:o.customCdnFn)||c:c};r.ZP=a},56853:function(b,r,n){n.d(r,{y:function(){return f}});var t=n(97631),u="https://unpkg.com",e="https://registry.npmmirror.com",f=function(c){var i=c.pkg,l=c.version,o=l===void 0?"latest":l,_=c.path,d=c.proxy;switch(d){case"unpkg":return(0,t.Z)(u,"".concat(i,"@").concat(o),_);default:return(0,t.Z)(e,i,o,"files",_)}}},94110:function(b,r,n){n.r(r);var t=n(87956),u=n(48073),e=n(95490),f=n.n(e),a=n(92379),c=n(37620),i=n(651);r.default=(0,a.memo)(function(){var l=(0,c.f)(function(_){return _.themeMode},f()),o=(0,u.useOutlet)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.Z,{themeMode:l,children:o})})})},37620:function(b,r,n){n.d(r,{f:function(){return e}});var t=n(32089),u=n(9676),e=(0,u.F)()((0,t.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))},17614:function(b,r,n){n.d(r,{Z:function(){return D}});var t=n(92379),u=n(80324),e=n.n(u),f=n(93083),a=n(53761),c=n(45123),i=n(36498),l=n(52063),o=n(64093),_=n(12401);const d=g=>{const{componentCls:E,colorText:M,fontSize:P,lineHeight:S,fontFamily:j}=g;return{[E]:{color:M,fontSize:P,lineHeight:S,fontFamily:j}}},s=()=>({});var h=(0,_.I$)("App",d,s);const R=()=>t.useContext(o.Z),O=g=>{const{prefixCls:E,children:M,className:P,rootClassName:S,message:j,notification:I,style:F,component:C="div"}=g,{getPrefixCls:x}=(0,t.useContext)(a.E_),L=x("app",E),[W,k,U]=h(L),N=e()(k,L,P,S,U),A=(0,t.useContext)(o.J),Z=t.useMemo(()=>({message:Object.assign(Object.assign({},A.message),j),notification:Object.assign(Object.assign({},A.notification),I)}),[j,I,A.message,A.notification]),[w,z]=(0,c.Z)(Z.message),[B,H]=(0,l.Z)(Z.notification),[K,$]=(0,i.Z)(),G=t.useMemo(()=>({message:w,notification:B,modal:K}),[w,B,K]);(0,f.ln)("App")(!(U&&C===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const J=C===!1?t.Fragment:C,V={className:N,style:F};return W(t.createElement(o.Z.Provider,{value:G},t.createElement(o.J.Provider,{value:Z},t.createElement(J,Object.assign({},C===!1?void 0:V),$,z,H,M))))};O.useApp=R;var D=O},83891:function(b,r,n){n.d(r,{Z:function(){return u}});var t=n(13793);function u(e,f){var a=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=(0,t.Z)(e))||f&&e&&typeof e.length=="number"){a&&(e=a);var c=0,i=function(){};return{s:i,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(s){throw s},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,o=!0,_=!1;return{s:function(){a=a.call(e)},n:function(){var s=a.next();return o=s.done,s},e:function(s){_=!0,l=s},f:function(){try{o||a.return==null||a.return()}finally{if(_)throw l}}}}},76298:function(b,r,n){var t=n(77567),u=t.Z.Symbol;r.Z=u},70731:function(b,r){function n(t,u){for(var e=-1,f=t==null?0:t.length,a=Array(f);++e<f;)a[e]=u(t[e],e,t);return a}r.Z=n},12689:function(b,r,n){n.d(r,{Z:function(){return D}});var t=n(76298),u=Object.prototype,e=u.hasOwnProperty,f=u.toString,a=t.Z?t.Z.toStringTag:void 0;function c(g){var E=e.call(g,a),M=g[a];try{g[a]=void 0;var P=!0}catch(j){}var S=f.call(g);return P&&(E?g[a]=M:delete g[a]),S}var i=c,l=Object.prototype,o=l.toString;function _(g){return o.call(g)}var d=_,s="[object Null]",h="[object Undefined]",R=t.Z?t.Z.toStringTag:void 0;function O(g){return g==null?g===void 0?h:s:R&&R in Object(g)?i(g):d(g)}var D=O},34657:function(b,r){var n=typeof global=="object"&&global&&global.Object===Object&&global;r.Z=n},77567:function(b,r,n){var t=n(34657),u=typeof self=="object"&&self&&self.Object===Object&&self,e=t.Z||u||Function("return this")();r.Z=e},51172:function(b,r,n){n.d(r,{Z:function(){return en}});var t=n(82e3);function u(v,m,p){var y=-1,T=v.length;m<0&&(m=-m>T?0:T+m),p=p>T?T:p,p<0&&(p+=T),T=m>p?0:p-m>>>0,m>>>=0;for(var Y=Array(T);++y<T;)Y[y]=v[y+m];return Y}var e=u;function f(v,m,p){var y=v.length;return p=p===void 0?y:p,!m&&p>=y?v:e(v,m,p)}var a=f,c="\\ud800-\\udfff",i="\\u0300-\\u036f",l="\\ufe20-\\ufe2f",o="\\u20d0-\\u20ff",_=i+l+o,d="\\ufe0e\\ufe0f",s="\\u200d",h=RegExp("["+s+c+_+d+"]");function R(v){return h.test(v)}var O=R;function D(v){return v.split("")}var g=D,E="\\ud800-\\udfff",M="\\u0300-\\u036f",P="\\ufe20-\\ufe2f",S="\\u20d0-\\u20ff",j=M+P+S,I="\\ufe0e\\ufe0f",F="["+E+"]",C="["+j+"]",x="\\ud83c[\\udffb-\\udfff]",L="(?:"+C+"|"+x+")",W="[^"+E+"]",k="(?:\\ud83c[\\udde6-\\uddff]){2}",U="[\\ud800-\\udbff][\\udc00-\\udfff]",N="\\u200d",A=L+"?",Z="["+I+"]?",w="(?:"+N+"(?:"+[W,k,U].join("|")+")"+Z+A+")*",z=Z+A+w,B="(?:"+[W+C+"?",C,k,U,F].join("|")+")",H=RegExp(x+"(?="+x+")|"+B+z,"g");function K(v){return v.match(H)||[]}var $=K;function G(v){return O(v)?$(v):g(v)}var J=G;function V(v){return function(m){m=(0,t.Z)(m);var p=O(m)?J(m):void 0,y=p?p[0]:m.charAt(0),T=p?a(p,1).join(""):m.slice(1);return y[v]()+T}}var Q=V,X=Q("toUpperCase"),q=X;function nn(v){return q((0,t.Z)(v).toLowerCase())}var en=nn},49069:function(b,r){var n=Array.isArray;r.Z=n},56070:function(b,r){function n(t){return t!=null&&typeof t=="object"}r.Z=n},59298:function(b,r,n){var t=n(12689),u=n(56070),e="[object Symbol]";function f(a){return typeof a=="symbol"||(0,u.Z)(a)&&(0,t.Z)(a)==e}r.Z=f},82e3:function(b,r,n){n.d(r,{Z:function(){return d}});var t=n(76298),u=n(70731),e=n(49069),f=n(59298),a=1/0,c=t.Z?t.Z.prototype:void 0,i=c?c.toString:void 0;function l(s){if(typeof s=="string")return s;if((0,e.Z)(s))return(0,u.Z)(s,l)+"";if((0,f.Z)(s))return i?i.call(s):"";var h=s+"";return h=="0"&&1/s==-a?"-0":h}var o=l;function _(s){return s==null?"":o(s)}var d=_},97631:function(b,r,n){n.d(r,{Z:function(){return u}});function t(e){var f=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var c=0;c<e.length;c++){var i=e[c];if(typeof i!="string")throw new TypeError("Url must be a string. Received "+i);i!==""&&(c>0&&(i=i.replace(/^[\/]+/,"")),c<e.length-1?i=i.replace(/[\/]+$/,""):i=i.replace(/[\/]+$/,"/"),f.push(i))}var l=f.join("/");l=l.replace(/\/(\?|&|#[^!])/g,"$1");var o=l.split("?");return l=o.shift()+(o.length>0?"?":"")+o.join("&"),l}function u(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),t(e)}}}]);