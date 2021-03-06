import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import i18nextReactNative from 'i18next-react-native-language-detector'

i18n
  .use(i18nextReactNative)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        redux: {
          colorButtonTitle: 'Random Color',
          reduxButtonTitle: 'Redux Example',
          steemButtonTitle: 'Steem Example',
          deButtonTitle: 'German',
          enButtonTitle: 'English'
        },
        common: {
          labels: {
            username: 'Username'
          },
          actions: {
            back: 'Back'
          }
        },
      },
      de: {
        redux: {
          colorButtonTitle: 'Zufallsfarbe',
          reduxButtonTitle: 'Redux Beispiel',
          steemButtonTitle: 'Steem Beispiel',
          deButtonTitle: 'Deutsch',
          enButtonTitle: 'Englisch'
        },
        common: {
          labels: {
            username: 'Benutzername'
          },
          actions: {
            back: 'Zurück'
          }
        }
      }
    },

    ns: ['common'],
    defaultNS: 'common',

    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  })

export default i18n
