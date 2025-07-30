// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  navToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });
  // Close nav on link click (mobile)
  navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navUl.classList.remove('open'));
  });
});