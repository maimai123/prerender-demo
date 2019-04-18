<template>
  <div id="app">
    <div class="header">
      <router-link tag="a" :to="'/'">Home</router-link>
      <router-link tag="a" :to="'/about'">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .header {
    a {
      margin-right: 10px;
    }
  }
}
</style>
