import * as types from '@/store/types'
import axios from 'axios'

const state = {
  alertCount: [],
  alertCountLoading: false,
  portCount: [],
  portCountLoading: false,
  actorCount: [],
  actorCountLoading: false,
  actorCountryCount: [],
  actorCountryCountLoading: false,
  targetCount: [],
  targetCountLoading: false,
  targetCountryCount: [],
  targetCountryCountLoading: false,
}

const getters = {
  [types.GET_ANALYTICS_ALERT_COUNT]: state => {
    return state.alertCount
  },
  [types.GET_ANALYTICS_ALERT_COUNT_LOADING]: state => {
    return state.alertCountLoading
  },
  [types.GET_ANALYTICS_PORT_COUNT]: state => {
    return state.portCount
  },
  [types.GET_ANALYTICS_PORT_COUNT_LOADING]: state => {
    return state.portCountLoading
  },
  [types.GET_ANALYTICS_ACTOR_COUNT]: state => {
    return state.actorCount
  },
  [types.GET_ANALYTICS_ACTOR_COUNT_LOADING]: state => {
    return state.actorCountLoading
  },
  [types.GET_ANALYTICS_ACTOR_COUNTRY_COUNT]: state => {
    return state.actorCountryCount
  },
  [types.GET_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING]: state => {
    return state.actorCountryCountLoading
  },
  [types.GET_ANALYTICS_TARGET_COUNT]: state => {
    return state.targetCount
  },
  [types.GET_ANALYTICS_TARGET_COUNT_LOADING]: state => {
    return state.targetCountLoading
  },
  [types.GET_ANALYTICS_TARGET_COUNTRY_COUNT]: state => {
    return state.targetCountryCount
  },
  [types.GET_ANALYTICS_TARGET_COUNTRY_COUNT_LOADING]: state => {
    return state.targetCountryCountLoading
  },
}

const mutations = {
  [types.MUTATE_ANALYTICS_ALERT_COUNT]: (state, data) => {
    state.alertCount = data
  },
  [types.MUTATE_ANALYTICS_ALERT_COUNT_LOADING]: (state, condition) => {
    state.alertCountLoading = condition
  },
  [types.MUTATE_ANALYTICS_PORT_COUNT]: (state, data) => {
    state.portCount = data
  },
  [types.MUTATE_ANALYTICS_PORT_COUNT_LOADING]: (state, condition) => {
    state.portCountLoading = condition
  },
  [types.MUTATE_ANALYTICS_ACTOR_COUNT]: (state, data) => {
    state.actorCount = data
  },
  [types.MUTATE_ANALYTICS_ACTOR_COUNT_LOADING]: (state, condition) => {
    state.actorCountLoading = condition
  },
  [types.MUTATE_ANALYTICS_ACTOR_COUNTRY_COUNT]: (state, data) => {
    state.actorCountryCount = data
  },
  [types.MUTATE_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING]: (state, condition) => {
    state.actorCountryCountLoading = condition
  },
  [types.MUTATE_ANALYTICS_TARGET_COUNT]: (state, data) => {
    state.targetCount = data
  },
  [types.MUTATE_ANALYTICS_TARGET_COUNT_LOADING]: (state, condition) => {
    state.targetCountLoading = condition
  },
  [types.MUTATE_ANALYTICS_TARGET_COUNTRY_COUNT]: (state, data) => {
    state.targetCountryCount = data
  },
  [types.MUTATE_ANALYTICS_TARGET_COUNTRY_COUNT_LOADING]: (state, condition) => {
    state.targetCountryCountLoading = condition
  },
}

const actions = {
  [types.REQUEST_ANALYTICS_ALERT_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_ALERT_COUNT_LOADING, true)

    axios.get('/analytics/alert-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_ALERT_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_ALERT_COUNT_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.REQUEST_ANALYTICS_PORT_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_PORT_COUNT_LOADING, true)

    axios.get('/analytics/port-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_PORT_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_PORT_COUNT_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.REQUEST_ANALYTICS_ACTOR_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_ACTOR_COUNT_LOADING, true)

    axios.get('/analytics/actor-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_ACTOR_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_ACTOR_COUNT_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.REQUEST_ANALYTICS_ACTOR_COUNTRY_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING, true)

    axios.get('/analytics/actor-country-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_ACTOR_COUNTRY_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.REQUEST_ANALYTICS_TARGET_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_TARGET_COUNT_LOADING, true)

    axios.get('/analytics/target-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_TARGET_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_TARGET_COUNT_LOADING, false)
        }
      })
      .catch(err => console.log(err))
  },
  [types.REQUEST_ANALYTICS_TARGET_COUNTRY_COUNT]: ({
    commit
  }) => {
    commit(types.MUTATE_ANALYTICS_TARGET_COUNTRY_COUNT_LOADING, true)

    axios.get('/analytics/target-country-count', {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('mestix_token')
        }
      })
      .then(res => {
        if (res.data != null) {
          commit(types.MUTATE_ANALYTICS_TARGET_COUNTRY_COUNT, res.data)
          commit(types.MUTATE_ANALYTICS_TARGET_COUNTRY_COUNT_LOADING, false)
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