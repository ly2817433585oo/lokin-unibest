/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:18:19
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 15:45:34
 * @FilePath: /unibest/src/store/user.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { mergeBaseParams } from '@/utils/requestParam'
import { userLoginApi, getVerifCodeApi } from '@/service/user/index'

const initState = { username: '' }

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { ...initState }
    }
    const isLogined = computed(() => !!userInfo.value.token)

    // #region 登录相关接口操作

    // 用户登陆
    const userLogin = async (params: ILoginParams) => {
      const constantParam: Partial<ILoginParams & IBaseParams> = {
        refer_card: '',
        wx_headimg: '',
        login_type: 3,
        type: 8,
      }
      const res = await userLoginApi(mergeBaseParams(params, constantParam))

      if (res) {
        setUserInfo(res.result)
        uni.reLaunch({
          url: '/pages/robots/index',
        })
      }

      console.log(uni.getStorageSync('userInfo'), "uni.getStorageSync('userInfo')")
      console.log(userInfo.value, 'userInfo')
      console.log(res, 'login success')
    }

    // 获取验证码
    const getVerifCode = async (params: IVerifCodeParams) => {
      const res = await getVerifCodeApi(mergeBaseParams(params))
      return res
    }

    // 用户登出
    const userLoginOut = () => {
      // 1. 清空用户信息
      clearUserInfo()

      // 2. 跳转到登陆界面
      uni.navigateTo({
        url: '/pages/login/login',
      })
    }
    // #endregion

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      isLogined,
      reset,
      userLogin,
      getVerifCode,
      userLoginOut,
    }
  },
  {
    persist: true,
  },
)
