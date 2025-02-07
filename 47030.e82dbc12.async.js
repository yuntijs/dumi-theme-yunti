"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[47030],{58610:function(E,p,r){var n=r(92379),c=function(i){var f=document.createElement("link");return f.rel="stylesheet",f.href=i,f},l=(0,n.memo)(function(t){var i=t.url,f=(0,n.useRef)(!1);return(0,n.useEffect)(function(){if(!f.current){f.current=!0;var d=c(i);document.head.append(d)}},[]),null});p.Z=l},29552:function(E,p,r){r.d(p,{Z:function(){return un}});var n=r(32710),c=r(81622),l=r(31898),t=r(23820),i=r(92379),f=r(8838),d=r(58610),o=r(49114),m=r(71696),s=r(85394),v=r(84972),b=r(30249),g=(0,s.z)({appearance:"dark",scale:b._.bnw,type:"Primary"}),u=(0,s.N)({appearance:"dark",scale:b._.gray}),e=(0,s.z)({appearance:"dark",scale:b._.lime,type:"Success"}),y=(0,s.z)({appearance:"dark",scale:b._.gold,type:"Warning"}),Z=(0,s.z)({appearance:"dark",scale:b._.red,type:"Error"}),k=(0,s.z)({appearance:"dark",scale:b._.blue,type:"Info"}),A=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},g),u),e),y),Z),k),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:k.colorInfoText,colorLinkActive:k.colorInfoTextActive,colorLinkHover:k.colorInfoTextHover,colorTextLightSolid:u.colorBgLayout}),z=A,w=function(C,B){var M=C.primaryColor,V=C.neutralColor,U={},H={},G=b._[M];G&&(U=(0,s.z)({appearance:"dark",scale:G,type:"Primary"}));var K=v.H[V];return K&&(H=(0,s.N)({appearance:"dark",scale:K})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},B),z),U),H)},O=(0,s.z)({appearance:"light",scale:b._.bnw,type:"Primary"}),R=(0,s.N)({appearance:"light",scale:b._.gray}),L=(0,s.z)({appearance:"light",scale:b._.green,type:"Success"}),_=(0,s.z)({appearance:"light",scale:b._.orange,type:"Warning"}),F=(0,s.z)({appearance:"light",scale:b._.volcano,type:"Error"}),I=(0,s.z)({appearance:"light",scale:b._.geekblue,type:"Info"}),J=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},O),R),L),_),F),I),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:I.colorInfoText,colorLinkActive:I.colorInfoTextActive,colorLinkHover:I.colorInfoTextHover,colorTextLightSolid:R.colorBgLayout}),q=J,nn=function(C,B){var M=C.primaryColor,V=C.neutralColor,U={},H={},G=b._[M];G&&(U=(0,s.z)({appearance:"light",scale:G,type:"Primary"}));var K=v.H[V];return K&&(H=(0,s.N)({appearance:"light",scale:K})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},B),q),U),H)},Y='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',rn='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',W='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',X="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Q={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[rn,W,Y].join(","),fontFamilyCode:[X,W,Y].join(",")},en=function(C){var B=C.neutralColor,M=C.appearance,V=C.primaryColor,U=M==="dark";return{algorithm:U?w:nn,token:(0,n.Z)((0,n.Z)({},Q),{},{neutralColor:B,primaryColor:V})}},N=r(21394),x=r(79385),S,T=function(a){return(0,t.iv)(S||(S=(0,N.Z)([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding-block: 4px;
    padding-inline: 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }
`])),a.prefixCls,(0,x.XV)(a.colorPrimary),a.prefixCls,a.prefixCls,(0,x.XV)(a.colorPrimary),(0,x.XV)(a.colorPrimary),(0,x.XV)(a.colorPrimaryActive),a.prefixCls,a.colorBgLayout,a.colorText,a.borderRadiusSM,a.prefixCls,a.colorText,a.prefixCls,a.colorBgContainer,a.prefixCls,a.prefixCls,a.prefixCls,a.stylish.blur,a.borderRadiusLG,(0,x.m4)(a.colorBgMask,.1),a.prefixCls,a.colorBorderSecondary,a.boxShadowSecondary,a.prefixCls,a.colorBorderSecondary,a.borderRadius,a.boxShadowSecondary)},j,an=function(a){return(0,t.iv)(j||(j=(0,N.Z)([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),a.isDarkMode?"dark":"light",a.fontFamily,a.fontSize,a.colorTextBase,a.colorBgLayout,a.fontFamilyCode,a.fontFamilyCode,a.yellow9,a.colorFill)},on=(0,t.vJ)(function(a){var C=a.theme;return[an(C),T(C)]}),sn=on,$=r(651),bn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],dn=(0,i.memo)(function(a){var C=a.children,B=a.customStylish,M=a.customToken,V=a.enableWebfonts,U=V===void 0?!0:V,H=a.enableGlobalStyle,G=H===void 0?!0:H,K=a.webfonts,fn=a.customTheme,tn=fn===void 0?{}:fn,gn=a.className,mn=a.style,pn=(0,c.Z)(a,bn),ln=(0,f.nc)(),cn=K||[ln({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),ln({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),ln({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),ln({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],vn=(0,i.useCallback)(function(D){return(0,n.Z)((0,n.Z)({},(0,o.V)(D)),B==null?void 0:B(D))},[B]),xn=(0,i.useCallback)(function(D){return(0,n.Z)((0,n.Z)({},(0,m.W)(D)),M==null?void 0:M(D))},[M]),hn=(0,i.useCallback)(function(D){return en({appearance:D,neutralColor:tn.neutralColor,primaryColor:tn.primaryColor})},[tn.primaryColor,tn.neutralColor]);return(0,$.jsxs)($.Fragment,{children:[U&&(cn==null?void 0:cn.length)>0&&cn.map(function(D){return(0,$.jsx)(d.Z,{url:D},D)}),(0,$.jsx)(t.V9,{speedy:!0,children:(0,$.jsxs)(t.f6,(0,n.Z)((0,n.Z)({customStylish:vn,customToken:xn},pn),{},{theme:hn,children:[G&&(0,$.jsx)(sn,{}),(0,$.jsx)(l.Z,{className:gn,style:(0,n.Z)({minHeight:"inherit",width:"inherit"},mn),children:C})]}))})]})});dn.displayName="LobeThemeProvider";var un=dn},85394:function(E,p,r){r.d(p,{N:function(){return t},z:function(){return l}});var n=r(88941),c=r(2027),l=function(f){var d=f.type,o=f.scale,m=f.appearance,s=(0,c.Z)(d),v=m==="dark";return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},"color".concat(s,"Bg"),o[m][1]),"color".concat(s,"BgHover"),o[m][2]),"color".concat(s,"Border"),o[m][4]),"color".concat(s,"BorderHover"),o[m][v?5:3]),"color".concat(s,"Hover"),o[m][v?10:8]),"color".concat(s),o[m][9]),"color".concat(s,"Active"),o[m][v?7:10]),"color".concat(s,"TextHover"),o[m][v?10:8]),"color".concat(s,"Text"),o[m][9]),"color".concat(s,"TextActive"),o[m][v?7:10])},t=function(f){var d=f.scale,o=f.appearance;return{colorBgContainer:o==="dark"?d[o][1]:d[o][0],colorBgElevated:o==="dark"?d[o][2]:d[o][0],colorBgLayout:o==="dark"?d[o][0]:d[o][1],colorBgMask:d.lightA[8],colorBgSpotlight:d[o][5],colorBorder:d[o][4],colorBorderSecondary:d[o][3],colorFill:d["".concat(o,"A")][3],colorFillQuaternary:d["".concat(o,"A")][0],colorFillSecondary:d["".concat(o,"A")][2],colorFillTertiary:d["".concat(o,"A")][1],colorText:d[o][12],colorTextQuaternary:d[o][6],colorTextSecondary:d[o][10],colorTextTertiary:d[o][8]}}},84972:function(E,p,r){r.d(p,{H:function(){return n}});var n={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},49114:function(E,p,r){r.d(p,{V:function(){return v}});var n=r(21394),c=r(23820),l,t,i,f,d,o,m,s,v=function(g){var u=g.css,e=g.token,y=g.isDarkMode,Z=(0,c.F4)(l||(l=(0,n.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:u(t||(t=(0,n.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:u(i||(i=(0,n.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:u(f||(f=(0,n.Z)([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),e.colorFill,e.motionEaseOut),gradientAnimation:u(d||(d=(0,n.Z)([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),e.gold,e.magenta,e.geekblue,e.cyan,Z),markdown:u(o||(o=(0,n.Z)([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),e.colorTextSecondary,e.colorTextDescription,e.fontFamilyCode,e.colorFillSecondary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorBgLayout,y?e.colorText:"#333",y?e.colorTextSecondary:"#000",y?e.colorTextSecondary:"#000",e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorFillTertiary,e.colorBorderSecondary,e.borderRadius,e.fontFamily,e.colorTextSecondary,e.colorTextSecondary,e.motionEaseOut,e.colorBorder,e.colorFillTertiary,e.borderRadius,e.colorBorderSecondary,e.colorFillQuaternary,e.colorBorderSecondary,e.fontFamilyCode),noScrollbar:u(m||(m=(0,n.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:u(s||(s=(0,n.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),e.colorTextSecondary,e.colorText)}}},71696:function(E,p,r){r.d(p,{W:function(){return m}});var n=r(52525),c=r(32710),l=r(83891),t=r(88941),i=r(8920),f=r(30249),d=function(v){var b,g=v.name,u=v.scale,e=v.appearance;return b={},(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)(b,"".concat(g,"Bg"),u["".concat(e,"A")][1]),"".concat(g,"BgHover"),u["".concat(e,"A")][2]),"".concat(g,"Border"),u[e][4]),"".concat(g,"BorderSecondary"),u[e][3]),"".concat(g,"BorderHover"),u[e][5]),"".concat(g,"Hover"),u[e][10]),"".concat(g),u[e][9]),"".concat(g,"Active"),u[e][7]),"".concat(g,"TextHover"),u["".concat(e,"A")][10]),"".concat(g,"Text"),u["".concat(e,"A")][9]),(0,t.Z)(b,"".concat(g,"TextActive"),u["".concat(e,"A")][7])},o=function(v){var b=v.name,g=v.scale,u=v.appearance,e={},y=(0,l.Z)(g[u].entries()),Z;try{for(y.s();!(Z=y.n()).done;){var k=(0,n.Z)(Z.value,2),A=k[0],z=k[1];A===0||A===12||(e["".concat(b).concat(A)]=z)}}catch(F){y.e(F)}finally{y.f()}var w=(0,l.Z)(g["".concat(u,"A")].entries()),O;try{for(w.s();!(O=w.n()).done;){var R=(0,n.Z)(O.value,2),L=R[0],_=R[1];L===0||L===12||(e["".concat(b).concat(L,"A")]=_)}}catch(F){w.e(F)}finally{w.f()}return(0,c.Z)((0,c.Z)({},e),d({appearance:u,name:b,scale:g}))},m=function(v){for(var b=v.isDarkMode,g={},u=0,e=Object.entries(f._);u<e.length;u++){var y=(0,n.Z)(e[u],2),Z=y[0],k=y[1];g=(0,c.Z)((0,c.Z)({},g),o({appearance:b?"dark":"light",name:(0,i.Z)(Z),scale:k}))}return g}},31898:function(E,p,r){r.d(p,{Z:function(){return y}});var n=r(92379),c=r(80324),l=r.n(c),t=r(71776),i=r(65709),f=r(31495),d=r(93052),o=r(99362),m=r(34828),s=r(66723);const v=Z=>{const{componentCls:k,colorText:A,fontSize:z,lineHeight:w,fontFamily:O}=Z;return{[k]:{color:A,fontSize:z,lineHeight:w,fontFamily:O,[`&${k}-rtl`]:{direction:"rtl"}}}},b=()=>({});var g=(0,s.I$)("App",v,b);const u=()=>n.useContext(m.Z),e=Z=>{const{prefixCls:k,children:A,className:z,rootClassName:w,message:O,notification:R,style:L,component:_="div"}=Z,{direction:F,getPrefixCls:I}=(0,n.useContext)(i.E_),J=I("app",k),[q,nn,Y]=g(J),rn=l()(nn,J,z,w,Y,{[`${J}-rtl`]:F==="rtl"}),W=(0,n.useContext)(m.J),X=n.useMemo(()=>({message:Object.assign(Object.assign({},W.message),O),notification:Object.assign(Object.assign({},W.notification),R)}),[O,R,W.message,W.notification]),[Q,en]=(0,f.Z)(X.message),[N,x]=(0,o.Z)(X.notification),[S,T]=(0,d.Z)(),j=n.useMemo(()=>({message:Q,notification:N,modal:S}),[Q,N,S]);(0,t.ln)("App")(!(Y&&_===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const an=_===!1?n.Fragment:_,on={className:rn,style:L};return q(n.createElement(m.Z.Provider,{value:j},n.createElement(m.J.Provider,{value:X},n.createElement(an,Object.assign({},_===!1?void 0:on),T,en,x,A))))};e.useApp=u;var y=e},95490:function(E){E.exports=function p(r,n){if(r===n)return!0;if(r&&n&&typeof r=="object"&&typeof n=="object"){if(r.constructor!==n.constructor)return!1;var c,l,t;if(Array.isArray(r)){if(c=r.length,c!=n.length)return!1;for(l=c;l--!==0;)if(!p(r[l],n[l]))return!1;return!0}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===n.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===n.toString();if(t=Object.keys(r),c=t.length,c!==Object.keys(n).length)return!1;for(l=c;l--!==0;)if(!Object.prototype.hasOwnProperty.call(n,t[l]))return!1;for(l=c;l--!==0;){var i=t[l];if(!p(r[i],n[i]))return!1}return!0}return r!==r&&n!==n}},90759:function(E,p){function r(n,c,l,t){var i=-1,f=n==null?0:n.length;for(t&&f&&(l=n[++i]);++i<f;)l=c(l,n[i],i,n);return l}p.Z=r},74780:function(E,p){function r(n,c,l){var t=-1,i=n.length;c<0&&(c=-c>i?0:i+c),l=l>i?i:l,l<0&&(l+=i),i=c>l?0:l-c>>>0,c>>>=0;for(var f=Array(i);++t<i;)f[t]=n[t+c];return f}p.Z=r},30159:function(E,p){var r="\\ud800-\\udfff",n="\\u0300-\\u036f",c="\\ufe20-\\ufe2f",l="\\u20d0-\\u20ff",t=n+c+l,i="\\ufe0e\\ufe0f",f="\\u200d",d=RegExp("["+f+r+t+i+"]");function o(m){return d.test(m)}p.Z=o},8920:function(E,p,r){r.d(p,{Z:function(){return Tn}});var n=r(2027),c=r(90759);function l(h){return function(P){return h==null?void 0:h[P]}}var t=l,i={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},f=t(i),d=f,o=r(82e3),m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s="\\u0300-\\u036f",v="\\ufe20-\\ufe2f",b="\\u20d0-\\u20ff",g=s+v+b,u="["+g+"]",e=RegExp(u,"g");function y(h){return h=(0,o.Z)(h),h&&h.replace(m,d).replace(e,"")}var Z=y,k=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function A(h){return h.match(k)||[]}var z=A,w=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function O(h){return w.test(h)}var R=O,L="\\ud800-\\udfff",_="\\u0300-\\u036f",F="\\ufe20-\\ufe2f",I="\\u20d0-\\u20ff",J=_+F+I,q="\\u2700-\\u27bf",nn="a-z\\xdf-\\xf6\\xf8-\\xff",Y="\\xac\\xb1\\xd7\\xf7",rn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",W="\\u2000-\\u206f",X=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="A-Z\\xc0-\\xd6\\xd8-\\xde",en="\\ufe0e\\ufe0f",N=Y+rn+W+X,x="['\u2019]",S="["+N+"]",T="["+J+"]",j="\\d+",an="["+q+"]",on="["+nn+"]",sn="[^"+L+N+j+q+nn+Q+"]",$="\\ud83c[\\udffb-\\udfff]",bn="(?:"+T+"|"+$+")",dn="[^"+L+"]",un="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",C="["+Q+"]",B="\\u200d",M="(?:"+on+"|"+sn+")",V="(?:"+C+"|"+sn+")",U="(?:"+x+"(?:d|ll|m|re|s|t|ve))?",H="(?:"+x+"(?:D|LL|M|RE|S|T|VE))?",G=bn+"?",K="["+en+"]?",fn="(?:"+B+"(?:"+[dn,un,a].join("|")+")"+K+G+")*",tn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",mn=K+G+fn,pn="(?:"+[an,un,a].join("|")+")"+mn,ln=RegExp([C+"?"+on+"+"+U+"(?="+[S,C,"$"].join("|")+")",V+"+"+H+"(?="+[S,C+M,"$"].join("|")+")",C+"?"+M+"+"+U,C+"+"+H,gn,tn,j,pn].join("|"),"g");function cn(h){return h.match(ln)||[]}var vn=cn;function xn(h,P,yn){return h=(0,o.Z)(h),P=yn?void 0:P,P===void 0?R(h)?vn(h):z(h):h.match(P)||[]}var hn=xn,D="['\u2019]",Cn=RegExp(D,"g");function kn(h){return function(P){return(0,c.Z)(hn(Z(P).replace(Cn,"")),h,"")}}var Sn=kn,Zn=Sn(function(h,P,yn){return P=P.toLowerCase(),h+(yn?(0,n.Z)(P):P)}),Tn=Zn},2027:function(E,p,r){r.d(p,{Z:function(){return N}});var n=r(82e3),c=r(74780);function l(x,S,T){var j=x.length;return T=T===void 0?j:T,!S&&T>=j?x:(0,c.Z)(x,S,T)}var t=l,i=r(30159);function f(x){return x.split("")}var d=f,o="\\ud800-\\udfff",m="\\u0300-\\u036f",s="\\ufe20-\\ufe2f",v="\\u20d0-\\u20ff",b=m+s+v,g="\\ufe0e\\ufe0f",u="["+o+"]",e="["+b+"]",y="\\ud83c[\\udffb-\\udfff]",Z="(?:"+e+"|"+y+")",k="[^"+o+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",z="[\\ud800-\\udbff][\\udc00-\\udfff]",w="\\u200d",O=Z+"?",R="["+g+"]?",L="(?:"+w+"(?:"+[k,A,z].join("|")+")"+R+O+")*",_=R+O+L,F="(?:"+[k+e+"?",e,A,z,u].join("|")+")",I=RegExp(y+"(?="+y+")|"+F+_,"g");function J(x){return x.match(I)||[]}var q=J;function nn(x){return(0,i.Z)(x)?q(x):d(x)}var Y=nn;function rn(x){return function(S){S=(0,n.Z)(S);var T=(0,i.Z)(S)?Y(S):void 0,j=T?T[0]:S.charAt(0),an=T?t(T,1).join(""):S.slice(1);return j[x]()+an}}var W=rn,X=W("toUpperCase"),Q=X;function en(x){return Q((0,n.Z)(x).toLowerCase())}var N=en}}]);
