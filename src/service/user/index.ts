/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-20 09:21:12
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 15:38:52
 * @FilePath: /unibest/src/service/user/index.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { http } from '@/utils/http'
enum api {
  userLogin = '/h5/api/web/user/login/user_aiip_login',
  verificationCode = '/h5/api/web/user/login/login_aiip_send',
}
// 获取角色信息
// export const getUserInfo = (params: IuserInfoParams & IBaseParams) => {
//   return http.postFormData(api.userInfo, params)
// }

// 发送验证码
export const getVerifCodeApi = (params: IVerifCodeParams & IBaseParams) => {
  return http.postFormData(api.verificationCode, params)
}

export const userLoginApi = (params: ILoginParams & IBaseParams) => {
  return http.postFormData(api.userLogin, params)
}
