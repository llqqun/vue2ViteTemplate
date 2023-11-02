import { globalStore } from './global'
import { staticStore } from './static'
// 全局统一导出
export default function useStore() {
  return {
    global: globalStore(),
    static: staticStore()
  }
}
