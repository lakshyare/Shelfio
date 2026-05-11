const supabaseUrl = 'https://kxepdnnzrinvyqaznpwu.supabase.co'

const supabaseKey = 'sb_publishable_FoyuG0mWOQuo0S_-VPcFHA_JzmIgTp7'

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
)

async function getBooks() {

  const { data, error } = await supabaseClient
    .from('books')
    .select('*')

  if (error) {
    console.log(error)
    return
  }

  const container = document.getElementById('books-container')

  container.innerHTML = ''

  data.forEach(book => {

    const card = document.createElement('div')

    card.classList.add('book-card')

    card.innerHTML = `
      <img class="front-cover" src="${book.front_cover_url}" alt="${book.title}">

      <div class="book-info">

        <h2>${book.title}</h2>

        <p class="author">${book.author}</p>

        <p class="genre">${book.genre}</p>

        <p class="rating">⭐ ${book.rating}</p>

        <p class="description">
          ${book.description}
        </p>

        <div class="extra-covers">

          <img src="${book.back_cover_url}" alt="Back Cover">

          <img src="${book.spine_cover_url}" alt="Spine Cover">

        </div>

        <a href="${book.buy_link}" target="_blank">
          Buy Book
        </a>

      </div>
    `

    container.appendChild(card)

  })

}

getBooks()