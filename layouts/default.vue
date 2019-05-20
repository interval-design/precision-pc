<template>
  <div class="itv-layout-default itv-wrapper" :class="{'full':full}">
    <div style="width: 100%; height: 50px">
      <nav class="itv-nav" :class="{'itv-nav-float': $route.name !== 'microbiology'}">
        <div class="itv-nav-bar">
          <h1>
            <nuxt-link to="/">
              <img width="182px" src="../assets/logo.png" srcset="../assets/logo.png 2x" alt="logo">
            </nuxt-link>
          </h1>
          <ul class="itv-nav-bar-menu">
            <li class="item" :class="{active:$route.name == 'index'}">
              <nuxt-link to="/">首页</nuxt-link>
            </li>
            <li class="item" :class="{active:$route.name.indexOf('platform') > -1 }" @mouseover="active = 1"
                @mouseleave="active = null">
              技术平台
              <transition name="slideInDown" mode="out-in">
                <ul class="item__dropdown" v-show="active == 1">
                  <li>
                    <nuxt-link :to="{name:'platform-teamwork'}">合作科研单位</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'platform-sequence'}">测序平台</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'platform-bigdata'}">大数据平台</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'platform-introduction'}">了解普瑞森</nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <!--<li class="item" :class="{active:$route.name == 'microbiology'}">
              <nuxt-link :to="{name:'microbiology'}">微生物组学</nuxt-link>
            </li>-->
            <li class="item" :class="{active:$route.name.indexOf('service') > -1 }" @mouseover="active = 2"
                @mouseleave="active = null">
              产品与服务
              <transition name="slideInDown" mode="out-in">
                <ul class="item__dropdown" v-show="active == 2">
                  <li>
                    <nuxt-link :to="{name:'service-filter'}">肠癌风险评估</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'service-ecosystem'}">肠道微生态检测</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'service-child'}">儿童肠道检测</nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>
            <li class="item" :class="{active:$route.name == 'about'}">
              <nuxt-link :to="{name:'about-dynamic'}">新闻动态</nuxt-link>
            </li>
            <li class="item" :class="{active:$route.name == 'about'}">
              <nuxt-link :to="{name:'about-join-us'}">加入我们</nuxt-link>
            </li>
            <!--<li class="item" :class="{active:$route.name.indexOf('about') > -1 }" @mouseover="active = 3"
                @mouseleave="active = null">
              关于普瑞森
              <transition name="slideInDown" mode="out-in">
                <ul class="item__dropdown" v-show="active == 3">
                    <li>
                    <nuxt-link :to="{name:'about-join-us'}">加入我们</nuxt-link>
                  </li>
                    <li>
                    <nuxt-link :to="{name:'about-dynamic'}">科研动态</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{name:'about-introduction'}">了解普瑞森</nuxt-link>
                  </li>
                </ul>
              </transition>
            </li>-->
            <template v-if="user == null">
              <li class="item login">
                <span @click="openLoginDialog">登录</span>
              </li>
              <li class="item">
                <base-button line size="small" @click="openLoginDialog">注册</base-button>
              </li>
            </template>
            <template v-else>
              <li class="item login">
                <nuxt-link to="/user">
                  <img v-if="user.wx_user_info.headimgurl" class="avatar" :src="user.wx_user_info.headimgurl" alt="avatar">
                  <img v-else class="avatar" src="../assets/default-avatar.png" alt="avatar">
                </nuxt-link>
              </li>
              <li class="item">
                <span @click="quitLogin">退出</span>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </div>

    <transition name="page">
      <!-- 这里我暂时改成 router-view 了，用nuxt是无效的 -->
      <router-view class="itv-container" @openUserDialog="openLoginDialog"/>
    </transition>
    <footer class="itv-footer" id="itv-footer">
      <div class="itv-footer-bd">
        <div class="itv-footer-bd-item">
          <img width="182px" class="logo" src="../assets/logo-white.png" srcset="../assets/logo-white.png 2x" alt="logo-white">
          <p>联系电话：400-822-6270</p>
          <p>公司邮箱：zhuyongliang@precisiongene.cn</p>
          <p>地址：江苏省苏州市工业园区星湖街218号，生物医药产业园A5-505</p>
        </div>
        <div class="itv-footer-bd-item nav">
          <ul class="item">
            <li class="title">技术平台</li>
            <li>
              <nuxt-link :to="{name:'platform-teamwork'}">合作科研单位</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'platform-sequence'}">测序平台</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'platform-bigdata'}">大数据平台</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'platform-introduction'}">了解普瑞森</nuxt-link>
            </li>
          </ul>
          <!--<ul class="item">
            <li class="title">微生物组学</li>
            <li>
              <nuxt-link :to="{name:'microbiology'}">微生物组学</nuxt-link>
            </li>
          </ul>-->
          <ul class="item">
            <li class="title">产品及服务</li>
            <li>
              <nuxt-link :to="{name:'service-filter'}">肠癌风险评估</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'service-ecosystem'}">肠道微生态检测</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'service-child'}">儿童肠道检测</nuxt-link>
            </li>
          </ul>
          <!--<ul class="item">
            <li class="title">关于普瑞森</li>
            <li>
              <nuxt-link :to="{name:'about-join-us'}">加入我们</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'about-dynamic'}">科研动态</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'about-introduction'}">了解普瑞森</nuxt-link>
            </li>
          </ul>-->
          <ul><li class="item" :class="{active:$route.name == 'about'}">
            <nuxt-link :to="{name:'about-dynamic'}">新闻动态</nuxt-link>
          </li></ul>
          <ul><li class="item" :class="{active:$route.name == 'about'}">
            <nuxt-link :to="{name:'about-join-us'}">加入我们</nuxt-link>
          </li></ul>
        </div>
        <div class="itv-footer-bd-item qr-code">
          <img src="../assets/qrcode-text.png" alt="qr-code">
        </div>
      </div>
      <div class="itv-footer-copy">©2017 苏州普瑞森基因科技有限公司 <a href="http://www.beian.miit.gov.cn/" target="_blank">苏ICP备16065635号-1</a></div>
    </footer>
    <base-dialog :visible.sync="loginDialog" class="itv-login">
      <div class="itv-dialog-title">
        <img src="../assets/logo2.png" alt="logo">
      </div>
      <div class="itv-dialog-form">
        <div id="login_container"></div>
        <div class="itv-dialog-form__item" :class="{'active':focus == 1}">
          <span class="itv-icon" :class="focus == 1 ? 'itv-icon-phone--done':'itv-icon-phone'"></span>
          <input type="text" placeholder="手机号" v-model="loginForm.mobile" @focus="focus = 1">
        </div>
        <div class="itv-dialog-form__item" :class="{'active':focus == 2}">
          <span class="itv-icon" :class="focus == 2 ? 'itv-icon-captcha--done':'itv-icon-captcha'"></span>
          <input type="text" placeholder="验证码" v-model="loginForm.captchaCode" @focus="focus = 2">
          <div class="itv-captcha-group">
            <img class="img" :src="'data:img/jpg;base64,' + loginForm.captchaImage" alt="captchaImage">
            <span class="refresh" @click="getCaptcha">刷新</span>
          </div>
        </div>
        <div class="itv-dialog-form__item" :class="{'active':focus == 3}">
          <span class="itv-icon" :class="focus == 3 ? 'itv-icon-time--done':'itv-icon-time'"></span>
          <input type="text" placeholder="输入验证码" v-model="loginForm.code" @focus="focus = 3">
          <base-button class="form-code" size="small" line :disabled="codeStatus.sending || loginForm.captchaCode == ''"
                       @click="sendCode">{{ codeStatus.statusText }}
          </base-button>
        </div>
        <div class="itv-dialog-form__info">{{ loginForm.errorText }}</div>
      </div>
      <footer slot="footer" class="itv-dialog-footer">
        <base-button v-if="action === '登录'" size="big" style="width: 100%" @click="submitLogin">{{ action }}</base-button>
        <base-button v-else size="big" style="width: 100%" @click="wxBind">{{ action }}</base-button>
        <template v-if="action == '登录'">
          <p class="divide">使用第三方授权登录</p>
          <div class="third-party">
            <img src="../assets/wechat.png" alt="wechat" @click="wxLogin">
          </div>
        </template>
      </footer>
    </base-dialog>

    <!-- 二维码弹窗 -->

    <base-dialog :visible.sync="qrCodeDialog">
      <div id="qrCode"></div>
    </base-dialog>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ApiLogin from '../api/login';
  import * as Cookie from 'tiny-cookie';

  export default {
    name: 'LayoutDefault',
    computed: {
      ...mapState({
        full: state => state.layoutsFull,
        user: state => state.user
      }),
    },
    mounted() {
      if (this.$cookie.get('_prs_user')) {
        this.$store.dispatch('setUser', res => {})
      }
      if (this.$route.query.bind === '0') {
        this.openLoginDialog();
      }
      this.$store.state.footerEl = document.querySelector('#itv-footer');
    },
    data() {
      return {
        active: null,
        loginDialog: false,
        qrCodeDialog: false,
        loginForm: {
          mobile: '',
          code: '',
          captchaCode: '',
          errorText: '',
          captchaImage: null,
          captchaToken: null
        },
        codeStatus: {
          statusText: "获取验证码",
          sending: false,
          interval: undefined,
        },
        action: '登录',
        focus: 1,
        weixin:null,
      }
    },
    methods: {

      /**
       * 获取图形验证码
       */
      getCaptcha() {
        ApiLogin.getCaptcha({
          width: 100,
          height: 50
        }).then(res => {
          let _data = res.data.data;
          if (res.data.code === 0) {
            this.loginForm.captchaImage = _data.image;
            this.loginForm.captchaToken = _data.token;
          }
        })
      },

      /**
       * 打开登录弹窗
       */
      openLoginDialog() {
        if (this.$route.query.bind == '0') {
          this.action = '绑定';
        }else {
          this.action = '登录';
        }
        this.loginDialog = true;
        this.getCaptcha();
      },

      /**
       * 获取验证码
       */
      sendCode() {
        let _seconds = 30;
        if (this.loginForm.mobile === "") {
          this.loginForm.errorText = "手机号不能为空";
          return;
        }
        // 区分手机登录还是微信绑定手机
        let _msgType = '';
        if (this.action === '登录') {
          _msgType = 'sendSmsLogin';
        }else {
          _msgType = 'sendWxBindMsg';
        }
        ApiLogin[_msgType]({
          mobile: this.loginForm.mobile,
          captcha_token: this.loginForm.captchaToken,
          captcha_code: this.loginForm.captchaCode
        }).then(res => {
          if (res.data.code === 0) {
            this.loginForm.errorText = '';
            this.codeStatus.sending = true;
            this.codeStatus.statusText = _seconds + 's';
            this.codeStatus.interval = setInterval(() => {
              if (_seconds === 1) {
                this.codeStatus.sending = false;
                this.codeStatus.statusText = "获取验证码";
                clearInterval(this.codeStatus.interval);
                return;
              }
              _seconds--;
              this.codeStatus.statusText = _seconds + "s";
            }, 1000);
          }
          else {
            this.loginForm.errorText = res.data.message;
          }
        });
      },

      /**
       * 提交登录
       */
      submitLogin() {
        ApiLogin.login({
          mobile: this.loginForm.mobile,
          code: this.loginForm.code
        }).then(res => {
          let _data = res.data.data;
          if (res.data.code === 0) {
            this.$store.commit('SET_USER', _data.user);
            Cookie.setRaw('_prs_user', _data.token,{ expires: '30D' });
            this.loginDialog = false;
          } else {
            this.loginForm.errorText = res.data.message;
          }
        });
      },

      /**
       * 退出登录
       */
      quitLogin() {
        Cookie.remove('_prs_user');
        this.$router.push({path: '/'});
        window.location.reload();
      },

      /**
       * 微信用户绑定手机
       */
      wxBind() {
        ApiLogin.wxBind({
          mobile: this.loginForm.mobile,
          code: this.loginForm.code
        }).then(res => {
          let _data = res.data.data;
          if (res.data.code === 0) {
            this.$store.commit('SET_USER', _data.user);
            Cookie.setRaw('_prs_user', _data.token,{ expires: '30D' });
            this.loginDialog = false;
          } else {
            this.loginForm.errorText = res.data.message;
          }
        })
      },

      /**
       * 微信授权登录
       */
      wxLogin() {
        var path = this.$route.path;
        this.loginDialog = false;
        this.qrCodeDialog = true;
        this.weixin = new WxLogin({
          id:"qrCode",
          appid: "wx3fc6282daee79b7d",
          scope: "snsapi_login",
          redirect_uri: encodeURI(`http://www.precisiongene.cn/extensions/wx/user/login/`),
          state: path,
          style: "",
          href: ""
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/style/variable";

  .itv-login {
    .divide {
      position: relative;
      margin: 40px 0 32px;
      color: $font-sub;
      font-size: 12px;
      &:before, &:after {
        position: absolute;
        content: "";
        width: 80px;
        height: 2px;
        top: 50%;
        background: $border;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
  }
  #qrCode{
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }
  .third-party {
    img {
      cursor: pointer;
    }
  }
</style>
