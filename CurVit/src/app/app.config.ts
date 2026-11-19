import { DOCUMENT, ViewportScroller } from '@angular/common';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    /**
     * Compensa el header fijo al saltar a una ancla.
     * Angular calcula la posición del elemento y le resta este offset,
     * así el título de la sección no queda oculto detrás del menú.
     */
    provideAppInitializer(() => {
      const document = inject(DOCUMENT);
      inject(ViewportScroller).setOffset(() => {
        const header = document.querySelector<HTMLElement>('.site-header');
        return [0, (header?.offsetHeight ?? 72) + 16];
      });
    }),
  ],
};
