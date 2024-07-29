"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[9724],{32266:function(E,h,r){var n=r(92379),g=function(b){var v=document.createElement("link");return v.rel="stylesheet",v.href=b,v},s=(0,n.memo)(function(t){var b=t.url,v=(0,n.useRef)(!1);return(0,n.useEffect)(function(){if(!v.current){v.current=!0;var c=g(b);document.head.append(c)}},[]),null});h.Z=s},32905:function(E,h,r){r.d(h,{Z:function(){return C}});var n=r(32710),g=r(81622),s=r(56314),t=r(56751),b=r(92379),v=r(95906),c=r(32266),o=r(93393),m=r(55575),i=r(28955),x=r(4283),l=r(86902),f=(0,i.z)({appearance:"dark",scale:l._.bnw,type:"Primary"}),d=(0,i.N)({appearance:"dark",scale:l._.gray}),a=(0,i.z)({appearance:"dark",scale:l._.lime,type:"Success"}),S=(0,i.z)({appearance:"dark",scale:l._.gold,type:"Warning"}),Z=(0,i.z)({appearance:"dark",scale:l._.red,type:"Error"}),T=(0,i.z)({appearance:"dark",scale:l._.blue,type:"Info"}),R=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},f),d),a),S),Z),T),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:T.colorInfoText,colorLinkActive:T.colorInfoTextActive,colorLinkHover:T.colorInfoTextHover,colorTextLightSolid:d.colorBgLayout}),D=R,w=function(u,y){var k=u.primaryColor,_=u.neutralColor,H={},N={},G=l._[k];G&&(H=(0,i.z)({appearance:"dark",scale:G,type:"Primary"}));var K=x.H[_];return K&&(N=(0,i.N)({appearance:"dark",scale:K})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},y),D),H),N)},M=(0,i.z)({appearance:"light",scale:l._.bnw,type:"Primary"}),L=(0,i.N)({appearance:"light",scale:l._.gray}),U=(0,i.z)({appearance:"light",scale:l._.green,type:"Success"}),A=(0,i.z)({appearance:"light",scale:l._.orange,type:"Warning"}),P=(0,i.z)({appearance:"light",scale:l._.volcano,type:"Error"}),F=(0,i.z)({appearance:"light",scale:l._.geekblue,type:"Info"}),Q=(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},M),L),U),A),P),F),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:F.colorInfoText,colorLinkActive:F.colorInfoTextActive,colorLinkHover:F.colorInfoTextHover,colorTextLightSolid:L.colorBgLayout}),$=Q,V=function(u,y){var k=u.primaryColor,_=u.neutralColor,H={},N={},G=l._[k];G&&(H=(0,i.z)({appearance:"light",scale:G,type:"Primary"}));var K=x.H[_];return K&&(N=(0,i.N)({appearance:"light",scale:K})),(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},y),$),H),N)},J='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',I='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',W='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',q="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",tn={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[I,W,J].join(","),fontFamilyCode:[q,W,J].join(",")},Y=function(u){var y=u.neutralColor,k=u.appearance,_=u.primaryColor,H=k==="dark";return{algorithm:H?w:V,token:(0,n.Z)((0,n.Z)({},tn),{},{neutralColor:y,primaryColor:_})}},nn=r(21394),z=r(36122),X,rn=function(e){return(0,t.iv)(X||(X=(0,nn.Z)([`
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
`])),e.prefixCls,(0,z.XV)(e.colorPrimary),e.prefixCls,e.prefixCls,(0,z.XV)(e.colorPrimary),(0,z.XV)(e.colorPrimary),(0,z.XV)(e.colorPrimaryActive),e.prefixCls,e.colorBgLayout,e.colorText,e.borderRadiusSM,e.prefixCls,e.colorText,e.prefixCls,e.colorBgContainer,e.prefixCls,e.prefixCls,e.prefixCls,e.stylish.blur,e.borderRadiusLG,(0,z.m4)(e.colorBgMask,.1),e.prefixCls,e.colorBorderSecondary,e.boxShadowSecondary,e.prefixCls,e.colorBorderSecondary,e.borderRadius,e.boxShadowSecondary)},en,an=function(e){return(0,t.iv)(en||(en=(0,nn.Z)([`
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
`])),e.isDarkMode?"dark":"light",e.fontFamily,e.fontSize,e.colorTextBase,e.colorBgLayout,e.fontFamilyCode,e.fontFamilyCode,e.yellow9,e.colorFill)},fn=(0,t.vJ)(function(e){var u=e.theme;return[an(u),rn(u)]}),ln=fn,j=r(651),bn=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],cn=(0,b.memo)(function(e){var u=e.children,y=e.customStylish,k=e.customToken,_=e.enableWebfonts,H=_===void 0?!0:_,N=e.enableGlobalStyle,G=N===void 0?!0:N,K=e.webfonts,gn=e.customTheme,sn=gn===void 0?{}:gn,pn=e.className,vn=e.style,xn=(0,g.Z)(e,bn),dn=(0,v.nc)(),un=K||[dn({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),dn({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),dn({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),dn({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],hn=(0,b.useCallback)(function(B){return(0,n.Z)((0,n.Z)({},(0,o.V)(B)),y==null?void 0:y(B))},[y]),yn=(0,b.useCallback)(function(B){return(0,n.Z)((0,n.Z)({},(0,m.W)(B)),k==null?void 0:k(B))},[k]),Cn=(0,b.useCallback)(function(B){return Y({appearance:B,neutralColor:sn.neutralColor,primaryColor:sn.primaryColor})},[sn.primaryColor,sn.neutralColor]);return(0,j.jsxs)(j.Fragment,{children:[H&&(un==null?void 0:un.length)>0&&un.map(function(B){return(0,j.jsx)(c.Z,{url:B},B)}),(0,j.jsx)(t.V9,{speedy:!0,children:(0,j.jsxs)(t.f6,(0,n.Z)((0,n.Z)({customStylish:hn,customToken:yn},xn),{},{theme:Cn,children:[G&&(0,j.jsx)(ln,{}),(0,j.jsx)(s.Z,{className:pn,style:(0,n.Z)({minHeight:"inherit",width:"inherit"},vn),children:u})]}))})]})});cn.displayName="LobeThemeProvider";var C=cn},28955:function(E,h,r){r.d(h,{N:function(){return t},z:function(){return s}});var n=r(88941),g=r(51172),s=function(v){var c=v.type,o=v.scale,m=v.appearance,i=(0,g.Z)(c),x=m==="dark";return(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},"color".concat(i,"Bg"),o[m][1]),"color".concat(i,"BgHover"),o[m][2]),"color".concat(i,"Border"),o[m][4]),"color".concat(i,"BorderHover"),o[m][x?5:3]),"color".concat(i,"Hover"),o[m][x?10:8]),"color".concat(i),o[m][9]),"color".concat(i,"Active"),o[m][x?7:10]),"color".concat(i,"TextHover"),o[m][x?10:8]),"color".concat(i,"Text"),o[m][9]),"color".concat(i,"TextActive"),o[m][x?7:10])},t=function(v){var c=v.scale,o=v.appearance;return{colorBgContainer:o==="dark"?c[o][1]:c[o][0],colorBgElevated:o==="dark"?c[o][2]:c[o][0],colorBgLayout:o==="dark"?c[o][0]:c[o][1],colorBgMask:c.lightA[8],colorBgSpotlight:c[o][5],colorBorder:c[o][4],colorBorderSecondary:c[o][3],colorFill:c["".concat(o,"A")][3],colorFillQuaternary:c["".concat(o,"A")][0],colorFillSecondary:c["".concat(o,"A")][2],colorFillTertiary:c["".concat(o,"A")][1],colorText:c[o][12],colorTextQuaternary:c[o][6],colorTextSecondary:c[o][10],colorTextTertiary:c[o][8]}}},4283:function(E,h,r){r.d(h,{H:function(){return n}});var n={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}}},93393:function(E,h,r){r.d(h,{V:function(){return x}});var n=r(21394),g=r(56751),s,t,b,v,c,o,m,i,x=function(f){var d=f.css,a=f.token,S=f.isDarkMode,Z=(0,g.F4)(s||(s=(0,n.Z)([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:d(t||(t=(0,n.Z)([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:d(b||(b=(0,n.Z)([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:d(v||(v=(0,n.Z)([`
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
    `])),a.colorFill,a.motionEaseOut),gradientAnimation:d(c||(c=(0,n.Z)([`
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
    `])),a.gold,a.magenta,a.geekblue,a.cyan,Z),markdown:d(o||(o=(0,n.Z)([`
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
    `])),a.colorTextSecondary,a.colorTextDescription,a.fontFamilyCode,a.colorFillSecondary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorBgLayout,S?a.colorText:"#333",S?a.colorTextSecondary:"#000",S?a.colorTextSecondary:"#000",a.colorTextSecondary,a.colorBorder,a.colorBorderSecondary,a.colorFillTertiary,a.colorBorderSecondary,a.borderRadius,a.fontFamily,a.colorTextSecondary,a.colorTextSecondary,a.motionEaseOut,a.colorBorder,a.colorFillTertiary,a.borderRadius,a.colorBorderSecondary,a.colorFillQuaternary,a.colorBorderSecondary,a.fontFamilyCode),noScrollbar:d(m||(m=(0,n.Z)([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:d(i||(i=(0,n.Z)([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),a.colorTextSecondary,a.colorText)}}},55575:function(E,h,r){r.d(h,{W:function(){return m}});var n=r(52525),g=r(32710),s=r(83891),t=r(88941),b=r(43849),v=r(86902),c=function(x){var l,f=x.name,d=x.scale,a=x.appearance;return l={},(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)(l,"".concat(f,"Bg"),d["".concat(a,"A")][1]),"".concat(f,"BgHover"),d["".concat(a,"A")][2]),"".concat(f,"Border"),d[a][4]),"".concat(f,"BorderSecondary"),d[a][3]),"".concat(f,"BorderHover"),d[a][5]),"".concat(f,"Hover"),d[a][10]),"".concat(f),d[a][9]),"".concat(f,"Active"),d[a][7]),"".concat(f,"TextHover"),d["".concat(a,"A")][10]),"".concat(f,"Text"),d["".concat(a,"A")][9]),(0,t.Z)(l,"".concat(f,"TextActive"),d["".concat(a,"A")][7])},o=function(x){var l=x.name,f=x.scale,d=x.appearance,a={},S=(0,s.Z)(f[d].entries()),Z;try{for(S.s();!(Z=S.n()).done;){var T=(0,n.Z)(Z.value,2),R=T[0],D=T[1];R===0||R===12||(a["".concat(l).concat(R)]=D)}}catch(P){S.e(P)}finally{S.f()}var w=(0,s.Z)(f["".concat(d,"A")].entries()),M;try{for(w.s();!(M=w.n()).done;){var L=(0,n.Z)(M.value,2),U=L[0],A=L[1];U===0||U===12||(a["".concat(l).concat(U,"A")]=A)}}catch(P){w.e(P)}finally{w.f()}return(0,g.Z)((0,g.Z)({},a),c({appearance:d,name:l,scale:f}))},m=function(x){for(var l=x.isDarkMode,f={},d=0,a=Object.entries(v._);d<a.length;d++){var S=(0,n.Z)(a[d],2),Z=S[0],T=S[1];f=(0,g.Z)((0,g.Z)({},f),o({appearance:l?"dark":"light",name:(0,b.Z)(Z),scale:T}))}return f}},56314:function(E,h,r){r.d(h,{Z:function(){return S}});var n=r(92379),g=r(80324),s=r.n(g),t=r(11619),b=r(40711),v=r(95417),c=r(17041),o=r(88801),m=r(9742),i=r(77821);const x=Z=>{const{componentCls:T,colorText:R,fontSize:D,lineHeight:w,fontFamily:M}=Z;return{[T]:{color:R,fontSize:D,lineHeight:w,fontFamily:M}}},l=()=>({});var f=(0,i.I$)("App",x,l);const d=()=>n.useContext(m.Z),a=Z=>{const{prefixCls:T,children:R,className:D,rootClassName:w,message:M,notification:L,style:U,component:A="div"}=Z,{getPrefixCls:P}=(0,n.useContext)(b.E_),F=P("app",T),[Q,$,V]=f(F),J=s()($,F,D,w,V),I=(0,n.useContext)(m.J),W=n.useMemo(()=>({message:Object.assign(Object.assign({},I.message),M),notification:Object.assign(Object.assign({},I.notification),L)}),[M,L,I.message,I.notification]),[q,tn]=(0,v.Z)(W.message),[Y,nn]=(0,o.Z)(W.notification),[z,X]=(0,c.Z)(),rn=n.useMemo(()=>({message:q,notification:Y,modal:z}),[q,Y,z]);(0,t.ln)("App")(!(V&&A===!1),"usage","When using cssVar, ensure `component` is assigned a valid React component string.");const en=A===!1?n.Fragment:A,an={className:J,style:U};return Q(n.createElement(m.Z.Provider,{value:rn},n.createElement(m.J.Provider,{value:W},n.createElement(en,Object.assign({},A===!1?void 0:an),X,tn,nn,R))))};a.useApp=d;var S=a},95490:function(E){E.exports=function h(r,n){if(r===n)return!0;if(r&&n&&typeof r=="object"&&typeof n=="object"){if(r.constructor!==n.constructor)return!1;var g,s,t;if(Array.isArray(r)){if(g=r.length,g!=n.length)return!1;for(s=g;s--!==0;)if(!h(r[s],n[s]))return!1;return!0}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===n.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===n.toString();if(t=Object.keys(r),g=t.length,g!==Object.keys(n).length)return!1;for(s=g;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,t[s]))return!1;for(s=g;s--!==0;){var b=t[s];if(!h(r[b],n[b]))return!1}return!0}return r!==r&&n!==n}},70731:function(E,h){function r(n,g){for(var s=-1,t=n==null?0:n.length,b=Array(t);++s<t;)b[s]=g(n[s],s,n);return b}h.Z=r},43849:function(E,h,r){r.d(h,{Z:function(){return wn}});var n=r(51172);function g(p,O,on,_n){var mn=-1,kn=p==null?0:p.length;for(_n&&kn&&(on=p[++mn]);++mn<kn;)on=O(on,p[mn],mn,p);return on}var s=g;function t(p){return function(O){return p==null?void 0:p[O]}}var b=t,v={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},c=b(v),o=c,m=r(82e3),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,x="\\u0300-\\u036f",l="\\ufe20-\\ufe2f",f="\\u20d0-\\u20ff",d=x+l+f,a="["+d+"]",S=RegExp(a,"g");function Z(p){return p=(0,m.Z)(p),p&&p.replace(i,o).replace(S,"")}var T=Z,R=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function D(p){return p.match(R)||[]}var w=D,M=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function L(p){return M.test(p)}var U=L,A="\\ud800-\\udfff",P="\\u0300-\\u036f",F="\\ufe20-\\ufe2f",Q="\\u20d0-\\u20ff",$=P+F+Q,V="\\u2700-\\u27bf",J="a-z\\xdf-\\xf6\\xf8-\\xff",I="\\xac\\xb1\\xd7\\xf7",W="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",q="\\u2000-\\u206f",tn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Y="A-Z\\xc0-\\xd6\\xd8-\\xde",nn="\\ufe0e\\ufe0f",z=I+W+q+tn,X="['\u2019]",rn="["+z+"]",en="["+$+"]",an="\\d+",fn="["+V+"]",ln="["+J+"]",j="[^"+A+z+an+V+J+Y+"]",bn="\\ud83c[\\udffb-\\udfff]",cn="(?:"+en+"|"+bn+")",C="[^"+A+"]",e="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+Y+"]",k="\\u200d",_="(?:"+ln+"|"+j+")",H="(?:"+y+"|"+j+")",N="(?:"+X+"(?:d|ll|m|re|s|t|ve))?",G="(?:"+X+"(?:D|LL|M|RE|S|T|VE))?",K=cn+"?",gn="["+nn+"]?",sn="(?:"+k+"(?:"+[C,e,u].join("|")+")"+gn+K+")*",pn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xn=gn+K+sn,dn="(?:"+[fn,e,u].join("|")+")"+xn,un=RegExp([y+"?"+ln+"+"+N+"(?="+[rn,y,"$"].join("|")+")",H+"+"+G+"(?="+[rn,y+_,"$"].join("|")+")",y+"?"+_+"+"+N,y+"+"+G,vn,pn,an,dn].join("|"),"g");function hn(p){return p.match(un)||[]}var yn=hn;function Cn(p,O,on){return p=(0,m.Z)(p),O=on?void 0:O,O===void 0?U(p)?yn(p):w(p):p.match(O)||[]}var B=Cn,Sn="['\u2019]",Tn=RegExp(Sn,"g");function Zn(p){return function(O){return s(B(T(O).replace(Tn,"")),p,"")}}var An=Zn,On=An(function(p,O,on){return O=O.toLowerCase(),p+(on?(0,n.Z)(O):O)}),wn=On},51172:function(E,h,r){r.d(h,{Z:function(){return cn}});var n=r(82e3);function g(C,e,u){var y=-1,k=C.length;e<0&&(e=-e>k?0:k+e),u=u>k?k:u,u<0&&(u+=k),k=e>u?0:u-e>>>0,e>>>=0;for(var _=Array(k);++y<k;)_[y]=C[y+e];return _}var s=g;function t(C,e,u){var y=C.length;return u=u===void 0?y:u,!e&&u>=y?C:s(C,e,u)}var b=t,v="\\ud800-\\udfff",c="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",i=c+o+m,x="\\ufe0e\\ufe0f",l="\\u200d",f=RegExp("["+l+v+i+x+"]");function d(C){return f.test(C)}var a=d;function S(C){return C.split("")}var Z=S,T="\\ud800-\\udfff",R="\\u0300-\\u036f",D="\\ufe20-\\ufe2f",w="\\u20d0-\\u20ff",M=R+D+w,L="\\ufe0e\\ufe0f",U="["+T+"]",A="["+M+"]",P="\\ud83c[\\udffb-\\udfff]",F="(?:"+A+"|"+P+")",Q="[^"+T+"]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",J="\\u200d",I=F+"?",W="["+L+"]?",q="(?:"+J+"(?:"+[Q,$,V].join("|")+")"+W+I+")*",tn=W+I+q,Y="(?:"+[Q+A+"?",A,$,V,U].join("|")+")",nn=RegExp(P+"(?="+P+")|"+Y+tn,"g");function z(C){return C.match(nn)||[]}var X=z;function rn(C){return a(C)?X(C):Z(C)}var en=rn;function an(C){return function(e){e=(0,n.Z)(e);var u=a(e)?en(e):void 0,y=u?u[0]:e.charAt(0),k=u?b(u,1).join(""):e.slice(1);return y[C]()+k}}var fn=an,ln=fn("toUpperCase"),j=ln;function bn(C){return j((0,n.Z)(C).toLowerCase())}var cn=bn},59298:function(E,h,r){var n=r(12689),g=r(56070),s="[object Symbol]";function t(b){return typeof b=="symbol"||(0,g.Z)(b)&&(0,n.Z)(b)==s}h.Z=t},82e3:function(E,h,r){r.d(h,{Z:function(){return x}});var n=r(76298),g=r(70731),s=r(49069),t=r(59298),b=1/0,v=n.Z?n.Z.prototype:void 0,c=v?v.toString:void 0;function o(l){if(typeof l=="string")return l;if((0,s.Z)(l))return(0,g.Z)(l,o)+"";if((0,t.Z)(l))return c?c.call(l):"";var f=l+"";return f=="0"&&1/l==-b?"-0":f}var m=o;function i(l){return l==null?"":m(l)}var x=i}}]);
