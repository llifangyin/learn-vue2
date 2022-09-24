事件修饰符
.stop阻止冒泡
.prevent  form提交表单不再重载页面
.capture 添加事件监听器时使用事件捕获模式  : 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 
.self 只当在 event.target 是当前元素自身时触发处理函 : 即事件不是从内部元素触发的 -(跟stop很香 stop到selft这一层级)
.once 
.passive 主要用在移动端的scroll事件，来提高浏览器响应速度，提升用户体验。

.keyup