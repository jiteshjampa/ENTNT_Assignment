import React, { useState } from "react";

const AddOrderModel = ({ onClose, onAdd }) => {
  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("");

  const handleAddOrder = () => {
    if (!orderId || !customerName || !orderDate || !status) {
      alert("Please fill in all fields.");
      return;
    }
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      orderId,
      customerName,
      orderDate,
      status,
    };
    onAdd(newOrder);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Order</h2>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="date"
          placeholder="Order Date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="Shipped">Shipped</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={handleAddOrder}
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

export default AddOrderModel;
