import { StoreState } from '@store/index';
import { ADD_CAT, REMOVE_CAT, CatsAction } from '@store/cat/actions';

export function cats(state: StoreState, action: CatsAction): StoreState {
  switch (action.type) {
    case ADD_CAT:
      return {
        ...state,
        cats: [ ...state.cats, {
          id: Math.random().toString(36).substr(2, 5),
          fullness: 0,
          ...action.payload,
          appearance: {
            ...action.payload.appearance,
          },
        }],
      };
    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter(cat => cat.id !== action.payload.id),
      };
  }
  return state;
}
