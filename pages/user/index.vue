<template>
  <div class="itv-user">
    <header class="itv-user-breadcrumbs">
      个人中心
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
          <span class="itv-icon itv-icon-phone"></span>12345678907
          <a href="javascript:;">改绑</a>
        </p>
        <div class="itv-user-aside-btn">
          <base-button line>查看全部报告</base-button>
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
                  <span class="itv-icon itv-icon-message ">
                    <i class="itv-user-main-table-item__content-message-Badge">99</i>
                  </span>
                </p>
                <p><a href="javascript:;">给客服留言</a></p>
              </div>
            </div>
            <footer class="itv-user-main-table-item__footer">
              <span class="itv-user-main-table-item__footer-price">总金额：<i>￥1998</i></span>
              <base-button size="small" type="error">去付款</base-button>
            </footer>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>
<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-user {
  width: 1100px;
  &-breadcrumbs {
    line-height: 36px;
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
            .itv-icon-message {
              position: relative;
            }
            &-Badge {
              position: absolute;
              right: -12px;
              top: -13px;
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
              padding-bottom: 16px;
              margin-bottom: -16px;
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
                top: 54px;
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
}
</style>

