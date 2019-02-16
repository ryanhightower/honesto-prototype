<template>
  <div class="feedback">
    <div class="level">
      <div class="level-left"  style="text-align: left;">
        <div>
          <h1 class="title is-4">{{ question.question }}</h1>
          <h3 class="level-item title is-6">Share your feedback for {{ teammate.name }}</h3>
        </div>
      </div>
      <div class="level-right">
        <img :src="teammate.avatar" alt="" class="level-item">
      </div>
    </div>

    <component
      :is="questionComponent"
      :question="''"
      :scale="question.scale"
      :choices="question.choices"
      :initialValue="currentAnswer"
      v-model="answer"></component>

    <div class="survey-nav level">
      <span class="level-left">
        <a class="button"
          @click="navigateTo(qRoute(previousQ))"
          :disabled="!previousQ"
        >Previous</a></span>
      <span>
        <a class="button"
          @click="navigateTo(qRoute(nextQ))"
          :disabled="false"
        >Skip</a></span>
      <span class="level-right">
        <a class="button"
          @click="commitAnswer"

          :disabled="!nextQ">Next</a></span>
    </div>
    <pre>{{ question }}</pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import { get } from 'lodash'

export default {
  name: 'FeedbackQuestions',
  components: {
    QuestionScale: () => import('@/components/QuestionScale'),
    QuestionMultipleChoice: () => import('@/components/QuestionMultipleChoice'),
    QuestionOpen: () => import('@/components/QuestionOpen'),
  },
  data() {
    return {
      answer: ""
    }
  },
  computed: {
    ...mapState([
      'users',
      'questions',
      'questionsIndex',
      'feedback'
      // 'surveys'
      ]),
    ...mapGetters(['currentUser']),
    userId() { return this.$route.params.userId },
    teammate() { return this.users[this.userId] },
    // survey() { return this.surveys[this.$route.query.s] || 'uuid1' },
    questionId() { return this.$route.query.q },
    question() { return this.questions[this.questionId] || 'uuid1' },
    currentIndex() { return this.questionsIndex.indexOf(this.questionId) },
    currentAnswer() { return this.feedback[this.userId][this.questionId] },
    questionComponent() {
      return `Question${ this.capitalize(this.question.type) }`
      // return import(`@/components/Question${ this.capitalize(this.question.type) }`)
    },
    nextQ() {
      if (this.isLastQ) return null // TODO: if isLast, submit or finish survey
        const nextIdx = this.currentIndex + 1
        return this.questionsIndex[nextIdx]
    },
    previousQ() {
      if (this.currentIndex === 0) return null
      const nextIdx = this.currentIndex - 1
      return this.questionsIndex[nextIdx]
    },
    isLastQ() { return this.currentIndex === this.questionsIndex.length - 1 }
  },
  methods: {
    capitalize(str) {
      if (typeof str !== 'string') return ''
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    navigateTo(route){
      if (!route) return
      this.$router.push(route)
    },
    qRoute(questionId) {
      if (!questionId) return null
      return {
        name: 'feedbackQuestions',
        query: { q: questionId }
      }
    },
    commitAnswer() {
      this.$store.commit('RECORD_ANSWER', {
        user: this.teammate.id,
        question: this.questionId,
        answer: this.answer
      })
      this.answer = ""
    }
  }
}
</script>
