import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Fondo decorativo con una red neuronal, una línea de tendencia y puntos de
 * datos. Es puramente visual: no recibe foco, no bloquea clics y respeta
 * `prefers-reduced-motion` (la animación global se desactiva).
 */
@Component({
  selector: 'app-data-backdrop',
  template: `
    <div class="backdrop" aria-hidden="true">
      <svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" focusable="false">
        <g class="backdrop__links">
          <path d="M150 220 330 120 470 300 640 170 820 280 1010 150" />
          <path d="M470 300 300 430 640 450 950 430 820 280" />
          <path d="M640 170 640 450M330 120 300 430M150 220 470 300" />
        </g>

        <g class="backdrop__nodes">
          <circle cx="150" cy="220" r="4.5" />
          <circle cx="330" cy="120" r="5.5" />
          <circle cx="470" cy="300" r="4.5" />
          <circle cx="640" cy="170" r="6" />
          <circle cx="820" cy="280" r="4.5" />
          <circle cx="1010" cy="150" r="5" />
          <circle cx="300" cy="430" r="5" />
          <circle cx="640" cy="450" r="4.5" />
          <circle cx="950" cy="430" r="5.5" />
        </g>

        <g class="backdrop__trend">
          <path d="M80 610 240 555 400 585 560 495 720 530 880 430 1120 370" />
        </g>

        <g class="backdrop__bars">
          <rect x="900" y="640" width="14" height="60" />
          <rect x="928" y="615" width="14" height="85" />
          <rect x="956" y="655" width="14" height="45" />
          <rect x="984" y="600" width="14" height="100" />
          <rect x="1012" y="630" width="14" height="70" />
        </g>

        <g class="backdrop__dots">
          <circle cx="220" cy="360" r="2.6" />
          <circle cx="360" cy="230" r="2" />
          <circle cx="520" cy="180" r="2.4" />
          <circle cx="560" cy="380" r="2" />
          <circle cx="700" cy="320" r="2.6" />
          <circle cx="760" cy="140" r="2.2" />
          <circle cx="860" cy="370" r="2.4" />
          <circle cx="1080" cy="260" r="2" />
          <circle cx="1100" cy="520" r="2.6" />
          <circle cx="420" cy="500" r="2.2" />
          <circle cx="180" cy="500" r="2" />
          <circle cx="780" cy="560" r="2.4" />
        </g>
      </svg>
    </div>
  `,
  styles: `
    :host {
      position: absolute;
      z-index: 0;
      inset: 0;
      display: block;
      overflow: hidden;
      pointer-events: none;
    }

    .backdrop {
      position: absolute;
      inset: 0;
      opacity: 0.75;
      -webkit-mask-image: linear-gradient(
        180deg,
        transparent,
        #000 14%,
        #000 86%,
        transparent
      );
      mask-image: linear-gradient(180deg, transparent, #000 14%, #000 86%, transparent);
    }

    .backdrop::before {
      position: absolute;
      inset: -15%;
      background-image:
        linear-gradient(to right, color-mix(in srgb, var(--primary) 16%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary) 16%, transparent) 1px, transparent 1px);
      background-size: 64px 64px;
      opacity: 0.5;
      content: '';
      animation: db-drift 30s linear infinite;
    }

    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .backdrop__links path {
      fill: none;
      stroke: color-mix(in srgb, var(--primary) 55%, transparent);
      stroke-width: 1.1;
      stroke-dasharray: 4 10;
      animation: db-dash 12s linear infinite;
    }

    .backdrop__nodes circle {
      fill: var(--surface);
      stroke: color-mix(in srgb, var(--primary) 75%, transparent);
      stroke-width: 1.6;
      transform-box: fill-box;
      transform-origin: center;
      animation: db-pulse 4.5s ease-in-out infinite;
    }

    .backdrop__nodes circle:nth-child(2n) {
      animation-delay: -1.5s;
    }

    .backdrop__nodes circle:nth-child(3n) {
      animation-delay: -3s;
    }

    .backdrop__trend path {
      fill: none;
      stroke: color-mix(in srgb, var(--accent) 70%, transparent);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 1400;
      stroke-dashoffset: 1400;
      animation: db-draw 9s ease-in-out infinite;
    }

    .backdrop__bars rect {
      fill: color-mix(in srgb, var(--primary) 32%, transparent);
      transform-box: fill-box;
      transform-origin: bottom;
      animation: db-grow 7s ease-in-out infinite alternate;
    }

    .backdrop__bars rect:nth-child(2n) {
      animation-delay: -2s;
    }

    .backdrop__bars rect:nth-child(3n) {
      animation-delay: -4s;
    }

    .backdrop__dots circle {
      fill: color-mix(in srgb, var(--accent) 65%, transparent);
      transform-box: fill-box;
      transform-origin: center;
      animation: db-float 9s ease-in-out infinite;
    }

    .backdrop__dots circle:nth-child(2n) {
      animation-delay: -2.5s;
    }

    .backdrop__dots circle:nth-child(3n) {
      animation-delay: -5s;
    }

    @keyframes db-drift {
      to {
        transform: translate3d(64px, 64px, 0);
      }
    }

    @keyframes db-dash {
      to {
        stroke-dashoffset: -140;
      }
    }

    @keyframes db-pulse {
      0%,
      100% {
        opacity: 0.55;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.45);
      }
    }

    @keyframes db-draw {
      0% {
        stroke-dashoffset: 1400;
      }
      55%,
      100% {
        stroke-dashoffset: 0;
      }
    }

    @keyframes db-grow {
      from {
        transform: scaleY(0.55);
      }
      to {
        transform: scaleY(1);
      }
    }

    @keyframes db-float {
      0%,
      100% {
        opacity: 0.35;
        transform: translateY(0);
      }
      50% {
        opacity: 0.9;
        transform: translateY(-10px);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBackdrop {}
