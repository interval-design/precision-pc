import Vue from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseDialog from '../components/BaseDialog.vue'

const PRECISION = {
  BaseButton,
  BaseDialog
};

export default () =>{
  Object.keys(PRECISION).forEach((key) => {
    Vue.component(key, PRECISION[key])
  })
}

