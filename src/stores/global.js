import { defineStore } from 'pinia'
import { parse, stringify } from 'zipson'
import { constantRoutes } from '@/router'


function generateKeepAliveInclude(routes) {
  let nameList = []
  routes.forEach((route) => {
    if (route.children) {
      const arr = generateKeepAliveInclude(route.children)
      nameList = [...arr]
    }
    if (route.name && route.meta?.keepAlive ) {
      nameList.unshift(route.name)
    }
  })
  return nameList
}

export const globalStore = defineStore(
  'global',
  {
    state: () => ({
      userId: 0,
      userInfo: null,
      identityType: 0,
      keepAlive: generateKeepAliveInclude(constantRoutes)
    }),
    getters: {
      identity: (state) => ['个人', '企业'][state.identityType]
    },
    actions: {
      setUser(obj) {
        this.userId = 1
        this.userInfo = obj
      }
    },
    // 根据options写法不同配置位置也不一样
    // 选项API写法如下
    // 组合API写法: 以下配置写入defineStore的第三个参数对象中
    persist: {
      key: 'storeSession',
      storage: sessionStorage,
      serializer: {
        deserialize: parse,
        serialize: stringify
      }
    }
  }
)
