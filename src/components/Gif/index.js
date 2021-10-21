import React from 'react'
import { Link } from 'wouter'

import('./Gif.css')

export default function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        {title?.trim() ? <h4>{title}</h4> : title}
        <img src={url} alt={title} loading="lazy"/>
      </Link>
    </div>
  )
}
