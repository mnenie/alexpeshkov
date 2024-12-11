<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = withDefaults(
  defineProps<{
    technology: string
    icon: string
    url?: string
    color?: 'default' | 'yellow'
  }>(),
  {
    color: 'default',
  },
)

const colorMap: Record<string, string> = {
  default: 'bg-[#8882] text-white/90',
}

const classes = twMerge(
  'inline-flex items-center gap-1.5 px-1 py-px leading-[100%] translate-y-0.5 rounded-md ml-1',
  colorMap[props.color],
  props.url ? 'cursor-pointer' : 'text-2xl px-4',
)
</script>

<template>
  <component :is="url ? 'a' : 'div'" :href="url" target="_blank" :class="classes">
    <img :src="icon" :alt="technology" :class="[url ? 'w-4 h-4' : 'w-6 h-6']">
    {{ technology }}
  </component>
</template>
