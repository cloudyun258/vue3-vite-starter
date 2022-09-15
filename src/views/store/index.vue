<template>
  <div class="store flex-col-center">
    <div class="store-title">Vuex测试页面</div>
    <p class="doubleCount">store doubleCount is: {{ homeCount }}</p>
    <el-button class="button" type="primary" @click="doubleCount">数值翻倍</el-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const homeCount = computed(() => {
  return store.state.homePage.count
})

const doubleCount = () => {
  store.commit('homePage/doubleCount')
}
</script>

<style scoped lang="scss">
.store {
  flex-direction: column;
  .store-title {
    font-size: 28px;
    padding-top: 24px;
    margin-bottom: 48px;
  }
  .doubleCount {
    margin-bottom: 16px;
    font-size: 16px;
  }
}
</style>
