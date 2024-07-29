(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[9554],{56142:function(u,t,n){var s={"./ar.json":[42629,2629],"./be.json":[97130,7130],"./cs.json":[19151,9151],"./de.json":[1490,1490],"./en.json":[52729,2729],"./es.json":[74738,4738],"./fa.json":[74117,4117],"./fi.json":[77722,7722],"./fr.json":[21633,1633],"./hi.json":[34125,4125],"./it.json":[46612,6612],"./ja.json":[36042,6042],"./ko.json":[4019,4019],"./nl.json":[34094,4094],"./pl.json":[38127,8127],"./pt.json":[55982,5982],"./ru.json":[88616,8616],"./sa.json":[58260,8260],"./tr.json":[42772,2772],"./uk.json":[98349,8349],"./vi.json":[47627,7627],"./zh.json":[18061,8061]};function o(m){if(!n.o(s,m))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+m+"'");throw a.code="MODULE_NOT_FOUND",a});var i=s[m],r=i[0];return n.e(i[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(s)},o.id=56142,u.exports=o},87802:function(u,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return f}});var s=n(29008),o=n.n(s),m=n(70958),i=n.n(m),r=n(92379),a=n(24780),f={"src-example-demo-demos":{component:r.memo(r.lazy(function(){return Promise.all([n.e(8001),n.e(1130),n.e(2433)]).then(n.bind(n,65063))})),asset:{type:"BLOCK",id:"src-example-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(25639).Z},"@lobehub/ui":{type:"NPM",value:"1.146.9"},leva:{type:"NPM",value:"0.9.35"},"lucide-react":{type:"NPM",value:"0.414.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(7363),leva:n(75521),"lucide-react":n(43493)},renderOpts:{compile:function(){var d=i()(o()().mark(function p(){var l,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(9134).then(n.bind(n,59134));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,h));case 3:case"end":return e.stop()}},p)}));function c(){return d.apply(this,arguments)}return c}()}},"src-example-demo-customsize":{component:r.memo(r.lazy(function(){return Promise.all([n.e(8001),n.e(1130),n.e(2433)]).then(n.bind(n,63724))})),asset:{type:"BLOCK",id:"src-example-demo-customsize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(63748).Z},"@lobehub/ui":{type:"NPM",value:"1.146.9"},"lucide-react":{type:"NPM",value:"0.414.0"}},entry:"index.tsx"},context:{"@lobehub/ui":n(7363),"lucide-react":n(43493)},renderOpts:{compile:function(){var d=i()(o()().mark(function p(){var l,h=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(9134).then(n.bind(n,59134));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,h));case 3:case"end":return e.stop()}},p)}));function c(){return d.apply(this,arguments)}return c}()}}}},40456:function(u,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return o}});var s=n(24780);const o=[]},63748:function(u,t){"use strict";t.Z=`import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Settings } from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const size: ActionIconProps['size'] | any = useControls(
    {
      blockSize: {
        max: 100,
        min: 8,
        step: 4,
        value: 40,
      },
      borderRadius: {
        max: 50,
        min: 2,
        step: 2,
        value: 10,
      },
      fontSize: {
        max: 100,
        min: 8,
        step: 4,
        value: 28,
      },
      strokeWidth: {
        max: 2,
        min: 1,
        step: 0.5,
        value: 2,
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon active icon={Settings} size={size} />
    </StoryBook>
  );
};
`},25639:function(u,t){"use strict";t.Z=`import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { folder } from 'leva';
import * as LucideIcon from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      active: false,
      glass: false,
      icon: {
        options: LucideIcon,
        value: LucideIcon.Settings,
      },
      size: {
        options: ['large', 'normal', 'small'],
        value: 'large',
      },
      tooltip: folder({
        arrow: false,
        loading: false,
        placement: {
          options: [
            'top',
            'left',
            'right',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
            'leftTop',
            'leftBottom',
            'rightTop',
            'rightBottom',
          ],
          value: 'top',
        },
        spotlight: false,
        title: '',
      }),
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon {...control} />
    </StoryBook>
  );
};
`}}]);
