import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { Icon } from '../ui/icon/icon';
import { Modal } from '../ui/modal/modal';
import { SocialLinks } from '../ui/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, Modal, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly i18n = inject(LanguageService);
  readonly year = new Date().getFullYear();
  readonly privacyOpen = signal(false);

  get profile() {
    return this.i18n.content().profile;
  }

  get links() {
    return this.i18n.content().nav;
  }

  get copy() {
    return this.i18n.content();
  }
}
