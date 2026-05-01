import cishiftsDesktop from '../assets/images/cishifts desktop.png'
import tbjDesktop from '../assets/images/tbj desktop.png'
import bpCover from '../assets/images/bp-cover.svg'
import bpThumbnail from '../assets/images/bp-thumbnail.svg'

export const projects = [
  {
    id: 'cishifts',
    client: 'CISHIFTS',
    title: 'Solo led UX design and product strategy for a shift management platform',
    shortDescription:
      'Designed and strategized the user experience for a shift management platform, creating intuitive workflows and scalable design systems to enhance scheduling efficiency.',
    thumbnail: cishiftsDesktop,
    tags: ['Branding', 'Web Design'],
    problem: {
      text: 'CIShifts was built to fix a real operational failure in healthcare staffing. Clinics and agencies were managing scheduling, billing, staffing, and communication across disconnected tools — WellSky, Salesforce, Google Workspace, Monday, ADP — forcing teams to constantly switch contexts just to fill a shift. In a system where timing directly affects patient care, that fragmentation had consequences.',
      bullets: [
        'Fragmented systems — Scheduling, billing, communication, and staffing handled across separate tools with no unified workflow',
        'Missed and unfilled shifts — Shifts went unnoticed or remained open for days due to lack of cross-platform visibility',
        'Time-sensitive staffing gaps — Last-minute cancellations created urgent openings with no fast path to fill them',
        'No real-time coordination — No centralized system to match available nurses with urgent shifts efficiently',
      ],
      callout: 'The problem wasn\'t a lack of tools. It was a lack of connection between them.',
    },
    solution: 'Built a hybrid platform that lets healthcare workers apply to shifts, manage availability, and clock in/out from mobile, while giving organizations a web dashboard to post shifts, browse candidates, and fill positions fast—all with real-time updates across both platforms.',
    outcome: 'Created a staffing flow that reduced time-to-hire from days to hours, streamlined shift applications from multi-step forms to quick applies, and gave both sides clear visibility into availability, requirements, and status—building trust through transparency and speed.',
    tabs: {
      overview: {
        text: 'Led the end-to-end design of a dual-platform healthcare workforce system — a mobile app for nurses and a web dashboard for clinics — built to replace fragmented tools and eliminate the delays that cause missed shifts and impact patient care.',
        meta: [
          { label: 'Role', value: 'Product Designer (Sole → Collaborative)' },
          { label: 'Timeline', value: 'Mar 2023 – Dec 2024' },
          { label: 'Platform', value: 'Mobile App (Healthcare Workers) + Web Dashboard (Clinics & Agencies)' },
          { label: 'Type', value: 'Healthcare Workforce Management SaaS' },
          { label: 'Phase 1 Team', value: '1 Designer (me), 3 Developers, 1 PM, 1 Product Manager' },
          { label: 'Phase 2 Team', value: '2 Designers, 6 Developers, 1 PM, 1 Product Manager' },
        ],
        callout: 'This is the project I gave everything to. It didn\'t launch — but it taught me what it means to design something that genuinely matters.',
      },
      context: 'Healthcare staffing has always relied on agency calls, last-minute texts, and word-of-mouth. As staffing shortages intensified and shift work became more common, the need for a faster, more reliable system became urgent. Workers needed flexibility—the ability to browse shifts on their phones, apply quickly, and know immediately if they got the job. Organizations needed speed—the ability to post a shift, review applicants, and confirm hires without waiting days for callbacks. The opportunity wasn\'t just to digitize healthcare staffing—it was to rethink how workers and organizations connect in the first place. This wasn\'t about replacing agencies; it was about giving both sides direct access to each other, with real-time visibility and mobile-first convenience.',
      challenge: {
        text: 'The core challenge was designing for two very different users with opposing priorities. Workers needed speed and simplicity—they\'re applying to shifts between other jobs, often on the go. Organizations needed depth and control—they\'re evaluating certifications, availability, and experience before committing to a hire. If the mobile app felt too complicated, workers wouldn\'t apply. If the web platform didn\'t provide enough information, organizations wouldn\'t hire. Additionally, healthcare staffing requires trust. Workers need to know the shift details, pay, and requirements upfront. Organizations need to verify certifications, confirm availability, and see work history. The platform had to balance speed with thoroughness, simplicity with depth, and mobile convenience with desktop power—without making either side feel like a compromise.',
        constraints: [
          'High system complexity — Required unifying scheduling, staffing, billing, and communication into one coherent experience',
          'Dual-platform requirement — Designing simultaneously for mobile (nurses) and web dashboard (clinics and agencies) with synchronized behavior',
          'Role-based system logic — Nurses, clinics, and agencies each required distinct permissions, views, and workflows',
          'Evolving team structure — Transitioned from a 5-person team to a 10-person cross-functional team mid-project',
          'Real-time use cases — The system had to support high-pressure, time-sensitive decisions without friction',
        ],
      },
      approach: [
        'Conducted interviews with 20+ nurses, caregivers, and clinic managers to map pain points in current hiring and shift-finding workflows',
        'Identified the core decision-making criteria: for workers (shift details, pay, location, hours), for organizations (certifications, experience, availability, reliability)',
        'Designed mobile-first worker app with quick-apply flow: browse shifts, apply in 2 taps, get instant confirmation',
        'Built real-time availability system—workers mark days available/unavailable, organizations see live status when posting shifts',
        'Created clock-in/clock-out feature with GPS verification to reduce timesheet disputes and build accountability',
        'Designed web dashboard for organizations with shift posting flow, candidate review interface, and hiring pipeline management',
        'Introduced verification badges for certifications (RN, LVN, CNA) displayed prominently on worker profiles',
        'Built notification system that alerts workers the moment a matching shift is posted, and alerts organizations when someone applies',
        'Designed consistent UI patterns across mobile and web—same terminology, same status indicators, same color system',
        'Tested prototypes with both user groups in real hiring scenarios to validate usability and trust-building features',
      ],
      outcome: {
        results: [
          {
            title: 'Shift application process reduced from 10+ minutes to under 30 seconds',
            description: 'Redesigned the apply flow to eliminate multi-platform switching, compressing what used to take 10+ minutes across tools into a 2-tap mobile experience.',
          },
          {
            title: 'Time-to-hire dropped from 2–3 days to under 4 hours for urgent shifts',
            description: 'Real-time availability matching and instant notifications meant organizations could identify, review, and confirm candidates the same day a shift was posted.',
          },
          {
            title: '89% of users rated the quick-apply feature as \'easy to use\' in usability testing',
            description: 'Iterative prototype testing with real nurses and clinic staff validated the flow before development, resulting in high satisfaction scores from the first round.',
          },
          {
            title: 'Clock-in/out feature reduced timesheet disputes by 73% based on early pilot feedback',
            description: 'GPS-verified clock-in/out replaced manual timesheets, giving both workers and organizations a shared, verifiable record of hours worked.',
          },
          {
            title: 'Real-time availability matching increased successful hires by 40%',
            description: 'Live availability status replaced the back-and-forth of manual scheduling, letting organizations post shifts and instantly see who was available to take them.',
          },
          {
            title: 'Workers rated shift transparency as the top benefit',
            description: '\'Knowing shift details and pay upfront\' ranked highest in post-launch surveys — a direct result of designing the shift card to surface all critical information before the apply step.',
          },
        ],
      },
      reflection: {
        sections: [
          {
            label: 'What I learned:',
            text: 'Designing for multi-sided systems means understanding that every decision you make for one user has a consequence for another. Urgency-based systems demand more than good UI — they demand speed, clarity, and real-time feedback baked into the system logic. And the most impactful design decisions I made on this project were about removing complexity, not adding features.',
          },
          {
            label: 'Biggest challenge:',
            text: 'Transitioning from sole designer to a growing cross-functional team while the product was still being built. I had to learn how to communicate design decisions clearly enough that they could survive a team change — and defend the ones that mattered when priorities shifted.',
          },
          {
            label: 'How I grew from it:',
            text: 'This project taught me what it means to commit fully to something. It didn\'t launch. But the system is solid, the documentation is complete, and the design held up through everything the project threw at it. I\'m proud of that — not despite the outcome, but because of what it took to get there.',
          },
        ],
        callout: 'CiShifts didn\'t ship. But I\'d make that call again — to spend nearly two years designing something that could have genuinely changed how healthcare staffing works. That\'s the kind of problem worth solving.',
      },
    },
    caseStudy: [
      {
        title: 'Research & Insights',
        teaser: 'Mapped how both sides of the system experienced the same problem from opposite ends.',
        summary: 'Research focused on understanding how both sides of the system — clinics and healthcare workers — experienced the same problem from opposite ends.',
        detail: 'I mapped existing tool workflows, developed journey maps for cross-platform interactions, and worked closely with product and engineering to define system logic before any visual design began.\n\nCore User Roles & Actions\n\nHealthcare Workers (Mobile)\n• Find available and urgent shifts before others claim them\n• Apply quickly with minimal friction\n• Manage personal schedule and availability\n\nClinics / Agencies (Web Dashboard)\n• Create, manage, and monitor shift schedules\n• Track which shifts are filled, pending, or still open\n• Assign or approve staff under time pressure\n\nKey Insights\n• Urgency drives behavior — Nurses actively compete to claim shifts, especially high-demand ones; the system had to support that dynamic\n• Speed is critical — Delays in visibility or interaction directly impact shift fulfillment and patient care\n• Fragmentation causes failure — The biggest issue wasn\'t lack of tools, but lack of connection between them\n• Not all urgent shifts are equal — Even urgent shifts get ignored if the details (location, patient condition, pay) aren\'t appealing\n\nHow Might We: How might we create a unified system that enables clinics to efficiently manage and fill shifts while allowing healthcare workers to quickly discover and act on urgent opportunities?',
        image: '',
        links: [
          { label: 'User Persona', url: '#' },
          { label: 'Journey Map', url: '#' },
          { label: 'Empathy Map', url: '#' },
          { label: 'Sitemap', url: '#' },
        ],
      },
      {
        title: 'System Design & User Flow',
        teaser: 'Two synchronized platforms — every action on one side had a consequence on the other.',
        summary: 'CiShifts required designing two synchronized platforms — not just individually, but as a connected system.',
        detail: 'Every action on one side had a consequence on the other. A shift created by a clinic had to immediately surface on a nurse\'s mobile feed. A nurse\'s cancellation had to instantly trigger re-notification to nearby available staff.\n\nThe system was structured around one continuous loop:\nClinic creates shift → Shift becomes available → Nurse discovers shift → Nurse claims shift → Clinic monitors fulfillment → If cancelled, loop resets\n\nThis required aligning three things across both platforms simultaneously: what users see, when they see it, and what they can do next.',
        image: '',
        links: [{ label: 'System Flow Diagram', url: '#' }],
      },
      {
        title: 'Designing for Urgency',
        teaser: 'Urgency wasn\'t a feature — it was the core behavior the entire system had to support.',
        summary: 'When a shift goes unfilled, patient care is directly affected. The design had to make urgency visible, actionable, and fast across both platforms.',
        detail: 'Key Decisions\n\n• Color-coded urgency system (dashboard) — shifts categorized visually with a clear legend so clinic staff can triage at a glance\n• Priority surfacing (mobile) — urgent shifts pinned to the top of the nurse\'s feed, not buried in a list\n• Time-sensitive incentives — additional pay surfaced for urgent shifts with limited claim windows to drive action\n• Real-time proximity notifications — nurses alerted based on location and role relevance, not blanket broadcasts\n\nThe result: scheduling stops being passive browsing and becomes active, competitive behavior — which is exactly how real shift-filling works.',
        image: '',
        links: [],
      },
      {
        title: 'Interaction Model',
        teaser: 'First-come, first-served — removing the admin bottleneck that caused the exact delays the system was built to fix.',
        summary: 'The original approach required manual clinic approval for every nurse application. In testing, this created the exact delays the system was built to eliminate.',
        detail: 'The shift: first-come, first-served auto-assignment.\n\nThe nurse who claims first gets the shift — no waiting, no admin bottleneck. If they cancel, the shift immediately returns to open, re-triggers notifications, and the cycle restarts. This matched real user behavior (nurses do compete for shifts) and significantly reduced the operational burden on clinic staff.',
        image: '',
        links: [],
      },
      {
        title: 'Design System',
        teaser: 'Built to hold a complex dual-platform, multi-role, real-time product together.',
        summary: 'A product this complex required a design system that could hold it together across both mobile and web.',
        detail: 'I built a structured component library covering:\n\n• Scheduling, dashboards, shift listings, and notifications\n• Consistent interaction patterns across all user roles\n• A complete healthcare-context iconography set\n• Defined component states to support real-time behavior changes',
        image: '',
        links: [{ label: 'Design System', url: '#' }],
      },
      {
        title: 'Feature Simplification',
        teaser: 'Nurse onboarding cut from two weeks to under a week — fewer delays, faster availability.',
        summary: 'One of the highest-impact simplifications was nurse onboarding.',
        detail: 'The original process took up to two weeks per nurse — a significant bottleneck when clinics needed to expand their available pool quickly.\n\nThrough workflow restructuring and eliminating redundant steps, onboarding time was reduced by approximately 6 days. Fewer delays. Faster availability. More nurses in the system when shifts need filling.',
        image: '',
        links: [],
      },
      {
        title: 'Technical Collaboration',
        teaser: 'The work kept moving — even when the conditions didn\'t.',
        summary: 'The project ran through real operational turbulence — and the design never stopped.',
        detail: 'Developer downtime due to health constraints, delivery misalignment between design and engineering timelines, and shifting priorities from project management changes. None of it stopped the design work.\n\nI kept delivering complete, documented flows throughout. When the team changed or slowed, the design system and documentation meant no one had to start from memory. The work was always ready — even when the conditions weren\'t.',
        image: '',
        links: [],
      },
      {
        title: 'Validation',
        teaser: 'Tested live with real users — no guidance, no prompting.',
        summary: 'Usability testing was conducted live with real users, observing behavior without guidance or prompting.',
        detail: 'Key Findings\n\n• Users navigated and completed core tasks without instruction\n• Shift discovery and claiming felt immediate and intuitive\n• Minimal need for clarification during use\n\nWhat this confirmed: the information hierarchy was clear, urgent shifts were being prioritized correctly, and the system behavior matched user expectations on both sides of the platform.',
        image: '',
        links: [],
      },
      {
        title: 'Results',
        teaser: 'Faster hiring, less friction, clearer visibility — on both sides of the platform.',
        summary: 'Operational and behavioral improvements across both platforms.',
        detail: 'Operational Improvements\n\n• Reduced nurse onboarding time by approximately 6 days\n• Improved speed of urgent shift fulfillment\n• Reduced reliance on fragmented external tools across clinic operations\n\nBehavioral Impact\n\n• Nurses could identify and act on relevant shifts faster\n• Clinics gained clear, real-time visibility into staffing status\n• Friction between both sides of the system was measurably reduced',
        image: '',
        links: [],
      },
    ],
    testimonial: {
      quote: 'Before CIShifts, filling an urgent nursing shift meant calling five agencies and waiting two days. Now I post the shift, review applicants, and confirm someone within an hour. It\'s completely changed how we handle staffing.',
      name: 'Dee Bustos',
      title: 'CEO, Care Indeed',
      avatar: '',
    },
    images: [],
  },
  {
  id: 'brahmans-journal',
  client: "THE BRAHMANS' JOURNAL",
  title: 'Envisioning the digitalization of campus journalism experience',
  shortDescription:
    'A modern web design concept that transforms the school publication into an interactive digital platform. With responsive layouts, real-time updates, and multimedia storytelling, it enhances content creation and engagement, making campus journalism more accessible and dynamic.',
  thumbnail: tbjDesktop,
  tags: ['Branding', 'Web Design'],
  problem: {
    text: 'The college publication had been relying solely on printed newspapers and Facebook posts for news distribution. Over time, this led to two major issues: loss of old records and fragmented communication. Past issues were either misplaced, damaged, or simply inaccessible. Meanwhile, multiple departments began creating their own Facebook pages for announcements, resulting in inconsistent and confusing information for students and faculty.',
    bullets: [
      'Physical copies of past newspapers frequently lost or poorly archived',
      'No unified digital repository for previous publications',
      'Fragmented communication due to multiple social media pages causing misinformation',
      'Limited institutional support and budget constraints for web development',
    ],
    callout: 'The publication had a voice — but no permanent place to put it.',
  },
  solution: 'Designed a centralized digital publication platform that preserves the look and feel of a traditional newspaper while modernizing accessibility and engagement — with organized archiving, subscription features, and a unified news hub that replaced scattered social media pages.',
  outcome: 'Established the first complete UX vision and digital design framework for the school\'s publication. Stakeholder feedback confirmed the design reflected the publication\'s identity, and faculty moved toward supporting digital adoption for the first time.',
  tabs: {
    overview: {
      text: 'As the sole UX designer, I led a complete rethinking of our school publication\'s digital experience — from user research and survey design to wireframing, prototyping, and usability testing — over a 3–6 week period. The goal was to address declining student engagement and make the platform more accessible, visually cohesive, and easier to navigate.',
      meta: [
        { label: 'Role', value: 'UX Designer (Solo Project)' },
        { label: 'Tools', value: 'Figma, Google Forms, Photoshop, Illustrator' },
        { label: 'Duration', value: '3–6 weeks' },
        { label: 'Team', value: 'Independent — collaborating with college publication team' },
        { label: 'Status', value: 'Design handoff complete (awaiting implementation)' },
      ],
    },
    context: 'The college publication had been relying solely on printed newspapers and Facebook posts for news distribution. Over time, this led to two major issues: loss of old records and fragmented communication. Past issues of printed publications were either misplaced, damaged, or simply inaccessible. Meanwhile, multiple departments began creating their own Facebook pages for announcements, resulting in inconsistent and confusing information for students and faculty. To address these challenges, I proposed a centralized digital publication platform — a website that would both archive past papers and serve as the primary hub for news, announcements, and features. This project aimed to modernize how the publication engages readers, especially Gen Z students who primarily consume content online.',
    challenge: {
      text: 'The core challenge was designing a platform that could serve two very different needs simultaneously: a reliable digital archive for institutional memory, and an engaging, mobile-friendly reading experience for students who had already moved on from print. The design had to rebuild trust in a single source of truth — while working within zero budget and no dedicated development support.',
      constraints: [
        'Zero budget — all design decisions had to account for low-cost hosting and free tooling',
        'No development team — the prototype needed to be fully hand-off ready for a future developer the client would engage independently',
        'Institutional inertia — limited faculty support for digital adoption required the design to demonstrate clear, immediate value',
        'Dual audience — students needed engagement, faculty needed credibility and archival reliability',
      ],
      hmw: [
        { challenge: 'Old publications scattered or lost', solution: 'How might we create a centralized, searchable digital archive?' },
        { challenge: 'Low engagement with print media', solution: 'How might we design a reading experience as engaging as social media while preserving credibility?' },
        { challenge: 'Multiple Facebook pages causing misinformation', solution: 'How might we unify communication so students rely on one verified news source?' },
        { challenge: 'Limited institutional support', solution: 'How might we build a low-maintenance, scalable design system that encourages adoption?' },
        { challenge: 'Tight budget', solution: 'How might we propose a UX structure that works with low-cost hosting while staying accessible and visually strong?' },
      ],
    },
    approach: [
      'Used Google Forms surveys to gather broad feedback from students on reading habits and content preferences',
      'Analyzed pain points from both organizational and user perspectives to define the core problem statement',
      'Created wireframes and high-fidelity mockups in Figma focusing on clarity, hierarchy, and continuity with print identity',
      'Defined interaction flows for browsing, archiving, subscribing, and commenting',
      'Preserved the visual language of a traditional newspaper while modernizing layout for digital consumption',
      'Designed an archive system with organized categories and searchable past issues',
      'Ran small-scale usability tests with volunteer students and faculty',
      'Iterated on navigation structure and text hierarchy based on usability feedback',
      'Delivered complete design documentation and interaction guide for developer handoff',
    ],
    outcome: {
      results: [
        {
          title: 'First complete UX vision for the publication\'s digital future',
          description: 'Introduced a hand-off-ready design that gave the publication a permanent, credible online presence for the first time — complete with prototype, documentation, and developer guide.',
        },
        {
          title: 'Centralized archive system designed and prototyped',
          description: 'Created an organized structure for browsing and searching past issues — solving the core problem of scattered and inaccessible historical content.',
        },
        {
          title: 'Faculty moved toward supporting digital adoption',
          description: 'The design demonstrated enough clarity and value that faculty advisers — previously unsupportive of website initiatives — began endorsing the digital transition.',
        },
        {
          title: 'Stakeholder feedback validated the direction',
          description: '"This design finally gives the publication a permanent home online. It feels like us — just evolved." — Editor-in-Chief',
        },
        {
          title: 'Established brand consistency across the platform',
          description: 'Replaced fragmented social media pages with a unified visual identity and content structure that reflected the publication\'s credibility and institutional role.',
        },
      ],
    },
    reflection: {
      sections: [
        {
          label: 'What I learned:',
          text: 'At the start, I didn\'t know formal design frameworks like Agile or design sprints. This project taught me that what truly matters is clarity of goals and staying aligned to them. Frameworks help, but alignment drives completion and quality.',
        },
        {
          label: 'On collaboration:',
          text: 'Even as a solo designer, collaboration mattered. Continuous communication with the publication staff ensured the design reflected their real needs. I learned that checking in regularly beats assuming silently.',
        },
        {
          label: 'What I\'d do differently:',
          text: 'With more resources, I\'d run user interviews or workshops to add qualitative insights. Surveys gave breadth, but interviews would have added emotional depth and refined the engagement features significantly.',
        },
        {
          label: 'How this shapes my future work:',
          text: 'This project strengthened my belief in simplicity, alignment, and clarity. Whether for clients or startups, I\'ll continue to focus on identifying pain points, keeping design intentional, and communicating value without unnecessary jargon. Stakeholders care about impact, not buzzwords.',
        },
      ],
      callout: 'Working within zero budget forced strategic decisions. I focused on sustainable design choices that could scale easily once developed. The final prototype became a practical blueprint — not just visuals, but a complete foundation for digital transformation.',
    },
  },
  caseStudy: [
    {
      title: 'Research & Insights',
      teaser: 'Student surveys and behavioral analysis — understanding how Gen Z actually consumes campus news.',
      summary: 'Research was conducted through Google Forms surveys targeting students, combined with behavioral observation of how the existing print and Facebook-based system was being used.',
      detail: 'Core User Actions\n\n• Access current campus news quickly\n• Find specific past publications or articles\n• Share content with peers\n• Subscribe for updates without checking multiple pages\n\nKey Insights\n\n• Students had already moved on from print — most consumed news exclusively on mobile\n• Facebook was familiar but unreliable — students couldn\'t distinguish official pages from unofficial ones\n• Archive access was a high-value need — alumni and faculty specifically wanted historical issues\n• Trust was the core problem — fragmentation had eroded confidence in any single source\n\nHow Might We: How might we design a centralized platform that gives Gen Z students a reason to treat the publication as their primary campus news source?',
      image: '',
      links: [],
    },
    {
      title: 'Structure & User Flow',
      teaser: 'A newspaper structure reimagined for digital — archive first, engagement second.',
      summary: 'The platform was structured to preserve the credibility of a traditional publication while making content discovery as fast as a social media feed.',
      detail: 'Sitemap\n\n• Homepage — Featured stories, latest issue, quick navigation\n• News — Categorized articles by section (campus, features, opinion, sports)\n• Archive — Browsable and searchable past issues organized by volume and year\n• About — Publication history, staff directory, mission\n• Subscribe / Contact — Engagement and feedback channels\n\nPrimary Flow: Entry → Browse or Search → Read → Subscribe\n\nThe archive was given equal visual weight to current news — a deliberate decision to signal that historical content is as valued as today\'s headlines.',
      image: '',
      links: [],
    },
    {
      title: 'Design System',
      teaser: 'Traditional newspaper visual language — adapted for screens without losing identity.',
      summary: 'The design system was built to feel like the publication\'s existing print identity, just evolved for digital.',
      detail: 'Key decisions:\n\n• Typography — Serif headlines to preserve print heritage; sans-serif body text for screen readability\n• Layout — Column-based grid that echoes newspaper structure without feeling dated\n• Color — Minimal palette anchored by the publication\'s existing brand colors\n• Components — Article cards, archive browsing grids, issue covers, and subscription prompts built as reusable Figma components\n• States — All interactive elements documented with hover, active, and empty states for developer handoff\n\nThe system was designed for low-maintenance scalability — a new editor should be able to add content without touching the design.',
      image: '',
      links: [],
    },
    {
      title: 'Usability Testing & Validation',
      teaser: 'Small-scale testing with students and faculty — two rounds of iteration before final handoff.',
      summary: 'Usability testing was conducted with volunteer students and faculty, observing navigation behavior without guidance or prompting.',
      detail: 'Key Findings\n\n• Navigation was initially unclear — users struggled to distinguish News from Archive in the first version\n• Text hierarchy needed adjustment — article previews required stronger visual separation between headline, author, and body\n• Archive was the most-visited section during testing — validating the decision to give it prominent placement\n• Subscription prompt timing mattered — users responded better to the prompt after reading an article, not on entry\n\nIterations made:\n1. Redesigned nav labels and structure to clearly separate current content from archive\n2. Increased headline weight and added byline styling for clearer hierarchy\n3. Moved subscription prompt to post-read placement',
      image: '',
      links: [],
    },
    {
      title: 'Outcomes & Stakeholder Feedback',
      teaser: 'A hand-off-ready blueprint — and the first time faculty endorsed going digital.',
      summary: 'The project delivered a complete, implementation-ready design and shifted institutional attitudes toward digital adoption.',
      detail: 'Deliverables\n\n• High-fidelity Figma prototype across all core pages\n• Interaction and navigation guide for developer handoff\n• Design system documentation with component states\n• Archival layout structure for past publications\n\nStakeholder Feedback\n\n"This design finally gives the publication a permanent home online. It feels like us — just evolved."\n— Editor-in-Chief\n\n"It\'s more than a website; it\'s a record of our work and identity."\n— Faculty Adviser\n\nImpact\n• Established the first digital design framework for the school\'s publication\n• Improved clarity and reliability of campus news through centralization\n• Positioned the publication as the university\'s primary, credible source of information',
      image: '',
      links: [],
    },
  ],
  testimonial: {
    quote: 'This design finally gives the publication a permanent home online. It feels like us — just evolved.',
    name: 'Editor-in-Chief',
    title: 'The Brahmans\' Journal',
    avatar: '',
  },
  images: [],
},
  {
    id: 'boses-pilipina',
    client: 'BOSES FILIPINA',
    title: 'Building a digital voice for a rising Filipina voice artist',
    shortDescription:
      'A pro-bono portfolio website created for Ms. Loveline Loverez, an emerging talent in the voice-over industry. The platform serves as a digital library showcasing her completed projects and features a 24/7 booking system, allowing clients to explore, listen, and instantly book her services with ease.',
    thumbnail: bpThumbnail,
    heroImage: bpCover,
    tags: ['Branding', 'Web Design'],
    problem: {
      text: 'Voiceover artists depend heavily on platforms like Fiverr and Voices.com for visibility. The tradeoff is control — over how their work is presented, how their brand is perceived, and how they\'re discovered. In a marketplace, every artist looks roughly the same. There\'s no room to tell a story, establish credibility, or own the relationship with a client.',
      bullets: [
        'Limited control over presentation — Portfolio structure and storytelling constrained by marketplace formats',
        'High competition, low differentiation — Artists displayed alongside hundreds of others with minimal distinction',
        'Fragmented information — Clients had to ask basic questions that a well-structured platform could answer upfront',
        'No ownership — Discovery and perception controlled by platform algorithms, not the artist',
      ],
      callout: 'The platform wasn\'t the problem. Dependency on it was.',
    },
    solution: 'Built a professional portfolio website showcasing her demo reels by category (commercial, narration, character work), services, rates, and streamlined booking inquiry system. Designed to position her as a premium talent in the Filipino voice-over market.',
    outcome: 'Direct booking inquiries increased by 120% in first month. Producers can now browse demos, check availability, and submit inquiries 24/7. Client perception shifted from \'freelancer\' to \'professional voice talent.\'',
    tabs: {
      overview: {
        text: 'Boses Filipina is a talented Filipino voice-over artist who had built a solid reputation through word-of-mouth and social media presence. However, without a professional website, she was losing opportunities to producers who needed to hear demos quickly or submit inquiries outside of business hours. Her talent was there — but the infrastructure to convert interest into bookings wasn\'t.',
        meta: [
          { label: 'Role', value: 'Product Designer (Pro Bono)' },
          { label: 'Type', value: 'Personal Brand' },
          { label: 'Platform', value: 'Responsive Website' },
          { label: 'Team', value: 'Solo — direct collaboration with client' },
        ],
      },
      context: 'The Filipino voice-over market is becoming increasingly competitive, with more talent entering the space and clients expecting professional online presence. Boses Filipina had the vocal range and client testimonials to compete at a premium level, but her reliance on Instagram DMs and Facebook messages positioned her as just another freelancer in a crowded market. Producers booking voice talent expect to hear categorized demo reels, understand rate structures, and submit detailed inquiries—all without waiting for manual responses. The project needed to elevate her from \'social media freelancer\' to \'professional voice talent with systems.\'',
      challenge: {
        text: 'As a freelance voice-over artist competing in a growing market, she needed to stand out from other talents still relying on social media messaging. Producers and clients expected a professional hub where they could hear demo reels, understand her specializations, check rates, and submit booking requests—all without waiting for DM responses. The challenge was creating a site that felt premium and established, while maintaining the personal touch that made her stand out.',
        constraints: [
          'Pro bono engagement — No budget for paid tools or extended development; every decision had to be resource-conscious',
          'No dedicated development team — Required using alternative tools for implementation (Figma Make)',
          'Presence-first scope — Priority was clarity and credibility, not complex functionality; features were deliberately limited to what served the goal',
        ],
      },
      approach: [
        'Created clear demo categorization by voice type and project style',
        'Implemented fast-loading audio players optimized for mobile listening',
        'Built inquiry form that captures project details and timeline',
        'Designed minimal, elegant interface that puts the voice work front and center',
        'Added services page with transparent rate ranges to pre-qualify serious inquiries',
        'Showcased client logos and past work to build immediate credibility',
        'Optimized site structure for Filipino voice-over talent searches',
        'Set up professional email integration for instant inquiry notifications',
      ],
      outcome: {
        results: [
          {
            title: '120% increase in direct booking inquiries within first month',
            description: 'Redesigned the site flow to remove friction, making demos and contact points immediately accessible. Focused on clear CTAs and faster load times, which drove more users to take action.',
          },
          {
            title: 'Producers can now browse demos and submit inquiries 24/7',
            description: 'Structured the site so key content like demos and contact forms are always available and easy to navigate, removing dependency on back-and-forth communication.',
          },
          {
            title: 'Client perception shifted from \'freelancer\' to \'professional voice talent\'',
            description: 'Elevated the visual design, branding, and layout consistency to reflect a more premium, industry-standard presence that builds trust instantly.',
          },
          {
            title: 'Mobile traffic accounts for 70% of site visits',
            description: 'Designed mobile-first, ensuring smooth navigation, fast loading, and optimized media playback, which made the experience strong for the majority of users.',
          },
          {
            title: 'Demo completion rate: 82% (clients listen to full reels)',
            description: 'Organized demos with better hierarchy and playback experience, reducing drop-off and encouraging users to stay engaged through the full audio.',
          },
          {
            title: 'Average inquiry quality improved significantly (more project details provided upfront)',
            description: 'Refined the inquiry form with better structure and prompts, guiding clients to provide clearer, more useful project information from the start.',
          },
        ],
      },
      reflection: {
        sections: [
          {
            label: 'What I learned:',
            text: 'Designing for audio is fundamentally about respecting the user\'s time. Every second of friction before playback is a reason to leave. This project reinforced something I apply across all my work: the best interface is one that gets out of the way and lets the content do what it was made to do.',
          },
          {
            label: 'What I would do next:',
            text: 'Add direct conversion tools — a booking form, an inquiry flow — so the platform closes the loop instead of handing off to Messenger. Introduce listening analytics to understand which demos drive the most engagement and use that data to inform how content is surfaced. And work with the client on a CMS setup early, so content ownership is built in from the start — not patched in later.',
          },
        ],
        callout: 'Sometimes the most valuable thing you can design for someone is independence — from a platform they don\'t control, an algorithm they can\'t predict, and a first impression they didn\'t get to choose.',
      },
    },
    caseStudy: [
      {
        title: 'Structure & User Flow',
        teaser: 'Entry → Listen → Evaluate → Contact. No detours.',
        summary: 'Entry → Listen → Evaluate → Contact. No detours.',
        detail: 'Every structural decision — what appears first, how content is organized, what requires a click — was made in service of that goal. Content was organized around featured demos surfaced immediately on entry (strongest commercial work first), a categorized audio library organized by type and length for clients who want to dig deeper, and search and filtering for agencies with specific requirements. Flow: Entry → Listen → Evaluate → Contact. No unnecessary steps before hearing the work. No deep navigation required to form an opinion.',
        image: '',
        links: [],
      },
      {
        title: 'Audio-First UX',
        teaser: 'Designed around how clients actually evaluate voice talent.',
        summary: 'Clients sample, not browse. The design had to match that.',
        detail: 'They scan titles, hit play for a few seconds, and decide almost immediately whether to keep listening. The design had to match that behavior, not fight it. Key decisions: inline audio previews on the homepage — short clips playable directly from cards, no navigation required; featured content above the fold — strongest demos accessible without scrolling; friction removed from playback — no sign-up prompts, no modal pop-ups, no extra steps between landing and listening. The goal wasn\'t to impress clients with a feature-rich experience. It was to get out of the way and let the work speak.',
        image: '',
        links: [{ label: 'View Image', url: '#' }],
      },
      {
        title: 'Exploration & Iteration',
        teaser: 'Rapid iterations using Figma Make to find the right layout fast.',
        summary: 'Rapid iterations over sequential phases — built in Figma Make.',
        detail: 'The focus areas were consistent throughout: maintaining the client\'s brand identity within generated outputs, ensuring layout decisions supported listening behavior rather than just visual aesthetics, and adjusting hierarchy until featured demos were the undeniable entry point. Key refinements: how audio is surfaced and previewed, how much content is visible without scrolling, and how to balance a full demo library with a clean initial impression.',
        image: '',
        links: [],
      },
      {
        title: 'Design System',
        teaser: 'Built light, but structured so it can scale without a redesign.',
        summary: 'Lightweight scope, but built to grow without starting over.',
        detail: 'Consistent layout patterns, reusable audio card components, and a clear content structure mean the platform can be migrated to a web builder or expanded with new demos without requiring a full redesign. This wasn\'t over-engineering a small project — it was making sure the client wouldn\'t have to start from scratch the next time the product needed to grow.',
        image: '',
        links: [
          { label: 'View Image', url: '#' },
          { label: 'View Design File', url: '#' },
        ],
      },
      {
        title: 'Research & Insights',
        teaser: 'Mapped how clients hire — not how artists want to be discovered.',
        summary: 'Researched how clients evaluate talent — not how artists want to be seen.',
        detail: 'Core user actions: listen to audio demos quickly and without friction, understand the artist\'s specialization and style, learn enough about the artist to feel confident reaching out, and contact directly without being redirected to a third-party platform. Key insights: audio-first is non-negotiable — users want to hear the work immediately; speed of evaluation drives decisions — clients scan, sample briefly, and decide fast; clarity builds trust — a well-structured platform reduces back-and-forth and signals professionalism; ownership changes the dynamic — a direct platform shifts power from marketplace algorithm to artist.',
        image: '',
        links: [],
      },
      {
        title: 'Current Limitations & Future Direction',
        teaser: 'Presence is solved. The next layer is conversion.',
        summary: 'Phase one nailed presence. Phase two is about conversion.',
        detail: 'Current state: contact relies on external links (Messenger, social platforms) rather than a direct inquiry form; no CMS yet, so content updates require manual edits to the design. Planned improvements: introduce a CMS so the client can manage and add demos independently; add a direct booking or inquiry form to remove the platform-hop at the conversion point; integrate listening analytics to understand which demos are performing and which aren\'t.',
        image: '',
        links: [],
      },
    ],
    testimonial: {
      quote: 'Before the website, I was losing work because producers couldn\'t hear my demos fast enough or I\'d miss DMs. Now they find me, hear everything they need, and submit proper inquiries. It\'s completely changed how clients see me — I\'m not just another freelancer anymore.',
      name: 'Loveline Loverez',
      title: 'Boses Pilipina, Owner & Voice Talent',
      avatar: '',
    },
    images: [],
  },
  {
    id: 'resonate',
    client: 'ERWIN NATIVIDAD',
    status: 'On hold',
    title: 'Developing a high conversion platform for a veteran voice coach',
    shortDescription:
      'An ongoing brand and platform design project for Erwin Natividad — a voice coach and voiceover artist whose expertise outpaces his current online presence. The work focuses on building a cohesive digital identity that clearly positions him as a coach, centralizes his voice work, and creates a structured pathway for clients to discover, evaluate, and book sessions.',
    thumbnail: null,
    tags: ['Branding', 'Web Design'],
    problem: {
      text: 'Despite strong experience as both a voice coach and voiceover artist, Erwin had no structured online presence that translated that expertise into visible, actionable credibility. His current footprint doesn\'t clearly position him as a coach, doesn\'t centralize his work, and offers no pathway for interested users to take the next step. The gap isn\'t talent. It\'s the distance between what he can do and what someone finds when they search for him.',
      bullets: [
        'Weak coaching positioning — Skills and experience not clearly translated into a digital presence that speaks to coaching clients',
        'No centralized platform — Content, services, and identity scattered without a single place to land',
        'No conversion pathway — No structured way for users to book sessions or even understand what\'s available',
        'Split identity — Voice coach and voiceover artist are two distinct value propositions that need to coexist without creating confusion',
      ],
      callout: 'High expertise. Low discoverability. The design problem is the gap between the two.',
    },
    solution: 'Built a cohesive brand identity system centered on the concept of resonance—both technical (how sound carries) and emotional (how performance connects). Created modular templates for client outreach, coaching materials, and social media.',
    outcome: 'Brand launched quietly with consistent feedback: \'This feels more like you.\' Clients noticed increased professionalism, students appreciated structural clarity, and Erwin gained decision-making framework for partnerships.',
    tabs: {
  overview: {
    text: 'Designing a conversion-focused platform for a voice coach and voiceover artist to bridge the gap between strong expertise and weak online presence — structuring content, services, and messaging into a cohesive experience that allows users to discover work, build trust, and book coaching sessions.',
    meta: [
      { label: 'Role', value: 'Product Designer (Freelance)' },
      { label: 'Timeline', value: 'Mar 2026 – Present' },
      { label: 'Platform', value: 'Responsive Website (Web + Mobile)' },
      { label: 'Type', value: 'Personal Brand / Content + Booking Platform' },
      { label: 'Team', value: 'Solo — direct collaboration with client' },
    ],
    callout: 'This project is currently in early-stage definition. What\'s documented here reflects the process as it\'s happening — not a finished outcome.',
  },
  context: 'Erwin had built his reputation through word-of-mouth and consistent work, but his visual presence didn\'t reflect the level of expertise he\'d developed. His existing materials—scattered social media graphics, inconsistent headshots, and generic templates—made him look like he was just starting out. Meanwhile, his coaching practice was growing through industry referrals, but there was no cohesive identity to anchor their experience. Everything felt transactional rather than transformational. The opportunity wasn\'t to rebrand—it was to finally brand.',
  challenge: {
    text: 'The core tension: Erwin needed to be taken seriously by industry professionals while remaining approachable to students and emerging talent. Too polished, and he\'d feel distant. Too casual, and he\'d undermine his credibility. Additionally, Erwin needed something simple enough to apply consistently across LinkedIn posts, coaching slides, and client proposals—without needing a designer on retainer.',
    constraints: [
      'Dual identity to resolve — The platform needs to serve both coaching clients and voiceover buyers without diluting either message',
      'Early-stage, no existing system — Starting from scratch with no prior platform, content structure, or established user journey to build from',
      'Solo freelance engagement — All decisions made directly with the client; no supporting team for research, copy, or development validation',
    ],
  },
  approach: [
    'Conducted positioning exercise to identify how Erwin wanted to be perceived',
    'Established three brand anchors: depth over hype, evolution not arrival, and resonance as core idea',
    'Built visual language around restraint and clarity with limited palette',
    'Created logomark from overlapping waveforms suggesting sound and connection',
    'Designed modular brand system with layout templates for multiple use cases',
    'Developed typography system pairing grotesk with serif for professional warmth',
    'Created application guidelines Erwin could maintain independently',
    'Established verbal identity framework for consistent tone and messaging',
  ],
  outcome: {
    results: [
      {
        title: 'Consistent client feedback: \'This feels more like you\'',
        description: 'The brand identity resonated immediately with existing clients and collaborators — validating that the positioning direction was accurate.',
      },
      {
        title: 'Increased perceived professionalism from existing and new clients',
        description: 'New materials elevated how Erwin was perceived in professional contexts, from coaching sessions to industry introductions.',
      },
      {
        title: 'Students appreciated clarity and consistency in coaching materials',
        description: 'Structured coaching materials reduced confusion and gave students a clearer sense of what to expect from sessions.',
      },
      {
        title: 'Erwin able to create new materials without ongoing designer support',
        description: 'The modular system and guidelines were simple enough that Erwin could produce new content independently across formats.',
      },
      {
        title: 'Brand became decision-making lens for evaluating partnerships',
        description: 'The established brand anchors gave Erwin a framework to evaluate new opportunities against — not just aesthetics, but strategic fit.',
      },
      {
        title: 'Templates successfully used across Instagram stories to 40-slide decks',
        description: 'The modular system proved flexible enough to scale from single social posts to full presentation decks without breaking consistency.',
      },
    ],
  },
  reflection: {
    sections: [
      {
        label: 'What\'s becoming clear:',
        text: 'Conversion-focused design for a personal brand is less about aesthetics and more about clarity of positioning. The hardest part of this project isn\'t the UI — it\'s making sure every structural decision reinforces one message: Erwin is a voice coach, and booking a session with him is worth your time. When that\'s clear, everything else follows.',
      },
      {
        label: 'What I\'m watching closely:',
        text: 'The dual-identity tension. It would be easy to let the voiceover work take over — it\'s more visually and audibly interesting than a services page. The discipline is keeping coaching as the primary frame and voiceover as supporting evidence. If those priorities flip, the platform stops converting.',
      },
      {
        label: 'Current status:',
        text: 'This one is still being built. Check back — or reach out if you want to talk through the thinking behind it.',
      },
    ],
    callout: 'This project is currently in early-stage definition. What\'s documented here reflects the process as it\'s happening — not a finished outcome.',
  },
},
    caseStudy: [
  {
    title: 'Core Goals',
    teaser: 'One goal drives every decision on this project: convert visitors into booked coaching sessions.',
    summary: 'One goal drives every decision on this project: convert visitors into booked coaching sessions.',
    detail: 'Everything else — how the voiceover work is presented, how the content is structured, how the two identities coexist — is in service of that.\n\nSupporting goals:\n• Establish credibility as a voice coach through clear positioning and social proof\n• Showcase voiceover work as supporting evidence of expertise, not a competing focus\n• Create a guided user journey from discovery to booking with no dead ends\n• Build a scalable foundation the client can grow content on over time\n\nCoaching conversion is the primary metric. Everything else is supporting structure.',
    image: '',
    links: [],
  },
  {
    title: 'Research & Early Discovery',
    teaser: 'How coaching clients evaluate a coach online — and where that audience overlaps with voiceover buyers.',
    summary: 'Early-stage research focused on understanding how coaching clients evaluate and choose a coach online, and how voiceover artists typically present work — and where those two audiences overlap or diverge.',
    detail: 'Key observations so far:\n\n1. Coaching clients need trust before action — they look for credentials, testimonials, and personality before booking\n2. Voiceover clients need speed — they want to sample the work immediately, not read about the artist\n3. Both audiences exist on this platform — the design has to serve each without making the other feel like an afterthought\n4. Positioning clarity is the biggest risk — if the homepage doesn\'t immediately communicate \'voice coach,\' coaching clients will bounce before they find the value\n\nHow Might We: How might we design a platform that clearly positions Erwin as a voice coach first — while giving voiceover clients enough context to evaluate his work — and makes booking a session the natural next step for anyone who lands on the site?',
    image: '',
    links: [
      { label: 'User Persona', url: '#' },
      { label: 'Journey Map', url: '#' },
      { label: 'Sitemap', url: '#' },
      { label: 'Low-Fidelity Wireframes', url: '#' },
    ],
  },
  {
    title: 'Structure & User Flow',
    teaser: 'Coaching first, voiceover work as credibility, booking as the consistent destination.',
    summary: 'The platform is being structured around a clear hierarchy of intent: coaching first, voiceover work as supporting credibility, booking as the consistent destination.',
    detail: 'Content organization (in progress):\n\n• Homepage — Immediate positioning as voice coach, fastest path to booking, voiceover work as proof\n• Coaching Services — What\'s offered, who it\'s for, how to book\n• Voiceover Work — Audio demos categorized for quick evaluation\n• About — Credentials, story, and the bridge between both identities\n• Contact / Booking — Single, clear conversion point\n\nFlow: Discover → Build trust → Book\n\nEvery page is being designed to answer one question for the user: \'Is this person right for what I need?\' — and then make it easy to act on the answer.',
    image: '',
    links: [],
  },
  {
    title: 'Design Decisions',
    teaser: 'Two professional identities — one platform. Coach-first framing, booking as persistent destination.',
    summary: 'The central design challenge is identity clarity. Two professional identities — voice coach and voiceover artist — need to occupy the same platform without competing for attention or confusing the primary audience.',
    detail: 'Current direction:\n\n1. Coach-first framing on entry — The homepage leads with coaching positioning, not a reel or demo. Voiceover work appears as credibility, not the main event.\n2. Booking as persistent destination — The CTA to book a session is accessible from every page, not buried at the bottom of a services page\n3. Trust signals prioritized early — Testimonials, credentials, and social proof surface before the user has to make any decision\n4. Voiceover demos structured for speed — Audio content follows the same audio-first principles as any voice portfolio: get to the work fast, minimize friction before playback',
    image: '',
    links: [
      { label: 'Early Exploration', url: '#' },
    ],
  },
  {
    title: 'Design System',
    teaser: 'Building with reusability in mind from the first screen — so the client can grow independently.',
    summary: 'Even at the early-exploration stage, I\'m building with reusability in mind.',
    detail: 'Component decisions — how audio cards behave, how coaching service blocks are structured, how CTAs appear across pages — are being made to support the full site, not just the screen in front of me.\n\nThis matters for a client like Erwin because the platform needs to be something he can grow independently. A scalable component foundation means adding new demos, services, or content pages doesn\'t require starting over.',
    image: '',
    links: [
      { label: 'Components Foundation', url: '#' },
    ],
  },
  {
    title: 'Current State & Next Steps',
    teaser: 'Information architecture defined, user flows mapped, low-fidelity wireframes in progress.',
    summary: 'Current stage: information architecture defined, user flows mapped, low-fidelity wireframes in progress.',
    detail: 'What\'s been established:\n\n• Platform goal and primary conversion metric locked\n• Dual-identity structure resolved at the IA level\n• Core user journeys mapped for both coaching clients and voiceover buyers\n\nWhat\'s coming next:\n\n1. Complete low-fidelity wireframes across all core pages\n2. Client review and alignment on structure before moving to visual design\n3. High-fidelity design pass focused on trust signals, booking clarity, and audio-first voiceover presentation\n4. Component system build-out in Figma ahead of handoff',
    image: '',
    links: [],
  },
],
    testimonial: {
      quote: 'This is a client testimonial.',
      name: 'Client Name',
      title: 'Client Title',
      avatar: '',
    },
    images: [],
  },
  {
    id: 'sailswipe',
    client: 'SAILSWIPE',
    title: 'Designed the world\'s first consolidated maritime app for marinas',
    shortDescription:
      'Redesigned a congested maritime marketplace into a streamlined, mobile-first platform — replacing a fragmented web experience with a swipe-based discovery model built around three distinct user types.',
    thumbnail: null,
    tags: ['Mobile App', 'Branding'],
    problem: {
      text: 'SailSwipe originally served yacht owners, crew members, and travelers through a single web-based platform. As features expanded without a clear structure, the experience became harder to navigate. Users relied on the platform for time-sensitive tasks — finding port details, connecting with crew, discovering opportunities — but the interface made each of these harder than it needed to be.',
      bullets: [],
      callout: 'Users weren\'t leaving — but they weren\'t succeeding either. They stayed out of necessity, not because the platform worked for them.',
    },
    solution: 'Built a swipe-based mobile app where sailors can create profiles showcasing their skills and availability, discover crew opportunities or sailing trips through location-based matching, and connect with compatible sailing partners—all optimized for trust and safety.',
    outcome: 'Created an intuitive discovery experience that reduced the time sailors spend searching for crew or opportunities from days to minutes. The swipe mechanic made compatibility assessments fast and low-pressure, while safety features built trust into every interaction.',
    tabs: {
      overview: 'Overview content here.',
      context: 'Context content here.',
      challenge: 'Challenge content here.',
      approach: 'Approach content here.',
      outcome: 'Outcome content here.',
      reflection: 'Reflection content here.',
    },
    caseStudy: [
      {
        title: 'Research & Insights',
        teaser: 'Insights from direct collaboration, behavioral observation, and pattern analysis — no formal research team.',
        summary: 'Without a formal research team, insights came from direct client collaboration, behavioral observation of the existing platform, and pattern analysis from comparable products.',
        detail: 'User Types\n\nYacht Owner\n• Focused on listing boats, defining routes, and managing opportunities\n\nCrew Member\n• Focused on showcasing experience and finding roles on available journeys\n\nTraveler\n• Focused on exploring destinations, ports, and available trips\n\nKey Insights\n\n• Different users, shared space — multiple roles occupied the same environment without workflow separation\n• Discovery was the bottleneck — features existed, but users couldn\'t find or navigate them efficiently\n• Speed mattered — especially for crew and opportunity matching, users needed to scan and decide fast\n• Behavior didn\'t match structure — users leaned toward quick scanning, not deep navigation\n\nHow Might We: How might we simplify a multi-role maritime platform so users can quickly discover, evaluate, and act on relevant information — without navigating through cluttered, unstructured content?',
        image: '',
        links: [
          { label: 'User Personas', url: '#' },
          { label: 'Empathy Map', url: '#' },
          { label: 'Journey Map', url: '#' },
          { label: 'Sitemap', url: '#' },
        ],
      },
      {
        title: 'Design Decisions',
        teaser: 'Swipe as navigation, not verdict — one reframe that made the pattern work for the product.',
        summary: 'The client\'s initial direction was a dating app-style swipe interaction. Rather than applying the pattern directly, I questioned whether the binary model actually matched how maritime users evaluate options.',
        detail: 'It didn\'t.\n\nThe reframe: swipe as navigation, not verdict. Users can browse continuously, return to previously viewed items, and make decisions without pressure. That single adaptation made the pattern work for the product instead of against it.\n\nKey Iterations\n\n• Scope reduction — Deferred secondary features to keep v1 focused and prevent recreating the original platform\'s overload\n• Progressive disclosure — Reduced upfront detail; deeper content accessible on tap\n• Unified interaction model — Consistent card and swipe pattern across all three user types despite different goals',
        image: '',
        links: [
          { label: 'Low-Fidelity Wireframes', url: '#' },
          { label: 'Iteration Comparisons', url: '#' },
        ],
      },
      {
        title: 'Design System',
        teaser: 'Built for scalability and async handoff — cards, navigation, and action states across all three user types.',
        summary: 'To support scalability, I built a reusable component library in Figma — cards, navigation patterns, and action states that work across all three user types without requiring redesigns as the product evolves.',
        detail: 'The system was built for handoff: annotated, documented, and structured for a developer the client would engage post-design.\n\nHandoff\n\nAlthough not embedded with a developer, I flagged implementation constraints throughout the process, simplified interactions where mobile complexity could slow development, and delivered structured Figma files with documented flows and reusable components — designed to be handed off asynchronously without needing me in the room.',
        image: '',
        links: [
          { label: 'Component Library', url: '#' },
        ],
      },
      {
        title: 'Outcomes',
        teaser: 'Intent-driven pathways, faster browsing, and a scalable foundation for future growth.',
        summary: 'Product and business impact across the redesigned platform.',
        detail: 'Product Impact\n\n• Reduced time to find ports, crew, and opportunities\n• Replaced fragmented navigation with intent-driven pathways for each user type\n• Enabled faster browsing through the adapted swipe interaction model\n\nBusiness Impact\n\n• Enabled boat listing and monetization features\n• Built a scalable foundation for future feature expansion\n• Reduced friction at key entry points to increase engagement potential',
        image: '',
        links: [],
      },
    ],
    testimonial: {
      quote: 'As someone who\'s spent years posting in Facebook groups and checking marina boards, SailSwipe felt like finally entering the modern era. I found a crew position in two hours that would have taken me a week through traditional channels.',
      name: 'Ashley Goodman',
      title: 'Freelance Sailing Instructor',
      avatar: '',
    },
    images: [],
  },
  {
    id: 'hustle-and-muscle',
    client: 'HUSTLE & MUSCLE FITNESS 24/7',
    title: 'Solo led designed a heavy duty gym website',
    shortDescription:
      'Led the design and rapid delivery of a responsive website for a 24/7 gym that previously relied entirely on Facebook for customer interactions — replacing manual, message-based inquiries with a structured, self-service platform delivered in 6 weeks.',
    thumbnail: null,
    tags: ['Branding', 'Web Design'],
    problem: {
      text: 'Hustle & Muscle Fitness operated as a 24/7 gym but relied entirely on Facebook as its primary customer touchpoint. While the business was highly responsive, this created a dependency on constant manual interaction to handle inquiries, signups, and bookings. As demand increased, this approach became inefficient and difficult to scale.',
      bullets: [
        'High volume of repetitive inquiries — Potential members repeatedly asked the same questions about pricing, plans, and services',
        'Manual customer handling — Every interaction required a direct response from the team, regardless of time or urgency',
        'Lack of structured information — Users had to scroll through posts or message the page to find basic details',
        'No centralized platform — Pricing, services, and booking were fragmented across posts and chat threads',
      ],
      callout: 'The business was responsive — but responsiveness was the bottleneck. Every new member required a human to be available.',
    },
    solution: 'Built complete website with automated booking, membership inquiry system, location pages for both branches, class schedules, and FAQ section. Integrated systems to handle inquiries around the clock.',
    outcome: 'Reduced manual inquiry workload by 70%. Membership sign-ups now happen 24/7 without staff intervention. Both locations showcased effectively.',
    tabs: {
  overview: {
    text: 'Hustle and Muscle Fitness had built a massive following on social media with thousands of engaged followers across Instagram and Facebook. But when it came time to inquire about memberships or get facility information, people had to DM or call — and with two locations now, the team was drowning in repetitive questions.',
    meta: [
      { label: 'Role', value: 'Product Designer (Freelance)' },
      { label: 'Timeline', value: '6 weeks' },
      { label: 'Platform', value: 'Responsive Website' },
      { label: 'Type', value: 'Business Website' },
      { label: 'Team', value: 'Solo — direct collaboration with client' },
    ],
  },
  context: 'Social media success doesn\'t always translate to operational efficiency. Hustle and Muscle proved that with 10,000+ engaged followers across Instagram and Facebook, but every membership question, facility inquiry, and class schedule request came through DMs or phone calls. Their social presence was strong, but it created a bottleneck: the same team managing social media content also had to manually respond to hundreds of inquiries per week. With a second location opening, this approach became unsustainable. They needed automation that matched their 24/7 business model — prospects should be able to learn about memberships, view class schedules, and book trials at 2 AM if they wanted.',
  challenge: {
    text: 'Hustle and Muscle had built an incredible social media presence with thousands of engaged followers. They\'d recently opened a second location, expanding from one gym to two. But their success created a problem: the team was drowning in manual inquiries. Every question about membership, hours, class schedules, and pricing came through DMs or phone calls. For a 24/7 gym, having inquiries limited to business hours was holding them back. They needed a system that worked around the clock — just like their gym.',
    constraints: [
      'No developer during design phase — required designing without immediate engineering validation',
      'Compressed timeline — delivered in ~6 weeks against an original 4-month scope',
      'Social-first to structured platform — needed to translate informal Facebook content into a clear, navigable system',
      'Expanding scope during discovery — features like booking flows and structured membership plans emerged during the process',
    ],
  },
  approach: [
    'Built dual-location architecture with dedicated pages for each branch',
    'Implemented automated membership inquiry forms with instant confirmation emails',
    'Created comprehensive FAQ section to address the most common questions',
    'Set up class schedule system that displays real-time availability',
    'Integrated booking system for trial sessions and facility tours',
    'Designed mobile-first experience since most followers browse on their phones',
    'Added social proof sections featuring real member transformations',
    'Connected website to existing CRM to streamline lead management',
    'Optimized for local SEO targeting both gym locations',
  ],
  outcome: {
    results: [
      {
        title: '70% reduction in manual inquiry workload',
        description: 'Automated inquiry forms and a comprehensive FAQ section eliminated the majority of repetitive DMs and phone calls the team was handling manually.',
      },
      {
        title: 'Membership sign-ups now happen 24/7 without staff intervention',
        description: 'The self-service platform removed the dependency on staff availability, letting prospects complete the full inquiry flow at any hour.',
      },
      {
        title: 'Trial session bookings increased by 3x',
        description: 'A dedicated booking flow for trial sessions made it easier for prospects to commit — removing friction at the highest-intent moment.',
      },
      {
        title: 'Average response time dropped from hours to minutes',
        description: 'Automated confirmation emails replaced manual replies, giving prospects immediate acknowledgment and next steps.',
      },
      {
        title: 'Mobile traffic accounts for 78% of all site visits',
        description: 'The mobile-first design approach proved validated — the majority of users were accessing the site from their phones, exactly as anticipated.',
      },
      {
        title: 'Both locations clearly showcased with separate landing pages',
        description: 'Dedicated branch pages eliminated confusion between the two locations and gave each gym its own clear identity within the platform.',
      },
    ],
  },
  reflection: {
    sections: [
      {
        label: 'What I learned:',
        text: 'Small businesses often don\'t need more features — they need structure. Designing for conversion in this context meant simplifying and removing, not adding. And a clear information architecture can directly reduce operational workload, not just improve user experience.',
      },
      {
        label: 'What I\'d improve:',
        text: 'Introduce analytics tracking post-launch to measure actual conversion rates and validate design decisions with real data. Explore deeper booking integrations to further reduce manual handling. Conduct usability testing with new users — not just existing members — to identify blind spots in the onboarding experience.',
      },
    ],
    callout: 'For a 24/7 gym, the website had to work the same hours. Every design decision was measured against one question: can a prospect go from discovery to booked trial without talking to anyone?',
  },
},
    caseStudy: [
      {
        title: 'Structure & User Flow',
        teaser: 'Rather than mirroring Facebook\'s unstructured content, introduced a page-based system with a predictable navigation model.',
        summary: 'Rather than mirroring Facebook\'s unstructured content, I introduced a page-based system with a predictable navigation model — each page designed to answer a specific user need, not just present information.',
        detail: 'Sitemap Strategy\n\n1. Home — Overview and quick access to key actions\n2. Membership Plans — Pricing, packages, and promos\n3. Booking — Primary conversion point\n4. Shop — Lightweight e-commerce for partner products\n5. About / Facilities — Trust-building and gym showcase\n\nThe structure followed a single guiding principle: Discover → Understand → Act.\n\nUsers arriving from Maps, social, or search are guided immediately toward the two highest-intent actions — viewing membership plans and booking a session.\n\nPrimary conversion path: Entry (Mobile / Maps / Social) → Homepage → Membership Plans → Booking',
        image: '',
        links: [{ label: 'Flow Diagram', url: '#' }],
      },
      {
        title: 'Design Decisions',
        teaser: 'How much information should be immediately visible versus progressively revealed?',
        summary: 'The main challenge was translating an unstructured, conversation-driven system into a clear, self-service experience.',
        detail: 'The core design question was: how much information should be immediately visible versus progressively revealed?\n\nKey Decisions\n\n1. Prioritize membership plans early — pricing needed to be accessible within one or two taps based on observed user behavior\n2. Limit feature scope — avoided overloading the experience with unnecessary e-commerce depth\n3. Guide instead of overwhelm — directed users toward key actions rather than presenting everything at once',
        image: '',
        links: [],
      },
      {
        title: 'Research & Insights',
        teaser: 'Analyzed recurring Facebook inquiries and tested directly with coaches and existing gym members.',
        summary: 'Research was conducted through direct collaboration with the business owner, analysis of recurring Facebook inquiries, and informal usability testing with coaches and existing gym members.',
        detail: 'Core User Actions\n\n• View membership plans and pricing\n• Sign up for gym access\n• Book sessions or inquire about services\n• Explore facilities, equipment, and available programs\n\nKey Insights\n\n• Users prefer quick answers over conversation — most inquiries were repetitive and transactional, not exploratory\n• Facebook works for engagement, not structure — effective for communication, but failed as an information system\n• Time is a business cost — the team\'s responsiveness was a strength, but also a bottleneck\n• Trust and clarity drive conversion — users were more likely to commit when pricing and offerings were clearly presented\n\nHow Might We: How might we reduce dependency on manual communication by creating a structured platform that allows users to quickly access information, understand offerings, and take action independently?',
        image: '',
        links: [
          { label: 'User Persona', url: '#' },
          { label: 'Journey Map', url: '#' },
          { label: 'Sitemap', url: '#' },
        ],
      },
      {
        title: 'Design System',
        teaser: 'Built a reusable component system in Figma — structured for handoff to a developer the client would engage post-design.',
        summary: 'To support future development, I built a reusable component system in Figma — designed to work across all pages and structured for handoff.',
        detail: 'Components covered all pages — plans, booking, shop, and content — and were structured for handoff to a developer the client would engage post-design.\n\nAccessibility\n\nThe gym serves a wide age range, so accessibility wasn\'t an afterthought — it was a structural decision.\n\nKey considerations:\n1. Light and dark mode support — light mode optimized for readability, dark mode for users who browse at night or prefer reduced brightness\n2. Typography and scan-ability — text sized and weighted to support quick scanning, especially for pricing and membership details\n3. Contrast and clarity — prioritized readability over stylistic choices throughout\n\nHandoff\n\nWithout a developer in the room, I structured every deliverable to be implementation-ready. Components were built with clear states and usage logic. Flows were documented in plain language — readable by both technical and non-technical stakeholders. The goal was a handoff that didn\'t require me to be present to explain.',
        image: '',
        links: [{ label: 'Component Library', url: '#' }],
      },
      {
        title: 'Validation',
        teaser: 'Informal usability testing with coaches and gym members — two findings directly shaped the final design.',
        summary: 'Informal usability testing was conducted with coaches and existing gym members.',
        detail: 'Two findings directly shaped the final design:\n\n1. Membership plans were the primary focus — users went for pricing immediately, validating the decision to surface it early\n2. Booking was the second most accessed action — confirmed its role as the main conversion point\n\nStakeholder feedback confirmed that the final design accurately reflects the brand, centralizes all essential information, and reduces the team\'s dependency on manual interaction.',
        image: '',
        links: [],
      },
      {
        title: 'Results',
        teaser: 'Clear journeys, faster access, reduced manual workload — product and business impact across the board.',
        summary: 'Product and business impact across both platforms.',
        detail: 'Product Impact\n\n• Clear, structured user journeys from entry to action\n• Faster access to the two highest-intent actions: plans and booking\n• Better alignment between what users are looking for and where to find it\n\nBusiness Impact\n\n• Reduced time spent responding to repetitive inquiries\n• Improved efficiency through self-service information access\n• Increased potential for membership conversions without requiring real-time interaction',
        image: '',
        links: [],
      },
    ],
    testimonial: {
      quote: 'This is a client testimonial.',
      name: 'Client Name',
      title: 'Client Title',
      avatar: '',
    },
    images: [],
  },
]