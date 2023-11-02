import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import store from '@/stores/index'
import App from './App.vue'
import router from './router'

import '@/styles/index.less'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')

Vue.prototype.$store = store()
