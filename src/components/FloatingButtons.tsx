import { useState, useEffect } from 'react'
import DynamicIcon from './DynamicIcon'
import { BUSINESS } from '../data/constants'

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`

  return (
    <>
      {/* Left: WhatsApp + Call */}
      <div className="floating-buttons-left">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-whatsapp"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <DynamicIcon name="whatsapp" size={24} />
        </a>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="floating-btn floating-call"
          aria-label="Call us"
          title="Call us"
        >
          <DynamicIcon name="phone" size={24} />
        </a>
      </div>

      {/* Right: Scroll to top */}
      <div className="floating-buttons-right">
        <button
          className={`floating-btn floating-scroll-top${showScroll ? ' visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <DynamicIcon name="arrow-up" size={24} />
        </button>
      </div>
    </>
  )
}
