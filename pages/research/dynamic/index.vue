<template>
  <div class="itv-research">
    <header class="itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
        <span>技术</span>
        <i>&gt;</i>
      </span>
      <span>科研动态</span>
    </header>
    <ul class="itv-research-list">
      <li class="itv-research-list-item" v-for="item in articleList" :key="item.id"
          @click="$router.push({name: 'research-dynamic-id',params:{id:1}})">
        <div class="itv-research-list-item__img">
          <img :src="item.img">
        </div>
        <div class="itv-research-list-item__content">
          <h3>{{item.title}}</h3>
          <p class="itv-research-list-item__content-profile">{{item.profile}}</p>
          <p class="itv-research-list-item__content-info">
            <span>{{item.author}}</span>
            <span>{{item.time}}</span>
          </p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'ResearchDynamic',
    head() {
      return {
        title: '科研动态 -普瑞森基因',
        meta: [
          { hid: 'dynamic', name: 'description', content: '科研动态' }
        ]
      }
    },
    data() {
      return {
        articleList: [
          {
            img: 'https://i2.wp.com/www.cleatech.com/wp-content/uploads/2017/07/lab_equipment.png?ssl=1',
            title: '测试文章1111',
            profile: '这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试',
            author: 'interval',
            time: '2017-10-10'
          },
          {
            img: 'https://i2.wp.com/www.cleatech.com/wp-content/uploads/2017/07/lab_equipment.png?ssl=1',
            title: '测试文章2222',
            profile: '这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试',
            author: '普瑞森',
            time: '2017-11-20'
          },
          {
            img: 'https://i2.wp.com/www.cleatech.com/wp-content/uploads/2017/07/lab_equipment.png?ssl=1',
            title: '测试文章333',
            profile: '这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测试文章这是测试测试测这是测试测试测试文章这是测试测试',
            author: '普瑞森',
            time: '2017-12-6'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
@import '../../../assets/style/variable';
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
        >p {
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
