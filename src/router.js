import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Summary from '@/components/feature/Summary'

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
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})