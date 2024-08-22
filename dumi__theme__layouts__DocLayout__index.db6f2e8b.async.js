"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{76961:function(Xn,Se,l){l.r(Se),l.d(Se,{default:function(){return Lr}});var De=l(87956),u=l(92379),ne=l(15354),zn=l(12027),$=l.n(zn),Zn=l(19317),Ie=l.n(Zn),Yn=l(29861),He=l.n(Yn),Jn=l(91253),f=l(48073),$n=l(95490),V=l.n($n),we=l(32089),Fe=l(9676),Qn=l(24325),D=l.n(Qn),qn=l(34180),_e=l.n(qn),et=l(28633),P=l.n(et),Ue=typeof window!="undefined",ve=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},nt=function(e){for(var n={},o=function(){var d=P()(a[i],2),c=d[0],h=d[1],p=Object.keys(n);if(c.split("/").length===3){var _,g,x="/".concat(c.split("/")[1]),m=(_=h[0])===null||_===void 0||(_=_.children)===null||_===void 0?void 0:_.find(function(G){var U,C=(U=G.frontmatter)===null||U===void 0?void 0:U.nav;return _e()(C)==="object"&&_e()(C==null?void 0:C.second)==="object"});if(!m){var k;m=(k=h[0])===null||k===void 0?void 0:k.children[0]}var O=(g=m)===null||g===void 0||(g=g.frontmatter)===null||g===void 0?void 0:g.nav,j={order:0,title:void 0};if(typeof O!="string"){var N,H,S,A;j.order=(N=O==null||(H=O.second)===null||H===void 0?void 0:H.order)!==null&&N!==void 0?N:0,j.title=(S=O==null||(A=O.second)===null||A===void 0?void 0:A.title)!==null&&S!==void 0?S:O==null?void 0:O.second}if(p.includes(x)){var L;n[x].push({title:j.title,order:j.order,children:(L=h[0])===null||L===void 0?void 0:L.children})}else n[x]=h.map(function(G){return D()(D()({},G),{},{title:j.title,order:j.order})})}else p.includes(c)?n[c]=[].concat($()(n[c]),$()(h)):n[c]=h},i=0,a=Object.entries(e);i<a.length;i++)o();return n},je=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},te={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},tt=function(){var e=(0,f.useSiteData)(),n=e.themeConfig,o=(0,f.useNavData)(),i=(0,f.useSidebarData)(),a=(0,f.useRouteMeta)(),s=(0,f.useTabMeta)(),d=(0,f.useLocation)(),c=(0,f.useLocale)(),h=(0,f.useIntl)(),p=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:h.formatMessage({id:"header.nav.home"})}},[h]),_=n.hideHomeNav?o:[p].concat($()(o));return D()(D()({},te),{},{locale:c||te.locale,location:d||te.location,navData:_||te.navData,routeMeta:a||te.routeMeta,sidebar:i||te.sidebar,siteData:D()(D()({},te.siteData),{},{themeConfig:n}),tabMeta:s||te.tabMeta})},ot=(0,Fe.F)()((0,we.mW)(function(){return te},{name:"dumi-theme-yunti"})),b=Ue?ot:function(t,e){var n=tt(),o=(0,Fe.F)()((0,we.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(b,o),o(t,e)},rt=["setLoading"],it=["setLoading"],Ve={},at=function(e,n){(0,u.useEffect)(function(){u.startTransition(function(){e()})},n)},lt=function(e,n){(0,Jn.Z)(function(){e()},n,{maxWait:96,wait:32})},st=typeof u.startTransition=="function"?at:lt,ae=function(e,n,o){var i=o||function(a,s){var d;return(d=b.setState)===null||d===void 0?void 0:d.call(b,He()({},a,s))};!Ue&&!Ve[e]&&(i(e,n),Ve[e]=!0),st(function(){i(e,n)},[n])},ut=function(){var e=(0,f.useSiteData)(),n=(0,f.useSidebarData)(),o=(0,f.useRouteMeta)(),i=(0,f.useTabMeta)(),a=(0,f.useNavData)(),s=(0,f.useLocation)(),d=(0,f.useLocale)(),c=(0,f.useIntl)(),h=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:c.formatMessage({id:"header.nav.home"})}},[c]);return ae("siteData",e,function(){var p,_,g=e.setLoading,x=Ie()(e,rt),m=((p=b.getState)===null||p===void 0?void 0:p.call(b))||{siteData:{}},k=m.siteData,O=k.setLoading,j=Ie()(k,it);V()(x,j)||(_=b.setState)===null||_===void 0||_.call(b,{siteData:e})}),ae("sidebar",n),ae("routeMeta",o),ae("location",s),ae("tabMeta",i),ae("locale",d),ae("navData",a,function(){var p,_=e.themeConfig.hideHomeNav?a:[h].concat($()(a));(p=b.setState)===null||p===void 0||p.call(b,{navData:_})}),!1},dt=l(29148),y=l.n(dt),B=l(66933),We,ct=(0,B.vJ)(We||(We=y()([`
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
`])),function(t){var e=t.theme;return e.colorText}),mt=ct,Ce=l(37620),Ke=function(e){return e.siteData.themeConfig},ht=function(e){return e.siteData.themeConfig.title},Oe=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},pt=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},_t=function(e){return e.siteData.themeConfig.giscus},vt=function(e){return e.siteData.themeConfig.header},Xe=function(e){return e===!1?!1:typeof e=="string"},ft=function(e){var n,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var i=["/api","/components"].concat($()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return i.some(function(a){return e.location.pathname.startsWith(a)})},ze=function(e){var n,o,i,a,s=Oe(e),d=e.routeMeta.frontmatter,c=e.locale.id,h=function(G){return G.replace("{github}",s).replace("{atomId}",d.atomId||"").replace("{title}",d.title).replace("{locale}",c)},p=e.siteData.themeConfig.apiHeader||{},_=p.type,g=_===void 0?"component":_,x=p.pkg,m=x===void 0?e.siteData.pkg.name:x,k=p.sourceUrl,O=p.docUrl,j=((n=d.apiHeader)===null||n===void 0?void 0:n.pkg)||m,N=d.atomId||d.title,H=((o=d.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,S=((i=d.apiHeader)===null||i===void 0?void 0:i.sourceUrl)||(Xe(k)?h(k):void 0),A=((a=d.apiHeader)===null||a===void 0?void 0:a.docUrl)||(Xe(O)?h(O):void 0);return{componentName:N,defaultImport:H,description:d.description,docUrl:A,pkg:j,sourceUrl:S,title:d.title,type:g}},gt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ze=function(e){var n,o,i=e.routeMeta,a=i.toc,s=i.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(a=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(s=e.tabMeta.frontmatter);var d=function(h){if(!s.tocDepth||typeof s.tocDepth=="number"&&s.tocDepth>h-1)return!0};return a.reduce(function(c,h){if(h.depth===2&&d(2))c.push(D()({},h));else if(h.depth===3&&d(3)){var p=c.at(-1);p&&(p.children=p.children||[],p.children.push(D()({},h)))}return c},[])},Ye=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(o){return o.children}).flat())||[]},bt=function(e){var n=Ye(e),o=e.location.pathname,i=n.findIndex(function(a){return a.link===o});return{currentIndex:i,next:n[i+1],prev:n[i-1]}},Tt=l(92010),xt=function(e){var n=e.routeMeta.frontmatter;return(0,Tt.Z)({},n.token,e.siteData.themeConfig.siteToken)},Et={apiHeader:ze,flattenSidebar:Ye,token:xt},yt=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},Rt=yt,St=l(827),Je=l(29191),Q=function(){var e=(0,Je.F)();return Ue||({GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_712c81fd-e882-4a88-b0c2-edd026f2b190",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_712c81fd-e882-4a88-b0c2-edd026f2b190",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"594",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240818.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:18963",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10503045896",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7896aeec-a7a9-4d86-8eca-4921d95dbb51",INVOCATION_ID:"0bc18a2e239a4150b506a90b4207a3c5",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"15",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 9",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.6.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_712c81fd-e882-4a88-b0c2-edd026f2b190",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_712c81fd-e882-4a88-b0c2-edd026f2b190",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_712c81fd-e882-4a88-b0c2-edd026f2b190",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE&&(e.mobile={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_712c81fd-e882-4a88-b0c2-edd026f2b190",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_712c81fd-e882-4a88-b0c2-edd026f2b190",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"594",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240818.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:18963",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10503045896",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7896aeec-a7a9-4d86-8eca-4921d95dbb51",INVOCATION_ID:"0bc18a2e239a4150b506a90b4207a3c5",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"15",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 9",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.6.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_712c81fd-e882-4a88-b0c2-edd026f2b190",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_712c81fd-e882-4a88-b0c2-edd026f2b190",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_712c81fd-e882-4a88-b0c2-edd026f2b190",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE==="true"),{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_712c81fd-e882-4a88-b0c2-edd026f2b190",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_712c81fd-e882-4a88-b0c2-edd026f2b190",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"594",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240818.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:18963",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10503045896",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7896aeec-a7a9-4d86-8eca-4921d95dbb51",INVOCATION_ID:"0bc18a2e239a4150b506a90b4207a3c5",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"15",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 9",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.6.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_712c81fd-e882-4a88-b0c2-edd026f2b190",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_712c81fd-e882-4a88-b0c2-edd026f2b190",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_712c81fd-e882-4a88-b0c2-edd026f2b190",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP&&(e.desktop={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_712c81fd-e882-4a88-b0c2-edd026f2b190",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_712c81fd-e882-4a88-b0c2-edd026f2b190",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.10",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"594",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240818.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:18963",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10503045896",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_7896aeec-a7a9-4d86-8eca-4921d95dbb51",INVOCATION_ID:"0bc18a2e239a4150b506a90b4207a3c5",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"15",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 9",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.6.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"7f58061bf75ea55776170691d27ecfd180c972e9",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_712c81fd-e882-4a88-b0c2-edd026f2b190",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_712c81fd-e882-4a88-b0c2-edd026f2b190",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_712c81fd-e882-4a88-b0c2-edd026f2b190",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP==="true")),e},Ne=l(20113),Z=l(70957),It=l(62090),Ot=l(94174),Nt=l(44550),Ae=l(24899),Le=l(31180),Me=l(42018),At=l(92496),K=l(12274),$e,Qe,qe,en,nn,kt=(0,B.kc)(function(t){var e=t.css,n=t.token,o=t.responsive,i=t.stylish;return{desc:e($e||($e=y()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),n.fontSizeLG,n.lineHeightLG),label:e(Qe||(Qe=y()([`
    width: 80px;
  `]))),meta:e(qe||(qe=y()([""]))),text:e(en||(en=y()([`
    `,`
  `])),i.resetLinkColor),title:e(nn||(nn=y()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=l(651),tn=(0,u.memo)(function(t){var e=t.title,n=t.type,o=t.componentName,i=t.description,a=t.defaultImport,s=t.pkg,d=t.sourceUrl,c=t.docUrl,h=t.serviceList,p=h===void 0?[]:h,_=Q(),g=_.mobile,x=kt(),m=x.styles,k=n==="doc",O=[d&&{children:"Source",icon:(0,r.jsx)(Z.Z,{icon:Me.Z}),url:d},c&&{children:"Edit",icon:(0,r.jsx)(Z.Z,{icon:At.Z}),url:c}].filter(Boolean),j=a?"import ".concat(o," from '").concat(s,"';"):"import { ".concat(o," } from '").concat(s,"';");return(0,r.jsxs)(K.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(Nt.Z.Title,{className:m.title,children:e}),i&&(0,r.jsx)(It.Z,{className:m.desc,children:i}),!k&&(0,r.jsxs)(K.D,{gap:g?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(Ot.Z,{spotlight:!0,children:j})}),(0,r.jsx)(Ae.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)(K.D,{distribution:"space-between",gap:g?24:0,horizontal:!g,children:[(0,r.jsx)(Le.Z,{split:(0,r.jsx)(Ae.Z,{type:"vertical"}),wrap:!0,children:p.map(function(N){return(0,r.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",title:N.label,children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},N.label)})}),(0,r.jsx)(Le.Z,{className:m.meta,split:(0,r.jsx)(Ae.Z,{type:"vertical"}),children:O.map(function(N,H){return(0,r.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},H)})})]})]})]})}),on,rn,an,ln=(0,B.kc)(function(t){var e=t.cx,n=t.css,o=t.token,i=t.stylish;return{background:e(i.gradientAnimation,n(on||(on=y()([`
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
    `])))),changelog:n(rn||(rn=y()([`
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
  `])),o.colorTextDescription,o.colorBorderSecondary),content:n(an||(an=y()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Dt=l(48037),Ht=l(83994),Ut=l(25220),sn,un,dn,cn,jt=(0,B.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(sn||(sn=y()([`
    justify-content: flex-end;
  `]))),container:n(un||(un=y()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:n(dn||(dn=y()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:n(cn||(cn=y()([`
    font-size: 16px;
  `])))}}),Ct=(0,u.memo)(function(t){var e=t.title,n=t.link,o=t.type,i=jt(),a=i.styles,s=i.cx,d=(0,f.useIntl)(),c=(0,u.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{icon:Ht.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(Z.Z,{icon:Ut.Z})]})}},[d,o]);return(0,r.jsx)(f.Link,{to:n,children:(0,r.jsxs)(K.D,{className:a.container,gap:8,children:[(0,r.jsx)(K.D,{className:s(a.nav,o==="next"&&a.alignmentEnd),gap:4,horizontal:!0,children:c}),(0,r.jsx)(K.D,{className:s(a.title,o==="next"&&a.alignmentEnd),horizontal:!0,children:e})]})})}),mn=Ct,Lt=(0,u.memo)(function(){var t=b(bt,V()),e=t.prev,n=t.next,o=Q(),i=o.mobile;return(0,r.jsxs)(K.D,{distribution:"space-between",gap:i?12:0,horizontal:!i,style:{margin:i?12:0},children:[e?(0,r.jsx)(mn,D()({type:"prev"},e)):(0,r.jsx)("div",{}),n?(0,r.jsx)(mn,D()({type:"next"},n)):(0,r.jsx)("div",{})]})}),Mt=Lt,hn,pn,Bt=(0,B.kc)(function(t,e){var n=t.cx,o=t.token,i=t.responsive,a=t.css;return{content:n(!e&&a(hn||(hn=y()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,i.mobile),a(pn||(pn=y()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Pt=["children"],Gt=(0,u.memo)(function(t){var e=t.children,n=Ie()(t,Pt),o=b(function(_){return _.siteData.loading}),i=b(Ke,V()),a=i.docStyle,s=Q(),d=s.mobile,c=Bt(a==="pure"),h=c.styles,p=c.cx;return(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)(K.D,D()(D()({gap:d?0:24,width:"100%"},n),{},{children:[(0,r.jsx)("div",{className:p("dumi-antd-style-content",h.content),children:(0,r.jsx)(Dt.Z,{children:e})}),(0,r.jsx)(Mt,{})]}))}),_n=Gt,wt=(0,u.memo)(function(){var t=(0,f.useOutlet)(),e=Q(),n=e.mobile,o=b(function(h){return{repoBase:Oe(h)}},ne.X),i=o.repoBase,a=b(function(h){return{fm:h.routeMeta.frontmatter}},V()),s=a.fm,d=ln(),c=d.styles;return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ne.Z,{className:c.content,style:{padding:n?0:24},children:[(0,r.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,r.jsx)(tn,{description:s.description,docUrl:"".concat(i,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(i,"/blob/master/CHANGELOG.md"),title:s.title})}),(0,r.jsx)(_n,{className:c.changelog,children:t})]})]})}),Ft=wt,Vt=l(13876),Wt=l(22148),Kt=l(92471),Xt=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),zt=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Zt=(0,u.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Yt=(0,u.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Jt=(0,u.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),$t=(0,u.memo)(function(){var t=b(ze,V()),e=t.pkg,n=(0,u.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(Zt,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)(Jt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)(Xt,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Yt,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(zt,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(tn,D()({serviceList:n},t))}),Qt=$t,qt=(0,u.memo)(function(){var t=(0,f.useOutlet)(),e=(0,f.useLocation)(),n=Q(),o=n.mobile,i=b(function(p){return{giscus:_t(p),isApiPage:ft(p)}},ne.X),a=i.isApiPage,s=i.giscus,d=ln(),c=d.styles;(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var h=(0,u.useCallback)(function(){return s&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(Wt.Z,{category:s.category,categoryId:s.categoryId,id:"lobehub",mapping:"title",repo:s.repo,repoId:s.repoId})})},[s,e.pathname]);return(0,r.jsxs)(Vt.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ne.Z,{className:c.content,style:{marginBottom:48,padding:o?0:24},children:[a?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)(Qt,{})}):void 0,(0,r.jsxs)(_n,{children:[(0,r.jsx)(Kt.Z,{children:t}),s&&(0,r.jsx)(h,{})]})]})]})}),eo=qt,no=l(57030),Be=function(e){return!!e.routeMeta.frontmatter.hero},re=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},to=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||re(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},oo=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||re(e,e.siteData.themeConfig.description)},ro=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=re(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||re(e,e.siteData.themeConfig.actions)},io=function(e){var n;return Be(e)?((n=re(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||re(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},ao=function(e){var n=e.siteData.themeConfig.customPages;if(!(!n||n.length===0))return n.find(function(o){return o.path===e.location.pathname})},lo=(0,u.memo)(function(){var t=b(io,V()),e=(0,B.Fg)();if(t!=null&&t.length)return(0,r.jsx)(no.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),so=lo,uo=l(72819),co=(0,u.memo)(function(){var t=b(Be),e=b(to),n=b(oo),o=b(ro);if(t)return(0,r.jsx)(uo.Z,{actions:o,description:n,title:e})}),mo=co,ho=(0,u.memo)(function(){var t=(0,f.useOutlet)();return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(K.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(mo,{}),(0,r.jsx)(so,{}),t]})}),po=ho,_o=l(41850),vo=l(2957),fo=l(35723),go=l(59325),bo=function(e){var n=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},i={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:vo.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,r.jsx)(Z.Z,{icon:fo.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},a={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:Me.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:f.Link,icon:(0,r.jsx)(Z.Z,{icon:go.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},s={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,i,a,s]},vn,fn,To=(0,B.kc)(function(t){var e=t.css,n=t.responsive,o=t.token,i="rc-footer";return{container:e(vn||(vn=y()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,n.mobile),footer:e(fn||(fn=y()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,i,o.colorTextTertiary,o.colorLinkHover,i,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,i)}}),xo=(0,u.memo)(function(){var t=b(function(x){return x.siteData},V()),e=t.themeConfig,n=t.pkg,o=e.footerConfig,i=e.footer,a=b(Oe,ne.X),s=Q(),d=s.mobile,c=To(),h=c.styles,p=c.theme,_=(0,u.useMemo)(function(){var x=o!=null&&o.columns?o==null?void 0:o.columns:bo({github:a||n.homepage});return o!=null&&o.resources&&(x[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(x[3]=o==null?void 0:o.moreProducts),x.filter(function(m){return m.items&&m.items.length>0})},[o==null?void 0:o.columns,o==null?void 0:o.moreProducts,o==null?void 0:o.resources,a,n]);if(i){var g=(o==null?void 0:o.bottom)||i;return(0,r.jsx)(_o.Z,{bottom:d?(0,r.jsxs)(Ne.Z,{className:h.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)(K.D,{align:"center",dangerouslySetInnerHTML:{__html:g},horizontal:!0})]}):(0,r.jsxs)(Ne.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ae.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:g}})]}),columns:_,contentMaxWidth:p.contentMaxWidth,theme:p.appearance})}}),Eo=xo,yo=l(4413),Ro=l(23961),So=l(61672),gn,Io=(0,B.kc)(function(t){var e=t.css,n=t.responsive,o=t.token;return e(gn||(gn=y()([`
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
  `])),o.colorText,n.mobile)}),Oo=(0,u.memo)(function(){var t=b(Ke,V()),e=b(function(d){return d.locale},V()),n=Q(),o=n.mobile,i=Io(),a=i.styles,s=i.cx;return t&&(0,r.jsx)(f.Link,{className:s(a),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Le.Z,{children:[(0,r.jsx)(So.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:o?32:36}),t.name]})})}),No=Oo,Ao=l(69916),ko=l(80326),Do=l(31125),bn,Tn,Ho=(0,B.kc)(function(t){var e=t.css,n=t.stylish,o=t.token,i=t.responsive,a=t.prefixCls;return{link:e(bn||(bn=y()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(Tn||(Tn=y()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),a,o.colorText,i.mobile)}}),xn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},Uo=(0,u.memo)(function(){var t=Ho(),e=t.styles,n=(0,f.useLocation)(),o=n.pathname,i=b(function(s){return s.navData},ne.X),a=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ao.Z,{activeKey:a,className:e.tabs,items:i.map(function(s){var d=s.activePath||xn(s.link);return{key:je(s.link)?s.link:d,label:je(s.link)?(0,r.jsxs)("a",{className:e.link,href:String(s.link),onClick:function(h){return h.preventDefault()},rel:"noreferrer",target:s.target||"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:s.title})," ",(0,r.jsx)(Z.Z,{icon:Do.Z})]}):(0,r.jsx)(f.Link,{className:e.link,onClick:function(h){return h.preventDefault()},target:s.target,to:String(s.link),children:s.title})}}),onTabClick:function(d){var c=i.find(function(h){return h.activePath===d||h.link===d||xn(h.link)===d});if(c!=null&&c.link){if(je(c.link)||c.target==="_blank")return window.open(c.link);f.history.push(c.link)}}}),(0,r.jsx)(ko.Z,{})]})}),jo=Uo,Co=l(19210),Lo=l(57912),En,yn,Rn,Sn,In,Mo=(0,B.kc)(function(t){var e=t.token,n=t.responsive,o=t.css,i=t.cx;return{container:o(En||(En=y()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:o(yn||(yn=y()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(Rn||(Rn=y()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:i("site-header-shortcut",o(Sn||(Sn=y()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:i(o(In||(In=y()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Bo=(0,u.memo)(function(){var t=(0,Je.F)(),e=t.mobile,n=Mo(),o=n.styles,i=(0,u.useState)(!1),a=P()(i,2),s=a[0],d=a[1],c=(0,f.useSiteSearch)(),h=c.keywords,p=c.setKeywords,_=c.result,g=c.loading,x=(0,f.useIntl)();return(0,r.jsxs)("div",{className:o.container,children:[(0,r.jsx)(Co.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){d(!1)},1)},onChange:function(k){return p(k.target.value)},onFocus:function(){return d(!0)},placeholder:x.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),h.trim()&&s&&(_.length>0||!g)&&(0,r.jsx)("div",{className:o.popover,children:(0,r.jsx)(Lo.Z,{data:_,loading:g})})]})}),Po=Bo,Go=l(93974),wo=l(74604),Fo=(0,u.memo)(function(){var t=(0,u.useState)(!1),e=P()(t,2),n=e[0],o=e[1],i=b(function(p){return p.navData},V()),a=b(function(p){return p.sidebar},V()),s=b(function(p){return{activePath:gt(p),pathname:p.location.pathname}},ne.X),d=s.pathname,c=s.activePath,h=(0,u.useMemo)(function(){var p=a==null?void 0:a.map(function(_){return!_.link&&{children:_.children.map(function(g){return{key:"s-".concat(g.link),label:(0,r.jsx)(f.Link,{onClick:function(){o(!1)},to:g.link,children:g.title})}}),label:_.title,type:"group"}});return i.map(function(_){return{children:(_.activePath||_.link)===c&&p,key:_.activePath||_.link,label:(0,r.jsx)(f.Link,{to:String(_.link),children:_.title})}})},[i,c,a]);return(0,r.jsx)(Go.Z,{items:h,openKeys:[c],opened:n,selectedKeys:(0,wo.Z)([c,"s-".concat(d)]),setOpened:o})}),Vo=Fo,On=l(86982),Wo=l(93910),Nn,Ko=(0,Wo.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Xo=(0,B.kc)(function(t){var e=t.css;return e(Nn||(Nn=y()([`
    svg {
      overflow: visible !important;
    }
  `])))}),zo=(0,u.memo)(function(){var t=b(pt),e=Xo(),n=e.styles;return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(On.Z,{className:n,icon:Ko,size:"site"})}):void 0}),Zo=zo,Yo=(0,u.memo)(function(){var t=b(Oe);return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(On.Z,{icon:Me.Z,size:"site"})}):void 0}),Jo=Yo,An=l(88016),X=l(11348),fe=l(45623),$o=l(51683),Qo=l(86473),kn,Dn,Hn,qo=(0,B.kc)(function(t,e){var n=t.css,o=t.cx,i=t.token;return{active:o("".concat(e,"-item-active"),n(kn||(kn=y()([`
      background: `,`;
    `])),i.colorFillTertiary)),item:o("".concat(e,"-item"),n(Dn||(Dn=y()([`
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
    `])),i.fontFamily,i.colorText,i.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),n(Hn||(Hn=y()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),i.colorPrimaryText,i.colorPrimaryBg,i.colorPrimaryTextHover,i.colorPrimaryBgHover))}}),er=["value","label","prefixCls","isSelected","isActive","disabled"],nr=(0,u.forwardRef)(function(t,e){var n=t.value,o=t.label,i=t.prefixCls,a=t.isSelected,s=t.isActive,d=t.disabled,c=Ie()(t,er),h=qo(i),p=h.styles,_=h.cx;return(0,r.jsx)("button",D()(D()({"aria-selected":a,className:_(p.item,He()(He()({},p.selected,a),p.active,s)),disabled:d,ref:e,role:"option",tabIndex:-1,type:"button"},c),{},{children:o}),n)}),tr=nr,Un,jn,or=(0,B.kc)(function(t,e){var n=t.css,o=t.stylish,i=t.cx,a=t.token;return{button:i("".concat(e,"-button"),n(Un||(Un=y()([`
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
    `])),o.buttonDefaultHover,a.fontSize,a.colorTextSecondary,a.colorBgContainer,a.colorBorder,a.borderRadius,a.colorPrimary,a.colorPrimaryBg)),container:i(e,n(jn||(jn=y()([`
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
    `])),a.fontSize,a.colorBgElevated,a.colorBorder,a.boxShadowSecondary))}}),rr=(0,u.memo)(function(t){var e=t.options,n=e===void 0?[]:e,o=t.value,i=t.prefixCls,a=t.onChange,s=t.renderValue,d=t.renderItem,c=t.style,h=i!=null?i:"native-select",p=(0,Qo.Z)(0,{onChange:a,value:o}),_=P()(p,2),g=_[0],x=_[1],m=or(h),k=m.styles,O=(0,u.useRef)([]),j=(0,u.useRef)([]),N=(0,u.useRef)(null),H=(0,u.useRef)(!1),S=(0,u.useRef)(!0),A=(0,u.useRef)(),L=(0,u.useRef)(null),G=(0,u.useState)(!1),U=P()(G,2),C=U[0],z=U[1],w=(0,u.useState)(null),R=P()(w,2),I=R[0],E=R[1],ge=(0,u.useState)(!1),de=P()(ge,2),le=de[0],ce=de[1],se=(0,u.useState)(0),be=P()(se,2),Te=be[0],ue=be[1],xe=(0,u.useState)(!1),Ee=P()(xe,2),me=Ee[0],he=Ee[1],ye=(0,u.useState)(!1),pe=P()(ye,2),v=pe[0],T=pe[1];C||(Te!==0&&ue(0),le&&ce(!1),v&&T(!1));var M=(0,X.YF)({middleware:le?[(0,fe.cv)(5),me?(0,fe.uY)({crossAxis:!0,padding:10}):(0,fe.RR)({padding:10}),(0,fe.dp)({apply:function(W){var ee,Re,Fr=W.availableHeight;Object.assign((ee=(Re=L.current)===null||Re===void 0?void 0:Re.style)!==null&&ee!==void 0?ee:{},{maxHeight:"".concat(Fr,"px")})},padding:10})]:[(0,X.aN)({index:g,listRef:O,minItemsVisible:me?8:4,offset:Te,onFallbackChange:ce,overflowRef:N,padding:10,referenceOverflowThreshold:20,scrollRef:L}),(0,fe.cv)({crossAxis:-4})],onOpenChange:z,open:C,placement:"bottom-start",whileElementsMounted:$o.Me}),Y=M.x,ie=M.y,F=M.strategy,q=M.refs,J=M.context,Ge=(0,X.NI)([(0,X.eS)(J,{event:"mousedown"}),(0,X.bQ)(J),(0,X.qs)(J,{role:"listbox"}),(0,X.Rz)(J,{enabled:!le,onChange:ue,overflowRef:N,scrollRef:L}),(0,X.c0)(J,{activeIndex:I,listRef:O,onNavigate:E,selectedIndex:g}),(0,X.ox)(J,{activeIndex:I,listRef:j,onMatch:C?E:x})]),Mr=Ge.getReferenceProps,Br=Ge.getFloatingProps,Pr=Ge.getItemProps;(0,u.useEffect)(function(){if(C)return A.current=setTimeout(function(){H.current=!0},300),function(){clearTimeout(A.current)};H.current=!1,S.current=!0},[C]);var Gr=n[g]||{},wr=Gr.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",D()(D()({"aria-label":"selected-item",className:k.button,ref:q.setReference,style:c,type:"button"},Mr({onPointerMove:function(W){var ee=W.pointerType;ee==="mouse"&&he(!1)},onTouchStart:function(){he(!0)}})),{},{children:s?s(g):wr})),(0,r.jsx)(X.ll,{children:C&&(0,r.jsx)(X.y0,{lockScroll:!me,style:{zIndex:3e3},children:(0,r.jsx)(X.wD,{context:J,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:q.setFloating,style:{left:Y!=null?Y:0,position:F,top:ie!=null?ie:0},children:(0,r.jsx)("div",D()(D()({className:k.container,ref:L,style:{overflowY:"auto"}},Br({onContextMenu:function(W){W.preventDefault()}})),{},{children:n.map(function(oe,W){return(0,r.jsx)(tr,D()({disabled:v,isActive:W===I,isSelected:W===g,label:d?d(oe,W):oe.label,prefixCls:h,ref:function(Re){O.current[W]=Re,j.current[W]=oe.label},value:oe.value},Pr({onClick:function(){H.current&&(x(W),z(!1))},onKeyDown:function(){H.current=!0},onMouseUp:function(){S.current&&(H.current&&(x(W),z(!1)),clearTimeout(A.current),A.current=setTimeout(function(){H.current=!0}))},onTouchStart:function(){H.current=!0,S.current=!1}})),oe.value)})}))})})})})]})}),ir=rr;function ke(t){var e=t.pathname,n=t.current,o=t.target,i="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(i).replace(/([^/])\/$/,"$1"):"".concat(i).concat(o.suffix)}var ar={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Cn={"en-US":"EN","zh-CN":"\u4E2D"},lr=(0,u.memo)(function(t){var e=t.locale,n=t.current,o=(0,f.useLocation)(),i=o.pathname,a=(0,u.useState)(function(){return ke({current:n,pathname:i,target:e})}),s=P()(a,2),d=s[0],c=s[1];return(0,u.useEffect)(function(){c(ke({current:n,pathname:i,target:e}))},[n,e,i]),(0,r.jsx)(f.Link,{to:d,children:(0,r.jsx)(An.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Cn[e.id]})})}),sr=(0,u.memo)(function(){var t=b(function(n){return n.siteData.locales}),e=b(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,r.jsx)(ir,{onChange:function(o){console.log(ke({current:e,pathname:location.pathname,target:t[o]})),f.history.push(ke({current:e,pathname:location.pathname,target:t[o]}))},options:t.map(function(n){return{label:Cn[n.id],value:n.id}}),renderItem:function(o,i){return"".concat(ar[t[i].id]," ").concat(t[i].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,r.jsx)(lr,{current:e,locale:t.find(function(n){var o=n.id;return o!==e.id})})}),ur=sr,dr=l(77388),cr=(0,u.memo)(function(){var t=(0,Ce.f)(function(n){return n.themeMode}),e=(0,f.usePrefersColor)()[2];return(0,u.useEffect)(function(){return e(t)},[e,t]),(0,r.jsx)(dr.Z,{onThemeSwitch:function(o){Ce.f.setState({themeMode:o})},themeMode:t})}),Ln=cr,mr=l(12531),hr=l(25381),pr=l(59596),_r=l(99351),Mn,Bn,vr=(0,B.kc)(function(t){var e=t.css;return{avatar:e(Mn||(Mn=y()([`
      cursor: pointer;
    `]))),menu:e(Bn||(Bn=y()([`
      width: 180px;
    `])))}}),Pe="__LOGIN_USER",Pn=(0,u.memo)(function(){var t,e=vr(),n=e.styles,o=b(vt),i=b(function(_){return _.loginUser}),a=(0,f.useIntl)(),s=(0,u.useState)(i),d=P()(s,2),c=d[0],h=d[1];(0,u.useEffect)(function(){var _=window.localStorage.getItem(Pe);if(_)try{var g=JSON.parse(_);h(g),b.setState({loginUser:g})}catch(x){console.warn("parse login user info from ".concat(Pe," failed"),x)}},[]);var p=(0,u.useCallback)(function(){window.localStorage.removeItem(Pe)},[]);if(o!=null&&(t=o.userActionButton)!==null&&t!==void 0&&t.button)return c!=null&&c.user?(0,r.jsx)(mr.Z,{menu:{className:n.menu,items:o.userActionButton.menuItems||[{icon:(0,r.jsx)(Z.Z,{icon:pr.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/management/account",children:"\u8D26\u6237\u4E2D\u5FC3"}),key:"account"},{type:"divider"},{icon:(0,r.jsx)(Z.Z,{icon:_r.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/logout",onClick:p,children:"\u9000\u51FA\u767B\u5F55"}),key:"logout"}]},children:(0,r.jsx)(hr.C,{className:n.avatar,size:"small",src:c.avatar,children:c.user.charAt(0).toUpperCase()})}):(0,r.jsx)(An.ZP,D()(D()({},o.userActionButton.button),{},{children:a.formatMessage({id:"header.actions.user"})}))}),fr=(0,u.memo)(function(){var t=b(function(o){return!!o.routeMeta.frontmatter}),e=Q(),n=e.mobile;if(t)return(0,r.jsx)(yo.Z,{actions:n?(0,r.jsxs)(Ro.Z,{align:"center",gap:"small",children:[(0,r.jsx)(Ln,{}),(0,r.jsx)(Pn,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Po,{}),(0,r.jsx)(ur,{}),(0,r.jsx)(Jo,{}),(0,r.jsx)(Zo,{}),(0,r.jsx)(Ln,{}),(0,r.jsx)(Pn,{})]}),logo:(0,r.jsx)(No,{}),nav:n?(0,r.jsx)(Vo,{}):(0,r.jsx)(jo,{})})}),gr=fr,br=l(87157),Tr=l(36177),xr=l(41378),Gn=function(){var e=(0,f.useSiteData)(),n=e.themeConfig,o=n;return o},Er=l(14582),wn=l.n(Er),yr=l(70761),Rr={i8:"1.6.0"},Sr=function t(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=wn()(e),a;try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s.key===n)return[].concat($()(o),[s.key]);if(s.children&&s.children.length>0){var d=t(s.children,n,[].concat($()(o),[s.key]));if(d)return d}}}catch(c){i.e(c)}finally{i.f()}return null},Ir=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,f.useLocation)(),i=o.pathname,a=o.search,s=Gn(),d=s.sidebarGroupModePath,c=s.sidebarEnhance,h=c===void 0?{}:c,p=n.before,_=n.after,g=(0,f.useFullSidebarData)(),x=nt(g),m=(0,f.useLocale)(),k="/".concat((e=i.split("/"))===null||e===void 0?void 0:e[1]),O=x[k],j=(0,u.useMemo)(function(){return Object.values(g).reduce(function(U,C){var z=C.flatMap(function(E){return E.children}),w=wn()(z),R;try{for(w.s();!(R=w.n()).done;){var I=R.value;U[I.link]=I.title}}catch(E){w.e(E)}finally{w.f()}return U},{})},[g]),N=(0,u.useMemo)(function(){var U=Object.keys(h).find(function(C){return i.startsWith(C)});if(U)return h[U]},[i,h]),H=(0,u.useMemo)(function(){var U=function(I){return I&&_e()(I)==="object"&&"link"in I&&"title"in I},C=function(I){return I&&_e()(I)==="object"&&I.type==="group"},z=function(I){return I&&_e()(I)==="object"&&"children"in I};function w(R){return typeof R=="string"?{key:R,label:(0,r.jsxs)(f.Link,{to:"".concat(R).concat(a),children:[p,j[R],_]})}:C(R)?{type:"group",label:R.title,key:R.title,children:R.children.map(function(I){return w(I)})}:z(R)?{key:R.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:R.title}),children:R.children.map(function(I){return w(I)})}:U(R)?{label:(0,r.jsx)(f.Link,{target:R.target,to:R.link,children:R.title}),key:R.link}:null}if(N)return N.map(function(R){return w(R)})},[_,p,N,j,a]),S=(0,u.useMemo)(function(){var U,C,z=new RegExp("".concat((U=m==null?void 0:m.suffix)!==null&&U!==void 0?U:"","$"),"g"),w=$()(O!=null?O:[]),R=function(E){var ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return E&&ge&&(0,r.jsx)(yr.Z,{bordered:!1,color:typeof E=="string"?"processing":E.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof E=="string"?E:E.title).replace("VERSION","v".concat(Rr.i8))})};return(C=w==null?void 0:w.reduce(function(I,E){if(E!=null&&E.title){var ge=d===!0?!0:(d!=null?d:[]).some(function(v){return i.startsWith(v)});if(ge){var de;I.push({type:"group",label:E==null?void 0:E.title,order:E==null?void 0:E.order,key:E==null?void 0:E.title,children:(de=E.children)===null||de===void 0?void 0:de.map(function(v){var T,M;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[p,(0,r.jsx)("span",{children:ve(v==null?void 0:v.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:ve((T=v.frontmatter)===null||T===void 0?void 0:T.subtitle)},"chinese"),R((M=v.frontmatter)===null||M===void 0?void 0:M.tag,!p&&!_),_]}),key:v.link.replace(z,"")}})})}else{var le,ce,se={},be=E.children.reduce(function(v,T){var M,Y,ie=v,F=T==null||(M=T.frontmatter)===null||M===void 0?void 0:M.type,q=typeof F=="string"?F:(Y=F==null?void 0:F.title)!==null&&Y!==void 0?Y:"default";if(ie[q]||(ie[q]=[]),se[q])F!=null&&F.order&&(se[q].order=F.order);else{var J;se[q]={title:q,order:(J=F==null?void 0:F.order)!==null&&J!==void 0?J:-1}}return ie[q].push(T),ie},{}),Te=Object.keys(be).sort(function(v,T){return se[v].order-se[T].order}).reduce(function(v,T){var M=v;return M[T]=be[T],M},{}),ue=[];ue.push.apply(ue,$()((le=(ce=Te.default)===null||ce===void 0?void 0:ce.map(function(v){var T;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[p,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!p&&!_),_]}),key:v.link.replace(z,"")}}))!==null&&le!==void 0?le:[]));for(var xe=0,Ee=Object.entries(Te);xe<Ee.length;xe++){var me=P()(Ee[xe],2),he=me[0],ye=me[1];he!=="default"&&ue.push({type:"group",label:he,key:he,children:ye==null?void 0:ye.map(function(v){var T;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[p,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!p&&!_),_]}),key:v.link.replace(z,"")}})})}I.push({label:E==null?void 0:E.title,key:E==null?void 0:E.title,order:E==null?void 0:E.order,children:ue})}}else{var pe=E.children||[];pe.every(function(v){var T;return v==null||(T=v.frontmatter)===null||T===void 0?void 0:T.date})&&pe.sort(function(v,T){var M,Y;return(v==null||(M=v.frontmatter)===null||M===void 0?void 0:M.date)>(T==null||(Y=T.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),I.push.apply(I,$()(pe.map(function(v){var T;return{order:v==null?void 0:v.order,label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[p,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!p&&!_),_]}),key:v.link.replace(z,"")}})))}return I.sort(function(v,T){return(v==null?void 0:v.order)<(T==null?void 0:T.order)?-1:1}),I},[]))!==null&&C!==void 0?C:[]},[O,d,i,a,p,_,m]),A=(0,u.useMemo)(function(){var U;return i.replace(new RegExp("".concat((U=m==null?void 0:m.suffix)!==null&&U!==void 0?U:"","$"),"g"),"")},[m,i]),L=(0,u.useMemo)(function(){return Sr(H||S,A)},[S,A,H]),G=L==null?void 0:L.slice(0,-1);return[H||S,A,G]},Fn,Vn,Wn,Or=(0,B.kc)(function(t,e){var n=t.token,o=t.css,i=t.prefixCls,a=e.isSideBarGroupMode;return{asideContainer:o(Fn||(Fn=y()([`
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
      `])),i,i,i,i,i,i,n.colorBorder,i,i,i,n.colorFillSecondary,i,i,i,i,i,!a&&o(Vn||(Vn=y()([`
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
          `])),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n.colorTextDisabled),mainMenu:o(Wn||(Wn=y()([`
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
      `])),n.headerHeight,n.headerHeight)}}),Nr=function(){var e=(0,f.useLocation)(),n=e.pathname,o=Gn(),i=o.sidebarGroupModePath,a=(0,u.useMemo)(function(){return i===!0?!0:(i!=null?i:[]).some(function(O){return n.startsWith(O)})},[n,i]),s=Or({isSideBarGroupMode:a}),d=s.styles,c=br.Z.useToken(),h=c.token,p=Ir(),_=P()(p,3),g=_[0],x=_[1],m=_[2],k=(0,r.jsx)(Tr.ZP,{theme:{components:{Menu:{itemBg:h.colorBgLayout,darkItemBg:h.colorBgLayout}}},children:(0,r.jsx)(xr.Z,{className:d.asideContainer,defaultOpenKeys:m,inlineIndent:30,items:g,mode:"inline",selectedKeys:[x]},m==null?void 0:m[0])});return(0,r.jsx)("div",{className:d.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:k})})},Ar=Nr,kr=l(61882),Kn=48,Dr=(0,u.memo)(function(){var t=b(Ze,V()),e=Q(),n=e.mobile,o=(0,B.Fg)(),i=(0,u.useState)(Kn),a=P()(i,2),s=a[0],d=a[1],c=(0,f.useLocation)();if((0,u.useEffect)(function(){var h=document.querySelector("#api-header");h&&d(h.clientHeight+Kn)},[c.pathname,c.hash,c.search,t]),!((t==null?void 0:t.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("div",{style:{height:s}}),(0,r.jsx)(kr.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:n,items:t,tocWidth:o.tocWidth})]})}),Hr=Dr,Ur=(0,u.memo)(function(){var t=(0,f.useIntl)(),e=(0,f.useLocation)(),n=e.hash,o=(0,B.Fg)(),i=Q(),a=i.mobile,s=i.laptop,d=b(function(S){var A=S.location.pathname==="/changelog",L=Be(S),G;return L||S.location.pathname==="/"?G="home":A?G="changelog":G="docs",{loading:S.siteData.loading,noToc:Ze(S).length===0,page:G,siteTitle:ht(S),themeConfig:S.siteData.themeConfig}},ne.X),c=d.loading,h=d.page,p=d.siteTitle,_=d.noToc,g=d.themeConfig,x=b(function(S){return S.routeMeta.frontmatter},V()),m=b(ao),k=h!=="docs"||a||x.sidebar===!1||(m==null?void 0:m.sider)===!1,O=x.toc===!1||_,j=a?O:!s||O,N=(0,u.useCallback)(function(){var S=(m==null?void 0:m.title)||x.title,A=(m==null?void 0:m.description)||x.description||g.description,L=(m==null?void 0:m.keywords)||x.keywords||g.keywords;return(0,r.jsxs)(f.Helmet,{children:[(0,r.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),S&&(0,r.jsx)("meta",{content:S,property:"og:title"}),A&&(0,r.jsx)("meta",{content:A,name:"description"}),A&&(0,r.jsx)("meta",{content:A,property:"og:description"}),L&&(0,r.jsx)("meta",{content:L.join(","),name:"keywords"}),L&&(0,r.jsx)("meta",{content:L.join(","),property:"og:keywords"}),!S||h==="home"?(0,r.jsx)("title",{children:p}):(0,r.jsxs)("title",{children:[S," - ",p]})]})},[m==null?void 0:m.description,m==null?void 0:m.keywords,m==null?void 0:m.title,x.description,x.keywords,x.title,t.locale,h,p,g.description,g.keywords]);(0,u.useEffect)(function(){var S=n.replace("#","");S&&setTimeout(function(){var A=document.querySelector("#".concat(decodeURIComponent(S)));A&&(A.scrollIntoView(),window.scrollBy({top:-80}))},1)},[c,n]),(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[p]);var H=(0,f.useOutlet)();return(m==null?void 0:m.header)===!1&&(m==null?void 0:m.sider)===!1&&(m==null?void 0:m.footer)===!1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{}),H]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{}),(0,r.jsxs)(St.ZP,{asideWidth:o.sidebarWidth,footer:(m==null?void 0:m.footer)!==!1&&(0,r.jsx)(Eo,{}),header:(m==null?void 0:m.header)!==!1&&(0,r.jsx)(gr,{}),headerHeight:a&&h!=="home"?o.headerHeight+36:o.headerHeight,sidebar:k?void 0:(0,r.jsx)(Ar,{}),toc:j?void 0:(0,r.jsx)(Hr,{}),tocWidth:j?0:o.tocWidth,children:[m&&H,!m&&h==="home"&&(0,r.jsx)(po,{}),!m&&h==="changelog"&&(0,r.jsx)(Ft,{}),!m&&h==="docs"&&(0,r.jsx)(eo,{})]},k?"full":"no-sidebar")]})}),jr=Ur,Cr=(0,u.memo)(function(){var t=(0,Ce.f)(function(n){return n.themeMode},ne.X),e=b(Et.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ut,{}),(0,r.jsxs)(De.Z,{customToken:function(o){return Object.assign({},Rt(o),e)},themeMode:t,children:[(0,r.jsx)(mt,{}),(0,r.jsx)(jr,{})]})]})}),Lr=Cr},37620:function(Xn,Se,l){l.d(Se,{f:function(){return ne}});var De=l(32089),u=l(9676),ne=(0,u.F)()((0,De.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
