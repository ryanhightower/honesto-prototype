<template>
  <div class="user-item level">
    <div class="level-left">
      <img :src="avatar" v-if="avatar" :alt="name" class="level-item">
      <h3 class="level-item title is-4">{{ name }}</h3>
    </div>

    <slot></slot>

    <div class="level-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    name: {
      type: String,
      default: ""
    },
    avatar: String,
    id: String,
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.user-item.level {
  cursor: pointer;
  margin: 0;
  padding: 20px;
  border-bottom: 1px solid #D9DCDE;

  &:hover {
    background-color: #D5B0F21A
  }
  // &:not(:last-child) {
  // }
}

</style>
