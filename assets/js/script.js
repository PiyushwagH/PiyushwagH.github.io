/* ====================================================
   PIYUSH WAGH PORTFOLIO — SCRIPT.JS
   Handles: Theme toggle, typewriter, scroll effects,
   mobile menu, AOS, back-to-top, active nav
   ==================================================== */

'use strict';

// ===================== THEME =====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function getStoredTheme() {
  return localStorage.getItem('theme') || 'dark';
}

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Init theme
setTheme(getStoredTheme());

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===================== LUCIDE ICONS =====================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ===================== TYPEWRITER =====================
const typewriterEl = document.getElementById('typewriter');
const words = [
  'Software Developer',
  'Android Developer',
  'Web Developer',
  'Problem Solver',
  'CS Engineer'
];

let wIdx = 0;
let cIdx = 0;
let deleting = false;
let typeDelay = 100;

function typeWriter() {
  if (!typewriterEl) return;
  const currentWord = words[wIdx];

  if (!deleting) {
    typewriterEl.textContent = currentWord.substring(0, cIdx + 1);
    cIdx++;
    if (cIdx === currentWord.length) {
      deleting = true;
      typeDelay = 1800; // pause before delete
    } else {
      typeDelay = 100;
    }
  } else {
    typewriterEl.textContent = currentWord.substring(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) {
      deleting = false;
      wIdx = (wIdx + 1) % words.length;
      typeDelay = 300;
    } else {
      typeDelay = 55;
    }
  }
  setTimeout(typeWriter, typeDelay);
}

// Start typewriter after small delay
setTimeout(typeWriter, 500);

// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

function handleNavbarScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
  lastScrollY = scrollY;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ===================== SCROLL PROGRESS =====================
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ===================== ACTIVE NAV HIGHLIGHT =====================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight / 2;
  let currentSection = '';

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollMid >= top && scrollMid < top + height) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href')?.replace('#', '');
    if (href === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
    // Close mobile menu if open
    navMenu?.classList.remove('open');
    navHamburger?.classList.remove('open');
    navHamburger?.setAttribute('aria-expanded', 'false');
  });
});

// ===================== MOBILE MENU =====================
const navHamburger = document.getElementById('navHamburger');
const navMenu = document.getElementById('navMenu');

navHamburger?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('open');
  navHamburger.classList.toggle('open', isOpen);
  navHamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close on click outside
document.addEventListener('click', (e) => {
  if (!navbar?.contains(e.target)) {
    navMenu?.classList.remove('open');
    navHamburger?.classList.remove('open');
    navHamburger?.setAttribute('aria-expanded', 'false');
  }
});

// ===================== BACK TO TOP =====================
const backToTop = document.getElementById('backToTop');

function handleBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleBackToTop, { passive: true });

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================== AOS (Animate on Scroll) =====================
function initAOS() {
  const aosEls = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-aos-delay')) || 0;
          setTimeout(() => {
            el.classList.add('aos-animate');
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  aosEls.forEach((el) => observer.observe(el));
}

// ===================== FOOTER YEAR =====================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  // Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  // AOS
  initAOS();
  // Initial scroll calls
  handleNavbarScroll();
  handleBackToTop();
  updateScrollProgress();
});
