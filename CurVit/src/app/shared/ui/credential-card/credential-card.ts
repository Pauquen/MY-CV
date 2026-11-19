import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import type { Credential } from '../../../core/models/cv.models';
import { LanguageService } from '../../../core/i18n/language.service';
import { Icon } from '../icon/icon';

/** Tarjeta reutilizable para certificados y experiencias. */
@Component({
  selector: 'app-credential-card',
  imports: [Icon],
  templateUrl: './credential-card.html',
  styleUrl: './credential-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialCard {
  readonly credential = input.required<Credential>();
  readonly open = output<Credential>();
  protected readonly imageFailed = signal(false);
  private readonly i18n = inject(LanguageService);

  get copy() {
    return this.i18n.content();
  }

  get kindLabel(): string {
    return this.i18n.content().ui.credentialKind[this.credential().kind];
  }
}
