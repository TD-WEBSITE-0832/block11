const ribbon = document.getElementById('ribbon');
const percentText = document.getElementById('percent');
let current = 0;

function setProgress(value) {
  current = Math.max(0, Math.min(100, value));
  ribbon.style.width = current + '%';
  percentText.textContent = current + '%';
}

function animateProgress(target) {
  let start = current;
  let startTime = null;
  const duration = 1800; // 1.8 soniya

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let elapsed = timestamp - startTime;
    let progress = Math.min(elapsed / duration, 1);

    let eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    let now = start + (target - start) * eased;

    setProgress(Math.round(now));

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function autoAnimate() {
  setProgress(0);
  setTimeout(() => animateProgress(100), 600);
}

// Dastlabki holat
setProgress(0);