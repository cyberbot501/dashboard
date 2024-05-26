import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAvailability, removeItem, editItem } from '../action/itemActions';
import EditItemForm from './EditItemForm';

const ItemList = () => {
  const items = useSelector((state) => state.items.items || []);
  const dispatch = useDispatch();
  const [editingIndex, setEditingIndex] = useState(null);

  const handleToggle = (index) => {
    dispatch(toggleAvailability(index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className=" rounded-lg overflow-hidde  h-[100%]">
            <img src={item.image} alt={item.foodName} className="w-[150px] h-[150px] rounded-[75px] object-cover relative border-[15px] border-white top-[60px] shadow-2xl left-[75px]" />
            <div className="p-4  bg-white rounded pt-[100px]">
              <div className='flex justify-between'>
                <h3 className="text-lg font-bold">{item.foodName}</h3>
                <p className="text-red-700 font-bold">N{item.price}</p>
              </div>
             
              <p className="text-gray-600 text-center mt-[20px] mb-[15px]">{item.description}</p>
             
              
              {/* <p className="text-gray-600">ETA: {item.eta}</p> */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm font-semibold mr-2">
                  {item.available ? 'Available' : 'Not Available'}
                </p>
                <label className="switch mt-2">
                  <input type="checkbox" checked={item.available} onChange={() => handleToggle(index)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className='flex justify-between items-center mt-6'>

                <p className="text-gray-600">Quantity: {item.quantity}</p>

                <div className=" flex justify-center gap-2">
                  <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                  Edit
                  </button>
                  <button onClick={() => handleRemove(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Remove
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      {editingIndex !== null && (
        <EditItemForm 
          item={items[editingIndex]} 
          index={editingIndex} 
          onClose={() => setEditingIndex(null)} 
        />
      )}
    </div>
  );
};

export default ItemList;