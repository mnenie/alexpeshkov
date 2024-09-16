import { useWindowSize } from '@vueuse/core'
import { computed, nextTick } from 'vue'

export default function useNavigation() {
  const { width } = useWindowSize()

  const offset = computed(() => {
    return (block: HTMLElement) => {
      return width.value >= 480 ? block.offsetHeight / 2 : 0
    }
  })

  const scrollToBlock = async (id: Link['section']) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      const adjustment = ref(1)
      if (width.value <= 480) {
        // TODO
        if (id === 'contributions' || id === 'projects') {
          adjustment.value = 0.98
        }
        else if (id === 'talks') {
          adjustment.value = 1
        }
        else {
          adjustment.value = 0.96
        }
      }
      const top = block.getBoundingClientRect().top + window.scrollY * adjustment.value - offset.value(block)
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const goToBlankPage = (url: string) => {
    window.open(url, '_blank')
  }

  return {
    goToBlankPage,
    scrollToBlock,
  }
}
