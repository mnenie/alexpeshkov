<script setup lang="ts">
import { Globe } from 'lucide-vue-next'

const { changeLocale, activeLocale, availableLocales } = useLanguage()
</script>

<template>
  <UIDropdownMenu :modal="false">
    <UIDropdownMenuTrigger>
      <div
        class="flex items-center gap-1.5 cursor-pointer text-zinc-200/80 hover:text-zinc-200 transition-colors"
      >
        <Globe
          :size="15"
        />
        {{ activeLocale }}
      </div>
    </UIDropdownMenuTrigger>
    <UIDropdownMenuContent>
      <UIDropdownMenuItem
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="changeLocale(locale.code)"
      >
        {{ locale.name }}
      </UIDropdownMenuItem>
    </UIDropdownMenuContent>
  </UIDropdownMenu>
</template>
