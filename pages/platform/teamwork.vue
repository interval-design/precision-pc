<template>
  <div class="itv-teamwork">
    <header class="itv-content itv-breadcrumbs">
      <span class="itv-breadcrumbs-item">
        技术平台
        <i>&gt;</i>
      </span>
      <span>合作科研单位</span>
    </header>
    <div class="itv-teamwork-wrap">
      <img src="../../assets/pic-teamwork.jpg" srcset="../../assets/pic-teamwork.jpg 2x">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teamwork',
  head() {
    return {
      title: "科研合作单位 - 普瑞森基因",
      meta: [{ hid: "Teamwork", name: "description", content: "科研合作单位" }]
    };
  },
}
</script>

<style lang="scss">
.itv-teamwork {
  padding-bottom: 80px;
  &-wrap {
    img {
      width: 100%;
    }
  }
}
</style>
