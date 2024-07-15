/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-15 16:14:13
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 17:02:01
 * @FilePath: /unibest/src/utils/is.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { isObject, isFunction } from 'lodash-es'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  // @ts-expect-error todo
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
