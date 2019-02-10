<template>
  <div class="question-open">
    {{ question }},
     <b-field>
      <b-radio-button
        v-for="(scalar, idx) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="idx"
        v-model="radioButton"
        :native-value="scalar"
        type="is-primary">
        <span>{{scalar}}</span>
      </b-radio-button>
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
  },
  data() {
    return {
      radioButton: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
