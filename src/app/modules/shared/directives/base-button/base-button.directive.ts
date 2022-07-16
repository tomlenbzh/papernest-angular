import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[papernestBaseButton]'
})
export class BaseButtonDirective {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();

  onClick(): void {
    this.clicked.emit();
  }
}
