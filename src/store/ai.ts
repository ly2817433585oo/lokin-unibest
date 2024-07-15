/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 14:25:10
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-10 14:47:31
 * @FilePath: /unibest/src/store/ai.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { getUuid } from '@/utils'

import {
  getMemeberCardInfoAPI,
  getAIDirverInfoAPI,
  getAIRoleInfoAPI,
  getAIRobotsAPI,
  getChatMessagesAPI,
  sendMessageAPI,
  checkMessageAPI,
  getEngineInfoAPI,
} from '@/service/ai'

import { mergeBaseParams } from '@/utils/requestParam'

export const useAIStore = defineStore('ai', () => {
  const curRobot = ref<IRobot>({}) // 当前选中的机器人

  const setCurRobot = (data: IRobot) => {
    curRobot.value = data
  }
  const getEngineInfo = async (params: { art_id: string; arc_car_id: string }) => {
    const constParms = {
      lang: 'zh',
    }
    const res = await getEngineInfoAPI(mergeBaseParams(params, constParms))
    return res
  }

  const getAIDirverInfo = async () => {
    const res = await getAIDirverInfoAPI(mergeBaseParams({}))
    return res
  }

  // #region 发送消息
  // 发送消息前检查消息内容是否涉及敏感内容
  const checkMessage = async ({ message }: { message: string }): Promise<boolean> => {
    const messages = JSON.stringify([{ role: 'user', content: message }])
    const res = await checkMessageAPI(mergeBaseParams({ messages }))

    const isSecure = res?.status === 'y'
    !isSecure ?? uni.showToast()
    return isSecure
  }

  const sendMessage = async ({ message }: { message: string }) => {
    const messages = JSON.stringify([{ role: 'user', content: message }])
    const constParam = {
      seq_id: getUuid(16, 16),
      is_single: 0,
      resp_mode: 'chat',
      card_name: curRobot.value.card_name,
      role_name: curRobot.value.role_name,
      card_driver_name: curRobot.value.name,
      model: '',
    }
    const res = await sendMessageAPI(mergeBaseParams({ messages }, constParam))

    return res
  }
  // #endregion

  // #region 获取历史消息
  const chatMessages = ref([])

  const getChatMessages = async () => {
    const constParams = {
      page: 1,
      pagesize: 8,
      lang: 'zh',
      send_type: 1,
      message_type: 11,
      card_name: curRobot.value.card_name,
    }
    const res = await getChatMessagesAPI(mergeBaseParams({}, constParams))
    console.log(res, 'getChatMessages')
  }
  // #endregion

  // #region 市场-今日推荐
  const recommendCardList = ref() // 今日推荐机器人列表

  // 获取当前用户的机器人列表
  const getMemeberCardInfo = async () => {
    const res = await getMemeberCardInfoAPI(mergeBaseParams({}, { lang: 'zh' }))
    if (res ?? res.result) {
      //
      memberCardList.value = res.result
    }
    return res.result
  }
  // #endregion

  // #region 市场-角色类别页面数据
  const roleList = ref() // 角色列表
  const tabAIList = ref([]) // 角色类别ai机器人列表
  const curTab = ref()
  const pageRef = ref(1) // 市场-角色类别-当前页数
  const pageSizeRef = ref(6) // 市场-角色类别-页面size
  const lastTab = ref('') // 市场-角色类别-上次选中的角色
  const updateDatalen = ref(0) // 记录最新一次加载角色类别返回的数量 => 判断是否加载完毕

  // 获取角色类别-机器人列表
  const getTypedAIRobots = async ({
    type = curTab.value,
    page = pageRef.value,
    pageSize = pageSizeRef.value,
  }: {
    type?: string
    page?: number
    pageSize?: number
  }) => {
    const constant = {
      lang: 'zh',
      type: 1,
      is_open: 1,
      is_plus_open: 9,
    }
    const res = await getAIRobotsAPI(
      mergeBaseParams({ role_name: type, page, pagesize: pageSize }, constant),
    )
    const list = res.result as []
    if (lastTab.value === curTab.value) {
      tabAIList.value.push(...list)
    } else {
      tabAIList.value = list
      lastTab.value = curTab.value
    }
    updateDatalen.value = list.length
    return list.length
  }

  // 获取角色类别
  const getAIRoleInfo = async () => {
    const constant = {
      lang: 'zh',
      type: 1,
    }
    const res = await getAIRoleInfoAPI(mergeBaseParams({}, constant))
    roleList.value = res.result
  }

  // #endregion

  // #region 个人机器人
  const memberCardList = ref() // 当前用户机器人列表

  // 获取今日推荐推荐列表
  const getRecommendAIRobots = async () => {
    const constant = {
      lang: 'zh',
      is_recommend: 1,
      page: 0,
      pagesize: 20,
    }
    const res = await getAIRobotsAPI(mergeBaseParams({}, constant))
    if (res ?? res.result) {
      recommendCardList.value = res.result
    }
  }

  // #endregion

  return {
    memberCardList,
    recommendCardList,
    roleList,
    tabAIList,
    curTab,
    pageRef,
    pageSizeRef,
    updateDatalen,
    curRobot,
    getMemeberCardInfo,
    getRecommendAIRobots,
    getAIRoleInfo,
    getTypedAIRobots,
    setCurRobot,
    getChatMessages,
    sendMessage,
    checkMessage,
    getEngineInfo,
    getAIDirverInfo,
  }
})
