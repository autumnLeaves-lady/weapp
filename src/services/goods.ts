import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

// 商品详情
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
