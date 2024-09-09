"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{76961:function(Xn,Se,l){l.r(Se),l.d(Se,{default:function(){return Lr}});var De=l(87956),s=l(92379),ne=l(15354),zn=l(12027),$=l.n(zn),Zn=l(19317),Ie=l.n(Zn),Yn=l(29861),He=l.n(Yn),Jn=l(91253),v=l(48073),$n=l(95490),V=l.n($n),we=l(32089),Fe=l(9676),Qn=l(24325),D=l.n(Qn),qn=l(34180),_e=l.n(qn),et=l(28633),P=l.n(et),Ue=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},nt=function(e){for(var n={},o=function(){var d=P()(a[i],2),c=d[0],h=d[1],p=Object.keys(n);if(c.split("/").length===3){var _,g,E="/".concat(c.split("/")[1]),m=(_=h[0])===null||_===void 0||(_=_.children)===null||_===void 0?void 0:_.find(function(z){var T,I=(T=z.frontmatter)===null||T===void 0?void 0:T.nav;return _e()(I)==="object"&&_e()(I==null?void 0:I.second)==="object"});if(!m){var k;m=(k=h[0])===null||k===void 0?void 0:k.children[0]}var N=(g=m)===null||g===void 0||(g=g.frontmatter)===null||g===void 0?void 0:g.nav,H={order:0,title:void 0};if(typeof N!="string"){var A,U,G,B;H.order=(A=N==null||(U=N.second)===null||U===void 0?void 0:U.order)!==null&&A!==void 0?A:0,H.title=(G=N==null||(B=N.second)===null||B===void 0?void 0:B.title)!==null&&G!==void 0?G:N==null?void 0:N.second}if(p.includes(E)){var w;n[E].push({title:H.title,order:H.order,children:(w=h[0])===null||w===void 0?void 0:w.children})}else n[E]=h.map(function(z){return D()(D()({},z),{},{title:H.title,order:H.order})})}else p.includes(c)?n[c]=[].concat($()(n[c]),$()(h)):n[c]=h},i=0,a=Object.entries(e);i<a.length;i++)o();return n},je=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},te={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},tt=function(){var e=(0,v.useSiteData)(),n=e.themeConfig,o=(0,v.useNavData)(),i=(0,v.useSidebarData)(),a=(0,v.useRouteMeta)(),u=(0,v.useTabMeta)(),d=(0,v.useLocation)(),c=(0,v.useLocale)(),h=(0,v.useIntl)(),p=(0,s.useMemo)(function(){return{activePath:"/",link:"/",title:h.formatMessage({id:"header.nav.home"})}},[h]),_=n.hideHomeNav?o:[p].concat($()(o));return D()(D()({},te),{},{locale:c||te.locale,location:d||te.location,navData:_||te.navData,routeMeta:a||te.routeMeta,sidebar:i||te.sidebar,siteData:D()(D()({},te.siteData),{},{themeConfig:n}),tabMeta:u||te.tabMeta})},ot=(0,Fe.F)()((0,we.mW)(function(){return te},{name:"dumi-theme-yunti"})),b=Ue?ot:function(t,e){var n=tt(),o=(0,Fe.F)()((0,we.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(b,o),o(t,e)},rt=["setLoading"],it=["setLoading"],Ve={},at=function(e,n){(0,s.useEffect)(function(){s.startTransition(function(){e()})},n)},lt=function(e,n){(0,Jn.Z)(function(){e()},n,{maxWait:96,wait:32})},st=typeof s.startTransition=="function"?at:lt,ae=function(e,n,o){var i=o||function(a,u){var d;return(d=b.setState)===null||d===void 0?void 0:d.call(b,He()({},a,u))};!Ue&&!Ve[e]&&(i(e,n),Ve[e]=!0),st(function(){i(e,n)},[n])},ut=function(){var e=(0,v.useSiteData)(),n=(0,v.useSidebarData)(),o=(0,v.useRouteMeta)(),i=(0,v.useTabMeta)(),a=(0,v.useNavData)(),u=(0,v.useLocation)(),d=(0,v.useLocale)(),c=(0,v.useIntl)(),h=(0,s.useMemo)(function(){return{activePath:"/",link:"/",title:c.formatMessage({id:"header.nav.home"})}},[c]);return ae("siteData",e,function(){var p,_,g=e.setLoading,E=Ie()(e,rt),m=((p=b.getState)===null||p===void 0?void 0:p.call(b))||{siteData:{}},k=m.siteData,N=k.setLoading,H=Ie()(k,it);V()(E,H)||(_=b.setState)===null||_===void 0||_.call(b,{siteData:e})}),ae("sidebar",n),ae("routeMeta",o),ae("location",u),ae("tabMeta",i),ae("locale",d),ae("navData",a,function(){var p,_=e.themeConfig.hideHomeNav?a:[h].concat($()(a));(p=b.setState)===null||p===void 0||p.call(b,{navData:_})}),!1},dt=l(29148),R=l.n(dt),M=l(66933),We,ct=(0,M.vJ)(We||(We=R()([`
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

  .dumi-default-table {
    &-content {
      table {
        display: table;
        table-layout: auto;
        width: 100%;
      }
    }
  }
`])),function(t){var e=t.theme;return e.colorText}),mt=ct,Ce=l(37620),Ke=function(e){return e.siteData.themeConfig},ht=function(e){return e.siteData.themeConfig.title},Oe=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},pt=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},_t=function(e){return e.siteData.themeConfig.giscus},ft=function(e){return e.siteData.themeConfig.header},Xe=function(e){return e===!1?!1:typeof e=="string"},vt=function(e){var n,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var i=["/api","/components"].concat($()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return i.some(function(a){return e.location.pathname.startsWith(a)})},ze=function(e){var n,o,i,a,u=Oe(e),d=e.routeMeta.frontmatter,c=e.locale.id,h=function(z){return z.replace("{github}",u).replace("{atomId}",d.atomId||"").replace("{title}",d.title).replace("{locale}",c)},p=e.siteData.themeConfig.apiHeader||{},_=p.type,g=_===void 0?"component":_,E=p.pkg,m=E===void 0?e.siteData.pkg.name:E,k=p.sourceUrl,N=p.docUrl,H=((n=d.apiHeader)===null||n===void 0?void 0:n.pkg)||m,A=d.atomId||d.title,U=((o=d.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,G=((i=d.apiHeader)===null||i===void 0?void 0:i.sourceUrl)||(Xe(k)?h(k):void 0),B=((a=d.apiHeader)===null||a===void 0?void 0:a.docUrl)||(Xe(N)?h(N):void 0);return{componentName:A,defaultImport:U,description:d.description,docUrl:B,pkg:H,sourceUrl:G,title:d.title,type:g}},gt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ze=function(e){var n,o,i=e.routeMeta,a=i.toc,u=i.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(a=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(u=e.tabMeta.frontmatter);var d=function(h){if(!u.tocDepth||typeof u.tocDepth=="number"&&u.tocDepth>h-1)return!0};return a.reduce(function(c,h){if(h.depth===2&&d(2))c.push(D()({},h));else if(h.depth===3&&d(3)){var p=c.at(-1);p&&(p.children=p.children||[],p.children.push(D()({},h)))}return c},[])},Ye=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(o){return o.children}).flat())||[]},bt=function(e){var n=Ye(e),o=e.location.pathname,i=n.findIndex(function(a){return a.link===o});return{currentIndex:i,next:n[i+1],prev:n[i-1]}},Tt=l(92010),xt=function(e){var n=e.routeMeta.frontmatter;return(0,Tt.Z)({},n.token,e.siteData.themeConfig.siteToken)},Et={apiHeader:ze,flattenSidebar:Ye,token:xt},yt=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},Rt=yt,St=l(827),Je=l(29191),Q=function(){var e=(0,Je.F)();return Ue||({GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_9d4dc19f-e667-48f2-9778-642dfe1d4aff",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.17.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_9d4dc19f-e667-48f2-9778-642dfe1d4aff",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"596",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240901.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19651",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.17.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",npm_config_npm_version:"10.8.2",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10768890786",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3a2abdf8-968e-4c00-aaec-30e3d7c5e87c",INVOCATION_ID:"a699b6922c5c498dae494f8270f14e0f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"18",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 7",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.7.2",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.17.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_9d4dc19f-e667-48f2-9778-642dfe1d4aff",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_9d4dc19f-e667-48f2-9778-642dfe1d4aff",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_9d4dc19f-e667-48f2-9778-642dfe1d4aff",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE&&(e.mobile={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_9d4dc19f-e667-48f2-9778-642dfe1d4aff",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.17.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_9d4dc19f-e667-48f2-9778-642dfe1d4aff",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"596",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240901.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19651",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.17.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",npm_config_npm_version:"10.8.2",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10768890786",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3a2abdf8-968e-4c00-aaec-30e3d7c5e87c",INVOCATION_ID:"a699b6922c5c498dae494f8270f14e0f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"18",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 7",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.7.2",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.17.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_9d4dc19f-e667-48f2-9778-642dfe1d4aff",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_9d4dc19f-e667-48f2-9778-642dfe1d4aff",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_9d4dc19f-e667-48f2-9778-642dfe1d4aff",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE==="true"),{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_9d4dc19f-e667-48f2-9778-642dfe1d4aff",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.17.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_9d4dc19f-e667-48f2-9778-642dfe1d4aff",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"596",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240901.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19651",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.17.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",npm_config_npm_version:"10.8.2",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10768890786",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3a2abdf8-968e-4c00-aaec-30e3d7c5e87c",INVOCATION_ID:"a699b6922c5c498dae494f8270f14e0f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"18",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 7",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.7.2",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.17.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_9d4dc19f-e667-48f2-9778-642dfe1d4aff",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_9d4dc19f-e667-48f2-9778-642dfe1d4aff",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_9d4dc19f-e667-48f2-9778-642dfe1d4aff",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP&&(e.desktop={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_9d4dc19f-e667-48f2-9778-642dfe1d4aff",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.17.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_9d4dc19f-e667-48f2-9778-642dfe1d4aff",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"596",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240901.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19651",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.17.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",npm_config_npm_version:"10.8.2",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10768890786",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.17.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3a2abdf8-968e-4c00-aaec-30e3d7c5e87c",INVOCATION_ID:"a699b6922c5c498dae494f8270f14e0f",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.17.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"18",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 7",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.7.2",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"be19c97afff0668c06a2d50d88a03fab60b5c628",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.17.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_9d4dc19f-e667-48f2-9778-642dfe1d4aff",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.17.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_9d4dc19f-e667-48f2-9778-642dfe1d4aff",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.17.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_9d4dc19f-e667-48f2-9778-642dfe1d4aff",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP==="true")),e},Ne=l(20113),Z=l(70957),It=l(62090),Ot=l(94174),Nt=l(44550),Ae=l(24899),Le=l(31180),Me=l(42018),At=l(92496),K=l(12274),$e,Qe,qe,en,nn,kt=(0,M.kc)(function(t){var e=t.css,n=t.token,o=t.responsive,i=t.stylish;return{desc:e($e||($e=R()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),n.fontSizeLG,n.lineHeightLG),label:e(Qe||(Qe=R()([`
    width: 80px;
  `]))),meta:e(qe||(qe=R()([""]))),text:e(en||(en=R()([`
    `,`
  `])),i.resetLinkColor),title:e(nn||(nn=R()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=l(651),tn=(0,s.memo)(function(t){var e=t.title,n=t.type,o=t.componentName,i=t.description,a=t.defaultImport,u=t.pkg,d=t.sourceUrl,c=t.docUrl,h=t.serviceList,p=h===void 0?[]:h,_=Q(),g=_.mobile,E=kt(),m=E.styles,k=n==="doc",N=[d&&{children:"Source",icon:(0,r.jsx)(Z.Z,{icon:Me.Z}),url:d},c&&{children:"Edit",icon:(0,r.jsx)(Z.Z,{icon:At.Z}),url:c}].filter(Boolean),H=a?"import ".concat(o," from '").concat(u,"';"):"import { ".concat(o," } from '").concat(u,"';");return(0,r.jsxs)(K.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(Nt.Z.Title,{className:m.title,children:e}),i&&(0,r.jsx)(It.Z,{className:m.desc,children:i}),!k&&(0,r.jsxs)(K.D,{gap:g?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(Ot.Z,{spotlight:!0,children:H})}),(0,r.jsx)(Ae.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)(K.D,{distribution:"space-between",gap:g?24:0,horizontal:!g,children:[(0,r.jsx)(Le.Z,{split:(0,r.jsx)(Ae.Z,{type:"vertical"}),wrap:!0,children:p.map(function(A){return(0,r.jsx)("a",{href:A.url,rel:"noreferrer",target:"_blank",title:A.label,children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[A.icon,A.children]})},A.label)})}),(0,r.jsx)(Le.Z,{className:m.meta,split:(0,r.jsx)(Ae.Z,{type:"vertical"}),children:N.map(function(A,U){return(0,r.jsx)("a",{href:A.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[A.icon,A.children]})},U)})})]})]})]})}),on,rn,an,ln=(0,M.kc)(function(t){var e=t.cx,n=t.css,o=t.token,i=t.stylish;return{background:e(i.gradientAnimation,n(on||(on=R()([`
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
    `])))),changelog:n(rn||(rn=R()([`
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
  `])),o.colorTextDescription,o.colorBorderSecondary),content:n(an||(an=R()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Dt=l(48037),Ht=l(83994),Ut=l(25220),sn,un,dn,cn,jt=(0,M.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(sn||(sn=R()([`
    justify-content: flex-end;
  `]))),container:n(un||(un=R()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:n(dn||(dn=R()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:n(cn||(cn=R()([`
    font-size: 16px;
  `])))}}),Ct=(0,s.memo)(function(t){var e=t.title,n=t.link,o=t.type,i=jt(),a=i.styles,u=i.cx,d=(0,v.useIntl)(),c=(0,s.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{icon:Ht.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(Z.Z,{icon:Ut.Z})]})}},[d,o]);return(0,r.jsx)(v.Link,{to:n,children:(0,r.jsxs)(K.D,{className:a.container,gap:8,children:[(0,r.jsx)(K.D,{className:u(a.nav,o==="next"&&a.alignmentEnd),gap:4,horizontal:!0,children:c}),(0,r.jsx)(K.D,{className:u(a.title,o==="next"&&a.alignmentEnd),horizontal:!0,children:e})]})})}),mn=Ct,Lt=(0,s.memo)(function(){var t=b(bt,V()),e=t.prev,n=t.next,o=Q(),i=o.mobile;return(0,r.jsxs)(K.D,{distribution:"space-between",gap:i?12:0,horizontal:!i,style:{margin:i?12:0},children:[e?(0,r.jsx)(mn,D()({type:"prev"},e)):(0,r.jsx)("div",{}),n?(0,r.jsx)(mn,D()({type:"next"},n)):(0,r.jsx)("div",{})]})}),Mt=Lt,hn,pn,Bt=(0,M.kc)(function(t,e){var n=t.cx,o=t.token,i=t.responsive,a=t.css;return{content:n(!e&&a(hn||(hn=R()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,i.mobile),a(pn||(pn=R()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Pt=["children"],Gt=(0,s.memo)(function(t){var e=t.children,n=Ie()(t,Pt),o=b(function(_){return _.siteData.loading}),i=b(Ke,V()),a=i.docStyle,u=Q(),d=u.mobile,c=Bt(a==="pure"),h=c.styles,p=c.cx;return(0,s.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)(K.D,D()(D()({gap:d?0:24,width:"100%"},n),{},{children:[(0,r.jsx)("div",{className:p("dumi-antd-style-content",h.content),children:(0,r.jsx)(Dt.Z,{children:e})}),(0,r.jsx)(Mt,{})]}))}),_n=Gt,wt=(0,s.memo)(function(){var t=(0,v.useOutlet)(),e=Q(),n=e.mobile,o=b(function(h){return{repoBase:Oe(h)}},ne.X),i=o.repoBase,a=b(function(h){return{fm:h.routeMeta.frontmatter}},V()),u=a.fm,d=ln(),c=d.styles;return(0,s.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ne.Z,{className:c.content,style:{padding:n?0:24},children:[(0,r.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,r.jsx)(tn,{description:u.description,docUrl:"".concat(i,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(i,"/blob/master/CHANGELOG.md"),title:u.title})}),(0,r.jsx)(_n,{className:c.changelog,children:t})]})]})}),Ft=wt,Vt=l(13876),Wt=l(22148),Kt=l(92471),Xt=(0,s.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),zt=(0,s.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Zt=(0,s.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Yt=(0,s.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Jt=(0,s.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),$t=(0,s.memo)(function(){var t=b(ze,V()),e=t.pkg,n=(0,s.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(Zt,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)(Jt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)(Xt,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Yt,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(zt,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(tn,D()({serviceList:n},t))}),Qt=$t,qt=(0,s.memo)(function(){var t=(0,v.useOutlet)(),e=(0,v.useLocation)(),n=Q(),o=n.mobile,i=b(function(p){return{giscus:_t(p),isApiPage:vt(p)}},ne.X),a=i.isApiPage,u=i.giscus,d=ln(),c=d.styles;(0,s.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var h=(0,s.useCallback)(function(){return u&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(Wt.Z,{category:u.category,categoryId:u.categoryId,id:"lobehub",mapping:"title",repo:u.repo,repoId:u.repoId})})},[u,e.pathname]);return(0,r.jsxs)(Vt.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ne.Z,{className:c.content,style:{marginBottom:48,padding:o?0:24},children:[a?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)(Qt,{})}):void 0,(0,r.jsxs)(_n,{children:[(0,r.jsx)(Kt.Z,{children:t}),u&&(0,r.jsx)(h,{})]})]})]})}),eo=qt,no=l(57030),Be=function(e){return!!e.routeMeta.frontmatter.hero},re=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},to=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||re(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},oo=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||re(e,e.siteData.themeConfig.description)},ro=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||re(e,e.siteData.themeConfig.actions)},io=function(e){var n;return Be(e)?((n=re(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||re(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},ao=function(e){var n=e.siteData.themeConfig.customPages;if(!(!n||n.length===0))return n.find(function(o){return o.path===e.location.pathname})},lo=(0,s.memo)(function(){var t=b(io,V()),e=(0,M.Fg)();if(t!=null&&t.length)return(0,r.jsx)(no.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),so=lo,uo=l(72819),co=(0,s.memo)(function(){var t=b(Be),e=b(to),n=b(oo),o=b(ro);if(t)return(0,r.jsx)(uo.Z,{actions:o,description:n,title:e})}),mo=co,ho=(0,s.memo)(function(){var t=(0,v.useOutlet)();return(0,s.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(K.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(mo,{}),(0,r.jsx)(so,{}),t]})}),po=ho,_o=l(41850),fo=l(2957),vo=l(35723),go=l(59325),bo=function(e){var n=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},i={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:fo.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,r.jsx)(Z.Z,{icon:vo.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},a={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:Me.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:v.Link,icon:(0,r.jsx)(Z.Z,{icon:go.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},u={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,i,a,u]},fn,vn,To=(0,M.kc)(function(t){var e=t.css,n=t.responsive,o=t.token,i="rc-footer";return{container:e(fn||(fn=R()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,n.mobile),footer:e(vn||(vn=R()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,i,o.colorTextTertiary,o.colorLinkHover,i,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,i)}}),xo=(0,s.memo)(function(){var t=b(function(E){return E.siteData},V()),e=t.themeConfig,n=t.pkg,o=e.footerConfig,i=e.footer,a=b(Oe,ne.X),u=Q(),d=u.mobile,c=To(),h=c.styles,p=c.theme,_=(0,s.useMemo)(function(){var E=o!=null&&o.columns?o==null?void 0:o.columns:bo({github:a||n.homepage});return o!=null&&o.resources&&(E[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(E[3]=o==null?void 0:o.moreProducts),E.filter(function(m){return m.items&&m.items.length>0})},[o==null?void 0:o.columns,o==null?void 0:o.moreProducts,o==null?void 0:o.resources,a,n]);if(i){var g=(o==null?void 0:o.bottom)||i;return(0,r.jsx)(_o.Z,{bottom:d?(0,r.jsxs)(Ne.Z,{className:h.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)(K.D,{align:"center",dangerouslySetInnerHTML:{__html:g},horizontal:!0})]}):(0,r.jsxs)(Ne.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ae.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:g}})]}),columns:_,contentMaxWidth:p.contentMaxWidth,theme:p.appearance})}}),Eo=xo,yo=l(4413),Ro=l(23961),So=l(61672),gn,Io=(0,M.kc)(function(t){var e=t.css,n=t.responsive,o=t.token;return e(gn||(gn=R()([`
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
  `])),o.colorText,n.mobile)}),Oo=(0,s.memo)(function(){var t=b(Ke,V()),e=b(function(d){return d.locale},V()),n=Q(),o=n.mobile,i=Io(),a=i.styles,u=i.cx;return t&&(0,r.jsx)(v.Link,{className:u(a),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Le.Z,{children:[(0,r.jsx)(So.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:o?32:36}),t.name]})})}),No=Oo,Ao=l(69916),ko=l(80326),Do=l(31125),bn,Tn,Ho=(0,M.kc)(function(t){var e=t.css,n=t.stylish,o=t.token,i=t.responsive,a=t.prefixCls;return{link:e(bn||(bn=R()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(Tn||(Tn=R()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),a,o.colorText,i.mobile)}}),xn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},Uo=(0,s.memo)(function(){var t=Ho(),e=t.styles,n=(0,v.useLocation)(),o=n.pathname,i=b(function(u){return u.navData},ne.X),a=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ao.Z,{activeKey:a,className:e.tabs,items:i.map(function(u){var d=u.activePath||xn(u.link);return{key:je(u.link)?u.link:d,label:je(u.link)?(0,r.jsxs)("a",{className:e.link,href:String(u.link),onClick:function(h){return h.preventDefault()},rel:"noreferrer",target:u.target||"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:u.title})," ",(0,r.jsx)(Z.Z,{icon:Do.Z})]}):(0,r.jsx)(v.Link,{className:e.link,onClick:function(h){return h.preventDefault()},target:u.target,to:String(u.link),children:u.title})}}),onTabClick:function(d){var c=i.find(function(h){return h.activePath===d||h.link===d||xn(h.link)===d});if(c!=null&&c.link){if(je(c.link)||c.target==="_blank")return window.open(c.link);v.history.push(c.link)}}}),(0,r.jsx)(ko.Z,{})]})}),jo=Uo,Co=l(19210),Lo=l(57912),En,yn,Rn,Sn,In,Mo=(0,M.kc)(function(t){var e=t.token,n=t.responsive,o=t.css,i=t.cx;return{container:o(En||(En=R()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:o(yn||(yn=R()([`
      box-sizing: border-box;
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline: 40px 12px;

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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(Rn||(Rn=R()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:i("site-header-shortcut",o(Sn||(Sn=R()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:i(o(In||(In=R()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Bo=(0,s.memo)(function(){var t=(0,Je.F)(),e=t.mobile,n=Mo(),o=n.styles,i=(0,s.useState)(!1),a=P()(i,2),u=a[0],d=a[1],c=(0,v.useSiteSearch)(),h=c.keywords,p=c.setKeywords,_=c.result,g=c.loading,E=(0,v.useIntl)();return(0,r.jsxs)("div",{className:o.container,children:[(0,r.jsx)(Co.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){d(!1)},1)},onChange:function(k){return p(k.target.value)},onFocus:function(){return d(!0)},placeholder:E.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),h.trim()&&u&&(_.length>0||!g)&&(0,r.jsx)("div",{className:o.popover,children:(0,r.jsx)(Lo.Z,{data:_,loading:g})})]})}),Po=Bo,Go=l(93974),wo=l(74604),Fo=(0,s.memo)(function(){var t=(0,s.useState)(!1),e=P()(t,2),n=e[0],o=e[1],i=b(function(p){return p.navData},V()),a=b(function(p){return p.sidebar},V()),u=b(function(p){return{activePath:gt(p),pathname:p.location.pathname}},ne.X),d=u.pathname,c=u.activePath,h=(0,s.useMemo)(function(){var p=a==null?void 0:a.map(function(_){return!_.link&&{children:_.children.map(function(g){return{key:"s-".concat(g.link),label:(0,r.jsx)(v.Link,{onClick:function(){o(!1)},to:g.link,children:g.title})}}),label:_.title,type:"group"}});return i.map(function(_){return{children:(_.activePath||_.link)===c&&p,key:_.activePath||_.link,label:(0,r.jsx)(v.Link,{to:String(_.link),children:_.title})}})},[i,c,a]);return(0,r.jsx)(Go.Z,{items:h,openKeys:[c],opened:n,selectedKeys:(0,wo.Z)([c,"s-".concat(d)]),setOpened:o})}),Vo=Fo,On=l(86982),Wo=l(93910),Nn,Ko=(0,Wo.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Xo=(0,M.kc)(function(t){var e=t.css;return e(Nn||(Nn=R()([`
    svg {
      overflow: visible !important;
    }
  `])))}),zo=(0,s.memo)(function(){var t=b(pt),e=Xo(),n=e.styles;return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(On.Z,{className:n,icon:Ko,size:"site"})}):void 0}),Zo=zo,Yo=(0,s.memo)(function(){var t=b(Oe);return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(On.Z,{icon:Me.Z,size:"site"})}):void 0}),Jo=Yo,An=l(88016),X=l(11348),ve=l(45623),$o=l(51683),Qo=l(86473),kn,Dn,Hn,qo=(0,M.kc)(function(t,e){var n=t.css,o=t.cx,i=t.token;return{active:o("".concat(e,"-item-active"),n(kn||(kn=R()([`
      background: `,`;
    `])),i.colorFillTertiary)),item:o("".concat(e,"-item"),n(Dn||(Dn=R()([`
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
    `])),i.fontFamily,i.colorText,i.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),n(Hn||(Hn=R()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),i.colorPrimaryText,i.colorPrimaryBg,i.colorPrimaryTextHover,i.colorPrimaryBgHover))}}),er=["value","label","prefixCls","isSelected","isActive","disabled"],nr=(0,s.forwardRef)(function(t,e){var n=t.value,o=t.label,i=t.prefixCls,a=t.isSelected,u=t.isActive,d=t.disabled,c=Ie()(t,er),h=qo(i),p=h.styles,_=h.cx;return(0,r.jsx)("button",D()(D()({"aria-selected":a,className:_(p.item,He()(He()({},p.selected,a),p.active,u)),disabled:d,ref:e,role:"option",tabIndex:-1,type:"button"},c),{},{children:o}),n)}),tr=nr,Un,jn,or=(0,M.kc)(function(t,e){var n=t.css,o=t.stylish,i=t.cx,a=t.token;return{button:i("".concat(e,"-button"),n(Un||(Un=R()([`
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
    `])),o.buttonDefaultHover,a.fontSize,a.colorTextSecondary,a.colorBgContainer,a.colorBorder,a.borderRadius,a.colorPrimary,a.colorPrimaryBg)),container:i(e,n(jn||(jn=R()([`
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
    `])),a.fontSize,a.colorBgElevated,a.colorBorder,a.boxShadowSecondary))}}),rr=(0,s.memo)(function(t){var e=t.options,n=e===void 0?[]:e,o=t.value,i=t.prefixCls,a=t.onChange,u=t.renderValue,d=t.renderItem,c=t.style,h=i!=null?i:"native-select",p=(0,Qo.Z)(0,{onChange:a,value:o}),_=P()(p,2),g=_[0],E=_[1],m=or(h),k=m.styles,N=(0,s.useRef)([]),H=(0,s.useRef)([]),A=(0,s.useRef)(null),U=(0,s.useRef)(!1),G=(0,s.useRef)(!0),B=(0,s.useRef)(),w=(0,s.useRef)(null),z=(0,s.useState)(!1),T=P()(z,2),I=T[0],C=T[1],L=(0,s.useState)(null),S=P()(L,2),O=S[0],y=S[1],ge=(0,s.useState)(!1),de=P()(ge,2),le=de[0],ce=de[1],se=(0,s.useState)(0),be=P()(se,2),Te=be[0],ue=be[1],xe=(0,s.useState)(!1),Ee=P()(xe,2),me=Ee[0],he=Ee[1],ye=(0,s.useState)(!1),pe=P()(ye,2),f=pe[0],x=pe[1];I||(Te!==0&&ue(0),le&&ce(!1),f&&x(!1));var j=(0,X.YF)({middleware:le?[(0,ve.cv)(5),me?(0,ve.uY)({crossAxis:!0,padding:10}):(0,ve.RR)({padding:10}),(0,ve.dp)({apply:function(W){var ee,Re,Fr=W.availableHeight;Object.assign((ee=(Re=w.current)===null||Re===void 0?void 0:Re.style)!==null&&ee!==void 0?ee:{},{maxHeight:"".concat(Fr,"px")})},padding:10})]:[(0,X.aN)({index:g,listRef:N,minItemsVisible:me?8:4,offset:Te,onFallbackChange:ce,overflowRef:A,padding:10,referenceOverflowThreshold:20,scrollRef:w}),(0,ve.cv)({crossAxis:-4})],onOpenChange:C,open:I,placement:"bottom-start",whileElementsMounted:$o.Me}),Y=j.x,ie=j.y,F=j.strategy,q=j.refs,J=j.context,Ge=(0,X.NI)([(0,X.eS)(J,{event:"mousedown"}),(0,X.bQ)(J),(0,X.qs)(J,{role:"listbox"}),(0,X.Rz)(J,{enabled:!le,onChange:ue,overflowRef:A,scrollRef:w}),(0,X.c0)(J,{activeIndex:O,listRef:N,onNavigate:y,selectedIndex:g}),(0,X.ox)(J,{activeIndex:O,listRef:H,onMatch:I?y:E})]),Mr=Ge.getReferenceProps,Br=Ge.getFloatingProps,Pr=Ge.getItemProps;(0,s.useEffect)(function(){if(I)return B.current=setTimeout(function(){U.current=!0},300),function(){clearTimeout(B.current)};U.current=!1,G.current=!0},[I]);var Gr=n[g]||{},wr=Gr.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",D()(D()({"aria-label":"selected-item",className:k.button,ref:q.setReference,style:c,type:"button"},Mr({onPointerMove:function(W){var ee=W.pointerType;ee==="mouse"&&he(!1)},onTouchStart:function(){he(!0)}})),{},{children:u?u(g):wr})),(0,r.jsx)(X.ll,{children:I&&(0,r.jsx)(X.y0,{lockScroll:!me,style:{zIndex:3e3},children:(0,r.jsx)(X.wD,{context:J,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:q.setFloating,style:{left:Y!=null?Y:0,position:F,top:ie!=null?ie:0},children:(0,r.jsx)("div",D()(D()({className:k.container,ref:w,style:{overflowY:"auto"}},Br({onContextMenu:function(W){W.preventDefault()}})),{},{children:n.map(function(oe,W){return(0,r.jsx)(tr,D()({disabled:f,isActive:W===O,isSelected:W===g,label:d?d(oe,W):oe.label,prefixCls:h,ref:function(Re){N.current[W]=Re,H.current[W]=oe.label},value:oe.value},Pr({onClick:function(){U.current&&(E(W),C(!1))},onKeyDown:function(){U.current=!0},onMouseUp:function(){G.current&&(U.current&&(E(W),C(!1)),clearTimeout(B.current),B.current=setTimeout(function(){U.current=!0}))},onTouchStart:function(){U.current=!0,G.current=!1}})),oe.value)})}))})})})})]})}),ir=rr;function ke(t){var e=t.pathname,n=t.current,o=t.target,i="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(i).replace(/([^/])\/$/,"$1"):"".concat(i).concat(o.suffix)}var ar={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Cn={"en-US":"EN","zh-CN":"\u4E2D"},lr=(0,s.memo)(function(t){var e=t.locale,n=t.current,o=(0,v.useLocation)(),i=o.pathname,a=(0,s.useState)(function(){return ke({current:n,pathname:i,target:e})}),u=P()(a,2),d=u[0],c=u[1];return(0,s.useEffect)(function(){c(ke({current:n,pathname:i,target:e}))},[n,e,i]),(0,r.jsx)(v.Link,{to:d,children:(0,r.jsx)(An.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Cn[e.id]})})}),sr=(0,s.memo)(function(){var t=b(function(n){return n.siteData.locales}),e=b(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,r.jsx)(ir,{onChange:function(o){console.log(ke({current:e,pathname:location.pathname,target:t[o]})),v.history.push(ke({current:e,pathname:location.pathname,target:t[o]}))},options:t.map(function(n){return{label:Cn[n.id],value:n.id}}),renderItem:function(o,i){return"".concat(ar[t[i].id]," ").concat(t[i].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,r.jsx)(lr,{current:e,locale:t.find(function(n){var o=n.id;return o!==e.id})})}),ur=sr,dr=l(77388),cr=(0,s.memo)(function(){var t=(0,Ce.f)(function(n){return n.themeMode}),e=(0,v.usePrefersColor)()[2];return(0,s.useEffect)(function(){return e(t)},[e,t]),(0,r.jsx)(dr.Z,{onThemeSwitch:function(o){Ce.f.setState({themeMode:o})},themeMode:t})}),Ln=cr,mr=l(12531),hr=l(25381),pr=l(59596),_r=l(99351),Mn,Bn,fr=(0,M.kc)(function(t){var e=t.css;return{avatar:e(Mn||(Mn=R()([`
      cursor: pointer;
    `]))),menu:e(Bn||(Bn=R()([`
      width: 180px;
    `])))}}),Pe="__LOGIN_USER",Pn=(0,s.memo)(function(){var t,e=fr(),n=e.styles,o=b(ft),i=b(function(_){return _.loginUser}),a=(0,v.useIntl)(),u=(0,s.useState)(i),d=P()(u,2),c=d[0],h=d[1];(0,s.useEffect)(function(){var _=window.localStorage.getItem(Pe);if(_)try{var g=JSON.parse(_);h(g),b.setState({loginUser:g})}catch(E){console.warn("parse login user info from ".concat(Pe," failed"),E)}},[]);var p=(0,s.useCallback)(function(){window.localStorage.removeItem(Pe)},[]);if(o!=null&&(t=o.userActionButton)!==null&&t!==void 0&&t.button)return c!=null&&c.user?(0,r.jsx)(mr.Z,{menu:{className:n.menu,items:o.userActionButton.menuItems||[{icon:(0,r.jsx)(Z.Z,{icon:pr.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/management/account",children:"\u8D26\u6237\u4E2D\u5FC3"}),key:"account"},{type:"divider"},{icon:(0,r.jsx)(Z.Z,{icon:_r.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/logout",onClick:p,children:"\u9000\u51FA\u767B\u5F55"}),key:"logout"}]},children:(0,r.jsx)(hr.C,{className:n.avatar,size:"small",src:c.avatar,children:c.user.charAt(0).toUpperCase()})}):(0,r.jsx)(An.ZP,D()(D()({},o.userActionButton.button),{},{children:a.formatMessage({id:"header.actions.user"})}))}),vr=(0,s.memo)(function(){var t=b(function(o){return!!o.routeMeta.frontmatter}),e=Q(),n=e.mobile;if(t)return(0,r.jsx)(yo.Z,{actions:n?(0,r.jsxs)(Ro.Z,{align:"center",gap:"small",children:[(0,r.jsx)(Ln,{}),(0,r.jsx)(Pn,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Po,{}),(0,r.jsx)(ur,{}),(0,r.jsx)(Jo,{}),(0,r.jsx)(Zo,{}),(0,r.jsx)(Ln,{}),(0,r.jsx)(Pn,{})]}),logo:(0,r.jsx)(No,{}),nav:n?(0,r.jsx)(Vo,{}):(0,r.jsx)(jo,{})})}),gr=vr,br=l(87157),Tr=l(36177),xr=l(41378),Gn=function(){var e=(0,v.useSiteData)(),n=e.themeConfig,o=n;return o},Er=l(14582),wn=l.n(Er),yr=l(70761),Rr={i8:"1.7.2"},Sr=function t(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=wn()(e),a;try{for(i.s();!(a=i.n()).done;){var u=a.value;if(u.key===n)return[].concat($()(o),[u.key]);if(u.children&&u.children.length>0){var d=t(u.children,n,[].concat($()(o),[u.key]));if(d)return d}}}catch(c){i.e(c)}finally{i.f()}return null},Ir=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,v.useLocation)(),i=o.pathname,a=o.search,u=Gn(),d=u.sidebarGroupModePath,c=u.sidebarEnhance,h=c===void 0?{}:c,p=n.before,_=n.after,g=(0,v.useFullSidebarData)(),E=nt(g),m=(0,v.useLocale)(),k="/".concat((e=i.split("/"))===null||e===void 0?void 0:e[1]),N=E[k],H=(0,s.useMemo)(function(){return Object.values(g).reduce(function(T,I){var C=I.flatMap(function(y){return y.children}),L=wn()(C),S;try{for(L.s();!(S=L.n()).done;){var O=S.value;T[O.link]=O.title}}catch(y){L.e(y)}finally{L.f()}return T},{})},[g]),A=(0,s.useMemo)(function(){var T=Object.keys(h).find(function(I){return i.startsWith(I)});if(T)return h[T]},[i,h]),U=(0,s.useMemo)(function(){var T=function(O){return O&&_e()(O)==="object"&&"link"in O&&"title"in O},I=function(O){return O&&_e()(O)==="object"&&O.type==="group"},C=function(O){return O&&_e()(O)==="object"&&"children"in O};function L(S){return typeof S=="string"?{key:S,label:(0,r.jsxs)(v.Link,{to:"".concat(S).concat(a),children:[p,H[S],_]})}:I(S)?{type:"group",label:S.title,key:S.title,children:S.children.map(function(O){return L(O)})}:C(S)?{key:S.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:S.title}),children:S.children.map(function(O){return L(O)})}:T(S)?{label:(0,r.jsx)(v.Link,{target:S.target,to:S.link,children:S.title}),key:S.link}:null}if(A)return A.map(function(S){return L(S)})},[_,p,A,H,a]),G=(0,s.useMemo)(function(){var T,I,C=new RegExp("".concat((T=m==null?void 0:m.suffix)!==null&&T!==void 0?T:"","$"),"g"),L=$()(N!=null?N:[]),S=function(y){var ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return y&&ge&&(0,r.jsx)(yr.Z,{bordered:!1,color:typeof y=="string"?"processing":y.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof y=="string"?y:y.title).replace("VERSION","v".concat(Rr.i8))})};return(I=L==null?void 0:L.reduce(function(O,y){if(y!=null&&y.title){var ge=d===!0?!0:(d!=null?d:[]).some(function(f){return i.startsWith(f)});if(ge){var de;O.push({type:"group",label:y==null?void 0:y.title,order:y==null?void 0:y.order,key:y==null?void 0:y.title,children:(de=y.children)===null||de===void 0?void 0:de.map(function(f){var x,j;return{label:(0,r.jsxs)(v.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(a),children:[p,(0,r.jsx)("span",{children:fe(f==null?void 0:f.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:fe((x=f.frontmatter)===null||x===void 0?void 0:x.subtitle)},"chinese"),S((j=f.frontmatter)===null||j===void 0?void 0:j.tag,!p&&!_),_]}),key:f.link.replace(C,"")}})})}else{var le,ce,se={},be=y.children.reduce(function(f,x){var j,Y,ie=f,F=x==null||(j=x.frontmatter)===null||j===void 0?void 0:j.type,q=typeof F=="string"?F:(Y=F==null?void 0:F.title)!==null&&Y!==void 0?Y:"default";if(ie[q]||(ie[q]=[]),se[q])F!=null&&F.order&&(se[q].order=F.order);else{var J;se[q]={title:q,order:(J=F==null?void 0:F.order)!==null&&J!==void 0?J:-1}}return ie[q].push(x),ie},{}),Te=Object.keys(be).sort(function(f,x){return se[f].order-se[x].order}).reduce(function(f,x){var j=f;return j[x]=be[x],j},{}),ue=[];ue.push.apply(ue,$()((le=(ce=Te.default)===null||ce===void 0?void 0:ce.map(function(f){var x;return{label:(0,r.jsxs)(v.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(a),children:[p,fe(f==null?void 0:f.title),S((x=f.frontmatter)===null||x===void 0?void 0:x.tag,!p&&!_),_]}),key:f.link.replace(C,"")}}))!==null&&le!==void 0?le:[]));for(var xe=0,Ee=Object.entries(Te);xe<Ee.length;xe++){var me=P()(Ee[xe],2),he=me[0],ye=me[1];he!=="default"&&ue.push({type:"group",label:he,key:he,children:ye==null?void 0:ye.map(function(f){var x;return{label:(0,r.jsxs)(v.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(a),children:[p,fe(f==null?void 0:f.title),S((x=f.frontmatter)===null||x===void 0?void 0:x.tag,!p&&!_),_]}),key:f.link.replace(C,"")}})})}O.push({label:y==null?void 0:y.title,key:y==null?void 0:y.title,order:y==null?void 0:y.order,children:ue})}}else{var pe=y.children||[];pe.every(function(f){var x;return f==null||(x=f.frontmatter)===null||x===void 0?void 0:x.date})&&pe.sort(function(f,x){var j,Y;return(f==null||(j=f.frontmatter)===null||j===void 0?void 0:j.date)>(x==null||(Y=x.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),O.push.apply(O,$()(pe.map(function(f){var x;return{order:f==null?void 0:f.order,label:(0,r.jsxs)(v.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(f.link).concat(a),children:[p,fe(f==null?void 0:f.title),S((x=f.frontmatter)===null||x===void 0?void 0:x.tag,!p&&!_),_]}),key:f.link.replace(C,"")}})))}return O.sort(function(f,x){return(f==null?void 0:f.order)<(x==null?void 0:x.order)?-1:1}),O},[]))!==null&&I!==void 0?I:[]},[N,d,i,a,p,_,m]),B=(0,s.useMemo)(function(){var T;return i.replace(new RegExp("".concat((T=m==null?void 0:m.suffix)!==null&&T!==void 0?T:"","$"),"g"),"")},[m,i]),w=(0,s.useMemo)(function(){return Sr(U||G,B)},[G,B,U]),z=w==null?void 0:w.slice(0,-1);return[U||G,B,z]},Fn,Vn,Wn,Or=(0,M.kc)(function(t,e){var n=t.token,o=t.css,i=t.prefixCls,a=e.isSideBarGroupMode;return{asideContainer:o(Fn||(Fn=R()([`
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
      `])),i,i,i,i,i,i,n.colorBorder,i,i,i,n.colorFillSecondary,i,i,i,i,i,!a&&o(Vn||(Vn=R()([`
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
          `])),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n.colorTextDisabled),mainMenu:o(Wn||(Wn=R()([`
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
      `])),n.headerHeight,n.headerHeight)}}),Nr=function(){var e=(0,v.useLocation)(),n=e.pathname,o=Gn(),i=o.sidebarGroupModePath,a=(0,s.useMemo)(function(){return i===!0?!0:(i!=null?i:[]).some(function(N){return n.startsWith(N)})},[n,i]),u=Or({isSideBarGroupMode:a}),d=u.styles,c=br.Z.useToken(),h=c.token,p=Ir(),_=P()(p,3),g=_[0],E=_[1],m=_[2],k=(0,r.jsx)(Tr.ZP,{theme:{components:{Menu:{itemBg:h.colorBgLayout,darkItemBg:h.colorBgLayout}}},children:(0,r.jsx)(xr.Z,{className:d.asideContainer,defaultOpenKeys:m,inlineIndent:30,items:g,mode:"inline",selectedKeys:[E]},m==null?void 0:m[0])});return(0,r.jsx)("div",{className:d.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:k})})},Ar=Nr,kr=l(61882),Kn=48,Dr=(0,s.memo)(function(){var t=b(Ze,V()),e=Q(),n=e.mobile,o=(0,M.Fg)(),i=(0,s.useState)(Kn),a=P()(i,2),u=a[0],d=a[1],c=(0,v.useLocation)();if((0,s.useEffect)(function(){var h=document.querySelector("#api-header");h&&d(h.clientHeight+Kn)},[c.pathname,c.hash,c.search,t]),!((t==null?void 0:t.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("div",{style:{height:u}}),(0,r.jsx)(kr.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:n,items:t,tocWidth:o.tocWidth})]})}),Hr=Dr,Ur=(0,s.memo)(function(){var t=(0,v.useIntl)(),e=(0,v.useLocation)(),n=e.hash,o=(0,M.Fg)(),i=Q(),a=i.mobile,u=i.laptop,d=b(function(T){var I=T.location.pathname==="/changelog",C=Be(T),L;return C||T.location.pathname==="/"?L="home":I?L="changelog":L="docs",{loading:T.siteData.loading,noToc:Ze(T).length===0,page:L,siteTitle:ht(T),themeConfig:T.siteData.themeConfig}},ne.X),c=d.loading,h=d.page,p=d.siteTitle,_=d.noToc,g=d.themeConfig,E=b(function(T){return T.routeMeta.frontmatter},V()),m=b(ao),k=h!=="docs"||a||E.sidebar===!1||(m==null?void 0:m.sider)===!1,N=E.toc===!1||_,H=a?N:!u||N,A=(0,s.useCallback)(function(){var T=(m==null?void 0:m.title)||E.title,I=(m==null?void 0:m.description)||E.description||g.description,C=(m==null?void 0:m.keywords)||E.keywords||g.keywords;return(0,r.jsxs)(v.Helmet,{children:[(0,r.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),T&&(0,r.jsx)("meta",{content:T,property:"og:title"}),I&&(0,r.jsx)("meta",{content:I,name:"description"}),I&&(0,r.jsx)("meta",{content:I,property:"og:description"}),C&&(0,r.jsx)("meta",{content:C.join(","),name:"keywords"}),C&&(0,r.jsx)("meta",{content:C.join(","),property:"og:keywords"}),!T||h==="home"?(0,r.jsx)("title",{children:p}):(0,r.jsxs)("title",{children:[T," - ",p]})]})},[m==null?void 0:m.description,m==null?void 0:m.keywords,m==null?void 0:m.title,E.description,E.keywords,E.title,t.locale,h,p,g.description,g.keywords]);(0,s.useEffect)(function(){var T=n.replace("#","");T&&setTimeout(function(){var I=document.querySelector("#".concat(decodeURIComponent(T)));I&&(I.scrollIntoView(),window.scrollBy({top:-80}))},1)},[c,n]),(0,s.useEffect)(function(){document.body.scrollTo(0,0)},[p]);var U=(0,s.useState)(!1),G=P()(U,2),B=G[0],w=G[1];(0,s.useEffect)(function(){return w(!0)},[]);var z=(0,v.useOutlet)();return(m==null?void 0:m.header)===!1&&(m==null?void 0:m.sider)===!1&&(m==null?void 0:m.footer)===!1?(0,r.jsxs)(r.Fragment,{children:[A(),B&&z]}):(0,r.jsxs)(r.Fragment,{children:[A(),B&&(0,r.jsxs)(St.ZP,{asideWidth:o.sidebarWidth,footer:(m==null?void 0:m.footer)!==!1&&(0,r.jsx)(Eo,{}),header:(m==null?void 0:m.header)!==!1&&(0,r.jsx)(gr,{}),headerHeight:a&&h!=="home"?o.headerHeight+36:o.headerHeight,sidebar:k?void 0:(0,r.jsx)(Ar,{}),toc:H?void 0:(0,r.jsx)(Hr,{}),tocWidth:H?0:o.tocWidth,children:[m&&z,!m&&h==="home"&&(0,r.jsx)(po,{}),!m&&h==="changelog"&&(0,r.jsx)(Ft,{}),!m&&h==="docs"&&(0,r.jsx)(eo,{})]},k?"full":"no-sidebar")]})}),jr=Ur,Cr=(0,s.memo)(function(){var t=(0,Ce.f)(function(n){return n.themeMode},ne.X),e=b(Et.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ut,{}),(0,r.jsxs)(De.Z,{customToken:function(o){return Object.assign({},Rt(o),e)},themeMode:t,children:[(0,r.jsx)(mt,{}),(0,r.jsx)(jr,{})]})]})}),Lr=Cr},37620:function(Xn,Se,l){l.d(Se,{f:function(){return ne}});var De=l(32089),s=l(9676),ne=(0,s.F)()((0,De.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
