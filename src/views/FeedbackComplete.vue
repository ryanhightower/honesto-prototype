<template>
  <div class="feedback container">
    <h1 class="title is-3">Thank you for sharing your feedback!</h1>
    <p>Continue to give feedback to other team members.</p>
    <div class="container" style="max-width: 600px; border: 1px solid #eee; border-radius: 3px;">
    <div
      v-for="user in usersAvailableForFeedback"
      :key="user.id"
      class="level"
      style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;">
      <div class="level-left">
        <img :src="user.avatar" alt="" class="level-item">
        <h3 class="level-item title is-4">{{ user.name }}</h3>
      </div>
      <div class="level-right">
        <a
          class="button is-primary"
          @click.prevent="startSurveyFor(user.id)">Fill Out</a>
      </div>
    </div>
    <pre>{{ users }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'feedbackComplete',
  data() {
    return {}
  },
  computed: {
    ...mapState(['users', 'questions', 'questionsIndex', 'feedback']),
    ...mapGetters(['currentUser']),
    usersAvailableForFeedback() { return Object.values(this.users).filter( user => !user.feedbackComplete ) },
    firstQuestion() { return this.questionsIndex[0] }
  },
  methods: {
    startSurveyFor(userId){
      this.$router.push({ name: 'feedbackQuestions', params: { userId }, query: { q: this.firstQuestion }})
    }
  }
}
</script>
