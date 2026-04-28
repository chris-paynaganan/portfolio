import { useState, useEffect } from 'react'
import styles from './Terms.module.css'

const sections = [
  { id: 'use-of-website', title: '1. Use of Website' },
  { id: 'no-professional-relationship', title: '2. No Professional Relationship' },
  { id: 'accuracy', title: '3. Accuracy of Information' },
  { id: 'intellectual-property', title: '4. Intellectual Property' },
  { id: 'third-party-links', title: '5. Third-Party Links' },
  { id: 'limitation-of-liability', title: '6. Limitation of Liability' },
  { id: 'no-warranties', title: '7. No Warranties' },
  { id: 'indemnification', title: '8. Indemnification' },
  { id: 'availability', title: '9. Availability' },
  { id: 'governing-law', title: '10. Governing Law' },
  { id: 'changes', title: '11. Changes to Terms' },
  { id: 'contact', title: '12. Contact' },
]

function Terms() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.layout}`}>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <p className={styles.sidebarTitle}>On this page</p>
          <nav className={styles.sidebarNav}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`${styles.sidebarLink} ${activeSection === s.id ? styles.sidebarLinkActive : ''}`}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Terms of Use and Disclaimer</h1>
          <p className={styles.updated}>Last updated: April 2026</p>
          <p>
            By accessing and using this website, you agree to be bound by the following terms and 
            conditions. If you do not agree with any part of these terms, you should discontinue 
            use of this website.
          </p>

          <h2 id="use-of-website">1. Use of Website</h2>
          <p>
            This website is provided for general informational and professional purposes only. You 
            agree to use this website in a lawful manner and not for any purpose that may damage, 
            disable, or impair the website or interfere with any other party's use.
          </p>

          <h2 id="no-professional-relationship">2. No Professional Relationship</h2>
          <p>
            Use of this website, including sending inquiries or messages, does not establish any 
            formal business, client, or contractual relationship unless explicitly agreed upon in 
            writing. Any engagement will require a separate agreement.
          </p>

          <h2 id="accuracy">3. Accuracy of Information</h2>
          <p>
            While reasonable efforts are made to ensure that the information presented on this 
            website is accurate and up to date, no guarantees are made regarding completeness, 
            reliability, or accuracy. Information may be updated, changed, or removed at any time 
            without notice.
          </p>

          <h2 id="intellectual-property">4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, design, graphics, and 
            layout, is owned by or licensed to the Operator and is protected by applicable 
            intellectual property laws. You may not reproduce, distribute, modify, or use any 
            content without prior written permission.
          </p>

          <h2 id="third-party-links">5. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites for convenience or reference. 
            These external sites are not controlled or endorsed by the Operator. No responsibility 
            is assumed for their content, availability, or practices. Accessing third-party links 
            is at your own risk.
          </p>

          <h2 id="limitation-of-liability">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the Operator shall not be liable for any 
            direct, indirect, incidental, consequential, or special damages arising out of or in 
            connection with your use of, or inability to use, this website. This includes, but is 
            not limited to, loss of data, loss of business opportunities, or damages resulting from 
            reliance on information provided.
          </p>

          <h2 id="no-warranties">7. No Warranties</h2>
          <p>
            This website is provided on an "as is" and "as available" basis without warranties of 
            any kind, whether express or implied. No warranty is made that the website will be 
            uninterrupted, error-free, secure, or free from harmful components.
          </p>

          <h2 id="indemnification">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless the Operator from and against any claims, 
            liabilities, damages, losses, or expenses arising out of your use of this website or 
            your violation of these Terms.
          </p>

          <h2 id="availability">9. Availability</h2>
          <p>
            No guarantee is made that the website will be available at all times. Access may be 
            suspended, restricted, or terminated at any time without notice.
          </p>

          <h2 id="governing-law">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of the 
            Republic of the Philippines, without regard to conflict of law principles.
          </p>

          <h2 id="changes">11. Changes to Terms</h2>
          <p>
            These Terms may be updated at any time without prior notice. Continued use of the 
            website after any changes constitutes acceptance of the revised Terms.
          </p>

          <h2 id="contact">12. Contact</h2>
          <p>
            For any questions regarding these Terms, you may contact:{' '}
            <a href="mailto:mark.payns@gmail.com">mark.payns@gmail.com</a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Terms