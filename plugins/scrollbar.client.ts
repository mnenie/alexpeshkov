export default defineNuxtPlugin(() => {
  const isWindows = navigator.userAgent.includes('Windows')
  if (isWindows) {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('win-scrollbar')
    })
  }
})
