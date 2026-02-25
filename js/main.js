/* ================================================
   CUSTOM CURSOR
   ================================================ */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 5 + 'px';
    rx += (e.clientX - 18 - rx) * 0.12;
    ry += (e.clientY - 18 - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
});
(function animRing() { requestAnimationFrame(animRing); })();

/* ================================================
   MOBILE HAMBURGER NAV
   ================================================ */
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

/* ================================================
   SCROLL REVEAL
   ================================================ */
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealEls.forEach(el => obs.observe(el));

document.querySelectorAll('.projects-grid, .sap-modules, .about-highlights, .achievements').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = (i * 0.08) + 's';
    });
});

/* ================================================
   STAT COUNTER ANIMATION
   ================================================ */
function animateCount(el, target, suffix = '') {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
    }, 20);
}
const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.stat-num').forEach(n => {
                const text = n.textContent;
                if (text.includes('%')) animateCount(n, parseFloat(text), '%');
                else if (text.includes('+')) animateCount(n, parseFloat(text), '+');
            });
            statsObs.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObs.observe(statsEl);

/* ================================================
   SMOOTH NAV SCROLL
   ================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

/* ================================================
   SAP APP SCREENSHOT CAROUSEL
   ================================================ */
(function initCarousel() {
    const track = document.getElementById('sapCarouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    const label = document.getElementById('slideLabel');
    const prev = document.getElementById('carouselPrev');
    const next = document.getElementById('carouselNext');

    if (!track) return; // safeguard

    const slideLabels = [
        'Login Screen · 1 / 6',
        'Dashboard · 2 / 6',
        'Approvals List · 3 / 6',
        'Approval Detail · 4 / 6',
        'Documents · 5 / 6',
        'Document Detail · 6 / 6'
    ];

    let current = 0;
    const total = dots.length;
    let autoTimer;

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        label.textContent = slideLabels[current];
    }

    prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
    dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.index); resetAuto(); }));

    /* Swipe support */
    let touchStartX = 0;
    track.parentElement.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.parentElement.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) { goTo(delta > 0 ? current + 1 : current - 1); resetAuto(); }
    });

    /* Auto-advance every 3.5s */
    function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 3500); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }
    startAuto();
})();
