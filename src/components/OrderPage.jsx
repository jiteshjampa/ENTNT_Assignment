import React, { useState, useEffect } from "react";
import orderData from "./order.json";
import OrderModel from "./OrderModel";
import AddOrderModel from "./AddOrderModel";

const OrderPage = () => {
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
      setFilteredOrders(JSON.parse(savedOrders)); // Initialize filteredOrders with the same value as orders
    } else {
      localStorage.setItem("orders", JSON.stringify(orderData));
      setOrders(orderData);
      setFilteredOrders(orderData); // Initialize filteredOrders with the same value as orders
    }
  }, []);

  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();
    setSearchTerm(value);
    if (searchTerm === "") {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter(
        (order) =>
          order.orderId.toLowerCase().includes(searchTerm) ||
          order.customerName.toLowerCase().includes(searchTerm) ||
          order.status.toLowerCase().includes(searchTerm)
      );
      setFilteredOrders(filtered);
    }
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
  };

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleSave = (editedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.id === editedOrder.id ? editedOrder : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setSelectedOrder(null);
  };

  const handleAdd = (newOrder) => {
    const updatedOrders = [{ ...newOrder, id: Date.now() }, ...orders];
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setShowAddModal(false);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-semibold mb-4">Order Management</h1>
        <div className="my-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search orders..."
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

        {/* Responsive rendering */}
        {filteredOrders.length > 0 ? (
          <div className="">
            {/* Render as card box on small screens */}
            <div className="sm:block pl-5 pr-5 lg:hidden">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-300 rounded-lg p-4 bg-white text-center mt-5"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {order.customerName}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Order ID: {order.orderId}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Order Date: {order.orderDate}
                  </p>
                  <p className="px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Shipped"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Delivered"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Pending"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <button
                    onClick={() => handleEdit(order)}
                    className="mt-2 mr-2 px-4 py-2 text-sky-600 rounded-md hover:bg-blue-600 hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="mt-2 mr-2 px-4 py-2 text-red-500 rounded-md hover:bg-red-600 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Render as table on large screens */}
            <table className="min-w-full w-full divide-y divide-gray-200 hidden lg:table">
              <thead className="bg-gray-50 border-4">
                <tr>
                  <th className="px-4 py-3">Customer Name</th>
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Order Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-3">{order.customerName}</td>
                    <td className="px-4 py-3">{order.orderId}</td>
                    <td className="px-4 py-3">{order.orderDate}</td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "Shipped"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Delivered"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Pending"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleEdit(order)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-600">No orders found.</div>
        )}

        {selectedOrder && (
          <OrderModel
            order={selectedOrder}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        )}
        {showAddModal && (
          <AddOrderModel onAdd={handleAdd} onClose={handleCloseModal} />
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

export default OrderPage;
