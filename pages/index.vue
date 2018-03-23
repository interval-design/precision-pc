<template>
  <div class="itv-view-index">
    <section class="itv-banner-swiper">
      <div class="wrap-box" v-swiper:banner="bannerOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="wrap-box-item">
              <div class="wrap-box-item__text-1">
                <header class="title">普瑞森结直肠癌风险评估——常安易™</header>
                <p class="p1">操作简便居家取样、无创无痛适用广泛、灵敏度高</p>
                <div class="btn">
                  <base-button size="small" @click="$router.push({name:'service-filter'})">了解更多</base-button>
                </div>
              </div>
              <img class="wrap-box-item__img" src="../assets/index/pic-banner-1.jpg">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="wrap-box-item">
              <div class="wrap-box-item__text-3">
                <header class="title">肠道微生态检测</header>
                <p class="p1">肠道内数以亿计的微生物及其代谢产物在人体能量代谢、营养物质吸收、先天和获得性免疫、胃肠道功能等方面发挥着重要作用，一旦宿主与肠道微生物之间共栖共生的稳态被打破，就会诱发多种人类疾病。</p>
                <div class="btn">
                  <base-button size="small" @click="$router.push({name:'service-ecosystem'})">了解更多</base-button>
                </div>
              </div>
              <img class="wrap-box-item__img" src="../assets/index/pic-banner-3.jpg">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="wrap-box-item">
              <div class="wrap-box-item__text-2">
                <h2 class="title">儿童肠道检测</h2>
                <p class="p1">担心孩子出现各种问题</p>
                <p class="p2">腹泻 / 食欲不振 / 肥胖 / 营养不良 / 抗生素滥用</p>
                <p class="line"></p>
                <p class="p2">各种问题可能时刻威胁着我们的宝贝，但您有时也许感到无从下手。</p>
                <p class="p2">其实儿童肠道菌群检测能帮您预防这些问题。</p>
                <div class="btn">
                  <base-button size="small" @click="$router.push({name:'service-child'})">了解更多</base-button>
                </div>
              </div>
              <img class="wrap-box-item__img" src="../assets/index/pic-banner-2.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="banner-button-prev">
        <img src="../assets/btn-arrow-left.png">
      </div>
      <div class="banner-button-next">
        <img src="../assets/btn-arrow-right.png">
      </div>
      <div class="swiper-pagination itv-banner-swiper-pagination"></div>
    </section>
    <section class="itv-banner-swiper" style="height: 450px">
      <div class="wrap-box" style="height: 450px">
        <div class="wrap-box-item" style="height: 450px">
          <div class="wrap-box-item__text-4">
            <header class="title">你的肠道健康他们都知道</header>
            <p class="p1">设想生活在一个疾病可选择的世界您肠道有一只数以亿计、独一无二的微生物大军供您支配。现在，参加健康革命，争取让他们为您工作。肠道微生物群对健康、表现和寿命的影响可能比您自身基因的影响还要大。现在，在普瑞森的协助下，您可以成为它们更好的主人，并远离疾病。</p>
            <div class="btn">
              <base-button size="small" @click="$router.push({name:'microbiology'})">了解微生物组学</base-button>
            </div>
          </div>
          <img class="wrap-box-item__img" src="../assets/index/pic-banner-4.jpg" @click="$router.push({name:'microbiology'})">
        </div>
      </div>
    </section>
    <section class="section section-3">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          <span id="bacteriaTitle">肥胖菌</span>
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/index/icon-section3.png" srcset="../assets/index/icon-section3.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/index/icon-section3-2.png" srcset="../assets/index/icon-section3-2.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/index/icon-section3-3.png" srcset="../assets/index/icon-section3-3.png 2x" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/index/icon-section3-4.png" srcset="../assets/index/icon-section3-4.png 2x" alt="">
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <section class="section section-4">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          无需出门的“0负担”检测
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <img src="../assets/index/pic-section4.png" alt="" style="width: 969px;">
      </div>
    </section>
    <common-page></common-page>
    <section class="section section-6">
      <div class="itv-content itv-flex-justify--sb">
        <nuxt-link :to="{name:'service-filter'}" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-1.png" alt="icon-section6-1">
          <span>了解肠癌风险评估</span>
        </nuxt-link>
        <nuxt-link :to="{name:'service-child'}" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-2.png" alt="icon-section6-2">
          <span>了解儿童肠道检测</span>
        </nuxt-link>
        <nuxt-link :to="{name:'service-ecosystem'}" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-3.png" alt="icon-section6-3">
          <span>了解肠道微生态检测</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import CommonPage from '../components/CommonPage';
  export default {
    name: 'Index',
    components:{CommonPage},
    head() {
      return {
        title: '首页 - 普瑞森基因',
        meta: [
          {hid: 'index', name: 'description', content: '首页'}
        ]
      }
    },
    data() {
      return {
        bannerOption: {
          effect : 'fade',
          fadeEffect: {
            crossFade: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            disableOnInteraction: false
          },
          loop : true,
          navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
          },
        },
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
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/variable";

  .itv-view-index {
    .itv-view-index--btn {
      padding: 0 24px;
    }
    .itv-banner {
      height: auto;
      &-cnt__desc {
        font-size: 16px;
      }
      .swiper-slide {
        height: 660px;
      }
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
        }
        &__icon--right {
          width: 43px;
          height: 30px;
          margin-left: 32px;
        }
      }
      .desc__title {
        font-size: 18px;
      }
      .desc__bd {
        padding: 24px 0;
        color: $font-sub;
        max-width: 550px;
      }
    }
    .section-2 {
      height: 450px;
      text-align: left;
      padding: 0;
      &__banner {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-55%);
      }
      &__desc {
        position: absolute;
        top: 30%;
        right: 0;
        z-index: 10;
      }
      .desc__title {
        font-size: 22px;
      }
    }
    .section-3 {
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
        background-image: url("../assets/btn-arrow-left.png");
      }
      .swiper-button-next {
        right: 0;
        width: 57px;
        height: 57px;
        background-size: auto;
        background-image: url("../assets/btn-arrow-right.png");
      }
      .itv-card {
        width: 260px !important;
        height: 350px;
        padding: 48px 32px;
      }
    }
    .section-5 {
      background: url("../assets/pic-flow-bg.png") no-repeat;
      background-position: center 680px;
      background-size: contain;
      &-item {
        position: relative;
        height: 400px;
        text-align: left;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .section-6 {
      display: flex;
      background: url("../assets/index/pic-section6-bg.jpg") no-repeat;
      background-size: cover;
      background-position: bottom;
      font-size: 18px;
      letter-spacing: 2.53px;
      img {
        width: 57px;
        height: 56px;
        object-fit: contain;
      }
      .itv-card {
        width: 352px;
        box-shadow: 0 6px 14px 0 rgba(29, 64, 103, 0.19);
        transition: transform .3s ease;
        &:hover {
          transform: scale(1.05);
          transition: transform .3s ease;
        }
      }
    }
    .section-8 {
      background: $light-blue;
      .pic {
        padding: 50px 0;
      }
    }
  }
</style>
