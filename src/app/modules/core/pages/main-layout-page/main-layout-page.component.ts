import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterHelper } from 'src/app/store/counter/counter.helper';

@Component({
  selector: 'papernest-main-layout-page',
  templateUrl: './main-layout-page.component.html',
  styleUrls: ['./main-layout-page.component.scss']
})
export class MainLayoutPageComponent implements OnInit {
  counter$!: Observable<number | null>;
  increment$!: Observable<number | null>;
  actions$!: Observable<number | null>;
  color$!: Observable<string | null>;

  constructor(private counterHelper: CounterHelper) {}

  ngOnInit(): void {
    this.counter$ = this.counterHelper.counter();
    this.increment$ = this.counterHelper.increment();
    this.actions$ = this.counterHelper.actions();
    this.color$ = this.counterHelper.color();
  }
}
