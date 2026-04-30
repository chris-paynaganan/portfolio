import styles from './OutcomeTab.module.css'

function OutcomeTab({ results }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>The Results</h2>
      <div className={styles.grid}>
        {results.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.cardTitle}>{item.title}</p>
            {item.description && (
              <p className={styles.cardDesc}>{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OutcomeTab