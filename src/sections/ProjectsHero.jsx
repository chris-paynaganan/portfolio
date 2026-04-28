import styles from './ProjectsHero.module.css'

function ProjectsHero() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Title row */}
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Projects</h1>
          <span className={styles.pronunciation}>/noun/</span>
        </div>

        {/* Dictionary-style numbered list */}
        <ol className={styles.list}>
          <li className={styles.item}>
  <span className={styles.num}>1.</span>
  <span>the digital offspring of countless caffeine-fueled nights, pixels pushed to their emotional limits, and UX flowcharts that made sense at 3 AM.</span>
</li>
<li className={styles.item}>
  <span className={styles.num}>2.</span>
  <span>a visual timeline of one designer's descent into creative chaos—followed by an unexpected glow-up.</span>
</li>
          <li className={`${styles.item} ${styles.itemItalic}`}>
            <span className={styles.num}>3.</span>
            <span><em>see also:</em> breakthroughs disguised as breakdowns; art that started with <em>"what if?"</em> and ended with <em>"finally."</em></span>
          </li>
        </ol>

      </div>
    </section>
  )
}

export default ProjectsHero