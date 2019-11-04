import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state: {
    currentUser: null,
    isLogin: false,
    token: '',
    /* state for MessageWall */
    messages: [], // 包含消息墙上所有消息对象的数组
    start: 0 // 显示的第一条消息在messages中的索引
  },
  getters,
  mutations,
  actions
})

export default store
