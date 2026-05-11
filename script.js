const supabaseUrl = 'https://ebdndsffthkwfahbegeg.supabase.co'
const supabaseKey = 'sb_publishable_okyn4fdA3oKUWtdsuZVRiQ_94n2hVbd'

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
)
async function getBooks() {
  const { data, error } = await supabaseClient
    .from('books')
    .select('*')

  console.log(data)
  console.log(error)
}

getBooks()