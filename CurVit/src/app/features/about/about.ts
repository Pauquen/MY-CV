import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, Icon, SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly i18n = inject(LanguageService);

  get profile() {
    return this.i18n.content().profile;
  }

  get copy() {
    return this.i18n.content();
  }
}
