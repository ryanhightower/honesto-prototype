<template>
  <div class="feedback container" style="disp">
    <!-- <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
    > -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: 'feedback',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['users', 'surveys']),
    ...mapGetters(['currentUser'])
  },
  methods: {
    startSurveyFor(userId){
      this.$router.push({ name: "feedbackQuestions", params: { userId }})
    }
  }
}
</script>
