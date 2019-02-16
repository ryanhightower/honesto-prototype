import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'lodash'
import db from './sampleData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: db,
  getters: {
    currentUser: state =>  get(state, 'users.uuid0', { id: '', name: '', surveyAvailable: false }),
  },
  mutations: {
    RECORD_ANSWER(state, { user, question, answer }) {
      state.feedback[user][question] = answer
    }
  },
  actions: {

  }
})
