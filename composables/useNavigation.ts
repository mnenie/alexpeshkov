import { useWindowSize } from '@vueuse/core'
import { nextTick } from 'vue'
import type { Link } from '~/types'

export default function useNavigation() {
  const { width } = useWindowSize()

  const zoomFactor = computed(() => width.value <= 460 ? 0.76 : 1)

  const scrollToBlock = async (id: Link['section']) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      const middle = (block.offsetTop + block.offsetHeight / 2 - window.innerHeight / 2) * zoomFactor.value
      window.scrollTo({ top: middle, behavior: 'smooth' })
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
