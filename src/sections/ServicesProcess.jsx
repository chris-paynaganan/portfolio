import { useState } from 'react'
import styles from './ServicesProcess.module.css'

const steps = [
  {
    title: 'Discovery',
    leftShort: [
      'This is where I get context. Not just what you want, but why it matters. I&apos;ll ask a lot of questions, dig into your business, your audience, and what&apos;s currently working or not.',
      'I&apos;m usually going through your existing materials, checking competitors, taking notes on patterns, and trying to understand where the real opportunity is before anything gets designed.',
    ],
    rightDetail: [
      'This is usually a mix of conversation and observation. I&apos;m not just listening, I&apos;m paying attention to what&apos;s being said, what&apos;s being avoided, and where things feel unclear.',
      'I&apos;ll go through your current site or materials line by line, flag friction points, and take note of patterns across your competitors. I&apos;m also looking for gaps, where others are doing the same thing and where there&apos;s room to stand out.',
      'By the end of this, I&apos;m not guessing anymore. I know where we&apos;re starting and what&apos;s actually worth solving.',
    ],
  },
  {
    title: 'Strategy',
    leftShort: [
      'Once I have a clear picture, I map things out. Structure, flow, positioning, and how everything should connect.',
      'This is where decisions start getting made. What stays, what gets removed, how users move through the experience, and what the foundation needs to look like so design and development don&apos;t fall apart later.',
    ],
    rightDetail: [
      'This is where things start to get structured. I&apos;m laying out how everything connects before we get anywhere near design.',
      'I&apos;ll map out page flow, define what content needs to exist, and decide how users should move from one step to the next. A lot of this is making tradeoffs, cutting what doesn&apos;t help, and simplifying what feels overloaded.',
      'If this part is done right, everything after it moves faster and makes more sense.',
    ],
  },
  {
    title: 'Design',
    leftShort: [
      'This part is messy before it gets clean. I&apos;m exploring directions, pulling references, testing layouts, and iterating until things start to click.',
      'There&apos;s a lot of back and forth here. I&apos;ll share concepts, get your input, refine, and keep pushing until it doesn&apos;t just look good, it actually feels right and aligned with what we&apos;re trying to achieve.',
    ],
    rightDetail: [
      'This is where ideas get pushed around until they hold up. I&apos;m testing layouts, adjusting spacing, trying different directions, and seeing what actually works instead of what just looks good at first glance.',
      'I pull references when needed, but nothing gets copied. It&apos;s more about understanding why something works and applying that thinking to your context.',
      'There&apos;s a lot of iteration here. Most versions don&apos;t make it through, but they&apos;re necessary to get to the one that does.',
    ],
  },
  {
    title: 'Development',
    leftShort: [
      'Once design is locked, I build it out properly. Clean, responsive, and built to hold up over time.',
      'I&apos;m paying attention to performance, structure, and the small details most people don&apos;t notice but absolutely feel when they use it. This is where everything becomes real.',
    ],
    rightDetail: [
      'This is where I slow down and build things properly. Not just to match the design, but to make sure it behaves the way it should.',
      'I&apos;m structuring everything so it&apos;s responsive, consistent, and easy to maintain. Small details matter here, spacing, interactions, load behavior, things people don&apos;t call out but definitely feel.',
      'The goal isn&apos;t just to make it work, it&apos;s to make it hold up over time.',
    ],
  },
  {
    title: 'Launch',
    leftShort: [
      'Before anything goes live, I test everything. Different devices, screen sizes, edge cases, all of it.',
      'Then I handle deployment and make sure the transition is smooth. No surprises, no broken pieces, just a clean launch that works the way it should.',
    ],
    rightDetail: [
      'Before launch, I&apos;m going through everything like a checklist. Testing across devices, catching edge cases, and making sure nothing breaks when it&apos;s actually live.',
      'I also handle the handoff cleanly, whether that&apos;s deployment, access, or final adjustments.',
      'When it goes live, it shouldn&apos;t feel rushed. It should feel ready.',
    ],
  },
  {
    title: 'Support',
    leftShort: [
      'Launch isn&apos;t the end. Things evolve, and I stay available for that.',
      'Whether it&apos;s updates, improvements, or just refining things over time, I&apos;m here to make sure the work continues to perform and doesn&apos;t get left behind as your business grows.',
    ],
    rightDetail: [
      'Once it&apos;s live, I stay close to the work. Not constantly hovering, but available when things need to evolve.',
      'That could be small updates, performance tweaks, or building on top of what&apos;s already there as your needs grow.',
      'Good work shouldn&apos;t go stale. This is how it stays relevant.',
    ],
  },
]

function ServicesProcess() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>My process. From start to finish.</h2>
          <div className={styles.headerSub}>
            <p>This is the process I&apos;ve refined over time, through real projects, real constraints, and a lot of iteration behind the scenes. It&apos;s structured enough to keep things moving, but flexible enough to adapt depending on what the work actually needs.</p>
            <p>Every step is intentional. Not just to get to launch, but to make sure what we build holds up, feels right, and does what it&apos;s supposed to do long after it goes live.</p>
          </div>
        </div>

        {/* Main content */}
        <div className={styles.body}>

          {/* Left — accordion */}
          <div className={styles.left}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.stepWrap}>
                <button
                  className={`${styles.stepTitle} ${i === activeIndex ? styles.stepTitleActive : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {step.title}
                </button>

                {/* Inline content — visible on mobile */}
                <div className={`${styles.inlineContent} ${i === activeIndex ? styles.inlineContentOpen : ''}`}>
                  {step.leftShort.map((p, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                  <div className={styles.mobileDetail}>
                    {step.rightDetail.map((p, j) => (
                      <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </div>
                </div>

                <div className={styles.divider} />
              </div>
            ))}
          </div>

          {/* Right — image placeholder + detail (desktop/tablet only) */}
          <div className={styles.right}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.rightDetail} key={activeIndex}>
              {steps[activeIndex].rightDetail.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesProcess