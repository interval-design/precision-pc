<template>
  <div class="itv-pay-status">
    <div class="itv-pay-status-wrap">
      <div class="itv-pay-status-succcess" v-if="payStatus">
        <p><span class="itv-icon itv-icon-pay-status-success"></span></p>
        <p class="itv-pay-status-info">恭喜您支付成功！</p>
        <p><base-button line @click="$router.push({path: '/'})">返回首页</base-button></p>
        <p class="itv-pay-status-qrcode">
          <img src="../../../assets/qrcode-text.png">
        </p>
        <p class="itv-pay-status-qrcode-info">
          推荐您关注普瑞森公众号，方便跟踪订单信息和第一时间查看报告
        </p>
      </div>
      <div class="itv-pay-status-error" v-else>
        <p><span class="itv-icon itv-icon-pay-status-error"></span></p>
        <p class="itv-pay-status-info">支付失败</p>
        <p class="itv-pay-status-error-info">
          请在三十分钟内付款，否则订单将自动关闭
          <base-button line style="margin-left: 16px;">再试一次</base-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PayStatus',
    head() {
      return {
        title: '支付结果 - 普瑞森基因',
        meta: [
          { hid: 'payStatus', name: 'description', content: '支付结果' }
        ]
      }
    },
    data() {
      return {
        payStatus: true
      }
    }
  }
</script>

<style lang="scss">
@import '../../../assets/style/variable.scss';
.itv-pay-status {
  padding: 88px 0 80px;
  width: 1100px;
  &-wrap {
    padding: 48px;
    background: $white;
    text-align: center;
  }
  &-info {
    padding: 24px 0 16px;
    font-size: 22px;
  }
  &-qrcode {
    margin-top: 88px;
    img {
      width: 124px;
       height: 124px;
    }
    &-info {
      margin-top: 16px;
      color: $font-sub;
    }
  }
  &-error-info {
    margin-top: 40px;
  }
}
</style>
