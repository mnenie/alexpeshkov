<script setup lang="ts">
defineProps<{
  contributions: Contribution[]
}>()

const { goToBlankPage } = useNavigation()
</script>

<template>
  <div
    v-for="item in contributions"
    :key="item.id"
    class="relative rounded-lg p-5 shadow-[0_20px_40px_20px_rgb(0,220,130,0.2)]"
  >
    <div class="relative">
      <div
        class="w-full rounded-lg relative lg:h-[210px] block_proj overflow-hidden"
      >
        <img
          class="rounded-lg lg:h-[210px] w-full block_proj"
          :src="item.img"
        >
        <div
          v-if="item && item.site"
          class="absolute right-4 top-4 rounded-full w-10 h-10 bg-gray-900 flex items-center justify-center cursor-pointer"
          @click="goToBlankPage(item.site)"
        >
          <img class="w-6 h-6 object-contain" src="/projects/site.svg">
        </div>
      </div>
    </div>
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
