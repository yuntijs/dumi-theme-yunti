"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[894],{72199:function(C,l,n){var t=n(32710),s=n(92379),e=n(8665),f=n(651),v=function(d){return(0,s.forwardRef)(function(r,a){return(0,s.createElement)(d,(0,t.Z)((0,t.Z)({},r),{},{ref:a}))})},h=(0,s.forwardRef)(function(c,d){var r=(0,s.useContext)(e.E_),a=(r==null?void 0:r.aAs)||"a",o=(0,s.useMemo)(function(){return v(a)},[a]);return(0,f.jsx)(o,(0,t.Z)({ref:d},c))});l.Z=h},8665:function(C,l,n){n.d(l,{E_:function(){return f},nc:function(){return c}});var t=n(92379),s=n(56853),e=n(651),f=(0,t.createContext)(null),v=(0,t.memo)(function(d){var r=d.children,a=d.config;return(0,e.jsx)(f.Provider,{value:a,children:r})}),h=function(r){var a=r.pkg,o=r.version,u=r.path;return(0,s.y)({path:u,pkg:a,proxy:"aliyun",version:o})},c=function(){var r=(0,t.useContext)(f);return r?(r==null?void 0:r.proxy)!=="custom"?function(a){var o=a.pkg,u=a.version,p=a.path;return(0,s.y)({path:p,pkg:o,proxy:r.proxy,version:u})}:(r==null?void 0:r.customCdnFn)||h:h};l.ZP=v},57030:function(C,l,n){n.d(l,{Z:function(){return L}});var t=n(32710),s=n(81622),e=n(92379),f=n(31266),v=n(20113),h=n(12274),c=n(72199),d=n(70957),r=n(91651),a=n(21394),o=n(66933),u,p,x,P,D,g,R,y,I,S=(0,o.kc)(function(i,j){var O=i.token,_=i.prefixCls,Z=i.css,k=i.cx,z=j.rowNum,A=j.hasLink,w="".concat(_,"-features"),F="".concat(w,"-cover"),K="".concat(w,"-description"),H="".concat(w,"-title"),Y="".concat(w,"-img"),$=20,U=function(G){return Z(u||(u=(0,a.Z)([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),G,G,G*(22/24))},E=Z(p||(p=(0,a.Z)([`
      transition: all `," ",`;
    `])),O.motionDurationSlow,O.motionEaseInOutCirc);return{cell:Z(x||(x=(0,a.Z)([`
        overflow: hidden;
      `]))),container:Z(P||(P=(0,a.Z)([`
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
      `])),E,F,$*z,O.colorFillContent,Y,U(100),K,H,A?14:20),desc:k(K,E,Z(D||(D=(0,a.Z)([`
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
        `])),O.colorTextSecondary,O.colorTextDescription)),img:k(Y,E,Z(g||(g=(0,a.Z)([`
          `,`;
          color: `,`;
        `])),U(20),O.colorText)),imgContainer:k(F,E,Z(R||(R=(0,a.Z)([`
          `,`;
          padding: 4px;
          opacity: 0.8;
          border-radius: `,`px;
        `])),U(24),O.borderRadius)),link:Z(y||(y=(0,a.Z)([`
        `,`;
        margin-block-start: 24px;
      `])),E),title:k(H,E,Z(I||(I=(0,a.Z)([`
          pointer-events: none;

          margin-block: 16px;
          margin-inline: 0;

          font-size: 20px;
          line-height: `,`;
          color: `,`;
        `])),O.lineHeightHeading3,O.colorText))}}),b=n(651),m=["style","className","row","column","description","image","title","link","icon","imageStyle","openExternal"],T=(0,e.memo)(function(i){var j=i.image,O=i.className,_=i.title,Z=i.style;return j.startsWith("http")?(0,b.jsx)(r.Z,{alt:_,className:O,src:j,style:Z}):(0,b.jsx)(v.Z,{className:O,style:Z,children:j})}),N=(0,e.memo)(function(i){var j=i.style,O=i.className,_=i.row,Z=i.column,k=i.description,z=i.image,A=i.title,w=i.link,F=i.icon,K=i.imageStyle,H=i.openExternal,Y=(0,s.Z)(i,m),$=_||7,U=S({hasLink:!!w,rowNum:$}),E=U.styles,J=U.cx;return(0,b.jsx)("div",(0,t.Z)((0,t.Z)({className:J(E.container,O),style:(0,t.Z)({gridColumn:"span ".concat(Z||1),gridRow:"span ".concat($)},j)},Y),{},{children:(0,b.jsxs)("div",{className:E.cell,children:[z||F&&(0,b.jsxs)(v.Z,{className:E.imgContainer,style:K,children:[F&&(0,b.jsx)(d.Z,{className:E.img,icon:F}),z&&(0,b.jsx)(T,{className:E.img,image:z,title:A})]}),A&&(0,b.jsx)(h.D,{align:"center",as:"h3",className:E.title,gap:8,horizontal:!0,children:A}),k&&(0,b.jsx)("p",{className:E.desc,dangerouslySetInnerHTML:{__html:k}}),w&&(0,b.jsx)("div",{className:E.link,children:(0,b.jsx)(c.Z,{href:w,rel:"noreferrer",target:H?"_blank":void 0,children:"Read More"})})]})}))}),B=N,M=["items","className","itemClassName","itemStyle","maxWidth","style"],W=(0,e.memo)(function(i){var j=i.items,O=i.className,_=i.itemClassName,Z=i.itemStyle,k=i.maxWidth,z=k===void 0?960:k,A=i.style,w=(0,s.Z)(i,M);if(j!=null&&j.length)return(0,b.jsx)(f.Z,(0,t.Z)({className:O,items:j,renderItem:function(K){return(0,b.jsx)(B,(0,t.Z)({className:_,style:Z},K),K.title)},style:(0,t.Z)({maxWidth:z},A)},w))}),L=W},21224:function(C,l,n){n.d(l,{Z:function(){return R}});var t=n(32710),s=n(81622),e=n(21394),f=n(66933),v=n(12689),h=n(49069),c=n(56070),d="[object String]";function r(y){return typeof y=="string"||!(0,h.Z)(y)&&(0,c.Z)(y)&&(0,v.Z)(y)==d}var a=r,o=n(92379),u=n(12274),p=n(651),x=["className","gap","rows","children","maxItemWidth"],P,D=(0,f.kc)(function(y,I){var S=y.css,b=I.rows,m=I.maxItemWidth,T=I.gap;return{container:S(P||(P=(0,e.Z)([`
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
      `])),b,a(m)?m:"".concat(m,"px"),a(T)?T:"".concat(T,"px"))}}),g=(0,o.forwardRef)(function(y,I){var S=y.className,b=y.gap,m=b===void 0?"1em":b,T=y.rows,N=T===void 0?3:T,B=y.children,M=y.maxItemWidth,W=M===void 0?240:M,L=(0,s.Z)(y,x),i=D({gap:m,maxItemWidth:W,rows:N}),j=i.cx,O=i.styles;return(0,p.jsx)(u.D,(0,t.Z)((0,t.Z)({className:j(O.container,S),gap:m,ref:I},L),{},{children:B}))}),R=g},91651:function(C,l,n){var t=n(81622),s=n(32710),e=n(92379),f=n(8665),v=n(651),h=["unoptimized"],c=function(a){return(0,e.forwardRef)(function(o,u){return(0,e.createElement)(a,(0,s.Z)((0,s.Z)({},o),{},{ref:u}))})},d=(0,e.forwardRef)(function(r,a){var o=r.unoptimized,u=(0,t.Z)(r,h),p=(0,e.useContext)(f.E_),x=(p==null?void 0:p.imgAs)||"img",P=(0,e.useMemo)(function(){return c(x)},[x]);return(0,v.jsx)(P,(0,s.Z)({ref:a,unoptimized:o===void 0?p==null?void 0:p.imgUnoptimized:o},u))});l.Z=d},94174:function(C,l,n){n.d(l,{Z:function(){return D}});var t=n(32710),s=n(81622),e=n(92379),f=n(12274),v=n(13450),h=n(65502),c=n(18308),d=n(21394),r=n(66933),a,o,u=(0,r.kc)(function(g,R){var y=g.css,I=g.cx,S=g.token,b=g.prefixCls,m=y(a||(a=(0,d.Z)([`
    background-color: `,`;
    border: 1px solid `,`;
  `])),R==="block"?S.colorFillTertiary:"transparent",R==="block"?"transparent":S.colorBorder);return{container:I(m,y(o||(o=(0,d.Z)([`
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
      `])),S.borderRadius,S.motionEaseOut,S.colorFillTertiary,b))}}),p=n(651),x=["symbol","language","children","copyable","type","spotlight","className"],P=(0,e.memo)(function(g){var R=g.symbol,y=g.language,I=y===void 0?"tsx":y,S=g.children,b=g.copyable,m=b===void 0?!0:b,T=g.type,N=T===void 0?"ghost":T,B=g.spotlight,M=g.className,W=(0,s.Z)(g,x),L=u(N),i=L.styles,j=L.cx;return(0,p.jsxs)(f.D,(0,t.Z)((0,t.Z)({align:"center",className:j(i.container,M),gap:8,horizontal:!0},W),{},{children:[B&&(0,p.jsx)(c.Z,{}),(0,p.jsx)(h.Z,{language:I,children:[R,S].filter(Boolean).join(" ")}),m&&(0,p.jsx)(v.Z,{content:S,size:{blockSize:24,fontSize:14}})]}))}),D=P},31266:function(C,l,n){n.d(l,{Z:function(){return b}});var t=n(32710),s=n(83891),e=n(81622),f=n(92379),v=n(21224),h=n(12274),c=n(21394),d=n(66933),r=n(36122),a,o,u,p,x="hover-card",P=(0,d.kc)(function(m,T){var N=m.css,B=m.responsive,M=m.token,W=m.isDarkMode,L=T.size,i=T.borderRadius;return{container:N(a||(a=(0,c.Z)([`
      &:hover > .`,`::after {
        opacity: 1;
      }
    `])),x),content:N(o||(o=(0,c.Z)([`
      z-index: 2;

      flex-grow: 1;

      height: 100%;
      margin: 1px;

      background: `,`;
      border-radius: `,`px;
    `])),M.colorBgContainer,i-1),grid:N(u||(u=(0,c.Z)([`
      display: grid;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),B.mobile),itemContainer:N(p||(p=(0,c.Z)([`
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
    `])),(0,r.m4)(M.colorBorderSecondary,.75),i,L,(0,r.m4)(M.colorTextBase,W?.06:.02),L*.75,(0,r.m4)(M.colorTextBase,W?.4:.2))}}),D=n(651),g=["children","className","style","borderRadius","size"],R=(0,f.memo)(function(m){var T=m.children,N=m.className,B=m.style,M=m.borderRadius,W=m.size,L=(0,e.Z)(m,g),i=P({borderRadius:M,size:W}),j=i.styles,O=i.cx;return(0,D.jsx)(h.D,(0,t.Z)((0,t.Z)({className:O(j.itemContainer,N),style:(0,t.Z)({borderRadius:M},B)},L),{},{children:(0,D.jsx)(h.D,{className:j.content,children:T})}))}),y=R,I=["items","renderItem","maxItemWidth","className","columns","gap","style","size","borderRadius","spotlight"],S=(0,f.memo)(function(m){var T=m.items,N=m.renderItem,B=m.maxItemWidth,M=m.className,W=m.columns,L=W===void 0?3:W,i=m.gap,j=i===void 0?"1em":i,O=m.style,_=m.size,Z=_===void 0?800:_,k=m.borderRadius,z=k===void 0?12:k,A=m.spotlight,w=A===void 0?!0:A,F=(0,e.Z)(m,I),K=P({borderRadius:z,size:Z}),H=K.styles,Y=K.cx,$=(0,f.useRef)(null);return(0,f.useEffect)(function(){if($.current&&w){var U=function(J){var G=(0,s.Z)(document.querySelectorAll(".".concat(x))),Q;try{for(G.s();!(Q=G.n()).done;){var X=Q.value,V=X.getBoundingClientRect(),q=J.clientX-V.left,nn=J.clientY-V.top;X.style.setProperty("--mouse-x","".concat(q,"px")),X.style.setProperty("--mouse-y","".concat(nn,"px"))}}catch(en){G.e(en)}finally{G.f()}};return $.current.addEventListener("mousemove",U),function(){var E;(E=$.current)===null||E===void 0||E.removeEventListener("mousemove",U)}}},[]),(0,D.jsx)(v.Z,(0,t.Z)((0,t.Z)({className:Y(H.container,H.grid,M),gap:j,maxItemWidth:B,ref:$,rows:L,style:O},F),{},{children:T.map(function(U,E){return(0,D.jsx)(y,{borderRadius:z,className:x,size:Z,children:(0,D.jsx)(N,(0,t.Z)({},U))},E)})}))}),b=S},56853:function(C,l,n){n.d(l,{y:function(){return f}});var t=n(97631),s="https://unpkg.com",e="https://registry.npmmirror.com",f=function(h){var c=h.pkg,d=h.version,r=d===void 0?"latest":d,a=h.path,o=h.proxy;switch(o){case"unpkg":return(0,t.Z)(s,"".concat(c,"@").concat(r),a);default:return(0,t.Z)(e,c,r,"files",a)}}},13532:function(C,l,n){n.d(l,{Z:function(){return s}});var t=n(93910);const s=(0,t.Z)("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]])},87611:function(C,l,n){n.d(l,{Z:function(){return s}});var t=n(93910);const s=(0,t.Z)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]])},20113:function(C,l,n){var t=n(88941),s=n(81622),e=n(20462),f=n(285),v=n(92379),h=n(651),c=["children","className","prefixCls"];function d(o,u){var p=Object.keys(o);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(o);u&&(x=x.filter(function(P){return Object.getOwnPropertyDescriptor(o,P).enumerable})),p.push.apply(p,x)}return p}function r(o){for(var u=1;u<arguments.length;u++){var p=arguments[u]!=null?arguments[u]:{};u%2?d(Object(p),!0).forEach(function(x){(0,t.Z)(o,x,p[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(p)):d(Object(p)).forEach(function(x){Object.defineProperty(o,x,Object.getOwnPropertyDescriptor(p,x))})}return o}var a=(0,v.forwardRef)(function(o,u){var p=o.children,x=o.className,P=o.prefixCls,D=(0,s.Z)(o,c);return(0,h.jsx)(e.Z,r(r({ref:u,internalClassName:"".concat((0,f.Gn)(P),"-center"),className:x},D),{},{align:"center",justify:"center",children:p}))});l.Z=a},83891:function(C,l,n){n.d(l,{Z:function(){return s}});var t=n(13793);function s(e,f){var v=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!v){if(Array.isArray(e)||(v=(0,t.Z)(e))||f&&e&&typeof e.length=="number"){v&&(e=v);var h=0,c=function(){};return{s:c,n:function(){return h>=e.length?{done:!0}:{done:!1,value:e[h++]}},e:function(u){throw u},f:c}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,r=!0,a=!1;return{s:function(){v=v.call(e)},n:function(){var u=v.next();return r=u.done,u},e:function(u){a=!0,d=u},f:function(){try{r||v.return==null||v.return()}finally{if(a)throw d}}}}},76298:function(C,l,n){var t=n(77567),s=t.Z.Symbol;l.Z=s},12689:function(C,l,n){n.d(l,{Z:function(){return D}});var t=n(76298),s=Object.prototype,e=s.hasOwnProperty,f=s.toString,v=t.Z?t.Z.toStringTag:void 0;function h(g){var R=e.call(g,v),y=g[v];try{g[v]=void 0;var I=!0}catch(b){}var S=f.call(g);return I&&(R?g[v]=y:delete g[v]),S}var c=h,d=Object.prototype,r=d.toString;function a(g){return r.call(g)}var o=a,u="[object Null]",p="[object Undefined]",x=t.Z?t.Z.toStringTag:void 0;function P(g){return g==null?g===void 0?p:u:x&&x in Object(g)?c(g):o(g)}var D=P},34657:function(C,l){var n=typeof global=="object"&&global&&global.Object===Object&&global;l.Z=n},77567:function(C,l,n){var t=n(34657),s=typeof self=="object"&&self&&self.Object===Object&&self,e=t.Z||s||Function("return this")();l.Z=e},49069:function(C,l){var n=Array.isArray;l.Z=n},56070:function(C,l){function n(t){return t!=null&&typeof t=="object"}l.Z=n},97631:function(C,l,n){n.d(l,{Z:function(){return s}});function t(e){var f=[];if(e.length===0)return"";if(typeof e[0]!="string")throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var v=e.shift();e[0]=v+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var h=0;h<e.length;h++){var c=e[h];if(typeof c!="string")throw new TypeError("Url must be a string. Received "+c);c!==""&&(h>0&&(c=c.replace(/^[\/]+/,"")),h<e.length-1?c=c.replace(/[\/]+$/,""):c=c.replace(/[\/]+$/,"/"),f.push(c))}var d=f.join("/");d=d.replace(/\/(\?|&|#[^!])/g,"$1");var r=d.split("?");return d=r.shift()+(r.length>0?"?":"")+r.join("&"),d}function s(){var e;return typeof arguments[0]=="object"?e=arguments[0]:e=[].slice.call(arguments),t(e)}}}]);
