<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 14:10:53
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 17:01:09
 * @FilePath: /unibest/src/components/ai-item/ai-item.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 14:10:53
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 09:26:34
 * @FilePath: /unibest/src/components/ai-item/ai-item.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view
    class="ai-item p-[20rpx] rounded-[30rpx] mb-[20rpx] text-[28rpx] shadow-base-md bg-container-base color-base border-base"
    @click="itemClickHandler"
  >
    <view class="item-content">
      <wd-img
        class="avator"
        width="54"
        height="54"
        :src="props.itemInfo.card_logo"
        custom-class="rounded-[25%] overflow-hidden flex-shrink-0 mr-[20rpx]"
      ></wd-img>
      <view class="flex-vertical">
        <view class="">{{ name }}</view>
        <view class="text-[24rpx]">{{ props.itemInfo.name_cn || props.itemInfo.role_name }}</view>
      </view>
    </view>
    <view
      class="right-bottom-btn center text-white bg-base"
      v-if="isShowSetting"
      @click.stop="itemSettingHandler"
    >
      <wd-icon name="setting1" size="14px"></wd-icon>
    </view>
    <view></view>
  </view>
</template>

<script lang="ts" setup>
import { useAIStore } from '@/store/ai'
defineOptions({
  name: 'AIItem',
})

interface IProps {
  itemInfo: IRobot
}
const props = withDefaults(defineProps<IProps>(), {})

const aiStore = useAIStore()

const name = computed(() => {
  return props.itemInfo.card_name.replace('_Copy', '')
})

// 判断是否可以设置
const isShowSetting = computed(() => {
  return props.itemInfo.driver_type !== 'A' && !props.itemInfo.card_name.includes('_Copy')
})

const itemClickHandler = () => {
  aiStore.setCurRobot(props.itemInfo)
  // 使用名字判断是否为 用户创建的机器人
  if (props.itemInfo.name) {
    uni.navigateTo({ url: '/pages/chat/chat' })
  }
}

const itemSettingHandler = () => {
  aiStore.setCurRobot(props.itemInfo)
  uni.navigateTo({ url: '/pages/robots/setting' })
}
</script>

<style lang="scss" scoped>
//
.ai-item {
  @apply relative overflow-hidden;
  box-sizing: border-box;
  width: 340rpx;
  height: fit-content;
  .item-content {
    @apply flex items-start justify-start;
  }
  .right-bottom-btn {
    width: 64rpx;
    height: 48rpx;
    border-top-left-radius: 20rpx;
    @apply absolute bottom-0 right-0;
  }
}
</style>
