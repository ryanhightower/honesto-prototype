<template>
  <div class="my-feedback container">
    <h1 class="title is-3">My Feedback</h1>
    <div class="columns">

      <div class="user-list column" style="max-width: 380px; border: 1px solid #D9DCDE; border-right:none; padding: 0;">
        <span style="display: block; padding: 10px 13px; border-bottom: 1px solid #D9DCDE;">
          <h6 class="title" style="font-size: 12px">FEEDBACK RECEIVED</h6>
        </span>
        <user-item
          v-for="user in usersWithFeedback"
          :key="user.id"
          :name="user.name"
          :avatar="user.avatar"
          @click.native="navigateTo(feedbackRoute(user.id))"
          :class="{ active: $route.params.userId === user.id }"
        >
          <b-tag type="is-primary" v-show="!user.flags.feedbackViewed">New</b-tag>

          <template slot="right"></template>
        </user-item>
      </div>

      <div class="column" style="padding: 0;">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { delay } from 'lodash'

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
    ...mapState(['users']),
    ...mapGetters(['currentUser', 'questionsIndex']),
    usersWithFeedback() { return Object.values(this.users).filter( user => user.flags.feedbackComplete ) },
    userId() { return this.$route.params.userId }
  },
  methods: {
    feedbackRoute(userId) {
      return { name: "myFeedbackAnswers", params: { userId } }
    },
    navigateTo(route) {
      this.$router.push(route)
    },
    markViewed(userId) {
      if (!this.users[this.userId].flags.feedbackViewed)
        this.$store.commit('MARK_FEEDBACK_VIEWED', { userId })
    }
  },
  watch: {
    '$route' (to) {
        if ( to.params.userId )
          delay(() => this.markViewed(to.params.userId), 3 * 1000)
    }

  }
}
</script>

<style lang="scss">
.my-feedback {
  .user-item.active {
    background-color: #F2F3F4;
  }
}
</style>
