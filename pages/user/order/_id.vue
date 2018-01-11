<template>
  <div class="itv-order" v-if="orderDetail">
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
              <span class="itv-icon itv-icon-order-status-a--done"></span>
              <div>
                <p>用户下单</p>
                <p>{{orderDetail.iso_create_time | toDate}}</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon" :class="'itv-icon-arrow-right'+(orderStatus(1)? '--done':'')"></span>
            </li>
            <li>
              <span class="itv-icon" 
                    :class="'itv-icon-order-status-b'+(orderStatus(1)? '--done':'')"></span>
              <div>
                <p>付款成功</p>
                <p v-if="orderStatus(1)">
                  <!-- 这里后台下单的话支付时间为null，故此时以下单时间为准 -->
                  {{orderDetail.iso_pay_time || orderDetail.iso_create_time | toDate}}
                </p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon" :class="'itv-icon-arrow-right'+(orderStatus(2)? '--done':'')"></span>
            </li>
            <li>
              <span class="itv-icon" 
                    :class="'itv-icon-order-status-c'+(orderStatus(2)? '--done':'')"></span>
              <div>
                <p>试剂盒已寄出</p>
                <p v-if="orderStatus(2)">{{orderDetail.iso_send_time | toDate}}</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon" :class="'itv-icon-arrow-right'+(orderStatus(3)? '--done':'')"></span>
            </li>
            <li>
              <span class="itv-icon" 
                    :class="'itv-icon-order-status-d'+(orderStatus(3)? '--done':'')"></span>
              <div>
                <p>样本检测中</p>
                <p v-if="orderStatus(3)">{{orderDetail.iso_receive_time | toDate}}</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon" :class="'itv-icon-arrow-right'+(showAnalyzeTime? '--done':'')"></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-d_2"
                    :class="'itv-icon-order-status-d'+(showAnalyzeTime? '--done':'')"></span>
              <div>
                <p>正在分析实验数据</p>
                <p v-if="showAnalyzeTime">{{getAnalyzeTime(orderDetail.iso_receive_time) | toDate}}</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line">
              <span class="itv-icon" :class="'itv-icon-arrow-right'+(orderStatus(4)? '--done':'')"></span>
            </li>
            <li>
              <span class="itv-icon" 
                    :class="'itv-icon-order-status-e'+(orderStatus(4)? '--done':'')"></span>
              <div>
                <p>已出报告</p>
                <p v-if="orderDetail.status ===4">{{orderDetail.iso_finish_time | toDate}}</p>
              </div>
            </li>
          </ul>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 0">
            <span style="margin-right: 24px">请在30分钟内付款，否则订单将自动关闭</span>
            <base-button size="small" type="error" @click="openPayDialog(orderDetail)">付款</base-button>
            <p style="width: 200px;margin: 0 auto; text-align: left">剩余时间 {{countDown}}</p>
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 1">
            您已付款成功，我们会尽快寄出试剂盒
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 2">
            <p>试剂盒已寄出，正马不停蹄奔向您，请您注意签收哦~</p>
            <p>运单号：{{trackingToStr}}（顺丰快递）</p>
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 3 && !showAnalyzeTime">
            实验室正在为您检测样本...
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 3 && showAnalyzeTime">
            实验室正将您的检测数据与普瑞森基因数据库进行数据对比，请您耐心等待...
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 4">
            您的检测报告已出，您可以点击下方报告查看完整报告
          </div>
          <div class="itv-order-status-content-info" v-if="orderDetail.status === 5">
            订单已关闭
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
              <th style="width: 150px"></th>
              <th style="width: 120px"></th>
            </tr>
          </thead>
          <tbody class="itv-order-finished-table-body">
            <template v-for="order in orderDetail.sub_orders" v-if="order.status === 4">
              <tr>
                <td>{{order.product_name}}</td>
                <td>{{order.iso_report_time | toDate}}</td>
                <td>{{order.person_name}}</td>
                <td>{{order.person_sex}}</td>
                <td>{{order.person_age}}</td>
                <td>
                  <base-button size="small" line @click="openReport(order,0)">查看完整报告</base-button>
                </td>
                <td>
                  <base-button size="small" line @click="downLoadReport(order,0)">下载报告</base-button>
                </td>
              </tr>
              <tr v-if="order.report_full_link.split(',').length>1">
                <td>肠道微生态检测</td>
                <td>{{order.iso_report_time | toDate}}</td>
                <td>{{order.person_name}}</td>
                <td>{{order.person_sex}}</td>
                <td>{{order.person_age}}</td>
                <td>
                  <base-button size="small" line @click="openReport(order,1)">查看完整报告</base-button>
                </td>
                <td>
                  <base-button size="small" line @click="downLoadReport(order,1)">下载报告</base-button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <!-- 订单信息 -->
      <div class="itv-order-info">
        <h2 class="itv-order-main-item-title">订单信息</h2>
        <div class="itv-order-info-table">
          <header class="itv-table-header itv-order-info-table-title">
            <span>订单号：{{orderDetail.code}}</span>
            <span>
              <span class="itv-icon itv-icon-message"></span>
              <a @click="openMessageDialog" class="itv-order-info-table-title-message">
                给客服留言
                <i class="itv-order-info-table-title-message-Badge"
                  v-if="orderDetail.total_unread_messages>0">
                  {{orderDetail.total_unread_messages>99? 99:orderDetail.total_unread_messages}}
                </i>
              </a>
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
                <p style="width: 100px" class="itv-order-info-table-content-list-item-price">{{orderDetail.product_price | toFix}}</p>
                <p style="width: 200px; font-size: 18px;">总金额：<span class="itv-order-info-table-content-list-item-price">{{orderPrice | toFix}}</span></p>
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
                <p><i style="width: 72px">支付方式：</i><span>{{payChannel(orderDetail)}}</span></p>
                <p><i style="width: 72px">支付时间：</i><span>{{orderDetail.iso_pay_time | toDate}}</span></p>
                <p><i style="width: 72px">应付金额：</i><span>{{orderPrice | toFix}}</span></p>
                <p><i style="width: 72px">优惠金额：</i><span>{{orderDetail.discount | toFix}}</span></p>
                <p><i style="width: 72px">实付金额：</i><span>{{orderDetail.price | toFix}}</span></p>
              </li>
              <li>
                <p class="itv-order-info-table-content-info-title">试剂盒运单信息</p>
                <p><i style="width: 72px">快递公司：</i><span>{{orderDetail.tracking_nos > 0? '顺丰快递': '-'}}</span></p>
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
    
    <!-- 支付弹窗 -->
    <pay-dialog :visible.sync="payDialogInfo.show" :payOrder="payDialogInfo.order"></pay-dialog>

    <!-- 留言弹窗 -->
    <base-message :visible.sync="showMessageDialog" :orderId="$route.params.id"></base-message>

  </div>
</template>

<script>
import ApiUser from "../../../api/user.js";
import axios from "axios";

export default {
  name: "Order",
  head() {
    return {
      title: "订单详情 - 普瑞森基因",
      meta: [{ hid: "order", name: "description", content: "订单详情" }]
    };
  },
  mounted() {
    this.getOrderdetail(this.$route.params.id);
    // 未付款倒计时
    this.countDownTimer = setInterval(() => {
      if (this.orderDetail.status === 0) {
        this.updateCountDown();
      } else {
        clearInterval(this.countDownTimer);
      }
    }, 500);
  },
  destroyed() {
    clearInterval(this.countDownTimer);
  },
  data() {
    return {
      showMessageDialog: false,
      orderDetail: {},
      countDown: "",
      countDownTimer: null,
      payDialogInfo: {
        show: false,
        order: {}
      }
    };
  },
  methods: {
    /**
     * 打开支付弹窗
     */
    openPayDialog(order) {
      this.payDialogInfo = {
        show: true,
        order: order
      };
    },

    /**
     * 获取订单详情
     */
    getOrderdetail(orderId) {
      ApiUser.getOrderdetail(orderId).then(res => {
        if (res.data.code === 0) {
          this.orderDetail = res.data.data.order;
        }
      });
    },

    /**
     * 跳转到报告页面
     */
    openReport(order,index) {
      // 更新报告查看次数
      var newPage = window.open("", "_blank");
      ApiUser.updateReportViews(order.id, {}).then(res => {
        if (res.data.code === 0) {
          newPage.location = order.report_full_link.split(',')[index];
        }
      });
    },

    /**
     * 下载报告
     */
    downLoadReport(order,index) {
      var newPage = window.open("", "_blank");
      newPage.location = order.report_download_link.split(',')[index];
    },

    /**
     * 追踪快递单号
     * bills {Array} 单号数组
     */
    billTracking(bills) {
      window.open(
        `http://www.sf-express.com/cn/sc/dynamic_function/waybill/#search/bill-number/${bills.join(
          ","
        )}`
      );
    },

    /**
     * 获取分析时间(检测时间+7天)
     * receiveTime {str} 收到试剂盒时间即开始检测的时间
     */
    getAnalyzeTime(receiveTime) {
      var time = new Date(receiveTime).getTime();
      return time + 7 * 24 * 60 * 60 * 1000 + 0.9527 * 60 * 60 * 1000;
    },

    /**
     * 根据当前订单状态判断是否激活图标
     */
    orderStatus(statusCode) {
      if (
        statusCode <= this.orderDetail.status &&
        this.orderDetail.status !== 5
      ) {
        return true;
      }
    },

    /**
     * 订单关闭倒计时
     */
    updateCountDown() {
      var time =
        new Date(this.orderDetail.iso_create_time).getTime() +
        30 * 60 * 1000 -
        Date.now();

      if (time <= 0) {
        // 倒计时结束刷新页面
        location.reload();
        return;
      }
      var min = Math.floor(time / (60 * 1000));
      var sec = Math.floor((time - min * 60 * 1000) / 1000);
      var addZero = num => {
        return (num < 10 ? "0" : "") + num;
      };
      this.countDown = addZero(min) + " : " + addZero(sec);
    },

    /**
     * 支付渠道
     */
    payChannel(orderDetail) {
      if (!this.orderDetail.transaction) {
        return "-";
      }
      var channel = orderDetail.transaction.channel;
      if (channel) {
        if (channel === "ALI_WEB") {
          return "支付宝支付";
        } else {
          return "微信支付";
        }
      } else {
        return "-";
      }
    },

    /**
     * 打开留言弹窗
     */
    openMessageDialog() {
      this.showMessageDialog = true;
      this.getOrderdetail(this.$route.params.id);
    }
  },
  computed: {
    /**
     * 订单总价
     */
    orderPrice() {
      return this.orderDetail.product_price * this.orderDetail.quantity;
    },

    /**
     * 运单数组转字符串
     */
    trackingToStr() {
      if (this.orderDetail.tracking_nos>0) {
        return this.orderDetail.tracking_nos.join(",");
      } else {
        return "-";
      }
    },

    /**
     * 是否显示分析时间
     */
    showAnalyzeTime() {
      if (!this.orderDetail.iso_receive_time) {
        return;
      }
      return (
        Date.now() > this.getAnalyzeTime(this.orderDetail.iso_receive_time)
      );
    }
  },
  filters: {
    /**
     * 日期格式化
     */
    toDate(val) {
      if (!val) {
        return "-";
      }
      /**
       * 数字补零
       */
      var addZero = num => {
        return (num < 10 ? "0" : "") + num;
      };
      var time = new Date(val);
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var day = time.getDate();
      var hour = addZero(time.getHours());
      var min = addZero(time.getMinutes());
      var sec = addZero(time.getSeconds());
      return `${year}-${month}-${day} ${hour}:${min}`;
    }
  }
};
</script>

<style lang="scss">
@import "../../../assets/style/variable.scss";
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
      > li {
        width: 120px;
        > div {
          margin-top: 16px;
          p {
            line-height: 24px;
          }
        }
      }
      .itv-order-status-content-status-line {
        width: 50px;
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
            > * {
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
          > li {
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
          > li:last-child {
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
.itv-order-info-table-title-message {
  position: relative;
  &-Badge {
    position: absolute;
    right: -10px;
    top: -10px;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    background: $red;
    color: $white;
  }
}
</style>
