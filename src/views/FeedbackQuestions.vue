<template>
  <div class="feedback">
    <div class="level">
      <div class="level-left"  style="text-align: left; max-width: calc(100% - 70px);">
        <div>
          <h1 class="question title is-4" style="margin-bottom: 10px;">{{ question.question }}</h1>
          <span class="" style="font-size: 12px; color: #ACB1B6;">SHARE YOUR FEEDBACK FOR {{ teammate.name.toUpperCase() }}</span>
        </div>
      </div>
      <div class="level-right">
        <img :src="teammate.avatar" alt="" class="level-item">
      </div>
    </div>

    <div class="answer" style="box-shadow: 0 0 4px rgba(0,0,0,.25); padding: 20px;">
      <component
        :is="questionComponent"
        :question="''"
        :scale="question.scale"
        :choices="question.choices"
        :initialValue="currentAnswer"
        v-model="answer"
        ></component>

      <div class="survey-nav level" style="margin-top: 30px;">
        <span class="level-left">
          <button class="button"
            @click="navigateTo(qRoute(previousQ))"
            :disabled="!previousQ"
          >Previous</button></span>
        <span>
          <button class="button"
            @click="navigateTo(qRoute(nextQ))"
            v-if="question.skippable"
          >Skip</button></span>
        <span class="level-right">
          <button class="button"
            @click="[commitAnswer(), navigateTo(qRoute(nextQ)), markFeedbackComplete()]"

            :disabled="!currentAnswer && answer===''">{{ isLastQ ? "Finish" : "Next" }}</button></span>
      </div>

    </div>
    <!-- <pre>{{ question }}</pre> -->
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
      'feedback'
      // 'surveys'
      ]),
    ...mapGetters(['currentUser', 'questionsIndex']),
    userId() { return this.$route.params.userId },
    teammate() { return this.users[this.userId] || { name: '' } },
    // survey() { return this.surveys[this.$route.query.s] || 'uuid1' },
    questionId() { return this.$route.query.q },
    question() { return this.questions[this.questionId] || 'uuid1' },
    currentIndex() { return this.questionsIndex.indexOf(this.questionId) },
    currentAnswer() { return this.userId && this.questionId ? this.feedback[this.userId][this.questionId] : '' },
    questionComponent() {
      return `Question${ this.capitalize(this.question.type) }`
    },
    nextQ() {
      if (this.isLastQ) return "complete"  // TODO: if isLast, submit or finish survey
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
      this.answer = ""
      this.$router.push(route)
    },
    qRoute(questionId) {
      if (!questionId) return null
      if (questionId === "complete") return { name: 'feedbackComplete', path: '/feedback/complete' }
      return {
        name: 'feedbackQuestions',
        query: { q: questionId }
      }
    },
    commitAnswer() {
      if (this.answer === '' || this.answer === this.currentAnswer) return;
      this.$store.commit('RECORD_ANSWER', {
        user: this.teammate.id,
        question: this.questionId,
        answer: this.answer
      })
    },
    markFeedbackComplete() {
      if (this.isLastQ)
        this.$store.commit('FEEDBACK_COMPLETE', {
          userId: this.teammate.id
        })
    }
  }
}
</script>
