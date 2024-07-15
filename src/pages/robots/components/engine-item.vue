<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-08 16:08:01
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-10 14:53:34
 * @FilePath: /unibest/src/pages/robots/components/engine-item.vue
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
  <view
    class="flex-vertical items-center bg-container-base relative overflow-hidden rounded-30rpx pt-30rpx text-[24rpx] border-base"
    @click="itemClickHadnler"
  >
    <view
      v-if="!props.info.is_free"
      class="absolute right-0 top-0 py-2rpx px-10rpx bg-#ffad00 text-20rpx rounded-bl-30rpx z-10 color-black"
    >
      PLUS
    </view>
    <wd-img
      class="avator"
      width="54"
      height="54"
      :src="icon"
      custom-class="rounded-[25%] overflow-hidden flex-shrink-0 mb-[20rpx]"
    ></wd-img>
    <view class="color-base">{{ props.info.name }}</view>
    <view class="color-subtle my-[10rpx]">{{ props.info.title }}</view>

    <view
      class="py-4rpx px-12rpx bg-base color-white w-full text-center text-24rpx"
      @click.stop="engineInstructionClick"
    >
      驱动说明
    </view>
  </view>
</template>

<script lang="ts" setup>
//

interface IProps {
  info: IDriver
}

const props = withDefaults(defineProps<IProps>(), {})

const icon = computed(() => {
  return '/src' + props.info.icon
})
console.log(icon)

const emit = defineEmits<{ (e: 'open-instruction'): void; (e: 'open-driver-list'): void }>()

const engineInstructionClick = () => {
  emit('open-instruction')
}

const itemClickHadnler = () => {
  emit('open-driver-list')
}
</script>

<style lang="scss" scoped>
//
</style>
