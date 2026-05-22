// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorTrail.style.left = e.clientX + 'px';
  cursorTrail.style.top = e.clientY + 'px';
});

// Cursor hover effects
document.querySelectorAll('a, button, .project-card, .cert-card, .skill-pill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
    cursor.style.background = 'rgba(0,229,255,0.4)';
    cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'var(--accent)';
    cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// ============================================
// NAV SCROLL EFFECT
// ============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => observer.observe(s));

// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================
const revealEls = document.querySelectorAll('.project-card, .cert-card, .skill-group, .edu-item, .about-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -80px 0px' });

revealEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  revealObserver.observe(el);
});

// ============================================
// SMOOTH PARALLAX ON HERO ORBS
// ============================================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  const orb3 = document.querySelector('.orb-3');
  if (orb1) orb1.style.transform = `translate(0, ${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translate(0, ${-scrollY * 0.1}px)`;
  if (orb3) orb3.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.08}px))`;
});

// ============================================
// TITLE GLITCH ON HOVER (projects)
// ============================================
document.querySelectorAll('.project-title').forEach(title => {
  title.addEventListener('mouseenter', function () {
    this.style.textShadow = '2px 0 var(--accent), -2px 0 var(--accent-2)';
    setTimeout(() => {
      this.style.textShadow = 'none';
    }, 120);
  });
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================
function animateCounter(el, target, isDecimal = false, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const from = 0;

  function update(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = from + (target - from) * eased;
    el.textContent = isDecimal ? value.toFixed(2) + suffix : Math.floor(value) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent.trim();
        if (text === '8.26') animateCounter(num, 8.26, true);
        else if (text === '3+') animateCounter(num, 3, false, '+');
        else if (text === '4') animateCounter(num, 4);
        else if (text === '2027') animateCounter(num, 2027);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -100px 0px' });

const statStrip = document.querySelector('.hero-stat-strip');
if (statStrip) statsObserver.observe(statStrip);

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

console.log('%cR. Vishva Kanna — Portfolio', 'color: #00e5ff; font-size: 1.2rem; font-weight: bold;');
console.log('%cAI & ML Engineer · SRM IST Trichy 2027', 'color: #6b7280; font-size: 0.85rem;');
