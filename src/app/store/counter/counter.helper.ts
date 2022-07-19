import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@store/index';
import { selectActions, selectColor, selectCounter, selectIncrement, selectState } from './counter.selectors';
import * as CounterActions from './counter.actions';
import { CounterState } from '@utils/models/counter-state.interface';

@Injectable({
  providedIn: 'root'
})
export class CounterHelper {
  constructor(private store: Store<AppState>) {}

  /**
   * Returns an observable with the current state value.
   *
   * @returns     { Observable<CounterState> }
   */
  state(): Observable<CounterState> {
    return this.store.pipe(select(selectState));
  }

  /**
   * Returns an observable with the current counter value.
   *
   * @returns     { Observable<number> }
   */
  counter(): Observable<number> {
    return this.store.pipe(select(selectCounter));
  }

  /**
   * Returns an observable with the current increment value.
   *
   * @returns     { Observable<number> }
   */
  increment(): Observable<number> {
    return this.store.pipe(select(selectIncrement));
  }

  /**
   * Returns an observable with the current actions value.
   *
   * @returns     { Observable<number> }
   */
  actions(): Observable<number> {
    return this.store.pipe(select(selectActions));
  }

  /**
   * Returns an observable with the current color value.
   *
   * @returns     { Observable<number> }
   */
  color(): Observable<string> {
    return this.store.pipe(select(selectColor));
  }

  /**
   * Increases the counter value by x.
   */
  incrementCounter(): void {
    this.store.dispatch(CounterActions.IncrementCounter());
  }

  /**
   * Decreases the counter value by x.
   */
  decrementCounter(): void {
    this.store.dispatch(CounterActions.DecrementCounter());
  }

  /**
   * Forces the value of the state.
   *
   * @param     { CounterState }      state
   */
  presetState(state: CounterState): void {
    const { counter, increment, actions, color } = state;
    this.store.dispatch(CounterActions.PresetState({ counter, increment, actions, color }));
  }

  /**
   * Resets the state.
   */
  resetCounter(): void {
    this.store.dispatch(CounterActions.ResetCounter());
  }
}
