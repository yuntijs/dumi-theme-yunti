"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{35453:function(An,Me,s){s.r(Me),s.d(Me,{default:function(){return jo}});var Pe=s(87956),c=s(92379),_=s(15354),Un=s(12027),X=s.n(Un),Nn=s(19317),De=s.n(Nn),Wn=s(29861),He=s.n(Wn),$n=s(91253),g=s(48073),Gn=s(95490),U=s.n(Gn),Ee=s(32089),Oe=s(9676),Vn=s(24325),F=s.n(Vn),Kn=s(34180),he=s.n(Kn),Yn=s(28633),z=s.n(Yn),Ae=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},Xn=function(e){for(var n={},o=function(){var u=z()(i[a],2),m=u[0],d=u[1],v=Object.keys(n);if(m.split("/").length===3){var p,f,T="/".concat(m.split("/")[1]),C=(p=d[0])===null||p===void 0||(p=p.children)===null||p===void 0?void 0:p.find(function(te){var I,H=(I=te.frontmatter)===null||I===void 0?void 0:I.nav;return he()(H)==="object"&&he()(H==null?void 0:H.second)==="object"});if(!C){var B;C=(B=d[0])===null||B===void 0?void 0:B.children[0]}var M=(f=C)===null||f===void 0||(f=f.frontmatter)===null||f===void 0?void 0:f.nav,D={order:0,title:void 0};if(typeof M!="string"){var L,P,R,E;D.order=(L=M==null||(P=M.second)===null||P===void 0?void 0:P.order)!==null&&L!==void 0?L:0,D.title=(R=M==null||(E=M.second)===null||E===void 0?void 0:E.title)!==null&&R!==void 0?R:M==null?void 0:M.second}if(v.includes(T)){var N;n[T].push({title:D.title,order:D.order,children:(N=d[0])===null||N===void 0?void 0:N.children})}else n[T]=d.map(function(te){return F()(F()({},te),{},{title:D.title,order:D.order})})}else v.includes(m)?n[m]=[].concat(X()(n[m]),X()(d)):n[m]=d},a=0,i=Object.entries(e);a<i.length;a++)o();return n},Fe=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},ee={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},Jn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,o=(0,g.useNavData)(),a=(0,g.useSidebarData)(),i=(0,g.useRouteMeta)(),l=(0,g.useTabMeta)(),u=(0,g.useLocation)(),m=(0,g.useLocale)(),d=(0,g.useIntl)(),v=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:d.formatMessage({id:"header.nav.home"})}},[d]),p=n.hideHomeNav?o:[v].concat(X()(o));return F()(F()({},ee),{},{locale:m||ee.locale,location:u||ee.location,navData:p||ee.navData,routeMeta:i||ee.routeMeta,sidebar:a||ee.sidebar,siteData:F()(F()({},ee.siteData),{},{themeConfig:n}),tabMeta:l||ee.tabMeta})},Qn=(0,Oe.F)()((0,Ee.mW)(function(){return ee},{name:"dumi-theme-yunti"})),b=Ae?Qn:function(t,e){var n=Jn(),o=(0,Oe.F)()((0,Ee.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(b,o),o(t,e)},qn=["setLoading"],_n=["setLoading"],Ue={},et=function(e,n){(0,c.useEffect)(function(){c.startTransition(function(){e()})},n)},nt=function(e,n){(0,$n.Z)(function(){e()},n,{maxWait:96,wait:32})},tt=typeof c.startTransition=="function"?et:nt,ie=function(e,n,o){var a=o||function(i,l){var u;return(u=b.setState)===null||u===void 0?void 0:u.call(b,He()({},i,l))};!Ae&&!Ue[e]&&(a(e,n),Ue[e]=!0),tt(function(){a(e,n)},[n])},rt=function(){var e=(0,g.useSiteData)(),n=(0,g.useSidebarData)(),o=(0,g.useRouteMeta)(),a=(0,g.useTabMeta)(),i=(0,g.useNavData)(),l=(0,g.useLocation)(),u=(0,g.useLocale)(),m=(0,g.useIntl)(),d=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:m.formatMessage({id:"header.nav.home"})}},[m]);return ie("siteData",e,function(){var v,p,f=e.setLoading,T=De()(e,qn),C=((v=b.getState)===null||v===void 0?void 0:v.call(b))||{siteData:{}},B=C.siteData,M=B.setLoading,D=De()(B,_n);U()(T,D)||(p=b.setState)===null||p===void 0||p.call(b,{siteData:e})}),ie("sidebar",n),ie("routeMeta",o),ie("location",l),ie("tabMeta",a),ie("locale",u),ie("navData",i,function(){var v,p=e.themeConfig.hideHomeNav?i:[d].concat(X()(i));(v=b.setState)===null||v===void 0||v.call(b,{navData:p})}),!1},ot=s(29148),S=s.n(ot),Z=s(66933),Ne,at=(0,Z.vJ)(Ne||(Ne=S()([`
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
`])),function(t){var e=t.theme;return e.colorText}),it=at,we=s(37620),We=function(e){return e.siteData.themeConfig},lt=function(e){return e.siteData.themeConfig.title},Le=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},st=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},ct=function(e){return e.siteData.themeConfig.giscus},$e=function(e){return e===!1?!1:typeof e=="string"},ut=function(e){var n,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var a=["/api","/components"].concat(X()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return a.some(function(i){return e.location.pathname.startsWith(i)})},Ge=function(e){var n,o,a,i,l=Le(e),u=e.routeMeta.frontmatter,m=e.locale.id,d=function(te){return te.replace("{github}",l).replace("{atomId}",u.atomId||"").replace("{title}",u.title).replace("{locale}",m)},v=e.siteData.themeConfig.apiHeader||{},p=v.type,f=p===void 0?"component":p,T=v.pkg,C=T===void 0?e.siteData.pkg.name:T,B=v.sourceUrl,M=v.docUrl,D=((n=u.apiHeader)===null||n===void 0?void 0:n.pkg)||C,L=u.atomId||u.title,P=((o=u.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,R=((a=u.apiHeader)===null||a===void 0?void 0:a.sourceUrl)||($e(B)?d(B):void 0),E=((i=u.apiHeader)===null||i===void 0?void 0:i.docUrl)||($e(M)?d(M):void 0);return{componentName:L,defaultImport:P,description:u.description,docUrl:E,pkg:D,sourceUrl:R,title:u.title,type:f}},dt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ve=function(e){var n,o,a=e.routeMeta,i=a.toc,l=a.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(i=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(l=e.tabMeta.frontmatter);var u=function(d){if(!l.tocDepth||typeof l.tocDepth=="number"&&l.tocDepth>d-1)return!0};return i.reduce(function(m,d){if(d.depth===2&&u(2))m.push(F()({},d));else if(d.depth===3&&u(3)){var v=m.at(-1);v&&(v.children=v.children||[],v.children.push(F()({},d)))}return m},[])},Ke=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(o){return o.children}).flat())||[]},vt=function(e){var n=Ke(e),o=e.location.pathname,a=n.findIndex(function(i){return i.link===o});return{currentIndex:a,next:n[a+1],prev:n[a-1]}},mt=s(92010),pt=function(e){var n=e.routeMeta.frontmatter;return(0,mt.Z)({},n.token,e.siteData.themeConfig.siteToken)},ht={apiHeader:Ge,flattenSidebar:Ke,token:pt},ft=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},gt=ft,xt=s(827),J=s(29191),Te=s(20113),ne=s(70957),yt=s(62090),bt=s(94174),St=s(44550),Ie=s(24899),Re=s(31180),Ze=s(42018),jt=s(92496),$=s(12274),Ye,Xe,Je,Qe,qe,kt=(0,Z.kc)(function(t){var e=t.css,n=t.token,o=t.responsive,a=t.stylish;return{desc:e(Ye||(Ye=S()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),n.fontSizeLG,n.lineHeightLG),label:e(Xe||(Xe=S()([`
    width: 80px;
  `]))),meta:e(Je||(Je=S()([""]))),text:e(Qe||(Qe=S()([`
    `,`
  `])),a.resetLinkColor),title:e(qe||(qe=S()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=s(651),_e=(0,c.memo)(function(t){var e=t.title,n=t.type,o=t.componentName,a=t.description,i=t.defaultImport,l=t.pkg,u=t.sourceUrl,m=t.docUrl,d=t.serviceList,v=d===void 0?[]:d,p=kt(),f=p.styles,T=(0,J.F)(),C=T.mobile,B=n==="doc",M=[u&&{children:"Source",icon:(0,r.jsx)(ne.Z,{icon:Ze.Z}),url:u},m&&{children:"Edit",icon:(0,r.jsx)(ne.Z,{icon:jt.Z}),url:m}].filter(Boolean),D=i?"import ".concat(o," from '").concat(l,"';"):"import { ".concat(o," } from '").concat(l,"';");return(0,r.jsxs)($.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(St.Z.Title,{className:f.title,children:e}),a&&(0,r.jsx)(yt.Z,{className:f.desc,children:a}),!B&&(0,r.jsxs)($.D,{gap:C?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(bt.Z,{spotlight:!0,children:D})}),(0,r.jsx)(Ie.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)($.D,{distribution:"space-between",gap:C?24:0,horizontal:!C,children:[(0,r.jsx)(Re.Z,{split:(0,r.jsx)(Ie.Z,{type:"vertical"}),wrap:!0,children:v.map(function(L){return(0,r.jsx)("a",{href:L.url,rel:"noreferrer",target:"_blank",title:L.label,children:(0,r.jsxs)($.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[L.icon,L.children]})},L.label)})}),(0,r.jsx)(Re.Z,{className:f.meta,split:(0,r.jsx)(Ie.Z,{type:"vertical"}),children:M.map(function(L,P){return(0,r.jsx)("a",{href:L.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)($.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[L.icon,L.children]})},P)})})]})]})]})}),en,nn,tn,rn=(0,Z.kc)(function(t){var e=t.cx,n=t.css,o=t.token,a=t.stylish;return{background:e(a.gradientAnimation,n(en||(en=S()([`
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
    `])))),changelog:n(nn||(nn=S()([`
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
  `])),o.colorTextDescription,o.colorBorderSecondary),content:n(tn||(tn=S()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Ct=s(48037),Mt=s(83994),Dt=s(25220),on,an,ln,sn,Lt=(0,Z.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(on||(on=S()([`
    justify-content: flex-end;
  `]))),container:n(an||(an=S()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:n(ln||(ln=S()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:n(sn||(sn=S()([`
    font-size: 16px;
  `])))}}),Tt=(0,c.memo)(function(t){var e=t.title,n=t.link,o=t.type,a=Lt(),i=a.styles,l=a.cx,u=(0,g.useIntl)(),m=(0,c.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ne.Z,{icon:Mt.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(ne.Z,{icon:Dt.Z})]})}},[u,o]);return(0,r.jsx)(g.Link,{to:n,children:(0,r.jsxs)($.D,{className:i.container,gap:8,children:[(0,r.jsx)($.D,{className:l(i.nav,o==="next"&&i.alignmentEnd),gap:4,horizontal:!0,children:m}),(0,r.jsx)($.D,{className:l(i.title,o==="next"&&i.alignmentEnd),horizontal:!0,children:e})]})})}),cn=Tt,It=(0,c.memo)(function(){var t=b(vt,U()),e=t.prev,n=t.next,o=(0,J.F)(),a=o.mobile;return(0,r.jsxs)($.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[e?(0,r.jsx)(cn,F()({type:"prev"},e)):(0,r.jsx)("div",{}),n?(0,r.jsx)(cn,F()({type:"next"},n)):(0,r.jsx)("div",{})]})}),Bt=It,un,dn,Pt=(0,Z.kc)(function(t,e){var n=t.cx,o=t.token,a=t.responsive,i=t.css;return{content:n(!e&&i(un||(un=S()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,a.mobile),i(dn||(dn=S()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Ht=["children"],Ft=(0,c.memo)(function(t){var e=t.children,n=De()(t,Ht),o=b(function(p){return p.siteData.loading}),a=b(We,U()),i=a.docStyle,l=Pt(i==="pure"),u=l.styles,m=l.cx,d=(0,J.F)(),v=d.mobile;return(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)($.D,F()(F()({gap:v?0:24,width:"100%"},n),{},{children:[(0,r.jsx)("div",{className:m("dumi-antd-style-content",u.content),children:(0,r.jsx)(Ct.Z,{children:e})}),(0,r.jsx)(Bt,{})]}))}),vn=Ft,wt=(0,c.memo)(function(){var t=(0,g.useOutlet)(),e=(0,J.F)(),n=e.mobile,o=b(function(d){return{repoBase:Le(d)}},_.X),a=o.repoBase,i=b(function(d){return{fm:d.routeMeta.frontmatter}},U()),l=i.fm,u=rn(),m=u.styles;return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:m.background}),(0,r.jsxs)(Te.Z,{className:m.content,style:{padding:n?0:24},children:[(0,r.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,r.jsx)(_e,{description:l.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:l.title})}),(0,r.jsx)(vn,{className:m.changelog,children:t})]})]})}),Rt=wt,Zt=s(13876),zt=s(22148),Et=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Ot=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),At=(0,c.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Ut=(0,c.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Nt=(0,c.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Wt=(0,c.memo)(function(){var t=b(Ge,U()),e=t.pkg,n=(0,c.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(At,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)(Nt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)(Et,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Ut,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(Ot,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(_e,F()({serviceList:n},t))}),$t=Wt,Gt=(0,c.memo)(function(){var t=(0,g.useOutlet)(),e=(0,g.useLocation)(),n=(0,J.F)(),o=n.mobile,a=b(function(v){return{giscus:ct(v),isApiPage:ut(v)}},_.X),i=a.isApiPage,l=a.giscus,u=rn(),m=u.styles;(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var d=(0,c.useCallback)(function(){return l&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(zt.Z,{category:l.category,categoryId:l.categoryId,id:"lobehub",mapping:"title",repo:l.repo,repoId:l.repoId})})},[l,e.pathname]);return(0,r.jsxs)(Zt.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:m.background}),(0,r.jsxs)(Te.Z,{className:m.content,style:{marginBottom:48,padding:o?0:24},children:[i?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)($t,{})}):void 0,(0,r.jsxs)(vn,{children:[t,l&&(0,r.jsx)(d,{})]})]})]})}),Vt=Gt,Kt=s(57030),mn=function(e){return!!e.routeMeta.frontmatter.hero},oe=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},Yt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||oe(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},Xt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||oe(e,e.siteData.themeConfig.description)},Jt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||oe(e,e.siteData.themeConfig.actions)},Qt=function(e){var n;return mn(e)?((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||oe(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},qt=(0,c.memo)(function(){var t=b(Qt,U()),e=(0,Z.Fg)();if(t!=null&&t.length)return(0,r.jsx)(Kt.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),_t=qt,er=s(72819),nr=(0,c.memo)(function(){var t=b(Yt),e=b(Xt),n=b(Jt);return(0,r.jsx)(er.Z,{actions:n,description:e,title:t})}),tr=nr,rr=(0,c.memo)(function(){var t=(0,g.useOutlet)();return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)($.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(tr,{}),(0,r.jsx)(_t,{}),t]})}),or=rr,ar=s(41850),ir=s(2957),lr=s(35723),sr=s(59325),cr=function(e){var n=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},a={items:[n&&{icon:(0,r.jsx)(ne.Z,{icon:ir.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,r.jsx)(ne.Z,{icon:lr.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},i={items:[n&&{icon:(0,r.jsx)(ne.Z,{icon:Ze.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:g.Link,icon:(0,r.jsx)(ne.Z,{icon:sr.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},l={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,a,i,l]},pn,hn,ur=(0,Z.kc)(function(t){var e=t.css,n=t.responsive,o=t.token,a="rc-footer";return{container:e(pn||(pn=S()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,n.mobile),footer:e(hn||(hn=S()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,a,o.colorTextTertiary,o.colorLinkHover,a,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,a)}}),dr=(0,c.memo)(function(){var t=b(function(T){return T.siteData},U()),e=t.themeConfig,n=t.pkg,o=e.footerConfig,a=e.footer,i=b(Le,_.X),l=ur(),u=l.styles,m=l.theme,d=(0,J.F)(),v=d.mobile;if(a){var p=o!=null&&o.columns?o==null?void 0:o.columns:cr({github:i||n.homepage});o!=null&&o.resources&&(p[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(p[3]=o==null?void 0:o.moreProducts);var f=(o==null?void 0:o.bottom)||a;return(0,r.jsx)(ar.Z,{bottom:v?(0,r.jsxs)(Te.Z,{className:u.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)($.D,{align:"center",dangerouslySetInnerHTML:{__html:f},horizontal:!0})]}):(0,r.jsxs)(Te.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ie.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:f}})]}),columns:p,contentMaxWidth:m.contentMaxWidth,theme:m.appearance})}}),vr=dr,mr=s(4413),pr=s(61672),fn,hr=(0,Z.kc)(function(t){var e=t.css,n=t.responsive,o=t.token;return e(fn||(fn=S()([`
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
  `])),o.colorText,n.mobile)}),fr=(0,c.memo)(function(){var t=b(We,U()),e=b(function(u){return u.locale},U()),n=hr(),o=n.styles,a=n.cx,i=(0,J.F)(),l=i.mobile;return t&&(0,r.jsx)(g.Link,{className:a(o),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Re.Z,{children:[(0,r.jsx)(pr.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:l?32:36}),t.name]})})}),gr=fr,xr=s(69916),yr=s(80326),br=s(31125),gn,xn,Sr=(0,Z.kc)(function(t){var e=t.css,n=t.stylish,o=t.token,a=t.responsive,i=t.prefixCls;return{link:e(gn||(gn=S()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(xn||(xn=S()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),i,o.colorText,a.mobile)}}),yn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},jr=(0,c.memo)(function(){var t=Sr(),e=t.styles,n=(0,g.useLocation)(),o=n.pathname,a=b(function(l){return l.navData},_.X),i=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xr.Z,{activeKey:i,className:e.tabs,items:a.map(function(l){var u=l.activePath||yn(l.link);return{key:Fe(l.link)?l.link:u,label:Fe(l.link)?(0,r.jsxs)("a",{className:e.link,href:String(l.link),onClick:function(d){return d.preventDefault()},rel:"noreferrer",target:"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:l.title})," ",(0,r.jsx)(ne.Z,{icon:br.Z})]}):(0,r.jsx)(g.Link,{className:e.link,onClick:function(d){return d.preventDefault()},to:String(l.link),children:l.title})}}),onTabClick:function(u){var m,d=(m=a.find(function(v){return v.activePath===u||v.link===u||yn(v.link)===u}))===null||m===void 0?void 0:m.link;if(d){if(Fe(d))return window.open(d);g.history.push(d)}}}),(0,r.jsx)(yr.Z,{})]})}),kr=jr,Cr=s(19210),Mr=s(57912),bn,Sn,jn,kn,Cn,Dr=(0,Z.kc)(function(t){var e=t.token,n=t.responsive,o=t.css,a=t.cx;return{container:o(bn||(bn=S()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:o(Sn||(Sn=S()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(jn||(jn=S()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:a("site-header-shortcut",o(kn||(kn=S()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:a(o(Cn||(Cn=S()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Lr=(0,c.memo)(function(){var t=Dr(),e=t.styles,n=(0,c.useState)(!1),o=z()(n,2),a=o[0],i=o[1],l=(0,g.useSiteSearch)(),u=l.keywords,m=l.setKeywords,d=l.result,v=l.loading,p=(0,g.useIntl)();return(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsx)(Cr.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(T){return m(T.target.value)},onFocus:function(){return i(!0)},placeholder:p.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),u.trim()&&a&&(d.length>0||!v)&&(0,r.jsx)("div",{className:e.popover,children:(0,r.jsx)(Mr.Z,{data:d,loading:v})})]})}),Tr=Lr,Ir=s(93974),Br=s(74604),Pr=(0,c.memo)(function(){var t=(0,c.useState)(!1),e=z()(t,2),n=e[0],o=e[1],a=b(function(v){return v.navData},U()),i=b(function(v){return v.sidebar},U()),l=b(function(v){return{activePath:dt(v),pathname:v.location.pathname}},_.X),u=l.pathname,m=l.activePath,d=(0,c.useMemo)(function(){var v=i==null?void 0:i.map(function(p){return!p.link&&{children:p.children.map(function(f){return{key:"s-".concat(f.link),label:(0,r.jsx)(g.Link,{onClick:function(){o(!1)},to:f.link,children:f.title})}}),label:p.title,type:"group"}});return a.map(function(p){return{children:(p.activePath||p.link)===m&&v,key:p.activePath||p.link,label:(0,r.jsx)(g.Link,{to:String(p.link),children:p.title})}})},[a,m,i]);return(0,r.jsx)(Ir.Z,{items:d,openKeys:[m],opened:n,selectedKeys:(0,Br.Z)([m,"s-".concat(u)]),setOpened:o})}),Hr=Pr,Mn=s(86982),Fr=s(93910),Dn,wr=(0,Fr.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Rr=(0,Z.kc)(function(t){var e=t.css;return e(Dn||(Dn=S()([`
    svg {
      overflow: visible !important;
    }
  `])))}),Zr=(0,c.memo)(function(){var t=b(st),e=Rr(),n=e.styles;return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mn.Z,{className:n,icon:wr,size:"site"})}):void 0}),zr=Zr,Er=(0,c.memo)(function(){var t=b(Le);return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mn.Z,{icon:Ze.Z,size:"site"})}):void 0}),Or=Er,Ar=s(88016),G=s(11348),ge=s(45623),Ur=s(51683),Nr=s(86473),Ln,Tn,In,Wr=(0,Z.kc)(function(t,e){var n=t.css,o=t.cx,a=t.token;return{active:o("".concat(e,"-item-active"),n(Ln||(Ln=S()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:o("".concat(e,"-item"),n(Tn||(Tn=S()([`
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
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),n(In||(In=S()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),$r=["value","label","prefixCls","isSelected","isActive","disabled"],Gr=(0,c.forwardRef)(function(t,e){var n=t.value,o=t.label,a=t.prefixCls,i=t.isSelected,l=t.isActive,u=t.disabled,m=De()(t,$r),d=Wr(a),v=d.styles,p=d.cx;return(0,r.jsx)("button",F()(F()({"aria-selected":i,className:p(v.item,He()(He()({},v.selected,i),v.active,l)),disabled:u,ref:e,role:"option",tabIndex:-1,type:"button"},m),{},{children:o}),n)}),Vr=Gr,Bn,Pn,Kr=(0,Z.kc)(function(t,e){var n=t.css,o=t.stylish,a=t.cx,i=t.token;return{button:a("".concat(e,"-button"),n(Bn||(Bn=S()([`
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
    `])),o.buttonDefaultHover,i.fontSize,i.colorTextSecondary,i.colorBgContainer,i.colorBorder,i.borderRadius,i.colorPrimary,i.colorPrimaryBg)),container:a(e,n(Pn||(Pn=S()([`
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
    `])),i.fontSize,i.colorBgElevated,i.colorBorder,i.boxShadowSecondary))}}),Yr=(0,c.memo)(function(t){var e=t.options,n=e===void 0?[]:e,o=t.value,a=t.prefixCls,i=t.onChange,l=t.renderValue,u=t.renderItem,m=t.style,d=a!=null?a:"native-select",v=(0,Nr.Z)(0,{onChange:i,value:o}),p=z()(v,2),f=p[0],T=p[1],C=Kr(d),B=C.styles,M=(0,c.useRef)([]),D=(0,c.useRef)([]),L=(0,c.useRef)(null),P=(0,c.useRef)(!1),R=(0,c.useRef)(!0),E=(0,c.useRef)(),N=(0,c.useRef)(null),te=(0,c.useState)(!1),I=z()(te,2),H=I[0],V=I[1],O=(0,c.useState)(null),j=z()(O,2),k=j[0],y=j[1],xe=(0,c.useState)(!1),ue=z()(xe,2),le=ue[0],de=ue[1],se=(0,c.useState)(0),ye=z()(se,2),be=ye[0],ce=ye[1],Se=(0,c.useState)(!1),je=z()(Se,2),ve=je[0],me=je[1],ke=(0,c.useState)(!1),pe=z()(ke,2),h=pe[0],x=pe[1];H||(be!==0&&ce(0),le&&de(!1),h&&x(!1));var w=(0,G.YF)({middleware:le?[(0,ge.cv)(5),ve?(0,ge.uY)({crossAxis:!0,padding:10}):(0,ge.RR)({padding:10}),(0,ge.dp)({apply:function(W){var q,Ce,To=W.availableHeight;Object.assign((q=(Ce=N.current)===null||Ce===void 0?void 0:Ce.style)!==null&&q!==void 0?q:{},{maxHeight:"".concat(To,"px")})},padding:10})]:[(0,G.aN)({index:f,listRef:M,minItemsVisible:ve?8:4,offset:be,onFallbackChange:de,overflowRef:L,padding:10,referenceOverflowThreshold:20,scrollRef:N}),(0,ge.cv)({crossAxis:-4})],onOpenChange:V,open:H,placement:"bottom-start",whileElementsMounted:Ur.Me}),K=w.x,ae=w.y,A=w.strategy,Q=w.refs,Y=w.context,ze=(0,G.NI)([(0,G.eS)(Y,{event:"mousedown"}),(0,G.bQ)(Y),(0,G.qs)(Y,{role:"listbox"}),(0,G.Rz)(Y,{enabled:!le,onChange:ce,overflowRef:L,scrollRef:N}),(0,G.c0)(Y,{activeIndex:k,listRef:M,onNavigate:y,selectedIndex:f}),(0,G.ox)(Y,{activeIndex:k,listRef:D,onMatch:H?y:T})]),ko=ze.getReferenceProps,Co=ze.getFloatingProps,Mo=ze.getItemProps;(0,c.useEffect)(function(){if(H)return E.current=setTimeout(function(){P.current=!0},300),function(){clearTimeout(E.current)};P.current=!1,R.current=!0},[H]);var Do=n[f]||{},Lo=Do.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",F()(F()({"aria-label":"selected-item",className:B.button,ref:Q.setReference,style:m,type:"button"},ko({onPointerMove:function(W){var q=W.pointerType;q==="mouse"&&me(!1)},onTouchStart:function(){me(!0)}})),{},{children:l?l(f):Lo})),(0,r.jsx)(G.ll,{children:H&&(0,r.jsx)(G.y0,{lockScroll:!ve,style:{zIndex:3e3},children:(0,r.jsx)(G.wD,{context:Y,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:Q.setFloating,style:{left:K!=null?K:0,position:A,top:ae!=null?ae:0},children:(0,r.jsx)("div",F()(F()({className:B.container,ref:N,style:{overflowY:"auto"}},Co({onContextMenu:function(W){W.preventDefault()}})),{},{children:n.map(function(re,W){return(0,r.jsx)(Vr,F()({disabled:h,isActive:W===k,isSelected:W===f,label:u?u(re,W):re.label,prefixCls:d,ref:function(Ce){M.current[W]=Ce,D.current[W]=re.label},value:re.value},Mo({onClick:function(){P.current&&(T(W),V(!1))},onKeyDown:function(){P.current=!0},onMouseUp:function(){R.current&&(P.current&&(T(W),V(!1)),clearTimeout(E.current),E.current=setTimeout(function(){P.current=!0}))},onTouchStart:function(){P.current=!0,R.current=!1}})),re.value)})}))})})})})]})}),Xr=Yr;function Be(t){var e=t.pathname,n=t.current,o=t.target,a="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(o.suffix)}var Jr={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Hn={"en-US":"EN","zh-CN":"\u4E2D"},Qr=(0,c.memo)(function(t){var e=t.locale,n=t.current,o=(0,g.useLocation)(),a=o.pathname,i=(0,c.useState)(function(){return Be({current:n,pathname:a,target:e})}),l=z()(i,2),u=l[0],m=l[1];return(0,c.useEffect)(function(){m(Be({current:n,pathname:a,target:e}))},[n,e,a]),(0,r.jsx)(g.Link,{to:u,children:(0,r.jsx)(Ar.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Hn[e.id]})})}),qr=(0,c.memo)(function(){var t=b(function(n){return n.siteData.locales}),e=b(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,r.jsx)(Xr,{onChange:function(o){console.log(Be({current:e,pathname:location.pathname,target:t[o]})),g.history.push(Be({current:e,pathname:location.pathname,target:t[o]}))},options:t.map(function(n){return{label:Hn[n.id],value:n.id}}),renderItem:function(o,a){return"".concat(Jr[t[a].id]," ").concat(t[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,r.jsx)(Qr,{current:e,locale:t.find(function(n){var o=n.id;return o!==e.id})})}),_r=qr,eo=s(77388),no=(0,c.memo)(function(){var t=(0,we.f)(function(n){return n.themeMode}),e=(0,g.usePrefersColor)()[2];return(0,c.useEffect)(function(){return e(t)},[e,t]),(0,r.jsx)(eo.Z,{onThemeSwitch:function(o){we.f.setState({themeMode:o})},themeMode:t})}),Fn=no,to=(0,c.memo)(function(){var t=b(function(o){return!!o.routeMeta.frontmatter}),e=(0,J.F)(),n=e.mobile;if(t)return(0,r.jsx)(mr.Z,{actions:n?(0,r.jsx)(Fn,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Tr,{})," ",(0,r.jsx)(_r,{}),(0,r.jsx)(Or,{}),(0,r.jsx)(zr,{}),(0,r.jsx)(Fn,{})]}),logo:(0,r.jsx)(gr,{}),nav:n?(0,r.jsx)(Hr,{}):(0,r.jsx)(kr,{})})}),ro=to,oo=s(87157),ao=s(36177),io=s(41378),wn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,o=n;return o},lo=s(14582),Rn=s.n(lo),so=s(70761),co={i8:"1.1.8"},uo=function t(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=Rn()(e),i;try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.key===n)return[].concat(X()(o),[l.key]);if(l.children&&l.children.length>0){var u=t(l.children,n,[].concat(X()(o),[l.key]));if(u)return u}}}catch(m){a.e(m)}finally{a.f()}return null},vo=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,g.useLocation)(),a=o.pathname,i=o.search,l=wn(),u=l.sidebarGroupModePath,m=l.sidebarEnhance,d=m===void 0?{}:m,v=n.before,p=n.after,f=(0,g.useFullSidebarData)(),T=Xn(f),C=(0,g.useLocale)(),B="/".concat((e=a.split("/"))===null||e===void 0?void 0:e[1]),M=T[B],D=(0,c.useMemo)(function(){return Object.values(f).reduce(function(I,H){var V=H.flatMap(function(y){return y.children}),O=Rn()(V),j;try{for(O.s();!(j=O.n()).done;){var k=j.value;I[k.link]=k.title}}catch(y){O.e(y)}finally{O.f()}return I},{})},[f]),L=(0,c.useMemo)(function(){var I=Object.keys(d).find(function(H){return a.startsWith(H)});if(I)return d[I]},[a,d]),P=(0,c.useMemo)(function(){var I=function(k){return k&&he()(k)==="object"&&"link"in k&&"title"in k},H=function(k){return k&&he()(k)==="object"&&k.type==="group"},V=function(k){return k&&he()(k)==="object"&&"children"in k};function O(j){return typeof j=="string"?{key:j,label:(0,r.jsxs)(g.Link,{to:"".concat(j).concat(i),children:[v,D[j],p]})}:H(j)?{type:"group",label:j.title,key:j.title,children:j.children.map(function(k){return O(k)})}:V(j)?{key:j.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:j.title}),children:j.children.map(function(k){return O(k)})}:I(j)?{label:(0,r.jsx)(g.Link,{target:j.target,to:j.link,children:j.title}),key:j.link}:null}if(L)return L.map(function(j){return O(j)})},[p,v,L,D,i]),R=(0,c.useMemo)(function(){var I,H,V=new RegExp("".concat((I=C==null?void 0:C.suffix)!==null&&I!==void 0?I:"","$"),"g"),O=X()(M!=null?M:[]),j=function(y){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return y&&xe&&(0,r.jsx)(so.Z,{bordered:!1,color:typeof y=="string"?"processing":y.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof y=="string"?y:y.title).replace("VERSION","v".concat(co.i8))})};return(H=O==null?void 0:O.reduce(function(k,y){if(y!=null&&y.title){var xe=u===!0?!0:(u!=null?u:[]).some(function(h){return a.startsWith(h)});if(xe){var ue;k.push({type:"group",label:y==null?void 0:y.title,order:y==null?void 0:y.order,key:y==null?void 0:y.title,children:(ue=y.children)===null||ue===void 0?void 0:ue.map(function(h){var x,w;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,(0,r.jsx)("span",{children:fe(h==null?void 0:h.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:fe((x=h.frontmatter)===null||x===void 0?void 0:x.subtitle)},"chinese"),j((w=h.frontmatter)===null||w===void 0?void 0:w.tag,!v&&!p),p]}),key:h.link.replace(V,"")}})})}else{var le,de,se={},ye=y.children.reduce(function(h,x){var w,K,ae=h,A=x==null||(w=x.frontmatter)===null||w===void 0?void 0:w.type,Q=typeof A=="string"?A:(K=A==null?void 0:A.title)!==null&&K!==void 0?K:"default";if(ae[Q]||(ae[Q]=[]),se[Q])A!=null&&A.order&&(se[Q].order=A.order);else{var Y;se[Q]={title:Q,order:(Y=A==null?void 0:A.order)!==null&&Y!==void 0?Y:-1}}return ae[Q].push(x),ae},{}),be=Object.keys(ye).sort(function(h,x){return se[h].order-se[x].order}).reduce(function(h,x){var w=h;return w[x]=ye[x],w},{}),ce=[];ce.push.apply(ce,X()((le=(de=be.default)===null||de===void 0?void 0:de.map(function(h){var x;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,fe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(V,"")}}))!==null&&le!==void 0?le:[]));for(var Se=0,je=Object.entries(be);Se<je.length;Se++){var ve=z()(je[Se],2),me=ve[0],ke=ve[1];me!=="default"&&ce.push({type:"group",label:me,key:me,children:ke==null?void 0:ke.map(function(h){var x;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,fe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(V,"")}})})}k.push({label:y==null?void 0:y.title,key:y==null?void 0:y.title,order:y==null?void 0:y.order,children:ce})}}else{var pe=y.children||[];pe.every(function(h){var x;return h==null||(x=h.frontmatter)===null||x===void 0?void 0:x.date})&&pe.sort(function(h,x){var w,K;return(h==null||(w=h.frontmatter)===null||w===void 0?void 0:w.date)>(x==null||(K=x.frontmatter)===null||K===void 0?void 0:K.date)?-1:1}),k.push.apply(k,X()(pe.map(function(h){var x;return{order:h==null?void 0:h.order,label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,fe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(V,"")}})))}return k.sort(function(h,x){return(h==null?void 0:h.order)<(x==null?void 0:x.order)?-1:1}),k},[]))!==null&&H!==void 0?H:[]},[M,u,a,i,v,p,C]),E=(0,c.useMemo)(function(){var I;return a.replace(new RegExp("".concat((I=C==null?void 0:C.suffix)!==null&&I!==void 0?I:"","$"),"g"),"")},[C,a]),N=(0,c.useMemo)(function(){return uo(P||R,E)},[R,E,P]),te=N==null?void 0:N.slice(0,-1);return[P||R,E,te]},Zn,zn,En,mo=(0,Z.kc)(function(t,e){var n=t.token,o=t.css,a=t.prefixCls,i=e.isSideBarGroupMode;return{asideContainer:o(Zn||(Zn=S()([`
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
      `])),a,a,a,a,a,a,n.colorBorder,a,a,a,n.colorFillSecondary,a,a,a,a,a,!i&&o(zn||(zn=S()([`
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
          `])),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),n.colorTextDisabled),mainMenu:o(En||(En=S()([`
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
      `])),n.headerHeight,n.headerHeight)}}),po=function(){var e=(0,g.useLocation)(),n=e.pathname,o=wn(),a=o.sidebarGroupModePath,i=(0,c.useMemo)(function(){return a===!0?!0:(a!=null?a:[]).some(function(M){return n.startsWith(M)})},[n,a]),l=mo({isSideBarGroupMode:i}),u=l.styles,m=oo.Z.useToken(),d=m.token,v=vo(),p=z()(v,3),f=p[0],T=p[1],C=p[2],B=(0,r.jsx)(ao.ZP,{theme:{components:{Menu:{itemBg:d.colorBgLayout,darkItemBg:d.colorBgLayout}}},children:(0,r.jsx)(io.Z,{className:u.asideContainer,defaultOpenKeys:C,inlineIndent:30,items:f,mode:"inline",selectedKeys:[T]},C==null?void 0:C[0])});return(0,r.jsx)("div",{className:u.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:B})})},ho=po,fo=s(61882),On=48,go=(0,c.memo)(function(){var t=b(Ve,U()),e=(0,J.F)(),n=e.mobile,o=(0,Z.Fg)(),a=(0,c.useState)(On),i=z()(a,2),l=i[0],u=i[1],m=(0,g.useLocation)();if((0,c.useEffect)(function(){var d=document.querySelector("#api-header");d&&u(d.clientHeight+On)},[m.pathname,m.hash,m.search,t]),!((t==null?void 0:t.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("div",{style:{height:l}}),(0,r.jsx)(fo.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:n,items:t,tocWidth:o.tocWidth})]})}),xo=go,yo=(0,c.memo)(function(){var t=(0,g.useIntl)(),e=(0,g.useLocation)(),n=e.hash,o=(0,Z.Fg)(),a=(0,J.F)(),i=a.mobile,l=a.laptop,u=b(function(D){var L=D.location.pathname==="/changelog",P=mn(D),R;return P?R="home":L?R="changelog":R="docs",{loading:D.siteData.loading,noToc:Ve(D).length===0,page:R,siteTitle:lt(D)}},_.X),m=u.loading,d=u.page,v=u.siteTitle,p=u.noToc,f=b(function(D){return D.routeMeta.frontmatter},U()),T=d!=="docs"||i||f.sidebar===!1,C=f.toc===!1||p,B=i?C:!l||C,M=(0,c.useCallback)(function(){return(0,r.jsxs)(g.Helmet,{children:[(0,r.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),f.title&&(0,r.jsx)("meta",{content:f.title,property:"og:title"}),f.description&&(0,r.jsx)("meta",{content:f.description,name:"description"}),f.description&&(0,r.jsx)("meta",{content:f.description,property:"og:description"}),f.keywords&&(0,r.jsx)("meta",{content:f.keywords.join(","),name:"keywords"}),f.keywords&&(0,r.jsx)("meta",{content:f.keywords.join(","),property:"og:keywords"}),!f.title||d==="home"?(0,r.jsx)("title",{children:v}):(0,r.jsxs)("title",{children:[f.title," - ",v]})]})},[t,f,v,d]);return(0,c.useEffect)(function(){var D=n.replace("#","");D&&setTimeout(function(){var L=document.querySelector("#".concat(decodeURIComponent(D)));L&&(L.scrollIntoView(),window.scrollBy({top:-80}))},1)},[m,n]),(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[v]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsxs)(xt.ZP,{asideWidth:o.sidebarWidth,footer:(0,r.jsx)(vr,{}),header:(0,r.jsx)(ro,{}),headerHeight:i&&d!=="home"?o.headerHeight+36:o.headerHeight,sidebar:T?void 0:(0,r.jsx)(ho,{}),toc:B?void 0:(0,r.jsx)(xo,{}),tocWidth:B?0:o.tocWidth,children:[d==="home"&&(0,r.jsx)(or,{}),d==="changelog"&&(0,r.jsx)(Rt,{}),d==="docs"&&(0,r.jsx)(Vt,{})]},T?"full":"no-sidebar")]})}),bo=yo,So=(0,c.memo)(function(){var t=(0,we.f)(function(n){return n.themeMode},_.X),e=b(ht.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(rt,{}),(0,r.jsxs)(Pe.Z,{customToken:function(o){return Object.assign({},gt(o),e)},themeMode:t,children:[(0,r.jsx)(it,{}),(0,r.jsx)(bo,{})]})]})}),jo=So},37620:function(An,Me,s){s.d(Me,{f:function(){return _}});var Pe=s(32089),c=s(9676),_=(0,c.F)()((0,Pe.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);