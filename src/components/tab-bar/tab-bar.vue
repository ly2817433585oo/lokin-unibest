<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-19 10:35:22
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 10:22:31
 * @FilePath: /unibest/src/components/tab-bar/tab-bar.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-19 10:35:22
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-06-19 10:52:46
 * @FilePath: /unibest/src/components/tab-bar.vue
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
  <wd-tabbar
    v-model="tabbar"
    fixed
    :bordered="false"
    @change="handleChange"
    v-if="isShowTabBar"
    custom-class="!bg-app"
  >
    <wd-tabbar-item
      v-for="(tab, idx) in props.tabBarList"
      :name="idx"
      :key="tab.text"
      :title="tab.text"
      :icon="tab.iconPath"
    ></wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup>
import type { tabBarProps } from './type'
import { ref, onUpdated } from 'vue'
import { currRoute, getIsTabbar } from '@/utils'

const isShowTabBar = computed(() => {
  return getIsTabbar()
})

const tabbar = ref(0)

const props = withDefaults(defineProps<tabBarProps>(), {
  tabBarList: () => [
    {
      text: 'AI智体',
      iconPath: 'chat1',
      pagePath: 'pages/robots/index',
    },
    {
      text: '市场',
      iconPath: 'home',
      pagePath: 'pages/market/market',
    },
    {
      text: '我',
      iconPath: 'user',
      pagePath: 'pages/my/index',
    },
  ],
})
const curRoute = currRoute()
const changeTabByRoute = () => {
  tabbar.value = props.tabBarList.findIndex((tab) => '/' + tab.pagePath === curRoute.path)
}

changeTabByRoute()

onShow(() => {
  changeTabByRoute()
})

function handleChange({ value }) {
  tabbar.value = value
  const curTab = props.tabBarList[value]
  uni.switchTab({ url: '/' + curTab.pagePath })
}
</script>

<style lang="scss" scoped>
//
</style>
