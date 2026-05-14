function applySpecialSpine(
  el,
  book
) {

  const lowerTitle =
    (book.title || '')
    .toLowerCase()

  /* ───────── DEEP WORK ───────── */

  if (
    lowerTitle.includes(
      'deep work'
    )
  ) {

    el.classList.add(
      'spine-deep-work'
    )


    const titleEl =
      document.createElement('div')

    titleEl.classList.add(
      'deepwork-title'
    )

    titleEl.textContent =
      'DEEP WORK'

    el.appendChild(titleEl)

    const authorEl =
      document.createElement('div')

    authorEl.classList.add(
      'deepwork-author'
    )

    authorEl.textContent =
      'CAL NEWPORT'

    el.appendChild(authorEl)

    return true
  }

  /* ───────── WIMPY KID ───────── */

  if (
    lowerTitle.includes(
      'wimpy kid'
    )
  ) {

    el.classList.add(
      'spine-wimpy'
    )

    const paper =
      document.createElement('div')

    paper.classList.add(
      'wimpy-paper'
    )

    const titleEl =
      document.createElement('div')

    titleEl.classList.add(
      'wimpy-title'
    )

    titleEl.textContent =
      'Diary of a Wimpy Kid'

    paper.appendChild(titleEl)

    const subtitle =
      document.createElement('div')

    subtitle.classList.add(
      'wimpy-subtitle'
    )

    subtitle.textContent =
      'THE DEEP END'

    paper.appendChild(subtitle)

    const authorEl =
      document.createElement('div')

    authorEl.classList.add(
      'wimpy-author'
    )

    authorEl.textContent =
      'Jeff Kinney'

    paper.appendChild(authorEl)

    el.appendChild(paper)

    return true
  }
/* ───────────────────────────── */
/* ATOMIC HABITS */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'atomic habits'
  )
) {

  el.classList.add(
    'spine-atomic'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'atomic-title'
  )

  titleEl.textContent =
    'ATOMIC HABITS'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'atomic-author'
  )

  authorEl.textContent =
    'JAMES CLEAR'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* 1984 */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    '1984'
  )
) {

  el.classList.add(
    'spine-1984'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'n1984-title'
  )

  titleEl.textContent =
    '1984'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'n1984-author'
  )

  authorEl.textContent =
    'GEORGE ORWELL'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* DUNE */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'dune'
  )
) {

  el.classList.add(
    'spine-dune'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'dune-title'
  )

  titleEl.textContent =
    'DUNE'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'dune-author'
  )

  authorEl.innerHTML =
  'FRANK<br>HERBERT'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* HARRY POTTER */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'harry potter'
  )
) {

  el.classList.add(
    'spine-hp'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'hp-title'
  )

  titleEl.textContent =
    'HARRY POTTER'

  el.appendChild(titleEl)

  const collectionEl =
  document.createElement('div')

collectionEl.classList.add(
  'hp-collection'
)

collectionEl.innerHTML =
  'THE COMPLETE<br>COLLECTION'

el.appendChild(collectionEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'hp-author'
  )

  authorEl.innerHTML =
  'J.K.<br>ROWLING'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* SAPIENS */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'sapiens'
  )
) {

  el.classList.add(
    'spine-sapiens'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'sapiens-title'
  )

  titleEl.textContent =
    'SAPIENS'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'sapiens-author'
  )

  authorEl.innerHTML =
  'YUVAL<br>NOAH<br>HARARI'

  el.appendChild(authorEl)

  const subtitleEl =
  document.createElement('div')

subtitleEl.classList.add(
  'sapiens-subtitle'
)

subtitleEl.innerHTML =
  'A BRIEF<br>HISTORY OF<br>HUMANKIND'

el.appendChild(subtitleEl)

  return true
}

/* ───────────────────────────── */
/* THE HOBBIT */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'hobbit'
  )
) {

  el.classList.add(
    'spine-hobbit'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'hobbit-title'
  )

  titleEl.innerHTML =
  '<span class="hobbit-the">THE</span> HoBBIT'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'hobbit-author'
  )

  authorEl.innerHTML =
    'J.R.R.<br>TOLKIEN'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* THE ALCHEMIST */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'alchemist'
  )
) {

  el.classList.add(
    'spine-alchemist'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'alchemist-title'
  )

  titleEl.textContent =
    'THE ALCHEMIST'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'alchemist-author'
  )

  authorEl.innerHTML =
    'PAULO COELHO'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* PSYCHOLOGY OF MONEY */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'psychology of money'
  )
) {

  el.classList.add(
    'spine-money'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'money-title'
  )

  titleEl.textContent =
    'PSYCHOLOGY OF MONEY'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'money-author'
  )

  authorEl.innerHTML =
    'MORGAN<br>HOUSEL'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* PERCY JACKSON */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'percy jackson'
  )
) {

  el.classList.add(
    'spine-percy'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'percy-title'
  )

  titleEl.textContent =
    'PERCY JACKSON'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'percy-author'
  )

  titleEl.innerHTML =
  'PERCY<br>JACKSON'

  el.appendChild(authorEl)

  const greekEl =
  document.createElement('div')

greekEl.classList.add(
  'percy-greek'
)

greekEl.textContent =
  'GREEK GODS'

el.appendChild(greekEl)

  return true
}

/* ───────────────────────────── */
/* STEVE JOBS */
/* ───────────────────────────── */

if (
  lowerTitle.includes(
    'steve jobs'
  )
) {

  el.classList.add(
    'spine-jobs'
  )

  const titleEl =
    document.createElement('div')

  titleEl.classList.add(
    'jobs-title'
  )

  titleEl.textContent =
    'STEVE JOBS'

  el.appendChild(titleEl)

  const authorEl =
    document.createElement('div')

  authorEl.classList.add(
    'jobs-author'
  )

  authorEl.textContent =
  'BY WALTER ISAACSON'

  el.appendChild(authorEl)

  return true
}

/* ───────────────────────────── */
/* GENERIC SPINES */
/* ───────────────────────────── */

const archetypes = [

  'classic',

  'thriller',

  'fantasy',

  'academic',

  'minimal'
]

const genre =
  (
    book.genre || ''
  ).toLowerCase()

let archetype =
  'minimal'

/* FANTASY */

if (

  genre.includes('fantasy') ||

  genre.includes('magic') ||

  genre.includes('mythology')
) {

  archetype = 'fantasy'

}

/* THRILLER */

else if (

  genre.includes('thriller') ||

  genre.includes('mystery') ||

  genre.includes('crime') ||

  genre.includes('horror')
) {

  archetype = 'thriller'

}

/* ACADEMIC */

else if (

  genre.includes('history') ||

  genre.includes('science') ||

  genre.includes('academic') ||

  genre.includes('philosophy') ||

  genre.includes('politics')
) {

  archetype = 'academic'

}

/* CLASSIC */

else if (

  genre.includes('classic') ||

  genre.includes('romance') ||

  genre.includes('fiction')
) {

  archetype = 'classic'

}

/* SELF HELP / PRODUCTIVITY */

else if (

  genre.includes('self-help') ||

  genre.includes('productivity') ||

  genre.includes('business') ||

  genre.includes('finance') ||

  genre.includes('psychology')
) {

  archetype = 'thriller'

}

/* SCIFI */

else if (

  genre.includes('sci-fi') ||

  genre.includes('science fiction')
) {

  archetype = 'fantasy'
}

el.classList.add(
  `generic-${archetype}`
)

const variant =
  (
    book.title.length % 5
  ) + 1

el.classList.add(
  `variant-${variant}`
)

const composition =
  (
    book.author.length % 4
  ) + 1

el.classList.add(
  `composition-${composition}`
)

const genericTitle =
  document.createElement('div')

genericTitle.classList.add(
  'generic-title'
)

const titleLength =
  (
    book.title || ''
  ).length

if (titleLength > 30) {

  genericTitle.classList.add(
    'title-xs'
  )

} else if (

  titleLength > 22
) {

  genericTitle.classList.add(
    'title-sm'
  )

} else if (

  titleLength > 14
) {

  genericTitle.classList.add(
    'title-md'
  )

} else {

  genericTitle.classList.add(
    'title-lg'
  )
}

genericTitle.textContent =
  book.title || 'UNTITLED'

  const formattedTitle =
  (
    book.title || ''
  )

.replace(
  /: /g,
  ':\n'
)

.replace(
  / - /g,
  '\n'
)

.replace(
  / and /gi,
  '\n'
)

genericTitle.innerHTML =
  formattedTitle.replace(
    /\n/g,
    '<br>'
  )
  
el.appendChild(
  genericTitle
)



const genericAuthor =
  document.createElement('div')

genericAuthor.classList.add(
  'generic-author'
)

genericAuthor.textContent =
  (
    book.author ||
    'UNKNOWN'
  ).toUpperCase()

el.appendChild(
  genericAuthor
)

return true

  return false
}