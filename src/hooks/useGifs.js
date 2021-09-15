import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/gifs.service'
import GifsContext from '../contexts/GifsContext'

export default function useGifs({ keyword, lang = 'en' } = {}) {
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const { gifs, setGifs } = useContext(GifsContext)

  const fetchData = () => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('last_filter') || 'random'
    getGifs({ keyword: keywordToUse, lang: lang })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('last_filter', keyword)
        setLoading(false)
      })
  }
  useEffect(fetchData, [keyword, lang, setGifs])

  return { loading, gifs }
}
