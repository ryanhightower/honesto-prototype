<template>
  <div class="feedback container">
    <h1 class="title is-3">Thank you for sharing your feedback!</h1>
    <p>Continue to give feedback to other team members.</p>
    <div class="container" style="max-width: 600px; border: 1px solid #eee; border-radius: 3px;">
    <user-item
        v-for="user in usersAvailableForFeedback"
        :key="user.id"
        :name="user.name"
        :avatar="user.avatar"
        style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;"
      >
      <template slot="right">
        <a
            v-if="!user.flags.feedbackComplete"
            class="button is-primary"
            @click.prevent="navigateTo(startFeedbackRoute(user.id))"
          >Fill Out</a>
          <a
            v-if="user.flags.feedbackComplete"
            class="button"
            @click.prevent="navigateTo(viewFeedbackRoute(user.id))"
          >View Submission</a>
      </template>
    </user-item>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'feedbackComplete',
  components:{
    UserItem: () => import('@/components/UserItem')
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['users', 'questions', 'feedback']),
    ...mapGetters(['currentUser', 'questionsIndex']),
    usersAvailableForFeedback() { return Object.values(this.users).filter( user => !user.flags.feedbackComplete ) },
    firstQuestion() { return this.questionsIndex[0] }
  },
  methods: {
    startFeedbackRoute(userId) {
      return { name: 'feedbackQuestions', params: { userId }, query: { q: this.firstQuestion }}
    },
    viewFeedbackRoute(userId) {
      return { name: "myFeedbackAnswers", params: { userId } }
    },
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
