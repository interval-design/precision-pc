<template>
  <button class="itv-base-button" :class="classes" @click="_click">
    <slot></slot>
  </button>
</template>

<script>
  const prefixCls = 'itv-base-button'
  export default {
    name: 'BaseButton',
    props: {
      // info/success/error/primary/warning
      type: {
        type: String,
        default: 'primary'
      },
      // huge/big/middle/small
      size: {
        type: String,
        default: 'middle'
      },
      // 按钮形式，线框式/填充式，默认填充式
      line: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 触发click事件，组件上就不用写native了
      _click() {
        this.$emit('click')
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}--${this.type}`]: this.type,
            [`${prefixCls}--${this.size}`]: this.size,
            [`${prefixCls}--line`]: this.line
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/style/variable.scss';

  .itv-base-button {
    padding: 0px 16px;
    border-radius: 2px;
    outline: none;
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    border: 1px solid $font;
    &--huge {
      padding: 0 40px;
      height: 44px;
    }
    &--big {
      height: 36px;
    }
    &--middle {
      height: 32px;
    }
    &--small {
      height: 28px;
    }
    &--primary,
    &--success,
    &--error,
    &--warning,
    &--info {
      color: #fff;
      &:hover {
        filter: brightness(1.1);
      }
    }
    &--primary {
      border-color: $blue;
      background: $blue;
    }
    &--success {
      border-color: $green;
      background: $green;
    }
    &--error {
      border-color: $red;
      background: $red;
    }
    &--warning {
      border-color: $yellow;
      background: $yellow;
    }
    &--info {
      border-color: $font;
      background: $font;
    }
    &--primary.itv-base-button--line {
      border-color: $blue;
      color: $blue;
      &:hover {
        background: $blue;
      }
    }
    &--success.itv-base-button--line {
      border-color: $green;
      color: $green;
      &:hover {
        background: $green;
      }
    }
    &--error.itv-base-button--line {
      border-color: $red;
      color: $red;
      &:hover {
        background: $red;
      }
    }
    &--warning.itv-base-button--line {
      border-color: $yellow;
      color: $yellow;
      &:hover {
        background: $yellow;
      }
    }
    &--info.itv-base-button--line {
      border-color: $font;
      color: $font;
      &:hover {
        color: $white;
        background: $blue;
        border-color: $blue;
      }
    }
    &--line {
      background: #fff;
      &:hover {
        color: #fff;
        filter: brightness(1);
      }
    }
    &:active {
      filter: brightness(.9);
      border-style: solid;
    }
  }
</style>
