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
            <tr v-for="order in orderDetail.sub_orders" :key="order.id" v-if="order.status === 4">
              <td>{{order.product_name}}</td>
              <td>{{order.iso_report_time | toDate}}</td>
              <td>{{order.person_name}}</td>
              <td>{{order.person_sex}}</td>
              <td>{{order.person_age}}</td>
              <td>
                <base-button size="small" line @click="openReport(order.report_full_link)">查看完整报告</base-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="itv-order-info">
        <h2 class="itv-order-main-item-title">订单信息</h2>
        <div class="itv-order-info-table">
          <header class="itv-table-header itv-order-info-table-title">
            <span>订单号：{{orderDetail.code}}</span>
            <span>
              <span class="itv-icon itv-icon-message" style="margin-right: 8px;"></span>
              <a @click="showMessageDialog = true">给客服留言</a>
            </span>
          </header>
          <div class="itv-order-info-table-content">
            <ul class="itv-order-info-table-content-list">
              <li class="itv-order-info-table-content-list-item">
                <img src="../../../assets/pic-product-1.png" v-if="orderDetail.product === 1">
                <img src="../../../assets/pic-product-2.png" v-if="orderDetail.product === 2">
                <img src="../../../assets/pic-product-3.png" v-if="orderDetail.product === 3">
                <p style="width: 250px">{{orderDetail.product_name}}</p>
                <p style="width: 50px">x{{orderDetail.quantity}}</p>
                <p style="width: 100px" class="itv-order-info-table-content-list-item-price">￥{{orderDetail.product_price/100}}</p>
                <p style="width: 200px; font-size: 18px;">总金额：<span class="itv-order-info-table-content-list-item-price">￥{{orderPrice}}</span></p>
              </li>
            </ul>
            <ul class="itv-order-info-table-content-info">
              <li>
                <p class="itv-order-info-table-content-info-title">收件人信息</p>
                <p><i style="width: 56px">收件人：</i><span>{{orderDetail.consignee}}</span></p>
                <p><i style="width: 56px">电话：</i><span>{{orderDetail.phone}}</span></p>
                <p><i style="width: 56px">地址：</i><span>{{orderDetail.address}}</span></p>
              </li>
              <li>
                <p class="itv-order-info-table-content-info-title">支付信息</p>
                <p><i style="width: 72px">支付方式：</i><span>微信支付</span></p>
                <p><i style="width: 72px">支付时间：</i><span>{{orderDetail.iso_pay_time | toDate}}</span></p>
                <p><i style="width: 72px">应付金额：</i><span>￥{{orderPrice}}</span></p>
                <p><i style="width: 72px">优惠金额：</i><span>{{'￥' && orderDetail.discount || '-'}}</span></p>
                <p><i style="width: 72px">实付金额：</i><span>{{'￥' && orderDetail.price || '-'}}</span></p>
              </li>
              <li>
                <p class="itv-order-info-table-content-info-title">试剂盒运单信息</p>
                <p><i style="width: 72px">快递公司：</i><span>顺丰快递</span></p>
                <p><i style="width: 72px">运单号：</i><span>{{trackingToStr}}</span></p>
                <p><i style="width: 72px">寄出时间：</i><span>{{orderDetail.iso_send_time | toDate}}</span></p>
                <p>
                  <base-button size="small" type="info" line @click="billTracking(orderDetail.tracking_nos)">运单快捷查询</base-button>
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
  import ApiUser from '../../../api/user.js';
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
    created() {
//      this.getOrderdetail(this.$route.params.id);
    },
    data() {
      return {
        showMessageDialog: false,
        orderDetail: {}
      }
    },
    methods: {
      /**
       * 获取订单详情
       */
      getOrderdetail(orderId) {
        ApiUser.getOrderdetail(orderId).then(
          res => {
            if (res.data.code === 0) {
              this.orderDetail = res.data.data.order;
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

      /**
       * 追踪快递单号
       * bills {Array} 单号数组
       */
      billTracking(bills) {
        window.open(`http://www.sf-express.com/cn/sc/dynamic_function/waybill/#search/bill-number/${bills.join(',')}`);
      }
    },
    computed: {
      /**
       * 订单总价
       */
      orderPrice() {
        return (this.orderDetail.product_price/100) * this.orderDetail.quantity;
      },

      /**
       * 运单数组转字符串
       */
      trackingToStr() {
        if (this.orderDetail.tracking_nos) {
          return this.orderDetail.tracking_nos.join(',');
        }else {
          return '-';
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
@import '../../../assets/style/variable.scss';
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
