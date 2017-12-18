<template>
  <div class="itv-user" v-if="user">
    <header class="itv-breadcrumbs">
      <span>个人中心</span>
    </header>
    <div class="itv-user-content">
      <aside class="itv-user-aside">
        <div class="itv-user-aside-portrait">
          <img src="../../assets/default-avatar.png">
        </div>
        <p class="itv-user-aside-text">
          <span class="itv-icon itv-icon-weixin"></span>微信还没接入
        </p>
        <p class="itv-user-aside-text">
          <span class="itv-icon itv-icon-phone--done"></span>{{user.mobile}}
          <a @click="openBindDialog">改绑</a>
        </p>
        <div class="itv-user-aside-btn">
          <base-button line @click="$router.push({path: '/user/report'})">查看全部报告</base-button>
        </div>
      </aside>
      <section class="itv-user-main">
        <h2 class="itv-user-main-title">我的订单</h2>
        <div class="itv-user-main-table" v-for="order in orderList" :key="order.id">
          <div class="itv-user-main-table-item">
            <header class="itv-table-header itv-user-main-table-item__header">
              <span>下单时间：{{order.iso_create_time | toDate}}</span>
              <span>订单号：{{order.code}}</span>
              <span style="flex: 1"></span>
              <span>{{orderStatus(order.status)}}</span>
            </header>
            <div class="itv-user-main-table-item__content">
              <ul class="itv-user-main-table-item__content-list">
                <li class="itv-user-main-table-item__content-list-item">
                  <img src="../../assets/pic-product-1.png" v-if="order.product === 1"
                       class="itv-user-main-table-item__content-list-item__img">
                  <img src="../../assets/pic-product-2.png" v-if="order.product === 2"
                       class="itv-user-main-table-item__content-list-item__img">
                  <img src="../../assets/pic-product-3.png" v-if="order.product === 3"
                       class="itv-user-main-table-item__content-list-item__img">
                  <p style="width: 160px">{{order.product_name}}</p>
                  <p style="width: 40px">x{{order.quantity}}</p>
                  <p class="itv-user-main-table-item__content-list-item__price" style="width: 80px">{{order.product_price | toFix}}</p>
                  <p v-if="order.status !== 4" style="width: 100px; color: #919191"><span class="itv-icon itv-icon-time"></span>报告未出</p>
                  <p v-else style="width: 100px">
                    <span class="itv-icon itv-icon-paper"></span>
                    <a @click="openOrderDialog(order.id)">查看报告</a>
                  </p>
                </li>
              </ul>
              <div class="itv-user-main-table-item__content-order">
                <p><span class="itv-icon itv-icon-order"></span>运单号</p>
                <p class="itv-user-main-table-item__content-order-number">
                  <ul v-if="order.tracking_nos.length>0">
                    <li v-for="nos in order.tracking_nos" :key="nos">{{nos}}</li>
                  </ul>
                  <span v-else>暂无</span>
                  <span class="itv-user-main-table-item__content-order-number-tip" v-if="order.tracking_nos.length>0">
                    <span class="itv-user-main-table-item__content-order-number-tip__triangle"></span>
                    <span class="itv-user-main-table-item__content-order-number-tip__content">
                      <i>快递公司：顺丰快递</i>
                      <base-button type="info" line @click="billTracking(order.tracking_nos)">运单快捷查询</base-button>
                    </span>
                  </span>
                </p>
              </div>
              <div class="itv-user-main-table-item__content-message">
                <p>
                  <a @click="openMessageDialog(order.id)" class="itv-user-main-table-item__content-message-text">
                    给客服留言
                    <i class="itv-user-main-table-item__content-message-Badge"
                      v-if="order.total_unread_messages>0">
                      {{order.total_unread_messages>99? 99:order.total_unread_messages}}
                    </i>
                  </a>
                </p>
                <p><a @click="$router.push({path: `/user/order/${order.id}?`})">订单详情</a></p>
              </div>
            </div>
            <footer class="itv-user-main-table-item__footer">
              <span class="itv-user-main-table-item__footer-price">总金额：
                <i>{{(order.product_price*order.quantity) | toFix}}</i>
              </span>
              <!-- 需要付款才显示这个按钮 -->
              <base-button v-if="order.status === 0" size="small" type="error" @click="openPayDialog(order)">去付款</base-button>
            </footer>
          </div>
        </div>
      </section>
    </div>

    <!-- 支付弹窗 -->
    <pay-dialog :visible.sync="payDialogInfo.show" :payOrder="payDialogInfo.order"></pay-dialog>

    <!-- 手机绑定弹窗 -->
    <base-dialog :visible.sync="showPhoneBindDialog">
      <ul class="itv-user-bind-process">
        <li class="itv-user-bind-process-item" :class="bindStatus(1)">
          <span>1</span>
          <p>验证当前手机号</p>
        </li>
        <li class="itv-user-bind-process-line">
          <span :class="'itv-icon itv-icon-process-line'+ (bindForm.status>1? '--done':'')"></span>
        </li>
        <li class="itv-user-bind-process-item" :class="bindStatus(2)">
          <span>2</span>
          <p>验证新的手机号</p>
        </li>
        <li class="itv-user-bind-process-line">
          <span :class="'itv-icon itv-icon-process-line'+ (bindForm.status>2? '--done':'')"></span>
        </li>
        <li class="itv-user-bind-process-item" :class="bindStatus(3)">
          <span>3</span>
          <p>完成改绑</p>
        </li>
      </ul>
      <p class="itv-user-bind-title">{{bindForm.title}}</p>
      <div class="itv-dialog-form">
        <div class="itv-dialog-form__item"  :class="{'active':focus == 1}">
          <span class="itv-icon" :class="'itv-icon-phone'+ (focus === 1 ? '--done': '')"></span>
          <input type="text" :placeholder="bindForm.info" v-model.number="bindForm.mobile" @focus="focus = 1">
        </div>
        <div class="itv-dialog-form__item" :class="{'active':focus == 2}">
          <span class="itv-icon" :class="focus == 2 ? 'itv-icon-captcha--done':'itv-icon-captcha'"></span>
          <input type="text" placeholder="验证码" v-model.number="bindForm.captchaCode" @focus="focus = 2">
          <div class="itv-captcha-group">
            <img class="img" :src="'data:img/jpg;base64,' + bindForm.captchaImage" alt="captchaImage">
            <span class="refresh" @click="getCaptcha">刷新</span>
          </div>
        </div>
        <div class="itv-dialog-form__item"  :class="{'active':focus == 3}">
          <span class="itv-icon" :class="'itv-icon-time'+ (focus === 3 ? '--done': '')"></span>
          <input type="text" placeholder="输入验证码" v-model.number="bindForm.code" @focus="focus = 3">
          <base-button class="form-code" size="small" line @clcik="sendCode">{{ codeStatus.statusText }}</base-button>
        </div>
        <div class="itv-dialog-form__info">{{bindForm.errorText}}</div>
      </div>
      <footer slot="footer" class="itv-dialog-footer">
        <base-button size="big" style="width: 100%" @click="bindNext">{{bindForm.btnText}}</base-button>
      </footer>
    </base-dialog>

    <!-- 绑定成功提醒 -->
    <base-dialog :visible.sync="showAlert" :auto="true" :fn="resetBindForm">
      <p class="itv-user-bind-success">
        <span class="itv-icon itv-icon-info-success"></span>
        <span>改绑成功</span>
      </p>
    </base-dialog>

    <!-- 查看报告弹窗 -->
    <base-dialog :visible.sync="showReportDialog">
      <ul class="itv-user-report-list">
        <li v-for="subOrder in openOrder.sub_orders" :key="subOrder.id"
            @click="openReport(subOrder)" class="itv-user-report-item">
          <img v-if="subOrder.product === 1" class="itv-user-report-item__bg"
               src="../../assets/pic-report-1.png" alt="pic-report-1">
          <img v-if="subOrder.product === 2" class="itv-user-report-item__bg"
               src="../../assets/pic-report-1.png" alt="pic-report-2">
          <img v-if="subOrder.product === 3" class="itv-user-report-item__bg"
               src="../../assets/pic-report-1.png" alt="pic-report-3">
          <p class="itv-user-report-item__info">
            <span>{{subOrder.person_name}}</span>
            <span>{{subOrder.person_sex}}</span>
            <span>{{subOrder.person_age}}</span>
          </p>
        </li>
      </ul>
    </base-dialog>

    <!-- 留言弹窗 -->
    <base-message :visible.sync="showMessageDialog" :orderId="messageOrderId"></base-message>

  </div>
</template>

<script>
  import ApiLogin from '../../api/login';
  import ApiUser from '../../api/user.js';

  export default {
    name: 'User',
    head() {
      return {
        title: '个人中心 - 普瑞森基因',
        meta: [
          { hid: 'center', name: 'description', content: '个人中心' }
        ]
      }
    },
    data () {
      return {
        payDialogInfo: {
          show: false,
          order: {}
        },
        user: null,
        orderList: [],
        openOrder: {},
        showMessageDialog: false,
        showPhoneBindDialog: false,
        showAlert: false,
        showReportDialog: false,
        bindForm: {
          title: '验证当前手机号',
          status: 1,
          mobile: '',
          info: '请输入当前手机号',
          code: '',
          errorText: '',
          btnText: '下一步',
          captchaCode:'',
          captchaImage:null,
          captchaToken:null
        },
        codeStatus: {
          statusText: "获取验证码",
          sending: false,
          interval: undefined,
        },
        focus: 1,
        messageOrderId: 0
      }
    },
    methods: {

      /**
       * 获取图形验证码
       */
      getCaptcha(){
        ApiLogin.getCaptcha({
          width: 100,
          height: 50
        }).then(res=>{
          let _data = res.data.data;
          if(res.data.code === 0){
            this.bindForm.captchaImage = _data.image;
            this.bindForm.captchaToken = _data.token;
          }
        })
      },

      /**
       * 获取验证码
       */
      sendCode(){
        let _seconds = 30;
        if (this.bindForm.mobile === "") {
          this.bindForm.errorText = "手机号不能为空";
          return;
        }
        ApiLogin.sendSmsLogin({
          mobile: this.loginForm.mobile,
          captcha_token: this.loginForm.captchaToken,
          captcha_code: this.loginForm.captchaCode
        }).then(res => {
          if (res.data.code === 0) {
            this.bindForm.errorText = '';
            this.codeStatus.sending = true;
            this.codeStatus.statusText = _seconds + 's';
            this.codeStatus.interval = setInterval(() => {
              if (_seconds === 1) {
                this.codeStatus.sending = false;
                this.codeStatus.statusText = "获取验证码";
                clearInterval(this.status.interval);
                return;
              }
              _seconds--;
              this.codeStatus.statusText = _seconds + "s";
            }, 1000);
          }
          else {
            this.bindForm.errorText = res.data.message;
          }
        });
      },

      /**
       * 根据绑定手机操作状态返回状态标志的颜色class
       */
      bindStatus(index) {
        if (this.bindForm.status === index) {
          return 'itv-user-bind-process-item--now';
        }else if(this.bindForm.status > index) {
          return 'itv-user-bind-process-item--done';
        }else {
          return '';
        }
      },

      /**
       * 绑定手机操作的下一步按钮
       */
      bindNext() {
        if (this.bindForm.status === 1) {
          this.bindForm.title = '验证新的手机号';
          this.bindForm.status = 2;
          this.bindForm.info = '请输入新的手机号';
          this.bindForm.errorText = '手机号或验证码错误';
          this.bindForm.btnText = '完成绑定';
        }else if (this.bindForm.status === 2) {
          this.bindForm.status = 3;
          let _this = this;
          setTimeout(()=>{
            _this.bindForm.status = 4;
          },300);
          setTimeout(()=>{
            _this.showPhoneBindDialog = false;
          },500);
          setTimeout(()=>{
            _this.showAlert = true;
          },700);
        }
      },

      /**
       * 重置绑定手机操作状态
       */
      resetBindForm() {
        this.bindForm = {
          title: '验证当前手机号',
          status: 1,
          mobile: '',
          info: '请输入当前手机号',
          code: '',
          errorText: '请输入当前手机号',
          btnText: '下一步',
          captchaCode:'',
          captchaImage:null,
          captchaToken:null
        }
      },

      /**
       * 列出当前用户的订单
       */
      getUserOrders() {
        ApiUser.getUserOrders({
          params: {
            order_by: '-id'
          }
        }).then(
          res => {
            if (res.data.code === 0) {
              this.orderList = res.data.data.orders;
            }
          }
        )
      },

      /**
       * 打开改绑弹窗
       */
      openBindDialog() {
        this.bindForm.mobile = this.user.mobile;
        this.getCaptcha();
        this.showPhoneBindDialog = true;
      },
      
      /**
       * 打开查看报告弹窗
       */
      openOrderDialog(orderId) {
        ApiUser.getOrderdetail(orderId).then(
          res => {
            if (res.data.code === 0) {
              this.openOrder = res.data.data.order;
              this.showReportDialog = true;
            }
          }
        )
      },

      /**
       * 追踪快递单号
       * bills {Array} 单号数组
       */
      billTracking(bills) {
        window.open(`http://www.sf-express.com/cn/sc/dynamic_function/waybill/#search/bill-number/${bills.join(',')}`);
      },

      /**
       * 根据订单状态码返回订单状态文字
       */
      orderStatus(statusCode) {
        var status = ['用户下单','付款成功','试剂盒已寄出','样本检测中','已出报告','订单已关闭'];
        return status[statusCode];
      },

      /**
       * 跳转到报告页面
       */
      openReport(order) {
        // 更新报告查看次数
        var newPage = window.open('','_blank');
        ApiUser.updateReportViews(order.id,{}).then(
          res => {
            if (res.data.code === 0) {
              newPage.location = order.report_full_link;
            }
          }
        )
      },

      /**
       * 打开支付弹窗
       */
      openPayDialog(order) {
        this.payDialogInfo = {
          show: true,
          order: order
        }
      },

      /**
       * 打开留言弹窗
       */
      openMessageDialog(orderId) {
        this.showMessageDialog = true;
        this.messageOrderId = orderId;
        this.getUserOrders();
      }
    },
    watch: {
      '$store.state.user'(newVal,oldVal) {
        if (newVal) {
          this.user = this.$store.state.user;
          this.getUserOrders();
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

.itv-user {
  padding-bottom: 80px;
  &-breadcrumbs {
    line-height: 36px;
    font-size: 12px;
    color: $blue;
  }
  &-content {
    display: flex;
    justify-content: space-between;
  }
  &-aside {
    box-sizing: border-box;
    padding: 24px;
    width: 210px;
    color: $font;
    background: $white;
    margin-bottom: auto;
    &-portrait {
      padding: 16px 0;
      text-align: center;
      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
    }
    &-text {
      margin-bottom: 20px;
      a {
        color: $font-sub;
        text-decoration: underline;
      }
    }
    &-btn {
      border-top: 2px dashed $border;
      padding-top: 24px;
      text-align: center;
    }
  }
  &-main {
    width: 866px;
    &-title {
      font-size: 18px;
    }
    &-table {
      box-sizing: border-box;
      border: 1px solid $border;
      background: $white;
      margin-top: 24px;
      &:nth-of-type(1) {
        margin-top: 16px;
      }
      &-item {
        &__header {
          display: flex;
          padding: 0 24px;
          span:first-child {
            margin-right: 64px;
          }
          span:last-child {
            color: $blue;
          }
        }
        &__content {
          display: flex;
          border-top: 1px solid $border;
          &-list {
            box-sizing: border-box;
            padding: 0 14px;
            width: 565px;
            &-item {
              display: flex;
              justify-content: space-between;
              padding: 10px;
              border-bottom: 2px dashed $border;
              >* {
                text-align: center;
                margin: auto 0;
              }
              &:last-child {
                border-bottom: none;
              }
              &__img {
                width: 80px;
                height: 80px;
              }
              &__price {
                color: $red;
              }
            }
          }
          &-message {
            >p:nth-of-type(2) {
              margin-top: 24px;
            }
            &-text {
              position: relative;
            }
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
          &-message,
          &-order {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            &-number {
              padding-bottom: 32px;
              margin-bottom: -32px;
              position: relative;
              cursor: pointer;
              &:hover {
                .itv-user-main-table-item__content-order-number-tip {
                  display: block;
                }
              }
              &-tip {
                position: absolute;
                display: none;
                left: 50%;
                top: 48px;
                transform: translateX(-50%);
                width: 130%;
                background: $white;
                box-shadow: 0 1px 7px #E7E7E7;
                &__triangle {
                  position: absolute;
                  left: 50%;
                  top: -20px;
                  width: 40px;
                  height: 40px;
                  background: $white;
                  box-shadow: 0 1px 7px #E7E7E7;
                  transform: translateX(-50%) rotate(45deg);
                }
                &__content {
                  position: relative;
                  display: block;
                  padding: 16px 24px;
                  background: $white;
                }
                i {
                  display: block;
                  margin-bottom: 16px;
                }
              }
            }
          }
          &-order {
            border-left: 1px solid $border;
            border-right: 1px solid $border;
          }
        }
        &__footer {
          padding: 12px 24px;
          border-top: 1px solid $border;
          line-height: 28px;
          text-align: right;
          &-price {
            margin-right: 32px;
            i {
              color: $red;
            }
          }
        }
      }
    }
  }
  &-bind {
    &-process {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      &-item {
        width: 88px;
        text-align: center;
        color: $font-sub;
        span {
          display: inline-block;
          vertical-align: top;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid $font-sub;
          text-align: center;
          line-height: 26px;
        }
        p {
          margin-top: 8px;
          font-size: 12px;
        }
        &--now {
          span {
            border-color: $blue;
            color: $white;
            background: $blue;
          }
        }
        &--done {
          span {
            border-color: $green;
            color: $white;
            background: $green;
          }
        }
      }
      &-line {
        line-height: 28px;
      }
    }
    &-title {
      margin-top: 56px;
      font-size: 18px;
      text-align: center;
    }
    &-success {
      padding: 24px 0;
      font-size: 18px;
      text-align: center;
    }
  }
  &-report {
    &-list {
      padding-bottom: 24px;
    }
    &-item {
      position: relative;
      margin: 24px auto 0;
      width: 308px;
      height: 108px;
      cursor: pointer;
      &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &__info {
        position: relative;
        padding-top: 64px;
        color: $white;
        text-align: center;
        span {
          display: inline-block;
          vertical-align: top;
          margin: 0 8px;
        }
      }
    }
  }
}
</style>

