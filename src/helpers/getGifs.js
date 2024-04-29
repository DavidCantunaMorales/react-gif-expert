const API_KEY = 'WAvOuzj20MKKF527Zlto3VxZd4C0ccbQ'

export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`

  const response = await fetch(URL)
  const { data } = await response.json()

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))

  console.log(gifs)
  return gifs
}
