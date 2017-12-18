/**
 * 自定义组件
 * @authors Pony <mycnj123@gmail.com>
 */

import Vue from 'vue'
import Custom from '~/components/components'


Vue.use(Custom);

// 只有一个全局过滤器，先写在这


/**
 * 货币格式化
 */
Vue.filter('toFix',(val)=>{
  if (val) {
    return '￥'+(val/100).toFixed(2);
  }else {
    return '-';
  }
})

