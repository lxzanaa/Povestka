document.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelectorAll('#typingWord span')

  let charIndex = 0
  let isDeleting = false

  function type () {
    if (!isDeleting) {
      if (charIndex < letters.length) {
        letters[charIndex].style.opacity = '1'
        letters[charIndex].style.transition = 'opacity 0.1s ease'
        charIndex++
        setTimeout(type, 100)
      } else {
        isDeleting = true
        setTimeout(type, 1000) 
      }
    } else {
      if (charIndex > 0) {
        charIndex--
        letters[charIndex].style.opacity = '0'
        setTimeout(type, 50)
      } else {
        isDeleting = false
        setTimeout(type, 1000) 
      }
    }
  }

  type()
})
