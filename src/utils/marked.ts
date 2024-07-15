/*
 * @Author: lynn 2871433485@qq.com
 * @Date: 2024-07-03 15:45:22
 * @LastEditors: lynn 2871433485@qq.com
 * @LastEditTime: 2024-07-04 22:16:05
 * @FilePath: /unibest/src/utils/marked.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

const highlight = markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang, info) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
})

// 添加代码块顶栏，实现快捷复制，显示语言等功能
const addCoderPanHeaderExtentions = () => {
  const renderer = {
    code(text, lang, val): string | false {
      return `
      <div class="code-pan">
      <div
        class="code-pan-header"
        style="
          border-radius: 5px 5px 0 0;
          background-color: #757d7d;
          display: flex;
          justify-content: space-between;
          padding: 6px 10px;
        "
      >
        <span>${lang}</span>
        <span class="copy-btn">复制</span>
      </div>
      <div
        style="
          padding: 10px;
          overflow: auto;
        "
      >
        <pre>
          <code>${text.trim()}</code>
        </pre>
      </div>
    </div>
      `
    },
  }
  return { renderer }
}

export const marked = new Marked().use(highlight).use(addCoderPanHeaderExtentions())
