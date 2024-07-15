<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-27 11:24:34
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-06-27 16:13:16
 * @FilePath: /unibest/src/pages/my/update.vue
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
  <view class="update-info flex-vertical text-center p-[20rpx] items-center">
    <h3>更改{{ cnType }}</h3>
    <wd-input
      v-model="inputValue"
      custom-class="primary-input mt-[30rpx] w-[80%]"
      custom-input-class="ml-[30rpx]"
      :placeholder="palceHolder"
      :no-border="true"
    />
    <view class="text-[28rpx] mt-[10rpx]">验证码将发送到此{{ cnType }}。</view>
    <view class="text-[28rpx] mt-[10rpx] text-red-600" v-if="false">
      验证码将发送到此{{ cnType }}。
    </view>
    <wd-button class="mt-[40rpx] w-[80%]" :disabled="isDisabled">下一步</wd-button>
    <wd-button class="mt-[40rpx] w-[80%]" type="info" @click="cancelClickHandler">取消</wd-button>
  </view>
</template>

<script lang="ts" setup>
//
const type = ref('')
const inputValue = ref('')
const isDisabled = ref(true)

const cnType = computed(() => {
  return type.value === 'tele' ? '电话号码' : '电子邮件'
})

const palceHolder = computed(() => {
  return `${cnType.value}`
})

watchEffect(() => {
  isDisabled.value = inputValue.value.length <= 0
})

onLoad((options) => {
  type.value = options.type
})

const cancelClickHandler = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
//
</style>
