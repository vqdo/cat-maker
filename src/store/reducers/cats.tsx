import { ADD_CAT, REMOVE_CAT, StoreState } from '@app-types/index';
import { CatsAction } from '@store/actions';

export function cats(state: StoreState, action: CatsAction): StoreState {
  switch (action.type) {
    case ADD_CAT:
      return { ...state,
        cats: [ ...state.cats,
          {
            ...action.payload,
          }
        ],
      };
    case REMOVE_CAT:
      return { ...state,
        cats: state.cats.filter(cat => cat.name !== action.payload.name),
      };
  }
  return state;
}
