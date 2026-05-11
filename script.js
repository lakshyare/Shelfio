const supabaseUrl = 'https://supabase.com/dashboard/project/kxepdnnzrinvyqaznpwu/settings/api-keys'

const supabaseKey = 'sb_publishable_FoyuG0mWOQuo0S_-VPcFHA_JzmIgTp7'

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
)

async function getBooks() {
  const { data, error } = await supabaseClient
    .from('books')
    .select('*')

  console.log(data)

  if (error) {
    console.log(error)
  }
}

getBooks()