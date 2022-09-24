  import Vue from 'vue'
  Vue.component('child',
  {
    render: function (createElement) {
      return createElement('div', this.$slots.default)
      }
  })
  Vue.component('render-scopedslot2',
  {
    render: function (createElement) {
// 用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。
// 给另一个组件 赋作用域
      return createElement('div', [
        createElement('child', {
          // 在数据对象中传递 `scopedSlots`
          // 格式为 { name: props => VNode | Array<VNode> }
          scopedSlots: {
            default: function (props) {
              return createElement('span', props.text)
            }
          }
        })
      ])
    },
    props:[
      'text'
    ]
  })