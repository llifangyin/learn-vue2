  import Vue from 'vue'
  Vue.component('renderSlot',
  {
    render: function (createElement) {
    //   this.$slots 访问静态插槽的内容，每个插槽都是一个 VNode 数组：
      // console.log(this.$slots,'this.$slots');
    return createElement('div', this.$slots.default)
    }
  })