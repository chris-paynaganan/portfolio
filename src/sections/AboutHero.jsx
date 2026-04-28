import styles from './AboutHero.module.css'
import photoMain from '../assets/images/photo-main.jpg'
import photo2 from '../assets/images/photo-2.jpg'
import photo3 from '../assets/images/photo-3.jpg'

function AboutHero() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Top — Text + Photos */}
        <div className={styles.top}>
          <div className={styles.text}>
            <h1 className={styles.title}>Hi, I'm Chris.</h1>
            <p className={styles.subtitle}>
              Product and User Experience Designer focused on creating simple, 
              functional, and human-centered digital experiences.
            </p>
            <div className={styles.buttons}>
              <a
                href="https://www.linkedin.com/in/chrispaynaganan/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnDark}
              >
                <span className={styles.btnIcon}>in</span>
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download="Paynaganan_Mark_Christian_Resume.pdf"
                className={styles.btnLight}
              >
                <span className={styles.btnIcon}>📄</span>
                View Resume
              </a>
            </div>
          </div>

          {/* Photos */}
          <div className={styles.photos}>
            <div className={styles.photoMain}>
              <img src={photoMain} alt="Chris Paynaganan" />
            </div>
            <div className={styles.photoTopRight}>
              <img src={photo3} alt="Chris Paynaganan" />
            </div>
            <div className={styles.photoBottomLeft}>
              <img src={photo2} alt="Chris Paynaganan" />
            </div>
          </div>
        </div>

        {/* Bottom — Fun Facts */}
        <div className={styles.funFacts}>
          <p className={styles.funFactsLabel}>Fun facts about me</p>
          <div className={styles.funFactsGrid}>
            <div className={styles.funFactLeft}>
              <p>
                I started in UX because I enjoy turning messy ideas into experiences 
                people can actually use. Early on, I worked across both web and mobile, 
                helping translate abstract requirements into clear, usable interfaces.
              </p>
              <p>
                As I gained more experience, I gravitated toward web design. Not just 
                because of demand, but because the web sits at the center of how 
                businesses grow, communicate, and convert. It's where clarity, structure, 
                and decision making matter most.
              </p>
            </div>
            <div className={styles.funFactRight}>
              <p>
                What keeps me going is solving real problems, not just designing screens. 
                I focus on building scalable, accessible experiences that reduce friction, 
                guide users, and support real business goals.
              </p>
              <p>
                Moving forward, I'm doubling down on web focused work, especially projects 
                where strategy, structure, and conversion matter as much as visuals. My goal 
                is to design systems that hold up in real world use, not just in presentations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHero