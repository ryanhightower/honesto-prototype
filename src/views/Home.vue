<template>
  <div class="home">
    <h1 class="title is-1">Question Types</h1>
    <h3 class="title is-5">Free Form</h3>
    <QuestionOpen />
    <br>
    <h3 class="title is-5">Multiple Choice</h3>
    <QuestionMultipleChoice />
    <br>
    <h3 class="title is-5">Scale</h3>
    <QuestionScale />
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
  }
}
</script>
