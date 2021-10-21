import getTrendingTerms from '../../services/trending.service'
import Spinner from '../Spinner'
import Category from '../../pages/Category'
import { useEffect, useState } from 'react'

export default function TrendingSearches() {
  const [loading, setLoading] = useState(false)
  const [trends, setTrends] = useState([])
  const fetchData = () => {
    setLoading(true)
    getTrendingTerms()
      .then(trends => {
        setTrends(trends)
        setLoading(false)
      })
  }
  useEffect(fetchData, [])

  return (
    <>
      {loading ? <Spinner/> : <Category name="Trends" options={trends}/>}
    </>
  )
}
