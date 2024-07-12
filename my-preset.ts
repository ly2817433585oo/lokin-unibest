import { Preset, definePreset } from 'unocss'

export default definePreset((options = {}) => {
  return {
    name: 'my-preset',
    theme: {
      colors: {
        'light-bg': '#fff',
        'dark-bg': ' #181818' /* #171a20 */,

        'light-primary': '#5d5cd6',
        'dark-primary': '#ea3d5c',

        'dark-container': '#242424' /* '#2c2e35' */,
        'light-container': '#f7f7f7',

        // font
        'dark-fg': '#fff',
        'light-fg': '#000',
        'light-fg-subtle': '#8d9696',
        'dark-fg-subtle': '#737d7d',

        // border
        'light-border-base': '#e4e7e7',
        'dark-border-base': '#313535',
      },
    },
    shortcuts: [
      // background
      ['bg-app', 'bg-light-bg dark:bg-dark-bg'],
      ['bg-base', 'bg-light-primary dark:bg-dark-primary'],
      ['bg-container-base', 'bg-light-container dark:bg-dark-container'], // AI聊天框，AI机器人框

      // font
      ['color-base', 'color-light-fg dark:color-dark-fg'],
      ['color-subtle', 'color-light-fg-subtle dark:color-dark-fg-subtle'],

      // border
      ['border-base', 'b-1 border-solid border-light-border-base dark:border-dark-border-base'],
      // ['bg-theme-base', 'color-#000 dark:color-#fff'],
      ['shadow-base-md', 'shadow-md dark:shadow-dark-container/60  shadow-light-container/80'],
      [
        'shadow-focus',
        'focus:shadow-[0_0_0_2px_#f7f7f7,0_0_0_4px_#5d5cd6] dark:focus:shadow-[0_0_0_2px_#181818,0_0_0_4px_#5d5cd6] focus-within:shadow-[0_0_0_2px_#f7f7f7,0_0_0_4px_#5d5cd6] dark:focus-within:shadow-[0_0_0_2px_#181818,0_0_0_4px_#5d5cd6]',
      ],
    ],
    // it supports most of the configuration you could have in the root config
  }
})
