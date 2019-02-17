import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'feedbackUsers' }
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
      path: '/feedback', // Don't navigate to parent directly. Used child route name.
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
    {
      path: '/my-feedback',
      component: () => import(/* webpackChunkName: "about" */ './views/MyFeedback.vue'),
      children: [
        {
          path: 'user/:userId',
          name: 'myFeedbackAnswers',
          component: () => import(/* webpackChunkName: "about" */ './views/MyFeedbackAnswers.vue'),
        }
      ]
    },
    {
      path: '/team-feedback',
      component: () => import(/* webpackChunkName: "about" */ './views/TeamFeedback.vue'),
      children: [
        {
          name: 'teamFeedbackAnswers',
          path: 'user/:userId',
          component: () => import(/* webpackChunkName: "about" */ './views/MyFeedbackAnswers.vue'),
        }
      ]
    },
    // {
    //   path: '/team-feedback',
    //   name: 'teamFeedback',
    //   component: () => import(/* webpackChunkName: "about" */ './views/TeamFeedback.vue')
    // },
  ]
})
