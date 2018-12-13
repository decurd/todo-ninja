import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/paddingnmargin',
      name: 'paddingnmargin',
      component: () => import(/* webpackChunkName: "paddingnmargin" */ './views/PaddingnMargin.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "team" */ './views/Team.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import(/* webpackChunkName: "slot" */ './views/Slot.vue')
    }
  ]
})
