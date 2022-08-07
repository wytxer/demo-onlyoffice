import Vue from 'vue'
import { ConfigProvider, Button, Skeleton, message } from 'ant-design-vue'
import App from '@/app.vue'
import router from '@/router'

import '@wytxer/style-utils/lib/common.less'
import 'ant-design-vue/dist/antd.less'

Vue.use(ConfigProvider)
Vue.use(Button)
Vue.use(Skeleton)

Vue.prototype.$message = message

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
