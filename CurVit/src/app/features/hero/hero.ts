import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { DataBackdrop } from '../../shared/ui/data-backdrop/data-backdrop';
import { Icon } from '../../shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, DataBackdrop],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly i18n = inject(LanguageService);
  readonly photoFailed = signal(false);

  /** Getters: al leer el signal en la plantilla, el idioma se actualiza solo. */
  get profile() {
    return this.i18n.content().profile;
  }

  get copy() {
    return this.i18n.content();
  }

  onPhotoError(): void {
    this.photoFailed.set(true);
  }
}
