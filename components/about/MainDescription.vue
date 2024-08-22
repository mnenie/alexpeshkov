<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
// @ts-expect-error none types in vue-writer
import VueWriter from 'vue-writer'

const arr = shallowRef([
  'I\'m a frontend developer',
  'I like programming',
  'I enjoy to work with Vue & Nuxt',
])

const { width } = useWindowSize()
</script>

<template>
  <div id="about" class="w-full container mb-44 relative">
    <div class="flex justify-center flex-col-reverse items-center">
      <div class="flex flex-col items-center">
        <h1 class="text-7xl text-white mb-4">
          Hey, I'm Alex
        </h1>
        <VueWriter class="text-2xl text-[rgb(0,220,130)] mb-2" :array="arr" />
        <span class="text-lg text-white text-center w-3/4">
          I am a frontend developer. I specialize in creating modern and
          responsive user interfaces. Contributor of
          <a
            class="hover:underline hover:underline-offset-4"
            href="https://github.com/vuejs"
          >@vuejs</a>
          💚 community.
        </span>
        <AboutNetworks />
      </div>
      <AboutProfile class="mb-8" />
    </div>
    <div v-show="width >= 1300">
      <img class="absolute w-52 top-36 left-32" src="/about/me.png">
      <img class="absolute w-72 top-40 left-56" src="/about/arrow.png">
    </div>
  </div>
</template>
