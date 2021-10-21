import { useContext, useEffect, useState } from 'react'
import getGifs from 'services/gifs.service'
import GifsContext from 'contexts/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs({ keyword, lang = 'en' } = {}) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)
  const keywordToUse = keyword || localStorage.getItem('last_filter') || 'random'

  const fetchData = () => {
    setLoading(true)
    getGifs({ keyword: keywordToUse, lang: lang })
      .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('last_filter', keyword)
        setLoading(false)
      })
  }

  const loadNextPage = () => {
    if (page === INITIAL_PAGE)
      return
    setLoadingNextPage(true)
    getGifs({keyword: keywordToUse, lang: lang, page: page})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }

  useEffect(fetchData, [keyword, keywordToUse, lang, setGifs])
  useEffect(loadNextPage, [page, keywordToUse, lang, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
