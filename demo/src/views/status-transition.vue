<template>
  <div>
    <h2>Vue 的过渡系统提供了非常多简单的方法设置进入、离开和列表的动效</h2>
    <li>数字和运算</li>
    <li>颜色的显示</li>
    <li>SVG 节点的位置</li>
    <li>元素的大小和其他的 property</li>
    <div id="animated-number-demo">
      <input v-model.number="number" type="number" step="20" />
      <p>{{ animatedNumber }}</p>
    </div>

    <h5>
        颜色 tween.js color.js
    </h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number: function (newValue) {
      this.gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },
};
</script>

<style>
</style>