import path from 'path'
import { readDefaultCodeTranslationMessages } from '@docusaurus/theme-translations'
import type { DocusaurusContext, Plugin } from '@docusaurus/types'

export default function mindmap(context: DocusaurusContext): Plugin {
  const {
    i18n: { currentLocale },
  } = context

  return {
    name: 'docusaurus-plugin-mindmap',

    getThemePath() {
      return path.resolve(__dirname, './theme')
    },

    getDefaultCodeTranslationMessages() {
      return readDefaultCodeTranslationMessages({
        locale: currentLocale,
        name: 'plugin-mindmap',
      })
    },
  }
}
