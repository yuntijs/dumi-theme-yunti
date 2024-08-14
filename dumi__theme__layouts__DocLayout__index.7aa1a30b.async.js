"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{42671:function($t,Me,s){s.r(Me),s.d(Me,{default:function(){return Ho}});var we=s(87956),c=s(92379),te=s(15354),Gt=s(12027),Q=s.n(Gt),Kt=s(19317),De=s.n(Kt),Vt=s(29861),Pe=s.n(Vt),Yt=s(91253),g=s(48073),Xt=s(95490),W=s.n(Xt),ze=s(32089),Ue=s(9676),Jt=s(24325),B=s.n(Jt),Qt=s(34180),pe=s.n(Qt),qt=s(28633),A=s.n(qt),Ne=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},_t=function(e){for(var t={},o=function(){var u=A()(i[a],2),d=u[0],v=u[1],m=Object.keys(t);if(d.split("/").length===3){var p,x,k="/".concat(d.split("/")[1]),h=(p=v[0])===null||p===void 0||(p=p.children)===null||p===void 0?void 0:p.find(function(z){var P,Z=(P=z.frontmatter)===null||P===void 0?void 0:P.nav;return pe()(Z)==="object"&&pe()(Z==null?void 0:Z.second)==="object"});if(!h){var F;h=(F=v[0])===null||F===void 0?void 0:F.children[0]}var L=(x=h)===null||x===void 0||(x=x.frontmatter)===null||x===void 0?void 0:x.nav,H={order:0,title:void 0};if(typeof L!="string"){var T,w,M,I;H.order=(T=L==null||(w=L.second)===null||w===void 0?void 0:w.order)!==null&&T!==void 0?T:0,H.title=(M=L==null||(I=L.second)===null||I===void 0?void 0:I.title)!==null&&M!==void 0?M:L==null?void 0:L.second}if(m.includes(k)){var R;t[k].push({title:H.title,order:H.order,children:(R=v[0])===null||R===void 0?void 0:R.children})}else t[k]=v.map(function(z){return B()(B()({},z),{},{title:H.title,order:H.order})})}else m.includes(d)?t[d]=[].concat(Q()(t[d]),Q()(v)):t[d]=v},a=0,i=Object.entries(e);a<i.length;a++)o();return t},Fe=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},ne={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},en=function(){var e=(0,g.useSiteData)(),t=e.themeConfig,o=(0,g.useNavData)(),a=(0,g.useSidebarData)(),i=(0,g.useRouteMeta)(),l=(0,g.useTabMeta)(),u=(0,g.useLocation)(),d=(0,g.useLocale)(),v=(0,g.useIntl)(),m=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:v.formatMessage({id:"header.nav.home"})}},[v]),p=t.hideHomeNav?o:[m].concat(Q()(o));return B()(B()({},ne),{},{locale:d||ne.locale,location:u||ne.location,navData:p||ne.navData,routeMeta:i||ne.routeMeta,sidebar:a||ne.sidebar,siteData:B()(B()({},ne.siteData),{},{themeConfig:t}),tabMeta:l||ne.tabMeta})},tn=(0,Ue.F)()((0,ze.mW)(function(){return ne},{name:"dumi-theme-yunti"})),y=Ne?tn:function(n,e){var t=en(),o=(0,Ue.F)()((0,ze.mW)(function(){return t},{name:"dumi-theme-yunti"}));return Object.assign(y,o),o(n,e)},nn=["setLoading"],rn=["setLoading"],We={},on=function(e,t){(0,c.useEffect)(function(){c.startTransition(function(){e()})},t)},an=function(e,t){(0,Yt.Z)(function(){e()},t,{maxWait:96,wait:32})},ln=typeof c.startTransition=="function"?on:an,ie=function(e,t,o){var a=o||function(i,l){var u;return(u=y.setState)===null||u===void 0?void 0:u.call(y,Pe()({},i,l))};!Ne&&!We[e]&&(a(e,t),We[e]=!0),ln(function(){a(e,t)},[t])},sn=function(){var e=(0,g.useSiteData)(),t=(0,g.useSidebarData)(),o=(0,g.useRouteMeta)(),a=(0,g.useTabMeta)(),i=(0,g.useNavData)(),l=(0,g.useLocation)(),u=(0,g.useLocale)(),d=(0,g.useIntl)(),v=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:d.formatMessage({id:"header.nav.home"})}},[d]);return ie("siteData",e,function(){var m,p,x=e.setLoading,k=De()(e,nn),h=((m=y.getState)===null||m===void 0?void 0:m.call(y))||{siteData:{}},F=h.siteData,L=F.setLoading,H=De()(F,rn);W()(k,H)||(p=y.setState)===null||p===void 0||p.call(y,{siteData:e})}),ie("sidebar",t),ie("routeMeta",o),ie("location",l),ie("tabMeta",a),ie("locale",u),ie("navData",i,function(){var m,p=e.themeConfig.hideHomeNav?i:[v].concat(Q()(i));(m=y.setState)===null||m===void 0||m.call(y,{navData:p})}),!1},cn=s(29148),j=s.n(cn),E=s(66933),$e,un=(0,E.vJ)($e||($e=j()([`
  #nprogress {
    .bar {
      background: `,`;
    }

    .peg {
      display: none !important;
    }

    .spinner {
      display: none;
    }
  }
`])),function(n){var e=n.theme;return e.colorText}),dn=un,He=s(37620),Ge=function(e){return e.siteData.themeConfig},vn=function(e){return e.siteData.themeConfig.title},Le=function(e){var t;return((t=e.siteData.themeConfig.socialLinks)===null||t===void 0?void 0:t.github)||""},mn=function(e){var t;return((t=e.siteData.themeConfig.socialLinks)===null||t===void 0?void 0:t.discord)||""},hn=function(e){return e.siteData.themeConfig.giscus},pn=function(e){return e.siteData.themeConfig.header},Ke=function(e){return e===!1?!1:typeof e=="string"},fn=function(e){var t,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var a=["/api","/components"].concat(Q()(((t=e.siteData.themeConfig.apiHeader)===null||t===void 0?void 0:t.match)||[]));return a.some(function(i){return e.location.pathname.startsWith(i)})},Ve=function(e){var t,o,a,i,l=Le(e),u=e.routeMeta.frontmatter,d=e.locale.id,v=function(z){return z.replace("{github}",l).replace("{atomId}",u.atomId||"").replace("{title}",u.title).replace("{locale}",d)},m=e.siteData.themeConfig.apiHeader||{},p=m.type,x=p===void 0?"component":p,k=m.pkg,h=k===void 0?e.siteData.pkg.name:k,F=m.sourceUrl,L=m.docUrl,H=((t=u.apiHeader)===null||t===void 0?void 0:t.pkg)||h,T=u.atomId||u.title,w=((o=u.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,M=((a=u.apiHeader)===null||a===void 0?void 0:a.sourceUrl)||(Ke(F)?v(F):void 0),I=((i=u.apiHeader)===null||i===void 0?void 0:i.docUrl)||(Ke(L)?v(L):void 0);return{componentName:T,defaultImport:w,description:u.description,docUrl:I,pkg:H,sourceUrl:M,title:u.title,type:x}},gn=function(e){if(e.location.pathname==="/")return"/";var t=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(t==null?void 0:t.activePath)||(t==null?void 0:t.link)||""},Ye=function(e){var t,o,a=e.routeMeta,i=a.toc,l=a.frontmatter;(t=e.tabMeta)!==null&&t!==void 0&&t.toc&&(i=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(l=e.tabMeta.frontmatter);var u=function(v){if(!l.tocDepth||typeof l.tocDepth=="number"&&l.tocDepth>v-1)return!0};return i.reduce(function(d,v){if(v.depth===2&&u(2))d.push(B()({},v));else if(v.depth===3&&u(3)){var m=d.at(-1);m&&(m.children=m.children||[],m.children.push(B()({},v)))}return d},[])},Xe=function(e){var t;return((t=e.sidebar)===null||t===void 0?void 0:t.map(function(o){return o.children}).flat())||[]},xn=function(e){var t=Xe(e),o=e.location.pathname,a=t.findIndex(function(i){return i.link===o});return{currentIndex:a,next:t[a+1],prev:t[a-1]}},yn=s(92010),bn=function(e){var t=e.routeMeta.frontmatter;return(0,yn.Z)({},t.token,e.siteData.themeConfig.siteToken)},Sn={apiHeader:Ve,flattenSidebar:Xe,token:bn},jn=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},kn=jn,Cn=s(827),q=s(29191),Te=s(20113),Y=s(70957),Mn=s(62090),Dn=s(94174),Ln=s(44550),Ie=s(24899),Ze=s(31180),Re=s(42018),Tn=s(92496),G=s(12274),Je,Qe,qe,_e,et,In=(0,E.kc)(function(n){var e=n.css,t=n.token,o=n.responsive,a=n.stylish;return{desc:e(Je||(Je=j()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),t.fontSizeLG,t.lineHeightLG),label:e(Qe||(Qe=j()([`
    width: 80px;
  `]))),meta:e(qe||(qe=j()([""]))),text:e(_e||(_e=j()([`
    `,`
  `])),a.resetLinkColor),title:e(et||(et=j()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=s(651),tt=(0,c.memo)(function(n){var e=n.title,t=n.type,o=n.componentName,a=n.description,i=n.defaultImport,l=n.pkg,u=n.sourceUrl,d=n.docUrl,v=n.serviceList,m=v===void 0?[]:v,p=In(),x=p.styles,k=(0,q.F)(),h=k.mobile,F=t==="doc",L=[u&&{children:"Source",icon:(0,r.jsx)(Y.Z,{icon:Re.Z}),url:u},d&&{children:"Edit",icon:(0,r.jsx)(Y.Z,{icon:Tn.Z}),url:d}].filter(Boolean),H=i?"import ".concat(o," from '").concat(l,"';"):"import { ".concat(o," } from '").concat(l,"';");return(0,r.jsxs)(G.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(Ln.Z.Title,{className:x.title,children:e}),a&&(0,r.jsx)(Mn.Z,{className:x.desc,children:a}),!F&&(0,r.jsxs)(G.D,{gap:h?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(Dn.Z,{spotlight:!0,children:H})}),(0,r.jsx)(Ie.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)(G.D,{distribution:"space-between",gap:h?24:0,horizontal:!h,children:[(0,r.jsx)(Ze.Z,{split:(0,r.jsx)(Ie.Z,{type:"vertical"}),wrap:!0,children:m.map(function(T){return(0,r.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",title:T.label,children:(0,r.jsxs)(G.D,{align:"center",className:x.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},T.label)})}),(0,r.jsx)(Ze.Z,{className:x.meta,split:(0,r.jsx)(Ie.Z,{type:"vertical"}),children:L.map(function(T,w){return(0,r.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(G.D,{align:"center",className:x.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},w)})})]})]})]})}),nt,rt,ot,at=(0,E.kc)(function(n){var e=n.cx,t=n.css,o=n.token,a=n.stylish;return{background:e(a.gradientAnimation,t(nt||(nt=j()([`
      pointer-events: none;

      position: absolute;
      z-index: 0;
      top: -100px;
      right: -20vw;
      transform: rotate(4deg);

      width: 60vw;
      height: 200px;

      opacity: 0.2;
      filter: blur(100px);
    `])))),changelog:t(rt||(rt=j()([`
    .markdown {
      font-size: 16px;

      h1 {
        display: none;
      }

      h2,
      h3 {
        margin-bottom: 0;
        font-size: 28px;
      }

      sup {
        color: `,`;
      }

      details {
        font-size: 14px;
      }

      summary > kbd {
        margin-left: 6px;
      }

      a[href='/changelog#readme-top'] {
        display: block;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid `,`;

        > img {
          display: none;
        }
      }
    }
  `])),o.colorTextDescription,o.colorBorderSecondary),content:t(ot||(ot=j()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Bn=s(48037),wn=s(83994),Pn=s(25220),it,lt,st,ct,Fn=(0,E.kc)(function(n){var e=n.token,t=n.css;return{alignmentEnd:t(it||(it=j()([`
    justify-content: flex-end;
  `]))),container:t(lt||(lt=j()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(st||(st=j()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:t(ct||(ct=j()([`
    font-size: 16px;
  `])))}}),Hn=(0,c.memo)(function(n){var e=n.title,t=n.link,o=n.type,a=Fn(),i=a.styles,l=a.cx,u=(0,g.useIntl)(),d=(0,c.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y.Z,{icon:wn.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(Y.Z,{icon:Pn.Z})]})}},[u,o]);return(0,r.jsx)(g.Link,{to:t,children:(0,r.jsxs)(G.D,{className:i.container,gap:8,children:[(0,r.jsx)(G.D,{className:l(i.nav,o==="next"&&i.alignmentEnd),gap:4,horizontal:!0,children:d}),(0,r.jsx)(G.D,{className:l(i.title,o==="next"&&i.alignmentEnd),horizontal:!0,children:e})]})})}),ut=Hn,Zn=(0,c.memo)(function(){var n=y(xn,W()),e=n.prev,t=n.next,o=(0,q.F)(),a=o.mobile;return(0,r.jsxs)(G.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[e?(0,r.jsx)(ut,B()({type:"prev"},e)):(0,r.jsx)("div",{}),t?(0,r.jsx)(ut,B()({type:"next"},t)):(0,r.jsx)("div",{})]})}),Rn=Zn,dt,vt,On=(0,E.kc)(function(n,e){var t=n.cx,o=n.token,a=n.responsive,i=n.css;return{content:t(!e&&i(dt||(dt=j()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,a.mobile),i(vt||(vt=j()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),En=["children"],An=(0,c.memo)(function(n){var e=n.children,t=De()(n,En),o=y(function(p){return p.siteData.loading}),a=y(Ge,W()),i=a.docStyle,l=On(i==="pure"),u=l.styles,d=l.cx,v=(0,q.F)(),m=v.mobile;return(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)(G.D,B()(B()({gap:m?0:24,width:"100%"},t),{},{children:[(0,r.jsx)("div",{className:d("dumi-antd-style-content",u.content),children:(0,r.jsx)(Bn.Z,{children:e})}),(0,r.jsx)(Rn,{})]}))}),mt=An,zn=(0,c.memo)(function(){var n=(0,g.useOutlet)(),e=(0,q.F)(),t=e.mobile,o=y(function(v){return{repoBase:Le(v)}},te.X),a=o.repoBase,i=y(function(v){return{fm:v.routeMeta.frontmatter}},W()),l=i.fm,u=at(),d=u.styles;return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:d.background}),(0,r.jsxs)(Te.Z,{className:d.content,style:{padding:t?0:24},children:[(0,r.jsx)("div",{style:{padding:t?16:0,width:"100%"},children:(0,r.jsx)(tt,{description:l.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:l.title})}),(0,r.jsx)(mt,{className:d.changelog,children:n})]})]})}),Un=zn,Nn=s(13876),Wn=s(22148),$n=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Gn=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Kn=(0,c.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Vn=(0,c.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Yn=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Xn=(0,c.memo)(function(){var n=y(Ve,W()),e=n.pkg,t=(0,c.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(Kn,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)(Yn,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)($n,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Vn,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(Gn,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(tt,B()({serviceList:t},n))}),Jn=Xn,Qn=(0,c.memo)(function(){var n=(0,g.useOutlet)(),e=(0,g.useLocation)(),t=(0,q.F)(),o=t.mobile,a=y(function(m){return{giscus:hn(m),isApiPage:fn(m)}},te.X),i=a.isApiPage,l=a.giscus,u=at(),d=u.styles;(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var v=(0,c.useCallback)(function(){return l&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(Wn.Z,{category:l.category,categoryId:l.categoryId,id:"lobehub",mapping:"title",repo:l.repo,repoId:l.repoId})})},[l,e.pathname]);return(0,r.jsxs)(Nn.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:d.background}),(0,r.jsxs)(Te.Z,{className:d.content,style:{marginBottom:48,padding:o?0:24},children:[i?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)(Jn,{})}):void 0,(0,r.jsxs)(mt,{children:[n,l&&(0,r.jsx)(v,{})]})]})]})}),qn=Qn,_n=s(57030),Oe=function(e){return!!e.routeMeta.frontmatter.hero},oe=function(e,t){if(t)return t[e.locale.id]?t[e.locale.id]:t},er=function(e){var t,o;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.title)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||oe(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},tr=function(e){var t,o;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.description)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||oe(e,e.siteData.themeConfig.description)},nr=function(e){var t,o;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.actions)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||oe(e,e.siteData.themeConfig.actions)},rr=function(e){var t;return Oe(e)?((t=oe(e,e.siteData.themeConfig.hero))===null||t===void 0?void 0:t.features)||oe(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},or=function(e){var t=e.siteData.themeConfig.customPages;if(!(!t||t.length===0))return t.find(function(o){return o.path===e.location.pathname})},ar=(0,c.memo)(function(){var n=y(rr,W()),e=(0,E.Fg)();if(n!=null&&n.length)return(0,r.jsx)(_n.Z,{items:n,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),ir=ar,lr=s(72819),sr=(0,c.memo)(function(){var n=y(Oe),e=y(er),t=y(tr),o=y(nr);if(n)return(0,r.jsx)(lr.Z,{actions:o,description:t,title:e})}),cr=sr,ur=(0,c.memo)(function(){var n=(0,g.useOutlet)();return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(G.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(cr,{}),(0,r.jsx)(ir,{}),n]})}),dr=ur,vr=s(41850),mr=s(2957),hr=s(35723),pr=s(59325),fr=function(e){var t=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},a={items:[t&&{icon:(0,r.jsx)(Y.Z,{icon:mr.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(t,"/issues/new/choose")},t&&{icon:(0,r.jsx)(Y.Z,{icon:hr.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(t,"/issues/new/choose")}].filter(Boolean),title:"Community"},i={items:[t&&{icon:(0,r.jsx)(Y.Z,{icon:Re.Z,size:"small"}),openExternal:!0,title:"GitHub",url:t},{LinkComponent:g.Link,icon:(0,r.jsx)(Y.Z,{icon:pr.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},l={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,a,i,l]},ht,pt,gr=(0,E.kc)(function(n){var e=n.css,t=n.responsive,o=n.token,a="rc-footer";return{container:e(ht||(ht=j()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,t.mobile),footer:e(pt||(pt=j()([`
      font-size: 14px;
      line-height: 1.5;
      color: `,`;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;

            margin: 0 auto;

            font-size: 16px;
            font-weight: 500;
            color: `,`;
          }

          &-icon {
            position: relative;
            top: -1px;

            display: inline-block;

            width: 22px;
            margin-inline-end: 0.5em;

            text-align: center;
            vertical-align: middle;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;

            display: inline-block;

            width: 16px;
            margin-inline-end: 0.4em;

            text-align: center;
            vertical-align: middle;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;

            font-size: 16px;
            line-height: 32px;
            text-align: center;

            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 85%);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 85%);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 45%);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),o.colorTextSecondary,o.colorBgLayout,a,o.colorTextTertiary,o.colorLinkHover,a,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,t.mobile,a)}}),xr=(0,c.memo)(function(){var n=y(function(k){return k.siteData},W()),e=n.themeConfig,t=n.pkg,o=e.footerConfig,a=e.footer,i=y(Le,te.X),l=gr(),u=l.styles,d=l.theme,v=(0,q.F)(),m=v.mobile;if(a){var p=o!=null&&o.columns?o==null?void 0:o.columns:fr({github:i||t.homepage});o!=null&&o.resources&&(p[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(p[3]=o==null?void 0:o.moreProducts);var x=(o==null?void 0:o.bottom)||a;return(0,r.jsx)(vr.Z,{bottom:m?(0,r.jsxs)(Te.Z,{className:u.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)(G.D,{align:"center",dangerouslySetInnerHTML:{__html:x},horizontal:!0})]}):(0,r.jsxs)(Te.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ie.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:x}})]}),columns:p,contentMaxWidth:d.contentMaxWidth,theme:d.appearance})}}),yr=xr,br=s(4413),Sr=s(23961),jr=s(61672),ft,kr=(0,E.kc)(function(n){var e=n.css,t=n.responsive,o=n.token;return e(ft||(ft=j()([`
    display: inline-flex;
    align-items: center;

    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    color: `,`;
    text-decoration: none;

    `,` {
      font-size: 18px;
    }
  `])),o.colorText,t.mobile)}),Cr=(0,c.memo)(function(){var n=y(Ge,W()),e=y(function(u){return u.locale},W()),t=kr(),o=t.styles,a=t.cx,i=(0,q.F)(),l=i.mobile;return n&&(0,r.jsx)(g.Link,{className:a(o),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Ze.Z,{children:[(0,r.jsx)(jr.Z,{avatar:n.logo||"https://avatars.githubusercontent.com/u/148947838",size:l?32:36}),n.name]})})}),Mr=Cr,Dr=s(69916),Lr=s(80326),Tr=s(31125),gt,xt,Ir=(0,E.kc)(function(n){var e=n.css,t=n.stylish,o=n.token,a=n.responsive,i=n.prefixCls;return{link:e(gt||(gt=j()([`
      `,`
      display: inline-flex;
      align-items: center;

      & > .lint-text {
        `,`
      }

      & > .anticon {
        margin-left: `,`px;
        font-size: `,`px;
        color: `,`;
      }
    `])),t.resetLinkColor,t.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(xt||(xt=j()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),i,o.colorText,a.mobile)}}),yt=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},Br=(0,c.memo)(function(){var n=Ir(),e=n.styles,t=(0,g.useLocation)(),o=t.pathname,a=y(function(l){return l.navData},te.X),i=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Dr.Z,{activeKey:i,className:e.tabs,items:a.map(function(l){var u=l.activePath||yt(l.link);return{key:Fe(l.link)?l.link:u,label:Fe(l.link)?(0,r.jsxs)("a",{className:e.link,href:String(l.link),onClick:function(v){return v.preventDefault()},rel:"noreferrer",target:l.target||"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:l.title})," ",(0,r.jsx)(Y.Z,{icon:Tr.Z})]}):(0,r.jsx)(g.Link,{className:e.link,onClick:function(v){return v.preventDefault()},target:l.target,to:String(l.link),children:l.title})}}),onTabClick:function(u){var d=a.find(function(v){return v.activePath===u||v.link===u||yt(v.link)===u});if(d!=null&&d.link){if(Fe(d.link)||d.target==="_blank")return window.open(d.link);g.history.push(d.link)}}}),(0,r.jsx)(Lr.Z,{})]})}),wr=Br,Pr=s(19210),Fr=s(57912),bt,St,jt,kt,Ct,Hr=(0,E.kc)(function(n){var e=n.token,t=n.responsive,o=n.css,a=n.cx;return{container:o(bt||(bt=j()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),input:o(St||(St=j()([`
      box-sizing: border-box;
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;

      font-size: 14px;
      color: `,`;

      background-color: transparent;
      border: 1px solid `,`;
      border-radius: 20px;
      outline: none;

      transition: all 0.3s;

      &::input-placeholder {
        color: `,`;
      }

      &:focus {
        background: `,`;
        border-color: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(jt||(jt=j()([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;

      overflow: auto;
      overscroll-behavior: contain;
      flex: 1;

      width: 540px;
      min-height: 60px;
      max-height: 400px;
      margin-top: 8px;

      background-color: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;
      box-shadow: `,`;

      -webkit-overflow-scrolling: touch;

      .dumi-default-search-result {
        > dl {
          > dt {
            color: `,`;
            background: `,`;
          }

          > dd {
            > a {
              > h4 {
                color: `,`;
              }

              > p {
                color: `,`;
              }

              &:hover {
                background: `,`;
              }
            }

            + dd {
              border-color: `,`;
            }
          }
        }

        mark {
          color: #000;
          background: `,`;
        }
      }
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:a("site-header-shortcut",o(kt||(kt=j()([`
        pointer-events: none;

        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        transform: translateY(-50%);

        display: inline-block;

        padding: 4px 8px;

        font-size: 12px;
        line-height: 1;
        color: `,`;
        white-space: nowrap;

        background-color: `,`;
        border: 1px solid `,`;
        border-radius: 11px;

        transition: all 0.3s;

        `,` {
          display: none;
        }
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),svg:a(o(Ct||(Ct=j()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Zr=(0,c.memo)(function(){var n=Hr(),e=n.styles,t=(0,c.useState)(!1),o=A()(t,2),a=o[0],i=o[1],l=(0,g.useSiteSearch)(),u=l.keywords,d=l.setKeywords,v=l.result,m=l.loading,p=(0,g.useIntl)();return(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsx)(Pr.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(k){return d(k.target.value)},onFocus:function(){return i(!0)},placeholder:p.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),u.trim()&&a&&(v.length>0||!m)&&(0,r.jsx)("div",{className:e.popover,children:(0,r.jsx)(Fr.Z,{data:v,loading:m})})]})}),Rr=Zr,Or=s(93974),Er=s(74604),Ar=(0,c.memo)(function(){var n=(0,c.useState)(!1),e=A()(n,2),t=e[0],o=e[1],a=y(function(m){return m.navData},W()),i=y(function(m){return m.sidebar},W()),l=y(function(m){return{activePath:gn(m),pathname:m.location.pathname}},te.X),u=l.pathname,d=l.activePath,v=(0,c.useMemo)(function(){var m=i==null?void 0:i.map(function(p){return!p.link&&{children:p.children.map(function(x){return{key:"s-".concat(x.link),label:(0,r.jsx)(g.Link,{onClick:function(){o(!1)},to:x.link,children:x.title})}}),label:p.title,type:"group"}});return a.map(function(p){return{children:(p.activePath||p.link)===d&&m,key:p.activePath||p.link,label:(0,r.jsx)(g.Link,{to:String(p.link),children:p.title})}})},[a,d,i]);return(0,r.jsx)(Or.Z,{items:v,openKeys:[d],opened:t,selectedKeys:(0,Er.Z)([d,"s-".concat(u)]),setOpened:o})}),zr=Ar,Mt=s(86982),Ur=s(93910),Dt,Nr=(0,Ur.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Wr=(0,E.kc)(function(n){var e=n.css;return e(Dt||(Dt=j()([`
    svg {
      overflow: visible !important;
    }
  `])))}),$r=(0,c.memo)(function(){var n=y(mn),e=Wr(),t=e.styles;return n?(0,r.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mt.Z,{className:t,icon:Nr,size:"site"})}):void 0}),Gr=$r,Kr=(0,c.memo)(function(){var n=y(Le);return n?(0,r.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mt.Z,{icon:Re.Z,size:"site"})}):void 0}),Vr=Kr,Lt=s(88016),K=s(11348),ge=s(45623),Yr=s(51683),Xr=s(86473),Tt,It,Bt,Jr=(0,E.kc)(function(n,e){var t=n.css,o=n.cx,a=n.token;return{active:o("".concat(e,"-item-active"),t(Tt||(Tt=j()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:o("".concat(e,"-item"),t(It||(It=j()([`
      all: unset;

      user-select: none;
      scroll-margin: 50px;

      display: block;

      box-sizing: inherit;
      width: 100%;
      padding: 12px 10px;

      font-family: `,`;
      font-weight: normal;
      line-height: 1;
      color: `,`;

      background: transparent;
      border-radius: 5px;

      &:hover {
        background: `,`;
      }
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),t(Bt||(Bt=j()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),Qr=["value","label","prefixCls","isSelected","isActive","disabled"],qr=(0,c.forwardRef)(function(n,e){var t=n.value,o=n.label,a=n.prefixCls,i=n.isSelected,l=n.isActive,u=n.disabled,d=De()(n,Qr),v=Jr(a),m=v.styles,p=v.cx;return(0,r.jsx)("button",B()(B()({"aria-selected":i,className:p(m.item,Pe()(Pe()({},m.selected,i),m.active,l)),disabled:u,ref:e,role:"option",tabIndex:-1,type:"button"},d),{},{children:o}),t)}),_r=qr,wt,Pt,eo=(0,E.kc)(function(n,e){var t=n.css,o=n.stylish,a=n.cx,i=n.token;return{button:a("".concat(e,"-button"),t(wt||(wt=j()([`
      `,`
      all: unset;

      cursor: default;
      user-select: none;

      padding: 8px;

      font-size: `,`px;
      line-height: 0;
      color: `,`;

      background: `,`;
      border: 1px solid `,`;
      border-radius: `,`px;

      -webkit-tap-highlight-color: transparent;

      &:focus-visible {
        border-color: `,`;
        box-shadow: 0 0 0 2px `,`;
      }
    `])),o.buttonDefaultHover,i.fontSize,i.colorTextSecondary,i.colorBgContainer,i.colorBorder,i.borderRadius,i.colorPrimary,i.colorPrimaryBg)),container:a(e,t(Pt||(Pt=j()([`
      user-select: none;
      scrollbar-width: none;

      overflow-y: auto;
      overscroll-behavior: contain;

      box-sizing: border-box;
      width: 160px;
      padding: 5px;

      font-size: `,`;

      background: `,`;
      border: 1px solid `,`;
      border-radius: 8px;
      outline: 0;
      box-shadow: `,`;

      &::-webkit-scrollbar {
        display: none;
      }
    `])),i.fontSize,i.colorBgElevated,i.colorBorder,i.boxShadowSecondary))}}),to=(0,c.memo)(function(n){var e=n.options,t=e===void 0?[]:e,o=n.value,a=n.prefixCls,i=n.onChange,l=n.renderValue,u=n.renderItem,d=n.style,v=a!=null?a:"native-select",m=(0,Xr.Z)(0,{onChange:i,value:o}),p=A()(m,2),x=p[0],k=p[1],h=eo(v),F=h.styles,L=(0,c.useRef)([]),H=(0,c.useRef)([]),T=(0,c.useRef)(null),w=(0,c.useRef)(!1),M=(0,c.useRef)(!0),I=(0,c.useRef)(),R=(0,c.useRef)(null),z=(0,c.useState)(!1),P=A()(z,2),Z=P[0],V=P[1],U=(0,c.useState)(null),C=A()(U,2),D=C[0],S=C[1],xe=(0,c.useState)(!1),ue=A()(xe,2),le=ue[0],de=ue[1],se=(0,c.useState)(0),ye=A()(se,2),be=ye[0],ce=ye[1],Se=(0,c.useState)(!1),je=A()(Se,2),ve=je[0],me=je[1],ke=(0,c.useState)(!1),he=A()(ke,2),f=he[0],b=he[1];Z||(be!==0&&ce(0),le&&de(!1),f&&b(!1));var O=(0,K.YF)({middleware:le?[(0,ge.cv)(5),ve?(0,ge.uY)({crossAxis:!0,padding:10}):(0,ge.RR)({padding:10}),(0,ge.dp)({apply:function($){var ee,Ce,zo=$.availableHeight;Object.assign((ee=(Ce=R.current)===null||Ce===void 0?void 0:Ce.style)!==null&&ee!==void 0?ee:{},{maxHeight:"".concat(zo,"px")})},padding:10})]:[(0,K.aN)({index:x,listRef:L,minItemsVisible:ve?8:4,offset:be,onFallbackChange:de,overflowRef:T,padding:10,referenceOverflowThreshold:20,scrollRef:R}),(0,ge.cv)({crossAxis:-4})],onOpenChange:V,open:Z,placement:"bottom-start",whileElementsMounted:Yr.Me}),X=O.x,ae=O.y,N=O.strategy,_=O.refs,J=O.context,Ae=(0,K.NI)([(0,K.eS)(J,{event:"mousedown"}),(0,K.bQ)(J),(0,K.qs)(J,{role:"listbox"}),(0,K.Rz)(J,{enabled:!le,onChange:ce,overflowRef:T,scrollRef:R}),(0,K.c0)(J,{activeIndex:D,listRef:L,onNavigate:S,selectedIndex:x}),(0,K.ox)(J,{activeIndex:D,listRef:H,onMatch:Z?S:k})]),Zo=Ae.getReferenceProps,Ro=Ae.getFloatingProps,Oo=Ae.getItemProps;(0,c.useEffect)(function(){if(Z)return I.current=setTimeout(function(){w.current=!0},300),function(){clearTimeout(I.current)};w.current=!1,M.current=!0},[Z]);var Eo=t[x]||{},Ao=Eo.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",B()(B()({"aria-label":"selected-item",className:F.button,ref:_.setReference,style:d,type:"button"},Zo({onPointerMove:function($){var ee=$.pointerType;ee==="mouse"&&me(!1)},onTouchStart:function(){me(!0)}})),{},{children:l?l(x):Ao})),(0,r.jsx)(K.ll,{children:Z&&(0,r.jsx)(K.y0,{lockScroll:!ve,style:{zIndex:3e3},children:(0,r.jsx)(K.wD,{context:J,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:_.setFloating,style:{left:X!=null?X:0,position:N,top:ae!=null?ae:0},children:(0,r.jsx)("div",B()(B()({className:F.container,ref:R,style:{overflowY:"auto"}},Ro({onContextMenu:function($){$.preventDefault()}})),{},{children:t.map(function(re,$){return(0,r.jsx)(_r,B()({disabled:f,isActive:$===D,isSelected:$===x,label:u?u(re,$):re.label,prefixCls:v,ref:function(Ce){L.current[$]=Ce,H.current[$]=re.label},value:re.value},Oo({onClick:function(){w.current&&(k($),V(!1))},onKeyDown:function(){w.current=!0},onMouseUp:function(){M.current&&(w.current&&(k($),V(!1)),clearTimeout(I.current),I.current=setTimeout(function(){w.current=!0}))},onTouchStart:function(){w.current=!0,M.current=!1}})),re.value)})}))})})})})]})}),no=to;function Be(n){var e=n.pathname,t=n.current,o=n.target,a="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(o.suffix)}var ro={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Ft={"en-US":"EN","zh-CN":"\u4E2D"},oo=(0,c.memo)(function(n){var e=n.locale,t=n.current,o=(0,g.useLocation)(),a=o.pathname,i=(0,c.useState)(function(){return Be({current:t,pathname:a,target:e})}),l=A()(i,2),u=l[0],d=l[1];return(0,c.useEffect)(function(){d(Be({current:t,pathname:a,target:e}))},[t,e,a]),(0,r.jsx)(g.Link,{to:u,children:(0,r.jsx)(Lt.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Ft[e.id]})})}),ao=(0,c.memo)(function(){var n=y(function(t){return t.siteData.locales}),e=y(function(t){return t.locale});if(!(n.length<=1))return n.length>2?(0,r.jsx)(no,{onChange:function(o){console.log(Be({current:e,pathname:location.pathname,target:n[o]})),g.history.push(Be({current:e,pathname:location.pathname,target:n[o]}))},options:n.map(function(t){return{label:Ft[t.id],value:t.id}}),renderItem:function(o,a){return"".concat(ro[n[a].id]," ").concat(n[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:n.findIndex(function(t){return t.id===e.id})}):(0,r.jsx)(oo,{current:e,locale:n.find(function(t){var o=t.id;return o!==e.id})})}),io=ao,lo=s(77388),so=(0,c.memo)(function(){var n=(0,He.f)(function(t){return t.themeMode}),e=(0,g.usePrefersColor)()[2];return(0,c.useEffect)(function(){return e(n)},[e,n]),(0,r.jsx)(lo.Z,{onThemeSwitch:function(o){He.f.setState({themeMode:o})},themeMode:n})}),Ht=so,co=s(12531),uo=s(25381),vo=s(59596),mo=s(99351),Zt,Rt,ho=(0,E.kc)(function(n){var e=n.css;return{avatar:e(Zt||(Zt=j()([`
      cursor: pointer;
    `]))),menu:e(Rt||(Rt=j()([`
      width: 180px;
    `])))}}),Ee="__LOGIN_USER",Ot=(0,c.memo)(function(){var n,e=ho(),t=e.styles,o=y(pn),a=y(function(p){return p.loginUser}),i=(0,g.useIntl)(),l=(0,c.useState)(a),u=A()(l,2),d=u[0],v=u[1];(0,c.useEffect)(function(){var p=window.localStorage.getItem(Ee);if(p)try{var x=JSON.parse(p);v(x),y.setState({loginUser:x})}catch(k){console.warn("parse login user info from ".concat(Ee," failed"),k)}},[]);var m=(0,c.useCallback)(function(){window.localStorage.removeItem(Ee)},[]);if(o!=null&&(n=o.userActionButton)!==null&&n!==void 0&&n.button)return d!=null&&d.user?(0,r.jsx)(co.Z,{menu:{className:t.menu,items:o.userActionButton.menuItems||[{icon:(0,r.jsx)(Y.Z,{icon:vo.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/management/account",children:"\u8D26\u6237\u4E2D\u5FC3"}),key:"account"},{type:"divider"},{icon:(0,r.jsx)(Y.Z,{icon:mo.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/logout",onClick:m,children:"\u9000\u51FA\u767B\u5F55"}),key:"logout"}]},children:(0,r.jsx)(uo.C,{className:t.avatar,size:"small",src:d.avatar,children:d.user.charAt(0).toUpperCase()})}):(0,r.jsx)(Lt.ZP,B()(B()({},o.userActionButton.button),{},{children:i.formatMessage({id:"header.actions.user"})}))}),po=(0,c.memo)(function(){var n=y(function(o){return!!o.routeMeta.frontmatter}),e=(0,q.F)(),t=e.mobile;if(n)return(0,r.jsx)(br.Z,{actions:t?(0,r.jsxs)(Sr.Z,{align:"center",gap:"small",children:[(0,r.jsx)(Ht,{}),(0,r.jsx)(Ot,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Rr,{}),(0,r.jsx)(io,{}),(0,r.jsx)(Vr,{}),(0,r.jsx)(Gr,{}),(0,r.jsx)(Ht,{}),(0,r.jsx)(Ot,{})]}),logo:(0,r.jsx)(Mr,{}),nav:t?(0,r.jsx)(zr,{}):(0,r.jsx)(wr,{})})}),fo=po,go=s(87157),xo=s(36177),yo=s(41378),Et=function(){var e=(0,g.useSiteData)(),t=e.themeConfig,o=t;return o},bo=s(14582),At=s.n(bo),So=s(70761),jo={i8:"1.4.0"},ko=function n(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=At()(e),i;try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.key===t)return[].concat(Q()(o),[l.key]);if(l.children&&l.children.length>0){var u=n(l.children,t,[].concat(Q()(o),[l.key]));if(u)return u}}}catch(d){a.e(d)}finally{a.f()}return null},Co=function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,g.useLocation)(),a=o.pathname,i=o.search,l=Et(),u=l.sidebarGroupModePath,d=l.sidebarEnhance,v=d===void 0?{}:d,m=t.before,p=t.after,x=(0,g.useFullSidebarData)(),k=_t(x),h=(0,g.useLocale)(),F="/".concat((e=a.split("/"))===null||e===void 0?void 0:e[1]),L=k[F],H=(0,c.useMemo)(function(){return Object.values(x).reduce(function(P,Z){var V=Z.flatMap(function(S){return S.children}),U=At()(V),C;try{for(U.s();!(C=U.n()).done;){var D=C.value;P[D.link]=D.title}}catch(S){U.e(S)}finally{U.f()}return P},{})},[x]),T=(0,c.useMemo)(function(){var P=Object.keys(v).find(function(Z){return a.startsWith(Z)});if(P)return v[P]},[a,v]),w=(0,c.useMemo)(function(){var P=function(D){return D&&pe()(D)==="object"&&"link"in D&&"title"in D},Z=function(D){return D&&pe()(D)==="object"&&D.type==="group"},V=function(D){return D&&pe()(D)==="object"&&"children"in D};function U(C){return typeof C=="string"?{key:C,label:(0,r.jsxs)(g.Link,{to:"".concat(C).concat(i),children:[m,H[C],p]})}:Z(C)?{type:"group",label:C.title,key:C.title,children:C.children.map(function(D){return U(D)})}:V(C)?{key:C.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:C.title}),children:C.children.map(function(D){return U(D)})}:P(C)?{label:(0,r.jsx)(g.Link,{target:C.target,to:C.link,children:C.title}),key:C.link}:null}if(T)return T.map(function(C){return U(C)})},[p,m,T,H,i]),M=(0,c.useMemo)(function(){var P,Z,V=new RegExp("".concat((P=h==null?void 0:h.suffix)!==null&&P!==void 0?P:"","$"),"g"),U=Q()(L!=null?L:[]),C=function(S){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return S&&xe&&(0,r.jsx)(So.Z,{bordered:!1,color:typeof S=="string"?"processing":S.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof S=="string"?S:S.title).replace("VERSION","v".concat(jo.i8))})};return(Z=U==null?void 0:U.reduce(function(D,S){if(S!=null&&S.title){var xe=u===!0?!0:(u!=null?u:[]).some(function(f){return a.startsWith(f)});if(xe){var ue;D.push({type:"group",label:S==null?void 0:S.title,order:S==null?void 0:S.order,key:S==null?void 0:S.title,children:(ue=S.children)===null||ue===void 0?void 0:ue.map(function(f){var b,O;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,(0,r.jsx)("span",{children:fe(f==null?void 0:f.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:fe((b=f.frontmatter)===null||b===void 0?void 0:b.subtitle)},"chinese"),C((O=f.frontmatter)===null||O===void 0?void 0:O.tag,!m&&!p),p]}),key:f.link.replace(V,"")}})})}else{var le,de,se={},ye=S.children.reduce(function(f,b){var O,X,ae=f,N=b==null||(O=b.frontmatter)===null||O===void 0?void 0:O.type,_=typeof N=="string"?N:(X=N==null?void 0:N.title)!==null&&X!==void 0?X:"default";if(ae[_]||(ae[_]=[]),se[_])N!=null&&N.order&&(se[_].order=N.order);else{var J;se[_]={title:_,order:(J=N==null?void 0:N.order)!==null&&J!==void 0?J:-1}}return ae[_].push(b),ae},{}),be=Object.keys(ye).sort(function(f,b){return se[f].order-se[b].order}).reduce(function(f,b){var O=f;return O[b]=ye[b],O},{}),ce=[];ce.push.apply(ce,Q()((le=(de=be.default)===null||de===void 0?void 0:de.map(function(f){var b;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),C((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(V,"")}}))!==null&&le!==void 0?le:[]));for(var Se=0,je=Object.entries(be);Se<je.length;Se++){var ve=A()(je[Se],2),me=ve[0],ke=ve[1];me!=="default"&&ce.push({type:"group",label:me,key:me,children:ke==null?void 0:ke.map(function(f){var b;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),C((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(V,"")}})})}D.push({label:S==null?void 0:S.title,key:S==null?void 0:S.title,order:S==null?void 0:S.order,children:ce})}}else{var he=S.children||[];he.every(function(f){var b;return f==null||(b=f.frontmatter)===null||b===void 0?void 0:b.date})&&he.sort(function(f,b){var O,X;return(f==null||(O=f.frontmatter)===null||O===void 0?void 0:O.date)>(b==null||(X=b.frontmatter)===null||X===void 0?void 0:X.date)?-1:1}),D.push.apply(D,Q()(he.map(function(f){var b;return{order:f==null?void 0:f.order,label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),C((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(V,"")}})))}return D.sort(function(f,b){return(f==null?void 0:f.order)<(b==null?void 0:b.order)?-1:1}),D},[]))!==null&&Z!==void 0?Z:[]},[L,u,a,i,m,p,h]),I=(0,c.useMemo)(function(){var P;return a.replace(new RegExp("".concat((P=h==null?void 0:h.suffix)!==null&&P!==void 0?P:"","$"),"g"),"")},[h,a]),R=(0,c.useMemo)(function(){return ko(w||M,I)},[M,I,w]),z=R==null?void 0:R.slice(0,-1);return[w||M,I,z]},zt,Ut,Nt,Mo=(0,E.kc)(function(n,e){var t=n.token,o=n.css,a=n.prefixCls,i=e.isSideBarGroupMode;return{asideContainer:o(zt||(zt=j()([`
        min-height: 100%;
        padding-bottom: 48px;

        &.`,`-menu-inline {
          user-select: none;
          &.`,`-menu-root {
            border-inline-end: none;
          }
          .`,`-menu-submenu-title h4,
          > .`,"-menu-item, .",`-menu-item a {
            overflow: hidden;
            font-size: 14px;
            text-overflow: ellipsis;
          }

          & > .`,`-menu-item-group:not(:first-child) {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px dashed `,`;
          }

          .`,`-menu-item-group:first-of-type {
            .`,`-menu-item-group-title {
              margin-top: 0;
            }
          }
          .`,`-menu-item-selected {
            background-color: `,`;
          }
          .`,"-menu-sub.",`-menu-inline {
            background-color: unset;
          }
          .`,`-menu-item {
            height: 40px;
            line-height: 40px;
          }
          .`,"-menu-inline .",`-menu-item {
            height: 40px;
            line-height: 40px;
          }

          `,`
        }

        a[disabled] {
          color: `,`;
        }

        .chinese {
          margin-left: 6px;
          font-size: 12px;
          font-weight: normal;
          opacity: 0.67;
        }
      `])),a,a,a,a,a,a,t.colorBorder,a,a,a,t.colorFillSecondary,a,a,a,a,a,!i&&o(Ut||(Ut=j()([`
            > .`,`-menu-item,
              > .`,`-menu-submenu
              > .`,`-menu-submenu-title,
              > .`,`-menu-item-group
              > .`,`-menu-item-group-title,
              > .`,`-menu-item-group
              > .`,`-menu-item-group-list
              > .`,`-menu-item,
              &.`,`-menu-inline
              > .`,`-menu-item-group
              > .`,`-menu-item-group-list
              > .`,`-menu-item {
              padding-left: 40px !important;

              .`,`-row-rtl & {
                padding-right: 40px !important;
                padding-left: 16px !important;
              }
            }

            // Nest Category > Type > Article
            &.`,`-menu-inline {
              .`,`-menu-item-group-title {
                margin-left: 4px;
                padding-left: 60px;

                .`,`-row-rtl & {
                  padding-right: 60px;
                  padding-left: 16px;
                }
              }

              .`,"-menu-item-group-list > .",`-menu-item {
                padding-left: 80px !important;

                .`,`-row-rtl & {
                  padding-right: 80px !important;
                  padding-left: 16px !important;
                }
              }
            }
          `])),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),t.colorTextDisabled),mainMenu:o(Nt||(Nt=j()([`
        .main-menu-inner {
          scrollbar-color: unset;
          scrollbar-width: thin;

          position: sticky;
          top: `,`px;

          overflow: hidden;
          overflow-y: auto;

          width: 100%;
          height: 100%;
          max-height: calc(100vh - `,`px);
          padding-top: 16px;
        }

        /* &:hover .main-menu-inner {
        overflow-y: auto;
      } */
      `])),t.headerHeight,t.headerHeight)}}),Do=function(){var e=(0,g.useLocation)(),t=e.pathname,o=Et(),a=o.sidebarGroupModePath,i=(0,c.useMemo)(function(){return a===!0?!0:(a!=null?a:[]).some(function(L){return t.startsWith(L)})},[t,a]),l=Mo({isSideBarGroupMode:i}),u=l.styles,d=go.Z.useToken(),v=d.token,m=Co(),p=A()(m,3),x=p[0],k=p[1],h=p[2],F=(0,r.jsx)(xo.ZP,{theme:{components:{Menu:{itemBg:v.colorBgLayout,darkItemBg:v.colorBgLayout}}},children:(0,r.jsx)(yo.Z,{className:u.asideContainer,defaultOpenKeys:h,inlineIndent:30,items:x,mode:"inline",selectedKeys:[k]},h==null?void 0:h[0])});return(0,r.jsx)("div",{className:u.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:F})})},Lo=Do,To=s(61882),Wt=48,Io=(0,c.memo)(function(){var n=y(Ye,W()),e=(0,q.F)(),t=e.mobile,o=(0,E.Fg)(),a=(0,c.useState)(Wt),i=A()(a,2),l=i[0],u=i[1],d=(0,g.useLocation)();if((0,c.useEffect)(function(){var v=document.querySelector("#api-header");v&&u(v.clientHeight+Wt)},[d.pathname,d.hash,d.search,n]),!((n==null?void 0:n.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!t&&(0,r.jsx)("div",{style:{height:l}}),(0,r.jsx)(To.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:t,items:n,tocWidth:o.tocWidth})]})}),Bo=Io,wo=(0,c.memo)(function(){var n=(0,g.useIntl)(),e=(0,g.useLocation)(),t=e.hash,o=(0,E.Fg)(),a=(0,q.F)(),i=a.mobile,l=a.laptop,u=y(function(M){var I=M.location.pathname==="/changelog",R=Oe(M),z;return R||M.location.pathname==="/"?z="home":I?z="changelog":z="docs",{loading:M.siteData.loading,noToc:Ye(M).length===0,page:z,siteTitle:vn(M),themeConfig:M.siteData.themeConfig}},te.X),d=u.loading,v=u.page,m=u.siteTitle,p=u.noToc,x=u.themeConfig,k=y(function(M){return M.routeMeta.frontmatter},W()),h=y(or),F=v!=="docs"||i||k.sidebar===!1||(h==null?void 0:h.sider)===!1,L=k.toc===!1||p,H=i?L:!l||L,T=(0,c.useCallback)(function(){var M=(h==null?void 0:h.title)||k.title,I=(h==null?void 0:h.description)||k.description||x.description,R=(h==null?void 0:h.keywords)||k.keywords||x.keywords;return(0,r.jsxs)(g.Helmet,{children:[(0,r.jsx)("html",{lang:n.locale.replace(/-.+$/,"")}),M&&(0,r.jsx)("meta",{content:M,property:"og:title"}),I&&(0,r.jsx)("meta",{content:I,name:"description"}),I&&(0,r.jsx)("meta",{content:I,property:"og:description"}),R&&(0,r.jsx)("meta",{content:R.join(","),name:"keywords"}),R&&(0,r.jsx)("meta",{content:R.join(","),property:"og:keywords"}),!M||v==="home"?(0,r.jsx)("title",{children:m}):(0,r.jsxs)("title",{children:[M," - ",m]})]})},[h==null?void 0:h.description,h==null?void 0:h.keywords,h==null?void 0:h.title,k.description,k.keywords,k.title,n.locale,v,m,x.description,x.keywords]);(0,c.useEffect)(function(){var M=t.replace("#","");M&&setTimeout(function(){var I=document.querySelector("#".concat(decodeURIComponent(M)));I&&(I.scrollIntoView(),window.scrollBy({top:-80}))},1)},[d,t]),(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[m]);var w=(0,g.useOutlet)();return(h==null?void 0:h.header)===!1&&(h==null?void 0:h.sider)===!1&&(h==null?void 0:h.footer)===!1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),w]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),(0,r.jsxs)(Cn.ZP,{asideWidth:o.sidebarWidth,footer:(h==null?void 0:h.footer)!==!1&&(0,r.jsx)(yr,{}),header:(h==null?void 0:h.header)!==!1&&(0,r.jsx)(fo,{}),headerHeight:i&&v!=="home"?o.headerHeight+36:o.headerHeight,sidebar:F?void 0:(0,r.jsx)(Lo,{}),toc:H?void 0:(0,r.jsx)(Bo,{}),tocWidth:H?0:o.tocWidth,children:[h&&w,!h&&v==="home"&&(0,r.jsx)(dr,{}),!h&&v==="changelog"&&(0,r.jsx)(Un,{}),!h&&v==="docs"&&(0,r.jsx)(qn,{})]},F?"full":"no-sidebar")]})}),Po=wo,Fo=(0,c.memo)(function(){var n=(0,He.f)(function(t){return t.themeMode},te.X),e=y(Sn.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(sn,{}),(0,r.jsxs)(we.Z,{customToken:function(o){return Object.assign({},kn(o),e)},themeMode:n,children:[(0,r.jsx)(dn,{}),(0,r.jsx)(Po,{})]})]})}),Ho=Fo},37620:function($t,Me,s){s.d(Me,{f:function(){return te}});var we=s(32089),c=s(9676),te=(0,c.F)()((0,we.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
