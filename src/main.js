// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import { Swipe, SwipeItem } from 'mint-ui'
import { IndexList, IndexSection } from 'mint-ui'
import 'mint-ui/lib/style.css'  

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
