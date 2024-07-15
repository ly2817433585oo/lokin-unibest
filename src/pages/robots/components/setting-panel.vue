<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-08 15:22:25
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-10 16:13:13
 * @FilePath: /unibest/src/pages/robots/components/setting-panel.vue
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
  <view class="setting-panel">
    <view>
      <span>{{ props.title }}</span>
      <span v-if="props.isNecessary">*</span>
    </view>
    <view>
      {{ props.tips }}
    </view>
    <view>
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
interface IProps {
  title: string
  isNecessary?: boolean
  tips?: string
}

const props = withDefaults(defineProps<IProps>(), {
  isNecessary: false,
})
</script>

<style lang="scss" scoped>
//
</style>
