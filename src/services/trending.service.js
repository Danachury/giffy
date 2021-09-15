import { API_KEY, API_URL } from './api'

export default function getTrendingTerms() {
  return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(fromResponseToTrends)
}

const fromResponseToTrends = (response) => {
  const { data = [] } = response
  return data
}
