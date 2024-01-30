<script setup lang="ts">
const networks = ref([
  {id: 1, name: 'GitHub', img: '/networks/github.svg'},
  {id: 2, name: 'Telegram', img: '/networks/telegram.svg'},
  {id: 3, name: 'VK', img: '/networks/vk.svg'}
])
</script>

<template>
  <div class="flex justify-center space-x-4 items-center mt-8">
    <UIButton v-for="network in networks" :key="network.id" class="flex items-center" variant="outline">
      <NuxtImg :src="network.img" class="w-6 h-6 mr-2" />
      <span class="text-base">{{ network.name }}</span>
    </UIButton >
  </div>
</template>