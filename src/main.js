import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import store from '@/stores/index'
import App from './App.vue'
import router from './router'
import { MessageBox } from 'element-ui'
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    MessageBox.confirm('请先完成实名认证后，再申请调解。', '实名认证提醒', {
      confirmButtonText: '立即认证',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      next({ path: '/peopleCenter?tab=1' })
    })
    return false
  }
  next()
})