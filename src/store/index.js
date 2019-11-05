import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import messageWall from './modules/messageWall'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    mw: messageWall
  },
  getters
})

export default store
