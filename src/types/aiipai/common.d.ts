/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-15 14:02:00
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 15:32:53
 * @FilePath: /unibest/src/types/aiipai/common.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
type ISource = 'h5' | 'mp-weixin'
type IType = 0 | 1 | 2 | 8
type ILang = 'zh'

/**  aiipai 用户信息 */
interface IUserInfo {
  /** 微信的 openid，非微信没有这个字段 */
  openid?: string
  /** 用户token */
  token?: string
  /** 用户名 */
  username?: string
  /** 微信名 */
  wx_nickname?: string
  /** 微信头像 */
  wx_headimg?: string
  card_no?: string
  card_name?: string
  card_logo?: string
  card_driver_info?: string
  user_phone?: string
  user_tel?: string
  m_id?: number
  r_mid?: number
  user_type?: string
  type?: string
  user_id?: string
  user_group_id?: number
  user_group_name?: string
  user_name?: string
  quan_bal?: number
  cash_bal?: number
  address?: ''
  user_gender?: string
  area?: string
}

/** aiipai ai智体信息 */
interface IRobot {
  card_logo?: string
  card_name?: string
  driver_action_note?: string
  driver_open?: string
  driver_plus_open?: string
  driver_type?: string
  name?: string
  name_cn?: string
  role_name?: string
  driver_name?: string
}

/** aiipai ai驱动信息 */
interface IDriver {
  ExpStatus?: string
  art_id?: string
  fn?: string
  icon?: string
  id?: string
  is_free?: boolean
  is_show?: boolean
  name?: string
  name_cn?: string
  note?: string
  style?: string
  title?: string
  type?: string
  url?: string
}

/** aiipai 接口通用参数 */
interface IBaseParams {
  username: string
  shop_type: number
  shop_id: string
  access_token: string
  type?: IType
  source?: ISource
  lang?: ILang
}
