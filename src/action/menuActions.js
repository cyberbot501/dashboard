export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const REMOVE_MENU_ITEM = 'REMOVE_MENU_ITEM';

export const addMenuItem = (item) => ({
  type: ADD_MENU_ITEM,
  payload: item,
});

export const removeMenuItem = (index) => ({
  type: REMOVE_MENU_ITEM,
  payload: index,
});