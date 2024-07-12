/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-04 08:04:18
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-05 14:27:42
 * @FilePath: /unibest/src/utils/copy.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
export const copy = (text: string) => {
  console.log(text)
  uni.setClipboardData({
    data: text,
    showToast: true, // 使用默认提示
  })
}

export const paste = () => {
  return uni.getClipboardData()
}
