const items = document.querySelectorAll('#menu li')

items.forEach(item => {
  const link = item.querySelector('.menu-link')

  item.addEventListener('mouseenter', e => {
    const rect = item.getBoundingClientRect()
    const x = e.clientX - rect.left

    item.classList.remove('from-left', 'from-right')

    if (x < rect.width / 2) {
      item.classList.add('from-left')
    } else {
      item.classList.add('from-right')
    }
  })

  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
  })
})

const hamburgerBtn = document.getElementById('hamburger__btn')

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')

  if (hamburgerBtn.classList.contains('open')) {
    hamburgerBtn.children[0].style.transform = 'rotate(45deg)'
    hamburgerBtn.children[0].style.top = '1rem'
    hamburgerBtn.children[1].style.opacity = '0'
    hamburgerBtn.children[2].style.transform = 'rotate(-45deg)'
    hamburgerBtn.children[2].style.top = '1rem'
  } else {
    hamburgerBtn.children[0].style.transform = 'rotate(0)'
    hamburgerBtn.children[0].style.top = '0.5rem'
    hamburgerBtn.children[1].style.opacity = '1'
    hamburgerBtn.children[2].style.transform = 'rotate(0)'
    hamburgerBtn.children[2].style.top = '1.5rem'
  }
})

const footerLinks = document.querySelectorAll(
  '#footer-menu a, #footer-menu-2 a'
)

const section = document.getElementById('telegram-section')
const selector = document.getElementById('selector')

let timeoutId = null

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }

        selector.classList.remove('animated')

        timeoutId = setTimeout(() => {
          selector.classList.add('animated')
          timeoutId = null
        })
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId)
          timeoutId = null
        }
        selector.classList.remove('animated')
      }
    })
  },
  { threshold: 0.5 }
)

observer.observe(section)


