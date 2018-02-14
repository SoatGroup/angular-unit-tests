import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: '<article (click)="onClick(\'envoi\')">{{ entree }}</article>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {
  @Input() entree: string;
  @Output() envoi = new EventEmitter();
  onClick = valeur => {
      this.envoi.emit(valeur);
  }
}
