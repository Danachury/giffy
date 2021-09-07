const apiKey = 'qoxU186F30tFORytaO5U3N6gYdTAEpuw'

const API_URL = (keyword, lang) => `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=${lang}`

export default function getGifs({ keyword = 'panda', lang = 'en' } = {}) {
  return fetch(API_URL(keyword, lang))
    .then(res => res.json())
    .then(response => {
      const { data } = response
      return data.map(obj => {
        const { images, title, id } = obj
        const { url } = images.downsized_medium
        return { id, title, url }
      })
    })
}
