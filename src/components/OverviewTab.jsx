import styles from './OverviewTab.module.css'

function OverviewTab({ text, meta }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Project Overview</h2>
      <p className={styles.text}>{text}</p>

      {meta && (
        <div className={styles.metaGrid}>
          {meta.map((item, i) => (
            <div key={i} className={styles.metaItem}>
              <span className={styles.metaLabel}>{item.label}</span>
              <span className={styles.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OverviewTab