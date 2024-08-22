export function useNavigation() {
  // TODO
  const goToBlankPage = (url: string) => {
    const target: string = url
    window.open(target, '_blank')
  }

  const scrollToBlock = async (id: string) => {
    await nextTick()
    const block = document.getElementById(id)
    if (block) {
      const offset = block.offsetHeight / 2
      const top = block.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
  return {
    goToBlankPage,
    scrollToBlock,
  }
}
