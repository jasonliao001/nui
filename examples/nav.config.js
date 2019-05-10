const navList = [
  {
    name: '开发指南',
    groups: [
      {
        list: [
          {
            path: '/intro',
            title: '项目介绍'
          },
          {
            path: '/quickstart',
            title: '快速上手'
          },
          {
            path: '/i18n',
            title: '国际化'
          },
          {
            path: '/theme',
            title: '主题定制'
          },
          {
            path: '/log',
            title: '更新日志'
          }
        ]
      }
    ]
  },
  {
    name: '组件',
    groups: [
      {
        groupName: '基础组件',
        list: [
          {
            path: '/color',
            title: 'Color 色彩'
          },
          {
            path: '/font',
            title: 'Font 字体'
          },
          {
            path: '/icon',
            title: 'Icon 图标'
          },
          {
            path: '/button',
            title: 'Button 按钮'
          }
        ]
      },
      {
        groupName: '布局',
        list: [
          {
            path: '/grid',
            title: 'Grid 格栅'
          },
          {
            path: '/layout',
            title: 'Layout 布局'
          }
        ]
      },
      {
        groupName: '导航',
        list: [
          {
            path: '/menu',
            title: 'Menu 菜单'
          }
        ]
      },
      {
        groupName: '表单',
        list: [
          {
            path: '/from',
            title: 'Form 表单'
          }
        ]
      },
      {
        groupName: '反馈',
        list: [
          {
            path: '/message',
            title: 'Message 消息提示'
          }
        ]
      },
      {
        groupName: '其他',
        list: [
          {
            path: '/affix',
            title: 'Affix 图钉'
          }
        ]
      }
    ]
  }
];
module.exports = navList;
