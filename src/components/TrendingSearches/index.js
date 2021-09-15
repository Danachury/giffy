import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/trending.service'
import Category from '../../pages/Category'

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

  return <Category name="Trends" options={trends}/>
}
