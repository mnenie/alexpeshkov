<script setup lang="ts">
import { talks } from '~/data/talks'
</script>

<template>
  <WrappersSection id="talks" class="!mb-14">
    <template #title>
      {{ $t('talks.title') }}
    </template>
    <template #description>
      {{ $t('talks.description') }}
    </template>
    <TalksCardItem :talks />
  </WrappersSection>
</template>
