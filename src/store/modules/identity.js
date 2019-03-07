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
  [types.ALL_IDENTITY]: state => {
    return {
      "_links": state._links,
      "limit": state.limit,
      "offset": state.offset,
      "data": state.data,
      size: state.size
    }
  },
  [types.IDENTITY]: state => {
    return state.data
  },
  [types.IDENTITY_TOTAL]: state => {
    return state.size
  }
}

const mutations = {
  [types.MUTATE_ALL_IDENTITY]: (state, data) => {
    state._links = data._links,
    state.limit = data.limit,
    state.offset = data.offset,
    state.data = data.data,
    state.size = data.size
  },
  [types.MUTATE_IDENTITY]: (state, data) => {
    state.data = data.data
  }
}

const actions = { 
  [types.GET_ALL_IDENTITY]: ({ commit }) => {
    axios.post('/identities', {}, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data.data != null) {
        commit(types.MUTATE_ALL_IDENTITY, res.data)
      }
    })
    .catch(err => console.log(err))
  },
  [types.GET_IDENTITY]: ({ commit }, id) => {
    axios.get('/identities/' + id, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    })
    .then(res => {
      if (res.data != null) {
        commit(types.MUTATE_IDENTITY, res.data)
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