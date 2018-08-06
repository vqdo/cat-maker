import { CatAppearance } from '../index';

export const ADD_CAT = '[cats] ADD_CAT';
export type ADD_CAT = typeof ADD_CAT;

export const REMOVE_CAT = '[cats] REMOVE_CAT';
export type REMOVE_CAT = typeof REMOVE_CAT;

export const INCREASE_HUNGER = '[cats] INCREASE_HUNGER';
export type INCREASE_HUNGER = typeof INCREASE_HUNGER;

export const DECREASE_HUNGER = '[cats] DECREASE_HUNGER';
export type DECREASE_HUNGER = typeof DECREASE_HUNGER;

export interface AddCat {
  type: ADD_CAT,
  payload: {
    name: string,
    appearance: CatAppearance,
  },
}

export interface RemoveCat {
  type: REMOVE_CAT,
  payload: {
    id: string,
  },
}

export interface IncreaseHunger {
  type: INCREASE_HUNGER,
  payload: {
    id: string,
    amount: number,
  },
}

export interface DecreaseHunger {
  type: DECREASE_HUNGER,
  payload: {
    id: string,
    amount: number,
  },
}

export type CatsAction = AddCat | RemoveCat | IncreaseHunger | DecreaseHunger;
