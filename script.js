const supabaseUrl =
  'https://kxepdnnzrinvyqaznpwu.supabase.co'

const supabaseKey =
  'sb_publishable_FoyuG0mWOQuo0S_-VPcFHA_JzmIgTp7'

const supabaseClient =
  supabase.createClient(
    supabaseUrl,
    supabaseKey
)

async function syncBooks() {

  const { data, error } =
    await supabaseClient
      .from('books')
      .select('*')

  console.log(data)
  console.log(error)

  if (error) return

  // TRANSFORM SUPABASE DATA
  const transformed =
    data.map(book => ({

      id:
        (
          book.title +
          '-' +
          (book.author || '')
        )
        .toLowerCase()
        .replace(/\s+/g, '-'),

      title:
        book.title || 'Unknown',

      author:
        book.author || 'Unknown',

      color:
  book.spine_color ||
  randomColor(),

      shelf:
        'main',

      rating:
        book.rating || 0,

      genre:
        book.genre || '',

      buyLink:
        book.buy_link || '',

      coverUrl:
        book.front_cover_url || '',

      backUrl:
        book.back_cover_url || ''

    }))

  // SAVE TO LOCAL STORAGE
  localStorage.setItem(
    'shelfio_books',
    JSON.stringify([
      ...DEFAULT_BOOKS,
      ...transformed
    ])
  )

  // RENDER SHELVES
  renderShelves()

}

function randomColor() {

  const colors = [
    '#2d1b1b',
    '#1e293b',
    '#3f3f46',
    '#172554',
    '#3b2f2f',
    '#3c2415',
    '#1f3b2d',
    '#2b2d42',
    '#3d2c29',
    '#2e3440'
]

  return colors[
    Math.floor(
      Math.random() * colors.length
    )
  ]

}

syncBooks()