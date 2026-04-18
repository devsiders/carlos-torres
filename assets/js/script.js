var els = document.querySelectorAll('.reveal');
var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 });
els.forEach(function (el) { io.observe(el); });

// MENU
const menuBtn = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// LIGHTBOX
const lightbox = GLightbox({ selector: '.glightbox' });

// Proyecto Bucoxol
document.getElementById('bucoxol-card').addEventListener('click', () => {
  const firstImg = document.querySelector('a.glightbox[data-gallery="bucoxol"]');
  lightbox.open(firstImg);
});

// Proyecto SMS
document.getElementById('sms-card').addEventListener('click', () => {
  const firstImg = document.querySelector('a.glightbox[data-gallery="sms"]');
  lightbox.open(firstImg);
});
