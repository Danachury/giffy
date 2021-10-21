import { apiUrl } from './api'

export default function getGifs({ keyword, lang, limit = 25, page = 0 } = {}) {
  const offset = limit * page
  return fetch(apiUrl(keyword, lang, limit, offset))
    .then(res => res.json())
    .then(fromResponseToGifs)
}

const fromResponseToGifs = (response) => {
  const { data = [] } = response
  return data.map(obj => {
    const { id, title, images } = obj
    const { url } = images.downsized_medium
    return { id, title, url }
  })
}
