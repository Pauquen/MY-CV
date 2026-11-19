import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ProjectCard } from '../../shared/ui/project-card/project-card';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealDirective, SectionHeader],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly i18n = inject(LanguageService);

  get projects() {
    return this.i18n.content().projects;
  }

  get copy() {
    return this.i18n.content();
  }
}
