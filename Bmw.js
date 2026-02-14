let currentPercent = 0;

function updateProgress(percent) {
  const ribbon = document.getElementById('ribbon');
  const percentage = document.getElementById('percentage');

  ribbon.style.width = percent + '%';
  percentage.textContent = percent + '%';

  // Rangni foizga qarab o'zgartirish (0% - kulrang, 100% - to'q sariq)
  const hue = 40 + (percent * 0.6); // 40 dan 100 gacha
  ribbon.style.background = `linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${hue + 20}, 100%, 60%))`;

  currentPercent = percent;
}

function setProgress(percent) {
  updateProgress(percent);
}

function animateTo(targetPercent) {
  let start = currentPercent;
  let end = targetPercent;
  let duration = 2000; // 2 soniya
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = (timestamp - startTime) / duration;
    if (progress > 1) progress = 1;

    let current = start + (end - start) * progress;
    updateProgress(Math.round(current));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Dastlabki holat
updateProgress(0);

// Avto animatsiya (xohlasang ochib qo'y)
setTimeout(() => animateTo(100), 1000);




let lc=document.getElementById('lo')
lc.window.location.href='test.html'
lc.style.cursor='pointer'