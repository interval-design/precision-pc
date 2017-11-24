<template>
  <div class="itv-pay">
    <div class="itv-pay-address">
      <header class="itv-table-header itv-pay-address-title">收货地址</header>
      <div class="itv-pay-address-content">
        <ul class="itv-pay-address-content-list">
          <li class="itv-pay-address-content-list-item" v-for="(item,index) in addressList" :key="index"
              :class="setActiveAddress(item.id)" @click="activeAddress = item.id">
            <header>
              <span>{{item.name}}</span>
              <span>{{item.tel}}</span>
            </header>
            <div>
              {{item.address[0]}} {{item.address[1]}} {{item.address[2]}} {{item.detail}}
            </div>
            <p>
              <a @click="openAddressForm('edit',item)">修改</a>
              <a @click="delAddress(item)">删除</a>
            </p>
          </li>
          <li class="itv-pay-address-content-list-item itv-pay-address-content-list-add"
              @click="openAddressForm('new')">
            <span class="itv-icon itv-icon-add"></span>
            <p>使用新地址</p>
          </li>
        </ul>
        <div class="itv-pay-address-content-form" v-show="showForm">
          <div>
            <span>所在地区：</span>
            <area-select :level='2' type='text' v-model='addressForm.address' ref="select"></area-select>
          </div>
          <div>
            <span>详细地址：</span>
            <textarea name="" id="" cols="50" rows="3" placeholder="街道、小区、门牌号等" v-model="addressForm.detail"></textarea>
          </div>
          <div>
            <span>收货人：</span>
            <input type="text" v-model="addressForm.name">
            <span>手机号：</span>
            <input type="text" v-model="addressForm.tel">
          </div>
          <div>
            <base-button @click="editAddress">保存地址</base-button>
          </div>
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
      <div>应付金额：<span class="itv-pay-payment-price">￥9999</span></div>
      <div class="itv-pay-payment-btns">
        <!-- 这里两个button如果不用标签包起来有时会报错，暂没有解决办法，nuxt.js的issues里有人遇到相同问题，待解决https://github.com/nuxt/nuxt.js/issues/1594 -->
        <span>
          <base-button size="huge" style="margin-right: 24px" @click="$router.push({path: '/user/pay/status'})">
            <span class="itv-icon itv-icon-zfb"></span>支付宝支付
          </base-button>
        </span>
        <span>
          <base-button size="huge" type="success" @click="$router.push({path: '/user/pay/status'})">
            <span class="itv-icon itv-icon-wx"></span>微信支付
          </base-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserPay',
    data() {
      return {
        active: '',
        showForm: false,
        addressForm: {
          type: '',
          address: [],
          detail: '',
          name: '',
          tel: ''
        },
        activeAddress: 0,
        addressList: [
          {
            id: 1,
            address: ['上海市','市辖区','闵行区'],
            detail: '陈行公路888号6楼603室',
            name: '张三',
            tel: '13912345678'
          },
          {
            id: 2,
            address: ['江苏省','苏州市','姑苏区'],
            detail: '广济南路219号',
            name: '李四',
            tel: '13912345678'
          },
        ]
      }
    },
    methods: {
      /**
       * 设置选中的地址
       */
      setActiveAddress(id) {
        if (this.activeAddress === id) {
          return 'itv-pay-address-content-list-item--active';
        }
      },

      /**
       * 打开地址表单
       */
      openAddressForm(type, item) {
        if (type === 'new') {
          // 重置选中地址状态
          this.activeAddress = 0;
          this.addressForm = {
            type: 'new',
            address: [],
            detail: '',
            name: '',
            tel: ''
          };
        }else {
          this.addressForm = {
            id: item.id,
            type: 'edit',
            address: item.address,
            detail: item.detail,
            name: item.name,
            tel: item.tel
          };
          console.log(this.$ref)
        }
        this.showForm = true;
      },

      /**
       * 删除地址
       */
      delAddress(item) {
        let _item = item;
        this.addressList = this.addressList.filter(item => {
          if (item.id !== _item.id) {
            return true;
          }
        });
      },

      /**
       * 保存地址
       */
      editAddress() {
        if (this.addressForm.type === 'new') {
          let newAddress = JSON.parse(JSON.stringify(this.addressForm));
          newAddress.id = Date.now();
          this.addressList.push(newAddress);
        }else {
          let form = this.addressForm;
          this.addressList.forEach(item => {
            if (item.id === form.id) {
              item.address = form.address,
              item.detail = form.detail,
              item.name = form.name,
              item.tel = form.tel
            }
          });
        }
        this.showForm = false;
      }
    }
  }
</script>

<style lang="scss">
@import '../../../assets/style/variable.scss';
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
      padding: 8px 40px 32px;
      &-list {
        display: flex;
        flex-wrap: wrap;
        &-item {
          margin-right: 24px;
          margin-top: 24px;
          padding: 8px 16px;
          border: 1px solid $border;
          border-radius: 2px;
          width: 300px;
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
            height: 31px;
          }
          >div {
            padding: 8px 0 16px;
            height: 66px;
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
        >div {
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
