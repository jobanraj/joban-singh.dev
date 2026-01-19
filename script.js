const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    if (top >= offset) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
