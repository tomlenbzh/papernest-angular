import { BgColors } from '../constants/bg-colors';
import * as CounterActions from '../../store/counter/counter.actions';
import { UpdateColorType, UpdateIncrementType } from '../models/counter-post-actions-types';

/**
 * Returns an array of actions to be executed after the counter was incremented / decremented.
 *
 * @param       { number }      counter
 * @param       { number }      increment
 * @param       { number }      actions
 * @param       { string }      color
 * @returns     { any[] }
 */
export const getPostEffectActions = (counter: number, increment: number, actions: number, color: string): any[] => {
  let newActions = [];

  const updateColorAction: UpdateColorType = getUpdateColorAction(counter, color);
  const updateIncrementAction: UpdateIncrementType = getUpdateIncrementAction(increment, actions);

  updateColorAction && newActions.push(updateColorAction);
  updateIncrementAction && newActions.push(updateIncrementAction);

  return newActions;
};

/**
 * Returns an action to multiply the increment coefficient by 2 when the number of actions reaches 30.
 *
 * @param       { number }      increment
 * @param       { number }      actions
 * @returns     { UpdateColorType }
 */
export const getUpdateIncrementAction = (increment: number, actions: number): UpdateIncrementType => {
  return actions === 30 ? CounterActions.UpdateIncrement({ increment: increment * 2 }) : null;
};

/**
 * Returns an action to update the state's color regarding the current value of the counter.
 *
 * @param       { number }      counter
 * @param       { string }      color
 * @returns     { UpdateColorType }
 */
export const getUpdateColorAction = (counter: number, color: string): UpdateColorType => {
  if (counter >= 10 && color !== BgColors.RED) return CounterActions.UpdateColor({ color: BgColors.RED });
  if (counter <= -10 && color !== BgColors.GREEN) return CounterActions.UpdateColor({ color: BgColors.GREEN });
  if (counter < 10 && counter > -10 && color !== BgColors.WHITE)
    return CounterActions.UpdateColor({ color: BgColors.WHITE });

  return null;
};
