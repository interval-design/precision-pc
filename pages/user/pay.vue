<template>
  <div class="itv-pay">
    <div class="itv-pay-address">
      <header class="itv-table-header itv-pay-address-title">收货地址</header>
      <div class="itv-pay-address-content">
        <ul class="itv-pay-address-content-list">
          <li class="itv-pay-address-content-list-item itv-pay-address-content-list-item--active">
            <header>
              <span>张三</span>
              <span>12345678907</span>
            </header>
            <div>
              广东省广州市越秀区吉祥路1号-f1004距离市中心约5955米
            </div>
            <p>
              <a href="javascript:;">修改</a>
              <a href="javascript:;">删除</a>
            </p>
          </li>
          <li class="itv-pay-address-content-list-item">
            <header>
              <span>张三</span>
              <span>12345678907</span>
            </header>
            <div>
              广东省广州市越秀区吉祥路1号-f1004距离市中心约5955米
            </div>
            <p>
              <a href="javascript:;">修改</a>
              <a href="javascript:;">删除</a>
            </p>
          </li>
          <li class="itv-pay-address-content-list-item itv-pay-address-content-list-add"
              @click="showForm = true">
            <span class="itv-icon itv-icon-add"></span>
            <p>使用新地址</p>
          </li>
        </ul>
        <div class="itv-pay-address-content-form" v-show="showForm">
          <p>
            <span>所在地区：</span>
            <select name="" id="">
              <option>请选择</option>
              <option>选项一</option>
              <option>选项二</option>
              <option>选项三</option>
            </select>
            <select name="" id="">
              <option>请选择</option>
              <option>选项一</option>
              <option>选项二</option>
              <option>选项三</option>
            </select>
            <select name="" id="">
              <option>请选择</option>
              <option>选项一</option>
              <option>选项二</option>
              <option>选项三</option>
            </select>
          </p>
          <p>
            <span>详细地址：</span>
            <textarea name="" id="" cols="50" rows="3" placeholder="街道、小区、门牌号等"></textarea>
          </p>
          <p>
            <span>收货人：</span>
            <input type="text">
            <span>手机号：</span>
            <input type="text">
          </p>
          <p>
            <base-button>保存地址</base-button>
          </p>
        </div>
      </div>
    </div>
    <div class="itv-pay-order">
      <table class="itv-pay-order-table">
        <thead class="itv-table-header">
          <tr>
            <th class="itv-pay-order-table-img">订单服务内容</th>
            <th></th>
            <th>数量</th>
            <th>单价</th>
          </tr>
        </thead>
        <tbody class="itv-pay-order-table-body">
          <tr>
            <td class="itv-pay-order-table-img">
              <img src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4">
            </td>
            <td class="itv-pay-order-table-name">肠癌早筛测试服务</td>
            <td>x1</td>
            <td class="itv-pay-order-table-price">￥999</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="itv-pay-payment">
      <p>应付金额：<span class="itv-pay-payment-price">￥9999</span></p>
      <p class="itv-pay-payment-btns">
        <base-button size="huge" style="margin-right: 32px">
          <span class="itv-icon itv-icon-zfb"></span>支付宝支付
        </base-button>
        <base-button size="huge" type="success">
          <span class="itv-icon itv-icon-wx"></span>微信支付
        </base-button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: '',
        showForm: false
      }
    } 
  }
</script>

<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-pay {
  padding-bottom: 80px;
  &-address {
    margin-top: 42px;
    border: 1px solid $border;
    background: $white;
    &-title {
      padding: 0 40px;
      border-bottom: 1px solid $border;
    }
    &-content {
      padding: 32px 40px;
      &-list {
        display: flex;
        &-item {
          margin-right: 24px;
          padding: 8px 16px;
          border: 1px solid $border;
          border-radius: 2px;
          width: 305px;
          cursor: pointer;
          &--active {
            padding: 7px 15px;
            border: 2px solid $blue;
          }
          header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid $border;
            line-height: 30px;
          }
          >div {
            padding: 8px 0 16px;
          }
          >p {
            text-align: right;
            a {
              margin: 0 8px;
              &:hover {
                color: $blue;
              }
            }
          }
        }
        &-add {
          width: 124px;
          text-align: center;
          span {
            margin-top: 24px;
          }
          p {
            margin-top: 8px;
            text-align: center;
          }
        }
      }
      &-form {
        margin-top: 54px;
        >p {
          margin-top: 16px;
          >span {
            display: inline-block;
            vertical-align: middle;
            width: 70px;
          }
        }
        input,
        textarea,
        select {
          border: 1px solid $border;
          border-radius: 2px;
          vertical-align: middle;
          margin: 0 8px;
          padding: 4px;
        }
        select {
          width: 100px;
        }
        textarea {
          vertical-align: top;
        }
      }
    }
  }
  &-order {
    margin-top: 24px;
    background: $white;
    &-table {
      width: 100%;
      tr {
        border-top: 1px solid $border;
      }
      th {
        padding: 0 40px;
      }
      td {
        padding: 24px 40px;
      }
      &-img {
        text-align: left;
        width: 100px;
        img {
          width: 100px;
          height: 100px;
        }
      }
      &-name {
        text-align: left;
      }
      &-price {
        color: $red;
      }
    }
  }
  &-payment {
    margin-top: 24px;
    text-align: right;
    &-price {
      font-size: 22px;
      color: $red;
    }
    &-btns {
      margin-top: 32px;
    }
  }
}
</style>
