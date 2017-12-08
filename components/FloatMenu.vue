<template>
  <transition name="page">
    <div class="itv-float-menu" v-show="show">
    <div class="itv-float-menu-wrap">
      <a class="itv-icon itv-icon-buy" @click="$emit('open')"></a>
      <a class="itv-icon itv-icon-top" @click="toTop"></a>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'FloatMenu',
    mounted() {
      var viewportH = window.innerHeight || document.documentElement.clientHeight;
      this.doc = document.body.scrollTop? document.body : document.documentElement;
      window.onscroll = () => {
        if (this.doc.scrollTop < viewportH) {
          this.show = false;
        }else {
          this.show = true;
        }
      }
    },
    data() {
      return {
        doc: null,
        show: false
      }
    },
    methods: {
      /**
       * 滚回顶部
       */
      toTop() {
        var scrollTop = this.doc.scrollTop;
        var top = () => {
          // 这里2是滚动速率，越大越慢
          scrollTop = scrollTop + (0 - scrollTop) / 3;
          // 临界判断，终止动画
          if (scrollTop < 1) {
            this.doc.scrollTop = 0;
            return;
          }
          this.doc.scrollTop = scrollTop;
          // 动画
          requestAnimationFrame(top);
        };
        top();
      }
    }
  }
</script>

<style lang="scss">
.itv-float-menu {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 10;
  &-wrap {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 16px;
    }
  }
}
</style>
