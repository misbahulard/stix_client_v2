import * as types from '@/store/types'
import axios from 'axios'

import router from '@/router.js'

const state = {
  _links: null,
  limit: null,
  offset: null,
  data: null,
  size: null
}

const getters = {
  [types.ALL_BUNDLE]: state => {
    return {
      "_links": state._links,
      "limit": state.limit,
      "offset": state.offset,
      "data": state.data,
      size: state.size
    }
  },
  [types.BUNDLE]: state => {
    return state.data
  },
  [types.BUNDLE_TOTAL]: state => {
    return state.size
  }
}

const mutations = {
  [types.MUTATE_ALL_BUNDLE]: (state, data) => {
    state._links = data._links,
    state.limit = data.limit,
    state.offset = data.offset,
    state.data = data.data,
    state.size = data.size
  },
  [types.MUTATE_BUNDLE]: (state, data) => {
    state.data = data.data
  }
}

const actions = { 
  [types.GET_ALL_BUNDLE]: ({ commit }) => {
    axios.post('/bundles', {}, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data.data != null) {
        commit(types.MUTATE_ALL_BUNDLE, res.data)
      }
    })
    .catch(err => console.log(err))
  },
  [types.GET_BUNDLE]: ({ commit }, id) => {
    axios.get('/bundles/' + id, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data != null) {
        commit(types.MUTATE_BUNDLE, res.data)
      }
    })
    .catch(err => console.log(err))
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}