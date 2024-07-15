/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-15 15:36:24
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 16:23:53
 * @FilePath: /unibest/src/types/aiipai/user.d.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
interface ILoginParams {
  password: string
  /** 短信验证码 */
  smscode: string
  /** 推荐人卡号 */
  refer_card: string
  /** 微信头像 */
  wx_headimg: string
  /** 用户手机号 */
  user_phone: number
  /** 登陆类型 */
  login_type: number
}

interface IVerifCodeParams {
  phoneNo: number
}
