import { useState, useEffect } from 'react'
import styles from './Privacy.module.css'

const sections = [
  { id: 'data-controller', title: '1. Identity of the Data Controller' },
  { id: 'information-collected', title: '2. Information Collected' },
  { id: 'legal-basis', title: '3. Legal Basis for Processing' },
  { id: 'purpose', title: '4. Purpose of Use' },
  { id: 'third-party', title: '5. Third-Party Processing' },
  { id: 'international', title: '6. International Data Transfers' },
  { id: 'retention', title: '7. Data Retention' },
  { id: 'security', title: '8. Data Security' },
  { id: 'cookies', title: '9. Cookies and Technical Data' },
  { id: 'links', title: '10. Third-Party Links' },
  { id: 'children', title: '11. Children\'s Privacy' },
  { id: 'rights', title: '12. Your Rights' },
  { id: 'liability', title: '13. Limitation of Liability' },
  { id: 'changes', title: '14. Changes to This Policy' },
  { id: 'contact', title: '15. Contact' },
]

function Privacy() {
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
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: April 2026</p>
          <p>
            This Privacy Policy explains how personal information is collected, used, and protected
            when you access this website or communicate through it. By using this website, you
            acknowledge that you have read and understood this Policy.
          </p>

          <h2 id="data-controller">1. Identity of the Data Controller</h2>
          <p>
            This website is operated by an individual based in the Philippines ("the Operator," "I,"
            "me," or "my"). For the purposes of applicable data protection laws, I act as the data
            controller of any personal information you voluntarily provide.
          </p>

          <h2 id="information-collected">2. Information Collected</h2>
          <p>
            I collect only the personal information that you voluntarily provide when contacting me
            through this website, which may include your name, email address, and any other
            information you include in your message.
          </p>
          <p>
            You are expressly advised not to submit sensitive personal information (such as financial
            data, government-issued identification numbers, health information, or other confidential
            data). Any such information submitted is done at your own discretion and risk.
          </p>

          <h2 id="legal-basis">3. Legal Basis for Processing</h2>
          <p>
            Personal information is processed on the basis of your consent, as demonstrated by your
            voluntary submission of information through the contact form or direct email communication.
            Where applicable, processing may also be based on legitimate interest in responding to
            inquiries and maintaining professional communication.
          </p>

          <h2 id="purpose">4. Purpose of Use</h2>
          <p>Your information is used strictly for the following purposes:</p>
          <ul>
            <li>Responding to inquiries and messages</li>
            <li>Communicating regarding potential projects or professional matters</li>
            <li>Maintaining records of correspondence</li>
          </ul>
          <p>Your information will not be used for unsolicited marketing or unrelated purposes.</p>

          <h2 id="third-party">5. Third-Party Processing and Disclosure</h2>
          <p>
            I do not sell, rent, or trade your personal information. However, limited processing by
            third-party service providers may occur as necessary to operate this website and
            communication channels, including but not limited to:
          </p>
          <ul>
            <li>Website hosting services (e.g., GoDaddy)</li>
            <li>Email service providers (e.g., Gmail/Google)</li>
            <li>Web font delivery services (e.g., Google Fonts)</li>
          </ul>
          <p>
            Information may also be disclosed if required by law, legal obligation, or valid
            governmental request.
          </p>

          <h2 id="international">6. International Data Transfers</h2>
          <p>
            Due to the use of third-party service providers, your information may be processed or
            stored outside of your country of residence. By using this website and submitting your
            information, you acknowledge and accept that such transfers may occur.
          </p>

          <h2 id="retention">7. Data Retention</h2>
          <p>
            Personal information is retained only for as long as necessary to fulfill the purposes
            outlined in this Policy, including maintaining communication records, unless a longer
            retention period is required or permitted by law.
          </p>

          <h2 id="security">8. Data Security</h2>
          <p>
            Reasonable administrative and technical safeguards are implemented to protect personal
            information from unauthorized access, disclosure, alteration, or destruction. However,
            no method of transmission over the internet or electronic storage is completely secure,
            and absolute security cannot be guaranteed. By using this website, you accept this
            inherent risk.
          </p>

          <h2 id="cookies">9. Cookies and Technical Data</h2>
          <p>
            This website does not intentionally use cookies or tracking technologies for analytics
            or marketing purposes. However, certain third-party services (such as hosting providers
            or Google Fonts) may automatically collect limited technical data, including IP addresses
            or browser-related information, as part of standard internet operations.
          </p>

          <h2 id="links">10. Third-Party Links</h2>
          <p>
            This website may contain links to external websites or services. I am not responsible
            for the content, security, or privacy practices of any third-party sites. Accessing
            such links is done at your own risk.
          </p>

          <h2 id="children">11. Children's Privacy</h2>
          <p>
            This website is not intended for individuals under the age of 18. I do not knowingly
            collect personal information from minors. If such information is inadvertently collected,
            it will be deleted upon awareness.
          </p>

          <h2 id="rights">12. Your Rights</h2>
          <p>
            Subject to applicable laws, you may request access to, correction of, or deletion of
            your personal information. Requests must be submitted via the contact details below and
            will be addressed within a reasonable timeframe, subject to legal and technical limitations.
          </p>

          <h2 id="liability">13. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, I disclaim any liability for any
            direct, indirect, incidental, or consequential damages arising from or related to the
            use of this website or the transmission of personal information, including but not
            limited to unauthorized access, data breaches, or system failures beyond my reasonable
            control.
          </p>

          <h2 id="changes">14. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated at any time without prior notice. Changes will take
            effect immediately upon posting. Continued use of the website constitutes acceptance of
            the revised Policy.
          </p>

          <h2 id="contact">15. Contact</h2>
          <p>
            For any questions, requests, or concerns regarding this Privacy Policy or your personal
            information, you may contact:{' '}
            <a href="mailto:mark.payns@gmail.com">mark.payns@gmail.com</a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Privacy