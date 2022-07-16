import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterHelper } from 'src/app/store/counter/counter.helper';
import { CounterParams } from 'src/app/utils/models/counter-params.interface';

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

  incrementCounter(): void {
    this.counterHelper.incrementCounter();
  }
}
