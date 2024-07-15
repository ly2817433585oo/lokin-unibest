<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-03 10:23:12
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:38:08
 * @FilePath: /unibest/src/pages/chat/components/input-panel.vue
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
  <view class="flex input-panel pt-[10rpx] pb-[20rpx] px-[10rpx]">
    <view></view>
    <view
      class="center px-[8rpx] rounded-[50rpx] border-[2rpx] border-[var(--input-border-color)] border-solid flex-1 py-[8rpx]"
    >
      <wd-textarea
        v-model="message"
        auto-height
        :placeholder="placeholder"
        class="flex-1 ml-[20rpx]"
        no-border
        @focus="inputFoucsHandler(true)"
        @blur="inputFoucsHandler(false)"
      />
      <wd-button type="icon" icon="add-circle" @click="run"></wd-button>
      <wd-button
        class="btn"
        type="icon"
        icon="arrow-right1"
        @click="sendClickHandler"
        :disabled="message.length == 0 || isSendDisabled"
      ></wd-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import { useAppStore } from '@/store/app'
import { useAIStore } from '@/store/ai'

import useUpload from '@/hooks/useUpload'

defineOptions({
  name: 'InputPanel',
})

const appStore = useAppStore()
const aiStore = useAIStore()
const { run } = useUpload()

const emit = defineEmits<{
  (e: 'send-message', message: string, cb: () => void): void
}>()
const inputBorderColor = ref('#a2a2a2')
const placeholder = computed(() => {
  return `与${aiStore.curRobot.card_name}交谈`
})
const message = ref<string>('')

const isSendDisabled = ref<boolean>(false)
const inputFoucsHandler = (isFocus: boolean) => {
  inputBorderColor.value = isFocus ? appStore.themeConfig.colorTheme : '#a2a2a2'
}

const sendClickHandler = () => {
  isSendDisabled.value = true
  emit('send-message', message.value, () => {
    isSendDisabled.value = false
  })
  message.value = ''
}
</script>

<style lang="scss" scoped>
//
.input-panel {
  --input-border-color: v-bind(inputBorderColor);
  --wot-button-medium-fs: 40rpx;
  --wot-textarea-not-empty-border-color: transparent;
  height: fit-content;

  :deep(.wd-textarea.is-auto-height)::after {
    display: none;
  }
}

.btn {
  --wot-button-icon-color: #fff;
  --wot-button-medium-fs: 36rpx;

  background-color: var(--wot-color-theme);
  :deep(.wd-button__icon) {
    font-weight: bold;
  }
}
</style>
