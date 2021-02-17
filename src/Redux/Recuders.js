import { initialState } from './State';
import { ADD_ITEM, REMOVE_ITEM } from './Actions';

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_ITEM:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType].filter((item) => item.id !== payload.id)],
      };
    case ADD_ITEM:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };

    default:
      return state;
  }
};
