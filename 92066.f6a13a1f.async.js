!(function(){"use strict";var Ie=(Nt,at,D)=>new Promise((I,M)=>{var et=R=>{try{N(D.next(R))}catch(k){M(k)}},s=R=>{try{N(D.throw(R))}catch(k){M(k)}},N=R=>R.done?I(R.value):Promise.resolve(R.value).then(et,s);N((D=D.apply(Nt,at)).next())});(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[92066],{43179:function(Nt,at,D){D.d(at,{j:function(){return s},q:function(){return et}});var I=D(97012),M=D(34057),et=(0,I.eW)((k,x)=>{let v;return x==="sandbox"&&(v=(0,M.Ys)("#i"+k)),(x==="sandbox"?(0,M.Ys)(v.nodes()[0].contentDocument.body):(0,M.Ys)("body")).select(`[id="${k}"]`)},"getDiagramElement"),s=(0,I.eW)((k,x,v,W)=>{k.attr("class",v);const{width:V,height:pt,x:$t,y:H}=N(k,x);(0,I.v2)(k,pt,V,W);const nt=R($t,H,V,pt,x);k.attr("viewBox",nt),I.cM.debug(`viewBox configured: ${nt} with padding: ${x}`)},"setupViewPortForSVG"),N=(0,I.eW)((k,x)=>{var W;const v=((W=k.node())==null?void 0:W.getBBox())||{width:0,height:0,x:0,y:0};return{width:v.width+x*2,height:v.height+x*2,x:v.x,y:v.y}},"calculateDimensionsWithPadding"),R=(0,I.eW)((k,x,v,W,V)=>`${k-V} ${x-V} ${v} ${W}`,"createViewBox")},92066:function(Nt,at,D){D.d(at,{Ee:function(){return Es},J8:function(){return R},_$:function(){return Je},bH:function(){return _s}});var I=D(43179),M=D(49785),et=D(61830),s=D(97012),N=function(){var t=(0,s.eW)(function(j,o,u,n){for(u=u||{},n=j.length;n--;u[j[n]]=o);return u},"o"),e=[1,2],c=[1,3],a=[1,4],d=[2,4],i=[1,9],p=[1,11],_=[1,16],l=[1,17],E=[1,18],b=[1,19],A=[1,32],K=[1,20],X=[1,21],$=[1,22],f=[1,23],w=[1,24],P=[1,26],J=[1,27],Z=[1,28],F=[1,29],U=[1,30],mt=[1,31],Dt=[1,34],xt=[1,35],Ct=[1,36],At=[1,37],ht=[1,33],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Lt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Ae=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Ht={trace:(0,s.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,s.eW)(function(o,u,n,y,g,r,dt){var h=r.length-1;switch(g){case 3:return y.setRootDoc(r[h]),r[h];break;case 4:this.$=[];break;case 5:r[h]!="nl"&&(r[h-1].push(r[h]),this.$=r[h-1]);break;case 6:case 7:this.$=r[h];break;case 8:this.$="nl";break;case 12:this.$=r[h];break;case 13:const It=r[h-1];It.description=y.trimColon(r[h]),this.$=It;break;case 14:this.$={stmt:"relation",state1:r[h-2],state2:r[h]};break;case 15:const Rt=y.trimColon(r[h]);this.$={stmt:"relation",state1:r[h-3],state2:r[h-1],description:Rt};break;case 19:this.$={stmt:"state",id:r[h-3],type:"default",description:"",doc:r[h-1]};break;case 20:var Q=r[h],rt=r[h-2].trim();if(r[h].match(":")){var ft=r[h].split(":");Q=ft[0],rt=[rt,ft[1]]}this.$={stmt:"state",id:Q,type:"default",description:rt};break;case 21:this.$={stmt:"state",id:r[h-3],type:"default",description:r[h-5],doc:r[h-1]};break;case 22:this.$={stmt:"state",id:r[h],type:"fork"};break;case 23:this.$={stmt:"state",id:r[h],type:"join"};break;case 24:this.$={stmt:"state",id:r[h],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[h-1].trim(),note:{position:r[h-2].trim(),text:r[h].trim()}};break;case 29:this.$=r[h].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=r[h].trim(),y.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[h-1].trim(),classes:r[h].trim()};break;case 34:this.$={stmt:"style",id:r[h-1].trim(),styleClass:r[h].trim()};break;case 35:this.$={stmt:"applyClass",id:r[h-1].trim(),styleClass:r[h].trim()};break;case 36:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[h].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:r[h-2].trim(),classes:[r[h].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:r[h-2].trim(),classes:[r[h].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:c,6:a},{1:[3]},{3:5,4:e,5:c,6:a},{3:6,4:e,5:c,6:a},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],d,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:_,17:l,19:E,22:b,24:A,25:K,26:X,27:$,28:f,29:w,32:25,33:P,35:J,37:Z,38:F,42:U,45:mt,48:Dt,49:xt,50:Ct,51:At,54:ht},t(S,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:_,17:l,19:E,22:b,24:A,25:K,26:X,27:$,28:f,29:w,32:25,33:P,35:J,37:Z,38:F,42:U,45:mt,48:Dt,49:xt,50:Ct,51:At,54:ht},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,39],15:[1,40]}),t(S,[2,16]),{18:[1,41]},t(S,[2,18],{20:[1,42]}),{23:[1,43]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(S,[2,28]),{34:[1,48]},{36:[1,49]},t(S,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(Lt,[2,42],{55:[1,54]}),t(Lt,[2,43],{55:[1,55]}),t(S,[2,36]),t(S,[2,37]),t(S,[2,38]),t(S,[2,39]),t(S,[2,6]),t(S,[2,13]),{13:56,24:A,54:ht},t(S,[2,17]),t(Ae,d,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(S,[2,29]),t(S,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(S,[2,14],{14:[1,67]}),{4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:_,17:l,19:E,21:[1,68],22:b,24:A,25:K,26:X,27:$,28:f,29:w,32:25,33:P,35:J,37:Z,38:F,42:U,45:mt,48:Dt,49:xt,50:Ct,51:At,54:ht},t(S,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(S,[2,32]),t(S,[2,33]),t(S,[2,34]),t(S,[2,35]),t(Lt,[2,44]),t(Lt,[2,45]),t(S,[2,15]),t(S,[2,19]),t(Ae,d,{7:72}),t(S,[2,26]),t(S,[2,27]),{4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:_,17:l,19:E,21:[1,73],22:b,24:A,25:K,26:X,27:$,28:f,29:w,32:25,33:P,35:J,37:Z,38:F,42:U,45:mt,48:Dt,49:xt,50:Ct,51:At,54:ht},t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:(0,s.eW)(function(o,u){if(u.recoverable)this.trace(o);else{var n=new Error(o);throw n.hash=u,n}},"parseError"),parse:(0,s.eW)(function(o){var u=this,n=[0],y=[],g=[null],r=[],dt=this.table,h="",Q=0,rt=0,ft=0,It=2,Rt=1,Ts=r.slice.call(arguments,1),T=Object.create(this.lexer),q={yy:{}};for(var zt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,zt)&&(q.yy[zt]=this.yy[zt]);T.setInput(o,q.yy),q.yy.lexer=T,q.yy.parser=this,typeof T.yylloc=="undefined"&&(T.yylloc={});var Kt=T.yylloc;r.push(Kt);var ks=T.options&&T.options.ranges;typeof q.yy.parseError=="function"?this.parseError=q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function vs(L){n.length=n.length-2*L,g.length=g.length-L,r.length=r.length-L}(0,s.eW)(vs,"popStack");function Le(){var L;return L=y.pop()||T.lex()||Rt,typeof L!="number"&&(L instanceof Array&&(y=L,L=y.pop()),L=u.symbols_[L]||L),L}(0,s.eW)(Le,"lex");for(var m,Xt,tt,O,ms,Jt,it={},Wt,B,Oe,wt;;){if(tt=n[n.length-1],this.defaultActions[tt]?O=this.defaultActions[tt]:((m===null||typeof m=="undefined")&&(m=Le()),O=dt[tt]&&dt[tt][m]),typeof O=="undefined"||!O.length||!O[0]){var Zt="";wt=[];for(Wt in dt[tt])this.terminals_[Wt]&&Wt>It&&wt.push("'"+this.terminals_[Wt]+"'");T.showPosition?Zt="Parse error on line "+(Q+1)+`:
`+T.showPosition()+`
Expecting `+wt.join(", ")+", got '"+(this.terminals_[m]||m)+"'":Zt="Parse error on line "+(Q+1)+": Unexpected "+(m==Rt?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(Zt,{text:T.match,token:this.terminals_[m]||m,line:T.yylineno,loc:Kt,expected:wt})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+m);switch(O[0]){case 1:n.push(m),g.push(T.yytext),r.push(T.yylloc),n.push(O[1]),m=null,Xt?(m=Xt,Xt=null):(rt=T.yyleng,h=T.yytext,Q=T.yylineno,Kt=T.yylloc,ft>0&&ft--);break;case 2:if(B=this.productions_[O[1]][1],it.$=g[g.length-B],it._$={first_line:r[r.length-(B||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(B||1)].first_column,last_column:r[r.length-1].last_column},ks&&(it._$.range=[r[r.length-(B||1)].range[0],r[r.length-1].range[1]]),Jt=this.performAction.apply(it,[h,rt,Q,q.yy,O[1],g,r].concat(Ts)),typeof Jt!="undefined")return Jt;B&&(n=n.slice(0,-1*B*2),g=g.slice(0,-1*B),r=r.slice(0,-1*B)),n.push(this.productions_[O[1]][0]),g.push(it.$),r.push(it._$),Oe=dt[n[n.length-2]][n[n.length-1]],n.push(Oe);break;case 3:return!0}}return!0},"parse")},bs=function(){var j={EOF:1,parseError:(0,s.eW)(function(u,n){if(this.yy.parser)this.yy.parser.parseError(u,n);else throw new Error(u)},"parseError"),setInput:(0,s.eW)(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,s.eW)(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:(0,s.eW)(function(o){var u=o.length,n=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===y.length?this.yylloc.first_column:0)+y[y.length-n.length].length-n[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:(0,s.eW)(function(){return this._more=!0,this},"more"),reject:(0,s.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,s.eW)(function(o){this.unput(this.match.slice(o))},"less"),pastInput:(0,s.eW)(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,s.eW)(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,s.eW)(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:(0,s.eW)(function(o,u){var n,y,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),y=o[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],n=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in g)this[r]=g[r];return!1}return!1},"test_match"),next:(0,s.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,n,y;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),r=0;r<g.length;r++)if(n=this._input.match(this.rules[g[r]]),n&&(!u||n[0].length>u[0].length)){if(u=n,y=r,this.options.backtrack_lexer){if(o=this.test_match(n,g[r]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,g[y]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,s.eW)(function(){var u=this.next();return u||this.lex()},"lex"),begin:(0,s.eW)(function(u){this.conditionStack.push(u)},"begin"),popState:(0,s.eW)(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,s.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,s.eW)(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:(0,s.eW)(function(u){this.begin(u)},"pushState"),stateStackSize:(0,s.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,s.eW)(function(u,n,y,g){var r=g;switch(y){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;break;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;break;case 16:return this.popState(),"acc_title_value";break;case 17:return this.begin("acc_descr"),35;break;case 18:return this.popState(),"acc_descr_value";break;case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;break;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 24:return this.popState(),this.pushState("CLASSDEFID"),39;break;case 25:return this.popState(),40;break;case 26:return this.pushState("CLASS"),45;break;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;break;case 28:return this.popState(),47;break;case 29:return this.pushState("STYLE"),42;break;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;break;case 31:return this.popState(),44;break;case 32:return this.pushState("SCALE"),17;break;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 37:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 38:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 39:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 40:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 41:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";break;case 48:return this.popState(),"ID";break;case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;break;case 54:break;case 55:return this.popState(),21;break;case 56:break;case 57:return this.begin("NOTE"),29;break;case 58:return this.popState(),this.pushState("NOTE_ID"),56;break;case 59:return this.popState(),this.pushState("NOTE_ID"),57;break;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";break;case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 66:return this.popState(),n.yytext=n.yytext.substr(2).trim(),31;break;case 67:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),31;break;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return n.yytext=n.yytext.trim(),14;break;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return j}();Ht.lexer=bs;function Ot(){this.yy={}}return(0,s.eW)(Ot,"Parser"),Ot.prototype=Ht,Ht.Parser=Ot,new Ot}();N.parser=N;var R=N,k="LR",x="TB",v="state",W="relation",V="classDef",pt="style",$t="applyClass",H="default",nt="divider",Qt="fill:none",qt="fill: #333",te="c",ee="text",se="normal",Pt="rect",Bt="rectWithTitle",Re="stateStart",We="stateEnd",re="divider",ie="roundedWithTitle",we="note",Ne="noteGroup",lt="statediagram",$e="state",Pe=`${lt}-${$e}`,ae="transition",Be="note",Me="note-edge",Ve=`${ae} ${Me}`,Ye=`${lt}-${Be}`,Ge="cluster",Fe=`${lt}-${Ge}`,Ue="cluster-alt",je=`${lt}-${Ue}`,ne="parent",le="note",He="state",Mt="----",ze=`${Mt}${le}`,oe=`${Mt}${ne}`,ce=(0,s.eW)((t,e=x)=>{if(!t.doc)return e;let c=e;for(const a of t.doc)a.stmt==="dir"&&(c=a.value);return c},"getDir"),Ke=(0,s.eW)(function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},"getClasses"),Xe=(0,s.eW)(function(t,e,c,a){return Ie(this,null,function*(){var b,A;s.cM.info("REF0:"),s.cM.info("Drawing state diagram (v2)",e);const{securityLevel:d,state:i,layout:p}=(0,s.nV)();a.db.extract(a.db.getRootDocV2());const _=a.db.getData(),l=(0,I.q)(e,d);_.type=a.type,_.layoutAlgorithm=p,_.nodeSpacing=(i==null?void 0:i.nodeSpacing)||50,_.rankSpacing=(i==null?void 0:i.rankSpacing)||50,_.markers=["barb"],_.diagramId=e,yield(0,M.sY)(_,l);const E=8;et.w8.insertTitle(l,"statediagramTitleText",(b=i==null?void 0:i.titleTopMargin)!=null?b:25,a.db.getDiagramTitle()),(0,I.j)(l,E,lt,(A=i==null?void 0:i.useMaxWidth)!=null?A:!0)})},"draw"),Je={getClasses:Ke,draw:Xe,getDir:ce},St=new Map,Y=0;function yt(t="",e=0,c="",a=Mt){const d=c!==null&&c.length>0?`${a}${c}`:"";return`${He}-${t}${d}-${e}`}(0,s.eW)(yt,"stateDomId");var Ze=(0,s.eW)((t,e,c,a,d,i,p,_)=>{s.cM.trace("items",e),e.forEach(l=>{switch(l.stmt){case v:ct(t,l,c,a,d,i,p,_);break;case H:ct(t,l,c,a,d,i,p,_);break;case W:{ct(t,l.state1,c,a,d,i,p,_),ct(t,l.state2,c,a,d,i,p,_);const E={id:"edge"+Y,start:l.state1.id,end:l.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Qt,labelStyle:"",label:s.SY.sanitizeText(l.description,(0,s.nV)()),arrowheadStyle:qt,labelpos:te,labelType:ee,thickness:se,classes:ae,look:p};d.push(E),Y++}break}})},"setupDoc"),ue=(0,s.eW)((t,e=x)=>{let c=e;if(t.doc)for(const a of t.doc)a.stmt==="dir"&&(c=a.value);return c},"getDir");function ot(t,e,c){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(d=>{if(c.get(d)){const i=c.get(d);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}}));const a=t.find(d=>d.id===e.id);a?Object.assign(a,e):t.push(e)}(0,s.eW)(ot,"insertOrUpdateNode");function he(t){var e,c;return(c=(e=t==null?void 0:t.classes)==null?void 0:e.join(" "))!=null?c:""}(0,s.eW)(he,"getClassesFromDbInfo");function de(t){var e;return(e=t==null?void 0:t.styles)!=null?e:[]}(0,s.eW)(de,"getStylesFromDbInfo");var ct=(0,s.eW)((t,e,c,a,d,i,p,_)=>{var K,X;const l=e.id,E=c.get(l),b=he(E),A=de(E);if(s.cM.info("dataFetcher parsedItem",e,E,A),l!=="root"){let $=Pt;e.start===!0?$=Re:e.start===!1&&($=We),e.type!==H&&($=e.type),St.get(l)||St.set(l,{id:l,shape:$,description:s.SY.sanitizeText(l,(0,s.nV)()),cssClasses:`${b} ${Pe}`,cssStyles:A});const f=St.get(l);e.description&&(Array.isArray(f.description)?(f.shape=Bt,f.description.push(e.description)):((K=f.description)==null?void 0:K.length)>0?(f.shape=Bt,f.description===l?f.description=[e.description]:f.description=[f.description,e.description]):(f.shape=Pt,f.description=e.description),f.description=s.SY.sanitizeTextOrArray(f.description,(0,s.nV)())),((X=f.description)==null?void 0:X.length)===1&&f.shape===Bt&&(f.type==="group"?f.shape=ie:f.shape=Pt),!f.type&&e.doc&&(s.cM.info("Setting cluster for XCX",l,ue(e)),f.type="group",f.isGroup=!0,f.dir=ue(e),f.shape=e.type===nt?re:ie,f.cssClasses=`${f.cssClasses} ${Fe} ${i?je:""}`);const w={labelStyle:"",shape:f.shape,label:f.description,cssClasses:f.cssClasses,cssCompiledStyles:[],cssStyles:f.cssStyles,id:l,dir:f.dir,domId:yt(l,Y),type:f.type,isGroup:f.type==="group",padding:8,rx:10,ry:10,look:p};if(w.shape===re&&(w.label=""),t&&t.id!=="root"&&(s.cM.trace("Setting node ",l," to be child of its parent ",t.id),w.parentId=t.id),w.centerLabel=!0,e.note){const P={labelStyle:"",shape:we,label:e.note.text,cssClasses:Ye,cssStyles:[],cssCompilesStyles:[],id:l+ze+"-"+Y,domId:yt(l,Y,le),type:f.type,isGroup:f.type==="group",padding:(0,s.nV)().flowchart.padding,look:p,position:e.note.position},J=l+oe,Z={labelStyle:"",shape:Ne,label:e.note.text,cssClasses:f.cssClasses,cssStyles:[],id:l+oe,domId:yt(l,Y,ne),type:"group",isGroup:!0,padding:16,look:p,position:e.note.position};Y++,Z.id=J,P.parentId=J,ot(a,Z,_),ot(a,P,_),ot(a,w,_);let F=l,U=P.id;e.note.position==="left of"&&(F=P.id,U=l),d.push({id:F+"-"+U,start:F,end:U,arrowhead:"none",arrowTypeEnd:"",style:Qt,labelStyle:"",classes:Ve,arrowheadStyle:qt,labelpos:te,labelType:ee,thickness:se,look:p})}else ot(a,w,_)}e.doc&&(s.cM.trace("Adding nodes children "),Ze(e,e.doc,c,a,d,!i,p,_))},"dataFetcher"),Qe=(0,s.eW)(()=>{St.clear(),Y=0},"reset"),Vt="[*]",fe="start",pe=Vt,Se="end",ye="color",_e="fill",qe="bgFill",ts=",";function Yt(){return new Map}(0,s.eW)(Yt,"newClassesList");var _t=[],Gt=[],ge=k,gt=[],st=Yt(),Ee=(0,s.eW)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),Et={root:Ee()},C=Et.root,ut=0,be=0,es={LINE:0,DOTTED_LINE:1},ss={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},bt=(0,s.eW)(t=>JSON.parse(JSON.stringify(t)),"clone"),rs=(0,s.eW)(t=>{s.cM.info("Setting root doc",t),gt=t},"setRootDoc"),is=(0,s.eW)(()=>gt,"getRootDoc"),Tt=(0,s.eW)((t,e,c)=>{if(e.stmt===W)Tt(t,e.state1,!0),Tt(t,e.state2,!1);else if(e.stmt===v&&(e.id==="[*]"?(e.id=c?t.id+"_start":t.id+"_end",e.start=c):e.id=e.id.trim()),e.doc){const a=[];let d=[],i;for(i=0;i<e.doc.length;i++)if(e.doc[i].type===nt){const p=bt(e.doc[i]);p.doc=bt(d),a.push(p),d=[]}else d.push(e.doc[i]);if(a.length>0&&d.length>0){const p={stmt:v,id:(0,et.Ox)(),type:"divider",doc:bt(d)};a.push(bt(p)),e.doc=a}e.doc.forEach(p=>Tt(e,p,!0))}},"docTranslator"),Ft=(0,s.eW)(()=>(Tt({id:"root"},{id:"root",doc:gt},!0),{id:"root",doc:gt}),"getRootDocV2"),as=(0,s.eW)(t=>{let e;t.doc?e=t.doc:e=t,s.cM.info(e),Te(!0),s.cM.info("Extract initial document:",e),e.forEach(i=>{switch(s.cM.warn("Statement",i.stmt),i.stmt){case v:G(i.id.trim(),i.type,i.doc,i.description,i.note,i.classes,i.styles,i.textStyles);break;case W:xe(i.state1,i.state2,i.description);break;case V:Ce(i.id.trim(),i.classes);break;case pt:{const p=i.id.trim().split(","),_=i.styleClass.split(",");p.forEach(l=>{let E=z(l);if(E===void 0){const b=l.trim();G(b),E=z(b)}E.styles=_.map(b=>{var A;return(A=b.replace(/;/g,""))==null?void 0:A.trim()})})}break;case $t:jt(i.id.trim(),i.styleClass);break}});const c=ke(),d=(0,s.nV)().look;Qe(),ct(void 0,Ft(),c,_t,Gt,!0,d,st),_t.forEach(i=>{if(Array.isArray(i.label)){if(i.description=i.label.slice(1),i.isGroup&&i.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+i.id+"]");i.label=i.label[0]}})},"extract"),G=(0,s.eW)(function(t,e=H,c=null,a=null,d=null,i=null,p=null,_=null){const l=t==null?void 0:t.trim();if(C.states.has(l)?(C.states.get(l).doc||(C.states.get(l).doc=c),C.states.get(l).type||(C.states.get(l).type=e)):(s.cM.info("Adding state ",l,a),C.states.set(l,{id:l,descriptions:[],type:e,doc:c,note:d,classes:[],styles:[],textStyles:[]})),a&&(s.cM.info("Setting state description",l,a),typeof a=="string"&&Ut(l,a.trim()),typeof a=="object"&&a.forEach(E=>Ut(l,E.trim()))),d){const E=C.states.get(l);E.note=d,E.note.text=s.SY.sanitizeText(E.note.text,(0,s.nV)())}i&&(s.cM.info("Setting state classes",l,i),(typeof i=="string"?[i]:i).forEach(b=>jt(l,b.trim()))),p&&(s.cM.info("Setting state styles",l,p),(typeof p=="string"?[p]:p).forEach(b=>hs(l,b.trim()))),_&&(s.cM.info("Setting state styles",l,p),(typeof _=="string"?[_]:_).forEach(b=>ds(l,b.trim())))},"addState"),Te=(0,s.eW)(function(t){_t=[],Gt=[],Et={root:Ee()},C=Et.root,ut=0,st=Yt(),t||(0,s.ZH)()},"clear"),z=(0,s.eW)(function(t){return C.states.get(t)},"getState"),ke=(0,s.eW)(function(){return C.states},"getStates"),ns=(0,s.eW)(function(){s.cM.info("Documents = ",Et)},"logDocuments"),ls=(0,s.eW)(function(){return C.relations},"getRelations");function kt(t=""){let e=t;return t===Vt&&(ut++,e=`${fe}${ut}`),e}(0,s.eW)(kt,"startIdIfNeeded");function vt(t="",e=H){return t===Vt?fe:e}(0,s.eW)(vt,"startTypeIfNeeded");function ve(t=""){let e=t;return t===pe&&(ut++,e=`${Se}${ut}`),e}(0,s.eW)(ve,"endIdIfNeeded");function me(t="",e=H){return t===pe?Se:e}(0,s.eW)(me,"endTypeIfNeeded");function De(t,e,c){let a=kt(t.id.trim()),d=vt(t.id.trim(),t.type),i=kt(e.id.trim()),p=vt(e.id.trim(),e.type);G(a,d,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),G(i,p,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),C.relations.push({id1:a,id2:i,relationTitle:s.SY.sanitizeText(c,(0,s.nV)())})}(0,s.eW)(De,"addRelationObjs");var xe=(0,s.eW)(function(t,e,c){if(typeof t=="object")De(t,e,c);else{const a=kt(t.trim()),d=vt(t),i=ve(e.trim()),p=me(e);G(a,d),G(i,p),C.relations.push({id1:a,id2:i,title:s.SY.sanitizeText(c,(0,s.nV)())})}},"addRelation"),Ut=(0,s.eW)(function(t,e){const c=C.states.get(t),a=e.startsWith(":")?e.replace(":","").trim():e;c.descriptions.push(s.SY.sanitizeText(a,(0,s.nV)()))},"addDescription"),os=(0,s.eW)(function(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()},"cleanupLabel"),cs=(0,s.eW)(()=>(be++,"divider-id-"+be),"getDividerId"),Ce=(0,s.eW)(function(t,e=""){st.has(t)||st.set(t,{id:t,styles:[],textStyles:[]});const c=st.get(t);e!=null&&e.split(ts).forEach(a=>{const d=a.replace(/([^;]*);/,"$1").trim();if(RegExp(ye).exec(a)){const p=d.replace(_e,qe).replace(ye,_e);c.textStyles.push(p)}c.styles.push(d)})},"addStyleClass"),us=(0,s.eW)(function(){return st},"getClasses"),jt=(0,s.eW)(function(t,e){t.split(",").forEach(function(c){let a=z(c);if(a===void 0){const d=c.trim();G(d),a=z(d)}a.classes.push(e)})},"setCssClass"),hs=(0,s.eW)(function(t,e){const c=z(t);c!==void 0&&c.styles.push(e)},"setStyle"),ds=(0,s.eW)(function(t,e){const c=z(t);c!==void 0&&c.textStyles.push(e)},"setTextStyle"),fs=(0,s.eW)(()=>ge,"getDirection"),ps=(0,s.eW)(t=>{ge=t},"setDirection"),Ss=(0,s.eW)(t=>t&&t[0]===":"?t.substr(1).trim():t.trim(),"trimColon"),ys=(0,s.eW)(()=>{const t=(0,s.nV)();return{nodes:_t,edges:Gt,other:{},config:t,direction:ce(Ft())}},"getData"),_s={getConfig:(0,s.eW)(()=>(0,s.nV)().state,"getConfig"),getData:ys,addState:G,clear:Te,getState:z,getStates:ke,getRelations:ls,getClasses:us,getDirection:fs,addRelation:xe,getDividerId:cs,setDirection:ps,cleanupLabel:os,lineType:es,relationType:ss,logDocuments:ns,getRootDoc:is,setRootDoc:rs,getRootDocV2:Ft,extract:as,trimColon:Ss,getAccTitle:s.eu,setAccTitle:s.GN,getAccDescription:s.Mx,setAccDescription:s.U$,addStyleClass:Ce,setCssClass:jt,addDescription:Ut,setDiagramTitle:s.g2,getDiagramTitle:s.Kr},gs=(0,s.eW)(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Es=gs}}]);
}());