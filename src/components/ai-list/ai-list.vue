<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 16:52:06
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-02 14:48:06
 * @FilePath: /unibest/src/components/ai-list/ai-list.vue
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
  <scroll-view scroll-y="true" @scrolltolower="scrolltolowerHandler">
    <view class="ai-list center w-full flex-wrap justify-evenly pt-[20rpx]">
      <ai-item v-for="item in list" :key="item.card_name" :item-info="item"></ai-item>
      <wd-loadmore
        v-if="props.isLoadmore"
        custom-class="loadmore"
        :state="state"
        @reload="loadmoreHandler"
      />
      <!-- @reload="loadmore" -->
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
//
import aiItem from '../ai-item/ai-item.vue'

import { useAIStore } from '@/store/ai'

const state = ref('loading')
const aiStore = useAIStore()

type aiListTYpe = 'my' | 'recommend' | 'type'

interface IProps {
  type?: aiListTYpe
  isLoadmore?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'my',
  isLoadmore: false,
})

const list = computed(() => {
  if (props.type === 'my') {
    return aiStore?.memberCardList?.driver_info
  } else if (props.type === 'recommend') {
    return aiStore.recommendCardList
  } else {
    return aiStore.tabAIList
  }
})

watchEffect(() => {
  if (aiStore.updateDatalen === 0 || aiStore.updateDatalen < aiStore.pageSizeRef) {
    state.value = 'finished'
  } else {
    state.value = 'loading'
  }
})

const loadmoreHandler = () => {
  aiStore.pageRef++
  aiStore.getTypedAIRobots({})
}

const scrolltolowerHandler = () => {
  loadmoreHandler()
}
</script>

<style lang="scss" scoped>
//
</style>
