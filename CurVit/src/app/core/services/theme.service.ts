import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import type { Theme } from '../models/cv.models';

/**
 * Maneja el tema claro/oscuro.
 * - Lee la preferencia guardada en localStorage.
 * - Si no existe, respeta `prefers-color-scheme`.
 * - El script de `index.html` aplica el tema antes de Angular para evitar destellos.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>('light');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const attribute = this.document.documentElement.getAttribute('data-theme');
    const stored = this.readStored();
    const prefersDark =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initial: Theme =
      attribute === 'dark' || attribute === 'light'
        ? attribute
        : (stored ?? (prefersDark ? 'dark' : 'light'));

    this.theme.set(initial);
    this.apply(initial, false);
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.apply(next, true);
  }

  private apply(theme: Theme, persist: boolean): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.document.documentElement.style.colorScheme = theme;

    if (persist) {
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // Si el navegador bloquea localStorage, el tema sigue funcionando en esta sesión.
      }
    }

    const meta = this.document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute('content', theme === 'dark' ? '#071720' : '#f5f9fb');
  }

  private readStored(): Theme | null {
    try {
      const value = localStorage.getItem('theme');
      return value === 'dark' || value === 'light' ? value : null;
    } catch {
      return null;
    }
  }
}
