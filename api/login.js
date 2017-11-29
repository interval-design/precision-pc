/**
 * 登录模块
 * @authors Pony <mycnj123@gmail.com>
 */
import axios from 'axios'

export default {

  /**
   * 获取图形验证码
   * @param params
   * @returns {*}
   */
  getCaptcha(params) {
    return axios.get('/api/captcha/', {params: params});
  },

  /**
   * 发送用户登录验证码短信
   * @param params
   * @returns {*}
   */
  sendSmsLogin(params) {
    return axios.post('/api/sms/login/',params);
  },

  /**
   * 获取当前用户详情
   * @returns {*}
   */
  getCurrentUser(params){
    return axios.get('/api/current_user/',params);
  },

  /**
   * 登录
   * @param params
   * @returns {*}
   */
  login(params) {
    return axios.put('/api/user/login/', params);
  },
}
