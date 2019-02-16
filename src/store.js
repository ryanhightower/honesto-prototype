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
  },
  mutations: {
    RECORD_ANSWER(state, { user, question, answer }) {
      state.feedback[user][question] = answer
    }
  },
  actions: {

  }
})
