<template>
  <div class="question-open">
    {{ question }},
     <b-field>
      <b-radio-button
        v-for="(unit, idx) in range"
        :key="idx"
        v-model="internalValue"
        :native-value="unit"
        @input="handleInput"
        :type="type">
        <span>{{unit}}</span>
      </b-radio-button>
     </b-field>
  </div>
</template>

<script>
import { range } from "lodash"
export default {
  name: 'QuestionScale',
  props: {
    value: Number,
    type: {
      type: String,
      default: "is-primary"
    },
    question: {
      type: String,
      default: "How well does this person do X?"
    },
    scale: {
      type: Object,
      default() {
        return {
          min: 1,
          max: 10,
          step: 1,
          labels: { // Could be used to label the scale. e.g. 1 = Strongly disagree, 5 = Neither agree nor disagree, 10 = Strongly agree
            minLabel: "",
            maxLabel: "",
            midLabel: ""
          }
        }
      }
    },
    model: Object
  },
  data() {
    return {
      internalValue: this.value
    }
  },
  computed: {
    range() {
      return range(this.scale.min, this.scale.max + this.scale.step, this.scale.step)
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
