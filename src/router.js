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
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import(/* webpackChunkName: "about" */ './views/Feedback.vue'),
      children: [
        {
          path: '/feedback/',
          name: 'feedbackUsers',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackUsers.vue'),
        },
        {
          path: '/feedback/user/:userId',
          name: 'feedbackQuestions',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackQuestions.vue'),
        },
        {
          path: '/feedback/complete',
          name: 'feedbackComplete',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackComplete.vue'),
        },
      ]
    },
    // {
    //   path: '/feedback/u/:userId',
    //   name: 'feedback',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Feedback.vue')
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
