<template>
  <div class="">
    <h3>测试 @click.self 和 v-model.trim.lazy</h3>
    <input type="text" v-model.trim.lazy="value" @input="inputHandler"  @change="changeHandler">
    <div class="outer" @click="getTarget($event)">
          <div class="mid" @click.self="getTarget($event)">
                <div class="inner" @click="getTarget($event)"></div>
          </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      value:'v-model.trim.lazy'
    }
  },
  methods: {
    getTarget(ev){
              console.log('currentTarget: ', ev.currentTarget, 'target: ', ev.target)
     },
    fun1(params,p2){
      console.log(params,p2);
    },
    fun2(){
      console.log(222222);
    },
    inputHandler(){
      console.log('input',this.value);
    },
    changeHandler(){
      console.log('change',this.value);
    }
  },
}
</script>

<style>

.outer{
  height: 500px;
  background: #2c3e50;
}
.mid{
  height: 300px;
  background: #666;;
}
.inner{
  height: 100px;
  background: #e2e2e2;
}
</style>
