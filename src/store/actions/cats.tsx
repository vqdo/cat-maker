import { ADD_CAT, REMOVE_CAT } from '@app-types/actions';

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

export function addCat(name: string, hunger: number = 0): AddCat {
  return {
    type: ADD_CAT,
    payload: { name, hunger },
  };
}

export function removeCat(name: string): RemoveCat {
  return {
    type: REMOVE_CAT,
    payload: { name },
  };
}
