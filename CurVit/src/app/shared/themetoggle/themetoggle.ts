import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../ui/icon/icon';

/** Botón para alternar entre tema claro y oscuro. */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  templateUrl: './themetoggle.html',
  styleUrl: './themetoggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Themetoggle {
  private readonly themeService = inject(ThemeService);

  readonly theme = this.themeService.theme;
  readonly isDark = computed(() => this.theme() === 'dark');
  readonly label = computed(() =>
    this.isDark() ? 'Activar modo claro' : 'Activar modo oscuro',
  );

  toggle(): void {
    this.themeService.toggle();
  }
}
