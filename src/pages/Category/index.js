import React from 'react'
import { Link } from 'wouter'

export default function Category({ name, options }) {
  const optionsLink = options.map(opt => <Link to={`/search/${opt}`}>{opt}</Link>)
  return (
    <>
      <div>{name}</div>
      {optionsLink}
    </>
  )
}
