<template>
  <div class="itv-common-page">
    <section class="section part-1">
      <div class="itv-content">
        <h3 class="section-title">
          <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
          普瑞森基因用心和技术对待每一项检测
          <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
        </h3>
        <div class="part-1-item">
          <div class="desc">
            <h2 class="desc__title">实验室级规范检测</h2>
            <div class="desc__bd">
              <p>143 位学者 / 按流程标准操作 SOP</p>
              <p>严格的无菌检测环境 / 用心追求精准的检测结果</p>
            </div>
          </div>
          <img src="../assets/pic-flow-1.png" alt="pic-1">
        </div>
        <div class="part-1-item">
          <img src="../assets/pic-flow-2.png" alt="pic-2">
          <div class="desc">
            <h2 class="desc__title">世界领先的基因检测平台</h2>
            <div class="desc__bd">
              <p>GutCheck™肠道微生物基因检测平台 / illumina Miseq 高通量测序仪</p>
              <p>16S rRNA 测序技术 / 高灵敏度和特异性</p>
            </div>
            <nuxt-link class="itv-link" :to="{name:'research-microbiology',hash:'#two'}">继续了解普瑞森测序 ></nuxt-link>
          </div>
        </div>
        <div class="part-1-item">
          <div class="desc">
            <h2 class="desc__title">中国人的肠道微生物信息数据库</h2>
            <div class="desc__bd">
              <p>XX年数据积累，国内独家的基因大数据库 / 近三千个病人肠道微生物的测序数据</p>
              <p>因突变、疾病、药物数据千万条 / 上万篇肠道微生物与疾病的英文文献</p>
              <p>自主的测序数据分析计算机程序 / 肠道微生物组成与疾病关系的数学模型、基因大数据库</p>
            </div>
            <nuxt-link class="itv-link" :to="{name:'research-microbiology',hash:'#three'}">继续了解普瑞森大数据平台 ></nuxt-link>
          </div>
          <img src="../assets/pic-flow-3.png" alt="pic-3">
        </div>
      </div>
    </section>
    <template v-if="$route.name !== 'index'">
      <section class="section">
        <div class="itv-content">
          <h3 class="section-title">
            <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
            服务流程
            <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
          </h3>
          <img width="1036" src="../assets/pic-process.png" srcset="../assets/pic-process.png 2x"
               alt="pic-section9">
        </div>
      </section>
      <slot></slot>
      <section class="section">
        <div class="itv-content">
          <h3 class="section-title">
            <img class="section-title__icon--left" src="../assets/icon-title-left.png" alt="icon">
            示例报告
            <img class="section-title__icon--right" src="../assets/icon-title-right.png" alt="icon">
          </h3>
          <img width="944px" src="../assets/pic-report-demo.png" srcset="../assets/pic-report-demo.png 2x"
               alt="pic-section-11">
        </div>
      </section>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'CommonPage'
  };
</script>
<style lang="scss">
  @import "../assets/style/variable";

  .itv-common-page {
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
    .part-1 {
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
  }
</style>
