import { useRef } from 'react'
import { motion } from 'framer-motion'
import { TEMPLATES } from '../templates/templateConfig'

function TemplateCarousel({ selectedId, onSelect }) {
  const trackRef = useRef(null)

  const scrollByCards = (direction) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: direction * 240, behavior: 'smooth' })
  }

  return (
    <motion.section
      id="templates"
      className="template-carousel-section no-print"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="template-carousel-heading">
        <h2>Choose a template</h2>
        <p>Pick a style below — your invoice preview updates instantly as you fill in the form.</p>
      </div>

      <div className="template-carousel-wrap">
        <button
          type="button"
          className="carousel-arrow carousel-arrow--left"
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll templates left"
        >
          ‹
        </button>

        <div className="template-carousel-track" ref={trackRef}>
          {TEMPLATES.map((template) => {
            const isActive = template.id === selectedId
            return (
              <button
                type="button"
                key={template.id}
                className={`template-card ${isActive ? 'template-card--active' : ''}`}
                onClick={() => onSelect(template.id)}
                aria-pressed={isActive}
              >
                <div className={`template-thumb template-thumb--${template.id}`}>
                  <div className="thumb-header">
                    <span className="thumb-logo" />
                    <span className="thumb-title" />
                  </div>
                  <div className="thumb-lines">
                    <span />
                    <span />
                  </div>
                  <div className="thumb-table">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="thumb-total" />
                </div>

                <span className="template-card-name">{template.name}</span>
                <span className="template-card-desc">{template.description}</span>

                {isActive && <span className="template-card-badge">Selected</span>}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow--right"
          onClick={() => scrollByCards(1)}
          aria-label="Scroll templates right"
        >
          ›
        </button>
      </div>
    </motion.section>
  )
}

export default TemplateCarousel
