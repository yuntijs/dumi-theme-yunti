"use strict";(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[1009],{75487:function(M,m,e){e.r(m);var a=e(48073),n=e(92379),E=e(55203),h=e(87516),D=function(){var p=(0,a.useParams)(),t=p.id,o=(0,a.useDemo)(t),O=(0,E.m)({id:t,component:o.component,renderOpts:o.renderOpts}),P=O.canvasRef,u=o||{},v=u.component,d=u.renderOpts,r=(0,a.useLiveDemo)(t),s=r.node,l=r.setSource,i=r.error,_=r.loading,R=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var c=function(f){f.data.type==="dumi.liveDemo.setSource"&&l(f.data.value)};return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}},[l]),(0,n.useEffect)(function(){!_&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,_]),R};m.default=D}}]);
