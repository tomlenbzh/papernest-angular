import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterHelper } from '@store/counter/counter.helper';

@Component({
  selector: 'papernest-down-page',
  templateUrl: './down-page.component.html',
  styleUrls: ['./down-page.component.scss']
})
export class DownPageComponent implements OnInit {
  counter$!: Observable<number>;
  increment$!: Observable<number>;
  actions$!: Observable<number>;
  color$!: Observable<string>;

  constructor(private counterHelper: CounterHelper) {}

  ngOnInit(): void {
    this.counter$ = this.counterHelper.counter();
    this.increment$ = this.counterHelper.increment();
    this.actions$ = this.counterHelper.actions();
    this.color$ = this.counterHelper.color();
  }

  /**
   * Decreases the counter's value.
   */
  decrementCounter(): void {
    this.counterHelper.decrementCounter();
  }
}
