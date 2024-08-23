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
  <WrappersSection>
    <template #title>
      <div id="projects">
        {{ t('projects.title') }}
      </div>
    </template>
    <template #description>
      {{ t('projects.description') }}
    </template>
    <ProjectsOnePart
      v-for="project in localeProjects"
      :key="project.id"
      :project
    />
  </WrappersSection>
</template>
