<script setup lang="ts">
const networks = ref<Network[]>([
  {id: 1, name: 'GitHub', img: '/networks/github.svg', url: 'https://github.com/mnenie'},
  {id: 2, name: 'Telegram', img: '/networks/telegram.png', url: 'https://t.me/youngjuicycashrussia'},
  {id: 3, name: 'VK', img: '/networks/vk.png', url: 'https://vk.com/mnenie_mozhno'}
])

const {goToBlankPage} = useBlank()
</script>

<template>
  <div class="flex justify-center space-x-4 items-center mt-8">
    <UIButton v-for="network in networks" :key="network.id" @click="goToBlankPage(network.url)" class="flex items-center" variant="outline">
      <NuxtImg :src="network.img" class="w-6 h-6 mr-2" />
      <span class="text-base">{{ network.name }}</span>
    </UIButton >
  </div>
</template>