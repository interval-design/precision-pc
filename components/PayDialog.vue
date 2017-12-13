<template>
  <base-dialog :visible.sync="payDialog" width="600px" class="itv-payment">
    <h4 class="itv-payment-title">请选择支付方式</h4>
    <div class="itv-payment-btns">
      <base-button size="huge" style="margin-right: 32px" @click="createPayment('zfb',payOrder)">
        <span class="itv-icon itv-icon-zfb"></span>支付宝支付
      </base-button>
      <base-button size="huge" type="success" @click="createPayment('wx',payOrder)">
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
      <div class="itv-payment-wx-qrcode">
        <qrcode-vue :value="wxQrCodeUrl" size="180"></qrcode-vue>
      </div>
      <p>请使用微信扫一扫</p>
      <p>扫描二维码支付</p>
    </div>
  </base-dialog>
</template>

<script>
  import ApiUser from '../api/user.js';
  import QrcodeVue from 'qrcode.vue';
  export default {
    name: 'PayDialog',
    props: {
      payDialog: {
        type: Boolean,
        required: true
      },
      payOrder: {
        type: Object,
        required: true

      }
    },
    components: {
      QrcodeVue
    },
    data() {
      return {
        wxPayDialog: false,
        payTimer: null,
        wxQrCodeUrl: ''
      }
    },
    destroyed() {
      clearInterval(this.payTimer);
    },
    methods: {
      /**
       * 创建交易
       */
      createPayment(type,order) {
        var channel = '';
        var returnUrl = '';
        // 这个是新页面打开
        // var payPage = null;
        if (type == 'wx') {
          channel = 'WX_NATIVE';
          clearInterval(this.payTimer);
          this.payTimer = setInterval(()=>{
            this.getOrderdetail(order.id);
          },500)
        }else {
          // payPage = window.open('','_blank');
          channel = 'ALI_QRCODE';
          returnUrl = encodeURI('http://localhost:3000/user/pay/status');
        }
        ApiUser.createPayment(order.id,{
          channel: channel,
          return_url: returnUrl
        }).then(
          res => {
            if (res.data.code === 0) {
              if (type == 'wx') {
                this.wxPayDialog = true;
                this.wxQrCodeUrl = res.data.data.code_url;
              }else {
                // payPage.location = res.data.data.url;
                window.location.href = res.data.data.url;
              }
            }
          }
        )
        
      },

      /**
       * 获取订单详情
       */
      getOrderdetail(orderId) {
        ApiUser.getOrderdetail(orderId).then(
          res => {
            if (res.data.code === 0) {
              if (res.data.data.order.status === 1) {
                this.$router.push({name: 'user-pay-status'});
              }
            }
          }
        )
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
    }
  }
}
</style>
