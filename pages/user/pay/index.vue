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
            <area-select :level='2' type='text' v-model='addressForm.address' ref="select" style="margin-left: -8px"></area-select>
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
              <img src="../../../assets/pic-product-1.png" alt="product-1" v-if="order.productId === 1">
              <img src="../../../assets/pic-product-2.png" alt="product-1" v-if="order.productId === 2">
              <img src="../../../assets/pic-product-3.png" alt="product-1" v-if="order.productId === 3">
            </td>
            <td class="itv-pay-order-table-name">{{order.name}}</td>
            <td>
              <span class="itv-pay-product-count">
                <span class="itv-icon" :class="'itv-icon-count-minus'+ (order.num>1? '':'__forbid')"
                      @click="order.num--"></span>
                <input class="itv-pay-product-count__num" type="text" v-model.number="order.num">
                <span class="itv-icon itv-icon-count-add" @click="order.num++"></span>
              </span>
            </td>
            <td class="itv-pay-order-table-price">￥{{order.price-order.discount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="itv-pay-to-order">
      <div>应付金额：<span class="itv-pay-to-order-price">￥{{(order.price-order.discount)*order.num}}</span></div>
      <div class="itv-pay-to-order-btn">
        <base-button size="huge" type="error" @click="createOrder">确认下单</base-button>
      </div>
    </div>

    <!-- 删除地址的弹出框 -->
    <base-confirm v-show="showConfirm" :options="comfirmOption" ref="confirm"></base-confirm>

    <!-- 支付弹窗 -->
    <pay-dialog :payDialog.sync="payDialogInfo.show" :payOrder="payDialogInfo.order"></pay-dialog>
  </div>
</template>

<script>
  import ApiUser from '~/api/user.js'
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
    data() {
      return {
        payDialogInfo: {
          show: false,
          order: {}
        },
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
        showConfirm: false,
        order: {},
        codeInfo: {}
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
          this.order.addressId = id;
          localStorage.setItem('precision-order',JSON.stringify(this.order));
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
          ApiUser.delUserAddress(item.id).then(
            res => {
              this.activeAddress = 0;
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
          ApiUser.creatUserAddress({
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
                this.activeAddress = res.data.data.address.id;
                this.getUserAddresses();
              }
              
            }
          )
        }else {
          // 编辑收货地址
          ApiUser.editUserAddress(form.id, {
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
        ApiUser.getUserAddresses().then(
          res => {
            this.addressList = res.data.data.addresses;
            this.activeAddress = this.activeAddress ? this.activeAddress: (this.addressList[0] ? this.addressList[0].id : 0);
          }
        )
      },
      
      /**
       * 生成订单初始信息
       */
      getOrderDetail() {
        var order = localStorage.getItem('precision-order');
        var cardCode = this.$route.params.cardCode;
        if (order) {
          this.order = JSON.parse(order);
          if (cardCode !== this.order.cardCode) {
            this.getCodeGroup(cardCode);
          }
        }else {
          this.getCodeGroup(cardCode);
        }
      },

      /**
       * 根据微信卡券code获取邀请码组详情
       */
      getCodeGroup(cardCode) {
        ApiUser.getCodeGroup(cardCode).then(
          res => {
            if (res.data.code === 0) {
              let codeInfo = res.data.data.invite_code_group;
              this.order = {
                cardCode: cardCode,
                name: codeInfo.product.name,
                productId: codeInfo.product.id,
                discount: codeInfo.discount/100,
                price: codeInfo.product.price/100,
                num: 1
              };
              localStorage.setItem('precision-order',JSON.stringify(this.order));
            }
          }
        )
      },

      /**
       * 由微信卡券code创建订单
       * @param {} type 微信/支付宝
       */
      createOrder(type) {
        var order = this.order;
        ApiUser.createOrder(order.cardCode,{
          product_id: order.productId,
          quantity: order.num,
          address_id: order.addressId
        }).then(
          res => {
            if (res.data.code === 0) {
              // 下单成功后打开支付弹窗
              this.payDialogInfo = {
                show: true,
                order: res.data.data.order
              };
            }
          }
        )
      }
    },
    watch: {
      'order.num'(newVal,oldVal) {
        if (isNaN(newVal)) {
          this.order.num = oldVal;
        }
        if (newVal<1) {
          this.order.num = 1;
        }
        if (newVal>3) {
          this.order.num = 3;
        }
        this.order.num = parseInt(this.order.num);
        localStorage.setItem('precision-order',JSON.stringify(this.order));
      },
      '$store.state.user'(newVal,oldVal) {
        if (newVal) {
          this.getUserAddresses();
          this.getOrderDetail();
        }
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
  &-to-order {
    margin-top: 24px;
    text-align: right;
    &-price {
      font-size: 22px;
      color: $red;
    }
    &-btn {
      margin-top: 32px;
    }
  }
  &-product-count {
    display: flex;
    margin: 0 auto;
    border: 1px solid $border;
    width: 96px;
    &__num {
      border-left: 1px solid $border;
      border-right: 1px solid $border;
      width: 48px;
      line-height: 22px;
      text-align: center;
    }
  }
}
</style>
