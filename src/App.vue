<template>
  <div id="app" class="container">
    <div class="navbar">
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/demo">Demo</router-link> |
      <router-link to="/feedback">Share Feedback</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
