// 提供首页相关API函数
import request from '@/utiles/request'

/**
 * 获取分类下的商品（带筛选条件）
 *
 */
export const findTaskData = ({ currentPage = 1, pageSize = 10 }) => {
  return request('/table', 'get', { currentPage, pageSize })
}
