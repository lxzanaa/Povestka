const motionPath = document.getElementById('motionPath')
const trailPath = document.getElementById('trailPath')
const head = document.getElementById('head')
const svgContainer = document.querySelector('.arrow_svg')

const totalLength = motionPath.getTotalLength()
let animationFrameId
let lastAngle = 0

function runAnimation () {
  let progress = 0
  let step = 1000 / 60 / 500

  function animate () {
    const currentLength = totalLength * progress

    const point = motionPath.getPointAtLength(currentLength)
    const next = motionPath.getPointAtLength(
      Math.min(currentLength + 1, totalLength)
    )

    let angle = lastAngle
    if (progress < 0.99) {
      angle = (Math.atan2(next.y - point.y, next.x - point.x) * 180) / Math.PI
      lastAngle = angle
    }

    head.setAttribute(
      'transform',
      `translate(${point.x - 6}, ${point.y - 12}) rotate(${angle})`
    )

    let pathData = ''
    const samples = Math.floor(currentLength)
    for (let i = 0; i < samples; i += 5) {
      const p = motionPath.getPointAtLength(i)
      pathData += i === 0 ? `M ${p.x},${p.y}` : ` L ${p.x},${p.y}`
    }
    trailPath.setAttribute('d', pathData)

    if (progress < 1) {
      progress += step
      animationFrameId = requestAnimationFrame(animate)
    }
  }

  cancelAnimationFrame(animationFrameId)
  trailPath.setAttribute('d', '')
  head.setAttribute('transform', 'translate(-100, -100)') 

  animate()
}

const observers = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runAnimation()
      }
    })
  },
  { threshold: 0.5 }
)

observers.observe(svgContainer)
