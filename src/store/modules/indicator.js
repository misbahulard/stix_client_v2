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
  [types.ALL_INDICATOR]: state => {
    return {
      "_links": state._links,
      "limit": state.limit,
      "offset": state.offset,
      "data": state.data,
      size: state.size
    }
  },
  [types.INDICATOR]: state => {
    return state.data
  },
  [types.INDICATOR_TOTAL]: state => {
    return state.size
  }
}

const mutations = {
  [types.MUTATE_ALL_INDICATOR]: (state, data) => {
    state._links = data._links,
    state.limit = data.limit,
    state.offset = data.offset,
    state.data = data.data,
    state.size = data.size
  },
  [types.MUTATE_INDICATOR]: (state, data) => {
    state.data = data.data
  }
}

const actions = { 
  [types.GET_ALL_INDICATOR]: ({ commit }) => {
    axios.post('/indicators', {}, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data.data != null) {
        commit(types.MUTATE_ALL_INDICATOR, res.data)
      }
    })
    .catch(err => console.log(err))
  },
  [types.GET_INDICATOR]: ({ commit }, id) => {
    axios.get('/indicators/' + id, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data != null) {
        commit(types.MUTATE_INDICATOR, res.data)
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