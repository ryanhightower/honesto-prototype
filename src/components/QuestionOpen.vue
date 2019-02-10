<template>
  <div class="question-open">
    {{ question }},
    <b-field>
      <b-input type="textarea" />
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'QuestionOpen',
  props: {
    question: {
      type: String,
      default: "Do you have any other feedback for this person?"

    },
    model: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
