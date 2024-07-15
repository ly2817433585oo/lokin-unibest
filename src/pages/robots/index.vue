<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:18:19
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-07 23:43:23
 * @FilePath: /unibest/src/pages/index/index.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'default',
  needLogin: true,
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的AI智体',
  },
}
</route>
<template>
  <view class="overflow-hidden pt-2" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <aiList />
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
import { useAIStore } from '@/store/ai'
import aiList from '@/components/ai-list/ai-list.vue'
defineOptions({
  name: 'Home',
})

const aiStore = useAIStore()

const fetchMemberCardInfo = async () => {
  const res = await aiStore.getMemeberCardInfo()
  console.log(res)
}

fetchMemberCardInfo()

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const author = ref('菲鸽')
// 测试 uni API 自动引入
onLoad(() => {
  console.log(author)
})
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
