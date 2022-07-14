import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[papernestBaseButton]'
})
export class BaseButtonDirective {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;
}
