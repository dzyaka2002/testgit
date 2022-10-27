import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { ru } from './locale/ru'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    resources: { ru }
  })

export default i18n