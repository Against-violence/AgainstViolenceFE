import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register/Register.vue'
import Login from '@/views/Login/Login.vue'
import Main from '@/views/Main/Main.vue'
import Home from '@/views/Home/Home.vue'
import HelpingCenter from '@/views/HelpingCenter/HelpingCenter.vue'
import MessageWall from '@/views/MessageWall'
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
      meta: {
        requireAuth: true
      },
      // redirect: '/home',
      children: [{
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/hc/list',
          name: 'hc',
          component: HelpingCenter,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/mw/index',
          name: 'mw',
          component: MessageWall,
          meta: {
            requireAuth: true
          }
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
