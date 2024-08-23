<script setup lang="ts">
import { contributions } from '~/data/contributions'
</script>

<template>
  <WrappersSection id="contributions" class="mb-36">
    <template #title>
      {{ $t('сontributions.title') }}
    </template>
    <template #description>
      {{ $t('сontributions.description') }}
    </template>
    <ContributionsItem :contributions />
  </WrappersSection>
</template>
