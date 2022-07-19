import { createReducer, on } from '@ngrx/store';
import { BgColors } from '@utils/constants/bg-colors';
import { CounterBaseValue, IncrementBaseValue, ActionsBaseValue } from '@utils/constants/counter';
import { PAPERNEST_LOCALSTORAGE_STATE_KEY } from '@utils/constants/localstorage';
import { setToLocalstorage } from '@utils/functions/manage-localstorage';
import { CounterState } from '@utils/models/counter-state.interface';
import * as CounterActions from './counter.actions';

export const initialState: CounterState = {
  counter: CounterBaseValue,
  increment: IncrementBaseValue,
  actions: ActionsBaseValue,
  color: BgColors.WHITE
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.IncrementCounter, (state: CounterState): CounterState => {
    const newState: CounterState = { ...state, counter: state.counter + state.increment, actions: state.actions + 1 };
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.DecrementCounter, (state: CounterState): CounterState => {
    const newState: CounterState = { ...state, counter: state.counter - state.increment, actions: state.actions + 1 };
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.UpdateColor, (state: CounterState, { color }): CounterState => {
    const newState: CounterState = { ...state, color };
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.UpdateIncrement, (state: CounterState, { increment }): CounterState => {
    const newState: CounterState = { ...state, increment, actions: 0 };
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.ResetCounter, (): CounterState => {
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, initialState);
    return initialState;
  }),
  on(CounterActions.PresetState, (state: CounterState, { counter, increment, actions, color }): CounterState => {
    const newState: CounterState = { ...state, counter, increment, actions, color };
    setToLocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  })
);
