import * as types from '@/store/types'
import axios from 'axios'

import router from '@/router.js'

const state = {
  userId: null,
  token: null,
  user: null,
  error: null,
  isLoading: false
}

const getters = {
  [types.GET_USER_INFO]: state => {
    return state.user
  },
  [types.IS_AUTHENTICATED]: state => {
    return state.token !== null
  },
  [types.GET_USER_ERROR_MESSAGE]: state => {
    return state.error
  },
  [types.IS_LOADING]: state => {
    return state.isLoading
  }
}

const mutations = {
  [types.MUTATE_AUTH_USER]: (state, data) => {
    state.token = data.token
    state.userId = data.userId
  },
  [types.MUTATE_STORE_USER]: (state, data) => {
    state.user = data
  },
  [types.MUTATE_CLEAR_AUTH_DATA]: (state) => {
    state.token = null
    state.userId = null
  },
  [types.MUTATE_USER_ERROR_MESSAGE]: (state, data) => {
    state.error = data
  },
  [types.MUTATE_IS_LOADING]: (state) => {
    state.isLoading = !state.isLoading
  }
}

const actions = {
  /** Karena tidak didefinisikan, set timer 3 jam  */
  [types.SET_LOGOUT_TIMER]: ({
    commit,
    dispatch
  }, expirationTime) => {
    setTimeout(() => {
      dispatch(types.LOGOUT)
    }, expirationTime * 1000)
  },
  [types.REGISTER]: ({
    dispatch,
    commit
  }, data) => {
    axios.post('/user/registration', {
        nama: data.nama,
        telpon: data.telpon,
        email: data.email,
        password: data.password
      })
      .then(res => {
        commit(types.MUTATE_AUTH_USER, {
          token: res.data.token,
          userId: res.data.id
        })
        const now = new Date()
        const expirationDate = new Date(now.getTime() + 3600 * 1000)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.id)
        localStorage.setItem('expirationDate', expirationDate)
        // dispatch(types.STORE_USER, data)
        dispatch(types.SET_LOGOUT_TIMER, 3600)
      })
      .catch(err => console.log(err))
  },
  [types.LOGIN]: ({
    dispatch,
    commit
  }, data) => {
    dispatch(types.SET_USER_ERROR_MESSAGE, null)
    commit(types.MUTATE_IS_LOADING)

    axios.post('/login', {
        username: data.username,
        password: data.password
      })
      .then(res => {
        if (res.data.success) {
          commit(types.MUTATE_AUTH_USER, {
            token: res.data.token,
            userId: res.data.id
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + 3600 * 1000)
          localStorage.setItem('token', res.data.access_token)
          localStorage.setItem('userId', res.data.id)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('expirationDate', expirationDate)

          var user = {
            "token": res.data.access_token,
            "userId": res.data.id,
            "username": res.data.username
          }

          dispatch(types.SET_LOGOUT_TIMER, 3600)
          commit(types.MUTATE_IS_LOADING)
          commit(types.MUTATE_USER_ERROR_MESSAGE, null)
          commit(types.MUTATE_STORE_USER, user)

          router.replace('/')
        } else {
          var message = "Incorrect email or password."
          commit(types.MUTATE_IS_LOADING)
          dispatch(types.SET_USER_ERROR_MESSAGE, message)
        }
      })
      .catch(err => {
        console.log(err)
        commit(types.MUTATE_IS_LOADING)
      })
  },
  [types.TRY_AUTO_LOGIN]: ({
    commit,
    dispatch
  }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    const expirationDate = new Date(localStorage.getItem('expirationDate'))
    const now = new Date()
    if (now >= expirationDate) {
      dispatch(types.LOGOUT)
      return
    }
    const userId = localStorage.getItem('userId')
    commit(types.MUTATE_AUTH_USER, {
      token: token,
      userId: userId
    })

    var user = {
      "token": localStorage.getItem('token'),
      "userId": localStorage.getItem('userId'),
      "username": localStorage.getItem('username')
    }
    commit(types.MUTATE_STORE_USER, user)

  },
  [types.LOGOUT]: ({
    commit
  }) => {
    axios.post('/logout/access', {}, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
      .then(res => {
        if (res.data.success) {
          commit(types.MUTATE_CLEAR_AUTH_DATA)
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          localStorage.removeItem('username')
          localStorage.removeItem('expirationDate')
          router.replace('/login')
        }
      })
      .catch(err => console.log(err))
  },
  [types.SET_USER_ERROR_MESSAGE]: ({
    commit
  }, data) => {
    commit(types.MUTATE_USER_ERROR_MESSAGE, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}