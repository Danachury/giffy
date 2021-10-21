import React from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'

export default function SearchResults({ params }) {
  const { filter } = params
  const { loading, gifs, setPage } = useGifs({ keyword: filter })

  const onNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <>
      {
        loading
          ? <Spinner/>
          : <>
            <h2 className="App-subtitle">{decodeURI(filter)}</h2>
            <ListOfGifs gifs={gifs}/>
          </>
      }
      <button onClick={onNextPage}>Get next page</button>
    </>
  )
}
