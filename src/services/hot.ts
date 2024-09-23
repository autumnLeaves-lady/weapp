import { http } from '@/utils/http'
import type { PageParams, PageResult } from '@/types/global'
import type { HotResult } from '@/types/hot'

type HotParams = PageParams & { subType?: string }
// 通用的热门推荐类型
export const getHotRecommendApi = (url: string, data?: HotParams) => {
  return http<HotResult>({
    url,
    method: 'GET',
    data,
  })
}
