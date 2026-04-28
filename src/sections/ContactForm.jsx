import { useState } from 'react'
import styles from './ContactForm.module.css'

const services = ['Web Design', 'Web Development', 'Branding', 'Design & Development', 'Other']
const budgets = ['Less than $500', '$500 - $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000+']

const infoItems = [
  { label: 'Email', value: 'mark.payns@gmail.com', href: 'mailto:mark.payns@gmail.com' },
  { label: 'Based in', value: 'Philippines' },
  { label: 'Availability', value: 'Available for work' },
  { label: 'Preferred Setup', value: 'Remote' },
]

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

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Left — Info */}
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Get in touch</h2>
          <p className={styles.infoSubtitle}>
            Whether it's a project inquiry, collaboration opportunity, or just 
            to say hello, I'd love to hear from you.
          </p>
          <div className={styles.infoGrid}>
            {infoItems.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} className={styles.infoValue}>
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.infoValue}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.success}>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I will get back to you within 24-48 hours.</p>
              <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="me@example.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Service Needed</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>⌄</span>
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Budget Range</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a budget</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>⌄</span>
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                <span className={styles.submitIcon}>✉</span>
                Send message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactForm