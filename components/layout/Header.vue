<script setup lang="ts">
import { links } from '../../data/links'

const { scrollToBlock } = useNavigation()
</script>

<template>
  <header
    class="fixed w-full bg-[#111827]/75 backdrop-blur -mb-px top-0 z-50 lg:mb-0 border-0"
  >
    <div
      class="container flex h-14 max-w-screen-2xl items-center justify-between"
    >
      <span class="text-[20px] font-bold text-zinc-100">Alex Peshkov </span>
      <div class="flex items-center space-x-10">
        <span
          v-for="link in links"
          :key="link.id"
          class="cursor-pointer text-base font-medium transition-colors text-zinc-200/80 hover:text-zinc-200"
          @click="scrollToBlock(link.section)"
        >
          {{ link.name }}
        </span>
      </div>
    </div>
  </header>
</template>
