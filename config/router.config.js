export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        redirect: '/fish',
      },
      {
        name: '导航',
        path: '/navi',
        component: '../pages',
      },
      {
        name: '鱼类图鉴',
        path: '/fish',
        component: '../pages/fish',
      },
      {
        name: '昆虫图鉴',
        path: '/insect',
        component: '../pages/insect',
      },
      {
        name: '海产图鉴',
        path: '/seafood',
        component: '../pages/seafood',
      },
      {
        name: '化石图鉴',
        path: '/fossil',
        component: '../pages/fossil',
      },
      {
        name: '唱片图鉴',
        path: '/disc',
        component: '../pages/disc',
      },
      {
        name: '家具图鉴',
        path: '/furniture',
        component: '../pages/furniture',
      },
      {
        name: '花卉杂交',
        path: '/flower',
        component: '../pages/flower',
      },
      {
        name: '反应收集',
        path: '/face',
        component: '../pages/face',
      },
      {
        name: '美术品图鉴',
        path: '/artwork',
        component: '../pages/artwork',
      },
      {
        name: '雨伞图鉴',
        path: '/umbrellas',
        component: '../pages/umbrellas',
      },
      {
        name: '相关备注',
        path: '/desc',
        component: '../pages/desc',
      },
      {
        name: '导入/导出',
        path: '/data',
        component: '../pages/data',
      },
    ],
  },
];
