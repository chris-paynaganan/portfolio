import { useState } from 'react'
import styles from './OutcomeTab.module.css'

function OutcomeTab({ results }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>The Results</h2>
      <div className={styles.grid}>
        {results.map((item, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className={`${styles.card} ${isOpen ? styles.open : ''}`}
              onClick={() => setOpenIndex(i)}
            >
              <p className={styles.cardTitle}>{item.title}</p>
              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OutcomeTab