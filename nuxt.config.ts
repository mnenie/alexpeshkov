import i18nConfig from './i18n.config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    'nuxt-particles',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
  ],

  i18n: {
    ...i18nConfig,
  },

  plugins: [
    '~/plugins/scrollbar.client.ts',
  ],

  particles: {
    mode: 'full',
    lazy: true,
  },

  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui',
  },

  compatibilityDate: '2024-08-30',
})
