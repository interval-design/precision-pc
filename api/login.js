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
    return axios.get(process.env.BASE_URL +  '/api/captcha/', {params: params});
  },

  /**
   * 发送用户登录验证码短信
   * @param params
   * @returns {*}
   */
  sendSmsLogin(params) {
    return axios.post(process.env.BASE_URL + '/api/sms/login/',params);
  },

  /**
   * 登录
   * @param params
   * @returns {*}
   */
  login(params) {
    return axios.put('/api/user/login/', params);
  },

  /**
   * 微信用户绑定手机
   * @param {Object} params 
   */
  wxBind(params) {
    return axios.put('/api/user/bind/', params);
  },

  /**
   * 发送微信用户绑定手机验证码短信
   * @param {Object} params 
   */
  sendWxBindMsg(params) {
    return axios.post('/api/sms/bind/', params);
  }
}
