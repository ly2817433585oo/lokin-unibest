/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-23 15:41:17
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 15:21:26
 * @FilePath: /unibest/src/store/app.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { themes } from '@/config/themeConfig'
import { deepClone } from 'wot-design-uni/components/common/util'
type themeType = keyof typeof themes

export const useAppStore = defineStore(
  'app',
  () => {
    const token = ref<IUserInfo['token']>('')
    const shopType = ref<IBaseParams['shop_type']>(2)
    const shopeId = ref<IBaseParams['shop_id']>('3846')

    // #region 外观相关
    const isShowTabBar = ref(false)
    const isShowLeftPopUp = ref(false)
    const theme = ref<themeType>('dark')
    const themeConfig = reactive(deepClone(themes[theme.value]))
    const setTheme = (t: themeType) => {
      theme.value = t

      Object.assign(themeConfig, themes[t])
      console.log(themes[t])
    }
    const setIsShowTabBar = (isShow: boolean) => {
      isShowTabBar.value = isShow
    }

    const setiIsShowLeftPopUp = (isShow: boolean) => {
      isShowLeftPopUp.value = isShow
    }

    // #endregion
    return {
      shopType,
      shopeId,
      token,
      theme,
      themeConfig,
      setTheme,
      isShowTabBar,
      setIsShowTabBar,

      isShowLeftPopUp,
      setiIsShowLeftPopUp,
    }
  },
  {
    persist: true,
  },
)
