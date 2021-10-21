export const API_KEY = 'qoxU186F30tFORytaO5U3N6gYdTAEpuw'
export const API_URL = 'https://api.giphy.com/v1'

export const apiUrl = (keyword, lang, limit, offset) =>
  `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=${lang}`
