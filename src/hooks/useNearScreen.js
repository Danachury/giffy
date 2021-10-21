import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setNearScreen] = useState(false)
  const elementRef = useRef()

  const loadLazily = () => {
    const onChange = (entries, observer) => {
      console.log(entries)
      const el = entries[0]
      if (el.isIntersecting) {
        observer.disconnect()
        setNearScreen(true)
      }
    }
    const observer = new IntersectionObserver(onChange, { rootMargin: distance })
    observer.observe(elementRef.current)
    return observer.disconnect
  }

  useEffect(loadLazily, [distance])

  return { elementRef, isNearScreen }
}
