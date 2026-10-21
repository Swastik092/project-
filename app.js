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
  // 01 — signature villa in Maharashtra (local)
  'assets/home-hero.jpg',
  // 02 — sunlit minimal living room
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  // 03 — contemporary concrete facade
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  // 04 — warm wood interior with skylight
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
  // 05 — modern white kitchen
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85',
  // 06 — courtyard with greenery
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  // 07 — elegant bedroom with natural light
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
  // 08 — open plan living room
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  // 09 — dining space with pendant lights
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
  // 10 — terracotta and stone facade
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
  // 11 — exterior modern residence
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
  // 12 — villa with pool at dusk
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
  // 13 — spiral staircase from above
  'https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?auto=format&fit=crop&w=1200&q=85',
  // 14 — raw concrete interior passage
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
  // 15 — urban apartment facade
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  // 16 — residential balcony detail
  'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1200&q=85',
  // 17 — arched corridor with light
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
  // 18 — architect studio with models
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85',
  // 19 — exposed brick loft interior
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
  // 20 — glass facade with reflections
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
  // 21 — timber pergola house exterior
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
  // 22 — warm living room with fireplace
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85',
  // 23 — hillside home with landscape
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85',
  // 24 — office interior with daylight
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
  // 25 — boutique hotel lobby
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
  // 26 — co-working space with plants
  'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1200&q=85',
  // 27 — rooftop terrace with seating
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
  // 28 — housing block with balconies
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85',
  // 29 — cluster housing courtyard
  'https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?auto=format&fit=crop&w=1200&q=85',
  // 30 — community pavilion
  'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1200&q=85'
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
