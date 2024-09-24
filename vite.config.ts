import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    AutoImport({
      imports: [
        // 预设
        'vue',
        'uni-app',
        // 自定义预设
        {
          // '@/store': ['useStore'],
          // '@/store/modules/theme': ['useThemeStore'],
          // '@/hooks/useList': ['useList'],
          // '@/hooks/useTheme': ['useTheme'],
          // '@/hooks/useShare': ['useShare']
        },
      ],
      dts: 'src/types/auto-import.d.ts',
    }),
  ],
})
