<template>
  <div>
    <h1>directive</h1>
    <input type="text"  v-focus />
    <div v-custom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur nostrum tempora? Earum eligendi quia corporis ratione fugiat quo dolor, tenetur nihil veniam omnis ducimus, ex iste sequi aspernatur animi.</div>
    <div v-bin:foo='100'>bin dom</div>
  </div>
</template>

<script>
export default {
  directives: {
    custom: {
      // 钩子函数
      inserted: function (el) {
        // 除了el其他都是只读的参数
        el.focus()
      },
      bind:function(el){
      el.innerHTML =  'new value'
      // let str = 
      // 'name: '       + s(binding.name) + '<br>' +
      // 'value: '      + s(binding.value) + '<br>' +
      // 'expression: ' + s(binding.expression) + '<br>' +
      // 'argument: '   + s(binding.arg) + '<br>' +
      // 'modifiers: '  + s(binding.modifiers) + '<br>' +
      // 'vnode keys: ' + Object.keys(vnode).join(', ')
      // console.log(str);
      //   console.log(vnode);
      //   console.log('oldValue',oldValue);
      },
    },
    bin:{
      bind(el,binding,vnode){
        el.style.height = binding.value + 'px'
        el.style.backgroundColor='#e2e2e2'
        console.log(binding.arg,111);
        console.log(binding,vnode);
      }
    }
  },
};
</script>

<style>
</style>