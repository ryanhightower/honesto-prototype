<template>
  <div id="app">
    <div class="navbar">
        <div class="container">

        <div class="navbar-brand">
          <router-link to="/feedback" class="navbar-item">
            <h1 class="title is-5">Honesto</h1>
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <router-link to="/feedback">Share Feedback</router-link>
            </div>
            <div class="navbar-item">
              <router-link :to="{ name: 'myFeedbackAnswers', params: { userId: 'userId1' }}">My Feedback</router-link>
            </div>
            <div class="navbar-item">
              <router-link :to="{ name: 'teamFeedbackAnswers', params: { userId: 'userId1' }}">Team Feedback</router-link>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
// colors
$text-light: #ACB1B6;
$border-grey: #D9DCDE;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;

  .navbar {
    border-bottom: 1px solid #D9DCDE;
    background-color: #F2F3F4;
    margin-bottom: 50px;
  }
}
</style>
