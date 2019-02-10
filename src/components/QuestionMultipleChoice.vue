<template>
  <div class="question-open">
    {{ question }},

    <b-checkbox-button
      v-for="choice in choices"
      :key="choice.value"
      v-model="value"
      :native-value="choice.value"
      type="is-success">
      <b-icon icon="check"></b-icon>
      <span>{{ choice.text }}</span>
    </b-checkbox-button>
  </div>
</template>

<script>
export default {
  name: 'QuestionMultipleChoice',
  props: {
    question: {
      type: String,
      default: "Which option do you want?"
    },
    choices: {
      type: Array,
      default(){
        return [{ text: "Option 1", value: 1 }, { text: "Option 2", value: 2 }, { text: "Option 3", value: 3 }]
      }
    },
    model: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    }
  },
  computed: {
    // localModel(){
    //   return  this.model || model
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
