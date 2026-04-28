import styles from './StaticPage.module.css'

function Terms() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.updated}>Last updated: April 2026</p>

        <div className={styles.content}>
          <h2>Services</h2>
          <p>
            By engaging my services, you agree to provide accurate project information 
            and timely feedback to ensure the project progresses smoothly.
          </p>

          <h2>Payment</h2>
          <p>
            A deposit is required before work begins. The remaining balance is due 
            upon project completion and before final files are delivered.
          </p>

          <h2>Revisions</h2>
          <p>
            Each package includes a set number of revisions as outlined in your project 
            agreement. Additional revisions beyond the agreed amount will be billed separately.
          </p>

          <h2>Ownership</h2>
          <p>
            Upon receipt of full payment, all rights to the final deliverables transfer 
            to the client. I retain the right to display the work in my portfolio.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about these terms, please contact me at{' '}
            <a href="mailto:mark.payns@gmail.com">mark.payns@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Terms