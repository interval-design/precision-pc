/**
 * 个人中心
 * @author KY <ye.kang@interval.im>
 */

import axios from 'axios'

export default {
    /**
   * 获取当前用户详情
   * @returns {*}
   */
  getCurrentUser(params){
    return axios.get('/api/current_user/',params);
  },
  
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
  },

  /**
   * 列出当前用户的订单
   * @param {Object} params 
   */
  getUserOrders(params) {
    return axios.get('/api/current_user/orders/', params);
  },

  /**
   * 获取订单详情
   * @param {int} orderId 
   * @param {Object} params 
   */
  getOrderdetail(orderId, params) {
    return axios.get(`/api/orders/${orderId}/`, params);
  },

  /**
   * 列出当前用户的报告
   * @param {Object} params 
   */
  getUserReports(params) {
    return axios.get('/api/current_user/reports/');
  },

  /**
   * 更新报告查看次数
   * @param {int} subOrderId 
   * @param {Object} params 
   */
  updateReportViews(subOrderId, params) {
    return axios.put(`/api/sub_orders/${subOrderId}/report_views/`, params);
  },


  /**
   * 根据微信卡券code获取邀请码组详情
   * @param {int} wxCardCode 
   * @param {Object} params 
   */
  getCodeGroup(wxCardCode, params) {
    return axios.get(`/api/invite_codes/${wxCardCode}/invite_code_group/`, params);
  },

  /**
   * 由微信卡券code创建订单
   * @param {int} wxCardCode 
   * @param {Object} params 
   */
  createOrder(wxCardCode, params) {
    return axios.post(`/api/invite_codes/${wxCardCode}/orders/`, params);
  }
}