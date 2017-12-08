<template>
  <div class="itv-paper">
    <header class="itv-breadcrumbs">
       <span class="itv-breadcrumbs-item">
         <nuxt-link to="/user">个人中心</nuxt-link>
        <i>&gt;</i>
      </span>
      <span>我的报告</span>
    </header>
    <div class="itv-paper-main">
      <h2 class="itv-paper-main-title">我的报告</h2>
      <table class="itv-paper-main-table">
        <thead class="itv-table-header">
          <tr>
            <th>报告类型</th>
            <th>生成时间</th>
            <th>被测人</th>
            <th>性别</th>
            <th>年龄</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="itv-paper-main-table-body">
          <tr v-for="report in reportList" :key="report.id">
            <td>{{report.product_name}}</td>
            <td>{{report.iso_report_time | toDate}}</td>
            <td>{{report.person_name}}</td>
            <td>{{report.person_sex}}</td>
            <td>{{report.person_age}}</td>
            <td>
              <base-button size="small" line @click="openReport(report.report_full_link)">查看完整报告</base-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import ApiUser from '../../api/user.js';
  export default {
    name: 'Report',
    head() {
      return {
        title: '我的报告 - 普瑞森基因',
        meta: [
          { hid: 'report', name: 'description', content: '我的报告' }
        ]
      }
    },
    data() {
      return {
        reportList: [],
        user: null
      }
    },
    methods: {
      /**
       * 列出当前用户的报告
       */
      getUserReports() {
        ApiUser.getUserReports().then(
          res => {
            if (res.data.code === 0) {
              this.reportList = res.data.data.reports;
            }
          }
        )
      },

      /**
       * 跳转到报告页面
       */
      openReport(url) {
        window.open(url);
      },
    },
    watch: {
      '$store.state.user'(newVal,oldVal) {
        if (newVal) {
          this.user = this.$store.state.user;
          this.getUserReports();
        }
      }
    },
    filters: {
      toDate(val) {
        if (!val) {
          return '-';
        };
        var time = new Date(val);
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var day = time.getDate();
        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        return `${year}-${month}-${day} ${hour}:${min}`;
      }
    }
  }
</script>
<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-paper {
  width: 1100px;
  padding-bottom: 80px;
  &-main {
    &-title {
      font-size: 18px;
    }
    &-table {
      margin-top: 16px;
      width: 100%;
      border: 1px solid $border;
      background: $white;
      &-body {
        line-height: 60px;
        tr {
          border-top: 1px solid $border;
        }
      }
    }
  }
}
</style>
