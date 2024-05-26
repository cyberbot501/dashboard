export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_AVAILABILITY = 'TOGGLE_AVAILABILITY';
export const EDIT_ITEM = 'EDIT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const toggleAvailability = (index) => ({
  type: TOGGLE_AVAILABILITY,
  payload: index,
});

export const editItem = (index, updatedItem) => ({
  type: EDIT_ITEM,
  payload: { index, updatedItem },
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});