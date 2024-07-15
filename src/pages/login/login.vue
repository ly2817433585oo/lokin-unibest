<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 10:57:59
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-08 09:34:35
 * @FilePath: /unibest/src/pages/login/login.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
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
  <view class="login flex-vertical max-w-[960rpx] mx-auto">
    <view class="mt-[60rpx] text-center text-[40rpx] font-bold">创造你的第一个AI智体</view>
    <view class="mt-[60rpx] text-center mb-[30rpx] text-[32rpx] font-bold">登录账户</view>
    <loginPanel />

    <wd-img
      src="../../static/images/login-banner.png"
      height="500"
      custom-class="px-[60rpx]"
    ></wd-img>
  </view>
</template>

<script lang="ts" setup>
//

import loginPanel from '@/components/login-panel/login-panel.vue'
</script>

<style lang="scss" scoped>
//
.login {
  //
}
</style>
