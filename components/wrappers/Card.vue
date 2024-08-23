<script setup lang="ts">
defineProps<{
  item: CardWithoutDescription
}>()

const { goToBlankPage } = useNavigation()
</script>

<template>
  <div
    class="relative rounded-lg p-5 shadow-[0_20px_40px_20px_rgb(0,220,130,0.2)]"
  >
    <div class="relative">
      <div
        class="w-full rounded-lg relative lg:h-[210px] card overflow-hidden"
      >
        <img
          class="rounded-lg lg:h-[210px] w-full card"
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
  .card {
    height: 248px;
  }
}
@media screen and (max-width: 890px) {
  .card {
    height: 200px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    height: 380px;
  }
}
@media screen and (max-width: 680px) {
  .card {
    height: 315px;
  }
}
@media screen and (max-width: 560px) {
  .card {
    height: 283px;
  }
}
@media screen and (max-width: 490px) {
  .card {
    height: 252px;
  }
}
@media screen and (max-width: 420px) {
  .card {
    height: 238px;
  }
}
</style>
