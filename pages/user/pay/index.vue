<template>
  <div class="itv-pay">
    <div class="itv-pay-address">
      <header class="itv-table-header itv-pay-address-title">收货地址</header>
      <div class="itv-pay-address-content">
        <ul class="itv-pay-address-content-list">
          <li class="itv-pay-address-content-list-item" v-for="(item,index) in addressList" :key="index"
              :class="setActiveAddress(item.id)" @click="activeAddress = item.id">
            <header>
              <span>{{item.consignee}}</span>
              <span>{{item.phone}}</span>
            </header>
            <div>
              {{item.province}}{{item.city}}{{item.district}}{{item.street}}
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
            <!--<area-select :level='2' type='text' v-model='addressForm.address' ref="select" style="margin-left: -8px"></area-select>-->
          </div>
          <div>
            <span>详细地址：</span>
            <textarea name="" id="" rows="3" placeholder="街道、小区、门牌号等" v-model="addressForm.detail"></textarea>
          </div>
          <div class="info">
            <span>收货人：</span>
            <input type="text" v-model="addressForm.name">
            <span style="margin-left: 60px">手机号：</span>
            <input type="text" v-model="addressForm.tel">
          </div>
          <div>
            <span style="margin-right: 8px"></span>
            <base-button @click="editAddress">保存地址</base-button>
            <p class="itv-pay-address-content-form__warning">{{addressForm.warning}}</p>
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

    <!-- 删除地址的弹出框 -->
    <base-confirm v-show="showConfirm" :options="comfirmOption" ref="confirm"></base-confirm>
  </div>
</template>

<script>
  import User from '~/api/user.js'
  export default {
    name: 'UserPay',
    head() {
      return {
        title: '支付 - 普瑞森基因',
        meta: [
          { hid: 'pay', name: 'description', content: '支付' }
        ]
      }
    },
    created() {
      this.getUserAddresses();
    },
    data() {
      return {
        showForm: false,
        addressForm: {
          type: '',
          address: [],
          detail: '',
          name: '',
          tel: '',
          warning: ''
        },
        activeAddress: 0,
        addressList: [],
        comfirmOption: {},
        showConfirm: false
      }
    },
    methods: {
      /**
       * 设置选中的地址
       */
      setActiveAddress(id) {
        if (this.showForm) {
          return;
        }
        if (this.activeAddress === id) {
          return 'itv-pay-address-content-list-item--active';
        }
      },

      /**
       * 打开地址表单
       */
      openAddressForm(type, item) {
        if (this.showForm) {
          // 提醒还没保存
          this.addressForm.warning = '还没保存';
          return;
        }
        this.$refs.select.isSetDefault = false; // 触发一下组件的选择变化
        if (type === 'new') {
          // 重置选中地址状态
          this.activeAddress = 0;
          this.addressForm = {
            type: 'new',
            address: ['北京市','市辖区','朝阳区'],
            detail: '',
            name: '',
            tel: '',
            warning: ''
          };
        }else {
          this.addressForm = {
            id: item.id,
            type: 'edit',
            address: [item.province, item.city, item.district],
            detail: item.street,
            name: item.consignee,
            tel: item.phone,
            warning: ''
          };
        }
        this.showForm = true;
      },

      /**
       * 删除地址
       */
      delAddress(item) {
        if (this.showForm) {
          // 提醒还没保存
          this.addressForm.warning = '还没保存';
          return;
        }

        // 提示是否删除
        this.comfirmOption = {
          text: '此操作将永久删除改该地址，是否继续？'
        }
        this.showConfirm = true;
        this.$refs.confirm.confirm().then(() => {
          User.delUserAddress(item.id).then(
            res => {
              this.getUserAddresses();
              this.showConfirm = false;
            }
          )
        }).catch(() => {
          this.showConfirm = false;
        })
      },

      /**
       * 保存地址
       */
      editAddress() {
        let form = this.addressForm;

        if (form.type === 'new') {
          // 创建收货地址
          User.creatUserAddress({
            province: form.address[0],
            city: form.address[1],
            district: form.address[2],
            street:form.detail,
            consignee: form.name,
            phone: form.tel
          }).then(
            res => {
              if (res.data.code === 1401) {
                this.addressForm.warning = '信息填写不完整';
              }else {
                this.showForm = false;
                this.getUserAddresses();
              }

            }
          )
        }else {
          // 编辑收货地址
          User.editUserAddress(form.id, {
            province: form.address[0],
            city: form.address[1],
            district: form.address[2],
            street:form.detail,
            consignee: form.name,
            phone: form.tel
          }).then(
            res => {
              this.showForm = false;
              this.getUserAddresses();
            }
          )
        }
      },

      /**
       * 列出当前用户的收货地址
       */
      getUserAddresses() {
        User.getUserAddresses().then(
          res => {
            this.addressList = res.data.data.addresses;
            this.activeAddress = this.addressList[0] ? this.addressList[0].id : 0;
          }
        )
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
          display: flex;
          >span {
            display: inline-block;
            vertical-align: middle;
            line-height: 30px;
            width: 70px;
          }
        }
        input,
        textarea {
          border: 1px solid $border;
          border-radius: 2px;
          vertical-align: middle;
          margin: 0 8px;
          padding: 4px;
        }
        textarea {
          width: 510px;
        }
        .info input {
          width: 182px;
        }
        &__warning {
          margin-left: 24px;
          display: inline-block;
          vertical-align: middle;
          line-height: 30px;
          color: $red;
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
