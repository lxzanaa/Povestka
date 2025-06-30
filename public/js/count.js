function animateCount(el, target) {
  let start = 0;
  const duration = 2000; 
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);

    if (target > 0) {
      el.textContent = current + "+";
    } else {
      el.textContent = "0";
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function handleScroll() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !counter.classList.contains("counted")) {
      counter.classList.add("counted");
      const target = parseInt(counter.getAttribute("data-count"));
      animateCount(counter, target);
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);
