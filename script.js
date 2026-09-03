/* ========================================
   GLADIATOR LEAGUE — Main Script
   ======================================== */

// ---------- Load data from admin panel or use defaults ----------
const DEFAULT_TEAMS = [
  { name: 'Titans FC',       abbr: 'TIT', color: '#e63946', group: 'A' },
  { name: 'Storm United',    abbr: 'STU', color: '#457b9d', group: 'A' },
  { name: 'Phoenix Rising',  abbr: 'PHX', color: '#2a9d8f', group: 'A' },
  { name: 'Golden Eagles',   abbr: 'GLE', color: '#e9c46a', group: 'A' },
  { name: 'Shadow Wolves',   abbr: 'SHW', color: '#264653', group: 'B' },
  { name: 'Blaze FC',        abbr: 'BLZ', color: '#f4a261', group: 'B' },
  { name: 'Royal Knights',   abbr: 'RKN', color: '#6a0572', group: 'B' },
  { name: 'Oceanic FC',      abbr: 'OCN', color: '#1a535c', group: 'B' },
  { name: 'Red Spartans',    abbr: 'RSP', color: '#d62828', group: 'C' },
  { name: 'Blue Thunder',    abbr: 'BLT', color: '#023e8a', group: 'C' },
  { name: 'Green Vipers',    abbr: 'GRV', color: '#606c38', group: 'C' },
  { name: 'Desert Hawks',    abbr: 'DSH', color: '#bc6c25', group: 'C' },
  { name: 'Iron Legion',     abbr: 'IRL', color: '#540b0e', group: 'D' },
  { name: 'Crimson Fury',    abbr: 'CRF', color: '#9b2226', group: 'D' },
  { name: 'Nebula Stars',    abbr: 'NBS', color: '#3a0ca3', group: 'D' },
  { name: 'Arctic FC',       abbr: 'ARC', color: '#4cc9f0', group: 'D' },
];

const DEFAULT_SETTINGS = {
  startDate: '2026-10-01',
  endDate: '2026-11-15',
  prizeMoney: 5000,
  totalTeams: 16,
  totalMatches: 64
};

const DEFAULT_CONTENT = {
  heroSubtitle: '⚽ Season 2026 — Registration Open',
  heroTitle1: 'GLADIATOR',
  heroTitle2: 'LEAGUE',
  heroDesc: 'Where legends clash and champions rise. The ultimate football tournament awaits.',
  matchDays: 30,
  venueName: 'Gladiator Arena',
  venueAddress: 'Gladiator Arena, Sports Complex, City Center',
  formatDesc: '16 teams battle through a round-robin group stage followed by single-elimination knockouts. Every match counts. No room for complacency.',
  scheduleDesc: 'The tournament runs from October 1 — November 15, 2026. Group stages span 4 weeks, followed by 2 weeks of electrifying knockout rounds.',
  venueDesc: 'All matches are held at the Gladiator Arena — a state-of-the-art turf ground with floodlights, spectator stands, and live commentary.',
  prizesDesc: '$5,000 total prize pool. Champions take home the Gladiator Shield trophy, individual awards for Golden Boot, Golden Glove, and MVP.',
  rulesDesc: 'Standard 11-a-side rules. 45-minute halves in groups, extra time and penalties in knockouts. Fair play points break ties.',
  eligibilityDesc: 'Open to amateur and semi-pro teams. Each squad registers 18–23 players. Age 16+ with valid ID required for all participants.',
  contactEmail: 'info@gladiatorleague.com',
  contactPhone: '+91 98765 43210',
  socialInstagram: '#',
  socialTwitter: '#',
  socialYoutube: '#',
  socialFacebook: '#',
  registerTitle: 'Register Your Team',
  registerSubtitle: 'Spots are limited — secure yours today',
  minPlayers: 18,
  maxPlayers: 23,
  footerTagline: 'The ultimate amateur football tournament. Where legends clash and champions rise.',
  copyrightText: '© 2026 Gladiator League. All rights reserved.'
};

// Load from localStorage or use defaults
let TEAMS = [];
let FIXTURES = [];
let SCORERS = [];
let SETTINGS = {};
let CONTENT = {};

try {
  TEAMS = JSON.parse(localStorage.getItem('gl_teams')) || DEFAULT_TEAMS;
  FIXTURES = JSON.parse(localStorage.getItem('gl_fixtures')) || [];
  SCORERS = JSON.parse(localStorage.getItem('gl_scorers')) || [];
  SETTINGS = JSON.parse(localStorage.getItem('gl_settings')) || DEFAULT_SETTINGS;
  CONTENT = JSON.parse(localStorage.getItem('gl_content')) || DEFAULT_CONTENT;
} catch (e) {
  TEAMS = DEFAULT_TEAMS;
  FIXTURES = [];
  SCORERS = [];
  SETTINGS = DEFAULT_SETTINGS;
  CONTENT = DEFAULT_CONTENT;
}

const STANDINGS = {
  A: [
    { name: 'Titans FC',      p:3, w:2, d:1, l:0, gf:7, ga:2 },
    { name: 'Phoenix Rising', p:3, w:2, d:0, l:1, gf:5, ga:3 },
    { name: 'Storm United',   p:3, w:1, d:1, l:1, gf:4, ga:4 },
    { name: 'Golden Eagles',  p:3, w:0, d:0, l:3, gf:1, ga:8 },
  ],
  B: [
    { name: 'Blaze FC',       p:3, w:3, d:0, l:0, gf:8, ga:1 },
    { name: 'Shadow Wolves',  p:3, w:1, d:1, l:1, gf:4, ga:4 },
    { name: 'Royal Knights',  p:3, w:1, d:0, l:2, gf:3, ga:5 },
    { name: 'Oceanic FC',     p:3, w:0, d:1, l:2, gf:2, ga:7 },
  ],
  C: [
    { name: 'Red Spartans',   p:3, w:2, d:1, l:0, gf:6, ga:2 },
    { name: 'Green Vipers',   p:3, w:2, d:0, l:1, gf:5, ga:4 },
    { name: 'Blue Thunder',   p:3, w:1, d:0, l:2, gf:3, ga:5 },
    { name: 'Desert Hawks',   p:3, w:0, d:1, l:2, gf:2, ga:5 },
  ],
  D: [
    { name: 'Iron Legion',    p:3, w:2, d:1, l:0, gf:7, ga:3 },
    { name: 'Nebula Stars',   p:3, w:1, d:2, l:0, gf:4, ga:2 },
    { name: 'Crimson Fury',   p:3, w:1, d:0, l:2, gf:3, ga:6 },
    { name: 'Arctic FC',      p:3, w:0, d:1, l:2, gf:2, ga:5 },
  ],
};

// ---------- Navbar scroll ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---------- Mobile menu ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
});

// ---------- Hero stat counter ----------
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  });
}

// Update hero stats with admin settings
document.addEventListener('DOMContentLoaded', () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length >= 4) {
    statNumbers[0].dataset.target = SETTINGS.totalTeams || 16;
    statNumbers[1].dataset.target = SETTINGS.totalMatches || 64;
    statNumbers[2].dataset.target = SETTINGS.prizeMoney || 5000;
    statNumbers[3].dataset.target = CONTENT.matchDays || 30;
  }

  // Apply all dynamic content to the website
  applyWebsiteContent();
});

// ---------- Apply Dynamic Website Content ----------
function applyWebsiteContent() {
  // Hero
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && CONTENT.heroSubtitle) heroSubtitle.textContent = CONTENT.heroSubtitle;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && (CONTENT.heroTitle1 || CONTENT.heroTitle2)) {
    heroTitle.innerHTML = `${CONTENT.heroTitle1 || 'GLADIATOR'}<br /><span class="gold">${CONTENT.heroTitle2 || 'LEAGUE'}</span>`;
  }

  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc && CONTENT.heroDesc) heroDesc.textContent = CONTENT.heroDesc;

  // About Cards
  const aboutCards = document.querySelectorAll('.about-card');
  if (aboutCards.length >= 6) {
    if (CONTENT.formatDesc) aboutCards[0].querySelector('p').textContent = CONTENT.formatDesc;
    if (CONTENT.scheduleDesc) aboutCards[1].querySelector('p').textContent = CONTENT.scheduleDesc;
    if (CONTENT.venueDesc) aboutCards[2].querySelector('p').textContent = CONTENT.venueDesc;
    if (CONTENT.prizesDesc) aboutCards[3].querySelector('p').textContent = CONTENT.prizesDesc;
    if (CONTENT.rulesDesc) aboutCards[4].querySelector('p').textContent = CONTENT.rulesDesc;
    if (CONTENT.eligibilityDesc) aboutCards[5].querySelector('p').textContent = CONTENT.eligibilityDesc;
  }

  // Contact Info
  const contactItems = document.querySelectorAll('.contact-item');
  if (contactItems.length >= 3) {
    if (CONTENT.contactEmail) contactItems[0].querySelector('p').textContent = CONTENT.contactEmail;
    if (CONTENT.contactPhone) contactItems[1].querySelector('p').textContent = CONTENT.contactPhone;
    if (CONTENT.venueAddress) contactItems[2].querySelector('p').textContent = CONTENT.venueAddress;
  }

  // Social Links
  const socialLinks = document.querySelectorAll('.contact-socials a');
  if (socialLinks.length >= 4) {
    if (CONTENT.socialInstagram) socialLinks[0].href = CONTENT.socialInstagram;
    if (CONTENT.socialTwitter) socialLinks[1].href = CONTENT.socialTwitter;
    if (CONTENT.socialYoutube) socialLinks[2].href = CONTENT.socialYoutube;
    if (CONTENT.socialFacebook) socialLinks[3].href = CONTENT.socialFacebook;
  }

  // Registration Form
  const registerSection = document.getElementById('contact');
  if (registerSection) {
    const regTitle = registerSection.querySelector('.section-title');
    const regSubtitle = registerSection.querySelector('.section-subtitle');
    if (regTitle && CONTENT.registerTitle) {
      regTitle.innerHTML = `${CONTENT.registerTitle.replace('Team', '')} <span class="gold">Team</span>`;
    }
    if (regSubtitle && CONTENT.registerSubtitle) regSubtitle.textContent = CONTENT.registerSubtitle;
  }

  const playersInput = document.getElementById('players');
  if (playersInput) {
    if (CONTENT.minPlayers) playersInput.min = CONTENT.minPlayers;
    if (CONTENT.maxPlayers) playersInput.max = CONTENT.maxPlayers;
    if (CONTENT.minPlayers && CONTENT.maxPlayers) {
      playersInput.placeholder = `${CONTENT.minPlayers}–${CONTENT.maxPlayers}`;
    }
  }

  // Footer
  const footerBrandDesc = document.querySelector('.footer-brand p');
  if (footerBrandDesc && CONTENT.footerTagline) footerBrandDesc.textContent = CONTENT.footerTagline;

  const footerCopyright = document.querySelector('.footer-bottom p');
  if (footerCopyright && CONTENT.copyrightText) footerCopyright.textContent = CONTENT.copyrightText;
}

// ---------- Hero particles ----------
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position:absolute; width:${2 + Math.random() * 4}px; height:${2 + Math.random() * 4}px;
      background:rgba(212,168,67,${0.1 + Math.random() * 0.2}); border-radius:50%;
      left:${Math.random() * 100}%; top:${Math.random() * 100}%;
      animation: float ${4 + Math.random() * 6}s ease-in-out infinite alternate;
    `;
    container.appendChild(dot);
  }
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      from { transform: translateY(0) translateX(0); opacity: .3; }
      to   { transform: translateY(-40px) translateX(20px); opacity: .7; }
    }
  `;
  document.head.appendChild(style);
}
createParticles();

// ---------- Intersection Observer for fade-in ----------
function setupAnimations() {
  const cards = document.querySelectorAll(
    '.about-card, .fixture-card, .team-card, .gallery-item, .countdown-item'
  );
  cards.forEach(c => c.classList.add('fade-in'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => observer.observe(c));
}

// Also trigger stat counter when hero is in view
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('.hero'));

// ---------- Fixture filters ----------
// Render fixtures dynamically
function renderFixtures() {
  const grid = document.getElementById('fixturesGrid');
  if (!FIXTURES || FIXTURES.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-dim); text-align: center; padding: 40px; grid-column: 1/-1;">No fixtures scheduled yet.</p>';
    return;
  }

  grid.innerHTML = FIXTURES.map(fixture => {
    const homeTeam = TEAMS.find(t => t.id === fixture.homeTeamId);
    const awayTeam = TEAMS.find(t => t.id === fixture.awayTeamId);

    if (!homeTeam || !awayTeam) return '';

    const date = new Date(fixture.date + 'T' + fixture.time);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    const group = homeTeam.group.toLowerCase();

    return `
      <div class="fixture-card" data-group="group-${group}">
        <span class="fixture-date">${dateStr} — ${timeStr}</span>
        <div class="fixture-teams">
          <div class="fixture-team">
            <span class="team-color" style="background:${homeTeam.color}"></span> ${homeTeam.name}
          </div>
          <span class="vs">VS</span>
          <div class="fixture-team">
            <span class="team-color" style="background:${awayTeam.color}"></span> ${awayTeam.name}
          </div>
        </div>
        ${fixture.homeScore !== null && fixture.awayScore !== null ? `
          <div style="text-align: center; margin: 8px 0; font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: var(--gold);">
            ${fixture.homeScore} - ${fixture.awayScore}
          </div>
        ` : ''}
        <span class="fixture-venue"><i class="fas fa-location-dot"></i> ${fixture.venue}</span>
      </div>
    `;
  }).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.fixture-card').forEach(card => {
      if (filter === 'all' || card.dataset.group === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Render fixtures on load
renderFixtures();

// ---------- Standings ----------
function renderStandings(group) {
  const tbody = document.getElementById('standingsBody');
  const data = STANDINGS[group];
  tbody.innerHTML = data.map((t, i) => {
    const gd = t.gf - t.ga;
    const pts = t.w * 3 + t.d;
    const qualified = i < 2 ? 'qualified' : '';
    return `
      <tr class="${qualified}">
        <td>${i + 1}</td>
        <td><strong>${t.name}</strong></td>
        <td>${t.p}</td>
        <td>${t.w}</td>
        <td>${t.d}</td>
        <td>${t.l}</td>
        <td>${t.gf}</td>
        <td>${t.ga}</td>
        <td>${gd > 0 ? '+' : ''}${gd}</td>
        <td><strong>${pts}</strong></td>
      </tr>
    `;
  }).join('');
}
renderStandings('A');

document.querySelectorAll('.standings-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.standings-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderStandings(tab.dataset.tab);
  });
});

// ---------- Teams grid ----------
function renderTeams() {
  const grid = document.getElementById('teamsGrid');
  grid.innerHTML = TEAMS.map(t => `
    <div class="team-card">
      <div class="team-badge" style="background:${t.color}">${t.abbr}</div>
      <h4>${t.name}</h4>
      <p>Group ${t.group}</p>
    </div>
  `).join('');
}
renderTeams();

// ---------- Render Gallery ----------
function renderGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  // Try to load custom gallery from admin panel
  let customGallery = [];
  try {
    customGallery = JSON.parse(localStorage.getItem('gl_gallery')) || [];
  } catch (e) {
    customGallery = [];
  }

  if (customGallery.length > 0) {
    // Render custom gallery images
    galleryGrid.innerHTML = customGallery.map(item => `
      <div class="gallery-item ${item.size === 'large' ? 'large' : ''}">
        ${item.image ? `
          <img src="${item.image}" alt="${item.caption}" />
          <div class="gallery-caption">
            <i class="${item.icon || 'fas fa-image'}"></i>
            <span>${item.caption}</span>
          </div>
        ` : `
          <div class="gallery-placeholder">
            <i class="${item.icon || 'fas fa-futbol'}"></i>
            <span>${item.caption}</span>
          </div>
        `}
      </div>
    `).join('');
  }
  // Otherwise, keep the default placeholder HTML from index.html
}
renderGallery();

// ---------- Countdown ----------
function updateCountdown() {
  const targetDate = SETTINGS.startDate ? SETTINGS.startDate + 'T18:00:00' : '2026-10-01T18:00:00';
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent    = String(d).padStart(2, '0');
  document.getElementById('hours').textContent   = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Registration form ----------
const form = document.getElementById('registerForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Collect form data
  const registration = {
    id: Date.now(),
    teamName: document.getElementById('teamName').value,
    captainName: document.getElementById('captainName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    players: parseInt(document.getElementById('players').value),
    message: document.getElementById('message').value,
    status: 'Pending',
    submittedAt: new Date().toISOString()
  };

  // Save to localStorage
  try {
    const existingRegs = JSON.parse(localStorage.getItem('gl_registrations')) || [];
    existingRegs.push(registration);
    localStorage.setItem('gl_registrations', JSON.stringify(existingRegs));

    // Show success toast
    showToast('🎉 Registration submitted successfully! We\'ll be in touch soon.');
    form.reset();
  } catch (error) {
    showToast('❌ Error submitting registration. Please try again.');
    console.error('Registration error:', error);
  }
});

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ---------- Init animations after DOM ----------
setupAnimations();
