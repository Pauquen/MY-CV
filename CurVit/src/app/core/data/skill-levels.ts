import type { SkillLevel } from '../models/cv.models';

/**
 * ESCALA DE HABILIDADES
 * ------------------------------------------------------------
 * Única fuente de verdad del largo de las barras. Si cambias un
 * porcentaje aquí, se actualiza en todas las secciones.
 *
 * La etiqueta visible (“Intermedio”, “Intermediate”…) está en
 * `core/i18n/content.es.ts` / `content.en.ts`, dentro de `ui.skillLevel`.
 *
 * Para añadir un nivel:
 *   1. Agrega la clave en `SkillLevel` (`core/models/cv.models.ts`).
 *   2. Agrega su porcentaje en este objeto.
 *   3. Agrega su etiqueta en los dos archivos de contenido.
 */
export const SKILL_LEVEL_PERCENT: Record<SkillLevel, number> = {
  learning: 10,
  basic: 25,
  basicIntermediate: 40,
  intermediate: 50,
  practising: 50,
  advanced: 75,
  expert: 100,
};

