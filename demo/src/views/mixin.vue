<template>
  <div id="app">
  </div>
</template>

<script>
import count from '../mixin/count'
export default {
  // 自定义选项合并策略
//   const merge = Vue.config.optionMergeStrategies.computed
// Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
//   if (!toVal) return fromVal
//   if (!fromVal) return toVal
//   return {
//     getters: merge(toVal.getters, fromVal.getters),
//     state: merge(toVal.state, fromVal.state),
//     actions: merge(toVal.actions, fromVal.actions)
//   }
  mixins:[count],
  name: 'App',
  data() {
    return {
    }
  },
  components: {
  },
  created() {
    console.log(this.count());
  },
}
</script>

<style>

</style>
