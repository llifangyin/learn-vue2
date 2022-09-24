props 命名camelCase驼峰 和 kebab-case等价

props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}

单向数据流
父级 prop 的更新会向下流动到子组件中，但是反过来则不行。不建议

也可以：
 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。

给组件绑定事件:多级的时候
**$listeners $attrs**  将所有的事件监听器指向这个组件的某个特定的子元素。

## .sync修饰符

在父子组件传递参数时使用。
v-bind:title.sync="doc.title" ===>  v-bind:title="doc.title"  + v-on:update:title="doc.title = $event"
:prop.sync = 'title' 是一种缩写，子组件修改值，父附件异步刷新 

## v-slot 指令
<!-- 父组件 -->
<navigation-link url="/profile">
  Your Profile {{user.name}} //user是父级作用域
</navigation-link>

<!-- 子组件 -->
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>

编译作用域：
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

具名插槽:  缩写 #header === v-slot:header(只有在是参数时有效)
子组件定义：<header>  <slot name="header"></slot> </header>
父组件使用（只能用在template里）；<base-layout> <template v-slot:header>  <h1>xxx</h1>  </template> </base-layout>
或者：                     <slot name="header"></slot>

作用域插槽：
父组件：
<current-user>
  {{ user.firstName }}
</current-user>

<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
子组件：
<span>
  <slot v-bind:user='user'>{{ user.lastName }}</slot>
</span>

## 解构插槽： (使用报错啦？)
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>


父子组件调用防范
$emit
$on 侦听一个事件
$once 一次侦听一个事件
$off 停止侦听一个事件
<!-- this.$once('hook:beforeDestroy', function () {
  picker.destroy()
}) -->

## 递归组件 通过name实现 和组件名一致
name: 'unique-name-of-my-component'


模板定义的替代品
inlie-template 内联模板
当 inline-template 这个特殊的 attribute 出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。

x-template
另一个定义模板的方式是在一个 <!-- <script>  -->元素中，并为其带上 text/x-template 的类型，然后通过一个 id 将模板引用过去
<!-- 
<script type="text/x-template"  id="hello-world-template">
  <p>Hello hello hello</p>
</script> -->
Vue.component('hello-world', {
  template: '#hello-world-template'
})

## 强制更新：如果强制更新，99.9%的情况时某个地方做错了
$forceupdate

v-once 
有的时候你可能有一个组件，这个组件包含了大量静态内容。在这种情况下，你可以在根元素上添加 v-once attribute 以确保这些内容只计算一次然后缓存起来
