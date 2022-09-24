<template>
  <div>
    <anchored-heading :level='1'>
        anchor1
    </anchored-heading>
    <render-slot>
      this is slot content
      <div>xxx</div>
      <h5>this is another slot</h5>
    </render-slot>
    <br>

    <render-vif :items='items'></render-vif>
    <br>
    <render-scopedslot :message='message'>
       <div slot-scope="props">{{props.text}}</div>
       <template slot="name1" scope="props2">
        <div>
          {{props2.content}}
        </div>
       </template>
    </render-scopedslot>
    <render-scopedslot2 text='this.is message'>
    </render-scopedslot2>
  </div>
</template>

<script>
export default {
data() {
  return {
    message:'this is scopeslot mes',
    items:['land-rover','rolls-royce','mercedes-benz']
  }
},
}
</script>

<style>

</style>