## 依赖收集
依赖：用到数据的地方
vue2 中等粒度依赖，用到数据的组件时依赖

在getter中收集依赖，在setter中触发依赖

## dep类和watcher类
把依赖收集的代码封装成一个dep类，它专门来管理依赖，每个observer实例，成员中都有一个dep实例
watcher是一个中介，数据变化时通过watcher中转，通知组件。
  
每一个Observer实例中都有一个Dep实例

## 总结：
 闭包
Vue能够实现如此强大的功能，离不开闭包的功劳：在defineReactive中就形成了闭包，这样每个对象的每个属性就能保存自己的值value和依赖对象dep。
1. 调用observe(obj)，将obj设置为响应式对象，observe函数，Observe, defineReactive函数三者互相调用，从而递归地将obj设置为响应式对象
2. 渲染页面时实例化watcher，这个过程会读取依赖数据的值，从而完成在getter中获取依赖
3. 依赖变化时触发setter，从而派发更新，执行回调，完成在setter中派发更新