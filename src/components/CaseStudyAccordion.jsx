import { useState } from 'react'
import styles from './CaseStudyAccordion.module.css'

// Parses a detail string into structured blocks
function parseDetail(text) {
  if (!text) return []
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  const blocks = []

  lines.forEach(line => {
    if (line.startsWith('•')) {
      // Bullet line
      const last = blocks[blocks.length - 1]
      if (last && last.type === 'bullets') {
        last.items.push(line.replace(/^•\s*/, ''))
      } else {
        blocks.push({ type: 'bullets', items: [line.replace(/^•\s*/, '')] })
      }
    } else if (line.match(/^\d+\.\s/)) {
      // Numbered line
      const last = blocks[blocks.length - 1]
      if (last && last.type === 'numbered') {
        last.items.push(line.replace(/^\d+\.\s*/, ''))
      } else {
        blocks.push({ type: 'numbered', items: [line.replace(/^\d+\.\s*/, '')] })
      }
    } else if (line.length < 60 && !line.endsWith('.') && !line.endsWith(',')) {
      // Short line without punctuation = heading
      blocks.push({ type: 'heading', text: line })
    } else {
      // Regular paragraph
      blocks.push({ type: 'paragraph', text: line })
    }
  })

  return blocks
}

function DetailContent({ text, detailClass, bulletClass, headingClass }) {
  const blocks = parseDetail(text)

  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return <p key={i} className={headingClass}>{block.text}</p>
        }
        if (block.type === 'bullets') {
          return (
            <ul key={i} className={bulletClass}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'numbered') {
          return (
            <ol key={i} className={bulletClass}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ol>
          )
        }
        return <p key={i} className={detailClass}>{block.text}</p>
      })}
    </>
  )
}

function CaseStudyAccordion({ sections = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!sections.length) return null

  return (
    <div className={styles.wrap}>

      {/* Left — accordion */}
      <div className={styles.left}>
        {sections.map((section, i) => (
          <div key={section.title} className={styles.item}>
            <button
              className={`${styles.itemTitle} ${i === activeIndex ? styles.itemTitleActive : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              {section.title}
            </button>

            {/* Inline content — desktop left + mobile */}
            <div className={`${styles.inlineContent} ${i === activeIndex ? styles.inlineContentOpen : ''}`}>
              <p className={styles.inlineSummary}>{section.teaser}</p>

              {/* Mobile image */}
              {section.image ? (
                <img src={section.image} alt={section.title} className={styles.mobileImage} />
              ) : (
                <div className={styles.mobileImagePlaceholder} />
              )}

              {/* Quick links */}
              {section.links && section.links.length > 0 && (
                <div className={styles.links}>
                  {section.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.divider} />
          </div>
        ))}
      </div>

      {/* Right — sticky image + detail (desktop/tablet only) */}
      <div className={styles.right}>
        {/* Image */}
        <div className={styles.imageWrap}>
          {sections[activeIndex].image ? (
            <img
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className={styles.image}
              key={activeIndex}
            />
          ) : (
            <div className={styles.imagePlaceholder} key={activeIndex} />
          )}
        </div>

        {/* Detail text */}
        <div className={styles.detail} key={activeIndex}>
          <p className={styles.detailSummary}>{sections[activeIndex].summary}</p>

          <DetailContent
            text={sections[activeIndex].detail}
            headingClass={styles.detailHeading}
            detailClass={styles.detailText}
            bulletClass={styles.detailList}
          />

          {/* Quick links */}
          {sections[activeIndex].links && sections[activeIndex].links.length > 0 && (
            <div className={styles.links}>
              {sections[activeIndex].links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CaseStudyAccordion