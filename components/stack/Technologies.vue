<script setup lang="ts">
// TODO: class with custom w and h cant render hmm
const stack: Stack[] = [
  { id: 4, name: 'pinia', url: '/stack/pinia.svg', class: 'w-14 h-14' },
  { id: 5, name: 'vuex', url: '/stack/vuex.png', class: 'w-14 h-14' },
  {
    id: 6,
    name: 'vue router',
    url: '/stack/router.png',
    class: 'w-[58px] h-[58px]',
  },
  { id: 8, name: 'sass', url: '/stack/sass.svg', class: 'w-14 h-14' },
  { id: 9, name: 'tailwind', url: '/stack/tailwind.svg', class: 'w-14 h-14' },
  { id: 10, name: 'html', url: '/stack/html.svg', class: 'w-14 h-14' },
  { id: 11, name: 'css', url: '/stack/css.svg', class: 'w-14 h-14' },
  { id: 12, name: 'vueuse', url: '/stack/vueuse.png', class: 'w-14 h-14' },
  {
    id: 13,
    name: 'vuequery',
    url: '/stack/vue-query.png',
    class: 'w-[55px] h-14',
  },
  {
    id: 13,
    name: 'jest',
    url: '/stack/jest.jpg',
    class: 'w-[40px] h-12',
  },
  { id: 14, name: 'vitest', url: '/stack/vitest.png', class: 'w-[48px] h-14' },
  {
    id: 15,
    name: 'storybook',
    url: '/stack/storybook.svg',
    class: 'w-12 h-14',
  },
  { id: 19, name: 'git', url: '/stack/git.svg', class: 'w-12 h-14' },
  { id: 20, name: 'vite', url: '/stack/vite.svg', class: 'w-[46px] h-[44px]' },
  {
    id: 21,
    name: 'webpack',
    url: '/stack/webpack.svg',
    class: 'w-[46px] h-14',
  },
  {
    id: 22,
    name: 'husky',
    url: '/stack/husky.png',
    class: 'w-[42px] h-[44px]',
  },
  {
    id: 23,
    name: 'prettier',
    url: '/stack/prettier.png',
    class: 'w-[38px] h-[40px]',
  },
  {
    id: 24,
    name: 'elint',
    url: '/stack/eslint.png',
    class: 'w-[44px] h-[42px]',
  },
]
</script>

<template>
  <div id="stack" class="flex flex-col container items-center mb-44 w-full">
    <h2 class="text-5xl text-white mb-4">
      {{ $t('stack') }}
    </h2>
    <div class="flex space-x-1 items-center flex-wrap justify-center max-w-7xl">
      <img class="w-20 h-20" src="/stack/nuxt.svg">
      <div class="flex space-x-4 items-center flex-wrap justify-center">
        <img class="w-12 h-12" src="/stack/vue.svg">
        <img class="w-12 h-12" src="/stack/typescript.svg">
        <img class="w-12 h-12" src="/stack/javascript.svg">
      </div>
      <div class="flex space-x-2 items-center flex-wrap justify-center">
        <div v-for="i in stack" :key="i.id">
          <img :class="i.class" :src="i.url" :alt="i.name">
        </div>
      </div>
    </div>
  </div>
</template>
