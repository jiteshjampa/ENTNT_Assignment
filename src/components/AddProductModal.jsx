import React, { useState } from "react";

const AddProductModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const handleAddProduct = () => {
    if (!name) {
      alert("Please fill The name of the new products.");
      return;
    }
    if (!price) {
      alert("Please fill the valid price for the new product.");
      return;
    }
    if (!stockQuantity) {
      alert("Please fill the valid stock quantity for new product.");
      return;
    }
    if (!category) {
      alert("Pease select a category from list");
      return;
    }
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID for the new product
      name,
      category,
      price,
      stockQuantity,
    };
    onAdd(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
        <input
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Stationary">Stationary</option>
          <option value="Home & Office">Home & Office</option>
          <option value="Footwear">Footwear</option>
          <option value="Fitness">Fitness</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Travel">Travel</option>
          <option value="Pets">Pets</option>
          <option value="Home Decor">Home Decor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Furniture">Furniture</option>
          <option value="Sports">Sports</option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Health & Wellness">Health & Wellness</option>
        </select>
        <input
          required
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          required
          type="number"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
