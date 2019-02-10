<template>
  <div class="question-open">
    {{ question }},
     <b-field>
      <b-radio-button
        v-for="(unit, idx) in range"
        :key="idx"
        v-model="radioButton"
        :native-value="unit"
        type="is-primary">
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
          labels: {
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
      radioButton: ""
    }
  },
  computed: {
    range() {
      return range(this.scale.min, this.scale.max + this.scale.step, this.scale.step)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
