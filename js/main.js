// This code runs only after all page sections (partials) have finished loading.
// See js/include.js for how sections are loaded and the 'includesLoaded' event.
document.addEventListener('includesLoaded', () => {

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));

  // scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.01,              // Trigger as soon as 1% is visible
  rootMargin: '0px 0px 50px 0px'  // Pre-trigger 50px before entering viewport
});
  revealEls.forEach(el => io.observe(el));

  // Fade out scroll cue on scroll
  const scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        scrollCue.style.opacity = '0';
      } else {
        scrollCue.style.opacity = '1';
      }
    });
  }

});
