import { ADD_ITEM, TOGGLE_AVAILABILITY, EDIT_ITEM, REMOVE_ITEM } from '../action/itemActions';

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case TOGGLE_AVAILABILITY:
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload ? { ...item, available: !item.available } : item
        ),
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index ? action.payload.updatedItem : item
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;