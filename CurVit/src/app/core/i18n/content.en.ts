import type { SiteContent } from "./content.models";

/**
 * ENGLISH CONTENT
 * ------------------------------------------------------------
 * Keep the same structure as `content.es.ts`. Anything you edit here
 * only affects the English version of the CV.
 */
export const CONTENT_EN: SiteContent = {
  lang: "en",
  nav: [
    { id: "inicio", label: "Home" },
    { id: "sobre-mi", label: "About" },
    { id: "ahora", label: "Now" },
    { id: "trayectoria", label: "Journey" },
    { id: "habilidades", label: "Skills" },
    { id: "proyectos", label: "Projects" },
    { id: "certificaciones", label: "Credentials" },
    { id: "contacto", label: "Contact" },
  ],

  profile: {
    fullName: "Paulo Estefano Quenta Ahumada",
    displayName: "Paulo Quenta",
    initials: "PQ",
    role: "Systems Engineering and Industrial Engineering student",
    university: "National University of San Agustín de Arequipa (UNSA)",
    universityShort: "UNSA · Arequipa",
    careers: ["Systems Engineering", "Industrial Engineering"],
    cycle: "6th semester",
    location: "Arequipa, Peru",
    email: "estequentaa@gmail.com",
    github: "https://github.com/Pauquen",
    linkedin: "https://www.linkedin.com/in/paulo-quenta-ahumada-b79324307/",
    availability: "Available for remote work and projects",
    focus: ["Artificial intelligence", "Data analysis"],
    heroPhrase:
      "I enjoy learning by building solutions that combine technology, data and design to solve real problems.",
    summary: [
      "I am Paulo Estefano Quenta Ahumada, a Systems Engineering and Industrial Engineering student at the National University of San Agustín de Arequipa. I am currently in my 6th semester and I look for ways to connect technology with concrete problems.",
      "I am interested in artificial intelligence and data analysis. I have taken part in hackathons such as NASA Space Apps and HACK4EDU, where I worked with a team to turn ideas into working prototypes.",
      "I like learning by building, keeping work organised and taking initiative. I want to keep growing in projects where software, data and design have real impact.",
    ],
    quote: "Walk toward the future.",
    photo: {
      src: "images/foto-perfil-900.webp",
      srcset: "images/foto-perfil-480.webp 480w, images/foto-perfil-900.webp 900w",
      sizes: "(max-width: 900px) 240px, 380px",
      alt: "Portrait of Paulo Estefano Quenta Ahumada",
      shape: "circle",
      position: "center 30%",
    },
    facts: [
      { icon: "map-pin", label: "Location", value: "Arequipa, Peru" },
      { icon: "graduation", label: "University", value: "UNSA" },
      { icon: "layers", label: "Degrees", value: "Systems & Industrial" },
      { icon: "calendar", label: "Current semester", value: "6th semester" },
      { icon: "sparkles", label: "Focus", value: "AI & data analysis" },
      { icon: "briefcase", label: "Availability", value: "Remote work and projects" },
    ],
    social: [
      { label: "Email", href: "mailto:estequentaa@gmail.com", icon: "mail" },
      { label: "GitHub", href: "https://github.com/Pauquen", icon: "github", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/paulo-quenta-ahumada-b79324307/",
        icon: "linkedin",
        external: true,
      },
    ],
  },

  skills: [
    {
      title: "Frontend",
      icon: "code",
      description: "Web interfaces and reusable components.",
      skills: [
        {
          name: "Angular",
          level: "basic",
          description: "Components, services and routing.",
          icon: "angular",
          color: "#dd0031",
        },
        {
          name: "HTML",
          level: "intermediate",
          description: "Semantic structure and accessibility.",
          icon: "html",
          color: "#e34f26",
        },
        {
          name: "CSS",
          level: "intermediate",
          description: "Flexbox, Grid, responsive layouts and animations.",
          icon: "css",
          color: "#1572b6",
        },
      ],
    },
    {
      title: "Backend",
      icon: "terminal",
      description: "Server logic and APIs.",
      skills: [
        {
          name: "Java",
          level: "intermediate",
          description: "OOP, data structures and backend logic.",
          icon: "java",
          color: "#e76f00",
        },
        {
          name: "Python",
          level: "basic",
          description: "Fundamentals, scripts and data analysis.",
          icon: "python",
          color: "#3776ab",
        },
        {
          name: "Django",
          level: "basic",
          description: "Models, views and queries.",
          icon: "django",
          color: "#2ba977",
        },
        {
          name: "Node.js",
          level: "basic",
          description: "Basic backend development.",
          icon: "node",
          color: "#5fa04e",
        },
      ],
    },
    {
      title: "Databases",
      icon: "database",
      description: "Modelling and queries.",
      skills: [
        {
          name: "PostgreSQL",
          level: "basicIntermediate",
          description: "SQL queries and integration with Django and Supabase.",
          icon: "postgres",
          color: "#4169e1",
        },
      ],
    },
    {
      title: "Data & AI",
      icon: "sparkles",
      description: "Technologies I am exploring.",
      skills: [
        {
          name: "NumPy",
          level: "learning",
          description: "Numerical computing and arrays for data analysis.",
          icon: "numpy",
          color: "#4dabcf",
        },
        {
          name: "PySpark",
          level: "learning",
          description: "Processing large volumes of data.",
          icon: "pyspark",
          color: "#e25a1c",
        },
      ],
    },
    {
      title: "Soft skills",
      icon: "users",
      description: "How I like to work.",
      skills: [
        {
          name: "Teamwork",
          level: "practising",
          description: "Sharing ideas, discussing and reaching agreement.",
          icon: "users",
          color: "#0e7490",
        },
        {
          name: "Initiative",
          level: "practising",
          description: "Proposing solutions and taking responsibility.",
          icon: "rocket",
          color: "#7c5cd6",
        },
        {
          name: "Organisation",
          level: "practising",
          description: "Ordering tasks and meeting deadlines.",
          icon: "layers",
          color: "#0f9da8",
        },
        {
          name: "Adaptability",
          level: "practising",
          description: "Learning new tools as the challenge requires.",
          icon: "refresh",
          color: "#d97706",
        },
      ],
    },
  ],

  projects: [
    {
      title: "Grob-Post",
      description: "Web platform to organise study schedules and share posts with your group.",
      tech: ["Angular", "Django", "PostgreSQL"],
      link: "https://grob-post.netlify.app/",
      image: "images/projects/grob-post.webp",
      imageAlt: "Screenshot of the Grob-Post application",
      initials: "GP",
      status: "live",
      featured: true,
    },
    {
      title: "FlowAI",
      description:
        "Project that aims to bring AI into small and medium businesses to ease their transition to a circular economy.",
      tech: ["PySpark", "Python", "PostgreSQL"],
      initials: "FA",
      status: "wip",
    },
    {
      title: "MyCiberSpace",
      description:
        "Platform proposal for developers to share ideas, form teams and tackle problems with AI under ethical and environmental principles.",
      tech: ["Angular", "REST", "Python", "PostgreSQL"],
      initials: "MC",
      status: "proposal",
    },
  ],

  credentials: [
    {
      kind: "certification",
      title: "AI Development",
      issuer: "BIG SCHOOL × MoureDev",
      meta: "6 hours",
      description:
        "Certificate earned after completing 6 hours of training in development with artificial intelligence.",
      image: "images/certs/ia-1.webp",
      imageAlt: "AI Development certificate from BIG SCHOOL and MoureDev",
      initials: "AI",
      tags: ["Artificial intelligence", "Training"],
    },
    // Pending templates: uncomment and fill in when you have the details.
    // {
    //   kind: 'certification',
    //   title: 'Frontend Certificate',
    //   issuer: 'Complementary training',
    //   meta: 'Issuer, date and hours to be confirmed',
    //   description:
    //     'Frontend development certification. [EDIT: issuer, date and hours in content.en.ts].',
    //   initials: 'FE',
    //   tags: ['Frontend'],
    //   pending: true,
    // },
    // {
    //   kind: 'certification',
    //   title: 'Backend Certificate',
    //   issuer: 'Complementary training',
    //   meta: 'Issuer, date and hours to be confirmed',
    //   description:
    //     'Backend development certification. [EDIT: issuer, date and hours in content.en.ts].',
    //   initials: 'BE',
    //   tags: ['Backend'],
    //   pending: true,
    // },
    {
      kind: "activity",
      title: "NASA Space Apps Challenge 2025",
      issuer: "Hackathon",
      meta: "2025",
      description:
        "I joined my team to build a demo web application for a basic educational simulation.",
      image: "images/activities/nasa.webp",
      imageAlt: "Participation in NASA Space Apps Challenge 2025",
      initials: "NASA",
      tags: ["Teamwork", "Web prototyping"],
    },
    {
      kind: "activity",
      title: "HACK4EDU 2025",
      issuer: "Hackathon",
      meta: "2025",
      description:
        "I worked with a multidisciplinary team to build a web page for assessing student education and psychological wellbeing.",
      image: "images/activities/hackedu.webp",
      imageAlt: "Participation in HACK4EDU 2025",
      initials: "H4E",
      tags: ["Multidisciplinary team", "Student wellbeing"],
    },
  ],

  timeline: [
    {
      period: "Present",
      title: "Systems Engineering and Industrial Engineering",
      org: "UNSA · Arequipa",
      description:
        "Currently in the 6th semester. Coursework in programming, data structures, databases and software development.",
      kind: "education",
      icon: "graduation",
      tags: ["Systems", "Industrial"],
    },
    {
      period: "Continuous learning",
      title: "AI Development",
      org: "BIG SCHOOL × MoureDev",
      description:
        "A 6-hour certification focused on building solutions with artificial intelligence.",
      kind: "certification",
      icon: "award",
      tags: ["Artificial intelligence"],
    },
    {
      period: "2025",
      title: "NASA Space Apps Challenge",
      org: "Hackathon",
      description:
        "Built a demo web application for a basic educational simulation, working in a team against the clock.",
      kind: "experience",
      icon: "rocket",
      tags: ["Teamwork", "Prototyping"],
    },
    {
      period: "2025",
      title: "HACK4EDU",
      org: "Hackathon",
      description:
        "Took part in a multidisciplinary team to create a web page for assessing education and student wellbeing.",
      kind: "experience",
      icon: "users",
      tags: ["Multidisciplinary team", "Student wellbeing"],
    },
  ],

  now: {
    steps: [
      {
        title: "NumPy and data analysis",
        detail:
          "Arrays, vectorised operations and cleaning data. The foundation for analysing a real dataset without getting lost along the way.",
        label: "In progress",
        icon: "numpy",
        color: "#4dabcf",
        tools: ["NumPy", "Python"],
      },
      {
        title: "PySpark in FlowAI",
        detail:
          "Processing data volumes that do not fit comfortably in memory, and knowing when the effort is worth it. Applied in FlowAI, a project under development.",
        label: "In progress",
        icon: "pyspark",
        color: "#e25a1c",
        tools: ["PySpark", "Python"],
        link: "#proyectos",
      },
    ],
    nextSteps: ["pandas and visualisation", "Applied AI (scikit-learn)"],
    updated: "Reviewed in November 2026",
    note: "I learn by building: when a step produces something worth showing, it ends up in Projects.",
  },

  sections: {
    about: {
      eyebrow: "About me",
      title: "Technology with purpose, constant learning",
      description: "A little about who I am, what drives me and how I work.",
    },
    now: {
      eyebrow: "Current focus",
      title: "What I am working on",
      description: "The topics I am working on now and what comes next, in order.",
    },
    timeline: {
      eyebrow: "Education and experience",
      title: "My journey so far",
      description: "Academic training, certifications and hackathons that shaped the path.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools I use and keep learning",
      description: "Honest levels: what I already practise and what I am starting to explore.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I have built or am imagining",
      description: "Real work, proposals and experiments where I apply what I am learning.",
    },
    credentials: {
      eyebrow: "Certifications and experiences",
      title: "Courses, certificates and experiences",
      description: "Certificates earned and experiences where I put learning into practice.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we talk?",
      description:
        "I am open to projects, internships and collaborations. Write to me and I will reply.",
    },
  },

  hero: {
    greeting: "Hi, I am Paulo",
    badgeFocus: "AI & Data",
    badgeHackathons: "Hackathons",
    scrollAria: "Scroll to the About section",
  },

  about: {
    quoteLabel: "My motto",
    factsTitle: "Quick facts",
  },

  projectsNote: {
    before: "Have an idea or project in mind?",
    link: "Let's talk",
    after: ".",
  },

  credentialsNote: "Want the details? Click any card.",

  contact: {
    available: "Available for new challenges",
    title: "Let's build something together",
    body: "You can email me or find me on GitHub and LinkedIn. Tell me what you have in mind and I will get back to you as soon as possible.",
    timezone: "Peru time zone (GMT-5)",
    copiedHint: "Done. The email is in your clipboard.",
  },

  footer: {
    tagline:
      "Personal CV of Paulo Estefano Quenta Ahumada. Student, developer and enthusiast of AI and data analysis.",
    sectionsAria: "CV sections",
    rights: "All rights reserved.",
    privacy: "Privacy",
    madeWith: "Built with Angular, learning along the way",
    privacyTitle: "Privacy and data",
    privacyBody: [
      "This site is a personal CV. It uses no cookies, analytics or sign-up forms.",
      "The only information stored in your browser is your theme and language preferences in localStorage. You can clear them from your browser settings.",
      "Links to GitHub, LinkedIn and email open external services with their own privacy policies.",
      "If you contact me by email, I will use your data only to reply to your message.",
    ],
  },

  ui: {
    skipLink: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Main navigation",
    projectStatus: {
      live: "Live demo",
      wip: "In development",
      proposal: "Proposal",
    },
    timelineKind: {
      education: "Education",
      certification: "Certification",
      experience: "Experience",
      project: "Project",
    },
    skillLevel: {
      learning: "Learning",
      basic: "Basic",
      basicIntermediate: "Basic–Intermediate",
      intermediate: "Intermediate",
      practising: "Practising",
      advanced: "Advanced",
      expert: "Expert",
    },
    credentialKind: {
      certification: "Certification",
      activity: "Experience",
    },
    filters: {
      all: "All",
      certification: "Certifications",
      activity: "Experiences",
    },
    actions: {
      viewProjects: "View projects",
      contact: "Contact me",
      viewProject: "View project",
      noLink: "No public link yet",
      viewDetail: "View details",
      viewLink: "Open link",
      copyEmail: "Copy email",
      copied: "Email copied",
      downloadCv: "Download CV",
      backToTop: "Back to top",
    },
    labels: {
      brandTag: "CV · Engineering",
      closeDialog: "Close",
      quickFacts: "Quick facts",
      technologiesUsed: "Technologies used",
      tags: "Tags",
      filtersAria: "Filter certifications and experiences",
      socialAria: "Social profiles",
      credentialDetailPrefix: "View details of ",
      credentialPending: "Pending details",
      detailType: "Type",
      detailIssuer: "Issuer / event",
      detailMeta: "Details",
      pendingNote: "Information pending in content.en.ts.",
      milestonePrefix: "Milestone",
      nextUp: "Next up",
    },
  },
};
