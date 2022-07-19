import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNullOrUndefined } from '@utils/functions/check-has-null-values';

@Component({
  selector: 'papernest-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})
export class DownComponent {
  @Input() counter!: number | null;
  @Input() increment!: number | null;
  @Input() actions!: number | null;
  @Input() color!: string | null;

  @Output() decremented: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Emits to the parent container that the counter should be decremented.
   */
  decrementCounter(): void {
    if (
      isNullOrUndefined(this.counter) ||
      isNullOrUndefined(this.increment) ||
      isNullOrUndefined(this.color) ||
      isNullOrUndefined(this.actions)
    ) {
      return;
    }

    this.decremented.emit();
  }
}
