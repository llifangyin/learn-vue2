<template>
  <div>
    <!-- 在双花括号中 -->
    {{ message | capitalize |formatId}}

    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | formatId">v-bind</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message:'32redfd24d3',
            rawId:'23dsfasfsa'
        }
    },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    formatId:function(val){
        return val.trim()
    }
  },
};
</script>

<style>
</style>