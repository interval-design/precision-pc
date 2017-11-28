<template>
  <div class="itv-layout-default itv-wrapper">
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
          <li class="item" :class="{active:$route.name.indexOf('research') > -1 }" @mouseover="active = 1" @mouseleave="active = null">
            研究与技术
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 1">
                <li>
                  <nuxt-link :to="{name:'research-microbiology'}">微生物组学</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'research-dynamic'}">科研动态</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item" :class="{active:$route.name.indexOf('service') > -1 }" @mouseover="active = 2" @mouseleave="active = null">
            产品与服务
            <transition name="slideInDown" mode="out-in">
              <ul class="item__dropdown" v-show="active == 2">
                <li>
                  <nuxt-link :to="{name:'service-filter'}">肠癌风险评估</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'service-child'}">儿童肠道检测</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{name:'service-ecosystem'}">肠道微生态检测</nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="item" :class="{active:$route.name.indexOf('about') > -1 }" @mouseover="active = 3" @mouseleave="active = null">
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
          <template>
            <li class="item login">
              <span @click="login">登录</span>
            </li>
            <li class="item">
              <base-button line size="small" @click="register">注册</base-button>
            </li>
          </template>
          <!--<li class="item login">-->
            <!--<nuxt-link to="/user">-->
              <!--<img class="avatar" src="https://avatars1.githubusercontent.com/u/25037123?s=200&v=4" alt="avatar">-->
            <!--</nuxt-link>-->
          <!--</li>-->
        </ul>
      </div>
    </nav>
    <transition name="page">
      <nuxt class="itv-container"/>
    </transition>
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
            <li>
              <nuxt-link :to="{name:'research-microbiology'}">微生物组学</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'research-dynamic'}">科研动态</nuxt-link>
            </li>
          </ul>
          <ul class="item">
            <li class="title">产品及服务</li>
            <li>
              <nuxt-link :to="{name:'service-filter'}">肠癌风险评估</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'service-child'}">儿童肠道检测</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'service-ecosystem'}">肠道微生态检测</nuxt-link>
            </li>
          </ul>
          <ul class="item">
            <li class="title">关于普瑞森</li>
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
        </div>
        <div class="itv-footer-bd-item qr-code">
          <img src="../assets/qr-code.jpg" alt="qr-code">
        </div>
      </div>
      <div class="itv-footer-copy">©2017 苏州普瑞森基因科技有限公司 沪ICP备15021426号</div>
    </footer>
    <base-dialog :visible.sync="loginDialog">
      <div class="itv-dialog-title">
        <img src="../assets/logo2.png" alt="logo">
      </div>
      <div class="itv-dialog-form">
        <div class="itv-dialog-form__item">
          <span class="itv-icon itv-icon-phone--done"></span>
          <input type="text" placeholder="手机号" v-model.number="loginForm.mobile">
        </div>
        <div class="itv-dialog-form__item">
          <span class="itv-icon itv-icon-time--done"></span>
          <input type="text" placeholder="输入验证码" v-model.number="loginForm.code">
          <base-button class="form-code" size="small" line :disabled="codeStatus.sending" @click="sendCode">{{ codeStatus.statusText }}</base-button>
        </div>
        <div class="itv-dialog-form__info">{{ loginForm.errorText }}</div>
      </div>
      <footer slot="footer" class="itv-dialog-footer">
        <base-button size="big" style="width: 100%" @click="">登录</base-button>
      </footer>
    </base-dialog>
  </div>
</template>

<script>
  export default {
    name: 'LayoutDefault',
    data() {
      return {
        active: null,
        loginDialog:false,
        loginForm:{
          mobile:'',
          code:'',
          errorText:'',
        },
        codeStatus: {
          statusText: "获取验证码",
          sending: false,
          interval: undefined,
        },
      }
    },
    methods:{
      /**
       * 获取验证码
       */
      sendCode(){
        let _seconds = 30;
        if (this.loginForm.mobile === "") {
          this.loginForm.errorText = "手机号不能为空";
          return;
        }
        this.loginForm.errorText = '';
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
      },

      login(){
        this.loginDialog = true;
      },

      register(){
        this.loginDialog = true;
      }
    }
  }
</script>

<style lang="scss"></style>
