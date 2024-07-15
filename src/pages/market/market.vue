<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 15:55:32
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-08 10:58:32
 * @FilePath: /unibest/src/pages/market/market.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page">
{
  layout: 'default',
  needLogin: true,
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'AI智体市场',
  },
}
</route>

<template>
  <view class="market">
    <aiPanel>
      <template #title>
        <div class="font-bold mx-40rpx text-32rpx py-20rpx">今日推荐</div>
      </template>
      <template #list>
        <aiList type="recommend" class="h-336rpx"></aiList>
      </template>
    </aiPanel>
    <aiPanel>
      <template #title>
        <div class="font-bold mx-40rpx text-32rpx py-20rpx">角色类别</div>
      </template>
      <template #list>
        <wd-tabs
          v-model="tab"
          animated
          @change="tabChangeHandler"
          v-if="aiStore.roleList?.length > 0"
        >
          <block v-for="item in aiStore.roleList" :key="item">
            <wd-tab :title="item.name" :name="item.name">
              <view class="content">
                <aiList type="typed" :is-loadmore="true" class="h-[504rpx]"></aiList>
              </view>
            </wd-tab>
          </block>
        </wd-tabs>
      </template>
    </aiPanel>
  </view>
</template>

<script lang="ts" setup>
//
import aiList from '@/components/ai-list/ai-list.vue'
import aiPanel from '@/components/ai-panel/ai-panel.vue'

import { useAIStore } from '@/store/ai'

defineOptions({
  name: 'Market',
})

const aiStore = useAIStore()

aiStore.getRecommendAIRobots()
aiStore.getAIRoleInfo()

const tab = ref()

const tabChangeHandler = (val) => {
  aiStore.curTab = val.name
  aiStore.pageRef = 1
  aiStore.getTypedAIRobots({ type: val.name })
}
</script>

<style lang="scss" scoped>
//
.market {
  :deep(.wd-tabs) {
    /* background: transparent; */
  }
}
</style>
