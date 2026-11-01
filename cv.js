// Toggle mobile navigation menu visibility
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Binago mula 'show' patungong 'active'
  });
}

// Print / Download CV Function
const downloadBtn = document.getElementById('downloadBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print();
  });
}
