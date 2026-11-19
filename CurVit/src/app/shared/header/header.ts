import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  OnDestroy,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from '../../core/i18n/language.service';
import { Themetoggle } from '../themetoggle/themetoggle';
import { Icon } from '../ui/icon/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Themetoggle, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnDestroy {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly i18n = inject(LanguageService);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('inicio');
  readonly logoFailed = signal(false);

  private observer?: IntersectionObserver;

  get links() {
    return this.i18n.content().nav;
  }

  get copy() {
    return this.i18n.content();
  }

  constructor() {
    afterNextRender(() => {
      this.onWindowScroll();

      /*
       * La primera navegación del router termina después del primer render,
       * así que las secciones pueden no existir todavía cuando corre
       * `afterNextRender`. Volvemos a observar en cada NavigationEnd.
       */
      this.router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => this.observeSections());

      this.observeSections();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  /**
   * Marca en el menú la sección que está en el centro de la pantalla.
   * El `rootMargin` recorta la parte superior e inferior para que el cambio
   * ocurra cuando la sección cruza la zona visible.
   */
  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const ids = ['inicio', ...this.links.map((link) => link.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    // Si ya había un observer (por ejemplo tras navegar), lo reemplazamos.
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.activeSection.set(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }
}
