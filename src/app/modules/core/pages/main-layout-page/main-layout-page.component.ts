import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterHelper } from '@store/counter/counter.helper';
import { PAPERNEST_LOCALSTORAGE_STATE_KEY } from '@utils/constants/localstorage';
import { getFromlocalstorage } from '@utils/functions/manage-localstorage';
import { CounterState } from '@utils/models/counter-state.interface';

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
    this.presetState();

    this.counter$ = this.counterHelper.counter();
    this.increment$ = this.counterHelper.increment();
    this.actions$ = this.counterHelper.actions();
    this.color$ = this.counterHelper.color();
  }

  /**
   * Fetches data from localstorage and if it exists, forces the state value.
   */
  private presetState(): void {
    const storageValue: string | null = getFromlocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY);

    if (storageValue) {
      const state: CounterState = JSON.parse(storageValue);
      this.counterHelper.presetState(state);
    }
  }
}
