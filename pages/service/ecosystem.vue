<template>
  <div class="itv-view-ecosystem">
    <header class="itv-content itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
         <nuxt-link to="/">首页</nuxt-link>
        <i>&gt;</i>
      </span>
      <span>肠道微生态检测</span>
    </header>
    <section class="itv-banner-swiper">
      <div class="wrap-box">
        <div class="wrap-box-item">
          <div class="wrap-box-item__text-3">
            <header class="title">肠道微生态检测</header>
            <p class="p1">肠道内数以亿计的微生物及其代谢产物在人体能量代谢、营养物质吸收、先天和获得性免疫、</p>
            <p class="p1">胃肠道功能等方面发挥着重要作用，一旦宿主与肠道微生物之间共栖共生的稳态被打破，就会诱发多种人类疾病。</p>
          </div>
          <img class="wrap-box-item__img" src="../../assets/index/pic-banner-3.jpg">
        </div>
      </div>
    </section>
    <section class="section section-2">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          <span id="bacteriaTitle">肥胖菌</span>
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/index/icon-section3.png" srcset="../../assets/index/icon-section3.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/index/icon-section3-2.png" srcset="../../assets/index/icon-section3-2.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/index/icon-section3-3.png" srcset="../../assets/index/icon-section3-3.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/index/icon-section3-4.png" srcset="../../assets/index/icon-section3-4.png 2x" alt="">
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <section class="section section-3 bg--white">
      <div class="itv-content">
        <div class="section-3-item">
          <div class="desc">
            <h2 class="desc__title">或许有过各种担忧</h2>
            <ul class="desc__bd list">
              <li>三十岁以后肚子一天天圆起来的中年危机</li>
              <li>不想被便秘或腹泻纠缠浪费青春</li>
              <li>因消化不良而气色不好皮肤暗淡</li>
              <li>肠炎？糖尿病？肠易激综合征？请统统远离我！</li>
            </ul>
            <p class="desc__bd">其实肠道微生态检测能帮您评估这些健康风险，并给您建议，帮您避开这些可能存在的健康陷阱</p>
          </div>
          <img src="../../assets/ecosystem/pic-section3-1.png" alt="pic-1">
        </div>
        <div class="section-3-item">
          <img src="../../assets/ecosystem/pic-section3-2.png" alt="pic-2">
          <div class="desc">
            <h2 class="desc__title">预防是最好的治疗方案</h2>
            <div class="desc__bd">
              <p class="desc__bd-paragraph">最新医学研究支持肠道微生态环境是导致各种消化类疾病甚至是其他很多疾病的重要原因。</p>
              <p class="desc__bd-paragraph">通过肠道微生态检测能细致分析您的肠道健康风险，从而对您提出各种饮食、生活习惯、益生菌摄取、疾病预防的建议。</p>
              <p class="desc__bd-paragraph">由于普瑞森的检测方式无痛无创，对身体没有负担，更适合您有计划地进行肠道健康监测。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <common-page></common-page>
    <!-- 邀请码输入窗 -->
    <code-form @login="openLoginDialog" :productShow="productShow" :productId="productId"></code-form>

  </div>
</template>

<script>
  import ApiUser from '../../api/user.js';
  import CommonPage from '../../components/CommonPage';
  export default {
    name: 'ServiceEcosystem',
    components:{CommonPage},
    head() {
      return {
        title: '肠道微生态检测 -普瑞森基因',
        meta: [
          { hid: 'ecosystem', name: 'description', content: '肠道微生态检测' }
        ]
      }
    },
    mounted() {
      this.getProductInfo();
    },
    data() {
      return {
        productShow: true,
        productId: 3,
        showDialog: false,
        showDialogImg: false,
        bacteriaTitle: '肥胖菌',
        code: '',
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChangeTransitionStart: function() {
              switch (this.activeIndex) {
                case 1:
                  document.querySelector('#bacteriaTitle').innerHTML = '肥胖菌';
                  break;
                case 2:
                document.querySelector('#bacteriaTitle').innerHTML = '疾病相关细菌';
                  break;
                case 3:
                document.querySelector('#bacteriaTitle').innerHTML = '有害菌';
                  break;
                case 4:
                document.querySelector('#bacteriaTitle').innerHTML = '有益菌';
                  break;
              }
            },
          },
          onSlideChangeStart: swiper => {
            
          }
        }
      }
    },
    methods: {
      // 触发邀请码体验服务
      openLoginDialog() {
        this.$emit('openUserDialog');
      },

      // 打开邀请码弹窗
      openCodeDialog() {
        this.showDialog = true;
      },

      // 获取产品详情
      getProductInfo() {
        ApiUser.getProductInfo(this.productId).then(
          res => {
            if (res.data.code === 1104) {
              this.productShow = false;
            }
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/variable";

  .itv-view-ecosystem {
    .bg--white {
      background: $white;
    }
    .section {
      position: relative;
      text-align: center;
      padding: 72px 0;
      &-title {
        padding-bottom: 72px;
        font-size: 22px;
        &__icon--left {
          width: 43px;
          height: 30px;
          margin-right: 32px;
          vertical-align: middle;
        }
        &__icon--right {
          width: 43px;
          height: 30px;
          margin-left: 32px;
          vertical-align: middle;
        }
        .content {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .desc__title {
        font-size: 18px;
      }
      .desc__bd {
        padding: 24px 0;
        color: $font-sub;
        max-width: 350px;
      }
    }
    .section-2 {
      background: $light-blue;
      .swiper-wrapper {
        padding: 20px 0;
      }
      .swiper-slide {
        &:last-child {
          margin: 0 !important;
        }
        img{
          width: 95%;
        }
      }
      .swiper-button-prev {
        left: 0;
        width: 57px;
        height: 57px;
        background-size: auto;
        background-image: url("../../assets/btn-arrow-left.png");
      }
      .swiper-button-next {
        right: 0;
        width: 57px;
        height: 57px;
        background-size: auto;
        background-image: url("../../assets/btn-arrow-right.png");
      }
      .itv-card {
        width: 260px !important;
        height: 350px;
        padding: 48px 32px;
      }
    }
    .section-3{
      &-item {
        position: relative;
        height: 400px;
        text-align: left;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .desc__bd {
          &.list {
            line-height: 2;
            padding: 24px 0 0;
            li {
              position: relative;
              &:before {
                position: absolute;
                content: "";
                left: -15px;
                top: 50%;
                width: 5px;
                height: 2px;
                background: $blue;
              }
            }
          }
          &-paragraph{
            margin-bottom: 8px;
          }
        }
        .desc__title {
          font-size: 22px;
        }
      }
    }
  }
</style>
