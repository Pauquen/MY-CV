import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { Icon } from '../icon/icon';

/**
 * Modal accesible basado en <dialog>.
 * - Atrapa el foco de forma nativa.
 * - Cierra con Escape.
 * - Bloquea el scroll del cuerpo mientras está abierto.
 */
@Component({
  selector: 'app-modal',
  imports: [Icon],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(LanguageService);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  private previousOverflow = '';

  readonly open = input(false);
  readonly title = input('');
  readonly closed = output<void>();

  get copy() {
    return this.i18n.content();
  }

  constructor() {
    effect(() => {
      const element = this.dialog()?.nativeElement;
      if (!element) {
        return;
      }

      if (this.open()) {
        if (!element.open) {
          this.previousOverflow = this.document.body.style.overflow;
          this.document.body.style.overflow = 'hidden';
          element.showModal();
        }
      } else if (element.open) {
        element.close();
        this.document.body.style.overflow = this.previousOverflow;
      }
    });
  }

  close(): void {
    this.dialog()?.nativeElement.close();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog()?.nativeElement) {
      this.close();
    }
  }

  onDialogClose(): void {
    this.document.body.style.overflow = this.previousOverflow;
    this.closed.emit();
  }
}
