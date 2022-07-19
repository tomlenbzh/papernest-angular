import { Component } from '@angular/core';
import { CounterHelper } from '@store/counter/counter.helper';

@Component({
  selector: 'papernest-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.scss']
})
export class ResetPageComponent {
  constructor(private counterHelper: CounterHelper) {}

  /**
   * Resets the counter's value.
   */
  resetCounter(): void {
    this.counterHelper.resetCounter();
  }
}
