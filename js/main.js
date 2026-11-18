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
function setMenuOpen(open) {
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
hamburger.addEventListener('click', () => {
    setMenuOpen(!mobileMenu.classList.contains('open'));
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        setMenuOpen(false);
    });
});

/* Theme preference follows the system until the visitor chooses a mode. */
const themeToggle = document.getElementById('themeToggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { savedTheme = null; }
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const next = theme === 'light' ? 'dark' : 'light';
    themeToggle.setAttribute('aria-label', `Switch to ${next} mode`);
    themeToggle.setAttribute('title', `Switch to ${next} mode`);
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
}
applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (systemTheme.matches ? 'light' : 'dark'));
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.add('theme-transition');
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch (_) { /* Private browsing may block storage. */ }
    window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 450);
});
systemTheme.addEventListener('change', e => {
    let preference;
    try { preference = localStorage.getItem('portfolio-theme'); } catch (_) { preference = null; }
    if (preference !== 'light' && preference !== 'dark') applyTheme(e.matches ? 'light' : 'dark');
});

const scrollTopButton = document.getElementById('scrollTop');
function updateScrollTop() {
    const visible = window.scrollY > 450;
    scrollTopButton.classList.toggle('visible', visible);
    scrollTopButton.tabIndex = visible ? 0 : -1;
}
window.addEventListener('scroll', updateScrollTop, { passive: true });
updateScrollTop();
scrollTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));

/* ================================================
   SCROLL REVEAL
   ================================================ */
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealEls.forEach(el => obs.observe(el));

document.querySelectorAll('.projects-grid, .about-highlights, .achievements').forEach(grid => {
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
        const href = a.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
