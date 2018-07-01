import {
  ADD_CAT,
  REMOVE_CAT,
  AddCat,
  RemoveCat,
  CatsAction } from './cat.action.models';

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
