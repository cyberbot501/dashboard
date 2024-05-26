import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../action/itemActions';

const EditItemForm = ({ item, index, onClose }) => {
  const [foodName, setFoodName] = useState(item.foodName);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);
  const [eta, setEta] = useState(item.eta);
  const [image, setImage] = useState(item.image);
  const [available, setAvailable] = useState(item.available);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { foodName, description, price, quantity, eta, image, available };
    dispatch(editItem(index, updatedItem));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50 p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
        <div>
          <label>Food Name:</label>
          <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full"></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label>ETA:</label>
          <input type="text" value={eta} onChange={(e) => setEta(e.target.value)} className="border p-2 w-full" />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} className="border p-2 w-full" />
        </div>
        <div>
          <label>Available:</label>
          <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 w-full">Save Changes</button>
        <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded mt-4 w-full">Cancel</button>
      </div>
    </form>
  );
};

export default EditItemForm;