import React, { useState, useEffect } from "react";
import productData from "./product.json";
import Model from "./Model";
import AddProductModal from "./AddProductModal";

const ProductPage = () => {
  useEffect(() => {
    const savedProducts = localStorage.getItem("product");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setFilteredProducts(JSON.parse(savedProducts)); // Initialize filteredProducts with the same value as products
    } else {
      localStorage.setItem("product", JSON.stringify(productData));
      setProducts(productData);
      setFilteredProducts(productData); // Initialize filteredProducts with the same value as products
    }
  }, []);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();
    setSearchTerm(value);
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.stockQuantity.toString().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
  };

  const handleSave = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    setSelectedProduct(null);
  };

  const handleAdd = (newProduct) => {
    const updatedProducts = [{ ...newProduct, id: Date.now() }, ...products];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    setShowAddModal(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-semibold mb-4">Product Management</h1>
        <div className="my-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="ml-4 px-4 py-2  text-white rounded-md hover:bg-green-600"
          >
            <img className="w-12" src="./add.png" alt="" />
          </button>
        </div>
        <div className="overflow-x-auto pl-5 pr-5">
          <table className="min-w-full border-collapse lg:table hidden bg-white">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-gray-500 text-xl">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-500 text-xl">
                  Category
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-500 text-xl">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-500 text-xl">
                  Stock Quantity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-gray-500 text-xl">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ${product.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {product.stockQuantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                    >
                      <img className="w-6" src="./pen.png" alt="Edit" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      <img className="w-6" src="./bin.png" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-lg p-4 bg-white text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  Category: {product.category}
                </p>
                <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                <p className="text-gray-600 mb-2">
                  Stock Quantity: {product.stockQuantity}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                  >
                    <img className="w-6" src="./pen.png" alt="Edit" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    <img className="w-6" src="./bin.png" alt="Delete" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <Model
            product={selectedProduct}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        )}
        {showAddModal && (
          <AddProductModal onAdd={handleAdd} onClose={handleCloseModal} />
        )}
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex">
            <p>&copy; 2024 Your Company &#8226;</p>
            <p>All rights reserved.</p>
          </div>
          <div>
            <div className="text-gray-300 hover:text-white mr-4">About Us</div>
            <div className="text-gray-300 hover:text-white">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
