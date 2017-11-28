/**
 * 状态管理
 * @authors Pony <mycnj123@gmail.com>
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    layoutsFull: false,
  },
  mutations: {
    SET_LAYOUTS_FULL(state, action) {
      state.layoutsFull = action
    },
  }
});

export default store
