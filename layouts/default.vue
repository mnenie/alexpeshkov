<script setup lang="ts">
import ParticlesBg from '~/components/ui/ParticlesBg.vue'
</script>

<template>
  <div class="relative w-full h-full">
    <LayoutHeader />
    <ParticlesBg
      class="fixed inset-0"
      color="#FFF"
      refresh
    />
    <slot />
  </div>
</template>
