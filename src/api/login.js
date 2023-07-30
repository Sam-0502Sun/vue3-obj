// 提供首页相关API函数
import request from '@/utiles/request'

/**
 * 帐号密码登录
 * @param {String} username - 帐号
 * @param {String} password - 密码
 * @returns promise
 */
export const userAccountLogin = ({ username, password }) => {
  return request('/login', 'post', { username, password })
}
