computed 与 function 
不同的是计算属性是基于它们的响应式依赖进行缓存的。只有响应式依赖发生改变时才会重新求值
computed计算属性默认只有getter
需要时也可也设置seter
`` js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
``



watch 选项允许我们执行异步操作,限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。