<template>
  <div class="hello">
    <slot>
      
    </slot>
    <slot name="foo" v-bind:car='car'>
      
    </slot>
    <h1>{{ msg }}</h1>
    <slot name="header"></slot>
    <br>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      car:'mazda',
      mobile:'mi'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
