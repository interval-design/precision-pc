<template>
  <div class="itv-view-index">
    <section class="itv-banner" :class="bannerColor">
      <div class="itv-content">
        <div v-swiper:banner="bannerOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide n1">
              <div class="itv-banner-cnt">
                <h2 class="itv-banner-cnt__title">儿童肠道检测</h2>
                <p class="itv-banner-cnt__desc">检测3000+种微生物自称的菌群及其丰富程度，全面评估儿童的倡导健康</p>
                <base-Button class="itv-view-index--btn" size="big">了解更多</base-Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-2">
      <div class="itv-content">
        <div class="section-2__desc">
          <h3 class="desc__title">你的肠道健康他们都知道</h3>
          <p class="desc__bd">您的肠道内住着大约8888种数以亿计的微生物。其中888种有益菌，8888万种有害菌。最新医学研究认为，肠道微生物与人类健康和疾病的发生密切相关。有益菌和有害菌相互作用此消彼长，维持着肠道生态平衡</p>
          <base-button class="itv-view-index--btn" size="big">了解微生物组学</base-button>
        </div>
        <img class="section-2__banner" src="../assets/index/banner-2.png" alt="banner">
      </div>
    </section>
    <section class="section section-3">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          苗条菌和肥胖菌
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 3">
              <img src="../assets/index/icon-section3.png" alt="">
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
        <img src="../assets/index/pic-section4.png" alt="">
      </div>
    </section>
    <section class="section section-5">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          普瑞森基因用心和技术对待每一项检测
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <div class="section-5-item">
          <div class="desc">
            <h2 class="desc__title">实验室级规范检测</h2>
            <div class="desc__bd">
              <p>143 位学者 / 按流程标准操作 SOP</p>
              <p>严格的无菌检测环境 / 用心追求精准的检测结果</p>
            </div>
          </div>
          <img src="../assets/pic-flow-1.png" alt="pic-1">
        </div>
        <div class="section-5-item">
          <img src="../assets/pic-flow-2.png" alt="pic-2">
          <div class="desc">
            <h2 class="desc__title">世界领先的基因检测平台</h2>
            <div class="desc__bd">
              <p>GutCheckTM 肠道微生物基因检测平台 / illumine Miseq 高通量测序仪</p>
              <p>16S rRNA 测序技术 / 高灵敏度和特异性</p>
            </div>
            <nuxt-link class="itv-link" to="">继续了解普瑞森测序 ></nuxt-link>
          </div>
        </div>
        <div class="section-5-item">
          <div class="desc">
            <h2 class="desc__title">中国人的肠道微生物信息数据库</h2>
            <div class="desc__bd">
              <p>XX年数据积累，国内独家的基因大数据库 / 近三千个病人肠道微生物的测序数据</p>
              <p>因突变、疾病、药物数据千万条 / 上万篇肠道微生物与疾病的英文文献</p>
              <p>自主的测序数据分析计算机程序 / 肠道微生物组成与疾病关系的数学模型、基因大数据库</p>
            </div>
            <nuxt-link class="itv-link" to="">继续了解普瑞森大数据平台 ></nuxt-link>
          </div>
          <img src="../assets/pic-flow-3.png" alt="pic-3">
        </div>
      </div>
    </section>
    <section class="section section-6">
      <div class="itv-content itv-flex-justify--sb">
        <nuxt-link to="" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-1.png" alt="icon-section6-1">
          <span>了解肠癌早筛</span>
        </nuxt-link>
        <nuxt-link to="" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-2.png" alt="icon-section6-2">
          <span>了解儿童肠道检测</span>
        </nuxt-link>
        <nuxt-link to="" class="itv-card itv-flex-justify--sb">
          <img src="../assets/index/icon-section6-3.png" alt="icon-section6-3">
          <span>了解肠道大数据服务</span>
        </nuxt-link>
      </div>
    </section>
    <section class="section section-7">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          用户故事
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <img src="../assets/index/pic-section7.png" alt="">
      </div>
    </section>
    <section class="section section-8">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          我们的合作伙伴
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <img class="pic" src="../assets/index/pic-section8.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    head() {
      return {
        title: '普瑞森',
        meta: [
          {hid: 'description', name: 'description', content: '普瑞森的描述'}
        ]
      }
    },
    layout: 'full',
    computed:{
      bannerColor(){
        return {
          'n1':this.bannerActive == 0,
        }
      }
    },
    data() {
      return {
        bannerActive:0,
        bannerOption: {
          effect : 'fade',
          fade: {
            crossFade: true,
          },
          autoplay: 3000,
          onSlideChangeStart: swiper => {
            this.bannerActive = swiper.realIndex;
          }
        },
        swiperOption: {
          loop: true,
          autoplay: 5000,
//          slidesPerView: 3,
          paginationClickable: true,
//          spaceBetween: 70,
//          slidesOffsetBefore:87,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
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
    .itv-banner{
      &-cnt__desc{
        font-size: 16px;
      }
      .swiper-slide{
        height: 660px;
        img{
          width: 100%;
          object-fit: cover;
        }
        &.n1{
          background: url("../assets/index/banner-1.jpg") no-repeat;
          background-position: -200px;
        }
      }
      &.n1{
        background: #dfe4e7;
      }
      &.n2{
        background: $white;
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
      padding:0;
      &__banner {
        position: absolute;
        left: -200px;
        top: 0;
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
