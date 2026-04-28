import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import styles from './HomeInquiry.module.css'

function HomeInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Will wire up to a real service later
    alert('Message sent! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <SectionHeader
              label="Get In Touch"
              title="Have a project in mind?"
              subtitle="Tell me about your project and let's see how we can work together to bring it to life."
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
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
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={styles.textarea}
                rows={5}
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

export default HomeInquiry