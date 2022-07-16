import { TypedAction } from '@ngrx/store/src/models';
import { CounterActionTypes } from 'src/app/store/counter/counter.actions-types';

export type UpdateColorType =
  | ({
      color: string;
    } & TypedAction<CounterActionTypes.UPDATE_COLOR>)
  | null;

export type UpdateIncrementType =
  | ({
      increment: number;
    } & TypedAction<CounterActionTypes.UPDATE_INCREMENT>)
  | null;
