<script setup lang="ts">
import type { Talk } from '~/types'

defineProps<{
  talks: Talk[]
}>()
</script>

<template>
  <WrappersCard
    v-for="item, idx in talks"
    :key="idx"
    :item
  />
</template>
