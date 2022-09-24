import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Velocity from 'velocity-animate'
import gsap from "gsap";
import  lodash from 'lodash'


import "./utils/directive";
import './utils/render'
import './utils/rendervif'
import './utils/renderSlot'
import './utils/renderScopedSlot'
import './utils/renderScopedSlot2'

import myPlugin from './plugin/index'
Vue.use(myPlugin)



Vue.prototype.gsap = gsap
Vue.prototype.Velocity = Velocity
Vue.prototype.lodash = lodash
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
