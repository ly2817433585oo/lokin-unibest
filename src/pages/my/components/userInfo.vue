<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="user-info mx-[20rpx]">
    <view class="text-[54rpx] mt-[20rpx]">{{ userStore.userInfo.username }}</view>
    <view class="flex text-[28rpx]">
      ID:{{ userStore.userInfo.card_no }}
      <view class="ml-[20rpx]">点击复制</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import { useUserStore } from '@/store'

const userStore = useUserStore()
console.log(userStore.userInfo)
</script>

<style lang="scss" scoped>
//
</style>
