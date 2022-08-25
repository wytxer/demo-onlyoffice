import LayoutBlock from '@/layouts/block.vue'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  meta: {
    title: '首页'
  }
}, {
  path: '/onlyoffice',
  component: LayoutBlock,
  children: [{
    path: 'document',
    component: LayoutBlock,
    meta: {
      title: '文档编辑器'
    },
    children: [{
      path: 'quick-start',
      component: () => import(/* webpackChunkName: "document-quick-start" */ '@/views/onlyoffice/document-quick-start.vue'),
      meta: {
        title: '快速接入'
      }
    }, {
      path: 'custom-config',
      component: () => import(/* webpackChunkName: "document-custom-config" */ '@/views/onlyoffice/document-custom-config.vue'),
      meta: {
        title: '自定义 onlyoffice 配置'
      }
    }, {
      path: 'editor',
      component: () => import(/* webpackChunkName: "document-editor" */ '@/views/onlyoffice/document-editor.vue'),
      meta: {
        title: '接口获取配置项'
      }
    }, {
      path: 'editor-jwt',
      component: () => import(/* webpackChunkName: "document-editor-jwt" */ '@/views/onlyoffice/document-editor-jwt.vue'),
      meta: {
        title: '开启 JWT 加密'
      }
    }, {
      path: 'plugin',
      component: () => import(/* webpackChunkName: "document-plugin" */ '@/views/onlyoffice/document-plugin.vue'),
      meta: {
        title: '插件'
      }
    }, {
      path: 'conversion',
      component: () => import(/* webpackChunkName: "document-conversion" */ '@/views/onlyoffice/document-conversion.vue'),
      meta: {
        title: '文档转换'
      }
    }, {
      path: 'onlyoffice-vue',
      component: () => import(/* webpackChunkName: "onlyoffice-vue" */ '@/views/onlyoffice/onlyoffice-vue.vue'),
      meta: {
        title: '使用 onlyoffice-vue 组件'
      }
    }]
  }, {
    path: 'excel',
    component: LayoutBlock,
    meta: {
      title: '表格编辑器'
    },
    children: [{
      path: 'quick-start',
      component: () => import(/* webpackChunkName: "excel-quick-start" */ '@/views/onlyoffice/excel-quick-start.vue'),
      meta: {
        title: '快速接入'
      }
    }, {
      path: 'formula',
      component: () => import(/* webpackChunkName: "excel-formula" */ '@/views/onlyoffice/excel-formula.vue'),
      meta: {
        title: '自动公式'
      }
    }]
  }]
}]

export default routes
