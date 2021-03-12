export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   icon: 'HomeOutlined',
  //   component: './Home',
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    // access: 'canAdmin',
    // flatMenu:true,
    // component: './Admin',
    routes: [
      // {
      //   path: '/admin/sub-page',
      //   name: 'sub-page',
      //   icon: 'smile',
      //   component: './Welcome',
      // },
      // {
      //   path: '/admin/sub-list',
      //   name: 'sub-list',
      //   icon: 'smile',
      //   component: './TableList',
      // }
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './DashboardAnalysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './DashboardMonitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './DashboardWorkplace',
      },
    ],
  },
  {
    name: 'form',
    icon: 'form',
    path: '/form',
    // component: './TableList',
    routes: [
      {
        name: 'basic-form',
        icon: 'smile',
        path: '/form/basic-form',
        component: './FormBasicForm',
      },
      {
        name: 'step-form',
        icon: 'smile',
        path: '/form/step-form',
        component: './FormStepForm',
      },
      {
        name: 'advanced-form',
        icon: 'smile',
        path: '/form/advanced-form',
        component: './FormAdvancedForm',
      },
    ],
  },
  {
    name: 'list',
    icon: 'table',
    path: '/list',
    // component: './TableList',
    routes: [
      {
        name: 'search-list',
        icon: 'smile',
        path: '/list/search-list',
        component: './ListSearch',
        routes: [
          {
            name: 'articles',
            icon: 'smile',
            path: '/list/search-list/articles',
            component: './ListSearchArticles',
          },
          {
            name: 'projects',
            icon: 'smile',
            path: '/list/search-list/projects',
            component: './ListSearchProjects',
          },
          {
            name: 'applications',
            icon: 'smile',
            path: '/list/search-list/applications',
            component: './ListSearchApplications',
          },
        ],
      },
      {
        name: 'table-list',
        icon: 'smile',
        path: '/list/table-list',
        component: './ListTableList',
      },
      {
        name: 'basic-list',
        icon: 'smile',
        path: '/list/basic-list',
        component: './ListBasicList',
      },
      {
        name: 'card-list',
        icon: 'smile',
        path: '/list/card-list',
        component: './ListCardList',
      },
    ],
  },
  {
    name: 'profile',
    icon: 'profile',
    path: '/profile',
    // component: './TableList',
    routes: [
      {
        name: 'basic',
        icon: 'smile',
        path: '/profile/basic',
        component: './ProfileBasic',
      },
      {
        name: 'advanced',
        icon: 'smile',
        path: '/profile/advanced',
        component: './ProfileAdvanced',
      },
    ],
  },
  {
    name: 'result',
    icon: 'CheckCircleOutlined',
    path: '/result',
    // component: './TableList',
    routes: [
      {
        name: 'success',
        icon: 'smile',
        path: '/result/success',
        component: './ResultSuccess',
      },
      {
        name: 'fail',
        icon: 'smile',
        path: '/result/fail',
        component: './ResultFail',
      },
    ],
  },
  {
    name: 'exception',
    icon: 'WarningOutlined',
    path: '/exception',
    // component: './TableList',
    routes: [
      {
        name: '403',
        icon: 'smile',
        path: '/exception/not-permission',
        component: './Exception403',
      },
      {
        name: '404',
        icon: 'smile',
        path: '/exception/not-find',
        component: './Exception404',
      },
      {
        name: '500',
        icon: 'smile',
        path: '/exception/server-error',
        component: './Exception500',
      },
    ],
  },
  {
    name: 'account',
    icon: 'UserOutlined',
    path: '/account',
    // component: './TableList',
    routes: [
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './AccountCenter',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './AccountSettings',
      },
    ],
  },
  {
    name: 'editor',
    icon: 'HighlightOutlined',
    path: '/editor',
    // component: './TableList',
    routes: [
      {
        name: 'flow',
        icon: 'smile',
        path: '/editor/flow',
        component: './EditorFlow',
      },
      {
        name: 'mind',
        icon: 'smile',
        path: '/editor/mind',
        component: './EditorMind',
      },
      {
        name: 'koni',
        icon: 'smile',
        path: '/editor/koni',
        component: './EditorKoni',
      },
    ],
  },
  {
    path: '/',
    // redirect: '/home', // redirect: '/dashboard/analysis',
    component: './Home',
  },
  {
    component: './404',
  },
];
