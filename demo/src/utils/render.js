var getChildrenTextContent = function (children) {
    return children.map(function (node) {
      return node.children
        ? getChildrenTextContent(node.children)
        : node.text
    }).join('')
  }
  import Vue from 'vue'
  Vue.component('anchored-heading',
  {
    render: function (createElement) {
      // 创建 kebab-case 风格的 ID
    //   console.log(this.$slots,111);
    //   this.$slots  用来访问被插槽分发的内容
      var headingId = getChildrenTextContent(this.$slots.default)
        .toLowerCase()
        .replace(/\W+/g, '-')
        .replace(/(^-|-$)/g, '')
  
      return createElement(
        'h' + this.level,
        [
          createElement('a', {
            attrs: {
              name: headingId,
              href: '#' + headingId
            }
          }, this.$slots.default) //每个插槽都是一个 VNode 数组：
        ]
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })