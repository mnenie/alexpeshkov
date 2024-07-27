<script setup lang="ts">
import { contributions } from "~/mocks/contributions.mock";
</script>

<template>
  <div class="flex flex-col items-center justify-center container pb-20">
    <h2 class="text-5xl text-white mb-6">Contributions</h2>
    <p class="text-2xl text-white mb-10 text-center max-w-5xl">
      This section is dedicated to my contributions to the community Vue.js and
      its ecosystem. Everything you can see has been officially released or
      in dev mode. It is used by many people all over the world!
    </p>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 w-full h-full xl:gap-20 lg:gap-2"
    >
      <ContributionsItem :contributions="contributions" />
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
