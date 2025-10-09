document.addEventListener('DOMContentLoaded', () => {
  const springImage = document.getElementById('spring');
  if (!springImage) return;

  // store original sources from data attributes (set in HTML)
  const staticSrc = springImage.dataset.static;
  const animSrc = springImage.dataset.anim;

  let playing = false;

  springImage.addEventListener('click', () => {
    if (!playing) {
      // add cache-busting to ensure GIF restarts
      springImage.src = animSrc + '?_=' + Date.now();
      springImage.classList.add('playing');
      playing = true;
    } else {
      springImage.src = staticSrc;
      springImage.classList.remove('playing');
      playing = false;
    }
  });
});
