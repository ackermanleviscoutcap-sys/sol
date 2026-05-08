const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 500);
  });
});

const cards = document.querySelectorAll('.service-card, .review-grid article, figure');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach((card) => observer.observe(card));
