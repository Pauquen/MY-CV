import { ChangeDetectionStrategy, Component, input, signal, inject } from '@angular/core';
import type { Project } from '../../../core/models/cv.models';
import { LanguageService } from '../../../core/i18n/language.service';
import { Icon } from '../icon/icon';

/** Tarjeta reutilizable para un proyecto. */
@Component({
  selector: 'app-project-card',
  imports: [Icon],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly imageFailed = signal(false);
  private readonly i18n = inject(LanguageService);

  get copy() {
    return this.i18n.content();
  }

  get statusLabel(): string {
    return this.i18n.content().ui.projectStatus[this.project().status];
  }
}
