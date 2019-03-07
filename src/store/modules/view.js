import * as types from '@/store/types'

const state = {
  isSidebarOpened: false
}

const getters = {
  [types.IS_SIDEBAR_OPENED]: state => {
    return state.isSidebarOpened
  }
}

const mutations = {
  [types.MUTATE_TOGGLE_SIDEBAR]: (state) => {
    state.isSidebarOpened = !state.isSidebarOpened
  },
}

const actions = {
  [types.VIEW_TOGGLE_SIDEBAR]: ({ commit }) => {
    commit(types.MUTATE_TOGGLE_SIDEBAR)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}