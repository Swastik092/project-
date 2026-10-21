// ============================================================
// AKAAR STUDIO — APP.JS
// ============================================================


// ============================================================
// PRINCIPAL ARCHITECT PHOTOS
// ============================================================

const PRINCIPAL_IMAGES = {
  ishwari:   'assets/team/ishwari-dasari.jpg',
  chirantan: 'assets/team/chirantan.jpg'
};

const ishwariEl = document.getElementById('ishwari-image') || document.getElementById('tanvi-image');
const chirantanEl = document.getElementById('chirantan-image') || document.getElementById('aryan-image');

if (ishwariEl) ishwariEl.src = PRINCIPAL_IMAGES.ishwari;
if (chirantanEl) chirantanEl.src = PRINCIPAL_IMAGES.chirantan;


// ============================================================
// ARCHITECTURAL PHOTOGRAPHS — all fresh, none from original
// ============================================================

const realImages = [
  // 01 — signature villa in Maharashtra
  'assets/home-hero.jpg',
  // 02 — minimal white facade
  'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=85',
  // 03 — contemporary glass building
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85',
  // 04 — warm wood interior
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
  // 05 — airy living space
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85',
  // 06 — concrete & greenery
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
  // 07 — modern bedroom
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
  // 08 — open plan living
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85',
  // 09 — minimal kitchen
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85',
  // 10 — warm dining area
  'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=85',
  // 11 — exterior modern house
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=85',
  // 12 — villa with pool
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
  // 13 — curved architecture
  'https://images.unsplash.com/photo-1464146072230-91cabc968bdb?auto=format&fit=crop&w=1200&q=85',
  // 14 — layered facade
  'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85',
  // 15 — urban mixed use
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85',
  // 16 — residential block
  'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1200&q=85',
  // 17 — arched interior
  'https://images.unsplash.com/photo-1525016460-c41e22b6f870?auto=format&fit=crop&w=1200&q=85',
  // 18 — studio workspace
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  // 19 — raw concrete loft
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1200&q=85',
  // 20 — glazed courtyard
  'https://images.unsplash.com/photo-1497263010432-1d53ec58d428?auto=format&fit=crop&w=1200&q=85',
  // 21 — timber pergola house
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
  // 22 — white terrace residence
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=85',
  // 23 — hillside home
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85',
  // 24 — office atrium
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
  // 25 — boutique retail
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
  // 26 — co-working space
  'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=85',
  // 27 — rooftop garden
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=85',
  // 28 — housing block
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
  // 29 — cluster housing
  'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=85',
  // 30 — community courtyard
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=85'
];


// ============================================================
// PROJECT DATA
// ============================================================

const projectData = [
  ['Courtyard Residence, Karad', 'residential'],
  ['The Ivory Villa',         'residential'],
  ['Mossy Lane Residence',    'residential'],
  ['Skywell House',           'residential'],
  ['Malviya Residence',       'residential'],
  ['Hilltop House',           'residential'],
  ['Stone & Light',           'residential'],
  ['The Orchard House',       'residential'],
  ['Baner Bungalow',          'residential'],
  ['Plot 12 House',           'residential'],
  ['Rain House',              'residential'],
  ['Terrace Residence',       'residential'],
  ['Dusk House',              'residential'],
  ['The Raw House',           'residential'],
  ['Mango Tree House',        'residential'],
  ['Garden Court Villa',      'residential'],
  ['City Refuge',             'residential'],
  ['Northend Residence',      'residential'],
  ['Wrapped House',           'residential'],
  ['Porch House',             'residential'],

  ['Studio Zero',             'commercial'],
  ['The Grid Office',         'commercial'],
  ['Lane House Studios',      'commercial'],
  ['Market Row Retail',       'commercial'],
  ['Junction Hub',            'commercial'],

  ['The Open Block',          'housing'],
  ['Bloom Apartments',        'housing'],
  ['Riverside Cluster',       'housing'],
  ['Block 18',                'housing'],
  ['Sarang Housing',          'housing']
];


// Build project objects
const projects = projectData.map((project, index) => ({
  name:  project[0],
  type:  project[1],
  image: realImages[index]
}));


// ============================================================
// PROJECT GRID — RENDER
// ============================================================

const grid = document.getElementById('project-grid');

function renderProjects(filter = 'all') {
  if (!grid) return;

  const filtered = projects.filter(p => filter === 'all' || p.type === filter);

  grid.innerHTML = filtered.map((project, index) => `
    <article class="project">
      <div class="project-img">
        <img
          src="${project.image}"
          alt="${project.name} architectural photograph"
          loading="lazy"
          onerror="this.onerror=null; this.src='${realImages[0]}';"
        >
      </div>
      <div class="project-meta">
        <span>${String(index + 1).padStart(2, '0')} · ${project.type}</span>
        <span>${project.name}</span>
      </div>
    </article>
  `).join('');
}


// ============================================================
// PROJECT FILTERS
// ============================================================

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});


// ============================================================
// CONTACT FORM
// ============================================================
// TODO: Replace the fetch URL with your Google Form action
// endpoint once you share the form link.

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();

    const status = document.getElementById('form-status');
    status.textContent = 'Sending…';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const data = await response.json();
      status.textContent = data.message || 'Submitted successfully.';
      if (data.ok) contactForm.reset();

    } catch (error) {
      status.textContent = 'Something went wrong. Please try again.';
    }
  });
}


// ============================================================
// ANIMATED COUNTERS
// ============================================================

const numbersSection  = document.querySelector('.numbers');
const counters        = document.querySelectorAll('.counter');
let   countersStarted = false;

function animateCounter(element) {
  const target    = Number(element.dataset.target);
  const suffix    = element.dataset.suffix  || '';
  const prefix    = element.dataset.prefix  || '';
  const isDecimal = element.dataset.decimal === 'true';
  const duration  = 1500;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const value    = target * eased;

    element.textContent = prefix +
      (isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString('en-IN')) +
      suffix;

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

if (numbersSection && counters.length) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      counters.forEach(animateCounter);
      observer.disconnect();
    }
  }, { threshold: 0.35 });

  observer.observe(numbersSection);
}


// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================

const navbar = document.querySelector('.nav');
if (navbar) {
  const handleScroll = () => {
    if (window.scrollY > 25) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}


// ============================================================
// INITIAL RENDER
// ============================================================

renderProjects();
