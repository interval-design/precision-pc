<template>
  <div class="itv-article">
    <header class="itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
        <span>技术</span>
        <i>&gt;</i>
      </span>
      <nuxt-link :to="{name:'about-dynamic'}">科研动态</nuxt-link>
      <span class="itv-breadcrumbs-item">
        <i>&gt;</i>
        <span>文章详情</span>
      </span>
    </header>
    <div class="itv-article-main">
      <header class="itv-article-main__header">
        <h2>{{article.title}}</h2>
        <p>
          <span>{{article.author || '普瑞森'}}</span>
          <span>{{article.iso_create_time | time}}</span>
        </p>
      </header>
      <div class="itv-article-main__content" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import Article from "../../../../api/article.js";
export default {
  name: "ResearchDynamicDetails",
  asyncData({ params }) {
    return Article.getArticleDetail(params.id).then(res => {
      return { article: res.data.data.article };
    });
  },
  head() {
    return {
      title:`${this.article.title} - 普瑞森基因`,
      meta: [{ hid: "dynamicDetails", name: "description", content: `${this.article.title}` }]
    };
  },
  data() {
    return {
      article: {}
    };
  },
  filters: {
    time(val) {
      val = new Date(val);
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      return `${year}-${month}-${day}`;
    }
  }
};
</script>

<style lang="scss">
@import "../../../../assets/style/variable";
.itv-article {
  padding-bottom: 80px;
  &-main {
    padding: 64px 158px 100px 208px;
    background: $white;
    &__header {
      text-align: center;
      h2 {
        font-size: 18px;
      }
      p {
        margin-top: 16px;
        color: $font-sub;
        span {
          margin: 0 16px;
        }
      }
    }
    &__content {
      margin-top: 32px;
    }
  }
}
</style>
