import { createStore, combineReducers } from 'redux';
import itemReducer from './reducers/itemReducer';

const rootReducer = combineReducers({
  items: itemReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;