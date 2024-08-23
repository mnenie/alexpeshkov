<script setup lang="ts">
defineProps<{
  project: Project
}>()

const { goToBlankPage } = useNavigation()
</script>

<template>
  <div
    class="relative rounded-lg p-5 shadow-[0_20px_40px_20px_rgb(0,220,130,0.2)]"
  >
    <div class="relative mb-6">
      <div
        class="w-full rounded-lg relative lg:h-[210px] block_proj overflow-hidden"
      >
        <img
          class="rounded-lg lg:h-[210px] w-full block_proj"
          :src="project.img"
        >
        <div
          class="absolute right-4 top-4 rounded-full w-10 h-10 bg-gray-900 flex items-center justify-center cursor-pointer"
          @click="goToBlankPage(project.github)"
        >
          <img class="w-10 h-10 object-contain" src="/projects/github.png">
        </div>
        <div
          v-if="project && project.product"
          class="absolute right-16 top-4 rounded-full w-10 h-10 bg-gray-900 flex items-center justify-center cursor-pointer"
          @click="goToBlankPage(project.product)"
        >
          <img class="w-6 h-6 object-contain" src="/projects/site.svg">
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between h-fit relative">
      <div class="flex justify-between items-center">
        <p class="text-white text-xl mb-[62px]">
          {{ project.title }}
        </p>
      </div>
    </div>
    <span class="mb-2 text-white text-lg absolute bottom-2 pr-5">{{ project.stack }}</span>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1140px) {
  .block_proj {
    height: 248px;
  }
}
@media screen and (max-width: 890px) {
  .block_proj {
    height: 200px;
  }
}
@media screen and (max-width: 768px) {
  .block_proj {
    height: 380px;
  }
}
@media screen and (max-width: 680px) {
  .block_proj {
    height: 315px;
  }
}
</style>
