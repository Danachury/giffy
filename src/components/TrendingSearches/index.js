import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from '../Spinner'

const TrendingSearches = React.lazy(() => Promise.resolve(import('./TrendingSearches')))

export default function LazyTrending() {
  const { elementRef, isNearScreen } = useNearScreen()
  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner/>}>
        {isNearScreen ? <TrendingSearches/> : <Spinner/>}
      </Suspense>
    </div>
  )
}
