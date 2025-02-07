"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[40367],{76961:function(zn,Se,s){s.r(Se),s.d(Se,{default:function(){return Pr}});var Ue=s(29552),l=s(92379),ne=s(15354),Zn=s(12027),$=s.n(Zn),Yn=s(19317),Ie=s.n(Yn),Jn=s(29861),je=s.n(Jn),$n=s(91253),f=s(48073),Qn=s(95490),V=s.n(Qn),Fe=s(32089),Ve=s(9676),qn=s(24325),k=s.n(qn),et=s(34180),ve=s.n(et),nt=s(28633),L=s.n(nt),Ce=typeof window!="undefined",fe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e.replace(/<\w+>.*<\/\w+>/g,"")},tt=function(e){for(var n={},o=function(){var d=L()(a[i],2),c=d[0],p=d[1],h=Object.keys(n);if(c.split("/").length===3){var _,g,y="/".concat(c.split("/")[1]),m=(_=p[0])===null||_===void 0||(_=_.children)===null||_===void 0?void 0:_.find(function(z){var E,I=(E=z.frontmatter)===null||E===void 0?void 0:E.nav;return ve()(I)==="object"&&ve()(I==null?void 0:I.second)==="object"});if(!m){var D;m=(D=p[0])===null||D===void 0?void 0:D.children[0]}var A=(g=m)===null||g===void 0||(g=g.frontmatter)===null||g===void 0?void 0:g.nav,H={order:0,title:void 0};if(typeof A!="string"){var N,U,G,B;H.order=(N=A==null||(U=A.second)===null||U===void 0?void 0:U.order)!==null&&N!==void 0?N:0,H.title=(G=A==null||(B=A.second)===null||B===void 0?void 0:B.title)!==null&&G!==void 0?G:A==null?void 0:A.second}if(h.includes(y)){var w;n[y].push({title:H.title,order:H.order,children:(w=p[0])===null||w===void 0?void 0:w.children})}else n[y]=p.map(function(z){return k()(k()({},z),{},{title:H.title,order:H.order})})}else h.includes(c)?n[c]=[].concat($()(n[c]),$()(p)):n[c]=p},i=0,a=Object.entries(e);i<a.length;i++)o();return n},Me=function(e){return/^(\w+:)\/\/|^(mailto|tel):/.test(e!=null?e:"")},te={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},ot=function(){var e=(0,f.useSiteData)(),n=e.themeConfig,o=(0,f.useNavData)(),i=(0,f.useSidebarData)(),a=(0,f.useRouteMeta)(),u=(0,f.useTabMeta)(),d=(0,f.useLocation)(),c=(0,f.useLocale)(),p=(0,f.useIntl)(),h=(0,l.useMemo)(function(){return{activePath:"/",link:"/",title:p.formatMessage({id:"header.nav.home"})}},[p]),_=n.hideHomeNav?o:[h].concat($()(o));return k()(k()({},te),{},{locale:c||te.locale,location:d||te.location,navData:_||te.navData,routeMeta:a||te.routeMeta,sidebar:i||te.sidebar,siteData:k()(k()({},te.siteData),{},{themeConfig:n}),tabMeta:u||te.tabMeta})},rt=(0,Ve.F)()((0,Fe.mW)(function(){return te},{name:"dumi-theme-yunti"})),b=Ce?rt:function(t,e){var n=ot(),o=(0,Ve.F)()((0,Fe.mW)(function(){return n},{name:"dumi-theme-yunti"}));return Object.assign(b,o),o(t,e)},it=["setLoading"],at=["setLoading"],We={},st=function(e,n){(0,l.useEffect)(function(){l.startTransition(function(){e()})},n)},lt=function(e,n){(0,$n.Z)(function(){e()},n,{maxWait:96,wait:32})},ut=typeof l.startTransition=="function"?st:lt,se=function(e,n,o){var i=o||function(a,u){var d;return(d=b.setState)===null||d===void 0?void 0:d.call(b,je()({},a,u))};!Ce&&!We[e]&&(i(e,n),We[e]=!0),ut(function(){i(e,n)},[n])},dt=function(){var e=(0,f.useSiteData)(),n=(0,f.useSidebarData)(),o=(0,f.useRouteMeta)(),i=(0,f.useTabMeta)(),a=(0,f.useNavData)(),u=(0,f.useLocation)(),d=(0,f.useLocale)(),c=(0,f.useIntl)(),p=(0,l.useMemo)(function(){return{activePath:"/",link:"/",title:c.formatMessage({id:"header.nav.home"})}},[c]);return se("siteData",e,function(){var h,_,g=e.setLoading,y=Ie()(e,it),m=((h=b.getState)===null||h===void 0?void 0:h.call(b))||{siteData:{}},D=m.siteData,A=D.setLoading,H=Ie()(D,at);V()(y,H)||(_=b.setState)===null||_===void 0||_.call(b,{siteData:e})}),se("sidebar",n),se("routeMeta",o),se("location",u),se("tabMeta",i),se("locale",d),se("navData",a,function(){var h,_=e.themeConfig.hideHomeNav?a:[p].concat($()(a));(h=b.setState)===null||h===void 0||h.call(b,{navData:_})}),!1},ct=s(29148),R=s.n(ct),P=s(23820),Ke,mt=(0,P.vJ)(Ke||(Ke=R()([`
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
`])),function(t){var e=t.theme;return e.colorText}),pt=mt,Pe=s(37620),Xe=function(e){return e.siteData.themeConfig},ht=function(e){return e.siteData.themeConfig.title},Oe=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.github)||""},_t=function(e){var n;return((n=e.siteData.themeConfig.socialLinks)===null||n===void 0?void 0:n.discord)||""},vt=function(e){return e.siteData.themeConfig.giscus},ft=function(e){return e.siteData.themeConfig.header},ze=function(e){return e===!1?!1:typeof e=="string"},gt=function(e){var n,o=e.routeMeta.frontmatter;if(e.siteData.themeConfig.apiHeader===!1||o.apiHeader===!1)return!1;if(o.apiHeader)return!0;var i=["/api","/components"].concat($()(((n=e.siteData.themeConfig.apiHeader)===null||n===void 0?void 0:n.match)||[]));return i.some(function(a){return e.location.pathname.startsWith(a)})},Ze=function(e){var n,o,i,a,u=Oe(e),d=e.routeMeta.frontmatter,c=e.locale.id,p=function(z){return z.replace("{github}",u).replace("{atomId}",d.atomId||"").replace("{title}",d.title).replace("{locale}",c)},h=e.siteData.themeConfig.apiHeader||{},_=h.type,g=_===void 0?"component":_,y=h.pkg,m=y===void 0?e.siteData.pkg.name:y,D=h.sourceUrl,A=h.docUrl,H=((n=d.apiHeader)===null||n===void 0?void 0:n.pkg)||m,N=d.atomId||d.title,U=((o=d.apiHeader)===null||o===void 0?void 0:o.defaultImport)||!1,G=((i=d.apiHeader)===null||i===void 0?void 0:i.sourceUrl)||(ze(D)?p(D):void 0),B=((a=d.apiHeader)===null||a===void 0?void 0:a.docUrl)||(ze(A)?p(A):void 0);return{componentName:N,defaultImport:U,description:d.description,docUrl:B,pkg:H,sourceUrl:G,title:d.title,type:g}},bt=function(e){if(e.location.pathname==="/")return"/";var n=e.navData.filter(function(o){return o.link!=="/"}).find(function(o){return e.location.pathname.startsWith(String(o.activePath||o.link))});return(n==null?void 0:n.activePath)||(n==null?void 0:n.link)||""},Ye=function(e){var n,o,i=e.routeMeta,a=i.toc,u=i.frontmatter;(n=e.tabMeta)!==null&&n!==void 0&&n.toc&&(a=e.tabMeta.toc),(o=e.tabMeta)!==null&&o!==void 0&&o.frontmatter&&(u=e.tabMeta.frontmatter);var d=function(p){if(!u.tocDepth||typeof u.tocDepth=="number"&&u.tocDepth>p-1)return!0};return a.reduce(function(c,p){if(p.depth===2&&d(2))c.push(k()({},p));else if(p.depth===3&&d(3)){var h=c.at(-1);h&&(h.children=h.children||[],h.children.push(k()({},p)))}return c},[])},Je=function(e){var n;return((n=e.sidebar)===null||n===void 0?void 0:n.map(function(o){return o.children}).flat())||[]},Tt=function(e){var n=Je(e),o=e.location.pathname,i=n.findIndex(function(a){return a.link===o});return{currentIndex:i,next:n[i+1],prev:n[i-1]}},Et=s(45350),yt=function(e){var n=e.routeMeta.frontmatter;return(0,Et.Z)({},n.token,e.siteData.themeConfig.siteToken)},xt={apiHeader:Ze,flattenSidebar:Je,token:yt},Rt=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},St=Rt,It=s(80450),$e=s(93264),Q=function(){var e=(0,$e.F)();return Ce||({GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_64b9ada2-bbc3-4795-a755-185057683ff7",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.18.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_64b9ada2-bbc3-4795-a755-185057683ff7",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.12.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu24",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"829",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20250202.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.11/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.5/x64",JOURNAL_STREAM:"8:8261",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.18.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",npm_config_npm_version:"10.8.2",MEMORY_PRESSURE_WATCH:"/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"13195543833",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_BASE_REF:"",ImageOS:"ubuntu24",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_00774d94-cc62-4935-979d-e82bf5d029b3",INVOCATION_ID:"20db67af280144e588a36a41110bde09",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"19",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",STATS_PIP:"false",npm_package_version:"1.7.3",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_RUN_ATTEMPT:"1",STATS_D_TC:"true",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.18.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_64b9ada2-bbc3-4795-a755-185057683ff7",JAVA_HOME:"/usr/lib/jvm/temurin-17-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_64b9ada2-bbc3-4795-a755-185057683ff7",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",MEMORY_PRESSURE_WRITE:"c29tZSAyMDAwMDAgMjAwMDAwMAA=",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_64b9ada2-bbc3-4795-a755-185057683ff7",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE&&(e.mobile={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_64b9ada2-bbc3-4795-a755-185057683ff7",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.18.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_64b9ada2-bbc3-4795-a755-185057683ff7",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.12.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu24",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"829",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20250202.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.11/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.5/x64",JOURNAL_STREAM:"8:8261",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.18.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",npm_config_npm_version:"10.8.2",MEMORY_PRESSURE_WATCH:"/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"13195543833",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_BASE_REF:"",ImageOS:"ubuntu24",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_00774d94-cc62-4935-979d-e82bf5d029b3",INVOCATION_ID:"20db67af280144e588a36a41110bde09",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"19",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",STATS_PIP:"false",npm_package_version:"1.7.3",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_RUN_ATTEMPT:"1",STATS_D_TC:"true",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.18.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_64b9ada2-bbc3-4795-a755-185057683ff7",JAVA_HOME:"/usr/lib/jvm/temurin-17-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_64b9ada2-bbc3-4795-a755-185057683ff7",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",MEMORY_PRESSURE_WRITE:"c29tZSAyMDAwMDAgMjAwMDAwMAA=",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_64b9ada2-bbc3-4795-a755-185057683ff7",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE==="true"),{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_64b9ada2-bbc3-4795-a755-185057683ff7",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.18.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_64b9ada2-bbc3-4795-a755-185057683ff7",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.12.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu24",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"829",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20250202.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.11/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.5/x64",JOURNAL_STREAM:"8:8261",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.18.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",npm_config_npm_version:"10.8.2",MEMORY_PRESSURE_WATCH:"/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"13195543833",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_BASE_REF:"",ImageOS:"ubuntu24",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_00774d94-cc62-4935-979d-e82bf5d029b3",INVOCATION_ID:"20db67af280144e588a36a41110bde09",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"19",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",STATS_PIP:"false",npm_package_version:"1.7.3",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_RUN_ATTEMPT:"1",STATS_D_TC:"true",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.18.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_64b9ada2-bbc3-4795-a755-185057683ff7",JAVA_HOME:"/usr/lib/jvm/temurin-17-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_64b9ada2-bbc3-4795-a755-185057683ff7",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",MEMORY_PRESSURE_WRITE:"c29tZSAyMDAwMDAgMjAwMDAwMAA=",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_64b9ada2-bbc3-4795-a755-185057683ff7",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP&&(e.desktop={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_64b9ada2-bbc3-4795-a755-185057683ff7",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.2 node/v20.18.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_64b9ada2-bbc3-4795-a755-185057683ff7",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.12.1",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu24",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"829",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20250202.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.11/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",GOROOT_1_23_X64:"/opt/hostedtoolcache/go/1.23.5/x64",JOURNAL_STREAM:"8:8261",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.18.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",npm_config_npm_version:"10.8.2",MEMORY_PRESSURE_WATCH:"/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"13195543833",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_BASE_REF:"",ImageOS:"ubuntu24",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.18.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_00774d94-cc62-4935-979d-e82bf5d029b3",INVOCATION_ID:"20db67af280144e588a36a41110bde09",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.18.2/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"19",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 20",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",STATS_PIP:"false",npm_package_version:"1.7.3",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"ca3dec9ec10d920caadb0df06390844c19dc37d6",GITHUB_RUN_ATTEMPT:"1",STATS_D_TC:"true",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.18.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_64b9ada2-bbc3-4795-a755-185057683ff7",JAVA_HOME:"/usr/lib/jvm/temurin-17-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.18.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_64b9ada2-bbc3-4795-a755-185057683ff7",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.18.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.2.12479018",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",MEMORY_PRESSURE_WRITE:"c29tZSAyMDAwMDAgMjAwMDAwMAA=",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.2.12479018",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_64b9ada2-bbc3-4795-a755-185057683ff7",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.17_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_es_twy3prt6t5bdxduk5vg5csfvli/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP==="true")),e},Ae=s(20113),Z=s(80942),Ot=s(68556),At=s(76851),Nt=s(32874),Ne=s(87058),Be=s(79811),Le=s(42018),Dt=s(92496),K=s(12274),Qe,qe,en,nn,tn,kt=(0,P.kc)(function(t){var e=t.css,n=t.token,o=t.responsive,i=t.stylish;return{desc:e(Qe||(Qe=R()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),n.fontSizeLG,n.lineHeightLG),label:e(qe||(qe=R()([`
    width: 80px;
  `]))),meta:e(en||(en=R()([""]))),text:e(nn||(nn=R()([`
    `,`
  `])),i.resetLinkColor),title:e(tn||(tn=R()([`
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile)}}),r=s(651),on=(0,l.memo)(function(t){var e=t.title,n=t.type,o=t.componentName,i=t.description,a=t.defaultImport,u=t.pkg,d=t.sourceUrl,c=t.docUrl,p=t.serviceList,h=p===void 0?[]:p,_=Q(),g=_.mobile,y=kt(),m=y.styles,D=n==="doc",A=[d&&{children:"Source",icon:(0,r.jsx)(Z.Z,{icon:Le.Z}),url:d},c&&{children:"Edit",icon:(0,r.jsx)(Z.Z,{icon:Dt.Z}),url:c}].filter(Boolean),H=a?"import ".concat(o," from '").concat(u,"';"):"import { ".concat(o," } from '").concat(u,"';");return(0,r.jsxs)(K.D,{id:"api-header",style:{marginBottom:24},children:[(0,r.jsx)(Nt.Z.Title,{className:m.title,children:e}),i&&(0,r.jsx)(Ot.Z,{className:m.desc,children:i}),!D&&(0,r.jsxs)(K.D,{gap:g?16:24,style:{marginTop:16},children:[o&&(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(At.Z,{spotlight:!0,children:H})}),(0,r.jsx)(Ne.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,r.jsxs)(K.D,{distribution:"space-between",gap:g?24:0,horizontal:!g,children:[(0,r.jsx)(Be.Z,{split:(0,r.jsx)(Ne.Z,{type:"vertical"}),wrap:!0,children:h.map(function(N){return(0,r.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",title:N.label,children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},N.label)})}),(0,r.jsx)(Be.Z,{className:m.meta,split:(0,r.jsx)(Ne.Z,{type:"vertical"}),children:A.map(function(N,U){return(0,r.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",children:(0,r.jsxs)(K.D,{align:"center",className:m.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},U)})})]})]})]})}),rn,an,sn,ln=(0,P.kc)(function(t){var e=t.cx,n=t.css,o=t.token,i=t.stylish;return{background:e(i.gradientAnimation,n(rn||(rn=R()([`
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
    `])))),changelog:n(an||(an=R()([`
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
  `])),o.colorTextDescription,o.colorBorderSecondary),content:n(sn||(sn=R()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),o.contentMaxWidth)}}),Ht=s(90328),Ut=s(83994),jt=s(25220),un,dn,cn,mn,Ct=(0,P.kc)(function(t){var e=t.token,n=t.css;return{alignmentEnd:n(un||(un=R()([`
    justify-content: flex-end;
  `]))),container:n(dn||(dn=R()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:n(cn||(cn=R()([`
    font-size: 12px;
    color: `,`;
  `])),e.colorTextTertiary),title:n(mn||(mn=R()([`
    font-size: 16px;
  `])))}}),Mt=(0,l.memo)(function(t){var e=t.title,n=t.link,o=t.type,i=Ct(),a=i.styles,u=i.cx,d=(0,f.useIntl)(),c=(0,l.useMemo)(function(){switch(o){case"prev":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.Z,{icon:Ut.Z}),(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.next"})}),(0,r.jsx)(Z.Z,{icon:jt.Z})]})}},[d,o]);return(0,r.jsx)(f.Link,{to:n,children:(0,r.jsxs)(K.D,{className:a.container,gap:8,children:[(0,r.jsx)(K.D,{className:u(a.nav,o==="next"&&a.alignmentEnd),gap:4,horizontal:!0,children:c}),(0,r.jsx)(K.D,{className:u(a.title,o==="next"&&a.alignmentEnd),horizontal:!0,children:e})]})})}),pn=Mt,Pt=(0,l.memo)(function(){var t=b(Tt,V()),e=t.prev,n=t.next,o=Q(),i=o.mobile;return(0,r.jsxs)(K.D,{distribution:"space-between",gap:i?12:0,horizontal:!i,style:{margin:i?12:0},children:[e?(0,r.jsx)(pn,k()({type:"prev"},e)):(0,r.jsx)("div",{}),n?(0,r.jsx)(pn,k()({type:"next"},n)):(0,r.jsx)("div",{})]})}),Bt=Pt,hn,_n,Lt=(0,P.kc)(function(t,e){var n=t.cx,o=t.token,i=t.responsive,a=t.css;return{content:n(!e&&a(hn||(hn=R()([`
        padding: 24px 48px;
        background-color: `,`;
        border-radius: 10px;

        `,` {
          padding: 8px 16px;
          border-radius: 0;
        }
      `])),o.colorBgContainer,i.mobile),a(_n||(_n=R()([`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }
    `]))))}}),Gt=["children"],wt=(0,l.memo)(function(t){var e=t.children,n=Ie()(t,Gt),o=b(function(_){return _.siteData.loading}),i=b(Xe,V()),a=i.docStyle,u=Q(),d=u.mobile,c=Lt(a==="pure"),p=c.styles,h=c.cx;return(0,l.useEffect)(function(){document.body.scrollTo(0,0)},[o]),(0,r.jsxs)(K.D,k()(k()({gap:d?0:24,width:"100%"},n),{},{children:[(0,r.jsx)("div",{className:h("dumi-antd-style-content",p.content),children:(0,r.jsx)(Ht.Z,{children:e})}),(0,r.jsx)(Bt,{})]}))}),vn=wt,Ft=(0,l.memo)(function(){var t=(0,f.useOutlet)(),e=Q(),n=e.mobile,o=b(function(p){return{repoBase:Oe(p)}},ne.X),i=o.repoBase,a=b(function(p){return{fm:p.routeMeta.frontmatter}},V()),u=a.fm,d=ln(),c=d.styles;return(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ae.Z,{className:c.content,style:{padding:n?0:24},children:[(0,r.jsx)("div",{style:{padding:n?16:0,width:"100%"},children:(0,r.jsx)(on,{description:u.description,docUrl:"".concat(i,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(i,"/blob/master/CHANGELOG.md"),title:u.title})}),(0,r.jsx)(vn,{className:c.changelog,children:t})]})]})}),Vt=Ft,Wt=s(19704),Kt=s(77595),Xt=s(92329),zt=(0,l.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Zt=(0,l.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),Yt=(0,l.memo)(function(){return(0,r.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Jt=(0,l.memo)(function(){return(0,r.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"main",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,r.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),$t=(0,l.memo)(function(){return(0,r.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Qt=(0,l.memo)(function(){var t=b(Ze,V()),e=t.pkg,n=(0,l.useMemo)(function(){var o=encodeURIComponent(String(e));return[{children:"NPM",icon:(0,r.jsx)(Yt,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(o)},{children:"UNPKG",icon:(0,r.jsx)($t,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(o,"/")},{children:"BundlePhobia",icon:(0,r.jsx)(zt,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(o)},{children:"PackagePhobia",icon:(0,r.jsx)(Jt,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(o)},{children:"Anvaka Graph",icon:(0,r.jsx)(Zt,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(o))}]},[e]);return(0,r.jsx)(on,k()({serviceList:n},t))}),qt=Qt,eo=(0,l.memo)(function(){var t=(0,f.useOutlet)(),e=(0,f.useLocation)(),n=Q(),o=n.mobile,i=b(function(h){return{giscus:vt(h),isApiPage:gt(h)}},ne.X),a=i.isApiPage,u=i.giscus,d=ln(),c=d.styles;(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[e.pathname]);var p=(0,l.useCallback)(function(){return u&&(0,r.jsx)("div",{style:{marginTop:64},children:(0,r.jsx)(Kt.Z,{category:u.category,categoryId:u.categoryId,id:"lobehub",mapping:"title",repo:u.repo,repoId:u.repoId})})},[u,e.pathname]);return(0,r.jsxs)(Wt.V9,{hashPriority:"high",children:[(0,r.jsx)("div",{className:c.background}),(0,r.jsxs)(Ae.Z,{className:c.content,style:{marginBottom:48,padding:o?0:24},children:[a?(0,r.jsx)("div",{style:{padding:o?16:0,width:"100%"},children:(0,r.jsx)(qt,{})}):void 0,(0,r.jsxs)(vn,{children:[(0,r.jsx)(Xt.Z,{children:t}),u&&(0,r.jsx)(p,{})]})]})]})}),no=eo,to=s(53334),Ge=function(e){return!!e.routeMeta.frontmatter.hero},ie=function(e,n){if(n)return n[e.locale.id]?n[e.locale.id]:n},oo=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.title)||((o=ie(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.title)||ie(e,e.siteData.themeConfig.title)||e.siteData.themeConfig.name},ro=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.description)||((o=ie(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.description)||ie(e,e.siteData.themeConfig.description)},io=function(e){var n,o;return((n=e.routeMeta.frontmatter.hero)===null||n===void 0?void 0:n.actions)||((o=ie(e,e.siteData.themeConfig.hero))===null||o===void 0?void 0:o.actions)||ie(e,e.siteData.themeConfig.actions)},ao=function(e){var n;return Ge(e)?((n=ie(e,e.siteData.themeConfig.hero))===null||n===void 0?void 0:n.features)||ie(e,e.siteData.themeConfig.features)||e.routeMeta.frontmatter.features||[]:[]},so=function(e){var n=e.siteData.themeConfig.customPages;if(!(!n||n.length===0))return n.find(function(o){return o.path===e.location.pathname})},lo=(0,l.memo)(function(){var t=b(ao,V()),e=(0,P.Fg)();if(t!=null&&t.length)return(0,r.jsx)(to.Z,{items:t,maxWidth:e.contentMaxWidth,style:{margin:"0 16px"}})}),uo=lo,co=s(60829),mo=(0,l.memo)(function(){var t=b(Ge),e=b(oo),n=b(ro),o=b(io);if(t)return(0,r.jsx)(co.Z,{actions:o,description:n,title:e})}),po=mo,ho=(0,l.memo)(function(){var t=(0,f.useOutlet)();return(0,l.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,r.jsxs)(K.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,r.jsx)(po,{}),(0,r.jsx)(uo,{}),t]})}),_o=ho,vo=s(93063),fo=s(2957),go=s(35723),bo=s(59325),To=function(e){var n=e.github,o={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},i={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:fo.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(n,"/issues/new/choose")},n&&{icon:(0,r.jsx)(Z.Z,{icon:go.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(n,"/issues/new/choose")}].filter(Boolean),title:"Community"},a={items:[n&&{icon:(0,r.jsx)(Z.Z,{icon:Le.Z,size:"small"}),openExternal:!0,title:"GitHub",url:n},{LinkComponent:f.Link,icon:(0,r.jsx)(Z.Z,{icon:bo.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},u={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[o,i,a,u]},fn,gn,Eo=(0,P.kc)(function(t){var e=t.css,n=t.responsive,o=t.token,i="rc-footer";return{container:e(fn||(fn=R()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),o.colorTextDescription,o.colorSplit,n.mobile),footer:e(gn||(gn=R()([`
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
    `])),o.colorTextSecondary,o.colorBgLayout,i,o.colorTextTertiary,o.colorLinkHover,i,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,n.mobile,i)}}),yo=(0,l.memo)(function(){var t=b(function(y){return y.siteData},V()),e=t.themeConfig,n=t.pkg,o=e.footerConfig,i=e.footer,a=b(Oe,ne.X),u=Q(),d=u.mobile,c=Eo(),p=c.styles,h=c.theme,_=(0,l.useMemo)(function(){var y=o!=null&&o.columns?o==null?void 0:o.columns:To({github:a||n.homepage});return o!=null&&o.resources&&(y[0]=o==null?void 0:o.resources),o!=null&&o.moreProducts&&(y[3]=o==null?void 0:o.moreProducts),y.filter(function(m){return m.items&&m.items.length>0})},[o==null?void 0:o.columns,o==null?void 0:o.moreProducts,o==null?void 0:o.resources,a,n]);if(i){var g=(o==null?void 0:o.bottom)||i;return(0,r.jsx)(vo.Z,{bottom:d?(0,r.jsxs)(Ae.Z,{className:p.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,r.jsx)(K.D,{align:"center",dangerouslySetInnerHTML:{__html:g},horizontal:!0})]}):(0,r.jsxs)(Ae.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,r.jsx)(Ne.Z,{type:"vertical"}),(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:g}})]}),columns:_,contentMaxWidth:h.contentMaxWidth,theme:h.appearance})}}),xo=yo,Ro=s(40799),So=s(86152),Io=s(24896),bn,Oo=(0,P.kc)(function(t){var e=t.css,n=t.responsive,o=t.token;return e(bn||(bn=R()([`
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
  `])),o.colorText,n.mobile)}),Ao=(0,l.memo)(function(){var t=b(Xe,V()),e=b(function(d){return d.locale},V()),n=Q(),o=n.mobile,i=Oo(),a=i.styles,u=i.cx;return t&&(0,r.jsx)(f.Link,{className:u(a),to:"base"in e?e.base:"/",children:(0,r.jsxs)(Be.Z,{children:[(0,r.jsx)(Io.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:o?32:36}),t.name]})})}),No=Ao,Do=s(26517),ko=s(6446),Ho=s(31125),Tn,En,Uo=(0,P.kc)(function(t){var e=t.css,n=t.stylish,o=t.token,i=t.responsive,a=t.prefixCls;return{link:e(Tn||(Tn=R()([`
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
    `])),n.resetLinkColor,n.resetLinkColor,o.marginXS,o.fontSizeSM,o.colorTextTertiary),tabs:e(En||(En=R()([`
      .`,`-tabs-tab-active a {
        color: `,` !important;
      }
      `,` {
        display: none;
      }
    `])),a,o.colorText,i.mobile)}}),yn=function(e){return(e!=null?e:"").split("/").slice(0,2).join("/")},jo=(0,l.memo)(function(){var t=Uo(),e=t.styles,n=(0,f.useLocation)(),o=n.pathname,i=b(function(u){return u.navData},ne.X),a=o.split("/").slice(0,2).join("/");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Do.Z,{activeKey:a,className:e.tabs,items:i.map(function(u){var d=u.activePath||yn(u.link);return{key:Me(u.link)?u.link:d,label:Me(u.link)?(0,r.jsxs)("a",{className:e.link,href:String(u.link),onClick:function(p){return p.preventDefault()},rel:"noreferrer",target:u.target||"_blank",children:[(0,r.jsx)("span",{className:"lint-text",children:u.title})," ",(0,r.jsx)(Z.Z,{icon:Ho.Z})]}):(0,r.jsx)(f.Link,{className:e.link,onClick:function(p){return p.preventDefault()},target:u.target,to:String(u.link),children:u.title})}}),onTabClick:function(d){var c=i.find(function(p){return p.activePath===d||p.link===d||yn(p.link)===d});if(c!=null&&c.link){if(Me(c.link)||c.target==="_blank")return window.open(c.link);f.history.push(c.link)}}}),(0,r.jsx)(ko.Z,{})]})}),Co=jo,Mo=s(62595),Po=s(89105),xn,Rn,Sn,In,On,Bo=(0,P.kc)(function(t){var e=t.token,n=t.responsive,o=t.css,i=t.cx;return{container:o(xn||(xn=R()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),n.mobile),input:o(Rn||(Rn=R()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:o(Sn||(Sn=R()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:i("site-header-shortcut",o(In||(In=R()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,n.mobile)),svg:i(o(On||(On=R()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Lo=(0,l.memo)(function(){var t=(0,$e.F)(),e=t.mobile,n=Bo(),o=n.styles,i=(0,l.useState)(!1),a=L()(i,2),u=a[0],d=a[1],c=(0,f.useSiteSearch)(),p=c.keywords,h=c.setKeywords,_=c.result,g=c.loading,y=(0,f.useIntl)();return(0,r.jsxs)("div",{className:o.container,children:[(0,r.jsx)(Mo.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){d(!1)},1)},onChange:function(D){return h(D.target.value)},onFocus:function(){return d(!0)},placeholder:y.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),p.trim()&&u&&(_.length>0||!g)&&(0,r.jsx)("div",{className:o.popover,children:(0,r.jsx)(Po.Z,{data:_,loading:g})})]})}),Go=Lo,wo=s(48666),Fo=s(92450),Vo=(0,l.memo)(function(){var t=(0,l.useState)(!1),e=L()(t,2),n=e[0],o=e[1],i=b(function(h){return h.navData},V()),a=b(function(h){return h.sidebar},V()),u=b(function(h){return{activePath:bt(h),pathname:h.location.pathname}},ne.X),d=u.pathname,c=u.activePath,p=(0,l.useMemo)(function(){var h=a==null?void 0:a.map(function(_){return!_.link&&{children:_.children.map(function(g){return{key:"s-".concat(g.link),label:(0,r.jsx)(f.Link,{onClick:function(){o(!1)},to:g.link,children:g.title})}}),label:_.title,type:"group"}});return i.map(function(_){return{children:(_.activePath||_.link)===c&&h,key:_.activePath||_.link,label:(0,r.jsx)(f.Link,{to:String(_.link),children:_.title})}})},[i,c,a]);return(0,r.jsx)(wo.Z,{items:p,openKeys:[c],opened:n,selectedKeys:(0,Fo.Z)([c,"s-".concat(d)]),setOpened:o})}),Wo=Vo,An=s(35858),Ko=s(93910),Nn,Xo=(0,Ko.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),zo=(0,P.kc)(function(t){var e=t.css;return e(Nn||(Nn=R()([`
    svg {
      overflow: visible !important;
    }
  `])))}),Zo=(0,l.memo)(function(){var t=b(_t),e=zo(),n=e.styles;return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(An.Z,{className:n,icon:Xo,size:"site"})}):void 0}),Yo=Zo,Jo=(0,l.memo)(function(){var t=b(Oe);return t?(0,r.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,r.jsx)(An.Z,{icon:Le.Z,size:"site"})}):void 0}),$o=Jo,Dn=s(41293),X=s(11348),ge=s(45623),Qo=s(51683),qo=s(86473),kn,Hn,Un,er=(0,P.kc)(function(t,e){var n=t.css,o=t.cx,i=t.token;return{active:o("".concat(e,"-item-active"),n(kn||(kn=R()([`
      background: `,`;
    `])),i.colorFillTertiary)),item:o("".concat(e,"-item"),n(Hn||(Hn=R()([`
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
    `])),i.fontFamily,i.colorText,i.colorFillTertiary)),selected:o("".concat(e,"-item-selected"),n(Un||(Un=R()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),i.colorPrimaryText,i.colorPrimaryBg,i.colorPrimaryTextHover,i.colorPrimaryBgHover))}}),nr=["value","label","prefixCls","isSelected","isActive","disabled"],tr=(0,l.forwardRef)(function(t,e){var n=t.value,o=t.label,i=t.prefixCls,a=t.isSelected,u=t.isActive,d=t.disabled,c=Ie()(t,nr),p=er(i),h=p.styles,_=p.cx;return(0,r.jsx)("button",k()(k()({"aria-selected":a,className:_(h.item,je()(je()({},h.selected,a),h.active,u)),disabled:d,ref:e,role:"option",tabIndex:-1,type:"button"},c),{},{children:o}),n)}),or=tr,jn,Cn,rr=(0,P.kc)(function(t,e){var n=t.css,o=t.stylish,i=t.cx,a=t.token;return{button:i("".concat(e,"-button"),n(jn||(jn=R()([`
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
    `])),o.buttonDefaultHover,a.fontSize,a.colorTextSecondary,a.colorBgContainer,a.colorBorder,a.borderRadius,a.colorPrimary,a.colorPrimaryBg)),container:i(e,n(Cn||(Cn=R()([`
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
    `])),a.fontSize,a.colorBgElevated,a.colorBorder,a.boxShadowSecondary))}}),ir=(0,l.memo)(function(t){var e=t.options,n=e===void 0?[]:e,o=t.value,i=t.prefixCls,a=t.onChange,u=t.renderValue,d=t.renderItem,c=t.style,p=i!=null?i:"native-select",h=(0,qo.Z)(0,{onChange:a,value:o}),_=L()(h,2),g=_[0],y=_[1],m=rr(p),D=m.styles,A=(0,l.useRef)([]),H=(0,l.useRef)([]),N=(0,l.useRef)(null),U=(0,l.useRef)(!1),G=(0,l.useRef)(!0),B=(0,l.useRef)(),w=(0,l.useRef)(null),z=(0,l.useState)(!1),E=L()(z,2),I=E[0],C=E[1],M=(0,l.useState)(null),S=L()(M,2),O=S[0],x=S[1],be=(0,l.useState)(!1),ce=L()(be,2),oe=ce[0],Te=ce[1],ke=(0,l.useState)(0),le=L()(ke,2),me=le[0],Ee=le[1],He=(0,l.useState)(!1),pe=L()(He,2),ue=pe[0],he=pe[1],ye=(0,l.useState)(!1),_e=L()(ye,2),v=_e[0],T=_e[1];I||(me!==0&&Ee(0),oe&&Te(!1),v&&T(!1));var j=(0,X.YF)({middleware:oe?[(0,ge.cv)(5),ue?(0,ge.uY)({crossAxis:!0,padding:10}):(0,ge.RR)({padding:10}),(0,ge.dp)({apply:function(W){var ee,Re,Fr=W.availableHeight;Object.assign((ee=(Re=w.current)===null||Re===void 0?void 0:Re.style)!==null&&ee!==void 0?ee:{},{maxHeight:"".concat(Fr,"px")})},padding:10})]:[(0,X.aN)({index:g,listRef:A,minItemsVisible:ue?8:4,offset:me,onFallbackChange:Te,overflowRef:N,padding:10,referenceOverflowThreshold:20,scrollRef:w}),(0,ge.cv)({crossAxis:-4})],onOpenChange:C,open:I,placement:"bottom-start",whileElementsMounted:Qo.Me}),Y=j.x,ae=j.y,F=j.strategy,q=j.refs,J=j.context,de=(0,X.NI)([(0,X.eS)(J,{event:"mousedown"}),(0,X.bQ)(J),(0,X.qs)(J,{role:"listbox"}),(0,X.Rz)(J,{enabled:!oe,onChange:Ee,overflowRef:N,scrollRef:w}),(0,X.c0)(J,{activeIndex:O,listRef:A,onNavigate:x,selectedIndex:g}),(0,X.ox)(J,{activeIndex:O,listRef:H,onMatch:I?x:y})]),xe=de.getReferenceProps,Br=de.getFloatingProps,Lr=de.getItemProps;(0,l.useEffect)(function(){if(I)return B.current=setTimeout(function(){U.current=!0},300),function(){clearTimeout(B.current)};U.current=!1,G.current=!0},[I]);var Gr=n[g]||{},wr=Gr.label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",k()(k()({"aria-label":"selected-item",className:D.button,ref:q.setReference,style:c,type:"button"},xe({onPointerMove:function(W){var ee=W.pointerType;ee==="mouse"&&he(!1)},onTouchStart:function(){he(!0)}})),{},{children:u?u(g):wr})),(0,r.jsx)(X.ll,{children:I&&(0,r.jsx)(X.y0,{lockScroll:!ue,style:{zIndex:3e3},children:(0,r.jsx)(X.wD,{context:J,initialFocus:-1,modal:!1,children:(0,r.jsx)("div",{ref:q.setFloating,style:{left:Y!=null?Y:0,position:F,top:ae!=null?ae:0},children:(0,r.jsx)("div",k()(k()({className:D.container,ref:w,style:{overflowY:"auto"}},Br({onContextMenu:function(W){W.preventDefault()}})),{},{children:n.map(function(re,W){return(0,r.jsx)(or,k()({disabled:v,isActive:W===O,isSelected:W===g,label:d?d(re,W):re.label,prefixCls:p,ref:function(Re){A.current[W]=Re,H.current[W]=re.label},value:re.value},Lr({onClick:function(){U.current&&(y(W),C(!1))},onKeyDown:function(){U.current=!0},onMouseUp:function(){G.current&&(U.current&&(y(W),C(!1)),clearTimeout(B.current),B.current=setTimeout(function(){U.current=!0}))},onTouchStart:function(){U.current=!0,G.current=!1}})),re.value)})}))})})})})]})}),ar=ir;function De(t){var e=t.pathname,n=t.current,o=t.target,i="base"in n?e.replace(n.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(i).replace(/([^/])\/$/,"$1"):"".concat(i).concat(o.suffix)}var sr={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Mn={"en-US":"EN","zh-CN":"\u4E2D"},lr=(0,l.memo)(function(t){var e=t.locale,n=t.current,o=(0,f.useLocation)(),i=o.pathname,a=(0,l.useState)(function(){return De({current:n,pathname:i,target:e})}),u=L()(a,2),d=u[0],c=u[1];return(0,l.useEffect)(function(){c(De({current:n,pathname:i,target:e}))},[n,e,i]),(0,r.jsx)(f.Link,{to:d,children:(0,r.jsx)(Dn.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Mn[e.id]})})}),ur=(0,l.memo)(function(){var t=b(function(n){return n.siteData.locales}),e=b(function(n){return n.locale});if(!(t.length<=1))return t.length>2?(0,r.jsx)(ar,{onChange:function(o){console.log(De({current:e,pathname:location.pathname,target:t[o]})),f.history.push(De({current:e,pathname:location.pathname,target:t[o]}))},options:t.map(function(n){return{label:Mn[n.id],value:n.id}}),renderItem:function(o,i){return"".concat(sr[t[i].id]," ").concat(t[i].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(n){return n.id===e.id})}):(0,r.jsx)(lr,{current:e,locale:t.find(function(n){var o=n.id;return o!==e.id})})}),dr=ur,cr=s(1174),mr=(0,l.memo)(function(){var t=(0,Pe.f)(function(n){return n.themeMode}),e=(0,f.usePrefersColor)()[2];return(0,l.useEffect)(function(){return e(t)},[e,t]),(0,r.jsx)(cr.Z,{onThemeSwitch:function(o){Pe.f.setState({themeMode:o})},themeMode:t})}),Pn=mr,pr=s(67353),hr=s(97089),_r=s(59596),vr=s(99351),Bn,Ln,fr=(0,P.kc)(function(t){var e=t.css;return{avatar:e(Bn||(Bn=R()([`
      cursor: pointer;
    `]))),menu:e(Ln||(Ln=R()([`
      width: 180px;
    `])))}}),we="__LOGIN_USER",Gn=(0,l.memo)(function(){var t,e=fr(),n=e.styles,o=b(ft),i=b(function(_){return _.loginUser}),a=(0,f.useIntl)(),u=(0,l.useState)(i),d=L()(u,2),c=d[0],p=d[1];(0,l.useEffect)(function(){var _=window.localStorage.getItem(we);if(_)try{var g=JSON.parse(_);p(g),b.setState({loginUser:g})}catch(y){console.warn("parse login user info from ".concat(we," failed"),y)}},[]);var h=(0,l.useCallback)(function(){window.localStorage.removeItem(we)},[]);if(o!=null&&(t=o.userActionButton)!==null&&t!==void 0&&t.button)return c!=null&&c.user?(0,r.jsx)(pr.Z,{menu:{className:n.menu,items:o.userActionButton.menuItems||[{icon:(0,r.jsx)(Z.Z,{icon:_r.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/management/account",children:"\u8D26\u6237\u4E2D\u5FC3"}),key:"account"},{type:"divider"},{icon:(0,r.jsx)(Z.Z,{icon:vr.Z}),label:(0,r.jsx)("a",{href:"https://console.botnow.cn/oidc/logout",onClick:h,children:"\u9000\u51FA\u767B\u5F55"}),key:"logout"}]},children:(0,r.jsx)(hr.C,{className:n.avatar,size:"small",src:c.avatar,children:c.user.charAt(0).toUpperCase()})}):(0,r.jsx)(Dn.ZP,k()(k()({},o.userActionButton.button),{},{children:a.formatMessage({id:"header.actions.user"})}))}),gr=(0,l.memo)(function(){var t=b(function(o){return!!o.routeMeta.frontmatter}),e=Q(),n=e.mobile;if(t)return(0,r.jsx)(Ro.Z,{actions:n?(0,r.jsxs)(So.Z,{align:"center",gap:"small",children:[(0,r.jsx)(Pn,{}),(0,r.jsx)(Gn,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Go,{}),(0,r.jsx)(dr,{}),(0,r.jsx)($o,{}),(0,r.jsx)(Yo,{}),(0,r.jsx)(Pn,{}),(0,r.jsx)(Gn,{})]}),logo:(0,r.jsx)(No,{}),nav:n?(0,r.jsx)(Wo,{}):(0,r.jsx)(Co,{})})}),br=gr,Tr=s(61223),Er=s(92576),yr=s(53900),wn=function(){var e=(0,f.useSiteData)(),n=e.themeConfig,o=n;return o},xr=s(14582),Fn=s.n(xr),Rr=s(28331),Sr={i8:"1.7.3"},Ir=function t(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=Fn()(e),a;try{for(i.s();!(a=i.n()).done;){var u=a.value;if(u.key===n)return[].concat($()(o),[u.key]);if(u.children&&u.children.length>0){var d=t(u.children,n,[].concat($()(o),[u.key]));if(d)return d}}}catch(c){i.e(c)}finally{i.f()}return null},Or=function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=(0,f.useLocation)(),i=o.pathname,a=o.search,u=wn(),d=u.sidebarGroupModePath,c=u.sidebarEnhance,p=c===void 0?{}:c,h=n.before,_=n.after,g=(0,f.useFullSidebarData)(),y=tt(g),m=(0,f.useLocale)(),D="/".concat((e=i.split("/"))===null||e===void 0?void 0:e[1]),A=y[D],H=(0,l.useMemo)(function(){return Object.values(g).reduce(function(E,I){var C=I.flatMap(function(x){return x.children}),M=Fn()(C),S;try{for(M.s();!(S=M.n()).done;){var O=S.value;E[O.link]=O.title}}catch(x){M.e(x)}finally{M.f()}return E},{})},[g]),N=(0,l.useMemo)(function(){var E=Object.keys(p).find(function(I){return i.startsWith(I)});if(E)return p[E]},[i,p]),U=(0,l.useMemo)(function(){var E=function(O){return O&&ve()(O)==="object"&&"link"in O&&"title"in O},I=function(O){return O&&ve()(O)==="object"&&O.type==="group"},C=function(O){return O&&ve()(O)==="object"&&"children"in O};function M(S){return typeof S=="string"?{key:S,label:(0,r.jsxs)(f.Link,{to:"".concat(S).concat(a),children:[h,H[S],_]})}:I(S)?{type:"group",label:S.title,key:S.title,children:S.children.map(function(O){return M(O)})}:C(S)?{key:S.title,label:(0,r.jsx)("span",{style:{paddingLeft:10},children:S.title}),children:S.children.map(function(O){return M(O)})}:E(S)?{label:(0,r.jsx)(f.Link,{target:S.target,to:S.link,children:S.title}),key:S.link}:null}if(N)return N.map(function(S){return M(S)})},[_,h,N,H,a]),G=(0,l.useMemo)(function(){var E,I,C=new RegExp("".concat((E=m==null?void 0:m.suffix)!==null&&E!==void 0?E:"","$"),"g"),M=$()(A!=null?A:[]),S=function(x){var be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return x&&be&&(0,r.jsx)(Rr.Z,{bordered:!1,color:typeof x=="string"?"processing":x.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof x=="string"?x:x.title).replace("VERSION","v".concat(Sr.i8))})};return(I=M==null?void 0:M.reduce(function(O,x){if(x!=null&&x.title){var be=d===!0?!0:(d!=null?d:[]).some(function(v){return i.startsWith(v)});if(be){var ce;O.push({type:"group",label:x==null?void 0:x.title,order:x==null?void 0:x.order,key:x==null?void 0:x.title,children:(ce=x.children)===null||ce===void 0?void 0:ce.map(function(v){var T,j;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[h,(0,r.jsx)("span",{children:fe(v==null?void 0:v.title)},"english"),(0,r.jsx)("span",{className:"chinese",children:fe((T=v.frontmatter)===null||T===void 0?void 0:T.subtitle)},"chinese"),S((j=v.frontmatter)===null||j===void 0?void 0:j.tag,!h&&!_),_]}),key:v.link.replace(C,"")}})})}else{for(var oe={},Te=x.children.reduce(function(v,T){var j,Y,ae=v,F=T==null||(j=T.frontmatter)===null||j===void 0?void 0:j.type,q=typeof F=="string"?F:(Y=F==null?void 0:F.title)!==null&&Y!==void 0?Y:"default";if(ae[q]||(ae[q]=[]),oe[q])F!=null&&F.order&&(oe[q].order=F.order);else{var J,de,xe;oe[q]={title:q,order:(J=(de=F==null?void 0:F.order)!==null&&de!==void 0?de:T==null||(xe=T.frontmatter)===null||xe===void 0?void 0:xe.order)!==null&&J!==void 0?J:-1}}return ae[q].push(T),ae},{}),ke=Object.keys(Te).sort(function(v,T){return oe[v].order-oe[T].order}).reduce(function(v,T){var j=v;return j[T]=Te[T],j},{}),le=[],me=0,Ee=Object.entries(ke);me<Ee.length;me++){var He=L()(Ee[me],2),pe=He[0],ue=He[1];if(pe==="default"){var he,ye;le.push.apply(le,$()((he=(ye=ke.default)===null||ye===void 0?void 0:ye.map(function(v){var T;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[h,fe(v==null?void 0:v.title),S((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!h&&!_),_]}),key:v.link.replace(C,"")}}))!==null&&he!==void 0?he:[]))}else le.push({type:"group",label:pe,key:pe,children:ue==null?void 0:ue.map(function(v){var T;return{label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[h,fe(v==null?void 0:v.title),S((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!h&&!_),_]}),key:v.link.replace(C,"")}})})}O.push({label:x==null?void 0:x.title,key:x==null?void 0:x.title,order:x==null?void 0:x.order,children:le})}}else{var _e=x.children||[];_e.every(function(v){var T;return v==null||(T=v.frontmatter)===null||T===void 0?void 0:T.date})&&_e.sort(function(v,T){var j,Y;return(v==null||(j=v.frontmatter)===null||j===void 0?void 0:j.date)>(T==null||(Y=T.frontmatter)===null||Y===void 0?void 0:Y.date)?-1:1}),O.push.apply(O,$()(_e.map(function(v){var T;return{order:v==null?void 0:v.order,label:(0,r.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[h,fe(v==null?void 0:v.title),S((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!h&&!_),_]}),key:v.link.replace(C,"")}})))}return O.sort(function(v,T){return(v==null?void 0:v.order)<(T==null?void 0:T.order)?-1:1}),O},[]))!==null&&I!==void 0?I:[]},[A,d,i,a,h,_,m]),B=(0,l.useMemo)(function(){var E;return i.replace(new RegExp("".concat((E=m==null?void 0:m.suffix)!==null&&E!==void 0?E:"","$"),"g"),"")},[m,i]),w=(0,l.useMemo)(function(){return Ir(U||G,B)},[G,B,U]),z=w==null?void 0:w.slice(0,-1);return[U||G,B,z]},Vn,Wn,Kn,Ar=(0,P.kc)(function(t,e){var n=t.token,o=t.css,i=t.prefixCls,a=e.isSideBarGroupMode;return{asideContainer:o(Vn||(Vn=R()([`
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
      `])),i,i,i,i,i,i,n.colorBorder,i,i,i,n.colorFillSecondary,i,i,i,i,i,!a&&o(Wn||(Wn=R()([`
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
          `])),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),n.colorTextDisabled),mainMenu:o(Kn||(Kn=R()([`
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
      `])),n.headerHeight,n.headerHeight)}}),Nr=function(){var e=(0,f.useLocation)(),n=e.pathname,o=wn(),i=o.sidebarGroupModePath,a=(0,l.useMemo)(function(){return i===!0?!0:(i!=null?i:[]).some(function(A){return n.startsWith(A)})},[n,i]),u=Ar({isSideBarGroupMode:a}),d=u.styles,c=Tr.Z.useToken(),p=c.token,h=Or(),_=L()(h,3),g=_[0],y=_[1],m=_[2],D=(0,r.jsx)(Er.ZP,{theme:{components:{Menu:{itemBg:p.colorBgLayout,darkItemBg:p.colorBgLayout}}},children:(0,r.jsx)(yr.Z,{className:d.asideContainer,defaultOpenKeys:m,inlineIndent:30,items:g,mode:"inline",selectedKeys:[y]},m==null?void 0:m[0])});return(0,r.jsx)("div",{className:d.mainMenu,children:(0,r.jsx)("section",{className:"main-menu-inner",children:D})})},Dr=Nr,kr=s(39750),Xn=48,Hr=(0,l.memo)(function(){var t=b(Ye,V()),e=Q(),n=e.mobile,o=(0,P.Fg)(),i=(0,l.useState)(Xn),a=L()(i,2),u=a[0],d=a[1],c=(0,f.useLocation)();if((0,l.useEffect)(function(){var p=document.querySelector("#api-header");p&&d(p.clientHeight+Xn)},[c.pathname,c.hash,c.search,t]),!((t==null?void 0:t.length)<1))return(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsx)("div",{style:{height:u}}),(0,r.jsx)(kr.Z,{getContainer:function(){return document.body},headerHeight:o.headerHeight,isMobile:n,items:t,tocWidth:o.tocWidth})]})}),Ur=Hr,jr=(0,l.memo)(function(){var t=(0,f.useIntl)(),e=(0,f.useLocation)(),n=e.hash,o=(0,P.Fg)(),i=Q(),a=i.mobile,u=i.laptop,d=b(function(E){var I=E.location.pathname==="/changelog",C=Ge(E),M;return C||E.location.pathname==="/"?M="home":I?M="changelog":M="docs",{loading:E.siteData.loading,noToc:Ye(E).length===0,page:M,siteTitle:ht(E),themeConfig:E.siteData.themeConfig}},ne.X),c=d.loading,p=d.page,h=d.siteTitle,_=d.noToc,g=d.themeConfig,y=b(function(E){return E.routeMeta.frontmatter},V()),m=b(so),D=p!=="docs"||a||y.sidebar===!1||(m==null?void 0:m.sider)===!1,A=y.toc===!1||_,H=a?A:!u||A,N=(0,l.useCallback)(function(){var E=(m==null?void 0:m.title)||y.title,I=(m==null?void 0:m.description)||y.description||g.description,C=(m==null?void 0:m.keywords)||y.keywords||g.keywords;return(0,r.jsxs)(f.Helmet,{children:[(0,r.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),E&&(0,r.jsx)("meta",{content:E,property:"og:title"}),I&&(0,r.jsx)("meta",{content:I,name:"description"}),I&&(0,r.jsx)("meta",{content:I,property:"og:description"}),C&&(0,r.jsx)("meta",{content:C.join(","),name:"keywords"}),C&&(0,r.jsx)("meta",{content:C.join(","),property:"og:keywords"}),!E||p==="home"?(0,r.jsx)("title",{children:h}):(0,r.jsxs)("title",{children:[E," - ",h]})]})},[m==null?void 0:m.description,m==null?void 0:m.keywords,m==null?void 0:m.title,y.description,y.keywords,y.title,t.locale,p,h,g.description,g.keywords]);(0,l.useEffect)(function(){var E=n.replace("#","");E&&setTimeout(function(){var I=document.querySelector("#".concat(decodeURIComponent(E)));I&&(I.scrollIntoView(),window.scrollBy({top:-80}))},1)},[c,n]),(0,l.useEffect)(function(){document.body.scrollTo(0,0)},[h]);var U=(0,l.useState)(!1),G=L()(U,2),B=G[0],w=G[1];(0,l.useEffect)(function(){return w(!0)},[]);var z=(0,f.useOutlet)();return(m==null?void 0:m.header)===!1&&(m==null?void 0:m.sider)===!1&&(m==null?void 0:m.footer)===!1?(0,r.jsxs)(r.Fragment,{children:[N(),B&&z]}):(0,r.jsxs)(r.Fragment,{children:[N(),B&&(0,r.jsxs)(It.ZP,{asideWidth:o.sidebarWidth,footer:(m==null?void 0:m.footer)!==!1&&(0,r.jsx)(xo,{}),header:(m==null?void 0:m.header)!==!1&&(0,r.jsx)(br,{}),headerHeight:a&&p!=="home"?o.headerHeight+36:o.headerHeight,sidebar:D?void 0:(0,r.jsx)(Dr,{}),toc:H?void 0:(0,r.jsx)(Ur,{}),tocWidth:H?0:o.tocWidth,children:[m&&z,!m&&p==="home"&&(0,r.jsx)(_o,{}),!m&&p==="changelog"&&(0,r.jsx)(Vt,{}),!m&&p==="docs"&&(0,r.jsx)(no,{})]},D?"full":"no-sidebar")]})}),Cr=jr,Mr=(0,l.memo)(function(){var t=(0,Pe.f)(function(n){return n.themeMode},ne.X),e=b(xt.token);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(dt,{}),(0,r.jsxs)(Ue.Z,{customToken:function(o){return Object.assign({},St(o),e)},themeMode:t,children:[(0,r.jsx)(pt,{}),(0,r.jsx)(Cr,{})]})]})}),Pr=Mr},37620:function(zn,Se,s){s.d(Se,{f:function(){return ne}});var Ue=s(32089),l=s(9676),ne=(0,l.F)()((0,Ue.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
