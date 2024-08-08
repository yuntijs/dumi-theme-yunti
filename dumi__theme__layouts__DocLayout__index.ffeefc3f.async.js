"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{35453:function(An,Me,s){s.r(Me),s.d(Me,{default:function(){return ko}});var Pe=s(87956),c=s(92379),_=s(15354),Un=s(12027),X=s.n(Un),Nn=s(19317),De=s.n(Nn),Wn=s(29861),He=s.n(Wn),$n=s(91253),g=s(48073),Gn=s(95490),N=s.n(Gn),Ee=s(32089),Ae=s(9676),Vn=s(24325),F=s.n(Vn),Kn=s(34180),pe=s.n(Kn),Yn=s(28633),E=s.n(Yn),Ue=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},Xn=function(e){for(var n={},r=function(){var u=E()(i[a],2),v=u[0],d=u[1],m=Object.keys(n);if(v.split("/").length===3){var h,f,x="/".concat(v.split("/")[1]),D=(h=d[0])===null||h===void 0||(h=h.children)===null||h===void 0?void 0:h.find(function(te){var I,H=(I=te.frontmatter)===null||I===void 0?void 0:I.nav;return pe()(H)==="object"&&pe()(H==null?void 0:H.second)==="object"});if(!D){var B;D=(B=d[0])===null||B===void 0?void 0:B.children[0]}var L=(f=D)===null||f===void 0||(f=f.frontmatter)===null||f===void 0?void 0:f.nav,P={order:0,title:void 0};if(typeof L!="string"){var T,C,R,O;P.order=(T=L==null||(C=L.second)===null||C===void 0?void 0:C.order)!==null&&T!==void 0?T:0,P.title=(R=L==null||(O=L.second)===null||O===void 0?void 0:O.title)!==null&&R!==void 0?R:L==null?void 0:L.second}if(m.includes(x)){var Z;n[x].push({title:P.title,order:P.order,children:(Z=d[0])===null||Z===void 0?void 0:Z.children})}else n[x]=d.map(function(te){return F()(F()({},te),{},{title:P.title,order:P.order})})}else m.includes(v)?n[v]=[].concat(X()(n[v]),X()(d)):n[v]=d},a=0,i=Object.entries(e);a<i.length;a++)r();return n},Fe=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},ee={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},Jn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,r=(0,g.useNavData)(),a=(0,g.useSidebarData)(),i=(0,g.useRouteMeta)(),l=(0,g.useTabMeta)(),u=(0,g.useLocation)(),v=(0,g.useLocale)(),d=(0,g.useIntl)(),m=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:d.formatMessage({id:"header.nav.home"})}},[d]),h=n.hideHomeNav?r:[m].concat(X()(r));return F()(F()({},ee),{},{locale:v||ee.locale,location:u||ee.location,navData:h||ee.navData,routeMeta:i||ee.routeMeta,sidebar:a||ee.sidebar,siteData:F()(F()({},ee.siteData),{},{themeConfig:n}),tabMeta:l||ee.tabMeta})},Qn=(0,Ae.F)()((0,Ee.mW)(function(){return ee},{name:"dumi-theme-yunti"})),y=Ue?Qn:function(t,e){var n=Jn(),r=(0,Ae.F)()((0,Ee.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(y,r),r(t,e)},qn=["setLoading"],_n=["setLoading"],Ne={},et=function(e,n){(0,c.useEffect)(function(){c.startTransition(function(){e()})},n)},nt=function(e,n){(0,$n.Z)(function(){e()},n,{maxWait:96,wait:32})},tt=typeof c.startTransition=="function"?et:nt,ie=function(e,n,r){var a=r||function(i,l){var u;return(u=y.setState)===null||u===void 0?void 0:u.call(y,He()({},i,l))};!Ue&&!Ne[e]&&(a(e,n),Ne[e]=!0),tt(function(){a(e,n)},[n])},rt=function(){var e=(0,g.useSiteData)(),n=(0,g.useSidebarData)(),r=(0,g.useRouteMeta)(),a=(0,g.useTabMeta)(),i=(0,g.useNavData)(),l=(0,g.useLocation)(),u=(0,g.useLocale)(),v=(0,g.useIntl)(),d=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:v.formatMessage({id:"header.nav.home"})}},[v]);return ie("siteData",e,function(){var m,h,f=e.setLoading,x=De()(e,qn),D=((m=y.getState)===null||m===void 0?void 0:m.call(y))||{siteData:{}},B=D.siteData,L=B.setLoading,P=De()(B,_n);N()(x,P)||(h=y.setState)===null||h===void 0||h.call(y,{siteData:e})}),ie("sidebar",n),ie("routeMeta",r),ie("location",l),ie("tabMeta",a),ie("locale",u),ie("navData",i,function(){var m,h=e.themeConfig.hideHomeNav?i:[d].concat(X()(i));(m=y.setState)===null||m===void 0||m.call(y,{navData:h})}),!1},ot=s(29148),j=s.n(ot),z=s(66933),We,at=(0,z.vJ)(We||(We=j()([`
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
`])),function(t){var e=t.theme;return e.colorText}),it=at,we=s(37620),$e=function(e){return e.siteData.themeConfig},lt=function(e){return e.siteData.themeConfig.title},Le=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},st=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},ct=function(e){return e.siteData.themeConfig.giscus},Ge=function(e){return e===!1?!1:typeof e=="string"},ut=function(e){var n,r=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||r.apiHeader===!1)return!1;if(r.apiHeader)return!0;var a=["/api","/components"].concat(X()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return a.some(function(i){return e.location.pathname.startsWith(i)})},Ve=function(e){var n,r,a,i,l=Le(e),u=e.routeMeta.frontmatter,v=e.locale.id,d=function(te){return te.replace("{github}",l).replace("{atomId}",u.atomId||"").replace("{title}",u.title).replace("{locale}",v)},m=e.siteData.themeConfig.apiHeader||{},h=m.type,f=h===void 0?"component":h,x=m.pkg,D=x===void 0?e.siteData.pkg.name:x,B=m.sourceUrl,L=m.docUrl,P=((n=u.apiHeader)===null||n===void 0?void 0:n.pkg)||D,T=u.atomId||u.title,C=((r=u.apiHeader)===null||r===void 0?void 0:r.defaultImport)||!1,R=((a=u.apiHeader)===null||a===void 0?void 0:a.sourceUrl)||(Ge(B)?d(B):void 0),O=((i=u.apiHeader)===null||i===void 0?void 0:i.docUrl)||(Ge(L)?d(L):void 0);return{componentName:T,defaultImport:C,description:u.description,docUrl:O,pkg:P,sourceUrl:R,title:u.title,type:f}},dt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(r){return r.link!=="/"}).find(function(r){return e.location.pathname.startsWith(String(r.activePath||r.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ke=function(e){var n,r,a=e.routeMeta,i=a.toc,l=a.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(i=e.tabMeta.toc),(r=e.tabMeta)!==null&&r!==void 0&&r.frontmatter&&(l=e.tabMeta.frontmatter);var u=function(d){if(!l.tocDepth||typeof l.tocDepth=="number"&&l.tocDepth>d-1)return!0};return i.reduce(function(v,d){if(d.depth===2&&u(2))v.push(F()({},d));else if(d.depth===3&&u(3)){var m=v.at(-1);m&&(m.children=m.children||[],m.children.push(F()({},d)))}return v},[])},Ye=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(r){return r.children}).flat())||[]},vt=function(e){var n=Ye(e),r=e.location.pathname,a=n.findIndex(function(i){return i.link===r});return{currentIndex:a,next:n[a+1],prev:n[a-1]}},mt=s(92010),ht=function(e){var n=e.routeMeta.frontmatter;return(0,mt.Z)({},n.token,e.siteData.themeConfig.siteToken)},pt={apiHeader:Ve,flattenSidebar:Ye,token:ht},ft=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},gt=ft,xt=s(827),J=s(29191),Te=s(20113),ne=s(70957),yt=s(62090),bt=s(94174),St=s(44550),Ie=s(24899),Re=s(31180),Ze=s(42018),jt=s(92496),$=s(12274),Xe,Je,Qe,qe,_e,kt=(0,z.kc)(function(t){var e=t.css,n=t.token,r=t.responsive,a=t.stylish;return{desc:e(Xe||(Xe=j()([`
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
  `])),r.mobile)}}),o=s(651),en=(0,c.memo)(function(t){var e=t.title,n=t.type,r=t.componentName,a=t.description,i=t.defaultImport,l=t.pkg,u=t.sourceUrl,v=t.docUrl,d=t.serviceList,m=d===void 0?[]:d,h=kt(),f=h.styles,x=(0,J.F)(),D=x.mobile,B=n==="doc",L=[u&&{children:"Source",icon:(0,o.jsx)(ne.Z,{icon:Ze.Z}),url:u},v&&{children:"Edit",icon:(0,o.jsx)(ne.Z,{icon:jt.Z}),url:v}].filter(Boolean),P=i?"import ".concat(r," from '").concat(l,"';"):"import { ".concat(r," } from '").concat(l,"';");return(0,o.jsxs)($.D,{id:"api-header",style:{marginBottom:24},children:[(0,o.jsx)(St.Z.Title,{className:f.title,children:e}),a&&(0,o.jsx)(yt.Z,{className:f.desc,children:a}),!B&&(0,o.jsxs)($.D,{gap:D?16:24,style:{marginTop:16},children:[r&&(0,o.jsx)("div",{style:{display:"flex"},children:(0,o.jsx)(bt.Z,{spotlight:!0,children:P})}),(0,o.jsx)(Ie.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,o.jsxs)($.D,{distribution:"space-between",gap:D?24:0,horizontal:!D,children:[(0,o.jsx)(Re.Z,{split:(0,o.jsx)(Ie.Z,{type:"vertical"}),wrap:!0,children:m.map(function(T){return(0,o.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",title:T.label,children:(0,o.jsxs)($.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},T.label)})}),(0,o.jsx)(Re.Z,{className:f.meta,split:(0,o.jsx)(Ie.Z,{type:"vertical"}),children:L.map(function(T,C){return(0,o.jsx)("a",{href:T.url,rel:"noreferrer",target:"_blank",children:(0,o.jsxs)($.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[T.icon,T.children]})},C)})})]})]})]})}),nn,tn,rn,on=(0,z.kc)(function(t){var e=t.cx,n=t.css,r=t.token,a=t.stylish;return{background:e(a.gradientAnimation,n(nn||(nn=j()([`
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
  `])),r.colorTextDescription,r.colorBorderSecondary),content:n(rn||(rn=j()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),r.contentMaxWidth)}}),Ct=s(48037),Mt=s(83994),Dt=s(25220),an,ln,sn,cn,Lt=(0,z.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(an||(an=j()([`
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
  `])))}}),Tt=(0,c.memo)(function(t){var e=t.title,n=t.link,r=t.type,a=Lt(),i=a.styles,l=a.cx,u=(0,g.useIntl)(),v=(0,c.useMemo)(function(){switch(r){case"prev":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ne.Z,{icon:Mt.Z}),(0,o.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.next"})}),(0,o.jsx)(ne.Z,{icon:Dt.Z})]})}},[u,r]);return(0,o.jsx)(g.Link,{to:n,children:(0,o.jsxs)($.D,{className:i.container,gap:8,children:[(0,o.jsx)($.D,{className:l(i.nav,r==="next"&&i.alignmentEnd),gap:4,horizontal:!0,children:v}),(0,o.jsx)($.D,{className:l(i.title,r==="next"&&i.alignmentEnd),horizontal:!0,children:e})]})})}),un=Tt,It=(0,c.memo)(function(){var t=y(vt,N()),e=t.prev,n=t.next,r=(0,J.F)(),a=r.mobile;return(0,o.jsxs)($.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[e?(0,o.jsx)(un,F()({type:"prev"},e)):(0,o.jsx)("div",{}),n?(0,o.jsx)(un,F()({type:"next"},n)):(0,o.jsx)("div",{})]})}),Bt=It,dn,vn,Pt=(0,z.kc)(function(t,e){var n=t.cx,r=t.token,a=t.responsive,i=t.css;return{content:n(!e&&i(dn||(dn=j()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),r.colorBgContainer,a.mobile),i(vn||(vn=j()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Ht=["children"],Ft=(0,c.memo)(function(t){var e=t.children,n=De()(t,Ht),r=y(function(h){return h.siteData.loading}),a=y($e,N()),i=a.docStyle,l=Pt(i==="pure"),u=l.styles,v=l.cx,d=(0,J.F)(),m=d.mobile;return(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[r]),(0,o.jsxs)($.D,F()(F()({gap:m?0:24,width:"100%"},n),{},{children:[(0,o.jsx)("div",{className:v("dumi-antd-style-content",u.content),children:(0,o.jsx)(Ct.Z,{children:e})}),(0,o.jsx)(Bt,{})]}))}),mn=Ft,wt=(0,c.memo)(function(){var t=(0,g.useOutlet)(),e=(0,J.F)(),n=e.mobile,r=y(function(d){return{repoBase:Le(d)}},_.X),a=r.repoBase,i=y(function(d){return{fm:d.routeMeta.frontmatter}},N()),l=i.fm,u=on(),v=u.styles;return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:v.background}),(0,o.jsxs)(Te.Z,{className:v.content,style:{padding:n?0:24},children:[(0,o.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,o.jsx)(en,{description:l.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:l.title})}),(0,o.jsx)(mn,{className:v.changelog,children:t})]})]})}),Rt=wt,Zt=s(13876),zt=s(22148),Ot=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Et=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),At=(0,c.memo)(function(){return(0,o.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,o.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Ut=(0,c.memo)(function(){return(0,o.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"main",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,o.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Nt=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Wt=(0,c.memo)(function(){var t=y(Ve,N()),e=t.pkg,n=(0,c.useMemo)(function(){var r=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,o.jsx)(At,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(r)},{children:"UNPKG",icon:(0,o.jsx)(Nt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(r,"/")},{children:"BundlePhobia",icon:(0,o.jsx)(Ot,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(r)},{children:"PackagePhobia",icon:(0,o.jsx)(Ut,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(r)},{children:"Anvaka Graph",icon:(0,o.jsx)(Et,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(r))}]},[e]);return(0,o.jsx)(en,F()({serviceList:n},t))}),$t=Wt,Gt=(0,c.memo)(function(){var t=(0,g.useOutlet)(),e=(0,g.useLocation)(),n=(0,J.F)(),r=n.mobile,a=y(function(m){return{giscus:ct(m),isApiPage:ut(m)}},_.X),i=a.isApiPage,l=a.giscus,u=on(),v=u.styles;(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var d=(0,c.useCallback)(function(){return l&&(0,o.jsx)("div",{style:{marginTop:64},children:(0,o.jsx)(zt.Z,{category:l.category,categoryId:l.categoryId,id:"lobehub",mapping:"title",repo:l.repo,repoId:l.repoId})})},[l,e.pathname]);return(0,o.jsxs)(Zt.V9,{hashPriority:"high",children:[(0,o.jsx)("div",{className:v.background}),(0,o.jsxs)(Te.Z,{className:v.content,style:{marginBottom:48,padding:r?0:24},children:[i?(0,o.jsx)("div",{style:{padding:r?16:0,width:"100%"},children:(0,o.jsx)($t,{})}):void 0,(0,o.jsxs)(mn,{children:[t,l&&(0,o.jsx)(d,{})]})]})]})}),Vt=Gt,Kt=s(57030),ze=function(e){return!!e.routeMeta.frontmatter.hero},oe=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},Yt=function(e){var n,r;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((r=oe(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.title)||oe(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},Xt=function(e){var n,r;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((r=oe(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.description)||oe(e,e.siteData.themeConfig.description)},Jt=function(e){var n,r;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((r=oe(e,e.siteData.themeConfig.hero))===null||r===void 0?void 0:r.actions)||oe(e,e.siteData.themeConfig.actions)},Qt=function(e){var n;return ze(e)?((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||oe(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},qt=function(e){var n=e.siteData.themeConfig.customPages;if(!(!n||n.length===0))return n.find(function(r){return r.path===e.location.pathname})},_t=(0,c.memo)(function(){var t=y(Qt,N()),e=(0,z.Fg)();if(t!=null&&t.length)return(0,o.jsx)(Kt.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),er=_t,nr=s(72819),tr=(0,c.memo)(function(){var t=y(ze),e=y(Yt),n=y(Xt),r=y(Jt);if(t)return(0,o.jsx)(nr.Z,{actions:r,description:n,title:e})}),rr=tr,or=(0,c.memo)(function(){var t=(0,g.useOutlet)();return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)($.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,o.jsx)(rr,{}),(0,o.jsx)(er,{}),t]})}),ar=or,ir=s(41850),lr=s(2957),sr=s(35723),cr=s(59325),ur=function(e){var n=e.github,r={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},a={items:[n&&{icon:(0,o.jsx)(ne.Z,{icon:lr.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,o.jsx)(ne.Z,{icon:sr.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},i={items:[n&&{icon:(0,o.jsx)(ne.Z,{icon:Ze.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:g.Link,icon:(0,o.jsx)(ne.Z,{icon:cr.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},l={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[r,a,i,l]},hn,pn,dr=(0,z.kc)(function(t){var e=t.css,n=t.responsive,r=t.token,a="rc-footer";return{container:e(hn||(hn=j()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),r.colorTextDescription,r.colorSplit,n.mobile),footer:e(pn||(pn=j()([`
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
    `])),r.colorTextSecondary,r.colorBgLayout,a,r.colorTextTertiary,r.colorLinkHover,a,r.contentMaxWidth,r.colorText,r.colorBorderSecondary,n.mobile,a)}}),vr=(0,c.memo)(function(){var t=y(function(x){return x.siteData},N()),e=t.themeConfig,n=t.pkg,r=e.footerConfig,a=e.footer,i=y(Le,_.X),l=dr(),u=l.styles,v=l.theme,d=(0,J.F)(),m=d.mobile;if(a){var h=r!=null&&r.columns?r==null?void 0:r.columns:ur({github:i||n.homepage});r!=null&&r.resources&&(h[0]=r==null?void 0:r.resources),r!=null&&r.moreProducts&&(h[3]=r==null?void 0:r.moreProducts);var f=(r==null?void 0:r.bottom)||a;return(0,o.jsx)(ir.Z,{bottom:m?(0,o.jsxs)(Te.Z,{className:u.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,o.jsx)($.D,{align:"center",dangerouslySetInnerHTML:{__html:f},horizontal:!0})]}):(0,o.jsxs)(Te.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,o.jsx)(Ie.Z,{type:"vertical"}),(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:f}})]}),columns:h,contentMaxWidth:v.contentMaxWidth,theme:v.appearance})}}),mr=vr,hr=s(4413),pr=s(61672),fn,fr=(0,z.kc)(function(t){var e=t.css,n=t.responsive,r=t.token;return e(fn||(fn=j()([`
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
  `])),r.colorText,n.mobile)}),gr=(0,c.memo)(function(){var t=y($e,N()),e=y(function(u){return u.locale},N()),n=fr(),r=n.styles,a=n.cx,i=(0,J.F)(),l=i.mobile;return t&&(0,o.jsx)(g.Link,{className:a(r),to:"base"in e?e.base:"/",children:(0,o.jsxs)(Re.Z,{children:[(0,o.jsx)(pr.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:l?32:36}),t.name]})})}),xr=gr,yr=s(69916),br=s(80326),Sr=s(31125),gn,xn,jr=(0,z.kc)(function(t){var e=t.css,n=t.stylish,r=t.token,a=t.responsive,i=t.prefixCls;return{link:e(gn||(gn=j()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,r.marginXS,r.fontSizeSM,r.colorTextTertiary),tabs:e(xn||(xn=j()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),i,r.colorText,a.mobile)}}),yn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},kr=(0,c.memo)(function(){var t=jr(),e=t.styles,n=(0,g.useLocation)(),r=n.pathname,a=y(function(l){return l.navData},_.X),i=r.split("/").slice(0,2).join("/");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(yr.Z,{activeKey:i,className:e.tabs,items:a.map(function(l){var u=l.activePath||yn(l.link);return{key:Fe(l.link)?l.link:u,label:Fe(l.link)?(0,o.jsxs)("a",{className:e.link,href:String(l.link),onClick:function(d){return d.preventDefault()},rel:"noreferrer",target:l.target||"_blank",children:[(0,o.jsx)("span",{className:"lint-text",children:l.title})," ",(0,o.jsx)(ne.Z,{icon:Sr.Z})]}):(0,o.jsx)(g.Link,{className:e.link,onClick:function(d){return d.preventDefault()},target:l.target,to:String(l.link),children:l.title})}}),onTabClick:function(u){var v=a.find(function(d){return d.activePath===u||d.link===u||yn(d.link)===u});if(v!=null&&v.link){if(Fe(v.link)||v.target==="_blank")return window.open(v.link);g.history.push(v.link)}}}),(0,o.jsx)(br.Z,{})]})}),Cr=kr,Mr=s(19210),Dr=s(57912),bn,Sn,jn,kn,Cn,Lr=(0,z.kc)(function(t){var e=t.token,n=t.responsive,r=t.css,a=t.cx;return{container:r(bn||(bn=j()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:r(Sn||(Sn=j()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:r(jn||(jn=j()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:a("site-header-shortcut",r(kn||(kn=j()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:a(r(Cn||(Cn=j()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Tr=(0,c.memo)(function(){var t=Lr(),e=t.styles,n=(0,c.useState)(!1),r=E()(n,2),a=r[0],i=r[1],l=(0,g.useSiteSearch)(),u=l.keywords,v=l.setKeywords,d=l.result,m=l.loading,h=(0,g.useIntl)();return(0,o.jsxs)("div",{className:e.container,children:[(0,o.jsx)(Mr.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(x){return v(x.target.value)},onFocus:function(){return i(!0)},placeholder:h.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),u.trim()&&a&&(d.length>0||!m)&&(0,o.jsx)("div",{className:e.popover,children:(0,o.jsx)(Dr.Z,{data:d,loading:m})})]})}),Ir=Tr,Br=s(93974),Pr=s(74604),Hr=(0,c.memo)(function(){var t=(0,c.useState)(!1),e=E()(t,2),n=e[0],r=e[1],a=y(function(m){return m.navData},N()),i=y(function(m){return m.sidebar},N()),l=y(function(m){return{activePath:dt(m),pathname:m.location.pathname}},_.X),u=l.pathname,v=l.activePath,d=(0,c.useMemo)(function(){var m=i==null?void 0:i.map(function(h){return!h.link&&{children:h.children.map(function(f){return{key:"s-".concat(f.link),label:(0,o.jsx)(g.Link,{onClick:function(){r(!1)},to:f.link,children:f.title})}}),label:h.title,type:"group"}});return a.map(function(h){return{children:(h.activePath||h.link)===v&&m,key:h.activePath||h.link,label:(0,o.jsx)(g.Link,{to:String(h.link),children:h.title})}})},[a,v,i]);return(0,o.jsx)(Br.Z,{items:d,openKeys:[v],opened:n,selectedKeys:(0,Pr.Z)([v,"s-".concat(u)]),setOpened:r})}),Fr=Hr,Mn=s(86982),wr=s(93910),Dn,Rr=(0,wr.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Zr=(0,z.kc)(function(t){var e=t.css;return e(Dn||(Dn=j()([`
    svg {
      overflow: visible !important;
    }
  `])))}),zr=(0,c.memo)(function(){var t=y(st),e=Zr(),n=e.styles;return t?(0,o.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(Mn.Z,{className:n,icon:Rr,size:"site"})}):void 0}),Or=zr,Er=(0,c.memo)(function(){var t=y(Le);return t?(0,o.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(Mn.Z,{icon:Ze.Z,size:"site"})}):void 0}),Ar=Er,Ur=s(88016),G=s(11348),ge=s(45623),Nr=s(51683),Wr=s(86473),Ln,Tn,In,$r=(0,z.kc)(function(t,e){var n=t.css,r=t.cx,a=t.token;return{active:r("".concat(e,"-item-active"),n(Ln||(Ln=j()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:r("".concat(e,"-item"),n(Tn||(Tn=j()([`
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
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:r("".concat(e,"-item-selected"),n(In||(In=j()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),Gr=["value","label","prefixCls","isSelected","isActive","disabled"],Vr=(0,c.forwardRef)(function(t,e){var n=t.value,r=t.label,a=t.prefixCls,i=t.isSelected,l=t.isActive,u=t.disabled,v=De()(t,Gr),d=$r(a),m=d.styles,h=d.cx;return(0,o.jsx)("button",F()(F()({"aria-selected":i,className:h(m.item,He()(He()({},m.selected,i),m.active,l)),disabled:u,ref:e,role:"option",tabIndex:-1,type:"button"},v),{},{children:r}),n)}),Kr=Vr,Bn,Pn,Yr=(0,z.kc)(function(t,e){var n=t.css,r=t.stylish,a=t.cx,i=t.token;return{button:a("".concat(e,"-button"),n(Bn||(Bn=j()([`
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
    `])),r.buttonDefaultHover,i.fontSize,i.colorTextSecondary,i.colorBgContainer,i.colorBorder,i.borderRadius,i.colorPrimary,i.colorPrimaryBg)),container:a(e,n(Pn||(Pn=j()([`
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
    `])),i.fontSize,i.colorBgElevated,i.colorBorder,i.boxShadowSecondary))}}),Xr=(0,c.memo)(function(t){var e=t.options,n=e===void 0?[]:e,r=t.value,a=t.prefixCls,i=t.onChange,l=t.renderValue,u=t.renderItem,v=t.style,d=a!=null?a:"native-select",m=(0,Wr.Z)(0,{onChange:i,value:r}),h=E()(m,2),f=h[0],x=h[1],D=Yr(d),B=D.styles,L=(0,c.useRef)([]),P=(0,c.useRef)([]),T=(0,c.useRef)(null),C=(0,c.useRef)(!1),R=(0,c.useRef)(!0),O=(0,c.useRef)(),Z=(0,c.useRef)(null),te=(0,c.useState)(!1),I=E()(te,2),H=I[0],V=I[1],A=(0,c.useState)(null),k=E()(A,2),M=k[0],S=k[1],xe=(0,c.useState)(!1),ue=E()(xe,2),le=ue[0],de=ue[1],se=(0,c.useState)(0),ye=E()(se,2),be=ye[0],ce=ye[1],Se=(0,c.useState)(!1),je=E()(Se,2),ve=je[0],me=je[1],ke=(0,c.useState)(!1),he=E()(ke,2),p=he[0],b=he[1];H||(be!==0&&ce(0),le&&de(!1),p&&b(!1));var w=(0,G.YF)({middleware:le?[(0,ge.cv)(5),ve?(0,ge.uY)({crossAxis:!0,padding:10}):(0,ge.RR)({padding:10}),(0,ge.dp)({apply:function(W){var q,Ce,Io=W.availableHeight;Object.assign((q=(Ce=Z.current)===null||Ce===void 0?void 0:Ce.style)!==null&&q!==void 0?q:{},{maxHeight:"".concat(Io,"px")})},padding:10})]:[(0,G.aN)({index:f,listRef:L,minItemsVisible:ve?8:4,offset:be,onFallbackChange:de,overflowRef:T,padding:10,referenceOverflowThreshold:20,scrollRef:Z}),(0,ge.cv)({crossAxis:-4})],onOpenChange:V,open:H,placement:"bottom-start",whileElementsMounted:Nr.Me}),K=w.x,ae=w.y,U=w.strategy,Q=w.refs,Y=w.context,Oe=(0,G.NI)([(0,G.eS)(Y,{event:"mousedown"}),(0,G.bQ)(Y),(0,G.qs)(Y,{role:"listbox"}),(0,G.Rz)(Y,{enabled:!le,onChange:ce,overflowRef:T,scrollRef:Z}),(0,G.c0)(Y,{activeIndex:M,listRef:L,onNavigate:S,selectedIndex:f}),(0,G.ox)(Y,{activeIndex:M,listRef:P,onMatch:H?S:x})]),Co=Oe.getReferenceProps,Mo=Oe.getFloatingProps,Do=Oe.getItemProps;(0,c.useEffect)(function(){if(H)return O.current=setTimeout(function(){C.current=!0},300),function(){clearTimeout(O.current)};C.current=!1,R.current=!0},[H]);var Lo=n[f]||{},To=Lo.label;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",F()(F()({"aria-label":"selected-item",className:B.button,ref:Q.setReference,style:v,type:"button"},Co({onPointerMove:function(W){var q=W.pointerType;q==="mouse"&&me(!1)},onTouchStart:function(){me(!0)}})),{},{children:l?l(f):To})),(0,o.jsx)(G.ll,{children:H&&(0,o.jsx)(G.y0,{lockScroll:!ve,style:{zIndex:3e3},children:(0,o.jsx)(G.wD,{context:Y,initialFocus:-1,modal:!1,children:(0,o.jsx)("div",{ref:Q.setFloating,style:{left:K!=null?K:0,position:U,top:ae!=null?ae:0},children:(0,o.jsx)("div",F()(F()({className:B.container,ref:Z,style:{overflowY:"auto"}},Mo({onContextMenu:function(W){W.preventDefault()}})),{},{children:n.map(function(re,W){return(0,o.jsx)(Kr,F()({disabled:p,isActive:W===M,isSelected:W===f,label:u?u(re,W):re.label,prefixCls:d,ref:function(Ce){L.current[W]=Ce,P.current[W]=re.label},value:re.value},Do({onClick:function(){C.current&&(x(W),V(!1))},onKeyDown:function(){C.current=!0},onMouseUp:function(){R.current&&(C.current&&(x(W),V(!1)),clearTimeout(O.current),O.current=setTimeout(function(){C.current=!0}))},onTouchStart:function(){C.current=!0,R.current=!1}})),re.value)})}))})})})})]})}),Jr=Xr;function Be(t){var e=t.pathname,n=t.current,r=t.target,a="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(r.suffix)}var Qr={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Hn={"en-US":"EN","zh-CN":"\u4E2D"},qr=(0,c.memo)(function(t){var e=t.locale,n=t.current,r=(0,g.useLocation)(),a=r.pathname,i=(0,c.useState)(function(){return Be({current:n,pathname:a,target:e})}),l=E()(i,2),u=l[0],v=l[1];return(0,c.useEffect)(function(){v(Be({current:n,pathname:a,target:e}))},[n,e,a]),(0,o.jsx)(g.Link,{to:u,children:(0,o.jsx)(Ur.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Hn[e.id]})})}),_r=(0,c.memo)(function(){var t=y(function(n){return n.siteData.locales}),e=y(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,o.jsx)(Jr,{onChange:function(r){console.log(Be({current:e,pathname:location.pathname,target:t[r]})),g.history.push(Be({current:e,pathname:location.pathname,target:t[r]}))},options:t.map(function(n){return{label:Hn[n.id],value:n.id}}),renderItem:function(r,a){return"".concat(Qr[t[a].id]," ").concat(t[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,o.jsx)(qr,{current:e,locale:t.find(function(n){var r=n.id;return r!==e.id})})}),eo=_r,no=s(77388),to=(0,c.memo)(function(){var t=(0,we.f)(function(n){return n.themeMode}),e=(0,g.usePrefersColor)()[2];return(0,c.useEffect)(function(){return e(t)},[e,t]),(0,o.jsx)(no.Z,{onThemeSwitch:function(r){we.f.setState({themeMode:r})},themeMode:t})}),Fn=to,ro=(0,c.memo)(function(){var t=y(function(r){return!!r.routeMeta.frontmatter}),e=(0,J.F)(),n=e.mobile;if(t)return(0,o.jsx)(hr.Z,{actions:n?(0,o.jsx)(Fn,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ir,{})," ",(0,o.jsx)(eo,{}),(0,o.jsx)(Ar,{}),(0,o.jsx)(Or,{}),(0,o.jsx)(Fn,{})]}),logo:(0,o.jsx)(xr,{}),nav:n?(0,o.jsx)(Fr,{}):(0,o.jsx)(Cr,{})})}),oo=ro,ao=s(87157),io=s(36177),lo=s(41378),wn=function(){var e=(0,g.useSiteData)(),n=e.themeConfig,r=n;return r},so=s(14582),Rn=s.n(so),co=s(70761),uo={i8:"1.2.0"},vo=function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=Rn()(e),i;try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.key===n)return[].concat(X()(r),[l.key]);if(l.children&&l.children.length>0){var u=t(l.children,n,[].concat(X()(r),[l.key]));if(u)return u}}}catch(v){a.e(v)}finally{a.f()}return null},mo=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,g.useLocation)(),a=r.pathname,i=r.search,l=wn(),u=l.sidebarGroupModePath,v=l.sidebarEnhance,d=v===void 0?{}:v,m=n.before,h=n.after,f=(0,g.useFullSidebarData)(),x=Xn(f),D=(0,g.useLocale)(),B="/".concat((e=a.split("/"))===null||e===void 0?void 0:e[1]),L=x[B],P=(0,c.useMemo)(function(){return Object.values(f).reduce(function(I,H){var V=H.flatMap(function(S){return S.children}),A=Rn()(V),k;try{for(A.s();!(k=A.n()).done;){var M=k.value;I[M.link]=M.title}}catch(S){A.e(S)}finally{A.f()}return I},{})},[f]),T=(0,c.useMemo)(function(){var I=Object.keys(d).find(function(H){return a.startsWith(H)});if(I)return d[I]},[a,d]),C=(0,c.useMemo)(function(){var I=function(M){return M&&pe()(M)==="object"&&"link"in M&&"title"in M},H=function(M){return M&&pe()(M)==="object"&&M.type==="group"},V=function(M){return M&&pe()(M)==="object"&&"children"in M};function A(k){return typeof k=="string"?{key:k,label:(0,o.jsxs)(g.Link,{to:"".concat(k).concat(i),children:[m,P[k],h]})}:H(k)?{type:"group",label:k.title,key:k.title,children:k.children.map(function(M){return A(M)})}:V(k)?{key:k.title,label:(0,o.jsx)("span",{style:{paddingLeft:10},children:k.title}),children:k.children.map(function(M){return A(M)})}:I(k)?{label:(0,o.jsx)(g.Link,{target:k.target,to:k.link,children:k.title}),key:k.link}:null}if(T)return T.map(function(k){return A(k)})},[h,m,T,P,i]),R=(0,c.useMemo)(function(){var I,H,V=new RegExp("".concat((I=D==null?void 0:D.suffix)!==null&&I!==void 0?I:"","$"),"g"),A=X()(L!=null?L:[]),k=function(S){var xe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return S&&xe&&(0,o.jsx)(co.Z,{bordered:!1,color:typeof S=="string"?"processing":S.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof S=="string"?S:S.title).replace("VERSION","v".concat(uo.i8))})};return(H=A==null?void 0:A.reduce(function(M,S){if(S!=null&&S.title){var xe=u===!0?!0:(u!=null?u:[]).some(function(p){return a.startsWith(p)});if(xe){var ue;M.push({type:"group",label:S==null?void 0:S.title,order:S==null?void 0:S.order,key:S==null?void 0:S.title,children:(ue=S.children)===null||ue===void 0?void 0:ue.map(function(p){var b,w;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(p.link).concat(i),children:[m,(0,o.jsx)("span",{children:fe(p==null?void 0:p.title)},"english"),(0,o.jsx)("span",{className:"chinese",children:fe((b=p.frontmatter)===null||b===void 0?void 0:b.subtitle)},"chinese"),k((w=p.frontmatter)===null||w===void 0?void 0:w.tag,!m&&!h),h]}),key:p.link.replace(V,"")}})})}else{var le,de,se={},ye=S.children.reduce(function(p,b){var w,K,ae=p,U=b==null||(w=b.frontmatter)===null||w===void 0?void 0:w.type,Q=typeof U=="string"?U:(K=U==null?void 0:U.title)!==null&&K!==void 0?K:"default";if(ae[Q]||(ae[Q]=[]),se[Q])U!=null&&U.order&&(se[Q].order=U.order);else{var Y;se[Q]={title:Q,order:(Y=U==null?void 0:U.order)!==null&&Y!==void 0?Y:-1}}return ae[Q].push(b),ae},{}),be=Object.keys(ye).sort(function(p,b){return se[p].order-se[b].order}).reduce(function(p,b){var w=p;return w[b]=ye[b],w},{}),ce=[];ce.push.apply(ce,X()((le=(de=be.default)===null||de===void 0?void 0:de.map(function(p){var b;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(p.link).concat(i),children:[m,fe(p==null?void 0:p.title),k((b=p.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!h),h]}),key:p.link.replace(V,"")}}))!==null&&le!==void 0?le:[]));for(var Se=0,je=Object.entries(be);Se<je.length;Se++){var ve=E()(je[Se],2),me=ve[0],ke=ve[1];me!=="default"&&ce.push({type:"group",label:me,key:me,children:ke==null?void 0:ke.map(function(p){var b;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(p.link).concat(i),children:[m,fe(p==null?void 0:p.title),k((b=p.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!h),h]}),key:p.link.replace(V,"")}})})}M.push({label:S==null?void 0:S.title,key:S==null?void 0:S.title,order:S==null?void 0:S.order,children:ce})}}else{var he=S.children||[];he.every(function(p){var b;return p==null||(b=p.frontmatter)===null||b===void 0?void 0:b.date})&&he.sort(function(p,b){var w,K;return(p==null||(w=p.frontmatter)===null||w===void 0?void 0:w.date)>(b==null||(K=b.frontmatter)===null||K===void 0?void 0:K.date)?-1:1}),M.push.apply(M,X()(he.map(function(p){var b;return{order:p==null?void 0:p.order,label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(p.link).concat(i),children:[m,fe(p==null?void 0:p.title),k((b=p.frontmatter)===null||b===void 0?void 0:b.tag,!m&&!h),h]}),key:p.link.replace(V,"")}})))}return M.sort(function(p,b){return(p==null?void 0:p.order)<(b==null?void 0:b.order)?-1:1}),M},[]))!==null&&H!==void 0?H:[]},[L,u,a,i,m,h,D]),O=(0,c.useMemo)(function(){var I;return a.replace(new RegExp("".concat((I=D==null?void 0:D.suffix)!==null&&I!==void 0?I:"","$"),"g"),"")},[D,a]),Z=(0,c.useMemo)(function(){return vo(C||R,O)},[R,O,C]),te=Z==null?void 0:Z.slice(0,-1);return[C||R,O,te]},Zn,zn,On,ho=(0,z.kc)(function(t,e){var n=t.token,r=t.css,a=t.prefixCls,i=e.isSideBarGroupMode;return{asideContainer:r(Zn||(Zn=j()([`
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
      `])),a,a,a,a,a,a,n.colorBorder,a,a,a,n.colorFillSecondary,a,a,a,a,a,!i&&r(zn||(zn=j()([`
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
          `])),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),n.colorTextDisabled),mainMenu:r(On||(On=j()([`
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
      `])),n.headerHeight,n.headerHeight)}}),po=function(){var e=(0,g.useLocation)(),n=e.pathname,r=wn(),a=r.sidebarGroupModePath,i=(0,c.useMemo)(function(){return a===!0?!0:(a!=null?a:[]).some(function(L){return n.startsWith(L)})},[n,a]),l=ho({isSideBarGroupMode:i}),u=l.styles,v=ao.Z.useToken(),d=v.token,m=mo(),h=E()(m,3),f=h[0],x=h[1],D=h[2],B=(0,o.jsx)(io.ZP,{theme:{components:{Menu:{itemBg:d.colorBgLayout,darkItemBg:d.colorBgLayout}}},children:(0,o.jsx)(lo.Z,{className:u.asideContainer,defaultOpenKeys:D,inlineIndent:30,items:f,mode:"inline",selectedKeys:[x]},D==null?void 0:D[0])});return(0,o.jsx)("div",{className:u.mainMenu,children:(0,o.jsx)("section",{className:"main-menu-inner",children:B})})},fo=po,go=s(61882),En=48,xo=(0,c.memo)(function(){var t=y(Ke,N()),e=(0,J.F)(),n=e.mobile,r=(0,z.Fg)(),a=(0,c.useState)(En),i=E()(a,2),l=i[0],u=i[1],v=(0,g.useLocation)();if((0,c.useEffect)(function(){var d=document.querySelector("#api-header");d&&u(d.clientHeight+En)},[v.pathname,v.hash,v.search,t]),!((t==null?void 0:t.length)<1))return(0,o.jsxs)(o.Fragment,{children:[!n&&(0,o.jsx)("div",{style:{height:l}}),(0,o.jsx)(go.Z,{getContainer:function(){return document.body},headerHeight:r.headerHeight,isMobile:n,items:t,tocWidth:r.tocWidth})]})}),yo=xo,bo=(0,c.memo)(function(){var t=(0,g.useIntl)(),e=(0,g.useLocation)(),n=e.hash,r=(0,z.Fg)(),a=(0,J.F)(),i=a.mobile,l=a.laptop,u=y(function(C){var R=C.location.pathname==="/changelog",O=ze(C),Z;return O||C.location.pathname==="/"?Z="home":R?Z="changelog":Z="docs",{loading:C.siteData.loading,noToc:Ke(C).length===0,page:Z,siteTitle:lt(C)}},_.X),v=u.loading,d=u.page,m=u.siteTitle,h=u.noToc,f=y(function(C){return C.routeMeta.frontmatter},N()),x=y(qt),D=d!=="docs"||i||f.sidebar===!1||(x==null?void 0:x.sider)===!1,B=f.toc===!1||h,L=i?B:!l||B,P=(0,c.useCallback)(function(){return(0,o.jsxs)(g.Helmet,{children:[(0,o.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),f.title&&(0,o.jsx)("meta",{content:f.title,property:"og:title"}),f.description&&(0,o.jsx)("meta",{content:f.description,name:"description"}),f.description&&(0,o.jsx)("meta",{content:f.description,property:"og:description"}),f.keywords&&(0,o.jsx)("meta",{content:f.keywords.join(","),name:"keywords"}),f.keywords&&(0,o.jsx)("meta",{content:f.keywords.join(","),property:"og:keywords"}),!f.title||d==="home"?(0,o.jsx)("title",{children:m}):(0,o.jsxs)("title",{children:[f.title," - ",m]})]})},[t,f,m,d]);(0,c.useEffect)(function(){var C=n.replace("#","");C&&setTimeout(function(){var R=document.querySelector("#".concat(decodeURIComponent(C)));R&&(R.scrollIntoView(),window.scrollBy({top:-80}))},1)},[v,n]),(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[m]);var T=(0,g.useOutlet)();return(x==null?void 0:x.header)===!1&&(x==null?void 0:x.sider)===!1&&(x==null?void 0:x.footer)===!1?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),T]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsxs)(xt.ZP,{asideWidth:r.sidebarWidth,footer:(x==null?void 0:x.footer)!==!1&&(0,o.jsx)(mr,{}),header:(x==null?void 0:x.header)!==!1&&(0,o.jsx)(oo,{}),headerHeight:i&&d!=="home"?r.headerHeight+36:r.headerHeight,sidebar:D?void 0:(0,o.jsx)(fo,{}),toc:L?void 0:(0,o.jsx)(yo,{}),tocWidth:L?0:r.tocWidth,children:[x&&T,!x&&d==="home"&&(0,o.jsx)(ar,{}),!x&&d==="changelog"&&(0,o.jsx)(Rt,{}),!x&&d==="docs"&&(0,o.jsx)(Vt,{})]},D?"full":"no-sidebar")]})}),So=bo,jo=(0,c.memo)(function(){var t=(0,we.f)(function(n){return n.themeMode},_.X),e=y(pt.token);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(rt,{}),(0,o.jsxs)(Pe.Z,{customToken:function(r){return Object.assign({},gt(r),e)},themeMode:t,children:[(0,o.jsx)(it,{}),(0,o.jsx)(So,{})]})]})}),ko=jo},37620:function(An,Me,s){s.d(Me,{f:function(){return _}});var Pe=s(32089),c=s(9676),_=(0,c.F)()((0,Pe.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
