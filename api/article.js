/**
 * 科研动态
 * @author KY <ye.kang@interval.im>
 */

import axios from "axios";
export default {
  /**
   * 列出文章
   * @param {Object} params
   * @returns {AxiosPromise}
   */
  getArticles(params) {
    return axios.get(process.env.BASE_URL + "/api/articles/", params);
  },

  /**
   * 获取文章详情
   * @param {int} articleId
   * @param {Object} params
   * @returns {AxiosPromise}
   */
  getArticleDetail(articleId, params) {
    return axios.get(process.env.BASE_URL + `/api/articles/${articleId}/`, params);
  }
};
