import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Summary from '@/components/feature/Summary'
import ObservedData from '@/components/feature/ObservedData'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Dashboard,
    children: [{
      path: '',
      name: 'Summary',
      component: Summary
    }, {
      path: 'observed-data',
      name: 'ObservedData',
      component: ObservedData
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})