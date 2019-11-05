// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './resources/elementUI'
import { Message } from 'element-ui'
import router from './router'
import http from './http'
import store from './store'
import user from "./store/modules/user"

Vue.prototype.$http = http
const userToken = user.mutations.USER_TOKEN
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (localStorage.getItem('userName')) {
      next()
    } else {
      Message({
        message: "未登录, 请先登录",
        type: "warning"
    });
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
