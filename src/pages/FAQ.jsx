import { useState } from 'react'
import styles from './FAQ.module.css'
import { faqs } from '../data/faqs'
import CTASection from '../components/CTASection'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
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
        <div className={`container ${styles.inner}`}>
          {faqs.map((faq, index) => (
            <div key={faq.id} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
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