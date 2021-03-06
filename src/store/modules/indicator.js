import * as types from '@/store/types'
import axios from 'axios'

import router from '@/router.js'

const state = {
  _links: {},
  limit: 5,
  offset: 0,
  data: [],
  size: 0,
  isLoading: false
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
  },
  [types.INDICATOR_LOADING]: state => {
    return state.isLoading
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
  },
  [types.MUTATE_INDICATOR_LOADING]: (state, data) => {
    state.isLoading = data
  }
}

const actions = {
  [types.GET_ALL_INDICATOR]: ({
    commit
  }, data) => {
    commit(types.MUTATE_INDICATOR_LOADING, true)

    var params = {}
    if (data != null) {
      if (data.searchBy == "" && data.query == "") {
        // kurangi -1 pada offset karena mongo DB offset 0 = data paling awal
        params = {
          offset: (data.page - 1) * data.rowsPerPage,
          limit: data.rowsPerPage,
          sorted: [{
            id: data.sortBy,
            desc: data.descending
          }]
        }
      } else {
        params = {
          offset: (data.page - 1) * data.rowsPerPage,
          limit: data.rowsPerPage,
          sorted: [{
            id: data.sortBy,
            desc: data.descending
          }],
          filtered: [{
            id: data.searchBy,
            value: data.query
          }]
        }
      }
    }

    axios.post('/indicators', params, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data.data != null) {
          commit(types.MUTATE_INDICATOR_LOADING, false)
          commit(types.MUTATE_ALL_INDICATOR, res.data)
        }
      })
      .catch(err => {
        commit(types.MUTATE_INDICATOR_LOADING, false)
        console.log(err)
      })
  },
  [types.GET_INDICATOR]: ({
    commit
  }, id) => {
    commit(types.MUTATE_INDICATOR_LOADING, true)

    axios.get('/indicators/' + id, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_INDICATOR, res.data)
          commit(types.MUTATE_INDICATOR_LOADING, false)
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