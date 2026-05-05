// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .port-card, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Contact form submit
const submitBtn = document.querySelector('.contact-form .btn-primary');
if (submitBtn) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let allFilled = true;
    inputs.forEach(input => { if (!input.value.trim()) allFilled = false; });
    if (!allFilled) {
      submitBtn.textContent = 'Please fill all fields!';
      submitBtn.style.background = '#e07070';
      setTimeout(() => {
        submitBtn.textContent = 'Send Message ✦';
        submitBtn.style.background = '';
      }, 2000);
    } else {
      submitBtn.textContent = 'Message Sent! ✓';
      submitBtn.style.background = '#4caf80';
      inputs.forEach(input => input.value = '');
      setTimeout(() => {
        submitBtn.textContent = 'Send Message ✦';
        submitBtn.style.background = '';
      }, 3000);
    }
  });
}
