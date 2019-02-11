<template>
  <div class="demo">
    <h1 class="title is-1">Demo of Question Types</h1>
    <h3 class="title is-5">Free Form</h3>
    <QuestionOpen v-model="answers.open" />
    <br>
    <h3 class="title is-5">Multiple Choice</h3>
    <QuestionMultipleChoice v-model="answers.multipleChoice" />
    <br>
    <h3 class="title is-5">Scale</h3>
    <QuestionScale v-model="answers.scale" />
    <h3 class="title is-5">Answers</h3>
    <pre>{{ answers }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionOpen from '@/components/QuestionOpen.vue'
import QuestionMultipleChoice from '@/components/QuestionMultipleChoice.vue'
import QuestionScale from '@/components/QuestionScale.vue'

export default {
  name: 'home',
  components: {
    QuestionOpen,
    QuestionMultipleChoice,
    QuestionScale
  },
  data() {
    return {
      answers: {
        open: "",
        multipleChoice: 0,
        scale: 0
      }
    }
  }
}
</script>
