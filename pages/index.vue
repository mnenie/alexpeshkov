<script setup lang="ts">
import type { Container } from 'tsparticles-engine'
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#fff"
    },
    links: {
      color: "#fff",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}
const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(), 0)
}
</script>

<template>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    @load="onLoad"
  >
  </NuxtParticles>
  <div class="flex flex-col h-full w-full pt-40">
    <AboutMainDescription v-motion-pop-visible />
    <StackTechnologies v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, scale: 1 }"
      :delay="200" />
  </div>
</template>
