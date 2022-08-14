<template>
  <el-container style="height: 100%">
    <el-header height="56px">
      <custom-header />
    </el-header>
    <el-container class="content-wrap">
      <el-aside class="content-aside" width="120px">
        <custom-aside />
      </el-aside>
      <el-main class="content-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import customAside from '@/components/customAside.vue'
import customHeader from '@/components/customHeader.vue'
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-color: $bg-main;
  .el-header,
  .el-aside,
  .el-main {
    background-color: $bg-white;
  }
  .content-wrap {
    margin-top: 12px;
  }
  .content-main {
    margin-left: 12px;
  }
}
</style>
