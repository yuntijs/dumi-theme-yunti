(self.webpackChunkdumi_theme_yunti_example=self.webpackChunkdumi_theme_yunti_example||[]).push([[9554],{56142:function(a,e,n){var p={"./ar.json":[42629,2629],"./be.json":[97130,7130],"./cs.json":[19151,9151],"./de.json":[1490,1490],"./en.json":[52729,2729],"./es.json":[74738,4738],"./fa.json":[74117,4117],"./fi.json":[77722,7722],"./fr.json":[21633,1633],"./hi.json":[34125,4125],"./it.json":[46612,6612],"./ja.json":[36042,6042],"./ko.json":[4019,4019],"./nl.json":[34094,4094],"./pl.json":[38127,8127],"./pt.json":[55982,5982],"./ru.json":[88616,8616],"./sa.json":[58260,8260],"./tr.json":[42772,2772],"./uk.json":[98349,8349],"./vi.json":[47627,7627],"./zh.json":[18061,8061]};function o(c){if(!n.o(p,c))return Promise.resolve().then(function(){var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f});var l=p[c],r=l[0];return n.e(l[1]).then(function(){return n.t(r,19)})}o.keys=function(){return Object.keys(p)},o.id=56142,a.exports=o},87802:function(a,e,n){"use strict";n.r(e),n.d(e,{demos:function(){return y}});var p=n(29008),o=n.n(p),c=n(70958),l=n.n(c),r=n(92379),f=n(24780),y={"src-example-demo-demos":{component:r.memo(r.lazy(function(){return Promise.all([n.e(5766),n.e(681),n.e(2433)]).then(n.bind(n,65063))})),asset:{type:"BLOCK",id:"src-example-demo-demos",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(25639).Z},"@lobehub/ui":{type:"NPM",value:"1.146.9"},leva:{type:"NPM",value:"0.9.35"},"lucide-react":{type:"NPM",value:"0.414.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":n(46771),leva:n(75521),"lucide-react":n(43493),react:n(92379)},renderOpts:{compile:function(){var u=l()(o()().mark(function i(){var s,d=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(9134).then(n.bind(n,59134));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,d));case 3:case"end":return t.stop()}},i)}));function m(){return u.apply(this,arguments)}return m}()}},"src-example-demo-customsize":{component:r.memo(r.lazy(function(){return Promise.all([n.e(5766),n.e(681),n.e(2433)]).then(n.bind(n,63724))})),asset:{type:"BLOCK",id:"src-example-demo-customsize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(63748).Z},"@lobehub/ui":{type:"NPM",value:"1.146.9"},"lucide-react":{type:"NPM",value:"0.414.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":n(46771),"lucide-react":n(43493),react:n(92379)},renderOpts:{compile:function(){var u=l()(o()().mark(function i(){var s,d=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(9134).then(n.bind(n,59134));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,d));case 3:case"end":return t.stop()}},i)}));function m(){return u.apply(this,arguments)}return m}()}},"src-example-demo-breadcrumb":{component:r.memo(r.lazy(function(){return Promise.all([n.e(5766),n.e(681),n.e(2433)]).then(n.bind(n,92054))})),asset:{type:"BLOCK",id:"src-example-demo-breadcrumb",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(2530).Z},"@lobehub/ui":{type:"NPM",value:"1.146.9"},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@lobehub/ui":n(46771),antd:n(83674),react:n(92379)},renderOpts:{compile:function(){var u=l()(o()().mark(function i(){var s,d=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(9134).then(n.bind(n,59134));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,d));case 3:case"end":return t.stop()}},i)}));function m(){return u.apply(this,arguments)}return m}()}},"src-example-demo-table":{component:r.memo(r.lazy(function(){return Promise.all([n.e(5766),n.e(681),n.e(2433)]).then(n.bind(n,95510))})),asset:{type:"BLOCK",id:"src-example-demo-table",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(49353).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:n(92379)},renderOpts:{compile:function(){var u=l()(o()().mark(function i(){var s,d=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(9134).then(n.bind(n,59134));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,d));case 3:case"end":return t.stop()}},i)}));function m(){return u.apply(this,arguments)}return m}()}}}},40456:function(a,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return o}});var p=n(24780);const o=[]},2530:function(a,e){"use strict";e.Z=`import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import type { BreadcrumbProps } from 'antd';
import { Breadcrumb } from 'antd';
import React from 'react';

const items = [
  {
    path: '/apps',
    title: 'Application List',
  },
  {
    path: '/detail/app-1',
    title: 'Detail',
  },
  {
    path: '/versions',
    title: 'Version',
  },
];

export default () => {
  const store = useCreateStore();
  const control: BreadcrumbProps | any = useControls(
    {
      separator: '/',
    },
    { store }
  );
  return (
    <StoryBook levaStore={store}>
      <Breadcrumb {...control} items={items} />
    </StoryBook>
  );
};
`},63748:function(a,e){"use strict";e.Z=`import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Settings } from 'lucide-react';
import React from 'react';

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
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon active icon={Settings} size={size} />
    </StoryBook>
  );
};
`},49353:function(a,e){"use strict";e.Z=`import React from 'react';

export default () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div>
              <span>\u72B6\u6001</span>
              <span>
                <span>
                  <span>\u5DF2\u53D1\u5E03</span>
                </span>
              </span>
            </div>
          </td>
          <td>
            <div>
              <span>\u53D1\u5E03\u65F6\u95F4</span>
              <span>
                <span>2024-07-29 19:44:30</span>
              </span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span>\u521B\u5EFA\u8005</span>
              <span>Luobo Zhang</span>
            </div>
          </td>
          <td>
            <div>
              <span>\u66F4\u65B0\u65F6\u95F4</span>
              <span>
                <span>2024-07-29 19:44:30</span>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
`},25639:function(a,e){"use strict";e.Z=`import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { folder } from 'leva';
import * as LucideIcon from 'lucide-react';
import React from 'react';

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
    { store }
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon {...control} />
    </StoryBook>
  );
};
`}}]);
