<template>
  <div class="itv-base-dialog" :class="{'itv-base-dialog--show': visible}">
    <div class="itv-base-dialog-wrap" :style="{width: width}">
      <header class="itv-base-dialog-header">
        <span class="itv-base-dialog-close" @click="close">关闭</span>
      </header>
      <section class="itv-base-dialog-body">
        <slot></slot>
      </section>
      <footer class="itv-base-dialog-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseDialog',
    props: ['visible', 'width'], // dialog是否显示
    methods: {
      close () {
        this.$emit('update:visible', false)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../assets/style/variable.scss';
.itv-base-dialog {
  transform: scale(0);
  opacity: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 9999;
  transition: .2s opacity;
  &--show {
    transform: scale(1);
    opacity: 1;
    .itv-base-dialog-wrap {
      margin: 15vh auto 0;
    }
  }
  &-wrap {
    box-sizing: border-box;
    margin: 10vh auto 0;
    border: 1px solid $border;
    border-radius: 2px;
    width: 400px;
    background: #fff;
    transition: .2s ease;
  }
  &-header {
    position: relative;
    height: 44px;
  }
  &-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: yellow;
    cursor: pointer;

  }
  &-body {
    padding: 0 24px;
  }
  &-footer {
    padding: 24px 24px 32px;
    text-align: center;
  }
}
</style>
