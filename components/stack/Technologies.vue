<script setup lang="ts">
const items = ref([
  { id: 4, name: 'pinia', url: '/stack/pinia.png' },
  { id: 5, name: 'vuex', url: '/stack/vuex.png' },
  { id: 6, name: 'firebase', url: '/stack/firebase.png' },
  { id: 7, name: 'appwrite', url: '/stack/appwrite.svg' },
  { id: 8, name: 'sass', url: '/stack/sass.svg' },
  { id: 9, name: 'tailwind', url: '/stack/tailwind.svg' },
  { id: 10, name: 'html', url: '/stack/html.svg' },
  { id: 11, name: 'css', url: '/stack/css.svg' },
  { id: 12, name: 'vueuse', url: '/stack/vueuse.png' },
  { id: 13, name: 'radix', url: '/stack/radix.svg' },
  { id: 14, name: 'vuetify', url: '/stack/vuetify.svg' },
  { id: 15, name: 'shadcn', url: '/stack/shadcn.png' },
  { id: 16, name: 'primevue', url: '/stack/primevue.png' },
  { id: 17, name: 'bootstrap', url: '/stack/bootstrap.svg' },
  { id: 18, name: 'git', url: '/stack/git.svg' },
  { id: 19, name: 'vite', url: '/stack/vite.svg' },
  { id: 20, name: 'webpack', url: '/stack/webpack.svg' },
  { id: 21, name: 'npm', url: '/stack/npm.svg' },
  { id: 22, name: 'yarn', url: '/stack/yarn.svg' },
])
</script>

<template>
  <div class="flex flex-col container items-center">
    <h1 class="text-5xl text-white mb-4">My Stack</h1>
    <div class="flex space-x-2 items-center flex-wrap justify-center">
      <NuxtImg class="w-20 h-20" src="/stack/nuxt.png" />
      <div class="flex space-x-4 items-center flex-wrap justify-center">
        <NuxtImg class="w-12 h-12" src="/stack/vue.svg" />
        <NuxtImg class="w-12 h-12" src="/stack/typescript.png" />
        <NuxtImg class="w-12 h-12" src="/stack/javascript.png" />
      </div>
      <div class="flex space-x-2 items-center flex-wrap justify-center">
        <div v-for="i in items" :key="i.id">
          <NuxtImg class="w-14 h-14" :src="i.url" :alt="i.name" />
        </div>
      </div>
    </div>
  </div>
</template>