import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})
// history 变化时
window.addEventListener('popstate', (e) => {
  console.log(222,e.currentTarget);
  console.log(222,e.target);
  
  app.currentRoute = window.location.pathname
})
