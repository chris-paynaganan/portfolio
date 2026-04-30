import styles from './ContextTab.module.css'

function ContextTab({ text }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Context</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ContextTab