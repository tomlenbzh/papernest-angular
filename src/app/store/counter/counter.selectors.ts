import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { CounterState } from './counter.reducer';

export const counterFeature = (state: AppState) => state.counter;

export const selectCounter = createSelector(counterFeature, (state: CounterState) => state.counter);
export const selectActions = createSelector(counterFeature, (state: CounterState) => state.actions);
export const selectIncrement = createSelector(counterFeature, (state: CounterState) => state.increment);
export const selectColor = createSelector(counterFeature, (state: CounterState) => state.color);
