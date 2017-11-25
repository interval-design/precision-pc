<template>
  <div class="itv-layout-default itv-wrapper full">
    <nav class="itv-nav">
      <div class="itv-nav-bar">
       <h1>
         <nuxt-link to="/">
           <img src="../assets/logo.png" alt="logo">
         </nuxt-link>
       </h1>
        <ul class="itv-nav-bar-menu">
          <li class="item" :class="{active:$route.name == 'index'}">
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li class="item" @mouseover="active = 1" @mouseleave="active = null">
            研究与技术
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 1">
                <li>
                  <nuxt-link to="">微生物组学</nuxt-link>
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
                  <nuxt-link to="/filter">肠癌风险评估</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/child">儿童肠道检测</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">肠道微生态检测</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item" @mouseover="active = 3" @mouseleave="active = null">
            关于普瑞森
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 3">
                <li>
                  <nuxt-link to="">了解普瑞森</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">普瑞森团队</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="">加入我们</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <template v-if="1 == 0">
            <li class="item login">
              <nuxt-link to="/">登录</nuxt-link>
            </li>
            <li class="item">
              <base-button line size="small">注册</base-button>
            </li>
          </template>
          <li class="item login" v-else>
            <nuxt-link to="/user">
              <img class="avatar" src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4" alt="avatar">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt class="itv-container"/>
    <footer class="itv-footer">
      <div class="itv-footer-contact">
        <p>想成为我们的合作伙伴？</p>
        <p class="tel"><img src="../assets/pic-footer-phone.png" alt="icon-phone">021-59234123</p>
        <p>期待与您合作</p>
      </div>
      <div class="itv-footer-bd">
        <div class="itv-footer-bd-item">
          <img class="logo" src="../assets/logo-white.png" alt="logo-white">
          <p>联系电话：021-24123123</p>
          <p>公司邮箱：puruisen123@123.com</p>
        </div>
        <div class="itv-footer-bd-item nav">
          <ul class="item">
            <li class="title">技术</li>
            <li><nuxt-link to="">微生物组学</nuxt-link></li>
            <li><nuxt-link to="">科研动态</nuxt-link></li>
          </ul>
          <ul class="item">
            <li class="title">产品及服务</li>
            <li><nuxt-link to="/filter">肠癌风险评估</nuxt-link></li>
            <li><nuxt-link to="/child">儿童肠道检测</nuxt-link></li>
            <li><nuxt-link to="">肠道微生态检测</nuxt-link></li>
          </ul>
          <ul class="item">
            <li class="title">关于普瑞森</li>
            <li><nuxt-link to="">了解普瑞森</nuxt-link></li>
            <li><nuxt-link to="">普瑞森团队</nuxt-link></li>
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
        full:true
      }
    },
  }
</script>

<style lang="scss"></style>
