  import Vue from 'vue'
  Vue.component('render-vif',
  {
    props:['items'],
    render: function (createElement) {

      if(this.items.length){
        return createElement('ul', this.items.map(i=>{
          return createElement('li',{
            
          },i)
        }))
      }else{
        return createElement(p,'no content')
      }
    }
  })