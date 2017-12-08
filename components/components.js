import Vue from 'vue'
import BaseButton from './BaseButton.vue'
import BaseDialog from './BaseDialog.vue'
import BaseMessage from './BaseMessage.vue'
import BaseConfirm from './BaseConfirm.vue'
import FloatMenu from './FloatMenu.vue'

const PRECISION = {
  BaseButton,
  BaseDialog,
  BaseMessage,
  BaseConfirm,
  FloatMenu
};

export default () =>{
  Object.keys(PRECISION).forEach((key) => {
    Vue.component(key, PRECISION[key])
  })
}

