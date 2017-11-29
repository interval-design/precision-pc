/**
 * 个人中心
 * @author KY <ye.kang@interval.im>
 */

import axios from 'axios'

export default {
  /**
   * 列出当前用户的收货地址
   * @param {Object} params 
   */
  getUserAddresses(params) {
    return axios.get('/api/current_user/addresses/', params);
  },

  /**
   * 创建收货地址
   * @param {Object} params 
   */
  creatUserAddress(params) {
    return axios.post('/api/addresses/', params);
  },

  /**
   * 编辑收货地址
   * @param {int} addressId 
   * @param {Object} params 
   */
  editUserAddress(addressId, params) {
    return axios.put(`/api/addresses/${addressId}/`, params);
  },

  /**
   * 删除收货地址
   * @param {int} addressId 
   * @param {Object} params 
   */
  delUserAddress(addressId, params) {
    return axios.delete(`/api/addresses/${addressId}/`, params);
  }
}