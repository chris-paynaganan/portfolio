import styles from './ChallengeTab.module.css'

function ChallengeTab({ text, constraints }) {
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
    </div>
  )
}

export default ChallengeTab