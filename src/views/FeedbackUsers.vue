<template>
  <div class="feedback container">
    <h1 class="title is-3">Share Feedback</h1>
    <div class="container" style="max-width: 600px; border: 1px solid #eee; border-radius: 3px;">
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :avatar="user.avatar"
        style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;"
      >
        <template slot="right">
          <a
            v-if="!user.flags.feedbackComplete"
            class="button is-primary"
            @click.prevent="startSurveyFor(user.id)"
          >Fill Out</a>
          <a
            v-if="user.flags.feedbackComplete"
            class="button"
            @click.prevent="viewSubmissionFor(user.id)"
          >View Submission</a>
        </template>
      </user-item>

      <!-- <div
      v-for="user in users"
      :key="user.id"
      class="level"
      style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;">
      <div class="level-left">
        <img :src="user.avatar" alt="" class="level-item">
        <h3 class="level-item title is-4">{{ user.name }}</h3>
      </div>
      <div class="level-right">
        <a
          v-if="!user.feedbackComplete"
          class="button is-primary"
          @click.prevent="startSurveyFor(user.id)">Fill Out</a>
        <a
          v-if="user.feedbackComplete"
          class="button"
          @click.prevent="viewSubmissionFor(user.id)">View Submission</a>
      </div>
      </div> -->
      <!-- <pre>{{ users }}</pre> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'feedbackUsers',
  components:{
    UserItem: () => import('@/components/UserItem')
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['users', 'questions', 'questionsIndex', 'feedback']),
    ...mapGetters(['currentUser']),
    firstQuestion() { return this.questionsIndex[0] }
  },
  methods: {
    startSurveyFor(userId) {
      this.$router.push({ name: 'feedbackQuestions', params: { userId }, query: { q: this.firstQuestion }})
    }
  }
}
</script>
