<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-08 15:02:45
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:49:48
 * @FilePath: /unibest/src/pages/robots/setting.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '编辑机器人',
  },
}
</route>

<template>
  <scroll-view scroll-y>
    <wd-img :width="40" :height="40"></wd-img>

    <setting-panel
      title="名称"
      isNecessary
      tips="必须唯一，并且使用4-20个字符，包括字母、数字、破折号、句号和下划线。"
    >
      <view class="center">
        <wd-input class="flex-1 shadow-focus" no-border></wd-input>
        <wd-button>随机生成</wd-button>
      </view>
    </setting-panel>

    <setting-panel title="驱动AI" isNecessary>
      <engine-item
        :info="curAIDriver"
        class="w-1/4"
        @open-instruction="openInstructionHadnler"
        @open-driver-list="openDriverListHandler"
      ></engine-item>
    </setting-panel>

    <setting-panel title="角色类别" isNecessary>
      <template #content></template>
    </setting-panel>

    <wd-action-sheet v-model="isShowActionSheet" :title="actionSheetTitle" @close="close">
      <scroll-view scroll-x scroll-y>
        <template v-if="isShowInstruction">
          <view class="relative">
            <view class="h-800rpx" v-html="introContent"></view>
            <view class="absolute -top-10rpx -left-10rpx">后退</view>
          </view>
        </template>
        <template v-else>
          <view class="flex flex-wrap h-800rpx justify-around">
            <engine-item
              v-for="driver in aiDrivers"
              :key="driver.name"
              :info="driver"
              class="w-1/4"
              @open-instruction="openInstructionHadnler"
              @click="driverItemClick(driver)"
            ></engine-item>
          </view>
        </template>
      </scroll-view>
    </wd-action-sheet>
  </scroll-view>
</template>

<script lang="ts" setup>
//
import settingPanel from './components/setting-panel.vue'
import engineItem from './components/engine-item.vue'
import { useQueue } from '../../../node_modules/wot-design-uni'

import { pureMarked } from '@/utils/marked'
import { useAIStore } from '@/store/ai'

const { closeOutside } = useQueue()
const aiStore = useAIStore()
console.log(aiStore.curRobot)
const aiDrivers = ref<Array<Record<string, any>>>([])
const curAIDriver = ref<IDriver>({})
const introContent = ref<string>('')

const actionSheetTitle = ref<string>('')

onShow(async () => {
  const res = await aiStore.getAIDirverInfo()
  aiDrivers.value = res.result[0]
  curAIDriver.value = aiDrivers.value.find((driver) => driver.name === aiStore.curRobot?.name)
  console.log(curAIDriver.value, 'curAIDriver.value')
  console.log(aiDrivers.value, 'getAIDirverInfo')
})

onMounted(() => {})

const isShowActionSheet = ref<boolean>(false)
const isShowInstruction = ref<boolean>(false)

const openInstructionHadnler = async () => {
  isShowActionSheet.value = true
  isShowInstruction.value = true
  const res = await aiStore.getEngineInfo({
    art_id: curAIDriver.value.art_id,
    arc_car_id: curAIDriver.value.id,
  })
  introContent.value = pureMarked(res.result[0].desc)
  actionSheetTitle.value = res.result[0].title
}

const openDriverListHandler = () => {
  actionSheetTitle.value = '驱动列表'
  isShowInstruction.value = false
  isShowActionSheet.value = true
}

const driverItemClick = (driver: IDriver) => {
  curAIDriver.value = driver
  isShowActionSheet.value = false
}
const close = () => {
  isShowActionSheet.value = false
}
</script>

<style lang="scss" scoped>
//
</style>
