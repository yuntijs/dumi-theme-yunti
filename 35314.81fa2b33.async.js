"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[35314],{98213:function(O,c,n){var t=n(32710),i=n(92379),e=n(8838),f=n(651),u=function(p){return(0,i.forwardRef)(function(r,a){return(0,i.createElement)(p,(0,t.Z)((0,t.Z)({},r),{},{ref:a}))})},m=(0,i.forwardRef)(function(v,p){var r=(0,i.useContext)(e.E_),a=(r==null?void 0:r.aAs)||"a",o=(0,i.useMemo)(function(){return u(a)},[a]);return(0,f.jsx)(o,(0,t.Z)({ref:p},v))});c.Z=m},8838:function(O,c,n){n.d(c,{E_:function(){return f},nc:function(){return v}});var t=n(92379),i=n(84563),e=n(651),f=(0,t.createContext)(null),u=(0,t.memo)(function(p){var r=p.children,a=p.config;return(0,e.jsx)(f.Provider,{value:a,children:r})}),m=function(r){var a=r.pkg,o=r.version,g=r.path;return(0,i.y)({path:g,pkg:a,proxy:"aliyun",version:o})},v=function(){var r=(0,t.useContext)(f);return r?(r==null?void 0:r.proxy)!=="custom"?function(a){var o=a.pkg,g=a.version,s=a.path;return(0,i.y)({path:s,pkg:o,proxy:r.proxy,version:g})}:(r==null?void 0:r.customCdnFn)||m:m};c.ZP=u},53334:function(O,c,n){n.d(c,{Z:function(){return U}});var t=n(32710),i=n(81622),e=n(92379),f=n(7613),u=n(20113),m=n(12274),v=n(98213),p=n(80942),r=n(29232),a=n(21394),o=n(23820),g,s,h,j,C,d,Z,M,W,D=(0,o.kc)(function(l,b){var E=l.token,w=l.prefixCls,P=l.css,R=l.cx,A=b.rowNum,K=b.hasLink,N="".concat(w,"-features"),$="".concat(N,"-cover"),z="".concat(N,"-description"),H="".concat(N,"-title"),Y="".concat(N,"-img"),F=20,k=function(G){return P(g||(g=(0,a.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),G,G,G*(22/24))},_=P(s||(s=(0,a.Z)([`
      transition: all `," ",`;
    `])),E.motionDurationSlow,E.motionEaseInOutCirc);return{cell:P(h||(h=(0,a.Z)([`
        overflow: hidden;
      `]))),container:P(j||(j=(0,a.Z)([`
        `,`;
        position: relative;
        z-index: 1;

        padding: 24px;
        height: 228px;
        max-height: 228px;

        overflow: hidden;

        p {
          font-size: 16px;
          line-height: 1.2;
          text-align: start;
          word-break: break-word;
        }

        &:hover {
          .`,` {
            width: 100%;
            height: `,`px;
            padding: 0;
            background: `,`;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),_,$,F*A,E.colorFillContent,Y,k(100),z,H,K?14:20),desc:R(z,_,P(C||(C=(0,a.Z)([`
          pointer-events: none;
          color: `,`;

          quotient {
            position: relative;

            display: block;

            margin-block: 12px;
            margin-inline: 0;
            padding-inline-start: 12px;

            color: `,`;
          }
        `])),E.colorTextSecondary,E.colorTextDescription)),img:R(Y,_,P(d||(d=(0,a.Z)([`
          `,`;
          color: `,`;
        `])),k(20),E.colorText)),imgContainer:R($,_,P(Z||(Z=(0,a.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),k(24),E.borderRadius)),link:P(M||(M=(0,a.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),_),title:R(H,_,P(W||(W=(0,a.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),E.lineHeightHeading3,E.colorText))}}),y=n(651),x=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],T=(0,e.memo)(function(l){var b=l.image,E=l.className,w=l.title,P=l.style;return b.startsWith("http")?(0,y.jsx)(r.Z,{alt:w,className:E,src:b,style:P}):(0,y.jsx)(u.Z,{className:E,style:P,children:b})}),I=(0,e.memo)(function(l){var b=l.style,E=l.className,w=l.row,P=l.column,R=l.description,A=l.image,K=l.title,N=l.link,$=l.icon,z=l.imageStyle,H=l.openExternal,Y=(0,i.Z)(l,x),F=w||7,k=D({hasLink:!!N,rowNum:F}),_=k.styles,J=k.cx;return(0,y.jsx)("div",(0,t.Z)((0,t.Z)({className:J(_.container,E),style:(0,t.Z)({gridColumn:"span ".concat(P||1),gridRow:"span ".concat(F)},b)},Y),{},{children:(0,y.jsxs)("div",{className:_.cell,children:[A||$&&(0,y.jsxs)(u.Z,{className:_.imgContainer,style:z,children:[$&&(0,y.jsx)(p.Z,{className:_.img,icon:$}),A&&(0,y.jsx)(T,{className:_.img,image:A,title:K})]}),K&&(0,y.jsx)(m.D,{align:"center",as:"h3",className:_.title,gap:8,horizontal:!0,children:K}),R&&(0,y.jsx)("p",{className:_.desc,dangerouslySetInnerHTML:{__html:R}}),N&&(0,y.jsx)("div",{className:_.link,children:(0,y.jsx)(v.Z,{href:N,rel:"noreferrer",target:H?"_blank":void 0,children:"Read More"})})]})}))}),L=I,S=["items","className","itemClassName","itemStyle","maxWidth","style"],B=(0,e.memo)(function(l){var b=l.items,E=l.className,w=l.itemClassName,P=l.itemStyle,R=l.maxWidth,A=R===void 0?960:R,K=l.style,N=(0,i.Z)(l,S);if(b!=null&&b.length)return(0,y.jsx)(f.Z,(0,t.Z)({className:E,items:b,renderItem:function(z){return(0,y.jsx)(L,(0,t.Z)({className:w,style:P},z),z.title)},style:(0,t.Z)({maxWidth:A},K)},N))}),U=B},16688:function(O,c,n){var t=n(32710),i=n(81622),e=n(21394),f=n(23820),u=n(98013),m=n(92379),v=n(12274),p=n(651),r=["className","gap","rows","children","maxItemWidth"],a,o=(0,f.kc)(function(s,h){var j=s.css,C=h.rows,d=h.maxItemWidth,Z=h.gap;return{container:j(a||(a=(0,e.Z)([`
        --rows: `,`;
        --max-item-width: `,`;
        --gap: `,`;

        display: grid !important;
        grid-template-columns: repeat(
          auto-fill,
          minmax(
            max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
            1fr
          )
        );
      `])),C,(0,u.Z)(d)?d:"".concat(d,"px"),(0,u.Z)(Z)?Z:"".concat(Z,"px"))}}),g=(0,m.forwardRef)(function(s,h){var j=s.className,C=s.gap,d=C===void 0?"1em":C,Z=s.rows,M=Z===void 0?3:Z,W=s.children,D=s.maxItemWidth,y=D===void 0?240:D,x=(0,i.Z)(s,r),T=o({gap:d,maxItemWidth:y,rows:M}),I=T.cx,L=T.styles;return(0,p.jsx)(v.D,(0,t.Z)((0,t.Z)({className:I(L.container,j),gap:d,ref:h},x),{},{children:W}))});c.Z=g},29232:function(O,c,n){var t=n(81622),i=n(32710),e=n(92379),f=n(8838),u=n(651),m=["unoptimized"],v=function(a){return(0,e.forwardRef)(function(o,g){return(0,e.createElement)(a,(0,i.Z)((0,i.Z)({},o),{},{ref:g}))})},p=(0,e.forwardRef)(function(r,a){var o=r.unoptimized,g=(0,t.Z)(r,m),s=(0,e.useContext)(f.E_),h=(s==null?void 0:s.imgAs)||"img",j=(0,e.useMemo)(function(){return v(h)},[h]);return(0,u.jsx)(j,(0,i.Z)({ref:a,unoptimized:o===void 0?s==null?void 0:s.imgUnoptimized:o},g))});c.Z=p},76851:function(O,c,n){n.d(c,{Z:function(){return C}});var t=n(32710),i=n(81622),e=n(92379),f=n(12274),u=n(5222),m=n(66802),v=n(17420),p=n(21394),r=n(23820),a,o,g=(0,r.kc)(function(d,Z){var M=d.css,W=d.cx,D=d.token,y=d.prefixCls,x=M(a||(a=(0,p.Z)([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),Z==="block"?D.colorFillTertiary:"transparent",Z==="block"?"transparent":D.colorBorder);return{container:W(x,M(o||(o=(0,p.Z)([`
        position: relative;

        overflow: hidden;

        max-width: 100%;
        height: 38px;
        padding-block: 0;
        padding-inline: 12px 8px;

        border-radius: `,`px;

        transition: background-color 100ms `,`;

        &:hover {
          background-color: `,`;
        }

        .`,`-highlighter-shiki {
          position: relative;
          overflow: hidden;
          flex: 1;
        }

        .prism-code {
          background: none !important;
        }

        pre {
          overflow: auto hidden !important;
          display: flex;
          align-items: center;

          width: 100%;
          height: 36px !important;
          margin: 0 !important;

          line-height: 1;
          text-wrap: nowrap !important;

          background: none !important;
        }

        code[class*='language-'] {
          background: none !important;
        }
      `])),D.borderRadius,D.motionEaseOut,D.colorFillTertiary,y))}}),s=n(651),h=["symbol","language","children","copyable","type","spotlight","className"],j=(0,e.memo)(function(d){var Z=d.symbol,M=d.language,W=M===void 0?"tsx":M,D=d.children,y=d.copyable,x=y===void 0?!0:y,T=d.type,I=T===void 0?"ghost":T,L=d.spotlight,S=d.className,B=(0,i.Z)(d,h),U=g(I),l=U.styles,b=U.cx;return(0,s.jsxs)(f.D,(0,t.Z)((0,t.Z)({align:"center",className:b(l.container,S),gap:8,horizontal:!0},B),{},{children:[L&&(0,s.jsx)(v.Z,{}),(0,s.jsx)(m.Z,{language:W,children:[Z,D].filter(Boolean).join(" ")}),x&&(0,s.jsx)(u.Z,{content:D,size:{blockSize:24,fontSize:14}})]}))}),C=j},7613:function(O,c,n){n.d(c,{Z:function(){return y}});var t=n(32710),i=n(83891),e=n(81622),f=n(92379),u=n(16688),m=n(12274),v=n(21394),p=n(23820),r=n(79385),a,o,g,s,h="hover-card",j=(0,p.kc)(function(x,T){var I=x.css,L=x.responsive,S=x.token,B=x.isDarkMode,U=T.size,l=T.borderRadius;return{container:I(a||(a=(0,v.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),h),content:I(o||(o=(0,v.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),S.colorBgContainer,l-1),grid:I(g||(g=(0,v.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),L.mobile),itemContainer:I(s||(s=(0,v.Z)([`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;

      background: `,`;
      border-radius: `,`px;

      &::before,
      &::after {
        content: '';

        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;

        opacity: 0;
        border-radius: inherit;

        transition: opacity 500ms;
      }

      &::before {
        pointer-events: none;
        user-select: none;
        z-index: 3;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      &::after {
        z-index: 1;
        background: radial-gradient(
          `,`px circle at var(--mouse-x) var(--mouse-y),
          `,`,
          transparent 40%
        );
      }

      :hover::before {
        opacity: 1;
      }
    `])),(0,r.m4)(S.colorBorderSecondary,.75),l,U,(0,r.m4)(S.colorTextBase,B?.06:.02),U*.75,(0,r.m4)(S.colorTextBase,B?.4:.2))}}),C=n(651),d=["children","className","style","borderRadius","size"],Z=(0,f.memo)(function(x){var T=x.children,I=x.className,L=x.style,S=x.borderRadius,B=x.size,U=(0,e.Z)(x,d),l=j({borderRadius:S,size:B}),b=l.styles,E=l.cx;return(0,C.jsx)(m.D,(0,t.Z)((0,t.Z)({className:E(b.itemContainer,I),style:(0,t.Z)({borderRadius:S},L)},U),{},{children:(0,C.jsx)(m.D,{className:b.content,children:T})}))}),M=Z,W=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],D=(0,f.memo)(function(x){var T=x.items,I=x.renderItem,L=x.maxItemWidth,S=x.className,B=x.columns,U=B===void 0?3:B,l=x.gap,b=l===void 0?"1em":l,E=x.style,w=x.size,P=w===void 0?800:w,R=x.borderRadius,A=R===void 0?12:R,K=x.spotlight,N=K===void 0?!0:K,$=(0,e.Z)(x,W),z=j({borderRadius:A,size:P}),H=z.styles,Y=z.cx,F=(0,f.useRef)(null);return(0,f.useEffect)(function(){if(F.current&&N){var k=function(J){var G=(0,i.Z)(document.querySelectorAll(".".concat(h))),Q;try{for(G.s();!(Q=G.n()).done;){var X=Q.value,V=X.getBoundingClientRect(),q=J.clientX-V.left,nn=J.clientY-V.top;X.style.setProperty("--mouse-x","".concat(q,"px")),X.style.setProperty("--mouse-y","".concat(nn,"px"))}}catch(en){G.e(en)}finally{G.f()}};return F.current.addEventListener("mousemove",k),function(){var _;(_=F.current)===null||_===void 0||_.removeEventListener("mousemove",k)}}},[]),(0,C.jsx)(u.Z,(0,t.Z)((0,t.Z)({className:Y(H.container,H.grid,S),gap:b,maxItemWidth:L,ref:F,rows:U,style:E},$),{},{children:T.map(function(k,_){return(0,C.jsx)(M,{borderRadius:A,className:h,size:P,children:(0,C.jsx)(I,(0,t.Z)({},k))},_)})}))}),y=D},84563:function(O,c,n){n.d(c,{y:function(){return f}});var t=n(97631),i="https://unpkg.com",e="https://registry.npmmirror.com",f=function(m){var v=m.pkg,p=m.version,r=p===void 0?"latest":p,a=m.path,o=m.proxy;switch(o){case"unpkg":return(0,t.Z)(i,"".concat(v,"@").concat(r),a);default:return(0,t.Z)(e,v,r,"files",a)}}},13532:function(O,c,n){n.d(c,{Z:function(){return i}});var t=n(93910);const i=(0,t.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},87611:function(O,c,n){n.d(c,{Z:function(){return i}});var t=n(93910);const i=(0,t.Z)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},20113:function(O,c,n){var t=n(88941),i=n(81622),e=n(20462),f=n(285),u=n(92379),m=n(651),v=["children","className","prefixCls"];function p(o,g){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);g&&(h=h.filter(function(j){return Object.getOwnPropertyDescriptor(o,j).enumerable})),s.push.apply(s,h)}return s}function r(o){for(var g=1;g<arguments.length;g++){var s=arguments[g]!=null?arguments[g]:{};g%2?p(Object(s),!0).forEach(function(h){(0,t.Z)(o,h,s[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(h){Object.defineProperty(o,h,Object.getOwnPropertyDescriptor(s,h))})}return o}var a=(0,u.forwardRef)(function(o,g){var s=o.children,h=o.className,j=o.prefixCls,C=(0,i.Z)(o,v);return(0,m.jsx)(e.Z,r(r({ref:g,internalClassName:"".concat((0,f.Gn)(j),"-center"),className:h},C),{},{align:"center",justify:"center",children:s}))});c.Z=a},83891:function(O,c,n){n.d(c,{Z:function(){return i}});var t=n(13793);function i(e,f){var u=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!u){if(Array.isArray(e)||(u=(0,t.Z)(e))||f&&e&&typeof e.length=="number"){u&&(e=u);var m=0,v=function(){};return{s:v,n:function(){return m>=e.length?{done:!0}:{done:!1,value:e[m++]}},e:function(g){throw g},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p,r=!0,a=!1;return{s:function(){u=u.call(e)},n:function(){var g=u.next();return r=g.done,g},e:function(g){a=!0,p=g},f:function(){try{r||u.return==null||u.return()}finally{if(a)throw p}}}}},76298:function(O,c,n){var t=n(77567),i=t.Z.Symbol;c.Z=i},12689:function(O,c,n){n.d(c,{Z:function(){return C}});var t=n(76298),i=Object.prototype,e=i.hasOwnProperty,f=i.toString,u=t.Z?t.Z.toStringTag:void 0;function m(d){var Z=e.call(d,u),M=d[u];try{d[u]=void 0;var W=!0}catch(y){}var D=f.call(d);return W&&(Z?d[u]=M:delete d[u]),D}var v=m,p=Object.prototype,r=p.toString;function a(d){return r.call(d)}var o=a,g="[object Null]",s="[object Undefined]",h=t.Z?t.Z.toStringTag:void 0;function j(d){return d==null?d===void 0?s:g:h&&h in Object(d)?v(d):o(d)}var C=j},34657:function(O,c){var n=typeof global=="object"&&global&&global.Object===Object&&global;c.Z=n},77567:function(O,c,n){var t=n(34657),i=typeof self=="object"&&self&&self.Object===Object&&self,e=t.Z||i||Function("return this")();c.Z=e},49069:function(O,c){var n=Array.isArray;c.Z=n},56070:function(O,c){function n(t){return t!=null&&typeof t=="object"}c.Z=n},98013:function(O,c,n){var t=n(12689),i=n(49069),e=n(56070),f="[object String]";function u(m){return typeof m=="string"||!(0,i.Z)(m)&&(0,e.Z)(m)&&(0,t.Z)(m)==f}c.Z=u},97631:function(O,c,n){n.d(c,{Z:function(){return i}});function t(e){var f=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var u=e.shift();e[0]=u+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var m=0;m<e.length;m++){var v=e[m];if(typeof v!="string")throw new TypeError("Url must be a string. Received "+v);v!==""&&(m>0&&(v=v.replace(/^[\/]+/,"")),m<e.length-1?v=v.replace(/[\/]+$/,""):v=v.replace(/[\/]+$/,"/"),f.push(v))}var p=f.join("/");p=p.replace(/\/(\?|&|#[^!])/g,"$1");var r=p.split("?");return p=r.shift()+(r.length>0?"?":"")+r.join("&"),p}function i(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),t(e)}}}]);
