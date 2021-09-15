import React from 'react'
import { Link } from 'wouter'

import('./Gif.css')

export default function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <span>{id}</span>
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} loading="lazy"/>
      </Link>
    </div>
  )
}
