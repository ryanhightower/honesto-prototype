<template>
  <div class="my-feedback-answers" style="border: 1px solid #D9DCDE;">
    <div class="user-list column" style="padding: 0;">
        <span style="display: block; padding: 10px 13px; border-bottom: 1px solid #D9DCDE;">
          <h6 class="title is-5">{{ teammate.name }}'s Feedback</h6>
        </span>
    </div>
    <div
      v-for="(questionId, idx) in questionsIndex"
      :key="idx"
      style="margin: 0; border-bottom: 1px solid #eee;"
      :class="{columns : questions[questionId].type !== 'open'}"
    >
      <div :class="['question', { column : questions[questionId].type !== 'open' }]"
      >{{ questions[questionId].question }}</div
      >
      <div :class="['answer', { column : questions[questionId].type !== 'open' }]"
      >{{ answers[questionId] }}</div
      >

    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: 'MyFeedbackAnswers',
  components:{},
  data() {
    return {}
  },
  computed: {
    ...mapState(['users', 'questions', 'feedback']),
    ...mapGetters(['currentUser', 'questionsIndex']),
    userId() { return this.$route.params.userId },
    teammate() { return this.users[this.userId] },
    answers() { return this.feedback[this.userId] }
  },
}
</script>

<style lang="scss">
  .answer:not(.column), .question:not(.column) { padding: 0.75rem }
  .answer:not(.column) { white-space: pre-line; }
</style>
