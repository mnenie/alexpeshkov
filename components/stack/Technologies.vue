<script setup lang="ts">
import { stack } from '~/data/stack'
</script>

<template>
  <div id="stack" class="flex flex-col container items-center mb-32 sm:mb-44 w-full">
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
