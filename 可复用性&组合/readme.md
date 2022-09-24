## mixin
xxx.js 定义
export default{
    xxx
}

xxx.vue使用
mixin:[xxx]

## 自定义指令
<div v-xxx:arg='value'>123</div>
<div v-xxx:arg.active='a + b'></div>
VUE.directive('xxx',{
    xxx1(el,binding,vnode,oldNode){
        el ==> dom ==> div
        binding.name ==> xxx
        binding.arg ==>  arg
        binding.value ==> value
        binding.expression ==> a + b || undefined
        binding.modifier ==> active
        binding.oldValue ==> 123
        vnode ==> 编译生成的虚拟节点
        oldNode 上一个虚拟节点
    },
    xxx2(){
     xxx   
    }
})


## render && jsx

# 虚拟DOM
return createElement('h1', this.blogTitle)

createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“VNode”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。
## 参数： createElement(string|obj|func,{obj},string|[vnode]) 

createElement(
    'div',{obj,可选，与模板中attr对应的数据对象},['xxx',vnode1.createElemnt('h1','一个虚拟节点')]
)

中间的数据对象可以为：
attrs:{}  class:{} attrs:{} props:{} domProps:{} on:{} nativeOn:{} dirctives:[{xxx}] 
scopedSlots:{} slot:xxx key:xxx ref:xxx refInfor:true

# 约束
第三个参数 [vnode]只能有一个，若想渲染多个：
 Array.apply(null, { length: 20 }).map(function () {
    return createElement('p', 'hi')
})





## 函数式组件 functional  Stateless  Instanceless（无状态 无实例）
当使用函数式组件时，该引用将会是 HTMLElement，因为他们是无状态的也是无实例的。
因为函数式组件只是函数，所以渲染开销也低很多。

** 在作为包装组件时它们也同样非常有用。比如，当你需要做这些时：**
程序化地在多个组件中选择一个来代为渲染；
在将 children、props、data 传递给子组件之前操作它们。

声明：
Vue.component('my-component', { functional: true,xxx}

单文件组件：
<template functional>
</template>

slot.default返回默认的slot
slot.name 返回 v-slot:name的元素
children返回所有子元素


