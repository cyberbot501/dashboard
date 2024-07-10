import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuModal from '../MenuModal';
import { removeMenuItem } from '../../action/menuActions';

const menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuItems = useSelector((state) => state.menu.menuItems);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveFromMenu = (index) => {
    dispatch(removeMenuItem(index));
  };

  return (
    <div className="border-[1px] h-[100%] min-h-[100vh] w-[100%] pl-[360px] bg-[#E1E1E1] pr-[1px]">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Menu
      </button>
      <MenuModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.foodName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.foodName}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-800 font-bold">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">ETA: {item.eta}</p>
              <button
                onClick={() => handleRemoveFromMenu(index)}
                className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              >
                Remove from Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;