import { createAction, props } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions-types';

export const IncrementCounter = createAction(
  CounterActionTypes.INCREMENT_COUNTER,
  props<{
    counter: number;
    increment: number;
    actions: number;
  }>()
);

export const DecrementCounter = createAction(
  CounterActionTypes.DECREMENT_COUNTER,
  props<{
    counter: number;
    increment: number;
    actions: number;
  }>()
);
