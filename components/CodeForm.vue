<template>
  <section class="itv-buy">
    <div class="itv-buy—form">
      <p class="itv-buy—form__title">
        输入邀请码体验检测服务
        <span class="itv-icon itv-icon-question">
          <span class="itv-icon-question-img">
            <span class="itv-icon-question-img-triangle"></span>
            <img src="../assets/code-tips.png" alt="code-tips">
          </span>
        </span>
      </p>
      <div class="itv-input-group">
        <input class="itv-input-group__input" type="text" v-model="code" placeholder="输入邀请码">
        <base-button class="itv-input-group__button" @click="submit">体验服务</base-button>
      </div>
      <p class="itv-buy—form__info"><span v-if="showCodeInfo">邀请码无效或已被使用</span></p>
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
    data() {
      return {
        showCodeInfo: false,
        code: ''
      }
    },
    methods: {
      submit() {
        this.showCodeInfo = false;
        // 未登录状态体验服务会弹登录框
        if (!this.$store.state.user) {
          this.$emit('login');
        }else {
          // 检验邀请码
          var cardCode = this.code.replace(/\s+/g,"");
          if (cardCode) {
            ApiUser.getCodeGroup(cardCode).then(
              res => {
                if (res.data.code === 0) {
                  this.$router.push({name: 'user-pay',params: {cardCode: cardCode}});
                }else {
                  this.showCodeInfo = true;
                }
              }
            )
          }
        }
      }
    }
  }
</script>