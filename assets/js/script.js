document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');

  // Hide loading screen after 3 seconds
  setTimeout(() => {
    loadingScreen.classList.add('hide');
    // Ensure main content is visible after loading
    mainContent.classList.add('show');
  }, 3000);

  // Initialize Lucide icons
  lucide.createIcons();

  // Highlight active nav link (basic example)
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href').split('/').pop();
    if (currentPath === linkHref || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});