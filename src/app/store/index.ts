import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterState } from '../utils/models/counter-state.interface';
import { counterReducer } from './counter/counter.reducer';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
