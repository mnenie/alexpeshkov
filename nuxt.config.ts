export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    ['@nuxtjs/google-fonts', { families: { 'Lilita One': true } }],
    '@nuxt/image',
    'nuxt-particles',
  ],

  particles: {
    mode: 'full',
    lazy: true,
  },

  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui',
  },
})
