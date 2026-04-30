import styles from './ReflectionTab.module.css'

function ReflectionTab({ sections, callout }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>The Reflection</h2>

      <div className={styles.grid}>
        {sections.map((section, i) => (
          <div key={i} className={styles.section}>
            <p className={styles.sectionLabel}>{section.label}</p>
            <p className={styles.sectionText}>{section.text}</p>
            {i === sections.length - 1 && callout && (
              <p className={styles.callout}>{callout}</p>
            )}
          </div>
        ))}
      </div>

      {/* Callout on mobile shows after grid */}
      {callout && (
        <p className={`${styles.callout} ${styles.calloutMobile}`}>{callout}</p>
      )}
    </div>
  )
}

export default ReflectionTab