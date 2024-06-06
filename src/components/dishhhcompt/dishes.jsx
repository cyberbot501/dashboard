import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';  // Adjust the path based on your project structure
import AddItemForm from '../AddItemForm';
import ItemList from '../ItemList';

const Dishes = () => {
  return (
    <Provider store={store}>
      <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] pl-[360px] bg-[#E1E1E1] pr-[1px]">
        <ItemList />
        <AddItemForm />
      </div>
    </Provider>
  );
};

export default Dishes;
