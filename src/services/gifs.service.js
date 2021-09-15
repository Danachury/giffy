import { apiUrl } from './api'

export default function getGifs({ keyword, lang } = {}) {
  return fetch(apiUrl(keyword, lang))
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
