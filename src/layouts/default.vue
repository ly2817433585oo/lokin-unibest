<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:18:19
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-06-19 11:17:53
 * @FilePath: /unibest/src/layouts/default.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <wd-config-provider :themeVars="themeVars">
    <view class="flex-vertical">
      <view class="flex-1">
        <slot />
        <wd-toast />
        <wd-message-box />
      </view>
      <tab-bar></tab-bar>
    </view>
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import tabBar from '@/components/tab-bar/tab-bar.vue'
import { ref } from 'vue'

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
