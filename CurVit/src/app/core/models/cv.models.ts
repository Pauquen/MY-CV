import type { IconName } from './icon-name';

export type Theme = 'light' | 'dark';

/** Formas soportadas para la foto de portada. */
export type PhotoShape = 'circle' | 'portrait';

export interface ProfilePhoto {
  src: string;
  srcset?: string;
  sizes?: string;
  alt: string;
  shape: PhotoShape;
  /** Permite ajustar el encuadre sin tocar el CSS. Ej: 'center 30%'. */
  position?: string;
}

export interface ProfileFact {
  label: string;
  value: string;
  icon: IconName;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export interface Profile {
  fullName: string;
  displayName: string;
  initials: string;
  role: string;
  university: string;
  universityShort: string;
  careers: string[];
  cycle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  focus: string[];
  heroPhrase: string;
  summary: string[];
  quote: string;
  photo: ProfilePhoto;
  facts: ProfileFact[];
  social: SocialLink[];
}

/**
 * Escala de dominio de una habilidad.
 * El porcentaje de la barra vive en `core/data/skill-levels.ts` y la etiqueta
 * visible en `core/i18n/content.*.ts` (`ui.skillLevel`).
 */
export type SkillLevel =
  | 'learning'
  | 'basic'
  | 'basicIntermediate'
  | 'intermediate'
  | 'practising'
  | 'advanced'
  | 'expert';

export interface Skill {
  name: string;
  level: SkillLevel;
  description?: string;
  /** Icono de la tecnología, dibujado inline. */
  icon: IconName;
  /** Color de marca usado en el chip del icono. */
  color: string;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  description: string;
  skills: Skill[];
}

/** Estado del proyecto. El texto visible se resuelve por idioma. */
export type ProjectStatus = 'live' | 'wip' | 'proposal';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  imageAlt?: string;
  initials: string;
  status: ProjectStatus;
  featured?: boolean;
}

export type CredentialKind = 'certification' | 'activity';

export interface Credential {
  kind: CredentialKind;
  title: string;
  issuer: string;
  meta: string;
  description: string;
  image?: string;
  imageAlt?: string;
  initials: string;
  link?: string;
  tags: string[];
  /** Marca los datos que todavía debes completar. */
  pending?: boolean;
}

/** Tipo de hito. El texto visible se resuelve por idioma. */
export type TimelineKind = 'education' | 'certification' | 'experience' | 'project';

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  kind: TimelineKind;
  icon: IconName;
  tags: string[];
}
