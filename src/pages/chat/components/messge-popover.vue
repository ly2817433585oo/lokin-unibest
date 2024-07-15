<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-05 17:23:53
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-07 18:18:35
 * @FilePath: /unibest/src/pages/chat/components/messge-popover.vue
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
  <wd-popover
    v-model="show"
    mode="menu"
    :content="menu"
    @menuclick="link"
    :placement="palcement"
    :visible-arrow="false"
  >
    <template #content>
      <view class="pop-content">这是一段自定义样式的内容。</view>
      <view class="pop-content">这是一段自定义样式的内容。</view>
      <view class="pop-content">这是一段自定义样式的内容。</view>
      <view class="pop-content">这是一段自定义样式的内容。</view>
    </template>
    <wd-icon name="ellipsis" size="44rpx" class="font-bold mr-[30rpx]"></wd-icon>
  </wd-popover>
</template>

<script lang="ts" setup>
//

interface IProps {
  type: 'user' | 'robot'
}

const props = defineProps<IProps>()

const show = ref<boolean>(false)

const palcement = computed(() => {
  return props.type === 'user' ? 'bottom-start' : 'bottom-end'
})

const menu = ref<Array<Record<string, any>>>([
  {
    iconClass: 'read',
    content: '全部标记已读',
  },
  {
    iconClass: 'delete',
    content: '清空最近会话',
  },
  {
    iconClass: 'detection',
    content: '消息订阅设置',
  },
  {
    iconClass: 'subscribe',
    content: '消息异常检测',
  },
])

const link = () => {}
</script>

<style lang="scss" scoped>
//
</style>
