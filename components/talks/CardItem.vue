<script setup lang="ts">
defineProps<{
  talks: Talk[]
}>()
</script>

<template>
  <WrappersCard
    v-for="item in talks"
    :key="item.id"
    :item
  />
</template>
