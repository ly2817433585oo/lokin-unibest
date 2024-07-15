/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-18 09:18:19
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 14:47:24
 * @FilePath: /unibest/src/typings.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// 全局要用的类型放到这里

// type IResData<T> = {
//   code: number
//   msg: string
//   data: T
// }

// uni.uploadFile文件上传参数
type IUniUploadFileOptions = {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}

// #region aiipai
type ResInfo = '令牌无效,请重新登录'

type IResData<T = any> = {
  retcode: string
  status: 'y' | 'n'
  result?: T
  info?: ResInfo
}

// #endregion
enum TestEnum {
  A = 'a',
  B = 'b',
}
