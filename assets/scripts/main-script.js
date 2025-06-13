// Theme toggling & smooth scroll
const themeBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
let dark = false;
themeBtn?.addEventListener('click', () => {
  dark = !dark;
  if (dark) {
    root.classList.add('dark-mode');
    themeBtn.innerText = "🔆";
  } else {
    root.classList.remove('dark-mode');
    themeBtn.innerText = "🌙";
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };
});

// Scroll to top (footer control)
document.getElementById('to-top')?.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});
