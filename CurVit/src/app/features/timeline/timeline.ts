import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import type { TimelineKind } from '../../core/models/cv.models';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-timeline',
  imports: [RevealDirective, Icon, SectionHeader],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timeline {
  private readonly i18n = inject(LanguageService);

  get items() {
    return this.i18n.content().timeline;
  }

  get copy() {
    return this.i18n.content();
  }

  kindLabel(kind: TimelineKind): string {
    return this.i18n.content().ui.timelineKind[kind];
  }
}
