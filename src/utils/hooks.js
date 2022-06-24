import { useEffect, useRef } from 'react'

export const useFlasher = (color = 'red') => {
  const ref = useRef(null)
  useEffect(() => {
    if(!ref.current) return
    ref.current.setAttribute(
      'style',
      `box-shadow: 0 0 2px 1px ${color}; transition: box-shadow 100ms ease-out;`,
    )
    const timer = setTimeout(() => {
      if(!ref.current) return
      ref.current.setAttribute('style', '')
    }, 500)

    return () => clearTimeout(timer)
  })

  return ref
}
