/**
 * volar官网提供的定义全局组件类型的写法
 * declare module 'vue'
 */
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
    //
  }
}

// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
