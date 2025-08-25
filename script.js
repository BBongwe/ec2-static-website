// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactform');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        form.style.display = 'none';
        formMessage.style.display = 'block';
      } else {
        const data = await response.json();
        alert(data.error || 'Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form.');
    }
  });

  // Optional: Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
