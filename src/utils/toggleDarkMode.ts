export function toggleDarkMode(): boolean {
  const htmlElement = document.querySelector('html')

  if (htmlElement) {
    const hasDarkClass = htmlElement.classList.contains('dark')

    if (hasDarkClass) {
      htmlElement.classList.remove('dark')
      return false
    } else {
      htmlElement.classList.add('dark')
      return true
    }
  }
  return false
}
