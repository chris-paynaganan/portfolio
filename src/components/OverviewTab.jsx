import styles from './OverviewTab.module.css'

function OverviewTab({ text, meta, callout }) {
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

      {callout && (
        <p className={styles.callout}>{callout}</p>
      )}
    </div>
  )
}

export default OverviewTab