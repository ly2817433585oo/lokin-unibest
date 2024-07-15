/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 14:29:41
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:28:19
 * @FilePath: /unibest/src/utils/requestParam.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'

export const getBaseParam = (): IBaseParams => {
  const userStore = useUserStore()
  const appStore = useAppStore()

  return {
    username: userStore.userInfo.username,
    shop_id: appStore.shopeId,
    shop_type: appStore.shopType,
    access_token: userStore.userInfo.token,
    type: 0,
    source: 'h5',
  }
}

// 分别是 共用的param, 部分接口固定参数的param, 与页面交互获取的param
export const mergeBaseParams = (param: any, constantParam: any = {}) => {
  return Object.assign({}, getBaseParam(), constantParam, param)
}
