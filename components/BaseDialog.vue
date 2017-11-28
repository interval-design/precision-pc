<template>
  <transition name="page">
    <div class="itv-base-dialog" v-show="visible">
      <div class="itv-base-dialog-wrap" :style="{width: width}">
        <header class="itv-base-dialog-header" v-if="!auto">
          <span class="itv-base-dialog-close itv-icon itv-icon-close" @click="close"></span>
        </header>
        <section class="itv-base-dialog-body">
          <slot></slot>
        </section>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BaseDialog',
    props: ['visible', 'width','auto','fn'], // dialog是否显示
    data() {
      return {
        timer: null
      }
    },
    methods: {
      close () {
        this.$emit('update:visible', false)
      }
    },
    watch: {
      visible(newVal,oldVal) {
        if (this.auto) {
          if (newVal) {
            let _this = this;
            this.timer = setTimeout(
              () => {
                _this.close();
                _this.fn();
              },1000
            );
          }else {
            this.timer = null;
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../assets/style/variable.scss';
.itv-base-dialog {
  transform: scale(1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 9999;
  &-wrap {
    box-sizing: border-box;
    margin: 10vh auto 0;
    border: 1px solid $border;
    border-radius: 2px;
    width: 400px;
    background: #fff;
    transition: .2s ease;
    transform: translateY(0);
  }
  &-header {
    position: relative;
    height: 44px;
  }
  &-close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

  }
  &-body {
    padding: 0 24px;
  }
}
</style>
