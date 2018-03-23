<template>
  <div class="itv-view-microbiology">
    <header class="itv-content itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
        <span>技术</span>
        <i>&gt;</i>
      </span>
      <span>微生物组学</span>
    </header>
    <div class="itv-anchor-link" :class="{'fixed':anchorFixed}" ref="anchor">
      <div class="itv-content itv-anchor-link-list">
        <a href="#one" :class="{'active':anchorActive == 1}">微生物组学</a>
        <a href="#two" :class="{'active':anchorActive == 2}">测序平台</a>
        <a href="#three" :class="{'active':anchorActive == 3}">大数据平台</a>
      </div>
    </div>
    <div ref="microbiology">
      <section id="one" class="section section-1">
        <section class="itv-banner-swiper" style="height: 450px">
          <div class="wrap-box" style="height: 450px">
            <div class="wrap-box-item" style="height: 450px">
              <div class="wrap-box-item__text-4">
                <header class="title">你的肠道健康他们都知道</header>
                <p class="p1">设想生活在一个疾病可选择的世界您肠道有一只数以亿计、独一无二的微生物大军供您支配。现在，参加健康革命，争取让他们为您工作。肠道微生物群对健康、表现和寿命的影响可能比您自身基因的影响还要大。现在，在普瑞森的协助下，您可以成为它们更好的主人，并远离疾病。</p>
              </div>
              <img class="wrap-box-item__img" src="../../assets/index/pic-banner-4.jpg" @click="$router.push({name:'microbiology'})">
            </div>
          </div>
        </section>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">苗条菌与肥胖菌</h2>
          <div class="list">
            <h3 class="list-title">厚壁菌和拟杆菌的比例</h3>
            <p>
              研究表明，厚壁菌能够有效的吸收食物中的热量而导致体重增加，当肠道中厚壁菌/拟杆菌比值大，个体偏向于易胖体质；比值小，个体偏向于易瘦体质。</p>
          </div>
          <div class="list">
            <h3 class="list-title">肥胖菌</h3>
            <p>普拉梭菌、乳酸菌属、红蝽杆菌科、丹毒丝菌科含量与人的肥胖有重要联系。</p>
          </div>
          <div class="list">
            <h3 class="list-title">阿克曼氏菌属的含量</h3>
            <p>研究表明阿克曼氏菌属(Akkermansia)可能会降低体重的增加以及炎症的发生。</p>
          </div>
        </div>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">功能菌</h2>
          <div class="list">
            <h3 class="list-title">有益菌</h3>
            <p style="margin-bottom: 8px">
              肠道中有益菌的含量的高低，在一定程度上可以作为个体肠道健康状况的晴雨表。维持肠道益生菌的含量有益于肠道菌群平衡。 有益菌是指能够产生对身体有益中间产物或者直接对人体有益的细菌/真菌，以乳酸菌、双歧杆菌、酵母菌为代表。可以合成各种微生物，参与食物的消化，促进肠道蠕动，抑制治病菌群的生长。</p>
            <p><span class="emphasize">双歧杆菌属</span>：被认为是益生菌属，可以维护肠道正常细菌菌群的平衡，抑制病原菌的生长，防止便秘，胃肠障碍，合成维生 素、氨基酸和改善乳制品的耐乳糖性，提高消化率等。
            </p>
            <p><span class="emphasize">长双歧杆菌</span>：可以抑制有害菌生长，促进消化，提高身体免疫力。</p>
            <p><span class="emphasize">青春双歧杆菌</span>：是在人和动物肠道内都可以检测到的一种益生菌，可以合成维生素B,还可以治疗慢性腹泻和便秘。</p>
            <p><span class="emphasize">两歧双歧杆菌</span>：可以抑制有害菌生长，促进消化，提高机体免疫力。</p>
            <p><span class="emphasize">解木聚糖拟杆菌</span>：可降解木聚糖生成对人体健康有益的木糖、阿魏糖、阿拉伯糖；基因与功能预测并未发现其存在毒副作用。</p>
          </div>
          <div class="list">
            <h3 class="list-title">产丁酸菌</h3>
            <p style="margin-bottom: 8px">丁酸可促进肠粘膜修复及其功能恢复，并且能抑制炎症细胞因子的形成，从而起抗炎症作用。目前已发现的产丁酸菌接近20种。</p>
            <p><span class="emphasize">一致粪球菌</span>：能够产生多种抗菌物质，这些抗菌物质对沙门氏菌、大肠杆菌和金黄色葡萄球菌等致病菌具有良好的抑制作用。</p>
            <p><span class="emphasize">柔嫩梭菌</span>：具有抗炎性,还有一个基因簇是陪伴粪球菌,它可能通过产生丁酸盐促进肠道健康。</p>
          </div>
          <div class="list">
            <h3 class="list-title">有害菌</h3>
            <p style="margin-bottom: 8px">
              有害菌是以产气荚膜杆菌为代表的需氧菌，能够使人体致病的细菌的总称。此类菌数量一旦失控大量生长，就会引发多种疾病，产生致癌物等有害物质，或者影响免疫系统的功能。</p>
            <p><span class="emphasize">阿尔伯蒂埃希氏杆菌</span>：是一种新型的潜在肠源致病菌，与人和鸟类的感染有关，最初是从孟加拉国腹泻的儿童肠道内分离得到。</p>
            <p><span class="emphasize">副流感嗜血杆菌</span>：人体常见菌种，也是人类呼吸道的条件致病菌，可引起心腹膜炎、内膜炎、肾炎、泌尿生殖道炎、胆道感染等多种疾病。</p>
            <p><span class="emphasize">沃氏嗜胆菌</span>：沃氏嗜胆菌的丰度提高与活力增强预示膳食脂肪摄入过量,会造成胆酸形成加剧以及炎性肠病相关细菌过度生长。</p>
            <p><span class="emphasize">费氏柠檬酸杆菌</span>：费氏柠檬酸杆菌引起的尿路感染。</p>
            <p><span class="emphasize">牛链球菌</span>：牛链球菌也是人胃肠道内的常见菌群，可以从人的胃肠道、粪便、以及食品中分离到。牛链球菌败血症或心内膜炎患者常伴有肠 道恶性肿瘤。</p>
          </div>
          <div class="list">
            <h3 class="list-title">中性菌</h3>
            <p style="margin-bottom: 8px">又称为条件致病菌。有的细菌具有双重作用，在正常情况下对健康有益，一旦增殖失控，或从肠道异位，就可能引发许多问题。</p>
            <p><span class="emphasize">普通拟杆菌</span>：该菌存在于肠道内，是健康人肠道菌的核心组成部分。利：一般该菌被认为是对肠道有好处的，有一些菌株有改善肠道功 能和保护结肠的优点；弊：该菌也是一种条件致病菌，若粘附并侵入结肠上皮细胞将导致慢性结肠炎。
            </p>
            <p><span class="emphasize">人体普氏菌</span>：利：存在于口腔、肠道等处的共生细菌；弊：风湿性关节炎患者肠道内的Copri普氏菌含量显著偏高。</p>
            <p><span class="emphasize">脆弱拟杆菌</span>：脆弱拟杆菌弥补人体本身DNA的不足。可以释放消炎物质，帮助免疫系统保持平衡。弊：超过阈值会引起腹泻。</p>
            <p><span class="emphasize">阴沟肠杆菌</span>：阴沟肠杆菌可以产生内毒素，能够让本来吃高脂饲料吃不胖的无菌小鼠发展出严重的肥胖症，同时能够引起小鼠炎症和胰 岛素抵抗，也可以关闭消耗脂肪需要的基因、激活合成脂肪的基因，是国际上一直在寻找的能引起肥胖的细菌。
            </p>
          </div>
          <div class="list">
            <h3 class="list-title">药物相关菌</h3>
            <p style="margin-bottom: 8px">降低药物的利用度，降低药物效果，甚至使之失效的细菌。</p>
            <p><span class="emphasize">迟缓埃格特菌</span>：科学家在模式生物上实验验证了该菌能够降低地高辛药物的利用度，降低药物效果，甚至使之失效，但是人体试验尚未证 实。地高辛属于经典的强心苷类药物，是用于治疗心力衰竭和心律失常的经典处方药。
            </p>
          </div>
        </div>
      </section>
      <section id="two" class="section section-2">
        <div class="bg">
          <div class="itv-content section-head">
            <img class="section__banner" src="../../assets/pic-flow-2.png" alt="banner">
            <div class="section__desc">
              <h1 class="desc__title">测序平台</h1>
              <div class="desc__bd">
                <p class="highlight">世界领先的基因检测平台</p>
                <p>GutCheckTM肠道微生物基因检测平台</p>
                <p>illumine Miseq高通量测序仪</p>
                <p>16S rRNA 测序技术</p>
                <p>高灵敏度和特异性</p>
              </div>
            </div>
          </div>
        </div>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">肠道微生物健康检测产品介绍</h2>
          <div class="list">
            <p>肠道中的正常菌群以厌氧菌组成为主，正常时与机体处于相对的平衡状态，当肠道出现异常时，肠道中的微生态平衡也被打破，菌群的种群和丰度与正常时会有显著差异。</p>
            <p>
              普瑞林基因科技有限公司通过分析受试者的粪便样品，分析受试者体内肠道微生物的组成，来判断受试者的健康状况、疾病风险，并给予可能的饮食或使用益生菌的建议，可检测的疾病包括糖尿病、肥胖、肠炎等。 检测内容包括：肠道菌群多样性指数、肠道菌群组成，其中包括肠型分析和肠道菌群组成，菌群分布、功能菌群统计，包括常见有益菌种类统计、有益菌含量、产丁酸菌含量、有害菌含量、中性菌含量以及药物相关菌含量共4类指标，为您的健康做出全面的个性化的指导。</p>
          </div>
        </div>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">普瑞森肠道微生物基因检测平台</h2>
          <div class="list">
            <p>
              普瑞森基因科技有限公司使用的检测平台是GutCheck，该平台是世界领先的菌群检测平台。GutCheck采用特异的引物设计策略，基于新一代的高通量测序完成检测，比常规的菌群检测方法具有更高的灵敏度和准确性，适用于粪便、呼吸道粘膜分泌液等临床用品。 但任何检测平台都存在一定的系统误差。GutCheck菌群检测服务不能保证可检测到样品中所有的细菌，实验结果未发现某种细菌并不排除其实际存在的可能性。另外，GutCheck菌群检测并不能对所有的细菌在种级别上进行准确细分。</p>
          </div>
        </div>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">普瑞森肠道微生物基因检测方法</h2>
          <div class="list">
            <p>检测者在完成问卷调查后，使用普瑞森设计的采集器进行采集，之后将采集样本寄送至普瑞森公司。</p>
            <p>
              首先，对样本粪便进行预处理，之后对16s rRNA基因的V3-V4可变区作为靶标进行PCR扩增。应用分子学方法对PCR产物进行纯化，再对纯化后的DNA分离进行文库构建，PCR扩增文库将信号放大，高通量测序完成之后用生物信息学对肠道菌群结构组成进行分析。</p>
          </div>
        </div>
      </section>
      <section id="three" class="section section-3">
        <div class="bg--white">
          <div class="itv-content section-head">
            <div class="section__desc">
              <h1 class="desc__title">大数据平台</h1>
              <div class="desc__bd">
                <p class="highlight">中国人的肠道微生物信息数据库</p>
                <p>10年数据积累，国内独家的基因大数据库</p>
                <p>近三千个病人肠道微生物的测序数据</p>
                <p>因突变、疾病、药物数据千万条</p>
                <p>上万篇肠道微生物与疾病的英文文献</p>
                <p>自主的测序数据分析计算机程序</p>
                <p>肠道微生物组成与疾病关系的数学模型、基因大数据库</p>
              </div>
            </div>
            <img class="section__banner" src="../../assets/pic-flow-4.png" alt="banner">
          </div>
        </div>
        <div class="itv-plane itv-content bg--white">
          <h2 class="itv-plane-title">普瑞森肠道微生物基因生物信息学平台</h2>
          <div class="list">
            <p>
              普瑞森拥有强大的肠道微生物信息学技术平台，包括测序数据分析计算机程序、肠道微生物组成与疾病关系的数学模型、基因大数据库。 普瑞森具有国内独家、最全的基因大数据库，包括了近三千个病人肠道微生物的测序数据。数据库拥有基因突变、疾病、药物数据千万条，有上万篇肠道微生物与疾病的英文文献，并建立有与疾病关系的数学模型、基因大数据库。</p>
            <p>
              现已有肠癌、肥胖、炎症等数据模型，并将持续开发更多基因大数据的数学模型。疾病数学模型对序列变异识别、种属归类及相对丰度计算更为准确，合理的数据结构及运算顺序对测序结果给予更全面、更准确的解释。公司针对基因大数据管理包括测序片段的比对、种属归类及丰度计算等，基因数据的标准化， 通过上万行机器学习程序建立数学预测模型。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import NuxtLink from "../../.nuxt/components/nuxt-link";

  export default {
    components: {NuxtLink},
    name: 'ResearchMicrobiology',
    head() {
      return {
        title: '微生物组学 -普瑞森基因',
        meta: [
          { hid: 'microbiology', name: 'description', content: '微生物组学' }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        let _section = this.$refs.microbiology.children;
        this.navScroll(_section);
        window.addEventListener('scroll', () => {
         this.navScroll(_section);
        });
      });
    },
    data() {
      return {
        code: '',
        anchorActive: 1,
        anchorFixed: false,
      }
    },
    methods: {
      navScroll(section) {
        let _child = [];
        for (let i = 0; i < section.length; i++) {
          _child.push(section[i].offsetTop);
        }
        if (window.pageYOffset < 86) {
          this.anchorFixed = false;
          return;
        }
        if (window.pageYOffset + window.innerHeight >= document.getElementById('__nuxt').offsetHeight) {
          // 滑到底部
          this.anchorFixed = true;
          this.anchorActive = _child.length;
          return;
        }
        if (this.$refs.anchor && (window.pageYOffset > this.$refs.anchor.offsetTop)) {
          this.anchorFixed = true;
          for (let i = 0; i < _child.length; i++) {
            if (i < _child.length - 1) {
              if(window.pageYOffset >= _child[i] && window.pageYOffset < _child[i+1]){
                this.anchorActive = i+1;
                break;
              }
            } else {
              if(window.pageYOffset >= _child[i]){
                this.anchorActive = i+1;
              }
            }
          }
        } else if (this.$refs.anchor && (window.pageYOffset < this.$refs.anchor.offsetTop)) {
          this.anchorFixed = false;
        }
      },
      submit() {
        this.$router.push({name: 'user-pay'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/variable";

  .itv-view-microbiology {
    .bg--white {
      background: $white;
    }
    .itv-plane {
      padding: 40px 120px;
      margin-top: 16px;
      &-title {
        color: $blue;
        text-align: center;
      }
      .list {
        margin-top: 32px;
        color: $font-sub;
        &-title {
          font-size: 18px;
          color: $font;
          margin-bottom: 8px;
        }
        .emphasize {
          position: relative;
          font-weight: 600;
          &:before {
            position: absolute;
            content: '·';
            left: -10px;
            top: 0;
          }
        }
      }
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
      &-img{
        transform: translateX(-55%);
      }
    }
    .itv-anchor-link {
      height: 50px;
      width: 100%;
      background: $white;
      &-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 240px;
        color: $font-sub;
        span {
          cursor: pointer;
          &:hover {
            color: $font;
          }
        }
      }
      &.fixed {
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
      }
      .active {
        color: $font;
      }
    }
    .section {
      position: relative;
      text-align: left;
      padding: 0;
      margin-bottom: 100px;
      .highlight {
        color: $blue;
      }
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

      }
      &-head {
        height: 450px;
      }
      .desc__bd {
        padding: 24px 0;
        color: $font-sub;
        max-width: 550px;
      }
    }
    .section-1 {
      .section__desc {
        position: absolute;
        top: 30%;
        right: 0;
        z-index:10;
        .desc__title {
          font-size: 22px;
        }
      }
      .section__banner {
        position: absolute;
        left: -200px;
        top: 0;
      }
    }
    .section-2 {
      .bg {
        background-image: url("../../assets/pic-flow-bg.png");
        background-repeat: no-repeat;
        background-color: $white;
        background-position: center;
        background-size: contain;
      }
      .highlight {
        margin-bottom: 16px;
      }
      .section__banner {
        position: absolute;
        left: 50px;
        top: 20%;
      }
      .section__desc {
        position: absolute;
        right: 150px;
        top: 25%;
      }
      .desc__title {
        font-size: 48px;
        letter-spacing: 5px;
      }
    }
    .section-3 {
      .highlight {
        margin-bottom: 16px;
      }
      .desc__title {
        font-size: 48px;
        letter-spacing: 5px;
      }
      .section__banner {
        position: absolute;
        right: 0;
        top: 20%;
      }
      .section__desc {
        position: absolute;
        left: 50px;
        top: 25%;
      }
    }
  }
</style>
