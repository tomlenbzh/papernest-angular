import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterHelper } from '@store/counter/counter.helper';

@Component({
  selector: 'papernest-up-page',
  templateUrl: './up-page.component.html',
  styleUrls: ['./up-page.component.scss']
})
export class UpPageComponent implements OnInit {
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
   * Increases the counter's value.
   */
  incrementCounter(): void {
    this.counterHelper.incrementCounter();
  }
}
