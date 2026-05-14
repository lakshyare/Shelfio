// ============================================
//   SHELFIO — APP.JS — PREMIUM EDITION
// ============================================

// ─── BOOK DATA ─────────────────────────────
// Only the forbidden book lives here by default.
// All real books come from Firebase.
const DEFAULT_BOOKS = [
  {
    id:       'forbidden',
    title:    'Forbidden Tome',
    author:   'Unknown',
    color:    '#000000',
    shelf:    'main',
    rating:   0,
    genre:    '???',
    buyLink:  '',
    coverUrl: '',
    backUrl:  '',
  },
];

// ─── STORAGE ───────────────────────────────
function getAllBooks() {
  try {
    const saved = localStorage.getItem('shelfio_books');
    return saved ? JSON.parse(saved) : DEFAULT_BOOKS;
  } catch(e) { return DEFAULT_BOOKS; }
}

function saveBooks(books) {
  localStorage.setItem('shelfio_books', JSON.stringify(books));
  if (window.saveToCloud) saveToCloud('shelfio', 'books', { list: books });
}

// ─── SEEDED SIZE ───────────────────────────
function seededRand(seed) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s += seed.charCodeAt(i);
  return (Math.sin(s) * 10000) % 1;
}

function seededBetween(seed, salt, min, max) {
  return min + Math.abs(seededRand(seed + salt)) * (max - min);
}

// ─── CREATE BOOK ───────────────────────────
function createBookEl(book) {
  const el = document.createElement('div');
  el.classList.add('book');
  el.dataset.id     = book.id;
  el.dataset.title  = book.title.toLowerCase();
  el.dataset.author = book.author.toLowerCase();

  const h = Math.round(
  seededBetween(
    book.id,
    'h',
    150,
    230
  )
);

const w = Math.round(
  seededBetween(
    book.id,
    'w',
    42,
    72
  )
);

  el.style.height     = h + 'px';
  el.style.width      = w + 'px';
  el.style.background = buildSpine(book.color, book.id);
  if (
  !el.classList.contains(
    'spine-deep-work'
  ) &&
  !el.classList.contains(
    'spine-wimpy'
  )
) {

  el.style.background =
    book.color
}
  el.style.boxShadow  = `inset -3px 0 6px rgba(0,0,0,0.45),
                         inset 2px 0 4px rgba(255,255,255,0.05),
                         1px 0 8px rgba(0,0,0,0.6)`;

const usedSpecialSpine =
  applySpecialSpine(
    el,
    book
  )

if (!usedSpecialSpine) {

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'book-title'
  )

  titleEl.textContent =
    book.title

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'book-author'
  )

  authorEl.textContent =
    book.author

  el.appendChild(authorEl)
}

  // Click handler
  el.addEventListener('click', () => {
    // Deselect others
    document.querySelectorAll('.book.selected').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    openBookCard(book);

    // Forbidden easter egg
    if (book.id === 'forbidden' && window.triggerForbiddenBook) {
      triggerForbiddenBook();
    }
  });

  const tilt =
    seededBetween(
      book.id,
      'tilt',
      -1.2,
      1.2
    )

  el.style.transform =
    `rotate(${tilt}deg)`

  return el;
}

// ─── SPINE ─────────────────────────────────
function buildSpine(hex, id='') {

  const light = lighten(hex, 10)
  const dark  = lighten(hex, -18)

  // deterministic texture shift
  let seed = 0

  for (let i = 0; i < id.length; i++) {
    seed += id.charCodeAt(i)
  }

  const angle =
    (seed % 8) - 4

  const grain =
    seed % 2 === 0
      ? 'rgba(255,255,255,0.035)'
      : 'rgba(0,0,0,0.05)'

  return `

    linear-gradient(
      ${angle}deg,

      ${dark} 0%,
      ${hex} 18%,
      ${light} 52%,
      ${hex} 76%,
      ${dark} 100%
    ),

    repeating-linear-gradient(
      to bottom,

      ${grain} 0px,
      ${grain} 1px,

      transparent 1px,
      transparent 5px
    )

  `
}

function lighten(hex, amt) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.min(255, (n >> 16) + amt);
  const g = Math.min(255, ((n >> 8) & 0xff) + amt);
  const b = Math.min(255, (n & 0xff) + amt);
  return `rgb(${r},${g},${b})`;
}

// ─── RENDER SHELVES ────────────────────────
function renderShelves() {
  const books    = getAllBooks();
  const shelfIds = ['main','recommended','recent','favourites'];

  shelfIds.forEach(shelfId => {
    const row   = document.getElementById(`shelf-${shelfId}`);
    const count = document.getElementById(`count-${shelfId}`);
    if (!row) return;
    row.innerHTML = '';

    const shelfBooks = books.filter(b => b.shelf === shelfId);
    const infiniteLoop =
  shelfBooks.length > 12;

const extendedBooks =
  infiniteLoop

    ? [
        ...shelfBooks,
        ...shelfBooks,
        ...shelfBooks
      ]

    : shelfBooks;

    extendedBooks.forEach(
  book =>
    row.appendChild(
      createBookEl(book)
    )
);
if (infiniteLoop) {

  requestAnimationFrame(() => {

    row.scrollLeft =
      row.scrollWidth / 3;

  });

}

if (infiniteLoop) {

let scrollTimeout;

row.addEventListener(
  'scroll',
  () => {

    clearTimeout(
      scrollTimeout
    );

    scrollTimeout =
      setTimeout(() => {

        const third =
          row.scrollWidth / 3;

        if (
          row.scrollLeft <
          third * 0.5
        ) {

          row.scrollLeft +=
            third;
        }

        if (
          row.scrollLeft >
          third * 1.5
        ) {

          row.scrollLeft -=
            third;
        }

      }, 120);

  }
);
}

    if (shelfBooks.length === 0) {
      const empty = document.createElement('p');
      empty.style.cssText = `
        color:rgba(200,180,130,0.18);
        font-style:italic;
        font-size:14px;
        padding:20px;
        margin:auto;
        align-self:center;
      `;
      empty.textContent = 'No books here yet...';
      row.appendChild(empty);
    }

    if (count) {
      count.textContent = `${shelfBooks.length} volume${shelfBooks.length !== 1 ? 's' : ''}`;
    }
  });
}

// ─── BOOK CARD ─────────────────────────────
let currentBook  = null;
let coverFlipped = false;

function openBookCard(book) {
  currentBook  = book;
  coverFlipped = false;
  const books = getAllBooks();

  // Info
  document.getElementById('card-title').textContent  = book.title;
  document.getElementById('card-author').textContent = `~ ${book.author}`;
  document.getElementById('card-rating').textContent = book.rating
    ? `Rating: ${book.rating}`
    : 'Rating: N/A';
  document.getElementById('card-genre').textContent  = book.genre || '';
  document.getElementById('book-card-spine-color').style.background = book.color;

  // Cover images
  const frontImg = document.getElementById('cover-img-front');
  const backImg  = document.getElementById('cover-img-back');
  const phFront  = document.getElementById('cover-ph-front');
  const phBack   = document.getElementById('cover-ph-back');

  if (book.coverUrl) {
    frontImg.src = book.coverUrl;
    frontImg.style.display = 'block';
    phFront.style.display  = 'none';
  } else {
    frontImg.style.display = 'none';
    phFront.style.display  = 'flex';
    phFront.querySelector('.cover-ph-color').style.background = buildSpine(book.color, book.id);
  }

  if (book.backUrl) {
    backImg.src = book.backUrl;
    backImg.style.display = 'block';
    phBack.style.display  = 'none';
  } else {
    backImg.style.display = 'none';
    phBack.style.display  = 'flex';
  }

  // Reset flip
  const inner = document.getElementById('cover-flip-inner-3d');
  if (inner) inner.classList.remove('flipped');

  // Fav state
  const isFav = books.find(b => b.id === book.id)?.shelf === 'favourites';
  document.getElementById('btn-fav').classList.toggle('active', isFav);

  // Open card
  document.getElementById('book-card-overlay').style.pointerEvents = 'all';
  document.getElementById('book-card').classList.add('open');
}

function closeBookCard() {
  document.getElementById('book-card').classList.remove('open');
  document.querySelectorAll('.book.selected').forEach(b => b.classList.remove('selected'));
  setTimeout(() => {
    document.getElementById('book-card-overlay').style.pointerEvents = 'none';
  }, 450);
  currentBook = null;
}

// Cover flip
document.getElementById('cover-flip').addEventListener('click', () => {
  coverFlipped = !coverFlipped;
  const inner = document.getElementById('cover-flip-inner-3d');
  if (inner) inner.classList.toggle('flipped', coverFlipped);
});

// Make the 3D inner div
const coverFlipEl = document.getElementById('cover-flip');
const inner3d = document.createElement('div');
inner3d.id = 'cover-flip-inner-3d';
// Move children into it
while (coverFlipEl.firstChild) inner3d.appendChild(coverFlipEl.firstChild);
coverFlipEl.appendChild(inner3d);

// ─── CARD BUTTONS ──────────────────────────
document.getElementById('btn-fav').addEventListener('click', () => {
  if (!currentBook) return;
  const books = getAllBooks();
  const book  = books.find(b => b.id === currentBook.id);
  if (!book) return;
  const wasFav = book.shelf === 'favourites';
  book.shelf = wasFav ? 'main' : 'favourites';
  saveBooks(books);
  renderShelves();
  closeBookCard();
  showToast(wasFav ? 'Removed from Favourites' : 'Added to Favourites');
});

document.getElementById('btn-read').addEventListener('click', () => {
  if (!currentBook) return;
  const books = getAllBooks();
  const book  = books.find(b => b.id === currentBook.id);
  if (book) { book.shelf = 'recent'; saveBooks(books); renderShelves(); }
  const readBook = currentBook;
  closeBookCard();
  setTimeout(() => openReader(readBook), 460);
});

document.getElementById('btn-buy').addEventListener('click', () => {
  if (!currentBook) return;
  if (currentBook.buyLink) {
    window.open(currentBook.buyLink, '_blank');
  } else {
    showToast('No buy link added for this book yet.');
  }
});

document.getElementById('book-card-close').addEventListener('click', closeBookCard);
document.getElementById('book-card-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('book-card-overlay')) closeBookCard();
});

// ─── READER ────────────────────────────────
let readerPage = 1;

function openReader(book) {
  document.getElementById('reader-title').textContent = book.title;
  readerPage = 1;
  document.getElementById('page-number').textContent = 'Page 1';
  document.getElementById('reader-overlay').classList.add('open');
}

document.getElementById('reader-close').addEventListener('click', () => {
  document.getElementById('reader-overlay').classList.remove('open');
});

document.getElementById('next-page').addEventListener('click', () => {
  readerPage++;
  flipPage();
});

document.getElementById('prev-page').addEventListener('click', () => {
  if (readerPage > 1) { readerPage--; flipPage(); }
});

function flipPage() {
  const page = document.getElementById('reader-page');
  document.getElementById('page-number').textContent = `Page ${readerPage}`;
  page.classList.add('page-flipping');
  page.addEventListener('animationend', () => page.classList.remove('page-flipping'), { once: true });
}

// ─── SEARCH ────────────────────────────────
let searchVisible = false;
let searchCooldown = false;
let searchCooldownTimer = null;

document.addEventListener('mousemove', e => {
  if (e.clientY < 55 && !searchVisible && !searchCooldown) {
    searchVisible = true;
    document.getElementById('search-wrap').classList.add('visible');
    document.getElementById('search-bar').focus();
  }
});

document.getElementById('search-close').addEventListener('click', () => {
  searchVisible = false;
  searchCooldown = true;
  document.getElementById('search-wrap').classList.remove('visible');
  document.getElementById('search-bar').value = '';
  filterBooks('');

  clearTimeout(searchCooldownTimer);
  searchCooldownTimer = setTimeout(() => {
    searchCooldown = false;
  }, 1500);
});

document.getElementById('search-bar').addEventListener('input', e => {
  filterBooks(e.target.value.toLowerCase().trim());
});

function filterBooks(query) {
  document.querySelectorAll('.book').forEach(book => {
    const match = !query
      || book.dataset.title.includes(query)
      || book.dataset.author.includes(query);
    book.style.opacity = match ? '1' : '0.1';
    book.style.outline = (match && query) ? '1px solid rgba(200,134,10,0.45)' : '';
  });
}

// ─── SETTINGS ──────────────────────────────
document.getElementById('settings-btn').addEventListener('click', () => {
  document.getElementById('settings-panel').classList.toggle('open');
});

document.getElementById('settings-close').addEventListener('click', () => {
  document.getElementById('settings-panel').classList.remove('open');
});

// Background change
document.querySelectorAll('.bg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const bg = btn.dataset.bg;
    document.getElementById('room-bg').style.backgroundImage = `url('${bg}')`;
    document.querySelectorAll('.bg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localStorage.setItem('shelfio_bg', bg);
    showToast('Background changed');
  });
});

// Load saved bg
const savedBg = localStorage.getItem('shelfio_bg');
if (savedBg) {
  document.getElementById('room-bg').style.backgroundImage = `url('${savedBg}')`;
  document.querySelectorAll('.bg-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.bg === savedBg);
  });
}

// Reset progress
document.getElementById('reset-btn').addEventListener('click', () => {
  const confirmed = window.confirm(
    'Reset all progress?\n\nThis will clear all your books, favourites, and reading history. This cannot be undone.'
  );
  if (confirmed) {
    localStorage.clear();
    showToast('Progress reset. Reloading...');
    setTimeout(() => window.location.reload(), 1200);
  }
});

// Shelf plank click (color glow)
document.querySelectorAll('.shelf-plank').forEach(plank => {
  plank.addEventListener('click', () => {
    document.querySelectorAll('.shelf-plank').forEach(p => p.classList.remove('active'));
    plank.classList.toggle('active');
  });
});

// ─── ESCAPE KEY ────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeBookCard();
    document.getElementById('reader-overlay').classList.remove('open');
    document.getElementById('settings-panel').classList.remove('open');
  }
});

// ─── DUST PARTICLES ────────────────────────
function initDust() {
  const canvas = document.getElementById('dust-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 50 }, () => ({
    x:       Math.random() * canvas.width,
    y:       Math.random() * canvas.height,
    r:       Math.random() * 1.4 + 0.3,
    vx:      (Math.random() - 0.5) * 0.18,
    vy:      -Math.random() * 0.22 - 0.04,
    o:       Math.random() * 0.45 + 0.1,
    flicker: Math.random() * Math.PI * 2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.flicker += 0.018;
      if (p.y < -5) p.y = canvas.height + 5;
      if (p.x < -5) p.x = canvas.width  + 5;
      if (p.x > canvas.width + 5) p.x = -5;
      const alpha = p.o * (0.7 + Math.sin(p.flicker) * 0.3);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,170,80,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ─── TOAST ─────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDust();
  renderShelves();
  if (window.initEasterEggs) initEasterEggs();
});