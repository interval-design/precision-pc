<template>
  <div class="itv-user">
    <header class="itv-breadcrumbs">
      <span>个人中心</span>
    </header>
    <div class="itv-user-content">
      <aside class="itv-user-aside">
        <div class="itv-user-aside-portrait">
          <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
        </div>
        <p class="itv-user-aside-text">
          <span class="itv-icon itv-icon-weixin"></span>我的微信名
        </p>
        <p class="itv-user-aside-text">
          <span class="itv-icon itv-icon-phone--done"></span>12345678907
          <a @click="showPhoneBindDialog = true">改绑</a>
        </p>
        <div class="itv-user-aside-btn">
          <base-button line @click="$router.push({path: '/user/paper'})">查看全部报告</base-button>
        </div>
      </aside>
      <section class="itv-user-main">
        <h2 class="itv-user-main-title">我的订单</h2>
        <div class="itv-user-main-table">
          <div class="itv-user-main-table-item">
            <header class="itv-table-header itv-user-main-table-item__header">
              <span>下单时间：2017-11-11 12:32</span>
              <span>订单号：1234567890</span>
              <span style="flex: 1"></span>
              <span>用户下单</span>
            </header>
            <div class="itv-user-main-table-item__content">
              <ul class="itv-user-main-table-item__content-list">
                <li class="itv-user-main-table-item__content-list-item">
                  <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4"
                       class="itv-user-main-table-item__content-list-item__img">
                  <p style="width: 160px">肠癌早筛测试服务</p>
                  <p style="width: 40px">x1</p>
                  <p class="itv-user-main-table-item__content-list-item__price" style="width: 80px">￥999999</p>
                  <p style="width: 100px; color: #919191"><span class="itv-icon itv-icon-time"></span>报告未出</p>
                </li>
                <li class="itv-user-main-table-item__content-list-item">
                  <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4"
                       class="itv-user-main-table-item__content-list-item__img">
                  <p style="width: 160px">肠癌早筛测试服务</p>
                  <p style="width: 40px">x1</p>
                  <p class="itv-user-main-table-item__content-list-item__price" style="width: 80px">￥999999</p>
                  <p style="width: 100px">
                    <span class="itv-icon itv-icon-paper"></span>
                    <a href="javascript:;">查看报告</a>
                  </p>
                </li>
              </ul>
              <div class="itv-user-main-table-item__content-order">
                <p><span class="itv-icon itv-icon-order"></span>运单号</p>
                <p class="itv-user-main-table-item__content-order-number">
                  1234567890
                  <span class="itv-user-main-table-item__content-order-number-tip">
                    <span class="itv-user-main-table-item__content-order-number-tip__triangle"></span>
                    <span class="itv-user-main-table-item__content-order-number-tip__content">
                      <i>快递公司：顺丰快递</i>
                      <base-button type="info" line>运单快捷查询</base-button>
                    </span>
                  </span>
                </p>
              </div>
              <div class="itv-user-main-table-item__content-message">
                <p>
                  <a @click="showMessageDialog = true" class="itv-user-main-table-item__content-message-text">
                     给客服留言<i class="itv-user-main-table-item__content-message-Badge">99</i>
                  </a>
                </p>
                <p><a @click="$router.push({path: '/user/order'})">订单详情</a></p>
              </div>
            </div>
            <footer class="itv-user-main-table-item__footer">
              <span class="itv-user-main-table-item__footer-price">总金额：<i>￥1998</i></span>
              <base-button size="small" type="error" @click="$router.push({path: '/user/pay'})">去付款</base-button>
            </footer>
          </div>
        </div>
      </section>
    </div>

    <!-- 留言弹窗 -->
    <base-dialog :visible.sync="showMessageDialog">
      <h3 class="itv-user-message-title">给客服留言</h3>
      <ul class="itv-user-message-list">
        <li>
          <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
          <p>客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复客服回复</p>
        </li>
        <li class="precision">
          <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
          <p>我的留言我的留言我的留言我的留言我的留言我的留言我的留言我的留言我的留言</p>
        </li>
      </ul>
      <div class="itv-user-message-reply">
        <textarea name="" id=""></textarea>
      </div>
      <footer slot="footer" class="itv-user-dialog-footer">
        <base-button style="width: 100%;">提交</base-button>
      </footer>
    </base-dialog>

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
      <div class="itv-user-bind-form">
        <p>
          <span class="itv-icon itv-icon-phone--done"></span>
          <input type="text" :placeholder="bindForm.info" v-model.number="bindForm.phone">
        </p>
        <p>
          <span class="itv-icon itv-icon-time--done"></span>
          <input type="text" placeholder="输入验证码" v-model.number="bindForm.code">
          <base-button size="small" type="code" line>获取验证码</base-button>
        </p>
        <div class="itv-user-bind-form-info">{{bindForm.errorText}}</div>
      </div>
      <footer slot="footer" class="itv-user-dialog-footer">
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
  </div>
</template>

<script>
  export default {
    name: 'User',
    data () {
      return {
        showMessageDialog: false,
        showPhoneBindDialog: false,
        showAlert: false,
        bindForm: {
          title: '验证当前手机号',
          status: 1,
          phone: '',
          info: '请输入当前手机号',
          code: '',
          errorText: '请输入当前手机号',
          btnText: '下一步'
        }
      }
    },
    methods: {
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
          phone: '',
          info: '请输入当前手机号',
          code: '',
          errorText: '请输入当前手机号',
          btnText: '下一步'
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-user {
  width: 1100px;
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
      margin-top: 16px;
      border: 1px solid $border;
      background: $white;
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
  &-message {
    &-title {
      font-size: 18px;
      text-align: center;
    }
    &-list {
      margin-top: 24px;
      max-height: 300px;
      overflow-y: auto;
      >li {
        margin-top: 16px;
        display: flex;
        img {
          margin-right: 16px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        p {
          position: relative;
          padding: 8px;
          width: 230px;
          border-radius: 2px;
          font-size: 12px;
          color: $font-sub;
          background: #f7f7f7;
          &:before {
            content: "";
            position: absolute;
            left: -20px;
            top: 8px;
            border: 10px solid transparent;
            border-right-color: #f7f7f7;
          }
        }
        &.precision {
          flex-direction: row-reverse;
          img {
            margin-right: 0;
            margin-left: 16px;
          }
          p {
            &:before {
              left: auto;
              right: -20px;
              border-right-color: transparent;
              border-left-color: #f7f7f7;
            }
          }
        }
      }
    }
    &-reply {
      margin-top: 40px;
      textarea {
        padding: 8px;
        border: 1px solid $border;
        width: 100%;
        height: 144px;
        background: #f7f7f7;
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
    &-form {
      margin-top: 56px;
      padding: 0 24px;
      >p {
        display: flex;
        margin-top: 24px;
        padding: 5px;
        border-bottom: 1px solid $light-gray;
        >* {
          margin: auto 0;
        }
        input {
          margin-left: 16px;
          flex: 1;
        }
      }
      &-info {
        margin-top: 8px;
        height: 18px;
        font-size: 12px;
        color: $red;
        text-align: right;
      }
    }
    &-success {
      padding: 24px 0;
      font-size: 18px;
      text-align: center;
    }
  }
  &-dialog-footer {
    padding: 24px 48px 32px;
    text-align: center;
  }
}
</style>

