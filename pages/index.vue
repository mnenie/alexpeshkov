<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

useSeoMeta({
  title: 'Alex Peshkov | Portfolio',
  ogTitle: 'Alex Peshkov | Portfolio',
  description: 'My portfolio with my works and info.',
  ogDescription: 'My portfolio with my works and info.',
})

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: '#a1a1aa',
    },
    links: {
      color: '#e4e4e7',
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 30,
    },
  },
}
async function onLoad(container: Container) {
  container.pause()
  setTimeout(() => container.play(), 0)
}
</script>

<template>
  <div class="flex flex-col h-full w-full pt-40 relative">
    <AboutMainDescription />
    <StackTechnologies />
    <ProjectsContent />
    <ContributionsWorks />
    <TalksSection />
  </div>
  <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />
</template>
