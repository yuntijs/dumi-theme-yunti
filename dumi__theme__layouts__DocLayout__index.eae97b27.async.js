"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{35453:function(An,Me,s){s.r(Me),s.d(Me,{default:function(){return ko}});var Pe=s(87956),u=s(92379),ee=s(15354),Un=s(12027),J=s.n(Un),Nn=s(19317),De=s.n(Nn),Wn=s(29861),we=s.n(Wn),$n=s(91253),g=s(48073),Gn=s(95490),W=s.n(Gn),Ee=s(32089),Ae=s(9676),Vn=s(24325),R=s.n(Vn),Kn=s(34180),pe=s.n(Kn),Yn=s(28633),E=s.n(Yn),Ue=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},Xn=function(e){for(var n={},o=function(){var c=E()(i[a],2),v=c[0],d=c[1],m=Object.keys(n);if(v.split("/").length===3){var p,x,C="/".concat(v.split("/")[1]),h=(p=d[0])===null||p===void 0||(p=p.children)===null||p===void 0?void 0:p.find(function(A){var P,H=(P=A.frontmatter)===null||P===void 0?void 0:P.nav;return pe()(H)==="object"&&pe()(H==null?void 0:H.second)==="object"});if(!h){var w;h=(w=d[0])===null||w===void 0?void 0:w.children[0]}var L=(x=h)===null||x===void 0||(x=x.frontmatter)===null||x===void 0?void 0:x.nav,F={order:0,title:void 0};if(typeof L!="string"){var T,B,M,I;F.order=(T=L==null||(B=L.second)===null||B===void 0?void 0:B.order)!==null&&T!==void 0?T:0,F.title=(M=L==null||(I=L.second)===null||I===void 0?void 0:I.title)!==null&&M!==void 0?M:L==null?void 0:L.second}if(m.includes(C)){var Z;n[C].push({title:F.title,order:F.order,children:(Z=d[0])===null||Z===void 0?void 0:Z.children})}else n[C]=d.map(function(A){return R()(R()({},A),{},{title:F.title,order:F.order})})}else m.includes(v)?n[v]=[].concat(J()(n[v]),J()(d)):n[v]=d},a=0,i=Object.entries(e);a<i.length;a++)o();return n},Fe=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},ne={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},Jn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,o=(0,g.useNavData)(),a=(0,g.useSidebarData)(),i=(0,g.useRouteMeta)(),l=(0,g.useTabMeta)(),c=(0,g.useLocation)(),v=(0,g.useLocale)(),d=(0,g.useIntl)(),m=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:d.formatMessage({id:"header.nav.home"})}},[d]),p=n.hideHomeNav?o:[m].concat(J()(o));return R()(R()({},ne),{},{locale:v||ne.locale,location:c||ne.location,navData:p||ne.navData,routeMeta:i||ne.routeMeta,sidebar:a||ne.sidebar,siteData:R()(R()({},ne.siteData),{},{themeConfig:n}),tabMeta:l||ne.tabMeta})},Qn=(0,Ae.F)()((0,Ee.mW)(function(){return ne},{name:"dumi-theme-yunti"})),y=Ue?Qn:function(t,e){var n=Jn(),o=(0,Ae.F)()((0,Ee.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(y,o),o(t,e)},qn=["setLoading"],_n=["setLoading"],Ne={},et=function(e,n){(0,u.useEffect)(function(){u.startTransition(function(){e()})},n)},nt=function(e,n){(0,$n.Z)(function(){e()},n,{maxWait:96,wait:32})},tt=typeof u.startTransition=="function"?et:nt,ie=function(e,n,o){var a=o||function(i,l){var c;return(c=y.setState)===null||c===void 0?void 0:c.call(y,we()({},i,l))};!Ue&&!Ne[e]&&(a(e,n),Ne[e]=!0),tt(function(){a(e,n)},[n])},rt=function(){var e=(0,g.useSiteData)(),n=(0,g.useSidebarData)(),o=(0,g.useRouteMeta)(),a=(0,g.useTabMeta)(),i=(0,g.useNavData)(),l=(0,g.useLocation)(),c=(0,g.useLocale)(),v=(0,g.useIntl)(),d=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:v.formatMessage({id:"header.nav.home"})}},[v]);return ie("siteData",e,function(){var m,p,x=e.setLoading,C=De()(e,qn),h=((m=y.getState)===null||m===void 0?void 0:m.call(y))||{siteData:{}},w=h.siteData,L=w.setLoading,F=De()(w,_n);W()(C,F)||(p=y.setState)===null||p===void 0||p.call(y,{siteData:e})}),ie("sidebar",n),ie("routeMeta",o),ie("location",l),ie("tabMeta",a),ie("locale",c),ie("navData",i,function(){var m,p=e.themeConfig.hideHomeNav?i:[d].concat(J()(i));(m=y.setState)===null||m===void 0||m.call(y,{navData:p})}),!1},ot=s(29148),j=s.n(ot),O=s(66933),We,at=(0,O.vJ)(We||(We=j()([`
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
`])),function(t){var e=t.theme;return e.colorText}),it=at,He=s(37620),$e=function(e){return e.siteData.themeConfig},lt=function(e){return e.siteData.themeConfig.title},Le=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},st=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},ct=function(e){return e.siteData.themeConfig.giscus},Ge=function(e){return e===!1?!1:typeof e=="string"},ut=function(e){var n,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var a=["/api","/components"].concat(J()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return a.some(function(i){return e.location.pathname.startsWith(i)})},Ve=function(e){var n,o,a,i,l=Le(e),c=e.routeMeta.frontmatter,v=e.locale.id,d=function(A){return A.replace("{github}",l).replace("{atomId}",c.atomId||"").replace("{title}",c.title).replace("{locale}",v)},m=e.siteData.themeConfig.apiHeader||{},p=m.type,x=p===void 0?"component":p,C=m.pkg,h=C===void 0?e.siteData.pkg.name:C,w=m.sourceUrl,L=m.docUrl,F=((n=c.apiHeader)===null||n===void 0?void 0:n.pkg)||h,T=c.atomId||c.title,B=((o=c.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,M=((a=c.apiHeader)===null||a===void 0?void 0:a.sourceUrl)||(Ge(w)?d(w):void 0),I=((i=c.apiHeader)===null||i===void 0?void 0:i.docUrl)||(Ge(L)?d(L):void 0);return{componentName:T,defaultImport:B,description:c.description,docUrl:I,pkg:F,sourceUrl:M,title:c.title,type:x}},dt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ke=function(e){var n,o,a=e.routeMeta,i=a.toc,l=a.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(i=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(l=e.tabMeta.frontmatter);var c=function(d){if(!l.tocDepth||typeof l.tocDepth=="number"&&l.tocDepth>d-1)return!0};return i.reduce(function(v,d){if(d.depth===2&&c(2))v.push(R()({},d));else if(d.depth===3&&c(3)){var m=v.at(-1);m&&(m.children=m.children||[],m.children.push(R()({},d)))}return v},[])},Ye=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(o){return o.children}).flat())||[]},vt=function(e){var n=Ye(e),o=e.location.pathname,a=n.findIndex(function(i){return i.link===o});return{currentIndex:a,next:n[a+1],prev:n[a-1]}},mt=s(92010),ht=function(e){var n=e.routeMeta.frontmatter;return(0,mt.Z)({},n.token,e.siteData.themeConfig.siteToken)},pt={apiHeader:Ve,flattenSidebar:Ye,token:ht},ft=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},gt=ft,xt=s(827),Q=s(29191),Te=s(20113),te=s(70957),yt=s(62090),bt=s(94174),St=s(44550),Ie=s(24899),Re=s(31180),Ze=s(42018),jt=s(92496),G=s(12274),Xe,Je,Qe,qe,_e,kt=(0,O.kc)(function(t){var e=t.css,n=t.token,o=t.responsive,a=t.stylish;return{desc:e(Xe||(Xe=j()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),n.fontSizeLG,n.lineHeightLG),label:e(Je||(Je=j()([`
    width: 80px;
  `]))),meta:e(Qe||(Qe=j()([""]))),text:e(qe||(qe=j()([`
    `,`
  `])),a.resetLinkColor),title:e(_e||(_e=j()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=s(651),en=(0,u.memo)(function(t){var e=t.title,n=t.type,o=t.componentName,a=t.description,i=t.defaultImport,l=t.pkg,c=t.sourceUrl,v=t.docUrl,d=t.serviceList,m=d===void 0?[]:d,p=kt(),x=p.styles,C=(0,Q.F)(),h=C.mobile,w=n==="doc",L=[c&&{children:"Source",icon:(0,r.jsx)(te.Z,{icon:Ze.Z}),url:c},v&&{children:"Edit",icon:(0,r.jsx)(te.Z,{icon:jt.Z}),url:v}].filter(Boolean),F=i?"import ".concat(o," from '").concat(l,"';"):"import { ".concat(o," } from '").concat(l,"';");return(0,r.jsxs)(G.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(St.Z.Title,{className:x.title,children:e}),a&&(0,r.jsx)(yt.Z,{className:x.desc,children:a}),!w&&(0,r.jsxs)(G.D,{gap:h?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(bt.Z,{spotlight:!0,children:F})}),(0,r.jsx)(Ie.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)(G.D,{distribution:"space-between",gap:h?24:0,horizontal:!h,children:[(0,r.jsx)(Re.Z,{split:(0,r.jsx)(Ie.Z,{type:"vertical"}),wrap:!0,children:m.map(function(T){return(0,r.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",title:T.label,children:(0,r.jsxs)(G.D,{align:"center",className:x.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},T.label)})}),(0,r.jsx)(Re.Z,{className:x.meta,split:(0,r.jsx)(Ie.Z,{type:"vertical"}),children:L.map(function(T,B){return(0,r.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(G.D,{align:"center",className:x.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},B)})})]})]})]})}),nn,tn,rn,on=(0,O.kc)(function(t){var e=t.cx,n=t.css,o=t.token,a=t.stylish;return{background:e(a.gradientAnimation,n(nn||(nn=j()([`
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
    `])))),changelog:n(tn||(tn=j()([`
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
  `])),o.colorTextDescription,o.colorBorderSecondary),content:n(rn||(rn=j()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Ct=s(48037),Mt=s(83994),Dt=s(25220),an,ln,sn,cn,Lt=(0,O.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(an||(an=j()([`
    justify-content: flex-end;
  `]))),container:n(ln||(ln=j()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:n(sn||(sn=j()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:n(cn||(cn=j()([`
    font-size: 16px;
  `])))}}),Tt=(0,u.memo)(function(t){var e=t.title,n=t.link,o=t.type,a=Lt(),i=a.styles,l=a.cx,c=(0,g.useIntl)(),v=(0,u.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(te.Z,{icon:Mt.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:c.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:c.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(te.Z,{icon:Dt.Z})]})}},[c,o]);return(0,r.jsx)(g.Link,{to:n,children:(0,r.jsxs)(G.D,{className:i.container,gap:8,children:[(0,r.jsx)(G.D,{className:l(i.nav,o==="next"&&i.alignmentEnd),gap:4,horizontal:!0,children:v}),(0,r.jsx)(G.D,{className:l(i.title,o==="next"&&i.alignmentEnd),horizontal:!0,children:e})]})})}),un=Tt,It=(0,u.memo)(function(){var t=y(vt,W()),e=t.prev,n=t.next,o=(0,Q.F)(),a=o.mobile;return(0,r.jsxs)(G.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[e?(0,r.jsx)(un,R()({type:"prev"},e)):(0,r.jsx)("div",{}),n?(0,r.jsx)(un,R()({type:"next"},n)):(0,r.jsx)("div",{})]})}),Bt=It,dn,vn,Pt=(0,O.kc)(function(t,e){var n=t.cx,o=t.token,a=t.responsive,i=t.css;return{content:n(!e&&i(dn||(dn=j()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,a.mobile),i(vn||(vn=j()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),wt=["children"],Ft=(0,u.memo)(function(t){var e=t.children,n=De()(t,wt),o=y(function(p){return p.siteData.loading}),a=y($e,W()),i=a.docStyle,l=Pt(i==="pure"),c=l.styles,v=l.cx,d=(0,Q.F)(),m=d.mobile;return(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)(G.D,R()(R()({gap:m?0:24,width:"100%"},n),{},{children:[(0,r.jsx)("div",{className:v("dumi-antd-style-content",c.content),children:(0,r.jsx)(Ct.Z,{children:e})}),(0,r.jsx)(Bt,{})]}))}),mn=Ft,Ht=(0,u.memo)(function(){var t=(0,g.useOutlet)(),e=(0,Q.F)(),n=e.mobile,o=y(function(d){return{repoBase:Le(d)}},ee.X),a=o.repoBase,i=y(function(d){return{fm:d.routeMeta.frontmatter}},W()),l=i.fm,c=on(),v=c.styles;return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:v.background}),(0,r.jsxs)(Te.Z,{className:v.content,style:{padding:n?0:24},children:[(0,r.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,r.jsx)(en,{description:l.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:l.title})}),(0,r.jsx)(mn,{className:v.changelog,children:t})]})]})}),Rt=Ht,Zt=s(13876),zt=s(22148),Ot=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Et=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),At=(0,u.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Ut=(0,u.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Nt=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Wt=(0,u.memo)(function(){var t=y(Ve,W()),e=t.pkg,n=(0,u.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(At,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)(Nt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)(Ot,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Ut,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(Et,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(en,R()({serviceList:n},t))}),$t=Wt,Gt=(0,u.memo)(function(){var t=(0,g.useOutlet)(),e=(0,g.useLocation)(),n=(0,Q.F)(),o=n.mobile,a=y(function(m){return{giscus:ct(m),isApiPage:ut(m)}},ee.X),i=a.isApiPage,l=a.giscus,c=on(),v=c.styles;(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var d=(0,u.useCallback)(function(){return l&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(zt.Z,{category:l.category,categoryId:l.categoryId,id:"lobehub",mapping:"title",repo:l.repo,repoId:l.repoId})})},[l,e.pathname]);return(0,r.jsxs)(Zt.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:v.background}),(0,r.jsxs)(Te.Z,{className:v.content,style:{marginBottom:48,padding:o?0:24},children:[i?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)($t,{})}):void 0,(0,r.jsxs)(mn,{children:[t,l&&(0,r.jsx)(d,{})]})]})]})}),Vt=Gt,Kt=s(57030),ze=function(e){return!!e.routeMeta.frontmatter.hero},oe=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},Yt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||oe(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},Xt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||oe(e,e.siteData.themeConfig.description)},Jt=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=oe(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||oe(e,e.siteData.themeConfig.actions)},Qt=function(e){var n;return ze(e)?((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||oe(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},qt=function(e){var n=e.siteData.themeConfig.customPages;if(!(!n||n.length===0))return n.find(function(o){return o.path===e.location.pathname})},_t=(0,u.memo)(function(){var t=y(Qt,W()),e=(0,O.Fg)();if(t!=null&&t.length)return(0,r.jsx)(Kt.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),er=_t,nr=s(72819),tr=(0,u.memo)(function(){var t=y(ze),e=y(Yt),n=y(Xt),o=y(Jt);if(t)return(0,r.jsx)(nr.Z,{actions:o,description:n,title:e})}),rr=tr,or=(0,u.memo)(function(){var t=(0,g.useOutlet)();return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(G.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(rr,{}),(0,r.jsx)(er,{}),t]})}),ar=or,ir=s(41850),lr=s(2957),sr=s(35723),cr=s(59325),ur=function(e){var n=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},a={items:[n&&{icon:(0,r.jsx)(te.Z,{icon:lr.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,r.jsx)(te.Z,{icon:sr.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},i={items:[n&&{icon:(0,r.jsx)(te.Z,{icon:Ze.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:g.Link,icon:(0,r.jsx)(te.Z,{icon:cr.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},l={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,a,i,l]},hn,pn,dr=(0,O.kc)(function(t){var e=t.css,n=t.responsive,o=t.token,a="rc-footer";return{container:e(hn||(hn=j()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,n.mobile),footer:e(pn||(pn=j()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,a,o.colorTextTertiary,o.colorLinkHover,a,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,a)}}),vr=(0,u.memo)(function(){var t=y(function(C){return C.siteData},W()),e=t.themeConfig,n=t.pkg,o=e.footerConfig,a=e.footer,i=y(Le,ee.X),l=dr(),c=l.styles,v=l.theme,d=(0,Q.F)(),m=d.mobile;if(a){var p=o!=null&&o.columns?o==null?void 0:o.columns:ur({github:i||n.homepage});o!=null&&o.resources&&(p[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(p[3]=o==null?void 0:o.moreProducts);var x=(o==null?void 0:o.bottom)||a;return(0,r.jsx)(ir.Z,{bottom:m?(0,r.jsxs)(Te.Z,{className:c.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)(G.D,{align:"center",dangerouslySetInnerHTML:{__html:x},horizontal:!0})]}):(0,r.jsxs)(Te.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ie.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:x}})]}),columns:p,contentMaxWidth:v.contentMaxWidth,theme:v.appearance})}}),mr=vr,hr=s(4413),pr=s(61672),fn,fr=(0,O.kc)(function(t){var e=t.css,n=t.responsive,o=t.token;return e(fn||(fn=j()([`
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
  `])),o.colorText,n.mobile)}),gr=(0,u.memo)(function(){var t=y($e,W()),e=y(function(c){return c.locale},W()),n=fr(),o=n.styles,a=n.cx,i=(0,Q.F)(),l=i.mobile;return t&&(0,r.jsx)(g.Link,{className:a(o),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Re.Z,{children:[(0,r.jsx)(pr.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:l?32:36}),t.name]})})}),xr=gr,yr=s(69916),br=s(80326),Sr=s(31125),gn,xn,jr=(0,O.kc)(function(t){var e=t.css,n=t.stylish,o=t.token,a=t.responsive,i=t.prefixCls;return{link:e(gn||(gn=j()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(xn||(xn=j()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),i,o.colorText,a.mobile)}}),yn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},kr=(0,u.memo)(function(){var t=jr(),e=t.styles,n=(0,g.useLocation)(),o=n.pathname,a=y(function(l){return l.navData},ee.X),i=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(yr.Z,{activeKey:i,className:e.tabs,items:a.map(function(l){var c=l.activePath||yn(l.link);return{key:Fe(l.link)?l.link:c,label:Fe(l.link)?(0,r.jsxs)("a",{className:e.link,href:String(l.link),onClick:function(d){return d.preventDefault()},rel:"noreferrer",target:l.target||"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:l.title})," ",(0,r.jsx)(te.Z,{icon:Sr.Z})]}):(0,r.jsx)(g.Link,{className:e.link,onClick:function(d){return d.preventDefault()},target:l.target,to:String(l.link),children:l.title})}}),onTabClick:function(c){var v=a.find(function(d){return d.activePath===c||d.link===c||yn(d.link)===c});if(v!=null&&v.link){if(Fe(v.link)||v.target==="_blank")return window.open(v.link);g.history.push(v.link)}}}),(0,r.jsx)(br.Z,{})]})}),Cr=kr,Mr=s(19210),Dr=s(57912),bn,Sn,jn,kn,Cn,Lr=(0,O.kc)(function(t){var e=t.token,n=t.responsive,o=t.css,a=t.cx;return{container:o(bn||(bn=j()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:o(Sn||(Sn=j()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(jn||(jn=j()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:a("site-header-shortcut",o(kn||(kn=j()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:a(o(Cn||(Cn=j()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Tr=(0,u.memo)(function(){var t=Lr(),e=t.styles,n=(0,u.useState)(!1),o=E()(n,2),a=o[0],i=o[1],l=(0,g.useSiteSearch)(),c=l.keywords,v=l.setKeywords,d=l.result,m=l.loading,p=(0,g.useIntl)();return(0,r.jsxs)("div",{className:e.container,children:[(0,r.jsx)(Mr.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(C){return v(C.target.value)},onFocus:function(){return i(!0)},placeholder:p.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),c.trim()&&a&&(d.length>0||!m)&&(0,r.jsx)("div",{className:e.popover,children:(0,r.jsx)(Dr.Z,{data:d,loading:m})})]})}),Ir=Tr,Br=s(93974),Pr=s(74604),wr=(0,u.memo)(function(){var t=(0,u.useState)(!1),e=E()(t,2),n=e[0],o=e[1],a=y(function(m){return m.navData},W()),i=y(function(m){return m.sidebar},W()),l=y(function(m){return{activePath:dt(m),pathname:m.location.pathname}},ee.X),c=l.pathname,v=l.activePath,d=(0,u.useMemo)(function(){var m=i==null?void 0:i.map(function(p){return!p.link&&{children:p.children.map(function(x){return{key:"s-".concat(x.link),label:(0,r.jsx)(g.Link,{onClick:function(){o(!1)},to:x.link,children:x.title})}}),label:p.title,type:"group"}});return a.map(function(p){return{children:(p.activePath||p.link)===v&&m,key:p.activePath||p.link,label:(0,r.jsx)(g.Link,{to:String(p.link),children:p.title})}})},[a,v,i]);return(0,r.jsx)(Br.Z,{items:d,openKeys:[v],opened:n,selectedKeys:(0,Pr.Z)([v,"s-".concat(c)]),setOpened:o})}),Fr=wr,Mn=s(86982),Hr=s(93910),Dn,Rr=(0,Hr.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Zr=(0,O.kc)(function(t){var e=t.css;return e(Dn||(Dn=j()([`
    svg {
      overflow: visible !important;
    }
  `])))}),zr=(0,u.memo)(function(){var t=y(st),e=Zr(),n=e.styles;return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mn.Z,{className:n,icon:Rr,size:"site"})}):void 0}),Or=zr,Er=(0,u.memo)(function(){var t=y(Le);return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(Mn.Z,{icon:Ze.Z,size:"site"})}):void 0}),Ar=Er,Ur=s(88016),V=s(11348),ge=s(45623),Nr=s(51683),Wr=s(86473),Ln,Tn,In,$r=(0,O.kc)(function(t,e){var n=t.css,o=t.cx,a=t.token;return{active:o("".concat(e,"-item-active"),n(Ln||(Ln=j()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:o("".concat(e,"-item"),n(Tn||(Tn=j()([`
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
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),n(In||(In=j()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),Gr=["value","label","prefixCls","isSelected","isActive","disabled"],Vr=(0,u.forwardRef)(function(t,e){var n=t.value,o=t.label,a=t.prefixCls,i=t.isSelected,l=t.isActive,c=t.disabled,v=De()(t,Gr),d=$r(a),m=d.styles,p=d.cx;return(0,r.jsx)("button",R()(R()({"aria-selected":i,className:p(m.item,we()(we()({},m.selected,i),m.active,l)),disabled:c,ref:e,role:"option",tabIndex:-1,type:"button"},v),{},{children:o}),n)}),Kr=Vr,Bn,Pn,Yr=(0,O.kc)(function(t,e){var n=t.css,o=t.stylish,a=t.cx,i=t.token;return{button:a("".concat(e,"-button"),n(Bn||(Bn=j()([`
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
    `])),o.buttonDefaultHover,i.fontSize,i.colorTextSecondary,i.colorBgContainer,i.colorBorder,i.borderRadius,i.colorPrimary,i.colorPrimaryBg)),container:a(e,n(Pn||(Pn=j()([`
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
    `])),i.fontSize,i.colorBgElevated,i.colorBorder,i.boxShadowSecondary))}}),Xr=(0,u.memo)(function(t){var e=t.options,n=e===void 0?[]:e,o=t.value,a=t.prefixCls,i=t.onChange,l=t.renderValue,c=t.renderItem,v=t.style,d=a!=null?a:"native-select",m=(0,Wr.Z)(0,{onChange:i,value:o}),p=E()(m,2),x=p[0],C=p[1],h=Yr(d),w=h.styles,L=(0,u.useRef)([]),F=(0,u.useRef)([]),T=(0,u.useRef)(null),B=(0,u.useRef)(!1),M=(0,u.useRef)(!0),I=(0,u.useRef)(),Z=(0,u.useRef)(null),A=(0,u.useState)(!1),P=E()(A,2),H=P[0],K=P[1],U=(0,u.useState)(null),k=E()(U,2),D=k[0],S=k[1],xe=(0,u.useState)(!1),ue=E()(xe,2),le=ue[0],de=ue[1],se=(0,u.useState)(0),ye=E()(se,2),be=ye[0],ce=ye[1],Se=(0,u.useState)(!1),je=E()(Se,2),ve=je[0],me=je[1],ke=(0,u.useState)(!1),he=E()(ke,2),f=he[0],b=he[1];H||(be!==0&&ce(0),le&&de(!1),f&&b(!1));var z=(0,V.YF)({middleware:le?[(0,ge.cv)(5),ve?(0,ge.uY)({crossAxis:!0,padding:10}):(0,ge.RR)({padding:10}),(0,ge.dp)({apply:function($){var _,Ce,Io=$.availableHeight;Object.assign((_=(Ce=Z.current)===null||Ce===void 0?void 0:Ce.style)!==null&&_!==void 0?_:{},{maxHeight:"".concat(Io,"px")})},padding:10})]:[(0,V.aN)({index:x,listRef:L,minItemsVisible:ve?8:4,offset:be,onFallbackChange:de,overflowRef:T,padding:10,referenceOverflowThreshold:20,scrollRef:Z}),(0,ge.cv)({crossAxis:-4})],onOpenChange:K,open:H,placement:"bottom-start",whileElementsMounted:Nr.Me}),Y=z.x,ae=z.y,N=z.strategy,q=z.refs,X=z.context,Oe=(0,V.NI)([(0,V.eS)(X,{event:"mousedown"}),(0,V.bQ)(X),(0,V.qs)(X,{role:"listbox"}),(0,V.Rz)(X,{enabled:!le,onChange:ce,overflowRef:T,scrollRef:Z}),(0,V.c0)(X,{activeIndex:D,listRef:L,onNavigate:S,selectedIndex:x}),(0,V.ox)(X,{activeIndex:D,listRef:F,onMatch:H?S:C})]),Co=Oe.getReferenceProps,Mo=Oe.getFloatingProps,Do=Oe.getItemProps;(0,u.useEffect)(function(){if(H)return I.current=setTimeout(function(){B.current=!0},300),function(){clearTimeout(I.current)};B.current=!1,M.current=!0},[H]);var Lo=n[x]||{},To=Lo.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",R()(R()({"aria-label":"selected-item",className:w.button,ref:q.setReference,style:v,type:"button"},Co({onPointerMove:function($){var _=$.pointerType;_==="mouse"&&me(!1)},onTouchStart:function(){me(!0)}})),{},{children:l?l(x):To})),(0,r.jsx)(V.ll,{children:H&&(0,r.jsx)(V.y0,{lockScroll:!ve,style:{zIndex:3e3},children:(0,r.jsx)(V.wD,{context:X,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:q.setFloating,style:{left:Y!=null?Y:0,position:N,top:ae!=null?ae:0},children:(0,r.jsx)("div",R()(R()({className:w.container,ref:Z,style:{overflowY:"auto"}},Mo({onContextMenu:function($){$.preventDefault()}})),{},{children:n.map(function(re,$){return(0,r.jsx)(Kr,R()({disabled:f,isActive:$===D,isSelected:$===x,label:c?c(re,$):re.label,prefixCls:d,ref:function(Ce){L.current[$]=Ce,F.current[$]=re.label},value:re.value},Do({onClick:function(){B.current&&(C($),K(!1))},onKeyDown:function(){B.current=!0},onMouseUp:function(){M.current&&(B.current&&(C($),K(!1)),clearTimeout(I.current),I.current=setTimeout(function(){B.current=!0}))},onTouchStart:function(){B.current=!0,M.current=!1}})),re.value)})}))})})})})]})}),Jr=Xr;function Be(t){var e=t.pathname,n=t.current,o=t.target,a="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(o.suffix)}var Qr={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},wn={"en-US":"EN","zh-CN":"\u4E2D"},qr=(0,u.memo)(function(t){var e=t.locale,n=t.current,o=(0,g.useLocation)(),a=o.pathname,i=(0,u.useState)(function(){return Be({current:n,pathname:a,target:e})}),l=E()(i,2),c=l[0],v=l[1];return(0,u.useEffect)(function(){v(Be({current:n,pathname:a,target:e}))},[n,e,a]),(0,r.jsx)(g.Link,{to:c,children:(0,r.jsx)(Ur.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:wn[e.id]})})}),_r=(0,u.memo)(function(){var t=y(function(n){return n.siteData.locales}),e=y(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,r.jsx)(Jr,{onChange:function(o){console.log(Be({current:e,pathname:location.pathname,target:t[o]})),g.history.push(Be({current:e,pathname:location.pathname,target:t[o]}))},options:t.map(function(n){return{label:wn[n.id],value:n.id}}),renderItem:function(o,a){return"".concat(Qr[t[a].id]," ").concat(t[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,r.jsx)(qr,{current:e,locale:t.find(function(n){var o=n.id;return o!==e.id})})}),eo=_r,no=s(77388),to=(0,u.memo)(function(){var t=(0,He.f)(function(n){return n.themeMode}),e=(0,g.usePrefersColor)()[2];return(0,u.useEffect)(function(){return e(t)},[e,t]),(0,r.jsx)(no.Z,{onThemeSwitch:function(o){He.f.setState({themeMode:o})},themeMode:t})}),Fn=to,ro=(0,u.memo)(function(){var t=y(function(o){return!!o.routeMeta.frontmatter}),e=(0,Q.F)(),n=e.mobile;if(t)return(0,r.jsx)(hr.Z,{actions:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Fn,{}),(0,r.jsx)("div",{id:"header-actions-extra"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ir,{})," ",(0,r.jsx)(eo,{}),(0,r.jsx)(Ar,{}),(0,r.jsx)(Or,{}),(0,r.jsx)(Fn,{}),(0,r.jsx)("div",{id:"header-actions-extra"})]}),logo:(0,r.jsx)(xr,{}),nav:n?(0,r.jsx)(Fr,{}):(0,r.jsx)(Cr,{})})}),oo=ro,ao=s(87157),io=s(36177),lo=s(41378),Hn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,o=n;return o},so=s(14582),Rn=s.n(so),co=s(70761),uo={i8:"1.3.0"},vo=function t(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=Rn()(e),i;try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.key===n)return[].concat(J()(o),[l.key]);if(l.children&&l.children.length>0){var c=t(l.children,n,[].concat(J()(o),[l.key]));if(c)return c}}}catch(v){a.e(v)}finally{a.f()}return null},mo=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,g.useLocation)(),a=o.pathname,i=o.search,l=Hn(),c=l.sidebarGroupModePath,v=l.sidebarEnhance,d=v===void 0?{}:v,m=n.before,p=n.after,x=(0,g.useFullSidebarData)(),C=Xn(x),h=(0,g.useLocale)(),w="/".concat((e=a.split("/"))===null||e===void 0?void 0:e[1]),L=C[w],F=(0,u.useMemo)(function(){return Object.values(x).reduce(function(P,H){var K=H.flatMap(function(S){return S.children}),U=Rn()(K),k;try{for(U.s();!(k=U.n()).done;){var D=k.value;P[D.link]=D.title}}catch(S){U.e(S)}finally{U.f()}return P},{})},[x]),T=(0,u.useMemo)(function(){var P=Object.keys(d).find(function(H){return a.startsWith(H)});if(P)return d[P]},[a,d]),B=(0,u.useMemo)(function(){var P=function(D){return D&&pe()(D)==="object"&&"link"in D&&"title"in D},H=function(D){return D&&pe()(D)==="object"&&D.type==="group"},K=function(D){return D&&pe()(D)==="object"&&"children"in D};function U(k){return typeof k=="string"?{key:k,label:(0,r.jsxs)(g.Link,{to:"".concat(k).concat(i),children:[m,F[k],p]})}:H(k)?{type:"group",label:k.title,key:k.title,children:k.children.map(function(D){return U(D)})}:K(k)?{key:k.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:k.title}),children:k.children.map(function(D){return U(D)})}:P(k)?{label:(0,r.jsx)(g.Link,{target:k.target,to:k.link,children:k.title}),key:k.link}:null}if(T)return T.map(function(k){return U(k)})},[p,m,T,F,i]),M=(0,u.useMemo)(function(){var P,H,K=new RegExp("".concat((P=h==null?void 0:h.suffix)!==null&&P!==void 0?P:"","$"),"g"),U=J()(L!=null?L:[]),k=function(S){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return S&&xe&&(0,r.jsx)(co.Z,{bordered:!1,color:typeof S=="string"?"processing":S.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof S=="string"?S:S.title).replace("VERSION","v".concat(uo.i8))})};return(H=U==null?void 0:U.reduce(function(D,S){if(S!=null&&S.title){var xe=c===!0?!0:(c!=null?c:[]).some(function(f){return a.startsWith(f)});if(xe){var ue;D.push({type:"group",label:S==null?void 0:S.title,order:S==null?void 0:S.order,key:S==null?void 0:S.title,children:(ue=S.children)===null||ue===void 0?void 0:ue.map(function(f){var b,z;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,(0,r.jsx)("span",{children:fe(f==null?void 0:f.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:fe((b=f.frontmatter)===null||b===void 0?void 0:b.subtitle)},"chinese"),k((z=f.frontmatter)===null||z===void 0?void 0:z.tag,!m&&!p),p]}),key:f.link.replace(K,"")}})})}else{var le,de,se={},ye=S.children.reduce(function(f,b){var z,Y,ae=f,N=b==null||(z=b.frontmatter)===null||z===void 0?void 0:z.type,q=typeof N=="string"?N:(Y=N==null?void 0:N.title)!==null&&Y!==void 0?Y:"default";if(ae[q]||(ae[q]=[]),se[q])N!=null&&N.order&&(se[q].order=N.order);else{var X;se[q]={title:q,order:(X=N==null?void 0:N.order)!==null&&X!==void 0?X:-1}}return ae[q].push(b),ae},{}),be=Object.keys(ye).sort(function(f,b){return se[f].order-se[b].order}).reduce(function(f,b){var z=f;return z[b]=ye[b],z},{}),ce=[];ce.push.apply(ce,J()((le=(de=be.default)===null||de===void 0?void 0:de.map(function(f){var b;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),k((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(K,"")}}))!==null&&le!==void 0?le:[]));for(var Se=0,je=Object.entries(be);Se<je.length;Se++){var ve=E()(je[Se],2),me=ve[0],ke=ve[1];me!=="default"&&ce.push({type:"group",label:me,key:me,children:ke==null?void 0:ke.map(function(f){var b;return{label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),k((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(K,"")}})})}D.push({label:S==null?void 0:S.title,key:S==null?void 0:S.title,order:S==null?void 0:S.order,children:ce})}}else{var he=S.children||[];he.every(function(f){var b;return f==null||(b=f.frontmatter)===null||b===void 0?void 0:b.date})&&he.sort(function(f,b){var z,Y;return(f==null||(z=f.frontmatter)===null||z===void 0?void 0:z.date)>(b==null||(Y=b.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),D.push.apply(D,J()(he.map(function(f){var b;return{order:f==null?void 0:f.order,label:(0,r.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(i),children:[m,fe(f==null?void 0:f.title),k((b=f.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!p),p]}),key:f.link.replace(K,"")}})))}return D.sort(function(f,b){return(f==null?void 0:f.order)<(b==null?void 0:b.order)?-1:1}),D},[]))!==null&&H!==void 0?H:[]},[L,c,a,i,m,p,h]),I=(0,u.useMemo)(function(){var P;return a.replace(new RegExp("".concat((P=h==null?void 0:h.suffix)!==null&&P!==void 0?P:"","$"),"g"),"")},[h,a]),Z=(0,u.useMemo)(function(){return vo(B||M,I)},[M,I,B]),A=Z==null?void 0:Z.slice(0,-1);return[B||M,I,A]},Zn,zn,On,ho=(0,O.kc)(function(t,e){var n=t.token,o=t.css,a=t.prefixCls,i=e.isSideBarGroupMode;return{asideContainer:o(Zn||(Zn=j()([`
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
      `])),a,a,a,a,a,a,n.colorBorder,a,a,a,n.colorFillSecondary,a,a,a,a,a,!i&&o(zn||(zn=j()([`
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
          `])),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),n.colorTextDisabled),mainMenu:o(On||(On=j()([`
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
      `])),n.headerHeight,n.headerHeight)}}),po=function(){var e=(0,g.useLocation)(),n=e.pathname,o=Hn(),a=o.sidebarGroupModePath,i=(0,u.useMemo)(function(){return a===!0?!0:(a!=null?a:[]).some(function(L){return n.startsWith(L)})},[n,a]),l=ho({isSideBarGroupMode:i}),c=l.styles,v=ao.Z.useToken(),d=v.token,m=mo(),p=E()(m,3),x=p[0],C=p[1],h=p[2],w=(0,r.jsx)(io.ZP,{theme:{components:{Menu:{itemBg:d.colorBgLayout,darkItemBg:d.colorBgLayout}}},children:(0,r.jsx)(lo.Z,{className:c.asideContainer,defaultOpenKeys:h,inlineIndent:30,items:x,mode:"inline",selectedKeys:[C]},h==null?void 0:h[0])});return(0,r.jsx)("div",{className:c.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:w})})},fo=po,go=s(61882),En=48,xo=(0,u.memo)(function(){var t=y(Ke,W()),e=(0,Q.F)(),n=e.mobile,o=(0,O.Fg)(),a=(0,u.useState)(En),i=E()(a,2),l=i[0],c=i[1],v=(0,g.useLocation)();if((0,u.useEffect)(function(){var d=document.querySelector("#api-header");d&&c(d.clientHeight+En)},[v.pathname,v.hash,v.search,t]),!((t==null?void 0:t.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("div",{style:{height:l}}),(0,r.jsx)(go.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:n,items:t,tocWidth:o.tocWidth})]})}),yo=xo,bo=(0,u.memo)(function(){var t=(0,g.useIntl)(),e=(0,g.useLocation)(),n=e.hash,o=(0,O.Fg)(),a=(0,Q.F)(),i=a.mobile,l=a.laptop,c=y(function(M){var I=M.location.pathname==="/changelog",Z=ze(M),A;return Z||M.location.pathname==="/"?A="home":I?A="changelog":A="docs",{loading:M.siteData.loading,noToc:Ke(M).length===0,page:A,siteTitle:lt(M),themeConfig:M.siteData.themeConfig}},ee.X),v=c.loading,d=c.page,m=c.siteTitle,p=c.noToc,x=c.themeConfig,C=y(function(M){return M.routeMeta.frontmatter},W()),h=y(qt),w=d!=="docs"||i||C.sidebar===!1||(h==null?void 0:h.sider)===!1,L=C.toc===!1||p,F=i?L:!l||L,T=(0,u.useCallback)(function(){var M=(h==null?void 0:h.title)||C.title,I=(h==null?void 0:h.description)||C.description||x.description,Z=(h==null?void 0:h.keywords)||C.keywords||x.keywords;return(0,r.jsxs)(g.Helmet,{children:[(0,r.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),M&&(0,r.jsx)("meta",{content:M,property:"og:title"}),I&&(0,r.jsx)("meta",{content:I,name:"description"}),I&&(0,r.jsx)("meta",{content:I,property:"og:description"}),Z&&(0,r.jsx)("meta",{content:Z.join(","),name:"keywords"}),Z&&(0,r.jsx)("meta",{content:Z.join(","),property:"og:keywords"}),!M||d==="home"?(0,r.jsx)("title",{children:m}):(0,r.jsxs)("title",{children:[M," - ",m]})]})},[h==null?void 0:h.description,h==null?void 0:h.keywords,h==null?void 0:h.title,C.description,C.keywords,C.title,t.locale,d,m,x.description,x.keywords]);(0,u.useEffect)(function(){var M=n.replace("#","");M&&setTimeout(function(){var I=document.querySelector("#".concat(decodeURIComponent(M)));I&&(I.scrollIntoView(),window.scrollBy({top:-80}))},1)},[v,n]),(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[m]);var B=(0,g.useOutlet)();return(h==null?void 0:h.header)===!1&&(h==null?void 0:h.sider)===!1&&(h==null?void 0:h.footer)===!1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),B]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),(0,r.jsxs)(xt.ZP,{asideWidth:o.sidebarWidth,footer:(h==null?void 0:h.footer)!==!1&&(0,r.jsx)(mr,{}),header:(h==null?void 0:h.header)!==!1&&(0,r.jsx)(oo,{}),headerHeight:i&&d!=="home"?o.headerHeight+36:o.headerHeight,sidebar:w?void 0:(0,r.jsx)(fo,{}),toc:F?void 0:(0,r.jsx)(yo,{}),tocWidth:F?0:o.tocWidth,children:[h&&B,!h&&d==="home"&&(0,r.jsx)(ar,{}),!h&&d==="changelog"&&(0,r.jsx)(Rt,{}),!h&&d==="docs"&&(0,r.jsx)(Vt,{})]},w?"full":"no-sidebar")]})}),So=bo,jo=(0,u.memo)(function(){var t=(0,He.f)(function(n){return n.themeMode},ee.X),e=y(pt.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(rt,{}),(0,r.jsxs)(Pe.Z,{customToken:function(o){return Object.assign({},gt(o),e)},themeMode:t,children:[(0,r.jsx)(it,{}),(0,r.jsx)(So,{})]})]})}),ko=jo},37620:function(An,Me,s){s.d(Me,{f:function(){return ee}});var Pe=s(32089),u=s(9676),ee=(0,u.F)()((0,Pe.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
