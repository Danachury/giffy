import React, { useState } from 'react'
import { useLocation } from 'wouter'
import TrendingSearches from 'components/TrendingSearches'
import SearchResults from 'pages/SearchResults'
import { Label } from 'semantic-ui-react'

import('./Home.css')

export default function Home() {
  const [filter, setFilter] = useState('')
  const [isInvalid, setInvalid] = useState(false)
  const [, pushLocation] = useLocation()

  const onSubmit = evt => {
    evt.preventDefault()
    setInvalid(filter.length <= 0)
    if (filter.length > 0)
      pushLocation(`/search/${filter}`)
  }
  const onInputChange = evt => {
    setFilter(evt.target.value)
    setInvalid(evt.target.value <= 0)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="ui icon input">
          <input type="text" placeholder="Search gifs..." value={filter} onChange={onInputChange}/>
          <i className="circular search link icon" onClick={onSubmit}/>
        </div>
        {
          isInvalid
            ? <Label basic color="grey" pointing="left">Add a filter!</Label>
            : <></>
        }
      </form>
      <div className="ui internally celled grid">
        <div className="row">
          <div className="twelve wide column">
            <h1 className="App-title">Last Search</h1>
            <SearchResults params={filter}/>
          </div>
          <div className="four wide column">
            <TrendingSearches/>
          </div>
        </div>
      </div>
    </>
  )
}
