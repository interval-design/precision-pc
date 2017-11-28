<template>
  <div class="itv-view-ecosystem">
    <header class="itv-content itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
         <nuxt-link to="/">首页</nuxt-link>
        <i>&gt;</i>
      </span>
      <span>肠道微生态检测</span>
    </header>
    <section class="itv-banner bg--white ">
      <div class="itv-content">
        <div class="itv-banner-cnt">
          <h2 class="itv-banner-cnt__title">肠道微生态检测</h2>
          <div class="itv-banner-cnt__desc">
            <p>文案文案文案文案文案文案文案文案文案文案</p>
            <p>文案文案文案文案文案文案文案文案文案文案</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-2">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          苗条菌和肥胖菌
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 3">
              <img src="../../assets/index/icon-section3.png" alt="">
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
              <li>因消化不良而凄恻不好皮肤暗淡</li>
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
    <section class="section section-4">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          普瑞森基因用心和技术对待每一项检测
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <div class="section-4-item">
          <div class="desc">
            <h2 class="desc__title">实验室级规范检测</h2>
            <div class="desc__bd">
              <p>143 位学者 / 按流程标准操作 SOP</p>
              <p>严格的无菌检测环境 / 用心追求精准的检测结果</p>
            </div>
          </div>
          <img src="../../assets/pic-flow-1.png" alt="pic-1">
        </div>
        <div class="section-4-item">
          <img src="../../assets/pic-flow-2.png" alt="pic-2">
          <div class="desc">
            <h2 class="desc__title">世界领先的基因检测平台</h2>
            <div class="desc__bd">
              <p>GutCheckTM 肠道微生物基因检测平台 / illumine Miseq 高通量测序仪</p>
              <p>16S rRNA 测序技术 / 高灵敏度和特异性</p>
            </div>
            <nuxt-link class="itv-link" :to="{name:'research-microbiology',hash:'#two'}">继续了解普瑞森测序 ></nuxt-link>
          </div>
        </div>
        <div class="section-4-item">
          <div class="desc">
            <h2 class="desc__title">中国人的肠道微生物信息数据库</h2>
            <div class="desc__bd">
              <p>XX年数据积累，国内独家的基因大数据库 / 近三千个病人肠道微生物的测序数据</p>
              <p>因突变、疾病、药物数据千万条 / 上万篇肠道微生物与疾病的英文文献</p>
              <p>自主的测序数据分析计算机程序 / 肠道微生物组成与疾病关系的数学模型、基因大数据库</p>
            </div>
            <nuxt-link class="itv-link" :to="{name:'research-microbiology',hash:'#three'}">继续了解普瑞森大数据平台 ></nuxt-link>
          </div>
          <img src="../../assets/pic-flow-3.png" alt="pic-3">
        </div>
      </div>
    </section>
    <section class="section">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          服务流程
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <img src="../../assets/pic-process.png" alt="pic-section9">
      </div>
    </section>
    <section class="section">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          普瑞森基因肠道微生态检测包含项目明细
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <img src="../../assets/ecosystem/pic-section6.png" alt="pic-section-10">
      </div>
    </section>
    <section class="section">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          示例报告
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <img src="../../assets/pic-report-demo.png" alt="pic-section-11">
      </div>
    </section>
    <section class="itv-buy">
      <div class="itv-buy—form">
        <p class="itv-buy—form__title">输入邀请码体验检测服务</p>
        <div class="itv-input-group">
          <input class="itv-input-group__input" type="text" v-model="code" placeholder="输入邀请码">
          <base-button class="itv-input-group__button" @click="submit">体验服务</base-button>
        </div>
      </div>
      <div class="itv-buy—form qr">
        <img src="../../assets/qr-code.jpg" alt="qr">
        <div class="qr-desc">
          <h3>如何获取邀请码</h3>
          <p>扫描关注微信公众号</p>
          <p>参与公众号内的讲座获取邀请码</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ServiceEcosystem',
    head() {
      return {
        title: '肠道微生态检测 -普瑞森基因',
        meta: [
          { hid: 'ecosystem', name: 'description', content: '肠道微生态检测' }
        ]
      }
    },
    data() {
      return {
        code: '',
        swiperOption: {
          loop: true,
          autoplay: 5000,
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        }
      }
    },
    methods: {
      submit() {
        this.$router.push({name: 'user-pay'});
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
    .itv-banner {
      .itv-content {
        height: 500px;
        background: url("../../assets/ecosystem/banner.jpg") no-repeat;
        background-position: top;
        background-size: contain;
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
    .section-3,
    .section-4{
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
