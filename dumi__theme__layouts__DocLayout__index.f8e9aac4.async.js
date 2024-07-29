"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{60742:function(Ae,ue,s){s.d(ue,{v:function(){return c}});var fe=s(48073),c=function(){var Pe=(0,fe.useSiteData)(),$=Pe.themeConfig,Be=$;return Be}},78648:function(Ae,ue,s){s.r(ue),s.d(ue,{default:function(){return So}});var fe=s(32905),c=s(92379),J=s(15354),Pe=s(12027),$=s.n(Pe),Be=s(19317),Le=s.n(Be),Un=s(29861),we=s.n(Un),Nn=s(91253),g=s(48073),Wn=s(95490),U=s.n(Wn),Ue=s(32089),Ne=s(9676),$n=s(24325),P=s.n($n),Kn=s(34180),ge=s.n(Kn),Vn=s(28633),z=s.n(Vn),We=typeof window!="undefined",xe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},Gn=function(e){for(var t={},n=function(){var u=z()(i[a],2),m=u[0],d=u[1],v=Object.keys(t);if(m.split("/").length===3){var p,f,T="/".concat(m.split("/")[1]),L=(p=d[0])===null||p===void 0||(p=p.children)===null||p===void 0?void 0:p.find(function(te){var I,H=(I=te.frontmatter)===null||I===void 0?void 0:I.nav;return ge()(H)==="object"&&ge()(H==null?void 0:H.second)==="object"});if(!L){var w;L=(w=d[0])===null||w===void 0?void 0:w.children[0]}var M=(f=L)===null||f===void 0||(f=f.frontmatter)===null||f===void 0?void 0:f.nav,C={order:0,title:void 0};if(typeof M!="string"){var D,F,R,E;C.order=(D=M==null||(F=M.second)===null||F===void 0?void 0:F.order)!==null&&D!==void 0?D:0,C.title=(R=M==null||(E=M.second)===null||E===void 0?void 0:E.title)!==null&&R!==void 0?R:M==null?void 0:M.second}if(v.includes(T)){var N;t[T].push({title:C.title,order:C.order,children:(N=d[0])===null||N===void 0?void 0:N.children})}else t[T]=d.map(function(te){return P()(P()({},te),{},{title:C.title,order:C.order})})}else v.includes(m)?t[m]=[].concat($()(t[m]),$()(d)):t[m]=d},a=0,i=Object.entries(e);a<i.length;a++)n();return t},Re=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},ee={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},Yn=function(){var e=(0,g.useSiteData)(),t=e.themeConfig,n=(0,g.useNavData)(),a=(0,g.useSidebarData)(),i=(0,g.useRouteMeta)(),l=(0,g.useTabMeta)(),u=(0,g.useLocation)(),m=(0,g.useLocale)(),d=(0,g.useIntl)(),v=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:d.formatMessage({id:"header.nav.home"})}},[d]),p=t.hideHomeNav?n:[v].concat($()(n));return P()(P()({},ee),{},{locale:m||ee.locale,location:u||ee.location,navData:p||ee.navData,routeMeta:i||ee.routeMeta,sidebar:a||ee.sidebar,siteData:P()(P()({},ee.siteData),{},{themeConfig:t}),tabMeta:l||ee.tabMeta})},Xn=(0,Ne.F)()((0,Ue.mW)(function(){return ee},{name:"dumi-theme-yunti"})),b=We?Xn:function(r,e){var t=Yn(),n=(0,Ne.F)()((0,Ue.mW)(function(){return t},{name:"dumi-theme-yunti"}));return Object.assign(b,n),n(r,e)},Jn=["setLoading"],Qn=["setLoading"],$e={},qn=function(e,t){(0,c.useEffect)(function(){c.startTransition(function(){e()})},t)},_n=function(e,t){(0,Nn.Z)(function(){e()},t,{maxWait:96,wait:32})},et=typeof c.startTransition=="function"?qn:_n,ie=function(e,t,n){var a=n||function(i,l){var u;return(u=b.setState)===null||u===void 0?void 0:u.call(b,we()({},i,l))};!We&&!$e[e]&&(a(e,t),$e[e]=!0),et(function(){a(e,t)},[t])},nt=function(){var e=(0,g.useSiteData)(),t=(0,g.useSidebarData)(),n=(0,g.useRouteMeta)(),a=(0,g.useTabMeta)(),i=(0,g.useNavData)(),l=(0,g.useLocation)(),u=(0,g.useLocale)(),m=(0,g.useIntl)(),d=(0,c.useMemo)(function(){return{activePath:"/",link:"/",title:m.formatMessage({id:"header.nav.home"})}},[m]);return ie("siteData",e,function(){var v,p,f=e.setLoading,T=Le()(e,Jn),L=((v=b.getState)===null||v===void 0?void 0:v.call(b))||{siteData:{}},w=L.siteData,M=w.setLoading,C=Le()(w,Qn);U()(T,C)||(p=b.setState)===null||p===void 0||p.call(b,{siteData:e})}),ie("sidebar",t),ie("routeMeta",n),ie("location",l),ie("tabMeta",a),ie("locale",u),ie("navData",i,function(){var v,p=e.themeConfig.hideHomeNav?i:[d].concat($()(i));(v=b.setState)===null||v===void 0||v.call(b,{navData:p})}),!1},tt=s(29148),S=s.n(tt),Z=s(15773),Ke,rt=(0,Z.vJ)(Ke||(Ke=S()([`

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




`])),function(r){var e=r.theme;return e.colorText}),ot=rt,Ze=s(37620),Ve=function(e){return e.siteData.themeConfig},at=function(e){return e.siteData.themeConfig.title},Te=function(e){var t;return((t=e.siteData.themeConfig.socialLinks)===null||t===void 0?void 0:t.github)||""},it=function(e){var t;return((t=e.siteData.themeConfig.socialLinks)===null||t===void 0?void 0:t.discord)||""},lt=function(e){return e.siteData.themeConfig.giscus},Ge=function(e){return e===!1?!1:typeof e=="string"},st=function(e){var t,n=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||n.apiHeader===!1)return!1;if(n.apiHeader)return!0;var a=["/api","/components"].concat($()(((t=e.siteData.themeConfig.apiHeader)===null||t===void 0?void 0:t.match)||[]));return a.some(function(i){return e.location.pathname.startsWith(i)})},Ye=function(e){var t,n,a,i,l=Te(e),u=e.routeMeta.frontmatter,m=e.locale.id,d=function(te){return te.replace("{github}",l).replace("{atomId}",u.atomId||"").replace("{title}",u.title).replace("{locale}",m)},v=e.siteData.themeConfig.apiHeader||{},p=v.type,f=p===void 0?"component":p,T=v.pkg,L=T===void 0?e.siteData.pkg.name:T,w=v.sourceUrl,M=v.docUrl,C=((t=u.apiHeader)===null||t===void 0?void 0:t.pkg)||L,D=u.atomId||u.title,F=((n=u.apiHeader)===null||n===void 0?void 0:n.defaultImport)||!1,R=((a=u.apiHeader)===null||a===void 0?void 0:a.sourceUrl)||(Ge(w)?d(w):void 0),E=((i=u.apiHeader)===null||i===void 0?void 0:i.docUrl)||(Ge(M)?d(M):void 0);return{componentName:D,defaultImport:F,description:u.description,docUrl:E,pkg:C,sourceUrl:R,title:u.title,type:f}},ct=function(e){if(e.location.pathname==="/")return"/";var t=e.navData.filter(function(n){return n.link!=="/"}).find(function(n){return e.location.pathname.startsWith(String(n.activePath||n.link))});return(t==null?void 0:t.activePath)||(t==null?void 0:t.link)||""},Xe=function(e){var t,n,a=e.routeMeta,i=a.toc,l=a.frontmatter;(t=e.tabMeta)!==null&&t!==void 0&&t.toc&&(i=e.tabMeta.toc),(n=e.tabMeta)!==null&&n!==void 0&&n.frontmatter&&(l=e.tabMeta.frontmatter);var u=function(d){if(!l.tocDepth||typeof l.tocDepth=="number"&&l.tocDepth>d-1)return!0};return i.reduce(function(m,d){if(d.depth===2&&u(2))m.push(P()({},d));else if(d.depth===3&&u(3)){var v=m.at(-1);v&&(v.children=v.children||[],v.children.push(P()({},d)))}return m},[])},Je=function(e){var t;return((t=e.sidebar)===null||t===void 0?void 0:t.map(function(n){return n.children}).flat())||[]},ut=function(e){var t=Je(e),n=e.location.pathname,a=t.findIndex(function(i){return i.link===n});return{currentIndex:a,next:t[a+1],prev:t[a-1]}},dt=s(82786),vt=function(e){var t=e.routeMeta.frontmatter;return(0,dt.Z)({},t.token,e.siteData.themeConfig.siteToken)},mt={apiHeader:Ye,flattenSidebar:Je,token:vt},pt=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},ht=pt,ft=s(47154),Q=s(83112),Ie=s(20113),ne=s(87308),gt=s(71443),xt=s(96757),yt=s(13200),Fe=s(21976),ze=s(16460),Ee=s(42018),bt=s(92496),K=s(12274),Qe,qe,_e,en,nn,St=(0,Z.kc)(function(r){var e=r.css,t=r.token,n=r.responsive,a=r.stylish;return{desc:e(Qe||(Qe=S()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),t.fontSizeLG,t.lineHeightLG),label:e(qe||(qe=S()([`
    width: 80px;
  `]))),meta:e(_e||(_e=S()([""]))),text:e(en||(en=S()([`
    `,`
  `])),a.resetLinkColor),title:e(nn||(nn=S()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),n.mobile)}}),o=s(651),tn=(0,c.memo)(function(r){var e=r.title,t=r.type,n=r.componentName,a=r.description,i=r.defaultImport,l=r.pkg,u=r.sourceUrl,m=r.docUrl,d=r.serviceList,v=d===void 0?[]:d,p=St(),f=p.styles,T=(0,Q.F)(),L=T.mobile,w=t==="doc",M=[u&&{children:"Source",icon:(0,o.jsx)(ne.Z,{icon:Ee.Z}),url:u},m&&{children:"Edit",icon:(0,o.jsx)(ne.Z,{icon:bt.Z}),url:m}].filter(Boolean),C=i?"import ".concat(n," from '").concat(l,"';"):"import { ".concat(n," } from '").concat(l,"';");return(0,o.jsxs)(K.D,{id:"api-header",style:{marginBottom:24},children:[(0,o.jsx)(yt.Z.Title,{className:f.title,children:e}),a&&(0,o.jsx)(gt.Z,{className:f.desc,children:a}),!w&&(0,o.jsxs)(K.D,{gap:L?16:24,style:{marginTop:16},children:[n&&(0,o.jsx)("div",{style:{display:"flex"},children:(0,o.jsx)(xt.Z,{spotlight:!0,children:C})}),(0,o.jsx)(Fe.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,o.jsxs)(K.D,{distribution:"space-between",gap:L?24:0,horizontal:!L,children:[(0,o.jsx)(ze.Z,{split:(0,o.jsx)(Fe.Z,{type:"vertical"}),wrap:!0,children:v.map(function(D){return(0,o.jsx)("a",{href:D.url,rel:"noreferrer",target:"_blank",title:D.label,children:(0,o.jsxs)(K.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[D.icon,D.children]})},D.label)})}),(0,o.jsx)(ze.Z,{className:f.meta,split:(0,o.jsx)(Fe.Z,{type:"vertical"}),children:M.map(function(D,F){return(0,o.jsx)("a",{href:D.url,rel:"noreferrer",target:"_blank",children:(0,o.jsxs)(K.D,{align:"center",className:f.text,gap:8,horizontal:!0,children:[D.icon,D.children]})},F)})})]})]})]})}),rn,on,an,ln=(0,Z.kc)(function(r){var e=r.cx,t=r.css,n=r.token,a=r.stylish;return{background:e(a.gradientAnimation,t(rn||(rn=S()([`
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
    `])))),changelog:t(on||(on=S()([`
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
  `])),n.colorTextDescription,n.colorBorderSecondary),content:t(an||(an=S()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),n.contentMaxWidth)}}),jt=s(1863),kt=s(59017),Ct=s(83994),Mt=s(25220),sn,cn,un,dn,Dt=(0,Z.kc)(function(r){var e=r.token,t=r.css;return{alignmentEnd:t(sn||(sn=S()([`
    justify-content: flex-end;
  `]))),container:t(cn||(cn=S()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(un||(un=S()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:t(dn||(dn=S()([`
    font-size: 16px;
  `])))}}),Lt=(0,c.memo)(function(r){var e=r.title,t=r.link,n=r.type,a=Dt(),i=a.styles,l=a.cx,u=(0,g.useIntl)(),m=(0,c.useMemo)(function(){switch(n){case"prev":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ne.Z,{icon:Ct.Z}),(0,o.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{style:{lineHeight:1},children:u.formatMessage({id:"content.footer.actions.next"})}),(0,o.jsx)(ne.Z,{icon:Mt.Z})]})}},[u,n]);return(0,o.jsx)(g.Link,{to:t,children:(0,o.jsxs)(K.D,{className:i.container,gap:8,children:[(0,o.jsx)(K.D,{className:l(i.nav,n==="next"&&i.alignmentEnd),gap:4,horizontal:!0,children:m}),(0,o.jsx)(K.D,{className:l(i.title,n==="next"&&i.alignmentEnd),horizontal:!0,children:e})]})})}),vn=Lt,Tt=(0,c.memo)(function(){var r=b(ut,U()),e=r.prev,t=r.next,n=(0,Q.F)(),a=n.mobile;return(0,o.jsxs)(K.D,{distribution:"space-between",gap:a?12:0,horizontal:!a,style:{margin:a?12:0},children:[e?(0,o.jsx)(vn,P()({type:"prev"},e)):(0,o.jsx)("div",{}),t?(0,o.jsx)(vn,P()({type:"next"},t)):(0,o.jsx)("div",{})]})}),It=Tt,mn,pn,Ft=(0,Z.kc)(function(r,e){var t=r.cx,n=r.token,a=r.responsive,i=r.css;return{content:t(!e&&i(mn||(mn=S()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),n.colorBgContainer,a.mobile),i(pn||(pn=S()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Ht=["children"],Pt=(0,c.memo)(function(r){var e=r.children,t=Le()(r,Ht),n=b(function(p){return p.siteData.loading}),a=b(Ve,U()),i=a.docStyle,l=Ft(i==="pure"),u=l.styles,m=l.cx,d=(0,Q.F)(),v=d.mobile;return(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[n]),(0,o.jsxs)(K.D,P()(P()({gap:v?0:24,width:"100%"},t),{},{children:[(0,o.jsxs)("div",{className:m("dumi-antd-style-content",u.content),children:[(0,o.jsx)(kt.Z,{active:!0,loading:n,paragraph:!0}),(0,o.jsx)(jt.Z,{style:{display:n?"none":void 0},children:e})]}),(0,o.jsx)(It,{})]}))}),hn=Pt,Bt=(0,c.memo)(function(){var r=(0,g.useOutlet)(),e=(0,Q.F)(),t=e.mobile,n=b(function(d){return{repoBase:Te(d)}},J.X),a=n.repoBase,i=b(function(d){return{fm:d.routeMeta.frontmatter}},U()),l=i.fm,u=ln(),m=u.styles;return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:m.background}),(0,o.jsxs)(Ie.Z,{className:m.content,style:{padding:t?0:24},children:[(0,o.jsx)("div",{style:{padding:t?16:0,width:"100%"},children:(0,o.jsx)(tn,{description:l.description,docUrl:"".concat(a,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(a,"/blob/master/CHANGELOG.md"),title:l.title})}),(0,o.jsx)(hn,{className:m.changelog,children:r})]})]})}),wt=Bt,Rt=s(96320),Zt=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),zt=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Et=(0,c.memo)(function(){return(0,o.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,o.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Ot=(0,c.memo)(function(){return(0,o.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"main",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,o.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),At=(0,c.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Ut=(0,c.memo)(function(){var r=b(Ye,U()),e=r.pkg,t=(0,c.useMemo)(function(){var n=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,o.jsx)(Et,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(n)},{children:"UNPKG",icon:(0,o.jsx)(At,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(n,"/")},{children:"BundlePhobia",icon:(0,o.jsx)(Zt,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(n)},{children:"PackagePhobia",icon:(0,o.jsx)(Ot,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(n)},{children:"Anvaka Graph",icon:(0,o.jsx)(zt,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(n))}]},[e]);return(0,o.jsx)(tn,P()({serviceList:t},r))}),Nt=Ut,Wt=(0,c.memo)(function(){var r=(0,g.useOutlet)(),e=(0,g.useLocation)(),t=(0,Q.F)(),n=t.mobile,a=b(function(v){return{giscus:lt(v),isApiPage:st(v)}},J.X),i=a.isApiPage,l=a.giscus,u=ln(),m=u.styles;(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var d=(0,c.useCallback)(function(){return l&&(0,o.jsx)("div",{style:{marginTop:64},children:(0,o.jsx)(Rt.Z,{category:l.category,categoryId:l.categoryId,id:"lobehub",mapping:"title",repo:l.repo,repoId:l.repoId})})},[l,e.pathname]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:m.background}),(0,o.jsxs)(Ie.Z,{className:m.content,style:{marginBottom:48,padding:n?0:24},children:[i?(0,o.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,o.jsx)(Nt,{})}):void 0,(0,o.jsxs)(hn,{children:[r,l&&(0,o.jsx)(d,{})]})]})]})}),$t=Wt,Kt=s(63613),fn=function(e){return!!e.routeMeta.frontmatter.hero},oe=function(e,t){if(t)return t[e.locale.id]?t[e.locale.id]:t},Vt=function(e){var t,n;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.title)||((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.title)||oe(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},Gt=function(e){var t,n;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.description)||((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.description)||oe(e,e.siteData.themeConfig.description)},Yt=function(e){var t,n;return((t=e.routeMeta.frontmatter.hero)===null||t===void 0?void 0:t.actions)||((n=oe(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.actions)||oe(e,e.siteData.themeConfig.actions)},Xt=function(e){var t;return fn(e)?((t=oe(e,e.siteData.themeConfig.hero))===null||t===void 0?void 0:t.features)||oe(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},Jt=(0,c.memo)(function(){var r=b(Xt,U()),e=(0,Z.Fg)();if(r!=null&&r.length)return(0,o.jsx)(Kt.Z,{items:r,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),Qt=Jt,qt=s(39060),_t=(0,c.memo)(function(){var r=b(Vt),e=b(Gt),t=b(Yt);return(0,o.jsx)(qt.Z,{actions:t,description:e,title:r})}),er=_t,nr=(0,c.memo)(function(){var r=(0,g.useOutlet)();return(0,c.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)(K.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,o.jsx)(er,{}),(0,o.jsx)(Qt,{}),r]})}),tr=nr,rr=s(13262),or=s(2957),ar=s(35723),ir=s(59325),lr=function(e){var t=e.github,n={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},a={items:[t&&{icon:(0,o.jsx)(ne.Z,{icon:or.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(t,"/issues/new/choose")},t&&{icon:(0,o.jsx)(ne.Z,{icon:ar.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(t,"/issues/new/choose")}].filter(Boolean),title:"Community"},i={items:[t&&{icon:(0,o.jsx)(ne.Z,{icon:Ee.Z,size:"small"}),openExternal:!0,title:"GitHub",url:t},{LinkComponent:g.Link,icon:(0,o.jsx)(ne.Z,{icon:ir.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},l={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[n,a,i,l]},gn,xn,sr=(0,Z.kc)(function(r){var e=r.css,t=r.responsive,n=r.token,a="rc-footer";return{container:e(gn||(gn=S()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),n.colorTextDescription,n.colorSplit,t.mobile),footer:e(xn||(xn=S()([`
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
    `])),n.colorTextSecondary,n.colorBgLayout,a,n.colorTextTertiary,n.colorLinkHover,a,n.contentMaxWidth,n.colorText,n.colorBorderSecondary,t.mobile,a)}}),cr=(0,c.memo)(function(){var r=b(function(T){return T.siteData},U()),e=r.themeConfig,t=r.pkg,n=e.footerConfig,a=e.footer,i=b(Te,J.X),l=sr(),u=l.styles,m=l.theme,d=(0,Q.F)(),v=d.mobile;if(a){var p=n!=null&&n.columns?n==null?void 0:n.columns:lr({github:i||t.homepage});n!=null&&n.resources&&(p[0]=n==null?void 0:n.resources),n!=null&&n.moreProducts&&(p[3]=n==null?void 0:n.moreProducts);var f=(n==null?void 0:n.bottom)||a;return(0,o.jsx)(rr.Z,{bottom:v?(0,o.jsxs)(Ie.Z,{className:u.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,o.jsx)(K.D,{align:"center",dangerouslySetInnerHTML:{__html:f},horizontal:!0})]}):(0,o.jsxs)(Ie.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,o.jsx)(Fe.Z,{type:"vertical"}),(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:f}})]}),columns:p,contentMaxWidth:m.contentMaxWidth,theme:m.appearance})}}),ur=cr,dr=s(42178),vr=s(43677),yn,mr=(0,Z.kc)(function(r){var e=r.css,t=r.responsive,n=r.token;return e(yn||(yn=S()([`
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
  `])),n.colorText,t.mobile)}),pr=(0,c.memo)(function(){var r=b(Ve,U()),e=b(function(u){return u.locale},U()),t=mr(),n=t.styles,a=t.cx,i=(0,Q.F)(),l=i.mobile;return r&&(0,o.jsx)(g.Link,{className:a(n),to:"base"in e?e.base:"/",children:(0,o.jsxs)(ze.Z,{children:[(0,o.jsx)(vr.Z,{avatar:r.logo||"https://avatars.githubusercontent.com/u/148947838",size:l?32:36}),r.name]})})}),hr=pr,fr=s(12106),gr=s(32125),xr=s(31125),bn,Sn,yr=(0,Z.kc)(function(r){var e=r.css,t=r.stylish,n=r.token,a=r.responsive,i=r.prefixCls;return{link:e(bn||(bn=S()([`
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
    `])),t.resetLinkColor,t.resetLinkColor,n.marginXS,n.fontSizeSM,n.colorTextTertiary),tabs:e(Sn||(Sn=S()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),i,n.colorText,a.mobile)}}),jn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},br=(0,c.memo)(function(){var r=yr(),e=r.styles,t=(0,g.useLocation)(),n=t.pathname,a=b(function(l){return l.navData},J.X),i=n.split("/").slice(0,2).join("/");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(fr.Z,{activeKey:i,className:e.tabs,items:a.map(function(l){var u=l.activePath||jn(l.link);return{key:Re(l.link)?l.link:u,label:Re(l.link)?(0,o.jsxs)("a",{className:e.link,href:String(l.link),onClick:function(d){return d.preventDefault()},rel:"noreferrer",target:"_blank",children:[(0,o.jsx)("span",{className:"lint-text",children:l.title})," ",(0,o.jsx)(ne.Z,{icon:xr.Z})]}):(0,o.jsx)(g.Link,{className:e.link,onClick:function(d){return d.preventDefault()},to:String(l.link),children:l.title})}}),onTabClick:function(u){var m,d=(m=a.find(function(v){return v.activePath===u||v.link===u||jn(v.link)===u}))===null||m===void 0?void 0:m.link;if(d){if(Re(d))return window.open(d);g.history.push(d)}}}),(0,o.jsx)(gr.Z,{})]})}),Sr=br,jr=s(1721),kr=s(68386),kn,Cn,Mn,Dn,Ln,Cr=(0,Z.kc)(function(r){var e=r.token,t=r.responsive,n=r.css,a=r.cx;return{container:n(kn||(kn=S()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),input:n(Cn||(Cn=S()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:n(Mn||(Mn=S()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:a("site-header-shortcut",n(Dn||(Dn=S()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),svg:a(n(Ln||(Ln=S()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Mr=(0,c.memo)(function(){var r=Cr(),e=r.styles,t=(0,c.useState)(!1),n=z()(t,2),a=n[0],i=n[1],l=(0,g.useSiteSearch)(),u=l.keywords,m=l.setKeywords,d=l.result,v=l.loading,p=(0,g.useIntl)();return(0,o.jsxs)("div",{className:e.container,children:[(0,o.jsx)(jr.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(T){return m(T.target.value)},onFocus:function(){return i(!0)},placeholder:p.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),u.trim()&&a&&(d.length>0||!v)&&(0,o.jsx)("div",{className:e.popover,children:(0,o.jsx)(kr.Z,{data:d,loading:v})})]})}),Dr=Mr,Lr=s(97394),Tr=s(5529),Ir=(0,c.memo)(function(){var r=(0,c.useState)(!1),e=z()(r,2),t=e[0],n=e[1],a=b(function(v){return v.navData},U()),i=b(function(v){return v.sidebar},U()),l=b(function(v){return{activePath:ct(v),pathname:v.location.pathname}},J.X),u=l.pathname,m=l.activePath,d=(0,c.useMemo)(function(){var v=i==null?void 0:i.map(function(p){return!p.link&&{children:p.children.map(function(f){return{key:"s-".concat(f.link),label:(0,o.jsx)(g.Link,{onClick:function(){n(!1)},to:f.link,children:f.title})}}),label:p.title,type:"group"}});return a.map(function(p){return{children:(p.activePath||p.link)===m&&v,key:p.activePath||p.link,label:(0,o.jsx)(g.Link,{to:String(p.link),children:p.title})}})},[a,m,i]);return(0,o.jsx)(Lr.Z,{items:d,openKeys:[m],opened:t,selectedKeys:(0,Tr.Z)([m,"s-".concat(u)]),setOpened:n})}),Fr=Ir,Tn=s(90906),Hr=s(93910),In,Pr=(0,Hr.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Br=(0,Z.kc)(function(r){var e=r.css;return e(In||(In=S()([`
    svg {
      overflow: visible !important;
    }
  `])))}),wr=(0,c.memo)(function(){var r=b(it),e=Br(),t=e.styles;return r?(0,o.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(Tn.Z,{className:t,icon:Pr,size:"site"})}):void 0}),Rr=wr,Zr=(0,c.memo)(function(){var r=b(Te);return r?(0,o.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(Tn.Z,{icon:Ee.Z,size:"site"})}):void 0}),zr=Zr,Er=s(86772),V=s(11348),ye=s(45623),Or=s(51683),Ar=s(86473),Fn,Hn,Pn,Ur=(0,Z.kc)(function(r,e){var t=r.css,n=r.cx,a=r.token;return{active:n("".concat(e,"-item-active"),t(Fn||(Fn=S()([`
      background: `,`;
    `])),a.colorFillTertiary)),item:n("".concat(e,"-item"),t(Hn||(Hn=S()([`
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
    `])),a.fontFamily,a.colorText,a.colorFillTertiary)),selected:n("".concat(e,"-item-selected"),t(Pn||(Pn=S()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),a.colorPrimaryText,a.colorPrimaryBg,a.colorPrimaryTextHover,a.colorPrimaryBgHover))}}),Nr=["value","label","prefixCls","isSelected","isActive","disabled"],Wr=(0,c.forwardRef)(function(r,e){var t=r.value,n=r.label,a=r.prefixCls,i=r.isSelected,l=r.isActive,u=r.disabled,m=Le()(r,Nr),d=Ur(a),v=d.styles,p=d.cx;return(0,o.jsx)("button",P()(P()({"aria-selected":i,className:p(v.item,we()(we()({},v.selected,i),v.active,l)),disabled:u,ref:e,role:"option",tabIndex:-1,type:"button"},m),{},{children:n}),t)}),$r=Wr,Bn,wn,Kr=(0,Z.kc)(function(r,e){var t=r.css,n=r.stylish,a=r.cx,i=r.token;return{button:a("".concat(e,"-button"),t(Bn||(Bn=S()([`
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
    `])),n.buttonDefaultHover,i.fontSize,i.colorTextSecondary,i.colorBgContainer,i.colorBorder,i.borderRadius,i.colorPrimary,i.colorPrimaryBg)),container:a(e,t(wn||(wn=S()([`
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
    `])),i.fontSize,i.colorBgElevated,i.colorBorder,i.boxShadowSecondary))}}),Vr=(0,c.memo)(function(r){var e=r.options,t=e===void 0?[]:e,n=r.value,a=r.prefixCls,i=r.onChange,l=r.renderValue,u=r.renderItem,m=r.style,d=a!=null?a:"native-select",v=(0,Ar.Z)(0,{onChange:i,value:n}),p=z()(v,2),f=p[0],T=p[1],L=Kr(d),w=L.styles,M=(0,c.useRef)([]),C=(0,c.useRef)([]),D=(0,c.useRef)(null),F=(0,c.useRef)(!1),R=(0,c.useRef)(!0),E=(0,c.useRef)(),N=(0,c.useRef)(null),te=(0,c.useState)(!1),I=z()(te,2),H=I[0],G=I[1],O=(0,c.useState)(null),j=z()(O,2),k=j[0],y=j[1],be=(0,c.useState)(!1),de=z()(be,2),le=de[0],ve=de[1],se=(0,c.useState)(0),Se=z()(se,2),je=Se[0],ce=Se[1],ke=(0,c.useState)(!1),Ce=z()(ke,2),me=Ce[0],pe=Ce[1],Me=(0,c.useState)(!1),he=z()(Me,2),h=he[0],x=he[1];H||(je!==0&&ce(0),le&&ve(!1),h&&x(!1));var B=(0,V.YF)({middleware:le?[(0,ye.cv)(5),me?(0,ye.uY)({crossAxis:!0,padding:10}):(0,ye.RR)({padding:10}),(0,ye.dp)({apply:function(W){var _,De,Lo=W.availableHeight;Object.assign((_=(De=N.current)===null||De===void 0?void 0:De.style)!==null&&_!==void 0?_:{},{maxHeight:"".concat(Lo,"px")})},padding:10})]:[(0,V.aN)({index:f,listRef:M,minItemsVisible:me?8:4,offset:je,onFallbackChange:ve,overflowRef:D,padding:10,referenceOverflowThreshold:20,scrollRef:N}),(0,ye.cv)({crossAxis:-4})],onOpenChange:G,open:H,placement:"bottom-start",whileElementsMounted:Or.Me}),Y=B.x,ae=B.y,A=B.strategy,q=B.refs,X=B.context,Oe=(0,V.NI)([(0,V.eS)(X,{event:"mousedown"}),(0,V.bQ)(X),(0,V.qs)(X,{role:"listbox"}),(0,V.Rz)(X,{enabled:!le,onChange:ce,overflowRef:D,scrollRef:N}),(0,V.c0)(X,{activeIndex:k,listRef:M,onNavigate:y,selectedIndex:f}),(0,V.ox)(X,{activeIndex:k,listRef:C,onMatch:H?y:T})]),jo=Oe.getReferenceProps,ko=Oe.getFloatingProps,Co=Oe.getItemProps;(0,c.useEffect)(function(){if(H)return E.current=setTimeout(function(){F.current=!0},300),function(){clearTimeout(E.current)};F.current=!1,R.current=!0},[H]);var Mo=t[f]||{},Do=Mo.label;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",P()(P()({"aria-label":"selected-item",className:w.button,ref:q.setReference,style:m,type:"button"},jo({onPointerMove:function(W){var _=W.pointerType;_==="mouse"&&pe(!1)},onTouchStart:function(){pe(!0)}})),{},{children:l?l(f):Do})),(0,o.jsx)(V.ll,{children:H&&(0,o.jsx)(V.y0,{lockScroll:!me,style:{zIndex:3e3},children:(0,o.jsx)(V.wD,{context:X,initialFocus:-1,modal:!1,children:(0,o.jsx)("div",{ref:q.setFloating,style:{left:Y!=null?Y:0,position:A,top:ae!=null?ae:0},children:(0,o.jsx)("div",P()(P()({className:w.container,ref:N,style:{overflowY:"auto"}},ko({onContextMenu:function(W){W.preventDefault()}})),{},{children:t.map(function(re,W){return(0,o.jsx)($r,P()({disabled:h,isActive:W===k,isSelected:W===f,label:u?u(re,W):re.label,prefixCls:d,ref:function(De){M.current[W]=De,C.current[W]=re.label},value:re.value},Co({onClick:function(){F.current&&(T(W),G(!1))},onKeyDown:function(){F.current=!0},onMouseUp:function(){R.current&&(F.current&&(T(W),G(!1)),clearTimeout(E.current),E.current=setTimeout(function(){F.current=!0}))},onTouchStart:function(){F.current=!0,R.current=!1}})),re.value)})}))})})})})]})}),Gr=Vr;function He(r){var e=r.pathname,t=r.current,n=r.target,a="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in n?"".concat(n.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(n.suffix)}var Yr={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Rn={"en-US":"EN","zh-CN":"\u4E2D"},Xr=(0,c.memo)(function(r){var e=r.locale,t=r.current,n=(0,g.useLocation)(),a=n.pathname,i=(0,c.useState)(function(){return He({current:t,pathname:a,target:e})}),l=z()(i,2),u=l[0],m=l[1];return(0,c.useEffect)(function(){m(He({current:t,pathname:a,target:e}))},[t,e,a]),(0,o.jsx)(g.Link,{to:u,children:(0,o.jsx)(Er.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Rn[e.id]})})}),Jr=(0,c.memo)(function(){var r=b(function(t){return t.siteData.locales}),e=b(function(t){return t.locale});if(!(r.length<=1))return r.length>2?(0,o.jsx)(Gr,{onChange:function(n){console.log(He({current:e,pathname:location.pathname,target:r[n]})),g.history.push(He({current:e,pathname:location.pathname,target:r[n]}))},options:r.map(function(t){return{label:Rn[t.id],value:t.id}}),renderItem:function(n,a){return"".concat(Yr[r[a].id]," ").concat(r[a].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:r.findIndex(function(t){return t.id===e.id})}):(0,o.jsx)(Xr,{current:e,locale:r.find(function(t){var n=t.id;return n!==e.id})})}),Qr=Jr,qr=s(37073),_r=(0,c.memo)(function(){var r=(0,Ze.f)(function(t){return t.themeMode}),e=(0,g.usePrefersColor)()[2];return(0,c.useEffect)(function(){return e(r)},[e,r]),(0,o.jsx)(qr.Z,{onThemeSwitch:function(n){Ze.f.setState({themeMode:n})},themeMode:r})}),Zn=_r,eo=(0,c.memo)(function(){var r=b(function(n){return!!n.routeMeta.frontmatter}),e=(0,Q.F)(),t=e.mobile;if(r)return(0,o.jsx)(dr.Z,{actions:t?(0,o.jsx)(Zn,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Dr,{})," ",(0,o.jsx)(Qr,{}),(0,o.jsx)(zr,{}),(0,o.jsx)(Rr,{}),(0,o.jsx)(Zn,{})]}),logo:(0,o.jsx)(hr,{}),nav:t?(0,o.jsx)(Fr,{}):(0,o.jsx)(Sr,{})})}),no=eo,to=s(97949),ro=s(11236),oo=s(46311),ao=s(14582),zn=s.n(ao),io=s(96516),lo={i8:"1.1.2"},so=s(60742),co=function r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a=zn()(e),i;try{for(a.s();!(i=a.n()).done;){var l=i.value;if(l.key===t)return[].concat($()(n),[l.key]);if(l.children&&l.children.length>0){var u=r(l.children,t,[].concat($()(n),[l.key]));if(u)return u}}}catch(m){a.e(m)}finally{a.f()}return null},uo=function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=(0,g.useLocation)(),a=n.pathname,i=n.search,l=(0,so.v)(),u=l.sidebarGroupModePath,m=l.sidebarEnhance,d=m===void 0?{}:m,v=t.before,p=t.after,f=(0,g.useFullSidebarData)(),T=Gn(f),L=(0,g.useLocale)(),w="/".concat((e=a.split("/"))===null||e===void 0?void 0:e[1]),M=T[w],C=(0,c.useMemo)(function(){return Object.values(f).reduce(function(I,H){var G=H.flatMap(function(y){return y.children}),O=zn()(G),j;try{for(O.s();!(j=O.n()).done;){var k=j.value;I[k.link]=k.title}}catch(y){O.e(y)}finally{O.f()}return I},{})},[f]),D=(0,c.useMemo)(function(){var I=Object.keys(d).find(function(H){return a.startsWith(H)});if(I)return d[I]},[a,d]),F=(0,c.useMemo)(function(){var I=function(k){return k&&ge()(k)==="object"&&"link"in k&&"title"in k},H=function(k){return k&&ge()(k)==="object"&&k.type==="group"},G=function(k){return k&&ge()(k)==="object"&&"children"in k};function O(j){return typeof j=="string"?{key:j,label:(0,o.jsxs)(g.Link,{to:"".concat(j).concat(i),children:[v,C[j],p]})}:H(j)?{type:"group",label:j.title,key:j.title,children:j.children.map(function(k){return O(k)})}:G(j)?{key:j.title,label:(0,o.jsx)("span",{style:{paddingLeft:10},children:j.title}),children:j.children.map(function(k){return O(k)})}:I(j)?{label:(0,o.jsx)(g.Link,{target:j.target,to:j.link,children:j.title}),key:j.link}:null}if(D)return D.map(function(j){return O(j)})},[p,v,D,C,i]),R=(0,c.useMemo)(function(){var I,H,G=new RegExp("".concat((I=L==null?void 0:L.suffix)!==null&&I!==void 0?I:"","$"),"g"),O=$()(M!=null?M:[]),j=function(y){var be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return y&&be&&(0,o.jsx)(io.Z,{bordered:!1,color:typeof y=="string"?"processing":y.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof y=="string"?y:y.title).replace("VERSION","v".concat(lo.i8))})};return(H=O==null?void 0:O.reduce(function(k,y){if(y!=null&&y.title){var be=u===!0?!0:(u!=null?u:[]).some(function(h){return a.startsWith(h)});if(be){var de;k.push({type:"group",label:y==null?void 0:y.title,order:y==null?void 0:y.order,key:y==null?void 0:y.title,children:(de=y.children)===null||de===void 0?void 0:de.map(function(h){var x,B;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,(0,o.jsx)("span",{children:xe(h==null?void 0:h.title)},"english"),(0,o.jsx)("span",{className:"chinese",children:xe((x=h.frontmatter)===null||x===void 0?void 0:x.subtitle)},"chinese"),j((B=h.frontmatter)===null||B===void 0?void 0:B.tag,!v&&!p),p]}),key:h.link.replace(G,"")}})})}else{var le,ve,se={},Se=y.children.reduce(function(h,x){var B,Y,ae=h,A=x==null||(B=x.frontmatter)===null||B===void 0?void 0:B.type,q=typeof A=="string"?A:(Y=A==null?void 0:A.title)!==null&&Y!==void 0?Y:"default";if(ae[q]||(ae[q]=[]),se[q])A!=null&&A.order&&(se[q].order=A.order);else{var X;se[q]={title:q,order:(X=A==null?void 0:A.order)!==null&&X!==void 0?X:-1}}return ae[q].push(x),ae},{}),je=Object.keys(Se).sort(function(h,x){return se[h].order-se[x].order}).reduce(function(h,x){var B=h;return B[x]=Se[x],B},{}),ce=[];ce.push.apply(ce,$()((le=(ve=je.default)===null||ve===void 0?void 0:ve.map(function(h){var x;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,xe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(G,"")}}))!==null&&le!==void 0?le:[]));for(var ke=0,Ce=Object.entries(je);ke<Ce.length;ke++){var me=z()(Ce[ke],2),pe=me[0],Me=me[1];pe!=="default"&&ce.push({type:"group",label:pe,key:pe,children:Me==null?void 0:Me.map(function(h){var x;return{label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,xe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(G,"")}})})}k.push({label:y==null?void 0:y.title,key:y==null?void 0:y.title,order:y==null?void 0:y.order,children:ce})}}else{var he=y.children||[];he.every(function(h){var x;return h==null||(x=h.frontmatter)===null||x===void 0?void 0:x.date})&&he.sort(function(h,x){var B,Y;return(h==null||(B=h.frontmatter)===null||B===void 0?void 0:B.date)>(x==null||(Y=x.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),k.push.apply(k,$()(he.map(function(h){var x;return{order:h==null?void 0:h.order,label:(0,o.jsxs)(g.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(h.link).concat(i),children:[v,xe(h==null?void 0:h.title),j((x=h.frontmatter)===null||x===void 0?void 0:x.tag,!v&&!p),p]}),key:h.link.replace(G,"")}})))}return k.sort(function(h,x){return(h==null?void 0:h.order)<(x==null?void 0:x.order)?-1:1}),k},[]))!==null&&H!==void 0?H:[]},[M,u,a,i,v,p,L]),E=(0,c.useMemo)(function(){var I;return a.replace(new RegExp("".concat((I=L==null?void 0:L.suffix)!==null&&I!==void 0?I:"","$"),"g"),"")},[L,a]),N=(0,c.useMemo)(function(){return co(F||R,E)},[R,E,F]),te=N==null?void 0:N.slice(0,-1);return[F||R,E,te]},En,On,vo=(0,Z.kc)(function(r){var e=r.token,t=r.css,n=r.prefixCls;return{asideContainer:t(En||(En=S()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

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

        > .`,"-menu-item-group > .",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            content: '';

            position: relative;
            top: 12px;

            display: block;

            width: calc(100% - 20px);
            height: 1px;

            background: `,`;
          }
        }

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
        > .`,`-menu-item {
          height: 40px;
          line-height: 40px;
        }
        .`,"-menu-inline .",`-menu-item {
          height: 40px;
          line-height: 40px;
        }
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
    `])),e.fontFamily,n,n,n,n,n,n,n,e.colorSplit,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,e.colorFillSecondary,n,n,n,n,n,e.colorTextDisabled),mainMenu:t(On||(On=S()([`
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
    `])),e.headerHeight,e.headerHeight)}}),mo=function(){var e=vo(),t=e.styles,n=to.Z.useToken(),a=n.token,i=uo(),l=z()(i,3),u=l[0],m=l[1],d=l[2],v=(0,o.jsx)(ro.ZP,{theme:{components:{Menu:{itemBg:a.colorBgLayout,darkItemBg:a.colorBgLayout}}},children:(0,o.jsx)(oo.Z,{className:t.asideContainer,defaultOpenKeys:d,inlineIndent:30,items:u,mode:"inline",selectedKeys:[m]},d==null?void 0:d[0])});return(0,o.jsx)("div",{className:t.mainMenu,children:(0,o.jsx)("section",{className:"main-menu-inner",children:v})})},po=mo,ho=s(75786),An=48,fo=(0,c.memo)(function(){var r=b(Xe,U()),e=(0,Q.F)(),t=e.mobile,n=(0,Z.Fg)(),a=(0,c.useState)(An),i=z()(a,2),l=i[0],u=i[1],m=(0,g.useLocation)();if((0,c.useEffect)(function(){var d=document.querySelector("#api-header");d&&u(d.clientHeight+An)},[m.pathname,m.hash,m.search,r]),!((r==null?void 0:r.length)<1))return(0,o.jsxs)(o.Fragment,{children:[!t&&(0,o.jsx)("div",{style:{height:l}}),(0,o.jsx)(ho.Z,{getContainer:function(){return document.body},headerHeight:n.headerHeight,isMobile:t,items:r,tocWidth:n.tocWidth})]})}),go=fo,xo=(0,c.memo)(function(){var r=(0,g.useIntl)(),e=(0,g.useLocation)(),t=e.hash,n=(0,Z.Fg)(),a=(0,Q.F)(),i=a.mobile,l=a.laptop,u=b(function(C){var D=C.location.pathname==="/changelog",F=fn(C),R;return F?R="home":D?R="changelog":R="docs",{loading:C.siteData.loading,noToc:Xe(C).length===0,page:R,siteTitle:at(C)}},J.X),m=u.loading,d=u.page,v=u.siteTitle,p=u.noToc,f=b(function(C){return C.routeMeta.frontmatter},U()),T=d!=="docs"||i||f.sidebar===!1,L=f.toc===!1||p,w=i?L:!l||L,M=(0,c.useCallback)(function(){return(0,o.jsxs)(g.Helmet,{children:[(0,o.jsx)("html",{lang:r.locale.replace(/-.+$/,"")}),f.title&&(0,o.jsx)("meta",{content:f.title,property:"og:title"}),f.description&&(0,o.jsx)("meta",{content:f.description,name:"description"}),f.description&&(0,o.jsx)("meta",{content:f.description,property:"og:description"}),f.keywords&&(0,o.jsx)("meta",{content:f.keywords.join(","),name:"keywords"}),f.keywords&&(0,o.jsx)("meta",{content:f.keywords.join(","),property:"og:keywords"}),!f.title||d==="home"?(0,o.jsx)("title",{children:v}):(0,o.jsxs)("title",{children:[f.title," - ",v]})]})},[r,f,v,d]);return(0,c.useEffect)(function(){var C=t.replace("#","");C&&setTimeout(function(){var D=document.querySelector("#".concat(decodeURIComponent(C)));D&&(D.scrollIntoView(),window.scrollBy({top:-80}))},1)},[m,t]),(0,c.useEffect)(function(){document.body.scrollTo(0,0)},[v]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M,{}),(0,o.jsxs)(ft.ZP,{asideWidth:n.sidebarWidth,footer:(0,o.jsx)(ur,{}),header:(0,o.jsx)(no,{}),headerHeight:i&&d!=="home"?n.headerHeight+36:n.headerHeight,sidebar:T?void 0:(0,o.jsx)(po,{}),toc:w?void 0:(0,o.jsx)(go,{}),tocWidth:w?0:n.tocWidth,children:[d==="home"&&(0,o.jsx)(tr,{}),d==="changelog"&&(0,o.jsx)(wt,{}),d==="docs"&&(0,o.jsx)($t,{})]},T?"full":"no-sidebar")]})}),yo=xo,bo=(0,c.memo)(function(){var r=(0,Ze.f)(function(t){return t.themeMode},J.X),e=b(mt.token);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(nt,{}),(0,o.jsxs)(fe.Z,{customToken:function(n){return Object.assign({},ht(n),e)},themeMode:r,children:[(0,o.jsx)(ot,{}),(0,o.jsx)(yo,{})]})]})}),So=bo},37620:function(Ae,ue,s){s.d(ue,{f:function(){return J}});var fe=s(32089),c=s(9676),J=(0,c.F)()((0,fe.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
