import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SKILL_LEVEL_PERCENT } from '../../core/data/skill-levels';
import { LanguageService } from '../../core/i18n/language.service';
import type { SkillLevel } from '../../core/models/cv.models';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { DataBackdrop } from '../../shared/ui/data-backdrop/data-backdrop';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-skills',
  imports: [DataBackdrop, RevealDirective, Icon, SectionHeader],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  private readonly i18n = inject(LanguageService);

  get groups() {
    return this.i18n.content().skills;
  }

  get copy() {
    return this.i18n.content();
  }

  /** Texto para lectores de pantalla según el nivel. */
  levelLabel(level: SkillLevel): string {
    return this.i18n.content().ui.skillLevel[level];
  }

  /** Porcentaje de la barra, definido en una sola escala. */
  barWidth(level: SkillLevel): number {
    return SKILL_LEVEL_PERCENT[level];
  }
}
