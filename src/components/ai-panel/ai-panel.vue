<!--
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-06-25 16:28:17
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-02 09:57:36
 * @FilePath: /unibest/src/components/ai-panel/ai-panel.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '',
  },
}
</route>

<template>
  <view class="ai-panel">
    <wd-card custom-class="mx-0 mb-0">
      <template #title>
        <slot name="title"></slot>
      </template>

      <slot name="list"></slot>

      <!-- <template #footer>
        <wd-button size="small" plain>查看详情</wd-button>
      </template> -->
    </wd-card>
  </view>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
//
.ai-panel {
  --wot-card-padding: 0px;
  --wot-card-footer-padding: 0px;
  --wot-card-margin: 0px;
  --wot-card-radius: 0px;
  .wot-theme-dark > ::v-deep.wd-card {
    background: transparent !important;
  }
  :deep(.wd-card__title-content) {
    padding: 0;
  }
}
</style>
