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
        crypto.randomUUID(),

      title:
        book.title || 'Unknown',

      author:
        book.author || 'Unknown',

      color:
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

    '#7f1d1d',
    '#172554',
    '#3f3f46',
    '#3b0764',
    '#422006',
    '#14532d',
    '#1e293b'

  ]

  return colors[
    Math.floor(
      Math.random() * colors.length
    )
  ]

}

syncBooks()