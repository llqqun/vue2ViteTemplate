import { defineStore } from 'pinia'

export const staticStore = defineStore('static', {
  state: () => ({
    appId: 0
  }),
  getters: {
    doubleCount: (state) => state.appId * 2
  },
  actions: {}
})
