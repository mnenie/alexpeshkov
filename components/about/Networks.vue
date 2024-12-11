<script setup lang="ts">
import type { Network } from '~/types'

const networks = [
  { name: 'GitHub', img: '/networks/github.svg', url: 'https://github.com/mnenie' },
  { name: 'Telegram', img: '/networks/telegram.png', url: 'https://t.me/youngjuicycashrussia' },
  { name: 'Bluesky', img: '/networks/bluesky.png', url: 'https://bsky.app/profile/alexpeshkov.bsky.social' },
] satisfies Network[]

const { goToBlankPage } = useNavigation()
</script>

<template>
  <div class="flex justify-center space-x-4 items-center mt-8">
    <UIButton
      v-for="network, idx in networks"
      :key="idx"
      class="flex items-center"
      variant="outline"
      size="sm"
      @click="goToBlankPage(network.url)"
    >
      <img :src="network.img" class="w-5 h-5 mr-2">
      <span class="text-base">{{ network.name }}</span>
    </UIButton>
  </div>
</template>
