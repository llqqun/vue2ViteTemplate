import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import store from '@/stores/index'
import App from './App.vue'
import router from './router'
import apis from '@/apis'
import { Message } from 'element-ui'
// svg 图标
import 'virtual:svg-icons-register'
import 'element-ui/lib/theme-chalk/message.css'
import '@/styles/index.less'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.use(PiniaVuePlugin)
Vue.use(apis)
new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')

Vue.prototype.$store = store()
Vue.prototype.$message = Message

router.beforeEach((to, from, next) => {
  next()
})
