import React from 'react'
import { Link } from 'wouter'

import('./Category.css')

export default function Category({ name, options }) {
  const categoryItems = options
    .map(opt => <div key={opt} className="Category-item"><Link to={`/search/${opt}`}>{opt}</Link></div>)
  return (
    <>
      <h1>{name}</h1>
      {categoryItems}
    </>
  )
}
