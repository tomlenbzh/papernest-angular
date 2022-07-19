import { Component } from '@angular/core';
import { CounterHelper } from 'src/app/store/counter/counter.helper';

@Component({
  selector: 'papernest-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.scss']
})
export class ResetPageComponent {
  constructor(private counterHelper: CounterHelper) {}

  resetCounter(): void {
    this.counterHelper.resetCounter();
  }
}
