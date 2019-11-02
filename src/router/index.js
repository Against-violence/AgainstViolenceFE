import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register/Register.vue'
import Login from '@/components/Login/Login.vue'
import Main from '@/components/Main/Main.vue'
import Home from '@/components/Home/Home.vue'
import HelpingCenter from '@/components/HelpingCenter/HelpingCenter.vue'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      // redirect: '/home',
      children: [{
          path: '/home',
          component: Home
        },
        {
          path: '/hc/list',
          component: HelpingCenter
        }
      ]
    },

  ]
})
// router.beforeEach((to, from ,next) => {
//   if (!to.meta.isPublic && !localStorage.token) {
//     return next('/login')
//   }
//   next()
// })
export default router
