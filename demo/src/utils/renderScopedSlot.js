  import Vue from 'vue'
  Vue.component('render-scopedslot',
  {
    render: function (createElement) {
// 用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。
      // console.log(this.$scopedSlots,111);
      // console.log(this.message,222);
// `<div><slot :text="message"></slot></div>`

      return createElement('div', [
        this.$scopedSlots.default({
          text:'23423423423'
        }),
        this.$scopedSlots.name1({
         content:'hello scoped'
        })
      ])
    },
    props:[
      'message'
    ]
  })