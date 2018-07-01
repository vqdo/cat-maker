export const ADD_CAT = '[cats] ADD_CAT';
export type ADD_CAT = typeof ADD_CAT;

export const REMOVE_CAT = '[cats] REMOVE_CAT';
export type REMOVE_CAT = typeof REMOVE_CAT;

export interface AddCat {
  type: ADD_CAT,
  payload: {
    name: string,
    hunger: number,
  },
}

export interface RemoveCat {
  type: REMOVE_CAT,
  payload: {
    name: string,
  },
}

export type CatsAction = AddCat | RemoveCat;
