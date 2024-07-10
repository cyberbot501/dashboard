import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  item: itemReducer,
  menu: menuReducer,
});

export default rootReducer;