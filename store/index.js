/**
 * 状态管理
 * @authors Pony <mycnj123@gmail.com>
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ApiUser from '../api/user'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    layoutsFull: false,
    user: null,
    footerEl: null
  },
  mutations: {
    SET_LAYOUTS_FULL(state, action) {
      state.layoutsFull = action
    },

    SET_USER: function (state, user) {
      state.user = user
    }
  },
  actions: {
    // 全局服务初始化
    nuxtServerInit({commit}, {req}) {},

    /**
     * 获取当前用户信息
     * @param commit
     * @param callback
     */
    setUser({commit}, callback){
      return new Promise((resolve, reject)=>{
        ApiUser.getCurrentUser().then((res) => {
          let _data = res.data.data;
          if (res.data.code === 0) {
            commit('SET_USER', _data.user);
            resolve()
          } else {
            callback(res.data.message);
          }
        });
      })
    },
  }
});

export default store
