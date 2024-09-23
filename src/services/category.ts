import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// 分类列表
export const getCategoryTopApi = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
