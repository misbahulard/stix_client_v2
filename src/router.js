import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Summary from '@/components/feature/Summary'
import ObservedData from '@/components/feature/ObservedData'
import Indicator from '@/components/feature/Indicator'
import Identity from '@/components/feature/Identity'
import ThreatActor from '@/components/feature/ThreatActor'
import AttackPattern from '@/components/feature/AttackPattern'
import Bundle from '@/components/feature/Bundle'
import BundleDdos from '@/components/feature/BundleDdos'

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
    }, {
      path: 'indicator',
      name: 'Indicator',
      component: Indicator
    }, {
      path: 'identity',
      name: 'Identity',
      component: Identity
    }, {
      path: 'threat-actor',
      name: 'ThreatActor',
      component: ThreatActor
    }, {
      path: 'attack-pattern',
      name: 'AttackPattern',
      component: AttackPattern
    }, {
      path: 'bundle',
      name: 'Bundle',
      component: Bundle
    }, {
      path: 'bundle-ddos',
      name: 'BundleDdos',
      component: BundleDdos
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})