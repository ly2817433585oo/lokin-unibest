/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-15 16:08:34
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-15 17:07:16
 * @FilePath: /unibest/src/utils/errorHandling.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { isFunction } from 'lodash-es'
import { isPromise } from './is'

type fnc = (args?: unknown) => unknown
export function callWithErrorHandling(fn: fnc, args?: unknown[]) {
  let res
  try {
    res = args ? fn(...args) : fn()
  } catch (err) {
    console.log(err)
  }
  return res
}

export function callWithAsyncErrorHandling(fn: fnc | fnc[], args?: unknown[]): any[] {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, args)
    if (res && isPromise(res)) {
      res.catch((err) => {
        console.log(err)
      })
    }
    return res
  }

  const values = []
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], args))
  }
  return values
}
