import { createAction, props } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions-types';

export const IncrementCounter = createAction(CounterActionTypes.INCREMENT_COUNTER);
export const DecrementCounter = createAction(CounterActionTypes.DECREMENT_COUNTER);
export const ResetCounter = createAction(CounterActionTypes.RESET_COUNTER);
export const UpdateIncrement = createAction(CounterActionTypes.UPDATE_INCREMENT, props<{ increment: number }>());
export const UpdateActions = createAction(CounterActionTypes.UPDATE_ACTIONS, props<{ actions: number }>());
export const UpdateColor = createAction(CounterActionTypes.UPDATE_COLOR, props<{ color: string }>());
export const PresetState = createAction(
  CounterActionTypes.PRESET_STATE,
  props<{ counter: number; increment: number; actions: number; color: string }>()
);
