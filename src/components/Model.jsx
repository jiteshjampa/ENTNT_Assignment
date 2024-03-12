import React, { useState } from "react";

const Model = ({ product, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Product Name"
        />

        <select
          value={editedProduct.category}
          onChange={handleChange}
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
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Price"
        />
        <input
          type="number"
          name="stockQuantity"
          value={editedProduct.stockQuantity}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          placeholder="Stock Quantity"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 ml-4 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
