/**
 * 请求封装
 * @authors Pony <mycnj123@gmail.com>
 */

import axios from 'axios'


// response 拦截器
axios.interceptors.response.use(
  response => {
    // token过期
    if (response.data.code === 1101) {
      // location.reload();
    }
    return response;
  },
  error => {
    return Promise.reject(error.response.data.message)   // 返回接口返回的错误信息
  }
);




