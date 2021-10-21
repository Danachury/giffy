import React from 'react'
import Gif from 'components/Gif'

import('./ListOfGifs.css')

export default function ListOfGifs({ gifs }) {
  const toGif = ({ id, title, url }) => <Gif key={id} id={id} title={title} url={url}/>
  const toGifs = gifs.map(toGif)
  return (
    <div className="ListOfGifs">
      {toGifs}
    </div>
  )
}
