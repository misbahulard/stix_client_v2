import * as types from '@/store/types'
import axios from 'axios'

import router from '@/router.js'

/**
   * nomrmalisasi object dengan cara menghilangkan informasi yang tidak penting
   * @param {object} data - object bundle
   */
  function normalizeObject(data) {
    var clearedObj = Object.assign({}, data)
    delete clearedObj["fx"];
    delete clearedObj["fy"];
    delete clearedObj["vx"];
    delete clearedObj["vy"];
    delete clearedObj["x"];
    delete clearedObj["y"];
    delete clearedObj["index"];

    return clearedObj;
  }

/**
 * dapatkan legenda dari object bundle
 * legenda berupa icon dan nama objectnya
 * @param {object} data - object bundle
 */
function getLegend(data) {
  var legend = []
  var objects = data.objects
  objects.forEach(item => {
    if (item['type'] !== 'relationship') {
      var exist = legend.some(el => el.name === item.type)
      if (!exist) {
        var icon = "stix2_" + item.type.replace(/\-/g, '_') + "_icon_tiny_round_v1.png"
        legend.push({
          name: item.type,
          icon: icon
        })
      }
    }
  })

  return legend
}

const state = {
  _links: {},
  limit: 5,
  offset: 0,
  data: [],
  size: 0,
  selectedBundle: {},
  selectedNode: {},
  legend: [],
  isLoading: false
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
  },
  [types.BUNDLE_LOADING]: state => {
    return state.isLoading
  },
  [types.BUNDLE_SELECTED_BUNDLE]: state => {
    return state.selectedBundle
  },
  [types.BUNDLE_SELECTED_NODE]: state => {
    return state.selectedNode
  },
  [types.BUNDLE_LEGEND]: state => {
    return state.legend
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
  },
  [types.MUTATE_BUNDLE_LOADING]: (state, data) => {
    state.isLoading = data
  },
  [types.MUTATE_BUNDLE_SELECTED_BUNDLE]: (state, data) => {
    if (data == null) {
      state.selectedBundle = state.data[0]
      state.legend = getLegend(state.data[0])
    } else {
      state.selectedBundle = data
      state.legend = getLegend(data)
    }
  },
  [types.MUTATE_BUNDLE_SELECTED_NODE]: (state, data) => {
    if (data == null) {
      state.selectedNode = state.data[0].objects[0]
    } else {
      state.selectedNode = normalizeObject(data)
    }
  }
}

const actions = {
  [types.GET_ALL_BUNDLE]: ({
    commit
  }, data) => {
    commit(types.MUTATE_BUNDLE_LOADING, true)

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

    axios.post('/bundles', params, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
      .then(res => {
        if (res.data.data != null) {
          commit(types.MUTATE_BUNDLE_LOADING, false)
          commit(types.MUTATE_ALL_BUNDLE, res.data)
          commit(types.MUTATE_BUNDLE_SELECTED_BUNDLE, null)
          commit(types.MUTATE_BUNDLE_SELECTED_NODE, null)
        }
      })
      .catch(err => {
        commit(types.MUTATE_BUNDLE_LOADING, false)
        console.log(err)
      })
  },
  [types.GET_BUNDLE]: ({
    commit
  }, id) => {
    commit(types.MUTATE_BUNDLE_LOADING, true)

    axios.get('/bundles/' + id, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_BUNDLE, res.data)
          commit(types.MUTATE_BUNDLE_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.CHANGE_BUNDLE_SELECTED_BUNDLE]: ({
    commit
  }, data) => {
    if (data == null) {
      commit(types.MUTATE_BUNDLE_SELECTED_BUNDLE, null)
    } else {
      commit(types.MUTATE_BUNDLE_SELECTED_BUNDLE, data)
    }
  },
  [types.CHANGE_BUNDLE_SELECTED_NODE]: ({
    commit
  }, data) => {
    if (data == null) {
      commit(types.MUTATE_BUNDLE_SELECTED_NODE, null)
    } else {
      commit(types.MUTATE_BUNDLE_SELECTED_NODE, data)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}