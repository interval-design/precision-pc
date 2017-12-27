<template>
  <div>
    <p :style="{height: float?'94px':'0'}"></p>
    <section class="itv-code-form" :class="{'itv-code-form-float': float}" id="itv-code-form">
      <div class="itv-code-form-box">
        <div class="itv-code-form__buy">
          <span class="itv-icon itv-icon-code-buy" @click="showForm = !showForm"></span>
        </div>


        <div class="itv-code-form__content" v-if="showForm">
          <div class="itv-input-group">
            <input class="itv-input-group__input" type="text" v-model="code" :placeholder="productShow? '输入邀请码':'服务暂不支持体验'"
                  :class="{'itv-input-not-allowed': !productShow}" :disabled="!productShow">
            <base-button class="itv-input-group__button" @click="submit">体验服务</base-button>
          </div>
          <p class="itv-code-form__content--info"><span>{{showCodeInfo}}</span></p>
          <p style="flex:1"></p>
          <p class="itv-buy—form__title">
            如何使用邀请码
            <span class="itv-icon itv-icon-question" v-if="productShow">
              <span class="itv-icon-question-img">
                <span class="itv-icon-question-img-triangle"></span>
                <img src="../assets/code-tips.png" alt="code-tips">
              </span>
            </span>
          </p>
          <p class="itv-buy—form__title" style="margin-left: 40px; color: inherit">
            如何获取邀请码
            <span class="itv-icon itv-icon-question-black" v-if="productShow">
              <span class="itv-icon-question-black-img">
                <span class="itv-icon-question-black-img-triangle"></span>
                <span class="itv-icon-question-black-img-content">
                  <img src="../assets/qrcode.png" alt="code-tips">
                  <span style="margin-top: 16px">扫描关注微信公众号</span>
                  <span>参与公众号内的讲座获取邀请码</span>
                </span>
              </span>
            </span>
          </p>
        </div>


        <div class="itv-code-form__open" @click="showForm = !showForm">
          <span class="itv-icon" :class="'itv-icon-'+(!showForm? 'open':'close')+'-btn'"></span>
        </div>
      </div>
    </section>
  </div>
  
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
    mounted() {
      window.onscroll = () => {
        if (!document.querySelector('#itv-code-form')) {
          return;
        }
        let floatTop = document.querySelector('#itv-code-form').getBoundingClientRect().top;
        let footerTop = this.$store.state.footerEl.getBoundingClientRect().top;
        let viewHeight = document.documentElement.clientHeight;
        // console.log(footerTop,viewHeight);
        if (footerTop - floatTop >= 78 && footerTop - viewHeight > 0) {
          this.float = true;
        }else {
          this.float = false;
        }
      }
    },
    data() {
      return {
        showCodeInfo: '',
        code: '',
        showForm: true,
        float: true
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
@import '../assets/style/variable.scss';
.itv-input-not-allowed {
  cursor: not-allowed;
}
.itv-code-form {
  display: flex;
  margin: 16px auto;
  width: 1100px;
  &-box {
    display: flex;
    border-radius: 2px;
    border: 1px solid $border-light;
    background: $white;
  }
  &__buy {
    padding: 10px 14px;
  }
  &__open {
    padding: 24px 6px;
    background: $blue;
    line-height: 12px;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
  }
  &__content {
    flex: 1;
    display: flex;
    width: 1010px;
    padding: 13px 40px 13px 16px;
    border-left: 1px solid #F2F2F2;
    &--info {
      padding-top: 8px;
      line-height: 24px;
      text-indent: 1em;
      color: $red;
    }
  }
}
.itv-code-form-float {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}
</style>
