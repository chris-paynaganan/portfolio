import styles from './ContactHero.module.css'

const channels = [
  {
    icon: '↻',
    title: 'Chat me on Facebook',
    description: 'Your business will thrive more when you send me a message and hit the send button.',
    href: 'https://www.facebook.com/chrispaynaganandesign',
  },
  {
    icon: '✉',
    title: 'Send an email',
    description: "As an introvert, I know how it feels at times when you don't like talking.",
    href: 'mailto:mark.payns@gmail.com',
  },
  {
    icon: '▦',
    title: 'Book a meeting',
    description: "Confident on what you want to discuss about? Let's dive deep into what you want to say.",
    href: 'https://calendly.com/uxbychrisph/the-virtual-coffee',
  },
]

function ContactHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Let's Talk</h1>
        <p className={styles.subtitle}>
          I'm always open to discussing new opportunities, collaborations,
          or just having a conversation about design. Feel free to reach out
          through any of the channels below.
        </p>
        <div className={styles.cards}>
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={styles.icon}>{channel.icon}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{channel.title}</h3>
                <p className={styles.cardDescription}>{channel.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactHero