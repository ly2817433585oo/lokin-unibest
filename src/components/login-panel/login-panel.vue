<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-24 10:43:30
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-03 10:12:42
 * @FilePath: /unibest/src/components/login-panel/login-panel.vue
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
  <view class="login-panel px-[120rpx]">
    <wd-form ref="form" :model="loginModel">
      <wd-cell-group>
        <!-- 用户名 -->
        <wd-input
          v-if="!isLogin"
          prop="userName"
          clearable
          v-model="loginModel.userName"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          custom-class="primary-input"
          custom-input-class="ml-[30rpx]"
          :no-border="true"
        ></wd-input>
        <!-- 手机号 -->
        <wd-input
          class="mt-[30rpx]"
          prop="phoneNo"
          clearable
          v-model="loginModel.phoneNo"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
          custom-class="primary-input"
          custom-input-class="ml-[30rpx]"
          :no-border="true"
        ></wd-input>
        <!-- 密码 -->
        <wd-input
          prop="password"
          v-if="isPassWord && isLogin"
          clearable
          v-model="loginModel.password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填密码' }]"
          custom-class="primary-input"
          custom-input-class="ml-[30rpx]"
          :no-border="true"
        ></wd-input>
        <!-- 验证码 -->
        <view class="center mt-[30rpx]">
          <wd-input
            prop="smsCode"
            clearable
            v-model="loginModel.smsCode"
            placeholder="输入6位验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
            custom-class="primary-input flex-1"
            custom-input-class="ml-[30rpx]"
            :no-border="true"
          ></wd-input>
          <view class="text-white ml-[16rpx] text-[28rpx]" @click="getVerifCodeHandler">
            <wd-count-down :time="cutDownTime" v-if="isShowCutDown" @finish="cutDownFinishHandler">
              <template #default="{ current }">
                <span class="custom-count-down">{{ current.seconds + '秒' }}</span>
              </template>
            </wd-count-down>

            <span v-else>获取短信验证码</span>
          </view>
        </view>
      </wd-cell-group>
      <view class="footer">
        <wd-button
          type="primary"
          size="large"
          @click="loginHandler"
          block
          custom-class="mt-[40rpx] btn"
        >
          登录
        </wd-button>
      </view>
    </wd-form>
    <view
      class="text-[#fb2d64] text-[28rpx] center font-bold mt-[60rpx]"
      @click="isLogin = !isLogin"
    >
      {{ isLogin ? '免费创建账户' : '已有账户登录' }}
    </view>

    <wd-toast></wd-toast>
  </view>
</template>

<script lang="ts" setup>
//
import { useUserStore } from '@/store/user'
import { useToast, useMessage } from 'wot-design-uni'
const isLogin = ref(true) // 是否为登录界面
const isPassWord = ref(false) // 是否使用密码登录
const isShowCutDown = ref(false) // 是否显示倒计时

const cutDownTime = ref(60 * 1000) // 60s 倒计时

const form = ref()

const { info: showInfo } = useToast()

const loginModel = reactive({
  phoneNo: '',
  smsCode: '',
  password: '',
  userName: '',
})

const userStore = useUserStore()
const inputClasses = computed(() => {
  return 'rounded-[40rpx] h-[80rpx] border-[0px]'
})

const cutDownFinishHandler = () => {
  isShowCutDown.value = true
}

const getVerifCodeHandler = async () => {
  const valid = await validateHandler(true)
  if (valid) {
    const params = {
      phoneNo: Number.parseFloat(loginModel.phoneNo),
      type: isLogin.value ? 0 : 1,
    }
    const res = await userStore.getVerifCode(params)

    isShowCutDown.value = true
    cutDownTime.value = 60 * 1000
    console.log(res)
  }
}

const loginHandler = async () => {
  const valid = await validateHandler()
  if (valid) {
    const params = {
      user_phone: Number.parseFloat(loginModel.phoneNo),
      smscode: loginModel.smsCode,
      password: '',
    }
    userStore.userLogin(params)
  }
}

const validateHandler = async (isVerifCode = false): Promise<boolean> => {
  const { valid, errors } = await form.value.validate(isVerifCode ? 'phoneNo' : '')
  console.log(valid, errors)
  if (valid) {
    return true
  }
  if (errors) {
    // 优先显示第一条校验信息
    showInfo(errors[0].message)
    return false
  }
}
</script>

<style lang="scss" scoped>
//
.login-panel {
  ::v-deep.wd-cell-group__body {
    background-color: #0c0c0d;
  }
  /* 不显示校验提示 */
  ::v-deep.wd-input__error-message {
    display: none;
  }
  .btn {
    background-image: linear-gradient(150deg, #fb2d64, #ce002b, #811635);
  }
}
</style>
