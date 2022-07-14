import { createReducer, on } from '@ngrx/store';
import { BgColors } from 'src/app/utils/constants/bg-colors';
import { CounterBaseValue, IncrementBaseValue, ActionsBaseValue } from 'src/app/utils/constants/counter';
import * as CounterActions from './counter.actions';

export interface CounterState {
  counter: number;
  increment: number;
  actions: number;
  color: string;
}

export const initialState: CounterState = {
  counter: CounterBaseValue,
  increment: IncrementBaseValue,
  actions: ActionsBaseValue,
  color: BgColors.BG_WHITE
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.IncrementCounter, (state: CounterState): CounterState => ({ ...state })),
  on(CounterActions.DecrementCounter, (state: CounterState): CounterState => ({ ...state }))
);
