<template>
  <div id="app">
    <button v-on:click="show = !show">Toggle</button>
    <h4>
      可以配合使用第三方 JavaScript 动画库，如 Velocity.js
    </h4>
    <h4>
      在 CSS 过渡和动画中自动应用 class
    </h4>
    <h4>
      在过渡钩子函数中使用 JavaScript 直接操作 DOM
    </h4>
    <h4>
      可以配合使用第三方 CSS 动画库，如 Animate.css
    </h4>
    <!-- 当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除)
 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同) -->

    <!-- 过渡的类名 -->
    <!-- v-enter
 v-enter-active
 v-enter-to
 v-leave
 v-leave-active
 v-leave-to -->
    <transition name="test">
      <p v-if="show">过渡类名 v- 和 transiton里的name一致</p>
    </transition>
    <transition name="bounce">
      <p v-if="show" :duration="4000">animate使用一样</p>
    </transition>
    <!-- duration="{ enter: 3000, leave: 4000 }" -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <!-- v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled" -->
      <p v-if="show">
        使用animate.css 自定义过渡类名 以属性形式使用 enter-class|
        enter-active-class| enter-to-class | leave-class| leave-active-class|
        leave-to-class
        <br />
        显性的过渡持续时间 duration="{ enter: 3000, leave: 4000 }" // 当只用
        JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。 //
        否则，它们将被同步调用，过渡会立即完成。
      </p>
    </transition>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">Demo</p>
    </transition>
    <h1>列表过渡</h1>
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <h1>lodash 列表排序过渡</h1>
      <div id="flip-list-demo" class="demo">
        <button v-on:click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
          <li v-for="item in items" v-bind:key="item">
            {{ item }}
          </li>
        </transition-group>

        <div id="list-complete-demo" class="demo">
          <button v-on:click="shuffle">Shuffle</button>
          <button v-on:click="add">Add</button>
          <button v-on:click="remove">Remove</button>
          <transition-group name="list-complete" tag="p">
            <span
              v-for="item in items"
              v-bind:key="item"
              class="list-complete-item"
            >
              {{ item }}
            </span>
          </transition-group>
        </div>
      </div>
    </div>

    <h1>动态过渡</h1>
    <div id="dynamic-fade-demo" class="demo">
      Fade In:
      <input
        type="range"
        v-model="fadeInDuration"
        min="0"
        v-bind:max="maxFadeDuration"
      />
      Fade Out:
      <input
        type="range"
        v-model="fadeOutDuration"
        min="0"
        v-bind:max="maxFadeDuration"
      />
      <transition
        v-bind:css="false"
        v-on:before-enter="beforeEnter1"
        v-on:enter="enter1"
        v-on:leave="leave1"
      >
        <p v-if="show">hello</p>
      </transition>
      <button
        v-if="stop"
        v-on:click="
          stop = false;
          show = false;
        "
      >
        Start animating
      </button>
      <button v-else v-on:click="stop = true">Stop it!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      isEditing: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true,
    };
  },
  components: {},
  computed: {},
  created() {
    setTimeout(() => {
      this.isEditing = false;
    }, 1000);
  },
  methods: {
    beforeEnter1: function (el) {
      el.style.opacity = 0;
    },
    enter1: function (el, done) {
      var vm = this;
      this.Velocity(
        el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: function () {
            done();
            if (!vm.stop) vm.show = false;
          },
        }
      );
    },
    leave1: function (el, done) {
      var vm = this;
      this.Velocity(
        el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: function () {
            done();
            vm.show = true;
          },
        }
      );
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter: function (el, done) {
      this.Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      this.Velocity(el, { fontSize: "1em" }, { complete: done });
    },
    leave: function (el, done) {
      this.Velocity(
        el,
        { translateX: "15px", rotateZ: "50deg" },
        { duration: 600 }
      );
      this.Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      this.Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0,
        },
        { complete: done }
      );
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function () {
      this.items = this.lodash.shuffle(this.items);
    },
  },
};
</script>

<style>
.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s;
}
.test-enter,
.test-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 1s;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
