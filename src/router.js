import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'feedback' }
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
          path: '/',
          name: 'feedbackUsers',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackUsers.vue'),
        },
        {
          path: 'user/:userId',
          name: 'feedbackQuestions',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackQuestions.vue'),
        },
        {
          path: 'complete',
          name: 'feedbackComplete',
          component: () => import(/* webpackChunkName: 'about' */ './views/FeedbackComplete.vue'),
        },
      ]
    },
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
