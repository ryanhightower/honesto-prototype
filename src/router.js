import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/QuestionDemo')
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/give-feedback',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/GiveFeedback.vue')
    // },
    // {
    //   path: '/my-feedback',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/MyFeedback.vue')
    // },
    // {
    //   path: '/team-feedback',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/TeamFeedback.vue')
    // },
  ]
})
