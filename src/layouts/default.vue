<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:18:19
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 14:37:47
 * @FilePath: /unibest/src/layouts/default.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <wd-config-provider
    :themeVars="appStore.themeConfig"
    :theme="appStore.theme"
    :class="`layout ${appStore.theme}`"
    @touchmove.stop.prevent
  >
    <navBar />
    <view class="content bg-app" :show-tab-bar="appStore.isShowTabBar">
      <slot />
    </view>

    <wd-toast></wd-toast>
    <wd-message-box />
    <wd-popup
      v-model="appStore.isShowLeftPopUp"
      lock-scroll
      lazy-render
      position="left"
      :safe-area-inset-bottom="true"
      custom-style="width: 60%"
      @close="appStore.isShowLeftPopUp = false"
      custom-class="pt-[108rpx]"
    >
      <wd-button @click="backClick">back</wd-button>
    </wd-popup>
    <tab-bar></tab-bar>
  </wd-config-provider>
</template>

<script lang="ts" setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'
import navBar from '@/components/nav-bar/nav-bar.vue'
import { currRoute } from '@/utils'
import { watchRouter } from '@/interceptors/route'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
//  在 layout中监听路由， 可以在每个页面 onLoad的时候 完全第一次路由跳转
const route = currRoute()

onShow(() => {
  const pages = getCurrentPages()
  console.log(pages, 'layout')
})

const backClick = () => {
  appStore.isShowLeftPopUp = false
  uni.reLaunch({ url: '/pages/robots/index' })
}

watchRouter({ url: route.path })

const moveStop = () => {}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  overflow: hidden;
  color: var(--wot-dark-color);
  --nav-bar-height: 88rpx;
  --tab-bar-height: 120rpx;
  .content {
    overflow: hidden;
    /* background-color: var(--wot-color-bg); */
  }
  .content[show-tab-bar='true'] {
    height: calc(100% - var(--nav-bar-height) - var(--tab-bar-height));
  }
  .content[show-tab-bar='false'] {
    height: calc(100% - var(--nav-bar-height));
  }
}
</style>
