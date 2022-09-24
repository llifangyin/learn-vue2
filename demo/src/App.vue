<template>
  <div id="app">
    <nav>
      <router-link to="/component">component</router-link> |
      <router-link to="/eventCompo">event</router-link>|
      <router-link to="/template">template</router-link>|
      <router-link to="/transition">transition</router-link>|
      <router-link to="/status-transition">statustransition</router-link>|
      <router-link to="/mixin">mixin</router-link>|
      <router-link to="/directive-comp">directive</router-link>|
      <router-link to="/render">render</router-link>|
      <router-link to="/filter">filter</router-link>|
      
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
  },
}
</script>
<style lang="less">
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2f90b9;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
