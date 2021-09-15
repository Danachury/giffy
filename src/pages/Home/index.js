import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches'

import('./Home.css')

export default function Home() {
  const [filter, setFilter] = useState('')
  const [, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${filter}`)
  }
  const handleInputChange = evt => {
    setFilter(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search gifs..." value={filter} onChange={handleInputChange}/>
      </form>
      <h3 className="App-title">Last Search</h3>
      <ListOfGifs gifs={gifs}/>
      <TrendingSearches/>
    </>
  )
}
