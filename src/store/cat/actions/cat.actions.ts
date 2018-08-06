import * as CatActions from './cat.action.models';
import { CatAppearance } from '../index';

export function addCat(name: string, appearance: CatAppearance): CatActions.AddCat {
  return {
    type: CatActions.ADD_CAT,
    payload: { name, appearance },
  };
}

export function removeCat(id: string): CatActions.RemoveCat {
  return {
    type: CatActions.REMOVE_CAT,
    payload: { id },
  };
}
