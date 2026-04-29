import { useState } from 'react'
import styles from './ServicesPackages.module.css'

const professionalPackages = [
  {
    id: 'starter-portfolio',
    number: '01',
    name: 'Starter Portfolio',
    price: '$350',
    priceLocal: '\u20b119,600',
    valued: null,
    badge: null,
    intro: 'What&apos;s included',
    features: [
      'Personal brand direction (basic)',
      '1-page portfolio website',
      'Up to 3 sections (About, Work, Contact)',
      'Mobile responsive design',
      'Clean, minimal UI',
      'Basic SEO setup',
      '1 revision round',
    ],
    bestFor: 'Getting online fast with something clean and credible.',
  },
  {
    id: 'professional-portfolio',
    number: '02',
    name: 'Professional Portfolio',
    price: '$650',
    priceLocal: '\u20b136,400',
    valued: '$850',
    badge: 'Most Popular',
    intro: 'Everything in Starter, plus',
    features: [
      'Expanded brand identity (colors, type system)',
      'Multi-section or up to 3 pages',
      'Project showcase layout',
      'Custom design (less template feel)',
      '2 revision rounds',
      'Performance optimization',
      'Social/contact integrations',
    ],
    bestFor: 'Professionals who want to look established, not entry-level.',
  },
  {
    id: 'advanced-portfolio',
    number: '03',
    name: 'Advanced Portfolio',
    price: '$1,000',
    priceLocal: '\u20b156,000',
    valued: '$1,300',
    badge: null,
    intro: 'Everything in Professional, plus',
    features: [
      'Full personal branding system',
      'Up to 5 pages',
      'Case study style project pages',
      'Custom interactions/animations',
      'CMS or editable sections',
      '3 revision rounds',
      'Priority turnaround',
    ],
    bestFor: 'Serious professionals positioning for higher-value clients or roles.',
  },
  {
    id: 'signature-portfolio',
    number: '04',
    name: 'Signature Portfolio',
    price: '$1,500',
    priceLocal: '\u20b184,000',
    valued: '$2,000',
    badge: null,
    intro: 'Everything in Advanced, plus',
    features: [
      'Fully custom design direction',
      'Advanced UI/UX polish',
      'Strategic content guidance',
      'Conversion-focused structure',
      'Premium animations/interactions',
      'Extended support after launch',
      'Fast-track delivery window',
    ],
    bestFor: 'Top-tier positioning. Built to stand out immediately.',
  },
]

const businessPackages = [
  {
    id: 'business-starter',
    number: '01',
    name: 'Business Starter',
    price: '$800',
    priceLocal: '\u20b144,800',
    valued: null,
    badge: null,
    intro: 'What&apos;s included',
    features: [
      'Brand foundation (logo + basic identity)',
      '3-page website',
      'Mobile responsive',
      'Core sections (Home, About, Contact)',
      'Basic SEO',
      '1 revision round',
    ],
    bestFor: 'Small businesses needing a solid online presence.',
  },
  {
    id: 'growth-business',
    number: '02',
    name: 'Growth Business',
    price: '$1,500',
    priceLocal: '\u20b184,000',
    valued: '$1,900',
    badge: 'Most Popular',
    intro: 'Everything in Starter, plus',
    features: [
      'Strong brand identity system',
      'Up to 5 pages',
      'Service/product structuring',
      'Conversion-focused layout',
      '2 revision rounds',
      'Speed optimization',
      'Analytics setup',
    ],
    bestFor: 'Businesses ready to grow and convert visitors into clients.',
  },
  {
    id: 'scale-business',
    number: '03',
    name: 'Scale Business',
    price: '$2,500',
    priceLocal: '\u20b1140,000',
    valued: '$3,200',
    badge: null,
    intro: 'Everything in Growth, plus',
    features: [
      'Full branding system (detailed)',
      'Up to 8 pages',
      'Custom UI/UX strategy',
      'Advanced interactions',
      'CMS integration',
      '3 revision rounds',
      'Priority build timeline',
      'Post-launch optimization support',
    ],
    bestFor: 'Businesses scaling operations and needing a stronger digital system.',
  },
  {
    id: 'enterprise',
    number: '04',
    name: 'Enterprise (Custom)',
    price: 'Custom Pricing',
    priceLocal: null,
    valued: null,
    badge: null,
    intro: 'What&apos;s included',
    features: [
      'Fully tailored branding system',
      'Complex website architecture',
      'Advanced integrations',
      'Scalable CMS or platform builds',
      'Ongoing collaboration',
      'Dedicated support',
    ],
    bestFor: 'Larger teams, complex needs, or long-term projects.',
  },
]

const notes = [
  'Projects typically take 10\u201312 days minimum, depending on scope',
  'All packages are one-time payments (no subscriptions)',
  'Each tier builds on the previous one, nothing gets removed, only expanded',
  'You&apos;re not just paying for output, you&apos;re paying for clarity, structure, and execution',
]

function PackageCard({ pkg }) {
  return (
    <div className={`${styles.card} ${pkg.badge ? styles.cardHighlighted : ''}`}>
      {pkg.badge && (
        <div className={styles.badge}>
          <span className={styles.badgeStar}>&#9733;</span>
          {pkg.badge}
        </div>
      )}
      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>{pkg.number}</span>
        <h3 className={styles.cardName}>{pkg.name}</h3>
        <div className={styles.cardPricing}>
          <span className={styles.cardPrice}>{pkg.price}</span>
          {pkg.valued && (
            <span className={styles.cardValued}>valued at {pkg.valued}</span>
          )}
          {pkg.priceLocal && (
            <span className={styles.cardLocal}>{pkg.priceLocal}</span>
          )}
        </div>
      </div>

      <div className={styles.cardDivider} />

      <div className={styles.cardFeatures}>
        <p className={styles.cardIntro} dangerouslySetInnerHTML={{ __html: pkg.intro }} />
        <ul className={styles.featureList}>
          {pkg.features.map((f, i) => (
            <li key={i} className={styles.featureItem}>
              <span className={styles.featureCheck}>&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cardDivider} />

      <div className={styles.cardBestFor}>
        <span className={styles.bestForLabel}>Best for</span>
        <p className={styles.bestForText}>{pkg.bestFor}</p>
      </div>

      <a href="/contact" className={styles.cardButton}>
        Get Started
      </a>
    </div>
  )
}

function ServicesPackages() {
  const [activeTab, setActiveTab] = useState('professionals')
  const packages = activeTab === 'professionals' ? professionalPackages : businessPackages

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, transparent pricing.</h2>
          <div className={styles.headerSub}>
            <p>Every package is designed to give you exactly what you need at that stage, nothing bloated, nothing missing. Pick what fits, and we&apos;ll build from there.</p>
            <p>Prices are in USD. Philippine Peso equivalents are shown for local reference.</p>
          </div>
        </div>

        {/* Toggle */}
        <div className={styles.toggleWrap}>
          <button
            className={`${styles.toggleBtn} ${activeTab === 'professionals' ? styles.toggleActive : ''}`}
            onClick={() => setActiveTab('professionals')}
          >
            For Professionals
          </button>
          <button
            className={`${styles.toggleBtn} ${activeTab === 'businesses' ? styles.toggleActive : ''}`}
            onClick={() => setActiveTab('businesses')}
          >
            For Businesses
          </button>
        </div>

        {/* Subtitle under toggle */}
        <p className={styles.toggleSub}>
          {activeTab === 'professionals'
            ? 'Branding + Personal Website'
            : 'Branding + Website (Conversion-focused)'}
        </p>

        {/* Cards grid */}
        <div className={styles.grid}>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Notes */}
        <div className={styles.notes}>
          <p className={styles.notesTitle}>A few things worth knowing</p>
          <ul className={styles.notesList}>
            {notes.map((note, i) => (
              <li key={i} className={styles.notesItem} dangerouslySetInnerHTML={{ __html: note }} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default ServicesPackages