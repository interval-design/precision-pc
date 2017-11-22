import Vue from 'vue'
import BaseButton from '../components/BaseButton.vue'

const PRECISION = {
  BaseButton
}

export default () => {
  Object.keys(PRECISION).forEach((key) => {
    Vue.component(key, PRECISION[key])
  })
}
