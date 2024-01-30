export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    ["@nuxtjs/google-fonts", { families: { "Lilita One": true } }],
    "@nuxt/image",
    '@vueuse/motion/nuxt',
    'nuxt-particles'
  ],
  particles: {
    mode: 'full',
    lazy: true
  },
  shadcn: {
    prefix: "UI",
    componentDir: "./components/ui",
  }
});
