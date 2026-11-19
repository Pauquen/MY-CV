import type {
  Credential,
  Profile,
  Project,
  ProjectStatus,
  SkillGroup,
  SkillLevel,
  TimelineItem,
  TimelineKind,
} from '../models/cv.models';
import type { IconName } from '../models/icon-name';

export type Lang = 'es' | 'en';

/** Enlace del menú. El `id` coincide con el id de la sección. */
export interface NavLink {
  id: string;
  label: string;
}

/** Encabezado reutilizable de cada sección. */
export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

/** Foco actual de la sección "Ahora mismo". */
export interface NowStep {
  title: string;
  detail: string;
  /** Texto de la píldora, p. ej. "En curso". */
  label: string;
  icon: IconName;
  color: string;
  tools: string[];
  /** Enlace opcional a evidencia real (proyecto, notebook…). */
  link?: string;
}

export interface NowContent {
  /** Pasos en curso: se pintan como tarjetas. */
  steps: NowStep[];
  /** Pasos futuros: se pintan en una sola línea al final. */
  nextSteps: string[];
  /** Mes y año de la última revisión de la sección. */
  updated: string;
  note: string;
}

/** Textos de interfaz que no viven dentro de un dato concreto. */
export interface UiContent {
  skipLink: string;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  projectStatus: Record<ProjectStatus, string>;
  timelineKind: Record<TimelineKind, string>;
  skillLevel: Record<SkillLevel, string>;
  credentialKind: Record<'certification' | 'activity', string>;
  filters: { all: string; certification: string; activity: string };
  actions: {
    viewProjects: string;
    contact: string;
    viewProject: string;
    noLink: string;
    viewDetail: string;
    viewLink: string;
    copyEmail: string;
    copied: string;
    downloadCv: string;
    backToTop: string;
  };
  labels: {
    brandTag: string;
    closeDialog: string;
    quickFacts: string;
    technologiesUsed: string;
    tags: string;
    filtersAria: string;
    socialAria: string;
    credentialDetailPrefix: string;
    credentialPending: string;
    detailType: string;
    detailIssuer: string;
    detailMeta: string;
    pendingNote: string;
    milestonePrefix: string;
    nextUp: string;
  };
}

export interface SiteContent {
  lang: Lang;
  nav: NavLink[];
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
  credentials: Credential[];
  timeline: TimelineItem[];
  now: NowContent;
  sections: {
    about: SectionCopy;
    now: SectionCopy;
    timeline: SectionCopy;
    skills: SectionCopy;
    projects: SectionCopy;
    credentials: SectionCopy;
    contact: SectionCopy;
  };
  hero: {
    greeting: string;
    badgeFocus: string;
    badgeHackathons: string;
    scrollAria: string;
  };
  about: {
    quoteLabel: string;
    factsTitle: string;
  };
  projectsNote: { before: string; link: string; after: string };
  credentialsNote: string;
  contact: {
    available: string;
    title: string;
    body: string;
    timezone: string;
    copiedHint: string;
  };
  footer: {
    tagline: string;
    sectionsAria: string;
    rights: string;
    privacy: string;
    madeWith: string;
    privacyTitle: string;
    privacyBody: string[];
  };
  ui: UiContent;
}
