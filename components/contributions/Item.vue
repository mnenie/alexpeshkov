<script setup lang="ts">
import type { Contribution } from '~/types'

defineProps<{
  contributions: Contribution[]
}>()
</script>

<template>
  <WrappersCard
    v-for="item, idx in contributions"
    :key="idx"
    :item
  />
</template>
