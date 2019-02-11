<template>
  <div class="question-open">
    {{ question }},

    <b-radio-button
      v-for="choice in choices"
      :key="choice.value"
      v-model="internalValue"
      :native-value="choice.value"
      @input="handleInput"
      :type="type">
      <span>{{ choice.text }}</span>
    </b-radio-button>
  </div>
</template>

<script>
export default {
  name: 'QuestionMultipleChoice',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "is-primary"
    },
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
      internalValue: this.value
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
