import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import type { Credential, CredentialKind } from '../../core/models/cv.models';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CredentialCard } from '../../shared/ui/credential-card/credential-card';
import { Icon } from '../../shared/ui/icon/icon';
import { Modal } from '../../shared/ui/modal/modal';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

type Filter = 'all' | CredentialKind;

@Component({
  selector: 'app-credentials',
  imports: [CredentialCard, Icon, Modal, RevealDirective, SectionHeader],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Credentials {
  private readonly i18n = inject(LanguageService);

  readonly filter = signal<Filter>('all');
  readonly selected = signal<Credential | null>(null);

  get credentials() {
    return this.i18n.content().credentials;
  }

  get copy() {
    return this.i18n.content();
  }

  /** Etiquetas del filtro según el idioma activo. */
  readonly filters = computed(() => {
    const labels = this.i18n.content().ui.filters;
    return [
      { value: 'all' as Filter, label: labels.all },
      { value: 'certification' as Filter, label: labels.certification },
      { value: 'activity' as Filter, label: labels.activity },
    ];
  });

  /** Lista visible según el filtro activo. */
  readonly visible = computed(() => {
    const current = this.filter();
    return current === 'all'
      ? this.credentials
      : this.credentials.filter((item) => item.kind === current);
  });

  kindLabel(kind: CredentialKind): string {
    return this.i18n.content().ui.credentialKind[kind];
  }

  setFilter(value: Filter): void {
    this.filter.set(value);
  }

  openDetail(credential: Credential): void {
    this.selected.set(credential);
  }

  closeDetail(): void {
    this.selected.set(null);
  }
}
