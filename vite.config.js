import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer';

function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_SITE_BASE,
    server: {
      host: env.VITE_SITE_HOST,
      port: env.VITE_SITE_PORT,
      open: true,
      proxy: {
        '^/api/.*': {
          target: env.VITE_API_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve('src/styles/variables.less')}";`,
          },
          // 全局注册混入的样式
          additionalData: '@import "./src/styles/mixins.less";',
          math: 'strict' //所有数学表达式都需要括号
        }
      }
    },
    plugins: [
      vue2(),
      vue2Jsx(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      // 自动组件注册
      Components({
        dirs: ['src/components'], // 要搜索组件的目录的相对路径
        resolvers: [(componentName) => {
          // elementUI 组件自动注册功能
          // where `componentName` is always CapitalCase
          if (componentName.startsWith('El'))
          {
            return { name: componentName.slice(2), from: 'element-ui', sideEffects: [
              `element-ui/lib/theme-chalk/${componentName.slice(2)}.css`,
            ] }
          }
        }],
      }),
      visualizer()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    }
  }
});
