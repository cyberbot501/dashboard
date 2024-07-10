import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../action/itemActions';
import './AddItemForm.css'

const AddItemForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [eta, setEta] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { foodName, description, price, quantity, eta, image, available: true };
    dispatch(addItem(newItem));
    setFoodName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setEta('');
    setImage('');
    setShowForm(false); 
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)} className='border-[1px] border-[#CFCFCF] w-[143px] h-[50px] bg-[#CFCFCF] hover: mb-10'>
        {showForm ? 'Cancel' : 'Add a Dish'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50 p-6">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <div>
              <label>Image:</label>
              <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} className="border p-2 w-full" />
            </div>
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
            
            <button type="submit" className="bg-[#CFCFCF] text-white p-2 rounded mt-4 w-full">Add Item</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddItemForm;