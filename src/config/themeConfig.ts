/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-20 09:17:06
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 09:42:48
 * @FilePath: /unibest/src/config/themeConfig.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import type { ConfigProviderThemeVars } from 'wot-design-uni'

export const darkTheme: ConfigProviderThemeVars = {
  colorTheme: '#ea3d5c',
  darkBackground: '#242424',
  colorBg: '#242424',
  darkColor: '#f2f2f2',
  tabbarHeight: '120rpx',
  darkColorGray: '#f2f2f2',
  colorBorderLight: '#313535', // nav-bar-bottom-border
}
export const lightTheme: ConfigProviderThemeVars = {
  colorTheme: '#5d5cd6',
  colorBg: '#fff',
  darkColor: '#181818',
  cardBg: '#f7f7f7',
  cardMargin: '30rpx',
  navbarBackground: '#f7f7f7',
  navbarColor: '#181818',
  tabbarHeight: '120rpx',
}

export const themes = {
  dark: darkTheme,
  light: lightTheme,
}
