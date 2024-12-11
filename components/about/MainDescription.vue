<script setup lang="ts">
// @ts-expect-error none types in vue-writer
import VueWriter from 'vue-writer'
import TechnologyCard from '../ui/TechnologyCard.vue'

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
          {{ t('about.hello') }}
        </h1>
        <VueWriter class="text-2xl text-center text-[rgb(0,220,130)] mb-2" :array="messages" />
        <div class="text-lg text-white text-center w-full mb-2">
          <i18n-t keypath="about.description">
            <template #unaui>
              <TechnologyCard
                icon="/about/unaui.png"
                technology="Una UI"
                url="https://unaui.com/"
              />
            </template>
          </i18n-t>
          <div>
            <i18n-t keypath="about.contribution">
              <template #vue>
                <TechnologyCard
                  icon="/stack/vue.svg"
                  technology="Vue"
                  url="https://vuejs.org/"
                />
              </template>
              <template #nuxt>
                <TechnologyCard
                  icon="/stack/nuxt.svg"
                  technology="Nuxt"
                  url="https://nuxt.com/"
                />
              </template>
            </i18n-t>
          </div>
        </div>
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
