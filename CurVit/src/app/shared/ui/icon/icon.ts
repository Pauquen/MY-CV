import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IconName } from '../../../core/models/icon-name';

/**
 * Iconos SVG inline. Sin CDN, sin dependencias y heredan el color del texto.
 * Para usar uno: <app-icon name="mail"></app-icon>
 */
@Component({
  selector: 'app-icon',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        }
        @case ('moon') {
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        }
        @case ('menu') {
          <path d="M4 6h16M4 12h16M4 18h16" />
        }
        @case ('close') {
          <path d="M18 6 6 18M6 6l12 12" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M12 5l7 7-7 7" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M7 7h10v10" />
        }
        @case ('arrow-up') {
          <path d="M12 19V5M5 12l7-7 7 7" />
        }
        @case ('download') {
          <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        }
        @case ('map-pin') {
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        }
        @case ('github') {
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        }
        @case ('linkedin') {
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        }
        @case ('external-link') {
          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        }
        @case ('graduation') {
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" />
        }
        @case ('award') {
          <circle cx="12" cy="8" r="6" />
          <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
        }
        @case ('sparkles') {
          <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
          <path d="M19 17v4M17 19h4M5 3v3M3.5 4.5h3" />
        }
        @case ('code') {
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        }
        @case ('database') {
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
          <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
        }
        @case ('layers') {
          <path d="m12 2 10 5-10 5L2 7l10-5Z" />
          <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
        }
        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        }
        @case ('check') {
          <path d="m20 6-11 11-5-5" />
        }
        @case ('briefcase') {
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('calendar') {
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        }
        @case ('terminal') {
          <path d="m4 17 6-6-6-6M12 19h8" />
        }
        @case ('rocket') {
          <path d="M12 2c3 2 5 6 5 10l-3 3H10l-3-3c0-4 2-8 5-10Z" />
          <path d="m9 15-2 7 5-3 5 3-2-7" />
          <circle cx="12" cy="9" r="1.5" />
        }
        @case ('heart') {
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
        }
        @case ('refresh') {
          <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
        }
        @case ('angular') {
          <path d="M12 2 2.8 5.4 4.2 18 12 22l7.8-4 1.4-12.6L12 2Z" />
          <path d="m12 6.6-3.2 7.6h1.9l.6-1.6h3.4l.6 1.6h1.9L12 6.6Z" />
        }
        @case ('html') {
          <path d="M4 3h16l-1.4 15.4L12 21l-6.6-2.6L4 3Z" />
          <path d="M8 8h8M8.4 12h6.2M9.2 16l2.8.8 2.8-.8" />
        }
        @case ('css') {
          <path d="M8 7c-2 0-2 1.5-2 3s-1 2-2 2c1 0 2 .5 2 2s0 3 2 3" />
          <path d="M16 7c2 0 2 1.5 2 3s1 2 2 2c-1 0-2 .5-2 2s0 3-2 3" />
        }
        @case ('java') {
          <path d="M5 9h10v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
          <path d="M15 10h1.5a2.5 2.5 0 0 1 0 5H15" />
          <path d="M8 6c0-1 1-1 1-2M11.5 6c0-1 1-1 1-2" />
        }
        @case ('python') {
          <path d="M12 3c-3.5 0-4 1.4-4 3v2.5h4.5V10H7c-2 0-3 1.2-3 4s1 4 3 4h1.5v-2.5c0-2.2 1.3-3.5 3.5-3.5h3c1.8 0 3-1.2 3-3V6c0-1.6-.5-3-4-3Z" />
          <path d="M12 21c3.5 0 4-1.4 4-3v-2.5h-4.5V14H17c2 0 3-1.2 3-4s-1-4-3-4h-1.5v2.5c0 2.2-1.3 3.5-3.5 3.5h-3c-1.8 0-3 1.2-3 3V18c0 1.6.5 3 4 3Z" />
        }
        @case ('django') {
          <path d="M8 4v16" />
          <path d="M8 9a4 4 0 1 1 0 7" />
          <path d="M16 9v7.5c0 1.7-.8 2.5-2.2 2.5" />
        }
        @case ('node') {
          <path d="M12 2.3 20.4 7v10L12 21.7 3.6 17V7L12 2.3Z" />
          <path d="M9.2 15V9l2.8 1.7L14.8 9v6" />
        }
        @case ('postgres') {
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v10c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 11c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        }
        @case ('pyspark') {
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2 19 19M19 5l-2.8 2.8M7.8 16.2 5 19" />
          <circle cx="12" cy="12" r="2.5" />
        }
        @case ('numpy') {
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="1" />
          <circle cx="15" cy="9" r="1" />
          <circle cx="9" cy="15" r="1" />
          <circle cx="15" cy="15" r="1" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
