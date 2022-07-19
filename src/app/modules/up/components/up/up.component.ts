import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNullOrUndefined } from '@utils/functions/check-has-null-values';

@Component({
  selector: 'papernest-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent {
  @Input() counter!: number | null;
  @Input() increment!: number | null;
  @Input() actions!: number | null;
  @Input() color!: string | null;

  @Output() incremented: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Emits to the parent container that the counter should be incremented.
   */
  incrementCounter(): void {
    if (
      isNullOrUndefined(this.counter) ||
      isNullOrUndefined(this.increment) ||
      isNullOrUndefined(this.color) ||
      isNullOrUndefined(this.actions)
    ) {
      return;
    }

    this.incremented.emit();
  }
}
