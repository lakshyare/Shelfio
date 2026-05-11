const supabaseUrl = 'https://kxepdnnzrinvyqaznpwu.supabase.co'

const supabaseKey = 'sb_publishable_FoyuG0mWOQuo0S_-VPcFHA_JzmIgTp7'

const supabaseClient =
  supabase.createClient(
    supabaseUrl,
    supabaseKey
  )

// SEARCH BOOKS

async function searchBook() {

  const query =
    document.getElementById(
      'search-input'
    ).value.trim()

  if (!query) return

  const results =
    document.getElementById(
      'results'
    )

  results.innerHTML =
    '<p>Searching...</p>'

  try {

    const response =
      await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`
      )

    const data =
      await response.json()

    results.innerHTML = ''

    if (!data.docs.length) {

      results.innerHTML =
        '<p>No books found.</p>'

      return

    }

    data.docs.forEach(book => {

      const title =
        book.title || 'Unknown'

      const author =
        book.author_name?.[0] || 'Unknown'

      const genre =
        book.subject?.[0] || ''

      const cover =
        book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : ''

      const card =
        document.createElement('div')

      card.classList.add('book-card')

      card.innerHTML = `
      
        <img src="${cover}">

        <div class="book-info">

          <h2>${title}</h2>

          <p>${author}</p>

          <button>
            Add Book
          </button>

        </div>

      `

      card
        .querySelector('button')
        .addEventListener(
          'click',
          () => addBook({
            title,
            author,
            genre,
            cover
          })
        )

      results.appendChild(card)

    })

  } catch (error) {

    console.log(error)

    results.innerHTML =
      '<p>Error searching books.</p>'

  }

}

// DISPLAY BOOKS

function displayBooks(books) {

  const results =
    document.getElementById('results')

  results.innerHTML = ''

  books.forEach(book => {

    const info =
      book.volumeInfo

    const card =
      document.createElement('div')

    card.classList.add('book-card')

    card.innerHTML = `
    
      <img
        src="${info.imageLinks?.thumbnail || ''}"
        alt="${info.title}"
      >

      <div class="book-info">

        <h2>
          ${info.title}
        </h2>

        <p>
          ${info.authors?.join(', ') || 'Unknown'}
        </p>

        <button
          onclick='addBook(${JSON.stringify(info)})'
        >
          Add Book
        </button>

      </div>

    `

    results.appendChild(card)

  })

}

// SAVE TO SUPABASE

async function addBook(book) {

  const {
    error
  } = await supabaseClient
    .from('books')
    .insert([
      {

        title:
          book.title,

        author:
          book.author,

        genre:
          book.genre,

        rating: 0,

        description: '',

        front_cover_url:
          book.cover,

        back_cover_url: '',

        spine_cover_url: '',

        buy_link: `https://www.amazon.com/s?k=${encodeURIComponent(book.title)}`

      }
    ])

  if (error) {

    console.log(error)

    alert(
      'Error adding book'
    )

    return

  }

  alert(
    'Book added successfully'
  )

}

document
  .getElementById('search-input')
  .addEventListener('keypress', function(e) {

    if (e.key === 'Enter') {
      searchBook()
    }

})