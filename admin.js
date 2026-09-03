/* ========================================
   GLADIATOR LEAGUE — Admin Panel Script
   ======================================== */

// Default password
const ADMIN_PASSWORD = 'gladiator2026';

// Storage keys
const STORAGE_KEYS = {
  AUTH: 'gl_admin_auth',
  TEAMS: 'gl_teams',
  FIXTURES: 'gl_fixtures',
  SCORERS: 'gl_scorers',
  SETTINGS: 'gl_settings',
<<<<<<< HEAD
  CONTENT: 'gl_content',
  REGISTRATIONS: 'gl_registrations',
  GALLERY: 'gl_gallery'
=======
  CONTENT: 'gl_content'
>>>>>>> origin/main
};

// Default data
const DEFAULT_TEAMS = [
  { id: 1, name: 'Titans FC', abbr: 'TIT', color: '#e63946', group: 'A' },
  { id: 2, name: 'Storm United', abbr: 'STU', color: '#457b9d', group: 'A' },
  { id: 3, name: 'Phoenix Rising', abbr: 'PHX', color: '#2a9d8f', group: 'A' },
  { id: 4, name: 'Golden Eagles', abbr: 'GLE', color: '#e9c46a', group: 'A' },
  { id: 5, name: 'Shadow Wolves', abbr: 'SHW', color: '#264653', group: 'B' },
  { id: 6, name: 'Blaze FC', abbr: 'BLZ', color: '#f4a261', group: 'B' },
  { id: 7, name: 'Royal Knights', abbr: 'RKN', color: '#6a0572', group: 'B' },
  { id: 8, name: 'Oceanic FC', abbr: 'OCN', color: '#1a535c', group: 'B' },
  { id: 9, name: 'Red Spartans', abbr: 'RSP', color: '#d62828', group: 'C' },
  { id: 10, name: 'Blue Thunder', abbr: 'BLT', color: '#023e8a', group: 'C' },
  { id: 11, name: 'Green Vipers', abbr: 'GRV', color: '#606c38', group: 'C' },
  { id: 12, name: 'Desert Hawks', abbr: 'DSH', color: '#bc6c25', group: 'C' },
  { id: 13, name: 'Iron Legion', abbr: 'IRL', color: '#540b0e', group: 'D' },
  { id: 14, name: 'Crimson Fury', abbr: 'CRF', color: '#9b2226', group: 'D' },
  { id: 15, name: 'Nebula Stars', abbr: 'NBS', color: '#3a0ca3', group: 'D' },
  { id: 16, name: 'Arctic FC', abbr: 'ARC', color: '#4cc9f0', group: 'D' }
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

// State
let teams = [];
let fixtures = [];
let scorers = [];
let settings = {};
let content = {};
<<<<<<< HEAD
let registrations = [];
let gallery = [];
=======
>>>>>>> origin/main
let editingId = null;

// ==================== INITIALIZATION ====================
function init() {
  // Check authentication
  if (localStorage.getItem(STORAGE_KEYS.AUTH) === 'true') {
    showAdminPanel();
  }

  // Load data
  loadData();

  // Setup event listeners
  setupEventListeners();
}

function loadData() {
  // Load teams
  const storedTeams = localStorage.getItem(STORAGE_KEYS.TEAMS);
  teams = storedTeams ? JSON.parse(storedTeams) : [...DEFAULT_TEAMS];

  // Load fixtures
  const storedFixtures = localStorage.getItem(STORAGE_KEYS.FIXTURES);
  fixtures = storedFixtures ? JSON.parse(storedFixtures) : [];

  // Load scorers
  const storedScorers = localStorage.getItem(STORAGE_KEYS.SCORERS);
  scorers = storedScorers ? JSON.parse(storedScorers) : [];

  // Load settings
  const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
  settings = storedSettings ? JSON.parse(storedSettings) : {...DEFAULT_SETTINGS};

  // Load content
  const storedContent = localStorage.getItem(STORAGE_KEYS.CONTENT);
  content = storedContent ? JSON.parse(storedContent) : {...DEFAULT_CONTENT};
<<<<<<< HEAD

  // Load registrations
  const storedRegistrations = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
  registrations = storedRegistrations ? JSON.parse(storedRegistrations) : [];

  // Load gallery
  const storedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
  gallery = storedGallery ? JSON.parse(storedGallery) : [];
=======
>>>>>>> origin/main
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.TEAMS, JSON.stringify(teams));
  localStorage.setItem(STORAGE_KEYS.FIXTURES, JSON.stringify(fixtures));
  localStorage.setItem(STORAGE_KEYS.SCORERS, JSON.stringify(scorers));
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  localStorage.setItem(STORAGE_KEYS.CONTENT, JSON.stringify(content));
<<<<<<< HEAD
  localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(registrations));
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
=======
>>>>>>> origin/main
}

// ==================== AUTHENTICATION ====================
function setupEventListeners() {
  // Login
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      showAdminPanel();
    } else {
      alert('Incorrect password!');
    }
  });

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    location.reload();
  });

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      switchSection(section);
    });
  });

  // Teams
  document.getElementById('addTeamBtn').addEventListener('click', () => openTeamModal());
  document.getElementById('teamForm').addEventListener('submit', handleTeamSubmit);

  // Fixtures
  document.getElementById('addFixtureBtn').addEventListener('click', () => openFixtureModal());
  document.getElementById('fixtureForm').addEventListener('submit', handleFixtureSubmit);

  // Scorers
  document.getElementById('addScorerBtn').addEventListener('click', () => openScorerModal());
  document.getElementById('scorerForm').addEventListener('submit', handleScorerSubmit);

  // Settings
  document.getElementById('settingsForm').addEventListener('submit', handleSettingsSubmit);

  // Content
  document.getElementById('contentForm').addEventListener('submit', handleContentSubmit);
<<<<<<< HEAD

  // Registrations
  document.getElementById('exportRegistrationsBtn').addEventListener('click', exportRegistrationsCSV);
  document.getElementById('clearRegistrationsBtn').addEventListener('click', clearAllRegistrations);

  // Gallery
  document.getElementById('addGalleryBtn').addEventListener('click', () => openGalleryModal());
  document.getElementById('galleryForm').addEventListener('submit', handleGallerySubmit);

  // Gallery image preview
  const fileInput = document.getElementById('imageFile');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => {
          document.getElementById('imageUrl').value = '';
          const previewImg = document.getElementById('imagePreview');
          previewImg.src = re.target.result;
          document.getElementById('imagePreviewContainer').style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const urlInput = document.getElementById('imageUrl');
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      if (e.target.value) {
        document.getElementById('imageFile').value = '';
        const previewImg = document.getElementById('imagePreview');
        previewImg.src = e.target.value;
        document.getElementById('imagePreviewContainer').style.display = 'block';
      }
    });
  }
=======
>>>>>>> origin/main
}

function showAdminPanel() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'flex';
  renderTeams();
  renderFixtures();
  renderScorers();
<<<<<<< HEAD
  renderRegistrations();
  renderGallery();
=======
>>>>>>> origin/main
  loadSettingsForm();
  loadContentForm();
}

function switchSection(section) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });

  // Update sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === section + 'Section');
  });
}

// ==================== TEAMS ====================
function renderTeams() {
  const container = document.getElementById('teamsList');
  container.innerHTML = teams.map(team => `
    <div class="team-card">
      <div class="team-card-header">
        <div class="team-badge" style="background: ${team.color}">${team.abbr}</div>
        <div class="team-info">
          <h3>${team.name}</h3>
          <p>Group ${team.group}</p>
        </div>
      </div>
      <div class="card-actions">
        <button class="icon-btn" onclick="editTeam(${team.id})">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button class="icon-btn danger" onclick="deleteTeam(${team.id})">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  `).join('');
}

function openTeamModal(teamId = null) {
  editingId = teamId;
  const modal = document.getElementById('teamModal');
  const title = document.getElementById('teamModalTitle');
  const form = document.getElementById('teamForm');

  if (teamId) {
    const team = teams.find(t => t.id === teamId);
    title.textContent = 'Edit Team';
    document.getElementById('teamId').value = team.id;
    document.getElementById('teamName').value = team.name;
    document.getElementById('teamAbbr').value = team.abbr;
    document.getElementById('teamColor').value = team.color;
    document.getElementById('teamGroup').value = team.group;
  } else {
    title.textContent = 'Add Team';
    form.reset();
    document.getElementById('teamId').value = '';
  }

  modal.classList.add('active');
}

function handleTeamSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('teamId').value;
  const teamData = {
    id: id ? parseInt(id) : Date.now(),
    name: document.getElementById('teamName').value,
    abbr: document.getElementById('teamAbbr').value.toUpperCase(),
    color: document.getElementById('teamColor').value,
    group: document.getElementById('teamGroup').value
  };

  if (id) {
    const index = teams.findIndex(t => t.id === parseInt(id));
    teams[index] = teamData;
  } else {
    teams.push(teamData);
  }

  saveData();
  renderTeams();
  closeModal('teamModal');
}

function editTeam(id) {
  openTeamModal(id);
}

function deleteTeam(id) {
  if (confirm('Are you sure you want to delete this team?')) {
    teams = teams.filter(t => t.id !== id);
    saveData();
    renderTeams();
  }
}

// ==================== FIXTURES ====================
function renderFixtures() {
  const container = document.getElementById('fixturesList');
  if (fixtures.length === 0) {
    container.innerHTML = '<p style="color: var(--text-dim); text-align: center; padding: 40px;">No fixtures added yet. Click "Add Fixture" to get started.</p>';
    return;
  }

  container.innerHTML = fixtures.map(fixture => {
    const homeTeam = teams.find(t => t.id === fixture.homeTeamId);
    const awayTeam = teams.find(t => t.id === fixture.awayTeamId);
    const date = new Date(fixture.date + 'T' + fixture.time);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    return `
      <div class="fixture-card">
        <span class="fixture-card-date">${dateStr} — ${timeStr}</span>
        <div class="fixture-teams">
          <div>${homeTeam?.name || 'Unknown'}</div>
          <span class="fixture-vs">VS</span>
          <div>${awayTeam?.name || 'Unknown'}</div>
        </div>
        ${fixture.homeScore !== null && fixture.awayScore !== null ? `
          <div class="fixture-score">${fixture.homeScore} - ${fixture.awayScore}</div>
        ` : ''}
        <div class="fixture-venue"><i class="fas fa-location-dot"></i> ${fixture.venue}</div>
        <div class="card-actions">
          <button class="icon-btn" onclick="editFixture(${fixture.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="icon-btn danger" onclick="deleteFixture(${fixture.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openFixtureModal(fixtureId = null) {
  editingId = fixtureId;
  const modal = document.getElementById('fixtureModal');
  const title = document.getElementById('fixtureModalTitle');
  const form = document.getElementById('fixtureForm');

  // Populate team dropdowns
  const homeSelect = document.getElementById('homeTeam');
  const awaySelect = document.getElementById('awayTeam');
  const teamOptions = teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  homeSelect.innerHTML = teamOptions;
  awaySelect.innerHTML = teamOptions;

  if (fixtureId) {
    const fixture = fixtures.find(f => f.id === fixtureId);
    title.textContent = 'Edit Fixture';
    document.getElementById('fixtureId').value = fixture.id;
    document.getElementById('fixtureDate').value = fixture.date;
    document.getElementById('fixtureTime').value = fixture.time;
    document.getElementById('homeTeam').value = fixture.homeTeamId;
    document.getElementById('awayTeam').value = fixture.awayTeamId;
    document.getElementById('fixtureVenue').value = fixture.venue;
    document.getElementById('homeScore').value = fixture.homeScore ?? '';
    document.getElementById('awayScore').value = fixture.awayScore ?? '';
  } else {
    title.textContent = 'Add Fixture';
    form.reset();
    document.getElementById('fixtureId').value = '';
    homeSelect.innerHTML = teamOptions;
    awaySelect.innerHTML = teamOptions;
  }

  modal.classList.add('active');
}

function handleFixtureSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('fixtureId').value;
  const homeScore = document.getElementById('homeScore').value;
  const awayScore = document.getElementById('awayScore').value;

  const fixtureData = {
    id: id ? parseInt(id) : Date.now(),
    date: document.getElementById('fixtureDate').value,
    time: document.getElementById('fixtureTime').value,
    homeTeamId: parseInt(document.getElementById('homeTeam').value),
    awayTeamId: parseInt(document.getElementById('awayTeam').value),
    venue: document.getElementById('fixtureVenue').value,
    homeScore: homeScore ? parseInt(homeScore) : null,
    awayScore: awayScore ? parseInt(awayScore) : null
  };

  if (id) {
    const index = fixtures.findIndex(f => f.id === parseInt(id));
    fixtures[index] = fixtureData;
  } else {
    fixtures.push(fixtureData);
  }

  saveData();
  renderFixtures();
  closeModal('fixtureModal');
}

function editFixture(id) {
  openFixtureModal(id);
}

function deleteFixture(id) {
  if (confirm('Are you sure you want to delete this fixture?')) {
    fixtures = fixtures.filter(f => f.id !== id);
    saveData();
    renderFixtures();
  }
}

// ==================== SCORERS ====================
function renderScorers() {
  const container = document.getElementById('scorersList');
  if (scorers.length === 0) {
    container.innerHTML = '<p style="color: var(--text-dim); text-align: center; padding: 40px;">No goal scorers added yet. Click "Add Goal Scorer" to get started.</p>';
    return;
  }

  // Sort by goals descending
  const sortedScorers = [...scorers].sort((a, b) => b.goals - a.goals);

  container.innerHTML = sortedScorers.map(scorer => {
    const team = teams.find(t => t.id === scorer.teamId);
    return `
      <div class="scorer-card">
        <div class="scorer-card-header">
          <div>
            <div class="scorer-name">${scorer.playerName}</div>
            <div class="scorer-team">${team?.name || 'Unknown Team'}</div>
          </div>
          <div class="scorer-goals">${scorer.goals}</div>
        </div>
        <div class="card-actions">
          <button class="icon-btn" onclick="editScorer(${scorer.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="icon-btn danger" onclick="deleteScorer(${scorer.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openScorerModal(scorerId = null) {
  editingId = scorerId;
  const modal = document.getElementById('scorerModal');
  const title = document.getElementById('scorerModalTitle');
  const form = document.getElementById('scorerForm');

  // Populate team dropdown
  const teamSelect = document.getElementById('scorerTeam');
  teamSelect.innerHTML = teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

  if (scorerId) {
    const scorer = scorers.find(s => s.id === scorerId);
    title.textContent = 'Edit Goal Scorer';
    document.getElementById('scorerId').value = scorer.id;
    document.getElementById('playerName').value = scorer.playerName;
    document.getElementById('scorerTeam').value = scorer.teamId;
    document.getElementById('goalsScored').value = scorer.goals;
  } else {
    title.textContent = 'Add Goal Scorer';
    form.reset();
    document.getElementById('scorerId').value = '';
    teamSelect.innerHTML = teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  }

  modal.classList.add('active');
}

function handleScorerSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('scorerId').value;
  const scorerData = {
    id: id ? parseInt(id) : Date.now(),
    playerName: document.getElementById('playerName').value,
    teamId: parseInt(document.getElementById('scorerTeam').value),
    goals: parseInt(document.getElementById('goalsScored').value)
  };

  if (id) {
    const index = scorers.findIndex(s => s.id === parseInt(id));
    scorers[index] = scorerData;
  } else {
    scorers.push(scorerData);
  }

  saveData();
  renderScorers();
  closeModal('scorerModal');
}

function editScorer(id) {
  openScorerModal(id);
}

function deleteScorer(id) {
  if (confirm('Are you sure you want to delete this goal scorer?')) {
    scorers = scorers.filter(s => s.id !== id);
    saveData();
    renderScorers();
  }
}

// ==================== SETTINGS ====================
function loadSettingsForm() {
  document.getElementById('startDate').value = settings.startDate;
  document.getElementById('endDate').value = settings.endDate;
  document.getElementById('prizeMoney').value = settings.prizeMoney;
  document.getElementById('totalTeams').value = settings.totalTeams;
  document.getElementById('totalMatches').value = settings.totalMatches;
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  settings = {
    startDate: document.getElementById('startDate').value,
    endDate: document.getElementById('endDate').value,
    prizeMoney: parseInt(document.getElementById('prizeMoney').value),
    totalTeams: parseInt(document.getElementById('totalTeams').value),
    totalMatches: parseInt(document.getElementById('totalMatches').value)
  };
  saveData();
  alert('Settings saved successfully!');
}

// ==================== WEBSITE CONTENT ====================
function loadContentForm() {
  document.getElementById('heroSubtitle').value = content.heroSubtitle || DEFAULT_CONTENT.heroSubtitle;
  document.getElementById('heroTitle1').value = content.heroTitle1 || DEFAULT_CONTENT.heroTitle1;
  document.getElementById('heroTitle2').value = content.heroTitle2 || DEFAULT_CONTENT.heroTitle2;
  document.getElementById('heroDesc').value = content.heroDesc || DEFAULT_CONTENT.heroDesc;
  document.getElementById('matchDays').value = content.matchDays || DEFAULT_CONTENT.matchDays;
  document.getElementById('venueName').value = content.venueName || DEFAULT_CONTENT.venueName;
  document.getElementById('venueAddress').value = content.venueAddress || DEFAULT_CONTENT.venueAddress;
  document.getElementById('formatDesc').value = content.formatDesc || DEFAULT_CONTENT.formatDesc;
  document.getElementById('scheduleDesc').value = content.scheduleDesc || DEFAULT_CONTENT.scheduleDesc;
  document.getElementById('venueDesc').value = content.venueDesc || DEFAULT_CONTENT.venueDesc;
  document.getElementById('prizesDesc').value = content.prizesDesc || DEFAULT_CONTENT.prizesDesc;
  document.getElementById('rulesDesc').value = content.rulesDesc || DEFAULT_CONTENT.rulesDesc;
  document.getElementById('eligibilityDesc').value = content.eligibilityDesc || DEFAULT_CONTENT.eligibilityDesc;
  document.getElementById('contactEmail').value = content.contactEmail || DEFAULT_CONTENT.contactEmail;
  document.getElementById('contactPhone').value = content.contactPhone || DEFAULT_CONTENT.contactPhone;
  document.getElementById('socialInstagram').value = content.socialInstagram || DEFAULT_CONTENT.socialInstagram;
  document.getElementById('socialTwitter').value = content.socialTwitter || DEFAULT_CONTENT.socialTwitter;
  document.getElementById('socialYoutube').value = content.socialYoutube || DEFAULT_CONTENT.socialYoutube;
  document.getElementById('socialFacebook').value = content.socialFacebook || DEFAULT_CONTENT.socialFacebook;
  document.getElementById('registerTitle').value = content.registerTitle || DEFAULT_CONTENT.registerTitle;
  document.getElementById('registerSubtitle').value = content.registerSubtitle || DEFAULT_CONTENT.registerSubtitle;
  document.getElementById('minPlayers').value = content.minPlayers || DEFAULT_CONTENT.minPlayers;
  document.getElementById('maxPlayers').value = content.maxPlayers || DEFAULT_CONTENT.maxPlayers;
  document.getElementById('footerTagline').value = content.footerTagline || DEFAULT_CONTENT.footerTagline;
  document.getElementById('copyrightText').value = content.copyrightText || DEFAULT_CONTENT.copyrightText;
}

function handleContentSubmit(e) {
  e.preventDefault();
  content = {
    heroSubtitle: document.getElementById('heroSubtitle').value,
    heroTitle1: document.getElementById('heroTitle1').value,
    heroTitle2: document.getElementById('heroTitle2').value,
    heroDesc: document.getElementById('heroDesc').value,
    matchDays: parseInt(document.getElementById('matchDays').value),
    venueName: document.getElementById('venueName').value,
    venueAddress: document.getElementById('venueAddress').value,
    formatDesc: document.getElementById('formatDesc').value,
    scheduleDesc: document.getElementById('scheduleDesc').value,
    venueDesc: document.getElementById('venueDesc').value,
    prizesDesc: document.getElementById('prizesDesc').value,
    rulesDesc: document.getElementById('rulesDesc').value,
    eligibilityDesc: document.getElementById('eligibilityDesc').value,
    contactEmail: document.getElementById('contactEmail').value,
    contactPhone: document.getElementById('contactPhone').value,
    socialInstagram: document.getElementById('socialInstagram').value,
    socialTwitter: document.getElementById('socialTwitter').value,
    socialYoutube: document.getElementById('socialYoutube').value,
    socialFacebook: document.getElementById('socialFacebook').value,
    registerTitle: document.getElementById('registerTitle').value,
    registerSubtitle: document.getElementById('registerSubtitle').value,
    minPlayers: parseInt(document.getElementById('minPlayers').value),
    maxPlayers: parseInt(document.getElementById('maxPlayers').value),
    footerTagline: document.getElementById('footerTagline').value,
    copyrightText: document.getElementById('copyrightText').value
  };
  saveData();
  alert('Website content saved successfully! Refresh the main website to see changes.');
}

<<<<<<< HEAD
// ==================== REGISTRATIONS ====================
function renderRegistrations() {
  const container = document.getElementById('registrationsList');
  const badge = document.getElementById('regCount');

  if (badge) {
    badge.textContent = registrations.length;
  }

  if (!registrations || registrations.length === 0) {
    container.innerHTML = '<p style="color: var(--text-dim); text-align: center; padding: 40px;">No team registrations yet. When teams register on the main site, they will appear here!</p>';
    return;
  }

  container.innerHTML = registrations.map((reg, idx) => {
    const statusClass = reg.status === 'Approved' ? 'status-approved' : reg.status === 'Rejected' ? 'status-rejected' : 'status-pending';
    const dateStr = reg.submittedAt ? new Date(reg.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Recent';

    return `
      <div class="registration-card">
        <div class="reg-info">
          <div class="reg-title">
            <span>${reg.teamName}</span>
            <span class="status-badge ${statusClass}">${reg.status || 'Pending'}</span>
          </div>
          <div class="reg-meta">
            <span><i class="fas fa-user"></i> ${reg.captainName}</span>
            <span><i class="fas fa-phone"></i> ${reg.phone}</span>
            <span><i class="fas fa-envelope"></i> ${reg.email}</span>
            <span><i class="fas fa-users"></i> ${reg.players} Players</span>
            <span><i class="fas fa-clock"></i> ${dateStr}</span>
          </div>
        </div>
        <div class="reg-actions">
          <button class="icon-btn" onclick="viewRegistration(${reg.id || idx})" title="View Details">
            <i class="fas fa-eye"></i> Details
          </button>
          <button class="icon-btn" style="color: var(--success);" onclick="updateRegistrationStatus(${reg.id || idx}, 'Approved')" title="Approve">
            <i class="fas fa-check"></i>
          </button>
          <button class="icon-btn" style="color: var(--gold);" onclick="updateRegistrationStatus(${reg.id || idx}, 'Pending')" title="Mark Pending">
            <i class="fas fa-hourglass-half"></i>
          </button>
          <button class="icon-btn" style="color: var(--danger);" onclick="updateRegistrationStatus(${reg.id || idx}, 'Rejected')" title="Reject">
            <i class="fas fa-xmark"></i>
          </button>
          <button class="icon-btn danger" onclick="deleteRegistration(${reg.id || idx})" title="Delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function viewRegistration(id) {
  const reg = registrations.find(r => r.id === id || registrations.indexOf(r) === id);
  if (!reg) return;

  const modal = document.getElementById('registrationModal');
  const details = document.getElementById('registrationDetails');
  const dateStr = reg.submittedAt ? new Date(reg.submittedAt).toLocaleString() : 'N/A';

  details.innerHTML = `
    <div class="detail-row">
      <span class="detail-label">Team Name:</span>
      <span class="detail-value">${reg.teamName}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Captain Name:</span>
      <span class="detail-value">${reg.captainName}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Phone:</span>
      <span class="detail-value"><a href="tel:${reg.phone}" style="color: var(--gold);">${reg.phone}</a></span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Email:</span>
      <span class="detail-value"><a href="mailto:${reg.email}" style="color: var(--gold);">${reg.email}</a></span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Players Count:</span>
      <span class="detail-value">${reg.players}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Status:</span>
      <span class="detail-value"><strong>${reg.status || 'Pending'}</strong></span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Submitted On:</span>
      <span class="detail-value">${dateStr}</span>
    </div>
    <div class="detail-row" style="flex-direction: column; align-items: flex-start; gap: 8px;">
      <span class="detail-label">Additional Message:</span>
      <div style="background: var(--bg); padding: 12px; border-radius: 6px; width: 100%; border: 1px solid var(--border); font-size: 0.9rem;">
        ${reg.message ? reg.message.replace(/\n/g, '<br>') : '<em>No message provided</em>'}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function updateRegistrationStatus(id, newStatus) {
  const regIndex = registrations.findIndex(r => r.id === id || registrations.indexOf(r) === id);
  if (regIndex !== -1) {
    registrations[regIndex].status = newStatus;
    saveData();
    renderRegistrations();
  }
}

function deleteRegistration(id) {
  if (confirm('Are you sure you want to delete this registration?')) {
    registrations = registrations.filter(r => r.id !== id && registrations.indexOf(r) !== id);
    saveData();
    renderRegistrations();
  }
}

function clearAllRegistrations() {
  if (registrations.length === 0) {
    alert('No registrations to clear.');
    return;
  }
  if (confirm('Are you sure you want to clear ALL registrations? This cannot be undone.')) {
    registrations = [];
    saveData();
    renderRegistrations();
  }
}

function exportRegistrationsCSV() {
  if (registrations.length === 0) {
    alert('No registrations to export.');
    return;
  }

  const headers = ['ID', 'Team Name', 'Captain Name', 'Phone', 'Email', 'Players', 'Status', 'Submitted At', 'Message'];
  const rows = registrations.map(r => [
    r.id || '',
    `"${(r.teamName || '').replace(/"/g, '""')}"`,
    `"${(r.captainName || '').replace(/"/g, '""')}"`,
    `"${(r.phone || '').replace(/"/g, '""')}"`,
    `"${(r.email || '').replace(/"/g, '""')}"`,
    r.players || '',
    r.status || 'Pending',
    `"${r.submittedAt || ''}"`,
    `"${(r.message || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `gladiator_registrations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==================== GALLERY MANAGEMENT ====================
function renderGallery() {
  const container = document.getElementById('galleryAdminGrid');
  if (!gallery || gallery.length === 0) {
    container.innerHTML = '<p style="color: var(--text-dim); text-align: center; padding: 40px; grid-column: 1/-1;">No custom gallery images. Default placeholders are being shown on the website. Click "Add Image" to upload or link pictures!</p>';
    return;
  }

  container.innerHTML = gallery.map(item => `
    <div class="gallery-admin-card">
      <div class="gallery-admin-img">
        ${item.image ? `<img src="${item.image}" alt="${item.caption}" style="width: 100%; height: 100%; object-fit: cover;" />` : `<i class="${item.icon || 'fas fa-futbol'}"></i>`}
      </div>
      <div class="gallery-admin-body">
        <div>
          <div class="gallery-admin-title">${item.caption}</div>
          <div class="gallery-admin-badge">${item.size === 'large' ? 'Large (2 columns)' : 'Normal (1 column)'}</div>
        </div>
        <div class="card-actions">
          <button class="icon-btn" onclick="editGallery(${item.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="icon-btn danger" onclick="deleteGallery(${item.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openGalleryModal(itemId = null) {
  editingId = itemId;
  const modal = document.getElementById('galleryModal');
  const title = document.getElementById('galleryModalTitle');
  const form = document.getElementById('galleryForm');
  const preview = document.getElementById('imagePreviewContainer');

  preview.style.display = 'none';

  if (itemId) {
    const item = gallery.find(g => g.id === itemId);
    title.textContent = 'Edit Gallery Image';
    document.getElementById('galleryId').value = item.id;
    document.getElementById('imageCaption').value = item.caption;
    document.getElementById('imageUrl').value = item.image && item.image.startsWith('http') ? item.image : '';
    document.getElementById('imageFile').value = '';
    document.getElementById('imageSize').value = item.size || 'normal';
    document.getElementById('imageIcon').value = item.icon || '';

    if (item.image) {
      document.getElementById('imagePreview').src = item.image;
      preview.style.display = 'block';
    }
  } else {
    title.textContent = 'Add Gallery Image';
    form.reset();
    document.getElementById('galleryId').value = '';
  }

  modal.classList.add('active');
}

function handleGallerySubmit(e) {
  e.preventDefault();
  const id = document.getElementById('galleryId').value;
  const previewImg = document.getElementById('imagePreview');
  const urlVal = document.getElementById('imageUrl').value;
  const previewVisible = document.getElementById('imagePreviewContainer').style.display !== 'none';

  const imageSrc = previewVisible ? previewImg.src : (urlVal || '');

  const galleryData = {
    id: id ? parseInt(id) : Date.now(),
    caption: document.getElementById('imageCaption').value,
    image: imageSrc,
    size: document.getElementById('imageSize').value,
    icon: document.getElementById('imageIcon').value || 'fas fa-futbol'
  };

  if (id) {
    const index = gallery.findIndex(g => g.id === parseInt(id));
    gallery[index] = galleryData;
  } else {
    gallery.push(galleryData);
  }

  saveData();
  renderGallery();
  closeModal('galleryModal');
}

function editGallery(id) {
  openGalleryModal(id);
}

function deleteGallery(id) {
  if (confirm('Are you sure you want to delete this gallery item?')) {
    gallery = gallery.filter(g => g.id !== id);
    saveData();
    renderGallery();
  }
}

=======
>>>>>>> origin/main
// ==================== UTILS ====================
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Make functions global for onclick handlers
window.editTeam = editTeam;
window.deleteTeam = deleteTeam;
window.editFixture = editFixture;
window.deleteFixture = deleteFixture;
window.editScorer = editScorer;
window.deleteScorer = deleteScorer;
<<<<<<< HEAD
window.viewRegistration = viewRegistration;
window.updateRegistrationStatus = updateRegistrationStatus;
window.deleteRegistration = deleteRegistration;
window.editGallery = editGallery;
window.deleteGallery = deleteGallery;
=======
>>>>>>> origin/main
window.closeModal = closeModal;

// Initialize
init();
