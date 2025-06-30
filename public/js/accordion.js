const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
  const btn = accordion.querySelector('.accordion-btn')
  const content = accordion.querySelector('.accordion-content')
  const icon = accordion.querySelector('.accordion-icon')
  const svg = icon.querySelector('svg')

  btn.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px'

    // Boshqalarini yopamiz
    accordions.forEach(otherAccordion => {
      const otherContent = otherAccordion.querySelector('.accordion-content')
      const otherIcon = otherAccordion.querySelector('.accordion-icon')
      const otherSvg = otherIcon.querySelector('svg')

      if (otherAccordion !== accordion) {
        otherContent.style.maxHeight = '0px'
        otherAccordion.classList.add('border-[#E1E4ED]', 'bg-white')
        otherAccordion.classList.remove('border-[#006AFF]', 'bg-[#F8FAFF]')
        otherIcon.querySelectorAll('path').forEach(p => p.setAttribute('stroke', '#444A5C'))
        otherSvg.classList.remove('rotate-45')
      }
    })

    // Tanlangan accordionni ochamiz/yopamiz
    if (!isOpen) {
      content.style.maxHeight = '300px'
      content.style.marginTop = '-15px'
      accordion.classList.remove('border-[#E1E4ED]', 'bg-white')
      accordion.classList.add('border-[#006AFF]', 'bg-[#F8FAFF]')
      icon.querySelectorAll('path').forEach(p => p.setAttribute('stroke', '#006AFF'))
      svg.classList.add('rotate-45')
    } else {
      content.style.maxHeight = '0px'
      content.style.marginTop = '0px'
      accordion.classList.add('border-[#E1E4ED]', 'bg-white')
      accordion.classList.remove('border-[#006AFF]', 'bg-[#F8FAFF]')
      icon.querySelectorAll('path').forEach(p => p.setAttribute('stroke', '#444A5C'))
      svg.classList.remove('rotate-45')
    }
  })
})