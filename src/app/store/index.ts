import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
