import Vue from 'vue'
import 'buefy/lib/buefy.css'
import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.min.css'
import 'fullcalendar/dist/fullcalendar.css'
import 'flatpickr/dist/flatpickr.min.css'
import App from './App.vue'
import FullCalendar from 'vue-full-calendar'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'mdi' })
Vue.use(FullCalendar)

new Vue({
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
