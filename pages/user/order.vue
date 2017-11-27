<template>
  <div class="itv-order">
    <header class="itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
         <nuxt-link to="/user">个人中心</nuxt-link>
        <i>&gt;</i>
      </span>
      <span>订单详情</span>
    </header>
    <div class="itv-order-main">
      <!-- 订单状态 -->
      <div class="itv-order-status">
        <h2 class="itv-order-main-item-title">
          订单状态
        </h2>
        <div class="itv-order-main-item-content itv-order-status-content">
          <ul class="itv-order-status-content-status">
            <li>
              <span class="itv-icon itv-icon-order-status-a"></span>
              <div>
                <p>用户下单</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon itv-icon-arrow-right"></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-b"></span>
              <div>
                <p>付款成功</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon itv-icon-arrow-right"></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-c"></span>
              <div>
                <p>试剂盒已寄出</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon itv-icon-arrow-right"></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-d"></span>
              <div>
                <p>样本检测中</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon itv-icon-arrow-right"></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-e"></span>
              <div>
                <p>已出报告</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
          </ul>
          <div class="itv-order-status-content-info">
            <span style="margin-right: 24px">请在30分钟内付款，否则订单将自动关闭</span>
            <base-button size="small" type="error" @click="$router.push({path: '/user/pay'})">付款</base-button>
          </div>
        </div>
      </div>
      <!-- 已出报告 -->
      <div class="itv-order-finished">
        <h2 class="itv-order-main-item-title">我的报告</h2>
        <table class="itv-order-finished-table">
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
          <tbody class="itv-order-finished-table-body">
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
      <div class="itv-order-info">
        <h2 class="itv-order-main-item-title">订单信息</h2>
        <div class="itv-order-info-table">
          <header class="itv-table-header itv-order-info-table-title">
            <span>订单号：8888888888888</span>
            <span>
              <span class="itv-icon itv-icon-message" style="margin-right: 8px;"></span>
              <a @click="showMessageDialog = true">给客服留言</a>
            </span>
          </header>
          <div class="itv-order-info-table-content">
            <ul class="itv-order-info-table-content-list">
              <li class="itv-order-info-table-content-list-item">
                <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
                <p style="width: 250px">肠癌早筛测试服务</p>
                <p style="width: 50px">x1</p>
                <p style="width: 100px" class="itv-order-info-table-content-list-item-price">￥999</p>
                <p style="width: 200px; font-size: 18px;">总金额：<span class="itv-order-info-table-content-list-item-price">￥9999</span></p>
              </li>
              <li class="itv-order-info-table-content-list-item">
                <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
                <p style="width: 250px">肠癌早筛测试服务</p>
                <p style="width: 50px">x1</p>
                <p style="width: 100px" class="itv-order-info-table-content-list-item-price">￥999</p>
                <p style="width: 200px; font-size: 18px;">总金额：<span class="itv-order-info-table-content-list-item-price">￥9999</span></p>
              </li>
            </ul>
            <ul class="itv-order-info-table-content-info">
              <li>
                <p class="itv-order-info-table-content-info-title">收件人信息</p>
                <p><i style="width: 56px">收件人：</i><span>张三</span></p>
                <p><i style="width: 56px">电话：</i><span>12345678907</span></p>
                <p><i style="width: 56px">地址：</i><span>广东省广州市越秀区吉祥路1号-f1004距离市中心约5955米</span></p>
              </li>
              <li>
                <p class="itv-order-info-table-content-info-title">支付信息</p>
                <p><i style="width: 72px">支付方式：</i><span>微信支付</span></p>
                <p><i style="width: 72px">支付时间：</i><span>2017-11-11 12:12</span></p>
                <p><i style="width: 72px">应付金额：</i><span>￥99998</span></p>
                <p><i style="width: 72px">优惠金额：</i><span>￥9</span></p>
                <p><i style="width: 72px">实付金额：</i><span>￥998</span></p>
              </li>
              <li>
                <p class="itv-order-info-table-content-info-title">试剂盒运单信息</p>
                <p><i style="width: 72px">快递公司：</i><span>顺丰快递</span></p>
                <p><i style="width: 72px">运单号：</i><span>12345678907</span></p>
                <p><i style="width: 72px">寄出时间：</i><span>2017-11-11 12:12</span></p>
                <p>
                  <base-button size="small" type="info" line>运单快捷查询</base-button>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 留言弹窗 -->
    <base-message :visible.sync="showMessageDialog"></base-message>

  </div>
</template>

<script>
  export default {
    name: 'Order',
    head() {
      return {
        title: '订单详情 - 普瑞森基因',
        meta: [
          { hid: 'order', name: 'description', content: '订单详情' }
        ]
      }
    },
    data() {
      return {
        showMessageDialog: false
      }
    }
  }
</script>

<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-order {
  width: 1100px;
  padding-bottom: 80px;
  &-main {
    &-item {
      &-title {
        font-size: 18px;
      }
      &-content {
        margin-top: 16px;
        border: 1px solid $border;
        width: 100%;
        background: $white;
      }
    }
  }
  &-status-content {
    padding: 24px 64px;
    &-status {
      display: flex;
      justify-content: space-between;
      text-align: center;
      >li {
        width: 120px;
        >div {
          margin-top: 16px;
          p {
            line-height: 24px;
          }
        }
      }
      .itv-order-status-content-status-line {
        width: 90px;
        line-height: 60px;
      }
    }
    &-info {
      margin-top: 40px;
      text-align: center;
    }
  }
  &-finished {
    margin-top: 16px;
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
  &-info {
    margin-top: 16px;
    &-table {
      margin-top: 16px;
      border: 1px solid $border;
      background: $white;
      &-title {
        padding: 0 40px;
        border-bottom: 1px solid $border;
        display: flex;
        justify-content: space-between;
        a {
          color: $font;
        }
      }
      &-content {
        &-list {
          padding: 0 40px;
          &-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            >* {
              margin: auto 0;
            }
            img {
              width: 80px;
              height: 80px;
            }
            &-price {
              color: $red;
            }
          }
        }
        &-info {
          display: flex;
          border-top: 1px solid $border;
          >li {
            flex: 1;
            padding: 16px 40px;
            border-right: 1px solid $border;
            p {
              margin-top: 24px;
              display: flex;
              span {
                flex: 1;
              }
            }
            p:first-child {
              margin-top: 0;
            }
          }
          >li:last-child {
            border: none;
          }
          &-title {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
