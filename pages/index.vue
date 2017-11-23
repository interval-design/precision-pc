<template>
  <div class="itv-view-index">
    <section class="section section-1">
      <div class="itv-container--special">
        <div class="section-1__desc">
          <h2 class="section-title">儿童肠道检测</h2>
          <p>检测3000+种微生物自称的菌群及其丰富程度，全面评估儿童的倡导健康</p>
          <base-button class="itv-view-index--btn" size="big">了解更多</base-button>
        </div>
      </div>
      <img class="section-1__banner" src="../assets/index/banner-1.png" alt="banner">
    </section>
    <section class="section section-2">
      <div class="itv-container--special">
        <div class="section-2__desc">
          <h3 class="section-title">你的肠道健康他们都知道</h3>
          <p>您的肠道内住着大约8888种数以亿计的微生物。其中888种有益菌，8888种有害菌。 有益菌和有害菌相互作用此消彼长，维持着肠道生态平衡</p>
          <base-button class="itv-view-index--btn" size="big">了解微生物组学</base-button>
        </div>
      </div>
      <img class="section-2__banner" src="../assets/index/banner-2.png" alt="banner">
    </section>
    <section class="section section-3">
      <div class="itv-container--special">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/index/icon-title-left.png" alt="icon">
          苗条菌和肥胖菌
          <img class="section-title__icon--right" src="../assets/index/icon-title-right.png" alt="icon">
        </h3>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide itv-card" v-for="(item,index) in 3">
              <div>{{ index }}</div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    layout: 'full',
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 70,
          slidesOffsetBefore:87,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          },
          onTap: swiper => {
            console.log('onTap', swiper.realIndex)
          }
        }
      }
    },
  }
</script>

<style lang="scss">
  @import "../assets/style/variable";

  .itv-view-index {
    .itv-view-index--btn {
      padding: 0 24px;
    }
    .section {
      position: relative;
      &-title {
        font-size: 22px;
        &__icon--left{
          margin-right: 32px;
        }
        &__icon--right{
          margin-left: 32px;
        }
      }
    }
    .section-1 {
      height: 661px;
      background: $white;
      &__banner {
        position: absolute;
        right: 0;
        top: 0;
      }
      &__desc {
        position: absolute;
        top: 35%;
        left: 0;
        letter-spacing: 1.85px;
        p {
          font-size: 16px;
          color: $font-sub;
          width: 400px;
          margin-bottom: 32px;
        }
      }
      .section-title {
        font-size: 48px;
        margin-bottom: 24px;
      }
    }
    .section-2 {
      height: 450px;
      &__banner {
        position: absolute;
        left: 0;
        top: 0;
      }
      &__desc {
        position: absolute;
        top: 20%;
        right: 0;
        p {
          color: $font-sub;
          width: 546px;
          margin-bottom: 32px;
        }
      }
      .section-title {
        margin-bottom: 16px;
      }
    }
    .section-3 {
      height: 600px;
      background: $light-blue;
      text-align: center;
      .section-title {
        padding: 56px 0;
      }
      .swiper-wrapper {
        padding: 20px 0;
      }
      .swiper-slide {
        &:last-child {
          margin: 0 !important;
        }
      }
      .swiper-button-prev{
        left: 0;
        width: 57px;
        height: 57px;
        background-size:auto;
        background-image: url("../assets/index/btn-arrow-left.png");
      }
      .swiper-button-next{
        right: 0;
        width: 57px;
        height: 57px;
        background-size:auto;
        background-image: url("../assets/index/btn-arrow-right.png");
      }
      .itv-card {
        width: 260px !important;
        height: 350px;
        padding: 48px 32px;
      }
    }
  }
</style>
