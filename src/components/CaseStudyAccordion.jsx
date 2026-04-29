import { useState } from 'react'
import styles from './CaseStudyAccordion.module.css'

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
          <p className={styles.detailText}>{sections[activeIndex].detail}</p>

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