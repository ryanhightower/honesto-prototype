<template>
  <div class="my-feedback container">
    <h1 class="title is-3">My Feedback</h1>
    <user-item
      v-for="user in usersWithFeedback"
      :key="user.id"
      :name="user.name"
      :avatar="user.avatar"
      style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;"
    >
      <b-tag type="is-primary" v-show="!user.flags.feedbackViewed">New</b-tag>

      <template slot="right"></template>
    </user-item>

    <!-- <div
      v-for="user in users"
      :key="user.id"
      class="level"
      style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;">
      <div class="level-left">
        <img :src="user.avatar" alt="" class="level-item">
        <h3 class="level-item title is-4">{{ user.name }}</h3>
      </div>
      <div class="level-right">
        <a
          v-if="!user.feedbackComplete"
          class="button is-primary"
          @click.prevent="startSurveyFor(user.id)">Fill Out</a>
        <a
          v-if="user.feedbackComplete"
          class="button"
          @click.prevent="viewSubmissionFor(user.id)">View Submission</a>
      </div>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: 'MyFeedback',
  components:{
    UserItem: () => import('@/components/UserItem')
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['users', 'questionsIndex']),
    ...mapGetters(['currentUser']),
    usersWithFeedback() { return Object.values(this.users).filter( user => user.feedbackComplete ) },
  },
  methods: {
    startSurveyFor(userId){
      this.$router.push({ name: "feedbackQuestions", params: { userId }})
    }
  }
}
</script>
