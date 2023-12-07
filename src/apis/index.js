import axiosInstance from '@/utils/request'

const modules = import.meta.glob('./**/*.js')
for (const path in modules) {
  const result = path.match(/(\.\/.*\/)(.*)(\.js)/)
  let fileName = ''
  if (result) {
    fileName = result[2]
  }
  const mod = modules[path]
  mod().then((result) => {
    if (fileName) {
      axiosInstance[fileName] = result
    }
  }).catch((error) => {
    console.error(error)
  })
}

export default function (vm) {
  vm.prototype.$axios = axiosInstance
}
