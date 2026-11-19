import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

/**
 * "Ahora mismo": foco actual, con pasos en curso y pasos futuros.
 * Es contenido editable desde `content.es.ts` / `content.en.ts`.
 */
@Component({
  selector: 'app-now',
  imports: [Icon, RevealDirective, SectionHeader],
  templateUrl: './now.html',
  styleUrl: './now.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Now {
  private readonly i18n = inject(LanguageService);

  get steps() {
    return this.i18n.content().now.steps;
  }

  get nextSteps() {
    return this.i18n.content().now.nextSteps;
  }

  get copy() {
    return this.i18n.content();
  }
}
