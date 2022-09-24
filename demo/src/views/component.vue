<template>
  <div class="home">
     <HelloWorld  msg="Welcome to Your Vue.js App">
        {{user.name}}
        <br>
        <!-- 作用域插槽 可以使用子组件的对象 -->
        <template v-slot:foo='slotProps'>
         scopeslot {{slotProps.car}}
        </template>
        <template v-slot:header >
          this is header slot
        </template>
        <template #content>this is conent slot</template>
    </HelloWorld>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
        user:{
        name:'this is a slot'
      },
      arr:[1,2,3]
    }
  },
  created() {
    //Vue 不能检测以下数组的变动：
    setTimeout(() => {
      // this.arr[1]=99
      // this.arr.length = 1
      this.$set(this.arr,0,99)
      this.arr.splice(2,1)
    }, 1000);
  },
}
</script>
