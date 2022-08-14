<template>
  <div class="custom-header fill-contianer flex-col-center">
    <div class="header-title fw-700">
      Vite 2.x + Vue 3.x + TypeScript 项目工程模板
    </div>
    <div class="header-link flex-col-center">
      <el-icon color="#1472FF" :size="16" class="link-icon">
        <Promotion />
      </el-icon>
      <a href="https://github.com/cloudyun258/vue3-vite-starter" target="__blank">Github</a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.custom-header {
  justify-content: space-between;
  .header-title {
    font-size: 20px;
  }
  .link-icon {
    margin-right: 4px;
  }
}
</style>
