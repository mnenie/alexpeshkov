export default defineNuxtPlugin(() => {
  const isWindows = computed(() => {
    return navigator.userAgent.includes('Windows')
  })

  if (import.meta.client && isWindows.value) {
    document.body.classList.add('win-scrollbar')
  }
})
