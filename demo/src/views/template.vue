<template>
  <div id="app">
    <div v-once>{{test}}</div>
    {{test2}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      test:'v-once 再赋值不会修改初始值',
      test2:'普通绑定{{}}'
    }
  },
  components: {
  },
  created() {
    setTimeout(() => {
      this.test = '1秒后的值~~'
      this.test2 = '1秒后的值~~'
    }, 1000);
  },
}
</script>

<style>

</style>
