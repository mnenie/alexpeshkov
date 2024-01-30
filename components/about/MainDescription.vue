<script setup lang="ts">
import VueWriter from 'vue-writer'
const arr = ref([
  "I'm a frontend developer", "I like programming", "I enjoy to work with Vue & Nuxt"
])
</script>

<template>
  <div class="w-full mb-40 container">
    <div class="flex justify-center flex-col-reverse items-center">
      <div class="flex flex-col items-center">
        <h1 class="text-7xl text-white mb-4">Hey, I'm Alex</h1>
        <VueWriter class="text-2xl text-[rgb(0,220,130)] mb-2" :array="arr" />
        <span class="text-lg text-white text-center w-3/4">I am a frontend developer. I specialize in creating modern and responsive
          user interfaces using best development practices.</span>
        <AboutNetworks />
      </div>
      <AboutProfile class="mb-8" />
    </div>
  </div>
</template>