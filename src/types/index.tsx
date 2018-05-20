import { Cat } from './cat';

export interface StoreState {
  cats: Cat[],
}

export { Cat };

export { ADD_CAT, REMOVE_CAT } from './actions';
