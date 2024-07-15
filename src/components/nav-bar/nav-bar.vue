<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-19 23:24:44
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:32:02
 * @FilePath: /unibest/src/components/nav-bar/nav-bar.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <wd-navbar placeholder safeAreaInsetTop :bordered="true" fixed>
    <template #left>
      <wd-icon name="view-list" size="22px" @click="menuClickHandler" class="mr-[20rpx]"></wd-icon>

      <!-- ai智体信息 : 聊天界面显示 -->
      <view v-if="isShowRobot" class="h-full center">
        <wd-img :width="32" :height="32" :src="aiStore.curRobot.card_logo" />
        <view class="leading-none flex-vertical ml-[10rpx]">
          <span class="text-[30rpx] mb-[10rpx]">
            {{ aiStore.curRobot.card_name }}
          </span>
          <span class="text-[24rpx] text-gray-400">
            {{ aiStore.curRobot.role_name }}
          </span>
        </view>
      </view>

      <!-- logo -->
      <view class="center logo" v-if="!isShowRobot && isShowLogo">
        <wd-img :width="28" :height="28" :src="logo" />
        <view class="logo-text">UPAI</view>
      </view>
    </template>

    <template #title>{{ title }}</template>

    <template #right>
      <wd-icon name="share" size="22px" v-if="isShowRobot"></wd-icon>
    </template>
  </wd-navbar>
</template>

<script lang="ts" setup>
import logo from '@/static/image/AIIP-LOGO-SVG.svg'
import { isEmpty } from 'lodash-es'

import { useAppStore } from '@/store/app'
import { useAIStore } from '@/store/ai'
import { currPageInfo } from '@/utils'

const appStore = useAppStore()
const aiStore = useAIStore()
const isShowLogo = ref(true)
const pageInfo = currPageInfo()
const title = ref<string>(pageInfo.meta.navigationBar.titleText)

onShow(() => {
  const pageInfo = currPageInfo()
  title.value = pageInfo.meta.navigationBar.titleText
})

const isShowRobot = computed(() => {
  return !isEmpty(aiStore.curRobot)
})

const menuClickHandler = () => {
  appStore.setiIsShowLeftPopUp(true)
}
</script>

<style lang="scss" scoped>
//

.logo-text {
  padding-bottom: 20rpx;
  margin-left: 4rpx;
  font-size: 18rpx;
  color: var(--wot-dark-color, var(--wot-navbar-color));
}
</style>
