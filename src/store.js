import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import { get } from 'lodash'
import db from './sampleData'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: db,
  getters: {
    currentUser: state =>  get(state, 'users.uuid0', { id: '', name: '', surveyAvailable: false }),
    questionsIndex: state => Object.keys(state.questions), // this getter might use a sort order prop on the questions when using a db.
  },
  mutations: {
    RECORD_ANSWER(state, { user, question, answer }) {
      state.feedback[user][question] = answer
    },
    FEEDBACK_COMPLETE(state, { userId }) {
      state.users[userId].flags.feedbackComplete = true
    },
    MARK_FEEDBACK_VIEWED(state, { userId }) {
      state.users[userId].flags.feedbackViewed = true
    }
  },
  actions: {

  }
})
