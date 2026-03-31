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

document.getElementById('bucoxol-card').addEventListener('click', () => {
  lightbox.openAt(0);
});
