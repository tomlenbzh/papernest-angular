import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectActions, selectColor, selectCounter, selectIncrement } from './counter.selectors';
import * as CounterActions from './counter.actions';

@Injectable({
  providedIn: 'root'
})
export class CounterHelper {
  constructor(private store: Store<AppState>) {}

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

  incrementCounter(counter: number, increment: number, actions: number): void {
    this.store.dispatch(CounterActions.IncrementCounter({ counter, increment, actions }));
  }

  decrementCounter(counter: number, increment: number, actions: number): void {
    this.store.dispatch(CounterActions.IncrementCounter({ counter, increment, actions }));
  }
}
