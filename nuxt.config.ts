import i18nConfig from './i18n.config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    'nuxt-particles',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxthub/core',
  ],

  hub: {
    kv: true,
    database: true,
    cache: true,
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    ...i18nConfig,
  },

  particles: {
    mode: 'full',
    lazy: true,
  },

  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui',
  },

  compatibilityDate: '2024-10-10',
})
