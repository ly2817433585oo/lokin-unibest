<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-19 10:35:22
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-06-19 11:17:01
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
  <wd-tabbar v-model="tabbar">
    <wd-tabbar-item title="首页" icon="home"></wd-tabbar-item>
    <wd-tabbar-item title="分类" icon="cart"></wd-tabbar-item>
    <wd-tabbar-item title="我的" icon="user"></wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabbar = ref(0)
</script>

<style lang="scss" scoped>
//
</style>
