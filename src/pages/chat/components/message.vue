<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-03 10:13:25
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-08 21:53:42
 * @FilePath: /unibest/src/pages/chat/components/message.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page" needLogin="true">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view
    class="message p-[20rpx] rounded-md text-[28rpx]"
    :class="dynaClasses"
    v-code-copy
    :role="props.role"
  >
    <rich-text :nodes="html"></rich-text>
  </view>
</template>

<script lang="ts" setup>
import { marked } from '@/utils/marked'
import { copy } from '@/utils/copy'

interface IProps {
  text: string
  role: 'robot' | 'user'
}
const props = defineProps<IProps>()

const dynaClasses = computed(() => {
  return props.role === 'user' ? 'max-w-[480rpx]' : ''
})

const vCodeCopy = {
  mounted: (el: Element) => {
    const codePans = el.querySelectorAll('.code-pan')
    codePans.forEach((pan) => {
      const code = pan.querySelector('code')
      const btn = pan.querySelector('.copy-btn')
      if (btn) {
        btn.removeEventListener('click', () => {})
        btn.addEventListener('click', () => {
          copy(code.innerText)
        })
      }
    })
  },
}

const html = marked.parse(props.text)
</script>

<style lang="scss" scoped>
//
.message {
  background-color: var(--wot-card-bg);
}

.message[role='user'] {
  color: #fff;
  background-color: var(--wot-color-theme);
}

.message[role='robot'] {
  /* background-color: var(--wot-card-bg);
   */
  @apply bg-container-base color-base;
}
</style>
