<template>
  <div class="home">
    <img class="home-logo m-auto" src="https://vite-vue3-starter.xpoet.cn/assets/logo.5041849f.png" alt="" />
    <p class="home-title text-center">树深时见鹿，溪午不闻钟。——李白《访戴天山道士不遇》</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('环境变量配置对象：', import.meta.env)
})
</script>

<style scoped lang="scss">
.home {
  background-color: $bg-white;
  &-logo {
    width: 400px;
  }
  &-title {
    margin-top: 48px;
    font-size: 24px;
  }
}
</style>
