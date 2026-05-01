import styles from './ChallengeTab.module.css'

function ChallengeTab({ text, constraints, hmw }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>The Challenge</h2>
      <p className={styles.text}>{text}</p>

      {constraints && constraints.length > 0 && (
        <div className={styles.constraintsWrap}>
          <h3 className={styles.constraintsLabel}>Constraints</h3>
          <div className={styles.constraintsGrid}>
            {constraints.map((item, i) => (
              <div key={i} className={styles.constraintItem}>
                <p className={styles.constraintText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {hmw && hmw.length > 0 && (
        <div className={styles.hmwWrap}>
          <h3 className={styles.constraintsLabel}>How Might We</h3>
          <div className={styles.hmwTable}>
            <div className={styles.hmwHeader}>
              <span className={styles.hmwHeaderCell}>Challenge</span>
              <span className={styles.hmwHeaderCell}>How Might We</span>
            </div>
            {hmw.map((row, i) => (
              <div key={i} className={styles.hmwRow}>
                <p className={styles.hmwCell}>{row.challenge}</p>
                <p className={styles.hmwCell}>{row.solution}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChallengeTab