<template>
  <div class="itv-view-child">
    <header class="itv-content itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
         <nuxt-link to="/">首页</nuxt-link>
        <i>&gt;</i>
      </span>
      <span>儿童肠道检测</span>
    </header>
    <section class="itv-banner">
      <div class="itv-content">
        <div class="itv-banner-cnt">
          <h2 class="itv-banner-cnt__title">儿童肠道检测</h2>
          <div class="itv-banner-cnt__desc">
            <div class="block">
              <h3>担心孩子出现各种问题</h3>
              <p>腹泻 / 食欲不振 / 肥胖 / 营养不良 / 抗生素滥用</p>
            </div>
            <p>各种问题可能时刻威胁着我们的宝贝，但您有时也许感到无从下手。</p>
            <p>其实儿童肠道菌群检测能帮您预防这些问题</p>
          </div>
        </div>
      </div>
      <img class="itv-banner-img" src="../../assets/index/banner-1.jpg" alt="banner">
    </section>
    <section class="section section-2 bg--white">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
          <div class="content">
            <p>检测3000+种微生物组成的菌群及其丰度</p>
            <p>全面评估儿童的肠道健康</p>
          </div>
          <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
        </h3>
        <div class="section-2-item">
          <div class="desc">
            <h2 class="desc__title">儿童成长问题</h2>
            <div class="desc__bd">
              <p>儿童肠道菌群失调是引起儿童消化不良、食欲不振肥胖 营养不良、发育迟缓等成长问题的重要原因。</p>
            </div>
          </div>
          <img width="323px" src="../../assets/child/pic-section2-1.png"
               srcset="../../assets/child/pic-section2-1.png 2x" alt="pic-1">
        </div>
        <div class="section-2-item">
          <img width="514px" src="../../assets/child/pic-section2-2.png"
               srcset="../../assets/child/pic-section2-2.png 2x" alt="pic-2">
          <div class="desc">
            <h2 class="desc__title">疾病预防</h2>
            <div class="desc__bd">
              <p>对比普瑞森儿童肠道微生物数据库，通过科学的模型和算法能分析各种儿童疾病的患病风险</p>
              <p>腹泻 / 营养不良与肥胖症 / 自闭症 / 小二糖尿病 / 免疫系统疾病。从而做到重点预防，防止疾病发生。</p>
            </div>
          </div>
        </div>
        <div class="section-2-item">
          <div class="desc">
            <h2 class="desc__title">免疫力问题</h2>
            <div class="desc__bd">
              <p>儿童肠道菌群是重要的后天获得性免疫，在胃肠道各方面功能中起到重要的作用，通过监测儿童肠道菌群：</p>
              <p>能了解儿童肠道免疫环境情况 / 能指导有益菌摄取，增强免疫力 / 能监测儿童是否受到服用抗生素的威胁。</p>
            </div>
          </div>
          <img width="459px" src="../../assets/child/pic-section2-3.png"
               srcset="../../assets/child/pic-section2-3.png 2x" alt="pic-3">
        </div>
        <div class="section-2-item center">
          <img width="372px" src="../../assets/child/pic-section2-4.png"
               srcset="../../assets/child/pic-section2-4.png 2x" alt="pic-3">
          <div class="desc">
            <p>宝宝出生前，生活在无菌的子宫中</p>
            <p>出生后，外界微生物开始在宝宝肠道内定植宝宝肠道菌群逐步发展，到3岁左右接近成人状态。</p>
          </div>
          <img width="443px" src="../../assets/child/pic-section2-5.png"
               srcset="../../assets/child/pic-section2-5.png 2x" alt="pic-3">
          <p class="desc-sub">这些都会影响儿童肠道菌群，从而影响肠道健康，我们的儿童肠道检测报告，会帮助您规避可能存在的健康风险</p>
        </div>
      </div>
    </section>
    <common-page>
      <section class="section">
        <div class="itv-content">
          <h3 class="section-title">
            <img class="section-title__icon--left" src="../../assets/icon-title-left.png" alt="icon">
            普瑞森基因儿童倡导检测包含项目明细
            <img class="section-title__icon--right" src="../../assets/icon-title-right.png" alt="icon">
          </h3>
          <img width="962px" src="../../assets/child/pic-section5.png" srcset="../../assets/child/pic-section5.png 2x"
               alt="pic-section-10">
        </div>
      </section>
    </common-page>
    <!-- 邀请码输入窗 -->
    <code-form @login="openLoginDialog" :productShow="productShow" :productId="productId"></code-form>

    <!-- 邀请码弹窗 -->
    <base-dialog :visible.sync="showDialog" width="1000px" class="itv-code-center-dialog">
      <code-form @login="openLoginDialog" class="itv-code-tips" :productShow="productShow" :productId="productId"></code-form>
      <div class="itv-code-tips">
        <h4 class="itv-code-tips-title" @click="showDialogImg=!showDialogImg">
          如何找到邀请码？
          <span class="itv-icon" :class="'itv-icon-arrow-'+ (showDialogImg?'up':'down')"></span>
        </h4>
        <div class="itv-code-tips-img" v-show="showDialogImg">
          <img src="../../assets/code-tips.png" alt="code-tips">
        </div>
      </div>
    </base-dialog>

    <!-- 悬浮菜单 -->
    <float-menu @open="openCodeDialog" :productShow="productShow"></float-menu>
  </div>
</template>

<script>
  import ApiUser from '../../api/user.js';
  import CommonPage from '../../components/CommonPage';

  export default {
    name: 'ServiceChild',
    components: {CommonPage},
    head() {
      return {
        title: '儿童肠道检测 -普瑞森基因',
        meta: [
          {hid: 'child', name: 'description', content: '儿童肠道检测'}
        ]
      }
    },
    mounted() {
      this.getProductInfo();
    },
    data() {
      return {
        code: '',
        showDialog: false,
        showDialogImg: false,
        productShow: true,
        productId: 2
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

  .itv-view-child {
    .bg--white {
      background: $white;
    }
    .itv-banner {
      background: #dfe4e7;
      &-cnt {
        top: 25%;
        &__desc {
          width: 480px;
          font-size: 14px;
          .block {
            position: relative;
            margin-bottom: 32px;
            color: $blue;
            h3 {
              font-size: 18px;
              color: $font-sub;
              margin-bottom: 8px;
            }
            &:after {
              position: absolute;
              content: '';
              left: 0;
              bottom: -16px;
              width: 100px;
              height: 1px;
              background: $font-sub;
            }
          }
        }
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
    .section-2{
      &-item {
        position: relative;
        height: 400px;
        text-align: left;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      &-item.center {
        height: 650px;
        flex-direction: column;
        .desc {
          text-align: center;
        }
        .desc-sub {
          color: $font-sub;
        }
      }
    }
  }
</style>
