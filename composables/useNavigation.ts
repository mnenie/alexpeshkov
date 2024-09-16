import { useLocalStorage, useWindowSize } from '@vueuse/core'
import { computed, nextTick } from 'vue'

export default function useNavigation() {
  const activeBlock = useLocalStorage<string | null>('about', null)
  const { width } = useWindowSize()

  const offset = computed(() => {
    return (block: HTMLElement) => {
      return width.value >= 480 ? block.offsetHeight : 0
    }
  })

  const scrollToBlock = async (id: string) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      let adjustment = 1
      if (width.value <= 480) {
        // TODO
        adjustment = id === 'contributions' ? 0.98 : id === 'talks' ? 1 : 0.9
      }
      activeBlock.value = id
      const top = block.getBoundingClientRect().top + window.scrollY * adjustment - offset.value(block)
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const goToBlankPage = (url: string) => {
    window.open(url, '_blank')
  }

  return {
    activeBlock,
    goToBlankPage,
    scrollToBlock,
  }
}
