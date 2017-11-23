<template>
  <div class="itv-order">
    <header class="itv-order-breadcrumbs">
      <a href="javascript:;">个人中心</a>  &gt; 订单详情
    </header>
    <div class="itv-order-main">
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
              <span></span>
              <span></span>
            </li>
            <li>
              <span class="itv-icon itv-icon-order-status-b"></span>
              <div>
                <p>用户下单</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line"></li>
            <li>
              <span class="itv-icon itv-icon-order-status-c"></span>
              <div>
                <p>用户下单</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line"></li>
            <li>
              <span class="itv-icon itv-icon-order-status-d"></span>
              <div>
                <p>用户下单</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
            <li class="itv-order-status-content-status-line"></li>
            <li>
              <span class="itv-icon itv-icon-order-status-e"></span>
              <div>
                <p>用户下单</p>
                <p>2017-11-11 12:12</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
@import '../../assets/style/variable.scss';
.itv-order {
  width: 1100px;
  &-breadcrumbs {
    line-height: 36px;
    color: $blue;
  }
  &-main {
    &-item {
      &-title {
        font-size: 18px;
      }
      &-content {
        width: 100%;
        border: 1px solid $border;
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
      }
    }
  }
}
</style>
