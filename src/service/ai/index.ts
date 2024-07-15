/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 14:16:34
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-09 17:19:21
 * @FilePath: /unibest/src/service/ai/index.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { http } from '@/utils/http'

enum api {
  memberCard = '/h5/api/web/user/login/query_membercard_info', // 用于请求用户首页ai机器人列表
  driverInfo = '/h5/api/client/query_ai_driver_info', // ai 模型列表 用于配置或创建ai机器人
  roleInfo = '/h5/api/client/query_ai_role_info', // ai 角色列表 用于配置或创建ai机器人
  aiRobots = '/h5/api/client/query_ai_robots', // 获取市场机器人列表
  chatMessages = '/h5/api/client/get_chat_messages', // 获取聊天记录
  sendMessage = '/h5/api/jd_query/chatgpt_api', // 发送消息
  checkMessage = '/h5/api/jd_query/chatcheck_api', // 检查消息是否有违规内容
  engineInfo = '/h5/api/client/query_art', // 获取驱动说明
}

export const getMemeberCardInfoAPI = async (params: any) => {
  return http.postFormData(api.memberCard, params)
}

export const getAIDirverInfoAPI = async (params: any) => {
  return http.postFormData(api.driverInfo, params)
}

export const getAIRoleInfoAPI = async (params: any) => {
  return http.postFormData(api.roleInfo, params)
}

export const getAIRobotsAPI = async (params: any) => {
  return http.postFormData(api.aiRobots, params)
}

export const getChatMessagesAPI = async (params: any) => {
  return http.postFormData(api.chatMessages, params)
}

export const sendMessageAPI = async (params: any) => {
  return http.postFormData<{ message_id: number; ret_content: string; seq_id: string }>(
    api.sendMessage,
    params,
  )
}

export const checkMessageAPI = async (params: any) => {
  return http.postFormData<{ content: string }>(api.checkMessage, params)
}

export const getEngineInfoAPI = async (params: any) => {
  return http.postFormData<{ content: string }>(api.engineInfo, params)
}
