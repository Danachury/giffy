import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/gifs.service'

export default function ListOfGifs({ params }) {
  const { filter } = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  const fetchData = () => {
    setLoading(true)
    getGifs({ keyword: filter })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }
  useEffect(fetchData, [filter])

  if (loading)
    return <i>Loading @@@@@@</i>

  return gifs.map(({ id, title, url }) =>
    <Gif
      key={id}
      title={title}
      url={url}
    />
  )
}
