<template>
  <transition name="page">
    <div class="itv-base-confirm">
      <div class="itv-base-confirm-wrap">
        <header class="itv-base-confirm__header">
          <span>{{ modal.title }}</span>
        </header>
        <section class="itv-base-confirm__content">
          <p>{{ modal.text }}</p>
        </section>
        <footer class="itv-base-confirm__footer">
          <span>
            <base-button @click="cancel" type="code" size="small" line>{{ modal.cancelButtonText }}</base-button>
          </span>
          <span>
            <base-button @click="submit" size="small">{{ modal.confirmButtonText }}</base-button>
          </span>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BaseConfirm',
    props: {
      options: Object
    },
    data() {
      return {
        resolve: '',
        reject: '',
        promise: ''
      }
    },
    computed: {
      modal() {
        let options = this.options;
        return {
          title: options.title || '提示',
          text: options.text || '这里是提示信息',
          cancelButtonText: options.cancelButtonText ? options.cancelButtonText : '取消',
          confirmButtonText: options.confirmButtonText ? options.confirmButtonText : '确定',
        }
      }
    },
    methods: {
      submit() {
        this.resolve('submit');
      },
      // 取消,将promise断定为reject状态
      cancel() {
        this.reject('cancel');
      },
      //显示confirm弹出,并创建promise对象，给父组件调用
      confirm() {
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
        return this.promise; //返回promise对象,给父级组件调用
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/style/variable.scss';
.itv-base-confirm {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 99999;
  &-wrap {
    padding: 24px;
    margin: 20vh auto 0;
    border-radius: 2px;
    width: 400px;
    background: $white;
  }
  &__header {
    font-size: 14px;
  }
  &__content {
    margin-top: 16px;
  }
  &__footer {
    margin-top: 16px;
    text-align: right;
    >span {
      margin: 0 8px;
    }
  }
}
</style>

