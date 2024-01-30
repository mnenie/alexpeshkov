export function useBlank(){
  const goToBlankPage = (url: string) => {
    const target: string = url
    window.open(target, '_blank')
  }

  return {
    goToBlankPage
  }
}