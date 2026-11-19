import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { SocialLinks } from '../../shared/ui/social-links/social-links';

@Component({
  selector: 'app-contact',
  imports: [Icon, RevealDirective, SectionHeader, SocialLinks],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact implements OnDestroy {
  private readonly i18n = inject(LanguageService);

  readonly copied = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  get profile() {
    return this.i18n.content().profile;
  }

  get copy() {
    return this.i18n.content();
  }

  /** Abre el diálogo de impresión: el CV se puede guardar como PDF. */
  downloadCv(): void {
    window.print();
  }

  /** Copia el correo al portapapeles y muestra una confirmación breve. */
  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      // Si el navegador bloquea el portapapeles, el enlace mailto sigue disponible.
      this.copied.set(false);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
