import { createReducer, on } from '@ngrx/store';
import { BgColors } from 'src/app/utils/constants/bg-colors';
import { CounterBaseValue, IncrementBaseValue, ActionsBaseValue } from 'src/app/utils/constants/counter';
import { PAPERNEST_LOCALSTORAGE_STATE_KEY } from 'src/app/utils/constants/localstorage';
import { setTolocalstorage } from 'src/app/utils/functions/manage-localstorage';
import { CounterState } from 'src/app/utils/models/counter-state.interface';
import * as CounterActions from './counter.actions';

export const initialState: CounterState = {
  counter: CounterBaseValue,
  increment: IncrementBaseValue,
  actions: ActionsBaseValue,
  color: BgColors.BG_WHITE
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.IncrementCounter, (state: CounterState): CounterState => {
    const newState: CounterState = { ...state, counter: state.counter + state.increment, actions: state.actions + 1 };
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.DecrementCounter, (state: CounterState): CounterState => {
    const newState: CounterState = { ...state, counter: state.counter - state.increment, actions: state.actions + 1 };
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.UpdateColor, (state: CounterState, { color }): CounterState => {
    const newState: CounterState = { ...state, color };
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.UpdateIncrement, (state: CounterState, { increment }): CounterState => {
    const newState: CounterState = { ...state, increment, actions: 0 };
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  }),
  on(CounterActions.ResetCounter, (): CounterState => {
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, initialState);
    return initialState;
  }),
  on(CounterActions.PresetState, (state: CounterState, { counter, increment, actions, color }): CounterState => {
    const newState: CounterState = { ...state, counter, increment, actions, color };
    setTolocalstorage(PAPERNEST_LOCALSTORAGE_STATE_KEY, newState);
    return newState;
  })
);
