<script setup lang="ts">
import { projects } from '~/data/projects'

const { tm, rt, t } = useI18n()

const localeProjects = computed(() => {
  const arr = tm('projects.items') as { title: string }[]
  return projects.map((project, index) => ({
    ...project,
    title: rt(arr[index].title),
  }))
})
</script>

<template>
  <div class="flex flex-col items-center justify-center container pb-32">
    <h2 id="projects" class="text-5xl text-white mb-6">
      {{ t('projects.title') }}
    </h2>
    <p class="text-2xl text-white mb-10 text-center max-w-5xl">
      {{ t('projects.description') }}
    </p>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 w-full h-full xl:gap-20 lg:gap-2"
    >
      <ProjectsOnePart :projects="localeProjects" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1140px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
