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

// Email copy-to-clipboard behavior
const emailBtn = document.getElementById('email-copy');
const copyMsg = document.getElementById('copy-msg');
if (emailBtn) {
  emailBtn.addEventListener('click', async () => {
    const email = 'joban.singh10777@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement('input');
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      if (copyMsg) {
        copyMsg.style.display = 'inline';
        setTimeout(() => { copyMsg.style.display = 'none'; }, 1500);
      }
    } catch (err) {
      console.error('Copy failed', err);
    }
  });
}
document.getElementById("email-copy").addEventListener("click", () => {
  const email = "joban.singh10777@gmail.com"; // replace with your email

  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard");
  }).catch(() => {
    alert("Failed to copy email");
  });
});
