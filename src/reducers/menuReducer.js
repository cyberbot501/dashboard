// src/reducers/menuReducer.js
import { ADD_MENU_ITEM, REMOVE_MENU_ITEM } from '../action/menuActions';

const initialState = {
  menuItems: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM:
      return { ...state, menuItems: [...state.menuItems, action.payload] };
    case REMOVE_MENU_ITEM:
      return {
        ...state,
        menuItems: state.menuItems.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default menuReducer;