import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const { filter } = params
  const { loading, gifs } = useGifs({ keyword: filter })

  return (
    <>
      {loading ? <Spinner/> : <ListOfGifs gifs={gifs}/>}
    </>
  )
}
