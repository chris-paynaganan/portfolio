import styles from './StaticPage.module.css'

function Privacy() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 2026</p>

        <div className={styles.content}>
          <h2>Information I Collect</h2>
          <p>
            When you contact me through this website, I collect your name, email address, 
            and any other information you choose to provide in your message.
          </p>

          <h2>How I Use Your Information</h2>
          <p>
            I use the information you provide solely to respond to your inquiry and 
            communicate with you about potential projects. I do not sell, trade, or 
            share your personal information with third parties.
          </p>

          <h2>Cookies</h2>
          <p>
            This website does not use cookies or tracking technologies.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact me at{' '}
            <a href="mailto:mark.payns@gmail.com">mark.payns@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Privacy