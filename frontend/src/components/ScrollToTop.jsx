import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component
 * 
 * Listens to route pathname changes and automatically scrolls the browser window 
 * to the top, ensuring a smooth and expected navigation experience across pages.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll smoothly to the absolute top-left of the viewport on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}
