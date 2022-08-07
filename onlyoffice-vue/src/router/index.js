import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
