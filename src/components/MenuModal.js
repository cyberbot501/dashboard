import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMenuItem } from '../action/menuActions';

const MenuModal = ({ isOpen, onClose }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const availableDishes = useSelector((state) => state.items.items || []);
  const dispatch = useDispatch();

  const handleCheckboxChange = (dish) => {
    setSelectedItems((prev) => {
      if (prev.includes(dish)) {
        return prev.filter((item) => item !== dish);
      } else {
        return [...prev, dish];
      }
    });
  };

  const handleAddToMenu = () => {
    selectedItems.forEach((item) => {
      dispatch(addMenuItem(item));
    });
    setSelectedItems([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl p-6 w-4/5 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Select Dishes to Add to Menu</h2>
        <div className="overflow-y-auto max-h-64 mb-4">
          {availableDishes.map((dish, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(dish)}
                onChange={() => handleCheckboxChange(dish)}
                className="mr-2"
              />
              <span>{dish.foodName}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddToMenu}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;