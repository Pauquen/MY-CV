import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { CONTENT_EN } from './content.en';
import { CONTENT_ES } from './content.es';
import type { Lang, SiteContent } from './content.models';

const STORAGE_KEY = 'lang';

/**
 * Idioma del CV (ES/EN).
 * - Lee la preferencia guardada y, si no existe, el idioma del navegador.
 * - `content` es un signal: cualquier componente que lo lea en la plantilla
 *   se vuelve a renderizar al cambiar de idioma.
 * - Actualiza `<html lang>` y el título de la pestaña para lectores de
 *   pantalla y SEO básico.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly titles: Record<Lang, string> = {
    es: 'Paulo Quenta | CV — Ingeniería de Sistemas e Industrial',
    en: 'Paulo Quenta | CV — Systems & Industrial Engineering',
  };

  readonly lang = signal<Lang>('es');

  readonly content = computed<SiteContent>(() =>
    this.lang() === 'en' ? CONTENT_EN : CONTENT_ES,
  );

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const stored = this.readStored();
    const browserLang = this.document.documentElement.lang || navigator.language;
    const initial: Lang = stored ?? (browserLang.toLowerCase().startsWith('en') ? 'en' : 'es');

    this.apply(initial, false);
  }

  /** Cambia el idioma y lo recuerda para la próxima visita. */
  setLang(lang: Lang): void {
    if (lang === this.lang()) {
      return;
    }
    this.apply(lang, true);
  }

  toggle(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  private apply(lang: Lang, persist: boolean): void {
    this.lang.set(lang);
    this.document.documentElement.lang = lang;
    this.document.title = this.titles[lang];

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Si el navegador bloquea localStorage, el idioma sigue funcionando en esta sesión.
      }
    }
  }

  private readStored(): Lang | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'es' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }
}
