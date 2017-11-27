import Vue from 'vue'
import BaseButton from './BaseButton.vue'
import BaseDialog from './BaseDialog.vue'
import BaseMessage from './BaseMessage.vue'

const PRECISION = {
  BaseButton,
  BaseDialog,
  BaseMessage
};

export default () =>{
  Object.keys(PRECISION).forEach((key) => {
    Vue.component(key, PRECISION[key])
  })
}

