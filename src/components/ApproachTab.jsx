import styles from './ApproachTab.module.css'

function ApproachTab({ items }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>The Approach</h2>

      <div className={styles.checklist}>
        {items.map((item, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.check}>&#10003;</span>
            <p className={styles.text}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApproachTab