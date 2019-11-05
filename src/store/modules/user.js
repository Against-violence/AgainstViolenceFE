const USER_STATUS = 'USER_STATUS'
const USER_TOKEN = 'USER_TOKEN'

const state = {
  currentUser: null,
  isLogin: false,
  token: ''
}

const mutations = {
  //更改用户状态信息
  [USER_STATUS]: (state, user) => {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else if (user === null) {
      localStorage.setItem('userName', null)
      localStorage.setItem('userToken', '')
      state.currentUser = null
      state.isLogin = false
      state.token = ''
    }
  },
  [USER_TOKEN]: (state, userToken) => {
    if (userToken) {
      state.token = userToken
    } else {
      state.token = null
    }
  }
}

const actions = {
  setUser: ({ commit }, user) => {
    commit(USER_STATUS, user)
  },
  setToken: ({ commit }, userToken) => {
    commit(USER_TOKEN, userToken)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
