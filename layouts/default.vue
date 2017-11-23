<template>
  <div class="itv-layout-default itv-view">
    <nav class="itv-nav">
      <div class="itv-nav-bar">
        <nuxt-link to="/">
          <img src="../assets/logo.png" alt="logo">
        </nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/">首页</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">技术</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">产品及服务</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">关于普瑞森</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt class="itv-container"/>
    <footer class="itv-footer">
      footer
    </footer>
  </div>
</template>

<style lang="scss">
  @import "../assets/style/variable";

  .itv-nav{
    height: 56px;
    width: 100%;
    background: $white;
    &-bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1100px;
      height: 100%;
      margin: auto;
    }
  }

  .itv-footer{
    height: 50px;
    width: 100%;
    background: $border;
  }
</style>
