Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

每个组件实例都对应一个watcher，它会组件渲染的过程中把接触过的数据property记录为依赖。之后当依赖项的setter触发时，会通知watcher,从而使它关联的组件重新渲染。

由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

## vue.$set(obj,property)
对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。

## ep:  不会触发更新 ×  // 代替 Object.assign(this.someObject, { a: 1, b: 2 })
## ep:  触发更新 √  //  Object.assign({},this.someObject,{a:1,b:2})


# 异步更新队列
Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver(监听dom变动后执行) 和 setImmediate（不阻塞线程），如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
