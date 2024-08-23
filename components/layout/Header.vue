<script setup lang="ts">
import { links } from '../../data/links'

const { tm, t, rt } = useI18n()

const localeLinks = computed(() => {
  const localeArr = tm('header.links') as string[]
  return links.map((link, index) => ({
    ...link,
    name: rt(localeArr[index]),
  }))
})

const { scrollToBlock } = useNavigation()
</script>

<template>
  <header
    class="fixed w-full bg-[#111827]/75 backdrop-blur -mb-px top-0 z-50 lg:mb-0 border-0"
  >
    <div
      class="md:container pl-4 pr-4 flex h-14 max-w-screen-2xl items-center justify-between"
    >
      <div class="flex items-center">
        <span class="text-[20px] font-bold text-zinc-100">{{ t('header.name') }}</span>
        <div class="h-4 w-px bg-zinc-600 ml-4 mr-4" />
        <I18nLanguageSwitcher />
      </div>
      <div class="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
        <span
          v-for="link in localeLinks"
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
