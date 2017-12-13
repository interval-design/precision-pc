<template>
  <base-dialog :visible.sync="payDialog" width="600px" class="itv-payment">
    <h4 class="itv-payment-title">请选择支付方式</h4>
    <div class="itv-payment-btns">
      <base-button size="huge" style="margin-right: 32px">
        <span class="itv-icon itv-icon-zfb"></span>支付宝支付
      </base-button>
      <base-button size="huge" type="success" @click="wxPayDialog = true">
        <span class="itv-icon itv-icon-wx"></span>微信支付
      </base-button>
    </div>
    <div class="itv-payment-wx" v-if="wxPayDialog">
      <h4 class="itv-payment-wx-logo">
        <span class="itv-payment-wx-logo-line"></span>
        <span class="itv-icon itv-icon-wx-pay"></span>
        <span class="itv-payment-wx-logo-line"></span>
      </h4>
      <p class="itv-payment-wx-info">应付金额<span>￥999999</span></p>
      <div class="itv-payment-wx-qrcode"></div>
      <p>请使用微信扫一扫</p>
      <p>扫描二维码支付</p>
    </div>
  </base-dialog>
</template>

<script>
  export default {
    name: 'PayDialog',
    props: ['payDialog'],
    data() {
      return {
        wxPayDialog: false
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/style/variable.scss';
.itv-payment {
  text-align: center;
  &-title {
    margin-top: 8px;
    font-size: 18px;
  }
  &-btns {
    margin-top: 32px;
    padding-bottom: 40px;
  }
  &-wx {
    font-size: 18px;
    padding-bottom: 32px;
    &-logo {
      display: flex;
      &-line {
        flex: 1;
        margin: auto 0;
        border-bottom: 1px solid $border;
        height: 0;
      }
    }
    &-info {
      margin-top: 40px;
      span {
        color: $red;

      }
    }
    &-qrcode {
      margin: 24px auto 16px;
      width: 180px;
      height: 180px;
      background: $border;
    }
  }
}
</style>
