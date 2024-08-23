<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { links } from '../../data/links'

const breakpoints = useBreakpoints({
  ...breakpointsTailwind,
  sm: 760,
})

const { tm, t, rt } = useI18n()
const { scrollToBlock } = useNavigation()

const localeLinks = computed(() => {
  const localeArr = tm('header.links') as string[]
  return links.map((link, index) => ({
    ...link,
    name: rt(localeArr[index]),
  }))
})

const name = computed(() => {
  const isSmaller = breakpoints.smaller('sm')
  return isSmaller.value
    ? t('header.name').split(' ').map(w => w[0]).join('')
    : t('header.name')
})
</script>

<template>
  <header
    class="fixed w-full select-none bg-[#111827]/75 backdrop-blur -mb-px top-0 z-50 lg:mb-0 border-0"
  >
    <div
      class="md:container pl-3 pr-3 flex h-14 max-w-screen-2xl items-center justify-between"
    >
      <div class="flex items-center">
        <span class="text-[20px] font-bold text-zinc-100">{{ name }}</span>
        <div class="h-4 w-px bg-zinc-600 ml-3 mr-3 sm:ml-4 sm:mr-4" />
        <I18nLanguageSwitcher />
      </div>
      <div class="flex items-center space-x-3 md:space-x-6 lg:space-x-10">
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
