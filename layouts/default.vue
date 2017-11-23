<template>
  <div class="itv-layout-default itv-wrapper">
    <nav class="itv-nav">
      <div class="itv-nav-bar">
        <nuxt-link to="/">
          <img src="../assets/logo.png" alt="logo">
        </nuxt-link>
        <ul class="itv-nav-bar-menu">
          <li class="item" :class="{active:$route.name == 'index'}">
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li class="item" @mouseover="active = 1" @mouseleave="active = null">
            研究与技术
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 1">
                <li>
                  <nuxt-link to="">微生物学</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">科研动态</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item" @mouseover="active = 2" @mouseleave="active = null">
            产品与服务
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 2">
                <li>
                  <nuxt-link to="">肠癌早筛</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">儿童肠道检测</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">肠道大数据服务</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item" @mouseover="active = 3" @mouseleave="active = null">
            关于普瑞森
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 3">
                <li>
                  <nuxt-link to="">公司介绍</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">团队介绍</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">加入我们</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item login">
            <nuxt-link to="/">登录</nuxt-link>
          </li>
          <li class="item">
            <base-button line size="small">注册</base-button>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt class="itv-container"/>
    <footer class="itv-footer">
      <div class="itv-footer-bd">
        <div class="itv-footer-bd-item">
          <img class="logo" src="../assets/logo-white.png" alt="logo-white">
          <p>联系电话：021-24123123</p>
          <p>公司邮箱：puruisen123@123.com</p>
        </div>
        <div class="itv-footer-bd-item nav">
          <ul class="item">
            <li class="title">技术</li>
            <li><nuxt-link to="">微生物学</nuxt-link></li>
            <li><nuxt-link to="">科研动态</nuxt-link></li>
          </ul>
          <ul class="item">
            <li class="title">产品及服务</li>
            <li><nuxt-link to="">肠癌早筛</nuxt-link></li>
            <li><nuxt-link to="">儿童肠道检测</nuxt-link></li>
            <li><nuxt-link to="">肠道大数据服务</nuxt-link></li>
          </ul>
          <ul class="item">
            <li class="title">关于普瑞森</li>
            <li><nuxt-link to="">公司介绍</nuxt-link></li>
            <li><nuxt-link to="">团队介绍</nuxt-link></li>
            <li><nuxt-link to="">加入我们</nuxt-link></li>
          </ul>
        </div>
        <div class="itv-footer-bd-item qr-code">
          <img src="../assets/qr-code.jpg" alt="qr-code">
        </div>
      </div>
      <div class="itv-footer-copy">©2017 苏州普瑞森基因科技有限公司 沪ICP备15021426号</div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'LayoutDefault',
    data() {
      return {
        active: null,
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/style/variable";

  .itv-wrapper {
    min-height: 100%;
    min-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .itv-nav {
    height: 50px;
    width: 100%;
    background: $white;
    &-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1100px;
      height: 100%;
      margin: auto;
      color: $font-sub;
      &-menu {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 100%;
        line-height: 50px;
        .login {
          position: relative;
          &:before {
            position: absolute;
            content: '';
            left: 0;
            top: 50%;
            width: 1px;
            height: 20px;
            background: $border;
            transform: translateY(-50%);
          }
        }
        .item {
          position: relative;
          float: left;
          display: inline-block;
          padding: 0 24px;
          height: 100%;
          cursor: pointer;
          &:hover {
            color: $blue;
          }
          &.active {
            color: $font;
          }
          &__dropdown {
            position: absolute;
            top: 50px;
            left: 0;
            width: 100%;
            background: $white;
            line-height: normal;
            color: $font-sub;
            li {
              padding: 8px;
              text-align: center;
              &:not(:last-child) {
                border-bottom: 1px solid $border;
              }
              &:hover {
                color: $blue;
              }
            }
          }
        }
      }
    }
  }

  .itv-footer {
    height: 228px;
    width: 100%;
    background: #353535;
    color: $white;
    font-size: 12px;
    &-bd {
      display: flex;
      justify-content: space-between;
      width: 1100px;
      margin: auto;
      padding-top: 24px;
      padding-bottom: 24px;
      &-item {
        flex: 1;
        .logo {
          margin-bottom: 8px;
        }
        p {
          margin-top: 16px;
        }
      }
      &-item.nav {
        display: flex;
        justify-content: space-between;
        .title {
          opacity: .5;
        }
        .item {
          padding: 0 24px;
          li {
            padding-bottom: 16px;
          }
          a{
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
      &-item.qr-code {
        text-align: right;
      }
    }
    &-copy {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 1100px;
      margin: auto;
      padding: 8px 0;
      border-top: 1px solid #4E4E4E;
      text-align: center;
      transform: translateX(-50%);
      opacity: .5;
    }
  }

  .itv-container {
    flex: 1;
    width: 1100px;
  }

</style>
