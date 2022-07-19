import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectActions, selectColor, selectCounter, selectIncrement, selectState } from './counter.selectors';
import * as CounterActions from './counter.actions';
import { CounterState } from 'src/app/utils/models/counter-state.interface';

@Injectable({
  providedIn: 'root'
})
export class CounterHelper {
  constructor(private store: Store<AppState>) {}

  /**
   * State getter helper methods.
   */

  state(): Observable<CounterState> {
    return this.store.pipe(select(selectState));
  }

  counter(): Observable<number> {
    return this.store.pipe(select(selectCounter));
  }

  increment(): Observable<number> {
    return this.store.pipe(select(selectIncrement));
  }

  actions(): Observable<number> {
    return this.store.pipe(select(selectActions));
  }

  color(): Observable<string> {
    return this.store.pipe(select(selectColor));
  }

  /**
   * State management helper methods.
   */

  incrementCounter(): void {
    this.store.dispatch(CounterActions.IncrementCounter());
  }

  decrementCounter(): void {
    this.store.dispatch(CounterActions.DecrementCounter());
  }

  presetState(state: CounterState): void {
    const { counter, increment, actions, color } = state;
    this.store.dispatch(CounterActions.PresetState({ counter, increment, actions, color }));
  }

  resetCounter(): void {
    this.store.dispatch(CounterActions.ResetCounter());
  }
}
