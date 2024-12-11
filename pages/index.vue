<script setup lang="ts">
useSeoMeta({
  title: 'Alex Peshkov | Portfolio',
  ogTitle: 'Alex Peshkov | Portfolio',
  description: 'My portfolio with my works and info.',
  ogDescription: 'My portfolio with my works and info.',
})
</script>

<template>
  <div class="flex flex-col h-full w-full pt-40 relative">
    <AboutMainDescription />
    <StackTechnologies />
    <ProjectsContent />
    <ContributionsWorks />
    <TalksSection />
  </div>
</template>
