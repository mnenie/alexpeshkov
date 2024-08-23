<script setup lang="ts">
// @ts-expect-error none types in vue-writer
import VueWriter from 'vue-writer'

const { tm, rt, t, locale } = useI18n()

const messages = computed(() => {
  const locales = tm('about.messages') as string[]
  return locales.map(rt)
})
</script>

<template>
  <div id="about" class="w-full container mb-[150px] sm:mb-44 relative">
    <div class="flex justify-center flex-col-reverse items-center">
      <div class="flex flex-col items-center">
        <h1 class="text-7xl text-white mb-4 text-center">
          {{ $t('about.hello') }}
        </h1>
        <VueWriter class="text-2xl text-center text-[rgb(0,220,130)] mb-2" :array="messages" />
        <span class="text-lg text-white text-center w-full sm:w-2/3">
          {{ t('about.description') }}
          <a
            class="hover:underline hover:underline-offset-4"
            href="https://github.com/vuejs"
          >@vuejs</a>
          💚 {{ t('about.community') }}.
        </span>
        <AboutNetworks />
      </div>
      <AboutProfile class="mb-8" />
    </div>
    <div class="imgs">
      <NuxtImg v-if="locale === 'en'" class="absolute w-52 top-36 left-32" src="/about/me.png" />
      <NuxtImg v-else class="absolute w-52 top-36 left-32" src="/about/me-ru.png" />
      <NuxtImg class="absolute w-72 top-40 left-56" src="/about/arrow.png" />
    </div>
  </div>
</template>

<style scoped>
/* TODO: with sync watcher */
@media screen and (max-width: 1300px) {
  .imgs{
    display: none
  }
}
</style>
