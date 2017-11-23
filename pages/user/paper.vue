<template>
  <div class="itv-paper">
    <header class="itv-paper-breadcrumbs">
      <a href="javascript:;">个人中心</a>  &gt; 我的报告
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
          <tr>
            <td>肠癌早筛测试报告</td>
            <td>2017-12-12 12:12</td>
            <td>张三</td>
            <td>男</td>
            <td>40</td>
            <td>
              <base-button size="small" line>查看完整报告</base-button>
            </td>
          </tr>
          <tr>
            <td>肠癌早筛测试报告</td>
            <td>2017-12-12 12:12</td>
            <td>李四</td>
            <td>女</td>
            <td>67</td>
            <td>
              <base-button size="small" line>查看完整报告</base-button>
            </td>
          </tr>
          <tr>
            <td>肠癌早筛测试报告</td>
            <td>2017-12-12 12:12</td>
            <td>王五</td>
            <td>男</td>
            <td>28</td>
            <td>
              <base-button size="small" line>查看完整报告</base-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-paper {
  width: 1100px;
  padding-bottom: 80px;
  &-breadcrumbs {
    line-height: 36px;
    color: $blue;
  }
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
