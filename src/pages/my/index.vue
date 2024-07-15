<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 10:47:38
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-07 23:43:28
 * @FilePath: /unibest/src/pages/my/index.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 10:47:38
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-06-26 10:58:01
 * @FilePath: /unibest/src/pages/my/index.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page">
{
  layout: 'default',
  needLogin: true,
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="user flex-vertical">
    <user-info />

    <scroll-view scroll-y class="flex-1 py-[20rpx]">
      <!-- 订阅 -->
      <wd-card>
        <template #title>
          <div class="title">订阅</div>
        </template>
        <view class="center mb-[20rpx]">
          <view class="flex-1 flex-vertical">
            PULS会员剩余时间：
            <view>163天</view>
          </view>
          <wd-button>订阅</wd-button>
        </view>

        <view class="center">
          <view class="flex-1 flex-vertical">领永久免费时间</view>
          <wd-button>订阅</wd-button>
        </view>
        <template #footer>
          <!-- <wd-button size="small" plain>查看详情</wd-button> -->
        </template>
      </wd-card>

      <!-- 安全 -->
      <wd-card>
        <template #title>
          <div class="title">安全</div>
        </template>
        <view class="center mb-[20rpx]">
          <view class="flex-1 flex-vertical">
            手机号：
            <view>13967028709</view>
          </view>
          <wd-button @click="safeBtnClickHanlder('tele')">更改</wd-button>
        </view>

        <view class="center">
          <view class="flex-1 flex-vertical">
            电子邮箱：
            <view>未绑定</view>
          </view>
          <wd-button @click="safeBtnClickHanlder('email')">更改</wd-button>
        </view>
        <template #footer>
          <!-- <wd-button size="small" plain>查看详情</wd-button> -->
        </template>
      </wd-card>

      <!-- 设备设置 -->
      <wd-card>
        <template #title>
          <div class="title">设备设置</div>
        </template>
        <view class="">
          <view class="font-bold text-[var(--wot-color-theme)] border">外观</view>
          <wd-radio-group v-model="theme" shape="dot" @change="themeChangeHandler">
            <wd-radio value="light">浅色主题</wd-radio>
            <wd-radio value="dark">深色主题</wd-radio>
          </wd-radio-group>
        </view>
        <template #footer>
          <!-- <wd-button size="small" plain>查看详情</wd-button> -->
        </template>
      </wd-card>

      <view class="px-[var(--wot-card-margin)]">
        <wd-button custom-class="!w-full" @click="logoutClick">退出登陆</wd-button>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
//
import userInfo from './components/userInfo.vue'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store'
const theme = ref('dark')
const appStore = useAppStore()
const userStore = useUserStore()

const themeChangeHandler = (tab) => {
  console.log(tab)
  appStore.setTheme(tab.value)
}

const safeBtnClickHanlder = (type) => {
  uni.navigateTo({
    url: `/pages/my/update?type=${type}`,
  })
}

const logoutClick = () => {
  // logout
  userStore.userLoginOut()
}
</script>

<style lang="scss" scoped>
//
.user {
  height: 100%;
  .title {
    /* @apply text-[24rpx]; */
    font-size: 24rpx;
    /* color: var(--theme-color); */
  }

  :deep(.wd-card__title-content) {
    /* padding: 20rpx 0; */
  }
}
</style>
