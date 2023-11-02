import { defineStore } from 'pinia'
import { parse, stringify } from 'zipson'

export const globalStore = defineStore(
  'global',
  {
    state: () => ({
      userId: 0,
      userInfo: null,
      identityType: 0
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
      key: 'storeLocal',
      serializer: {
        deserialize: parse,
        serialize: stringify
      }
    }
  }
)
