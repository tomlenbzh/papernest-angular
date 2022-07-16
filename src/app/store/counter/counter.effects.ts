import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { CounterActionTypes } from './counter.actions-types';
import { CounterHelper } from './counter.helper';
import { CounterState } from 'src/app/utils/models/counter-state.interface';
import { getPostEffectActions } from 'src/app/utils/functions/counter-post-effects-actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private counterHelper: CounterHelper) {}

  incrementCounter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActionTypes.INCREMENT_COUNTER),
      concatLatestFrom(() => this.counterHelper.state()),
      switchMap((action) => {
        const state: CounterState = action[1];
        return getPostEffectActions(state.counter, state.increment, state.actions, state.color);
      })
    );
  });

  decrementCounter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CounterActionTypes.DECREMENT_COUNTER),
      concatLatestFrom(() => this.counterHelper.state()),
      switchMap((action) => {
        const state: CounterState = action[1];
        return getPostEffectActions(state.counter, state.increment, state.actions, state.color);
      })
    );
  });
}
