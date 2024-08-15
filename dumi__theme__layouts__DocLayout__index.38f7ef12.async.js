"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[367],{76961:function(Xn,Se,s){s.r(Se),s.d(Se,{default:function(){return Cr}});var De=s(87956),u=s(92379),ne=s(15354),zn=s(12027),Q=s.n(zn),Zn=s(19317),Ie=s.n(Zn),Yn=s(29861),He=s.n(Yn),Jn=s(91253),f=s(48073),$n=s(95490),V=s.n($n),we=s(32089),Fe=s(9676),Qn=s(24325),D=s.n(Qn),qn=s(34180),_e=s.n(qn),et=s(28633),P=s.n(et),Ue=typeof window!="undefined",ve=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return n.replace(/<\w+>.*<\/\w+>/g,"")},nt=function(n){for(var e={},r=function(){var d=P()(a[i],2),l=d[0],_=d[1],c=Object.keys(e);if(l.split("/").length===3){var h,b,y="/".concat(l.split("/")[1]),p=(h=_[0])===null||h===void 0||(h=h.children)===null||h===void 0?void 0:h.find(function(G){var U,C=(U=G.frontmatter)===null||U===void 0?void 0:U.nav;return _e()(C)==="object"&&_e()(C==null?void 0:C.second)==="object"});if(!p){var k;p=(k=_[0])===null||k===void 0?void 0:k.children[0]}var O=(b=p)===null||b===void 0||(b=b.frontmatter)===null||b===void 0?void 0:b.nav,j={order:0,title:void 0};if(typeof O!="string"){var N,H,S,A;j.order=(N=O==null||(H=O.second)===null||H===void 0?void 0:H.order)!==null&&N!==void 0?N:0,j.title=(S=O==null||(A=O.second)===null||A===void 0?void 0:A.title)!==null&&S!==void 0?S:O==null?void 0:O.second}if(c.includes(y)){var L;e[y].push({title:j.title,order:j.order,children:(L=_[0])===null||L===void 0?void 0:L.children})}else e[y]=_.map(function(G){return D()(D()({},G),{},{title:j.title,order:j.order})})}else c.includes(l)?e[l]=[].concat(Q()(e[l]),Q()(_)):e[l]=_},i=0,a=Object.entries(n);i<a.length;i++)r();return e},je=function(n){return/^(\w+:)\/\/|^(mailto|tel):/.test(n!=null?n:"")},te={locale:{id:"zh-CN",name:"\u4E2D\u6587",suffix:""},location:{hash:"",key:"",pathname:"",search:"",state:""},navData:[],routeMeta:{frontmatter:{},tabs:void 0,texts:[],toc:[]},sidebar:[],siteData:{components:{},demos:{},entryExports:{},loading:!0,locales:[],pkg:{},setLoading:void 0,themeConfig:{}}},tt=function(){var n=(0,f.useSiteData)(),e=n.themeConfig,r=(0,f.useNavData)(),i=(0,f.useSidebarData)(),a=(0,f.useRouteMeta)(),m=(0,f.useTabMeta)(),d=(0,f.useLocation)(),l=(0,f.useLocale)(),_=(0,f.useIntl)(),c=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:_.formatMessage({id:"header.nav.home"})}},[_]),h=e.hideHomeNav?r:[c].concat(Q()(r));return D()(D()({},te),{},{locale:l||te.locale,location:d||te.location,navData:h||te.navData,routeMeta:a||te.routeMeta,sidebar:i||te.sidebar,siteData:D()(D()({},te.siteData),{},{themeConfig:e}),tabMeta:m||te.tabMeta})},ot=(0,Fe.F)()((0,we.mW)(function(){return te},{name:"dumi-theme-yunti"})),g=Ue?ot:function(t,n){var e=tt(),r=(0,Fe.F)()((0,we.mW)(function(){return e},{name:"dumi-theme-yunti"}));return Object.assign(g,r),r(t,n)},rt=["setLoading"],it=["setLoading"],Ve={},at=function(n,e){(0,u.useEffect)(function(){u.startTransition(function(){n()})},e)},lt=function(n,e){(0,Jn.Z)(function(){n()},e,{maxWait:96,wait:32})},st=typeof u.startTransition=="function"?at:lt,ae=function(n,e,r){var i=r||function(a,m){var d;return(d=g.setState)===null||d===void 0?void 0:d.call(g,He()({},a,m))};!Ue&&!Ve[n]&&(i(n,e),Ve[n]=!0),st(function(){i(n,e)},[e])},ut=function(){var n=(0,f.useSiteData)(),e=(0,f.useSidebarData)(),r=(0,f.useRouteMeta)(),i=(0,f.useTabMeta)(),a=(0,f.useNavData)(),m=(0,f.useLocation)(),d=(0,f.useLocale)(),l=(0,f.useIntl)(),_=(0,u.useMemo)(function(){return{activePath:"/",link:"/",title:l.formatMessage({id:"header.nav.home"})}},[l]);return ae("siteData",n,function(){var c,h,b=n.setLoading,y=Ie()(n,rt),p=((c=g.getState)===null||c===void 0?void 0:c.call(g))||{siteData:{}},k=p.siteData,O=k.setLoading,j=Ie()(k,it);V()(y,j)||(h=g.setState)===null||h===void 0||h.call(g,{siteData:n})}),ae("sidebar",e),ae("routeMeta",r),ae("location",m),ae("tabMeta",i),ae("locale",d),ae("navData",a,function(){var c,h=n.themeConfig.hideHomeNav?a:[_].concat(Q()(a));(c=g.setState)===null||c===void 0||c.call(g,{navData:h})}),!1},dt=s(29148),E=s.n(dt),B=s(66933),We,ct=(0,B.vJ)(We||(We=E()([`
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
`])),function(t){var n=t.theme;return n.colorText}),mt=ct,Ce=s(37620),Ke=function(n){return n.siteData.themeConfig},ht=function(n){return n.siteData.themeConfig.title},Oe=function(n){var e;return((e=n.siteData.themeConfig.socialLinks)===null||e===void 0?void 0:e.github)||""},pt=function(n){var e;return((e=n.siteData.themeConfig.socialLinks)===null||e===void 0?void 0:e.discord)||""},_t=function(n){return n.siteData.themeConfig.giscus},vt=function(n){return n.siteData.themeConfig.header},Xe=function(n){return n===!1?!1:typeof n=="string"},ft=function(n){var e,r=n.routeMeta.frontmatter;if(n.siteData.themeConfig.apiHeader===!1||r.apiHeader===!1)return!1;if(r.apiHeader)return!0;var i=["/api","/components"].concat(Q()(((e=n.siteData.themeConfig.apiHeader)===null||e===void 0?void 0:e.match)||[]));return i.some(function(a){return n.location.pathname.startsWith(a)})},ze=function(n){var e,r,i,a,m=Oe(n),d=n.routeMeta.frontmatter,l=n.locale.id,_=function(G){return G.replace("{github}",m).replace("{atomId}",d.atomId||"").replace("{title}",d.title).replace("{locale}",l)},c=n.siteData.themeConfig.apiHeader||{},h=c.type,b=h===void 0?"component":h,y=c.pkg,p=y===void 0?n.siteData.pkg.name:y,k=c.sourceUrl,O=c.docUrl,j=((e=d.apiHeader)===null||e===void 0?void 0:e.pkg)||p,N=d.atomId||d.title,H=((r=d.apiHeader)===null||r===void 0?void 0:r.defaultImport)||!1,S=((i=d.apiHeader)===null||i===void 0?void 0:i.sourceUrl)||(Xe(k)?_(k):void 0),A=((a=d.apiHeader)===null||a===void 0?void 0:a.docUrl)||(Xe(O)?_(O):void 0);return{componentName:N,defaultImport:H,description:d.description,docUrl:A,pkg:j,sourceUrl:S,title:d.title,type:b}},bt=function(n){if(n.location.pathname==="/")return"/";var e=n.navData.filter(function(r){return r.link!=="/"}).find(function(r){return n.location.pathname.startsWith(String(r.activePath||r.link))});return(e==null?void 0:e.activePath)||(e==null?void 0:e.link)||""},Ze=function(n){var e,r,i=n.routeMeta,a=i.toc,m=i.frontmatter;(e=n.tabMeta)!==null&&e!==void 0&&e.toc&&(a=n.tabMeta.toc),(r=n.tabMeta)!==null&&r!==void 0&&r.frontmatter&&(m=n.tabMeta.frontmatter);var d=function(_){if(!m.tocDepth||typeof m.tocDepth=="number"&&m.tocDepth>_-1)return!0};return a.reduce(function(l,_){if(_.depth===2&&d(2))l.push(D()({},_));else if(_.depth===3&&d(3)){var c=l.at(-1);c&&(c.children=c.children||[],c.children.push(D()({},_)))}return l},[])},Ye=function(n){var e;return((e=n.sidebar)===null||e===void 0?void 0:e.map(function(r){return r.children}).flat())||[]},gt=function(n){var e=Ye(n),r=n.location.pathname,i=e.findIndex(function(a){return a.link===r});return{currentIndex:i,next:e[i+1],prev:e[i-1]}},Tt=s(92010),xt=function(n){var e=n.routeMeta.frontmatter;return(0,Tt.Z)({},e.token,n.siteData.themeConfig.siteToken)},Et={apiHeader:ze,flattenSidebar:Ye,token:xt},yt=function(){return{contentMaxWidth:960,footerHeight:300,headerHeight:64,sidebarWidth:240,tocWidth:176}},Rt=yt,St=s(827),Je=s(29191),Z=function(){var n=(0,Je.F)();return Ue||({GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.9",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"598",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240811.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19601",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10398316868",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3cb9e5ff-aa18-4ae7-9962-f11e0c491ae5",INVOCATION_ID:"1cfd511e2c3940c58debca69ffe127ee",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"12",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.5.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE&&(n.mobile={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.9",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"598",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240811.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19601",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10398316868",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3cb9e5ff-aa18-4ae7-9962-f11e0c491ae5",INVOCATION_ID:"1cfd511e2c3940c58debca69ffe127ee",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"12",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.5.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.MOBILE==="true"),{GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.9",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"598",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240811.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19601",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10398316868",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3cb9e5ff-aa18-4ae7-9962-f11e0c491ae5",INVOCATION_ID:"1cfd511e2c3940c58debca69ffe127ee",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"12",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.5.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP&&(n.desktop={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/10.8.1 node/v20.16.0 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",OLDPWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"yuntijs",GRADLE_HOME:"/usr/share/gradle-8.9",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"148947838",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",SYSTEMD_EXEC_PID:"598",npm_config_resolution_mode:"highest",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.14/x64",NVM_DIR:"/home/runner/.nvm",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.13/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240811.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",GOROOT_1_22_X64:"/opt/hostedtoolcache/go/1.22.6/x64",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:19601",GITHUB_WORKFLOW:"Deploy to GitHub Pages",_:"/opt/hostedtoolcache/node/20.16.0/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",npm_config_npm_version:"10.8.1",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",STATS_D:"true",GITHUB_RUN_ID:"10398316868",STATS_VMFE:"true",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"yuntijs/dumi-theme-yunti/.github/workflows/deploy-ghpages.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example/node_modules/.bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.bin:/home/runner/work/dumi-theme-yunti/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/runner/setup-pnpm/node_modules/.bin:/opt/hostedtoolcache/node/20.16.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_3cb9e5ff-aa18-4ae7-9962-f11e0c491ae5",INVOCATION_ID:"1cfd511e2c3940c58debca69ffe127ee",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",NODE:"/opt/hostedtoolcache/node/20.16.0/x64/bin/node",npm_package_name:"dumi-theme-yunti-example",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"12",GITHUB_TRIGGERING_ACTOR:"Carrotzpc",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 16",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"yuntijs/dumi-theme-yunti",STATS_D_D:"true",npm_lifecycle_script:"dumi build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",npm_config_public_hoist_pattern:`*@umijs/lint*

*changelog*

*commitlint*

*eslint*

*postcss*

*prettier*

*remark*

*semantic-release*

*stylelint*`,GITHUB_REPOSITORY_ID:"736102394",GITHUB_ACTIONS:"true",npm_package_version:"1.5.0",npm_lifecycle_event:"build",NODE_PATH:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/bin/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules:/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/node_modules",GITHUB_REF_PROTECTED:"false",npm_config_strict_peer_dependencies:"",GITHUB_WORKSPACE:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti",ACCEPT_EULA:"Y",GITHUB_JOB:"deploy",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"d28f8056c23c4b344ffd88da68c653b1d2f49898",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"Carrotzpc",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/20.16.0/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",GITHUB_ACTOR_ID:"10265417",RUNNER_WORKSPACE:"/home/runner/work/dumi-theme-yunti",npm_execpath:"/opt/hostedtoolcache/node/20.16.0/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",GITHUB_EVENT_NAME:"workflow_run",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.11.2-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",npm_config_global_prefix:"/opt/hostedtoolcache/node/20.16.0/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/27.0.12077973",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",PNPM_HOME:"/home/runner/setup-pnpm/node_modules/.bin",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.181+6/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/27.0.12077973",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_cb65ce3b-edf2-49cf-b27b-7376415a8cd2",INIT_CWD:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/example",EDITOR:"vi",NODE_ENV:"production",DUMI_PRESETS:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/dumi@2.4.7_@babel+core@7.24.9_@swc+helpers@0.5.1_@types+node@20.14.12_@types+react@18.3.3_esl_nwcxbinffhis7rwxdy5edkxanu/node_modules/dumi/dist/preset.js",DID_YOU_KNOW:"none",UMI_DIR:"/home/runner/work/dumi-theme-yunti/dumi-theme-yunti/node_modules/.pnpm/umi@4.3.9_@babel+core@7.24.9_@types+node@20.14.12_@types+react@18.3.3_eslint@8.57.0_lightning_ygmjri3q75hbi7xstyugvmibby/node_modules/umi"}.DESKTOP==="true")),n},Ne=s(20113),Y=s(70957),It=s(62090),Ot=s(94174),Nt=s(44550),Ae=s(24899),Le=s(31180),Me=s(42018),At=s(92496),K=s(12274),$e,Qe,qe,en,nn,kt=(0,B.kc)(function(t,n){var e=t.css,r=t.token,i=t.stylish,a=n.mobile;return{desc:e($e||($e=E()([`
      font-size: `,`px;
      line-height: `,`px;
    `])),r.fontSizeLG,r.lineHeightLG),label:e(Qe||(Qe=E()([`
      width: 80px;
    `]))),meta:e(qe||(qe=E()([""]))),text:e(en||(en=E()([`
      `,`
    `])),i.resetLinkColor),title:e(nn||(nn=E()([`
      `,` {
        margin-block: 0;
        font-size: 32px !important;
      }
    `])),a)}}),o=s(651),tn=(0,u.memo)(function(t){var n=t.title,e=t.type,r=t.componentName,i=t.description,a=t.defaultImport,m=t.pkg,d=t.sourceUrl,l=t.docUrl,_=t.serviceList,c=_===void 0?[]:_,h=Z(),b=h.mobile,y=kt({mobile:b}),p=y.styles,k=e==="doc",O=[d&&{children:"Source",icon:(0,o.jsx)(Y.Z,{icon:Me.Z}),url:d},l&&{children:"Edit",icon:(0,o.jsx)(Y.Z,{icon:At.Z}),url:l}].filter(Boolean),j=a?"import ".concat(r," from '").concat(m,"';"):"import { ".concat(r," } from '").concat(m,"';");return(0,o.jsxs)(K.D,{id:"api-header",style:{marginBottom:24},children:[(0,o.jsx)(Nt.Z.Title,{className:p.title,children:n}),i&&(0,o.jsx)(It.Z,{className:p.desc,children:i}),!k&&(0,o.jsxs)(K.D,{gap:b?16:24,style:{marginTop:16},children:[r&&(0,o.jsx)("div",{style:{display:"flex"},children:(0,o.jsx)(Ot.Z,{spotlight:!0,children:j})}),(0,o.jsx)(Ae.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,o.jsxs)(K.D,{distribution:"space-between",gap:b?24:0,horizontal:!b,children:[(0,o.jsx)(Le.Z,{split:(0,o.jsx)(Ae.Z,{type:"vertical"}),wrap:!0,children:c.map(function(N){return(0,o.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",title:N.label,children:(0,o.jsxs)(K.D,{align:"center",className:p.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},N.label)})}),(0,o.jsx)(Le.Z,{className:p.meta,split:(0,o.jsx)(Ae.Z,{type:"vertical"}),children:O.map(function(N,H){return(0,o.jsx)("a",{href:N.url,rel:"noreferrer",target:"_blank",children:(0,o.jsxs)(K.D,{align:"center",className:p.text,gap:8,horizontal:!0,children:[N.icon,N.children]})},H)})})]})]})]})}),on,rn,an,ln=(0,B.kc)(function(t){var n=t.cx,e=t.css,r=t.token,i=t.stylish;return{background:n(i.gradientAnimation,e(on||(on=E()([`
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
    `])))),changelog:e(rn||(rn=E()([`
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
  `])),r.colorTextDescription,r.colorBorderSecondary),content:e(an||(an=E()([`
    width: 100%;
    max-width: `,`px;
    margin: 0 auto;
  `])),r.contentMaxWidth)}}),Dt=s(48037),Ht=s(83994),Ut=s(25220),sn,un,dn,cn,jt=(0,B.kc)(function(t){var n=t.token,e=t.css;return{alignmentEnd:e(sn||(sn=E()([`
    justify-content: flex-end;
  `]))),container:e(un||(un=E()([`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;

    background: `,`;
    border-radius: 8px;

    &:hover {
      background: `,`;
    }
  `])),n.colorBgContainer,n.colorFillTertiary),nav:e(dn||(dn=E()([`
    font-size: 12px;
    color: `,`;
  `])),n.colorTextTertiary),title:e(cn||(cn=E()([`
    font-size: 16px;
  `])))}}),Ct=(0,u.memo)(function(t){var n=t.title,e=t.link,r=t.type,i=jt(),a=i.styles,m=i.cx,d=(0,f.useIntl)(),l=(0,u.useMemo)(function(){switch(r){case"prev":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Y.Z,{icon:Ht.Z}),(0,o.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.previous"})})]});case"next":return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{style:{lineHeight:1},children:d.formatMessage({id:"content.footer.actions.next"})}),(0,o.jsx)(Y.Z,{icon:Ut.Z})]})}},[d,r]);return(0,o.jsx)(f.Link,{to:e,children:(0,o.jsxs)(K.D,{className:a.container,gap:8,children:[(0,o.jsx)(K.D,{className:m(a.nav,r==="next"&&a.alignmentEnd),gap:4,horizontal:!0,children:l}),(0,o.jsx)(K.D,{className:m(a.title,r==="next"&&a.alignmentEnd),horizontal:!0,children:n})]})})}),mn=Ct,Lt=(0,u.memo)(function(){var t=g(gt,V()),n=t.prev,e=t.next,r=Z(),i=r.mobile;return(0,o.jsxs)(K.D,{distribution:"space-between",gap:i?12:0,horizontal:!i,style:{margin:i?12:0},children:[n?(0,o.jsx)(mn,D()({type:"prev"},n)):(0,o.jsx)("div",{}),e?(0,o.jsx)(mn,D()({type:"next"},e)):(0,o.jsx)("div",{})]})}),Mt=Lt,hn,pn,Bt=(0,B.kc)(function(t,n){var e=t.cx,r=t.token,i=t.css,a=n.isPure,m=n.mobile;return{content:e(!a&&i(hn||(hn=E()([`
          padding: 24px 48px;
          background-color: `,`;
          border-radius: 10px;

          `,` {
            padding: 8px 16px;
            border-radius: 0;
          }
        `])),r.colorBgContainer,m),i(pn||(pn=E()([`
        flex: 1;
        box-sizing: border-box;
        width: 100%;
        min-height: 400px;

        &:has([data-page-tabs='true']) {
          padding-top: 8px;
        }
      `]))))}}),Pt=["children"],Gt=(0,u.memo)(function(t){var n=t.children,e=Ie()(t,Pt),r=g(function(h){return h.siteData.loading}),i=g(Ke,V()),a=i.docStyle,m=Z(),d=m.mobile,l=Bt({isPure:a==="pure",mobile:d}),_=l.styles,c=l.cx;return(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[r]),(0,o.jsxs)(K.D,D()(D()({gap:d?0:24,width:"100%"},e),{},{children:[(0,o.jsx)("div",{className:c("dumi-antd-style-content",_.content),children:(0,o.jsx)(Dt.Z,{children:n})}),(0,o.jsx)(Mt,{})]}))}),_n=Gt,wt=(0,u.memo)(function(){var t=(0,f.useOutlet)(),n=Z(),e=n.mobile,r=g(function(_){return{repoBase:Oe(_)}},ne.X),i=r.repoBase,a=g(function(_){return{fm:_.routeMeta.frontmatter}},V()),m=a.fm,d=ln(),l=d.styles;return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:l.background}),(0,o.jsxs)(Ne.Z,{className:l.content,style:{padding:e?0:24},children:[(0,o.jsx)("div",{style:{padding:e?16:0,width:"100%"},children:(0,o.jsx)(tn,{description:m.description,docUrl:"".concat(i,"/blob/master/CHANGELOG.md"),sourceUrl:"".concat(i,"/blob/master/CHANGELOG.md"),title:m.title})}),(0,o.jsx)(_n,{className:l.changelog,children:t})]})]})}),Ft=wt,Vt=s(13876),Wt=s(22148),Kt=(0,u.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"64 64 896 896",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z",fillRule:"evenodd"})})}),Xt=(0,u.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),zt=(0,u.memo)(function(){return(0,o.jsx)("svg",{height:"14px",version:"1.1",viewBox:"0 0 14 14",width:"14px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,o.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),Zt=(0,u.memo)(function(){return(0,o.jsxs)("svg",{height:"1em",viewBox:"0 0 108 108",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"main",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,o.jsx)("path",{d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",fill:"url(#main)",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),Yt=(0,u.memo)(function(){return(0,o.jsx)("svg",{fill:"currentColor",height:"1em",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),Jt=(0,u.memo)(function(){var t=g(ze,V()),n=t.pkg,e=(0,u.useMemo)(function(){var r=encodeURIComponent(String(n));return[{children:"NPM",icon:(0,o.jsx)(zt,{}),label:"NPM",url:"https://www.npmjs.com/package/".concat(r)},{children:"UNPKG",icon:(0,o.jsx)(Yt,{}),label:"Check package files",url:"https://unpkg.com/browse/".concat(r,"/")},{children:"BundlePhobia",icon:(0,o.jsx)(Kt,{}),label:"Check bundle size",url:"https://bundlephobia.com/package/".concat(r)},{children:"PackagePhobia",icon:(0,o.jsx)(Zt,{}),label:"Check package size",url:"https://packagephobia.com/result?p=".concat(r)},{children:"Anvaka Graph",icon:(0,o.jsx)(Xt,{}),label:"Dependence graph",url:"https://npm.anvaka.com/#/view/2d/".concat(encodeURIComponent(r))}]},[n]);return(0,o.jsx)(tn,D()({serviceList:e},t))}),$t=Jt,Qt=(0,u.memo)(function(){var t=(0,f.useOutlet)(),n=(0,f.useLocation)(),e=Z(),r=e.mobile,i=g(function(c){return{giscus:_t(c),isApiPage:ft(c)}},ne.X),a=i.isApiPage,m=i.giscus,d=ln(),l=d.styles;(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[n.pathname]);var _=(0,u.useCallback)(function(){return m&&(0,o.jsx)("div",{style:{marginTop:64},children:(0,o.jsx)(Wt.Z,{category:m.category,categoryId:m.categoryId,id:"lobehub",mapping:"title",repo:m.repo,repoId:m.repoId})})},[m,n.pathname]);return(0,o.jsxs)(Vt.V9,{hashPriority:"high",children:[(0,o.jsx)("div",{className:l.background}),(0,o.jsxs)(Ne.Z,{className:l.content,style:{marginBottom:48,padding:r?0:24},children:[a?(0,o.jsx)("div",{style:{padding:r?16:0,width:"100%"},children:(0,o.jsx)($t,{})}):void 0,(0,o.jsxs)(_n,{children:[t,m&&(0,o.jsx)(_,{})]})]})]})}),qt=Qt,eo=s(57030),Be=function(n){return!!n.routeMeta.frontmatter.hero},re=function(n,e){if(e)return e[n.locale.id]?e[n.locale.id]:e},no=function(n){var e,r;return((e=n.routeMeta.frontmatter.hero)===null||e===void 0?void 0:e.title)||((r=re(n,n.siteData.themeConfig.hero))===null||r===void 0?void 0:r.title)||re(n,n.siteData.themeConfig.title)||n.siteData.themeConfig.name},to=function(n){var e,r;return((e=n.routeMeta.frontmatter.hero)===null||e===void 0?void 0:e.description)||((r=re(n,n.siteData.themeConfig.hero))===null||r===void 0?void 0:r.description)||re(n,n.siteData.themeConfig.description)},oo=function(n){var e,r;return((e=n.routeMeta.frontmatter.hero)===null||e===void 0?void 0:e.actions)||((r=re(n,n.siteData.themeConfig.hero))===null||r===void 0?void 0:r.actions)||re(n,n.siteData.themeConfig.actions)},ro=function(n){var e;return Be(n)?((e=re(n,n.siteData.themeConfig.hero))===null||e===void 0?void 0:e.features)||re(n,n.siteData.themeConfig.features)||n.routeMeta.frontmatter.features||[]:[]},io=function(n){var e=n.siteData.themeConfig.customPages;if(!(!e||e.length===0))return e.find(function(r){return r.path===n.location.pathname})},ao=(0,u.memo)(function(){var t=g(ro,V()),n=(0,B.Fg)();if(t!=null&&t.length)return(0,o.jsx)(eo.Z,{items:t,maxWidth:n.contentMaxWidth,style:{margin:"0 16px"}})}),lo=ao,so=s(72819),uo=(0,u.memo)(function(){var t=g(Be),n=g(no),e=g(to),r=g(oo);if(t)return(0,o.jsx)(so.Z,{actions:r,description:e,title:n})}),co=uo,mo=(0,u.memo)(function(){var t=(0,f.useOutlet)();return(0,u.useEffect)(function(){window.scrollTo(0,0),document.body.scrollTo(0,0)},[]),(0,o.jsxs)(K.D,{align:"center",gap:64,style:{minHeight:"64vh",padding:"64px 24px"},children:[(0,o.jsx)(co,{}),(0,o.jsx)(lo,{}),t]})}),ho=mo,po=s(41850),_o=s(2957),vo=s(35723),fo=s(59325),bo=function(n){var e=n.github,r={items:[{description:"AIGC UI Components",openExternal:!0,title:"Yunti UI",url:"https://github.com/yuntijs/yunti-ui"},{description:"Awesome lint configs",openExternal:!0,title:"Yunti Lint",url:"https://github.com/yuntijs/yunti-lint"},{description:"Yunti Dumi Theme",openExternal:!0,title:"Designed for Dumi 2",url:"https://github.com/yuntijs/dumit-theme-yunti"}],title:"Resources"},i={items:[e&&{icon:(0,o.jsx)(Y.Z,{icon:_o.Z,size:"small"}),openExternal:!0,title:"Report Bug",url:"".concat(e,"/issues/new/choose")},e&&{icon:(0,o.jsx)(Y.Z,{icon:vo.Z,size:"small"}),openExternal:!0,title:"Request Feature",url:"".concat(e,"/issues/new/choose")}].filter(Boolean),title:"Community"},a={items:[e&&{icon:(0,o.jsx)(Y.Z,{icon:Me.Z,size:"small"}),openExternal:!0,title:"GitHub",url:e},{LinkComponent:f.Link,icon:(0,o.jsx)(Y.Z,{icon:fo.Z,size:"small"}),title:"Changelog",url:"/changelog"}].filter(Boolean),title:"Help"},m={items:[{description:"Framework for k8s",openExternal:!0,title:"Kubebb",url:"https://github.com/kubebb"},{description:"One-stop LLMOps platform",openExternal:!0,title:"KubeAGI",url:"https://github.com/kubeagi"},{description:"AI agent creation and distribution platform",openExternal:!0,title:"Botnow",url:"https://botnow.cn"},{description:"AI Smart Assistant",openExternal:!0,title:"\u7075\u5C0F\u609F",url:"https://lingwu.cn"}],title:"More Products"};return[r,i,a,m]},vn,fn,go=(0,B.kc)(function(t,n){var e=t.css,r=t.token,i=n.mobile,a="rc-footer";return{container:e(vn||(vn=E()([`
      grid-area: footer;
      align-self: stretch;

      color: `,`;
      text-align: center;

      border-top: 1px solid `,`;

      `,` {
        flex-direction: column;
        border: none;
      }
    `])),r.colorTextDescription,r.colorSplit,i),footer:e(fn||(fn=E()([`
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
    `])),r.colorTextSecondary,r.colorBgLayout,a,r.colorTextTertiary,r.colorLinkHover,a,r.contentMaxWidth,r.colorText,r.colorBorderSecondary,i,a)}}),To=(0,u.memo)(function(){var t=g(function(y){return y.siteData},V()),n=t.themeConfig,e=t.pkg,r=n.footerConfig,i=n.footer,a=g(Oe,ne.X),m=Z(),d=m.mobile,l=go({mobile:d}),_=l.styles,c=l.theme;if(i){var h=r!=null&&r.columns?r==null?void 0:r.columns:bo({github:a||e.homepage});r!=null&&r.resources&&(h[0]=r==null?void 0:r.resources),r!=null&&r.moreProducts&&(h[3]=r==null?void 0:r.moreProducts);var b=(r==null?void 0:r.bottom)||i;return(0,o.jsx)(po.Z,{bottom:d?(0,o.jsxs)(Ne.Z,{className:_.container,children:["Copyright \xA9 ",new Date().getFullYear(),(0,o.jsx)(K.D,{align:"center",dangerouslySetInnerHTML:{__html:b},horizontal:!0})]}):(0,o.jsxs)(Ne.Z,{horizontal:!0,children:["Copyright \xA9 ",new Date().getFullYear()," ",(0,o.jsx)(Ae.Z,{type:"vertical"}),(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:b}})]}),columns:h,contentMaxWidth:c.contentMaxWidth,theme:c.appearance})}}),xo=To,Eo=s(4413),yo=s(23961),Ro=s(61672),bn,So=(0,B.kc)(function(t,n){var e=t.css,r=t.token,i=n.mobile;return e(bn||(bn=E()([`
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
  `])),r.colorText,i)}),Io=(0,u.memo)(function(){var t=g(Ke,V()),n=g(function(d){return d.locale},V()),e=Z(),r=e.mobile,i=So({mobile:r}),a=i.styles,m=i.cx;return t&&(0,o.jsx)(f.Link,{className:m(a),to:"base"in n?n.base:"/",children:(0,o.jsxs)(Le.Z,{children:[(0,o.jsx)(Ro.Z,{avatar:t.logo||"https://avatars.githubusercontent.com/u/148947838",size:r?32:36}),t.name]})})}),Oo=Io,No=s(69916),Ao=s(80326),ko=s(31125),gn,Tn,Do=(0,B.kc)(function(t,n){var e=t.css,r=t.stylish,i=t.token,a=t.prefixCls,m=n.mobile;return{link:e(gn||(gn=E()([`
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
      `])),r.resetLinkColor,r.resetLinkColor,i.marginXS,i.fontSizeSM,i.colorTextTertiary),tabs:e(Tn||(Tn=E()([`
        .`,`-tabs-tab-active a {
          color: `,` !important;
        }
        `,` {
          display: none;
        }
      `])),a,i.colorText,m)}}),xn=function(n){return(n!=null?n:"").split("/").slice(0,2).join("/")},Ho=(0,u.memo)(function(){var t=Z(),n=t.mobile,e=Do({mobile:n}),r=e.styles,i=(0,f.useLocation)(),a=i.pathname,m=g(function(l){return l.navData},ne.X),d=a.split("/").slice(0,2).join("/");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(No.Z,{activeKey:d,className:r.tabs,items:m.map(function(l){var _=l.activePath||xn(l.link);return{key:je(l.link)?l.link:_,label:je(l.link)?(0,o.jsxs)("a",{className:r.link,href:String(l.link),onClick:function(h){return h.preventDefault()},rel:"noreferrer",target:l.target||"_blank",children:[(0,o.jsx)("span",{className:"lint-text",children:l.title})," ",(0,o.jsx)(Y.Z,{icon:ko.Z})]}):(0,o.jsx)(f.Link,{className:r.link,onClick:function(h){return h.preventDefault()},target:l.target,to:String(l.link),children:l.title})}}),onTabClick:function(_){var c=m.find(function(h){return h.activePath===_||h.link===_||xn(h.link)===_});if(c!=null&&c.link){if(je(c.link)||c.target==="_blank")return window.open(c.link);f.history.push(c.link)}}}),(0,o.jsx)(Ao.Z,{})]})}),Uo=Ho,jo=s(19210),Co=s(57912),En,yn,Rn,Sn,In,Lo=(0,B.kc)(function(t,n){var e=t.token,r=t.css,i=t.cx,a=n.mobile;return{container:r(En||(En=E()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),a),input:r(yn||(yn=E()([`
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
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorTextPlaceholder,e.colorBgElevated,e.colorBorderSecondary),popover:r(Rn||(Rn=E()([`
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
    `])),e.colorBgElevated,e.colorBorder,e.borderRadiusLG,e.boxShadow,e.colorText,e.colorFillTertiary,e.colorTextSecondary,e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,e.yellow9),shortcut:i("site-header-shortcut",r(Sn||(Sn=E()([`
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
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,a)),svg:i(r(In||(In=E()([`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: `,`;
    `])),e.colorTextPlaceholder))}}),Mo=(0,u.memo)(function(){var t=(0,Je.F)(),n=t.mobile,e=Lo({mobile:n}),r=e.styles,i=(0,u.useState)(!1),a=P()(i,2),m=a[0],d=a[1],l=(0,f.useSiteSearch)(),_=l.keywords,c=l.setKeywords,h=l.result,b=l.loading,y=(0,f.useIntl)();return(0,o.jsxs)("div",{className:r.container,children:[(0,o.jsx)(jo.Z,{enableShortKey:!0,onBlur:function(){setTimeout(function(){d(!1)},1)},onChange:function(k){return c(k.target.value)},onFocus:function(){return d(!0)},placeholder:y.formatMessage({id:"header.search.placeholder"}),spotlight:!0}),_.trim()&&m&&(h.length>0||!b)&&(0,o.jsx)("div",{className:r.popover,children:(0,o.jsx)(Co.Z,{data:h,loading:b})})]})}),Bo=Mo,Po=s(93974),Go=s(74604),wo=(0,u.memo)(function(){var t=(0,u.useState)(!1),n=P()(t,2),e=n[0],r=n[1],i=g(function(c){return c.navData},V()),a=g(function(c){return c.sidebar},V()),m=g(function(c){return{activePath:bt(c),pathname:c.location.pathname}},ne.X),d=m.pathname,l=m.activePath,_=(0,u.useMemo)(function(){var c=a==null?void 0:a.map(function(h){return!h.link&&{children:h.children.map(function(b){return{key:"s-".concat(b.link),label:(0,o.jsx)(f.Link,{onClick:function(){r(!1)},to:b.link,children:b.title})}}),label:h.title,type:"group"}});return i.map(function(h){return{children:(h.activePath||h.link)===l&&c,key:h.activePath||h.link,label:(0,o.jsx)(f.Link,{to:String(h.link),children:h.title})}})},[i,l,a]);return(0,o.jsx)(Po.Z,{items:_,openKeys:[l],opened:e,selectedKeys:(0,Go.Z)([l,"s-".concat(d)]),setOpened:r})}),Fo=wo,On=s(86982),Vo=s(93910),Nn,Wo=(0,Vo.Z)("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),Ko=(0,B.kc)(function(t){var n=t.css;return n(Nn||(Nn=E()([`
    svg {
      overflow: visible !important;
    }
  `])))}),Xo=(0,u.memo)(function(){var t=g(pt),n=Ko(),e=n.styles;return t?(0,o.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(On.Z,{className:e,icon:Wo,size:"site"})}):void 0}),zo=Xo,Zo=(0,u.memo)(function(){var t=g(Oe);return t?(0,o.jsx)("a",{href:t,rel:"noreferrer",target:"_blank",children:(0,o.jsx)(On.Z,{icon:Me.Z,size:"site"})}):void 0}),Yo=Zo,An=s(88016),X=s(11348),fe=s(45623),Jo=s(51683),$o=s(86473),kn,Dn,Hn,Qo=(0,B.kc)(function(t,n){var e=t.css,r=t.cx,i=t.token;return{active:r("".concat(n,"-item-active"),e(kn||(kn=E()([`
      background: `,`;
    `])),i.colorFillTertiary)),item:r("".concat(n,"-item"),e(Dn||(Dn=E()([`
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
    `])),i.fontFamily,i.colorText,i.colorFillTertiary)),selected:r("".concat(n,"-item-selected"),e(Hn||(Hn=E()([`
      font-weight: bold;
      color: `,`;
      background: `,`;

      &:hover {
        color: `,`;
        background: `,`;
      }
    `])),i.colorPrimaryText,i.colorPrimaryBg,i.colorPrimaryTextHover,i.colorPrimaryBgHover))}}),qo=["value","label","prefixCls","isSelected","isActive","disabled"],er=(0,u.forwardRef)(function(t,n){var e=t.value,r=t.label,i=t.prefixCls,a=t.isSelected,m=t.isActive,d=t.disabled,l=Ie()(t,qo),_=Qo(i),c=_.styles,h=_.cx;return(0,o.jsx)("button",D()(D()({"aria-selected":a,className:h(c.item,He()(He()({},c.selected,a),c.active,m)),disabled:d,ref:n,role:"option",tabIndex:-1,type:"button"},l),{},{children:r}),e)}),nr=er,Un,jn,tr=(0,B.kc)(function(t,n){var e=t.css,r=t.stylish,i=t.cx,a=t.token;return{button:i("".concat(n,"-button"),e(Un||(Un=E()([`
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
    `])),r.buttonDefaultHover,a.fontSize,a.colorTextSecondary,a.colorBgContainer,a.colorBorder,a.borderRadius,a.colorPrimary,a.colorPrimaryBg)),container:i(n,e(jn||(jn=E()([`
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
    `])),a.fontSize,a.colorBgElevated,a.colorBorder,a.boxShadowSecondary))}}),or=(0,u.memo)(function(t){var n=t.options,e=n===void 0?[]:n,r=t.value,i=t.prefixCls,a=t.onChange,m=t.renderValue,d=t.renderItem,l=t.style,_=i!=null?i:"native-select",c=(0,$o.Z)(0,{onChange:a,value:r}),h=P()(c,2),b=h[0],y=h[1],p=tr(_),k=p.styles,O=(0,u.useRef)([]),j=(0,u.useRef)([]),N=(0,u.useRef)(null),H=(0,u.useRef)(!1),S=(0,u.useRef)(!0),A=(0,u.useRef)(),L=(0,u.useRef)(null),G=(0,u.useState)(!1),U=P()(G,2),C=U[0],z=U[1],w=(0,u.useState)(null),R=P()(w,2),I=R[0],x=R[1],be=(0,u.useState)(!1),de=P()(be,2),le=de[0],ce=de[1],se=(0,u.useState)(0),ge=P()(se,2),Te=ge[0],ue=ge[1],xe=(0,u.useState)(!1),Ee=P()(xe,2),me=Ee[0],he=Ee[1],ye=(0,u.useState)(!1),pe=P()(ye,2),v=pe[0],T=pe[1];C||(Te!==0&&ue(0),le&&ce(!1),v&&T(!1));var M=(0,X.YF)({middleware:le?[(0,fe.cv)(5),me?(0,fe.uY)({crossAxis:!0,padding:10}):(0,fe.RR)({padding:10}),(0,fe.dp)({apply:function(W){var ee,Re,wr=W.availableHeight;Object.assign((ee=(Re=L.current)===null||Re===void 0?void 0:Re.style)!==null&&ee!==void 0?ee:{},{maxHeight:"".concat(wr,"px")})},padding:10})]:[(0,X.aN)({index:b,listRef:O,minItemsVisible:me?8:4,offset:Te,onFallbackChange:ce,overflowRef:N,padding:10,referenceOverflowThreshold:20,scrollRef:L}),(0,fe.cv)({crossAxis:-4})],onOpenChange:z,open:C,placement:"bottom-start",whileElementsMounted:Jo.Me}),J=M.x,ie=M.y,F=M.strategy,q=M.refs,$=M.context,Ge=(0,X.NI)([(0,X.eS)($,{event:"mousedown"}),(0,X.bQ)($),(0,X.qs)($,{role:"listbox"}),(0,X.Rz)($,{enabled:!le,onChange:ue,overflowRef:N,scrollRef:L}),(0,X.c0)($,{activeIndex:I,listRef:O,onNavigate:x,selectedIndex:b}),(0,X.ox)($,{activeIndex:I,listRef:j,onMatch:C?x:y})]),Lr=Ge.getReferenceProps,Mr=Ge.getFloatingProps,Br=Ge.getItemProps;(0,u.useEffect)(function(){if(C)return A.current=setTimeout(function(){H.current=!0},300),function(){clearTimeout(A.current)};H.current=!1,S.current=!0},[C]);var Pr=e[b]||{},Gr=Pr.label;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",D()(D()({"aria-label":"selected-item",className:k.button,ref:q.setReference,style:l,type:"button"},Lr({onPointerMove:function(W){var ee=W.pointerType;ee==="mouse"&&he(!1)},onTouchStart:function(){he(!0)}})),{},{children:m?m(b):Gr})),(0,o.jsx)(X.ll,{children:C&&(0,o.jsx)(X.y0,{lockScroll:!me,style:{zIndex:3e3},children:(0,o.jsx)(X.wD,{context:$,initialFocus:-1,modal:!1,children:(0,o.jsx)("div",{ref:q.setFloating,style:{left:J!=null?J:0,position:F,top:ie!=null?ie:0},children:(0,o.jsx)("div",D()(D()({className:k.container,ref:L,style:{overflowY:"auto"}},Mr({onContextMenu:function(W){W.preventDefault()}})),{},{children:e.map(function(oe,W){return(0,o.jsx)(nr,D()({disabled:v,isActive:W===I,isSelected:W===b,label:d?d(oe,W):oe.label,prefixCls:_,ref:function(Re){O.current[W]=Re,j.current[W]=oe.label},value:oe.value},Br({onClick:function(){H.current&&(y(W),z(!1))},onKeyDown:function(){H.current=!0},onMouseUp:function(){S.current&&(H.current&&(y(W),z(!1)),clearTimeout(A.current),A.current=setTimeout(function(){H.current=!0}))},onTouchStart:function(){H.current=!0,S.current=!1}})),oe.value)})}))})})})})]})}),rr=or;function ke(t){var n=t.pathname,e=t.current,r=t.target,i="base"in e?n.replace(e.base.replace(/\/$/,""),"")||"/":n.replace(new RegExp("".concat(e.suffix,"$")),"");return"base"in r?"".concat(r.base.replace(/\/$/,"")).concat(i).replace(/([^/])\/$/,"$1"):"".concat(i).concat(r.suffix)}var ir={"de-DE":"\u{1F1E9}\u{1F1EA}","en-US":"\u{1F1FA}\u{1F1F8}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","pt-BR":"\u{1F1E7}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}","zh-CN":"\u{1F1E8}\u{1F1F3}"},Cn={"en-US":"EN","zh-CN":"\u4E2D"},ar=(0,u.memo)(function(t){var n=t.locale,e=t.current,r=(0,f.useLocation)(),i=r.pathname,a=(0,u.useState)(function(){return ke({current:e,pathname:i,target:n})}),m=P()(a,2),d=m[0],l=m[1];return(0,u.useEffect)(function(){l(ke({current:e,pathname:i,target:n}))},[e,n,i]),(0,o.jsx)(f.Link,{to:d,children:(0,o.jsx)(An.ZP,{style:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:34,padding:0},children:Cn[n.id]})})}),lr=(0,u.memo)(function(){var t=g(function(e){return e.siteData.locales}),n=g(function(e){return e.locale});if(!(t.length<=1))return t.length>2?(0,o.jsx)(rr,{onChange:function(r){console.log(ke({current:n,pathname:location.pathname,target:t[r]})),f.history.push(ke({current:n,pathname:location.pathname,target:t[r]}))},options:t.map(function(e){return{label:Cn[e.id],value:e.id}}),renderItem:function(r,i){return"".concat(ir[t[i].id]," ").concat(t[i].name)},style:{alignItems:"center",display:"flex",height:32,justifyContent:"center",minWidth:32,padding:0},value:t.findIndex(function(e){return e.id===n.id})}):(0,o.jsx)(ar,{current:n,locale:t.find(function(e){var r=e.id;return r!==n.id})})}),sr=lr,ur=s(77388),dr=(0,u.memo)(function(){var t=(0,Ce.f)(function(e){return e.themeMode}),n=(0,f.usePrefersColor)()[2];return(0,u.useEffect)(function(){return n(t)},[n,t]),(0,o.jsx)(ur.Z,{onThemeSwitch:function(r){Ce.f.setState({themeMode:r})},themeMode:t})}),Ln=dr,cr=s(12531),mr=s(25381),hr=s(59596),pr=s(99351),Mn,Bn,_r=(0,B.kc)(function(t){var n=t.css;return{avatar:n(Mn||(Mn=E()([`
      cursor: pointer;
    `]))),menu:n(Bn||(Bn=E()([`
      width: 180px;
    `])))}}),Pe="__LOGIN_USER",Pn=(0,u.memo)(function(){var t,n=_r(),e=n.styles,r=g(vt),i=g(function(h){return h.loginUser}),a=(0,f.useIntl)(),m=(0,u.useState)(i),d=P()(m,2),l=d[0],_=d[1];(0,u.useEffect)(function(){var h=window.localStorage.getItem(Pe);if(h)try{var b=JSON.parse(h);_(b),g.setState({loginUser:b})}catch(y){console.warn("parse login user info from ".concat(Pe," failed"),y)}},[]);var c=(0,u.useCallback)(function(){window.localStorage.removeItem(Pe)},[]);if(r!=null&&(t=r.userActionButton)!==null&&t!==void 0&&t.button)return l!=null&&l.user?(0,o.jsx)(cr.Z,{menu:{className:e.menu,items:r.userActionButton.menuItems||[{icon:(0,o.jsx)(Y.Z,{icon:hr.Z}),label:(0,o.jsx)("a",{href:"https://console.botnow.cn/oidc/management/account",children:"\u8D26\u6237\u4E2D\u5FC3"}),key:"account"},{type:"divider"},{icon:(0,o.jsx)(Y.Z,{icon:pr.Z}),label:(0,o.jsx)("a",{href:"https://console.botnow.cn/oidc/logout",onClick:c,children:"\u9000\u51FA\u767B\u5F55"}),key:"logout"}]},children:(0,o.jsx)(mr.C,{className:e.avatar,size:"small",src:l.avatar,children:l.user.charAt(0).toUpperCase()})}):(0,o.jsx)(An.ZP,D()(D()({},r.userActionButton.button),{},{children:a.formatMessage({id:"header.actions.user"})}))}),vr=(0,u.memo)(function(){var t=g(function(r){return!!r.routeMeta.frontmatter}),n=Z(),e=n.mobile;if(t)return(0,o.jsx)(Eo.Z,{actions:e?(0,o.jsxs)(yo.Z,{align:"center",gap:"small",children:[(0,o.jsx)(Ln,{}),(0,o.jsx)(Pn,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Bo,{}),(0,o.jsx)(sr,{}),(0,o.jsx)(Yo,{}),(0,o.jsx)(zo,{}),(0,o.jsx)(Ln,{}),(0,o.jsx)(Pn,{})]}),logo:(0,o.jsx)(Oo,{}),nav:e?(0,o.jsx)(Fo,{}):(0,o.jsx)(Uo,{})})}),fr=vr,br=s(87157),gr=s(36177),Tr=s(41378),Gn=function(){var n=(0,f.useSiteData)(),e=n.themeConfig,r=e;return r},xr=s(14582),wn=s.n(xr),Er=s(70761),yr={i8:"1.5.0"},Rr=function t(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],i=wn()(n),a;try{for(i.s();!(a=i.n()).done;){var m=a.value;if(m.key===e)return[].concat(Q()(r),[m.key]);if(m.children&&m.children.length>0){var d=t(m.children,e,[].concat(Q()(r),[m.key]));if(d)return d}}}catch(l){i.e(l)}finally{i.f()}return null},Sr=function(){var n,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=(0,f.useLocation)(),i=r.pathname,a=r.search,m=Gn(),d=m.sidebarGroupModePath,l=m.sidebarEnhance,_=l===void 0?{}:l,c=e.before,h=e.after,b=(0,f.useFullSidebarData)(),y=nt(b),p=(0,f.useLocale)(),k="/".concat((n=i.split("/"))===null||n===void 0?void 0:n[1]),O=y[k],j=(0,u.useMemo)(function(){return Object.values(b).reduce(function(U,C){var z=C.flatMap(function(x){return x.children}),w=wn()(z),R;try{for(w.s();!(R=w.n()).done;){var I=R.value;U[I.link]=I.title}}catch(x){w.e(x)}finally{w.f()}return U},{})},[b]),N=(0,u.useMemo)(function(){var U=Object.keys(_).find(function(C){return i.startsWith(C)});if(U)return _[U]},[i,_]),H=(0,u.useMemo)(function(){var U=function(I){return I&&_e()(I)==="object"&&"link"in I&&"title"in I},C=function(I){return I&&_e()(I)==="object"&&I.type==="group"},z=function(I){return I&&_e()(I)==="object"&&"children"in I};function w(R){return typeof R=="string"?{key:R,label:(0,o.jsxs)(f.Link,{to:"".concat(R).concat(a),children:[c,j[R],h]})}:C(R)?{type:"group",label:R.title,key:R.title,children:R.children.map(function(I){return w(I)})}:z(R)?{key:R.title,label:(0,o.jsx)("span",{style:{paddingLeft:10},children:R.title}),children:R.children.map(function(I){return w(I)})}:U(R)?{label:(0,o.jsx)(f.Link,{target:R.target,to:R.link,children:R.title}),key:R.link}:null}if(N)return N.map(function(R){return w(R)})},[h,c,N,j,a]),S=(0,u.useMemo)(function(){var U,C,z=new RegExp("".concat((U=p==null?void 0:p.suffix)!==null&&U!==void 0?U:"","$"),"g"),w=Q()(O!=null?O:[]),R=function(x){var be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return x&&be&&(0,o.jsx)(Er.Z,{bordered:!1,color:typeof x=="string"?"processing":x.color,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:(typeof x=="string"?x:x.title).replace("VERSION","v".concat(yr.i8))})};return(C=w==null?void 0:w.reduce(function(I,x){if(x!=null&&x.title){var be=d===!0?!0:(d!=null?d:[]).some(function(v){return i.startsWith(v)});if(be){var de;I.push({type:"group",label:x==null?void 0:x.title,order:x==null?void 0:x.order,key:x==null?void 0:x.title,children:(de=x.children)===null||de===void 0?void 0:de.map(function(v){var T,M;return{label:(0,o.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[c,(0,o.jsx)("span",{children:ve(v==null?void 0:v.title)},"english"),(0,o.jsx)("span",{className:"chinese",children:ve((T=v.frontmatter)===null||T===void 0?void 0:T.subtitle)},"chinese"),R((M=v.frontmatter)===null||M===void 0?void 0:M.tag,!c&&!h),h]}),key:v.link.replace(z,"")}})})}else{var le,ce,se={},ge=x.children.reduce(function(v,T){var M,J,ie=v,F=T==null||(M=T.frontmatter)===null||M===void 0?void 0:M.type,q=typeof F=="string"?F:(J=F==null?void 0:F.title)!==null&&J!==void 0?J:"default";if(ie[q]||(ie[q]=[]),se[q])F!=null&&F.order&&(se[q].order=F.order);else{var $;se[q]={title:q,order:($=F==null?void 0:F.order)!==null&&$!==void 0?$:-1}}return ie[q].push(T),ie},{}),Te=Object.keys(ge).sort(function(v,T){return se[v].order-se[T].order}).reduce(function(v,T){var M=v;return M[T]=ge[T],M},{}),ue=[];ue.push.apply(ue,Q()((le=(ce=Te.default)===null||ce===void 0?void 0:ce.map(function(v){var T;return{label:(0,o.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[c,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!c&&!h),h]}),key:v.link.replace(z,"")}}))!==null&&le!==void 0?le:[]));for(var xe=0,Ee=Object.entries(Te);xe<Ee.length;xe++){var me=P()(Ee[xe],2),he=me[0],ye=me[1];he!=="default"&&ue.push({type:"group",label:he,key:he,children:ye==null?void 0:ye.map(function(v){var T;return{label:(0,o.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[c,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!c&&!h),h]}),key:v.link.replace(z,"")}})})}I.push({label:x==null?void 0:x.title,key:x==null?void 0:x.title,order:x==null?void 0:x.order,children:ue})}}else{var pe=x.children||[];pe.every(function(v){var T;return v==null||(T=v.frontmatter)===null||T===void 0?void 0:T.date})&&pe.sort(function(v,T){var M,J;return(v==null||(M=v.frontmatter)===null||M===void 0?void 0:M.date)>(T==null||(J=T.frontmatter)===null||J===void 0?void 0:J.date)?-1:1}),I.push.apply(I,Q()(pe.map(function(v){var T;return{order:v==null?void 0:v.order,label:(0,o.jsxs)(f.Link,{style:{display:"flex",alignItems:"center"},to:"".concat(v.link).concat(a),children:[c,ve(v==null?void 0:v.title),R((T=v.frontmatter)===null||T===void 0?void 0:T.tag,!c&&!h),h]}),key:v.link.replace(z,"")}})))}return I.sort(function(v,T){return(v==null?void 0:v.order)<(T==null?void 0:T.order)?-1:1}),I},[]))!==null&&C!==void 0?C:[]},[O,d,i,a,c,h,p]),A=(0,u.useMemo)(function(){var U;return i.replace(new RegExp("".concat((U=p==null?void 0:p.suffix)!==null&&U!==void 0?U:"","$"),"g"),"")},[p,i]),L=(0,u.useMemo)(function(){return Rr(H||S,A)},[S,A,H]),G=L==null?void 0:L.slice(0,-1);return[H||S,A,G]},Fn,Vn,Wn,Ir=(0,B.kc)(function(t,n){var e=t.token,r=t.css,i=t.prefixCls,a=n.isSideBarGroupMode;return{asideContainer:r(Fn||(Fn=E()([`
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
      `])),i,i,i,i,i,i,e.colorBorder,i,i,i,e.colorFillSecondary,i,i,i,i,i,!a&&r(Vn||(Vn=E()([`
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
          `])),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),e.colorTextDisabled),mainMenu:r(Wn||(Wn=E()([`
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
      `])),e.headerHeight,e.headerHeight)}}),Or=function(){var n=(0,f.useLocation)(),e=n.pathname,r=Gn(),i=r.sidebarGroupModePath,a=(0,u.useMemo)(function(){return i===!0?!0:(i!=null?i:[]).some(function(O){return e.startsWith(O)})},[e,i]),m=Ir({isSideBarGroupMode:a}),d=m.styles,l=br.Z.useToken(),_=l.token,c=Sr(),h=P()(c,3),b=h[0],y=h[1],p=h[2],k=(0,o.jsx)(gr.ZP,{theme:{components:{Menu:{itemBg:_.colorBgLayout,darkItemBg:_.colorBgLayout}}},children:(0,o.jsx)(Tr.Z,{className:d.asideContainer,defaultOpenKeys:p,inlineIndent:30,items:b,mode:"inline",selectedKeys:[y]},p==null?void 0:p[0])});return(0,o.jsx)("div",{className:d.mainMenu,children:(0,o.jsx)("section",{className:"main-menu-inner",children:k})})},Nr=Or,Ar=s(61882),Kn=48,kr=(0,u.memo)(function(){var t=g(Ze,V()),n=Z(),e=n.mobile,r=(0,B.Fg)(),i=(0,u.useState)(Kn),a=P()(i,2),m=a[0],d=a[1],l=(0,f.useLocation)();if((0,u.useEffect)(function(){var _=document.querySelector("#api-header");_&&d(_.clientHeight+Kn)},[l.pathname,l.hash,l.search,t]),!((t==null?void 0:t.length)<1))return(0,o.jsxs)(o.Fragment,{children:[!e&&(0,o.jsx)("div",{style:{height:m}}),(0,o.jsx)(Ar.Z,{getContainer:function(){return document.body},headerHeight:r.headerHeight,isMobile:e,items:t,tocWidth:r.tocWidth})]})}),Dr=kr,Hr=(0,u.memo)(function(){var t=(0,f.useIntl)(),n=(0,f.useLocation)(),e=n.hash,r=(0,B.Fg)(),i=Z(),a=i.mobile,m=i.laptop,d=g(function(S){var A=S.location.pathname==="/changelog",L=Be(S),G;return L||S.location.pathname==="/"?G="home":A?G="changelog":G="docs",{loading:S.siteData.loading,noToc:Ze(S).length===0,page:G,siteTitle:ht(S),themeConfig:S.siteData.themeConfig}},ne.X),l=d.loading,_=d.page,c=d.siteTitle,h=d.noToc,b=d.themeConfig,y=g(function(S){return S.routeMeta.frontmatter},V()),p=g(io),k=_!=="docs"||a||y.sidebar===!1||(p==null?void 0:p.sider)===!1,O=y.toc===!1||h,j=a?O:!m||O,N=(0,u.useCallback)(function(){var S=(p==null?void 0:p.title)||y.title,A=(p==null?void 0:p.description)||y.description||b.description,L=(p==null?void 0:p.keywords)||y.keywords||b.keywords;return(0,o.jsxs)(f.Helmet,{children:[(0,o.jsx)("html",{lang:t.locale.replace(/-.+$/,"")}),S&&(0,o.jsx)("meta",{content:S,property:"og:title"}),A&&(0,o.jsx)("meta",{content:A,name:"description"}),A&&(0,o.jsx)("meta",{content:A,property:"og:description"}),L&&(0,o.jsx)("meta",{content:L.join(","),name:"keywords"}),L&&(0,o.jsx)("meta",{content:L.join(","),property:"og:keywords"}),!S||_==="home"?(0,o.jsx)("title",{children:c}):(0,o.jsxs)("title",{children:[S," - ",c]})]})},[p==null?void 0:p.description,p==null?void 0:p.keywords,p==null?void 0:p.title,y.description,y.keywords,y.title,t.locale,_,c,b.description,b.keywords]);(0,u.useEffect)(function(){var S=e.replace("#","");S&&setTimeout(function(){var A=document.querySelector("#".concat(decodeURIComponent(S)));A&&(A.scrollIntoView(),window.scrollBy({top:-80}))},1)},[l,e]),(0,u.useEffect)(function(){document.body.scrollTo(0,0)},[c]);var H=(0,f.useOutlet)();return(p==null?void 0:p.header)===!1&&(p==null?void 0:p.sider)===!1&&(p==null?void 0:p.footer)===!1?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),H]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N,{}),(0,o.jsxs)(St.ZP,{asideWidth:r.sidebarWidth,footer:(p==null?void 0:p.footer)!==!1&&(0,o.jsx)(xo,{}),header:(p==null?void 0:p.header)!==!1&&(0,o.jsx)(fr,{}),headerHeight:a&&_!=="home"?r.headerHeight+36:r.headerHeight,sidebar:k?void 0:(0,o.jsx)(Nr,{}),toc:j?void 0:(0,o.jsx)(Dr,{}),tocWidth:j?0:r.tocWidth,children:[p&&H,!p&&_==="home"&&(0,o.jsx)(ho,{}),!p&&_==="changelog"&&(0,o.jsx)(Ft,{}),!p&&_==="docs"&&(0,o.jsx)(qt,{})]},k?"full":"no-sidebar")]})}),Ur=Hr,jr=(0,u.memo)(function(){var t=(0,Ce.f)(function(e){return e.themeMode},ne.X),n=g(Et.token);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ut,{}),(0,o.jsxs)(De.Z,{customToken:function(r){return Object.assign({},Rt(r),n)},themeMode:t,children:[(0,o.jsx)(mt,{}),(0,o.jsx)(Ur,{})]})]})}),Cr=jr},37620:function(Xn,Se,s){s.d(Se,{f:function(){return ne}});var De=s(32089),u=s(9676),ne=(0,u.F)()((0,De.tJ)(function(){return{themeMode:"light"}},{name:"ANTD_STYLE_DOC_STORE"}))}}]);
