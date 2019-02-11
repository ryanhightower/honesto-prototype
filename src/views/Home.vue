<template>
  <div class="home container">

    <h1 class="title is-3">Share Feedback</h1>
    <div class="container" style="max-width: 600px; border: 1px solid #eee; border-radius: 3px;">
    <div
      v-for="user in users"
      :key="user.id"
      class="level"
      style="margin: 0; padding: 20px; border-bottom: 1px solid #eee;">
      <div class="level-left">
        <!-- <figure class="media-left"> -->
          <img :src="user.avatar" alt="" class="level-item">
        <!-- </figure> -->
        <h3 class="level-item title is-4">{{ user.name }}</h3>
      </div>
      <div class="level-right">
        <a
          v-if="user.surveyAvailable"
          class="button is-primary"
          @click.prevent="startSurveyFor(user.id)">Fill Out</a>
        <a
          v-if="! user.surveyAvailable"
          class="button"
          @click.prevent="viewSubmissionFor(user.id)">View Submission</a>
      </div>
    </div>
    <pre>{{ users }}</pre>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  name: 'home',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['users', 'surveys']),
    ...mapGetters(['currentUser'])
  },
}
</script>
