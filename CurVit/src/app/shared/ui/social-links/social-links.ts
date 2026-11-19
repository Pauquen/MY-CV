import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { SocialLink } from '../../../core/models/cv.models';
import { Icon } from '../icon/icon';

/** Lista de enlaces sociales reutilizable (contacto y pie de página). */
@Component({
  selector: 'app-social-links',
  imports: [Icon],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinks {
  readonly links = input.required<SocialLink[]>();
  readonly showLabels = input(false);
}
