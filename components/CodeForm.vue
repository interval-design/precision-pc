<template>
  <section class="itv-buy">
    <div class="itv-buy—form">
      <p class="itv-buy—form__title" :class="{'itv-not-allowed-text': !productShow}">
        {{productShow? '输入邀请码体验检测服务':'服务暂不支持体验'}}
        <span class="itv-icon itv-icon-question" v-if="productShow">
          <span class="itv-icon-question-img">
            <span class="itv-icon-question-img-triangle"></span>
            <img src="../assets/code-tips.png" alt="code-tips">
          </span>
        </span>
      </p>
      <div class="itv-input-group">
        <input class="itv-input-group__input" type="text" v-model="code" :placeholder="productShow? '输入邀请码':''"
               :class="{'itv-input-not-allowed': !productShow}" :disabled="!productShow">
        <base-button class="itv-input-group__button" @click="submit">体验服务</base-button>
      </div>
      <p class="itv-buy—form__info"><span>{{showCodeInfo}}</span></p>
    </div>
    <div class="itv-buy—form qr">
      <img src="../assets/qrcode-text.png" alt="qr">
      <div class="qr-desc">
        <h3>如何获取邀请码</h3>
        <p>扫描关注微信公众号</p>
        <p>参与公众号内的讲座获取邀请码</p>
      </div>
    </div>
  </section>
</template>

<script>
  import ApiUser from '../api/user.js';
  export default {
    name: 'CodeForm',
    props: {
      // 产品是否上架
      productShow: {
        type: Boolean,
        default: true,
        required: true
      },
      productId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        showCodeInfo: '',
        code: ''
      }
    },
    methods: {
      submit() {
        this.showCodeInfo = '';
        // 未登录状态体验服务会弹登录框
        if (!this.$store.state.user) {
          this.$emit('login');
        }else {
          // 检验邀请码
          var cardCode = this.code.replace(/\s+/g,"");
          if (cardCode) {
            ApiUser.getCodeGroup(cardCode,{
              params: {
                product_id: this.productId
              }
            }).then(
              res => {
                if (res.data.code === 0) {
                  this.$router.push({name: 'user-pay',params: {cardCode: cardCode, productId: this.productId}});
                }else if (res.data.code === 1419) {
                  this.showCodeInfo = '该产品已下架';
                }else if (res.data.code === 1807) {
                  this.showCodeInfo = '邀请码与该产品不符';
                }else {
                  this.showCodeInfo = '该邀请码无效或已被使用';
                }
              }
            )
          }
        }
      }
    }
  }
</script>

<style lang="scss">
.itv-input-not-allowed {
  cursor: not-allowed;
}
.itv-not-allowed-text {
  text-align: center;
}
</style>
