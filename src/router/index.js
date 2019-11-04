import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import Register from '@/views/Register/Register.vue'
import Login from '@/views/Login/Login.vue'
import Main from '@/views/Main/Main.vue'
import Home from '@/views/Home/Home.vue'
import HelpingCenter from '@/views/HelpingCenter/HelpingCenter.vue'
import SettingCenter from '@/views/SettingCenter/SettingCenter.vue'
import Expose from '@/views/Expose/Expose.vue'
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
      path: '/sc/home',
      name: 'scHome',
      component: SettingCenter,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/expose/home',
      name: 'expose',
      component: Expose,
      meta: {
        requireAuth: true
      }
    }
    ]
  },

  ]
})
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});
router.afterEach(route => {
  NProgress.done();
})
export default router
