<template>
  <div class="custom-aside">
    <div
      v-for="(item, index) in asideList"
      :key="index"
      class="aside-item text-center c-pointer"
      :class="{ active: $route.name === item.name }"
      @click="$router.push(item.route)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const asideList = [
  { name: 'Home', route: '/' },
  { name: 'Axios', route: '/axios' },
  { name: 'Store', route: '/store' }
]
</script>

<style scoped lang="scss">
.custom-aside {
  background-color: $bg-white;
  .aside-item {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    &.active {
      font-weight: 700;
      background-color: $bg-main;
    }
  }
}
</style>
