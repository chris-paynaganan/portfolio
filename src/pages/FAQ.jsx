import { useState } from 'react'
import { faqs } from '../data/faqs'
import CTASection from '../components/CTASection'
import styles from './FAQ.module.css'

function FAQ() {
  const [view, setView] = useState('list')
  const [openIndex, setOpenIndex] = useState(null)
  const [flipped, setFlipped] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleFlip = (id) => {
    setFlipped(flipped === id ? null : id)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.label}>FAQ</span>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Answers to the most common questions I get about my process, pricing, and services.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">

          {/* View Toggle */}
          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${view === 'list' ? styles.toggleActive : ''}`}
              onClick={() => setView('list')}
            >
              <span className={styles.toggleIcon}>≡</span>
              List
            </button>
            <button
              className={`${styles.toggleBtn} ${view === 'grid' ? styles.toggleActive : ''}`}
              onClick={() => setView('grid')}
            >
              <span className={styles.toggleIcon}>⊞</span>
              Grid
            </button>
          </div>

          {/* List — Accordion */}
          {view === 'list' && (
            <div className={styles.accordion}>
              {faqs.map((faq, index) => (
                <div key={faq.id} className={styles.accordionItem}>
                  <button
                    className={styles.accordionQuestion}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className={`${styles.accordionIcon} ${openIndex === index ? styles.accordionIconOpen : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`${styles.accordionAnswer} ${openIndex === index ? styles.accordionAnswerOpen : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grid — Flip Cards */}
          {view === 'grid' && (
            <div className={styles.grid}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.cardWrapper} ${flipped === faq.id ? styles.flipped : ''}`}
                  onClick={() => handleFlip(faq.id)}
                >
                  <div className={styles.card}>
                    <div className={styles.cardFront}>
                      <span className={styles.cardNumber}>
                        {String(faq.id).padStart(2, '0')}
                      </span>
                      <p className={styles.question}>{faq.question}</p>
                      <span className={styles.hint}>Click to reveal</span>
                    </div>
                    <div className={styles.cardBack}>
                      <p className={styles.answer}>{faq.answer}</p>
                      <span className={styles.hint}>Click to close</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <CTASection
        title="Still have questions?"
        subtitle="Feel free to reach out and I'll get back to you."
        buttonLabel="Contact Me"
        buttonTo="/contact"
      />
    </>
  )
}

export default FAQ