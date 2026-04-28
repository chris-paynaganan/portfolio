import { useState } from 'react'
import styles from './ContactForm.module.css'

const services = ['Web Design', 'Web Development', 'Branding', 'Design & Development', 'Other']
const budgets = ['Less than $500', '$500 - $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000+']

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', service: '', budget: '', message: '' })
  }

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.success}>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I will get back to you within 24-48 hours.</p>
            <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Get in touch</h2>
          <p className={styles.infoText}>
            I am currently available for freelance work. Let us talk about your project.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:mark.payns@gmail.com" className={styles.detailValue}>
                mark.payns@gmail.com
              </a>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Based in</span>
              <span className={styles.detailValue}>Philippines</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailLabel}>Availability</span>
              <span className={`${styles.detailValue} ${styles.available}`}>
                Available for Work
              </span>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/chris-paynaganan" target="_blank" rel="noopener noreferrer" className={styles.social}>
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.social}>
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.social}>
              Dribbble
            </a>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Service Needed</label>
                <select name="service" value={formData.service} onChange={handleChange} className={styles.select}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className={styles.select}>
                  <option value="">Select a budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={styles.textarea}
                rows={6}
                required
              />
            </div>
            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactForm