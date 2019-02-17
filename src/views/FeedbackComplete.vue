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
          class="button is-primary"
          @click.prevent="startSurveyFor(user.id)">Fill Out</a>
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
