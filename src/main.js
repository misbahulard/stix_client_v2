import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {
  store
} from './store/store'
require('./axios.config.js')

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/stisla.css'

// Font awesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faSearch,
  faSignOutAlt,
  faFire,
  faArchive,
  faEye,
  faUser,
  faTheaterMasks,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add([faBars, faSearch, faSignOutAlt, faFire, faArchive, faEye, faUser, faTheaterMasks, faCodeBranch])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')