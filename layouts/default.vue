<template>
  <div class="itv-layout-default itv-view">
    <nav class="itv-nav">
      nav
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
    height: 50px;
    width: 100%;
    background: $border;
  }

  .itv-footer{
    height: 50px;
    width: 100%;
    background: $border;
  }
</style>
