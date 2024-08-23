import { useWindowSize } from '@vueuse/core'

export default function useNavigation() {
  const { width } = useWindowSize()

  const offset = computed(() => {
    return (block: HTMLElement) => {
      return width.value >= 480 ? block.offsetHeight / 2 : 0
    }
  })

  const scrollToBlock = async (id: string) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      const currentY = window.scrollY
      const blockTop = block.getBoundingClientRect().top + window.scrollY

      const isBelowBlock = currentY > blockTop

      let zoom: number = 1
      if (width.value <= 480) {
        if (isBelowBlock) {
          zoom = 0.79
        }
        else {
          zoom = id === 'contributions' ? 0.75 : 0.7
        }
      }
      const top = (block.getBoundingClientRect().top * zoom + window.scrollY) - offset.value(block)
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
