import Vue from 'vue'
import Vuex from 'vuex'
import view from './modules/view'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
      view,
      user
    }
})