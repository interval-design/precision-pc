<template>
  <div class="itv-research">
    <header class="itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
        <span>技术</span>
        <i>&gt;</i>
      </span>
      <span>科研动态</span>
    </header>
    <ul class="itv-research-list" v-if="articleList && articleList.length>0">
      <li class="itv-research-list-item" v-for="item in articleList" :key="item.id"
          @click="$router.push({name: 'research-dynamic-id',params:{id: item.id}})">
        <div class="itv-research-list-item__img">
          <img :src="item.image">
        </div>
        <div class="itv-research-list-item__content">
          <h3>{{item.title}}</h3>
          <p class="itv-research-list-item__content-profile">{{item.summary}}</p>
          <p class="itv-research-list-item__content-info">
            <span>{{item.author || '佚名'}}</span>
            <span>{{item.iso_create_time | time}}</span>
          </p>
        </div>
      </li>
    </ul>
    <p v-else>暂无动态</p>
  </div>
</template>

<script>
import Article from "../../../api/article.js";
export default {
  name: "ResearchDynamic",
  asyncData() {
    return Article.getArticles({
      params: {
        channel: 1,
        order_by: "-weight",
        page: "",
        per_page: ""
      }
    }).then(res => {
      return { articleList: res.data.data.articles };
    });
  },
  head() {
    return {
      title: "科研动态 -普瑞森基因",
      meta: [{ hid: "dynamic", name: "description", content: "科研动态" }]
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
@import "../../../assets/style/variable";
.itv-research {
  padding-bottom: 80px;
  &-list {
    &-item {
      display: flex;
      padding: 24px 80px 24px 24px;
      margin-top: 24px;
      background: $white;
      cursor: pointer;
      &:first-child {
        margin-top: 0;
      }
      &__img {
        margin-right: 24px;
        img {
          width: 258px;
          height: 175px;
        }
      }
      &__content {
        h3 {
          font-size: 18px;
        }
        > p {
          color: $font-sub;
          span {
            margin-right: 24px;
          }
        }
        &-profile {
          margin-top: 8px;
          height: 120px;
        }
      }
    }
  }
}
</style>
