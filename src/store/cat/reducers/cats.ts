import { StoreState } from '@store/index';
import { ADD_CAT, REMOVE_CAT, CatsAction } from '@store/cat/actions';

export function cats(state: StoreState, action: CatsAction): StoreState {
  switch (action.type) {
    case ADD_CAT:
      return {
        ...state,
        cats: [ ...state.cats, {
          name: 'Unnamed Cat',
          hunger: 0,
          ...action.payload,
        }],
      };
    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter(cat => cat.name !== action.payload.name),
      };
  }
  return state;
}
