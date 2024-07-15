<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:44:06
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:34:24
 * @FilePath: /unibest/src/pages/chat/chat.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:44:06
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-05 17:17:05
 * @FilePath: /unibest/src/pages/chat/chat.vue
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
    navigationBarTitleText: '',
    'app-plus': {
      bounce: 'none',
    },
  },
}
</route>

<template>
  <view class="h-full flex-vertical">
    <scroll-view scroll-y class="flex-1" @touchmove.stop.prevent>
      <view v-for="(message, idx) in messageList" :key="idx" class="px-20rpx pt-20rpx">
        <!-- 用户消息 -->
        <view v-if="message.role === 'user'" class="text-24rpx">
          <view class="flex items-center justify-end" @click="activeToolBtn = idx">
            <messge-popover :type="message.role" v-if="activeToolBtn === idx" />
            <message :text="message.content" :role="message.role" />
          </view>
          <view class="text-right mt-[6rpx] pr-[10rpx]">
            {{ isShowLoading ? '正在发送...' : '' }}
          </view>
        </view>

        <!-- 机器人消息 -->
        <view v-else @click="activeToolBtn = idx">
          <view class="flex items-center mb-10rpx text-28rpx">
            <wd-img :width="24" :height="24" round :src="aiStore.curRobot.card_logo" />
            <span class="ml-10rpx mr-20rpx">{{ aiStore.curRobot.card_name }}</span>
            <messge-popover :type="message.role" v-if="activeToolBtn === idx" />
          </view>
          <message :text="message.content" :role="message.role" />
        </view>
      </view>
    </scroll-view>
    <input-panel @send-message="sendMessageHandler" />
  </view>
</template>

<script lang="ts" setup>
//
import message from './components/message.vue'
import inputPanel from './components/input-panel.vue'
import messgePopover from './components/messge-popover.vue'

import { useAIStore } from '@/store/ai'

const activeToolBtn = ref<number>(-1)
const aiStore = useAIStore()

const isShowLoading = ref<boolean>(false) // 显示正在发送

console.log(aiStore.curRobot, 'aiStore.curRobot')

const messageList = ref([]) // 当前页面的消息列表

aiStore.getChatMessages()

const sendMessageHandler = async (message, success) => {
  const isSecure = await aiStore.checkMessage({ message })
  const messageInfo = { role: 'user', content: message }
  messageList.value.push(messageInfo)
  if (isSecure) {
    // 继续发送消息
    // 1. 显示正在发送
    isShowLoading.value = true

    // 2. 发送消息
    const res = await aiStore.sendMessage({ message })

    //
    isShowLoading.value = false
    console.log(res, 'message result')

    messageList.value.push({
      role: 'robot',
      content: res.result.ret_content,
    })
  }
  success()
}

onUnload(() => {
  console.log('onUnload')
  aiStore.setCurRobot({})
})

onHide(() => {
  console.log('onHide')
  aiStore.setCurRobot({})
})
</script>

<style lang="scss" scoped>
//
.test {
  overscroll-behavior: contain;
}
</style>
