<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <div :id="id" class="flex flex-col items-center justify-center container mb-32">
    <h2 class="text-5xl text-white mb-6">
      <slot name="title" />
    </h2>
    <p class="text-2xl text-white mb-10 text-center max-w-5xl">
      <slot name="description" />
    </p>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 w-full h-full xl:gap-20 lg:gap-2"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1140px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
