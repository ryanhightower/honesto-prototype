<template>
  <div class="question-open">
    {{ question }}
    <b-field>
      <b-input type="textarea" v-model="internalValue" @input="handleInput" placeholder="Say something" />
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'QuestionOpen',
  props: {
    initialValue: [String, Number],
    value: String,
    question: {
      type: String,
      default: "Do you have any other feedback for this person?"
    }
  },
  data() {
    return {
      internalValue: this.initialValue,
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  },
  watch: {
    '$route' () {
      this.internalValue = this.initialValue;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
