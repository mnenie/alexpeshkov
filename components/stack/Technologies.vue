<script setup lang="ts">
import {stack} from '~/mocks/stack.mock'
</script>

<template>
  <div class="flex flex-col container items-center mb-40 relative">
    <h2 class="text-5xl text-white mb-4">My Stack</h2>
    <div class="flex space-x-1 items-center flex-wrap justify-center max-w-7xl">
      <NuxtImg class="w-20 h-20" src="/stack/nuxt.png" />
      <div class="flex space-x-4 items-center flex-wrap justify-center">
        <NuxtImg class="w-12 h-12" src="/stack/vue.svg" />
        <NuxtImg class="w-12 h-12" src="/stack/typescript.png" />
        <NuxtImg class="w-12 h-12" src="/stack/javascript.png" />
      </div>
      <div class="flex space-x-2 items-center flex-wrap justify-center">
        <div v-for="i in stack" :key="i.id">
          <NuxtImg class="w-14 h-14" :src="i.url" :alt="i.name" />
        </div>
      </div>
    </div>
  </div>
</template>