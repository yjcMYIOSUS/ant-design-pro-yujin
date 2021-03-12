// import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2021 YuJin"
    links={[
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
      {
        key: 'TypeScript ',
        title: 'TypeScript ',
        href: 'https://www.tslang.cn/docs/handbook/basic-types.html',
        blankTarget: true,
      },
      {
        key: 'React',
        title: 'React',
        href: 'https://react.docschina.org/',
        blankTarget: true,
      },
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://beta-pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'Ant Design Pro Preview',
        title: 'Ant Design Pro Preview',
        href: 'https://preview.pro.ant.design/',
        blankTarget: true,
      },
      {
        key: 'Ant Design of Vue',
        title: 'Ant Design of Vue',
        href: 'https://www.antdv.com/',
        blankTarget: true,
      },
      {
        key: 'Ant Design of Angular',
        title: 'Ant Design of Angular',
        href: 'http://ng.ant.design/',
        blankTarget: true,
      },
      {
        key: 'Ant Design Charts',
        title: 'Ant Design Charts',
        href: 'https://charts.ant.design/',
        blankTarget: true,
      },
      {
        key: 'Ant Design Landing',
        title: 'Ant Design Landing',
        href: 'https://landing.ant.design/',
        blankTarget: true,
      },
      {
        key: 'UmiJS',
        title: 'UmiJS',
        href: 'https://umijs.org/zh-CN',
        blankTarget: true,
      },
      {
        key: 'dumi',
        title: 'dumi',
        href: 'https://d.umijs.org/zh-CN',
        blankTarget: true,
      },
      {
        key: 'Remax',
        title: 'Remax',
        href: 'https://remaxjs.org/',
        blankTarget: true,
      },
      {
        key: 'Ant Motion',
        title: 'Ant Motion',
        href: 'https://motion.ant.design/',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      
    ]}
  />
);
