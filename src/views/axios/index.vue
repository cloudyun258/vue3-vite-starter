<template>
  <div class="axios flex-col-center">
    <div class="axios-title">Axios测试页面</div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header flex-col-center">
          <span>cloudyun258</span>
          <el-button class="button" type="primary" @click="getUserInfo">获取信息</el-button>
        </div>
      </template>
      <div v-loading="loading" class="card-content">
        <div v-if="!userInfo.avatar_url" class="empty flex-center">你想认识我嘛(●ˇ∀ˇ●)？赶紧点击上方按钮吧~</div>
        <div v-else class="has flex-col-center">
          <div class="left">
            <img
              v-if="userInfo.avatar_url"
              :src="userInfo.avatar_url"
              class="user-avatar br-circle"
              alt=""
            >
          </div>
          <div class="right">
            <p v-if="userInfo.bio">个性签名：{{ userInfo.bio }}</p>
            <p v-if="userInfo.blog">博客：{{ userInfo.blog }}</p>
            <p v-if="userInfo.location">坐标：{{ userInfo.location }}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import * as userApi from '@/apis'

const userInfo = reactive({
  avatar_url: '',
  bio: '',
  blog: '',
  location: ''
})
const loading = ref(false)

const getUserInfo = () => {
  if (loading.value) {
    return
  }
  loading.value = true
  userApi.getUserInfo().then((res: any) => {
    userInfo.avatar_url = res.avatar_url
    userInfo.bio = res.bio
    userInfo.blog = res.blog
    userInfo.location = res.location
  }).catch(() => {
    console.log('网络错误，请稍后重试')
  }).finally(() => {
    loading.value = false
  })
}
</script>

<style scoped lang="scss">
.axios {
  flex-direction: column;
  .axios-title {
    font-size: 28px;
    padding-top: 24px;
    margin-bottom: 48px;
  }
  .box-card {
    width: 480px;
    .card-header {
      justify-content: space-between;
    }
    .card-content {
      min-height: 88px;
      .empty {
        height: 88px;
      }
      .right {
        margin-left: 32px;
      }
      .user-avatar {
        width: 88px;
        height: 88px;
      }
    }
  }
}
</style>
