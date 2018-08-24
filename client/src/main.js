import Vue from 'vue'
import 'buefy/lib/buefy.css'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.min.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'mdi' })

new Vue({
  render: h => h(App)
}).$mount('#app')
