// 提供首页相关API函数
import request from '@/utiles/request'

/**
 * 获取品牌
 * @param {Integer} limit - 测试接口
 * @returns Promise
 */
export const findForm = () => {
  return request('/form', 'get')
}
