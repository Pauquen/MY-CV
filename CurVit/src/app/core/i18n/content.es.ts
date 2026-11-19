import type { SiteContent } from './content.models';

/**
 * CONTENIDO EN ESPAÑOL
 * ------------------------------------------------------------
 * Todo el texto visible del CV vive aquí. Para cambiar la versión
 * en inglés, edita `content.en.ts` con la misma estructura.
 */
export const CONTENT_ES: SiteContent = {
  lang: 'es',
  nav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'ahora', label: 'Ahora' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'contacto', label: 'Contacto' },
  ],

  profile: {
    fullName: 'Paulo Estefano Quenta Ahumada',
    displayName: 'Paulo Quenta',
    initials: 'PQ',
    role: 'Estudiante de Ingeniería de Sistemas e Ingeniería Industrial',
    university: 'Universidad Nacional de San Agustín de Arequipa (UNSA)',
    universityShort: 'UNSA · Arequipa',
    careers: ['Ingeniería de Sistemas', 'Ingeniería Industrial'],
    cycle: '6.º ciclo',
    location: 'Arequipa, Perú',
    email: 'estequentaa@gmail.com',
    github: 'https://github.com/Pauquen',
    linkedin: 'https://www.linkedin.com/in/paulo-quenta-ahumada-b79324307/',
    availability: 'Disponible para trabajos remotos y proyectos',
    focus: ['Inteligencia artificial', 'Análisis de datos'],
    heroPhrase:
      'Me gusta aprender creando soluciones que combinan tecnología, datos y diseño para resolver problemas reales.',
    summary: [
      'Soy Paulo Estefano Quenta Ahumada, estudiante de Ingeniería de Sistemas e Ingeniería Industrial en la Universidad Nacional de San Agustín de Arequipa. Actualmente curso el 6.º ciclo y busco conectar la tecnología con problemas concretos.',
      'Me interesan la inteligencia artificial y el análisis de datos. He participado en hackathones como NASA Space Apps y HACK4EDU, donde trabajé en equipo para convertir ideas en prototipos funcionales.',
      'Me gusta aprender experimentando, ordenar el trabajo y tomar iniciativa. Quiero seguir creciendo en proyectos donde el software, los datos y el diseño tengan impacto real.',
    ],
    quote: 'Camina hacia el futuro.',
    photo: {
      src: 'images/foto-perfil-900.webp',
      srcset: 'images/foto-perfil-480.webp 480w, images/foto-perfil-900.webp 900w',
      sizes: '(max-width: 900px) 240px, 380px',
      alt: 'Retrato de Paulo Estefano Quenta Ahumada',
      shape: 'circle',
      position: 'center 30%',
    },
    facts: [
      { icon: 'map-pin', label: 'Ubicación', value: 'Arequipa, Perú' },
      { icon: 'graduation', label: 'Universidad', value: 'UNSA' },
      { icon: 'layers', label: 'Carreras', value: 'Sistemas e Industrial' },
      { icon: 'calendar', label: 'Ciclo actual', value: '6.º ciclo' },
      { icon: 'sparkles', label: 'Enfoque', value: 'IA y análisis de datos' },
      { icon: 'briefcase', label: 'Disponibilidad', value: 'Trabajos remotos y proyectos' },
    ],
    social: [
      { label: 'Correo', href: 'mailto:estequentaa@gmail.com', icon: 'mail' },
      { label: 'GitHub', href: 'https://github.com/Pauquen', icon: 'github', external: true },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/paulo-quenta-ahumada-b79324307/',
        icon: 'linkedin',
        external: true,
      },
    ],
  },

  skills: [
    {
      title: 'Frontend',
      icon: 'code',
      description: 'Interfaces web y componentes reutilizables.',
      skills: [
        {
          name: 'Angular',
          level: 'basic',
          description: 'Componentes, servicios y routing.',
          icon: 'angular',
          color: '#dd0031',
        },
        {
          name: 'HTML',
          level: 'intermediate',
          description: 'Estructura semántica y accesibilidad.',
          icon: 'html',
          color: '#e34f26',
        },
        {
          name: 'CSS',
          level: 'intermediate',
          description: 'Flexbox, Grid, responsive y animaciones.',
          icon: 'css',
          color: '#1572b6',
        },
      ],
    },
    {
      title: 'Backend',
      icon: 'terminal',
      description: 'Lógica de servidor y APIs.',
      skills: [
        {
          name: 'Java',
          level: 'intermediate',
          description: 'POO, estructuras de datos y lógica backend.',
          icon: 'java',
          color: '#e76f00',
        },
        {
          name: 'Python',
          level: 'basic',
          description: 'Fundamentos, scripts y análisis de datos.',
          icon: 'python',
          color: '#3776ab',
        },
        {
          name: 'Django',
          level: 'basic',
          description: 'Modelos, vistas y consultas.',
          icon: 'django',
          color: '#2ba977',
        },
        {
          name: 'Node.js',
          level: 'basic',
          description: 'Desarrollo backend básico.',
          icon: 'node',
          color: '#5fa04e',
        },
      ],
    },
    {
      title: 'Bases de datos',
      icon: 'database',
      description: 'Modelado y consultas.',
      skills: [
        {
          name: 'PostgreSQL',
          level: 'basicIntermediate',
          description: 'Consultas SQL e integración con Django y Supabase.',
          icon: 'postgres',
          color: '#4169e1',
        },
      ],
    },
    {
      title: 'Datos e IA',
      icon: 'sparkles',
      description: 'Tecnologías que estoy explorando.',
      skills: [
        {
          name: 'NumPy',
          level: 'learning',
          description: 'Cálculo numérico y arreglos para análisis de datos.',
          icon: 'numpy',
          color: '#4dabcf',
        },
        {
          name: 'PySpark',
          level: 'learning',
          description: 'Procesamiento de volúmenes de datos.',
          icon: 'pyspark',
          color: '#e25a1c',
        },
      ],
    },
    {
      title: 'Habilidades blandas',
      icon: 'users',
      description: 'Cómo me gusta trabajar.',
      skills: [
        {
          name: 'Trabajo en equipo',
          level: 'practising',
          description: 'Compartir ideas, debatir y llegar a acuerdos.',
          icon: 'users',
          color: '#0e7490',
        },
        {
          name: 'Iniciativa',
          level: 'practising',
          description: 'Proponer soluciones y asumir responsabilidades.',
          icon: 'rocket',
          color: '#7c5cd6',
        },
        {
          name: 'Organización',
          level: 'practising',
          description: 'Ordenar tareas y cumplir con los plazos.',
          icon: 'layers',
          color: '#0f9da8',
        },
        {
          name: 'Adaptabilidad',
          level: 'practising',
          description: 'Aprender herramientas nuevas según el reto.',
          icon: 'refresh',
          color: '#d97706',
        },
      ],
    },
  ],

  projects: [
    {
      title: 'Grob-Post',
      description:
        'Plataforma web para organizar horarios de estudio y compartir publicaciones con tu grupo.',
      tech: ['Angular', 'Django', 'PostgreSQL'],
      link: 'https://grob-post.netlify.app/',
      image: 'images/projects/grob-post.webp',
      imageAlt: 'Captura de la aplicación Grob-Post',
      initials: 'GP',
      status: 'live',
      featured: true,
    },
    {
      title: 'FlowAI',
      description:
        'Proyecto que busca implementar IA en PYMES y MYPES para facilitar su transición hacia la economía circular.',
      tech: ['PySpark', 'Python', 'PostgreSQL'],
      initials: 'FA',
      status: 'wip',
    },
    {
      title: 'MyCiberSpace',
      description:
        'Propuesta de plataforma para que desarrolladores compartan ideas, formen equipos y aborden problemas con IA bajo principios éticos y ambientales.',
      tech: ['Angular', 'REST', 'Python', 'PostgreSQL'],
      initials: 'MC',
      status: 'proposal',
    },
  ],

  credentials: [
    {
      kind: 'certification',
      title: 'Desarrollo con IA',
      issuer: 'BIG SCHOOL × MoureDev',
      meta: '6 horas',
      description:
        'Certificado obtenido tras completar 6 horas de formación en desarrollo con inteligencia artificial.',
      image: 'images/certs/ia-1.webp',
      imageAlt: 'Certificado de Desarrollo con IA de BIG SCHOOL y MoureDev',
      initials: 'IA',
      tags: ['Inteligencia artificial', 'Formación'],
    },
    // Plantillas pendientes: descomenta y completa cuando tengas los datos.
    // {
    //   kind: 'certification',
    //   title: 'Certificado Frontend',
    //   issuer: 'Formación complementaria',
    //   meta: 'Emisor, fecha y horas por confirmar',
    //   description:
    //     'Certificación de desarrollo frontend. [EDITAR: emisor, fecha y horas en content.es.ts].',
    //   initials: 'FE',
    //   tags: ['Frontend'],
    //   pending: true,
    // },
    // {
    //   kind: 'certification',
    //   title: 'Certificado Backend',
    //   issuer: 'Formación complementaria',
    //   meta: 'Emisor, fecha y horas por confirmar',
    //   description:
    //     'Certificación de desarrollo backend. [EDITAR: emisor, fecha y horas en content.es.ts].',
    //   initials: 'BE',
    //   tags: ['Backend'],
    //   pending: true,
    // },
    {
      kind: 'activity',
      title: 'NASA Space Apps Challenge 2025',
      issuer: 'Hackathon',
      meta: '2025',
      description:
        'Participé junto a mi equipo en el desarrollo de un software web demostrativo para una simulación educativa básica.',
      image: 'images/activities/nasa.webp',
      imageAlt: 'Participación en NASA Space Apps Challenge 2025',
      initials: 'NASA',
      tags: ['Trabajo en equipo', 'Prototipado web'],
    },
    {
      kind: 'activity',
      title: 'HACK4EDU 2025',
      issuer: 'Hackathon',
      meta: '2025',
      description:
        'Participé con un equipo multidisciplinario en el desarrollo de una página web para evaluar educación y bienestar estudiantil psicológico.',
      image: 'images/activities/hackedu.webp',
      imageAlt: 'Participación en HACK4EDU 2025',
      initials: 'H4E',
      tags: ['Equipo multidisciplinario', 'Bienestar estudiantil'],
    },
  ],

  timeline: [
    {
      period: 'Actualidad',
      title: 'Ingeniería de Sistemas e Ingeniería Industrial',
      org: 'UNSA · Arequipa',
      description:
        'Cursando el 6.º ciclo. Formación en programación, estructuras de datos, bases de datos y desarrollo de software.',
      kind: 'education',
      icon: 'graduation',
      tags: ['Sistemas', 'Industrial'],
    },
    {
      period: 'Formación continua',
      title: 'Desarrollo con IA',
      org: 'BIG SCHOOL × MoureDev',
      description:
        'Certificación de 6 horas enfocada en el desarrollo de soluciones con inteligencia artificial.',
      kind: 'certification',
      icon: 'award',
      tags: ['Inteligencia artificial'],
    },
    {
      period: '2025',
      title: 'NASA Space Apps Challenge',
      org: 'Hackathon',
      description:
        'Desarrollo de un software web demostrativo para una simulación educativa básica, en equipo y contra reloj.',
      kind: 'experience',
      icon: 'rocket',
      tags: ['Trabajo en equipo', 'Prototipado'],
    },
    {
      period: '2025',
      title: 'HACK4EDU',
      org: 'Hackathon',
      description:
        'Participación en un equipo multidisciplinario para crear una página web de evaluación de educación y bienestar estudiantil.',
      kind: 'experience',
      icon: 'users',
      tags: ['Equipo multidisciplinario', 'Bienestar estudiantil'],
    },
  ],

  now: {
    steps: [
      {
        title: 'NumPy y análisis de datos',
        detail:
          'Arreglos, operaciones vectorizadas y limpieza de datos. La base para analizar un dataset real sin perderse en el intento.',
        label: 'En curso',
        icon: 'numpy',
        color: '#4dabcf',
        tools: ['NumPy', 'Python'],
      },
      {
        title: 'PySpark en FlowAI',
        detail:
          'Procesar volúmenes de datos que no caben cómodos en memoria, entendiendo cuándo vale la pena el esfuerzo. Aplicado en FlowAI, proyecto en desarrollo.',
        label: 'En curso',
        icon: 'pyspark',
        color: '#e25a1c',
        tools: ['PySpark', 'Python'],
        link: '#proyectos',
      },
    ],
    nextSteps: ['pandas y visualización', 'IA aplicada (scikit-learn)'],
    updated: 'Revisado en noviembre de 2026',
    note: 'Aprendo construyendo: cuando un paso da lugar a algo mostrable, acaba en Proyectos.',
  },

  sections: {
    about: {
      eyebrow: 'Sobre mí',
      title: 'Tecnología con propósito, aprendizaje constante',
      description: 'Un poco de quién soy, qué me mueve y cómo trabajo.',
    },
    now: {
      eyebrow: 'Foco actual',
      title: 'En qué estoy trabajando',
      description: 'Los temas que tengo entre manos ahora y los que llegan después, en orden.',
    },
    timeline: {
      eyebrow: 'Formación y experiencia',
      title: 'Mi trayectoria hasta ahora',
      description:
        'Formación académica, certificaciones y hackathones que han marcado el camino.',
    },
    skills: {
      eyebrow: 'Habilidades',
      title: 'Herramientas que uso y sigo aprendiendo',
      description: 'Niveles honestos: lo que ya practico y lo que estoy empezando a explorar.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Cosas que he construido o estoy imaginando',
      description:
        'Trabajos reales, propuestas y experimentos donde aplico lo que voy aprendiendo.',
    },
    credentials: {
      eyebrow: 'Certificaciones y experiencias',
      title: 'Cursos, certificados y experiencias',
      description: 'Certificados obtenidos y experiencias donde puse en práctica lo aprendido.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Hablamos?',
      description:
        'Estoy abierto a proyectos, prácticas y colaboraciones. Escríbeme y respondo.',
    },
  },

  hero: {
    greeting: 'Hola, soy Paulo',
    badgeFocus: 'IA & Datos',
    badgeHackathons: 'Hackathones',
    scrollAria: 'Bajar a la sección Sobre mí',
  },

  about: {
    quoteLabel: 'Mi frase de cabecera',
    factsTitle: 'Datos rápidos',
  },

  projectsNote: {
    before: '¿Tienes una idea o proyecto en mente?',
    link: 'Conversemos',
    after: '.',
  },

  credentialsNote: '¿Quieres ver el detalle? Haz clic en cualquier tarjeta.',

  contact: {
    available: 'Disponible para nuevos retos',
    title: 'Construyamos algo juntos',
    body: 'Puedes escribirme por correo o encontrarme en GitHub y LinkedIn. Cuéntame qué tienes en mente y te responderé lo antes posible.',
    timezone: 'Zona horaria de Perú (GMT-5)',
    copiedHint: 'Listo. El correo está en tu portapapeles.',
  },

  footer: {
    tagline:
      'CV personal de Paulo Estefano Quenta Ahumada. Estudiante, desarrollador y entusiasta de la IA y el análisis de datos.',
    sectionsAria: 'Secciones del CV',
    rights: 'Todos los derechos reservados.',
    privacy: 'Privacidad',
    madeWith: 'Hecho con Angular, aprendiendo en el camino',
    privacyTitle: 'Privacidad y datos',
    privacyBody: [
      'Este sitio es un CV personal. No usa cookies, analítica ni formularios de registro.',
      'La única información que se guarda en tu navegador son tus preferencias de tema e idioma en localStorage. Puedes borrarlas desde la configuración de tu navegador.',
      'Los enlaces a GitHub, LinkedIn y correo abren servicios externos con sus propias políticas de privacidad.',
      'Si me contactas por correo, usaré tus datos únicamente para responder a tu mensaje.',
    ],
  },

  ui: {
    skipLink: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    navLabel: 'Navegación principal',
    projectStatus: {
      live: 'Demo en vivo',
      wip: 'En desarrollo',
      proposal: 'Propuesta',
    },
    timelineKind: {
      education: 'Formación',
      certification: 'Certificación',
      experience: 'Experiencia',
      project: 'Proyecto',
    },
    skillLevel: {
      learning: 'Aprendiendo',
      basic: 'Básico',
      basicIntermediate: 'Básico–Intermedio',
      intermediate: 'Intermedio',
      practising: 'En práctica',
      advanced: 'Avanzado',
      expert: 'Experto',
    },
    credentialKind: {
      certification: 'Certificación',
      activity: 'Experiencia',
    },
    filters: {
      all: 'Todo',
      certification: 'Certificaciones',
      activity: 'Experiencias',
    },
    actions: {
      viewProjects: 'Ver proyectos',
      contact: 'Contactarme',
      viewProject: 'Ver proyecto',
      noLink: 'Sin enlace público todavía',
      viewDetail: 'Ver detalle',
      viewLink: 'Ver enlace',
      copyEmail: 'Copiar correo',
      copied: 'Correo copiado',
      downloadCv: 'Descargar CV',
      backToTop: 'Volver al inicio',
    },
    labels: {
      brandTag: 'CV · Ingeniería',
      closeDialog: 'Cerrar',
      quickFacts: 'Datos rápidos',
      technologiesUsed: 'Tecnologías usadas',
      tags: 'Etiquetas',
      filtersAria: 'Filtrar certificaciones y experiencias',
      socialAria: 'Redes sociales',
      credentialDetailPrefix: 'Ver detalle de ',
      credentialPending: 'Pendiente de completar',
      detailType: 'Tipo',
      detailIssuer: 'Emisor / evento',
      detailMeta: 'Detalle',
      pendingNote: 'Información pendiente de completar en content.es.ts.',
      milestonePrefix: 'Hito',
      nextUp: 'Después',
    },
  },
};
