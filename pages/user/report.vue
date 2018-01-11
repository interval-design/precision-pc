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
            <th style="width: 150px"></th>
            <th style="width: 120px"></th>
          </tr>
        </thead>
        <tbody class="itv-paper-main-table-body">
          <template v-for="report in reportList">
            <tr>
              <td>{{report.product_name}}</td>
              <td>{{report.iso_report_time | toDate}}</td>
              <td>{{report.person_name}}</td>
              <td>{{report.person_sex}}</td>
              <td>{{report.person_age}}</td>
              <td>
                <base-button size="small" line @click="openReport(report,0)">查看完整报告</base-button>
              </td>
              <td>
                <base-button size="small" line @click="downLoadReport(report,0)">下载报告</base-button>
              </td>
            </tr>
            <tr v-if="report.report_full_link.split(',').length>1">
              <td>肠道微生态检测</td>
              <td>{{report.iso_report_time | toDate}}</td>
              <td>{{report.person_name}}</td>
              <td>{{report.person_sex}}</td>
              <td>{{report.person_age}}</td>
              <td>
                <base-button size="small" line @click="openReport(report,1)">查看完整报告</base-button>
              </td>
              <td>
                <base-button size="small" line @click="downLoadReport(report,1)">下载报告</base-button>
              </td>
            </tr>
          </template>
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
      openReport(report,index) {
        // 更新报告查看次数
        var newPage = window.open('','_blank');
        ApiUser.updateReportViews(report.id,{}).then(
          res => {
            if (res.data.code === 0) {
              newPage.location = report.report_full_link.split(',')[index];
            }
          }
        )
      },

      /**
       * 下载报告
       */
      downLoadReport(report,index) {
        var newPage = window.open("", "_blank");
        newPage.location = report.report_download_link.split(',')[index];
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
      /**
       * 日期格式化
       */
      toDate(val) {
        if (!val) {
          return '-';
        };
        /**
         * 数字补零
         */
        var addZero = (num) => {
          return (num<10? '0':'') + num;
        } 
        var time = new Date(val);
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var day = time.getDate();
        var hour = addZero(time.getHours());
        var min = addZero(time.getMinutes());
        var sec = addZero(time.getSeconds());
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
