export default function useNavigation() {
  // TODO: nextTick
  const scrollToBlock = async (id: string) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      const offset = block.offsetHeight / 2
      const top = block.getBoundingClientRect().top + window.scrollY - offset
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
