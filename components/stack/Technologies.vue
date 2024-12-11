<script setup lang="ts">
import TechnologyCard from '../ui/TechnologyCard.vue'
import { stack } from '~/data/stack'
</script>

<template>
  <div id="stack" class="flex flex-col container items-center mb-32 sm:mb-44 w-full">
    <h2 class="text-5xl text-white mb-6">
      {{ $t('stack') }}
    </h2>
    <div class="flex flex-wrap justify-center gap-3 w-full sm:w-[80%]">
      <TechnologyCard
        v-for="t, idx in stack"
        :key="idx"
        :technology="t.technology"
        :icon="t.icon"
      />
    </div>
  </div>
</template>
