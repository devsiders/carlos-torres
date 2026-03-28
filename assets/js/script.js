window.addEventListener('DOMContentLoaded', function () {
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
});