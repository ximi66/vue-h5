import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const demo = resolve => require(['@/components/demo'], resolve)

const router = new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: demo,
    }
  ]
})
export default router



